import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the Circuits Part 2 video deck (`mcat-circ2`): one
 * per review card, keyed by the card's exact front text. Each asks the student
 * to use the card's idea in a new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  // Video 1
  [r`Give the symbol and the SI unit for current, for voltage and for resistance.`]: {
    question: r`An ammeter in series with a component reads 0.25 A, and the component is stamped 80 Ω. Multiplying those two numbers gives which quantity?`,
    options: [r`The power it uses, 20 W`, r`The current in it, 20 A`, r`The charge on it, 20 C`, r`The voltage across it, 20 V`],
    correctAnswer: 3,
    explanation: r`Amperes times ohms gives volts, because V = IR, so 0.25 A × 80 Ω is the 20 V across the component. Calling the product a power confuses IR with I²R, which is only 5 W here. A current or a charge cannot come from multiplying a current by a resistance.`,
  },
  [r`State Kirchhoff's junction rule. Which conservation law is it?`]: {
    question: r`One wire brings 9 A to a node. Three branch wires carry current away from it: one carries 2 A, one carries 3 A, and the last is unmeasured. What current does the last branch carry?`,
    options: [r`5 A`, r`9 A`, r`4 A`, r`14 A`],
    correctAnswer: 2,
    explanation: r`Charge cannot pile up at the node, so the 9 A arriving must equal the total leaving: 2 + 3 + 4. The 5 A answer is just the sum of the two measured branches, 9 A assumes every wire carries the full current, and 14 A adds all three numbers instead of balancing in against out.`,
  },
  [r`State Kirchhoff's loop rule. Which conservation law is it?`]: {
    question: r`One trip around a closed loop crosses a battery, a rise of 24 V, and then three resistors. Two of the resistors drop 9 V and 7 V. What is the drop across the third resistor?`,
    options: [r`16 V`, r`24 V`, r`40 V`, r`8 V`],
    correctAnswer: 3,
    explanation: r`Every volt gained in the battery is dropped along the way, so 24 = 9 + 7 + 8. The 16 V answer is the sum of the two known drops, 24 V gives the whole rise to one resistor, and 40 V adds everything instead of making the rises and drops cancel.`,
  },
  [r`Walking a loop, what do you record when you cross a resistor?`]: {
    question: r`A current of 3 A flows through a 4 Ω resistor from point X to point Y. A student writing a loop equation walks through the resistor from X to Y. What goes into the sum for this resistor?`,
    options: [r`+12 V`, r`−0.75 V`, r`+0.75 V`, r`−12 V`],
    correctAnswer: 3,
    explanation: r`Walking with the current through a resistor is walking downhill in potential, so the entry is −IR = −(3 A × 4 Ω) = −12 V. The +12 V answer has the sign for a walk against the current. The 0.75 V answers divide the current by the resistance instead of multiplying.`,
  },
  [r`Walking a loop, what do you record when you cross a source or an ideal wire?`]: {
    question: r`A loop walk passes through an ideal 6 V battery from its − terminal to its + terminal, then along a stretch of ideal wire that carries 2 A. What total potential change is recorded for these two pieces?`,
    options: [r`−6 V`, r`+4 V`, r`+6 V`, r`+8 V`],
    correctAnswer: 2,
    explanation: r`Crossing a source from − to + is a rise of +6 V, and an ideal wire has no resistance, so it adds 0 V whatever current it carries. The −6 V answer has the sign for a + to − crossing. The +4 V and +8 V answers wrongly give the wire a 2 V change because of its 2 A.`,
  },
  [r`A current you guessed comes out negative. What does that mean?`]: {
    question: r`A student assumes the current in a 5 Ω resistor flows from node P to node Q, and the algebra returns I = −3 A. Which statement describes the resistor?`,
    options: [r`3 A flows from Q to P, and Q is 15 V above P`, r`3 A flows from P to Q, and P is 15 V above Q`, r`3 A flows from Q to P, and P is 15 V above Q`, r`3 A flows from P to Q, and Q is 15 V above P`],
    correctAnswer: 0,
    explanation: r`The minus sign only reverses the guessed arrow, so 3 A really flows from Q to P, and the size, 3 A, stands. Current runs through a resistor from high potential to low, so Q sits IR = 15 V above P. The other statements either keep the guessed direction or put the higher potential at the end the current is heading toward.`,
  },
  [r`How do two sources in one loop combine?`]: {
    question: r`A flashlight holds three 1.5 V cells in a row feeding a 3 Ω bulb, all in one loop. One of the three cells has been put in backwards. Treating the cells as ideal, what current flows?`,
    options: [r`1.5 A`, r`1.0 A`, r`0.0 A`, r`0.5 A`],
    correctAnswer: 3,
    explanation: r`Two cells push one way and one pushes the other, so the net voltage is 1.5 + 1.5 − 1.5 = 1.5 V and I = 1.5 V / 3 Ω = 0.5 A. The 1.5 A answer adds all three cells as if they agreed, 1.0 A just leaves the reversed cell out, and 0.0 A assumes one reversed cell cancels everything.`,
  },
  [r`With the − terminal grounded, how does the potential change around a series loop?`]: {
    question: r`An ideal 24 V supply has its negative side at 0 V. From its positive side the current passes through a chain of three heater strips, 2 Ω, then 6 Ω, then 4 Ω. A voltmeter probe touches the positive side and then the point after each strip. Which list gives the four readings in turn?`,
    options: [r`24 V, 16 V, 8 V, 0 V`, r`24 V, 20 V, 8 V, 0 V`, r`24 V, 22 V, 16 V, 12 V`, r`0 V, 4 V, 16 V, 24 V`],
    correctAnswer: 1,
    explanation: r`The current is 24 V / 12 Ω = 2 A, so the steps down are 4 V, 12 V and 8 V: the potential reads 24, 20, 8 and 0 V, with the biggest step across the 6 Ω. Equal 8 V steps ignore the unequal resistances, subtracting 2, 6 and 4 treats ohms as volts and never reaches ground, and the rising list climbs in the direction the current flows.`,
  },
  // Video 2
  [r`How do you write the loop equation for a single loop?`]: {
    question: r`A 20 V cell, a 4 Ω lamp and a 6 Ω buzzer form one closed path. Starting at the cell's − terminal, you trace the path in the direction of the current I. Which equation do you write?`,
    options: [r`+20 + 4I + 6I = 0`, r`+20 − 4I − 6I = 0`, r`−20 − 4I − 6I = 0`, r`+20 − 4I + 6I = 0`],
    correctAnswer: 1,
    explanation: r`The cell is crossed from − to +, a rise of +20, and each of the two resistances crossed with the current is a drop, −4I and −6I, so the sum +20 − 4I − 6I is set to zero and I = 2 A. Giving the resistors plus signs treats drops as rises, a −20 belongs to a + to − crossing, and mixed resistor signs would mean the current reverses partway round.`,
  },
  [r`Once you have $I$, how do you find each drop, and how do you check them?`]: {
    question: r`One cell pushes 2 A around a ring of three heating coils of 3 Ω, 4 Ω and 5 Ω. What voltage sits across each coil, and what must the cell's voltage be?`,
    options: [r`6 V, 8 V and 10 V; cell 10 V`, r`1.5 V, 2 V and 2.5 V; cell 6 V`, r`6 V, 8 V and 10 V; cell 24 V`, r`8 V, 8 V and 8 V; cell 24 V`],
    correctAnswer: 2,
    explanation: r`Each drop is IR, so 2 A gives 6 V, 8 V and 10 V, and the drops must add back to the source: 24 V. A 10 V cell matches only the largest drop instead of the sum. The 1.5, 2 and 2.5 V set divides resistance by current, and three equal 8 V drops ignore that the coils differ.`,
  },
  [r`How do you find the potential at each node?`]: {
    question: r`The negative side of an ideal 9 V supply is taken as 0 V. From the positive side, 0.5 A passes through a 4 Ω coil, then a 6 Ω coil, then an 8 Ω coil. A probe touches the junction of the 6 Ω and 8 Ω coils. What does it read?`,
    options: [r`5 V`, r`3 V`, r`7 V`, r`4 V`],
    correctAnswer: 3,
    explanation: r`Start at 9 V and subtract each drop in turn: 2 V across the 4 Ω leaves 7 V, then 3 V across the 6 Ω leaves 4 V. As a check, the last 4 V drop across the 8 Ω lands on 0 V. The 5 V answer is the total dropped so far, 3 V is the drop across the 6 Ω alone, and 7 V stops one node early.`,
  },
  [r`Two sources oppose each other in one loop. What is the net voltage, and which way does the current run?`]: {
    question: r`A 14 V charger is connected to a 12 V car battery, + terminal to + terminal and − to −, so the two oppose each other around the loop. The loop's total resistance is 0.5 Ω. What current flows, and which way?`,
    options: [r`4 A, driven backward through the 14 V charger`, r`52 A, driven backward through the 12 V battery`, r`4 A, driven backward through the 12 V battery`, r`52 A, driven backward through the 14 V charger`],
    correctAnswer: 2,
    explanation: r`Opposing sources subtract, so the net voltage is 14 − 12 = 2 V and I = 2 V / 0.5 Ω = 4 A. The larger source wins, so the charger pushes current into the battery's + terminal, backward through the battery. The 52 A answers add the two voltages, and sending the current backward through the charger lets the smaller source set the direction.`,
  },
  [r`You walk the loop against the current instead. What changes?`]: {
    question: r`Walking a loop WITH the current, a student correctly writes +12 − 4I − 2I = 0. A classmate walks the same loop the other way, against the current. What does the classmate write?`,
    options: [r`−12 + 4I + 2I = 0`, r`+12 + 4I + 2I = 0`, r`−12 − 4I − 2I = 0`, r`−12 + 4I − 2I = 0`],
    correctAnswer: 0,
    explanation: r`Reversing the walk flips every sign: the battery is now crossed from + to −, giving −12, and each resistor is crossed against the current, giving +4I and +2I. The sum still closes with I = 2 A. Flipping only the resistors or only the battery gives an equation with a negative current, and flipping one resistor but not the other is not a consistent walk.`,
  },
  [r`How is the drop across a resistor different from the potential at the node after it?`]: {
    question: r`A current of 2 A flows through a 3 Ω resistor. The node the current enters from sits at 10 V above ground. What are the drop across the resistor and the potential of the node after it?`,
    options: [r`Drop 6 V; node at 4 V`, r`Drop 6 V; node at 6 V`, r`Drop 4 V; node at 6 V`, r`Drop 6 V; node at 16 V`],
    correctAnswer: 0,
    explanation: r`The drop is the difference across the resistor, IR = 6 V. The node potential is measured from ground: 10 V − 6 V = 4 V. Putting the node at 6 V confuses the drop with the potential, the 4 V drop swaps the two numbers, and 16 V adds the drop even though potential falls in the direction of the current.`,
  },
  // Video 3
  [r`What do the prefixes in mA and kΩ mean, and what do you get when you multiply mA by kΩ?`]: {
    question: r`A sensor circuit has 12 V across a 4 kΩ resistor. Working directly in volts and kilohms, what current flows through the resistor?`,
    options: [r`3 A`, r`3 mA`, r`48 mA`, r`0.3 mA`],
    correctAnswer: 1,
    explanation: r`Volts divided by kilohms gives milliamps, because the factor of 10³ in the kilohm becomes 10⁻³ in the current: 12 / 4 = 3 mA. Writing 3 A drops the prefix and is a thousand times too big, 48 mA multiplies instead of dividing, and 0.3 mA slips a power of ten.`,
  },
  [r`How do you trace a network by its nodes?`]: {
    question: r`A battery is connected between node a and node c. Resistor R₁ runs from node a to node b, R₂ runs from node b to node c, and R₃ runs from node a to node c. Nothing else touches node b. How are the resistors arranged?`,
    options: [r`R₁ and R₃ in series, and that pair in parallel with R₂`, r`R₂ and R₃ in parallel, and that pair in series with R₁`, r`R₁ and R₃ in parallel, and that pair in series with R₂`, r`R₁ and R₂ in series, and that pair in parallel with R₃`],
    correctAnswer: 3,
    explanation: r`Node b joins only R₁ and R₂, with no junction between them, so those two are in series from a to c. R₃ also runs from a to c, the same two nodes, so it is in parallel with that series pair. The other descriptions need two resistors to share both end nodes, or to meet at a node with no third connection, and neither is true of the pairs they name.`,
  },
  [r`What is the order for solving a network?`]: {
    question: r`A battery feeds a 4 Ω resistor in series with a two-branch group. One branch of the group is a single 6 Ω resistor. The other branch is a 1 Ω and a 2 Ω resistor in series. What is the correct first step in finding the current from the battery?`,
    options: [r`Add the 1 Ω and the 2 Ω to make a 3 Ω branch`, r`Add the 4 Ω and the 6 Ω to make a 10 Ω path`, r`Combine the 6 Ω and the 2 Ω in parallel first`, r`Divide the battery voltage by the 4 Ω alone`],
    correctAnswer: 0,
    explanation: r`You collapse the innermost group first, and that is the 1 Ω and 2 Ω in series inside one branch. Only then can the 3 Ω branch be combined with the 6 Ω, and the result added to the 4 Ω. The 4 Ω and 6 Ω are not in series because a junction lies between them, the 6 Ω and 2 Ω do not share both nodes, and the battery voltage is not all across the 4 Ω.`,
  },
  [r`Write the voltage divider for two resistors in series.`]: {
    question: r`An ideal 10 V supply powers a 100 Ω fixed resistor in series with a thermistor whose resistance is 400 Ω at room temperature. What voltage appears across the thermistor?`,
    options: [r`2.0 V`, r`2.5 V`, r`8.0 V`, r`5.0 V`],
    correctAnswer: 2,
    explanation: r`Series resistors share the voltage in proportion to resistance: the thermistor gets 10 V × 400 / (100 + 400) = 8 V. The 2 V answer is the share of the 100 Ω fixed resistor, 2.5 V uses the ratio 100/400 with no sum underneath, and 5 V splits the voltage evenly as if the resistors were equal.`,
  },
  [r`Write the current divider for two resistors in parallel.`]: {
    question: r`A current of 10 A reaches a fork in a heating panel. One strip is 4 Ω and the other is 16 Ω, and the strips rejoin at the far end. How much of the current takes the 16 Ω strip?`,
    options: [r`8.0 A`, r`2.0 A`, r`5.0 A`, r`2.5 A`],
    correctAnswer: 1,
    explanation: r`In the current divider the OTHER resistor goes on top: 10 A × 4 / (4 + 16) = 2 A, the smaller share through the larger resistance. The 8 A answer puts the branch's own 16 Ω on top, 5 A splits the current evenly, and 2.5 A uses the ratio 4/16 with no sum underneath.`,
  },
  [r`A current splits between 1 Ω and 3 Ω branches in parallel. In what ratio?`]: {
    question: r`A 2 Ω branch and a 6 Ω branch are in parallel. An ammeter in the 2 Ω branch reads 1.5 A. What are the current in the 6 Ω branch and the total current entering the pair?`,
    options: [r`4.5 A in the 6 Ω branch; 6.0 A in total`, r`1.5 A in the 6 Ω branch; 3.0 A in total`, r`0.5 A in the 6 Ω branch; 2.0 A in total`, r`0.5 A in the 6 Ω branch; 1.5 A in total`],
    correctAnswer: 2,
    explanation: r`Parallel branches split current inversely with resistance, so the 6 Ω branch, with three times the resistance, carries one third of 1.5 A: 0.5 A, and the total is 2.0 A. The 4.5 A answer gives the bigger share to the bigger resistance, 1.5 A in each splits evenly, and a 1.5 A total forgets to add the two branches.`,
  },
  [r`A circuit changes. In what order do you reason?`]: {
    question: r`An ideal power supply feeds a fixed resistor $R_s$ and then a group of heaters wired side by side. One heater is swapped for one with a larger resistance. What happens to the voltage across the heater group?`,
    options: [r`It falls: the total current falls, so the group gets less`, r`It falls: the total current rises, so $R_s$ drops more`, r`It stays put: a group always has the full supply voltage`, r`It rises: the total current falls, so $R_s$ drops less`],
    correctAnswer: 3,
    explanation: r`Reason in order: the group's resistance rises, so the equivalent resistance rises and the total current falls. The series resistor then drops less voltage, which leaves more for the group. Saying the group gets less skips the series drop, a rising total current gets the first step backward, and the group has the full supply voltage only when nothing is in series with it.`,
  },
  [r`A bank sits behind a series resistor and a branch is added to it. What happens to the old branch currents?`]: {
    question: r`An ideal 24 V supply powers a 4 Ω cable that leads to one 8 Ω heater. A second 8 Ω heater is then plugged in beside the first, sharing its two connection points. What happens to the current in the original heater?`,
    options: [r`It falls from 2.0 A to 1.0 A`, r`It falls from 2.0 A to 1.5 A`, r`It rises from 2.0 A to 3.0 A`, r`It holds at 2.0 A throughout`],
    correctAnswer: 1,
    explanation: r`Before: 24 V / 12 Ω = 2 A. After: the two 8 Ω heaters make 4 Ω, the total is 8 Ω, the supply current rises to 3 A, the 4 Ω drops 12 V, and each heater gets 12 V / 8 Ω = 1.5 A. Falling to 1.0 A shares out the old total current, 3.0 A is the new supply current, and holding at 2.0 A is true only with no cable resistance.`,
  },
  [r`A bank sits directly across an ideal source and a branch is added. What happens to the other branches?`]: {
    question: r`A 12 V car battery, treated as ideal, runs one 4 Ω seat heater wired straight to its terminals. A second 4 Ω seat heater is then wired straight to the same terminals. What are the current in the first heater and the battery current now?`,
    options: [r`1.5 A in the first heater; 3 A from the battery`, r`3 A in the first heater; 3 A from the battery`, r`3 A in the first heater; 6 A from the battery`, r`1.5 A in the first heater; 6 A from the battery`],
    correctAnswer: 2,
    explanation: r`With nothing in series, each branch keeps the full 12 V, so the first heater still carries 12 V / 4 Ω = 3 A and the new branch adds 3 A more, 6 A in total. Dropping the first heater to 1.5 A treats the old current as shared between the branches, and a 3 A battery current forgets that the new branch draws its own current.`,
  },
  [r`A bare wire shorts one branch of a parallel bank. What happens?`]: {
    question: r`An ideal 18 V supply feeds a 3 Ω coil, followed by a 6 Ω lamp and a 12 Ω lamp wired side by side. A dropped screwdriver then bridges the two terminals of the 12 Ω lamp with negligible resistance. What are the current in the 6 Ω lamp and the supply current now?`,
    options: [r`0 A in the 6 Ω; 6 A from the supply`, r`2 A in the 6 Ω; 2 A from the supply`, r`0 A in the 6 Ω; 0 A from the supply`, r`3 A in the 6 Ω; 6 A from the supply`],
    correctAnswer: 0,
    explanation: r`The screwdriver joins the two nodes that both lamps share, so both the 12 Ω and the 6 Ω have 0 V across them and carry nothing. Only the 3 Ω is left, so the supply delivers 18 V / 3 Ω = 6 A, all through the screwdriver. The 2 A answer shorts only the 12 Ω and leaves 3 Ω + 6 Ω, zero supply current forgets the 3 Ω still completes the loop, and 3 A puts the full 18 V across the 6 Ω.`,
  },
  [r`How does current between two electrodes divide among the body's tissues?`]: {
    question: r`During stimulation therapy, charge can travel between the same two contact points through a 500 Ω strip of muscle or through a 2000 Ω layer of fat lying beside it. How do the two currents compare?`,
    options: [r`The fat carries 4 times the current of the muscle`, r`The muscle carries 4 times the current of the fat`, r`The muscle carries 16 times the current of the fat`, r`The muscle carries the same current as the fat does`],
    correctAnswer: 1,
    explanation: r`The two tissues are parallel paths with the same voltage across them, so current divides inversely with resistance: the muscle, with one quarter of the resistance, carries 4 times the current. Giving the larger share to the fat sends current the hard way, 16 times squares the ratio as if this were a power comparison, and equal currents ignore the resistances.`,
  },
  // Video 4
  [r`A resistor is in series with a parallel pair. How do you find the total current?`]: {
    question: r`A 30 V ideal battery connects to a 4 Ω resistor, and the far end of that resistor connects to a 10 Ω and a 15 Ω resistor that sit side by side between the same two nodes. What total current leaves the battery?`,
    options: [r`5.0 A`, r`3.0 A`, r`1.0 A`, r`7.5 A`],
    correctAnswer: 1,
    explanation: r`Collapse the pair first: (10 × 15) / (10 + 15) = 6 Ω. Add the series 4 Ω to get 10 Ω, so I = 30 V / 10 Ω = 3 A. The 5 A answer divides by the pair's 6 Ω alone, about 1 A adds all three resistors as if they were in series, and 7.5 A divides by the 4 Ω alone.`,
  },
  [r`How do you walk back out to find each branch current?`]: {
    question: r`An ideal 20 V supply sends 2 A through a 4 Ω cable to two heaters wired side by side, one of 8 Ω and one of 24 Ω. What current does the 8 Ω heater carry?`,
    options: [r`1.5 A`, r`2.5 A`, r`1.0 A`, r`0.5 A`],
    correctAnswer: 0,
    explanation: r`The cable drops IR = 2 A × 4 Ω = 8 V, so 12 V is left across the heaters and the 8 Ω heater carries 12 V / 8 Ω = 1.5 A. The 2.5 A answer puts the full 20 V across that heater, 1.0 A splits the total evenly, and 0.5 A is the current in the 24 Ω heater.`,
  },
  [r`What is the voltage across a parallel pair that sits behind a series resistor?`]: {
    question: r`A 9 V ideal battery sends a total current of 1.5 A through a 2 Ω resistor and then into two resistors wired in parallel. What is the voltage across the parallel resistors?`,
    options: [r`6 V`, r`9 V`, r`3 V`, r`12 V`],
    correctAnswer: 0,
    explanation: r`The series resistor uses up IR = 1.5 A × 2 Ω = 3 V, so the parallel resistors get what is left: 9 V − 3 V = 6 V. The 9 V answer gives them the full battery voltage, 3 V is the series drop itself, and 12 V adds the drop to the battery voltage.`,
  },
  [r`A branch opens. How do you re-solve the circuit?`]: {
    question: r`An ideal 12 V supply sends 3 A through a 2 Ω cable to two 4 Ω heaters wired side by side. One heater is unplugged. What current now flows in the heater that is left?`,
    options: [r`3.0 A`, r`1.5 A`, r`2.0 A`, r`6.0 A`],
    correctAnswer: 2,
    explanation: r`Start again from the equivalent resistance: now 2 Ω + 4 Ω = 6 Ω, so the current is 12 V / 6 Ω = 2 A, all through the heater that is left. The 3 A answer carries the old total current over, 1.5 A assumes the heater's own current never changed, and 6 A divides the supply voltage by the cable resistance alone.`,
  },
  [r`Write both divider formulas.`]: {
    question: r`A 20 Ω and a 30 Ω resistor are first put in series across 10 V, then separately put in parallel with a total of 5 A entering the pair. What are the voltage across the 20 Ω resistor in series and the current through it in parallel?`,
    options: [r`4 V in series; 3 A in parallel`, r`4 V in series; 2 A in parallel`, r`6 V in series; 3 A in parallel`, r`6 V in series; 2 A in parallel`],
    correctAnswer: 0,
    explanation: r`In series the 20 Ω takes its own share, 10 V × 20/50 = 4 V. In parallel the other resistor goes on top, 5 A × 30/50 = 3 A. Pairing 4 V with 2 A puts the resistor's own value on top in both formulas, 6 V with 3 A puts the other on top in both, and 6 V with 2 A swaps the two rules.`,
  },
  [r`What two checks finish a network problem?`]: {
    question: r`A total current of 6 A enters a parallel pair made of a 3 Ω and a 6 Ω resistor. Four students report branch currents. Which report passes both final checks?`,
    options: [r`2 A in the 3 Ω and 4 A in the 6 Ω`, r`3 A in the 3 Ω and 3 A in the 6 Ω`, r`4 A in the 3 Ω and 2 A in the 6 Ω`, r`6 A in the 3 Ω and 3 A in the 6 Ω`],
    correctAnswer: 2,
    explanation: r`The currents must add to the total and give both branches the same voltage. Only 4 A and 2 A do both: they add to 6 A and each gives 12 V. The 2 A and 4 A report gives 6 V and 24 V, the even split gives 9 V and 18 V, and 6 A with 3 A gives matching voltages but adds to 9 A.`,
  },
  // Video 5
  [r`What symbol stands for power, and what is its SI unit?`]: {
    question: r`A phone charger supplies 2 A at 5 V. Which statement describes what it delivers?`,
    options: [r`10 W, which is 10 J every hour`, r`10 J, which is 10 W every second`, r`10 W, which is 10 J every second`, r`2.5 W, which is 2.5 J every second`],
    correctAnswer: 2,
    explanation: r`Power is P = IV = 10 W, and a watt is a joule per second, so the charger delivers 10 J each second. A joule every hour is the wrong rate, calling the product 10 J swaps the units of energy and power, and 2.5 comes from dividing the voltage by the current.`,
  },
  [r`What symbol stands for energy, and what is its SI unit? What other energy unit do electricity bills use?`]: {
    question: r`A smart plug logs a heater's run in two different units. Which pair of readings could both be the ENERGY the heater used?`,
    options: [r`7.2 × 10⁶ J and 2 kW`, r`7.2 × 10⁶ J and 2 kWh`, r`7.2 × 10⁶ W and 2 kWh`, r`7.2 × 10⁶ W and 2 kW`],
    correctAnswer: 1,
    explanation: r`Energy is measured in joules, and the kilowatt-hour is also an energy unit: 2 kWh × 3.6 × 10⁶ J/kWh = 7.2 × 10⁶ J. Any pair that includes a reading in W or kW contains a power, a rate of energy use, so it cannot be a pair of energies.`,
  },
  [r`Write the three forms of electrical power, with the unit.`]: {
    question: r`A resistor of 5 Ω has 20 V across it. How much power does it dissipate?`,
    options: [r`80 W`, r`4 W`, r`100 W`, r`2000 W`],
    correctAnswer: 0,
    explanation: r`With voltage and resistance known, use P = V²/R = 400 / 5 = 80 W. The 4 answer is V/R, which is the current in amperes, not a power. The 100 answer multiplies V by R, and 2000 multiplies V² by R instead of dividing.`,
  },
  [r`Two resistors carry the same current (series). Which form of power do you use, and which resistor dissipates more?`]: {
    question: r`A thin extension cord with 2 Ω of resistance is in series with a 22 Ω heater, and 5 A flows through both. How much power does each one dissipate?`,
    options: [r`Cord 550 W; heater 50 W`, r`Cord 10 W; heater 110 W`, r`Cord 300 W; heater 300 W`, r`Cord 50 W; heater 550 W`],
    correctAnswer: 3,
    explanation: r`They share the current, so use P = I²R: 25 × 2 = 50 W in the cord and 25 × 22 = 550 W in the heater, more in the larger resistance. Swapping the two gives more to the smaller resistance, which is the parallel result. The 10 and 110 values are IR, the voltages, and equal powers assume a shared current means a shared power.`,
  },
  [r`Two resistors have the same voltage (parallel, or any outlet). Which form do you use, and which dissipates more?`]: {
    question: r`A 12 V car battery runs a 3 Ω defroster and a 6 Ω fan that are wired in parallel across it. How much power does each one draw?`,
    options: [r`Defroster 24 W; fan 48 W`, r`Defroster 36 W; fan 72 W`, r`Defroster 4 W; fan 2 W`, r`Defroster 48 W; fan 24 W`],
    correctAnswer: 3,
    explanation: r`They share the voltage, so use P = V²/R: 144 / 3 = 48 W for the defroster and 144 / 6 = 24 W for the fan, more in the smaller resistance. Swapping them gives more to the larger resistance, which is the series result. The 36 and 72 values multiply V by R, and 4 and 2 are V/R, the currents.`,
  },
  [r`At fixed $R$, the current doubles. What happens to the power?`]: {
    question: r`A heating wire dissipates 20 W while carrying 1.5 A. The current is raised to 3.0 A and the wire's resistance does not change. What power does it dissipate now?`,
    options: [r`40 W`, r`20 W`, r`80 W`, r`160 W`],
    correctAnswer: 2,
    explanation: r`At fixed resistance P = I²R, so doubling the current multiplies the power by 2² = 4: 80 W. The 40 W answer scales the power in step with the current, 20 W leaves it unchanged, and 160 W uses a factor of 8.`,
  },
  [r`At fixed $V$, the resistance halves. What happens to the power?`]: {
    question: r`A toaster draws 600 W from a 120 V outlet. Its element is replaced by one with half the resistance and it is plugged into the same outlet. What power does it draw now?`,
    options: [r`1200 W`, r`300 W`, r`2400 W`, r`600 W`],
    correctAnswer: 0,
    explanation: r`The outlet fixes the voltage, so P = V²/R, and halving the resistance doubles the power to 1200 W. The 300 W answer assumes less resistance means less power, 2400 W squares the factor of 2, and 600 W assumes the power rating travels with the appliance.`,
  },
  [r`$V$ triples and $R$ doubles. By what factor does the power change?`]: {
    question: r`A travel heater made for 240 V is run on 120 V, and its element is swapped for one with half the resistance. Compared with its original power, the heater's power now`,
    options: [r`falls to one half`, r`stays the same`, r`falls to one quarter`, r`falls to one eighth`],
    correctAnswer: 0,
    explanation: r`Multiply the factor changes in P = V²/R: the voltage factor is (1/2)² = 1/4, and halving R multiplies the power by 2, so the result is 1/2. No change treats the power as proportional to V, not V². One quarter ignores the new resistance, and one eighth multiplies by 1/2 for the resistance when it should divide.`,
  },
  [r`How do you get energy from power? What is a kilowatt-hour?`]: {
    question: r`An oven draws a steady 2 kW while it bakes for an hour and a half. What does the electricity meter record for that bake?`,
    options: [r`3 kW`, r`180 kWh`, r`180 kW`, r`3 kWh`],
    correctAnswer: 3,
    explanation: r`A meter records energy, E = Pt = 2 kW × 1.5 h = 3 kWh, and the kilowatt-hour is a unit of energy. Answers in kW are powers, not energies, so they cannot be what the meter records. The 180 values multiply by 90 minutes with no conversion to hours.`,
  },
  [r`How does the power an ideal source delivers compare with the power in the resistors?`]: {
    question: r`A 9 V ideal battery powers a network of three resistors that dissipate 4 W, 6 W and 8 W. What current leaves the battery?`,
    options: [r`0.5 A`, r`2.0 A`, r`18 A`, r`9.0 A`],
    correctAnswer: 1,
    explanation: r`The source delivers exactly what the resistors dissipate, 4 + 6 + 8 = 18 W, and that equals V × I, so I = 18 W / 9 V = 2 A. The 0.5 A answer divides the voltage by the power, 18 A reads the total power as a current, and 9 A reads the voltage as a current.`,
  },
  [r`Why do power lines run at high voltage?`]: {
    question: r`A plant sends 20 kW down a transmission line whose wires have a total resistance of 5 Ω. The power is sent at a line voltage of 1000 V. How much power is lost as heat in the line?`,
    options: [r`200 kW`, r`100 W`, r`2 kW`, r`20 kW`],
    correctAnswer: 2,
    explanation: r`The line current is I = P/V = 20 000 W / 1000 V = 20 A, and the loss is I²R = 400 × 5 = 2000 W. The 200 kW answer uses V²/R with the line voltage, which is not the voltage dropped along the wires. The 100 answer is IR, the volts dropped along the line, and 20 kW says everything sent is lost.`,
  },
  [r`What does the harm in an electric shock, and why is wet skin dangerous?`]: {
    question: r`Person A touches 240 V with dry skin, for a body resistance of 1 × 10⁵ Ω. Person B touches 24 V with wet skin, for a body resistance of 1 × 10³ Ω. Who is in more danger, and what are the currents?`,
    options: [r`A, with 24 mA against 2.4 mA for B`, r`A, with 240 mA against 24 mA for B`, r`B, with 2.4 A against 0.24 A for A`, r`B, with 24 mA against 2.4 mA for A`],
    correctAnswer: 3,
    explanation: r`The harm comes from the current through the body, I = V/R: 240 V / 10⁵ Ω = 2.4 mA for A and 24 V / 10³ Ω = 24 mA for B. So the lower voltage across wet skin drives ten times the current. Picking A judges by voltage alone, and the other current values slip powers of ten.`,
  },
  // Video 6
  [r`An appliance has a power rating at a known voltage. How do you find its current and resistance?`]: {
    question: r`A soldering iron is rated 48 W on a 24 V supply. What are its current and its resistance while it runs?`,
    options: [r`2 A and 24 Ω`, r`2 A and 12 Ω`, r`0.5 A and 48 Ω`, r`0.5 A and 12 Ω`],
    correctAnswer: 1,
    explanation: r`The current is I = P/V = 48 / 24 = 2 A, and the resistance is R = V/I = 24 / 2 = 12 Ω, which checks with V²/P = 576 / 48. Pairing 2 A with 24 Ω takes P/I for the resistance, but P/I is the voltage. The 0.5 A answers divide the voltage by the power.`,
  },
  [r`What do you get when you divide a power by a current?`]: {
    question: r`A heating element dissipates 60 W while it carries 5 A. What is its resistance?`,
    options: [r`12 Ω`, r`300 Ω`, r`0.083 Ω`, r`2.4 Ω`],
    correctAnswer: 3,
    explanation: r`Dividing power by current gives the voltage, 60 W / 5 A = 12 V, not a resistance. The resistance is then R = V/I = 12 V / 5 A = 2.4 Ω, the same as P/I². The 12 answer stops at the voltage and relabels it in ohms, 300 multiplies power by current, and 0.083 divides current by power.`,
  },
  [r`How do you find energy use in kilowatt-hours, and the cost?`]: {
    question: r`An 800 W rice cooker is on for 45 minutes in a town where power is billed at 20 cents per kWh. How much does this add to the bill?`,
    options: [r`16 cents`, r`12 cents`, r`$7.20`, r`$120`],
    correctAnswer: 1,
    explanation: r`Convert first: 800 W = 0.8 kW and 45 minutes = 0.75 h, so the energy is 0.6 kWh and the cost is 0.6 × 20 = 12 cents. The 16 cent answer leaves out the time, 7.20 dollars multiplies by 45 without converting minutes to hours, and 120 dollars leaves the power in watts.`,
  },
  [r`How do you convert kilowatt-hours to joules?`]: {
    question: r`A laptop battery stores 0.1 kWh of energy. How many joules is that?`,
    options: [r`3.6 × 10⁷ J`, r`3.6 × 10² J`, r`3.6 × 10⁵ J`, r`1.0 × 10² J`],
    correctAnswer: 2,
    explanation: r`Multiply by 3.6 × 10⁶ J per kWh: 0.1 × 3.6 × 10⁶ = 3.6 × 10⁵ J. The 10⁷ answer divides by 0.1 when it should multiply, 3.6 × 10² uses 3600 seconds but forgets the factor of 1000 in the kilowatt, and 1.0 × 10² only converts 0.1 kW to watts.`,
  },
  [r`How do you find the current and power through the body for a given skin resistance?`]: {
    question: r`A technician's damp hand-to-foot path has a resistance of 2.0 × 10³ Ω, and it comes into contact with 100 V. What current flows through the body, and what power is delivered to it?`,
    options: [r`0.05 A and 100 W`, r`0.05 A and 5 W`, r`20 A and 2000 W`, r`0.05 A and 0.05 W`],
    correctAnswer: 1,
    explanation: r`The current is I = V/R = 100 / 2000 = 0.05 A, and the power is P = V²/R = 10 000 / 2000 = 5 W. The 100 answer multiplies I by R, which just returns the voltage. The 20 A answer divides resistance by voltage, and 0.05 W reuses V/R for the power without squaring the voltage.`,
  },
  [r`At a fixed voltage, the body's resistance falls by a factor of 100. What happens to the current and the power?`]: {
    question: r`With dry skin, a person touching a fixed voltage carries 0.2 mA and absorbs 0.02 W. With wet skin the body's resistance is 100 times smaller. At the same voltage, what are the new current and power?`,
    options: [r`20 mA and 2 W`, r`20 mA and 200 W`, r`2 mA and 0.2 W`, r`20 mA and 0.02 W`],
    correctAnswer: 0,
    explanation: r`At fixed voltage, I = V/R and P = V²/R both have R underneath once, so both rise by the same factor of 100: 20 mA and 2 W. The 200 W answer squares the factor for the power, which would be right only at fixed resistance. Factors of 10 are too small, and an unchanged 0.02 W forgets that the power depends on resistance.`,
  },
  // Video 7
  [r`A bulb is marked "60 W, 120 V". What do the two numbers mean, with their symbols and units?`]: {
    question: r`A heat lamp is stamped \"100 W, 120 V\". It is run from a 60 V supply. Treating it as ohmic, what power does it dissipate?`,
    options: [r`50 W`, r`100 W`, r`25 W`, r`200 W`],
    correctAnswer: 2,
    explanation: r`The 100 W figure holds only at the rated 120 V. The resistance is fixed, so P = V²/R, and half the voltage gives one quarter of the power: 25 W. The 50 W answer scales the power in step with the voltage, 100 W treats the rating as fixed at any voltage, and 200 W gets the direction backward.`,
  },
  [r`What does a bulb's brightness measure? What is $P_0$?`]: {
    question: r`Bulb X has a resistance of 24 Ω and sits alone on a 12 V ideal battery. Bulb Y has a resistance of 4 Ω and sits alone on a 4 V ideal battery. Which bulb is brighter, and why?`,
    options: [r`Bulb X, since it dissipates 6 W and Y only 4 W`, r`Bulb Y, since it carries 1 A and X only 0.5 A`, r`Bulb Y, since it dissipates 16 W and X only 6 W`, r`Bulb Y, since its resistance is 4 Ω and X's is 24 Ω`],
    correctAnswer: 0,
    explanation: r`Brightness is power, and for a bulb alone on a source P = V²/R: 144 / 24 = 6 W for X and 16 / 4 = 4 W for Y, so X is brighter. Y does carry more current, but current alone does not set brightness. The 16 W figure forgets to divide by Y's resistance, and a smaller resistance wins only when the voltages are equal.`,
  },
  [r`$n$ identical bulbs are in series. What does each one get, and what is the total power?`]: {
    question: r`A workshop lamp gives 32 W when it is the only load on an ideal supply. Four lamps identical to it are then chained end to end on that supply. Treating them as ohmic, how much does each lamp give, and how much do all four give together?`,
    options: [r`8 W each; 32 W in total`, r`2 W each; 8 W in total`, r`32 W each; 128 W in total`, r`4 W each; 16 W in total`],
    correctAnswer: 1,
    explanation: r`Each of the four gets one quarter of the voltage, and power goes as V², so each gets 32 / 16 = 2 W and the total is 32 / 4 = 8 W. The 8 W each answer divides by 4 but not by 4², 32 W each is the parallel result, and 4 W each divides by 8, which is neither the rule for each lamp nor the rule for the total.`,
  },
  [r`$n$ identical bulbs are in parallel across the source. What does each one get, and what is the total power?`]: {
    question: r`A reading lamp gives 15 W when it is the only load on an ideal supply. Three lamps identical to it are then each plugged straight into that supply, side by side. How much does each lamp give, and how much do all three give together?`,
    options: [r`5 W each; 15 W in total`, r`15 W each; 15 W in total`, r`45 W each; 135 W in total`, r`15 W each; 45 W in total`],
    correctAnswer: 3,
    explanation: r`Each lamp plugged straight into the supply keeps its full voltage, so each still dissipates 15 W and the three together draw 45 W. The 5 W each answer shares one lamp's power among three, as if the supply's output were fixed. A 15 W total forgets to add the lamps, and 45 W each gives every lamp the whole total.`,
  },
  [r`How do you find a bulb's resistance from its rating?`]: {
    question: r`A car headlamp is rated 36 W at 12 V. What is its resistance when it runs at its rated voltage?`,
    options: [r`4.0 Ω`, r`3.0 Ω`, r`0.33 Ω`, r`432 Ω`],
    correctAnswer: 0,
    explanation: r`From P = V²/R, R = V²/P = 144 / 36 = 4 Ω. The 3.0 answer is P/V, which is the current in amperes, not a resistance. The 0.33 answer is V/P with the voltage left unsquared, and 432 multiplies the power by the voltage.`,
  },
  [r`A 60 W bulb and a 100 W bulb are wired in parallel, then in series. Which is brighter each time?`]: {
    question: r`Two heat lamps made for the same mains voltage are stamped 30 W and 90 W. A terrarium owner first plugs them into separate sockets, then rewires them end to end on a single socket. Which lamp glows brighter each time?`,
    options: [r`Separate sockets: the 90 W lamp. End to end: the 90 W lamp`, r`Separate sockets: the 30 W lamp. End to end: the 90 W lamp`, r`Separate sockets: the 30 W lamp. End to end: the 30 W lamp`, r`Separate sockets: the 90 W lamp. End to end: the 30 W lamp`],
    correctAnswer: 3,
    explanation: r`On separate sockets the lamps are in parallel and each runs at its rating, so the 90 W lamp is brighter. The 30 W lamp has the higher resistance, and end to end, in series, the shared current makes the higher resistance dissipate more by P = I²R, so the order swaps. Choosing the 90 W lamp both times assumes ratings hold in series, and choosing the 30 W lamp on separate sockets reverses the rated case.`,
  },
  [r`How do you rank brightness without computing?`]: {
    question: r`Bulbs with resistances of 2 Ω, 4 Ω and 8 Ω are all wired in parallel directly across one ideal battery. Which statement gives what the bulbs share and the correct brightness order, brightest first?`,
    options: [r`They share voltage: 2 Ω, then 4 Ω, then 8 Ω`, r`They share voltage: 8 Ω, then 4 Ω, then 2 Ω`, r`They share current: 8 Ω, then 4 Ω, then 2 Ω`, r`They share current: 2 Ω, then 4 Ω, then 8 Ω`],
    correctAnswer: 0,
    explanation: r`Parallel bulbs share the voltage, so pick the form that holds it constant, P = V²/R: the smallest resistance is brightest, giving 2 Ω, 4 Ω, 8 Ω. Putting the 8 Ω first is the series ranking from P = I²R. The statements about a shared current are wrong because each parallel branch carries its own current.`,
  },
  [r`One of two identical bulbs carries twice the current of the other. How do their powers compare?`]: {
    question: r`Two identical bulbs sit in different parts of a circuit. The first carries 0.3 A and dissipates 2 W. The second carries 0.9 A. Treating the bulbs as ohmic, what power does the second one dissipate?`,
    options: [r`6 W`, r`54 W`, r`18 W`, r`2 W`],
    correctAnswer: 2,
    explanation: r`Identical bulbs have the same resistance, so P = I²R makes the power go as the current squared: three times the current gives 3² = 9 times the power, 18 W. The 6 W answer scales the power in step with the current, 54 W cubes the factor, and 2 W assumes identical bulbs always have equal power.`,
  },
  [r`A bulb burns out. What happens in a series string, and in a parallel bank across an ideal source?`]: {
    question: r`A porch has two light strings on the same outlet. String S has 10 bulbs in series, and string P has 10 bulbs in parallel. One bulb burns out in each string. How many bulbs stay lit in each?`,
    options: [r`String S: 9 lit. String P: 0 lit`, r`String S: 9 lit. String P: 9 lit`, r`String S: 0 lit. String P: 0 lit`, r`String S: 0 lit. String P: 9 lit`],
    correctAnswer: 3,
    explanation: r`A burned-out bulb is an open circuit. In the series string it breaks the only path, so all 10 go dark. In the parallel string every other bulb still has its own path across the outlet, so 9 stay lit. The other answers treat an open as harmless in series, or as fatal to branches it is not part of.`,
  },
  [r`In A + (B ∥ C), bulb C burns out. What happens to A and to B?`]: {
    question: r`Three identical 10 Ω heater pads run from an ideal 30 V supply. Pad A is in line with the supply, and it feeds pads B and C, which are wired side by side. Pad C fails open. What happens to the voltages across A and across B?`,
    options: [r`A rises from 20 V to 30 V; B falls from 10 V to 0 V`, r`A falls from 20 V to 15 V; B rises from 10 V to 15 V`, r`A stays at 20 V as before; B stays at 10 V as before`, r`A falls from 20 V to 15 V; B falls from 10 V to 5 V`],
    correctAnswer: 1,
    explanation: r`Before, the total is 10 + 5 = 15 Ω, so 2 A flows: 20 V across A and 10 V across the pair. After, A and B are simply in series, 20 Ω and 1.5 A, with 15 V across each, so A cools and B warms. A at 30 V treats the open pad as a short, no change ignores the new equivalent resistance, and B falling assumes everything weakens together.`,
  },
  [r`A bulb is added in series, or directly across the source. What happens to the others?`]: {
    question: r`Two lamps, X and Y, are each plugged straight into an ideal supply. A third lamp Z is then spliced into the cord of X, so that X's current must also pass through Z. What happens to X and to Y?`,
    options: [r`X dims and Y stays the same`, r`X dims and Y dims as well`, r`X and Y both stay the same`, r`X dims and Y gets brighter`],
    correctAnswer: 0,
    explanation: r`Z adds resistance to X's path, so that branch carries less current and X dims. Y is still directly across the supply, so it keeps the full voltage and its brightness. Y dimming assumes the supply voltage sags, no change at all ignores the series resistance now in X's branch, and Y brightening assumes the current X lost is handed to Y.`,
  },
  [r`How is household wiring arranged, and where is the breaker?`]: {
    question: r`A 120 V kitchen circuit is protected by a 15 A breaker. A 1200 W toaster is already running when a 900 W microwave on the same circuit is switched on. What happens at the breaker?`,
    options: [r`10.0 A flows through the breaker, so it holds`, r`7.5 A flows through the breaker, so it holds`, r`17.5 A flows through the breaker, so it trips`, r`2.5 A flows through the breaker, so it holds`],
    correctAnswer: 2,
    explanation: r`The appliances are in parallel, so their currents add: 1200/120 = 10 A plus 900/120 = 7.5 A makes 17.5 A. The breaker is in series with the whole branch circuit, carries all of it, and trips above 15 A. The 10 A and 7.5 A answers count only one appliance, and 2.5 A subtracts the currents.`,
  },
  // Video 8
  [r`How do you get each bulb's resistance from its rating?`]: {
    question: r`A 25 W lamp and a 100 W lamp are both made for a 100 V supply. What are the resistances of their filaments at that voltage, in that order?`,
    options: [r`100 Ω and 400 Ω`, r`4 Ω and 1 Ω`, r`400 Ω and 100 Ω`, r`0.25 Ω and 1 Ω`],
    correctAnswer: 2,
    explanation: r`Use R = V²/P: 10 000 / 25 = 400 Ω for the 25 W lamp and 10 000 / 100 = 100 Ω for the 100 W lamp, so the lower wattage has the larger resistance. Swapping them gives the brighter lamp the larger resistance. The 4 and 1 values are V/P without squaring, and 0.25 and 1 are P/V, which are currents.`,
  },
  [r`Which power form and which bulb wins in series, and in parallel?`]: {
    question: r`A 5 Ω coil and a 15 Ω coil are first wired in series with 2 A through both, then wired in parallel with 30 V across both. Which coil dissipates more each time, and how much?`,
    options: [r`Series: the 5 Ω at 60 W. Parallel: the 15 Ω at 180 W`, r`Series: the 15 Ω at 60 W. Parallel: the 5 Ω at 180 W`, r`Series: the 15 Ω at 60 W. Parallel: the 15 Ω at 180 W`, r`Series: the 5 Ω at 20 W. Parallel: the 5 Ω at 180 W`],
    correctAnswer: 1,
    explanation: r`In series the current is shared, so P = I²R and the larger resistance wins: 4 × 15 = 60 W against 20 W. In parallel the voltage is shared, so P = V²/R and the smaller resistance wins: 900 / 5 = 180 W against 60 W. The other answers let the same coil win both times or swap which rule goes with which wiring.`,
  },
  [r`Do rated bulbs wired in series run at their rated powers?`]: {
    question: r`Lamp M is stamped 3 W, 6 V and lamp N is stamped 6 W, 6 V. A student joins them end to end and connects the chain to an ideal 9 V supply. Treating the lamps as ohmic, what power does each one give out?`,
    options: [r`M: 3 W, and N: 6 W`, r`M: 1.5 W, and N: 3 W`, r`M: 4.5 W, and N: 9 W`, r`M: 3 W, and N: 1.5 W`],
    correctAnswer: 3,
    explanation: r`From R = V²/P, M is 12 Ω and N is 6 Ω. In series that is 18 Ω on 9 V, so 0.5 A flows, and P = I²R gives 0.25 × 12 = 3 W for M and 0.25 × 6 = 1.5 W for N. Quoting 3 W and 6 W assumes both run at their ratings, halving both ignores their different resistances, and 4.5 W and 9 W scale the ratings by 9 V over 6 V.`,
  },
  [r`How do you rank a mixed circuit?`]: {
    question: r`Four identical bulbs are wired so that bulb P is in series with a parallel group of three bulbs, Q, R and S, across an ideal battery. Which statement ranks P against Q?`,
    options: [r`P is brightest, with 3 times the power of Q`, r`P is brightest, with 9 times the power of Q`, r`Q is brightest, with 9 times the power of P`, r`Q is brightest, with 3 times the power of P`],
    correctAnswer: 1,
    explanation: r`All the current passes through P and then splits three ways, so P carries three times the current of Q. Identical bulbs have equal resistance, so P = I²R gives P 3² = 9 times the power. A factor of 3 forgets the square, and putting Q first gives more power to the bulb with one third of the current.`,
  },
  [r`A bulb in the parallel bank burns out. How do you find the new brightnesses?`]: {
    question: r`Three identical 3 Ω lamps run from an ideal 9 V supply. All the current passes through lamp A and then divides between lamps B and C. The filament of C breaks. How do the currents in A and in B change?`,
    options: [r`A: 2 A down to 1.5 A. B: 1 A up to 1.5 A`, r`A: 2 A stays at 2 A. B: 1 A up to 2 A`, r`A: 2 A up to 3 A. B: 1 A down to 0 A`, r`A: 2 A down to 1 A. B: 1 A stays at 1 A`],
    correctAnswer: 0,
    explanation: r`Before, the total is 3 + 1.5 = 4.5 Ω, so A carries 2 A and B carries 1 A. Re-solve after C fails: 3 + 3 = 6 Ω, so 1.5 A flows through both, and A dims while B brightens. Keeping 2 A in A carries the old total current over, 3 A treats the broken filament as a short, and keeping 1 A in B assumes its branch is unaffected.`,
  },
  [r`What check finishes a bulb-power problem?`]: {
    question: r`A student solves a circuit with a 12 V ideal battery and finds a total current of 2 A. The three bulb powers come out as 12 W, 6 W and 3 W. What does the final check show?`,
    options: [r`Bulbs total 21 W; battery gives 21 W, so it holds`, r`Bulbs total 21 W; battery gives 24 W, so recheck`, r`Bulbs total 21 W; battery gives 6 W, so recheck`, r`Bulbs total 21 W; under the 24 W limit, so it holds`],
    correctAnswer: 1,
    explanation: r`The bulb powers must add up to the battery's V × I = 12 V × 2 A = 24 W. They add to only 21 W, so something in the solution is wrong. Saying the battery gives 21 W skips computing V × I, 6 W divides the voltage by the current, and treating 24 W as a ceiling ignores that an ideal source's power all goes into the bulbs.`,
  },
}
