export const mcatOchemSpectroPart2Data = {
  topicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  sections: [
    {
      id: 'spect2-intro',
      type: 'text' as const,
      content: `# Spectroscopy for the MCAT

**Part 2 of 4 — Proton NMR: Shift, Integration & Splitting**

Proton ($^1H$) NMR reports on the **hydrogens** of a molecule. Nuclei in different electronic environments resonate at different frequencies, reported as **chemical shift** ($\\delta$, in ppm) relative to TMS at 0 ppm. Three readouts answer three questions:

- **Number of signals** → how many chemically distinct H environments?
- **Integration** (area) → how many H's in each environment (a ratio, not an absolute count)?
- **Splitting** (multiplicity) → how many H's on the *adjacent* carbons?

### Chemical Shift: Deshielding Moves You Downfield

Electron density **shields** a nucleus. Electronegative atoms and pi systems pull density away (**deshielding**), shifting signals **downfield** (higher ppm, drawn to the left).

| Proton type | $\\delta$ (ppm) |
|-------------|-----------------|
| Alkyl C-H (sp3, no neighbors) | 0.9-1.5 |
| Allylic / alpha to C=O | 2.0-2.7 |
| H on C bearing O or halogen | 3.0-4.5 |
| Vinyl (C=C-H) | 4.5-6.5 |
| Aromatic H | 6.5-8.5 |
| Aldehyde H | 9-10 |
| Carboxylic acid H | 10-12 |

Aromatic and aldehyde protons sit unusually far downfield because of **anisotropy** — the ring current (or C=O pi system) generates a local magnetic field that adds to the applied field at those positions. O-H and N-H shifts are **variable** (1-5 ppm typically), broadened by exchange, and often disappear on shaking with $D_2O$.

### The n+1 Rule

A proton coupled to $n$ **equivalent** neighboring protons (on adjacent atoms, typically three bonds away) appears as $n+1$ peaks:

- 0 neighbors → singlet; 1 → doublet; 2 → triplet; 3 → quartet
- Equivalent protons do **not** split each other
- O-H and N-H usually do not split neighbors (fast exchange averages the coupling)

The classic **ethyl pattern** — a 2H quartet (3.5-4.5 if on O) plus a 3H triplet (~1.2) — flags $-OCH_2CH_3$ or $-CH_2CH_3$ instantly. An **isopropyl** group gives a 6H doublet plus a 1H septet.

### Counting Environments with Symmetry

Symmetry-equivalent protons give ONE signal. Examples: acetone gives one singlet (6H); para-disubstituted benzenes with identical substituents give one aromatic signal; tert-butyl gives a 9H singlet. Fewer signals than you would naively expect is a symmetry clue.`
    },
    {
      id: 'spect2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Proton NMR Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A compound shows a 3H triplet at 1.2 ppm and a 2H quartet at 4.1 ppm. This pattern is most consistent with:`,
            options: [`An isopropyl group attached to nitrogen`, `A methyl group attached directly to oxygen`, `An ethyl group whose $CH_2$ is bonded to oxygen`, `Two unrelated methyl singlets overlapping`],
            correctAnswer: 2,
            explanation: `Triplet (3H) + quartet (2H) is the ethyl fingerprint: the CH3 sees 2 neighbors (n+1 = 3) and the CH2 sees 3 neighbors (n+1 = 4). The quartet at 4.1 ppm is strongly deshielded, placing that CH2 on oxygen — as in an ethyl ester. An isopropyl group would give a doublet + septet; a methyl on oxygen would be a 3H singlet near 3.3-3.9.`
          },
          {
            question: `The aldehyde proton of benzaldehyde appears near 10 ppm primarily because:`,
            options: [`Deshielding by the electron-withdrawing carbonyl plus anisotropy of the C=O pi system`, `Hydrogen bonding to solvent`, `Rapid exchange with trace water`, `Coupling to the aromatic protons`],
            correctAnswer: 0,
            explanation: `The aldehyde H sits directly on an electron-poor carbonyl carbon, and the C=O pi system's induced field (anisotropy) reinforces the applied field at that position — both effects push the signal far downfield. Exchange and H-bonding govern O-H/N-H behavior, not the C-H of an aldehyde.`
          },
          {
            question: `A 1H NMR signal at 2.1 ppm vanishes after the sample is shaken with $D_2O$. The signal most likely belongs to:`,
            options: [`A methyl ketone $CH_3$`, `An aromatic C-H`, `A vinyl proton`, `An O-H or N-H proton`],
            correctAnswer: 3,
            explanation: `Exchangeable protons (O-H, N-H, S-H) swap with deuterium from D2O; since deuterium is invisible in 1H NMR, the peak disappears. C-H protons of any kind do not exchange under these conditions. Note that O-H shifts are variable — 2.1 ppm is entirely plausible for an alcohol.`
          },
          {
            question: `How many $^1H$ NMR signals does para-xylene (1,4-dimethylbenzene) show?`,
            options: [`Four`, `Two`, `Three`, `Six`],
            correctAnswer: 1,
            explanation: `The para symmetry makes both methyls equivalent (one 6H singlet) and all four aromatic H's equivalent (one 4H singlet): two signals total. Counting environments before counting protons is the fastest way to match candidate structures to a spectrum.`
          },
          {
            question: `In 1,1,2-trichloroethane ($Cl_2CH$-$CH_2Cl$), the $CH_2$ protons appear as a doublet. Why a doublet rather than a triplet?`,
            options: [`The chlorines decouple the protons`, `The CH2 protons split each other`, `The CH2 protons have exactly one neighboring proton, so n+1 = 2`, `Chlorine's quadrupole broadens the signal into two peaks`],
            correctAnswer: 2,
            explanation: `Splitting counts protons on ADJACENT atoms: the CHCl2 carbon carries one H, so the CH2 signal is split into 1+1 = 2 peaks. Equivalent protons never split each other, and halogens do not add splitting in routine 1H NMR.`
          }
        ]
      }
    },
    {
      id: 'spect2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Three readouts: signal count = environments; integration = H ratio; splitting = neighbors (n+1)
- Deshielding (electronegative atoms, pi anisotropy) moves signals downfield: alkyl 1, alpha-to-C=O 2.1-2.5, H-C-O 3-4.5, vinyl 4.5-6.5, aromatic 6.5-8.5, aldehyde 9-10, acid 10-12
- Ethyl = triplet + quartet; isopropyl = doublet + septet; tert-butyl = 9H singlet
- O-H/N-H: variable shift, broad, no reliable splitting, erased by $D_2O$ shake
- Symmetry merges signals — fewer signals than protons suggests a symmetric structure`
    },
    {
      id: 'spect2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Proton NMR

<details>
<summary><b>Example 1: Ethyl acetate from three signals</b></summary>

**Question:** C4H8O2 shows: 2.0 ppm singlet (3H), 1.3 ppm triplet (3H), 4.1 ppm quartet (2H). Assign the structure.

**Solution:**
1. Degrees of unsaturation = $(2 \\times 4 + 2 - 8)/2 = 1$ → likely a C=O with two oxygens → ester or acid; no 10-12 ppm signal rules out the acid
2. Triplet + quartet = ethyl; quartet at 4.1 → CH2 on oxygen → $-OCH_2CH_3$
3. 3H singlet at 2.0 = methyl alpha to C=O with no neighbors
4. Assemble: $CH_3CO$-$OCH_2CH_3$ — **ethyl acetate**

**MCAT Strategy:** Assign the most distinctive fragment first (the ethyl pattern), then place the leftover integration. The singlet's shift (2.0 vs 3.7) tells you which side of the ester oxygen a methyl sits on.
</details>

<details>
<summary><b>Example 2: Distinguishing isomers by signal count</b></summary>

**Question:** Distinguish 1-propanol from 2-propanol by 1H NMR without using chemical shifts.

**Solution:**
1. 1-Propanol ($CH_3CH_2CH_2OH$): four environments — CH3 triplet, middle CH2 multiplet, O-CH2 triplet, plus O-H
2. 2-Propanol ($(CH_3)_2CHOH$): three environments — 6H doublet, 1H septet, O-H
3. The 6H doublet + septet (isopropyl signature) identifies 2-propanol immediately

**MCAT Strategy:** Symmetric branching compresses the spectrum. A large doublet integrating to 6H is nearly always $(CH_3)_2CH$-.
</details>

<details>
<summary><b>Example 3: Aromatic substitution pattern</b></summary>

**Question:** An unknown C8H8O has signals at 9.9 (1H, singlet), 7.8 and 7.3 (2H each, doublets), and 2.4 (3H, singlet). Identify it.

**Solution:**
1. 9.9 singlet = aldehyde H (no neighboring H's — the carbonyl carbon's neighbor is the ring)
2. Two 2H aromatic doublets = the classic **para-disubstituted** benzene pattern (two pairs of equivalent H's splitting each other)
3. 2.4 singlet (3H) = methyl on the ring (benzylic shift)
4. Structure: **4-methylbenzaldehyde** (p-tolualdehyde)

**MCAT Strategy:** A pair of aromatic doublets ("AA'BB' pattern") = para substitution. Ortho/meta patterns are messier multiplets — the MCAT uses the clean para case.
</details>

<details>
<summary><b>Example 4: Integration as a ratio, not a count</b></summary>

**Question:** A symmetric ether shows only a triplet integrating to 3 and a quartet integrating to 2. The molecular formula is C4H10O. Reconcile the integration with 10 protons.

**Solution:**
1. Integration gives ratios: 3:2 could be 3H:2H, 6H:4H, etc.
2. C4H10O with an ethyl pattern and total 10 H → 6H:4H → two equivalent ethyl groups
3. Structure: **diethyl ether**, $CH_3CH_2$-$O$-$CH_2CH_3$ — symmetry halves the apparent proton count

**MCAT Strategy:** Always scale integrations to the molecular formula before assigning. A "3H" triplet in a 10-proton molecule may really be 6H of two identical groups.
</details>`
    }
  ]
};
