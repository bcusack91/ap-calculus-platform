export const oChemIRMSPart4Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra4-intro',
      type: 'text' as const,
      content: `
## Mass Spectrometry — Weighing Molecules and Their Pieces

**Part 4 of 7 — The Molecular Ion and Isotope Patterns**

Mass spectrometry (MS) does something the other techniques cannot: it measures the **mass** of a molecule directly. In the most common method, **electron-impact (EI) ionization**, the gaseous sample is bombarded by a high-energy electron beam (~70 eV). A collision knocks one electron out of the molecule, producing a positively charged **radical cation** called the **molecular ion**:

$\\text{M} + e^- \\rightarrow \\text{M}^{+\\bullet} + 2e^-$

The instrument then accelerates these ions through electric and magnetic fields that sort them by their **mass-to-charge ratio**, $m/z$. Because almost every ion carries a single positive charge ($z = 1$), the $x$-axis of a mass spectrum reads essentially as *mass*. Peaks are plotted as vertical lines whose height is **relative abundance**, with the tallest peak (the **base peak**) set to 100%.

The single most valuable peak is the molecular ion $\\text{M}^{+\\bullet}$, because its $m/z$ value **is the molecular mass** of the compound. From that mass we begin reconstructing the molecular formula.
      `
    },
    {
      id: 'infra4-molion',
      type: 'text' as const,
      content: `
### Finding (and Trusting) the Molecular Ion

The molecular ion is normally the **highest-mass peak** in the spectrum — but with caveats. Some molecules fragment so readily that $\\text{M}^{+\\bullet}$ is tiny or absent (branched alkanes and alcohols are notorious). A few rules keep you honest:

- The molecular ion must correspond to a **chemically sensible loss** from any higher fragments — you should never see a loss of, say, $4$ or $14$ mass units between the top peaks, because no stable neutral of that mass exists in a simple cleavage.
- Watch for the **nitrogen rule** (developed fully in Part 5): a molecule with an **odd** molecular mass contains an **odd number of nitrogen atoms**. An even nominal mass means zero or an even number of nitrogens. This is a powerful first filter on the formula.

**Worked example — degrees of unsaturation from $\\text{M}^{+\\bullet}$.** Suppose $\\text{M}^{+\\bullet}$ appears at $m/z = 78$ and other data establish the formula as $\\text{C}_6\\text{H}_6$. The degrees of unsaturation are

$\\text{DoU} = \\frac{2(6) + 2 - 6}{2} = \\frac{14 - 6}{2} = 4$

Four degrees of unsaturation in a $\\text{C}_6\\text{H}_6$ framework is the classic signature of **benzene** (three $\\pi$ bonds plus one ring). The molecular ion alone, combined with a formula, immediately constrains the skeleton.
      `
    },
    {
      id: 'infra4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Molecular Ion
      `,
      exercise: {
        questions: [
          {
            question: 'What does the molecular ion peak ($\\text{M}^{+\\bullet}$) directly reveal about an unknown compound?',
            options: [
              'Its molecular mass',
              'Its functional groups',
              'The number of hydrogens bonded to each carbon',
              'The compound\\u2019s color'
            ],
            correctAnswer: 0,
            explanation: 'The $m/z$ of the molecular ion equals the molecular mass (for the common singly-charged ion). Functional groups come from IR, and per-carbon hydrogen counts come from NMR. The molecular ion is the entry point to the molecular formula.'
          },
          {
            question: 'The species detected as the molecular ion in EI-MS is best described as a:',
            options: [
              'neutral molecule',
              'doubly charged anion',
              'proton',
              'radical cation ($\\text{M}^{+\\bullet}$), formed by ejecting one electron'
            ],
            correctAnswer: 3,
            explanation: 'Electron impact ejects a single electron, leaving a species with both an unpaired electron and a positive charge — a radical cation, $\\text{M}^{+\\bullet}$. It is not a neutral (it must be charged to be sorted by $m/z$) and not an anion (it lost, not gained, an electron).'
          },
          {
            question: 'In a mass spectrum, what is the "base peak"?',
            options: [
              'The peak at the lowest $m/z$',
              'Always the molecular ion',
              'The most abundant peak, assigned a relative intensity of 100%',
              'The peak from the solvent'
            ],
            correctAnswer: 2,
            explanation: 'The base peak is simply the tallest peak — the most abundant ion — and abundances are reported relative to it (100%). It is often a stable fragment rather than the molecular ion, so equating "base peak" with "molecular ion" is a common error.'
          }
        ]
      }
    },
    {
      id: 'infra4-isotopes',
      type: 'text' as const,
      content: `
### Isotope Peaks: M+1 and M+2

Real elements are mixtures of isotopes, and MS resolves them. This produces small satellite peaks just above the molecular ion that are surprisingly informative.

**The M+1 peak and carbon counting.** Carbon is $98.9\\%$ $^{12}\\text{C}$ and $1.1\\%$ $^{13}\\text{C}$. A molecule containing $n$ carbons therefore has roughly an $n \\times 1.1\\%$ chance of containing one $^{13}\\text{C}$, producing a peak one mass unit higher, $\\text{M}+1$. Reading this backward gives a carbon count:

$n_\\text{C} \\approx \\frac{\\text{relative height of M}+1}{1.1\\%}$

For example, an M+1 peak about $6.6\\%$ as tall as $\\text{M}^{+\\bullet}$ implies roughly $6.6/1.1 \\approx 6$ carbons.

**The M+2 peak and the halogens.** Chlorine and bromine each have two abundant isotopes separated by two mass units, and the ratios are unmistakable:

| Element | Isotopes | Approx. ratio | $\\text{M}^{+\\bullet} : \\text{M}+2$ |
|---------|----------|---------------|-----------------------------------|
| **Chlorine** | $^{35}\\text{Cl} : {}^{37}\\text{Cl}$ | $\\sim 3 : 1$ | $3 : 1$ |
| **Bromine** | $^{79}\\text{Br} : {}^{81}\\text{Br}$ | $\\sim 1 : 1$ | $1 : 1$ |

So a molecular-ion cluster with a **3:1** M:M+2 pattern announces **one chlorine**; a near **1:1** M:M+2 pattern announces **one bromine**. (Sulfur contributes a weaker M+2 of about $4\\%$.) These patterns are among the fastest "at a glance" diagnoses in all of spectroscopy.
      `
    },
    {
      id: 'infra4-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Isotope Patterns
      `,
      exercise: {
        questions: [
          {
            question: 'A mass spectrum shows molecular-ion-region peaks at $m/z = 112$ and $m/z = 114$ in an intensity ratio of about $3 : 1$. What does this strongly indicate?',
            options: [
              'The molecule contains one bromine atom',
              'The molecule contains one nitrogen atom',
              'The molecule contains one chlorine atom',
              'The molecule contains six carbons'
            ],
            correctAnswer: 2,
            explanation: 'A roughly $3 : 1$ ratio between M and M+2 is the fingerprint of one chlorine, reflecting the $^{35}\\text{Cl} : {}^{37}\\text{Cl}$ natural abundance. Bromine would give about $1 : 1$. The nitrogen rule and carbon count come from different observations (M parity and M+1 height).'
          },
          {
            question: 'An M+2 peak nearly equal in height to the molecular ion ($\\sim 1 : 1$) is characteristic of:',
            options: [
              'one chlorine',
              'two oxygens',
              'no heteroatoms',
              'one bromine'
            ],
            correctAnswer: 3,
            explanation: 'Bromine\\u2019s two isotopes $^{79}\\text{Br}$ and $^{81}\\text{Br}$ are almost equally abundant, giving an M : M+2 ratio near $1 : 1$. A $3 : 1$ pattern would indicate chlorine instead. The near-equal doublet is the classic bromine tell.'
          },
          {
            question: 'The M+1 peak is about $4.4\\%$ as intense as the molecular ion. Approximately how many carbon atoms does the molecule contain?',
            options: [
              '2',
              '8',
              '4',
              '44'
            ],
            correctAnswer: 2,
            explanation: 'Each carbon contributes about $1.1\\%$ to the M+1 intensity from natural $^{13}\\text{C}$. Dividing, $4.4\\% / 1.1\\% \\approx 4$ carbons. The figure $44$ comes from forgetting to divide by $1.1$; $2$ and $8$ misread the ratio.'
          }
        ]
      }
    },
    {
      id: 'infra4-resolution',
      type: 'text' as const,
      content: `
### Nominal Mass vs High-Resolution Mass

Everything above uses **nominal** (integer) masses. But many different formulas share the same nominal mass — for instance, $\\text{N}_2$, $\\text{CO}$, $\\text{C}_2\\text{H}_4$, and $\\text{CH}_2\\text{N}$ all have nominal mass $28$. **High-resolution mass spectrometry (HRMS)** resolves this ambiguity by measuring mass to four decimal places, exploiting the fact that exact isotopic masses are *not* whole numbers:

| Atom | Exact mass (u) |
|------|----------------|
| $^1\\text{H}$ | $1.00783$ |
| $^{12}\\text{C}$ | $12.00000$ (defined) |
| $^{14}\\text{N}$ | $14.00307$ |
| $^{16}\\text{O}$ | $15.99491$ |

Because each formula has a unique exact mass, HRMS can pin down the **molecular formula directly**. For example $\\text{CO}$ ($27.9949$) and $\\text{N}_2$ ($28.0062$) differ by about $0.011\\ \\text{u}$ — invisible at unit resolution but trivial for HRMS. In routine work, nominal masses plus isotope patterns get you most of the way; HRMS is the arbiter when two formulas survive.

> **Key takeaway.** The molecular ion gives mass; isotope satellites (M+1 for carbon, M+2 for Cl/Br) refine the formula; and high-resolution mass, when available, locks the formula in. Next we turn to what happens *after* ionization — fragmentation.
      `
    },
    {
      id: 'infra4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'A molecular ion appears at $m/z = 122$ with an M+2 of negligible height, an M+1 about $8.8\\%$ of M, and the formula is later shown to be $\\text{C}_8\\text{H}_{10}\\text{O}$. Which observation is MOST consistent with this formula?',
            options: [
              'The M+2 near $3 : 1$ proves a chlorine',
              'The even mass proves an odd number of nitrogens',
              'The mass of 122 proves a bromine',
              'The M+1 of $\\sim 8.8\\%$ is consistent with about 8 carbons'
            ],
            correctAnswer: 3,
            explanation: 'An M+1 near $8.8\\%$ divided by $1.1\\%$ per carbon gives about 8 carbons, matching $\\text{C}_8$. There is no $3 : 1$ or $1 : 1$ M+2, so no Cl or Br. The even mass $122$ is consistent with zero nitrogens (the nitrogen rule says odd mass implies odd N), reinforcing the formula.'
          },
          {
            question: 'Two candidate formulas both have nominal mass $42$: $\\text{C}_3\\text{H}_6$ and $\\text{C}_2\\text{H}_2\\text{O}$. Which technique most directly distinguishes them?',
            options: [
              'Counting the M+2 peak height',
              'High-resolution mass spectrometry, using their different exact masses',
              'Measuring the base peak only',
              'The nitrogen rule'
            ],
            correctAnswer: 1,
            explanation: 'Both formulas share nominal mass $42$ but have different exact masses ($\\text{C}_3\\text{H}_6 = 42.0470$ vs $\\text{C}_2\\text{H}_2\\text{O} = 42.0106$), so HRMS resolves them. M+2 height detects Cl/Br (absent here), the base peak speaks to fragmentation, and the nitrogen rule does not apply since neither contains nitrogen.'
          }
        ]
      }
    }
  ]
}
