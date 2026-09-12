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
- **Wobble**: the codon's third base pairs loosely with the anticodon's first (5') base — G-U pairs and inosine's promiscuity allowed. One tRNA can read several synonymous codons; this is WHY the code's redundancy concentrates at position 3, and why cells need ~40 tRNAs, not 61.

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

**Passage-style problem.** A short mRNA reads: 5'-GCAUGGCUUGGUGA...-3'. (Codon reference: AUG = Met, GCU = Ala, UGG = Trp, UGA = stop, GCA = Ala, UGC = Cys.)

**Question 1 — Find the reading frame and translate.** Scan for the first AUG: it starts at nucleotide 3. Read triplets from there: AUG (Met) - GCU (Ala) - UGG (Trp) - UGA (stop). Peptide: **Met-Ala-Trp**, then release. The two 5' bases (GC) are untranslated leader — bases before the start codon never appear in protein. Counting from base 1 instead of the AUG is the designed error.

**Question 2 — A mutation inserts a single C immediately after the AUG. Translate again.** New message after the start: AUG - CGC - UUG - GUG - A... The frame is shifted; every downstream codon changes (Arg-Leu-Val...), and the original UGA stop is no longer in frame — translation continues until a new in-frame stop appears. Frameshift = new sequence AND usually new length. Contrast inserting THREE bases: one amino acid added, frame preserved.

**Question 3 — The tRNA reading UGG (Trp) has what anticodon, and could it also read UGA?** Written antiparallel, the anticodon is 3'-ACC-5' (conventionally written 5'-CCA-3' — always state orientation). UGA differs at the third codon position (G to A); wobble tolerates some third-position mismatches, but a normal tryptophan tRNA does not read UGA — UGA is a stop recognized by release factors. However, a MUTANT tRNA with an altered anticodon can suppress stop codons (nonsense suppressors), inserting an amino acid at UGA and producing read-through protein — a classic passage twist.

**Question 4 — Why did the exam give you both GCU and GCA as Ala?** To make degeneracy concrete: a GCU-to-GCA change at codon 2 would be silent (third-position wobble), while GCU-to-GAU would not. Track WHICH position mutated before predicting the effect.`
    },
    {
      id: 'tln1-quiz1',
      type: 'multiple-choice' as const,
      content: `**The Code & tRNA** 🎯`,
      exercise: {
        questions: [
          {
            question: `A point mutation changes a codon's third base, yet the protein is completely unchanged. The property of the genetic code responsible is:`,
            options: [`Universality`, `Degeneracy — synonymous codons typically differ at the third (wobble) position`, `Unambiguity`, `Nonoverlapping reading`],
            correctAnswer: 1,
            explanation: `Multiple codons per amino acid (degeneracy) is organized so synonyms usually share their first two bases and differ at position 3, where wobble pairing lets one tRNA serve several codons. Third-position changes are therefore frequently silent. Unambiguity is the reverse guarantee (one codon, one meaning), universality says the dictionary is shared across organisms, and nonoverlap concerns how frames are read — each property maps to its own question type; keep the definitions crisp.`
          },
          {
            question: `In the classic Chapeville experiment, cysteine already attached to tRNA-Cys was chemically converted to alanine. In translation, this alanine was inserted at cysteine codons. The conclusion is that:`,
            options: [`Alanine and cysteine share codons`, `The ribosome corrects mischarged tRNAs`, `Codon recognition depends only on the tRNA's anticodon — the ribosome never checks which amino acid the tRNA carries`, `Aminoacyl-tRNA synthetases are dispensable`],
            correctAnswer: 2,
            explanation: `The ribosome reads base pairing, not side chains: cargo swapped after charging rides the tRNA's anticodon straight into cysteine positions. Fidelity of the amino-acid-to-codon match therefore lives entirely upstream, in the synthetases' recognition and editing sites — which is why the experiment made them, not the ribosome, the "second genetic code." Expect this logic re-skinned: any manipulation after charging is invisible to the ribosome.`
          },
          {
            question: `Wobble base pairing explains why:`,
            options: [`Stop codons are read by tRNAs`, `The code is ambiguous`, `Each codon requires its own dedicated tRNA, giving 61 tRNA species`, `Cells can translate all 61 sense codons with substantially fewer than 61 tRNA species`],
            correctAnswer: 3,
            explanation: `Relaxed pairing rules at the codon's third position (the anticodon's 5' base) — G-U pairs, and inosine reading U, C, or A — let a single tRNA cover a family of synonymous codons, cutting the required tRNA count to roughly 40. Note wobble NEVER creates ambiguity in the protein: synonymous codons already encode the same amino acid, so loose reading among them is safe. Stop codons remain tRNA-free, read by protein release factors.`
          },
          {
            question: `Charging a tRNA with its amino acid consumes ATP with release and hydrolysis of pyrophosphate. The chemical purpose of this investment is to:`,
            options: [`Create a high-energy aminoacyl-ester bond whose energy will later drive peptide bond formation on the ribosome`, `Power the tRNA's transport into the nucleus`, `Unwind mRNA secondary structure`, `Methylate the amino acid for recognition`],
            correctAnswer: 0,
            explanation: `Peptide bond formation at the ribosome uses no ATP or GTP directly — the energy was banked in advance as the activated ester linking amino acid to tRNA (2 ATP equivalents, since pyrophosphate hydrolysis pulls the reaction). The ribosome's peptidyl transferase (a ribozyme) just transfers the chain onto the incoming amino group. Energy accounting questions hinge on this: charging is where the peptide bond is paid for.`
          },
          {
            question: `An mRNA codon reads 5'-GAU-3'. The anticodon of the tRNA that decodes it is:`,
            options: [`5'-GAU-3'`, `5'-CUA-3'`, `5'-AUC-3'`, `5'-UAG-3'`],
            correctAnswer: 2,
            explanation: `Pairing is antiparallel and complementary: codon 5'-GAU-3' pairs anticodon 3'-CUA-5', which written in conventional 5' to 3' order is 5'-AUC-3'. Option B is the same bases left unreversed — the standard orientation trap (and note 5'-CUA-3' would pair UAG, a stop). Treat codon-anticodon problems exactly like strand problems: complement, then reverse, then double-check by aligning the two strands head-to-tail.`
          }
        ]
      }
    },
    {
      id: 'tln1-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 1

- Code properties as question types: triplet, degenerate (synonyms differ at position 3 — silent mutations), unambiguous, nonoverlapping/comma-free (indels not divisible by 3 = frameshift), nearly universal (mitochondria deviate)
- AUG starts and sets the frame; UAA/UAG/UGA stop via release factors, not tRNAs; translation begins at the first AUG, not the first base
- tRNA: anticodon pairs the codon antiparallel (complement THEN reverse); amino acid rides the 3' CCA end on a high-energy ester bond that later pays for the peptide bond
- Wobble at the third position: one tRNA reads a codon family (~40 tRNAs for 61 codons); wobble never makes protein ambiguous
- Synthetases are the code's guardians: one per amino acid, two-step charging costing 2 ATP equivalents, editing sites reject near-miss substrates
- Chapeville: the ribosome checks only codon-anticodon pairing — mischarged tRNA delivers the wrong amino acid unchallenged
- Mutant anticodons can suppress stop codons (read-through) — the exception that proves the pairing rules`
    }
  ]
};
