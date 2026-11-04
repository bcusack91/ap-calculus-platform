export const mcatOchemSpectroPart1Data = {
  topicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  sections: [
    {
      id: 'spect1-intro',
      type: 'text' as const,
      content: `# Spectroscopy for the MCAT

**Part 1 of 4 — IR Spectroscopy: Reading the Bands**

IR spectroscopy measures **bond vibrations** (stretching and bending). A vibration absorbs IR only if it changes the molecule's **dipole moment**. Positions are given as **wavenumbers** in $\\text{cm}^{-1}$: the wavenumber is $1/\\lambda$, so it is proportional to frequency and to energy, and a higher wavenumber means a higher-energy vibration. Two physical rules organize every frequency:

- **Stiffer bonds vibrate faster**: triple > double > single bond frequencies
- **Lighter atoms vibrate faster**: X-H stretches sit highest of all

Everything below about $1500\\ \\text{cm}^{-1}$ is the **fingerprint region** — a complex pattern used to match spectra, not to identify individual groups. Work in the diagnostic region above it, except for the strong C-O stretch (1000-1300), which confirms esters, ethers and alcohols.

**Degrees of unsaturation** (rings + π bonds) come straight from a molecular formula: $\\text{DoU} = (2C + 2 + N - H - X)/2$, where X counts halogens and oxygen is ignored. Each ring or double bond uses one; a triple bond uses two; a benzene ring uses four.

### The Band Table (memorize these)

| Bond / group | Frequency ($\\text{cm}^{-1}$) | Appearance |
|--------------|-------------------------------|------------|
| O-H (alcohol) | 3200-3550 | **Broad**, rounded |
| O-H (carboxylic acid) | 2500-3300 | **Very broad**, smears over the C-H region |
| N-H (amine/amide) | 3300-3500 | Medium; **primary = two spikes, secondary = one** |
| C-H (sp3) | 2850-2960 | Just BELOW 3000 |
| C-H (sp2) | 3000-3100 | Just ABOVE 3000 |
| C-H (aldehyde) | ~2720 and ~2850 | Two weak bands — the aldehyde fingerprint |
| C-H (terminal alkyne) | ~3300 | Sharp (contrast with broad O-H) |
| $C{\\equiv}N$ | ~2250 | Sharp, medium |
| $C{\\equiv}C$ | 2100-2260 | Weak; **absent** in symmetric internal alkynes |
| C=O | 1700-1750 | **Strong, sharp** — the most reliable band in IR |
| C=C | 1620-1680 | Weak-medium |
| C-O (ester, ether, alcohol) | 1000-1300 | Strong |

### Sorting Out the C=O Neighborhood

| Carbonyl type | Typical position ($\\text{cm}^{-1}$) |
|---------------|--------------------------------------|
| Acyl chloride | ~1800 |
| Anhydride | two bands, ~1760 and ~1820 |
| Ester | 1735-1750 |
| Aldehyde | 1720-1740 |
| Ketone | ~1715 |
| Carboxylic acid | ~1710 (plus the very broad O-H) |
| Amide | 1630-1690 (plus N-H if 1° or 2°) |

**Conjugation lowers** a C=O frequency by roughly 20-30 $\\text{cm}^{-1}$ (acetophenone ~1685 vs acetone ~1715) because resonance gives the C=O partial single-bond character. **Ring strain raises** it (small-ring lactones/ketones absorb higher).

### The Interpretation Algorithm

1. Strong band near 1700? → carbonyl present; use its exact position + companions (broad O-H → acid; C-O stretch → ester; N-H → amide; 2720 → aldehyde)
2. Broad 3200-3550? → alcohol O-H (or N-H if spiked and less broad)
3. ~2250? → nitrile (or alkyne slightly lower and weaker)
4. Nothing but C-H? → hydrocarbon or ether (check 1000-1300 for C-O)`
    },
    {
      id: 'spect1-quiz1',
      type: 'multiple-choice' as const,
      content: `**IR Interpretation** 🎯`,
      exercise: {
        questions: [
          {
            question: `An IR spectrum shows a very broad absorption from 2500-3300 $\\text{cm}^{-1}$ overlapping the C-H stretches, plus a strong band at 1710 $\\text{cm}^{-1}$. The compound is most likely:`,
            options: [`An aliphatic alcohol`, `A carboxylic acid`, `A methyl ester`, `A primary amine`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `The combination is diagnostic: strongly hydrogen-bonded (dimeric) O-H gives the extremely broad 2500-3300 smear, and the C=O appears near 1710. An alcohol's O-H is broad but sits higher (3200-3550) and has no C=O; an ester has C=O but no O-H.`
          },
          {
            question: `Both an aldehyde and a ketone show strong absorption near 1715-1730 $\\text{cm}^{-1}$. The feature that identifies the aldehyde is:`,
            options: [`A broad O-H band at 3200-3550 $\\text{cm}^{-1}$`, `A sharp nitrile band near 2250 $\\text{cm}^{-1}$`, `Two N-H spikes at 3350 and 3450 $\\text{cm}^{-1}$`, `Weak C-H bands near 2720 and 2850 $\\text{cm}^{-1}$`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `The aldehydic C-H stretch produces two characteristic weak bands (~2720 and ~2850), the lower one clear of other absorptions. Ketones have no C-H on the carbonyl carbon. A broad 3200-3550 band = alcohol O-H; a sharp 2250 band = nitrile; paired N-H spikes = primary amine/amide. None of these distinguishes an aldehyde from a ketone.`
          },
          {
            question: `A spectrum shows two sharp spikes of similar intensity at 3350 and 3420 $\\text{cm}^{-1}$ and no carbonyl band. This indicates:`,
            options: [`A primary amine`, `A secondary amine`, `A carboxylic acid`, `An aliphatic alcohol`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `A primary amine's two N-H bonds give symmetric and asymmetric stretches — two spikes. A secondary amine (one N-H) gives a single band; an alcohol O-H is one broad rounded band; an acid would include a C=O.`
          },
          {
            question: `A compound shows a strong band at 1740 $\\text{cm}^{-1}$ and another strong band near 1200 $\\text{cm}^{-1}$, with no O-H or N-H band above 3000 $\\text{cm}^{-1}$. It is most consistent with:`,
            options: [`A saturated ketone`, `An aliphatic carboxylic acid`, `A saturated ester`, `An N,N-dialkyl amide`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Esters combine a C=O at the high end (1735-1750) with a strong C-O stretch (1000-1300). A ketone lacks the strong C-O band; an acid would show the broad O-H; an amide's C=O sits much lower (1630-1690).`
          },
          {
            question: `2-Butyne shows essentially no absorption in the 2100-2260 $\\text{cm}^{-1}$ region even though it contains a triple bond, because:`,
            options: [`Triple bonds do not absorb IR radiation`, `The symmetric stretch causes no dipole change`, `The band is hidden under the C=O stretch`, `The triple bond is too strong to vibrate`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `IR absorption requires a changing dipole. In a symmetric internal alkyne (CH3-C≡C-CH3) the stretch is symmetric about the bond's center, so the dipole change is essentially zero and the band vanishes. Terminal alkynes DO show C≡C plus the sharp ≡C-H at 3300, so triple bonds can absorb IR. 2-Butyne has no C=O to hide the band (and a C=O sits near 1700, far from 2100-2260), and a strong bond vibrates FASTER, at a higher wavenumber, rather than not at all.`
          }
        ]
      }
    },
    {
      id: 'spect1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — IR Interpretation

**Problem 1.** An unknown C4H8O shows sp3 C-H at 2900, a strong, sharp band at 1715, no bands above 3000 and nothing at 2720.

- **(a)** How many degrees of unsaturation does C4H8O have?
- **(b)** What accounts for that degree of unsaturation?
- **(c)** Which compound classes do the missing bands rule out?
- **(d)** What is the compound?

**(a) Degrees of unsaturation.** $(2 \\times 4 + 2 - 8)/2 = 1$: one ring OR one double bond.

**(b) The 1715 band.** A strong, sharp band at 1715 is a C=O, and it uses the one degree of unsaturation from (a): there is no ring and no C=C.

**(c) Missing bands.** No broad O-H above 3000 rules out an alcohol or an acid; no 2720/2850 pair rules out an aldehyde.

**(d) The compound.** A C4 carbonyl that is not an aldehyde: **2-butanone** (butanal would show the 2720/2850 pair).

**MCAT Strategy:** Spend the degrees of unsaturation first. If the C=O uses the only one, there is no ring and no alkene, and the candidate list collapses fast.

**Problem 2.** Two unknowns both show broad O-H stretches. Spectrum A: a broad band centered near 3350 and no carbonyl. Spectrum B: an extremely broad absorption from 2500-3300 riding over the C-H peaks, plus a strong band at 1705.

- **(a)** What class of compound is A?
- **(b)** What class of compound is B?
- **(c)** Why does B's O-H band look so different from A's?

**(a) Unknown A.** A broad, rounded band within 3200-3550 and no C=O: an **alcohol**.

**(b) Unknown B.** An O-H smear across 2500-3300 paired with a C=O at 1705: a **carboxylic acid**.

**(c) Why B differs.** Carboxylic acids form strongly hydrogen-bonded **dimers**. The dimer's paired hydrogen bonds broaden the acid O-H dramatically and drag it down across the C-H region.

**MCAT Strategy:** The breadth and position of the O-H tell you the class before you even look at the carbonyl region. An acid is the only group whose O-H swallows the C-H stretches.

**Problem 3.** You must tell propanamide apart from a mixture of a primary amine and a ketone, using IR band positions alone.

- **(a)** Which bands do the two samples share?
- **(b)** Where does each sample's C=O absorb, and why is the amide's so low?
- **(c)** Both show two N-H spikes; one has C=O at 1660, the other at 1715. Which is which?

**(a) Shared bands.** Both show N-H stretches (~3300-3500) and a C=O.

**(b) Carbonyl position.** An amide C=O is unusually LOW (1630-1690) because the nitrogen lone pair donates into the carbonyl, giving it partial single-bond character by resonance. A simple ketone sits near 1715, outside the amide range.

**(c) Assignment.** The N-H spikes cannot tell them apart, so the C=O decides: 1660 → **amide**; 1715 → amine plus ketone.

**MCAT Strategy:** The amide's low C=O frequency is the same resonance fact that makes peptide bonds planar and unreactive: one piece of physics, three exam contexts.

**Problem 4.** Predict the diagnostic IR bands of methyl salicylate: a benzene ring bearing a methyl ester ($-CO_2CH_3$) and, on the neighboring carbon, a phenol O-H.

- **(a)** What O-H band do you expect?
- **(b)** Which C-H stretches appear, and on which side of 3000?
- **(c)** Where does the ester C=O absorb, compared with a normal ester?
- **(d)** Which other strong bands complete the prediction?

**(a) Phenol O-H.** Broad, near 3200 (the low end of the O-H range); intramolecular hydrogen bonding to the neighboring ester carbonyl broadens and lowers it.

**(b) C-H stretches.** Aromatic sp2 C-H just above 3000; sp3 C-H of the $OCH_3$ just below 3000.

**(c) Ester C=O.** Near 1680, well below a normal ester's 1735-1750: conjugation with the ring and the hydrogen bond from the phenol O-H both weaken the C=O.

**(d) The rest.** Strong C-O stretches at 1100-1300 and an aromatic C=C near 1600.

**MCAT Strategy:** Passages often run this in reverse: "which band confirms the product?" Answer with the band that CHANGES. Making methyl salicylate from salicylic acid, the acid's 2500-3300 smear disappears while the phenol O-H persists.`
    },
    {
      id: 'spect1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **IR needs a dipole change.** Only vibrations that change the dipole absorb, so a symmetric internal C≡C can be invisible.
- **Stiff bonds, light atoms.** Frequency rises from single to double to triple bonds, and X-H stretches sit highest of all.
- **Anchor bands.** Broad O-H 3200-3550, acid O-H 2500-3300, N-H 3300-3500, nitrile 2250; sp3 C-H below 3000, sp2 above.
- **The carbonyl ladder.** Strong C=O: acyl chloride ~1800 > ester ~1740 > ketone ~1715 > amide 1630-1690; conjugation lowers it.

**Common traps**

- **Every broad band an alcohol.** An acid's O-H smears 2500-3300 over the C-H stretches and comes with a C=O near 1710.
- **Missing the aldehyde.** Aldehyde and ketone C=O bands overlap; only the weak C-H pair at 2720 and 2850 marks the aldehyde.
- **One N-H spike as primary.** A primary amine or amide shows two N-H spikes; a single spike means a secondary N-H.
- **Reading the fingerprint.** Below 1500, match whole spectra; only the strong C-O stretch (1000-1300) confirms a group there.`
    }
  ]
};
