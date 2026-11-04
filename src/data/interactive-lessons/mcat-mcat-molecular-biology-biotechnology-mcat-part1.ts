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

1. Cut **vector** (usually a plasmid: circular, autonomously replicating, with an **origin of replication** so it is copied and passed to daughter cells, a **selectable marker** like an antibiotic-resistance gene, and a **multiple cloning site**) and **insert** with the same enzyme(s).
2. Ligate; transform into bacteria (the cells take up the plasmid).
3. **Select**: plate on the antibiotic — only plasmid-bearing cells grow.
4. **Screen** for insert-containing plasmids: classic **blue-white screening** — the cloning site interrupts lacZ, so insert-bearing colonies stay WHITE on X-gal (functional lacZ = blue = empty vector).

<!-- yield:low -->
- Bacteria are made "competent" to take up DNA by heat shock (with calcium chloride) or by electroporation.
<!-- /yield -->

**Expressing human protein in bacteria has a catch**: bacteria cannot splice. Clone the **cDNA** (reverse-transcribed from mature mRNA — intron-free), not genomic DNA, and put it behind a bacterial promoter. Insulin is the classic product. Proteins needing glycosylation or complex folding move to yeast/mammalian cells — no ER, no N-glycans in E. coli.

- **DNA libraries**: a **genomic library** holds all of an organism's DNA, including introns and noncoding regions; a **cDNA library** is made from mRNA, so it holds only the genes expressed in that tissue, with no introns — the right source for expressing eukaryotic genes in bacteria.

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

**Problem 1.** A student clones a human liver enzyme's coding sequence into a plasmid with ampicillin resistance and lacZ blue-white screening, transforms E. coli, and plates on ampicillin + X-gal. 200 colonies grow: 150 blue, 50 white.

- **(a)** What do all 200 colonies have in common, and which step guarantees it?
- **(b)** What do the 150 blue colonies carry?
- **(c)** What do the 50 white colonies carry?

**(a) Every colony has plasmid.** All 200 took up SOME plasmid: ampicillin selection killed every cell that did not.

**(b) Blue colonies.** Blue = lacZ intact = vector re-ligated on itself without insert (the dominant product when ligation conditions favor self-closure).

**(c) White colonies.** White = lacZ interrupted = insert present. Selection eliminates non-transformants; screening distinguishes insert from empty vector — two different steps answering two different questions.

**Problem 2.** The white colonies' plasmids carry the insert (confirmed by restriction digest), which was amplified from human GENOMIC DNA. The enzyme is inactive, and a western blot shows a protein LARGER than the mature human enzyme.

- **(a)** What does genomic DNA contain that mature mRNA does not?
- **(b)** Why does E. coli make an oversized, inactive protein from this insert?
- **(c)** What should the student clone instead, and how is it made?

**(a) Introns.** Genomic DNA still contains the introns that the human cell's spliceosome removes from the mature mRNA.

**(b) No splicing in bacteria.** E. coli has no spliceosome, so the introns are transcribed AND translated (until a frameshift or premature stop intervenes) — an oversized, garbled protein.

**(c) Clone cDNA.** Start from liver mRNA and reverse-transcribe it to cDNA (splicing already done by the human cell), then clone that intron-free copy.

**Problem 3.** Remade from liver mRNA, the construct yields active enzyme of the correct size in yeast. In E. coli, the same construct gives a protein of the correct backbone size that is still inactive.

- **(a)** What does the correct backbone size in E. coli rule out?
- **(b)** What is E. coli missing that yeast supplies?
- **(c)** How should a researcher choose the expression host?

**(a) The coding is fine.** Correct backbone size means the coding sequence is right — no intron or reading-frame problem remains.

**(b) Post-translational machinery.** The missing ingredient is **post-translational**: the liver enzyme evidently needs eukaryotic machinery (N-glycosylation in the ER, disulfide formation, chaperone-assisted folding). Yeast, a eukaryote, supplies it.

**(c) Host choice.** Host choice is a real experimental variable: bacteria for cheap simple proteins, eukaryotic systems for modified ones.

**Problem 4.** A second construct is amplified with primers that start at the mature protein's first codon, omitting the native signal sequence. In yeast, none of the enzyme reaches the medium.

- **(a)** Where does the enzyme stay, and why?
- **(b)** What sequence must be added to the construct, and at which end of the ORF?

**(a) Stuck in the cytosol.** With no ER-targeting signal, the protein is made on free ribosomes, so it stays in the cytosol (and is never glycosylated) — Organelles Part 2 crossover.

