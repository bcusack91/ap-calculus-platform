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
      id: 'aa3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Structure & Denaturation Logic

**Problem 1.** A tetrameric protein's surface Glu is mutated to Lys, breaking a salt bridge with an Arg. Gel filtration now shows a species one-quarter the native mass, whose CD spectrum (a readout of secondary structure) matches the native protein's.

- **(a)** What does the quarter-mass species show about the assembly?
- **(b)** Is each subunit still folded?
- **(c)** Which structural level is disrupted?

**(a) Quarter mass.** A species one-quarter the native mass is a single subunit: the tetramer has dissociated into monomers, so the broken salt bridge must have linked two subunits.

**(b) Still folded.** A native-like CD spectrum means the monomers keep their secondary structure: each chain is still folded, and only the assembly falls apart.

**(c) Quaternary.** With the salt bridge between chains (a) and each chain folded (b), **quaternary structure** is disrupted. Ask "within one chain or between chains?": the same interaction can be tertiary or quaternary depending on where it acts.

**Problem 2.** An enzyme retains activity in 8 M urea but loses activity when $\\beta$-mercaptoethanol is added along with the urea. Activity does not return on dilution.

- **(a)** What does stability in urea alone suggest?
- **(b)** What does the loss of activity with $\\beta$-mercaptoethanol reveal?
- **(c)** Why might activity fail to return on dilution?

**(a) Urea alone.** The fold is unusually robust to loss of noncovalent interactions, implying covalent crosslinks hold it together.

**(b) The reducing agent.** Reducing the protein destroys activity, so **disulfide bonds** were the critical stabilizers. This is the classic dissection: urea = noncovalent, $\\beta$-ME/DTT = covalent disulfides.

**(c) No recovery.** The reduced protein misfolds or aggregates instead of re-forming its native disulfide pairs; the disulfides likely needed to form in a specific order.

**Problem 3.** Two peptide segments are compared: segment 1 is Ala-Leu-Glu-Lys-Met-Ala; segment 2 is Pro-Gly-Pro-Ser-Gly-Pro.

- **(a)** Does segment 1 contain helix formers or helix breakers?
- **(b)** Why is segment 2 hostile to a helix?
- **(c)** Which segment is more likely to form an $\\alpha$-helix?

**(a) Segment 1.** It contains good helix formers (Ala, Leu, Met, Glu, Lys) and no breakers.

**(b) Segment 2.** It is loaded with Pro (rigid, no N-H for helix H-bonding) and Gly (too flexible); this Pro-Gly-rich pattern is collagen-like.

**(c) The helix former.** **Segment 1.** Two facts suffice: Pro and Gly disfavor $\\alpha$-helices, and Ala is the prototypical helix former.`
    },
    {
      id: 'aa3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Protein Structure & Folding** 🎯`,
      exercise: {
        questions: [
          {
            question: `The planarity of the peptide bond results from:`,
            options: [`Steric hindrance between neighboring side chains`, `Partial double-bond character in the C-N bond`, `Hydrogen bonding between neighboring backbone atoms`, `The tetrahedral geometry around the alpha-carbon`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Resonance is the cause: the amide nitrogen's lone pair delocalizes into the carbonyl, giving the C-N bond roughly 40% double-bond character. Rotation about it is restricted, forcing the six atoms of the peptide unit into a plane.`
          },
          {
            question: `Treating a protein with urea and $\\beta$-mercaptoethanol, then removing both, sometimes allows full recovery of activity. This supports the conclusion that:`,
            options: [`Quaternary structure is covalently maintained`, `The primary sequence encodes the native fold`, `Chaperones are required for all protein folding`, `Denaturation cleaves peptide bonds reversibly`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `This is the logic of Anfinsen's experiment: if a fully denatured, reduced protein refolds spontaneously to an active conformation, the sequence itself must contain the information needed to specify the native fold. Denaturants do not break peptide bonds, and chaperones prevent aggregation rather than specify folds.`
          },
          {
            question: `Which interaction is disrupted by dithiothreitol (DTT) but NOT by urea?`,
            options: [`Hydrogen bonds between backbone atoms`, `Hydrophobic packing of the core`, `Disulfide bonds between cysteines`, `Salt bridges between Lys and Asp`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `DTT (like $\\beta$-mercaptoethanol) is a reducing agent that specifically reduces covalent disulfide bonds to free thiols. Urea disrupts noncovalent interactions (H-bonds, hydrophobic effect) but cannot reduce disulfides.`
          },
          {
            question: `The principal thermodynamic driving force for the folding of a globular protein in water is:`,
            options: [`The decrease in conformational entropy of the polypeptide`, `The entropy gain of water freed from nonpolar surfaces`, `The enthalpy released by forming peptide bonds`, `Hydrogen bonding within the protein backbone`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Folding costs conformational entropy (unfavorable), but sequestering hydrophobic side chains frees ordered water shells, and that solvent entropy gain dominates. Peptide bonds already exist before folding, so no bond-forming enthalpy is involved. Backbone hydrogen bonds largely replace hydrogen bonds those same groups already made with water, so their net contribution is small compared with the hydrophobic effect.`
          },
          {
            question: `Hemoglobin's cooperative oxygen binding depends on communication between its four subunits. Cooperativity is therefore a property of which structural level?`,
            options: [`Primary`, `Secondary`, `Tertiary`, `Quaternary`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Cooperativity requires multiple subunits whose conformational changes influence one another (T to R state shifts) — by definition quaternary structure. Myoglobin, a single chain with tertiary structure only, binds oxygen without cooperativity.`
          }
        ]
      }
    },
    {
      id: 'aa3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **The peptide bond.** Formed by condensation, broken by slow hydrolysis; resonance makes it planar, rigid and usually trans.
- **Four structural levels.** 1° sequence, 2° backbone H-bonds, 3° one chain's side-chain fold, 4° subunits (cooperativity).
- **The hydrophobic effect.** Solvent entropy from burying nonpolar side chains drives folding; the sequence encodes the fold.
- **Match denaturant to target.** Reducing agents break only disulfides; urea breaks H-bonds and the hydrophobic effect.

**Common traps**

- **Chaperones dictate the fold.** Chaperones prevent aggregation; Anfinsen showed the native fold is encoded in the sequence.
- **Backbone H-bonds drive folding.** They mostly replace H-bonds made with water; the solvent entropy gain dominates.
- **Denaturing cuts peptide bonds.** Denaturants destroy 2° to 4° structure but leave the primary sequence intact.
- **Bond type sets the level.** A salt bridge within one chain is tertiary; the same interaction between subunits is quaternary.

<!-- yield:low -->
**Low-yield extras**

- In vivo, correct disulfide pairing is often aided by the ER enzyme protein disulfide isomerase (PDI), which reshuffles mispaired disulfides.
<!-- /yield -->`
    }
  ]
};
