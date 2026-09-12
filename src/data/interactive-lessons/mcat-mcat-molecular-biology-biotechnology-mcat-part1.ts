export const mcatBiotechnologyPart1Data = {
  topicSlug: 'mcat-molecular-biology-biotechnology-mcat',
  sections: [
    {
      id: 'biot1-intro',
      type: 'text' as const,
      content: `# Biotechnology for the MCAT

**Part 1 of 4 — Cutting, Pasting & Copying: Restriction Enzymes, Cloning & PCR**

### Restriction Enzymes — Molecular Scissors with Addresses

- Bacterial defense enzymes (paired with methylases that protect the host's own sites) that cut DNA at specific **palindromic** recognition sequences — read the same 5' to 3' on both strands (EcoRI: GAATTC).
- **Sticky ends**: staggered cuts leave complementary single-stranded overhangs — any two fragments cut by the SAME enzyme can anneal, regardless of source ("recombinant"). **Blunt ends**: straight cuts, ligatable but inefficient and unselective.
- **DNA ligase** seals the annealed fragments with real phosphodiester bonds — the paste to the scissors.
- Fragment counting: a LINEAR molecule with n cut sites yields n+1 fragments; a CIRCULAR molecule (plasmid) with n sites yields n fragments. Expect arithmetic.

### Cloning a Gene — The Assembly Line

1. Cut **vector** (usually a plasmid: circular, autonomously replicating, with an **origin of replication**, a **selectable marker** like an antibiotic-resistance gene, and a **multiple cloning site**) and **insert** with the same enzyme(s).
2. Ligate; transform into bacteria (heat shock/electroporation makes them competent).
3. **Select**: plate on the antibiotic — only plasmid-bearing cells grow.
4. **Screen** for insert-containing plasmids: classic **blue-white screening** — the cloning site interrupts lacZ, so insert-bearing colonies stay WHITE on X-gal (functional lacZ = blue = empty vector).

**Expressing human protein in bacteria has a catch**: bacteria cannot splice. Clone the **cDNA** (reverse-transcribed from mature mRNA — intron-free), not genomic DNA, and put it behind a bacterial promoter. Insulin is the classic product. Proteins needing glycosylation or complex folding move to yeast/mammalian cells — no ER, no N-glycans in E. coli.

### PCR — Copying Without Cells

Each cycle, three temperature steps:

| Step | Temp | Event |
|------|------|-------|
| Denature | ~95 C | Strands separate |
| Anneal | ~50-65 C | Two PRIMERS bind opposite strands, flanking the target |
| Extend | ~72 C | **Taq polymerase** (thermostable, from Thermus aquaticus — survives the 95 C step) synthesizes 5' to 3' |

- Amplification is exponential: ~$2^n$ copies after n cycles (30 cycles = ~$10^9$).
- Primers define the product: they bind the 3' ends of the target region ON THE TEMPLATE strands so synthesis runs INTO the target. Primer design questions = reverse-complement bookkeeping.
- Everything the reaction needs is in the tube: template, primers, dNTPs, Taq, Mg$^{2+}$ — no helicase (heat unwinds), no primase (primers supplied), no ligase (products are continuous).
- Variants to recognize: **RT-PCR** (reverse transcriptase first — amplify from mRNA), **qPCR** (fluorescence each cycle quantifies starting material: earlier threshold = more template).`
    },
    {
      id: 'biot1-worked',
      type: 'text' as const,
      content: `### Worked Example — A Cloning Experiment That Fails Informatively

**Passage-style problem.** A student clones a human liver enzyme's coding sequence into a plasmid carrying ampicillin resistance and lacZ-based blue-white screening, transforms E. coli, and plates on ampicillin + X-gal.

- **Observation 1**: 200 colonies grow; 150 blue, 50 white.
- **Observation 2**: white colonies contain plasmid with insert (confirmed by restriction digest), but the enzyme is inactive, and western blot shows a protein LARGER than the mature human enzyme.
- **Observation 3**: repeating the project with a construct made from liver mRNA yields active enzyme of correct size — but only when expressed in yeast, not in E. coli, where the protein is correct in backbone size yet still inactive.

**Question 1 — Interpret the blue vs white colonies.** All 200 took up SOME plasmid (ampicillin selection). Blue = lacZ intact = vector re-ligated on itself without insert (the dominant product when ligation conditions favor self-closure); white = lacZ interrupted = insert present. Selection eliminates non-transformants; screening distinguishes insert from empty vector — two different steps answering two different questions.

**Question 2 — Why is the first insert's protein too large and dead? (It was amplified from GENOMIC DNA.)** Genomic DNA contains introns. E. coli has no spliceosome, so introns are transcribed AND translated (until a frameshift or premature stop intervenes) — an oversized, garbled protein. The fix in Observation 3: start from mRNA, reverse-transcribe to cDNA (splicing already done by the human cell), then clone.

**Question 3 — Why does the cDNA product work in yeast but not E. coli?** Correct backbone size in E. coli means the coding is fine — the missing ingredient is **post-translational**: the liver enzyme evidently needs eukaryotic machinery (N-glycosylation in the ER, disulfide formation, chaperone-assisted folding). Yeast, a eukaryote, supplies it. Host choice is a real experimental variable: bacteria for cheap simple proteins, eukaryotic systems for modified ones.

**Question 4 — The student's primers amplified the coding sequence but the yeast strain secretes none of the enzyme into the medium. What sequence must be added to the construct?** A **signal peptide** coding sequence at the 5' end of the ORF — without an ER-targeting signal, the protein stays cytosolic (Organelles Part 2 crossover). Constructs are modular: promoter, signal, ORF, tag — each function needs its module.`
    },
    {
      id: 'biot1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cloning & PCR** 🎯`,
      exercise: {
        questions: [
          {
            question: `A circular plasmid is digested with an enzyme that has three recognition sites on it. Complete digestion produces:`,
            options: [`Four fragments`, `Three fragments`, `Two fragments`, `One linearized fragment`],
            correctAnswer: 1,
            explanation: `A circle has no free ends: the first cut linearizes (still one piece), and each additional cut adds one fragment — so n cuts give n fragments for circular DNA, versus n+1 for linear DNA. Three sites, three fragments. Gel questions build on this: if a "three-site" plasmid digest shows four bands, suspect a fourth site or partial digestion. Draw the circle and cut it; never answer fragment-counting from memory alone.`
          },
          {
            question: `To produce functional human insulin in E. coli, researchers clone cDNA rather than the genomic insulin gene because:`,
            options: [`cDNA includes stronger bacterial promoters`, `Genomic DNA is too chemically unstable to clone`, `Bacteria lack splicing machinery, and cDNA — copied from mature mRNA — is already intron-free`, `cDNA is double-stranded while genomic DNA is single-stranded`],
            correctAnswer: 2,
            explanation: `The eukaryotic gene is interrupted by introns that only a spliceosome can remove; E. coli would faithfully transcribe and translate the introns into nonsense. Reverse transcriptase run on mature mRNA (primed off the poly-A tail with oligo-dT) captures the post-splicing sequence — exactly the protein-coding information, nothing else. This single fact — cDNA = snapshot of the mature transcript — also explains why comparing cDNA to genomic DNA reveals where the introns were.`
          },
          {
            question: `In blue-white screening, colonies containing the desired recombinant plasmid appear white because:`,
            options: [`The antibiotic-resistance gene produces a white pigment`, `White colonies failed to take up any plasmid`, `X-gal stains the insert DNA directly`, `The inserted DNA disrupts the lacZ gene, so the colony cannot cleave X-gal into its blue product`],
            correctAnswer: 3,
            explanation: `The multiple cloning site sits INSIDE lacZ by design: ligating an insert there breaks the beta-galactosidase reading frame, and no functional enzyme means no blue X-gal cleavage product — white signals success. Blue colonies carry re-circularized empty vector with lacZ intact. Cells with no plasmid at all never appear: ampicillin killed them (option B confuses the screen with the selection — keep those two steps distinct, as exam questions deliberately blur them).`
          },
          {
            question: `PCR uses Taq polymerase rather than ordinary E. coli DNA polymerase because Taq:`,
            options: [`Remains active after the repeated ~95 C denaturation steps, so fresh enzyme need not be added every cycle`, `Requires no primers`, `Can synthesize DNA in the 3' to 5' direction`, `Proofreads more accurately than any other polymerase`],
            correctAnswer: 0,
            explanation: `The thermostability of Thermus aquaticus polymerase is what made PCR automatable: mesophilic polymerases denature at the strand-separation temperature and originally had to be replenished each cycle by hand. Taq still obeys every polymerase law — 5' to 3' synthesis, absolute primer dependence (the reaction supplies synthetic primers precisely because of it) — and in fact LACKS 3' to 5' proofreading, which is why high-fidelity thermostable enzymes (Pfu) replaced it for cloning where sequence accuracy matters.`
          },
          {
            question: `Starting from 10 copies of a template, roughly how many double-stranded copies exist after 10 PCR cycles at perfect efficiency?`,
            options: [`100`, `1,000`, `About 10,000 (10 times 2 to the 10th)`, `About 20 (10 plus 10)`],
            correctAnswer: 2,
            explanation: `Each cycle doubles every existing copy: final = initial times 2 to the n. Ten cycles multiply by 2^10 = 1,024, so 10 templates become ~10,240. The MCAT rewards the estimate, not the exact integer — know 2^10 is about 10^3, so 30 cycles multiply by about 10^9 (2^30). Linear thinking (option D) is the planted error; amplification is exponential, which is also why single-molecule contamination ruins forensic PCR.`
          }
        ]
      }
    },
    {
      id: 'biot1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Restriction enzymes cut palindromes; sticky ends anneal any same-enzyme fragments; ligase seals; count fragments as n (circular) vs n+1 (linear)
- Cloning pipeline: cut vector + insert with the same enzyme, ligate, transform, SELECT with antibiotic (who has plasmid), SCREEN blue-white (who has insert — white = interrupted lacZ = success)
- Vector anatomy: origin of replication, selectable marker, multiple cloning site; constructs are modular (promoter, signal peptide, ORF, tag)
- Express human proteins from cDNA (reverse-transcribed mRNA, intron-free) because bacteria cannot splice; move to yeast/mammalian hosts when glycosylation or complex folding is required
- PCR: denature ~95 C, anneal primers ~55 C, extend ~72 C with thermostable Taq; heat replaces helicase, supplied primers replace primase; no proofreading in Taq
- Amplification = initial times 2 to the n; 2^10 is about 10^3 — estimate, do not compute
- qPCR quantifies (earlier threshold = more starting template); RT-PCR reaches back to mRNA via reverse transcriptase`
    }
  ]
};
