import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-fl3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`In a Venturi meter, what do $\Delta P$ and $\Delta h$ stand for, and what are their SI units?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Pressure sensors on a Venturi meter in a brewery read 104 kPa in the wide section and 101 kPa in the throat. What value of ΔP, in SI units, goes into the calculation?`,
        options: [r`205,000 Pa, the two readings added`, r`101,000 Pa, the reading at the throat`, r`3000 Pa, the wide section minus the throat`, r`3 Pa, the wide section minus the throat`],
        correctAnswer: 2,
        explanation: r`ΔP is the pressure difference between the wide section and the throat, in pascals: 104 kPa − 101 kPa = 3 kPa = 3000 Pa. Adding the readings or taking the throat's reading alone is not a difference, and 3 Pa forgets that a kilopascal is 1000 Pa.`,
      },
      {
        question: r`A data sheet for a Venturi meter that carries water lists "ΔP = 800 Pa" at a certain flow rate. Which statement reads that entry correctly?`,
        options: [r`The throat's pressure is 800 Pa below the wide section's`, r`The throat's pressure is 800 Pa above the wide section's`, r`The throat's pressure is 800 Pa below the atmosphere's`, r`The throat's pressure is 800 Pa above the atmosphere's`],
        correctAnswer: 0,
        explanation: r`ΔP compares the two sections of the meter with each other: the wide section's pressure minus the throat's. The water is faster in the throat, so the throat's pressure is the lower one. The entry says nothing about atmospheric pressure, and the throat is never the higher-pressure section.`,
      },
    ],
  },
  [r`What is the Venturi effect?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal liquid flows steadily along a level pipe. Gauge X sits before a constriction, gauge Y in the constriction, and gauge Z after it, where the pipe is back to its first size. How do the three pressure readings compare?`,
        options: [r`X is the highest, and Y and Z are equal to each other`, r`X and Z are equal, and Y is lower than both of them`, r`X and Z are equal, and Y is higher than both of them`, r`X is the highest, and Z is the lowest of the three`],
        correctAnswer: 1,
        explanation: r`In the constriction the area is smaller, so the liquid is faster and its pressure is lower. When the pipe widens back to its first size the speed returns to its first value, and so does the pressure: X and Z match and Y is below both. The other options have the pressure rise in the constriction or fail to recover after it.`,
      },
      {
        question: r`In an old car's carburetor, air is drawn through a level passage with a narrowed section, and the fuel inlet opens into the narrowest point. Treating the air as an ideal fluid, why is the inlet placed there?`,
        options: [r`The air is slowest there, so its pressure is lowest`, r`The air is fastest there, so its pressure is highest`, r`The air is slowest there, so its pressure is highest`, r`The air is fastest there, so its pressure is lowest`],
        correctAnswer: 3,
        explanation: r`This is the Venturi effect: where the passage is narrowest the air moves fastest, and faster flow at the same height means lower pressure. That low pressure lets the higher pressure on the fuel push fuel into the stream. Continuity rules out the air being slowest at the narrowest point, and Bernoulli rules out fast air with high pressure.`,
      },
    ],
  },
  [r`What is a Venturi meter, and over which section does its liquid stand lower?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Kerosene flows steadily through a horizontal Venturi meter. It stands 30 cm high in one of the meter's open tubes and 18 cm high in the other. Which tube is over the throat, and what does its level show?`,
        options: [r`The 18 cm tube, since the throat's pressure is lower`, r`The 18 cm tube, since the throat's pressure is higher`, r`The 30 cm tube, since the throat's pressure is lower`, r`The 30 cm tube, since the throat's pressure is higher`],
        correctAnswer: 0,
        explanation: r`The kerosene is faster in the throat, so its pressure there is lower, and a lower pressure holds up a shorter column: the 18 cm tube is over the throat. A taller column would need a higher pressure, which the faster-moving kerosene in the throat does not have.`,
      },
      {
        question: r`A horizontal Venturi meter's throat is swapped for a piece with the same cross-sectional area as the wide section, so an ideal liquid now flows through a uniform pipe beneath the two open tubes. What do the tubes show?`,
        options: [r`A lower level in the second tube, since liquid slows as it goes`, r`A lower level in the first tube, since liquid is fastest on entry`, r`Equal levels, since the speed is the same beneath both tubes`, r`A higher level in the second tube, since pressure builds as it goes`],
        correctAnswer: 2,
        explanation: r`The levels differ in a Venturi meter only because the liquid is faster in the throat and so has a lower pressure there. With equal areas, continuity gives equal speeds, so an ideal liquid in a level pipe has equal pressures and the two tubes stand at the same level. An ideal liquid neither slows down nor builds pressure along a uniform level pipe.`,
      },
    ],
  },
  [r`How does the height difference in a Venturi meter give the pressure difference?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A greenhouse feeds its plants a fertilizer solution of density 1100 kg/m³ through a Venturi meter. The solution stands 12 cm lower in the open tube over the throat than in the open tube over the wide section. With g = 10 m/s², how much lower is the pressure in the throat?`,
        options: [r`132 Pa`, r`132,000 Pa`, r`13,200 Pa`, r`1320 Pa`],
        correctAnswer: 3,
        explanation: r`ΔP = ρgΔh = 1100 × 10 × 0.12 = 1320 Pa. The value 132 Pa leaves out g, 132,000 Pa uses 12 without converting centimeters to meters, and 13,200 Pa slips a power of ten.`,
      },
      {
        question: r`The pressure in the throat of a Venturi meter is 1600 Pa lower than in its wide section. The meter carries an oil of density 800 kg/m³. With g = 10 m/s², what is the difference between the oil levels in its two open tubes?`,
        options: [r`2.0 cm`, r`20 cm`, r`200 cm`, r`5.0 cm`],
        correctAnswer: 1,
        explanation: r`Δh = ΔP/(ρg) = 1600 ÷ (800 × 10) = 0.20 m = 20 cm. Leaving out g gives 2.0 m, which is 200 cm. Inverting the fraction gives 8000 ÷ 1600 = 5.0, and 2.0 cm slips a power of ten in the conversion.`,
      },
      {
        question: r`An unknown liquid flows through a Venturi meter. Its levels in the two open tubes differ by 5.0 cm when the pressure difference between the wide section and the throat is 630 Pa. With g = 10 m/s², what is the liquid's density?`,
        options: [r`1260 kg/m³`, r`12,600 kg/m³`, r`12.6 kg/m³`, r`315 kg/m³`],
        correctAnswer: 0,
        explanation: r`ρ = ΔP/(gΔh) = 630 ÷ (10 × 0.050) = 630 ÷ 0.50 = 1260 kg/m³. Leaving out g gives 12,600 kg/m³, using 5.0 without converting to meters gives 12.6 kg/m³, and 315 kg/m³ multiplies 630 by 0.50 instead of dividing.`,
      },
      {
        question: r`Two Venturi meters show the same pressure difference between wide section and throat. The first carries water (ρ = 1000 kg/m³), and its levels differ by 8.0 cm. The second carries an oil of density 800 kg/m³. By how much do the oil levels differ?`,
        options: [r`6.4 cm`, r`8.0 cm`, r`10 cm`, r`80 cm`],
        correctAnswer: 2,
        explanation: r`With ΔP = ρgΔh fixed, Δh is inversely proportional to the density: Δh = 8.0 cm × (1000 ÷ 800) = 10 cm. The less dense oil needs a taller column for the same pressure. 6.4 cm inverts the ratio, 8.0 cm ignores the density, and 80 cm slips a power of ten.`,
      },
      {
        question: r`A salt solution of density 1200 kg/m³ flows through a small Venturi meter in a lab. The levels in its two open tubes differ by 25 mm. With g = 10 m/s², what is the pressure difference between the wide section and the throat?`,
        options: [r`0.030 kPa`, r`0.30 kPa`, r`300 kPa`, r`3.0 kPa`],
        correctAnswer: 1,
        explanation: r`25 mm is 0.025 m, so ΔP = ρgΔh = 1200 × 10 × 0.025 = 300 Pa = 0.30 kPa. Leaving out g gives 0.030 kPa. Using 25 without converting to meters gives 300,000 Pa, which is 300 kPa, and 3.0 kPa treats the millimeters as centimeters.`,
      },
      {
        question: r`A distillery sends ethanol of density 800 kg/m³ through a level Venturi meter. A sensor gives the pressure in the wide section as 104.0 kPa, and the ethanol stands 25 cm lower in the open tube over the throat than in the other open tube. With g = 10 m/s², what is the pressure in the throat?`,
        options: [r`106.0 kPa`, r`103.8 kPa`, r`84.0 kPa`, r`102.0 kPa`],
        correctAnswer: 3,
        explanation: r`ΔP = ρgΔh = 800 × 10 × 0.25 = 2000 Pa = 2.0 kPa, and the throat is the lower-pressure section: 104.0 − 2.0 = 102.0 kPa. Adding gives 106.0 kPa, leaving out g gives a drop of only 0.2 kPa, and 84.0 kPa uses 25 without converting to meters, a drop of 20 kPa.`,
      },
    ],
  },
  [r`Which two equations turn a Venturi meter's pressure difference into the two flow speeds?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 2 m/s in the wide section of a horizontal Venturi meter on an irrigation line. The throat has half the wide section's cross-sectional area. What is the pressure difference between the two sections?`,
        options: [r`6000 Pa`, r`2000 Pa`, r`8000 Pa`, r`1000 Pa`],
        correctAnswer: 0,
        explanation: r`Continuity gives v₂ = 2 × 2 = 4 m/s. Bernoulli then gives ΔP = ½ × 1000 × (4² − 2²) = 500 × 12 = 6000 Pa. Squaring the difference of the speeds gives 2000 Pa, using the throat's speed alone gives 8000 Pa, and 1000 Pa does not square the speeds at all.`,
      },
      {
        question: r`An oil of density 800 kg/m³ moves at 0.5 m/s through the wide section of a horizontal Venturi meter, where the cross-sectional area is 15 cm². The throat's area is 5 cm². How much lower is the pressure in the throat?`,
        options: [r`400 Pa`, r`900 Pa`, r`800 Pa`, r`100 Pa`],
        correctAnswer: 2,
        explanation: r`Continuity gives v₂ = 0.5 × (15 ÷ 5) = 1.5 m/s. Then ΔP = ½ × 800 × (1.5² − 0.5²) = 400 × 2.0 = 800 Pa. The value 400 Pa squares the difference of the speeds, 900 Pa uses only the throat's speed, and 100 Pa uses only the wide section's speed.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 1 m/s in the wide section of a horizontal Venturi meter on a cooling loop, and the pressure in the throat is 4000 Pa lower. What fraction of the wide section's cross-sectional area is the throat's area?`,
        options: [r`One-half`, r`One-ninth`, r`One-eighth`, r`One-third`],
        correctAnswer: 3,
        explanation: r`Bernoulli: 4000 = 500 × (v₂² − 1), so v₂² = 9 and v₂ = 3 m/s. Continuity: A₂/A₁ = v₁/v₂ = one-third. One-ninth uses the ratio of the squared speeds, one-eighth comes from leaving v₁ out and not taking the root, and one-half would give a pressure difference of only 1500 Pa.`,
      },
      {
        question: r`A fuel of density 800 kg/m³ flows through a horizontal Venturi meter whose throat has half the cross-sectional area of its wide section. The pressure difference between the two sections is 4800 Pa. How fast is the fuel in the throat?`,
        options: [r`2.0 m/s`, r`4.0 m/s`, r`3.5 m/s`, r`8.0 m/s`],
        correctAnswer: 1,
        explanation: r`With v₂ = 2v₁, ΔP = ½ρ(4v₁² − v₁²) = 1.5ρv₁², so v₁² = 4800 ÷ 1200 = 4 and v₁ = 2.0 m/s. The throat's speed is twice that, 4.0 m/s. The value 2.0 m/s is the wide section's speed, 3.5 m/s comes from ΔP = ½ρv² with one speed, and 8.0 m/s doubles twice.`,
      },
      {
        question: r`A liquid medicine of density 1000 kg/m³ moves at 20 cm/s through the wide section of a small horizontal Venturi meter. The throat has one-fifth of the wide section's cross-sectional area. What is the pressure difference between the two sections?`,
        options: [r`320 Pa`, r`500 Pa`, r`480 Pa`, r`4800 Pa`],
        correctAnswer: 2,
        explanation: r`v₁ = 0.20 m/s and continuity gives v₂ = 5 × 0.20 = 1.0 m/s. Then ΔP = ½ × 1000 × (1.0² − 0.20²) = 500 × 0.96 = 480 Pa. The value 320 Pa squares the difference of the speeds, 500 Pa ignores the wide section's speed, and 4800 Pa slips a power of ten in the conversion.`,
      },
      {
        question: r`Water (ρ = 1000 kg/m³) moves at 2 m/s in the wide section of a horizontal Venturi meter. The throat's DIAMETER is half the wide section's diameter. What is the pressure difference between the two sections?`,
        options: [r`30 kPa`, r`6 kPa`, r`32 kPa`, r`18 kPa`],
        correctAnswer: 0,
        explanation: r`Half the diameter means one-quarter of the area, so v₂ = 4 × 2 = 8 m/s. Then ΔP = ½ × 1000 × (8² − 2²) = 500 × 60 = 30,000 Pa = 30 kPa. Treating the diameter ratio as the area ratio gives 6 kPa, using the throat's speed alone gives 32 kPa, and squaring the difference of the speeds gives 18 kPa.`,
      },
    ],
  },
  [r`The flow rate through a Venturi meter doubles. What happens to the height difference?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Milk flows through a Venturi meter in a dairy, and the levels in the two open tubes differ by 3.0 cm. A pump then doubles the flow rate of the milk. What is the new difference between the levels?`,
        options: [r`6.0 cm`, r`12 cm`, r`4.2 cm`, r`24 cm`],
        correctAnswer: 1,
        explanation: r`Doubling the flow rate doubles both speeds, and the pressure difference goes as the speed squared, so the height difference becomes 2² = 4 times as large: 3.0 cm × 4 = 12 cm. The value 6.0 cm scales it linearly, 4.2 cm uses the square root of 2, and 24 cm uses 2³.`,
      },
      {
        question: r`The water levels in the two open tubes of a Venturi meter differ by 20 cm. A valve is then partly closed, so the flow rate through the meter falls to half its first value. What is the new difference between the levels?`,
        options: [r`10 cm`, r`14 cm`, r`80 cm`, r`5.0 cm`],
        correctAnswer: 3,
        explanation: r`Halving the flow rate halves both speeds, and the height difference goes as the speed squared: 20 cm × (½)² = 5.0 cm. The value 10 cm scales linearly, 14 cm uses the square root of ½, and 80 cm scales the wrong way.`,
      },
      {
        question: r`A Venturi meter on a water main shows a height difference of 2.0 cm when the flow rate is 0.40 L/s. Later, with the same water, it shows a height difference of 50 cm. What is the flow rate now?`,
        options: [r`2.0 L/s`, r`10 L/s`, r`1.0 L/s`, r`5.0 L/s`],
        correctAnswer: 0,
        explanation: r`The height difference is 50 ÷ 2.0 = 25 times as large, and it goes as the flow rate squared, so the flow rate is √25 = 5 times as large: 0.40 × 5 = 2.0 L/s. Scaling the flow rate by 25 gives 10 L/s. The other values use factors of 2.5 and 12.5, neither of which is the square root.`,
      },
      {
        question: r`In a Venturi meter on a chemical line, the pressure difference between the wide section and the throat is 300 Pa at a flow rate of 1.2 L/s. The flow rate of the same liquid is raised to 4.8 L/s. What is the pressure difference now?`,
        options: [r`1200 Pa`, r`600 Pa`, r`4800 Pa`, r`19,200 Pa`],
        correctAnswer: 2,
        explanation: r`The flow rate is 4 times as large, so both speeds are 4 times as large and the pressure difference is 4² = 16 times as large: 300 × 16 = 4800 Pa. The value 1200 Pa scales linearly, 600 Pa uses the square root of 4, and 19,200 Pa uses 4³.`,
      },
      {
        question: r`The levels in the two open tubes of a Venturi meter that carries juice differ by 4.0 cm. The flow rate is then increased by 50%, to 1.5 times its first value. What is the new difference between the levels?`,
        options: [r`6.0 cm`, r`4.9 cm`, r`13.5 cm`, r`9.0 cm`],
        correctAnswer: 3,
        explanation: r`Both speeds become 1.5 times as large, and the height difference goes as the speed squared: 4.0 cm × 1.5² = 4.0 × 2.25 = 9.0 cm. The value 6.0 cm scales linearly, 4.9 cm uses the square root of 1.5, and 13.5 cm uses 1.5³.`,
      },
      {
        question: r`The flow rate of water through a Venturi meter rises from 0.50 L/s to 2.0 L/s. By what factor does the difference between the water levels in its two open tubes change?`,
        options: [r`It becomes 4 times as large`, r`It becomes 16 times as large`, r`It becomes 2 times as large`, r`It becomes 8 times as large`],
        correctAnswer: 1,
        explanation: r`The flow rate is 2.0 ÷ 0.50 = 4 times as large, so both speeds are 4 times as large. The pressure difference, and with it the height difference, goes as the speed squared: 4² = 16 times. A factor of 4 is linear scaling, 2 is the square root, and 8 only doubles the linear factor.`,
      },
    ],
  },
  [r`What happens at the open tip of a pitot tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A pitot tube in a wind tunnel has an opening at its front tip, which faces straight into the airflow, and a small port on its side, which lies along the airflow. Where is the stagnation point, and what is the air doing there?`,
        options: [r`At the side port, where the air is brought to rest`, r`At the front tip, where the air moves at its fastest`, r`At the side port, where the air moves at its fastest`, r`At the front tip, where the air is brought to rest`],
        correctAnswer: 3,
        explanation: r`The air that meets the front tip head-on has nowhere to go, so it is brought to rest there: that spot is the stagnation point. The air slides past the side port at the stream's speed, so the port reads the ordinary static pressure. The air at the tip is the slowest in the flow, not the fastest.`,
      },
      {
        question: r`A pitot tube sits in a water channel. The pump is switched off, and the water around the tube comes to rest. How does the pressure at the tube's tip now compare with the static pressure at its side port?`,
        options: [r`Above the static pressure, since the water at the tip is at rest`, r`Equal to the static pressure, since no kinetic energy is converted`, r`Below the static pressure, since the water at the tip is at rest`, r`Equal to zero pressure, since no kinetic energy is converted`],
        correctAnswer: 1,
        explanation: r`The tip's pressure exceeds the static pressure only because the stream's kinetic energy turns into pressure where the fluid is stopped. Still water has no kinetic energy to convert, so the tip and the side port read the same pressure. That pressure is not zero: the water still has its ordinary static pressure.`,
      },
    ],
  },
  [r`What is the stagnation pressure at the tip of a pitot tube?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A light aircraft flies at 50 m/s through air of density 1.2 kg/m³. The side port of its pitot tube reads a static pressure of 90.0 kPa. What is the stagnation pressure at the tube's tip?`,
        options: [r`88.5 kPa`, r`93.0 kPa`, r`91.5 kPa`, r`90.03 kPa`],
        correctAnswer: 2,
        explanation: r`½ρv² = ½ × 1.2 × 50² = 0.6 × 2500 = 1500 Pa = 1.5 kPa, so the stagnation pressure is 90.0 + 1.5 = 91.5 kPa. Subtracting gives 88.5 kPa, leaving out the ½ gives 93.0 kPa, and 90.03 kPa forgets to square the speed.`,
      },
      {
        question: r`A pitot tube in a canal shows a stagnation pressure of 108 kPa at its tip. The water (ρ = 1000 kg/m³) flows past it at 2 m/s. What is the static pressure of the water?`,
        options: [r`106 kPa`, r`110 kPa`, r`104 kPa`, r`107 kPa`],
        correctAnswer: 0,
        explanation: r`Stagnation pressure = P + ½ρv², and ½ρv² = ½ × 1000 × 2² = 2000 Pa = 2 kPa, so P = 108 − 2 = 106 kPa. Adding the 2 kPa gives 110 kPa, leaving out the ½ gives 104 kPa, and 107 kPa forgets to square the speed.`,
      },
      {
        question: r`A liquid flows at 4 m/s past a pitot tube in a process line. The side port reads a static pressure of 150 kPa and the tip reads a stagnation pressure of 160 kPa. What is the liquid's density?`,
        options: [r`625 kg/m³`, r`1250 kg/m³`, r`5000 kg/m³`, r`2500 kg/m³`],
        correctAnswer: 1,
        explanation: r`The tip is above the static pressure by ½ρv² = 10 kPa = 10,000 Pa, so ρ = 2 × 10,000 ÷ 4² = 20,000 ÷ 16 = 1250 kg/m³. Leaving out the factor of 2 gives 625 kg/m³, forgetting to square the speed gives 5000 kg/m³, and 2500 kg/m³ divides 10,000 by the speed alone.`,
      },
      {
        question: r`Brine of density 1200 kg/m³ flows at 5 m/s past a pitot tube. The static pressure of the brine is 200 kPa. What is the stagnation pressure at the tube's tip?`,
        options: [r`230 kPa`, r`203 kPa`, r`185 kPa`, r`215 kPa`],
        correctAnswer: 3,
        explanation: r`½ρv² = ½ × 1200 × 5² = 600 × 25 = 15,000 Pa = 15 kPa, so the stagnation pressure is 200 + 15 = 215 kPa. Leaving out the ½ gives 230 kPa, forgetting to square the speed gives 203 kPa, and 185 kPa subtracts the 15 kPa.`,
      },
      {
        question: r`In a stream of static pressure 100 kPa, a pitot tube's tip reads a stagnation pressure of 102 kPa. The stream's speed is then doubled, with its static pressure and density unchanged. What does the tip read now?`,
        options: [r`108 kPa`, r`104 kPa`, r`204 kPa`, r`116 kPa`],
        correctAnswer: 0,
        explanation: r`At first ½ρv² = 102 − 100 = 2 kPa. Doubling the speed makes that term 2² = 4 times as large, 8 kPa, so the tip reads 100 + 8 = 108 kPa. The value 104 kPa doubles the 2 kPa, 204 kPa doubles the whole reading, and 116 kPa multiplies the 2 kPa by 8.`,
      },
      {
        question: r`A car is driven at 72 km/h through still air of density 1.2 kg/m³. A pitot tube on its roof has a side port that reads a static pressure of 95.00 kPa. What is the stagnation pressure at the tube's tip?`,
        options: [r`98.11 kPa`, r`95.48 kPa`, r`95.24 kPa`, r`94.76 kPa`],
        correctAnswer: 2,
        explanation: r`72 km/h is 20 m/s, so ½ρv² = ½ × 1.2 × 20² = 0.6 × 400 = 240 Pa = 0.24 kPa, and the tip reads 95.00 + 0.24 = 95.24 kPa. Using 72 without converting gives about 98.11 kPa, leaving out the ½ gives 95.48 kPa, and 94.76 kPa subtracts the 0.24 kPa.`,
      },
    ],
  },
  [r`How does a pitot tube's reading give the speed of the stream?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pitot tube on the roof of a train shows 540 Pa between its tip and its side port. The air has a density of 1.2 kg/m³ and is still relative to the ground. How fast is the train moving?`,
        options: [r`21 m/s`, r`42 m/s`, r`900 m/s`, r`30 m/s`],
        correctAnswer: 3,
        explanation: r`v = √(2ΔP/ρ) = √(2 × 540 ÷ 1.2) = √900 = 30 m/s. Leaving out the factor of 2 gives √450, about 21 m/s. Doubling twice gives √1800, about 42 m/s, and 900 m/s forgets to take the square root.`,
      },
      {
        question: r`A pitot tube is fixed inside a city water main. Its gauge shows 8.0 kPa between the tip and the side port, and the water's density is 1000 kg/m³. What is the speed of the water in the main?`,
        options: [r`4.0 m/s`, r`2.8 m/s`, r`0.13 m/s`, r`16 m/s`],
        correctAnswer: 0,
        explanation: r`8.0 kPa is 8000 Pa, so v = √(2 × 8000 ÷ 1000) = √16 = 4.0 m/s. Leaving out the factor of 2 gives √8, about 2.8 m/s. Using 8.0 without converting to pascals gives about 0.13 m/s, and 16 m/s forgets to take the square root.`,
      },
      {
        question: r`A wind tunnel is set so that air of density 1.2 kg/m³ flows past a pitot tube at 20 m/s. What pressure difference should the gauge show between the tube's tip and its side port?`,
        options: [r`480 Pa`, r`12 Pa`, r`240 Pa`, r`24 Pa`],
        correctAnswer: 2,
        explanation: r`The gauge reads stagnation minus static pressure: ΔP = ½ρv² = ½ × 1.2 × 20² = 0.6 × 400 = 240 Pa. Leaving out the ½ gives 480 Pa, forgetting to square the speed gives 12 Pa, and 24 Pa makes both of those mistakes.`,
      },
      {
        question: r`A liquid flows at 3 m/s past a pitot tube in a refinery line. The gauge shows 5400 Pa between the tube's tip and its side port. What is the density of the liquid?`,
        options: [r`600 kg/m³`, r`1200 kg/m³`, r`3600 kg/m³`, r`1800 kg/m³`],
        correctAnswer: 1,
        explanation: r`ΔP = ½ρv², so ρ = 2ΔP/v² = 2 × 5400 ÷ 3² = 10,800 ÷ 9 = 1200 kg/m³. Leaving out the factor of 2 gives 600 kg/m³, forgetting to square the speed gives 3600 kg/m³, and 1800 kg/m³ divides 5400 by the speed alone.`,
      },
      {
        question: r`At sea level, where air has a density of 1.2 kg/m³, an aircraft's pitot gauge shows a certain reading at 60 m/s. At high altitude the air's density is 0.30 kg/m³. What airspeed gives the same gauge reading there?`,
        options: [r`120 m/s`, r`240 m/s`, r`30 m/s`, r`15 m/s`],
        correctAnswer: 0,
        explanation: r`v = √(2ΔP/ρ), so at a fixed reading the speed goes as 1/√ρ. The density is one-quarter as large, so the speed is √4 = 2 times as large: 120 m/s. A factor of 4 gives 240 m/s, and 30 m/s and 15 m/s scale the speed the wrong way.`,
      },
      {
        question: r`On its landing approach, an aircraft's pitot tube shows a stagnation pressure 2.16 kPa above the static pressure. The air's density is 1.2 kg/m³. What is the aircraft's airspeed?`,
        options: [r`1.9 m/s`, r`42 m/s`, r`3600 m/s`, r`60 m/s`],
        correctAnswer: 3,
        explanation: r`2.16 kPa is 2160 Pa, so v = √(2 × 2160 ÷ 1.2) = √3600 = 60 m/s. Using 2.16 without converting to pascals gives about 1.9 m/s, leaving out the factor of 2 gives about 42 m/s, and 3600 m/s forgets to take the square root.`,
      },
    ],
  },
  [r`Why can the pitot formula not be used for a Venturi meter?`]: {
    kind: 'concept',
    more: [
      {
        question: r`For which pair of points does the pressure difference in an ideal fluid equal ½ρv², with only ONE speed in it?`,
        options: [r`The wide section and the throat of a horizontal Venturi meter`, r`The tip and the side port of a pitot tube in a wind tunnel`, r`The top and the bottom surface of a wing in level flight`, r`The wide part and the narrow part of a level garden hose`],
        correctAnswer: 1,
        explanation: r`At a pitot tube's tip the fluid is at rest, so that point's speed term is zero and only the stream's speed is left. In a Venturi meter, around a wing and in a narrowing hose the fluid is moving at both points, so the pressure difference is ½ρ times the difference of the two squared speeds.`,
      },
      {
        question: r`A student writes Bernoulli's equation for two points at the same height in an ideal fluid, and it reduces to ΔP = ½ρv² with a single speed v. What must be true of the two points?`,
        options: [r`The fluid has the same speed at the two points`, r`The fluid has the same pressure at the two points`, r`The fluid is at rest at one of the two points`, r`The fluid is at rest at both of the two points`],
        correctAnswer: 2,
        explanation: r`In general ΔP = ½ρ(v₂² − v₁²). One speed drops out only if the fluid is at rest at one point, as at a pitot tube's tip. Equal speeds, or rest at both points, would make the pressure difference zero, and equal pressures would mean there is no ΔP at all. A Venturi meter has two nonzero speeds, so it never reduces this way.`,
      },
    ],
  },
  [r`How does an atomizer lift liquid up its tube?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A gardener's sprayer works like an atomizer: fast air crosses the top of a tube that dips into an open jar of plant food. Which change would stop the liquid from rising in the tube?`,
        options: [r`Stopping the stream of air across the top of the tube`, r`Speeding up the stream of air across the top of the tube`, r`Leaving the jar's surface open to the still air around it`, r`Using a shorter tube that still dips into the liquid`],
        correctAnswer: 0,
        explanation: r`The liquid rises because the fast air lowers the pressure at the top of the tube, while atmospheric pressure on the jar's surface pushes from below. With no stream, both ends of the tube are at atmospheric pressure and nothing pushes the liquid up. A faster stream lifts more, the open jar supplies the push, and a shorter tube is easier to fill.`,
      },
      {
        question: r`The bulb of an atomizer is squeezed harder, so the stream of air across the top of its tube is faster than before. What happens to the pressure at the top of the tube and to the liquid in the tube?`,
        options: [r`The pressure there is higher, so the liquid is pushed up farther`, r`The pressure there is lower, so the liquid is pushed up less far`, r`The pressure there is higher, so the liquid is pushed up less far`, r`The pressure there is lower, so the liquid is pushed up farther`],
        correctAnswer: 3,
        explanation: r`Faster air has a lower pressure, so the gap between atmospheric pressure on the jar and the pressure at the top of the tube grows. That larger difference pushes the liquid farther up the tube. Faster air never raises the pressure, and a lower pressure at the top cannot reduce the push from below.`,
      },
    ],
  },
  [r`How does a wing produce lift?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In level flight, the air pressure is 80.0 kPa just beneath a small aircraft's wing and 79.5 kPa just above it. The wing's area is 30 m². What net force does the air exert on the wing?`,
        options: [r`15,000 N, directed downward`, r`15,000 N, directed upward`, r`15 N, directed upward`, r`150,000 N, directed upward`],
        correctAnswer: 1,
        explanation: r`ΔP = 80.0 − 79.5 = 0.5 kPa = 500 Pa, and F = ΔP · A = 500 × 30 = 15,000 N. The larger pressure is beneath the wing, so the net force is upward. The value 15 N leaves the pressure in kilopascals, and 150,000 N slips a power of ten.`,
      },
      {
        question: r`An aircraft that weighs 60,000 N flies level at constant speed, so the lift on its wing equals its weight. The wing's area is 40 m². By how much does the pressure beneath the wing exceed the pressure on top?`,
        options: [r`150 Pa`, r`15,000 Pa`, r`1500 Pa`, r`2,400,000 Pa`],
        correctAnswer: 2,
        explanation: r`F = ΔP · A, so ΔP = F/A = 60,000 ÷ 40 = 1500 Pa. The values 150 Pa and 15,000 Pa slip a power of ten in the division, and 2,400,000 Pa multiplies the force by the area instead of dividing.`,
      },
      {
        question: r`A hang glider and its pilot weigh 1200 N in total. In steady level gliding, the pressure beneath the wing is 80 Pa higher than the pressure on top, and the lift equals the weight. What is the wing's area?`,
        options: [r`15 m²`, r`0.067 m²`, r`96,000 m²`, r`150 m²`],
        correctAnswer: 0,
        explanation: r`F = ΔP · A, so A = F/ΔP = 1200 ÷ 80 = 15 m². Inverting the fraction gives 0.067 m², multiplying the two numbers gives 96,000 m², and 150 m² slips a power of ten.`,
      },
      {
        question: r`A balsa model has a wing of area 500 cm². In flight, the air moves faster over the wing's top, and the pressure there is 40 Pa lower than beneath the wing. What lift does the wing produce?`,
        options: [r`200 N`, r`20,000 N`, r`800 N`, r`2.0 N`],
        correctAnswer: 3,
        explanation: r`500 cm² is 500 × 10⁻⁴ m² = 0.050 m², so F = ΔP · A = 40 × 0.050 = 2.0 N. Using 500 without converting gives 20,000 N, treating 1 cm² as 10⁻² m² gives 200 N, and 800 N divides the pressure difference by the area.`,
      },
      {
        question: r`A race car's rear wing is mounted upside down, so air moves faster beneath it. At speed, the pressure is 101.0 kPa on top of the wing and 100.4 kPa beneath it. The wing's area is 1.5 m². What net force does the air exert on the wing?`,
        options: [r`900 N, directed upward`, r`0.90 N, directed downward`, r`900 N, directed downward`, r`400 N, directed downward`],
        correctAnswer: 2,
        explanation: r`ΔP = 101.0 − 100.4 = 0.6 kPa = 600 Pa, and F = ΔP · A = 600 × 1.5 = 900 N. Here the larger pressure is on top, so the net force is downward. The value 0.90 N leaves the pressure in kilopascals, and 400 N divides by the area instead of multiplying.`,
      },
      {
        question: r`A small aircraft has two wings, each of area 12 m². In level flight, the pressure beneath each wing is 2.0 kPa higher than the pressure on top of it. What is the total lift on the aircraft's wings?`,
        options: [r`24,000 N`, r`48,000 N`, r`48 N`, r`96,000 N`],
        correctAnswer: 1,
        explanation: r`The total area is 2 × 12 = 24 m² and ΔP = 2.0 kPa = 2000 Pa, so F = ΔP · A = 2000 × 24 = 48,000 N. The value 24,000 N counts one wing only, 48 N leaves the pressure in kilopascals, and 96,000 N doubles for the two wings twice.`,
      },
    ],
  },
  [r`What are the steps from a Venturi meter's height difference to its flow rate?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A desalination plant draws seawater through a level Venturi meter. The meter's wide section is 30 cm² in cross-sectional area and its throat is 10 cm². The seawater stands 6.4 cm lower in the open tube above the throat than in the open tube above the wide section. Taking g = 10 m/s² and ideal flow, how many liters pass each second?`,
        options: [r`0.40 L/s`, r`3.6 L/s`, r`1.2 L/s`, r`3.4 L/s`],
        correctAnswer: 2,
        explanation: r`ΔP = ρgΔh = ρ × 0.64. Continuity gives v₂ = 3v₁, so ρ × 0.64 = ½ρ(9v₁² − v₁²) = 4ρv₁² and v₁ = 0.40 m/s. Then Q = A₁v₁ = 30 × 10⁻⁴ × 0.40 = 1.2 × 10⁻³ m³/s = 1.2 L/s. Pairing v₁ with the throat's area gives 0.40 L/s, pairing v₂ with the wide area gives 3.6 L/s, and 3.4 L/s comes from ΔP = ½ρv² with one speed.`,
      },
      {
        question: r`A pipeline carries crude oil through a level Venturi meter. The meter's wide section is 50 cm² in cross-sectional area and its throat is 10 cm², and the two open tubes show oil levels 0.30 m apart. Taking g = 10 m/s² and ideal flow, what is the flow rate of the oil?`,
        options: [r`0.50 L/s`, r`12.5 L/s`, r`25 L/s`, r`2.5 L/s`],
        correctAnswer: 3,
        explanation: r`ρgΔh = ρ × 3.0, and v₂ = 5v₁, so ρ × 3.0 = ½ρ(25v₁² − v₁²) = 12ρv₁² and v₁ = 0.50 m/s. The density cancels. Then Q = A₁v₁ = 50 × 10⁻⁴ × 0.50 = 2.5 × 10⁻³ m³/s = 2.5 L/s. Using the throat's area with v₁ gives 0.50 L/s, using the wide area with v₂ gives 12.5 L/s, and 25 L/s slips a power of ten in the conversion.`,
      },
      {
        question: r`A machine tool's coolant passes through a level Venturi meter. The wide section is 40 cm² in cross-sectional area and the throat is 20 cm², and the coolant stands 5.4 cm lower in the open tube above the throat than in the other open tube. Taking g = 10 m/s² and ideal flow, what is the flow rate in SI units?`,
        options: [r`1.2 × 10⁻³ m³/s`, r`2.4 × 10⁻³ m³/s`, r`2.4 × 10⁻¹ m³/s`, r`4.8 × 10⁻³ m³/s`],
        correctAnswer: 1,
        explanation: r`ρgΔh = ρ × 0.54, and v₂ = 2v₁, so ρ × 0.54 = ½ρ(4v₁² − v₁²) = 1.5ρv₁², giving v₁² = 0.36 and v₁ = 0.60 m/s. Then Q = A₁v₁ = 40 × 10⁻⁴ × 0.60 = 2.4 × 10⁻³ m³/s. Pairing v₁ with the throat's area gives 1.2 × 10⁻³, pairing v₂ with the wide area gives 4.8 × 10⁻³, and 2.4 × 10⁻¹ treats 1 cm² as 10⁻² m².`,
      },
      {
        question: r`A pump drives 0.60 L of solvent each second through a level Venturi meter. The wide section is 12 cm² in cross-sectional area and the throat is 4.0 cm². Taking g = 10 m/s² and ideal flow, how far apart are the solvent levels in the meter's two open tubes?`,
        options: [r`10 cm`, r`5.0 cm`, r`11 cm`, r`100 cm`],
        correctAnswer: 0,
        explanation: r`Working the steps backward: v₁ = Q/A₁ = (6.0 × 10⁻⁴) ÷ (12 × 10⁻⁴) = 0.50 m/s and v₂ = 1.5 m/s. Then gΔh = ½(1.5² − 0.50²) = 1.0, so Δh = 0.10 m = 10 cm. Squaring the difference of the speeds gives 5.0 cm, using the throat's speed alone gives about 11 cm, and leaving out g gives 100 cm.`,
      },
      {
        question: r`A horizontal Venturi meter on a filling line has a wide section of cross-sectional area 10 cm² and a throat of area 2.5 cm². The liquid levels in its two open tubes differ by 0.27 m. With g = 10 m/s² and ideal flow, how long does the line take to fill a 30 L drum?`,
        options: [r`12.5 s`, r`200 s`, r`18 s`, r`50 s`],
        correctAnswer: 3,
        explanation: r`gΔh = 2.7, and v₂ = 4v₁, so 2.7 = ½(16v₁² − v₁²) = 7.5v₁², giving v₁² = 0.36 and v₁ = 0.60 m/s. Then Q = A₁v₁ = 10 × 10⁻⁴ × 0.60 = 6.0 × 10⁻⁴ m³/s = 0.60 L/s, and 30 L takes 30 ÷ 0.60 = 50 s. Pairing v₂ with the wide area gives 12.5 s, pairing v₁ with the throat's area gives 200 s, and 18 s multiplies 30 by 0.60.`,
      },
      {
        question: r`A dairy pumps milk through a level Venturi meter. The wide section is 60 cm² in cross-sectional area and the throat is 20 cm², and the milk stands 3.6 cm lower in the open tube above the throat than in the other open tube. Taking g = 10 m/s² and ideal flow, how much milk passes each minute?`,
        options: [r`108 L`, r`36 L`, r`324 L`, r`1.8 L`],
        correctAnswer: 0,
        explanation: r`gΔh = 0.36, and v₂ = 3v₁, so 0.36 = ½(9v₁² − v₁²) = 4v₁² and v₁ = 0.30 m/s. Then Q = A₁v₁ = 60 × 10⁻⁴ × 0.30 = 1.8 × 10⁻³ m³/s = 1.8 L/s, which is 108 L each minute. Pairing v₁ with the throat's area gives 36 L, pairing v₂ with the wide area gives 324 L, and 1.8 L is the amount for one second.`,
      },
    ],
  },
  [r`A Venturi meter's throat has one-third of the wide section's area. What does the pressure difference reduce to?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The throat of a Venturi meter has one-half of the wide section's cross-sectional area. In terms of the speed v₁ in the wide section and the density ρ, what does the pressure difference between the two sections reduce to?`,
        options: [r`$1.5 \rho v_1^2$`, r`$2 \rho v_1^2$`, r`$0.5 \rho v_1^2$`, r`$3 \rho v_1^2$`],
        correctAnswer: 0,
        explanation: r`Continuity gives v₂ = 2v₁, so ΔP = ½ρ(4v₁² − v₁²) = 1.5ρv₁². Leaving out the wide section's speed gives 2ρv₁², squaring the difference of the speeds gives 0.5ρv₁², and 3ρv₁² drops the factor of ½.`,
      },
      {
        question: r`The throat of a Venturi meter has one-quarter of the wide section's cross-sectional area. In terms of the speed v₁ in the wide section and the density ρ, what is the pressure difference between the two sections?`,
        options: [r`$8 \rho v_1^2$`, r`$7.5 \rho v_1^2$`, r`$4.5 \rho v_1^2$`, r`$15 \rho v_1^2$`],
        correctAnswer: 1,
        explanation: r`Continuity gives v₂ = 4v₁, so ΔP = ½ρ(16v₁² − v₁²) = 7.5ρv₁². Leaving out the wide section's speed gives 8ρv₁², squaring the difference of the speeds gives 4.5ρv₁², and 15ρv₁² drops the factor of ½.`,
      },
      {
        question: r`A horizontal Venturi meter's throat has one-third of the wide section's cross-sectional area. Water (ρ = 1000 kg/m³) moves at 0.50 m/s in the wide section. What is the pressure difference between the two sections?`,
        options: [r`2000 Pa`, r`500 Pa`, r`1125 Pa`, r`1000 Pa`],
        correctAnswer: 3,
        explanation: r`With v₂ = 3v₁, ΔP = ½ρ(9v₁² − v₁²) = 4ρv₁² = 4 × 1000 × 0.50² = 1000 Pa. The value 2000 Pa forgets to square the speed, 500 Pa squares the difference of the speeds, and 1125 Pa uses the throat's speed of 1.5 m/s alone.`,
      },
      {
        question: r`A horizontal Venturi meter's throat has one-third of the wide section's cross-sectional area. It carries an oil of density 900 kg/m³, and the pressure difference between the two sections is 14,400 Pa. How fast is the oil in the wide section?`,
        options: [r`5.7 m/s`, r`4.0 m/s`, r`2.0 m/s`, r`6.0 m/s`],
        correctAnswer: 2,
        explanation: r`For a throat of one-third the area, ΔP = 4ρv₁², so v₁² = 14,400 ÷ (4 × 900) = 4 and v₁ = 2.0 m/s. Setting ΔP = ½ρv² with one speed gives about 5.7 m/s, 4.0 m/s forgets the square root, and 6.0 m/s is the speed in the throat.`,
      },
      {
        question: r`A Venturi meter's throat has one-third of the wide section's cross-sectional area. In terms of the speed v₂ in the THROAT and the density ρ, what does the pressure difference between the two sections reduce to?`,
        options: [r`$4 \rho v_2^2$`, r`$\tfrac49 \rho v_2^2$`, r`$\tfrac12 \rho v_2^2$`, r`$\tfrac29 \rho v_2^2$`],
        correctAnswer: 1,
        explanation: r`Continuity gives v₁ = v₂/3, so ΔP = ½ρ(v₂² − v₂²/9) = ½ρ × (8/9)v₂² = (4/9)ρv₂². The form 4ρv₂² belongs with the wide section's speed, ½ρv₂² leaves out the wide section's speed, and (2/9)ρv₂² squares the difference of the speeds.`,
      },
      {
        question: r`The throat of a Venturi meter has one-third of the wide section's DIAMETER. In terms of the speed v₁ in the wide section and the density ρ, what does the pressure difference between the two sections reduce to?`,
        options: [r`$4 \rho v_1^2$`, r`$40.5 \rho v_1^2$`, r`$40 \rho v_1^2$`, r`$32 \rho v_1^2$`],
        correctAnswer: 2,
        explanation: r`One-third of the diameter means one-ninth of the area, so v₂ = 9v₁ and ΔP = ½ρ(81v₁² − v₁²) = 40ρv₁². Treating the diameter ratio as the area ratio gives 4ρv₁², leaving out the wide section's speed gives 40.5ρv₁², and squaring the difference of the speeds gives 32ρv₁².`,
      },
    ],
  },
  [r`What is the common trap when solving a Venturi meter for a speed?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student solves a horizontal Venturi meter whose throat has half the wide section's area. Line 1: ΔP = ρgΔh. Line 2: v₂ = 2v₁. Line 3: ρgΔh = ½ρv₁². Line 4: v₁ = √(2gΔh). What is wrong with the working?`,
        options: [r`Line 1 is wrong: g does not belong in the pressure difference`, r`Line 2 is wrong: the throat's speed should be half of v₁`, r`Line 1 is wrong: Δh should be the level over the throat alone`, r`Line 3 is wrong: both speeds belong in the pressure difference`],
        correctAnswer: 3,
        explanation: r`The liquid is moving in both sections, so Bernoulli gives ρgΔh = ½ρ(v₂² − v₁²), not ½ρv₁² with a single speed. Line 1 is right, since the pressure difference is ρgΔh with g included and Δh the gap between the two levels. Line 2 is right, since half the area means twice the speed.`,
      },
      {
        question: r`The water levels (ρ = 1000 kg/m³) in a Venturi meter's two open tubes differ by 0.20 m. A student reports the pressure difference between the wide section and the throat as 200 Pa. With g = 10 m/s², what did he do?`,
        options: [r`He left g out of ρgΔh; the true value is 2000 Pa`, r`He left ρ out of ρgΔh; the true value is 2000 Pa`, r`He left g out of ρgΔh; the true value is 20 Pa`, r`He put g in twice in ρgΔh; the true value is 20 Pa`],
        correctAnswer: 0,
        explanation: r`ρgΔh = 1000 × 10 × 0.20 = 2000 Pa, and the student's 200 Pa is 1000 × 0.20, the product without g. Leaving out ρ would give 2, not 200. The true value is 2000 Pa, so the options that state 20 Pa are wrong.`,
      },
    ],
  },
  [r`Which density goes into the pitot-tube formula?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A speedboat crosses a lake on a windless day. A pitot tube fixed beneath its hull, fully under the water, measures the boat's speed through the water. Which density goes into v = √(2ΔP/ρ)?`,
        options: [r`That of air, the fluid above the surface of the lake`, r`That of the hull, the body that the tube is fixed to`, r`That of water, the fluid that moves past the tube`, r`That of air, the fluid that fills the boat's cabin`],
        correctAnswer: 2,
        explanation: r`The formula comes from the kinetic energy of the fluid that is stopped at the tip, so ρ is the density of the fluid moving past the tube. Here that is water, about 1000 kg/m³. The air above the lake or in the cabin never meets the tip, and the hull is not a fluid in the flow.`,
      },
      {
        question: r`A student finds an aircraft's airspeed from its pitot tube's reading, but puts the density of water, 1000 kg/m³, into v = √(2ΔP/ρ) in place of the density of air, 1.2 kg/m³. How does his answer compare with the true airspeed?`,
        options: [r`Far too high, because he used a density that is far too high`, r`Far too low, because he used a density that is far too high`, r`Far too low, because he used a density that is far too low`, r`Exactly right, because the density cancels out of the formula`],
        correctAnswer: 1,
        explanation: r`The fluid moving past an aircraft's pitot tube is air, so air's density belongs in the formula. Water's density is far larger, and the density sits in the denominator under the root, so the computed speed comes out far too low. The density does not cancel, and water is denser than air, not less dense.`,
      },
    ],
  },
  [r`How do you find the pressure difference across a wing from the air speeds above and below it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Air of density 1.2 kg/m³ moves at 25 m/s over the top of a model aircraft's wing and at 15 m/s beneath it. Treating the air as ideal and ignoring the wing's thickness, how much lower is the pressure on top of the wing?`,
        options: [r`60 Pa`, r`240 Pa`, r`6 Pa`, r`480 Pa`],
        correctAnswer: 1,
        explanation: r`Square each speed first: ΔP = ½ × 1.2 × (25² − 15²) = 0.6 × (625 − 225) = 0.6 × 400 = 240 Pa. Squaring the difference of the speeds gives 60 Pa, not squaring at all gives 6 Pa, and 480 Pa drops the factor of ½.`,
      },
      {
        question: r`A turboprop flies through air of density 1.2 kg/m³. The air moves at 80 m/s over the top of its wing and at 70 m/s beneath it. Treating the air as ideal and ignoring the wing's thickness, what is the pressure difference across the wing?`,
        options: [r`900 Pa`, r`60 Pa`, r`1800 Pa`, r`1500 Pa`],
        correctAnswer: 0,
        explanation: r`ΔP = ½ × 1.2 × (80² − 70²) = 0.6 × (6400 − 4900) = 0.6 × 1500 = 900 Pa. Squaring the difference of the speeds gives only 60 Pa, 1800 Pa drops the factor of ½, and 1500 is the difference of the squares with ½ρ left out.`,
      },
      {
        question: r`Air of density 1.2 kg/m³ moves at 10 m/s beneath a drone's wing. The pressure on top of the wing is 180 Pa lower than the pressure beneath it. Treating the air as ideal and ignoring the wing's thickness, how fast does the air move over the top?`,
        options: [r`17 m/s`, r`27 m/s`, r`20 m/s`, r`400 m/s`],
        correctAnswer: 2,
        explanation: r`180 = 0.6 × (v² − 10²), so v² − 100 = 300, v² = 400 and v = 20 m/s. Leaving the bottom speed out gives √300, about 17 m/s. Adding √300 to 10 m/s gives about 27 m/s, and 400 m/s forgets the square root.`,
      },
      {
        question: r`A jet cruises where the air's density is 0.60 kg/m³. The air moves at 100 m/s over the top of its wing and at 90 m/s beneath it. Treating the air as ideal and ignoring the wing's thickness, what is the pressure difference across the wing?`,
        options: [r`30 Pa`, r`1140 Pa`, r`1900 Pa`, r`570 Pa`],
        correctAnswer: 3,
        explanation: r`ΔP = ½ × 0.60 × (100² − 90²) = 0.30 × (10,000 − 8100) = 0.30 × 1900 = 570 Pa. Squaring the difference of the speeds gives 30 Pa, 1140 Pa drops the factor of ½, and 1900 is the difference of the squares with ½ρ left out.`,
      },
      {
        question: r`At one airspeed, the pressure difference across a wing is 200 Pa. The pilot speeds up until the air speeds over the top and beneath the wing are both twice as large, in air of the same density. What is the pressure difference now?`,
        options: [r`800 Pa`, r`400 Pa`, r`1600 Pa`, r`280 Pa`],
        correctAnswer: 0,
        explanation: r`ΔP = ½ρ(v_top² − v_bottom²). Doubling both speeds makes each squared term 4 times as large, so their difference is 4 times as large: 200 × 4 = 800 Pa. The value 400 Pa scales linearly, 1600 Pa uses a factor of 8, and 280 Pa uses the square root of 2.`,
      },
      {
        question: r`An ultralight flies through air of density 1.2 kg/m³. The air moves at 108 km/h over the top of its wing and at 72 km/h beneath it. Treating the air as ideal and ignoring the wing's thickness, what is the pressure difference across the wing?`,
        options: [r`3888 Pa`, r`60 Pa`, r`600 Pa`, r`300 Pa`],
        correctAnswer: 3,
        explanation: r`108 km/h is 30 m/s and 72 km/h is 20 m/s, so ΔP = ½ × 1.2 × (30² − 20²) = 0.6 × 500 = 300 Pa. Using the speeds in km/h gives 3888 Pa, squaring the difference of the speeds gives 60 Pa, and 600 Pa drops the factor of ½.`,
      },
    ],
  },
  [r`A question gives the pressure difference across a wing and asks for the lift. What is the last step?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The pressure beneath a glider's wing is 400 Pa higher than the pressure on top of it. The wing's area is 16 m². What is the lift on the wing?`,
        options: [r`400 N`, r`25 N`, r`6400 N`, r`3200 N`],
        correctAnswer: 2,
        explanation: r`The last step is F = ΔP · A = 400 × 16 = 6400 N. The value 400 N stops at the pressure difference and only changes its unit, 25 N divides by the area instead of multiplying, and 3200 N puts in a factor of ½ that belongs only in the step from speeds to pressure.`,
      },
      {
        question: r`Air of density 1.2 kg/m³ moves at 35 m/s over the top of a light aircraft's wing and at 25 m/s beneath it. The wing's area is 5.0 m². Treating the air as ideal, what is the lift on the wing?`,
        options: [r`360 N`, r`1800 N`, r`300 N`, r`3600 N`],
        correctAnswer: 1,
        explanation: r`ΔP = ½ × 1.2 × (35² − 25²) = 0.6 × (1225 − 625) = 360 Pa, and the last step is F = ΔP · A = 360 × 5.0 = 1800 N. The value 360 N stops at the pressure difference, 300 N squares the difference of the speeds, and 3600 N drops the factor of ½.`,
      },
      {
        question: r`In cruise, the pressure difference across an aircraft's wing is 1.2 kPa. The wing's area is 25 m². What is the lift on the wing?`,
        options: [r`30 N`, r`1200 N`, r`48 N`, r`30,000 N`],
        correctAnswer: 3,
        explanation: r`1.2 kPa is 1200 Pa, so F = ΔP · A = 1200 × 25 = 30,000 N. The value 30 N leaves the pressure in kilopascals, 1200 N stops at the pressure difference, and 48 N divides 1200 by 25.`,
      },
      {
        question: r`The pressure beneath a small aircraft's wing is 500 Pa higher than the pressure on top of it. The wing's area is 18 m², and the aircraft weighs 8000 N. What is the net vertical force on the aircraft?`,
        options: [r`1000 N upward`, r`9000 N upward`, r`7500 N downward`, r`17,000 N upward`],
        correctAnswer: 0,
        explanation: r`The lift is F = ΔP · A = 500 × 18 = 9000 N upward, and the weight is 8000 N downward, so the net force is 1000 N upward. The value 9000 N is the lift alone, 7500 N subtracts the weight from the pressure difference without multiplying by the area, and 17,000 N adds the lift and the weight.`,
      },
      {
        question: r`A model aircraft's wing has an area of 2000 cm². In a wind tunnel, the pressure difference across the wing is 25 Pa. What is the lift on the wing?`,
        options: [r`50,000 N`, r`5.0 N`, r`25 N`, r`125 N`],
        correctAnswer: 1,
        explanation: r`2000 cm² is 2000 × 10⁻⁴ m² = 0.20 m², so F = ΔP · A = 25 × 0.20 = 5.0 N. Using 2000 without converting gives 50,000 N, 25 N stops at the pressure difference, and 125 N divides by the area instead of multiplying.`,
      },
      {
        question: r`A gliding seabird holds out two wings, each of area 0.15 m². The pressure beneath each wing is 50 Pa higher than the pressure on top of it. What is the total lift on the bird?`,
        options: [r`7.5 N`, r`50 N`, r`15 N`, r`170 N`],
        correctAnswer: 2,
        explanation: r`The total wing area is 2 × 0.15 = 0.30 m², so F = ΔP · A = 50 × 0.30 = 15 N. The value 7.5 N counts one wing only, 50 N stops at the pressure difference, and 170 N divides the pressure difference by the area.`,
      },
    ],
  },
}
