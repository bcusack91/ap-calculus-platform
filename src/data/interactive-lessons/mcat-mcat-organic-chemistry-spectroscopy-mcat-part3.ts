export const mcatOchemSpectroPart3Data = {
  topicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  sections: [
    {
      id: 'spect3-intro',
      type: 'text' as const,
      content: `# Spectroscopy for the MCAT

**Part 3 of 4 — Carbon-13 NMR, UV-Vis & Mass Spectrometry**

Three more tools round out the MCAT's spectroscopy kit. Each answers a different structural question.

### Carbon-13 NMR: Counting Carbon Environments

$^{13}C$ is only ~1.1% abundant, so carbon-carbon splitting is not observed and routine spectra are proton-decoupled: **every distinct carbon environment gives one singlet**. Use it to count environments and to spot carbonyls.

| Carbon type | $\\delta$ (ppm) |
|-------------|-----------------|
| Alkyl sp3 | 0-50 |
| C bonded to O (sp3) | 50-90 |
| Alkene / aromatic sp2 | 100-150 |
| Ester / amide / acid C=O | 160-185 |
| Aldehyde / ketone C=O | 190-220 |

Two workhorse facts: a peak beyond ~190 means **aldehyde or ketone** (acid-derivative carbonyls stop near 185), and a molecule with fewer $^{13}C$ signals than carbons has **symmetry**.

### UV-Vis: Conjugation Detector

UV-Vis absorption promotes pi electrons to antibonding orbitals ($\\pi \\rightarrow \\pi^*$); a carbonyl also shows a weak, longer-wavelength $n \\rightarrow \\pi^*$ band, from an oxygen lone-pair electron.

- **The key trend:** more conjugation → smaller HOMO-LUMO gap → longer wavelength absorbed ($E = hc/\\lambda$)
- Isolated double bonds absorb below ~200 nm (invisible on the instrument); extended conjugation walks the absorption into the near-UV and, eventually, the visible (beta-carotene's 11 conjugated C=C absorb blue light, so it looks orange)
- **Biochemistry hooks:** proteins absorb at **280 nm** (aromatic Trp/Tyr), nucleic acids at **260 nm**, and NADH absorbs at **340 nm** while $NAD^+$ does not — the standard way to follow redox enzyme kinetics

**Beer–Lambert law:** $A = \\epsilon l c$. Absorbance equals the molar absorptivity $\\epsilon$ (in $\\text{M}^{-1}\\text{cm}^{-1}$) times the path length $l$ (usually 1 cm) times the concentration $c$. Because $A$ is linear in $c$, a change in absorbance measures a change in concentration.

### Mass Spectrometry: Weighing the Pieces

Ionization (loss of one electron) gives the **molecular ion** $M^{+}$, a radical cation, which fragments; ions are sorted by **mass-to-charge ratio** ($m/z$). $M^{+}$ gives the **molecular weight**; the tallest peak is the **base peak** (most stable ion, 100%).

- **M+2 isotope flags**: Cl gives M+2 about **one-third** of M (3:1, $^{35}Cl/^{37}Cl$); Br gives M+2 roughly **equal** to M (1:1)
- **Nitrogen rule**: an odd $M^{+}$ mass means an odd number of nitrogens
- Fragments form the **most stable cations**: benzylic/allylic and tertiary carbocations, and acylium ions ($RCO^{+}$, $m/z = 43$ for $CH_3CO^{+}$)
- **Neutral losses**: M-15 (methyl), M-18 (water: alcohols), M-29 (CHO or ethyl)

### Which Tool for Which Question?

| Question | Tool |
|----------|------|
| What functional groups? | IR |
| How are the H's arranged? | $^1H$ NMR |
| How many unique carbons? Carbonyl type? | $^{13}C$ NMR |
| Conjugated? Following a redox assay? | UV-Vis |
| Molecular weight? Halogens? N count parity? | MS |`
    },
    {
      id: 'spect3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Carbon NMR, UV-Vis & MS** 🎯`,
      exercise: {
        questions: [
          {
            question: `A $^{13}C$ NMR spectrum of a C6 compound shows a signal at 205 ppm. This carbon is best assigned as:`,
            options: [`An ester carbonyl`, `A ketone or aldehyde carbonyl`, `An aromatic carbon`, `A carbon bonded to oxygen by a single bond`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Only aldehyde and ketone carbonyls reach past ~190 ppm (190-220). Ester, amide, and acid carbonyls stop near 160-185 because the attached heteroatom donates electron density by resonance. Aromatic carbons sit at 100-150 and sp3 C-O carbons at 50-90.`
          },
          {
            question: `1,3,5-Hexatriene absorbs at a longer wavelength than 1,3-butadiene because the additional conjugated double bond:`,
            options: [`Increases the molecular weight`, `Raises the energy of every molecular orbital`, `Adds more sigma bonds that absorb light`, `Narrows the gap between the HOMO and LUMO`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Extending conjugation raises the HOMO and lowers the LUMO, shrinking the gap. Since $E = hc/\\lambda$, a smaller transition energy means a longer absorbed wavelength. This gap-narrowing trend is the single UV-Vis fact the MCAT tests most. Molecular weight does not set an absorption wavelength; sigma bonds absorb only far below 200 nm; and the orbitals do not all rise, since the HOMO goes up while the LUMO comes down.`
          },
          {
            question: `A mass spectrum shows $M^{+}$ at m/z 122 and an M+2 peak at m/z 124 of nearly equal height. The molecule most likely contains:`,
            options: [`One bromine atom`, `One chlorine atom`, `One nitrogen atom`, `Two oxygen atoms`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Bromine's two isotopes (79 and 81) are nearly 1:1 abundant, so one Br gives M and M+2 peaks of about equal intensity. Chlorine would give a 3:1 ratio; nitrogen and oxygen produce no significant M+2 signature.`
          },
          {
            question: `An enzyme assay follows the reduction of $NAD^+$ to NADH by monitoring absorbance at:`,
            options: [`260 nm, where the adenine of both forms absorbs`, `450 nm, where NADH absorbs visible blue light`, `340 nm, where NADH but not $NAD^+$ absorbs`, `280 nm, where only oxidized $NAD^+$ absorbs`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `NADH's reduced (dihydropyridine) nicotinamide ring is a chromophore with a distinct band at 340 nm; the aromatic ring of oxidized $NAD^+$ has no band there, so a rising $A_{340}$ means NADH is being produced. Both forms do absorb near 260 nm through their adenine, which is exactly why 260 nm cannot report the redox state. $NAD^+$ has no band of its own at 280 nm (that is the protein Trp/Tyr wavelength), and NADH is colorless, so it absorbs no visible light at 450 nm.`
          },
          {
            question: `The mass spectrum of 2-butanone shows an intense fragment at m/z 43. This ion is best explained as:`,
            options: [`The ion left when $M^{+}$ loses $H_2O$`, `The acylium ion $CH_3CO^{+}$ from alpha cleavage`, `The doubly charged molecular ion $M^{2+}$`, `The $^{13}C$ isotope peak of a m/z 42 fragment`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Ketones cleave alpha to the carbonyl because the resulting acylium ion is resonance-stabilized ($CH_3C{\\equiv}O^{+}$). For 2-butanone (MW 72), losing the ethyl radical (29) leaves m/z 43. Losing water would give m/z 54, a doubly charged molecular ion would appear at m/z 36, and an isotope peak is far weaker than an intense fragment. Fragmentation always favors the most stable cation — the same stability rules as carbocation chemistry.`
          }
        ]
      }
    },
    {
      id: 'spect3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — 13C, UV-Vis & MS

**Problem 1.** Lactate dehydrogenase converts pyruvate + NADH to lactate + $NAD^+$. A passage reports the absorbance at 340 nm, measured in a 1 cm cuvette, falling over time.

- **(a)** What does the 340 nm absorbance measure?
- **(b)** What does the falling trace say about the reaction?
- **(c)** What would a flat trace mean?
- **(d)** If $A_{340}$ falls by 0.31 per minute and NADH's $\\epsilon_{340} = 6.2 \\times 10^3\\;\\text{M}^{-1}\\text{cm}^{-1}$, how fast is NADH consumed?

**(a) What is measured.** NADH absorbs at 340 nm and $NAD^+$ does not, so $A_{340}$ tracks the NADH concentration.

**(b) Falling trace.** Falling $A_{340}$ means NADH is being consumed: the reaction is running in the direction written.

**(c) Flat trace.** No change means no NADH turnover: the enzyme is inhibited or denatured, or a substrate is missing.

**(d) Beer's law.** $A = \\epsilon l c$ is linear in $c$, so with $l = 1$ cm: $\\Delta c/\\Delta t = \\Delta A/(\\epsilon l) = 0.31/(6.2 \\times 10^3) = 5.0 \\times 10^{-5}\\;\\text{M/min}$, i.e. $50\\;\\mu\\text{M}$ per minute.

**MCAT Strategy:** A dehydrogenase plus a spectrophotometer is a 340 nm question. Fix the SIGN of the absorbance change to the reaction direction before reading the choices.

**Problem 2.** Unknown A: $M^{+}$ = 92, with an M+2 peak at 94 about 33% as tall. Unknown B: $M^{+}$ = 136, with an M+2 peak at 138 about 98% as tall.

- **(a)** Which halogen does A contain?
- **(b)** Which halogen does B contain?
- **(c)** Do the masses fit sensible formulas?

**(a) Unknown A.** M+2 about one-third of M is the 3 : 1 signature of one **chlorine** ($^{35}Cl$ and $^{37}Cl$).

**(b) Unknown B.** M+2 roughly equal to M is the 1 : 1 signature of one **bromine**.

**(c) Check the masses.** A = 92 fits $C_4H_9Cl$ (57 for $C_4H_9$ + 35 for $^{35}Cl$); B = 136 fits $C_4H_9Br$ (57 + 79).

**MCAT Strategy:** Read the M+2 ratio BEFORE doing any arithmetic on the mass: it instantly fixes the halogen and simplifies the formula search.

**Problem 3.** A compound C8H10 shows only three $^{13}C$ signals: 21, 129 and 135 ppm.

- **(a)** How many degrees of unsaturation does C8H10 have, and what do they suggest?
- **(b)** What do 3 signals for 8 carbons tell you?
- **(c)** Which C8H10 isomer fits, and which carbons give each signal?
- **(d)** Why not ortho- or meta-xylene?

**(a) Degrees of unsaturation.** $(16 + 2 - 10)/2 = 4$: a benzene ring is likely.

**(b) Symmetry.** Only 3 signals for 8 carbons means the molecule is highly symmetric.

**(c) Para-xylene.** Two equivalent methyls (21), two equivalent substituted ring carbons (135) and four equivalent ring C-H carbons (129): exactly three environments.

**(d) The other xylenes.** Their ring carbons fall into more environments: ortho-xylene shows 4 signals and meta-xylene 5.

**MCAT Strategy:** For aromatic isomer problems, count the expected $^{13}C$ signals for each candidate first. With two identical substituents, the para isomer is the most symmetric.

**Problem 4.** An alcohol's mass spectrum shows a weak peak at m/z 74 and a strong peak at m/z 56.

- **(a)** What neutral loss separates the two peaks?
- **(b)** What are the molecular ion and the m/z 56 ion?
- **(c)** Why is the molecular ion so weak?

**(a) The loss.** $74 - 56 = 18$: loss of **water**, the signature fragmentation of alcohols.

**(b) The two ions.** $M^{+}$ = 74 fits C4H10O, a butanol isomer; dehydration in the spectrometer gives the alkene radical cation at 56.

**(c) Weak molecular ion.** Alcohols fragment so readily that their molecular ions are often weak or missing; the M-18 peak is the tell.

**MCAT Strategy:** Memorize the neutral-loss table (15, 18, 29). A prominent M-18 says "alcohol" as surely as a broad IR band at 3350.`
    },
    {
      id: 'spect3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **¹³C counts carbons.** One singlet per unique carbon; past 190 ppm is an aldehyde or ketone C=O, 160-185 an acid derivative.
- **Conjugation lengthens λ.** More conjugation narrows the HOMO-LUMO gap; biochem marks: 260 nm DNA/RNA, 280 protein, 340 NADH.
- **Beer–Lambert.** $A = \\epsilon l c$, linear in $c$, so a change in absorbance measures a change in concentration.
- **MS: mass, isotopes, fragments.** $M^{+}$ = molecular weight; M+2 at 3 : 1 = Cl, 1 : 1 = Br; fragments are stable cations.

**Common traps**

- **Calling 175 ppm a ketone.** Ester, amide and acid carbonyls stop near 185; only aldehydes and ketones pass 190.
- **Conjugation shortening λ.** Backwards: a smaller gap means LOWER energy and so a LONGER wavelength, since $E = hc/\\lambda$.
- **NAD⁺ at 340 nm.** Only NADH absorbs at 340, so a falling $A_{340}$ means NADH consumed and a rising one NADH made.
- **Trusting the highest m/z.** Alcohols lose water so easily that $M^{+}$ can be weak or missing; look for M-18.`
    }
  ]
};
