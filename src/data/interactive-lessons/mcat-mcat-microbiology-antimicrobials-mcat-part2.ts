export const mcatAntimicrobialsPart2Data = {
  topicSlug: 'mcat-microbiology-antimicrobials-mcat',
  sections: [
    {
      id: 'abx2-intro',
      type: 'text' as const,
      content: `# Antimicrobials

**Part 2 of 4 — Protein Synthesis Inhibitors: 30S vs 50S**

### The Selectivity Handle

Bacteria translate on **70S ribosomes (30S + 50S subunits)**; eukaryotic cytosol uses **80S (40S + 60S)**. Drugs shaped for the prokaryotic subunits leave cytosolic translation alone — with one caveat the MCAT loves: **mitochondrial ribosomes are 70S-like** (endosymbiotic ancestry), which explains dose-limiting toxicities such as the hearing loss (ototoxicity) caused by aminoglycosides.

<!-- yield:low -->
- The same logic covers chloramphenicol's dose-related bone-marrow suppression (distinct from its rare, idiosyncratic aplastic anemia).
<!-- /yield -->

### 30S Drugs ("buy AT 30")

| Class | Mechanism | Effect |
|-------|-----------|--------|
| **Aminoglycosides** (gentamicin, streptomycin) | Bind 30S irreversibly; distort the codon-anticodon proofreading site → **misreading** + blocked initiation | **Bactericidal** (misfolded membrane proteins are lethal); require O$_2$-dependent uptake, so useless vs anaerobes |
| **Tetracyclines** (doxycycline) | Block the **A site**, preventing aminoacyl-tRNA delivery | Bacteriostatic |

<!-- yield:low -->
- Tetracyclines chelate divalent cations (do not take with milk or antacids) and deposit in developing teeth and bone.
<!-- /yield -->

### 50S Drugs ("CELLs at 50")

| Class | Mechanism | Effect |
|-------|-----------|--------|
| **Chloramphenicol** | Inhibits **peptidyl transferase** (the 23S rRNA ribozyme that forms peptide bonds) | Static |
| **Macrolides** (erythromycin, azithromycin) | Plug the **exit tunnel**; block translocation — the peptide cannot elongate | Static; first choice for atypical (wall-less or intracellular) organisms |
| **Clindamycin** | Binds 50S; blocks peptide bond formation/translocation | Static |
| **Linezolid** | Blocks **initiation complex** assembly at 50S | Static |

<!-- yield:low -->
- Clinical tails: clindamycin covers anaerobes above the diaphragm and carries a high C. difficile risk; linezolid is a reserve drug for MRSA/VRE.
<!-- /yield -->

### Reasoning Anchors

- Peptide bond formation is catalyzed by **rRNA, not protein** — the ribosome is a ribozyme. Chloramphenicol inhibits an RNA active site.
- Aminoglycosides are the odd class out: protein-synthesis inhibitors are generally static, but **misreading** actively poisons the cell with junk protein → cidal.
- Aminoglycoside + beta-lactam is classically **synergistic**: wall damage lets the aminoglycoside flood in.
- Macrolide resistance can come from **methylation of the 23S rRNA**, which removes the binding site — one methyl group, total resistance. Clindamycin binds an overlapping 50S site, so the same methylation confers cross-resistance to macrolides AND clindamycin.

<!-- yield:low -->
- The methylase gene is **erm**, and the macrolide + clindamycin cross-resistance is called the MLS$_B$ phenotype.
<!-- /yield -->`
    },
    {
      id: 'abx2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Ribosome-Targeting Antibiotics** 🎯`,
      exercise: {
        questions: [
          {
            question: `Chloramphenicol can suppress human bone marrow despite targeting the 50S subunit because:`,
            options: [`It also inhibits the 60S subunit at therapeutic doses`, `Mitochondrial ribosomes resemble bacterial 70S ribosomes`, `Marrow stem cells take up the drug through bacterial-type porins`, `It chelates the iron needed for hemoglobin synthesis`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Mitochondria retain 70S-style ribosomes from their endosymbiotic ancestor, so drugs aimed at bacterial subunits can cripple mitochondrial translation in high-turnover host tissues like marrow. This is a recurring MCAT bridge between pharmacology and endosymbiosis.`
          },
          {
            question: `Unlike most protein-synthesis inhibitors, aminoglycosides are bactericidal. The best mechanistic explanation is that they:`,
            options: [`Also inhibit DNA gyrase, causing double-strand DNA breaks`, `Bind reversibly, allowing repeated inhibition cycles`, `Directly lyse the peptidoglycan wall like lysozyme does`, `Induce misreading that yields membrane-damaging proteins`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Merely pausing translation is survivable (static). Aminoglycosides corrupt proofreading at the 30S decoding site, so the cell actively produces misfolded proteins; those inserted into the membrane increase permeability, letting in even more drug — a lethal feed-forward loop.`
          },
          {
            question: `An anaerobic abscess organism is intrinsically resistant to gentamicin because aminoglycoside entry into bacteria requires:`,
            options: [`Oxygen-dependent active transport across the membrane`, `Porins found only in gram-positive organisms`, `A functioning peptidoglycan synthesis pathway`, `Reduction of the drug to an active radical form`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Aminoglycosides are polar cations pulled across the inner membrane by an electrochemical gradient generated by aerobic (oxidative) metabolism. Anaerobes lack that O2-dependent uptake machinery, so the drug never reaches the ribosome — resistance by exclusion, not by target change.`
          },
          {
            question: `Tetracycline prevents protein elongation by:`,
            options: [`Inhibiting peptidyl transferase on the 50S subunit`, `Methylating the 23S rRNA to block the 50S exit tunnel`, `Blocking aminoacyl-tRNA binding at the 30S A site`, `Cleaving mRNA at the ribosome-binding site upstream of AUG`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Tetracyclines occupy the 30S A site, the docking bay for each incoming charged tRNA. No new tRNA, no elongation — but existing processes are untouched, so the effect is bacteriostatic. Peptidyl transferase is chloramphenicol's target; methylation is a RESISTANCE mechanism, not a drug action.`
          },
          {
            question: `A strain of S. aureus methylates a single adenine in its 23S rRNA at the macrolide binding site. The expected phenotype is:`,
            options: [`Resistance to aminoglycosides such as gentamicin`, `Resistance to macrolides and clindamycin`, `Increased susceptibility to vancomycin`, `Resistance to trimethoprim and sulfonamides`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Macrolides and clindamycin bind overlapping surfaces near the exit tunnel of the 50S subunit; methylating that site confers cross-resistance to both. Aminoglycosides (30S), vancomycin (wall), and trimethoprim (folate) bind elsewhere and are unaffected.`
          }
        ]
      }
    },
    {
      id: 'abx2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- 70S vs 80S = the selectivity handle; the exception is 70S-like mitochondrial ribosomes (aminoglycoside hearing loss)
- 30S: aminoglycosides (irreversible, misreading, CIDAL, need O$_2$ uptake) and tetracyclines (A-site block, static)
- 50S: chloramphenicol (peptidyl transferase — an rRNA ribozyme), macrolides (exit tunnel/translocation), clindamycin, linezolid (initiation)
- Aminoglycoside + beta-lactam = synergy (wall holes boost uptake); aminoglycosides fail vs anaerobes
- Methylation of 23S rRNA removes the macrolide binding site = target-alteration resistance, with cross-resistance to clindamycin

<!-- yield:low -->
- Low-yield extras: chloramphenicol's marrow suppression is another mitochondrial-ribosome effect; tetracyclines chelate divalent cations and stain teeth/bone; clindamycin's clinical niche (anaerobes above the diaphragm, C. diff risk) and linezolid's (MRSA/VRE reserve); the 23S methylase gene is erm, and the cross-resistance is the MLS$_B$ phenotype
<!-- /yield -->`
    },
    {
      id: 'abx2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Translation Pharmacology

<details>
<summary><b>Example 1: Map drug effects onto the elongation cycle</b></summary>

**Question:** Place tetracycline, chloramphenicol, and erythromycin at their exact steps in one elongation cycle (deliver, bond, move).

**Solution:**
1. **Deliver:** aminoacyl-tRNA enters the A site — blocked by **tetracycline**.
2. **Bond:** peptidyl transferase (23S rRNA) forms the peptide bond — blocked by **chloramphenicol**.
3. **Move:** the ribosome translocates and the chain threads the exit tunnel — blocked by **erythromycin**.

**MCAT Strategy:** Learn the cycle, not the drug list — a passage describing a novel inhibitor of translocation should map instantly onto macrolide-like behavior.
</details>

<details>
<summary><b>Example 2: Design the polysome experiment</b></summary>

**Question:** In a bacterial in vitro translation system, drug A freezes ribosomes on mRNA as heavy polysomes; drug B causes ribosomes to run off and accumulate as free 70S with truncated peptides released. Match A and B to chloramphenicol vs puromycin (an aminoacyl-tRNA mimic that accepts the chain and dissociates).

**Solution:**
1. Chloramphenicol blocks bond formation, so ribosomes STALL in place, still clamped to mRNA: **drug A** (polysomes preserved).
2. Puromycin resembles a charged tRNA, receives the growing chain, then falls off — premature release and ribosome run-off: **drug B**.
3. Polysome profiles thus distinguish "stall" inhibitors from "release" inhibitors.

**MCAT Strategy:** Experimental passages test whether you can translate a mechanism into a measurable pattern; stalling preserves polysomes, release collapses them.
</details>

<details>
<summary><b>Example 3: Choose the drug for an atypical pneumonia</b></summary>

**Question:** A college student has "walking pneumonia" from Mycoplasma pneumoniae. Amoxicillin fails. Why, and what class succeeds?

**Solution:**
1. Amoxicillin is a beta-lactam; Mycoplasma has no peptidoglycan — the target is absent (Part 1 principle).
2. The organism still translates on 70S ribosomes, so protein-synthesis inhibitors work: a **macrolide** (azithromycin) or tetracycline is standard.
3. General rule: wall-less and intracellular organisms shift therapy from wall drugs to ribosome or nucleic-acid drugs.

**MCAT Strategy:** Match the drug's required target to the organism's parts list before considering anything else.
</details>`
    }
  ]
};
