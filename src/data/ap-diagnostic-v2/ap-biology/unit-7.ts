/**
 * AP Biology diagnostic v2 — Unit 7: Natural Selection (CED 7.1–7.12).
 * Four data sets (insecticide-resistance allele graph, plant cladogram
 * figure, frog cross table, crop-diversity table) plus standalone items.
 * Hardy–Weinberg uses the CED formula sheet (p + q = 1, p² + 2pq + q² = 1).
 */
import type { ApDiagV2Item, ApDiagV2Stimulus } from '@/lib/ap-diagnostic-v2/types'

const CLADOGRAM_SVG =
  '<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cladogram of five beetle species with four derived characters" fill="none" stroke="currentColor" stroke-width="2">' +
  '<title>Cladogram of five ground-beetle species</title>' +
  '<g font-size="11" fill="currentColor" stroke="none">' +
  '<text x="20" y="22">Species V</text><text x="104" y="22">Species W</text><text x="184" y="22">Species X</text><text x="264" y="22">Species Y</text><text x="344" y="22">Species Z</text>' +
  '</g>' +
  '<line x1="40" y1="200" x2="370" y2="30"/>' +
  '<line x1="73" y1="183" x2="50" y2="30"/>' +
  '<line x1="139" y1="149" x2="130" y2="30"/>' +
  '<line x1="222" y1="106" x2="210" y2="30"/>' +
  '<line x1="304" y1="64" x2="290" y2="30"/>' +
  '<g stroke-width="3">' +
  '<line x1="101" y1="159" x2="111" y2="174"/>' +
  '<line x1="174" y1="121" x2="184" y2="137"/>' +
  '<line x1="256" y1="79" x2="266" y2="94"/>' +
  '<line x1="332" y1="40" x2="342" y2="55"/>' +
  '</g>' +
  '<g font-size="12" fill="currentColor" stroke="none"><text x="114" y="184">1</text><text x="188" y="146">2</text><text x="270" y="104">3</text><text x="346" y="66">4</text></g>' +
  '<g font-size="10" fill="currentColor" stroke="none">' +
  '<text x="190" y="190">1 = ridged wing covers</text>' +
  '<text x="190" y="205">2 = antennae longer than the body</text>' +
  '<text x="190" y="220">3 = horn on the head</text>' +
  '<text x="190" y="235">4 = red bands on the legs</text>' +
  '</g>' +
  '</svg>'

export const STIMULI: ApDiagV2Stimulus[] = [
  {
    id: 'bio-u7-s1',
    title: 'An insecticide-resistance allele in mosquitoes',
    kind: 'graph',
    content:
      'A town sprayed an insecticide every year from year 0 through year 6 to control a mosquito population, then stopped spraying. Each year, researchers sampled mosquitoes and measured the frequency of allele R, which makes mosquitoes resistant to the insecticide; the other allele at this gene, S, does not (Figure 1).',
    chart: {
      title: 'Figure 1. Frequency of resistance allele R in the mosquito population',
      kind: 'line',
      xLabel: 'Year',
      xUnit: 'years',
      yLabel: 'Frequency of allele R',
      yUnit: 'fraction of alleles',
      xValues: [0, 2, 4, 6, 8, 10],
      yValues: [0.02, 0.15, 0.55, 0.85, 0.7, 0.55],
      seriesLabel: 'Allele R',
      annotations: [{ xIndex: 3, label: 'Spraying stops' }],
    },
  },
  {
    id: 'bio-u7-s2',
    title: 'Cladogram of five ground-beetle species',
    kind: 'figure',
    content:
      'The cladogram shows the relationships among five species of ground beetles, V, W, X, Y and Z, based on four derived characters. Species V branches off first, then W, then X, and Y and Z branch off last, as each other’s closest relatives. The characters are marked where they first appear: 1 (ridged wing covers) on the branch leading to W, X, Y and Z; 2 (antennae longer than the body) on the branch leading to X, Y and Z; 3 (a horn on the head) on the branch leading to Y and Z; 4 (red bands on the legs) on the branch leading only to Z.',
    svg: CLADOGRAM_SVG,
  },
  {
    id: 'bio-u7-s3',
    title: 'Crosses among three frog populations',
    kind: 'table',
    content:
      'Three populations of a frog live in different parts of a river valley. Researchers brought frogs into the lab and set up crosses within population 1 and between population 1 and each of the other two populations, then followed the offspring to adulthood.\n\n' +
      '| Cross | Pairings that produced eggs (%) | Eggs that hatched (%) | Were the adult offspring fertile? |\n' +
      '|---|---|---|---|\n' +
      '| Population 1 × population 1 | 92 | 90 | Yes |\n' +
      '| Population 1 × population 2 | 88 | 85 | No, all were sterile |\n' +
      '| Population 1 × population 3 | 10 | 80 | Yes |',
  },
  {
    id: 'bio-u7-s4',
    title: 'Crop survival in a fungal outbreak',
    kind: 'table',
    content:
      'Two neighboring fields of the same crop species were planted in the same year. Field A was planted entirely with one variety propagated as clones, so all its plants were genetically identical. Field B was planted with a mix of 12 genetically different varieties. A fungal disease new to the region then spread through both fields.\n\n' +
      '| Field | Genetically different varieties planted | Plants surviving the outbreak (%) |\n' +
      '|---|---|---|\n' +
      '| A | 1 (clones) | 5 |\n' +
      '| B | 12 | 70 |',
  },
]

