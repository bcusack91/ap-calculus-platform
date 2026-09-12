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
- **MIC (minimum inhibitory concentration):** lowest drug concentration preventing visible growth in vitro; **MBC** is the lowest that kills. A disk-diffusion (Kirby-Bauer) zone of inhibition sizes susceptibility.
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
      id: 'abx1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Selective Toxicity & Wall Inhibitors** 🎯`,
      exercise: {
        questions: [
          {
            question: `Beta-lactam antibiotics are selectively toxic to bacteria because human cells:`,
            options: [`Lack a peptidoglycan cell wall and the PBPs that build it`, `Pump the drug out with P-glycoprotein efflux`, `Use 80S rather than 70S ribosomes`, `Absorb preformed folate from the diet`],
            correctAnswer: 0,
            explanation: `Beta-lactams inhibit transpeptidases that cross-link peptidoglycan. Human cells have no wall and no PBPs, so the target simply does not exist in the host. Ribosome and folate differences explain the selectivity of OTHER drug classes.`
          },
          {
            question: `Penicillin added to a culture of Mycoplasma pneumoniae has no effect because this organism:`,
            options: [`Produces a chromosomal beta-lactamase`, `Grows too rapidly for the drug to act`, `Lacks a cell wall entirely`, `Has an impermeable outer membrane`],
            correctAnswer: 2,
            explanation: `Mycoplasma has no peptidoglycan — its membrane is stabilized with sterols instead. No wall means no transpeptidase target, giving intrinsic resistance to every cell-wall agent (beta-lactams AND vancomycin).`
          },
          {
            question: `A neutropenic leukemia patient develops a bloodstream infection. Why is a bactericidal drug strongly preferred over a bacteriostatic one?`,
            options: [`Bactericidal drugs always cover a broader spectrum of organisms`, `Bacteriostatic drugs depend on neutrophils to clear halted bacteria`, `Bacteriostatic drugs cannot penetrate the bloodstream to reach bacteria`, `Bactericidal drugs are less toxic to human cells than static drugs`],
            correctAnswer: 1,
            explanation: `A static drug freezes bacterial growth but leaves killing to phagocytes. With neutrophils absent, halted organisms survive and resume growth. The distinction is about the host's contribution, not spectrum, penetration, or toxicity.`
          },
          {
            question: `Vancomycin-resistant enterococci evade the drug by:`,
            options: [`Hydrolyzing vancomycin with a modified beta-lactamase`, `Methylating the 23S rRNA of the 50S subunit`, `Thickening the outer membrane to exclude the drug`, `Swapping D-Ala-D-Ala termini for D-Ala-D-lactate`],
            correctAnswer: 3,
            explanation: `Vancomycin binds the D-Ala-D-Ala substrate, not an enzyme. Swapping the terminal residue to D-lactate removes one hydrogen bond and drops binding roughly 1000-fold. Vancomycin has no beta-lactam ring to hydrolyze, and rRNA methylation is a macrolide-resistance mechanism.`
          },
          {
            question: `Beta-lactams kill only actively dividing bacteria because their lethal effect requires:`,
            options: [`Active DNA replication forks as a second target`, `Uptake through transporters expressed only in growing cells`, `Ongoing assembly of new peptidoglycan that is not yet cross-linked`, `Rapid protein turnover that depletes existing PBPs`],
            correctAnswer: 2,
            explanation: `The drug blocks cross-linking of NEW wall. A dormant cell with intact wall is unharmed; a growing cell inserts weak, un-cross-linked material while autolysins keep remodeling, and osmotic pressure lyses it. This is also why combining a beta-lactam with a static drug can be antagonistic.`
          }
        ]
      }
    },
    {
      id: 'abx1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Selective toxicity = target what bacteria have and humans lack: wall, 70S ribosome, folate synthesis, gyrase, bacterial RNA pol
- Bactericidal (kill) vs bacteriostatic (halt; immune system finishes) — the difference matters most in immunocompromised hosts
- MIC = lowest concentration preventing growth; broad spectrum = collateral damage to flora (C. diff risk)
- Beta-lactams mimic D-Ala-D-Ala and irreversibly acylate transpeptidases (PBPs); lysis requires ACTIVE growth
- Vancomycin binds the D-Ala-D-Ala substrate itself; gram-positive only; VRE = D-Ala-D-lactate swap
- No wall (Mycoplasma) = intrinsic resistance to all wall-targeting drugs`
    },
    {
      id: 'abx1-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Mechanism Reasoning

<details>
<summary><b>Example 1: Predict an antagonistic drug combination</b></summary>

**Question:** A clinician combines penicillin with tetracycline (a bacteriostatic protein-synthesis inhibitor) against a susceptible organism. Predict the interaction.

**Solution:**
1. Penicillin's killing depends on cells actively building wall during growth.
2. Tetracycline halts protein synthesis and therefore growth.
3. Growth-arrested cells stop making peptidoglycan, so penicillin loses its window — the combination is **antagonistic**, not additive.

**MCAT Strategy:** Any time a static drug freezes growth, expect it to blunt a cidal drug whose mechanism requires active division.
</details>

<details>
<summary><b>Example 2: Interpret an MIC experiment</b></summary>

**Question:** Serial two-fold dilutions of drug X (32 down to 0.25 micrograms/mL) are inoculated with equal bacterial suspensions. Tubes at 8 and above stay clear; subculturing the clear 8 and 16 tubes onto drug-free agar yields heavy growth, while the 32 tube yields none. Give the MIC and MBC.

**Solution:**
1. MIC = lowest concentration with no visible growth = **8 micrograms/mL**.
2. MBC = lowest concentration from which organisms cannot be revived = **32 micrograms/mL**.
3. MBC far above MIC (here 4 tubes apart) indicates the drug is essentially bacteriostatic at achievable doses — it inhibited but did not kill at 8 and 16.

**MCAT Strategy:** Clear tube = inhibition; failure to regrow on fresh medium = killing. The MIC/MBC gap operationally defines static vs cidal.
</details>

<details>
<summary><b>Example 3: Why gram-negative rods survive vancomycin</b></summary>

**Question:** Vancomycin's target, D-Ala-D-Ala, is present in E. coli peptidoglycan, yet the drug fails completely against it. Reconcile.

**Solution:**
1. E. coli's peptidoglycan sits in the periplasm, behind an **outer membrane** whose porins admit only small hydrophilic molecules (roughly < 600 Da).
2. Vancomycin is a rigid glycopeptide near 1450 Da — it cannot traverse porins to reach its target.
3. Resistance can thus be a matter of ACCESS, with the target itself perfectly conserved.

**MCAT Strategy:** Always separate three failure modes: target absent (Mycoplasma vs beta-lactams), target altered (VRE), or target unreachable (gram-negative outer membrane vs vancomycin).
</details>`
    }
  ]
};