**(b) Add a signal peptide.** A **signal peptide** coding sequence at the 5' end of the ORF. Constructs are modular: promoter, signal, ORF, tag — each function needs its module.`
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
            yield: 'HIGH',
            explanation: `A circle has no free ends: the first cut linearizes (still one piece), and each additional cut adds one fragment — so n cuts give n fragments for circular DNA, versus n+1 for linear DNA. Three sites, three fragments. Gel questions build on this: if a "three-site" plasmid digest shows four bands, suspect a fourth site or partial digestion. Draw the circle and cut it; never answer fragment-counting from memory alone.`
          },
          {
            question: `A researcher aligns a human gene's cDNA with the same gene's genomic sequence. Several long stretches present in the genomic copy are missing from the cDNA because:`,
            options: [`cDNA was copied by a lower-fidelity polymerase`, `Genomic DNA was damaged during its extraction`, `cDNA comes from mRNA, after introns were spliced out`, `cDNA loses repeated regions during cloning`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Reverse transcriptase copies MATURE mRNA, after the spliceosome has already removed the introns, so cDNA carries only the exons while the genomic copy keeps every intron — aligning the two maps the introns exactly. The same fact is why bacteria are given cDNA, not the genomic gene, to make a human protein such as insulin: E. coli has no spliceosome and would translate the introns into nonsense. Polymerase errors change single bases rather than deleting long stretches, and extraction damage would not remove the same segments reproducibly.`
          },
          {
            question: `After a blue-white cloning experiment, a student plates the transformed cells on ampicillin but forgets to add X-gal. The colonies that grow will be:`,
            options: [`All blue, since lacZ is still expressed in empty vectors`, `Absent, since the cells need X-gal in order to grow`, `Blue and white in the usual 3:1 ratio`, `All white, since nothing makes the blue product`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `The blue color is the product of beta-galactosidase cleaving X-gal. With no X-gal on the plate, even empty-vector colonies with intact lacZ have nothing to turn blue, so every colony is white and the screen is lost. Growth is unaffected: ampicillin, not X-gal, is the selection, so plasmid-bearing cells still form colonies. On a proper plate, white means the insert disrupted lacZ and blue means empty vector — keep the selection (antibiotic) and the screen (X-gal) as two distinct steps, as exam questions deliberately blur them.`
          },
          {
            question: `PCR uses Taq polymerase rather than ordinary E. coli DNA polymerase because Taq:`,
            options: [`Survives the repeated ~95 C denaturation steps`, `Requires no primers to begin synthesis`, `Can synthesize DNA in the 3' to 5' direction`, `Proofreads more accurately than any other polymerase`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `The thermostability of Thermus aquaticus polymerase is what made PCR automatable: mesophilic polymerases denature at the strand-separation temperature and originally had to be replenished each cycle by hand. Taq still obeys every polymerase law — 5' to 3' synthesis, absolute primer dependence (the reaction supplies synthetic primers precisely because of it) — and in fact LACKS 3' to 5' proofreading, which is why high-fidelity proofreading thermostable enzymes replaced it for cloning where sequence accuracy matters.`
          },
          {
            question: `Starting from 10 copies of a template, roughly how many double-stranded copies exist after 10 PCR cycles at perfect efficiency?`,
            options: [`About 100 (10 times 10 cycles)`, `About 1,000 (10 times 10 to the 2nd)`, `About 10,000 (10 times 2 to the 10th)`, `About 110 (10 plus 10 per cycle)`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Each cycle doubles every existing copy: final = initial times 2 to the n. Ten cycles multiply by 2^10 = 1,024, so 10 templates become ~10,240. The MCAT rewards the estimate, not the exact integer — know 2^10 is about 10^3, so 30 cycles multiply by about 10^9 (2^30). Linear thinking (10 plus 10 per cycle) is the planted error; amplification is exponential, which is also why single-molecule contamination ruins forensic PCR.`
          }
        ]
      }
    },
    {
      id: 'biot1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Sticky-end cloning.** Same-enzyme sticky ends anneal and ligase seals them; n sites cut a circle into n pieces, a line into n+1.
- **Select, then screen.** The antibiotic selects cells with plasmid; blue-white screens for the insert (white = lacZ interrupted).
- **Clone cDNA for bacteria.** Bacteria cannot splice, so express intron-free cDNA; use yeast or mammalian hosts for modified proteins.
- **PCR doubles each cycle.** Denature ~95 C, anneal ~55 C, extend ~72 C with heat-stable Taq; copies = start times $2^n$.

**Common traps**

- **Selection as screening.** The antibiotic only removes plasmid-free cells; the blue-white screen finds the insert, and white is success.
- **PCR needing helicase or primase.** Heat separates the strands and synthetic primers replace primase; Taq also cannot proofread.
- **Linear amplification.** PCR multiplies by 2 each cycle: 10 copies after 10 cycles is about 10,000, not 110.
- **A late Ct as more template.** An earlier threshold cycle means MORE starting template, not less.

<!-- yield:low -->
**Low-yield extras**

- Bacteria are made competent for transformation by heat shock or electroporation.
<!-- /yield -->`
    }
  ]
};
