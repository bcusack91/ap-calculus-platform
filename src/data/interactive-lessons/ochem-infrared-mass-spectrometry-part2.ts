export const oChemIRMSPart2Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra2-intro',
      type: 'text' as const,
      content: `
## Infrared Spectroscopy — Bonds That Behave Like Springs

**Part 2 of 7 — How IR Works**

When infrared light passes through a sample, the molecule absorbs photons whose energy matches the energy needed to make its bonds **vibrate** more vigorously. A covalent bond is not rigid; it behaves like two masses joined by a spring, constantly stretching, compressing, and bending. Infrared radiation (roughly $4000$ to $400\\ \\text{cm}^{-1}$) sits at exactly the right energy to drive these vibrations.

The two fundamental vibration types are:

- **Stretching** — the bond length oscillates (atoms move apart and together along the bond axis). These require more energy and appear at higher frequency.
- **Bending** — the bond *angle* oscillates (scissoring, rocking, wagging, twisting). These require less energy and appear at lower frequency.

A molecule with $N$ atoms has $3N - 6$ vibrational modes ($3N - 5$ if linear), so even a small molecule produces a rich spectrum. Crucially, **only vibrations that change the molecule\\u2019s dipole moment absorb IR light** — a perfectly symmetric stretch (like $\\text{N}\\equiv\\text{N}$ in $\\text{N}_2$) is *IR-inactive*.
      `
    },
    {
      id: 'infra2-wavenumber',
      type: 'text' as const,
      content: `
### Why We Use Wavenumbers $(cm^{-1})$

IR spectra are plotted against **wavenumber**, symbol $\\tilde{\\nu}$, with units of $\\text{cm}^{-1}$ (reciprocal centimeters). The wavenumber is simply the reciprocal of the wavelength:

$\\tilde{\\nu} = \\frac{1}{\\lambda} = \\frac{\\nu}{c}$

The appeal is that wavenumber is **directly proportional to energy** ($E = hc\\tilde{\\nu}$), so a band at $3000\\ \\text{cm}^{-1}$ corresponds to a vibration of exactly twice the energy of one at $1500\\ \\text{cm}^{-1}$. Higher $\\tilde{\\nu}$ means a stiffer or lighter oscillator.

The frequency of a stretch is governed by an idealized **Hooke\\u2019s law** relationship:

$\\tilde{\\nu} = \\frac{1}{2\\pi c}\\sqrt{\\frac{k}{\\mu}}$, where $\\mu = \\frac{m_1 m_2}{m_1 + m_2}$

where $k$ is the bond **force constant** (stiffness) and $\\mu$ is the **reduced mass** of the two atoms. Two predictions follow directly, and they explain almost every trend in an IR table:

1. **Stronger (stiffer) bonds vibrate faster.** Because $\\tilde{\\nu} \\propto \\sqrt{k}$, a triple bond ($k$ large) absorbs at higher wavenumber than a double bond, which beats a single bond: $\\text{C}\\equiv\\text{C}\\ (~2150) > \\text{C}=\\text{C}\\ (~1650) > \\text{C}-\\text{C}\\ (~1000\\ \\text{cm}^{-1})$.
2. **Lighter atoms vibrate faster.** Because $\\tilde{\\nu} \\propto 1/\\sqrt{\\mu}$, any bond to hydrogen (tiny $\\mu$) absorbs high: C–H, O–H, and N–H all appear above $2850\\ \\text{cm}^{-1}$.
      `
    },
    {
      id: 'infra2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Spring Model
      `,
      exercise: {
        questions: [
          {
            question: 'Based on Hooke\\u2019s-law reasoning, which bond is expected to absorb at the HIGHEST wavenumber?',
            options: [
              '$\\text{C}-\\text{C}$ single bond',
              '$\\text{C}=\\text{C}$ double bond',
              '$\\text{C}\\equiv\\text{C}$ triple bond',
              '$\\text{C}-\\text{O}$ single bond'
            ],
            correctAnswer: 2,
            explanation: 'Since $\\tilde{\\nu} \\propto \\sqrt{k}$, the stiffest bond wins. A triple bond has the largest force constant, so $\\text{C}\\equiv\\text{C}$ ($\\sim 2150\\ \\text{cm}^{-1}$) absorbs higher than any single or double bond here. Bond order tracks stiffness, which tracks wavenumber.'
          },
          {
            question: 'A C–H stretch appears near $3000\\ \\text{cm}^{-1}$ while a C–Cl stretch appears near $700\\ \\text{cm}^{-1}$, even though both are single bonds. The dominant reason is:',
            options: [
              'chlorine forms a much stiffer bond than hydrogen',
              'the reduced mass is far larger for C–Cl, and $\\tilde{\\nu} \\propto 1/\\sqrt{\\mu}$',
              'chlorine is more electronegative',
              'C–H bonds are always triple bonds'
            ],
            correctAnswer: 1,
            explanation: 'The reduced mass $\\mu$ for C–Cl is large (Cl is heavy), and wavenumber falls as $1/\\sqrt{\\mu}$, pushing the band low. Hydrogen is the lightest atom, so any X–H stretch is dragged to high wavenumber. Stiffness differences are secondary here; the mass effect dominates.'
          },
          {
            question: 'Why is the symmetric stretch of $\\text{N}_2$ (dinitrogen) invisible in an IR spectrum?',
            options: [
              'Nitrogen does not absorb any electromagnetic radiation',
              'The bond is too weak to vibrate',
              'Nitrogen molecules are too large',
              'The vibration produces no change in dipole moment, so it is IR-inactive'
            ],
            correctAnswer: 3,
            explanation: 'A vibration absorbs IR only if it changes the molecular dipole moment. The symmetric stretch of a homonuclear diatomic like $\\text{N}_2$ keeps the dipole at zero throughout, so no photon is absorbed — the mode is IR-inactive. This is the dipole selection rule, not a statement about bond strength.'
          }
        ]
      }
    },
    {
      id: 'infra2-regions',
      type: 'text' as const,
      content: `
### The Two Regions of an IR Spectrum

By long convention, chemists mentally divide every IR spectrum at roughly $1500\\ \\text{cm}^{-1}$:

| Region | Range | Character | Use |
|--------|-------|-----------|-----|
| **Diagnostic region** | $\\sim 4000$–$1500\\ \\text{cm}^{-1}$ | Relatively few, well-separated bands | **Identify functional groups** |
| **Fingerprint region** | $\\sim 1500$–$400\\ \\text{cm}^{-1}$ | Dense, complex, many overlapping bands | **Confirm a compound\\u2019s identity** by exact match |

The **diagnostic** (or *functional group*) region is where you do most of your interpretive work. The stretches of C=O, O–H, N–H, C–H, and the triple bonds all live here, and their positions are remarkably transferable from molecule to molecule. A band at $1715\\ \\text{cm}^{-1}$ means a carbonyl whether the rest of the molecule is a sterol or a solvent.

The **fingerprint** region arises from a tangle of single-bond stretches and bending modes coupled together. These vibrations are exquisitely sensitive to the *whole* molecular skeleton, so the pattern is essentially unique to each compound — like a fingerprint. You rarely assign individual fingerprint bands; instead you overlay the spectrum on a reference and check whether the two match peak-for-peak.

> **Practical rule.** Use the diagnostic region to decide *what* functional groups are present; use the fingerprint region to decide *which specific compound* you have. Trying to assign every fingerprint band by hand is a common beginner trap and a waste of effort.
      `
    },
    {
      id: 'infra2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Reading the Regions
      `,
      exercise: {
        questions: [
          {
            question: 'A chemist wants to determine whether an unknown contains a carbonyl group. Which region of the IR spectrum is most useful, and why?',
            options: [
              'The diagnostic region, because the strong C=O stretch near $1700\\ \\text{cm}^{-1}$ is well separated and transferable',
              'The fingerprint region, because all functional groups absorb there',
              'The fingerprint region, because it is simpler to interpret',
              'Neither region; carbonyls are IR-inactive'
            ],
            correctAnswer: 0,
            explanation: 'Functional-group stretches such as C=O ($\\sim 1700\\ \\text{cm}^{-1}$) sit in the diagnostic region above $1500\\ \\text{cm}^{-1}$, where bands are few and their positions barely shift between molecules. The fingerprint region is dense and compound-specific, making it poor for spotting a single group.'
          },
          {
            question: 'What is the principal use of the fingerprint region (below $\\sim 1500\\ \\text{cm}^{-1}$)?',
            options: [
              'Assigning each individual band to a specific bond by hand',
              'Confirming the identity of a compound by matching the overall pattern to a reference',
              'Determining the molecular mass',
              'Measuring the number of hydrogens'
            ],
            correctAnswer: 1,
            explanation: 'The fingerprint region is a dense, coupled, whole-molecule pattern that is essentially unique per compound. Its value is comparison: overlay the unknown on an authentic reference and check for a peak-for-peak match. Hand-assigning every individual band is impractical, and mass/H-count come from MS and NMR, not IR.'
          },
          {
            question: 'Approximately where is the dividing line conventionally drawn between the diagnostic and fingerprint regions?',
            options: [
              '$\\sim 4000\\ \\text{cm}^{-1}$',
              '$\\sim 3000\\ \\text{cm}^{-1}$',
              '$\\sim 1500\\ \\text{cm}^{-1}$',
              '$\\sim 400\\ \\text{cm}^{-1}$'
            ],
            correctAnswer: 2,
            explanation: 'The customary split is near $1500\\ \\text{cm}^{-1}$: above it lies the diagnostic (functional-group) region; below it lies the fingerprint region. The values $4000$ and $400\\ \\text{cm}^{-1}$ are the outer limits of a typical scan, not the internal divide.'
          }
        ]
      }
    },
    {
      id: 'infra2-worked',
      type: 'text' as const,
      content: `
### Worked Example — Predicting Relative Band Positions

*Without a table*, order the C–H, O–H, and C=O stretches of acetic acid ($\\text{CH}_3\\text{COOH}$) from highest to lowest wavenumber, and justify each placement using the spring model.

**Reasoning.**
- The **O–H** stretch involves a bond to hydrogen, so $\\mu$ is tiny and the band is pushed very high — around $2500$–$3300\\ \\text{cm}^{-1}$ (broad, because of hydrogen bonding in the carboxylic acid).
- The **C–H** stretches also involve hydrogen, so they too sit high, near $2850$–$3000\\ \\text{cm}^{-1}$, just below the O–H envelope.
- The **C=O** stretch is between two relatively heavy atoms (larger $\\mu$) but the bond is stiff (double bond, large $k$). The stiffness wins partially but the heavier masses keep it well below the X–H bands, landing near $1710\\ \\text{cm}^{-1}$.

**Answer:** O–H $\\approx$ C–H $> $ C=O, i.e. roughly $3000\\ \\text{cm}^{-1}$ (O–H/C–H) versus $1710\\ \\text{cm}^{-1}$ (C=O). The key insight is that *any* bond to hydrogen outruns even a stiff double bond between heavy atoms, because the reduced-mass term dominates.
      `
    },
    {
      id: 'infra2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Two stretches are compared: O–H ($\\sim 3300\\ \\text{cm}^{-1}$) and C=O ($\\sim 1700\\ \\text{cm}^{-1}$). Although the C=O bond is stiffer (higher force constant), O–H still absorbs at a higher wavenumber. Why?',
            options: [
              'O–H bonds are actually triple bonds',
              'The very small reduced mass of an X–H bond outweighs the larger force constant of C=O',
              'Oxygen is more electronegative than carbon',
              'C=O is IR-inactive'
            ],
            correctAnswer: 1,
            explanation: 'Wavenumber depends on both stiffness and mass: $\\tilde{\\nu} \\propto \\sqrt{k/\\mu}$. Hydrogen makes $\\mu$ tiny, and that mass effect more than compensates for the lower force constant of the single O–H bond, pushing it above the stiffer-but-heavier C=O. This is the central lesson of the spring model.'
          },
          {
            question: 'Stretching vibrations generally appear at higher wavenumber than bending vibrations of the same group. The best explanation is that:',
            options: [
              'bending changes the dipole more than stretching',
              'more energy is required to compress/extend a bond along its axis than to alter its angle',
              'bending modes are always IR-inactive',
              'stretching only occurs in triple bonds'
            ],
            correctAnswer: 1,
            explanation: 'Deforming a bond length (stretching) along its axis costs more energy than changing a bond angle (bending), so stretches sit at higher wavenumber. This is why, for example, C–H stretches appear near $3000\\ \\text{cm}^{-1}$ while C–H bends fall well below $1500\\ \\text{cm}^{-1}$.'
          }
        ]
      }
    }
  ]
}
