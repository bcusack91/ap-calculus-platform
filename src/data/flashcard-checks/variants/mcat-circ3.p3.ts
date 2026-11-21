import type { CardCheckVariants } from '@/lib/flashcard-check-core'

/**
 * Further card-check questions for part of `mcat-circ3`, keyed by the card's exact
 * front text (the card's first question is in the set's own check file).
 * calc cards: 6 more; concept cards: 2 more. Gate: scripts/flashcard-checks/validate-variants.ts.
 */
const r = String.raw

export const variants: Record<string, CardCheckVariants> = {
  [r`What does $Q = CV$ give you, and what is the capacitor's net charge?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A defibrillator's 50 μF capacitor is charged to 2000 V before a shock. How much charge sits on its positive plate?`,
        options: [r`+0.10 C`, r`+0.20 C`, r`+0.050 C`, r`+40 C`],
        correctAnswer: 0,
        explanation: r`Q = CV = (50 × 10⁻⁶ F)(2000 V) = 0.10 C, and that is the charge on each plate, + on one and − on the other. +0.20 C wrongly doubles it for the two plates, +0.050 C halves it, and +40 C divides the 2000 by the 50.`,
      },
      {
        question: r`A radio's 2.0 μF capacitor has 9.0 V across it. A student adds together the charges on its two plates. What total does the student get?`,
        options: [r`18 μC`, r`36 μC`, r`0 μC`, r`4.5 μC`],
        correctAnswer: 2,
        explanation: r`Q = CV = (2.0 μF)(9.0 V) = 18 μC is the size of the charge on each plate, but one plate holds +18 μC and the other −18 μC, so the total is zero. 18 μC is one plate alone, 36 μC adds the two sizes without their signs, and 4.5 μC divides V by C.`,
      },
      {
        question: r`Each plate of a 4.0 nF touch-sensor capacitor carries 20 nC in magnitude, one plate positive and the other negative. What is the voltage across the capacitor?`,
        options: [r`10 V`, r`80 V`, r`0.20 V`, r`5.0 V`],
        correctAnswer: 3,
        explanation: r`Q in Q = CV is the charge on ONE plate, so V = Q/C = (20 nC)/(4.0 nF) = 5.0 V. 10 V adds the two plates' charges to get 40 nC first, 80 V multiplies Q by C, and 0.20 V turns the ratio upside down.`,
      },
      {
        question: r`A patch of cell membrane holds +3.5 pC on its outer face and −3.5 pC on its inner face, with 70 mV across it. What is the capacitance of the patch?`,
        options: [r`100 pF`, r`0.050 pF`, r`0 pF`, r`50 pF`],
        correctAnswer: 3,
        explanation: r`C = Q/V with Q the charge on one face and V in volts: 3.5 × 10⁻¹² C ÷ 0.070 V = 5.0 × 10⁻¹¹ F = 50 pF. 100 pF uses 7.0 pC by adding both faces, 0.050 pF leaves the voltage as 70 instead of 0.070 V, and 0 pF uses the net charge, which is zero.`,
      },
      {
        question: r`A 6.0 V battery charges an empty 150 μF capacitor in a toy. By the time charging ends, how much charge has the battery moved from one plate to the other?`,
        options: [r`1800 μC`, r`25 μC`, r`900 μC`, r`0 μC`],
        correctAnswer: 2,
        explanation: r`The battery takes charge off one plate and puts it on the other, leaving +Q and −Q with Q = CV = (150 μF)(6.0 V) = 900 μC. 1800 μC counts both plates as if each received separate charge, 25 μC divides C by V, and 0 μC is the capacitor's net charge, not the charge moved.`,
      },
      {
        question: r`A 10 μF capacitor is charged to 1.6 V. Each electron carries 1.6 × 10⁻¹⁹ C. How many excess electrons sit on the negative plate?`,
        options: [r`2.0 × 10¹⁴`, r`1.0 × 10¹⁴`, r`1.0 × 10²⁰`, r`2.6 × 10⁻²⁴`],
        correctAnswer: 1,
        explanation: r`Each plate holds Q = CV = (10 × 10⁻⁶ F)(1.6 V) = 1.6 × 10⁻⁵ C, so the negative plate has (1.6 × 10⁻⁵)/(1.6 × 10⁻¹⁹) = 1.0 × 10¹⁴ extra electrons. 2.0 × 10¹⁴ doubles Q for the two plates, 1.0 × 10²⁰ forgets the micro prefix, and 2.6 × 10⁻²⁴ multiplies by the electron charge instead of dividing.`,
      },
    ],
  },
  [r`A capacitor is moved to a battery of a different voltage. What changes?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A sensor capacitor holds 18 nC on each plate while it runs from a 3.0 V coin cell. It is then moved to a 5.0 V USB supply. What charge does each plate hold now?`,
        options: [r`18 nC`, r`11 nC`, r`30 nC`, r`90 nC`],
        correctAnswer: 2,
        explanation: r`The capacitance stays the same, C = (18 nC)/(3.0 V) = 6.0 nF, so the new charge is Q = CV = (6.0 nF)(5.0 V) = 30 nC. 18 nC treats the charge as the fixed property, 11 nC scales by 3/5 instead of 5/3, and 90 nC multiplies the old charge by the new voltage.`,
      },
      {
        question: r`A 22 μF capacitor is taken off a 5.0 V battery and connected to a 15 V battery. What are its capacitance and the charge on each plate at 15 V?`,
        options: [r`66 μF and 330 μC`, r`22 μF and 330 μC`, r`22 μF and 110 μC`, r`66 μF and 990 μC`],
        correctAnswer: 1,
        explanation: r`Capacitance belongs to the capacitor, so it is still 22 μF, and Q = CV = (22 μF)(15 V) = 330 μC. The answers with 66 μF wrongly triple the capacitance with the voltage, and 110 μC is the charge it held at 5.0 V, before the move.`,
      },
      {
        question: r`A capacitor is charged by a 1.5 V cell, then removed and charged by a 9.0 V battery instead. How does the charge on each plate at 9.0 V compare with the charge at 1.5 V?`,
        options: [r`It is 6 times as large`, r`It is 36 times as large`, r`It is 1/6 times as large`, r`It is exactly as large`],
        correctAnswer: 0,
        explanation: r`C is unchanged, so Q = CV is proportional to V, and 9.0/1.5 = 6. Thirty-six times squares the factor, which is how energy behaves, not charge. One sixth inverts the ratio, and an unchanged charge mistakes Q for the capacitor's fixed property.`,
      },
      {
        question: r`A 4.0 μF capacitor in a timer is moved from a 6.0 V battery to a 9.0 V battery. How much ADDITIONAL charge flows onto its positive plate?`,
        options: [r`12 μC`, r`36 μC`, r`24 μC`, r`60 μC`],
        correctAnswer: 0,
        explanation: r`With C fixed, the extra charge is C times the change in voltage: (4.0 μF)(9.0 V − 6.0 V) = 12 μC. 36 μC is the whole charge at 9.0 V, 24 μC is the charge it already had at 6.0 V, and 60 μC adds those two instead of subtracting.`,
      },
      {
        question: r`A 500 pF capacitor in a radiation detector holds charge at 2.0 V during testing. It is then connected to the detector's 2.0 kV supply. What charge does each plate hold at 2.0 kV?`,
        options: [r`1.0 nC`, r`1.0 mC`, r`0.25 μC`, r`1.0 μC`],
        correctAnswer: 3,
        explanation: r`C is still 500 pF, so Q = CV = (500 × 10⁻¹² F)(2.0 × 10³ V) = 1.0 × 10⁻⁶ C = 1.0 μC. 1.0 nC is the charge at 2.0 V, which ignores the kilo prefix, 1.0 mC slips three powers of ten the other way, and 0.25 μC divides 500 by 2000.`,
      },
      {
        question: r`A capacitor holds 15 μC on each plate while connected to battery X. Moved to an 8.0 V battery, the same capacitor holds 40 μC. What is the voltage of battery X?`,
        options: [r`21 V`, r`3.0 V`, r`5.0 V`, r`1.9 V`],
        correctAnswer: 1,
        explanation: r`The capacitance is the same on both batteries: C = 40 μC ÷ 8.0 V = 5.0 μF, so V = Q/C = 15 μC ÷ 5.0 μF = 3.0 V. 21 V scales 8.0 V by 40/15 instead of 15/40, 5.0 V is the capacitance in μF, and 1.9 V divides the old charge by the new voltage.`,
      },
    ],
  },
  [r`How do you find a rebuilt parallel-plate capacitor's new capacitance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 12 pF touchscreen sensing capacitor is redesigned with 5 times the plate area and 3 times the gap. What is its new capacitance?`,
        options: [r`180 pF`, r`7.2 pF`, r`0.80 pF`, r`20 pF`],
        correctAnswer: 3,
        explanation: r`New C = old C × (area factor) ÷ (gap factor) = 12 pF × 5 ÷ 3 = 20 pF. 180 pF multiplies by both factors, 7.2 pF swaps them (× 3 ÷ 5), and 0.80 pF divides by both.`,
      },
      {
        question: r`A 30 nF parallel-plate capacitor is rebuilt with plates of half the area, set half as far apart, with the same material between them. What is its new capacitance?`,
        options: [r`7.5 nF`, r`30 nF`, r`120 nF`, r`15 nF`],
        correctAnswer: 1,
        explanation: r`New C = 30 nF × (1/2) ÷ (1/2) = 30 nF: the smaller area halves C and the smaller gap doubles it, so the two changes cancel. 7.5 nF halves twice, 120 nF doubles twice, and 15 nF applies the area change only.`,
      },
      {
        question: r`An engineer triples the plate area of a 6.0 pF air capacitor but needs the finished capacitor to be 2.0 pF. How must the gap between the plates change?`,
        options: [r`It must be 1/9 times as wide`, r`It must be 3 times as wide`, r`It must be 9 times as wide`, r`It must be 1/3 times as wide`],
        correctAnswer: 2,
        explanation: r`2.0 pF = 6.0 pF × 3 ÷ (gap factor), so the gap factor is 18/2.0 = 9. Three times as wide forgets that the larger area has already tripled C to 18 pF. The two fractions narrow the gap, which would raise the capacitance instead of lowering it.`,
      },
      {
        question: r`A 64 pF air capacitor is rebuilt: the plate area goes from 20 cm² to 5.0 cm², and the gap goes from 0.10 mm to 0.40 mm. What is the new capacitance?`,
        options: [r`16 pF`, r`4.0 pF`, r`64 pF`, r`256 pF`],
        correctAnswer: 1,
        explanation: r`The area factor is 5.0/20 = 1/4 and the gap factor is 0.40/0.10 = 4, so new C = 64 pF × (1/4) ÷ 4 = 4.0 pF. 16 pF applies only one of the two changes, 64 pF lets them cancel as if the wider gap raised C, and 256 pF multiplies by 4 instead.`,
      },
      {
        question: r`A 15 pF capacitor has circular plates. It is rebuilt with plates of 3 times the diameter, and the gap is made 3 times as wide. What is the new capacitance?`,
        options: [r`15 pF`, r`405 pF`, r`5.0 pF`, r`45 pF`],
        correctAnswer: 3,
        explanation: r`Tripling the diameter multiplies the plate AREA by 3² = 9, so new C = 15 pF × 9 ÷ 3 = 45 pF. 15 pF uses an area factor of 3, forgetting the square. 405 pF multiplies by the gap factor instead of dividing, and 5.0 pF applies the gap change alone.`,
      },
      {
        question: r`In a condenser microphone, a 40 pF capacitor has a gap of 20 μm. A loud sound pushes the diaphragm plate inward so the gap is 16 μm, with the plate area unchanged. What is the capacitance at that moment?`,
        options: [r`50 pF`, r`32 pF`, r`44 pF`, r`36 pF`],
        correctAnswer: 0,
        explanation: r`The gap factor is 16/20 = 0.80 and the area factor is 1, so new C = 40 pF ÷ 0.80 = 50 pF: a smaller gap gives a larger capacitance. 32 pF multiplies by 0.80 instead of dividing. 44 pF and 36 pF add or subtract the 4 μm change as if it were picofarads.`,
      },
    ],
  },
  [r`What must you do before using $E = V/d$?`]: {
    kind: 'calc',
    more: [
      {
        question: r`The field between a capacitor's plates is 2.0 × 10⁵ V/m, and the plates are 0.25 mm apart. What is the voltage across the plates?`,
        options: [r`5.0 × 10⁴ V`, r`8.0 × 10⁸ V`, r`5.0 × 10¹ V`, r`8.0 × 10⁵ V`],
        correctAnswer: 2,
        explanation: r`V = Ed with d in meters: (2.0 × 10⁵ V/m)(2.5 × 10⁻⁴ m) = 50 V. 5.0 × 10⁴ V multiplies by 0.25 without converting millimeters. The other two divide E by d, with the gap in meters or in millimeters, instead of multiplying.`,
      },
      {
        question: r`A 12 V battery is connected across a parallel-plate capacitor, and the field between the plates is 4.0 × 10⁴ V/m. How far apart are the plates?`,
        options: [r`0.30 m`, r`0.30 mm`, r`3.3 mm`, r`30 mm`],
        correctAnswer: 1,
        explanation: r`d = V/E = (12 V)/(4.0 × 10⁴ V/m) = 3.0 × 10⁻⁴ m, which is 0.30 mm. 0.30 m and 30 mm slip powers of ten when changing meters to millimeters, and 3.3 mm comes from dividing E by V, which gives 3.3 × 10³, and calling it a distance.`,
      },
      {
        question: r`An insulating oxide layer in a transistor is 2.0 nm thick and has 1.0 V across it. Treating it as the gap of a parallel-plate capacitor, what is the field in the layer?`,
        options: [r`5.0 × 10⁻¹ V/m`, r`5.0 × 10⁸ V/m`, r`2.0 × 10⁻⁹ V/m`, r`5.0 × 10⁵ V/m`],
        correctAnswer: 1,
        explanation: r`E = V/d with d = 2.0 × 10⁻⁹ m: (1.0 V)/(2.0 × 10⁻⁹ m) = 5.0 × 10⁸ V/m. 5.0 × 10⁻¹ V/m divides by 2.0 without converting nanometers, 2.0 × 10⁻⁹ V/m multiplies V by d, and 5.0 × 10⁵ V/m uses 10⁻⁶ m for a nanometer.`,
      },
      {
        question: r`In a gel electrophoresis tank, flat electrodes 30 cm apart have 150 V between them. Treating them as parallel plates, what is the field in the gel?`,
        options: [r`5.0 V/m`, r`45 V/m`, r`500 V/m`, r`4500 V/m`],
        correctAnswer: 2,
        explanation: r`E = V/d with d = 0.30 m: (150 V)/(0.30 m) = 500 V/m. 5.0 V/m divides by 30 without converting centimeters to meters, 45 V/m multiplies 150 by 0.30, and 4500 V/m multiplies 150 by 30.`,
      },
      {
        question: r`A capacitor with a 2.0 mm gap stays connected to its battery, and the field between the plates is 2.0 × 10³ V/m. The plates are moved until the gap is 0.50 mm. What is the field now?`,
        options: [r`5.0 × 10² V/m`, r`2.0 × 10³ V/m`, r`8.0 × 10³ V/m`, r`3.2 × 10⁴ V/m`],
        correctAnswer: 2,
        explanation: r`The battery holds V = Ed = (2.0 × 10³ V/m)(2.0 × 10⁻³ m) = 4.0 V, so E = (4.0 V)/(5.0 × 10⁻⁴ m) = 8.0 × 10³ V/m. 5.0 × 10² V/m divides by 4 instead of multiplying, 2.0 × 10³ V/m leaves the field unchanged, and 3.2 × 10⁴ V/m applies the factor of 4 twice.`,
      },
      {
        question: r`The base of a storm cloud is 1.5 km above the ground, with 3.0 × 10⁸ V between them. Treating cloud and ground as parallel plates, what is the field in the air between them?`,
        options: [r`2.0 × 10⁵ V/m`, r`2.0 × 10⁸ V/m`, r`4.5 × 10¹¹ V/m`, r`5.0 × 10⁻⁶ V/m`],
        correctAnswer: 0,
        explanation: r`E = V/d with d = 1.5 × 10³ m: (3.0 × 10⁸ V)/(1.5 × 10³ m) = 2.0 × 10⁵ V/m. 2.0 × 10⁸ V/m divides by 1.5 without converting kilometers, 4.5 × 10¹¹ V/m multiplies V by d, and 5.0 × 10⁻⁶ V/m divides d by V.`,
      },
    ],
  },
  [r`What do picofarads times volts give?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 47 pF tuning capacitor in a radio has 10 V across it. Without converting to farads, what charge sits on each plate?`,
        options: [r`470 pC`, r`470 nC`, r`4.7 pC`, r`470 μC`],
        correctAnswer: 0,
        explanation: r`The prefix carries straight through: (47 pF)(10 V) = 470 pC. 470 nC and 470 μC change the prefix on the way, though only the number should change, and 4.7 pC divides 47 by 10 instead of multiplying.`,
      },
      {
        question: r`Each plate of a 50 μF capacitor in a power supply holds 250 μC. What is the voltage across it?`,
        options: [r`5.0 V`, r`5.0 μV`, r`5.0 MV`, r`0.20 V`],
        correctAnswer: 0,
        explanation: r`μC ÷ μF gives plain volts, because the two prefixes cancel: 250 μC ÷ 50 μF = 5.0 V. 5.0 μV keeps a micro prefix that has already cancelled, 5.0 MV applies it upside down, and 0.20 V divides C by Q.`,
      },
      {
        question: r`A capacitor in a pulse oximeter holds 36 nC on each plate when 12 V is across it. What is its capacitance?`,
        options: [r`3.0 μF`, r`3.0 pF`, r`432 nF`, r`3.0 nF`],
        correctAnswer: 3,
        explanation: r`nC ÷ V gives nF, with the prefix carried through: (36 nC)/(12 V) = 3.0 nF. 3.0 μF and 3.0 pF get the number right but change the prefix, and 432 nF multiplies 36 by 12 instead of dividing.`,
      },
      {
        question: r`A 2.0 mF capacitor that smooths the output of a phone charger has 6.0 V across it. What charge does each plate hold?`,
        options: [r`12 μC`, r`12 C`, r`12 mC`, r`3.0 mC`],
        correctAnswer: 2,
        explanation: r`mF × V = mC, so (2.0 mF)(6.0 V) = 12 mC. 12 μC reads the m of millifarad as micro, 12 C drops the prefix altogether, and 3.0 mC divides 6.0 by 2.0 instead of multiplying.`,
      },
      {
        question: r`A 2.0 nF filter capacitor sits across the 3.0 kV supply of an X-ray tube. What charge does each plate hold?`,
        options: [r`6.0 nC`, r`6.0 μC`, r`6.0 mC`, r`1.5 μC`],
        correctAnswer: 1,
        explanation: r`Here the voltage has a prefix too: (2.0 × 10⁻⁹ F)(3.0 × 10³ V) = 6.0 × 10⁻⁶ C = 6.0 μC. 6.0 nC carries the nano through but ignores the kilo, 6.0 mC shifts the power of ten the wrong way, and 1.5 μC divides 3.0 by 2.0.`,
      },
      {
        question: r`A 0.30 μF capacitor in a hearing aid sits across a 1.5 V cell. What is the charge on each plate, in nanocoulombs?`,
        options: [r`450 nC`, r`0.45 nC`, r`200 nC`, r`45 nC`],
        correctAnswer: 0,
        explanation: r`μF × V = μC, so Q = (0.30 μF)(1.5 V) = 0.45 μC, and 1 μC = 1000 nC, which makes it 450 nC. 0.45 nC renames the prefix without moving the decimal point, 200 nC divides 0.30 by 1.5, and 45 nC converts with 100 instead of 1000.`,
      },
    ],
  },
  [r`What symbol stands for the dielectric constant, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A student finds a material's dielectric constant by dividing the capacitance with the material in the gap by the capacitance with the gap empty. What does this show about the unit of κ?`,
        options: [r`It is in farads, like a capacitance`, r`It is in farads squared, from F × F`, r`It has no unit, as farads cancel out`, r`It is in farads per meter, like ε₀`],
        correctAnswer: 2,
        explanation: r`κ is a ratio of two capacitances, farads over farads, so the units cancel and κ is a pure number. Farads would be the unit of either capacitance alone, farads squared would come from multiplying them, and farads per meter is the unit of ε₀, a different quantity.`,
      },
      {
        question: r`A table lists four gap fillings with a claimed dielectric constant for each. Which claim must be a mistake?`,
        options: [r`A vacuum, with κ of exactly 1`, r`Dry air, with κ very close to 1`, r`A ceramic, with κ of about 0.2`, r`Pure water, with κ of about 80`],
        correctAnswer: 2,
        explanation: r`The dielectric constant is a pure number that is never less than 1, so 0.2 cannot be right for any material. A vacuum has κ = 1 exactly, air is only very slightly above 1, and water really is unusually high, at about 80.`,
      },
    ],
  },
  [r`What symbol stands for the energy stored in a capacitor, and what is its SI unit?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A lab report finds a capacitor's U from ½QV, with Q entered in coulombs and V in volts. In what unit does U come out?`,
        options: [r`Watts, since C × V = W`, r`Joules, since C × V = J`, r`Farads, since C × V = F`, r`Amperes, since C × V = A`],
        correctAnswer: 1,
        explanation: r`U is the stored energy, measured in joules, and a volt is a joule per coulomb, so coulombs × volts = joules. A watt is a joule per second, a farad is a coulomb per volt (a ratio, not a product), and an ampere is a coulomb per second.`,
      },
      {
        question: r`A worked solution for a charged capacitor ends with four lines: C = 15 μF, V = 20 V, Q = 300 μC and U = 3.0 mJ. Which line tells you how much work the capacitor can do as it discharges?`,
        options: [r`The line that reads Q = 300 μC`, r`The line that reads V = 20 V`, r`The line that reads C = 15 μF`, r`The line that reads U = 3.0 mJ`],
        correctAnswer: 3,
        explanation: r`U stands for the energy stored in the capacitor, and its unit, the joule (here millijoules), is the unit of work. Q is the charge on each plate in coulombs, V is the voltage across it in volts, and C is the capacitance in farads.`,
      },
    ],
  },
  [r`What does a dielectric do inside a capacitor?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A plastic slab sits in the gap of a charged capacitor. Which statement about the slab is INCORRECT?`,
        options: [r`Its molecules shift a little but stay in place`, r`Its electrons cross over from plate to plate`, r`Its surface layers set up a field of their own`, r`Its net charge is zero the whole time it is in`],
        correctAnswer: 1,
        explanation: r`A dielectric is an insulator: its molecules polarize, but no charge travels through it from one plate to the other. The other three statements are true. The molecules only stretch or turn, the thin charge layers on its faces make a field opposing the plates' field, and the slab as a whole stays neutral.`,
      },
      {
        question: r`Imagine a material whose molecules could not polarize at all. A slab of it is slid into the gap of an isolated, charged capacitor. What would the field in the gap do?`,
        options: [r`Stay the same, as no charge layers form`, r`Weaken, as charge drains off the plates`, r`Vanish, as the slab screens both plates`, r`Strengthen, as charge layers aid plates`],
        correctAnswer: 0,
        explanation: r`A dielectric weakens the field only because its polarized molecules leave thin charge layers on its faces whose field opposes the plates' field. With no polarization there are no layers, so the field is unchanged. No charge leaves isolated plates, an insulator cannot screen the field to zero, and layers never aid the plates.`,
      },
    ],
  },
  [r`How does a dielectric change the capacitance?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An air-filled capacitor in an old radio has a capacitance of 6.0 nF. Its gap is then filled with waxed paper, κ = 3.5. What is its capacitance now?`,
        options: [r`1.7 nF`, r`21 nF`, r`9.5 nF`, r`6.0 nF`],
        correctAnswer: 1,
        explanation: r`C = κC₀ = (3.5)(6.0 nF) = 21 nF. 1.7 nF divides by κ instead of multiplying, 9.5 nF adds κ to the capacitance, and 6.0 nF leaves the capacitance unchanged.`,
      },
      {
        question: r`A liquid-level sensor is a capacitor that reads 50 pF with air in its gap and 250 pF once an oil has filled the gap completely. What is the oil's dielectric constant?`,
        options: [r`κ = 5.0`, r`κ = 0.20`, r`κ = 200`, r`κ = 300`],
        correctAnswer: 0,
        explanation: r`From C = κC₀, κ = C/C₀ = (250 pF)/(50 pF) = 5.0. 0.20 turns the ratio upside down, which would make κ less than 1. 200 subtracts the two readings and 300 adds them, but κ is a ratio.`,
      },
      {
        question: r`With a sheet of mica (κ = 6.0) filling its gap, a capacitor measures 90 pF. The mica is removed, leaving air. What does the capacitor measure now?`,
        options: [r`540 pF`, r`15 pF`, r`84 pF`, r`96 pF`],
        correctAnswer: 1,
        explanation: r`C = κC₀, so the empty capacitance is C₀ = C/κ = (90 pF)/6.0 = 15 pF. 540 pF multiplies by κ, as if the mica were being put in. 84 pF and 96 pF subtract or add κ, but κ is a multiplying factor.`,
      },
      {
        question: r`A 200 pF air-filled capacitor has its gap filled with a ceramic of κ = 5000. What is its capacitance now?`,
        options: [r`1.0 nF`, r`1.0 mF`, r`1.0 μF`, r`0.040 pF`],
        correctAnswer: 2,
        explanation: r`C = κC₀ = (5000)(200 pF) = 1.0 × 10⁶ pF = 1.0 × 10⁻⁶ F = 1.0 μF. 1.0 nF and 1.0 mF slip three powers of ten in the conversion from picofarads, and 0.040 pF divides by κ instead of multiplying.`,
      },
      {
        question: r`A capacitor filled with a plastic of κ = 2.0 has a capacitance of 40 nF. The plastic is replaced by a glass of κ = 6.0 that also fills the gap. What is the capacitance now?`,
        options: [r`240 nF`, r`13 nF`, r`80 nF`, r`120 nF`],
        correctAnswer: 3,
        explanation: r`The empty capacitance is C₀ = (40 nF)/2.0 = 20 nF, so with the glass C = (6.0)(20 nF) = 120 nF: three times as much, the ratio of the two κ values. 240 nF multiplies 40 nF by 6.0 as if it were the empty value, 13 nF divides by 3, and 80 nF multiplies by the old κ.`,
      },
      {
        question: r`A probe capacitor reads 2.0 pF in air. It is lowered into ethanol, κ ≈ 25, until the liquid fills its gap. What does it read now?`,
        options: [r`27 pF`, r`50 pF`, r`13 pF`, r`0.080 pF`],
        correctAnswer: 1,
        explanation: r`C = κC₀ = (25)(2.0 pF) = 50 pF. 27 pF adds κ to the capacitance, 13 pF divides κ by the 2.0, and 0.080 pF divides the capacitance by κ, which would mean the liquid lowered it.`,
      },
    ],
  },
  [r`What is dielectric breakdown, and why does a good dielectric help?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A capacitor rated for 50 V is wired by mistake across 400 V. There is a sharp crack, and afterward a meter shows that it passes a steady current like a piece of wire. What happened inside it?`,
        options: [r`Its insulator polarized more than before`, r`Its plates passed their charge to the air`, r`Its capacitance rose until current flowed`, r`Its insulator ionized and began to conduct`],
        correctAnswer: 3,
        explanation: r`The field in the gap exceeded the insulator's dielectric strength, so the material ionized, a spark jumped, and a conducting path was left behind: dielectric breakdown. Stronger polarization alone never lets charge cross, the charge did not leak into the surrounding air, and a capacitance does not turn into conduction by growing.`,
      },
      {
        question: r`A designer swaps the air in a capacitor for a plastic with a higher κ and a higher dielectric strength, keeping the same plates and the same working voltage. What does the higher dielectric strength allow?`,
        options: [r`A larger gap, which raises the capacitance`, r`A smaller gap, which lowers the capacitance`, r`A larger gap, which raises the field inside`, r`A smaller gap, with no spark at that voltage`],
        correctAnswer: 3,
        explanation: r`A higher dielectric strength means the material tolerates a larger field, E = V/d, so the plates can sit closer at the same voltage without breakdown, and the smaller gap raises C further. A larger gap would lower both the capacitance and the field, and a smaller gap raises the capacitance, not lowers it.`,
      },
    ],
  },
  [r`Give the three forms of a capacitor's stored energy.`]: {
    kind: 'calc',
    more: [
      {
        question: r`Before a shock, 2000 V is placed across the 100 μF capacitor inside a defibrillator. What energy is then available for the shock?`,
        options: [r`400 J`, r`200 J`, r`0.10 J`, r`0.20 J`],
        correctAnswer: 1,
        explanation: r`With C and V known, U = ½CV² = ½(1.0 × 10⁻⁴ F)(2000 V)² = ½(1.0 × 10⁻⁴)(4.0 × 10⁶) = 200 J. 400 J leaves out the ½, 0.10 J forgets to square the voltage, and 0.20 J is CV, which is a charge.`,
      },
      {
        question: r`A 2.0 μF capacitor sits on a bench with nothing connected to it and carries 6.0 μC on each plate. Its voltage has not been measured. How much energy does it store?`,
        options: [r`9.0 μJ`, r`18 μJ`, r`1.5 μJ`, r`36 μJ`],
        correctAnswer: 0,
        explanation: r`With Q and C known, U = Q²/2C = (6.0 × 10⁻⁶)²/(2 × 2.0 × 10⁻⁶) = (36 × 10⁻¹²)/(4.0 × 10⁻⁶) = 9.0 × 10⁻⁶ J. 18 μJ leaves out the 2 underneath, 1.5 μJ forgets to square the charge, and 36 μJ multiplies by C instead of dividing.`,
      },
      {
        question: r`A camera flash unit stores 4.0 J in a 200 μF capacitor. What is the voltage across the capacitor?`,
        options: [r`140 V`, r`200 V`, r`4.0 × 10⁴ V`, r`2.0 × 10⁴ V`],
        correctAnswer: 1,
        explanation: r`From U = ½CV², V² = 2U/C = (8.0 J)/(2.0 × 10⁻⁴ F) = 4.0 × 10⁴ V², so V = 200 V. 140 V leaves out the 2, 4.0 × 10⁴ V forgets the square root, and 2.0 × 10⁴ V is simply U divided by C.`,
      },
      {
        question: r`A capacitor in a laser power supply stores 0.60 J with 300 V across it. How much charge is on each plate?`,
        options: [r`2.0 mC`, r`1.0 mC`, r`4.0 mC`, r`8.0 mC`],
        correctAnswer: 2,
        explanation: r`With U and V known, use U = ½QV: Q = 2U/V = (1.2 J)/(300 V) = 4.0 × 10⁻³ C. 2.0 mC is U/V, which forgets the ½ in the formula. 1.0 mC halves instead of doubling, and 8.0 mC doubles twice.`,
      },
      {
        question: r`A backup capacitor stores 80 mJ at 12 V. It then drains through a clock circuit until its voltage is 6.0 V. How much energy is still stored in it?`,
        options: [r`20 mJ`, r`40 mJ`, r`60 mJ`, r`160 mJ`],
        correctAnswer: 0,
        explanation: r`U = ½CV² with C fixed, so halving the voltage leaves (½)² = ¼ of the energy: 80 mJ ÷ 4 = 20 mJ. 40 mJ treats energy as proportional to V, forgetting the square. 60 mJ is the energy that has left, not what remains, and 160 mJ doubles it.`,
      },
      {
        question: r`A welder's capacitor bank holds 0.25 J of energy with 100 V across it. What is the capacitance of the bank?`,
        options: [r`25 μF`, r`5.0 mF`, r`2.5 mF`, r`50 μF`],
        correctAnswer: 3,
        explanation: r`From U = ½CV², C = 2U/V² = (0.50 J)/(100 V)² = 5.0 × 10⁻⁵ F = 50 μF. 25 μF leaves out the 2, 5.0 mF divides by V instead of V², and 2.5 mF makes both of those mistakes.`,
      },
    ],
  },
  [r`With the battery connected, what is fixed, and how do a dielectric's effects follow?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor wired across a 9.0 V battery holds 15 μC on each plate. With the battery still attached, its gap is filled with a liquid of κ = 4. What charge does each plate hold now?`,
        options: [r`15 μC`, r`3.8 μC`, r`60 μC`, r`240 μC`],
        correctAnswer: 2,
        explanation: r`The battery fixes V, C becomes 4 times as large, and Q = CV rises by the same factor: 4 × 15 μC = 60 μC. 15 μC keeps the charge fixed, which is the isolated case. 3.8 μC divides by κ, and 240 μC applies the factor of 4 twice.`,
      },
      {
        question: r`The field between the plates of a capacitor is 5000 V/m while it is wired to its battery. With the battery still attached, a slab of κ = 5 is slid in to fill the gap. What is the field in the gap now?`,
        options: [r`5000 V/m`, r`1000 V/m`, r`25 000 V/m`, r`200 V/m`],
        correctAnswer: 0,
        explanation: r`The battery holds V fixed and the gap d has not changed, so E = V/d is still 5000 V/m. 1000 V/m divides by κ, which is what happens when the capacitor is isolated. 25 000 V/m multiplies by κ, and 200 V/m divides by κ twice.`,
      },
      {
        question: r`A capacitor stays wired to its supply while an insulating liquid is poured in to fill its gap. Its stored energy rises from 2.0 mJ to 9.0 mJ. What is the liquid's dielectric constant?`,
        options: [r`κ = 4.5`, r`κ = 2.1`, r`κ = 0.22`, r`κ = 7.0`],
        correctAnswer: 0,
        explanation: r`With V fixed, U = ½CV² goes with C, so U rises by the factor κ: κ = (9.0 mJ)/(2.0 mJ) = 4.5. 2.1 takes a square root that is not needed, 0.22 inverts the ratio, and 7.0 subtracts the energies instead of dividing.`,
      },
      {
        question: r`A 24 V supply stays wired to a capacitor while a slab of κ = 6 is slid in to fill the gap. Once things settle, what is the voltage across the capacitor?`,
        options: [r`4.0 V`, r`24 V`, r`144 V`, r`6.0 V`],
        correctAnswer: 1,
        explanation: r`The capacitor is still connected across the supply, so its voltage is held at the supply's 24 V whatever is put in the gap. 4.0 V divides by κ, which is the result for an isolated capacitor, 144 V multiplies by κ, and 6.0 V is just the value of κ.`,
      },
      {
        question: r`A capacitor whose gap is filled by a slab of κ = 2.5 stores 50 mJ while wired to its battery. With the battery still attached, the slab is pulled all the way out. How much energy does it store now?`,
        options: [r`125 mJ`, r`20 mJ`, r`50 mJ`, r`8.0 mJ`],
        correctAnswer: 1,
        explanation: r`With V fixed, U = ½CV² goes with C. Removing the slab divides C by κ, so U = (50 mJ)/2.5 = 20 mJ. 125 mJ multiplies by κ, which is the result for an isolated capacitor, 50 mJ leaves the energy unchanged, and 8.0 mJ divides by κ twice.`,
      },
      {
        question: r`An air-filled 4.0 nF capacitor is wired across a 5.0 V supply. With the supply still attached, the gap is filled with an insulator of κ = 3. How much additional charge does the supply deliver to the positive plate?`,
        options: [r`60 nC`, r`20 nC`, r`40 nC`, r`0 nC`],
        correctAnswer: 2,
        explanation: r`Before, Q = CV = (4.0 nF)(5.0 V) = 20 nC. With V fixed, Q rises by κ to 60 nC, so the supply delivers the extra 60 − 20 = 40 nC. 60 nC is the whole final charge, 20 nC is the starting charge, and 0 nC treats the charge as fixed, the isolated case.`,
      },
    ],
  },
  [r`With the capacitor isolated, what is fixed, and how do a dielectric's effects follow?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A charged capacitor with nothing wired to it holds 80 nC on each plate. A slab of κ = 4 is slid in to fill the gap. What charge does each plate hold now?`,
        options: [r`20 nC`, r`320 nC`, r`5.0 nC`, r`80 nC`],
        correctAnswer: 3,
        explanation: r`An isolated capacitor has no path for charge to arrive or leave, so Q stays at 80 nC. It is the voltage, field and energy that fall by κ. 20 nC divides the charge by κ, 320 nC multiplies it, as happens with a battery attached, and 5.0 nC divides by κ twice.`,
      },
      {
        question: r`The field between the plates of an isolated, charged capacitor is 1.2 × 10⁴ V/m. A slab of κ = 6 is slid in to fill the gap. What is the field now?`,
        options: [r`2.0 × 10³ V/m`, r`7.2 × 10⁴ V/m`, r`1.2 × 10⁴ V/m`, r`3.3 × 10² V/m`],
        correctAnswer: 0,
        explanation: r`With Q fixed, the voltage falls by κ, and so does the field E = V/d: (1.2 × 10⁴ V/m)/6 = 2.0 × 10³ V/m. 7.2 × 10⁴ V/m multiplies by κ, 1.2 × 10⁴ V/m is the unchanged field of a capacitor still on its battery, and 3.3 × 10² V/m divides by κ twice.`,
      },
      {
        question: r`A charged capacitor with nothing connected to it stores 45 μJ. After a slab is slid in to fill its gap, it stores 9.0 μJ. What is the slab's dielectric constant?`,
        options: [r`κ = 0.20`, r`κ = 2.2`, r`κ = 25`, r`κ = 5.0`],
        correctAnswer: 3,
        explanation: r`With Q fixed, U = Q²/2C goes as 1/C, so U falls by the factor κ: κ = (45 μJ)/(9.0 μJ) = 5.0. 0.20 inverts the ratio, 2.2 takes a square root that is not needed, and 25 squares the factor.`,
      },
      {
        question: r`An isolated capacitor whose gap is filled by a slab of κ = 4 stores 3.0 mJ. The slab is pulled all the way out, with the capacitor still isolated. How much energy does it store now?`,
        options: [r`12 mJ`, r`0.75 mJ`, r`3.0 mJ`, r`48 mJ`],
        correctAnswer: 0,
        explanation: r`With Q fixed, U = Q²/2C goes as 1/C. Removing the slab divides C by 4, so U rises to 4 × 3.0 mJ = 12 mJ (the work done pulling the slab out). 0.75 mJ divides by κ, which is the change for a slab going in, 3.0 mJ leaves U unchanged, and 48 mJ applies the factor twice.`,
      },
      {
        question: r`A high-resistance electrometer reads 240 V across an isolated, charged capacitor. The capacitor is lowered into an oil of κ = 2.4 that fills its gap. What does the electrometer read now?`,
        options: [r`100 V`, r`580 V`, r`240 V`, r`42 V`],
        correctAnswer: 0,
        explanation: r`With Q fixed and C raised by κ, V = Q/C falls by κ: (240 V)/2.4 = 100 V. 580 V multiplies by κ, 240 V is the unchanged voltage of a capacitor still on its battery, and 42 V divides by κ twice.`,
      },
      {
        question: r`An isolated capacitor holds 50 μC on each plate, and the field in its gap is 8000 V/m. A slab of κ = 2 is slid in to fill the gap. What are the charge and the field afterward?`,
        options: [r`25 μC and 4000 V/m`, r`50 μC and 8000 V/m`, r`100 μC and 8000 V/m`, r`50 μC and 4000 V/m`],
        correctAnswer: 3,
        explanation: r`Isolated means Q is fixed at 50 μC, while V and E fall by κ: (8000 V/m)/2 = 4000 V/m. 100 μC and 8000 V/m is the result with a battery attached, where Q rises and E stays. The other two either halve the charge as well or leave the field unchanged.`,
      },
    ],
  },
  [r`The gap between a capacitor's plates is doubled. What happens to its energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor stores 8.0 mJ while wired to its battery. With the battery still attached, its plates are moved apart until the gap is twice as wide. What is the stored energy now, and what did the charge do?`,
        options: [r`16 mJ; charge came out of the battery`, r`4.0 mJ; charge stayed put on the plates`, r`4.0 mJ; charge went back to the battery`, r`16 mJ; charge stayed put on the plates`],
        correctAnswer: 2,
        explanation: r`Doubling the gap halves C. With V fixed, U = ½CV² halves to 4.0 mJ, and Q = CV halves too, so half the charge flows back to the battery. 16 mJ is the result for an isolated capacitor, and charge cannot stay put when C changes at a fixed voltage.`,
      },
      {
        question: r`A charged capacitor is disconnected from its battery with 30 V across it. Its plates are then pulled apart until the gap is twice as wide. What is the voltage across it now?`,
        options: [r`15 V`, r`30 V`, r`60 V`, r`120 V`],
        correctAnswer: 2,
        explanation: r`Doubling the gap halves C. The charge is fixed, so V = Q/C doubles to 60 V. 15 V halves the voltage along with the capacitance, 30 V is what a capacitor still on its battery would show, and 120 V applies the factor of 2 twice.`,
      },
      {
        question: r`A capacitor wired to a battery holds 90 nC on each plate. With the battery still attached, the gap between the plates is doubled. What charge does each plate hold now?`,
        options: [r`90 nC`, r`45 nC`, r`180 nC`, r`23 nC`],
        correctAnswer: 1,
        explanation: r`Doubling the gap halves C, and with V fixed by the battery, Q = CV halves to 45 nC as charge flows back to the battery. 90 nC keeps the charge fixed, which is the isolated case, 180 nC doubles it, and 23 nC halves it twice.`,
      },
      {
        question: r`An isolated, charged capacitor stores 6.0 μJ. A student pulls its plates apart until the gap is twice as wide. How much work did the student do against the attraction between the plates?`,
        options: [r`12 μJ`, r`6.0 μJ`, r`3.0 μJ`, r`0 μJ`],
        correctAnswer: 1,
        explanation: r`Doubling the gap halves C, and with Q fixed, U = Q²/2C doubles from 6.0 μJ to 12 μJ. The extra 12 − 6.0 = 6.0 μJ is the work done by the student. 12 μJ is the final energy, not the work, 3.0 μJ assumes the energy halved, and 0 μJ ignores the pull of the + plate on the − plate.`,
      },
      {
        question: r`An isolated, charged capacitor stores 14 mJ. Its plates are then moved toward each other until the gap is HALF as wide. How much energy does it store now?`,
        options: [r`28 mJ`, r`7.0 mJ`, r`14 mJ`, r`3.5 mJ`],
        correctAnswer: 1,
        explanation: r`Halving the gap doubles C, and with Q fixed, U = Q²/2C halves to 7.0 mJ (the attracting plates do work as they come together). 28 mJ is the result for doubling the gap instead, 14 mJ leaves the energy unchanged, and 3.5 mJ applies the factor twice.`,
      },
      {
        question: r`Two identical 12 pF capacitors are charged; one stays wired to its battery and the other is disconnected. The gap of each is then doubled. What are their capacitances now?`,
        options: [r`6.0 pF connected, 24 pF isolated`, r`6.0 pF connected, 6.0 pF isolated`, r`6.0 pF connected, 12 pF isolated`, r`24 pF connected, 6.0 pF isolated`],
        correctAnswer: 1,
        explanation: r`Capacitance depends only on the geometry, so doubling the gap halves it to 6.0 pF in both cases. What differs between the two is the energy: it halves when connected and doubles when isolated. The other answers let the wiring change the capacitance itself.`,
      },
    ],
  },
  [r`A battery charges a capacitor through a resistor. Where does the energy go?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 2.0 kV supply fully charges an empty 5.0 nF capacitor through a resistor. How much energy does the supply deliver in total?`,
        options: [r`20 mJ`, r`10 mJ`, r`10 μJ`, r`20 nJ`],
        correctAnswer: 0,
        explanation: r`The supply delivers QV, with Q = CV = (5.0 × 10⁻⁹ F)(2.0 × 10³ V) = 1.0 × 10⁻⁵ C, so QV = (1.0 × 10⁻⁵)(2.0 × 10³) = 2.0 × 10⁻² J = 20 mJ. 10 mJ is only the half stored in the capacitor, 10 μJ is the charge with the wrong unit, and 20 nJ uses 2.0 V instead of 2.0 kV.`,
      },
      {
        question: r`A battery charges a camera's empty flash capacitor through a resistor until the capacitor stores 0.40 J. How much energy became heat in the resistor during charging?`,
        options: [r`0.20 J`, r`0.40 J`, r`0.80 J`, r`0.10 J`],
        correctAnswer: 1,
        explanation: r`The battery delivers QV, the capacitor keeps ½QV, and the other ½QV becomes heat, so the heat equals the stored energy: 0.40 J. 0.80 J is the battery's total output, 0.20 J takes half of the stored energy, and 0.10 J takes a quarter.`,
      },
      {
        question: r`A 6.0 V battery charges an empty capacitor through a resistor. When charging ends, each plate holds 50 μC. How much energy became heat in the resistor?`,
        options: [r`300 μJ`, r`75 μJ`, r`900 μJ`, r`150 μJ`],
        correctAnswer: 3,
        explanation: r`The heat is half of what the battery delivers: ½QV = ½ × 50 μC × 6.0 V = 150 μJ. 300 μJ is the battery's whole output, QV. 75 μJ halves a second time, and 900 μJ squares the voltage: ½ × 50 × 6.0² = 900.`,
      },
      {
        question: r`A battery charges an empty capacitor through a 1.0 kΩ resistor, and 8.0 mJ becomes heat in the resistor. The capacitor is emptied and charged again by the same battery through a 4.0 kΩ resistor. How much heat appears this time?`,
        options: [r`32 mJ`, r`2.0 mJ`, r`16 mJ`, r`8.0 mJ`],
        correctAnswer: 3,
        explanation: r`The heat is always ½QV, half of what the battery delivers, whatever the size of the resistor. A larger resistor only makes charging slower, so the heat is 8.0 mJ again. 32 mJ scales the heat with R, 2.0 mJ scales it with 1/R, and 16 mJ scales it with the square root of R.`,
      },
      {
        question: r`A battery fully charges an empty 100 μF capacitor through a resistor, and 5.0 mJ becomes heat in the resistor. What is the battery's voltage?`,
        options: [r`10 V`, r`7.1 V`, r`100 V`, r`14 V`],
        correctAnswer: 0,
        explanation: r`The heat equals the energy stored, ½CV² = 5.0 × 10⁻³ J, so V² = (1.0 × 10⁻² J)/(1.0 × 10⁻⁴ F) = 100 V² and V = 10 V. 7.1 V sets the heat equal to CV², 100 V forgets the square root, and 14 V sets the heat equal to ¼CV².`,
      },
      {
        question: r`A battery of steady voltage delivers a total of 90 mJ while it fully charges an empty capacitor through the resistance of its wiring. Where has that energy gone once charging ends?`,
        options: [r`90 mJ stored and 0 mJ as heat`, r`60 mJ stored and 30 mJ as heat`, r`30 mJ stored and 60 mJ as heat`, r`45 mJ stored and 45 mJ as heat`],
        correctAnswer: 3,
        explanation: r`The source delivers QV, the capacitor stores ½QV, and the other half becomes heat in the resistance: 45 mJ each. Storing all 90 mJ ignores the heat, which is there however small the resistance. The uneven splits have no basis: the division is always half and half.`,
      },
    ],
  },
  [r`A slab goes into a capacitor. What is the first question to ask?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A slab is about to be slid into each of four charged capacitors. For which one is the CHARGE, not the voltage, the quantity that is held fixed?`,
        options: [r`One whose leads were cut after charging`, r`One left across its battery throughout`, r`One wired to a supply set at a steady 5 V`, r`One kept in a closed loop with a 9 V cell`],
        correctAnswer: 0,
        explanation: r`Charge is fixed only when the capacitor is disconnected, because then no charge can reach or leave the plates. A capacitor still wired to a battery, a supply or a cell is connected, so the source holds its voltage fixed and moves charge on or off as needed.`,
      },
      {
        question: r`While a slab was slid into a charged capacitor, the charge on each plate grew and the voltage across the plates did not change. What does that tell you about the setup?`,
        options: [r`It was isolated, so Q was held fixed`, r`It was connected, so Q was held fixed`, r`It was isolated, so V was held fixed`, r`It was connected, so V was held fixed`],
        correctAnswer: 3,
        explanation: r`A steady voltage with a growing charge means a battery was attached: it holds V fixed and supplies the extra charge as C rises. An isolated capacitor keeps its charge and its voltage falls. A connection fixes V rather than Q, and isolation fixes Q rather than V.`,
      },
    ],
  },
  [r`What happens to the capacitance when a slab fills the gap?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A 6.0 pF capacitor is charged and then disconnected from everything. A slab of κ = 4 is slid in to fill its gap. What is its capacitance now?`,
        options: [r`1.5 pF`, r`6.0 pF`, r`24 pF`, r`10 pF`],
        correctAnswer: 2,
        explanation: r`The capacitance becomes κC whether or not a battery is attached: (4)(6.0 pF) = 24 pF. 1.5 pF divides by κ, confusing C with the voltage, which does fall. 6.0 pF assumes that a fixed charge means a fixed capacitance, and 10 pF adds κ.`,
      },
      {
        question: r`A 2.0 nF capacitor stays wired across a 9.0 V battery while a slab of κ = 7 is slid in to fill its gap. What is its capacitance now?`,
        options: [r`2.0 nF`, r`0.29 nF`, r`14 nF`, r`126 nF`],
        correctAnswer: 2,
        explanation: r`The capacitance becomes κC, connected or not: (7)(2.0 nF) = 14 nF. 2.0 nF assumes that a fixed voltage means a fixed capacitance, 0.29 nF divides by κ, and 126 nF also multiplies by the 9.0 V, which gives a charge in nC, not a capacitance.`,
      },
      {
        question: r`An isolated capacitor's capacitance is 30 μF before a slab is slid in to fill its gap and 75 μF afterward. What is the slab's dielectric constant?`,
        options: [r`κ = 0.40`, r`κ = 45`, r`κ = 2.5`, r`κ = 1.0`],
        correctAnswer: 2,
        explanation: r`The new capacitance is κC even for an isolated capacitor, so κ = (75 μF)/(30 μF) = 2.5. 0.40 inverts the ratio, 45 subtracts instead of dividing, and 1.0 would mean the slab did nothing, yet the capacitance changed.`,
      },
      {
        question: r`An isolated capacitor with a slab of κ = 3 filling its gap has a capacitance of 27 nF. The slab is pulled all the way out. What is its capacitance now?`,
        options: [r`81 nF`, r`27 nF`, r`9.0 nF`, r`3.0 nF`],
        correctAnswer: 2,
        explanation: r`With the slab in, the capacitance is κ times the empty value, so pulling it out divides by κ: (27 nF)/3 = 9.0 nF. 81 nF multiplies by κ, as for a slab going in. 27 nF assumes that isolation freezes the capacitance, and 3.0 nF divides by κ twice.`,
      },
      {
        question: r`Capacitors X and Y are each 5.0 μF. X stays wired to its battery and gets a slab of κ = 2; Y is disconnected and gets a slab of κ = 6. Each slab fills the gap. What are their capacitances now?`,
        options: [r`10 μF for X and 30 μF for Y`, r`10 μF for X and 5.0 μF for Y`, r`10 μF for X and 0.83 μF for Y`, r`5.0 μF for X and 30 μF for Y`],
        correctAnswer: 0,
        explanation: r`Each capacitance becomes κC, connected or not: 2 × 5.0 μF = 10 μF for X and 6 × 5.0 μF = 30 μF for Y. Leaving Y at 5.0 μF or dividing it by κ to get 0.83 μF treats isolation as changing the rule, and leaving X at 5.0 μF does the same for the battery.`,
      },
      {
        question: r`An isolated 300 pF capacitor has its gap filled by an insulator of κ = 20. What is its capacitance now?`,
        options: [r`6.0 μF`, r`6.0 nF`, r`15 pF`, r`300 pF`],
        correctAnswer: 1,
        explanation: r`The capacitance becomes κC = (20)(300 pF) = 6000 pF, and 1000 pF = 1 nF, so it is 6.0 nF. 6.0 μF slips three powers of ten in the conversion, 15 pF divides by κ, and 300 pF assumes an isolated capacitor keeps its capacitance.`,
      },
    ],
  },
  [r`An isolated capacitor gets a slab. How do you find its new voltage and energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`An isolated capacitor carries 120 μC on each plate. Sliding a slab in to fill the gap raises its capacitance from 4.0 μF to 8.0 μF. What is the voltage across it afterward?`,
        options: [r`30 V`, r`60 V`, r`7.5 V`, r`15 V`],
        correctAnswer: 3,
        explanation: r`The charge is unchanged, so V = Q/C with the NEW capacitance: 120 μC ÷ 8.0 μF = 15 V. 30 V uses the old 4.0 μF, which gives the voltage before the slab. 60 V doubles that instead of halving it, and 7.5 V halves twice.`,
      },
      {
        question: r`An isolated capacitor carries 20 μC on each plate. A slab of κ = 5 fills its gap and raises its capacitance from 2.0 μF to 10 μF. How much energy does it store afterward?`,
        options: [r`100 μJ`, r`40 μJ`, r`500 μJ`, r`20 μJ`],
        correctAnswer: 3,
        explanation: r`With Q fixed, U = Q²/2C with the new C: (20 × 10⁻⁶)²/(2 × 10 × 10⁻⁶) = (400 × 10⁻¹²)/(20 × 10⁻⁶) = 20 × 10⁻⁶ J. 100 μJ uses the old 2.0 μF, which is the energy before the slab. 40 μJ leaves out the 2, and 500 μJ multiplies the old energy by κ.`,
      },
      {
        question: r`A capacitor with nothing wired to it holds 3.6 mJ at 24 V. Filling its gap with a slab brings the reading on a voltmeter across it down to 8.0 V. What is its energy at that point?`,
        options: [r`1.2 mJ`, r`0.40 mJ`, r`3.6 mJ`, r`11 mJ`],
        correctAnswer: 0,
        explanation: r`The voltage fell by 24/8.0 = 3, so κ = 3. With Q fixed, U = Q²/2C also falls by κ: (3.6 mJ)/3 = 1.2 mJ. 0.40 mJ scales the energy with V², which forgets that C tripled as V fell. 3.6 mJ leaves the energy unchanged, and 11 mJ multiplies by 3.`,
      },
      {
        question: r`A 3.0 nF sensor capacitor is charged to 12 V, its leads are cut, and it is dropped into an oil of κ = 4 that fills its gap. What does a very high-resistance voltmeter read across it afterward?`,
        options: [r`48 V`, r`12 V`, r`0.75 V`, r`3.0 V`],
        correctAnswer: 3,
        explanation: r`The charge is fixed at Q = (3.0 nF)(12 V) = 36 nC and the new capacitance is 4 × 3.0 nF = 12 nF, so V = Q/C = (36 nC)/(12 nF) = 3.0 V. 48 V multiplies by κ, 12 V is the unchanged voltage of a capacitor still on its battery, and 0.75 V divides by κ twice.`,
      },
      {
        question: r`A slab of κ = 8 is slid in to fill the gap of an isolated, charged capacitor. How do the voltage V across it and its stored energy U compare with their values before?`,
        options: [r`V falls to 1/8 and U falls to 1/8`, r`V falls to 1/8 and U falls to 1/64`, r`V stays fixed and U falls to 1/8`, r`V falls to 1/8 and U rises 8 times`],
        correctAnswer: 0,
        explanation: r`With Q fixed and C eight times as large, V = Q/C falls to 1/8 and U = Q²/2C falls to 1/8 as well. 1/64 comes from squaring the voltage change in ½CV² while keeping the old C. A fixed V describes a capacitor on its battery, and U cannot rise when Q is fixed and C grows.`,
      },
      {
        question: r`After a slab of κ = 5 is slid in to fill its gap, an isolated capacitor has 4.0 V across it. What was the voltage across it before the slab went in?`,
        options: [r`0.80 V`, r`4.0 V`, r`100 V`, r`20 V`],
        correctAnswer: 3,
        explanation: r`With Q fixed, the slab makes V = Q/C fall by κ, so the voltage before was 5 × 4.0 V = 20 V. 0.80 V divides by κ, running the change the wrong way. 4.0 V assumes the voltage never changed, and 100 V applies the factor of 5 twice.`,
      },
    ],
  },
  [r`A connected capacitor gets a slab. How do you find its new charge and energy?`]: {
    kind: 'calc',
    more: [
      {
        question: r`A capacitor stays wired across a 12 V battery while a slab is slid in, raising its capacitance from 5.0 nF to 15 nF. What charge does each plate hold afterward?`,
        options: [r`60 nC`, r`20 nC`, r`180 nC`, r`540 nC`],
        correctAnswer: 2,
        explanation: r`The battery holds V at 12 V, so Q = CV with the NEW capacitance: (15 nF)(12 V) = 180 nC. 60 nC uses the old 5.0 nF, which is the charge before the slab. 20 nC divides that by 3 instead of multiplying, and 540 nC multiplies by 3 twice.`,
      },
      {
        question: r`A 2.0 μF capacitor stays wired across a 10 V supply while a slab of κ = 4 is slid in to fill its gap. How much energy does it store afterward?`,
        options: [r`100 μJ`, r`800 μJ`, r`400 μJ`, r`25 μJ`],
        correctAnswer: 2,
        explanation: r`The new capacitance is 4 × 2.0 μF = 8.0 μF and V stays at 10 V, so U = ½CV² = ½(8.0 μF)(10 V)² = 400 μJ. 100 μJ uses the old 2.0 μF, which is the energy before the slab. 800 μJ leaves out the ½, and 25 μJ divides the old energy by κ.`,
      },
      {
        question: r`A 6.0 V battery is left attached to a 10 μF capacitor. Packing the gap with an insulator of κ = 2.5 makes the battery push more charge onto the positive plate. How much more?`,
        options: [r`90 μC`, r`150 μC`, r`60 μC`, r`36 μC`],
        correctAnswer: 0,
        explanation: r`Before, Q = (10 μF)(6.0 V) = 60 μC. After, Q = (25 μF)(6.0 V) = 150 μC, so the battery adds the difference, 90 μC. 150 μC is the whole final charge, 60 μC is the starting charge, and 36 μC subtracts 60/2.5 = 24 μC from 60 μC, as if the charge had fallen.`,
      },
      {
        question: r`A 4.0 μF capacitor stays wired across a 50 V supply while a slab is slid in to fill its gap. Afterward each plate holds 600 μC. What is the slab's dielectric constant?`,
        options: [r`κ = 3.0`, r`κ = 12`, r`κ = 0.33`, r`κ = 150`],
        correctAnswer: 0,
        explanation: r`With V fixed at 50 V, the new capacitance is C = Q/V = 600 μC ÷ 50 V = 12 μF, so κ = (12 μF)/(4.0 μF) = 3.0. 12 is the new capacitance in μF, not the ratio. 0.33 inverts the ratio, and 150 divides the charge by the old capacitance, which gives a voltage.`,
      },
      {
        question: r`A 2.0 nF capacitor stays wired across a 3.0 kV supply while a slab of κ = 5 is slid in to fill its gap. How much energy does it store afterward?`,
        options: [r`9.0 mJ`, r`45 mJ`, r`90 mJ`, r`15 μJ`],
        correctAnswer: 1,
        explanation: r`The new capacitance is 5 × 2.0 nF = 10 nF, so U = ½CV² = ½(1.0 × 10⁻⁸ F)(3.0 × 10³ V)² = ½(1.0 × 10⁻⁸)(9.0 × 10⁶) = 4.5 × 10⁻² J = 45 mJ. 9.0 mJ uses the old 2.0 nF, 90 mJ leaves out the ½, and 15 μJ forgets to square the voltage.`,
      },
      {
        question: r`With air in its gap a capacitor measures 6.0 μF. It is left on a battery, an insulator of κ = 2 is packed into the gap, and each plate then carries 240 μC. What voltage does the battery supply?`,
        options: [r`40 V`, r`10 V`, r`20 V`, r`80 V`],
        correctAnswer: 2,
        explanation: r`The new capacitance is 2 × 6.0 μF = 12 μF, and the battery's voltage is V = Q/C = 240 μC ÷ 12 μF = 20 V. 40 V uses the old 6.0 μF with the new charge. 10 V applies the factor of 2 a second time, and 80 V doubles the 40 V.`,
      },
    ],
  },
  [r`An isolated capacitor's energy falls when a slab goes in. Where does it go?`]: {
    kind: 'concept',
    more: [
      {
        question: r`A dielectric slab is released from rest at the edge of the gap of an isolated, charged capacitor, on a frictionless track. What does the slab do, and why?`,
        options: [r`It is pushed out; the field does work on it`, r`It stays at rest; it carries no net charge`, r`It is drawn in; the battery does work on it`, r`It is drawn in; the field does work on it`],
        correctAnswer: 3,
        explanation: r`The field polarizes the slab and pulls it into the gap, doing work on it, which is why the capacitor's stored energy falls. The slab is attracted, not repelled, and being neutral overall does not stop a polarized object from being pulled. No battery is attached to an isolated capacitor.`,
      },
      {
        question: r`A slab of κ = 4 fills the gap of an isolated, charged capacitor that stores 2.0 mJ. A student pulls the slab all the way out, and the capacitor then stores 8.0 mJ. Where did the extra 6.0 mJ come from?`,
        options: [r`From the battery that had charged the plates`, r`From new charge that flowed onto the plates`, r`From the work the student did pulling it out`, r`From heat given up by the slab as it cooled`],
        correctAnswer: 2,
        explanation: r`The field pulls the polarized slab inward, so the student must do work against that pull to remove it, and this work becomes stored energy. It is the reverse of the slab being drawn in. The battery is disconnected, no charge can reach isolated plates, and the slab does not supply heat.`,
      },
    ],
  },
  [r`What is the common trap with $\tfrac12 CV^2$ after a slab goes in?`]: {
    kind: 'concept',
    more: [
      {
        question: r`An isolated 4.0 μF capacitor at 20 V (80 μC on each plate) gets a slab of κ = 2 that fills its gap. Which line of working gives the energy stored afterward?`,
        options: [r`U = ½(8.0 μF)(20 V)² = 1.6 mJ`, r`U = ½(4.0 μF)(10 V)² = 0.20 mJ`, r`U = ½(4.0 μF)(20 V)² = 0.80 mJ`, r`U = (80 μC)²/(2 × 8.0 μF) = 0.40 mJ`],
        correctAnswer: 3,
        explanation: r`Q is fixed at 80 μC and the new C is 8.0 μF, so U = Q²/2C = 0.40 mJ, which agrees with ½(8.0 μF)(10 V)². The 1.6 mJ line updates C but keeps the old 20 V, the 0.20 mJ line updates V but keeps the old 4.0 μF, and the 0.80 mJ line is the energy before the slab.`,
      },
      {
        question: r`An isolated 6.0 μF capacitor at 10 V gets a slab of κ = 2 that fills its gap, and the correct energy afterward is 0.15 mJ. A student reports 0.075 mJ instead. What did the student most likely put into ½CV²?`,
        options: [r`The old V with the new C`, r`The new V with the old C`, r`The old V with the old C`, r`The new V with the new C`],
        correctAnswer: 1,
        explanation: r`After the slab, C = 12 μF and V = 5.0 V. The student's 0.075 mJ is ½(6.0 μF)(5.0 V)², the new voltage with the old capacitance. The old V with the new C gives 0.60 mJ, the old values of both give the starting 0.30 mJ, and the new values of both give the correct 0.15 mJ.`,
      },
    ],
  },
}
