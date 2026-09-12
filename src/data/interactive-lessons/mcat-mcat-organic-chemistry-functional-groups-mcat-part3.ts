export const mcatOchemFunctionalGroupsPart3Data = {
  topicSlug: 'mcat-organic-chemistry-functional-groups-mcat',
  sections: [
    {
      id: 'fgrp3-intro',
      type: 'text' as const,
      content: `# Functional Groups for the MCAT

**Part 3 of 4 — Acidity, Basicity & Electronic Effects**

Every acidity/basicity comparison on the MCAT is decided the same way: **the more stable the conjugate base, the stronger the acid**. Four stabilizing effects, in rough order of power:

1. **Element** (which atom holds the charge): across a row, more electronegative = more stable ($CH_4 < NH_3 < H_2O < HF$); down a column, LARGER wins ($H_2O < H_2S$; HF < HCl < HBr < HI) because charge spreads over a bigger orbital
2. **Resonance**: delocalized charge is stabilized charge — the biggest single effect
3. **Induction**: nearby electronegative atoms pull charge through sigma bonds; falls off sharply with distance
4. **Hybridization/orbital**: more s-character holds electrons closer (sp C-H of alkynes, pKa ~25, is acidic for a hydrocarbon)

### The pKa Ladder to Memorize

| Acid | pKa |
|------|-----|
| Strong acids (HCl, $H_2SO_4$) | < 0 |
| Hydronium | -1.7 |
| Carboxylic acids | **4-5** |
| Carbonic acid | 6.3 |
| Ammonium ions ($RNH_3^+$) | **9-11** |
| Phenol | **10** |
| Thiols | 8-10 |
| Water | 15.7 |
| Alcohols | 16-18 |
| Alpha C-H of carbonyls | ~20 |
| Terminal alkynes | 25 |
| Amines (N-H) | ~36 |
| Alkanes | ~50 |

Why the three stars: **carboxylic acid** beats **phenol** beats **alcohol** — carboxylate charge is shared equally by two oxygens; phenoxide charge is delocalized into the ring but mostly onto carbons; alkoxide charge is stuck on one oxygen.

### Substituent Tuning

- Electron-withdrawing groups (Cl, $NO_2$, F) **increase acidity**: trichloroacetic acid pKa 0.7 vs acetic 4.8; effect shrinks with distance from the acidic site
- Electron-donating groups (alkyl, $OCH_3$ by resonance) decrease acidity

### Basicity: the Mirror Image

Base strength tracks **lone pair availability**:

- **Amide nitrogen is NOT basic** — the lone pair is delocalized into the C=O
- **Aniline** is a weak base (~million-fold weaker than alkylamines): the lone pair leaks into the ring
- **Alkylamines** are the strong organic bases (conjugate acid pKa 10-11)
- **Pyridine**: sp2 lone pair in the plane, NOT part of the aromatic pi system → basic (conj. acid pKa 5.2). **Pyrrole**: the lone pair IS the aromatic sextet → protonation destroys aromaticity → essentially non-basic. This pair explains histidine (imidazole has one pyridine-like N, pKa ~6 — the physiological buffer nitrogen) and the DNA bases

### Henderson-Hasselbalch in One Line

$$pH = pK_a + \\log\\frac{[A^-]}{[HA]}$$

Below the pKa the protonated form dominates; above it, the deprotonated form. At physiological pH 7.4: carboxylic acids are **deprotonated** (anionic), amines are **protonated** (cationic) — amino acids are zwitterions.`
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
            explanation: `pKa's: ethane ~50, ethanol ~16, phenol 10, acetic acid 4.8. The order is set by conjugate-base stabilization: carbanion (none) < alkoxide (localized on O) < phenoxide (ring resonance) < carboxylate (two equivalent oxygens). Increasing acidity = decreasing pKa.`
          },
          {
            question: `Trifluoroacetic acid (pKa 0.2) is about 30,000 times more acidic than acetic acid (pKa 4.8) because:`,
            options: [`Fluorine donates electrons by resonance`, `The three fluorines withdraw electron density inductively, stabilizing the carboxylate's negative charge`, `The C-F bonds ionize in water`, `Trifluoroacetate is aromatic`],
            correctAnswer: 1,
            explanation: `Induction: highly electronegative fluorines pull density through the sigma framework, dispersing the conjugate base's charge. Fluorine's lone-pair donation is negligible here (no pi system adjacent to F), and the effect would fade if the fluorines were moved farther from the carboxylate — the distance dependence is a favorite follow-up question.`
          },
          {
            question: `The nitrogen of acetamide is far less basic than the nitrogen of ethylamine because:`,
            options: [`Acetamide's nitrogen is more electronegative`, `Acetamide is sterically blocked`, `The amide lone pair is delocalized into the carbonyl and is not available for protonation`, `Ethylamine's nitrogen is sp hybridized`],
            correctAnswer: 2,
            explanation: `Amide resonance ties up the nitrogen lone pair (the same delocalization that makes peptide bonds planar and hydrolysis slow). Protonating that nitrogen would cost the resonance energy, so amides protonate — weakly, and on oxygen — only in strong acid. Basicity = lone pair availability.`
          },
          {
            question: `Pyrrole's nitrogen is essentially non-basic while pyridine's nitrogen is a reasonable base. The key difference is that:`,
            options: [`Pyrrole's nitrogen lone pair is part of the aromatic sextet, so protonation would destroy aromaticity; pyridine's lone pair lies in the ring plane, outside the pi system`, `Pyridine has more nitrogen atoms`, `Pyrrole's nitrogen is sp3 hybridized`, `Pyridine is anti-aromatic`],
            correctAnswer: 0,
            explanation: `Pyrrole needs its N lone pair to complete the 6 pi-electron aromatic count — using it for a proton wrecks the ring's stability. Pyridine's sextet is complete without the lone pair, which points outward in an sp2 orbital, free to grab a proton (conjugate acid pKa 5.2). Apply the same test to histidine's imidazole and the nucleobases.`
          },
          {
            question: `At physiological pH 7.4, the side chain carboxyl of aspartate (pKa ~3.9) and the side chain amine of lysine (conjugate acid pKa ~10.5) exist predominantly as:`,
            options: [`Both neutral`, `Carboxyl protonated (neutral); amine deprotonated (neutral)`, `Carboxylate anion and ammonium cation, respectively`, `Both positively charged`],
            correctAnswer: 2,
            explanation: `Henderson-Hasselbalch: pH 7.4 is ~3.5 units ABOVE aspartate's pKa (deprotonated, -1 charge) and ~3 units BELOW lysine's conjugate-acid pKa (protonated, +1 charge). Rule: pH above pKa = deprotonated form dominates, each unit of separation is a factor of ten.`
          }
        ]
      }
    },
    {
      id: 'fgrp3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Acidity = conjugate-base stability: element (row → electronegativity, column → size), resonance (strongest), induction (distance-sensitive), hybridization (s-character)
- pKa anchors: carboxylic acid 4-5 < carbonic 6.3 < thiol/ammonium/phenol 8-11 < water 15.7 < alcohol 16-18 < alpha C-H 20 < alkyne 25 < amine N-H 36 < alkane 50
- Acid > phenol > alcohol because carboxylate (2 O's) > phenoxide (ring C's) > alkoxide (1 O) in charge delocalization; EWGs raise acidity, EDGs lower it
- Basicity = lone pair availability: alkylamine > aniline >> amide (~non-basic); pyridine-type N basic, pyrrole-type N locked in the aromatic sextet
- Henderson-Hasselbalch: pH above pKa → deprotonated; at pH 7.4 acids are anions, amines are cations (zwitterionic amino acids)`
    },
    {
      id: 'fgrp3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Acid-Base Reasoning

<details>
<summary><b>Example 1: Which proton comes off first?</b></summary>

**Question:** One equivalent of NaOH is added to a molecule containing a phenol OH, an alcohol OH, and a carboxylic acid COOH. What deprotonates?

**Solution:**
1. Rank acidities: COOH (pKa ~4.5) > phenol (10) > alcohol (17)
2. Hydroxide (conjugate acid pKa 15.7) could deprotonate either the acid or the phenol, but with ONE equivalent, the thermodynamically most acidic proton is removed first
3. Product: the carboxylate, with phenol and alcohol intact
4. A second equivalent would take the phenol; the alcohol survives NaOH almost entirely (pKa above water's)

**MCAT Strategy:** "One equivalent" questions are pKa-ordering questions. Titrate protons off in strict pKa order, lowest first.
</details>

<details>
<summary><b>Example 2: Ranking substituted acids</b></summary>

**Question:** Rank the acidity of butanoic acid, 2-chlorobutanoic acid, 4-chlorobutanoic acid, and 2,2-dichlorobutanoic acid.

**Solution:**
1. All are carboxylic acids — induction is the tiebreaker
2. More EWGs = more acidic: 2,2-dichloro > 2-chloro
3. Distance matters: chlorine at C2 (alpha) stabilizes the carboxylate far more than at C4 — 2-chloro > 4-chloro
4. Final order: **2,2-dichloro > 2-chloro > 4-chloro > parent**

**MCAT Strategy:** Two dials for induction problems: count the withdrawing groups, then measure their distance. A closer single Cl can beat a distant pair — check both before answering.
</details>

<details>
<summary><b>Example 3: Histidine as the physiological buffer</b></summary>

**Question:** Histidine's imidazole side chain has pKa ~6.0. Explain which of its two ring nitrogens is protonated at low pH, and why imidazole (not lysine or aspartate) serves in enzyme active sites needing both acid and base catalysis at pH 7.4.

**Solution:**
1. Imidazole has a pyrrole-type N (lone pair in the aromatic sextet — never protonates) and a pyridine-type N (in-plane lone pair — the basic site)
2. pKa 6.0 sits within ~1.4 units of physiological pH → BOTH the protonated (acid) and neutral (base) forms are present in meaningful amounts ($\\approx$ 4% protonated at pH 7.4, more in local microenvironments)
3. Lysine (pKa 10.5) is locked protonated and aspartate (3.9) locked deprotonated at pH 7.4 — each can play only one role
4. Hence catalytic triads (e.g., serine proteases) use His as the proton shuttle

**MCAT Strategy:** "Effective buffer/proton shuttle at pH X" = side chain with pKa within ~1 unit of X. Only histidine qualifies near neutrality.
</details>

<details>
<summary><b>Example 4: Predicting extraction behavior from pKa</b></summary>

**Question:** At pH 7.4 blood, a drug with a carboxylic acid group (pKa 4) and a drug with an amine (conjugate acid pKa 9) must cross lipid membranes. Which form crosses, and what fraction is available for each?

**Solution:**
1. Membranes admit the NEUTRAL form; ions stay in water
2. Acid drug: pH is 3.4 units above pKa → ratio deprotonated:protonated = $10^{3.4}$ ≈ 2500:1 → only ~0.04% is the neutral, absorbable HA form
3. Amine drug: pH is 1.6 units below the conjugate acid's pKa → mostly protonated (ammonium), with ~2-3% neutral free base available to cross
4. Absorption sites matter: the acidic stomach (pH ~2) leaves the acid drug neutral — weak acids absorb from the stomach, weak bases from the intestine

**MCAT Strategy:** Every pharmacokinetics passage is Henderson-Hasselbalch: compute pH minus pKa, convert to a power of ten, and remember only neutrals cross membranes.
</details>`
    }
  ]
};
