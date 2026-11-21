import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How does heating a metal change its resistance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A platinum-wire thermometer infers temperature from the wire's resistance. During a procedure its reading climbs from 100 Ω to 139 Ω. What happened to the wire, and why?`,
        options: [r`It warmed: heating frees extra electrons to carry the current`, r`It warmed: the lattice vibrates more and scatters electrons more`, r`It cooled: slower electrons take longer to cross the wire`, r`It cooled: a stiller lattice blocks the electrons more often`],
        correctAnswer: 1,
        explanation: r`A metal's resistance rises with temperature because the hotter lattice vibrates more and scatters the drifting electrons more often, so a higher reading means the wire warmed. Freeing extra electrons would lower the resistance, and it describes semiconductors, not metals. The two "cooled" answers have the direction backwards: a cooler metal has a lower resistance.`,
      },
      {
        question: r`A current source holds a steady 2 A in a motor's copper winding. The winding is then chilled from 80 °C to 20 °C. What happens to the voltage across the winding?`,
        options: [r`It rises, because the winding's resistance rises`, r`It falls, because the winding's resistance falls`, r`It holds steady, because the current is fixed`, r`It rises, because cold electrons need a harder push`],
        correctAnswer: 1,
        explanation: r`Cooling a metal lowers its resistance, because the calmer lattice scatters the electrons less often. With the current held at 2 A, V = IR falls with R. A rising resistance belongs to heating, not cooling; a fixed current does not fix the voltage when R changes; and a cold metal conducts more easily, not less.`,
      },
    ],
  },
  [r`How does an axon's internal resistance per length depend on its radius?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A motor neuron's axon has 5 times the radius of a pain fibre's axon, and the cytoplasm inside the two conducts equally well. The motor axon's internal resistance per unit length is what fraction of the pain fibre's?`,
        options: [r`1/25`, r`1/5`, r`1/125`, r`1/625`],
        correctAnswer: 0,
        explanation: r`Internal resistance per length goes as 1/r², through the cross-sectional area, so 5 times the radius gives 1/5² = 1/25. The answer 1/5 uses 1/r, 1/125 uses 1/r³, and 1/625 uses the 1/r⁴ rule that belongs to fluid flow in a tube.`,
      },
      {
        question: r`An axon of radius 2 μm has an internal resistance of 80 MΩ per centimetre of length. What is the internal resistance per centimetre of an axon of radius 4 μm filled with the same axoplasm?`,
        options: [r`40 MΩ`, r`20 MΩ`, r`5 MΩ`, r`320 MΩ`],
        correctAnswer: 1,
        explanation: r`Doubling the radius multiplies the cross-sectional area by 2² = 4, so the resistance per length falls to 80 MΩ ÷ 4 = 20 MΩ. The answer 40 MΩ divides by 2 only, 5 MΩ divides by 2⁴ = 16 as for fluid flow, and 320 MΩ multiplies by 4 when it should divide.`,
      },
      {
        question: r`Recordings from two nerve fibres with identical cytoplasm show that fibre Q's internal resistance per millimetre is 1/36 of fibre P's. How does the radius of Q compare with the radius of P?`,
        options: [r`36 times as large`, r`18 times as large`, r`2.4 times as large`, r`6 times as large`],
        correctAnswer: 3,
        explanation: r`Resistance per length goes as 1/r², so a ratio of 1/36 means r² is 36 times larger and r is √36 = 6 times larger. The answer 36 treats the dependence as 1/r, 18 halves 36 when a square root is needed, and 2.4 is the fourth root of 36, which would fit the 1/r⁴ rule of fluid flow.`,
      },
      {
        question: r`Near its terminal, an axon tapers to one quarter of its original radius, with the same axoplasm inside. By what factor does its internal resistance per unit length rise along the taper?`,
        options: [r`16`, r`4`, r`64`, r`256`],
        correctAnswer: 0,
        explanation: r`The cross-sectional area goes as r², so a quarter of the radius gives 1/16 of the area and 16 times the resistance per length. The answer 4 uses 1/r, 64 uses 1/r³, and 256 uses the 1/r⁴ rule that applies to fluid flow, not to electrical resistance.`,
      },
      {
        question: r`A squid giant axon has a radius of 0.25 mm. A small mammalian axon has a radius of 0.50 μm. With the same axoplasm in both, the small axon's internal resistance per unit length is how many times the giant axon's?`,
        options: [r`5.0 × 10² times`, r`6.25 × 10¹⁰ times`, r`0.25 times`, r`2.5 × 10⁵ times`],
        correctAnswer: 3,
        explanation: r`In the same units the radii are 250 μm and 0.50 μm, a ratio of 500. Resistance per length goes as 1/r², so the small axon's is 500² = 2.5 × 10⁵ times larger. The answer 5.0 × 10² forgets the square, 6.25 × 10¹⁰ uses the fourth power of fluid flow, and 0.25 squares 0.25/0.50 without converting millimetres to micrometres.`,
      },
      {
        question: r`A saline-filled tube of radius 2 mm is used as a model axon and measures 450 Ω per centimetre of length. What does a tube of radius 6 mm, filled with the same saline, measure per centimetre?`,
        options: [r`50 Ω`, r`150 Ω`, r`5.6 Ω`, r`4050 Ω`],
        correctAnswer: 0,
        explanation: r`The radius is 3 times larger, so the area is 3² = 9 times larger and the resistance per length is 450 Ω ÷ 9 = 50 Ω. The answer 150 Ω divides by 3 only, 5.6 Ω divides by 3⁴ = 81 as for fluid flow, and 4050 Ω multiplies by 9 when it should divide.`,
      },
    ],
  },
  [r`Which equation rescales a wire's resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A heater wire is made of an alloy with resistivity 1.0 × 10⁻⁶ Ω·m. The wire is 2.0 m long with a cross-sectional area of 5.0 × 10⁻⁷ m². What is its resistance?`,
        options: [r`4.0 Ω`, r`0.25 Ω`, r`0.40 Ω`, r`40 Ω`],
        correctAnswer: 0,
        explanation: r`R = ρL/A = (1.0 × 10⁻⁶ × 2.0) ÷ (5.0 × 10⁻⁷) = (2.0 × 10⁻⁶) ÷ (5.0 × 10⁻⁷) = 4.0 Ω. The answer 0.25 Ω inverts the fraction to A/(ρL), and 0.40 Ω and 40 Ω each slip one power of ten when dividing 10⁻⁶ by 10⁻⁷.`,
      },
      {
        question: r`A metal has a resistivity of 2.0 × 10⁻⁸ Ω·m. A wire of this metal with a cross-sectional area of 1.0 × 10⁻⁶ m² must have a resistance of 0.50 Ω. How long must the wire be?`,
        options: [r`100 m`, r`0.040 m`, r`25 m`, r`2.5 m`],
        correctAnswer: 2,
        explanation: r`Rearranging R = ρL/A gives L = RA/ρ = (0.50 × 1.0 × 10⁻⁶) ÷ (2.0 × 10⁻⁸) = (5.0 × 10⁻⁷) ÷ (2.0 × 10⁻⁸) = 25 m. The answer 100 m divides by R when it should multiply, 0.040 m inverts the whole expression to ρ/(RA), and 2.5 m loses a power of ten.`,
      },
      {
        question: r`A column of salt solution of resistivity 0.60 Ω·m is 0.10 m long and has a resistance of 600 Ω between its ends. What is the cross-sectional area of the column?`,
        options: [r`1.0 × 10⁻³ m²`, r`1.0 × 10⁻⁴ m²`, r`1.0 × 10⁴ m²`, r`3.6 × 10¹ m²`],
        correctAnswer: 1,
        explanation: r`Rearranging R = ρL/A gives A = ρL/R = (0.60 × 0.10) ÷ 600 = 0.060 ÷ 600 = 1.0 × 10⁻⁴ m². The answer 1.0 × 10⁻³ m² leaves out the length, 1.0 × 10⁴ m² inverts the fraction to R/(ρL), and 3.6 × 10¹ m² multiplies all three numbers together.`,
      },
      {
        question: r`A graphite rod is 0.10 m long with a cross-sectional area of 2.0 × 10⁻⁶ m². Its resistance, measured end to end, is 2.0 Ω. What is the resistivity of the graphite?`,
        options: [r`4.0 × 10⁻⁷ Ω·m`, r`1.0 × 10⁵ Ω·m`, r`4.0 × 10⁻⁵ Ω·m`, r`1.0 × 10⁻⁵ Ω·m`],
        correctAnswer: 2,
        explanation: r`Rearranging R = ρL/A gives ρ = RA/L = (2.0 × 2.0 × 10⁻⁶) ÷ 0.10 = 4.0 × 10⁻⁵ Ω·m. The answer 4.0 × 10⁻⁷ multiplies by the length when it should divide, 1.0 × 10⁵ swaps length and area to RL/A, and 1.0 × 10⁻⁵ computes A/(RL).`,
      },
      {
        question: r`A strip of muscle tissue has a resistivity of 2.0 Ω·m along its fibres. The strip is 5.0 cm long with a cross-sectional area of 1.0 cm². What is its resistance from end to end?`,
        options: [r`1.0 × 10¹ Ω`, r`1.0 × 10⁻¹ Ω`, r`1.0 × 10⁵ Ω`, r`1.0 × 10³ Ω`],
        correctAnswer: 3,
        explanation: r`Convert first: L = 0.050 m and A = 1.0 × 10⁻⁴ m². Then R = ρL/A = (2.0 × 0.050) ÷ (1.0 × 10⁻⁴) = 1.0 × 10³ Ω. Leaving both in centimetres gives 10 Ω, converting only the length gives 0.10 Ω, and converting only the area gives 1.0 × 10⁵ Ω.`,
      },
      {
        question: r`Wire Y has twice the resistivity, half the length and one quarter of the cross-sectional area of wire X. The resistance of Y is what multiple of the resistance of X?`,
        options: [r`1/4`, r`16`, r`1`, r`4`],
        correctAnswer: 3,
        explanation: r`From R = ρL/A, the factors combine as 2 × (1/2) ÷ (1/4) = 4. The answer 1/4 multiplies by the area factor when it should divide, 16 also turns the halved length into a doubling, and 1 stops after the resistivity and length factors cancel and ignores the area.`,
      },
    ],
  },
  [r`How do you rescale a resistance with factors?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The lead wire of a pacing device has a resistance of 20 Ω. It is replaced by a lead of the same metal and the same length but half the diameter. What is the resistance of the new lead?`,
        options: [r`40 Ω`, r`10 Ω`, r`80 Ω`, r`5.0 Ω`],
        correctAnswer: 2,
        explanation: r`Half the diameter gives an area factor of (1/2)² = 1/4, and dividing by 1/4 multiplies the resistance by 4: 20 Ω × 4 = 80 Ω. The answer 40 Ω forgets to square the diameter factor, 10 Ω also inverts it, and 5.0 Ω squares the factor but multiplies when it should divide.`,
      },
      {
        question: r`A toaster element measures 45 Ω. A replacement is cut from the same alloy with twice the length and 3 times the diameter. What does the replacement measure?`,
        options: [r`10 Ω`, r`30 Ω`, r`810 Ω`, r`2.5 Ω`],
        correctAnswer: 0,
        explanation: r`New R = old R × (length factor) ÷ (diameter factor)² = 45 Ω × 2 ÷ 9 = 10 Ω. The answer 30 Ω divides by 3 without squaring, 810 Ω multiplies by the area factor of 9, and 2.5 Ω divides by the length factor as well as by the area factor.`,
      },
      {
        question: r`A 50 Ω sensor wire must be replaced by a wire of the same metal and the same length that measures only 2.0 Ω. By what factor must the diameter be multiplied?`,
        options: [r`5`, r`25`, r`12.5`, r`625`],
        correctAnswer: 0,
        explanation: r`The resistance must fall by a factor of 50 ÷ 2.0 = 25, so the area factor must be 25 and the diameter factor is √25 = 5. The answer 25 is the area factor, taken as if resistance went as 1/diameter; 12.5 halves 25 when a square root is needed; and 625 squares 25.`,
      },
      {
        question: r`An extension lead is rebuilt with wire of the same metal but double the diameter. Its resistance must come out exactly the same as before. By what factor must the length be multiplied?`,
        options: [r`2 times`, r`1/4 times`, r`4 times`, r`1/2 times`],
        correctAnswer: 2,
        explanation: r`Double the diameter makes the area factor 2² = 4, which alone would cut the resistance to one quarter. A length factor of 4 cancels that, since new R = old R × 4 ÷ 4. The answer "2 times" forgets to square the diameter factor, and the two fractions shorten the wire, which would lower the resistance further.`,
      },
      {
        question: r`A coil is wound from 2.0 m of wire of diameter 0.50 mm and measures 18 Ω. A second coil uses 600 cm of wire of the same metal with a diameter of 1.5 mm. What does the second coil measure?`,
        options: [r`18 Ω`, r`6.0 Ω`, r`2.0 Ω`, r`54 Ω`],
        correctAnswer: 1,
        explanation: r`600 cm is 6.0 m, so the length factor is 3. The diameter factor is 1.5 ÷ 0.50 = 3, so the area factor is 9. New R = 18 Ω × 3 ÷ 9 = 6.0 Ω. The answer 18 Ω forgets to square the diameter factor, 2.0 Ω ignores the extra length, and 54 Ω ignores the thicker wire.`,
      },
      {
        question: r`A length of wire is replaced by a piece of the same metal that is half as long and has half the diameter. By what factor is the resistance multiplied?`,
        options: [r`2`, r`1`, r`1/4`, r`8`],
        correctAnswer: 0,
        explanation: r`The length factor is 1/2 and the area factor is (1/2)² = 1/4, so the resistance is multiplied by (1/2) ÷ (1/4) = 2. The answer 1 forgets to square the diameter factor, 1/4 keeps only the area factor and uses it the wrong way up, and 8 turns the halved length into a doubling.`,
      },
    ],
  },
  [r`A wire is stretched to 3 times its length at constant volume. By what factor does $R$ change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 5.0 Ω copper wire is drawn through a die until it is 4 times its original length, with its volume unchanged. What is its resistance afterwards?`,
        options: [r`80 Ω`, r`20 Ω`, r`40 Ω`, r`320 Ω`],
        correctAnswer: 0,
        explanation: r`At constant volume, 4 times the length means one quarter of the area, so the resistance is multiplied by 4² = 16: 5.0 Ω × 16 = 80 Ω. The answer 20 Ω counts the longer length only, 40 Ω multiplies by 2 × 4, and 320 Ω uses 4³.`,
      },
      {
        question: r`A 2.0 Ω gold wire is drawn out at constant volume until its resistance reads 50 Ω. By what factor has its length been multiplied?`,
        options: [r`25`, r`12.5`, r`625`, r`5`],
        correctAnswer: 3,
        explanation: r`At constant volume the resistance goes as the square of the length factor. The resistance rose by 50 ÷ 2.0 = 25, so the length factor is √25 = 5. The answer 25 forgets that the area shrinks as the wire lengthens, 12.5 halves 25 when a square root is needed, and 625 squares it.`,
      },
      {
        question: r`A strain gauge is a fine metal wire that measures 100 Ω. When the part it is glued to is loaded, the wire stretches to 1.1 times its length at constant volume. What does the gauge read now?`,
        options: [r`110 Ω`, r`121 Ω`, r`100 Ω`, r`91 Ω`],
        correctAnswer: 1,
        explanation: r`At constant volume the area falls to 1/1.1 of its value as the length rises to 1.1 times, so R is multiplied by 1.1² = 1.21, giving 121 Ω. The answer 110 Ω counts the length change only, 100 Ω assumes the two changes cancel, and 91 Ω divides by 1.1.`,
      },
      {
        question: r`A wire is stretched to 5 times its original length with its volume unchanged. What happens to its cross-sectional area and to its resistance?`,
        options: [r`Area ÷ 5 and resistance × 25`, r`Area ÷ 5 and resistance × 5`, r`Area ÷ 25 and resistance × 25`, r`Area × 1 and resistance × 5`],
        correctAnswer: 0,
        explanation: r`Volume is length × area, so 5 times the length means one fifth of the area. Resistance goes as length ÷ area, so it is multiplied by 5 ÷ (1/5) = 25. "Resistance × 5" counts only one of the two changes, "area ÷ 25" squares the wrong quantity, and "area × 1" forgets that the volume is fixed.`,
      },
      {
        question: r`A 64 Ω rod of conductive putty is squashed, with its volume unchanged, into a rod one quarter of its original length. What is its new resistance?`,
        options: [r`4.0 Ω`, r`16 Ω`, r`256 Ω`, r`1024 Ω`],
        correctAnswer: 0,
        explanation: r`One quarter of the length at constant volume means 4 times the area, so the resistance is multiplied by (1/4) ÷ 4 = 1/16: 64 Ω ÷ 16 = 4.0 Ω. The answer 16 Ω counts the shorter length only, and 256 Ω and 1024 Ω multiply by 4 and by 16 as if the rod had been stretched.`,
      },
      {
        question: r`A 50 cm length of wire has a resistance of 20 mΩ. It is drawn out, at constant volume, until it is 5.0 m long. What is its resistance now?`,
        options: [r`0.20 Ω`, r`20 Ω`, r`2000 Ω`, r`2.0 Ω`],
        correctAnswer: 3,
        explanation: r`5.0 m is 500 cm, so the length factor is 10 and the resistance is multiplied by 10² = 100: 20 mΩ × 100 = 2000 mΩ = 2.0 Ω. The answer 0.20 Ω multiplies by 10 only, 20 Ω uses 10³, and 2000 Ω forgets to convert milliohms to ohms.`,
      },
    ],
  },
  [r`How do you read the resistance at one point of an $I$–$V$ graph?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A silicon diode is tested on a lab bench. It conducts 10 mA when the forward voltage is 0.60 V and 40 mA when it is 0.80 V. What is the diode's resistance at the 0.80 V operating point?`,
        options: [r`6.7 Ω`, r`20 Ω`, r`60 Ω`, r`0.020 Ω`],
        correctAnswer: 1,
        explanation: r`The resistance at a point is V/I at that point: 0.80 V ÷ 0.040 A = 20 Ω. The answer 6.7 Ω is the slope between the two points, 0.20 V ÷ 0.030 A; 60 Ω is V/I at the 0.60 V point; and 0.020 Ω divides by 40 without converting milliamps to amps.`,
      },
      {
        question: r`A thermistor's curve passes through 0.10 A at 3.0 V and 0.60 A at 6.0 V. What is the thermistor's resistance while it operates at 3.0 V?`,
        options: [r`6.0 Ω`, r`30 Ω`, r`10 Ω`, r`0.033 Ω`],
        correctAnswer: 1,
        explanation: r`At the 3.0 V point, R = V/I = 3.0 V ÷ 0.10 A = 30 Ω. The answer 6.0 Ω is the slope between the two points, 3.0 V ÷ 0.50 A; 10 Ω is V/I at the 6.0 V point; and 0.033 Ω is I/V, the ratio upside down.`,
      },
      {
        question: r`At its 12 V operating point a lamp filament has a resistance of 48 Ω, although the tangent to its curve there corresponds to 120 Ω. What current does the filament carry at this point?`,
        options: [r`0.25 A`, r`0.10 A`, r`4.0 A`, r`10 A`],
        correctAnswer: 0,
        explanation: r`The resistance at a point is V/I for that point, so I = V/R = 12 V ÷ 48 Ω = 0.25 A. The tangent's 120 Ω is a slope, not the resistance, so 0.10 A is wrong. The answers 4.0 A and 10 A divide each of those numbers by 12 V, the ratio upside down.`,
      },
      {
        question: r`A nonlinear sensor has a resistance of 40 Ω at the point on its curve where it carries 50 mA. What voltage is across the sensor at that point?`,
        options: [r`2000 V`, r`0.80 V`, r`1.25 V`, r`2.0 V`],
        correctAnswer: 3,
        explanation: r`R at a point is V/I at that point, so V = IR = 0.050 A × 40 Ω = 2.0 V. The answer 2000 V multiplies by 50 without converting milliamps to amps, 0.80 V divides 40 by 50, and 1.25 V divides 50 by 40.`,
      },
      {
        question: r`A torch lamp is measured at two settings of a dimmer: 0.20 A at 1.0 V, and 0.40 A at 6.0 V. The lamp's resistance at the brighter setting is how many times its resistance at the dimmer setting?`,
        options: [r`6 times`, r`2 times`, r`3 times`, r`12 times`],
        correctAnswer: 2,
        explanation: r`Use V/I at each point: 1.0 V ÷ 0.20 A = 5.0 Ω and 6.0 V ÷ 0.40 A = 15 Ω, a ratio of 3. The answer 6 is the ratio of the voltages alone, 2 is the ratio of the currents alone, and 12 multiplies those two ratios when they should be divided.`,
      },
      {
        question: r`An element's graph of voltage against current is a straight line that misses the origin: it passes through 0 A at 2.0 V and 0.50 A at 4.0 V. What is the element's resistance, V/I, at the 4.0 V point?`,
        options: [r`4.0 Ω`, r`8.0 Ω`, r`0.125 Ω`, r`0.25 Ω`],
        correctAnswer: 1,
        explanation: r`At the 4.0 V point, R = V/I = 4.0 V ÷ 0.50 A = 8.0 Ω. The line does not pass through the origin, so its slope, 2.0 V ÷ 0.50 A = 4.0 Ω, is not the resistance. The answers 0.125 Ω and 0.25 Ω are those two ratios upside down.`,
      },
    ],
  },
  [r`How does $V/I$ behave along an ohmic line, and along a filament curve?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A filament lamp carries 0.25 A at 1 V, so its V/I there is 4 Ω. Which current is a possible reading for the same lamp at 6 V, where the filament is much hotter?`,
        options: [r`1.5 A`, r`2.0 A`, r`6.0 A`, r`1.0 A`],
        correctAnswer: 3,
        explanation: r`A filament's V/I grows as it heats, so at 6 V the ratio must be more than 4 Ω, which means a current below 6 V ÷ 4 Ω = 1.5 A. Only 1.0 A fits, giving 6 Ω. A current of 1.5 A would keep V/I at 4 Ω, which is ohmic behaviour, and 2.0 A or 6.0 A would mean V/I had fallen to 3 Ω or 1 Ω.`,
      },
      {
        question: r`A student divides V by I at many points for a carbon resistor (ohmic) and for a filament lamp, then plots each V/I against V. What do the two plots look like?`,
        options: [r`Rising for the resistor, flat for the lamp`, r`Rising for both, and steeper for the lamp`, r`Flat for both, and higher for the lamp`, r`Flat for the resistor, rising for the lamp`],
        correctAnswer: 3,
        explanation: r`An ohmic element has the same V/I at every point, so its plot is a flat line. A filament's V/I grows as the higher voltage heats it, so its plot rises. The reversed answer swaps the two elements, "rising for both" denies that the resistor is ohmic, and "flat for both" ignores the filament's heating.`,
      },
    ],
  },
  [r`What does $R_{eq}$ stand for, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sealed box holds several resistors wired in an unknown pattern. A technician swaps the whole box for one resistor equal to the box's $R_{eq}$, leaving the battery as it was. What is guaranteed to stay the same?`,
        options: [r`The number of paths the current can take`, r`The heat produced in each original part`, r`The voltage across each original part`, r`The current that the battery supplies`],
        correctAnswer: 3,
        explanation: r`The equivalent resistance is defined as the single resistance that replaces the group without changing the current from the battery. The number of paths changes, because one resistor offers a single path. The original parts are gone, so their separate heating and voltages are not preserved; only the total seen by the battery is.`,
      },
      {
        question: r`A sealed module holds an unknown arrangement of components whose equivalent resistance is 30 Ω. A technician clips the module onto a 6 V ideal battery. Which statement must be true?`,
        options: [r`The battery supplies 5.0 A in total`, r`The battery supplies 0.20 A in total`, r`Every resistor inside carries 0.20 A`, r`Every resistor inside measures 30 Ω`],
        correctAnswer: 1,
        explanation: r`The equivalent resistance behaves, for the battery, like one 30 Ω resistor, so the battery current is 6 V ÷ 30 Ω = 0.20 A. The answer 5.0 A divides resistance by voltage. Nothing fixes the current or the value of each resistor inside: branches can share the 0.20 A unequally, and many different sets of resistors combine to 30 Ω.`,
      },
    ],
  },
  [r`In series, what is the same for every element, and what adds?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three different sensors are wired in series across a 9 V battery. The first has 2 V across it and the second has 4 V across it. What is the voltage across the third?`,
        options: [r`9 V`, r`6 V`, r`15 V`, r`3 V`],
        correctAnswer: 3,
        explanation: r`In series the voltages add to the battery voltage, so the third sensor has 9 V − 2 V − 4 V = 3 V. The answer 9 V gives the third sensor the whole battery voltage, 6 V is only the sum of the first two, and 15 V adds all three numbers.`,
      },
      {
        question: r`A decorative string has 20 identical LEDs in series. Each LED carries 20 mA and has 3 V across it. What current does the supply deliver, and what is the supply voltage?`,
        options: [r`400 mA and 60 V`, r`20 mA and 60 V`, r`20 mA and 3 V`, r`400 mA and 3 V`],
        correctAnswer: 1,
        explanation: r`In series the same 20 mA passes through every LED, so that is also the supply current, and the 20 voltages add to 20 × 3 V = 60 V. Answers with 400 mA add the currents, which is the rule for parallel branches, and answers with 3 V treat the voltage as shared, which is also the parallel rule.`,
      },
      {
        question: r`A battery sends 150 mA into a single loop that holds two unequal resistors. How much charge passes through the second resistor in 10 s?`,
        options: [r`0.75 C`, r`1500 C`, r`15 C`, r`1.5 C`],
        correctAnswer: 3,
        explanation: r`In series the current is the same in every element, so the second resistor also carries 0.150 A, and Q = It = 0.150 A × 10 s = 1.5 C. The answer 0.75 C assumes the current is shared between the two resistors, 1500 C leaves the current in milliamps, and 15 C slips a power of ten.`,
      },
      {
        question: r`An electric eel's organ stacks about 4000 electrocyte cells in series. Each cell contributes 0.15 V when it fires. What total voltage does one stack produce?`,
        options: [r`0.15 V`, r`600 V`, r`60 V`, r`6000 V`],
        correctAnswer: 1,
        explanation: r`Voltages in series add, so the stack produces 4000 × 0.15 V = 600 V. The answer 0.15 V treats the voltage as the same for the whole stack, which is the rule for parallel connections, and 60 V and 6000 V each slip a power of ten in the multiplication.`,
      },
      {
        question: r`A 12 V battery drives a resistor and a small motor in a single loop. The resistor has 4.5 V across it and carries 0.50 A. What are the voltage across the motor and the current through it?`,
        options: [r`12 V and 0.50 A`, r`7.5 V and 0.25 A`, r`7.5 V and 0.50 A`, r`4.5 V and 0.50 A`],
        correctAnswer: 2,
        explanation: r`In series the current is the same, so the motor carries 0.50 A, and the voltages add to the battery voltage, so the motor has 12 V − 4.5 V = 7.5 V. The answer with 12 V ignores the resistor's share, the one with 0.25 A splits the current between the elements, and the one with 4.5 V assumes equal voltages.`,
      },
      {
        question: r`A string of identical lamps is wired in series across a 120 V supply, and a voltmeter shows 8 V across each lamp. How many lamps are in the string?`,
        options: [r`15 lamps`, r`960 lamps`, r`112 lamps`, r`128 lamps`],
        correctAnswer: 0,
        explanation: r`Series voltages add to the supply voltage, so n × 8 V = 120 V and n = 15. The answer 960 multiplies the two voltages, 112 subtracts them and 128 adds them; none of these uses the fact that the lamp voltages must sum to 120 V.`,
      },
    ],
  },
  [r`What is the equivalent resistance of resistors in series?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 100 Ω, a 220 Ω and a 330 Ω resistor are soldered end to end on a circuit board, forming one path with no junctions. What is their equivalent resistance?`,
        options: [r`57 Ω`, r`330 Ω`, r`650 Ω`, r`217 Ω`],
        correctAnswer: 2,
        explanation: r`Resistances in series add: 100 + 220 + 330 = 650 Ω. The answer 57 Ω comes from adding reciprocals, which is the parallel rule; 330 Ω takes only the largest resistor; and 217 Ω is the average of the three.`,
      },
      {
        question: r`A circuit needs a series total of 1.0 kΩ. A 470 Ω and a 330 Ω resistor are already in the chain. What third resistor must be added in series?`,
        options: [r`800 Ω`, r`1800 Ω`, r`200 Ω`, r`20 Ω`],
        correctAnswer: 2,
        explanation: r`Series resistances add, so 470 + 330 + R = 1000 Ω and R = 200 Ω. The answer 800 Ω is the sum of the two resistors already present, 1800 Ω adds that sum to the target when it should be subtracted, and 20 Ω slips a power of ten.`,
      },
      {
        question: r`A 1.5 kΩ resistor is wired in series with a 500 Ω resistor in an amplifier's input chain. What is the equivalent resistance of the pair?`,
        options: [r`0.50 kΩ`, r`0.375 kΩ`, r`2.0 kΩ`, r`1.0 kΩ`],
        correctAnswer: 2,
        explanation: r`Convert to the same unit and add: 1500 Ω + 500 Ω = 2000 Ω = 2.0 kΩ. The answer 0.50 kΩ takes only the smaller resistor, 0.375 kΩ uses product over sum, which is the parallel rule, and 1.0 kΩ averages the two values.`,
      },
      {
        question: r`Current passes from one hand to the other through three resistances in series: 50 kΩ of dry skin at one hand, 1 kΩ of internal tissue, and 50 kΩ of dry skin at the other hand. What is the total resistance of the path?`,
        options: [r`51 kΩ`, r`50 kΩ`, r`101 kΩ`, r`0.96 kΩ`],
        correctAnswer: 2,
        explanation: r`The three resistances lie on one path, so they add: 50 + 1 + 50 = 101 kΩ. The answer 51 kΩ counts the skin once, 50 kΩ takes only the largest value, and 0.96 kΩ adds reciprocals as if the three were in parallel.`,
      },
      {
        question: r`A 23 Ω heating pad is connected to its supply by two leads, each with a resistance of 0.5 Ω. One lead carries the current to the pad and the other carries it back. What total resistance does the supply see?`,
        options: [r`23.5 Ω`, r`24 Ω`, r`23 Ω`, r`22 Ω`],
        correctAnswer: 1,
        explanation: r`The two leads and the pad form a single path, so the resistances add: 0.5 + 23 + 0.5 = 24 Ω. The answer 23.5 Ω counts only one lead, 23 Ω ignores the leads, and 22 Ω subtracts them.`,
      },
      {
        question: r`A 30 Ω heating coil runs from an ideal battery. To turn it down, a technician inserts a ballast into the same single loop, and the current falls to one third of its first value. What is the resistance of the ballast?`,
        options: [r`90 Ω`, r`10 Ω`, r`60 Ω`, r`20 Ω`],
        correctAnswer: 2,
        explanation: r`With the same battery, one third of the current means 3 times the resistance, so the series total must be 90 Ω. Series resistances add, so the ballast is 90 − 30 = 60 Ω. The answer 90 Ω is the new total, not the added part; 10 Ω divides 30 Ω by 3; and 20 Ω is two thirds of 30 Ω.`,
      },
    ],
  },
  [r`In parallel, what is the same for every element, and what adds?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three appliances share a 120 V power strip, each plugged into its own socket across the same two rails. They draw 5 A, 2 A and 0.5 A. What current does the strip draw from the wall?`,
        options: [r`5 A`, r`7.5 A`, r`0.5 A`, r`2.5 A`],
        correctAnswer: 1,
        explanation: r`The sockets are in parallel, so each appliance has the full 120 V and the currents add: 5 + 2 + 0.5 = 7.5 A. The answer 5 A takes only the largest branch, 0.5 A only the smallest, and 2.5 A is the average of the three.`,
      },
      {
        question: r`A supply delivers 0.90 A in total to two different lamps connected in parallel. One lamp carries 0.35 A. What current does the other lamp carry?`,
        options: [r`0.45 A`, r`0.55 A`, r`0.90 A`, r`1.25 A`],
        correctAnswer: 1,
        explanation: r`Parallel branch currents add to the total, so the other lamp carries 0.90 A − 0.35 A = 0.55 A. The answer 0.45 A assumes the lamps share the current equally, 0.90 A gives the second lamp the whole current as if the lamps were in series, and 1.25 A adds when it should subtract.`,
      },
      {
        question: r`Three different lamps each sit in a branch of their own between the same pair of rails of a power supply. A meter clipped across the first lamp reads 4.5 V. What are the voltage across the third lamp and the supply voltage?`,
        options: [r`4.5 V and 4.5 V`, r`4.5 V and 13.5 V`, r`1.5 V and 4.5 V`, r`1.5 V and 13.5 V`],
        correctAnswer: 0,
        explanation: r`Elements in parallel have the same voltage, so the third lamp and the supply are both at 4.5 V. Answers with 13.5 V add three voltages, which is the series rule, and answers with 1.5 V share the voltage among the lamps, which also happens only in series.`,
      },
      {
        question: r`A patch of membrane has 2000 identical open ion channels side by side, each connecting the inside of the cell to the outside. Each channel carries 2 pA. What total current crosses the patch?`,
        options: [r`2 pA`, r`4 pA`, r`40 nA`, r`4 nA`],
        correctAnswer: 3,
        explanation: r`The channels are parallel paths across the same membrane voltage, so their currents add: 2000 × 2 pA = 4000 pA = 4 nA. The answer 2 pA treats the current as the same everywhere, which is the series rule; 4 pA forgets the factor of 1000; and 40 nA slips a power of ten in the conversion.`,
      },
      {
        question: r`Identical lamps are added one at a time in parallel across a supply. Each lamp draws 0.60 A. How many lamps bring the total supply current to exactly 15 A?`,
        options: [r`9 lamps`, r`25 lamps`, r`15 lamps`, r`90 lamps`],
        correctAnswer: 1,
        explanation: r`Parallel currents add, so n × 0.60 A = 15 A and n = 25. The answer 9 multiplies 15 by 0.60, 15 assumes each lamp draws 1 A, and 90 slips while dividing 15 by 0.60.`,
      },
      {
        question: r`Two heaters are in parallel across a supply. The total current from the supply is 4 times the current in heater 1. The current in heater 2 is what multiple of the current in heater 1?`,
        options: [r`4 times`, r`5 times`, r`1/3 times`, r`3 times`],
        correctAnswer: 3,
        explanation: r`Branch currents add to the total: I₁ + I₂ = 4I₁, so I₂ = 3I₁. The answer "4 times" confuses heater 2 with the total, "5 times" adds heater 1's current when it should be subtracted, and "1/3 times" inverts the ratio.`,
      },
    ],
  },
  [r`What is the equivalent resistance of resistors in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three heating elements of 12 Ω, 6 Ω and 4 Ω are each connected directly across the same supply. What is their equivalent resistance?`,
        options: [r`0.50 Ω`, r`22 Ω`, r`7.3 Ω`, r`2.0 Ω`],
        correctAnswer: 3,
        explanation: r`Add the reciprocals: 1/12 + 1/6 + 1/4 = 1/12 + 2/12 + 3/12 = 6/12 = 0.50 Ω⁻¹, then invert to get 2.0 Ω. The answer 0.50 Ω forgets to invert, 22 Ω adds the resistances as if they were in series, and 7.3 Ω is their average.`,
      },
      {
        question: r`A 30 Ω sensor must be made to look like 10 Ω by connecting a second resistor in parallel with it. What must the second resistor be?`,
        options: [r`15 Ω`, r`20 Ω`, r`40 Ω`, r`7.5 Ω`],
        correctAnswer: 0,
        explanation: r`1/10 = 1/30 + 1/R, so 1/R = 3/30 − 1/30 = 2/30 and R = 15 Ω. The answer 20 Ω subtracts the resistances (30 − 10), 40 Ω adds them, and 7.5 Ω is the equivalent of 30 Ω and 10 Ω in parallel, which answers a different question.`,
      },
      {
        question: r`On an amplifier board, a 2.0 kΩ, a 3.0 kΩ and a 6.0 kΩ component each bridge the same two copper tracks. What single value, in ohms, does a meter read between the tracks?`,
        options: [r`1.0 Ω`, r`1000 Ω`, r`11 000 Ω`, r`3700 Ω`],
        correctAnswer: 1,
        explanation: r`Working in kΩ, 1/2 + 1/3 + 1/6 = 3/6 + 2/6 + 1/6 = 1 per kΩ, so the equivalent is 1.0 kΩ = 1000 Ω. The answer 1.0 Ω drops the kilo prefix, 11 000 Ω adds the resistances as in series, and 3700 Ω is their average.`,
      },
      {
        question: r`Between two electrodes on the chest, current can follow three separate tissue paths that join the same two electrodes. Their resistances are 60 Ω, 30 Ω and 20 Ω. What resistance is measured between the electrodes?`,
        options: [r`110 Ω`, r`0.10 Ω`, r`37 Ω`, r`10 Ω`],
        correctAnswer: 3,
        explanation: r`The paths are in parallel: 1/60 + 1/30 + 1/20 = 1/60 + 2/60 + 3/60 = 6/60, and inverting gives 10 Ω. The answer 110 Ω adds the resistances as in series, 0.10 Ω is the reciprocal sum before it is inverted, and 37 Ω is the average.`,
      },
      {
        question: r`Three heating wires bridge the same two bus bars in an incubator, and a meter reads 4.0 Ω between the bars. Two of the wires are 8.0 Ω and 24 Ω. What is the third?`,
        options: [r`28 Ω`, r`6.0 Ω`, r`12 Ω`, r`36 Ω`],
        correctAnswer: 2,
        explanation: r`1/4 = 1/8 + 1/24 + 1/R. Since 1/8 + 1/24 = 3/24 + 1/24 = 1/6, 1/R = 1/4 − 1/6 = 1/12 and R = 12 Ω. The answer 28 Ω subtracts 4.0 Ω from the sum of the other two, 6.0 Ω is the equivalent of just the two known wires, and 36 Ω adds all three numbers.`,
      },
      {
        question: r`A 20 Ω kettle element alone draws a current I from a fixed-voltage supply. A 5 Ω grill element is then switched on in a branch of its own across the same supply. What current does the supply deliver now?`,
        options: [r`5 times I`, r`4 times I`, r`1.25 times I`, r`0.80 times I`],
        correctAnswer: 0,
        explanation: r`1/20 + 1/5 = 1/20 + 4/20 = 5/20, so the equivalent resistance is 4 Ω, one fifth of 20 Ω, and the current is 5 times I. The answer "4 times" counts only the new branch's current, "1.25 times" uses 25 ÷ 20, and "0.80 times" adds the two elements as in series to get 25 Ω.`,
      },
    ],
  },
  [r`What is the shortcut for two resistors in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 30 Ω heater and a 60 Ω heater are connected in parallel across the terminals of a supply. What is their equivalent resistance?`,
        options: [r`20 Ω`, r`90 Ω`, r`45 Ω`, r`1800 Ω`],
        correctAnswer: 0,
        explanation: r`Product over sum: (30 × 60) ÷ (30 + 60) = 1800 ÷ 90 = 20 Ω. The answer 90 Ω is the sum alone, which is the series result; 45 Ω is the average; and 1800 Ω is the product without dividing by the sum.`,
      },
      {
        question: r`A 40 Ω earphone and a 60 Ω earphone are plugged into a splitter, so both connect across the same two output terminals. What load does the player see?`,
        options: [r`100 Ω`, r`50 Ω`, r`24 Ω`, r`0.042 Ω`],
        correctAnswer: 2,
        explanation: r`Product over sum: (40 × 60) ÷ (40 + 60) = 2400 ÷ 100 = 24 Ω. The answer 100 Ω adds the two as in series, 50 Ω averages them, and 0.042 Ω is sum over product, which is 1/R and still has to be inverted.`,
      },
      {
        question: r`A 30 Ω resistor is connected in parallel with an unknown resistor X, and the pair measures 6.0 Ω. What is X?`,
        options: [r`24 Ω`, r`36 Ω`, r`5.0 Ω`, r`7.5 Ω`],
        correctAnswer: 3,
        explanation: r`30X ÷ (30 + X) = 6.0 gives 30X = 180 + 6X, so 24X = 180 and X = 7.5 Ω. Check: (30 × 7.5) ÷ 37.5 = 6.0 Ω. The answer 24 Ω subtracts the resistances, 36 Ω adds them, and 5.0 Ω divides 30 by 6.`,
      },
      {
        question: r`A 1.0 kΩ thermistor and a 250 Ω heater coil both bridge the same two terminals of a control board. What does a meter read between those terminals?`,
        options: [r`1.0 Ω`, r`200 Ω`, r`1250 Ω`, r`625 Ω`],
        correctAnswer: 1,
        explanation: r`In ohms: (1000 × 250) ÷ (1000 + 250) = 250 000 ÷ 1250 = 200 Ω. The answer 1.0 Ω uses 1.0 for the kilohm value without converting, 1250 Ω is the series sum, and 625 Ω is the average.`,
      },
      {
        question: r`A meter coil of resistance 90 Ω has a 10 Ω shunt resistor connected across its two terminals. What is the resistance of the coil and shunt together?`,
        options: [r`100 Ω`, r`80 Ω`, r`9.0 Ω`, r`50 Ω`],
        correctAnswer: 2,
        explanation: r`Product over sum: (90 × 10) ÷ (90 + 10) = 900 ÷ 100 = 9.0 Ω, a little less than the smaller branch. The answer 100 Ω adds as in series, 80 Ω subtracts, and 50 Ω averages the two.`,
      },
      {
        question: r`Two heating strips bridge the same pair of terminals. One strip has resistance R and the other has resistance 3R. The pair together measures what fraction of R?`,
        options: [r`4/3`, r`3/4`, r`1/4`, r`2`],
        correctAnswer: 1,
        explanation: r`Product over sum: (R × 3R) ÷ (R + 3R) = 3R² ÷ 4R = (3/4)R. The answer 4/3 is sum over product, the expression upside down; 1/4 drops the factor of 3 from the product; and 2 is the average of 1 and 3.`,
      },
    ],
  },
  [r`What do $n$ identical resistors $R$ give in series, and in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A test load is built by bridging two bus bars with five identical 100 Ω wire-wound elements, each in a branch of its own. What does the load measure between the bars?`,
        options: [r`500 Ω`, r`100 Ω`, r`20 Ω`, r`0.050 Ω`],
        correctAnswer: 2,
        explanation: r`Identical resistors in parallel give R/n = 100 Ω ÷ 5 = 20 Ω. The answer 500 Ω is nR, the series result; 100 Ω ignores the extra branches; and 0.050 Ω is n/R, which is the reciprocal sum before it is inverted.`,
      },
      {
        question: r`A dryer's heater is built from six identical 15 Ω elements connected in series. What is the heater's total resistance?`,
        options: [r`2.5 Ω`, r`90 Ω`, r`15 Ω`, r`21 Ω`],
        correctAnswer: 1,
        explanation: r`Identical resistors in series give nR = 6 × 15 Ω = 90 Ω. The answer 2.5 Ω is R/n, the parallel result; 15 Ω is a single element; and 21 Ω adds the number of elements to the resistance of one.`,
      },
      {
        question: r`A designer has a drawer of identical 240 Ω components and needs a load of 12 Ω. How many of them must be wired in parallel?`,
        options: [r`20 of them`, r`12 of them`, r`228 of them`, r`2880 of them`],
        correctAnswer: 0,
        explanation: r`For identical resistors in parallel, R/n = 12 Ω, so n = 240 ÷ 12 = 20. The answer 12 simply repeats the target value, 228 subtracts the two numbers, and 2880 multiplies them.`,
      },
      {
        question: r`Eight identical speakers wired in parallel present a combined load of 0.50 Ω to an amplifier. What is the resistance of one speaker?`,
        options: [r`0.063 Ω`, r`8.5 Ω`, r`4.0 Ω`, r`16 Ω`],
        correctAnswer: 2,
        explanation: r`For identical resistors in parallel, R/n = 0.50 Ω, so R = 8 × 0.50 Ω = 4.0 Ω. The answer 0.063 Ω divides by 8 when it should multiply, 8.5 Ω adds the two numbers, and 16 Ω divides 8 by 0.50.`,
      },
      {
        question: r`Six identical resistors are connected first all in series and then all in parallel. The series total is how many times the parallel total?`,
        options: [r`36 times`, r`6 times`, r`12 times`, r`3 times`],
        correctAnswer: 0,
        explanation: r`The series total is 6R and the parallel total is R/6, so the ratio is 6R ÷ (R/6) = 36. The answer 6 compares only one of the arrangements with a single resistor, 12 doubles 6 when it should be squared, and 3 halves it.`,
      },
      {
        question: r`A patch of membrane contains 1000 identical open ion channels in parallel. Each channel has a resistance of 2.0 × 10¹⁰ Ω. What is the resistance of the patch?`,
        options: [r`2.0 × 10¹³ Ω`, r`2.0 × 10¹⁰ Ω`, r`2.0 × 10⁷ Ω`, r`5.0 × 10⁻⁸ Ω`],
        correctAnswer: 2,
        explanation: r`Identical resistances in parallel give R/n = (2.0 × 10¹⁰ Ω) ÷ 10³ = 2.0 × 10⁷ Ω. The answer 2.0 × 10¹³ Ω multiplies by 1000, the series result; 2.0 × 10¹⁰ Ω ignores the other channels; and 5.0 × 10⁻⁸ Ω is n/R, the reciprocal sum that still needs inverting.`,
      },
    ],
  },
  [r`A branch is added in parallel. What happens to $R_{eq}$ and to the total current?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Several resistors are connected in parallel across an ideal battery. After a technician makes one change, the battery current is larger than before. Which change explains this?`,
        options: [r`One of the existing branches was disconnected`, r`A new resistor was placed in series with them`, r`One branch resistor was swapped for a larger one`, r`A new resistor was added in a branch of its own`],
        correctAnswer: 3,
        explanation: r`A new parallel branch gives the charge an extra path, so the equivalent resistance falls and, at the same battery voltage, the total current rises. Disconnecting a branch, placing a resistor in series with the group, and enlarging a branch resistor all raise the equivalent resistance, so each would make the battery current smaller.`,
      },
      {
        question: r`More and more appliances are plugged into sockets on one household circuit, each across the same supply voltage, until the circuit breaker trips. Why does plugging in more appliances lead to this?`,
        options: [r`Total resistance falls, so the total current climbs`, r`Total resistance climbs, so the total current climbs`, r`Total resistance climbs, so the supply voltage climbs`, r`Total resistance falls, so the supply voltage falls`],
        correctAnswer: 0,
        explanation: r`Each appliance is a new parallel branch, so the equivalent resistance falls and the total current through the breaker rises until it trips. Adding branches never raises the equivalent resistance, and a higher resistance would lower the current anyway. The supply voltage is set by the source and is the same across every branch.`,
      },
    ],
  },
  [r`How do you tell series from parallel?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A diagram draws R1 and R2 side by side as two vertical resistors. Tracing the wires: the battery's + terminal goes to the top of R1, the bottom of R1 goes only to the bottom of R2, and the top of R2 goes to the battery's − terminal. How are R1 and R2 connected?`,
        options: [r`In parallel, since they are drawn side by side`, r`In series, since one path runs through both`, r`In parallel, since their lower ends are joined`, r`In neither way, since R2 is entered from below`],
        correctAnswer: 1,
        explanation: r`There is a single path with no junction: the battery, R1, R2 and back, so the two are in series however the figure is drawn. Being drawn side by side decides nothing. Sharing one node is not enough for parallel, because parallel elements must join the same two nodes at both ends. The direction in which current enters an element does not matter.`,
      },
      {
        question: r`A battery is connected between nodes 1 and 3. Resistor A joins node 1 to node 2. Resistors B and C each join node 2 to node 3. How are the three resistors arranged?`,
        options: [r`A and B are in parallel, and C is in series with the pair`, r`A, B and C are all in series, as each one touches node 2`, r`B and C are in parallel, and A is in series with the pair`, r`A, B and C are all in parallel, as each one touches node 2`],
        correctAnswer: 2,
        explanation: r`B and C both run between nodes 2 and 3, so they share the same two nodes and are in parallel. All of the current through A must pass through that pair, so A is in series with it. A and B share only node 2, which does not make them parallel, and touching one common node makes elements neither all series nor all parallel.`,
      },
    ],
  },
  [r`What do a short (a bare wire across an element) and an open branch do?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 V ideal battery feeds two branches connected across its terminals. One branch is a 6 Ω resistor. The other is a 3 Ω resistor in line with a switch, and the switch is open. What current does the battery supply?`,
        options: [r`4 A`, r`0 A`, r`2 A`, r`1.3 A`],
        correctAnswer: 2,
        explanation: r`The branch with the open switch carries no current and can be erased, leaving the 6 Ω resistor alone: 12 V ÷ 6 Ω = 2 A. The answer 4 A is the current the 3 Ω branch would take with the switch closed, 0 A wrongly assumes one open branch stops the whole circuit, and 1.3 A adds the two resistors as if they were in series.`,
      },
      {
        question: r`A 12 V ideal battery drives a 2 Ω resistor and a 4 Ω resistor in a single loop, and an ammeter in the loop reads 2 A. After a fault, the ammeter reads 3 A. Which fault explains the new reading?`,
        options: [r`A bare wire now bridges the 2 Ω resistor`, r`A bare wire now bridges the 4 Ω resistor`, r`The 2 Ω resistor has burned out and opened`, r`The 4 Ω resistor has burned out and opened`],
        correctAnswer: 0,
        explanation: r`A current of 3 A from 12 V means the loop resistance is now 4 Ω, so the 2 Ω resistor has dropped out: a wire across it puts both of its ends at the same potential and it carries no current. A wire across the 4 Ω resistor would leave 2 Ω and give 6 A. A resistor that opens breaks the only path, so the current would be 0 A.`,
      },
    ],
  },
  [r`What is the recipe for a series string?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V car battery lights a 20 Ω dashboard lamp and a 40 Ω indicator lamp wired in series. What is the current in the loop, and what is the voltage drop on the 40 Ω lamp?`,
        options: [r`0.20 A and 8.0 V`, r`0.20 A and 4.0 V`, r`0.30 A and 12 V`, r`0.60 A and 8.0 V`],
        correctAnswer: 0,
        explanation: r`Add the resistances: 20 + 40 = 60 Ω. The current is 12 V ÷ 60 Ω = 0.20 A, and the drop on the 40 Ω lamp is 0.20 A × 40 Ω = 8.0 V. The answer with 4.0 V is the drop on the 20 Ω lamp; 0.30 A and 12 V treats the 40 Ω lamp as if it were alone across the battery; and 0.60 A divides by 20 Ω only.`,
      },
      {
        question: r`A supply of unknown voltage feeds a chain of three heating strips in one loop: 2 Ω, 3 Ω and 5 Ω. A meter shows 6 V on the 3 Ω strip. What is the supply voltage?`,
        options: [r`18 V`, r`12 V`, r`60 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`The current is 6 V ÷ 3 Ω = 2 A, and it is the same in all three strips. The supply voltage is I × $R_{eq}$ = 2 A × (2 + 3 + 5) Ω = 20 V. The answer 18 V assumes three equal drops of 6 V, 12 V doubles the one reading, and 60 V multiplies 6 V by the total resistance.`,
      },
      {
        question: r`A 9.0 V supply lights an indicator through a 100 Ω protective element placed in the same single loop. The loop current is 30 mA. Treating the indicator as a resistance, what is its value?`,
        options: [r`300 Ω`, r`100 Ω`, r`200 Ω`, r`0.30 Ω`],
        correctAnswer: 2,
        explanation: r`The series total is $R_{eq}$ = V/I = 9.0 V ÷ 0.030 A = 300 Ω, so the indicator is 300 − 100 = 200 Ω. The answer 300 Ω is the total for the loop, not the indicator alone; 100 Ω assumes the two parts are equal; and 0.30 Ω divides 9.0 by 30 without converting milliamps to amps.`,
      },
      {
        question: r`A worker's 99 kΩ insulating glove is in series with the 1.0 kΩ resistance of the body, and 100 V is applied across the two together. What voltage appears across the body?`,
        options: [r`99 V`, r`1.0 V`, r`100 V`, r`50 V`],
        correctAnswer: 1,
        explanation: r`The total is 99 + 1.0 = 100 kΩ, so the current is 100 V ÷ 100 kΩ = 1.0 mA, and the drop on the body is 1.0 mA × 1.0 kΩ = 1.0 V. The answer 99 V is the drop on the glove, 100 V gives the body the whole supply, and 50 V assumes an equal split.`,
      },
      {
        question: r`A 1.5 V cell drives a 10 Ω resistor and a 20 Ω resistor in series. What is the voltage drop on the 10 Ω resistor?`,
        options: [r`1.0 V`, r`1.5 V`, r`0.75 V`, r`0.50 V`],
        correctAnswer: 3,
        explanation: r`The total is 30 Ω, so the current is 1.5 V ÷ 30 Ω = 0.050 A and the drop on the 10 Ω resistor is 0.050 A × 10 Ω = 0.50 V. The answer 1.0 V is the drop on the 20 Ω resistor, 1.5 V gives one resistor the whole cell voltage, and 0.75 V assumes an equal split.`,
      },
      {
        question: r`A 12 V battery drives a 4 Ω and an 8 Ω resistor in series. A 12 Ω resistor is then added to the same series string. By what factor is the voltage drop on the 4 Ω resistor multiplied?`,
        options: [r`2`, r`1/2`, r`1`, r`1/3`],
        correctAnswer: 1,
        explanation: r`Before: I = 12 V ÷ 12 Ω = 1 A, so the 4 Ω resistor drops 4 V. After: I = 12 V ÷ 24 Ω = 0.5 A, so it drops 2 V, half as much. The answer 2 inverts the change, 1 assumes a resistor's drop is fixed whatever else is in the string, and 1/3 compares 4 Ω with the added 12 Ω.`,
      },
    ],
  },
  [r`What is the recipe for resistors in parallel across a battery?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 30 V bench supply powers three heating pads, of 10 Ω, 15 Ω and 30 Ω, each plugged into a socket of its own on the supply. What total current leaves the supply?`,
        options: [r`0.55 A`, r`3.0 A`, r`2.0 A`, r`6.0 A`],
        correctAnswer: 3,
        explanation: r`Each branch has the full 30 V, so the branch currents are 30/10 = 3 A, 30/15 = 2 A and 30/30 = 1 A, which add to 6.0 A. The answer 0.55 A divides 30 V by the series sum of 55 Ω, and 3.0 A and 2.0 A are single branch currents, not the total.`,
      },
      {
        question: r`A 20 Ω fan and a 5 Ω heater each sit in a branch of their own across one power pack. An ammeter in the fan's branch reads 0.30 A. What total current does the power pack deliver?`,
        options: [r`0.60 A`, r`1.5 A`, r`1.2 A`, r`0.38 A`],
        correctAnswer: 1,
        explanation: r`The shared voltage is 0.30 A × 20 Ω = 6 V. The 5 Ω branch therefore carries 6 V ÷ 5 Ω = 1.2 A, and the total is 0.30 + 1.2 = 1.5 A. The answer 0.60 A assumes both branches carry 0.30 A, 1.2 A is the 5 Ω branch alone, and 0.38 A gives the smaller resistance the smaller current.`,
      },
      {
        question: r`A 12 V battery supplies 5.0 A in total to two resistors in parallel. One of them is 4.0 Ω. What is the other?`,
        options: [r`2.4 Ω`, r`6.0 Ω`, r`4.0 Ω`, r`24 Ω`],
        correctAnswer: 1,
        explanation: r`The 4.0 Ω branch takes 12 V ÷ 4.0 Ω = 3.0 A, leaving 5.0 − 3.0 = 2.0 A for the other branch, so its resistance is 12 V ÷ 2.0 A = 6.0 Ω. The answer 2.4 Ω is the equivalent resistance of the pair, 4.0 Ω assumes equal branches, and 24 Ω multiplies 12 V by 2.0 A.`,
      },
      {
        question: r`A 3.0 V coin cell feeds a 1.0 kΩ sensor and a 1.5 kΩ indicator, each wired straight across the cell's two terminals. What total current does the cell deliver?`,
        options: [r`5.0 mA`, r`1.2 mA`, r`5.0 A`, r`3.0 mA`],
        correctAnswer: 0,
        explanation: r`Each branch has 3.0 V: 3.0 V ÷ 1.0 kΩ = 3.0 mA and 3.0 V ÷ 1.5 kΩ = 2.0 mA, which add to 5.0 mA. The answer 1.2 mA divides by the series sum of 2.5 kΩ, 5.0 A ignores the kilo prefix, and 3.0 mA counts only the first branch.`,
      },
      {
        question: r`A 36 V supply has a 12 Ω and a 6 Ω resistor in parallel across it. What is the current in the 6 Ω branch, and what is the equivalent resistance of the pair?`,
        options: [r`2 A and 18 Ω`, r`6 A and 18 Ω`, r`6 A and 4 Ω`, r`3 A and 4 Ω`],
        correctAnswer: 2,
        explanation: r`The 6 Ω branch has the full 36 V, so it carries 36 ÷ 6 = 6 A. The other branch carries 3 A, so the total is 9 A and $R_{eq}$ = 36 V ÷ 9 A = 4 Ω. Answers with 18 Ω add the resistors as in series, 2 A is 36 V ÷ 18 Ω, and 3 A is the current in the 12 Ω branch.`,
      },
      {
        question: r`Two resistors, R and 3R, are connected in parallel across a battery. What fraction of the battery's total current passes through the resistor R?`,
        options: [r`1/4`, r`1/3`, r`3/4`, r`1/2`],
        correctAnswer: 2,
        explanation: r`Both have the battery voltage V, so the currents are V/R and V/3R. The total is 4V/3R, and the share in R is (V/R) ÷ (4V/3R) = 3/4. The answer 1/4 is the share in 3R, 1/3 is the ratio of the two branch currents, and 1/2 assumes an equal split.`,
      },
    ],
  },
  [r`After adding $1/R_1 + 1/R_2 + \cdots$, what is the last step?`]: {
    kind: 'calc',
    more: [
      {
        question: r`For four loads that share the same two terminals, a student adds the reciprocals of the resistances and gets 0.25 Ω⁻¹. What is the equivalent resistance?`,
        options: [r`0.25 Ω`, r`2.5 Ω`, r`4.0 Ω`, r`40 Ω`],
        correctAnswer: 2,
        explanation: r`The sum of the reciprocals is 1/$R_{eq}$, so $R_{eq}$ = 1 ÷ 0.25 Ω⁻¹ = 4.0 Ω. The answer 0.25 Ω skips the inversion, and 2.5 Ω and 40 Ω each slip a decimal place while inverting.`,
      },
      {
        question: r`For a 12 Ω and a 36 Ω resistor in parallel, a student correctly works out 1/12 + 1/36 = 1/9. What is the equivalent resistance?`,
        options: [r`9.0 Ω`, r`0.11 Ω`, r`48 Ω`, r`24 Ω`],
        correctAnswer: 0,
        explanation: r`The sum 1/9 is 1/$R_{eq}$, so inverting it gives $R_{eq}$ = 9.0 Ω, which is sensibly below the smaller branch. The answer 0.11 Ω is 1/9 written as a decimal without inverting, 48 Ω adds the resistors as in series, and 24 Ω is their average.`,
      },
      {
        question: r`A parallel group has an equivalent resistance of 2.5 Ω. What must the sum $1/R_1 + 1/R_2 + \cdots$ have been before the last step?`,
        options: [r`2.5 Ω⁻¹`, r`0.25 Ω⁻¹`, r`0.40 Ω⁻¹`, r`4.0 Ω⁻¹`],
        correctAnswer: 2,
        explanation: r`The sum of reciprocals equals 1/$R_{eq}$ = 1 ÷ 2.5 Ω = 0.40 Ω⁻¹. The answer 2.5 Ω⁻¹ treats the sum as $R_{eq}$ itself, which is the mistake of skipping the inversion, and 0.25 Ω⁻¹ and 4.0 Ω⁻¹ invert the wrong number.`,
      },
      {
        question: r`Two heating wires of 10 Ω and 20 Ω bridge the same two terminals. A student's working ends with the line 1/10 + 1/20 = 3/20. What final result should follow that line?`,
        options: [r`0.15 Ω`, r`6.7 Ω`, r`30 Ω`, r`15 Ω`],
        correctAnswer: 1,
        explanation: r`The sum 3/20 is 1/$R_{eq}$, so $R_{eq}$ = 20/3 ≈ 6.7 Ω. The answer 0.15 Ω is 3/20 as a decimal, left uninverted; 30 Ω adds the two wires as in series; and 15 Ω averages them.`,
      },
      {
        question: r`Working in kilohms, a student adds the reciprocals for a 2.0 kΩ and a 0.50 kΩ resistor in parallel: 0.50 + 2.0 = 2.5 per kΩ. What is the equivalent resistance?`,
        options: [r`2500 Ω`, r`0.40 Ω`, r`2.5 Ω`, r`400 Ω`],
        correctAnswer: 3,
        explanation: r`Inverting the sum gives 1 ÷ 2.5 = 0.40 kΩ, which is 400 Ω. The answer 2500 Ω reads the uninverted sum as 2.5 kΩ, 0.40 Ω inverts but drops the kilo prefix, and 2.5 Ω makes both mistakes.`,
      },
      {
        question: r`A student is analysing several loads that all bridge the two terminals of a 12 V ideal battery. Adding the reciprocals of their resistances gives 0.75 Ω⁻¹. What total current does the battery supply?`,
        options: [r`9.0 A`, r`16 A`, r`0.063 A`, r`1.3 A`],
        correctAnswer: 0,
        explanation: r`The sum is 1/$R_{eq}$, so $R_{eq}$ = 1 ÷ 0.75 = 4/3 Ω and I = V/$R_{eq}$ = 12 V × 0.75 Ω⁻¹ = 9.0 A. The answer 16 A divides 12 V by 0.75 as if the sum were $R_{eq}$, 0.063 A divides 0.75 by 12, and 1.3 is the value of $R_{eq}$ in ohms, not a current.`,
      },
    ],
  },
  [r`What quick check catches a wrong $R_{eq}$?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student works out the equivalent resistance of a 30 Ω, a 60 Ω and a 90 Ω resistor in parallel four times and gets four different results. Which is the only result that passes the quick size check?`,
        options: [r`30 Ω`, r`45 Ω`, r`180 Ω`, r`16 Ω`],
        correctAnswer: 3,
        explanation: r`A parallel equivalent must be smaller than the smallest branch, here 30 Ω, and only 16 Ω is. A result of 30 Ω equals the smallest branch, which cannot happen once other branches are added; 45 Ω lies between the branch values; and 180 Ω is the series sum.`,
      },
      {
        question: r`A 47 Ω, a 100 Ω and a 220 Ω resistor are connected in series, and a student's calculator shows 28 Ω for the equivalent resistance. What does the quick check say?`,
        options: [r`Wrong: a series total must be below 47 Ω`, r`Fine: a series total must be below 47 Ω`, r`Fine: a series total can be below 220 Ω`, r`Wrong: a series total must exceed 220 Ω`],
        correctAnswer: 3,
        explanation: r`A series equivalent is a sum, so it must be larger than the largest resistor, here 220 Ω; 28 Ω fails that test (the student used the parallel formula). Being below the smallest resistor is the check for a parallel group, not a series one, so both answers built on 47 Ω apply the wrong rule, and a series total can never be below its largest resistor.`,
      },
    ],
  },
  [r`Do series resistors split the battery voltage equally?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V supply feeds a 1 kΩ resistor and a 3 kΩ resistor connected in series. How is the 12 V shared between them?`,
        options: [r`3 V on the 1 kΩ and 9 V on the 3 kΩ`, r`9 V on the 1 kΩ and 3 V on the 3 kΩ`, r`6 V on the 1 kΩ and 6 V on the 3 kΩ`, r`4 V on the 1 kΩ and 8 V on the 3 kΩ`],
        correctAnswer: 0,
        explanation: r`The current is 12 V ÷ 4 kΩ = 3 mA, so the drops are 3 mA × 1 kΩ = 3 V and 3 mA × 3 kΩ = 9 V: the larger resistor takes the larger share. The reversed answer gives the larger share to the smaller resistor, the 6 V answer assumes an equal split, and 4 V with 8 V treats the ratio as 1 to 2.`,
      },
      {
        question: r`A 10 V supply feeds a 40 Ω resistor in series with a thermistor. A voltmeter shows 2 V across the thermistor. What is the thermistor's resistance at that moment?`,
        options: [r`160 Ω`, r`20 Ω`, r`40 Ω`, r`10 Ω`],
        correctAnswer: 3,
        explanation: r`The 40 Ω resistor has the other 10 − 2 = 8 V, so the current is 8 V ÷ 40 Ω = 0.20 A and the thermistor is 2 V ÷ 0.20 A = 10 Ω. The answer 160 Ω gives the larger resistance to the smaller drop, 20 Ω divides 40 Ω by 2, and 40 Ω assumes the split is equal.`,
      },
      {
        question: r`A dimmer coil P and a lamp Q carry the same current in one loop of a stage light. Meters show 15 V across P and 5 V across Q. How do the two resistances compare?`,
        options: [r`P is 1/3 of Q`, r`P is 9 times Q`, r`P is 3 times Q`, r`P is equal to Q`],
        correctAnswer: 2,
        explanation: r`The current is shared, so each drop is IR and the drops are in the ratio of the resistances: 15 V ÷ 5 V = 3, so P is 3 times Q. The answer 1/3 gives the larger drop to the smaller resistor, 9 squares the ratio, and equal resistances would have equal drops.`,
      },
      {
        question: r`A 5.0 V supply feeds a 50 Ω sensor in series with a 200 Ω sensor. What is the voltage across the 200 Ω sensor?`,
        options: [r`2.5 V`, r`1.0 V`, r`5.0 V`, r`4.0 V`],
        correctAnswer: 3,
        explanation: r`The current is 5.0 V ÷ 250 Ω = 0.020 A, so the 200 Ω sensor drops 0.020 A × 200 Ω = 4.0 V. The answer 2.5 V assumes an equal split, 1.0 V is the drop on the 50 Ω sensor, and 5.0 V gives one sensor the whole supply.`,
      },
      {
        question: r`A 1.0 mV signal from the heart drives a 100 kΩ skin contact in series with the 900 kΩ input of an amplifier. How much of the signal appears across the amplifier input?`,
        options: [r`0.90 mV`, r`0.10 mV`, r`0.50 mV`, r`1.0 mV`],
        correctAnswer: 0,
        explanation: r`The two share one current, so the drops are in the ratio of the resistances. The amplifier holds 900 kΩ of the 1000 kΩ total, so it takes 0.90 of the signal: 0.90 mV. The answer 0.10 mV is the drop on the skin contact, 0.50 mV assumes an equal split, and 1.0 mV ignores the contact's share.`,
      },
      {
        question: r`A 2 Ω fuse and a 6 Ω heater element form a single loop with a power pack. A meter shows 1.5 V across the fuse. What is the power pack's voltage?`,
        options: [r`3.0 V`, r`4.5 V`, r`6.0 V`, r`2.0 V`],
        correctAnswer: 2,
        explanation: r`The current is 1.5 V ÷ 2 Ω = 0.75 A, so the 6 Ω heater drops 0.75 A × 6 Ω = 4.5 V and the power pack supplies 1.5 + 4.5 = 6.0 V. The answer 3.0 V assumes two equal drops, 4.5 V is the drop on the heater alone, and 2.0 V gives the larger resistance the smaller drop of 0.5 V.`,
      },
    ],
  },
}
