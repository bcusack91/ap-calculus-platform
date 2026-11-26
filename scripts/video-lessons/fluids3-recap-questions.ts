/**
 * Fluids Part 3 (Continuity & Bernoulli): the extra conceptual questions for
 * each CONCEPT video (videos 1, 3, 5, 7). Together with the shot list's three
 * checkpoints they give every concept video at least three questions spread
 * over its sections and three on its "Remember" section; fluids3-lesson.ts
 * says which goes where. Each one uses a new situation, so none repeats a
 * shot-list checkpoint, a worked example, a lesson practice question or an
 * exit-quiz item. See circuits1-recap-questions.ts for the rules.
 */
import type { CheckpointQuestion } from '../../src/lib/video-lesson-core'

export const RECAP: Record<number, CheckpointQuestion[]> = {
  // 1 · Flow Rate and Continuity
  1: [
    {
      // on 07-clinical-units (MCAT-only section)
      question: 'A blood pump is set to 3.0 L/min. Which flow rate belongs in Q = Av when the area is in cm² and the speed is in cm/s?',
      options: ['3000 cm³/s', '0.050 cm³/s', '50 cm³/s', '180 cm³/s'],
      correctAnswer: 2,
      explanation: 'Convert liters to cubic centimeters and minutes to seconds: 3.0 L is 3000 cm³, and 3000 cm³ in 60 s is 50 cm³/s. 3000 cm³/s converts the volume but leaves the time in minutes; 0.050 divides the 3.0 by 60 and is in liters per second; and 180 multiplies by 60 instead of dividing.',
    },
    {
      // Remember
      question: 'A syringe’s barrel has 5 times the radius of its needle. The plunger pushes the liquid along the barrel at 2 mm/s. How fast does the liquid move in the needle?',
      options: ['10 mm/s', '50 mm/s', '0.08 mm/s', '250 mm/s'],
      correctAnswer: 1,
      explanation: 'Area goes as the radius squared, so the needle has 1/25 of the barrel’s area, and by A₁v₁ = A₂v₂ the liquid moves 25 times as fast: 25 × 2 = 50 mm/s. 10 mm/s uses the radius ratio without squaring it; 0.08 mm/s slows the liquid in the narrow part, which is backwards; and 250 mm/s cubes the ratio.',
    },
    {
      // Remember
      question: 'A river splits into two channels around an island. Together the two channels have twice the cross-sectional area of the river upstream. How fast does the water move in the channels?',
      options: [
        'At half the speed of the river upstream',
        'At twice the speed of the river upstream',
        'At the same speed as the river upstream',
        'At a quarter of the speed of the river upstream',
      ],
      correctAnswer: 0,
      explanation: 'The channels share the river’s flow, so their speed is that flow rate divided by their total area. Twice the total area carries the same flow at half the speed. Twice the speed is single-tube thinking: each channel is narrower than the river, but it is the total area that counts. A quarter would need four times the area.',
    },
    {
      // Remember
      question: 'A student knows the two cross-sectional areas of a narrowing pipe and the speed of the water as it enters. What can the continuity equation alone give for the narrow part?',
      options: [
        'The pressure there, but not the speed',
        'Both the speed and the pressure there',
        'Neither the speed nor the pressure there',
        'The speed there, but not the pressure',
      ],
      correctAnswer: 3,
      explanation: 'Continuity links area to speed: v₂ = v₁(A₁/A₂), so the two areas and one speed give the other speed. It contains no pressure term, so it can never give a pressure. Finding the pressure takes a second equation, Bernoulli’s, once the speed is known.',
    },
  ],
  // 3 · Bernoulli's Equation
  3: [
    {
      // on 03-energy
      question: 'Water rises through a vertical pipe of constant width, so its speed stays the same. As it climbs, what happens to the three terms of Bernoulli’s equation?',
      options: [
        'ρgy grows, ½ρv² falls, and P stays the same',
        'ρgy grows, ½ρv² stays the same, and P falls',
        'ρgy grows, ½ρv² stays the same, and P grows',
        'ρgy falls, ½ρv² stays the same, and P grows',
      ],
      correctAnswer: 1,
      explanation: 'Here y is height, so ρgy grows as the water climbs. The speed does not change, so ½ρv² stays the same. The three terms add up to a fixed total, so the pressure must pay for the height gained: P falls. Reading y as depth is what makes ρgy seem to fall, and nothing here slows the water down.',
    },
    {
      // on 07-blood-vessels (MCAT-only section)
      question: 'An aneurysm is a short widened segment of an artery. Compared with the blood in the normal artery on either side of it, the blood in the widened segment:',
      options: [
        'moves faster and presses less on the wall',
        'moves faster and presses harder on the wall',
        'moves slower and presses harder on the wall',
        'moves slower and presses less on the wall',
      ],
      correctAnswer: 2,
      explanation: 'The chain runs both ways. A wider segment has more area, so by continuity the blood moves slower, and at one height slower fluid has higher pressure, so it presses harder on the wall. Faster with less pressure describes a narrowing, the opposite case. Slower with less pressure, or faster with more, breaks Bernoulli’s link between speed and pressure.',
    },
    {
      // Remember
      question: 'A level pipe narrows. The two areas, the speed in the wide part and the pressure in the wide part are known. Which order of steps finds the pressure in the narrow part?',
      options: [
        'Continuity for the new speed, then Bernoulli for the pressure',
        'Bernoulli for the new speed, then continuity for the pressure',
        'Continuity for the new pressure, then Bernoulli for the speed',
        'Bernoulli for the new pressure, with no need for the speed',
      ],
      correctAnswer: 0,
      explanation: 'Bernoulli’s equation needs both speeds, and only one is known at the start. Continuity gives the second speed from the areas; then Bernoulli turns the two speeds into the pressure change. Continuity has no pressure in it, so it cannot give a pressure, and Bernoulli alone has two unknowns.',
    },
    {
      // Remember
      question: 'Oil of density 800 kg/m³ sits at rest in a tall tank. Use Bernoulli’s equation with both speeds set to zero: how much higher is the pressure at a point 5 m below another? (g = 10 m/s²)',
      options: ['4.0 kPa', '20 kPa', '50 kPa', '40 kPa'],
      correctAnswer: 3,
      explanation: 'With no flow, P + ρgy is constant, so the pressure rises by ρg times the height lost: (800)(10)(5) = 40,000 Pa = 40 kPa. 4.0 kPa leaves out g; 20 kPa puts in a ½, which belongs only to the kinetic term; and 50 kPa uses the density of water instead of the oil’s.',
    },
  ],
  // 5 · Torricelli's Theorem
  5: [
    {
      // on 05-square-root
      question: 'A small hole in a wide, open tank is moved so that it sits 3 times as deep below the surface. How does the speed of the jet change?',
      options: ['3.0 times as fast (3)', '9.0 times as fast (3²)', '1.7 times as fast (√3)', '1.5 times as fast (3/2)'],
      correctAnswer: 2,
      explanation: 'From v = √(2gh), the speed goes as the square root of the depth, so 3 times the depth gives √3 ≈ 1.7 times the speed. 3 times as fast forgets the square root; 9 times squares when it should take a root; and 1.5 is not a rule at all. It would take 9 times the depth to triple the speed.',
    },
    {
      // Remember
      question: 'In deriving v = √(2gh) for a wide, open tank with a small hole, the two pressure terms cancel out of Bernoulli’s equation. Why?',
      options: [
        'The tank is wide, so the pressure at its surface is nearly zero',
        'The hole is small, so the pressure in the jet is nearly zero',
        'The liquid is ideal, so its pressure is the same at every depth',
        'Both points are open to the air, so both are at its pressure',
      ],
      correctAnswer: 3,
      explanation: 'Point 1 on the surface and point 2 in the jet just outside the hole are both open to the air, so each is at atmospheric pressure, and equal terms on the two sides cancel. Neither pressure is zero. The wide tank matters for a different reason: it makes the surface’s speed nearly zero. And pressure inside the liquid does rise with depth.',
    },
    {
      // Remember
      question: 'Water leaves a small hole in a wide, open tank at 5.0 m/s. How far below the water surface is the hole? (g = 10 m/s²)',
      options: ['1.25 m', '2.5 m', '0.25 m', '0.50 m'],
      correctAnswer: 0,
      explanation: 'Turn v = √(2gh) around: h = v²/(2g) = 25/20 = 1.25 m, the height a stone must fall from rest to reach 5.0 m/s. 2.5 m leaves out the 2; 0.25 m forgets to square the speed (5.0/20); and 0.50 m is just v/g.',
    },
    {
      // Remember
      question: 'A jet leaves a tank horizontally. The tank is moved to a taller stand, so the hole is 4 times as high above the floor; the depth of water above the hole is unchanged. What happens to the distance the jet travels?',
      options: [
        'It quadruples, since the fall is 4 times as far',
        'It doubles, since the fall takes twice as long',
        'It stays the same, since the exit speed is the same',
        'It doubles, since the exit speed is twice as large',
      ],
      correctAnswer: 1,
      explanation: 'The exit speed depends only on the depth of the hole below the surface, so it does not change. The fall time is √(2H/g), so 4 times the height gives twice the time, and R = vt doubles. Quadrupling forgets the square root; and an unchanged range forgets that a longer fall gives the jet more time to move sideways.',
    },
  ],
  // 7 · Venturi and Pitot Tubes
  7: [
    {
      // on 07-lift
      question: 'A race car’s rear wing is shaped like an upside-down airplane wing, so air moves faster beneath it than above it. Which way does the air’s net force on the wing point?',
      options: [
        'Upward, since the pressure is lower beneath it',
        'Upward, since the pressure is higher beneath it',
        'Downward, since the pressure is higher beneath it',
        'Downward, since the pressure is lower beneath it',
      ],
      correctAnswer: 3,
      explanation: 'Faster air has lower pressure, so the pressure beneath this wing is lower than the pressure above it. The air above pushes down harder than the air beneath pushes up, and the net force, ΔP times the wing’s area, points downward. It is lift turned over, and it presses the tires onto the road.',
    },
    {
      // Remember
      question: 'The gauge on a pitot tube shows a pressure difference 9 times as large as it did a moment ago, in the same stream of air. How has the speed of the air changed?',
      options: ['It is 3 times as large', 'It is 9 times as large', 'It is 81 times as large', 'It is 4.5 times as large'],
      correctAnswer: 0,
      explanation: 'A pitot tube reads ΔP = ½ρv², so the speed goes as the square root of the reading: 9 times the pressure difference means √9 = 3 times the speed. 9 times treats ΔP as proportional to v; 81 squares when it should take a root; and 4.5 halves the 9, misusing the ½ in the formula.',
    },
    {
      // Remember
      question: 'Which instrument’s reading is equal to ½ρv² for a single speed v, the speed of the stream it sits in?',
      options: [
        'A Venturi meter: wide-section minus throat pressure',
        'A pitot tube: stagnation minus static pressure',
        'A barometer: atmospheric minus vacuum pressure',
        'A manometer: tank gas minus atmospheric pressure',
      ],
      correctAnswer: 1,
      explanation: 'At a pitot tube’s tip the fluid stops, so the pressure there is P + ½ρv²; subtracting the static pressure P leaves ½ρv² for the one speed of the stream. In a Venturi meter the fluid is moving at both points, so the reading is ½ρ(v₂² − v₁²), with two speeds. A barometer and a manometer compare pressures in fluids at rest.',
    },
    {
      // Remember
      question: 'In a laboratory aspirator, tap water rushes through a narrowed tube that has a side arm joined to a flask. Why does air flow out of the flask?',
      options: [
        'Fast water in the narrowing is at high pressure, so it pushes into the flask',
        'Slow water in the narrowing is at low pressure, so the flask’s air is pushed in',
        'Fast water in the narrowing is at low pressure, so the flask’s air is pushed in',
        'Fast water in the narrowing pulls on the air, so no pressure difference is needed',
      ],
      correctAnswer: 2,
      explanation: 'This is the Venturi effect. The area goes down, so the water speeds up, so its pressure drops below the pressure of the air in the flask, and that higher pressure pushes the air into the stream. The water in a narrowing is fast, not slow, and fast water has low pressure. Nothing pulls on the air: fluids only push.',
    },
  ],
}
