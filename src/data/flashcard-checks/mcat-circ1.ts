import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Circuits Part 1 video deck (`mcat-circ1`): one
 * per review card, keyed by the card's exact front text. Each asks the student
 * to use the card's idea in a new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`What symbol stands for electric charge, and what is its SI unit?`]: {
    question: r`A student multiplies a current of 0.30 A by a time of 20 s. Which line correctly labels the result?`,
    options: [r`Q = 6.0 C, a charge`, r`Q = 6.0 A, a charge`, r`I = 6.0 A, a current`, r`V = 6.0 V, a voltage`],
    correctAnswer: 0,
    explanation: r`Amperes times seconds gives coulombs, and the quantity measured in coulombs is charge, Q. Writing 6.0 A keeps the current unit on something that is no longer a current, and labelling it I or V names the wrong quantity.`,
  },
  [r`What symbol stands for current, and what is its SI unit?`]: {
    question: r`A charger's label says that 2 coulombs of charge leave it every second. Which line records this correctly?`,
    options: [r`I = 0.5 A`, r`I = 2 C`, r`I = 2 A`, r`Q = 2 A`],
    correctAnswer: 2,
    explanation: r`A coulomb per second is an ampere, and the quantity measured in amperes is current, I. Writing Q gives the symbol for charge, writing 2 C gives the unit of charge, and 0.5 comes from dividing seconds by coulombs.`,
  },
  [r`What symbol stands for time, and what is its SI unit?`]: {
    question: r`A steady current of 2.0 A flows through a heater for 5.0 minutes. How much charge passes through the heater?`,
    options: [r`600 C`, r`10 C`, r`150 C`, r`0.40 C`],
    correctAnswer: 0,
    explanation: r`The time must be in seconds: 5.0 minutes is 300 s, so the charge is 2.0 A × 300 s = 600 C. The answer 10 C leaves the time in minutes, 150 C divides 300 s by the current, and 0.40 C divides the current by 5.0.`,
  },
  [r`What is the elementary charge, $e$?`]: {
    question: r`A tiny oil droplet carries a net charge. Which of these values could be the size of that charge? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`0.8 × 10⁻¹⁹ C`, r`4.0 × 10⁻¹⁹ C`, r`2.4 × 10⁻¹⁹ C`, r`4.8 × 10⁻¹⁹ C`],
    correctAnswer: 3,
    explanation: r`Charge comes only in whole multiples of e, and 4.8 × 10⁻¹⁹ C is exactly 3e. The other values are 0.5e, 1.5e and 2.5e, and no object can carry a fraction of an elementary charge.`,
  },
  [r`Write current as an equation, with its unit.`]: {
    question: r`A defibrillator pulse pushes 0.20 C of charge through the chest in 4.0 ms. What is the average current during the pulse?`,
    options: [r`50 A`, r`20 A`, r`0.050 A`, r`0.80 A`],
    correctAnswer: 0,
    explanation: r`Current is charge over time, with the time in seconds: 0.20 C ÷ 0.0040 s = 50 A. Leaving the time as 4.0 gives 0.050 A, multiplying 0.20 by 4.0 gives 0.80 A, and dividing 4.0 by 0.20 gives 20 A.`,
  },
  [r`Rearrange $I = \Delta Q/\Delta t$ for the charge that passes in a time $\Delta t$.`]: {
    question: r`A pacemaker lead carries a steady 5.0 mA during a pulse that lasts 0.40 s. How much charge does the pulse deliver?`,
    options: [r`0.0020 C`, r`0.080 C`, r`0.0125 C`, r`2.0 C`],
    correctAnswer: 0,
    explanation: r`Charge is current times time: 5.0 × 10⁻³ A × 0.40 s = 2.0 × 10⁻³ C. The answer 2.0 C forgets that mA means thousandths of an ampere, 0.0125 C divides the current by the time, and 0.080 C divides 0.40 by 5.0.`,
  },
  [r`How many carriers make up a charge $\Delta Q$?`]: {
    question: r`A total charge of 6.4 × 10⁻¹² C enters a muscle cell, all of it carried by Ca²⁺ ions. How many ions enter? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`2.0 × 10⁻³⁰`, r`2.0 × 10⁷`, r`1.0 × 10⁷`, r`4.0 × 10⁷`],
    correctAnswer: 1,
    explanation: r`Each Ca²⁺ carries 2e = 3.2 × 10⁻¹⁹ C, so the number is 6.4 × 10⁻¹² ÷ 3.2 × 10⁻¹⁹ = 2.0 × 10⁷. Dividing by e alone gives 4.0 × 10⁷, dividing by 4e gives 1.0 × 10⁷, and multiplying instead of dividing gives the tiny 10⁻³⁰ value.`,
  },
  [r`Which way does conventional current point?`]: {
    question: r`The + terminal of a battery is wired to the left end of a resistor and the − terminal to its right end. Inside the resistor, which way do the conventional current and the electrons move?`,
    options: [r`Current left to right; electrons right to left`, r`Current right to left; electrons right to left`, r`Current left to right; electrons left to right`, r`Current right to left; electrons left to right`],
    correctAnswer: 0,
    explanation: r`Conventional current leaves the + terminal, so it crosses the resistor from left to right, and the electrons drift the opposite way, right to left. The reversed choice sends current out of the − terminal, and the two choices with matching directions forget that electrons move against the current.`,
  },
  [r`A negative charge moves to the left. Which way does the current point?`]: {
    question: r`In an old television tube, a beam of electrons travels from the back of the tube to the screen at the front. Which way does the current in the beam point?`,
    options: [r`From the screen toward the back of the tube`, r`Both ways at once, so the net current is zero`, r`From the back of the tube toward the screen`, r`Neither way: a beam in a vacuum is no current`],
    correctAnswer: 0,
    explanation: r`Current points the way positive charge would move, so negative charges moving back to front make a current from front to back, from the screen toward the back. Pointing it with the electrons ignores their negative sign, and moving charge is a current whether or not there is a wire.`,
  },
  [r`Electrons drift slowly. Why does a lamp light the instant the switch closes?`]: {
    question: r`A lamp lights the moment its switch is closed, although the switch is 5 m of wire away. Which electrons are the first to carry current through the filament?`,
    options: [r`Electrons that were sitting beside the switch`, r`Electrons that were already in the filament`, r`Electrons that just left the battery terminal`, r`Electrons that jumped across the switch contact`],
    correctAnswer: 1,
    explanation: r`The whole circuit is already full of carriers, and the field starts them all drifting at once, so the first current in the filament is carried by electrons that were already there. Electrons from the battery or the switch drift far too slowly to arrive for a long time.`,
  },
  [r`In a salt solution, Na⁺ drifts one way and Cl⁻ drifts the other. Do their currents cancel?`]: {
    question: r`Each second, positive ions carrying a total of +3 C drift to the right through a solution, while negative ions carrying a total of −2 C drift to the left. What is the current in the solution?`,
    options: [r`1 A to the right`, r`5 A to the left`, r`5 A to the right`, r`1 A to the left`],
    correctAnswer: 2,
    explanation: r`Negative charge moving left counts as current to the right, so the two flows add: 3 A + 2 A = 5 A to the right. The 1 A answers subtract the flows as if they cancelled, and any answer to the left points the current with the negative ions.`,
  },
  [r`How does heating change conduction in a metal, and in an electrolyte solution?`]: {
    question: r`A fixed voltage is kept across an iron wire, and the same is done for a salt bridge filled with electrolyte. Both are then cooled by 20 °C. How do the two currents change?`,
    options: [r`Wire current falls; salt bridge current rises`, r`Wire current falls; salt bridge current falls`, r`Wire current rises; salt bridge current falls`, r`Wire current rises; salt bridge current rises`],
    correctAnswer: 2,
    explanation: r`A metal conducts better when it is colder, so the wire current rises, while the ions of an electrolyte move more slowly when cold, so the salt bridge current falls. The reversed choice applies the heating trends to cooling, and the two matching choices treat a metal and an electrolyte as if they behaved alike.`,
  },
  // Video 2
  [r`What is the first step in any charge-counting problem?`]: {
    question: r`An open ion channel passes 5 pA for 2 ms. Which first line correctly sets up the charge that crosses?`,
    options: [r`ΔQ = (5 × 10⁻⁹ A)(2 × 10⁻³ s)`, r`ΔQ = (5 × 10⁻¹² A)(2 × 10⁻⁶ s)`, r`ΔQ = (5 × 10¹² A)(2 × 10³ s)`, r`ΔQ = (5 × 10⁻¹² A)(2 × 10⁻³ s)`],
    correctAnswer: 3,
    explanation: r`Convert to base units first: a picoampere is 10⁻¹² A and a millisecond is 10⁻³ s. Using 10⁻⁹ treats pico as nano, using 10⁻⁶ treats milli as micro, and the positive exponents turn tiny prefixes into enormous ones.`,
  },
  [r`Which equation turns a current and a time into a charge?`]: {
    question: r`An electrode carries a steady 40 mA for 25 s. Which line of working gives the charge that passes?`,
    options: [r`(40 × 10⁻³ A)/(25 s) = 0.0016 C`, r`(40 A)(25 s) = 1000 C`, r`(25 s)/(40 × 10⁻³ A) = 625 C`, r`(40 × 10⁻³ A)(25 s) = 1.0 C`],
    correctAnswer: 3,
    explanation: r`Charge is current times time with the current in amperes, so 0.040 A × 25 s = 1.0 C. The two lines that divide do not give coulombs at all, and the line that gives 1000 C multiplies correctly but leaves the current in milliamperes.`,
  },
  [r`Which equation turns a charge into a number of carriers?`]: {
    question: r`A charge of 8.0 × 10⁻¹⁰ C is carried through a wire by electrons. Which line gives the number of electrons? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`(1.6 × 10⁻¹⁹)/(8.0 × 10⁻¹⁰) = 2.0 × 10⁻¹⁰`, r`(8.0 × 10⁻¹⁰)/(1.6 × 10⁻¹⁹) = 5.0 × 10⁹`, r`(8.0 × 10⁻¹⁰)/(3.2 × 10⁻¹⁹) = 2.5 × 10⁹`, r`(8.0 × 10⁻¹⁰)(1.6 × 10⁻¹⁹) = 1.3 × 10⁻²⁸`],
    correctAnswer: 1,
    explanation: r`The number of carriers is the total charge divided by the charge on one carrier, and one electron carries e, giving 5.0 × 10⁹. Multiplying or dividing the wrong way round gives a number far below one, which cannot be a count, and dividing by 3.2 × 10⁻¹⁹ uses the charge of a doubly charged ion.`,
  },
  [r`What is the charge on one electron, one K⁺ ion and one Ca²⁺ ion?`]: {
    question: r`While a channel is open, 100 K⁺ ions and 100 Ca²⁺ ions leave a cell. What total charge leaves? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`3.2 × 10⁻¹⁷ C`, r`4.8 × 10⁻¹⁷ C`, r`6.4 × 10⁻¹⁷ C`, r`1.6 × 10⁻¹⁷ C`],
    correctAnswer: 1,
    explanation: r`Each K⁺ carries e and each Ca²⁺ carries 2e, so the total is 100e + 200e = 300e = 4.8 × 10⁻¹⁷ C. Counting every ion as e gives 3.2 × 10⁻¹⁷ C, counting only one set of ions gives 1.6 × 10⁻¹⁷ C, and counting every ion as 2e gives 6.4 × 10⁻¹⁷ C.`,
  },
  [r`The same current is carried by Ca²⁺ instead of K⁺. How does the number of ions change?`]: {
    question: r`A calcium channel lets 4000 Ca²⁺ ions through during one opening. A sodium channel carrying an equal current for an equally long opening lets through how many Na⁺ ions?`,
    options: [r`4000`, r`2000`, r`16 000`, r`8000`],
    correctAnswer: 3,
    explanation: r`The same current means the same charge in the same time, and each Na⁺ carries only half the charge of a Ca²⁺, so twice as many are needed: 8000. Halving to 2000 runs the factor the wrong way, 4000 ignores the charge per ion, and 16 000 doubles twice.`,
  },
  [r`Your last line is in coulombs, but the question asks "how many electrons?" What is missing?`]: {
    question: r`A student correctly finds that 3.2 × 10⁻⁶ C flows through a wire, but the question asks how many electrons pass. What is the final answer? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`5.0 × 10⁻¹⁴ electrons`, r`5.1 × 10⁻²⁵ electrons`, r`3.2 × 10⁻⁶ electrons`, r`2.0 × 10¹³ electrons`],
    correctAnswer: 3,
    explanation: r`Coulombs are an amount of charge, so divide by the charge on one electron: 3.2 × 10⁻⁶ ÷ 1.6 × 10⁻¹⁹ = 2.0 × 10¹³. Leaving 3.2 × 10⁻⁶ just relabels the coulombs, and the other two values come from multiplying by e or dividing upside down; a count can never be less than one.`,
  },
  // Video 3
  [r`What symbol stands for voltage (potential difference), and what is its SI unit?`]: {
    question: r`A meter reading is printed as 4.5 J/C. What has the meter measured?`,
    options: [r`A current of 4.5 A`, r`An energy of 4.5 J`, r`A power of 4.5 W`, r`A voltage of 4.5 V`],
    correctAnswer: 3,
    explanation: r`A joule per coulomb is a volt, so the reading is a voltage: energy for each unit of charge. A current would be in coulombs per second, an energy in joules alone, and a power in joules per second.`,
  },
  [r`What symbols stand for energy (work) and potential energy, and what is the SI unit?`]: {
    question: r`Which of these products gives an energy, in joules?`,
    options: [r`(2 A) × (3 V)`, r`(2 V) × (3 s)`, r`(2 C) × (3 V)`, r`(2 A) × (3 s)`],
    correctAnswer: 2,
    explanation: r`A volt is a joule per coulomb, so coulombs times volts leaves joules. Amperes times volts gives watts, which is power, amperes times seconds gives coulombs, which is charge, and volts times seconds is not an energy at all.`,
  },
  [r`Is the electron-volt a unit of voltage or of energy?`]: {
    question: r`A physicist says that an electron in her beam "has 200 eV". What has she stated? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`Its energy: 200 eV is 3.2 × 10⁻¹⁷ J`, r`Its voltage: 200 eV is 200 J/C`, r`Its charge: 200 eV is 3.2 × 10⁻¹⁷ C`, r`Its potential: 200 eV is 200 V`],
    correctAnswer: 0,
    explanation: r`The electron-volt is a unit of energy, and 200 × 1.6 × 10⁻¹⁹ J = 3.2 × 10⁻¹⁷ J. The name contains the word volt, but it does not measure voltage or potential, and it is not a charge either, so the answer in coulombs is wrong too.`,
  },
  [r`Write voltage as an equation, with its unit.`]: {
    question: r`A battery gives 3.0 J of energy to every 0.50 C of charge that passes through it. What is the battery's voltage?`,
    options: [r`3.5 V`, r`0.17 V`, r`6.0 V`, r`1.5 V`],
    correctAnswer: 2,
    explanation: r`Voltage is energy per charge: 3.0 J ÷ 0.50 C = 6.0 V. Multiplying the two numbers gives 1.5, dividing charge by energy gives 0.17, and adding them gives 3.5.`,
  },
  [r`What is the change in potential energy of a charge $q$ that moves through $\Delta V$?`]: {
    question: r`A charge of +3.0 C is moved from a point at 2 V to a point at 12 V. What is the change in its electric potential energy?`,
    options: [r`+30 J`, r`+3.3 J`, r`−30 J`, r`+36 J`],
    correctAnswer: 0,
    explanation: r`The potential difference is 12 V − 2 V = +10 V, so the change is +3.0 C × +10 V = +30 J. The negative answer takes the difference backwards, +36 J uses 12 V instead of the difference, and +3.3 J divides the 10 V by the charge.`,
  },
  [r`Which way do positive and negative charges move on their own?`]: {
    question: r`Point X is held at +5 V and point Y at −5 V. A free Na⁺ ion and a free Cl⁻ ion are each released midway between them. Which way does each ion move?`,
    options: [r`Na⁺ toward Y; Cl⁻ toward Y`, r`Na⁺ toward Y; Cl⁻ toward X`, r`Na⁺ toward X; Cl⁻ toward Y`, r`Na⁺ toward X; Cl⁻ toward X`],
    correctAnswer: 1,
    explanation: r`A positive charge moves on its own toward lower potential, so Na⁺ heads for Y, and a negative charge moves toward higher potential, so Cl⁻ heads for X. Swapping them sends each ion uphill in energy, and sending both the same way ignores the sign of the charge.`,
  },
  [r`What is one electron-volt?`]: {
    question: r`An electron gains 8.0 × 10⁻¹⁹ J as it crosses the gap between two plates. What is the potential difference between the plates? (e = 1.6 × 10⁻¹⁹ C)`,
    options: [r`12.8 V`, r`0.20 V`, r`8.0 V`, r`5.0 V`],
    correctAnswer: 3,
    explanation: r`One elementary charge gains 1.6 × 10⁻¹⁹ J for each volt it crosses, so 8.0 × 10⁻¹⁹ J means 5.0 V (the electron gained 5.0 eV). The answer 0.20 V divides upside down, 8.0 V just copies the energy figure, and 12.8 V multiplies 8.0 by 1.6.`,
  },
  [r`What is "ground" in a circuit?`]: {
    question: r`With the present ground, point P reads 9 V and point Q reads 4 V. The ground is moved to Q and nothing else changes. What are the new reading at P and the difference between P and Q?`,
    options: [r`P reads 5 V; the difference falls to 1 V`, r`P reads 5 V; the difference stays 5 V`, r`P reads 13 V; the difference stays 5 V`, r`P reads 9 V; the difference grows to 9 V`],
    correctAnswer: 1,
    explanation: r`Moving the ground lowers every potential by the same 4 V, so P reads 5 V, Q reads 0 V, and the difference between them is still 5 V. Keeping P at 9 V forgets that all potentials shift, 13 V shifts the wrong way, and no choice of ground can change a difference.`,
  },
  [r`How much voltage drops along an ideal wire?`]: {
    question: r`A 9 V ideal battery is joined to a single lamp by ideal wires: 2 m of wire on one side and 1 m on the other. What is the voltage across the lamp?`,
    options: [r`3 V`, r`4.5 V`, r`9 V`, r`6 V`],
    correctAnswer: 2,
    explanation: r`No voltage drops along an ideal wire of any length, so the whole 9 V appears across the lamp, the only element in the loop. The 6 V and 3 V answers share the voltage out by wire length, and 4.5 V gives half to the wires.`,
  },
  [r`Does a bulb use up current?`]: {
    question: r`Three ammeters sit in one loop: the first before a heater, the second between the heater and a motor, the third after the motor. The first reads 2.0 A. What do the second and third read?`,
    options: [r`1.0 A and 0 A`, r`2.0 A and 0 A`, r`1.5 A and 1.0 A`, r`2.0 A and 2.0 A`],
    correctAnswer: 3,
    explanation: r`Elements do not use up current: in a single loop the same current leaves each element as enters it, so every ammeter reads 2.0 A. The falling readings treat current as something consumed along the way, when what falls across each element is the voltage.`,
  },
  [r`A switch opens in a single loop. What is the current, and what is the voltage across the gap?`]: {
    question: r`A 6 V ideal battery, a 10 Ω resistor, a 20 Ω resistor and a switch form one loop. The switch is open. What are the voltages across the 20 Ω resistor and across the switch?`,
    options: [r`6 V across the resistor; 0 V across the switch`, r`0 V across the resistor; 6 V across the switch`, r`4 V across the resistor; 0 V across the switch`, r`4 V across the resistor; 2 V across the switch`],
    correctAnswer: 1,
    explanation: r`With the switch open no current flows, so neither resistor has a drop (IR = 0) and the whole 6 V appears across the gap. The 4 V values belong to the closed circuit, and putting 6 V on the resistor would need current through it.`,
  },
  [r`In the water analogy, what stands for the battery, the voltage, the current and a resistor?`]: {
    question: r`In a water model of a circuit, one narrow section of pipe is swapped for an even narrower one, and the pump is left unchanged. What does this stand for in the circuit?`,
    options: [r`A weaker battery, so less current flows`, r`A smaller resistance, so more current flows`, r`A larger voltage, so more current flows`, r`A larger resistance, so less current flows`],
    correctAnswer: 3,
    explanation: r`A narrow pipe stands for a resistor, so a narrower one is a larger resistance, and with the same pump (battery) the flow rate (current) falls. The pump, not the pipe, sets the pressure difference that stands for voltage, so the choices about voltage or the battery change the wrong part.`,
  },
  // Video 4
  [r`How do you find the energy a battery delivers in a time $\Delta t$?`]: {
    question: r`A 1.5 V penlight cell pushes 0.20 A through a bulb, and the bulb is left on for 5.0 minutes. How many joules does the bulb receive?`,
    options: [r`1.5 J`, r`90 J`, r`60 J`, r`0.30 J`],
    correctAnswer: 1,
    explanation: r`Find the charge first: 0.20 A × 300 s = 60 C, and then the energy is 60 C × 1.5 V = 90 J. The answer 1.5 J leaves the time as 5.0, 0.30 is the power in watts with no time at all, and 60 is the charge in coulombs, one step short.`,
  },
  [r`What does $IV$ give: energy or power?`]: {
    question: r`A heater draws 2.0 A from a 10 V supply. Which statement about it is correct?`,
    options: [r`It uses 20 J, however long it runs`, r`It uses 20 W, which is 200 J in 10 s`, r`It uses 20 W, which is 2.0 J in 10 s`, r`It uses 20 J, which is 200 W in 10 s`],
    correctAnswer: 1,
    explanation: r`Current times voltage is power: 2.0 A × 10 V = 20 W, and energy is power times time, 20 W × 10 s = 200 J. Calling the 20 an energy mixes up watts and joules, and 2.0 J comes from dividing by the time instead of multiplying.`,
  },
  [r`How much energy does one elementary charge carry across $V$ volts, in electron-volts?`]: {
    question: r`A mass spectrometer speeds up a Ca²⁺ ion by letting it fall through 30 V. How many electron-volts of energy does the ion pick up?`,
    options: [r`30 eV`, r`15 eV`, r`60 eV`, r`120 eV`],
    correctAnswer: 2,
    explanation: r`One elementary charge crossing 30 V gains 30 eV, and Ca²⁺ carries two elementary charges, so it gains 60 eV. The 30 eV answer treats the ion as singly charged, 15 eV halves instead of doubling, and 120 eV doubles twice.`,
  },
  [r`How do you convert electron-volts to joules?`]: {
    question: r`An ion loses 0.050 eV of potential energy as it crosses a membrane. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
    options: [r`3.1 × 10¹⁷ J`, r`8.0 × 10⁻¹⁸ J`, r`8.0 × 10⁻²¹ J`, r`3.2 × 10⁻¹⁸ J`],
    correctAnswer: 2,
    explanation: r`Multiply by the conversion factor: 0.050 × 1.6 × 10⁻¹⁹ J = 8.0 × 10⁻²¹ J. Dividing 0.050 by the factor gives the huge 10¹⁷ value, dividing the factor by 0.050 gives 3.2 × 10⁻¹⁸ J, and 8.0 × 10⁻¹⁸ J slips three powers of ten.`,
  },
  [r`In $\Delta U = q\,\Delta V$, how are the signs set?`]: {
    question: r`A pump drags an anion of charge −e across a membrane, starting where the potential is +20 mV and ending where it is −30 mV. What is ΔU for the anion?`,
    options: [r`+0.050 eV`, r`−0.050 eV`, r`−0.010 eV`, r`+0.010 eV`],
    correctAnswer: 0,
    explanation: r`Final minus initial gives a potential difference of −30 mV − 20 mV = −50 mV, and multiplying by the negative charge gives a positive change, +0.050 eV: the anion gains potential energy. The negative answer drops the sign of the charge, and the 0.010 eV values add the two potentials instead of subtracting them.`,
  },
  [r`About how large is a resting membrane potential?`]: {
    question: r`A Na⁺ ion slips through a channel into a resting nerve cell from the surrounding fluid (taken as 0 V). Using a typical resting membrane potential, roughly how much potential energy does the ion give up?`,
    options: [r`About 7 eV`, r`About 0.07 eV`, r`About 70 eV`, r`About 0.7 eV`],
    correctAnswer: 1,
    explanation: r`A resting membrane sits near −70 mV inside, so one elementary charge moving in loses about 70 meV, which is 0.07 eV. The value 70 eV forgets the milli in millivolts, and 0.7 eV and 7 eV would need membrane potentials of 700 mV and 7 V.`,
  },
  // Video 5
  [r`What symbol stands for resistance, and what is its SI unit?`]: {
    question: r`A data sheet lists a heating element as "24 V/A". What property has been listed?`,
    options: [r`A power rating of 24 W`, r`A resistance of 24 Ω`, r`A resistivity of 24 Ω·m`, r`A conductance of 24 S`],
    correctAnswer: 1,
    explanation: r`A volt per ampere is an ohm, so the figure is the element's resistance. A conductance would be in amperes per volt, a power would be volts times amperes, not volts divided by amperes, and a resistivity needs a length in its unit.`,
  },
  [r`What symbol stands for resistivity, and what is its SI unit?`]: {
    question: r`A 1 m wire and a 5 m wire are cut from the same reel of copper, so they have the same thickness. How do their resistivity and resistance compare?`,
    options: [r`The 5 m wire has more resistivity and more resistance`, r`Same resistivity and the same resistance for both`, r`Same resistivity; the 5 m wire has more resistance`, r`Same resistance; the 5 m wire has more resistivity`],
    correctAnswer: 2,
    explanation: r`Resistivity belongs to the material, so both copper wires share it, while resistance belongs to the particular wire and grows with length. The choices that give the longer wire more resistivity treat a material property as if it depended on the piece, and equal resistances ignore the length.`,
  },
  [r`What symbol stands for conductance, and what is its SI unit?`]: {
    question: r`Which line correctly reports the conductance of a 50 Ω resistor?`,
    options: [r`G = 50 S`, r`G = 0.02 S`, r`G = 0.02 Ω`, r`ρ = 0.02 S`],
    correctAnswer: 1,
    explanation: r`Conductance has the symbol G, is the reciprocal of resistance, and is measured in siemens: 1 ÷ 50 Ω = 0.02 S. Keeping the ohm uses the unit of resistance, 50 S forgets to take the reciprocal, and ρ is the symbol for resistivity.`,
  },
  [r`In $R = \rho L/A$, what are the SI units of $L$ and $A$?`]: {
    question: r`A wire is 50 cm long and has a cross-sectional area of 2.0 mm². Which values belong in $R = \rho L/A$?`,
    options: [r`L = 0.50 m and A = 2.0 × 10⁻⁶ A`, r`L = 50 m and A = 2.0 × 10⁻⁶ m²`, r`L = 0.50 m and A = 2.0 × 10⁻⁶ m²`, r`L = 0.50 m and A = 2.0 × 10⁻³ m²`],
    correctAnswer: 2,
    explanation: r`Length goes in meters and area in square meters: 50 cm = 0.50 m, and since 1 mm = 10⁻³ m, 1 mm² = 10⁻⁶ m². Using 10⁻³ forgets to square the conversion, 50 m leaves the length in centimeters, and the last choice gives the area the unit of current.`,
  },
  [r`State Ohm's law and the unit of resistance.`]: {
    question: r`The tissue between two skin electrodes has a resistance of 2.0 kΩ, and a stimulator pushes 3.0 mA through it. How many volts must the stimulator supply?`,
    options: [r`0.0060 V`, r`6000 V`, r`0.67 V`, r`6.0 V`],
    correctAnswer: 3,
    explanation: r`Ohm's law in base units gives V = IR = 3.0 × 10⁻³ A × 2.0 × 10³ Ω = 6.0 V. The answer 6000 V leaves the current in milliamperes as 3.0, 0.0060 V leaves the resistance as 2.0, and 0.67 divides 2.0 by 3.0.`,
  },
  [r`What is conductance?`]: {
    question: r`As a humidity probe gets damp, its conductance doubles from 0.10 S to 0.20 S while 5.0 V is kept across it. What happens to its resistance and its current?`,
    options: [r`R falls to 5 Ω and I rises to 1.0 A`, r`R rises to 20 Ω and I falls to 0.25 A`, r`R rises to 20 Ω and I rises to 1.0 A`, r`R falls to 5 Ω and I falls to 0.25 A`],
    correctAnswer: 0,
    explanation: r`Resistance is the reciprocal of conductance, so it falls from 10 Ω to 5 Ω, and the current at 5.0 V rises from 0.50 A to 1.0 A. The 20 Ω choices double the resistance along with the conductance, and a falling current with a falling resistance contradicts Ohm's law.`,
  },
  [r`Read $V = IR$ three ways: fixed $R$, fixed $V$, fixed $I$.`]: {
    question: r`Resistor X has three times the resistance of resistor Y. Compare X with Y in two cases: first with each one connected alone across the same battery, then with both in one series path.`,
    options: [r`One third the current; then one third the voltage`, r`Three times the current; then three times the voltage`, r`One third the current; then three times the voltage`, r`Three times the current; then one third the voltage`],
    correctAnswer: 2,
    explanation: r`At a fixed voltage the current goes as 1/R, so X carries one third of the current. In one series path the current is shared, so the voltage goes as R and X has three times the voltage. The other choices run one or both of these proportions the wrong way.`,
  },
  [r`What does the $I$–$V$ graph of an ohmic element look like (current on the vertical axis)?`]: {
    question: r`A carbon film component is ohmic. Plotted with current upward and voltage along the bottom, its line has a gradient of 0.25 A/V. What is its resistance, and what current does it carry at 8 V?`,
    options: [r`4.0 Ω, and 2.0 A at 8 V`, r`0.25 Ω, and 32 A at 8 V`, r`0.25 Ω, and 2.0 A at 8 V`, r`4.0 Ω, and 32 A at 8 V`],
    correctAnswer: 0,
    explanation: r`With current plotted upward the slope (gradient) is 1/R, so R = 1 ÷ 0.25 = 4.0 Ω and the current at 8 V is 8 ÷ 4.0 = 2.0 A. Reading the slope itself as the resistance gives 0.25 Ω, and 32 A comes from dividing 8 V by 0.25.`,
  },
  [r`Why is a filament bulb not ohmic?`]: {
    question: r`At the moment a cold filament bulb is switched on, its current surges, then settles to a lower steady value at the same voltage. Why?`,
    options: [r`The filament heats up, so its resistance rises`, r`The filament heats up, so its resistance falls`, r`The battery voltage sags as the bulb drains it`, r`The filament uses up current once it is glowing`],
    correctAnswer: 0,
    explanation: r`A filament is not ohmic: its resistance rises as it heats, so at a fixed voltage the current drops from its cold value. A falling resistance would make the current climb instead, the voltage is stated to be the same, and current is never used up by a bulb.`,
  },
  [r`Write the resistance of a wire in terms of its material and shape.`]: {
    question: r`A heating wire has resistivity 1.0 × 10⁻⁶ Ω·m, length 2.0 m and cross-sectional area 5.0 × 10⁻⁷ m². What is its resistance?`,
    options: [r`0.25 Ω`, r`1.0 × 10⁻¹² Ω`, r`4.0 Ω`, r`1.0 Ω`],
    correctAnswer: 2,
    explanation: r`Resistance is ρL/A = (1.0 × 10⁻⁶)(2.0) ÷ (5.0 × 10⁻⁷) = 4.0 Ω. Putting the length underneath as well gives 1.0 Ω, turning the whole fraction upside down gives 0.25 Ω, and multiplying by the area instead of dividing gives 10⁻¹² Ω.`,
  },
  [r`A wire's diameter doubles. What happens to its resistance?`]: {
    question: r`A 2.0 Ω wire is replaced by one of the same metal and the same length, but with one third of the diameter. What is the resistance of the new wire?`,
    options: [r`6.0 Ω`, r`0.22 Ω`, r`0.67 Ω`, r`18 Ω`],
    correctAnswer: 3,
    explanation: r`Area goes as diameter squared, so one third of the diameter means one ninth of the area and nine times the resistance: 18 Ω. The answer 6.0 Ω uses the diameter factor without squaring it, and the two values below 2.0 Ω make a thinner wire conduct better.`,
  },
  [r`A wire is stretched to $n$ times its length at constant volume. What happens to its resistance?`]: {
    question: r`A 0.50 Ω wire is drawn out to 4 times its original length, with its volume unchanged. What is its new resistance?`,
    options: [r`8.0 Ω`, r`2.0 Ω`, r`0.13 Ω`, r`32 Ω`],
    correctAnswer: 0,
    explanation: r`Stretching by a factor n at constant volume multiplies the length by n and divides the area by n, so R is multiplied by n² = 16, giving 8.0 Ω. The answer 2.0 Ω counts only the longer length, 32 Ω uses n³, and 0.13 Ω divides by 4.`,
  },
  [r`How does heating a metal change its resistance?`]: {
    question: r`A copper coil stays connected to a fixed 6 V supply. As the coil warms up in use, what happens to the current through it?`,
    options: [r`It holds steady, because the voltage is fixed`, r`It falls, because the coil's resistance rises`, r`It rises, because the coil's resistance falls`, r`It rises, because hot electrons drift faster`],
    correctAnswer: 1,
    explanation: r`Heating a metal raises its resistance, because the hotter lattice scatters the electrons more often, so at a fixed voltage the current falls. A falling resistance is the behaviour of an electrolyte, not a metal, and a fixed voltage fixes the current only if the resistance stays fixed too.`,
  },
  [r`How does an axon's internal resistance per length depend on its radius?`]: {
    question: r`A giant axon has 10 times the radius of a small axon filled with the same axoplasm. The giant axon's internal resistance per unit length is what fraction of the small axon's?`,
    options: [r`1/10`, r`1/10 000`, r`1/1000`, r`1/100`],
    correctAnswer: 3,
    explanation: r`Internal resistance per length goes as one over the cross-sectional area, which is 1/r², so 10 times the radius gives 1/100. The 1/10 answer forgets to square the radius, and 1/10 000 is the r⁴ rule for fluid flow in a pipe, which does not apply to electrical resistance.`,
  },
  // Video 6
  [r`Which equation rescales a wire's resistance?`]: {
    question: r`A 6.0 Ω wire is replaced by a wire of the same metal with 3 times the length and half the cross-sectional area. What is the new resistance?`,
    options: [r`4.0 Ω`, r`1.0 Ω`, r`9.0 Ω`, r`36 Ω`],
    correctAnswer: 3,
    explanation: r`From R = ρL/A, tripling the length triples R and halving the area doubles it, so R = 6.0 × 3 × 2 = 36 Ω. The answer 9.0 Ω treats the smaller area as lowering R, 4.0 Ω inverts the length factor, and 1.0 Ω inverts both.`,
  },
  [r`How do you rescale a resistance with factors?`]: {
    question: r`A 12 Ω heating coil is rewound with wire of the same alloy that is 3 times as long and has double the diameter. What does the rewound coil measure?`,
    options: [r`9.0 Ω`, r`72 Ω`, r`144 Ω`, r`18 Ω`],
    correctAnswer: 0,
    explanation: r`New R = old R × length factor ÷ area factor, and the area factor is the diameter factor squared: 12 × 3 ÷ 4 = 9.0 Ω. Dividing by 2 instead of 4 gives 18 Ω, and the two large answers multiply by the diameter or area factor when a fatter wire should resist less.`,
  },
  [r`A wire is stretched to 3 times its length at constant volume. By what factor does $R$ change?`]: {
    question: r`A 27 Ω wire of soft metal is pressed, with its volume unchanged, into a wire one third of its original length. What is its new resistance?`,
    options: [r`243 Ω`, r`9.0 Ω`, r`81 Ω`, r`3.0 Ω`],
    correctAnswer: 3,
    explanation: r`At constant volume a wire one third as long has three times the area, so the resistance changes by (1/3) ÷ 3 = 1/9, giving 3.0 Ω. The answer 9.0 Ω counts only the shorter length, and the two large answers apply the factors of 3 and 9 as if the wire had been stretched.`,
  },
  [r`How do you read the resistance at one point of an $I$–$V$ graph?`]: {
    question: r`A lab group records two operating points for a small torch lamp: 0.40 A at 2.0 V, and 0.80 A at 8.0 V. What is the lamp's resistance while it runs at 8.0 V?`,
    options: [r`10 Ω`, r`0.10 Ω`, r`5.0 Ω`, r`15 Ω`],
    correctAnswer: 0,
    explanation: r`The resistance at a point is V/I at that point: 8.0 V ÷ 0.80 A = 10 Ω. The answer 15 Ω is the slope between the two points, 6.0 V ÷ 0.40 A, while 5.0 Ω is the resistance at the 2.0 V point, and 0.10 divides current by voltage.`,
  },
  [r`How does $V/I$ behave along an ohmic line, and along a filament curve?`]: {
    question: r`Two elements are tested at 3 V and at 6 V. Element X carries 0.1 A and then 0.2 A. Element Y carries 0.3 A and then 0.4 A. Which element is ohmic?`,
    options: [r`Both: each current rises by 0.1 A`, r`Only Y: its V/I stays at 10 Ω`, r`Only X: its V/I stays at 30 Ω`, r`Neither: no V/I ratio stays fixed`],
    correctAnswer: 2,
    explanation: r`For X, V/I is 30 Ω at both voltages, the mark of an ohmic element. For Y it grows from 10 Ω to 15 Ω, as it would for a heating filament. A current that merely rises with voltage is not enough; the ratio V/I has to stay the same.`,
  },
  // Video 7
  [r`What does $R_{eq}$ stand for, and what is its SI unit?`]: {
    question: r`A 12 V ideal battery supplies 3 A to a network of five resistors. What single resistor could replace the whole network without changing the battery current?`,
    options: [r`0.25 Ω`, r`15 Ω`, r`36 Ω`, r`4 Ω`],
    correctAnswer: 3,
    explanation: r`The equivalent resistance is the one resistance that draws the same current from the battery: 12 V ÷ 3 A = 4 Ω. Multiplying gives 36, dividing current by voltage gives 0.25, and 15 comes from multiplying the current by the number of resistors.`,
  },
  [r`In series, what is the same for every element, and what adds?`]: {
    question: r`Two different lamps are in series across a battery. Lamp 1 carries 0.3 A and has 4 V across it; lamp 2 has 8 V across it. What are the current in lamp 2 and the battery voltage?`,
    options: [r`0.3 A and 4 V`, r`0.3 A and 12 V`, r`0.6 A and 12 V`, r`0.6 A and 8 V`],
    correctAnswer: 1,
    explanation: r`In series the current is the same in every element, so lamp 2 also carries 0.3 A, and the voltages add to the battery voltage, 4 V + 8 V = 12 V. The 0.6 A answers scale the current with the voltage, and 4 V or 8 V is the voltage of just one lamp.`,
  },
  [r`What is the equivalent resistance of resistors in series?`]: {
    question: r`A 12 Ω resistor and a 24 Ω resistor are joined end to end, so that there is one path with no junction between them. What is their equivalent resistance?`,
    options: [r`18 Ω`, r`8 Ω`, r`36 Ω`, r`12 Ω`],
    correctAnswer: 2,
    explanation: r`One path with no junction is a series connection, and series resistances add: 12 Ω + 24 Ω = 36 Ω, larger than either one. The answer 8 Ω is the parallel result, 18 Ω is the average, and 12 Ω is the difference.`,
  },
  [r`In parallel, what is the same for every element, and what adds?`]: {
    question: r`Two different heaters are in parallel across a supply. Heater 1 has 6 V across it and carries 2 A; heater 2 carries 1 A. What are the voltage across heater 2 and the current from the supply?`,
    options: [r`12 V and 1 A`, r`6 V and 3 A`, r`3 V and 3 A`, r`6 V and 2 A`],
    correctAnswer: 1,
    explanation: r`In parallel every branch has the same voltage, so heater 2 also has 6 V, and the branch currents add: 2 A + 1 A = 3 A. Scaling the voltage with the current gives 3 V, 2 A is the current of one branch only, and 12 V adds voltages as if the heaters were in series.`,
  },
  [r`What is the equivalent resistance of resistors in parallel?`]: {
    question: r`A 20 Ω heater, another 20 Ω heater and a 10 Ω fan each sit in a branch of their own across the same pair of supply rails. What single resistance would draw the same total current?`,
    options: [r`5.0 Ω`, r`0.20 Ω`, r`17 Ω`, r`50 Ω`],
    correctAnswer: 0,
    explanation: r`Add the reciprocals: 1/20 + 1/20 + 1/10 = 4/20, so the equivalent resistance is 20/4 = 5.0 Ω, smaller than the smallest branch. The answer 50 Ω adds the resistances as if in series, 0.20 is the reciprocal sum left uninverted, and 17 Ω is the average.`,
  },
  [r`What is the shortcut for two resistors in parallel?`]: {
    question: r`A 20 Ω speaker and a 30 Ω speaker are wired side by side across the same two amplifier terminals. What single load does the amplifier see?`,
    options: [r`50 Ω`, r`25 Ω`, r`12 Ω`, r`600 Ω`],
    correctAnswer: 2,
    explanation: r`Product over sum gives (20 × 30) ÷ (20 + 30) = 600 ÷ 50 = 12 Ω. The answer 50 Ω is the sum alone, which is the series result, 600 is the product alone, and 25 Ω is the average; a parallel pair must come out below 20 Ω.`,
  },
  [r`What do $n$ identical resistors $R$ give in series, and in parallel?`]: {
    question: r`A string of 10 identical lamps wired in series has a total resistance of 200 Ω. The same 10 lamps are rewired in parallel. What is their total resistance now?`,
    options: [r`0.050 Ω`, r`200 Ω`, r`20 Ω`, r`2.0 Ω`],
    correctAnswer: 3,
    explanation: r`In series the total is nR, so each lamp is 200 ÷ 10 = 20 Ω, and in parallel the total is R/n = 20 ÷ 10 = 2.0 Ω. Stopping at 20 Ω gives one lamp, 200 Ω assumes rewiring changes nothing, and 0.050 divides 10 by 200.`,
  },
  [r`A branch is added in parallel. What happens to $R_{eq}$ and to the total current?`]: {
    question: r`A 12 V car battery runs a 6 Ω headlamp. The driver then switches on a 12 Ω heater that has a branch of its own across the battery. What happens to the total load on the battery and to the current it supplies?`,
    options: [r`Load rises to 18 Ω; current falls to 0.67 A`, r`Load falls to 4 Ω; current rises to 3 A`, r`Load rises to 18 Ω; current stays at 2 A`, r`Load falls to 4 Ω; current stays at 2 A`],
    correctAnswer: 1,
    explanation: r`An added parallel branch gives the current another path, so the equivalent resistance falls to (6 × 12) ÷ 18 = 4 Ω and the battery current rises from 2 A to 12 ÷ 4 = 3 A. The 18 Ω choices add the two resistances as if in series, and the current cannot stay at 2 A when the new branch draws 1 A of its own.`,
  },
  [r`How do you tell series from parallel?`]: {
    question: r`On a diagram, resistors X and Y are drawn one after the other along a straight line. Tracing the wires shows that each has one end at node P and the other end at node Q. How are X and Y connected?`,
    options: [r`In neither way, since node P touches them both`, r`In series, since they are drawn along one line`, r`In parallel, since both join the same two nodes`, r`In series, since the same current is in both`],
    correctAnswer: 2,
    explanation: r`Series and parallel are decided by nodes, not by the drawing: both ends of X and Y join the same two nodes, so they are in parallel and share a voltage. Being drawn in a line means nothing, and they do not have to carry the same current, since the current divides at node P.`,
  },
  [r`What do a short (a bare wire across an element) and an open branch do?`]: {
    question: r`A 12 V supply feeds a 2 Ω motor and a 4 Ω lamp in one loop. A dropped spanner then bridges the two terminals of the lamp with bare metal. What current does the supply deliver now?`,
    options: [r`6 A`, r`0 A`, r`3 A`, r`2 A`],
    correctAnswer: 0,
    explanation: r`The bare metal shorts the 4 Ω lamp, which drops out, leaving 12 V across the 2 Ω motor: 12 ÷ 2 = 6 A. The answer 2 A is the current before the short, 3 A removes the motor instead of the lamp, and 0 A treats the short as a break in the loop.`,
  },
  // Video 8
  [r`What is the recipe for a series string?`]: {
    question: r`A 60 V supply feeds a single chain of three heating elements: 5 Ω, then 10 Ω, then 15 Ω. What current flows in the chain, and how many volts appear on the 10 Ω element?`,
    options: [r`6 A and 60 V`, r`2 A and 20 V`, r`6 A and 20 V`, r`2 A and 60 V`],
    correctAnswer: 1,
    explanation: r`Add the resistances to get 30 Ω, so the current is 60 ÷ 30 = 2 A, and the drop on the 10 Ω element is 2 A × 10 Ω = 20 V. The 6 A answers divide the supply voltage by 10 Ω alone, and 60 V gives the whole supply voltage to one element.`,
  },
  [r`What is the recipe for resistors in parallel across a battery?`]: {
    question: r`A 24 V supply has an 8 Ω kettle element and a 12 Ω toaster element each plugged straight across it. How much current does the toaster take, and how much leaves the supply?`,
    options: [r`1.2 A in the toaster; 1.2 A in total`, r`3 A in the toaster; 5 A in total`, r`2 A in the toaster; 5 A in total`, r`2 A in the toaster; 2 A in total`],
    correctAnswer: 2,
    explanation: r`Each branch has the full 24 V, so the 12 Ω toaster takes 24 ÷ 12 = 2 A, the 8 Ω kettle takes 3 A, and the total is 5 A. The 1.2 A answer treats the two elements as a 20 Ω series string, a total of 2 A leaves out the kettle, and 3 A is the kettle's current, not the toaster's.`,
  },
  [r`After adding $1/R_1 + 1/R_2 + \cdots$, what is the last step?`]: {
    question: r`Three loads of 8 Ω, 8 Ω and 4 Ω share the same two terminals. A student adds 1/8 + 1/8 + 1/4, gets 0.50, and is about to write that down as the final result. What should be written instead?`,
    options: [r`20 Ω`, r`4.0 Ω`, r`2.0 Ω`, r`0.50 Ω`],
    correctAnswer: 2,
    explanation: r`The sum of the reciprocals is 1/R_eq, so it still has to be inverted: 1 ÷ 0.50 = 2.0 Ω. Reporting 0.50 Ω stops one step early, 20 Ω adds the resistances as if in series, and 4.0 Ω is just the smallest branch, which a parallel group must come out below.`,
  },
  [r`What quick check catches a wrong $R_{eq}$?`]: {
    question: r`Four results are written in a student's notes. Which one must contain a mistake?`,
    options: [r`9 Ω and 18 Ω in series give 27 Ω`, r`5 Ω and 20 Ω in parallel give 4 Ω`, r`8 Ω and 24 Ω in parallel give 6 Ω`, r`12 Ω and 20 Ω in parallel give 16 Ω`],
    correctAnswer: 3,
    explanation: r`A parallel result must be smaller than the smallest branch, and 16 Ω is larger than 12 Ω, so that line is wrong (16 Ω is the average; the true value is 7.5 Ω). The other parallel results sit below their smallest branch, and the series result is larger than its largest resistor, as it must be.`,
  },
  [r`Do series resistors split the battery voltage equally?`]: {
    question: r`A 9 V supply feeds a 100 Ω sensor and a 200 Ω sensor wired one after the other in a single loop. How is the 9 V shared between the sensors?`,
    options: [r`6 V on the 100 Ω and 3 V on the 200 Ω`, r`3 V on the 100 Ω and 6 V on the 200 Ω`, r`4.5 V on the 100 Ω and 4.5 V on the 200 Ω`, r`9 V on the 100 Ω and 9 V on the 200 Ω`],
    correctAnswer: 1,
    explanation: r`The shared current is 9 V ÷ 300 Ω = 0.03 A, so the drops are 3 V and 6 V: the larger resistance takes the larger share. Equal 4.5 V shares would be right only for equal resistances, the reversed answer gives the larger share to the smaller resistance, and 9 V on each is the parallel rule.`,
  },
}
