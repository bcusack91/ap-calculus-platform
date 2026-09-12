export const mcatTranscriptionPart4Data = {
  topicSlug: 'mcat-molecular-biology-transcription-mcat',
  sections: [
    {
      id: 'txn4-intro',
      type: 'text' as const,
      content: `# Transcription for the MCAT

**Part 4 of 4 — Reading Transcription Experiments & MCAT Integration**

### The Question Behind Every Technique

Transcription passages hand you data from a small toolkit. Know what QUESTION each answers:

| Technique | Question it answers | Readout |
|-----------|--------------------|---------|
| Northern blot | How much of a specific RNA, and what size? | Bands: intensity = amount, position = length (splicing variants!) |
| RT-qPCR | How much of a specific transcript, precisely? | Amplification cycles: fewer cycles to threshold = more starting mRNA |
| Reporter assay | Does this DNA element drive/regulate transcription? | Luciferase or GFP output from the element fused to a reporter gene |
| ChIP (chromatin immunoprecipitation) | Is protein X bound to DNA site Y in living cells? | Antibody pulls down the protein with its crosslinked DNA; PCR asks which sequences came along |
| EMSA (gel shift) | Does protein X bind DNA sequence Y in a tube? | Bound probe migrates slower — the band "shifts" up |
| Nuclear run-on | Is regulation at transcription itself or at mRNA stability? | Labels only RNAs being actively transcribed at that moment |

**The run-on distinction matters**: steady-state mRNA (northern/qPCR) = synthesis MINUS decay. If a treatment doubles mRNA but run-on shows unchanged transcription, the treatment stabilized the mRNA — a stability story wearing a transcription costume.

### Reporter Dissection — The Standard Puzzle Format

Fuse candidate DNA fragments to luciferase; measure light:

- Full promoter region: 100% activity
- Delete segment A: activity drops to 5% — segment A contains an essential element (or the core promoter)
- Delete segment B: activity RISES to 300% — segment B contains a **silencer**
- Move segment C 2 kb away or flip it: activity unchanged — orientation/distance independence marks C as an **enhancer**

### Integration Rules for Passage Day

1. **Locate the level**: DNA element (cis) vs protein factor (trans) vs chromatin state vs RNA stability — each has a diagnostic experiment (reporter, expression rescue, ChIP for histone marks, run-on).
2. **In-vitro binding is not in-vivo function**: EMSA shows CAN bind; ChIP shows IS bound; the reporter shows binding DOES something. Strong passages stack all three — track which claim each figure supports.
3. **Kinetics order the cascade**: after a stimulus, transcription factors activate in minutes (pre-existing protein, phosphorylation), immediate-early mRNAs rise in ~15-30 min, protein products follow, and secondary target genes rise only after those proteins accumulate. A gene needing new protein synthesis to respond (blocked by cycloheximide) is a SECONDARY response gene.
4. **Controls are answers**: the no-antibody ChIP lane, the empty reporter vector, the scrambled probe in EMSA — when a question asks "why include X," name the artifact X rules out.`
    },
    {
      id: 'txn4-worked',
      type: 'text' as const,
      content: `### Worked Example — A Hormone-Response Passage, Assembled

**Passage-style problem.** A steroid hormone induces gene G in liver cells. Researchers gather four results:

- **Fig 1 (RT-qPCR)**: G mRNA rises 20-fold within 60 minutes of hormone; the rise persists when cycloheximide (a translation inhibitor) is present.
- **Fig 2 (nuclear run-on)**: transcription of G increases 20-fold with hormone — matching the mRNA rise.
- **Fig 3 (ChIP with anti-receptor antibody)**: hormone treatment causes the receptor to be recovered with a DNA region 3 kb upstream of G; no recovery without hormone, and none at a control locus.
- **Fig 4 (reporter)**: the 3 kb-upstream fragment fused to luciferase confers hormone responsiveness; deleting a 15 bp palindrome within it abolishes the response.

**Question 1 — Primary or secondary response gene?** Primary. Cycloheximide blocks synthesis of NEW protein; since induction survives it, everything required (the receptor) pre-existed. Secondary response genes — needing a freshly made transcription factor — would be silenced by cycloheximide. One drug cleanly cuts the cascade in two.

**Question 2 — What does each figure contribute that the others cannot?** Fig 1: the transcript accumulates (but cannot say why). Fig 2: because synthesis increased — not stability (run-on isolates the synthesis term). Fig 3: the receptor is physically at the upstream site in vivo, hormone-dependently. Fig 4: that site is FUNCTIONAL — it converts hormone into transcription, and the 15 bp palindrome is the responsible element (a hormone response element; palindromic because the receptor binds as a dimer). Amount, mechanism, occupancy, function — four claims, four techniques.

**Question 3 — Predict: receptor mutant that binds hormone but cannot dimerize.** ChIP recovery lost (weak/no binding to the palindromic HRE), reporter response lost, G induction lost — but the mutant is trans-acting, so supplying wild-type receptor restores everything. Conversely, deleting the HRE in the genome is cis: no amount of good receptor rescues gene G, though other hormone targets respond normally.

**The template generalizes**: every regulation passage is these four claims in some order. Name which claim a figure makes before answering anything about it.`
    },
    {
      id: 'txn4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Transcription Experiments** 🎯`,
      exercise: {
        questions: [
          {
            question: `A treatment triples the steady-state level of an mRNA, but nuclear run-on assays show no change in its transcription rate. The best interpretation is that the treatment:`,
            options: [`Slowed degradation of the existing mRNA`, `Activated the gene's enhancer elements`, `Recruited more RNA polymerase to the promoter`, `Amplified the gene's copy number in the genome`],
            correctAnswer: 0,
            explanation: `Steady-state mRNA is a bathtub level set by faucet (synthesis) and drain (decay). Run-on measures the faucet directly and found it unchanged, so the drain must have narrowed: stabilization. Enhancer activation or polymerase recruitment would have raised the run-on signal. This synthesis-vs-stability dissection is the single most common analytical trap in transcription passages — never infer "transcriptional activation" from steady-state levels alone.`
          },
          {
            question: `In a ChIP experiment for transcription factor X at promoter P, the essential control demonstrating that DNA recovery depends on the antibody's specific target is:`,
            options: [`Doubling the amount of specific antibody`, `Sonicating the chromatin into smaller fragments`, `An identical sample with a nonspecific IgG antibody`, `PCR at promoter P with more amplification cycles`],
            correctAnswer: 2,
            explanation: `ChIP's central artifact is nonspecific pulldown — sticky chromatin riding along with beads regardless of antibody. The no-antibody/isotype control quantifies exactly that background; specific enrichment is signal ABOVE it. (A second useful control is PCR at an unrelated locus, testing site specificity rather than antibody specificity — know which control answers which doubt.) More antibody or more PCR cycles amplify background and signal alike, proving nothing.`
          },
          {
            question: `An EMSA shows that purified protein R shifts a labeled DNA probe containing sequence S. Which conclusion goes beyond what this experiment can support?`,
            options: [`R can bind DNA containing S in vitro`, `R activates transcription of genes near S in living cells`, `The R-probe complex migrates more slowly than free probe`, `R and the S probe form a complex stable enough to run through a gel`],
            correctAnswer: 1,
            explanation: `A gel shift is a binding assay in a tube: it establishes physical interaction (and, with cold-competitor and mutant-probe lanes, its specificity) — nothing more. Whether R ever reaches that site through chromatin in a cell (ChIP's question) or changes transcription when it does (the reporter's question) are separate claims needing separate data. MCAT answer choices routinely smuggle in-vivo function into in-vitro binding results; police the boundary.`
          },
          {
            question: `Gene A's induction by a growth factor is unaffected by cycloheximide, while gene B's induction is completely blocked by it. The relationship between the genes is most likely that:`,
            options: [`Gene B's mRNA is less stable than gene A's`, `Gene A is induced by transcription, gene B by mRNA stabilization`, `Both are primary response genes with different kinetics`, `A is a primary response gene; B is a secondary response gene`],
            correctAnswer: 3,
            explanation: `Cycloheximide freezes the proteome: anything inducible under it uses only pre-existing proteins (primary response — e.g., phosphorylation of a waiting factor), while anything blocked needed new protein made first (secondary response). The classic architecture is a cascade: primary gene products (like Fos/Jun) are themselves transcription factors for secondary genes. If gene B were blocked, suspect gene A's product as its activator — cascades are the point of the two-tier design.`
          },
          {
            question: `A reporter construct containing a gene's upstream region produces strong luciferase signal. Deleting a 200 bp internal segment INCREASES the signal fourfold. The deleted segment most likely contained:`,
            options: [`The TATA box of the core promoter`, `A silencer bound by a repressor`, `The luciferase coding sequence`, `An enhancer bound by activators`],
            correctAnswer: 1,
            explanation: `Read deletions by their direction of effect: removing an ACTIVATING element (enhancer, core promoter) drops output — deleting the TATA box would nearly abolish it — while removing a REPRESSIVE element releases the brake and output rises. A fourfold gain means the segment was restraining transcription: a silencer. Deleting luciferase itself would kill all signal. This up-means-brake, down-means-gas rule solves reporter-dissection figures almost mechanically.`
          }
        ]
      }
    },
    {
      id: 'txn4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Map technique to claim: northern/RT-qPCR = how much RNA (steady state); run-on = synthesis rate; reporter = element function; ChIP = in-vivo occupancy; EMSA = in-vitro binding
- Steady state = synthesis minus decay: mRNA up with flat run-on means stabilization, not activation
- Reporter deletion logic: activity down = removed activator/core element; activity up = removed silencer; distance/orientation independence = enhancer
- Binding is three separate claims — CAN bind (EMSA), IS bound (ChIP), MATTERS (reporter) — never let one stand in for another
- Cycloheximide splits cascades: induction that survives it = primary response (pre-existing factors); induction it blocks = secondary response (needs a newly made protein, often the primary gene's product)
- Controls name artifacts: no-antibody ChIP (nonspecific pulldown), control locus (site specificity), empty vector (baseline), cold competitor (binding specificity)
- Cis lesions (deleted response elements) cannot be rescued in trans; factor mutations can — the rescue experiment assigns the level of every defect`
    }
  ]
};
