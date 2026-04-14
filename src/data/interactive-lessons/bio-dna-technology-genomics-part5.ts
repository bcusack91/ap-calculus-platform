export const bioDnaTechnologyGenomicsPart5Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna5-intro',
      type: 'text' as const,
      content: `
## CRISPR & Gene Editing

**Part 5 of 7 — DNA Technology & Genomics**

CRISPR-Cas9 is a revolutionary gene-editing tool adapted from a natural bacterial immune system. It allows precise, targeted modifications to the genome of virtually any organism.

### Origin: The Bacterial Immune System

**CRISPR** = Clustered Regularly Interspaced Short Palindromic Repeats

In bacteria and archaea, CRISPR functions as an **adaptive immune system** against viral infections:

1. When a bacteriophage infects a cell, the bacterium captures a short piece of viral DNA and stores it as a **spacer** between CRISPR repeats.
2. On re-infection, the spacer is transcribed into **CRISPR RNA (crRNA)** that guides a Cas nuclease to the matching viral DNA.
3. The Cas protein **cuts and destroys** the viral DNA.

Scientists Jennifer Doudna and Emmanuelle Charpentier adapted this system into a programmable gene-editing tool (Nobel Prize in Chemistry, 2020).

### Components of the CRISPR-Cas9 System

| Component | Role |
|-----------|------|
| **Cas9** | Endonuclease that makes a **double-strand break (DSB)** in the target DNA |
| **Guide RNA (gRNA)** | A ~20-nucleotide RNA sequence complementary to the target; directs Cas9 to the correct location |
| **PAM sequence** | Protospacer Adjacent Motif (5′-NGG-3′ for *S. pyogenes* Cas9); must be present adjacent to the target for Cas9 to bind and cut |
      `
    },
    {
      id: 'dna5-mechanism-text',
      type: 'text' as const,
      content: `
### How CRISPR-Cas9 Editing Works

#### Step 1: Design the Guide RNA
- The gRNA is designed to be **complementary** to the ~20 bp target sequence in the genome.
- The target must be adjacent to a **PAM** (5′-NGG-3′).

#### Step 2: Cas9 Makes a Double-Strand Break
- The gRNA–Cas9 complex scans the genome, and when the gRNA base-pairs with the target sequence (and a PAM is present), Cas9 cuts **both strands** of the DNA.

#### Step 3: Cell Repairs the Break

The cell uses one of two natural repair pathways:

##### NHEJ — Non-Homologous End Joining
- **Fast but error-prone** — the cell directly joins the broken ends.
- Often introduces small **insertions or deletions (indels)** that disrupt the gene → **gene knockout**.
- No template needed.

##### HDR — Homology-Directed Repair
- **Precise but less efficient** — the cell uses a provided DNA template to repair the break.
- Allows **specific edits**: gene correction, insertion of new sequences, or base changes.
- Requires a **donor template** with homology arms flanking the desired edit.

### Key Distinction for the AP Exam

| Repair Pathway | Outcome | Template Needed? | Accuracy |
|---------------|---------|-------------------|----------|
| NHEJ | Gene knockout (indels) | No | Error-prone |
| HDR | Precise gene edit | Yes (donor template) | High precision |
      `
    },
    {
      id: 'dna5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — CRISPR Mechanism** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is the role of the guide RNA (gRNA) in the CRISPR-Cas9 system?',
            options: [
              'It directs Cas9 to the target DNA sequence by complementary base pairing',
              'It acts as the enzyme that cuts the double-stranded DNA',
              'It repairs the double-strand break after Cas9 has cut',
              'It serves as the template for homology-directed repair'
            ],
            correctAnswer: 0,
            explanation: 'The guide RNA is a short (~20 nt) RNA molecule designed to be complementary to the target genomic sequence. It base-pairs with the target and positions Cas9 to make its double-strand break at the correct location.'
          },
          {
            question: 'A researcher wants to correct a single-base mutation in a patient\'s gene using CRISPR. Which repair pathway should they rely on?',
            options: [
              'HDR (Homology-Directed Repair), providing a donor template with the correct sequence',
              'NHEJ (Non-Homologous End Joining), which will randomly fix the mutation',
              'Base excision repair, which CRISPR activates automatically',
              'Mismatch repair, triggered by the double-strand break'
            ],
            correctAnswer: 0,
            explanation: 'HDR uses a provided donor template to make precise edits at the break site. By supplying a template with the correct base, the researcher can correct the mutation. NHEJ would likely introduce random indels rather than a precise correction.'
          }
        ]
      }
    },
    {
      id: 'dna5-applications-text',
      type: 'text' as const,
      content: `
### CRISPR Applications

#### Research Applications
- **Gene knockout studies** — disrupt a gene via NHEJ and observe the phenotype
- **Gene function screens** — CRISPR libraries target every gene in the genome
- **Disease modeling** — introduce disease-associated mutations into cell lines or model organisms

#### Medical Applications
- **Sickle cell disease** — editing hematopoietic stem cells to reactivate fetal hemoglobin (HbF)
- **Cancer immunotherapy** — engineering T cells with enhanced tumor-targeting ability
- **Genetic blindness** — in vivo editing of retinal cells (e.g., Leber congenital amaurosis)

#### Agricultural Applications
- **Disease-resistant crops** — knocking out susceptibility genes
- **Improved nutrition** — enhancing vitamin or mineral content
- **Hornless cattle** — editing to prevent horn growth (animal welfare)

### Limitations & Concerns
- **Off-target effects** — Cas9 may cut at unintended sites with partial gRNA complementarity
- **Mosaicism** — not all cells in an organism receive the edit
- **Delivery challenges** — getting the CRISPR components into the right cells in vivo
- **Ethical debates** — germline editing (heritable changes) raises profound ethical questions
      `
    },
    {
      id: 'dna5-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — CRISPR Applications** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What is an "off-target effect" in CRISPR gene editing?',
            options: [
              'Cas9 cuts at an unintended genomic location that partially matches the guide RNA',
              'The guide RNA fails to bind any DNA sequence in the genome',
              'The Cas9 protein is degraded before it can reach the nucleus',
              'HDR repair occurs when NHEJ was intended'
            ],
            correctAnswer: 0,
            explanation: 'Off-target effects occur when the gRNA has partial complementarity to sequences other than the intended target. Cas9 may cut at these sites, causing unintended mutations elsewhere in the genome — a major safety concern for therapeutic applications.'
          },
          {
            question: 'Why is the PAM sequence (5′-NGG-3′) important for CRISPR-Cas9 function?',
            options: [
              'Cas9 requires the PAM to be adjacent to the target for binding and cutting',
              'The PAM is where the guide RNA binds to Cas9',
              'The PAM sequence is added to the guide RNA during synthesis',
              'The PAM prevents off-target effects by increasing specificity'
            ],
            correctAnswer: 0,
            explanation: 'The PAM (Protospacer Adjacent Motif) is a short DNA sequence immediately downstream of the target. Cas9 first recognizes the PAM, then unwinds the adjacent DNA to check for gRNA complementarity. Without a PAM, Cas9 cannot bind or cut — this is also why bacteria don\'t cut their own CRISPR loci (no PAM in the spacer array).'
          }
        ]
      }
    },
    {
      id: 'dna5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — CRISPR** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Cas9 is an endonuclease that creates a _____ in the target DNA.',
            options: ['double-strand break', 'single-strand nick', 'methylation mark', 'point mutation']
          },
          {
            label: 'The repair pathway _____ is error-prone and often introduces indels for gene knockout.',
            options: ['NHEJ', 'HDR', 'mismatch repair', 'base excision repair']
          },
          {
            label: 'For precise gene correction, a _____ must be supplied along with the CRISPR components.',
            options: ['donor template', 'restriction enzyme', 'second guide RNA', 'reverse transcriptase']
          },
          {
            label: 'The PAM sequence for S. pyogenes Cas9 is _____.',
            options: ["5′-NGG-3′", "5′-NCC-3′", "5′-GAATTC-3′", "5′-TATA-3′"]
          }
        ],
        correctAnswers: ['double-strand break', 'NHEJ', 'donor template', "5′-NGG-3′"],
        hint1: 'Cas9 cuts both strands of the DNA helix at the target site.',
        hint2: 'NHEJ = Non-Homologous End Joining — it joins the broken ends without a template.',
        hint3: 'HDR requires a template with homology arms to guide precise repair.',
        explanation: 'Cas9 creates a double-strand break. NHEJ is error-prone, often producing indels that knock out gene function. HDR uses a donor template for precise edits. The PAM for SpCas9 is 5′-NGG-3′ (where N = any nucleotide).'
      }
    }
  ]
};
