import type { CardCheck } from '@/lib/flashcard-check-core'

/**
 * Card-check questions for the cards of `mcat-microbiology-genetics-mcat`: one per card, keyed by the
 * card's exact front text. Each asks the student to use the card's idea in a
 * new situation. Gate: scripts/flashcard-checks/validate.ts.
 */
const r = String.raw

export const checks: Record<string, CardCheck> = {
  [r`What is competence in bacteria?`]: {
    question: r`A soil bacterium imports DNA fragments from the surrounding water only when its culture reaches high density. The same cells at low density import none, although the fragments are present both times. What differs between the two conditions?`,
    options: [
      r`Whether the cells carry an F plasmid for a pilus`,
      r`Whether the cells carry a prophage in the genome`,
      r`Whether the cells are in the competent state`,
      r`Whether the cells have a mismatch repair defect`,
    ],
    correctAnswer: 2,
    explanation: r`Competence is the regulated physiological state in which a cell can take up free DNA from its environment, and many species enter it only at high density. An F plasmid matters for conjugation and a prophage for transduction, neither of which is uptake of free DNA. A repair defect changes the mutation rate, not DNA import.`,
  },
  [r`How do bacteria acquire antibiotic resistance genetically?`]: {
    question: r`A culture of drug-sensitive bacteria is grown from a single cell with no plasmids, no phage and no foreign DNA present. A few resistant cells are later found in it. Which route must have produced the resistance?`,
    options: [
      r`Spontaneous mutation of a chromosomal gene`,
      r`Conjugation with a plasmid-bearing donor`,
      r`Transduction by a phage carrying the gene`,
      r`Transformation by DNA from another strain`,
    ],
    correctAnswer: 0,
    explanation: r`Resistance arises either by spontaneous mutation or by horizontal transfer, and here every horizontal route is excluded: there is no donor cell, no phage and no foreign DNA. Conjugation, transduction and transformation each need an outside source of the resistance gene. Only a new mutation in the cell's own DNA remains.`,
  },
  [r`Contrast generalized and specialized transduction.`]: {
    question: r`A temperate phage always integrates beside the bio gene. Lysates made by inducing this prophage transfer bio at a useful frequency but never transfer genes located far away on the chromosome. What does this describe?`,
    options: [
      r`Generalized transduction, by random packaging of host DNA`,
      r`Generalized transduction, by imprecise prophage excision`,
      r`Specialized transduction, by random packaging of host DNA`,
      r`Specialized transduction, by imprecise prophage excision`,
    ],
    correctAnswer: 3,
    explanation: r`Only genes next to the integration site move, which is the mark of specialized transduction: the prophage cuts out imprecisely and takes neighboring host DNA with it. Generalized transduction packages random host fragments, so it could move any gene, including distant ones. Pairing "specialized" with random packaging, or "generalized" with imprecise excision, mixes the two mechanisms.`,
  },
  [r`What is an Hfr cell?`]: {
    question: r`A donor strain transfers chromosomal markers such as leu and thr to recipients at high frequency, and no free F plasmid can be isolated from its cytoplasm. Where is the F factor in this donor?`,
    options: [
      r`Lost from the cell after an earlier mating`,
      r`Integrated into the bacterial chromosome`,
      r`Packaged inside a phage capsid in the cell`,
      r`Free in the cytoplasm at high copy number`,
    ],
    correctAnswer: 1,
    explanation: r`This is an Hfr cell: F is integrated into the chromosome, so transfer that starts within F drags chromosomal genes into the recipient. A cell that had lost F could not act as a donor at all. A free F plasmid, at any copy number, would transfer itself and almost no chromosomal genes, and F is not carried in a phage capsid.`,
  },
  [r`What is an F plasmid?`]: {
    question: r`Two strains are mixed. Cells of strain X grow thin surface filaments (sex pili) that attach to cells of strain Y, and DNA then passes from X to Y. Which labels fit the two strains?`,
    options: [
      r`X is F⁻ and Y is F⁺, since the recipient builds the pilus`,
      r`X is F⁺ and Y is F⁻, since the donor builds the pilus`,
      r`X is F⁺ and Y is F⁺, since both cells need the F factor`,
      r`X is F⁻ and Y is F⁻, since pili are chromosomal traits`,
    ],
    correctAnswer: 1,
    explanation: r`The F plasmid carries the genes for the sex pilus, so the cell that builds the pilus and donates DNA is F⁺ and its partner is F⁻. Calling the recipient the pilus builder reverses the roles. The recipient does not need F beforehand, and pilus genes are on the F plasmid, not the chromosome.`,
  },
  [r`Why does horizontal gene transfer complicate bacterial phylogeny?`]: {
    question: r`A tree built from ribosomal RNA genes places species A closest to species B. A tree built from one antibiotic-resistance gene places A closest to a distantly related species C instead. The most likely reason for the conflict is that the resistance gene:`,
    options: [
      r`was inherited vertically from the ancestor of A and B`,
      r`mutates too slowly to differ between any two species`,
      r`is translated with a different genetic code in A and C`,
      r`moved horizontally between the lineages of A and C`,
    ],
    correctAnswer: 3,
    explanation: r`A gene that moves horizontally carries the history of its own transfer, not of the organisms, so its tree can join unrelated lineages such as A and C. Vertical inheritance from the A and B ancestor would make the gene tree agree with the rRNA tree. A gene with no differences could not group any pair, and these species share one genetic code.`,
  },
  [r`A silent mutation:`]: {
    question: r`A point mutation changes an mRNA codon from CUU to CUC. Both codons specify leucine. How is this mutation classified, and what happens to the protein?`,
    options: [
      r`Silent; the amino acid sequence is unchanged`,
      r`Missense; one amino acid is replaced by another`,
      r`Nonsense; the protein is cut short at that codon`,
      r`Frameshift; every later amino acid is altered`,
    ],
    correctAnswer: 0,
    explanation: r`The new codon is a synonym for the old one, so the nucleotide changes but the amino acid does not: a silent mutation. Missense would need a codon for a different amino acid and nonsense would need a stop codon. A frameshift needs an insertion or deletion, not a substitution.`,
  },
  [r`During meiosis, crossing over occurs in:`]: {
    question: r`A cell in meiosis shows homologous chromosomes paired along their length and joined at chiasmata, where non-sister chromatids have exchanged segments. Which stage is this cell in?`,
    options: [r`Anaphase I`, r`Prophase II`, r`Prophase I`, r`Metaphase II`],
    correctAnswer: 2,
    explanation: r`Synapsis of homologs and exchange at chiasmata happen in prophase I. In anaphase I the homologs are already being pulled apart. Prophase II and metaphase II occur after the homologs have separated, so no homologous pairs remain to cross over.`,
  },
  [r`The genetic code is described as degenerate because:`]: {
    question: r`The codons GGU, GGC, GGA and GGG all specify glycine, so a change in the third base of GGU leaves the protein unchanged. Which property of the genetic code does this illustrate?`,
    options: [
      r`It is universal: nearly all organisms share one code`,
      r`It is overlapping: one base belongs to several codons`,
      r`It is commaless: codons are read with no gaps between`,
      r`It is degenerate: several codons specify one amino acid`,
    ],
    correctAnswer: 3,
    explanation: r`Four codons for one amino acid is degeneracy, and it is why many third-base changes are silent. Universality is about different organisms sharing the code and the commaless property is about reading without gaps; neither is shown by synonymous codons. The code is not overlapping: each base belongs to one codon.`,
  },
  [r`Rolling-circle conjugation transfers a {{c1::single strand}} of DNA; both donor and recipient then synthesize the complement.`]: {
    question: r`During F-plasmid transfer, a researcher examines the plasmid DNA at the moment it enters the recipient, before any new synthesis there. What form of F DNA is found in the recipient at that instant?`,
    options: [
      r`A double-stranded circle copied from the donor`,
      r`A single strand that still needs its complement`,
      r`Two separate strands that pair with each other`,
      r`A double-stranded linear piece cut from the donor`,
    ],
    correctAnswer: 1,
    explanation: r`Only one nicked strand of F threads into the recipient, and the recipient then builds the complement while the donor rebuilds its own from the strand it kept. That is why both cells end up F⁺. The double-stranded answers assume the whole duplex moves, and "two separate strands" would leave the donor with no plasmid.`,
  },
  [r`Why does the recipient in an Hfr x F- cross usually remain F- even after receiving many donor genes?`]: {
    question: r`An Hfr × F⁻ mating is left undisturbed and, in one rare pair, the entire donor chromosome passes into the recipient. What is special about this recipient compared with the usual recipients in this cross?`,
    options: [
      r`It gains no part of F, since F never leaves the donor`,
      r`It gains a free F plasmid first, before any other gene`,
      r`It gains the last portion of F and can act as a donor`,
      r`It gains only F, with no chromosomal genes of the donor`,
    ],
    correctAnswer: 2,
    explanation: r`Transfer starts inside the integrated F, so part of F leads and the rest enters only after the whole chromosome. Matings normally break first, leaving recipients F⁻, but a complete transfer delivers the final portion of F and the cell can become a donor. Saying F never leaves, enters first as a free plasmid, or enters alone ignores that F is split around the chromosome in an Hfr.`,
  },
  [r`R plasmids are dangerous because they combine {{c1::multiple resistance genes with conjugative transfer genes}} on one element.`]: {
    question: r`A sensitive strain is mixed briefly with a donor strain. Afterward it resists ampicillin, tetracycline and sulfonamide at once, and it can pass all three resistances to new cells on contact. What did it most likely receive?`,
    options: [
      r`One R plasmid carrying several resistance genes plus transfer genes`,
      r`One F plasmid carrying its transfer genes but no resistance genes`,
      r`One Col plasmid carrying a bacteriocin gene and an immunity gene`,
      r`One transducing phage carrying a single chromosomal resistance gene`,
    ],
    correctAnswer: 0,
    explanation: r`Three resistances arriving together, plus the new ability to donate them on contact, point to an R plasmid that carries several resistance genes and its own conjugation genes. A plain F plasmid would give donor ability without resistance, and a Col plasmid encodes a bacteriocin, not drug resistance. A phage carrying one gene explains neither the package of three nor contact-dependent spread.`,
  },
  [r`Why does horizontal transfer, especially conjugation, outpace spontaneous mutation in spreading resistance?`]: {
    question: r`In a mixed gut population, a resistance mutation arises in about 1 cell per 10⁸ each generation. A conjugative resistance plasmid passes to about 1 in 100 neighboring cells each generation, including cells of other species. Which statement best compares the two?`,
    options: [
      r`Mutation spreads faster, since each mutant passes its change to other species`,
      r`Transfer spreads faster, since a working gene reaches many lineages at once`,
      r`Both spread equally, since selection acts only after the drug is withdrawn`,
      r`Transfer spreads slower, since plasmid genes must mutate again to function`,
    ],
    correctAnswer: 1,
    explanation: r`A mutation is rare and stays in the single lineage where it arose, while a conjugative plasmid hands a complete, working resistance gene to many cells and species in one generation. A chromosomal mutation is not passed to other species by itself. Selection acts while the drug is present, and a transferred gene works without mutating again.`,
  },
  [r`How did Avery, MacLeod, and McCarty identify the transforming principle chemically?`]: {
    question: r`An extract from heat-killed S pneumococci is split into three tubes, treated with protease, RNase or DNase, and each is then mixed with live R cells. Which outcome matches the result of Avery, MacLeod and McCarty?`,
    options: [
      r`S colonies appear with DNase only; protease and RNase block it`,
      r`S colonies appear in no tube; any enzyme destroys the activity`,
      r`S colonies appear in all tubes; no enzyme affects the activity`,
      r`S colonies appear with protease and RNase; DNase blocks it`,
    ],
    correctAnswer: 3,
    explanation: r`Destroying protein or RNA left the transforming activity intact, while destroying DNA abolished it, so DNA is the transforming principle. The reversed pattern would have pointed to protein and RNA as required. "No tube" and "all tubes" would mean the enzymes were not specific tests at all.`,
  },
  [r`Artificial competence is induced with {{c1::calcium chloride plus heat shock}} or by electroporation.`]: {
    question: r`A lab strain of E. coli has no natural DNA-uptake machinery. After the cells are chilled in calcium chloride and given a brief heat pulse, a few of them take up a plasmid from the solution. How is this uptake best classified?`,
    options: [
      r`Artificial transformation, bypassing natural competence`,
      r`Natural transformation, using induced uptake proteins`,
      r`Conjugation, with the plasmid passed through a pilus`,
      r`Transduction, with the plasmid carried in a capsid`,
    ],
    correctAnswer: 0,
    explanation: r`Calcium chloride with heat shock (or electroporation) forces free DNA into cells that have no competence system, so this is artificially induced transformation. It is not natural transformation, because the strain makes no uptake proteins. No donor cell or pilus is involved, so it is not conjugation, and no phage is involved, so it is not transduction.`,
  },
  [r`How does an F' plasmid form, and what genetic condition does it create in a recipient?`]: {
    question: r`An F⁻ cell whose chromosome carries a mutant lacZ⁻ allele receives an F′ plasmid carrying lacZ⁺. Which description of the resulting cell is correct?`,
    options: [
      r`Haploid for lacZ: the F′ copy replaces the chromosomal allele`,
      r`Fully diploid: two complete copies of the entire chromosome`,
      r`Partial diploid for lacZ: one chromosomal copy and one on F′`,
      r`Haploid for lacZ: the F′ copy is degraded soon after entry`,
    ],
    correctAnswer: 2,
    explanation: r`An F′ carries a few chromosomal genes picked up by imprecise excision, so the recipient holds two copies of just those genes: a partial diploid, or merodiploid. The F′ copy stays on the plasmid; it does not replace the chromosomal allele and it is stably maintained. Only the genes on the F′ are doubled, not the whole chromosome.`,
  },
  [r`Different Hfr strains transfer different genes first, in different orders. What did this reveal about the E. coli chromosome?`]: {
    question: r`Hfr strain 1 transfers five genes in the order M, N, O, P, Q. Hfr strain 2, derived from the same parent, transfers O first and N second. Given that the genes lie on one circular chromosome, in what order does strain 2 transfer all five?`,
    options: [r`O, P, Q, M, N`, r`O, N, M, P, Q`, r`O, N, P, Q, M`, r`O, N, M, Q, P`],
    correctAnswer: 3,
    explanation: r`On a circle the neighbors stay fixed, so going from O toward N continues to M, then wraps around to Q and then P. "O, P, Q, M, N" runs the wrong direction from O. "O, N, M, P, Q" treats the chromosome as a line that ends at M, and "O, N, P, Q, M" breaks the fixed neighbor order.`,
  },
  [r`In generalized transduction, a high co-transduction frequency for two genes means they are {{c1::physically close together}}.`]: {
    question: r`A researcher selects transductants that received donor gene A. Of these, 60% also carry donor gene B, 5% carry donor gene C and none carry donor gene D. Which ranking of distance from gene A is supported?`,
    options: [
      r`B is nearest, then C, and D is the farthest`,
      r`D is nearest, then C, and B is the farthest`,
      r`C is nearest, then B, and D is the farthest`,
      r`B is nearest, then D, and C is the farthest`,
    ],
    correctAnswer: 0,
    explanation: r`Two genes are co-transduced only when both fit in one phage headful, so a higher co-transduction frequency means a shorter distance: B (60%) is closest, C (5%) is farther, and D (0%) is too far to share a particle. Ranking D nearest reads the relationship backward. The other orders ignore the measured frequencies.`,
  },
  [r`Adding DNase to the culture medium blocks gene transfer between two strains. Which mechanism was responsible?`]: {
    question: r`Three cultures each show gene transfer between strains: one by conjugation, one by generalized transduction and one by natural transformation. DNase is added to the medium of all three. In which cultures does transfer stop?`,
    options: [
      r`Only the transduction culture`,
      r`Only the transformation culture`,
      r`Only the conjugation culture`,
      r`All three of the cultures`,
    ],
    correctAnswer: 1,
    explanation: r`Only transformation relies on free DNA in the medium, where DNase can destroy it. In transduction the DNA travels inside a phage capsid and in conjugation it travels through a mating bridge, so both are protected. Choosing either of those, or all three, overlooks that shielding.`,
  },
  [r`In a U-tube with a filter separating two strains, gene transfer still occurs. What does this identify, and what does it rule out?`]: {
    question: r`In a U-tube, a filter with pores too small for bacteria but large enough for viruses and DNA separates strains A and B. Recombinants still appear, and adding DNase to the medium does not stop them. Which conclusion follows?`,
    options: [
      r`Transformation: no contact needed and the DNA is exposed`,
      r`Conjugation: contact is needed and the DNA is shielded`,
      r`Transduction: no contact needed and the DNA is shielded`,
      r`Spontaneous mutation: no DNA moved between the two arms`,
    ],
    correctAnswer: 2,
    explanation: r`Transfer across the filter rules out conjugation, which needs cell contact, and DNase resistance rules out transformation, which needs exposed DNA. What remains is transduction, where a filterable phage carries protected DNA. Mutation alone would not give recombinants that combine markers from both strains.`,
  },
  [r`Conjugation is resistant to {{c1::DNase}} added to the medium, because DNA passes through a protected mating bridge.`]: {
    question: r`DNase added to a mating mixture of F⁺ and F⁻ cells does not reduce plasmid transfer at all. Which explanation is correct?`,
    options: [
      r`The DNA crosses inside a phage capsid, never exposed to the medium`,
      r`The DNA crosses as protein-coated RNA, which DNase cannot degrade`,
      r`The DNA crosses the medium too quickly for the enzyme to act on it`,
      r`The DNA crosses inside a mating bridge, never exposed to the medium`,
    ],
    correctAnswer: 3,
    explanation: r`In conjugation the transferred strand moves through the mating bridge between the two joined cells, so it never meets DNase in the medium. A phage capsid is the shield in transduction, not in an F⁺ × F⁻ mating. The plasmid crosses as DNA, not RNA, and it does not travel through the open medium at any speed.`,
  },
  [r`In an uninterrupted Hfr cross, why do genes near the origin of transfer appear in more recombinants than distal genes?`]: {
    question: r`In an Hfr × F⁻ mating that is never deliberately interrupted, donor genes enter in the order thr, lac, gal, trp. Recombinants are counted for each donor gene separately. Which gene appears in the fewest recombinants, and why?`,
    options: [
      r`trp: mating pairs usually break apart before it can enter`,
      r`thr: the first gene to enter is the first to be degraded`,
      r`lac: genes in the middle of a fragment cannot recombine`,
      r`None: every recipient receives all four genes equally`,
    ],
    correctAnswer: 0,
    explanation: r`Mating pairs separate at random times, so the chance that a gene has entered falls the farther it lies from the origin of transfer, and trp, the last to enter, is recovered least often. The first gene, thr, is recovered most often, not least. Middle genes recombine normally, and equal recovery would require every pair to stay joined for the full transfer.`,
  },
  [r`What does a high co-transformation frequency for two markers imply, and why?`]: {
    question: r`Markers X and Y are co-transformed 40% of the time when competent cells are given long fragments of donor DNA. The donor DNA is then sheared into much shorter fragments and the test is repeated. What is expected?`,
    options: [
      r`Co-transformation rises, since short fragments enter cells faster`,
      r`Co-transformation falls, since fewer fragments carry both markers`,
      r`Co-transformation is unchanged, since it depends only on map order`,
      r`Co-transformation reaches 100%, since each cell takes up one piece`,
    ],
    correctAnswer: 1,
    explanation: r`Two markers are co-transformed when they sit on the same fragment taken up by one cell, so shorter fragments carry both markers less often and co-transformation drops. That is the same reason close markers show high co-transformation. Uptake speed and map order do not put two markers on one piece, and one piece per cell would lower, not raise, joint inheritance.`,
  },
  [r`What did Griffith's experiment show when heat-killed smooth (S) pneumococci were mixed with live rough (R) cells?`]: {
    question: r`A student repeats Griffith's design with one change: heat-killed S cells are mixed with heat-killed R cells instead of live R cells, and the mixture is injected into mice. What outcome is expected?`,
    options: [
      r`The mice die, since the S capsule material is toxic by itself`,
      r`The mice die, since dead S cells revive when mixed with R cells`,
      r`The mice survive, since no living cell can take up the trait`,
      r`The mice survive, yet live S cells are recovered from them`,
    ],
    correctAnswer: 2,
    explanation: r`Griffith's result needed live R cells to receive the transforming principle from dead S cells and become virulent. With every cell dead, nothing can be transformed or multiply, so the mice live and no live bacteria are recovered. Heat-killed S cells alone were harmless in his controls, and dead cells do not revive.`,
  },
  [r`Natural transformation requires the recipient to be {{c1::competent}}, expressing dedicated DNA-uptake machinery.`]: {
    question: r`Free DNA carrying a streptomycin-resistance allele is added to cultures of two species. Species 1 makes surface DNA-binding and import proteins at high density; species 2 never makes such proteins. With no other treatment, which outcome is expected?`,
    options: [
      r`Both species yield resistant transformants`,
      r`Only species 2 yields resistant transformants`,
      r`Neither species yields resistant transformants`,
      r`Only species 1 yields resistant transformants`,
    ],
    correctAnswer: 3,
    explanation: r`Natural transformation happens only in competent cells, which express dedicated machinery to bind and import DNA, so only species 1 can be transformed. Species 2 has no uptake machinery and would need artificial treatment. Free DNA does not simply diffuse into any cell, so "both" is wrong, and "neither" ignores the competent species.`,
  },
  [r`After an F+ x F- mating, the recipient becomes {{c1::F+}}, but chromosomal genes are almost never transferred.`]: {
    question: r`A few F⁺ cells that are leu⁺ are added to a dense culture of F⁻ cells that are leu⁻ (unable to make leucine). After several hours of mating, what do the original F⁻ cells mostly become?`,
    options: [
      r`Mostly F⁺ cells that are now leu⁺`,
      r`Mostly F⁺ cells that are still leu⁻`,
      r`Mostly F⁻ cells that are now leu⁺`,
      r`Mostly Hfr cells that are now leu⁺`,
    ],
    correctAnswer: 1,
    explanation: r`In an F⁺ × F⁻ cross only the free F plasmid transfers, so recipients become F⁺ donors and F spreads through the culture, but the chromosomal leu gene stays behind. Gaining leu⁺ would require chromosomal transfer, which needs an Hfr donor. Recipients of an F⁺ donor do not become Hfr.`,
  },
  [r`In interrupted mating, the time at which each donor gene first appears in recombinants gives the {{c1::gene order and map distance in minutes}}.`]: {
    question: r`In an interrupted-mating experiment, donor gene a first appears in recombinants at 8 minutes, gene b at 25 minutes and gene c at 17 minutes. What are the gene order from the origin of transfer and the distance between a and b?`,
    options: [
      r`a, c, b; a and b are 17 minutes apart`,
      r`a, b, c; a and b are 17 minutes apart`,
      r`a, c, b; a and b are 33 minutes apart`,
      r`b, c, a; a and b are 25 minutes apart`,
    ],
    correctAnswer: 0,
    explanation: r`Genes are ordered by entry time, so the order is a (8), c (17), b (25), and the a to b distance is 25 − 8 = 17 minutes. "a, b, c" keeps the alphabetical order instead of the time order. 33 minutes comes from adding the two times, and "b, c, a" ranks the latest gene first.`,
  },
  [r`How does an F+ cell become Hfr, and what sequence elements make this possible?`]: {
    question: r`A mutant F plasmid has lost all of its insertion sequences (IS elements) but keeps its transfer genes and oriT. What is the expected effect on the cells that carry it?`,
    options: [
      r`They cannot transfer the plasmid but still readily form Hfr`,
      r`They still transfer the plasmid and form Hfr at any random site`,
      r`They still transfer the plasmid but can rarely become Hfr`,
      r`They cannot replicate the plasmid and so soon revert to F⁻`,
    ],
    correctAnswer: 2,
    explanation: r`F integrates into the chromosome by homologous recombination between IS elements on the plasmid and matching IS elements on the chromosome. Without its IS elements the plasmid has no homology for integration, so Hfr formation becomes rare, while conjugation continues because the transfer genes and oriT are intact. IS elements are not needed for plasmid replication or transfer.`,
  },
  [r`During natural transformation, what happens to the two strands of the incoming DNA fragment?`]: {
    question: r`Donor DNA labeled with a radioactive isotope in both strands is given to naturally competent cells. Soon after the fragments bind, about half of the bound label is found as free nucleotides outside the cells. What explains this?`,
    options: [
      r`Both strands are imported and one is then exported unchanged`,
      r`Half of the cells lyse on contact and release their own DNA`,
      r`Both strands are degraded and rebuilt inside from an RNA copy`,
      r`One strand is degraded at the surface as the other is imported`,
    ],
    correctAnswer: 3,
    explanation: r`In natural transformation only one strand enters the cytoplasm; the complementary strand is broken down at the cell surface, which releases about half of the label as nucleotides. The imported strand then recombines into the chromosome. An exported intact strand would not appear as free nucleotides, the cells' own DNA carries no label, and no RNA copy is involved.`,
  },
  [r`Beyond making the pilus, list the mechanical steps of F-plasmid conjugation.`]: {
    question: r`A mutant F⁺ donor makes normal pili that attach to recipients and retract, drawing the cells together into a mating bridge. However, it makes no relaxase. Which step is the first to fail?`,
    options: [
      r`Contact with the recipient, so no mating pairs can form`,
      r`Nicking of F at oriT, so no strand can begin to transfer`,
      r`Synthesis of the complement in the recipient after entry`,
      r`Retraction of the pilus, so cells are never drawn close`,
    ],
    correctAnswer: 1,
    explanation: r`After the pilus brings the cells together, relaxase must nick one strand of F at oriT so that strand can be transferred by rolling-circle replication. Without relaxase that nick never happens. Contact and retraction are stated to be normal, and complement synthesis in the recipient comes later and has nothing to copy if no strand arrives.`,
  },
  [r`Transduction moves resistance genes without cell contact; transformation moves them via {{c1::free DNA released from lysed cells}}.`]: {
    question: r`In a biofilm, resistant cells die and burst. Nearby living cells of a naturally competent species then become resistant, with no phage present and no contact with any living resistant cell. In what form did the resistance gene travel?`,
    options: [
      r`As free DNA released by the lysed cells`,
      r`As a plasmid passed through a sex pilus`,
      r`As host DNA packed into a phage capsid`,
      r`As messenger RNA from the lysed cells`,
    ],
    correctAnswer: 0,
    explanation: r`Transformation is uptake of free DNA released when other cells lyse, which fits a competent species gaining a gene from dead neighbors. Transfer through a pilus needs a living donor in contact, and a capsid needs phage, both excluded here. Messenger RNA is not taken up and inherited as a gene.`,
  },
  [r`A colony grows on complete medium but not on minimal medium lacking leucine. What is it and how is this used?`]: {
    question: r`Strain 1 grows on minimal medium only when histidine is added. Strain 2 grows on minimal medium with no supplement. How are the two strains classified with respect to histidine?`,
    options: [
      r`Strain 1 is a histidine prototroph; strain 2 is an auxotroph`,
      r`Both are histidine auxotrophs carrying different mutations`,
      r`Strain 1 is a histidine auxotroph; strain 2 is a prototroph`,
      r`Both are prototrophs, since each grows on some medium`,
    ],
    correctAnswer: 2,
    explanation: r`An auxotroph cannot make a required nutrient and grows only when it is supplied, as strain 1 does with histidine. A prototroph makes everything it needs from minimal medium, as strain 2 does. Swapping the labels reverses the definitions, and growth on a supplemented medium does not make a strain a prototroph.`,
  },
  [r`A Western blot of a mutant shows a band far smaller than wild type. Which mutation class fits best?`]: {
    question: r`A bacterial gene encodes a 400-amino-acid protein. A mutant allele has one base substitution that changes codon 100 from UGG (tryptophan) to UGA (stop). On a Western blot with an antibody to the protein's N-terminal region, what is expected?`,
    options: [
      r`A band at the wild-type size and intensity`,
      r`A band about four times the wild-type size`,
      r`A band slightly above the wild-type size`,
      r`A band about one quarter of wild-type size`,
    ],
    correctAnswer: 3,
    explanation: r`A nonsense mutation at codon 100 stops translation after 99 of 400 amino acids, giving a truncated protein about one quarter of the normal size. A normal-size band is what a missense change would give. Nothing in a premature stop codon makes the protein longer, so the larger bands are wrong.`,
  },
  [r`Conjugation requires {{c1::direct cell contact}}, so a filter between donor and recipient abolishes it while phage-borne transfer passes.`]: {
    question: r`Strain A passes a marker to strain B by conjugation when the two are mixed. The strains are then placed on opposite sides of a filter whose pores pass viruses and DNA but not bacteria. What happens to the transfer, and why?`,
    options: [
      r`It continues, because the plasmid diffuses through the pores`,
      r`It stops, because conjugation needs direct cell contact`,
      r`It stops, because the filter traps the phage carrying it`,
      r`It continues, because no DNase is present in the medium`,
    ],
    correctAnswer: 1,
    explanation: r`Conjugation moves DNA only between cells joined by a pilus and mating bridge, so a filter that keeps the cells apart abolishes it. Plasmid DNA is not released to diffuse through pores, and DNase is irrelevant when the DNA never enters the medium. Phage are not involved in conjugation, and this filter would let them pass anyway.`,
  },
  [r`The Ames test scores {{c1::reversion}} of a histidine auxotroph to prototrophy on histidine-free plates.`]: {
    question: r`In an Ames test, his⁻ bacteria are spread on plates lacking histidine. Control plates average 12 colonies, plates with compound Z average 13 colonies, and plates with compound W average 240 colonies. Which interpretation is correct?`,
    options: [
      r`Z is mutagenic and W is not, since W allowed more growth`,
      r`Both are mutagenic, since colonies grew on every plate`,
      r`W is mutagenic and Z is not, since only W raised reversion`,
      r`Neither is mutagenic, since the control also had colonies`,
    ],
    correctAnswer: 2,
    explanation: r`Each colony is a revertant that regained the ability to make histidine, and the control count is the spontaneous background. W raises reversion about twentyfold, so it is mutagenic, while Z matches background. More colonies means more mutation, not less, and a few background colonies are expected on every plate.`,
  },
  [r`Why do R plasmids spread multidrug resistance faster than chromosomal mutation ever could?`]: {
    question: r`A farm uses only tetracycline. Its bacteria carry an R plasmid with genes for resistance to tetracycline, ampicillin and streptomycin. Over time, what happens to the frequency of ampicillin resistance on the farm, and why?`,
    options: [
      r`It rises, since tetracycline selects the whole linked plasmid`,
      r`It falls, since ampicillin resistance is useless without the drug`,
      r`It stays flat, since each gene is selected only by its own drug`,
      r`It rises, since tetracycline mutates the ampicillin target gene`,
    ],
    correctAnswer: 0,
    explanation: r`The resistance genes sit together on one plasmid, so any one of the drugs selects for cells carrying the whole set: tetracycline use enriches ampicillin resistance too. "Falls" and "stays flat" treat the genes as if they were inherited separately. The rise comes from coselection of linked genes, not from tetracycline causing mutations.`,
  },
  [r`Gene transfer between two strains persists when DNase is added to the medium. Transformation is ruled out because {{c1::naked DNA}} would be degraded.`]: {
    question: r`Gene transfer between two strains continues at the same rate with DNase in the medium. From this result alone, a student concludes that the mechanism must be conjugation. What is wrong with this conclusion?`,
    options: [
      r`Transformation also survives DNase, so only transduction is excluded`,
      r`Transduction also survives DNase, so only transformation is excluded`,
      r`Nothing is wrong, since conjugation is the only route to survive DNase`,
      r`DNase blocks conjugation as well, so all three routes are excluded`,
    ],
    correctAnswer: 1,
    explanation: r`DNase destroys only naked DNA in the medium, so persistence rules out transformation and nothing else. Transduction (DNA inside a capsid) and conjugation (DNA inside a mating bridge) both survive, and a contact test such as a filter is needed to tell them apart. Transformation does not survive DNase, and conjugation is not blocked by it.`,
  },
  [r`Interrupted-mating experiments transfer genes in a fixed time order because {{c1::the chromosome enters linearly}} from the Hfr origin.`]: {
    question: r`In an Hfr × F⁻ mating, donor gene x first enters recipients at 10 minutes and donor gene y at 30 minutes. One sample is blended at 20 minutes to separate the pairs and is then plated. Which recombinants can be found in it?`,
    options: [
      r`Recombinants for y but none for x, since x had already left`,
      r`Recombinants for both, since genes enter in a random order`,
      r`Recombinants for neither, since blending kills the donors`,
      r`Recombinants for x but none for y, since y had not entered`,
    ],
    correctAnswer: 3,
    explanation: r`The donor chromosome enters as a line starting at the origin of transfer, so genes arrive in a fixed order: by 20 minutes x is in but y is not. Entry is not random, so y cannot arrive ahead of x, and a gene that has entered does not leave again. Blending separates the mating pairs; recombinants still form in the recipients.`,
  },
  [r`Distinguish a selectable marker from a screenable marker in cloning.`]: {
    question: r`A plasmid carries a kanamycin-resistance gene and a gene for green fluorescent protein (GFP). Cells are plated on kanamycin, and the surviving colonies are then viewed under blue light to find the glowing ones. How are the two genes being used?`,
    options: [
      r`Kanamycin resistance as a selectable marker; GFP as a screenable one`,
      r`Kanamycin resistance as a screenable marker; GFP as a selectable one`,
      r`Both as selectable markers, since each removes cells with no plasmid`,
      r`Both as screenable markers, since each is detected only by inspection`,
    ],
    correctAnswer: 0,
    explanation: r`A selectable marker decides which cells live: kanamycin kills every cell without the resistance gene. A screenable marker lets all cells live and only shows which ones to pick, as GFP does by fluorescence. Reversing the labels mixes up killing with inspecting, and GFP removes no cells while kanamycin resistance is not judged by eye.`,
  },
  [r`The Luria-Delbruck fluctuation test showed resistant mutants arise {{c1::before}} exposure to the selective agent.`]: {
    question: r`Twenty small cultures are each grown separately from a few phage-sensitive cells, and each is then plated on phage. Most plates show 0 to 3 resistant colonies, but two plates show more than 100. What does this pattern indicate?`,
    options: [
      r`Resistance arose on the plates, induced by contact with phage`,
      r`Resistance arose in every cell but showed in only a few cells`,
      r`Resistance arose at random times before any phage exposure`,
      r`Resistance arose from two cultures being contaminated by phage`,
    ],
    correctAnswer: 2,
    explanation: r`Wide fluctuation between identical cultures means mutations occurred at random during growth: an early mutation leaves many resistant descendants (a jackpot), a late one leaves few. If phage induced resistance on the plates, every plate would show a similar count. The cultures had not met phage before plating, and resistance in every cell would give full growth on all plates.`,
  },
  [r`On X-gal plates, colonies carrying an insert in the polylinker appear {{c1::white}} rather than blue.`]: {
    question: r`A gene is ligated into the polylinker that lies within the lacZ α fragment of a vector, and transformed cells are plated on ampicillin with X-gal. Which colonies carry a plasmid that contains the gene, and why?`,
    options: [
      r`Blue ones: the insert switches on β-galactosidase production`,
      r`Blue ones: an intact lacZ fragment shows the insert is present`,
      r`White ones: they carry no plasmid and so cannot cleave X-gal`,
      r`White ones: the insert disrupts lacZ, so X-gal is not cleaved`,
    ],
    correctAnswer: 3,
    explanation: r`An insert in the polylinker interrupts the lacZ α fragment, so no working β-galactosidase forms, X-gal stays colorless and the colony is white. Blue colonies have an intact lacZ fragment, which means an empty vector. Cells with no plasmid cannot grow on ampicillin, so white colonies on this plate are not plasmid-free.`,
  },
  [r`How does replica plating demonstrate that antibiotic-resistant mutants were not induced by the drug?`]: {
    question: r`A drug-free master plate holds 200 colonies. Replicas pressed onto three streptomycin plates each show growth at the same two positions. Cells are then taken from those two positions on the master plate, which never touched the drug. What is found if the drug did NOT induce the resistance?`,
    options: [
      r`These cells are sensitive, like every other colony on the master`,
      r`These cells are already resistant, though they never met the drug`,
      r`These cells are resistant only after a first exposure to the drug`,
      r`These cells are sensitive, but mutate faster than their neighbors`,
    ],
    correctAnswer: 1,
    explanation: r`Growth at the same positions on every replica shows the resistant cells came from particular master colonies, and recovering resistant cells from those colonies on the never-exposed master plate proves the mutation existed before the drug. Sensitive cells at those positions, or resistance that needs a first exposure, is what induction by the drug would predict.`,
  },
}
