export const oChemIRMSPart1Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra1-intro',
      type: 'text' as const,
      content: `
## Spectroscopy — Seeing Molecules Without Seeing Them

**Part 1 of 7 — Introduction to Structure Determination**

A practicing organic chemist almost never sees the molecule they have made. A flask might hold a colorless oil weighing a fraction of a gram, and the central question is always the same: *what is it?* **Spectroscopy** answers that question by measuring how a sample interacts with **electromagnetic radiation**. Different frequencies of light probe different features of a molecule, and from the pattern of absorption (or, in mass spectrometry, of masses) we reconstruct the structure.

The key idea is that energy is **quantized**. A molecule can only absorb a photon whose energy exactly matches the gap between two of its allowed energy states:

$\\Delta E = h\\nu = \\frac{hc}{\\lambda}$

Here $h$ is Planck's constant, $\\nu$ is the frequency, and $\\lambda$ is the wavelength. Because $\\Delta E \\propto \\nu$, **higher-frequency (shorter-wavelength) radiation carries more energy**. This single relationship organizes the entire electromagnetic spectrum into a ladder of techniques, each tuned to a different molecular motion.
      `
    },
    {
      id: 'infra1-techniques',
      type: 'text' as const,
      content: `
### The Four Workhorse Techniques

Modern structure elucidation rests on four complementary methods. Each interrogates a different physical process, so each returns a different *kind* of structural information.

| Technique | Radiation / process | What it tells you |
|-----------|--------------------|-------------------|
| **Mass spectrometry (MS)** | Electron impact ionization | Molecular mass and formula; fragmentation skeleton |
| **Infrared (IR)** | IR photons excite bond vibrations | Which **functional groups** are present |
| **$^1$H NMR** | Radio waves flip H nuclei in a magnetic field | Number, environment, and neighbors of hydrogens |
| **$^{13}$C NMR** | Radio waves flip $^{13}$C nuclei | The carbon framework |

Notice the energy ordering. Mass spectrometry uses a high-energy electron beam (~70 eV) that is violent enough to knock out an electron and shatter the molecule. IR uses mid-energy photons that merely make bonds stretch and bend. NMR uses very low-energy radio waves that only reorient nuclear spins. As you move from MS toward NMR you move down the energy ladder and gain ever finer detail about connectivity.

> **Why combine them?** No single technique is sufficient. MS might tell you a compound has the formula $\\text{C}_4\\text{H}_8\\text{O}$, but dozens of structures share that formula. IR can then reveal a carbonyl. NMR pins down exactly how the atoms connect. **The power is in the overlap.**
      `
    },
    {
      id: 'infra1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Energy and the Spectrum
      `,
      exercise: {
        questions: [
          {
            question: 'Which relationship correctly connects the energy of a photon to its frequency and wavelength?',
            options: [
              '$\\Delta E = h\\nu = \\frac{hc}{\\lambda}$, so shorter wavelengths carry more energy',
              '$\\Delta E = hc\\lambda$, so longer wavelengths carry more energy',
              '$\\Delta E = \\frac{h\\lambda}{c}$, independent of frequency',
              '$\\Delta E = \\frac{\\nu}{hc}$, so energy decreases with frequency'
            ],
            correctAnswer: 0,
            explanation: 'Energy is proportional to frequency, $\\Delta E = h\\nu$, and since $\\nu = c/\\lambda$ this equals $hc/\\lambda$. Energy therefore rises as wavelength shrinks. The $hc\\lambda$ form inverts the wavelength dependence (it should be $1/\\lambda$, not $\\lambda$); the remaining options are dimensionally wrong.'
          },
          {
            question: 'A molecule absorbs a photon only when the photon energy matches the gap between two molecular energy states. This is a direct consequence of:',
            options: [
              'the conservation of mass',
              'the quantization of molecular energy levels',
              'the Le Chatelier principle',
              'the octet rule'
            ],
            correctAnswer: 1,
            explanation: 'Molecular energy levels are quantized — only specific spacings exist. Absorption requires $h\\nu = \\Delta E$ exactly, which is why each technique uses a specific energy range. Mass conservation, Le Chatelier, and the octet rule govern other phenomena entirely.'
          },
          {
            question: 'Rank the radiation used by MS, IR, and NMR from highest to lowest energy.',
            options: [
              'NMR > IR > MS (electron impact)',
              'IR > MS (electron impact) > NMR',
              'MS (electron impact) > IR > NMR',
              'They all use the same energy; only detection differs'
            ],
            correctAnswer: 2,
            explanation: 'Electron-impact ionization in MS is the most energetic — energetic enough to ionize and fragment molecules. IR (vibrational excitation) is intermediate. NMR uses extremely low-energy radio waves that only reorient nuclear spins. The trap answer reverses this order by putting NMR highest.'
          }
        ]
      }
    },
    {
      id: 'infra1-roadmap',
      type: 'text' as const,
      content: `
### The Logic of an Unknown Problem

Throughout this suite we will repeatedly attack the same kind of problem: *given spectra, deduce the structure.* It helps to have a fixed mental workflow. Experienced chemists almost always proceed in this order:

1. **Get the molecular formula.** The mass spectrum gives the molecular mass (from the **molecular ion**, $\\text{M}^{+\\bullet}$); isotope peaks and the **nitrogen rule** refine the formula.
2. **Compute the degrees of unsaturation.** This number — derived purely from the formula — tells you how many rings plus $\\pi$ bonds the molecule must contain *before you look at any other data.*
3. **Identify functional groups with IR.** A strong band near $1700\\ \\text{cm}^{-1}$ screams carbonyl; a broad band near $3300\\ \\text{cm}^{-1}$ suggests O–H or N–H.
4. **Assemble connectivity with NMR** (covered in a later course).

Step 2 is so useful that we introduce it now. For a compound of formula $\\text{C}_c\\text{H}_h\\text{N}_n\\text{O}_o\\text{X}_x$ (where X is a halogen), the **degrees of unsaturation** (also called the *index of hydrogen deficiency*, IHD) are:

$\\text{DoU} = \\frac{2c + 2 + n - h - x}{2}$

Oxygen is ignored because it does not change the hydrogen count of a saturated formula.

**Worked example.** Benzaldehyde has the formula $\\text{C}_7\\text{H}_6\\text{O}$. Then

$\\text{DoU} = \\frac{2(7) + 2 + 0 - 6 - 0}{2} = \\frac{14 + 2 - 6}{2} = \\frac{10}{2} = 5$

Five degrees of unsaturation: four come from the benzene ring (three $\\pi$ bonds + one ring) and the fifth from the aldehyde $\\text{C}=\\text{O}$. Before recording a single spectrum we already suspect an aromatic ring bearing a carbonyl — exactly what benzaldehyde is.
      `
    },
    {
      id: 'infra1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Degrees of Unsaturation
      `,
      exercise: {
        questions: [
          {
            question: 'Compute the degrees of unsaturation for caffeine-fragment formula $\\text{C}_5\\text{H}_{10}$.',
            options: [
              '0',
              '2',
              '1',
              '5'
            ],
            correctAnswer: 2,
            explanation: 'DoU $= (2\\cdot5 + 2 - 10)/2 = (12 - 10)/2 = 1$. One degree means exactly one ring **or** one double bond (e.g., cyclopentane or 1-pentene). A saturated acyclic $\\text{C}_5$ alkane would be $\\text{C}_5\\text{H}_{12}$, so the two missing hydrogens signal one unsaturation.'
          },
          {
            question: 'A compound has formula $\\text{C}_4\\text{H}_5\\text{N}$. How many degrees of unsaturation does it have?',
            options: [
              '2',
              '4',
              '1',
              '3'
            ],
            correctAnswer: 3,
            explanation: 'With nitrogen, DoU $= (2\\cdot4 + 2 + 1 - 5)/2 = (8 + 2 + 1 - 5)/2 = 6/2 = 3$. Three degrees is consistent with a nitrile ($\\text{C}\\equiv\\text{N}$ counts as 2) plus one more $\\pi$ bond or ring — for example but-3-enenitrile. The common mistake is forgetting to ADD $n$ in the numerator.'
          },
          {
            question: 'When computing degrees of unsaturation, why is the number of oxygen atoms omitted from the formula?',
            options: [
              'Oxygen never appears in organic molecules',
              'Oxygen always forms exactly one degree of unsaturation',
              'Oxygen is too heavy to affect the calculation',
              'Inserting a divalent oxygen into a saturated chain does not change the hydrogen count'
            ],
            correctAnswer: 3,
            explanation: 'A divalent atom like O can be inserted into a C–H or C–C bond (e.g., turning ethane into an alcohol or ether) without altering the total number of hydrogens that saturate the formula. Because it is hydrogen-neutral, oxygen drops out of the DoU expression. Halogens (monovalent, like H) and nitrogen (trivalent) do appear.'
          }
        ]
      }
    },
    {
      id: 'infra1-summary',
      type: 'text' as const,
      content: `
### What to Carry Forward

- **Spectroscopy = light meets matter.** Quantized energy gaps mean each technique uses a specific slice of the electromagnetic spectrum, governed by $\\Delta E = h\\nu = hc/\\lambda$.
- **Four complementary tools.** MS (mass/formula), IR (functional groups), and $^1$H / $^{13}$C NMR (connectivity). Their overlap, not any one alone, solves structures.
- **A fixed workflow.** Formula $\\rightarrow$ degrees of unsaturation $\\rightarrow$ functional groups $\\rightarrow$ connectivity.
- **Degrees of unsaturation**, $\\text{DoU} = (2c + 2 + n - h - x)/2$, convert a bare formula into a count of rings plus $\\pi$ bonds before any spectrum is interpreted.

In **Part 2** we zoom into infrared spectroscopy: what a bond vibration actually is, why we report frequencies as **wavenumbers** in $\\text{cm}^{-1}$, and how the spectrum splits into a diagnostic region and a fingerprint region.
      `
    },
    {
      id: 'infra1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A student determines from mass spectrometry that an unknown has the formula $\\text{C}_3\\text{H}_6\\text{O}$. According to the recommended workflow, what is the most logical NEXT step before consulting IR?',
            options: [
              'Compute the degrees of unsaturation from the formula',
              'Guess the structure at random and check later',
              'Measure the boiling point',
              'Assume it must be an alcohol because it contains oxygen'
            ],
            correctAnswer: 0,
            explanation: 'The workflow goes formula $\\rightarrow$ degrees of unsaturation $\\rightarrow$ functional groups. Here DoU $= (6 + 2 - 6)/2 = 1$, so there is exactly one ring or double bond. That single number already narrows $\\text{C}_3\\text{H}_6\\text{O}$ to candidates like acetone, propanal, or an epoxide — guidance you get for free before opening the IR.'
          },
          {
            question: 'Which statement best captures why chemists use multiple spectroscopic techniques on one sample rather than relying on IR alone?',
            options: [
              'IR is the only technique that ever fails',
              'Each technique reports a different kind of information, and their overlap uniquely determines the structure',
              'Using more instruments is required by law',
              'The techniques all measure the same thing, providing redundancy only'
            ],
            correctAnswer: 1,
            explanation: 'MS gives mass/formula, IR gives functional groups, and NMR gives connectivity. A formula alone fits many isomers; a functional group alone fits many compounds. Only by intersecting the constraints from several techniques does a single structure survive. The claim that the methods are merely redundant is the classic misconception — they are complementary.'
          }
        ]
      }
    }
  ]
}
