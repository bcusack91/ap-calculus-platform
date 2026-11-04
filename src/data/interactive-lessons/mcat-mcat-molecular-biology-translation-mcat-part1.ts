export const mcatTranslationPart1Data = {
  topicSlug: 'mcat-molecular-biology-translation-mcat',
  sections: [
    {
      id: 'tln1-intro',
      type: 'text' as const,
      content: `# Translation for the MCAT

**Part 1 of 4 — The Genetic Code & tRNA**

### Properties of the Code (Each One Is a Question Type)

- **Triplet**: 3 bases = 1 codon; 64 codons cover 20 amino acids + stop.
- **Degenerate (redundant)**: most amino acids have multiple codons — usually differing at the THIRD position. Consequence: many third-position mutations are **silent**.
- **Unambiguous**: one codon never means two amino acids.
- **Nonoverlapping & comma-free**: read 3 at a time from a fixed start; no punctuation between codons. Consequence: insertions/deletions not in multiples of 3 shift the frame for everything downstream.
- **Nearly universal**: mitochondria and a few organisms deviate slightly — the standard exception clause.
- **Start**: **AUG** (methionine) sets the reading frame. **Stops**: **UAA, UAG, UGA** — no tRNA reads them (release factors do).
- Reading frame: any mRNA has 3 possible frames; the AUG chosen fixes which one is real. Passages that shift a start site are testing whether you re-read the frame.

### tRNA — The Adapter

- Cloverleaf secondary structure, L-shaped 3D structure; two business ends:
  - **Anticodon** (bottom loop): base-pairs with the mRNA codon, **antiparallel** — codon 5'-AUG-3' pairs anticodon 3'-UAC-5'.
  - **3' CCA acceptor end**: the amino acid is esterified to the terminal A's ribose — a **high-energy ester bond** whose hydrolysis later powers peptide bond formation.
- **Wobble**: the codon's third base pairs loosely with the anticodon's first (5') base — nonstandard pairs such as G-U are allowed. One tRNA can read several synonymous codons; this is WHY the code's redundancy concentrates at position 3, and why cells need far fewer tRNA species than the 61 sense codons.

<!-- yield:low -->
- Inosine, a modified base at the anticodon's wobble position, pairs with U, C or A — which is how roughly 40 tRNA species cover all 61 sense codons.
<!-- /yield -->

### Aminoacyl-tRNA Synthetases — Where Accuracy Actually Lives

- One synthetase per amino acid (20 total); each recognizes its amino acid AND all its cognate tRNAs.
- Charging is a two-step, **2-ATP-equivalent** reaction: amino acid + ATP forms aminoacyl-AMP (PP$_i$ released and hydrolyzed), then transfer to the tRNA's 3' end.
- Many synthetases have **editing sites** that hydrolyze near-miss amino acids (isoleucine vs valine) — proofreading before the ribosome ever sees the cargo.
- **The critical experiment**: the ribosome checks codon-anticodon pairing, NOT the amino acid. A cysteine chemically converted to alanine while attached to tRNA$^{Cys}$ gets inserted wherever CYSTEINE codons appear. Mischarged tRNA = wrong protein; the synthetases are the true guardians of the code.`
    },
    {
      id: 'tln1-worked',
      type: 'text' as const,
      content: `### Worked Example — Decoding and Breaking a Message

**Problem 1.** A short mRNA reads 5'-GCAUGGCUUGGUGA...-3'. (Codon reference: AUG = Met, GCU = Ala, UGG = Trp, UGA = stop, GCA = Ala, UGC = Cys.)

- **(a)** At which nucleotide does the reading frame begin?
- **(b)** What peptide does the message encode?
- **(c)** A single C is inserted immediately after the start codon. Which codons now follow it?
- **(d)** Does the original stop codon still end the protein?
- **(e)** How would inserting three bases at the same spot differ?

**(a) Start codon.** Scan for the first AUG: it starts at nucleotide 3. The two 5' bases (GC) are untranslated leader — bases before the start codon never appear in protein. Counting from base 1 instead of the AUG is the designed error.

**(b) Peptide.** Reading triplets from the AUG at nucleotide 3: AUG (Met) - GCU (Ala) - UGG (Trp) - UGA (stop). Peptide: **Met-Ala-Trp**, then release.

**(c) Shifted frame.** New message after the start: AUG - CGC - UUG - GUG - A... Every downstream codon changes (Arg-Leu-Val...).

**(d) Lost stop.** No. The original UGA is no longer in frame, so translation continues until a new in-frame stop appears. Frameshift = new sequence AND usually new length.

**(e) Three bases.** One amino acid is added and the frame is preserved, so the codons after the insertion read exactly as before, unless the new triplet is a stop.

**Problem 2.** In the same message, the codon after GCU is UGG (Trp), and the codon after that is UGA.

- **(a)** What is the anticodon of the tRNA that reads UGG?
- **(b)** At which codon position do UGG and UGA differ?
- **(c)** Can a normal tryptophan tRNA also read UGA?

**(a) Anticodon.** Complement, then reverse: written antiparallel, the anticodon is 3'-ACC-5', conventionally written 5'-CCA-3'. Always state the orientation.

**(b) Position.** They differ at the third codon position (G to A), the wobble position.

**(c) Wobble's limit.** No. Wobble tolerates some third-position mismatches, but a normal tryptophan tRNA does not read UGA — UGA is a stop codon, recognized by release factors (in the standard code; mitochondria read UGA as Trp).

<!-- yield:low -->
However, a MUTANT tRNA with an altered anticodon can suppress stop codons (nonsense suppressors), inserting an amino acid at UGA and producing read-through protein — a classic passage twist.
<!-- /yield -->

**Problem 3.** The codon reference lists both GCU and GCA as Ala; codon 2 of the message is GCU.

- **(a)** Would a GCU-to-GCA change at codon 2 alter the protein?
- **(b)** Would a GCU-to-GAU change at codon 2 alter it?
- **(c)** What must you track before predicting a point mutation's effect?

**(a) Third position.** No. The change hits the third base, and GCA also codes Ala, so the mutation is silent (third-position wobble). Listing both Ala codons makes degeneracy concrete.

**(b) Second position.** Yes. The change hits the second base, and GAU (Asp) is not an alanine codon, so the amino acid changes.

**(c) The position.** Track WHICH position mutated before predicting the effect: third-position changes are often silent, first- and second-position changes usually are not.`
    },
    {
      id: 'tln1-quiz1',
      type: 'multiple-choice' as const,
      content: `**The Code & tRNA** 🎯`,
      exercise: {
        questions: [
          {
            question: `A researcher claims that an organism's genetic code violates UNAMBIGUITY. Which observation would support that claim?`,
            options: [`Six different codons all specify the amino acid leucine`, `The codon CUG is read as both serine and leucine`, `UGA codes tryptophan in its mitochondria, not stop`, `Inserting one base garbles every downstream codon`],
            correctAnswer: 1,
            yield: 'ULTRA_HIGH',
            explanation: `Unambiguity means one codon never means two amino acids, so a single codon read as both serine and leucine is the violation. Six codons for leucine is degeneracy (many codons, one meaning), which the code allows. UGA read as tryptophan in mitochondria is a departure from universality, not ambiguity: within that system UGA still has a single meaning. A one-base insertion garbling everything downstream is the expected result of a nonoverlapping, comma-free code read in triplets.`
          },
          {
            question: `In the classic Chapeville experiment, cysteine already attached to tRNA-Cys was chemically converted to alanine. In translation, this alanine was inserted at cysteine codons. The conclusion is that:`,
            options: [`Alanine and cysteine share the same set of codons`, `The ribosome proofreads the amino acid on each tRNA`, `Codon recognition depends only on the tRNA's anticodon`, `Aminoacyl-tRNA synthetases are not needed`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `The ribosome reads base pairing, not side chains: cargo swapped after charging rides the tRNA's anticodon straight into cysteine positions. Fidelity of the amino-acid-to-codon match therefore lives entirely upstream, in the synthetases' recognition and editing sites — which is why the experiment made them, not the ribosome, the "second genetic code." Expect this logic re-skinned: any manipulation after charging is invisible to the ribosome.`
          },
          {
            question: `Wobble base pairing explains why:`,
            options: [`Stop codons are decoded by tRNAs lacking amino acids`, `One codon can specify two different amino acids`, `Each codon requires its own tRNA, giving 61 tRNA species`, `Fewer than 61 tRNA types read all sense codons`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Relaxed pairing rules at the codon's third position (the anticodon's 5' base) — such as G-U pairs — let a single tRNA cover a family of synonymous codons, so far fewer than 61 tRNA species are needed. Note wobble NEVER creates ambiguity in the protein: synonymous codons already encode the same amino acid, so loose reading among them is safe. Stop codons remain tRNA-free, read by protein release factors.`
          },
          {
            question: `Charging a tRNA with its amino acid consumes ATP with release and hydrolysis of pyrophosphate. The chemical purpose of this investment is to:`,
            options: [`Store energy in the aminoacyl-tRNA ester bond`, `Power the tRNA's transport into the nucleus`, `Unwind mRNA secondary structure before initiation`, `Methylate the amino acid for recognition`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Peptide bond formation at the ribosome uses no ATP or GTP directly — the energy was banked in advance as the activated ester linking amino acid to tRNA (2 ATP equivalents, since pyrophosphate hydrolysis pulls the reaction). The ribosome's peptidyl transferase (a ribozyme) just transfers the chain onto the incoming amino group. Energy accounting questions hinge on this: charging is where the peptide bond is paid for.`
          },
          {
            question: `An mRNA codon reads 5'-GAU-3'. The anticodon of the tRNA that decodes it is:`,
            options: [`5'-GAU-3'`, `5'-CUA-3'`, `5'-AUC-3'`, `5'-UAG-3'`],
            correctAnswer: 2,
            yield: 'ULTRA_HIGH',
            explanation: `Pairing is antiparallel and complementary: codon 5'-GAU-3' pairs anticodon 3'-CUA-5', which written in conventional 5' to 3' order is 5'-AUC-3'. 5'-CUA-3' is the same bases left unreversed — the standard orientation trap (and note 5'-CUA-3' would pair UAG, a stop). Treat codon-anticodon problems exactly like strand problems: complement, then reverse, then double-check by aligning the two strands head-to-tail.`
          }
        ]
      }
    },
    {
      id: 'tln1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- **Code properties.** Triplet, degenerate at base 3, unambiguous, nonoverlapping and nearly universal; indels not in 3s shift the frame.
- **tRNA's two ends.** The anticodon pairs the codon antiparallel; the 3' CCA end holds the amino acid on a high-energy ester.
- **Wobble saves tRNAs.** Loose third-position pairing lets one tRNA read several synonyms, so far fewer than 61 tRNAs are needed.
- **Synthetases guard the code.** One per amino acid, 2 ATP equivalents per charge, and editing sites that reject near-miss amino acids.

**Common traps**

- **Counting from base 1.** Translation starts at the first AUG; bases before it are leader and never appear in protein.
- **Unreversed anticodon.** Complement the codon, then reverse: codon 5'-ACG-3' pairs anticodon 5'-CGU-3', not 5'-UGC-3'.
- **Stops read by tRNAs.** No tRNA reads UAA, UAG or UGA; release factors recognize stop codons.
- **Ribosome checks the cargo.** It checks only codon-anticodon pairing, so a mischarged tRNA delivers the wrong amino acid (Chapeville).

<!-- yield:low -->
**Low-yield extras**

- Inosine at the wobble position pairs with U, C or A, letting ~40 tRNA species read all 61 sense codons; mutant (nonsense-suppressor) tRNAs with altered anticodons can read stop codons and cause read-through
<!-- /yield -->`
    }
  ]
};
