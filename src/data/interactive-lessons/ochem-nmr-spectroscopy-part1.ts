export const oChemNMRPart1Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s1-intro',
      type: 'text' as const,
      content: `
## NMR Spectroscopy — Foundations

**Part 1 of 7 — $^1\\text{H}$ NMR Basics**

Nuclear magnetic resonance (NMR) is the single most powerful tool the organic chemist has for determining molecular structure. Where a melting point or a combustion analysis tells you *what* atoms are present, NMR tells you how those atoms are *connected* — which carbons bear how many hydrogens, which groups sit next to which, and how the whole skeleton is assembled.

The physics behind it: certain nuclei, including $^1\\text{H}$ (a single proton) and $^{13}\\text{C}$, possess a property called **nuclear spin** ($I = \\tfrac{1}{2}$). A spinning charged nucleus behaves like a tiny bar magnet. In the absence of an external field these nuclear magnets point in random directions and all have the same energy. But when the sample is placed inside a strong, uniform magnetic field $B_0$, each nuclear magnet can adopt one of two orientations:

- **aligned with** $B_0$ — the lower-energy ($\\alpha$) state
- **aligned against** $B_0$ — the higher-energy ($\\beta$) state

The energy gap between these two states, $\\Delta E$, is directly proportional to the field strength: $\\Delta E = \\gamma\\, h\\, B_0 / 2\\pi$, where $\\gamma$ is the gyromagnetic ratio of the nucleus. Irradiate the sample with a radiofrequency (RF) pulse whose photon energy exactly matches $\\Delta E$, and nuclei in the $\\alpha$ state absorb that energy and flip to the $\\beta$ state. That absorption — the nucleus coming into **resonance** — is what the spectrometer detects.

> **Why a stronger magnet is "higher resolution":** because $\\Delta E \\propto B_0$, a bigger field spreads the absorptions farther apart in frequency, so signals that overlap on a weak instrument separate cleanly on a strong one. A "300 MHz" or "500 MHz" instrument is named for the RF frequency at which $^1\\text{H}$ resonates in its field.
      `
    },
    {
      id: 'nmr-s1-shielding',
      type: 'text' as const,
      content: `
### Why Different Protons Absorb at Different Frequencies

If every proton in a molecule resonated at exactly the same frequency, NMR would be useless — it would give one peak for every organic compound. The reason NMR is informative is that **each proton feels a slightly different magnetic field** than the bare $B_0$ applied by the magnet.

Every proton is surrounded by electrons. When the sample sits in $B_0$, those electrons circulate and generate their own small *induced* magnetic field that, near the nucleus, opposes $B_0$. The proton therefore experiences a slightly weaker **effective field**:

$B_{\\text{eff}} = B_0 - B_{\\text{induced}}$

This is called **shielding**: the electrons "shield" the nucleus from the full applied field. A more heavily shielded proton feels a weaker $B_{\\text{eff}}$, needs a slightly lower frequency to reach resonance, and appears toward the **right** (upfield) of the spectrum. A proton near an electron-withdrawing group has less electron density around it — it is **deshielded**, feels a stronger $B_{\\text{eff}}$, and appears toward the **left** (downfield).

The take-home idea, which Part 2 develops quantitatively: **electron density around a proton determines its position in the spectrum.** Electron-rich environment $\\rightarrow$ shielded $\\rightarrow$ upfield (small $\\delta$); electron-poor environment $\\rightarrow$ deshielded $\\rightarrow$ downfield (large $\\delta$).

> **Terminology that trips students up:** "upfield" and "downfield" are historical terms from old instruments that swept the field. Today "upfield" simply means *right / smaller* $\\delta$ and "downfield" means *left / larger* $\\delta$. Upfield = more shielded; downfield = more deshielded.
      `
    },
    {
      id: 'nmr-s1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Resonance Phenomenon
      `,
      exercise: {
        questions: [
          {
            question: 'Why is a strong external magnetic field $B_0$ required to obtain an NMR spectrum?',
            options: [
              'The field ionizes the sample so that radiofrequency energy can be absorbed',
              'The field physically aligns the entire molecule along one axis so the protons line up',
              'The field heats the sample, exciting the nuclei into a higher vibrational state',
              'The field splits the nuclear spin states into two energy levels separated by a gap that RF photons can bridge'
            ],
            correctAnswer: 3,
            explanation: 'A spin-½ nucleus has two orientations in a magnetic field, and the energy gap between them is $\\Delta E = \\gamma h B_0 / 2\\pi$ — it is zero without a field. Only when $B_0$ creates that gap can an RF photon of matching energy be absorbed (resonance). NMR is a magnetic, not an ionizing or vibrational, phenomenon, so the other choices misidentify the mechanism.'
          },
          {
            question: 'A proton surrounded by relatively high electron density (an electron-rich environment) will appear:',
            options: [
              'Downfield (large $\\delta$), because the electrons deshield the nucleus',
              'Upfield (small $\\delta$), because the circulating electrons shield the nucleus from $B_0$',
              'At exactly 0 ppm, because electron density cancels the applied field entirely',
              'Off-scale to the left, because shielding has no effect on chemical shift'
            ],
            correctAnswer: 1,
            explanation: 'Circulating electrons generate an induced field that opposes $B_0$, lowering $B_{\\text{eff}}$ at the nucleus — this is shielding, and it moves the signal upfield (smaller $\\delta$). The trap in option 1 reverses the cause and effect: high electron density shields (not deshields). Only TMS sits at 0 ppm, and shielding most certainly does affect $\\delta$.'
          }
        ]
      }
    },
    {
      id: 'nmr-s1-equivalence',
      type: 'text' as const,
      content: `
### Equivalent Protons Give One Signal

Here is the rule that lets you predict *how many peaks* a molecule produces: **chemically equivalent protons resonate at the same frequency and produce a single signal.** Two protons are chemically equivalent if they are in identical electronic environments — most reliably, if a symmetry operation of the molecule (a rotation, a mirror plane, or the molecule's own rapid bond rotation) interchanges them.

The number of signals in a $^1\\text{H}$ NMR spectrum therefore equals the **number of distinct proton environments**, not the number of hydrogen atoms. Counting environments is a skill built on recognizing symmetry.

**Worked example — count the signals:**

- **Methane**, $\\text{CH}_4$: all four H's are equivalent by tetrahedral symmetry $\\rightarrow$ **1 signal.**
- **Ethanol**, $\\text{CH}_3\\text{CH}_2\\text{OH}$: three sets of inequivalent H's — the $\\text{CH}_3$, the $\\text{CH}_2$, and the $\\text{OH}$ — $\\rightarrow$ **3 signals.**
- **1,4-dimethylbenzene** (*para*-xylene): the two methyl groups are related by symmetry (one signal), and all four aromatic H's are equivalent by symmetry (one signal) $\\rightarrow$ **2 signals**, even though there are 10 hydrogens.
- **Acetone**, $(\\text{CH}_3)_2\\text{C=O}$: the two methyl groups are mirror images across the carbonyl, hence equivalent $\\rightarrow$ **1 signal** for all six H's.

> **The single most common counting mistake:** confusing the number of *hydrogens* with the number of *signals*. *para*-Xylene has 10 H's but only 2 signals; acetone has 6 H's but only 1 signal. Always look for symmetry first.
      `
    },
    {
      id: 'nmr-s1-homotopic',
      type: 'text' as const,
      content: `
### Equivalence, More Carefully: Homotopic and Enantiotopic vs. Diastereotopic

For everyday structure problems, "related by symmetry $\\rightarrow$ equivalent" is enough. But a rigorous course distinguishes *how* two protons are related, because one case quietly breaks the rule.

- **Homotopic** protons are interchanged by a *rotation* of the molecule (a $C_n$ axis). They are equivalent in every environment. Example: the three H's of a freely rotating $\\text{CH}_3$.
- **Enantiotopic** protons are interchanged only by a *mirror plane*. In an ordinary (achiral) solvent they are equivalent and give one signal. Example: the two H's of $\\text{CH}_2\\text{Cl}_2$, or the two $\\text{CH}_2$ protons of ethanol.
- **Diastereotopic** protons cannot be interchanged by *any* symmetry operation. They are genuinely inequivalent and can give **separate signals** even though they are on the same carbon. This happens on a $\\text{CH}_2$ when the molecule contains a stereocenter or a nearby double bond — for example the two methylene H's of an $\\text{R*-CH(X)-CH}_2\\text{-Y}$ fragment, or the two $=\\text{CH}_2$ protons of a terminal alkene (one is *cis*, one is *trans* to the substituent).

A quick operational test for any pair of H's on one carbon: replace each in turn with a test group "Z." If the two products are *identical*, the H's are homotopic; if they are *enantiomers*, enantiotopic (equivalent in normal NMR); if they are *diastereomers*, diastereotopic (inequivalent).

> **The subtle trap:** students often assume "two H's on the same carbon must be equivalent." Diastereotopic protons are the exception — and they are common around stereocenters and double bonds. When a $\\text{CH}_2$ unexpectedly shows two signals (often with a large mutual coupling), diastereotopicity is the usual culprit.
      `
    },
    {
      id: 'nmr-s1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Counting Signals
      `,
      exercise: {
        questions: [
          {
            question: 'How many $^1\\text{H}$ NMR signals does 1,4-dimethylbenzene (para-xylene) produce?',
            options: [
              '10 signals, one for each hydrogen atom',
              '3 signals',
              '2 signals',
              '1 signal, because the whole ring is one conjugated system'
            ],
            correctAnswer: 2,
            explanation: 'Symmetry makes the two methyl groups equivalent (one signal) and all four aromatic H\'s equivalent (one signal), for 2 signals total. Option 1 is the classic error of counting hydrogens (10) rather than environments. Conjugation does not merge inequivalent environments, so it is not 1 signal.'
          },
          {
            question: 'Two hydrogens on the same $\\text{CH}_2$ carbon are described as "diastereotopic." What does this imply for their NMR behavior?',
            options: [
              'They are always equivalent because they sit on the same carbon',
              'They never appear in the spectrum because they cancel each other',
              'They merge into a single signal only at very high field strength',
              'They are inequivalent and may give separate signals, because no symmetry operation interchanges them'
            ],
            correctAnswer: 3,
            explanation: 'Diastereotopic protons cannot be exchanged by any rotation or mirror plane, so they are genuinely inequivalent and can resonate separately — common next to a stereocenter or a double bond. Option 1 states the very misconception the concept overturns; protons do not "cancel," and field strength changes separation, not the underlying inequivalence.'
          },
          {
            question: 'The number of signals in a $^1\\text{H}$ NMR spectrum is equal to:',
            options: [
              'The total number of hydrogen atoms in the molecule',
              'The number of carbon atoms bearing hydrogens',
              'The number of chemically distinct proton environments',
              'The molecular mass divided by the field strength'
            ],
            correctAnswer: 2,
            explanation: 'Equivalent protons coalesce into one signal, so the count of signals equals the count of distinct environments. Acetone (6 H, 1 signal) and para-xylene (10 H, 2 signals) show why "number of hydrogens" (option 1) is wrong. The other options are unrelated to how environments are counted.'
          }
        ]
      }
    },
    {
      id: 'nmr-s1-delta',
      type: 'text' as const,
      content: `
### Chemical Shift ($\\delta$): A Field-Independent Address

Each signal needs an address on the horizontal axis. We could report the raw resonance frequency in hertz — but that number depends on the magnet, so a peak at one frequency on a 300 MHz instrument lands at a different frequency on a 500 MHz instrument. To make spectra comparable, chemists report position as a dimensionless **chemical shift**, $\\delta$, in parts per million ($\\text{ppm}$):

$\\delta = \\dfrac{\\nu_{\\text{sample}} - \\nu_{\\text{reference}}}{\\nu_{\\text{spectrometer}}} \\times 10^6$

Dividing the frequency offset by the spectrometer frequency cancels the field dependence, so $\\delta$ for a given proton is the **same number on every instrument.** A proton at $\\delta = 2\\ \\text{ppm}$ on a 300 MHz magnet sits 600 Hz downfield of the reference; on a 500 MHz magnet it sits 1000 Hz downfield — but $\\delta$ is $2\\ \\text{ppm}$ in both cases.

The reference compound is **tetramethylsilane**, $\\text{Si(CH}_3)_4$ (**TMS**), defined as $\\delta = 0$. Silicon is more electropositive than carbon, so the 12 equivalent TMS protons are unusually shielded and resonate upfield of virtually all organic protons — a clean, single peak at the right edge of the scale. The $^1\\text{H}$ scale then runs from about $0$ to $12\\ \\text{ppm}$, with deshielded protons at large $\\delta$ on the left and shielded protons at small $\\delta$ on the right.

> **Key relationship to carry into Part 2:** chemical shift is a *map of electron density*. Memorizing the shift of a few benchmark environments lets you read a spectrum like an address book — and that is exactly the table we build next.
      `
    },
    {
      id: 'nmr-s1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A proton resonates at $\\delta = 3\\ \\text{ppm}$. On a 300 MHz spectrometer it is 900 Hz downfield of TMS. On a 600 MHz spectrometer, what will its chemical shift and frequency offset be?',
            options: [
              '$\\delta = 6\\ \\text{ppm}$ and 900 Hz, because $\\delta$ scales with the magnet',
              '$\\delta = 3\\ \\text{ppm}$ and 1800 Hz, because $\\delta$ is field-independent but the Hz offset scales with the magnet',
              '$\\delta = 1.5\\ \\text{ppm}$ and 450 Hz, because doubling the field halves both',
              '$\\delta = 3\\ \\text{ppm}$ and 900 Hz, because nothing changes with field strength'
            ],
            correctAnswer: 1,
            explanation: 'Chemical shift in ppm is defined to be field-independent, so $\\delta$ stays at $3\\ \\text{ppm}$. But the frequency offset in hertz equals $\\delta \\times \\nu_{\\text{spectrometer}} = 3 \\times 10^{-6} \\times 600\\ \\text{MHz} = 1800\\ \\text{Hz}$ — it doubles with the field. Option 1 wrongly scales $\\delta$; option 4 wrongly freezes the Hz offset.'
          },
          {
            question: 'Why is tetramethylsilane (TMS) chosen as the $\\delta = 0$ reference for $^1\\text{H}$ NMR?',
            options: [
              'Its protons are strongly deshielded, placing the reference far downfield of organic signals',
              'It has exactly one hydrogen, giving a sharp single peak',
              'Its 12 equivalent, highly shielded protons give one sharp peak upfield of almost all organic protons',
              'It reacts with the sample to lock the frequency scale in place'
            ],
            correctAnswer: 2,
            explanation: 'Electropositive silicon makes the 12 chemically equivalent TMS protons unusually shielded, so they give a single sharp signal upfield of essentially all organic protons — an ideal zero. Option 1 reverses the shielding; TMS has 12 H, not one (option 2); and a good internal reference must be inert, not reactive (option 4).'
          }
        ]
      }
    }
  ]
}
