import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ1`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What symbol stands for electric charge, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A capacitor data sheet says that one plate "stores 40 μC". Which line names the quantity and writes it correctly in SI units?`,
        options: [r`Charge, Q = 4.0 × 10⁻⁵ C`, r`Charge, Q = 4.0 × 10⁻⁵ A`, r`Current, I = 4.0 × 10⁻⁵ A`, r`Current, I = 4.0 × 10⁻⁵ C`],
        correctAnswer: 0,
        explanation: r`The coulomb, C, is the unit of charge, whose symbol is Q, and 40 μC = 40 × 10⁻⁶ C = 4.0 × 10⁻⁵ C. The lines with amperes or with the symbol I describe a current, which is a rate of flow of charge and not a stored amount.`,
      },
      {
        question: r`A phone battery's capacity is printed as 3 A·h (ampere-hours), a current multiplied by a time. Which quantity does an ampere-hour measure?`,
        options: [r`Current, since it contains amperes`, r`Energy, since A × s gives joules`, r`Voltage, since A × s gives volts`, r`Charge, since A × s gives coulombs`],
        correctAnswer: 3,
        explanation: r`One ampere is one coulomb per second, so a current multiplied by a time leaves coulombs: an amount of charge, Q. It is not a current, because the time has been multiplied in, and joules or volts would need energy to appear in the product.`,
      },
    ],
  },
  [r`What symbol stands for current, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A sensor reports its reading in units of C/s. Which quantity is the sensor reporting, and what is the usual name for that unit?`,
        options: [r`Charge, in coulombs`, r`Current, in amperes`, r`Voltage, in volts`, r`Energy, in joules`],
        correctAnswer: 1,
        explanation: r`A coulomb per second is a rate of flow of charge, which is current, I, and 1 C/s is called 1 ampere. Charge alone would be in C with no "per second", a volt is a joule per coulomb, and a joule is an energy.`,
      },
      {
        question: r`A heater wire carries a steady current of 3 A. Which statement says what that number means?`,
        options: [r`3 J of energy is given to every coulomb`, r`3 C of charge is stored in the wire in total`, r`1 C of charge passes each point every 3 s`, r`3 C of charge passes each point every second`],
        correctAnswer: 3,
        explanation: r`One ampere is one coulomb per second, so 3 A means 3 C passes any point of the wire each second. Joules per coulomb describes a voltage, a stored total is a charge and not a rate, and 1 C every 3 s would be only one third of an ampere.`,
      },
    ],
  },
  [r`What symbol stands for time, and what is its SI unit?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A phone charger supplies a steady 1.5 A for 20 minutes. How much charge passes through the cable?`,
        options: [r`1800 C`, r`30 C`, r`800 C`, r`108 000 C`],
        correctAnswer: 0,
        explanation: r`Convert first: 20 min = 1200 s, so ΔQ = (1.5 A)(1200 s) = 1800 C. Leaving the time in minutes gives 30 C, dividing 1200 by 1.5 gives 800 C, and converting with 3600 s (an hour, not a minute) gives 108 000 C.`,
      },
      {
        question: r`A nerve stimulator sends a steady 0.20 A through an electrode during a pulse that lasts 5.0 ms. How much charge does one pulse deliver?`,
        options: [r`1.0 C`, r`40 C`, r`0.040 C`, r`0.0010 C`],
        correctAnswer: 3,
        explanation: r`Convert first: 5.0 ms = 0.0050 s, so ΔQ = (0.20 A)(0.0050 s) = 0.0010 C. Leaving the time as 5.0 gives 1.0 C, dividing 0.20 by 0.0050 gives 40, and dividing 0.20 by 5.0 gives 0.040.`,
      },
      {
        question: r`A battery pack can supply 3600 C before it is empty. If it is drained at a steady 2.0 A, how many minutes does it last?`,
        options: [r`1800 min`, r`30 min`, r`120 min`, r`0.50 min`],
        correctAnswer: 1,
        explanation: r`Δt = ΔQ/I = (3600 C)/(2.0 A) = 1800 s, and 1800 s ÷ 60 = 30 min. The equation gives seconds, so "1800 min" forgets the last conversion. Multiplying 3600 by 2.0 before dividing by 60 gives 120, and dividing 1800 by 3600 gives 0.50.`,
      },
      {
        question: r`An electric eel's discharge moves 0.0030 C of charge at an average current of 1.5 A. How long does the discharge last?`,
        options: [r`2.0 s`, r`500 ms`, r`2.0 ms`, r`4.5 ms`],
        correctAnswer: 2,
        explanation: r`Δt = ΔQ/I = (0.0030 C)/(1.5 A) = 0.0020 s, which is 2.0 ms. "2.0 s" drops the factor of 10⁻³, 500 comes from dividing 1.5 by 0.0030, and 4.5 comes from multiplying 0.0030 by 1.5.`,
      },
      {
        question: r`In an electroplating bath, 900 C of charge passes through the solution in 15 minutes. What is the steady current?`,
        options: [r`60 A`, r`0.017 A`, r`1.0 A`, r`13 500 A`],
        correctAnswer: 2,
        explanation: r`Convert first: 15 min = 900 s, so I = ΔQ/Δt = (900 C)/(900 s) = 1.0 A. Dividing by 15 without converting gives 60 A, dividing 15 by 900 gives 0.017, and multiplying 900 by 15 gives 13 500.`,
      },
      {
        question: r`The same steady current flows for 3.0 minutes in one trial and for 90 ms in another. The charge that passes in the first trial is how many times the charge in the second?`,
        options: [r`33 times`, r`2000 times`, r`2.0 times`, r`0.033 times`],
        correctAnswer: 1,
        explanation: r`With equal currents the charges compare as the times, in the same unit: 3.0 min = 180 s and 90 ms = 0.090 s, so the ratio is 180/0.090 = 2000. Using 3.0 s for the minutes gives 33, using 90 s for the milliseconds gives 2.0, and dividing 3.0 by 90 with no conversion gives 0.033.`,
      },
    ],
  },
  [r`What is the elementary charge, $e$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A dust grain that was neutral picks up 5 extra electrons. What is the size of its net charge? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 × 10⁻¹⁹ C`, r`3.2 × 10⁻²⁰ C`, r`6.6 × 10⁻¹⁹ C`, r`8.0 × 10⁻¹⁸ C`],
        correctAnswer: 0,
        explanation: r`Charge comes in whole multiples of e, so the size is 5e = 5 × 1.6 × 10⁻¹⁹ C = 8.0 × 10⁻¹⁹ C. Dividing e by 5 gives 3.2 × 10⁻²⁰ C, adding 5 to 1.6 gives 6.6, and 8.0 × 10⁻¹⁸ C is a slip in the power of ten.`,
      },
      {
        question: r`One coulomb is about 6.25 × 10¹⁸ elementary charges. About how many elementary charges make up 2.0 C?`,
        options: [r`3.1 × 10¹⁸`, r`6.25 × 10¹⁸`, r`3.2 × 10⁻¹⁹`, r`1.25 × 10¹⁹`],
        correctAnswer: 3,
        explanation: r`Twice the charge is twice the count: 2.0 × 6.25 × 10¹⁸ = 12.5 × 10¹⁸ = 1.25 × 10¹⁹. Dividing by 2 gives 3.1 × 10¹⁸, 6.25 × 10¹⁸ is the count for only 1 C, and 3.2 × 10⁻¹⁹ is 2 times e, which is a charge and not a count.`,
      },
      {
        question: r`Four students each report the net charge they measured on a small plastic bead. Which reported value must be a mistake? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.2 × 10⁻¹⁹ C`, r`5.6 × 10⁻¹⁹ C`, r`6.4 × 10⁻¹⁹ C`, r`1.6 × 10⁻¹⁸ C`],
        correctAnswer: 1,
        explanation: r`Every charge is a whole multiple of e. Dividing by 1.6 × 10⁻¹⁹ C, 5.6 × 10⁻¹⁹ C is 3.5e, which is impossible. The other values are 2e, 4e and 10e, since 1.6 × 10⁻¹⁸ C is 16 × 10⁻¹⁹ C, so all three are whole multiples.`,
      },
      {
        question: r`An alpha particle is made of 2 protons and 2 neutrons, with no electrons. What is its net charge? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`+6.4 × 10⁻¹⁹ C`, r`+3.2 × 10⁻¹⁹ C`, r`+1.6 × 10⁻¹⁹ C`, r`+0.8 × 10⁻¹⁹ C`],
        correctAnswer: 1,
        explanation: r`Each proton carries +e and a neutron carries no charge, so the net charge is 2e = 2 × 1.6 × 10⁻¹⁹ C = 3.2 × 10⁻¹⁹ C. Counting the neutrons as charged gives 4e = 6.4 × 10⁻¹⁹ C, counting one proton gives 1.6 × 10⁻¹⁹ C, and half of e cannot exist on a free particle.`,
      },
      {
        question: r`A static shock transfers 1.0 μC of charge. About how many elementary charges is that? (1 C is about 6.25 × 10¹⁸ elementary charges)`,
        options: [r`6.25 × 10¹²`, r`6.25 × 10²⁴`, r`6.25 × 10¹⁵`, r`6.25 × 10¹⁸`],
        correctAnswer: 0,
        explanation: r`1.0 μC = 1.0 × 10⁻⁶ C, so the count is 10⁻⁶ × 6.25 × 10¹⁸ = 6.25 × 10¹². Multiplying by 10⁶ instead gives 10²⁴, treating micro as milli (10⁻³) gives 10¹⁵, and 6.25 × 10¹⁸ is the count for a whole coulomb.`,
      },
      {
        question: r`In a mass spectrometer, a metal ion is found to have a charge of +6.4 × 10⁻¹⁹ C. How many electrons did the neutral atom lose? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`4 electrons`, r`2 electrons`, r`6 electrons`, r`10 electrons`],
        correctAnswer: 0,
        explanation: r`Each lost electron leaves the atom one e more positive, so the number is (6.4 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = 4. Two comes from dividing by 3.2 × 10⁻¹⁹ C, six from reading off the 6.4 without dividing, and ten from multiplying 6.4 by 1.6.`,
      },
    ],
  },
  [r`Write current as an equation, with its unit.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A lightning stroke transfers 20 C of charge in 1.0 × 10⁻³ s. What is the average current in the stroke?`,
        options: [r`2.0 × 10⁻² A`, r`5.0 × 10⁻⁵ A`, r`2.0 × 10⁴ A`, r`2.0 × 10³ A`],
        correctAnswer: 2,
        explanation: r`I = ΔQ/Δt = (20 C)/(1.0 × 10⁻³ s) = 2.0 × 10⁴ A. Multiplying charge by time gives 2.0 × 10⁻², dividing time by charge gives 5.0 × 10⁻⁵, and 2.0 × 10³ A is a slip of one power of ten.`,
      },
      {
        question: r`A drug-delivery skin patch drives a steady current of 0.0040 A. How long must it run to pass 1.2 C of charge?`,
        options: [r`0.0048 s`, r`0.0033 s`, r`30 s`, r`300 s`],
        correctAnswer: 3,
        explanation: r`Rearranging I = ΔQ/Δt gives Δt = ΔQ/I = (1.2 C)/(0.0040 A) = 300 s. Multiplying the two numbers gives 0.0048, dividing current by charge gives 0.0033, and 30 s is a slip of one decimal place.`,
      },
      {
        question: r`A car's starter motor draws a steady 150 A for the 2.0 s it takes the engine to start. How much charge passes through the motor?`,
        options: [r`300 C`, r`75 C`, r`0.013 C`, r`152 C`],
        correctAnswer: 0,
        explanation: r`From I = ΔQ/Δt, the charge is ΔQ = I Δt = (150 A)(2.0 s) = 300 C. Dividing 150 by 2.0 gives 75, dividing 2.0 by 150 gives 0.013, and adding the two numbers gives 152.`,
      },
      {
        question: r`In a nerve-conduction test, 6.0 μC of charge passes through an electrode in 3.0 ms. What is the average current?`,
        options: [r`2.0 A`, r`2.0 μA`, r`18 nA`, r`2.0 mA`],
        correctAnswer: 3,
        explanation: r`I = ΔQ/Δt = (6.0 × 10⁻⁶)/(3.0 × 10⁻³) = 2.0 × 10⁻³ A = 2.0 mA. Ignoring both prefixes gives 2.0 A, keeping the micro but forgetting the milliseconds gives 2.0 μA, and multiplying instead of dividing gives 1.8 × 10⁻⁸ A, or 18 nA.`,
      },
      {
        question: r`Through heater X, 12 C of charge passes in 4.0 s. Through heater Y, 6.0 C passes in 8.0 s. The current in X is how many times the current in Y?`,
        options: [r`2 times`, r`0.25 times`, r`4 times`, r`0.5 times`],
        correctAnswer: 2,
        explanation: r`I = ΔQ/Δt gives 12/4.0 = 3.0 A for X and 6.0/8.0 = 0.75 A for Y, and 3.0/0.75 = 4. Comparing only the charges (or only the times) gives 2 or 0.5, and 0.25 is the ratio taken upside down.`,
      },
      {
        question: r`A counter records the total charge that has passed a point in a circuit: 2.0 C at t = 1.0 s and 14 C at t = 4.0 s, rising steadily in between. What is the current?`,
        options: [r`4.0 A`, r`3.5 A`, r`4.7 A`, r`36 A`],
        correctAnswer: 0,
        explanation: r`Current is the charge that passes divided by the time it takes: I = (14 C − 2.0 C)/(4.0 s − 1.0 s) = 12/3.0 = 4.0 A. Using 14/4.0 gives 3.5, using 14/3.0 gives 4.7, and multiplying 12 by 3.0 gives 36.`,
      },
    ],
  },
  [r`Rearrange $I = \Delta Q/\Delta t$ for the charge that passes in a time $\Delta t$.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A flashlight bulb carries a steady 0.25 A while it is switched on for 60 s. How much charge passes through the bulb?`,
        options: [r`240 C`, r`0.0042 C`, r`15 C`, r`60 C`],
        correctAnswer: 2,
        explanation: r`ΔQ = I Δt = (0.25 A)(60 s) = 15 C. Dividing 60 by 0.25 gives 240, dividing 0.25 by 60 gives 0.0042, and 60 C would need a current of a full ampere.`,
      },
      {
        question: r`An electric kettle draws a steady 8.0 A for the 2.0 minutes it takes to boil. How much charge passes through its heating element?`,
        options: [r`16 C`, r`15 C`, r`960 C`, r`0.067 C`],
        correctAnswer: 2,
        explanation: r`Convert the time: 2.0 min = 120 s, so ΔQ = I Δt = (8.0 A)(120 s) = 960 C. Leaving the time in minutes gives 16 C, dividing 120 by 8.0 gives 15, and dividing 8.0 by 120 gives 0.067.`,
      },
      {
        question: r`A patch-clamp electrode records a steady current of 2.0 × 10⁻⁹ A for 5.0 × 10⁻³ s. How much charge crosses the membrane patch?`,
        options: [r`4.0 × 10⁻⁷ C`, r`1.0 × 10⁻¹² C`, r`1.0 × 10⁻⁵ C`, r`1.0 × 10⁻¹¹ C`],
        correctAnswer: 3,
        explanation: r`ΔQ = I Δt = (2.0 × 10⁻⁹)(5.0 × 10⁻³) = 10 × 10⁻¹² = 1.0 × 10⁻¹¹ C. Dividing gives 4.0 × 10⁻⁷, forgetting that 2.0 × 5.0 = 10 adds a power of ten gives 10⁻¹², and subtracting the exponents instead of adding them gives 10⁻⁵.`,
      },
      {
        question: r`A muscle stimulator delivers 50 identical pulses. Each pulse is a steady 0.020 A lasting 0.10 s. What total charge do the 50 pulses deliver?`,
        options: [r`0.0020 C`, r`0.10 C`, r`10 C`, r`100 C`],
        correctAnswer: 1,
        explanation: r`One pulse delivers ΔQ = I Δt = (0.020 A)(0.10 s) = 0.0020 C, so 50 pulses deliver 50 × 0.0020 = 0.10 C. Stopping at one pulse gives 0.0020 C, dividing by the time instead of multiplying gives 10 C, and reading the current as 20 A gives 100 C.`,
      },
      {
        question: r`A spot welder is reset so that its current is three times as large but each weld lasts half as long. Compared with before, the charge that passes during one weld is:`,
        options: [r`6 times as much`, r`0.67 times as much`, r`3 times as much`, r`1.5 times as much`],
        correctAnswer: 3,
        explanation: r`ΔQ = I Δt, so the charge changes by 3 × ½ = 1.5. Six comes from multiplying by 2 instead of ½, 0.67 is the ratio upside down, and 3 ignores the shorter time.`,
      },
      {
        question: r`A battery charger supplies 2.0 A for the first 10 s and then 0.50 A for the next 40 s. What total charge does it supply?`,
        options: [r`40 C`, r`125 C`, r`62.5 C`, r`20 C`],
        correctAnswer: 0,
        explanation: r`Work each stage with ΔQ = I Δt: (2.0 A)(10 s) = 20 C and (0.50 A)(40 s) = 20 C, for 40 C in all. Adding the currents and the times first gives 2.5 × 50 = 125, using the plain average current of 1.25 A for 50 s gives 62.5, and 20 C is one stage only.`,
      },
    ],
  },
  [r`How many carriers make up a charge $\Delta Q$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`During an action potential, K⁺ ions carrying a total charge of 8.0 × 10⁻¹³ C leave a neuron. How many K⁺ ions leave? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`2.5 × 10⁶`, r`2.0 × 10⁻⁷`, r`5.0 × 10⁶`, r`1.3 × 10⁻³¹`],
        correctAnswer: 2,
        explanation: r`Each K⁺ carries e, so N = ΔQ/q = (8.0 × 10⁻¹³)/(1.6 × 10⁻¹⁹) = 5.0 × 10⁶. Dividing by 2e gives 2.5 × 10⁶, dividing e by the charge gives 2.0 × 10⁻⁷, and multiplying gives 1.3 × 10⁻³¹.`,
      },
      {
        question: r`In an electrolysis cell, a total charge of 9.6 × 10⁻¹⁰ C arrives at an electrode, all of it carried by Mg²⁺ ions. How many ions arrive? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`6.0 × 10⁹`, r`1.2 × 10¹⁰`, r`3.0 × 10⁹`, r`3.1 × 10⁻²⁸`],
        correctAnswer: 2,
        explanation: r`Each Mg²⁺ carries 2e = 3.2 × 10⁻¹⁹ C, so N = (9.6 × 10⁻¹⁰)/(3.2 × 10⁻¹⁹) = 3.0 × 10⁹. Dividing by e alone gives 6.0 × 10⁹, doubling that instead of halving gives 1.2 × 10¹⁰, and multiplying gives 3.1 × 10⁻²⁸.`,
      },
      {
        question: r`A detector collects 2.0 × 10¹⁰ electrons. What is the size of the total charge it has collected? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`6.4 × 10⁻⁹ C`, r`8.0 × 10⁻³⁰ C`, r`1.25 × 10²⁹ C`, r`3.2 × 10⁻⁹ C`],
        correctAnswer: 3,
        explanation: r`Rearranging N = ΔQ/q gives ΔQ = Nq = (2.0 × 10¹⁰)(1.6 × 10⁻¹⁹) = 3.2 × 10⁻⁹ C. Using 2e for an electron gives 6.4 × 10⁻⁹, dividing e by N gives 8.0 × 10⁻³⁰, and dividing N by e gives 1.25 × 10²⁹.`,
      },
      {
        question: r`A total charge of 9.6 × 10⁻¹⁶ C is carried by 2000 identical positive ions. What is the charge on each ion? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`e (1.6 × 10⁻¹⁹ C)`, r`2e (3.2 × 10⁻¹⁹ C)`, r`3e (4.8 × 10⁻¹⁹ C)`, r`4e (6.4 × 10⁻¹⁹ C)`],
        correctAnswer: 2,
        explanation: r`Rearranging N = ΔQ/q gives q = ΔQ/N = (9.6 × 10⁻¹⁶)/(2.0 × 10³) = 4.8 × 10⁻¹⁹ C, and 4.8/1.6 = 3, so each ion carries 3e. Charges of e, 2e or 4e on 2000 ions would total 3.2, 6.4 or 12.8 × 10⁻¹⁶ C instead.`,
      },
      {
        question: r`An aluminium-plating cell passes a total charge of 4.8 C, all of it carried by Al³⁺ ions. How many ions carry it? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.0 × 10¹⁹`, r`3.0 × 10¹⁹`, r`9.0 × 10¹⁹`, r`2.3 × 10⁻¹⁸`],
        correctAnswer: 0,
        explanation: r`Each Al³⁺ carries 3e = 4.8 × 10⁻¹⁹ C, so N = 4.8/(4.8 × 10⁻¹⁹) = 1.0 × 10¹⁹. Dividing by e alone gives 3.0 × 10¹⁹, multiplying that by 3 instead of dividing gives 9.0 × 10¹⁹, and multiplying the charge by 3e gives 2.3 × 10⁻¹⁸.`,
      },
      {
        question: r`A plastic comb picks up a static charge of size 3.2 nC, made up of extra electrons. How many extra electrons are on the comb? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`2.0 × 10¹⁹`, r`2.0 × 10¹⁰`, r`2.0 × 10¹³`, r`5.1 × 10⁻²⁸`],
        correctAnswer: 1,
        explanation: r`3.2 nC = 3.2 × 10⁻⁹ C, so N = ΔQ/q = (3.2 × 10⁻⁹)/(1.6 × 10⁻¹⁹) = 2.0 × 10¹⁰. Ignoring the prefix gives 2.0 × 10¹⁹, reading nano as micro (10⁻⁶) gives 2.0 × 10¹³, and multiplying gives 5.1 × 10⁻²⁸.`,
      },
    ],
  },
  [r`Which way does conventional current point?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lamp is wired to a battery. Inside the lamp's metal filament, the electrons drift from end P to end S. Which statement is correct?`,
        options: [r`Current runs S to P; P is wired to the + terminal`, r`Current runs S to P; S is wired to the + terminal`, r`Current runs P to S; S is wired to the + terminal`, r`Current runs P to S; P is wired to the + terminal`],
        correctAnswer: 1,
        explanation: r`Conventional current points opposite to the electron drift, so it runs from S to P. Current leaves the + terminal and returns to the − terminal, so the end it enters, S, is the one wired to +. The other lines either put the current along the electron drift or have current flowing toward the + terminal.`,
      },
      {
        question: r`A battery, two wires and a heater form a single loop. Which path does the conventional current follow outside the battery?`,
        options: [r`Out of the − terminal, through the heater, into the + terminal`, r`Out of both terminals, meeting in the middle of the heater`, r`Out of the + terminal, through the heater, into the − terminal`, r`Out of the + terminal, and then used up inside the heater`],
        correctAnswer: 2,
        explanation: r`Conventional current is the way positive charge would move: out of the + terminal, around the circuit, and back in at the − terminal. Leaving the − terminal is the path of the electrons, not the current. Current does not leave both terminals, and it is not used up: the same current that enters the heater leaves it.`,
      },
    ],
  },
  [r`A negative charge moves to the left. Which way does the current point?`]: {
    kind: 'concept',
    more: [
      {
        question: r`In a glowing discharge tube, negative ions are moving upward. Which of these moving charges would give a current in the same direction as those ions give?`,
        options: [r`Positive ions moving upward`, r`Electrons moving downward`, r`Protons moving upward`, r`Positive ions moving downward`],
        correctAnswer: 3,
        explanation: r`Negative charge moving up is a current pointing down, the same as positive charge moving down. Positive ions or protons moving up give a current pointing up, and electrons moving down are negative charges going the other way, which is also a current pointing up.`,
      },
      {
        question: r`A beam of Cl⁻ ions gives a current that points east. The Cl⁻ ions are then replaced by Na⁺ ions that travel the same way the Cl⁻ ions did. Which way do the ions travel, and which way does the new current point?`,
        options: [r`Ions travel west; the new current points east`, r`Ions travel west; the new current points west`, r`Ions travel east; the new current points east`, r`Ions travel east; the new current points west`],
        correctAnswer: 1,
        explanation: r`Current points opposite to the motion of negative charges, so the Cl⁻ ions must be travelling west. Positive Na⁺ ions travelling west give a current that points west, along their motion. The other choices either have the Cl⁻ ions moving along their own current or have the current of positive ions pointing against their motion.`,
      },
    ],
  },
  [r`Electrons drift slowly. Why does a lamp light the instant the switch closes?`]: {
    kind: 'concept',
    more: [
      {
        question: r`The wire between a switch and a lamp is replaced by one ten times as long, and the lamp still lights normally. How does the delay between closing the switch and the lamp lighting change?`,
        options: [r`Ten times longer: the electrons have to drift ten times as far`, r`No noticeable change: carriers all along the wire start together`, r`Ten times shorter: a longer wire holds more electrons to drift`, r`A hundred times longer: the drift time grows as length squared`],
        correctAnswer: 1,
        explanation: r`The wire is already full of charge carriers, and the electric field sets all of them moving almost at once, so no electron has to travel from the switch to the lamp. The delay is set by how fast the field is established, not by the slow drift, so a longer wire makes no noticeable difference. The other choices all assume the lamp waits for drifting electrons to arrive.`,
      },
      {
        question: r`Which picture best matches the reason a lamp lights at once when its switch is closed, even though electrons drift slowly?`,
        options: [r`An empty hose: water must run the whole length before any comes out`, r`A sprinter: one electron races from the battery to the lamp very fast`, r`A full pipe: push water in at one end and water leaves the other at once`, r`A bucket: charge collects in the lamp until there is enough to light`],
        correctAnswer: 2,
        explanation: r`A wire is like a pipe already full of water: the carriers are everywhere in it, so pushing at one place makes them all move together and current starts in the lamp at once. The empty hose and the sprinter both need something to travel from the battery to the lamp, and the bucket wrongly has charge piling up in the lamp.`,
      },
    ],
  },
  [r`In a salt solution, Na⁺ drifts one way and Cl⁻ drifts the other. Do their currents cancel?`]: {
    kind: 'calc',
    more: [
      {
        question: r`In a battery's electrolyte, each second positive ions carrying a total of +0.40 C move toward the cathode, while negative ions carrying a total of −0.25 C move away from it. What is the current in the electrolyte?`,
        options: [r`0.15 A toward the cathode`, r`0.65 A away from the cathode`, r`0.65 A toward the cathode`, r`0.15 A away from the cathode`],
        correctAnswer: 2,
        explanation: r`Negative charge moving away from the cathode counts as current toward it, so the two flows add: 0.40 + 0.25 = 0.65 A toward the cathode. Subtracting them gives 0.15 A, which wrongly treats the opposite motions as cancelling, and current points the way the positive ions move, not away from the cathode.`,
      },
      {
        question: r`The current in a tube of saline is 8 mA, pointing east. Na⁺ ions drifting east supply 5 mA of it. What do the Cl⁻ ions supply, and which way do they drift?`,
        options: [r`3 mA, by drifting east`, r`3 mA, by drifting west`, r`13 mA, by drifting west`, r`13 mA, by drifting east`],
        correctAnswer: 1,
        explanation: r`The two ion currents add to the total, so the Cl⁻ ions supply 8 − 5 = 3 mA of eastward current. Negative ions give eastward current by drifting west. Thirteen comes from adding 8 and 5, and Cl⁻ drifting east would give current to the west, which would subtract.`,
      },
      {
        question: r`In a plasma tube, each second positive ions carrying +2 C cross a marked plane moving upward, and electrons carrying −6 C cross it moving downward. What is the current through the plane?`,
        options: [r`8 A upward`, r`4 A upward`, r`4 A downward`, r`8 A downward`],
        correctAnswer: 0,
        explanation: r`Electrons moving down are current pointing up, so both flows are upward current and they add: 2 + 6 = 8 A upward. The 4 A answers subtract the flows as if they cancelled, and "downward" follows the electrons instead of the current.`,
      },
      {
        question: r`In a KCl solution, each second K⁺ ions carrying a total of +0.5 C drift north and Cl⁻ ions carrying a total of −0.5 C drift south. A student claims the equal and opposite flows cancel. What is the current?`,
        options: [r`0 A overall`, r`1 A north`, r`1 A south`, r`0.5 A north`],
        correctAnswer: 1,
        explanation: r`Negative charge drifting south is current to the north, just like positive charge drifting north, so the flows add: 0.5 + 0.5 = 1 A north. Zero treats opposite motions as cancelling, 0.5 A counts only the K⁺ ions, and "south" follows the negative ions instead of the current.`,
      },
      {
        question: r`A salt solution is pumped along a pipe, so that each second ions carrying +5 C and ions carrying −3 C are BOTH swept to the right past a sensor. What current does the sensor record?`,
        options: [r`2 A to the right`, r`8 A to the right`, r`2 A to the left`, r`8 A to the left`],
        correctAnswer: 0,
        explanation: r`Here the negative ions move the same way as the positive ions, so their current points left and subtracts: 5 − 3 = 2 A to the right. Adding to get 8 A is right only when the two kinds of ion move in opposite directions. The larger, positive flow sets the direction, so the current is not to the left.`,
      },
      {
        question: r`In a salt-water cell, each second 2.0 × 10¹⁸ Na⁺ ions drift to the right and 2.0 × 10¹⁸ Cl⁻ ions drift to the left. What is the current? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`0.32 A to the right`, r`0.64 A to the right`, r`0.64 A to the left`, r`0.32 A to the left`],
        correctAnswer: 1,
        explanation: r`Each kind of ion carries (2.0 × 10¹⁸)(1.6 × 10⁻¹⁹) = 0.32 C each second, and both flows are current to the right, so they add to 0.64 A to the right. Stopping at 0.32 A counts only one kind of ion, and "to the left" follows the Cl⁻ ions instead of the current.`,
      },
    ],
  },
  [r`How does heating change conduction in a metal, and in an electrolyte solution?`]: {
    kind: 'concept',
    more: [
      {
        question: r`Two unlabelled samples are each kept at a fixed voltage. One is a coil of copper wire and the other is a KCl solution. On warming, the current in sample 1 falls and the current in sample 2 rises. Which line identifies the copper correctly?`,
        options: [r`Sample 2 is copper: hot metals conduct better`, r`Sample 1 is copper: hot metals conduct better`, r`Sample 1 is copper: hot metals conduct worse`, r`Sample 2 is copper: hot metals conduct worse`],
        correctAnswer: 2,
        explanation: r`A metal conducts worse when hot, so at a fixed voltage its current falls: sample 1 is the copper. An electrolyte conducts better when warm because its ions move faster, which is the rising current of sample 2. The lines saying hot metals conduct better are wrong, and a sample whose current rose cannot be one that conducts worse.`,
      },
      {
        question: r`On a warm day a sea-water conductivity probe reads higher than on a cold day, although the salt content is the same. On the same warm day the resistance of a platinum wire thermometer is also higher. Which line explains both readings?`,
        options: [r`Warm ions move faster; a hot metal conducts worse`, r`Warm ions move slower; a hot metal conducts worse`, r`Warm ions move faster; a hot metal conducts better`, r`Warm ions move slower; a hot metal conducts better`],
        correctAnswer: 0,
        explanation: r`An electrolyte conducts better when warm because its ions move faster, which raises the probe's reading. A metal conducts worse when hot, which is what a higher resistance means. Slower ions would lower the conductivity, and a metal that conducted better would show a lower resistance.`,
      },
    ],
  },
  [r`What is the first step in any charge-counting problem?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A small fan motor carries a steady 250 mA for 4.0 s. How much charge passes through the motor?`,
        options: [r`1000 C`, r`0.063 C`, r`63 C`, r`1.0 C`],
        correctAnswer: 3,
        explanation: r`Convert first: 250 mA = 0.250 A, so ΔQ = (0.250 A)(4.0 s) = 1.0 C. Leaving the current as 250 gives 1000 C, dividing 0.250 by 4.0 gives 0.063, and dividing 250 by 4.0 gives 63.`,
      },
      {
        question: r`In dim light, a photodiode in a light meter passes a steady 4 pA for 5 ms. How much charge passes through it?`,
        options: [r`2 × 10⁻¹¹ C`, r`2 × 10⁻² C`, r`2 × 10⁻¹⁴ C`, r`20 C`],
        correctAnswer: 2,
        explanation: r`Convert both: 4 pA = 4 × 10⁻¹² A and 5 ms = 5 × 10⁻³ s, so ΔQ = (4 × 10⁻¹²)(5 × 10⁻³) = 20 × 10⁻¹⁵ = 2 × 10⁻¹⁴ C. Converting only the current gives 2 × 10⁻¹¹ C, converting only the time gives 2 × 10⁻² C, and converting neither gives 20 C.`,
      },
      {
        question: r`A camera flash tube passes 0.030 C of charge in 6.0 ms. What is the average current in the tube?`,
        options: [r`0.0050 A`, r`0.20 A`, r`1.8 × 10⁻⁴ A`, r`5.0 A`],
        correctAnswer: 3,
        explanation: r`Convert first: 6.0 ms = 6.0 × 10⁻³ s, so I = (0.030 C)/(6.0 × 10⁻³ s) = 5.0 A. Dividing by 6.0 without converting gives 0.0050 A, dividing the time by the charge gives 0.20, and multiplying the two gives 1.8 × 10⁻⁴.`,
      },
      {
        question: r`A skin electrode passes 0.60 C of charge at a steady rate over 5.0 minutes. What is the current, in milliamperes?`,
        options: [r`120 mA`, r`0.0020 mA`, r`2.0 mA`, r`3000 mA`],
        correctAnswer: 2,
        explanation: r`Convert first: 5.0 min = 300 s, so I = (0.60 C)/(300 s) = 0.0020 A, which is 2.0 mA. Dividing by 5.0 minutes gives 0.12 A, or 120 mA. "0.0020 mA" is the right number of amperes with the wrong unit attached, and 3000 comes from multiplying 0.60 by 5.0 and then by 1000.`,
      },
      {
        question: r`A radiation sensor must collect 3.0 × 10⁻⁹ C of charge, and it does so at a steady current of 6.0 pA. How long does this take?`,
        options: [r`0.50 s`, r`500 s`, r`5.0 × 10⁻¹⁰ s`, r`1.8 × 10⁻²⁰ s`],
        correctAnswer: 1,
        explanation: r`Convert first: 6.0 pA = 6.0 × 10⁻¹² A, so Δt = ΔQ/I = (3.0 × 10⁻⁹)/(6.0 × 10⁻¹²) = 0.50 × 10³ = 500 s. Reading pico as nano (10⁻⁹) gives 0.50 s, dividing by 6.0 with no conversion gives 5.0 × 10⁻¹⁰, and multiplying gives 1.8 × 10⁻²⁰.`,
      },
      {
        question: r`A stimulating electrode carries 2 mA, and a single ion channel carries 500 pA. The electrode's current is how many times the channel's current?`,
        options: [r`4 × 10⁶ times`, r`4 × 10³ times`, r`4 × 10⁻³ times`, r`4 × 10⁹ times`],
        correctAnswer: 0,
        explanation: r`In base units the currents are 2 × 10⁻³ A and 500 × 10⁻¹² A = 5 × 10⁻¹⁰ A, so the ratio is (2 × 10⁻³)/(5 × 10⁻¹⁰) = 4 × 10⁶. Dividing 2 by 500 with no conversion gives 4 × 10⁻³, reading pico as nano gives 4 × 10³, and 4 × 10⁹ treats the electrode's current as 2 A.`,
      },
    ],
  },
  [r`Which equation turns a current and a time into a charge?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A laptop charger supplies a steady 3.0 A for 90 s. How much charge does it supply in that time?`,
        options: [r`270 C`, r`30 C`, r`0.033 C`, r`93 C`],
        correctAnswer: 0,
        explanation: r`A current and a time give a charge through ΔQ = I Δt = (3.0 A)(90 s) = 270 C. Dividing 90 by 3.0 gives 30, dividing 3.0 by 90 gives 0.033, and adding the two gives 93.`,
      },
      {
        question: r`A hearing-aid cell supplies a steady 0.80 mA for 500 s. How much charge leaves the cell in that time?`,
        options: [r`400 C`, r`0.40 C`, r`625 C`, r`1.6 × 10⁻⁶ C`],
        correctAnswer: 1,
        explanation: r`ΔQ = I Δt = (0.80 × 10⁻³)(500) = 0.40 C. Leaving the current as 0.80 gives 400 C, dividing 500 by 0.80 gives 625, and dividing the current by the time gives 1.6 × 10⁻⁶.`,
      },
      {
        question: r`A surgical cautery tip carries 0.50 A in bursts that each last 20 ms. How much charge passes during one burst?`,
        options: [r`10 C`, r`0.010 C`, r`25 C`, r`0.040 C`],
        correctAnswer: 1,
        explanation: r`ΔQ = I Δt = (0.50 A)(20 × 10⁻³ s) = 0.010 C. Leaving the time as 20 gives 10 C, dividing 0.50 by 0.020 gives 25, and dividing 0.020 by 0.50 gives 0.040.`,
      },
      {
        question: r`A fast charger must put 720 C of charge into a phone battery in 4.0 minutes. What steady current does this need?`,
        options: [r`180 A`, r`0.33 A`, r`3.0 A`, r`2880 A`],
        correctAnswer: 2,
        explanation: r`ΔQ = I Δt with Δt = 4.0 min = 240 s gives I = ΔQ/Δt = (720 C)/(240 s) = 3.0 A. Dividing by 4.0 without converting gives 180, dividing 240 by 720 gives 0.33, and multiplying 720 by 4.0 gives 2880.`,
      },
      {
        question: r`A defibrillator delivers 0.15 C of charge at an average current of 30 A. How long does the shock last?`,
        options: [r`5.0 ms`, r`4.5 s`, r`200 s`, r`0.50 ms`],
        correctAnswer: 0,
        explanation: r`ΔQ = I Δt gives Δt = ΔQ/I = (0.15 C)/(30 A) = 0.0050 s, which is 5.0 ms. Multiplying the two gives 4.5, dividing 30 by 0.15 gives 200, and 0.50 ms is a slip of one decimal place.`,
      },
      {
        question: r`Lamp X carries 2.0 A for 30 s. Lamp Y carries 0.50 A for 4.0 minutes. The charge through Y is how many times the charge through X?`,
        options: [r`2 times`, r`0.5 times`, r`0.033 times`, r`8 times`],
        correctAnswer: 0,
        explanation: r`ΔQ = I Δt gives (2.0 A)(30 s) = 60 C for X and (0.50 A)(240 s) = 120 C for Y, so Y passes 2 times as much. The upside-down ratio is 0.5, leaving 4.0 minutes unconverted gives 2.0/60 = 0.033, and 8 compares the times alone (240/30) and ignores the currents.`,
      },
    ],
  },
  [r`Which equation turns a charge into a number of carriers?`]: {
    kind: 'calc',
    more: [
      {
        question: r`One pulse in a Geiger counter tube moves 4.8 × 10⁻¹¹ C of charge, all carried by electrons. How many electrons is that? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.0 × 10⁸`, r`1.5 × 10⁸`, r`3.3 × 10⁻⁹`, r`7.7 × 10⁻³⁰`],
        correctAnswer: 0,
        explanation: r`N = ΔQ/q = (4.8 × 10⁻¹¹)/(1.6 × 10⁻¹⁹) = 3.0 × 10⁸. Dividing by 2e gives 1.5 × 10⁸, dividing e by the charge gives 3.3 × 10⁻⁹, and multiplying gives 7.7 × 10⁻³⁰. A count of particles can never be far below one.`,
      },
      {
        question: r`A charge of 1.6 × 10⁻¹⁴ C enters a nerve terminal, all of it carried by Ca²⁺ ions. How many Ca²⁺ ions enter? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.0 × 10⁵`, r`2.0 × 10⁵`, r`5.1 × 10⁻³³`, r`5.0 × 10⁴`],
        correctAnswer: 3,
        explanation: r`Each Ca²⁺ carries 2e = 3.2 × 10⁻¹⁹ C, so N = ΔQ/q = (1.6 × 10⁻¹⁴)/(3.2 × 10⁻¹⁹) = 5.0 × 10⁴. Dividing by e gives 1.0 × 10⁵, doubling that instead of halving gives 2.0 × 10⁵, and multiplying gives 5.1 × 10⁻³³.`,
      },
      {
        question: r`The electron beam in an X-ray tube is a current of 0.80 A. During a 2.0 s exposure, how many electrons hit the target? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`5.0 × 10¹⁸`, r`2.5 × 10¹⁸`, r`1.0 × 10¹⁹`, r`2.6 × 10⁻¹⁹`],
        correctAnswer: 2,
        explanation: r`The charge is ΔQ = (0.80 A)(2.0 s) = 1.6 C, so N = ΔQ/q = 1.6/(1.6 × 10⁻¹⁹) = 1.0 × 10¹⁹. Leaving out the time gives 5.0 × 10¹⁸, dividing by the time gives 2.5 × 10¹⁸, and multiplying the charge by e gives 2.6 × 10⁻¹⁹.`,
      },
      {
        question: r`During a nerve impulse, 5.0 × 10⁵ Na⁺ ions enter one segment of an axon. How much charge do they carry in? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 × 10⁻¹⁴ C`, r`1.6 × 10⁻¹³ C`, r`3.2 × 10⁻²⁵ C`, r`3.1 × 10²⁴ C`],
        correctAnswer: 0,
        explanation: r`N = ΔQ/q rearranges to ΔQ = Nq = (5.0 × 10⁵)(1.6 × 10⁻¹⁹) = 8.0 × 10⁻¹⁴ C. Using 2e for Na⁺ gives 1.6 × 10⁻¹³, dividing e by N gives 3.2 × 10⁻²⁵, and dividing N by e gives 3.1 × 10²⁴.`,
      },
      {
        question: r`A charge of size 4.0 pC crosses a patch of membrane, all of it carried by Cl⁻ ions. How many ions cross? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`2.5 × 10⁷`, r`2.5 × 10¹⁹`, r`2.5 × 10¹⁰`, r`1.25 × 10⁷`],
        correctAnswer: 0,
        explanation: r`4.0 pC = 4.0 × 10⁻¹² C and each Cl⁻ carries a charge of size e, so N = (4.0 × 10⁻¹²)/(1.6 × 10⁻¹⁹) = 2.5 × 10⁷. Ignoring the prefix gives 2.5 × 10¹⁹, reading pico as nano gives 2.5 × 10¹⁰, and dividing by 2e gives 1.25 × 10⁷.`,
      },
      {
        question: r`Two metal spheres carry extra electrons: sphere X has a charge of size 3.2 × 10⁻⁹ C and sphere Y has a charge of size 1.6 × 10⁻¹² C. X holds how many times as many extra electrons as Y?`,
        options: [r`2 times`, r`2000 times`, r`0.0005 times`, r`200 times`],
        correctAnswer: 1,
        explanation: r`N = ΔQ/q with the same q for both, so the counts compare as the charges: (3.2 × 10⁻⁹)/(1.6 × 10⁻¹²) = 2.0 × 10³ = 2000. Ignoring the powers of ten gives 2, the ratio upside down is 0.0005, and 200 is a slip of one power of ten.`,
      },
    ],
  },
  [r`What is the charge on one electron, one K⁺ ion and one Ca²⁺ ion?`]: {
    kind: 'calc',
    more: [
      {
        question: r`During one opening of a channel, 50 Ca²⁺ ions enter a cell. How much charge enters? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 × 10⁻¹⁸ C`, r`6.4 × 10⁻²¹ C`, r`3.2 × 10⁻¹⁹ C`, r`1.6 × 10⁻¹⁷ C`],
        correctAnswer: 3,
        explanation: r`Each Ca²⁺ carries 2e = 3.2 × 10⁻¹⁹ C, so 50 ions carry 50 × 3.2 × 10⁻¹⁹ = 1.6 × 10⁻¹⁷ C. Using e for each ion gives 8.0 × 10⁻¹⁸ C, dividing 2e by 50 gives 6.4 × 10⁻²¹ C, and 3.2 × 10⁻¹⁹ C is the charge on just one ion.`,
      },
      {
        question: r`In a short interval, 400 K⁺ ions leave a cell while 100 Ca²⁺ ions enter it. What net positive charge leaves the cell? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`4.8 × 10⁻¹⁷ C`, r`9.6 × 10⁻¹⁷ C`, r`8.0 × 10⁻¹⁷ C`, r`3.2 × 10⁻¹⁷ C`],
        correctAnswer: 3,
        explanation: r`The K⁺ ions take out 400e and the Ca²⁺ ions bring in 100 × 2e = 200e, so the net charge leaving is 200e = 200 × 1.6 × 10⁻¹⁹ = 3.2 × 10⁻¹⁷ C. Counting each Ca²⁺ as e gives 300e = 4.8 × 10⁻¹⁷ C, adding instead of subtracting gives 600e = 9.6 × 10⁻¹⁷ C, and doing both gives 500e = 8.0 × 10⁻¹⁷ C.`,
      },
      {
        question: r`A tiny droplet holds 6 K⁺ ions, 2 Ca²⁺ ions and 4 extra electrons, and is otherwise neutral. What is its net charge? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`+9.6 × 10⁻¹⁹ C`, r`+6.4 × 10⁻¹⁹ C`, r`+1.6 × 10⁻¹⁸ C`, r`+2.2 × 10⁻¹⁸ C`],
        correctAnswer: 0,
        explanation: r`In units of e the charges are 6(+1) + 2(+2) + 4(−1) = +6, and 6 × 1.6 × 10⁻¹⁹ C = 9.6 × 10⁻¹⁹ C. Counting each Ca²⁺ as +e gives +4e = 6.4 × 10⁻¹⁹ C, leaving out the electrons gives +10e = 1.6 × 10⁻¹⁸ C, and adding the electrons as if positive gives 14e = 2.2 × 10⁻¹⁸ C.`,
      },
      {
        question: r`A group of K⁺ ions carries a total charge of 8.0 × 10⁻¹⁸ C. How many ions are in the group? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`25 ions`, r`50 ions`, r`100 ions`, r`5 ions`],
        correctAnswer: 1,
        explanation: r`Each K⁺ carries e = 1.6 × 10⁻¹⁹ C, so the number is (8.0 × 10⁻¹⁸)/(1.6 × 10⁻¹⁹) = 50. Using 2e, the charge on a Ca²⁺ ion, gives 25. Halving the charge per ion instead gives 100, and 5 is a slip in the powers of ten.`,
      },
      {
        question: r`About 1.0 × 10⁶ Ca²⁺ ions are released into a muscle fibre. How much charge do they carry? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.6 × 10⁻¹³ C`, r`3.2 × 10⁻¹³ C`, r`3.2 × 10⁻²⁵ C`, r`3.2 × 10⁻¹² C`],
        correctAnswer: 1,
        explanation: r`Each Ca²⁺ carries 2e = 3.2 × 10⁻¹⁹ C, so the total is (1.0 × 10⁶)(3.2 × 10⁻¹⁹) = 3.2 × 10⁻¹³ C. Using e for each ion gives 1.6 × 10⁻¹³ C, dividing by 10⁶ instead of multiplying gives 3.2 × 10⁻²⁵ C, and 3.2 × 10⁻¹² C is a slip of one power of ten.`,
      },
      {
        question: r`Group X is 300 Ca²⁺ ions and group Y is 200 K⁺ ions. The total charge of group X is how many times the total charge of group Y?`,
        options: [r`1.5 times`, r`0.75 times`, r`0.33 times`, r`3 times`],
        correctAnswer: 3,
        explanation: r`Each Ca²⁺ carries 2e and each K⁺ carries e, so X carries 600e and Y carries 200e: a ratio of 3. Comparing only the numbers of ions gives 1.5, giving the 2e to K⁺ instead gives 300/400 = 0.75, and 0.33 is the ratio upside down.`,
      },
    ],
  },
  [r`The same current is carried by Ca²⁺ instead of K⁺. How does the number of ions change?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A K⁺ channel passes 6.0 × 10⁶ ions each second. A Ca²⁺ channel that carries the same current passes how many ions each second?`,
        options: [r`3.0 × 10⁶`, r`1.2 × 10⁷`, r`6.0 × 10⁶`, r`1.5 × 10⁶`],
        correctAnswer: 0,
        explanation: r`Each Ca²⁺ carries 2e, twice the charge of a K⁺, so the same current needs half as many ions: 3.0 × 10⁶ per second. Doubling instead gives 1.2 × 10⁷, 6.0 × 10⁶ ignores the double charge, and 1.5 × 10⁶ halves twice.`,
      },
      {
        question: r`A charge of 3.2 × 10⁻¹² C must cross a membrane. How many ions does that take if K⁺ carries it, and how many if Ca²⁺ carries it? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.0 × 10⁷ K⁺ or 2.0 × 10⁷ Ca²⁺`, r`2.0 × 10⁷ K⁺ or 2.0 × 10⁷ Ca²⁺`, r`2.0 × 10⁷ K⁺ or 1.0 × 10⁷ Ca²⁺`, r`2.0 × 10⁷ K⁺ or 4.0 × 10⁷ Ca²⁺`],
        correctAnswer: 2,
        explanation: r`For K⁺, N = ΔQ/e = (3.2 × 10⁻¹²)/(1.6 × 10⁻¹⁹) = 2.0 × 10⁷. For Ca²⁺, N = ΔQ/2e, which is half as many: 1.0 × 10⁷. The other choices swap the two, ignore the double charge, or double the number when it should halve.`,
      },
      {
        question: r`A K⁺ channel carries a current of 2.0 pA. A Ca²⁺ channel lets through the SAME NUMBER of ions each second. What current does the Ca²⁺ channel carry?`,
        options: [r`1.0 pA`, r`2.0 pA`, r`8.0 pA`, r`4.0 pA`],
        correctAnswer: 3,
        explanation: r`Each Ca²⁺ carries 2e, so the same number of ions per second moves twice the charge per second: 2 × 2.0 pA = 4.0 pA. Halving gives 1.0 pA, which mixes this up with the case of equal currents, 2.0 pA ignores the double charge, and 8.0 pA doubles twice.`,
      },
      {
        question: r`A steady Ca²⁺ current sends 500 ions through a channel in 1.0 ms. If an equal current were carried by K⁺ ions, how long would it take for 500 K⁺ ions to pass?`,
        options: [r`0.50 ms`, r`2.0 ms`, r`1.0 ms`, r`0.25 ms`],
        correctAnswer: 0,
        explanation: r`In 1.0 ms the current moves 500 × 2e = 1000e of charge, which is 1000 K⁺ ions, so 500 K⁺ ions pass in half the time: 0.50 ms. Doubling the time gives 2.0 ms, 1.0 ms ignores the double charge on Ca²⁺, and 0.25 ms halves twice.`,
      },
      {
        question: r`In a plating cell, a fixed current is first carried by Ag⁺ ions, with 9.0 × 10²⁰ ions arriving each minute. If the same current is carried by Al³⁺ ions instead, how many ions arrive each minute?`,
        options: [r`2.7 × 10²¹`, r`9.0 × 10²⁰`, r`4.5 × 10²⁰`, r`3.0 × 10²⁰`],
        correctAnswer: 3,
        explanation: r`The charge each minute is fixed, and N = ΔQ/q. Each Al³⁺ carries 3e, three times the charge of Ag⁺, so one third as many ions are needed: 3.0 × 10²⁰. Multiplying by 3 gives 2.7 × 10²¹, 9.0 × 10²⁰ ignores the ion's charge, and 4.5 × 10²⁰ would be right for a 2+ ion.`,
      },
      {
        question: r`A current is carried by K⁺ ions at a rate of 1200 ions per millisecond. A second current, twice as large, is carried by Ca²⁺ ions. How many Ca²⁺ ions pass per millisecond?`,
        options: [r`1200`, r`600`, r`2400`, r`4800`],
        correctAnswer: 0,
        explanation: r`Twice the current is 2400e of charge per millisecond, and each Ca²⁺ carries 2e, so N = 2400e/2e = 1200. The doubled current and the double charge cancel. 600 forgets the doubled current, 2400 forgets the double charge, and 4800 multiplies by 2 twice.`,
      },
    ],
  },
  [r`Your last line is in coulombs, but the question asks "how many electrons?" What is missing?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A student correctly finds that 4.0 × 10⁻³ C of charge passes through an LED, but the question asks how many electrons pass. What is the final answer? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`4.0 × 10⁻³ electrons`, r`6.4 × 10⁻²² electrons`, r`2.5 × 10¹⁶ electrons`, r`4.0 × 10⁻¹⁷ electrons`],
        correctAnswer: 2,
        explanation: r`Divide the charge by the charge on one electron: (4.0 × 10⁻³)/(1.6 × 10⁻¹⁹) = 2.5 × 10¹⁶. Leaving 4.0 × 10⁻³ just relabels coulombs as a count, multiplying gives 6.4 × 10⁻²², and dividing e by the charge gives 4.0 × 10⁻¹⁷.`,
      },
      {
        question: r`A student's working ends with the line ΔQ = (2.0 A)(4.0 s) = 8.0 C, but the question asks for the number of electrons that passed. What should the answer be? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 electrons`, r`1.3 × 10⁻¹⁸ electrons`, r`2.0 × 10⁻²⁰ electrons`, r`5.0 × 10¹⁹ electrons`],
        correctAnswer: 3,
        explanation: r`Coulombs are an amount of charge, so divide by the charge on one electron: 8.0/(1.6 × 10⁻¹⁹) = 5.0 × 10¹⁹. Copying the 8.0 treats coulombs as a count, multiplying gives 1.3 × 10⁻¹⁸, and dividing e by the charge gives 2.0 × 10⁻²⁰.`,
      },
      {
        question: r`A calculation of the charge entering a heart cell ends at 6.4 × 10⁻¹³ C, all carried by Ca²⁺. The question asks how many Ca²⁺ ions entered. What is the answer? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`4.0 × 10⁶ ions`, r`6.4 × 10⁻¹³ ions`, r`2.0 × 10⁶ ions`, r`2.0 × 10⁻³¹ ions`],
        correctAnswer: 2,
        explanation: r`Divide by the charge on one carrier, which for Ca²⁺ is 2e = 3.2 × 10⁻¹⁹ C: (6.4 × 10⁻¹³)/(3.2 × 10⁻¹⁹) = 2.0 × 10⁶. Dividing by e alone gives 4.0 × 10⁶, 6.4 × 10⁻¹³ is still the charge in coulombs, and multiplying gives 2.0 × 10⁻³¹.`,
      },
      {
        question: r`An answer key gives 5.0 × 10¹² electrons. A student did everything correctly but stopped one step early, at the charge. What was the student's last line? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`8.0 × 10⁻⁷ C`, r`3.1 × 10³¹ C`, r`5.0 × 10¹² C`, r`3.2 × 10⁻³² C`],
        correctAnswer: 0,
        explanation: r`The missing step is dividing the charge by e, so the charge was Ne = (5.0 × 10¹²)(1.6 × 10⁻¹⁹) = 8.0 × 10⁻⁷ C. Dividing N by e gives 3.1 × 10³¹, 5.0 × 10¹² is the count itself, and dividing e by N gives 3.2 × 10⁻³².`,
      },
      {
        question: r`A student works out that a capacitor plate holds 16 μC of extra charge, all of it electrons. The question asks how many extra electrons are on the plate. What is the answer? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.0 × 10²⁰ electrons`, r`1.0 × 10¹⁷ electrons`, r`1.0 × 10¹⁴ electrons`, r`2.6 × 10⁻²⁴ electrons`],
        correctAnswer: 2,
        explanation: r`16 μC = 16 × 10⁻⁶ C, and dividing by the charge on one electron gives (16 × 10⁻⁶)/(1.6 × 10⁻¹⁹) = 1.0 × 10¹⁴. Ignoring the prefix gives 1.0 × 10²⁰, reading micro as milli gives 1.0 × 10¹⁷, and multiplying by e gives 2.6 × 10⁻²⁴.`,
      },
      {
        question: r`In one proton-therapy pulse, the beam delivers 3.2 × 10⁻⁸ C of charge to a tumour. The treatment record must state the number of protons. What is it? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`1.0 × 10¹¹ protons`, r`2.0 × 10¹¹ protons`, r`5.1 × 10⁻²⁷ protons`, r`5.0 × 10⁻¹² protons`],
        correctAnswer: 1,
        explanation: r`Each proton carries e, so the count is (3.2 × 10⁻⁸)/(1.6 × 10⁻¹⁹) = 2.0 × 10¹¹. Dividing by 2e gives 1.0 × 10¹¹, multiplying gives 5.1 × 10⁻²⁷, and dividing e by the charge gives 5.0 × 10⁻¹².`,
      },
    ],
  },
  [r`What symbol stands for voltage (potential difference), and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A cell is labelled 1.5 V. Which statement says what that label means?`,
        options: [r`Each second, 1.5 C of charge passes through`, r`Each coulomb that passes through gains 1.5 J`, r`Each joule it supplies moves 1.5 C of charge`, r`The cell stores 1.5 J of energy altogether`],
        correctAnswer: 1,
        explanation: r`One volt is one joule per coulomb, so 1.5 V means every coulomb passing through the cell is given 1.5 J. Coulombs per second is a current, 1.5 C per joule is the unit upside down, and a total in joules is an energy, not a voltage.`,
      },
      {
        question: r`Point P in a circuit is at a potential of 9 V and point S is at 6 V. Which line records the potential difference between them with a correct symbol and unit?`,
        options: [r`ΔV = 15 V, a difference in potential`, r`ΔV = 3 J, a difference in energy`, r`ΔI = 3 A, a difference in current`, r`ΔV = 3 V, a difference in potential`],
        correctAnswer: 3,
        explanation: r`A difference between the potentials at two points is written ΔV and measured in volts: 9 V − 6 V = 3 V. Adding the two potentials gives 15 V, which is not a difference. Joules measure energy and amperes measure current, so neither can label a potential difference.`,
      },
    ],
  },
  [r`What symbols stand for energy (work) and potential energy, and what is the SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student writes "W = 12 __" for the energy a battery delivers to a lamp. Which unit completes the line, and what does W stand for here?`,
        options: [r`W; W is the power in watts`, r`J; W is the energy delivered`, r`V; W is the working voltage`, r`C; W is the charge delivered`],
        correctAnswer: 1,
        explanation: r`In these equations W stands for work, the energy delivered, and its SI unit is the joule, J. The watt is a unit of power and only shares the letter. The volt measures voltage and the coulomb measures charge.`,
      },
      {
        question: r`A charge of +2 C moves through a potential drop of 3 V and loses potential energy. Which line records the change with a correct symbol and unit?`,
        options: [r`ΔU = −6 V`, r`ΔV = −6 J`, r`ΔW = −6 C`, r`ΔU = −6 J`],
        correctAnswer: 3,
        explanation: r`Potential energy has the symbol U and is measured in joules, so the change is ΔU = (2 C)(−3 V) = −6 J. A potential energy cannot be in volts, ΔV is a potential difference and cannot be in joules, and the coulomb is a unit of charge.`,
      },
    ],
  },
  [r`Is the electron-volt a unit of voltage or of energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A photon of green light carries an energy of 2.5 eV. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`1.6 × 10¹⁹ J`, r`6.4 × 10⁻²⁰ J`, r`4.0 × 10⁻¹⁹ J`, r`2.5 J`],
        correctAnswer: 2,
        explanation: r`Multiply by the size of one electron-volt: 2.5 × 1.6 × 10⁻¹⁹ J = 4.0 × 10⁻¹⁹ J. Dividing 2.5 by 1.6 × 10⁻¹⁹ gives 1.6 × 10¹⁹, dividing 1.6 × 10⁻¹⁹ by 2.5 gives 6.4 × 10⁻²⁰, and 2.5 J treats an electron-volt as a joule.`,
      },
      {
        question: r`Breaking one particular chemical bond takes 8.0 × 10⁻¹⁹ J. What is this energy in electron-volts? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`5.0 eV`, r`0.20 eV`, r`8.0 eV`, r`1.3 × 10⁻³⁷ eV`],
        correctAnswer: 0,
        explanation: r`Divide the joules by the size of one electron-volt: (8.0 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = 5.0 eV. The ratio upside down is 0.20, 8.0 just drops the power of ten, and multiplying the two gives 1.3 × 10⁻³⁷.`,
      },
      {
        question: r`An electron in an X-ray tube reaches the target with 50 keV of kinetic energy. What is this energy in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`8.0 × 10⁻¹⁸ J`, r`8.0 × 10⁻¹² J`, r`3.1 × 10²³ J`, r`8.0 × 10⁻¹⁵ J`],
        correctAnswer: 3,
        explanation: r`50 keV = 5.0 × 10⁴ eV, so the energy is (5.0 × 10⁴)(1.6 × 10⁻¹⁹) = 8.0 × 10⁻¹⁵ J. Forgetting the kilo gives 8.0 × 10⁻¹⁸, reading kilo as mega gives 8.0 × 10⁻¹², and dividing by 1.6 × 10⁻¹⁹ gives 3.1 × 10²³.`,
      },
      {
        question: r`A Na⁺ ion crossing a cell membrane loses 0.10 eV of potential energy. How many joules is that? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`1.6 × 10⁻¹⁸ J`, r`6.3 × 10¹⁷ J`, r`1.6 × 10⁻²⁰ J`, r`0.10 J`],
        correctAnswer: 2,
        explanation: r`The electron-volt is a unit of energy, and 0.10 × 1.6 × 10⁻¹⁹ J = 1.6 × 10⁻²⁰ J. Moving the decimal point the wrong way gives 1.6 × 10⁻¹⁸, dividing 0.10 by 1.6 × 10⁻¹⁹ gives 6.3 × 10¹⁷, and 0.10 J treats an electron-volt as a joule.`,
      },
      {
        question: r`A light detector absorbs 1000 photons, each with an energy of 3.0 eV. What total energy does it absorb, in joules? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`4.8 × 10⁻¹⁹ J`, r`4.8 × 10⁻¹⁶ J`, r`3.0 × 10³ J`, r`1.9 × 10²² J`],
        correctAnswer: 1,
        explanation: r`The total is 1000 × 3.0 eV = 3.0 × 10³ eV, and (3.0 × 10³)(1.6 × 10⁻¹⁹) = 4.8 × 10⁻¹⁶ J. Stopping at one photon gives 4.8 × 10⁻¹⁹ J, 3.0 × 10³ is the total still in electron-volts, and dividing by 1.6 × 10⁻¹⁹ gives 1.9 × 10²².`,
      },
      {
        question: r`Particle X has a kinetic energy of 4.0 eV and particle Y has a kinetic energy of 3.2 × 10⁻¹⁹ J. How do the two energies compare? (1 eV = 1.6 × 10⁻¹⁹ J)`,
        options: [r`X has 0.5 times the energy of Y`, r`X has 1.25 times the energy of Y`, r`X has 0.8 times the energy of Y`, r`X has 2 times the energy of Y`],
        correctAnswer: 3,
        explanation: r`Put both in the same unit: Y has (3.2 × 10⁻¹⁹)/(1.6 × 10⁻¹⁹) = 2.0 eV, so X, with 4.0 eV, has 2 times the energy of Y. The ratio upside down is 0.5, and 1.25 or 0.8 comes from comparing the 4.0 with the 3.2 as if the units already matched.`,
      },
    ],
  },
  [r`Write voltage as an equation, with its unit.`]: {
    kind: 'calc',
    more: [
      {
        question: r`A solar cell gives 2.4 J of energy to 4.0 C of charge that passes through it. What is the voltage of the cell?`,
        options: [r`9.6 V`, r`1.7 V`, r`6.4 V`, r`0.60 V`],
        correctAnswer: 3,
        explanation: r`ΔV = W/q = (2.4 J)/(4.0 C) = 0.60 V. Multiplying gives 9.6, dividing the charge by the energy gives 1.7, and adding the two numbers gives 6.4.`,
      },
      {
        question: r`While a toy car runs, 20 C of charge passes through its 9.0 V battery. How much energy does the battery give to that charge?`,
        options: [r`2.2 J`, r`180 J`, r`0.45 J`, r`29 J`],
        correctAnswer: 1,
        explanation: r`ΔV = W/q rearranges to W = q ΔV = (20 C)(9.0 V) = 180 J: 9 J for each coulomb. Dividing 20 by 9.0 gives 2.2, dividing 9.0 by 20 gives 0.45, and adding the two gives 29.`,
      },
      {
        question: r`Over its life, a 1.5 V cell delivers 600 J of energy. How much charge has passed through it?`,
        options: [r`400 C`, r`900 C`, r`0.0025 C`, r`40 C`],
        correctAnswer: 0,
        explanation: r`ΔV = W/q rearranges to q = W/ΔV = (600 J)/(1.5 V) = 400 C. Multiplying gives 900, dividing 1.5 by 600 gives 0.0025, and 40 C is a slip of one decimal place.`,
      },
      {
        question: r`A defibrillator gives 200 J of energy to 40 mC of charge as it passes through the chest. What is the average voltage across the chest?`,
        options: [r`5.0 V`, r`5000 V`, r`8.0 V`, r`2.0 × 10⁻⁴ V`],
        correctAnswer: 1,
        explanation: r`40 mC = 0.040 C, so ΔV = W/q = (200 J)/(0.040 C) = 5000 V. Dividing by 40 without converting gives 5.0 V, multiplying 200 by 0.040 gives 8.0, and dividing the charge by the energy gives 2.0 × 10⁻⁴.`,
      },
      {
        question: r`An electron gains 4.8 × 10⁻¹⁸ J of energy as it crosses the gap between two metal plates. What is the size of the voltage between the plates? (e = 1.6 × 10⁻¹⁹ C)`,
        options: [r`3.0 V`, r`0.033 V`, r`30 V`, r`300 V`],
        correctAnswer: 2,
        explanation: r`ΔV = W/q = (4.8 × 10⁻¹⁸)/(1.6 × 10⁻¹⁹) = 30 V. A slip in the powers of ten gives 3.0 V or 300 V, and dividing the charge by the energy gives 0.033.`,
      },
      {
        question: r`Battery X gives 18 J of energy to every 2.0 C of charge that passes through it. Battery Y gives 6.0 J to every 4.0 C. The voltage of X is how many times the voltage of Y?`,
        options: [r`3 times`, r`1.5 times`, r`0.17 times`, r`6 times`],
        correctAnswer: 3,
        explanation: r`ΔV = W/q gives 18/2.0 = 9.0 V for X and 6.0/4.0 = 1.5 V for Y, and 9.0/1.5 = 6. Comparing only the energies gives 3, multiplying energy by charge for each (36 and 24) gives 1.5, and 0.17 is the ratio upside down.`,
      },
    ],
  },
  [r`What is the change in potential energy of a charge $q$ that moves through $\Delta V$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A charge of −2.0 C is moved from a point at 5 V to a point at 9 V. What is the change in its electric potential energy?`,
        options: [r`+8.0 J`, r`−28 J`, r`−8.0 J`, r`+28 J`],
        correctAnswer: 2,
        explanation: r`ΔU = q ΔV with ΔV = 9 V − 5 V = +4 V, so ΔU = (−2.0 C)(+4 V) = −8.0 J. Dropping the sign of the charge gives +8.0 J, and the 28 J answers add the two potentials (14 V) instead of taking their difference.`,
      },
      {
        question: r`A dust particle carrying +4.0 μC drifts from a point at 300 V to a point at 100 V inside an air cleaner. What is the change in its electric potential energy?`,
        options: [r`+8.0 × 10⁻⁴ J`, r`−1.6 × 10⁻³ J`, r`−800 J`, r`−8.0 × 10⁻⁴ J`],
        correctAnswer: 3,
        explanation: r`ΔV = 100 V − 300 V = −200 V, so ΔU = q ΔV = (4.0 × 10⁻⁶)(−200) = −8.0 × 10⁻⁴ J. Taking the difference the wrong way round gives +8.0 × 10⁻⁴ J, adding the potentials (400 V) gives −1.6 × 10⁻³ J, and leaving out the 10⁻⁶ gives −800 J.`,
      },
      {
        question: r`A charge of +0.50 C gains 6.0 J of electric potential energy as it is pushed through a battery. Through what potential difference does it move?`,
        options: [r`+3.0 V`, r`+12 V`, r`−12 V`, r`+0.083 V`],
        correctAnswer: 1,
        explanation: r`ΔU = q ΔV rearranges to ΔV = ΔU/q = (+6.0 J)/(+0.50 C) = +12 V. Multiplying gives 3.0, a negative ΔV would make a positive charge lose energy, and dividing the charge by the energy gives 0.083.`,
      },
      {
        question: r`A charged object is moved through a potential difference of ΔV = +20 V and its electric potential energy falls by 5.0 J. What is its charge?`,
        options: [r`+0.25 C`, r`−4.0 C`, r`+4.0 C`, r`−0.25 C`],
        correctAnswer: 3,
        explanation: r`ΔU = q ΔV rearranges to q = ΔU/ΔV = (−5.0 J)/(+20 V) = −0.25 C. A positive charge moved to a higher potential would gain energy, so +0.25 C has the wrong sign. The 4.0 C answers divide the voltage by the energy.`,
      },
      {
        question: r`In a vacuum tube, an electron (q = −1.6 × 10⁻¹⁹ C) travels from the cathode, at 0 V, to the anode, at +50 V. Find ΔU, the change in its electric potential energy.`,
        options: [r`+8.0 × 10⁻¹⁸ J`, r`−8.0 × 10⁻¹⁸ J`, r`−3.2 × 10⁻²¹ J`, r`+3.2 × 10⁻²¹ J`],
        correctAnswer: 1,
        explanation: r`ΔU = q ΔV = (−1.6 × 10⁻¹⁹)(+50) = −80 × 10⁻¹⁹ J = −8.0 × 10⁻¹⁸ J. Dropping the electron's negative sign gives +8.0 × 10⁻¹⁸ J, and the 3.2 × 10⁻²¹ J answers divide the charge by 50 instead of multiplying.`,
      },
      {
        question: r`Ion X has charge +e and moves through a potential difference of 40 mV. Ion Y has charge +2e and moves through 120 mV. The size of Y's change in potential energy is how many times X's?`,
        options: [r`3 times`, r`2 times`, r`6 times`, r`1.5 times`],
        correctAnswer: 2,
        explanation: r`ΔU = q ΔV, so the ratio is (2e × 120 mV)/(e × 40 mV) = 2 × 3 = 6. Three compares only the potential differences, two compares only the charges, and 1.5 divides one factor by the other instead of multiplying them.`,
      },
    ],
  },
  [r`Which way do positive and negative charges move on their own?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A free ion is released from rest at a point where the potential is 0 V, and it moves on its own toward a point at +3 V. What is the sign of its charge, and what happens to its electric potential energy?`,
        options: [r`Negative charge; its potential energy rises`, r`Positive charge; its potential energy falls`, r`Negative charge; its potential energy falls`, r`Positive charge; its potential energy rises`],
        correctAnswer: 2,
        explanation: r`Only a negative charge moves on its own from low to high potential, and any charge moving on its own loses potential energy: ΔU = q ΔV is negative for a negative q and a positive ΔV. A positive ion would have moved toward lower potential, and potential energy never rises in a motion that happens on its own.`,
      },
      {
        question: r`Which of these motions will NOT happen on its own, so that an outside agent must do work to make it happen?`,
        options: [r`A proton moving from 2 V to 8 V`, r`A proton moving from 8 V to 2 V`, r`An electron moving from 2 V to 8 V`, r`A Cl⁻ ion moving from −4 V to 0 V`],
        correctAnswer: 0,
        explanation: r`Positive charges move on their own from high to low potential, so a proton going from 2 V up to 8 V gains potential energy and must be pushed. The proton going from 8 V to 2 V, and the two negative charges going from lower to higher potential, all lose potential energy and move on their own.`,
      },
    ],
  },
}
