export const mcatOrgChemPart7Data = {
  topicSlug: 'mcat-organic-chemistry-mcat',
  sections: [
    {
      id: 'oc7-intro',
      type: 'text' as const,
      content: `# Organic Chemistry for the MCAT

**Part 7 of 7 — Review & MCAT Strategy**

### Highest-Yield MCAT Organic Topics

1. **SN1/SN2/E1/E2** — almost guaranteed
2. **Functional group recognition** — in every passage
3. **Amino acid chemistry** — bridges to biochemistry
4. **Carbonyl chemistry** — reduction/oxidation
5. **Stereochemistry** — R/S, enantiomers vs diastereomers
6. **Lab techniques** — separation and purification

### Amino Acid Side Chain Chemistry (bridges to Biochem)

| Property | Amino acids |
|----------|-------------|
| Nonpolar | Gly, Ala, Val, Leu, Ile, Pro, Phe, Trp, Met |
| Polar uncharged | Ser, Thr, Cys, Tyr, Asn, Gln |
| Positive (basic) | Lys, Arg, His |
| Negative (acidic) | Asp, Glu |

### Test-Day Organic Workflow

1. Identify the functional group(s) first.
2. Decide mechanism class (substitution, elimination, addition, acyl substitution).
3. Check stereochemical consequence (inversion, racemization, retention).
4. Use reagent strength and solvent to resolve competing pathways.`
    },
    {
      id: 'oc7-worked',
      type: 'text' as const,
      content: `### Worked Example — Predicting an Amino Acid's Charge at a Given pH

**Scenario:** A passage asks for the net charge on the side chain of **lysine** (side-chain p$K_a \\approx 10.5$) in blood at **pH 7.4**, and how that compares with **glutamate** (side-chain p$K_a \\approx 4.1$).

**Step 1 — Recall the rule.** Compare the solution pH to each ionizable group's p$K_a$:
- If pH < p$K_a$, the group is mostly **protonated**.
- If pH > p$K_a$, the group is mostly **deprotonated**.

**Step 2 — Apply it to lysine.** The lysine side chain is a basic amine. At pH 7.4 < p$K_a$ 10.5, it is **protonated** as $-\\text{NH}_3^+$, so it carries a **+1** charge.

**Step 3 — Apply it to glutamate.** The glutamate side chain is a carboxylic acid. At pH 7.4 > p$K_a$ 4.1, it is **deprotonated** as $-\\text{COO}^-$, so it carries a **–1** charge.

**Step 4 — Connect to function.** At physiological pH, basic residues (Lys, Arg) tend to be positive and acidic residues (Asp, Glu) negative; these opposite charges form salt bridges that stabilize protein structure and mediate substrate binding — a recurring biochemistry link.

> **MCAT takeaway:** Charge follows the pH-vs-p$K_a$ comparison. Below p$K_a$ → protonated; above p$K_a$ → deprotonated. At pH 7.4, Lys/Arg are typically +1, Asp/Glu are –1, and His (p$K_a \\approx 6$) sits near the transition, which is why it is a flexible catalytic residue.`
    },
    {
      id: 'oc7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Final Review** 🎯`,
      exercise: {
        questions: [
          {
            question: `An amino acid at pH 7 has a positively charged side chain. It is most likely:`,
            options: [`Lysine (pKa of side chain ~10.5)`, `Aspartate`, `Serine`, `Alanine`],
            correctAnswer: 0,
            explanation: `At pH 7, Lys side chain ($-NH_3^+$, pKa ~10.5) is protonated and positive. Arg (pKa ~12.5) and His (pKa ~6.0) are the other basic residues. His may or may not be protonated at pH 7.`
          },
          {
            question: `A passage describes a molecule with a chiral center that rotates plane-polarized light +15°. Its enantiomer rotates light:`,
            options: [`$-15°$ (equal and opposite)`, `$+15°$`, `$0°$`, `$+30°$`],
            correctAnswer: 0,
            explanation: `Enantiomers rotate plane-polarized light by equal magnitude but opposite direction. If one is +15°, the other must be -15°.`
          },
          {
            question: `A tertiary alkyl bromide in methanol under heat is most likely to undergo:`,
            options: [`SN2`, `SN1/E1 competition`, `E2 only`, `No reaction`],
            correctAnswer: 1,
            explanation: `Tertiary substrate blocks SN2. Protic solvent and heat often give carbocation pathways with SN1/E1 competition.`
          },
          {
            question: `Which reagent pair most often indicates oxidation of a secondary alcohol to a ketone?`,
            options: [`PCC or Jones reagent`, `LiAlH$_4$`, `NaBH$_4$`, `NaOH/heat`],
            correctAnswer: 0,
            explanation: `PCC and Jones are oxidizing reagents. Secondary alcohols are oxidized to ketones by either reagent.`
          },
          {
            question: `At physiological pH 7.4, the side chain of glutamate (side-chain p$K_a \\approx 4.1$) is best described as:`,
            options: [`Deprotonated and negatively charged ($-\\text{COO}^-$)`, `Protonated and positively charged`, `Neutral and nonpolar`, `Aromatic`],
            correctAnswer: 0,
            explanation: `Because pH 7.4 is well above the side-chain p$K_a$ of ~4.1, the carboxylic acid is deprotonated to a carboxylate, giving glutamate a –1 charge at physiological pH. This is why Asp and Glu are the acidic, negatively charged residues.`
          },
          {
            question: `A peptide bond linking two amino acids is chemically classified as which functional group, and why is it resistant to hydrolysis?`,
            options: [`An amide; nitrogen lone-pair resonance lowers carbonyl reactivity and $\\text{NH}^-$ is a poor leaving group`, `An ester; oxygen makes it labile`, `An ether; it has no carbonyl`, `An anhydride; it has an excellent leaving group`],
            correctAnswer: 0,
            explanation: `The peptide bond is an amide ($-\\text{CO-NH}-$). Amide resonance gives partial C–N double-bond character (reducing electrophilicity) and the would-be leaving group is a strongly basic amide anion, so peptide bonds are kinetically very stable and require enzymes (proteases) for efficient hydrolysis in the body.`
          }
        ]
      }
    },
    {
      id: 'oc7-summary',
      type: 'text' as const,
      content: `### Organic Chemistry — Complete! ✅

Master the reaction decision chart, functional groups, and stereochemistry. These connect directly to amino acid and enzyme chemistry in Biochemistry.

The strongest MCAT performance comes from mechanism-first thinking, not memorizing isolated reactions.`
    }
  ]
};
