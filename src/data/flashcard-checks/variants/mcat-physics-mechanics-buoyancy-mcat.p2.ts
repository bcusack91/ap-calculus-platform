import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-mechanics-buoyancy-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How does hydrostatic weighing determine body composition?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A woman weighs 600 N in air. Fully submerged in fresh water with her lungs emptied, her apparent weight is 30 N. What is the volume of her body? (Water: 1000 kg/m³, g = 10 m/s², 1 m³ = 1000 L)`,
        options: [r`60 L`, r`3.0 L`, r`57 L`, r`63 L`],
        correctAnswer: 2,
        explanation: r`The buoyant force is the true weight minus the apparent weight, 600 − 30 = 570 N, and V = F_B/(ρg) = 570/(1000 × 10) = 0.057 m³ = 57 L. 60 L uses the true weight as the buoyant force, 3.0 L uses the apparent weight, and 63 L adds the two weights instead of subtracting.`,
      },
      {
        question: r`An athlete weighs 840 N in air and has an apparent weight of 40 N when fully submerged in fresh water with the lungs emptied. What is the athlete's whole-body density? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`1050 kg/m³`, r`950 kg/m³`, r`1000 kg/m³`, r`21 000 kg/m³`],
        correctAnswer: 0,
        explanation: r`The buoyant force is 840 − 40 = 800 N, so the body's volume is 800/(1000 × 10) = 0.080 m³. The mass is 840/10 = 84 kg, giving 84/0.080 = 1050 kg/m³. 950 kg/m³ inverts the ratio of weight to buoyant force, 1000 kg/m³ is just water, and 21 000 kg/m³ divides the true weight by the apparent weight.`,
      },
      {
        question: r`A subject weighs 630 N in air and has a whole-body density of 1050 kg/m³ with the lungs emptied. What apparent weight is expected when the subject is fully submerged in fresh water? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`600 N`, r`63 N`, r`1230 N`, r`30 N`],
        correctAnswer: 3,
        explanation: r`The mass is 63 kg, so the volume is 63/1050 = 0.060 m³ and the buoyant force is 1000 × 0.060 × 10 = 600 N. Apparent weight = 630 − 600 = 30 N. 600 N is the buoyant force itself, 1230 N adds the buoyant force to the weight instead of subtracting it, and 63 N just reuses the mass.`,
      },
      {
        question: r`A balance reads 62 kg for a subject standing in air. With the subject hanging fully submerged in fresh water, lungs emptied, the same balance reads 2.0 kg. What is the volume of the subject's body? (Water: 1.0 kg/L)`,
        options: [r`62 L`, r`60 L`, r`64 L`, r`2.0 L`],
        correctAnswer: 1,
        explanation: r`The drop in the reading, 62 − 2.0 = 60 kg, is the mass of water displaced, and 60 kg of water at 1.0 kg/L is 60 L. 62 L treats the whole mass as displaced water, 64 L adds the readings, and 2.0 L uses only the underwater reading.`,
      },
      {
        question: r`During underwater weighing, a subject fails to breathe out fully and keeps an extra 1.0 L of air in the lungs. The air's own weight is negligible. How does this change the result? (Water: 1000 kg/m³, g = 10 m/s², 1 L = 0.001 m³)`,
        options: [
          r`Apparent weight reads 10 N higher, so body fat is overestimated`,
          r`Apparent weight reads 10 N lower, so body fat is underestimated`,
          r`Apparent weight reads 10 N lower, so body fat is overestimated`,
          r`Apparent weight reads 10 N higher, so body fat is underestimated`,
        ],
        correctAnswer: 2,
        explanation: r`The extra litre displaces more water, adding a buoyant force of 1000 × 0.001 × 10 = 10 N, so the apparent weight reads 10 N lower. The body then seems larger in volume and lower in density, which looks like more fat. The "higher" answers have the buoyant force acting the wrong way, and "underestimated" reverses the link between low density and fat.`,
      },
      {
        question: r`A 2.2 N sample of lean tissue with a density of 1.1 g/cm³ is hung from a spring scale and lowered until it is fully submerged in fresh water. What does the scale read? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`0.20 N`, r`2.0 N`, r`2.4 N`, r`4.2 N`],
        correctAnswer: 0,
        explanation: r`The mass is 0.22 kg, so the volume is 0.22/1100 = 2.0 × 10⁻⁴ m³ and the buoyant force is 1000 × 2.0 × 10⁻⁴ × 10 = 2.0 N. The scale reads 2.2 − 2.0 = 0.20 N. 2.0 N is the buoyant force rather than the reading, 4.2 N adds the buoyant force to the weight, and 2.4 N multiplies the weight by 1.1.`,
      },
    ],
  },
  [r`What fraction of a floating object sits below the surface?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pine block of density 400 kg/m³ floats at rest in a tank of oil of density 800 kg/m³. What percentage of the block's volume is below the oil surface?`,
        options: [r`40%`, r`50%`, r`80%`, r`32%`],
        correctAnswer: 1,
        explanation: r`The submerged fraction is ρ_obj/ρ_fluid = 400/800 = 0.50, so 50% is below the surface. 40% divides by water's density instead of the oil's, 80% reads the oil's density as a percentage, and 32% multiplies the two densities.`,
      },
      {
        question: r`A plastic float rests in a liquid of density 1200 kg/m³ with 75% of its volume below the surface. What is the density of the plastic?`,
        options: [r`1600 kg/m³`, r`300 kg/m³`, r`1200 kg/m³`, r`900 kg/m³`],
        correctAnswer: 3,
        explanation: r`Submerged fraction = ρ_obj/ρ_fluid, so ρ_obj = 0.75 × 1200 = 900 kg/m³. 1600 kg/m³ divides by 0.75 instead of multiplying (and a denser object would sink), 300 kg/m³ uses the 25% above the surface, and 1200 kg/m³ would leave the float fully submerged.`,
      },
      {
        question: r`A cork with a volume of 80 cm³ and a density of 250 kg/m³ floats at rest in fresh water (1000 kg/m³). What volume of the cork is ABOVE the water surface?`,
        options: [r`60 cm³`, r`20 cm³`, r`80 cm³`, r`320 cm³`],
        correctAnswer: 0,
        explanation: r`The submerged fraction is 250/1000 = 0.25, so 0.25 × 80 = 20 cm³ is below the surface and 80 − 20 = 60 cm³ is above. 20 cm³ is the volume below, 80 cm³ is the whole cork, and 320 cm³ divides by 0.25 instead of multiplying.`,
      },
      {
        question: r`The same block floats with 30% of its volume submerged in liquid X and with 60% of its volume submerged in liquid Y. The density of liquid X is what multiple of the density of liquid Y?`,
        options: [r`0.50`, r`0.30`, r`2.0`, r`0.18`],
        correctAnswer: 2,
        explanation: r`Submerged fraction = ρ_block/ρ_liquid, so the liquid's density is inversely proportional to the fraction: ρ_X/ρ_Y = 0.60/0.30 = 2.0. The block rides higher in the denser liquid. 0.50 inverts the ratio, 0.30 is just one of the fractions, and 0.18 multiplies them.`,
      },
      {
        question: r`A polyethylene bead of density 0.96 g/cm³ floats at rest in a sugar solution of density 1200 kg/m³. What percentage of the bead's volume is below the surface?`,
        options: [r`80%`, r`20%`, r`96%`, r`0.08%`],
        correctAnswer: 0,
        explanation: r`Convert first: 0.96 g/cm³ = 960 kg/m³. The submerged fraction is 960/1200 = 0.80, or 80%. 20% is the part above the surface, 96% compares the bead with water instead of the solution, and 0.08% divides 0.96 by 1200 without converting the units.`,
      },
      {
        question: r`A solid iron nut of density 7.8 g/cm³ floats at rest in a dense liquid with 60% of its volume below the surface. What is the density of the liquid?`,
        options: [r`4.7 g/cm³`, r`19.5 g/cm³`, r`7.8 g/cm³`, r`13 g/cm³`],
        correctAnswer: 3,
        explanation: r`Submerged fraction = ρ_obj/ρ_fluid, so ρ_fluid = 7.8/0.60 = 13 g/cm³. 4.7 g/cm³ multiplies by 0.60 (a liquid less dense than iron could not float it), 19.5 g/cm³ divides by the 40% above the surface, and 7.8 g/cm³ would leave the nut fully submerged.`,
      },
    ],
  },
  [r`Surface tension arises from {{c1::cohesive forces between liquid molecules}} at an interface.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Compare a water molecule deep inside a glass of water with a water molecule at the water's surface, which has air above it. What is the net cohesive force on each from neighboring water molecules?`,
        options: [
          r`Zero at the surface; directed inward for the deep one`,
          r`Directed outward at the surface; zero for the deep one`,
          r`Zero for the deep one; directed inward at the surface`,
          r`Directed inward for both the deep and the surface one`,
        ],
        correctAnswer: 2,
        explanation: r`A molecule deep in the liquid is pulled equally in every direction, so the attractions cancel. A surface molecule has neighbors beside and below it but almost none above, leaving a net inward pull, which is the origin of surface tension. An outward net force would make the liquid spread, not contract, and the deep molecule has no net force at all.`,
      },
      {
        question: r`A premature infant's lungs make too little pulmonary surfactant. Compared with a healthy lung, what is true of the fluid lining this infant's alveoli and of the effort needed to inflate them?`,
        options: [
          r`Its surface tension is higher, so the alveoli are harder to inflate`,
          r`Its surface tension is lower, so the alveoli are harder to inflate`,
          r`Its surface tension is higher, so the alveoli are easier to inflate`,
          r`Its surface tension is lower, so the alveoli are easier to inflate`,
        ],
        correctAnswer: 0,
        explanation: r`Surfactant sits between the water molecules at the surface and weakens their cohesive pull on one another, lowering surface tension. Without it, the tension is higher, the alveoli tend to collapse, and more pressure is needed to open them. The "lower" answers reverse what surfactant does, and "easier to inflate" reverses the effect of a higher tension.`,
      },
    ],
  },
  [r`Laplace's law for an alveolus gives $P = 2\gamma/r$. What does it predict?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The fluid lining an alveolus of radius 1.0 × 10⁻⁴ m has a surface tension of 0.050 N/m. Using P = 2γ/r, what pressure is needed to keep the alveolus open?`,
        options: [r`500 Pa`, r`250 Pa`, r`2000 Pa`, r`1000 Pa`],
        correctAnswer: 3,
        explanation: r`P = 2γ/r = 2 × 0.050/(1.0 × 10⁻⁴) = 1000 Pa. 500 Pa leaves out the factor 2, 250 Pa leaves out the 2 and also uses the diameter in place of the radius, and 2000 Pa doubles twice.`,
      },
      {
        question: r`An alveolus of radius 50 μm is held open by a pressure of 600 Pa. Using P = 2γ/r, what is the surface tension of the fluid lining it? (1 μm = 10⁻⁶ m)`,
        options: [r`0.030 N/m`, r`0.015 N/m`, r`0.060 N/m`, r`15 N/m`],
        correctAnswer: 1,
        explanation: r`Rearranging, γ = Pr/2 = 600 × 5.0 × 10⁻⁵/2 = 0.015 N/m. 0.030 N/m forgets to divide by 2, 0.060 N/m multiplies by 2 instead, and 15 N/m converts 50 μm as if it were 50 mm.`,
      },
      {
        question: r`A spherical air sac is lined with fluid of surface tension 0.030 N/m, and a pressure of 400 Pa just keeps it open. Using P = 2γ/r, what is its radius? (1 μm = 10⁻⁶ m)`,
        options: [r`150 μm`, r`75 μm`, r`300 μm`, r`15 μm`],
        correctAnswer: 0,
        explanation: r`Rearranging, r = 2γ/P = 2 × 0.030/400 = 1.5 × 10⁻⁴ m = 150 μm. 75 μm leaves out the factor 2, 300 μm doubles twice, and 15 μm drops a power of ten when converting metres to micrometres.`,
      },
      {
        question: r`As an alveolus deflates, its radius falls to half its starting value, and its surfactant becomes more concentrated and lowers the surface tension to one quarter of its starting value. By P = 2γ/r, the pressure needed to keep it open becomes:`,
        options: [r`twice as large`, r`one eighth as large`, r`half as large`, r`one quarter as large`],
        correctAnswer: 2,
        explanation: r`P is proportional to γ/r, so the new pressure is (1/4)/(1/2) = 1/2 of the old one. "Twice as large" considers only the smaller radius, "one quarter as large" considers only the lower surface tension, and "one eighth as large" multiplies the two factors instead of dividing.`,
      },
      {
        question: r`With surfactant present, a small alveolus has a radius of 50 μm and a surface tension of 0.010 N/m, while a large alveolus has a radius of 100 μm and a surface tension of 0.030 N/m. Using P = 2γ/r, what are the two collapsing pressures? (1 μm = 10⁻⁶ m)`,
        options: [
          r`600 Pa in the small one and 400 Pa in the large one`,
          r`200 Pa in the small one and 300 Pa in the large one`,
          r`800 Pa in the small one and 1200 Pa in the large one`,
          r`400 Pa in the small one and 600 Pa in the large one`,
        ],
        correctAnswer: 3,
        explanation: r`Small: 2 × 0.010/(5.0 × 10⁻⁵) = 400 Pa. Large: 2 × 0.030/(1.0 × 10⁻⁴) = 600 Pa. Because surfactant lowers the tension more in the small alveolus, the small one no longer has the higher pressure. The 600 and 400 answer swaps the two, the 200 and 300 answer leaves out the factor 2, and the 800 and 1200 answer doubles twice.`,
      },
      {
        question: r`An air bubble of radius 1.0 μm sits in water, whose surface tension is 0.070 N/m. Using ΔP = 2γ/r, how much higher is the pressure inside the bubble than in the water around it? (1 μm = 10⁻⁶ m)`,
        options: [r`7.0 × 10⁴ Pa`, r`1.4 × 10⁵ Pa`, r`1.4 × 10² Pa`, r`1.4 × 10⁻⁷ Pa`],
        correctAnswer: 1,
        explanation: r`ΔP = 2 × 0.070/(1.0 × 10⁻⁶) = 1.4 × 10⁵ Pa, more than a whole atmosphere, because the radius is so small. 7.0 × 10⁴ Pa leaves out the factor 2, 1.4 × 10² Pa treats 1.0 μm as 1.0 mm, and 1.4 × 10⁻⁷ Pa multiplies by the radius instead of dividing.`,
      },
    ],
  },
  [r`The buoyant force equals the weight of {{c1::the fluid displaced}}, not the weight of the object.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A steel bolt of volume 50 cm³ and density 7800 kg/m³ lies fully submerged at the bottom of a tank of brine of density 1200 kg/m³. What is the buoyant force on the bolt? (g = 10 m/s², 1 cm³ = 10⁻⁶ m³)`,
        options: [r`0.50 N`, r`3.9 N`, r`0.60 N`, r`6.0 N`],
        correctAnswer: 2,
        explanation: r`The bolt displaces 50 cm³ = 5.0 × 10⁻⁵ m³ of brine, so F_B = ρ_fluid V g = 1200 × 5.0 × 10⁻⁵ × 10 = 0.60 N. 3.9 N uses the steel's density and is the bolt's weight, 0.50 N uses fresh water instead of the brine, and 6.0 N slips a power of ten in the volume.`,
      },
      {
        question: r`A swimmer of weight 600 N has a total body volume of 0.062 m³. At one moment in a dive into fresh water, only 0.040 m³ of the body is under the surface. What is the buoyant force at that moment? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [r`400 N`, r`600 N`, r`620 N`, r`200 N`],
        correctAnswer: 0,
        explanation: r`Only the submerged volume displaces water: F_B = 1000 × 0.040 × 10 = 400 N. 600 N sets the buoyant force equal to the swimmer's weight, which is true only when floating at rest; 620 N uses the whole body volume; 200 N is the weight minus the buoyant force.`,
      },
      {
        question: r`A probe of volume 0.0020 m³ is fully submerged in a lake of liquid methane (density 450 kg/m³) on Titan, where g = 1.4 m/s². What is the buoyant force on the probe?`,
        options: [r`9.0 N`, r`2.8 N`, r`20 N`, r`1.26 N`],
        correctAnswer: 3,
        explanation: r`F_B = ρ_fluid V g = 450 × 0.0020 × 1.4 = 0.90 × 1.4 = 1.26 N. 9.0 N uses Earth's g = 10 m/s², 2.8 N uses water's density with Titan's g, and 20 N uses both water's density and Earth's g.`,
      },
      {
        question: r`Ball X has volume 2V and density 3000 kg/m³. Ball Y has volume 3V and density 8000 kg/m³. Both rest fully submerged on the floor of the same water tank. What is the ratio of the buoyant force on X to the buoyant force on Y?`,
        options: [r`3/2`, r`2/3`, r`1/4`, r`3/8`],
        correctAnswer: 1,
        explanation: r`Both displace the same fluid, so the buoyant forces are in the ratio of the displaced volumes: 2V/3V = 2/3. 1/4 is the ratio of the balls' weights, 3/8 is the ratio of their densities, and 3/2 inverts the volume ratio.`,
      },
      {
        question: r`A beaker is filled to the brim with water. A 400 g stone is lowered in on a thread until it is fully submerged, and 150 g of water spills over the brim. What is the buoyant force on the stone? (g = 10 m/s²)`,
        options: [r`1.5 N`, r`4.0 N`, r`2.5 N`, r`1500 N`],
        correctAnswer: 0,
        explanation: r`The buoyant force equals the weight of the water displaced, which is the water that spilled: 0.150 kg × 10 = 1.5 N. 4.0 N is the stone's own weight, 2.5 N is the stone's weight minus the buoyant force, and 1500 N multiplies 150 by g without converting grams to kilograms.`,
      },
      {
        question: r`A diver carries a flexible bag of air. Near the surface the bag's volume is 6.0 L and the buoyant force on it is 60 N. At depth, the water pressure squeezes the bag to 2.0 L. What is the buoyant force on the bag now? (Water: 1000 kg/m³, g = 10 m/s², 1 L = 0.001 m³)`,
        options: [r`60 N`, r`180 N`, r`20 N`, r`40 N`],
        correctAnswer: 2,
        explanation: r`The bag now displaces 2.0 L = 0.0020 m³ of water, so F_B = 1000 × 0.0020 × 10 = 20 N. 60 N assumes the displaced volume has not changed, 180 N scales the force up with pressure instead of down with volume, and 40 N is the size of the drop rather than the new force.`,
      },
    ],
  },
  [r`Why does a person float higher in salt water than in fresh water?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A swimmer with a whole-body density of 990 kg/m³ floats motionless first in a freshwater lake (1000 kg/m³) and then in a salt lake (1100 kg/m³). What fraction of the body is submerged in each?`,
        options: [
          r`90% in the fresh water and 99% in the salt water`,
          r`99% in the fresh water and 90% in the salt water`,
          r`1% in the fresh water and 10% in the salt water`,
          r`99% in the fresh water and 99% in the salt water`,
        ],
        correctAnswer: 1,
        explanation: r`The submerged fraction is ρ_body/ρ_fluid: 990/1000 = 99% in fresh water and 990/1100 = 90% in the salt lake. The denser water supports the same weight with less displaced volume. Swapping the two has the swimmer riding lower in denser water, the 1% and 10% answer gives the parts above the surface, and equal fractions ignore the change in fluid density.`,
      },
      {
        question: r`A swimmer floating at rest in a freshwater pool wants to ride as high in the water as she does in the sea. Which change would raise her in the pool, and why? (Treat the air she breathes as weightless.)`,
        options: [
          r`Breathing out fully, which lowers her body's average density`,
          r`Breathing in deeply, which raises the buoyant force on her`,
          r`Breathing out fully, which raises the buoyant force on her`,
          r`Breathing in deeply, which lowers her body's average density`,
        ],
        correctAnswer: 3,
        explanation: r`The submerged fraction is ρ_body/ρ_fluid, so it falls either when the fluid gets denser (the sea) or when the body gets less dense. A deep breath adds volume with almost no mass, lowering her average density. Breathing out does the reverse, and the buoyant force on a floater always equals her weight, so it does not rise.`,
      },
    ],
  },
  [r`Does the buoyant force on a fully submerged object increase with depth?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A rigid cube 0.10 m tall is held level in fresh water and lowered until its top face goes from 1 m deep to 10 m deep. What happens to the water pressures on its top and bottom faces? (Water: 1000 kg/m³, g = 10 m/s²)`,
        options: [
          r`Both pressures rise, and their difference stays 1000 Pa`,
          r`Both pressures rise, and their difference rises tenfold`,
          r`Only the bottom pressure rises, so the difference grows`,
          r`Neither pressure changes, so the difference stays 0 Pa`,
        ],
        correctAnswer: 0,
        explanation: r`Each face gains the same ρg × 9 m = 90 000 Pa, so the difference stays ρg × 0.10 m = 1000 Pa and the buoyant force, which comes from that difference, is unchanged. The difference depends on the cube's height, not its depth, so it does not rise tenfold; both faces are deeper, so both pressures rise.`,
      },
      {
        question: r`A rigid glass sphere and an air-filled rubber balloon are both pulled steadily deeper in a lake. Treat the water as incompressible. How does the buoyant force on each change as it goes deeper?`,
        options: [
          r`It stays constant on the sphere and on the balloon`,
          r`It stays constant on the sphere but grows on the balloon`,
          r`It grows on the sphere and also grows on the balloon`,
          r`It stays constant on the sphere but falls on the balloon`,
        ],
        correctAnswer: 3,
        explanation: r`Buoyant force is ρ_fluid V g. The rigid sphere keeps its volume, so its buoyant force is constant at every depth. The rising pressure squeezes the balloon, which displaces less water, so its buoyant force falls. Depth by itself never raises buoyancy, which rules out the "grows" answers.`,
      },
    ],
  },
  [r`Why does a person with a higher body fat fraction float more easily?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Equal-sized cubes of pure fat (0.90 g/cm³) and of pure muscle (1.10 g/cm³) are released in a tank of fresh water (1.00 g/cm³). What happens to each cube?`,
        options: [
          r`The fat sinks and the muscle floats`,
          r`The fat floats and the muscle sinks`,
          r`Both of the cubes float at the top`,
          r`Both of the cubes sink to the floor`,
        ],
        correctAnswer: 1,
        explanation: r`An object floats when it is less dense than the fluid. Fat at 0.90 g/cm³ is less dense than water and floats; muscle at 1.10 g/cm³ is denser and sinks. This is why a body with more fat has a lower average density and floats more easily. The other answers put one or both tissues on the wrong side of 1.00 g/cm³.`,
      },
      {
        question: r`Two tissue models are made by blending fat (0.90 g/cm³) and lean tissue (1.10 g/cm³). Model 1 is 25% fat and 75% lean by volume; model 2 is 75% fat and 25% lean by volume. What happens when each is released in fresh water (1.00 g/cm³)?`,
        options: [
          r`Model 1 sinks at 1.05 g/cm³; model 2 floats at 0.95 g/cm³`,
          r`Model 1 floats at 0.95 g/cm³; model 2 sinks at 1.05 g/cm³`,
          r`Both models sink, at 1.05 g/cm³ and at 1.10 g/cm³`,
          r`Both models float, at 0.90 g/cm³ and at 0.95 g/cm³`,
        ],
        correctAnswer: 0,
        explanation: r`Average density by volume: model 1 is 0.25 × 0.90 + 0.75 × 1.10 = 1.05 g/cm³, denser than water, so it sinks. Model 2 is 0.75 × 0.90 + 0.25 × 1.10 = 0.95 g/cm³, so it floats. More fat pulls the average below water's density. The swapped answer gives the high-fat model the higher density, and the "both" answers ignore the blending.`,
      },
    ],
  },
}
