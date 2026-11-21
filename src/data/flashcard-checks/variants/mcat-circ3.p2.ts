import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`How is an ammeter connected, and what is its ideal resistance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal 12 V battery drives a 6.0 Ω heater. A poorly made ammeter with a resistance of 2.0 Ω is then wired correctly, in series with the heater. What does it read, and what was the current before it was added?`,
        options: [r`It reads 2.0 A; the current was 2.0 A before`, r`It reads 1.5 A; the current was 1.5 A before`, r`It reads 6.0 A; the current was 2.0 A before`, r`It reads 1.5 A; the current was 2.0 A before`],
        correctAnswer: 3,
        explanation: r`Before the meter, I = 12 V ÷ 6.0 Ω = 2.0 A. The meter's 2.0 Ω adds in series, so the current becomes 12 V ÷ 8.0 Ω = 1.5 A, which is why an ammeter should be close to 0 Ω. A reading of 2.0 A would need a meter with no resistance, and 6.0 A divides the 12 V by the meter's 2.0 Ω alone.`,
      },
      {
        question: r`Two different lamps are wired in parallel across a battery. A student needs the current through lamp 1 only. Where does the ammeter go?`,
        options: [r`In lamp 1's own branch, in series with lamp 1`, r`Across lamp 1's two terminals, in parallel with it`, r`In the main wire beside the battery, before the split`, r`In lamp 2's own branch, in series with lamp 2`],
        correctAnswer: 0,
        explanation: r`An ammeter reads the current that passes through it, so it must sit in series with lamp 1, inside that lamp's branch. Across the lamp's terminals its near-zero resistance would short the lamp. In the main wire it would read the total of both lamps, and in the other branch it would read lamp 2's current.`,
      },
    ],
  },
  [r`How is a voltmeter connected, and what is its ideal resistance?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two 1.0 MΩ resistors are wired in series across an ideal 10 V supply, so each has 5.0 V across it. A cheap voltmeter whose own resistance is only 1.0 MΩ is connected across one of the resistors. What does it read?`,
        options: [r`Exactly 5.0 V, equal to the true value`, r`About 6.7 V, above the true 5.0 V`, r`About 10 V, the full supply voltage`, r`About 3.3 V, below the true 5.0 V`],
        correctAnswer: 3,
        explanation: r`The meter in parallel with 1.0 MΩ makes 0.50 MΩ, which shares the 10 V with the other 1.0 MΩ: 10 V × 0.50 ÷ 1.5 ≈ 3.3 V. The meter draws real current, so it lowers the voltage it is measuring; only a meter of nearly infinite resistance would read 5.0 V. The 6.7 V is what the other resistor now has, and 10 V is the whole supply.`,
      },
      {
        question: r`A student must find the voltage across a 1.0 kΩ resistor in a working circuit. Which meter, connected in which way, reads that voltage correctly?`,
        options: [r`A 10 MΩ meter, connected across the resistor`, r`A 10 Ω meter, connected across the resistor`, r`A 10 MΩ meter, connected in line with the resistor`, r`A 10 Ω meter, connected in line with the resistor`],
        correctAnswer: 0,
        explanation: r`A voltmeter goes in parallel, across the element, and needs a resistance far above the element's so that it draws almost no current. A 10 Ω meter across the resistor would carry most of the current and pull the voltage down. Any meter placed in line with the resistor is in series, and a 10 MΩ meter there would nearly stop the current.`,
      },
    ],
  },
  [r`What happens if the meters are swapped?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An ideal 12 V supply runs two identical lamps in series. A student adds one meter the wrong way. One lamp goes dark, and the other glows brighter than before. What was the mistake?`,
        options: [r`A voltmeter was wired across the lamp that went dark`, r`An ammeter was wired in series between the two lamps`, r`A voltmeter was wired in series between the two lamps`, r`An ammeter was wired across the lamp that went dark`],
        correctAnswer: 3,
        explanation: r`An ammeter is nearly 0 Ω, so across a lamp it is a short: the current bypasses that lamp, and the other lamp now gets the whole 12 V and brightens. A voltmeter across a lamp or an ammeter in series is the correct use and changes nothing. A voltmeter in series would choke the current and put both lamps out.`,
      },
      {
        question: r`A loop holds a 6.0 V battery and a single lamp. Which meter connection sends a large surge of current through the meter and the battery?`,
        options: [r`An ammeter connected across the lamp's terminals`, r`A voltmeter connected across the lamp's terminals`, r`A voltmeter connected in series with the lamp`, r`An ammeter connected in series with the lamp`],
        correctAnswer: 0,
        explanation: r`An ammeter has almost no resistance, so across the lamp it shorts the lamp and leaves the battery with almost nothing to limit the current. That surge can blow the meter's fuse. A voltmeter across the lamp and an ammeter in series are the correct connections, and a voltmeter in series cuts the current to nearly zero instead of raising it.`,
      },
    ],
  },
  [r`Where does a battery's EMF come from?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A fuel cell's overall reaction releases 300 kJ of free energy per mole (ΔG = −300 kJ) while moving n = 2 mol of electrons. Taking F ≈ 100 000 C/mol, what EMF does the fuel cell produce?`,
        options: [r`3.0 V`, r`0.67 V`, r`1.5 V`, r`0.15 V`],
        correctAnswer: 2,
        explanation: r`E = −ΔG ÷ (nF) = 300 000 J ÷ (2 × 100 000 C) = 1.5 V. Leaving out n gives 3.0 V, turning the fraction upside down gives 0.67 V, and 0.15 V is a slip of a power of ten.`,
      },
      {
        question: r`A zinc and copper cell has an EMF of 1.1 V, and its reaction has ΔG = −220 kJ per mole of reaction. Taking F ≈ 100 000 C/mol, how many moles of electrons are transferred per mole of reaction?`,
        options: [r`2 mol`, r`1 mol`, r`4 mol`, r`0.5 mol`],
        correctAnswer: 0,
        explanation: r`n = −ΔG ÷ (FE) = 220 000 J ÷ (100 000 C/mol × 1.1 V) = 2 mol. Dividing the other way round gives 0.5 mol. Answers of 1 mol or 4 mol come from halving or doubling the energy along the way.`,
      },
      {
        question: r`A lithium coin cell has an EMF of 3.0 V, and its reaction transfers n = 1 mol of electrons per mole of reaction. Taking F ≈ 100 000 C/mol, what is ΔG for the reaction?`,
        options: [r`About +300 kJ`, r`About −30 kJ`, r`About −300 kJ`, r`About −33 kJ`],
        correctAnswer: 2,
        explanation: r`ΔG = −nFE = −(1)(100 000 C)(3.0 V) = −300 000 J = −300 kJ. A positive EMF means a spontaneous reaction, so the sign is negative, not positive. The −30 kJ is a power-of-ten slip, and −33 kJ divides F by E instead of multiplying.`,
      },
      {
        question: r`A cell's chemistry is redesigned. The new reaction has a ΔG twice as negative as the old one, but it transfers four times as many moles of electrons. How does the new EMF compare with the old EMF?`,
        options: [r`It is twice as large`, r`It is half as large`, r`It is 8 times as large`, r`It is a quarter as large`],
        correctAnswer: 1,
        explanation: r`E = −ΔG ÷ (nF), so the EMF scales as ΔG ÷ n: 2 ÷ 4 = one half. Twice as large ignores the change in n, 8 times multiplies the two factors, and a quarter ignores the change in ΔG.`,
      },
      {
        question: r`A chemist writes a reaction whose cell potential works out to E = −0.50 V with n = 2 mol of electrons. Taking F ≈ 100 000 C/mol, what is ΔG, and does the reaction run on its own as written?`,
        options: [r`+100 kJ, so it is not spontaneous`, r`−100 kJ, so it is spontaneous`, r`+25 kJ, so it is not spontaneous`, r`−25 kJ, so it is spontaneous`],
        correctAnswer: 0,
        explanation: r`ΔG = −nFE = −(2)(100 000 C)(−0.50 V) = +100 000 J = +100 kJ. A positive ΔG means the reaction is not spontaneous as written, which matches the negative potential. The −100 kJ drops the sign of E, and the 25 kJ values divide by n instead of multiplying.`,
      },
      {
        question: r`One step of a biological electron-transfer chain passes n = 2 mol of electrons and releases 40 kJ of free energy per mole (ΔG = −40 kJ). Taking F ≈ 100 000 C/mol, what potential difference drives the step, in millivolts?`,
        options: [r`200 mV`, r`400 mV`, r`20 mV`, r`5000 mV`],
        correctAnswer: 0,
        explanation: r`E = −ΔG ÷ (nF) = 40 000 J ÷ (2 × 100 000 C) = 0.20 V = 200 mV. Leaving out n gives 400 mV, a power-of-ten slip in the conversion gives 20 mV, and 5000 mV comes from turning the fraction upside down.`,
      },
    ],
  },
  [r`In a galvanic cell, which electrode is the battery's + terminal?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a working galvanic cell, electrons flow through the outside wire from electrode X to electrode Y. Which description of electrode Y is correct?`,
        options: [r`Y is the anode and the + terminal`, r`Y is the cathode and the − terminal`, r`Y is the anode and the − terminal`, r`Y is the cathode and the + terminal`],
        correctAnswer: 3,
        explanation: r`Electrons leave the anode, where oxidation happens, and arrive at the cathode, where reduction happens. Y receives the electrons, so it is the cathode, and in a galvanic cell the cathode is the + terminal. The anode, X, is the − terminal that pushes electrons out into the wire.`,
      },
      {
        question: r`In a galvanic cell, electrode P slowly loses mass as its metal atoms become ions in the solution, while metal ions from the solution plate onto electrode Q as solid metal. Which electrode is the battery's + terminal?`,
        options: [r`Q, the anode, where oxidation takes place`, r`Q, the cathode, where reduction takes place`, r`P, the cathode, where reduction takes place`, r`P, the anode, where oxidation takes place`],
        correctAnswer: 1,
        explanation: r`Ions gaining electrons to become solid metal is reduction, so Q is the cathode, and the cathode of a galvanic cell is its + terminal. P is being oxidized, which makes it the anode and the − terminal. Calling Q the anode or P the cathode mismatches the electrode with its reaction.`,
      },
    ],
  },
  [r`How do you solve a series stack of real cells driving a load?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hearing aid runs on two 1.5 V cells in series, facing the same way. Each cell has an internal resistance of 5.0 Ω, and the hearing aid acts as a 290 Ω load. What current flows, in milliamps?`,
        options: [r`10 mA`, r`5.0 mA`, r`300 mA`, r`100 mA`],
        correctAnswer: 0,
        explanation: r`The EMFs add to 3.0 V and the internal resistances add to 10 Ω, so I = 3.0 V ÷ (290 Ω + 10 Ω) = 0.010 A = 10 mA. Using one cell's EMF gives 5.0 mA, dividing the EMF by the internal resistance alone gives 300 mA, and 100 mA is a slip in converting to milliamps.`,
      },
      {
        question: r`A car battery is six 2.0 V cells in series, each with an internal resistance of 0.010 Ω. It drives a motor that acts as a 0.54 Ω resistor. What is the battery's terminal voltage while the motor runs?`,
        options: [r`12.0 V`, r`1.2 V`, r`10.8 V`, r`11.8 V`],
        correctAnswer: 2,
        explanation: r`The total EMF is 12 V and the total internal resistance is 0.060 Ω, so I = 12 V ÷ 0.60 Ω = 20 A and the terminal voltage is 12 V − (20 A)(0.060 Ω) = 10.8 V. The 12.0 V is the EMF with no loss, 1.2 V is only the voltage lost inside, and 11.8 V subtracts the loss in a single cell.`,
      },
      {
        question: r`Two 9.0 V batteries, each with an internal resistance of 1.0 Ω, are joined in series, facing the same way. Together they drive 2.0 A through a heater. What is the heater's resistance?`,
        options: [r`7.0 Ω`, r`9.0 Ω`, r`8.0 Ω`, r`2.5 Ω`],
        correctAnswer: 0,
        explanation: r`The total EMF is 18 V, so the whole loop has 18 V ÷ 2.0 A = 9.0 Ω. Taking away the 2.0 Ω of internal resistance leaves 7.0 Ω for the heater. The 9.0 Ω forgets the internal resistance, 8.0 Ω removes only one battery's share, and 2.5 Ω uses the EMF of just one battery.`,
      },
      {
        question: r`Three 1.5 V cells in series, all facing the same way, drive 0.50 A through a radio that acts as a 7.5 Ω resistor. What is the internal resistance of each cell?`,
        options: [r`1.5 Ω`, r`0.50 Ω`, r`3.0 Ω`, r`9.0 Ω`],
        correctAnswer: 1,
        explanation: r`The total EMF is 4.5 V, so the whole loop has 4.5 V ÷ 0.50 A = 9.0 Ω. The radio accounts for 7.5 Ω, leaving 1.5 Ω of internal resistance shared by three cells, or 0.50 Ω each. The 1.5 Ω is the total for the stack, 9.0 Ω is the whole loop, and 3.0 Ω divides one cell's EMF by the current.`,
      },
      {
        question: r`Three 2.0 V cells, each with an internal resistance of 0.50 Ω, are in series with a toy motor that acts as a 2.5 Ω resistor. One of the cells has been put in backward. What is the stack's terminal voltage?`,
        options: [r`2.0 V`, r`3.75 V`, r`0.75 V`, r`1.25 V`],
        correctAnswer: 3,
        explanation: r`The reversed cell subtracts, so the EMF is 2.0 + 2.0 − 2.0 = 2.0 V, while the internal resistances still add to 1.5 Ω. Then I = 2.0 V ÷ 4.0 Ω = 0.50 A and the terminal voltage is 2.0 V − (0.50 A)(1.5 Ω) = 1.25 V. The 2.0 V ignores the loss inside, 3.75 V treats all three cells as facing forward, and 0.75 V is the voltage lost inside.`,
      },
      {
        question: r`A 1.5 V cell with an internal resistance of 1.0 Ω lights a 2.0 Ω bulb. A second identical cell is then added in series, facing the same way. By what factor does the current through the bulb change?`,
        options: [r`It becomes 1.5 times as large`, r`It becomes 2.0 times as large`, r`It becomes 3.0 times as large`, r`It stays exactly the same size`],
        correctAnswer: 0,
        explanation: r`One cell gives 1.5 V ÷ (2.0 Ω + 1.0 Ω) = 0.50 A. Two cells give 3.0 V ÷ (2.0 Ω + 2.0 Ω) = 0.75 A, which is 1.5 times as large. Doubling would be right only if the second cell added no internal resistance, and the other answers do not follow from adding both the EMFs and the internal resistances.`,
      },
    ],
  },
  [r`One cell in a series stack is reversed. What happens to the stack's internal resistance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 1.0 Ω buzzer is powered by a holder with three cells in a row, and a child has loaded one of them the wrong way round. Every cell is 1.5 V with 0.50 Ω inside. How much current does the buzzer get?`,
        options: [r`1.0 A`, r`0.60 A`, r`0.75 A`, r`1.8 A`],
        correctAnswer: 1,
        explanation: r`The EMF is 1.5 + 1.5 − 1.5 = 1.5 V, but all three internal resistances still add: 1.5 Ω. So I = 1.5 V ÷ (1.0 Ω + 1.5 Ω) = 0.60 A. The 1.0 A lets the reversed cell cancel another cell's resistance, 0.75 A leaves out the reversed cell's resistance, and 1.8 A ignores the reversal altogether.`,
      },
      {
        question: r`A stack of eight identical cells in series, all facing the same way, has a total internal resistance of 2.4 Ω. Two of the cells are then turned around. What is the stack's internal resistance now?`,
        options: [r`1.8 Ω`, r`1.2 Ω`, r`0.60 Ω`, r`2.4 Ω`],
        correctAnswer: 3,
        explanation: r`Each cell contributes 0.30 Ω, and a reversed cell is still in the loop, so the total stays 8 × 0.30 Ω = 2.4 Ω. Only the EMF changes. The 1.8 Ω drops the two reversed cells, 1.2 Ω lets them cancel two others the way their EMFs do, and 0.60 Ω counts only the reversed pair.`,
      },
      {
        question: r`Four 3.0 V cells, each with an internal resistance of 0.50 Ω, are in series with a 4.0 Ω heater. One cell is inserted backward. How much power is turned to heat inside the stack?`,
        options: [r`4.0 W`, r`6.0 W`, r`2.0 W`, r`0.50 W`],
        correctAnswer: 2,
        explanation: r`The EMF is 9.0 V − 3.0 V = 6.0 V and the internal resistance is still 4 × 0.50 Ω = 2.0 Ω, so I = 6.0 V ÷ 6.0 Ω = 1.0 A. The heat inside is I²r = (1.0 A)²(2.0 Ω) = 2.0 W. The 4.0 W is the heater's power, 6.0 W is the total supplied, and 0.50 W counts only one cell's resistance.`,
      },
      {
        question: r`A 6.5 Ω lamp draws 0.25 A from a holder of three identical 2.0 V cells in a row, one of them loaded the wrong way round. How much resistance is hidden inside each cell?`,
        options: [r`1.5 Ω`, r`0.75 Ω`, r`0.50 Ω`, r`8.0 Ω`],
        correctAnswer: 2,
        explanation: r`The EMF is 2.0 V, so the whole loop has 2.0 V ÷ 0.25 A = 8.0 Ω. The lamp is 6.5 Ω, leaving 1.5 Ω inside, and all three cells share it because the reversed cell's resistance still counts: 0.50 Ω each. The 1.5 Ω assigns it all to one cell, 0.75 Ω leaves out the reversed cell, and 8.0 Ω is the whole loop.`,
      },
      {
        question: r`A power-tool pack has three 4.0 V lithium cells in series, each with an internal resistance of 50 mΩ. One cell was installed backward, and the pack is delivering 10 A. How much voltage is lost inside the pack?`,
        options: [r`0.50 V`, r`1.5 V`, r`1.0 V`, r`1500 V`],
        correctAnswer: 1,
        explanation: r`All three internal resistances add, reversed cell included: 3 × 0.050 Ω = 0.15 Ω. The voltage lost inside is Ir = (10 A)(0.15 Ω) = 1.5 V. The 0.50 V counts one cell, 1.0 V leaves out the reversed cell, and 1500 V forgets to convert milliohms to ohms.`,
      },
      {
        question: r`Three identical cells in series, all facing the same way, are shorted by a thick wire of negligible resistance. One cell is then turned around and the stack is shorted again. How does the new short-circuit current compare with the first?`,
        options: [r`It is exactly the same`, r`It is one third as large`, r`It is two thirds as large`, r`It is one half as large`],
        correctAnswer: 1,
        explanation: r`With EMF ε and internal resistance r per cell, the first current is 3ε ÷ 3r. Reversing one cell drops the EMF to ε, but the internal resistance is still 3r, so the current is ε ÷ 3r, one third as large. It would be the same only if the resistance fell to r along with the EMF, and the other fractions miscount the EMF or the resistance.`,
      },
    ],
  },
  [r`How do you check a stack's terminal voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A stack of cells with a total EMF of 6.4 V and a total internal resistance of 1.0 Ω sends 0.40 A through a 15 Ω buzzer. What is the stack's terminal voltage?`,
        options: [r`6.4 V`, r`0.40 V`, r`6.0 V`, r`6.8 V`],
        correctAnswer: 2,
        explanation: r`The terminal voltage is the voltage across the load: IR = (0.40 A)(15 Ω) = 6.0 V. It agrees with 6.4 V − (0.40 A)(1.0 Ω). The 6.4 V is the EMF, 0.40 V is only the drop inside the stack, and 6.8 V adds that drop instead of subtracting it.`,
      },
      {
        question: r`A stack has a total EMF of 9.0 V and a total internal resistance of 1.0 Ω, and it drives an 8.0 Ω load. A student's solution lists a current of 1.0 A and a terminal voltage of 8.5 V. What does checking the terminal voltage against the load show?`,
        options: [r`The terminal voltage should be 8.0 V`, r`The terminal voltage should be 9.0 V`, r`The terminal voltage of 8.5 V is right`, r`The terminal voltage should be 1.0 V`],
        correctAnswer: 0,
        explanation: r`The current is right: 9.0 V ÷ 9.0 Ω = 1.0 A. The terminal voltage must equal IR across the load, (1.0 A)(8.0 Ω) = 8.0 V, which also equals 9.0 V − (1.0 A)(1.0 Ω). So 8.5 V fails the check. The 9.0 V is the EMF, and 1.0 V is the drop inside the stack.`,
      },
      {
        question: r`Three cells in a remote control form a series stack. While the remote is working, a voltmeter across the stack's terminals reads 4.5 V, and the remote acts as a 90 Ω load. What current is the stack delivering?`,
        options: [r`20 mA`, r`5.0 mA`, r`500 mA`, r`50 mA`],
        correctAnswer: 3,
        explanation: r`The terminal voltage equals IR across the load, so I = 4.5 V ÷ 90 Ω = 0.050 A = 50 mA. Dividing 90 by 4.5 gives the 20, and 5.0 mA and 500 mA are slips of a power of ten when converting to milliamps.`,
      },
      {
        question: r`A stack of cells with a total EMF of 12 V runs a motor. While 2.5 A flows, a voltmeter across the stack's terminals reads 10 V. What is the motor's resistance?`,
        options: [r`4.0 Ω`, r`4.8 Ω`, r`0.80 Ω`, r`25 Ω`],
        correctAnswer: 0,
        explanation: r`The terminal voltage is the voltage across the load, so R = 10 V ÷ 2.5 A = 4.0 Ω. Using the 12 V EMF gives 4.8 Ω, which is the load plus the internal resistance. The 0.80 Ω is the internal resistance, 2.0 V ÷ 2.5 A, and 25 multiplies the voltage by the current.`,
      },
      {
        question: r`A stack of cells drives 3.0 A through a 2.0 Ω heater. The stack's total internal resistance is 0.50 Ω. What is the stack's total EMF?`,
        options: [r`6.0 V`, r`4.5 V`, r`7.5 V`, r`1.5 V`],
        correctAnswer: 2,
        explanation: r`The terminal voltage is IR = (3.0 A)(2.0 Ω) = 6.0 V. The EMF is larger by the drop inside, (3.0 A)(0.50 Ω) = 1.5 V, so it is 7.5 V. The 6.0 V is the terminal voltage, 4.5 V subtracts the inside drop instead of adding it, and 1.5 V is only that drop.`,
      },
      {
        question: r`As the cells in a flashlight age, their internal resistance rises, and the current through the bulb falls to half of its original value. Treat the bulb's resistance as fixed. How does the stack's terminal voltage change?`,
        options: [r`It falls to one quarter`, r`It falls to one half`, r`It stays the same`, r`It rises to double`],
        correctAnswer: 1,
        explanation: r`The terminal voltage always equals IR across the load. With R fixed and I halved, the terminal voltage is halved. One quarter is the change in the bulb's power, not its voltage. It does not stay the same, because the extra internal resistance takes a larger share of the unchanged EMF.`,
      },
    ],
  },
  [r`How do you turn a cell's mAh rating into coulombs and energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A hearing-aid cell is rated 100 mAh. How many coulombs of charge is that?`,
        options: [r`100 C`, r`6.0 C`, r`360 C`, r`360 000 C`],
        correctAnswer: 2,
        explanation: r`Coulombs = mAh × 3.6, so 100 mAh is 360 C: 0.100 A for 3600 s. The 100 C skips the conversion, 6.0 C uses 60 s for an hour, and 360 000 C forgets that the rating is in milliamp-hours.`,
      },
      {
        question: r`A phone battery is rated 3000 mAh and holds about 4.0 V while it discharges. About how much energy does it store?`,
        options: [r`About 12 kJ`, r`About 2.7 kJ`, r`About 720 J`, r`About 43 kJ`],
        correctAnswer: 3,
        explanation: r`Q = 3000 × 3.6 = 10 800 C, and the energy is QV = (10 800 C)(4.0 V) = 43 200 J, about 43 kJ. Multiplying 3000 by 4.0 without converting gives the 12 kJ, dividing the charge by the voltage gives 2.7 kJ, and 720 J uses 60 s for an hour.`,
      },
      {
        question: r`A small cell delivers 1800 C of charge before it is exhausted. What is its rating in mAh?`,
        options: [r`6480 mAh`, r`1800 mAh`, r`500 mAh`, r`0.50 mAh`],
        correctAnswer: 2,
        explanation: r`Coulombs = mAh × 3.6, so mAh = 1800 ÷ 3.6 = 500. Multiplying by 3.6 instead gives 6480, leaving the number alone gives 1800, and 0.50 is the rating in amp-hours, not milliamp-hours.`,
      },
      {
        question: r`A cell is rated 1000 mAh and stores about 5400 J. What is the cell's voltage?`,
        options: [r`5.4 V`, r`1.5 V`, r`0.67 V`, r`3.6 V`],
        correctAnswer: 1,
        explanation: r`Q = 1000 × 3.6 = 3600 C, and energy ≈ QV, so V = 5400 J ÷ 3600 C = 1.5 V. Dividing by 1000 without converting to coulombs gives 5.4 V, turning the fraction upside down gives 0.67 V, and 3.6 is just the conversion factor.`,
      },
      {
        question: r`Cell A is rated 2000 mAh at 1.5 V. Cell B is rated 1000 mAh at 3.0 V. How do the charge and the energy they store compare?`,
        options: [r`A holds twice the charge; the energies are equal`, r`A holds twice the charge and twice the energy`, r`The charges are equal; B holds twice the energy`, r`A holds twice the charge; B has twice the energy`],
        correctAnswer: 0,
        explanation: r`Charge follows the mAh rating: 7200 C for A and 3600 C for B, so A holds twice the charge. Energy is QV: (7200 C)(1.5 V) and (3600 C)(3.0 V) are both 10 800 J. Judging energy by mAh alone favors A, and judging it by voltage alone favors B.`,
      },
      {
        question: r`A sensor needs 10 800 J from a single 1.5 V cell. What is the smallest mAh rating that can supply it?`,
        options: [r`7200 mAh`, r`3000 mAh`, r`2000 mAh`, r`26 000 mAh`],
        correctAnswer: 2,
        explanation: r`Energy ≈ QV, so Q = 10 800 J ÷ 1.5 V = 7200 C, and mAh = 7200 ÷ 3.6 = 2000. The 7200 is the charge in coulombs, 3000 divides the energy by 3.6 and ignores the voltage, and 26 000 multiplies the coulombs by 3.6 instead of dividing.`,
      },
    ],
  },
  [r`An ammeter is laid directly across one element. How do you find its reading?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An ideal 6.0 V battery, a 10 Ω resistor and a 20 Ω buzzer form one series loop. A student lays an ammeter of about 0 Ω directly across the buzzer. What does the ammeter read?`,
        options: [r`0.20 A`, r`0.60 A`, r`0.30 A`, r`0 A`],
        correctAnswer: 1,
        explanation: r`The ammeter acts as a wire that bypasses the buzzer, so the loop is the battery and the 10 Ω resistor: I = 6.0 V ÷ 10 Ω = 0.60 A, all of it through the meter. The 0.20 A is the current before the meter was added, 0.30 A removes the wrong element, and 0 A is the current in the buzzer, not in the meter.`,
      },
      {
        question: r`A battery with an EMF of 12 V and an internal resistance of 1.0 Ω drives a 3.0 Ω heater and an 8.0 Ω lamp in series. An ammeter of about 0 Ω is clipped directly across the lamp. What does it read?`,
        options: [r`1.0 A`, r`3.0 A`, r`4.0 A`, r`1.5 A`],
        correctAnswer: 1,
        explanation: r`With the lamp bypassed, the loop holds the heater and the internal resistance: I = 12 V ÷ (3.0 Ω + 1.0 Ω) = 3.0 A. The 1.0 A is the current with the lamp still in the loop, 4.0 A forgets the internal resistance, and 1.5 A divides the EMF by the lamp's resistance.`,
      },
      {
        question: r`A 5.0 Ω resistor and a 15 Ω resistor are in series on an ideal supply. An ammeter of about 0 Ω laid directly across the 15 Ω resistor reads 2.0 A. What is the supply voltage?`,
        options: [r`10 V`, r`40 V`, r`30 V`, r`2.5 V`],
        correctAnswer: 0,
        explanation: r`The ammeter bypasses the 15 Ω resistor, so the 2.0 A flows through the 5.0 Ω resistor alone: V = (2.0 A)(5.0 Ω) = 10 V. The 40 V keeps both resistors in the loop, 30 V uses the bypassed resistor, and 2.5 divides the resistance by the current.`,
      },
      {
        question: r`A 4.0 Ω resistor and a 12 Ω resistor are in series on an ideal battery. An ammeter of about 0 Ω is then laid directly across the 12 Ω resistor. How does the current leaving the battery change?`,
        options: [r`It becomes 3 times as large`, r`It falls to one quarter`, r`It becomes 4 times as large`, r`It stays exactly the same`],
        correctAnswer: 2,
        explanation: r`Before, the loop has 16 Ω. With the 12 Ω resistor bypassed, it has 4.0 Ω, so the same battery drives 16 ÷ 4.0 = 4 times the current. Three times compares the two resistors with each other, one quarter turns the ratio upside down, and no change would mean the meter had a very large resistance.`,
      },
      {
        question: r`An ideal 24 V supply runs an 8.0 Ω heater and a 4.0 Ω lamp in series. An ammeter of about 0 Ω is connected directly across the lamp. How much power does the heater use now?`,
        options: [r`72 W`, r`32 W`, r`0 W`, r`144 W`],
        correctAnswer: 0,
        explanation: r`The lamp is bypassed and goes dark, so the heater has the whole 24 V: I = 24 V ÷ 8.0 Ω = 3.0 A and P = (3.0 A)²(8.0 Ω) = 72 W. The 32 W is the heater's power before the meter was added, 0 W belongs to the bypassed lamp, and 144 W puts the 24 V across 4.0 Ω.`,
      },
      {
        question: r`An ideal 6.0 V source, a 3.0 kΩ resistor and a 1.0 kΩ resistor form a series loop on a circuit board. A probe with about 0 Ω of resistance, set to measure current, is touched across the 1.0 kΩ resistor. What does it read, in milliamps?`,
        options: [r`1.5 mA`, r`2.0 mA`, r`6.0 mA`, r`2000 mA`],
        correctAnswer: 1,
        explanation: r`The probe bypasses the 1.0 kΩ resistor, so I = 6.0 V ÷ 3000 Ω = 0.0020 A = 2.0 mA. The 1.5 mA is the current with both resistors in the loop, 6.0 mA removes the wrong resistor, and 2000 mA forgets that the resistance is in kilohms.`,
      },
    ],
  },
  [r`A voltmeter is put in series in a loop. What current flows, and what does it read?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A technician accidentally leaves a 10 MΩ voltmeter in series with a 5.0 V supply and a 100 Ω resistor. About what current flows in the loop?`,
        options: [r`About 50 mA`, r`About 0.50 μA`, r`About 2.0 μA`, r`About 0.50 mA`],
        correctAnswer: 1,
        explanation: r`The meter's resistance swamps the 100 Ω, so I ≈ 5.0 V ÷ 10 × 10⁶ Ω = 0.50 × 10⁻⁶ A = 0.50 μA. The 50 mA ignores the meter, 2.0 μA divides the resistance by the voltage, and 0.50 mA treats the megohms as kilohms.`,
      },
      {
        question: r`A 1.0 MΩ voltmeter is wired in series with a 10 V battery and a 100 Ω lamp. About how much voltage is there across the lamp?`,
        options: [r`About 10 V`, r`About 5.0 V`, r`About 1.0 mV`, r`About 1.0 V`],
        correctAnswer: 2,
        explanation: r`The current is about 10 V ÷ 1.0 × 10⁶ Ω = 10 μA, so the lamp has 10 μA × 100 Ω = 1000 μV = 1.0 mV. Nearly all of the 10 V sits across the meter, not the lamp. An even split of 5.0 V would need equal resistances, and 1.0 V is a slip of a power of ten.`,
      },
      {
        question: r`A voltmeter is wired by mistake in series with a 12 V battery and a small lamp, and a sensitive probe shows that only 2.4 μA flows. About what is the voltmeter's resistance?`,
        options: [r`About 5.0 kΩ`, r`About 29 MΩ`, r`About 5.0 MΩ`, r`About 0.20 MΩ`],
        correctAnswer: 2,
        explanation: r`The meter sets the current, so R ≈ ε ÷ I = 12 V ÷ 2.4 × 10⁻⁶ A = 5.0 × 10⁶ Ω = 5.0 MΩ. The 5.0 kΩ treats the microamps as milliamps, 29 multiplies 12 by 2.4, and 0.20 divides 2.4 by 12.`,
      },
      {
        question: r`A 4.0 MΩ voltmeter is wired in series with a battery and a 50 Ω resistor, and 0.75 μA flows. About what does the voltmeter read?`,
        options: [r`About 5.3 V`, r`About 3.0 V`, r`About 0.19 V`, r`About 3.0 mV`],
        correctAnswer: 1,
        explanation: r`The meter reads the voltage across itself: 0.75 μA × 4.0 MΩ = 3.0 V, which is almost the whole EMF because the 50 Ω resistor drops next to nothing. The 5.3 divides 4.0 by 0.75, 0.19 divides 0.75 by 4.0, and 3.0 mV drops a factor of a thousand.`,
      },
      {
        question: r`A 2.0 MΩ voltmeter sits by mistake in series with a battery and a 10 Ω lamp. It is swapped for a 10 MΩ voltmeter in the same position. What happens to the loop current and to the reading?`,
        options: [r`The current falls to a fifth; the reading rises fivefold`, r`The current rises fivefold; the reading stays the same`, r`The current falls to a fifth; the reading stays the same`, r`The current stays the same; the reading rises fivefold`],
        correctAnswer: 2,
        explanation: r`The current is about ε ÷ R of the meter, so five times the resistance gives a fifth of the current. Either meter takes nearly all of the EMF, so both read about the battery's full EMF. The reading cannot rise fivefold, because it is already almost the whole EMF.`,
      },
      {
        question: r`A lamp needs 0.30 A to glow. By mistake, a 3.0 MΩ voltmeter is left in series with the lamp and its 9.0 V battery. About what current flows, and how far short of 0.30 A is it?`,
        options: [r`3.0 μA, about 10⁵ times too small`, r`3.0 mA, about 10² times too small`, r`27 μA, about 10⁴ times too small`, r`0.33 μA, about 10⁶ times too small`],
        correctAnswer: 0,
        explanation: r`I ≈ 9.0 V ÷ 3.0 × 10⁶ Ω = 3.0 × 10⁻⁶ A = 3.0 μA, and 0.30 A ÷ 3.0 × 10⁻⁶ A = 10⁵, so the lamp stays dark. The 3.0 mA treats megohms as kilohms, 27 multiplies 9.0 by 3.0, and 0.33 divides 3.0 by 9.0.`,
      },
    ],
  },
  [r`What symbol stands for capacitance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A ceramic capacitor is stamped "470 pF". What is its capacitance in farads?`,
        options: [r`4.7 × 10⁻⁴ F`, r`4.7 × 10⁻¹⁰ F`, r`4.7 × 10⁻⁷ F`, r`4.7 × 10⁻¹² F`],
        correctAnswer: 1,
        explanation: r`A picofarad is 10⁻¹² F, so 470 pF = 470 × 10⁻¹² F = 4.7 × 10⁻¹⁰ F. The 10⁻⁴ answer reads the prefix as micro, 10⁻⁷ reads it as nano, and 10⁻¹² forgets to fold in the factor of 100 from the 470.`,
      },
      {
        question: r`A component's data sheet lists one of its properties as "3.0 coulombs per volt". What is that property, written in its usual SI unit?`,
        options: [r`A charge of 3.0 C`, r`An energy of 3.0 J`, r`A capacitance of 3.0 F`, r`A resistance of 3.0 Ω`],
        correctAnswer: 2,
        explanation: r`One farad is one coulomb per volt, so 3.0 C/V is a capacitance of 3.0 F, which is very large for a capacitor. A charge is in coulombs alone, a joule is a coulomb times a volt, and an ohm is a volt per ampere.`,
      },
    ],
  },
  [r`What symbol stands for the charge on a capacitor, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 2.0 μF capacitor has 5.0 V across it. What charge sits on each of its two plates?`,
        options: [r`+5.0 μC on one plate and −5.0 μC on the other`, r`+10 μC on one plate and −10 μC on the other`, r`+10 μC on one plate and no charge on the other`, r`+20 μC on one plate and −20 μC on the other`],
        correctAnswer: 1,
        explanation: r`Q = CV = (2.0 μF)(5.0 V) = 10 μC, and Q is the size of the charge on EACH plate: +10 μC on one and −10 μC on the other. Splitting the 10 μC between the plates gives 5.0 μC, and 20 μC doubles it. One plate cannot be charged while the other stays neutral.`,
      },
      {
        question: r`While a capacitor charges from empty, a steady current of 2.0 mA flows in its wires for 3.0 s. What is the capacitor's charge Q at the end?`,
        options: [r`Q = 3.0 mC, on each plate`, r`Q = 12 mC, on each plate`, r`Q = 6.0 mF, on each plate`, r`Q = 6.0 mC, on each plate`],
        correctAnswer: 3,
        explanation: r`The charge moved is It = 2.0 mA × 3.0 s = 6.0 mC, and that is the size of the charge on each plate, +6.0 mC and −6.0 mC. It is not shared out as 3.0 mC per plate or doubled to 12 mC. Charge is measured in coulombs, and the farad is the unit of capacitance.`,
      },
    ],
  },
  [r`What symbol stands for electric field, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`The field in a region is quoted as 500 V/m. What force does it put on a small bead carrying 2.0 μC of charge?`,
        options: [r`1.0 × 10⁻³ N`, r`2.5 × 10⁸ N`, r`4.0 × 10⁻⁹ N`, r`1.0 × 10³ N`],
        correctAnswer: 0,
        explanation: r`A volt per meter is the same as a newton per coulomb, so the field is 500 N/C and F = qE = 2.0 × 10⁻⁶ C × 500 N/C = 1.0 × 10⁻³ N. Dividing the field by the charge gives 2.5 × 10⁸, dividing the charge by the field gives 4.0 × 10⁻⁹, and 1.0 × 10³ leaves out the micro prefix.`,
      },
      {
        question: r`Four readings are copied from a lab notebook without labels. Which one could be the strength of an electric field?`,
        options: [r`250 J/C`, r`250 C/V`, r`250 V·m`, r`250 N/C`],
        correctAnswer: 3,
        explanation: r`Electric field is force per unit charge, in N/C, which is the same unit as V/m. A joule per coulomb is a volt, so 250 J/C is a voltage, and 250 C/V is a capacitance in farads. A volt times a meter is not a field unit: the field is volts DIVIDED by meters.`,
      },
    ],
  },
  [r`What happens when a battery charges a capacitor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 9.0 V battery is charging an empty capacitor through a resistor. At one moment the voltage across the capacitor's plates is 6.0 V. What is happening at that moment?`,
        options: [r`Charge is still flowing, and it stops at 9.0 V`, r`Charge is still flowing, and it stops at 18 V`, r`Charge has stopped flowing, and 6.0 V is final`, r`Charge is flowing back, and it stops at 0 V`],
        correctAnswer: 0,
        explanation: r`Charging continues until the voltage across the plates equals the battery's voltage, here 9.0 V. At 6.0 V the battery still wins, so charge keeps moving onto the plates. The plates can never pass the battery's voltage, and nothing makes the charge flow back while the battery is connected.`,
      },
      {
        question: r`A battery is connected to an uncharged capacitor and left until the current stops. Which statement about the process is NOT correct?`,
        options: [r`Electrons travel through the wires and the battery`, r`The plates end with equal and opposite charges`, r`The flow ends once the plates match the battery`, r`Electrons jump across the gap from plate to plate`],
        correctAnswer: 3,
        explanation: r`No charge crosses the gap: the battery moves electrons from one plate, through the wires, to the other plate. That leaves +Q on one plate and −Q on the other, with a net charge of zero. The flow stops when the voltage across the plates equals the battery's voltage, so the other three statements are true.`,
      },
    ],
  },
  [r`What does "the charge on a capacitor" mean?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A capacitor is described as "carrying 50 μC". A wire is then connected from one plate to the other, and the capacitor discharges fully. How much charge passes through the wire, and what charge is left on each plate?`,
        options: [r`100 μC flows; each plate ends neutral`, r`25 μC flows; each plate ends neutral`, r`50 μC flows; each plate ends neutral`, r`50 μC flows; each plate keeps 25 μC`],
        correctAnswer: 2,
        explanation: r`"Carrying 50 μC" means +50 μC on one plate and −50 μC on the other. Moving 50 μC through the wire cancels both, so each plate ends neutral. The 100 μC adds the two plates together, and the 25 μC answers treat the 50 μC as a total shared by the plates.`,
      },
      {
        question: r`A charged capacitor labelled "Q = 40 μC" is unplugged from its circuit and sealed inside a box. What is the net charge inside the box?`,
        options: [r`40 μC, since that is the charge on the capacitor`, r`80 μC, since each of the two plates holds 40 μC`, r`20 μC, since the 40 μC is shared by two plates`, r`Zero, since the plates hold +40 μC and −40 μC`],
        correctAnswer: 3,
        explanation: r`Q is the size of the charge on each plate, and the plates carry opposite signs: +40 μC and −40 μC. They add to zero, so a charged capacitor is neutral overall. The 40 μC and 80 μC answers ignore the negative plate's sign, and 20 μC treats Q as a total split between the plates.`,
      },
    ],
  },
  [r`Define capacitance.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator's capacitor holds 0.20 C on each plate when it is charged to 2000 V. What is its capacitance?`,
        options: [r`1.0 × 10⁴ F`, r`4.0 × 10² F`, r`1.0 × 10⁻⁴ F`, r`1.0 × 10⁻¹ F`],
        correctAnswer: 2,
        explanation: r`C = Q ÷ V = 0.20 C ÷ 2000 V = 1.0 × 10⁻⁴ F, or 100 μF. Dividing the voltage by the charge gives 1.0 × 10⁴, multiplying the two gives 4.0 × 10², and 1.0 × 10⁻¹ divides by 2 instead of 2000.`,
      },
      {
        question: r`A 20 μF capacitor in a camera flash holds 6.0 mC on each plate. What is the voltage across it?`,
        options: [r`0.30 V`, r`300 V`, r`120 V`, r`3.3 V`],
        correctAnswer: 1,
        explanation: r`V = Q ÷ C = 6.0 × 10⁻³ C ÷ 20 × 10⁻⁶ F = 300 V. The 0.30 V ignores the difference between milli and micro, 120 multiplies 20 by 6.0, and 3.3 divides 20 by 6.0.`,
      },
      {
        question: r`For one capacitor, the charge on each plate is graphed against the voltage across it. The graph is a straight line through the origin that passes through the point 4.0 V, 10 μC. What is the capacitance?`,
        options: [r`0.40 μF`, r`40 μF`, r`2.5 μF`, r`20 μF`],
        correctAnswer: 2,
        explanation: r`C = Q ÷ V is the slope of the line: 10 μC ÷ 4.0 V = 2.5 μF. Dividing the voltage by the charge gives 0.40, multiplying them gives 40, and 20 is the area under the line, which is the stored energy in microjoules, not the capacitance.`,
      },
      {
        question: r`A patch of nerve-cell membrane acts as a 1.0 pF capacitor with 70 mV across it. How much charge sits on each side of the membrane?`,
        options: [r`7.0 × 10⁻¹¹ C`, r`7.0 × 10⁻¹⁷ C`, r`7.0 × 10⁻¹⁴ C`, r`1.4 × 10⁻¹¹ C`],
        correctAnswer: 2,
        explanation: r`Q = CV = (1.0 × 10⁻¹² F)(70 × 10⁻³ V) = 7.0 × 10⁻¹⁴ C. The 10⁻¹¹ answer forgets that the voltage is in millivolts, 10⁻¹⁷ applies the milli prefix twice, and 1.4 × 10⁻¹¹ divides the capacitance by the voltage.`,
      },
      {
        question: r`Capacitor A holds three times as much charge as capacitor B, yet the voltage across A is only half the voltage across B. How do their capacitances compare?`,
        options: [r`A's is 1.5 times B's`, r`A's is two thirds of B's`, r`A's is one sixth of B's`, r`A's is 6 times B's`],
        correctAnswer: 3,
        explanation: r`C = Q ÷ V, so the ratio is 3 ÷ ½ = 6. Multiplying 3 by ½ gives 1.5, which treats capacitance as Q times V. Two thirds and one sixth turn one or both of the factors upside down.`,
      },
      {
        question: r`The voltage across a 50 μF capacitor in a power supply is raised from 10 V to 14 V. How much additional charge flows onto each plate?`,
        options: [r`700 μC`, r`500 μC`, r`12.5 μC`, r`200 μC`],
        correctAnswer: 3,
        explanation: r`Q = CV at each voltage, so the extra charge is C times the rise: (50 μF)(4.0 V) = 200 μC. The 700 μC is the whole charge at 14 V, 500 μC is the charge that was already there at 10 V, and 12.5 divides the capacitance by the rise.`,
      },
    ],
  },
  [r`The voltage across a capacitor doubles. What happens to $C$ and to $Q$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor holds 20 μC on each plate at 4.0 V. It is then charged further until each plate holds 50 μC. What are its voltage and its capacitance now?`,
        options: [r`4.0 V, with C now 12.5 μF`, r`10 V, with C still 5.0 μF`, r`10 V, with C now 2.0 μF`, r`1.6 V, with C still 5.0 μF`],
        correctAnswer: 1,
        explanation: r`C = 20 μC ÷ 4.0 V = 5.0 μF is set by how the capacitor is built, so it does not change. Q is proportional to V: 2.5 times the charge means 2.5 times the voltage, 10 V. Keeping 4.0 V would need the capacitance to grow, 2.0 μF divides the old charge by the new voltage, and 1.6 V scales the voltage the wrong way.`,
      },
      {
        question: r`A studio flash unit stores 60 μC in its capacitor at 12 V. A technician bleeds the capacitor down until only 4.0 V remains. How much charge is left on each plate?`,
        options: [r`20 μC`, r`180 μC`, r`60 μC`, r`5.0 μC`],
        correctAnswer: 0,
        explanation: r`The capacitance is fixed, so Q follows V: one third of the voltage means one third of the charge, 20 μC. The 180 μC scales the charge the wrong way, 60 μC leaves it unchanged, and 5.0 is the capacitance in microfarads, not a charge.`,
      },
      {
        question: r`A defibrillator charges the same capacitor to 1000 V for a child and to 4000 V for an adult. Compared with the child setting, what is true of the capacitor at the adult setting?`,
        options: [r`C is the same, and Q is 4 times as large`, r`C is 4 times as large, and Q is the same`, r`C is a quarter as large, and Q is the same`, r`C is the same, and Q is 16 times as large`],
        correctAnswer: 0,
        explanation: r`Capacitance depends on how the capacitor is built, not on the voltage, so C is the same. With C fixed, Q = CV is 4 times as large at 4 times the voltage. C does not rise or fall with V, and 16 times is how the stored energy changes, not the charge.`,
      },
      {
        question: r`A capacitor holds 15 μC on each plate at 5.0 V. Its charging supply is turned up until each plate holds 45 μC. What is the voltage across it now?`,
        options: [r`15 V`, r`1.7 V`, r`35 V`, r`9.0 V`],
        correctAnswer: 0,
        explanation: r`With C fixed, V is proportional to Q: three times the charge means three times the voltage, 15 V. The 1.7 V divides by three instead of multiplying, 35 V adds the 30 μC rise to the voltage, and 9.0 divides the new charge by the old voltage.`,
      },
      {
        question: r`The capacitor in a touch sensor carries 100 μC at 5.0 V. Its supply then drifts upward by 20%, to 6.0 V. How much charge does the sensor's capacitor carry after the drift?`,
        options: [r`83 μC`, r`120 μC`, r`100 μC`, r`144 μC`],
        correctAnswer: 1,
        explanation: r`C stays at 20 μF, so the charge rises by the same 20% as the voltage: 120 μC. The 83 μC assumes more voltage means less charge, 100 μC leaves the charge unchanged, and 144 μC squares the factor of 1.2, which is how the stored energy changes.`,
      },
      {
        question: r`A 6.0 μF capacitor has 3.0 V across it, and then its voltage is tripled. How much charge is on each plate afterward, and what is the ratio Q/V?`,
        options: [r`18 μC, and Q/V falls to 2.0 μF`, r`54 μC, and Q/V rises to 18 μF`, r`6.0 μC, and Q/V falls to 0.67 μF`, r`54 μC, and Q/V is still 6.0 μF`],
        correctAnswer: 3,
        explanation: r`At 9.0 V the charge is (6.0 μF)(9.0 V) = 54 μC, three times the original 18 μC. Q and V rise together, so their ratio, the capacitance, is still 6.0 μF. Keeping 18 μC or dropping to 6.0 μC wrongly makes the capacitance fall as the voltage rises, and 18 μF triples a quantity that is fixed by the build.`,
      },
    ],
  },
  [r`What sets the capacitance of a parallel-plate capacitor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An air-filled parallel-plate capacitor has plates of area 0.010 m² separated by 1.0 mm. Taking ε₀ ≈ 9 × 10⁻¹² F/m, what is its capacitance?`,
        options: [r`9.0 × 10⁻¹⁴ F`, r`9.0 × 10⁻¹⁷ F`, r`9.0 × 10⁻¹¹ F`, r`9.0 × 10⁻¹³ F`],
        correctAnswer: 2,
        explanation: r`C = κε₀A ÷ d = (1)(9 × 10⁻¹²)(1.0 × 10⁻²) ÷ (1.0 × 10⁻³) = 9.0 × 10⁻¹¹ F, or 90 pF. Leaving the gap as 1.0 instead of 10⁻³ m gives 10⁻¹⁴, multiplying by the gap gives 10⁻¹⁷, and 10⁻¹³ swaps the area and the gap.`,
      },
      {
        question: r`A rolled-foil capacitor has a plate area of 2.0 m² and a filling with dielectric constant κ = 5. Its capacitance is 9.0 × 10⁻⁸ F. Taking ε₀ ≈ 9 × 10⁻¹² F/m, how thick is the filling between the foils?`,
        options: [r`0.20 mm`, r`0.040 mm`, r`10 mm`, r`1.0 mm`],
        correctAnswer: 3,
        explanation: r`d = κε₀A ÷ C = (5)(9 × 10⁻¹²)(2.0) ÷ (9.0 × 10⁻⁸) = 1.0 × 10⁻³ m = 1.0 mm. Leaving out κ gives 0.20 mm, dividing by κ instead of multiplying gives 0.040 mm, and 10 mm is a slip of a power of ten.`,
      },
      {
        question: r`An air-filled parallel-plate capacitor with a 0.50 mm gap must have a capacitance of 18 pF. Taking ε₀ ≈ 9 × 10⁻¹² F/m, what plate area is needed?`,
        options: [r`1.0 m²`, r`4.0 × 10³ m²`, r`2.5 × 10⁻⁴ m²`, r`1.0 × 10⁻³ m²`],
        correctAnswer: 3,
        explanation: r`A = Cd ÷ (κε₀) = (18 × 10⁻¹²)(5.0 × 10⁻⁴) ÷ (9 × 10⁻¹²) = 1.0 × 10⁻³ m², about 10 cm². Using 0.50 for the gap without converting millimeters gives 1.0 m², dividing by the gap instead of multiplying gives 4.0 × 10³, and 2.5 × 10⁻⁴ turns the whole fraction upside down.`,
      },
      {
        question: r`A level sensor is a parallel-plate capacitor that measures 8.0 pF with air between its plates. The gap is then completely filled with water, which has κ = 80. What does the sensor's capacitance become?`,
        options: [r`640 pF`, r`0.10 pF`, r`88 pF`, r`80 pF`],
        correctAnswer: 0,
        explanation: r`C = κε₀A ÷ d, so with the same plates and gap the capacitance is multiplied by κ: 8.0 pF × 80 = 640 pF. Dividing by κ gives 0.10 pF, adding κ gives 88, and 80 simply copies the dielectric constant.`,
      },
      {
        question: r`A patch of cell membrane has an area of 1.0 × 10⁻¹⁰ m², a thickness of 5.0 nm and a dielectric constant κ = 5. Taking ε₀ ≈ 9 × 10⁻¹² F/m and treating it as a parallel-plate capacitor, what is its capacitance?`,
        options: [r`1.8 × 10⁻¹³ F`, r`9.0 × 10⁻²² F`, r`2.3 × 10⁻²⁹ F`, r`9.0 × 10⁻¹³ F`],
        correctAnswer: 3,
        explanation: r`C = κε₀A ÷ d = (5)(9 × 10⁻¹²)(1.0 × 10⁻¹⁰) ÷ (5.0 × 10⁻⁹) = 9.0 × 10⁻¹³ F, about 0.9 pF. Leaving out κ gives 1.8 × 10⁻¹³, using 5.0 for the thickness without converting nanometers gives 9.0 × 10⁻²², and multiplying by the thickness gives 2.3 × 10⁻²⁹.`,
      },
      {
        question: r`Capacitor P is air-filled, with plate area 4.0 cm² and a 2.0 mm gap. Capacitor Q has plate area 1.0 cm², a 1.0 mm gap and a filling with κ = 6. How do their capacitances compare?`,
        options: [r`P's is 4 times Q's`, r`Q's is 3 times P's`, r`Q's is 6 times P's`, r`P's is 1.3 times Q's`],
        correctAnswer: 1,
        explanation: r`C is proportional to κA ÷ d. For P that is (1)(4.0) ÷ 2.0 = 2, and for Q it is (6)(1.0) ÷ 1.0 = 6, so Q's capacitance is 3 times P's. Comparing areas alone gives P a factor of 4, comparing κ alone gives Q a factor of 6, and multiplying area by gap gives P a factor of 1.3.`,
      },
    ],
  },
  [r`How do you rescale a parallel-plate capacitance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 30 pF air capacitor is modified: the gap is cut to half its old size and then filled with a material of dielectric constant κ = 4. What is its capacitance now?`,
        options: [r`240 pF`, r`60 pF`, r`3.75 pF`, r`120 pF`],
        correctAnswer: 0,
        explanation: r`Divide by the gap factor and multiply by κ: 30 pF ÷ ½ × 4 = 240 pF. The 60 pF multiplies by the gap factor of ½ instead of dividing, 3.75 pF divides by both changes, and 120 pF applies κ but ignores the narrower gap.`,
      },
      {
        question: r`A 12 μF parallel-plate capacitor is redesigned with plates of three times the area and a gap three times as wide, with the same filling. What is the new capacitance?`,
        options: [r`108 μF`, r`1.3 μF`, r`12 μF`, r`36 μF`],
        correctAnswer: 2,
        explanation: r`Multiply by the area factor and divide by the gap factor: 12 μF × 3 ÷ 3 = 12 μF, unchanged. The 108 μF multiplies by both factors, 1.3 μF divides by both, and 36 μF applies the larger area but ignores the wider gap.`,
      },
      {
        question: r`A 50 pF air capacitor has a gap of 2.0 mm. Its capacitance must be raised to 200 pF by changing only the gap. What gap is needed?`,
        options: [r`8.0 mm`, r`1.0 mm`, r`4.0 mm`, r`0.50 mm`],
        correctAnswer: 3,
        explanation: r`The capacitance must go up by a factor of 4, and C is divided by the gap factor, so the gap must shrink to a quarter: 0.50 mm. An 8.0 mm gap would cut the capacitance to a quarter, since a wider gap lowers C. A 1.0 mm gap only doubles it, and 4.0 mm halves it.`,
      },
      {
        question: r`A 100 pF air capacitor has its gap doubled, and the wider gap is then filled completely with an insulating liquid. The capacitance ends at 300 pF. What is the liquid's dielectric constant?`,
        options: [r`κ = 3`, r`κ = 1.5`, r`κ = 6`, r`κ = 12`],
        correctAnswer: 2,
        explanation: r`Doubling the gap halves the capacitance to 50 pF. The liquid multiplies it by κ, so κ = 300 pF ÷ 50 pF = 6. The 3 ignores the wider gap, 1.5 treats the wider gap as doubling the capacitance to 200 pF, and 12 doubles the right answer again.`,
      },
      {
        question: r`An 8.0 pF capacitor has square plates. It is rebuilt with square plates whose sides are twice as long, set twice as far apart, with the same filling. What is the new capacitance?`,
        options: [r`8.0 pF`, r`64 pF`, r`16 pF`, r`32 pF`],
        correctAnswer: 2,
        explanation: r`Doubling the side of a square makes the area 4 times as large, and the gap factor is 2, so C = 8.0 pF × 4 ÷ 2 = 16 pF. The 8.0 pF treats the doubled side as a doubled area, 64 pF multiplies by the gap factor instead of dividing, and 32 pF ignores the wider gap.`,
      },
      {
        question: r`A 2.0 nF capacitor is filled with a dielectric of κ = 4. The dielectric is removed, leaving air, and the plates are trimmed to half their area. What is the capacitance now, in picofarads?`,
        options: [r`500 pF`, r`250 pF`, r`1000 pF`, r`16 000 pF`],
        correctAnswer: 1,
        explanation: r`Going from κ = 4 to air divides the capacitance by 4, and half the area halves it again: 2.0 nF ÷ 4 ÷ 2 = 0.25 nF = 250 pF. The 500 pF leaves out the area change, 1000 pF leaves out the loss of the dielectric, and 16 000 pF multiplies by both factors instead of dividing.`,
      },
    ],
  },
  [r`What is the field between parallel plates?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V battery is connected across two parallel plates that are 3.0 mm apart. How strong is the field between the plates?`,
        options: [r`4.0 V/m`, r`36 V/m`, r`0.25 V/m`, r`4000 V/m`],
        correctAnswer: 3,
        explanation: r`E = V ÷ d = 12 V ÷ 3.0 × 10⁻³ m = 4000 V/m. The 4.0 V/m leaves the gap in millimeters, 36 multiplies 12 by 3.0, and 0.25 divides the gap by the voltage.`,
      },
      {
        question: r`In gel electrophoresis, a uniform field of 500 V/m is needed along a gel that is 20 cm long, with an electrode at each end. What voltage must the power supply provide?`,
        options: [r`10 000 V`, r`100 V`, r`2500 V`, r`25 V`],
        correctAnswer: 1,
        explanation: r`E = V ÷ d, so V = Ed = (500 V/m)(0.20 m) = 100 V. Using 20 without converting centimeters gives 10 000 V, dividing the field by 0.20 m gives 2500, and dividing it by 20 gives 25.`,
      },
      {
        question: r`A 9.0 V battery is connected across two parallel plates. How far apart must the plates be for the field between them to be 3.0 × 10⁴ V/m?`,
        options: [r`3.0 mm`, r`0.030 mm`, r`3.3 mm`, r`0.30 mm`],
        correctAnswer: 3,
        explanation: r`d = V ÷ E = 9.0 V ÷ 3.0 × 10⁴ V/m = 3.0 × 10⁻⁴ m = 0.30 mm. The 3.0 mm and 0.030 mm answers slip a power of ten in converting to millimeters, and the 3.3 comes from dividing the field by the voltage.`,
      },
      {
        question: r`The voltage across a pair of parallel plates is tripled, and the plates are moved to half their original separation. How does the field between them change?`,
        options: [r`It becomes 6 times as large`, r`It becomes 1.5 times as large`, r`It falls to two thirds`, r`It falls to one sixth`],
        correctAnswer: 0,
        explanation: r`E = V ÷ d, so the field is multiplied by 3 ÷ ½ = 6. Multiplying 3 by ½ gives 1.5, which treats the field as V times d. Two thirds and one sixth turn one or both of the factors upside down.`,
      },
      {
        question: r`Two vertical plates are 5.0 mm apart with 30 V across them. The plate on the right is the positive one. What is the field between the plates?`,
        options: [r`6000 V/m, pointing to the right`, r`150 V/m, pointing to the left`, r`150 V/m, pointing to the right`, r`6000 V/m, pointing to the left`],
        correctAnswer: 3,
        explanation: r`E = V ÷ d = 30 V ÷ 5.0 × 10⁻³ m = 6000 V/m, and the field points from the + plate to the − plate, which here is from right to left. Pointing right would be toward the positive plate. The 150 multiplies 30 by 5.0 instead of dividing by the gap in meters.`,
      },
      {
        question: r`Two large parallel plates are 8.0 cm apart with 200 V across them. What is the field at the point midway between the plates, and what is it just outside the pair of plates?`,
        options: [r`2500 V/m at the midpoint; about zero outside`, r`5000 V/m at the midpoint; about zero outside`, r`2500 V/m at the midpoint; 2500 V/m outside`, r`5000 V/m at the midpoint; 2500 V/m outside`],
        correctAnswer: 0,
        explanation: r`The field between the plates is uniform, E = V ÷ d = 200 V ÷ 0.080 m = 2500 V/m at every point in the gap, the midpoint included. Outside the plates it is essentially zero. The 5000 V/m divides by the 4.0 cm distance to the midpoint instead of the full gap.`,
      },
    ],
  },
  [r`How does a charge move between the plates?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A proton, with charge 1.6 × 10⁻¹⁹ C, sits in the uniform field of 5.0 × 10⁴ N/C between two charged plates. How large is the electric force on it?`,
        options: [r`3.2 × 10⁻²⁴ N`, r`8.0 × 10⁻¹⁵ N`, r`3.1 × 10²³ N`, r`8.0 × 10⁻²³ N`],
        correctAnswer: 1,
        explanation: r`F = qE = 1.6 × 10⁻¹⁹ C × 5.0 × 10⁴ N/C = 8.0 × 10⁻¹⁵ N. Dividing the charge by the field gives 3.2 × 10⁻²⁴, dividing the field by the charge gives 3.1 × 10²³, and 8.0 × 10⁻²³ subtracts the exponents instead of adding them.`,
      },
      {
        question: r`An electron, with charge of size 1.6 × 10⁻¹⁹ C and mass about 9 × 10⁻³¹ kg, is in a uniform field of 4.5 × 10³ N/C between two plates. What is the size of its acceleration?`,
        options: [r`7.2 × 10⁻¹⁶ m/s²`, r`8.0 × 10¹⁴ m/s²`, r`6.5 × 10⁻⁴⁶ m/s²`, r`1.3 × 10⁻¹⁵ m/s²`],
        correctAnswer: 1,
        explanation: r`F = qE = (1.6 × 10⁻¹⁹)(4.5 × 10³) = 7.2 × 10⁻¹⁶ N, and a = F ÷ m = 7.2 × 10⁻¹⁶ ÷ 9 × 10⁻³¹ = 8.0 × 10¹⁴ m/s². The 7.2 × 10⁻¹⁶ stops at the force, 6.5 × 10⁻⁴⁶ multiplies the force by the mass, and 1.3 × 10⁻¹⁵ divides the mass by the force.`,
      },
      {
        question: r`A tiny oil drop carrying a charge of 3.2 × 10⁻¹⁹ C hangs motionless between two horizontal charged plates. The drop's weight is 6.4 × 10⁻¹⁵ N. How strong is the field between the plates?`,
        options: [r`5.0 × 10⁻⁵ N/C`, r`2.0 × 10⁻³³ N/C`, r`2.0 × 10⁻⁴ N/C`, r`2.0 × 10⁴ N/C`],
        correctAnswer: 3,
        explanation: r`The drop is at rest, so the electric force balances its weight: qE = 6.4 × 10⁻¹⁵ N, and E = 6.4 × 10⁻¹⁵ ÷ 3.2 × 10⁻¹⁹ = 2.0 × 10⁴ N/C. Dividing the charge by the force gives 5.0 × 10⁻⁵, multiplying them gives 2.0 × 10⁻³³, and 2.0 × 10⁻⁴ gets the sign of the exponent wrong.`,
      },
      {
        question: r`A charged dust speck between the plates of an air cleaner feels a force of 6.0 × 10⁻⁶ N where the field is 3.0 × 10³ N/C. What is the size of the speck's charge?`,
        options: [r`2.0 μC`, r`2.0 nC`, r`18 mC`, r`0.50 nC`],
        correctAnswer: 1,
        explanation: r`q = F ÷ E = 6.0 × 10⁻⁶ N ÷ 3.0 × 10³ N/C = 2.0 × 10⁻⁹ C = 2.0 nC. The 2.0 μC slips a factor of a thousand in the exponents, 18 mC multiplies the force by the field, and 0.50 divides 3.0 by 6.0.`,
      },
      {
        question: r`A proton and an alpha particle are in the same uniform field between two plates. The alpha particle has twice the proton's charge and about four times its mass. Compared with the proton, what does the alpha particle have?`,
        options: [r`Twice the force and twice the acceleration`, r`The same force and a quarter of the acceleration`, r`Four times the force and the same acceleration`, r`Twice the force and half the acceleration`],
        correctAnswer: 3,
        explanation: r`F = qE, so twice the charge in the same field means twice the force. The acceleration is F ÷ m: 2 ÷ 4 = one half. Twice the acceleration forgets the larger mass, the same force forgets the larger charge, and four times the force wrongly ties the force to the mass.`,
      },
      {
        question: r`Two parallel plates are 2.0 cm apart with 400 V across them. A calcium ion with charge +3.2 × 10⁻¹⁹ C is in the gap. What is the electric force on the ion?`,
        options: [r`6.4 × 10⁻¹⁵ N, toward the + plate`, r`1.3 × 10⁻¹⁶ N, toward the − plate`, r`6.4 × 10⁻¹⁵ N, toward the − plate`, r`1.3 × 10⁻¹⁶ N, toward the + plate`],
        correctAnswer: 2,
        explanation: r`The field is E = V ÷ d = 400 V ÷ 0.020 m = 2.0 × 10⁴ V/m, so F = qE = 3.2 × 10⁻¹⁹ C × 2.0 × 10⁴ V/m = 6.4 × 10⁻¹⁵ N. A positive ion is pushed along the field, toward the − plate. The 1.3 × 10⁻¹⁶ multiplies the charge by the 400 V instead of by the field.`,
      },
    ],
  },
}
