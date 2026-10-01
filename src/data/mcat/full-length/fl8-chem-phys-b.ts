/**
 * MCAT Full-Length Form 8 — Chem/Phys, file B (passages 6–10 + 7 discretes).
 * Authored 2026-10-01 against the AAMC-blueprint rebuild brief: 400–600 word
 * passages, information + experiment mix, keys that never restate a passage
 * sentence, parallel-length options, position-balanced keys. Keys await an
 * independent blind-solve (no needsReview flags set here by design).
 *
 * LaTeX renders through KaTeX; backslashes are double-escaped in these strings.
 */
import type { MCATPassage, MCATDiscreteQuestion } from '../types'

export const FL8_CHEM_PHYS_B_PASSAGES: MCATPassage[] = [
  // ────────────────────────────────────────────────────────────────────────
  // 6. GENERAL CHEMISTRY — The glass pH electrode as a concentration cell (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-b-06',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Calibrating a Glass Electrode at Two Temperatures',
    passageText:
      'A glass pH electrode converts the hydrogen ion concentration of a solution into a voltage. Its sensing element is a thin bulb of specially formulated glass that separates the sample from an internal solution sealed inside the bulb. The internal solution is buffered, so its hydrogen ion concentration does not change. Hydrogen ions do not pass through the glass. Instead, the hydrated surface layer on each face of the glass exchanges $\\text{H}^+$ with the solution it touches, and each face acquires an electric potential that depends on the $\\text{H}^+$ concentration of that solution. An identical silver–silver chloride reference electrode makes electrical contact with each of the two solutions, and a meter of very high resistance, which draws almost no current, reads the potential difference, $E$, between the two reference electrodes.\n\nBecause the two sides of the membrane differ only in the concentration of one ion, the device behaves as a concentration cell, and its voltage follows the Nernst equation:\n\n$E = \\dfrac{2.303RT}{zF}\\,\\log\\dfrac{C_{\\text{sample}}}{C_{\\text{internal}}}$\n\nwhere $R$ is the gas constant, $T$ is the absolute temperature, $F$ is the Faraday constant, $z$ is the charge of the ion to which the membrane responds, and $C$ is the concentration of that ion. For $\\text{H}^+$, $z = +1$, and the equation can be written as $E = (2.303RT/F)(\\text{pH}_{\\text{internal}} - \\text{pH}_{\\text{sample}})$. A pH meter does not calculate pH from this equation directly. It is first calibrated with buffers of known pH, and it then converts the voltage of a sample into a pH by using the slope of the calibration line.\n\nStudents calibrated an electrode whose internal solution had a pH of 7.00. They immersed it in three standard buffers held in a water bath at 25 °C, recorded $E$ for each buffer, and then repeated the measurements with the bath at 37 °C. The pH values listed in Table 1 are those of the buffers at the temperature of measurement.\n\nThe students next examined the behavior of the electrode in a strongly basic solution. In 0.10 M NaOH at 25 °C, which has a pH of 13.0, the reading was −337 mV, less negative than the value predicted from the calibration line. One student proposed that when the $\\text{H}^+$ concentration is very low, the glass surface also responds weakly to $\\text{Na}^+$, which in this solution was $10^{12}$ times as concentrated as $\\text{H}^+$.\n\nMembranes made of other materials respond selectively to other ions, and the same equation applies to them with the appropriate value of $z$. Ion-selective electrodes of this kind are used in clinical analyzers to measure $\\text{Na}^+$, $\\text{K}^+$, $\\text{Ca}^{2+}$, and $\\text{Cl}^-$ in small samples of blood plasma. No membrane is perfectly selective, however. Each electrode responds to some extent to ions other than the one it is designed to measure, and such interference becomes important when the interfering ion is far more concentrated than the ion of interest.',
    figure:
      '**Table 1.** Potential of the glass electrode in three standard buffers\n\n| pH of buffer | $E$ at 25 °C (mV) | $E$ at 37 °C (mV) |\n|---|---|---|\n| 4.00 | +177.6 | +184.5 |\n| 7.00 | 0.0 | 0.0 |\n| 10.00 | −177.6 | −184.5 |',
    questions: [
      {
        question: 'A sample measured at 25 °C with the calibrated electrode gave $E$ = +118.4 mV. Based on Table 1, the pH of the sample is closest to:',
        options: ['2.00', '5.00', '5.08', '9.00'],
        correctAnswer: 1,
        explanation:
          'Table 1 shows that $E$ is zero at pH 7.00 and changes by 177.6 mV over 3.00 pH units at 25 °C, or 59.2 mV per pH unit, becoming more positive as the pH falls. A reading of +118.4 mV is 118.4/59.2 = 2.00 units below 7.00, so the pH is 5.00. The value 9.00 places the sample on the wrong side of pH 7.00, which would require a negative reading. The value 2.00 is the number of pH units by which the sample differs from the internal solution, not the pH itself, and 5.08 results from using the 37 °C slope of 61.5 mV per pH unit.',
        skill: '4C pH from an electrode calibration table (Skill 4)',
      },
      {
        question: 'A urine sample whose true pH at 37 °C is 5.00 is measured at 37 °C with a meter that was calibrated at 25 °C and that applies the 25 °C calibration slope without correction. Compared with the true pH, the pH displayed by the meter is:',
        options: [
          'lower, because the larger voltage per pH unit at 37 °C is read as a pH farther from 7.00',
          'higher, because the larger voltage per pH unit at 37 °C is read as a pH closer to 7.00',
          'the same, because the electrode reads 0 mV at pH 7.00 at both temperatures',
          'the same, because the meter responds to concentration and not to temperature',
        ],
        correctAnswer: 0,
        explanation:
          'At 37 °C, Table 1 gives 184.5/3.00 = 61.5 mV per pH unit, so a sample of pH 5.00 produces about +123 mV. A meter that divides this voltage by the 25 °C slope of 59.2 mV per unit finds a difference of 2.08 units from pH 7.00 and displays about 4.92, which is lower than the true pH. For this acidic sample a reading closer to 7.00, and so higher, would follow only if the slope were smaller at 37 °C than at 25 °C; for a sample above pH 7.00 the same error would make the display too high. The common zero at pH 7.00 means only that a sample of exactly pH 7.00 would be read correctly; every other sample is affected by the slope, which depends on temperature because $T$ appears in the Nernst equation.',
        skill: '4C temperature dependence of the Nernst slope (Skill 2)',
      },
      {
        question: 'An electrode with a membrane selective for $\\text{Ca}^{2+}$ is used at 25 °C. Based on the passage and Table 1, a tenfold increase in the $\\text{Ca}^{2+}$ concentration of a sample changes $E$ by approximately:',
        options: ['15 mV', '30 mV', '59 mV', '118 mV'],
        correctAnswer: 1,
        explanation:
          'The response of the electrode per tenfold change in concentration is $2.303RT/zF$, which Table 1 shows to be 59.2 mV for $\\text{H}^+$ ($z = +1$) at 25 °C. For $\\text{Ca}^{2+}$, $z = +2$, so the response is half as large, about 30 mV per tenfold change. A value of 59 mV ignores the charge of the ion, 118 mV multiplies by $z$ instead of dividing by it, and 15 mV divides by $z$ twice.',
        skill: '4C Nernst equation and ionic charge (Skill 2)',
      },
      {
        question: 'The passage describes the glass electrode as a concentration cell. Which feature distinguishes a concentration cell from a galvanic cell built from two different metals?',
        options: [
          'Its cell reaction is nonspontaneous, so an outside source must supply its voltage',
          'Its electrodes transfer no electrons, so no half-reactions can be written for it',
          'Its voltage is independent of temperature, so it needs no calibration before use',
          'Its standard potential is zero, so its voltage comes from unequal concentrations',
        ],
        correctAnswer: 3,
        explanation:
          'In a concentration cell the two half-cells contain the same species, so their standard potentials cancel and $E^\\circ = 0$; the Nernst equation then reduces to its concentration term, which is why $E$ is zero when the sample and the internal solution have the same pH. The cell reaction is spontaneous in the direction that would make the two concentrations equal, so no outside source is needed. The same half-reaction runs in opposite directions in the two half-cells, so half-reactions can certainly be written. Table 1 shows that the voltage does depend on temperature.',
        skill: '4C concentration cells and the standard potential (Skill 1)',
      },
      {
        question: 'Which additional experiment would best test the student’s proposal about $\\text{Na}^+$?',
        options: [
          'Recording $E$ in 0.10 M NaOH at 37 °C and comparing it with the value at 25 °C',
          'Recording $E$ in NaOH solutions with concentrations from 0.0010 M to 0.10 M',
          'Recording $E$ in 0.10 M NaOH as solid NaCl is dissolved in it in several portions',
          'Recording $E$ in 0.10 M NaOH after recalibrating with the pH 4.00 and 7.00 buffers',
        ],
        correctAnswer: 2,
        explanation:
          'The proposal is that the electrode responds to $\\text{Na}^+$, so the test must change the $\\text{Na}^+$ concentration while the pH stays essentially constant. Dissolving NaCl, a neutral salt, in 0.10 M NaOH does this: if the reading moves further from the predicted value as $\\text{Na}^+$ rises, the proposal is supported. Varying the concentration of NaOH changes the pH and the $\\text{Na}^+$ concentration together, so their effects cannot be separated. Changing the temperature, or recalibrating in acidic and neutral buffers, leaves the $\\text{Na}^+$ concentration unchanged and does not address the proposal.',
        skill: '4C isolating an interfering ion: research design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 7. BIOCHEMISTRY — Energetics of the Na⁺/Ca²⁺ exchanger (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-b-07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    title: 'Free Energy of Ion Transport by a Sodium–Calcium Exchanger',
    passageText:
      'Cells spend a large share of their ATP maintaining differences in ion concentration across the plasma membrane. The free-energy change for moving one mole of an ion of charge $z$ from the outside of a cell to the inside has a chemical part, which depends on the two concentrations, and an electrical part, which depends on the membrane potential:\n\n$\\Delta G = 2.303RT\\,\\log\\dfrac{C_{\\text{in}}}{C_{\\text{out}}} + zF\\Delta\\psi$\n\nHere $\\Delta\\psi$ is the electric potential of the cytosol relative to that of the extracellular fluid. For movement in the opposite direction, from the inside to the outside, $\\Delta G$ has the same magnitude and the opposite sign. At 37 °C, $2.303RT$ is approximately 6.0 kJ/mol, and $F$ is approximately 0.10 kJ/(mol·mV).\n\nIn animal cells the primary source of ion gradients is the $\\text{Na}^+$/$\\text{K}^+$-ATPase, which uses the hydrolysis of one molecule of ATP to carry three $\\text{Na}^+$ out of the cell and two $\\text{K}^+$ in. The steep inward gradient of $\\text{Na}^+$ that results is itself a store of free energy, and many other membrane proteins draw on it. One of them is the $\\text{Na}^+$/$\\text{Ca}^{2+}$ exchanger of heart muscle cells. In each cycle the exchanger binds three $\\text{Na}^+$ on one side of the membrane and one $\\text{Ca}^{2+}$ on the other and carries them across in opposite directions. The exchanger does not hydrolyze ATP, and, like an enzyme, it can operate in either direction; the direction of net transport is the one for which the total $\\Delta G$ of the cycle is negative. After each heartbeat, the exchanger helps to return the $\\text{Ca}^{2+}$ concentration of the cytosol to its low resting value, which allows the muscle to relax.\n\nInvestigators studied the exchanger in single heart muscle cells isolated from guinea pigs. A glass micropipette sealed against each cell gave electrical access to the cytosol, so that the membrane potential could be held at any chosen value, and the solution in the pipette, which mixed freely with the cytosol, set the ion concentrations inside the cell. The solution bathing the cell set the concentrations outside. Other routes by which $\\text{Na}^+$ and $\\text{Ca}^{2+}$ cross the membrane, including ion channels, were blocked with drugs. Because the charges carried in the two directions during a cycle are unequal, the activity of the exchanger could be recorded as a small membrane current, which was identified as the part of the total current that disappeared when $\\text{Ni}^{2+}$, a blocker of the exchanger, was added to the bath. The direction of this current showed the direction in which $\\text{Ca}^{2+}$ was being transported. Three conditions that differed only in the membrane potential were examined (Table 1).',
    figure:
      '**Table 1.** Ion concentrations, membrane potential, and direction of $\\text{Ca}^{2+}$ transport by the exchanger\n\n| Condition | $\\text{Na}^+$ outside (mM) | $\\text{Na}^+$ inside (mM) | $\\text{Ca}^{2+}$ outside (μM) | $\\text{Ca}^{2+}$ inside (μM) | $\\Delta\\psi$ (mV) | Net $\\text{Ca}^{2+}$ transport |\n|---|---|---|---|---|---|---|\n| 1 | 140 | 14 | 1000 | 0.10 | −90 | Outward |\n| 2 | 140 | 14 | 1000 | 0.10 | −60 | None detected |\n| 3 | 140 | 14 | 1000 | 0.10 | −30 | Inward |',
    questions: [
      {
        question: 'Based on the equation in the passage and Table 1, the free-energy change for the movement of $\\text{Na}^+$ into the cell in Condition 1 is closest to:',
        options: ['−3.0 kJ/mol', '−6.0 kJ/mol', '−9.0 kJ/mol', '−15 kJ/mol'],
        correctAnswer: 3,
        explanation:
          'For inward movement of $\\text{Na}^+$ in Condition 1, the chemical term is 6.0 × log(14/140) = 6.0 × (−1) = −6.0 kJ/mol, and the electrical term is (+1)(0.10)(−90) = −9.0 kJ/mol, for a total of −15 kJ/mol. Both the concentration gradient and the negative potential of the cytosol favor entry. The values −6.0 and −9.0 kJ/mol each include only one of the two terms, and −3.0 kJ/mol results from giving the two terms opposite signs.',
        skill: '5E electrochemical free energy from tabulated data (Skill 4)',
      },
      {
        question: 'Suppose that a mutant exchanger carried two $\\text{Na}^+$, rather than three, for each $\\text{Ca}^{2+}$. With the $\\text{Na}^+$ concentrations and the membrane potential of Condition 1, the largest ratio of outside to inside $\\text{Ca}^{2+}$ concentration against which this mutant could export $\\text{Ca}^{2+}$ is closest to:',
        options: ['$10^{2}$', '$10^{4}$', '$10^{5}$', '$10^{8}$'],
        correctAnswer: 0,
        explanation:
          'Entry of two $\\text{Na}^+$ supplies 2 × 15 = 30 kJ. Exporting one $\\text{Ca}^{2+}$ costs 6.0 × log(ratio) for the concentration term plus (2)(0.10)(90) = 18 kJ for moving two positive charges out of a cell that is negative inside. Export stops when 6.0 × log(ratio) + 18 = 30, that is, when log(ratio) = 2 and the ratio is $10^{2}$. (With two $\\text{Na}^+$ per $\\text{Ca}^{2+}$ the cycle moves no net charge, so the limit is simply the square of the tenfold $\\text{Na}^+$ ratio.) The value $10^{5}$ omits the electrical cost of exporting $\\text{Ca}^{2+}$, $10^{8}$ adds the 18 kJ instead of subtracting it, and $10^{4}$ is the ratio already present in Table 1.',
        skill: '5E limiting gradient of a coupled transporter (Skill 2)',
      },
      {
        question: 'In an intact heart muscle cell, a drug that partially inhibits the $\\text{Na}^+$/$\\text{K}^+$-ATPase would be expected to:',
        options: [
          'lower cytosolic $\\text{Ca}^{2+}$, because $\\text{Na}^+$ entry through the exchanger becomes more favorable',
          'lower cytosolic $\\text{Ca}^{2+}$, because the exchanger must have ATP for each of its cycles',
          'raise cytosolic $\\text{Ca}^{2+}$, because $\\text{Na}^+$ entry through the exchanger becomes less favorable',
          'leave cytosolic $\\text{Ca}^{2+}$ unchanged, because the exchanger does not hydrolyze ATP',
        ],
        correctAnswer: 2,
        explanation:
          'With the pump partly inhibited, $\\text{Na}^+$ accumulates in the cytosol and the inward $\\text{Na}^+$ gradient becomes smaller, so each $\\text{Na}^+$ that enters releases less free energy. The exchanger can then hold $\\text{Ca}^{2+}$ only at a higher cytosolic concentration, and $\\text{Ca}^{2+}$ rises; this is how cardiac glycosides such as digoxin strengthen contraction. A more favorable entry of $\\text{Na}^+$ would require a steeper gradient, not a shallower one. The exchanger does not use ATP directly, but that does not make it independent of the pump, which creates the gradient that the exchanger consumes.',
        skill: '5E coupling of a secondary transporter to the Na⁺/K⁺-ATPase (Skill 2)',
      },
      {
        question: 'The transport carried out by the exchanger in Condition 1 is best classified as:',
        options: [
          'primary active transport, because $\\text{Ca}^{2+}$ is moved against its concentration gradient',
          'secondary active transport, because the gradient of one ion drives another uphill',
          'facilitated diffusion, because the protein does not hydrolyze ATP during its cycle',
          'simple diffusion, because the direction of movement depends on the concentrations',
        ],
        correctAnswer: 1,
        explanation:
          'In Condition 1, $\\text{Ca}^{2+}$ leaves the cell against both its concentration gradient and the membrane potential, so the process is active transport. The energy comes not from ATP hydrolysis by the exchanger but from the downhill entry of $\\text{Na}^+$, which defines secondary active transport (here an antiport). Primary active transport couples movement directly to a chemical reaction such as ATP hydrolysis. In facilitated diffusion every transported species moves down its own electrochemical gradient, and simple diffusion requires no transport protein at all.',
        skill: '5E primary versus secondary active transport (Skill 1)',
      },
      {
        question: 'The investigators want to test directly whether the direction of transport depends on the $\\text{Na}^+$ gradient, as the free-energy analysis predicts. Which additional condition would be most informative?',
        options: [
          'Condition 1 with the outside $\\text{Na}^+$ lowered to 14 mM and all other values unchanged',
          'Condition 1 with the outside $\\text{Na}^+$ lowered to 14 mM and the potential set to −30 mV',
          'Condition 2 with the inside $\\text{Ca}^{2+}$ raised to 1.0 μM and all other values unchanged',
          'Condition 3 with $\\text{Ni}^{2+}$ added to the bath solution and all other values unchanged',
        ],
        correctAnswer: 0,
        explanation:
          'A test of the $\\text{Na}^+$ gradient should change that gradient and nothing else. With 14 mM $\\text{Na}^+$ on both sides at −90 mV, entry of $\\text{Na}^+$ yields only 9 kJ/mol, or 27 kJ per cycle, less than the 42 kJ needed to export one $\\text{Ca}^{2+}$, so the analysis predicts that transport reverses; observing inward transport would confirm the dependence. Changing the potential to −30 mV at the same time would confound the result, because Table 1 shows that this potential alone reverses transport. Raising the inside $\\text{Ca}^{2+}$ alters the $\\text{Ca}^{2+}$ gradient rather than the $\\text{Na}^+$ gradient. Adding $\\text{Ni}^{2+}$ blocks the exchanger and reveals nothing about what drives it.',
        skill: '5E changing one variable to test a driving force (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 8. PHYSICS — Time-of-flight mass spectrometry (experiment)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-b-08',
    section: 'chem-phys',
    discipline: 'physics',
    title: 'Timing Peptide Ions in a Drift Tube',
    passageText:
      'A mass spectrometer sorts ions according to the ratio of their mass to their charge, $m/z$, where $m$ is the mass of the ion in daltons (Da) and $z$ is the number of elementary charges that it carries. In a time-of-flight instrument the sorting is done with a clock: every ion is given the same push, and the instrument measures how long each one takes to cover a fixed distance.\n\nIn the version of the method used for peptides, the sample is mixed with a light-absorbing organic compound and dried on a metal plate inside a vacuum chamber. A laser pulse lasting a few nanoseconds vaporizes a small amount of the mixture and, in the process, transfers protons to the peptide molecules. Most of the peptide ions formed in this way carry one extra proton and therefore a charge of $+e$; a small fraction carry two.\n\nThe plate is held at a potential $V$ above that of a grounded metal grid mounted a few millimeters in front of it. An ion of charge $q$ that starts essentially at rest on the plate is accelerated toward the grid and passes through it with a speed $v$ given by\n\n$qV = \\tfrac{1}{2}mv^2$\n\nBeyond the grid there is no electric field, and the ion coasts down an evacuated tube of length $L$ to a detector. The instrument records the time that elapses between the laser pulse and the arrival of the ion. Because the acceleration region is so short, the time that an ion spends in it is small compared with the time spent in the tube and is neglected here.\n\nInvestigators set $V$ to 25 kV on an instrument with $L$ = 1.10 m and recorded the spectrum of a mixture of six peptide standards of known mass. Each standard was detected as its singly charged ion (Figure 1). The instrument also compensated for the small spread in the ions’ starting speeds, a refinement not described here, and with it could distinguish two arrival times that differed by 2 ns or more.\n\nThe investigators then analyzed peptide P, which has a mass of about 1,600 Da. The spectrum contained a major peak at 20.0 μs and a minor peak at 14.1 μs. They attributed the minor peak to molecules of P that carried two extra protons. A colleague suggested a different origin: a singly charged contaminant with about half the mass of P.\n\nUnder magnification, each peak in a peptide spectrum proves to be a cluster of closely spaced peaks. About 1% of all carbon atoms are $^{13}\\text{C}$ rather than $^{12}\\text{C}$, so a sample of any peptide contains molecules with no $^{13}\\text{C}$ atoms, molecules with one, molecules with two, and so on. The members of this series differ in mass, each from the next, by 1 Da, and each gives a peak of its own. For peptides of the sizes studied here, the first two or three members of the series are all abundant, so several peaks of each cluster are easily seen.',
    chart: {
      title: 'Figure 1. Arrival times of six singly charged peptide standards (V = 25 kV, L = 1.10 m)',
      kind: 'line',
      xLabel: 'm/z of the standard',
      yLabel: 'Arrival time',
      yUnit: 'μs',
      xValues: [400, 800, 1200, 1600, 2000, 2400],
      yValues: [10.0, 14.1, 17.3, 20.0, 22.4, 24.5],
      seriesLabel: 'Singly charged standards',
    },
    questions: [
      {
        question: 'A singly charged ion in another sample reaches the detector 30.0 μs after the laser pulse. Based on Figure 1, the $m/z$ of this ion is closest to:',
        options: ['2,400', '2,900', '3,600', '5,400'],
        correctAnswer: 2,
        explanation:
          'In Figure 1 the arrival time doubles, from 10.0 μs to 20.0 μs, when $m/z$ is quadrupled from 400 to 1,600, so the time is proportional to the square root of $m/z$, as expected from $qV = \\tfrac{1}{2}mv^2$ with $t = L/v$. A time of 30.0 μs is 1.5 times the 20.0 μs of the standard at $m/z$ 1,600, so $m/z$ is $1.5^2 = 2.25$ times as large, or 3,600. The value 2,400 assumes that the time is directly proportional to $m/z$, although Figure 1 places $m/z$ 2,400 at 24.5 μs. The value 2,900 scales $m/z$ in direct proportion to the time from the last point of the figure, and 5,400 multiplies by $1.5^3$.',
        skill: '4C extrapolating a square-root calibration curve (Skill 4)',
      },
      {
        question: 'Suppose that the potential of the plate were lowered from 25 kV to 6.25 kV and nothing else were changed. Based on Figure 1, the standard with $m/z$ 400 would then arrive at approximately:',
        options: ['2.5 μs', '5.0 μs', '14.1 μs', '20.0 μs'],
        correctAnswer: 3,
        explanation:
          'Lowering $V$ to one fourth of its value gives each ion one fourth of the kinetic energy. Because kinetic energy depends on $v^2$, the speed falls to one half, and the time needed to cover the same tube doubles, from the 10.0 μs shown in Figure 1 to 20.0 μs. A time of 5.0 μs has the change in the wrong direction, as if a smaller potential difference produced faster ions. A time of 2.5 μs takes the time to be proportional to $V$, and 14.1 μs is the result of reducing the kinetic energy by a factor of 2 rather than 4.',
        skill: '4C accelerating potential difference, speed, and drift time (Skill 2)',
      },
      {
        question: 'Which statement correctly describes singly charged ions of different masses at the moment they pass through the grid?',
        options: [
          'They have equal kinetic energies, and the lighter ions have the higher speeds',
          'They have equal kinetic energies, and the heavier ions have the higher speeds',
          'They have equal speeds, and the heavier ions have the higher kinetic energies',
          'They have equal momenta, and the lighter ions have the higher kinetic energies',
        ],
        correctAnswer: 0,
        explanation:
          'The work done by an electric field on a charge that moves through a potential difference $V$ is $qV$, whatever the mass of the charge, so all singly charged ions leave the acceleration region with the same kinetic energy. For a fixed value of $\\tfrac{1}{2}mv^2$, the ion with the smaller mass must have the larger speed, which is why light ions reach the detector first. Equal speeds would give every ion the same arrival time, and no separation would be possible. Momentum, $\\sqrt{2m(qV)}$, is larger for the heavier ions when the kinetic energies are equal, so the momenta are not the same.',
        skill: '4C work done by an electric field on a charge (Skill 1)',
      },
      {
        question: 'Which observation would best distinguish the investigators’ explanation of the minor peak from the colleague’s explanation?',
        options: [
          'Whether the minor peak arrives earlier when the plate potential is raised to 30 kV',
          'Whether the peaks within the minor cluster are spaced 0.5 or 1.0 units of $m/z$ apart',
          'Whether the minor peak is still present when the drift tube is lengthened to 2.20 m',
          'Whether the minor peak becomes larger when more of the sample is dried on the plate',
        ],
        correctAnswer: 1,
        explanation:
          'Both explanations place the minor peak at an $m/z$ near 800, so only an observation that depends on the charge of the ion can separate them. Neighboring members of an isotope cluster differ in mass by 1 Da. If the ion carries two charges, the members differ in $m/z$ by 1/2 = 0.5; if it is a singly charged contaminant, they differ by 1.0. At $m/z$ 800 either spacing corresponds to an arrival-time difference of more than 2 ns, so the instrument can tell them apart. Raising the potential or lengthening the tube changes the arrival time of any ion of $m/z$ 800 in the same way, whatever its charge. A larger sample would increase the amount of P and of a contaminant alike.',
        skill: '4C using isotope spacing to assign a charge state: research design (Skill 3)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 9. GENERAL CHEMISTRY — The unusual properties of water (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-b-09',
    section: 'chem-phys',
    discipline: 'general chemistry',
    title: 'Why Water Is an Unusual Liquid',
    passageText:
      'Water is so familiar that its properties are easily taken for granted, yet nearly all of them are unusual for a molecule of its size. Most can be traced to the hydrogen bond. The O–H bonds of water are strongly polar and the molecule is bent, so each hydrogen atom carries a partial positive charge and the oxygen atom carries a partial negative charge. A hydrogen atom of one molecule is attracted to the oxygen atom of a neighbor with an energy of roughly 20 kJ/mol. This is only about one twentieth of the strength of an O–H covalent bond, but it is far greater than the attraction between nonpolar molecules of similar size.\n\nIn ice, every water molecule is hydrogen-bonded to four neighbors that lie at the corners of a tetrahedron. The arrangement is an open one, with a good deal of empty space. When ice melts, only a fraction of the hydrogen bonds break, but the rigid lattice collapses and the molecules crowd closer together. As the liquid is warmed from 0 °C, two effects compete. The remaining ice-like regions continue to collapse, which makes the liquid denser, while faster thermal motion pushes the molecules apart, which makes it less dense. The first effect dominates up to about 4 °C, where the density of liquid water reaches its maximum, and the second dominates at all higher temperatures.\n\nBecause heating liquid water breaks hydrogen bonds as well as speeding up the molecules, water absorbs a large amount of heat for each degree of warming: its specific heat, 4.18 J/(g·K), is about 70% greater than that of ethanol. Converting the liquid to vapor requires that all of the remaining hydrogen bonds be broken, and the heat of vaporization of water, about 2.4 kJ/g at body temperature, is among the highest known for any liquid.\n\nWater is also an excellent solvent for salts. An ion in water is surrounded by a shell of water molecules that are oriented by its charge, and the energy released when these hydration shells form compensates for the energy needed to separate the ions of the crystal. Nonpolar molecules cannot interact with water in this way. Water molecules that lie next to a nonpolar solute can keep their hydrogen bonds only by adopting a restricted set of orientations, an ordering that lowers the entropy of the solution. When nonpolar molecules cluster together, less water is ordered in this way; this is the basis of the hydrophobic effect.\n\nFinally, water ionizes to a slight extent:\n\n2 H₂O ⇌ H₃O⁺ + OH⁻\n\nThe equilibrium constant for this reaction, $K_w = [\\text{H}_3\\text{O}^+][\\text{OH}^-]$, is $1.0 \\times 10^{-14}$ at 25 °C, but it is not a fixed number. It rises steadily with temperature, reaching about $2.4 \\times 10^{-14}$ at 37 °C and $1.0 \\times 10^{-13}$ at 60 °C. A solution is defined as neutral when its concentrations of $\\text{H}_3\\text{O}^+$ and $\\text{OH}^-$ are equal, whatever the temperature. The pH scale itself is unchanged: pH is the negative logarithm of the $\\text{H}_3\\text{O}^+$ concentration at every temperature.',
    questions: [
      {
        question: 'Based on the passage, a sample of pure water at 60 °C has:',
        options: [
          'a pH of 7.0 and is neutral',
          'a pH of 6.5 and is acidic',
          'a pH of 7.5 and is basic',
          'a pH of 6.5 and is neutral',
        ],
        correctAnswer: 3,
        explanation:
          'In pure water the only source of the two ions is the ionization of water, so $[\\text{H}_3\\text{O}^+] = [\\text{OH}^-] = \\sqrt{K_w} = \\sqrt{1.0 \\times 10^{-13}} = 10^{-6.5}$ M, and the pH is 6.5. Because the two concentrations are equal, the water is neutral even though its pH is below 7. A pH of 7.0 is the neutral value only at 25 °C, where $K_w$ is $1.0 \\times 10^{-14}$. Calling the water acidic confuses a pH below 7 with an excess of $\\text{H}_3\\text{O}^+$ over $\\text{OH}^-$, and a pH of 7.5 would require $K_w$ to fall, not rise, as the temperature increases.',
        skill: '5A temperature dependence of Kw and the pH of neutrality (Skill 2)',
      },
      {
        question: 'In late autumn, the water of a deep lake has a uniform temperature of 4 °C, and cold air then cools the water at the surface further. Based on the passage, the water that is cooled at the surface will:',
        options: [
          'sink, because liquid water becomes denser the closer it comes to 0 °C',
          'sink, because its molecules have slowed and now pack more closely',
          'stay on top, because liquid water below 4 °C expands as it cools',
          'stay on top, because cooling breaks hydrogen bonds near the surface',
        ],
        correctAnswer: 2,
        explanation:
          'Liquid water is densest at about 4 °C. Cooling it below that temperature allows more of the open, ice-like arrangement to form, so the water expands and becomes less dense than the 4 °C water beneath it and floats. This is why a lake freezes from the top while its deep water stays near 4 °C. Sinking would require the colder water to be the denser, which is true only above 4 °C, where slower molecular motion does bring the molecules closer together. Cooling favors the formation of hydrogen bonds; it does not break them.',
        skill: '5B density maximum of liquid water (Skill 2)',
      },
      {
        question: 'In the hydration shell of a chloride ion, the neighboring water molecules are oriented with:',
        options: [
          'a hydrogen atom toward the ion, because hydrogen carries a partial positive charge',
          'the oxygen atom toward the ion, because oxygen carries a partial negative charge',
          'a hydrogen atom toward the ion, because hydrogen bonds covalently to chloride',
          'the oxygen atom toward the ion, because oxygen donates a lone pair to chloride',
        ],
        correctAnswer: 0,
        explanation:
          'Chloride is an anion, so it attracts the positive end of the water dipole: each neighboring water molecule turns one of its partially positive hydrogen atoms toward the ion. This is an ion–dipole attraction, not a covalent bond; no electrons are shared between hydrogen and chloride. The oxygen atom, which is partially negative, would be repelled by an anion; it is the end that faces a cation such as $\\text{Na}^+$. Donation of a lone pair from oxygen likewise describes the way water interacts with a cation, which can accept electron density, and not with an anion.',
        skill: '5B ion–dipole orientation in a hydration shell (Skill 1)',
      },
      {
        question: 'Each water molecule in ice can form hydrogen bonds to four neighbors because a water molecule has:',
        options: [
          'four lone pairs on its oxygen atom, each of which can accept one hydrogen bond',
          'two hydrogen atoms, each of which can be shared with two neighboring oxygens',
          'one lone pair on its oxygen atom, which is able to accept four hydrogen bonds',
          'two hydrogen atoms to donate and two lone pairs on oxygen that act as acceptors',
        ],
        correctAnswer: 3,
        explanation:
          'A hydrogen bond needs a donor, a hydrogen atom covalently bonded to an electronegative atom, and an acceptor, a lone pair on an electronegative atom. Water has two O–H hydrogens and two lone pairs on oxygen, so it can donate two hydrogen bonds and accept two, for a total of four; the four groups around oxygen point roughly toward the corners of a tetrahedron, which gives ice its geometry. Oxygen in water has two lone pairs, not one or four. Each hydrogen atom takes part in one hydrogen bond at a time, to a single neighboring oxygen.',
        skill: '5B hydrogen-bond donors and acceptors in water (Skill 1)',
      },
    ],
  },

  // ────────────────────────────────────────────────────────────────────────
  // 10. ORGANIC CHEMISTRY — Phenols, quinones, and antioxidants (information)
  // ────────────────────────────────────────────────────────────────────────
  {
    id: 'fl8-cp-b-10',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    title: 'Phenols as Acids, Redox Partners, and Radical Traps',
    passageText:
      'A phenol is a compound in which a hydroxyl group is bonded directly to a carbon atom of a benzene ring. Phenols resemble alcohols in forming hydrogen bonds, but they differ sharply from alcohols in their acidity and in their behavior toward other reagents, and these differences matter in biology. The side chain of tyrosine is a phenol, as are the reactive portions of vitamin E and of many plant pigments.\n\nPhenol itself has a p$K_a$ of 10.0, whereas cyclohexanol, an alcohol with the same number of carbon atoms, has a p$K_a$ of about 16. Phenol is therefore about a million times stronger as an acid, although it remains far weaker than a carboxylic acid. Substituents on the ring adjust the acidity. Groups that withdraw electron density from the ring, such as the nitro group, lower the p$K_a$, and groups that donate electron density, such as alkyl and alkoxy groups, raise it slightly. A withdrawing group has its greatest effect when it is attached at a position from which it can interact directly with the charge of the conjugate base, and several such groups reinforce one another: 2,4,6-trinitrophenol has a p$K_a$ below 1.\n\nA phenol that carries a second hydroxyl group at the opposite (para) position of the ring is called a hydroquinone. The simplest hydroquinone, $\\text{C}_6\\text{H}_4(\\text{OH})_2$, is converted under mild conditions into 1,4-benzoquinone, $\\text{C}_6\\text{H}_4\\text{O}_2$, a yellow compound in which each oxygen atom is joined to its carbon atom by a double bond and the ring is no longer aromatic. The reaction is easily reversed. Cells exploit this pair of structures. Ubiquinone, a quinone with a long hydrocarbon tail that keeps it dissolved in the inner mitochondrial membrane, shuttles between its quinone and hydroquinone forms as it passes electrons from one protein complex of the respiratory chain to the next.\n\nA third property of phenols protects cells from damage. Polyunsaturated lipids are attacked by oxygen in a radical chain reaction. A lipid peroxyl radical, ROO•, removes a hydrogen atom from a C–H bond of a neighboring lipid, producing a hydroperoxide, ROOH, and a carbon radical; the carbon radical adds $\\text{O}_2$ to give a new peroxyl radical, and the cycle repeats. A single initiating event can destroy hundreds of lipid molecules in this way. A phenol, ArOH, can interrupt the chain because a peroxyl radical takes the hydrogen atom of the phenolic hydroxyl group far faster than it takes a hydrogen atom from a lipid:\n\nROO• + ArOH → ROOH + ArO•\n\nThe unpaired electron of the phenoxyl radical, ArO•, is spread over the ring, which makes the radical relatively unreactive. For the chain to stop, however, the phenoxyl radical must not itself remove a hydrogen atom from a lipid. Many effective antioxidants are hindered phenols, in which alkyl groups occupy both ring positions adjacent to the hydroxyl group and shield its oxygen. In the food preservative BHT (2,6-di-tert-butyl-4-methylphenol) these are bulky tert-butyl groups; in α-tocopherol, the principal form of vitamin E, they are methyl groups, and an oxygen atom in a ring fused to the opposite side further stabilizes the radical. The phenoxyl radical persists until it meets a second radical or, in the case of vitamin E, until it is converted back to the phenol by ascorbate (vitamin C) at the surface of the membrane.',
    questions: [
      {
        question: 'Which statement best accounts for the difference between the p$K_a$ values of phenol and cyclohexanol?',
        options: [
          'The O–H bond of phenol is longer, because its oxygen is attached to a larger group',
          'The negative charge of the phenoxide ion is shared with carbons of the ring',
          'The ring of phenol donates electron density to the oxygen of the phenoxide ion',
          'The phenoxide ion forms fewer hydrogen bonds with water than an alkoxide ion does',
        ],
        correctAnswer: 1,
        explanation:
          'An acid is stronger when its conjugate base is more stable. In the phenoxide ion a lone pair on oxygen overlaps with the π system of the ring, so the negative charge is delocalized by resonance onto ring carbons; in the conjugate base of cyclohexanol the charge is confined to oxygen. A benzene ring and a cyclohexane ring are of similar size, and bond length does not explain a millionfold difference in acidity. Donation of electron density to the oxygen would concentrate the charge and make the ion less stable, weakening the acid. Poorer solvation of the conjugate base would also weaken an acid rather than strengthen it.',
        skill: '5D resonance stabilization of the phenoxide ion (Skill 1)',
      },
      {
        question: 'Which of the following compounds would be expected to have the lowest p$K_a$?',
        options: ['4-Methylphenol', '4-Methoxyphenol', '3-Nitrophenol', '4-Nitrophenol'],
        correctAnswer: 3,
        explanation:
          'The negative charge of a phenoxide ion is delocalized onto the ring carbons that are ortho and para to the oxygen. A nitro group at the para position is attached to one of these carbons and can take the charge onto its own oxygen atoms by resonance, so 4-nitrophenol (p$K_a$ about 7.2) is the strongest acid of the four. A nitro group at the meta position withdraws electron density only through the σ bonds and has a smaller effect (p$K_a$ about 8.4). Methyl and methoxy groups at the para position donate electron density to the ring, which destabilizes the phenoxide ion slightly and gives p$K_a$ values just above 10.',
        skill: '5D substituent effects on the acidity of phenols (Skill 2)',
      },
      {
        question: 'When a hydroquinone is converted into the corresponding quinone, the hydroquinone:',
        options: [
          'is reduced, and so the reagent that reacts with it must act as an electron donor',
          'is neither oxidized nor reduced, because it only gives up two protons to a base',
          'is oxidized, and it gives up two electrons together with its two hydroxyl protons',
          'is oxidized, and it gives up two electrons while gaining two protons from water',
        ],
        correctAnswer: 2,
        explanation:
          'The formulas show that the conversion removes two hydrogen atoms, C₆H₆O₂ → C₆H₄O₂, and that each C–O single bond becomes a C=O double bond. Each of these carbons has gained a bond to oxygen, so the molecule is oxidized, and the two hydrogen atoms leave as two protons and two electrons, which an oxidizing agent must accept. This is why ubiquinone carries two electrons per molecule. Loss of two protons alone would give a dianion that still has C–O single bonds and an aromatic ring, not the neutral quinone. A gain of protons is not consistent with the loss of two hydrogens from the formula.',
        skill: '5D hydroquinone–quinone interconversion as a two-electron oxidation (Skill 1)',
      },
      {
        question: 'An analog of BHT has hydrogen atoms in place of the two tert-butyl groups. Based on the passage, as an inhibitor of lipid peroxidation in a membrane, the analog would most likely be:',
        options: [
          'less effective, because the oxygen of its radical is exposed to nearby lipids',
          'less effective, because its hydroxyl hydrogen cannot be given to a peroxyl radical',
          'more effective, because its radical can remove hydrogen atoms from nearby lipids',
          'more effective, because its unpaired electron can no longer be spread over the ring',
        ],
        correctAnswer: 0,
        explanation:
          'The analog still has a phenolic O–H group and an aromatic ring, so it can still give a hydrogen atom to a peroxyl radical and form a phenoxyl radical whose unpaired electron is delocalized. What it lacks is the pair of bulky groups beside the oxygen. In BHT these groups block the approach of other molecules to the radical oxygen; without them the phenoxyl radical can reach a lipid C–H bond and remove a hydrogen atom, which starts a new chain. A radical that removes hydrogen atoms from lipids propagates the damage and is therefore a worse antioxidant, not a better one, and loss of delocalization, which does not occur here, would make a radical more reactive.',
        skill: '5D steric shielding in a hindered-phenol antioxidant (Skill 2)',
      },
    ],
  },
]

export const FL8_CHEM_PHYS_B_DISCRETES: MCATDiscreteQuestion[] = [
  {
    id: 'fl8-cp-b-d01',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'A string 0.60 m long is fixed at both ends, and transverse waves travel along it at 240 m/s. The frequency of the third harmonic of the string is:',
    options: ['200 Hz', '300 Hz', '600 Hz', '1200 Hz'],
    correctAnswer: 2,
    explanation:
      'A string fixed at both ends has a node at each end, so a whole number of half-wavelengths must fit its length: $\\lambda_n = 2L/n$ and $f_n = nv/2L$. For the third harmonic, $f_3 = 3(240)/(2 \\times 0.60) = 600$ Hz. The value 200 Hz is the fundamental, $v/2L$. The value 300 Hz comes from $3v/4L$, the expression for a pipe closed at one end, and 1200 Hz comes from setting the wavelength equal to $L/3$ instead of $2L/3$.',
    skill: '4D harmonics of a string fixed at both ends (Skill 2)',
  },
  {
    id: 'fl8-cp-b-d02',
    section: 'chem-phys',
    discipline: 'physics',
    question: 'Two large parallel metal plates 4.0 cm apart are connected to a 200 V battery, and an electron is released from rest at the negative plate. Compared with the electric force on the electron when it has traveled 1.0 cm, the electric force on it when it has traveled 3.0 cm is:',
    options: [
      'three times as large, and the electron has moved through three times the potential difference',
      'the same, and the electron has moved through three times the potential difference',
      'the same, and the electron has moved through one third of the potential difference',
      'one third as large, and the electron has moved through one third of the potential difference',
    ],
    correctAnswer: 1,
    explanation:
      'Between large parallel plates the field is uniform, $E = V/d = 200\\ \\text{V}/0.040\\ \\text{m} = 5000$ V/m everywhere, so the force $qE$ on the electron has the same magnitude at every point. Because the field is uniform, the potential changes linearly with distance, by 50 V for each centimeter: the electron has moved through 50 V after 1.0 cm and through 150 V after 3.0 cm. A force that grows or shrinks with distance describes the field of a point charge, not that of parallel plates. A smaller potential difference at the later position would mean that the field had done negative work on the electron as it moved on.',
    skill: '4C uniform field between parallel plates: force and potential (Skill 1)',
  },
  {
    id: 'fl8-cp-b-d03',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A helium-4 nucleus has a mass of 4.0015 u. Two free protons and two free neutrons have a combined mass of 4.0319 u. Given that a mass of 1 u is equivalent to about 930 MeV of energy, the binding energy of the helium-4 nucleus is closest to:',
    options: ['0.03 MeV', '3.5 MeV', '7 MeV', '28 MeV'],
    correctAnswer: 3,
    explanation:
      'The mass defect is 4.0319 − 4.0015 = 0.0304 u. This missing mass is the energy released when the nucleus forms from its separate nucleons, which is the binding energy: 0.0304 × 930 ≈ 28 MeV. The value 7 MeV is the binding energy per nucleon (28/4), and 3.5 MeV divides by the number of nucleons twice. The value 0.03 MeV reports the mass defect in u without converting it to energy.',
    skill: '4E mass defect and nuclear binding energy (Skill 2)',
  },
  {
    id: 'fl8-cp-b-d04',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A reaction takes place in two steps by way of one intermediate. Relative to the reactants (0 kJ/mol), the enthalpies along the reaction coordinate are: first transition state, +45; intermediate, +30; second transition state, +80; products, −20. Which statement about the reaction is correct?',
    options: [
      'The second step is rate-determining, and the overall reaction is exothermic',
      'The second step is rate-determining, and the overall reaction is endothermic',
      'The first step is rate-determining, and the overall reaction is exothermic',
      'The first step is rate-determining, and the overall reaction is endothermic',
    ],
    correctAnswer: 0,
    explanation:
      'The rate-determining step is the one whose transition state is the highest point on the diagram. The second transition state lies at +80 kJ/mol, above the first at +45 kJ/mol, and the barrier for the second step measured from the intermediate (80 − 30 = 50 kJ/mol) is also larger than the barrier for the first step (45 kJ/mol), so the second step is the slow one. The products lie 20 kJ/mol below the reactants, so the overall reaction releases heat and is exothermic. The first step would be rate-determining only if its transition state were the higher of the two, and the reaction would be endothermic only if the products lay above the reactants.',
    skill: '5E rate-determining step from a reaction-coordinate profile (Skill 1)',
  },
  {
    id: 'fl8-cp-b-d05',
    section: 'chem-phys',
    discipline: 'general chemistry',
    question: 'A solution of HCl and a solution of acetic acid ($K_a = 1.8 \\times 10^{-5}$) each have a pH of 3.0. Equal volumes of the two solutions are titrated to their equivalence points with 0.10 M NaOH. Which solution requires the larger volume of NaOH, and why?',
    options: [
      'The HCl solution, because only a strong acid gives up all of its protons to NaOH',
      'The acetic acid solution, because acetate ion reacts with NaOH as it is formed',
      'Neither solution, because equal volumes at the same pH hold equal moles of acid',
      'The acetic acid solution, because most of its molecules are not ionized at pH 3.0',
    ],
    correctAnswer: 3,
    explanation:
      'A titration consumes all of the acid present, ionized or not. HCl is completely ionized, so its concentration equals its $\\text{H}_3\\text{O}^+$ concentration, $1.0 \\times 10^{-3}$ M. Acetic acid at pH 3.0 is only slightly ionized: its total concentration is about $[\\text{H}_3\\text{O}^+]^2/K_a = 10^{-6}/(1.8 \\times 10^{-5}) \\approx 0.06$ M, more than fifty times that of the HCl, and as NaOH removes $\\text{H}_3\\text{O}^+$ the remaining molecules ionize until all have reacted. A weak acid also gives up all of its protons to a strong base. Acetate is a base and does not react with NaOH. Equal pH means equal concentrations of $\\text{H}_3\\text{O}^+$, not equal amounts of acid.',
    skill: '5A strong versus weak acid of equal pH: base needed to reach equivalence (Skill 2)',
  },
  {
    id: 'fl8-cp-b-d06',
    section: 'chem-phys',
    discipline: 'organic chemistry',
    question: 'Pure samples of (2R,3R)-2,3-dibromopentane and (2R,3S)-2,3-dibromopentane are compared. The two compounds would be expected to have:',
    options: [
      'identical boiling points, and specific rotations equal in magnitude and opposite in sign',
      'different boiling points, and specific rotations that are unrelated in magnitude',
      'identical boiling points, and specific rotations that are unrelated in magnitude',
      'different boiling points, and specific rotations equal in magnitude and opposite in sign',
    ],
    correctAnswer: 1,
    explanation:
      'The two compounds have the same configuration at C2 and opposite configurations at C3, so they are stereoisomers that are not mirror images: diastereomers. Diastereomers have different shapes and different distances between their atoms, so they differ in physical properties such as boiling point, melting point, and solubility, and their specific rotations bear no fixed relation to each other. Identical boiling points together with equal and opposite rotations describe enantiomers, such as the (2R,3R) and (2S,3S) forms, which differ at every stereocenter. The other two choices each combine one property of enantiomers with one property of diastereomers.',
    skill: '5D physical properties of diastereomers versus enantiomers (Skill 1)',
  },
  {
    id: 'fl8-cp-b-d07',
    section: 'chem-phys',
    discipline: 'biochemistry',
    question: 'A bilayer made only of dipalmitoylphosphatidylcholine changes from an ordered gel to a fluid state at 41 °C. Compared with this pure bilayer at 25 °C, the same bilayer containing 30 mol% cholesterol at 25 °C would be:',
    options: [
      'less fluid, because the rigid rings of cholesterol restrict the motion of acyl chains',
      'less fluid, because the hydroxyl group of cholesterol binds water at the surface',
      'more fluid, because the rigid rings of cholesterol keep acyl chains from packing closely',
      'more fluid, because the hydroxyl group of cholesterol repels phospholipid head groups',
    ],
    correctAnswer: 2,
    explanation:
      'At 25 °C the pure bilayer is below its transition temperature, and its saturated chains are packed in an ordered, nearly solid array. Cholesterol inserted between the phospholipids has a bulky, rigid ring system that does not fit into this array, so it disrupts the close packing and makes the membrane more fluid than the gel. The restriction of chain motion by the same rings is what cholesterol does above the transition temperature, where it makes a fluid bilayer less fluid; acting in opposite directions on the two sides of the transition is what makes cholesterol a buffer of fluidity. The hydroxyl group of cholesterol hydrogen-bonds with the head groups and with water at the surface; it does not repel the head groups, and it does not account for the change in the packing of the chains.',
    skill: '5D cholesterol and membrane fluidity below the transition temperature (Skill 2)',
  },
]
