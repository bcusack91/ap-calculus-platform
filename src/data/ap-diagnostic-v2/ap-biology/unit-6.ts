/**
 * AP Biology diagnostic v2 — Unit 6: Gene Expression and Regulation (CED 6.1–6.8).
 * Four data sets (pre-mRNA splicing figure, enhancer-deletion table, DNA gel
 * figure, mRNA/protein decay graph) plus standalone items. Only the enzyme
 * names the CED allows (DNA polymerase, ligase, RNA polymerase, helicase,
 * topoisomerase); no biotechnology technique details (6.8 exclusion).
 * Biotechnology items are tagged dna-replication and mutation items
 * translation, matching the v1 diagnostic's topic mapping.
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

const SPLICING_SVG =
  '<svg viewBox="0 0 460 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A gene with three exons and two introns, and its mature mRNA" fill="none" stroke="currentColor" stroke-width="2">' +
  '<title>Pre-mRNA and mature mRNA of gene W</title>' +
  '<g font-size="11" fill="currentColor" stroke="none">' +
  '<text x="10" y="18">Pre-mRNA</text>' +
  '<text x="34" y="36">Exon 1</text><text x="108" y="36">Intron 1</text><text x="183" y="36">Exon 2</text><text x="258" y="36">Intron 2</text><text x="364" y="36">Exon 3</text>' +
  '<text x="38" y="78">150</text><text x="120" y="78">400</text><text x="192" y="78">120</text><text x="270" y="78">900</text><text x="375" y="78">210</text>' +
  '<text x="150" y="94">(lengths in nucleotides; not to scale)</text>' +
  '<text x="10" y="118">Mature mRNA</text>' +
  '</g>' +
  '<rect x="20" y="45" width="75" height="20"/>' +
  '<line x1="95" y1="55" x2="175" y2="55"/>' +
  '<rect x="175" y="45" width="60" height="20"/>' +
  '<line x1="235" y1="55" x2="335" y2="55"/>' +
  '<rect x="335" y="45" width="105" height="20"/>' +
  '<circle cx="28" cy="140" r="7" fill="currentColor"/>' +
  '<rect x="40" y="130" width="75" height="20"/>' +
  '<rect x="115" y="130" width="60" height="20"/>' +
  '<rect x="175" y="130" width="105" height="20"/>' +
  '<g font-size="10" fill="currentColor" stroke="none"><text x="60" y="144">E1</text><text x="137" y="144">E2</text><text x="220" y="144">E3</text><text x="10" y="164">5′ cap</text><text x="288" y="144">AAAAA…  poly-A tail</text></g>' +
  '</svg>'

const GEL_SVG =
  '<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gel with a size ladder and four lanes of DNA bands" fill="none" stroke="currentColor" stroke-width="2">' +
  '<title>Gel electrophoresis of one DNA region from four people</title>' +
  '<rect x="60" y="10" width="330" height="200" stroke-width="1"/>' +
  '<g font-size="11" fill="currentColor" stroke="none">' +
  '<text x="78" y="26">Ladder</text><text x="140" y="26">Mother</text><text x="205" y="26">Child</text><text x="262" y="26">Man 1</text><text x="325" y="26">Man 2</text>' +
  '<text x="8" y="58">1000 bp</text><text x="14" y="88">700 bp</text><text x="14" y="118">500 bp</text><text x="14" y="158">300 bp</text><text x="14" y="188">200 bp</text>' +
  '<text x="350" y="222">+</text><text x="350" y="8">−</text>' +
  '</g>' +
  '<g stroke-width="5">' +
  '<line x1="80" y1="54" x2="115" y2="54"/><line x1="80" y1="84" x2="115" y2="84"/><line x1="80" y1="114" x2="115" y2="114"/><line x1="80" y1="154" x2="115" y2="154"/><line x1="80" y1="184" x2="115" y2="184"/>' +
  '<line x1="140" y1="114" x2="180" y2="114"/><line x1="140" y1="184" x2="180" y2="184"/>' +
  '<line x1="200" y1="114" x2="240" y2="114"/><line x1="200" y1="154" x2="240" y2="154"/>' +
  '<line x1="260" y1="84" x2="300" y2="84"/><line x1="260" y1="184" x2="300" y2="184"/>' +
  '<line x1="320" y1="84" x2="360" y2="84"/><line x1="320" y1="154" x2="360" y2="154"/>' +
  '</g>' +
  '</svg>'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u6-s1',
    title: 'Processing the pre-mRNA of gene W',
    kind: 'figure',
    content:
      'The figure shows the pre-mRNA transcribed from eukaryotic gene W and the mature mRNA made from it. The pre-mRNA has, in order, exon 1 (150 nucleotides), intron 1 (400), exon 2 (120), intron 2 (900) and exon 3 (210). The mature mRNA has a 5′ cap, then exon 1, exon 2 and exon 3 joined end to end, then a poly-A tail.',
    svg: SPLICING_SVG,
  },
  {
    id: 'bio-u6-s2',
    title: 'Regulatory regions of a liver gene',
    kind: 'table',
    content:
      'Gene X is normally expressed at high levels in liver cells but hardly at all in muscle cells. Upstream of its promoter are three regulatory regions, R1, R2 and R3. Researchers joined the promoter, with different combinations of the regions, to a reporter gene whose product is easy to measure, and put each construct into liver cells and into muscle cells.\n\n' +
      '| Construct | Regions included with the promoter | Reporter expression in liver cells (relative units) | Reporter expression in muscle cells (relative units) |\n' +
      '|---|---|---|---|\n' +
      '| 1 | R1, R2, R3 | 100 | 5 |\n' +
      '| 2 | R2, R3 | 8 | 5 |\n' +
      '| 3 | R1, R3 | 100 | 5 |\n' +
      '| 4 | R1, R2 | 100 | 60 |\n' +
      '| 5 | None (promoter only) | 6 | 4 |',
  },
  {
    id: 'bio-u6-s3',
    title: 'DNA bands from a family',
    kind: 'figure',
    content:
      'One highly variable region of DNA was copied from a mother, her child and two men, and the copies were separated by gel electrophoresis beside a ladder of DNA fragments of known sizes (1,000, 700, 500, 300 and 200 base pairs). DNA moves toward the positive electrode at the bottom of the gel. Each person has two bands, one from each copy of the region. Mother: 500 and 200 bp. Child: 500 and 300 bp. Man 1: 700 and 200 bp. Man 2: 700 and 300 bp.',
    svg: GEL_SVG,
  },
  {
    id: 'bio-u6-s4',
    title: 'mRNA and protein after transcription is blocked',
    kind: 'graph',
    content:
      'Cultured cells were treated at time 0 with a drug that blocks all new transcription. Researchers then measured the amount of the mRNA of gene Y and the amount of protein Y every 2 hours, each as a percentage of its amount at time 0 (Figure 1).',
    chart: {
      title: 'Figure 1. Gene Y mRNA and protein Y after transcription was blocked at time 0',
      kind: 'line',
      xLabel: 'Time after drug added',
      xUnit: 'h',
      yLabel: 'Amount remaining',
      yUnit: '% of amount at time 0',
      xValues: [0, 2, 4, 6, 8],
      yValues: [100, 50, 25, 12, 6],
      seriesLabel: 'Gene Y mRNA',
      comparisonSeries: [{ label: 'Protein Y', yValues: [100, 95, 88, 80, 72] }],
    },
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u6-s1-q1',
    stimulusId: 'bio-u6-s1',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'easy',
    stem: 'Based on the figure, which parts of the pre-mRNA are not present in the mature mRNA?',
    options: ['Introns 1 and 2', 'Exons 1 and 3', 'Exon 2 and intron 2', 'The 5′ cap and poly-A tail'],
    correctIndex: 0,
    explanation:
      'The mature mRNA contains exons 1, 2 and 3 joined together, plus a cap and tail added during processing, so introns 1 and 2 have been spliced out. Exons 1, 2 and 3 all appear in the mature mRNA. The cap and tail are added to the mRNA, not removed from it.',
  },
  {
    id: 'bio-u6-s1-q2',
    stimulusId: 'bio-u6-s1',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'medium',
    stem: 'In some cell types, exon 2 of gene W is skipped during splicing. Which description fits the mature mRNA made in those cells?',
    options: [
      'A 5′ cap, exon 1, exon 3 and a poly-A tail, with 360 nucleotides of exon sequence',
      'A 5′ cap, exon 1, intron 1, exon 3 and a poly-A tail, with 760 nucleotides in all',
      'A 5′ cap, exon 2 and a poly-A tail, with 120 nucleotides of exon sequence in all',
      'A 5′ cap, exon 1, exon 2, exon 3 and a poly-A tail, with 480 nucleotides of exons',
    ],
    correctIndex: 0,
    explanation:
      'Skipping exon 2 means it is removed along with the introns, so exons 1 and 3 are joined: 150 + 210 = 360 nucleotides of exon sequence, still with a cap and tail. Introns are not kept, so the 760-nucleotide version is wrong. Keeping only exon 2 reverses the meaning of skipping. 480 nucleotides is the normal mRNA with all three exons. Alternative splicing like this lets one gene give different proteins in different cells.',
  },
  {
    id: 'bio-u6-s1-q3',
    stimulusId: 'bio-u6-s1',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'medium',
    stem: 'A mutation at the boundary between exon 2 and intron 2 prevents intron 2 from being removed, though the rest of processing is normal. Not counting the cap and tail, how long would the mature mRNA be?',
    options: ['1,380 nucleotides', '480 nucleotides', '1,780 nucleotides', '880 nucleotides'],
    correctIndex: 0,
    explanation:
      'Intron 1 is still removed, but intron 2 stays: 150 (exon 1) + 120 (exon 2) + 900 (intron 2) + 210 (exon 3) = 1,380 nucleotides. The ribosome would read the intron as codons, adding amino acids and very likely an early stop codon. 480 is the normal mRNA. 1,780 keeps both introns, the full pre-mRNA. 880 keeps intron 1 (400) instead of intron 2.',
  },
  {
    id: 'bio-u6-s2-q1',
    stimulusId: 'bio-u6-s2',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'easy',
    stem: 'Based on the data, which regulatory region is required for high expression in liver cells?',
    options: ['R1', 'R2', 'R3', 'None of the three'],
    correctIndex: 0,
    explanation:
      'Liver expression stays at 100 whenever R1 is present (constructs 1, 3 and 4) and falls to near the promoter-only level (8 versus 6) when only R1 is missing (construct 2). Removing R2 (construct 3) or R3 (construct 4) leaves liver expression at 100. The promoter alone gives only 6, so a regulatory region is needed.',
  },
  {
    id: 'bio-u6-s2-q2',
    stimulusId: 'bio-u6-s2',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'medium',
    stem: 'Which two constructs should be compared to show that region R2 is not needed for high expression in liver cells?',
    options: ['Constructs 1 and 3', 'Constructs 1 and 2', 'Constructs 1 and 4', 'Constructs 2 and 5'],
    correctIndex: 0,
    explanation:
      'Constructs 1 and 3 differ only in R2 (construct 3 lacks it), and both give 100 units in liver cells, so R2 is not needed there. Constructs 1 and 2 differ in R1. Constructs 1 and 4 differ in R3. Constructs 2 and 5 differ in R2 and R3 together, so they cannot isolate R2, and neither is highly expressed in liver.',
  },
  {
    id: 'bio-u6-s2-q3',
    stimulusId: 'bio-u6-s2',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'hard',
    stem: 'Which conclusion about region R3 is best supported by the data?',
    options: [
      'R3 binds a protein in muscle cells that represses transcription, because removing it raised muscle expression.',
      'R3 binds an activator in liver cells, because liver expression fell sharply when R3 was removed from the construct.',
      'R3 is needed for any transcription at all, because no construct without R3 was expressed in either type of cell.',
      'R3 has no role in either cell type, because liver expression stayed at 100 whether R3 was present or absent.',
    ],
    correctIndex: 0,
    explanation:
      'Removing R3 (construct 4) raised muscle expression from 5 to 60 while leaving liver expression at 100, so in muscle cells R3 normally holds expression down, most likely by binding a repressor found in muscle cells. Liver expression did not fall without R3. Construct 4 lacks R3 and was strongly expressed. R3 has no effect in liver cells, but it clearly matters in muscle cells.',
  },
  {
    id: 'bio-u6-s3-q1',
    stimulusId: 'bio-u6-s3',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'easy',
    stem: 'Based on the gel, about how long is the child’s band that the child did not inherit from the mother?',
    options: ['300 base pairs', '500 base pairs', '700 base pairs', '200 base pairs'],
    correctIndex: 0,
    explanation:
      'The child has bands at 500 and 300 bp. The mother also has a 500-bp band, so the child’s 300-bp band, level with the 300-bp ladder band, must have come from the father. 500 bp is the band shared with the mother. 700 bp and 200 bp do not appear in the child’s lane.',
  },
  {
    id: 'bio-u6-s3-q2',
    stimulusId: 'bio-u6-s3',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'hard',
    stem: 'Based on the gel, which man could be the child’s biological father?',
    options: [
      'Man 2, because he has a 300-bp band, the band the child did not get from the mother',
      'Man 1, because he has a 200-bp band, the same as one of the bands of the mother',
      'Man 1, because he has a 700-bp band, larger than any of the bands of the mother',
      'Either man, because each one shares at least one band with the child or the mother',
    ],
    correctIndex: 0,
    explanation:
      'A child inherits one copy of the region from each parent. The child’s 500-bp band can come from the mother, so the other band (300 bp) must come from the father. Man 2 has a 300-bp band; Man 1 does not, so Man 1 is excluded. Sharing a band with the mother says nothing about paternity. A 700-bp band does not appear in the child at all. A possible father must share a band with the child that the mother cannot explain, not merely a band with the mother.',
  },
  {
    id: 'bio-u6-s4-q1',
    stimulusId: 'bio-u6-s4',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'medium',
    stem: 'Based on Figure 1, how long does it take for half of the gene Y mRNA present at time 0 to be broken down?',
    options: ['About 2 hours', 'About 4 hours', 'About 8 hours', 'About 1 hour'],
    correctIndex: 0,
    explanation:
      'The mRNA falls from 100% to 50% in the first 2 hours, and then halves again every 2 hours (25% at 4 h, 12% at 6 h), so its half-life is about 2 hours. At 4 hours only a quarter remains. 8 hours is when about 6% remains. 1 hour is shorter than any interval measured, and at 2 hours half still remains.',
  },
  {
    id: 'bio-u6-s4-q2',
    stimulusId: 'bio-u6-s4',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'hard',
    stem: 'Which conclusion is best supported by comparing the two curves in Figure 1?',
    options: [
      'Protein Y is broken down much more slowly than its mRNA, so the protein persists after its mRNA is gone.',
      'Protein Y is still being translated from new mRNA, because the drug blocks transcription only in some cells.',
      'Protein Y is broken down at the same rate as its mRNA, because each mRNA is linked to one protein molecule.',
      'Protein Y is made directly from DNA once the mRNA is gone, so the protein level stays high for many hours.',
    ],
    correctIndex: 0,
    explanation:
      'After 8 hours, 72% of the protein remains but only 6% of the mRNA, so the protein is degraded far more slowly than its mRNA. Existing protein molecules keep working even after transcription stops, which is one reason a cell’s protein levels lag behind changes in transcription. The drug blocks all new transcription, so no new mRNA is made. The two curves fall at very different rates. Proteins are always made from mRNA, never directly from DNA.',
  },
  {
    id: 'bio-u6-001',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'easy',
    stem: 'A drug blocks the enzyme that breaks the hydrogen bonds between the two strands of DNA at a replication fork. Which enzyme does the drug block?',
    options: ['Helicase', 'Ligase', 'DNA polymerase', 'RNA polymerase'],
    correctIndex: 0,
    explanation:
      'Helicase unwinds the double helix at the fork by breaking the hydrogen bonds between base pairs. Ligase joins DNA fragments by forming covalent bonds in the backbone. DNA polymerase adds nucleotides to a new strand. RNA polymerase transcribes DNA into RNA.',
  },
  {
    id: 'bio-u6-002',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'easy',
    stem: 'During transcription, RNA polymerase reads the template strand of a gene. Which nucleotide does it add to the RNA wherever the template strand has adenine?',
    options: ['Uracil', 'Thymine', 'Adenine', 'Guanine'],
    correctIndex: 0,
    explanation:
      'RNA uses uracil in place of thymine, so adenine in the template pairs with uracil in the new RNA. Thymine pairs with adenine in DNA, but it is not found in RNA. Adenine in the template is not copied as adenine. Guanine pairs with cytosine.',
  },
  {
    id: 'bio-u6-003',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'easy',
    stem: 'A researcher copies one DNA molecule using PCR. Each cycle doubles the number of copies. How many copies are present after 5 cycles?',
    options: ['32', '10', '25', '64'],
    correctIndex: 0,
    explanation:
      'Doubling five times gives 2⁵ = 32 copies. 10 adds two copies per cycle instead of doubling. 25 multiplies 5 by itself. 64 is the result after 6 cycles.',
  },
  {
    id: 'bio-u6-004',
    unit: 'unit-6',
    topicSlug: 'translation',
    difficulty: 'medium',
    stem: 'Electron micrographs of a cell show a single mRNA molecule with a dozen ribosomes spaced along it, each attached to a growing polypeptide. What is the main result of this arrangement?',
    options: [
      'Many copies of the same protein are made from one mRNA at the same time.',
      'Each ribosome makes a different protein from a different part of the mRNA.',
      'The ribosomes join their polypeptides together into one very long protein.',
      'The mRNA is copied by the ribosomes into many new molecules of mRNA.',
    ],
    correctIndex: 0,
    explanation:
      'Every ribosome starts at the same start codon and translates the whole coding sequence, so a string of ribosomes on one mRNA (a polyribosome) makes many copies of the same protein at once. The ribosomes read the same message, not different parts. Each releases its own polypeptide, and ribosomes translate mRNA; they do not copy it.',
  },
  {
    id: 'bio-u6-005',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'medium',
    stem: 'In fruit flies, a mutation in a single regulatory gene causes legs to grow on the head where antennae normally form. The leg cells themselves are normal. Which explanation is best supported?',
    options: [
      'The gene encodes a protein that switches on the genes telling a body region which structure to build.',
      'The gene encodes a structural protein found only in antennae, so leg proteins are made in its place instead.',
      'The mutation turned the cells of the head into a different species of fly with a different body plan.',
      'The mutation copied the leg genes onto the head chromosome, so the head cells contain extra leg genes.',
    ],
    correctIndex: 0,
    explanation:
      'A single regulatory gene that controls whether a whole structure forms must act by switching on or off many other genes. Genes like this, such as HOX genes, give each region of the body its identity during development, so a mutation can make one region build another region’s structure. A missing antenna protein would not produce complete, normal legs. A mutation does not change a fly’s species. All cells already contain the leg genes; the mutation changes where they are expressed, not how many there are.',
  },
  {
    id: 'bio-u6-006',
    unit: 'unit-6',
    topicSlug: 'translation',
    difficulty: 'medium',
    stem: 'Two mutations occur at the same position near the middle of a gene’s coding region. Mutation 1 inserts one nucleotide; mutation 2 inserts three nucleotides. Which comparison of their effects is most likely?',
    options: [
      'Mutation 1 shifts the reading frame and changes every codon after it; mutation 2 adds one amino acid and keeps the frame.',
      'Mutation 1 adds one amino acid and keeps the frame; mutation 2 shifts the reading frame and changes every later codon.',
      'Both mutations shift the reading frame, but mutation 2 changes three times as many of the codons after it.',
      'Neither mutation changes the protein, because insertions are removed with the introns during RNA processing.',
    ],
    correctIndex: 0,
    explanation:
      'The ribosome reads codons three nucleotides at a time. One extra nucleotide shifts every later codon (a frameshift), usually scrambling the rest of the protein and often creating an early stop codon. Three extra nucleotides add exactly one codon, so one amino acid is added and the rest of the protein is unchanged. The second option swaps the two effects. Three added nucleotides keep the frame. The insertions are in the coding region, which is kept in the mRNA.',
  },
  {
    id: 'bio-u6-007',
    unit: 'unit-6',
    topicSlug: 'translation',
    difficulty: 'medium',
    stem: 'A gene for antibiotic resistance is found on a plasmid in a soil bacterium. A few years later, an identical gene appears on a plasmid in an unrelated species of bacteria living in the same soil. Which explanation is best supported?',
    options: [
      'The plasmid was passed between the two species by horizontal gene transfer.',
      'Each species made the same mutation independently in response to the antibiotic.',
      'The antibiotic caused the second species to build the gene from its own proteins.',
      'The two species are actually one species, because they now carry the same plasmid.',
    ],
    correctIndex: 0,
    explanation:
      'Bacteria can pass plasmids to other cells, even of other species, by processes such as conjugation and transformation. An identical gene appearing on a plasmid in a neighboring species is best explained by this horizontal transfer. The same full gene sequence arising independently by mutation is extremely unlikely, and an antibiotic selects existing resistance rather than causing it. Genes are not built from proteins. Sharing a plasmid does not make two species one.',
  },
  {
    id: 'bio-u6-008',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'medium',
    stem: 'Normally, DNA polymerase checks each nucleotide it adds and removes most mismatched ones. A mutant bacterium has a DNA polymerase that copies DNA at the normal speed but cannot remove mismatched nucleotides. Which result is expected?',
    options: [
      'The mutant’s offspring have a much higher rate of new mutations than wild-type bacteria.',
      'The mutant can no longer replicate its DNA, because every new strand contains mismatches.',
      'The mutant’s DNA replication becomes conservative, keeping both old strands together.',
      'The mutant’s DNA is copied more accurately, because the polymerase never stops to check.',
    ],
    correctIndex: 0,
    explanation:
      'Proofreading by DNA polymerase removes most errors as they are made. Without it, replication continues but leaves many more mismatches, which become mutations after the next round of replication, so the mutation rate rises sharply. Most nucleotides are still added correctly, so replication still works. Proofreading has nothing to do with whether replication is semiconservative. Skipping the checks makes copying less accurate, not more.',
  },
  {
    id: 'bio-u6-009',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'hard',
    stem: 'Researchers mix the mature mRNA of a eukaryotic gene with one strand of that gene’s DNA, so that complementary sequences pair. Electron micrographs show the mRNA paired with the DNA along most of its length, but with three loops of single-stranded DNA that bulge out and do not pair with anything. What do the loops most likely represent?',
    options: [
      'Introns, which are transcribed but are removed from the pre-mRNA before it becomes mature mRNA',
      'Exons, which are removed from the mature mRNA after it leaves the nucleus for the cytoplasm',
      'The 5′ cap and poly-A tail, which are added to the mRNA but are not coded for in the gene',
      'Stop codons, which do not pair with the mRNA because no tRNA ever binds to them during translation',
    ],
    correctIndex: 0,
    explanation:
      'The mature mRNA contains only exon sequences. Wherever the gene has an intron, the DNA has a stretch with no matching sequence in the mRNA, so it bulges out as a loop. Three loops mean three introns. Exons are kept in the mature mRNA, which is why most of the mRNA pairs with the DNA. The cap and tail are on the mRNA side and have no DNA to pair with, so they would not form DNA loops. Stop codons are part of the mRNA and pair normally with the DNA.',
  },
  {
    id: 'bio-u6-010',
    unit: 'unit-6',
    topicSlug: 'transcription-rna-processing',
    difficulty: 'hard',
    stem: 'A complete human gene, including its introns, is inserted into bacteria along with a bacterial promoter. The bacteria transcribe and translate it, but the protein they make is much longer than the human protein and does not work. Which explanation is best supported?',
    options: [
      'Bacteria do not remove introns, so intron sequences were translated as part of the protein.',
      'Bacteria use a different genetic code, so every codon was read as a different amino acid.',
      'Bacterial ribosomes cannot read human mRNA, so they added random amino acids to the chain.',
      'Bacterial cells remove exons instead of introns, so only the intron sequences were translated.',
    ],
    correctIndex: 0,
    explanation:
      'Bacterial genes generally lack introns, and bacteria do not splice. The intron sequences stayed in the mRNA and were read as codons, adding extra amino acids (or shifting the frame) and producing a long, nonfunctional protein. This is why researchers give bacteria a version of a eukaryotic gene with the introns already removed. The genetic code is nearly universal, so bacteria read human codons the same way. Ribosomes read any mRNA; they do not add random amino acids. Bacteria do not remove exons.',
  },
  {
    id: 'bio-u6-011',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'medium',
    stem: 'Bacteria are mixed with a plasmid that carries a gene for resistance to the antibiotic ampicillin, and then spread on a plate containing ampicillin. Only a small number of colonies grow. Which statement best explains why only those colonies grew?',
    options: [
      'Only bacteria that took up the plasmid had the resistance gene and could survive the ampicillin.',
      'Only bacteria that mutated in response to the ampicillin on the plate became able to grow on it.',
      'Only bacteria that divided fastest before plating were numerous enough to outlast the ampicillin.',
      'Only bacteria that broke down the plasmid for energy were able to divide on the ampicillin plate.',
    ],
    correctIndex: 0,
    explanation:
      'Few bacteria take up a plasmid during transformation. Ampicillin kills bacteria without the resistance gene, so only transformed cells, which carry and express the plasmid’s gene, survive and form colonies. Ampicillin does not cause the mutations that protect against it; it kills cells that lack resistance. Fast growth before plating does not protect cells that lack the resistance gene. A plasmid confers resistance only when its gene is expressed, not when it is broken down.',
  },
  {
    id: 'bio-u6-012',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'easy',
    stem: 'As helicase unwinds DNA at a replication fork, the double helix ahead of the fork becomes more and more tightly twisted. Which enzyme relieves this strain so that unwinding can continue?',
    options: ['Topoisomerase', 'DNA polymerase', 'Ligase', 'RNA polymerase'],
    correctIndex: 0,
    explanation:
      'Topoisomerase relieves the overwinding ahead of the fork by cutting, untwisting and rejoining DNA strands. DNA polymerase builds new strands, ligase joins fragments in the backbone, and RNA polymerase transcribes genes; none of them relieve twisting.',
  },
  {
    id: 'bio-u6-013',
    unit: 'unit-6',
    topicSlug: 'translation',
    difficulty: 'medium',
    stem: 'The gene for a fluorescent protein from a jellyfish is inserted into the DNA of mice, and the mice’s cells make the same glowing protein. Which statement best explains why this is possible?',
    options: [
      'Mice and jellyfish share nearly the same genetic code, so mouse cells read each codon the same way.',
      'Mice and jellyfish have identical genomes, so the mouse cells already contained the fluorescent protein.',
      'Mouse cells copy proteins directly from the jellyfish DNA, without making any mRNA from the new gene.',
      'Mouse cells take up the fluorescent protein from the jellyfish DNA, which carries the protein with it.',
    ],
    correctIndex: 0,
    explanation:
      'The genetic code is shared by nearly all organisms, evidence of common ancestry. Mouse cells transcribe the jellyfish gene and their ribosomes read each codon as the same amino acid that jellyfish cells would, so they make the same protein. Mouse and jellyfish genomes differ greatly; mice did not make this protein before. Proteins are made from mRNA by translation, not copied from DNA, and inserted DNA does not carry proteins with it.',
  },
  {
    id: 'bio-u6-014',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'hard',
    stem: 'In a species of fish, one population has a mutation in an enhancer of gene P, and the protein made from gene P is identical to the normal protein. Fish with the mutation make protein P in their fins, where other fish never make it, and their fins are shaped differently. Which conclusion is best supported?',
    options: [
      'A change in a regulatory sequence can alter where a gene is expressed, changing phenotype but not protein.',
      'A change in a regulatory sequence must alter the amino acids of the protein, because the fin shape of the fish has changed.',
      'A change in a regulatory sequence cannot affect the phenotype, so the new fin shape must be caused by the environment.',
      'A change in a regulatory sequence makes the gene a new gene, because protein P is now made in a part of the body.',
    ],
    correctIndex: 0,
    explanation:
      'Enhancers help determine when and in which cells a gene is transcribed. Here the protein is unchanged, but the mutation switches gene P on in the fins, and the new expression pattern changes fin shape. Mutations in regulatory regions can therefore change phenotype by changing where or how much a gene is expressed. The stem says the protein is identical. The phenotype is tied to the mutation, so the environment is not needed as an explanation. The gene still encodes the same protein, so it is not a new gene.',
  },
  {
    id: 'bio-u6-015',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'hard',
    stem: 'During development, a brief signal switches on gene M in some embryonic cells. Protein M is a transcription factor, and one of the genes it activates is gene M itself. Long after the signal is gone, those cells and their descendants still express gene M. Which explanation is best supported?',
    options: [
      'Once protein M is present, it keeps activating its own gene, so expression continues without the signal.',
      'The signal permanently changed the DNA sequence of gene M, so the gene can no longer be switched off.',
      'Protein M is never broken down, so the original protein molecules are passed to every later cell.',
      'Gene M is expressed in all cells of the embryo, so it was never switched off in these cells at all.',
    ],
    correctIndex: 0,
    explanation:
      'A transcription factor that activates its own gene forms a positive feedback loop: once there is enough protein M, it keeps making more, so the gene stays on after the signal is gone and descendants inherit the active state through the protein they receive. Signals change gene expression, not DNA sequence. Proteins are diluted and degraded over many divisions, so the original molecules cannot sustain expression by themselves. The stem says gene M is switched on only in some cells.',
  },
  {
    id: 'bio-u6-016',
    unit: 'unit-6',
    topicSlug: 'dna-replication',
    difficulty: 'medium',
    stem: 'A circular plasmid has exactly three sites recognized by a particular restriction enzyme. If the plasmid is cut completely by this enzyme, how many DNA fragments are produced?',
    options: ['3', '4', '2', '6'],
    correctIndex: 0,
    explanation:
      'A circle has no ends, so each cut adds one fragment only after the first: cutting a circle at 3 sites gives 3 fragments. Four is the answer for a linear molecule cut at 3 sites. Two is the answer for 2 cuts in a circle. Six double-counts the cuts.',
  },
  {
    id: 'bio-u6-017',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'hard',
    stem: 'The nucleus of a fully differentiated intestinal cell from a frog is transplanted into a frog egg whose own nucleus has been destroyed. Some of these eggs develop into normal tadpoles with every type of cell. Which conclusion is best supported?',
    options: [
      'The differentiated cell still contained all of the genes needed to make every cell type.',
      'The intestinal cell lost most of its genes as it differentiated, but the egg replaced them.',
      'The egg’s cytoplasm made new genes for each cell type that the intestinal nucleus lacked.',
      'Intestinal cells express every gene in the genome, so they can become any kind of cell.',
    ],
    correctIndex: 0,
    explanation:
      'A whole tadpole with every cell type developed from the intestinal cell’s nucleus, so that nucleus still held a complete genome. Differentiation therefore comes from expressing different subsets of genes, not from losing genes. Egg cytoplasm can change which genes are expressed but cannot make genes. A differentiated cell expresses only part of its genome.',
  },
  {
    id: 'bio-u6-018',
    unit: 'unit-6',
    topicSlug: 'gene-regulation',
    difficulty: 'medium',
    stem: 'In a bacterium, operon A encodes enzymes that break down sugar S and is transcribed only when S is present. Operon B encodes enzymes that build amino acid T and is transcribed only when T is absent. Which description of the two operons is correct?',
    options: [
      'Operon A is inducible and operon B is repressible.',
      'Operon A is repressible and operon B is inducible.',
      'Both operons are inducible by their end products.',
      'Both operons are always on, whatever the medium.',
    ],
    correctIndex: 0,
    explanation:
      'An inducible operon is normally off and is switched on by a molecule such as the sugar it breaks down (like the lac operon). A repressible operon is normally on and is switched off when its end product is plentiful (like the trp operon). Operon A matches the first pattern and operon B the second. The second option reverses them. Operon B is shut off, not induced, by T. Neither operon is always on, since each depends on the medium.',
  },
]
