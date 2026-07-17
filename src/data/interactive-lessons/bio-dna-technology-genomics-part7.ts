export const bioDnaTechnologyGenomicsPart7Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna7-intro',
      type: 'text' as const,
      content: `
## AP Exam Practice — DNA Technology & Genomics

**Part 7 of 7 — DNA Technology & Genomics**

This part focuses on the types of questions you'll encounter on the AP Biology exam: interpreting gel electrophoresis images, performing PCR calculations, and designing CRISPR experiments.

### Gel Electrophoresis Interpretation

#### Typical Exam Scenario

A gel diagram shows DNA fragments from multiple individuals digested with the same restriction enzyme. You must:

1. **Determine fragment sizes** by comparing band positions to the DNA ladder.
2. **Identify individuals** with the same or different banding patterns.
3. **Relate RFLP patterns** to genotype — e.g., a mutation that creates or destroys a restriction site.

#### Example: Sickle Cell Anemia RFLP

The sickle cell mutation (Glu → Val in β-globin) **eliminates an MstII restriction site**.

| Genotype | Fragment Pattern |
|----------|-----------------|
| HbA/HbA (normal) | Two smaller fragments (e.g., 1.1 kb + 0.2 kb) |
| HbS/HbS (sickle cell) | One larger fragment (e.g., 1.3 kb) — the site is absent |
| HbA/HbS (carrier) | Three bands: both small fragments AND the large fragment |

**Key reasoning**: Carriers show bands from BOTH alleles because they have one chromosome with the restriction site and one without.
      `
    },
    {
      id: 'dna7-quiz1',
      type: 'multiple-choice' as const,
      content: `**AP Practice — Gel Electrophoresis** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A gel shows the following after digestion with EcoRI:\n\n- Lane 1 (ladder): 5 kb, 3 kb, 1 kb markers\n- Lane 2 (Individual A): bands at 5 kb and 1 kb\n- Lane 3 (Individual B): single band at 6 kb\n- Lane 4 (Individual C): bands at 6 kb, 5 kb, and 1 kb\n\nWhat is the most likely explanation for Individual C\'s pattern?',
            options: [
              'Individual C is heterozygous — one allele has the EcoRI site (producing 5 kb + 1 kb) and one lacks it (producing 6 kb)',
              'Individual C has three copies of the gene',
              'The sample in Lane 4 is contaminated with DNA from both A and B',
              'Individual C has a mutation in EcoRI that prevents complete digestion'
            ],
            correctAnswer: 0,
            explanation: 'Individual C shows all three bands: the 6 kb uncut fragment (like B) and the 5 kb + 1 kb cut fragments (like A). This is consistent with heterozygosity — one allele has the EcoRI recognition site, the other does not. Note that 5 + 1 = 6, confirming the site is within the 6 kb region.'
          },
          {
            question: 'On a gel, the DNA ladder shows bands at 10 kb, 5 kb, 2 kb, and 1 kb. A sample shows a single bright band running between the 2 kb and 1 kb markers. The fragment is approximately:',
            options: [
              '1.5 kb — migration distance is inversely proportional to log(size)',
              '3 kb — midway between 2 kb and 1 kb on a linear scale',
              '0.5 kb — smaller than any marker',
              '2 kb — it co-migrates with the 2 kb marker'
            ],
            correctAnswer: 0,
            explanation: 'In agarose gel electrophoresis, migration distance is approximately proportional to -log(molecular weight). A band running between 2 kb and 1 kb markers is approximately 1.5 kb. The relationship is logarithmic, not linear.'
          }
        ]
      }
    },
    {
      id: 'dna7-pcr-text',
      type: 'text' as const,
      content: `
### PCR Calculation Problems

The AP exam frequently asks you to calculate the number of DNA copies after a given number of PCR cycles.

#### Formula Review

$$N = N_0 \\times 2^n$$

where:
- $N$ = final number of target copies
- $N_0$ = initial number of template molecules
- $n$ = number of cycles

#### Worked Example 1

**Q**: You start with 10 copies of a DNA template. After 25 cycles of PCR, how many copies of the target region will you have?

**A**: $N = 10 \\times 2^{25} = 10 \\times 33{,}554{,}432 = 335{,}544{,}320$ copies (~$3.4 \\times 10^{8}$)

#### Worked Example 2

**Q**: A forensic scientist needs at least 1 billion copies of a target sequence for analysis. Starting with 100 template molecules, what is the minimum number of PCR cycles needed?

**A**: We need $100 \\times 2^n \\geq 10^9$

$$2^n \\geq 10^7$$
$$n \\geq \\frac{\\log(10^7)}{\\log(2)} = \\frac{7}{0.301} \\approx 23.25$$

Since $n$ must be a whole number: **n = 24 cycles** minimum.

#### Common AP Traps
- Don't forget that **ALL DNA in the tube is copied each cycle**, not just the original templates.
- The first 1–2 cycles produce fragments of variable length; short, defined-length products dominate after ~cycle 3.
- The formula gives target-length products; actual total DNA includes longer fragments from early cycles.
      `
    },
    {
      id: 'dna7-quiz2',
      type: 'multiple-choice' as const,
      content: `**AP Practice — PCR Calculations** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A lab technician starts a PCR reaction with 5 template molecules. After 30 cycles, approximately how many copies of the target sequence are produced?',
            options: [
              '5 × $2^{30}$ ≈ 5.4 billion copies',
              '5 × 30 = 150 copies',
              '$2^{30}$ ≈ 1 billion copies (ignoring the starting 5)',
              '$5^{30}$ ≈ $9.3 \\times 10^{20}$ copies'
            ],
            correctAnswer: 0,
            explanation: 'Using N = $N_{0}$ × $2^{n}$: N = 5 × $2^{30}$ = 5 × 1,073,741,824 ≈ $5.4 \\times 10^{9}$ (5.4 billion). Each template molecule is independently amplified, so you multiply the starting amount by the amplification factor.'
          },
          {
            question: 'If a PCR machine runs 35 cycles but the primers have a melting temperature of 58°C, at which step\'s temperature would incorrect annealing most likely cause non-specific amplification?',
            options: [
              'If the annealing temperature is set too low (e.g., 45°C), primers may bind non-specifically',
              'If the denaturation temperature is too high (e.g., 98°C), primers will bind everywhere',
              'If the extension temperature is too long, Taq will copy non-target sequences',
              'Non-specific amplification cannot occur in PCR because primers are designed to be specific'
            ],
            correctAnswer: 0,
            explanation: 'If the annealing temperature is significantly below the primer Tm, primers can form mismatched base pairs with non-target sequences, leading to non-specific amplification. The annealing temperature is typically set 3–5°C below the primer Tm for optimal specificity.'
          }
        ]
      }
    },
    {
      id: 'dna7-crispr-text',
      type: 'text' as const,
      content: `
### CRISPR Experimental Design Questions

AP Biology FRQs may ask you to **design or evaluate** a CRISPR experiment. Here is a framework:

#### Key Elements of a CRISPR Experiment

1. **Target gene**: What gene are you editing and why?
2. **Guide RNA design**: A ~20 nt sequence complementary to the target with an adjacent PAM (5′-NGG-3′)
3. **Desired outcome**: Knockout (NHEJ) or precise edit (HDR + donor template)?
4. **Controls**:
   - **Negative control**: Cells treated with Cas9 but no gRNA (or a non-targeting gRNA)
   - **Positive control**: Cells with the known wild-type phenotype
5. **Verification**: How will you confirm the edit?
   - **PCR + gel**: Amplify the target region; size shift if large insertion/deletion
   - **Sequencing**: Confirm exact sequence change
   - **Western blot / protein assay**: Confirm protein is absent or altered

#### Sample FRQ Prompt

*"Design an experiment to test whether Gene X is required for root growth in Arabidopsis using CRISPR-Cas9."*

**Model answer outline**:
- Design a gRNA targeting an early exon of Gene X (near a PAM site)
- Deliver Cas9 + gRNA into Arabidopsis cells via Agrobacterium
- Use NHEJ to create a knockout
- **Experimental group**: CRISPR-edited plants (Gene X disrupted)
- **Control group**: Wild-type plants (or plants treated with non-targeting gRNA)
- **Measure**: Root length over 14 days under identical growth conditions
- **Verify knockout**: PCR + sequencing of the target region
- **Prediction**: If Gene X is required for root growth, edited plants will show significantly reduced root length compared to controls
      `
    },
    {
      id: 'dna7-quiz3',
      type: 'multiple-choice' as const,
      content: `**AP Practice — CRISPR Experimental Design** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A student designs a CRISPR experiment to knock out a gene in zebrafish. Which control is MOST important to include?',
            options: [
              'Zebrafish injected with Cas9 and a non-targeting gRNA (does not match any zebrafish gene)',
              'Zebrafish raised at a different temperature',
              'Zebrafish injected with only water',
              'No control is needed if the experimental group shows a clear phenotype'
            ],
            correctAnswer: 0,
            explanation: 'The best control accounts for any effects of the CRISPR delivery process itself (injection, Cas9 protein, gRNA presence) without actually editing the target gene. A non-targeting gRNA control isolates the effect of the specific gene knockout from the effects of the experimental procedure.'
          },
          {
            question: 'After a CRISPR knockout experiment, a researcher runs PCR on genomic DNA from edited and control cells. The edited cells show a band that is ~50 bp shorter than the control band. What is the most likely explanation?',
            options: [
              'NHEJ repair introduced a ~50 bp deletion at the Cas9 cut site',
              'The PCR primers failed to bind in the edited cells',
              'Cas9 removed exactly 50 bp of DNA during cutting',
              'The edited cells lost an entire chromosome'
            ],
            correctAnswer: 0,
            explanation: 'After Cas9 creates a double-strand break, NHEJ repair often introduces small insertions or deletions (indels). A PCR product ~50 bp shorter than expected indicates a deletion of approximately 50 bp at the cut site — consistent with NHEJ-mediated repair.'
          }
        ]
      }
    },
    {
      id: 'dna7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — AP Exam Review** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A heterozygous individual shows _____ band pattern(s) on an RFLP gel because both alleles are present.',
            options: ['a combined', 'a single', 'no', 'an identical']
          },
          {
            label: 'After n cycles of PCR, the number of target copies equals $N_{0}$ × _____.',
            options: ['$2^{n}$', '$n^{2}$', '2n', 'n × 2']
          },
          {
            label: 'The best negative control for a CRISPR knockout experiment uses Cas9 with a _____ gRNA.',
            options: ['non-targeting', 'double-length', 'reverse complement', 'degraded']
          },
          {
            label: 'To verify a CRISPR edit at the DNA level, researchers typically use PCR followed by _____.',
            options: ['sequencing', 'Western blot', 'ELISA', 'flow cytometry']
          }
        ],
        correctAnswers: ['a combined', '$2^{n}$', 'non-targeting', 'sequencing'],
        hint1: 'Heterozygotes carry two different alleles, each contributing its own restriction pattern to the gel.',
        hint2: 'PCR amplification is exponential — each cycle doubles the number of copies.',
        hint3: 'A non-targeting gRNA does not match any sequence in the genome, providing a true negative control.',
        explanation: 'Heterozygotes show a combined pattern from both alleles. PCR amplification follows N = $N_{0}$ × $2^{n}$ (exponential). Non-targeting gRNAs are the gold-standard negative control for CRISPR experiments. DNA sequencing confirms the exact nucleotide changes introduced by editing.'
      }
    },
    {
      id: 'dna7-summary',
      type: 'text' as const,
      content: `
### Series Summary — DNA Technology & Genomics

| Part | Topic | Key Takeaway |
|------|-------|-------------|
| 1 | Restriction enzymes & gel electrophoresis | Cut DNA at palindromic sites; separate by size |
| 2 | PCR | Exponential amplification: $N = N_0 \\times 2^n$ |
| 3 | Gene cloning & recombinant DNA | Vectors, transformation, blue-white screening |
| 4 | DNA sequencing & bioinformatics | Sanger (ddNTPs), NGS (parallel), BLAST |
| 5 | CRISPR & gene editing | Cas9 + gRNA → DSB → NHEJ or HDR |
| 6 | Genetic engineering applications | GMOs, gene therapy, transgenic organisms, ethics |
| 7 | AP exam problems | Gel interpretation, PCR math, CRISPR design |

**AP Exam Tips**:
- Always check units and math in PCR calculations
- For gel problems, remember smaller fragments migrate farther
- In CRISPR design questions, always include a proper control
- Distinguish between NHEJ (knockout) and HDR (precise edit)
- Be ready to evaluate both benefits and risks of any biotechnology application
      `
    }
  ]
};
