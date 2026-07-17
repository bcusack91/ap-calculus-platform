export const oChemNMRPart4Data = {
  topicSlug: 'nmr-spectroscopy',
  sections: [
    {
      id: 'nmr-s4-intro',
      type: 'text' as const,
      content: `
## Carbon-13 NMR

**Part 4 of 7 — $^{13}\\text{C}$ NMR**

So far we have watched protons. But the carbon skeleton itself can be observed directly with $^{13}\\text{C}$ NMR, and it is wonderfully complementary to $^1\\text{H}$: it counts *carbon* environments, spreads them over a much wider scale, and is often easier to read because the spectra are usually a clean set of single lines.

The catch is sensitivity. The dominant carbon isotope, $^{12}\\text{C}$, has $I = 0$ and is **NMR-silent**. Only $^{13}\\text{C}$ ($I = \\tfrac{1}{2}$) gives a signal, and it makes up just **$1.1\\%$** of natural carbon. Combined with a gyromagnetic ratio about a quarter that of $^1\\text{H}$, $^{13}\\text{C}$ NMR is intrinsically thousands of times less sensitive than $^1\\text{H}$ NMR — which is why early instruments could barely record it and why modern spectra are acquired by signal-averaging many scans on a pulsed FT spectrometer.

That same low abundance has a happy consequence for *splitting*, as we will see: the odds of two $^{13}\\text{C}$ nuclei being adjacent in one molecule are tiny ($\\sim 0.01\\%$), so carbon–carbon coupling essentially never complicates the spectrum.
      `
    },
    {
      id: 'nmr-s4-signals',
      type: 'text' as const,
      content: `
### One Signal per Unique Carbon Environment

The counting rule mirrors $^1\\text{H}$ NMR: the number of signals equals the number of **chemically distinct carbon environments**, set by molecular symmetry. The huge advantage is *dispersion* — the $^{13}\\text{C}$ scale runs from roughly $0$ to $220\\ \\text{ppm}$, about twenty times wider than the $^1\\text{H}$ window — so carbons that would overlap as protons usually appear as cleanly separated lines. Even complex molecules often give a fully resolved line for every carbon.

**Worked example — counting carbon signals:**

- **Acetone**, $(\\text{CH}_3)_2\\text{C=O}$: the two methyls are equivalent, the carbonyl is unique $\\rightarrow$ **2 signals** (the $\\text{C=O}$ near $206\\ \\text{ppm}$, the two equivalent $\\text{CH}_3$ near $30\\ \\text{ppm}$).
- **Benzene**, $\\text{C}_6\\text{H}_6$: all six carbons equivalent by symmetry $\\rightarrow$ **1 signal** (~$128\\ \\text{ppm}$).
- **Toluene**, $\\text{C}_6\\text{H}_5\\text{CH}_3$: symmetry makes the ring carbons fall into four sets (ipso, ortho, meta, para) plus the methyl $\\rightarrow$ **5 signals**.
- **1,4-dimethylbenzene** (*para*-xylene): two unique ring carbons + one methyl $\\rightarrow$ **3 signals**.

Notice how molecular symmetry can make the $^1\\text{H}$ and $^{13}\\text{C}$ counts differ: *para*-xylene gives **2** proton signals but **3** carbon signals, because the substituted and unsubstituted ring carbons are distinct even though only one kind of aromatic *hydrogen* exists.

> **The trap to name:** assuming the number of $^{13}\\text{C}$ signals equals the number of $^1\\text{H}$ signals. They count different nuclei. Quaternary carbons (bearing no hydrogen) appear in $^{13}\\text{C}$ but contribute *no* $^1\\text{H}$ signal at all — so $^{13}\\text{C}$ often reveals carbons that are invisible in the proton spectrum.
      `
    },
    {
      id: 'nmr-s4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Carbon Counting and Sensitivity
      `,
      exercise: {
        questions: [
          {
            question: 'Why is $^{13}\\text{C}$ NMR intrinsically far less sensitive than $^1\\text{H}$ NMR?',
            options: [
              'The NMR-active isotope $^{13}\\text{C}$ is only about $1.1\\%$ of natural carbon and has a smaller gyromagnetic ratio than $^1\\text{H}$',
              'Carbon nuclei do not have nuclear spin, so they barely resonate',
              'Carbon atoms are buried inside molecules where the magnetic field cannot reach them',
              'Carbon signals are spread over only a narrow range, so they overlap and cancel'
            ],
            correctAnswer: 0,
            explanation: 'The observable isotope $^{13}\\text{C}$ is just $1.1\\%$ abundant (the rest is silent $^{12}\\text{C}$, $I=0$) and couples to the field about four times more weakly than $^1\\text{H}$, so its sensitivity is thousands of times lower. $^{13}\\text{C}$ does have spin (the "no nuclear spin" choice is false), the field penetrates the whole sample, and the wide $^{13}\\text{C}$ scale aids — not hinders — resolution.'
          },
          {
            question: 'How many signals appear in the $^{13}\\text{C}$ NMR spectrum of acetone, $(\\text{CH}_3)_2\\text{C=O}$?',
            options: [
              '1 signal, because all carbons are part of one molecule',
              '3 signals, one per carbon atom',
              '6 signals, one per hydrogen atom',
              '2 signals: one for the carbonyl carbon and one for the two equivalent methyl carbons'
            ],
            correctAnswer: 3,
            explanation: 'Symmetry makes the two methyl carbons equivalent (one signal, ~$30\\ \\text{ppm}$) while the carbonyl carbon is unique (~$206\\ \\text{ppm}$), giving 2 signals. The "3 signals" choice ignores the symmetry that merges the two methyls; the "6 signals" choice confuses carbon signals with hydrogen count.'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-decoupling',
      type: 'text' as const,
      content: `
### Broadband Decoupling: Why $^{13}\\text{C}$ Signals Are Singlets

A raw $^{13}\\text{C}$ nucleus *is* coupled — strongly — to the protons attached to it ($^1J_{\\text{CH}}$ can be $125\\text{–}250\\ \\text{Hz}$). Left alone, every carbon would be split by its hydrogens (a $\\text{CH}_3$ carbon into a quartet, a $\\text{CH}_2$ into a triplet, and so on), and the already weak signals would be divided into multiple lines, crippling sensitivity and crowding the spectrum.

The standard solution is **broadband proton decoupling**: while observing $^{13}\\text{C}$, the spectrometer simultaneously irradiates *all* the protons across their entire frequency range. This rapid irradiation averages the C–H coupling to zero, so **each carbon collapses to a single sharp line**. The familiar "$^{13}\\text{C}$ spectrum" — one singlet per carbon environment — is really a *proton-decoupled* spectrum.

Two important consequences:

- **No C–C splitting either.** Because adjacent $^{13}\\text{C}$–$^{13}\\text{C}$ pairs are vanishingly rare ($1.1\\% \\times 1.1\\%$), carbon–carbon coupling is not observed in routine spectra. With protons decoupled too, every line is a singlet.
- **Integration is usually unreliable.** A side effect of decoupling (the nuclear Overhauser effect) and the slow relaxation of carbons — especially quaternary carbons — mean that $^{13}\\text{C}$ peak areas are *not* reliably proportional to the number of carbons. Unlike $^1\\text{H}$ integration, you normally do **not** read carbon counts from $^{13}\\text{C}$ peak heights or areas without special acquisition conditions.

> **The trap to name:** trying to apply the $n+1$ rule to a routine $^{13}\\text{C}$ spectrum, or trying to integrate it like a proton spectrum. Standard $^{13}\\text{C}$ is broadband-decoupled — every signal is a singlet by design — and its intensities are not quantitative. Multiplicity information is recovered instead by DEPT.
      `
    },
    {
      id: 'nmr-s4-dept',
      type: 'text' as const,
      content: `
### DEPT: Recovering How Many Hydrogens Each Carbon Bears

Decoupling cleans up the spectrum but discards the C–H information. The **DEPT** experiment (Distortionless Enhancement by Polarization Transfer) brings that information back in a controlled way, sorting carbons by the number of attached hydrogens. The most useful variants:

- **DEPT-90:** only **$\\text{CH}$** (methine) carbons appear.
- **DEPT-135:** **$\\text{CH}$** and **$\\text{CH}_3$** carbons point **up** (positive), **$\\text{CH}_2$** carbons point **down** (negative), and **quaternary** carbons (no attached H) are **absent**.

Comparing a normal decoupled spectrum (which shows *all* carbons) with DEPT-135 lets you classify every carbon:

| Carbon type | Attached H | DEPT-135 | DEPT-90 |
|------|------|------|------|
| $\\text{CH}_3$ | 3 | up | absent |
| $\\text{CH}_2$ | 2 | down | absent |
| $\\text{CH}$ | 1 | up | up |
| quaternary (C, $\\text{C=O}$) | 0 | absent | absent |

**Worked use:** a carbon that is present in the standard spectrum but *missing* from DEPT-135 must be **quaternary** — a carbonyl carbon, a fully substituted ring carbon, or a $\\text{C}$ bearing no H. This is how you locate carbonyls and quaternary centers that are silent in $^1\\text{H}$ NMR. An older alternative, **off-resonance decoupling**, achieved a similar classification by leaving only the one-bond C–H coupling so that $\\text{CH}_3 \\rightarrow$ quartet, $\\text{CH}_2 \\rightarrow$ triplet, $\\text{CH} \\rightarrow$ doublet, quaternary $\\rightarrow$ singlet — but DEPT has largely replaced it.

> **Reading strategy:** run the decoupled spectrum to *count* carbon environments and read their shifts; run DEPT to assign each as $\\text{CH}_3$, $\\text{CH}_2$, $\\text{CH}$, or quaternary. The "disappearing" peaks in DEPT are exactly the quaternary carbons.
      `
    },
    {
      id: 'nmr-s4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Decoupling and DEPT
      `,
      exercise: {
        questions: [
          {
            question: 'In a routine broadband proton-decoupled $^{13}\\text{C}$ spectrum, every carbon environment appears as a single line. Why?',
            options: [
              'Because $^{13}\\text{C}$ nuclei never couple to anything',
              'Because simultaneous irradiation of all protons averages the C–H coupling to zero, and adjacent $^{13}\\text{C}$–$^{13}\\text{C}$ pairs are too rare to cause splitting',
              'Because the $n+1$ rule gives $0+1 = 1$ line for carbon',
              'Because all carbons happen to have the same chemical shift'
            ],
            correctAnswer: 1,
            explanation: 'Carbons are strongly coupled to their attached protons, but broadband decoupling irradiates all protons at once and collapses that coupling to a singlet; meanwhile $^{13}\\text{C}$–$^{13}\\text{C}$ coupling is unseen because two adjacent $^{13}\\text{C}$ in one molecule is a ~$0.01\\%$ event. $^{13}\\text{C}$ does couple (option 1), the result is from decoupling not a degenerate $n+1$ count (option 3), and the carbons have very different shifts (option 4).'
          },
          {
            question: 'A carbon appears in the standard decoupled $^{13}\\text{C}$ spectrum but is absent from the DEPT-135 spectrum. What kind of carbon is it?',
            options: [
              'A $\\text{CH}_3$ carbon',
              'A $\\text{CH}_2$ carbon',
              'A quaternary carbon (no attached hydrogens), such as a carbonyl or a fully substituted carbon',
              'A $\\text{CH}$ (methine) carbon'
            ],
            correctAnswer: 2,
            explanation: 'DEPT relies on polarization transfer from attached protons, so a carbon with no H — quaternary, including carbonyl and fully substituted ring carbons — is silent in DEPT while still appearing in the normal spectrum. $\\text{CH}_3$ and $\\text{CH}$ point up in DEPT-135 and $\\text{CH}_2$ points down, so all of those would be present.'
          },
          {
            question: 'Why is peak integration generally NOT used to count carbons in a routine $^{13}\\text{C}$ spectrum the way it is for $^1\\text{H}$?',
            options: [
              'Because $^{13}\\text{C}$ peaks have no measurable area',
              'Because nuclear Overhauser enhancement and slow, uneven carbon relaxation (especially for quaternary C) make the areas non-quantitative under standard conditions',
              'Because carbon atoms all have identical environments',
              'Because the field strength cancels the integral'
            ],
            correctAnswer: 1,
            explanation: 'Broadband decoupling introduces an uneven nuclear Overhauser enhancement, and carbons (notably quaternary ones) relax slowly and unequally, so standard $^{13}\\text{C}$ intensities are not reliably proportional to carbon count. The peaks do have area (option 1), carbon environments differ (option 3), and field strength does not cancel integrals (option 4).'
          }
        ]
      }
    },
    {
      id: 'nmr-s4-shifts',
      type: 'text' as const,
      content: `
### The $^{13}\\text{C}$ Chemical-Shift Map ($0\\text{–}220\\ \\text{ppm}$)

Carbon shifts respond to the same factors as proton shifts — electronegativity, hybridization, anisotropy — but over a far broader range, which makes the regions very diagnostic. Memorize these zones:

| Carbon type | Typical $\\delta$ ($\\text{ppm}$) |
|------|------|
| Alkyl $\\text{C}$ ($sp^{3}$, C/H only) | $5\\text{–}45$ |
| $\\text{C-N}$ (amine) | $30\\text{–}65$ |
| $\\text{C-O}$ (alcohol, ether, ester $\\alpha$) | $50\\text{–}90$ |
| Alkyne $\\text{C}\\equiv\\text{C}$ (sp) | $65\\text{–}90$ |
| Alkene / aromatic $\\text{C}$ $(sp^{2})$ | $100\\text{–}150$ |
| Nitrile $\\text{C}\\equiv\\text{N}$ | $115\\text{–}120$ |
| Ester / acid / amide carbonyl $\\text{C=O}$ | $160\\text{–}185$ |
| Aldehyde / ketone carbonyl $\\text{C=O}$ | $190\\text{–}220$ |

Two regions resolve ambiguities that proton NMR cannot:

- A line at **$160\\text{–}220\\ \\text{ppm}$** is essentially always a **carbonyl carbon** — and its sub-region distinguishes acid/ester/amide ($160\\text{–}185$) from aldehyde/ketone ($190\\text{–}220$). Proton NMR cannot see a carbonyl carbon directly; $^{13}\\text{C}$ pinpoints it.
- The **$100\\text{–}150\\ \\text{ppm}$** window flags **$sp^{2}$ carbons** (alkene or aromatic), confirming unsaturation.

> **The trap to name:** mapping $^{13}\\text{C}$ values onto the $^1\\text{H}$ scale. A carbonyl *carbon* sits near $200\\ \\text{ppm}$, but no *proton* ever appears at $200\\ \\text{ppm}$ — the $^1\\text{H}$ scale stops around $12$. Keep the two scales mentally separate; they measure different nuclei and span different ranges.
      `
    },
    {
      id: 'nmr-s4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A $^{13}\\text{C}$ spectrum shows a peak at $\\delta = 205\\ \\text{ppm}$ that is absent in DEPT-135. What carbon does this indicate?',
            options: [
              'An $sp^{3}$ alkyl $\\text{CH}_3$ carbon',
              'A ketone or aldehyde carbonyl carbon (quaternary at this shift means a ketone)',
              'An aromatic $\\text{CH}$ carbon',
              'A carbon bonded to oxygen in an ether'
            ],
            correctAnswer: 1,
            explanation: 'The $190\\text{–}220\\ \\text{ppm}$ region is the home of aldehyde/ketone carbonyls, and absence from DEPT-135 marks it as quaternary (no attached H) — i.e., a ketone carbonyl. Alkyl, aromatic CH, and ether C–O carbons all resonate far upfield of $205\\ \\text{ppm}$, and a CH would appear in DEPT.'
          },
          {
            question: 'Compared with $^1\\text{H}$ NMR, a key complementary strength of $^{13}\\text{C}$ NMR is that it:',
            options: [
              'Always gives quantitative integration of every carbon',
              'Directly reveals carbons with no attached hydrogens (carbonyls, quaternary centers) that are invisible in the proton spectrum, and spreads signals over a much wider ($\\sim 220\\ \\text{ppm}$) scale',
              'Is far more sensitive than $^1\\text{H}$ NMR',
              'Shows splitting patterns that count neighboring carbons by the $n+1$ rule'
            ],
            correctAnswer: 1,
            explanation: 'Because it observes carbon directly, $^{13}\\text{C}$ NMR sees quaternary and carbonyl carbons that give no proton signal, and its ~$220\\ \\text{ppm}$ window resolves environments that overlap in $^1\\text{H}$. It is *less* sensitive, not more (option 3); routine integration is unreliable (option 1); and standard spectra are decoupled singlets, not $n+1$ multiplets (option 4).'
          }
        ]
      }
    }
  ]
}
