import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-physics-electricity-kirchhoff-power-mcat`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`For two resistors in series across a voltage $V$, the voltage across $R_1$ is the total $V$ multiplied by {{c1::$R_1/(R_1 + R_2)$}}.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 9 V battery is connected across a 3 kΩ resistor and a 6 kΩ light sensor in series. What is the voltage across the light sensor?`,
        options: [r`3.0 V`, r`4.5 V`, r`6.0 V`, r`9.0 V`],
        correctAnswer: 2,
        explanation: r`The sensor takes the fraction 6/(3 + 6) = 2/3 of the 9 V, which is 6.0 V. The value 3.0 V belongs to the 3 kΩ resistor, 4.5 V assumes an even split, and 9.0 V ignores the series resistor altogether.`,
      },
      {
        question: r`A 24 V ideal supply is connected across a 300 Ω resistor in series with an unknown resistor. A voltmeter across the 300 Ω resistor reads 18 V. What is the unknown resistance?`,
        options: [r`100 Ω`, r`225 Ω`, r`400 Ω`, r`900 Ω`],
        correctAnswer: 0,
        explanation: r`The 300 Ω resistor holds 18/24 = 3/4 of the voltage, so 300/(300 + R) = 3/4 and the total is 400 Ω, leaving R = 100 Ω. The value 400 Ω is the total resistance, 900 Ω inverts the ratio by giving the larger voltage to the unknown, and 225 Ω just multiplies 300 Ω by 3/4.`,
      },
      {
        question: r`A skin model places a 20 kΩ layer in series with a 60 kΩ layer across an ideal source. The voltage across the 20 kΩ layer is 3 V. What is the source voltage?`,
        options: [r`1 V`, r`4 V`, r`9 V`, r`12 V`],
        correctAnswer: 3,
        explanation: r`The 20 kΩ layer holds 20/(20 + 60) = 1/4 of the source voltage, so the source is 4 × 3 V = 12 V. The value 9 V is only the drop across the 60 kΩ layer, 4 V uses the fraction 60/80, and 1 V uses the ratio 20/60 the wrong way round.`,
      },
      {
        question: r`A 6.0 V ideal source is connected across a 500 Ω resistor in series with a 2.5 kΩ resistor. What is the voltage across the 500 Ω resistor?`,
        options: [r`6.0 V`, r`1.0 V`, r`5.0 V`, r`1.2 V`],
        correctAnswer: 1,
        explanation: r`With 2.5 kΩ = 2500 Ω, the fraction is 500/(500 + 2500) = 1/6, so the drop is 1.0 V. The value 5.0 V is the drop across the 2.5 kΩ resistor, 1.2 V uses 500/2500 and leaves R₁ out of the denominator, and 6.0 V comes from treating 2.5 kΩ as 2.5 Ω.`,
      },
      {
        question: r`Two 1 kΩ resistors, R₁ and R₂, are in series across a fixed ideal voltage. R₁ is then replaced by a 3 kΩ resistor. By what factor does the voltage across R₁ change?`,
        options: [r`It becomes 0.5 times as large`, r`It becomes 3.0 times as large`, r`It becomes 1.5 times as large`, r`It becomes 2.0 times as large`],
        correctAnswer: 2,
        explanation: r`The share of R₁ goes from 1/(1 + 1) = 1/2 to 3/(3 + 1) = 3/4 of the total, and (3/4)/(1/2) = 1.5. A factor of 3.0 assumes the voltage is proportional to R₁ alone and forgets that the total resistance also grew. Factors of 0.5 and 2.0 do not follow from either fraction.`,
      },
      {
        question: r`A 12 V ideal source reaches a 5 Ω heater through lead wires with a total resistance of 1 Ω, so the leads and the heater are in series. What is the voltage across the heater?`,
        options: [r`10 V`, r`2 V`, r`12 V`, r`2.4 V`],
        correctAnswer: 0,
        explanation: r`The heater takes 5/(5 + 1) = 5/6 of the 12 V, which is 10 V. The value 2 V is the drop across the leads, 12 V ignores the leads, and 2.4 V divides 12 by 5, which is not a voltage at all.`,
      },
    ],
  },
  [r`A $12$ V ideal battery feeds a $2\,\Omega$ resistor in series with a parallel pair of $6\,\Omega$ and $3\,\Omega$. Find the current in each parallel branch.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A greenhouse controller runs from a 40 V ideal supply. An 8 Ω fuse resistor is in series with two heaters, a 20 Ω soil heater and a 30 Ω air heater, that are in parallel with each other. How much current does the 30 Ω air heater carry?`,
        options: [r`1.2 A`, r`0.8 A`, r`2.0 A`, r`1.3 A`],
        correctAnswer: 1,
        explanation: r`The pair is (20 × 30)/50 = 12 Ω, so the total is 20 Ω and the battery current is 2.0 A. The 8 Ω resistor drops 16 V, leaving 24 V across the pair, and 24/30 = 0.8 A. The value 1.2 A is the 20 Ω soil heater, 2.0 A is the total, and 1.3 A wrongly puts all 40 V across the 30 Ω heater.`,
      },
      {
        question: r`An incubator's 15 V ideal supply is wired through a 2 Ω protective resistor to two heating strips, 12 Ω and 4 Ω, that are in parallel with each other. What voltage appears across the heating strips?`,
        options: [r`6.0 V`, r`7.5 V`, r`15 V`, r`9.0 V`],
        correctAnswer: 3,
        explanation: r`The pair is (12 × 4)/16 = 3 Ω, so the total is 5 Ω and the current is 3 A. The 2 Ω resistor drops 6 V, leaving 9.0 V across the pair. The value 6.0 V is the drop across the series resistor, 15 V ignores that drop, and 7.5 V assumes the voltage splits evenly.`,
      },
      {
        question: r`A sensor board has a 20 V ideal source, a 2 kΩ protective resistor, and two thermistors of 4 kΩ and 12 kΩ. The thermistors are in parallel with each other, and the protective resistor is in series with that combination. How much current does the 4 kΩ thermistor carry?`,
        options: [r`3 mA`, r`1 mA`, r`4 mA`, r`5 mA`],
        correctAnswer: 0,
        explanation: r`The pair is (4 × 12)/16 = 3 kΩ, so the total is 5 kΩ and the source current is 4 mA. The 2 kΩ resistor drops 8 V, leaving 12 V across the pair, and 12 V/4 kΩ = 3 mA. The value 1 mA is the 12 kΩ thermistor, 4 mA is the total, and 5 mA wrongly puts the full 20 V across the 4 kΩ thermistor.`,
      },
      {
        question: r`A toy train layout uses an ideal power pack. A 4 Ω track section is in series with two motors, 6 Ω and 3 Ω, that are in parallel with each other. An ammeter shows 2 A in the 6 Ω motor. Treating the motors as resistors, what is the emf of the power pack?`,
        options: [r`12 V`, r`20 V`, r`36 V`, r`24 V`],
        correctAnswer: 2,
        explanation: r`The motors have 2 A × 6 Ω = 12 V across them, so the 3 Ω motor carries 4 A and the total current is 6 A. The 4 Ω track section drops 24 V, and 24 + 12 = 36 V. The value 12 V is the motors alone, 24 V is the track section alone, and 20 V treats 2 A as the current through 4 Ω + 6 Ω.`,
      },
      {
        question: r`A 45 V ideal supply powers a laboratory hot-plate stage. A 5 Ω lead is in series with two plates, 20 Ω and 5 Ω, that are in parallel with each other. What currents do the 20 Ω plate and the 5 Ω plate carry, in that order?`,
        options: [r`4 A and 1 A`, r`2.5 A and 2.5 A`, r`2.25 A and 9 A`, r`1 A and 4 A`],
        correctAnswer: 3,
        explanation: r`The pair is (20 × 5)/25 = 4 Ω, so the total is 9 Ω and the supply current is 5 A. The series resistor drops 25 V, leaving 20 V across the pair: 20/20 = 1 A and 20/5 = 4 A. Swapping them gives the larger current to the larger resistor, 2.5 A each assumes an even split, and 2.25 A and 9 A put the full 45 V across each branch.`,
      },
      {
        question: r`A bathroom circuit has a 60 V ideal supply and a 10 Ω cable in series with two towel warmers, 30 Ω and 15 Ω, that are in parallel with each other. How much current does the 15 Ω towel warmer carry?`,
        options: [r`1 A`, r`2 A`, r`3 A`, r`4 A`],
        correctAnswer: 1,
        explanation: r`The pair is (30 × 15)/45 = 10 Ω, so the total is 20 Ω and the supply current is 3 A. The cable drops 30 V, leaving 30 V across the pair, and 30/15 = 2 A. The value 1 A is the 30 Ω warmer, 3 A is the total current, and 4 A wrongly puts the full 60 V across the 15 Ω warmer.`,
      },
    ],
  },
  [r`$5.0$ mA enters a $1\,\text{k}\Omega$ muscle path in parallel with a $4\,\text{k}\Omega$ fat path. How much current goes through the muscle path?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A total current of 15 A enters a parallel pair of busbars with resistances of 10 Ω and 40 Ω. How much current flows in the 10 Ω busbar?`,
        options: [r`3.0 A`, r`7.5 A`, r`12 A`, r`3.75 A`],
        correctAnswer: 2,
        explanation: r`The 10 Ω path gets the fraction 40/(10 + 40) = 4/5 of the total, which is 12 A. The value 3.0 A puts the path's own resistance in the numerator, 7.5 A assumes an even split, and 3.75 A uses the ratio 10/40 without the sum in the denominator.`,
      },
      {
        question: r`In a tissue model, a 6 kΩ path and a 3 kΩ path are in parallel. The current in the 6 kΩ path is 2 mA. What total current enters the pair?`,
        options: [r`6 mA`, r`4 mA`, r`3 mA`, r`2 mA`],
        correctAnswer: 0,
        explanation: r`The 6 kΩ path has 2 mA × 6 kΩ = 12 V across it, and so does the 3 kΩ path, which therefore carries 4 mA. The total is 2 + 4 = 6 mA. The value 4 mA is the other path alone, 3 mA gives the smaller resistance the smaller current, and 2 mA treats the paths as if they were in series.`,
      },
      {
        question: r`A current of 20 mA enters a parallel pair of resistors. The 200 Ω branch carries 15 mA. What is the resistance of the other branch?`,
        options: [r`67 Ω`, r`150 Ω`, r`800 Ω`, r`600 Ω`],
        correctAnswer: 3,
        explanation: r`The other branch carries 20 − 15 = 5 mA at the same voltage, 15 mA × 200 Ω = 3 V, so its resistance is 3 V/5 mA = 600 Ω. One third of the current means three times the resistance. The value 67 Ω inverts that ratio, 150 Ω multiplies 200 Ω by 15/20, and 800 Ω multiplies it by 20/5.`,
      },
      {
        question: r`An electrosurgery return pad has two conducting strips in parallel, one of 400 Ω and one of 1.2 kΩ. A current of 0.60 A arrives at the pad and divides between the strips. How much of it passes through the 1.2 kΩ strip?`,
        options: [r`450 mA`, r`150 mA`, r`300 mA`, r`200 mA`],
        correctAnswer: 1,
        explanation: r`With 1.2 kΩ = 1200 Ω, that strip gets 400/(400 + 1200) = 1/4 of 0.60 A, which is 0.15 A = 150 mA. The value 450 mA is the 400 Ω strip, 300 mA assumes an even split, and 200 mA uses 400/1200 without the sum in the denominator.`,
      },
      {
        question: r`A fixed total current enters two 6 Ω resistors in parallel. One of them is replaced by a 2 Ω resistor while the total current stays the same. What happens to the current in the remaining 6 Ω resistor?`,
        options: [r`It falls to one half of its old value`, r`It falls to one third of its old value`, r`It rises to twice its old value`, r`It stays the same as its old value`],
        correctAnswer: 0,
        explanation: r`At first the 6 Ω resistor carries 6/(6 + 6) = 1/2 of the total. Afterwards it carries 2/(6 + 2) = 1/4 of the total, which is half as much. One third comes from the ratio 2/6 with no sum in the denominator, and "stays the same" forgets that the branches share a fixed total current.`,
      },
      {
        question: r`An ammeter coil with a resistance of 9 Ω is connected in parallel with a 1 Ω shunt resistor. A total current of 2.0 A enters the pair. How much current passes through the coil?`,
        options: [r`1.8 A`, r`1.0 A`, r`0.22 A`, r`0.20 A`],
        correctAnswer: 3,
        explanation: r`The coil gets the fraction 1/(9 + 1) = 1/10 of the total, the OTHER resistance over the sum, which is 0.20 A. The value 1.8 A is the shunt's current, 1.0 A assumes an even split, and 0.22 A uses 1/9 and leaves the sum out of the denominator.`,
      },
    ],
  },
  [r`Solving Kirchhoff's equations gives a negative value for a current whose direction you guessed. What does that mean?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student solving a two-loop circuit drew the current in one branch pointing left to right. Her correct algebra gives −0.5 A for that branch. What should she do?`,
        options: [
          r`Redo the algebra, since a negative current signals an error`,
          r`Report 0.5 A flowing right to left, with no need to re-solve`,
          r`Report 0.5 A flowing left to right, as the sign has no meaning`,
          r`Redraw the arrow and re-solve, since the size is unreliable`,
        ],
        correctAnswer: 1,
        explanation: r`A negative answer only says the real current runs opposite to the arrow she drew, so 0.5 A flows right to left and the magnitude stands. Nothing is wrong with the algebra, the size does not need to be found again, and the sign does carry meaning: it gives the direction.`,
      },
      {
        question: r`Two students analyze the same branch of a circuit. One guesses that its current flows upward and correctly gets +3 A. The other guesses downward and also works correctly. What does the second student get?`,
        options: [
          r`+3 A, because a current's sign ignores the guess`,
          r`0 A, because the two opposite guesses cancel out`,
          r`−3 A, and the two students disagree on the flow`,
          r`−3 A, and both students describe the same flow`,
        ],
        correctAnswer: 3,
        explanation: r`The real current is 3 A upward. Measured along a downward arrow that same current is −3 A, so the two answers agree physically. The sign does depend on the guessed direction, a guess cannot cancel a real current, and the two results do not describe different flows.`,
      },
    ],
  },
  [r`A $9$ V and a $3$ V battery push in opposite directions in one loop with a $2\,\Omega$ resistor. What is the current?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 30 V ideal battery and a 10 V ideal battery are connected in one loop so that they oppose each other, and the only resistance in the loop is 4 Ω. What is the current?`,
        options: [r`2.5 A`, r`7.5 A`, r`5.0 A`, r`10 A`],
        correctAnswer: 2,
        explanation: r`Opposing sources subtract: (30 − 10)/4 = 5.0 A. The value 10 A adds the two emfs, 7.5 A uses the 30 V battery alone, and 2.5 A uses the 10 V battery alone.`,
      },
      {
        question: r`A 12 V ideal battery and a 4 V ideal battery oppose each other in a single loop with one resistor. The loop current is 0.5 A. What is the resistance?`,
        options: [r`16 Ω`, r`32 Ω`, r`24 Ω`, r`8 Ω`],
        correctAnswer: 0,
        explanation: r`The net emf is 12 − 4 = 8 V, so R = 8 V/0.5 A = 16 Ω. The value 32 Ω adds the emfs, 24 Ω uses the 12 V battery alone, and 8 Ω uses the 4 V battery alone.`,
      },
      {
        question: r`A 9.0 V ideal battery and a 1.5 V ideal cell are wired against each other in a single loop with a 2.5 kΩ resistor. What is the current in the loop?`,
        options: [r`4.2 mA`, r`3.0 A`, r`3.6 mA`, r`3.0 mA`],
        correctAnswer: 3,
        explanation: r`The net emf is 9.0 − 1.5 = 7.5 V, and 7.5 V/2500 Ω = 3.0 × 10⁻³ A = 3.0 mA. The value 3.0 A treats 2.5 kΩ as 2.5 Ω, 4.2 mA adds the emfs, and 3.6 mA ignores the 1.5 V cell.`,
      },
      {
        question: r`In a single loop, a 4 V ideal cell pushes current clockwise and a 10 V ideal cell pushes current counterclockwise. The loop's only resistance is 2 Ω. What current flows?`,
        options: [r`3 A, flowing clockwise`, r`3 A, flowing counterclockwise`, r`7 A, flowing clockwise`, r`7 A, flowing counterclockwise`],
        correctAnswer: 1,
        explanation: r`The net emf is 10 − 4 = 6 V in the direction the larger cell pushes, so the current is 6/2 = 3 A counterclockwise. A clockwise answer follows the weaker cell, and 7 A adds the two emfs even though the cells oppose each other.`,
      },
      {
        question: r`A 10 V ideal battery and a 5 V ideal battery oppose each other in a loop with one resistor. The 5 V battery is then reversed so that both push the same way. By what factor does the current change?`,
        options: [r`It becomes 3.0 times as large`, r`It becomes 2.0 times as large`, r`It becomes 1.5 times as large`, r`It becomes 0.5 times as large`],
        correctAnswer: 0,
        explanation: r`The net emf goes from 10 − 5 = 5 V to 10 + 5 = 15 V with the same resistance, so the current triples. A factor of 2.0 compares the two batteries with each other, 1.5 compares 15 V with the 10 V battery alone, and 0.5 has the current falling when the net emf rises.`,
      },
      {
        question: r`An 18 V ideal battery and a 6 V ideal battery oppose each other in a single loop with a 4 Ω resistor. How much power does the resistor dissipate?`,
        options: [r`9 W`, r`81 W`, r`36 W`, r`144 W`],
        correctAnswer: 2,
        explanation: r`The net emf is 18 − 6 = 12 V, so the current is 12/4 = 3 A and the resistor dissipates I²R = 9 × 4 = 36 W. The value 144 W adds the emfs to get 24 V, 81 W uses 18 V alone, and 9 W uses 6 V alone.`,
      },
    ],
  },
  [r`A $9$ V battery drives current through $1\,\text{k}\Omega$ (at its positive terminal) and then $2\,\text{k}\Omega$ in series. The node between them is grounded. What is the potential of the negative terminal?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A technician builds a split supply for an amplifier: a 12 V ideal battery with a 1 kΩ resistor attached to its positive terminal, followed in series by a 3 kΩ resistor that returns to the negative terminal. She connects the junction of the two resistors to ground. What is the potential at the positive terminal?`,
        options: [r`+9 V`, r`−3 V`, r`+12 V`, r`+3 V`],
        correctAnswer: 3,
        explanation: r`The current is 12 V/4 kΩ = 3 mA, so the 1 kΩ resistor drops 3 V between the positive terminal and the grounded node: the terminal sits at +3 V. The value +9 V uses the 3 kΩ resistor's drop, +12 V would be right only with the negative terminal grounded, and −3 V has the wrong sign, because potential falls along the current from the terminal to the junction.`,
      },
      {
        question: r`A 20 V ideal source is connected in a loop with a 4 Ω heater coil, attached to the positive terminal, and a 6 Ω coil in series after it. The chassis ground is attached at the point where the two coils meet. Relative to the chassis, what is the potential of the source's negative terminal?`,
        options: [r`−8 V`, r`−12 V`, r`−20 V`, r`+12 V`],
        correctAnswer: 1,
        explanation: r`The current is 20/10 = 2 A, so the 6 Ω coil drops 12 V going from the grounded point down to the negative terminal, which sits at −12 V. The value −8 V uses the 4 Ω coil's drop, −20 V would need the positive terminal to be grounded, and +12 V has the wrong sign because potential falls along the current.`,
      },
      {
        question: r`A 10 V ideal battery powers a 2 Ω resistor, attached to its positive terminal, and a 3 Ω resistor in series after it. With the negative terminal chosen as 0 V, the point where the resistors meet reads +6 V. The reference is then moved so that the positive terminal is 0 V. What does that meeting point read now?`,
        options: [r`−4 V`, r`+4 V`, r`−6 V`, r`+6 V`],
        correctAnswer: 0,
        explanation: r`The current is still 10/5 = 2 A, so the 2 Ω resistor still drops 4 V from the positive terminal to the meeting point. With the positive terminal at 0 V, that point sits at −4 V. Keeping +6 V forgets that moving the reference shifts every potential, −6 V uses the wrong resistor's drop, and +4 V has the wrong sign.`,
      },
      {
        question: r`A hearing-aid circuit has an ideal cell stack with a 100 Ω resistor attached to its positive terminal and a 300 Ω resistor in series after it, completing the loop. The point where the resistors meet is chosen as 0 V, and a voltmeter shows the positive terminal at +2 V. What is the emf of the cell stack?`,
        options: [r`2 V`, r`4 V`, r`8 V`, r`6 V`],
        correctAnswer: 2,
        explanation: r`The current is 2 V/100 Ω = 20 mA, so the 300 Ω resistor drops 6 V and the negative terminal sits at −6 V. The emf is the difference between the terminals, 2 − (−6) = 8 V. The value 2 V is only the first drop, 6 V is only the second, and 4 V subtracts the two drops when they should be added.`,
      },
      {
        question: r`In an electrode amplifier, a 6.0 V ideal battery has a 500 Ω resistor attached to its positive terminal and a 2.5 kΩ resistor in series after it, completing the loop. The reference electrode fixes the point where the resistors meet at 0 V. What is the potential at the battery's negative terminal?`,
        options: [r`−1.0 V`, r`−6.0 V`, r`+5.0 V`, r`−5.0 V`],
        correctAnswer: 3,
        explanation: r`The current is 6.0 V/3000 Ω = 2.0 mA, so the 2.5 kΩ resistor drops 2.0 mA × 2500 Ω = 5.0 V from the 0 V point to the negative terminal: −5.0 V. The value −1.0 V uses the 500 Ω resistor's drop, −6.0 V would need the positive terminal to be the 0 V point, and +5.0 V has the wrong sign.`,
      },
      {
        question: r`A 24 V ideal supply sends current from its positive terminal through three sensor coils in series: 2 Ω, then 4 Ω, then 6 Ω. A grounding clip is attached where the 4 Ω and 6 Ω coils meet. What are the potentials of the supply's positive and negative terminals?`,
        options: [r`+24 V and 0 V`, r`+12 V and −12 V`, r`+4 V and −20 V`, r`+8 V and −16 V`],
        correctAnswer: 1,
        explanation: r`The current is 24/12 = 2 A. Between the positive terminal and ground lie 2 Ω + 4 Ω, a drop of 12 V, so that terminal is at +12 V, and the 6 Ω coil drops 12 V more, to −12 V. The pair +24 V and 0 V grounds the negative terminal, +4 V and −20 V grounds the point after the 2 Ω coil, and +8 V and −16 V counts only the 4 Ω drop.`,
      },
    ],
  },
  [r`A $2000$ W space heater runs for $5$ hours at 15 cents per kilowatt-hour. What does it cost?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 400 W incubator heater runs for 10 hours where electricity costs 20 cents per kilowatt-hour. What does the run cost?`,
        options: [r`0.08 dollars`, r`2.00 dollars`, r`0.80 dollars`, r`800.00 dollars`],
        correctAnswer: 2,
        explanation: r`E = (0.40 kW)(10 h) = 4.0 kWh, and 4.0 × 20 cents = 80 cents = 0.80 dollars. The value 800.00 dollars leaves the power in watts, 0.08 dollars multiplies power by the rate and forgets the time, and 2.00 dollars multiplies the time by the rate and forgets the power.`,
      },
      {
        question: r`A 250 W dehumidifier adds 60 cents to a bill where electricity costs 12 cents per kilowatt-hour. For how long did it run?`,
        options: [r`20 h`, r`5 h`, r`1.25 h`, r`0.02 h`],
        correctAnswer: 0,
        explanation: r`The energy bought is 60/12 = 5 kWh, and t = E/P = 5 kWh/0.25 kW = 20 h. The value 5 h reads the kilowatt-hours as hours, 1.25 h multiplies by 0.25 kW when it should divide, and 0.02 h divides 5 by 250 without converting watts to kilowatts.`,
      },
      {
        question: r`A 1500 W heater runs for 4 hours, and the run costs 1.20 dollars. What does the utility charge per kilowatt-hour?`,
        options: [r`5 cents`, r`30 cents`, r`80 cents`, r`20 cents`],
        correctAnswer: 3,
        explanation: r`E = (1.5 kW)(4 h) = 6 kWh, and 120 cents/6 kWh = 20 cents per kilowatt-hour. The value 30 cents divides the cost by the hours only, 80 cents divides it by the kilowatts only, and 5 cents inverts the ratio as 6/1.2.`,
      },
      {
        question: r`A cafeteria's 600 W microwave oven is in use for a total of 30 minutes one day. The utility bills 20 cents for each kilowatt-hour. How much does that day's use add to the bill?`,
        options: [r`0.12 dollars`, r`0.06 dollars`, r`3.60 dollars`, r`60.00 dollars`],
        correctAnswer: 1,
        explanation: r`E = (0.60 kW)(0.50 h) = 0.30 kWh, and 0.30 × 20 cents = 6 cents = 0.06 dollars. The value 0.12 dollars charges for a full hour, 3.60 dollars uses 30 as if it were hours, and 60.00 dollars leaves the power in watts.`,
      },
      {
        question: r`At the same price per kilowatt-hour, heater X is rated 1000 W and runs for 6 hours, while heater Y is rated 1500 W and runs for 2 hours. How does the cost of running X compare with the cost of running Y?`,
        options: [r`X costs 2 times as much`, r`X costs 3 times as much`, r`X costs 2/3 as much`, r`X costs 1/2 as much`],
        correctAnswer: 0,
        explanation: r`X uses (1.0 kW)(6 h) = 6 kWh and Y uses (1.5 kW)(2 h) = 3 kWh, so X costs twice as much. A factor of 3 compares only the running times, 2/3 compares only the power ratings, and 1/2 inverts the correct ratio.`,
      },
      {
        question: r`A 50 W network router runs continuously for 20 days where electricity costs 25 cents per kilowatt-hour. What does that cost?`,
        options: [r`0.25 dollars`, r`24.00 dollars`, r`6.00 dollars`, r`60.00 dollars`],
        correctAnswer: 2,
        explanation: r`The time is 20 × 24 = 480 h, so E = (0.050 kW)(480 h) = 24 kWh, and 24 × 25 cents = 600 cents = 6.00 dollars. The value 0.25 dollars uses 20 hours in place of 20 days, 24.00 dollars reads the kilowatt-hours as dollars, and 60.00 dollars converts 50 W to 0.5 kW.`,
      },
    ],
  },
  [r`Approximate body-current thresholds: about {{c1::1 mA}} is perceptible, and about {{c2::100 mA}} across the chest can trigger ventricular fibrillation.`]: {
    kind: 'concept',
    more: [
      {
        question: r`A faulty power tool passes a steady 15 mA from one hand to the other through a worker. Using the commonly quoted approximate thresholds, what is the most likely effect?`,
        options: [
          r`Nothing is felt, since this is below the perception level`,
          r`A faint tingle is felt, and the worker lets go at once`,
          r`The heart fibrillates, since this is above the 1 mA level`,
          r`The hand muscles clamp, so the worker cannot let go`,
        ],
        correctAnswer: 3,
        explanation: r`About 1 mA is perceptible, roughly 10 to 20 mA prevents letting go, and about 100 mA across the chest can trigger fibrillation. At 15 mA the current is well above perception and in the let-go range, yet far below the fibrillation level. The 1 mA figure is the perception threshold, not the fibrillation threshold.`,
      },
      {
        question: r`A ground-fault interrupter cuts the power when about 5 mA leaks through a person. Where does 5 mA sit relative to the commonly quoted approximate thresholds for perception and for ventricular fibrillation?`,
        options: [
          r`Below the perception level and far below the fibrillation level`,
          r`Above the perception level and far below the fibrillation level`,
          r`Above the perception level and just above the fibrillation level`,
          r`Below the perception level and just below the fibrillation level`,
        ],
        correctAnswer: 1,
        explanation: r`Perception starts near 1 mA and fibrillation near 100 mA, so 5 mA can be felt but is about 20 times too small to reach the fibrillation level. Any choice that places 5 mA below perception puts the 1 mA threshold too high, and any choice that places it near fibrillation puts the 100 mA threshold far too low.`,
      },
    ],
  },
  [r`A $120$ V shock passes hand to hand. The body path is $10^5\,\Omega$ with dry skin and $10^3\,\Omega$ with wet skin. Compare the currents.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A person with wet skin and a body-path resistance of 2 × 10³ Ω touches a 240 V conductor. What current flows?`,
        options: [r`120 mA`, r`12 mA`, r`1.2 mA`, r`8.3 mA`],
        correctAnswer: 0,
        explanation: r`I = V/R = 240/(2 × 10³) = 0.12 A = 120 mA. The values 12 mA and 1.2 mA slip one and two powers of ten, and 8.3 comes from inverting the ratio as 2000/240.`,
      },
      {
        question: r`About 1 mA is the smallest current most people can feel. What body-path resistance lets a 12 V car battery drive exactly 1 mA through a person?`,
        options: [r`1.2 × 10⁻² Ω`, r`1.2 × 10¹ Ω`, r`1.2 × 10⁴ Ω`, r`1.2 × 10³ Ω`],
        correctAnswer: 2,
        explanation: r`R = V/I = 12/(1 × 10⁻³) = 1.2 × 10⁴ Ω. The value 1.2 × 10¹ Ω uses 1 mA as if it were 1 A, 1.2 × 10⁻² Ω multiplies 12 by 10⁻³ when it should divide, and 1.2 × 10³ Ω slips one power of ten.`,
      },
      {
        question: r`A swimmer's wet skin gives a body-path resistance of 1.5 × 10³ Ω. What voltage is enough to drive 10 mA, a current that can prevent letting go, through that path?`,
        options: [r`1.5 V`, r`15 V`, r`150 V`, r`15 000 V`],
        correctAnswer: 1,
        explanation: r`V = IR = (0.010)(1500) = 15 V, with the current in amps and the resistance in ohms. The value 15 000 V uses 10 mA as if it were 10 A, and 1.5 V and 150 V each slip one power of ten.`,
      },
      {
        question: r`A person holds a conductor at a fixed voltage. Sweat lowers the body-path resistance from 5 × 10⁴ Ω to 2 × 10³ Ω. How does the current change?`,
        options: [r`It becomes 2.5 times larger`, r`It becomes 250 times larger`, r`It becomes 25 times smaller`, r`It becomes 25 times larger`],
        correctAnswer: 3,
        explanation: r`At fixed voltage the current is inversely proportional to resistance, and (5 × 10⁴)/(2 × 10³) = 25, so the current is 25 times larger. "25 times smaller" has current falling as resistance falls, and 2.5 and 250 each slip a power of ten.`,
      },
      {
        question: r`With dry skin and a body-path resistance of 6 × 10⁴ Ω, a worker touching 120 V carries 2 mA. Later the worker touches 240 V with wet skin and a resistance of 1.2 × 10³ Ω. What current flows now?`,
        options: [r`200 mA`, r`100 mA`, r`20 mA`, r`4 mA`],
        correctAnswer: 0,
        explanation: r`I = 240/(1.2 × 10³) = 0.20 A = 200 mA: the voltage doubled and the resistance fell 50 times, so the current is 100 times the original 2 mA. The value 4 mA changes only the voltage, 100 mA changes only the resistance, and 20 mA slips a power of ten.`,
      },
      {
        question: r`A 9 V battery is touched to the tongue, where the wet tissue path between its terminals has a resistance of 4.5 kΩ. What current flows?`,
        options: [r`0.5 mA`, r`2 A`, r`2 mA`, r`40.5 mA`],
        correctAnswer: 2,
        explanation: r`I = V/R = 9 V/4500 Ω = 2 × 10⁻³ A = 2 mA. The value 2 A treats 4.5 kΩ as 4.5 Ω, 0.5 inverts the ratio as 4.5/9, and 40.5 multiplies 9 by 4.5 when it should divide.`,
      },
    ],
  },
  [r`Bulb A is in series with identical bulbs B and C in parallel, all across an ideal battery. C burns out. What happens to A and B?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Bulb A is in series with identical bulbs B and C in parallel, all across an ideal battery. After a single fault, A glows more dimly and B glows more brightly than before, and both are still lit. Which fault occurred?`,
        options: [
          r`A wire was connected directly across bulb C`,
          r`Bulb B burned out, which left its branch open`,
          r`A wire was connected directly across bulb A`,
          r`Bulb C burned out, which left its branch open`,
        ],
        correctAnswer: 3,
        explanation: r`Losing C raises the equivalent resistance from 1.5R to 2R, so the total current through A falls and A dims, while B's share of the voltage rises from one third to one half and B brightens. A wire across C would also short B and put it out, a burned-out B would be dark, and a wire across A would put A out completely.`,
      },
      {
        question: r`Three identical lamps hang on an ideal battery: lamp A is in series with the combination of lamps B and C, which are in parallel with each other. The filament of lamp C breaks. Which statement about the circuit afterwards is INCORRECT?`,
        options: [
          r`The battery supplies less current than it did before`,
          r`Lamp B carries less current than it did before`,
          r`Lamp A has less voltage across it than it did before`,
          r`Lamp B has more voltage across it than it did before`,
        ],
        correctAnswer: 1,
        explanation: r`With battery voltage V and lamp resistance R, the total current falls from V/(1.5R) to V/(2R) and A's voltage falls from 2V/3 to V/2, so those two statements are true. B's voltage rises from V/3 to V/2, so its current rises from V/(3R) to V/(2R). The statement that B carries less current is the false one: B now takes the whole current and no longer shares it.`,
      },
    ],
  },
  [r`Each of $n$ identical bulbs in series on an ideal source dissipates {{c1::$P_0/n^2$}}, where $P_0$ is one bulb's power when connected alone.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A heat lamp connected alone to an ideal source dissipates 90 W. Three such lamps are then connected in series across the same source. Treating each lamp's resistance as constant, what power does each one dissipate?`,
        options: [r`30 W`, r`10 W`, r`90 W`, r`270 W`],
        correctAnswer: 1,
        explanation: r`Each lamp gets one third of the voltage, and P = V²/R squares that factor: 90/3² = 10 W. The value 30 W divides by n when it should divide by n², 90 W assumes each lamp keeps its solo power as it would in parallel, and 270 W multiplies by n.`,
      },
      {
        question: r`A bulb dissipates 100 W when connected alone to an ideal source. In a series string of identical bulbs on the same source, each bulb dissipates 4 W. Treating the resistances as constant, how many bulbs are in the string?`,
        options: [r`4 bulbs`, r`10 bulbs`, r`25 bulbs`, r`5 bulbs`],
        correctAnswer: 3,
        explanation: r`P₀/n² = 4 W gives n² = 100/4 = 25, so n = 5. The answer 25 forgets to take the square root, as if the power fell as 1/n. The answers 4 and 10 do not satisfy 100/n² = 4.`,
      },
      {
        question: r`Two identical heating elements are connected in series across an ideal source, and each dissipates 150 W. Treating resistance as constant, what would one element dissipate if connected alone to the same source?`,
        options: [r`600 W`, r`300 W`, r`75 W`, r`37.5 W`],
        correctAnswer: 0,
        explanation: r`In series each element has half the voltage and so one quarter of its solo power: P₀ = 2² × 150 = 600 W. The value 300 W multiplies by n and not n², while 75 W and 37.5 W divide when the solo power must be larger than the series power.`,
      },
      {
        question: r`A bulb connected alone to an ideal source dissipates 60 W. Two such bulbs are connected in series across the same source. Treating resistance as constant, what TOTAL power does the pair draw?`,
        options: [r`15 W`, r`120 W`, r`30 W`, r`60 W`],
        correctAnswer: 2,
        explanation: r`Each bulb dissipates 60/2² = 15 W, so the two together draw 30 W. Equivalently, the series pair has twice the resistance on the same voltage, which halves the total power. The value 15 W is one bulb only, 60 W assumes the total is unchanged, and 120 W assumes each bulb keeps its solo power.`,
      },
      {
        question: r`A series string of identical bulbs on an ideal source is lengthened from 2 bulbs to 6 bulbs. Treating resistance as constant, what happens to the power dissipated by each bulb?`,
        options: [r`It falls to one third of its old value`, r`It falls to one ninth of its old value`, r`It falls to one sixth of its old value`, r`It falls to one quarter of its old value`],
        correctAnswer: 1,
        explanation: r`Each bulb's power goes from P₀/2² = P₀/4 to P₀/6² = P₀/36, and (1/36)/(1/4) = 1/9. One third uses the ratio of the bulb counts without squaring it, and one sixth and one quarter mix up single terms of the calculation.`,
      },
      {
        question: r`A small indicator lamp dissipates 2.5 W when connected alone to an ideal source. Five such lamps are connected in series across the same source. Treating resistance as constant, what power does each one dissipate?`,
        options: [r`100 mW`, r`500 mW`, r`12.5 W`, r`62.5 W`],
        correctAnswer: 0,
        explanation: r`Each lamp dissipates 2.5 W/5² = 0.10 W = 100 mW. The value 500 mW divides by n when it should divide by n², while 12.5 W and 62.5 W multiply by n and n² even though sharing the voltage must lower each lamp's power.`,
      },
    ],
  },
  [r`A heater on a fixed-voltage outlet gets a new element with half the resistance. What happens to the power it draws?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 900 W heating element on a fixed-voltage outlet is replaced by an element with three times the resistance. What power does the new element draw?`,
        options: [r`100 W`, r`2700 W`, r`300 W`, r`8100 W`],
        correctAnswer: 2,
        explanation: r`At fixed voltage P = V²/R, so tripling R cuts the power to 900/3 = 300 W. The value 2700 W uses I²R with the current held fixed, which is wrong because the current falls too. The values 100 W and 8100 W square the factor of 3.`,
      },
      {
        question: r`A 500 W heater on a fixed-voltage outlet is to be rebuilt so that it draws 2000 W from the same outlet. What must the new element's resistance be?`,
        options: [r`One quarter of the old value`, r`One half of the old value`, r`Two times the old value`, r`Four times the old value`],
        correctAnswer: 0,
        explanation: r`At fixed voltage P = V²/R, so four times the power needs one quarter of the resistance. Four times the resistance comes from using I²R with the current held fixed, and would in fact cut the power to 125 W. One half and two times come from taking a square root that this relation does not contain.`,
      },
      {
        question: r`A 50 Ω heating element on a fixed 100 V supply draws 200 W. It is replaced by a 20 Ω element on the same supply. What power does the new element draw?`,
        options: [r`80 W`, r`200 W`, r`1250 W`, r`500 W`],
        correctAnswer: 3,
        explanation: r`P = V²/R = (100 V)²/20 Ω = 500 W: the resistance fell by a factor of 2.5, so the power rose by 2.5. The value 80 W scales the power with R as if the current were fixed, 200 W leaves the power unchanged, and 1250 W squares the factor of 2.5.`,
      },
      {
        question: r`A heater on a fixed-voltage outlet draws 1500 W when first switched on. As its element warms up, the element's resistance rises to 1.25 times its cold value. What power does the hot heater draw?`,
        options: [r`1875 W`, r`1200 W`, r`1125 W`, r`960 W`],
        correctAnswer: 1,
        explanation: r`At fixed voltage P = V²/R, so the power becomes 1500/1.25 = 1200 W. The value 1875 W multiplies by 1.25, as I²R would with a fixed current. The value 1125 W subtracts 25 percent, and 960 W divides by 1.25 twice.`,
      },
      {
        question: r`A heater on a fixed-voltage outlet gets a new element with one third of the old resistance. What happens to the current it draws and to its power?`,
        options: [
          r`The current triples and the power is nine times larger`,
          r`The current is unchanged and the power falls to one third`,
          r`The current falls to one third and so does the power`,
          r`The current triples and the power also triples`,
        ],
        correctAnswer: 3,
        explanation: r`At fixed voltage I = V/R triples, and P = V²/R (or P = IV with V fixed) also triples. A ninefold rise would need the voltage to triple as well. Holding the current fixed in I²R wrongly predicts one third of the power, and a lower resistance cannot lower the current at fixed voltage.`,
      },
      {
        question: r`A 2 kΩ resistor across a fixed 10 V lab supply dissipates 50 mW. It is replaced by a 500 Ω resistor across the same supply. What power does the new resistor dissipate?`,
        options: [r`12.5 mW`, r`50 mW`, r`200 mW`, r`800 mW`],
        correctAnswer: 2,
        explanation: r`P = V²/R = (10 V)²/500 Ω = 0.20 W = 200 mW: one quarter of the resistance gives four times the power. The value 12.5 mW divides by 4 as I²R would with a fixed current, 800 mW squares the factor of 4, and 50 mW leaves the power unchanged.`,
      },
    ],
  },
  [r`A wire connected across one branch of a parallel bank shorts {{c1::every branch of the bank}}.`]: {
    kind: 'concept',
    more: [
      {
        question: r`Three lamps are in parallel with one another behind a series resistor on an ideal battery. A wire of negligible resistance is clipped across one lamp, and all three lamps go dark. Why do the other two lamps also go dark?`,
        options: [
          r`All the lamps join the same two nodes, which the wire ties together`,
          r`All the lamps are in series, so one fault opens the whole path`,
          r`The wire raises the bank's resistance, which starves every lamp`,
          r`The wire pulls the battery's emf down until it is close to zero`,
        ],
        correctAnswer: 0,
        explanation: r`Every branch of a parallel bank connects the same two nodes. The wire puts those nodes at the same potential, so every lamp has 0 V across it and the current takes the wire. The lamps are in parallel and not in series, the wire lowers the bank's resistance to zero, and an ideal battery keeps its emf.`,
      },
      {
        question: r`Three heaters are in parallel with one another behind a series resistor on an ideal supply. All three heaters go cold at the same moment, while the current through the series resistor RISES. Which single fault explains both observations?`,
        options: [
          r`One heater element burning out and going open`,
          r`The series resistor burning out and going open`,
          r`A stray wire bridging the terminals of one heater`,
          r`A stray wire bridging the series resistor's ends`,
        ],
        correctAnswer: 2,
        explanation: r`A wire across one heater joins the two nodes that all three heaters share, so each has 0 V and goes cold, and the total resistance falls to the series resistor alone, so the current rises. One open heater leaves the other two running, an open series resistor stops all current, and a wire across the series resistor would make the heaters hotter.`,
      },
    ],
  },
  [r`A $24$ V ideal source drives a $2\,\Omega$ resistor in series with two $4\,\Omega$ resistors in parallel. One $4\,\Omega$ resistor fails open. What happens to the current in the other?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 60 V ideal source drives a 10 Ω resistor in series with two 40 Ω resistors connected in parallel. One of the 40 Ω resistors fails open. What happens to the current in the other 40 Ω resistor?`,
        options: [r`It stays fixed at 1.0 A`, r`It falls from 2.0 A to 1.2 A`, r`It rises from 1.0 A to 2.0 A`, r`It rises from 1.0 A to 1.2 A`],
        correctAnswer: 3,
        explanation: r`Before: 10 + 20 = 30 Ω, so 2.0 A splits evenly into 1.0 A each. After: 10 + 40 = 50 Ω, so 60/50 = 1.2 A, all of it through the survivor. A fall from 2.0 A to 1.2 A describes the total current, a rise to 2.0 A assumes the old total is unchanged, and "stays fixed" would hold only with no series resistor.`,
      },
      {
        question: r`A 12 V ideal battery drives a 2 Ω resistor in series with two 8 Ω lamps connected in parallel. One lamp burns out and becomes an open circuit. What is the voltage across the surviving lamp afterwards?`,
        options: [r`8.0 V`, r`9.6 V`, r`2.4 V`, r`12 V`],
        correctAnswer: 1,
        explanation: r`After the failure the circuit is 2 Ω + 8 Ω = 10 Ω, so the current is 1.2 A and the lamp has 1.2 × 8 = 9.6 V. The value 8.0 V is the lamp voltage before the failure (2 A through 2 Ω left 8 V), 2.4 V is the new drop across the series resistor, and 12 V ignores that resistor.`,
      },
      {
        question: r`A 24 V ideal source drives a 4 Ω resistor in series with two 16 Ω resistors connected in parallel. One of the 16 Ω resistors fails open. What happens to the current supplied by the source?`,
        options: [r`It falls from 2.0 A to 1.2 A`, r`It falls from 2.0 A to 1.0 A`, r`It rises from 1.0 A to 1.2 A`, r`It stays fixed at 2.0 A`],
        correctAnswer: 0,
        explanation: r`Before: 4 + 8 = 12 Ω and 24/12 = 2.0 A. After: 4 + 16 = 20 Ω and 24/20 = 1.2 A. A rise from 1.0 A to 1.2 A describes the surviving resistor and not the source, a fall to 1.0 A assumes the survivor keeps its old current, and "stays fixed" ignores the rise in equivalent resistance.`,
      },
      {
        question: r`A 24 V ideal battery drives a 6 Ω resistor in series with a 6 Ω heater and a 3 Ω heater connected in parallel. The 3 Ω heater fails open. What happens to the current in the 6 Ω heater?`,
        options: [r`It stays fixed at 1 A`, r`It falls from 3 A to 2 A`, r`It rises from 1 A to 2 A`, r`It rises from 1 A to 3 A`],
        correctAnswer: 2,
        explanation: r`Before: the pair is 2 Ω, the total is 8 Ω and 3 A flows, leaving 6 V across the pair and 1 A in the 6 Ω heater. After: 6 + 6 = 12 Ω, so 2 A flows, all of it through that heater. A fall from 3 A to 2 A describes the battery current, and a rise to 3 A assumes the old total current is unchanged.`,
      },
      {
        question: r`An ideal source drives a 10 Ω resistor in series with two 20 Ω resistors connected in parallel. One of the 20 Ω resistors fails open. By what factor does the current in the other 20 Ω resistor change?`,
        options: [r`It becomes 2/3 as large`, r`It becomes 4/3 as large`, r`It becomes 3/4 as large`, r`It becomes 2 times as large`],
        correctAnswer: 1,
        explanation: r`With source voltage V, the total resistance is 20 Ω before, so V/20 splits into V/40 per branch. Afterwards it is 30 Ω and the survivor carries all of V/30. The ratio is (V/30)/(V/40) = 4/3. The factor 2/3 is the change in the total current, 3/4 inverts the answer, and 2 assumes the total current stays the same.`,
      },
      {
        question: r`A 12 V ideal source drives a 1 kΩ resistor in series with two 4 kΩ sensors connected in parallel. One sensor fails open. What is the current in the surviving sensor afterwards?`,
        options: [r`2.0 mA`, r`3.0 mA`, r`4.0 mA`, r`2.4 mA`],
        correctAnswer: 3,
        explanation: r`After the failure the circuit is 1 kΩ + 4 kΩ = 5 kΩ, so 12 V/5 kΩ = 2.4 mA flows through the survivor. The value 2.0 mA is its current before the failure, 4.0 mA is the old total current, and 3.0 mA puts the full 12 V across the 4 kΩ sensor.`,
      },
    ],
  },
  [r`A resistor $R_s$ sits in series in front of a parallel bank. A new branch is added to the bank. What happens to the current in each original branch?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Under which condition does adding one more branch to a parallel bank leave the current in each original branch unchanged?`,
        options: [
          r`The bank is fed through a resistor of large value`,
          r`The new branch has a far lower resistance than the rest`,
          r`The bank is wired directly across an ideal source`,
          r`The source has a large internal resistance of its own`,
        ],
        correctAnswer: 2,
        explanation: r`Directly across an ideal source every branch keeps the full source voltage, so each branch current V/R is unaffected by its neighbors. Any resistance in series with the bank, whether a separate resistor or the source's internal resistance, drops more voltage when the total current rises. A low-resistance new branch makes that effect worse.`,
      },
      {
        question: r`A resistor sits in series between an ideal source and a parallel bank, and one more branch is added to the bank. Which chain of reasoning is correct?`,
        options: [
          r`Equivalent resistance falls, total current rises, bank voltage falls`,
          r`Equivalent resistance falls, total current rises, bank voltage rises`,
          r`Equivalent resistance rises, total current falls, bank voltage falls`,
          r`Equivalent resistance rises, total current falls, bank voltage rises`,
        ],
        correctAnswer: 0,
        explanation: r`Another parallel path lowers the bank's resistance and so the equivalent resistance, and the ideal source then supplies more current. That larger current drops more voltage across the series resistor, leaving less for the bank, so each original branch carries less. Adding a branch never raises the equivalent resistance, and a larger series drop cannot leave more voltage for the bank.`,
      },
    ],
  },
  [r`What are the equivalent expressions for power dissipated by a resistor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`During a defibrillator pulse, the paddles apply 3000 V while a current of 20 A passes through the chest. What power is delivered during the pulse?`,
        options: [r`150 W`, r`60 kW`, r`6 kW`, r`1200 kW`],
        correctAnswer: 1,
        explanation: r`P = IV = (20 A)(3000 V) = 60 000 W = 60 kW. The number 150 is V/I, which is the resistance in ohms and not a power, 6 kW slips a power of ten, and 1200 kW squares the current and multiplies by the voltage.`,
      },
      {
        question: r`A 50 Ω resistor is rated to dissipate at most 2 W. What is the largest current it can safely carry?`,
        options: [r`0.04 A`, r`5 A`, r`25 A`, r`0.2 A`],
        correctAnswer: 3,
        explanation: r`From P = I²R, I² = 2/50 = 0.04 A², so I = 0.2 A. The value 0.04 A forgets the square root, 25 A inverts the ratio as R/P, and 5 A is the square root of that inverted ratio.`,
      },
      {
        question: r`An 8 Ω loudspeaker, treated as a resistor, is dissipating 50 W. What is the voltage across it?`,
        options: [r`2.5 V`, r`6.25 V`, r`20 V`, r`400 V`],
        correctAnswer: 2,
        explanation: r`From P = V²/R, V² = PR = 50 × 8 = 400 V², so V = 20 V. The value 400 V forgets the square root, 6.25 V divides P by R, and 2.5 V is the square root of that wrong quotient.`,
      },
      {
        question: r`A resistor on a circuit board dissipates 0.90 W while it carries 30 mA. What is its resistance?`,
        options: [r`1000 Ω`, r`30 Ω`, r`33 Ω`, r`0.001 Ω`],
        correctAnswer: 0,
        explanation: r`From P = I²R, R = P/I² = 0.90/(0.030)² = 0.90/(9.0 × 10⁻⁴) = 1000 Ω. The number 30 is P/I, which is the voltage in volts and not a resistance, 0.001 Ω leaves the current as 30 without converting milliamps, and 33 divides the current in milliamps by the power.`,
      },
      {
        question: r`A 2 Ω fuse and a 10 Ω heating coil are wired in series inside a hand warmer. The fuse dissipates 3 W. How much power does the heating coil dissipate?`,
        options: [r`0.6 W`, r`3 W`, r`75 W`, r`15 W`],
        correctAnswer: 3,
        explanation: r`Elements in series carry the same current, and then P = I²R is proportional to R, so the 10 Ω coil dissipates 5 × 3 W = 15 W. The value 0.6 W uses V²/R as if the two shared a voltage, 75 W squares the factor of 5, and 3 W assumes equal current means equal power.`,
      },
      {
        question: r`A 4 Ω pump heater and a 12 Ω light strip are in parallel on an aquarium's low-voltage supply. The 12 Ω light strip takes 6 W. What power does the 4 Ω pump heater take?`,
        options: [r`2 W`, r`18 W`, r`6 W`, r`54 W`],
        correctAnswer: 1,
        explanation: r`Elements in parallel have the same voltage, and then P = V²/R is inversely proportional to R, so the 4 Ω heater takes 3 × 6 W = 18 W. The value 2 W uses I²R as if the two shared a current, 54 W squares the factor of 3, and 6 W assumes equal voltage means equal power.`,
      },
    ],
  },
  [r`Kirchhoff's junction rule is based on conservation of:`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab report claims that, in steady state, 3 A flows into a junction of two wires and only 2 A flows out, with no other connection to the junction. Why is this impossible?`,
        options: [
          r`Charge would pile up at the junction without limit`,
          r`Energy would be created at the junction from nothing`,
          r`Voltage would drop at the junction with no resistor`,
          r`Power would be lost at the junction with no heating`,
        ],
        correctAnswer: 0,
        explanation: r`Current is charge per second, so 3 A in and 2 A out would add 1 C to the junction every second, forever. Charge is conserved and cannot keep accumulating at a point in a steady circuit, so the currents in and out must match. The junction rule is a statement about charge, not about energy, voltage or power.`,
      },
      {
        question: r`In a steady circuit, 5 C of charge flows into a junction each second through one wire, and 2 C leaves each second through a second wire. A third wire is the only other connection. How much charge leaves through the third wire in 4 s?`,
        options: [r`3 C`, r`8 C`, r`12 C`, r`28 C`],
        correctAnswer: 2,
        explanation: r`Charge is conserved at the junction, so the third wire must carry away 5 − 2 = 3 C each second, which is 12 C in 4 s. The value 3 C is the amount for one second only, 8 C is what the second wire carries in 4 s, and 28 C adds the two flows when the outgoing one should be subtracted.`,
      },
    ],
  },
}
