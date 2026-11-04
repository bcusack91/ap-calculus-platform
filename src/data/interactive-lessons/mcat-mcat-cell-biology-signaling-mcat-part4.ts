export const mcatCellSignalingPart4Data = {
  topicSlug: 'mcat-cell-biology-signaling-mcat',
  sections: [
    {
      id: 'sig4-intro',
      type: 'text' as const,
      content: `# Cell Signaling for the MCAT

**Part 4 of 4 — Termination, Toxins & MCAT Integration**

### Every ON Switch Has a Dedicated OFF Switch

| ON event | OFF machinery |
|----------|---------------|
| G-alpha binds GTP | Intrinsic GTPase, accelerated by GTPase-activating proteins (GAPs) |
| Ras binds GTP | Intrinsic GTPase, accelerated by **GAPs** (e.g., neurofibromin/NF1) |
| Kinase phosphorylates substrate | **Phosphatases** remove the phosphate (PP1 reverses PKA targets; tyrosine phosphatases reset RTKs) |
| cAMP/cGMP rise | **Phosphodiesterases** hydrolyze them |
| Ca$^{2+}$ rises | SERCA/PMCA pumps and Na$^+$/Ca$^{2+}$ exchange restore ~100 nM |
| Receptor active at surface | Desensitization and downregulation (below) |

<!-- yield:low -->
- The GAPs that accelerate G-alpha's GTPase are the **RGS proteins** (regulators of G-protein signaling).
<!-- /yield -->

### Receptor Desensitization — Three Depths of Shutdown

1. **Rapid desensitization (seconds-minutes)**: **GRK** (G-protein receptor kinase) phosphorylates the *agonist-occupied* GPCR; **beta-arrestin** binds, sterically uncoupling it from G proteins
2. **Internalization (minutes)**: arrestin links the receptor to clathrin pits; endosomal receptors can recycle back (resensitization) or proceed onward
3. **Downregulation (hours)**: sustained stimulation routes receptors to **lysosomes** and lowers receptor gene expression — total receptor number falls

> Because GRKs prefer occupied receptors, desensitization is use-dependent: the cell turns down exactly the signal it is hearing. This underlies drug **tolerance** (e.g., chronic beta-agonists in asthma).

### Bacterial Toxins — Natural Pathway Mutants

| Toxin | Biochemical action | Net effect |
|-------|--------------------|-----------|
| **Cholera toxin** | ADP-ribosylates **G-alpha-s**, blocking its GTPase | Gs locked ON → cAMP soars → CFTR hyperactivation → secretory diarrhea |
| **Pertussis toxin** | ADP-ribosylates **G-alpha-i**, preventing receptor coupling | Gi locked OFF → cAMP disinhibited (rises) |
| Botulinum/tetanus | Cleave SNAREs (Part 4 of membrane transport) | Blocked neurotransmitter exocytosis |

Both cholera and pertussis raise cAMP — one by jamming the accelerator ON, one by cutting the brake. Passages expect you to distinguish the mechanisms, not just the outcome.

### When Termination Fails: Cancer Signatures

- **Oncogenic Ras** (~30% of human cancers): point mutations destroy GTPase activity and GAP sensitivity → permanent proliferation signal; a **gain-of-function** change needing only ONE mutant allele
- **HER2 amplification** (breast cancer): so many RTKs that they dimerize without ligand — trastuzumab targets the extracellular domain
- **BCR-ABL** (chronic myeloid leukemia): translocation fuses ABL kinase into a constitutively active form — imatinib occupies its ATP site
- **Loss of PTEN or NF1**: an eraser/GAP is deleted — **loss-of-function**, typically requiring both alleles (contrast with oncogenes)

<!-- yield:low -->
- Oncogenic Ras mutations most often hit **codon 12**.
<!-- /yield -->`
    },
    {
      id: 'sig4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Termination & Toxins** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cholera toxin and an activating G-alpha-s point mutation both cause sustained cAMP elevation. The shared biochemical lesion is:`,
            options: [`A rise in the receptor's affinity for its ligand`, `Direct allosteric activation of PKA by the toxin`, `Blocked breakdown of adenylyl cyclase protein`, `Loss of GTPase activity in G-alpha-s itself`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `ADP-ribosylation by cholera toxin chemically disables the same GTPase function that the mutation destroys genetically. Either way, G-alpha-s cannot hydrolyze GTP, so adenylyl cyclase is stimulated continuously. Recognizing that a toxin phenocopies a mutation (and vice versa) is a recurring MCAT passage device.`
          },
          {
            question: `An asthma patient using a beta-2 agonist inhaler many times daily finds it progressively less effective. Receptor studies would most likely show:`,
            options: [`Conversion of beta-2 receptors into alpha-1 receptors`, `GRK/arrestin desensitization with fewer surface receptors`, `A rise in beta-2 receptor affinity for the agonist`, `Depletion of ATP stores in airway smooth muscle`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Sustained agonist exposure activates the full shutdown ladder: GRK phosphorylates occupied receptors, arrestin uncouples and internalizes them, and prolonged stimulation downregulates total receptor expression. The result is tachyphylaxis — the same dose produces less response. Receptors do not interconvert between subtypes, and affinity typically does not rise with overuse.`
          },
          {
            question: `Neurofibromin (NF1) is a GAP for Ras. In cells that have lost both NF1 alleles, growth-factor stimulation produces:`,
            options: [`Constitutive autophosphorylation of the receptor itself`, `Normal signaling, because SOS compensates for the loss`, `Normal onset but abnormally prolonged Ras-GTP signaling`, `No Ras activation, since GAPs are needed to load GTP`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `GAPs act on the OFF step: they accelerate Ras's slow intrinsic GTP hydrolysis. Without NF1, Ras still requires a GEF (SOS) to turn on — so onset is ligand-dependent and normal — but once on, it lingers far longer, producing excessive proliferation (neurofibromatosis type 1). Distinguish GEF loss (can't turn ON) from GAP loss (can't turn OFF).`
          }
        ]
      }
    },
    {
      id: 'sig4-deep',
      type: 'text' as const,
      content: `### The MCAT Signaling Passage Toolkit

| Passage observation | Likely interpretation |
|---|---|
| Response persists after ligand washout | Termination defect (GTPase-dead G protein, lost phosphatase or PDE) |
| GTP-gamma-S (nonhydrolyzable) mimics the hormone | A G protein lies between receptor and response |
| Hormone response lost, cAMP-analog response intact | Lesion upstream of PKA (receptor, G protein or cyclase) |
| Phospho-ERK high without growth factor | Constitutive upstream activity (Ras/Raf mutant, RTK amplification) |
| A second stimulus soon after responds less | Desensitization (GRK/arrestin) or messenger depletion |
| Response blocked by a transcription inhibitor | The endpoint needs the gene-expression arm |

### Choosing the Right Control

- **Membrane-permeant analogs** (of cAMP, or of DAG for PKC) let you activate a pathway mid-stream — the "chemical epistasis" trick

<!-- yield:low -->
- The standard analogs are **dibutyryl-cAMP** and **phorbol esters** (which bind PKC's DAG site). Phorbol esters activate PKC persistently because, unlike DAG, they are **not metabolized** — chronic PKC activation is why they are tumor promoters.
<!-- /yield -->

- A **receptor-negative cell line** transfected with the receptor of interest is the cleanest test of receptor sufficiency

### Integration Across Topics

- Signaling ↔ transport: ADH → GPCR/cAMP → aquaporin-2 insertion; insulin → RTK/PI3K → GLUT4 insertion — the two canonical "hormone inserts a transporter" stories
- Signaling ↔ cell cycle: ERK drives cyclin D; PDGF released at wounds pushes fibroblasts past the restriction point (Part 2 of the cell-cycle lesson)
- Signaling ↔ apoptosis: growth-factor withdrawal lowers Akt activity, releasing pro-apoptotic proteins — "death by neglect"
- Signaling ↔ endocrine: every hormone in the endocrine chapters uses one of these four receptor classes; classify the ligand's chemistry first and the mechanism follows`
    },
    {
      id: 'sig4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Signal That Will Not Switch Off

**Problem 1.** Intestinal cells raise cAMP when a Gs-coupled hormone is added, and cAMP returns to baseline minutes after the hormone is washed out. A second batch is pretreated with cholera toxin before the hormone is added.

- **(a)** In untreated cells, which two OFF steps return cAMP to baseline after washout?
- **(b)** In toxin-treated cells, what happens to cAMP after washout, and why?
- **(c)** In toxin-treated cells, would a receptor antagonist lower cAMP?
- **(d)** In toxin-treated cells, would an adenylyl cyclase inhibitor lower cAMP?

**(a) Normal shutdown.** G-alpha-s hydrolyzes its GTP with its intrinsic GTPase, so adenylyl cyclase stops; phosphodiesterases then hydrolyze the cAMP already made.

**(b) Toxin.** cAMP stays high. Cholera toxin ADP-ribosylates G-alpha-s and blocks its GTPase, so G-alpha-s stays ON and keeps stimulating adenylyl cyclase. A response that outlasts its ligand marks a termination defect; in the gut, the cAMP hyperactivates CFTR and causes secretory diarrhea.

**(c) Receptor antagonist.** No. The lesion sits at G-alpha-s, downstream of the receptor. The locked G protein no longer needs receptor input, so blocking the receptor cannot switch it off.

**(d) Cyclase inhibitor.** Yes. Adenylyl cyclase lies downstream of the locked G-alpha-s, so blocking it stops cAMP synthesis, and the phosphodiesterases, which still work, clear the cAMP already made.`
    },
    {
      id: 'sig4-quiz2',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `In permeabilized cells, GTP-gamma-S (a nonhydrolyzable GTP analog) triggers sustained glycogen breakdown even without epinephrine. Epinephrine plus GDP-beta-S (which locks G proteins in the GDP state) triggers none. Together these results show that:`,
            options: [`A G protein's nucleotide state controls the response`, `Epinephrine acts by entering the cell and binding G proteins`, `Glycogen breakdown requires receptor internalization first`, `GTP is a substrate for glycogen phosphorylase`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `GTP-gamma-S bypasses the receptor and locks any activated G-alpha ON (sufficiency without ligand); GDP-beta-S prevents activation even with ligand present (necessity). The paired sufficiency/necessity design brackets the G protein between receptor and effector — exactly how heterotrimeric G proteins were originally mapped, and a template for interpreting any two-part passage experiment.`
          },
          {
            question: `A tumor's cells show high phospho-Akt. Treating them with an RTK inhibitor does not lower phospho-Akt, but a PI3K inhibitor does. The most likely driver lesion is:`,
            options: [`Overexpression of the growth-factor ligand itself`, `A gain-of-function lesion acting downstream of Akt`, `An activating mutation in the receptor kinase`, `An activating PI3K mutation, or loss of PTEN`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `If the receptor were the driver (mutation or autocrine ligand), blocking it would drop Akt phosphorylation — it did not, so the lesion is downstream of the RTK. The PI3K inhibitor still works, so the lesion is at or upstream of PI3K's output (activating PI3K mutation, or loss of PTEN, which lets basal PIP$_3$ accumulate). Ordering lesions by which inhibitors still work is the pharmacologic version of epistasis.`
          }
        ]
      }
    },
    {
      id: 'sig4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Every ON has an OFF.** GTPases (sped by GAPs), phosphatases, PDEs and Ca$^{2+}$ pumps each reverse one specific ON step.
- **The desensitization ladder.** GRK marks occupied receptors, beta-arrestin uncouples and internalizes them, lysosomes downregulate them.
- **Two toxins, one cAMP rise.** Cholera locks Gs ON by blocking its GTPase; pertussis locks Gi OFF by blocking its coupling.
- **Oncogenes vs. tumor suppressors.** Gain-of-function (Ras, HER2, BCR-ABL) needs one allele; loss-of-function (PTEN, NF1) needs both.

**Common traps**

- **GEF loss vs. GAP loss.** Losing a GEF means the switch cannot turn on; losing a GAP means it cannot turn off.
- **Downregulation as fast.** Rapid desensitization takes seconds to minutes; downregulation takes hours and lowers total receptor number.
- **Persistence as extra ligand.** A response that outlasts ligand washout points to a termination defect, not more hormone.
- **Reading inhibitor panels backwards.** A driver lesion lies downstream of every inhibitor that fails and at or upstream of every one that works.

<!-- yield:low -->
**Low-yield extras**

- RGS proteins (GAPs for G-alpha); Ras codon 12; dibutyryl-cAMP and phorbol esters, the persistent non-metabolized DAG mimics that act as tumor promoters
<!-- /yield -->`
    }
  ]
};
