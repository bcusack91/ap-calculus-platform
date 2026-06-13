export const oChemIRMSPart7Data = {
  topicSlug: 'infrared-mass-spectrometry',
  sections: [
    {
      id: 'infra7-intro',
      type: 'text' as const,
      content: `
## Synthesis & Review — The Complete Toolkit

**Part 7 of 7 — Bringing It All Together**

Across this suite we built a complete strategy for identifying an unknown organic compound from infrared and mass spectra. The central theme has been **complementarity**: mass spectrometry supplies the molecular mass, formula clues, and skeletal fragmentation, while infrared reveals the functional groups. Used together they constrain a structure far more tightly than either alone.

This final part consolidates everything into reference tables and a master strategy, then tests your integrated understanding with mixed problems.

**The one-paragraph summary.** Start with the mass spectrum: the **molecular ion** $\\text{M}^{+\\bullet}$ gives the molecular mass; the **nitrogen rule** (odd mass $\\rightarrow$ odd N) and **isotope peaks** (M+1 for carbon count, M+2 at $3:1$ for Cl or $1:1$ for Br) refine the formula. Convert the formula to **degrees of unsaturation**, $\\text{DoU} = (2c + 2 + n - h - x)/2$, to count rings and $\\pi$ bonds. Turn to the **infrared spectrum** to name functional groups — broad O–H near $3300$, N–H near $3400$, C–H straddling $3000$, triple bonds at $2100$–$2260$, and the loud carbonyl near $1700$. Finally, reconcile: functional groups must match the degrees of unsaturation, and fragment masses must match sensible cleavages.
      `
    },
    {
      id: 'infra7-irtable',
      type: 'text' as const,
      content: `
### Master Reference — IR Diagnostic Bands

| Band | Wavenumber ($\\text{cm}^{-1}$) | Appearance | Meaning |
|------|------------------------------|------------|---------|
| O–H (alcohol) | $3200$–$3550$ | strong, broad | alcohol / phenol |
| O–H (acid) | $2500$–$3300$ | very broad | carboxylic acid |
| N–H | $3300$–$3500$ | medium (may split) | amine / amide |
| C–H ($sp^2$/$sp$) | $> 3000$ | medium | alkene / aromatic / alkyne C–H |
| C–H ($sp^3$) | $< 3000$ | strong | alkyl |
| $\\equiv$C–H | $\\sim 3300$ | sharp | terminal alkyne |
| C$\\equiv$N | $\\sim 2250$ | sharp | nitrile |
| C$\\equiv$C | $\\sim 2100$–$2260$ | weak | alkyne |
| C=O | $\\sim 1700$ | strong, sharp | carbonyl (all kinds) |
| C=C | $\\sim 1650$ | medium | alkene / aromatic |

**Carbonyl sub-positions** (a finer cut of the $\\sim 1700\\ \\text{cm}^{-1}$ band): anhydrides $\\sim 1760 + 1820$ (two bands), esters $\\sim 1735$, aldehydes $\\sim 1725$, ketones $\\sim 1715$, carboxylic acids $\\sim 1710$, amides $\\sim 1650$ (lowest). Conjugation with a C=C or aromatic ring **lowers** a carbonyl by $20$–$40\\ \\text{cm}^{-1}$.
      `
    },
    {
      id: 'infra7-mstable',
      type: 'text' as const,
      content: `
### Master Reference — MS Clues

**Isotope patterns (M / M+2):**
| Pattern | Heteroatom |
|---------|-----------|
| $\\sim 3 : 1$ | one Cl |
| $\\sim 1 : 1$ | one Br |
| M+1 $\\approx n \\times 1.1\\%$ | $n$ carbons |

**Common neutral losses (from $\\text{M}^{+\\bullet}$):**
| Loss | Neutral | Implies |
|------|---------|---------|
| 15 | $\\text{CH}_3$ | methyl branch |
| 17 / 18 | $\\text{OH}$ / $\\text{H}_2\\text{O}$ | alcohol, acid |
| 28 / 29 | $\\text{CO}$ / $\\text{CHO}$ | carbonyl, aldehyde |
| 31 | $\\text{OCH}_3$ | methyl ester/ether |
| 45 | $\\text{COOH}$ | carboxylic acid |

**Diagnostic fragment ions:**
| $m/z$ | Ion | Implies |
|-------|-----|---------|
| 30 | $\\text{CH}_2=\\text{NH}_2^+$ | primary amine |
| 43 | $\\text{CH}_3\\text{CO}^+$ / $\\text{C}_3\\text{H}_7^+$ | methyl ketone / propyl |
| 77 | $\\text{C}_6\\text{H}_5^+$ | monosubstituted benzene |
| 91 | $\\text{C}_7\\text{H}_7^+$ (tropylium) | benzylic carbon |

**Two rules to never forget:** the **nitrogen rule** (odd molecular mass $\\Rightarrow$ odd number of N atoms) and the **McLafferty rearrangement** ($\\gamma$-H bearing carbonyls lose a neutral alkene to give an even-mass enol cation).
      `
    },
    {
      id: 'infra7-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Mixed Review — Integrate the Techniques
      `,
      exercise: {
        questions: [
          {
            question: 'A carbonyl band appears at $1685\\ \\text{cm}^{-1}$ rather than the typical $1715\\ \\text{cm}^{-1}$ for a ketone. What structural feature best explains the lowered frequency?',
            options: [
              'The carbonyl is conjugated with a C=C or aromatic ring',
              'The molecule contains chlorine',
              'The sample is a primary amine',
              'The carbonyl has become a triple bond'
            ],
            correctAnswer: 0,
            explanation: 'Conjugation delocalizes the C=O $\\pi$ system, giving the bond partial single-bond character, lowering its force constant and hence its wavenumber by roughly $20$–$40\\ \\text{cm}^{-1}$. A band at $1685$ is classic for an aryl or $\\alpha,\\beta$-unsaturated ketone. Halogens, amines, and bond-order changes are not the cause.'
          },
          {
            question: 'Which combination uniquely points to a terminal alkyne rather than an internal alkyne or a nitrile?',
            options: [
              'A band at $\\sim 2250$ only',
              'A broad band at $3300$ only',
              'A strong band at $1715$ only',
              'A band at $\\sim 2120$ PLUS a sharp band at $\\sim 3300\\ \\text{cm}^{-1}$ ($\\equiv$C–H)'
            ],
            correctAnswer: 3,
            explanation: 'A terminal alkyne shows the $\\text{C}\\equiv\\text{C}$ stretch near $2120$ AND a sharp $\\equiv$C–H stretch at $\\sim 3300$. A nitrile sits near $2250$ with no $\\equiv$C–H; an internal alkyne may show a weak/absent $\\text{C}\\equiv\\text{C}$ and no $\\equiv$C–H. The sharp (not broad) $3300$ band distinguishes it from an O–H.'
          },
          {
            question: 'An unknown has $\\text{M}^{+\\bullet} = 74$ (even), an M+1 of $\\sim 3.3\\%$, IR with a strong $1740\\ \\text{cm}^{-1}$ band and a strong C–O stretch near $1200$, and a fragment from loss of 31. Best classification?',
            options: [
              'A carboxylic acid',
              'A methyl ester (e.g. methyl acetate, $\\text{CH}_3\\text{COOCH}_3$)',
              'A primary amine',
              'An aromatic hydrocarbon'
            ],
            correctAnswer: 1,
            explanation: 'Even mass (no N); M+1 of $3.3\\% \\div 1.1\\% \\approx 3$ carbons; a carbonyl at the higher end ($1740$, typical of esters) plus a strong C–O; and loss of 31 ($\\text{OCH}_3$) all point to a methyl ester. Methyl acetate is $\\text{C}_3\\text{H}_6\\text{O}_2$ (mass 74). A carboxylic acid would show a very broad O–H and lose 17/45, not 31.'
          }
        ]
      }
    },
    {
      id: 'infra7-strategy',
      type: 'text' as const,
      content: `
### The Decision Tree, in Words

When a fresh problem lands on your desk, run this top-down checklist. It rarely fails.

1. **Is the molecular ion odd?** If yes, suspect one nitrogen (nitrogen rule). Note the mass.
2. **Is there an M+2?** $3:1$ $\\rightarrow$ Cl; $1:1$ $\\rightarrow$ Br. Subtract the halogen mass before doing anything else.
3. **How big is M+1?** Divide by $1.1\\%$ for a rough carbon count.
4. **Write a trial formula; compute degrees of unsaturation.** This is your budget of rings + $\\pi$ bonds.
5. **Scan IR above $3000$.** Broad $\\rightarrow$ O–H; medium (maybe split) $\\rightarrow$ N–H; sharp at $3300$ $\\rightarrow$ terminal alkyne; bands above $3000$ $\\rightarrow$ unsaturated C–H.
6. **Check $2100$–$2260$.** Triple bond? Nitrile (sharp, $\\sim 2250$) or alkyne (weak)?
7. **Check $\\sim 1700$.** A strong band is a carbonyl; read its exact position to subtype it; remember conjugation lowers it.
8. **Reconcile.** Do the functional groups use up the degrees of unsaturation? Do the MS losses (15, 17, 18, 28, 29, 31, 45) and signature fragments (30, 43, 77, 91) match the proposed structure?

If all eight steps agree, you have your compound. If they conflict, the *conflict itself* tells you which assumption to revisit — usually a misread isotope ratio or an overlooked degree of unsaturation.
      `
    },
    {
      id: 'infra7-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Final Checkpoint — Full Integration
      `,
      exercise: {
        questions: [
          {
            question: 'Unknown: $\\text{M}^{+\\bullet} = 107$ (odd). IR: medium bands $3350$–$3450$ (two), aromatic C–H above $3000$, no carbonyl. Fragment at $m/z = 106$ (loss of 1) and $m/z = 77$. Best structure?',
            options: [
              'Benzoic acid',
              'Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) — wait, check the mass',
              'Benzylamine ($\\text{C}_6\\text{H}_5\\text{CH}_2\\text{NH}_2$)',
              'Chlorobenzene'
            ],
            correctAnswer: 2,
            explanation: 'Odd mass 107 $\\Rightarrow$ one nitrogen. Two N–H stretches $\\Rightarrow$ a primary amine; aromatic C–H above $3000$ $\\Rightarrow$ a benzene ring; no carbonyl. $\\text{C}_7\\text{H}_9\\text{N}$ (mass 107) fits benzylamine; loss of H gives $m/z = 106$, and the phenyl/benzyl region gives $m/z = 77$. Aniline ($\\text{C}_6\\text{H}_5\\text{NH}_2$) is mass 93, not 107; benzoic acid lacks N–H and has a carbonyl; chlorobenzene would show a $3:1$ isotope pattern.'
          },
          {
            question: 'Why does combining IR and MS resolve far more structures than either technique used alone?',
            options: [
              'Because both measure the molecular mass independently for redundancy',
              'Because MS constrains the formula and skeleton while IR constrains the functional groups, and only structures satisfying BOTH sets of constraints survive',
              'Because IR can determine the exact mass to four decimals',
              'Because MS directly shows the functional groups'
            ],
            correctAnswer: 1,
            explanation: 'The techniques are complementary, not redundant. MS pins down mass, formula clues, and fragmentation; IR pins down functional groups. A formula fits many isomers and a functional group fits many compounds, but the intersection of both constraint sets is usually a single structure. IR does not give exact mass (that is HRMS), and MS does not directly show functional groups.'
          }
        ]
      }
    },
    {
      id: 'infra7-closing',
      type: 'text' as const,
      content: `
### Where This Leads

You can now take a mass spectrum and an IR spectrum of an unknown and extract its molecular mass, a plausible molecular formula, its degrees of unsaturation, its functional groups, and key skeletal features from fragmentation. That is the backbone of structure determination.

The remaining piece is **connectivity** — exactly which atom is bonded to which — and that is the province of **NMR spectroscopy** ($^1$H and $^{13}$C), the subject of the next course. With IR, MS, and NMR in hand, you will be able to take a colorless oil in a flask and write its full structure with confidence.

**Carry these forward:**
- Mass first ($\\text{M}^{+\\bullet}$), then formula (nitrogen rule, isotopes), then degrees of unsaturation.
- IR names functional groups; shape and exact position matter as much as the nominal wavenumber.
- Fragmentation reveals weak points; learn the common losses and signature ions.
- Always **reconcile** the two techniques into a single, self-consistent structure.
      `
    }
  ]
}
