import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What is one electron-volt?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A proton falls through a potential difference of 20 V inside an ion source. How many joules of energy does it gain? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.2 × 10⁻¹⁸ J`, r`8.0 × 10⁻²¹ J`, r`3.2 × 10⁻²⁰ J`, r`1.6 × 10⁻¹⁹ J`],
        correctAnswer: 0,
        explanation: r`One elementary charge gains 1.6 × 10⁻¹⁹ J for each volt it crosses, so 20 V gives 20 × 1.6 × 10⁻¹⁹ = 3.2 × 10⁻¹⁸ J. Dividing by 20 instead gives 8.0 × 10⁻²¹ J, 3.2 × 10⁻²⁰ J is a power-of-ten slip, and 1.6 × 10⁻¹⁹ J is the energy for only 1 V.`,
      },
      {
        question: r`An electron in an X-ray tube gains 4.8 × 10⁻¹⁶ J between the cathode and the anode. Through what potential difference has it moved? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.0 × 10² V`, r`3.3 × 10⁻⁴ V`, r`3.0 × 10³ V`, r`7.7 × 10⁻³⁵ V`],
        correctAnswer: 2,
        explanation: r`Each volt gives one elementary charge 1.6 × 10⁻¹⁹ J, so V = (4.8 × 10⁻¹⁶) ÷ (1.6 × 10⁻¹⁹) = 3.0 × 10³ V. The answer 3.0 × 10² V drops a power of ten, 3.3 × 10⁻⁴ V divides the wrong way round, and 7.7 × 10⁻³⁵ V multiplies the two numbers.`,
      },
      {
        question: r`A particle carrying one elementary charge gains 6.4 × 10⁻¹⁹ J as it crosses the gap between two electrodes. What is this energy in electron-volts? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`0.25 eV`, r`4.0 eV`, r`10.2 eV`, r`6.4 eV`],
        correctAnswer: 1,
        explanation: r`One electron-volt is 1.6 × 10⁻¹⁹ J, so the energy is (6.4 × 10⁻¹⁹) ÷ (1.6 × 10⁻¹⁹) = 4.0 eV. Inverting the division gives 0.25 eV, multiplying 6.4 by 1.6 gives 10.2 eV, and 6.4 eV just copies the number in front of the power of ten.`,
      },
      {
        question: r`Each electron that passes through a 1.5 V penlight cell is given energy by the cell. How much energy does one electron receive, in joules? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.1 × 10⁻¹⁹ J`, r`1.5 × 10⁻¹⁹ J`, r`2.4 × 10⁻¹⁸ J`, r`2.4 × 10⁻¹⁹ J`],
        correctAnswer: 3,
        explanation: r`One elementary charge crossing 1.5 V gains 1.5 eV, which is 1.5 × 1.6 × 10⁻¹⁹ = 2.4 × 10⁻¹⁹ J. Dividing 1.6 by 1.5 gives 1.1 × 10⁻¹⁹ J, 1.5 × 10⁻¹⁹ J leaves out the factor 1.6, and 2.4 × 10⁻¹⁸ J is a power-of-ten slip.`,
      },
      {
        question: r`In a detector, 1.0 × 10⁶ electrons each cross a gap whose potential difference is 1.0 V. What total energy do they gain, in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`1.6 × 10⁻²⁵ J`, r`1.6 × 10⁻¹⁹ J`, r`1.6 × 10⁻¹³ J`, r`1.0 × 10⁻¹³ J`],
        correctAnswer: 2,
        explanation: r`Each electron gains 1 eV = 1.6 × 10⁻¹⁹ J, so 1.0 × 10⁶ of them gain 1.6 × 10⁻¹⁹ × 10⁶ = 1.6 × 10⁻¹³ J. Dividing by 10⁶ gives 1.6 × 10⁻²⁵ J, 1.6 × 10⁻¹⁹ J is the energy of a single electron, and 1.0 × 10⁻¹³ J loses the factor 1.6.`,
      },
      {
        question: r`A K⁺ ion crosses a membrane across which the potential difference is 100 mV. By how many joules does its potential energy change? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.6 × 10⁻¹⁷ J`, r`1.6 × 10⁻²⁰ J`, r`1.6 × 10⁻¹⁸ J`, r`1.6 × 10⁻²¹ J`],
        correctAnswer: 1,
        explanation: r`Convert first: 100 mV = 0.10 V. One elementary charge crossing 0.10 V changes its energy by 0.10 eV = 0.10 × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻²⁰ J. Using 100 as if it were volts gives 1.6 × 10⁻¹⁷ J, and the other two values place the decimal point one step too high or too low.`,
      },
    ],
  },
  [r`What is "ground" in a circuit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A circuit diagram labels one point X as "at 6 V". What does that label mean?`,
        options: [r`X has 6 V of charge stored at that point`, r`X is 6 V below the battery's positive end`, r`X pushes 6 V of current toward the ground`, r`X is 6 V above the point chosen as ground`],
        correctAnswer: 3,
        explanation: r`A potential quoted for a single point is always a difference measured from the point declared 0 V, the ground. Voltage is not a stored charge or a current, and the label says nothing about how far X sits below the battery's positive end.`,
      },
      {
        question: r`Two students analyse the same circuit. One calls the battery's negative terminal ground; the other calls a point in the middle of the circuit ground. Each then works out the current in the same 10 Ω resistor. How do their answers compare?`,
        options: [r`Different currents, since every potential has been shifted`, r`Same current, but only if ground is at a battery terminal`, r`Same current, since the voltage across the resistor is unchanged`, r`Zero current for the student who grounds the middle point`],
        correctAnswer: 2,
        explanation: r`Moving the ground adds the same amount to every potential, so the difference across the resistor, and with it the current V/R, is unchanged. The shift does not alter any current, the ground may be placed at any point, and choosing a ground in the middle does not stop the current.`,
      },
    ],
  },
  [r`How much voltage drops along an ideal wire?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 V ideal battery drives a 4 Ω and an 8 Ω resistor in series through ideal wires. A voltmeter has both of its leads clipped to the same stretch of wire between the two resistors, 30 cm apart. What does it read?`,
        options: [r`0 V`, r`4 V`, r`8 V`, r`12 V`],
        correctAnswer: 0,
        explanation: r`An ideal wire is at a single potential along its whole length, so two points on the same stretch of wire have no voltage between them and the meter reads 0 V. The readings 4 V and 8 V are the drops across the two resistors, and 12 V is the drop across the pair.`,
      },
      {
        question: r`A 6.0 V ideal battery and two resistors form one loop joined by ideal wires. A voltmeter reads 2.5 V across the first resistor. What is the voltage across the second resistor, and why?`,
        options: [r`Under 3.5 V, because the wires take part of the 6.0 V`, r`3.5 V, because the wires take none of the 6.0 V`, r`6.0 V, because each element gets the full supply`, r`2.5 V, because one current gives equal voltage drops`],
        correctAnswer: 1,
        explanation: r`Ideal wires have no drop, so the whole 6.0 V is shared by the two resistors and the second takes 6.0 − 2.5 = 3.5 V. Giving the wires a share is the error being tested, a series element does not get the full supply, and equal current gives equal drops only for equal resistances.`,
      },
    ],
  },
  [r`Does a bulb use up current?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two identical bulbs are wired in series with a battery. A student predicts that the second bulb will be dimmer because the first "uses some of the current", but the two glow equally. Which account is correct?`,
        options: [r`The first takes most of the current; the second gets the rest`, r`Both carry the same voltage; each takes part of the current`, r`The second gets less current but more of the voltage instead`, r`Both carry the same current; each takes part of the voltage`],
        correctAnswer: 3,
        explanation: r`Current is not consumed: the charge that enters a bulb each second leaves it each second, so both bulbs carry the same current. What each bulb takes is energy per charge, a share of the battery voltage. The other accounts all have current being used up or divided along a single path.`,
      },
      {
        question: r`In one minute, 30 C of charge flows into a glowing bulb. How much charge flows out of the bulb in that minute, and what has that charge lost on the way through?`,
        options: [r`Under 30 C flows out; it has lost charge`, r`30 C flows out; it has lost energy`, r`30 C flows out; it has lost nothing`, r`No charge flows out; it became light`],
        correctAnswer: 1,
        explanation: r`The same current leaves a bulb as enters it, so 30 C flows out. Each coulomb leaves with less energy, which is the voltage drop across the bulb. Charge is not destroyed or turned into light, and saying nothing is lost ignores the energy the bulb gives off.`,
      },
    ],
  },
  [r`A switch opens in a single loop. What is the current, and what is the voltage across the gap?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 9 V ideal battery, a bulb and a switch form one loop. A voltmeter across the bulb reads 0 V, and a voltmeter across the switch reads 9 V. What is the state of the circuit?`,
        options: [r`The switch is closed, so full current flows`, r`The bulb is shorted, so extra current flows`, r`The battery is flat, so no current flows`, r`The switch is open, so no current flows`],
        correctAnswer: 3,
        explanation: r`With the switch open the current is zero, so the bulb has no drop and the whole 9 V appears across the gap. A closed switch would read 0 V with 9 V across the bulb, a shorted bulb with a closed switch would also leave 0 V across the switch, and a flat battery could not give 9 V anywhere.`,
      },
      {
        question: r`A 12 V ideal battery, a 6 Ω lamp and an open switch are connected in one loop. Which line of working for the lamp is correct?`,
        options: [r`I = 12/6 = 2 A, so the lamp's drop is 12 V`, r`I = 0, so the lamp's drop is IR = 0 V`, r`I = 0, so the lamp's drop is the full 12 V`, r`I = 1 A, so the lamp's drop is IR = 6 V`],
        correctAnswer: 1,
        explanation: r`An open switch breaks the only path, so the current is zero everywhere and the lamp's drop IR is zero; the full 12 V sits across the open switch instead. The line with 2 A treats the switch as closed, the line with 1 A splits the voltage with the switch, and zero current cannot put 12 V across a 6 Ω lamp.`,
      },
    ],
  },
  [r`In the water analogy, what stands for the battery, the voltage, the current and a resistor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`The battery in a circuit is replaced by one with twice the voltage. What is the matching change in the water model of the circuit?`,
        options: [r`A wider pipe that doubles the rate of water flow`, r`A stronger pump that doubles the pressure difference`, r`A longer pipe that doubles the amount of water`, r`A narrower pipe that doubles the pressure difference`],
        correctAnswer: 1,
        explanation: r`The battery is the pump and voltage is the pressure difference it creates, so doubling the voltage is a pump that makes twice the pressure difference. Changing the width of a pipe stands for changing a resistance, and the amount of water in the pipes is not what voltage measures.`,
      },
      {
        question: r`In a water model of a circuit, a meter reports the liters of water passing one point of the pipe each second. Which electrical instrument and reading does this stand for?`,
        options: [r`A voltmeter, reading joules per coulomb`, r`An ammeter, reading joules per second`, r`A voltmeter, reading coulombs per second`, r`An ammeter, reading coulombs per second`],
        correctAnswer: 3,
        explanation: r`Flow rate stands for current, the charge passing a point each second, and current is read by an ammeter in coulombs per second. A voltmeter reads the pressure-like quantity, joules per coulomb, and joules per second is power rather than current.`,
      },
    ],
  },
  [r`How do you find the energy a battery delivers in a time $\Delta t$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A phone's 4.0 V battery supplies a steady 0.50 A for 10 minutes during a call. How much energy does the battery deliver?`,
        options: [r`20 J`, r`1200 J`, r`2.0 J`, r`300 J`],
        correctAnswer: 1,
        explanation: r`Charge first: ΔQ = IΔt = 0.50 A × 600 s = 300 C. Then W = qV = 300 C × 4.0 V = 1200 J. Leaving the time in minutes gives 20 J, 2.0 is only the product of current and voltage, and 300 is the charge in coulombs, not the energy.`,
      },
      {
        question: r`A 6.0 V battery pack sends a steady 0.50 A through a toy motor. How long does it take the pack to deliver 600 J?`,
        options: [r`200 s`, r`50 s`, r`100 s`, r`1800 s`],
        correctAnswer: 0,
        explanation: r`The charge needed is q = W/V = 600 J ÷ 6.0 V = 100 C, and at 0.50 A that takes Δt = 100 C ÷ 0.50 A = 200 s. Stopping at 100 treats the charge as the time, 50 s multiplies by the current instead of dividing, and 1800 s multiplies the energy by the 3.0 W power instead of dividing.`,
      },
      {
        question: r`A hearing aid's 1.5 V cell delivers 54 J over 1.0 hour at a steady current. What is that current?`,
        options: [r`0.60 A`, r`36 A`, r`0.015 A`, r`0.010 A`],
        correctAnswer: 3,
        explanation: r`The charge that flows is q = W/V = 54 J ÷ 1.5 V = 36 C, and 1.0 hour is 3600 s, so I = 36 C ÷ 3600 s = 0.010 A. Using 60 s for the hour gives 0.60 A, 36 is the charge and not the current, and 0.015 A divides the energy by the time without using the voltage.`,
      },
      {
        question: r`A small pump motor draws a steady 0.10 A for 30 s and receives 9.0 J from its battery in that time. What is the battery voltage?`,
        options: [r`27 V`, r`0.33 V`, r`3.0 V`, r`90 V`],
        correctAnswer: 2,
        explanation: r`The charge that flows is ΔQ = IΔt = 0.10 A × 30 s = 3.0 C, so V = W/q = 9.0 J ÷ 3.0 C = 3.0 V. Multiplying the energy by the charge gives 27 V, inverting the division gives 0.33 V, and 90 V divides the energy by the current alone, ignoring the time.`,
      },
      {
        question: r`A 3.0 V coin cell drives a steady 2.0 mA through a watch circuit for 500 s. How much energy does the cell deliver in that time?`,
        options: [r`3000 J`, r`1.0 J`, r`0.0060 J`, r`3.0 J`],
        correctAnswer: 3,
        explanation: r`ΔQ = IΔt = 0.0020 A × 500 s = 1.0 C, and W = qV = 1.0 C × 3.0 V = 3.0 J. Leaving the current as 2.0 A gives 3000 J, 1.0 is the charge in coulombs, and 0.0060 is current times voltage with no time included.`,
      },
      {
        question: r`A 9.0 V battery delivers 40 J to a buzzer in a certain time. Connected to a second buzzer, the same battery supplies three times the current for half as long. How much energy does it deliver to the second buzzer?`,
        options: [r`120 J`, r`240 J`, r`60 J`, r`27 J`],
        correctAnswer: 2,
        explanation: r`Energy is W = qV with q = IΔt. Three times the current for half the time moves 3 × ½ = 1.5 times the charge through the same 9.0 V, so W = 1.5 × 40 J = 60 J. Ignoring the shorter time gives 120 J, doubling instead of halving gives 240 J, and 27 J divides by 1.5.`,
      },
    ],
  },
  [r`What does $IV$ give: energy or power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lamp carries 0.50 A when 6.0 V is across it. What does multiplying these two readings give?`,
        options: [r`3.0 W`, r`3.0 J`, r`12 W`, r`12 J`],
        correctAnswer: 0,
        explanation: r`P = IV = 0.50 A × 6.0 V = 3.0 W: current times voltage is a power, in watts. Calling it 3.0 J confuses power with energy, which would also need a time, and the two answers with 12 come from dividing the voltage by the current.`,
      },
      {
        question: r`A soldering iron is rated at 60 W when connected to a 120 V supply. What current does it draw?`,
        options: [r`2.0 A`, r`0.50 A`, r`7200 A`, r`180 A`],
        correctAnswer: 1,
        explanation: r`From P = IV, I = P/V = 60 W ÷ 120 V = 0.50 A. Dividing the voltage by the power gives 2.0 A, multiplying the two gives 7200 A, and adding them gives 180 A.`,
      },
      {
        question: r`A 5.0 V charging port supplies 2.0 A to a tablet. How much energy passes to the tablet in 1.0 minute?`,
        options: [r`10 J`, r`150 J`, r`0.17 J`, r`600 J`],
        correctAnswer: 3,
        explanation: r`The power is P = IV = 2.0 A × 5.0 V = 10 W, and energy is PΔt = 10 W × 60 s = 600 J. Stopping at 10 gives the power, not the energy, 150 J uses V/I in place of IV, and 0.17 J divides the power by the time.`,
      },
      {
        question: r`A nerve stimulator delivers 0.20 W to tissue while passing a current of 4.0 mA. What voltage is across the tissue?`,
        options: [r`0.050 V`, r`0.80 V`, r`20 V`, r`50 V`],
        correctAnswer: 3,
        explanation: r`From P = IV, V = P/I = 0.20 W ÷ 0.0040 A = 50 V. Leaving the current as 4.0 gives 0.050 V, multiplying 0.20 by 4.0 gives 0.80 V, and 20 V divides 4.0 by 0.20.`,
      },
      {
        question: r`A 9.0 V battery drives 2.0 A through a motor. How long does the motor take to receive 900 J?`,
        options: [r`200 s`, r`100 s`, r`50 s`, r`16 200 s`],
        correctAnswer: 2,
        explanation: r`The power is P = IV = 2.0 A × 9.0 V = 18 W, so Δt = energy ÷ P = 900 J ÷ 18 W = 50 s. Using V/I = 4.5 in place of the power gives 200 s, dividing by the voltage alone gives 100 s, and 16 200 s multiplies the energy by the power.`,
      },
      {
        question: r`An electrolysis cell runs at 2.0 V and 1.5 A. The supply is then raised to 4.0 V, and the cell now passes 4.5 A. By what factor has the power delivered to the cell risen?`,
        options: [r`6 times`, r`5 times`, r`1.5 times`, r`36 times`],
        correctAnswer: 0,
        explanation: r`P = IV goes from 1.5 A × 2.0 V = 3.0 W to 4.5 A × 4.0 V = 18 W, a factor of 6. The voltage doubled and the current tripled, and these factors multiply: adding them gives 5, dividing them gives 1.5, and squaring the 6 gives 36.`,
      },
    ],
  },
  [r`How much energy does one elementary charge carry across $V$ volts, in electron-volts?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An electron passes through a 1.5 V cell. How much energy does the cell give it, in electron-volts?`,
        options: [r`1.5 eV`, r`2.4 eV`, r`0.94 eV`, r`3.0 eV`],
        correctAnswer: 0,
        explanation: r`One elementary charge crossing V volts carries V electron-volts, so 1.5 V gives 1.5 eV with no arithmetic. Multiplying by 1.6 gives 2.4, which is the number in front of 10⁻¹⁹ J, dividing by 1.6 gives 0.94, and 3.0 eV would need a charge of 2e.`,
      },
      {
        question: r`An alpha particle (charge +2e) is accelerated through a potential difference of 500 V. How much energy does it gain?`,
        options: [r`1000 eV`, r`250 eV`, r`500 eV`, r`2000 eV`],
        correctAnswer: 0,
        explanation: r`Energy in eV is the number of elementary charges times the volts: 2 × 500 = 1000 eV. The answer 500 eV treats the particle as singly charged, 250 eV divides by the charge, and 2000 eV multiplies by the mass number 4 instead of the charge 2.`,
      },
      {
        question: r`An Al³⁺ ion gains 45 eV as it is accelerated in an ion source. Through what potential difference has it moved?`,
        options: [r`135 V`, r`45 V`, r`15 V`, r`7.5 V`],
        correctAnswer: 2,
        explanation: r`An ion of charge 3e gains 3 eV for every volt, so V = 45 eV ÷ 3 = 15 V. Multiplying by 3 gives 135 V, 45 V would be right only for a single elementary charge, and 7.5 V divides by 6 instead of 3.`,
      },
      {
        question: r`An ion falls through a potential difference of 12 V and gains 36 eV. What is the size of the ion's charge?`,
        options: [r`A charge of 1e`, r`A charge of 2e`, r`A charge of 3e`, r`A charge of 4e`],
        correctAnswer: 2,
        explanation: r`Energy in eV equals the number of elementary charges times the volts, so the charge number is 36 ÷ 12 = 3. A charge of e would gain only 12 eV, a charge of 2e would gain 24 eV, and a charge of 4e would gain 48 eV.`,
      },
      {
        question: r`A Zn²⁺ ion crosses a membrane across which the potential difference is 90 mV. What is the size of its change in potential energy?`,
        options: [r`0.090 eV`, r`0.18 eV`, r`0.045 eV`, r`180 eV`],
        correctAnswer: 1,
        explanation: r`Convert 90 mV to 0.090 V; a doubly charged ion carries 2V electron-volts, so 2 × 0.090 = 0.18 eV. The answer 0.090 eV forgets the double charge, 0.045 eV divides by 2, and 180 eV leaves the potential in millivolts.`,
      },
      {
        question: r`A proton and an alpha particle (charge +2e) each fall through the same 200 V. How much energy does each one gain?`,
        options: [r`200 eV and 200 eV`, r`200 eV and 800 eV`, r`400 eV and 200 eV`, r`200 eV and 400 eV`],
        correctAnswer: 3,
        explanation: r`The proton has one elementary charge and gains 200 eV; the alpha particle has two and gains 2 × 200 = 400 eV. Equal energies ignore the charge, 800 eV uses the alpha's mass number of 4, and the last pair swaps the two particles.`,
      },
    ],
  },
  [r`How do you convert electron-volts to joules?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A photon of blue light has an energy of 3.0 eV. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`4.8 × 10⁻¹⁹ J`, r`1.9 × 10¹⁹ J`, r`5.3 × 10⁻²⁰ J`, r`4.8 × 10⁻¹⁸ J`],
        correctAnswer: 0,
        explanation: r`Multiply by 1.6 × 10⁻¹⁹ J/eV: 3.0 × 1.6 × 10⁻¹⁹ = 4.8 × 10⁻¹⁹ J. Dividing 3.0 by the factor gives 1.9 × 10¹⁹ J, dividing the factor by 3.0 gives 5.3 × 10⁻²⁰ J, and 4.8 × 10⁻¹⁸ J is a power-of-ten slip.`,
      },
      {
        question: r`An electron reaches a detector with a kinetic energy of 3.2 × 10⁻¹⁸ J. What is this energy in electron-volts? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`0.050 eV`, r`20 eV`, r`2.0 eV`, r`5.1 × 10⁻³⁷ eV`],
        correctAnswer: 1,
        explanation: r`Going from joules back to eV divides by the factor: (3.2 × 10⁻¹⁸) ÷ (1.6 × 10⁻¹⁹) = 20 eV. Inverting the division gives 0.050 eV, 2.0 eV loses a power of ten, and 5.1 × 10⁻³⁷ multiplies when it should divide.`,
      },
      {
        question: r`A diagnostic X-ray photon has an energy of 50 keV. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`8.0 × 10⁻¹⁵ J`, r`8.0 × 10⁻¹⁸ J`, r`8.0 × 10⁻¹² J`, r`3.1 × 10²³ J`],
        correctAnswer: 0,
        explanation: r`50 keV = 5.0 × 10⁴ eV, and 5.0 × 10⁴ × 1.6 × 10⁻¹⁹ = 8.0 × 10⁻¹⁵ J. Dropping the kilo prefix gives 8.0 × 10⁻¹⁸ J, reading keV as MeV gives 8.0 × 10⁻¹² J, and 3.1 × 10²³ J divides by the factor.`,
      },
      {
        question: r`It takes about 10 eV to remove an electron from a certain molecule. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`1.6 × 10⁻²⁰ J`, r`6.3 × 10¹⁹ J`, r`1.6 × 10⁻¹⁸ J`, r`1.6 × 10⁻¹⁹ J`],
        correctAnswer: 2,
        explanation: r`10 eV × 1.6 × 10⁻¹⁹ J/eV = 1.6 × 10⁻¹⁸ J. Moving the decimal the wrong way gives 1.6 × 10⁻²⁰ J, dividing 10 by the factor gives 6.3 × 10¹⁹ J, and 1.6 × 10⁻¹⁹ J is the energy of only 1 eV.`,
      },
      {
        question: r`A gamma photon used in imaging carries 2.0 MeV. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`3.2 × 10⁻¹⁶ J`, r`3.2 × 10⁻¹⁹ J`, r`1.3 × 10²⁵ J`, r`3.2 × 10⁻¹³ J`],
        correctAnswer: 3,
        explanation: r`2.0 MeV = 2.0 × 10⁶ eV, and 2.0 × 10⁶ × 1.6 × 10⁻¹⁹ = 3.2 × 10⁻¹³ J. Reading the prefix as kilo gives 3.2 × 10⁻¹⁶ J, ignoring it gives 3.2 × 10⁻¹⁹ J, and 1.3 × 10²⁵ J divides by the factor.`,
      },
      {
        question: r`At body temperature, the typical thermal energy of a molecule is about 0.025 eV. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`4.0 × 10⁻²⁰ J`, r`4.0 × 10⁻²¹ J`, r`6.4 × 10⁻¹⁸ J`, r`1.6 × 10¹⁷ J`],
        correctAnswer: 1,
        explanation: r`0.025 × 1.6 × 10⁻¹⁹ = 0.040 × 10⁻¹⁹ = 4.0 × 10⁻²¹ J. The value 4.0 × 10⁻²⁰ J misplaces the decimal point, 6.4 × 10⁻¹⁸ J divides the factor by 0.025, and 1.6 × 10¹⁷ J divides 0.025 by the factor.`,
      },
    ],
  },
  [r`In $\Delta U = q\,\Delta V$, how are the signs set?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A proton moves from a plate at +8 V to a plate at +2 V. What is the change in its potential energy, ΔU?`,
        options: [r`+6 eV`, r`−10 eV`, r`−6 eV`, r`+10 eV`],
        correctAnswer: 2,
        explanation: r`ΔV = V_final − V_initial = 2 − 8 = −6 V, and q = +e, so ΔU = qΔV = −6 eV: the proton loses potential energy. Taking initial minus final gives +6 eV, and the answers with 10 add the two potentials instead of subtracting them.`,
      },
      {
        question: r`An electron travels from a cathode at 0 V to an anode at +100 V. What is the change in its potential energy, ΔU, in joules? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`+1.6 × 10⁻¹⁷ J`, r`−1.6 × 10⁻¹⁷ J`, r`−1.6 × 10⁻²¹ J`, r`+1.6 × 10⁻²¹ J`],
        correctAnswer: 1,
        explanation: r`ΔV = 100 − 0 = +100 V and q = −1.6 × 10⁻¹⁹ C, so ΔU = qΔV = −1.6 × 10⁻¹⁷ J. The positive answer drops the electron's negative sign, and the two answers with 10⁻²¹ divide by 100 instead of multiplying.`,
      },
      {
        question: r`A Na⁺ ion starts where the potential is +30 mV, and its potential energy changes by ΔU = −0.090 eV. What is the potential where it ends?`,
        options: [r`+120 mV`, r`−90 mV`, r`+60 mV`, r`−60 mV`],
        correctAnswer: 3,
        explanation: r`For q = +e, ΔV = ΔU/q = −0.090 V = −90 mV. Since ΔV = V_final − V_initial, V_final = 30 − 90 = −60 mV. Adding 90 gives +120 mV, −90 mV reports the change as the final potential, and +60 mV drops the sign at the end.`,
      },
      {
        question: r`An ion moves from a point at −10 mV to a point at +50 mV, and its potential energy falls by 0.060 eV. What is the ion's charge?`,
        options: [r`A charge of +e`, r`A charge of −2e`, r`A charge of +2e`, r`A charge of −e`],
        correctAnswer: 3,
        explanation: r`ΔV = 50 − (−10) = +60 mV = +0.060 V, and ΔU = −0.060 eV, so q = ΔU/ΔV = −e. A charge of +e would gain 0.060 eV on this path, and a charge of size 2e would change its energy by 0.12 eV, not 0.060 eV.`,
      },
      {
        question: r`A pump moves a Ca²⁺ ion from a region at −50 mV to a region at +10 mV. What is ΔU for the ion?`,
        options: [r`+0.12 eV`, r`−0.12 eV`, r`+0.060 eV`, r`−0.080 eV`],
        correctAnswer: 0,
        explanation: r`ΔV = 10 − (−50) = +60 mV and q = +2e, so ΔU = 2 × 0.060 = +0.12 eV: the ion gains potential energy. Subtracting in the wrong order gives −0.12 eV, +0.060 eV forgets the double charge, and −0.080 eV adds the two potentials to get −40 mV.`,
      },
      {
        question: r`A sulfate ion, SO₄²⁻, moves from a point at +40 mV to a point at −10 mV. What is ΔU for the ion?`,
        options: [r`−0.10 eV`, r`+0.10 eV`, r`+0.050 eV`, r`−0.060 eV`],
        correctAnswer: 1,
        explanation: r`ΔV = −10 − 40 = −50 mV and q = −2e, so ΔU = (−2)(−0.050) = +0.10 eV. Leaving out the ion's negative sign gives −0.10 eV, +0.050 eV forgets the double charge, and −0.060 eV adds the potentials to get +30 mV before multiplying by −2.`,
      },
    ],
  },
  [r`About how large is a resting membrane potential?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A microelectrode is pushed into a resting neuron, and its reading is taken relative to a reference electrode in the fluid outside the cell. Which reading is typical?`,
        options: [r`About +70 mV`, r`About −70 V`, r`About −70 mV`, r`About −7 mV`],
        correctAnswer: 2,
        explanation: r`A resting cell sits at about −70 mV inside relative to outside. The positive value has the sign reversed, −70 V is a thousand times too large for a membrane, and −7 mV is ten times too small.`,
      },
      {
        question: r`Suppose resting cell membranes could be stacked in series so that their potential differences add. About how many would be needed to match the 1.5 V of a penlight cell?`,
        options: [r`About 20`, r`About 2`, r`About 200`, r`About 2000`],
        correctAnswer: 0,
        explanation: r`Each resting membrane has about 70 mV = 0.07 V across it, so 1.5 V ÷ 0.07 V is about 20. About 2 would need 0.7 V per membrane, about 200 would need 7 mV, and about 2000 would need 0.7 mV.`,
      },
    ],
  },
  [r`What symbol stands for resistance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student divides a voltmeter reading of 12 V by an ammeter reading of 3 A for the same component. Which line labels the result correctly?`,
        options: [r`R = 4 Ω`, r`R = 4 S`, r`G = 4 Ω`, r`ρ = 4 Ω·m`],
        correctAnswer: 0,
        explanation: r`Volts divided by amperes is a resistance, symbol R, and one volt per ampere is one ohm, so R = 4 Ω. The siemens is the unit of conductance, G is the symbol for conductance and not resistance, and ρ in Ω·m is resistivity, a property of a material.`,
      },
      {
        question: r`A component's label reads "5 Ω". What does this tell you directly about the component?`,
        options: [r`Each volt across it drives 5 A through it`, r`Each ampere through it needs 5 V across it`, r`Each second it turns 5 J into thermal energy`, r`Each meter of its length has 5 V across it`],
        correctAnswer: 1,
        explanation: r`One ohm is one volt per ampere, so 5 Ω means 5 V for each ampere of current. Five amperes per volt would be a conductance of 5 S, joules per second is a power in watts, and volts per meter is not what the ohm measures.`,
      },
    ],
  },
  [r`What symbol stands for resistivity, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A reference table lists 1.7 × 10⁻⁸ Ω·m for copper. Which quantity is this, and what happens to it for a copper wire that is cut shorter?`,
        options: [r`Resistance R, which becomes smaller for a shorter wire`, r`Resistivity ρ, which becomes smaller for a shorter wire`, r`Resistivity ρ, which stays the same for a shorter wire`, r`Resistance R, which stays the same for a shorter wire`],
        correctAnswer: 2,
        explanation: r`The unit Ω·m marks a resistivity, ρ, which belongs to the material and does not depend on the size of the piece. Resistance is measured in Ω and belongs to one particular wire; it is the resistance, not the resistivity, that falls when the wire is shortened.`,
      },
      {
        question: r`A copper wire and a nichrome wire have the same length and the same thickness, yet their resistances differ. Which quantity accounts for the difference, and what is its SI unit?`,
        options: [r`Their resistivity, measured in Ω·m`, r`Their resistivity, measured in Ω/m`, r`Their conductance, measured in Ω·m`, r`Their resistance, measured in Ω/m`],
        correctAnswer: 0,
        explanation: r`With the same shape, only the material differs, and the material's property is its resistivity, in ohm-meters (Ω·m). The unit is ohms times meters, not ohms per meter, and conductance is a property of one particular wire, measured in siemens.`,
      },
    ],
  },
  [r`What symbol stands for conductance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A data sheet for an ion channel lists the value "20 pS". What property of the channel has been listed?`,
        options: [r`A resistance, the voltage per ampere`, r`A resistivity, a property of the fluid`, r`A conductance, the current per volt`, r`A current, the charge per second`],
        correctAnswer: 2,
        explanation: r`S is the siemens, the unit of conductance G, and one siemens is one ampere per volt, so 20 pS is a conductance. Resistance is in ohms, resistivity is in ohm-meters, and current is in amperes.`,
      },
      {
        question: r`The conductance of a sample is reported as G = 4 S. Which statement says the same thing?`,
        options: [r`It passes 4 A for each volt across it`, r`It needs 4 V for each ampere through it`, r`It stores 4 C for each volt across it`, r`It has 4 Ω for each meter of its length`],
        correctAnswer: 0,
        explanation: r`One siemens is one ampere per volt, so 4 S means 4 A of current for each volt applied. Four volts per ampere would be a resistance of 4 Ω, coulombs per volt describes a capacitance, and ohms per meter is not a conductance.`,
      },
    ],
  },
  [r`In $R = \rho L/A$, what are the SI units of $L$ and $A$?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student finding a wire's resistance writes ρ = 2 × 10⁻⁸ Ω·m and L = 3 m, then copies "A = 0.5 A" from the ammeter into $R = \rho L/A$. What is the error?`,
        options: [r`L is the wire's diameter in m, not the wire's length`, r`ρ is the resistance in Ω, not a value given in Ω·m`, r`A is the current, but it has to be in mA, not in A`, r`A is the cross-sectional area in m², not the current`],
        correctAnswer: 3,
        explanation: r`In R = ρL/A the letter A is the wire's cross-sectional area in square meters; it has nothing to do with the ampere. L really is the length in meters and ρ really is the resistivity in Ω·m, so those two entries were fine, and changing the current to mA still puts a current where an area belongs.`,
      },
      {
        question: r`A wire has a circular cross-section of radius 1.0 mm. Which expression gives the value of $A$, in SI units, to use in $R = \rho L/A$?`,
        options: [r`2π(1.0 × 10⁻³ m)`, r`π(1.0 × 10⁻³ m)²`, r`π(1.0 × 10⁻³ A)²`, r`π(2.0 × 10⁻³ m)²`],
        correctAnswer: 1,
        explanation: r`A is the cross-sectional area in m², so for a circle it is πr² with the radius in meters: π(1.0 × 10⁻³ m)². The expression 2πr is the circumference, a length; the one written with the unit A confuses area with the ampere; and the one with 2.0 × 10⁻³ m squares the diameter.`,
      },
    ],
  },
  [r`State Ohm's law and the unit of resistance.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9.0 V battery is connected across a 450 Ω resistor. What current flows through the resistor?`,
        options: [r`50 A`, r`4050 A`, r`0.020 A`, r`0.20 A`],
        correctAnswer: 2,
        explanation: r`I = V/R = 9.0 V ÷ 450 Ω = 0.020 A. Dividing the resistance by the voltage gives 50 A, multiplying the two gives 4050 A, and 0.20 A misplaces the decimal point.`,
      },
      {
        question: r`The heating element of a hair dryer carries 8.0 A when 120 V is across it. What is the resistance of the element?`,
        options: [r`15 Ω`, r`960 Ω`, r`0.067 Ω`, r`112 Ω`],
        correctAnswer: 0,
        explanation: r`R = V/I = 120 V ÷ 8.0 A = 15 Ω. Multiplying the two readings gives 960 (which is the power in watts, not a resistance), dividing the current by the voltage gives 0.067, and 112 subtracts one reading from the other.`,
      },
      {
        question: r`A current of 0.25 A flows through a 48 Ω heating pad. What is the voltage across the pad?`,
        options: [r`192 V`, r`0.0052 V`, r`1.2 V`, r`12 V`],
        correctAnswer: 3,
        explanation: r`V = IR = 0.25 A × 48 Ω = 12 V. Dividing the resistance by the current gives 192 V, dividing the current by the resistance gives 0.0052 V, and 1.2 V misplaces the decimal point.`,
      },
      {
        question: r`Dry skin gives a hand-to-hand body resistance of about 50 kΩ. What current flows when 10 V is applied from one hand to the other?`,
        options: [r`0.20 mA`, r`0.20 A`, r`5.0 mA`, r`5.0 A`],
        correctAnswer: 0,
        explanation: r`I = V/R = 10 V ÷ (5.0 × 10⁴ Ω) = 2.0 × 10⁻⁴ A = 0.20 mA. Ignoring the kilo prefix gives 0.20 A, and the two answers with 5.0 divide the resistance by the voltage.`,
      },
      {
        question: r`A recording electrode has 60 mV across it while it carries 2.0 μA. What is the resistance of the electrode?`,
        options: [r`30 Ω`, r`30 MΩ`, r`33 μΩ`, r`30 kΩ`],
        correctAnswer: 3,
        explanation: r`R = V/I = 0.060 V ÷ 2.0 × 10⁻⁶ A = 3.0 × 10⁴ Ω = 30 kΩ. Dividing 60 by 2.0 with no prefixes gives 30 Ω, 30 MΩ treats the 60 mV as 60 V, and 33 μΩ comes from dividing the current by the voltage.`,
      },
      {
        question: r`A 1.5 V cell drives 30 mA through a resistor. The same resistor is moved to a 6.0 V supply. Taking its resistance as fixed, what current flows now?`,
        options: [r`7.5 mA`, r`120 mA`, r`30 mA`, r`480 mA`],
        correctAnswer: 1,
        explanation: r`R = V/I = 1.5 V ÷ 0.030 A = 50 Ω, so at 6.0 V the current is I = 6.0 V ÷ 50 Ω = 0.12 A = 120 mA. Dividing by the voltage ratio of 4 gives 7.5 mA, 30 mA assumes the current never changes, and 480 mA applies the factor of 4 twice.`,
      },
    ],
  },
  [r`What is conductance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A resistor is marked 250 Ω. What is its conductance?`,
        options: [r`4.0 mS`, r`250 S`, r`40 mS`, r`4.0 S`],
        correctAnswer: 0,
        explanation: r`G = 1/R = 1 ÷ 250 Ω = 0.0040 S = 4.0 mS. The answer 250 S just renames the resistance, 40 mS misplaces the decimal point, and 4.0 S drops the milli prefix.`,
      },
      {
        question: r`A conductivity cell filled with a salt solution has a conductance of 0.020 S. What is the resistance of the cell?`,
        options: [r`0.020 Ω`, r`50 Ω`, r`5.0 Ω`, r`500 Ω`],
        correctAnswer: 1,
        explanation: r`R = 1/G = 1 ÷ 0.020 S = 50 Ω. The answer 0.020 Ω copies the conductance without inverting it, and 5.0 Ω and 500 Ω each misplace the decimal point in the inversion.`,
      },
      {
        question: r`An electrolyte sample with a conductance of 0.25 S has 8.0 V applied across it. What current flows?`,
        options: [r`32 A`, r`0.031 A`, r`2.0 A`, r`4.0 A`],
        correctAnswer: 2,
        explanation: r`Conductance is current per volt, so I = GV = 0.25 S × 8.0 V = 2.0 A (the same as 8.0 V ÷ 4.0 Ω). Dividing the voltage by 0.25 gives 32 A, dividing 0.25 by the voltage gives 0.031 A, and 4.0 is the resistance in ohms, not the current.`,
      },
      {
        question: r`A single ion channel passes 2.0 pA when the voltage driving ions through it is 100 mV. What is the conductance of the channel?`,
        options: [r`0.020 pS`, r`20 pS`, r`50 pS`, r`0.20 pS`],
        correctAnswer: 1,
        explanation: r`G = I/V, with 2.0 × 10⁻¹² A divided by 0.10 V, is 2.0 × 10⁻¹¹ S = 20 pS. Dividing 2.0 by 100 without converting millivolts gives 0.020 pS, dividing 100 by 2.0 gives 50, and 0.20 pS multiplies by 0.10 V instead of dividing.`,
      },
      {
        question: r`A moisture sensor with a conductance of 0.050 S carries a current of 0.20 A. What is the voltage across the sensor?`,
        options: [r`0.010 V`, r`0.25 V`, r`40 V`, r`4.0 V`],
        correctAnswer: 3,
        explanation: r`Since G = I/V, V = I/G = 0.20 A ÷ 0.050 S = 4.0 V (the sensor's resistance is 20 Ω). Multiplying the current by the conductance gives 0.010 V, dividing the conductance by the current gives 0.25 V, and 40 V misplaces the decimal point.`,
      },
      {
        question: r`As a thermistor warms, its resistance drops from 600 Ω to 200 Ω. What happens to its conductance?`,
        options: [r`It becomes 1/3 as large`, r`It becomes 9 times as large`, r`It becomes 3 times as large`, r`It becomes 400 times as large`],
        correctAnswer: 2,
        explanation: r`G = 1/R, so when R falls to one third (600 Ω to 200 Ω), G triples, from 1/600 S to 1/200 S. One third as large follows the resistance instead of inverting it, 9 times squares the factor, and 400 is just the difference between the two resistances.`,
      },
    ],
  },
  [r`Read $V = IR$ three ways: fixed $R$, fixed $V$, fixed $I$.`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ohmic heating element carries 8.0 A on a 120 V supply. During a brownout the supply sags to 30 V. What current does the element carry at the lower voltage?`,
        options: [r`32 A`, r`2.0 A`, r`0.50 A`, r`4.0 A`],
        correctAnswer: 1,
        explanation: r`At fixed R the current is proportional to the voltage. The voltage falls to 30/120 = one quarter, so the current falls to 8.0 A ÷ 4 = 2.0 A. Multiplying by 4 gives 32 A, dividing by 4 twice gives 0.50 A, and 4.0 A only halves the current.`,
      },
      {
        question: r`A variable resistor stays connected across a fixed supply. At 40 Ω it carries 0.30 A. Its resistance is then raised to 100 Ω. What current does it carry now?`,
        options: [r`0.75 A`, r`0.048 A`, r`0.12 A`, r`0.30 A`],
        correctAnswer: 2,
        explanation: r`At fixed V the current is proportional to 1/R. The resistance rises by 100/40 = 2.5, so the current falls to 0.30 A ÷ 2.5 = 0.12 A. Multiplying by 2.5 gives 0.75 A, dividing by 2.5 twice gives 0.048 A, and 0.30 A assumes the current is unaffected.`,
      },
      {
        question: r`A 100 Ω resistor and a 250 Ω resistor lie on one series path. A voltmeter reads 4.0 V across the 100 Ω resistor. What is the voltage across the 250 Ω resistor?`,
        options: [r`10 V`, r`1.6 V`, r`4.0 V`, r`14 V`],
        correctAnswer: 0,
        explanation: r`On one series path the current is the same, so V is proportional to R: the 250 Ω resistor has 2.5 times the resistance and 2.5 × 4.0 V = 10 V. Dividing by 2.5 gives 1.6 V, 4.0 V assumes equal drops, and 14 V is the total across both resistors.`,
      },
      {
        question: r`An ohmic pair of gel electrodes passes 2.0 mA when 0.50 V is applied. What voltage is needed to pass 10 mA through the same pair?`,
        options: [r`0.10 V`, r`5.0 V`, r`2.5 V`, r`12.5 V`],
        correctAnswer: 2,
        explanation: r`At fixed R the voltage and current are proportional. The current is to rise by a factor of 5, so the voltage must be 5 × 0.50 V = 2.5 V. Dividing by 5 gives 0.10 V, 5.0 V multiplies 0.50 by the 10 without comparing it with the 2.0, and 12.5 V applies the factor 5 twice.`,
      },
      {
        question: r`A light sensor is held at a fixed voltage. In bright light its resistance falls from 800 Ω to 200 Ω. What happens to the current through it?`,
        options: [r`It becomes 1/4 as large`, r`It becomes 16 times as large`, r`It becomes 2 times as large`, r`It becomes 4 times as large`],
        correctAnswer: 3,
        explanation: r`At fixed V the current is proportional to 1/R. The resistance falls to one quarter, so the current becomes 4 times as large. One quarter as large follows the resistance instead of inverting it, 16 times squares the factor, and 2 times takes its square root.`,
      },
      {
        question: r`A 10 Ω, a 20 Ω and a 30 Ω resistor lie on one series path. The voltage across the 20 Ω resistor is 6.0 V. What are the voltages across the 10 Ω and the 30 Ω resistors?`,
        options: [r`12 V and 4.0 V`, r`6.0 V and 6.0 V`, r`9.0 V and 3.0 V`, r`3.0 V and 9.0 V`],
        correctAnswer: 3,
        explanation: r`With one shared current, V is proportional to R. The 10 Ω resistor has half the resistance of the 20 Ω one, so 3.0 V; the 30 Ω resistor has 1.5 times, so 9.0 V. The pair 12 V and 4.0 V inverts the proportion, equal voltages ignore the resistances, and the last pair swaps the two resistors.`,
      },
    ],
  },
  [r`What does the $I$–$V$ graph of an ohmic element look like (current on the vertical axis)?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The I–V line of an ohmic resistor, drawn with current on the vertical axis, runs from the origin through the point (10 V, 0.50 A). What are the slope of the line and the resistance?`,
        options: [r`20 A/V and 0.050 Ω`, r`0.050 A/V and 0.050 Ω`, r`20 A/V and 20 Ω`, r`0.050 A/V and 20 Ω`],
        correctAnswer: 3,
        explanation: r`The slope is rise over run, 0.50 A ÷ 10 V = 0.050 A/V, and the slope equals 1/R, so R = 1 ÷ 0.050 = 20 Ω. The answers with a slope of 20 A/V divide voltage by current, and giving 0.050 Ω treats the slope as R itself instead of 1/R.`,
      },
      {
        question: r`A 50 Ω ohmic resistor is tested, and its current (vertical axis) is plotted against its voltage (horizontal axis). What is the gradient of the straight line obtained?`,
        options: [r`50 A/V`, r`0.50 A/V`, r`2.0 A/V`, r`0.020 A/V`],
        correctAnswer: 3,
        explanation: r`With current on the vertical axis the gradient is 1/R = 1 ÷ 50 Ω = 0.020 A/V. A gradient of 50 would be R itself, which is the slope only when voltage is on the vertical axis, and 0.50 and 2.0 A/V misplace the decimal point in 1/50.`,
      },
      {
        question: r`An ohmic component's I–V line (current on the vertical axis) passes through the origin and the point (3.0 V, 0.60 A). What current does the line show at 7.5 V?`,
        options: [r`1.5 A`, r`37.5 A`, r`0.24 A`, r`4.5 A`],
        correctAnswer: 0,
        explanation: r`The slope is 0.60 A ÷ 3.0 V = 0.20 A/V, and a straight line through the origin gives I = 0.20 × 7.5 = 1.5 A. Multiplying 7.5 V by the 5.0 Ω resistance gives 37.5 A, 0.24 A scales the current down instead of up, and 4.5 A multiplies 7.5 by 0.60.`,
      },
      {
        question: r`An ohmic sensor is tested, with its current plotted upward against the voltage across it. The straight line through the origin rises by 2.0 mA for every volt. What is the sensor's resistance?`,
        options: [r`0.50 Ω`, r`500 Ω`, r`2.0 Ω`, r`2000 Ω`],
        correctAnswer: 1,
        explanation: r`The slope is 1/R, so R = 1 ÷ (2.0 × 10⁻³ A/V) = 500 Ω. Leaving the slope as 2.0 A/V gives 0.50 Ω, 2.0 Ω reads the slope as the resistance, and 2000 Ω multiplies by a thousand instead of inverting.`,
      },
      {
        question: r`On one set of axes (current vertical, voltage horizontal), ohmic resistor X gives a line of slope 0.40 A/V and ohmic resistor Y gives a line of slope 0.10 A/V. How do their resistances compare?`,
        options: [r`X is 2.5 Ω, one quarter of Y's value`, r`X is 0.40 Ω, four times Y's value`, r`X is 2.5 Ω, four times Y's value`, r`X is 0.40 Ω, one quarter of Y's value`],
        correctAnswer: 0,
        explanation: r`The slope is 1/R, so X is 1 ÷ 0.40 = 2.5 Ω and Y is 1 ÷ 0.10 = 10 Ω: X has one quarter of Y's resistance. The steeper line belongs to the smaller resistance. Answers with 0.40 Ω read the slope as R, and "four times" forgets that a larger slope means a smaller R.`,
      },
      {
        question: r`The I–V line of an ohmic sensor, with current on the vertical axis, passes through the origin with a slope of 0.050 A/V. At what voltage does the sensor carry 0.30 A?`,
        options: [r`0.015 V`, r`20 V`, r`6.0 V`, r`0.17 V`],
        correctAnswer: 2,
        explanation: r`On this graph I = slope × V, so V = I ÷ slope = 0.30 A ÷ 0.050 A/V = 6.0 V (the resistance is 20 Ω). Multiplying the current by the slope gives 0.015 V, 20 is the resistance in ohms and not a voltage, and 0.17 V divides the slope by the current.`,
      },
    ],
  },
  [r`Why is a filament bulb not ohmic?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A filament bulb carries 0.40 A when 3 V is across it. The voltage is doubled to 6 V and the filament glows much hotter. What can be said about the new current?`,
        options: [r`Exactly 0.80 A, twice the first value`, r`More than 0.80 A, as it is now hotter`, r`More than 0.40 A but less than 0.80 A`, r`Less than 0.40 A, as R has now risen`],
        correctAnswer: 2,
        explanation: r`A hotter filament has a larger resistance, so doubling the voltage less than doubles the current: it ends between 0.40 A and 0.80 A. Exactly 0.80 A would need a constant resistance, more than 0.80 A would need the resistance to fall, and the rise in R is not large enough to push the current below its first value.`,
      },
      {
        question: r`A student wants a filament bulb to give a straight I–V line through the origin during a test. Which change would achieve this?`,
        options: [r`Using a battery with a much larger voltage`, r`Holding the filament at one fixed temperature`, r`Reversing the direction of the current in it`, r`Plotting voltage on the vertical axis instead`],
        correctAnswer: 1,
        explanation: r`The bulb is non-ohmic only because its resistance rises as the filament heats, so a filament kept at one temperature has a constant resistance and a straight line. A larger voltage heats it more, reversing the current heats it just the same, and swapping the axes still gives a curve.`,
      },
    ],
  },
  [r`Write the resistance of a wire in terms of its material and shape.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A tube holds a column of saline of resistivity 0.70 Ω·m. The column is 0.20 m long and has a cross-sectional area of 1.0 × 10⁻⁴ m². What is its resistance from end to end?`,
        options: [r`1400 Ω`, r`1.4 × 10⁻⁵ Ω`, r`3.5 × 10⁴ Ω`, r`140 Ω`],
        correctAnswer: 0,
        explanation: r`R = ρL/A = (0.70 × 0.20) ÷ (1.0 × 10⁻⁴) = 0.14 ÷ 10⁻⁴ = 1400 Ω. Multiplying by the area instead of dividing gives 1.4 × 10⁻⁵ Ω, dividing by the length as well gives 3.5 × 10⁴ Ω, and 140 Ω is a power-of-ten slip.`,
      },
      {
        question: r`Copper has a resistivity of 1.7 × 10⁻⁸ Ω·m. What length of copper wire with a cross-sectional area of 1.0 × 10⁻⁶ m² has a resistance of 0.34 Ω?`,
        options: [r`0.050 m`, r`2.0 m`, r`200 m`, r`20 m`],
        correctAnswer: 3,
        explanation: r`Rearranging R = ρL/A gives L = RA/ρ = (0.34 × 1.0 × 10⁻⁶) ÷ (1.7 × 10⁻⁸) = 20 m. Inverting the ratio gives 0.050 m, and 2.0 m and 200 m are power-of-ten slips in the division.`,
      },
      {
        question: r`A metal rod 2.0 m long with a cross-sectional area of 4.0 × 10⁻⁶ m² has a resistance of 0.050 Ω. What is the resistivity of the metal?`,
        options: [r`1.0 × 10⁻⁷ Ω·m`, r`4.0 × 10⁻⁷ Ω·m`, r`2.5 × 10⁴ Ω·m`, r`6.3 × 10³ Ω·m`],
        correctAnswer: 0,
        explanation: r`Rearranging R = ρL/A gives ρ = RA/L = (0.050 × 4.0 × 10⁻⁶) ÷ 2.0 = 1.0 × 10⁻⁷ Ω·m. Multiplying by the length gives 4.0 × 10⁻⁷, using RL/A gives 2.5 × 10⁴, and dividing R by both L and A gives 6.3 × 10³.`,
      },
      {
        question: r`A heating wire is to be made from an alloy of resistivity 5.0 × 10⁻⁷ Ω·m. It must be 4.0 m long and have a resistance of 10 Ω. What cross-sectional area is needed?`,
        options: [r`2.0 × 10⁻⁵ m²`, r`2.0 × 10⁻⁷ m²`, r`5.0 × 10⁶ m²`, r`1.3 × 10⁻⁶ m²`],
        correctAnswer: 1,
        explanation: r`Rearranging R = ρL/A gives A = ρL/R = (5.0 × 10⁻⁷ × 4.0) ÷ 10 = 2.0 × 10⁻⁷ m². Multiplying by R instead of dividing gives 2.0 × 10⁻⁵ m², inverting the whole ratio gives 5.0 × 10⁶ m², and 1.3 × 10⁻⁶ m² swaps the places of L and R.`,
      },
      {
        question: r`A lead wire has a resistivity of 2.0 × 10⁻⁸ Ω·m, a length of 50 cm and a cross-sectional area of 1.0 mm². What is its resistance?`,
        options: [r`1.0 Ω`, r`1.0 × 10⁻⁸ Ω`, r`0.010 Ω`, r`1.0 × 10⁻⁵ Ω`],
        correctAnswer: 2,
        explanation: r`In SI units L = 0.50 m and A = 1.0 × 10⁻⁶ m², so R = ρL/A = (2.0 × 10⁻⁸ × 0.50) ÷ (1.0 × 10⁻⁶) = 0.010 Ω. Leaving the length as 50 gives 1.0 Ω, leaving the area as 1.0 gives 1.0 × 10⁻⁸ Ω, and converting mm² with 10⁻³ instead of 10⁻⁶ gives 1.0 × 10⁻⁵ Ω.`,
      },
      {
        question: r`A resistance wire of 8.0 Ω is replaced by one of the same material that is 3 times as long and has twice the cross-sectional area. What is the resistance of the replacement?`,
        options: [r`5.3 Ω`, r`12 Ω`, r`48 Ω`, r`6.0 Ω`],
        correctAnswer: 1,
        explanation: r`R = ρL/A, so tripling L and doubling A multiplies R by 3/2: 8.0 Ω × 1.5 = 12 Ω. Inverting the factor gives 5.3 Ω, multiplying by both 3 and 2 gives 48 Ω, and 6.0 Ω treats the doubled area as a doubled diameter (a factor of 3/4).`,
      },
    ],
  },
  [r`A wire's diameter doubles. What happens to its resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 Ω heater wire is replaced by a wire of the same metal and the same length but with twice the diameter. What is the resistance of the new wire?`,
        options: [r`3.0 Ω`, r`6.0 Ω`, r`24 Ω`, r`48 Ω`],
        correctAnswer: 0,
        explanation: r`Area goes as diameter squared, so doubling the diameter makes the area 4 times larger and the resistance 4 times smaller: 12 Ω ÷ 4 = 3.0 Ω. Halving it forgets the square (6.0 Ω), and 24 Ω and 48 Ω make the fatter wire resist more.`,
      },
      {
        question: r`A wire 0.50 mm in diameter has a resistance of 40 Ω. A wire of the same metal and length is 2.0 mm in diameter. What is its resistance?`,
        options: [r`10 Ω`, r`160 Ω`, r`2.5 Ω`, r`640 Ω`],
        correctAnswer: 2,
        explanation: r`The diameter is 4 times larger, so the area is 4² = 16 times larger and the resistance is 40 Ω ÷ 16 = 2.5 Ω. Dividing by 4 forgets the square (10 Ω), and 160 Ω and 640 Ω multiply when a fatter wire should resist less.`,
      },
      {
        question: r`An engineer needs a replacement cable of the same metal and length with one ninth of the original resistance. How must the diameter of the new cable compare with the old?`,
        options: [r`9 times as large`, r`81 times as large`, r`1/3 as large`, r`3 times as large`],
        correctAnswer: 3,
        explanation: r`R is proportional to 1/A and A goes as diameter squared, so one ninth of the resistance needs 9 times the area, which is 3 times the diameter. Nine times the diameter would cut R by 81, 81 times squares when it should take a root, and a thinner cable would raise the resistance.`,
      },
      {
        question: r`An electrode lead has a resistance of 0.80 Ω. It is swapped for a lead of the same metal and length with half the diameter. What is the resistance of the thinner lead?`,
        options: [r`1.6 Ω`, r`3.2 Ω`, r`0.40 Ω`, r`0.20 Ω`],
        correctAnswer: 1,
        explanation: r`Halving the diameter cuts the area to one quarter, and R is proportional to 1/A, so the resistance is 4 × 0.80 Ω = 3.2 Ω. Doubling forgets the square (1.6 Ω), and 0.40 Ω and 0.20 Ω make the thinner lead resist less.`,
      },
      {
        question: r`Connected across a fixed 6.0 V supply, a wire carries 0.50 A. It is replaced by a wire of the same metal and length with twice the diameter. What current flows now?`,
        options: [r`1.0 A`, r`0.125 A`, r`2.0 A`, r`0.25 A`],
        correctAnswer: 2,
        explanation: r`Twice the diameter means 4 times the area and one quarter of the resistance, and at a fixed voltage one quarter of the resistance gives 4 times the current: 4 × 0.50 A = 2.0 A. Doubling forgets the square (1.0 A), and 0.125 A and 0.25 A make the fatter wire carry less.`,
      },
      {
        question: r`A 9.0 Ω wire with a diameter of 1.0 mm is replaced by one of the same metal and length with a diameter of 1.5 mm. What is the new resistance?`,
        options: [r`6.0 Ω`, r`4.0 Ω`, r`13.5 Ω`, r`20 Ω`],
        correctAnswer: 1,
        explanation: r`The diameter rises by 1.5, so the area rises by 1.5² = 2.25 and the resistance falls to 9.0 Ω ÷ 2.25 = 4.0 Ω. Dividing by 1.5 forgets the square (6.0 Ω), and 13.5 Ω and 20 Ω multiply by 1.5 and by 2.25 when the fatter wire should resist less.`,
      },
    ],
  },
  [r`A wire is stretched to $n$ times its length at constant volume. What happens to its resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 6.0 Ω wire is pulled through a die until it is 3 times its original length, with its volume unchanged. What is its resistance now?`,
        options: [r`18 Ω`, r`2.0 Ω`, r`0.67 Ω`, r`54 Ω`],
        correctAnswer: 3,
        explanation: r`The length is 3 times larger and, at constant volume, the area is 3 times smaller, so R is multiplied by 3² = 9: 6.0 Ω × 9 = 54 Ω. Multiplying by 3 forgets the thinner cross-section (18 Ω), and 2.0 Ω and 0.67 Ω divide when a stretched wire should resist more.`,
      },
      {
        question: r`A 2.0 Ω wire is stretched at constant volume until its resistance is 50 Ω. How does its new length compare with its original length?`,
        options: [r`25 times as long`, r`12.5 times as long`, r`625 times as long`, r`5 times as long`],
        correctAnswer: 3,
        explanation: r`The resistance rose by 50/2.0 = 25, and stretching by n multiplies R by n², so n² = 25 and n = 5. Taking n = 25 forgets the square, 12.5 halves the 25 when it should take the square root, and 625 squares it.`,
      },
      {
        question: r`The 100 Ω wire of a strain gauge is stretched to 1.1 times its original length, with its volume unchanged. What is its resistance now?`,
        options: [r`110 Ω`, r`121 Ω`, r`91 Ω`, r`83 Ω`],
        correctAnswer: 1,
        explanation: r`Stretching by n multiplies R by n² = 1.1² = 1.21, so R = 121 Ω. The answer 110 Ω counts the longer length but not the smaller area, and 91 Ω and 83 Ω divide by 1.1 and 1.21 when a stretched wire should resist more.`,
      },
      {
        question: r`A cylinder of conducting putty has a resistance of 8.0 Ω from end to end. It is squashed to half its original length, with its volume unchanged. What is its resistance now?`,
        options: [r`4.0 Ω`, r`16 Ω`, r`2.0 Ω`, r`32 Ω`],
        correctAnswer: 2,
        explanation: r`Here n = 1/2: the length halves and the area doubles, so R is multiplied by (1/2)² = 1/4, giving 2.0 Ω. Halving counts the length but not the area (4.0 Ω), and 16 Ω and 32 Ω make the shorter, fatter cylinder resist more.`,
      },
      {
        question: r`A 1.5 Ω wire is stretched, at constant volume, until its cross-sectional area is one third of its original value. What is its resistance now?`,
        options: [r`13.5 Ω`, r`4.5 Ω`, r`0.50 Ω`, r`0.17 Ω`],
        correctAnswer: 0,
        explanation: r`At constant volume, one third of the area means 3 times the length, so R is multiplied by 3 × 3 = 9: 1.5 Ω × 9 = 13.5 Ω. Multiplying by 3 counts the area but not the length (4.5 Ω), and 0.50 Ω and 0.17 Ω divide when a stretched wire should resist more.`,
      },
      {
        question: r`A wire connected across a fixed voltage carries 0.80 A. It is then stretched to twice its length at constant volume and reconnected across the same voltage. What current does it carry now?`,
        options: [r`0.40 A`, r`1.6 A`, r`0.20 A`, r`3.2 A`],
        correctAnswer: 2,
        explanation: r`Stretching to twice the length multiplies R by 2² = 4, and at a fixed voltage 4 times the resistance gives one quarter of the current: 0.80 A ÷ 4 = 0.20 A. Halving forgets the thinner cross-section (0.40 A), and 1.6 A and 3.2 A make the stretched wire carry more.`,
      },
    ],
  },
}
