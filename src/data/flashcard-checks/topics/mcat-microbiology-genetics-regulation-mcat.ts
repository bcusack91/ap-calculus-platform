import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-microbiology-genetics-regulation-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What are transposons?`]: {
    question: r`A bacterial strain makes a red pigment. A rare white variant appears, and sequencing shows that a 1.3-kb segment, identical to a segment found elsewhere in the same genome, now sits inside the pigment gene. What is the best explanation?`,
    options: [
      r`A point mutation changed one codon of the pigment gene`,
      r`A transposon moved and inserted into the pigment gene`,
      r`A deletion removed the promoter of the pigment gene`,
      r`A silent mutation changed one base of the pigment gene`,
    ],
    correctAnswer: 1,
    explanation: r`A segment already present elsewhere in the genome that turns up inside a gene is a transposon, a "jumping gene" that relocates and can disrupt the gene it lands in. A point or silent mutation changes one base and adds no DNA, and a silent change would not alter the pigment. A deletion removes sequence; here 1.3 kb was added.`,
  },
  [r`What is the CRISPR system natively?`]: {
    question: r`A culture is attacked by phage T and a few cells survive. Their descendants resist phage T but are still killed by unrelated phage U. Each survivor's genome has gained one short sequence matching phage T's DNA, placed in an array of repeats. What native function does this show?`,
    options: [
      r`Innate defense that cuts any unmethylated foreign DNA`,
      r`DNA repair that removes bases damaged by the phage`,
      r`Gene transfer that spreads phage genes among cells`,
      r`Adaptive immunity that records past phage infections`,
    ],
    correctAnswer: 3,
    explanation: r`CRISPR is a bacterial adaptive immune system: it stores a piece of an invader as a spacer and uses it to recognize and cut that same invader later, which is why protection is specific to phage T and is inherited. A defense that cuts any unmethylated DNA describes restriction enzymes and would not need a stored phage sequence. Repair and gene transfer do not explain sequence-specific, heritable resistance.`,
  },
  [r`How did phage co-infection experiments (rII-style) map mutation positions within a single gene?`]: {
    question: r`Phage mutants that all have defects in the same gene are crossed in pairs by co-infecting one host. Pair 1 yields wild-type recombinants at 0.01% of progeny, and pair 2 yields them at 0.5%. What does this say about the mutation sites?`,
    options: [
      r`Pair 2's sites lie farther apart within the gene than pair 1's`,
      r`Pair 1's sites lie farther apart within the gene than pair 2's`,
      r`Pair 2's sites must lie in two different genes, unlike pair 1's`,
      r`Both pairs' sites coincide, since a gene cannot be subdivided`,
    ],
    correctAnswer: 0,
    explanation: r`The frequency of wild-type recombinants is proportional to the distance between the two mutation sites, so the pair with 0.5% has sites farther apart than the pair with 0.01%. Choosing pair 1 reverses the relationship. Recombination within one gene is exactly what these crosses revealed, so the result needs neither two genes nor identical sites.`,
  },
  [r`Transposable elements were first discovered by {{c1::Barbara McClintock}}, in maize, before their bacterial roles were known.`]: {
    question: r`In the 1940s a geneticist studying maize saw kernels with unstable, spotted pigmentation and proposed that a genetic element was moving into and out of a pigment gene as the kernel developed. This work is credited as the first discovery of:`,
    options: [
      r`restriction enzymes, by Barbara McClintock`,
      r`transposable elements, by Joshua Lederberg`,
      r`transposable elements, by Barbara McClintock`,
      r`restriction enzymes, by Joshua Lederberg`,
    ],
    correctAnswer: 2,
    explanation: r`Mobile "controlling elements" that switch a maize pigment gene off and on are transposable elements, and Barbara McClintock found them decades before bacterial insertion sequences were known. Lederberg is known for bacterial conjugation, not maize. Restriction enzymes cut foreign DNA in bacteria and have nothing to do with unstable kernel color.`,
  },
  [r`How does an integron accumulate and express multiple resistance genes?`]: {
    question: r`An integron holds three resistance cassettes, for drugs A, B and C, captured one after another at its attachment site. A mutation then destroys the integron's single promoter. What happens to the cell's resistance?`,
    options: [
      r`Only one is lost: each further cassette has its own promoter`,
      r`All three are lost: the cassettes share that one promoter`,
      r`None is lost: the cassettes are read from the integrase gene`,
      r`None is lost: the cassettes excise and are expressed as circles`,
    ],
    correctAnswer: 1,
    explanation: r`An integron's integrase stacks captured cassettes at the attachment site, and the whole array is transcribed from one common promoter, so losing that promoter silences all three. Cassettes generally carry no promoter of their own, which is why "only one is lost" is wrong. They are not expressed from the integrase gene or as free circles.`,
  },
  [r`Two recessive mutants with the same phenotype are combined in one cell and the phenotype is wild-type. What do you conclude?`]: {
    question: r`Two recessive mutants of a bacterium each fail to make arginine. A partial diploid carrying both mutations, one on the chromosome and the other on an F′ plasmid, grows well without arginine. What is concluded?`,
    options: [
      r`The mutations are in different genes and complement each other`,
      r`The mutations are in the same gene and so fail to complement`,
      r`The mutations are in the same gene and recombined in every cell`,
      r`The mutations are both dominant and cancel each other's effect`,
    ],
    correctAnswer: 0,
    explanation: r`Each DNA molecule supplies the working gene product that the other lacks, so the cell is wild type: the mutations complement and must lie in different genes. Two mutations in the same gene would leave no working copy and the cell would still need arginine. Recombination is far too rare to rescue every cell, and the mutations are stated to be recessive.`,
  },
  [r`If two recessive mutations fail to complement in trans, they are almost certainly in the {{c1::same gene}}.`]: {
    question: r`Recessive loss-of-function mutations m1 and m2 each block histidine synthesis. A partial diploid with m1 on the chromosome and m2 on an F′ plasmid still cannot make histidine. What is the most likely explanation?`,
    options: [
      r`m1 and m2 are in different genes, and each supplies the other's product`,
      r`m1 and m2 are in different genes, and the two products inactivate each other`,
      r`m1 and m2 are in the same gene, and recombination between them hides it`,
      r`m1 and m2 are in the same gene, so no working copy of it is present`,
    ],
    correctAnswer: 3,
    explanation: r`When two recessive mutations in trans leave the cell mutant, neither DNA molecule carries a working copy of the affected gene, which means both mutations hit the same gene. Mutations in different genes would each be covered by the other molecule's good copy and the cell would make histidine. Recombination would create, not hide, a working allele, and loss-of-function products do not inactivate each other.`,
  },
  [r`In a cis-trans test, why must the cis configuration always be checked as a control?`]: {
    question: r`In a cis-trans test, the cis control cell carries both mutations on one genome and a fully wild-type copy on the other. This control cell shows the mutant phenotype. What does that mean for the trans result?`,
    options: [
      r`It can be trusted, since the cis cell should always be mutant`,
      r`It shows that the mutations lie in two different genes`,
      r`It cannot be interpreted, since a mutation must be dominant`,
      r`It shows that the mutations lie in one and the same gene`,
    ],
    correctAnswer: 2,
    explanation: r`With a complete wild-type copy present, the cis cell should be wild type whether or not the mutations share a gene. A mutant cis control means at least one mutation is dominant, and then a mutant trans result says nothing about allelism. The cis cell is expected to be wild type, not mutant, and the control alone cannot assign the mutations to one gene or two.`,
  },
  [r`The number of complementation groups in a mutant screen equals the number of {{c1::genes}} identified in the pathway.`]: {
    question: r`A screen yields 12 recessive mutants that cannot make tryptophan. Pairwise complementation tests sort the 12 mutants into 5 complementation groups. How many genes has the screen identified in the pathway?`,
    options: [r`5 genes`, r`7 genes`, r`12 genes`, r`60 genes`],
    correctAnswer: 0,
    explanation: r`Mutations that fail to complement one another fall in one gene, so each complementation group is one gene: 5 groups means 5 genes. Twelve is the number of mutants, several of which hit the same gene. Seven (12 − 5) and 60 (12 × 5) come from combining the two numbers with no genetic meaning.`,
  },
  [r`What DNA sequence features mark the two ends of a transposon and the site where it landed?`]: {
    question: r`One strand of a sequenced region reads 5′ ...ATGCA GGCCAGT [interior] ACTGGCC ATGCA... 3′. Related strains have a single ATGCA at this site and nothing between. Which description identifies the extra segment as a transposon?`,
    options: [
      r`Its ends are direct repeats; the flanking ATGCA copies are inverted repeats`,
      r`Its ends are inverted repeats; the flanking ATGCA copies are inverted repeats`,
      r`Its ends are direct repeats; the flanking ATGCA copies are direct repeats`,
      r`Its ends are inverted repeats; the flanking ATGCA copies are direct repeats`,
    ],
    correctAnswer: 3,
    explanation: r`ACTGGCC is the reverse complement of GGCCAGT, so the element ends in inverted repeats, the sites its transposase recognizes. ATGCA appears twice in the same orientation, a direct repeat made when the staggered cut in the target was filled in. The other choices mislabel one or both features: the end sequences are not the same read in the same direction, and the ATGCA copies are.`,
  },
  [r`A composite transposon consists of cargo genes flanked by two {{c1::insertion sequences (IS elements)}}.`]: {
    question: r`A composite transposon carries a tetracycline-resistance gene between two identical, fully functional insertion sequences. One of the two insertion sequences is then deleted completely. What is expected?`,
    options: [
      r`The resistance gene still moves alone, using a transposase of its own`,
      r`The remaining insertion sequence can move, but leaves the gene behind`,
      r`The whole unit moves as before, since one flanking element is enough`,
      r`Nothing can move, since each element needs the other's transposase`,
    ],
    correctAnswer: 1,
    explanation: r`The cargo gene moves only because it lies between two insertion sequences, whose outer ends define the block that transposase cuts. With one flank gone, the surviving insertion sequence can still hop by itself, but the resistance gene is no longer bracketed and stays put. The cargo encodes no transposase, and a functional insertion sequence does not depend on its twin.`,
  },
  [r`Distinguish conservative (cut-and-paste) from replicative transposition.`]: {
    question: r`A transposon is present as one copy on a plasmid. After a single transposition event, the element is found in the chromosome, the original plasmid site no longer contains it, and the cell still has exactly one copy. Which mechanism fits?`,
    options: [
      r`Replicative: the element was excised and reinserted`,
      r`Replicative: the element was copied via a cointegrate`,
      r`Conservative: the element was excised and reinserted`,
      r`Conservative: the element was copied via a cointegrate`,
    ],
    correctAnswer: 2,
    explanation: r`One copy before and one after, with the donor site emptied, is conservative (cut-and-paste) transposition. Replicative transposition copies the element through a cointegrate, leaving one copy at the old site and one at the new, for two in total. The mixed choices attach each name to the other mechanism's description.`,
  },
  [r`Why were F' merodiploids essential for analyzing the lac operon?`]: {
    question: r`A partial diploid has an operator-constitutive mutation next to a defective lacZ⁻ on its chromosome, and a normal operator next to lacZ⁺ on an F′ plasmid. Both copies carry a working repressor gene. With no lactose present, is β-galactosidase made?`,
    options: [
      r`No: the operator mutation acts only on the lacZ⁻ beside it`,
      r`Yes: the operator mutation frees every lacZ copy in the cell`,
      r`Yes: the plasmid copy of lacZ⁺ escapes the cell's repressor`,
      r`No: a lacZ⁺ gene on a plasmid can never be transcribed`,
    ],
    correctAnswer: 0,
    explanation: r`An operator is a DNA site, so its mutation acts only in cis, on the genes of the same DNA molecule; here that is the defective lacZ⁻. The working lacZ⁺ sits beside a normal operator, and repressor, a diffusible protein acting in trans, shuts it off without lactose. Treating the operator mutation as acting on every copy confuses cis with trans, and plasmid genes are transcribed normally.`,
  },
  [r`How do complementation and recombination differ as explanations for wild-type progeny from two mutants?`]: {
    question: r`Two auxotrophic mutations are combined in a partial diploid, one on the chromosome and one on an F′ plasmid. Every such cell grows on minimal medium at once. When a cell loses the F′, its descendants again need the supplement. What restored growth?`,
    options: [
      r`Recombination: a wild-type allele was built, so losing the F′ ends it`,
      r`Recombination: a wild-type allele was built and is inherited stably`,
      r`Complementation: both genomes were repaired and now stay wild type`,
      r`Complementation: neither genome was changed, so losing the F′ ends it`,
    ],
    correctAnswer: 3,
    explanation: r`Complementation restores function immediately in every cell by sharing gene products, without changing either DNA molecule, so the rescue disappears when one molecule is lost. Recombination would be rare, not seen in every cell, and would build a wild-type allele that stays heritable. Complementation repairs nothing in the DNA.`,
  },
  [r`Give three genetic consequences of a transposon inserting into or near a bacterial gene.`]: {
    question: r`An operon has genes A, B and C transcribed in that order from one promoter. A transposon inserts into gene A. The cells lose the product of A and also the products of B and C, although the sequences of B and C are intact. What is this called?`,
    options: [
      r`A trans effect: the transposase represses genes on other DNA`,
      r`A silent effect: the insertion changes no codon in B or C`,
      r`A polar effect: the insertion blocks the downstream genes`,
      r`A reversion: the insertion restores the gene's reading frame`,
    ],
    correctAnswer: 2,
    explanation: r`Genes in an operon share one transcript, so an insertion that stops transcription or translation in the first gene also silences the genes after it: a polar effect. The loss is confined to the same operon, so it is a cis effect, not repression in trans. It is not silent, since three products are missing, and a reversion would restore function.`,
  },
  [r`Why is a complementation test uninterpretable for a dominant mutation?`]: {
    question: r`Mutation D is dominant: a cell with D plus a wild-type copy of the same gene is still mutant. D is paired with recessive mutation r in a complementation test, and the cell is mutant. What can be concluded about whether D and r are in the same gene?`,
    options: [
      r`Same gene: a failure to complement always means allelic`,
      r`Different genes: a dominant allele must lie elsewhere`,
      r`Same gene: only alleles of one gene can show dominance`,
      r`Nothing: D gives a mutant cell whichever gene r is in`,
    ],
    correctAnswer: 3,
    explanation: r`A complementation test assumes both mutations are recessive, so that a working copy can mask each one. D makes the cell mutant even when a good copy of its gene is present, so the mutant result would appear whether r is in the same gene or a different one. Reading the failure as "same gene" or "different genes" ignores that the test's assumption is broken.`,
  },
  [r`How does a restriction-modification system destroy phage DNA without cutting the bacterium's own chromosome?`]: {
    question: r`Strain K has a restriction-modification system and strain C has none. Phage grown in strain K infect fresh strain K cells efficiently, but the same phage grown in strain C infect strain K very poorly. Why?`,
    options: [
      r`Phage DNA made in C is unmethylated at K's sites, so K cuts it`,
      r`Phage DNA made in C is methylated at K's sites, so K cuts it`,
      r`Phage DNA made in K holds K's spacers, so K's Cas spares it`,
      r`Phage DNA made in C lacks K's promoters, so K cannot read it`,
    ],
    correctAnswer: 0,
    explanation: r`The restriction enzyme cuts its recognition sequence only when it is unmethylated, and the partner methyltransferase marks those sites in any DNA made inside strain K, including phage DNA. Phage from strain C arrive unmethylated and are degraded. Methylation protects rather than targets DNA, spacers and Cas belong to CRISPR, and the phage sequence, promoters included, is the same from either host.`,
  },
  [r`Mutants 1 and 2 complement, 2 and 3 complement, but 1 and 3 do not. How many genes are represented?`]: {
    question: r`Five recessive mutants, a to e, share one phenotype. In pairwise tests, a and b fail to complement, and c and d fail to complement. Every other pair complements, including e with each of the other four. How many genes are represented?`,
    options: [r`Two genes`, r`Three genes`, r`Four genes`, r`Five genes`],
    correctAnswer: 1,
    explanation: r`Mutations that fail to complement share a gene, so a and b form one group, c and d form a second, and e, which complements everything, forms a third: three genes. Two genes leaves out e's group. Four or five genes counts mutants that fail to complement as if they were in separate genes.`,
  },
  [r`A gene is inactivated by a large insertion that also confers kanamycin resistance. What element is responsible?`]: {
    question: r`A mutant can no longer use maltose and is newly resistant to ampicillin. Its maltose gene now contains a 5-kb insertion: an ampicillin-resistance gene with an identical 1-kb insertion sequence on each side. What is the inserted element?`,
    options: [
      r`A single insertion sequence`,
      r`An integrated F plasmid`,
      r`A composite transposon`,
      r`A specialized prophage`,
    ],
    correctAnswer: 2,
    explanation: r`A resistance gene flanked by two insertion sequences that lands in a gene as one block is a composite transposon, which explains both the lost maltose gene and the new resistance. A single insertion sequence carries only its transposase gene, with no cargo. An integrated F plasmid or a prophage is far larger and is not built as cargo between two insertion sequences.`,
  },
  [r`In a phage cross, wild-type recombinants appear at $0.001$ of total progeny. What map distance separates the mutations?`]: {
    question: r`Two phage mutations lie 1 map unit apart, meaning 1% of the progeny of a cross are recombinant in total. The progeny are plated so that only wild-type recombinants form plaques. What percentage of total progeny is expected to be wild type?`,
    options: [r`0.5%`, r`1.0%`, r`2.0%`, r`0.1%`],
    correctAnswer: 0,
    explanation: r`Recombination makes two reciprocal classes in equal numbers, wild type and double mutant, and only the wild-type class is seen. So wild-type plaques are half of the 1% total: 0.5%. Answering 1.0% forgets the unseen double mutants, 2.0% doubles instead of halving, and 0.1% is a decimal slip.`,
  },
  [r`CRISPR-Cas is a bacterial adaptive immune system that stores fragments of past invaders as {{c1::spacers}}.`]: {
    question: r`A bacterium's CRISPR array has three spacers, matching phages P, Q and R, and the cell resists all three. A mutant loses only the spacer that matches phage Q; its cas genes are intact. Which of these phages can now infect the mutant successfully?`,
    options: [
      r`P and R only: their guides needed Q's spacer`,
      r`Q only: no guide RNA now matches its DNA`,
      r`All three: the array works only when complete`,
      r`None: the Cas nuclease still cuts all phage DNA`,
    ],
    correctAnswer: 1,
    explanation: r`Each spacer is transcribed into a guide RNA that directs the Cas nuclease to one matching invader, so losing Q's spacer removes protection against Q and leaves the P and R guides working. Spacers act independently, so the array does not need to be complete. Cas cuts only where a guide matches, so it cannot stop Q without that spacer.`,
  },
}
