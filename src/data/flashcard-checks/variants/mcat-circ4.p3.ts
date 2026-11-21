import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ4`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`After a step of input current, when is a membrane's voltage change 63% complete, and when is it essentially complete?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A neuron's membrane time constant is 20 ms. A steady step of current is switched on. About how long does the membrane voltage take to finish essentially all (over 99%) of its change?`,
        options: [r`About 20 ms`, r`About 100 ms`, r`About 40 ms`, r`About 13 ms`],
        correctAnswer: 1,
        explanation: r`Essentially complete means about five time constants: 5 × 20 ms = 100 ms. At 20 ms, one time constant, the change is only about 63% done. 40 ms is two time constants, and 13 ms comes from multiplying 20 ms by 0.63.`,
      },
      {
        question: r`In a recording, a cell's voltage response to a current step is essentially complete (over 99%) about 60 ms after the step begins. About what is the membrane time constant?`,
        options: [r`About 12 ms`, r`About 38 ms`, r`About 60 ms`, r`About 300 ms`],
        correctAnswer: 0,
        explanation: r`Essentially complete takes about five time constants, so τ ≈ 60 ms ÷ 5 = 12 ms. Answering 60 ms treats completion as one time constant, 300 ms multiplies by five instead of dividing, and 38 ms is 63% of 60 ms.`,
      },
      {
        question: r`A current step will finally depolarize a muscle cell's membrane by 20 mV. The membrane time constant is 5 ms. About how large is the voltage shift 5 ms after the step begins?`,
        options: [r`About 20 mV`, r`About 13 mV`, r`About 7.4 mV`, r`About 4.0 mV`],
        correctAnswer: 1,
        explanation: r`5 ms is one time constant, so the change is about 63% complete: 0.63 × 20 mV ≈ 13 mV. 7.4 mV is the 37% still to come, 20 mV is the final value reached only after about five time constants, and 4.0 mV is just 20 divided by 5.`,
      },
      {
        question: r`A current step shifts a cell's membrane voltage by 8.0 mV in the end. The trace reaches 5.0 mV, about 63% of that, 15 ms after the step begins. What are the time constant and the time for the change to be essentially complete?`,
        options: [r`τ ≈ 3 ms; complete near 15 ms`, r`τ ≈ 24 ms; complete near 120 ms`, r`τ ≈ 15 ms; complete near 30 ms`, r`τ ≈ 15 ms; complete near 75 ms`],
        correctAnswer: 3,
        explanation: r`The change is 63% complete after one time constant, so τ ≈ 15 ms, and it is essentially complete after about 5τ = 75 ms. Completion near 30 ms uses only two time constants, τ ≈ 24 ms divides 15 ms by 0.63, and τ ≈ 3 ms treats 15 ms as the completion time.`,
      },
      {
        question: r`A drug that closes leak channels raises a neuron's membrane time constant from 10 ms to 20 ms. How does the time for a step response to be essentially complete change?`,
        options: [r`From about 10 ms to about 20 ms`, r`From about 6 ms to about 13 ms`, r`From about 50 ms to about 100 ms`, r`From about 50 ms to about 25 ms`],
        correctAnswer: 2,
        explanation: r`Essentially complete takes about five time constants: 5 × 10 ms = 50 ms before and 5 × 20 ms = 100 ms after. 10 ms and 20 ms are single time constants, where the change is only 63% done. A fall to 25 ms inverts the effect, and 6 ms to 13 ms multiplies each τ by 0.63.`,
      },
      {
        question: r`A cell's membrane time constant is 2.0 × 10⁻³ s. After a current step begins, at what times, in milliseconds, is the voltage change about 63% complete and essentially complete?`,
        options: [r`1.3 ms and 2.0 ms`, r`0.20 ms and 1.0 ms`, r`2.0 ms and 4.0 ms`, r`2.0 ms and 10 ms`],
        correctAnswer: 3,
        explanation: r`2.0 × 10⁻³ s is 2.0 ms. The change is 63% complete after one τ, 2.0 ms, and essentially complete after about 5τ = 10 ms. 1.3 ms and 2.0 ms treats one τ as completion, 4.0 ms is only two τ, and 0.20 ms and 1.0 ms come from a power-of-ten slip in the conversion.`,
      },
    ],
  },
  [r`What must you convert before finding the field inside a membrane?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The lipid bilayer of a red blood cell measures 8.0 nm from face to face, and the potential difference between its two faces is 40 mV. How strong is the field in the bilayer?`,
        options: [r`5.0 × 10⁶ V/m`, r`5.0 × 10⁹ V/m`, r`5.0 × 10⁰ V/m`, r`5.0 × 10⁻³ V/m`],
        correctAnswer: 0,
        explanation: r`Convert first: 40 mV = 0.040 V and 8.0 nm = 8.0 × 10⁻⁹ m, so E = 0.040 ÷ 8.0 × 10⁻⁹ = 5.0 × 10⁶ V/m. Leaving the voltage as 40 gives 5.0 × 10⁹, leaving the thickness as 8.0 gives 5.0 × 10⁻³, and converting neither gives 5.0.`,
      },
      {
        question: r`The field inside a 7.0 nm thick membrane is 1.0 × 10⁷ V/m. What is the voltage across the membrane, in millivolts?`,
        options: [r`7.0 × 10⁷ mV`, r`0.070 mV`, r`70 mV`, r`7.0 × 10¹⁰ mV`],
        correctAnswer: 2,
        explanation: r`V = Ed = (1.0 × 10⁷ V/m)(7.0 × 10⁻⁹ m) = 0.070 V, which is 70 mV. 0.070 mV is the answer in volts with the wrong unit attached. Leaving the thickness as 7.0 gives 7.0 × 10⁷, and then multiplying by 1000 as well gives 7.0 × 10¹⁰.`,
      },
      {
        question: r`A membrane holds 90 mV, and the field inside it is 1.5 × 10⁷ V/m. How thick is the membrane, in nanometers?`,
        options: [r`0.0060 nm`, r`6.0 nm`, r`6000 nm`, r`60 nm`],
        correctAnswer: 1,
        explanation: r`d = V/E = 0.090 V ÷ 1.5 × 10⁷ V/m = 6.0 × 10⁻⁹ m, which is 6.0 nm. Leaving the voltage as 90 instead of 0.090 V gives 6.0 × 10⁻⁶ m, which is 6000 nm. 0.0060 nm converts meters to nanometers with 10⁶ instead of 10⁹, and 60 nm is a power-of-ten slip in the division.`,
      },
      {
        question: r`A mitochondrion's inner bilayer measures about 5.0 nm from face to face and maintains a potential difference of 150 mV. How strong is the field within that bilayer?`,
        options: [r`3.0 × 10⁷ V/m`, r`7.5 × 10⁻¹⁰ V/m`, r`3.0 × 10¹⁰ V/m`, r`3.0 × 10¹ V/m`],
        correctAnswer: 0,
        explanation: r`E = V/d = 0.150 V ÷ 5.0 × 10⁻⁹ m = 3.0 × 10⁷ V/m. Dividing 150 by 5.0 with no conversions gives 30, and converting only the thickness gives 3.0 × 10¹⁰. 7.5 × 10⁻¹⁰ comes from multiplying the voltage by the thickness instead of dividing.`,
      },
      {
        question: r`Two lipid bilayers each hold a potential difference of 80 mV. Bilayer A measures 4.0 nm from face to face, and the field in it is 2.0 × 10⁷ V/m. Bilayer B measures 8.0 nm. How strong is the field in B?`,
        options: [r`1.0 × 10⁷ V/m`, r`1.0 × 10⁻² V/m`, r`4.0 × 10⁷ V/m`, r`2.0 × 10⁷ V/m`],
        correctAnswer: 0,
        explanation: r`E = V/d, so the same voltage across twice the thickness gives half the field: 0.080 V ÷ 8.0 × 10⁻⁹ m = 1.0 × 10⁷ V/m. 4.0 × 10⁷ inverts the ratio, 2.0 × 10⁷ ignores the thickness, and 1.0 × 10⁻² divides 0.080 by 8.0 without converting nanometers.`,
      },
      {
        question: r`A membrane 3.5 nm thick has 70 mV across it. Which line of working gives the field inside it correctly?`,
        options: [r`E = (70 × 10⁰ V)/(3.5 × 10⁰ m) = 2.0 × 10¹ V/m`, r`E = (70 × 10⁻³ V)/(3.5 × 10⁻⁹ m) = 2.0 × 10⁷ V/m`, r`E = (70 × 10⁻³ V)/(3.5 × 10⁻⁶ m) = 2.0 × 10⁴ V/m`, r`E = (70 × 10⁻⁶ V)/(3.5 × 10⁻⁹ m) = 2.0 × 10⁴ V/m`],
        correctAnswer: 1,
        explanation: r`A millivolt is 10⁻³ V and a nanometer is 10⁻⁹ m, so E = 0.070 V ÷ 3.5 × 10⁻⁹ m = 2.0 × 10⁷ V/m. The line with 10⁻⁶ m uses the micrometer factor, the line with 10⁻⁶ V uses the microvolt factor, and the line giving 20 V/m converts neither quantity.`,
      },
    ],
  },
  [r`How do you turn a separated charge into a number of monovalent ions?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A synapse moves 8.0 × 10⁻¹² C of charge across a membrane, all carried by Na⁺ ions. About how many ions is that? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`5.0 × 10³¹ ions`, r`1.3 × 10⁻³⁰ ions`, r`2.0 × 10⁻⁸ ions`, r`5.0 × 10⁷ ions`],
        correctAnswer: 3,
        explanation: r`N = Q/e = 8.0 × 10⁻¹² ÷ 1.6 × 10⁻¹⁹ = 5.0 × 10⁷ ions. Multiplying the two numbers gives 1.3 × 10⁻³⁰ and dividing e by Q gives 2.0 × 10⁻⁸; a count of ions cannot be less than one. 5.0 × 10³¹ adds the exponents instead of subtracting them.`,
      },
      {
        question: r`During one channel opening, 1.0 × 10⁴ potassium ions (K⁺) leave a cell. How much charge crosses the membrane? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`6.3 × 10²² C`, r`1.6 × 10⁻¹⁵ C`, r`1.6 × 10⁻¹⁹ C`, r`1.6 × 10⁻²³ C`],
        correctAnswer: 1,
        explanation: r`Rearranging N = Q/e gives Q = Ne = 1.0 × 10⁴ × 1.6 × 10⁻¹⁹ = 1.6 × 10⁻¹⁵ C. Dividing e by N gives 1.6 × 10⁻²³, dividing N by e gives 6.3 × 10²², and 1.6 × 10⁻¹⁹ C is the charge of just one ion.`,
      },
      {
        question: r`A cell's membrane holds 4.8 pC of separated charge. About how many monovalent ions does that represent? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.0 × 10⁷ ions`, r`3.0 × 10¹⁹ ions`, r`3.3 × 10⁻⁸ ions`, r`7.7 × 10⁻³¹ ions`],
        correctAnswer: 0,
        explanation: r`4.8 pC is 4.8 × 10⁻¹² C, so N = 4.8 × 10⁻¹² ÷ 1.6 × 10⁻¹⁹ = 3.0 × 10⁷ ions. Leaving the charge as 4.8 without converting picocoulombs gives 3.0 × 10¹⁹. Multiplying Q by e gives 7.7 × 10⁻³¹, and dividing e by Q gives 3.3 × 10⁻⁸.`,
      },
      {
        question: r`A static spark from a fingertip to a doorknob transfers 6.4 × 10⁻⁹ C, carried by electrons. About how many electrons move? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`2.5 × 10⁻¹¹ electrons`, r`4.0 × 10¹⁰ electrons`, r`4.0 × 10²⁸ electrons`, r`1.0 × 10⁻²⁷ electrons`],
        correctAnswer: 1,
        explanation: r`N = Q/e = 6.4 × 10⁻⁹ ÷ 1.6 × 10⁻¹⁹ = 4.0 × 10¹⁰ electrons. 4.0 × 10²⁸ adds the exponents instead of subtracting, 2.5 × 10⁻¹¹ divides e by Q, and 1.0 × 10⁻²⁷ multiplies Q by e.`,
      },
      {
        question: r`Cell X has 1.6 pC separated across its membrane, which corresponds to 1.0 × 10⁷ monovalent ions. Cell Y has 0.40 pC separated. About how many monovalent ions does cell Y's charge correspond to?`,
        options: [r`2.5 × 10⁶ ions`, r`2.5 × 10¹⁸ ions`, r`6.4 × 10⁶ ions`, r`4.0 × 10⁷ ions`],
        correctAnswer: 0,
        explanation: r`N = Q/e is proportional to Q, so one quarter of the charge is one quarter of the ions: 1.0 × 10⁷ ÷ 4 = 2.5 × 10⁶. 4.0 × 10⁷ inverts the ratio, 6.4 × 10⁶ multiplies by 0.40 × 1.6, and 2.5 × 10¹⁸ divides 0.40 by 1.6 × 10⁻¹⁹ without converting picocoulombs.`,
      },
      {
        question: r`A student divides a separated charge of 2.4 × 10⁻¹² C by e = 1.6 × 10⁻¹⁹ C. What is the result, and what kind of quantity is it?`,
        options: [r`1.5 × 10⁷, a count of ions`, r`3.8 × 10⁻³¹, a count of ions`, r`1.5 × 10⁷, a charge in coulombs`, r`3.8 × 10⁻³¹, a charge in coulombs`],
        correctAnswer: 0,
        explanation: r`Q/e = 2.4 × 10⁻¹² ÷ 1.6 × 10⁻¹⁹ = 1.5 × 10⁷, and coulombs divided by coulombs leaves a pure number: the count of monovalent ions. It is not a charge in coulombs. 3.8 × 10⁻³¹ comes from multiplying the two numbers instead of dividing.`,
      },
    ],
  },
  [r`What is the common trap when finding the charge separated across a membrane?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A neuron's membrane has a capacitance of 100 pF and rests with 80 mV across it. How much charge is separated across the membrane?`,
        options: [r`8.0 pC`, r`8000 pC`, r`0.32 pC`, r`4.0 pC`],
        correctAnswer: 0,
        explanation: r`Q = CV = (100 pF)(0.080 V) = 8.0 pC, with no ½. 4.0 pC puts a ½ in front, which belongs only to the energy. 0.32 is the number from ½CV², an energy, and 8000 pC leaves the voltage as 80 instead of 0.080 V.`,
      },
      {
        question: r`For a 60 pF membrane at 0.10 V, a student writes Q = ½(60 pF)(0.10 V) = 3.0 pC. What is the charge, and what is wrong with the working?`,
        options: [r`1.5 pC; the ½ should be applied twice over`, r`6.0 pC; the voltage should be squared too`, r`3.0 pC; the working is correct as written`, r`6.0 pC; the ½ belongs only to the energy`],
        correctAnswer: 3,
        explanation: r`Q = CV has no ½: (60 pF)(0.10 V) = 6.0 pC. The ½ belongs to the energy, U = ½CV². The working is therefore not correct as written, squaring the voltage is also an energy step, and applying ½ twice makes the error worse.`,
      },
      {
        question: r`A 30 pF patch of membrane holds 3.0 pC of separated charge. What is the voltage across it?`,
        options: [r`50 mV`, r`10 mV`, r`200 mV`, r`100 mV`],
        correctAnswer: 3,
        explanation: r`From Q = CV, V = Q/C = 3.0 pC ÷ 30 pF = 0.10 V = 100 mV. 200 mV comes from wrongly writing Q = ½CV, so V = 2Q/C. 50 mV halves the right answer, and 10 mV comes from dividing C by Q.`,
      },
      {
        question: r`A cell's membrane separates 6.0 pC of charge when it has 75 mV across it. What is the membrane's capacitance?`,
        options: [r`160 pF`, r`40 pF`, r`80 pF`, r`0.45 pF`],
        correctAnswer: 2,
        explanation: r`From Q = CV, C = Q/V = 6.0 pC ÷ 0.075 V = 80 pF. 160 pF comes from wrongly writing Q = ½CV, so C = 2Q/V. 40 pF halves the right answer, and 0.45 comes from multiplying 6.0 by 0.075 instead of dividing.`,
      },
      {
        question: r`A large cell's membrane has a capacitance of 200 pF and has 100 mV across it. How much energy is stored in the membrane's electric field?`,
        options: [r`1.0 × 10⁻¹¹ J`, r`2.0 × 10⁻¹² J`, r`2.0 × 10⁻¹¹ J`, r`1.0 × 10⁻¹² J`],
        correctAnswer: 3,
        explanation: r`The energy is where the ½ belongs: U = ½CV² = ½(2.0 × 10⁻¹⁰ F)(0.10 V)² = 1.0 × 10⁻¹² J. Dropping the ½ gives 2.0 × 10⁻¹², forgetting to square the voltage gives 1.0 × 10⁻¹¹, and 2.0 × 10⁻¹¹ is CV, the charge in coulombs.`,
      },
      {
        question: r`A 50 pF membrane's voltage doubles from 40 mV to 80 mV. How does the charge separated across it change?`,
        options: [r`From 1.0 pC to 4.0 pC`, r`From 2.0 pC to 8.0 pC`, r`From 2.0 pC to 4.0 pC`, r`From 1.0 pC to 2.0 pC`],
        correctAnswer: 2,
        explanation: r`Q = CV: (50 pF)(0.040 V) = 2.0 pC and (50 pF)(0.080 V) = 4.0 pC, so the charge doubles with the voltage. Starting from 1.0 pC puts a ½ in front, which belongs to the energy. Ending four times higher treats charge as going with V², which is also true only of the energy.`,
      },
    ],
  },
  [r`A membrane is wrapped in $n$ identical layers in series. What charge now holds the same voltage?`]: {
    kind: 'calc',
    more: [
      {
        question: r`One layer of membrane has a capacitance of 100 pF. Twenty identical layers are stacked in series, and the stack holds 50 mV. How much charge is separated across the stack?`,
        options: [r`5.0 pC`, r`100 pC`, r`0.25 pC`, r`250 pC`],
        correctAnswer: 2,
        explanation: r`In series the capacitance is divided by the number of layers: 100 pF ÷ 20 = 5.0 pF, so Q = (5.0 pF)(0.050 V) = 0.25 pC. 5.0 pC is the charge on a single bare layer, 100 pC multiplies the capacitance by 20, and 250 pC leaves the voltage as 50 instead of 0.050 V.`,
      },
      {
        question: r`A bare stretch of axon membrane needs 30 pC of separated charge to hold 70 mV. Wrapped in identical layers in series, the same stretch needs only 0.60 pC to hold 70 mV. How many layers are in the stack?`,
        options: [r`7 layers`, r`50 layers`, r`18 layers`, r`29 layers`],
        correctAnswer: 1,
        explanation: r`At a fixed voltage the charge is divided by the number of layers n, so n = 30 pC ÷ 0.60 pC = 50. Multiplying 30 by 0.60 gives 18, subtracting gives about 29, and 7 is roughly the square root of 50.`,
      },
      {
        question: r`A wrapped stretch of axon, 40 identical layers in series, holds 80 mV with just 0.25 pC of separated charge. How much charge would one bare layer need to hold the same 80 mV?`,
        options: [r`20 pC`, r`10 pC`, r`1.6 pC`, r`0.0063 pC`],
        correctAnswer: 1,
        explanation: r`A single layer has 40 times the capacitance of the 40-layer stack, so it needs 40 times the charge: 40 × 0.25 pC = 10 pC. Dividing by 40 gives 0.0063 pC, the wrong direction. 1.6 pC multiplies by the square root of 40, and 20 pC multiplies 0.25 by the 80 of the voltage.`,
      },
      {
        question: r`In a lab, four identical 8.0 μF capacitors are connected in series, and the chain is held at 6.0 V in total. How much charge does the chain hold?`,
        options: [r`12 μC`, r`192 μC`, r`3.0 μC`, r`48 μC`],
        correctAnswer: 0,
        explanation: r`Four identical capacitors in series have C = 8.0 μF ÷ 4 = 2.0 μF, so Q = (2.0 μF)(6.0 V) = 12 μC. 48 μC is what one capacitor alone would hold at 6.0 V, 192 μC multiplies the capacitance by four as if in parallel, and 3.0 μC divides by four twice.`,
      },
      {
        question: r`A stack of 10 identical membrane layers in series holds 60 mV with 0.30 pC of separated charge. What is the capacitance of one layer?`,
        options: [r`18 pF`, r`0.50 pF`, r`50 pF`, r`5.0 pF`],
        correctAnswer: 2,
        explanation: r`The stack's capacitance is Q/V = 0.30 pC ÷ 0.060 V = 5.0 pF, and that is one layer's capacitance divided by 10, so one layer is 50 pF. 5.0 pF is the whole stack, 0.50 pF divides by 10 instead of multiplying, and 18 comes from multiplying 0.30 by 60.`,
      },
      {
        question: r`A healthy internode has 30 identical layers in series and needs 0.20 pC of separated charge to hold a certain voltage. Disease thins it to 10 layers. How much charge now holds the same voltage?`,
        options: [r`1.8 pC`, r`0.60 pC`, r`0.20 pC`, r`0.067 pC`],
        correctAnswer: 1,
        explanation: r`Q = (C/n)V, so with a third as many layers the capacitance is three times larger and so is the charge: 3 × 0.20 pC = 0.60 pC. 0.067 pC divides by three, 1.8 pC multiplies by nine, and 0.20 pC assumes the number of layers does not matter.`,
      },
    ],
  },
  [r`What is ventricular fibrillation, and what does a defibrillator's shock do?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A shock stops the chaotic activity in a fibrillating heart, and a steady beat then returns. What re-establishes the coordinated rhythm after the shock?`,
        options: [r`The SA node, once the muscle is reset all at once`, r`The AV node, once the SA node has been shut down`, r`The capacitor, which keeps feeding the muscle energy`, r`The shock itself, which then paces each later beat`],
        correctAnswer: 0,
        explanation: r`The shock depolarizes most of the muscle at the same moment, which silences the chaotic firing; the heart's own pacemaker, the SA node, then takes back control. The shock is one brief pulse and does not pace later beats, the capacitor is empty within milliseconds, and the SA node is not shut down.`,
      },
      {
        question: r`Why would a current too weak to reach most of the heart muscle fail to end ventricular fibrillation?`,
        options: [r`The cells would be unable to recharge their resting voltage`, r`The SA node would be unable to store enough electric charge`, r`Only some cells would be reset, so the rest stay out of step`, r`The heart would receive too little energy to pump the blood`],
        correctAnswer: 2,
        explanation: r`Fibrillation is cells firing out of step, and the cure is to depolarize most of the muscle at once so the SA node can take over. A weak current resets only part of the muscle, and the chaos continues. The shock is not a source of pumping energy, and it neither recharges resting voltages nor charges the SA node.`,
      },
    ],
  },
  [r`What is the largest current a battery can ever deliver?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A car battery has an EMF of 12 V and an internal resistance of 0.020 Ω. What is the largest current it could ever deliver?`,
        options: [r`600 A`, r`0.0017 A`, r`0.24 A`, r`60 A`],
        correctAnswer: 0,
        explanation: r`The largest current flows with no outside resistance: I = ε/r = 12 V ÷ 0.020 Ω = 600 A. 0.24 comes from multiplying 12 by 0.020, 0.0017 from dividing r by ε, and 60 A from a power-of-ten slip in the division.`,
      },
      {
        question: r`An AA cell has an EMF of 1.5 V. With its terminals joined by a thick wire of negligible resistance, it delivers 5.0 A, the most it can. What is its internal resistance?`,
        options: [r`0.15 Ω`, r`3.3 Ω`, r`7.5 Ω`, r`0.30 Ω`],
        correctAnswer: 3,
        explanation: r`With no outside resistance, I = ε/r, so r = ε/I = 1.5 V ÷ 5.0 A = 0.30 Ω. 7.5 comes from multiplying 1.5 by 5.0, 3.3 from dividing the current by the EMF, and 0.15 Ω halves the right answer.`,
      },
      {
        question: r`A battery has an internal resistance of 0.25 Ω, and the largest current it can ever deliver is 36 A. What is its EMF?`,
        options: [r`0.0069 V`, r`144 V`, r`36 V`, r`9.0 V`],
        correctAnswer: 3,
        explanation: r`The largest current is ε/r, so ε = (36 A)(0.25 Ω) = 9.0 V. 144 comes from dividing 36 by 0.25, 0.0069 from dividing 0.25 by 36, and 36 V simply copies the number for the current.`,
      },
      {
        question: r`A lithium cell has an EMF of 3.6 V and an internal resistance of 90 mΩ. What is the largest current it can ever deliver?`,
        options: [r`40 A`, r`0.32 A`, r`0.025 A`, r`0.040 A`],
        correctAnswer: 0,
        explanation: r`90 mΩ is 0.090 Ω, so the largest current is ε/r = 3.6 V ÷ 0.090 Ω = 40 A. Dividing 3.6 by 90 without converting milliohms gives 0.040 A. 0.32 comes from multiplying 3.6 by 0.090, and 0.025 from dividing r by ε.`,
      },
      {
        question: r`As a 6.0 V battery ages, its internal resistance rises from 0.50 Ω to 2.0 Ω while its EMF stays the same. What happens to the largest current it can deliver?`,
        options: [r`It falls from 12 A to 3.0 A`, r`It rises from 3.0 A to 12 A`, r`It stays at 12 A throughout`, r`It falls from 12 A to 6.0 A`],
        correctAnswer: 0,
        explanation: r`The largest current is ε/r: 6.0 V ÷ 0.50 Ω = 12 A when new and 6.0 V ÷ 2.0 Ω = 3.0 A when aged. A rise from 3.0 A to 12 A multiplies ε by r instead of dividing. The limit does depend on r, so it does not stay at 12 A, and four times the resistance cuts it to a quarter, not a half.`,
      },
      {
        question: r`A device needs 8.0 A. The only battery available has an EMF of 10 V and an internal resistance of 2.0 Ω. Can any choice of outside circuit draw 8.0 A from it?`,
        options: [r`Yes: 8.0 A, with a large outside resistance`, r`No: at most 0.20 A, with no outside resistance`, r`Yes: up to 20 A, with no outside resistance`, r`No: at most 5.0 A, with no outside resistance`],
        correctAnswer: 3,
        explanation: r`The most a battery can deliver is ε/r = 10 V ÷ 2.0 Ω = 5.0 A, reached with no outside resistance, so 8.0 A is impossible. 20 A multiplies ε by r, and 0.20 A divides r by ε. Adding outside resistance only lowers the current further.`,
      },
    ],
  },
  [r`What are the three stages of a defibrillator?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A defibrillator's capacitor sits at full voltage with no current flowing, and the operator has not yet pressed the shock button. Which stage is this, and what happens in the next stage?`,
        options: [r`Discharge; next it fills from the battery over a few seconds`, r`Charge; next it empties through the chest in milliseconds`, r`Store; next it fills from the battery over a few seconds`, r`Store; next it empties through the chest in milliseconds`],
        correctAnswer: 3,
        explanation: r`The order is charge, store, discharge. A full capacitor holding its energy with no current is in the store stage, and the next stage is the discharge through the chest, which takes milliseconds. Filling from the battery over seconds is the charge stage, which has already finished.`,
      },
      {
        question: r`Which statement about the three stages of a defibrillator is NOT correct?`,
        options: [r`The full capacitor holds an energy equal to ½CV²`, r`The chest receives the energy within milliseconds`, r`The capacitor empties more slowly than it fills`, r`The capacitor fills at a modest power over seconds`],
        correctAnswer: 2,
        explanation: r`The capacitor fills slowly, over seconds, and empties quickly, in milliseconds, so saying it empties more slowly than it fills has the order backwards. The other three statements are correct: filling is at modest power, the stored energy is ½CV², and the discharge through the chest takes milliseconds.`,
      },
    ],
  },
  [r`How is a defibrillator's energy setting reached?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator has a fixed 32 μF capacitor. One of its settings charges the capacitor to 2500 V. How much energy does that setting store?`,
        options: [r`100 J`, r`1.0 × 10⁸ J`, r`200 J`, r`0.040 J`],
        correctAnswer: 0,
        explanation: r`U = ½CV² = ½(3.2 × 10⁻⁵ F)(2500 V)² = ½(3.2 × 10⁻⁵)(6.25 × 10⁶) = 100 J. Leaving out the ½ gives 200 J, forgetting to square the voltage gives 0.040 J, and leaving the capacitance as 32 instead of converting microfarads gives 1.0 × 10⁸ J.`,
      },
      {
        question: r`A unit with a fixed 200 μF capacitor is set to deliver 100 J. To what voltage must it charge the capacitor?`,
        options: [r`1.0 × 10⁶ V`, r`1000 V`, r`707 V`, r`1.0 V`],
        correctAnswer: 1,
        explanation: r`From U = ½CV², V² = 2U/C = 200 J ÷ 2.0 × 10⁻⁴ F = 1.0 × 10⁶ V², so V = 1000 V. 707 V leaves out the factor of 2, 1.0 × 10⁶ forgets the square root, and 1.0 V leaves the capacitance as 200 instead of converting microfarads.`,
      },
      {
        question: r`A defibrillator reaches its 360 J setting by charging its capacitor to 3000 V. What is the capacitance?`,
        options: [r`40 μF`, r`160 μF`, r`80 μF`, r`240,000 μF`],
        correctAnswer: 2,
        explanation: r`From U = ½CV², C = 2U/V² = 720 J ÷ 9.0 × 10⁶ V² = 8.0 × 10⁻⁵ F = 80 μF. 40 μF leaves out the factor of 2 and 160 μF doubles twice. 240,000 μF, or 0.24 F, comes from dividing 720 by 3000 without squaring the voltage.`,
      },
      {
        question: r`A unit's fixed capacitor stores 40 J when charged to 1000 V. Another setting charges the same capacitor to 3000 V. How much energy does that setting store?`,
        options: [r`69 J`, r`360 J`, r`120 J`, r`13 J`],
        correctAnswer: 1,
        explanation: r`With C fixed, energy goes as V², so three times the voltage stores nine times the energy: 9 × 40 J = 360 J. 120 J treats energy as proportional to V, 69 J multiplies by the square root of 3, and 13 J divides by 3.`,
      },
      {
        question: r`A studio flash has a fixed 500 μF capacitor. Its low setting charges the capacitor to 200 V and its high setting to 400 V. What energies do the two settings store?`,
        options: [r`10 J and 20 J`, r`0.050 J and 0.10 J`, r`20 J and 80 J`, r`10 J and 40 J`],
        correctAnswer: 3,
        explanation: r`U = ½CV²: ½(5.0 × 10⁻⁴ F)(200 V)² = 10 J and ½(5.0 × 10⁻⁴ F)(400 V)² = 40 J. 10 J and 20 J treats energy as proportional to V, 20 J and 80 J leaves out the ½, and 0.050 J and 0.10 J forgets to square the voltages.`,
      },
      {
        question: r`A research pulser has a fixed 25 μF capacitor. Its top setting charges the capacitor to 4.0 kV. How much energy does that setting store?`,
        options: [r`400 J`, r`2.0 × 10⁻⁴ J`, r`0.050 J`, r`200 J`],
        correctAnswer: 3,
        explanation: r`4.0 kV is 4000 V, so U = ½(2.5 × 10⁻⁵ F)(4000 V)² = ½(2.5 × 10⁻⁵)(1.6 × 10⁷) = 200 J. Leaving out the ½ gives 400 J, forgetting to square the voltage gives 0.050 J, and leaving the voltage as 4.0 without converting kilovolts gives 2.0 × 10⁻⁴ J.`,
      },
    ],
  },
  [r`What sets how fast a defibrillator's capacitor empties through the chest?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 250 μF defibrillator capacitor empties through a chest path with a resistance of 60 Ω. What is the time constant of the discharge?`,
        options: [r`75 ms`, r`4.2 ms`, r`15 ms`, r`15 s`],
        correctAnswer: 2,
        explanation: r`τ = RC = (60 Ω)(2.5 × 10⁻⁴ F) = 0.015 s = 15 ms. 75 ms is five time constants, the time to be essentially empty. 4.2 comes from dividing 250 by 60, and 15 s comes from converting microfarads with the wrong power of ten.`,
      },
      {
        question: r`An 80 μF capacitor is seen to empty through a patient's chest with a time constant of 4.0 ms. What is the resistance of the chest path?`,
        options: [r`50 Ω`, r`0.050 Ω`, r`0.32 Ω`, r`20 Ω`],
        correctAnswer: 0,
        explanation: r`From τ = RC, R = τ/C = 4.0 × 10⁻³ s ÷ 8.0 × 10⁻⁵ F = 50 Ω. 20 comes from dividing 80 by 4.0, 0.32 from multiplying 4.0 × 10⁻³ by 80, and 0.050 from dividing 4.0 by 80 with neither unit converted.`,
      },
      {
        question: r`A capacitor discharging through a 100 Ω test load is essentially empty after about 30 ms. About what is its capacitance?`,
        options: [r`60 μF`, r`6.0 μF`, r`1500 μF`, r`300 μF`],
        correctAnswer: 0,
        explanation: r`Essentially empty means about five time constants, so τ ≈ 30 ms ÷ 5 = 6.0 ms and C = τ/R = 6.0 × 10⁻³ s ÷ 100 Ω = 60 μF. 300 μF treats the whole 30 ms as one time constant, 1500 μF multiplies by five instead of dividing, and 6.0 μF is a power-of-ten slip.`,
      },
      {
        question: r`A camera flash's 500 μF capacitor empties through a flash tube that acts as an 8.0 Ω resistor. About how long does it take to be essentially empty?`,
        options: [r`20 ms`, r`4.0 ms`, r`0.80 ms`, r`20 s`],
        correctAnswer: 0,
        explanation: r`τ = RC = (8.0 Ω)(5.0 × 10⁻⁴ F) = 4.0 ms, and the capacitor is essentially empty after about 5τ = 20 ms. 4.0 ms is one time constant, when about 37% of the charge remains. 0.80 ms divides τ by five, and 20 s converts microfarads with the wrong power of ten.`,
      },
      {
        question: r`In a teaching lab, a 2.0 μF capacitor discharges through a 5.0 kΩ resistor. What is the time constant?`,
        options: [r`2.5 ms`, r`10 ms`, r`10 μs`, r`10 s`],
        correctAnswer: 1,
        explanation: r`τ = RC = (5.0 × 10³ Ω)(2.0 × 10⁻⁶ F) = 1.0 × 10⁻² s = 10 ms. Leaving the resistance as 5.0 without converting kilohms gives 10 μs, 10 s uses 10⁻³ instead of 10⁻⁶ for the micro- prefix, and 2.5 comes from dividing 5.0 by 2.0.`,
      },
      {
        question: r`A 100 μF capacitor empties through a patient's chest with a time constant of 8.0 ms. A 25 μF capacitor is used instead on the same patient. What is the new time constant?`,
        options: [r`8.0 ms`, r`4.0 ms`, r`2.0 ms`, r`32 ms`],
        correctAnswer: 2,
        explanation: r`τ = RC, so with the same chest resistance a quarter of the capacitance gives a quarter of the time constant: 8.0 ms ÷ 4 = 2.0 ms. 32 ms inverts the ratio, 4.0 ms takes a square root of the factor, and 8.0 ms assumes the capacitance does not matter.`,
      },
    ],
  },
  [r`How do the current and the power change during a capacitor's discharge?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor charged to 600 V begins to discharge through a 20 Ω resistor. What is the current at the first instant, and about what is it one time constant later?`,
        options: [r`30 A at first, then about 4 A`, r`0 A at first, then about 19 A`, r`30 A at first, then about 11 A`, r`30 A at first, then about 19 A`],
        correctAnswer: 2,
        explanation: r`The current peaks at the first instant: I₀ = V/R = 600 V ÷ 20 Ω = 30 A. After one time constant it is at 37%, about 11 A. 19 A is 63% of the peak, which belongs to a rising quantity, not a decaying one; the current does not start at zero; and 4 A is the 14% that applies to the power.`,
      },
      {
        question: r`At the first instant of a shock, the power delivered to the chest is 50 kW. About what is the power one time constant later?`,
        options: [r`About 19 kW`, r`About 7 kW`, r`About 32 kW`, r`About 43 kW`],
        correctAnswer: 1,
        explanation: r`Power goes as I². The current falls to 37% after one time constant, so the power falls to about 0.37² ≈ 14%: 0.14 × 50 kW ≈ 7 kW. 19 kW uses 37%, the current's fraction. 32 kW uses 63% and 43 kW uses 86%, the fractions already lost.`,
      },
      {
        question: r`One time constant into a capacitor's discharge through a resistor, the current is 7.4 A. About what was the peak current at the first instant?`,
        options: [r`About 20 A`, r`About 2.7 A`, r`About 53 A`, r`About 12 A`],
        correctAnswer: 0,
        explanation: r`After one time constant the current is 37% of its peak, so the peak was 7.4 A ÷ 0.37 = 20 A. 2.7 A multiplies by 0.37 instead of dividing, 53 A divides by 0.14, the power's fraction, and 12 A divides by 0.63.`,
      },
      {
        question: r`One time constant into a capacitor's discharge, a resistor is dissipating 2.8 W. About what was the power at the first instant?`,
        options: [r`About 0.39 W`, r`About 4.4 W`, r`About 20 W`, r`About 7.6 W`],
        correctAnswer: 2,
        explanation: r`Power goes as I², so after one time constant it is at about 14% of its peak, and the peak was 2.8 W ÷ 0.14 = 20 W. 7.6 W divides by 0.37, the current's fraction. 0.39 W multiplies by 0.14 instead of dividing, and 4.4 W divides by 0.63.`,
      },
      {
        question: r`At a certain moment during a capacitor's discharge through a resistor, the current has fallen to half of its peak value. What fraction of the peak power is the resistor receiving at that moment?`,
        options: [r`About 14% of the peak power`, r`About 25% of the peak power`, r`About 50% of the peak power`, r`About 71% of the peak power`],
        correctAnswer: 1,
        explanation: r`Power goes as I², so half the current means (½)² = ¼ of the power, 25%. 50% assumes power falls in step with the current, 71% takes a square root instead of squaring, and 14% is the fraction after one full time constant, when the current is at 37%, not 50%.`,
      },
      {
        question: r`A sensor's capacitor, charged to 5.0 V, begins to discharge through a 1.0 kΩ resistor. About what are the current and the power in the resistor one time constant later?`,
        options: [r`About 1.9 mA and 3.5 mW`, r`About 0.7 mA and 3.5 mW`, r`About 1.9 mA and 9.3 mW`, r`About 3.2 mA and 16 mW`],
        correctAnswer: 0,
        explanation: r`At the first instant I₀ = 5.0 V ÷ 1000 Ω = 5.0 mA and P₀ = (5.0 V)(5.0 mA) = 25 mW. After one time constant the current is at 37%, about 1.9 mA, and the power at 14%, about 3.5 mW. 9.3 mW uses 37% for the power, 3.2 mA and 16 mW use 63% for both, and 0.7 mA uses 14% for the current.`,
      },
    ],
  },
  [r`Why does a defibrillator deliver so much more power than its charger supplies?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator delivers 300 J to a patient's chest in 10 ms. What is the average power of the shock?`,
        options: [r`30 W`, r`30 kW`, r`3.0 W`, r`0.033 mW`],
        correctAnswer: 1,
        explanation: r`P = U/t = 300 J ÷ 0.010 s = 30,000 W = 30 kW. Dividing 300 by 10 without converting milliseconds gives 30 W, multiplying 300 by 0.010 gives 3.0, and dividing the time by the energy gives 3.3 × 10⁻⁵, or 0.033 mW.`,
      },
      {
        question: r`A charging circuit works at an average power of 25 W for 8.0 s to fill a capacitor. Ignoring losses, how much energy ends up stored?`,
        options: [r`3.1 J`, r`0.32 J`, r`100 J`, r`200 J`],
        correctAnswer: 3,
        explanation: r`From P = U/t, U = Pt = (25 W)(8.0 s) = 200 J. 3.1 comes from dividing the power by the time, 0.32 from dividing the time by the power, and 100 J wrongly attaches a factor of ½ that belongs to ½CV², not to U = Pt.`,
      },
      {
        question: r`A capacitor bank releases 500 J into a welding joint at an average power of 250 kW. How long does the release last?`,
        options: [r`2.0 s`, r`500 s`, r`2.0 ms`, r`0.50 ms`],
        correctAnswer: 2,
        explanation: r`From P = U/t, t = U/P = 500 J ÷ 2.5 × 10⁵ W = 2.0 × 10⁻³ s = 2.0 ms. Dividing 500 by 250 without converting kilowatts gives 2.0 s, and 0.50 and 500 come from dividing the power by the energy.`,
      },
      {
        question: r`A small charger supplies an average of 20 W. Ignoring losses, how long does it take to store 150 J in a capacitor?`,
        options: [r`7.5 ms`, r`0.13 s`, r`7.5 s`, r`3000 s`],
        correctAnswer: 2,
        explanation: r`From P = U/t, t = U/P = 150 J ÷ 20 W = 7.5 s. 3000 comes from multiplying 150 by 20, 0.13 from dividing the power by the energy, and 7.5 ms from attaching a milli- prefix that nothing in the problem calls for.`,
      },
      {
        question: r`A pulsed magnet's capacitor delivers its energy in 8.0 ms at an average power of 12 kW. Rewired, it delivers the same energy in 4.0 ms. What is the average power now?`,
        options: [r`48 kW`, r`24 kW`, r`6.0 kW`, r`12 kW`],
        correctAnswer: 1,
        explanation: r`P = U/t, so the same energy in half the time is twice the power: 2 × 12 kW = 24 kW. As a check, the energy is (12 kW)(8.0 ms) = 96 J, and 96 J ÷ 4.0 ms = 24 kW. 6.0 kW inverts the ratio, 12 kW ignores the time, and 48 kW squares the factor.`,
      },
      {
        question: r`A hand-cranked charger feeds a capacitor at an average of 5.0 W for 60 s. The capacitor then releases everything in 0.10 s. Ignoring losses, how much energy is released, and at what average power?`,
        options: [r`3000 J at about 3.0 kW`, r`300 J at about 3.0 kW`, r`30 J at about 300 W`, r`300 J at about 5.0 W`],
        correctAnswer: 1,
        explanation: r`The capacitor only passes on what it was given: U = (5.0 W)(60 s) = 300 J. Released in 0.10 s, that is 300 J ÷ 0.10 s = 3000 W = 3.0 kW. The power is not stuck at the charger's 5.0 W, and the capacitor cannot give out 3000 J or only 30 J: it compresses time, it does not create or lose energy.`,
      },
    ],
  },
  [r`A dielectric is slid into a capacitor that is still connected to its battery. What happens?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 2.0 μF capacitor connected to a 10 V battery stores 100 μJ. With the battery still connected, a slab with dielectric constant 4 is slid between the plates. How much energy does the capacitor store now?`,
        options: [r`25 μJ`, r`400 μJ`, r`1600 μJ`, r`100 μJ`],
        correctAnswer: 1,
        explanation: r`The battery holds V at 10 V while C rises by κ = 4, so U = ½CV² rises by 4: 400 μJ. 25 μJ divides by κ, which is what happens when the capacitor is isolated instead. 100 μJ assumes no change, and 1600 μJ multiplies by κ².`,
      },
      {
        question: r`A capacitor stays connected to its battery while a slab is slid between its plates. Its charge rises from 40 nC to 100 nC. What is the slab's dielectric constant?`,
        options: [r`0.40`, r`6.3`, r`1.6`, r`2.5`],
        correctAnswer: 3,
        explanation: r`With V fixed by the battery, Q = CV rises by the factor κ, so κ = 100 nC ÷ 40 nC = 2.5. 0.40 inverts the ratio, 6.3 squares it, and 1.6 takes its square root; the charge is simply proportional to κ here.`,
      },
      {
        question: r`A 5.0 μF capacitor is connected to a 9.0 V battery. With the battery still connected, a slab with dielectric constant 3 is slid in. How much additional charge flows from the battery onto the capacitor?`,
        options: [r`45 μC`, r`30 μC`, r`135 μC`, r`90 μC`],
        correctAnswer: 3,
        explanation: r`Before, Q = (5.0 μF)(9.0 V) = 45 μC. With V fixed and C tripled, Q becomes 135 μC, so the battery supplies an extra 135 − 45 = 90 μC. 135 μC is the new total, 45 μC is the starting charge, and 30 μC is the drop that would follow from dividing the charge by 3.`,
      },
      {
        question: r`With its battery still connected, a capacitor holds 600 μC after a slab with dielectric constant 5 has been slid between its plates. How much charge did it hold before the slab went in?`,
        options: [r`600 μC`, r`3000 μC`, r`24 μC`, r`120 μC`],
        correctAnswer: 3,
        explanation: r`At fixed V the charge rises by κ, so before the slab it was 600 μC ÷ 5 = 120 μC. 3000 μC multiplies by κ, the wrong direction. 600 μC assumes the charge is fixed, which is true only for an isolated capacitor, and 24 μC divides by κ².`,
      },
      {
        question: r`A 3.0 μF capacitor connected to a 6.0 V battery stores 54 μJ. A slab with dielectric constant 2 is slid in while the battery stays connected. What are the voltage and the stored energy afterward?`,
        options: [r`12 V and 108 μJ`, r`6.0 V and 27 μJ`, r`6.0 V and 108 μJ`, r`3.0 V and 27 μJ`],
        correctAnswer: 2,
        explanation: r`The battery fixes V at 6.0 V, and C doubles, so U = ½CV² doubles to 108 μJ. 3.0 V and 27 μJ are the results for an isolated capacitor, where Q is fixed. 6.0 V and 27 μJ keeps the voltage but halves the energy instead of doubling it, and 12 V and 108 μJ wrongly doubles the voltage.`,
      },
      {
        question: r`A 200 pF liquid-level sensor stays connected to a 5.0 V supply. Water, with dielectric constant 80, fills the gap between its plates. How much charge does the sensor hold now?`,
        options: [r`1.0 nC`, r`80 nC`, r`16 nC`, r`0.013 nC`],
        correctAnswer: 1,
        explanation: r`C rises to 80 × 200 pF = 16,000 pF = 16 nF, and V stays at 5.0 V, so Q = (16 nF)(5.0 V) = 80 nC. 1.0 nC is the charge before the water arrived, 16 is the new capacitance in nF without the voltage, and 0.013 nC divides the old charge by 80.`,
      },
    ],
  },
  [r`A dielectric is slid into an isolated, charged capacitor. What happens?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor is charged to 120 V and then disconnected. A slab with dielectric constant 4 is slid between its plates. What is the voltage across it now?`,
        options: [r`30 V`, r`480 V`, r`120 V`, r`7.5 V`],
        correctAnswer: 0,
        explanation: r`Isolated, the charge cannot change. C rises by κ = 4, so V = Q/C falls by 4: 120 V ÷ 4 = 30 V. 480 V multiplies by κ, 120 V is what a connected battery would maintain, and 7.5 V divides by κ².`,
      },
      {
        question: r`An isolated, charged capacitor reads 84 V. When a slab is slid between its plates, the reading falls to 24 V. What is the slab's dielectric constant?`,
        options: [r`12`, r`3.5`, r`0.29`, r`60`],
        correctAnswer: 1,
        explanation: r`With Q fixed, V = Q/C falls by the factor κ, so κ = 84 V ÷ 24 V = 3.5. 0.29 inverts the ratio, 12 squares it, and 60 is the difference between the two readings, not their ratio.`,
      },
      {
        question: r`A 2.0 μF capacitor is charged to 50 V, so it holds 100 μC, and is then disconnected. A slab with dielectric constant 2 is slid between its plates. What are its charge and voltage now?`,
        options: [r`100 μC at 100 V`, r`50 μC at 25 V`, r`200 μC at 50 V`, r`100 μC at 25 V`],
        correctAnswer: 3,
        explanation: r`Isolated, the charge stays at 100 μC. C doubles, so V = Q/C halves to 25 V. 200 μC at 50 V is what happens with the battery still connected. 50 μC at 25 V halves the charge as well, and 100 μC at 100 V raises the voltage instead of lowering it.`,
      },
      {
        question: r`A slab with dielectric constant 3 is slid into an isolated, charged capacitor, and afterward the capacitor stores 20 mJ. How much energy did it store before the slab went in?`,
        options: [r`20 mJ`, r`60 mJ`, r`6.7 mJ`, r`180 mJ`],
        correctAnswer: 1,
        explanation: r`With Q fixed, U = Q²/2C falls by κ when the slab goes in, so before it was 3 × 20 mJ = 60 mJ. 6.7 mJ divides by κ, the wrong direction. 180 mJ multiplies by κ², and 20 mJ assumes the energy does not change.`,
      },
      {
        question: r`An isolated, charged capacitor already has a slab with dielectric constant 4 between its plates and reads 5.0 V. The slab is pulled out. What does the capacitor read now?`,
        options: [r`1.3 V`, r`20 V`, r`5.0 V`, r`80 V`],
        correctAnswer: 1,
        explanation: r`Removing the slab lowers C by the factor κ = 4 while Q stays fixed, so V = Q/C rises by 4: 4 × 5.0 V = 20 V. 1.3 V divides by κ, which is what inserting a slab does. 5.0 V assumes no change, and 80 V multiplies by κ².`,
      },
      {
        question: r`A slab with dielectric constant 6 is slid into an isolated, charged capacitor. How do its voltage V and its stored energy U change?`,
        options: [r`V is unchanged; U falls to one sixth`, r`V and U both fall to one sixth`, r`V and U both rise by six times`, r`V falls to one sixth; U is unchanged`],
        correctAnswer: 1,
        explanation: r`Q is fixed and C rises by κ = 6, so V = Q/C and U = Q²/2C both fall to one sixth. A rise by six times is the result for Q and U when a battery stays connected. Energy is not unchanged, because the plates do work pulling the slab in, and V cannot stay fixed with no battery attached.`,
      },
    ],
  },
  [r`A fixed capacitor must store twice the energy. By what factor does its voltage change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator charges its one fixed capacitor to 2000 V for its 150 J setting. Roughly what voltage does its 300 J setting use?`,
        options: [r`About 2830 V`, r`About 4000 V`, r`About 3000 V`, r`About 8000 V`],
        correctAnswer: 0,
        explanation: r`With C fixed, U goes as V², so twice the energy needs √2 ≈ 1.41 times the voltage: 1.41 × 2000 V ≈ 2830 V. 4000 V doubles the voltage, which would store four times the energy, 8000 V quadruples it, and 3000 V multiplies by 1.5.`,
      },
      {
        question: r`A fixed capacitor stores 30 J at 500 V. Its voltage is then raised to about 707 V, which is 1.41 times as high. About how much energy does it store now?`,
        options: [r`About 42 J`, r`About 85 J`, r`About 120 J`, r`About 60 J`],
        correctAnswer: 3,
        explanation: r`Energy goes as V², and 1.41² ≈ 2, so the energy doubles to about 60 J. 42 J multiplies by 1.41, as if energy were proportional to V. 120 J is what doubling the voltage would give, and 85 J multiplies by 2.83.`,
      },
      {
        question: r`A fixed capacitor is charged to 3000 V to store 360 J. Roughly what voltage would store half as much, 180 J?`,
        options: [r`About 2120 V`, r`About 1500 V`, r`About 4240 V`, r`About 750 V`],
        correctAnswer: 0,
        explanation: r`With C fixed, U goes as V², so half the energy needs 1/√2 ≈ 0.71 of the voltage: 3000 V ÷ 1.41 ≈ 2120 V. 1500 V halves the voltage, which would leave only a quarter of the energy. 750 V quarters it, and 4240 V multiplies by 1.41 instead of dividing.`,
      },
      {
        question: r`A fixed capacitor stores 40 J at 800 V. Wanting 80 J, a technician charges it to 1600 V. What energy does 1600 V store, and what voltage was needed for 80 J?`,
        options: [r`160 J; about 1130 V was needed`, r`80 J; 1600 V was the right choice`, r`160 J; about 1200 V was needed`, r`320 J; about 1130 V was needed`],
        correctAnswer: 0,
        explanation: r`Energy goes as V², so doubling the voltage stores four times the energy, 160 J. Twice the energy needs only √2 times the voltage: 1.41 × 800 V ≈ 1130 V. 1600 V is therefore not the right choice, 1200 V multiplies by 1.5, and 320 J multiplies the energy by eight.`,
      },
      {
        question: r`A fixed capacitor holds 2.0 mC of charge when it stores 5.0 J. About how much charge does it hold when it stores 10 J?`,
        options: [r`About 4.0 mC`, r`About 8.0 mC`, r`About 2.8 mC`, r`About 1.4 mC`],
        correctAnswer: 2,
        explanation: r`Twice the energy on a fixed capacitor needs √2 ≈ 1.41 times the voltage, and Q = CV rises by the same factor: 1.41 × 2.0 mC ≈ 2.8 mC. 4.0 mC doubles the charge, which would store four times the energy. 8.0 mC quadruples it, and 1.4 mC divides by 1.41.`,
      },
      {
        question: r`A fixed timing capacitor on a circuit board stores 1.0 mJ when charged to 10 V. About what voltage makes it store 2.0 mJ?`,
        options: [r`About 7.1 V`, r`About 40 V`, r`About 20 V`, r`About 14 V`],
        correctAnswer: 3,
        explanation: r`With C fixed, U goes as V², so twice the energy needs √2 ≈ 1.41 times the voltage: about 14 V. 20 V doubles the voltage and would store 4.0 mJ. 40 V quadruples the voltage, and 7.1 V divides by 1.41 instead of multiplying.`,
      },
    ],
  },
  [r`The same energy is to be stored in a larger capacitor. How does the voltage needed change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A pulser stores its energy at 3000 V. A new model stores the same energy in a capacitor with 25 times the capacitance. What charging voltage does the new model need?`,
        options: [r`15,000 V`, r`120 V`, r`600 V`, r`75,000 V`],
        correctAnswer: 2,
        explanation: r`At fixed energy V goes as 1/√C, so 25 times the capacitance needs 1/5 of the voltage: 3000 V ÷ 5 = 600 V. 120 V divides by 25, forgetting the square root. 15,000 V multiplies by 5 and 75,000 V multiplies by 25.`,
      },
      {
        question: r`A flash unit stores its energy at 300 V. A compact version must store the same energy in a capacitor with only 1/16 of the capacitance. What charging voltage does the compact version need?`,
        options: [r`4800 V`, r`1200 V`, r`19 V`, r`75 V`],
        correctAnswer: 1,
        explanation: r`At fixed energy V goes as 1/√C, so 1/16 of the capacitance needs √16 = 4 times the voltage: 4 × 300 V = 1200 V. 4800 V multiplies by 16, forgetting the square root. 75 V divides by 4 and 19 V divides by 16, both in the wrong direction.`,
      },
      {
        question: r`An engineer wants a new capacitor to store the same energy as the old one at only one third of the voltage. How must the new capacitance compare with the old?`,
        options: [r`3 times as large`, r`9 times as large`, r`One third as large`, r`One ninth as large`],
        correctAnswer: 1,
        explanation: r`From U = ½CV² with U fixed, C goes as 1/V², so one third of the voltage needs 3² = 9 times the capacitance. 3 times forgets that the voltage is squared. One third and one ninth go in the wrong direction: a smaller capacitor would need a higher voltage.`,
      },
      {
        question: r`At 4000 V, a 50 μF unit holds 400 J. Its 200 μF replacement is to hold exactly that 400 J too. What must the replacement's voltage be?`,
        options: [r`8000 V`, r`2000 V`, r`16,000 V`, r`1000 V`],
        correctAnswer: 1,
        explanation: r`At fixed energy V goes as 1/√C, so four times the capacitance needs half the voltage: 2000 V. Check: ½(2.0 × 10⁻⁴ F)(2000 V)² = 400 J. 1000 V divides by 4, forgetting the square root. 8000 V and 16,000 V raise the voltage instead of lowering it.`,
      },
      {
        question: r`A capacitor stores a certain energy at 1000 V. About what voltage stores the same energy in a capacitor with twice the capacitance?`,
        options: [r`About 500 V`, r`About 1410 V`, r`About 710 V`, r`About 250 V`],
        correctAnswer: 2,
        explanation: r`At fixed energy V goes as 1/√C, so twice the capacitance needs 1/√2 ≈ 0.71 of the voltage, about 710 V. 500 V halves the voltage, which would store only half the energy. 250 V divides by 4, and 1410 V multiplies by √2 instead of dividing.`,
      },
      {
        question: r`A 20 μF capacitor stores a certain energy when charged to 6.0 kV. What capacitance stores the same energy at only 2.0 kV?`,
        options: [r`2.2 μF`, r`60 μF`, r`6.7 μF`, r`180 μF`],
        correctAnswer: 3,
        explanation: r`With U fixed, C goes as 1/V². The voltage falls by a factor of 3, so the capacitance must rise by 3² = 9: 9 × 20 μF = 180 μF. 60 μF forgets to square the factor, and 6.7 μF and 2.2 μF divide by 3 and by 9, the wrong direction.`,
      },
    ],
  },
  [r`What do the unit products Ω·F, F·V and F·V² each equal?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student multiplies 2.0 × 10⁻⁵ F by (300 V)². With the right unit, what is the result?`,
        options: [r`1.8 J`, r`0.0060 J`, r`0.0060 C`, r`1.8 C`],
        correctAnswer: 0,
        explanation: r`(2.0 × 10⁻⁵)(300)² = (2.0 × 10⁻⁵)(9.0 × 10⁴) = 1.8, and F·V² is joules, so the result is 1.8 J. Coulombs would be F·V, with the voltage not squared. 0.0060 comes from forgetting to square the 300.`,
      },
      {
        question: r`A timing circuit pairs a 4.0 kΩ resistor with a 5.0 μF capacitor. A student multiplies the two values in SI units. What is the result, with its unit?`,
        options: [r`2.0 × 10⁻⁵ s`, r`0.020 C`, r`2.0 × 10⁻⁵ C`, r`0.020 s`],
        correctAnswer: 3,
        explanation: r`(4.0 × 10³ Ω)(5.0 × 10⁻⁶ F) = 0.020, and Ω·F is seconds: this is the time constant τ = RC. Coulombs come from F·V, not Ω·F. 2.0 × 10⁻⁵ comes from leaving the resistance as 4.0 instead of converting kilohms.`,
      },
      {
        question: r`A student evaluates 0.50 × (4.0 × 10⁻⁴ F) × (500 V)² ÷ (0.020 s). What is the result, with its unit?`,
        options: [r`1.0 J`, r`2500 J`, r`1.0 W`, r`2500 W`],
        correctAnswer: 3,
        explanation: r`0.50 × (4.0 × 10⁻⁴)(2.5 × 10⁵) = 50, and F·V² is joules, so the top line is 50 J. Dividing by 0.020 s gives 2500 J/s, and a joule per second is a watt: 2500 W. The result is no longer in joules once it is divided by a time, and 1.0 comes from multiplying 50 by 0.020 instead of dividing.`,
      },
      {
        question: r`Which of these products has units of coulombs and equals 0.30 C?`,
        options: [r`(1.5 × 10⁻⁴ F) × (2000 V)`, r`(1.5 × 10⁻⁴ F) × (2000 V)²`, r`(1.5 × 10⁻⁴ F) ÷ (2000 V)`, r`(1.5 × 10⁻⁴ F) × (2000 Ω)`],
        correctAnswer: 0,
        explanation: r`F·V is coulombs, from Q = CV, and (1.5 × 10⁻⁴)(2000) = 0.30, so farads times volts gives 0.30 C. Farads times ohms is seconds, here 0.30 s. Farads times volts squared is joules, here 600 J, and farads divided by volts is not a charge.`,
      },
      {
        question: r`An RC circuit has R = 100 Ω and C = 3.0 × 10⁻⁴ F, and its capacitor is charged to 200 V. Asked for the time constant, a student multiplies 3.0 × 10⁻⁴ F by 200 V. What has the student found, and what is the time constant?`,
        options: [r`A charge of 0.060 C; the time constant is 2.0 s`, r`An energy of 0.060 J; the time constant is 0.030 s`, r`A time of 0.060 s; the time constant is 0.060 s`, r`A charge of 0.060 C; the time constant is 0.030 s`],
        correctAnswer: 3,
        explanation: r`F·V is coulombs, so the student found the charge, (3.0 × 10⁻⁴ F)(200 V) = 0.060 C. Seconds come from Ω·F: τ = (100 Ω)(3.0 × 10⁻⁴ F) = 0.030 s. Joules would need F·V², the product found is not a time, and 2.0 is V/R, a current in amperes.`,
      },
      {
        question: r`A student evaluates 0.50 × (8.0 μF) × (50 V)² after converting to SI units. What is the result, with its unit?`,
        options: [r`10 mC`, r`0.20 mJ`, r`10 mJ`, r`0.20 mC`],
        correctAnswer: 2,
        explanation: r`0.50 × (8.0 × 10⁻⁶ F)(2500 V²) = 0.010, and F·V² is joules, so the result is 0.010 J = 10 mJ. Coulombs come from F·V with the voltage not squared and no ½. 0.20 comes from forgetting to square the 50.`,
      },
    ],
  },
  [r`How do you find the average power while a capacitor charges?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A unit charges its 200 μF capacitor to 1000 V in 2.0 s. What is the average power delivered to the capacitor while it charges?`,
        options: [r`100 W`, r`200 W`, r`50 W`, r`0.050 W`],
        correctAnswer: 2,
        explanation: r`U = ½CV² = ½(2.0 × 10⁻⁴ F)(1000 V)² = 100 J, and P = U/t = 100 J ÷ 2.0 s = 50 W. Leaving out the ½ gives 100 W, multiplying the energy by the time gives 200, and forgetting to square the voltage gives 0.050 W.`,
      },
      {
        question: r`A camera's charging circuit delivers an average of 9.0 W to a 1000 μF flash capacitor. How long does it take to bring the capacitor up to 300 V?`,
        options: [r`405 s`, r`0.20 s`, r`10 s`, r`5.0 s`],
        correctAnswer: 3,
        explanation: r`U = ½CV² = ½(1.0 × 10⁻³ F)(300 V)² = 45 J, and t = U/P = 45 J ÷ 9.0 W = 5.0 s. Leaving out the ½ gives 10 s, multiplying the energy by the power gives 405, and dividing the power by the energy gives 0.20.`,
      },
      {
        question: r`A charger delivers an average of 20 W for 5.0 s to a 50 μF capacitor that starts empty. What voltage does the capacitor reach?`,
        options: [r`2000 V`, r`1410 V`, r`4.0 × 10⁶ V`, r`890 V`],
        correctAnswer: 0,
        explanation: r`U = Pt = (20 W)(5.0 s) = 100 J. Then V² = 2U/C = 200 J ÷ 5.0 × 10⁻⁵ F = 4.0 × 10⁶ V², so V = 2000 V. 1410 V leaves out the factor of 2, 890 V uses 20 J by ignoring the 5.0 s, and 4.0 × 10⁶ forgets the square root.`,
      },
      {
        question: r`A charging circuit delivers an average of 40 W for 5.0 s and brings an empty capacitor up to 2000 V. What is the capacitance?`,
        options: [r`100 μF`, r`50 μF`, r`200 μF`, r`20 μF`],
        correctAnswer: 0,
        explanation: r`U = Pt = (40 W)(5.0 s) = 200 J. From U = ½CV², C = 2U/V² = 400 J ÷ 4.0 × 10⁶ V² = 1.0 × 10⁻⁴ F = 100 μF. 50 μF leaves out the factor of 2, 20 μF uses 40 J by ignoring the 5.0 s, and 200 μF doubles twice.`,
      },
      {
        question: r`Bringing a capacitor up to 1500 V in 6.0 s takes an average power of 30 W. What average power brings the same capacitor up to 3000 V in the same 6.0 s?`,
        options: [r`120 W`, r`30 W`, r`60 W`, r`15 W`],
        correctAnswer: 0,
        explanation: r`P = ½CV²/t, so with C and t unchanged the power goes as V². Doubling the final voltage needs four times the power: 4 × 30 W = 120 W. 60 W treats the energy as proportional to V, 30 W ignores the voltage, and 15 W halves instead.`,
      },
      {
        question: r`A pulsed-laser supply brings its 20 μF capacitor up to 5.0 kV in 500 ms. What is the average power delivered to the capacitor while it charges?`,
        options: [r`125 W`, r`500 W`, r`1000 W`, r`0.50 W`],
        correctAnswer: 1,
        explanation: r`U = ½(2.0 × 10⁻⁵ F)(5000 V)² = ½(2.0 × 10⁻⁵)(2.5 × 10⁷) = 250 J, and P = 250 J ÷ 0.50 s = 500 W. Dividing by 500 without converting milliseconds gives 0.50 W, multiplying 250 by 0.50 gives 125, and leaving out the ½ gives 1000 W.`,
      },
    ],
  },
  [r`What are the peak current and peak power when a charged capacitor discharges through a resistor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor bank sitting at 1200 V is suddenly joined across a 60 Ω heating coil. What are the peak current and the peak power in the coil?`,
        options: [r`20 A and 12 kW`, r`20 A and 1.2 kW`, r`20 A and 24 kW`, r`0.050 A and 24 kW`],
        correctAnswer: 2,
        explanation: r`At the first instant the full 1200 V is across the resistor: I₀ = 1200 V ÷ 60 Ω = 20 A and P₀ = V²/R = (1200 V)² ÷ 60 Ω = 24,000 W = 24 kW. 1.2 kW is I times R, which is a voltage, 12 kW wrongly adds a factor of ½, and 0.050 A divides R by V.`,
      },
      {
        question: r`A capacitor charged to 2000 V will be discharged through a resistor, and the peak current must be exactly 25 A. What resistance is needed?`,
        options: [r`80 Ω`, r`3.2 Ω`, r`50 kΩ`, r`0.013 Ω`],
        correctAnswer: 0,
        explanation: r`The peak current is I₀ = V/R, so R = V/I₀ = 2000 V ÷ 25 A = 80 Ω. 0.013 divides the current by the voltage, 50 kΩ multiplies the two, and 3.2 divides the voltage by the current squared.`,
      },
      {
        question: r`A charged capacitor is connected across a 10 Ω heater, and the largest power the heater ever receives is 9.0 kW. What was the capacitor's starting voltage?`,
        options: [r`900 V`, r`9.0 × 10⁴ V`, r`30 V`, r`300 V`],
        correctAnswer: 3,
        explanation: r`The peak power is P₀ = V²/R, so V² = P₀R = (9000 W)(10 Ω) = 9.0 × 10⁴ V² and V = 300 V. 9.0 × 10⁴ forgets the square root, 900 divides the power by the resistance, and 30 is the square root of that, which is the peak current in amperes.`,
      },
      {
        question: r`A memory-backup capacitor sitting at 9.0 V is switched onto a 3.0 kΩ load. What are the largest current and the largest power the load receives?`,
        options: [r`3.0 A and 27 W`, r`3.0 mA and 14 mW`, r`27 mA and 3.0 mW`, r`3.0 mA and 27 mW`],
        correctAnswer: 3,
        explanation: r`I₀ = V/R = 9.0 V ÷ 3000 Ω = 3.0 mA, and P₀ = V²/R = 81 V² ÷ 3000 Ω = 27 mW. 3.0 A and 27 W leave the resistance as 3.0 without converting kilohms. 14 mW wrongly adds a factor of ½, and 27 mA with 3.0 mW swaps the two numbers.`,
      },
      {
        question: r`A capacitor charged to 3000 V gives a peak current of 60 A and a peak power of 180 kW when discharged through 50 Ω. It is recharged to 3000 V and discharged through 100 Ω instead. What are the peaks now?`,
        options: [r`30 A and 45 kW`, r`60 A and 90 kW`, r`30 A and 90 kW`, r`120 A and 360 kW`],
        correctAnswer: 2,
        explanation: r`I₀ = V/R and P₀ = V²/R both go as 1/R at a fixed starting voltage, so doubling R halves both: 3000 V ÷ 100 Ω = 30 A and (3000 V)² ÷ 100 Ω = 90 kW. 45 kW quarters the power, 120 A and 360 kW double both, and 60 A leaves the current unchanged.`,
      },
      {
        question: r`A capacitor charged to 400 V is connected across an 8.0 Ω resistor. When is the power in the resistor greatest, and how large is it then?`,
        options: [r`When nearly empty, 3.2 kW`, r`At the first instant, 20 kW`, r`At the first instant, 50 W`, r`After one time constant, 20 kW`],
        correctAnswer: 1,
        explanation: r`The power peaks at the first instant, when the full 400 V is across the resistor: P₀ = V²/R = (400 V)² ÷ 8.0 Ω = 20,000 W = 20 kW. After that both voltage and power only fall. 50 is V/R, the peak current in amperes, and 3.2 kW comes from multiplying 400 by 8.0.`,
      },
    ],
  },
  [r`During a discharge, which drains faster: the capacitor's charge or its energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A discharging capacitor starts with 200 μC of charge and 50 mJ of stored energy. About what are the charge and the energy after one time constant?`,
        options: [r`About 74 μC and 7 mJ`, r`About 74 μC and 19 mJ`, r`About 126 μC and 32 mJ`, r`About 27 μC and 7 mJ`],
        correctAnswer: 0,
        explanation: r`After one time constant the charge is at 37%: 0.37 × 200 μC = 74 μC. Energy goes as Q², so it is at 0.37² ≈ 14%: 0.14 × 50 mJ ≈ 7 mJ. 19 mJ uses 37% for the energy as well, 126 μC and 32 mJ use 63% for both, and 27 μC uses 14% for the charge.`,
      },
      {
        question: r`A capacitor storing 500 J begins to discharge through a resistor. About how much energy is still stored after two time constants?`,
        options: [r`About 185 J`, r`About 70 J`, r`About 10 J`, r`About 125 J`],
        correctAnswer: 2,
        explanation: r`After two time constants the charge is at about 14%, and energy goes as Q², so the energy is at about 0.14² ≈ 2%: 0.02 × 500 J ≈ 10 J. 70 J uses 14%, the charge's fraction. 185 J uses 37%, and 125 J halves the energy twice.`,
      },
      {
        question: r`A discharging capacitor starts with 6.0 mC of charge and 12 J of stored energy. How much energy is stored at the moment its charge has fallen to 3.0 mC?`,
        options: [r`8.5 J`, r`3.0 J`, r`6.0 J`, r`1.5 J`],
        correctAnswer: 1,
        explanation: r`U = Q²/2C goes as Q², so half the charge leaves (½)² = ¼ of the energy: 12 J ÷ 4 = 3.0 J. 6.0 J assumes the energy falls in step with the charge, 1.5 J divides by eight, and 8.5 J divides by the square root of 2.`,
      },
      {
        question: r`A capacitor starts a discharge with 600 μC of charge and 90 mJ of stored energy. Later its stored energy has fallen to 10 mJ. How much charge is on it at that moment?`,
        options: [r`7.4 μC`, r`200 μC`, r`300 μC`, r`67 μC`],
        correctAnswer: 1,
        explanation: r`The energy has fallen to 1/9, and U goes as Q², so the charge has fallen to √(1/9) = 1/3: 600 μC ÷ 3 = 200 μC. 67 μC divides the charge by 9, as if it fell in step with the energy. 7.4 μC divides by 81, and 300 μC only halves the charge.`,
      },
      {
        question: r`A defibrillator's capacitor stores 200 J and discharges through a patient's chest. About how much of that energy has been delivered to the chest after one time constant?`,
        options: [r`About 74 J`, r`About 172 J`, r`About 28 J`, r`About 126 J`],
        correctAnswer: 1,
        explanation: r`After one time constant the charge is at 37% and the energy, which goes as Q², at about 14%, or 28 J. The rest has been delivered: 200 − 28 = 172 J. 126 J is 63%, the fraction of the charge that has left. 28 J is what remains, and 74 J is 37% of 200 J.`,
      },
      {
        question: r`A capacitor discharges through a resistor for two time constants. About what percentage of its starting charge and of its starting energy has left it?`,
        options: [r`86% of the charge and 86% of the energy`, r`63% of the charge and 86% of the energy`, r`86% of the charge and 98% of the energy`, r`98% of the charge and 86% of the energy`],
        correctAnswer: 2,
        explanation: r`After two time constants about 14% of the charge remains, so 86% has left. Energy goes as Q², so only about 2% remains and 98% has left: the energy drains faster. Equal percentages ignore the square, 98% and 86% swaps the two, and 63% and 86% are the values after one time constant.`,
      },
    ],
  },
  [r`How do you find the voltage a capacitor needs to store a given energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A photographer's strobe needs 36 J of energy on its 200 μF capacitor. What voltage across the capacitor provides this?`,
        options: [r`0.60 V`, r`424 V`, r`600 V`, r`3.6 × 10⁵ V`],
        correctAnswer: 2,
        explanation: r`V² = 2U/C, so V = √(72 J ÷ 2.0 × 10⁻⁴ F) = √(3.6 × 10⁵) = 600 V. 424 V leaves out the factor of 2, 3.6 × 10⁵ forgets the square root, and 0.60 V leaves the capacitance as 200 instead of converting microfarads.`,
      },
      {
        question: r`A 0.50 F supercapacitor in a bicycle light must store 25 J. What voltage does that take?`,
        options: [r`7.1 V`, r`10 V`, r`3.5 V`, r`100 V`],
        correctAnswer: 1,
        explanation: r`V² = 2U/C, so V = √(50 J ÷ 0.50 F) = √100 = 10 V. 7.1 V leaves out the factor of 2, 100 forgets the square root, and 3.5 V comes from multiplying U by C under the root instead of dividing.`,
      },
      {
        question: r`A 4.0 μF capacitor in a sensor circuit must store 8.0 μJ. What voltage does that take?`,
        options: [r`1.4 V`, r`4.0 V`, r`2.0 V`, r`2000 V`],
        correctAnswer: 2,
        explanation: r`V² = 2U/C, so V = √(16 × 10⁻⁶ J ÷ 4.0 × 10⁻⁶ F) = √4.0 = 2.0 V. 1.4 V leaves out the factor of 2, 4.0 forgets the square root, and 2000 V converts the microfarads but leaves the energy as 8.0 J.`,
      },
      {
        question: r`A 100 pF capacitor on a touch sensor stores 2.0 × 10⁻⁸ J. What is the voltage across it?`,
        options: [r`2.0 × 10⁻⁵ V`, r`14 V`, r`400 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`100 pF is 1.0 × 10⁻¹⁰ F. V² = 2U/C, so V = √(4.0 × 10⁻⁸ J ÷ 1.0 × 10⁻¹⁰ F) = √400 = 20 V. 14 V leaves out the factor of 2, 400 forgets the square root, and 2.0 × 10⁻⁵ V leaves the capacitance as 100 instead of converting picofarads.`,
      },
      {
        question: r`A defibrillator's 80 μF capacitor must store 360 J for its highest setting. What charging voltage does that take?`,
        options: [r`3.0 V`, r`9.0 × 10⁶ V`, r`2120 V`, r`3000 V`],
        correctAnswer: 3,
        explanation: r`V² = 2U/C, so V = √(720 J ÷ 8.0 × 10⁻⁵ F) = √(9.0 × 10⁶) = 3000 V. 2120 V leaves out the factor of 2, 9.0 × 10⁶ forgets the square root, and 3.0 V leaves the capacitance as 80 instead of converting microfarads.`,
      },
      {
        question: r`A capacitor bank of 1.0 mF must store 8.0 kJ for a pulsed experiment. To what voltage must the bank be charged?`,
        options: [r`4000 V`, r`126 V`, r`2830 V`, r`1.6 × 10⁷ V`],
        correctAnswer: 0,
        explanation: r`8.0 kJ is 8000 J and 1.0 mF is 1.0 × 10⁻³ F, so V = √(16,000 J ÷ 1.0 × 10⁻³ F) = √(1.6 × 10⁷) = 4000 V. 2830 V leaves out the factor of 2, 126 V leaves the energy as 8.0 without converting kilojoules, and 1.6 × 10⁷ forgets the square root.`,
      },
    ],
  },
  [r`What is the common trap when a fixed capacitor must store four times the energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`At 300 V, a strobe's one built-in capacitor holds 2.0 J. The photographer wants 8.0 J from it. What voltage is required?`,
        options: [r`600 V`, r`1200 V`, r`420 V`, r`4800 V`],
        correctAnswer: 0,
        explanation: r`Energy goes as V², so four times the energy needs √4 = 2 times the voltage: 600 V. 1200 V is the trap: four times the voltage would store sixteen times the energy, 32 J. 4800 V multiplies by sixteen, and 420 V multiplies by √2, which only doubles the energy.`,
      },
      {
        question: r`A fixed capacitor stores 5.0 J when charged to 250 V. By mistake it is charged to 1000 V. How much energy does it store?`,
        options: [r`80 J`, r`40 J`, r`20 J`, r`10 J`],
        correctAnswer: 0,
        explanation: r`Energy goes as V². Four times the voltage stores 4² = 16 times the energy: 16 × 5.0 J = 80 J. 20 J treats energy as proportional to V, which is the trap. 10 J multiplies by √4, and 40 J multiplies by eight.`,
      },
      {
        question: r`A fixed capacitor is charged to 2400 V on its top setting. A lower setting must store one quarter of the top setting's energy. What voltage does the lower setting use?`,
        options: [r`150 V`, r`600 V`, r`1200 V`, r`1700 V`],
        correctAnswer: 2,
        explanation: r`Energy goes as V², so one quarter of the energy needs √(1/4) = ½ of the voltage: 1200 V. 600 V takes one quarter of the voltage, which would store only one sixteenth of the energy. 150 V divides by sixteen, and 1700 V divides by √2.`,
      },
      {
        question: r`A fixed capacitor holds 3.0 mC of charge at its lowest energy setting. How much charge does it hold at a setting that stores four times the energy?`,
        options: [r`4.2 mC`, r`12 mC`, r`6.0 mC`, r`48 mC`],
        correctAnswer: 2,
        explanation: r`Four times the energy on a fixed capacitor needs twice the voltage, and Q = CV doubles with it: 6.0 mC. 12 mC quadruples the charge, which would go with sixteen times the energy. 48 mC multiplies by sixteen, and 4.2 mC multiplies by √2.`,
      },
      {
        question: r`A trainee wants four times the energy on a fixed capacitor and raises its voltage from 100 V to 400 V. By what factor does the stored energy overshoot the intended value?`,
        options: [r`By a factor of 16`, r`By a factor of 2`, r`By a factor of 8`, r`By a factor of 4`],
        correctAnswer: 3,
        explanation: r`Four times the voltage stores 4² = 16 times the original energy. The target was 4 times, so the result is 16 ÷ 4 = 4 times too large. 16 is the rise over the original energy, not the overshoot beyond the target; 2 and 8 do not follow from the V² rule.`,
      },
      {
        question: r`A fixed 10 μF capacitor in a lab stores 12.5 mJ when charged to 50 V. What voltage makes it store 50 mJ?`,
        options: [r`71 V`, r`800 V`, r`100 V`, r`200 V`],
        correctAnswer: 2,
        explanation: r`50 mJ is four times 12.5 mJ, and energy goes as V², so the voltage must double: 100 V. Check: ½(1.0 × 10⁻⁵ F)(100 V)² = 0.050 J. 200 V quadruples the voltage and would store 200 mJ, 71 V multiplies by √2, and 800 V multiplies by sixteen.`,
      },
    ],
  },
  [r`How does a shock's average power compare with the charging power?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator's capacitor is filled over 5.0 s at an average power of 60 W, and all of that energy is then delivered in 10 ms. What is the average power of the shock?`,
        options: [r`3.0 kW`, r`0.12 W`, r`30 W`, r`30 kW`],
        correctAnswer: 3,
        explanation: r`The same energy is delivered in 10 ms instead of 5.0 s, 1/500 of the time, so the power is 500 times larger: 500 × 60 W = 30,000 W = 30 kW. 30 W divides 5.0 by 10 without converting milliseconds, 0.12 W inverts the time ratio, and 3.0 kW is a power-of-ten slip.`,
      },
      {
        question: r`A unit fills its capacitor in 6.0 s and then delivers all of that energy in 3.0 ms. How does the average power of the shock compare with the average charging power?`,
        options: [r`18 times the charging power`, r`2.0 times the charging power`, r`1/2000 of the charging power`, r`2000 times the charging power`],
        correctAnswer: 3,
        explanation: r`The energy is the same, so the powers are in the inverse ratio of the times: 6.0 s ÷ 0.0030 s = 2000. 2.0 comes from dividing 6.0 by 3.0 without converting milliseconds, 1/2000 inverts the ratio, and 18 multiplies 6.0 by 3.0.`,
      },
      {
        question: r`A capacitor is filled over 10 s at an average power of 20 W. All of that energy is then released at an average power of 50 kW. How long does the release last?`,
        options: [r`4.0 s`, r`40 ms`, r`0.25 ms`, r`4.0 ms`],
        correctAnswer: 3,
        explanation: r`The release power is 50,000 W ÷ 20 W = 2500 times the charging power, so the release takes 1/2500 of the time: 10 s ÷ 2500 = 4.0 ms. 4.0 s leaves the power as 50 without converting kilowatts, 0.25 comes from inverting the energy and power, and 40 ms is a power-of-ten slip.`,
      },
      {
        question: r`A shock delivers its energy in 8.0 ms at an average power of 45 kW. The capacitor took 9.0 s to fill with that energy. What was the average charging power?`,
        options: [r`360 W`, r`40 W`, r`51 MW`, r`40 kW`],
        correctAnswer: 1,
        explanation: r`The energy is (45,000 W)(0.0080 s) = 360 J, and spread over 9.0 s that is 360 J ÷ 9.0 s = 40 W. 40 kW treats 8.0 ms as 8.0 s, 51 MW multiplies by the time ratio instead of dividing, and 360 is the energy in joules, not a power.`,
      },
      {
        question: r`A charger supplies an average of 25 W. The shock that follows delivers all of the stored energy in 2.0 ms at an average power of 100 kW. How long did charging take?`,
        options: [r`0.13 s`, r`8.0 ms`, r`5000 s`, r`8.0 s`],
        correctAnswer: 3,
        explanation: r`The shock power is 100,000 W ÷ 25 W = 4000 times the charging power, so charging took 4000 times as long: 4000 × 2.0 ms = 8.0 s. 8.0 ms leaves the power as 100 without converting kilowatts, 0.13 divides the charging power by the 200 J of energy, and 5000 multiplies them.`,
      },
      {
        question: r`An electric-fence energizer fills its capacitor over 1.0 s at an average power of 2.0 W, then releases all of that energy in a 0.20 ms pulse. What is the average power of the pulse?`,
        options: [r`0.40 mW`, r`2.0 W`, r`10 W`, r`10 kW`],
        correctAnswer: 3,
        explanation: r`The pulse lasts 0.20 ms, which is 1/5000 of the 1.0 s charging time, so its power is 5000 times larger: 5000 × 2.0 W = 10 kW. 10 W divides 2.0 by 0.20 without converting milliseconds, 0.40 mW multiplies the power by the pulse time, and 2.0 W assumes the power is unchanged.`,
      },
    ],
  },
  [r`What must you convert before using $Q = CV$ or $U = \tfrac12 CV^2$ with a defibrillator's capacitor?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator's capacitor is labelled 80 μF and is charged to 5000 V. How much charge does it hold?`,
        options: [r`400 C`, r`4.0 × 10⁵ C`, r`0.40 C`, r`0.20 C`],
        correctAnswer: 2,
        explanation: r`80 μF is 8.0 × 10⁻⁵ F, so Q = CV = (8.0 × 10⁻⁵ F)(5000 V) = 0.40 C. Leaving the capacitance as 80 gives 4.0 × 10⁵ C, adding a ½ that Q = CV does not have gives 0.20 C, and 400 C uses 10⁻³ instead of 10⁻⁶ for the micro- prefix.`,
      },
      {
        question: r`A 20 μF capacitor in a portable defibrillator is charged to 3000 V. How much energy does it store?`,
        options: [r`90 kJ`, r`9.0 × 10⁷ J`, r`90 J`, r`0.030 J`],
        correctAnswer: 2,
        explanation: r`20 μF is 2.0 × 10⁻⁵ F, so U = ½CV² = ½(2.0 × 10⁻⁵ F)(9.0 × 10⁶ V²) = 90 J. Leaving the capacitance as 20 gives 9.0 × 10⁷ J, using 10⁻³ for the micro- prefix gives 90 kJ, and forgetting to square the voltage gives 0.030 J.`,
      },
      {
        question: r`A defibrillator's capacitor holds 0.060 C when it is charged to 1500 V. What is its capacitance, in microfarads?`,
        options: [r`4.0 × 10⁻⁵ μF`, r`90 μF`, r`40 μF`, r`0.040 μF`],
        correctAnswer: 2,
        explanation: r`C = Q/V = 0.060 C ÷ 1500 V = 4.0 × 10⁻⁵ F, and since 1 μF = 10⁻⁶ F that is 40 μF. 4.0 × 10⁻⁵ μF is the value in farads with the wrong unit, 0.040 μF multiplies by only 1000, and 90 comes from multiplying 0.060 by 1500.`,
      },
      {
        question: r`A 750 μF capacitor is charged to 200 V. Which line of working gives its charge correctly?`,
        options: [r`(7.5 × 10⁻⁶ F)(200 V) = 0.0015 C`, r`(7.5 × 10⁻³ F)(200 V) = 1.5 C`, r`(7.5 × 10⁻⁴ F)(200 V) = 0.15 C`, r`(7.5 × 10² F)(200 V) = 1.5 × 10⁵ C`],
        correctAnswer: 2,
        explanation: r`750 μF = 750 × 10⁻⁶ F = 7.5 × 10⁻⁴ F, so Q = (7.5 × 10⁻⁴ F)(200 V) = 0.15 C. Writing 7.5 × 10⁻⁶ F forgets that 750 is already 7.5 × 10², writing 7.5 × 10⁻³ F shifts the decimal the wrong way, and 7.5 × 10² F does not convert at all.`,
      },
      {
        question: r`A defibrillator's 300 μF capacitor must store 150 J. What charging voltage does that take?`,
        options: [r`1.0 V`, r`1000 V`, r`32 V`, r`710 V`],
        correctAnswer: 1,
        explanation: r`300 μF is 3.0 × 10⁻⁴ F, and from U = ½CV², V = √(300 J ÷ 3.0 × 10⁻⁴ F) = √(1.0 × 10⁶) = 1000 V. Leaving the capacitance as 300 gives 1.0 V, leaving out the factor of 2 gives 710 V, and using 10⁻³ for the micro- prefix gives 32 V.`,
      },
      {
        question: r`For a 200 μF capacitor at 1000 V, a student puts C = 200 into U = ½CV² and gets 1.0 × 10⁸ J. What is the correct energy, and how far off is the student's value?`,
        options: [r`100 J; the student is 10⁶ times too high`, r`1.0 J; the student is 10⁸ times too high`, r`100 kJ; the student is 10³ times too high`, r`100 J; the student is 10³ times too high`],
        correctAnswer: 0,
        explanation: r`200 μF is 2.0 × 10⁻⁴ F, so U = ½(2.0 × 10⁻⁴ F)(1000 V)² = 100 J. The student skipped the factor of 10⁻⁶, so the value is 10⁶ times too high. A factor of 10³ belongs to the milli- prefix, 100 kJ uses that wrong factor, and 1.0 J is not what the corrected formula gives.`,
      },
    ],
  },
}
