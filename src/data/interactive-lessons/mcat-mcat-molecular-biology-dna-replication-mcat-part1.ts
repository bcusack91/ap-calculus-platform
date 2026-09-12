export const mcatDnaReplicationPart1Data = {
  topicSlug: 'mcat-molecular-biology-dna-replication-mcat',
  sections: [
    {
      id: 'dnar1-intro',
      type: 'text' as const,
      content: `# DNA Replication for the MCAT

**Part 1 of 4 — DNA Structure & the Semiconservative Logic**

### The Molecule You Are Copying

- **Nucleotide** = nitrogenous base + deoxyribose + phosphate(s). Base + sugar alone = nucleoside. Purines (**A**denine, **G**uanine) are two-ringed; pyrimidines (**C**ytosine, **T**hymine, and uracil in RNA) are one-ringed. Mnemonic check: purines are the bigger word class with the smaller letter count of members.
- **Base pairing**: A pairs T via **2 hydrogen bonds**; G pairs C via **3**. Consequence: GC-rich DNA has a **higher melting temperature** ($T_m$) — more heat to separate strands. Every pairing is purine + pyrimidine, keeping helix width constant (~2 nm).
- **Chargaff's rules**: in double-stranded DNA, %A = %T and %G = %C. A virus with %A different from %T must have **single-stranded** genetic material — a classic trap.
- **Directionality**: the sugar-phosphate backbone links the 3' hydroxyl of one sugar to the 5' phosphate of the next (**phosphodiester bonds**). The two strands are **antiparallel**: one runs 5' to 3', its partner 3' to 5'. Sequences are written 5' to 3' by convention.
- **Why DNA and not RNA for storage**: deoxyribose lacks the 2'-OH that makes RNA alkali-labile and prone to self-cleavage; thymine (methylated uracil) lets repair systems recognize deaminated cytosine (which becomes uracil) as damage.

### Helix Geometry & Packaging

- B-DNA: right-handed double helix, major and minor grooves; sequence-specific proteins (transcription factors) mostly read the **major groove**.
- Eukaryotic packaging: DNA wraps ~1.7 turns around a **histone octamer** (2 each of H2A, H2B, H3, H4) forming a nucleosome; H1 seals the linker. Histones are **lysine/arginine-rich (positively charged)** to bind the polyanionic backbone — acetylation neutralizes that charge and loosens packing (regulation lesson crossover).
- **Heterochromatin** = dense, transcriptionally quiet; **euchromatin** = open, active. Replication must transiently displace and then restore this packaging.

### The Central Question of 1958: How Does Copying Distribute Old Strands?

Three hypotheses were on the table:

| Model | Prediction after one round |
|-------|----------------------------|
| Conservative | One all-old double helix + one all-new |
| Semiconservative | Every helix = one old strand + one new strand |
| Dispersive | Every strand is a patchwork of old and new |

**Meselson and Stahl** settled it with density labeling — the worked example below walks the actual logic, because the MCAT re-runs this experiment constantly with new labels.`
    },
    {
      id: 'dnar1-worked',
      type: 'text' as const,
      content: `### Worked Example — Meselson-Stahl, Read Like a Passage

**Setup.** E. coli are grown for many generations in medium containing heavy nitrogen ($^{15}N$), so all DNA is "heavy." Cells are then switched to light $^{14}N$ medium, and DNA is extracted after each generation and spun in a cesium chloride density gradient, where DNA bands at the position matching its density.

**Generation 1 result**: a single band at **intermediate** (hybrid) density.

**Question 1 — Which model does generation 1 eliminate?** Conservative replication predicted TWO bands (one heavy, one light). One hybrid band kills conservative — but note it does NOT yet distinguish semiconservative from dispersive, since both predict all molecules contain old and new material after round one. Recognizing what an experiment has NOT yet excluded is a signature MCAT move.

**Question 2 — Generation 2 shows two bands: one hybrid, one light, in equal amounts. Which model survives?** Semiconservative. Each hybrid molecule from generation 1 separates into one old ($^{15}N$) and one new ($^{14}N$) template; the old template rebuilds a hybrid, the new template builds an all-light molecule. Dispersive predicted a SINGLE band drifting progressively lighter — never two discrete bands.

**Question 3 — Predict generation 3.** Hybrid molecules stay constant in number (the original heavy strands are immortal templates, one per molecule) while light molecules multiply: 1/4 hybrid, 3/4 light. In general after n generations the hybrid fraction is $1/2^{n-1}$ — the two original strands never disappear, they just get diluted among descendants.

**Transfer test**: a passage that pulse-labels with BrdU or radioactive thymidine and asks which strands carry label is the same puzzle in new clothes. Always draw the strands, mark old vs new, and count.`
    },
    {
      id: 'dnar1-quiz1',
      type: 'multiple-choice' as const,
      content: `**DNA Structure & Replication Models** 🎯`,
      exercise: {
        questions: [
          {
            question: `Analysis of a viral genome shows 32% adenine, 18% thymine, 24% guanine, and 26% cytosine. The best conclusion is that the genome is:`,
            options: [`Double-stranded DNA with unusual base modifications`, `Single-stranded DNA, since A does not equal T and G does not equal C`, `Double-stranded RNA`, `Contaminated, since these percentages are chemically impossible`],
            correctAnswer: 1,
            explanation: `Chargaff's equalities (%A = %T, %G = %C) are forced by complementary base pairing, so they hold ONLY for double-stranded nucleic acids. Violation means single-stranded material; the presence of thymine (not uracil) says DNA. Single strands have no pairing constraint, so any composition is possible — nothing is "impossible" about the numbers, and dsRNA would show A = U anyway.`
          },
          {
            question: `Two DNA duplexes of equal length are melted by gradual heating. Duplex 1 separates at a noticeably higher temperature than Duplex 2. The most direct explanation is that Duplex 1:`,
            options: [`Has a higher GC content, since each GC pair contributes three hydrogen bonds versus two for AT`, `Contains more phosphodiester bonds`, `Is single-stranded`, `Has a higher AT content, since AT pairs stack more tightly`],
            correctAnswer: 0,
            explanation: `Melting separates the strands by disrupting hydrogen bonding and base stacking; GC pairs (3 H-bonds, stronger stacking) raise the melting temperature. Equal length means equal numbers of phosphodiester bonds — and those covalent backbone bonds are not broken by melting at all. This structure-to-thermodynamics link also predicts that replication origins tend to be AT-rich: easier to open.`
          },
          {
            question: `In the Meselson-Stahl experiment, the single intermediate-density band observed after one generation ruled out conservative replication but not dispersive. Which later observation eliminated the dispersive model?`,
            options: [`The intermediate band grew progressively heavier over time`, `All DNA became heavy again when cells were returned to heavy medium`, `Generation 2 produced two discrete bands (hybrid and light) rather than one band of gradually decreasing density`, `The hybrid band disappeared entirely at generation 2`],
            correctAnswer: 2,
            explanation: `Dispersive replication scatters old fragments through BOTH daughter strands, so every molecule in every generation would be a uniform blend — one band, drifting lighter each round. Semiconservative replication keeps each old strand intact, producing discrete classes: hybrid molecules (one old strand) and fully light molecules. Two clean bands at generation 2 is exactly the discreteness dispersive cannot produce; the hybrid band persists (it does not disappear), diluting to 1/4 of molecules.`
          },
          {
            question: `A repair enzyme finds a uracil base in one strand of a cell's DNA. This uracil most likely arose from:`,
            options: [`Normal incorporation, since uracil is a standard DNA base`, `Depurination of an adenine`, `Methylation of a thymine`, `Spontaneous deamination of cytosine, which repair systems can flag precisely because DNA normally uses thymine`],
            correctAnswer: 3,
            explanation: `Cytosine deaminates spontaneously to uracil, which would pair with adenine and fix a C-to-T mutation at the next replication. Because DNA uses thymine (5-methyluracil) as its standard base, any uracil in DNA is unambiguously damage — this is the accepted rationale for why DNA evolved thymine. Depurination removes a base leaving an abasic site (no uracil appears), and methylating thymine does not produce uracil; demethylation is not a typical spontaneous route.`
          },
          {
            question: `One strand of a duplex reads 5'-ATGCCG-3'. Its complementary strand, written in conventional 5' to 3' orientation, is:`,
            options: [`5'-TACGGC-3'`, `5'-CGGCAT-3'`, `5'-GCCGTA-3'`, `5'-ATGCCG-3'`],
            correctAnswer: 1,
            explanation: `Two operations, in order: complement each base (A-T, G-C) to get 3'-TACGGC-5', then reverse it to honor the 5' to 3' writing convention: 5'-CGGCAT-3'. Choice A is the complement WITHOUT reversal — the single most common error on this question type. Always do the reverse-complement as two explicit steps and label the ends before answering.`
          }
        ]
      }
    },
    {
      id: 'dnar1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Nucleotide = base + deoxyribose + phosphate; purines (A, G) pair with pyrimidines (T, C); A-T = 2 H-bonds, G-C = 3, so GC content raises melting temperature and origins are AT-rich
- Chargaff (%A = %T, %G = %C) holds only for double-stranded genomes — composition data diagnose strandedness
- Strands are antiparallel with phosphodiester backbones; sequences are written 5' to 3'; reverse-complement in two explicit steps
- Thymine instead of uracil lets cells recognize deaminated cytosine (uracil in DNA) as damage; the 2'-OH absent in deoxyribose makes DNA more stable than RNA
- Packaging: nucleosome = DNA around a histone octamer (positively charged lysine/arginine tails); acetylation loosens, heterochromatin silences
- Meselson-Stahl: one hybrid band at generation 1 kills conservative; two discrete bands (hybrid + light) at generation 2 kills dispersive; hybrid fraction = 1 over 2 to the (n-1) as original strands dilute
- Passage skill: state explicitly which models each observation excludes — early data often eliminate fewer hypotheses than they seem to`
    }
  ]
};
