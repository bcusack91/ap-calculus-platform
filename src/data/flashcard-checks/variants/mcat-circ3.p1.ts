import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for EMF, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A watch cell is stamped "ε = 3.0 V". What does that label say about each coulomb of charge the cell's chemistry pushes through it?`,
        options: [r`It is pushed with 3.0 N of force`, r`It is given 3.0 J of energy`, r`It is moved in 3.0 s of time`, r`It is carried at 3.0 A of current`],
        correctAnswer: 1,
        explanation: r`ε is the EMF, measured in volts, and 1 V = 1 J/C, so 3.0 V means 3.0 J of work for each coulomb. A newton is a unit of force, and an EMF is not a force despite its name. Seconds and amperes measure time and current, not energy per charge.`,
      },
      {
        question: r`A student writes four statements about the ε that appears in a circuit equation. Which one is NOT correct?`,
        options: [r`It is measured in volts, the same as a voltage`, r`It is a Greek letter that stands for the EMF`, r`It is a number of joules for each coulomb`, r`It is measured in newtons, since it is a force`],
        correctAnswer: 3,
        explanation: r`ε (epsilon) stands for the EMF, and its SI unit is the volt, which is one joule per coulomb. The statement that it is measured in newtons is the wrong one: "electromotive force" is only a historical name, and the EMF is work per unit charge. The other three statements all describe ε correctly.`,
      },
    ],
  },
  [r`What symbol stands for internal resistance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A circuit diagram of a battery lighting a lamp is labelled "ε = 9.0 V, r = 1.0 Ω, R = 8.0 Ω". What do the two resistance labels refer to?`,
        options: [r`r is inside the battery; R is the lamp`, r`r is the lamp; R is inside the battery`, r`r is the wire's radius; R is the lamp`, r`r is inside the battery; R is the wire`],
        correctAnswer: 0,
        explanation: r`Lower-case r is the battery's internal resistance, and capital R is the external load, here the lamp. Swapping the two reverses the convention. A radius would not carry the unit Ω, and the load in this circuit is the lamp, not the connecting wire.`,
      },
      {
        question: r`A data sheet lists a cell's r as the number 0.25 with the unit missing. A current of 2.0 A through the cell causes a 0.50 V drop inside it. Which entry completes the data sheet?`,
        options: [r`0.25 W, which is a volt times an ampere`, r`0.25 V, which is a joule per coulomb`, r`0.25 Ω, which is a volt per ampere`, r`0.25 S, which is an ampere per volt`],
        correctAnswer: 2,
        explanation: r`r is the internal resistance, so its unit is the ohm: 0.50 V ÷ 2.0 A = 0.25 volts per ampere = 0.25 Ω. A volt times an ampere is a watt, a unit of power. The volt belongs to the drop itself, and amperes per volt is the inverted ratio (a conductance).`,
      },
    ],
  },
  [r`What symbol stands for terminal voltage, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery is running a motor. Where must the two probes of a voltmeter go for the meter to show the battery's $V_{\text{term}}$?`,
        options: [r`Across the internal resistance alone, inside it`, r`Across one length of the connecting wire only`, r`In series between the battery and the motor`, r`Across the battery's two terminals, + and −`],
        correctAnswer: 3,
        explanation: r`$V_{\text{term}}$ is the voltage between the battery's two terminals, so the probes go on the + and − terminals. The internal resistance is inside the battery and cannot be probed by itself. An ideal wire has no voltage across it, and a voltmeter placed in series would stop the current instead of measuring the terminal voltage.`,
      },
      {
        question: r`A voltmeter on a battery's terminals reads 9.0 V with the switch open and 8.2 V once the switch is closed and a motor runs. Which pair of entries is right for the running circuit?`,
        options: [r`ε = 8.2 V and $V_{\text{term}}$ = 9.0 V`, r`ε = 9.0 V and $V_{\text{term}}$ = 8.2 V`, r`ε = 9.0 V and $V_{\text{term}}$ = 0.8 V`, r`ε = 0.8 V and $V_{\text{term}}$ = 8.2 V`],
        correctAnswer: 1,
        explanation: r`$V_{\text{term}}$ is whatever the voltmeter shows across the terminals while the current flows, 8.2 V. The open-switch reading, 9.0 V, is the EMF ε. Swapping them reverses the two labels, and 0.8 V is the drop across the internal resistance, which is neither ε nor $V_{\text{term}}$.`,
      },
    ],
  },
  [r`What is a battery's EMF?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An electric eel's stack of electrocytes does 1.8 J of work on the 3.0 mC it drives out through the water in one pulse. What is the EMF of the stack?`,
        options: [r`5.4 V`, r`0.60 V`, r`600 V`, r`1.7 mV`],
        correctAnswer: 2,
        explanation: r`ε = W/q = 1.8 J ÷ 0.0030 C = 600 V. Dividing by 3.0 without converting millicoulombs gives 0.60 V, and multiplying 1.8 by 3.0 gives 5.4. 1.7 mV is the inverted ratio, 0.0030 ÷ 1.8.`,
      },
      {
        question: r`A 12 V pack in a portable defibrillator hands 600 J of electrical energy to the coulombs passing through it. How many coulombs passed through?`,
        options: [r`50 C`, r`7200 C`, r`0.020 C`, r`612 C`],
        correctAnswer: 0,
        explanation: r`From ε = W/q, q = W/ε = 600 J ÷ 12 V = 50 C. Multiplying 600 by 12 gives 7200, dividing 12 by 600 gives 0.020, and adding the two numbers gives 612. None of those rearranges the equation correctly.`,
      },
      {
        question: r`A 1.5 V cell in a camera flash circuit moves 20 mC of charge from its − terminal to its + terminal. How much work does its chemistry do on that charge?`,
        options: [r`30 J`, r`75 mJ`, r`13 mJ`, r`30 mJ`],
        correctAnswer: 3,
        explanation: r`W = εq = 1.5 V × 0.020 C = 0.030 J = 30 mJ. An answer of 30 J leaves the charge in millicoulombs without converting. 75 comes from dividing 1.5 by 0.020, and 13 from dividing 20 by 1.5, both of which divide where the equation multiplies.`,
      },
      {
        question: r`Battery Y does three times as much work as battery X, but it does that work on only half as much charge. How does Y's EMF compare with X's?`,
        options: [r`It is 1.5 times as large`, r`It is 6 times as large`, r`It is 2/3 as large`, r`It is 1/6 as large`],
        correctAnswer: 1,
        explanation: r`ε = W/q, so tripling W and halving q changes the EMF by 3 ÷ (1/2) = 6. Multiplying 3 by 1/2 gives 1.5, which treats the charge as if it were in the numerator. The two fractions are the inverses of those ratios.`,
      },
      {
        question: r`A lead-acid cell has an EMF of 2.0 V. How much work does its chemistry do for each electron's worth of charge, 1.6 × 10⁻¹⁹ C, that it drives through the cell?`,
        options: [r`3.2 × 10⁻¹⁹ J`, r`8.0 × 10⁻²⁰ J`, r`1.25 × 10¹⁹ J`, r`1.6 × 10⁻¹⁹ J`],
        correctAnswer: 0,
        explanation: r`W = εq = 2.0 V × 1.6 × 10⁻¹⁹ C = 3.2 × 10⁻¹⁹ J. Dividing the charge by the EMF gives 8.0 × 10⁻²⁰, and dividing the EMF by the charge gives 1.25 × 10¹⁹. Leaving the value at 1.6 × 10⁻¹⁹ would be right only for a 1.0 V cell.`,
      },
      {
        question: r`A hearing-aid cell supplies a steady 0.50 A. In 60 s its chemistry does 45 J of work on the charge that passes through it. What is the cell's EMF?`,
        options: [r`90 V`, r`0.67 V`, r`1.5 V`, r`0.75 V`],
        correctAnswer: 2,
        explanation: r`The charge moved is q = It = 0.50 A × 60 s = 30 C, so ε = W/q = 45 J ÷ 30 C = 1.5 V. Dividing 45 by the current gives 90, and dividing 45 by the time gives 0.75; neither is work per charge. 0.67 is the inverted ratio, 30 ÷ 45.`,
      },
    ],
  },
  [r`How is a real battery modelled, and what current does it drive through a load?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flashlight battery has an EMF of 9.0 V and an internal resistance of 0.50 Ω. It is connected to a bulb whose resistance is 4.0 Ω. What current flows?`,
        options: [r`2.3 A`, r`2.0 A`, r`18 A`, r`2.6 A`],
        correctAnswer: 1,
        explanation: r`I = ε/(R + r) = 9.0 V ÷ (4.0 Ω + 0.50 Ω) = 9.0 ÷ 4.5 = 2.0 A. Leaving r out gives 9.0 ÷ 4.0 ≈ 2.3 A, and using r alone gives 18 A. Subtracting r from R gives 9.0 ÷ 3.5 ≈ 2.6 A, but series resistances add.`,
      },
      {
        question: r`A battery with an EMF of 6.0 V and an internal resistance of 1.0 Ω drives 0.50 A through a heating coil. What is the coil's resistance?`,
        options: [r`12 Ω`, r`13 Ω`, r`3.0 Ω`, r`11 Ω`],
        correctAnswer: 3,
        explanation: r`The total resistance is R + r = ε/I = 6.0 V ÷ 0.50 A = 12 Ω, so R = 12 − 1.0 = 11 Ω. Stopping at 12 Ω forgets that the total includes r, and 13 Ω adds r instead of removing it. 3.0 comes from multiplying 6.0 by 0.50.`,
      },
      {
        question: r`A 1.5 V cell drives 0.25 A through a 5.5 Ω resistor. What is the cell's internal resistance?`,
        options: [r`0.50 Ω`, r`6.0 Ω`, r`11.5 Ω`, r`1.4 Ω`],
        correctAnswer: 0,
        explanation: r`R + r = ε/I = 1.5 V ÷ 0.25 A = 6.0 Ω, so r = 6.0 − 5.5 = 0.50 Ω. 6.0 Ω is the total, not r alone, and 11.5 Ω adds the load to the total. 1.4 comes from multiplying 5.5 by 0.25, which is the voltage across the resistor.`,
      },
      {
        question: r`A power supply with an internal resistance of 0.50 Ω drives 3.0 A through a 3.5 Ω motor winding. What is the supply's EMF?`,
        options: [r`10.5 V`, r`1.5 V`, r`12 V`, r`9.0 V`],
        correctAnswer: 2,
        explanation: r`ε = I(R + r) = 3.0 A × (3.5 Ω + 0.50 Ω) = 3.0 × 4.0 = 12 V. 10.5 V is I × R alone, the voltage across the winding, and 1.5 V is I × r alone. 9.0 V subtracts r from R before multiplying.`,
      },
      {
        question: r`A coin cell with an EMF of 3.0 V and an internal resistance of 50 Ω is connected across a 950 Ω temperature sensor. What current flows?`,
        options: [r`3.2 mA`, r`60 mA`, r`3.0 A`, r`3.0 mA`],
        correctAnswer: 3,
        explanation: r`I = ε/(R + r) = 3.0 V ÷ 1000 Ω = 3.0 × 10⁻³ A = 3.0 mA. Leaving out r gives 3.0 ÷ 950 ≈ 3.2 mA, and using r alone gives 60 mA. 3.0 A slips three powers of ten in the conversion to milliamps.`,
      },
      {
        question: r`A battery with an internal resistance of 2.0 Ω drives a 10 Ω load. The load is replaced by a 4.0 Ω load. By what factor does the current change?`,
        options: [r`It rises to 2.5 times its value`, r`It rises to 2 times its value`, r`It falls to 1/2 of its value`, r`It falls to 2/5 of its value`],
        correctAnswer: 1,
        explanation: r`The current is ε/(R + r), so it goes from ε/12 to ε/6: it doubles. A factor of 2.5 compares the loads alone, 10 ÷ 4.0, and leaves r out. The two "falls" answers invert the ratios; less total resistance means more current.`,
      },
    ],
  },
  [r`What is a battery's terminal voltage while it supplies current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A cordless drill's battery has an EMF of 18 V and an internal resistance of 0.20 Ω. What is its terminal voltage while the drill draws 15 A?`,
        options: [r`15 V`, r`21 V`, r`3.0 V`, r`18 V`],
        correctAnswer: 0,
        explanation: r`$V_{\text{term}}$ = ε − Ir = 18 V − (15 A × 0.20 Ω) = 18 − 3.0 = 15 V. Adding the drop gives 21 V, which is the rule for a battery being charged. 3.0 V is only the internal drop, and 18 V ignores the drop.`,
      },
      {
        question: r`A smoke-alarm battery has an EMF of 9.0 V and an internal resistance of 2.0 Ω. While the alarm sounds, the voltage across the battery's terminals is 8.0 V. What current is the battery supplying?`,
        options: [r`4.0 A`, r`4.5 A`, r`0.50 A`, r`2.0 A`],
        correctAnswer: 2,
        explanation: r`The drop inside is ε − $V_{\text{term}}$ = 1.0 V, so I = 1.0 V ÷ 2.0 Ω = 0.50 A. Dividing the terminal voltage by r gives 4.0 A and dividing the EMF by r gives 4.5 A, but only the 1.0 V difference sits across r. 2.0 is the inverted ratio.`,
      },
      {
        question: r`An AA cell has an EMF of 1.50 V. While it supplies 0.30 A to a toy, a voltmeter across its terminals reads 1.35 V. What is the cell's internal resistance?`,
        options: [r`4.5 Ω`, r`0.50 Ω`, r`5.0 Ω`, r`0.045 Ω`],
        correctAnswer: 1,
        explanation: r`Ir = ε − $V_{\text{term}}$ = 1.50 − 1.35 = 0.15 V, so r = 0.15 V ÷ 0.30 A = 0.50 Ω. 4.5 Ω is the terminal voltage over the current, which is the toy's resistance, and 5.0 Ω is the total. 0.045 comes from multiplying 0.15 by 0.30.`,
      },
      {
        question: r`A battery with an internal resistance of 0.050 Ω supplies 20 A to a winch, and the voltage across its terminals is 11.0 V. What is the battery's EMF?`,
        options: [r`10.0 V`, r`11.0 V`, r`1.0 V`, r`12.0 V`],
        correctAnswer: 3,
        explanation: r`ε = $V_{\text{term}}$ + Ir = 11.0 V + (20 A × 0.050 Ω) = 11.0 + 1.0 = 12.0 V. Subtracting the drop gives 10.0 V, but while supplying current the EMF is above the terminal voltage. 11.0 V ignores the drop and 1.0 V is the drop alone.`,
      },
      {
        question: r`A sensor battery has an EMF of 3.00 V and an internal resistance of 10 Ω. What is its terminal voltage while it supplies 20 mA?`,
        options: [r`1.00 V`, r`3.20 V`, r`2.80 V`, r`0.20 V`],
        correctAnswer: 2,
        explanation: r`Ir = 0.020 A × 10 Ω = 0.20 V, so $V_{\text{term}}$ = 3.00 − 0.20 = 2.80 V. Taking the current as 0.20 A gives a 2.0 V drop and 1.00 V. 3.20 V adds the drop, and 0.20 V is the drop itself.`,
      },
      {
        question: r`While it supplies 2.0 A, a battery's terminal voltage sits 0.30 V below its EMF. How far below its EMF does the terminal voltage sit while it supplies 6.0 A?`,
        options: [r`0.90 V`, r`0.10 V`, r`0.30 V`, r`2.7 V`],
        correctAnswer: 0,
        explanation: r`The sag is Ir, which is proportional to the current. Three times the current gives three times the sag: 3 × 0.30 V = 0.90 V. 0.10 V divides by 3, 0.30 V treats the sag as fixed, and 2.7 V multiplies by 3², which would be right for the heating power but not for the voltage drop.`,
      },
    ],
  },
  [r`What is the terminal voltage of a battery that is being charged?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An e-bike battery has an EMF of 36 V and an internal resistance of 0.50 Ω. What is the voltage across its terminals while it is being charged at 4.0 A?`,
        options: [r`34 V`, r`2.0 V`, r`36 V`, r`38 V`],
        correctAnswer: 3,
        explanation: r`While charging, $V_{\text{term}}$ = ε + Ir = 36 V + (4.0 A × 0.50 Ω) = 36 + 2.0 = 38 V. 34 V subtracts the drop, which is the rule for a battery that is supplying current. 2.0 V is the drop alone and 36 V ignores it.`,
      },
      {
        question: r`A lithium cell has an EMF of 3.9 V and an internal resistance of 0.15 Ω. While it charges, a voltmeter across its terminals reads 4.2 V. What is the charging current?`,
        options: [r`28 A`, r`2.0 A`, r`26 A`, r`0.045 A`],
        correctAnswer: 1,
        explanation: r`$V_{\text{term}}$ − ε = Ir, so I = (4.2 − 3.9) V ÷ 0.15 Ω = 0.30 ÷ 0.15 = 2.0 A. Dividing the whole 4.2 V by r gives 28 A, and dividing the EMF by r gives 26 A. 0.045 comes from multiplying 0.30 by 0.15.`,
      },
      {
        question: r`A motorcycle battery with an EMF of 12.0 V is charged at 10 A, and the voltage across its terminals rises to 13.0 V. What is its internal resistance?`,
        options: [r`1.3 Ω`, r`1.2 Ω`, r`0.10 Ω`, r`10 Ω`],
        correctAnswer: 2,
        explanation: r`The extra 1.0 V above the EMF is the drop Ir, so r = 1.0 V ÷ 10 A = 0.10 Ω. 1.3 Ω divides the whole terminal voltage by the current, and 1.2 Ω divides the EMF by it. 10 Ω is the inverted ratio.`,
      },
      {
        question: r`A rechargeable AA cell with an internal resistance of 0.20 Ω is charged at 0.50 A. A voltmeter across its terminals reads 1.45 V during charging. What is the cell's EMF?`,
        options: [r`1.35 V`, r`1.55 V`, r`1.45 V`, r`0.10 V`],
        correctAnswer: 0,
        explanation: r`While charging, $V_{\text{term}}$ = ε + Ir, so ε = 1.45 V − (0.50 A × 0.20 Ω) = 1.45 − 0.10 = 1.35 V. 1.55 V adds the drop a second time, as if the cell were supplying current. 1.45 V ignores the drop and 0.10 V is the drop alone.`,
      },
      {
        question: r`A battery has an EMF of 6.0 V and an internal resistance of 0.25 Ω. How much higher is its terminal voltage while it is charged at 2.0 A than while it supplies 2.0 A to a load?`,
        options: [r`0.50 V`, r`1.0 V`, r`0 V`, r`12 V`],
        correctAnswer: 1,
        explanation: r`Ir = 2.0 A × 0.25 Ω = 0.50 V. Charging gives ε + Ir = 6.5 V and supplying gives ε − Ir = 5.5 V, a difference of 1.0 V. 0.50 V counts the drop only once, 0 V assumes the direction of the current makes no difference, and 12 V doubles the EMF.`,
      },
      {
        question: r`A hearing-aid cell with an internal resistance of 2.0 Ω is recharged at 50 mA. By how much does the voltage across its terminals exceed its EMF during charging?`,
        options: [r`25 mV`, r`100 V`, r`40 mV`, r`100 mV`],
        correctAnswer: 3,
        explanation: r`While charging, $V_{\text{term}}$ = ε + Ir, so the excess is Ir = 0.050 A × 2.0 Ω = 0.10 V = 100 mV. Using 50 without converting milliamps gives 100 V. 25 mV divides the current by the resistance, and 40 mV divides the resistance by the current (2.0 ÷ 50 = 0.040); neither is the product Ir.`,
      },
    ],
  },
  [r`What happens when a bare wire shorts a battery's terminals?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A wrench of negligible resistance falls across the terminals of a 12 V car battery whose internal resistance is 0.010 Ω. What current flows?`,
        options: [r`120 A`, r`0.12 A`, r`1200 A`, r`12 A`],
        correctAnswer: 2,
        explanation: r`Only r limits the current: $I_{\max}$ = ε/r = 12 V ÷ 0.010 Ω = 1200 A. 120 A slips a power of ten in the division, and 0.12 comes from multiplying 12 by 0.010. 12 A would need a total resistance of 1.0 Ω.`,
      },
      {
        question: r`When its terminals are shorted by a thick wire, a battery with an internal resistance of 0.75 Ω delivers 8.0 A. What is the battery's EMF?`,
        options: [r`11 V`, r`0.094 V`, r`8.8 V`, r`6.0 V`],
        correctAnswer: 3,
        explanation: r`In a short, $I_{\max}$ = ε/r, so ε = $I_{\max}$ r = 8.0 A × 0.75 Ω = 6.0 V. Dividing 8.0 by 0.75 gives about 11, and dividing 0.75 by 8.0 gives 0.094. 8.8 comes from adding the two numbers.`,
      },
      {
        question: r`A 9.0 V battery with an internal resistance of 1.5 Ω is shorted by a wire of negligible resistance. How is the 9.0 V shared between the internal resistance and the terminals?`,
        options: [r`9.0 V inside, 0 V at the terminals`, r`0 V inside, 9.0 V at the terminals`, r`4.5 V inside, 4.5 V at the terminals`, r`6.0 V inside, 3.0 V at the terminals`],
        correctAnswer: 0,
        explanation: r`The short-circuit current is 9.0 V ÷ 1.5 Ω = 6.0 A, so the internal drop is 6.0 A × 1.5 Ω = 9.0 V and the terminal voltage is 9.0 − 9.0 = 0 V. A wire with no resistance cannot hold any voltage, which rules out 9.0 V, 4.5 V or 3.0 V at the terminals. The 6.0 is the current in amperes, not a voltage.`,
      },
      {
        question: r`As a battery ages, its internal resistance triples while its EMF stays the same. How does the current it would deliver into a short circuit change?`,
        options: [r`It rises to 3 times its value`, r`It falls to 1/3 of its value`, r`It falls to 1/9 of its value`, r`It stays at the same value`],
        correctAnswer: 1,
        explanation: r`$I_{\max}$ = ε/r, so with ε fixed and r tripled the short-circuit current falls to 1/3. A rise to 3 times inverts the relationship, and 1/9 squares the factor, which is not in this equation. It cannot stay the same, because r is the only thing limiting the current.`,
      },
      {
        question: r`A lithium-ion cell has an EMF of 3.6 V and an internal resistance of 40 mΩ. What current would flow if its terminals were shorted by a strip of metal with negligible resistance?`,
        options: [r`0.090 A`, r`144 A`, r`0.14 A`, r`90 A`],
        correctAnswer: 3,
        explanation: r`r = 40 mΩ = 0.040 Ω, so $I_{\max}$ = ε/r = 3.6 V ÷ 0.040 Ω = 90 A. Dividing by 40 without converting gives 0.090 A. 144 and 0.14 come from multiplying 3.6 by 40 or by 0.040 instead of dividing.`,
      },
      {
        question: r`Each of these four sources is shorted by a wire of negligible resistance. Which one delivers the largest current?`,
        options: [r`A 12 V battery with r = 0.50 Ω`, r`A 9.0 V battery with r = 1.5 Ω`, r`A 1.5 V cell with r = 0.10 Ω`, r`A 24 V battery with r = 2.0 Ω`],
        correctAnswer: 0,
        explanation: r`$I_{\max}$ = ε/r for each: 12 ÷ 0.50 = 24 A, 9.0 ÷ 1.5 = 6.0 A, 1.5 ÷ 0.10 = 15 A and 24 ÷ 2.0 = 12 A. The 12 V battery gives the most. The 24 V battery has the largest EMF and the 1.5 V cell the smallest r, but it is the ratio that sets the current.`,
      },
    ],
  },
  [r`Where does the power the battery's chemistry supplies go?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A battery with an EMF of 9.0 V and an internal resistance of 2.0 Ω supplies 1.0 A to a radio. How much power reaches the radio?`,
        options: [r`9.0 W`, r`7.0 W`, r`2.0 W`, r`11 W`],
        correctAnswer: 1,
        explanation: r`The chemistry supplies εI = 9.0 V × 1.0 A = 9.0 W, and I²r = (1.0 A)² × 2.0 Ω = 2.0 W heats the battery, so 9.0 − 2.0 = 7.0 W reaches the radio. 9.0 W is everything supplied, 2.0 W is the wasted part, and 11 W adds the loss instead of removing it.`,
      },
      {
        question: r`A battery's chemistry supplies 60 W while the battery delivers 5.0 A, and 50 W reaches the load. What is the battery's internal resistance?`,
        options: [r`0.40 Ω`, r`2.0 Ω`, r`2.4 Ω`, r`12 Ω`],
        correctAnswer: 0,
        explanation: r`The power heating the battery is 60 − 50 = 10 W, and I²r = 10 W gives r = 10 ÷ (5.0)² = 10 ÷ 25 = 0.40 Ω. 2.0 Ω comes from 50 ÷ 25, the load's resistance, and 2.4 Ω from 60 ÷ 25, the total. 12 is 60 ÷ 5.0, the EMF in volts.`,
      },
      {
        question: r`A power bank has an EMF of 5.0 V. While it supplies 0.20 A to a small fan, the voltage across its terminals is 4.5 V. How much power reaches the fan?`,
        options: [r`1.0 W`, r`0.10 W`, r`0.90 W`, r`22.5 W`],
        correctAnswer: 2,
        explanation: r`The load's share is $V_{\text{term}}$ I = 4.5 V × 0.20 A = 0.90 W. 1.0 W is εI, all the power the chemistry supplies, and 0.10 W is the difference, which heats the power bank. 22.5 comes from dividing 4.5 by 0.20.`,
      },
      {
        question: r`A battery's load is changed so that the current through the battery doubles. Its internal resistance stays the same. How does the power turned to heat inside the battery change?`,
        options: [r`It becomes 2 times as large`, r`It becomes 1/2 as large`, r`It stays exactly the same`, r`It becomes 4 times as large`],
        correctAnswer: 3,
        explanation: r`The power wasted inside is I²r. With r fixed, doubling I multiplies it by 2² = 4. "2 times" forgets the square, "1/2" inverts the change, and it cannot stay the same because the internal heating depends on the current.`,
      },
      {
        question: r`A battery has an EMF of 6.0 V. Its load receives 8.0 W while 4.0 W is turned to heat inside the battery. What current is the battery supplying?`,
        options: [r`2.0 A`, r`1.3 A`, r`0.67 A`, r`72 A`],
        correctAnswer: 0,
        explanation: r`The chemistry supplies εI = 8.0 W + 4.0 W = 12 W, so I = 12 W ÷ 6.0 V = 2.0 A. Using only the load's 8.0 W gives 1.3 A and using only the 4.0 W gives 0.67 A, but εI is the total. 72 comes from multiplying 12 by 6.0.`,
      },
      {
        question: r`A coin cell with an EMF of 3.0 V and an internal resistance of 20 Ω supplies 10 mA to a wireless sensor. How much power reaches the sensor?`,
        options: [r`30 mW`, r`2.0 mW`, r`28 mW`, r`32 mW`],
        correctAnswer: 2,
        explanation: r`Supplied: εI = 3.0 V × 0.010 A = 0.030 W = 30 mW. Wasted: I²r = (0.010 A)² × 20 Ω = 0.0020 W = 2.0 mW. The sensor gets 30 − 2.0 = 28 mW. 30 mW is the total supplied, 2.0 mW is the internal heating, and 32 mW adds the loss instead of subtracting it.`,
      },
    ],
  },
  [r`Is charge used up in the load?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery lights a lamp. Which of these statements about the lamp is NOT correct?`,
        options: [r`The lamp turns electrical energy into light`, r`The current is the same on both sides of it`, r`The lamp uses up some charge to make light`, r`Each coulomb leaves it at a lower potential`],
        correctAnswer: 2,
        explanation: r`Charge is not used up: every coulomb that enters the lamp leaves it and returns to the battery. What the lamp converts is the charge's energy, so each coulomb leaves at a lower potential and the current is the same on both sides. The statement about using up charge is the false one.`,
      },
      {
        question: r`Two identical bulbs are wired in series with a battery. A student predicts that the second bulb will be dimmer because the first one "uses up" some of the current. What is actually seen?`,
        options: [r`Equal brightness; the same current is in both`, r`Second is dimmer; the first used some current`, r`Second is brighter; the current has sped up`, r`Second is dark; the first used all the charge`],
        correctAnswer: 0,
        explanation: r`Charge is not consumed in a load, so the current leaving the first bulb equals the current entering it, and both identical bulbs carry the same current and glow equally. Each bulb takes energy from the charge, not charge itself. The dimmer and dark predictions assume charge is used up, and nothing speeds the current up between the bulbs.`,
      },
    ],
  },
  [r`Why can an old battery still read its full voltage on a voltmeter?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A fresh cell and a worn-out cell have the same EMF, but the worn-out one has a much larger internal resistance. Which test tells them apart?`,
        options: [r`Reading each one's voltage with an ideal voltmeter alone`, r`Reading each one's voltage while it runs a small resistor`, r`Reading each one's voltage with the meter leads swapped`, r`Reading each one's voltage with two ideal meters attached`],
        correctAnswer: 1,
        explanation: r`Only a real load draws enough current for the Ir drop to appear: the worn-out cell's terminal voltage then sags far more than the fresh cell's. An ideal voltmeter, or two of them, draws almost no current, so both cells show their full and equal EMF. Swapping the leads only changes the sign of the reading.`,
      },
      {
        question: r`An ideal voltmeter alone is placed across an old battery whose internal resistance has become large. Why does the reading give no hint of that large resistance?`,
        options: [r`The large resistance drops to zero when no load is attached`, r`The meter adds a voltage of its own to replace what is lost`, r`A large current flows, and it hides the drop across r`, r`Almost no current flows, so the drop across r is near zero`],
        correctAnswer: 3,
        explanation: r`The drop across the internal resistance is Ir. An ideal voltmeter draws almost no current, so Ir is close to zero however large r has become, and the meter shows the unchanged EMF. The resistance itself does not vanish, the meter supplies no voltage, and the current through an ideal voltmeter is tiny, not large.`,
      },
    ],
  },
  [r`What does an ideal voltmeter read across a battery with nothing else attached?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal voltmeter is the only thing connected to a battery, and it reads 9.0 V. The battery's internal resistance is 2.0 Ω. What is the battery's EMF?`,
        options: [r`9.0 V, because no current flows through r`, r`11 V, because the drop across r is added`, r`7.0 V, because the drop across r is removed`, r`4.5 V, because r takes half of the EMF`],
        correctAnswer: 0,
        explanation: r`With only an ideal voltmeter attached, no current flows, so there is no drop across the internal resistance and the reading is the EMF itself: 9.0 V. Adding or removing 2.0 V treats the 2.0 Ω as if 1.0 A were flowing through it. Nothing divides the EMF in half when there is no current.`,
      },
      {
        question: r`An ideal voltmeter across a battery reads 6.0 V while a switch to a lamp is open. When the switch is closed and the lamp lights, it reads 5.5 V. Which value is the battery's EMF?`,
        options: [r`The 5.5 V reading, taken with the lamp current on`, r`The sum, 11.5 V, since the two readings must add`, r`The 6.0 V reading, taken with no current flowing`, r`The difference, 0.5 V, lost inside the battery`],
        correctAnswer: 2,
        explanation: r`With the switch open only the ideal voltmeter is attached, no current flows, and the meter shows the EMF: 6.0 V. The 5.5 V reading is the terminal voltage under load, which is lower by the drop across the internal resistance. That 0.5 V drop is not the EMF, and the two readings are never added.`,
      },
    ],
  },
  [r`A known load $R$ is connected and the terminal voltage drops to $V_{\text{term}}$. How do you find the current and the internal resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A voltmeter across a lithium cell reads 3.0 V with nothing else attached. With a 14 Ω resistor connected across the cell, it reads 2.8 V. What current flows through the resistor?`,
        options: [r`0.21 A`, r`0.014 A`, r`5.0 A`, r`0.20 A`],
        correctAnswer: 3,
        explanation: r`The current comes from the load and the voltage actually across it: I = $V_{\text{term}}$/R = 2.8 V ÷ 14 Ω = 0.20 A. Using the EMF, 3.0 ÷ 14, gives 0.21 A, and using the 0.2 V drop over 14 Ω gives 0.014 A. 5.0 is the inverted ratio, 14 ÷ 2.8.`,
      },
      {
        question: r`An AA cell reads 1.50 V on a voltmeter with nothing else attached. With a 10 Ω resistor across its terminals, the reading falls to 1.25 V. What is the cell's internal resistance?`,
        options: [r`1.7 Ω`, r`12 Ω`, r`2.0 Ω`, r`8.0 Ω`],
        correctAnswer: 2,
        explanation: r`I = $V_{\text{term}}$/R = 1.25 V ÷ 10 Ω = 0.125 A, then r = (ε − $V_{\text{term}}$)/I = 0.25 V ÷ 0.125 A = 2.0 Ω. Using ε/R = 0.15 A for the current gives 1.7 Ω. 12 Ω is ε/I, the total R + r, and 8.0 Ω subtracts r from the load.`,
      },
      {
        question: r`A truck battery reads 24 V with its terminals open. When an 11 Ω heater is connected, the terminal voltage is 22 V. What are the current and the battery's internal resistance?`,
        options: [r`2.0 A and 11 Ω`, r`2.0 A and 1.0 Ω`, r`2.2 A and 0.92 Ω`, r`2.2 A and 1.0 Ω`],
        correctAnswer: 1,
        explanation: r`I = $V_{\text{term}}$/R = 22 V ÷ 11 Ω = 2.0 A, and r = (24 − 22) V ÷ 2.0 A = 1.0 Ω. The check works: 24 V ÷ (11 + 1.0) Ω = 2.0 A. A current of 2.2 A comes from dividing the EMF by the load alone, and 11 Ω is the heater's resistance, not r.`,
      },
      {
        question: r`A battery has an EMF of 6.0 V and an internal resistance of 0.50 Ω. With an unknown load connected, the terminal voltage is 5.0 V. What is the resistance of the load?`,
        options: [r`2.5 Ω`, r`3.0 Ω`, r`0.50 Ω`, r`12 Ω`],
        correctAnswer: 0,
        explanation: r`The drop inside is 6.0 − 5.0 = 1.0 V, so I = 1.0 V ÷ 0.50 Ω = 2.0 A, and R = $V_{\text{term}}$/I = 5.0 V ÷ 2.0 A = 2.5 Ω. 3.0 Ω is ε/I, the total R + r. 0.50 Ω is the internal resistance again, and 12 comes from dividing the EMF by r.`,
      },
      {
        question: r`A signal source reads 5.0 V with nothing connected. With a 2.0 kΩ load connected, its terminal voltage is 4.0 V. What is the source's internal resistance?`,
        options: [r`0.50 Ω`, r`2.5 kΩ`, r`500 Ω`, r`2.0 kΩ`],
        correctAnswer: 2,
        explanation: r`I = $V_{\text{term}}$/R = 4.0 V ÷ 2000 Ω = 2.0 × 10⁻³ A, then r = (5.0 − 4.0) V ÷ 2.0 × 10⁻³ A = 500 Ω. Treating the current as 2.0 A gives 0.50 Ω. 2.5 kΩ is ε/I, the total resistance, and 2.0 kΩ is the load itself.`,
      },
      {
        question: r`A battery reads 10 V with its terminals open and 9.0 V when a 9.0 Ω resistor is connected. What current will the battery drive if that resistor is replaced by a 4.0 Ω resistor?`,
        options: [r`2.5 A`, r`2.0 A`, r`2.3 A`, r`1.0 A`],
        correctAnswer: 1,
        explanation: r`First load: I = 9.0 V ÷ 9.0 Ω = 1.0 A, so r = (10 − 9.0) V ÷ 1.0 A = 1.0 Ω. Second load: I = ε/(R + r) = 10 V ÷ 5.0 Ω = 2.0 A. 2.5 A leaves r out, 2.3 A assumes the terminal voltage stays at 9.0 V, and 1.0 A is the current with the first load.`,
      },
    ],
  },
  [r`How do you check a battery's power bookkeeping?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A battery with an EMF of 12 V and an internal resistance of 1.0 Ω is connected to a 5.0 Ω load. Which set of power values is correct and balances?`,
        options: [r`24 W supplied; 20 W in load, 4.0 W inside`, r`29 W supplied; 29 W in load, 0 W inside`, r`24 W supplied; 4.0 W in load, 20 W inside`, r`20 W supplied; 24 W in load, 4.0 W inside`],
        correctAnswer: 0,
        explanation: r`I = 12 V ÷ 6.0 Ω = 2.0 A. Supplied: εI = 24 W. Load: I²R = 4.0 × 5.0 = 20 W. Inside: I²r = 4.0 × 1.0 = 4.0 W, and 20 + 4.0 = 24. The 29 W set leaves r out of the current. The other two swap the load and internal shares, or put the supplied power below what the load receives.`,
      },
      {
        question: r`A battery with an EMF of 9.0 V supplies 2.0 A, and its load receives 14 W. Use the power balance to find the battery's internal resistance.`,
        options: [r`2.0 Ω`, r`1.0 Ω`, r`3.5 Ω`, r`4.5 Ω`],
        correctAnswer: 1,
        explanation: r`Supplied: εI = 9.0 V × 2.0 A = 18 W, so 18 − 14 = 4.0 W heats the battery. I²r = 4.0 W gives r = 4.0 ÷ (2.0)² = 1.0 Ω. Dividing 4.0 W by the current instead of its square gives 2.0. 3.5 Ω is the load's resistance, 14 ÷ 4.0, and 4.5 Ω is the total, 9.0 ÷ 2.0.`,
      },
      {
        question: r`A battery with an EMF of 10 V and an internal resistance of 0.50 Ω supplies 4.0 A to a heater. Use the power balance to find the heater's resistance.`,
        options: [r`2.5 Ω`, r`8.0 Ω`, r`3.0 Ω`, r`2.0 Ω`],
        correctAnswer: 3,
        explanation: r`Supplied: εI = 40 W. Inside: I²r = 16 × 0.50 = 8.0 W. The heater gets 40 − 8.0 = 32 W, and I²R = 32 W gives R = 32 ÷ 16 = 2.0 Ω. 2.5 Ω is ε/I, the total resistance. 8.0 divides 32 W by the current instead of its square, and 3.0 Ω adds r to the total.`,
      },
      {
        question: r`A 1.5 V cell with an internal resistance of 0.50 Ω supplies 0.20 A to a clock for 100 s. How much energy reaches the clock in that time?`,
        options: [r`30 J`, r`2.0 J`, r`28 J`, r`32 J`],
        correctAnswer: 2,
        explanation: r`Supplied: εI = 1.5 V × 0.20 A = 0.30 W, which is 30 J in 100 s. Inside: I²r = (0.20)² × 0.50 = 0.020 W, which is 2.0 J. The clock gets 30 − 2.0 = 28 J. 30 J is everything supplied, 2.0 J is the wasted part, and 32 J adds the loss instead of subtracting it.`,
      },
      {
        question: r`A battery with an internal resistance of 1.5 Ω drives a 6.0 Ω load. How does the power delivered to the load compare with the power turned to heat inside the battery?`,
        options: [r`16 to 1`, r`4 to 1`, r`1 to 4`, r`5 to 1`],
        correctAnswer: 1,
        explanation: r`The same current flows through both, so I²R : I²r = R : r = 6.0 : 1.5 = 4 to 1. Squaring the resistance ratio gives 16 to 1, but it is the current that is squared, and it is common to both. "1 to 4" inverts the ratio, and "5 to 1" compares the total supplied power with the internal part.`,
      },
      {
        question: r`An electric cart's battery supplies 50 A. The motor receives 2.4 kW, and the battery's internal resistance is 0.040 Ω. What is the battery's EMF?`,
        options: [r`48 V`, r`2.0 V`, r`46 V`, r`50 V`],
        correctAnswer: 3,
        explanation: r`Inside: I²r = (50 A)² × 0.040 Ω = 100 W. Supplied: 2400 W + 100 W = 2500 W = εI, so ε = 2500 W ÷ 50 A = 50 V. 48 V divides only the motor's 2400 W by the current, which is the terminal voltage. 2.0 V is the internal drop alone, and 46 V subtracts it.`,
      },
    ],
  },
  [r`What current flows when a battery is shorted, and where does the power go?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V battery with an internal resistance of 1.5 Ω is shorted by a paper clip of negligible resistance. At what rate is the battery heated?`,
        options: [r`36 W`, r`14 W`, r`54 W`, r`81 W`],
        correctAnswer: 2,
        explanation: r`$I_{\max}$ = ε/r = 9.0 V ÷ 1.5 Ω = 6.0 A, and all the power heats the battery: ε$I_{\max}$ = 9.0 V × 6.0 A = 54 W. 36 is the current squared without the factor r, and 81 is the EMF squared without dividing by r. 14 comes from multiplying 9.0 by 1.5.`,
      },
      {
        question: r`A 2.0 V cell is shorted by a thick copper strap, and the cell heats at a rate of 20 W. What is the cell's internal resistance?`,
        options: [r`0.20 Ω`, r`10 Ω`, r`0.10 Ω`, r`5.0 Ω`],
        correctAnswer: 0,
        explanation: r`ε$I_{\max}$ = 20 W gives $I_{\max}$ = 20 W ÷ 2.0 V = 10 A, and r = ε/$I_{\max}$ = 2.0 V ÷ 10 A = 0.20 Ω. The 10 is the current in amperes, not the resistance. 0.10 divides the EMF by the power, and 5.0 is the inverted ratio of the correct division.`,
      },
      {
        question: r`A 1.5 V cell with an internal resistance of 0.25 Ω is shorted for 10 s by a coin of negligible resistance. How much heat is produced inside the cell?`,
        options: [r`9.0 J`, r`90 J`, r`60 J`, r`15 J`],
        correctAnswer: 1,
        explanation: r`$I_{\max}$ = 1.5 V ÷ 0.25 Ω = 6.0 A, so the power is ε$I_{\max}$ = 1.5 × 6.0 = 9.0 W, and in 10 s that is 90 J, all inside the cell. 9.0 is the power in watts, not the energy. 60 multiplies the current by the time, which is a charge, and 15 multiplies the EMF by the time.`,
      },
      {
        question: r`Batteries X and Y have the same EMF, but Y has half the internal resistance of X. Each is shorted by a wire of negligible resistance. How does the heating power in Y compare with that in X?`,
        options: [r`4 times as much`, r`1/2 as much`, r`1/4 as much`, r`2 times as much`],
        correctAnswer: 3,
        explanation: r`In a short, the power is ε$I_{\max}$ = ε²/r. With the same ε and half the r, Y's power is 2 times X's. "4 times" squares the factor, but r is not squared here; the fractions come from reasoning that less resistance means less heating, which ignores the larger current.`,
      },
      {
        question: r`A battery is shorted by a wire of negligible resistance. A current of 4.0 A flows, and the battery heats at a rate of 24 W. What is the battery's EMF?`,
        options: [r`6.0 V`, r`96 V`, r`1.5 V`, r`0.17 V`],
        correctAnswer: 0,
        explanation: r`All the supplied power heats the battery, so ε$I_{\max}$ = 24 W and ε = 24 W ÷ 4.0 A = 6.0 V. Multiplying 24 by 4.0 gives 96, and dividing 4.0 by 24 gives 0.17. 1.5 is 24 ÷ (4.0)², which is the internal resistance in ohms, not the EMF.`,
      },
      {
        question: r`A 12 V car battery with an internal resistance of 20 mΩ is shorted by a dropped spanner of negligible resistance. At what rate is heat produced inside the battery?`,
        options: [r`7.2 W`, r`7.2 kW`, r`0.60 kW`, r`2.9 kW`],
        correctAnswer: 1,
        explanation: r`r = 0.020 Ω, so $I_{\max}$ = 12 V ÷ 0.020 Ω = 600 A and the power is 12 V × 600 A = 7200 W = 7.2 kW. Leaving r as 20 gives 7.2 W. 0.60 kW mistakes the 600 A for the power, and 2.9 kW multiplies ε² by 20 instead of dividing by 0.020.`,
      },
    ],
  },
  [r`What voltage must a charger supply to recharge a battery at current $I$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A car battery has an EMF of 12.6 V and an internal resistance of 0.040 Ω. What voltage must a charger supply across its terminals to recharge it at 10 A?`,
        options: [r`12.2 V`, r`0.40 V`, r`12.6 V`, r`13.0 V`],
        correctAnswer: 3,
        explanation: r`V = ε + Ir = 12.6 V + (10 A × 0.040 Ω) = 12.6 + 0.40 = 13.0 V. 12.2 V uses ε − Ir, the rule for a battery that is supplying current. 0.40 V is only the drop across r, and 12.6 V would just match the EMF and push no current.`,
      },
      {
        question: r`A charger holding 8.4 V across a drone battery pushes 2.0 A into it. The battery's EMF is 7.4 V. What is the battery's internal resistance?`,
        options: [r`4.2 Ω`, r`3.7 Ω`, r`0.50 Ω`, r`2.0 Ω`],
        correctAnswer: 2,
        explanation: r`V = ε + Ir, so Ir = 8.4 − 7.4 = 1.0 V and r = 1.0 V ÷ 2.0 A = 0.50 Ω. 4.2 Ω divides the whole charger voltage by the current and 3.7 Ω divides the EMF by it. 2.0 is the inverted ratio, 2.0 ÷ 1.0.`,
      },
      {
        question: r`A charger must hold 16.0 V across a battery pack to recharge it at 8.0 A. The pack's internal resistance is 0.25 Ω. What is the pack's EMF?`,
        options: [r`14.0 V`, r`18.0 V`, r`2.0 V`, r`16.0 V`],
        correctAnswer: 0,
        explanation: r`V = ε + Ir, so ε = V − Ir = 16.0 V − (8.0 A × 0.25 Ω) = 16.0 − 2.0 = 14.0 V. 18.0 V adds the drop to the charger voltage, but the charger voltage already includes it. 2.0 V is the drop alone and 16.0 V ignores it.`,
      },
      {
        question: r`To recharge a battery at 2.0 A, a charger must supply 0.20 V more than the battery's EMF. How much more than the EMF must it supply to recharge the same battery at 5.0 A?`,
        options: [r`0.080 V`, r`0.50 V`, r`0.20 V`, r`1.25 V`],
        correctAnswer: 1,
        explanation: r`The extra voltage is Ir, which is proportional to the current: r = 0.20 V ÷ 2.0 A = 0.10 Ω, and 5.0 A × 0.10 Ω = 0.50 V. 0.080 V scales the wrong way, by 2.0/5.0, and 0.20 V treats the extra as fixed. 1.25 V scales by the square of 2.5, which applies to power, not voltage.`,
      },
      {
        question: r`A battery has an EMF of 9.0 V and an internal resistance of 1.5 Ω. A student says a charger must supply 8.4 V to recharge it at 0.40 A. What should be said about that value?`,
        options: [r`It is right at 8.4 V: subtract Ir whenever I flows`, r`It should be 9.0 V: Ir plays no part in charging`, r`It should be 9.6 V: add Ir to ε when charging`, r`It should be 0.6 V: only Ir has to be supplied`],
        correctAnswer: 2,
        explanation: r`Ir = 0.40 A × 1.5 Ω = 0.60 V, and a charger must beat the EMF and also push the current through r: V = ε + Ir = 9.6 V. The student's 8.4 V used ε − Ir, the discharging rule, and a voltage below the EMF cannot charge the battery. Exactly 9.0 V would push no current, and 0.6 V ignores the EMF.`,
      },
      {
        question: r`A charger holds 4.35 V across a phone cell whose EMF is 4.20 V and whose internal resistance is 0.30 Ω. What charging current flows?`,
        options: [r`14.5 A`, r`45 mA`, r`2.0 A`, r`500 mA`],
        correctAnswer: 3,
        explanation: r`Ir = V − ε = 4.35 − 4.20 = 0.15 V, so I = 0.15 V ÷ 0.30 Ω = 0.50 A = 500 mA. Dividing the whole 4.35 V by r gives 14.5 A, as if the EMF were not opposing the charger. 45 mA multiplies 0.15 by 0.30, and 2.0 is the inverted ratio.`,
      },
    ],
  },
  [r`What is the common trap when finding the current a real battery drives?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student finds the current from a real battery by dividing its EMF by the load resistance alone. How does that answer compare with the true current, and why?`,
        options: [r`Too small: the total resistance was set too low`, r`Too large: the total resistance was set too low`, r`Too large: the EMF was counted twice in the loop`, r`Too small: the EMF was lowered by the drop Ir`],
        correctAnswer: 1,
        explanation: r`The true current is ε/(R + r). Leaving r out makes the denominator too small, so the calculated current is too large. A resistance set too low can only raise the answer, not lower it, and nothing in the mistake changes the EMF: the error is in the resistance.`,
      },
      {
        question: r`A battery has an internal resistance of 0.50 Ω. For which load would the shortcut I = ε/R, with r left out, come closest to the true current?`,
        options: [r`A 0.050 Ω resistor`, r`A 0.50 Ω resistor`, r`A 5.0 Ω resistor`, r`A 500 Ω resistor`],
        correctAnswer: 3,
        explanation: r`The true current is ε/(R + r), so leaving r out matters least when r is tiny next to R. With 500 Ω the denominator changes by only 0.1%. With 5.0 Ω the error is about 10%, with 0.50 Ω the shortcut doubles the current, and with 0.050 Ω it is 11 times too large.`,
      },
    ],
  },
  [r`What symbol stands for Faraday's constant, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In the equation ΔG = −nFE, n is in moles and E is in volts (joules per coulomb). For ΔG to come out in joules, what must the unit of F be?`,
        options: [r`Joules per coulomb, J/C`, r`Moles per coulomb, mol/C`, r`Coulombs per mole, C/mol`, r`Coulombs per second, C/s`],
        correctAnswer: 2,
        explanation: r`F is Faraday's constant, in coulombs per mole: mol × C/mol × J/C = J. Joules per coulomb is the volt, the unit of E. Moles per coulomb inverts the unit and would not cancel the moles, and coulombs per second is the ampere, the unit of current.`,
      },
      {
        question: r`Multiplying Avogadro's number, 6.02 × 10²³ per mole, by the charge on one electron, 1.60 × 10⁻¹⁹ C, gives about 96 500 C/mol, the constant F. What does that product represent?`,
        options: [r`The charge carried by one mole of electrons`, r`The charge carried by one single electron`, r`The number of electrons in one coulomb`, r`The energy carried by one mole of electrons`],
        correctAnswer: 0,
        explanation: r`Charge per electron times electrons per mole is the charge per mole of electrons, which is what Faraday's constant F means. A single electron carries only 1.60 × 10⁻¹⁹ C. A count of electrons per coulomb would be the inverse of the electron's charge, and an energy would be in joules, not coulombs per mole.`,
      },
    ],
  },
  [r`What symbol stands for the moles of electrons transferred in a redox reaction, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a galvanic cell, X + 3Y⁺ → X³⁺ + 3Y. For one mole of this reaction, about 289 500 C passes through the wire. Taking F ≈ 96 500 C/mol, what is n in ΔG = −nFE?`,
        options: [r`n = 1 mol`, r`n = 4 mol`, r`n = 6 mol`, r`n = 3 mol`],
        correctAnswer: 3,
        explanation: r`n is the moles of electrons transferred per mole of reaction. Each X atom gives up three electrons, one to each Y⁺, and 289 500 C ÷ 96 500 C/mol = 3 mol. One mole is the count for a single Y⁺, four counts the reacting particles instead of the electrons, and six counts the three electrons twice.`,
      },
      {
        question: r`For which of these cell reactions, each taken as written, is n = 2 mol in ΔG = −nFE?`,
        options: [r`Na + Ag⁺ → Na⁺ + Ag`, r`Zn + Cu²⁺ → Zn²⁺ + Cu`, r`Al + Fe³⁺ → Al³⁺ + Fe`, r`Fe²⁺ + Ce⁴⁺ → Fe³⁺ + Ce³⁺`],
        correctAnswer: 1,
        explanation: r`n counts the moles of electrons transferred per mole of reaction. Zinc going to Zn²⁺ gives two electrons to Cu²⁺, so n = 2 mol. Sodium to Na⁺ and Fe²⁺ to Fe³⁺ each move one electron, so n = 1 mol, and aluminium to Al³⁺ moves three, so n = 3 mol.`,
      },
    ],
  },
  [r`How do cells combine in series?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A toy holds three 1.5 V cells in series, each with an internal resistance of 0.30 Ω, but one cell has been put in backward. What are the EMF and the internal resistance of the stack?`,
        options: [r`1.5 V and 0.90 Ω`, r`1.5 V and 0.30 Ω`, r`4.5 V and 0.90 Ω`, r`3.0 V and 0.60 Ω`],
        correctAnswer: 0,
        explanation: r`The backward cell subtracts its EMF: 1.5 + 1.5 − 1.5 = 1.5 V. Its internal resistance still adds: 3 × 0.30 = 0.90 Ω. Subtracting the resistance as well gives 0.30 Ω, 4.5 V ignores the reversal, and 3.0 V with 0.60 Ω treats the backward cell as if it were simply missing.`,
      },
      {
        question: r`A radio needs a stack with an EMF of 9.0 V. The cells available are 1.5 V each, with an internal resistance of 0.25 Ω each. How many cells are needed in series, and what is the stack's internal resistance?`,
        options: [r`6 cells and 0.25 Ω`, r`6 cells and 0.042 Ω`, r`6 cells and 1.5 Ω`, r`9 cells and 1.5 Ω`],
        correctAnswer: 2,
        explanation: r`EMFs add in series, so 9.0 V ÷ 1.5 V = 6 cells, and the internal resistances add too: 6 × 0.25 = 1.5 Ω. Keeping 0.25 Ω forgets that the resistances add, and 0.042 Ω divides by 6 as if the cells were in parallel. Nine cells would give 13.5 V.`,
      },
      {
        question: r`Two 6.0 V batteries, each with an internal resistance of 0.50 Ω, are connected in series, facing the same way, to a 3.0 Ω heater. What current flows?`,
        options: [r`4.0 A`, r`1.5 A`, r`3.4 A`, r`3.0 A`],
        correctAnswer: 3,
        explanation: r`The EMFs add to 12 V and the internal resistances add to 1.0 Ω, so I = 12 V ÷ (3.0 + 1.0) Ω = 3.0 A. 4.0 A leaves the internal resistance out, and 3.4 A counts only one battery's 0.50 Ω. 1.5 A adds the resistances but uses only one battery's EMF.`,
      },
      {
        question: r`A 9.0 V battery (internal resistance 1.0 Ω) is in series with a 1.5 V cell (internal resistance 0.50 Ω), but the cell is connected backward. What are the EMF and internal resistance of the combination?`,
        options: [r`10.5 V and 1.5 Ω`, r`7.5 V and 1.5 Ω`, r`7.5 V and 0.50 Ω`, r`10.5 V and 0.50 Ω`],
        correctAnswer: 1,
        explanation: r`The backward cell subtracts its EMF, 9.0 − 1.5 = 7.5 V, but its internal resistance still adds, 1.0 + 0.50 = 1.5 Ω. 10.5 V adds the EMFs as if both faced the same way. 0.50 Ω subtracts the resistances, and resistance never subtracts whichever way a cell faces.`,
      },
      {
        question: r`A lantern that ran on 2 identical cells in series is redesigned to run on 6 of the same cells in series, all facing the same way. How do the stack's EMF and internal resistance change?`,
        options: [r`The EMF triples and r falls to 1/3`, r`The EMF triples and r is unchanged`, r`Both the EMF and r become 3 times`, r`The EMF is unchanged and r triples`],
        correctAnswer: 2,
        explanation: r`In series both the EMFs and the internal resistances add, so going from 2 cells to 6 multiplies each by 6/2 = 3. An r that falls to 1/3 is what parallel cells would do, and an unchanged r forgets that every cell brings its own internal resistance. The EMF cannot stay the same when more cells are stacked the same way.`,
      },
      {
        question: r`Eight 1.5 V cells, each with an internal resistance of 150 mΩ, are stacked in series, all facing the same way. What are the EMF and internal resistance of the stack?`,
        options: [r`12 V and 1.2 Ω`, r`12 V and 0.019 Ω`, r`1.5 V and 1.2 Ω`, r`1.5 V and 0.019 Ω`],
        correctAnswer: 0,
        explanation: r`EMFs add: 8 × 1.5 V = 12 V. Internal resistances add: 8 × 0.150 Ω = 1.2 Ω. Dividing 0.150 Ω by 8 gives 0.019 Ω, the result for cells in parallel, and an EMF of 1.5 V is also the parallel result. Series cells add both quantities.`,
      },
    ],
  },
  [r`How do identical cells combine in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Three identical cells are wired in parallel, all + ends joined and all − ends joined. The pack measures 1.2 V on open circuit and has 0.30 Ω of internal resistance. What are the EMF and internal resistance of one cell alone?`,
        options: [r`0.40 V and 0.90 Ω`, r`1.2 V and 0.90 Ω`, r`1.2 V and 0.10 Ω`, r`0.40 V and 0.10 Ω`],
        correctAnswer: 1,
        explanation: r`A parallel pack of identical cells keeps one cell's EMF, so each cell is 1.2 V, and the pack's resistance is r/3, so r = 3 × 0.30 Ω = 0.90 Ω. Dividing the EMF by 3 treats the pack as a series stack, and 0.10 Ω divides the resistance by 3 when it should be multiplied.`,
      },
      {
        question: r`Two identical batteries, each with an EMF of 6.0 V and an internal resistance of 2.0 Ω, are joined in parallel (+ to +, − to −) and connected to a 5.0 Ω load. What is the pack's terminal voltage?`,
        options: [r`6.0 V`, r`4.3 V`, r`6.7 V`, r`5.0 V`],
        correctAnswer: 3,
        explanation: r`The pack has an EMF of 6.0 V and an internal resistance of 2.0 Ω ÷ 2 = 1.0 Ω. I = 6.0 V ÷ (5.0 + 1.0) Ω = 1.0 A, so the terminal voltage is 1.0 A × 5.0 Ω = 5.0 V. 6.0 V ignores the internal drop, 4.3 V is what one battery alone would give, and 6.7 V treats the pair as a series stack.`,
      },
      {
        question: r`Two identical cells, each with an EMF of 1.5 V and an internal resistance of 0.50 Ω, are joined in parallel (+ to +, − to −) and connected to a 2.75 Ω lamp. What current flows through each cell?`,
        options: [r`0.50 A`, r`1.0 A`, r`0.25 A`, r`0.46 A`],
        correctAnswer: 2,
        explanation: r`The pack's EMF is 1.5 V and its internal resistance is 0.50 Ω ÷ 2 = 0.25 Ω, so the lamp current is 1.5 V ÷ (2.75 + 0.25) Ω = 0.50 A. The identical cells share it equally, 0.25 A each. 0.50 A is the lamp's current, 1.0 A doubles it instead of halving it, and 0.46 A uses one cell's full 0.50 Ω.`,
      },
      {
        question: r`One cell's terminal voltage sits 0.40 V below its EMF while it supplies 2.0 A. A second identical cell is joined in parallel with it, and the pair supplies 2.0 A in total. How far below the EMF is the pair's terminal voltage?`,
        options: [r`0.20 V`, r`0.80 V`, r`0.40 V`, r`0.10 V`],
        correctAnswer: 0,
        explanation: r`One cell has r = 0.40 V ÷ 2.0 A = 0.20 Ω. Two in parallel have r/2 = 0.10 Ω, so the sag is 2.0 A × 0.10 Ω = 0.20 V, half as much. 0.80 V doubles the sag, as series cells would, and 0.40 V treats the pack's r as unchanged. 0.10 V halves the sag twice.`,
      },
      {
        question: r`A pack made of identical cells has an EMF of 3.7 V and an internal resistance of 0.030 Ω. Each cell alone has an EMF of 3.7 V and an internal resistance of 0.12 Ω. How is the pack built?`,
        options: [r`2 cells, connected in parallel`, r`4 cells, connected in series`, r`2 cells, connected in series`, r`4 cells, connected in parallel`],
        correctAnswer: 3,
        explanation: r`The pack's EMF equals one cell's, so the cells are in parallel, and N cells in parallel have a resistance of r/N: 0.12 Ω ÷ 0.030 Ω = 4 cells. Two cells in parallel would give 0.060 Ω. Any series stack would have a larger EMF than 3.7 V and a larger internal resistance than 0.12 Ω.`,
      },
      {
        question: r`Two identical 1.5 V cells, each with an internal resistance of 300 mΩ, are joined in parallel (+ to +, − to −). A wire of negligible resistance then shorts the pack. What current flows through the wire?`,
        options: [r`5.0 A`, r`10 A`, r`2.5 A`, r`20 A`],
        correctAnswer: 1,
        explanation: r`The pack's EMF is 1.5 V and its internal resistance is 0.300 Ω ÷ 2 = 0.15 Ω, so the short-circuit current is 1.5 V ÷ 0.15 Ω = 10 A. 5.0 A is what one cell alone would deliver. 2.5 A adds the two resistances as in series, and 20 A doubles the EMF as well as halving the resistance.`,
      },
    ],
  },
  [r`What does a milliamp-hour (mAh) rating measure, and how do you convert it?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A phone with a 3000 mAh battery goes from 100% to 50% during a video call. How many coulombs of charge did the battery move around the circuit during the call?`,
        options: [r`1500 C`, r`417 C`, r`5400 C`, r`10 800 C`],
        correctAnswer: 2,
        explanation: r`Half the rating is 1500 mAh, and 1 mAh = 3.6 C, so 1500 × 3.6 = 5400 C. Leaving the number at 1500 skips the conversion, and 417 divides by 3.6 instead of multiplying. 10 800 C is the full 3000 mAh, not the half that was used.`,
      },
      {
        question: r`A fitness tracker's battery is rated 1200 mAh. The tracker draws a steady 300 mA. For how long can the battery run it?`,
        options: [r`4.0 h`, r`0.25 h`, r`14 h`, r`40 h`],
        correctAnswer: 0,
        explanation: r`The rating is a charge, Q = It, so t = Q/I = 1200 mAh ÷ 300 mA = 4.0 h. Dividing the other way gives 0.25 h. 14 h multiplies the 4.0 h by 3.6, a factor that belongs only in a conversion to coulombs, and 40 h slips a power of ten.`,
      },
      {
        question: r`A rechargeable cell can deliver 7200 C before it is exhausted. What is its rating in milliamp-hours?`,
        options: [r`26 000 mAh`, r`2000 mAh`, r`7200 mAh`, r`120 mAh`],
        correctAnswer: 1,
        explanation: r`1 mAh = 3.6 C, so going from coulombs to mAh divides by 3.6: 7200 ÷ 3.6 = 2000 mAh. Multiplying by 3.6 gives about 26 000, which converts the wrong way. 7200 skips the conversion, and 120 divides by 60 instead of 3.6.`,
      },
      {
        question: r`A camera battery is rated 500 mAh at 4.0 V. About how much energy does it store?`,
        options: [r`2000 J`, r`1800 J`, r`450 J`, r`7200 J`],
        correctAnswer: 3,
        explanation: r`Q = 500 mAh × 3.6 C/mAh = 1800 C, and the energy is about QV = 1800 C × 4.0 V = 7200 J. Multiplying 500 by 4.0 without converting to coulombs gives 2000. 1800 is the charge in coulombs, not an energy, and 450 divides the charge by the voltage.`,
      },
      {
        question: r`A sensor node must run for 8.0 h on a battery rated 2400 mAh. What is the largest steady current it can draw?`,
        options: [r`300 mA`, r`1080 mA`, r`83 mA`, r`19 200 mA`],
        correctAnswer: 0,
        explanation: r`Q = It, so I = Q/t = 2400 mAh ÷ 8.0 h = 300 mA. Multiplying or dividing that by 3.6 gives 1080 mA or 83 mA, but no conversion to coulombs is needed when the time is already in hours. 19 200 multiplies 2400 by 8.0 instead of dividing.`,
      },
      {
        question: r`A tablet battery is rated 4000 mAh. The tablet draws a steady 2.0 A for 30 minutes. What fraction of the battery's rated charge has been used?`,
        options: [r`1/2 of its rated charge`, r`9/10 of its rated charge`, r`1/4 of its rated charge`, r`1/8 of its rated charge`],
        correctAnswer: 2,
        explanation: r`Q = It = 2000 mA × 0.50 h = 1000 mAh, and 1000 ÷ 4000 = 1/4. Forgetting that 30 minutes is half an hour gives 2000 mAh, or 1/2. 9/10 compares 2.0 A × 1800 s = 3600 C directly with 4000, as if a mAh were a coulomb, and 1/8 halves the correct answer once more.`,
      },
    ],
  },
}
