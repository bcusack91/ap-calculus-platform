import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for pressure, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab report lists the pressure inside a syringe as P = 3.5 kPa. What is this pressure written in newtons per square meter?`,
        options: [r`3.5 N/m²`, r`35 N/m²`, r`3500 N/m²`, r`350 N/m²`],
        correctAnswer: 2,
        explanation: r`One pascal is one newton per square meter, and the prefix kilo means 1000, so 3.5 kPa = 3500 Pa = 3500 N/m². The value 3.5 N/m² ignores the prefix, and 35 N/m² and 350 N/m² use 10 and 100 for kilo.`,
      },
      {
        question: r`A student multiplies a pressure measured in pascals by an area measured in square meters. What unit does the result have?`,
        options: [
          r`N, the unit of a force`,
          r`J, the unit of energy`,
          r`Pa, the unit of pressure`,
          r`kg, the unit of a mass`,
        ],
        correctAnswer: 0,
        explanation: r`A pascal is a newton per square meter, so Pa × m² = (N/m²) × m² = N, a force. A joule would need newtons times meters, the result is no longer a pressure once the area has cancelled, and no kilogram appears on its own.`,
      },
    ],
  },
  [r`What symbol stands for depth in a liquid, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fish holds its position 2.0 m above the bed of a pond whose water is 6.0 m deep. After heavy rain the water level rises by 1.0 m, and the fish does not move. What is the fish's depth, h, after the rain?`,
        options: [r`2.0 m`, r`4.0 m`, r`7.0 m`, r`5.0 m`],
        correctAnswer: 3,
        explanation: r`Depth is measured straight down from the surface. The surface is now 7.0 m above the bed and the fish is 2.0 m above the bed, so h = 7.0 − 2.0 = 5.0 m. The value 4.0 m uses the old surface, 2.0 m is the height above the bed, and 7.0 m is the depth of the whole pond.`,
      },
      {
        question: r`A dye marker sits 45 cm straight below the surface of the water in a tank. What value of h, in the SI unit of depth, belongs in the depth equation for the marker?`,
        options: [r`45 m`, r`0.45 m`, r`4.5 m`, r`0.045 m`],
        correctAnswer: 1,
        explanation: r`The SI unit of depth is the meter, and 100 cm = 1 m, so 45 cm = 0.45 m. Writing 45 m leaves the number in centimeters, while 4.5 m and 0.045 m divide by 10 and by 1000 instead of by 100.`,
      },
    ],
  },
  [r`Write pressure as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An elephant that weighs 48 000 N stands still with its weight spread evenly over four feet, each with a contact area of 0.12 m². What pressure does the elephant put on the ground?`,
        options: [r`1.0 × 10⁵ Pa`, r`4.0 × 10⁵ Pa`, r`2.3 × 10⁴ Pa`, r`5.8 × 10³ Pa`],
        correctAnswer: 0,
        explanation: r`The total area is 4 × 0.12 = 0.48 m², so P = F/A = 48 000 ÷ 0.48 = 1.0 × 10⁵ Pa. Using one foot's area gives 4.0 × 10⁵ Pa, and the two smaller values come from multiplying the weight by an area instead of dividing.`,
      },
      {
        question: r`A loaded lab cart weighs 720 N. To protect a soft floor, the pressure under its feet must not go above 2400 Pa. What is the smallest total contact area the feet can have?`,
        options: [r`3.3 m²`, r`0.030 m²`, r`0.30 m²`, r`3.0 m²`],
        correctAnswer: 2,
        explanation: r`Rearranging P = F/A gives A = F/P = 720 ÷ 2400 = 0.30 m². Dividing the pressure by the force gives 3.3, and 0.030 m² and 3.0 m² are slips of a factor of ten in the division.`,
      },
      {
        question: r`A tablet press must put a pressure of 5.0 × 10⁶ Pa on a die face whose area is 2.0 × 10⁻⁴ m². What force must the press apply, perpendicular to the face?`,
        options: [r`2.5 × 10¹⁰ N`, r`1.0 × 10³ N`, r`1.0 × 10² N`, r`1.0 × 10⁴ N`],
        correctAnswer: 1,
        explanation: r`Rearranging P = F/A gives F = PA = (5.0 × 10⁶)(2.0 × 10⁻⁴) = 10 × 10² = 1.0 × 10³ N. Dividing the pressure by the area gives 2.5 × 10¹⁰, and the other two values mishandle the powers of ten: 6 − 4 = 2, with the 10 from 5.0 × 2.0 adding one more.`,
      },
      {
        question: r`A rubber stamp is pushed straight down on paper with a force of 80 N. The stamp's face has an area of 16 cm². What pressure does the stamp put on the paper? (1 cm² = 10⁻⁴ m²)`,
        options: [r`5.0 Pa`, r`5.0 × 10² Pa`, r`1.3 × 10³ Pa`, r`5.0 × 10⁴ Pa`],
        correctAnswer: 3,
        explanation: r`The area is 16 cm² = 1.6 × 10⁻³ m², so P = F/A = 80 ÷ (1.6 × 10⁻³) = 5.0 × 10⁴ Pa. Leaving the area in cm² gives 5.0, converting with 10⁻² gives 5.0 × 10², and 1.3 × 10³ comes from multiplying 80 by 16.`,
      },
      {
        question: r`A clamp is redesigned so that it pushes with 3 times the force through a pad that has half the area of the old pad. By what factor does the pressure under the pad change?`,
        options: [r`It becomes 1.5 times as large`, r`It becomes one sixth as large`, r`It becomes 6 times as large`, r`It becomes 3 times as large`],
        correctAnswer: 2,
        explanation: r`Pressure is P = F/A, so tripling F and halving A gives 3 ÷ (1/2) = 6 times the pressure. A factor of 1.5 multiplies by the one half instead of dividing by it, 3 ignores the change in area, and one sixth inverts the ratio.`,
      },
      {
        question: r`A 60 kg gymnast balances on one hand, which touches the floor over an area of 0.015 m². Using g = 10 m/s², what pressure does the hand put on the floor?`,
        options: [r`4.0 × 10³ Pa`, r`4.0 × 10⁴ Pa`, r`9.0 Pa`, r`4.0 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`The force is the gymnast's weight, mg = 60 × 10 = 600 N, so P = F/A = 600 ÷ 0.015 = 4.0 × 10⁴ Pa. Dividing the mass by the area without g gives 4.0 × 10³, multiplying 600 by 0.015 gives 9.0, and 4.0 × 10⁵ is a slip in the power of ten.`,
      },
    ],
  },
  [r`The same force is applied to a smaller area. What happens to the pressure?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Standing in flat shoes, a skater puts a pressure of 2.5 × 10⁴ Pa on the floor. She changes into skates, and her unchanged weight now rests on blades with one fiftieth of the contact area. What pressure do the blades put on the ice?`,
        options: [r`5.0 × 10² Pa`, r`2.5 × 10⁴ Pa`, r`1.25 × 10⁵ Pa`, r`1.25 × 10⁶ Pa`],
        correctAnswer: 3,
        explanation: r`With the same force, one fiftieth of the area gives 50 times the pressure: 50 × 2.5 × 10⁴ = 1.25 × 10⁶ Pa. Dividing by 50 gives 5.0 × 10², leaving the pressure unchanged ignores the area, and 1.25 × 10⁵ uses a factor of 5.`,
      },
      {
        question: r`A kitchen knife is sharpened so that the same push on the handle now produces 20 times the pressure under the edge. How did sharpening change the edge's contact area?`,
        options: [
          r`It became 20 times as large`,
          r`It became one twentieth as large`,
          r`It became one fortieth as large`,
          r`It became one four-hundredth as large`,
        ],
        correctAnswer: 1,
        explanation: r`Since P = F/A with the same force, the pressure is 20 times as large only if the area is one twentieth as large. A larger area would lower the pressure, and one fortieth or one four-hundredth of the area would give 40 or 400 times the pressure.`,
      },
      {
        question: r`A steel punch with a flat round tip is pushed into clay with a fixed force. The tip is then ground down to one third of its diameter and pushed with the same force. What happens to the pressure under the tip?`,
        options: [
          r`It becomes 9 times as large`,
          r`It becomes 3 times as large`,
          r`It becomes 6 times as large`,
          r`It becomes one third as large`,
        ],
        correctAnswer: 0,
        explanation: r`The area of a circle depends on the diameter squared, so one third of the diameter gives one ninth of the area, and with the same force the pressure is 9 times as large. A factor of 3 forgets to square the diameter, 6 doubles it instead of squaring, and one third has the change backward.`,
      },
      {
        question: r`A patient lying flat spreads his weight over 0.60 m² of mattress, and the average pressure on the mattress is 1200 Pa. He sits up, and the same weight now rests on 0.10 m². What is the average pressure on the mattress now?`,
        options: [r`200 Pa`, r`720 Pa`, r`7200 Pa`, r`1200 Pa`],
        correctAnswer: 2,
        explanation: r`The area is one sixth as large with the same force, so the pressure is 6 times as large: 6 × 1200 = 7200 Pa. Dividing by 6 gives 200 Pa, 720 Pa is 1200 × 0.60, and 1200 Pa would need the area to stay the same.`,
      },
      {
        question: r`A force spread evenly over 1.0 cm² produces a pressure of 2.0 × 10³ Pa. The same force is then applied through a pin over an area of 1.0 mm². What pressure does it produce now? (1 cm² = 100 mm²)`,
        options: [r`2.0 × 10⁴ Pa`, r`2.0 × 10⁵ Pa`, r`2.0 × 10¹ Pa`, r`2.0 × 10⁶ Pa`],
        correctAnswer: 1,
        explanation: r`The new area is one hundredth of the old one, so the same force gives 100 times the pressure: 100 × 2.0 × 10³ = 2.0 × 10⁵ Pa. A factor of 10 treats 1 cm as 10 mm without squaring, a factor of 1000 gives 2.0 × 10⁶, and 2.0 × 10¹ divides instead of multiplying.`,
      },
      {
        question: r`An 800 N hiker's boots touch the snow over a total area of 0.050 m², giving a pressure of 16 000 Pa. She straps on snowshoes with a total area of 0.40 m². What pressure does she put on the snow now?`,
        options: [r`2000 Pa`, r`1.28 × 10⁵ Pa`, r`16 000 Pa`, r`320 Pa`],
        correctAnswer: 0,
        explanation: r`The area is 8 times as large with the same weight, so the pressure is one eighth as large: 16 000 ÷ 8 = 2000 Pa, the same as 800 ÷ 0.40. Multiplying by 8 gives 1.28 × 10⁵, 320 comes from 800 × 0.40, and 16 000 Pa ignores the larger area.`,
      },
    ],
  },
  [r`At one point in a fluid at rest, in which directions does the pressure push?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A small hollow glass ball is held at rest 5 m down in still water. Ignoring the small change in depth across the ball, how does the water push on the ball's surface?`,
        options: [
          r`Equally all around, inward at each spot`,
          r`Equally all around, downward at each spot`,
          r`Mostly on the top half, downward on it`,
          r`Mostly on the lower half, upward on it`,
        ],
        correctAnswer: 0,
        explanation: r`Pressure at a point in a fluid at rest pushes equally in every direction, and the force it makes on a surface is perpendicular to that surface, so each spot on the ball is pushed straight inward with the same strength. A push that is downward everywhere, or mostly on one half, treats pressure like a weight that acts in one direction.`,
      },
      {
        question: r`A student writes: "The pressure at this point in the tank of still water is 1.2 × 10⁵ Pa, downward." What is wrong with the statement?`,
        options: [
          r`The direction should be upward, against the weight`,
          r`The direction should be sideways, toward the walls`,
          r`Nothing: pressure points the way the weight does`,
          r`Pressure is a scalar, so it has no one direction`,
        ],
        correctAnswer: 3,
        explanation: r`Pressure is a scalar: one number at each point, pushing equally in every direction. A direction only appears for the force on a surface, which acts perpendicular to that surface. Calling the pressure upward, sideways or downward each gives it a single direction it does not have.`,
      },
    ],
  },
  [r`What is the total pressure at a depth $h$ below the surface of a liquid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An open dish holds mercury of density 13 600 kg/m³. The air above is at 1.0 × 10⁵ Pa, and g = 10 m/s². What is the total pressure at a point 0.25 m below the mercury's surface?`,
        options: [r`3.4 × 10⁴ Pa`, r`1.34 × 10⁵ Pa`, r`1.034 × 10⁵ Pa`, r`4.4 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`The mercury adds ρgh = (13 600)(10)(0.25) = 3.4 × 10⁴ Pa, so P = 1.0 × 10⁵ + 0.34 × 10⁵ = 1.34 × 10⁵ Pa. The value 3.4 × 10⁴ leaves out the air, 1.034 × 10⁵ leaves out g, and 4.4 × 10⁵ adds 1.0 and 3.4 without matching the powers of ten.`,
      },
      {
        question: r`An open tank holds oil of density 800 kg/m³ under air at 1.0 × 10⁵ Pa. A sensor in the oil reads a total pressure of 1.2 × 10⁵ Pa. Using g = 10 m/s², how far below the oil's surface is the sensor?`,
        options: [r`2.5 m`, r`15 m`, r`25 m`, r`2.0 m`],
        correctAnswer: 0,
        explanation: r`The oil adds 1.2 × 10⁵ − 1.0 × 10⁵ = 2.0 × 10⁴ Pa, so h = (2.0 × 10⁴) ÷ (800 × 10) = 2.5 m. Dividing the whole 1.2 × 10⁵ Pa by ρg gives 15 m, leaving out g gives 25 m, and 2.0 m uses the density of water.`,
      },
      {
        question: r`In an open vat, the total pressure 5.0 m below the liquid's surface is 1.6 × 10⁵ Pa. The air above is at 1.0 × 10⁵ Pa, and g = 10 m/s². What is the density of the liquid?`,
        options: [r`3200 kg/m³`, r`12 000 kg/m³`, r`2000 kg/m³`, r`1200 kg/m³`],
        correctAnswer: 3,
        explanation: r`The liquid adds 1.6 × 10⁵ − 1.0 × 10⁵ = 6.0 × 10⁴ Pa, so ρ = (6.0 × 10⁴) ÷ (10 × 5.0) = 1200 kg/m³. Using the whole 1.6 × 10⁵ Pa gives 3200, using the air's 1.0 × 10⁵ Pa gives 2000, and leaving out g gives 12 000.`,
      },
      {
        question: r`A sealed tank holds water with compressed gas above it. A sensor 3.0 m below the water's surface reads a total pressure of 2.3 × 10⁵ Pa. What is the pressure of the gas on the water's surface? (Water: 1000 kg/m³; g = 10 m/s².)`,
        options: [r`2.6 × 10⁵ Pa`, r`1.0 × 10⁵ Pa`, r`2.0 × 10⁵ Pa`, r`2.27 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`The water adds ρgh = (1000)(10)(3.0) = 0.3 × 10⁵ Pa, so P₀ = 2.3 × 10⁵ − 0.3 × 10⁵ = 2.0 × 10⁵ Pa. Adding the water's part gives 2.6 × 10⁵, leaving out g gives 2.27 × 10⁵, and 1.0 × 10⁵ assumes ordinary air although the tank is sealed.`,
      },
      {
        question: r`A pool of water sits inside a habitat on Mars, where g = 4.0 m/s². The air in the habitat is kept at 5.0 × 10⁴ Pa. What is the total pressure 2.5 m below the water's surface? (Water: 1000 kg/m³.)`,
        options: [r`6.0 × 10⁴ Pa`, r`7.5 × 10⁴ Pa`, r`1.1 × 10⁵ Pa`, r`1.0 × 10⁴ Pa`],
        correctAnswer: 0,
        explanation: r`The water adds ρgh = (1000)(4.0)(2.5) = 1.0 × 10⁴ Pa, so P = 5.0 × 10⁴ + 1.0 × 10⁴ = 6.0 × 10⁴ Pa. Using g = 10 m/s² gives 7.5 × 10⁴, using 1.0 × 10⁵ Pa for the air gives 1.1 × 10⁵, and 1.0 × 10⁴ is the water's part alone.`,
      },
      {
        question: r`A tall open cylinder in a lab holds salt water of density 1200 kg/m³. The air is at 1.0 × 10⁵ Pa, and g = 10 m/s². What is the total pressure 25 cm below the salt water's surface?`,
        options: [r`4.0 × 10⁵ Pa`, r`3.0 × 10³ Pa`, r`1.03 × 10⁵ Pa`, r`1.3 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`With h = 0.25 m, the salt water adds (1200)(10)(0.25) = 3.0 × 10³ Pa, so P = 1.0 × 10⁵ + 0.03 × 10⁵ = 1.03 × 10⁵ Pa. Leaving the depth as 25 gives 4.0 × 10⁵, 3.0 × 10³ leaves out the air, and 1.3 × 10⁵ misplaces the liquid's part by a power of ten.`,
      },
    ],
  },
  [r`Where does the $\rho g h$ term in the depth equation come from?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A vertical column of water has a cross-section of 0.020 m² and a height of 3.0 m. Using 1000 kg/m³ for water and g = 10 m/s², what is the weight of the column, and how much pressure does it add at its base?`,
        options: [
          r`600 N of water, adding 12 Pa at the base`,
          r`60 N of water, adding 3000 Pa at the base`,
          r`600 N of water, adding 30 000 Pa at the base`,
          r`600 N of water, adding 600 Pa at the base`,
        ],
        correctAnswer: 2,
        explanation: r`The weight is ρAhg = (1000)(0.020)(3.0)(10) = 600 N, and dividing by the area it rests on gives 600 ÷ 0.020 = 30 000 Pa, the same as ρgh. Multiplying the weight by the area gives 12, leaving out g gives 60 N and 3000 Pa, and 600 Pa never divides by the area.`,
      },
      {
        question: r`A liquid stands in an upright cylinder and adds 4000 Pa at the base. All of it is poured into a second upright cylinder with twice the cross-sectional area. How much pressure does the liquid add at the base now?`,
        options: [
          r`4000 Pa, since the width of a column never matters`,
          r`2000 Pa, since the same weight rests on twice the area`,
          r`8000 Pa, since the wider column carries more weight`,
          r`1000 Pa, since the weight and the height both halve`,
        ],
        correctAnswer: 1,
        explanation: r`The added pressure is the liquid's weight divided by the area it rests on. The weight is unchanged and the area doubles, so the pressure halves to 2000 Pa; the height has also halved, so ρgh agrees. Width does not matter only when the height stays the same, and the weight here neither grows nor halves.`,
      },
    ],
  },
  [r`What does $P_0$ stand for in $P = P_0 + \rho g h$?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A layer of oil floats on water in an open tank. The air is at 1.0 × 10⁵ Pa, and the oil layer adds 4.0 × 10³ Pa at its lower face. The depth equation is applied to the water alone, with h measured down from the top of the water. What is P₀?`,
        options: [
          r`1.04 × 10⁵ Pa, the air plus the oil layer`,
          r`1.0 × 10⁵ Pa, the air above the open tank`,
          r`4.0 × 10³ Pa, the oil layer taken by itself`,
          r`9.6 × 10⁴ Pa, the air minus the oil layer`,
        ],
        correctAnswer: 0,
        explanation: r`P₀ is whatever presses on the surface where h starts. On the top of the water that is the air and the oil together: 1.0 × 10⁵ + 0.04 × 10⁵ = 1.04 × 10⁵ Pa. The air alone and the oil alone each leave out part of that load, and subtracting the oil treats its weight as lifting the water.`,
      },
      {
        question: r`Vacuum-pump oil of density 900 kg/m³ sits in a sealed flask, and nearly all the gas above it has been pumped out. The room is at 1.0 × 10⁵ Pa and g = 10 m/s². About what is the total pressure 0.20 m below the oil's surface?`,
        options: [
          r`About 1.018 × 10⁵ Pa, since P₀ is the room's air`,
          r`About 9.82 × 10⁴ Pa, since the vacuum pulls on it`,
          r`About 0 Pa, since no pressure exists in the flask`,
          r`About 1.8 × 10³ Pa, since P₀ is close to zero here`,
        ],
        correctAnswer: 3,
        explanation: r`P₀ is the pressure on the liquid's own surface, and with the gas pumped out that is close to zero. The total is then just ρgh = (900)(10)(0.20) = 1.8 × 10³ Pa. The room's air does not press on the oil in a sealed flask, a vacuum does not pull, and the oil's weight still makes a pressure.`,
      },
    ],
  },
  [r`Two containers of different shapes hold the same liquid. How do the pressures compare at the same depth?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An open, bowl-shaped container holds a liquid, and a probe is kept 0.20 m below the liquid's surface. Which change would alter the pressure at the probe?`,
        options: [
          r`Swapping the bowl for a tank twice as wide`,
          r`Swapping the liquid for one that is denser`,
          r`Swapping the bowl for a jar with sloped walls`,
          r`Adding more liquid in a deeper bowl below it`,
        ],
        correctAnswer: 1,
        explanation: r`In P = P₀ + ρgh only the surface pressure, the density, g and the depth appear, so a denser liquid changes the pressure 0.20 m down. The container's width, the slope of its walls and the amount of liquid under the probe do not appear in the equation at all.`,
      },
      {
        question: r`A wide open tank and a narrow open tube hold the same oil under the same air. Point X is 0.30 m below the surface in the wide tank, and point Y is 0.60 m below the surface in the narrow tube. How do the pressures compare?`,
        options: [
          r`Greater at X, because the tank holds more oil`,
          r`Equal, because the oil is the same in both`,
          r`Greater at Y, because Y is the deeper point`,
          r`Greater at X, because the tank is much wider`,
        ],
        correctAnswer: 2,
        explanation: r`With the same liquid and the same air, the pressure depends only on depth, so the point 0.60 m down has the greater pressure. The amount of oil and the container's width do not enter P = P₀ + ρgh, and the pressures are equal only when the depths are equal.`,
      },
    ],
  },
  [r`What is true of the pressure at two points on the same level in one connected fluid at rest?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Builders fill a long clear hose with water and hold its two open ends up at opposite corners of a house. With the water at rest, the two water surfaces settle at the same height. Why?`,
        options: [
          r`The hose is equally wide at its two ends`,
          r`Each end holds an equal volume of water`,
          r`Each end is equally far from the middle`,
          r`Both surfaces are at the air's pressure`,
        ],
        correctAnswer: 3,
        explanation: r`Both open surfaces are at the pressure of the air, and in one connected fluid at rest, points at equal pressure lie on the same level. The hose's width, the volume of water near each end and the distance along the hose play no part, which is why the hose can snake around the house.`,
      },
      {
        question: r`The rule that two points on the same level have equal pressures holds inside one connected fluid at rest. For which pair of points on the same level can the pressures differ?`,
        options: [
          r`One in each arm of a U-tube: one in oil, one in water`,
          r`One in each arm of a U-tube that holds only water`,
          r`One in the wide end and one in the narrow end of a tank`,
          r`One near the shore and one at the center of a calm lake`,
        ],
        correctAnswer: 0,
        explanation: r`The rule needs a path between the points that stays in a single fluid. With one point in oil and the other in water, the liquids above their shared boundary have different densities, so the pressures at one height can differ. A water-only U-tube, a tank of changing width and a calm lake are each one connected fluid at rest.`,
      },
    ],
  },
  [r`What does a graph of total pressure against depth look like for a liquid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`On a graph of total pressure against depth for an open tank, the straight line rises by 2.4 × 10⁴ Pa between the surface and a depth of 2.0 m. Using g = 10 m/s², what is the density of the liquid?`,
        options: [r`12 000 kg/m³`, r`2400 kg/m³`, r`1200 kg/m³`, r`4800 kg/m³`],
        correctAnswer: 2,
        explanation: r`The slope is (2.4 × 10⁴) ÷ 2.0 = 1.2 × 10⁴ Pa/m, and the slope equals ρg, so ρ = (1.2 × 10⁴) ÷ 10 = 1200 kg/m³. Leaving out g gives 12 000, dividing the rise by g without the depth gives 2400, and 4800 multiplies by the depth instead of dividing.`,
      },
      {
        question: r`A graph of total pressure against depth for the liquid in a sealed tank is a straight line through the points (1.0 m, 2.1 × 10⁵ Pa) and (3.0 m, 2.3 × 10⁵ Pa). What is the pressure on the liquid's surface?`,
        options: [r`2.0 × 10⁵ Pa`, r`1.0 × 10⁵ Pa`, r`2.1 × 10⁵ Pa`, r`1.9 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`The slope is (0.2 × 10⁵) ÷ 2.0 = 1.0 × 10⁴ Pa/m. Going back 1.0 m from the first point to zero depth gives the intercept, P₀ = 2.1 × 10⁵ − 0.1 × 10⁵ = 2.0 × 10⁵ Pa. The value 1.0 × 10⁵ assumes ordinary air, 2.1 × 10⁵ is the reading at 1.0 m, and 1.9 × 10⁵ steps back 2.0 m.`,
      },
      {
        question: r`A graph of total pressure against depth is drawn for a liquid on Earth. It is then redrawn for a liquid 0.80 times as dense on a planet where g is 2.5 times as large. By what factor does the slope of the line change?`,
        options: [r`It is 3.3 times as large`, r`It is 3.1 times as large`, r`It is 0.32 times as large`, r`It is 2.0 times as large`],
        correctAnswer: 3,
        explanation: r`The slope of the line is ρg, so it changes by 0.80 × 2.5 = 2.0. Adding the two factors gives 3.3, dividing 2.5 by 0.80 gives 3.1, and dividing 0.80 by 2.5 gives 0.32.`,
      },
      {
        question: r`A graph of total pressure against depth for an open tank of oil is a straight line with an intercept of 1.0 × 10⁵ Pa and a slope of 9000 Pa/m. What total pressure does the line give at a depth of 4.0 m?`,
        options: [r`3.6 × 10⁴ Pa`, r`1.36 × 10⁵ Pa`, r`4.6 × 10⁵ Pa`, r`1.09 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`The line gives P = intercept + slope × depth = 1.0 × 10⁵ + (9000)(4.0) = 1.0 × 10⁵ + 0.36 × 10⁵ = 1.36 × 10⁵ Pa. The value 3.6 × 10⁴ starts the line at zero, 4.6 × 10⁵ adds 1.0 and 3.6 without matching the powers of ten, and 1.09 × 10⁵ is the value at 1.0 m.`,
      },
      {
        question: r`A graph of total pressure against depth for an open tank of glycerin starts at 1.0 × 10⁵ Pa and has a slope of 1.25 × 10⁴ Pa/m. At what depth does the line reach 1.5 × 10⁵ Pa?`,
        options: [r`12 m`, r`8.0 m`, r`0.25 m`, r`4.0 m`],
        correctAnswer: 3,
        explanation: r`The line must rise by 1.5 × 10⁵ − 1.0 × 10⁵ = 5.0 × 10⁴ Pa above its intercept, so the depth is (5.0 × 10⁴) ÷ (1.25 × 10⁴) = 4.0 m. Dividing the whole 1.5 × 10⁵ Pa by the slope gives 12 m, dividing the intercept gives 8.0 m, and 0.25 m inverts the division.`,
      },
      {
        question: r`In a pool of water inside a habitat on another planet, a graph of total pressure against depth rises in a straight line from 60 kPa at the surface to 79 kPa at a depth of 5.0 m. What is g there? (Water: 1000 kg/m³.)`,
        options: [r`0.0038 m/s²`, r`3.8 m/s²`, r`19 m/s²`, r`15.8 m/s²`],
        correctAnswer: 1,
        explanation: r`The slope is (79 − 60) kPa ÷ 5.0 m = 3.8 kPa/m = 3800 Pa/m, and the slope equals ρg, so g = 3800 ÷ 1000 = 3.8 m/s². Leaving the slope in kPa gives 0.0038, skipping the division by depth gives 19, and 15.8 uses the whole 79 kPa instead of the rise.`,
      },
    ],
  },
  [r`The depth of a point in an open lake doubles. What happens to the total pressure there?`]: {
    kind: 'calc',
    more: [
      {
        question: r`At a point in an open lake, the total pressure is 1.8 × 10⁵ Pa. The air above the lake is at 1.0 × 10⁵ Pa. What is the total pressure at a point three times as deep?`,
        options: [r`5.4 × 10⁵ Pa`, r`3.4 × 10⁵ Pa`, r`2.6 × 10⁵ Pa`, r`4.4 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`Only the water's part scales with depth. It is 0.8 × 10⁵ Pa at first and 2.4 × 10⁵ Pa at three times the depth, so the total is 1.0 × 10⁵ + 2.4 × 10⁵ = 3.4 × 10⁵ Pa. Tripling the whole total gives 5.4 × 10⁵, 2.6 × 10⁵ only doubles the water's part, and 4.4 × 10⁵ counts the air twice.`,
      },
      {
        question: r`At a point in an open tank of brine, the total pressure is 2.2 × 10⁵ Pa. The air above the brine is at 1.0 × 10⁵ Pa. What is the total pressure at a point half as deep?`,
        options: [r`1.1 × 10⁵ Pa`, r`6.0 × 10⁴ Pa`, r`2.1 × 10⁵ Pa`, r`1.6 × 10⁵ Pa`],
        correctAnswer: 3,
        explanation: r`The brine's part is 2.2 × 10⁵ − 1.0 × 10⁵ = 1.2 × 10⁵ Pa, and it halves to 0.6 × 10⁵ Pa, so the total is 1.0 × 10⁵ + 0.6 × 10⁵ = 1.6 × 10⁵ Pa. Halving the whole total gives 1.1 × 10⁵, 6.0 × 10⁴ leaves out the air, and 2.1 × 10⁵ halves the air instead of the brine's part.`,
      },
      {
        question: r`In an open vat of mercury, each 0.75 m of depth adds about 1 atm, and the air above is at 1 atm. A probe is moved from a depth of 1.5 m to a depth of 3.0 m. By about what factor does the total pressure on it rise?`,
        options: [r`By a factor of 2.0`, r`By a factor of 1.5`, r`By a factor of 1.67`, r`By a factor of 1.33`],
        correctAnswer: 2,
        explanation: r`At 1.5 m the mercury adds 2 atm, for a total of 3 atm; at 3.0 m it adds 4 atm, for a total of 5 atm. The factor is 5 ÷ 3 ≈ 1.67, less than 2 because the air's 1 atm does not double. A factor of 2.0 doubles the whole total, and 1.5 and 1.33 miscount the totals as 2 and 3 atm or as 3 and 4 atm.`,
      },
      {
        question: r`A liquid sits in a sealed container, and the space above it has been pumped out so that the pressure on its surface is essentially zero. At one point in the liquid the total pressure is 3.0 × 10⁴ Pa. What is the total pressure at twice that depth?`,
        options: [r`6.0 × 10⁴ Pa`, r`4.5 × 10⁴ Pa`, r`1.6 × 10⁵ Pa`, r`3.0 × 10⁴ Pa`],
        correctAnswer: 0,
        explanation: r`With P₀ essentially zero, the total pressure is all ρgh, so doubling the depth doubles it exactly: 6.0 × 10⁴ Pa. The total less than doubles only when a fixed surface pressure sits on top. The value 1.6 × 10⁵ adds an atmosphere that is not there, and 4.5 × 10⁴ and 3.0 × 10⁴ raise the pressure by too little.`,
      },
      {
        question: r`In a sealed tank of water with compressed gas above it, a sensor reads a total pressure of 3.4 × 10⁵ Pa. Lowered to twice the depth, it reads 3.8 × 10⁵ Pa. What is the pressure of the gas on the water's surface?`,
        options: [r`1.0 × 10⁵ Pa`, r`4.0 × 10⁴ Pa`, r`3.0 × 10⁵ Pa`, r`1.9 × 10⁵ Pa`],
        correctAnswer: 2,
        explanation: r`Doubling the depth adds one more copy of the water's first part, so that part is 3.8 × 10⁵ − 3.4 × 10⁵ = 0.4 × 10⁵ Pa. The surface pressure is then 3.4 × 10⁵ − 0.4 × 10⁵ = 3.0 × 10⁵ Pa. The value 4.0 × 10⁴ is the water's part, 1.0 × 10⁵ assumes ordinary air, and 1.9 × 10⁵ halves the second reading.`,
      },
      {
        question: r`A point 0.10 m below the surface of water in an open beaker is moved to a depth of 0.20 m. The air is at 1.0 × 10⁵ Pa, water's density is 1000 kg/m³ and g = 10 m/s². By about what percent does the total pressure rise?`,
        options: [r`By about 1%`, r`By about 100%`, r`By about 50%`, r`By about 10%`],
        correctAnswer: 0,
        explanation: r`The water adds (1000)(10)(0.10) = 1000 Pa at first and 2000 Pa after, so the total goes from 1.01 × 10⁵ Pa to 1.02 × 10⁵ Pa, a rise of about 1%. A rise of 100% doubles the whole total, which only the water's small part does; 50% and 10% also give the fixed air pressure too small a share.`,
      },
    ],
  },
  [r`About how much pressure does each 10 m of water add?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The water in a street main is at 4.0 atm above the pressure of the air. About how high can this water rise in a vertical pipe that is open to the air at the top? (Each 10 m of water adds about 1 atm.)`,
        options: [r`About 40 m`, r`About 4.0 m`, r`About 50 m`, r`About 400 m`],
        correctAnswer: 0,
        explanation: r`Each 10 m of water accounts for about 1 atm, so 4.0 atm above the air's pressure holds up about 4.0 × 10 = 40 m of water. Counting 1 m per atm gives 4.0 m, 100 m per atm gives 400 m, and 50 m adds an extra atmosphere although the pipe's open top is already at air pressure.`,
      },
      {
        question: r`The water behind a dam is 60 m deep at the dam's base. About how much pressure does the water add at the base, on top of the air's pressure? (Each 10 m of water adds about 1 atm, and 1 atm ≈ 100 kPa.)`,
        options: [r`About 700 kPa`, r`About 60 kPa`, r`About 600 kPa`, r`About 6000 kPa`],
        correctAnswer: 2,
        explanation: r`Sixty meters is six lots of 10 m, so the water adds about 6 atm ≈ 600 kPa. The value 700 kPa includes the air, which the question leaves out, while 60 kPa and 6000 kPa count 1 atm per 100 m and per 1 m.`,
      },
      {
        question: r`The main tank at a public aquarium is filled to a depth of 2.0 m. About how much pressure, in atmospheres, does the water add at the floor of the tank? (Water: 1000 kg/m³; g = 10 m/s²; 1 atm ≈ 1.0 × 10⁵ Pa.)`,
        options: [r`About 2.0 atm`, r`About 1.2 atm`, r`About 0.020 atm`, r`About 0.20 atm`],
        correctAnswer: 3,
        explanation: r`The water adds ρgh = (1000)(10)(2.0) = 2.0 × 10⁴ Pa, which is 0.20 atm: one fifth of the 10 m that makes a full atmosphere. An answer of 2.0 atm counts 1 atm per meter, 1.2 atm is the total with the air included, and 0.020 atm leaves out g.`,
      },
      {
        question: r`Ten meters of water add about 1 atm of pressure. An oil has a density of 800 kg/m³, and water's is 1000 kg/m³. About what depth of this oil adds 1 atm?`,
        options: [r`About 8.0 m`, r`About 12.5 m`, r`About 10 m`, r`About 1.25 m`],
        correctAnswer: 1,
        explanation: r`The added pressure is ρgh, so a liquid 0.80 times as dense needs 1 ÷ 0.80 = 1.25 times the depth: 12.5 m. Multiplying 10 m by 0.80 gives 8.0 m and has the ratio upside down, 10 m ignores the density, and 1.25 m slips a power of ten.`,
      },
      {
        question: r`A moon has g = 2.0 m/s², one fifth of the 10 m/s² used for Earth. About what depth of water on that moon adds 1.0 × 10⁵ Pa, the pressure that 10 m of water adds on Earth? (Water: 1000 kg/m³.)`,
        options: [r`About 2.0 m`, r`About 10 m`, r`About 500 m`, r`About 50 m`],
        correctAnswer: 3,
        explanation: r`From ρgh = 1.0 × 10⁵ Pa, h = (1.0 × 10⁵) ÷ (1000 × 2.0) = 50 m: with one fifth of the gravity, five times the depth is needed. A depth of 2.0 m divides 10 m by 5 instead of multiplying, 10 m ignores the change in g, and 500 m is a slip in the power of ten.`,
      },
      {
        question: r`The water surface in a hilltop reservoir is 18 m above the closed tap of one house and 46 m above the closed tap of a house farther down the hill. By about how much do the water pressures at the two taps differ? (Each 10 m of water adds about 1 atm.)`,
        options: [r`By about 3.8 atm`, r`By about 28 atm`, r`By about 2.8 atm`, r`By about 6.4 atm`],
        correctAnswer: 2,
        explanation: r`The lower tap is 46 − 18 = 28 m farther below the reservoir's surface, and each 10 m of water accounts for about 1 atm, so the pressures differ by about 2.8 atm. The air's 1 atm is in both totals and cancels, so 3.8 atm is too much; 28 atm counts 1 atm per meter, and 6.4 atm adds the two heights.`,
      },
    ],
  },
  [r`A question asks how much pressure the water adds at some depth. What do you report?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A mug is filled with tea to a depth of 0.080 m. Use 1000 kg/m³ for the tea, g = 10 m/s² and 1.0 × 10⁵ Pa for the air. How much pressure does the tea add at the bottom of the mug?`,
        options: [r`80 Pa`, r`1.008 × 10⁵ Pa`, r`8000 Pa`, r`800 Pa`],
        correctAnswer: 3,
        explanation: r`What the liquid adds is ρgh alone: (1000)(10)(0.080) = 800 Pa. Leaving out g gives 80 Pa, 1.008 × 10⁵ Pa is the total with the air included, and 8000 Pa is a slip of a factor of ten.`,
      },
      {
        question: r`At what depth below the surface of an open freshwater pond does the water add 2.5 × 10⁴ Pa of pressure? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`12.5 m`, r`2.5 m`, r`25 m`, r`0.40 m`],
        correctAnswer: 1,
        explanation: r`What the water adds is ρgh, so h = (2.5 × 10⁴) ÷ (1000 × 10) = 2.5 m. Adding the air's pressure before dividing gives 12.5 m, leaving out g gives 25 m, and 0.40 m inverts the division.`,
      },
      {
        question: r`A water tank at a base on the Moon, where g = 1.6 m/s², is filled to a depth of 2.0 m. The air in the base is at 1.0 × 10⁵ Pa. How much pressure does the water add at the floor of the tank? (Water: 1000 kg/m³.)`,
        options: [r`3.2 × 10³ Pa`, r`2.0 × 10⁴ Pa`, r`2.0 × 10³ Pa`, r`1.032 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`The water adds ρgh = (1000)(1.6)(2.0) = 3.2 × 10³ Pa. Using Earth's 10 m/s² gives 2.0 × 10⁴, leaving out g altogether gives 2.0 × 10³, and 1.032 × 10⁵ Pa is the total with the air included.`,
      },
      {
        question: r`An open aquarium is filled with water to a depth of 60 cm. How much pressure, in kilopascals, does the water add at the bottom? (Water: 1000 kg/m³; g = 10 m/s²; air: 100 kPa.)`,
        options: [r`600 kPa`, r`106 kPa`, r`6.0 kPa`, r`0.60 kPa`],
        correctAnswer: 2,
        explanation: r`With h = 0.60 m, the water adds (1000)(10)(0.60) = 6000 Pa = 6.0 kPa. Leaving the depth as 60 gives 600 kPa, 106 kPa is the total with the air included, and 0.60 kPa leaves out g.`,
      },
      {
        question: r`Open tank 1 holds water of density 1000 kg/m³, and open tank 2 holds syrup of density 1500 kg/m³. How many times as much pressure does the syrup add 4.0 m down in tank 2 as the water adds 2.0 m down in tank 1?`,
        options: [r`1.5 times as much`, r`3.0 times as much`, r`2.0 times as much`, r`0.33 times as much`],
        correctAnswer: 1,
        explanation: r`Each liquid adds ρgh, so the ratio is (1500 × 4.0) ÷ (1000 × 2.0) = 3.0; as a check, 6.0 × 10⁴ Pa against 2.0 × 10⁴ Pa with g = 10 m/s². A ratio of 1.5 uses only the densities, 2.0 uses only the depths, and 0.33 has the ratio upside down.`,
      },
      {
        question: r`An open jar holds a 0.50 m layer of oil of density 800 kg/m³ floating on a 1.0 m layer of water of density 1000 kg/m³. Using g = 10 m/s² and 1.0 × 10⁵ Pa for the air, how much pressure do the two liquids together add at the bottom?`,
        options: [r`1.14 × 10⁵ Pa`, r`1.5 × 10⁴ Pa`, r`1.2 × 10⁴ Pa`, r`1.4 × 10⁴ Pa`],
        correctAnswer: 3,
        explanation: r`Each layer adds its own ρgh: the oil adds (800)(10)(0.50) = 4000 Pa and the water adds (1000)(10)(1.0) = 10 000 Pa, for 1.4 × 10⁴ Pa. Treating all 1.5 m as water gives 1.5 × 10⁴, treating it all as oil gives 1.2 × 10⁴, and 1.14 × 10⁵ Pa is the total with the air included.`,
      },
    ],
  },
  [r`How do you add $P_0$ and $\rho g h$ when both are in scientific notation?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A snorkeler is 4.5 m down in an open bay. The air is at 1.0 × 10⁵ Pa, and the water adds 4.5 × 10⁴ Pa at her depth. What is the total pressure on her?`,
        options: [r`5.5 × 10⁹ Pa`, r`5.5 × 10⁵ Pa`, r`1.45 × 10⁵ Pa`, r`5.5 × 10⁴ Pa`],
        correctAnswer: 2,
        explanation: r`Match the powers of ten first: 4.5 × 10⁴ = 0.45 × 10⁵, so the total is 1.0 × 10⁵ + 0.45 × 10⁵ = 1.45 × 10⁵ Pa. Adding 1.0 and 4.5 directly gives the 5.5 answers, and 5.5 × 10⁹ also adds the exponents, which belongs to multiplying.`,
      },
      {
        question: r`A research submersible sits 250 m down in a lake. The air above the lake is at 1.0 × 10⁵ Pa, and the water adds 2.5 × 10⁶ Pa at that depth. What is the total pressure on the submersible?`,
        options: [r`3.5 × 10⁶ Pa`, r`2.6 × 10⁶ Pa`, r`3.5 × 10¹¹ Pa`, r`3.5 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`Write both with the same power of ten: 1.0 × 10⁵ = 0.1 × 10⁶, so the total is 0.1 × 10⁶ + 2.5 × 10⁶ = 2.6 × 10⁶ Pa. Adding 1.0 and 2.5 without matching the powers gives the 3.5 answers, and 10¹¹ comes from adding the exponents as well.`,
      },
      {
        question: r`The air above a full coffee cup is at 1.0 × 10⁵ Pa, and the coffee adds 8.0 × 10² Pa at the bottom of the cup. What is the total pressure at the bottom?`,
        options: [r`1.008 × 10⁵ Pa`, r`1.08 × 10⁵ Pa`, r`1.8 × 10⁵ Pa`, r`9.0 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`In the same power of ten, 8.0 × 10² = 0.008 × 10⁵, so the total is 1.0 × 10⁵ + 0.008 × 10⁵ = 1.008 × 10⁵ Pa. The values 1.08 × 10⁵ and 1.8 × 10⁵ shift the decimal point by too few places, and 9.0 × 10⁵ adds 1.0 and 8.0 directly.`,
      },
      {
        question: r`A sensor in a sealed tank reads a total pressure of 2.4 × 10⁵ Pa at a depth where the water adds 9.0 × 10⁴ Pa. What is the pressure of the gas on the water's surface?`,
        options: [r`3.3 × 10⁵ Pa`, r`1.5 × 10⁴ Pa`, r`6.6 × 10⁵ Pa`, r`1.5 × 10⁵ Pa`],
        correctAnswer: 3,
        explanation: r`Here the total and the liquid's part are known, so subtract with matched powers of ten: 9.0 × 10⁴ = 0.9 × 10⁵, and 2.4 × 10⁵ − 0.9 × 10⁵ = 1.5 × 10⁵ Pa. Adding instead gives 3.3 × 10⁵, 1.5 × 10⁴ keeps the smaller power of ten, and 6.6 comes from 9.0 − 2.4 with the powers unmatched.`,
      },
      {
        question: r`In a pressurized tank the gas above the liquid is at 2.0 × 10⁵ Pa, and the liquid adds 3.5 × 10⁴ Pa at the drain. What is the total pressure at the drain?`,
        options: [r`5.5 × 10⁵ Pa`, r`2.35 × 10⁵ Pa`, r`5.5 × 10⁹ Pa`, r`2.035 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`Match the powers of ten: 3.5 × 10⁴ = 0.35 × 10⁵, so the total is 2.0 × 10⁵ + 0.35 × 10⁵ = 2.35 × 10⁵ Pa. Adding 2.0 and 3.5 directly gives 5.5 × 10⁵, adding the exponents too gives 10⁹, and 2.035 × 10⁵ shifts the decimal point one place too far.`,
      },
      {
        question: r`A weather station reports the air pressure as 101 kPa. In an open dish at that station, a liquid adds 2.0 × 10³ Pa at the bottom. What is the total pressure at the bottom of the dish?`,
        options: [r`1.03 × 10⁵ Pa`, r`2.101 × 10³ Pa`, r`3.01 × 10⁵ Pa`, r`1.21 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`Put both in the same form: 101 kPa = 1.01 × 10⁵ Pa and 2.0 × 10³ Pa = 0.02 × 10⁵ Pa, so the total is 1.03 × 10⁵ Pa. Adding 101 to 2000 without converting the kilopascals gives 2.101 × 10³, adding 1.01 and 2.0 gives 3.01 × 10⁵, and 1.21 × 10⁵ shifts the decimal point one place too few.`,
      },
    ],
  },
  [r`How do you turn a pressure into the force on a surface?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The air in a room is at a pressure of 1.0 × 10⁵ Pa. A desk in the room has a flat top with an area of 1.5 m². What force does the air put on the top face of the desk?`,
        options: [r`1.5 × 10⁵ N`, r`6.7 × 10⁴ N`, r`1.5 × 10⁴ N`, r`1.0 × 10⁵ N`],
        correctAnswer: 0,
        explanation: r`F = PA = (1.0 × 10⁵)(1.5) = 1.5 × 10⁵ N. Dividing the pressure by the area gives 6.7 × 10⁴, 1.5 × 10⁴ slips a power of ten, and 1.0 × 10⁵ N is the force on only one square meter.`,
      },
      {
        question: r`A suction cup holds a hook to a tiled wall. The air outside pushes on the cup with a pressure 8.0 × 10⁴ Pa greater than the pressure under it. What area must the cup have for this pressure difference to give a force of 40 N?`,
        options: [r`2.0 × 10³ m²`, r`3.2 × 10⁶ m²`, r`5.0 × 10⁻³ m²`, r`5.0 × 10⁻⁴ m²`],
        correctAnswer: 3,
        explanation: r`Rearranging F = PA gives A = F/P = 40 ÷ (8.0 × 10⁴) = 5.0 × 10⁻⁴ m², which is 5 cm². Dividing the pressure by the force gives 2.0 × 10³, multiplying the two gives 3.2 × 10⁶, and 5.0 × 10⁻³ is a slip in the power of ten.`,
      },
      {
        question: r`A swimmer dives 2 m under water, and the pressure on the outside of her eardrum becomes 2.0 × 10⁴ Pa greater than the pressure behind it. The eardrum's area is 0.60 cm². What net force does this put on the eardrum? (1 cm² = 10⁻⁴ m²)`,
        options: [r`1.2 × 10⁴ N`, r`120 N`, r`1.2 N`, r`0.12 N`],
        correctAnswer: 2,
        explanation: r`The area is 0.60 cm² = 6.0 × 10⁻⁵ m², so F = PA = (2.0 × 10⁴)(6.0 × 10⁻⁵) = 1.2 N. Leaving the area in cm² gives 1.2 × 10⁴, converting with 10⁻² gives 120, and 0.12 N uses 10⁻⁵ for the conversion.`,
      },
      {
        question: r`A steady wind puts a net force of 250 N on a flat window pane whose area is 0.50 m². What is the pressure of the wind on the pane?`,
        options: [r`125 Pa`, r`500 Pa`, r`0.0020 Pa`, r`5000 Pa`],
        correctAnswer: 1,
        explanation: r`Rearranging F = PA gives P = F/A = 250 ÷ 0.50 = 500 Pa. Multiplying the force by the area gives 125, dividing the area by the force gives 0.0020, and 5000 Pa is a slip of a factor of ten.`,
      },
      {
        question: r`An engine's cylinder is rebuilt with a piston of twice the diameter, and it is then run with the gas at half the old pressure. How does the force of the gas on the piston's face compare with the old force?`,
        options: [
          r`It is 2 times the old force`,
          r`It is equal to the old force`,
          r`It is 4 times the old force`,
          r`It is one half the old force`,
        ],
        correctAnswer: 0,
        explanation: r`Twice the diameter gives 4 times the area, and F = PA, so the force changes by 4 × (1/2) = 2. An equal force forgets to square the diameter, 4 times ignores the lower pressure, and one half ignores the larger area.`,
      },
      {
        question: r`Air at 1.0 × 10⁵ Pa presses on an open palm of area 0.010 m². The force of the air on the palm equals the weight of what mass? (g = 10 m/s²)`,
        options: [r`1000 kg`, r`10 kg`, r`1.0 × 10⁶ kg`, r`100 kg`],
        correctAnswer: 3,
        explanation: r`F = PA = (1.0 × 10⁵)(0.010) = 1000 N, and a weight of 1000 N belongs to a mass of 1000 ÷ 10 = 100 kg. Reading the 1000 N as kilograms skips the division by g, 10 kg slips a power of ten, and 1.0 × 10⁶ kg divides the pressure by the area before dividing by g.`,
      },
    ],
  },
  [r`How deep must water be for the total pressure to be twice the pressure at the surface?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An open vat holds glycerin of density 1250 kg/m³ under air at 1.0 × 10⁵ Pa. Using g = 10 m/s², how far below the glycerin's surface is the total pressure twice the pressure at the surface?`,
        options: [r`10 m`, r`8.0 m`, r`12.5 m`, r`16 m`],
        correctAnswer: 1,
        explanation: r`The glycerin must add one more P₀, so ρgh = P₀ and h = (1.0 × 10⁵) ÷ (1250 × 10) = 8.0 m. A depth of 10 m is the answer for water, 12.5 m multiplies 10 m by 1.25 instead of dividing, and 16 m would make the total three times the surface pressure.`,
      },
      {
        question: r`A deep pool of water sits in a habitat on a planet where g = 2.5 m/s². The air in the habitat is kept at 1.0 × 10⁵ Pa. How far below the water's surface is the total pressure twice the pressure at the surface? (Water: 1000 kg/m³.)`,
        options: [r`10 m`, r`2.5 m`, r`40 m`, r`4.0 m`],
        correctAnswer: 2,
        explanation: r`The water must add one more P₀: h = P₀ ÷ (ρg) = (1.0 × 10⁵) ÷ (1000 × 2.5) = 40 m. A depth of 10 m uses Earth's g, 2.5 m divides 10 m by 4 instead of multiplying, and 4.0 m is a slip in the power of ten.`,
      },
      {
        question: r`An open freshwater lake lies under air at 1.0 × 10⁵ Pa. How far below the surface is the total pressure three times the pressure at the surface? (Water: 1000 kg/m³; g = 10 m/s².)`,
        options: [r`20 m`, r`30 m`, r`10 m`, r`15 m`],
        correctAnswer: 0,
        explanation: r`For the total to be 3P₀ the water must add 2P₀ = 2.0 × 10⁵ Pa, so h = (2.0 × 10⁵) ÷ (1000 × 10) = 20 m. A depth of 30 m makes the water alone add 3P₀, for a total of 4P₀; 10 m only doubles the surface pressure, and 15 m gives 2.5 times.`,
      },
      {
        question: r`A diving tank of water stands inside a pressurized chamber where the air is held at 1.5 × 10⁵ Pa. How far below the water's surface is the total pressure twice the pressure at the surface? (Water: 1000 kg/m³; g = 10 m/s².)`,
        options: [r`10 m`, r`7.5 m`, r`30 m`, r`15 m`],
        correctAnswer: 3,
        explanation: r`The water must add one more P₀, and P₀ here is 1.5 × 10⁵ Pa, so h = (1.5 × 10⁵) ÷ (1000 × 10) = 15 m. A depth of 10 m assumes ordinary air at 1.0 × 10⁵ Pa, 7.5 m adds only half of P₀, and 30 m adds twice P₀.`,
      },
      {
        question: r`In an open tank under air at 1.0 × 10⁵ Pa, the total pressure in a liquid is twice the surface pressure at a depth of 12.5 m. Using g = 10 m/s², what is the density of the liquid?`,
        options: [r`1250 kg/m³`, r`8000 kg/m³`, r`800 kg/m³`, r`1600 kg/m³`],
        correctAnswer: 2,
        explanation: r`At that depth the liquid adds one P₀, so ρ = P₀ ÷ (gh) = (1.0 × 10⁵) ÷ (10 × 12.5) = 800 kg/m³. Leaving out g gives 8000, 1250 scales water's density by 12.5 ÷ 10 the wrong way round, and 1600 uses twice P₀ for the liquid's part.`,
      },
      {
        question: r`At a mountain lake, the total pressure in the water is twice the pressure at the surface at a depth of 7.0 m. What is the pressure of the air on the lake? (Water: 1000 kg/m³; g = 10 m/s².)`,
        options: [r`7.0 × 10⁴ Pa`, r`1.0 × 10⁵ Pa`, r`1.4 × 10⁵ Pa`, r`7.0 × 10³ Pa`],
        correctAnswer: 0,
        explanation: r`The total is twice P₀ where the water adds exactly one P₀, so P₀ = ρgh = (1000)(10)(7.0) = 7.0 × 10⁴ Pa. The value 1.0 × 10⁵ Pa belongs to a doubling depth of 10 m, 1.4 × 10⁵ Pa is the total at 7.0 m, and 7.0 × 10³ leaves out g.`,
      },
    ],
  },
  [r`How do you find the pressure difference between two depths in the same liquid?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a building's plumbing the water is at rest. One tap is on the ground floor, and another is 12 m directly above it. How much greater is the water pressure at the lower tap? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`2.2 × 10⁵ Pa`, r`1.2 × 10⁴ Pa`, r`1.2 × 10⁵ Pa`, r`1.2 × 10³ Pa`],
        correctAnswer: 2,
        explanation: r`ΔP = ρgΔh = (1000)(10)(12) = 1.2 × 10⁵ Pa. The air's pressure is part of both totals and cancels, so 2.2 × 10⁵ Pa is too large; 1.2 × 10⁴ leaves out g, and 1.2 × 10³ is a further slip in the power of ten.`,
      },
      {
        question: r`Two points in a column of mercury of density 13 600 kg/m³ differ in pressure by 6800 Pa. Using g = 10 m/s² and 1.0 × 10⁵ Pa for the air, what is the vertical distance between the two points?`,
        options: [r`0.050 m`, r`0.50 m`, r`20 m`, r`0.79 m`],
        correctAnswer: 0,
        explanation: r`Rearranging ΔP = ρgΔh gives Δh = 6800 ÷ (13 600 × 10) = 0.050 m. Leaving out g gives 0.50 m, inverting the division gives 20, and 0.79 m adds the air's pressure to the difference although it cancels.`,
      },
      {
        question: r`Two sensors are fixed 0.40 m apart, one directly above the other, in an open tank of fuel. The lower sensor reads 3200 Pa more than the upper one. Using g = 10 m/s², what is the density of the fuel?`,
        options: [r`8000 kg/m³`, r`1280 kg/m³`, r`80 kg/m³`, r`800 kg/m³`],
        correctAnswer: 3,
        explanation: r`Rearranging ΔP = ρgΔh gives ρ = 3200 ÷ (10 × 0.40) = 800 kg/m³. Leaving out g gives 8000, multiplying 3200 by 0.40 gives 1280, and 80 is a slip of a factor of ten in the division.`,
      },
      {
        question: r`A sealed can 20 cm tall is held upright and fully under water in a deep tank. How much greater is the water pressure on the can's bottom face than on its top face? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`2.0 × 10⁵ Pa`, r`2.0 × 10³ Pa`, r`2.0 × 10² Pa`, r`1.02 × 10⁵ Pa`],
        correctAnswer: 1,
        explanation: r`With Δh = 0.20 m, ΔP = ρgΔh = (1000)(10)(0.20) = 2.0 × 10³ Pa, whatever the can's depth. Leaving the height as 20 gives 2.0 × 10⁵, leaving out g gives 2.0 × 10², and 1.02 × 10⁵ Pa adds the air's pressure, which cancels in a difference.`,
      },
      {
        question: r`In an open lake, the pressure difference between points 2.0 m and 5.0 m below the surface is 3.0 × 10⁴ Pa. The air is at 1.0 × 10⁵ Pa. What is the pressure difference between points 12 m and 18 m below the surface of the same lake?`,
        options: [r`6.0 × 10⁴ Pa`, r`3.0 × 10⁴ Pa`, r`1.8 × 10⁵ Pa`, r`1.6 × 10⁵ Pa`],
        correctAnswer: 0,
        explanation: r`ΔP = ρgΔh depends only on the vertical distance between the points. The second pair is 6.0 m apart, twice the 3.0 m of the first pair, so ΔP = 2 × 3.0 × 10⁴ = 6.0 × 10⁴ Pa. The value 3.0 × 10⁴ assumes the same spacing, 1.8 × 10⁵ uses the full 18 m, and 1.6 × 10⁵ adds the air's pressure.`,
      },
      {
        question: r`In a swimming pool, point A is 1.0 m below the surface at the shallow end, and point B is 3.5 m below the surface at the deep end, 20 m away horizontally. How much greater is the pressure at B than at A? (Water: 1000 kg/m³; g = 10 m/s².)`,
        options: [r`2.0 × 10⁵ Pa`, r`2.5 × 10⁴ Pa`, r`3.5 × 10⁴ Pa`, r`4.5 × 10⁴ Pa`],
        correctAnswer: 1,
        explanation: r`Only the vertical distance counts: Δh = 3.5 − 1.0 = 2.5 m, so ΔP = (1000)(10)(2.5) = 2.5 × 10⁴ Pa. Using the 20 m horizontal distance gives 2.0 × 10⁵, 3.5 × 10⁴ is what the water adds at B alone, and 4.5 × 10⁴ adds the two depths instead of subtracting.`,
      },
    ],
  },
  [r`A surface is moved deeper in a liquid. How do you find the extra force on it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A dive watch has a flat face of area 10 cm². A diver takes it from a depth of 2.0 m to a depth of 12 m in fresh water. How much extra force does the water put on the face? (Water: 1000 kg/m³; g = 10 m/s²; 1 cm² = 10⁻⁴ m².)`,
        options: [r`1.0 × 10⁶ N`, r`120 N`, r`220 N`, r`100 N`],
        correctAnswer: 3,
        explanation: r`ΔP = ρgΔh = (1000)(10)(10) = 1.0 × 10⁵ Pa, and A = 10 cm² = 1.0 × 10⁻³ m², so ΔF = ΔP·A = 100 N. Leaving the area as 10 gives 1.0 × 10⁶, 120 N uses the full 12 m instead of the change in depth, and 220 N is the total force at 12 m with the air included.`,
      },
      {
        question: r`A flat sensor plate of area 0.040 m² is lowered in a freshwater tank, and the force of the water on it rises by 1200 N. Through what vertical distance was the plate lowered? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`30 m`, r`3.0 m`, r`0.30 m`, r`13 m`],
        correctAnswer: 1,
        explanation: r`The pressure rose by ΔP = ΔF ÷ A = 1200 ÷ 0.040 = 3.0 × 10⁴ Pa, so Δh = ΔP ÷ (ρg) = (3.0 × 10⁴) ÷ (1000 × 10) = 3.0 m. Leaving out g gives 30 m, 0.30 m is a slip in the power of ten, and 13 m adds the air's pressure, which does not change.`,
      },
      {
        question: r`A camera housing is lowered 5.0 m deeper in a freshwater lake, and the force of the water on its flat glass port rises by 250 N. What is the area of the port? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`5.0 × 10⁻² m²`, r`2.0 × 10² m²`, r`5.0 × 10⁻³ m²`, r`1.7 × 10⁻³ m²`],
        correctAnswer: 2,
        explanation: r`The pressure rises by ΔP = ρgΔh = (1000)(10)(5.0) = 5.0 × 10⁴ Pa, so A = ΔF ÷ ΔP = 250 ÷ (5.0 × 10⁴) = 5.0 × 10⁻³ m². Leaving out g gives 5.0 × 10⁻², inverting the division gives 2.0 × 10², and 1.7 × 10⁻³ adds the air's pressure to ΔP.`,
      },
      {
        question: r`A drain plug of area 0.010 m² sits in the floor of an open tank of oil of density 900 kg/m³. More oil is pumped in, and the oil's surface rises by 2.0 m. How much extra force does the oil put on the plug? (g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`180 N`, r`18 N`, r`1180 N`, r`1.8 × 10⁴ N`],
        correctAnswer: 0,
        explanation: r`The plug is now 2.0 m deeper below the surface, so ΔF = ρgΔh·A = (900)(10)(2.0)(0.010) = 180 N. Leaving out g gives 18 N, 1180 N adds the air's force, which was there before and has not changed, and 1.8 × 10⁴ is the pressure rise without the area.`,
      },
      {
        question: r`A hatch is lowered from 10 m to 20 m in a lake, and the extra force of the water on it is ΔF. A second hatch with half the area is lowered from 10 m to 40 m in the same lake. What is the extra force on the second hatch?`,
        options: [r`6 ΔF`, r`3 ΔF`, r`0.67 ΔF`, r`1.5 ΔF`],
        correctAnswer: 3,
        explanation: r`The extra force is ρgΔh·A. The second hatch goes 30 m deeper instead of 10 m, a factor of 3, and has half the area, so the extra force is 3 × 0.5 = 1.5 ΔF. A factor of 3 ignores the area, 6 doubles the area instead of halving it, and 0.67 inverts the ratio.`,
      },
      {
        question: r`A research submersible has a flat window of area 0.25 m². It rises from a depth of 60 m to a depth of 52 m in fresh water. By how much does the force of the water on the window fall? (Water: 1000 kg/m³; g = 10 m/s²; air: 1.0 × 10⁵ Pa.)`,
        options: [r`3.2 × 10⁵ N`, r`1.3 × 10⁵ N`, r`2.0 × 10⁴ N`, r`4.5 × 10⁴ N`],
        correctAnswer: 2,
        explanation: r`The depth changes by 8.0 m, so ΔP = (1000)(10)(8.0) = 8.0 × 10⁴ Pa and ΔF = ΔP·A = (8.0 × 10⁴)(0.25) = 2.0 × 10⁴ N. Dividing ΔP by the area gives 3.2 × 10⁵, 1.3 × 10⁵ N is the water's whole force at 52 m, and 4.5 × 10⁴ adds the air's pressure, which cancels.`,
      },
    ],
  },
  [r`What quick check confirms a total pressure under water?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student calculates the total pressure 8 m down in an open freshwater pond and gets 1.8 × 10⁶ Pa. Water adds about 1 atm for every 10 m, the air on the surface is at 1 atm, and 1 atm ≈ 1.0 × 10⁵ Pa. What does a quick check show?`,
        options: [
          r`Ten times too high: about 0.8 + 1 = 1.8 atm, so 1.8 × 10⁵ Pa`,
          r`Correct as it is: about 8 + 10 = 18 atm, so 1.8 × 10⁶ Pa`,
          r`Too high: about 0.8 atm with no air, so 8.0 × 10⁴ Pa`,
          r`Too low: about 80 + 1 = 81 atm, so 8.1 × 10⁶ Pa`,
        ],
        correctAnswer: 0,
        explanation: r`Eight meters is 0.8 of 10 m, so the water adds about 0.8 atm, and with the 1 atm at the surface the total is about 1.8 atm, or 1.8 × 10⁵ Pa. The student's value is ten times that, a slip in the power of ten. The other checks count 1 atm per meter or 10 atm per meter, or leave out the air.`,
      },
      {
        question: r`Four students calculate the total pressure 12 m down in an open freshwater lake. Water adds about 1 atm for every 10 m, the air on the surface is at 1 atm, and 1 atm ≈ 1.0 × 10⁵ Pa. Which result passes the quick check?`,
        options: [r`1.2 × 10⁵ Pa`, r`1.3 × 10⁶ Pa`, r`2.2 × 10⁵ Pa`, r`2.2 × 10⁴ Pa`],
        correctAnswer: 2,
        explanation: r`Twelve meters of water add about 1.2 atm, and the surface adds 1 atm, so the total should be about 2.2 atm, or 2.2 × 10⁵ Pa. The value 1.2 × 10⁵ leaves out the air, 1.3 × 10⁶ counts 1 atm per meter, and 2.2 × 10⁴ is a slip in the power of ten.`,
      },
      {
        question: r`For the total pressure 25 m down in an open freshwater lake, a student writes 1.0 × 10⁵ + (1000)(25) = 1.25 × 10⁵ Pa. Water adds about 1 atm for every 10 m, and the air on the surface is at 1 atm. What does the quick check give, and what went wrong?`,
        options: [
          r`About 2.5 atm; the air was counted twice`,
          r`About 3.5 atm; the water's term is missing g`,
          r`About 1.25 atm; the working has no slip`,
          r`About 26 atm; the depth is missing a zero`,
        ],
        correctAnswer: 1,
        explanation: r`The check gives 2.5 atm from the water plus 1 atm at the surface, about 3.5 atm, far above the student's 1.25 × 10⁵ Pa. The water's term should be ρgh = (1000)(10)(25), so g was left out. An estimate of 2.5 atm leaves out the air, and 26 atm counts 1 atm per meter.`,
      },
      {
        question: r`A lifeguard wants a quick estimate of the total pressure 4 m down in an open pool. Water adds about 1 atm for every 10 m, the air on the surface is at 1 atm, and 1 atm ≈ 100 kPa. About what is the total pressure there?`,
        options: [r`About 40 kPa`, r`About 104 kPa`, r`About 500 kPa`, r`About 140 kPa`],
        correctAnswer: 3,
        explanation: r`Four meters of water add about 0.4 atm, and the surface adds 1 atm, so the total is about 1.4 atm ≈ 140 kPa. The value 40 kPa leaves out the air, 104 kPa counts 1 atm per 100 m, and 500 kPa counts 1 atm per meter.`,
      },
      {
        question: r`A dive computer logs a total pressure of 3.3 × 10⁵ Pa in a freshwater lake, and the diver's notes give the depth as 33 m. Water adds about 1 atm for every 10 m, the air is at 1 atm, and 1 atm ≈ 1.0 × 10⁵ Pa. What does a quick check show about the notes?`,
        options: [
          r`Right: 3.3 atm come from the water, so about 33 m`,
          r`Wrong: 3.3 − 1 = 2.3 atm from the water, so about 23 m`,
          r`Wrong: 3.3 + 1 = 4.3 atm from the water, so about 43 m`,
          r`Wrong: 3.3 ÷ 10 = 0.33 atm from the water, so about 3.3 m`,
        ],
        correctAnswer: 1,
        explanation: r`Of the 3.3 atm total, 1 atm is the air on the surface, so the water adds about 2.3 atm, which takes about 23 m. A depth of 33 m forgets to take off the air's 1 atm, 43 m adds it instead of subtracting, and 3.3 m divides the pressure by ten for no reason.`,
      },
      {
        question: r`For a point 150 m down in an open freshwater lake, a student calculates a total pressure of 1.6 × 10⁶ Pa. Water adds about 1 atm for every 10 m, the air on the surface is at 1 atm, and 1 atm ≈ 1.0 × 10⁵ Pa. What does a quick check show?`,
        options: [
          r`Too high: about 1.5 + 1 = 2.5 atm, so 2.5 × 10⁵ Pa`,
          r`Too low: about 150 + 1 = 151 atm, so 1.5 × 10⁷ Pa`,
          r`Too high: about 15 atm with no air, so 1.5 × 10⁶ Pa`,
          r`Confirmed: about 15 + 1 = 16 atm, so 1.6 × 10⁶ Pa`,
        ],
        correctAnswer: 3,
        explanation: r`At 150 m the water adds about 150 ÷ 10 = 15 atm, and the surface adds 1 atm, for about 16 atm, or 1.6 × 10⁶ Pa, which matches the student's value. The other checks count 1 atm per 100 m or per meter, or leave out the 1 atm at the surface.`,
      },
    ],
  },
}
