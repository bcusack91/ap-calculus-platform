import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for volume flow rate, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A report on a kitchen faucet lists four measurements. Which one is the volume flow rate Q, given in its SI unit?`,
        options: [r`0.48 m/s, the distance moved each second`, r`0.15 kg/s, the mass passing each second`, r`3.1 × 10⁻⁴ m², the area the water crosses`, r`1.5 × 10⁻⁴ m³/s, the volume passing each second`],
        correctAnswer: 3,
        explanation: r`Volume flow rate is the volume of fluid passing a point each second, so its SI unit is m³/s. A value in m/s is a speed, a value in kg/s is a mass flow rate, and a value in m² is the cross-sectional area.`,
      },
      {
        question: r`The flow rate in a garden hose is Q = 5.0 × 10⁻⁴ m³/s. What does this value say about the water over one minute?`,
        options: [r`0.030 m is the distance the water moves in the hose`, r`0.030 kg of water passes any point in the hose`, r`0.030 m³ of water is held inside the hose`, r`0.030 m³ of water passes any point in the hose`],
        correctAnswer: 3,
        explanation: r`Q is the volume passing a point each second, so in 60 s the volume passing is 5.0 × 10⁻⁴ × 60 = 0.030 m³. A distance would need a speed in m/s, a mass would need the density, and the volume held inside the hose depends on the hose's size, not on Q.`,
      },
    ],
  },
  [r`What symbol stands for the driving pressure across a tube, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two horizontal tubes carry oil. In tube X the pressure is 300 kPa at the inlet and 290 kPa at the outlet. In tube Y it is 60 kPa at the inlet and 40 kPa at the outlet. Which tube has the greater driving pressure ΔP, and what is its value?`,
        options: [r`Tube Y, with ΔP = 20,000 Pa`, r`Tube X, with ΔP = 300,000 Pa`, r`Tube X, with ΔP = 295,000 Pa`, r`Tube Y, with ΔP = 50,000 Pa`],
        correctAnswer: 0,
        explanation: r`The driving pressure is the difference between the two ends: 10 kPa for tube X and 60 − 40 = 20 kPa = 20,000 Pa for tube Y. The value 300,000 Pa is tube X's inlet pressure alone, and 295,000 Pa and 50,000 Pa are averages of the two ends, not differences.`,
      },
      {
        question: r`A flow calculation for a horizontal drain tube uses ΔP = 4,000 Pa. The liquid leaves the tube's outlet at a pressure of 101,000 Pa. What is the pressure at the tube's inlet?`,
        options: [r`105,000 Pa`, r`97,000 Pa`, r`4,000 Pa`, r`101,000 Pa`],
        correctAnswer: 0,
        explanation: r`ΔP is the pressure difference between the tube's ends, and fluid is driven from the higher pressure to the lower, so the inlet is at 101,000 + 4,000 = 105,000 Pa. The value 97,000 Pa puts the higher pressure at the outlet, 4,000 Pa treats ΔP as the inlet pressure itself, and 101,000 Pa leaves no difference to drive the flow.`,
      },
    ],
  },
  [r`Write Poiseuille's law as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Oil of viscosity 0.10 Pa·s flows in steady, laminar flow through a rigid tube of inside radius 2.0 × 10⁻³ m and length 0.50 m. The pressure difference between the ends is 5,000 Pa. What is the flow rate?`,
        options: [r`1.6π × 10⁻⁶ m³/s`, r`5π × 10⁻⁸ m³/s`, r`2π × 10⁻⁷ m³/s`, r`5π × 10⁻² m³/s`],
        correctAnswer: 2,
        explanation: r`Q = πr⁴ΔP/(8ηL), with r⁴ = 1.6 × 10⁻¹¹ m⁴: the top is π × 1.6 × 10⁻¹¹ × 5,000 = π × 8.0 × 10⁻⁸ and the bottom is 8 × 0.10 × 0.50 = 0.40, so Q = 2π × 10⁻⁷ m³/s. Leaving out the 8 gives 1.6π × 10⁻⁶, putting the length on top gives 5π × 10⁻⁸, and using r² in place of r⁴ gives 5π × 10⁻².`,
      },
      {
        question: r`A liquid of viscosity 2.0 × 10⁻³ Pa·s must be delivered at π × 10⁻⁶ m³/s in laminar flow through a rigid tube of inside radius 1.0 × 10⁻³ m and length 0.25 m. What pressure difference between the ends is needed?`,
        options: [r`4,000 Pa`, r`500 Pa`, r`64,000 Pa`, r`4.0 × 10⁻³ Pa`],
        correctAnswer: 0,
        explanation: r`Rearranging Poiseuille's law, ΔP = 8ηLQ/(πr⁴) = 8 × 2.0 × 10⁻³ × 0.25 × 10⁻⁶ ÷ 10⁻¹² = 4.0 × 10⁻⁹ ÷ 10⁻¹² = 4,000 Pa. Leaving out the 8 gives 500 Pa, dividing by the length gives 64,000 Pa, and dividing by r² gives 4.0 × 10⁻³ Pa.`,
      },
      {
        question: r`In a viscosity test, a pressure difference of 1,600 Pa drives a liquid in laminar flow through a rigid tube of inside radius 1.0 × 10⁻³ m and length 0.20 m. The measured flow rate is π × 10⁻⁷ m³/s. What is the liquid's viscosity?`,
        options: [r`1.0 × 10⁻² Pa·s`, r`8.0 × 10⁻² Pa·s`, r`1.0 × 10² Pa·s`, r`1.0 × 10⁴ Pa·s`],
        correctAnswer: 0,
        explanation: r`Rearranging Poiseuille's law, η = πr⁴ΔP/(8LQ) = 10⁻¹² × 1,600 ÷ (8 × 0.20 × 10⁻⁷) = 1.6 × 10⁻⁹ ÷ 1.6 × 10⁻⁷ = 1.0 × 10⁻² Pa·s. Leaving out the 8 gives 8.0 × 10⁻², turning the fraction upside down gives 1.0 × 10², and using r² gives 1.0 × 10⁴.`,
      },
      {
        question: r`A pressure difference of 4,000 Pa drives a fluid of viscosity 4.0 × 10⁻³ Pa·s in laminar flow through a rigid tube of inside radius 2.0 × 10⁻³ m. The flow rate is π × 10⁻⁶ m³/s. How long is the tube?`,
        options: [r`0.50 m`, r`2.0 m`, r`16 m`, r`1.0 m`],
        correctAnswer: 1,
        explanation: r`Rearranging Poiseuille's law, L = πr⁴ΔP/(8ηQ) = 1.6 × 10⁻¹¹ × 4,000 ÷ (8 × 4.0 × 10⁻³ × 10⁻⁶) = 6.4 × 10⁻⁸ ÷ 3.2 × 10⁻⁸ = 2.0 m. The value 0.50 m is the fraction upside down, 16 m leaves out the 8, and 1.0 m takes 2.0⁴ as 8 instead of 16.`,
      },
      {
        question: r`A fluid of viscosity 4.0 × 10⁻³ Pa·s must flow at π × 10⁻⁶ m³/s in laminar flow through a rigid tube 1.0 m long, with a pressure difference of 2,000 Pa between its ends. What inside radius must the tube have?`,
        options: [r`4.0 × 10⁻⁶ m`, r`1.6 × 10⁻¹¹ m`, r`4.0 × 10⁻¹² m`, r`2.0 × 10⁻³ m`],
        correctAnswer: 3,
        explanation: r`Rearranging Poiseuille's law, r⁴ = 8ηLQ/(πΔP) = 8 × 4.0 × 10⁻³ × 1.0 × 10⁻⁶ ÷ 2,000 = 1.6 × 10⁻¹¹ = 16 × 10⁻¹² m⁴, and the fourth root is 2.0 × 10⁻³ m. The value 4.0 × 10⁻⁶ takes only a square root, 1.6 × 10⁻¹¹ is r⁴ itself, and 4.0 × 10⁻¹² divides r⁴ by 4.`,
      },
      {
        question: r`A fluid of viscosity 4.0 × 10⁻³ Pa·s flows in laminar flow through a rigid tube of inside radius 1.0 mm and length 10 cm. The pressure difference between the ends is 6.4 kPa. Taking π ≈ 3.14, what is the flow rate in mL/s? (1 m³/s = 10⁶ mL/s)`,
        options: [r`About 0.063 mL/s`, r`About 6.3 mL/s`, r`About 6.3 × 10⁻³ mL/s`, r`About 50 mL/s`],
        correctAnswer: 1,
        explanation: r`In SI units r = 1.0 × 10⁻³ m, L = 0.10 m and ΔP = 6,400 Pa, so Q = π × 10⁻¹² × 6,400 ÷ (8 × 4.0 × 10⁻³ × 0.10) = 2π × 10⁻⁶ m³/s, about 6.3 mL/s. Leaving the length as 10 gives 0.063 mL/s, leaving the pressure as 6.4 gives 6.3 × 10⁻³ mL/s, and leaving out the 8 gives about 50 mL/s.`,
      },
    ],
  },
  [r`Where do the length and the viscosity sit in Poiseuille's law, and why?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student cannot remember Poiseuille's law but knows two facts about a long straw at a fixed pressure difference: honey runs through it more slowly than water, and a longer straw of the same radius passes less liquid. Which version of the law agrees with both facts?`,
        options: [r`Q = πr⁴ΔP/(8ηL)`, r`Q = πr⁴ΔPη/(8L)`, r`Q = πr⁴ΔPL/(8η)`, r`Q = πr⁴ηL/(8ΔP)`],
        correctAnswer: 0,
        explanation: r`A thicker fluid and a longer tube both reduce the flow, so the viscosity η and the length L must both sit on the bottom, with the driving pressure on top. The version with η on top would make honey faster than water, the version with L on top would make a longer straw pass more, and the last version has both on top and the pressure on the bottom.`,
      },
      {
        question: r`The same pressure difference is applied in two tests. In test 1, a second fluid flows more slowly than the first through one tube. In test 2, one fluid flows more slowly through tube B than through tube A, and the two tubes have the same radius. The flow is laminar throughout. What explains both results?`,
        options: [r`The second fluid is more viscous, and tube B is longer`, r`The second fluid is more viscous, and tube B is shorter`, r`The second fluid is less viscous, and tube B is longer`, r`The second fluid is less viscous, and tube B is shorter`],
        correctAnswer: 0,
        explanation: r`Viscosity and length are both on the bottom of Poiseuille's law, so a smaller flow at the same pressure difference means more internal friction in test 1 and more wall to drag against in test 2. A less viscous fluid or a shorter tube would each raise the flow, not lower it.`,
      },
    ],
  },
  [r`In Poiseuille's law, what happens to the flow when the pressure difference, the length or the viscosity is doubled?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pressure difference of 3.0 kPa drives oil in laminar flow through a long, rigid pipe at 12 mL/s. The pressure difference is raised to 7.5 kPa, and the pipe and the oil are unchanged. What is the new flow rate?`,
        options: [r`4.8 mL/s`, r`30 mL/s`, r`16.5 mL/s`, r`75 mL/s`],
        correctAnswer: 1,
        explanation: r`Flow is proportional to the pressure difference, which becomes 7.5 ÷ 3.0 = 2.5 times as great, so the flow is 12 × 2.5 = 30 mL/s. Dividing by 2.5 gives 4.8 mL/s, adding the 4.5 kPa rise to the flow gives 16.5 mL/s, and squaring the factor gives 75 mL/s.`,
      },
      {
        question: r`A rigid tube 0.50 m long delivers a nutrient solution at 40 mL/min in laminar flow. It is replaced by a tube of the same radius that is 2.0 m long, and the pressure difference and the solution are unchanged. What is the new flow rate?`,
        options: [r`160 mL/min`, r`2.5 mL/min`, r`20 mL/min`, r`10 mL/min`],
        correctAnswer: 3,
        explanation: r`Flow is inversely proportional to the length, and the tube is 2.0 ÷ 0.50 = 4 times as long, so the flow is 40 ÷ 4 = 10 mL/min. Multiplying by 4 gives 160 mL/min, dividing by 4² gives 2.5 mL/min, and 20 mL/min halves the flow as if the length had only doubled.`,
      },
      {
        question: r`Water, of viscosity 1.0 mPa·s, flows through a long, rigid tube at 60 mL/s. A sugar solution driven through the same tube by the same pressure difference flows at 15 mL/s. Both flows are laminar. What is the viscosity of the sugar solution?`,
        options: [r`0.25 mPa·s`, r`4.0 mPa·s`, r`2.0 mPa·s`, r`16 mPa·s`],
        correctAnswer: 1,
        explanation: r`Flow is inversely proportional to viscosity. The flow fell to 15 ÷ 60 = one quarter, so the viscosity is 4 times that of water: 4.0 mPa·s. The value 0.25 mPa·s inverts the relationship, 2.0 mPa·s takes a square root that the law does not contain, and 16 mPa·s squares the factor.`,
      },
      {
        question: r`A pressure difference of 2.0 kPa drives a liquid in laminar flow through a rigid tube. The tube is extended to 3 times its length with tubing of the same radius. What pressure difference keeps the flow rate of the same liquid unchanged?`,
        options: [r`0.67 kPa`, r`18 kPa`, r`2.0 kPa`, r`6.0 kPa`],
        correctAnswer: 3,
        explanation: r`Tripling the length alone would cut the flow to one third, so the pressure difference must triple to cancel it: 2.0 × 3 = 6.0 kPa. Dividing by 3 gives 0.67 kPa, squaring the factor gives 18 kPa, and leaving the pressure at 2.0 kPa would let the flow fall to one third.`,
      },
      {
        question: r`On a cold morning an engine's oil has twice its usual viscosity, and it must be pumped through a line twice as long as the usual one, with the same radius and the same pressure difference. The flow is laminar. How does the flow rate compare with its usual value?`,
        options: [r`It is one half of the usual value`, r`It is the same as the usual value`, r`It is one quarter of the usual value`, r`It is 4 times the usual value`],
        correctAnswer: 2,
        explanation: r`Doubling the viscosity halves the flow, and doubling the length halves it again: ½ × ½ = one quarter. One half counts only one of the two changes, an unchanged flow treats the two changes as cancelling, and 4 times puts the viscosity and length on top of the law instead of the bottom.`,
      },
      {
        question: r`Under a pressure difference of 20 kPa, a long, thin feed line fills a 300 mL beaker in 60 s. The pressure difference is raised to 50 kPa, with the same line and liquid and laminar flow. How long does it now take to fill the beaker?`,
        options: [r`150 s`, r`9.6 s`, r`24 s`, r`30 s`],
        correctAnswer: 2,
        explanation: r`The pressure difference is 2.5 times as great, so the flow is 2.5 times as great and the same volume takes 60 ÷ 2.5 = 24 s. Multiplying the time by 2.5 gives 150 s, dividing by 2.5² gives 9.6 s, and 30 s treats the pressure as merely doubled.`,
      },
    ],
  },
  [r`A tube's radius changes by a factor $k$ at a fixed pressure difference. By what factor does the flow change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A long, rigid tube passes dye solution at 1.0 mL/s in laminar flow. It is replaced by a tube of the same length with 3 times the inside radius, and the pressure difference between the ends is unchanged. What is the new flow rate?`,
        options: [r`3.0 mL/s`, r`9.0 mL/s`, r`27 mL/s`, r`81 mL/s`],
        correctAnswer: 3,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, so tripling the radius multiplies it by 3⁴ = 81: 1.0 × 81 = 81 mL/s. The value 3.0 mL/s uses the first power of the radius, 9.0 mL/s the square and 27 mL/s the cube.`,
      },
      {
        question: r`A drain tube carries 20 mL/s in laminar flow. It is replaced by a tube of the same length whose inside radius is 50% larger, with the same liquid and the same pressure difference. Using 1.5⁴ ≈ 5, about what is the new flow rate?`,
        options: [r`About 30 mL/s`, r`About 45 mL/s`, r`About 100 mL/s`, r`About 68 mL/s`],
        correctAnswer: 2,
        explanation: r`A radius 50% larger is 1.5 times the old one, and at a fixed pressure difference the flow goes as r⁴, so it becomes about 5 × 20 = 100 mL/s. About 30 mL/s uses the first power of 1.5, about 45 mL/s uses 1.5² = 2.25, and about 68 mL/s uses 1.5³ ≈ 3.4.`,
      },
      {
        question: r`A filter line with a tube of inside radius 1.5 mm is too slow. The same liquid must flow at 16 times the present rate through a new tube of the same length, at the same pressure difference and in laminar flow. What inside radius should the new tube have?`,
        options: [r`6.0 mm`, r`24 mm`, r`3.0 mm`, r`2.1 mm`],
        correctAnswer: 2,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, so 16 times the flow needs a radius factor k with k⁴ = 16, which is k = 2: 1.5 × 2 = 3.0 mm. The value 6.0 mm uses a square rule, with k² = 16, 24 mm multiplies the radius by 16, and 2.1 mm takes one square root too many.`,
      },
      {
        question: r`Two pipes of equal length carry the same oil in laminar flow under the same pressure difference. One has an inside diameter of 2.0 cm and the other an inside diameter of 5.0 mm. How many times the narrow pipe's flow does the wide pipe carry?`,
        options: [r`16 times`, r`64 times`, r`4 times`, r`256 times`],
        correctAnswer: 3,
        explanation: r`In the same unit the diameters are 20 mm and 5.0 mm, so the radius ratio is 4 and the flow ratio is 4⁴ = 256. The value 16 uses the square of the ratio, 64 uses the cube, and 4 uses the ratio itself.`,
      },
      {
        question: r`A glass microtube of inside radius 0.20 mm passes 3.0 × 10⁻³ mL/s of a thick oil in laminar flow. A tube of the same length with an inside radius of 2.0 mm is used instead, at the same pressure difference. What flow rate does it pass, still in laminar flow?`,
        options: [r`0.030 mL/s`, r`30 mL/s`, r`0.30 mL/s`, r`3.0 mL/s`],
        correctAnswer: 1,
        explanation: r`The radius is 10 times as large, and at a fixed pressure difference the flow goes as r⁴, so it is 10⁴ times as great: 3.0 × 10⁻³ × 10⁴ = 30 mL/s. The values 0.030, 0.30 and 3.0 mL/s multiply by only 10, 10² and 10³.`,
      },
      {
        question: r`Mineral scale builds up evenly inside a long pipe until its inside radius is one quarter of the original. The pipe carried 512 mL/min when clean. With the same liquid, the same pressure difference and laminar flow, what does it carry now?`,
        options: [r`2.0 mL/min`, r`128 mL/min`, r`32 mL/min`, r`8.0 mL/min`],
        correctAnswer: 0,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, and (¼)⁴ = 1/256, so the flow is 512 ÷ 256 = 2.0 mL/min. The value 128 mL/min divides by 4, 32 mL/min divides by 4² = 16, and 8.0 mL/min divides by 4³ = 64.`,
      },
    ],
  },
  [r`Why does doubling a tube's radius multiply the flow by 16, not 4?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student reasons that doubling a tube's radius at a fixed pressure difference gives 4 times the cross-sectional area and therefore 4 times the laminar flow. What has the student left out?`,
        options: [r`The average speed is also one quarter as great, as the fluid has more room`, r`The pressure difference is also 4 times as great, as the tube is wider`, r`The average speed is also 4 times as great, as more fluid is far from the wall`, r`The viscosity is also one quarter as great, as less fluid touches the wall`],
        correctAnswer: 2,
        explanation: r`Flow is area times average speed. The wider tube has 4 times the area, and because more of its fluid is far from the dragging wall its average speed is 4 times as great too, giving 16 times the flow. The speed does not fall, the pressure difference was stated to be fixed, and viscosity belongs to the fluid, not the tube.`,
      },
      {
        question: r`Liquid moves in laminar flow through a tube of cross-sectional area 3.0 mm² at an average speed of 5.0 cm/s. The tube is replaced by one of the same length with twice the radius, at the same pressure difference. What are the new tube's area and the liquid's new average speed?`,
        options: [r`Area 12 mm² and average speed 5.0 cm/s`, r`Area 6.0 mm² and average speed 40 cm/s`, r`Area 12 mm² and average speed 20 cm/s`, r`Area 12 mm² and average speed 1.25 cm/s`],
        correctAnswer: 2,
        explanation: r`Twice the radius gives 2² = 4 times the area, 12 mm², and at a fixed pressure difference the average speed is also 4 times as great, 20 cm/s. Together they make the flow 16 times as great. An unchanged speed gives only 4 times the flow, an area of 6.0 mm² forgets that area goes as r², and a speed of 1.25 cm/s belongs to a fixed flow rate, not a fixed pressure difference.`,
      },
    ],
  },
  [r`The flow through a narrower tube must stay the same. How must the pressure difference change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An injection through a needle of inside radius 0.40 mm needs a pressure difference of 0.25 kPa. The same liquid must be delivered at the same flow rate through a needle of the same length with an inside radius of 0.20 mm. With laminar flow, what pressure difference is needed?`,
        options: [r`1.0 kPa`, r`4.0 kPa`, r`0.50 kPa`, r`2.0 kPa`],
        correctAnswer: 1,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴. The radius is halved, so the pressure difference is 2⁴ = 16 times as great: 0.25 × 16 = 4.0 kPa. The value 1.0 kPa uses a square rule, 0.50 kPa a first-power rule, and 2.0 kPa a cube rule.`,
      },
      {
        question: r`A pump needs a pressure difference of 48 kPa to push coolant at a set flow rate through a long, rigid line. The line is replaced by one of the same length with twice the inside radius, and the flow rate is kept the same. With laminar flow, what pressure difference is needed now?`,
        options: [r`12 kPa`, r`3.0 kPa`, r`24 kPa`, r`768 kPa`],
        correctAnswer: 1,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so doubling the radius divides it by 2⁴ = 16: 48 ÷ 16 = 3.0 kPa. The value 12 kPa divides by only 4, 24 kPa by only 2, and 768 kPa multiplies by 16 as if the tube had narrowed.`,
      },
      {
        question: r`A dialysis line needs a pressure difference of 20 kPa to carry its set flow. It is replaced by a line of the same length whose inside radius is 1.5 times as large, and the flow rate of the same fluid is unchanged. Using 1.5⁴ ≈ 5, about what pressure difference is needed, with laminar flow?`,
        options: [r`About 13 kPa`, r`About 9 kPa`, r`About 4 kPa`, r`About 100 kPa`],
        correctAnswer: 2,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so it is divided by 1.5⁴ ≈ 5: 20 ÷ 5 = 4 kPa. About 13 kPa divides by 1.5 only, about 9 kPa divides by 1.5² = 2.25, and about 100 kPa multiplies by 5 as if the line had narrowed.`,
      },
      {
        question: r`A tube of inside radius 1.0 mm needs a pressure difference of 32 kPa to carry a certain laminar flow. With a second tube of the same length, the same liquid flows at the same rate under only 2.0 kPa. What is the second tube's inside radius?`,
        options: [r`16 mm`, r`4.0 mm`, r`0.50 mm`, r`2.0 mm`],
        correctAnswer: 3,
        explanation: r`The pressure difference fell by a factor of 32 ÷ 2.0 = 16, and at a fixed flow it goes as 1/r⁴, so the radius grew by the fourth root of 16, which is 2: 2.0 mm. The value 16 mm multiplies the radius by 16, 4.0 mm takes only a square root, and 0.50 mm makes the tube narrower, which would need more pressure.`,
      },
      {
        question: r`In a wide test tube, a pressure difference of 2.0 Pa drives a set laminar flow of water. The same flow rate must pass through a tube of the same length with one tenth of the inside radius. What pressure difference is needed, in kPa?`,
        options: [r`0.20 kPa`, r`2.0 kPa`, r`0.020 kPa`, r`20 kPa`],
        correctAnswer: 3,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so one tenth of the radius needs 10⁴ times the pressure difference: 2.0 × 10⁴ Pa = 20 kPa. The values 0.20 kPa, 2.0 kPa and 0.020 kPa multiply by only 10², 10³ and 10.`,
      },
      {
        question: r`A pump now drives a set laminar flow through a tube of inside radius 1.5 mm, and it can supply at most 81 times its present pressure difference. What is the smallest inside radius of a replacement tube of the same length that can still carry the same flow rate?`,
        options: [r`0.17 mm`, r`0.50 mm`, r`0.056 mm`, r`0.019 mm`],
        correctAnswer: 1,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so 81 times the pressure difference allows the radius to shrink by the fourth root of 81, which is 3: 1.5 ÷ 3 = 0.50 mm. The value 0.17 mm divides the radius by 9, 0.056 mm by 27, and 0.019 mm by 81.`,
      },
    ],
  },
  [r`Squared or fourth power: which radius rule goes with which situation?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water moves at 0.25 m/s through a pipe of radius 2.0 cm. The pipe then narrows to a radius of 0.50 cm, and the same flow rate passes through both sections. What is the water's average speed in the narrow section?`,
        options: [r`4.0 m/s`, r`1.0 m/s`, r`64 m/s`, r`0.063 m/s`],
        correctAnswer: 0,
        explanation: r`One pipe with a fixed flow rate is a continuity problem, so speed goes as 1/r². The radius falls to one quarter, so the speed is 4² = 16 times as great: 0.25 × 16 = 4.0 m/s. The value 1.0 m/s uses the first power, 64 m/s uses the fourth power that belongs to Poiseuille's law, and 0.063 m/s makes the water slow down.`,
      },
      {
        question: r`A lab drain tube passes 5.0 mL/s in laminar flow. It is swapped for a different tube of the same length with twice the inside radius, and the pressure difference between the ends is held the same. What flow rate does the new tube pass?`,
        options: [r`20 mL/s`, r`80 mL/s`, r`10 mL/s`, r`40 mL/s`],
        correctAnswer: 1,
        explanation: r`A different tube at a fixed pressure difference is a Poiseuille problem, so flow goes as r⁴: 2⁴ = 16 and 5.0 × 16 = 80 mL/s. The value 20 mL/s uses the squared rule, which belongs to speed at a fixed flow rate, 10 mL/s uses the first power, and 40 mL/s uses the cube.`,
      },
      {
        question: r`Two long tubes each carry 64 mL/s in laminar flow, and each is replaced by a tube of the same length with half the radius. A metering pump forces the flow rate through the first to stay fixed. The second is driven by a fixed pressure difference. What flow rate passes through each new tube?`,
        options: [r`Pump: 64 mL/s. Fixed pressure: 16 mL/s`, r`Pump: 16 mL/s. Fixed pressure: 4.0 mL/s`, r`Pump: 64 mL/s. Fixed pressure: 4.0 mL/s`, r`Pump: 4.0 mL/s. Fixed pressure: 64 mL/s`],
        correctAnswer: 2,
        explanation: r`The pump holds the flow rate at 64 mL/s whatever the tube, and only the speed and the pressure difference change. At a fixed pressure difference the flow goes as r⁴, so it falls to 64 ÷ 16 = 4.0 mL/s. The value 16 mL/s applies a squared rule to the flow, and the last option swaps the two cases.`,
      },
      {
        question: r`Blood passes at 27 cm/s through a vessel of radius 1.0 mm into a widened section of radius 3.0 mm, and the same flow rate passes through both. What is the blood's average speed in the widened section?`,
        options: [r`9.0 cm/s`, r`0.33 cm/s`, r`3.0 cm/s`, r`243 cm/s`],
        correctAnswer: 2,
        explanation: r`The flow rate is fixed in one vessel, so continuity applies and speed goes as 1/r². The radius is 3 times as large, so the speed is 27 ÷ 3² = 3.0 cm/s. The value 9.0 cm/s divides by 3 only, 0.33 cm/s divides by 3⁴ as if this were Poiseuille's law, and 243 cm/s multiplies by 9 as if the vessel had narrowed.`,
      },
      {
        question: r`In one experiment a tube is replaced by a narrower one at the same pressure difference, and the laminar flow falls to 1/16 of its old value. In another, a pipe carrying a fixed flow rate has a narrow section in which the speed is 9 times as great. By what factor is the radius changed in each?`,
        options: [r`Replaced tube: radius × 1/2. Narrow section: radius × 1/3`, r`Replaced tube: radius × 1/4. Narrow section: radius × 1/3`, r`Replaced tube: radius × 1/2. Narrow section: radius × 1/9`, r`Replaced tube: radius × 1/4. Narrow section: radius × 1/9`],
        correctAnswer: 0,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, and (1/2)⁴ = 1/16, so the replaced tube has half the radius. At a fixed flow rate the speed goes as 1/r², and 3² = 9, so the narrow section has one third of the radius. A factor of 1/4 applies the squared rule to the flow, and a factor of 1/9 treats speed as going as 1/r.`,
      },
      {
        question: r`Water moves at 2.0 cm/s along a main pipe of radius 5.0 cm and leaves through a jet of radius 5.0 mm. The same flow rate passes through the pipe and the jet. What is the water's average speed in the jet, in m/s?`,
        options: [r`2.0 m/s`, r`0.20 m/s`, r`200 m/s`, r`20 m/s`],
        correctAnswer: 0,
        explanation: r`The flow rate is fixed, so continuity applies and speed goes as 1/r². The jet has one tenth of the radius, since 5.0 cm is 50 mm, so the speed is 10² = 100 times as great: 200 cm/s = 2.0 m/s. The value 0.20 m/s multiplies by 10, 200 m/s uses the fourth power, and 20 m/s converts 200 cm/s to meters wrongly.`,
      },
    ],
  },
  [r`A tube is replaced by one of half the radius at the same pressure difference. What happens to the fluid's average speed?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Glycerin moves in laminar flow through a long tube at an average speed of 24 cm/s. The tube is replaced by one of the same length with half the radius, and the pressure difference is kept the same. What is the glycerin's average speed now?`,
        options: [r`96 cm/s`, r`12 cm/s`, r`6.0 cm/s`, r`1.5 cm/s`],
        correctAnswer: 2,
        explanation: r`At a fixed pressure difference the flow falls to 1/16 through 1/4 of the area, so the average speed falls to 1/4: 24 ÷ 4 = 6.0 cm/s. The value 96 cm/s is the continuity answer for a fixed flow rate, 12 cm/s uses the first power of the radius, and 1.5 cm/s applies the factor of 16 to the speed instead of the flow.`,
      },
      {
        question: r`Ink creeps in laminar flow through a long, fine tube at an average speed of 3.0 mm/s. The tube is replaced by one of the same length with twice the radius, at the same pressure difference. What is the ink's average speed now?`,
        options: [r`12 mm/s`, r`0.75 mm/s`, r`6.0 mm/s`, r`48 mm/s`],
        correctAnswer: 0,
        explanation: r`At a fixed pressure difference the average speed goes as r²: the flow is 16 times as great through 4 times the area, so the speed is 3.0 × 4 = 12 mm/s. The value 0.75 mm/s is the continuity answer for a fixed flow rate, 6.0 mm/s uses the first power, and 48 mm/s applies the factor of 16 to the speed instead of the flow.`,
      },
      {
        question: r`Oil moves in laminar flow at an average speed of 36 cm/s through a tube of inside radius 1.5 mm. With a narrower tube of the same length, at the same pressure difference, its average speed is 4.0 cm/s. What is the narrower tube's inside radius?`,
        options: [r`0.17 mm`, r`0.50 mm`, r`4.5 mm`, r`0.87 mm`],
        correctAnswer: 1,
        explanation: r`At a fixed pressure difference the average speed goes as r². The speed fell to 4.0 ÷ 36 = 1/9, so the radius fell to 1/3: 1.5 ÷ 3 = 0.50 mm. The value 0.17 mm divides the radius by 9, 4.5 mm uses continuity and makes the slower tube wider, and 0.87 mm treats the speed as going as r⁴.`,
      },
      {
        question: r`Syrup moves in laminar flow through a long pipe at an average speed of 0.80 m/s. The pipe is replaced by one of the same length with one quarter of the radius, and the pressure difference is kept the same. What is the syrup's average speed now?`,
        options: [r`0.20 m/s`, r`0.050 m/s`, r`12.8 m/s`, r`3.2 m/s`],
        correctAnswer: 1,
        explanation: r`At a fixed pressure difference the average speed goes as r², so one quarter of the radius gives 1/16 of the speed: 0.80 ÷ 16 = 0.050 m/s. The value 0.20 m/s divides by 4 only, 12.8 m/s is the continuity answer for a fixed flow rate, and 3.2 m/s multiplies by 4.`,
      },
      {
        question: r`A long tube carries 40 mL/s in laminar flow at an average speed of 20 cm/s. It is replaced by a tube of the same length with half the radius, and the pressure difference is kept the same. What are the new flow rate and the new average speed?`,
        options: [r`2.5 mL/s and 80 cm/s`, r`10 mL/s and 5.0 cm/s`, r`40 mL/s and 80 cm/s`, r`2.5 mL/s and 5.0 cm/s`],
        correctAnswer: 3,
        explanation: r`At a fixed pressure difference the flow goes as r⁴ and falls to 40 ÷ 16 = 2.5 mL/s. That flow passes through 1/4 of the area, so the speed falls to 20 ÷ 4 = 5.0 cm/s. A speed of 80 cm/s is right only when the flow rate is held fixed, and 10 mL/s applies a squared rule to the flow.`,
      },
      {
        question: r`Water seeps in laminar flow through a fine tube at an average speed of 0.50 mm/s. A tube of the same length with 10 times the inside radius is used instead, at the same pressure difference, and the flow stays laminar. What is the average speed now, in cm/s?`,
        options: [r`0.50 cm/s`, r`500 cm/s`, r`50 cm/s`, r`5.0 cm/s`],
        correctAnswer: 3,
        explanation: r`At a fixed pressure difference the average speed goes as r², so 10 times the radius gives 10² = 100 times the speed: 50 mm/s = 5.0 cm/s. The value 0.50 cm/s multiplies by 10 only, 500 cm/s applies the fourth power to the speed, and 50 cm/s leaves the answer in millimeters per second.`,
      },
    ],
  },
  [r`What does Poiseuille's law assume?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Oil seeps slowly and steadily, in laminar flow, through a round hole in a thin, rigid steel plate. The hole is much wider than the plate is thick. Poiseuille's law badly misjudges the flow. Which of the law's assumptions fails here?`,
        options: [r`The tube must be long compared with its width`, r`The flow must be steady and not pulsing`, r`The walls of the tube must be rigid`, r`The flow must be laminar and not turbulent`],
        correctAnswer: 0,
        explanation: r`Poiseuille's law is for a long tube, and a hole through a thin plate is a short, wide opening, so the law does not apply. The other conditions are met in the setup as described: the flow is steady and laminar, and the steel plate is rigid.`,
      },
      {
        question: r`Oil of constant viscosity runs in steady, laminar flow through a long, rigid, cylindrical pipe, where Poiseuille's law works well. Which change to the setup takes it outside the law's assumptions?`,
        options: [r`Halving the pressure so that the flow is slower`, r`Doubling the pipe's length at the same radius`, r`Using a thinner oil of constant viscosity`, r`Raising the pressure until the flow turns turbulent`],
        correctAnswer: 3,
        explanation: r`Poiseuille's law assumes laminar flow, so it fails once the flow turns turbulent. A lower pressure difference, a longer pipe and a thinner oil of constant viscosity all change the numbers that go into the law, but each still leaves a steady, laminar flow in a long, rigid tube.`,
      },
    ],
  },
  [r`Why is Poiseuille's law only approximate for blood in a vessel?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Poiseuille's law assumes a rigid tube and a fluid of constant viscosity. Which two features of blood flow in an artery mean that these two assumptions are not met exactly?`,
        options: [r`The wall being round in cross-section, and the cells suspended in blood`, r`The wall stretching with each pulse, and the density of blood plasma`, r`The wall stretching with each pulse, and the cells suspended in blood`, r`The wall being round in cross-section, and the density of blood plasma`],
        correctAnswer: 2,
        explanation: r`An artery flexes with each pulse, so it is not rigid, and blood is a suspension of cells, so it does not behave as a simple fluid of constant viscosity. A round cross-section is exactly what the law assumes, and the density of the plasma does not appear in the law at all.`,
      },
      {
        question: r`An arteriole's radius falls by 16% while the pressure difference across it stays the same. Using 0.84⁴ ≈ 0.50, a physician reasons that the blood flow through it is cut roughly in half. How should this reasoning be judged?`,
        options: [r`An exact result, since vessels and blood meet all of the assumptions`, r`A sound estimate, though not exact for flexing vessels and real blood`, r`A worthless result, since the law says nothing at all about blood`, r`A wrong estimate, since flow in a real vessel goes as r², not r⁴`],
        correctAnswer: 1,
        explanation: r`Vessels flex and blood is a suspension of cells, so Poiseuille's law is only approximate for blood, but its fourth-power conclusion holds well enough to reason with. Calling the result exact ignores those departures, calling it worthless throws away a useful rule, and r² describes the area or the speed, not the flow.`,
      },
    ],
  },
  [r`What must you convert before substituting into Poiseuille's law?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hypodermic needle has an inside radius of 0.20 mm and a length of 4.0 cm. Which values of r and L go into Poiseuille's law so that the flow rate comes out in m³/s?`,
        options: [r`2.0 × 10⁻³ m and 4.0 × 10⁻² m`, r`2.0 × 10⁻⁴ m and 4.0 × 10⁻³ m`, r`2.0 × 10⁻⁴ m and 4.0 × 10⁻² m`, r`2.0 × 10⁻¹ m and 4.0 × 10⁻¹ m`],
        correctAnswer: 2,
        explanation: r`A millimeter is 10⁻³ m, so 0.20 mm = 2.0 × 10⁻⁴ m, and a centimeter is 10⁻² m, so 4.0 cm = 4.0 × 10⁻² m. The value 2.0 × 10⁻³ m is 2.0 mm, 4.0 × 10⁻³ m is 4.0 mm, and the last pair only shifts each decimal point by one place.`,
      },
      {
        question: r`Blood plasma of viscosity 3.5 mPa·s is driven through a tube by a pressure difference of 12 kPa. Which values of η and ΔP go into Poiseuille's law so that the flow rate comes out in m³/s?`,
        options: [r`3.5 × 10⁻³ Pa·s and 1.2 × 10⁴ Pa`, r`3.5 × 10³ Pa·s and 1.2 × 10⁴ Pa`, r`3.5 × 10⁻³ Pa·s and 1.2 × 10⁻² Pa`, r`3.5 × 10⁻⁶ Pa·s and 1.2 × 10⁴ Pa`],
        correctAnswer: 0,
        explanation: r`Milli means 10⁻³, so 3.5 mPa·s = 3.5 × 10⁻³ Pa·s, and kilo means 10³, so 12 kPa = 12,000 Pa = 1.2 × 10⁴ Pa. The value 3.5 × 10³ Pa·s multiplies where it should divide, 1.2 × 10⁻² Pa divides where it should multiply, and 3.5 × 10⁻⁶ Pa·s treats milli as micro.`,
      },
      {
        question: r`A student uses Poiseuille's law with every quantity in SI units except the length, which is entered as 25 for a tube 25 cm long. The result is 4.0 × 10⁻⁸ m³/s. What is the correct flow rate?`,
        options: [r`4.0 × 10⁻⁶ m³/s`, r`4.0 × 10⁻¹⁰ m³/s`, r`4.0 × 10⁻⁷ m³/s`, r`4.0 × 10⁻⁴ m³/s`],
        correctAnswer: 0,
        explanation: r`The length should be 0.25 m, so the value entered was 100 times too large. Length is on the bottom of the law, so the result was 100 times too small, and the correct flow is 4.0 × 10⁻⁸ × 100 = 4.0 × 10⁻⁶ m³/s. Dividing by 100 gives 10⁻¹⁰, a factor of 10 gives 10⁻⁷, and a factor of 10⁴ gives 10⁻⁴.`,
      },
      {
        question: r`The pressure difference across a small artery is 30 mmHg. Taking 1 mmHg ≈ 133 Pa, about what value of ΔP goes into Poiseuille's law in SI units?`,
        options: [r`About 4.0 × 10⁶ Pa`, r`About 0.23 Pa`, r`About 163 Pa`, r`About 4.0 × 10³ Pa`],
        correctAnswer: 3,
        explanation: r`Each mmHg is about 133 Pa, so 30 mmHg is 30 × 133 ≈ 3,990 Pa, about 4.0 × 10³ Pa. The value 4.0 × 10⁶ Pa has an extra factor of 1,000, 0.23 Pa divides 30 by 133, and 163 Pa adds the two numbers.`,
      },
      {
        question: r`A fluid of viscosity 5.0 mPa·s is in laminar flow through a rigid tube of inside radius 2.0 mm and length 40 cm, under a pressure difference of 3.0 kPa. What is the flow rate?`,
        options: [r`3π × 10⁻⁶ m³/s`, r`3π × 10⁻⁹ m³/s`, r`3π × 10⁻⁸ m³/s`, r`3π × 10⁶ m³/s`],
        correctAnswer: 0,
        explanation: r`In SI units r = 2.0 × 10⁻³ m, L = 0.40 m, ΔP = 3,000 Pa and η = 5.0 × 10⁻³ Pa·s, so Q = π × 1.6 × 10⁻¹¹ × 3,000 ÷ (8 × 5.0 × 10⁻³ × 0.40) = π × 4.8 × 10⁻⁸ ÷ 1.6 × 10⁻² = 3π × 10⁻⁶ m³/s. Leaving the pressure as 3.0 gives 10⁻⁹, leaving the length as 40 gives 10⁻⁸, and leaving the radius as 2.0 gives 10⁶.`,
      },
      {
        question: r`A student substitutes into Poiseuille's law with the length in meters, the pressure difference in pascals and the viscosity in pascal-seconds, but leaves the radius in millimeters. How does the result compare with the true flow rate in m³/s?`,
        options: [r`Too large by a factor of 10³`, r`Too small by a factor of 10¹²`, r`Too large by a factor of 10¹²`, r`Too large by a factor of 10⁴`],
        correctAnswer: 2,
        explanation: r`A radius in millimeters is a number 10³ times the value in meters, and the law raises the radius to the fourth power, so the result is (10³)⁴ = 10¹² times too large. A factor of 10³ forgets the fourth power, 'too small' gets the direction backwards, and 10⁴ confuses the power with the factor.`,
      },
    ],
  },
  [r`How do you convert a flow rate from cubic meters per second to milliliters per second?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A calculation gives the flow rate of water through a laboratory condenser as 7.0 × 10⁻⁵ m³/s. What is this flow rate in mL/s?`,
        options: [r`70 mL/s`, r`7.0 mL/s`, r`0.70 mL/s`, r`700 mL/s`],
        correctAnswer: 0,
        explanation: r`1 m³/s is 10⁶ mL/s, so 7.0 × 10⁻⁵ × 10⁶ = 7.0 × 10¹ = 70 mL/s. The values 7.0, 0.70 and 700 mL/s come from multiplying by 10⁵, 10⁴ and 10⁷ instead.`,
      },
      {
        question: r`A peristaltic pump is rated at 250 mL/s. What value of Q, in m³/s, should be used with SI units in a flow calculation?`,
        options: [r`2.5 × 10⁻¹ m³/s`, r`2.5 × 10⁸ m³/s`, r`2.5 × 10⁻⁴ m³/s`, r`2.5 × 10⁻⁶ m³/s`],
        correctAnswer: 2,
        explanation: r`1 m³/s is 10⁶ mL/s, so going from mL/s to m³/s divides by 10⁶: 250 ÷ 10⁶ = 2.5 × 10⁻⁴ m³/s. Dividing by 10³ gives 2.5 × 10⁻¹, multiplying by 10⁶ gives 2.5 × 10⁸, and 2.5 × 10⁻⁶ loses the factor of 100 in 250.`,
      },
      {
        question: r`Poiseuille's law gives a flow rate of 6.0 × 10⁻⁷ m³/s through a fine catheter. What volume does the catheter deliver in 50 s?`,
        options: [r`30 mL`, r`3.0 mL`, r`0.030 mL`, r`300 mL`],
        correctAnswer: 0,
        explanation: r`1 m³/s is 10⁶ mL/s, so the flow is 6.0 × 10⁻⁷ × 10⁶ = 0.60 mL/s, and in 50 s it delivers 0.60 × 50 = 30 mL. The values 3.0 mL and 300 mL slip one power of ten each way, and 0.030 mL converts with 10³ in place of 10⁶.`,
      },
      {
        question: r`An infusion line delivers 5.0 × 10⁻⁶ m³/s. What is this flow rate in milliliters per minute?`,
        options: [r`5.0 mL/min`, r`0.30 mL/min`, r`0.083 mL/min`, r`300 mL/min`],
        correctAnswer: 3,
        explanation: r`1 m³/s is 10⁶ mL/s, so the flow is 5.0 mL/s, and with 60 s in a minute it is 5.0 × 60 = 300 mL/min. The value 5.0 is still per second, 0.30 mL/min converts with 10³ in place of 10⁶, and 0.083 mL/min divides by 60 instead of multiplying.`,
      },
      {
        question: r`Pump A is rated at 4.0 × 10⁻⁵ m³/s and pump B at 25 mL/s. Which pump delivers the greater flow rate, and by how much?`,
        options: [r`Pump B, by 21 mL/s`, r`Pump B, by 24.6 mL/s`, r`Pump A, by 15 mL/s`, r`Pump A, by 375 mL/s`],
        correctAnswer: 2,
        explanation: r`1 m³/s is 10⁶ mL/s, so pump A delivers 4.0 × 10⁻⁵ × 10⁶ = 40 mL/s, which is 15 mL/s more than pump B. Taking pump A as 4.0 mL/s, 0.40 mL/s or 400 mL/s, each a slip in the power of ten, gives the other three answers.`,
      },
      {
        question: r`Water leaves a garden tap at 1.2 × 10⁻³ m³/s. Given that 1 L = 1,000 mL, what is this flow rate in liters per second?`,
        options: [r`1,200 L/s`, r`0.0012 L/s`, r`1.2 L/s`, r`12 L/s`],
        correctAnswer: 2,
        explanation: r`1 m³/s is 10⁶ mL/s, so the flow is 1.2 × 10⁻³ × 10⁶ = 1,200 mL/s, and dividing by 1,000 mL per liter gives 1.2 L/s. The value 1,200 is the flow in mL/s, 0.0012 keeps the number from m³/s, and 12 L/s slips one power of ten.`,
      },
    ],
  },
  [r`How do you raise a radius such as $2.0 \times 10^{-3}$ m to the fourth power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A drain pipe has an inside radius of 1.0 × 10⁻² m. What is r⁴, the quantity that goes into Poiseuille's law?`,
        options: [r`4.0 × 10⁻² m⁴`, r`1.0 × 10⁻⁸ m⁴`, r`1.0 × 10⁻⁶ m⁴`, r`4.0 × 10⁻⁸ m⁴`],
        correctAnswer: 1,
        explanation: r`Keep the powers of ten apart: 1.0⁴ = 1.0 and (10⁻²)⁴ = 10⁻⁸, so r⁴ = 1.0 × 10⁻⁸ m⁴. The value 4.0 × 10⁻² multiplies the radius by 4, 1.0 × 10⁻⁶ adds 4 to the exponent's size instead of multiplying, and 4.0 × 10⁻⁸ multiplies the 1.0 by 4.`,
      },
      {
        question: r`A fine cannula has an inside radius of 5.0 × 10⁻⁴ m. What is r⁴? (5.0⁴ = 625)`,
        options: [r`6.25 × 10⁻¹⁴ m⁴`, r`6.25 × 10⁻¹⁸ m⁴`, r`2.0 × 10⁻¹⁵ m⁴`, r`6.25 × 10⁻⁶ m⁴`],
        correctAnswer: 0,
        explanation: r`5.0⁴ = 625 and (10⁻⁴)⁴ = 10⁻¹⁶, so r⁴ = 625 × 10⁻¹⁶ = 6.25 × 10⁻¹⁴ m⁴. The value 6.25 × 10⁻¹⁸ moves the decimal point the wrong way, 2.0 × 10⁻¹⁵ uses 5.0 × 4 = 20, and 6.25 × 10⁻⁶ adds the exponents to get 10⁻⁸ instead of multiplying them.`,
      },
      {
        question: r`A glass capillary has an inside radius of 0.10 mm. What is r⁴ in SI units?`,
        options: [r`1.0 × 10⁻⁴ m⁴`, r`1.0 × 10⁻¹⁶ m⁴`, r`1.0 × 10⁻⁸ m⁴`, r`1.0 × 10⁻¹² m⁴`],
        correctAnswer: 1,
        explanation: r`First convert: 0.10 mm = 1.0 × 10⁻⁴ m. Then 1.0⁴ = 1.0 and (10⁻⁴)⁴ = 10⁻¹⁶, so r⁴ = 1.0 × 10⁻¹⁶ m⁴. The value 1.0 × 10⁻⁴ raises 0.10 to the fourth power without converting, 1.0 × 10⁻⁸ only squares the radius, and 1.0 × 10⁻¹² is the fourth power of 1.0 mm.`,
      },
      {
        question: r`Working backward from a measured flow rate, a student finds that a tube has r⁴ = 8.1 × 10⁻¹¹ m⁴. What is the tube's inside radius?`,
        options: [r`9.0 × 10⁻⁶ m`, r`3.0 × 10⁻³ m`, r`2.0 × 10⁻¹¹ m`, r`3.0 × 10⁻¹² m`],
        correctAnswer: 1,
        explanation: r`Write r⁴ as 81 × 10⁻¹² m⁴ so that both parts have exact fourth roots: 3.0⁴ = 81 and (10⁻³)⁴ = 10⁻¹², so r = 3.0 × 10⁻³ m. The value 9.0 × 10⁻⁶ takes only a square root, 2.0 × 10⁻¹¹ divides by 4, and 3.0 × 10⁻¹² takes the root of the 81 but not of the power of ten.`,
      },
      {
        question: r`A feeding tube has an inside radius of 4.0 × 10⁻³ m. What is r⁴? (4.0⁴ = 256)`,
        options: [r`2.56 × 10⁻¹⁴ m⁴`, r`1.6 × 10⁻¹¹ m⁴`, r`2.56 × 10⁻⁵ m⁴`, r`2.56 × 10⁻¹⁰ m⁴`],
        correctAnswer: 3,
        explanation: r`4.0⁴ = 256 and (10⁻³)⁴ = 10⁻¹², so r⁴ = 256 × 10⁻¹² = 2.56 × 10⁻¹⁰ m⁴. The value 2.56 × 10⁻¹⁴ moves the decimal point the wrong way, 1.6 × 10⁻¹¹ uses 4.0 × 4 = 16, and 2.56 × 10⁻⁵ adds the exponents to get 10⁻⁷ instead of multiplying them.`,
      },
      {
        question: r`An arteriole has an inside radius of 2.0 × 10⁻⁴ m. Which line of working gives r⁴ correctly?`,
        options: [r`2.0⁴ × 10⁻⁸ = 1.6 × 10⁻⁷ m⁴`, r`2.0⁴ × 10⁻¹⁶ = 1.6 × 10⁻¹⁵ m⁴`, r`2.0 × 4 × 10⁻¹⁶ = 8.0 × 10⁻¹⁶ m⁴`, r`2.0⁴ × 10⁻⁴ = 1.6 × 10⁻³ m⁴`],
        correctAnswer: 1,
        explanation: r`Both parts are raised to the fourth power: 2.0⁴ = 16 and (10⁻⁴)⁴ = 10⁻¹⁶, so r⁴ = 16 × 10⁻¹⁶ = 1.6 × 10⁻¹⁵ m⁴. The line with 10⁻⁸ adds 4 to the exponent's size instead of multiplying by 4, the line with 2.0 × 4 multiplies where it should raise to a power, and the line with 10⁻⁴ leaves the power of ten unchanged.`,
      },
    ],
  },
  [r`What is the common trap when a problem gives a tube's diameter for Poiseuille's law?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A problem states that a tube has an inside diameter of 6.0 mm. What value of r⁴ belongs in Poiseuille's law?`,
        options: [r`1.3 × 10⁻⁹ m⁴`, r`9.0 × 10⁻⁶ m⁴`, r`1.2 × 10⁻¹¹ m⁴`, r`8.1 × 10⁻¹¹ m⁴`],
        correctAnswer: 3,
        explanation: r`The law needs the radius, which is half the diameter: 3.0 × 10⁻³ m. Then r⁴ = 3.0⁴ × 10⁻¹² = 81 × 10⁻¹² = 8.1 × 10⁻¹¹ m⁴. The value 1.3 × 10⁻⁹ raises the diameter to the fourth power and is 16 times too large, 9.0 × 10⁻⁶ only squares the radius, and 1.2 × 10⁻¹¹ multiplies 3.0 by 4.`,
      },
      {
        question: r`A student predicts how long a tank takes to drain through a long tube in laminar flow. The student substitutes the tube's inside diameter where Poiseuille's law needs the radius and gets 5.0 s. Everything else in the working is right. What is the correct prediction?`,
        options: [r`20 s`, r`10 s`, r`80 s`, r`0.31 s`],
        correctAnswer: 2,
        explanation: r`Using the diameter doubles the radius, which makes the flow 2⁴ = 16 times too large and the time 16 times too short. The correct time is 5.0 × 16 = 80 s. The value 20 s corrects by a factor of 4, 10 s by a factor of 2, and 0.31 s divides by 16 instead of multiplying.`,
      },
      {
        question: r`Water of viscosity 1.0 × 10⁻³ Pa·s is in laminar flow through a rigid tube with an inside diameter of 2.0 mm and a length of 0.50 m. The pressure difference between the ends is 2,000 Pa. What is the flow rate?`,
        options: [r`8π × 10⁻⁶ m³/s`, r`5π × 10⁻⁷ m³/s`, r`2π × 10⁻⁶ m³/s`, r`1π × 10⁻⁶ m³/s`],
        correctAnswer: 1,
        explanation: r`The radius is half the diameter, 1.0 × 10⁻³ m, so Q = π × 10⁻¹² × 2,000 ÷ (8 × 1.0 × 10⁻³ × 0.50) = π × 2.0 × 10⁻⁹ ÷ 4.0 × 10⁻³ = 5π × 10⁻⁷ m³/s. Raising the diameter to the fourth power gives 16 times as much, 8π × 10⁻⁶. The other two values are 4 times and 2 times the correct flow.`,
      },
      {
        question: r`A student works out the pressure difference needed to push a set laminar flow through a long tube, using ΔP = 8ηLQ/(πr⁴). The student substitutes the tube's inside diameter for r and gets 250 Pa. Everything else is right. What is the correct pressure difference?`,
        options: [r`1,000 Pa`, r`500 Pa`, r`4,000 Pa`, r`16 Pa`],
        correctAnswer: 2,
        explanation: r`The diameter is twice the radius, so the bottom of the fraction was 2⁴ = 16 times too large and the answer 16 times too small. The correct value is 250 × 16 = 4,000 Pa. The value 1,000 Pa corrects by 4, 500 Pa by 2, and 16 Pa divides by 16 instead of multiplying.`,
      },
      {
        question: r`A catalog lists tube A with an inside radius of 2.0 mm and tube B with an inside diameter of 2.0 mm. The tubes have the same length and carry the same liquid in laminar flow under the same pressure difference. How do their flow rates compare?`,
        options: [r`A carries 4 times B's flow`, r`A carries 16 times B's flow`, r`A carries 2 times B's flow`, r`A and B carry equal flows`],
        correctAnswer: 1,
        explanation: r`Tube B's radius is half its diameter, 1.0 mm, so tube A has twice the radius of tube B and 2⁴ = 16 times the flow. Equal flows treat the diameter as if it were a radius, a factor of 2 uses the first power of the radius, and a factor of 4 uses the square.`,
      },
      {
        question: r`A specification sheet gives a needle's inside diameter as 1.0 mm. Which value should be substituted for r in Poiseuille's law, in SI units?`,
        options: [r`1.0 × 10⁻³ m`, r`5.0 × 10⁻³ m`, r`5.0 × 10⁻⁴ m`, r`2.0 × 10⁻³ m`],
        correctAnswer: 2,
        explanation: r`The law needs the radius, which is half the diameter: 0.50 mm = 5.0 × 10⁻⁴ m. The value 1.0 × 10⁻³ m is the diameter itself and would make the flow 16 times too large, 5.0 × 10⁻³ m slips a power of ten in the conversion, and 2.0 × 10⁻³ m doubles the diameter instead of halving it.`,
      },
    ],
  },
  [r`How do you find a fluid's average speed from its flow rate in a tube?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water flows at 2.4 × 10⁻⁵ m³/s through a hose fitting of inside radius 2.0 × 10⁻³ m. Taking π ≈ 3, what is the water's average speed in the fitting?`,
        options: [r`6.0 m/s`, r`0.50 m/s`, r`4.0 × 10⁻³ m/s`, r`2.0 m/s`],
        correctAnswer: 3,
        explanation: r`The area is A = πr² ≈ 3 × 4.0 × 10⁻⁶ = 1.2 × 10⁻⁵ m², so v = Q/A = 2.4 × 10⁻⁵ ÷ 1.2 × 10⁻⁵ = 2.0 m/s. Leaving out π gives 6.0 m/s, squaring the diameter instead of the radius gives 0.50 m/s, and not squaring the radius at all gives 4.0 × 10⁻³ m/s.`,
      },
      {
        question: r`Blood moves at an average speed of 0.30 m/s through an aorta of inside radius 1.0 cm. Taking π ≈ 3, what is the flow rate?`,
        options: [r`9.0 × 10⁻³ m³/s`, r`3.0 × 10⁻⁵ m³/s`, r`9.0 × 10⁻¹ m³/s`, r`9.0 × 10⁻⁵ m³/s`],
        correctAnswer: 3,
        explanation: r`Rearranging v = Q/A gives Q = vA. The radius is 1.0 × 10⁻² m, so A ≈ 3 × 10⁻⁴ m² and Q = 0.30 × 3 × 10⁻⁴ = 9.0 × 10⁻⁵ m³/s. Not squaring the radius gives 9.0 × 10⁻³, leaving out π gives 3.0 × 10⁻⁵, and leaving the radius as 1.0 gives 9.0 × 10⁻¹.`,
      },
      {
        question: r`A liquid must flow at 3.0 × 10⁻⁶ m³/s through a tube with an average speed of 0.25 m/s. Taking π ≈ 3, what inside radius must the tube have?`,
        options: [r`4.0 × 10⁻⁶ m`, r`1.2 × 10⁻⁵ m`, r`2.0 × 10⁻³ m`, r`3.5 × 10⁻³ m`],
        correctAnswer: 2,
        explanation: r`The area needed is A = Q/v = 3.0 × 10⁻⁶ ÷ 0.25 = 1.2 × 10⁻⁵ m². Then r² = A/π ≈ 4.0 × 10⁻⁶ m², so r = 2.0 × 10⁻³ m. The value 4.0 × 10⁻⁶ is r² with no square root taken, 1.2 × 10⁻⁵ is the area, and 3.5 × 10⁻³ takes the root of the area without dividing by π.`,
      },
      {
        question: r`A feeding pump delivers 12 mL/s through a tube of inside radius 2.0 mm. Taking π ≈ 3 and 1 mL = 10⁻⁶ m³, what is the liquid's average speed in the tube?`,
        options: [r`1.0 m/s`, r`3.0 m/s`, r`0.010 m/s`, r`100 m/s`],
        correctAnswer: 0,
        explanation: r`In SI units Q = 1.2 × 10⁻⁵ m³/s and r = 2.0 × 10⁻³ m, so A ≈ 3 × 4.0 × 10⁻⁶ = 1.2 × 10⁻⁵ m² and v = Q/A = 1.0 m/s. Leaving out π gives 3.0 m/s. The values 0.010 m/s and 100 m/s each come from a power-of-ten slip when the radius is converted to meters and squared.`,
      },
      {
        question: r`A liquid flows at 8.1 × 10⁻⁶ m³/s through a tube with an inside diameter of 6.0 mm. Taking π ≈ 3, what is the liquid's average speed?`,
        options: [r`0.075 m/s`, r`0.90 m/s`, r`1.2 m/s`, r`0.30 m/s`],
        correctAnswer: 3,
        explanation: r`The radius is half the diameter, 3.0 × 10⁻³ m, so A ≈ 3 × 9.0 × 10⁻⁶ = 2.7 × 10⁻⁵ m² and v = 8.1 × 10⁻⁶ ÷ 2.7 × 10⁻⁵ = 0.30 m/s. Squaring the diameter gives 0.075 m/s, leaving out π gives 0.90 m/s, and halving the diameter twice gives 1.2 m/s.`,
      },
      {
        question: r`A heart pumps blood at 8.0 × 10⁻⁵ m³/s. All of this flow passes through a capillary bed whose vessels have a combined cross-sectional area of 0.20 m². What is the blood's average speed in the capillaries?`,
        options: [r`1.6 × 10⁻⁵ m/s`, r`2.5 × 10³ m/s`, r`4.0 × 10⁻⁴ m/s`, r`4.0 × 10⁻³ m/s`],
        correctAnswer: 2,
        explanation: r`Average speed is flow rate divided by cross-sectional area: v = Q/A = 8.0 × 10⁻⁵ ÷ 0.20 = 4.0 × 10⁻⁴ m/s. The value 1.6 × 10⁻⁵ multiplies the two numbers, 2.5 × 10³ divides the area by the flow rate, and 4.0 × 10⁻³ slips a power of ten in the division.`,
      },
    ],
  },
  [r`A tube is changed. How do you find the new flow without recomputing everything?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A drain line passes 6.0 mL/s in laminar flow. It is replaced by a line with twice the inside radius and 4 times the length, and the liquid and the pressure difference are unchanged. What is the new flow rate, still in laminar flow?`,
        options: [r`24 mL/s`, r`96 mL/s`, r`6.0 mL/s`, r`384 mL/s`],
        correctAnswer: 0,
        explanation: r`Scale the old flow by each factor that changed: × 2⁴ = 16 for the radius and × 1/4 for the length, so 6.0 × 16 ÷ 4 = 24 mL/s. The value 96 mL/s ignores the length, 6.0 mL/s uses a squared rule for the radius, and 384 mL/s puts the length on top.`,
      },
      {
        question: r`A perfusion line delivers 30 mL/min in laminar flow. The tube is swapped for one of equal length and half the inside radius, and the driving pressure is made 8 times as great. The fluid is unchanged. What is the new flow rate?`,
        options: [r`60 mL/min`, r`240 mL/min`, r`3.75 mL/min`, r`15 mL/min`],
        correctAnswer: 3,
        explanation: r`Scale the old flow: × (1/2)⁴ = 1/16 for the radius and × 8 for the pressure difference, so 30 × 8 ÷ 16 = 15 mL/min. The value 60 mL/min uses a squared rule for the radius, 240 mL/min ignores the radius, and 3.75 mL/min divides by the pressure factor instead of multiplying.`,
      },
      {
        question: r`A dosing tube delivers 2.5 mL/s of a thin solution in laminar flow. The solution is replaced by one with 4 times the viscosity, the tube by one of the same length and twice the inside radius, and the pressure difference is doubled. What is the new flow rate?`,
        options: [r`5.0 mL/s`, r`80 mL/s`, r`20 mL/s`, r`320 mL/s`],
        correctAnswer: 2,
        explanation: r`Scale the old flow: × 2⁴ = 16 for the radius, × 2 for the pressure difference and × 1/4 for the viscosity, so 2.5 × 16 × 2 ÷ 4 = 20 mL/s. The value 5.0 mL/s uses a squared rule for the radius, 80 mL/s ignores the viscosity, and 320 mL/s puts the viscosity on top.`,
      },
      {
        question: r`A tube 80 cm long is to be replaced by one with half the inside radius. The same liquid must flow at the same rate under the same pressure difference, in laminar flow. How long can the new tube be?`,
        options: [r`20 cm`, r`5.0 cm`, r`40 cm`, r`10 cm`],
        correctAnswer: 1,
        explanation: r`Halving the radius multiplies the flow by (1/2)⁴ = 1/16. Flow goes as 1/L, so the length must also fall to 1/16 to cancel it: 80 ÷ 16 = 5.0 cm. The value 20 cm uses a squared rule for the radius, 40 cm a first-power rule, and 10 cm a cube rule.`,
      },
      {
        question: r`A coolant line carries 14 mL/s in laminar flow. The line is swapped for one of the same length whose inside radius is 1.5 times as large, and the coolant for one that is twice as viscous, at the same pressure difference. Using 1.5⁴ ≈ 5, about what is the new flow rate?`,
        options: [r`About 11 mL/s`, r`About 35 mL/s`, r`About 140 mL/s`, r`About 16 mL/s`],
        correctAnswer: 1,
        explanation: r`Scale the old flow: × 1.5⁴ ≈ 5 for the radius and × 1/2 for the viscosity, so 14 × 5 ÷ 2 = 35 mL/s. About 11 mL/s uses the first power of 1.5, about 140 mL/s puts the viscosity on top, and about 16 mL/s uses 1.5² = 2.25 for the radius.`,
      },
      {
        question: r`A hollow fiber in a filter is redesigned with 3 times the inside radius and 9 times the length, and it will now carry a fluid that is 3 times as viscous. The pressure difference is unchanged and the flow is laminar. By what factor does the flow rate through the fiber change?`,
        options: [r`It becomes 3 times as great`, r`It becomes 1/3 as great`, r`It becomes 81 times as great`, r`It becomes 1/9 as great`],
        correctAnswer: 0,
        explanation: r`Scale by each factor: × 3⁴ = 81 for the radius, × 1/9 for the length and × 1/3 for the viscosity, so the flow changes by 81 ÷ 27 = 3. A factor of 1/3 uses a squared rule for the radius, 81 counts the radius only, and 1/9 uses the first power of the radius.`,
      },
    ],
  },
  [r`A tube narrows while the pressure difference stays fixed. How do the flow and the speed scale with radius?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Deposits narrow a long, rigid tube to 80% of its original radius. It carried 50 mL/min before, and the pressure difference between its ends is unchanged. Using 0.8⁴ ≈ 0.41, about what flow rate does it carry now, in laminar flow?`,
        options: [r`About 32 mL/min`, r`About 40 mL/min`, r`About 26 mL/min`, r`About 20 mL/min`],
        correctAnswer: 3,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, so it falls to about 0.41 × 50 ≈ 20 mL/min. About 32 mL/min uses 0.8² = 0.64, the rule for the speed, about 40 mL/min uses the first power of 0.8, and about 26 mL/min uses 0.8³ ≈ 0.51.`,
      },
      {
        question: r`Liquid moves in laminar flow at an average speed of 25 cm/s through a long tube. The tube is then narrowed to 80% of its radius along its whole length, and the pressure difference is unchanged. Using 0.8² = 0.64 and 0.8⁴ ≈ 0.41, what is the average speed now?`,
        options: [r`About 10 cm/s`, r`16 cm/s`, r`20 cm/s`, r`About 39 cm/s`],
        correctAnswer: 1,
        explanation: r`At a fixed pressure difference the flow goes as r⁴ and the area as r², so the average speed goes as r²: 0.64 × 25 = 16 cm/s. About 10 cm/s applies the flow's factor of 0.41 to the speed, 20 cm/s uses the first power of 0.8, and about 39 cm/s divides by 0.64, which is right only when the flow rate is held fixed.`,
      },
      {
        question: r`A long tube carries 160 mL/min in laminar flow at an average speed of 40 cm/s. Its radius is then reduced to 50% of the original along its whole length, and the pressure difference stays the same. What are the new flow rate and average speed?`,
        options: [r`10 mL/min and 160 cm/s`, r`10 mL/min and 10 cm/s`, r`40 mL/min and 10 cm/s`, r`40 mL/min and 20 cm/s`],
        correctAnswer: 1,
        explanation: r`At a fixed pressure difference the flow goes as r⁴ and the speed as r². Half the radius gives 160 ÷ 16 = 10 mL/min and 40 ÷ 4 = 10 cm/s. A speed of 160 cm/s is the continuity answer for a fixed flow rate, 40 mL/min applies a squared rule to the flow, and 20 cm/s applies a first-power rule to the speed.`,
      },
      {
        question: r`A long, rigid tube narrows evenly to 90% of its original radius while the pressure difference between its ends stays fixed and the flow stays laminar. Using 0.9² = 0.81 and 0.9⁴ ≈ 0.66, how do the flow rate and the average speed change?`,
        options: [r`Flow falls by about 34% and speed falls by about 19%`, r`Flow falls by about 19% and speed falls by about 10%`, r`Flow falls by about 34% and speed rises by about 23%`, r`Flow falls by about 40% and speed falls by about 20%`],
        correctAnswer: 0,
        explanation: r`At a fixed pressure difference the flow goes as r⁴ and falls to about 66%, a drop of 34%. The speed goes as r² and falls to 81%, a drop of 19%. The pair 19% and 10% uses powers that are each too low, a rising speed is right only when the flow rate is held fixed, and 40% and 20% just multiply the 10% change by 4 and by 2.`,
      },
      {
        question: r`A long tube narrows evenly while the pressure difference between its ends stays fixed and the flow stays laminar. The liquid's average speed falls to 36% of its original value. To what percentages of their original values have the radius and the flow rate changed?`,
        options: [r`Radius to 60% and flow to about 36%`, r`Radius to 77% and flow to about 36%`, r`Radius to 60% and flow to about 22%`, r`Radius to 60% and flow to about 13%`],
        correctAnswer: 3,
        explanation: r`At a fixed pressure difference the speed goes as r², so r² = 0.36 and the radius is at 60%. The flow goes as r⁴ = 0.36² ≈ 0.13, about 13%. A flow at 36% confuses the flow's rule with the speed's, a radius at 77% treats the speed as going as r⁴, and 22% uses 0.6³.`,
      },
      {
        question: r`A long tube carries 8.0 mL/s in laminar flow at an average speed of 20 cm/s. It then narrows evenly to 84% of its radius while the pressure difference stays fixed. Using 0.84² ≈ 0.71 and 0.84⁴ ≈ 0.50, what are the new flow rate and average speed?`,
        options: [r`4.0 mL/s and about 28 cm/s`, r`4.0 mL/s and about 14 cm/s`, r`5.7 mL/s and about 14 cm/s`, r`6.7 mL/s and about 17 cm/s`],
        correctAnswer: 1,
        explanation: r`At a fixed pressure difference the flow goes as r⁴, giving 0.50 × 8.0 = 4.0 mL/s, and the speed goes as r², giving 0.71 × 20 ≈ 14 cm/s. A speed of about 28 cm/s divides by 0.71, which is right only for a fixed flow rate, 5.7 mL/s applies the squared rule to the flow, and the last pair uses the first power of 0.84 for both.`,
      },
    ],
  },
  [r`A tube narrows while the flow is held fixed. How do the pressure difference and the speed scale with radius?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pump holds the flow rate constant through a long tube, and the pressure difference between its ends is 5.0 kPa. Deposits then narrow the tube to 80% of its radius along its whole length. At 80% of the radius, 1/0.8⁴ ≈ 2.4 and 1/0.8² ≈ 1.6. About what pressure difference is now needed, in laminar flow?`,
        options: [r`About 12 kPa`, r`About 8.0 kPa`, r`About 2.1 kPa`, r`About 6.3 kPa`],
        correctAnswer: 0,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so it becomes about 2.4 × 5.0 = 12 kPa. About 8.0 kPa uses the factor of 1.6 that belongs to the speed, about 2.1 kPa multiplies by 0.8⁴ ≈ 0.41 as if the pressure fell, and about 6.3 kPa divides by 0.8 only once.`,
      },
      {
        question: r`A pump holds the flow rate constant through a long tube, in which the liquid's average speed is 30 cm/s. The tube is replaced by one with 80% of the radius. At 80% of the radius, 1/0.8⁴ ≈ 2.4 and 1/0.8² ≈ 1.6. About what is the average speed in the new tube?`,
        options: [r`About 72 cm/s`, r`About 19 cm/s`, r`About 38 cm/s`, r`About 48 cm/s`],
        correctAnswer: 3,
        explanation: r`At a fixed flow rate, continuity makes the speed go as 1/r², so it becomes about 1.6 × 30 = 48 cm/s. About 72 cm/s uses the factor of 2.4 that belongs to the pressure difference, about 19 cm/s multiplies by 0.64, which is right only at a fixed pressure difference, and about 38 cm/s divides by 0.8 only once.`,
      },
      {
        question: r`A pump holds the flow rate constant through a long tube. The pressure difference is 16 kPa and the average speed is 1.2 m/s. The tube is replaced by one of the same length with twice the radius, and the flow stays laminar. What are the new pressure difference and average speed?`,
        options: [r`1.0 kPa and 4.8 m/s`, r`4.0 kPa and 0.30 m/s`, r`1.0 kPa and 0.30 m/s`, r`4.0 kPa and 0.60 m/s`],
        correctAnswer: 2,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴ and the speed as 1/r². Twice the radius gives 16 ÷ 16 = 1.0 kPa and 1.2 ÷ 4 = 0.30 m/s. A speed of 4.8 m/s belongs to a fixed pressure difference, 4.0 kPa applies a squared rule to the pressure, and 0.60 m/s applies a first-power rule to the speed.`,
      },
      {
        question: r`The body keeps the flow rate through a long artery constant as the artery narrows evenly along its length. The pressure difference needed across it becomes 16 times as great. The blood's average speed was 10 cm/s before. What is it now, assuming laminar flow?`,
        options: [r`40 cm/s`, r`160 cm/s`, r`20 cm/s`, r`2.5 cm/s`],
        correctAnswer: 0,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, so a factor of 16 means the radius is halved. The speed goes as 1/r², so it is 4 times as great: 40 cm/s. The value 160 cm/s applies the factor of 16 to the speed, 20 cm/s uses the first power of the radius, and 2.5 cm/s makes the blood slow down.`,
      },
      {
        question: r`A pump holds the flow rate constant through a long tube, with a pressure difference of 3.0 kPa and an average speed of 0.50 m/s. The tube is replaced by one of the same length with 84% of the radius. Using 1/0.84⁴ ≈ 2.0 and 1/0.84² ≈ 1.4, what are the new values, in laminar flow?`,
        options: [r`6.0 kPa and about 0.36 m/s`, r`6.0 kPa and about 0.70 m/s`, r`4.2 kPa and about 0.70 m/s`, r`1.5 kPa and about 0.36 m/s`],
        correctAnswer: 1,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴, giving 2.0 × 3.0 = 6.0 kPa, and the speed goes as 1/r², giving 1.4 × 0.50 = 0.70 m/s. A speed of about 0.36 m/s is right only at a fixed pressure difference, 4.2 kPa applies the squared rule to the pressure, and 1.5 kPa makes the pressure fall as the tube narrows.`,
      },
      {
        question: r`In a wide tube, a set laminar flow of water needs a pressure difference of 5.0 Pa and moves at an average speed of 2.0 mm/s. The same flow rate is then sent through a tube of the same length with one tenth of the radius. What are the new pressure difference and average speed?`,
        options: [r`50 kPa and 0.020 m/s`, r`0.50 kPa and 0.20 m/s`, r`5.0 kPa and 2.0 m/s`, r`50 kPa and 0.20 m/s`],
        correctAnswer: 3,
        explanation: r`At a fixed flow the pressure difference goes as 1/r⁴: 5.0 × 10⁴ Pa = 50 kPa. The speed goes as 1/r²: 2.0 × 10² mm/s = 200 mm/s = 0.20 m/s. A speed of 0.020 m/s multiplies by only 10, 0.50 kPa applies the squared rule to the pressure, and 5.0 kPa with 2.0 m/s uses 10³ for both.`,
      },
    ],
  },
}
