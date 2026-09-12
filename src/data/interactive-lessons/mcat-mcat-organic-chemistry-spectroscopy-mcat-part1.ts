export const mcatOchemSpectroPart1Data = {
  topicSlug: 'mcat-organic-chemistry-spectroscopy-mcat',
  sections: [
    {
      id: 'spect1-intro',
      type: 'text' as const,
      content: `# Spectroscopy for the MCAT

**Part 1 of 4 — IR Spectroscopy: Reading the Bands**

IR spectroscopy measures **bond vibrations** (stretching and bending). A vibration absorbs IR only if it changes the molecule's **dipole moment**. Two physical rules organize every frequency:

- **Stiffer bonds vibrate faster**: triple > double > single bond frequencies
- **Lighter atoms vibrate faster**: X-H stretches sit highest of all

Everything below about $1500\\ \\text{cm}^{-1}$ is the **fingerprint region** — a complex pattern used to match spectra, not to identify individual groups. Work only in the diagnostic region above it.

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
            options: [`An alcohol`, `A carboxylic acid`, `An ester`, `A primary amine`],
            correctAnswer: 1,
            explanation: `The combination is diagnostic: strongly hydrogen-bonded (dimeric) O-H gives the extremely broad 2500-3300 smear, and the C=O appears near 1710. An alcohol's O-H is broad but sits higher (3200-3550) and has no C=O; an ester has C=O but no O-H.`
          },
          {
            question: `Both an aldehyde and a ketone show strong absorption near 1715-1730 $\\text{cm}^{-1}$. The feature that identifies the aldehyde is:`,
            options: [`A broad band at 3300 $\\text{cm}^{-1}$`, `A sharp band at 2250 $\\text{cm}^{-1}$`, `Two N-H spikes near 3400 $\\text{cm}^{-1}$`, `A pair of weak C-H bands near 2720 and 2850 $\\text{cm}^{-1}$`],
            correctAnswer: 3,
            explanation: `The aldehydic C-H stretch produces two characteristic weak bands (~2720 and ~2850), the lower one clear of other absorptions. Ketones have no C-H on the carbonyl carbon. 3300 broad = O-H; 2250 = nitrile; N-H spikes = amine/amide.`
          },
          {
            question: `A spectrum shows two sharp spikes of similar intensity at 3350 and 3420 $\\text{cm}^{-1}$ and no carbonyl band. This indicates:`,
            options: [`A primary amine`, `A secondary amine`, `A carboxylic acid`, `An alcohol`],
            correctAnswer: 0,
            explanation: `A primary amine's two N-H bonds give symmetric and asymmetric stretches — two spikes. A secondary amine (one N-H) gives a single band; an alcohol O-H is one broad rounded band; an acid would include a C=O.`
          },
          {
            question: `A compound shows a strong band at 1740 $\\text{cm}^{-1}$ and another strong band near 1200 $\\text{cm}^{-1}$, with no absorption above 3100 $\\text{cm}^{-1}$ other than C-H. It is most consistent with:`,
            options: [`A ketone`, `A carboxylic acid`, `An ester`, `An amide`],
            correctAnswer: 2,
            explanation: `Esters combine a C=O at the high end (1735-1750) with a strong C-O stretch (1000-1300). A ketone lacks the strong C-O band; an acid would show the broad O-H; an amide's C=O sits much lower (1630-1690).`
          },
          {
            question: `2-Butyne shows essentially no absorption in the 2100-2260 $\\text{cm}^{-1}$ region even though it contains a triple bond, because:`,
            options: [`Triple bonds do not absorb IR radiation`, `The symmetric alkyne stretch causes no change in dipole moment`, `The band is hidden under the C=O stretch`, `The triple bond is too strong to vibrate`],
            correctAnswer: 1,
            explanation: `IR absorption requires a changing dipole. In a symmetric internal alkyne (CH3-C≡C-CH3) the stretch is symmetric about the bond's center, so the dipole change is essentially zero and the band vanishes. Terminal alkynes DO show C≡C plus the sharp ≡C-H at 3300.`
          }
        ]
      }
    },
    {
      id: 'spect1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- IR needs a dipole change; stiffer bonds and lighter atoms absorb at higher wavenumbers; below 1500 = fingerprint, don't interpret
- Anchor bands: broad O-H 3200-3550 (acid version smears 2500-3300), N-H spikes (1° two, 2° one), sp3 C-H below 3000 vs sp2 above, nitrile 2250, C=O ~1700-1750 strong
- Carbonyl ladder: acyl chloride 1800 > anhydride (two bands) > ester 1740 > aldehyde ~1725 > ketone 1715 ≈ acid 1710 > amide 1650-1690
- Conjugation lowers C=O ~20-30 $\\text{cm}^{-1}$; ring strain raises it; aldehyde flag = weak 2720/2850 doublet
- Symmetric bonds (internal alkynes) can be IR-invisible`
    },
    {
      id: 'spect1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — IR Interpretation

<details>
<summary><b>Example 1: Identify an unknown C4H8O</b></summary>

**Question:** A compound C4H8O shows: sp3 C-H at 2900, strong sharp 1715, no bands above 3000, nothing at 2720. Identify it.

**Solution:**
1. Degrees of unsaturation: $(2 \\times 4 + 2 - 8)/2 = 1$ → one ring OR one double bond
2. Strong 1715 → C=O accounts for the one degree of unsaturation
3. No broad O-H → not an alcohol/acid; no 2720/2850 pair → not an aldehyde
4. A C4 carbonyl that is not an aldehyde: **2-butanone** (butanal would show the aldehyde C-H doublet)

**MCAT Strategy:** Always spend the degrees of unsaturation first — if C=O uses the only degree, there is no ring and no alkene, which collapses the candidate list fast.
</details>

<details>
<summary><b>Example 2: Alcohol vs carboxylic acid O-H</b></summary>

**Question:** Two unknowns both show broad O-H stretches. Spectrum A: broad band centered near 3350, no carbonyl. Spectrum B: extremely broad absorption from 2500-3300 riding over the C-H peaks, strong 1705. Assign them.

**Solution:**
1. A: broad, rounded, 3200-3550, no C=O → **alcohol**
2. B: the O-H of a carboxylic acid is broadened dramatically by strong hydrogen-bonded **dimer** formation, dragging it down across the C-H region; paired with C=O near 1710 → **carboxylic acid**
3. The dimer's paired hydrogen bonds are why acid O-H looks so different from alcohol O-H

**MCAT Strategy:** Breadth + position of O-H tells you the class before you even look at the carbonyl region. Acid = the only group whose O-H swallows the C-H stretches.
</details>

<details>
<summary><b>Example 3: Amide vs amine + ketone</b></summary>

**Question:** How do you distinguish propanamide from a mixture of a primary amine and a ketone using IR positions alone?

**Solution:**
1. Both show N-H stretches (~3300-3500) and a C=O
2. The KEY is the carbonyl position: an amide C=O is unusually LOW (1630-1690) because the nitrogen lone pair donates into the carbonyl (resonance → partial single bond)
3. A simple ketone sits near 1715 — outside the amide range
4. C=O at 1660 + N-H spikes → **amide**; C=O at 1715 + separate N-H → amine plus ketone

**MCAT Strategy:** The amide's low C=O frequency is the same resonance fact that makes peptide bonds planar and unreactive — one piece of physics, three exam contexts.
</details>

<details>
<summary><b>Example 4: Predict the spectrum before you see it</b></summary>

**Question:** List the diagnostic IR bands expected for methyl salicylate (an aromatic ring bearing an ester and a phenol O-H).

**Solution:**
1. Phenolic O-H: broad, 3200-3550 (intramolecular H-bonding to the ester carbonyl broadens/lowers it)
2. sp2 aromatic C-H just above 3000; sp3 C-H (the OCH3) just below 3000
3. Ester C=O near 1700-1735 (lowered from a normal ester by conjugation with the ring)
4. Strong C-O stretches 1100-1300; aromatic C=C ~1600

**MCAT Strategy:** Passage questions often run this in reverse — "which band confirms the product?" Answer with the band that CHANGES in the reaction (e.g., ester C=O appears, phenol O-H persists).
</details>`
    }
  ]
};
