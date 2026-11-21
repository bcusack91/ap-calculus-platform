import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for equivalent capacitance, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A network of three capacitors draws 60 μC from a 12 V battery. Which line of a lab report states the network's equivalent capacitance correctly?`,
        options: [r`$C_{\text{eq}}$ = 5.0 μC`, r`$C_{\text{eq}}$ = 5.0 μF`, r`$C_{\text{eq}}$ = 720 μF`, r`$C_{\text{eq}}$ = 0.20 μF`],
        correctAnswer: 1,
        explanation: r`The equivalent capacitance is the one capacitance that stores the same charge at the same voltage: 60 μC ÷ 12 V = 5.0 μF, measured in farads. The line in μC uses the unit of charge, 720 μF multiplies charge by voltage, and 0.20 μF divides the voltage by the charge.`,
      },
      {
        question: r`A bank of supercapacitors in an electric bus is labelled with an equivalent capacitance of 2.0 F. What does that label say about the bank as a whole?`,
        options: [r`It stores 2.0 V for each coulomb placed on it`, r`It stores 2.0 J for each volt applied across it`, r`It passes 2.0 A for each volt applied across it`, r`It stores 2.0 C for each volt applied across it`],
        correctAnswer: 3,
        explanation: r`A farad is a coulomb per volt, and the equivalent capacitance treats the whole bank as one capacitor, so the bank stores 2.0 C of charge for each volt across it. Volts per coulomb inverts the unit. Joules per volt and amperes per volt are not capacitance: the second describes a conductance.`,
      },
    ],
  },
  [r`How do the capacitor combining rules compare with the resistor rules?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 Ω and a 4 Ω resistor in parallel give 3 Ω. A 12 μF and a 4 μF capacitor are also wired in parallel, across a sensor's supply. What is their equivalent capacitance?`,
        options: [r`16 μF`, r`3 μF`, r`8 μF`, r`48 μF`],
        correctAnswer: 0,
        explanation: r`Capacitors in parallel add directly, the way resistors in series do: 12 μF + 4 μF = 16 μF. The value 3 μF copies the parallel-resistor rule onto the capacitors. 8 μF is the average of the two, and 48 μF is their product.`,
      },
      {
        question: r`A hobbyist knows that a 10 Ω and a 40 Ω resistor in series make 50 Ω. She wires a 10 μF and a 40 μF capacitor in series in a timer. What is their equivalent capacitance?`,
        options: [r`50 μF`, r`25 μF`, r`8.0 μF`, r`0.125 μF`],
        correctAnswer: 2,
        explanation: r`Capacitors in series add as reciprocals, the way resistors in parallel do: 1/10 + 1/40 = 5/40, so the result is 40/5 = 8.0 μF. 50 μF copies the series-resistor rule, 25 μF is the average, and 0.125 μF is the reciprocal sum left unflipped.`,
      },
      {
        question: r`A student has a 4 Ω and a 12 Ω resistor, and a 4 μF and a 12 μF capacitor. She wires each pair so that its combined value is as small as possible. Which arrangements does she use, and what are the values?`,
        options: [r`Resistors in parallel for 3 Ω, capacitors in parallel for 3 μF`, r`Resistors in series for 3 Ω, capacitors in parallel for 3 μF`, r`Resistors in series for 3 Ω, capacitors in series for 3 μF`, r`Resistors in parallel for 3 Ω, capacitors in series for 3 μF`],
        correctAnswer: 3,
        explanation: r`The reciprocal rule gives the small value, 4 × 12 ÷ 16 = 3, and it applies to resistors in parallel but to capacitors in series. Resistors in series give 16 Ω and capacitors in parallel give 16 μF, so any option that uses either of those arrangements for a value of 3 is wrong.`,
      },
      {
        question: r`Moving two identical resistors from series to parallel cuts their total resistance to one quarter. Two identical 8.0 μF capacitors in a filter are moved from series to parallel. How does their equivalent capacitance change?`,
        options: [r`It becomes one quarter as large`, r`It becomes 4 times as large`, r`It becomes one half as large`, r`It becomes 2 times as large`],
        correctAnswer: 1,
        explanation: r`The capacitor rules are the reverse of the resistor rules. In series the pair gives 8.0 ÷ 2 = 4.0 μF, and in parallel 8.0 + 8.0 = 16 μF, which is 4 times as large. One quarter copies what the resistors do. The factors of 2 and one half compare one arrangement with a single capacitor instead of with the other arrangement.`,
      },
      {
        question: r`A 2.0 kΩ and a 3.0 kΩ resistor in series give 5.0 kΩ. On a radio board, a 2,000 pF capacitor and a 3.0 nF capacitor are wired in parallel. What is their equivalent capacitance?`,
        options: [r`1.2 nF`, r`2,003 pF`, r`5.0 nF`, r`5.0 pF`],
        correctAnswer: 2,
        explanation: r`2,000 pF is 2.0 nF, and capacitors in parallel add directly, like resistors in series: 2.0 nF + 3.0 nF = 5.0 nF. 1.2 nF uses the reciprocal rule, which belongs to capacitors in series. 2,003 pF adds the numbers without converting units, and 5.0 pF has the right digits with the wrong prefix.`,
      },
      {
        question: r`A 6 Ω resistor is brought down to 4 Ω by adding a 12 Ω resistor in parallel. A circuit needs a 6.0 μF capacitor brought down to 4.0 μF by adding one capacitor. Which capacitor, wired how?`,
        options: [r`12 μF, wired in series with it`, r`12 μF, wired in parallel with it`, r`2.0 μF, wired in series with it`, r`2.0 μF, wired in parallel with it`],
        correctAnswer: 0,
        explanation: r`Capacitance falls only when a capacitor is added in series, where the parallel-resistor arithmetic applies: 6.0 × 12 ÷ 18 = 4.0 μF. Adding 12 μF in parallel would give 18 μF. Adding 2.0 μF gives 1.5 μF in series and 8.0 μF in parallel.`,
      },
    ],
  },
  [r`What is the equivalent capacitance of capacitors in parallel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A camera flash unit has a 150 μF capacitor and a 350 μF capacitor connected in parallel. What is their equivalent capacitance?`,
        options: [r`105 μF`, r`250 μF`, r`350 μF`, r`500 μF`],
        correctAnswer: 3,
        explanation: r`Capacitors in parallel add their capacitances: 150 μF + 350 μF = 500 μF. 105 μF is product over sum, the series result. 250 μF is the average, and 350 μF is just the larger one, but a parallel result must exceed the largest.`,
      },
      {
        question: r`A power supply needs 100 μF across its output. A 68 μF capacitor is already fitted there. What capacitance must be added in parallel with it?`,
        options: [r`168 μF`, r`32 μF`, r`84 μF`, r`1.5 μF`],
        correctAnswer: 1,
        explanation: r`In parallel the capacitances add, so the missing value is 100 μF − 68 μF = 32 μF. 168 μF adds the two given numbers instead of subtracting. 84 μF is their average, and 1.5 μF divides 100 by 68.`,
      },
      {
        question: r`A 0.30 μF capacitor and a 200 nF capacitor are wired in parallel in an audio filter. What is their equivalent capacitance?`,
        options: [r`0.50 μF`, r`200.3 μF`, r`0.12 μF`, r`0.25 μF`],
        correctAnswer: 0,
        explanation: r`200 nF is 0.20 μF, and capacitors in parallel add: 0.30 μF + 0.20 μF = 0.50 μF. 200.3 μF adds the numbers without converting nanofarads. 0.12 μF is product over sum, the series result, and 0.25 μF is the average of the two.`,
      },
      {
        question: r`A patch of cell membrane has a capacitance of 2.0 pF. Twelve identical patches are in parallel, each connecting the same inside fluid to the same outside fluid. What is their total capacitance?`,
        options: [r`0.17 pF`, r`6.0 pF`, r`24 pF`, r`2.0 pF`],
        correctAnswer: 2,
        explanation: r`Parallel capacitances add, so twelve equal patches give 12 × 2.0 pF = 24 pF. 0.17 pF divides 2.0 by 12, which is the series result. 6.0 pF divides 12 by 2.0, and 2.0 pF treats the total as no larger than one patch.`,
      },
      {
        question: r`A bank holds four identical capacitors in parallel. Two more identical capacitors are then added in parallel with them. How does the equivalent capacitance of the bank change?`,
        options: [r`It becomes 2.0 times as large`, r`It becomes 1.5 times as large`, r`It becomes 2/3 times as large`, r`It becomes 6.0 times as large`],
        correctAnswer: 1,
        explanation: r`In parallel the capacitances add, so the bank goes from 4C to 6C, a factor of 6 ÷ 4 = 1.5. A factor of 2.0 would need four more capacitors, not two. 2/3 inverts the ratio, and 6.0 compares the new bank with a single capacitor.`,
      },
      {
        question: r`Three capacitors in parallel smooth the output of a hospital monitor's supply. Together they act as 90 μF. Two of them are 20 μF and 25 μF. What is the third?`,
        options: [r`135 μF`, r`30 μF`, r`11 μF`, r`45 μF`],
        correctAnswer: 3,
        explanation: r`The three capacitances add to 90 μF, so the third is 90 − 20 − 25 = 45 μF. 135 μF adds all three given numbers. 30 μF divides 90 equally by three, and 11 μF is product over sum of the 20 μF and 25 μF, a series calculation.`,
      },
    ],
  },
  [r`What do capacitors in parallel share, and what adds?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 3.0 μF and a 6.0 μF capacitor are wired in parallel across a 9.0 V battery. How much charge does each one hold?`,
        options: [r`18 μC on the 3.0 μF and 18 μC on the 6.0 μF`, r`54 μC on the 3.0 μF and 27 μC on the 6.0 μF`, r`27 μC on the 3.0 μF and 54 μC on the 6.0 μF`, r`40.5 μC on the 3.0 μF and 40.5 μC on the 6.0 μF`],
        correctAnswer: 2,
        explanation: r`Both capacitors have the full 9.0 V, so Q = CV gives 3.0 × 9.0 = 27 μC and 6.0 × 9.0 = 54 μC. Equal charges of 18 μC treat the pair as a series chain of 2.0 μF. The reversed option gives the smaller capacitor more charge, and 40.5 μC each splits the 81 μC total equally.`,
      },
      {
        question: r`A 2.0 μF and an 8.0 μF capacitor are wired in parallel on a circuit board. Together they hold 50 μC. What is the voltage across the 2.0 μF capacitor?`,
        options: [r`5.0 V`, r`25 V`, r`6.25 V`, r`2.5 V`],
        correctAnswer: 0,
        explanation: r`Parallel capacitors share one voltage and their charges add, so V = Q ÷ (C₁ + C₂) = 50 μC ÷ 10 μF = 5.0 V across each. 25 V puts all 50 μC on the 2.0 μF capacitor, and 6.25 V puts it all on the 8.0 μF one. 2.5 V halves the shared voltage as if the pair divided it.`,
      },
      {
        question: r`Two capacitors are wired in parallel across a sensor's supply. The first, 15 μF, holds 60 μC. The second holds 20 μC. What is the capacitance of the second?`,
        options: [r`45 μF`, r`15 μF`, r`80 μF`, r`5.0 μF`],
        correctAnswer: 3,
        explanation: r`The first capacitor gives the shared voltage: 60 μC ÷ 15 μF = 4.0 V. The second has the same 4.0 V, so C = 20 μC ÷ 4.0 V = 5.0 μF. 45 μF inverts the charge ratio, 15 μF assumes equal capacitors despite unequal charges, and 80 μF multiplies 20 by 4.0.`,
      },
      {
        question: r`A 400 nF and a 0.60 μF capacitor are wired in parallel across a 1.5 V cell in a hearing aid. How much charge does the cell supply in total?`,
        options: [r`0.36 μC`, r`1.5 μC`, r`601 μC`, r`0.67 μC`],
        correctAnswer: 1,
        explanation: r`400 nF is 0.40 μF. Each capacitor has the full 1.5 V and the charges add: 0.40 × 1.5 + 0.60 × 1.5 = 0.60 + 0.90 = 1.5 μC. 0.36 μC treats the pair as a series chain of 0.24 μF. 601 μC adds 400 and 0.60 without converting, and 0.67 μC divides the capacitance by the voltage.`,
      },
      {
        question: r`A defibrillator's energy store is a 40 μF and a 60 μF capacitor in parallel. Fully charged, the pair holds 0.20 C in total. How much of that charge is on the 60 μF capacitor?`,
        options: [r`0.12 C`, r`0.10 C`, r`0.080 C`, r`0.20 C`],
        correctAnswer: 0,
        explanation: r`The shared voltage is 0.20 C ÷ 100 μF = 2,000 V, so the 60 μF capacitor holds 60 μF × 2,000 V = 0.12 C, which is 60% of the total. 0.10 C splits the charge equally, 0.080 C is the 40 μF capacitor's share, and 0.20 C gives each capacitor the whole charge as in a series chain.`,
      },
      {
        question: r`A capacitor connected to a battery holds 12 μC. A second capacitor, with three times the capacitance, is then wired in parallel with it while the battery stays connected. How much charge has the battery supplied in total once charging stops?`,
        options: [r`36 μC`, r`12 μC`, r`48 μC`, r`16 μC`],
        correctAnswer: 2,
        explanation: r`Both capacitors have the battery's voltage, so the second, with three times the capacitance, holds 3 × 12 = 36 μC, and the charges add to 12 + 36 = 48 μC. 36 μC counts only the new capacitor. 12 μC assumes the first charge is merely shared out, and 16 μC gives the larger capacitor one third of the charge instead of three times.`,
      },
    ],
  },
  [r`What is the picture for capacitors in parallel?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An identical capacitor is wired in parallel with a parallel-plate capacitor. This is equivalent to which single change to the first capacitor, and what does it do to the capacitance?`,
        options: [r`Doubling the gap, which halves C`, r`Doubling the plate area, which doubles C`, r`Doubling the gap, which doubles C`, r`Halving the plate area, which halves C`],
        correctAnswer: 1,
        explanation: r`In parallel the plates join into one larger plate at the same gap, so two identical capacitors act as one with twice the area. Since C is proportional to A/d, the capacitance doubles. A doubled gap is the picture for two identical capacitors in series, and it would halve C, not double it. Parallel wiring adds plate area; it never removes any.`,
      },
      {
        question: r`In terms of the plates, why does adding a capacitor in parallel always raise the equivalent capacitance?`,
        options: [r`The gaps add into one wider gap, so more charge is stored per volt`, r`The gaps add into one wider gap, so less charge is stored per volt`, r`The plates act as one larger plate, so more charge is stored per volt`, r`The plates act as one larger plate, so less charge is stored per volt`],
        correctAnswer: 2,
        explanation: r`Parallel plates are joined by wires, so they behave as one plate of larger area at the same gap, and C = κε₀A/d grows with area: more charge for each volt. Gaps stack only in series, and a wider gap lowers the capacitance. A larger plate storing less charge per volt contradicts C being proportional to A.`,
      },
    ],
  },
  [r`What is the equivalent capacitance of capacitors in series?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A voltage multiplier in an air purifier builds its output with a 10 μF, a 15 μF and a 30 μF part, all wired in series. What single capacitance could replace the three parts?`,
        options: [r`5.0 μF`, r`55 μF`, r`0.20 μF`, r`10 μF`],
        correctAnswer: 0,
        explanation: r`Series capacitors add as reciprocals: 1/10 + 1/15 + 1/30 = 3/30 + 2/30 + 1/30 = 6/30, and flipping gives 30/6 = 5.0 μF. 55 μF adds the values directly, the parallel rule. 0.20 μF is the reciprocal sum left unflipped, and 10 μF is the smallest capacitor, but a series result must be below it.`,
      },
      {
        question: r`A repair technician measures 3.0 μF for a chain of two parts on a pump controller board. One part is marked 12 μF, and the marking on its series partner has worn off. What did the worn marking read?`,
        options: [r`9.0 μF`, r`15 μF`, r`0.25 μF`, r`4.0 μF`],
        correctAnswer: 3,
        explanation: r`Use 1/C₂ = 1/3.0 − 1/12 = 4/12 − 1/12 = 3/12, so C₂ = 12/3 = 4.0 μF. Check: 12 × 4.0 ÷ 16 = 3.0 μF. 9.0 μF subtracts the capacitances and 15 μF adds them, both parallel-style arithmetic. 0.25 μF is the reciprocal 3/12 left unflipped.`,
      },
      {
        question: r`A touch sensor has a 6.0 nF capacitor in series with a 3,000 pF capacitor. What is the equivalent capacitance of the pair?`,
        options: [r`9.0 nF`, r`6.0 nF`, r`2.0 nF`, r`0.50 nF`],
        correctAnswer: 2,
        explanation: r`3,000 pF is 3.0 nF. In series, 1/6.0 + 1/3.0 = 1/6 + 2/6 = 3/6, and flipping gives 2.0 nF. 9.0 nF adds the two directly, the parallel rule. 6.0 nF comes from combining 6.0 with 3,000 without converting, and 0.50 nF is the reciprocal sum left unflipped.`,
      },
      {
        question: r`A hearing-aid amplifier couples two stages through a single 30 μF part. A designer wires a 15 μF part in series with it. How does the coupling capacitance compare with the original 30 μF?`,
        options: [r`It becomes one half as large`, r`It becomes one third as large`, r`It becomes 1.5 times as large`, r`It becomes 3.0 times as large`],
        correctAnswer: 1,
        explanation: r`In series, 1/30 + 1/15 = 1/30 + 2/30 = 3/30, so the pair is 10 μF, one third of 30 μF. One half would need an identical 30 μF partner. A factor of 1.5 adds the values to get 45 μF, the parallel rule, and a factor of 3.0 inverts the ratio.`,
      },
      {
        question: r`Under a skin electrode, a gel layer acts as a 40 nF capacitor in series with a skin layer that acts as a 10 nF capacitor. What is the equivalent capacitance of the two layers?`,
        options: [r`50 nF`, r`25 nF`, r`0.125 nF`, r`8.0 nF`],
        correctAnswer: 3,
        explanation: r`In series, 1/40 + 1/10 = 1/40 + 4/40 = 5/40, and flipping gives 40/5 = 8.0 nF, below the smaller layer as it must be. 50 nF adds the values directly, the parallel rule. 25 nF is the average, and 0.125 nF is the reciprocal sum left unflipped.`,
      },
      {
        question: r`A high-voltage probe has four capacitors in series: three of 6.0 μF and one of 2.0 μF. What is the equivalent capacitance of the chain?`,
        options: [r`1.0 μF`, r`20 μF`, r`2.0 μF`, r`5.0 μF`],
        correctAnswer: 0,
        explanation: r`Add the reciprocals: 1/6 + 1/6 + 1/6 = 1/2, and 1/2 + 1/2 = 1, so the chain is 1.0 μF. 20 μF adds the four values directly, the parallel rule. 2.0 μF is the smallest capacitor, which a series result must be below, and 5.0 μF is the average of the four.`,
      },
    ],
  },
  [r`Why do capacitors in series all carry the same charge?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An uncharged 3.0 μF and an uncharged 6.0 μF capacitor are joined in series and connected to a battery. Each ends up holding 24 μC. Consider the piece of metal made of the two inner plates and the wire joining them. What is its net charge?`,
        options: [r`+48 μC, with +24 μC on each of its two plates`, r`−48 μC, with −24 μC on each of its two plates`, r`+24 μC, with all of it on just one of its plates`, r`Zero, with −24 μC on one plate and +24 μC on the other`],
        correctAnswer: 3,
        explanation: r`That piece of metal touches nothing else, so no charge can enter or leave it: it starts neutral and stays neutral. Charge only separates within it, leaving −24 μC on one inner plate and +24 μC on the other. Any nonzero total would mean charge crossed a capacitor's gap, which does not happen.`,
      },
      {
        question: r`A 2.0 μF and a 10 μF capacitor are in series across a battery. A student says the 10 μF capacitor must hold more charge "because Q = CV". Which evaluation is correct?`,
        options: [r`Wrong: the isolated middle section forces equal charges on both`, r`Right: both have the battery's voltage, so charge follows C`, r`Wrong: the smaller capacitor holds more, since its V is larger`, r`Right: the battery sends more charge to the larger capacitor`],
        correctAnswer: 0,
        explanation: r`The two inner plates and their wire are an isolated, neutral piece of metal, so −Q on one inner plate forces +Q on the other and both capacitors hold the same charge. In series the capacitors do not each have the battery's voltage, so Q = CV cannot be used with one shared V. The smaller capacitor has the larger voltage, but not a larger charge.`,
      },
    ],
  },
  [r`What is the picture for two identical capacitors in series?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 60 pF parallel-plate capacitor is rebuilt with the same plates but twice the gap, and its capacitance falls to 30 pF. Which wiring of the original 60 pF capacitors behaves the same way?`,
        options: [r`Two of them wired in parallel`, r`Four of them wired in parallel`, r`Two of them wired in series`, r`Four of them wired in series`],
        correctAnswer: 2,
        explanation: r`Two identical capacitors in series act like one capacitor with the same plates and the two gaps stacked, so twice the gap and half the capacitance: 60 ÷ 2 = 30 pF. Parallel wiring joins plates into a larger area and raises the capacitance. Four in series would stack four gaps and give 15 pF.`,
      },
      {
        question: r`Two identical capacitors in series can be pictured as one capacitor with twice the gap. Why can the two joined middle plates be left out of that picture?`,
        options: [r`They carry +Q and +Q, which add to twice the charge`, r`They carry −Q and +Q, which cancel to zero net charge`, r`They carry no charge at all, since no wire reaches them`, r`They carry −Q and +Q, which doubles the plate area`],
        correctAnswer: 1,
        explanation: r`The joined middle plates form one isolated piece of metal with −Q on one side and +Q on the other, a net charge of zero, so only the two outer plates and the doubled gap matter. The middle plates are charged, just not net charged. Plate area doubles in the parallel picture, not the series one.`,
      },
    ],
  },
  [r`Which of two unequal capacitors in series takes the larger voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 2.0 μF and a 10 μF capacitor are in series across a power supply. The voltage across the 2.0 μF capacitor is 15 V. What is the voltage across the 10 μF capacitor?`,
        options: [r`75 V`, r`3.0 V`, r`15 V`, r`7.5 V`],
        correctAnswer: 1,
        explanation: r`Series capacitors hold the same charge, so V = Q/C is inversely proportional to C. The 10 μF capacitor has five times the capacitance, so it takes one fifth of the voltage: 15 ÷ 5 = 3.0 V. 75 V gives the larger capacitor the larger voltage, 15 V assumes equal shares, and 7.5 V halves instead of using the ratio.`,
      },
      {
        question: r`Capacitors P and Q are in series in a sensor circuit. P takes 20 V and Q takes 5.0 V. P is a 3.0 μF capacitor. What is the capacitance of Q?`,
        options: [r`0.75 μF`, r`3.0 μF`, r`15 μF`, r`12 μF`],
        correctAnswer: 3,
        explanation: r`With the same charge on both, the capacitor with one quarter of the voltage has four times the capacitance: 4 × 3.0 = 12 μF. Check: Q = 3.0 μF × 20 V = 60 μC, and 60 μC ÷ 5.0 V = 12 μF. 0.75 μF gives the smaller voltage to the smaller capacitor, 3.0 μF assumes equal capacitors, and 15 μF multiplies 3.0 by 5.0.`,
      },
      {
        question: r`A touch screen has a capacitor of capacitance C in series with one of capacitance 4C. What is the ratio of the voltage across C to the voltage across 4C?`,
        options: [r`4 to 1`, r`1 to 4`, r`1 to 1`, r`2 to 1`],
        correctAnswer: 0,
        explanation: r`Both hold the same charge Q, so the voltages are Q/C and Q/4C, a ratio of 4 to 1: the smaller capacitor takes the larger voltage. 1 to 4 gives the larger share to the larger capacitor, as series resistors would. 1 to 1 assumes equal shares, and 2 to 1 takes a square root that does not belong here.`,
      },
      {
        question: r`A 500 nF capacitor and a 2.0 μF capacitor are in series across a battery. Which one takes the larger voltage, and by what factor?`,
        options: [r`The 2.0 μF one, with 4 times the voltage`, r`The 2.0 μF one, with 250 times the voltage`, r`The 500 nF one, with 4 times the voltage`, r`The 500 nF one, with 250 times the voltage`],
        correctAnswer: 2,
        explanation: r`500 nF is 0.50 μF, the smaller capacitance, and with the same charge on both the smaller capacitor takes the larger voltage. The ratio is 2.0 ÷ 0.50 = 4. Choosing the 2.0 μF capacitor reverses the rule, and a factor of 250 divides 500 by 2.0 without converting nanofarads to microfarads.`,
      },
      {
        question: r`Three capacitors of 1.0 μF, 2.0 μF and 4.0 μF are in series in a voltage divider. The voltage across the 4.0 μF capacitor is 3.0 V. What is the voltage across the 1.0 μF capacitor?`,
        options: [r`12 V`, r`0.75 V`, r`3.0 V`, r`6.0 V`],
        correctAnswer: 0,
        explanation: r`All three hold the same charge: Q = 4.0 μF × 3.0 V = 12 μC, so the 1.0 μF capacitor has 12 μC ÷ 1.0 μF = 12 V. The smallest capacitor takes the largest voltage. 0.75 V inverts the ratio, 3.0 V assumes equal shares, and 6.0 V is the voltage across the 2.0 μF capacitor.`,
      },
      {
        question: r`A 1.0 μF and a 5.0 μF capacitor, each rated for at most 50 V, are in series across a supply whose voltage is slowly raised. Which capacitor reaches its 50 V rating first, and what is the voltage across the other at that moment?`,
        options: [r`The 5.0 μF one, while the 1.0 μF one is at 10 V`, r`The 1.0 μF one, while the 5.0 μF one is at 25 V`, r`Both at once, since they share the voltage equally`, r`The 1.0 μF one, while the 5.0 μF one is at 10 V`],
        correctAnswer: 3,
        explanation: r`With the same charge on both, the smaller capacitor always has the larger voltage, here 5 times the other's, so the 1.0 μF capacitor reaches 50 V while the 5.0 μF capacitor is at 50 ÷ 5 = 10 V. Naming the 5.0 μF capacitor reverses the rule. 25 V uses a factor of 2, and equal shares happen only for equal capacitors.`,
      },
    ],
  },
  [r`What is the shortcut for two capacitors in series?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A power adapter has a 40 μF capacitor in series with a 60 μF capacitor. What is the equivalent capacitance of the two?`,
        options: [r`100 μF`, r`50 μF`, r`24 μF`, r`0.042 μF`],
        correctAnswer: 2,
        explanation: r`Product over sum: 40 × 60 ÷ (40 + 60) = 2,400 ÷ 100 = 24 μF, below the smaller capacitor as a series result must be. 100 μF is the sum alone, the parallel result. 50 μF is the average, and 0.042 μF is 1/40 + 1/60 left unflipped.`,
      },
      {
        question: r`An engineer building a heart-rate monitor needs 10 μF between two points, but a 30 μF part is already soldered there. What value, wired in series with it, brings the pair down to 10 μF?`,
        options: [r`15 μF`, r`20 μF`, r`40 μF`, r`3.0 μF`],
        correctAnswer: 0,
        explanation: r`Call the unknown x: 30x ÷ (30 + x) = 10, so 30x = 300 + 10x and x = 15 μF. Check: 30 × 15 ÷ 45 = 10 μF. 20 μF subtracts 10 from 30 and 40 μF adds them, both direct-sum arithmetic that belongs to parallel capacitors. 3.0 μF divides 30 by 10.`,
      },
      {
        question: r`Two 50 pF capacitors are wired in series in a radio tuner. What single capacitance could replace the pair?`,
        options: [r`100 pF`, r`25 pF`, r`50 pF`, r`2,500 pF`],
        correctAnswer: 1,
        explanation: r`Product over sum: 50 × 50 ÷ (50 + 50) = 2,500 ÷ 100 = 25 pF, half of one capacitor. 100 pF is the sum alone, which is the parallel result. 50 pF assumes the pair is no different from one capacitor, and 2,500 pF is the product without dividing by the sum.`,
      },
      {
        question: r`A 0.20 μF capacitor is in series with a 300 nF capacitor in a microphone circuit. What is the equivalent capacitance of the pair?`,
        options: [r`500 nF`, r`250 nF`, r`0.20 nF`, r`120 nF`],
        correctAnswer: 3,
        explanation: r`0.20 μF is 200 nF. Product over sum: 200 × 300 ÷ 500 = 60,000 ÷ 500 = 120 nF. 500 nF is the sum, the parallel result, and 250 nF is the average. 0.20 nF comes from using 0.20 and 300 in the formula without converting units.`,
      },
      {
        question: r`A guitar pedal's tone control uses a single 9.0 μF part. A player solders an 18 μF part in series with it. Compared with the original 9.0 μF, what does the control's capacitance become?`,
        options: [r`It becomes one third as large`, r`It becomes two thirds as large`, r`It becomes 3 times as large`, r`It becomes one half as large`],
        correctAnswer: 1,
        explanation: r`Product over sum: 9.0 × 18 ÷ 27 = 6.0 μF, which is two thirds of 9.0 μF. One third is 9.0 ÷ 27, dividing by the sum without multiplying by 18. Three times as large is the parallel result, 27 μF, and one half would need an identical 9.0 μF partner.`,
      },
      {
        question: r`A 1.0 μF capacitor is wired in series with a much larger 99 μF capacitor. What is the equivalent capacitance of the pair?`,
        options: [r`100 μF`, r`50 μF`, r`0.99 μF`, r`1.01 μF`],
        correctAnswer: 2,
        explanation: r`Product over sum: 1.0 × 99 ÷ 100 = 0.99 μF, just under the smaller capacitor. 100 μF is the sum alone, the parallel result, and 50 μF is the average. 1.01 μF cannot be right, because a series pair is always smaller than its smallest capacitor.`,
      },
    ],
  },
  [r`What is the equivalent capacitance of $N$ identical capacitors?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flash unit wires eight identical 4.0 μF capacitors in parallel. What is their equivalent capacitance?`,
        options: [r`0.50 μF`, r`2.0 μF`, r`4.0 μF`, r`32 μF`],
        correctAnswer: 3,
        explanation: r`Identical capacitors in parallel give N times one capacitance: 8 × 4.0 μF = 32 μF. 0.50 μF divides 4.0 by 8, which is the series result. 2.0 μF divides 8 by 4.0, and 4.0 μF treats the bank as no bigger than one capacitor.`,
      },
      {
        question: r`To stand a high voltage, six identical 30 pF capacitors are stacked in series. What is the equivalent capacitance of the stack?`,
        options: [r`180 pF`, r`0.20 pF`, r`5.0 pF`, r`30 pF`],
        correctAnswer: 2,
        explanation: r`Identical capacitors in series give one capacitance divided by N: 30 pF ÷ 6 = 5.0 pF. 180 pF multiplies by 6, which is the parallel result. 0.20 pF divides 6 by 30, and 30 pF treats the stack as the same as one capacitor.`,
      },
      {
        question: r`A wind-turbine controller needs 20 μF at high voltage, built from identical 100 μF parts from a storeroom shelf, all wired in series. How many of them are needed?`,
        options: [r`5 capacitors`, r`80 capacitors`, r`120 capacitors`, r`2,000 capacitors`],
        correctAnswer: 0,
        explanation: r`In series the equivalent is C/N, so N = 100 μF ÷ 20 μF = 5. The answer 80 subtracts the two values and 120 adds them, neither of which is how identical capacitors combine. 2,000 multiplies them.`,
      },
      {
        question: r`Ten identical capacitors wired in parallel smooth a motor drive. Together they act as 4.7 mF. What is the capacitance of one of them?`,
        options: [r`47 μF`, r`470 μF`, r`47,000 μF`, r`0.47 μF`],
        correctAnswer: 1,
        explanation: r`In parallel the equivalent is N times one capacitance, so one capacitor is 4.7 mF ÷ 10 = 0.47 mF, which is 470 μF. 47,000 μF multiplies 4.7 mF by 10, the step for a series stack. 47 μF and 0.47 μF both slip a power of ten when converting millifarads to microfarads.`,
      },
      {
        question: r`A robotics team has three matching parts from one batch. Wiring all three in parallel gives one total capacitance; wiring all three in series gives another. What is the ratio of the parallel total to the series total?`,
        options: [r`3 to 1`, r`6 to 1`, r`9 to 1`, r`1 to 9`],
        correctAnswer: 2,
        explanation: r`In parallel the three give 3C, and in series C/3, so the ratio is 3C ÷ (C/3) = 9 to 1. A ratio of 3 to 1 compares the parallel bank with a single capacitor only. 6 to 1 adds the two factors of 3 instead of multiplying them, and 1 to 9 inverts the ratio.`,
      },
      {
        question: r`A touch pad is built from 20 identical insulating layers, which act as 20 identical capacitors in series. The whole stack has a capacitance of 0.30 nF. What is the capacitance of one layer?`,
        options: [r`6.0 nF`, r`0.015 nF`, r`0.30 nF`, r`67 nF`],
        correctAnswer: 0,
        explanation: r`In series the stack is C/N, so one layer is N times the stack: 20 × 0.30 nF = 6.0 nF. 0.015 nF divides by 20, the step for a parallel bank. 0.30 nF treats one layer as equal to the stack, and 67 nF divides 20 by 0.30.`,
      },
    ],
  },
  [r`What quick size check catches a wrong capacitor combination?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 10 μF and a 40 μF capacitor are to be combined. Before any calculation, what must be true of the series result and of the parallel result?`,
        options: [r`Series above 40 μF, parallel below 10 μF`, r`Series below 10 μF, parallel above 40 μF`, r`Series between 10 and 40 μF, parallel above 40 μF`, r`Series below 10 μF, parallel between 10 and 40 μF`],
        correctAnswer: 1,
        explanation: r`A series result is always smaller than the smallest capacitor, here 10 μF, and a parallel result is always larger than the largest, here 40 μF. The actual values, 8.0 μF and 50 μF, fit. The reversed option applies the resistor pattern, and no combination of two capacitors lands between the two values.`,
      },
      {
        question: r`Capacitors of 2.0 μF, 3.0 μF and 6.0 μF are all wired the same way, either all in series or all in parallel. A calculation gives 1.0 μF. What does the quick size check say about this result?`,
        options: [r`It fits a parallel group, which must come out below 2.0 μF`, r`It fits neither, since no result can come out below 2.0 μF`, r`It fits either, since both must come out below 6.0 μF`, r`It fits a series chain, which must come out below 2.0 μF`],
        correctAnswer: 3,
        explanation: r`A series result must be smaller than the smallest capacitor, and 1.0 μF is below 2.0 μF, so it is a believable series value. In fact 1/2 + 1/3 + 1/6 = 1, giving exactly 1.0 μF. A parallel group must come out above the largest capacitor, 6.0 μF, so 1.0 μF could never be a parallel result.`,
      },
    ],
  },
  [r`How do you find the charge a battery puts on a chain of series capacitors?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 4.0 μF and a 12 μF capacitor are joined in series, and the pair is connected to a 20 V supply in a lab. What charge ends up on the capacitors?`,
        options: [r`60 μC on each of them`, r`320 μC on each of them`, r`80 μC and then 240 μC`, r`160 μC on each of them`],
        correctAnswer: 0,
        explanation: r`The chain's equivalent capacitance is 4.0 × 12 ÷ 16 = 3.0 μF, so Q = 3.0 μF × 20 V = 60 μC, and each capacitor carries that same charge. 320 μC uses the sum, 16 μF, as if they were in parallel. 80 μC and 240 μC give each capacitor the full 20 V, and 160 μC uses the average capacitance, 8.0 μF.`,
      },
      {
        question: r`A 6.0 μF and a 12 μF capacitor in series are charged by a battery, and each ends up holding 36 μC. What is the battery's voltage?`,
        options: [r`2.0 V`, r`144 V`, r`9.0 V`, r`6.0 V`],
        correctAnswer: 2,
        explanation: r`The chain's equivalent capacitance is 6.0 × 12 ÷ 18 = 4.0 μF, so V = Q ÷ C_eq = 36 μC ÷ 4.0 μF = 9.0 V. 2.0 V divides by the sum, 18 μF, the parallel value. 144 V multiplies 36 by 4.0, and 6.0 V is the voltage across the 6.0 μF capacitor alone.`,
      },
      {
        question: r`Three identical 15 μF capacitors are wired in series across a 9.0 V battery in a toy. How much charge is on the middle capacitor?`,
        options: [r`135 μC`, r`405 μC`, r`15 μC`, r`45 μC`],
        correctAnswer: 3,
        explanation: r`Three identical capacitors in series give 15 ÷ 3 = 5.0 μF, so Q = 5.0 μF × 9.0 V = 45 μC, and every capacitor in the chain carries it. 135 μC puts the full 9.0 V on one 15 μF capacitor. 405 μC uses the parallel value, 45 μF, and 15 μC splits the chain's charge three ways.`,
      },
      {
        question: r`In an X-ray supply, a 300 pF and a 600 pF capacitor are in series across 1.5 kV. What charge is on the capacitors?`,
        options: [r`300 pC on each of them`, r`0.30 μC on each of them`, r`1.35 μC on each of them`, r`0.45 μC and then 0.90 μC`],
        correctAnswer: 1,
        explanation: r`The equivalent capacitance is 300 × 600 ÷ 900 = 200 pF, and 1.5 kV is 1,500 V, so Q = 200 pF × 1,500 V = 300,000 pC = 0.30 μC on each. 300 pC forgets the kilo in kilovolts. 1.35 μC uses the sum, 900 pF, and 0.45 μC with 0.90 μC gives each capacitor the full 1.5 kV.`,
      },
      {
        question: r`A chain of two capacitors in series takes 48 μC from a 12 V battery. One of the capacitors is 12 μF. What is the other?`,
        options: [r`4.0 μF`, r`8.0 μF`, r`16 μF`, r`6.0 μF`],
        correctAnswer: 3,
        explanation: r`The chain's equivalent capacitance is Q ÷ V = 48 μC ÷ 12 V = 4.0 μF. Then 1/C = 1/4.0 − 1/12 = 3/12 − 1/12 = 2/12, so C = 6.0 μF. 4.0 μF is the equivalent, not the second capacitor. 8.0 μF subtracts 4.0 from 12 and 16 μF adds them, as if series capacitances added directly.`,
      },
      {
        question: r`A 20 μF and a 5.0 μF capacitor in series hold 12 μC each when connected to a 3.0 V battery. The battery is replaced by a 9.0 V battery. What charge is on the capacitors now?`,
        options: [r`12 μC on each of them`, r`36 μC on each of them`, r`4.0 μC on each of them`, r`225 μC on each of them`],
        correctAnswer: 1,
        explanation: r`The equivalent capacitance, 20 × 5.0 ÷ 25 = 4.0 μF, is unchanged, so the charge scales with the voltage: 4.0 μF × 9.0 V = 36 μC, three times the original 12 μC. 12 μC ignores the new voltage and 4.0 μC divides by 3 instead of multiplying. 225 μC uses the sum, 25 μF, the parallel value.`,
      },
    ],
  },
  [r`How do you find the voltage across each capacitor in a series chain?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 4.0 μF capacitor and then a 5.0 μF capacitor are in series across a battery, and the chain's charge is 20 μC. In that order, what are the two voltages, and what is the battery's voltage?`,
        options: [r`4.0 V and 5.0 V, with a 9.0 V battery`, r`80 V and 100 V, with a 180 V battery`, r`5.0 V and 4.0 V, with a 9.0 V battery`, r`5.0 V and 4.0 V, with a 5.0 V battery`],
        correctAnswer: 2,
        explanation: r`Each voltage is the shared charge over that capacitance: 20 ÷ 4.0 = 5.0 V and 20 ÷ 5.0 = 4.0 V, and they add to the battery's 9.0 V. The reversed order gives the larger capacitor the larger voltage. 80 V and 100 V multiply Q by C, and a 5.0 V battery forgets that series voltages add.`,
      },
      {
        question: r`In a series chain, a voltmeter reads 6.0 V across a 4.0 μF capacitor. What is the chain's charge, and what is the voltage across the 8.0 μF capacitor next to it?`,
        options: [r`24 μC, and 12 V across the 8.0 μF`, r`24 μC, and 3.0 V across the 8.0 μF`, r`24 μC, and 6.0 V across the 8.0 μF`, r`48 μC, and 6.0 V across the 8.0 μF`],
        correctAnswer: 1,
        explanation: r`The 4.0 μF capacitor gives the shared charge: Q = 4.0 μF × 6.0 V = 24 μC. The 8.0 μF capacitor carries the same 24 μC, so its voltage is 24 ÷ 8.0 = 3.0 V. 12 V gives the larger capacitor the larger voltage. Putting 6.0 V on both treats the voltage as shared, which also leads to the 48 μC value.`,
      },
      {
        question: r`A series chain in a sensor carries 30 μC. A voltmeter reads 6.0 V across one of its capacitors. What is that capacitor's capacitance?`,
        options: [r`5.0 μF`, r`180 μF`, r`0.20 μF`, r`24 μF`],
        correctAnswer: 0,
        explanation: r`Rearranging V = Q/C gives C = Q/V = 30 μC ÷ 6.0 V = 5.0 μF. 180 μF multiplies the charge by the voltage. 0.20 μF divides the voltage by the charge, and 24 μF subtracts 6.0 from 30.`,
      },
      {
        question: r`A series chain in a touch sensor carries 6.0 nC. One capacitor in the chain is 200 pF. What is the voltage across that capacitor?`,
        options: [r`0.030 V`, r`1.2 V`, r`33 V`, r`30 V`],
        correctAnswer: 3,
        explanation: r`6.0 nC is 6,000 pC, so V = Q/C = 6,000 pC ÷ 200 pF = 30 V. 0.030 V divides 6.0 by 200 without converting nanocoulombs to picocoulombs. 1.2 V multiplies 6.0 by 0.20, and 33 V divides the capacitance by the charge, 200 ÷ 6.0.`,
      },
      {
        question: r`A 12 V battery charges a series chain of three capacitors to 12 μC. The first is 2.0 μF and the second is 3.0 μF. What is the voltage across the third capacitor, and what is its capacitance?`,
        options: [r`2.0 V, so it is 6.0 μF`, r`2.0 V, so it is 24 μF`, r`10 V, so it is 1.2 μF`, r`4.0 V, so it is 3.0 μF`],
        correctAnswer: 0,
        explanation: r`The first two voltages are 12 ÷ 2.0 = 6.0 V and 12 ÷ 3.0 = 4.0 V. The three must add to 12 V, leaving 2.0 V, so the third is 12 μC ÷ 2.0 V = 6.0 μF. 24 μF multiplies 12 by 2.0. 10 V subtracts the 2.0 of the first capacitance from 12 as if it were a voltage, and 4.0 V shares the battery equally among three.`,
      },
      {
        question: r`A 9.0 μF capacitor in a series chain carrying 18 μC has 2.0 V across it. It is swapped for a 3.0 μF capacitor, and the supply is adjusted until the chain again carries 18 μC. What is the voltage across the new capacitor?`,
        options: [r`0.67 V`, r`2.0 V`, r`6.0 V`, r`54 V`],
        correctAnswer: 2,
        explanation: r`With the same charge, V = Q/C = 18 μC ÷ 3.0 μF = 6.0 V: one third of the capacitance takes three times the voltage. 0.67 V divides the old voltage by 3 instead of multiplying. 2.0 V assumes nothing changes, and 54 V multiplies the charge by the capacitance.`,
      },
    ],
  },
  [r`How do you collapse a series-parallel capacitor network?`]: {
    kind: 'calc',
    more: [
      {
        question: r`Two 6.0 μF capacitors are wired in parallel, and that pair is wired in series with a third 6.0 μF capacitor. What is the equivalent capacitance of the network?`,
        options: [r`18 μF`, r`4.0 μF`, r`9.0 μF`, r`2.0 μF`],
        correctAnswer: 1,
        explanation: r`Add the parallel pair first: 6.0 + 6.0 = 12 μF. Then combine in series with the third: 12 × 6.0 ÷ 18 = 4.0 μF. 18 μF adds all three as if all were in parallel, and 2.0 μF treats all three as in series. 9.0 μF collapses the wrong network, a series pair in parallel with the third.`,
      },
      {
        question: r`A 12 μF and a 6.0 μF capacitor are wired in series, and that chain is wired in parallel with a 5.0 μF capacitor. What is the equivalent capacitance of the network?`,
        options: [r`23 μF`, r`3.9 μF`, r`2.2 μF`, r`9.0 μF`],
        correctAnswer: 3,
        explanation: r`Here the inner piece is the series chain: 12 × 6.0 ÷ 18 = 4.0 μF. It is in parallel with 5.0 μF, so the total is 4.0 + 5.0 = 9.0 μF. 23 μF adds all three directly. 3.9 μF adds 12 and 6.0 first and puts 18 μF in series with 5.0 μF, and 2.2 μF treats all three as one series chain.`,
      },
      {
        question: r`In a strobe light, a 10 μF and a 20 μF part are wired in parallel, and a 15 μF part is wired in series with that group. A 6.0 V cell powers the whole arrangement. How much charge leaves the cell while the parts fill?`,
        options: [r`270 μC`, r`180 μC`, r`60 μC`, r`90 μC`],
        correctAnswer: 2,
        explanation: r`The parallel pair is 10 + 20 = 30 μF. In series with 15 μF it gives 30 × 15 ÷ 45 = 10 μF, so Q = 10 μF × 6.0 V = 60 μC. 270 μC adds all three to 45 μF. 180 μC and 90 μC put the full 6.0 V across the 30 μF group or the 15 μF capacitor alone.`,
      },
      {
        question: r`A 5.0 μF capacitor is in parallel with an unknown capacitor, and that pair is in series with a 30 μF capacitor. The whole network has an equivalent capacitance of 15 μF. What is the unknown capacitor?`,
        options: [r`25 μF`, r`30 μF`, r`10 μF`, r`45 μF`],
        correctAnswer: 0,
        explanation: r`Two equal capacitances in series give half of one, so for 30 μF in series with the pair to give 15 μF, the pair must be 30 μF. The pair adds, so the unknown is 30 − 5.0 = 25 μF. 30 μF is the pair's value, not the unknown. 10 μF subtracts 5.0 from 15, and 45 μF adds 30 and 15.`,
      },
      {
        question: r`A 10 μF and a 14 μF capacitor form one parallel group. A 3.0 μF and a 5.0 μF capacitor form a second parallel group. The two groups are wired in series. What is the equivalent capacitance?`,
        options: [r`32 μF`, r`7.7 μF`, r`16 μF`, r`6.0 μF`],
        correctAnswer: 3,
        explanation: r`Collapse each parallel group first: 10 + 14 = 24 μF and 3.0 + 5.0 = 8.0 μF. Then in series: 24 × 8.0 ÷ 32 = 6.0 μF. 32 μF adds all four directly. 16 μF averages the two groups, and 7.7 μF uses product over sum inside each group and then adds, the rules in the wrong places.`,
      },
      {
        question: r`A loudspeaker crossover filter uses three matching 30 nF parts: two in parallel, with the remaining one in series with that pair. What single capacitance could replace the filter's three parts?`,
        options: [r`90 nF`, r`20 nF`, r`45 nF`, r`10 nF`],
        correctAnswer: 1,
        explanation: r`The parallel pair is 30 + 30 = 60 nF. In series with the third: 60 × 30 ÷ 90 = 20 nF. 90 nF adds all three, and 10 nF treats all three as in series. 45 nF collapses a different network, two in series placed in parallel with the third.`,
      },
    ],
  },
  [r`A parallel group sits inside a series chain. How do you find the group's voltage and each capacitor's charge?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A series chain carries a charge of 48 μC. One stage of the chain is a 3.0 μF capacitor in parallel with a 9.0 μF capacitor. What is the voltage across that stage, and how much charge does the 3.0 μF capacitor hold?`,
        options: [r`4.0 V, and it holds 12 μC`, r`4.0 V, and it holds 48 μC`, r`16 V, and it holds 48 μC`, r`4.0 V, and it holds 24 μC`],
        correctAnswer: 0,
        explanation: r`The group's capacitance is 3.0 + 9.0 = 12 μF, so its voltage is 48 μC ÷ 12 μF = 4.0 V, and the 3.0 μF capacitor holds 3.0 μF × 4.0 V = 12 μC. Giving it 48 μC, with either voltage, treats it as a lone series capacitor. 24 μC splits the charge equally instead of in proportion to capacitance.`,
      },
      {
        question: r`A chain in a pulse generator carries 100 μC. One stage is a 4.0 μF capacitor in parallel with a 16 μF capacitor. How much of the charge sits on the 16 μF capacitor?`,
        options: [r`20 μC`, r`50 μC`, r`80 μC`, r`100 μC`],
        correctAnswer: 2,
        explanation: r`The group is 4.0 + 16 = 20 μF, so its voltage is 100 μC ÷ 20 μF = 5.0 V, and the 16 μF capacitor holds 16 μF × 5.0 V = 80 μC. 20 μC is the 4.0 μF capacitor's share. 50 μC splits the charge equally, and 100 μC gives one capacitor the whole chain's charge.`,
      },
      {
        question: r`One stage of a series chain is a 2.0 μF capacitor in parallel with a 6.0 μF capacitor. The 2.0 μF capacitor holds 10 μC. What is the charge carried by the chain?`,
        options: [r`10 μC`, r`40 μC`, r`20 μC`, r`30 μC`],
        correctAnswer: 1,
        explanation: r`The group's voltage is 10 μC ÷ 2.0 μF = 5.0 V, so the 6.0 μF capacitor holds 6.0 × 5.0 = 30 μC, and the chain's charge is the group's total, 10 + 30 = 40 μC. 10 μC treats the 2.0 μF capacitor as carrying the whole chain's charge. 20 μC assumes equal shares, and 30 μC is the other capacitor's charge alone.`,
      },
      {
        question: r`A chain in a defibrillator trainer carries 0.90 mC. One stage is a 100 μF capacitor in parallel with a 200 μF capacitor. What is the voltage across that stage?`,
        options: [r`0.0030 V`, r`9.0 V`, r`13.5 V`, r`3.0 V`],
        correctAnswer: 3,
        explanation: r`0.90 mC is 900 μC, and the group's capacitance is 100 + 200 = 300 μF, so V = 900 μC ÷ 300 μF = 3.0 V. 0.0030 V divides 0.90 by 300 without converting millicoulombs. 9.0 V uses only the 100 μF capacitor, and 13.5 V combines the two by product over sum as if they were in series.`,
      },
      {
        question: r`A series chain carries 45 μC. One stage is a group of three identical 5.0 μF capacitors in parallel. What is the voltage across the group, and how much charge is on each of its capacitors?`,
        options: [r`9.0 V, with 45 μC on each`, r`3.0 V, with 45 μC on each`, r`3.0 V, with 15 μC on each`, r`27 V, with 45 μC on each`],
        correctAnswer: 2,
        explanation: r`The group's capacitance is 3 × 5.0 = 15 μF, so its voltage is 45 μC ÷ 15 μF = 3.0 V, and each capacitor holds 5.0 μF × 3.0 V = 15 μC. The three charges add back to 45 μC. Options with 45 μC on each give every capacitor the whole chain's charge, and 27 V also combines the group as a series stack.`,
      },
      {
        question: r`A chain carrying 60 μC passes through a stage made of a 4.0 μF capacitor in parallel with an unknown capacitor. The voltage across the stage is 6.0 V. What is the unknown capacitance, and how much charge does it hold?`,
        options: [r`6.0 μF, holding 36 μC`, r`10 μF, holding 60 μC`, r`6.0 μF, holding 60 μC`, r`14 μF, holding 84 μC`],
        correctAnswer: 0,
        explanation: r`The group's capacitance is 60 μC ÷ 6.0 V = 10 μF, so the unknown is 10 − 4.0 = 6.0 μF and it holds 6.0 μF × 6.0 V = 36 μC. The 4.0 μF capacitor holds the other 24 μC. 10 μF with 60 μC is the whole group, not the unknown, and 14 μF adds 4.0 instead of subtracting it.`,
      },
    ],
  },
  [r`What is the common trap when splitting a battery's voltage between unequal series capacitors?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 4.0 μF capacitor and then a 12 μF capacitor are in series across a 16 V supply. Which working correctly gives the voltages on the 4.0 μF and the 12 μF, in that order?`,
        options: [r`16 V ÷ 2 = 8.0 V on each, since they are in series`, r`Q = 16 μF × 16 V = 256 μC, then 64 V and 21 V`, r`Q = 3.0 μF × 16 V = 48 μC, then 4.0 V and 12 V`, r`Q = 3.0 μF × 16 V = 48 μC, then 12 V and 4.0 V`],
        correctAnswer: 3,
        explanation: r`Find the shared charge first: the pair is 4.0 × 12 ÷ 16 = 3.0 μF, so Q = 48 μC, and then V = Q/C gives 48 ÷ 4.0 = 12 V and 48 ÷ 12 = 4.0 V. Equal shares of 8.0 V are right only for equal capacitors. Using 16 μF applies the parallel sum, and the reversed order gives the larger capacitor the larger voltage.`,
      },
      {
        question: r`A student always gives each of two series capacitors half of the battery's voltage. For which pair, in series across a 10 V battery, would 5.0 V on each be correct?`,
        options: [r`A 5.0 μF and a 10 μF capacitor`, r`A 7.0 μF and a 7.0 μF capacitor`, r`A 2.0 μF and an 8.0 μF capacitor`, r`A 5.0 μF and a 5.0 nF capacitor`],
        correctAnswer: 1,
        explanation: r`Series capacitors hold the same charge, so V = Q/C is the same for both only when the capacitances are equal, as with the two 7.0 μF capacitors. Every other pair is unequal, so the smaller capacitor takes more than half. The 5.0 μF and 5.0 nF pair share a number but differ by a factor of 1,000.`,
      },
    ],
  },
  [r`What two checks confirm a capacitor network answer?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 12 V battery drives three capacitor stages in series. A student's solution lists 5.0 V, 4.0 V and 4.0 V across the three stages. What does a check of the answer show?`,
        options: [r`Wrong: the three voltages add to 13 V, not to 12 V`, r`Wrong: the three voltages should all be equal at 4.0 V`, r`Fine: series voltages do not need to add up to 12 V`, r`Fine: only the charges, not voltages, must add up`],
        correctAnswer: 0,
        explanation: r`Voltages along a series chain must add up to the battery's voltage, and 5.0 + 4.0 + 4.0 = 13 V, not 12 V, so there is an error somewhere. Equal voltages are required only for identical stages. The voltage check applies to every series chain, alongside the charge check for parallel groups.`,
      },
      {
        question: r`A series chain carries 40 μC. One stage is a parallel group of two capacitors, and a solution says one of them holds 25 μC. For the answer to pass its check, what must the other capacitor in the group hold?`,
        options: [r`40 μC, since each part carries the chain's charge`, r`25 μC, since a parallel pair shares charge equally`, r`15 μC, since the group's charges add to 40 μC`, r`65 μC, since it holds the chain's charge plus 25 μC`],
        correctAnswer: 2,
        explanation: r`The charges inside a parallel group must add up to the group's total, which is the chain's 40 μC, so the other capacitor holds 40 − 25 = 15 μC. Only a whole stage carries the full 40 μC, not each capacitor inside a group. Equal sharing needs equal capacitors, and 65 μC adds where the check subtracts.`,
      },
    ],
  },
  [r`What symbol stands for the time constant, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A circuit has a 2.0 kΩ resistor and a 2.0 μF capacitor, and a student works out the product RC as 4.0 × 10⁻³ in SI units. Which entry reports this quantity correctly?`,
        options: [r`τ = 4.0 mΩ`, r`τ = 4.0 μF`, r`τ = 4.0 ms`, r`τ = 4.0 mA`],
        correctAnswer: 2,
        explanation: r`The product RC is the time constant τ, and ohms times farads gives seconds, so 4.0 × 10⁻³ s is 4.0 ms. The milliohm is a unit of resistance, the microfarad of capacitance and the milliampere of current, so none of those can label a time.`,
      },
      {
        question: r`A student plots a charging capacitor's voltage against time and wants to mark one time constant, τ, on the graph. Where does τ belong, and in what unit?`,
        options: [r`On the horizontal time axis, in seconds`, r`On the vertical voltage axis, in volts`, r`On the slope of the curve, in volts per second`, r`On the area under the curve, in volt-seconds`],
        correctAnswer: 0,
        explanation: r`The time constant is a time, measured in seconds, so it is marked as an interval along the time axis. It is not a voltage, so it cannot sit on the vertical axis in volts. A slope in volts per second and an area in volt-seconds are different quantities with different units.`,
      },
    ],
  },
  [r`How does an uncharged capacitor behave at the instant a switch closes?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An uncharged capacitor is wired directly in parallel with a 5.0 Ω resistor, and that pair is in series with a 10 Ω resistor, a switch and a 20 V battery. At the instant the switch closes, what is the voltage across the 5.0 Ω resistor?`,
        options: [r`6.7 V, since the capacitor acts as an open gap`, r`0 V, since the capacitor beside it acts as a wire`, r`20 V, since the capacitor beside it acts as a wire`, r`10 V, since the two resistors share it equally`],
        correctAnswer: 1,
        explanation: r`The uncharged capacitor has V = Q/C = 0, so it behaves like a wire, and the 5.0 Ω resistor in parallel with it has the same 0 V. All 20 V is across the 10 Ω resistor at that instant. 6.7 V treats the capacitor as an open gap, which is its behavior once full, and equal sharing ignores both the capacitor and the unequal resistances.`,
      },
      {
        question: r`In the first instant after a switch closes, an uncharged capacitor can be replaced by a wire when finding currents. Why is that allowed?`,
        options: [r`Its capacitance is zero, so V = Q/C gives no voltage across it`, r`Its resistance is zero, so it keeps conducting from then on`, r`Its charge is zero, so it blocks current until charge arrives`, r`Its charge is zero, so V = Q/C gives no voltage across it`],
        correctAnswer: 3,
        explanation: r`With no charge on its plates, the capacitor's voltage Q/C is zero, and a component with zero voltage across it does not oppose the battery, just like a wire. Its capacitance is not zero. The wire picture holds only at the first instant, since the voltage grows as charge arrives, and an empty capacitor passes the largest current rather than blocking it.`,
      },
    ],
  },
  [r`What is the current at the first instant in a series RC charging circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 V battery, a switch, a 400 Ω resistor and an uncharged 50 μF capacitor form one loop. What is the current just after the switch closes?`,
        options: [r`0 mA`, r`0.60 mA`, r`4,800 mA`, r`30 mA`],
        correctAnswer: 3,
        explanation: r`The empty capacitor acts like a wire, so the full EMF is across the resistor: I₀ = 12 V ÷ 400 Ω = 0.030 A = 30 mA. Zero is the current once the capacitor is full, not at the start. 0.60 mA multiplies 12 V by 50 μF, which is a charge, and 4,800 multiplies the voltage by the resistance.`,
      },
      {
        question: r`A camera flash charges its empty capacitor from a 300 V source through a resistor. The current at the first instant must be 0.15 A. What resistance is needed?`,
        options: [r`2.0 kΩ`, r`45 Ω`, r`0.50 mΩ`, r`200 Ω`],
        correctAnswer: 0,
        explanation: r`At the first instant I₀ = ε/R, so R = ε/I₀ = 300 V ÷ 0.15 A = 2,000 Ω = 2.0 kΩ. 45 Ω multiplies the voltage by the current. 0.50 mΩ divides the current by the voltage, and 200 Ω slips a power of ten in the division.`,
      },
      {
        question: r`In a lab, an empty capacitor is charged through a 3.6 kΩ resistor, and the current at the first instant is 2.5 mA. What is the EMF of the battery?`,
        options: [r`9,000 V`, r`1.4 V`, r`9.0 V`, r`0.69 V`],
        correctAnswer: 2,
        explanation: r`At the first instant ε = I₀R = 2.5 × 10⁻³ A × 3.6 × 10³ Ω = 9.0 V. 9,000 V multiplies 2.5 by 3,600 without converting milliamperes. 1.4 V divides 3.6 by 2.5, and 0.69 V divides 2.5 by 3.6.`,
      },
      {
        question: r`A series RC charging circuit is rebuilt with twice the resistance and twice the capacitance, on the same battery. How does the current at the first instant change?`,
        options: [r`It becomes one quarter as large`, r`It becomes one half as large`, r`It becomes twice as large`, r`It stays exactly the same size`],
        correctAnswer: 1,
        explanation: r`The first-instant current is ε/R and does not depend on the capacitance, because the empty capacitor acts like a wire. Doubling R halves it. One quarter wrongly lets the doubled capacitance halve it again, twice as large inverts the dependence on R, and no change would need the capacitance to cancel the resistance.`,
      },
      {
        question: r`A 12 V battery, a 1.0 kΩ resistor, a 5.0 kΩ resistor, a switch and an uncharged capacitor are all in one series loop. What is the current just after the switch closes?`,
        options: [r`2.0 mA`, r`12 mA`, r`2.4 mA`, r`14.4 mA`],
        correctAnswer: 0,
        explanation: r`The empty capacitor acts like a wire, so the battery sees the two resistors in series: I₀ = 12 V ÷ 6.0 kΩ = 2.0 mA. 12 mA uses only the 1.0 kΩ resistor and 2.4 mA only the 5.0 kΩ one. 14.4 mA combines the resistors as if they were in parallel.`,
      },
      {
        question: r`A 24 V battery charges an empty capacitor through an 8.0 Ω resistor. A meter logs the current at one moment some time after the switch closes. Which reading is possible?`,
        options: [r`3.5 A`, r`6.0 A`, r`2.0 A`, r`192 A`],
        correctAnswer: 2,
        explanation: r`The largest current the loop ever carries is the first-instant value, I₀ = 24 V ÷ 8.0 Ω = 3.0 A, and the current only falls after that, so 2.0 A is possible. Readings of 3.5 A and 6.0 A are above the 3.0 A maximum. 192 A multiplies the voltage by the resistance.`,
      },
    ],
  },
  [r`How does a fully charged capacitor behave in a DC circuit at steady state?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 10 V ideal battery is in series with a 2.0 Ω resistor and a 3.0 Ω resistor. A capacitor is connected across the 3.0 Ω resistor. Long after the circuit is completed, what is the voltage across the capacitor?`,
        options: [r`10 V`, r`6.0 V`, r`0 V`, r`4.0 V`],
        correctAnswer: 1,
        explanation: r`At steady state the full capacitor carries no current, so the loop is just the two resistors: I = 10 V ÷ 5.0 Ω = 2.0 A. The capacitor's voltage equals that between the points it connects, the ends of the 3.0 Ω resistor: 2.0 A × 3.0 Ω = 6.0 V. 4.0 V is across the 2.0 Ω resistor, 10 V ignores the resistor drop, and 0 V treats the capacitor as a wire.`,
      },
      {
        question: r`Bulb 1 is in series with a battery. After bulb 1 the circuit splits into two parallel branches: one holds bulb 2 alone, and the other holds bulb 3 in series with a capacitor. Long after the battery is connected, which bulbs are lit?`,
        options: [r`Bulbs 1 and 3 only`, r`All three bulbs`, r`None of the bulbs`, r`Bulbs 1 and 2 only`],
        correctAnswer: 3,
        explanation: r`A fully charged capacitor acts like a break in its branch, so no current flows through bulb 3. Current still flows through bulb 1 and the branch with bulb 2, so those two stay lit. All three would be lit only if the capacitor kept passing current, and none would be lit only if the break were in the main line.`,
      },
    ],
  },
  [r`At steady state, what is the voltage across a resistor in series with a full capacitor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A 30 V ideal battery drives a 5.0 Ω and a 10 Ω resistor in series, so the 10 Ω resistor has 20 V across it and carries 2.0 A. A side branch across the 10 Ω resistor holds a 4.0 Ω resistor in series with a capacitor. At steady state, what is the capacitor's voltage?`,
        options: [r`20 V, since the 4.0 Ω resistor carries no current`, r`12 V, since the 4.0 Ω resistor drops 8.0 V of it`, r`30 V, since the 4.0 Ω resistor carries no current`, r`0 V, since the 4.0 Ω resistor takes all of the 20 V`],
        correctAnswer: 0,
        explanation: r`No current flows in the branch with the full capacitor, so the 4.0 Ω resistor has V = IR = 0 and the capacitor takes the whole 20 V between the branch's ends. 12 V subtracts a drop of 2.0 A × 4.0 Ω, but that 2.0 A flows in the 10 Ω resistor, not in the side branch. 30 V ignores the drop across the 5.0 Ω resistor.`,
      },
      {
        question: r`A 10 V battery, a 50 Ω resistor and a capacitor form one series loop. Long after the loop is completed, how much power does the resistor dissipate?`,
        options: [r`2.0 W, since all 10 V sits across it`, r`0.50 W, since 5.0 V sits across it`, r`0 W, since no current flows through it`, r`0.20 W, since 0.20 A flows through it`],
        correctAnswer: 2,
        explanation: r`Once the capacitor is full no current flows, so the resistor has V = IR = 0 across it and dissipates no power. All 10 V is across the capacitor. The 2.0 W and 0.20 A values put the full 10 V across the resistor, which is true only at the first instant, and 0.50 W shares the voltage equally between the two parts.`,
      },
    ],
  },
  [r`In an RC circuit, which quantity cannot jump when a switch moves?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A data logger records a capacitor's voltage and current while switches are opened and closed in a circuit that contains resistors. Which feature could never appear in the record?`,
        options: [r`A smooth curve in its voltage-time graph`, r`A vertical step in its current-time graph`, r`A smooth curve in its current-time graph`, r`A vertical step in its voltage-time graph`],
        correctAnswer: 3,
        explanation: r`The capacitor's voltage is Q/C, and charge needs time to flow through the resistors onto or off the plates, so the voltage can only change smoothly: no vertical steps. The current can step in an instant when a switch moves. Smooth curves in either graph are what charging and discharging normally look like.`,
      },
      {
        question: r`A capacitor has been sitting at 5.0 V with no current. At t = 0 a switch connects it, through a 7.0 Ω resistor, to a 12 V battery that will charge it further. Just after t = 0, what are the capacitor's voltage and the current?`,
        options: [r`Already 12 V, with a current of 0 A`, r`Still 5.0 V, with a current of 1.0 A`, r`Still 5.0 V, with a current of 0 A`, r`Already 12 V, with a current of 1.7 A`],
        correctAnswer: 1,
        explanation: r`The capacitor's voltage cannot jump, so it is still 5.0 V. The resistor then has 12 − 5.0 = 7.0 V across it, and the current jumps from zero to 7.0 V ÷ 7.0 Ω = 1.0 A. A voltage already at 12 V would need charge to arrive in no time, and a current still at 0 A forgets that the current can change in an instant.`,
      },
    ],
  },
  [r`What is the time constant of an RC circuit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sensor circuit charges a 5.0 nF capacitor through a 2.0 MΩ resistor. What is its time constant?`,
        options: [r`10 s`, r`10 μs`, r`10 ms`, r`2.5 ms`],
        correctAnswer: 2,
        explanation: r`τ = RC = 2.0 × 10⁶ Ω × 5.0 × 10⁻⁹ F = 1.0 × 10⁻² s = 10 ms. 10 s multiplies 2.0 by 5.0 and drops both prefixes. 10 μs loses a factor of 1,000 in the powers of ten, and 2.5 ms divides 5.0 by 2.0 instead of multiplying.`,
      },
      {
        question: r`A timer needs a time constant of 3.0 s and uses a 150 μF capacitor. What resistance should the capacitor charge through?`,
        options: [r`450 Ω`, r`20 kΩ`, r`50 Ω`, r`0.020 Ω`],
        correctAnswer: 1,
        explanation: r`R = τ/C = 3.0 s ÷ 1.5 × 10⁻⁴ F = 2.0 × 10⁴ Ω = 20 kΩ. 450 Ω multiplies 3.0 by 150. 50 Ω divides 150 by 3.0, and 0.020 Ω divides 3.0 by 150 without converting microfarads to farads.`,
      },
      {
        question: r`A pacemaker's output stage discharges a capacitor through 400 Ω of tissue with a time constant of 0.80 ms. What is the capacitance?`,
        options: [r`2.0 mF`, r`0.32 F`, r`500 μF`, r`2.0 μF`],
        correctAnswer: 3,
        explanation: r`C = τ/R = 8.0 × 10⁻⁴ s ÷ 400 Ω = 2.0 × 10⁻⁶ F = 2.0 μF. 2.0 mF divides 0.80 by 400 and forgets that the time is in milliseconds. 0.32 F multiplies the time by the resistance, and 500 μF divides 400 by 0.80.`,
      },
      {
        question: r`In an RC circuit, the resistance is tripled and the capacitance is halved. How does the time constant change?`,
        options: [r`It becomes 1.5 times as long`, r`It becomes 6.0 times as long`, r`It becomes two thirds as long`, r`It becomes one sixth as long`],
        correctAnswer: 0,
        explanation: r`τ = RC, so the new value is 3 × ½ = 1.5 times the old one. A factor of 6.0 multiplies by 2 instead of by one half. Two thirds inverts the ratio, and one sixth divides by both factors.`,
      },
      {
        question: r`A 250 μF capacitor discharges through two 1.0 kΩ resistors connected in series. What is the time constant of the discharge?`,
        options: [r`0.25 s`, r`0.50 s`, r`0.125 s`, r`500 s`],
        correctAnswer: 1,
        explanation: r`The capacitor discharges through the series total, 2.0 kΩ, so τ = RC = 2.0 × 10³ Ω × 2.5 × 10⁻⁴ F = 0.50 s. 0.25 s uses only one resistor. 0.125 s combines the resistors as if in parallel, and 500 s multiplies 2.0 by 250 without the powers of ten.`,
      },
      {
        question: r`An ECG electrode on dry skin behaves like a 50 kΩ resistance with a 0.040 μF capacitance. What is the time constant of this contact?`,
        options: [r`2.0 s`, r`2,000 s`, r`2.0 μs`, r`2.0 ms`],
        correctAnswer: 3,
        explanation: r`τ = RC = 5.0 × 10⁴ Ω × 4.0 × 10⁻⁸ F = 2.0 × 10⁻³ s = 2.0 ms. 2.0 s multiplies 50 by 0.040 and ignores both prefixes. 2,000 s converts the kilohms but not the microfarads, and 2.0 μs converts the microfarads but not the kilohms.`,
      },
    ],
  },
  [r`Why does a charging capacitor fill more and more slowly?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A battery of EMF ε charges a capacitor through a resistor R. As the capacitor's voltage rises, what happens to the voltage across the resistor and to the current?`,
        options: [r`Both fall, since less of the EMF is left for the resistor`, r`Both rise, since the capacitor adds to the battery's push`, r`The voltage falls, but the current stays fixed at ε/R`, r`The voltage stays at ε, while the current falls to zero`],
        correctAnswer: 0,
        explanation: r`Around the loop the EMF equals the capacitor's voltage plus the resistor's, so as the capacitor's voltage grows, the resistor's share shrinks, and the current, which is that share divided by R, shrinks with it. The capacitor opposes the battery rather than adding to it. The resistor's voltage and current always change together, since V = IR.`,
      },
      {
        question: r`A 12 V battery charges a capacitor through a 3.0 Ω resistor. What is the current when the capacitor's voltage is 3.0 V, and then later when it is 9.0 V?`,
        options: [r`1.0 A, then 3.0 A`, r`4.0 A, then 4.0 A`, r`3.0 A, then 1.0 A`, r`5.0 A, then 7.0 A`],
        correctAnswer: 2,
        explanation: r`The resistor gets what the capacitor leaves: 12 − 3.0 = 9.0 V at first, so 9.0 ÷ 3.0 = 3.0 A, and later 12 − 9.0 = 3.0 V, so 1.0 A. The current falls as the capacitor fills. The reversed order divides the capacitor's own voltage by R, 4.0 A twice ignores the capacitor, and 5.0 A then 7.0 A adds its voltage to the battery's.`,
      },
    ],
  },
}
