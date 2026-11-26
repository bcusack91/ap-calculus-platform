import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`In Torricelli's theorem and the jet's range, what do $h$ and $H$ stand for, and what is their SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A wide, open tank stands on level ground and holds water 2.0 m deep. For a small hole in its side, the depth that goes into the exit speed is h = 0.5 m. What is H for this hole?`,
        options: [r`H = 0.5 m`, r`H = 2.0 m`, r`H = 1.5 m`, r`H = 2.5 m`],
        correctAnswer: 2,
        explanation: r`h is measured from the surface down, so the hole is 0.5 m below the surface and 2.0 − 0.5 = 1.5 m above the ground, which is H. The value 0.5 m repeats h, 2.0 m is the whole depth of the water, and 2.5 m adds the two distances instead of subtracting.`,
      },
      {
        question: r`An open tank sits on a stand 1.0 m tall. The water in the tank is 0.6 m deep, and a small hole in the tank's side is 0.2 m above the tank's base. The jet lands on the floor beside the stand. Which values are h and H?`,
        options: [r`h = 0.4 m and H = 1.2 m`, r`h = 0.4 m and H = 0.2 m`, r`h = 0.2 m and H = 1.2 m`, r`h = 0.6 m and H = 1.0 m`],
        correctAnswer: 0,
        explanation: r`h is the depth of the hole below the surface, 0.6 − 0.2 = 0.4 m, and H is the hole's height above the floor where the jet lands, 1.0 + 0.2 = 1.2 m. H = 0.2 m forgets the stand, h = 0.2 m measures up from the tank's base, and the last pair uses the full water depth and the stand alone.`,
      },
    ],
  },
  [r`Which two points does Torricelli's theorem compare?`]: {
    kind: 'concept',
    more: [
      {
        question: r`To apply Torricelli's theorem to a wide, open tank, a student puts point 1 on the liquid surface and point 2 in the jet just outside the small hole. Which description of point 2 is correct?`,
        options: [r`At atmospheric pressure, a depth h below point 1`, r`At atmospheric pressure, level with point 1`, r`At a pressure of ρgh, a depth h below point 1`, r`At zero pressure, a depth h below point 1`],
        correctAnswer: 0,
        explanation: r`The jet just outside the hole is in the open air, so it is at atmospheric pressure, and the hole is a depth h below the surface. A point level with the surface would give no height difference. A pressure of ρgh belongs to still liquid inside the tank, and the open air is not at zero pressure.`,
      },
      {
        question: r`A student compares the liquid surface of a wide, open tank with a point deep inside the tank, level with the small hole but far from it, where the liquid is almost at rest. What does Bernoulli's equation give her for this pair of points?`,
        options: [r`An exit speed that is twice the true value`, r`A range for the jet, but no exit speed`, r`An exit speed that is half the true value`, r`A pressure at that depth, but no exit speed`],
        correctAnswer: 3,
        explanation: r`With both points almost at rest, the speed terms vanish and the equation only gives the hydrostatic pressure at that depth. The exit speed appears only when point 2 is in the jet just outside the hole, where the pressure is atmospheric and the liquid is moving. Neither point is in the jet, so no range or speed comes out.`,
      },
    ],
  },
  [r`Which two simplifications turn Bernoulli's equation into Torricelli's theorem?`]: {
    kind: 'concept',
    more: [
      {
        question: r`For a small hole a depth h below the surface of a wide, open tank, Bernoulli's equation reads P₁ + ½ρv₁² + ρgh = P₂ + ½ρv₂², with point 1 on the surface and point 2 in the jet. Which line of working leads to Torricelli's theorem?`,
        options: [r`Cancel P₁ with P₂ and drop ½ρv₂², so ρgh = ½ρv₁²`, r`Set P₂ to zero and drop ½ρv₁², so P₁ + ρgh = ½ρv₂²`, r`Cancel P₁ with P₂ and drop ½ρv₁², so ρgh = ½ρv₂²`, r`Cancel ½ρv₁² with ½ρv₂² and keep P, so P₂ − P₁ = ρgh`],
        correctAnswer: 2,
        explanation: r`Both points are open to the air, so the pressures are equal and cancel, and the wide surface barely moves, so its speed term is dropped. That leaves ρgh = ½ρv₂². Dropping the jet's speed term removes the quantity being found, the jet is at atmospheric pressure rather than zero, and the two speeds are far from equal.`,
      },
      {
        question: r`A wide tank with a small hole in its side is sealed at the top, and the air above the water is pumped to twice atmospheric pressure. The jet leaves into the open air. Which simplification behind v = √(2gh) fails, and how does the jet compare?`,
        options: [r`The pressures no longer cancel, and the jet is slower than √(2gh)`, r`The surface is no longer at rest, and the jet is faster than √(2gh)`, r`The surface is no longer at rest, and the jet is slower than √(2gh)`, r`The pressures no longer cancel, and the jet is faster than √(2gh)`],
        correctAnswer: 3,
        explanation: r`The surface is now at a higher pressure than the jet, so P₁ and P₂ do not cancel, and the extra pressure adds to the jet's speed. The tank is still wide and the hole small, so the surface is still almost at rest. A slower jet would need a pressure above the water lower than atmospheric.`,
      },
    ],
  },
  [r`State Torricelli's theorem.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A small hole opens in the wall of a wide, open water tower, 7.2 m below the water surface. With g = 10 m/s² and ideal flow, what is the exit speed of the water?`,
        options: [r`144 m/s`, r`8.5 m/s`, r`72 m/s`, r`12 m/s`],
        correctAnswer: 3,
        explanation: r`v = √(2gh) = √(2 × 10 × 7.2) = √144 = 12 m/s. The value 144 m/s leaves out the square root, 8.5 m/s is √(gh) with the 2 missing, and 72 m/s is gh with neither the 2 nor the root.`,
      },
      {
        question: r`In a lab, saline leaves a small hole in the side of a wide, open tank with an exit speed of 3.0 m/s. With g = 10 m/s² and ideal flow, what is the depth of the hole below the saline surface?`,
        options: [r`0.45 m`, r`0.90 m`, r`0.15 m`, r`4.5 m`],
        correctAnswer: 0,
        explanation: r`Rearranging v = √(2gh) gives h = v²/(2g) = 9.0 ÷ 20 = 0.45 m. The value 0.90 m divides by g instead of 2g, 0.15 m forgets to square the speed, and 4.5 m halves v² without dividing by g.`,
      },
      {
        question: r`A wide, open fish tank has a small hole in its glass, 20 cm below the water surface. With g = 10 m/s² and ideal flow, what is the exit speed of the water?`,
        options: [r`20 m/s`, r`4.0 m/s`, r`1.4 m/s`, r`2.0 m/s`],
        correctAnswer: 3,
        explanation: r`The depth is 0.20 m, so v = √(2 × 10 × 0.20) = √4.0 = 2.0 m/s. Leaving the depth as 20 gives √400 = 20 m/s. The value 4.0 m/s is 2gh without the square root, and 1.4 m/s is √(gh) with the 2 missing.`,
      },
      {
        question: r`On another planet, a wide, open tank of liquid has a small hole 2.0 m below the liquid surface, and the ideal jet has an exit speed of 4.0 m/s. What is g on this planet?`,
        options: [r`8.0 m/s²`, r`4.0 m/s²`, r`1.0 m/s²`, r`2.0 m/s²`],
        correctAnswer: 1,
        explanation: r`From v² = 2gh, g = v²/(2h) = 16 ÷ 4.0 = 4.0 m/s². The value 8.0 m/s² divides v² by h and drops the 2, 1.0 m/s² forgets to square the speed, and 2.0 m/s² is just v divided by h.`,
      },
      {
        question: r`On a giant planet where g = 25 m/s², a research station keeps liquid in a wide, open tank. A small hole is 0.50 m below the liquid surface. With ideal flow, what is the exit speed of the liquid?`,
        options: [r`5.0 m/s`, r`25 m/s`, r`3.5 m/s`, r`3.2 m/s`],
        correctAnswer: 0,
        explanation: r`v = √(2gh) = √(2 × 25 × 0.50) = √25 = 5.0 m/s. The value 25 m/s leaves out the square root, 3.5 m/s is √(gh) with the 2 missing, and 3.2 m/s uses Earth's g = 10 m/s² instead of the stated 25 m/s².`,
      },
      {
        question: r`A wide, open tank holds water 4.0 m deep. A small hole in its side is 0.8 m above the bottom of the tank. With g = 10 m/s² and ideal flow, what is the exit speed of the water?`,
        options: [r`4.0 m/s`, r`8.0 m/s`, r`8.9 m/s`, r`64 m/s`],
        correctAnswer: 1,
        explanation: r`h is the depth of the hole below the surface: 4.0 − 0.8 = 3.2 m, so v = √(2 × 10 × 3.2) = √64 = 8.0 m/s. Using 0.8 m, measured up from the bottom, gives 4.0 m/s. Using the full 4.0 m gives 8.9 m/s, and 64 m/s leaves out the square root.`,
      },
    ],
  },
  [r`Why does a jet leave a tank at the speed of a stone dropped through the same height?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A jet leaves a small hole 1.25 m below the surface of a wide, open tank. A 2 kg stone and a 4 kg stone are each dropped from rest through 1.25 m with no air resistance. Which stone lands at the speed of the jet?`,
        options: [r`Only the 2 kg stone, since lighter objects speed up more`, r`Both stones, since mass cancels just as density does`, r`Only the 4 kg stone, since heavier objects speed up more`, r`Neither stone, since pressure gives the jet extra speed`],
        correctAnswer: 1,
        explanation: r`The stone obeys mgh = ½mv² and a parcel of liquid obeys ρgh = ½ρv², so mass and density cancel and all three reach √(2gh) for the same drop. Neither a lighter nor a heavier stone gains more speed in free fall. The pressures at the surface and at the jet are equal, so pressure adds nothing.`,
      },
      {
        question: r`On a distant moon, a stone dropped from rest through 2.0 m lands at 4.0 m/s; there is no air. A wide, open tank on the same moon has a small hole 2.0 m below the liquid surface. With ideal flow, how fast does the jet leave the hole?`,
        options: [r`4.0 m/s, the speed of the stone`, r`8.0 m/s, twice the speed of the stone`, r`2.0 m/s, half the speed of the stone`, r`6.3 m/s, found using g = 10 m/s²`],
        correctAnswer: 0,
        explanation: r`The liquid trades the potential energy of a 2.0 m drop for kinetic energy exactly as the stone does, so the jet leaves at the stone's speed, 4.0 m/s. Nothing doubles or halves the speed, because the pressures cancel. The value 6.3 m/s uses Earth's g, which does not apply on this moon.`,
      },
    ],
  },
  [r`How does the density of the liquid affect the speed of the jet from a hole in a tank?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Water leaves a small hole in the side of a wide, open tank. With ideal flow, which one change makes the jet leave the hole faster?`,
        options: [r`Adding water so the level above the hole is higher`, r`Swapping the water for denser brine at the same level`, r`Swapping the water for lighter oil at the same level`, r`Widening the small hole slightly at the same level`],
        correctAnswer: 0,
        explanation: r`The exit speed is √(2gh), so only g and the depth of the hole below the surface matter, and a higher level means a larger depth. Density cancels, so neither brine nor oil changes the speed. The area of a small hole changes the flow rate but not the exit speed.`,
      },
      {
        question: r`At a hole 0.8 m below the surface, mercury pushes with 13.6 times the pressure that water does, yet ideal jets of mercury and water leave wide, open tanks at the same speed. Why?`,
        options: [r`The driving pressure and the area of the hole both scale with density`, r`The driving pressure is set by the atmosphere alone, not by the liquid`, r`The driving pressure and the mass per volume both scale with density`, r`The driving pressure is the same for every liquid at any given depth`],
        correctAnswer: 2,
        explanation: r`In ρgh = ½ρv², the push from the liquid's depth is proportional to density, but so is the mass of each parcel that must be sped up, so density cancels. The hole's area does not depend on the liquid. Atmospheric pressure cancels between the surface and the jet, and the pressure from depth is not the same for every liquid.`,
      },
    ],
  },
  [r`How does the speed of the jet depend on the depth of the hole?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A farmer's rain barrel, wide and open at the top, has two small holes in its side. With ideal flow, the jet from the upper hole has an exit speed of 2.5 m/s. The lower hole is 4 times as far below the surface. What is the exit speed of its jet?`,
        options: [r`10 m/s`, r`3.5 m/s`, r`40 m/s`, r`5.0 m/s`],
        correctAnswer: 3,
        explanation: r`The exit speed goes as the square root of the depth, so 4 times the depth gives √4 = 2 times the speed: 2 × 2.5 = 5.0 m/s. The value 10 m/s treats speed as proportional to depth, 3.5 m/s is the result for only twice the depth, and 40 m/s squares the factor of 4.`,
      },
      {
        question: r`A wide, open tank is filled until the depth of water above a small hole rises from 0.5 m to 4.5 m. With ideal flow, by what factor does the exit speed at the hole change?`,
        options: [r`It becomes 9 times as large`, r`It becomes 81 times as large`, r`It becomes 3 times as large`, r`It becomes 4.5 times as large`],
        correctAnswer: 2,
        explanation: r`The depth becomes 4.5 ÷ 0.5 = 9 times as large, and the speed goes as the square root of the depth, so the speed becomes √9 = 3 times as large. A factor of 9 treats speed as proportional to depth, 81 squares instead of taking the root, and 4.5 is just the final depth in meters.`,
      },
      {
        question: r`A winery stores wine in a wide, open tank. With ideal flow, the jet from a small sampling hole 0.30 m below the surface has an exit speed of 2.0 m/s. At what depth below the surface would the exit speed be 10 m/s?`,
        options: [r`1.5 m`, r`7.5 m`, r`0.67 m`, r`3.75 m`],
        correctAnswer: 1,
        explanation: r`The speed must be 5 times as large, and since speed goes as the square root of depth, the depth must be 5² = 25 times as large: 25 × 0.30 = 7.5 m. The value 1.5 m scales the depth by only 5, 0.67 m scales it by √5, and 3.75 m uses half of the factor of 25.`,
      },
      {
        question: r`Water leaves a small hole in a wide, open rain tank at 5.0 m/s. After a storm, the depth of water above the hole has doubled. With ideal flow and √2 ≈ 1.4, how fast does the water leave now?`,
        options: [r`10 m/s`, r`20 m/s`, r`7.0 m/s`, r`2.5 m/s`],
        correctAnswer: 2,
        explanation: r`Twice the depth gives √2 ≈ 1.4 times the speed: 1.4 × 5.0 = 7.0 m/s. The value 10 m/s doubles the speed with the depth, 20 m/s squares the factor of 2, and 2.5 m/s halves the speed although the depth has gone up.`,
      },
      {
        question: r`Water leaves a small hole near the base of a wide, open water tower at 12 m/s. The tower drains until the depth of water above the hole is one-sixteenth of its first value. With ideal flow, how fast does the water leave now?`,
        options: [r`3.0 m/s`, r`0.75 m/s`, r`6.0 m/s`, r`48 m/s`],
        correctAnswer: 0,
        explanation: r`The speed goes as the square root of the depth, and √(1/16) = 1/4, so the speed is 12 ÷ 4 = 3.0 m/s. The value 0.75 m/s divides by 16 as if speed were proportional to depth, 6.0 m/s only halves the speed, and 48 m/s multiplies by 4 instead of dividing.`,
      },
      {
        question: r`A wide, open tank has two small holes in its side. With ideal flow, liquid leaves the upper hole at 1.5 m/s and the lower hole at 4.5 m/s. How do the depths of the two holes below the surface compare?`,
        options: [r`The lower hole is 3 times as deep`, r`The lower hole is 9 times as deep`, r`The lower hole is 1.7 times as deep`, r`The lower hole is 27 times as deep`],
        correctAnswer: 1,
        explanation: r`The lower jet is 4.5 ÷ 1.5 = 3 times as fast, and depth goes as the square of the speed, so the lower hole is 3² = 9 times as deep. A factor of 3 treats speed as proportional to depth, 1.7 takes the square root of 3 instead of squaring, and 27 cubes it.`,
      },
    ],
  },
  [r`What happens to the jet as an open tank drains?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An open tank on a table drains through a small hole in its side, and the jet leaves horizontally. As the tank drains, how does the spot where the jet lands on the floor move, and why?`,
        options: [r`Closer to the tank: the fall time falls and the exit speed is unchanged`, r`Farther from the tank: the exit speed rises and the fall time is unchanged`, r`Closer to the tank: the exit speed falls and the fall time is unchanged`, r`It stays where it is: the exit speed and the fall time are both unchanged`],
        correctAnswer: 2,
        explanation: r`As the depth above the hole shrinks, the exit speed √(2gh) falls. The hole stays at the same height above the floor, so the fall time does not change, and a slower jet with the same fall time lands closer. The exit speed cannot rise or stay fixed while the level drops.`,
      },
      {
        question: r`A technician needs a steady flow rate from a small hole in the side of an open tank of water. Which approach gives it?`,
        options: [r`Use a denser liquid so that the pressure at the hole stays constant`, r`Refill the tank steadily so the depth above the hole stays constant`, r`Use a wider tank so that the exit speed at the hole stays constant`, r`Use a narrower hole so the flow rate from the hole stays constant`],
        correctAnswer: 1,
        explanation: r`The flow rate is the hole's area times √(2gh), so it holds steady only if the depth above the hole is held steady, which refilling does. Density does not enter the exit speed, and the level still falls with a denser liquid. A wider tank or a narrower hole slows the fall of the level but does not stop it.`,
      },
    ],
  },
  [r`How long does a jet that leaves horizontally take to reach the ground?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A jet leaves horizontally from a small hole in a wide, open tank. The hole is 0.45 m below the liquid surface and 0.80 m above the ground. With g = 10 m/s², what is the jet's fall time?`,
        options: [r`0.30 s`, r`0.16 s`, r`0.40 s`, r`0.28 s`],
        correctAnswer: 2,
        explanation: r`The fall is set by the height above the ground: t = √(2H/g) = √(2 × 0.80 ÷ 10) = √0.16 = 0.40 s. The value 0.30 s uses the depth, 0.45 m, for the fall. 0.16 s leaves out the square root, and 0.28 s is √(H/g) with the 2 missing.`,
      },
      {
        question: r`A horizontal jet from a small hole in a tank on a loading dock is in the air for 0.50 s before it reaches the ground. With g = 10 m/s², how high above the ground is the hole?`,
        options: [r`1.25 m`, r`2.5 m`, r`5.0 m`, r`0.25 m`],
        correctAnswer: 0,
        explanation: r`H = ½gt² = ½ × 10 × 0.25 = 1.25 m. The value 2.5 m leaves out the factor of one-half (or forgets to square the time), 5.0 m is g × t with no one-half and no square, and 0.25 m is just t².`,
      },
      {
        question: r`On a lab bench, liquid leaves horizontally from a small hole in a tank, 45 cm above the bench top. With g = 10 m/s², how long does the liquid take to reach the bench top?`,
        options: [r`3.0 s`, r`0.30 s`, r`0.090 s`, r`0.21 s`],
        correctAnswer: 1,
        explanation: r`The height is 0.45 m, so t = √(2 × 0.45 ÷ 10) = √0.090 = 0.30 s. Leaving the height as 45 gives √9 = 3.0 s. The value 0.090 s leaves out the square root, and 0.21 s is √(H/g) with the 2 missing.`,
      },
      {
        question: r`A horizontal jet from a small hole in a tank takes 0.35 s to reach the floor. The tank is lifted onto a shelf so that the hole is 4 times as high above the floor, with the same depth of water above the hole. How long does the jet take to reach the floor now?`,
        options: [r`1.4 s`, r`0.70 s`, r`0.35 s`, r`0.49 s`],
        correctAnswer: 1,
        explanation: r`The fall time goes as the square root of the height, t = √(2H/g), so 4 times the height gives 2 times the time: 0.70 s. The value 1.4 s scales the time by 4, 0.35 s assumes the depth sets the fall, and 0.49 s is the result for only twice the height.`,
      },
      {
        question: r`On the Moon, where g = 1.6 m/s², liquid leaves horizontally from a small hole in a tank, 0.80 m above the ground. How long does the liquid take to reach the ground?`,
        options: [r`1.0 s`, r`0.40 s`, r`0.71 s`, r`0.50 s`],
        correctAnswer: 0,
        explanation: r`t = √(2H/g) = √(2 × 0.80 ÷ 1.6) = √1.0 = 1.0 s. The value 0.40 s uses Earth's g = 10 m/s², 0.71 s is √(H/g) with the 2 missing, and 0.50 s is H/g with neither the 2 nor the square root.`,
      },
      {
        question: r`A water tower has a small hole in its side that is 5.0 m below the water surface and 3.2 m above the ground. The water leaves horizontally. With g = 10 m/s², how long is the water in the air?`,
        options: [r`0.80 s`, r`1.0 s`, r`0.64 s`, r`0.57 s`],
        correctAnswer: 0,
        explanation: r`The height above the ground sets the fall: t = √(2 × 3.2 ÷ 10) = √0.64 = 0.80 s. The value 1.0 s uses the depth, 5.0 m, which sets the exit speed and not the fall. 0.64 s leaves out the square root, and 0.57 s is √(H/g) with the 2 missing.`,
      },
    ],
  },
  [r`How far from the tank does a horizontal jet land?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An aquarium keeper finds a small hole in the glass of a wide, open aquarium, 0.20 m below the surface and 0.45 m above the floor. The jet leaves horizontally. With ideal flow, what is the range of the jet?`,
        options: [r`0.30 m`, r`0.60 m`, r`0.18 m`, r`0.65 m`],
        correctAnswer: 1,
        explanation: r`R = 2√(hH) = 2√(0.20 × 0.45) = 2√0.090 = 2 × 0.30 = 0.60 m. As a check, the exit speed is 2.0 m/s and the fall time 0.30 s for g = 10 m/s². The value 0.30 m leaves out the 2, 0.18 m is 2hH with no square root, and 0.65 m just adds h and H.`,
      },
      {
        question: r`A wide, open stock tank on a hillside has a small hole 1.8 m below the water surface and 0.80 m above the ground. The jet leaves horizontally. With g = 10 m/s² and ideal flow, what is the range of the jet?`,
        options: [r`2.4 m`, r`1.2 m`, r`3.6 m`, r`1.6 m`],
        correctAnswer: 0,
        explanation: r`The exit speed is √(2 × 10 × 1.8) = 6.0 m/s and the fall time is √(2 × 0.80 ÷ 10) = 0.40 s, so R = 6.0 × 0.40 = 2.4 m. The value 1.2 m is √(hH) without the 2, 3.6 m takes the fall time from the depth, and 1.6 m takes the exit speed from the height.`,
      },
      {
        question: r`A horizontal jet from a small hole in a wide, open tank has a range of 2.0 m. The hole is 1.25 m above the floor. With g = 10 m/s² and ideal flow, how far below the liquid surface is the hole?`,
        options: [r`1.6 m`, r`0.40 m`, r`0.80 m`, r`3.2 m`],
        correctAnswer: 2,
        explanation: r`The fall time is √(2 × 1.25 ÷ 10) = 0.50 s, so the exit speed is 2.0 ÷ 0.50 = 4.0 m/s and h = v²/(2g) = 16 ÷ 20 = 0.80 m. The value 1.6 m divides v² by g instead of 2g, 0.40 m halves once too often, and 3.2 m comes from R = √(hH) with the 2 left out.`,
      },
      {
        question: r`A tabletop tank, wide and open, has a small hole 5.0 cm below the water surface and 80 cm above the floor. The jet leaves horizontally. With ideal flow, what is the range of the jet?`,
        options: [r`40 m`, r`0.20 m`, r`0.85 m`, r`0.40 m`],
        correctAnswer: 3,
        explanation: r`In meters, h = 0.050 m and H = 0.80 m, so R = 2√(0.050 × 0.80) = 2√0.040 = 2 × 0.20 = 0.40 m. Leaving both distances in centimeters and calling the result meters gives 40 m. The value 0.20 m leaves out the 2, and 0.85 m just adds h and H.`,
      },
      {
        question: r`A horizontal jet from a small hole in a wide, open tank has a range of 0.90 m. The tank is then filled until the hole is 4 times as far below the surface; the hole's height above the floor is unchanged. With ideal flow, what is the new range?`,
        options: [r`3.6 m`, r`0.90 m`, r`1.8 m`, r`1.3 m`],
        correctAnswer: 2,
        explanation: r`R = 2√(hH) goes as the square root of the depth, so 4 times the depth doubles the range: 2 × 0.90 = 1.8 m. The value 3.6 m scales the range by 4, 0.90 m assumes only the height matters, and 1.3 m is the result for only twice the depth.`,
      },
      {
        question: r`On a planet where g = 5.0 m/s², a wide, open tank has a small hole 0.90 m below the liquid surface and 2.5 m above the ground. The jet leaves horizontally. With ideal flow, what is the range of the jet?`,
        options: [r`1.5 m`, r`6.0 m`, r`4.5 m`, r`3.0 m`],
        correctAnswer: 3,
        explanation: r`The exit speed is √(2 × 5.0 × 0.90) = 3.0 m/s and the fall time is √(2 × 2.5 ÷ 5.0) = 1.0 s, so R = 3.0 m. This matches 2√(hH) = 2√2.25, in which g cancels. The value 1.5 m leaves out the 2, 6.0 m doubles the range for the halved g, and 4.5 m is 2hH with no square root.`,
      },
    ],
  },
  [r`How do you find the flow rate out of a hole in a tank?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A city fountain is fed from a wide, open cistern through a small hole of area 3.0 cm², at a depth of 1.25 m below the surface. With g = 10 m/s² and ideal flow, what is the flow rate through the hole?`,
        options: [r`1.5 × 10¹ m³/s`, r`1.5 × 10⁻¹ m³/s`, r`1.5 × 10⁻³ m³/s`, r`7.5 × 10⁻³ m³/s`],
        correctAnswer: 2,
        explanation: r`The exit speed is √(2 × 10 × 1.25) = 5.0 m/s and the area is 3.0 × 10⁻⁴ m², so Q = 3.0 × 10⁻⁴ × 5.0 = 1.5 × 10⁻³ m³/s. Leaving the area as 3.0 gives 15 m³/s, and treating 1 cm² as 10⁻² m² gives 1.5 × 10⁻¹ m³/s. The value 7.5 × 10⁻³ m³/s uses 2gh = 25 without the square root.`,
      },
      {
        question: r`An engineer wants a flow rate of 1.2 × 10⁻³ m³/s from a small hole drilled at a depth of 1.8 m in a wide, open irrigation tank. With g = 10 m/s² and ideal flow, what area must the hole have?`,
        options: [r`0.020 cm²`, r`72 cm²`, r`0.33 cm²`, r`2.0 cm²`],
        correctAnswer: 3,
        explanation: r`The exit speed is √(2 × 10 × 1.8) = 6.0 m/s, so A = Q/v = 1.2 × 10⁻³ ÷ 6.0 = 2.0 × 10⁻⁴ m² = 2.0 cm². The value 0.020 cm² converts with a factor of 100 instead of 10⁴, 72 cm² multiplies Q by v, and 0.33 cm² divides by 2gh = 36 without the square root.`,
      },
      {
        question: r`A flow meter reads 1.0 × 10⁻⁴ m³/s for the jet from a small hole of area 0.50 cm² in a wide, open barrel of cooking oil. With g = 10 m/s² and ideal flow, what is the depth of the hole below the oil surface?`,
        options: [r`0.20 m`, r`0.40 m`, r`0.10 m`, r`2.0 m`],
        correctAnswer: 0,
        explanation: r`The exit speed is Q/A = 1.0 × 10⁻⁴ ÷ 0.50 × 10⁻⁴ = 2.0 m/s, and h = v²/(2g) = 4.0 ÷ 20 = 0.20 m. The value 0.40 m divides v² by g instead of 2g, 0.10 m forgets to square the speed, and 2.0 m halves v² without dividing by g.`,
      },
      {
        question: r`A small hole of area 4.0 cm² is 0.45 m below the surface of a large, open reservoir, so the level barely changes. With g = 10 m/s² and ideal flow, how much water leaves the hole in 10 s?`,
        options: [r`1.2 L`, r`120 L`, r`36 L`, r`12 L`],
        correctAnswer: 3,
        explanation: r`The exit speed is √(2 × 10 × 0.45) = 3.0 m/s, so Q = 4.0 × 10⁻⁴ × 3.0 = 1.2 × 10⁻³ m³/s = 1.2 L/s, and 10 s gives 12 L. The value 1.2 L is the amount for one second, 120 L slips a power of ten, and 36 L uses 2gh = 9.0 without the square root.`,
      },
      {
        question: r`A firefighting reservoir on a hilltop is wide and open, and a small hole of area 0.20 cm² lies at a depth of 7.2 m. With g = 10 m/s² and ideal flow, how many liters per second pass through the hole?`,
        options: [r`2.4 L/s`, r`0.024 L/s`, r`0.24 L/s`, r`2.9 L/s`],
        correctAnswer: 2,
        explanation: r`The exit speed is √(2 × 10 × 7.2) = 12 m/s and the area is 0.20 × 10⁻⁴ m², so Q = 2.4 × 10⁻⁴ m³/s = 0.24 L/s. The values 2.4 L/s and 0.024 L/s slip a power of ten in a conversion, and 2.9 L/s uses 2gh = 144 without the square root.`,
      },
      {
        question: r`A gardener drills two small holes in a wide, open rain barrel. Hole X has an area of 1.0 cm² at a depth of 0.20 m. Hole Y has an area of 0.50 cm² at a depth of 1.8 m. With g = 10 m/s² and ideal flow, how does the flow rate from Y compare with that from X?`,
        options: [r`4.5 times as large`, r`0.50 times as large`, r`3.0 times as large`, r`1.5 times as large`],
        correctAnswer: 3,
        explanation: r`The exit speeds are √(2 × 10 × 0.20) = 2.0 m/s at X and √(2 × 10 × 1.8) = 6.0 m/s at Y, so Y has 3 times the speed and half the area: 3 × 0.50 = 1.5 times the flow rate. A factor of 4.5 uses the depth ratio of 9 without the square root, 0.50 compares only the areas, and 3.0 compares only the speeds.`,
      },
    ],
  },
  [r`How do you convert an area from cm² to m², and a flow rate from m³/s to L/s?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The drain opening at the bottom of a swimming pool has an area of 40 cm². What is this area in square meters, ready to use in Q = Av?`,
        options: [r`4.0 × 10⁻¹ m²`, r`4.0 × 10⁻⁵ m²`, r`4.0 × 10⁵ m²`, r`4.0 × 10⁻³ m²`],
        correctAnswer: 3,
        explanation: r`1 cm² = 10⁻⁴ m², so 40 cm² = 40 × 10⁻⁴ = 4.0 × 10⁻³ m². The value 4.0 × 10⁻¹ m² divides by 100 as if converting a length, 4.0 × 10⁻⁵ m² slips a power of ten, and 4.0 × 10⁵ m² multiplies by 10⁴ instead of dividing.`,
      },
      {
        question: r`A calculation gives the flow rate from a leaking barrel as 2.5 × 10⁻⁴ m³/s. What is this flow rate in liters per second?`,
        options: [r`2.5 L/s`, r`0.025 L/s`, r`250 L/s`, r`0.25 L/s`],
        correctAnswer: 3,
        explanation: r`10⁻³ m³/s is 1 L/s, so 2.5 × 10⁻⁴ m³/s = 0.25 × 10⁻³ m³/s = 0.25 L/s. The values 2.5 L/s and 0.025 L/s are each off by a power of ten, and 250 is the number of milliliters per second, not liters per second.`,
      },
      {
        question: r`A kitchen tap delivers 3.0 L/s when fully open. What is this flow rate in SI units?`,
        options: [r`3.0 × 10³ m³/s`, r`3.0 × 10⁻³ m³/s`, r`3.0 × 10⁻² m³/s`, r`3.0 × 10⁻⁶ m³/s`],
        correctAnswer: 1,
        explanation: r`1 L/s is 10⁻³ m³/s, so 3.0 L/s = 3.0 × 10⁻³ m³/s. The value 3.0 × 10³ m³/s multiplies by 1000 instead of dividing, 3.0 × 10⁻² m³/s is off by a power of ten, and 3.0 × 10⁻⁶ m³/s treats a liter as a cubic centimeter.`,
      },
      {
        question: r`Dividing a flow rate by a speed gives the area of a nozzle as 6.0 × 10⁻⁴ m². What is this area in square centimeters?`,
        options: [r`0.060 cm²`, r`600 cm²`, r`6.0 cm²`, r`0.60 cm²`],
        correctAnswer: 2,
        explanation: r`1 cm² = 10⁻⁴ m², so 6.0 × 10⁻⁴ m² is 6.0 cm². The value 0.060 cm² multiplies by 100 as if converting a length, 600 is the area in square millimeters, and 0.60 cm² slips a power of ten.`,
      },
      {
        question: r`Water leaves a nozzle of area 0.50 cm² at 8.0 m/s. What is the flow rate in liters per second?`,
        options: [r`4.0 L/s`, r`40 L/s`, r`0.040 L/s`, r`0.40 L/s`],
        correctAnswer: 3,
        explanation: r`The area is 0.50 × 10⁻⁴ m², so Q = 0.50 × 10⁻⁴ × 8.0 = 4.0 × 10⁻⁴ m³/s, and with 10⁻³ m³/s = 1 L/s this is 0.40 L/s. The value 4.0 L/s multiplies cm² by m/s with no conversion, 40 L/s treats 1 cm² as 10⁻² m², and 0.040 L/s slips a power of ten at the end.`,
      },
      {
        question: r`A garden hose delivers 1.0 × 10⁻⁴ m³/s. How many liters does it deliver each minute?`,
        options: [r`0.10 L/min`, r`6.0 L/min`, r`0.60 L/min`, r`60 L/min`],
        correctAnswer: 1,
        explanation: r`10⁻³ m³/s is 1 L/s, so 1.0 × 10⁻⁴ m³/s is 0.10 L/s, and 60 s in a minute gives 6.0 L/min. The value 0.10 is the number of liters per second, 0.60 L/min slips a power of ten in the volume conversion, and 60 L/min treats the rate as 1 L/s.`,
      },
    ],
  },
  [r`The depth of water above a hole falls to one-quarter. What happens to the exit speed and the flow rate?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The jet from a small hole in an open rooftop tank has an exit speed of 7.0 m/s in the morning. By evening the tank has drained, and the hole's depth below the surface is one-quarter of the morning value. With ideal flow, what is the exit speed in the evening?`,
        options: [r`1.75 m/s`, r`14 m/s`, r`3.5 m/s`, r`4.9 m/s`],
        correctAnswer: 2,
        explanation: r`The exit speed goes as the square root of the depth, so one-quarter of the depth gives one-half of the speed: 3.5 m/s. The value 1.75 m/s quarters the speed with the depth, 14 m/s doubles it instead of halving it, and 4.9 m/s is the speed for half the depth.`,
      },
      {
        question: r`An open tank drains through a small hole. When the flow rate was first measured, the water surface was 1.6 m above the hole. The flow rate is now half of that first value. With ideal flow, how far above the hole is the surface now?`,
        options: [r`0.80 m`, r`0.40 m`, r`1.1 m`, r`3.2 m`],
        correctAnswer: 1,
        explanation: r`Half the flow rate through the same hole means half the exit speed, and since speed goes as the square root of the depth, the depth is one-quarter: 1.6 ÷ 4 = 0.40 m. The value 0.80 m halves the depth, 1.1 m divides it by √2, and 3.2 m doubles it.`,
      },
      {
        question: r`Water leaves a small hole in a large open tank at 0.80 L/s when the surface is 3.2 m above the hole. Later the surface is 0.80 m above the hole. With ideal flow, how long does the jet now take to fill a 2.0 L jug?`,
        options: [r`5.0 s`, r`2.5 s`, r`10 s`, r`3.5 s`],
        correctAnswer: 0,
        explanation: r`The depth has fallen to one-quarter, so the exit speed and the flow rate both halve, to 0.40 L/s, and 2.0 L takes 2.0 ÷ 0.40 = 5.0 s. The value 2.5 s uses the first flow rate, 10 s quarters the flow rate with the depth, and 3.5 s divides the flow rate by √2.`,
      },
      {
        question: r`Water leaves a small hole in an open tank at 8.0 m/s, with a flow rate of 2.0 L/s. The tank drains until the depth above the hole is one-quarter of its first value. With ideal flow, what are the exit speed and flow rate now?`,
        options: [r`2.0 m/s and 0.50 L/s`, r`4.0 m/s and 0.50 L/s`, r`4.0 m/s and 1.0 L/s`, r`4.0 m/s and 2.0 L/s`],
        correctAnswer: 2,
        explanation: r`One-quarter of the depth gives half the exit speed, 4.0 m/s, and half the speed through the same hole gives half the flow rate, 1.0 L/s. Quartering both treats them as proportional to depth. The other pairs halve the speed but then quarter the flow rate or leave it unchanged.`,
      },
      {
        question: r`Water leaves a small hole in an open tank at 3.0 × 10⁻⁴ m³/s when the surface is 120 cm above the hole. With ideal flow, what is the flow rate in liters per second once the surface is 30 cm above the hole?`,
        options: [r`0.075 L/s`, r`0.15 L/s`, r`1.5 L/s`, r`0.21 L/s`],
        correctAnswer: 1,
        explanation: r`The depth falls from 120 cm to 30 cm, one-quarter, so the flow rate halves to 1.5 × 10⁻⁴ m³/s, which is 0.15 L/s. The value 0.075 L/s quarters the flow rate with the depth, 1.5 L/s slips a power of ten in the conversion, and 0.21 L/s is the result for half the depth.`,
      },
      {
        question: r`Water leaves a small hole in an open tank at 0.45 L/s when the surface is 0.25 m above the hole. The tank is then refilled until the surface is 1.0 m above the hole. With ideal flow, what is the flow rate now?`,
        options: [r`1.8 L/s`, r`0.64 L/s`, r`0.23 L/s`, r`0.90 L/s`],
        correctAnswer: 3,
        explanation: r`The rule runs both ways: 4 times the depth gives √4 = 2 times the exit speed and so 2 times the flow rate, 0.90 L/s. The value 1.8 L/s scales the flow rate by 4, 0.64 L/s is the result for twice the depth, and 0.23 L/s halves the flow rate although the depth went up.`,
      },
    ],
  },
  [r`What are the steps for finding where a horizontal jet lands?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A brewer's wide, open kettle rests on a platform. Its small drain hole is at a depth of 0.45 m in the liquid and at a height of 1.25 m above the floor, and the jet leaves horizontally. With g = 10 m/s² and ideal flow, where does the jet land?`,
        options: [r`0.90 m from the kettle`, r`2.5 m from the kettle`, r`1.5 m from the kettle`, r`0.75 m from the kettle`],
        correctAnswer: 2,
        explanation: r`Exit speed from the depth: √(2 × 10 × 0.45) = 3.0 m/s. Fall time from the height: √(2 × 1.25 ÷ 10) = 0.50 s. Range: 3.0 × 0.50 = 1.5 m. The value 0.90 m uses the depth for both steps, 2.5 m uses the height for both, and 0.75 m is half the correct range.`,
      },
      {
        question: r`A wide, open tank of water has a small hole 3.2 m below the water surface and 0.20 m above the floor, and the water leaves horizontally. With g = 10 m/s² and ideal flow, which line of working is correct?`,
        options: [r`v = 2 m/s, t = 0.8 s, R = 1.6 m`, r`v = 8 m/s, t = 0.8 s, R = 6.4 m`, r`v = 8 m/s, t = 0.2 s, R = 1.6 m`, r`v = 2 m/s, t = 0.2 s, R = 0.4 m`],
        correctAnswer: 2,
        explanation: r`The depth gives the exit speed, √(2 × 10 × 3.2) = 8 m/s, the height gives the fall time, √(2 × 0.20 ÷ 10) = 0.2 s, and R = 8 × 0.2 = 1.6 m. The line with 2 m/s and 0.8 s swaps the two distances, even though its range comes out the same. The other lines use one distance for both steps.`,
      },
      {
        question: r`An open tank stands on a level floor and is filled with water to a depth of 2.0 m. A small hole in its side is 0.20 m above the floor, and the water leaves horizontally. With g = 10 m/s² and ideal flow, how far from the tank does the jet land?`,
        options: [r`1.2 m`, r`1.3 m`, r`0.60 m`, r`3.6 m`],
        correctAnswer: 0,
        explanation: r`The hole is 2.0 − 0.20 = 1.8 m below the surface, so v = √(2 × 10 × 1.8) = 6.0 m/s. The fall time is √(2 × 0.20 ÷ 10) = 0.20 s, so R = 6.0 × 0.20 = 1.2 m. The value 1.3 m uses the full 2.0 m as the depth, 0.60 m is half the range, and 3.6 m takes the fall time from the depth.`,
      },
      {
        question: r`The jet from a small hole in a wide, open barrel leaves horizontally and lands 1.2 m from the barrel. The hole's depth is 0.80 m. With g = 10 m/s² and ideal flow, what is the hole's height above the ground?`,
        options: [r`0.45 m`, r`0.90 m`, r`1.5 m`, r`0.30 m`],
        correctAnswer: 0,
        explanation: r`The exit speed is √(2 × 10 × 0.80) = 4.0 m/s, so the fall time is 1.2 ÷ 4.0 = 0.30 s and H = ½gt² = ½ × 10 × 0.090 = 0.45 m. The value 0.90 m leaves out the one-half, 1.5 m forgets to square the time, and 0.30 is the fall time in seconds, not a height.`,
      },
      {
        question: r`On a planet where g = 4.0 m/s², a wide, open tank has a small hole 2.0 m below the liquid surface and 0.50 m above the ground. The liquid leaves horizontally. With ideal flow, how far from the tank does the jet land?`,
        options: [r`1.0 m`, r`8.0 m`, r`4.0 m`, r`2.0 m`],
        correctAnswer: 3,
        explanation: r`Exit speed: √(2 × 4.0 × 2.0) = 4.0 m/s. Fall time: √(2 × 0.50 ÷ 4.0) = 0.50 s. Range: 4.0 × 0.50 = 2.0 m. The value 1.0 m is half of this, 8.0 m uses 2gh = 16 without the square root, and 4.0 m takes the fall time as 1.0 s by leaving g out of it.`,
      },
      {
        question: r`On a lab bench, a wide, open tank has a small hole 5.0 cm below the water surface and 45 cm above the bench top, and the water leaves horizontally. With g = 10 m/s² and ideal flow, how far from the tank does the jet land on the bench?`,
        options: [r`15 cm`, r`50 cm`, r`10 cm`, r`30 cm`],
        correctAnswer: 3,
        explanation: r`Exit speed: √(2 × 10 × 0.050) = 1.0 m/s. Fall time: √(2 × 0.45 ÷ 10) = 0.30 s. Range: 1.0 × 0.30 = 0.30 m, which is 30 cm. The value 15 cm is half of this, 50 cm just adds the two distances, and 10 cm takes the fall time from the 5.0 cm depth.`,
      },
    ],
  },
  [r`For a jet from a tank, which distance sets the exit speed and which sets the fall time?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A horizontal jet leaves a small hole in an open tank on a low stand. The tank is moved to a taller stand, with the same depth of water above the hole. With ideal flow, what happens to the exit speed and the fall time?`,
        options: [r`The exit speed rises and the fall time is unchanged`, r`The exit speed is unchanged and the fall time rises`, r`The exit speed and the fall time both rise together`, r`The exit speed falls and the fall time rises instead`],
        correctAnswer: 1,
        explanation: r`The exit speed depends only on the depth of the hole below the surface, which has not changed. The fall time depends on the hole's height above the floor, which is now larger, so the jet is in the air longer. Options in which the exit speed changes confuse the height above the floor with the depth.`,
      },
      {
        question: r`A small hole in an open tank is 0.20 m below the water surface and 1.8 m above the floor. With g = 10 m/s², a student reports an exit speed of 6 m/s and a fall time of 0.2 s. What is the verdict on her answer?`,
        options: [r`She left out the square roots: the values are 4 m/s and 0.04 s`, r`She swapped the two distances: the values are 2 m/s and 0.6 s`, r`She used the depth for both: the values are 2 m/s and 0.2 s`, r`She made no mistake: the values are 6 m/s and 0.2 s as given`],
        correctAnswer: 1,
        explanation: r`The depth sets the exit speed, √(2 × 10 × 0.20) = 2 m/s, and the height sets the fall time, √(2 × 1.8 ÷ 10) = 0.6 s. Her 6 m/s comes from the 1.8 m height and her 0.2 s from the 0.20 m depth, so she swapped them. The other verdicts do not match the working.`,
      },
    ],
  },
  [r`A tank's water is replaced by oil, filled to the same level. What changes about the jet?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A horizontal jet of water from a small hole in an open tank has an exit speed of 4 m/s, a fall time of 0.5 s and a range of 2.0 m. The water is replaced by an oil with 0.80 times its density, filled to the same level. With ideal flow, which values describe the jet of oil?`,
        options: [r`4 m/s, 0.5 s and 2.0 m`, r`5 m/s, 0.5 s and 2.5 m`, r`4 m/s, 0.4 s and 1.6 m`, r`3.2 m/s, 0.5 s and 1.6 m`],
        correctAnswer: 0,
        explanation: r`Density appears in neither √(2gh) nor the fall, so the exit speed, fall time and range all stay the same. The set with 5 m/s divides the speed by 0.80, the set with 0.4 s scales the fall time by 0.80, and the set with 3.2 m/s scales the speed by 0.80.`,
      },
      {
        question: r`A student argues that a jet of oil must land closer to the tank than a jet of water from the same level, because lighter oil is pushed out by less pressure. With ideal flow, which reply is correct?`,
        options: [r`Less pressure pushes the same mass, so the speed and range are less`, r`Less pressure pushes less mass, so the speed and range are the same`, r`The same pressure pushes less mass, so the speed and range are more`, r`The same pressure pushes the same mass, so only the fall time is less`],
        correctAnswer: 1,
        explanation: r`The pressure from the oil's depth is smaller in proportion to its density, but so is the mass of each parcel being pushed, so density cancels in ρgh = ½ρv². The exit speed is unchanged, the fall does not depend on density, and the range is the same. The other replies keep the pressure or the mass fixed when both change.`,
      },
    ],
  },
}
