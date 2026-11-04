export const mcatOchemFunctionalGroupsPart3Data = {
  topicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  sections: [
    {
      id: 'fgrp3-intro',
      type: 'text' as const,
      content: `# Functional Groups for the MCAT

**Part 3 of 4 — Acidity, Basicity & Electronic Effects**

**The more stable the conjugate base, the stronger the acid.** Four stabilizing effects, in rough order of power:

1. **Element**: across a row, more electronegative = more stable ($CH_4 < NH_3 < H_2O < HF$); down a column, LARGER wins ($H_2O < H_2S$; HF < HCl < HBr < HI) — charge spreads over a bigger orbital
2. **Resonance**: delocalized charge is stabilized charge — when both charges sit on the same element (two O-acids), resonance usually decides
3. **Induction**: nearby electronegative atoms pull charge through sigma bonds; falls off sharply with distance
4. **Hybridization**: more s-character holds electrons closer (a terminal alkyne's sp C-H, pKa ~25, is acidic for a hydrocarbon)

### The pKa Ladder to Memorize

| Acid | pKa |
|------|-----|
| Strong acids (HCl, $H_2SO_4$) | < 0 |
| Hydronium | -1.7 |
| Carboxylic acids | **4-5** |
| Carbonic acid | 6.3 |
| Thiols | 8-10 |
| Ammonium ions ($RNH_3^+$) | **9-11** |
| Phenol | **10** |
| Water | 15.7 |
| Alcohols | **16-18** |
| Alpha C-H of carbonyls | ~20 |
| Terminal alkynes | 25 |
| Amines (N-H) | ~36 |
| Alkanes | ~50 |

Why acid > phenol > alcohol: **carboxylic acid** beats **phenol** beats **alcohol** — carboxylate charge is shared equally by two oxygens; phenoxide charge is delocalized into the ring but mostly onto carbons; alkoxide charge is stuck on one oxygen.

### Substituent Tuning

- Electron-withdrawing groups (Cl, $NO_2$, F) **increase acidity**: trichloroacetic acid pKa 0.7 vs acetic 4.8; effect shrinks with distance from the acidic site
- Electron-donating groups (alkyl, $OCH_3$ by resonance) decrease acidity

### Basicity: the Mirror Image

Base strength tracks **lone pair availability**:

- **Amide nitrogen is NOT basic** — the lone pair is delocalized into the C=O
- **Alkylamines** are the strong organic bases (conjugate acid pKa 10-11); **aniline** is ~a million-fold weaker because its lone pair leaks into the ring
- **Pyridine**: sp2 lone pair in the plane, NOT part of the aromatic pi system → basic (conj. acid pKa 5.2). **Pyrrole**: the lone pair IS the aromatic sextet → protonation destroys aromaticity → essentially non-basic
- This pair explains histidine (imidazole has one pyridine-like N, pKa ~6 — the physiological buffer nitrogen) and the DNA bases

### Henderson-Hasselbalch in One Line

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

Below the pKa the protonated form dominates; above it, the deprotonated form. At physiological pH 7.4: carboxylic acids are **deprotonated** (anionic), amines are **protonated** (cationic) — amino acids are zwitterions.`
    },
    {
      id: 'fgrp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Acid-Base Reasoning

**Problem 1.** Rank the acidity of butanoic acid, 2-chlorobutanoic acid, 4-chlorobutanoic acid and 2,2-dichlorobutanoic acid.

- **(a)** Which effect decides the order?
- **(b)** How does the number of chlorines matter?
- **(c)** How does the chlorine's position matter?
- **(d)** What is the final order?

**(a) Induction.** All four are carboxylic acids, so induction is the tiebreaker.

**(b) Count.** More electron-withdrawing groups = more acidic: 2,2-dichloro > 2-chloro.

**(c) Distance.** Chlorine at C2 (alpha) stabilizes the carboxylate far more than at C4: 2-chloro > 4-chloro.

**(d) Final order.** **2,2-dichloro > 2-chloro > 4-chloro > parent.** A closer single Cl can beat a distant pair (e.g., 2-chloro beats 4,4-dichloro), so check both dials, count and distance, before answering.

**Problem 2.** In blood at pH 7.4, an acidic drug (a carboxylic acid, pKa 4) and a basic drug (an amine, conjugate acid pKa 9) must cross lipid membranes.

- **(a)** Which form of a drug crosses a membrane?
- **(b)** What fraction of the acidic drug is in that form?
- **(c)** What fraction of the basic drug is in that form?
- **(d)** Where in the gut does each kind of drug absorb best?

**(a) The neutral form.** Membranes admit the NEUTRAL form; ions stay in water.

**(b) Acid drug.** pH is 3.4 units above the pKa, so deprotonated:protonated = $10^{3.4}$ ≈ 2500:1, and only ~0.04% is the neutral, absorbable HA form.

**(c) Amine drug.** pH is 1.6 units below the conjugate acid's pKa, so the drug is mostly protonated (ammonium), with ~2-3% neutral free base available to cross.

**(d) Absorption sites.** The acidic stomach (pH ~2) leaves the acid drug neutral, so weak acids absorb from the stomach and weak bases from the intestine. Every pharmacokinetics passage is Henderson-Hasselbalch: compute pH minus pKa, then convert to a power of ten.

**Problem 3.** One equivalent of NaOH is added to a molecule bearing a phenol OH, an alcohol OH and a carboxylic acid COOH.

- **(a)** How do the three protons rank in acidity?
- **(b)** Which proton does the one equivalent of hydroxide remove?
- **(c)** What would a second equivalent remove, and does the alcohol react?

**(a) Ranking.** COOH (pKa ~4.5) > phenol (10) > alcohol (17).

**(b) First equivalent.** Hydroxide (conjugate acid pKa 15.7) could deprotonate either the acid or the phenol, but with ONE equivalent the most acidic proton is removed first. Product: the carboxylate, with phenol and alcohol intact.

**(c) Second equivalent.** It takes the phenol. The alcohol survives NaOH almost entirely, because its pKa is above water's. "One equivalent" questions are pKa-ordering questions: protons come off in strict pKa order, lowest first.

**Problem 4.** Histidine's imidazole side chain has pKa ~6.0, and enzymes needing both acid and base catalysis at pH 7.4 use it.

- **(a)** Which of its two ring nitrogens is protonated at low pH?
- **(b)** How much of the imidazole is protonated at pH 7.4?
- **(c)** Why can't lysine or aspartate play the same role?

**(a) The basic N.** Imidazole has a pyrrole-type N (lone pair in the aromatic sextet, never protonated) and a pyridine-type N (in-plane lone pair), which is the basic site.

**(b) Both forms present.** pH 7.4 is 1.4 units above the pKa, so the protonated fraction is $1/(1 + 10^{1.4}) \\approx 0.04$: about 4% (more in local microenvironments). Both the acid and the base form are present in meaningful amounts.

**(c) Lysine and aspartate.** Lysine (pKa 10.5) is locked protonated and aspartate (3.9) locked deprotonated at pH 7.4, so each can play only one role. Hence catalytic triads (e.g., serine proteases) use His as the proton shuttle: only it has a pKa within ~1 unit of neutral.`
    },
    {
      id: 'fgrp3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Acidity & Basicity** 🎯`,
      exercise: {
        questions: [
          {
            question: `Rank in order of increasing acidity: ethanol, phenol, acetic acid, ethane.`,
            options: [`Acetic acid < phenol < ethanol < ethane`, `Phenol < acetic acid < ethane < ethanol`, `Ethanol < ethane < phenol < acetic acid`, `Ethane < ethanol < phenol < acetic acid`],
            correctAnswer: 3,
            yield: 'ULTRA_HIGH',
            explanation: `pKa's: ethane ~50, ethanol ~16, phenol 10, acetic acid 4.8. The order is set by conjugate-base stabilization: carbanion (none) < alkoxide (localized on O) < phenoxide (ring resonance) < carboxylate (two equivalent oxygens). Increasing acidity = decreasing pKa.`
          },
          {
            question: `Trifluoroacetic acid (pKa 0.2) is about 40,000 times more acidic than acetic acid (pKa 4.8) because:`,
            options: [`Fluorine donates lone-pair density by resonance`, `The fluorines withdraw electron density inductively`, `The C-F bonds are weaker than the C-H bonds they replace`, `Trifluoroacetate is stabilized by aromaticity`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Induction: highly electronegative fluorines pull density through the sigma framework, dispersing the conjugate base's negative charge and stabilizing the carboxylate. Fluorine's lone-pair donation is negligible here (no pi system adjacent to F) and would destabilize the anion anyway, and the effect would fade if the fluorines were moved farther from the carboxylate — the distance dependence is a favorite follow-up question. C-F bonds are in fact stronger than C-H bonds and are not the bonds that ionize, and trifluoroacetate has no ring, so aromaticity cannot apply.`
          },
          {
            question: `The nitrogen of acetamide is far less basic than the nitrogen of ethylamine because:`,
            options: [`Acetamide's nitrogen is more electronegative`, `The acetyl group sterically blocks the nitrogen`, `The nitrogen lone pair is delocalized into the C=O`, `Ethylamine's lone pair is in an sp orbital`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Amide resonance ties up the nitrogen lone pair (the same delocalization that makes peptide bonds planar and hydrolysis slow), so it is not available for protonation. Protonating that nitrogen would cost the resonance energy, so amides protonate — weakly, and on oxygen — only in strong acid. Basicity = lone pair availability. Any change in nitrogen's effective electronegativity is minor next to the resonance that ties up the lone pair, an acetyl group is too small to block protonation, and ethylamine's nitrogen is sp3 (an sp lone pair would make it LESS basic, not more).`
          },
          {
            question: `Pyrrole's nitrogen is essentially non-basic while pyridine's nitrogen is a reasonable base. The key difference is that:`,
            options: [`Pyrrole's lone pair is part of its aromatic sextet`, `Pyridine's lone pair sits in a p orbital perpendicular to the ring`, `Pyrrole's lone pair is held in an sp3 hybrid orbital`, `Pyrrole's lone pair is sterically shielded by ring H atoms`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Pyrrole needs its N lone pair to complete the 6 pi-electron aromatic count — using it for a proton would destroy aromaticity and wreck the ring's stability. Pyridine's sextet is complete without the lone pair, which points outward in an sp2 orbital in the ring plane, free to grab a proton (conjugate acid pKa 5.2) — not in a p orbital perpendicular to the ring. Pyrrole's nitrogen is sp2 with its lone pair in a p orbital (an sp3 lone pair would be basic, as in an amine), and a flat five-membered ring offers no steric shield. Apply the same test to histidine's imidazole and the nucleobases.`
          },
          {
            question: `At physiological pH 7.4, the side chain carboxyl of aspartate (pKa ~3.9) and the side chain amine of lysine (conjugate acid pKa ~10.5) exist predominantly as:`,
            options: [`Aspartate: neutral COOH; lysine: neutral NH2`, `Aspartate: neutral COOH; lysine: NH3+ cation`, `Aspartate: COO- anion; lysine: NH3+ cation`, `Aspartate: COO- anion; lysine: neutral NH2`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Henderson-Hasselbalch: pH 7.4 is ~3.5 units ABOVE aspartate's pKa (deprotonated, -1 charge) and ~3 units BELOW lysine's conjugate-acid pKa (protonated, +1 charge). Rule: pH above pKa = deprotonated form dominates, each unit of separation is a factor of ten.`
          }
        ]
      }
    },
    {
      id: 'fgrp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Stable base, strong acid.** Conjugate-base stability decides acidity: element, resonance, induction, then hybridization.
- **Know the pKa anchors.** Carboxylic acid 4-5, ammonium 9-11, phenol 10, water 15.7, alcohol 16-18, terminal alkyne 25.
- **Basicity is lone-pair availability.** Alkylamine > pyridine > aniline >> amide ≈ pyrrole; a tied-up lone pair is not basic.
- **pH vs pKa sets the form.** Above the pKa the deprotonated form dominates; at pH 7.4 acids are anions, amines cations.

**Common traps**

- **Ignoring distance in induction.** Withdrawing groups weaken fast with distance, so 2-chloro beats 4-chloro butanoic acid.
- **Calling amide N basic.** The amide lone pair is delocalized into the C=O; amides protonate weakly, on O, only in strong acid.
- **Protonating pyrrole's N.** Pyrrole's lone pair completes its aromatic sextet; pyridine's in-plane sp2 lone pair is the basic one.
- **Ions crossing membranes.** Only the neutral form crosses, so weak acids absorb in the stomach and weak bases in the intestine.`
    }
  ]
};
