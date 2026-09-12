export const mcatAminoAcidsPart3Data = {
  topicSlug: 'mcat-biochemistry-amino-acids-proteins-mcat',
  sections: [
    {
      id: 'aa3-intro',
      type: 'text' as const,
      content: `# Amino Acids & Proteins

**Part 3 of 4 — Protein Structure, Folding & Denaturation**

### The Peptide Bond

Peptide bonds form by **condensation (dehydration)** between one residue's carboxyl and the next residue's amino group, releasing water. Key properties:

- **Partial double-bond character** from resonance → the bond is planar and rigid; rotation occurs only around the flanking $\\phi$ and $\\psi$ backbone bonds.
- Almost always **trans** configuration (side chains on opposite sides) to avoid steric clash; proline is the notable exception that tolerates cis.
- Hydrolysis is thermodynamically favorable but kinetically slow — proteases (and strong acid + heat) provide the catalysis.

### The Four Levels of Structure

| Level | Stabilized by | Description |
|-------|---------------|-------------|
| Primary (1°) | Peptide bonds (covalent) | Linear sequence, written N-terminus to C-terminus |
| Secondary (2°) | Backbone H-bonds only | $\\alpha$-helix (i to i+4 H-bonds), $\\beta$-sheets (parallel/antiparallel), turns |
| Tertiary (3°) | Side-chain interactions: hydrophobic effect, H-bonds, ionic bonds (salt bridges), disulfides, van der Waals | Overall 3D fold of ONE chain |
| Quaternary (4°) | Same noncovalent forces + disulfides | Assembly of MULTIPLE chains (e.g., hemoglobin $\\alpha_2\\beta_2$) |

### What Actually Drives Folding: The Hydrophobic Effect

Burying nonpolar side chains releases ordered water molecules from around them, **increasing the entropy of the solvent**. This entropy gain is the dominant thermodynamic driver of folding — more important than any individual H-bond. Folding is spontaneous for many small proteins (Anfinsen's ribonuclease experiment: sequence alone encodes the native fold), but large proteins in the crowded cell often need **chaperones** (e.g., heat shock proteins) to prevent aggregation, not to dictate the fold.

### Secondary Structure Details

- **$\\alpha$-helix:** right-handed; C=O of residue $i$ H-bonds to N-H of residue $i+4$; side chains point outward; ~3.6 residues per turn. Breakers: Pro (no N-H, rigid) and Gly (too flexible).
- **$\\beta$-sheet:** extended strands H-bonded side by side; **antiparallel** sheets have straighter, stronger H-bond geometry than parallel; side chains alternate above/below the sheet plane.

### Denaturation

Denaturation destroys 2°-4° structure while leaving the primary sequence intact:

| Agent | What it disrupts |
|-------|------------------|
| Heat | All noncovalent interactions (increased motion) |
| Extreme pH | Ionic bonds / H-bonds (changes protonation states) |
| Urea, guanidinium | H-bonds and the hydrophobic effect |
| Detergents (SDS) | Hydrophobic interactions (coats protein) |
| Reducing agents ($\\beta$-mercaptoethanol, DTT) | Disulfide bonds ONLY |
| Heavy metals | Disulfides and ionic interactions |

Misfolding has clinical stakes: aggregated $\\beta$-sheet-rich conformers underlie amyloid diseases and prion pathology.`
    },
    {
      id: 'aa3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Protein Structure & Folding** 🎯`,
      exercise: {
        questions: [
          {
            question: `The planarity of the peptide bond results from:`,
            options: [`Steric hindrance between adjacent side chains`, `Resonance delocalization giving the C-N bond partial double-bond character`, `Hydrogen bonding between backbone atoms`, `The tetrahedral geometry of the alpha-carbon`],
            correctAnswer: 1,
            explanation: `The amide nitrogen's lone pair delocalizes into the carbonyl, giving the C-N bond roughly 40% double-bond character. Rotation about it is restricted, forcing the six atoms of the peptide unit into a plane.`
          },
          {
            question: `Treating a protein with SDS and $\\beta$-mercaptoethanol, then removing both, sometimes allows full recovery of activity. This supports the conclusion that:`,
            options: [`Quaternary structure is covalently maintained`, `The primary sequence contains the information needed to specify the native fold`, `Chaperones are required for all protein folding`, `Denaturation cleaves peptide bonds reversibly`],
            correctAnswer: 1,
            explanation: `This is the logic of Anfinsen's experiment: if a fully denatured, reduced protein refolds spontaneously to an active conformation, the sequence itself must encode the tertiary structure. Denaturants do not break peptide bonds, and chaperones prevent aggregation rather than specify folds.`
          },
          {
            question: `Which interaction is disrupted by dithiothreitol (DTT) but NOT by urea?`,
            options: [`Hydrogen bonds between backbone atoms`, `Hydrophobic packing of the core`, `Disulfide bonds between cysteines`, `Salt bridges between Lys and Asp`],
            correctAnswer: 2,
            explanation: `DTT (like $\\beta$-mercaptoethanol) is a reducing agent that specifically reduces covalent disulfide bonds to free thiols. Urea disrupts noncovalent interactions (H-bonds, hydrophobic effect) but cannot reduce disulfides.`
          },
          {
            question: `The principal thermodynamic driving force for the folding of a globular protein in water is:`,
            options: [`The decrease in conformational entropy of the polypeptide`, `The increase in entropy of water released from around nonpolar side chains`, `Formation of peptide bonds`, `Binding of chaperone proteins`],
            correctAnswer: 1,
            explanation: `Folding costs conformational entropy (unfavorable), but sequestering hydrophobic side chains frees ordered water shells, and that solvent entropy gain dominates. Peptide bonds already exist before folding; chaperones assist kinetically, not thermodynamically.`
          },
          {
            question: `Hemoglobin's cooperative oxygen binding depends on communication between its four subunits. Cooperativity is therefore a property of which structural level?`,
            options: [`Primary`, `Secondary`, `Tertiary`, `Quaternary`],
            correctAnswer: 3,
            explanation: `Cooperativity requires multiple subunits whose conformational changes influence one another (T to R state shifts) — by definition quaternary structure. Myoglobin, a single chain with tertiary structure only, binds oxygen without cooperativity.`
          }
        ]
      }
    },
    {
      id: 'aa3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Peptide bond: planar (resonance), trans-preferring, kinetically stable; formed by condensation, broken by hydrolysis
- 1° sequence → 2° backbone H-bonding ($\\alpha$-helix i to i+4; $\\beta$-sheets) → 3° side-chain interactions → 4° multi-subunit assembly
- Hydrophobic effect (solvent entropy) drives folding; sequence encodes the fold (Anfinsen); chaperones prevent aggregation
- Match the denaturant to its target: reducing agents = disulfides only; SDS = hydrophobic; pH = ionic/H-bonds
- Cooperativity (hemoglobin) = quaternary phenomenon`
    },
    {
      id: 'aa3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Structure & Denaturation Logic

<details>
<summary><b>Example 1: Which level of structure is affected?</b></summary>

**Question:** A mutation changes a surface glutamate to lysine, breaking a salt bridge with an arginine on a neighboring subunit and causing the tetramer to dissociate into monomers. Each monomer remains folded and soluble. Which structural level is disrupted?

**Solution:**
1. The salt bridge is BETWEEN subunits — an intersubunit contact.
2. Monomers still fold (tertiary intact); only the assembly falls apart.
3. **Quaternary structure** is disrupted.

**MCAT Strategy:** Ask "within one chain or between chains?" The same chemical interaction (salt bridge, H-bond) can be tertiary or quaternary depending on where it acts.
</details>

<details>
<summary><b>Example 2: Interpreting a denaturation experiment</b></summary>

**Question:** An enzyme retains activity in 8 M urea but loses activity when $\\beta$-mercaptoethanol is added along with the urea. Activity does not return on dilution. What does this suggest about the enzyme?

**Solution:**
1. Stability in urea alone → the fold is unusually robust to loss of noncovalent interactions, implying covalent crosslinks hold it together.
2. Adding a reducing agent destroys activity → **disulfide bonds** were the critical stabilizers.
3. No recovery after dilution → the reduced protein misfolds or aggregates; the disulfides likely needed to form in a specific order (often aided in vivo by protein disulfide isomerase).

**MCAT Strategy:** Urea vs. reducing agent is the classic experimental dissection: urea = noncovalent, $\\beta$-ME/DTT = covalent disulfides.
</details>

<details>
<summary><b>Example 3: Predicting secondary structure from sequence</b></summary>

**Question:** Two peptide segments are compared: segment 1 is Ala-Leu-Glu-Lys-Met-Ala; segment 2 is Pro-Gly-Pro-Ser-Gly-Pro. Which is more likely to form an $\\alpha$-helix?

**Solution:**
1. Segment 1 contains good helix formers (Ala, Leu, Met, Glu, Lys) and no breakers.
2. Segment 2 is loaded with Pro (rigid, no N-H for helix H-bonding) and Gly (too flexible) — a helix-hostile composition; this Pro-Gly-rich pattern is actually collagen-like.
3. **Segment 1** forms the helix.

**MCAT Strategy:** You only need two facts: Pro and Gly disfavor $\\alpha$-helices, and Ala is the prototypical helix former.
</details>`
    }
  ]
};
