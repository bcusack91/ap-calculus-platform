import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for volume flow rate, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A tap fills a 0.060 m³ tank in 30 s of steady flow. Which line of a lab report states the tap's volume flow rate correctly?`,
        options: [r`Q = 0.0020 m/s`, r`Q = 1.8 m³/s`, r`Q = 0.0020 m³/s`, r`Q = 0.0020 m²/s`],
        correctAnswer: 2,
        explanation: r`Volume flow rate Q is a volume per second, so it is 0.060 m³ ÷ 30 s = 0.0020 m³/s. The line in m/s uses the unit of a speed, and the line in m²/s is not a volume per time either. The value 1.8 comes from multiplying the volume by the time instead of dividing.`,
      },
      {
        question: r`At a gate, the water in a canal has a cross-section of 6 m² and moves at 2 m/s. An engineer lists four facts about the canal. Which one is its volume flow rate Q?`,
        options: [r`The 12 m³ of water that pass the gate each second`, r`The 12,000 kg of water that pass the gate each second`, r`The 2 m that the water travels along the canal each second`, r`The 6 m² of water cross-section found at the gate`],
        correctAnswer: 0,
        explanation: r`Q is the volume of fluid that passes a cross-section each second, measured in m³/s, so it is the 12 m³ each second. The 12,000 kg each second is a mass flow rate, the 2 m each second is the speed, and 6 m² is the cross-sectional area.`,
      },
    ],
  },
  [r`Write the volume flow rate in terms of area and speed.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Air moves at 4.0 m/s along a ventilation duct with a cross-sectional area of 0.25 m². What is the volume flow rate of the air?`,
        options: [r`16 m³/s`, r`1.0 m³/s`, r`4.25 m³/s`, r`0.0625 m³/s`],
        correctAnswer: 1,
        explanation: r`Q = Av = 0.25 m² × 4.0 m/s = 1.0 m³/s. The value 16 divides the speed by the area, 0.0625 divides the area by the speed, and 4.25 adds the two numbers instead of multiplying them.`,
      },
      {
        question: r`A fire hose delivers 0.012 m³/s of water. The hose's cross-sectional area is 0.0030 m². How fast does the water move along the hose?`,
        options: [r`0.25 m/s`, r`0.40 m/s`, r`40 m/s`, r`4.0 m/s`],
        correctAnswer: 3,
        explanation: r`Rearranging Q = Av gives v = Q/A = 0.012 ÷ 0.0030 = 4.0 m/s. The value 0.25 m/s divides the area by the flow rate. The values 0.40 m/s and 40 m/s have the right digit but slip a power of ten in the division.`,
      },
      {
        question: r`A river carries 600 m³/s of water past a bridge, and the water there moves at 1.5 m/s. What is the cross-sectional area of the river at the bridge?`,
        options: [r`400 m²`, r`900 m²`, r`40 m²`, r`0.0025 m²`],
        correctAnswer: 0,
        explanation: r`Rearranging Q = Av gives A = Q/v = 600 ÷ 1.5 = 400 m². The value 900 m² multiplies the flow rate by the speed, 0.0025 m² divides the speed by the flow rate, and 40 m² slips a power of ten.`,
      },
      {
        question: r`On a bottling line, olive oil travels at 0.30 m/s along a filling tube whose cross-sectional area is 5.0 cm². What volume flow rate is that in SI units? (1 cm² = 10⁻⁴ m²)`,
        options: [r`1.5 m³/s`, r`1.5 × 10⁻² m³/s`, r`1.5 × 10⁻⁴ m³/s`, r`1.7 × 10⁻³ m³/s`],
        correctAnswer: 2,
        explanation: r`The area is 5.0 × 10⁻⁴ m², so Q = Av = 5.0 × 10⁻⁴ × 0.30 = 1.5 × 10⁻⁴ m³/s. The value 1.5 m³/s leaves the area in cm², and 1.5 × 10⁻² m³/s treats 1 cm² as 10⁻² m². The value 1.7 × 10⁻³ m³/s divides the area by the speed.`,
      },
      {
        question: r`A canal is rebuilt so that its cross-sectional area is 3 times as large, and the water in it now moves at half its former speed. How does the canal's volume flow rate change?`,
        options: [r`It becomes 6 times as large`, r`It becomes 1.5 times as large`, r`It becomes two-thirds as large`, r`It becomes one-sixth as large`],
        correctAnswer: 1,
        explanation: r`Q = Av, so the flow rate changes by 3 × ½ = 1.5 times. A factor of 6 multiplies by 2 instead of by one half, two-thirds inverts the answer, and one-sixth divides by both factors.`,
      },
      {
        question: r`Water moves at 0.50 m/s through a water main with a cross-sectional area of 0.040 m². What volume of water passes one cross-section of the main in 10 s?`,
        options: [r`0.020 m³`, r`125 m³`, r`0.0020 m³`, r`0.20 m³`],
        correctAnswer: 3,
        explanation: r`Q = Av = 0.040 × 0.50 = 0.020 m³/s, so in 10 s the volume is 0.020 × 10 = 0.20 m³. The value 0.020 m³ is the volume for one second only, and 0.0020 m³ divides by the time. The value 125 m³ divides the speed by the area before multiplying by 10 s.`,
      },
    ],
  },
  [r`What is the difference between flow rate and flow speed?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two pipes deliver the same volume of water each second. Pipe X has twice the cross-sectional area of pipe Y. What must be true of the water in the two pipes?`,
        options: [r`Water in X moves at twice the speed of water in Y`, r`Water in X moves at the same speed as water in Y`, r`Water in X moves at one quarter of the speed of water in Y`, r`Water in X moves at half the speed of water in Y`],
        correctAnswer: 3,
        explanation: r`Equal flow rates do not mean equal speeds. With Q = Av the same for both, twice the area means half the speed in pipe X. The same speed would give X twice the flow rate, twice the speed would give it 4 times the flow rate, and one quarter squares a ratio that is already an area ratio.`,
      },
      {
        question: r`A technician's notes on one artery contain the readings "90 cm³/s" and "30 cm/s" with no labels. How should the two readings be labeled?`,
        options: [r`90 cm³/s is the flow speed, and 30 cm/s is the flow rate`, r`90 cm³/s is the flow rate, and 30 cm/s is the flow speed`, r`Both are flow rates, measured at two different places`, r`Both are flow speeds, measured at two different places`],
        correctAnswer: 1,
        explanation: r`A flow rate is a volume per time, so it carries cm³/s, and a flow speed is a distance per time, so it carries cm/s. Swapping the labels gives each quantity the other's unit. The two readings cannot be the same kind of quantity, because their units differ.`,
      },
    ],
  },
  [r`Which two volume conversions turn milliliters and liters into cubic centimeters and cubic meters?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A syringe is filled with 5.0 mL of vaccine. What is this volume in cubic meters?`,
        options: [r`5.0 × 10⁻⁶ m³`, r`5.0 × 10⁻³ m³`, r`5.0 × 10⁻⁴ m³`, r`5.0 × 10⁻² m³`],
        correctAnswer: 0,
        explanation: r`5.0 mL is 5.0 × 10⁻³ L, and each liter is 10⁻³ m³, so the volume is 5.0 × 10⁻⁶ m³. The value 5.0 × 10⁻³ m³ treats a milliliter as a liter. The values with 10⁻⁴ and 10⁻² use the factors for cm² to m² and for cm to m, which do not apply to a volume.`,
      },
      {
        question: r`A car's fuel tank has a volume of 0.060 m³. How many liters of fuel does it hold when full?`,
        options: [r`0.060 L`, r`600 L`, r`60 L`, r`60,000 L`],
        correctAnswer: 2,
        explanation: r`1 L = 10⁻³ m³, so 1 m³ = 1000 L and 0.060 m³ = 60 L. The value 0.060 L treats a cubic meter as a liter, 600 L slips a power of ten, and 60,000 is the tank's volume in cubic centimeters, not in liters.`,
      },
      {
        question: r`A bottle of soda is labeled 2.0 L. What is the volume of the soda in cubic centimeters?`,
        options: [r`2.0 cm³`, r`2000 cm³`, r`200 cm³`, r`0.0020 cm³`],
        correctAnswer: 1,
        explanation: r`1 L = 1000 cm³, so 2.0 L = 2000 cm³. The value 2.0 cm³ uses the milliliter rule (1 mL = 1 cm³) for liters, 200 cm³ uses a factor of 100, and 0.0020 cm³ divides by 1000 instead of multiplying.`,
      },
      {
        question: r`A cubic aquarium measures 0.50 m along each edge. How many liters of water fill it completely?`,
        options: [r`0.125 L`, r`12.5 L`, r`1250 L`, r`125 L`],
        correctAnswer: 3,
        explanation: r`The volume is 0.50 × 0.50 × 0.50 = 0.125 m³, and 1 m³ = 1000 L, so the aquarium holds 125 L. The value 0.125 L treats a cubic meter as a liter, and 12.5 L and 1250 L use factors of 100 and 10,000 in place of 1000.`,
      },
      {
        question: r`A hot tub holds 1.5 m³ of water. What is this volume in cubic centimeters?`,
        options: [r`1.5 × 10³ cm³`, r`1.5 × 10⁴ cm³`, r`1.5 × 10⁶ cm³`, r`1.5 × 10² cm³`],
        correctAnswer: 2,
        explanation: r`1 m³ = 1000 L and 1 L = 1000 cm³, so 1 m³ = 10⁶ cm³ and the tub holds 1.5 × 10⁶ cm³. The value with 10³ is the volume in liters. The values with 10⁴ and 10² use the factors for areas and for lengths.`,
      },
      {
        question: r`A medicine cup holds 30 mL. How many full cups does it take to fill a jug with a volume of 1.5 × 10⁻³ m³?`,
        options: [r`50 cups`, r`5 cups`, r`500 cups`, r`20 cups`],
        correctAnswer: 0,
        explanation: r`1.5 × 10⁻³ m³ is 1.5 L, which is 1500 cm³, and 30 mL is 30 cm³, so it takes 1500 ÷ 30 = 50 cups. The answers 5 and 500 slip a power of ten in the conversion, and 20 divides 30 by 1.5 without converting anything.`,
      },
    ],
  },
  [r`What does continuity say about a liquid flowing through a pipe that changes width?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water moves at 2.0 m/s through a pipe with a cross-sectional area of 12 cm². It must leave through a nozzle at 8.0 m/s. What cross-sectional area must the nozzle have?`,
        options: [r`48 cm²`, r`3.0 cm²`, r`6.0 cm²`, r`1.5 cm²`],
        correctAnswer: 1,
        explanation: r`Continuity gives A₂ = A₁v₁/v₂ = 12 × 2.0 ÷ 8.0 = 3.0 cm². The value 48 cm² inverts the speed ratio, so the faster water would get the larger area. The values 6.0 cm² and 1.5 cm² use a factor of 2 or 8 instead of the speed ratio of 4.`,
      },
      {
        question: r`Air leaves the outlet of a duct at 6.0 m/s. The outlet has a cross-sectional area of 0.10 m², and the main section of the duct has an area of 0.30 m². Treating the air as incompressible, how fast does it move in the main section?`,
        options: [r`18 m/s`, r`6.0 m/s`, r`0.50 m/s`, r`2.0 m/s`],
        correctAnswer: 3,
        explanation: r`A₁v₁ = A₂v₂, so the speed in the main section is 0.10 × 6.0 ÷ 0.30 = 2.0 m/s: three times the area, one-third of the speed. The value 18 m/s makes the wider section faster, 6.0 m/s ignores the change of area, and 0.50 m/s divides the area ratio by the speed.`,
      },
      {
        question: r`A stream moves at 1.2 m/s where its cross-sectional area is 0.50 m². It then enters a pool where the cross-sectional area of the flow is 3.0 m². How fast does the water move through the pool?`,
        options: [r`0.20 m/s`, r`7.2 m/s`, r`1.2 m/s`, r`0.40 m/s`],
        correctAnswer: 0,
        explanation: r`The flow rate is the same in both places: 0.50 × 1.2 = 0.60 m³/s, so the speed in the pool is 0.60 ÷ 3.0 = 0.20 m/s. The value 7.2 m/s multiplies by the area ratio, so the wider part would be faster. 1.2 m/s ignores the widening, and 0.40 m/s divides the speed by 3.0 only.`,
      },
      {
        question: r`Water moves at 5.0 cm/s through a tube with a cross-sectional area of 4.0 cm², then leaves through a tip with an area of 10 mm². How fast does the water move in the tip? (1 cm² = 100 mm²)`,
        options: [r`2.0 cm/s`, r`20 cm/s`, r`200 cm/s`, r`0.125 cm/s`],
        correctAnswer: 2,
        explanation: r`The tip's area is 10 mm² = 0.10 cm², so v₂ = 4.0 × 5.0 ÷ 0.10 = 200 cm/s. The value 2.0 cm/s divides by 10 without converting mm², and 20 cm/s treats 10 mm² as 1 cm². The value 0.125 cm/s inverts the area ratio.`,
      },
      {
        question: r`A pipe narrows so that its cross-sectional area falls to two-fifths of its original value. How does the speed of the water change as it enters the narrow part?`,
        options: [r`It becomes 0.40 times as fast`, r`It becomes 6.25 times as fast`, r`It becomes 1.6 times as fast`, r`It becomes 2.5 times as fast`],
        correctAnswer: 3,
        explanation: r`Av stays the same, so the speed changes by the inverse of the area ratio: 1 ÷ (2/5) = 2.5 times. A factor of 0.40 makes the water slower where the pipe is narrower. A factor of 6.25 squares the ratio, which applies only when a radius or diameter ratio is given, and 1.6 has no basis in the equation.`,
      },
      {
        question: r`In a wind tunnel, air moves at 3.0 m/s in the wide section and at 45 m/s in the test section, which has a cross-sectional area of 0.40 m². Treating the air as incompressible, what is the area of the wide section?`,
        options: [r`0.027 m²`, r`6.0 m²`, r`54 m²`, r`15 m²`],
        correctAnswer: 1,
        explanation: r`A₁v₁ = A₂v₂, so the wide section's area is 0.40 × 45 ÷ 3.0 = 6.0 m². The value 0.027 m² inverts the speed ratio, giving the slower air the smaller area. 54 m² multiplies all three numbers, and 15 is only the ratio of the two speeds.`,
      },
    ],
  },
  [r`Why must the flow rate be the same at every cross-section of a pipe?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A gas flows steadily through a rigid, leak-free pipe. The mass passing each second is the same at every cross-section, but the volume passing each second is not. Which condition for a constant volume flow rate has failed?`,
        options: [r`The pipe is not leak-free, so some mass escapes`, r`The flow is not steady, so mass piles up inside`, r`The fluid is not incompressible, so its density varies`, r`The pipe is not level, so gravity holds mass back`],
        correctAnswer: 2,
        explanation: r`Equal masses pass every cross-section each second, so nothing leaks out and nothing piles up. Equal masses are equal volumes only if the density is constant, which fails for a gas that is compressed along the way. A slope does not change this: mass still cannot pile up in a tilted pipe.`,
      },
      {
        question: r`Water flows steadily into one end of a rigid pipe at 0.50 L/s, but only 0.40 L/s comes out of the far end. Which conclusion fits these readings?`,
        options: [r`The pipe leaks 0.10 L/s, since water cannot pile up inside it`, r`The pipe is narrower at the far end, since narrow means less flow`, r`The pipe is wider at the far end, since wide means a slower flow`, r`The water is denser at the far end, since it has been compressed`],
        correctAnswer: 0,
        explanation: r`Water is incompressible and cannot pile up inside a rigid pipe, so the missing 0.10 L/s must be leaving through a leak. A change of width changes the speed, not the volume passing each second, so neither width option explains the loss. Water's density stays constant, so it cannot be squeezed into a smaller volume.`,
      },
    ],
  },
  [r`How does the speed of the flow in a round pipe depend on the pipe's radius?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water moves at 3.2 m/s through a round pipe of radius 1.0 cm. The pipe widens to a radius of 4.0 cm. How fast does the water move in the wide part?`,
        options: [r`0.80 m/s`, r`51 m/s`, r`0.20 m/s`, r`12.8 m/s`],
        correctAnswer: 2,
        explanation: r`Speed goes as 1/r². The radius is 4 times as large, so the area is 16 times as large and the speed is 3.2 ÷ 16 = 0.20 m/s. The value 0.80 m/s divides by 4 without squaring. The values 12.8 m/s and 51 m/s multiply by 4 and by 16, making the wider part faster.`,
      },
      {
        question: r`Water moves at 0.50 m/s through a round pipe of radius 6.0 cm. In a narrower round section the water must move at 4.5 m/s. What radius must the narrow section have?`,
        options: [r`2.0 cm`, r`0.67 cm`, r`18 cm`, r`4.0 cm`],
        correctAnswer: 0,
        explanation: r`The speed must rise by 4.5 ÷ 0.50 = 9 times, so the area must fall to 1/9 and the radius to 1/3: 6.0 ÷ 3 = 2.0 cm. The value 0.67 cm divides the radius by 9, forgetting the square root. 18 cm makes the faster section wider, and 4.0 cm does not give a speed ratio of 9.`,
      },
      {
        question: r`A round drain pipe is replaced by one with 1.5 times the radius, and the flow rate stays the same. How does the speed of the water in the new pipe compare with the speed in the old one?`,
        options: [r`It is 2/3 of the old speed`, r`It is 9/4 of the old speed`, r`It is 3/2 of the old speed`, r`It is 4/9 of the old speed`],
        correctAnswer: 3,
        explanation: r`For the same flow, v ∝ 1/r². A radius 3/2 times as large gives an area 9/4 times as large, so the speed is 4/9 of the old speed. The answer 2/3 forgets to square the ratio. The answers 3/2 and 9/4 make the water faster in the wider pipe.`,
      },
      {
        question: r`Coolant moves at 2.0 cm/s through a round tube with an inner diameter of 20 mm. The tube narrows to an inner diameter of 5.0 mm. How fast does the coolant move in the narrow part?`,
        options: [r`8.0 cm/s`, r`32 cm/s`, r`0.50 cm/s`, r`0.125 cm/s`],
        correctAnswer: 1,
        explanation: r`The diameter falls to one quarter, so the area falls to one-sixteenth and the speed rises 16 times: 2.0 × 16 = 32 cm/s. The value 8.0 cm/s multiplies by 4 without squaring. The values 0.50 cm/s and 0.125 cm/s divide instead, making the narrow part slower.`,
      },
      {
        question: r`Water leaves a round nozzle of radius 1.0 mm at 10 m/s. The nozzle is fed by a round tube of radius 5.0 mm. How fast does the water move in the tube?`,
        options: [r`2.0 m/s`, r`50 m/s`, r`0.40 m/s`, r`250 m/s`],
        correctAnswer: 2,
        explanation: r`The tube has 5 times the nozzle's radius, so 25 times its area, and the water in it moves at 10 ÷ 25 = 0.40 m/s. The value 2.0 m/s divides by 5 without squaring. The values 50 m/s and 250 m/s make the water faster in the wider tube.`,
      },
      {
        question: r`In a water-jet cutter, the water moves 100 times as fast in the round nozzle as in the round feed pipe. How does the nozzle's radius compare with the feed pipe's radius?`,
        options: [r`It is one-hundredth of the feed pipe's radius`, r`It is one-fiftieth of the feed pipe's radius`, r`It is ten times the feed pipe's radius`, r`It is one-tenth of the feed pipe's radius`],
        correctAnswer: 3,
        explanation: r`Speed goes as 1/r², so 100 times the speed needs 1/100 of the area, and the radius is the square root of that: one-tenth. One-hundredth is the area ratio, not the radius ratio, and one-fiftieth halves the factor instead of taking a square root. A larger radius would make the water slower.`,
      },
    ],
  },
  [r`One pipe splits into several branches. How do you find the speed in the branches?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A duct with a cross-sectional area of 0.30 m² carries air at 6.0 m/s. It splits into four identical ducts, each with an area of 0.10 m². Treating the air as incompressible, how fast does it move in each of the four ducts?`,
        options: [r`4.5 m/s`, r`18 m/s`, r`1.5 m/s`, r`6.0 m/s`],
        correctAnswer: 0,
        explanation: r`The parent flow is 0.30 × 6.0 = 1.8 m³/s, and the branches' total area is 4 × 0.10 = 0.40 m², so the speed is 1.8 ÷ 0.40 = 4.5 m/s. The value 18 m/s divides by one branch's area. 1.5 m/s divides the parent speed by the number of branches, and 6.0 m/s ignores the change in total area.`,
      },
      {
        question: r`An irrigation pipe with a cross-sectional area of 20 cm² carries water at 1.5 m/s. It feeds identical sprinkler lines, each with an area of 2.0 cm², and the water moves at 3.0 m/s in each line. How many sprinkler lines are there?`,
        options: [r`10 lines`, r`2 lines`, r`5 lines`, r`20 lines`],
        correctAnswer: 2,
        explanation: r`The lines must together have an area of 20 × 1.5 ÷ 3.0 = 10 cm², which is 10 ÷ 2.0 = 5 lines. The answer 10 uses the area ratio alone, as if the speed did not change. The answer 2 uses the speed ratio alone, and 20 multiplies the two ratios.`,
      },
      {
        question: r`A pipe with a cross-sectional area of 8.0 cm² carries water at 3.0 m/s and splits into two branches. Branch 1 has an area of 2.0 cm² and carries water at 6.0 m/s. In branch 2 the water moves at 4.0 m/s. What is the area of branch 2?`,
        options: [r`6.0 cm²`, r`3.0 cm²`, r`9.0 cm²`, r`1.5 cm²`],
        correctAnswer: 1,
        explanation: r`The parent's Av is 8.0 × 3.0 = 24 and branch 1 takes 2.0 × 6.0 = 12, leaving 12 for branch 2, so its area is 12 ÷ 4.0 = 3.0 cm². The value 6.0 cm² gives branch 2 the whole parent flow, and 9.0 cm² adds branch 1's flow instead of subtracting it. 1.5 cm² halves the correct area.`,
      },
      {
        question: r`Two identical hoses, each with a cross-sectional area of 3.0 cm², carry water at 2.0 m/s. Both are fed by a single pipe with an area of 4.0 cm². How fast does the water move in the feed pipe?`,
        options: [r`1.5 m/s`, r`1.3 m/s`, r`6.0 m/s`, r`3.0 m/s`],
        correctAnswer: 3,
        explanation: r`The branch flows add: 2 × 3.0 × 2.0 = 12, and the feed pipe carries all of it, so its speed is 12 ÷ 4.0 = 3.0 m/s. The value 1.5 m/s counts only one hose. 1.3 m/s inverts the area ratio, and 6.0 m/s multiplies one hose's area by its speed without dividing by the feed pipe's area.`,
      },
      {
        question: r`A water main delivers 0.90 L/s and splits into three identical branches, each with a cross-sectional area of 1.5 cm². How fast does the water move in each branch? (1 L = 1000 cm³)`,
        options: [r`600 cm/s`, r`200 cm/s`, r`0.20 cm/s`, r`67 cm/s`],
        correctAnswer: 1,
        explanation: r`The flow rate is 900 cm³/s and the branches' total area is 3 × 1.5 = 4.5 cm², so the speed is 900 ÷ 4.5 = 200 cm/s. The value 600 cm/s divides by one branch's area. 0.20 cm/s leaves the flow rate in liters, and 67 cm/s divides the correct speed by 3 a second time.`,
      },
      {
        question: r`A pipe splits into 8 identical branches, each with one quarter of the parent pipe's cross-sectional area. How does the speed of the water in each branch compare with its speed in the parent pipe?`,
        options: [r`It is half the speed in the parent pipe`, r`It is twice the speed in the parent pipe`, r`It is 4 times the speed in the parent pipe`, r`It is equal to the speed in the parent pipe`],
        correctAnswer: 0,
        explanation: r`The total area of the branches is 8 × ¼ = 2 times the parent's area, so the speed in them is half the parent's speed. Four times the speed looks at one branch alone, and twice the speed inverts the total-area ratio. Equal speeds would need a total branch area equal to the parent's.`,
      },
    ],
  },
  [r`What is single-tube thinking, and why does it fail in a branching network?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A shower pipe with a cross-sectional area of 1.0 cm² feeds a shower head with 50 holes, each with an area of 0.010 cm². How does the water's speed in the holes compare with its speed in the pipe?`,
        options: [r`100 times as fast, since each hole has 1/100 of the pipe's area`, r`Twice as fast, since the holes' total area is half the pipe's area`, r`50 times slower, since the flow is shared among the 50 holes`, r`Half as fast, since the 50 holes are side branches of the pipe`],
        correctAnswer: 1,
        explanation: r`Continuity uses the total area of the parallel holes: 50 × 0.010 = 0.50 cm², half the pipe's area, so the water is twice as fast. Comparing one hole with the pipe is single-tube thinking and gives 100 times. Sharing the flow among 50 holes does not by itself slow it: only the total area matters, and here it is smaller, so the water cannot be slower.`,
      },
      {
        question: r`In which case is the argument "the tube is narrower here, so the fluid must be faster here" safe to use without checking anything else?`,
        options: [r`A pipe divides into many narrow branches in parallel`, r`An artery feeds a bed of thousands of narrow capillaries`, r`A windpipe leads into a great many narrow small airways`, r`A pipe with no branches narrows to a smaller cross-section`],
        correctAnswer: 3,
        explanation: r`In a single unbranched pipe all of the flow passes through the narrow part, so a smaller area must mean a higher speed. In each branching case the flow is shared, and the speed depends on the total area of all the parallel branches, which may be larger than the parent's area even though each branch is narrow.`,
      },
    ],
  },
  [r`How do you convert a clinical flow rate such as 5 L/min for use with areas in cm² and speeds in cm/s?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An oxygen concentrator is set to deliver 9.0 L/min. What is this flow rate in cubic centimeters per second?`,
        options: [r`9000 cm³/s`, r`540 cm³/s`, r`150 cm³/s`, r`0.15 cm³/s`],
        correctAnswer: 2,
        explanation: r`9.0 L is 9000 cm³ and a minute is 60 s, so the flow rate is 9000 ÷ 60 = 150 cm³/s. The value 9000 cm³/s converts the liters but not the minutes. 540 cm³/s multiplies by 60 instead of converting the liters, and 0.15 cm³/s divides by 60 without converting the liters.`,
      },
      {
        question: r`The fountain in a garden pond is fed at 12 L/min through a hose whose cross-sectional area is 2.0 cm². How fast does the water travel along the hose?`,
        options: [r`100 cm/s`, r`6.0 cm/s`, r`6000 cm/s`, r`0.10 cm/s`],
        correctAnswer: 0,
        explanation: r`12 L/min is 12,000 cm³ per 60 s, which is 200 cm³/s, so v = 200 ÷ 2.0 = 100 cm/s. The value 6.0 cm/s divides 12 by 2.0 with no conversion. 6000 cm/s converts the liters but not the minutes, and 0.10 cm/s converts the minutes but not the liters.`,
      },
      {
        question: r`A chiller circulates coolant at 1.8 L/min. In one tube the coolant's average speed is 15 cm/s. What is that tube's cross-sectional area?`,
        options: [r`0.12 cm²`, r`120 cm²`, r`450 cm²`, r`2.0 cm²`],
        correctAnswer: 3,
        explanation: r`1.8 L/min is 1800 cm³ per 60 s, which is 30 cm³/s, so A = Q/v = 30 ÷ 15 = 2.0 cm². The value 0.12 cm² divides 1.8 by 15 with no conversion, and 120 cm² converts the liters but not the minutes. 450 cm² multiplies the flow rate by the speed.`,
      },
      {
        question: r`A heart-lung machine sends blood through a tube with a cross-sectional area of 5.0 cm². Its setting is raised from 3.0 L/min to 4.5 L/min. By how much does the blood's average speed in the tube rise?`,
        options: [r`0.30 cm/s`, r`5.0 cm/s`, r`300 cm/s`, r`15 cm/s`],
        correctAnswer: 1,
        explanation: r`The extra 1.5 L/min is 1500 cm³ per 60 s, which is 25 cm³/s, so the speed rises by 25 ÷ 5.0 = 5.0 cm/s (from 10 cm/s to 15 cm/s). The value 0.30 cm/s divides 1.5 by 5.0 with no conversion, and 300 cm/s converts the liters but not the minutes. 15 cm/s is the new speed, not the rise.`,
      },
      {
        question: r`An oxygen mask delivers gas at 6.0 L/min. How long does it take to deliver 250 cm³ of gas?`,
        options: [r`42 s`, r`0.40 s`, r`1500 s`, r`2.5 s`],
        correctAnswer: 3,
        explanation: r`6.0 L/min is 6000 cm³ per 60 s, which is 100 cm³/s, so the time is 250 ÷ 100 = 2.5 s. The value 42 s divides 250 by 6.0 with no conversion, and 1500 s multiplies those two numbers. The value 0.40 s divides the flow rate by the volume.`,
      },
      {
        question: r`A ventilator pushes air into a patient's airway at 7.5 L/min. What volume of air does it deliver in 4.0 s?`,
        options: [r`30 cm³`, r`500 cm³`, r`30,000 cm³`, r`125 cm³`],
        correctAnswer: 1,
        explanation: r`7.5 L/min is 7500 cm³ per 60 s, which is 125 cm³/s, so in 4.0 s the volume is 125 × 4.0 = 500 cm³. The value 30 cm³ multiplies 7.5 by 4.0 with no conversion, and 30,000 cm³ converts the liters but not the minutes. 125 cm³ is the volume for one second only.`,
      },
    ],
  },
  [r`What can the continuity equation tell you, and what can it not?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Water moves at 1 m/s through a hose with a cross-sectional area of 2 cm² and leaves through a nozzle with an area of 0.5 cm². Which question can NOT be answered with the continuity equation alone?`,
        options: [r`How fast the water moves inside the nozzle`, r`How much volume passes the nozzle each second`, r`How far the pressure falls from hose to nozzle`, r`How the nozzle's speed compares with the hose's`],
        correctAnswer: 2,
        explanation: r`Continuity links area to speed, so it gives the nozzle speed (4 m/s), the speed ratio, and the flow rate Av. It contains no pressure term, so the pressure change needs Bernoulli's equation as well.`,
      },
      {
        question: r`The throat of a horizontal pipe has one quarter of the wide section's cross-sectional area. A report states: "By continuity, the pressure in the throat is 4 times the pressure in the wide section." What is the verdict?`,
        options: [r`Wrong: continuity gives 4 times the speed and nothing about pressure`, r`Right: continuity gives 4 times the pressure where the area is 1/4`, r`Wrong: continuity gives 1/4 of the pressure where the area is 1/4`, r`Right: continuity gives 4 times the pressure and 4 times the speed`],
        correctAnswer: 0,
        explanation: r`Continuity is A₁v₁ = A₂v₂, so one quarter of the area means 4 times the speed. It has no pressure term, so it cannot give a pressure ratio of 4 or of 1/4. Finding the pressure in the throat takes Bernoulli's equation.`,
      },
    ],
  },
  [r`How do you find a flow rate from a volume delivered and the time it took?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A shower fills a 6.0 L bucket in 40 s. What is the shower's flow rate? (1 L = 1000 cm³)`,
        options: [r`0.15 cm³/s`, r`240 cm³/s`, r`6.7 cm³/s`, r`150 cm³/s`],
        correctAnswer: 3,
        explanation: r`Q = V/t = 6000 cm³ ÷ 40 s = 150 cm³/s. The value 0.15 cm³/s leaves the volume in liters, 240 multiplies 6.0 by 40, and 6.7 divides the time by the volume.`,
      },
      {
        question: r`A pump delivers water at a steady 250 cm³/s. How long does it take to fill a 30 L tank? (1 L = 1000 cm³)`,
        options: [r`120 s`, r`0.12 s`, r`7500 s`, r`8.3 s`],
        correctAnswer: 0,
        explanation: r`Rearranging Q = V/t gives t = V/Q = 30,000 cm³ ÷ 250 cm³/s = 120 s. The value 0.12 s leaves the volume in liters, 7500 s multiplies 30 by 250, and 8.3 s divides the flow rate by the volume.`,
      },
      {
        question: r`A tap runs at a steady 50 cm³/s for 3.0 minutes. How many liters of water does it deliver? (1 L = 1000 cm³)`,
        options: [r`0.15 L`, r`150 L`, r`9.0 L`, r`9000 L`],
        correctAnswer: 2,
        explanation: r`Rearranging Q = V/t gives V = Qt = 50 cm³/s × 180 s = 9000 cm³, which is 9.0 L. The value 0.15 L uses 3.0 as if it were seconds, and 150 L does the same without converting to liters. 9000 is the volume in cubic centimeters, not in liters.`,
      },
      {
        question: r`A heart ejects 80 cm³ of blood with each beat and beats 75 times per minute. What is the average flow rate of blood out of the heart?`,
        options: [r`6000 cm³/s`, r`100 cm³/s`, r`1.1 cm³/s`, r`64 cm³/s`],
        correctAnswer: 1,
        explanation: r`In one minute the heart delivers 80 × 75 = 6000 cm³, so Q = V/t = 6000 cm³ ÷ 60 s = 100 cm³/s. The value 6000 is the volume per minute, not per second. 1.1 divides 80 by 75, and 64 multiplies 80 by 60/75.`,
      },
      {
        question: r`A tanker unloads 12 m³ of fuel in 10 minutes at a steady rate. What is the flow rate in SI units?`,
        options: [r`1.2 m³/s`, r`0.20 m³/s`, r`50 m³/s`, r`0.020 m³/s`],
        correctAnswer: 3,
        explanation: r`Ten minutes is 600 s, so Q = V/t = 12 m³ ÷ 600 s = 0.020 m³/s. The value 1.2 divides by 10 as if the time were in seconds, and 0.20 divides by 60 only. The value 50 divides the time by the volume.`,
      },
      {
        question: r`Pump A delivers 20 L in 50 s. Pump B delivers 9.0 L in 15 s. Which pump has the larger flow rate? (1 L = 1000 cm³)`,
        options: [r`Pump A, at 1000 cm³/s against 135 cm³/s`, r`Pump A, at 2.5 cm³/s against 1.7 cm³/s`, r`Pump B, at 600 cm³/s against 400 cm³/s`, r`Neither, at 400 cm³/s for each of the pumps`],
        correctAnswer: 2,
        explanation: r`Q = V/t gives 20,000 ÷ 50 = 400 cm³/s for pump A and 9000 ÷ 15 = 600 cm³/s for pump B, so B is larger although it delivers less in total. The values 1000 and 135 multiply volume by time, and 2.5 and 1.7 divide time by volume.`,
      },
    ],
  },
  [r`Once you know the flow rate, how do you find the speed at any cross-section?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Milk leaves a storage vat at 720 cm³/s and passes a valve whose opening has a cross-sectional area of 12 cm². What is the milk's speed at the valve?`,
        options: [r`60 cm/s`, r`8640 cm/s`, r`0.017 cm/s`, r`6.0 cm/s`],
        correctAnswer: 0,
        explanation: r`v = Q/A = 720 ÷ 12 = 60 cm/s. The value 8640 cm/s multiplies the flow rate by the area, 0.017 cm/s divides the area by the flow rate, and 6.0 cm/s slips a power of ten in the division.`,
      },
      {
        question: r`A canal lock drains at 0.030 m³/s through an outlet with a cross-sectional area of 0.015 m². How fast does the water move through the outlet?`,
        options: [r`0.50 m/s`, r`2.0 m/s`, r`20 m/s`, r`0.00045 m/s`],
        correctAnswer: 1,
        explanation: r`v = Q/A = 0.030 ÷ 0.015 = 2.0 m/s. The value 0.50 m/s divides the area by the flow rate, 20 m/s slips a power of ten, and 0.00045 m/s multiplies the two numbers instead of dividing.`,
      },
      {
        question: r`Solvent flows at 360 cm³/s through a glass tube. The tube's cross-sectional area is 4.0 cm² at one point and 9.0 cm² at another. How fast does the solvent move at the 9.0 cm² point?`,
        options: [r`90 cm/s`, r`3240 cm/s`, r`28 cm/s`, r`40 cm/s`],
        correctAnswer: 3,
        explanation: r`The same 360 cm³/s passes every cross-section, so at the 9.0 cm² point v = 360 ÷ 9.0 = 40 cm/s. The value 90 cm/s is the speed at the 4.0 cm² point. 3240 cm/s multiplies by the area, and 28 cm/s divides by the sum of the two areas.`,
      },
      {
        question: r`The supply line of a city fountain carries 1.5 L/s, and its cross-sectional area is 30 cm². What speed does the water have in the supply line? (1 L = 1000 cm³)`,
        options: [r`0.050 cm/s`, r`20 cm/s`, r`50 cm/s`, r`45,000 cm/s`],
        correctAnswer: 2,
        explanation: r`The flow rate is 1500 cm³/s, so v = Q/A = 1500 ÷ 30 = 50 cm/s. The value 0.050 cm/s leaves the flow rate in liters, 20 cm/s divides 30 by 1.5, and 45,000 cm/s multiplies the flow rate by the area.`,
      },
      {
        question: r`Water flows at 2.0 × 10⁻⁴ m³/s through a tube with a cross-sectional area of 4.0 cm². How fast does the water move in the tube? (1 cm² = 10⁻⁴ m²)`,
        options: [r`0.050 m/s`, r`0.50 m/s`, r`5.0 m/s`, r`50 m/s`],
        correctAnswer: 1,
        explanation: r`The area is 4.0 × 10⁻⁴ m², so v = Q/A = 2.0 × 10⁻⁴ ÷ 4.0 × 10⁻⁴ = 0.50 m/s. The other values have the right digit with the wrong power of ten: 50 m/s, for example, treats 1 cm² as 10⁻⁶ m², and 0.050 m/s treats it as 10⁻³ m².`,
      },
      {
        question: r`A pump's flow rate is raised to 3 times its old value, and its outlet pipe is replaced by one with 6 times the cross-sectional area. How does the speed of the water in the outlet pipe change?`,
        options: [r`It becomes half as fast`, r`It becomes twice as fast`, r`It becomes 18 times as fast`, r`It becomes one-third as fast`],
        correctAnswer: 0,
        explanation: r`v = Q/A, so the speed changes by 3 ÷ 6 = one half. Twice as fast inverts the ratio, 18 times multiplies the two factors, and one-third does not follow from dividing 3 by 6.`,
      },
    ],
  },
  [r`How do you find the new speed where a pipe narrows?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Seawater enters a power station's intake tunnel at 2.0 m/s, where the tunnel's cross-sectional area is 0.50 m². Further in, the tunnel narrows to 0.20 m². What is the seawater's speed after the narrowing?`,
        options: [r`0.80 m/s`, r`2.5 m/s`, r`5.0 m/s`, r`0.20 m/s`],
        correctAnswer: 2,
        explanation: r`v₂ = v₁A₁/A₂ = 2.0 × 0.50 ÷ 0.20 = 5.0 m/s. The value 0.80 m/s inverts the area ratio, so the narrow part would be slower. 2.5 is the area ratio alone, and 0.20 m/s multiplies all three numbers.`,
      },
      {
        question: r`Water moves at 25 cm/s through a tube with a cross-sectional area of 8.0 cm². The tube narrows to 0.50 cm². How fast does the water move in the narrow part?`,
        options: [r`400 cm/s`, r`1.6 cm/s`, r`100 cm/s`, r`16 cm/s`],
        correctAnswer: 0,
        explanation: r`v₂ = v₁A₁/A₂ = 25 × 8.0 ÷ 0.50 = 400 cm/s. The value 1.6 cm/s inverts the area ratio, 100 cm/s multiplies by 0.50 instead of dividing by it, and 16 is the area ratio alone.`,
      },
      {
        question: r`A deposit reduces a pipe's cross-sectional area by 75% over a short stretch. Water enters the stretch at 0.50 m/s. How fast does it move through the stretch?`,
        options: [r`0.67 m/s`, r`0.125 m/s`, r`0.375 m/s`, r`2.0 m/s`],
        correctAnswer: 3,
        explanation: r`A 75% reduction leaves one quarter of the area, so v₂ = v₁A₁/A₂ = 0.50 × 4 = 2.0 m/s. The value 0.67 m/s divides by 0.75, using the area removed instead of the area left. 0.125 m/s and 0.375 m/s multiply by 0.25 and 0.75, making the water slower.`,
      },
      {
        question: r`Air moves at 3.0 m/s through a rectangular duct that measures 0.60 m by 0.40 m. The duct narrows to 0.30 m by 0.20 m. Treating the air as incompressible, how fast does it move in the narrow part?`,
        options: [r`6.0 m/s`, r`12 m/s`, r`0.75 m/s`, r`1.5 m/s`],
        correctAnswer: 1,
        explanation: r`The areas are 0.24 m² and 0.060 m², a ratio of 4, so v₂ = v₁A₁/A₂ = 3.0 × 4 = 12 m/s. The value 6.0 m/s uses the ratio of one side only. The values 0.75 m/s and 1.5 m/s divide instead, making the narrow part slower.`,
      },
      {
        question: r`In a brewery, beer travels at 0.20 m/s along a line whose cross-sectional area is 0.0050 m². At a valve the area is only 10 cm². What is the beer's speed at the valve? (1 cm² = 10⁻⁴ m²)`,
        options: [r`0.040 m/s`, r`0.0001 m/s`, r`100 m/s`, r`1.0 m/s`],
        correctAnswer: 3,
        explanation: r`10 cm² is 0.0010 m², so v₂ = v₁A₁/A₂ = 0.20 × 0.0050 ÷ 0.0010 = 1.0 m/s. The value 0.040 m/s inverts the area ratio. 0.0001 m/s divides by 10 without converting the cm², and 100 m/s treats 1 cm² as 10⁻⁶ m².`,
      },
      {
        question: r`Water enters a pipe with a cross-sectional area of 30 cm² at 0.10 m/s. The pipe narrows to 10 cm² and then again to 2.0 cm². How fast does the water move in the last section?`,
        options: [r`0.30 m/s`, r`0.50 m/s`, r`1.5 m/s`, r`0.0067 m/s`],
        correctAnswer: 2,
        explanation: r`Only the first and last areas matter: v₂ = v₁A₁/A₂ = 0.10 × 30 ÷ 2.0 = 1.5 m/s. The value 0.30 m/s is the speed in the middle section. 0.50 m/s applies only the second narrowing, and 0.0067 m/s inverts the area ratio.`,
      },
    ],
  },
  [r`A nozzle has one-third of the hose's diameter. How do the areas and the speeds compare?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Paint travels at 1.5 m/s along the feed tube of a spray gun. The gun's tip has half of the feed tube's inner diameter. What is the paint's speed in the tip?`,
        options: [r`3.0 m/s`, r`6.0 m/s`, r`0.75 m/s`, r`0.38 m/s`],
        correctAnswer: 1,
        explanation: r`Half the diameter is one quarter of the area, so the paint is 4 times as fast in the tip: 1.5 × 4 = 6.0 m/s. The value 3.0 m/s uses the diameter ratio without squaring it. The values 0.75 m/s and 0.38 m/s divide by 2 and by 4, making the paint slower in the tip.`,
      },
      {
        question: r`In a fuel injector, the fuel is 16 times as fast in the tip as in the supply line that feeds it. How does the tip's inner diameter compare with the supply line's?`,
        options: [r`It is one-sixteenth of the supply line's diameter`, r`It is one-eighth of the supply line's diameter`, r`It is one-half of the supply line's diameter`, r`It is one-quarter of the supply line's diameter`],
        correctAnswer: 3,
        explanation: r`Sixteen times the speed means one-sixteenth of the area, and the area goes as the diameter squared, so the diameter is one quarter. One-sixteenth is the area ratio, not the diameter ratio. One-eighth halves 16 instead of taking its square root, and one-half would give only 4 times the speed.`,
      },
      {
        question: r`A drain pipe has 3 times the inner diameter of the pipe that feeds it. How do the drain pipe's area and the water's speed in it compare with those in the feed pipe?`,
        options: [r`9 times the area, so 1/9 of the speed`, r`3 times the area, so 1/3 of the speed`, r`9 times the area, so 1/3 of the speed`, r`3 times the area, so 1/9 of the speed`],
        correctAnswer: 0,
        explanation: r`The diameter ratio must be squared to get the area ratio: 3² = 9 times the area, and the same flow rate through 9 times the area has 1/9 of the speed. Three times the area forgets the square. Pairing 9 times the area with 1/3 of the speed, or 3 with 1/9, breaks Av = constant.`,
      },
      {
        question: r`A fire engine's supply line has an inner diameter of 60 mm, and water travels along it at 0.80 m/s. The line ends in a tip with an inner diameter of 12 mm. What is the water's speed in the tip?`,
        options: [r`4.0 m/s`, r`0.16 m/s`, r`20 m/s`, r`0.032 m/s`],
        correctAnswer: 2,
        explanation: r`The tip has one-fifth of the line's diameter, so 1/25 of its area, and the water is 25 times as fast: 0.80 × 25 = 20 m/s. The value 4.0 m/s multiplies by 5 without squaring. The values 0.16 m/s and 0.032 m/s divide by 5 and by 25.`,
      },
      {
        question: r`The jet of a fountain emerges from its outlet at 18 m/s. The outlet's inner diameter is one-third of the supply pipe's. What is the water's speed in the supply pipe?`,
        options: [r`2.0 m/s`, r`6.0 m/s`, r`54 m/s`, r`162 m/s`],
        correctAnswer: 0,
        explanation: r`One-third of the diameter is one-ninth of the area, so the outlet speed is 9 times the supply pipe's speed, which is 18 ÷ 9 = 2.0 m/s. The value 6.0 m/s divides by 3 without squaring. The values 54 m/s and 162 m/s make the water faster in the wider pipe.`,
      },
      {
        question: r`A nozzle has two-thirds of the inner diameter of the hose that feeds it. How do the nozzle's area and the water's speed in it compare with those in the hose?`,
        options: [r`2/3 of the area, so 3/2 of the speed`, r`4/9 of the area, so 3/2 of the speed`, r`2/3 of the area, so 9/4 of the speed`, r`4/9 of the area, so 9/4 of the speed`],
        correctAnswer: 3,
        explanation: r`Squaring the diameter ratio gives the area ratio, (2/3)² = 4/9, and the speed ratio is its inverse, 9/4. Using 2/3 for the area forgets the square. The mixed options pair an area ratio with a speed ratio that is not its inverse, which breaks Av = constant.`,
      },
    ],
  },
  [r`How do you convert a flow rate from cm³/s to L/min?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A kitchen tap delivers water at 200 cm³/s. What is this flow rate in liters per minute?`,
        options: [r`3.3 L/min`, r`12,000 L/min`, r`12 L/min`, r`0.20 L/min`],
        correctAnswer: 2,
        explanation: r`200 cm³/s × 60 = 12,000 cm³/min, and dividing by 1000 gives 12 L/min. The value 3.3 divides by 60 instead of multiplying. 12,000 is the flow in cm³ per minute, not liters, and 0.20 converts to liters but leaves the time in seconds.`,
      },
      {
        question: r`Water moves at 40 cm/s through a tube with a cross-sectional area of 2.5 cm². What is the flow rate in liters per minute?`,
        options: [r`6.0 L/min`, r`0.10 L/min`, r`1.7 L/min`, r`6000 L/min`],
        correctAnswer: 0,
        explanation: r`Q = Av = 2.5 × 40 = 100 cm³/s. Multiplying by 60 gives 6000 cm³/min, which is 6.0 L/min. The value 0.10 is in liters per second, 1.7 divides by 60 instead of multiplying, and 6000 is in cm³ per minute, not liters.`,
      },
      {
        question: r`A slow drip line releases water at 0.50 cm³/s. What is this flow rate in liters per minute?`,
        options: [r`30 L/min`, r`0.030 L/min`, r`0.0083 L/min`, r`0.50 L/min`],
        correctAnswer: 1,
        explanation: r`0.50 cm³/s × 60 = 30 cm³/min, and dividing by 1000 gives 0.030 L/min. The value 30 forgets to divide by 1000, 0.0083 divides by 60 instead of multiplying, and 0.50 changes the unit without converting the number.`,
      },
      {
        question: r`A resting heart pumps blood at an average of 80 cm³/s. What is this cardiac output in liters per minute?`,
        options: [r`1.3 L/min`, r`0.080 L/min`, r`4800 L/min`, r`4.8 L/min`],
        correctAnswer: 3,
        explanation: r`80 cm³/s × 60 = 4800 cm³/min, and dividing by 1000 gives 4.8 L/min. The value 1.3 divides by 60 instead of multiplying. 0.080 is in liters per second, and 4800 is in cm³ per minute, not liters.`,
      },
      {
        question: r`A tap runs at a steady 75 cm³/s. By first converting the flow rate to L/min, find how many liters the tap delivers in 2.0 minutes.`,
        options: [r`4.5 L`, r`9000 L`, r`9.0 L`, r`0.15 L`],
        correctAnswer: 2,
        explanation: r`75 cm³/s × 60 = 4500 cm³/min, which is 4.5 L/min, so in 2.0 minutes the tap delivers 9.0 L. The value 4.5 L is the volume for one minute only. 9000 is the volume in cubic centimeters, and 0.15 L multiplies 75 by 2.0 without converting the minutes to seconds.`,
      },
      {
        question: r`Pump X is rated at 45 cm³/s and pump Y at 2.4 L/min. Which pump delivers more water each minute?`,
        options: [r`Pump Y, since 45 cm³/s is only 0.75 L/min`, r`Pump X, since 45 cm³/s is equal to 2.7 L/min`, r`Pump Y, since 45 cm³/s is only 0.045 L/min`, r`Neither, since 45 cm³/s is equal to 2.4 L/min`],
        correctAnswer: 1,
        explanation: r`45 cm³/s × 60 = 2700 cm³/min, which is 2.7 L/min, more than pump Y's 2.4 L/min. The value 0.75 L/min divides 45 by 60 instead of multiplying, and 0.045 L/min converts to liters but leaves the time in seconds.`,
      },
    ],
  },
  [r`How do you find the speed of a fluid in a bed of many parallel vessels?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A car radiator receives coolant at 500 cm³/s and passes it through 50 parallel tubes, each with a cross-sectional area of 0.20 cm². How fast does the coolant move inside the tubes?`,
        options: [r`2500 cm/s`, r`0.020 cm/s`, r`5000 cm/s`, r`50 cm/s`],
        correctAnswer: 3,
        explanation: r`The total area is 50 × 0.20 = 10 cm², so v = Q/A_total = 500 ÷ 10 = 50 cm/s. The value 2500 cm/s divides by one tube's area. 0.020 cm/s divides the total area by the flow rate, and 5000 cm/s multiplies the flow rate by the total area.`,
      },
      {
        question: r`A heat exchanger receives water at 240 cm³/s, and the water must move at 4.0 cm/s through its parallel tubes. What total cross-sectional area must the tubes have?`,
        options: [r`60 cm²`, r`960 cm²`, r`0.017 cm²`, r`6.0 cm²`],
        correctAnswer: 0,
        explanation: r`Rearranging v = Q/A_total gives A_total = Q/v = 240 ÷ 4.0 = 60 cm². The value 960 cm² multiplies the flow rate by the speed, 0.017 cm² divides the speed by the flow rate, and 6.0 cm² slips a power of ten.`,
      },
      {
        question: r`A filter receives liquid at 60 cm³/s and shares it among identical parallel tubes, each with a cross-sectional area of 0.010 cm². The liquid moves at 3.0 cm/s in the tubes. How many tubes does the filter have?`,
        options: [r`20 tubes`, r`2000 tubes`, r`6000 tubes`, r`18,000 tubes`],
        correctAnswer: 1,
        explanation: r`The total area is Q/v = 60 ÷ 3.0 = 20 cm², and 20 ÷ 0.010 = 2000 tubes. The answer 20 is the total area in cm², not a number of tubes. The answer 6000 divides the flow rate by one tube's area and ignores the speed, and 18,000 multiplies by the speed instead of dividing.`,
      },
      {
        question: r`A dialysis machine sends blood at 300 mL/min through 10,000 parallel hollow fibers, each with a cross-sectional area of 2.5 × 10⁻⁴ cm². How fast does the blood move inside the fibers?`,
        options: [r`120 cm/s`, r`20,000 cm/s`, r`2.0 cm/s`, r`0.50 cm/s`],
        correctAnswer: 2,
        explanation: r`300 mL/min is 300 cm³ per 60 s, which is 5.0 cm³/s, and the total area is 10,000 × 2.5 × 10⁻⁴ = 2.5 cm², so v = 5.0 ÷ 2.5 = 2.0 cm/s. The value 120 cm/s does not convert the minutes. 20,000 cm/s divides by one fiber's area, and 0.50 cm/s divides the total area by the flow rate.`,
      },
      {
        question: r`Liquid moves at 1.0 cm/s through a bed of 2000 identical parallel vessels. More vessels open until 5000 carry the flow, while the flow rate feeding the bed stays the same. How fast does the liquid move in the vessels now?`,
        options: [r`0.40 cm/s`, r`2.5 cm/s`, r`1.0 cm/s`, r`0.16 cm/s`],
        correctAnswer: 0,
        explanation: r`The total area rises by 5000 ÷ 2000 = 2.5 times, so the speed falls to 1.0 ÷ 2.5 = 0.40 cm/s. The value 2.5 cm/s multiplies instead of dividing, 1.0 cm/s ignores the change in total area, and 0.16 cm/s squares the ratio, which applies to a radius, not to a number of vessels.`,
      },
      {
        question: r`In a bed of 400 identical parallel tubes, each with a cross-sectional area of 0.050 cm², liquid moves at 6.0 cm/s. What flow rate feeds the bed?`,
        options: [r`0.30 cm³/s`, r`3.3 cm³/s`, r`48,000 cm³/s`, r`120 cm³/s`],
        correctAnswer: 3,
        explanation: r`The total area is 400 × 0.050 = 20 cm², so Q = A_total × v = 20 × 6.0 = 120 cm³/s. The value 0.30 cm³/s is the flow through one tube only. 3.3 cm³/s divides the total area by the speed, and 48,000 cm³/s divides by one tube's area instead of multiplying.`,
      },
    ],
  },
  [r`What are three common traps in flow-rate and continuity problems?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student writes: "The pipe's diameter falls to one quarter, so the water moves 4 times as fast." Which statement about this working is correct?`,
        options: [r`The diameter ratio was inverted: the water is 1/4 as fast`, r`The diameter ratio was used well: the water is 4 times as fast`, r`The diameter ratio was not squared: the water is 16 times as fast`, r`The diameter ratio was not doubled: the water is 8 times as fast`],
        correctAnswer: 2,
        explanation: r`The area goes as the diameter squared, so one quarter of the diameter is one-sixteenth of the area and 16 times the speed. Using the diameter ratio as the speed ratio is one of the common traps. A narrower pipe cannot make the water slower, and doubling the ratio has no basis in A = πr².`,
      },
      {
        question: r`A student finds the speed in a tube from a pump setting of 3.0 L/min and a cross-sectional area of 2.0 cm², writing "3.0 ÷ 2.0 = 1.5 cm/s". What went wrong, and what is the speed?`,
        options: [r`Liters and minutes were both left unconverted: it is 25 cm/s`, r`Only the minutes were left unconverted: it is 1500 cm/s`, r`Only the liters were left unconverted: it is 0.025 cm/s`, r`The area should have been multiplied in: it is 6.0 cm/s`],
        correctAnswer: 0,
        explanation: r`3.0 L/min is 3000 cm³ per 60 s, which is 50 cm³/s, so the speed is 50 ÷ 2.0 = 25 cm/s. The working mixed liters with cubic centimeters and minutes with seconds, so both units were at fault, not one. The values 1500 cm/s and 0.025 cm/s each still carry one unconverted unit, and multiplying by the area does not give a speed.`,
      },
    ],
  },
}
