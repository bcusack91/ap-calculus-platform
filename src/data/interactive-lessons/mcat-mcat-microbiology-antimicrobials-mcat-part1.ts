export const mcatAntimicrobialsPart1Data = {
  topicSlug: 'mcat-microbiology-antimicrobials-mcat',
  sections: [
    {
      id: 'abx1-intro',
      type: 'text' as const,
      content: `# Antimicrobials

**Part 1 of 4 — Selective Toxicity & Cell Wall Inhibitors**

### The Central Principle: Selective Toxicity

An antibiotic must poison the microbe while sparing the host. Every drug class exploits a structure or pathway that bacteria have and humans lack (or have in a different form):

| Bacterial target | Human counterpart | Drug classes |
|------------------|-------------------|--------------|
| Peptidoglycan cell wall | None — human cells have no wall | Beta-lactams, vancomycin |
| 70S ribosome (30S + 50S) | 80S ribosome (40S + 60S) | Aminoglycosides, tetracyclines, macrolides |
| Folate SYNTHESIS | Humans absorb dietary folate | Sulfonamides, trimethoprim |
| DNA gyrase / topoisomerase IV | Different human topoisomerases | Fluoroquinolones |
| Bacterial RNA polymerase | Distinct eukaryotic RNA pols | Rifampin |

### Vocabulary the MCAT Expects

- **Bactericidal** drugs kill bacteria (beta-lactams, vancomycin, aminoglycosides, fluoroquinolones); **bacteriostatic** drugs halt growth and let the immune system finish the job (tetracyclines, macrolides, sulfonamides). Static drugs can suffice in healthy hosts but not in immunocompromised ones.
- **MIC (minimum inhibitory concentration):** lowest drug concentration preventing visible growth in vitro; **MBC** is the lowest that kills. In a disk-diffusion test, a larger zone of inhibition around the drug disk means a more susceptible organism.

<!-- yield:low -->
- The standardized disk-diffusion method is called the Kirby-Bauer test.
<!-- /yield -->

- **Broad vs narrow spectrum:** broad-spectrum drugs hit many species — and devastate normal flora (risk: C. difficile overgrowth).

### Beta-Lactams: Suicide Substrates for Transpeptidase

Penicillins, cephalosporins, carbapenems, and monobactams share the strained **beta-lactam ring**, a structural mimic of the **D-Ala-D-Ala** terminus of peptidoglycan precursors. **Transpeptidases (penicillin-binding proteins, PBPs)** attack the ring and become covalently, irreversibly acylated — cross-linking stops. The cell keeps synthesizing wall material and keeps running its autolysins, so osmotic pressure bursts the weakened wall: **lysis**. Consequences worth reasoning through:

- Bactericidal, but only against **actively growing** cells building wall
- Useless against organisms without peptidoglycan: *Mycoplasma* (no wall at all) and intracellular organisms during their wall-less phases
- Gram-negatives are intrinsically tougher targets: the drug must first pass **porins** in the outer membrane

### Vancomycin: Cap the Substrate Instead

Vancomycin is a large glycopeptide that binds the **D-Ala-D-Ala terminus itself**, sterically blocking both transglycosylation and transpeptidation. Because it acts on the substrate, beta-lactamases cannot touch it — it is the classic drug for **MRSA**. Too bulky to cross the gram-negative outer membrane, it is essentially a **gram-positive-only** drug. Resistance (VRE) arises when enterococci swap the terminus to **D-Ala-D-lactate**, deleting a key hydrogen bond and collapsing binding affinity ~1000-fold.`
    },
    {
      id: 'abx1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mechanism Reasoning

**Problem 1.** Two-fold dilutions of drug X (128 down to 1 micrograms/mL) receive equal bacterial inocula. Tubes at 8 and above stay clear. Subcultured onto drug-free agar, the 8, 16 and 32 tubes regrow heavily; the 64 and 128 tubes do not.

- **(a)** What is the MIC of drug X?
- **(b)** What is its MBC?
- **(c)** At these concentrations, is drug X acting as a bactericidal or a bacteriostatic agent?

**(a) MIC.** The MIC is the lowest concentration with no visible growth: **8 micrograms/mL**, since the 4 tube is cloudy.

**(b) MBC.** The MBC is the lowest concentration from which organisms cannot be revived on drug-free agar: **64 micrograms/mL**, since the 8, 16 and 32 tubes regrew.

**(c) Static or cidal.** The MBC (64) is eightfold the MIC (8), three tubes apart and above the usual cutoff ratio of about 4, so drug X is essentially **bacteriostatic**: it inhibited but did not kill at 8, 16 and 32. Clear tube = inhibition; no regrowth on fresh medium = killing.

**Problem 2.** A clinician combines penicillin with tetracycline (a bacteriostatic protein-synthesis inhibitor) against a susceptible organism.

- **(a)** What does penicillin's killing depend on?
- **(b)** What does tetracycline do to that requirement?
- **(c)** Is the combination synergistic, additive or antagonistic?

**(a) Penicillin's requirement.** Penicillin's killing depends on cells actively building wall during growth.

**(b) Tetracycline's effect.** Tetracycline halts protein synthesis and therefore growth, so growth-arrested cells stop making peptidoglycan.

**(c) The interaction.** Penicillin loses its window, so the combination is **antagonistic**, not additive. Any time a static drug freezes growth, expect it to blunt a cidal drug whose mechanism requires active division.

**Problem 3.** Vancomycin's target, D-Ala-D-Ala, is present in E. coli peptidoglycan, yet the drug fails completely against E. coli.

- **(a)** Where does E. coli's peptidoglycan sit, and what must a drug cross to reach it?
- **(b)** Can vancomycin get across that barrier?
- **(c)** Which kind of failure is this: target absent, target altered, or target unreachable?

**(a) The barrier.** The peptidoglycan sits in the periplasm, behind an **outer membrane** whose porins admit only small hydrophilic molecules (roughly < 600 Da).

**(b) The drug's size.** Vancomycin is a rigid glycopeptide near 1450 Da, so it cannot traverse porins to reach its target.

**(c) Failure mode.** Target **unreachable**: the ~1450 Da drug cannot pass ~600 Da porins, though the target itself is perfectly conserved, so resistance is a matter of ACCESS. Compare target absent (Mycoplasma vs beta-lactams) and target altered (VRE).`
    },
    {
      id: 'abx1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Selective Toxicity & Wall Inhibitors** 🎯`,
      exercise: {
        questions: [
          {
            question: `Beta-lactam antibiotics are selectively toxic to bacteria because human cells:`,
            options: [`Lack a peptidoglycan cell wall and the PBPs that build it`, `Pump the drug out with P-glycoprotein efflux`, `Use 80S rather than 70S ribosomes`, `Absorb preformed folate from the diet`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Beta-lactams inhibit transpeptidases that cross-link peptidoglycan. Human cells have no wall and no PBPs, so the target simply does not exist in the host. Ribosome and folate differences explain the selectivity of OTHER drug classes.`
          },
          {
            question: `Penicillin added to a culture of Mycoplasma pneumoniae has no effect because this organism:`,
            options: [`Produces a chromosomal beta-lactamase`, `Grows too rapidly for the drug to act`, `Lacks a cell wall entirely`, `Has an impermeable outer membrane`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Mycoplasma has no peptidoglycan — its membrane is stabilized with sterols instead. No wall means no transpeptidase target, giving intrinsic resistance to every cell-wall agent (beta-lactams AND vancomycin).`
          },
          {
            question: `A neutropenic leukemia patient develops a bloodstream infection. Why is a bactericidal drug strongly preferred over a bacteriostatic one?`,
            options: [`Bactericidal drugs always cover a broader spectrum of organisms`, `Bacteriostatic drugs depend on neutrophils to clear halted bacteria`, `Bacteriostatic drugs cannot penetrate the bloodstream to reach bacteria`, `Bactericidal drugs are less toxic to human cells than static drugs`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `A static drug freezes bacterial growth but leaves killing to phagocytes. With neutrophils absent, halted organisms survive and resume growth. The distinction is about the host's contribution, not spectrum, penetration, or toxicity.`
          },
          {
            question: `Vancomycin-resistant enterococci evade the drug by:`,
            options: [`Hydrolyzing vancomycin with a modified beta-lactamase`, `Methylating 23S rRNA in the large ribosomal subunit`, `Thickening the outer membrane to exclude the drug`, `Swapping D-Ala-D-Ala termini for D-Ala-D-lactate`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Vancomycin binds the D-Ala-D-Ala substrate, not an enzyme. Swapping the terminal residue to D-lactate removes one hydrogen bond and drops binding roughly 1000-fold. Vancomycin has no beta-lactam ring to hydrolyze, and rRNA methylation is a macrolide-resistance mechanism.`
          },
          {
            question: `Beta-lactams kill only actively dividing bacteria because their lethal effect requires:`,
            options: [`Active DNA replication forks as a second target`, `Uptake through transporters expressed only in growing cells`, `Ongoing assembly of new peptidoglycan that is not yet cross-linked`, `Rapid protein turnover that depletes existing PBPs`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `The drug blocks cross-linking of NEW wall. A dormant cell with intact wall is unharmed; a growing cell inserts weak, un-cross-linked material while autolysins keep remodeling, and osmotic pressure lyses it. This is also why combining a beta-lactam with a static drug can be antagonistic.`
          }
        ]
      }
    },
    {
      id: 'abx1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Selective toxicity.** Drugs hit what bacteria have and humans lack or make differently: wall, 70S ribosome, folate synthesis, gyrase, bacterial RNA pol.
- **Static needs immunity.** Bacteriostatic drugs only halt growth, so immunocompromised hosts need bactericidal drugs.
- **MIC vs MBC.** The MIC is the lowest concentration with no visible growth; the MBC is the lowest concentration that kills.
- **Two ways to stop cross-links.** Beta-lactams irreversibly acylate the PBPs; vancomycin caps their D-Ala-D-Ala substrate.

**Common traps**

- **Beta-lactams on idle cells.** They kill only cells building new wall, so a static partner like tetracycline blunts them.
- **Wall drugs for Mycoplasma.** With no peptidoglycan there is no target, so beta-lactams and vancomycin both fail.
- **Vancomycin for gram-negatives.** The target is present, but the bulky drug cannot cross the outer membrane.
- **VRE as a lactamase.** VRE swaps D-Ala-D-Ala for D-Ala-D-lactate; vancomycin has no beta-lactam ring to cut.

<!-- yield:low -->
**Low-yield extras**

- The standardized disk-diffusion test is the Kirby-Bauer method.
<!-- /yield -->`
    }
  ]
};
