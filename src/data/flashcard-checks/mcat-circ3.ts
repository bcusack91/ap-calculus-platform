import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Circuits Part 3 video deck (`mcat-circ3`): one
 * per review card, keyed by the card's exact front text. Each asks the student
 * to use the card's idea in a new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`What symbol stands for EMF, and what is its SI unit?`]: {
    question: r`A lab report gives a battery's ε as the number 6.0 but leaves the unit off. Which of these is a correct way to complete it?`,
    options: [
      r`6.0 N/C, newtons per coulomb`,
      r`6.0 J/s, joules per second`,
      r`6.0 J/C, joules per coulomb`,
      r`6.0 C/s, coulombs per second`,
    ],
    correctAnswer: 2,
    explanation: r`ε is the EMF, measured in volts, and one volt is one joule per coulomb, so 6.0 J/C is right. Newtons per coulomb is the unit of electric field and comes from treating EMF as a force, which it is not. Joules per second is power, and coulombs per second is current.`,
  },
  [r`What symbol stands for internal resistance, and what is its SI unit?`]: {
    question: r`A circuit note for a battery and its load reads "r = 0.50 Ω, R = 4.0 Ω, I = 2.0 A". How much power is turned to heat inside the battery?`,
    options: [r`2.0 W`, r`16 W`, r`1.0 W`, r`18 W`],
    correctAnswer: 0,
    explanation: r`Lower-case r is the internal resistance, so the heat inside the battery is I²r = 2.0² × 0.50 = 2.0 W. The 16 W answer uses the load R, which is outside the battery, and 18 W adds the two. The 1.0 answer is Ir, a voltage drop, not a power.`,
  },
  [r`What symbol stands for terminal voltage, and what is its SI unit?`]: {
    question: r`A data table for a battery lists ε = 12.0 V and $V_{\text{term}}$ = 11.4 V while it supplies 2.0 A. What does a voltmeter across the battery read while that current flows, and what is r?`,
    options: [
      r`12.0 V, and r is 0.30 Ω`,
      r`11.4 V, and r is 5.7 Ω`,
      r`12.0 V, and r is 6.0 Ω`,
      r`11.4 V, and r is 0.30 Ω`,
    ],
    correctAnswer: 3,
    explanation: r`$V_{\text{term}}$ is the voltage between the terminals, so the meter reads 11.4 V. The missing 0.6 V is dropped inside, so r = 0.6 V ÷ 2.0 A = 0.30 Ω. A reading of 12.0 V confuses the terminal voltage with the EMF, and 5.7 Ω or 6.0 Ω comes from dividing a whole voltage by the current instead of the difference.`,
  },
  [r`What is a battery's EMF?`]: {
    question: r`A phone battery with an EMF of 4.0 V supplies a steady 2.0 A for 10 s. How much work does its chemistry do on the charge it pushes through in that time?`,
    options: [r`8.0 J`, r`80 J`, r`20 J`, r`40 J`],
    correctAnswer: 1,
    explanation: r`EMF is work per coulomb, so W = εq. The charge moved is q = It = 20 coulombs, and W = 4.0 V × 20 coulombs = 80 J. The 8.0 answer is ε × I, which is a power, the 20 answer is only the charge, and the 40 answer multiplies ε by the time instead of the charge.`,
  },
  [r`How is a real battery modelled, and what current does it drive through a load?`]: {
    question: r`A battery with ε = 12 V and internal resistance 2.0 Ω drives a 4.0 Ω load. The load is then replaced by a 10 Ω load. What happens to the current?`,
    options: [
      r`It falls from 3.0 A to 1.2 A`,
      r`It falls from 6.0 A to 1.2 A`,
      r`It falls from 2.0 A to 1.0 A`,
      r`It stays at 6.0 A throughout`,
    ],
    correctAnswer: 2,
    explanation: r`The internal resistance is in series with the load, so I = ε/(R + r): 12/6.0 = 2.0 A at first and 12/12 = 1.0 A afterward. Getting 3.0 A and 1.2 A means dividing by the load alone. The 6.0 A figure is ε/r, which is the current only when the terminals are shorted.`,
  },
  [r`What is a battery's terminal voltage while it supplies current?`]: {
    question: r`A 6.0 V battery has an internal resistance of 0.40 Ω. It supplies 1.0 A to one lamp. A second lamp is added and the battery now supplies 2.5 A. How does its terminal voltage change?`,
    options: [
      r`From 5.6 V down to 5.0 V`,
      r`From 6.4 V up to 7.0 V`,
      r`From 0.4 V up to 1.0 V`,
      r`It holds at 6.0 V throughout`,
    ],
    correctAnswer: 0,
    explanation: r`While supplying current, the terminal voltage is ε − Ir: 6.0 − 0.4 = 5.6 V, then 6.0 − 1.0 = 5.0 V. More current means more sag. Adding Ir (6.4 V, 7.0 V) is the charging rule, 0.4 V and 1.0 V are only the internal drops, and a steady 6.0 V ignores the internal resistance.`,
  },
  [r`What is the terminal voltage of a battery that is being charged?`]: {
    question: r`A phone cell has an EMF of 3.6 V and an internal resistance of 0.10 Ω. While it is being charged at 2.0 A, what does a voltmeter across its terminals read?`,
    options: [r`3.4 V`, r`3.8 V`, r`3.6 V`, r`0.2 V`],
    correctAnswer: 1,
    explanation: r`During charging the current is forced backward through the cell, so the terminal voltage is ε + Ir = 3.6 + 0.2 = 3.8 V. The 3.4 V answer uses ε − Ir, which is the rule for a cell that is supplying current. 3.6 V ignores the internal drop, and 0.2 V is the internal drop alone.`,
  },
  [r`What happens when a bare wire shorts a battery's terminals?`]: {
    question: r`A coin of negligible resistance bridges the terminals of a 1.5 V cell, and 30 A flows. What is the cell's internal resistance, and what is its terminal voltage during the short?`,
    options: [
      r`20 Ω, with 1.5 V at the terminals`,
      r`0.050 Ω, with 1.5 V at the terminals`,
      r`20 Ω, with 0 V at the terminals`,
      r`0.050 Ω, with 0 V at the terminals`,
    ],
    correctAnswer: 3,
    explanation: r`In a short only r limits the current, so r = ε/I = 1.5/30 = 0.050 Ω, and with no outside resistance the terminal voltage is zero. The 20 Ω answers divide the current by the EMF. Keeping 1.5 V at the terminals forgets that the whole EMF is dropped across r inside the cell.`,
  },
  [r`Where does the power the battery's chemistry supplies go?`]: {
    question: r`A battery with an EMF of 12 V supplies 2.0 A to a motor, and its terminal voltage is 10 V. How much power is turned to heat inside the battery?`,
    options: [r`20 W`, r`24 W`, r`4.0 W`, r`44 W`],
    correctAnswer: 2,
    explanation: r`The chemistry supplies εI = 24 W and the motor receives $V_{\text{term}} I$ = 20 W, so the missing 4.0 W heats the internal resistance. 20 W is the load's share and 24 W is the total supplied. 44 W adds the two instead of subtracting.`,
  },
  [r`Is charge used up in the load?`]: {
    question: r`An ammeter in the wire entering a lit bulb reads 0.40 A. What does an identical ammeter in the wire leaving the bulb read, and what happened to the charge inside the bulb?`,
    options: [
      r`0.40 A; the charge gave up its energy`,
      r`0.00 A; the charge was all used up`,
      r`0.20 A; half the charge was used up`,
      r`0.40 A; the charge kept all its energy`,
    ],
    correctAnswer: 0,
    explanation: r`Every coulomb that enters the bulb leaves it and returns to the battery, so the second meter also reads 0.40 A. What the bulb takes is energy, which becomes light and heat. Readings of 0.00 A or 0.20 A treat charge as a fuel that is burned, and charge that kept all its energy could not light the bulb.`,
  },
  [r`Why can an old battery still read its full voltage on a voltmeter?`]: {
    question: r`An old battery has an EMF of 9.0 V, but its internal resistance has risen to 6.0 Ω. What does an ideal voltmeter across its terminals read with nothing else attached, and then with a 3.0 Ω lamp attached?`,
    options: [
      r`9.0 V unloaded, 9.0 V loaded`,
      r`3.0 V unloaded, 3.0 V loaded`,
      r`9.0 V unloaded, 6.0 V loaded`,
      r`9.0 V unloaded, 3.0 V loaded`,
    ],
    correctAnswer: 3,
    explanation: r`Unloaded, almost no current flows, so there is no Ir drop and the meter shows the full 9.0 V. With the lamp, I = 9.0/(3.0 + 6.0) = 1.0 A and the terminals sit at 9.0 − 6.0 = 3.0 V. "6.0 V loaded" is the drop inside the battery, not what is left, and 9.0 V loaded ignores the large r.`,
  },

  // Video 2
  [r`What does an ideal voltmeter read across a battery with nothing else attached?`]: {
    question: r`A battery has ε = 12 V and r = 3.0 Ω. Only an ideal voltmeter is connected across it. Roughly what current flows through the battery, and what does the meter show?`,
    options: [
      r`About 4 A, and it shows 0 V`,
      r`About 0 A, and it shows 12 V`,
      r`About 4 A, and it shows 12 V`,
      r`About 0 A, and it shows 0 V`,
    ],
    correctAnswer: 1,
    explanation: r`An ideal voltmeter has a nearly infinite resistance, so almost no current flows, nothing is dropped across r, and it shows the full EMF of 12 V. A current of 4 A is ε/r, which treats the voltmeter as a wire. With no current there is no drop, so the reading cannot be 0 V.`,
  },
  [r`A known load $R$ is connected and the terminal voltage drops to $V_{\text{term}}$. How do you find the current and the internal resistance?`]: {
    question: r`With its terminals open, a cell measures 12 V. Wiring a 5.0 Ω heater across it pulls the measurement down to 10 V. How large is r for this cell?`,
    options: [r`0.40 Ω`, r`5.0 Ω`, r`1.0 Ω`, r`6.0 Ω`],
    correctAnswer: 2,
    explanation: r`The current is the terminal voltage over the load, 10/5.0 = 2.0 A, and the 2.0 V that went missing is dropped inside, so r = 2.0/2.0 = 1.0 Ω. Getting 0.40 Ω divides the lost voltage by the load instead of the current. 5.0 Ω is just the load again, and 6.0 Ω is the EMF over the current, which is R + r.`,
  },
  [r`How do you check a battery's power bookkeeping?`]: {
    question: r`A battery supplies 3.0 A. Its load takes 27 W, and 9.0 W is turned to heat in its internal resistance. What must the battery's EMF be?`,
    options: [r`12 V`, r`9.0 V`, r`3.0 V`, r`6.0 V`],
    correctAnswer: 0,
    explanation: r`The power the chemistry supplies, εI, must equal the load's share plus the internal heating: 27 + 9.0 = 36 W, so ε = 36/3.0 = 12 V. The 9.0 V answer divides only the load's power by the current, which gives the terminal voltage. 3.0 V is only the internal drop, and 6.0 V subtracts the two powers instead of adding them.`,
  },
  [r`What current flows when a battery is shorted, and where does the power go?`]: {
    question: r`A thick copper bar of negligible resistance is dropped across a 3.0 V cell whose internal resistance is 0.20 Ω. How much power is converted, and where?`,
    options: [
      r`15 W, all in the copper bar`,
      r`45 W, all in the copper bar`,
      r`15 W, all inside the cell`,
      r`45 W, all inside the cell`,
    ],
    correctAnswer: 3,
    explanation: r`The short-circuit current is ε/r = 3.0/0.20 = 15 A, and the power is εI = 45 W. The bar has almost no resistance, so nearly none of it is converted there: it all heats the cell's internal resistance. The 15 W answers mistake the current for the power.`,
  },
  [r`What voltage must a charger supply to recharge a battery at current $I$?`]: {
    question: r`A charger holds 14.0 V across a battery whose EMF is 12.5 V and whose internal resistance is 0.30 Ω. What charging current flows?`,
    options: [r`47 A`, r`5.0 A`, r`42 A`, r`88 A`],
    correctAnswer: 1,
    explanation: r`While charging, V = ε + Ir, so the charger's extra 1.5 V above the EMF is what drives the current through r: I = 1.5/0.30 = 5.0 A. The 47 A and 42 A answers divide the whole charger voltage or the whole EMF by r. 88 A adds the two voltages, as if the EMF helped the charger instead of opposing it.`,
  },
  [r`What is the common trap when finding the current a real battery drives?`]: {
    question: r`A 6.0 V battery with an internal resistance of 1.0 Ω is connected to a 2.0 Ω lamp. A student reports a current of 3.0 A. What should be said about that result?`,
    options: [
      r`It ignored the battery's r; the current is 2.0 A`,
      r`It ignored the lamp's own R; the current is 2.0 A`,
      r`It ignored the battery's r; the current is 6.0 A`,
      r`It is correct as given; the current is 3.0 A`,
    ],
    correctAnswer: 0,
    explanation: r`The student divided the EMF by the lamp's resistance alone. The internal resistance is in series with the lamp, so I = 6.0/(2.0 + 1.0) = 2.0 A. The load R was the one thing the student did include, and 6.0 A is ε/r, the current only if the terminals were shorted.`,
  },

  // Video 3
  [r`What symbol stands for Faraday's constant, and what is its SI unit?`]: {
    question: r`While a cell discharges, 0.50 mol of electrons pass through the external wire. Taking F ≈ 96 500 C/mol, about how much charge is that?`,
    options: [r`About 193 000 C`, r`About 96 500 C`, r`About 48 000 C`, r`About 0.50 C`],
    correctAnswer: 2,
    explanation: r`F is the charge on one mole of electrons, in coulombs per mole, so the charge is moles × F = 0.50 × 96 500 ≈ 48 000 C. Getting 193 000 C divides F by the moles instead of multiplying. 96 500 C is a full mole, and 0.50 is the number of moles, not a charge.`,
  },
  [r`What symbol stands for the moles of electrons transferred in a redox reaction, and what is its SI unit?`]: {
    question: r`In a galvanic cell, each atom of metal M gives up two electrons to one ion of metal X: M + X²⁺ → M²⁺ + X. For one mole of this reaction, what is n in ΔG = −nFE, and about how much charge passes through the wire?`,
    options: [
      r`n = 1, and about 96 500 C`,
      r`n = 2, and about 96 500 C`,
      r`n = 4, and about 386 000 C`,
      r`n = 2, and about 193 000 C`,
    ],
    correctAnswer: 3,
    explanation: r`n counts the moles of electrons transferred per mole of reaction, which is 2 here, and the charge is nF = 2 × 96 500 ≈ 193 000 C. Taking n = 1 counts moles of metal instead of moles of electrons. n = 4 double counts by adding the electrons lost to the electrons gained, which are the same electrons.`,
  },
  [r`How do cells combine in series?`]: {
    question: r`A lantern holds four 1.5 V cells, each with an internal resistance of 0.20 Ω, all facing the same way in series. What are the EMF and the internal resistance of the stack?`,
    options: [
      r`6.0 V and 0.80 Ω`,
      r`6.0 V and 0.05 Ω`,
      r`1.5 V and 0.80 Ω`,
      r`1.5 V and 0.05 Ω`,
    ],
    correctAnswer: 0,
    explanation: r`In series both the EMFs and the internal resistances add: 4 × 1.5 = 6.0 V and 4 × 0.20 = 0.80 Ω. An internal resistance of 0.05 Ω treats the resistances as if they were in parallel, and an EMF of 1.5 V is what a parallel pack would give.`,
  },
  [r`How do identical cells combine in parallel?`]: {
    question: r`Two identical cells, each with an EMF of 3.0 V and an internal resistance of 1.0 Ω, are joined in parallel (+ to +, − to −). The pair drives a 2.5 Ω resistor. What current flows through the resistor?`,
    options: [r`2.0 A`, r`1.0 A`, r`0.67 A`, r`1.3 A`],
    correctAnswer: 1,
    explanation: r`Identical cells in parallel keep one cell's EMF, 3.0 V, and their internal resistances combine in parallel to 0.50 Ω, so I = 3.0/(2.5 + 0.50) = 1.0 A. The 2.0 A answer adds the EMFs to 6.0 V, which only happens in series. 0.67 A adds the internal resistances to 2.0 Ω, and 1.3 A makes both series mistakes.`,
  },
  [r`What does a milliamp-hour (mAh) rating measure, and how do you convert it?`]: {
    question: r`Cell X is rated 1000 mAh at 1.5 V. Cell Y is rated 1000 mAh at 3.0 V. How do the charge each can deliver and the energy each stores compare?`,
    options: [
      r`Same energy; Y delivers twice the charge`,
      r`Same charge; both store the same energy`,
      r`Same charge; Y stores twice the energy`,
      r`Y has twice the charge and four times the energy`,
    ],
    correctAnswer: 2,
    explanation: r`A milliamp-hour is current × time, which is charge, so both cells deliver the same 3600 C. Energy is about QV, so the 3.0 V cell stores twice as much. Saying the energies are equal reads mAh as an energy rating, and the remaining choices tie the charge to the voltage, which the mAh figure does not.`,
  },
  [r`How is an ammeter connected, and what is its ideal resistance?`]: {
    question: r`A student wants the current through a 6.0 Ω heater run by a 12 V battery. Two meters are on the bench: meter X has a resistance of 0.01 Ω and meter Y has 10 MΩ. Which one works as the ammeter, and how is it wired?`,
    options: [
      r`Meter Y, wired in series with the heater`,
      r`Meter X, wired in parallel with the heater`,
      r`Meter Y, wired in parallel with the heater`,
      r`Meter X, wired in series with the heater`,
    ],
    correctAnswer: 3,
    explanation: r`An ammeter goes in series so the heater's current passes through it, and it needs a resistance near zero so it does not change that current: meter X. Meter Y in series would choke the current to almost nothing. Meter X in parallel would short the heater, and meter Y in parallel is how a voltmeter is used.`,
  },
  [r`How is a voltmeter connected, and what is its ideal resistance?`]: {
    question: r`A resistor in a working circuit has 10 V across it. A voltmeter with a resistance of 10 MΩ is used correctly to measure that voltage. How is it connected, and roughly how much current does the meter itself carry?`,
    options: [
      r`In parallel; about 1 μA`,
      r`In series; about 1 μA`,
      r`In parallel; about 10 mA`,
      r`In series; about 10 mA`,
    ],
    correctAnswer: 0,
    explanation: r`A voltmeter goes in parallel, across the element, so it has the same 10 V across it and carries I = 10 V/10⁷ Ω = 1 μA, almost nothing. That tiny draw is why its resistance is made so large. Wiring it in series is the ammeter's connection, and a 10 mA draw would belong to a meter of only 1 kΩ.`,
  },
  [r`What happens if the meters are swapped?`]: {
    question: r`A student builds a loop from a 9.0 V battery and a lamp, then adds one meter the wrong way. The lamp goes out, and the meter's display shows about 9.0 V. What was the mistake?`,
    options: [
      r`An ammeter was wired in series with the lamp`,
      r`A voltmeter was wired in series with the lamp`,
      r`An ammeter was wired in parallel with the lamp`,
      r`A voltmeter was wired in parallel with the lamp`,
    ],
    correctAnswer: 1,
    explanation: r`A voltmeter in series puts its huge resistance in the loop, so the current falls to nearly zero, the lamp goes dark, and almost the whole EMF appears across the meter. An ammeter across the lamp would also darken it, but it would show a large current, not 9.0 V. The other two connections are the correct ones and leave the lamp lit.`,
  },
  [r`Where does a battery's EMF come from?`]: {
    question: r`The redox reaction in a galvanic cell transfers n = 2 mol of electrons per mole of reaction, and the cell's EMF is 1.0 V. Taking F ≈ 100 000 C/mol, what is ΔG for the reaction?`,
    options: [r`About +200 kJ`, r`About −100 kJ`, r`About −200 kJ`, r`About −50 kJ`],
    correctAnswer: 2,
    explanation: r`ΔG = −nFE = −(2)(100 000 C/mol)(1.0 V) = −200 kJ. A cell with a positive EMF runs a spontaneous reaction, so ΔG must be negative, which rules out +200 kJ. −100 kJ leaves out n, and −50 kJ divides by n instead of multiplying.`,
  },
  [r`In a galvanic cell, which electrode is the battery's + terminal?`]: {
    question: r`In a galvanic cell, zinc metal is oxidized at one electrode and copper ions are reduced at a copper electrode. A lamp is wired between the two. Which electrode is the + terminal, and which way do electrons travel through the lamp?`,
    options: [
      r`Zinc is +; electrons go from zinc to copper`,
      r`Zinc is +; electrons go from copper to zinc`,
      r`Copper is +; electrons go from copper to zinc`,
      r`Copper is +; electrons go from zinc to copper`,
    ],
    correctAnswer: 3,
    explanation: r`Reduction happens at the cathode, which is the + terminal, so copper is +. Electrons leave the anode, where zinc is oxidized, and run through the lamp to the copper. Calling zinc + puts the + sign on the anode, and electrons running from copper to zinc would be leaving the electrode that is consuming them.`,
  },

  // Video 4
  [r`How do you solve a series stack of real cells driving a load?`]: {
    question: r`Two 6.0 V batteries, each with an internal resistance of 0.50 Ω, are joined in series, facing the same way, and connected to a 5.0 Ω heater. How much power reaches the heater?`,
    options: [r`24 W`, r`20 W`, r`4.0 W`, r`5.0 W`],
    correctAnswer: 1,
    explanation: r`The EMFs add to 12 V and the internal resistances add to 1.0 Ω, so I = 12/(5.0 + 1.0) = 2.0 A and the terminal voltage is 12 − 2.0 × 1.0 = 10 V. The heater receives 10 V × 2.0 A = 20 W. The 24 W answer is the total the chemistry supplies, including the 4.0 W that heats the two batteries inside. 5.0 W counts only one battery's EMF.`,
  },
  [r`One cell in a series stack is reversed. What happens to the stack's internal resistance?`]: {
    question: r`Five 1.2 V cells, each with an internal resistance of 0.10 Ω, sit in series, but one of them is inserted backward. What are the stack's EMF and internal resistance?`,
    options: [
      r`3.6 V and 0.50 Ω`,
      r`3.6 V and 0.30 Ω`,
      r`4.8 V and 0.40 Ω`,
      r`4.8 V and 0.50 Ω`,
    ],
    correctAnswer: 0,
    explanation: r`The reversed cell is still in the loop, so all five internal resistances add to 0.50 Ω. Only its EMF changes sign: 4 × 1.2 − 1.2 = 3.6 V. An internal resistance of 0.30 Ω subtracts the resistance as well, and 4.8 V treats the reversed cell as simply missing instead of opposing the others.`,
  },
  [r`How do you check a stack's terminal voltage?`]: {
    question: r`A stack of cells with a total EMF of 12 V drives 1.5 A through a 6.0 Ω lamp. What must the stack's terminal voltage be, and what is its total internal resistance?`,
    options: [
      r`12 V, with 2.0 Ω inside`,
      r`9.0 V, with 8.0 Ω inside`,
      r`9.0 V, with 2.0 Ω inside`,
      r`12 V, with 8.0 Ω inside`,
    ],
    correctAnswer: 2,
    explanation: r`The terminal voltage is the voltage across the load, IR = 1.5 × 6.0 = 9.0 V. The other 3.0 V of the EMF is dropped inside, so the internal resistance is 3.0/1.5 = 2.0 Ω. A terminal voltage of 12 V is the EMF, not what reaches the lamp, and 8.0 Ω is 12/1.5, the resistance of the whole loop.`,
  },
  [r`How do you turn a cell's mAh rating into coulombs and energy?`]: {
    question: r`A small cell is rated 250 mAh and holds about 4.0 V while it discharges. About how much energy does it store?`,
    options: [r`About 1000 J`, r`About 900 J`, r`About 225 J`, r`About 3600 J`],
    correctAnswer: 3,
    explanation: r`Multiply mAh by 3.6 to get coulombs: 250 × 3.6 = 900 coulombs. The energy is about QV = 900 × 4.0 = 3600 J. The 1000 answer multiplies mAh by volts and skips the conversion, 900 is the charge in coulombs and not an energy, and 225 divides the charge by the voltage.`,
  },
  [r`An ammeter is laid directly across one element. How do you find its reading?`]: {
    question: r`Three heating coils of 2.0 Ω, 4.0 Ω and 6.0 Ω are wired end to end on an ideal 12 V supply. A student clips a current meter, itself about 0 Ω, onto the two ends of the 4.0 Ω coil. What does the meter show?`,
    options: [r`1.0 A`, r`1.5 A`, r`3.0 A`, r`0 A`],
    correctAnswer: 1,
    explanation: r`Treat the ammeter as a wire that bypasses the 4.0 Ω coil, and redo the loop without it: I = 12/(2.0 + 6.0) = 1.5 A, all of it through the meter. 1.0 A is the current before the meter was added. 3.0 A puts the whole 12 V across the 4.0 Ω coil alone, and 0 A forgets that the meter is now the easy path.`,
  },
  [r`A voltmeter is put in series in a loop. What current flows, and what does it read?`]: {
    question: r`By mistake, a voltmeter with a resistance of 2.0 MΩ is wired in series with a 6.0 V battery and a 20 Ω lamp. About what current flows, and what does the meter read?`,
    options: [
      r`About 3 μA; it reads about 6.0 V`,
      r`About 3 μA; it reads about 0 V`,
      r`About 0.3 A; it reads about 6.0 V`,
      r`About 0.3 A; it reads about 0 V`,
    ],
    correctAnswer: 0,
    explanation: r`The meter's 2.0 MΩ swamps the lamp's 20 Ω, so I ≈ 6.0 V/2.0 MΩ = 3 μA. With so little current the lamp drops almost nothing, and nearly the full 6.0 V sits across the meter. A current of 0.3 A ignores the meter's resistance, and a reading of 0 V treats the voltmeter as if it were a wire.`,
  },

  // Video 5
  [r`What symbol stands for capacitance, and what is its SI unit?`]: {
    question: r`A capacitor is marked "C = 5.0 μF". Since a farad is a coulomb per volt, how much charge does each plate hold for every volt across the capacitor?`,
    options: [r`5.0 × 10⁻³ C`, r`5.0 × 10⁻⁹ C`, r`5.0 × 10⁻⁶ C`, r`5.0 × 10⁶ C`],
    correctAnswer: 2,
    explanation: r`A microfarad is 10⁻⁶ F, and a farad is a coulomb per volt, so each volt puts 5.0 × 10⁻⁶ C on each plate. The 10⁻³ answer reads μ as milli and the 10⁻⁹ answer reads it as nano. 5.0 × 10⁶ C flips the sign of the exponent: a whole farad is already huge, so real capacitors store tiny charges per volt.`,
  },
  [r`What symbol stands for the charge on a capacitor, and what is its SI unit?`]: {
    question: r`A capacitor's plates carry +8.0 μC and −8.0 μC when there are 4.0 V across it. What value of Q belongs in C = Q/V, and what capacitance does it give?`,
    options: [
      r`Q = 16 μC, so C = 4.0 μF`,
      r`Q = 0 μC, so C = 0 μF`,
      r`Q = 4.0 μC, so C = 1.0 μF`,
      r`Q = 8.0 μC, so C = 2.0 μF`,
    ],
    correctAnswer: 3,
    explanation: r`Q is the size of the charge on each plate, 8.0 μC, so C = 8.0 μC/4.0 V = 2.0 μF. Using 16 μC adds the two plates' magnitudes together, and using 0 takes the net charge, which is always zero and says nothing about what is stored. 4.0 μC halves the plate charge for no reason.`,
  },
  [r`What symbol stands for electric field, and what is its SI unit?`]: {
    question: r`The uniform field between two parallel plates is quoted as E = 200 N/C. The plates are 5.0 cm apart. What is the voltage across them?`,
    options: [r`1000 V`, r`10 V`, r`4000 V`, r`40 V`],
    correctAnswer: 1,
    explanation: r`A newton per coulomb is the same unit as a volt per meter, so the field is 200 V/m and V = Ed = (200 V/m)(0.050 m) = 10 V. The 1000 answer leaves the gap in centimeters. 4000 and 40 divide the field by the gap, in meters and in centimeters, instead of multiplying.`,
  },
  [r`What happens when a battery charges a capacitor?`]: {
    question: r`A 3.0 μF capacitor is charged from empty by a 6.0 V battery. By the time charging stops, how much charge has crossed the gap between the plates, and how much has passed through the wires?`,
    options: [
      r`None across the gap; 18 μC through the wires`,
      r`18 μC across the gap; 18 μC through the wires`,
      r`18 μC across the gap; none through the wires`,
      r`None across the gap; 36 μC through the wires`,
    ],
    correctAnswer: 0,
    explanation: r`The battery moves charge from one plate to the other through the wires until the plates reach 6.0 V, which takes Q = CV = 18 μC. No charge crosses the insulating gap. Sending 18 μC across the gap treats the capacitor as a conductor, and 36 μC counts the +18 μC and the −18 μC as two separate transfers.`,
  },
  [r`What does "the charge on a capacitor" mean?`]: {
    question: r`A circuit diagram labels a charged capacitor "Q = 30 μC". How much charge was moved from one plate to the other to charge it, and what is the capacitor's net charge?`,
    options: [
      r`60 μC was moved; the net charge is zero`,
      r`30 μC was moved; the net charge is 60 μC`,
      r`30 μC was moved; the net charge is zero`,
      r`15 μC was moved; the net charge is 30 μC`,
    ],
    correctAnswer: 2,
    explanation: r`"The charge on a capacitor" is the charge on each plate: moving 30 μC off one plate and onto the other leaves −30 μC and +30 μC, which sum to zero. Saying 60 μC was moved, or that the net charge is 60 μC, adds the two plates' magnitudes. Splitting 30 μC as 15 μC per plate reads Q as a total.`,
  },
  [r`Define capacitance.`]: {
    question: r`Four capacitors are each connected to a different supply. Which one holds the most charge on each plate?`,
    options: [
      r`A 2.0 μF capacitor at 50 V`,
      r`A 10 μF capacitor at 12 V`,
      r`A 20 μF capacitor at 4.0 V`,
      r`A 5.0 μF capacitor at 30 V`,
    ],
    correctAnswer: 3,
    explanation: r`Capacitance is charge per volt, so Q = CV, and μF × V gives μC. The 5.0 μF capacitor at 30 V holds 150 μC, ahead of 120 μC for the 10 μF one, 100 μC for the 2.0 μF one and 80 μC for the 20 μF one. Picking the 20 μF one looks only at capacitance, and picking the one at 50 V looks only at voltage: the charge depends on the product.`,
  },
  [r`The voltage across a capacitor doubles. What happens to $C$ and to $Q$?`]: {
    question: r`A capacitor holds 10 μC on each plate at 2.0 V. A student argues, "C = Q/V, so raising the voltage to 6.0 V cuts the capacitance to a third." What is actually true at 6.0 V?`,
    options: [
      r`C falls to 1.7 μF, and Q is 10 μC`,
      r`C is still 5.0 μF, and Q is 30 μC`,
      r`C rises to 15 μF, and Q is 90 μC`,
      r`C is still 5.0 μF, and Q is 10 μC`,
    ],
    correctAnswer: 1,
    explanation: r`Capacitance is set by how the capacitor is built, so it stays 10 μC/2.0 V = 5.0 μF, and the charge follows the voltage: Q = (5.0 μF)(6.0 V) = 30 μC. A fall to 1.7 μF is the student's mistake of holding Q fixed. C cannot rise with voltage either, and Q cannot stay at 10 μC when C is unchanged and V has tripled.`,
  },
  [r`What sets the capacitance of a parallel-plate capacitor?`]: {
    question: r`A parallel-plate capacitor has plate area A, gap d, and a filling with dielectric constant κ = 3. Which air-filled capacitor has the same capacitance?`,
    options: [
      r`One with plate area 3A and gap d`,
      r`One with plate area A and gap 3d`,
      r`One with plate area A/3 and gap d`,
      r`One with plate area 3A and gap 3d`,
    ],
    correctAnswer: 0,
    explanation: r`C = κε₀A/d, so the first capacitor has 3ε₀A/d. With air (κ about 1), tripling the area gives the same 3ε₀A/d. A gap of 3d or an area of A/3 gives only a third of ε₀A/d, because C falls with gap and rises with area. Tripling both area and gap cancels and leaves just ε₀A/d.`,
  },
  [r`How do you rescale a parallel-plate capacitance?`]: {
    question: r`A 40 pF air capacitor is modified: each plate is swapped for one of twice the area, and the plates are moved to four times their old spacing. What is its capacitance now?`,
    options: [r`80 pF`, r`320 pF`, r`20 pF`, r`5.0 pF`],
    correctAnswer: 2,
    explanation: r`Multiply by the area factor and divide by the gap factor: 40 × 2 ÷ 4 = 20 pF. A wider gap lowers C. The 80 answer multiplies by the gap factor and divides by the area factor, 320 multiplies by both, and 5.0 divides by both.`,
  },
  [r`What is the field between parallel plates?`]: {
    question: r`Two horizontal plates are 2.0 cm apart with 100 V across them, and the top plate is the positive one. What is the field at a point 0.50 cm below the top plate?`,
    options: [
      r`20 000 V/m, pointing downward`,
      r`5000 V/m, pointing upward`,
      r`20 000 V/m, pointing upward`,
      r`5000 V/m, pointing downward`,
    ],
    correctAnswer: 3,
    explanation: r`The field between parallel plates is uniform, E = V/d = 100 V/0.020 m = 5000 V/m at every point in the gap, and it points from the + plate to the − plate, which is downward here. The 20 000 V/m answers divide by the distance to the nearer plate instead of the full gap. Upward would be toward the positive plate.`,
  },
  [r`How does a charge move between the plates?`]: {
    question: r`A proton and an electron are each released from rest at the same point in the uniform field between two charged plates. How do the sizes of the forces on them and of their accelerations compare?`,
    options: [
      r`Equal forces; the proton accelerates more`,
      r`Equal forces; the electron accelerates more`,
      r`Equal forces, and equal accelerations too`,
      r`A larger force on the proton; equal accelerations`,
    ],
    correctAnswer: 1,
    explanation: r`F = qE, and the two charges have the same size, so the forces are equal in size (and opposite in direction). The electron is far lighter, so a = F/m is far larger for it. Equal accelerations would need equal masses, and a larger force on the proton confuses mass with charge.`,
  },

  // Video 6
  [r`What does $Q = CV$ give you, and what is the capacitor's net charge?`]: {
    question: r`Once a 24 V supply has finished charging a 0.50 μF capacitor, how much charge sits on the plate wired to the supply's negative side?`,
    options: [r`−12 μC`, r`−6.0 μC`, r`−48 μC`, r`−24 μC`],
    correctAnswer: 0,
    explanation: r`Q = CV = (0.50 μF)(24 V) = 12 μC is the size of the charge on each plate, so the negative plate holds −12 μC and the positive plate +12 μC. The −6.0 answer splits Q between the two plates as if it were a total. −48 divides V by C, and −24 is just the voltage with a charge unit.`,
  },
  [r`A capacitor is moved to a battery of a different voltage. What changes?`]: {
    question: r`A capacitor holds 48 μC on each plate while connected to a 12 V battery. To make the same capacitor hold 20 μC, what battery voltage is needed?`,
    options: [r`29 V`, r`2.4 V`, r`5.0 V`, r`4.0 V`],
    correctAnswer: 2,
    explanation: r`The capacitance belongs to the capacitor and does not change: C = 48 μC/12 V = 4.0 μF. Then V = Q/C = 20/4.0 = 5.0 V. The 29 answer treats charge and voltage as inversely related, 2.4 is just the ratio of the two charges, and 4.0 is the capacitance in microfarads, not a voltage.`,
  },
  [r`How do you find a rebuilt parallel-plate capacitor's new capacitance?`]: {
    question: r`An 8.0 pF air-filled capacitor is rebuilt: the plate area goes from 10 cm² to 30 cm², and the gap goes from 2.0 mm to 0.50 mm. What is the new capacitance?`,
    options: [r`6.0 pF`, r`24 pF`, r`0.67 pF`, r`96 pF`],
    correctAnswer: 3,
    explanation: r`The area factor is 3 and the gap factor is ¼, so the new C is 8.0 × 3 ÷ ¼ = 96 pF, with no need for ε₀. The 6.0 answer multiplies by the gap factor instead of dividing, as if a narrower gap lowered C. 24 changes only the area, and 0.67 divides by both changes.`,
  },
  [r`What must you do before using $E = V/d$?`]: {
    question: r`The plates of a capacitor are 0.50 mm apart, and there are 6.0 V across them. What is the field between the plates?`,
    options: [r`12 V/m`, r`1.2 × 10⁴ V/m`, r`3.0 × 10⁻³ V/m`, r`1.2 × 10⁻² V/m`],
    correctAnswer: 1,
    explanation: r`Put the gap in meters first: 0.50 mm = 5.0 × 10⁻⁴ m, so E = 6.0/(5.0 × 10⁻⁴) = 1.2 × 10⁴ V/m. The 12 V/m answer divides by 0.50 and leaves the gap in millimeters. 3.0 × 10⁻³ multiplies the voltage by the gap, and 1.2 × 10⁻² converts millimeters the wrong way.`,
  },
  [r`What do picofarads times volts give?`]: {
    question: r`A 3.0 nF capacitor is connected across a 1.5 V cell. Without converting to farads, what charge sits on each plate?`,
    options: [r`4.5 nC`, r`4.5 μC`, r`2.0 nC`, r`0.50 nC`],
    correctAnswer: 0,
    explanation: r`The prefix carries straight through Q = CV: nanofarads times volts give nanocoulombs, so Q = 3.0 × 1.5 = 4.5 nC. The 4.5 μC answer swaps the prefix for a different one. 2.0 divides the capacitance by the voltage, and 0.50 divides the voltage by the capacitance.`,
  },

  // Video 7
  [r`What symbol stands for the dielectric constant, and what is its SI unit?`]: {
    question: r`A supplier's sheet gives the κ of an insulating plastic used to fill capacitors. Which of these entries could be correct?`,
    options: [
      r`κ = 0.43, with no unit`,
      r`κ = 2.3 farads per meter`,
      r`κ = 2.3, with no unit`,
      r`κ = 0.43 volts per meter`,
    ],
    correctAnswer: 2,
    explanation: r`κ is the dielectric constant: a pure number with no unit, and never less than 1, since 1 is its value for a vacuum. So 2.3 with no unit is the only possible entry. A value of 0.43 would mean the filling lowers the capacitance. Farads per meter is the unit of ε₀, and volts per meter is the unit of a field or a dielectric strength.`,
  },
  [r`What symbol stands for the energy stored in a capacitor, and what is its SI unit?`]: {
    question: r`A camera flash capacitor has U = 0.20 in SI units, and it empties into the flash tube in 1.0 × 10⁻³ s. What is the average power delivered during the flash?`,
    options: [r`2.0 × 10⁻¹ W`, r`2.0 × 10⁻⁴ W`, r`5.0 × 10⁻³ W`, r`2.0 × 10² W`],
    correctAnswer: 3,
    explanation: r`U is the stored energy, in joules, and power is energy per second: 0.20 J ÷ 1.0 × 10⁻³ s = 2.0 × 10² W. The 2.0 × 10⁻¹ answer treats U as if it were already a power. 2.0 × 10⁻⁴ multiplies the energy by the time, and 5.0 × 10⁻³ divides the time by the energy.`,
  },
  [r`What does a dielectric do inside a capacitor?`]: {
    question: r`An isolated, charged air capacitor has a field of 6000 V/m between its plates. A slab with κ = 3 is slid in to fill the gap. What is the field inside the slab, and why?`,
    options: [
      r`18 000 V/m; its charge layers aid the plates`,
      r`2000 V/m; its charge layers oppose the plates`,
      r`6000 V/m; its charge layers cancel each other`,
      r`2000 V/m; charge drains away from the plates`,
    ],
    correctAnswer: 1,
    explanation: r`The slab's molecules polarize, putting a negative layer beside the + plate and a positive layer beside the − plate. Their field opposes the plates' field, so the net field drops to 6000/3 = 2000 V/m. The layers never aid the plates, and they do not leave the field unchanged. The capacitor is isolated, so no charge can drain from its plates.`,
  },
  [r`How does a dielectric change the capacitance?`]: {
    question: r`An air-filled capacitor has a capacitance of 15 pF. Its gap is then completely filled with pure water, for which κ is about 80. What is its capacitance now?`,
    options: [r`About 1200 pF`, r`About 0.19 pF`, r`About 95 pF`, r`About 15 pF`],
    correctAnswer: 0,
    explanation: r`A dielectric multiplies the capacitance: C = κC₀ = 80 × 15 pF = 1200 pF. Dividing by κ gives 0.19 pF, which is backward, since a dielectric never lowers C. Adding κ to the capacitance gives 95, and 15 pF assumes the filling makes no difference.`,
  },
  [r`What is dielectric breakdown, and why does a good dielectric help?`]: {
    question: r`An air capacitor with a 1.0 mm gap sparks over at about 3000 V. The gap is then filled with a plastic that has κ = 3 and ten times the dielectric strength of air. What changes?`,
    options: [
      r`C triples, and it now withstands about 300 V`,
      r`C falls to a third; it withstands about 30 000 V`,
      r`C triples, and it now withstands about 30 000 V`,
      r`C is unchanged; it withstands about 9000 V`,
    ],
    correctAnswer: 2,
    explanation: r`The plastic raises the capacitance by κ, to three times, and its higher dielectric strength means the same gap can hold ten times the voltage before it ionizes and sparks: about 30 000 V. A limit of 300 V divides by the strength factor. A dielectric never lowers C, and κ sets the capacitance, not the breakdown voltage.`,
  },
  [r`Give the three forms of a capacitor's stored energy.`]: {
    question: r`A capacitor holds 40 μC on each plate with 50 V across it. Its capacitance is not given. How much energy does it store?`,
    options: [r`2.0 × 10⁻³ J`, r`5.0 × 10⁻² J`, r`1.0 × 10³ J`, r`1.0 × 10⁻³ J`],
    correctAnswer: 3,
    explanation: r`With Q and V known, use U = ½QV = ½ × 40 × 10⁻⁶ × 50 = 1.0 × 10⁻³ J. The 2.0 × 10⁻³ answer forgets the ½, which is there because the voltage climbs from zero as the charge builds. 5.0 × 10⁻² squares the voltage as if Q were C, and 1.0 × 10³ drops the micro prefix.`,
  },
  [r`With the battery connected, what is fixed, and how do a dielectric's effects follow?`]: {
    question: r`A capacitor holds 6.0 mJ while wired to its supply. With the supply still attached, the gap is packed with an insulator of κ = 3. What are the energy and the field in the gap once that is done?`,
    options: [
      r`2.0 mJ, with the field unchanged`,
      r`18 mJ, with the field unchanged`,
      r`18 mJ, with the field cut to a third`,
      r`2.0 mJ, with the field cut to a third`,
    ],
    correctAnswer: 1,
    explanation: r`The battery holds V fixed, so U = ½CV² rises with C to 3 × 6.0 = 18 mJ, and E = V/d does not change. Energy falling to 2.0 mJ and the field falling to a third are what happen to an isolated capacitor, where Q is fixed instead.`,
  },
  [r`With the capacitor isolated, what is fixed, and how do a dielectric's effects follow?`]: {
    question: r`A charged capacitor with nothing wired to it holds 12 mJ, and the field in its gap is 9000 V/m. The gap is then packed with an insulator of κ = 3. What are the energy and the field once that is done?`,
    options: [
      r`4.0 mJ and 3000 V/m`,
      r`36 mJ and 9000 V/m`,
      r`4.0 mJ and 9000 V/m`,
      r`36 mJ and 3000 V/m`,
    ],
    correctAnswer: 0,
    explanation: r`Isolated means Q is fixed, so U = Q²/2C falls as C rises: 12/3 = 4.0 mJ. The voltage falls by κ too, so E = V/d falls to 3000 V/m. Energy rising to 36 mJ with the field unchanged is the connected case, where V is fixed, and the mixed answers apply one rule to the energy and the other to the field.`,
  },
  [r`The gap between a capacitor's plates is doubled. What happens to its energy?`]: {
    question: r`A charged capacitor is disconnected from its battery while storing 5.0 mJ. Its plates are then pulled apart until the gap is twice as wide. What is the stored energy now, and what accounts for the change?`,
    options: [
      r`2.5 mJ; the rest went back to the battery`,
      r`10 mJ; the extra came from the battery`,
      r`2.5 mJ; the rest was used up in the pulling`,
      r`10 mJ; the extra came from the pulling`,
    ],
    correctAnswer: 3,
    explanation: r`Doubling the gap halves C. The capacitor is isolated, so Q is fixed and U = Q²/2C doubles to 10 mJ. The extra energy is the work done pulling the attracting plates apart. Halving to 2.5 mJ is the connected case, where V is fixed, and no battery is attached to give or take energy here.`,
  },
  [r`A battery charges a capacitor through a resistor. Where does the energy go?`]: {
    question: r`A 12 V battery charges an empty 5.0 μF capacitor through a 2.0 kΩ resistor. By the time the capacitor is fully charged, how much energy has become heat in the resistor?`,
    options: [r`720 μJ`, r`180 μJ`, r`360 μJ`, r`30 μJ`],
    correctAnswer: 2,
    explanation: r`The final charge is Q = CV = 60 μC, so the battery delivers QV = 720 μJ. The capacitor stores half, ½QV = 360 μJ, and the other 360 μJ becomes heat in the resistor, whatever its resistance. 720 μJ is everything the battery delivered, 180 μJ halves once too often, and 30 is ½CV without squaring the voltage.`,
  },

  // Video 8
  [r`A slab goes into a capacitor. What is the first question to ask?`]: {
    question: r`A capacitor is charged by a battery. The switch to the battery is opened, and only afterward is oil poured in to fill the gap between the plates. Which quantity is held fixed, and what follows?`,
    options: [
      r`V is fixed, so the charge rises`,
      r`Q is fixed, so the voltage falls`,
      r`Q is fixed, so the voltage rises`,
      r`V is fixed, so the charge falls`,
    ],
    correctAnswer: 1,
    explanation: r`With the switch open the capacitor is disconnected, so no charge can arrive or leave: Q is fixed. The oil raises C, and V = Q/C falls. Holding V fixed is the rule only while the battery stays connected. A rising voltage would need C to drop, which a dielectric never causes.`,
  },
  [r`What happens to the capacitance when a slab fills the gap?`]: {
    question: r`Two identical 4.0 μF capacitors are charged. One stays connected to its battery, and the other is disconnected. A slab with κ = 2.5 is then slid in to fill the gap of each. What are their capacitances now?`,
    options: [
      r`10 μF connected and 10 μF isolated`,
      r`10 μF connected and 4.0 μF isolated`,
      r`10 μF connected and 1.6 μF isolated`,
      r`4.0 μF connected and 10 μF isolated`,
    ],
    correctAnswer: 0,
    explanation: r`Capacitance depends only on how the capacitor is built, so the slab makes it κC = 2.5 × 4.0 = 10 μF in both, connected or not. Whether the battery is attached decides what happens to Q, V and U, not to C. An isolated value of 1.6 μF divides by κ, and 4.0 μF assumes one of the capacitors ignores the slab.`,
  },
  [r`An isolated capacitor gets a slab. How do you find its new voltage and energy?`]: {
    question: r`A capacitor carries 180 μC on each plate at 30 V. It is disconnected from everything, and a slab with κ = 3 is slid in to fill the gap. What are its voltage and stored energy afterward?`,
    options: [
      r`30 V and 2.7 mJ`,
      r`10 V and 8.1 mJ`,
      r`90 V and 8.1 mJ`,
      r`10 V and 0.90 mJ`,
    ],
    correctAnswer: 3,
    explanation: r`The capacitance goes from 180 μC/30 V = 6.0 μF to 18 μF, and Q stays at 180 μC. So V = Q/C = 10 V and U = ½QV = ½ × 180 μC × 10 V = 0.90 mJ, a third of the original 2.7 mJ. "30 V and 2.7 mJ" changes nothing, 8.1 mJ multiplies the energy by κ as if the battery were connected, and 90 V multiplies the voltage by κ instead of dividing.`,
  },
  [r`A connected capacitor gets a slab. How do you find its new charge and energy?`]: {
    question: r`A 20 V supply is left wired to a 3.0 μF capacitor while its gap is packed with an insulator of κ = 2. Once things settle, how much charge does each plate hold, and how much energy is stored?`,
    options: [
      r`60 μC and 0.30 mJ`,
      r`120 μC and 0.60 mJ`,
      r`120 μC and 1.2 mJ`,
      r`60 μC and 1.2 mJ`,
    ],
    correctAnswer: 2,
    explanation: r`The battery holds 20 V, and the new capacitance is 6.0 μF. So Q = CV = 120 μC, and U = ½CV² = ½(6.0 μF)(20 V)² = 1.2 mJ, both up by κ from 60 μC and 0.60 mJ. Keeping 60 μC treats the charge as fixed, which is the isolated case, 0.30 mJ halves the energy as an isolated capacitor would, and 0.60 mJ leaves the energy at its old value.`,
  },
  [r`An isolated capacitor's energy falls when a slab goes in. Where does it go?`]: {
    question: r`An isolated, charged capacitor stores 8.0 mJ. A slab with κ = 4 is released at the edge of the gap and ends up filling it. How much energy leaves the capacitor, and where does it go?`,
    options: [
      r`6.0 mJ, sent back into the battery`,
      r`6.0 mJ, as work pulling the slab in`,
      r`2.0 mJ, as work pulling the slab in`,
      r`2.0 mJ, sent back into the battery`,
    ],
    correctAnswer: 1,
    explanation: r`With Q fixed, the energy falls by κ to 2.0 mJ, so 6.0 mJ leaves. It goes into work: the field pulls the polarized slab into the gap. No battery is connected, so nothing can be sent back to one. 2.0 mJ is the energy that remains, not the energy that left.`,
  },
  [r`What is the common trap with $\tfrac12 CV^2$ after a slab goes in?`]: {
    question: r`An isolated 2.0 μF capacitor at 30 V gets a slab with κ = 3. A student writes U = ½(6.0 μF)(30 V)² = 2.7 mJ for the energy afterward. What should be said about that result?`,
    options: [
      r`V also fell, to 10 V; U is 0.30 mJ`,
      r`C stayed at 2.0 μF; U is 0.90 mJ`,
      r`It is right as written; U is 2.7 mJ`,
      r`V also rose, to 90 V; U is 24 mJ`,
    ],
    correctAnswer: 0,
    explanation: r`The student used the new C with the old V. For an isolated capacitor Q is fixed at 60 μC, so V falls to 60 μC/6.0 μF = 10 V and U = ½(6.0 μF)(10 V)² = 0.30 mJ, the same as Q²/2C. The slab does change C, so 0.90 mJ (the starting energy) is wrong, and the voltage falls, not rises, when C goes up at fixed charge.`,
  },
}