export const ITEMS: ApDiagV2Item[] = [
  {
    id: 'bio-u7-s1-q1',
    stimulusId: 'bio-u7-s1',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'easy',
    stem: 'Which statement best describes the change in the frequency of allele R shown in Figure 1?',
    options: [
      'It rose sharply while spraying continued and then fell after spraying stopped.',
      'It rose steadily over the whole 10 years, both during and after the spraying.',
      'It fell while spraying continued and then rose again after spraying stopped.',
      'It stayed near 0.5 for the whole 10 years, with only small year-to-year changes.',
    ],
    correctIndex: 0,
    explanation:
      'Allele R rose from 0.02 at year 0 to 0.85 at year 6, while the insecticide was sprayed, and then fell to 0.70 at year 8 and 0.55 at year 10 after spraying stopped. It did not keep rising, did not fall during spraying, and did not stay near 0.5.',
  },
  {
    id: 'bio-u7-s1-q2',
    stimulusId: 'bio-u7-s1',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'medium',
    stem: 'Which explanation for the decline in allele R after year 6 is most consistent with natural selection?',
    options: [
      'Without the insecticide, mosquitoes carrying R leave fewer offspring than mosquitoes without R.',
      'Without the insecticide, each mosquito no longer needs R, so its own R alleles change back into S.',
      'Without the insecticide, no new R mutations are caused, so the existing R alleles slowly wear out.',
      'Without the insecticide, R alleles stop working in older mosquitoes, so they turn into S alleles.',
    ],
    correctIndex: 0,
    explanation:
      'Once the insecticide is gone, R no longer gives an advantage. If R carries a cost (for example, slower development or lower reproduction), mosquitoes with R leave fewer offspring than mosquitoes without it, so R becomes less common: the selective pressure has changed. Individuals do not change their alleles because of need. The insecticide does not cause R mutations; it selects among existing variants. Alleles do not wear out or turn into other alleles as an individual ages.',
  },
  {
    id: 'bio-u7-s1-q3',
    stimulusId: 'bio-u7-s1',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'hard',
    stem: 'Suppose the population in year 6 were in Hardy–Weinberg equilibrium for this gene. About what percentage of the mosquitoes would be homozygous SS?',
    options: ['About 2%', 'About 15%', 'About 72%', 'About 26%'],
    correctIndex: 0,
    explanation:
      'In year 6 the frequency of R is p = 0.85, so the frequency of S is q = 1 − 0.85 = 0.15. Homozygous SS individuals make up q² = 0.15² = 0.0225, about 2%. 15% is q itself, the allele frequency rather than the genotype frequency. 72% is p² (RR). 26% is 2pq = 2(0.85)(0.15) ≈ 0.26, the heterozygotes.',
  },
  {
    id: 'bio-u7-s2-q1',
    stimulusId: 'bio-u7-s2',
    unit: 'unit-7',
    topicSlug: 'phylogeny-classification',
    difficulty: 'easy',
    stem: 'Based on the cladogram, which derived character is shared by species X, Y and Z but not by species W?',
    options: ['Antennae longer than the body', 'A horn on the head', 'Red bands on the legs', 'Ridged wing covers'],
    correctIndex: 0,
    explanation:
      'Character 2, long antennae, appears on the branch after W splits off and before X does, so X, Y and Z have it and W does not. A horn (3) is shared only by Y and Z. Red leg bands (4) are found only in Z. Ridged wing covers (1) are shared by W as well.',
  },
  {
    id: 'bio-u7-s2-q2',
    stimulusId: 'bio-u7-s2',
    unit: 'unit-7',
    topicSlug: 'phylogeny-classification',
    difficulty: 'medium',
    stem: 'Which statement is best supported by the cladogram?',
    options: [
      'Species Y and Z share a more recent common ancestor with each other than with species X.',
      'Species X is the ancestor of species Y and Z, which both evolved directly from living species X.',
      'Species W is more closely related to species Z than species X is, because W is nearer the base.',
      'Species Z is more highly evolved than species V, because Z has the most derived characters.',
    ],
    correctIndex: 0,
    explanation:
      'Y and Z join at the most recent node, so they share a common ancestor that X does not. Tips on a cladogram are living species, and none is the ancestor of another. X joins Z’s lineage at a more recent node than W does, so X is the closer relative. All five species have evolved for the same length of time; having more of the characters chosen for the tree does not make a species “more evolved.”',
  },
  {
    id: 'bio-u7-s2-q3',
    stimulusId: 'bio-u7-s2',
    unit: 'unit-7',
    topicSlug: 'phylogeny-classification',
    difficulty: 'hard',
    stem: 'A clade is a common ancestor and all of its descendants. How many of the five species belong to the smallest clade that includes both species W and species Y?',
    options: ['Four', 'Two', 'Three', 'Five'],
    correctIndex: 0,
    explanation:
      'The most recent common ancestor of W and Y is the node where W branches off. Every species descended from that node, W, X, Y and Z, must be in the clade, so it has four species. A group of only W and Y (two) or W, X and Y (three) would leave out descendants of that ancestor, so it would not be a clade. Species V branched off earlier, so including it (five) gives a larger clade than needed.',
  },
  {
    id: 'bio-u7-s3-q1',
    stimulusId: 'bio-u7-s3',
    unit: 'unit-7',
    topicSlug: 'speciation',
    difficulty: 'medium',
    stem: 'Which reproductive barrier separates population 1 from population 2?',
    options: [
      'A postzygotic barrier, because hybrids form and develop but are sterile',
      'A prezygotic barrier, because most pairings fail to produce any eggs',
      'A postzygotic barrier, because most hybrid eggs fail to hatch at all',
      'No barrier, because pairings produce eggs and the eggs hatch normally',
    ],
    correctIndex: 0,
    explanation:
      'Population 1 × population 2 pairings produce eggs (88%) and the eggs hatch (85%) about as often as within population 1, so mating and fertilization work. The adult hybrids are sterile, so no genes pass beyond the first hybrid generation: a postzygotic barrier (hybrid sterility). Most pairings do produce eggs, and most eggs hatch. Sterile hybrids are a barrier even though early development is normal.',
  },
  {
    id: 'bio-u7-s3-q2',
    stimulusId: 'bio-u7-s3',
    unit: 'unit-7',
    topicSlug: 'speciation',
    difficulty: 'hard',
    stem: 'Which conclusion about populations 1 and 3 is best supported by the data?',
    options: [
      'A prezygotic barrier, such as different mating behavior, limits mating, but hybrids are fertile, so some gene flow remains.',
      'A postzygotic barrier makes all the hybrids sterile, so the two populations can no longer exchange any of their genes.',
      'No barrier exists, because the eggs from these pairings hatch about as often as eggs from crosses within population 1.',
      'A postzygotic barrier lowers hybrid survival, because fewer of the hybrid eggs hatch than eggs from crosses within population 1.',
    ],
    correctIndex: 0,
    explanation:
      'Only 10% of population 1 × population 3 pairings produce eggs, compared with 92% within population 1, so something acting before fertilization (a prezygotic barrier, such as differences in mating calls or timing) prevents most matings. The eggs that form hatch well and grow into fertile adults, so when matings do happen, genes can still pass between the populations. The hybrids are fertile, not sterile. A 10% pairing success is a strong barrier, not none. Hatching (80%) is only slightly below the within-population rate (90%), so hybrid survival is not the main barrier.',
  },
  {
    id: 'bio-u7-s4-q1',
    stimulusId: 'bio-u7-s4',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'medium',
    stem: 'Which explanation best accounts for the higher survival in field B?',
    options: [
      'With more genetic variation, more of the plants in field B were likely to carry alleles that resisted the fungus.',
      'With more varieties, the plants in field B produced new resistance mutations in response to the fungal infection.',
      'With more varieties, the plants in field B competed less for sunlight, so each plant had more energy to fight disease.',
      'With more genetic variation, the fungus in field B mutated into a weaker form that killed fewer of the plants it infected.',
    ],
    correctIndex: 0,
    explanation:
      'A population with more genetic diversity is more likely to include some individuals with alleles that let them survive a new threat. In field A every plant had the same genotype, so a fungus that could kill one could kill almost all. Mutations are not produced in response to a disease. Nothing in the data concerns competition for light or a change in the fungus, and both fields faced the same outbreak.',
  },
  {
    id: 'bio-u7-s4-q2',
    stimulusId: 'bio-u7-s4',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'hard',
    stem: 'A farmer replants field A the next year using cuttings (clones) taken from the 5% of plants that survived the outbreak. If the same fungus returns, which result is most likely?',
    options: [
      'Survival is about as low as before, because the survivors were genetically identical to the plants that died.',
      'Survival rises to about 70%, matching field B, because the survivors had passed natural selection last year.',
      'Survival rises to nearly 100%, because the survivors had become resistant during their own infection.',
      'Survival falls to 0%, because cuttings from survivors carry the fungus and spread it through the field.',
    ],
    correctIndex: 0,
    explanation:
      'Natural selection can change a population only when individuals differ genetically. All field A plants were clones, so the 5% that survived did so by chance or because of their surroundings, not because of better alleles, and their cuttings are genetically the same as the plants that died. Survival should stay low. The survivors are not a selected, resistant genotype, so survival would not rise to field B’s level. Resistance acquired during an infection is not passed on in a plant’s genes. Nothing in the stem says the cuttings carry the fungus.',
  },
  {
    id: 'bio-u7-001',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'easy',
    stem: 'A student writes: “Each giraffe stretched its neck to reach high leaves, and its offspring were born with longer necks.” Which statement best corrects this explanation?',
    options: [
      'Giraffes that happened to have heritably longer necks survived and reproduced more, so the trait became more common.',
      'Giraffes that stretched their necks the most passed on the stretching, so each generation stretched a little further.',
      'Giraffes grew longer necks during their lives because they needed them, and needed traits are always inherited.',
      'Giraffes with longer necks were produced by mutations caused by stretching, which then passed to their offspring.',
    ],
    correctIndex: 0,
    explanation:
      'Natural selection acts on heritable variation that already exists: individuals with longer necks, because of their genes, ate better, survived and left more offspring, so the alleles for longer necks became more common over generations. Traits acquired during an individual’s life, such as a stretched neck, are not inherited. Need does not cause traits to be inherited or produce mutations.',
  },
  {
    id: 'bio-u7-002',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'easy',
    stem: 'In a cliff face of undisturbed sedimentary rock, fossils of simple marine invertebrates are found in the lowest layers and fossils of fish are found only in higher layers. Which conclusion is best supported?',
    options: [
      'The invertebrate fossils are older than the fish fossils.',
      'The fish fossils are older than the invertebrate fossils.',
      'The fish and invertebrates lived at the same time and place.',
      'The fish evolved from the exact invertebrates found below them.',
    ],
    correctIndex: 0,
    explanation:
      'In undisturbed sedimentary rock, lower layers were laid down first, so fossils in lower layers are older. The invertebrates therefore lived before the fish appeared in this record. The order of layers rules out the fish being older or the two living together. The fossils show order in time, not that one particular fossil species gave rise to another.',
  },
  {
    id: 'bio-u7-003',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'easy',
    stem: 'Earth formed about 4.6 billion years ago. Which of these events is supported by evidence as having happened first?',
    options: [
      'The appearance of single-celled prokaryotic life',
      'The buildup of O₂ in the atmosphere from photosynthesis',
      'The appearance of the first eukaryotic cells',
      'The appearance of multicellular animals',
    ],
    correctIndex: 0,
    explanation:
      'Fossil and chemical evidence shows prokaryotic life by about 3.5 billion years ago. O₂ accumulated in the atmosphere later, about 2.4 billion years ago, after photosynthetic prokaryotes had been releasing it for a long time. Eukaryotic cells appeared after that, and multicellular animals much later still.',
  },
  {
    id: 'bio-u7-004',
    unit: 'unit-7',
    topicSlug: 'speciation',
    difficulty: 'easy',
    stem: 'Two closely related snail species live in the same area. Their shells coil in opposite directions, so their bodies cannot line up for mating, and they do not interbreed. This is an example of which kind of reproductive barrier?',
    options: [
      'Mechanical isolation, a prezygotic barrier',
      'Temporal isolation, a prezygotic barrier',
      'Hybrid sterility, a postzygotic barrier',
      'Reduced hybrid viability, a postzygotic barrier',
    ],
    correctIndex: 0,
    explanation:
      'The snails meet, but their body structures do not fit together for mating, so no zygote forms: mechanical isolation, a prezygotic barrier. Temporal isolation would mean they breed at different times. Hybrid sterility and reduced hybrid viability act after a zygote has formed, but here mating cannot take place at all.',
  },
  {
    id: 'bio-u7-005',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'medium',
    stem: 'During a severe drought on an island, only large, hard seeds were available. Finches with deeper beaks survived better, and the next generation had a larger average beak depth than the generation before the drought. Which condition was necessary for this change between generations?',
    options: [
      'Differences in beak depth had to be at least partly heritable.',
      'Each surviving finch had to deepen its beak by cracking hard seeds.',
      'The drought had to cause new mutations for deeper beaks in the finches.',
      'All finches on the island had to have exactly the same beak depth.',
    ],
    correctIndex: 0,
    explanation:
      'Selection during the drought changed which finches survived, but the next generation could have deeper beaks only if beak depth is passed from parents to offspring. Beaks shaped by use during an individual’s life are not inherited. The drought selected among existing variants rather than causing mutations. With no variation in beak depth, there would be nothing for selection to act on.',
  },
  {
    id: 'bio-u7-006',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'medium',
    stem: 'A sample of 500 beetles contains 320 with genotype GG, 160 with Gg and 20 with gg. What is the frequency of allele g in the sample?',
    options: ['0.2', '0.04', '0.36', '0.8'],
    correctIndex: 0,
    explanation:
      '500 diploid beetles carry 1,000 alleles. Allele g appears once in each Gg beetle (160) and twice in each gg beetle (2 × 20 = 40), for 200 copies: 200 ÷ 1,000 = 0.2. 0.04 is the frequency of gg individuals (20 ÷ 500), not of the allele. 0.36 counts Gg and gg individuals instead of alleles ((160 + 20) ÷ 500). 0.8 is the frequency of G.',
  },
  {
    id: 'bio-u7-007',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'medium',
    stem: 'Snowshoe hares turn white in autumn and brown in spring, and the timing of the molt varies among hares and is heritable. In a region where winters are becoming shorter, white hares are increasingly seen against brown ground, where predators spot them easily. If this continues for many generations, which change is most likely?',
    options: [
      'Alleles for turning white later in autumn will become more common in the population.',
      'Alleles for turning white earlier in autumn will become more common in the population.',
      'Each hare will learn to turn white later, and the learned timing will pass to its young.',
      'The molt timing of the population will stay the same, because it is set by heredity.',
    ],
    correctIndex: 0,
    explanation:
      'Hares that are white while the ground is brown are eaten more often. Hares whose genes make them molt later (so they are white only once snow arrives) survive and reproduce more, so alleles for later molting become more common. Earlier molting would make the mismatch worse. Learned changes are not inherited. A heritable trait is exactly what natural selection can change.',
  },
  {
    id: 'bio-u7-008',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'medium',
    stem: 'Early embryos of fish, chickens and humans all have a series of pharyngeal pouches and a tail. In fish, the pouches develop into gill structures; in chickens and humans, they develop into parts of the throat and ear. Which conclusion do these observations best support?',
    options: [
      'Fish, chickens and humans inherited a shared developmental pattern from a common ancestor.',
      'Chickens and humans breathe with gills as embryos and lose them when they hatch or are born.',
      'Fish evolved from early chicken and human embryos that kept their pouches into adulthood.',
      'The pouches evolved separately in each group because each group lives in a similar habitat.',
    ],
    correctIndex: 0,
    explanation:
      'Similar structures in early embryos that develop into different adult structures are homologous: they reflect a developmental pattern inherited from a shared ancestor and later modified in each lineage. Chicken and human embryos do not breathe with gills; their pouches become other structures. Fish did not evolve from chicken or human embryos. Fish, chickens and humans live in very different habitats, so independent origin by similar environments does not fit.',
  },
  {
    id: 'bio-u7-009',
    unit: 'unit-7',
    topicSlug: 'phylogeny-classification',
    difficulty: 'medium',
    stem: 'An older phylogenetic tree based on body form grouped whales apart from all hoofed mammals. Later DNA comparisons showed that whales share a more recent common ancestor with hippopotamuses than with any other living group. Which response is most consistent with how phylogenetic trees are used?',
    options: [
      'Revise the tree to group whales with hippopotamuses, since trees are hypotheses revised with new evidence.',
      'Keep the older tree, because physical traits are always more reliable than DNA for showing evolutionary relationships.',
      'Discard both trees, because evidence that disagrees shows that the relationships of whales can never be determined.',
      'Keep both trees, because body form and DNA trace two different histories that are equally valid for whales.',
    ],
    correctIndex: 0,
    explanation:
      'Phylogenetic trees are hypotheses about evolutionary history, and they are revised when new data, such as DNA sequences, give a better-supported picture. Whales’ streamlined body form arose through adaptation to water, which can hide their relationship to hippos. Neither type of evidence is always more reliable, conflicting evidence is resolved rather than abandoned, and a group has only one evolutionary history, so two conflicting trees cannot both be correct.',
  },
  {
    id: 'bio-u7-010',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'medium',
    stem: 'Broccoli, cabbage, kale and cauliflower all belong to one species descended from wild mustard. Which explanation best accounts for such different vegetables?',
    options: [
      'Farmers bred different plants for different traits, such as flower clusters, leaves or buds.',
      'Each vegetable formed when wild mustard adapted on its own to a different natural habitat.',
      'Each vegetable developed when farmers grew wild mustard in very different kinds of soil.',
      'The wild mustard plants mutated on purpose to produce the traits that farmers wanted.',
    ],
    correctIndex: 0,
    explanation:
      'In artificial selection, humans choose which individuals reproduce. Breeding wild mustard for large flower clusters gave broccoli and cauliflower, for large leaves gave kale, and for a large terminal bud gave cabbage. These lines were shaped by human choice, not by natural habitats. Growing conditions alone change individual plants, not their offspring. Mutations are random and not produced on purpose.',
  },
  {
    id: 'bio-u7-011',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'medium',
    stem: 'A flash flood sweeps through a pond and kills about half of a beetle population at random, regardless of the beetles’ traits. Afterward, the frequency of an allele for green body color has changed from 0.40 to 0.31. This change is best explained by',
    options: [
      'genetic drift, a chance change in allele frequencies',
      'natural selection against green body color',
      'gene flow of beetles from a neighboring pond',
      'new mutations caused by the floodwater',
    ],
    correctIndex: 0,
    explanation:
      'The flood killed beetles without regard to their traits, so the survivors are a random sample whose allele frequencies differ from the original by chance: genetic drift (here a bottleneck). Natural selection would require green beetles to die more often because of their color. No beetles came in from another pond. Floods do not cause mutations, and new mutations would not shift a frequency this much in one event.',
  },
  {
    id: 'bio-u7-012',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'hard',
    stem: 'In a self-pollinating plant population, individuals mate only with themselves for many generations. No selection, migration or mutation acts on gene E. Compared with Hardy–Weinberg expectations, which change is expected?',
    options: [
      'The share of heterozygotes falls and homozygotes rise, while allele frequencies stay the same.',
      'The share of heterozygotes rises and homozygotes fall, while allele frequencies stay the same.',
      'The allele frequencies change toward 0.5 each, while the genotype frequencies stay the same.',
      'Both allele and genotype frequencies stay exactly as Hardy–Weinberg predicts for each generation.',
    ],
    correctIndex: 0,
    explanation:
      'Hardy–Weinberg assumes random mating. When an Ee plant self-pollinates, only half of its offspring are Ee and half are EE or ee, while EE and ee plants produce only their own kind. Each generation the share of heterozygotes halves and homozygotes increase. Selfing reshuffles alleles into homozygous genotypes but does not add or remove alleles, so allele frequencies stay the same. Nonrandom mating is a violation of Hardy–Weinberg, so genotype frequencies do not match its predictions.',
  },
  {
    id: 'bio-u7-013',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'hard',
    stem: 'When HIV infections are treated with a single drug, drug-resistant virus often appears within months. When patients take three drugs at once, each acting on a different viral protein, resistance appears far more slowly. Which explanation is best supported?',
    options: [
      'A virus would need resistance mutations against all three drugs at the same time to survive, which is very unlikely.',
      'Taking three drugs causes the virus to make fewer mutations, because the drugs repair errors in its genome.',
      'Taking three drugs makes the patient’s cells resistant to infection, so the virus no longer needs to evolve.',
      'A virus becomes resistant only when it is exposed to one drug, because a single drug triggers the mutation.',
    ],
    correctIndex: 0,
    explanation:
      'Resistance mutations arise at random. With one drug, a single mutation lets a virus survive and multiply. With three drugs acting on different proteins, a virus survives only if it carries resistance to all three, and the chance of the right mutations occurring together is the product of three small probabilities, so resistance evolves much more slowly. Drugs do not repair viral genomes or make human cells resistant, and drugs select resistant variants; they do not trigger the mutations.',
  },
  {
    id: 'bio-u7-014',
    unit: 'unit-7',
    topicSlug: 'speciation',
    difficulty: 'hard',
    stem: 'Two closely related frog species produce hybrids that rarely survive. Where the two species live apart, their mating calls are similar. Where their ranges overlap, their calls are very different, and females almost never mate with the other species. Which explanation is best supported?',
    options: [
      'Where they overlap, selection favored individuals that avoided mating with the other species, because hybrid offspring were wasted.',
      'Where they overlap, the frogs learned new calls from the other species, which made them better able to attract mates of either kind.',
      'Where they live apart, the two species are actually one species, because their calls are similar enough for them to interbreed freely.',
      'Where they overlap, the hybrids survived well and replaced both parent species, leaving only frogs with unusual calls in that region.',
    ],
    correctIndex: 0,
    explanation:
      'Hybrids rarely survive, so an individual that mates with the other species wastes its reproductive effort. Where the species meet, individuals with calls and preferences that keep them apart leave more surviving offspring, so selection strengthens the prezygotic barrier there (reinforcement). Calls that attract both species would increase wasted matings. The stem says hybrids rarely survive, so similar calls in separate ranges do not make them one species, and hybrids did not replace the parent species.',
  },
  {
    id: 'bio-u7-015',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'hard',
    stem: 'In a bird population, birds with genotype Bb survive a harsh winter better than either BB or bb birds. Which long-term outcome is most likely if this pattern continues every winter?',
    options: [
      'Both alleles remain in the population, because heterozygotes carry each allele and are favored.',
      'Allele B is lost from the population, because BB birds have lower survival than heterozygotes.',
      'Allele b drops out of the population, because bb birds have lower survival than heterozygotes.',
      'All birds in the population become Bb within one generation, because Bb birds survive the best.',
    ],
    correctIndex: 0,
    explanation:
      'When heterozygotes have the highest fitness, selection removes copies of B in BB birds and copies of b in bb birds, but heterozygotes, which carry one of each, keep passing both alleles on. Both alleles are kept at stable intermediate frequencies (balancing selection). Neither allele is eliminated, because each is favored in heterozygotes. Two Bb parents still produce BB, Bb and bb offspring, so the population cannot become all Bb.',
  },
  {
    id: 'bio-u7-016',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'hard',
    stem: 'The radioactive isotope potassium-40 has a half-life of about 1.3 billion years. A volcanic rock layer just below a fossil contains 25% of the potassium-40 it had when it formed. About how old is the rock, and what does that tell us about the fossil?',
    options: [
      'About 2.6 billion years old, so the fossil is probably somewhat younger than 2.6 billion years.',
      'About 1.3 billion years old, so the fossil is probably somewhat older than 1.3 billion years.',
      'About 3.9 billion years old, so the fossil is probably somewhat younger than 3.9 billion years.',
      'About 0.3 billion years old, so the fossil is probably somewhat older than 0.3 billion years.',
    ],
    correctIndex: 0,
    explanation:
      '25% remaining is two half-lives (100% → 50% → 25%), so the rock is about 2 × 1.3 = 2.6 billion years old. A fossil lying above the rock was deposited after it, so the fossil is younger. 1.3 billion years is one half-life (50% left), and a fossil above a rock is not older than it. 3.9 billion years is three half-lives (12.5% left). 0.3 billion years confuses the 25% with a time.',
  },
  {
    id: 'bio-u7-017',
    unit: 'unit-7',
    topicSlug: 'natural-selection',
    difficulty: 'hard',
    stem: 'A harmful recessive allele is selected against in a large population, yet when it becomes rare, its frequency falls only very slowly. Which explanation is best supported?',
    options: [
      'When the allele is rare, almost all its copies are in heterozygotes, which do not show the trait.',
      'When the allele is rare, selection reverses and starts to favor individuals with the harmful trait.',
      'When the allele is rare, mutation creates new copies faster than any individual can be selected.',
      'When the allele is rare, homozygous recessive individuals become more common than heterozygotes.',
    ],
    correctIndex: 0,
    explanation:
      'Selection acts on phenotypes. A rare recessive allele (small q) occurs mostly in heterozygotes, 2pq, far more than in homozygotes, q². For q = 0.01, about 2% of individuals are carriers but only 0.01% are homozygous. Heterozygotes do not show the harmful trait, so most copies are hidden from selection and the allele declines slowly. Selection does not reverse. Mutation rates are typically far too low to explain it alone. When an allele is rare, homozygotes are much less common than heterozygotes, not more.',
  },
  {
    id: 'bio-u7-018',
    unit: 'unit-7',
    topicSlug: 'natural-selection-adaptation',
    difficulty: 'hard',
    stem: 'Bacteria never exposed to an antibiotic are spread on a plate without antibiotic and grow into colonies. A velvet pad pressed onto this plate transfers cells from every colony, in the same positions, onto three fresh plates containing the antibiotic. The few colonies that grow on the antibiotic plates are at the same positions on all three plates. Which conclusion is best supported?',
    options: [
      'The resistance mutations were present in certain colonies before the bacteria ever met the antibiotic.',
      'The antibiotic caused resistance mutations in whichever bacteria happened to touch it on each plate.',
      'Resistance arose after the transfer, in cells that survived the antibiotic long enough to adapt to it.',
      'The experiment cannot show when resistance arose, because so few colonies grew on the antibiotic plates.',
    ],
    correctIndex: 0,
    explanation:
      'If the antibiotic caused resistance, resistant colonies would appear at random positions, different on each plate. Instead they appear at the same positions on all three, so the cells from those particular original colonies were already resistant before any contact with the antibiotic. Mutations arise at random, and the antibiotic only selects them. Cells that adapted after transfer would also appear at different, random spots on each plate. The number of colonies does not matter: identical positions on three separate plates show the resistant cells were already in the original colonies.',
  },
]
