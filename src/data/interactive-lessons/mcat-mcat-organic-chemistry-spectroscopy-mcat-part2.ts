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
| Alkyl C-H (no nearby O, halogen or π system) | 0.9-1.5 |
| Allylic / benzylic / alpha to C=O | 2.0-2.7 |
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
            options: [`An isopropyl group attached to a nitrogen atom`, `A methyl group attached to an oxygen atom`, `An ethyl group attached to an oxygen atom`, `A tert-butyl group attached to a carbon atom`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Triplet (3H) + quartet (2H) is the ethyl fingerprint: the CH3 sees 2 neighbors (n+1 = 3) and the CH2 sees 3 neighbors (n+1 = 4). The quartet at 4.1 ppm is strongly deshielded, placing that CH2 on oxygen — as in an ethyl ester. An isopropyl group would give a doublet + septet; a methyl on oxygen would be a 3H singlet near 3.3-3.9; a tert-butyl group would be a single 9H singlet near 1 ppm.`
          },
          {
            question: `The aldehyde proton of benzaldehyde appears near 10 ppm primarily because:`,
            options: [`Deshielding by the carbonyl and C=O anisotropy`, `Hydrogen bonding of the aldehyde H to solvent`, `Rapid exchange of the aldehyde H with water`, `Spin-spin coupling to the aromatic protons`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `The aldehyde H sits directly on an electron-poor carbonyl carbon, and the C=O pi system's induced field (anisotropy) reinforces the applied field at that position — both effects push the signal far downfield. Exchange and H-bonding govern O-H/N-H behavior, not the C-H of an aldehyde, and spin-spin coupling splits a signal into peaks without moving its chemical shift.`
          },
          {
            question: `A 1H NMR signal at 2.1 ppm vanishes after the sample is shaken with $D_2O$. The signal most likely belongs to:`,
            options: [`A methyl ketone $CH_3$`, `An aromatic C-H`, `A vinyl proton`, `An O-H or N-H proton`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Exchangeable protons (O-H, N-H, S-H) swap with deuterium from D2O; since deuterium is invisible in 1H NMR, the peak disappears. C-H protons of any kind do not exchange under these conditions. Note that O-H shifts are variable — 2.1 ppm is entirely plausible for an alcohol.`
          },
          {
            question: `How many $^1H$ NMR signals does para-xylene (1,4-dimethylbenzene) show?`,
            options: [`Four`, `Two`, `Three`, `Six`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `The para symmetry makes both methyls equivalent (one 6H singlet) and all four aromatic H's equivalent (one 4H singlet): two signals total. Counting environments before counting protons is the fastest way to match candidate structures to a spectrum.`
          },
          {
            question: `In 1,1,2-trichloroethane ($Cl_2CH$-$CH_2Cl$), the $CH_2$ protons appear as a doublet. Why a doublet rather than a triplet?`,
            options: [`Adjacent chlorine atoms decouple the protons`, `The two equivalent CH2 protons split each other`, `The adjacent carbon carries only one proton`, `Chlorine's quadrupole splits the signal in two`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Splitting counts protons on ADJACENT atoms: the CHCl2 carbon carries one H, so the CH2 signal is split into 1+1 = 2 peaks. Equivalent protons never split each other, so the CH2 pair does not split itself, and halogens neither decouple protons nor add splitting in routine 1H NMR (chlorine's quadrupole does not show up as a split peak).`
          }
        ]
      }
    },
    {
      id: 'spect2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Proton NMR

**Problem 1.** A compound C4H8O2 shows three $^1H$ NMR signals: 2.0 ppm (singlet, 3H), 1.3 ppm (triplet, 3H) and 4.1 ppm (quartet, 2H).

- **(a)** What do the degree of unsaturation and the lack of a 10-12 ppm signal tell you?
- **(b)** Which fragment do the triplet and quartet form, and what is it attached to?
- **(c)** What is the 3H singlet at 2.0 ppm?
- **(d)** What is the structure?

**(a) Formula.** $(2 \\times 4 + 2 - 8)/2 = 1$ degree of unsaturation: likely a C=O, and with two oxygens an ester or an acid. No 10-12 ppm signal rules out the acid.

**(b) Ethyl group.** Triplet + quartet = ethyl. The quartet at 4.1 is deshielded, so that CH2 sits on oxygen: $-OCH_2CH_3$.

**(c) The singlet.** A 3H singlet at 2.0 is a methyl alpha to the C=O with no neighbors.

**(d) Structure.** The ester from (a), the $-OCH_2CH_3$ from (b) and the $CH_3CO$- from (c) assemble to $CH_3CO$-$OCH_2CH_3$: **ethyl acetate**.

**MCAT Strategy:** Assign the most distinctive fragment first (the ethyl pattern), then place the leftover integration. The singlet's shift (2.0 vs 3.7) tells you which side of the ester oxygen a methyl sits on.

**Problem 2.** A symmetric ether, C4H10O, shows only a triplet integrating to 3 and a quartet integrating to 2.

- **(a)** What does a 3 : 2 integration actually tell you?
- **(b)** How do you reconcile it with the formula's 10 protons?
- **(c)** What is the structure?

**(a) Ratios only.** Integration gives ratios: 3 : 2 could be 3H : 2H, 6H : 4H, and so on.

**(b) Scaling.** An ethyl pattern and 10 H in total → 6H : 4H → two equivalent ethyl groups.

**(c) Structure.** **Diethyl ether**, $CH_3CH_2$-$O$-$CH_2CH_3$: symmetry halves the apparent proton count.

**MCAT Strategy:** Always scale integrations to the molecular formula before assigning. A "3H" triplet in a 10-proton molecule may really be 6H of two identical groups.

**Problem 3.** Distinguish 1-propanol ($CH_3CH_2CH_2OH$) from 2-propanol ($(CH_3)_2CHOH$) by $^1H$ NMR without using chemical shifts.

- **(a)** How many signals does 1-propanol give, and what are they?
- **(b)** How many signals does 2-propanol give, and what are they?
- **(c)** Which feature identifies 2-propanol at a glance?

**(a) 1-Propanol.** Four environments: a CH3 triplet, the middle CH2 multiplet, the O-CH2 triplet, plus the O-H.

**(b) 2-Propanol.** Three environments: a 6H doublet, a 1H septet and the O-H.

**(c) The tell.** The 6H doublet + 1H septet, the isopropyl signature, identifies 2-propanol immediately.

**MCAT Strategy:** Symmetric branching compresses the spectrum. A large doublet integrating to 6H is nearly always $(CH_3)_2CH$-.

**Problem 4.** An unknown C8H8O shows $^1H$ NMR signals at 9.9 (1H, singlet), 7.8 and 7.3 (2H each, doublets) and 2.4 (3H, singlet).

- **(a)** What is the 9.9 singlet, and why is it not split?
- **(b)** What do the two 2H aromatic doublets say about the ring?
- **(c)** What is the 2.4 singlet?
- **(d)** What is the compound?

**(a) Aldehyde H.** A singlet at 9.9 is an aldehyde H. It has no neighboring H's: the carbonyl carbon's neighbor is a ring carbon that carries none.

**(b) Para pattern.** Two 2H aromatic doublets are the classic **para-disubstituted** benzene pattern: two pairs of equivalent H's splitting each other.

**(c) Ring methyl.** A 3H singlet at 2.4 is a methyl on the ring (benzylic shift).

**(d) The compound.** The CHO from (a) and the CH3 from (c), para on the ring from (b): **4-methylbenzaldehyde** (p-tolualdehyde).

**MCAT Strategy:** A pair of aromatic doublets = para substitution. Ortho and meta patterns are messier multiplets; the MCAT uses the clean para case.

<!-- yield:low -->
- Spectroscopists call this para pair of doublets an "AA'BB'" pattern.
<!-- /yield -->`
    },
    {
      id: 'spect2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Three readouts.** Signal count = H environments, integration = H ratio, splitting = H's on adjacent atoms (n + 1).
- **Deshielding moves downfield.** Electronegative atoms and π systems raise δ: alkyl ~1, H-C-O 3-4.5, aromatic 6.5-8.5, aldehyde 9-10.
- **Signature patterns.** Ethyl = 3H triplet + 2H quartet; isopropyl = 6H doublet + 1H septet; tert-butyl = 9H singlet.
- **Symmetry merges signals.** Equivalent H's give one signal, so fewer signals than expected points to a symmetric structure.

**Common traps**

- **Splitting by its own H's.** Only H's on adjacent atoms split a signal; equivalent H's, like a CH2's pair, never split each other.
- **Treating O-H like C-H.** O-H and N-H shifts vary; their peaks are broad, rarely split, and vanish on a $D_2O$ shake.
- **Integration as a count.** Integrals are ratios: scale them to the formula, so a symmetric ether's 3 : 2 is really 6H : 4H.
- **Misplacing a methyl singlet.** In an ester, a CH3 singlet near 2.0 sits on the C=O side; near 3.7 it sits on the oxygen.`
    }
  ]
};
