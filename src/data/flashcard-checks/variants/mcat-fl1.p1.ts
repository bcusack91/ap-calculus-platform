import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for density, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab notebook lists the density of a solvent as 0.79 g/mL. Which other way of writing this density is equal to it?`,
        options: [r`ρ = 0.79 kg/m³`, r`ρ = 0.79 g/cm³`, r`ρ = 0.79 g/L`, r`ρ = 0.79 g/m³`],
        correctAnswer: 1,
        explanation: r`One milliliter is one cubic centimeter, so g/mL and g/cm³ are the same unit and the number stays 0.79. In kg/m³ the value would be 790, and in g/L it would also be 790, so the entries that keep 0.79 with a larger volume unit are far too small.`,
      },
      {
        question: r`A student divides a sample's mass in kilograms by its volume in cubic meters. Which symbol and unit belong on the result?`,
        options: [r`ρ, in m³/kg`, r`V, in kg/m³`, r`m, in kg·m³`, r`ρ, in kg/m³`],
        correctAnswer: 3,
        explanation: r`Mass divided by volume is density, written ρ, and kilograms over cubic meters gives kg/m³. The unit m³/kg is the flipped ratio, V is the symbol for volume, and kg·m³ would come from multiplying instead of dividing.`,
      },
    ],
  },
  [r`What symbol stands for volume, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A measuring cylinder holds 250 mL of ethanol. Which statement gives this volume, V, correctly in other units?`,
        options: [r`250 cm³, which is 0.25 L`, r`250 cm³, which is 2.5 L`, r`25 cm³, which is 0.25 L`, r`2500 cm³, which is 2.5 L`],
        correctAnswer: 0,
        explanation: r`One milliliter equals one cubic centimeter, so 250 mL is 250 cm³. One liter is 1000 cm³, so 250 cm³ is 0.25 L. The other statements either change the number between mL and cm³ or treat a liter as 100 cm³.`,
      },
      {
        question: r`A fish tank is 0.50 m long, 0.20 m wide and 0.30 m deep. What is its volume, with the correct symbol and SI unit?`,
        options: [r`V = 0.030 m²`, r`V = 1.0 m³`, r`V = 0.030 m³`, r`V = 0.30 m³`],
        correctAnswer: 2,
        explanation: r`Volume is length times width times depth: (0.50)(0.20)(0.30) = 0.030, and three lengths in meters multiply to m³. The unit m² is an area, 1.0 comes from adding the three lengths, and 0.30 is a decimal-place slip.`,
      },
    ],
  },
  [r`What symbol stands for weight, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A bag of flour is labelled 2.0 kg. Using g = 10 m/s², which statement about the bag is correct?`,
        options: [r`Its weight is 2.0 kg and its mass is 20 N`, r`Its mass is 2.0 kg and its weight is 0.20 N`, r`Its mass is 2.0 kg and its weight is 20 N`, r`Its mass is 20 kg and its weight is 2.0 N`],
        correctAnswer: 2,
        explanation: r`Kilograms measure mass, so the label gives m = 2.0 kg. Weight is the force W = mg = (2.0)(10) = 20 N. The other statements swap the units of mass and weight, or divide by g instead of multiplying.`,
      },
      {
        question: r`A student writes four lines about a 5.0 kg dumbbell at rest on a bench, using g = 10 m/s². Which line contains a mistake?`,
        options: [r`W = 5.0 kg, because weight is a mass`, r`W = 50 N, because weight is a force`, r`m = 5.0 kg, the same in any place`, r`W = mg, so W changes if g changes`],
        correctAnswer: 0,
        explanation: r`Weight is a force, so it is measured in newtons: W = mg = (5.0)(10) = 50 N. Writing W = 5.0 kg confuses weight with mass. The other three lines are all true: mass stays the same everywhere, while weight depends on g.`,
      },
    ],
  },
  [r`What is a fluid?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Air and water are very different substances, yet both are classed as fluids. Which property do they share that makes each one a fluid?`,
        options: [r`Each one keeps a fixed volume when squeezed`, r`Each one holds its own shape in a container`, r`Each one spreads to fill its whole container`, r`Each one flows when a force pushes on it`],
        correctAnswer: 3,
        explanation: r`A fluid is any substance that flows, and both liquids and gases do. Only the liquid keeps a nearly fixed volume, only the gas spreads to fill its whole container, and holding its own shape describes a solid.`,
      },
      {
        question: r`One sealed 2 L flask holds 0.5 L of water, and an identical sealed flask holds a small amount of helium. How does each substance occupy its flask?`,
        options: [r`The water fills the whole flask; the helium sits at the bottom`, r`The water sits at the bottom; the helium fills the whole flask`, r`Both sit at the bottom and leave the top of each flask empty`, r`Both spread out evenly and fill the whole of each flask`],
        correctAnswer: 1,
        explanation: r`A liquid takes the shape of the part of the container it occupies, so the water settles into the bottom of the flask. A gas spreads out to fill its whole container, so the helium occupies all 2 L. The other choices give the liquid the behavior of a gas, or the gas the behavior of a liquid.`,
      },
    ],
  },
  [r`In which direction does a fluid at rest push on a surface it touches?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A submarine at rest has a flat window set in its vertical side wall. In which direction does the still seawater push on the window?`,
        options: [r`Straight down, parallel to the window`, r`Straight up, parallel to the window`, r`Horizontally, perpendicular to the window`, r`Diagonally, at 45° to the window`],
        correctAnswer: 2,
        explanation: r`A fluid at rest pushes perpendicular to any surface it touches. The window is vertical, so the perpendicular direction is horizontal, into the glass. A push parallel to the window, or one with a part along it, would be a shear force, which a fluid at rest cannot exert.`,
      },
      {
        question: r`The water behind a dam with a tilted face is at rest. A student draws the water's force on the face with a component along the face. Why is the drawing wrong?`,
        options: [r`A fluid at rest cannot hold a shear force; it would flow`, r`A fluid at rest pushes only straight down, as gravity does`, r`A fluid at rest pushes only horizontally, toward the dam`, r`A fluid at rest exerts no force at all on a tilted surface`],
        correctAnswer: 0,
        explanation: r`A force along the surface is a shear force, and a fluid pushed sideways simply flows instead of pushing back. So a fluid at rest pushes only perpendicular to the face, whatever its tilt. The push is not fixed as straight down or horizontal, and it is certainly not zero.`,
      },
    ],
  },
  [r`Write density as an equation.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A ring has a mass of 38 g and a volume of 2.0 cm³. What is the density of the metal in the ring?`,
        options: [r`0.053 g/cm³`, r`19 g/cm³`, r`76 g/cm³`, r`40 g/cm³`],
        correctAnswer: 1,
        explanation: r`Density is mass over volume: ρ = m/V = 38/2.0 = 19 g/cm³. The value 0.053 comes from flipping the ratio, 76 from multiplying the two numbers, and 40 from adding them.`,
      },
      {
        question: r`A sample of dense bone has a density of 1.8 g/cm³ and a mass of 90 g. What is the volume of the sample?`,
        options: [r`162 cm³`, r`0.020 cm³`, r`500 cm³`, r`50 cm³`],
        correctAnswer: 3,
        explanation: r`Rearranging ρ = m/V gives V = m/ρ = 90/1.8 = 50 cm³. Multiplying instead gives 162, dividing the density by the mass gives 0.020, and 500 is a decimal-place slip.`,
      },
      {
        question: r`The air in a closed room has a density of 1.2 kg/m³, and the room has a volume of 50 m³. What is the mass of the air in the room?`,
        options: [r`60 kg`, r`42 kg`, r`0.024 kg`, r`51 kg`],
        correctAnswer: 0,
        explanation: r`Rearranging ρ = m/V gives m = ρV = (1.2)(50) = 60 kg. Dividing the volume by the density gives about 42, dividing the density by the volume gives 0.024, and adding the numbers gives about 51.`,
      },
      {
        question: r`A steel beam has a mass of 400 kg and a volume of 5.0 × 10⁻² m³. What is the density of the steel?`,
        options: [r`2.0 × 10¹ kg/m³`, r`8.0 × 10¹ kg/m³`, r`8.0 × 10³ kg/m³`, r`1.3 × 10⁻⁴ kg/m³`],
        correctAnswer: 2,
        explanation: r`ρ = m/V = 400/(5.0 × 10⁻²) = 80 × 10² = 8.0 × 10³ kg/m³. Multiplying mass by volume gives 20, dropping the negative sign from the power of ten gives 80, and flipping the ratio gives about 1.3 × 10⁻⁴.`,
      },
      {
        question: r`A block of packing foam is squeezed until its volume is 40% of its original volume. Its mass does not change. What happens to the density of the block?`,
        options: [r`It falls to 0.40 times its first value`, r`It rises to 2.5 times its first value`, r`It rises to 1.4 times its first value`, r`It rises to 1.6 times its first value`],
        correctAnswer: 1,
        explanation: r`With the mass fixed, ρ = m/V is inversely proportional to the volume, so the density is multiplied by 1/0.40 = 2.5. A factor of 0.40 treats density as proportional to volume, and 1.4 or 1.6 come from adding the 40% or the lost 60% instead of dividing.`,
      },
      {
        question: r`A machined aluminum part has a mass of 2.7 kg, and aluminum has a density of 2700 kg/m³. What is the volume of the part?`,
        options: [r`1.0 × 10³ m³`, r`7.3 × 10³ m³`, r`1.0 × 10⁻² m³`, r`1.0 × 10⁻³ m³`],
        correctAnswer: 3,
        explanation: r`V = m/ρ = 2.7/2700 = 1.0 × 10⁻³ m³, which is one liter. Dividing the density by the mass gives 1.0 × 10³, multiplying the two gives about 7.3 × 10³, and 1.0 × 10⁻² is a power-of-ten slip.`,
      },
    ],
  },
  [r`A block of one material is cut in half. What happens to the density of each piece?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A jeweler has a 10 g chain and a 500 g bar, both of pure silver and at the same temperature. How do the densities of the two objects compare?`,
        options: [r`The bar's is 50 times greater, because it has more mass`, r`The chain's is 50 times greater, because it is smaller`, r`The bar's is greater, because a bar is one solid piece`, r`They are equal, because density belongs to the material`],
        correctAnswer: 3,
        explanation: r`Density is ρ = m/V. The bar has 50 times the mass of the chain but also 50 times the volume, so the ratio is the same. Density is a property of silver itself, not of how much silver there is or of its shape.`,
      },
      {
        question: r`A lab receives two unlabelled metal fragments of different sizes and wants to check whether they could be the same metal. Which comparison is the useful one?`,
        options: [r`Their masses, since mass does not depend on sample size`, r`Their densities, since density does not depend on sample size`, r`Their volumes, since volume does not depend on sample size`, r`Their weights, since weight does not depend on sample size`],
        correctAnswer: 1,
        explanation: r`Cutting a material into bigger or smaller pieces changes the mass and the volume in the same proportion, so ρ = m/V stays the same. Two pieces of one metal therefore share a density. Mass, volume and weight all grow with the size of the piece, so they say nothing about the material.`,
      },
    ],
  },
  [r`What is the density of water, written four ways?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A graduated cylinder holds 250 mL of pure water. Water has a density of 1000 kg/m³. What is the mass of the water in grams?`,
        options: [r`25 g`, r`2.5 g`, r`250 g`, r`2500 g`],
        correctAnswer: 2,
        explanation: r`A density of 1000 kg/m³ is the same as 1 g/mL, so each milliliter of water has a mass of 1 g and 250 mL has a mass of 250 g. The other values are power-of-ten slips in that conversion.`,
      },
      {
        question: r`An aquarium holds 0.20 m³ of fresh water. Water has a density of 1.0 g/cm³. What is the mass of the water?`,
        options: [r`200 kg`, r`20 kg`, r`2000 kg`, r`0.20 kg`],
        correctAnswer: 0,
        explanation: r`A density of 1.0 g/cm³ is the same as 1000 kg/m³, so m = (1000)(0.20) = 200 kg. The value 0.20 kg multiplies by 1.0 without converting the units, and 20 or 2000 come from using 100 or 10 000 kg/m³.`,
      },
      {
        question: r`A rain barrel contains 150 kg of fresh water. Water has a density of 1.0 g/cm³. What is the volume of the water in liters?`,
        options: [r`15 L`, r`1.5 L`, r`1500 L`, r`150 L`],
        correctAnswer: 3,
        explanation: r`A density of 1.0 g/cm³ is the same as 1 kg/L, so each kilogram of water fills one liter and 150 kg fills 150 L. The other values are power-of-ten slips in the conversion.`,
      },
      {
        question: r`A single drop of water has a volume of 0.050 cm³. Water has a density of 1000 kg/m³. What is the mass of the drop in milligrams?`,
        options: [r`5.0 mg`, r`50 mg`, r`0.050 mg`, r`500 mg`],
        correctAnswer: 1,
        explanation: r`A density of 1000 kg/m³ is the same as 1 g/cm³, so the drop has a mass of 0.050 g. One gram is 1000 mg, so this is 50 mg. Keeping the number 0.050 treats grams as milligrams, and 5.0 or 500 are power-of-ten slips.`,
      },
      {
        question: r`A swimming pool 10 m long, 5.0 m wide and 2.0 m deep is full of fresh water. Water has a density of 1.0 g/cm³. What is the mass of the water?`,
        options: [r`1.0 × 10² kg`, r`1.0 × 10³ kg`, r`1.0 × 10⁵ kg`, r`1.0 × 10⁸ kg`],
        correctAnswer: 2,
        explanation: r`The volume is (10)(5.0)(2.0) = 100 m³. A density of 1.0 g/cm³ is 1000 kg/m³, so m = (1000)(100) = 1.0 × 10⁵ kg. Using 1 kg/m³ gives 1.0 × 10², using 10 kg/m³ gives 1.0 × 10³, and 1.0 × 10⁸ would be the mass in grams.`,
      },
      {
        question: r`A tank holds exactly 1 m³ of water, and a bottle holds exactly 1 L of water. Water has a density of 1 g/cm³. The mass of water in the tank is how many times the mass in the bottle?`,
        options: [r`1000 times`, r`10 times`, r`100 times`, r`1 000 000 times`],
        correctAnswer: 0,
        explanation: r`Water is 1 g/cm³, which is 1 kg/L and 1000 kg/m³. The bottle holds 1 kg and the tank holds 1000 kg, so the ratio is 1000. A million is the number of cubic centimeters in a cubic meter, not the number of liters.`,
      },
    ],
  },
  [r`How do you convert a density from g/cm³ to kg/m³?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A bottle of ethanol lists its density as 0.79 g/cm³. A pressure calculation needs this density in kg/m³. What value should be used?`,
        options: [r`7.9 × 10⁻⁴ kg/m³`, r`79 kg/m³`, r`7900 kg/m³`, r`790 kg/m³`],
        correctAnswer: 3,
        explanation: r`Multiply a density in g/cm³ by 1000 to get kg/m³: (0.79)(1000) = 790 kg/m³. Dividing by 1000 gives 7.9 × 10⁻⁴, and multiplying by 100 or by 10 000 gives 79 or 7900.`,
      },
      {
        question: r`An engineering table lists the density of olive oil as 920 kg/m³. A chemist wants the same density in g/cm³. What is it?`,
        options: [r`9.2 g/cm³`, r`0.92 g/cm³`, r`92 g/cm³`, r`920 000 g/cm³`],
        correctAnswer: 1,
        explanation: r`Going from g/cm³ to kg/m³ multiplies by 1000, so going back divides by 1000: 920/1000 = 0.92 g/cm³. Multiplying by 1000 gives 920 000, and dividing by only 100 or 10 gives 9.2 or 92.`,
      },
      {
        question: r`Gold has a density of 19.3 g/cm³. What is the density of gold in kg/m³?`,
        options: [r`19 300 kg/m³`, r`1930 kg/m³`, r`0.0193 kg/m³`, r`193 000 kg/m³`],
        correctAnswer: 0,
        explanation: r`Multiply by 1000: (19.3)(1000) = 19 300 kg/m³. The number in kg/m³ is always the bigger one, so 0.0193 comes from dividing by 1000. The values 1930 and 193 000 use a factor of 100 or 10 000.`,
      },
      {
        question: r`A sample of blood plasma has a density of 1.025 g/mL. What is this density in kg/m³?`,
        options: [r`102.5 kg/m³`, r`1.025 × 10⁻³ kg/m³`, r`1025 kg/m³`, r`10 250 kg/m³`],
        correctAnswer: 2,
        explanation: r`One g/mL is the same as one g/cm³, so multiply by 1000: (1.025)(1000) = 1025 kg/m³. Dividing by 1000 gives 1.025 × 10⁻³, and the factors 100 and 10 000 give 102.5 and 10 250.`,
      },
      {
        question: r`The rock deep inside a planet has a density of about 1.3 × 10⁴ kg/m³. What is this density in g/cm³?`,
        options: [r`1.3 g/cm³`, r`13 g/cm³`, r`130 g/cm³`, r`1.3 × 10⁷ g/cm³`],
        correctAnswer: 1,
        explanation: r`To go from kg/m³ to g/cm³, divide by 1000: (1.3 × 10⁴)/10³ = 1.3 × 10¹ = 13 g/cm³. Multiplying by 1000 gives 1.3 × 10⁷, and dividing by 10⁴ or by 10² gives 1.3 or 130.`,
      },
      {
        question: r`Air at room temperature has a density of about 1.2 kg/m³. What is this density in g/cm³?`,
        options: [r`1.2 × 10³ g/cm³`, r`1.2 × 10⁰ g/cm³`, r`1.2 × 10⁻⁶ g/cm³`, r`1.2 × 10⁻³ g/cm³`],
        correctAnswer: 3,
        explanation: r`Divide a density in kg/m³ by 1000 to get g/cm³: 1.2/1000 = 1.2 × 10⁻³ g/cm³. Multiplying by 1000 gives 1.2 × 10³, which would make air denser than water. Leaving the number unchanged or dividing by 10⁶ gives the other two values.`,
      },
    ],
  },
  [r`How do you find the mass of a sample from its density and its volume?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A solid iron ball has a volume of 500 cm³, and iron has a density of 7.8 g/cm³. What is the mass of the ball?`,
        options: [r`64 g`, r`508 g`, r`3900 g`, r`390 g`],
        correctAnswer: 2,
        explanation: r`m = ρV = (7.8)(500) = 3900 g. Dividing the volume by the density gives about 64, adding the two numbers gives about 508, and 390 is a decimal-place slip.`,
      },
      {
        question: r`A large balloon holds 5.0 m³ of helium at a density of 0.18 kg/m³. What is the mass of the helium?`,
        options: [r`0.90 kg`, r`28 kg`, r`0.036 kg`, r`5.2 kg`],
        correctAnswer: 0,
        explanation: r`m = ρV = (0.18)(5.0) = 0.90 kg. Dividing the volume by the density gives about 28, dividing the density by the volume gives 0.036, and adding the numbers gives about 5.2.`,
      },
      {
        question: r`Ball B is made of a material with half the density of ball A's material, and B has four times the volume of A. How does the mass of B compare with the mass of A?`,
        options: [r`It is 8.0 times that of A`, r`It is 0.50 times that of A`, r`It is 0.125 times that of A`, r`It is 2.0 times that of A`],
        correctAnswer: 3,
        explanation: r`Mass is m = ρV, so the factors multiply: (1/2)(4) = 2.0. Multiplying by 2 instead of by one half gives 8.0, ignoring the volume gives 0.50, and dividing by both factors gives 0.125.`,
      },
      {
        question: r`A concrete pillar has a volume of 0.25 m³, and the concrete has a density of 2400 kg/m³. What is the mass of the pillar?`,
        options: [r`9600 kg`, r`600 kg`, r`60 kg`, r`6000 kg`],
        correctAnswer: 1,
        explanation: r`m = ρV = (2400)(0.25) = 600 kg, since a quarter of 2400 is 600. Dividing the density by the volume gives 9600, and 60 or 6000 are decimal-place slips.`,
      },
      {
        question: r`A single bacterium has a volume of 2.0 × 10⁻¹² cm³ and a density of 1.1 g/cm³. What is the mass of the bacterium?`,
        options: [r`1.8 × 10⁻¹² g`, r`5.5 × 10¹¹ g`, r`2.2 × 10⁻¹² g`, r`2.2 × 10¹² g`],
        correctAnswer: 2,
        explanation: r`m = ρV = (1.1)(2.0 × 10⁻¹²) = 2.2 × 10⁻¹² g. Dividing the volume by the density gives 1.8 × 10⁻¹², dividing the density by the volume gives 5.5 × 10¹¹, and 2.2 × 10¹² drops the negative sign from the power of ten.`,
      },
      {
        question: r`A rectangular block of ice measures 10 cm by 10 cm by 5.0 cm, and ice has a density of 0.92 g/cm³. What is the mass of the block?`,
        options: [r`460 g`, r`543 g`, r`92 g`, r`23 g`],
        correctAnswer: 0,
        explanation: r`The volume is (10)(10)(5.0) = 500 cm³, so m = ρV = (0.92)(500) = 460 g. Dividing the volume by the density gives about 543, using only the 10 cm by 10 cm face gives 92, and adding the three lengths before multiplying gives 23.`,
      },
    ],
  },
  [r`How do you find the weight of a sample from its density and its volume?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A water bed mattress holds 0.80 m³ of water, and water has a density of 1000 kg/m³. Using g = 10 m/s², what is the weight of the water?`,
        options: [r`800 N`, r`8000 N`, r`80 N`, r`80 000 N`],
        correctAnswer: 1,
        explanation: r`W = ρVg = (1000)(0.80)(10) = 8000 N. The value 800 is the mass in kilograms with g left out, 80 divides by g instead of multiplying, and 80 000 is a power-of-ten slip.`,
      },
      {
        question: r`A marble statue has a volume of 0.20 m³, and marble has a density of 2500 kg/m³. Using g = 10 m/s², what is the weight of the statue?`,
        options: [r`500 N`, r`125 000 N`, r`50 N`, r`5000 N`],
        correctAnswer: 3,
        explanation: r`W = ρVg = (2500)(0.20)(10) = 5000 N. Stopping at the mass gives 500, dividing the density by the volume before multiplying by g gives 125 000, and dividing the mass by g gives 50.`,
      },
      {
        question: r`A load of dry sand weighs 32 000 N, and the sand has a density of 1600 kg/m³. Using g = 10 m/s², what is the volume of the sand?`,
        options: [r`20 m³`, r`0.50 m³`, r`2.0 m³`, r`0.20 m³`],
        correctAnswer: 2,
        explanation: r`From W = ρVg, V = W/(ρg) = 32 000/((1600)(10)) = 2.0 m³. Leaving out g gives 20, flipping the ratio gives 0.50, and dividing by g twice gives 0.20.`,
      },
      {
        question: r`A solid plastic block has a volume of 0.050 m³ and weighs 450 N. Using g = 10 m/s², what is the density of the plastic?`,
        options: [r`900 kg/m³`, r`9000 kg/m³`, r`90 kg/m³`, r`225 kg/m³`],
        correctAnswer: 0,
        explanation: r`The mass is m = W/g = 450/10 = 45 kg, so ρ = m/V = 45/0.050 = 900 kg/m³. Dividing the weight by the volume without removing g gives 9000, dividing by g twice gives 90, and multiplying weight by volume and then by g gives 225.`,
      },
      {
        question: r`A barometer holds 100 cm³ of mercury, which is 1.0 × 10⁻⁴ m³. Mercury has a density of 13 600 kg/m³. Using g = 10 m/s², what is the weight of the mercury?`,
        options: [r`1.36 N`, r`1.36 × 10⁷ N`, r`136 N`, r`13.6 N`],
        correctAnswer: 3,
        explanation: r`W = ρVg = (13 600)(1.0 × 10⁻⁴)(10) = 13.6 N. Stopping at the mass gives 1.36, using 100 for the volume without converting to cubic meters gives 1.36 × 10⁷, and 136 is a power-of-ten slip.`,
      },
      {
        question: r`Two identical tanks are filled to the brim, one with gasoline of density 700 kg/m³ and one with water of density 1000 kg/m³. How does the weight of the gasoline compare with the weight of the water?`,
        options: [r`It is 1.4 times the water's weight`, r`It is 0.70 times the water's weight`, r`It is 0.30 times the water's weight`, r`It is 7.0 times the water's weight`],
        correctAnswer: 1,
        explanation: r`W = ρVg, and the volume and g are the same for both, so the weights are in the ratio of the densities: 700/1000 = 0.70. Flipping the ratio gives about 1.4, subtracting from one gives 0.30, and 7.0 is a power-of-ten slip.`,
      },
    ],
  },
  [r`Why are liquids treated as incompressible, and how do gases differ?`]: {
    kind: 'concept',
    more: [
      {
        question: r`The lines of a hydraulic brake system are filled with a liquid, never with a gas. Which property of a liquid makes it the right choice?`,
        options: [r`A liquid's density rises steeply when it is squeezed`, r`A liquid spreads out to fill the whole of the line`, r`A liquid barely changes volume when it is squeezed`, r`A liquid always has a lower density than a gas does`],
        correctAnswer: 2,
        explanation: r`A liquid is nearly incompressible, so pushing on it moves the liquid along instead of shrinking it. A gas would compress, and its density would rise with the pressure. Spreading out to fill a container describes a gas, and liquids are far denser than gases.`,
      },
      {
        question: r`Water at the surface of a lake has a density of 1000 kg/m³. At the bottom of the lake the pressure is twice as great. About what is the density of the water there?`,
        options: [r`About 1000 kg/m³, since water barely compresses`, r`About 2000 kg/m³, since the pressure has doubled`, r`About 500 kg/m³, since the pressure has doubled`, r`About 1400 kg/m³, since density rises with depth`],
        correctAnswer: 0,
        explanation: r`A liquid barely changes volume when it is squeezed, so its density is taken as constant at 1000 kg/m³ at every depth. Doubling the density with the pressure is how a gas at constant temperature behaves, not a liquid, and halving it gets even that wrong.`,
      },
    ],
  },
  [r`What is specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Kerosene has a density of 820 kg/m³, and water has a density of 1000 kg/m³. What is the specific gravity of kerosene?`,
        options: [r`0.82`, r`1.22`, r`820`, r`0.18`],
        correctAnswer: 0,
        explanation: r`SG = ρ/ρ(water) = 820/1000 = 0.82, with no units. Flipping the ratio gives 1.22, 820 is just the density with its units dropped, and 0.18 comes from subtracting 0.82 from one.`,
      },
      {
        question: r`Aluminum has a density of 2.7 g/cm³, and water has a density of 1.0 g/cm³. What is the specific gravity of aluminum?`,
        options: [r`0.37`, r`2700`, r`2.7`, r`1.7`],
        correctAnswer: 2,
        explanation: r`SG = ρ/ρ(water) = 2.7/1.0 = 2.7. Flipping the ratio gives 0.37, 2700 is the density in kg/m³ and not a ratio, and 1.7 comes from subtracting the densities instead of dividing.`,
      },
      {
        question: r`The acid in a car battery has a specific gravity of 1.25, and water has a density of 1000 kg/m³. What is the density of the acid?`,
        options: [r`800 kg/m³`, r`1.25 kg/m³`, r`125 kg/m³`, r`1250 kg/m³`],
        correctAnswer: 3,
        explanation: r`Rearranging SG = ρ/ρ(water) gives ρ = (1.25)(1000) = 1250 kg/m³. Dividing 1000 by 1.25 gives 800, 1.25 kg/m³ forgets to multiply by the density of water, and 125 is a power-of-ten slip.`,
      },
      {
        question: r`A 50 cm³ sample of a liquid has a mass of 40 g. Water has a density of 1.0 g/cm³. What is the specific gravity of the liquid?`,
        options: [r`1.25`, r`0.80`, r`0.80 g/cm³`, r`1.25 g/cm³`],
        correctAnswer: 1,
        explanation: r`The density is 40/50 = 0.80 g/cm³, and dividing by water's 1.0 g/cm³ gives SG = 0.80. The units cancel in the ratio, so a specific gravity carries no units. The value 1.25 comes from dividing volume by mass.`,
      },
      {
        question: r`A sugar syrup has a specific gravity of 1.8, and a light oil has a specific gravity of 0.60. What is the ratio of the syrup's density to the oil's density?`,
        options: [r`0.33`, r`1.2`, r`3.0`, r`1.08`],
        correctAnswer: 2,
        explanation: r`Each density is its specific gravity times the density of water, so the water density cancels: 1.8/0.60 = 3.0. Flipping the ratio gives 0.33, subtracting gives 1.2, and multiplying gives 1.08.`,
      },
      {
        question: r`A new alloy has a density of 6800 kg/m³. Mercury has a density of 13 600 kg/m³, and water has a density of 1000 kg/m³. What is the specific gravity of the alloy?`,
        options: [r`0.50`, r`6800`, r`0.147`, r`6.8`],
        correctAnswer: 3,
        explanation: r`Specific gravity always compares with water: SG = 6800/1000 = 6.8. Dividing by mercury's density gives 0.50, flipping the ratio with water gives 0.147, and 6800 is the density itself and not a ratio.`,
      },
    ],
  },
  [r`How do you turn a specific gravity into a density?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An antifreeze has a specific gravity of 1.1, and water has a density of 1000 kg/m³. What is the density of the antifreeze in kg/m³?`,
        options: [r`1.1 kg/m³`, r`1100 kg/m³`, r`110 kg/m³`, r`909 kg/m³`],
        correctAnswer: 1,
        explanation: r`Multiply the specific gravity by 1000 to get kg/m³: (1.1)(1000) = 1100 kg/m³. Keeping 1.1 gives the density in g/cm³, not kg/m³. Dividing 1000 by 1.1 gives 909, and 110 is a power-of-ten slip.`,
      },
      {
        question: r`Cork has a specific gravity of 0.25, and water has a density of 1.0 g/cm³. What is the density of cork in g/cm³?`,
        options: [r`0.25 g/cm³`, r`250 g/cm³`, r`4.0 g/cm³`, r`0.00025 g/cm³`],
        correctAnswer: 0,
        explanation: r`The specific gravity is the density in g/cm³, so cork is 0.25 g/cm³. The number 250 is the density in kg/m³, 4.0 comes from dividing one by 0.25, and 0.00025 from dividing by 1000.`,
      },
      {
        question: r`A fuel has a density of 0.68 g/cm³, and water has a density of 1.0 g/cm³. What are the fuel's specific gravity and its density in kg/m³?`,
        options: [r`680, and 0.68 kg/m³`, r`1.47, and 1470 kg/m³`, r`0.68, and 680 kg/m³`, r`0.68, and 6800 kg/m³`],
        correctAnswer: 2,
        explanation: r`The density in g/cm³ is the specific gravity, 0.68, and multiplying by 1000 gives 680 kg/m³. Swapping the two numbers puts 680 on the ratio, 1.47 comes from dividing one by 0.68, and 6800 uses a factor of 10 000.`,
      },
      {
        question: r`A brine has a specific gravity of 1.2, and water has a density of 1000 kg/m³. What is the mass of exactly one cubic meter of the brine?`,
        options: [r`1.2 kg`, r`833 kg`, r`120 kg`, r`1200 kg`],
        correctAnswer: 3,
        explanation: r`A specific gravity of 1.2 means a density of (1.2)(1000) = 1200 kg/m³, so one cubic meter has a mass of 1200 kg. The value 1.2 kg forgets the factor of 1000, 833 divides 1000 by 1.2, and 120 is a power-of-ten slip.`,
      },
      {
        question: r`Osmium, one of the densest metals, has a specific gravity of 22.6. Water has a density of 1000 kg/m³. What is the density of osmium?`,
        options: [r`2.26 × 10⁴ kg/m³`, r`2.26 × 10¹ kg/m³`, r`2.26 × 10⁻² kg/m³`, r`2.26 × 10³ kg/m³`],
        correctAnswer: 0,
        explanation: r`ρ = (22.6)(1000) = 22 600 = 2.26 × 10⁴ kg/m³. Leaving the number as 22.6 gives the density in g/cm³, dividing by 1000 gives 2.26 × 10⁻², and 2.26 × 10³ multiplies by only 100.`,
      },
      {
        question: r`An oil with a specific gravity of 0.80 floats on a syrup with a specific gravity of 1.3. Water has a density of 1000 kg/m³. By how much does the syrup's density exceed the oil's?`,
        options: [r`0.50 kg/m³`, r`500 kg/m³`, r`50 kg/m³`, r`2100 kg/m³`],
        correctAnswer: 1,
        explanation: r`The densities are (0.80)(1000) = 800 kg/m³ and (1.3)(1000) = 1300 kg/m³, a difference of 500 kg/m³. The value 0.50 subtracts the specific gravities without converting, 2100 adds the two densities, and 50 is a power-of-ten slip.`,
      },
    ],
  },
  [r`What are the specific gravity values of ice, seawater, blood and mercury?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Five materials are ranked by specific gravity. Which list runs from the least dense to the most dense?`,
        options: [r`Fresh water, ice, seawater, blood, mercury`, r`Ice, fresh water, blood, seawater, mercury`, r`Ice, fresh water, seawater, blood, mercury`, r`Ice, seawater, fresh water, blood, mercury`],
        correctAnswer: 2,
        explanation: r`The specific gravities are ice 0.92, fresh water 1.00, seawater 1.03, blood 1.05 and mercury 13.6. Ice is less dense than water, which is why it floats, and blood is slightly denser than seawater. Each wrong list swaps one neighboring pair.`,
      },
      {
        question: r`Water has a density of 1000 kg/m³. About how many times as dense as water is mercury, and what is the density of mercury?`,
        options: [r`1.36 times, so 1360 kg/m³`, r`136 times, so 136 000 kg/m³`, r`13.6 times, so 1360 kg/m³`, r`13.6 times, so 13 600 kg/m³`],
        correctAnswer: 3,
        explanation: r`Mercury has a specific gravity of 13.6, so it is 13.6 times as dense as water: (13.6)(1000) = 13 600 kg/m³. The values 1.36 and 136 misplace the decimal point, and 1360 multiplies 13.6 by only 100.`,
      },
    ],
  },
  [r`A problem gives a sample's mass and volume, then asks about a larger piece of the same material. What do you find first?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 20 cm³ sample of an alloy has a mass of 160 g. What is the mass of a 150 cm³ ingot of the same alloy?`,
        options: [r`19 g`, r`290 g`, r`24 000 g`, r`1200 g`],
        correctAnswer: 3,
        explanation: r`First find the density: ρ = m/V = 160/20 = 8.0 g/cm³. It is the same for the ingot, so m = (8.0)(150) = 1200 g. Flipping the density ratio leads to about 19, multiplying the two given numbers gives 24 000, and 290 adds the extra 130 cm³ to the mass.`,
      },
      {
        question: r`A 50 cm³ chip broken from a granite boulder has a mass of 135 g. The boulder has a volume of 2.0 m³. What is the density of the granite in the boulder?`,
        options: [r`2.7 g/cm³`, r`5.4 g/cm³`, r`0.37 g/cm³`, r`1.35 g/cm³`],
        correctAnswer: 0,
        explanation: r`The chip gives ρ = m/V = 135/50 = 2.7 g/cm³, and density is the same for any piece of the material, so the boulder is also 2.7 g/cm³. Multiplying or dividing by the boulder's 2.0 gives 5.4 or 1.35, and flipping the ratio gives 0.37.`,
      },
      {
        question: r`A 10 cm³ sample of candle wax has a mass of 9.0 g. What volume of the same wax has a mass of 450 g?`,
        options: [r`405 cm³`, r`450 cm³`, r`500 cm³`, r`50 cm³`],
        correctAnswer: 2,
        explanation: r`The sample gives ρ = m/V = 9.0/10 = 0.90 g/cm³. The same density applies to the larger amount, so V = m/ρ = 450/0.90 = 500 cm³. Multiplying by the density gives 405, treating the density as 1 gives 450, and 50 is a power-of-ten slip.`,
      },
      {
        question: r`A 0.020 m³ test block of concrete has a mass of 46 kg. What is the mass of a 3.0 m³ footing poured from the same concrete?`,
        options: [r`138 kg`, r`6900 kg`, r`767 kg`, r`2300 kg`],
        correctAnswer: 1,
        explanation: r`The test block gives ρ = m/V = 46/0.020 = 2300 kg/m³, and the footing has the same density, so m = (2300)(3.0) = 6900 kg. Multiplying 46 by 3.0 gives 138, dividing the density by the volume gives 767, and 2300 stops at the density.`,
      },
      {
        question: r`A 4.0 cm³ pellet of a plastic has a mass of 5.0 g. What is the mass of 1.0 L, which is 1000 cm³, of the same plastic?`,
        options: [r`1250 g`, r`800 g`, r`1.25 g`, r`5000 g`],
        correctAnswer: 0,
        explanation: r`The pellet gives ρ = m/V = 5.0/4.0 = 1.25 g/cm³, so 1000 cm³ has a mass of (1.25)(1000) = 1250 g. Flipping the ratio leads to 800, multiplying by 1.0 L without converting to cm³ gives 1.25, and 5000 multiplies the pellet's mass by 1000.`,
      },
      {
        question: r`A 25 cm³ piece of a ceramic has a mass of 60 g. A second piece of the same ceramic has 8 times the volume. What are the mass and the density of the second piece?`,
        options: [r`480 g, with a density of 19 g/cm³`, r`60 g, with a density of 0.30 g/cm³`, r`480 g, with a density of 2.4 g/cm³`, r`7.5 g, with a density of 2.4 g/cm³`],
        correctAnswer: 2,
        explanation: r`The first piece gives ρ = m/V = 60/25 = 2.4 g/cm³, and the second piece has the same density. With 8 times the volume it has 8 times the mass, (8)(60) = 480 g. A density of 19 g/cm³ wrongly scales the density by 8, 0.30 keeps the mass at 60 g, and 7.5 g divides the mass by 8.`,
      },
    ],
  },
  [r`What is the common trap when computing a density from a mass and a volume?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student divides a sample's volume in cm³ by its mass in grams. What unit does the result have, and is the result a density?`,
        options: [r`g/cm³, so it is a density`, r`cm³/g, so it is not a density`, r`cm³/g, so it is a density`, r`g·cm³, so it is not a density`],
        correctAnswer: 1,
        explanation: r`Volume over mass has the unit cm³/g, which is the flipped ratio. Density is mass over volume, ρ = m/V, in g/cm³. Checking the unit of the result is a quick way to catch the flip.`,
      },
      {
        question: r`A steel bolt has a mass of 40 g and a volume of 5.0 cm³. One student reports its density as 8.0 g/cm³ and another as 0.125 g/cm³. Which value is right, and why?`,
        options: [r`0.125 g/cm³, since volume is divided by mass`, r`8.0 g/cm³, since volume is divided by mass`, r`0.125 g/cm³, since mass is divided by volume`, r`8.0 g/cm³, since mass is divided by volume`],
        correctAnswer: 3,
        explanation: r`Density puts mass on top: ρ = m/V = 40/5.0 = 8.0 g/cm³. The value 0.125 comes from 5.0/40, which is volume over mass and has the unit cm³/g. A steel bolt sinks in water, so a density below 1 g/cm³ could not be right.`,
      },
    ],
  },
  [r`Which unit pairs match when you use $m = \rho V$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Gasoline has a density of 700 kg/m³, and a fuel can holds 20 L of it. One liter is 10⁻³ m³. What is the mass of the gasoline?`,
        options: [r`14 000 kg`, r`14 kg`, r`35 kg`, r`1.4 kg`],
        correctAnswer: 1,
        explanation: r`Match the units first: 20 L = 0.020 m³. Then m = ρV = (700)(0.020) = 14 kg. Multiplying kg/m³ by liters without converting gives 14 000, dividing 700 by 20 gives 35, and 1.4 is a power-of-ten slip.`,
      },
      {
        question: r`Glycerin has a density of 1.26 g/cm³, and a beaker holds 0.50 L of it. One liter is 1000 cm³. What is the mass of the glycerin?`,
        options: [r`0.63 g`, r`397 g`, r`63 g`, r`630 g`],
        correctAnswer: 3,
        explanation: r`Match the units first: 0.50 L = 500 cm³. Then m = ρV = (1.26)(500) = 630 g. Multiplying g/cm³ by liters without converting gives 0.63, dividing 500 by 1.26 gives about 397, and 63 is a power-of-ten slip.`,
      },
      {
        question: r`Oak has a density of 0.75 g/cm³, which is 750 kg/m³. An oak beam has a volume of 0.040 m³. What is the mass of the beam?`,
        options: [r`30 kg`, r`0.030 kg`, r`53 kg`, r`300 kg`],
        correctAnswer: 0,
        explanation: r`The volume is in cubic meters, so use the density in kg/m³: m = (750)(0.040) = 30 kg. Multiplying 0.75 g/cm³ by a volume in m³ gives 0.030, dividing the volume by the density leads to about 53, and 300 is a power-of-ten slip.`,
      },
      {
        question: r`Aluminum has a density of 2700 kg/m³, which is 2.7 g/cm³. A small aluminum rivet has a volume of 20 cm³. What is the mass of the rivet in grams?`,
        options: [r`54 000 g`, r`135 g`, r`54 g`, r`5.4 g`],
        correctAnswer: 2,
        explanation: r`The volume is in cm³, so use the density in g/cm³: m = (2.7)(20) = 54 g. Multiplying 2700 kg/m³ by a volume in cm³ gives 54 000, dividing 2700 by 20 gives 135, and 5.4 is a power-of-ten slip.`,
      },
      {
        question: r`Honey has a density of 1.4 g/cm³, and a jar holds 2.8 kg of it. One liter is 1000 cm³. What is the volume of the honey in liters?`,
        options: [r`2.0 L`, r`2000 L`, r`0.0020 L`, r`3.9 L`],
        correctAnswer: 0,
        explanation: r`Match the units first: 2.8 kg = 2800 g. Then V = m/ρ = 2800/1.4 = 2000 cm³, which is 2.0 L. Reading 2000 cm³ as liters gives 2000, dividing 2.8 by 1.4 and then by 1000 gives 0.0020, and multiplying 2.8 by 1.4 gives about 3.9.`,
      },
      {
        question: r`A student multiplies a density in kg/m³ by a volume in liters, without converting, and reads the result as a mass in kilograms. How does this result compare with the true mass?`,
        options: [r`It is 1000 times too small`, r`It is 1 000 000 times too large`, r`It is 100 times too large`, r`It is 1000 times too large`],
        correctAnswer: 3,
        explanation: r`One liter is 10⁻³ m³, so the volume in m³ is the number of liters divided by 1000. Using the number of liters directly makes the product 1000 times too large. A factor of a million would apply to a volume in cm³, not in liters.`,
      },
    ],
  },
  [r`How many cubic centimeters, and how many cubic meters, are in one liter?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An office water cooler jug holds 19 L. What is this volume in cubic centimeters?`,
        options: [r`1900 cm³`, r`190 cm³`, r`19 000 cm³`, r`190 000 cm³`],
        correctAnswer: 2,
        explanation: r`One liter is 1000 cm³, so 19 L = (19)(1000) = 19 000 cm³. The values 1900 and 190 use 100 or 10 cm³ per liter, and 190 000 uses 10 000.`,
      },
      {
        question: r`In one quiet breath an adult moves about 0.50 L of air. What is this volume in cubic meters?`,
        options: [r`5.0 × 10⁻³ m³`, r`5.0 × 10⁻⁴ m³`, r`5.0 × 10⁻¹ m³`, r`5.0 × 10² m³`],
        correctAnswer: 1,
        explanation: r`One liter is 10⁻³ m³, so 0.50 L = 0.50 × 10⁻³ = 5.0 × 10⁻⁴ m³. The value 5.0 × 10⁻³ misplaces the decimal, 5.0 × 10⁻¹ treats a liter as a cubic meter, and 5.0 × 10² multiplies by 1000.`,
      },
      {
        question: r`A car engine has a total cylinder volume of 1500 cm³. What is this volume in liters?`,
        options: [r`15 L`, r`150 L`, r`0.15 L`, r`1.5 L`],
        correctAnswer: 3,
        explanation: r`One liter is 1000 cm³, so 1500 cm³ = 1500/1000 = 1.5 L. Dividing by 100 or by 10 gives 15 or 150, and dividing by 10 000 gives 0.15.`,
      },
      {
        question: r`A hot tub holds 1.2 m³ of water. What is this volume in liters?`,
        options: [r`1200 L`, r`120 L`, r`12 L`, r`0.0012 L`],
        correctAnswer: 0,
        explanation: r`One liter is 10⁻³ m³, so one cubic meter is 1000 L and 1.2 m³ = 1200 L. Dividing by 1000 instead gives 0.0012, and 120 or 12 use 100 or 10 liters per cubic meter.`,
      },
      {
        question: r`An adult has about 5.0 L of blood. What is this volume in cubic centimeters and in cubic meters?`,
        options: [r`500 cm³, or 5.0 × 10⁻³ m³`, r`5000 cm³, or 5.0 × 10⁻³ m³`, r`5000 cm³, or 5.0 × 10⁻⁶ m³`, r`50 000 cm³, or 5.0 × 10⁻² m³`],
        correctAnswer: 1,
        explanation: r`One liter is 1000 cm³ and 10⁻³ m³, so 5.0 L is 5000 cm³, or 5.0 × 10⁻³ m³. The value 500 cm³ uses 100 cm³ per liter, 5.0 × 10⁻⁶ m³ is the size of 5.0 mL, and 50 000 cm³ is a power-of-ten slip.`,
      },
      {
        question: r`A dispenser holds 0.010 m³ of juice. How many 250 cm³ cups can it fill?`,
        options: [r`4 cups`, r`400 cups`, r`40 cups`, r`25 cups`],
        correctAnswer: 2,
        explanation: r`One cubic meter is 1000 L, so 0.010 m³ = 10 L = 10 000 cm³. Dividing by 250 cm³ per cup gives 40 cups. Using 1000 cm³ or 100 000 cm³ for the dispenser gives 4 or 400, and 25 comes from dividing 250 by 10.`,
      },
    ],
  },
  [r`A question asks for a sample's weight, and you have found its mass. What is left to do?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student finds that the ethanol in a flask has a mass of 0.40 kg. The question asks for the ethanol's weight. Using g = 10 m/s², what is it?`,
        options: [r`4.0 N`, r`0.40 N`, r`0.040 N`, r`40 N`],
        correctAnswer: 0,
        explanation: r`W = mg = (0.40)(10) = 4.0 N. Reporting 0.40 just relabels the mass as a weight, 0.040 divides by g instead of multiplying, and 40 is a power-of-ten slip.`,
      },
      {
        question: r`The mercury in a glass tube has a mass of 250 g. Using g = 10 m/s², what is the weight of the mercury?`,
        options: [r`2500 N`, r`25 N`, r`2.5 N`, r`0.25 N`],
        correctAnswer: 2,
        explanation: r`Convert the mass to kilograms first: 250 g = 0.25 kg. Then W = mg = (0.25)(10) = 2.5 N. Multiplying 250 by 10 without converting gives 2500, and 0.25 is the mass in kilograms with g left out.`,
      },
      {
        question: r`A crate of machine parts weighs 180 N. Using g = 10 m/s², what is the mass of the crate?`,
        options: [r`1800 kg`, r`180 kg`, r`1.8 kg`, r`18 kg`],
        correctAnswer: 3,
        explanation: r`Rearranging W = mg gives m = W/g = 180/10 = 18 kg. Multiplying by g gives 1800, treating the weight as the mass gives 180, and 1.8 divides by g twice.`,
      },
      {
        question: r`A storage tank holds oil with a mass of 1200 kg. Using g = 10 m/s², what is the weight of the oil?`,
        options: [r`1.2 × 10³ N`, r`1.2 × 10⁴ N`, r`1.2 × 10² N`, r`1.2 × 10⁵ N`],
        correctAnswer: 1,
        explanation: r`W = mg = (1200)(10) = 12 000 N = 1.2 × 10⁴ N. The value 1.2 × 10³ is the mass relabelled as a weight, 1.2 × 10² divides by g, and 1.2 × 10⁵ multiplies by g twice.`,
      },
      {
        question: r`A question asks for the weight of 0.0050 m³ of an oil of density 800 kg/m³. A student multiplies the two and reports 4.0 as the answer. Using g = 10 m/s², what is the correct answer?`,
        options: [r`4.0 N, since mass and weight are equal`, r`0.40 N, since the mass is divided by g`, r`40 N, since 4.0 kg is only the mass`, r`400 N, since g must be applied twice`],
        correctAnswer: 2,
        explanation: r`The product ρV = (800)(0.0050) = 4.0 kg is the mass. The weight needs one more step: W = mg = (4.0)(10) = 40 N. Mass and weight are different quantities, and g multiplies the mass once.`,
      },
      {
        question: r`Two bags of sand have masses of 3.0 kg and 8.0 kg. Using g = 10 m/s², by how much does the weight of the heavier bag exceed the weight of the lighter one?`,
        options: [r`50 N`, r`5.0 N`, r`110 N`, r`0.50 N`],
        correctAnswer: 0,
        explanation: r`The weights are (3.0)(10) = 30 N and (8.0)(10) = 80 N, so the difference is 50 N. The value 5.0 is the difference in mass with g left out, 110 adds the two weights, and 0.50 divides the mass difference by g.`,
      },
    ],
  },
  [r`A liquid's specific gravity and its volume are given. How do you find its mass?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flask holds 150 mL of acetone, which has a specific gravity of 0.80. Water has a density of 1.0 g/cm³. What is the mass of the acetone?`,
        options: [r`188 g`, r`120 g`, r`151 g`, r`12 g`],
        correctAnswer: 1,
        explanation: r`A specific gravity of 0.80 means 0.80 g/cm³, and 150 mL is 150 cm³. So m = ρV = (0.80)(150) = 120 g. Dividing the volume by the specific gravity gives about 188, adding the numbers gives about 151, and 12 is a power-of-ten slip.`,
      },
      {
        question: r`A sealed ampoule contains 20 cm³ of liquid bromine, which has a specific gravity of 3.1. Water has a density of 1.0 g/cm³. What is the mass of the bromine?`,
        options: [r`6.5 g`, r`23 g`, r`620 g`, r`62 g`],
        correctAnswer: 3,
        explanation: r`A specific gravity of 3.1 means 3.1 g/cm³, so m = ρV = (3.1)(20) = 62 g. Dividing the volume by the specific gravity gives about 6.5, adding the numbers gives about 23, and 620 is a power-of-ten slip.`,
      },
      {
        question: r`A jug holds 0.50 L, which is 500 cm³, of corn syrup with a specific gravity of 1.4. Water has a density of 1.0 g/cm³. What is the mass of the syrup?`,
        options: [r`700 g`, r`357 g`, r`0.70 g`, r`70 g`],
        correctAnswer: 0,
        explanation: r`A specific gravity of 1.4 means 1.4 g/cm³, so m = ρV = (1.4)(500) = 700 g. Dividing the volume by the specific gravity gives about 357, multiplying by 0.50 L without converting to cm³ gives 0.70, and 70 is a power-of-ten slip.`,
      },
      {
        question: r`A tanker truck carries 20 m³ of an oil with a specific gravity of 0.85. Water has a density of 1000 kg/m³. What is the mass of the oil?`,
        options: [r`23 500 kg`, r`1700 kg`, r`17 000 kg`, r`17 kg`],
        correctAnswer: 2,
        explanation: r`The volume is in cubic meters, so use the density in kg/m³: ρ = (0.85)(1000) = 850 kg/m³, and m = ρV = (850)(20) = 17 000 kg. Multiplying 0.85 by 20 without the factor of 1000 gives 17, and dividing the volume by the specific gravity leads to about 23 500.`,
      },
      {
        question: r`A 300 mL bottle is filled with a liquid of specific gravity 1.3. Water has a density of 1.0 g/cm³. How much more mass does the liquid have than 300 mL of water?`,
        options: [r`390 g`, r`69 g`, r`30 g`, r`90 g`],
        correctAnswer: 3,
        explanation: r`The liquid's mass is (1.3)(300) = 390 g, and 300 mL of water has a mass of 300 g, so the difference is 90 g. The value 390 is the liquid's whole mass, and 69 comes from dividing 300 by 1.3 and subtracting the result from 300.`,
      },
      {
        question: r`A beaker receives 100 mL of a liquid of specific gravity 0.70 and 100 mL of a liquid of specific gravity 1.4. Water has a density of 1.0 g/cm³. What is the total mass of liquid in the beaker?`,
        options: [r`98 g`, r`210 g`, r`214 g`, r`2.1 g`],
        correctAnswer: 1,
        explanation: r`Each mass is the specific gravity, read as g/cm³, times 100 cm³: 70 g and 140 g, for a total of 210 g. Dividing each volume by its specific gravity gives about 143 and 71, which add to 214, and 98 multiplies the two specific gravities by 100.`,
      },
    ],
  },
  [r`How do you find the volume of a liquid from its mass and its specific gravity?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A formula calls for 45 g of an oil whose specific gravity is 0.90. Water has a density of 1.0 g/cm³. What volume of the oil should be measured out?`,
        options: [r`41 cm³`, r`44 cm³`, r`50 cm³`, r`500 cm³`],
        correctAnswer: 2,
        explanation: r`A specific gravity of 0.90 means 0.90 g/cm³, so V = m/ρ = 45/0.90 = 50 cm³. Multiplying by the specific gravity gives about 41, subtracting it gives about 44, and 500 is a power-of-ten slip. A liquid less dense than water needs more than 1 cm³ per gram.`,
      },
      {
        question: r`A thermometer maker needs 68 g of mercury, which has a specific gravity of 13.6. Water has a density of 1.0 g/cm³. What volume of mercury is that?`,
        options: [r`5.0 cm³`, r`925 cm³`, r`0.20 cm³`, r`50 cm³`],
        correctAnswer: 0,
        explanation: r`A specific gravity of 13.6 means 13.6 g/cm³, so V = m/ρ = 68/13.6 = 5.0 cm³. Multiplying instead gives about 925, flipping the ratio gives 0.20, and 50 is a power-of-ten slip.`,
      },
      {
        question: r`A batch of resin has a mass of 1.5 kg, which is 1500 g, and a specific gravity of 1.25. Water has a density of 1.0 g/cm³. What is the volume of the batch?`,
        options: [r`1875 cm³`, r`1.2 cm³`, r`120 cm³`, r`1200 cm³`],
        correctAnswer: 3,
        explanation: r`A specific gravity of 1.25 means 1.25 g/cm³, so V = m/ρ = 1500/1.25 = 1200 cm³. Multiplying instead gives 1875, dividing 1.5 kg by 1.25 without converting to grams gives 1.2, and 120 is a power-of-ten slip.`,
      },
      {
        question: r`A cook measures out 100 g of water and 100 g of an oil with a specific gravity of 0.80. Water has a density of 1.0 g/cm³. How much more volume does the oil take up than the water?`,
        options: [r`20 cm³`, r`25 cm³`, r`125 cm³`, r`80 cm³`],
        correctAnswer: 1,
        explanation: r`The water fills 100/1.0 = 100 cm³ and the oil fills 100/0.80 = 125 cm³, so the oil takes up 25 cm³ more. The value 125 is the oil's whole volume, 80 comes from multiplying by the specific gravity, and 20 is the gap between 100 and that 80.`,
      },
      {
        question: r`Liquid X has a specific gravity of 0.80, and liquid Z has a specific gravity of 1.6. Equal masses of the two are poured out. How does the volume of X compare with the volume of Z?`,
        options: [r`It is 0.50 times the volume of Z`, r`It is 1.28 times the volume of Z`, r`It is 2.0 times the volume of Z`, r`It is 0.80 times the volume of Z`],
        correctAnswer: 2,
        explanation: r`V = m/ρ, so for equal masses the volume is inversely proportional to the density: 1.6/0.80 = 2.0. The less dense liquid needs more volume. Taking the volume as proportional to density gives 0.50, and 1.28 multiplies the two specific gravities.`,
      },
      {
        question: r`A drum contains 4.2 kg, which is 4200 g, of a solvent with a specific gravity of 0.70. Water has a density of 1.0 g/cm³, and one liter is 1000 cm³. What is the volume of the solvent in liters?`,
        options: [r`6.0 L`, r`2.9 L`, r`6000 L`, r`0.60 L`],
        correctAnswer: 0,
        explanation: r`A specific gravity of 0.70 means 0.70 g/cm³, so V = m/ρ = 4200/0.70 = 6000 cm³, which is 6.0 L. Multiplying 4.2 by 0.70 gives about 2.9, reading 6000 cm³ as liters gives 6000, and 0.60 is a power-of-ten slip.`,
      },
    ],
  },
}
