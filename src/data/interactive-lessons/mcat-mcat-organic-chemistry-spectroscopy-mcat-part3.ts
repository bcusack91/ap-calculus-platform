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

UV-Vis absorption promotes pi electrons to antibonding orbitals ($\\pi \\rightarrow \\pi^*$). The key trend: **more conjugation → smaller HOMO-LUMO gap → longer wavelength absorbed** ($E = hc/\\lambda$). Isolated double bonds absorb below ~200 nm (invisible on the instrument); extended conjugation walks the absorption into the near-UV and, eventually, the visible (beta-carotene's 11 conjugated C=C absorb blue light, so it looks orange). Biochemistry hooks: proteins absorb at **280 nm** (aromatic Trp/Tyr), nucleic acids at **260 nm**, and NADH absorbs at **340 nm** while $NAD^+$ does not — the standard way to follow redox enzyme kinetics.

### Mass Spectrometry: Weighing the Pieces

The sample is ionized (losing one electron gives the **molecular ion** $M^{+}$, a radical cation), fragments, and ions are sorted by **mass-to-charge ratio** ($m/z$).

- $M^{+}$ gives the **molecular weight**; the tallest peak is the **base peak** (most stable ion, set to 100%)
- **M+2 isotope flags**: Cl gives M+2 about **one-third** of M (ratio 3:1, from $^{35}Cl/^{37}Cl$); Br gives M+2 roughly **equal** to M (1:1)
- **Nitrogen rule**: an odd $M^{+}$ mass means an odd number of nitrogens
- Fragments form the **most stable cations**: benzylic/allylic and tertiary carbocations, and acylium ions ($RCO^{+}$, e.g. $m/z = 43$ for $CH_3CO^{+}$)
- Common neutral losses: M-15 (methyl), M-18 (water, typical of alcohols), M-29 (CHO or ethyl)

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
            explanation: `Only aldehyde and ketone carbonyls reach past ~190 ppm (190-220). Ester, amide, and acid carbonyls stop near 160-185 because the attached heteroatom donates electron density by resonance. Aromatic carbons sit at 100-150 and sp3 C-O carbons at 50-90.`
          },
          {
            question: `1,3,5-Hexatriene absorbs at a longer wavelength than 1,3-butadiene because the additional conjugated double bond:`,
            options: [`Increases the molecular weight`, `Raises the energy of every molecular orbital`, `Adds more sigma bonds that absorb light`, `Narrows the HOMO-LUMO gap, lowering the energy (and lengthening the wavelength) of the transition`],
            correctAnswer: 3,
            explanation: `Extending conjugation raises the HOMO and lowers the LUMO, shrinking the gap. Since $E = hc/\\lambda$, a smaller transition energy means a longer absorbed wavelength. This gap-narrowing trend is the single UV-Vis fact the MCAT tests most.`
          },
          {
            question: `A mass spectrum shows $M^{+}$ at m/z 122 and an M+2 peak at m/z 124 of nearly equal height. The molecule most likely contains:`,
            options: [`One bromine atom`, `One chlorine atom`, `One nitrogen atom`, `Two oxygen atoms`],
            correctAnswer: 0,
            explanation: `Bromine's two isotopes (79 and 81) are nearly 1:1 abundant, so one Br gives M and M+2 peaks of about equal intensity. Chlorine would give a 3:1 ratio; nitrogen and oxygen produce no significant M+2 signature.`
          },
          {
            question: `An enzyme assay follows the reduction of $NAD^+$ to NADH by monitoring absorbance at:`,
            options: [`260 nm, where nucleic acids absorb`, `210 nm, where peptide bonds absorb`, `340 nm, where NADH absorbs but $NAD^+$ does not`, `280 nm, where tryptophan absorbs`],
            correctAnswer: 2,
            explanation: `NADH's reduced nicotinamide ring is more extensively conjugated in a way that gives a distinct 340 nm band absent in NAD+. Rising A340 = NADH being produced. 260 and 280 nm are the nucleic acid and aromatic-residue wavelengths — both molecules absorb there, so neither is diagnostic for the redox state.`
          },
          {
            question: `The mass spectrum of 2-butanone shows an intense fragment at m/z 43. This ion is best explained as:`,
            options: [`Loss of water from the molecular ion`, `The acylium ion $CH_3CO^{+}$ formed by alpha cleavage`, `A doubly charged molecular ion`, `The $^{13}C$ isotope peak of a m/z 42 fragment`],
            correctAnswer: 1,
            explanation: `Ketones cleave alpha to the carbonyl because the resulting acylium ion is resonance-stabilized ($CH_3C{\\equiv}O^{+}$). For 2-butanone (MW 72), losing the ethyl radical (29) leaves m/z 43. Fragmentation always favors the most stable cation — the same stability rules as carbocation chemistry.`
          }
        ]
      }
    },
    {
      id: 'spect3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- $^{13}C$ NMR: one singlet per unique carbon; >190 ppm = aldehyde/ketone, 160-185 = acid derivative; fewer signals than carbons = symmetry
- UV-Vis: more conjugation → smaller HOMO-LUMO gap → longer wavelength; 260 nm nucleic acids, 280 nm proteins, 340 nm NADH (not $NAD^+$)
- MS: $M^{+}$ = molecular weight; M+2 flags — Cl 3:1, Br 1:1; odd mass = odd N count
- Fragments follow cation stability: benzylic/allylic/tertiary and acylium; losses of 15 (CH3), 18 (H2O), 29 (CHO/C2H5)
- Match the tool to the question: IR = groups, 1H NMR = H arrangement, 13C = C environments, UV = conjugation, MS = mass/halogens`
    },
    {
      id: 'spect3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — 13C, UV-Vis & MS

<details>
<summary><b>Example 1: Symmetry from a carbon count</b></summary>

**Question:** A compound C8H10 shows only three $^{13}C$ signals: 21, 126, and 137 ppm. Propose a structure.

**Solution:**
1. C8H10 has $(16 + 2 - 10)/2 = 4$ degrees of unsaturation → benzene ring likely
2. Only 3 signals for 8 carbons → high symmetry
3. Para-xylene: two equivalent methyls (21), two equivalent substituted ring carbons (137), four equivalent ring C-H carbons (126) — exactly three environments
4. Ortho- or meta-xylene would show more ring environments (4 signals each)

**MCAT Strategy:** For aromatic isomer problems, count expected 13C signals for each candidate first — para isomers are always the most symmetric.
</details>

<details>
<summary><b>Example 2: Chlorine or bromine?</b></summary>

**Question:** Unknown A: $M^{+}$ = 92, M+2 = 94 at ~33% of M. Unknown B: $M^{+}$ = 136, M+2 = 138 at ~98% of M. Assign the halogens.

**Solution:**
1. A: M+2 about one-third of M → the 3:1 signature of one **chlorine**
2. B: M+2 roughly equal to M → the 1:1 signature of one **bromine**
3. Check masses: A = 92 fits $C_4H_9Cl$ (57 for $C_4H_9$ + 35 for $^{35}Cl$); B = 136 fits $C_4H_9Br$ (57 + 79)

**MCAT Strategy:** Read the M+2 ratio BEFORE doing any arithmetic on the mass — it instantly fixes the halogen and simplifies the formula search.
</details>

<details>
<summary><b>Example 3: The alcohol that hides its molecular ion</b></summary>

**Question:** An alcohol's mass spectrum shows a weak peak at m/z 74 and a strong peak at m/z 56. Interpret.

**Solution:**
1. 74 - 56 = 18 → loss of **water**, the signature fragmentation of alcohols
2. $M^{+}$ = 74 fits C4H10O (butanol isomer); dehydration in the spectrometer gives the alkene radical cation at 56
3. Alcohols often show weak or missing molecular ions — the M-18 peak is the tell

**MCAT Strategy:** Memorize the neutral-loss table (15, 18, 29). A prominent M-18 says "alcohol" as surely as a broad IR band at 3350.
</details>

<details>
<summary><b>Example 4: Following an enzyme with UV</b></summary>

**Question:** Lactate dehydrogenase converts pyruvate + NADH to lactate + $NAD^+$. A passage reports absorbance at 340 nm falling over time. What is being measured, and what would a flat trace mean?

**Solution:**
1. NADH absorbs at 340 nm; $NAD^+$ does not
2. Falling A340 = NADH consumed → the reaction is running in the direction written
3. A flat trace = no NADH turnover → enzyme inhibited, denatured, or missing substrate
4. Rate of absorbance change is proportional to reaction velocity (Beer's law: $A = \\epsilon l c$, linear in concentration)

**MCAT Strategy:** Any passage pairing a dehydrogenase with a spectrophotometer is a 340 nm question. Link the SIGN of the absorbance change to the reaction direction before touching the answer choices.
</details>`
    }
  ]
};
