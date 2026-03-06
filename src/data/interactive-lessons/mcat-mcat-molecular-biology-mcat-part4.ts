export const mcatMolBioPart4Data = {
  topicSlug: 'mcat-molecular-biology-mcat',
  sections: [
    {
      id: 'mb4-intro',
      type: 'text' as const,
      content: `# Molecular Biology for the MCAT

**Part 4 of 7 — Gene Regulation**

### Why Gene Regulation Matters

Every cell has the same DNA, but a neuron looks and acts nothing like a liver cell. **Differential gene expression** — not different genes — explains cell specialization. The MCAT tests regulation at every level.

### Prokaryotic Gene Regulation: The Operon Model

**Lac Operon** (inducible — normally OFF):
- Structural genes: lacZ (beta-galactosidase), lacY (permease), lacA (transacetylase)
- **Without lactose**: Repressor (lacI product) binds operator → blocks RNA Pol → genes OFF
- **With lactose**: Allolactose (isomer of lactose) binds repressor → conformational change → repressor falls off → genes ON
- **Dual control**: Low glucose → high cAMP → cAMP-CAP binds promoter → enhanced transcription
- **Maximum expression**: lactose present (repressor off) + glucose absent (cAMP-CAP active)

**Trp Operon** (repressible — normally ON):
- **Without tryptophan**: Repressor inactive → genes ON (cell makes tryptophan)
- **With tryptophan**: Trp acts as **corepressor** → binds repressor → activates it → repressor binds operator → genes OFF
- Also regulated by **attenuation**: Secondary structures in mRNA leader sequence cause premature termination when trp is abundant

### Eukaryotic Gene Regulation — Five Levels

| Level | Mechanism | Effect | Example |
|-------|-----------|--------|---------|
| **Epigenetic** | DNA methylation, histone modification, chromatin remodeling | Long-term silencing or activation | X-inactivation, genomic imprinting |
| **Transcriptional** | Transcription factors, enhancers, silencers, Mediator | Turn genes on/off | Steroid hormone receptors |
| **Post-transcriptional** | Alternative splicing, mRNA stability, miRNA | Control which mRNAs are translated | miR-21 in cancer |
| **Translational** | mRNA availability, initiation factor regulation | Control rate of protein synthesis | Iron response element (IRE/IRP) |
| **Post-translational** | Phosphorylation, ubiquitination, proteolysis | Modify protein activity or target for degradation | p53 stabilization, cyclin degradation |

### Epigenetics — HIGH YIELD

| Modification | Effect on Transcription | Mechanism |
|-------------|------------------------|-----------|
| DNA methylation (CpG islands) | **Silencing** | Methyl groups block transcription factor binding |
| Histone acetylation | **Activation** | Neutralizes positive lysine charges → loosens DNA-histone interaction → euchromatin |
| Histone deacetylation | **Silencing** | Tightens chromatin → heterochromatin |
| Histone methylation | **Variable** | H3K4me3 = activation; H3K27me3 = silencing (context-dependent) |

**Key enzymes**: HATs (histone acetyltransferases) = activate. HDACs (histone deacetylases) = silence. HDAC inhibitors are used as cancer drugs.`
    },
    {
      id: 'mb4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Gene Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the lac operon, the presence of glucose AND lactose results in:`,
            options: [`Low transcription — glucose keeps cAMP low, so CAP cannot fully activate the promoter`, `Maximum transcription of lac genes`, `Complete repression of lac genes`, `No effect from glucose on lac expression`],
            correctAnswer: 0,
            explanation: `With lactose: repressor removed (allolactose binds it). But with glucose present: cAMP is LOW → CAP inactive → promoter only weakly active. Maximum expression requires: (1) lactose present (repressor off) AND (2) glucose absent (cAMP high → CAP-cAMP activates promoter). Glucose is the preferred carbon source.`
          },
          {
            question: `A drug that inhibits histone deacetylases (HDACs) would most likely cause:`,
            options: [`Increased gene expression — DNA remains associated with acetylated (loose) histones`, `Decreased gene expression from tighter chromatin packaging`, `No effect on transcription`, `DNA methylation at CpG islands`],
            correctAnswer: 0,
            explanation: `HDACs remove acetyl groups from histones → tighter chromatin → gene silencing. Inhibiting HDACs → histones stay acetylated → chromatin remains open (euchromatin) → increased transcription. HDAC inhibitors (e.g., vorinostat) are used as epigenetic cancer therapies to reactivate silenced tumor suppressor genes.`
          },
          {
            question: `The trp operon differs from the lac operon in that it is:`,
            options: [`Repressible — it is normally ON and turned OFF when tryptophan accumulates`, `Inducible — it is normally OFF and turned ON by an inducer`, `Not regulated by a repressor protein`, `Only found in eukaryotic organisms`],
            correctAnswer: 0,
            explanation: `Trp operon is repressible: normally ON because the cell needs to make tryptophan. When trp accumulates, it acts as a corepressor — binding the inactive repressor, activating it, which then binds the operator to shut off transcription. Lac operon is inducible: normally OFF, turned ON by allolactose.`
          }
        ]
      }
    },
    {
      id: 'mb4-deep',
      type: 'text' as const,
      content: `### microRNA (miRNA) and siRNA — Post-Transcriptional Silencing

- **miRNA**: Endogenous ~22 nt RNAs that bind complementary sequences in 3' UTR of target mRNAs
  - Partial complementarity → translational repression (mRNA not translated)
  - High complementarity → mRNA degradation
  - RISC complex (RNA-induced silencing complex) mediates the effect
- **siRNA**: Exogenous or synthetic small RNAs → same RISC pathway → mRNA degradation
- Both are mechanisms of **RNA interference (RNAi)** — a major research tool and potential therapy

### X-Inactivation (Barr Body)

- In females (XX), one X chromosome is randomly inactivated in each cell → **Barr body** (dense heterochromatin)
- **XIST RNA**: Long non-coding RNA that coats the inactive X → recruits silencing complexes
- Results in dosage compensation (males and females express ~same amount of X-linked genes)
- Random inactivation → mosaicism (e.g., calico cats, manifesting carriers of X-linked diseases)

### Genomic Imprinting

- Some genes are expressed from only ONE parental allele (the other is silenced by methylation)
- **Imprinting is parent-of-origin specific**: e.g., IGF2 expressed from paternal allele only
- Deletion of the active allele → disease (even though the other allele is intact, it is silenced)
- Prader-Willi syndrome: paternal deletion at 15q11-13
- Angelman syndrome: maternal deletion at the SAME region (different genes affected)

### Epigenetics and Cancer

- Cancer cells often show **global hypomethylation** (genome-wide) + **local hypermethylation** (at tumor suppressor promoters)
- Hypomethylation → genomic instability, oncogene activation
- Hypermethylation at CpG islands → tumor suppressor silencing (e.g., BRCA1, p16 promoter methylation)`
    },
    {
      id: 'mb4-quiz2',
      type: 'multiple-choice' as const,
      content: `**Advanced Regulation** 🎯`,
      exercise: {
        questions: [
          {
            question: `A female carrier of an X-linked recessive disorder shows mild symptoms in some tissues. This is best explained by:`,
            options: [`Random X-inactivation — in some cells the normal X is inactivated, leaving only the mutant X active`, `The disorder is actually autosomal dominant`, `X-linked genes are expressed from both X chromosomes`, `The Y chromosome provides a backup copy`],
            correctAnswer: 0,
            explanation: `X-inactivation is random in each cell. A female carrier has one normal and one mutant X. In cells where the normal X is inactivated (Barr body), only the mutant X is expressed → those cells show the disease phenotype. This mosaicism explains why some carriers have mild manifestations (manifesting carriers).`
          },
          {
            question: `Researchers find that a tumor suppressor gene has a normal DNA sequence but its promoter CpG island is heavily methylated. The gene is:`,
            options: [`Epigenetically silenced — methylation blocks transcription without changing the DNA sequence`, `Mutated at the coding level`, `Overexpressed due to methylation enhancement`, `Deleted from the genome`],
            correctAnswer: 0,
            explanation: `This is epigenetic silencing: the DNA sequence is intact but methylation at the promoter prevents transcription factors from binding → gene is effectively "off." This is a common mechanism in cancer (e.g., BRCA1, MLH1 promoter methylation). Unlike mutations, epigenetic silencing is potentially reversible with demethylating agents (e.g., 5-azacytidine).`
          }
        ]
      }
    },
    {
      id: 'mb4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Lac operon: inducible (normally OFF); max expression = lactose ON + glucose OFF (high cAMP-CAP)
- Trp operon: repressible (normally ON); trp = corepressor that activates the repressor
- Eukaryotic regulation: epigenetic → transcriptional → post-transcriptional → translational → post-translational
- Epigenetics: DNA methylation = silencing; histone acetylation = activation; HDAC inhibitors = cancer therapy
- miRNA/siRNA: post-transcriptional silencing via RISC complex (RNAi)
- X-inactivation: random, XIST RNA-mediated → Barr body → mosaicism in females
- Genomic imprinting: parent-of-origin allele silencing (Prader-Willi vs. Angelman)
- Cancer epigenetics: global hypomethylation + local hypermethylation at tumor suppressor promoters`
    }
  ]
};
