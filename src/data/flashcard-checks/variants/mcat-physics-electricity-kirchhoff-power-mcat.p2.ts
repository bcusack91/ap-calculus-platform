import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-kirchhoff-power-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`The power dissipated by a 100 Ω resistor carrying 0.5 A of current is:`]: {
    kind: 'calc',
    more: [
      {
        question: r`The heating coil of a hair dryer has a resistance of 8 Ω and carries a current of 3 A. How much power does the coil dissipate?`,
        options: [r`24 W`, r`72 W`, r`192 W`, r`48 W`],
        correctAnswer: 1,
        explanation: r`P = I²R = (3 A)² × 8 Ω = 9 × 8 = 72 W. The value 24 comes from I × R, which is the voltage across the coil, not its power. The value 48 doubles the current instead of squaring it, and 192 squares the resistance instead of the current.`,
      },
      {
        question: r`A 200 Ω resistor on a circuit board is rated to dissipate at most 2 W. What is the largest current it can carry without exceeding that rating?`,
        options: [r`0.01 A`, r`10 A`, r`100 A`, r`0.1 A`],
        correctAnswer: 3,
        explanation: r`From P = I²R, I² = P/R = 2/200 = 0.01 A², so I = 0.1 A. Stopping at 0.01 forgets the square root. The value 10 A takes the square root of R/P, and 100 A is R/P with no square root at all.`,
      },
      {
        question: r`A resistor in a sensor circuit carries 20 mA and dissipates 0.2 W. What is its resistance?`,
        options: [r`500 Ω`, r`10 Ω`, r`50 Ω`, r`0.0005 Ω`],
        correctAnswer: 0,
        explanation: r`R = P/I² with I = 20 mA = 0.02 A: I² = 4 × 10⁻⁴ A², so R = 0.2/(4 × 10⁻⁴) = 500 Ω. Dividing by I instead of I² gives 10, which is the voltage in volts. Leaving the current as 20 gives 0.2/400 = 0.0005, and 50 Ω is a power-of-ten slip.`,
      },
      {
        question: r`A 2 kΩ resistor in an amplifier carries a current of 5 mA. How much power does it dissipate?`,
        options: [r`10 mW`, r`50 W`, r`50 mW`, r`5 mW`],
        correctAnswer: 2,
        explanation: r`With I = 0.005 A and R = 2000 Ω, P = I²R = (25 × 10⁻⁶) × 2000 = 0.05 W = 50 mW. Using 5 and 2 without converting the prefixes gives 50 W. The value 10 is I × R, the voltage in volts, and 5 mW is off by a power of ten.`,
      },
      {
        question: r`The filament of a stage lamp dissipates 90 W. A dimmer then cuts the current through the filament to one third of its first value. Treating the filament's resistance as constant, how much power does it dissipate now?`,
        options: [r`30 W`, r`10 W`, r`270 W`, r`45 W`],
        correctAnswer: 1,
        explanation: r`With R fixed, P = I²R scales with the square of the current, so the power becomes (1/3)² = 1/9 of 90 W, which is 10 W. The value 30 W scales power in direct proportion to the current. The value 270 W multiplies by 3 instead of dividing by 9, and 45 W just halves the power.`,
      },
      {
        question: r`A 10 Ω current-sensing resistor in a motor controller carries 0.3 A. How much power does it dissipate?`,
        options: [r`3 W`, r`9 W`, r`30 W`, r`0.9 W`],
        correctAnswer: 3,
        explanation: r`P = I²R = (0.3 A)² × 10 Ω = 0.09 × 10 = 0.9 W. The value 9 W comes from squaring 0.3 as 0.9 instead of 0.09. The value 3 is I × R, the voltage across the resistor, and 30 squares the resistance instead of the current.`,
      },
    ],
  },
  [r`A fuse protects a circuit by:`]: {
    kind: 'concept',
    more: [
      {
        question: r`The wiring of a workshop circuit can safely carry 15 A, and its 15 A fuse keeps melting when several tools run together. The owner replaces it with a 30 A fuse. What hazard does this create?`,
        options: [
          r`The new fuse holds the current at 30 A at all times`,
          r`The new fuse melts sooner, so the tools lose power`,
          r`The wires can overheat before the new fuse melts`,
          r`The new fuse lowers the voltage reaching the tools`,
        ],
        correctAnswer: 2,
        explanation: r`A fuse only protects by melting and opening the circuit once the current passes its rating. With a 30 A fuse, currents between 15 A and 30 A keep flowing and can overheat wiring that is safe only up to 15 A. A fuse does not set or hold the current, a higher rating melts later rather than sooner, and a fuse has almost no effect on the voltage at the tools.`,
      },
      {
        question: r`An engineer adds a fuse to protect a motor from excess current. How must the fuse be connected, and why?`,
        options: [
          r`In series with the motor, so that melting stops the current`,
          r`In parallel with the motor, so that melting stops the current`,
          r`In parallel with the motor, so that it diverts extra current`,
          r`In series with the motor, so that it limits current to its rating`,
        ],
        correctAnswer: 0,
        explanation: r`A fuse works by melting and breaking the circuit, so it must sit in series with the motor: when it opens, the only current path is gone. A fuse in parallel would leave the motor's path intact after melting, and before melting it would act as a short across the motor. A fuse does not regulate the current to its rating; it is either an intact low-resistance link or an open gap.`,
      },
    ],
  },
  [r`Traversing a resistor in the same direction as the current, what is the sign of the potential change?`]: {
    kind: 'concept',
    more: [
      {
        question: r`While writing a loop equation, a student walks through a 3 Ω resistor from point A to point B and correctly records a potential change of −6 V for that step. What is the current in the resistor?`,
        options: [
          r`2 A, flowing from B to A`,
          r`18 A, flowing from A to B`,
          r`18 A, flowing from B to A`,
          r`2 A, flowing from A to B`,
        ],
        correctAnswer: 3,
        explanation: r`A negative change means the walk went with the current, because potential drops by IR in the direction the current flows; so the current runs from A to B. Its size is I = V/R = 6 V / 3 Ω = 2 A. A current from B to A would have given +6 V for this step, and 18 comes from multiplying 6 by 3 instead of dividing.`,
      },
      {
        question: r`A current I flows through a resistor R from end P to end Q. Which end is at the higher potential, and what does a loop walk from P to Q record for this resistor?`,
        options: [
          r`End Q is higher; the walk records +IR`,
          r`End P is higher; the walk records −IR`,
          r`End P is higher; the walk records +IR`,
          r`End Q is higher; the walk records −IR`,
        ],
        correctAnswer: 1,
        explanation: r`Current in a resistor flows from higher to lower potential, so the end it enters, P, is higher. Walking from P to Q goes with the current, so the potential falls and the step is −IR. Recording +IR for this walk would mean a rise, which happens only when the resistor is crossed against the current, and Q cannot be higher while current flows from P to Q.`,
      },
    ],
  },
  [r`One bulb is in series with a parallel pair of identical bulbs. Which bulb is brightest?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three identical bulbs are connected to an ideal battery: bulb A is in series with a parallel pair, bulbs B and C. Bulb B dissipates 2 W. Treating the bulbs as ohmic, how much power does bulb A dissipate?`,
        options: [r`8 W`, r`4 W`, r`2 W`, r`1 W`],
        correctAnswer: 0,
        explanation: r`Bulb A carries the full current I, while B and C each carry I/2. With equal resistances, P = I²R makes A's power (2)² = 4 times B's power, so A dissipates 4 × 2 W = 8 W. The value 4 W doubles instead of squaring, 2 W assumes all three bulbs are equal, and 1 W puts the larger current in the pair.`,
      },
      {
        question: r`Three identical 8 Ω bulbs are connected to a 24 V ideal battery: one bulb is in series with a parallel pair made of the other two. Treating the bulbs as ohmic, what power does the series bulb dissipate, and what power does each bulb of the pair dissipate?`,
        options: [
          r`32 W in the series bulb, 16 W in each of the pair`,
          r`72 W in the series bulb, 72 W in each of the pair`,
          r`32 W in the series bulb, 8 W in each of the pair`,
          r`8 W in the series bulb, 32 W in each of the pair`,
        ],
        correctAnswer: 2,
        explanation: r`The pair is 8 Ω/2 = 4 Ω, so the total is 8 + 4 = 12 Ω and the battery current is 24/12 = 2 A. The series bulb dissipates (2 A)² × 8 Ω = 32 W, and each bulb of the pair carries 1 A and dissipates (1 A)² × 8 Ω = 8 W. Halving the power along with the current gives 16 W, putting the full 24 V across every bulb gives 72 W, and the last choice swaps the two results.`,
      },
      {
        question: r`A camping lantern holds three identical 12 Ω lamps, treated as ohmic, powered by a 9 V ideal battery. One lamp is in series with the other two, which are in parallel with each other. What voltage appears across the series lamp, and what voltage across each lamp of the parallel pair?`,
        options: [
          r`3 V across the series lamp, 6 V across each of the pair`,
          r`6 V across the series lamp, 3 V across each of the pair`,
          r`3 V across the series lamp, 3 V across each of the pair`,
          r`4.5 V across the series lamp, 4.5 V across each of the pair`,
        ],
        correctAnswer: 1,
        explanation: r`The pair has 12 Ω/2 = 6 Ω, so the total is 18 Ω and the current is 9/18 = 0.5 A. The series lamp has 0.5 A × 12 Ω = 6 V across it, and the pair has the remaining 3 V, which is why the series lamp is the brightest. Swapping the values gives the pair the larger share, 3 V on every lamp does not add up to 9 V, and 4.5 V each treats the pair as if it had the same resistance as one lamp.`,
      },
      {
        question: r`A lamp fixture has three identical ohmic bulbs on an ideal battery: one bulb in series with a parallel pair of the other two. The battery delivers a total of 30 W. How much of that power does the series bulb dissipate?`,
        options: [r`10 W`, r`15 W`, r`24 W`, r`20 W`],
        correctAnswer: 3,
        explanation: r`If the series bulb dissipates P, each bulb of the pair carries half the current and dissipates P/4, so the total is P + P/4 + P/4 = 1.5P. Setting 1.5P = 30 W gives P = 20 W, with 5 W in each of the other two. The value 10 W splits the power equally among three bulbs, 15 W gives the series bulb half, and 24 W compares it with only one bulb of the pair.`,
      },
      {
        question: r`Three identical ohmic bulbs are on an ideal battery: one bulb is in series with a parallel pair of the other two. The series bulb carries 0.6 A and dissipates 3.6 W. What are the current and the power for each bulb of the pair?`,
        options: [
          r`0.3 A and 0.9 W`,
          r`0.3 A and 1.8 W`,
          r`0.6 A and 3.6 W`,
          r`1.2 A and 7.2 W`,
        ],
        correctAnswer: 0,
        explanation: r`The 0.6 A divides equally between the two identical bulbs, so each carries 0.3 A. Half the current through the same resistance gives one quarter of the power: 3.6 W / 4 = 0.9 W. The value 1.8 W halves the power along with the current, 0.6 A and 3.6 W ignores the split, and 1.2 A doubles the current instead of halving it.`,
      },
      {
        question: r`Three identical ohmic bulbs are on an ideal battery: one bulb is in series with a parallel pair of the other two. In 10 s the series bulb converts 80 J of electrical energy. How much energy do the two bulbs of the pair convert together in the same 10 s?`,
        options: [r`20 J`, r`80 J`, r`40 J`, r`160 J`],
        correctAnswer: 2,
        explanation: r`Each bulb of the pair carries half the series bulb's current, so by P = I²R it runs at one quarter of the power and converts 80 J / 4 = 20 J in the same time. Two such bulbs convert 40 J together. The value 20 J counts only one bulb of the pair, 80 J assumes the pair matches the series bulb, and 160 J assumes each bulb of the pair matches it.`,
      },
    ],
  },
  [r`For elements in series, compare power with $P =$ {{c1::$I^2R$}}, so the larger resistor dissipates more.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 30 Ω resistor and a 10 Ω resistor are connected in series in a power supply. The 30 Ω resistor dissipates 12 W. How much power does the 10 Ω resistor dissipate?`,
        options: [r`36 W`, r`12 W`, r`1.3 W`, r`4 W`],
        correctAnswer: 3,
        explanation: r`Series resistors carry the same current, so P = I²R is proportional to R. The 10 Ω resistor has one third of the resistance and so one third of the power: 12 W / 3 = 4 W. The value 36 W inverts the ratio as a parallel V²/R comparison would, 12 W assumes equal power, and 1.3 W divides by the ratio squared.`,
      },
      {
        question: r`Two heating strips, 2 Ω and 10 Ω, are wired in series across a 24 V ideal battery. How much power does the 10 Ω strip dissipate?`,
        options: [r`58 W`, r`40 W`, r`8 W`, r`20 W`],
        correctAnswer: 1,
        explanation: r`The series current is I = 24 V / (2 Ω + 10 Ω) = 2 A, so the 10 Ω strip dissipates I²R = (2 A)² × 10 Ω = 40 W. About 58 W comes from V²/R with the full 24 V, but the strip has only 20 V across it. The value 8 W belongs to the 2 Ω strip, and 20 is I × R, the strip's voltage.`,
      },
      {
        question: r`On a test bench, a 5 Ω heating wire is connected in series with a second heating wire of unknown resistance. A power meter shows 20 W dissipated in the 5 Ω wire and 60 W in the unknown wire. What is the unknown resistance?`,
        options: [r`15 Ω`, r`1.7 Ω`, r`45 Ω`, r`3 Ω`],
        correctAnswer: 0,
        explanation: r`With one shared current, P = I²R is proportional to R. The unknown wire dissipates 60/20 = 3 times the power, so it has 3 times the resistance: 3 × 5 Ω = 15 Ω. (Check: I² = 20/5 = 4 A², and 60/4 = 15 Ω.) About 1.7 Ω inverts the ratio, 45 Ω squares it, and 3 is only the power ratio.`,
      },
      {
        question: r`A 3 Ω resistor and a 9 Ω resistor are in series, and together they dissipate 48 W. What current flows through them?`,
        options: [r`4 A`, r`16 A`, r`2 A`, r`0.25 A`],
        correctAnswer: 2,
        explanation: r`Both carry the same current, so the total power is I²(3 Ω + 9 Ω) = 12I². Setting 12I² = 48 W gives I² = 4 A² and I = 2 A. Stopping at 4 forgets the square root, 16 divides 48 by only the 3 Ω resistor, and 0.25 inverts the division.`,
      },
      {
        question: r`An ideal source drives 2 mA through a 1 kΩ resistor and a 4 kΩ resistor connected in series. How much power does the 4 kΩ resistor dissipate?`,
        options: [r`4 mW`, r`8 mW`, r`16 W`, r`16 mW`],
        correctAnswer: 3,
        explanation: r`With I = 0.002 A and R = 4000 Ω, P = I²R = (4 × 10⁻⁶) × 4000 = 0.016 W = 16 mW. Using 2 and 4 without the prefixes gives 16 W. The value 4 mW is the power in the 1 kΩ resistor, and 8 is I × R, the voltage across the 4 kΩ resistor in volts.`,
      },
      {
        question: r`A dimmer circuit places an 18 Ω ballast resistor in series with a 6 Ω lamp, and the pair is powered by an ideal battery. Treating the lamp as ohmic, what fraction of the battery's power output ends up in the lamp?`,
        options: [r`three quarters`, r`one quarter`, r`one third`, r`one ninth`],
        correctAnswer: 1,
        explanation: r`In series the current is shared, so each element's power is proportional to its resistance. The lamp's share is 6/(6 + 18) = 6/24 = one quarter. Three quarters is the ballast resistor's share, one third compares the lamp with the resistor instead of with the total, and one ninth squares that ratio.`,
      },
    ],
  },
  [r`Why is current, not voltage, the quantity that determines the severity of electrical injury?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A bird stands with both feet on a single bare power line that is at 10,000 V relative to the ground, and it is unharmed. Which statement best explains why?`,
        options: [
          r`Its feet are at nearly the same potential, so almost no current flows`,
          r`Its body resistance is too low for the line voltage to heat any tissue`,
          r`The line carries alternating current, so the net charge entering is zero`,
          r`Its feathers hold the line's charge, so no voltage reaches the tissue`,
        ],
        correctAnswer: 0,
        explanation: r`Injury comes from charge flowing through tissue, and current flows only if there is a potential difference across the body. Both feet touch the same wire, so the difference between them is tiny and almost no current passes through the bird, however high the wire's potential is. A low body resistance would allow more current, not less, alternating current through tissue is harmful, and feathers do not store the line's charge.`,
      },
      {
        question: r`A hospital safety rule for equipment that touches patients limits the leakage through the patient to 10 μA, instead of setting a limit in volts. What reasoning supports stating the limit as a current?`,
        options: [
          r`Harm depends on the voltage at the skin, which microamperes measure`,
          r`Harm depends on body resistance, which is identical in all patients`,
          r`Harm depends on the current through tissue, whatever the voltage`,
          r`Harm depends on the energy per charge, which the current alone sets`,
        ],
        correctAnswer: 2,
        explanation: r`Fibrillation and burns are caused by charge actually moving through tissue, so the current is what must be capped. The same voltage can drive a large or a tiny current depending on the resistance of the path, which varies with skin condition and contact, so a voltage limit alone would not fix the danger. Microamperes measure current and not voltage, body resistance differs widely between people, and energy per charge is the voltage itself.`,
      },
    ],
  },
  [r`Distinguish the kilowatt-hour from the watt.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A desktop computer draws a steady 250 W and is left running for 12 hours. How much energy does it use, in kilowatt-hours?`,
        options: [r`3000 kWh`, r`3.0 kWh`, r`0.021 kWh`, r`10.8 kWh`],
        correctAnswer: 1,
        explanation: r`Energy = power × time = 0.25 kW × 12 h = 3.0 kWh. Multiplying 250 by 12 without converting watts to kilowatts gives 3000. Dividing 0.25 by 12 gives 0.021, which treats the kilowatt-hour as a rate, and 10.8 multiplies by an extra 3.6.`,
      },
      {
        question: r`A portable battery pack stores 0.5 kWh of energy and powers a 100 W medical pump. For how long can it run the pump?`,
        options: [r`50 h`, r`0.2 h`, r`0.005 h`, r`5 h`],
        correctAnswer: 3,
        explanation: r`Time = energy / power = 0.5 kWh / 0.1 kW = 5 h. Dividing 0.5 by 100 without converting watts to kilowatts gives 0.005 h. The value 0.2 h inverts the division, and 50 h is a power-of-ten slip in converting 100 W to kilowatts.`,
      },
      {
        question: r`A smart meter shows that a clothes iron used 0.6 kWh of energy during 20 minutes of steady operation. What is the iron's power?`,
        options: [r`1800 W`, r`200 W`, r`30 W`, r`12,000 W`],
        correctAnswer: 0,
        explanation: r`Power = energy / time, with 20 minutes = 1/3 h: P = 0.6 kWh / (1/3 h) = 1.8 kW = 1800 W. Multiplying 0.6 by 1/3 gives 0.2 kW, or 200 W. Dividing 0.6 by 20 without converting minutes gives 0.03 kW, or 30 W, and multiplying 0.6 by 20 gives 12 kW.`,
      },
      {
        question: r`An electric scooter's battery stores 1.8 × 10⁷ J of energy. Using 1 kWh = 3.6 × 10⁶ J, how many kilowatt-hours is that?`,
        options: [r`0.20 kWh`, r`50 kWh`, r`5.0 kWh`, r`5000 kWh`],
        correctAnswer: 2,
        explanation: r`Divide by the joules in one kilowatt-hour: (1.8 × 10⁷ J) / (3.6 × 10⁶ J/kWh) = 5.0 kWh. The value 0.20 inverts the ratio. The value 50 slips a power of ten, and 5000 uses 3.6 × 10³ J per kilowatt-hour, which forgets the factor of 1000 in "kilo".`,
      },
      {
        question: r`A 2 kW space heater runs for 15 minutes. How much energy does it use, in joules?`,
        options: [r`3.0 × 10⁴ J`, r`1.8 × 10³ J`, r`5.0 × 10⁵ J`, r`1.8 × 10⁶ J`],
        correctAnswer: 3,
        explanation: r`Energy = power × time = (2000 W) × (15 × 60 s) = 2000 × 900 = 1.8 × 10⁶ J, which is 0.5 kWh. Multiplying 2000 W by 15 without converting minutes to seconds gives 3.0 × 10⁴. Leaving the power as 2 gives 1.8 × 10³, and 5.0 × 10⁵ turns 0.5 kWh into joules with the wrong factor.`,
      },
      {
        question: r`Device A draws 2 kW and runs for 3 minutes. Device B draws 100 W and runs for 2 hours. Which device uses more energy, and what are the two amounts?`,
        options: [
          r`Device B: 0.2 kWh against 0.1 kWh`,
          r`Device A: 6 kWh against 0.2 kWh`,
          r`Device A: 0.1 kWh against 0.05 kWh`,
          r`Device B: 200 kWh against 6 kWh`,
        ],
        correctAnswer: 0,
        explanation: r`Device A uses 2 kW × (3/60) h = 0.1 kWh, and device B uses 0.1 kW × 2 h = 0.2 kWh, so B uses twice as much even though its power is 20 times smaller. Getting 6 kWh for A treats 3 minutes as 3 hours. Getting 0.05 kWh for B divides by the time instead of multiplying, and 200 kWh for B leaves 100 W unconverted.`,
      },
    ],
  },
  [r`A $60$ W and a $100$ W bulb rated for the same line voltage are wired in series. Which is brighter?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lighting technician tests two filament lamps stamped 50 W and 100 W, each stamped for use at 100 V. By mistake the lamps are wired in series, and the pair is connected to a 150 V ideal supply. Treating the filaments as ohmic, what power does each lamp dissipate?`,
        options: [
          r`50 W in the 50 W lamp, 100 W in the 100 W lamp`,
          r`25 W in the 50 W lamp, 50 W in the 100 W lamp`,
          r`50 W in the 50 W lamp, 25 W in the 100 W lamp`,
          r`75 W in the 50 W lamp, 150 W in the 100 W lamp`,
        ],
        correctAnswer: 2,
        explanation: r`From R = V²/P, the 50 W lamp is (100)²/50 = 200 Ω and the 100 W lamp is (100)²/100 = 100 Ω. In series across 150 V the current is 150/300 = 0.5 A, so the powers are (0.5)² × 200 = 50 W and (0.5)² × 100 = 25 W. Quoting 50 W and 100 W assumes the ratings hold in any circuit, the swapped pair gives the larger power to the smaller resistance, and 75 W and 150 W scales the ratings by the voltage.`,
      },
      {
        question: r`A 24 W bulb and an 8 W bulb are both rated for 12 V. They are wired in series across a 12 V ideal battery. Treating the bulbs as ohmic, what current flows through them?`,
        options: [r`0.5 A`, r`2.7 A`, r`2.0 A`, r`0.67 A`],
        correctAnswer: 0,
        explanation: r`From R = V²/P, the 24 W bulb is 144/24 = 6 Ω and the 8 W bulb is 144/8 = 18 Ω. In series the total is 24 Ω, so I = 12 V / 24 Ω = 0.5 A. The values 2.0 A and 0.67 A are the bulbs' rated currents, which flow only when each has the full 12 V, and 2.7 A adds those rated currents as if the bulbs were in parallel.`,
      },
      {
        question: r`A 25 W night light and a 75 W reading lamp are each designed for a 120 V line. A hobbyist wires them in series and plugs the chain into a 120 V outlet. Treating both as ohmic, what voltage appears across the 25 W night light?`,
        options: [r`30 V`, r`90 V`, r`60 V`, r`120 V`],
        correctAnswer: 1,
        explanation: r`Since R = V²/P at the same rated voltage, the 25 W night light has 3 times the resistance of the 75 W lamp. In series the voltage divides in proportion to resistance, so the night light takes 3/4 of 120 V, which is 90 V, and it is the brighter of the two. The value 30 V is the 75 W lamp's share, 60 V assumes an equal split, and 120 V applies only when the night light is alone across the outlet.`,
      },
      {
        question: r`A 60 W soldering iron and a 30 W glue gun are each designed for 120 V. An apprentice connects them in series and plugs the combination into a 120 V outlet. Treating both heating elements as ohmic, what total power do the two tools draw?`,
        options: [r`90 W`, r`45 W`, r`30 W`, r`20 W`],
        correctAnswer: 3,
        explanation: r`From R = V²/P, the 60 W iron is 14,400/60 = 240 Ω and the 30 W glue gun is 14,400/30 = 480 Ω, for 720 Ω in series. The total power is V²/R = 14,400/720 = 20 W, less than either rating because each tool gets less than its rated voltage. The value 90 W adds the ratings, which holds only in parallel, 45 W averages them, and 30 W is just the smaller rating.`,
      },
      {
        question: r`Bulbs X and Y are rated for the same line voltage and are wired in series across that voltage. Treated as ohmic, bulb X dissipates 4 times as much power as bulb Y. Bulb Y is rated at 100 W. What is the rating of bulb X?`,
        options: [r`400 W`, r`25 W`, r`50 W`, r`200 W`],
        correctAnswer: 1,
        explanation: r`In series the current is shared, so P = I²R means X has 4 times the resistance of Y. At the same rated voltage, the rating P = V²/R is inversely proportional to resistance, so X is rated at 100 W / 4 = 25 W. The value 400 W assumes the brighter series bulb has the higher rating, and 50 W and 200 W use a factor of 2 instead of 4.`,
      },
      {
        question: r`A kiln has two heating elements, each designed for 100 V: a main element stamped 1.0 kW and a warming element stamped 250 W. A wiring fault leaves the two elements in series with each other, and the pair is connected to the 100 V ideal supply. Treating the elements as ohmic, how much power does the warming element actually dissipate?`,
        options: [r`250 W`, r`40 W`, r`200 W`, r`160 W`],
        correctAnswer: 3,
        explanation: r`From R = V²/P, the main element is 10,000/1000 = 10 Ω and the warming element is 10,000/250 = 40 Ω. The series current is 100 V / 50 Ω = 2 A, so the warming element dissipates (2 A)² × 40 Ω = 160 W. Its rating of 250 W holds only with the full 100 V across it, 40 W is the power in the main element, and 200 W is the total for both.`,
      },
    ],
  },
  [r`Kirchhoff's loop rule says potential changes around a closed loop sum to zero, expressing {{c1::energy conservation}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A single loop contains a 6 V ideal battery and two resistors in series. A charge of 2 C travels once around the loop in steady state. How much energy does this charge give up as heat in the two resistors together?`,
        options: [
          r`6 J, equal to half the energy gained in the battery`,
          r`12 J, equal to the energy gained in the battery`,
          r`3 J, equal to the battery voltage per unit charge`,
          r`0 J, since the potential changes add up to zero`,
        ],
        correctAnswer: 1,
        explanation: r`The battery gives the charge qV = 2 C × 6 V = 12 J. The loop rule says the rises and drops cancel, so the charge must lose exactly those 12 J in the resistors before it returns to its start. The sum of the potential changes is zero, but the energy dissipated is not, and 6 J and 3 J come from mishandling q × V.`,
      },
      {
        question: r`In a steady circuit, a charge travels once around a closed loop that holds one ideal battery and several resistors, moving with the current. Which statement about this trip is INCORRECT?`,
        options: [
          r`It gains potential energy when it crosses the battery`,
          r`It loses potential energy in each resistor it crosses`,
          r`It is back at its starting potential when it returns`,
          r`It returns with less potential energy than at the start`,
        ],
        correctAnswer: 3,
        explanation: r`The loop rule is energy conservation: the potential at a point has one value, so a charge that returns to its start has the same potential energy it began with. The energy it gains in the battery is exactly what it loses in the resistors. The other three statements are all true descriptions of the trip, so the incorrect one is the claim that it comes back with less potential energy.`,
      },
    ],
  },
  [r`How is total power delivered by a battery related to power dissipated in the resistors?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal battery supplies 0.5 A to a network of three resistors, which dissipate 1 W, 2 W and 3 W in steady state. What is the battery's emf?`,
        options: [r`3 V`, r`12 V`, r`6 V`, r`24 V`],
        correctAnswer: 1,
        explanation: r`The battery's power Iε must equal the total dissipated, 1 + 2 + 3 = 6 W. So ε = 6 W / 0.5 A = 12 V. Multiplying 6 by 0.5 instead of dividing gives 3 V, quoting 6 treats watts as volts, and 24 V divides by the current squared.`,
      },
      {
        question: r`In a toy car, a 10 V ideal battery pack drives a 2 Ω motor winding in series with a 3 Ω speed-control resistor, and both behave as plain resistors. How much power does the battery pack deliver?`,
        options: [r`8 W`, r`12 W`, r`50 W`, r`20 W`],
        correctAnswer: 3,
        explanation: r`The current is 10 V / 5 Ω = 2 A, so the battery pack delivers Iε = 2 A × 10 V = 20 W. As a check, the two resistances dissipate (2)² × 2 = 8 W and (2)² × 3 = 12 W, which add to 20 W. Quoting 8 W or 12 W counts only one of them, and 50 W uses V²/R with the 2 Ω winding alone.`,
      },
      {
        question: r`A 12 V ideal battery supplies 2 A to two resistors connected in series. One of the resistors dissipates 16 W. What is the resistance of the other resistor?`,
        options: [r`2 Ω`, r`4 Ω`, r`6 Ω`, r`8 Ω`],
        correctAnswer: 0,
        explanation: r`The battery delivers Iε = 2 A × 12 V = 24 W, so the other resistor dissipates 24 − 16 = 8 W. From P = I²R, R = 8 W / (2 A)² = 2 Ω. The value 4 Ω is the resistor that dissipates 16 W, 6 Ω is the total series resistance, and 8 is the second resistor's power in watts, not its resistance.`,
      },
      {
        question: r`A 3 V ideal battery supplies 200 mA to a circuit made of two resistors. One resistor dissipates 400 mW. How much power does the other resistor dissipate?`,
        options: [r`600 mW`, r`1000 mW`, r`200 mW`, r`20 mW`],
        correctAnswer: 2,
        explanation: r`The battery delivers Iε = 0.2 A × 3 V = 0.6 W = 600 mW, and that must equal the total dissipated. The other resistor therefore dissipates 600 − 400 = 200 mW. The value 600 mW is the battery's whole output, 1000 mW adds instead of subtracting, and 20 mW slips a power of ten in converting milliamps.`,
      },
      {
        question: r`A 12 V ideal battery powers a set of heating elements that dissipate 24 W in total. The elements are rewired, and they now dissipate 72 W in total from the same battery. What current does the battery supply now?`,
        options: [r`2 A`, r`18 A`, r`3.5 A`, r`6 A`],
        correctAnswer: 3,
        explanation: r`The battery's power Iε equals the total dissipated, so I = 72 W / 12 V = 6 A. With the emf fixed, tripling the dissipated power requires tripling the current from its original 2 A. The value 2 A leaves the current unchanged, 18 A multiplies it by 9, and 3.5 A multiplies it by the square root of 3.`,
      },
      {
        question: r`A 9 V ideal battery supplies a steady 0.5 A to a network of resistors for 2 minutes. How much energy is converted to heat in all the resistors together during that time?`,
        options: [r`9 J`, r`540 J`, r`4.5 J`, r`270 J`],
        correctAnswer: 1,
        explanation: r`The resistors dissipate everything the battery delivers: P = Iε = 0.5 A × 9 V = 4.5 W. Over 2 minutes = 120 s, the energy is 4.5 W × 120 s = 540 J. Multiplying by 2 without converting minutes gives 9 J, quoting 4.5 gives the power and not the energy, and 270 J uses only 60 s.`,
      },
    ],
  },
  [r`A new resistor is added in parallel with an existing element. What happens to total current from the battery?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A resistor R is connected across an ideal battery. After one change to the circuit, the battery current is larger, while R is still in place and carries exactly the same current as before. Which change was made?`,
        options: [
          r`A second resistor was added in series with resistor R`,
          r`A second resistor was added in parallel with resistor R`,
          r`A wire of negligible resistance was added in series with R`,
          r`A wire of negligible resistance was added in parallel with R`,
        ],
        correctAnswer: 1,
        explanation: r`A resistor added in parallel leaves the full battery voltage across R, so the current in R is unchanged, while the new branch draws its own current and the battery total rises. A resistor in series would lower the current everywhere, R included. An ideal wire in series changes nothing, and an ideal wire in parallel shorts R, so R's current would fall to zero.`,
      },
      {
        question: r`A resistor R is connected alone across an ideal battery. A second, identical resistor is then added in parallel with it. Which line in a student's notes about the new circuit is INCORRECT?`,
        options: [
          r`The equivalent resistance is now half of R`,
          r`The battery's current is now twice as large`,
          r`The first resistor's current is now halved`,
          r`The battery's power output is now doubled`,
        ],
        correctAnswer: 2,
        explanation: r`The first resistor still has the full battery voltage across it, so its current is unchanged, not halved. The new branch draws an equal current of its own, so the battery current and the battery's power both double, and the equivalent resistance falls to R/2. Halving the first resistor's current would be right only if the total current were fixed, which is not the case for an ideal battery.`,
      },
    ],
  },
  [r`What condition trips a GFCI outlet, and why does an ordinary fuse not protect against the same hazard?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fault in a space heater makes a kitchen circuit carry 22 A in the hot wire, and the same 22 A returns in the neutral wire. The circuit has a GFCI outlet and a 15 A fuse. Which device opens the circuit, and why?`,
        options: [
          r`The fuse, since the total current is too large and none leaks`,
          r`The GFCI, since the total current is too large and none leaks`,
          r`The GFCI, since the hot and neutral currents are exactly equal`,
          r`Neither, since the hot and neutral currents are exactly equal`,
        ],
        correctAnswer: 0,
        explanation: r`A GFCI responds only to a difference between the hot and neutral currents, and here they match at 22 A, so no current is leaking and it has nothing to detect. The fuse responds to the size of the total current, and 22 A is above its 15 A rating, so it melts. Equal hot and neutral currents rule out the GFCI, but they do not stop the fuse from acting on an overload.`,
      },
      {
        question: r`A GFCI outlet trips the moment a damaged drill is switched on, even though the drill draws only 3 A on a circuit protected by a 15 A fuse. What most likely happened?`,
        options: [
          r`The drill's current rose above what the hot wire can carry`,
          r`The outlet's voltage rose above its normal value at startup`,
          r`Some current returned by a path other than the neutral wire`,
          r`The drill's resistance fell until the fuse rating was passed`,
        ],
        correctAnswer: 2,
        explanation: r`A GFCI trips when the hot-wire current and the returning neutral current differ by a few milliamps, which means some current is leaking through another path, such as the drill's case and the user. At 3 A the total current is far below the 15 A rating, so this is not an overload, and the fuse would not react to a leak of a few milliamps. A GFCI does not monitor the voltage.`,
      },
    ],
  },
  [r`If one of two identical bulbs wired in series burns out, {{c1::both go dark}}, because the single current path is broken.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three lamps are wired in series across a working battery, and all three are dark. A technician swaps out just one lamp for a new one, and all three light up. What does this show?`,
        options: [
          r`One lamp was shorted, and that short kept all three dark`,
          r`All three lamps were open, and one new lamp fixed the path`,
          r`One lamp was open, and that break stopped all the current`,
          r`One lamp was dim, and its low current starved the other two`,
        ],
        correctAnswer: 2,
        explanation: r`In series there is a single current path, so one open filament stops the current in every lamp, and replacing that one lamp restores the path for all three. A shorted lamp would still pass current, so the other two would stay lit. If all three were open, one new lamp could not complete the path, and series lamps always carry the same current, so one cannot starve the others.`,
      },
      {
        question: r`Two identical lamps in a hallway run from one battery. When one lamp is unscrewed from its socket, the other lamp goes dark as well. What does this show about how the lamps are wired?`,
        options: [
          r`They are in series, so both share a single current path`,
          r`They are in parallel, so both share a single voltage`,
          r`They are in series, so each has the full battery voltage`,
          r`They are in parallel, so each has its own current path`,
        ],
        correctAnswer: 0,
        explanation: r`Removing one lamp opens its part of the circuit. The other lamp can go dark only if that opening breaks its current path too, which means the two lamps lie on one path, in series. In parallel each lamp would have its own path and the full battery voltage, so the second lamp would stay lit, and lamps in series share the battery voltage instead of each having all of it.`,
      },
    ],
  },
  [r`Two identical bulbs are in parallel across a battery and one burns out. What happens to the other bulb and to the total current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A desk has two identical reading lamps connected in parallel to an ideal power pack, and each lamp gives off 24 W. The filament of one lamp breaks. What power does the remaining lamp dissipate, and what power does the pack now deliver?`,
        options: [
          r`24 W in the lamp; 24 W from the pack`,
          r`48 W in the lamp; 48 W from the pack`,
          r`12 W in the lamp; 12 W from the pack`,
          r`24 W in the lamp; 48 W from the pack`,
        ],
        correctAnswer: 0,
        explanation: r`The surviving lamp still has the full voltage of the pack across it, so it still dissipates 24 W. It is now the only load, so the pack delivers 24 W, half of the original 48 W. Getting 48 W in the lamp assumes it takes over the failed lamp's share, 12 W assumes it dims, and 48 W from the pack ignores the lost branch.`,
      },
      {
        question: r`Two identical 30 Ω heating pads are connected in parallel across an ideal supply. One pad fails and becomes an open circuit. How does the equivalent resistance connected to the supply change?`,
        options: [
          r`From 60 Ω to 30 Ω`,
          r`From 30 Ω to 15 Ω`,
          r`From 15 Ω to 30 Ω`,
          r`From 15 Ω to 60 Ω`,
        ],
        correctAnswer: 2,
        explanation: r`Two equal resistors in parallel give half of one: 30 Ω / 2 = 15 Ω. With one pad open, only a single 30 Ω pad remains, so the equivalent resistance doubles to 30 Ω and the supply current halves. Starting from 60 Ω adds the pads as if they were in series, going from 30 Ω to 15 Ω runs the change backward, and ending at 60 Ω doubles twice.`,
      },
      {
        question: r`A 6 V ideal battery supplies 3 A to two identical bulbs connected in parallel. One bulb burns out, and the battery current falls to 1.5 A. What is the resistance of each bulb?`,
        options: [r`2 Ω`, r`1 Ω`, r`8 Ω`, r`4 Ω`],
        correctAnswer: 3,
        explanation: r`After the failure, one bulb alone has the full 6 V across it and carries 1.5 A, so R = 6 V / 1.5 A = 4 Ω. Before the failure each bulb also carried 1.5 A, half of the 3 A. The value 2 Ω is 6 V / 3 A, the equivalent resistance of the pair. The value 1 Ω halves that again, and 8 Ω doubles the correct value.`,
      },
      {
        question: r`Two identical indicator lamps are connected in parallel across a 5 V ideal supply, and each draws 200 mA. One lamp fails and becomes an open circuit. How much power does the supply deliver now?`,
        options: [r`2.0 W`, r`1.0 W`, r`0.5 W`, r`1000 W`],
        correctAnswer: 1,
        explanation: r`The remaining lamp still has 5 V across it and still draws 200 mA = 0.2 A, so the supply delivers P = IV = 0.2 A × 5 V = 1.0 W. The value 2.0 W is the power before the failure, when 0.4 A flowed. The value 0.5 W wrongly halves the surviving lamp's current, and 1000 W leaves 200 mA unconverted.`,
      },
      {
        question: r`Two identical 8 Ω bulbs are in parallel across a 12 V ideal battery. One bulb burns out. What are the voltage across the surviving bulb and the current through it?`,
        options: [
          r`6 V and 0.75 A`,
          r`12 V and 3.0 A`,
          r`12 V and 1.5 A`,
          r`24 V and 3.0 A`,
        ],
        correctAnswer: 2,
        explanation: r`The surviving bulb is still connected directly across the ideal battery, so it has 12 V across it and carries I = 12 V / 8 Ω = 1.5 A, exactly as before. The value 3.0 A is the old total current, which the survivor does not inherit. Getting 6 V and 0.75 A treats the bulbs as if they had been in series, and 24 V is more than the battery supplies.`,
      },
      {
        question: r`An ideal battery supplies a total of 4 A to two identical bulbs connected in parallel. One bulb burns out. How much charge passes through the battery during the next 10 s?`,
        options: [r`20 C`, r`40 C`, r`80 C`, r`10 C`],
        correctAnswer: 0,
        explanation: r`Each bulb carried 2 A. The survivor keeps the full battery voltage and so keeps its 2 A, which is now the whole battery current. In 10 s the charge is Q = It = 2 A × 10 s = 20 C. The value 40 C uses the old total of 4 A, 80 C doubles the current, and 10 C halves the surviving bulb's current.`,
      },
    ],
  },
  [r`Why is household wiring parallel rather than series?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Suppose the outlets on a 120 V line were wired in series instead of in parallel, and three identical lamps, each rated for 120 V, were plugged in. Treating the lamps as ohmic, what voltage would each lamp receive, and how would it run?`,
        options: [
          r`120 V, so each lamp runs at its rated power`,
          r`360 V, so each lamp runs above its rated power`,
          r`40 V, so each lamp runs at its rated power`,
          r`40 V, so each lamp runs far below its rated power`,
        ],
        correctAnswer: 3,
        explanation: r`In series the 120 V line voltage is shared, so three identical lamps get 40 V each. With one third of the rated voltage, each runs at (1/3)² = 1/9 of its rated power, which is why homes use parallel wiring that gives every outlet the full 120 V. Each lamp gets 120 V only in parallel, a lamp cannot have more than the line voltage, and 40 V is not enough for rated power.`,
      },
      {
        question: r`Which statement about the parallel wiring of a household circuit is INCORRECT?`,
        options: [
          r`Each device has the full line voltage across its terminals`,
          r`Each device can be switched off without affecting the rest`,
          r`Each added device lowers the current in the main supply wire`,
          r`Each added device lowers the total resistance of the circuit`,
        ],
        correctAnswer: 2,
        explanation: r`Every added parallel branch draws its own current, so the current in the main wire rises, not falls. That rising total is the tradeoff of parallel wiring and the reason circuits need breakers or fuses. The other statements are true: each device gets the full line voltage, works independently of the others, and adds a path that lowers the total resistance.`,
      },
    ],
  },
  [r`For household AC, $V_{rms} =$ {{c1::$V_{peak}/\sqrt{2}$}}, so a $120$ V outlet actually peaks near $170$ V.`]: {
    kind: 'calc',
    more: [
      {
        question: r`In much of Europe, wall outlets supply a sinusoidal voltage of 230 V rms. Using √2 ≈ 1.41, what is the approximate peak voltage at such an outlet?`,
        options: [r`163 V`, r`230 V`, r`324 V`, r`460 V`],
        correctAnswer: 2,
        explanation: r`The peak is √2 times the rms value: 230 V × 1.41 ≈ 324 V. Dividing by √2 instead gives 163 V, which would make the peak smaller than the rms value. Quoting 230 V treats the stated value as the peak, and 460 V uses a factor of 2 instead of √2.`,
      },
      {
        question: r`A function generator produces a sinusoidal voltage with a peak of 14 V. Using √2 ≈ 1.4, what rms voltage would an AC voltmeter report?`,
        options: [r`10 V`, r`7 V`, r`20 V`, r`28 V`],
        correctAnswer: 0,
        explanation: r`The rms value is the peak divided by √2: 14 V / 1.4 = 10 V. Dividing by 2 gives 7 V, which is not the rms value of a sine wave. Multiplying by 1.4 gives about 20 V, which would put the rms value above the peak, and 28 V is the peak-to-peak swing.`,
      },
      {
        question: r`A clothes dryer's 60 Ω heating element is connected to a household AC line quoted as 240 V. Line voltages are quoted as rms values. What average power does the element dissipate?`,
        options: [r`1920 W`, r`960 W`, r`480 W`, r`4 W`],
        correctAnswer: 1,
        explanation: r`Rms values are defined so that P = V²/R gives the average power directly: (240 V)² / 60 Ω = 57,600/60 = 960 W. The value 1920 W converts 240 V to a peak before squaring, which gives the peak power. The value 480 W divides by an extra 2 as if 240 V were the peak, and 4 is V/R, the rms current in amperes.`,
      },
      {
        question: r`A toaster on a household AC line carries a sinusoidal current of 10 A rms. Using √2 ≈ 1.4, what is the peak current in its heating element?`,
        options: [r`7 A`, r`10 A`, r`20 A`, r`14 A`],
        correctAnswer: 3,
        explanation: r`For a resistor, current follows voltage, so the same factor applies: the peak is √2 times the rms value, 10 A × 1.4 = 14 A. Dividing by 1.4 gives about 7 A, which would put the peak below the rms value. Quoting 10 A treats the rms value as the peak, and 20 A uses a factor of 2.`,
      },
      {
        question: r`A sinusoidal AC source with a peak voltage of 40 V is connected across a resistor, which dissipates an average power of 100 W. What is the resistance?`,
        options: [r`8 Ω`, r`16 Ω`, r`4 Ω`, r`0.4 Ω`],
        correctAnswer: 0,
        explanation: r`Average power uses the rms voltage, and V_rms² = V_peak²/2 = 1600/2 = 800 V². Then R = V_rms²/P = 800/100 = 8 Ω. Using the peak voltage squared gives 16 Ω, dividing by 2 twice gives 4 Ω, and 0.4 is 40/100, which divides the voltage itself by the power.`,
      },
      {
        question: r`A resistor dissipates the same average power on a sinusoidal AC source as it does when connected to a 20 V ideal battery. Using √2 ≈ 1.4, what is the peak voltage of the AC source?`,
        options: [r`14 V`, r`20 V`, r`28 V`, r`40 V`],
        correctAnswer: 2,
        explanation: r`The rms voltage is the steady voltage that gives the same average power in a resistor, so V_rms = 20 V. The peak is √2 times larger: 20 V × 1.4 = 28 V. Dividing by 1.4 gives about 14 V, 20 V is the rms value itself, and 40 V uses a factor of 2 instead of √2.`,
      },
    ],
  },
  [r`A third identical bulb is added in series to two bulbs already in series. What happens to the original two?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two identical ohmic bulbs are in series across an ideal battery and carry 0.6 A. A third identical bulb is added in series with them. What current flows now?`,
        options: [r`0.9 A`, r`0.4 A`, r`0.2 A`, r`0.6 A`],
        correctAnswer: 1,
        explanation: r`The total resistance goes from 2R to 3R with the same battery voltage, so the current falls to 2/3 of its old value: (2/3) × 0.6 A = 0.4 A. The value 0.9 A raises the current by 3/2 as if a branch had been added in parallel. The value 0.2 A divides by 3, and 0.6 A assumes the battery fixes the current.`,
      },
      {
        question: r`Two identical ohmic bulbs are in series across a 12 V ideal battery. A third identical bulb is added in series. How does the voltage across each of the original bulbs change?`,
        options: [
          r`From 12 V to 6 V`,
          r`From 6 V to 3 V`,
          r`From 6 V to 2 V`,
          r`From 6 V to 4 V`,
        ],
        correctAnswer: 3,
        explanation: r`Identical bulbs in series share the battery voltage equally. Two bulbs get 12/2 = 6 V each, and three bulbs get 12/3 = 4 V each, so each original bulb is dimmer. Starting from 12 V gives each series bulb the full battery voltage, 3 V halves the old share, and 2 V divides the old share by 3.`,
      },
      {
        question: r`Two identical ohmic heaters in series draw a total of 36 W from an ideal supply. A third identical heater is added in series with them. What total power do the three heaters draw?`,
        options: [r`24 W`, r`54 W`, r`16 W`, r`36 W`],
        correctAnswer: 0,
        explanation: r`Total power is V²/R_total, and the total resistance rises from 2R to 3R, so the power falls to 2/3 of 36 W, which is 24 W. The value 54 W assumes each heater keeps its 18 W. The value 16 W is 4/9 of 36 W, the factor for a single heater applied to the total, and 36 W assumes the total cannot change.`,
      },
      {
        question: r`A decorative light strand has two identical 3 Ω ohmic lamps in series across an 18 V ideal supply, and each lamp gives off 27 W. A third identical 3 Ω lamp is then added to the strand in series. What power does each lamp dissipate now?`,
        options: [r`27 W`, r`18 W`, r`12 W`, r`36 W`],
        correctAnswer: 2,
        explanation: r`With three lamps the resistance is 9 Ω, so the current is 18 V / 9 Ω = 2 A, down from 3 A. Each lamp dissipates I²R = (2 A)² × 3 Ω = 12 W. The value 27 W assumes nothing changes, 18 W scales the power by 2/3 like the current instead of by (2/3)², and 36 W is the total for all three lamps.`,
      },
      {
        question: r`A third identical ohmic bulb is added in series to two bulbs already in series across an ideal battery. Afterward each bulb dissipates 8 W. What power did each of the original two bulbs dissipate before the third was added?`,
        options: [r`12 W`, r`3.6 W`, r`24 W`, r`18 W`],
        correctAnswer: 3,
        explanation: r`Adding the third bulb cut the current to 2/3 of its old value, so each bulb's power, I²R, fell to 4/9 of what it was. Working backward, the old power was 8 W × 9/4 = 18 W. The value 12 W undoes only a factor of 2/3, 3.6 W applies 4/9 in the wrong direction, and 24 W multiplies by 3.`,
      },
      {
        question: r`Two identical ohmic lamps in series draw 300 mA from a 6 V ideal battery. A third identical lamp is added in series. How much power does the battery deliver now?`,
        options: [r`1800 mW`, r`1200 mW`, r`2700 mW`, r`800 mW`],
        correctAnswer: 1,
        explanation: r`The resistance rises from 2R to 3R, so the current falls to (2/3) × 300 mA = 200 mA = 0.2 A. The battery then delivers P = IV = 0.2 A × 6 V = 1.2 W = 1200 mW. The value 1800 mW is the power before the change, 2700 mW raises the current to 450 mA, and 800 mW applies the single-lamp factor of 4/9 to the total.`,
      },
    ],
  },
}
