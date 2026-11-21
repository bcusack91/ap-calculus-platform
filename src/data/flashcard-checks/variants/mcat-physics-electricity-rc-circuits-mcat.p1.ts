import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-rc-circuits-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`A charging capacitor follows $Q(t) =$ {{c1::$C\varepsilon(1 - e^{-t/RC})$}}, rising quickly and then leveling off.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 10 μF capacitor, initially uncharged, is charged through a resistor by an ideal 6.0 V battery, so its charge follows Q(t) = Cε(1 − e^(−t/RC)). Taking e⁻³ ≈ 0.05, about how much charge does it hold at t = 3RC?`,
        options: [r`3.0 μC`, r`60 μC`, r`38 μC`, r`57 μC`],
        correctAnswer: 3,
        explanation: r`The final charge is Cε = (10 μF)(6.0 V) = 60 μC, and at t = 3RC the capacitor holds (1 − 0.05) of it: 0.95 × 60 = 57 μC. 3.0 μC uses e⁻³ alone, which is the fraction still missing. 60 μC is the final charge, reached only after a longer time, and 38 μC is the 63% value that belongs to t = RC.`,
      },
      {
        question: r`An uncharged 2.0 μF capacitor is charged through a resistor by an ideal battery, following Q(t) = Cε(1 − e^(−t/RC)). At t = RC it holds 63 μC. Taking e⁻¹ ≈ 0.37, what is the battery's EMF?`,
        options: [r`32 V`, r`50 V`, r`20 V`, r`85 V`],
        correctAnswer: 1,
        explanation: r`At t = RC the charge is 0.63Cε, so ε = 63 μC / (0.63 × 2.0 μF) = 50 V. 32 V treats 63 μC as the final charge (63/2.0). 20 V multiplies by 0.63 instead of dividing by it, and 85 V divides by 0.37, the fraction still missing.`,
      },
      {
        question: r`A sensor's uncharged capacitor is charged through a resistor by an ideal 5.0 V supply, following Q(t) = Cε(1 − e^(−t/RC)). At t = 2RC it holds 86 μC. Taking e⁻² ≈ 0.14, what is its capacitance?`,
        options: [r`20 μF`, r`17 μF`, r`120 μF`, r`15 μF`],
        correctAnswer: 0,
        explanation: r`At t = 2RC the charge is (1 − 0.14)Cε = 0.86Cε, so C = 86 μC / (0.86 × 5.0 V) = 20 μF. 17 μF treats 86 μC as the final charge (86/5.0). 120 μF divides by 0.14 instead of 0.86, and 15 μF multiplies by 0.86 instead of dividing.`,
      },
      {
        question: r`In a laboratory demonstration of exponential charging, a student closes a switch so that an ideal 10 V battery charges an uncharged 5.0 μF capacitor through a 30 kΩ resistor in one series loop, and Q(t) = Cε(1 − e^(−t/RC)). Taking e⁻¹ ≈ 0.37 and e⁻² ≈ 0.14, about how much charge has collected on the capacitor's plates 0.30 s later?`,
        options: [r`7.0 μC`, r`50 μC`, r`43 μC`, r`32 μC`],
        correctAnswer: 2,
        explanation: r`RC = (3.0 × 10⁴ Ω)(5.0 × 10⁻⁶ F) = 0.15 s, so 0.30 s is 2RC. The final charge is Cε = 50 μC and the capacitor holds 0.86 × 50 = 43 μC. 7.0 μC is the part still missing (0.14 × 50), 50 μC is the final charge, and 32 μC treats 0.30 s as one time constant.`,
      },
      {
        question: r`A graph of charge against time for an uncharged capacitor, charged through a resistor by an ideal battery, follows Q(t) = Cε(1 − e^(−t/RC)). Taking e⁻¹ ≈ 0.37 and e⁻² ≈ 0.14, the height of the curve at t = 2RC is about how many times its height at t = RC?`,
        options: [r`About 2.0 times`, r`About 1.4 times`, r`About 2.6 times`, r`About 0.73 times`],
        correctAnswer: 1,
        explanation: r`At t = RC the charge is 0.63Cε and at t = 2RC it is 0.86Cε, so the ratio is 0.86/0.63 ≈ 1.4. The curve levels off, so doubling the time does not double the charge, which rules out 2.0. The value 2.6 is 0.37/0.14, a ratio of the missing fractions, and 0.73 is the ratio upside down.`,
      },
      {
        question: r`A 50 μF capacitor, initially uncharged, is charged through a resistor by an ideal 20 V battery, following Q(t) = Cε(1 − e^(−t/RC)). Taking e⁻¹ ≈ 0.37, how much MORE charge must still flow onto it after t = RC before it is full?`,
        options: [r`630 μC`, r`1000 μC`, r`370 μC`, r`140 μC`],
        correctAnswer: 2,
        explanation: r`The final charge is Cε = (50 μF)(20 V) = 1000 μC. At t = RC the capacitor holds 0.63 × 1000 = 630 μC, so 1000 − 630 = 370 μC is still to come. 630 μC is what is already there, 1000 μC is the whole final charge, and 140 μC is the amount missing at t = 2RC.`,
      },
    ],
  },
  [r`When a charged capacitor discharges through a resistor, the current flows in the {{c1::opposite}} direction to the charging current.`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ammeter sits in a series loop with a battery, a resistor and a capacitor, and reads +2.0 mA while the capacitor charges. The battery is then replaced by a plain wire, with nothing else moved. The ammeter now reads −0.5 mA, and the reading shrinks toward zero. What explains the negative sign?`,
        options: [r`The capacitor is still charging, only far more slowly now`, r`The capacitor has flipped its polarity and is charging again`, r`The ammeter is faulty, since a loop current cannot reverse`, r`The capacitor is discharging, so charge now leaves its plates`],
        correctAnswer: 3,
        explanation: r`With the battery gone, the charged capacitor drives current back around the loop, so charge leaves the plates and the current runs opposite to the charging current. Continued charging would keep the sign positive and needs a battery. The plates do not swap polarity during a discharge, and a reversed current is exactly what is expected, not a meter fault.`,
      },
      {
        question: r`A battery charges a capacitor through a resistor in one series loop. The battery is then replaced by a plain wire, so the capacitor discharges through the same resistor. Comparing the discharge with the charging, which voltage has reversed its polarity?`,
        options: [r`The resistor's voltage reverses; the capacitor's does not`, r`The capacitor's voltage reverses; the resistor's does not`, r`Both the resistor's and the capacitor's voltages reverse`, r`Neither the resistor's nor the capacitor's voltage reverses`],
        correctAnswer: 0,
        explanation: r`The discharge current runs opposite to the charging current, and a resistor's voltage follows its current (V = IR), so the resistor's voltage reverses. The capacitor keeps the same plate positive while it empties, so its voltage only shrinks. Saying the capacitor reverses, that both reverse, or that neither does each misses one of these two facts.`,
      },
    ],
  },
  [r`A $3.0\,\mu$F and a $6.0\,\mu$F capacitor are in series across $12$ V. What voltage does each one take?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three capacitors, initially uncharged, are connected in series across an ideal 12 V battery: one of 3.0 μF and two of 6.0 μF. Once charging is complete, what is the voltage across the 3.0 μF capacitor?`,
        options: [r`3.0 V`, r`6.0 V`, r`4.0 V`, r`12 V`],
        correctAnswer: 1,
        explanation: r`1/C_eq = 1/3.0 + 1/6.0 + 1/6.0 = 2/3 μF⁻¹, so C_eq = 1.5 μF and each capacitor holds Q = (1.5 μF)(12 V) = 18 μC. The 3.0 μF one takes 18/3.0 = 6.0 V, and each 6.0 μF one takes 3.0 V. 3.0 V is the share of a larger capacitor, 4.0 V splits the battery evenly in three, and 12 V treats them as if in parallel.`,
      },
      {
        question: r`A 1.0 μF capacitor and a 4.0 μF capacitor, both initially uncharged, are connected in series across an ideal battery. Once charging is complete, a voltmeter reads 3.0 V across the 4.0 μF capacitor. What is the battery's voltage?`,
        options: [r`15 V`, r`3.75 V`, r`6.0 V`, r`12 V`],
        correctAnswer: 0,
        explanation: r`The 4.0 μF capacitor holds Q = (4.0 μF)(3.0 V) = 12 μC, and the series partner holds the same charge, so it takes 12/1.0 = 12 V. The battery supplies 3.0 + 12 = 15 V. 3.75 V gives the smaller capacitor the smaller voltage (0.75 V), 6.0 V assumes an even split, and 12 V is only the 1.0 μF capacitor's share.`,
      },
      {
        question: r`A 6.0 μF capacitor and an unknown capacitor, both initially uncharged, are connected in series across an ideal 30 V battery. Once charging is complete, the 6.0 μF capacitor has 10 V across it. What is the unknown capacitance?`,
        options: [r`12 μF`, r`2.0 μF`, r`6.0 μF`, r`3.0 μF`],
        correctAnswer: 3,
        explanation: r`The 6.0 μF capacitor holds Q = (6.0 μF)(10 V) = 60 μC, and so does the unknown one, which takes the other 30 − 10 = 20 V. So C = 60 μC / 20 V = 3.0 μF. 12 μF gives the larger voltage to the larger capacitor, 2.0 μF is the equivalent capacitance of the pair (60/30), and 6.0 μF would need an even split.`,
      },
      {
        question: r`A 20 nF capacitor and a 30 nF capacitor, both initially uncharged, are connected in series across an ideal 100 V supply. Once charging is complete, how much charge is on EACH capacitor?`,
        options: [r`5.0 × 10⁻⁶ C`, r`1.2 × 10⁻⁹ C`, r`1.2 × 10⁻⁶ C`, r`2.0 × 10⁻⁶ C`],
        correctAnswer: 2,
        explanation: r`C_eq = (20)(30)/(20 + 30) = 12 nF, and series capacitors each hold Q = C_eq V = (12 × 10⁻⁹ F)(100 V) = 1.2 × 10⁻⁶ C. 5.0 × 10⁻⁶ C adds the capacitances as if in parallel. 1.2 × 10⁻⁹ C drops the factor of 100 V, and 2.0 × 10⁻⁶ C puts the full 100 V on the 20 nF capacitor.`,
      },
      {
        question: r`A capacitor of capacitance C and a capacitor of capacitance 5C, both initially uncharged, are connected in series across an ideal battery. Once charging is complete, what fraction of the battery's voltage is across the capacitor C?`,
        options: [r`1/6 of it`, r`1/5 of it`, r`1/2 of it`, r`5/6 of it`],
        correctAnswer: 3,
        explanation: r`Both hold the same charge Q, so the voltages are Q/C and Q/5C, in the ratio 5 to 1. The smaller capacitor therefore takes 5 of the 6 equal shares, or 5/6. 1/6 is the share of the larger capacitor, 1/5 is the ratio of the capacitances, and 1/2 assumes an even split.`,
      },
      {
        question: r`A 10 μF capacitor and a 40 μF capacitor, both initially uncharged and each rated for at most 25 V, are connected in series across an ideal 50 V supply. Once charging is complete, which capacitor, if either, is above its rating?`,
        options: [r`Only the 40 μF, which takes 40 V`, r`Neither, since each one takes 25 V`, r`Only the 10 μF, which takes 40 V`, r`Both, since each one takes 50 V`],
        correctAnswer: 2,
        explanation: r`C_eq = (10)(40)/(10 + 40) = 8.0 μF, so each holds Q = (8.0 μF)(50 V) = 400 μC. The 10 μF capacitor takes 400/10 = 40 V and the 40 μF one takes 400/40 = 10 V, so only the smaller one is over 25 V. Putting 40 V on the 40 μF inverts the split, 25 V each assumes an even split, and 50 V each is the parallel rule.`,
      },
    ],
  },
  [r`A capacitor reaches half its final charge (or loses half while discharging) after about {{c1::$0.69\tau$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A charged capacitor discharges through a resistor. Its voltage falls from 6.0 V to 3.0 V in 2.1 s. Taking ln 2 ≈ 0.69, about what is the circuit's time constant?`,
        options: [r`3.0 s`, r`1.4 s`, r`2.1 s`, r`4.2 s`],
        correctAnswer: 0,
        explanation: r`Falling to half takes 0.69τ, so τ = 2.1 s / 0.69 ≈ 3.0 s. 1.4 s multiplies by 0.69 instead of dividing. 2.1 s treats the half-time as the time constant itself, and 4.2 s doubles the half-time.`,
      },
      {
        question: r`A timing circuit lets a 1.0 μF capacitor discharge through a resistor, and it must lose half of its charge in 0.69 s. Taking ln 2 ≈ 0.69, what resistance is needed?`,
        options: [r`0.69 MΩ`, r`1.0 MΩ`, r`1.4 MΩ`, r`1.0 kΩ`],
        correctAnswer: 1,
        explanation: r`Half the charge is lost after 0.69τ, so τ = 0.69 s / 0.69 = 1.0 s, and R = τ/C = 1.0 s / (1.0 × 10⁻⁶ F) = 1.0 × 10⁶ Ω = 1.0 MΩ. 0.69 MΩ sets the time constant equal to the half-time. 1.4 MΩ divides by 0.69 twice, and 1.0 kΩ slips three powers of ten.`,
      },
      {
        question: r`A capacitor discharges through a resistor with a time constant of 2.0 ms. Taking ln 2 ≈ 0.69, about how long does its charge take to fall to one eighth of its starting value?`,
        options: [r`1.4 ms`, r`6.0 ms`, r`4.1 ms`, r`16 ms`],
        correctAnswer: 2,
        explanation: r`One eighth is three halvings, and each halving takes 0.69τ = 0.69 × 2.0 ms = 1.38 ms, so the time is 3 × 1.38 ≈ 4.1 ms. 1.4 ms is a single halving. 6.0 ms uses three whole time constants, and 16 ms multiplies the time constant by 8.`,
      },
      {
        question: r`A heart-rate monitor's uncharged capacitor is charged through a resistor by an ideal 12 V supply, and the circuit's time constant is 10 s. Taking ln 2 ≈ 0.69, about what does a voltmeter across the capacitor read 13.8 s after charging begins?`,
        options: [r`9.0 V`, r`6.0 V`, r`3.0 V`, r`12 V`],
        correctAnswer: 0,
        explanation: r`13.8 s is 2 × 0.69τ, two half-times. Each half-time closes half of the remaining gap to 12 V: the gap goes from 12 V to 6.0 V to 3.0 V, so the capacitor is at 12 − 3.0 = 9.0 V. 6.0 V is the value after one half-time, 3.0 V is the gap that remains, and 12 V is reached only after about five time constants.`,
      },
      {
        question: r`A capacitor takes 4.0 ms to reach half of its final charge when charged through a resistor by an ideal battery. The resistor is replaced by one with three times the resistance, and the capacitor by one with twice the capacitance. How long does reaching half of the final charge take now?`,
        options: [r`6.0 ms`, r`24 ms`, r`17 ms`, r`20 ms`],
        correctAnswer: 1,
        explanation: r`The half-time is 0.69RC, so it scales with the product RC, which grows by 3 × 2 = 6. The new half-time is 6 × 4.0 ms = 24 ms. 6.0 ms uses 3/2 instead of 3 × 2. 17 ms applies the factor 0.69 a second time, and 20 ms adds the two factors to get 5.`,
      },
      {
        question: r`A 100 μF capacitor, charged and then disconnected from its battery, is connected across a 300 Ω heating element. Taking ln 2 ≈ 0.69, about how long does it take to lose half of its charge?`,
        options: [r`30 ms`, r`43 ms`, r`15 ms`, r`21 ms`],
        correctAnswer: 3,
        explanation: r`τ = RC = (300 Ω)(1.0 × 10⁻⁴ F) = 0.030 s = 30 ms, and half the charge is gone after 0.69τ ≈ 21 ms. 30 ms is one full time constant, by which the charge is down to 37%. 43 ms divides by 0.69 instead of multiplying, and 15 ms takes half of the time constant.`,
      },
    ],
  },
  [r`A $2.0\text{ k}\Omega$ resistor charges a $50\,\mu$F capacitor from a battery. About how long until the capacitor is essentially fully charged?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal battery charges an uncharged 300 μF capacitor through a 10 kΩ resistor in one series loop. Treating a capacitor as essentially fully charged after five time constants, about how long does that take?`,
        options: [r`3.0 s`, r`2.1 s`, r`15 s`, r`0.60 s`],
        correctAnswer: 2,
        explanation: r`τ = RC = (1.0 × 10⁴ Ω)(3.0 × 10⁻⁴ F) = 3.0 s, so essentially full takes 5τ = 15 s. 3.0 s is one time constant, when the capacitor is only about 63% charged. 2.1 s is the half-charge time (0.69τ), and 0.60 s divides by 5 instead of multiplying.`,
      },
      {
        question: r`A sensor's capacitor is charged from empty through a 100 Ω resistor by an ideal supply and must be essentially fully charged within 2.0 ms. Treating essentially full as five time constants, what is the largest capacitance that allows this?`,
        options: [r`20 μF`, r`100 μF`, r`4.0 nF`, r`4.0 μF`],
        correctAnswer: 3,
        explanation: r`Five time constants must fit in 2.0 ms, so τ = 0.40 ms and C = τ/R = (4.0 × 10⁻⁴ s)/(100 Ω) = 4.0 × 10⁻⁶ F = 4.0 μF. 20 μF sets one time constant equal to 2.0 ms. 100 μF multiplies by 5 instead of dividing, and 4.0 nF slips three powers of ten.`,
      },
      {
        question: r`An ideal battery charges an uncharged 500 pF capacitor through a 4.0 MΩ resistor in one series loop. Treating essentially full as five time constants, about how long until the capacitor is essentially fully charged?`,
        options: [r`10 ms`, r`2.0 ms`, r`10 s`, r`0.40 ms`],
        correctAnswer: 0,
        explanation: r`τ = RC = (4.0 × 10⁶ Ω)(5.0 × 10⁻¹⁰ F) = 2.0 × 10⁻³ s = 2.0 ms, and 5τ = 10 ms. 2.0 ms is a single time constant, about 63% charged. 10 s slips three powers of ten, and 0.40 ms divides the time constant by 5.`,
      },
      {
        question: r`An RC circuit takes 0.80 s to charge its capacitor essentially fully from empty. The capacitor is replaced by one with three times the capacitance; the resistor and the ideal battery are unchanged. About how long does an essentially full charge take now?`,
        options: [r`0.27 s`, r`2.4 s`, r`0.80 s`, r`12 s`],
        correctAnswer: 1,
        explanation: r`The charging time is about 5RC, so it scales with C: 3 × 0.80 s = 2.4 s. 0.27 s divides by 3 instead of multiplying. 0.80 s assumes capacitance does not matter, and 12 s multiplies by 5 a second time, although the 0.80 s already was five time constants.`,
      },
      {
        question: r`A strobe light's 2000 μF capacitor recharges from empty through a 50 Ω resistor from an ideal supply and must be essentially fully charged before each flash, which itself takes negligible time. Treating essentially full as five time constants, about what is the fastest steady flash rate?`,
        options: [r`10 flashes per second`, r`2 flashes per second`, r`5 flashes per second`, r`0.5 flashes per second`],
        correctAnswer: 1,
        explanation: r`τ = RC = (50 Ω)(2.0 × 10⁻³ F) = 0.10 s, so each recharge needs about 5τ = 0.50 s, which allows 2 flashes per second. 10 per second allows only one time constant per flash, about 63% charged. 5 per second confuses the factor of 5 with the rate, and 0.5 per second quotes the recharge time as if it were a rate.`,
      },
      {
        question: r`A capacitor charging from empty through a resistor from an ideal battery is essentially fully charged 4.0 s after the switch closes. Treating essentially full as five time constants, at about what time did it hold 63% of its final charge?`,
        options: [r`2.5 s`, r`2.0 s`, r`20 s`, r`0.80 s`],
        correctAnswer: 3,
        explanation: r`Essentially full is 5τ = 4.0 s, so τ = 0.80 s, and 63% of the final charge is reached at t = τ = 0.80 s. 2.5 s takes 63% of the 4.0 s, as if the charge rose in a straight line. 2.0 s is half of the time, and 20 s multiplies by 5 instead of dividing.`,
      },
    ],
  },
  [r`In a myelinated axon, the action potential is regenerated only at the {{c1::nodes of Ranvier}}, where voltage-gated $\text{Na}^+$ channels are concentrated.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A toxin blocks the voltage-gated Na⁺ channels at the nodes of Ranvier of a myelinated axon and leaves the myelin-wrapped stretches untouched. What happens to an action potential travelling along this axon?`,
        options: [r`It carries on, since the wrapped stretches regenerate it`, r`It speeds up, since less charge leaks out at each node`, r`It dies out, since it is regenerated only at the nodes`, r`It carries on, since the myelin itself conducts the Na⁺`],
        correctAnswer: 2,
        explanation: r`In a myelinated axon the action potential is rebuilt only at the nodes, where the voltage-gated Na⁺ channels are concentrated, so blocking them leaves a passively fading signal that dies out. The wrapped stretches have too few channels to regenerate it. Myelin is an insulator and does not conduct Na⁺, and blocking channels cannot speed the signal up.`,
      },
      {
        question: r`Four students each describe a healthy myelinated axon. Which student's description is NOT correct?`,
        options: [r`The action potential is regenerated beneath each myelin wrap`, r`Voltage-gated Na⁺ channels are clustered at the nodes of Ranvier`, r`Ions cross the membrane mainly at the gaps between myelin wraps`, r`The signal spreads quickly and passively under each myelin wrap`],
        correctAnswer: 0,
        explanation: r`Regeneration happens only at the nodes of Ranvier, the gaps in the myelin, so the claim that it happens beneath each wrap is the false one. The other three are true: the Na⁺ channels cluster at the nodes, ions cross mainly there, and between nodes the signal spreads passively and quickly under the myelin.`,
      },
    ],
  },
  [r`In multiple sclerosis, how do a demyelinated internode's capacitance and resistance compare with a healthy one, and why does conduction suffer?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A therapy rebuilds the myelin on an internode that disease had stripped bare. Compared with the bare internode, how do the membrane capacitance C_m and the membrane resistance R_m of the repaired internode compare?`,
        options: [r`C_m is higher and R_m is lower`, r`C_m is lower and R_m is lower`, r`C_m is higher and R_m is higher`, r`C_m is lower and R_m is higher`],
        correctAnswer: 3,
        explanation: r`Restoring the wraps puts many membrane layers back in series. Series capacitors give a smaller total capacitance and series resistors give a larger total resistance, so C_m falls and R_m rises. Higher C_m with lower R_m describes the demyelinated state, and the two mixed answers change only one of the two in the right direction.`,
      },
      {
        question: r`An action potential reaches a stretch of axon whose myelin has been lost and fails to trigger the next node of Ranvier. Which description of the bare stretch best explains the failure?`,
        options: [r`Current leaks out through it, and it needs more charge per millivolt`, r`Current is trapped inside it, and it needs more charge per millivolt`, r`Current leaks out through it, and it needs less charge per millivolt`, r`Current is trapped inside it, and it needs less charge per millivolt`],
        correctAnswer: 0,
        explanation: r`Without the series layers of myelin, the membrane resistance is lower, so current leaks out across the membrane, and the capacitance is higher, so more charge is needed for each millivolt of depolarization. Less current arrives at the next node and it charges the membrane less effectively. Trapped current and less charge per millivolt describe a well-insulated, myelinated stretch.`,
      },
    ],
  },
  [r`A defibrillator charges its capacitor over $6.0$ s and delivers the same energy in about $6.0$ ms. How does the delivery power compare with the charging power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator charges its capacitor over 5.0 s and then delivers the same energy to the patient in 2.0 ms. Ignoring losses, the average delivery power is how many times the average charging power?`,
        options: [r`4.0 × 10⁻⁴ times`, r`2.5 times`, r`2.5 × 10³ times`, r`1.0 × 10¹ times`],
        correctAnswer: 2,
        explanation: r`Power is energy per time, and the energy is the same, so the power ratio is the inverse of the time ratio: 5.0 s / (2.0 × 10⁻³ s) = 2.5 × 10³. 4.0 × 10⁻⁴ inverts the ratio. 2.5 forgets to convert milliseconds to seconds, and 10 multiplies 5.0 by 2.0.`,
      },
      {
        question: r`A pulsed laser's capacitor must deliver an average of 50 kW for 2.0 ms on each shot. Its charging circuit supplies an average of 20 W. Ignoring losses, how long does each recharge take?`,
        options: [r`5.0 ms`, r`5.0 s`, r`2.5 s`, r`0.20 s`],
        correctAnswer: 1,
        explanation: r`Each shot needs E = Pt = (5.0 × 10⁴ W)(2.0 × 10⁻³ s) = 100 J, and at 20 W that takes 100 J / 20 W = 5.0 s. 5.0 ms treats 50 kW as 50 W. 2.5 s only divides 50 by 20, and 0.20 s divides the charging power by the energy.`,
      },
      {
        question: r`A defibrillator stores 300 J, charged at an average of 50 W, and then delivers it at an average power of 60 kW. Ignoring losses, how long does the delivery take?`,
        options: [r`6.0 s`, r`5.0 ms`, r`0.20 s`, r`5.0 s`],
        correctAnswer: 1,
        explanation: r`t = E/P = 300 J / (6.0 × 10⁴ W) = 5.0 × 10⁻³ s = 5.0 ms. 6.0 s is the charging time (300 J / 50 W). 0.20 s divides 60 by 300 and ignores the units, and 5.0 s treats 60 kW as 60 W.`,
      },
      {
        question: r`A camera flash must deliver an average of 4.0 kW for 1.5 ms, and its capacitor is recharged over 3.0 s between flashes. Ignoring losses, what average charging power is needed?`,
        options: [r`2.0 kW`, r`6.0 W`, r`2.0 W`, r`18 W`],
        correctAnswer: 2,
        explanation: r`Each flash uses E = (4.0 × 10³ W)(1.5 × 10⁻³ s) = 6.0 J, and supplying that over 3.0 s takes 6.0 J / 3.0 s = 2.0 W. 2.0 kW skips the millisecond conversion. 6.0 W quotes the energy in joules as a power, and 18 W multiplies the energy by the charging time.`,
      },
      {
        question: r`A defibrillator delivers a fixed stored energy to a patient. A redesign shortens the delivery from 8.0 ms to 2.0 ms without changing the energy. How does the average delivery power change?`,
        options: [r`It becomes 4 times as large`, r`It becomes one quarter as large`, r`It becomes 16 times as large`, r`It stays exactly the same`],
        correctAnswer: 0,
        explanation: r`Average power is energy divided by time. With the same energy in one quarter of the time (2.0 ms instead of 8.0 ms), the power is 4 times as large. One quarter inverts the relationship. 16 times squares the factor, and no change confuses power with energy, which is the quantity that stays fixed.`,
      },
      {
        question: r`A defibrillator's capacitor is charged at an average of 30 W for 10 s, and all of that energy is then delivered to the patient in 10 ms. Ignoring losses, how much energy is delivered, and at what average power?`,
        options: [r`300 kJ at 30 kW`, r`300 J at 30 W`, r`3.0 J at 30 kW`, r`300 J at 30 kW`],
        correctAnswer: 3,
        explanation: r`The stored energy is (30 W)(10 s) = 300 J, and the capacitor delivers the same 300 J, not more. Delivered in 1.0 × 10⁻² s, that is 300/0.010 = 3.0 × 10⁴ W = 30 kW. 300 kJ pretends the energy grows along with the power. 30 W ignores the shorter time, and 3.0 J shrinks the energy with the time.`,
      },
    ],
  },
  [r`Why does myelin LOWER the axon's membrane capacitance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A patch of bare axon membrane has a capacitance of 60 pF. A myelinated stretch, modelled as identical patches of that membrane stacked as capacitors in series, has a capacitance of 1.5 pF. How many layers are in the stack?`,
        options: [r`90 layers`, r`40 layers`, r`20 layers`, r`60 layers`],
        correctAnswer: 1,
        explanation: r`N identical capacitors in series give C/N, so N = 60 pF / 1.5 pF = 40 layers. 90 multiplies 60 by 1.5 instead of dividing. 20 and 60 do not give 1.5 pF: 60/20 = 3.0 pF and 60/60 = 1.0 pF.`,
      },
      {
        question: r`A myelinated internode is modelled as 50 identical membrane layers stacked as capacitors in series, each with a capacitance of 100 pF. How much charge must be moved to change the voltage across the whole stack by 20 mV?`,
        options: [r`2.0 × 10⁻¹² C`, r`1.0 × 10⁻¹⁰ C`, r`4.0 × 10⁻¹¹ C`, r`4.0 × 10⁻¹⁴ C`],
        correctAnswer: 3,
        explanation: r`The series stack has C = 100 pF / 50 = 2.0 pF, so Q = CV = (2.0 × 10⁻¹² F)(2.0 × 10⁻² V) = 4.0 × 10⁻¹⁴ C. 2.0 × 10⁻¹² C uses one layer's 100 pF. 1.0 × 10⁻¹⁰ C adds the layers as if in parallel (5000 pF), and 4.0 × 10⁻¹¹ C leaves 20 mV as 20 V.`,
      },
      {
        question: r`A bare axon membrane acts as a parallel-plate capacitor with an insulating gap of 4.0 nm. Myelin wraps, acting as layers in series, make the insulating gap effectively 200 nm, with the same area and insulating material. How does the capacitance of that stretch change?`,
        options: [r`It rises to 50 times its bare value`, r`It falls to 1/2500 of its bare value`, r`It falls to 1/50 of its bare value`, r`It stays equal to its bare value`],
        correctAnswer: 2,
        explanation: r`For a parallel-plate capacitor C is proportional to 1/d, and layers in series act like a wider gap. The gap grows by 200/4.0 = 50, so the capacitance falls to 1/50. A rise to 50 times inverts the relationship. 1/2500 squares the factor, and no change ignores the gap.`,
      },
      {
        question: r`The same 0.30 pC of charge is moved across a bare patch of membrane with a capacitance of 30 pF, and across a myelinated stretch modelled as 5 such patches stacked as capacitors in series. By how much does the voltage across each one change?`,
        options: [r`10 mV on the bare patch, 50 mV on the stack`, r`50 mV on the bare patch, 10 mV on the stack`, r`10 mV on the bare patch, 10 mV on the stack`, r`10 mV on the bare patch, 2.0 mV on the stack`],
        correctAnswer: 0,
        explanation: r`For the bare patch, V = Q/C = 0.30 pC / 30 pF = 10 mV. The stack of 5 in series has C = 30/5 = 6.0 pF, so the same charge gives 0.30/6.0 = 50 mV: lower capacitance means more voltage per unit of charge. Swapping the two values inverts this, 10 mV for both ignores the stacking, and 2.0 mV treats the stack as 5 times the capacitance.`,
      },
      {
        question: r`Two internodes of equal area are wrapped in identical membrane layers that act as capacitors in series. Internode X has 30 layers and internode Y has 120 layers. How does the capacitance of Y compare with that of X?`,
        options: [r`Four times X's capacitance`, r`One sixteenth of X's capacitance`, r`Equal to X's capacitance`, r`One quarter of X's capacitance`],
        correctAnswer: 3,
        explanation: r`N identical layers in series give C/N, so the capacitance is inversely proportional to the number of layers. Y has 120/30 = 4 times the layers and so one quarter of the capacitance. Four times is the parallel rule. One sixteenth squares the factor, and equal capacitance ignores the extra layers.`,
      },
      {
        question: r`A myelinated stretch of axon, modelled as 25 identical membrane layers stacked as capacitors in series, has a measured capacitance of 4.0 pF. What is the capacitance of a single layer?`,
        options: [r`100 pF`, r`0.16 pF`, r`29 pF`, r`6.3 pF`],
        correctAnswer: 0,
        explanation: r`N identical capacitors in series give C_layer/N, so C_layer = N × C_stack = 25 × 4.0 pF = 100 pF. 0.16 pF divides 4.0 by 25, as if stacking in series raised the capacitance. 29 pF adds 25 and 4.0, and 6.3 pF divides 25 by 4.0.`,
      },
    ],
  },
  [r`A toxin opens many extra $\text{K}^+$ leak channels in a neuron. How do the membrane resistance and time constant change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A neuron's membrane resistance comes entirely from identical open K⁺ leak channels in parallel. A toxin opens extra channels of the same kind. The membrane time constant falls from 30 ms to 6 ms while the membrane capacitance is unchanged. By what factor did the number of open channels change?`,
        options: [r`One fifth as many are open`, r`5 times as many are open`, r`25 times as many are open`, r`24 times as many are open`],
        correctAnswer: 1,
        explanation: r`τ = R_mC_m with C_m fixed, so R_m fell to 6/30 = 1/5 of its value. Identical channels are resistors in parallel, so R_m is inversely proportional to the number open, which means 5 times as many are open. One fifth inverts this. 25 squares the factor, and 24 subtracts the two times.`,
      },
      {
        question: r`A patch of membrane has 200 identical open K⁺ leak channels, acting as resistors in parallel, and a membrane resistance of 50 MΩ. A toxin opens 300 more of the same channels. What is the new membrane resistance?`,
        options: [r`125 MΩ`, r`33 MΩ`, r`20 MΩ`, r`17 MΩ`],
        correctAnswer: 2,
        explanation: r`Identical channels in parallel give a resistance inversely proportional to their number. The count goes from 200 to 500, so R_m = 50 MΩ × 200/500 = 20 MΩ. 125 MΩ scales the wrong way (× 500/200). 33 MΩ uses 300 as the new total instead of 500, and 17 MΩ divides by 3.`,
      },
      {
        question: r`A neuron has a membrane capacitance of 100 pF and a membrane time constant of 15 ms. A toxin then opens extra K⁺ leak channels until the time constant is 5.0 ms, with the capacitance unchanged. What is the membrane resistance before and after the toxin?`,
        options: [r`150 MΩ before and 450 MΩ after`, r`1.5 MΩ before and 0.50 MΩ after`, r`15 MΩ before and 5.0 MΩ after`, r`150 MΩ before and 50 MΩ after`],
        correctAnswer: 3,
        explanation: r`R_m = τ/C_m. Before: (15 × 10⁻³ s)/(1.0 × 10⁻¹⁰ F) = 1.5 × 10⁸ Ω = 150 MΩ. After: (5.0 × 10⁻³)/(1.0 × 10⁻¹⁰) = 5.0 × 10⁷ Ω = 50 MΩ, lower because the open channels add parallel paths. A rise to 450 MΩ has the resistance going the wrong way, and the other two slip powers of ten.`,
      },
      {
        question: r`Each open K⁺ leak channel acts as a resistor of 5.0 × 10¹⁰ Ω. After a toxin acts, 1000 identical channels are open in a patch of membrane, all in parallel. What is the membrane resistance of the patch?`,
        options: [r`5.0 × 10¹³ Ω`, r`5.0 × 10⁷ Ω`, r`5.0 × 10¹⁰ Ω`, r`2.0 × 10⁻⁸ Ω`],
        correctAnswer: 1,
        explanation: r`N identical resistors in parallel give R/N: (5.0 × 10¹⁰ Ω)/(1.0 × 10³) = 5.0 × 10⁷ Ω. 5.0 × 10¹³ Ω multiplies by 1000, the series rule. 5.0 × 10¹⁰ Ω is a single channel, and 2.0 × 10⁻⁸ Ω divides 1000 by the channel resistance.`,
      },
      {
        question: r`Before a toxin acts, a steady injected current shifts a neuron's membrane voltage by 20 mV, and the membrane time constant is 8 ms. The membrane resistance comes entirely from identical open K⁺ leak channels in parallel, and the toxin doubles their number; the membrane capacitance and the injected current are unchanged. What are the new steady shift and time constant?`,
        options: [r`40 mV and 16 ms`, r`20 mV and 4 ms`, r`10 mV and 4 ms`, r`10 mV and 8 ms`],
        correctAnswer: 2,
        explanation: r`Twice as many identical channels in parallel halve R_m. The steady shift is ΔV = IR_m, so it halves to 10 mV, and τ = R_mC_m halves to 4 ms. 40 mV and 16 ms double R_m instead. The other two change only one of the two quantities, although both depend on R_m.`,
      },
      {
        question: r`After a brief input, a neuron's membrane voltage change fades to 37% of its starting size in 20 ms. The membrane resistance comes entirely from identical open K⁺ leak channels in parallel. A toxin then opens extra channels until 5 times as many are open, with the membrane capacitance unchanged. How long does the fade to 37% take now?`,
        options: [r`4 ms`, r`100 ms`, r`20 ms`, r`0.8 ms`],
        correctAnswer: 0,
        explanation: r`Fading to 37% takes one time constant, so τ = R_mC_m = 20 ms. Five times as many parallel channels make R_m one fifth as large, so τ = 20/5 = 4 ms. 100 ms multiplies by 5, as if the channels were in series. 20 ms ignores the change, and 0.8 ms divides by 25.`,
      },
    ],
  },
  [r`Capacitors in parallel:`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three capacitors in parallel must give a total of 47 μF. Two of them are 22 μF and 10 μF. What must the third one be?`,
        options: [r`79 μF`, r`32 μF`, r`25 μF`, r`15 μF`],
        correctAnswer: 3,
        explanation: r`Parallel capacitances add, so C₃ = 47 − 22 − 10 = 15 μF. 79 μF adds all three numbers. 32 μF is just the sum of the two known capacitors, and 25 μF subtracts only the 22 μF.`,
      },
      {
        question: r`A power supply needs a capacitance of 1.2 mF, built from identical 150 μF capacitors in parallel. How many capacitors are needed?`,
        options: [r`80 capacitors`, r`6 capacitors`, r`8 capacitors`, r`12 capacitors`],
        correctAnswer: 2,
        explanation: r`Parallel capacitances add, and 1.2 mF = 1200 μF, so N = 1200/150 = 8. 80 slips a power of ten in the conversion. 6 would give only 900 μF, and 12 would give 1800 μF.`,
      },
      {
        question: r`A 3.0 μF capacitor and a 7.0 μF capacitor are connected in parallel, and the pair is charged by a battery until they hold 60 μC in total. What is the voltage across each capacitor?`,
        options: [r`6.0 V`, r`29 V`, r`20 V`, r`8.6 V`],
        correctAnswer: 0,
        explanation: r`In parallel the capacitances add to 10 μF and both share one voltage, V = Q/C = 60 μC / 10 μF = 6.0 V. 29 V uses the series combination, 2.1 μF. 20 V divides all of the charge by the 3.0 μF capacitor alone, and 8.6 V divides it by the 7.0 μF capacitor alone.`,
      },
      {
        question: r`A single capacitor C is connected across an ideal battery. Two more capacitors identical to it are then added in parallel with it, with the battery still connected. By what factor does the total charge stored change?`,
        options: [r`It becomes one third as large`, r`It becomes 3 times as large`, r`It becomes 9 times as large`, r`It stays the same as before`],
        correctAnswer: 1,
        explanation: r`Three equal capacitors in parallel add to 3C, and the battery holds the voltage fixed, so Q = CV becomes 3 times as large. One third is what a series connection would give. 9 times squares the factor, and no change ignores the added capacitance.`,
      },
      {
        question: r`A circuit board has a 2200 nF capacitor with a 0.80 μF capacitor soldered in parallel with it. What single capacitance, in microfarads, does the pair present to the rest of the board?`,
        options: [r`2201 μF`, r`3.0 μF`, r`0.59 μF`, r`1.5 μF`],
        correctAnswer: 1,
        explanation: r`2200 nF = 2.2 μF, and parallel capacitances add: 2.2 + 0.80 = 3.0 μF. 2201 μF adds 2200 and 0.80 without converting units. 0.59 μF uses the series rule (2.2 × 0.80 / 3.0), and 1.5 μF averages the two.`,
      },
      {
        question: r`A touch-screen pad has a capacitance of 8.0 pF. A fingertip adds 2.0 pF in parallel with the pad. By what percentage does the capacitance that the circuit measures change?`,
        options: [r`It rises by 20%`, r`It falls by 80%`, r`It falls by 20%`, r`It rises by 25%`],
        correctAnswer: 3,
        explanation: r`Parallel capacitances add, so the total is 8.0 + 2.0 = 10 pF, a rise of 2.0/8.0 = 25% over the original 8.0 pF. 20% compares the 2.0 pF with the new total instead of the original. A fall of 80% uses the series rule (1.6 pF), and a parallel connection can never lower the capacitance.`,
      },
    ],
  },
  [r`After a long time in a DC circuit, current through a capacitor is:`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal 9.0 V battery, a 3.0 kΩ resistor and a 6.0 μF capacitor are connected in one series loop. Long after the loop is completed, how much charge is on the capacitor?`,
        options: [r`54 μC`, r`0 μC`, r`18 μC`, r`27 μC`],
        correctAnswer: 0,
        explanation: r`At steady state no current flows through the capacitor, so the resistor has no voltage across it and the capacitor holds the full 9.0 V: Q = CV = (6.0 μF)(9.0 V) = 54 μC. 0 μC confuses zero current with zero charge. 18 μC divides by the 3.0 kΩ, which plays no part at steady state, and 27 μC gives the capacitor half of the voltage.`,
      },
      {
        question: r`An ideal 30 V battery drives current through a 20 Ω resistor and a 10 Ω resistor in series. A 3.0 μF capacitor is connected in parallel with the 10 Ω resistor. At steady state, once the capacitor has stopped charging, how much charge does it hold?`,
        options: [r`90 μC`, r`60 μC`, r`30 μC`, r`0 μC`],
        correctAnswer: 2,
        explanation: r`At steady state the capacitor carries no current, so the two resistors form a simple series loop with I = 30 V / 30 Ω = 1.0 A. The 10 Ω resistor, and the capacitor in parallel with it, sit at 10 V, so Q = (3.0 μF)(10 V) = 30 μC. 90 μC uses the full 30 V, 60 μC uses the 20 V across the other resistor, and 0 μC confuses zero current with zero charge.`,
      },
      {
        question: r`Two branches are each connected directly across an ideal 10 V battery. One branch is a resistor R alone. The other is a 5.0 Ω resistor in series with a capacitor. Long after the circuit is switched on, the battery supplies 0.50 A. What is R?`,
        options: [r`15 Ω`, r`20 Ω`, r`4.0 Ω`, r`25 Ω`],
        correctAnswer: 1,
        explanation: r`At steady state the capacitor's branch carries no current, so all 0.50 A passes through R with the full 10 V across it: R = 10 V / 0.50 A = 20 Ω. 15 Ω and 25 Ω subtract or add the 5.0 Ω, which carries no current and so does not matter. 4.0 Ω is 20 Ω and 5.0 Ω combined in parallel.`,
      },
      {
        question: r`An ideal 6.0 V battery is connected in series with a 12 Ω resistor and a parallel pair. One side of the pair is a second 12 Ω resistor and the other side is a capacitor alone. Long after the circuit is switched on, what total power does the battery supply?`,
        options: [r`3.0 W`, r`0 W`, r`6.0 W`, r`1.5 W`],
        correctAnswer: 3,
        explanation: r`At steady state the capacitor carries no current and acts as an open circuit, so the current passes through both 12 Ω resistors in series: I = 6.0 V / 24 Ω = 0.25 A, and P = IV = (0.25 A)(6.0 V) = 1.5 W. 3.0 W treats the capacitor as a wire that bypasses the second resistor, which is true only at the first instant. 0 W forgets the path through that resistor, and 6.0 W puts the two resistors in parallel.`,
      },
      {
        question: r`A 120 V ideal DC supply, a 1.0 MΩ resistor and a capacitor are connected in one series loop. Long after the loop is completed, what are the current in the resistor and the voltage across the capacitor?`,
        options: [r`120 μA and 0 V`, r`120 μA and 120 V`, r`0 A and 120 V`, r`0 A and 0 V`],
        correctAnswer: 2,
        explanation: r`A fully charged capacitor passes no current, so the resistor has no voltage across it and the capacitor holds the full 120 V. 120 μA and 0 V describes the first instant, when the uncharged capacitor acts as a wire (120 V / 1.0 MΩ). 120 μA with 120 V would break the loop rule, and 0 V with no current would leave the supply's voltage unaccounted for.`,
      },
      {
        question: r`An ideal 24 V battery is in series with a 2.0 Ω resistor, followed by two parallel paths: a 6.0 Ω resistor alone, and a 3.0 Ω resistor in series with a capacitor. Long after the circuit is switched on, what are the currents in the 2.0 Ω, 6.0 Ω and 3.0 Ω resistors, in that order?`,
        options: [r`3.0 A, 3.0 A and 0 A`, r`6.0 A, 2.0 A and 4.0 A`, r`3.0 A, 1.0 A and 2.0 A`, r`0 A, 0 A and 0 A`],
        correctAnswer: 0,
        explanation: r`At steady state the capacitor's path carries no current, so the 3.0 Ω resistor has 0 A and the rest is a series loop: I = 24 V / (2.0 + 6.0) Ω = 3.0 A in both other resistors. 6.0 A, 2.0 A and 4.0 A treats the capacitor as a wire, which is the first instant. 3.0 A, 1.0 A and 2.0 A wrongly splits the steady current, and zero everywhere ignores the path through the 6.0 Ω resistor.`,
      },
    ],
  },
  [r`At the instant an uncharged capacitor is connected, it behaves like:`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal 12 V battery, a resistor, a switch and an uncharged capacitor are connected in one series loop. At the instant the switch closes, the current is 3.0 mA. What is the resistance?`,
        options: [r`4.0 kΩ`, r`4.0 Ω`, r`36 kΩ`, r`0.25 kΩ`],
        correctAnswer: 0,
        explanation: r`At the first instant the uncharged capacitor has no voltage across it and acts as a wire, so the resistor takes all 12 V. With the current written as 3.0 × 10⁻³ A, R = V/I = 4.0 × 10³ Ω = 4.0 kΩ. 4.0 Ω forgets that the current is in milliamps. 36 kΩ multiplies 12 by 3.0, and 0.25 kΩ divides the current by the voltage.`,
      },
      {
        question: r`A 4.0 Ω resistor is in series with an ideal 20 V battery and an open switch. An uncharged capacitor is connected directly in parallel with a 6.0 Ω resistor, and this combination completes the loop. At the instant the switch closes, what are the currents in the 4.0 Ω and the 6.0 Ω resistors?`,
        options: [r`2.0 A and 2.0 A`, r`5.0 A and 0 A`, r`0 A and 0 A`, r`5.0 A and 5.0 A`],
        correctAnswer: 1,
        explanation: r`An uncharged capacitor starts with 0 V across it and acts as a wire, so the 6.0 Ω resistor in parallel with it also has 0 V and carries no current. The 4.0 Ω resistor then takes all 20 V: I = 20/4.0 = 5.0 A. 2.0 A in both treats the capacitor as an open circuit, which is the steady state. Zero everywhere and 5.0 A in both ignore the bypass around the 6.0 Ω resistor.`,
      },
      {
        question: r`An ideal battery, a switch, an 8.0 Ω resistor, a 12 Ω resistor and an uncharged capacitor are connected in one series loop. At the instant the switch closes, the current is 0.60 A. What is the battery's EMF?`,
        options: [r`4.8 V`, r`7.2 V`, r`12 V`, r`0 V`],
        correctAnswer: 2,
        explanation: r`The uncharged capacitor acts as a wire at the first instant, so the EMF is shared only by the resistors: ε = I(R₁ + R₂) = (0.60 A)(20 Ω) = 12 V. 4.8 V and 7.2 V are the voltages across the 8.0 Ω and 12 Ω resistors alone. 0 V is the capacitor's own voltage at that instant, not the battery's.`,
      },
      {
        question: r`An ideal 6.0 V battery, a switch, a 2.0 Ω resistor and an uncharged capacitor are connected in one series loop. At the instant the switch closes, what power is dissipated in the resistor?`,
        options: [r`0 W`, r`4.5 W`, r`12 W`, r`18 W`],
        correctAnswer: 3,
        explanation: r`The uncharged capacitor has 0 V across it and acts as a wire, so the resistor has the full 6.0 V: I = 6.0/2.0 = 3.0 A and P = IV = (3.0 A)(6.0 V) = 18 W. 0 W belongs to the steady state, when the current has stopped. 4.5 W gives the resistor only half the voltage, and 12 W multiplies the voltage by the resistance.`,
      },
      {
        question: r`An ideal battery, a switch, a resistor R and an uncharged capacitor C are connected in one series loop, and the current at the instant the switch closes is 8.0 mA. The run is repeated from uncharged with the resistor replaced by 2R and the capacitor by C/2. What is the current at the instant the switch closes now?`,
        options: [r`4.0 mA`, r`8.0 mA`, r`16 mA`, r`2.0 mA`],
        correctAnswer: 0,
        explanation: r`At the first instant the uncharged capacitor acts as a wire whatever its capacitance, so I = ε/R. Doubling R halves the current to 4.0 mA. 8.0 mA assumes the two changes cancel, as they do for the time constant RC. 16 mA scales the wrong way, and 2.0 mA lets the capacitance change the current as well.`,
      },
      {
        question: r`Two branches are each connected directly across an ideal 18 V battery through a single switch. One branch is a 9.0 Ω resistor alone. The other is a 6.0 Ω resistor in series with an uncharged capacitor. At the instant the switch closes, what current does the battery supply?`,
        options: [r`2.0 A`, r`3.0 A`, r`1.2 A`, r`5.0 A`],
        correctAnswer: 3,
        explanation: r`At the first instant the uncharged capacitor acts as a wire, so each branch has 18 V across its resistor: 18/9.0 = 2.0 A plus 18/6.0 = 3.0 A gives 5.0 A. 2.0 A is the steady-state answer, when the capacitor's branch carries nothing. 3.0 A counts only the capacitor's branch, and 1.2 A puts the two resistors in series.`,
      },
    ],
  },
  [r`A defibrillator must deliver $200$ J from a $100\,\mu$F capacitor. What principle sets the charging voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator must store 360 J when its capacitor is charged to 3000 V. What capacitance does it need?`,
        options: [r`40 μF`, r`80 μF`, r`160 μF`, r`20 μF`],
        correctAnswer: 1,
        explanation: r`U = ½CV², so C = 2U/V² = 2(360 J)/(3000 V)² = 720/(9.0 × 10⁶) = 8.0 × 10⁻⁵ F = 80 μF. 40 μF leaves out the factor of 2 and uses U/V². 160 μF doubles twice, and 20 μF halves where it should double.`,
      },
      {
        question: r`An implanted defibrillator charges its 150 μF capacitor to 800 V. How much energy does the capacitor store?`,
        options: [r`96 J`, r`0.060 J`, r`48 J`, r`0.12 J`],
        correctAnswer: 2,
        explanation: r`U = ½CV² = ½(1.5 × 10⁻⁴ F)(800 V)² = ½(1.5 × 10⁻⁴)(6.4 × 10⁵) = 48 J. 96 J leaves out the factor of ½. 0.060 J forgets to square the voltage (½CV), and 0.12 J is CV, which is the stored charge in coulombs, not an energy.`,
      },
      {
        question: r`A nerve stimulator's 2.0 μF capacitor must store 0.40 mJ. To what voltage must it be charged?`,
        options: [r`400 V`, r`14 V`, r`200 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`From U = ½CV², V² = 2U/C = 2(4.0 × 10⁻⁴ J)/(2.0 × 10⁻⁶ F) = 400 V², so V = 20 V. 400 V forgets the square root. 14 V leaves out the factor of 2 (√200), and 200 V just divides the energy by the capacitance.`,
      },
      {
        question: r`A camera flash unit's capacitor stores 120 J when charged. A newer model uses a capacitor with twice the capacitance, charged to half the voltage. How much energy does the newer model's capacitor store?`,
        options: [r`60 J`, r`120 J`, r`30 J`, r`240 J`],
        correctAnswer: 0,
        explanation: r`U = ½CV², so doubling C doubles the energy while halving V cuts it to one quarter: 120 J × 2 × ¼ = 60 J. 120 J assumes the two changes cancel, which would be true for the charge Q = CV. 30 J applies only the voltage change, and 240 J applies only the capacitance change.`,
      },
      {
        question: r`A defibrillator's 100 μF capacitor is charged to 2000 V. It is then discharged through a patient until its voltage has fallen to 1000 V. How much energy has left the capacitor?`,
        options: [r`100 J`, r`150 J`, r`50 J`, r`200 J`],
        correctAnswer: 1,
        explanation: r`At 2000 V, U = ½(1.0 × 10⁻⁴ F)(2000 V)² = 200 J. At 1000 V, U = ½(1.0 × 10⁻⁴)(1000)² = 50 J. So 200 − 50 = 150 J has left. 100 J assumes energy falls in step with voltage. 50 J is what remains, and 200 J is the whole starting energy.`,
      },
      {
        question: r`A portable unit charges its 200 μF capacitor to 1000 V for each shock. Its battery holds 9.0 kJ. Ignoring losses, how many full charges can the battery supply?`,
        options: [r`45 charges`, r`180 charges`, r`90 charges`, r`9 charges`],
        correctAnswer: 2,
        explanation: r`Each charge stores U = ½CV² = ½(2.0 × 10⁻⁴ F)(1000 V)² = 100 J, and 9000 J / 100 J = 90 charges. 45 leaves out the factor of ½ and uses 200 J per charge. 180 halves the energy twice (50 J per charge), and 9 slips a power of ten.`,
      },
    ],
  },
  [r`Capacitors in series combine like resistors in parallel: $1/C_{eq} =$ {{c1::$1/C_1 + 1/C_2$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A radio tuner has a 12 μF capacitor in series with a second capacitor, and a meter across the pair reads an equivalent capacitance of 4.0 μF. What is the second capacitor's value?`,
        options: [r`8.0 μF`, r`16 μF`, r`3.0 μF`, r`6.0 μF`],
        correctAnswer: 3,
        explanation: r`1/C₂ = 1/C_eq − 1/C₁ = 1/4.0 − 1/12 = 3/12 − 1/12 = 2/12, so C₂ = 6.0 μF. Check: (12)(6.0)/(12 + 6.0) = 4.0 μF. 8.0 μF subtracts the capacitances directly and 16 μF adds them, which is the parallel rule. 3.0 μF would give (12)(3.0)/15 = 2.4 μF.`,
      },
      {
        question: r`A voltage-multiplier stage in an X-ray power supply has three capacitors, 2.0 μF, 3.0 μF and 6.0 μF, in series. What is the equivalent capacitance of the stage?`,
        options: [r`1.0 μF`, r`11 μF`, r`2.0 μF`, r`3.7 μF`],
        correctAnswer: 0,
        explanation: r`1/C_eq = 1/2.0 + 1/3.0 + 1/6.0 = 3/6 + 2/6 + 1/6 = 1 μF⁻¹, so C_eq = 1.0 μF, less than the smallest one. 11 μF adds them, which is the parallel rule. 2.0 μF is just the smallest capacitor, and 3.7 μF is their average.`,
      },
      {
        question: r`A high-voltage probe contains six identical capacitors in series, and the string has an equivalent capacitance of 15 nF. What is the capacitance of each one?`,
        options: [r`2.5 nF`, r`21 nF`, r`90 nF`, r`9.0 nF`],
        correctAnswer: 2,
        explanation: r`N identical capacitors in series give C/N, so each one is N × C_eq = 6 × 15 nF = 90 nF, larger than the string's value. 2.5 nF divides 15 by 6, as if a series string had more capacitance than its parts. 21 nF adds 6 to 15, and 9.0 nF slips a power of ten.`,
      },
      {
        question: r`A loudspeaker crossover has a 0.30 μF capacitor and a 600 nF capacitor in series. Expressed in nanofarads, what is their equivalent capacitance?`,
        options: [r`900 nF`, r`200 nF`, r`450 nF`, r`0.20 nF`],
        correctAnswer: 1,
        explanation: r`0.30 μF = 300 nF, and for two capacitors in series C_eq = (300)(600)/(300 + 600) = 200 nF. 900 nF adds them, which is the parallel rule. 450 nF is their average, and 0.20 nF slips three powers of ten in the conversion.`,
      },
      {
        question: r`A single capacitor C, connected across an ideal battery, stores 80 μC. It is replaced by four capacitors identical to it connected in series across the same battery. How much charge does the battery now place on the series combination?`,
        options: [r`320 μC`, r`80 μC`, r`5.0 μC`, r`20 μC`],
        correctAnswer: 3,
        explanation: r`Four identical capacitors in series have C_eq = C/4, and with the same battery voltage Q = C_eq V is one quarter of 80 μC, or 20 μC. 320 μC is the parallel result (4C). 80 μC assumes nothing changes, and 5.0 μC divides by 4 twice.`,
      },
      {
        question: r`A 6.0 μF capacitor and a 3.0 μF capacitor, both initially uncharged, are connected in series and charged fully by an ideal battery. A charge of 30 μC passes through the battery while they charge. What is the battery's voltage?`,
        options: [r`3.3 V`, r`15 V`, r`5.0 V`, r`10 V`],
        correctAnswer: 1,
        explanation: r`C_eq = (6.0)(3.0)/(6.0 + 3.0) = 2.0 μF, and the charge that passes through the battery is the charge on the series pair, so V = Q/C_eq = 30 μC / 2.0 μF = 15 V. 3.3 V adds the capacitances as if in parallel (9.0 μF). 5.0 V and 10 V are the voltages across the 6.0 μF and the 3.0 μF capacitor alone.`,
      },
    ],
  },
  [r`Why do series capacitors carry equal charge while parallel capacitors carry equal voltage?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student wires a 2.0 μF capacitor and a 6.0 μF capacitor in parallel across a 9.0 V battery and lets them charge fully. Which quantity do the two capacitors share, and what is the reason?`,
        options: [r`Charge, because both connect to the same two nodes`, r`Charge, because the plates between them stay neutral`, r`Voltage, because both connect to the same two nodes`, r`Voltage, because the plates between them stay neutral`],
        correctAnswer: 2,
        explanation: r`Each parallel capacitor is connected to the same two nodes, so both have the same 9.0 V across them, while their charges differ: 18 μC on one and 54 μC on the other. Equal charge is the series result. The neutral isolated section between plates is the reason for equal charge in series, and a parallel pair has no such isolated section.`,
      },
      {
        question: r`A 2.0 μF capacitor and a 6.0 μF capacitor, both initially uncharged, are connected in series across a battery. A student argues that Q = CV means the 6.0 μF capacitor must hold three times the charge. What is wrong with the argument?`,
        options: [r`It assumes equal voltages; the charges are equal instead`, r`It assumes equal charges; the voltages are equal instead`, r`Nothing is wrong; the 6.0 μF one holds three times the charge`, r`It has the ratio upside down; the 2.0 μF one holds three times`],
        correctAnswer: 0,
        explanation: r`The argument quietly uses the same V for both, which is true in parallel, not in series. In series the isolated pair of joined plates between the capacitors must stay neutral, so both hold the same charge, and the 6.0 μF capacitor simply has one third of the voltage. The other answers either keep the false equal-voltage idea or make the charges unequal.`,
      },
    ],
  },
  [r`The RC time constant is $\tau =$ {{c1::$RC$}} and carries units of seconds.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A greenhouse misting controller must have a time constant of 3.0 s, set by a resistor and a 150 μF capacitor in series. What resistance is needed?`,
        options: [r`20 kΩ`, r`20 Ω`, r`50 kΩ`, r`0.45 kΩ`],
        correctAnswer: 0,
        explanation: r`R = τ/C = 3.0 s / (1.5 × 10⁻⁴ F) = 2.0 × 10⁴ Ω = 20 kΩ. 20 Ω slips three powers of ten. 50 kΩ divides 150 by 3.0, and 0.45 kΩ multiplies 3.0 by 150 instead of dividing.`,
      },
      {
        question: r`A heart-monitor filter needs a time constant of 0.80 ms and uses a 16 kΩ resistor. What capacitance is needed?`,
        options: [r`50 μF`, r`13 nF`, r`50 nF`, r`20 nF`],
        correctAnswer: 2,
        explanation: r`C = τ/R = (8.0 × 10⁻⁴ s)/(1.6 × 10⁴ Ω) = 5.0 × 10⁻⁸ F = 50 nF. 50 μF slips three powers of ten. 13 nF multiplies 0.80 by 16 instead of dividing, and 20 nF divides 16 by 0.80.`,
      },
      {
        question: r`A 2.0 kΩ resistor and a 5.0 μF capacitor are charged in series by an ideal 6.0 V battery. The run is then repeated from uncharged with an ideal 12 V battery. What is the time constant in each run?`,
        options: [r`10 ms, and then 20 ms`, r`10 ms with either battery`, r`10 ms, and then 5.0 ms`, r`60 ms, and then 120 ms`],
        correctAnswer: 1,
        explanation: r`τ = RC = (2.0 × 10³ Ω)(5.0 × 10⁻⁶ F) = 1.0 × 10⁻² s = 10 ms, and the battery voltage does not appear in it. A larger EMF raises the final charge and the starting current, not the time scale. The answers that change with the battery, or that multiply RC by the voltage, treat τ as if it depended on ε.`,
      },
      {
        question: r`A 4.0 μF capacitor is charged by an ideal battery through two 5.0 kΩ resistors that are in series with each other and with the capacitor. What is the circuit's time constant?`,
        options: [r`10 ms`, r`20 ms`, r`40 s`, r`40 ms`],
        correctAnswer: 3,
        explanation: r`The series resistors add to 10 kΩ, so τ = RC = (1.0 × 10⁴ Ω)(4.0 × 10⁻⁶ F) = 4.0 × 10⁻² s = 40 ms. 10 ms combines the resistors in parallel (2.5 kΩ). 20 ms uses only one of them, and 40 s slips three powers of ten.`,
      },
      {
        question: r`A windshield-wiper delay circuit has an RC time constant of 12 ms. Its resistor is swapped for one with one quarter of the resistance, and its capacitor for one with three times the capacitance. What is the time constant afterward?`,
        options: [r`16 ms`, r`9.0 ms`, r`144 ms`, r`1.0 ms`],
        correctAnswer: 1,
        explanation: r`τ = RC, so the new value is 12 ms × ¼ × 3 = 9.0 ms. 16 ms multiplies by 4 and divides by 3, swapping the two changes. 144 ms multiplies by both 4 and 3, and 1.0 ms divides by both.`,
      },
      {
        question: r`A pacemaker's pulse interval is set by a 2.0 MΩ resistor and a 0.40 μF capacitor in series. What is the time constant of this pair?`,
        options: [r`0.80 s`, r`0.80 ms`, r`5.0 s`, r`8.0 s`],
        correctAnswer: 0,
        explanation: r`τ = RC = (2.0 × 10⁶ Ω)(4.0 × 10⁻⁷ F) = 0.80 s. 0.80 ms treats the megaohms as kilohms. 5.0 s divides 2.0 by 0.40 instead of multiplying, and 8.0 s slips a power of ten.`,
      },
    ],
  },
}
