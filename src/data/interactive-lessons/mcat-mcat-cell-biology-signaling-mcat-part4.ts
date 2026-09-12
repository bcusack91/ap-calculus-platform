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
| G-alpha binds GTP | Intrinsic GTPase, accelerated by **RGS proteins** (GAPs for G-alpha) |
| Ras binds GTP | Intrinsic GTPase, accelerated by **GAPs** (e.g., neurofibromin/NF1) |
| Kinase phosphorylates substrate | **Phosphatases** remove the phosphate (PP1 reverses PKA targets; tyrosine phosphatases reset RTKs) |
| cAMP/cGMP rise | **Phosphodiesterases** hydrolyze them |
| Ca$^{2+}$ rises | SERCA/PMCA pumps and Na$^+$/Ca$^{2+}$ exchange restore ~100 nM |
| Receptor active at surface | Desensitization and downregulation (below) |

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

- **Oncogenic Ras** (~30% of human cancers): point mutations (commonly codon 12) destroy GTPase activity and GAP sensitivity → permanent proliferation signal; a **gain-of-function** change needing only ONE mutant allele
- **HER2 amplification** (breast cancer): so many RTKs that they dimerize without ligand — trastuzumab targets the extracellular domain
- **BCR-ABL** (chronic myeloid leukemia): translocation fuses ABL kinase into a constitutively active form — imatinib occupies its ATP site
- **Loss of PTEN or NF1**: an eraser/GAP is deleted — **loss-of-function**, typically requiring both alleles (contrast with oncogenes)`
    },
    {
      id: 'sig4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Termination & Toxins** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cholera toxin and an activating G-alpha-s point mutation both cause sustained cAMP elevation. The shared biochemical lesion is:`,
            options: [`Loss of G-alpha-s GTPase activity, trapping the subunit in its GTP-bound active state`, `Increased affinity of the receptor for ligand`, `Direct allosteric activation of PKA`, `Inhibition of adenylyl cyclase degradation`],
            correctAnswer: 0,
            explanation: `ADP-ribosylation by cholera toxin chemically disables the same GTPase function that the mutation destroys genetically. Either way, G-alpha-s cannot hydrolyze GTP, so adenylyl cyclase is stimulated continuously. Recognizing that a toxin phenocopies a mutation (and vice versa) is a recurring MCAT passage device.`
          },
          {
            question: `An asthma patient using a beta-2 agonist inhaler many times daily finds it progressively less effective. Receptor studies would most likely show:`,
            options: [`GRK/beta-arrestin-mediated desensitization and reduced surface beta-2 receptor number`, `Conversion of beta-2 receptors into alpha-1 receptors`, `Increased receptor affinity for the agonist`, `Depletion of airway ATP`],
            correctAnswer: 0,
            explanation: `Sustained agonist exposure activates the full shutdown ladder: GRK phosphorylates occupied receptors, arrestin uncouples and internalizes them, and prolonged stimulation downregulates total receptor expression. The result is tachyphylaxis — the same dose produces less response. Receptors do not interconvert between subtypes, and affinity typically does not rise with overuse.`
          },
          {
            question: `Neurofibromin (NF1) is a GAP for Ras. In cells that have lost both NF1 alleles, growth-factor stimulation produces:`,
            options: [`A Ras-GTP signal of normal onset but abnormally long duration, because hydrolysis is no longer accelerated`, `No Ras activation, because GAPs are required to load GTP`, `Normal signaling, because SOS compensates`, `Constitutive receptor autophosphorylation`],
            correctAnswer: 0,
            explanation: `GAPs act on the OFF step: they accelerate Ras's slow intrinsic GTP hydrolysis. Without NF1, Ras still requires a GEF (SOS) to turn on — so onset is ligand-dependent and normal — but once on, it lingers far longer, producing excessive proliferation (neurofibromatosis type 1). Distinguish GEF loss (can't turn ON) from GAP loss (can't turn OFF).`
          }
        ]
      }
    },
    {
      id: 'sig4-deep',
      type: 'text' as const,
      content: `### The MCAT Signaling Passage Toolkit

| Observation in a passage | Likely interpretation |
|--------------------------|----------------------|
| Response persists after ligand washout | Termination defect (GTPase-dead G protein, phosphatase loss, PDE inhibition) |
| Nonhydrolyzable GTP analog (GTP-gamma-S) mimics hormone | A G protein lies between receptor and response |
| Response to hormone lost, response to cAMP analog intact | Lesion is upstream of PKA (receptor, G protein, or cyclase) |
| Phospho-ERK high with no growth factor | Constitutive activity upstream (Ras/Raf mutation, RTK amplification) |
| Second stimulus soon after the first gives a smaller response | Desensitization (GRK/arrestin) or messenger depletion |
| Response blocked by transcription inhibitor | The measured endpoint requires the nuclear (gene-expression) arm |

### Choosing the Right Control

- **Membrane-permeant analogs** (dibutyryl-cAMP, phorbol esters for PKC via the DAG site) let you activate a pathway mid-stream — the "chemical epistasis" trick
- Phorbol esters activate PKC persistently because, unlike DAG, they are **not metabolized** — chronic PKC activation is why they are tumor promoters
- A **receptor-negative cell line** transfected with the receptor of interest is the cleanest test of receptor sufficiency

### Integration Across Topics

- Signaling ↔ transport: ADH → GPCR/cAMP → aquaporin-2 insertion; insulin → RTK/PI3K → GLUT4 insertion — the two canonical "hormone inserts a transporter" stories
- Signaling ↔ cell cycle: ERK drives cyclin D; PDGF released at wounds pushes fibroblasts past the restriction point (Part 2 of the cell-cycle lesson)
- Signaling ↔ apoptosis: growth-factor withdrawal lowers Akt activity, releasing pro-apoptotic proteins — "death by neglect"
- Signaling ↔ endocrine: every hormone in the endocrine chapters uses one of these four receptor classes; classify the ligand's chemistry first and the mechanism follows`
    },
    {
      id: 'sig4-quiz2',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `In permeabilized cells, GTP-gamma-S (a nonhydrolyzable GTP analog) triggers sustained glycogen breakdown even without epinephrine. Epinephrine plus GDP-beta-S (which locks G proteins in the GDP state) triggers none. Together these results show that:`,
            options: [`A G protein's nucleotide state, downstream of the receptor, is both sufficient and necessary for the response`, `Epinephrine acts by entering the cell`, `Glycogen breakdown requires receptor internalization`, `GTP is a substrate for glycogen phosphorylase`],
            correctAnswer: 0,
            explanation: `GTP-gamma-S bypasses the receptor and locks any activated G-alpha ON (sufficiency without ligand); GDP-beta-S prevents activation even with ligand present (necessity). The paired sufficiency/necessity design brackets the G protein between receptor and effector — exactly how heterotrimeric G proteins were originally mapped, and a template for interpreting any two-part passage experiment.`
          },
          {
            question: `A tumor's cells show high phospho-Akt. Treating them with an RTK inhibitor does not lower phospho-Akt, but a PI3K inhibitor does. The most likely driver lesion is:`,
            options: [`An activating mutation in PI3K (or PTEN loss) — a node between the receptor and Akt`, `Overexpression of the growth-factor ligand`, `An activating RTK mutation`, `A defect downstream of Akt`],
            correctAnswer: 0,
            explanation: `If the receptor were the driver (mutation or autocrine ligand), blocking it would drop Akt phosphorylation — it did not, so the lesion is downstream of the RTK. The PI3K inhibitor still works, so the lesion is at or upstream of PI3K's output (activating PI3K mutation, or loss of PTEN, which lets basal PIP$_3$ accumulate). Ordering lesions by which inhibitors still work is the pharmacologic version of epistasis.`
          }
        ]
      }
    },
    {
      id: 'sig4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Termination machinery is specific and essential: GTPase (+ RGS/GAP acceleration), phosphatases, PDEs, Ca$^{2+}$ pumps, and receptor desensitization
- GPCR shutdown ladder: GRK phosphorylates occupied receptors → beta-arrestin uncouples → internalization → lysosomal downregulation; explains drug tolerance
- Cholera locks Gs ON (GTPase blocked); pertussis locks Gi OFF (coupling blocked) — different lesions, both raise cAMP
- Oncogene logic: gain-of-function (Ras G12, HER2 amplification, BCR-ABL) needs one allele; tumor-suppressor logic: loss-of-function (PTEN, NF1) needs both
- GEF loss = cannot turn on; GAP loss = cannot turn off — keep the on/off steps straight
- GTP-gamma-S mimicking hormone places a G protein in the pathway; cAMP analogs and phorbol esters activate pathways mid-stream for epistasis mapping
- Inhibitor panels order a pathway: a driver lesion is downstream of every inhibitor that fails and upstream of every inhibitor that works`
    }
  ]
};
