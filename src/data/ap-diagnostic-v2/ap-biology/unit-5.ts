/**
 * AP Biology diagnostic v2 — Unit 5: Heredity (CED 5.1–5.5).
 * Four 2-item sets (pedigree figure, dihybrid chi-square table, reptile
 * incubation-temperature graph, meiosis I figure) plus standalone items.
 * No three-point crosses, coefficient of coincidence or named chromosomal
 * disorders; chi-square df = categories − 1 (CED formula sheet).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

const PEDIGREE_SVG =
  '<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-generation pedigree" fill="none" stroke="currentColor" stroke-width="2">' +
  '<title>Pedigree of a family with an inherited trait</title>' +
  '<g font-size="13" fill="currentColor" stroke="none"><text x="12" y="45">I</text><text x="12" y="125">II</text><text x="12" y="210">III</text></g>' +
  '<rect x="155" y="25" width="30" height="30"/>' +
  '<circle cx="250" cy="40" r="15"/>' +
  '<line x1="185" y1="40" x2="235" y2="40"/>' +
  '<line x1="210" y1="40" x2="210" y2="85"/>' +
  '<line x1="90" y1="85" x2="300" y2="85"/>' +
  '<line x1="90" y1="85" x2="90" y2="105"/>' +
  '<line x1="195" y1="85" x2="195" y2="105"/>' +
  '<line x1="300" y1="85" x2="300" y2="105"/>' +
  '<circle cx="90" cy="120" r="15" fill="currentColor"/>' +
  '<rect x="180" y="105" width="30" height="30"/>' +
  '<circle cx="300" cy="120" r="15"/>' +
  '<rect x="345" y="105" width="30" height="30"/>' +
  '<line x1="315" y1="120" x2="345" y2="120"/>' +
  '<line x1="330" y1="120" x2="330" y2="170"/>' +
  '<line x1="290" y1="170" x2="375" y2="170"/>' +
  '<line x1="290" y1="170" x2="290" y2="190"/>' +
  '<line x1="375" y1="170" x2="375" y2="190"/>' +
  '<rect x="275" y="190" width="30" height="30" fill="currentColor"/>' +
  '<circle cx="375" cy="205" r="15"/>' +
  '<g font-size="11" fill="currentColor" stroke="none">' +
  '<text x="163" y="72">I-1</text><text x="240" y="72">I-2</text>' +
  '<text x="78" y="152">II-1</text><text x="183" y="152">II-2</text><text x="288" y="152">II-3</text><text x="348" y="152">II-4</text>' +
  '<text x="276" y="237">III-1</text><text x="362" y="237">III-2</text>' +
  '</g>' +
  '</svg>'

const MEIOSIS_SVG =
  '<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cell with two homologous pairs lined up at the equator" fill="none" stroke="currentColor" stroke-width="2">' +
  '<title>A dividing cell from an organism with 2n = 4</title>' +
  '<ellipse cx="180" cy="110" rx="160" ry="95"/>' +
  '<line x1="180" y1="25" x2="180" y2="195" stroke-dasharray="4 4" stroke-width="1"/>' +
  '<circle cx="30" cy="110" r="4" fill="currentColor"/>' +
  '<circle cx="330" cy="110" r="4" fill="currentColor"/>' +
  '<g stroke-width="5" stroke-linecap="round">' +
  '<line x1="164" y1="45" x2="164" y2="105"/><line x1="172" y1="45" x2="172" y2="105"/>' +
  '<line x1="188" y1="45" x2="188" y2="105"/><line x1="196" y1="45" x2="196" y2="105"/>' +
  '<line x1="164" y1="130" x2="164" y2="160"/><line x1="172" y1="130" x2="172" y2="160"/>' +
  '<line x1="188" y1="130" x2="188" y2="160"/><line x1="196" y1="130" x2="196" y2="160"/>' +
  '</g>' +
  '<g stroke-width="1">' +
  '<line x1="30" y1="110" x2="168" y2="75"/><line x1="30" y1="110" x2="168" y2="145"/>' +
  '<line x1="330" y1="110" x2="192" y2="75"/><line x1="330" y1="110" x2="192" y2="145"/>' +
  '</g>' +
  '<g font-size="11" fill="currentColor" stroke="none"><text x="208" y="60">long pair</text><text x="208" y="158">short pair</text></g>' +
  '</svg>'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u5-s1',
    title: 'Pedigree of a family with an inherited trait',
    kind: 'figure',
    content:
      'The pedigree shows three generations of a family in which some members have a particular trait. Squares are males and circles are females; filled symbols are affected individuals. Horizontal lines joining a male and a female connect parents, and vertical lines lead to their children. Generation I: an unaffected male (I-1) and an unaffected female (I-2). Their children (generation II): an affected daughter (II-1), an unaffected son (II-2) and an unaffected daughter (II-3). II-3 and her unaffected husband II-4, who is not related to the family, have two children (generation III): an affected son (III-1) and an unaffected daughter (III-2).',
    svg: PEDIGREE_SVG,
  },
  {
    id: 'bio-u5-s2',
    title: 'A dihybrid cross in a flowering plant',
    kind: 'table',
    content:
      'In a flowering plant, purple flowers (P) are dominant to white (p), and tall stems (T) are dominant to short (t). Two plants heterozygous for both genes (PpTt) were crossed, and their 160 offspring were classified.\n\n' +
      '| Phenotype | Observed number of offspring |\n' +
      '|---|---|\n' +
      '| Purple, tall | 98 |\n' +
      '| Purple, short | 28 |\n' +
      '| White, tall | 26 |\n' +
      '| White, short | 8 |\n\n' +
      'Chi-square critical values at p = 0.05: df = 1, 3.84; df = 2, 5.99; df = 3, 7.81.',
  },
  {
    id: 'bio-u5-s3',
    title: 'Incubation temperature and hatchling sex in a turtle',
    kind: 'graph',
    content:
      'In some turtle species, the sex of a hatchling is set by the temperature at which its egg develops, not by sex chromosomes. Researchers incubated batches of eggs from the same population at six constant temperatures and recorded the percentage of hatchlings that were female (Figure 1).',
    chart: {
      title: 'Figure 1. Percentage of female hatchlings at each incubation temperature',
      kind: 'line',
      xLabel: 'Incubation temperature',
      xUnit: '°C',
      yLabel: 'Female hatchlings',
      yUnit: '%',
      xValues: [26, 27, 28, 29, 30, 31],
      yValues: [0, 5, 20, 50, 85, 100],
      seriesLabel: 'Hatchlings',
    },
  },
  {
    id: 'bio-u5-s4',
    title: 'A dividing cell with two pairs of chromosomes',
    kind: 'figure',
    content:
      'The figure shows a cell from an organism with a diploid number of 2n = 4 during division. Each chromosome is drawn as two attached sister chromatids. Two long chromosomes sit side by side at the center of the cell, and below them two short chromosomes sit side by side. Spindle fibers run from each pole to the chromosomes, and the dashed line marks the cell’s equator.',
    svg: MEIOSIS_SVG,
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u5-s1-q1',
    stimulusId: 'bio-u5-s1',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'medium',
    stem: 'Which mode of inheritance is most consistent with the pedigree?',
    options: ['Autosomal recessive', 'Autosomal dominant', 'X-linked recessive', 'X-linked dominant'],
    correctIndex: 0,
    explanation:
      'II-1 is affected although both of her parents are unaffected, so the trait is recessive (each parent carries one hidden allele). It cannot be dominant, because an affected child of a dominant trait must have an affected parent. It cannot be X-linked recessive, because an affected daughter would need an affected father, and I-1 is unaffected. That leaves autosomal recessive, which also explains III-1: II-3 and II-4 are both carriers.',
  },
  {
    id: 'bio-u5-s1-q2',
    stimulusId: 'bio-u5-s1',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'hard',
    stem: 'II-3 and II-4 plan to have another child. What is the probability that this child will be an affected son?',
    options: ['1/8', '1/4', '1/16', '1/2'],
    correctIndex: 0,
    explanation:
      'III-1 is affected, so II-3 and II-4 must both be carriers (Aa). The chance of an aa child is 1/4, and the chance that a child is a son is 1/2; these are independent, so P(affected son) = 1/4 × 1/2 = 1/8. 1/4 leaves out the sex of the child. 1/16 squares the 1/4. 1/2 is only the chance of a son.',
  },
  {
    id: 'bio-u5-s2-q1',
    stimulusId: 'bio-u5-s2',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'medium',
    stem: 'A student uses a chi-square test to analyze these data. Which is the appropriate null hypothesis?',
    options: [
      'The two genes assort independently, so the offspring occur in a 9:3:3:1 ratio.',
      'The two genes are linked, so purple flowers and tall stems are inherited together.',
      'The two genes assort independently, so the offspring occur in a 1:1:1:1 ratio.',
      'The two genes interact, so the observed numbers differ from Mendel’s predictions.',
    ],
    correctIndex: 0,
    explanation:
      'A null hypothesis states that there is no deviation from the expected Mendelian result. For a PpTt × PpTt cross with independent assortment and complete dominance, that result is 9:3:3:1. Linkage and gene interaction are alternative hypotheses, not the null. 1:1:1:1 is the ratio expected from a test cross (PpTt × pptt), not from crossing two dihybrids.',
  },
  {
    id: 'bio-u5-s2-q2',
    stimulusId: 'bio-u5-s2',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'hard',
    stem: 'Which statement correctly gives the chi-square value for these data and the conclusion at p = 0.05?',
    options: [
      'χ² ≈ 1.78 with 3 degrees of freedom, so the null hypothesis is not rejected.',
      'χ² ≈ 1.78 with 1 degree of freedom, so the null hypothesis is not rejected.',
      'χ² ≈ 88 with 3 degrees of freedom, so the null hypothesis is rejected.',
      'χ² ≈ 1.78 with 3 degrees of freedom, so the null hypothesis is rejected.',
    ],
    correctIndex: 0,
    explanation:
      'Expected numbers for 160 offspring in a 9:3:3:1 ratio are 90, 30, 30 and 10. χ² = (98−90)²/90 + (28−30)²/30 + (26−30)²/30 + (8−10)²/10 = 0.71 + 0.13 + 0.53 + 0.40 ≈ 1.78. There are 4 phenotype classes, so df = 4 − 1 = 3 and the critical value is 7.81; 1.78 < 7.81, so the null hypothesis is not rejected. df = 1 uses the wrong number of categories; it happens to give the same conclusion here, but it is not the correct test. 88 is the sum of the squared differences (64 + 4 + 16 + 4) without dividing each by its expected value. Rejecting the null with χ² = 1.78 reverses the decision rule: the null is rejected only when χ² exceeds the critical value.',
  },
  {
    id: 'bio-u5-s3-q1',
    stimulusId: 'bio-u5-s3',
    unit: 'unit-5',
    topicSlug: 'non-mendelian-genetics',
    difficulty: 'easy',
    stem: 'Based on Figure 1, at about what incubation temperature do equal numbers of male and female hatchlings develop?',
    options: ['29 °C', '28 °C', '30 °C', '31 °C'],
    correctIndex: 0,
    explanation:
      'Equal numbers of males and females means 50% females, which the curve reaches at 29 °C. At 28 °C only 20% of hatchlings are female, at 30 °C 85% are, and at 31 °C all of them are.',
  },
  {
    id: 'bio-u5-s3-q2',
    stimulusId: 'bio-u5-s3',
    unit: 'unit-5',
    topicSlug: 'non-mendelian-genetics',
    difficulty: 'hard',
    stem: 'The average nest temperature of this population rises from 28 °C to 30 °C over several decades. Based on Figure 1, which prediction is best supported?',
    options: [
      'The share of females rises from about 20% to about 85%, because temperature, not genotype, sets sex.',
      'The share of female hatchlings stays near 50%, because each egg’s sex is fixed by its sex chromosomes at fertilization.',
      'The share of female hatchlings falls from about 85% to about 20%, because warmer eggs develop as males.',
      'The share of female hatchlings rises to 100%, because every egg kept above 29 °C develops as a female.',
    ],
    correctIndex: 0,
    explanation:
      'Figure 1 gives about 20% females at 28 °C and about 85% at 30 °C, so warmer nests would produce many more females. The environment changes how the same genotypes are expressed (phenotypic plasticity); no change in DNA is needed. The stem says these turtles do not use sex chromosomes. The second distractor reverses the trend. At 30 °C the figure shows 85% females, not 100%; only at 31 °C are all hatchlings female.',
  },
  {
    id: 'bio-u5-s4-q1',
    stimulusId: 'bio-u5-s4',
    unit: 'unit-5',
    topicSlug: 'meiosis',
    difficulty: 'easy',
    stem: 'Which stage of cell division is shown in the figure?',
    options: ['Metaphase I of meiosis', 'Metaphase II of meiosis', 'Metaphase of mitosis', 'Anaphase I of meiosis'],
    correctIndex: 0,
    explanation:
      'The homologous chromosomes are paired side by side at the equator, each pair facing opposite poles, which happens only in metaphase I of meiosis. In metaphase II and in mitotic metaphase, chromosomes line up singly, not in homologous pairs (and a metaphase II cell here would hold only 2 chromosomes). In anaphase I the homologs would already be moving apart.',
  },
  {
    id: 'bio-u5-s4-q2',
    stimulusId: 'bio-u5-s4',
    unit: 'unit-5',
    topicSlug: 'meiosis',
    difficulty: 'hard',
    stem: 'In this cell, the two long homologs fail to separate (nondisjunction) and move to the same pole, while the short pair separates normally. Meiosis II is normal. How many chromosomes are in each of the four gametes?',
    options: ['3, 3, 1 and 1', '2, 2, 2 and 2', '3, 2, 2 and 1', '4, 4, 0 and 0'],
    correctIndex: 0,
    explanation:
      'After meiosis I, one cell has both long chromosomes plus one short chromosome (3), and the other has only one short chromosome (1). In meiosis II, sister chromatids separate normally, so each cell gives two gametes with the same count: 3, 3, 1 and 1. 2, 2, 2, 2 is normal meiosis. 3, 2, 2, 1 is the result of nondisjunction in meiosis II in one cell. 4, 4, 0, 0 would need both pairs to fail to separate.',
  },
  {
    id: 'bio-u5-001',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'easy',
    stem: 'A couple has three daughters. What is the probability that their fourth child will be a son?',
    options: ['1/2', '1/16', '3/4', '1/8'],
    correctIndex: 0,
    explanation:
      'Each child’s sex is an independent event: whether a sperm carries an X or a Y does not depend on earlier children, so the chance of a son is 1/2. 1/16 is the chance of four children in a set order, (1/2)⁴. 3/4 and 1/8 wrongly let the earlier daughters change the odds.',
  },
  {
    id: 'bio-u5-002',
    unit: 'unit-5',
    topicSlug: 'meiosis',
    difficulty: 'easy',
    stem: 'Which statement correctly describes a feature shared by mitosis and meiosis?',
    options: [
      'Both use a spindle apparatus to move chromosomes toward opposite poles.',
      'Both produce four daughter cells, each with half the original chromosome number.',
      'Both pair homologous chromosomes so crossing over can occur before they separate.',
      'Both produce daughter cells that are genetically identical to the parent cell.',
    ],
    correctIndex: 0,
    explanation:
      'Mitosis and meiosis both use a spindle to move chromosomes, but they differ in the number of cells made and their genetic content. Only meiosis produces four haploid cells, and only meiosis pairs homologs for synapsis and crossing over. Only mitosis produces cells identical to the parent.',
  },
  {
    id: 'bio-u5-003',
    unit: 'unit-5',
    topicSlug: 'non-mendelian-genetics',
    difficulty: 'medium',
    stem: 'In honeybees, males develop from unfertilized eggs and are haploid, while females develop from fertilized eggs and are diploid. A queen with genotype Aa mates with a male with genotype a. What genotypes are expected among the queen’s sons?',
    options: [
      'Half A and half a',
      'All Aa',
      'Half Aa and half aa',
      'All a',
    ],
    correctIndex: 0,
    explanation:
      'Sons come from unfertilized eggs, so each son carries one allele from his mother and none from his father. The Aa queen’s eggs are half A and half a, so her sons are half A and half a. Aa and aa are diploid genotypes, which describe her daughters (half Aa, half aa). “All a” would apply only if the father’s allele were passed to sons.',
  },
  {
    id: 'bio-u5-004',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'medium',
    stem: 'Two individuals heterozygous for three unlinked genes (AaBbCc × AaBbCc) are crossed. What fraction of the offspring is expected to be homozygous recessive for all three genes (aabbcc)?',
    options: ['1/64', '1/16', '1/27', '3/64'],
    correctIndex: 0,
    explanation:
      'For each gene, Aa × Aa gives aa with probability 1/4. The genes assort independently, so the product rule applies: 1/4 × 1/4 × 1/4 = 1/64. 1/16 covers only two genes. 1/27 uses 1/3 instead of 1/4. 3/64 adds an extra factor of 3 that belongs to calculations with more than one possible order.',
  },
  {
    id: 'bio-u5-005',
    unit: 'unit-5',
    topicSlug: 'mendelian-genetics',
    difficulty: 'hard',
    stem: 'In a plant, genes A and B are on different chromosomes, and each dominant allele is completely dominant to its recessive allele. In a cross AaBb × Aabb, what fraction of the offspring is expected to show exactly one of the two dominant phenotypes?',
    options: ['1/2', '3/8', '1/8', '3/16'],
    correctIndex: 0,
    explanation:
      'For gene A, Aa × Aa gives the dominant phenotype with probability 3/4 and the recessive with 1/4. For gene B, Bb × bb gives dominant 1/2 and recessive 1/2. Dominant for A only: 3/4 × 1/2 = 3/8. Dominant for B only: 1/4 × 1/2 = 1/8. The two outcomes are mutually exclusive, so add them: 3/8 + 1/8 = 1/2. 3/8 and 1/8 each count only one of the two classes. 3/16 is the value for one class in an AaBb × AaBb cross.',
  },
  {
    id: 'bio-u5-006',
    unit: 'unit-5',
    topicSlug: 'chromosomal-inheritance',
    difficulty: 'medium',
    stem: 'Across several generations of a large family, a rare trait appears only in males. Affected men never pass it to their sons, but their unaffected daughters often have affected sons. Which mode of inheritance best explains this pattern?',
    options: ['X-linked recessive', 'Y-linked', 'Autosomal dominant', 'Autosomal recessive'],
    correctIndex: 0,
    explanation:
      'A father passes his X chromosome to every daughter and his Y to every son. Daughters of affected men inherit his X with the recessive allele, are usually unaffected carriers, and pass it to half of their sons, who show the trait because they have only one X. A Y-linked trait would pass from father to every son. An autosomal dominant trait would appear in daughters and pass from fathers to sons. An autosomal recessive trait would affect both sexes about equally.',
  },
  {
    id: 'bio-u5-007',
    unit: 'unit-5',
    topicSlug: 'chromosomal-inheritance',
    difficulty: 'hard',
    stem: 'Genes R and S lie near opposite ends of the same large chromosome. In a test cross of an RrSs individual, about 50% of the offspring are recombinant. Which explanation best accounts for this result?',
    options: [
      'They are so far apart that a crossover falls between them in nearly every meiosis.',
      'R and S must actually lie on different chromosomes, because linked genes never form recombinants.',
      'Crossing over cannot occur between genes on the same chromosome, so the 50% must be chance.',
      'R and S are so close together that crossing over between them separates the two genes every time.',
    ],
    correctIndex: 0,
    explanation:
      'The farther apart two genes are on a chromosome, the more likely a crossover will fall between them. For genes at opposite ends of a long chromosome, crossovers between them happen so often that recombinant offspring approach 50%, the same as for unlinked genes. Linked genes do form recombinants, through crossing over. Crossing over does occur between genes on the same chromosome. Genes close together recombine rarely, not every time.',
  },
  {
    id: 'bio-u5-008',
    unit: 'unit-5',
    topicSlug: 'meiosis',
    difficulty: 'medium',
    stem: 'Mendel’s law of segregation states that the two alleles of a gene separate so that each gamete receives only one of them. Which event in meiosis is the physical basis of this law?',
    options: [
      'Homologous pairs separate in anaphase I.',
      'Sister chromatids are copied during interphase.',
      'Spindle fibers form at the start of prophase I.',
      'Nuclear envelopes re-form during telophase II.',
    ],
    correctIndex: 0,
    explanation:
      'The two alleles of a gene sit at the same position on the two homologous chromosomes of a pair. When the homologs move to opposite poles in anaphase I, the alleles go to different cells, so each gamete ends up with one. Copying DNA in interphase doubles both alleles rather than separating them. Spindle formation and nuclear envelope re-formation do not separate alleles.',
  },
  {
    id: 'bio-u5-009',
    unit: 'unit-5',
    topicSlug: 'non-mendelian-genetics',
    difficulty: 'easy',
    stem: 'Cuttings taken from a single hydrangea plant, so all have the same genotype, are planted in different soils. Plants in acidic soil produce blue flowers, and plants in alkaline soil produce pink flowers. Which statement best explains this result?',
    options: [
      'The environment affects how one genotype is expressed as a phenotype.',
      'The acidic soil caused mutations in the genes that control flower color.',
      'The plants in each soil inherited different alleles from the parent plant.',
      'The flower color gene shows codominance, so each plant shows both colors.',
    ],
    correctIndex: 0,
    explanation:
      'All the cuttings have identical genotypes, so the different flower colors come from the soil environment acting on the same genes (phenotypic plasticity). Soil pH does not change DNA sequences. Cuttings are clones and inherit identical alleles. Each plant shows one color, not both, so codominance does not fit.',
  },
]
