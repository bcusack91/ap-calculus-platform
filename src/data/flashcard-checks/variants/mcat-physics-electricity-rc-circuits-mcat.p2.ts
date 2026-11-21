import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-rc-circuits-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`After one time constant, what fraction of its final charge does a charging capacitor hold?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A camera flash capacitor starts empty and charges through a resistor toward a final voltage of 300 V. The circuit's time constant is 0.50 s. About what is the capacitor's voltage 1.5 s after charging starts?`,
        options: [r`About 190 V`, r`About 285 V`, r`About 110 V`, r`About 150 V`],
        correctAnswer: 1,
        explanation: r`1.5 s is three time constants, and a charging capacitor is about 95% of the way to its final value after 3τ, so V ≈ 0.95 × 300 V = 285 V. 190 V is the 63% value that belongs to one time constant, 110 V is 37% of 300 V, and 150 V assumes half is reached.`,
      },
      {
        question: r`An empty capacitor is charged by a battery through a resistor. One time constant after the switch closes it holds 126 μC. About how much charge will it hold when charging is complete?`,
        options: [r`About 126 μC`, r`About 340 μC`, r`About 79 μC`, r`About 200 μC`],
        correctAnswer: 3,
        explanation: r`After one time constant the capacitor holds about 63% of its final charge, so the final charge is 126 μC ÷ 0.63 = 200 μC. Dividing by 0.37 gives 340 μC, multiplying by 0.63 gives 79 μC, and 126 μC would mean charging had already finished.`,
      },
      {
        question: r`A timing circuit charges an empty 2.0 μF capacitor from a battery through a 500 kΩ resistor. About how long after charging starts does the capacitor hold 63% of its final charge?`,
        options: [r`About 1.0 s`, r`About 3.0 s`, r`About 5.0 s`, r`About 0.63 s`],
        correctAnswer: 0,
        explanation: r`63% of the final charge is reached after one time constant, and τ = RC = (5.0 × 10⁵ Ω)(2.0 × 10⁻⁶ F) = 1.0 s. 3.0 s is three time constants, where the capacitor is about 95% charged, 5.0 s is where charging is essentially complete, and 0.63 s wrongly multiplies τ by 0.63.`,
      },
      {
        question: r`A battery charges an empty capacitor through a resistor. The capacitor's final charge will be 500 μC. One time constant after the switch closes, about how much charge has STILL to arrive on the capacitor?`,
        options: [r`About 315 μC`, r`About 250 μC`, r`About 185 μC`, r`About 25 μC`],
        correctAnswer: 2,
        explanation: r`After one time constant the capacitor holds about 63% of its final charge, so 37% is still to come: 0.37 × 500 μC = 185 μC. 315 μC is the charge already on the capacitor, 250 μC assumes half is reached, and 25 μC is the 5% still missing after three time constants.`,
      },
      {
        question: r`A touch sensor's capacitor starts empty and charges through a resistor with a time constant of 40 ms. By the usual rule of thumb, about how long after charging starts is it treated as fully charged (about 99% of its final charge)?`,
        options: [r`About 25 ms`, r`About 40 ms`, r`About 120 ms`, r`About 200 ms`],
        correctAnswer: 3,
        explanation: r`Charging is effectively complete (above 99%) after about five time constants: 5 × 40 ms = 200 ms. At 120 ms, three time constants, the capacitor is only about 95% charged, at 40 ms it is about 63% charged, and 25 ms comes from multiplying τ by 0.63.`,
      },
      {
        question: r`A capacitor that starts empty is charged by a battery through a resistor. It holds 63 μC at a time equal to one time constant. About how much charge does it hold at a time equal to three time constants?`,
        options: [r`About 95 μC`, r`About 189 μC`, r`About 126 μC`, r`About 86 μC`],
        correctAnswer: 0,
        explanation: r`63 μC is 63% of the final charge, so the final charge is 100 μC, and after 3τ the capacitor holds about 95% of that, 95 μC. 189 μC and 126 μC treat the charge as growing in proportion to time, which would pass the final charge, and 86 μC is the value at two time constants.`,
      },
    ],
  },
  [r`Physically, why does putting capacitors in series lower the total capacitance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A single air-filled capacitor has plate area A and a 3.0 mm gap. Which combination of air-filled capacitors, each with plate area A and a 1.0 mm gap, has the same capacitance?`,
        options: [
          r`Nine of them connected in series`,
          r`Three of them connected in parallel`,
          r`Three of them connected in series`,
          r`Nine of them connected in parallel`,
        ],
        correctAnswer: 2,
        explanation: r`Connecting capacitors in series acts like adding their gaps while the plate area stays the same, so three 1.0 mm gaps in series behave like one 3.0 mm gap with area A. Nine in series would act like a 9.0 mm gap. Connecting in parallel adds plate area instead, which raises the capacitance above that of one capacitor.`,
      },
      {
        question: r`Air-filled capacitors X and Y have the same plate area. X has a 1.0 mm gap and Y has a 3.0 mm gap. They are connected in series. How does the capacitance of the pair compare with that of X alone?`,
        options: [
          r`One third as large, as if the gap were 3.0 mm`,
          r`One quarter as large, as if the gap were 4.0 mm`,
          r`One half as large, as if the gap were 2.0 mm`,
          r`Four times as large, as if the area were 4A`,
        ],
        correctAnswer: 1,
        explanation: r`In series the gaps effectively add, so the pair acts like one capacitor with the same area and a 4.0 mm gap. Since C = ε₀A/d, four times the gap gives one quarter of X's capacitance. "One third" counts only Y's gap, "one half" averages the two gaps, and "four times as large" treats the series connection as added plate area, which is what a parallel connection does.`,
      },
    ],
  },
  [r`Capacitors in parallel add directly: $C_{eq} =$ {{c1::$C_1 + C_2$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The smoothing stage of a power supply has a 47 μF capacitor and a 33 μF capacitor connected in parallel. What single capacitance is equivalent to the two?`,
        options: [r`80 μF`, r`19 μF`, r`40 μF`, r`14 μF`],
        correctAnswer: 0,
        explanation: r`Capacitors in parallel add directly: 47 μF + 33 μF = 80 μF. 19 μF comes from the product-over-sum rule, which belongs to capacitors in series, 40 μF is the average of the two, and 14 μF is their difference.`,
      },
      {
        question: r`A circuit board needs a total of 100 nF between two points and already has a 68 nF capacitor connected there. What capacitance must be added in parallel with it to reach the 100 nF total?`,
        options: [r`168 nF`, r`40 nF`, r`32 nF`, r`68 nF`],
        correctAnswer: 2,
        explanation: r`In parallel the capacitances add, so 68 nF + C = 100 nF and C = 32 nF. 168 nF adds the target to the existing part, 40 nF comes from a product-over-sum of 100 and 68, and a second 68 nF would give 136 nF.`,
      },
      {
        question: r`A 0.50 μF capacitor and a 250 nF capacitor are connected in parallel on a sensor board. What is their equivalent capacitance?`,
        options: [r`250.5 μF`, r`0.75 μF`, r`0.17 μF`, r`0.25 μF`],
        correctAnswer: 1,
        explanation: r`250 nF is 0.25 μF, and capacitors in parallel add: 0.50 μF + 0.25 μF = 0.75 μF. 250.5 μF adds 250 and 0.50 without converting nF to μF, 0.17 μF is the series result (product over sum), and 0.25 μF is the difference.`,
      },
      {
        question: r`A 3.0 μF capacitor in parallel with a 5.0 μF capacitor is charged and then disconnected from its charger. The pair holds a combined 96 μC. What is the voltage across the pair?`,
        options: [r`51 V`, r`32 V`, r`19 V`, r`12 V`],
        correctAnswer: 3,
        explanation: r`In parallel the equivalent capacitance is 3.0 μF + 5.0 μF = 8.0 μF, so V = Q/C = 96 μC ÷ 8.0 μF = 12 V. 51 V uses the series value of about 1.9 μF, and 32 V and 19 V divide the total charge by only one of the two capacitances.`,
      },
      {
        question: r`A 10 μF capacitor is connected to a fixed-voltage supply. A 30 μF capacitor is then connected in parallel with it while the supply stays attached. Once things settle, the total stored charge is what multiple of the original charge?`,
        options: [r`0.75 times`, r`3 times`, r`4 times`, r`1.3 times`],
        correctAnswer: 2,
        explanation: r`In parallel the capacitances add to 10 μF + 30 μF = 40 μF, four times the original, and at the same voltage Q = CV is four times as large too. "3 times" counts only the added capacitor, "0.75 times" uses the series combination of 7.5 μF, and "1.3 times" comes from dividing 40 by 30.`,
      },
      {
        question: r`A touchscreen electrode has a capacitance of 20 pF and is held at 2.0 V by its driver circuit. A fingertip adds 5.0 pF in parallel with the electrode while the driver keeps the voltage at 2.0 V. How much EXTRA charge flows onto the combination?`,
        options: [r`50 pC`, r`10 pC`, r`40 pC`, r`8.0 pC`],
        correctAnswer: 1,
        explanation: r`In parallel the capacitance rises from 20 pF to 25 pF, so the charge rises from 40 pC to 50 pC and the extra charge is 5.0 pF × 2.0 V = 10 pC. 50 pC is the new total, 40 pC is the original charge, and 8.0 pC is the total charge if the two were wrongly combined as a series pair of 4.0 pF.`,
      },
    ],
  },
  [r`During discharge, capacitor charge decays {{c1::exponentially}}, following $Q = Q_0e^{-t/\tau}$.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor charged to 12 V is disconnected from its battery and connected across a resistor. The discharge has a time constant of 3.0 ms. Using e⁻¹ ≈ 0.37, about what is the capacitor's voltage 3.0 ms after the discharge starts?`,
        options: [r`About 7.6 V`, r`About 6.0 V`, r`About 1.6 V`, r`About 4.4 V`],
        correctAnswer: 3,
        explanation: r`Voltage decays with the same exponential as charge, so after one time constant V ≈ 0.37 × 12 V = 4.4 V. 7.6 V is the amount the voltage has dropped, not what remains, 6.0 V treats the time constant as a half-life, and 1.6 V is the value after two time constants.`,
      },
      {
        question: r`A charged capacitor discharges through a resistor. One time constant after the discharge starts, 74 μC remains on it. Using e⁻¹ ≈ 0.37, about how much charge did it start with?`,
        options: [r`About 200 μC`, r`About 117 μC`, r`About 27 μC`, r`About 148 μC`],
        correctAnswer: 0,
        explanation: r`After one time constant Q = 0.37 Q₀, so Q₀ = 74 μC ÷ 0.37 = 200 μC. 117 μC divides by 0.63, which is the fraction that has left, 27 μC multiplies by 0.37 instead of dividing, and 148 μC treats the time constant as a half-life.`,
      },
      {
        question: r`A capacitor discharging through a resistor holds 600 μC at t = 0 and 222 μC at t = 8.0 ms. Using e⁻¹ ≈ 0.37, what is the time constant of the discharge?`,
        options: [r`About 3.0 ms`, r`About 22 ms`, r`About 8.0 ms`, r`About 4.0 ms`],
        correctAnswer: 2,
        explanation: r`222 μC ÷ 600 μC = 0.37 = e⁻¹, so exactly one time constant has passed and τ = 8.0 ms. 3.0 ms multiplies 8.0 ms by 0.37, 22 ms divides it by 0.37, and 4.0 ms assumes two time constants have passed, which would leave only about 81 μC.`,
      },
      {
        question: r`A capacitor discharges through a resistor with a time constant of 2.0 s. The current is 10 mA at the start of the discharge. Using e⁻³ ≈ 0.05, about what is the current 6.0 s later?`,
        options: [r`About 9.5 mA`, r`About 0.50 mA`, r`About 3.3 mA`, r`About 3.7 mA`],
        correctAnswer: 1,
        explanation: r`Current decays with the same exponential as charge. 6.0 s is three time constants, so I ≈ 0.05 × 10 mA = 0.50 mA. 9.5 mA is the amount by which the current has fallen, 3.3 mA divides the current by 3 as if the decay were a simple proportion, and 3.7 mA is the value after only one time constant.`,
      },
      {
        question: r`A 5.0 nF capacitor holding 100 nC is disconnected from its battery and connected across a 2.0 MΩ resistor. Using e⁻¹ ≈ 0.37, about how much charge is left on it 10 ms later?`,
        options: [r`About 37 nC`, r`About 63 nC`, r`About 14 nC`, r`About 50 nC`],
        correctAnswer: 0,
        explanation: r`τ = RC = (2.0 × 10⁶ Ω)(5.0 × 10⁻⁹ F) = 1.0 × 10⁻² s = 10 ms, so one time constant has passed and Q ≈ 0.37 × 100 nC = 37 nC. 63 nC is the charge that has left, 14 nC is the value after two time constants, and 50 nC treats the time constant as a half-life.`,
      },
      {
        question: r`A capacitor holding 300 μC is connected across a resistor and begins to discharge. Using e⁻¹ ≈ 0.37, about how much charge has flowed off the capacitor through the resistor by the end of one time constant?`,
        options: [r`About 110 μC`, r`About 150 μC`, r`About 300 μC`, r`About 190 μC`],
        correctAnswer: 3,
        explanation: r`After one time constant 0.37 × 300 μC ≈ 110 μC remains, so about 300 μC − 110 μC = 190 μC has flowed off. 110 μC is what is still on the capacitor, 150 μC treats the time constant as a half-life, and 300 μC would need about five time constants.`,
      },
    ],
  },
  [r`In a charging RC circuit, when is the current largest?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery charges an empty capacitor through a resistor in one series loop. Which description matches a graph of the loop's current against time after the switch closes?`,
        options: [
          r`It starts at zero and rises along a flattening curve to a maximum`,
          r`It starts at a maximum and falls along a flattening curve to zero`,
          r`It starts at a maximum and falls along a straight line to zero`,
          r`It starts at zero, rises to a peak, then falls back toward zero`,
        ],
        correctAnswer: 1,
        explanation: r`The current is largest at t = 0, when the capacitor voltage is zero and the full emf is across the resistor, and it then decays exponentially toward zero as the capacitor voltage builds. A curve rising from zero describes the capacitor's charge, not the current. A straight line is wrong because the decay is exponential, and there is no delayed peak.`,
      },
      {
        question: r`A 10 V battery charges an empty capacitor through a resistor in one series loop. A student notes the moments when the capacitor voltage reads 0 V, 3 V, 7 V and 10 V. At which reading is the current in the loop largest?`,
        options: [
          r`At the 0 V reading, with 10 V across the resistor`,
          r`At the 3 V reading, with 7 V across the resistor`,
          r`At the 7 V reading, with 3 V across the resistor`,
          r`At the 10 V reading, with 0 V across the resistor`,
        ],
        correctAnswer: 0,
        explanation: r`The current equals the resistor's voltage divided by R, and the resistor has the full 10 V only at the start, when the capacitor voltage is still 0 V. As the capacitor voltage rises to 3 V and 7 V, less voltage is left for the resistor and the current falls. At the 10 V reading the capacitor is full and the current is zero.`,
      },
    ],
  },
  [r`In an RC circuit an uncharged capacitor acts like a {{c1::wire}} at $t = 0$ and like an open switch at steady state.`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal 12 V battery is in series with a switch and a 4.0 Ω resistor, followed by an uncharged capacitor connected in parallel with a 2.0 Ω resistor. What is the voltage across the 2.0 Ω resistor just after the switch closes, and long afterward?`,
        options: [
          r`4.0 V at first, then 0 V long afterward`,
          r`12 V at first, then 4.0 V long afterward`,
          r`0 V at first, then 12 V long afterward`,
          r`0 V at first, then 4.0 V long afterward`,
        ],
        correctAnswer: 3,
        explanation: r`At first the uncharged capacitor acts like a wire in parallel with the 2.0 Ω resistor, so the voltage across that resistor is 0 V. At steady state the capacitor acts like an open switch, and the two resistors share the 12 V in series: 12 V × 2.0/(4.0 + 2.0) = 4.0 V. The other answers swap the two moments or give the 2.0 Ω resistor the whole battery voltage.`,
      },
      {
        question: r`A circuit contains a battery, resistors, a switch and one capacitor that is uncharged before the switch closes. Which statement about the capacitor is NOT correct?`,
        options: [
          r`Just after the switch closes, the voltage across it is zero`,
          r`Long after the switch closes, no current flows in its branch`,
          r`Just after the switch closes, no current flows in its branch`,
          r`Long after the switch closes, the voltage across it is steady`,
        ],
        correctAnswer: 2,
        explanation: r`Just after the switch closes the uncharged capacitor acts like a wire, so current does flow in its branch, and that makes "just after the switch closes, no current flows in its branch" the false statement. Its voltage is zero at that instant because it holds no charge yet. At steady state it acts like an open switch, with no current in its branch and a steady voltage across it.`,
      },
    ],
  },
  [r`Doubling $R$ in a charging RC circuit changes what, and what stays the same?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A battery charges an empty capacitor through a 5.0 kΩ resistor, and the capacitor reaches 63% of its final charge in 0.30 s. The run is repeated from empty with a 10 kΩ resistor and the same battery and capacitor. How long does it now take to reach 63% of the final charge?`,
        options: [r`0.15 s`, r`0.30 s`, r`0.60 s`, r`1.2 s`],
        correctAnswer: 2,
        explanation: r`63% is reached after one time constant, τ = RC. Doubling R doubles τ, so the time becomes 2 × 0.30 s = 0.60 s. 0.15 s halves the time instead, 0.30 s assumes the resistor does not matter, and 1.2 s multiplies by four as if τ depended on R².`,
      },
      {
        question: r`A battery charges an empty capacitor through a resistor R, and the current just after the switch closes is 9.0 mA. The run is repeated from empty with a resistor of 3R and the same battery and capacitor. What is the current just after the switch closes now?`,
        options: [r`27 mA`, r`3.0 mA`, r`9.0 mA`, r`1.0 mA`],
        correctAnswer: 1,
        explanation: r`The initial current is the emf divided by the resistance, so tripling R cuts it to one third: 9.0 mA ÷ 3 = 3.0 mA. 27 mA multiplies by three instead, 9.0 mA assumes the resistor does not matter at the first instant, and 1.0 mA divides by 3².`,
      },
      {
        question: r`A charging circuit with a 2.0 kΩ resistor has a time constant of 40 ms. With the same battery and capacitor, which resistance gives a time constant of 100 ms?`,
        options: [r`0.80 kΩ`, r`2.5 kΩ`, r`4.0 kΩ`, r`5.0 kΩ`],
        correctAnswer: 3,
        explanation: r`τ = RC is proportional to R, so the resistance must rise by the same factor as the time constant: 100 ms ÷ 40 ms = 2.5, and 2.5 × 2.0 kΩ = 5.0 kΩ. 0.80 kΩ divides by 2.5 instead of multiplying, 2.5 kΩ is the factor itself rather than the resistance, and 4.0 kΩ only doubles R, which gives 80 ms.`,
      },
      {
        question: r`In a slow timing circuit, an empty 3.0 μF capacitor fills from a 20 V supply through 1.0 MΩ in series. An engineer changes the series resistance to 4.0 MΩ and starts again from empty. What final charge and time constant result?`,
        options: [
          r`60 μC, with a time constant of 12 s`,
          r`15 μC, with a time constant of 12 s`,
          r`60 μC, with a time constant of 3.0 s`,
          r`240 μC, with a time constant of 12 s`,
        ],
        correctAnswer: 0,
        explanation: r`The final charge does not depend on R: Q = Cε = (3.0 μF)(20 V) = 60 μC with either resistance. The time constant does: τ = RC = (4.0 × 10⁶ Ω)(3.0 × 10⁻⁶ F) = 12 s. The 15 μC and 240 μC answers wrongly scale the final charge with the resistance, and 3.0 s is the time constant with the original 1.0 MΩ.`,
      },
      {
        question: r`With an 8.0 kΩ resistor, a charging RC circuit has an initial current of 1.5 mA and its capacitor is 95% charged after 2.4 s. The run is repeated from empty with a 4.0 kΩ resistor and the same battery and capacitor. What are the initial current and the time to 95% now?`,
        options: [r`0.75 mA and 4.8 s`, r`3.0 mA and 1.2 s`, r`3.0 mA and 2.4 s`, r`1.5 mA and 1.2 s`],
        correctAnswer: 1,
        explanation: r`Halving R doubles the initial current, since I₀ = ε/R, giving 3.0 mA. It also halves the time constant, so every charging milestone comes in half the time: 1.2 s. The "0.75 mA and 4.8 s" answer applies the changes for a doubled resistance, and the other two change only one of the two quantities.`,
      },
      {
        question: r`A charging RC circuit has a time constant of 5.0 ms and an initial current of 8.0 mA. After its resistor is swapped, with the same battery and capacitor, the initial current is 2.0 mA. What is the new time constant?`,
        options: [r`1.25 ms`, r`5.0 ms`, r`20 ms`, r`10 ms`],
        correctAnswer: 2,
        explanation: r`The initial current I₀ = ε/R fell to one quarter, so the resistance is four times as large, and τ = RC is four times as large too: 4 × 5.0 ms = 20 ms. 1.25 ms divides by four instead, 5.0 ms assumes the time constant is unaffected, and 10 ms only doubles it.`,
      },
    ],
  },
  [r`Why is an axon membrane modeled as a resistor and capacitor in parallel?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In the circuit model of a patch of axon membrane, why are the resistor and the capacitor drawn in parallel with each other and not in series?`,
        options: [
          r`Both span from inside to outside, so they share the same voltage`,
          r`Both span from inside to outside, so they carry the same current`,
          r`Both run along the axon's length, so they share the same voltage`,
          r`Both run along the axon's length, so they carry the same current`,
        ],
        correctAnswer: 0,
        explanation: r`The lipid bilayer (the capacitor) and the ion channels (the leak resistance) each connect the inside of the cell to the outside, so the same membrane voltage sits across both, which is what parallel means. They do not carry the same current: channel current and the current charging the bilayer are separate paths. Neither element runs along the axon's length.`,
      },
      {
        question: r`A membrane patch is modeled only as a resistor in parallel with a capacitor. An electrode holds the voltage across the patch constant at 10 mV. Through which element does current flow while the voltage is held constant?`,
        options: [
          r`Only the capacitor, because the resistor's voltage is steady`,
          r`Both elements, because they share the same steady voltage`,
          r`Neither element, because the patch voltage is not changing`,
          r`Only the resistor, because the capacitor's charge is steady`,
        ],
        correctAnswer: 3,
        explanation: r`A capacitor carries current only while its charge, and so its voltage, is changing, so at a constant 10 mV no current flows onto the bilayer. The leak resistance has 10 mV across it and so carries a steady current I = V/R through the channels. A steady voltage across a resistor does not stop its current, so the answers with no resistor current are wrong.`,
      },
    ],
  },
  [r`That $2000$ V defibrillator discharges through a $50\ \Omega$ thorax. Estimate the peak current and the pulse duration.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The 200 μF capacitor in a camera flash unit sits at 300 V. It then empties through a flash tube that acts as a 1.5 Ω resistor. How large is the current at the first instant, and what is the time constant?`,
        options: [r`200 A and 300 ms`, r`200 A and 0.30 ms`, r`450 A and 0.30 ms`, r`5.0 mA and 300 ms`],
        correctAnswer: 1,
        explanation: r`The peak current comes at the first instant: I = V/R = 300 V ÷ 1.5 Ω = 200 A. The time constant is τ = RC = (1.5 Ω)(200 × 10⁻⁶ F) = 3.0 × 10⁻⁴ s = 0.30 ms. The 300 ms answers drop the 10⁻⁶ of the microfarad, 450 A multiplies V by R, and 5.0 mA divides R by V.`,
      },
      {
        question: r`With 1500 V on its 100 μF capacitor, a rescue unit sends a shock through a patient, and the current peaks at 25 A. Treating the patient as a resistor, find that resistance and the time constant of the shock.`,
        options: [r`60 Ω and 60 ms`, r`600 Ω and 60 ms`, r`60 Ω and 6.0 ms`, r`600 Ω and 6.0 ms`],
        correctAnswer: 2,
        explanation: r`The peak current is V/R, so R = V/I = 1500 V ÷ 25 A = 60 Ω. Then τ = RC = (60 Ω)(100 × 10⁻⁶ F) = 6.0 × 10⁻³ s = 6.0 ms. The 600 Ω answers slip a power of ten in the division, and 60 ms with 60 Ω slips a power of ten when converting microfarads.`,
      },
      {
        question: r`An implanted defibrillator discharges its capacitor through a path in the heart that acts as a 40 Ω resistor. The current peaks at 15 A. What was the voltage across the capacitor at the start of the discharge?`,
        options: [r`600 V`, r`2.7 V`, r`0.38 V`, r`55 V`],
        correctAnswer: 0,
        explanation: r`At the first instant the full capacitor voltage drives the current, so V = IR = (15 A)(40 Ω) = 600 V. 2.7 V divides the resistance by the current, 0.38 V divides the current by the resistance, and 55 adds the two numbers.`,
      },
      {
        question: r`A nerve stimulator discharges a capacitor through tissue that acts as a 500 Ω resistor. The current pulse dies away with a time constant of 2.0 ms. What is the capacitance?`,
        options: [r`1.0 F`, r`4.0 mF`, r`250 μF`, r`4.0 μF`],
        correctAnswer: 3,
        explanation: r`τ = RC, so C = τ/R = (2.0 × 10⁻³ s) ÷ (500 Ω) = 4.0 × 10⁻⁶ F = 4.0 μF. 4.0 mF leaves the time in milliseconds without converting to seconds, 1.0 F multiplies R by τ instead of dividing, and 250 comes from dividing 500 by 2.0.`,
      },
      {
        question: r`On a chest that acts as a 50 Ω resistor, a defibrillator gives a peak current of 30 A and a discharge time constant of 6.0 ms. The same unit, charged to the same voltage, is used on a chest that acts as a 75 Ω resistor. What are the peak current and the time constant now?`,
        options: [r`20 A and 9.0 ms`, r`45 A and 4.0 ms`, r`20 A and 4.0 ms`, r`45 A and 9.0 ms`],
        correctAnswer: 0,
        explanation: r`The resistance is 1.5 times as large. Peak current V/R falls by that factor: 30 A ÷ 1.5 = 20 A. The time constant RC rises by that factor: 6.0 ms × 1.5 = 9.0 ms. The answers with 45 A or 4.0 ms apply the factor of 1.5 in the wrong direction to one or both quantities.`,
      },
      {
        question: r`A person charged to 6.0 kV by walking across a carpet touches a metal doorknob. Model the body as a 100 pF capacitor that discharges through a resistance of 1.5 kΩ. What are the peak current and the time constant of the discharge?`,
        options: [r`4.0 mA and 0.15 μs`, r`4.0 A and 0.15 ms`, r`4.0 mA and 0.15 ms`, r`4.0 A and 0.15 μs`],
        correctAnswer: 3,
        explanation: r`Peak current: I = V/R = (6.0 × 10³ V) ÷ (1.5 × 10³ Ω) = 4.0 A. Time constant: τ = RC = (1.5 × 10³ Ω)(100 × 10⁻¹² F) = 1.5 × 10⁻⁷ s = 0.15 μs. The 4.0 mA answers forget that the kilo prefixes cancel, and the 0.15 ms answers treat picofarads as nanofarads.`,
      },
    ],
  },
  [r`At steady state a capacitor in series with a resistor passes {{c1::zero}} current, so the full battery voltage sits across the capacitor.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 1.5 V cell, a 10 kΩ resistor and a 220 μF capacitor are connected in one series loop and left for a very long time. How much charge is on the capacitor?`,
        options: [r`147 μC`, r`2.2 μC`, r`165 μC`, r`330 μC`],
        correctAnswer: 3,
        explanation: r`At steady state no current flows, so the resistor has no voltage across it and the capacitor has the full 1.5 V: Q = CV = (220 μF)(1.5 V) = 330 μC. 147 comes from dividing C by V, 2.2 is the product RC in seconds rather than a charge, and 165 μC assumes the resistor keeps half the voltage.`,
      },
      {
        question: r`A battery, a 3.0 kΩ resistor and a 4.0 μF capacitor are connected in one series loop. Long after the loop is completed, the capacitor holds 48 μC. What is the battery's emf?`,
        options: [r`192 V`, r`12 V`, r`0.083 V`, r`16 V`],
        correctAnswer: 1,
        explanation: r`At steady state the current is zero, so the full emf is across the capacitor: ε = Q/C = 48 μC ÷ 4.0 μF = 12 V. 192 multiplies Q by C, 0.083 divides C by Q, and 16 divides the charge by the resistance value, which plays no part at steady state.`,
      },
      {
        question: r`A 5.0 V supply, a 1.0 MΩ resistor and a capacitor are connected in one series loop. Once the current has fallen to zero, the capacitor holds 2.5 mC. What is its capacitance?`,
        options: [r`500 μF`, r`12.5 mF`, r`2.0 mF`, r`0.50 μF`],
        correctAnswer: 0,
        explanation: r`With zero current the resistor has no voltage across it, so the capacitor has the full 5.0 V: C = Q/V = 2.5 × 10⁻³ C ÷ 5.0 V = 5.0 × 10⁻⁴ F = 500 μF. 12.5 mF multiplies Q by V, 2.0 mF comes from dividing V by Q, and 0.50 μF slips three powers of ten in the conversion.`,
      },
      {
        question: r`A 3.0 V coin cell, a 2.0 MΩ resistor and a 150 nF capacitor are connected in one series loop and left until the current has stopped. How much charge is on the capacitor?`,
        options: [r`450 μC`, r`0.050 μC`, r`0.45 μC`, r`0.90 μC`],
        correctAnswer: 2,
        explanation: r`With no current there is no voltage across the resistor, so the capacitor has the full 3.0 V: Q = CV = (150 × 10⁻⁹ F)(3.0 V) = 450 × 10⁻⁹ C = 0.45 μC. 450 μC treats nanofarads as microfarads, 0.050 μC divides C by V, and 0.90 μC brings the 2.0 of the resistance into a result that does not depend on R.`,
      },
      {
        question: r`A 6.0 V battery, a 2.0 kΩ resistor and a capacitor form one series loop, and the capacitor is allowed to charge fully. The run is repeated from empty with an 18 V battery and a 6.0 kΩ resistor. How does the final charge on the capacitor compare with the first run?`,
        options: [
          r`It is one third as large`,
          r`It is three times as large`,
          r`It is nine times as large`,
          r`It is exactly the same size`,
        ],
        correctAnswer: 1,
        explanation: r`At steady state the current is zero, so the capacitor has the full battery voltage whatever the resistance, and Q = CV triples when the battery goes from 6.0 V to 18 V. "Nine times" multiplies the voltage factor by the resistance factor, "the same" divides one by the other as if the charge depended on V/R, and "one third" uses the resistance factor alone, inverted.`,
      },
      {
        question: r`An ideal 15 V battery, a 2.0 kΩ resistor, a 3.0 kΩ resistor and a 4.0 μF capacitor are all connected in one series loop. How much charge is on the capacitor at steady state?`,
        options: [r`60 μC`, r`36 μC`, r`24 μC`, r`0 μC`],
        correctAnswer: 0,
        explanation: r`The capacitor is in series with both resistors, so at steady state the current in the whole loop is zero and neither resistor has any voltage across it. The capacitor has the full 15 V: Q = CV = (4.0 μF)(15 V) = 60 μC. 36 μC and 24 μC wrongly split the 15 V between the resistors as 9.0 V and 6.0 V, and 0 μC describes the first instant.`,
      },
    ],
  },
  [r`A $12$ V battery, a $2$ k$\Omega$ resistor, and an uncharged $10\ \mu$F capacitor sit in series. What is the current the instant the switch closes?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V battery, a 450 Ω resistor, a switch and an uncharged 1000 μF capacitor are connected in series. What is the current at the instant the switch is closed?`,
        options: [r`0 mA`, r`9.0 mA`, r`20 mA`, r`50 mA`],
        correctAnswer: 2,
        explanation: r`An uncharged capacitor acts like a wire at the first instant, so the full 9.0 V is across the resistor: I = V/R = 9.0 V ÷ 450 Ω = 0.020 A = 20 mA. 0 mA is the steady-state current, 9.0 comes from multiplying C by V, which gives the final charge in mC, and 50 divides R by V.`,
      },
      {
        question: r`A camera's flash capacitor starts uncharged and is charged from a 300 V supply through a series resistor. The current at the instant charging starts must be 15 mA. What resistance is needed?`,
        options: [r`20 kΩ`, r`20 Ω`, r`4.5 kΩ`, r`50 Ω`],
        correctAnswer: 0,
        explanation: r`At the first instant the uncharged capacitor acts like a wire, so the resistor has the full 300 V: R = V/I = 300 V ÷ 0.015 A = 20,000 Ω = 20 kΩ. 20 Ω forgets to convert mA to A, 4.5 kΩ multiplies 300 by 15, and 50 comes from dividing the current by the voltage.`,
      },
      {
        question: r`A battery, a 6.0 kΩ resistor, a switch and an uncharged capacitor are connected in series. At the instant the switch closes, the current is 2.5 mA. What is the battery's emf?`,
        options: [r`2.4 V`, r`15 V`, r`0.42 V`, r`15 kV`],
        correctAnswer: 1,
        explanation: r`At the first instant the uncharged capacitor has no voltage, so the full emf is across the resistor: ε = IR = 2.5 × 10⁻³ A × 6.0 × 10³ Ω = 15 V. 15 kV forgets to convert mA to A, 2.4 divides R by I, and 0.42 divides I by R.`,
      },
      {
        question: r`A 1.5 V cell, a 3.0 MΩ resistor, a switch and an uncharged 10 nF capacitor are connected in series. What is the current at the instant the switch is closed?`,
        options: [r`0.50 mA`, r`2.0 μA`, r`4.5 μA`, r`0.50 μA`],
        correctAnswer: 3,
        explanation: r`The uncharged capacitor acts like a wire at first, so I = V/R = 1.5 V ÷ (3.0 × 10⁶ Ω) = 5.0 × 10⁻⁷ A = 0.50 μA. 0.50 mA treats megohms as kilohms, 2.0 comes from dividing R by V, and 4.5 comes from multiplying V by R.`,
      },
      {
        question: r`A battery, a resistor, a switch and an uncharged capacitor are connected in series, and the current at the instant the switch closes is 8.0 mA. The run is repeated from uncharged with a battery of twice the emf and a resistor of four times the resistance. What is the current at the instant the switch closes now?`,
        options: [r`16 mA`, r`1.0 mA`, r`4.0 mA`, r`64 mA`],
        correctAnswer: 2,
        explanation: r`The initial current is ε/R. Doubling ε and quadrupling R multiplies it by 2/4 = 1/2, so it becomes 4.0 mA. 16 mA inverts that ratio, 64 mA multiplies by both factors, and 1.0 mA divides by both factors.`,
      },
      {
        question: r`A 12 V battery with an internal resistance of 1.0 Ω is connected in series with a 5.0 Ω resistor, a switch and an uncharged capacitor. What is the current at the instant the switch is closed?`,
        options: [r`2.4 A`, r`12 A`, r`0 A`, r`2.0 A`],
        correctAnswer: 3,
        explanation: r`At the first instant the uncharged capacitor acts like a wire, so the emf drives current through the total series resistance: I = 12 V ÷ (1.0 Ω + 5.0 Ω) = 2.0 A. 2.4 A leaves out the internal resistance, 12 A leaves out the 5.0 Ω resistor, and 0 A is the current at steady state.`,
      },
    ],
  },
  [r`$R_1$ and $R_2$ are in series across a battery and a capacitor is wired in parallel with $R_2$. What charge does it hold at steady state?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 1.0 kΩ resistor and a 3.0 kΩ resistor are in series across an ideal 12 V battery. A 2.0 μF capacitor is connected in parallel with the 3.0 kΩ resistor. How much charge is on the capacitor at steady state?`,
        options: [r`18 μC`, r`24 μC`, r`6.0 μC`, r`0 μC`],
        correctAnswer: 0,
        explanation: r`At steady state no current enters the capacitor, so the resistors form a divider: the 3.0 kΩ resistor has 12 V × 3.0/(1.0 + 3.0) = 9.0 V, and Q = CV = (2.0 μF)(9.0 V) = 18 μC. 24 μC uses the full battery voltage, 6.0 μC uses the 3.0 V across the other resistor, and 0 μC describes the first instant.`,
      },
      {
        question: r`A 10 Ω resistor and a 30 Ω resistor are in series across an ideal 20 V battery, and a capacitor is connected in parallel with the 10 Ω resistor. What is the voltage across the capacitor at steady state?`,
        options: [r`15 V`, r`20 V`, r`10 V`, r`5.0 V`],
        correctAnswer: 3,
        explanation: r`At steady state the capacitor carries no current, so the two resistors share the 20 V as a divider and the capacitor takes the voltage of the 10 Ω resistor: 20 V × 10/(10 + 30) = 5.0 V. 15 V is the voltage across the 30 Ω resistor, 20 V is the battery voltage, and 10 V splits the voltage equally.`,
      },
      {
        question: r`A 6.0 kΩ resistor and a 2.0 kΩ resistor are in series across an ideal battery. A 10 μF capacitor connected in parallel with the 2.0 kΩ resistor holds 30 μC at steady state. What is the battery's emf?`,
        options: [r`3.0 V`, r`4.0 V`, r`12 V`, r`9.0 V`],
        correctAnswer: 2,
        explanation: r`The capacitor voltage is Q/C = 30 μC ÷ 10 μF = 3.0 V, which is also the voltage across the 2.0 kΩ resistor. That resistor has 2.0/(6.0 + 2.0) = one quarter of the emf, so ε = 4 × 3.0 V = 12 V. 3.0 V takes the capacitor voltage as the emf, 9.0 V is the voltage across the 6.0 kΩ resistor, and 4.0 V uses the wrong resistor's share.`,
      },
      {
        question: r`In a sensor circuit, a 5.0 kΩ resistor and a 15 kΩ resistor are in series across an ideal 8.0 V supply. A capacitor connected in parallel with the 15 kΩ resistor holds 12 μC at steady state. What is its capacitance?`,
        options: [r`1.5 μF`, r`2.0 μF`, r`6.0 μF`, r`72 μF`],
        correctAnswer: 1,
        explanation: r`At steady state the 15 kΩ resistor has 8.0 V × 15/(5.0 + 15) = 6.0 V, and the capacitor shares that voltage: C = Q/V = 12 μC ÷ 6.0 V = 2.0 μF. 1.5 μF uses the full 8.0 V, 6.0 μF uses the 2.0 V across the other resistor, and 72 multiplies the charge by the voltage.`,
      },
      {
        question: r`Two equal resistors, R₁ and R₂, are in series across an ideal battery, and a capacitor is connected in parallel with R₂. R₂ is then replaced by a resistor of three times its resistance, and the circuit settles again. The capacitor's steady-state charge is now what multiple of its earlier value?`,
        options: [r`3 times`, r`0.5 times`, r`1 times`, r`1.5 times`],
        correctAnswer: 3,
        explanation: r`With equal resistors the capacitor has half the emf. With R₂ tripled it has 3R/(R + 3R) = three quarters of the emf, so the voltage and the charge Q = CV rise by (3/4) ÷ (1/2) = 1.5. "3 times" assumes the voltage scales directly with R₂, "0.5 times" uses the other resistor's share, and "1 times" assumes the capacitor has the battery voltage.`,
      },
      {
        question: r`A 200 Ω resistor and a 300 Ω resistor are in series across an ideal 10 V battery. A 500 nF capacitor is connected in parallel with the 300 Ω resistor. How much charge is on the capacitor at steady state?`,
        options: [r`5.0 μC`, r`3.0 μC`, r`2.0 μC`, r`3.0 mC`],
        correctAnswer: 1,
        explanation: r`At steady state the 300 Ω resistor has 10 V × 300/(200 + 300) = 6.0 V, and the capacitor shares it: Q = CV = (500 × 10⁻⁹ F)(6.0 V) = 3.0 × 10⁻⁶ C = 3.0 μC. 5.0 μC uses the full battery voltage, 2.0 μC uses the 4.0 V across the 200 Ω resistor, and 3.0 mC treats nanofarads as microfarads.`,
      },
    ],
  },
  [r`A defibrillator's $100\ \mu$F capacitor charged to $2000$ V stores $U = \frac12 CV^2 =$ {{c1::$200$ J}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`The power unit of a pulsed laser charges a 20 μF capacitor to 3000 V. How much energy does the capacitor store?`,
        options: [r`180 J`, r`90 J`, r`0.030 J`, r`0.060 J`],
        correctAnswer: 1,
        explanation: r`U = ½CV² = ½(20 × 10⁻⁶ F)(3000 V)² = ½(20 × 10⁻⁶)(9.0 × 10⁶) = 90 J. 180 J leaves out the factor of ½, 0.030 J forgets to square the voltage, and 0.060 J forgets both the square and the ½.`,
      },
      {
        question: r`A 400 μF capacitor in a pulse generator must store 32 J. To what voltage must it be charged?`,
        options: [r`400 V`, r`280 V`, r`160 kV`, r`80 kV`],
        correctAnswer: 0,
        explanation: r`V² = 2U/C = 2 × 32 J ÷ 4.0 × 10⁻⁴ F = 1.6 × 10⁵ V², so V = 400 V. 280 V leaves out the factor of 2 under the root, 160 kV forgets to take the square root, and 80 kV forgets both the factor of 2 and the root.`,
      },
      {
        question: r`An implanted defibrillator must store 36 J when its capacitor is charged to 600 V. What capacitance does it need?`,
        options: [r`100 μF`, r`120 mF`, r`60 mF`, r`200 μF`],
        correctAnswer: 3,
        explanation: r`C = 2U/V² = (2 × 36 J) ÷ (600 V)² = 72 ÷ (3.6 × 10⁵) = 2.0 × 10⁻⁴ F = 200 μF. 100 μF leaves out the factor of 2, 120 mF divides by V instead of V², and 60 mF makes both of those mistakes.`,
      },
      {
        question: r`A 5.0 F supercapacitor that backs up a memory chip is charged to 2.0 V. How much energy does it store?`,
        options: [r`20 J`, r`5.0 J`, r`10 J`, r`2.5 J`],
        correctAnswer: 2,
        explanation: r`U = ½CV² = ½(5.0 F)(2.0 V)² = ½(5.0)(4.0) = 10 J. 20 J leaves out the factor of ½, 5.0 J forgets to square the voltage, and 2.5 J halves the capacitance without using the voltage at all.`,
      },
      {
        question: r`A 50 nF capacitor in a laboratory power supply is charged to 200 V. How much energy does it store?`,
        options: [r`1.0 mJ`, r`2.0 mJ`, r`5.0 μJ`, r`1.0 J`],
        correctAnswer: 0,
        explanation: r`U = ½CV² = ½(50 × 10⁻⁹ F)(200 V)² = ½(5.0 × 10⁻⁸)(4.0 × 10⁴) = 1.0 × 10⁻³ J = 1.0 mJ. 2.0 mJ leaves out the ½, 5.0 μJ forgets to square the voltage, and 1.0 J treats nanofarads as microfarads.`,
      },
      {
        question: r`A defibrillator's capacitor stores 180 J when charged to 3000 V. A shock is cut off when the capacitor's voltage has fallen to 1000 V. How much energy has the capacitor delivered by then?`,
        options: [r`120 J`, r`20 J`, r`160 J`, r`60 J`],
        correctAnswer: 2,
        explanation: r`Energy scales with V², so at one third of the voltage the capacitor holds (1/3)² = 1/9 of its energy: 180 J ÷ 9 = 20 J. The energy delivered is 180 J − 20 J = 160 J. 120 J treats energy as proportional to V, 20 J is the energy still stored, and 60 J is one third of 180 J.`,
      },
    ],
  },
  [r`Two identical capacitors are connected across the same battery, first in parallel and then in series. Which arrangement stores more energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two identical capacitors connected in series across a battery store 20 mJ in total. They are discharged and then connected in parallel across the same battery. How much energy do they store in total now?`,
        options: [r`5.0 mJ`, r`40 mJ`, r`20 mJ`, r`80 mJ`],
        correctAnswer: 3,
        explanation: r`In series the pair has C/2, in parallel 2C, four times as much. At the same battery voltage U = ½CV² is four times as large: 4 × 20 mJ = 80 mJ. 5.0 mJ inverts the factor, 40 mJ only doubles the energy, and 20 mJ assumes the arrangement does not matter.`,
      },
      {
        question: r`Two 10 μF capacitors are connected in parallel across a battery and together store 1.0 mJ. What is the battery's voltage?`,
        options: [r`20 V`, r`14 V`, r`10 V`, r`100 V`],
        correctAnswer: 2,
        explanation: r`In parallel the pair has 20 μF, so V² = 2U/C = (2 × 1.0 × 10⁻³ J) ÷ (20 × 10⁻⁶ F) = 100 V² and V = 10 V. 20 V uses the series value of 5.0 μF, 14 V uses a single 10 μF capacitor, and 100 V forgets to take the square root.`,
      },
      {
        question: r`Two identical 8.0 μF capacitors are connected in series across a 20 V battery. How much energy is stored in EACH capacitor?`,
        options: [r`800 μJ`, r`400 μJ`, r`1600 μJ`, r`200 μJ`],
        correctAnswer: 1,
        explanation: r`Identical capacitors in series share the voltage equally, 10 V each, so each stores ½(8.0 μF)(10 V)² = 400 μJ. 800 μJ is the total for the pair, found from ½(4.0 μF)(20 V)². 1600 μJ gives each capacitor the full 20 V, which is the parallel case, and 200 μJ halves the correct answer again.`,
      },
      {
        question: r`Three identical capacitors are connected to a battery, first all in parallel and later all in series across the same battery. The total energy stored in the parallel arrangement is how many times the total stored in the series arrangement?`,
        options: [r`9 times`, r`3 times`, r`6 times`, r`1/9 times`],
        correctAnswer: 0,
        explanation: r`In parallel the three give 3C, and in series C/3, so the parallel capacitance is nine times the series one. With the same battery voltage, U = ½CV² is nine times as large in parallel. "3 times" compares one arrangement with a single capacitor, "6 times" adds the two factors of three, and "1/9 times" inverts the ratio.`,
      },
      {
        question: r`Two 3.0 μF capacitors can be joined to an 8.0 V battery either in parallel or in series. How much MORE energy does the pair hold in parallel than in series?`,
        options: [r`192 μJ`, r`48 μJ`, r`144 μJ`, r`96 μJ`],
        correctAnswer: 2,
        explanation: r`In parallel: ½(6.0 μF)(8.0 V)² = 192 μJ. In series: ½(1.5 μF)(8.0 V)² = 48 μJ. The difference is 192 μJ − 48 μJ = 144 μJ. 192 μJ and 48 μJ are the two separate totals, and 96 μJ is the energy of one 3.0 μF capacitor at 8.0 V.`,
      },
      {
        question: r`Two 500 nF capacitors are connected across a 2.0 kV supply, first in parallel with each other and later in series with each other. How much energy does the pair store in each arrangement?`,
        options: [
          r`0.50 J in parallel and 2.0 J in series`,
          r`2.0 J in parallel and 0.50 J in series`,
          r`2.0 J in parallel and 1.0 J in series`,
          r`2.0 mJ in parallel and 0.50 mJ in series`,
        ],
        correctAnswer: 1,
        explanation: r`In parallel the pair has 1.0 μF: U = ½(1.0 × 10⁻⁶ F)(2.0 × 10³ V)² = 2.0 J. In series it has 0.25 μF, one quarter as much, so U = 0.50 J. The swapped answer mixes up the two rules, "1.0 J in series" uses a single 500 nF capacitor, and the millijoule answer forgets that kV must be converted to V before squaring.`,
      },
    ],
  },
  [r`A neuron's membrane time constant is $\tau = R_mC_m$, so a longer $\tau$ produces {{c1::greater temporal summation}} of successive inputs.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Neuron X can add together two excitatory inputs that arrive at one synapse 30 ms apart. Neuron Y, with the same membrane capacitance, adds such inputs only when they arrive within 3 ms. Which difference between the neurons explains this?`,
        options: [
          r`X has the higher membrane resistance, so a longer time constant`,
          r`X has the lower membrane resistance, so a longer time constant`,
          r`X has the higher membrane resistance, so a shorter time constant`,
          r`X has the lower membrane resistance, so a shorter time constant`,
        ],
        correctAnswer: 0,
        explanation: r`Summing inputs that arrive far apart in time needs a long membrane time constant, so that the first potential has not faded when the second arrives. Since τ = R_mC_m and the capacitances match, X must have the higher membrane resistance. A lower resistance would shorten τ, and a shorter τ would give less temporal summation, not more.`,
      },
      {
        question: r`A neuron's membrane time constant is 10 ms. One excitatory input depolarizes it by 4.0 mV, and an identical input arrives at the same synapse 10 ms later. Assume the depolarizations simply add and use e⁻¹ ≈ 0.37. About how large is the depolarization just after the second input?`,
        options: [
          r`About 8.0 mV, since all of the first remains`,
          r`About 6.5 mV, since 63% of the first remains`,
          r`About 4.0 mV, since none of the first remains`,
          r`About 5.5 mV, since 37% of the first remains`,
        ],
        correctAnswer: 3,
        explanation: r`The first potential decays exponentially with the membrane time constant, so after 10 ms (one time constant) 0.37 × 4.0 mV ≈ 1.5 mV is left. The second input adds 4.0 mV, giving about 5.5 mV. 63% is the fraction that has decayed away, not the fraction left. "All remains" and "none remains" would need a much longer or a much shorter time constant.`,
      },
    ],
  },
  [r`Myelin raises membrane resistance, lengthening the axon's length constant, so a passive signal decays {{c1::less}} with distance.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two axon segments have the same internal (axial) resistance per unit length. A small depolarization spreading passively fades to 37% of its starting size over 2.0 mm in segment X and over 0.50 mm in segment Y. Which segment has the higher membrane resistance, and why?`,
        options: [
          r`Y, because less current leaks out across its membrane`,
          r`Y, because more current leaks out across its membrane`,
          r`X, because less current leaks out across its membrane`,
          r`X, because more current leaks out across its membrane`,
        ],
        correctAnswer: 2,
        explanation: r`The signal travels four times as far in X before fading to the same fraction, so X has the longer length constant. A passive signal fades because current leaks out across the membrane, and a higher membrane resistance means less leak, so X has the higher membrane resistance. More leak would shorten the distance, and Y is the segment where the signal fades sooner.`,
      },
      {
        question: r`Axons A and B are alike except that the myelin of B gives its internodes four times the membrane resistance of those of A. In each axon, a passive signal from one node must still be above threshold when it reaches the next. How can the internode length in B compare with that in A?`,
        options: [
          r`Shorter, since the length constant is greater in B`,
          r`Longer, since the length constant is greater in B`,
          r`Longer, since the length constant is smaller in B`,
          r`Shorter, since the length constant is smaller in B`,
        ],
        correctAnswer: 1,
        explanation: r`A higher membrane resistance lets less current leak out, which lengthens the length constant, so the passive signal in B decays less with distance. It can therefore travel a longer internode and still arrive above threshold. A smaller length constant would go with a lower membrane resistance, and a greater length constant does not call for nodes that are closer together.`,
      },
    ],
  },
}
