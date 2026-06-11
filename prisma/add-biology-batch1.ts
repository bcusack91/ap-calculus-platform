import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Biology Batch 1 (3 topics)\n');

  // Topic 1: Enzyme Kinetics
  const enzymeKineticsTopic = await prisma.topic.findFirst({
    where: {
      slug: 'enzyme-kinetics',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (enzymeKineticsTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: enzymeKineticsTopic.id,
          question: 'What is the induced fit model of enzyme action? How does it differ from the lock-and-key model?',
          solution: 'Lock-and-Key Model (older, simplified):\n• Enzyme active site is rigid and pre-shaped\n• Substrate fits perfectly like a key in a lock\n• No conformational change occurs\n\nInduced Fit Model (current, more accurate):\n• Active site is flexible and changes shape\n• Substrate binding INDUCES conformational change\n• This change:\n  - Optimally positions catalytic residues\n  - Strains substrate bonds (lowers activation energy)\n  - May exclude water from active site\n  - Increases specificity\n\nKey difference: The induced fit model explains how enzymes actively participate in lowering activation energy through conformational changes, not just providing a rigid binding site.\n\nExample: Hexokinase closes around glucose like a clam shell when glucose binds.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          question: 'An enzyme has a Km of 2 mM and Vmax of 100 μmol/min. Calculate the reaction velocity when substrate concentration is: (a) 2 mM, (b) 10 mM, (c) 0.5 mM.',
          solution: 'Use Michaelis-Menten equation:\nV = (Vmax × [S]) / (Km + [S])\n\n(a) [S] = 2 mM = Km\nV = (100 × 2) / (2 + 2)\nV = 200 / 4 = 50 μmol/min\n\nWhen [S] = Km, velocity is exactly half of Vmax!\n\n(b) [S] = 10 mM (5 × Km)\nV = (100 × 10) / (2 + 10)\nV = 1000 / 12 = 83.3 μmol/min\n\nAt high [S], approaching Vmax (83% of maximum)\n\n(c) [S] = 0.5 mM (0.25 × Km)\nV = (100 × 0.5) / (2 + 0.5)\nV = 50 / 2.5 = 20 μmol/min\n\nAt low [S], velocity is much lower (20% of maximum)\n\nPattern: As [S] increases, V approaches but never exceeds Vmax.',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          question: 'Compare and contrast competitive and noncompetitive inhibition in terms of mechanism, effect on Km and Vmax, and Lineweaver-Burk plots.',
          solution: 'COMPETITIVE INHIBITION:\nMechanism:\n• Inhibitor binds to active site\n• Competes directly with substrate\n• Can be overcome by increasing [S]\n\nEffect on kinetics:\n• Km increases (appears to have lower affinity)\n• Vmax unchanged (can still reach max with enough substrate)\n\nLineweaver-Burk:\n• Lines intersect on y-axis (same 1/Vmax)\n• Different slopes and x-intercepts\n\nExample: Malonate inhibits succinate dehydrogenase\n\n\nNONCOMPETITIVE INHIBITION:\nMechanism:\n• Inhibitor binds to allosteric site (not active site)\n• Changes enzyme shape, reducing activity\n• Cannot be overcome by increasing [S]\n\nEffect on kinetics:\n• Km unchanged (affinity not affected)\n• Vmax decreases (fewer functional enzymes)\n\nLineweaver-Burk:\n• Lines intersect on x-axis (same -1/Km)\n• Different slopes and y-intercepts\n\nExample: Heavy metals binding to distant cysteine residues\n\nKey distinction: Competitive can be "outcompeted" by substrate; noncompetitive cannot.',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          question: 'What is Km and what does it tell us about an enzyme? If enzyme A has Km = 0.1 mM and enzyme B has Km = 10 mM (both acting on the same substrate), which has higher affinity?',
          solution: 'Km (Michaelis constant):\n• Substrate concentration at which V = ½Vmax\n• Measure of enzyme-substrate affinity\n• Units: concentration (M, mM, μM, etc.)\n\nWhat Km tells us:\n• LOWER Km = HIGHER affinity (enzyme binds substrate tightly)\n• HIGHER Km = LOWER affinity (enzyme binds substrate weakly)\n• Reflects the dissociation constant for ES complex\n\nComparison:\nEnzyme A: Km = 0.1 mM → reaches ½Vmax at low [S]\nEnzyme B: Km = 10 mM → needs high [S] to reach ½Vmax\n\nEnzyme A has HIGHER affinity (100× higher!)\n\nBiological significance:\n• Enzymes with low Km are efficient at low substrate concentrations\n• High-affinity enzymes (low Km) are often used when substrate is scarce\n• Glucose transporters in brain (low Km) vs. liver (high Km)\n\nAnalogy: Low Km is like a strong magnet (grabs substrate easily), high Km is like a weak magnet (needs lots of substrate around).',
          difficulty: 'MEDIUM',
          order: 4,
          isPremium: true
        },
        {
          topicId: enzymeKineticsTopic.id,
          question: 'Explain how allosteric regulation works. Use phosphofructokinase (PFK) in glycolysis as an example, including both positive and negative regulators.',
          solution: 'Allosteric Regulation:\nMechanism:\n• Regulatory molecules bind to site OTHER than active site\n• Binding causes conformational change\n• Change affects active site shape and activity\n• Can be positive (activation) or negative (inhibition)\n\nPhosphofructokinase (PFK) Example:\nPFK catalyzes: Fructose-6-phosphate → Fructose-1,6-bisphosphate\n(committed step of glycolysis)\n\nNEGATIVE Regulators (inhibitors):\n1. ATP (high energy state)\n   • When ATP is abundant, glycolysis slows down\n   • "We have enough energy, stop making more"\n   • Feedback inhibition\n\n2. Citrate (TCA cycle intermediate)\n   • Indicates sufficient biosynthetic precursors\n   • No need for more glycolysis\n\nPOSITIVE Regulators (activators):\n1. AMP (low energy state)\n   • When ATP is depleted, AMP rises\n   • "We need energy, speed up glycolysis!"\n   • Feedforward activation\n\n2. ADP (also signals low energy)\n   • Similar to AMP effect\n\nPhysiological significance:\n• PFK is the rate-limiting enzyme of glycolysis\n• Allosteric regulation allows rapid response to energy needs\n• No transcription/translation required\n• Energy status directly controls metabolic flux\n\nThis is an example of feedback regulation maintaining metabolic homeostasis!',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: enzymeKineticsTopic.id,
          front: 'What is Vmax in enzyme kinetics?',
          back: 'The maximum reaction velocity when all enzyme active sites are saturated with substrate. It represents the upper limit of the reaction rate for a given enzyme concentration.',
          hint: 'Maximum velocity at substrate saturation',
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          front: 'What is Km and what does it indicate?',
          back: 'Km (Michaelis constant) is the substrate concentration at which reaction velocity is half of Vmax. Lower Km = higher substrate affinity; Higher Km = lower substrate affinity.',
          hint: 'Substrate concentration at half Vmax',
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          front: 'What is the Michaelis-Menten equation?',
          back: 'V = (Vmax × [S]) / (Km + [S])\n\nDescribes how reaction velocity depends on substrate concentration. At low [S], V is proportional to [S]; at high [S], V approaches Vmax.',
          hint: 'Relates velocity to substrate concentration',
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          front: 'How does competitive inhibition affect Km and Vmax?',
          back: 'Km increases (appears to have lower affinity)\nVmax unchanged (can still be overcome with high [S])\n\nInhibitor competes with substrate for active site.',
          hint: 'Km up, Vmax same',
          isPremium: false
        },
        {
          topicId: enzymeKineticsTopic.id,
          front: 'How does noncompetitive inhibition affect Km and Vmax?',
          back: 'Km unchanged (affinity not affected)\nVmax decreases (reduces number of functional enzymes)\n\nInhibitor binds to allosteric site, cannot be overcome by adding substrate.',
          hint: 'Km same, Vmax down',
          isPremium: true
        },
        {
          topicId: enzymeKineticsTopic.id,
          front: 'What is allosteric regulation?',
          back: 'Regulation where molecules bind to a site other than the active site, causing a conformational change that affects enzyme activity. Can be positive (activator) or negative (inhibitor).',
          hint: 'Regulation at a site different from active site',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Enzyme Kinetics');
  }

  // Topic 2: Chromosomal Basis of Inheritance (only needs problems, already has flashcards)
  const chromosomalInheritanceTopic = await prisma.topic.findFirst({
    where: {
      slug: 'chromosomal-inheritance',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (chromosomalInheritanceTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: chromosomalInheritanceTopic.id,
          question: 'What is the chromosomal theory of inheritance? Who were the key scientists involved in developing it?',
          solution: 'Chromosomal Theory of Inheritance:\nThe theory states that genes are located on chromosomes, and the behavior of chromosomes during meiosis accounts for Mendel\'s laws of inheritance.\n\nKey Scientists:\n1. Walter Sutton (1903)\n   • Studied grasshopper chromosomes\n   • Observed parallel behavior of chromosomes and Mendelian factors\n\n2. Theodor Boveri (1903)\n   • Studied sea urchin embryos\n   • Showed chromosomes carry genetic information\n\n3. Thomas Hunt Morgan (1910s)\n   • Provided experimental proof using Drosophila\n   • Discovered sex-linkage and genetic recombination\n   • Won Nobel Prize (1933)\n\nKey Evidence:\n• Chromosomes and genes both come in pairs\n• Homologous chromosome pairs separate during meiosis (explains Mendel\'s law of segregation)\n• Different chromosome pairs assort independently (explains Mendel\'s law of independent assortment)\n• Chromosome number is restored during fertilization\n\nThis unified cytology and genetics, explaining the physical basis of heredity.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: chromosomalInheritanceTopic.id,
          question: 'In Drosophila, white eye color is X-linked recessive (Xw) and red is dominant (X+). What are the expected phenotypes and their ratios from a cross between a white-eyed female and a red-eyed male?',
          solution: 'Parental genotypes:\nFemale (white eyes): XwXw\nMale (red eyes): X+Y\n\nGametes:\nFemale produces: Xw only\nMale produces: X+ or Y\n\nPunnett square:\n           X+      Y\n    Xw   X+Xw   XwY\n    Xw   X+Xw   XwY\n\nOffspring:\nFemales: 100% X+Xw (red eyes, carriers)\nMales: 100% XwY (white eyes)\n\nPhenotypic ratio:\n• All females: red eyes (2/4 = 50%)\n• All males: white eyes (2/4 = 50%)\n\nThis is a classic example of sex-linkage discovered by Morgan. The reciprocal cross (red female × white male) gives different results, proving the gene is on the X chromosome.\n\nKey observation: Males show the recessive trait more frequently because they have only one X chromosome (hemizygous).',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: chromosomalInheritanceTopic.id,
          question: 'Explain why genes on the same chromosome don\'t always follow Mendel\'s law of independent assortment. How did Morgan\'s work on linked genes modify Mendelian genetics?',
          solution: 'Mendel\'s Law of Independent Assortment:\n• Assumes genes are on different chromosomes\n• Each gene pair separates independently during meiosis\n• Predicts 9:3:3:1 ratio for dihybrid cross\n\nLinked Genes (on same chromosome):\n• Do NOT assort independently\n• Tend to be inherited together\n• Produce parental combinations more frequently than recombinant types\n\nMorgan\'s Discovery:\n1. Found genes for body color and wing size in Drosophila were linked\n2. Expected 1:1:1:1 from testcross, but got parental types > 50%\n3. Explained by genes being on same chromosome\n\nModification to Mendelian genetics:\n• Genes on same chromosome = linked\n• Closer genes = more tightly linked (less recombination)\n• Crossing over can separate linked genes\n• Recombination frequency proportional to distance between genes\n• Led to chromosome mapping\n\nGeneral principle:\n• Genes on DIFFERENT chromosomes: independent assortment (50% recombination)\n• Genes on SAME chromosome: linkage (< 50% recombination)\n• Distance determines recombination frequency\n\nThis explained exceptions to Mendel\'s laws and showed chromosomal location matters!',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: chromosomalInheritanceTopic.id,
          question: 'A female Drosophila heterozygous for genes A and B (on the same chromosome) is testcrossed. Of 1000 offspring, 450 show AB phenotype, 450 show ab, 50 show Ab, and 50 show aB. What is the map distance between genes A and B?',
          solution: 'Step 1: Identify parental vs recombinant types\nTestcross: AaBb × aabb\n\nOffspring:\nAB: 450 } Parental types (most common)\nab: 450 } Total = 900\n\nAb: 50  } Recombinant types (less common)\naB: 50  } Total = 100\n\nStep 2: Calculate recombination frequency\nRecombination frequency = (# recombinants / total offspring) × 100%\n\nRF = (100 / 1000) × 100% = 10%\n\nStep 3: Convert to map units\n1% recombination = 1 map unit (m.u.) = 1 centimorgan (cM)\n\nMap distance = 10 map units (or 10 cM)\n\nInterpretation:\n• Genes A and B are 10 map units apart on the chromosome\n• 10% of gametes show recombination between these loci\n• Genes are linked but not tightly (moderate distance)\n• Crossing over occurs between them in 10% of meioses\n\nNote: Maximum recombination frequency is 50% (for unlinked genes). Values < 50% indicate linkage.',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: chromosomalInheritanceTopic.id,
          question: 'Explain genomic imprinting. How does it violate Mendelian genetics, and what is an example in humans?',
          solution: 'Genomic Imprinting:\nA phenomenon where gene expression depends on which parent the allele came from. One allele is silenced based on parent of origin.\n\nViolates Mendelian Genetics:\n• Mendel assumed both alleles contribute equally\n• Imprinting means maternal and paternal alleles are NOT equivalent\n• Phenotype depends on parent of origin, not just genotype\n\nMechanism:\n• Epigenetic modification (usually DNA methylation)\n• Occurs during gamete formation\n• Silences one allele while leaving the other active\n• Imprinting is "erased" and "reset" each generation\n\nHuman Example: Prader-Willi and Angelman Syndromes\nBoth involve deletion on chromosome 15, but different phenotypes:\n\nPrader-Willi Syndrome:\n• Deletion of paternal chromosome 15q11-13\n• Symptoms: obesity, intellectual disability, short stature\n• Maternal copy is imprinted (silenced), so deletion of paternal copy = no gene expression\n\nAngelman Syndrome:\n• Deletion of maternal chromosome 15q11-13\n• Symptoms: severe intellectual disability, seizures, inappropriate laughter\n• Paternal copy is imprinted (silenced), so deletion of maternal copy = no gene expression\n\nSame chromosomal region, different diseases depending on parent of origin!\n\nEvolutionary significance: May reflect parent-offspring conflict over resource allocation.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems for Chromosomal Basis of Inheritance (already has flashcards)');
  }

  // Topic 3: Phylogeny and Classification
  const phylogenyTopic = await prisma.topic.findFirst({
    where: {
      slug: 'phylogeny-classification',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (phylogenyTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: phylogenyTopic.id,
          question: 'What is the difference between a phylogenetic tree and a cladogram? What do the branches and nodes represent?',
          solution: 'Phylogenetic Tree:\n• Shows evolutionary relationships\n• Branch lengths proportional to evolutionary change or time\n• Can show timing of divergence\n• Based on molecular or morphological data\n\nCladogram:\n• Type of phylogenetic tree\n• Branch lengths NOT meaningful (only topology matters)\n• Shows only branching order/pattern\n• Focus on shared derived characteristics\n\nKey Features:\n\nBranches:\n• Represent lineages evolving through time\n• Each branch = evolutionary path of a species or group\n• Tips = modern species or taxa\n\nNodes (branch points):\n• Represent common ancestors\n• Point where lineage splits (speciation event)\n• Most recent common ancestor (MRCA) of descendants\n\nRoot:\n• Common ancestor of all organisms in tree\n• Most ancient divergence shown\n\nSister taxa:\n• Groups that share an immediate common ancestor\n• More closely related to each other than to any other group\n\nKey principle: Organisms sharing a more recent common ancestor are more closely related.',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          question: 'What is the principle of parsimony (Occam\'s Razor) in phylogenetic analysis? Why is it used?',
          solution: 'Principle of Parsimony:\nWhen constructing phylogenetic trees, choose the tree that requires the FEWEST evolutionary changes (mutations, character state changes) to explain the observed data.\n\nRationale:\n• Evolutionary changes are relatively rare events\n• Simplest explanation is usually best (Occam\'s Razor)\n• Minimizes assumptions about unseen evolutionary events\n\nExample:\nCompare two possible trees for species A, B, C:\n\nTree 1: Requires 5 mutations\nTree 2: Requires 3 mutations\n\n→ Tree 2 is more parsimonious (preferred)\n\nLimitations:\n1. Evolution doesn\'t always take the simplest path\n2. Convergent evolution can mislead parsimony analysis\n3. Multiple mutations at same site can be missed\n4. May not work well for rapidly evolving sequences\n\nAlternative Methods:\n• Maximum likelihood (statistical approach)\n• Bayesian inference (probabilistic approach)\n• Molecular clock (assumes constant mutation rate)\n\nWhen to use parsimony:\n• Works best for closely related species\n• Good for morphological data\n• Computationally simple\n• Standard in cladistics\n\nKey insight: Parsimony helps us avoid over-complicated evolutionary scenarios, but it\'s not perfect!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          question: 'Explain the difference between homologous and analogous structures. Give an example of each and explain how they can mislead phylogenetic analysis.',
          solution: 'Homologous Structures:\n• Similar due to SHARED ANCESTRY\n• May have different functions\n• Result from divergent evolution\n• Indicate evolutionary relationship\n\nExample: Forelimbs of humans, whales, bats, horses\n• Same basic bone structure (humerus, radius, ulna, carpals, etc.)\n• Different functions (grasping, swimming, flying, running)\n• Inherited from common mammalian ancestor\n\nAnalogous Structures:\n• Similar FUNCTION but different evolutionary origin\n• Result from convergent evolution\n• Do NOT indicate close relationship\n• Similar environmental pressures lead to similar solutions\n\nExample: Wings of birds vs. insects\n• Both used for flight\n• Completely different structure and development\n• Evolved independently\n\nHow they mislead phylogenetic analysis:\n\n1. Analogous structures can make unrelated species appear related\n   • Sharks and dolphins look similar (streamlined, fins)\n   • But dolphins are mammals, sharks are fish\n   • Convergent evolution for aquatic lifestyle\n\n2. Morphological convergence\n   • Succulent plants in deserts (cacti in Americas, euphorbs in Africa)\n   • Similar appearance, different families\n   • Similar adaptations to arid environments\n\n3. Loss of homologous structures\n   • Snakes lost legs (homologous to lizard legs)\n   • Could mistakenly group snakes away from other reptiles\n\nSolution: Use multiple characters\n• Molecular data less prone to convergence\n• Look for synapomorphies (shared derived traits)\n• Consider developmental biology\n• Use parsimony to minimize false homology',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          question: 'What are the three domains of life, and what key characteristics define each? What evidence supports this three-domain system?',
          solution: 'Three Domains (proposed by Carl Woese, 1990):\n\n1. BACTERIA\nCharacteristics:\n• Prokaryotic (no nucleus)\n• Peptidoglycan in cell walls\n• Unbranched membrane lipids (ester-linked)\n• Single circular chromosome\n• No histones (usually)\n• Simple RNA polymerase\n\nExamples: E. coli, Streptococcus, cyanobacteria\n\n2. ARCHAEA\nCharacteristics:\n• Prokaryotic (no nucleus)\n• NO peptidoglycan in cell walls\n• Branched membrane lipids (ether-linked)\n• Single circular chromosome\n• Histones present (like eukaryotes)\n• Complex RNA polymerase (similar to eukaryotes)\n\nExamples: Methanogens, halophiles, thermophiles\n\n3. EUKARYA\nCharacteristics:\n• Eukaryotic (membrane-bound nucleus)\n• No peptidoglycan\n• Unbranched membrane lipids (ester-linked)\n• Multiple linear chromosomes\n• Histones present\n• Complex RNA polymerases\n• Membrane-bound organelles\n\nExamples: Protists, fungi, plants, animals\n\nKey Evidence Supporting Three Domains:\n\n1. rRNA sequence analysis\n   • 16S/18S ribosomal RNA comparisons\n   • Archaea as distinct from Bacteria\n   • Molecular clock analysis\n\n2. Membrane lipid chemistry\n   • Bacteria/Eukarya: ester linkages\n   • Archaea: ether linkages (unique)\n   • Indicates ancient divergence\n\n3. RNA polymerase structure\n   • Archaea more similar to Eukarya than Bacteria\n   • Suggests Archaea and Eukarya share more recent common ancestor\n\n4. Translation machinery\n   • Ribosome structure and function\n   • Archaea and Eukarya similarities\n\nPhylogenetic implications:\n• Archaea and Eukarya are sister groups\n• Bacteria branched off earliest\n• Eukaryotes may have evolved from archaeal host + bacterial endosymbiont',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: phylogenyTopic.id,
          question: 'Given the following DNA sequences for four species at a particular locus, construct the most parsimonious phylogenetic tree:\nSpecies A: ATGCCG\nSpecies B: ATGCTG\nSpecies C: ATCCTG\nSpecies D: TTCCTG',
          solution: 'Step 1: Compare sequences and count differences\n\nA: ATGCCG\nB: ATGCTG (differs from A at position 5: C→T) = 1 difference\nC: ATCCTG (differs from A at positions 3 and 5: G→C, C→T) = 2 differences\nD: TTCCTG (differs from A at positions 1 and 3: A→T, G→C) = 2 differences\n\nB vs C: Position 3 (G→C) = 1 difference\nB vs D: Positions 1 and 3 (A→T, G→C) = 2 differences\nC vs D: Position 1 (A→T) = 1 difference\n\nStep 2: Identify closest relationships\n• A and B differ by only 1 nucleotide → likely sister species\n• C and D differ by only 1 nucleotide → likely sister species\n• B and C differ by only 1 nucleotide → possible grouping\n\nStep 3: Construct tree\nMost parsimonious tree:\n\n       ┌─── A (ATGCCG)\n    ┌──┤\n    │  └─── B (ATGCTG)  [mutation at position 5]\n────┤\n    │  ┌─── C (ATCCTG)\n    └──┤\n       └─── D (TTCCTG)  [mutation at position 1]\n\nTotal mutations required:\n• Position 3: G→C (in ancestor of B, C, D)\n• Position 5: C→T (in ancestor of B, C, D)\n• Position 5: T→G (reversal in lineage to C and D) OR separate origin\n• Position 1: A→T (in lineage to D)\n\nMinimum changes = 4 mutations\n\nStep 4: Verify parsimony\nThis tree requires the fewest evolutionary changes to explain the observed sequences.\n\nAlternative trees would require more mutations, making them less parsimonious.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: phylogenyTopic.id,
          front: 'What is phylogeny?',
          back: 'The evolutionary history and relationships among species or groups of organisms. Phylogeny is represented by phylogenetic trees showing how species are related through common ancestry.',
          hint: 'Evolutionary relationships and history',
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          front: 'What is a clade?',
          back: 'A group consisting of an ancestor and ALL of its descendants. Also called a monophyletic group. Represents a complete branch of the tree of life.',
          hint: 'Ancestor plus all descendants',
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          front: 'What is a shared derived character (synapomorphy)?',
          back: 'A trait that is shared by two or more taxa and their most recent common ancestor, but not by more distant ancestors. Used to identify clades.\n\nExample: Hair is a synapomorphy for mammals.',
          hint: 'Shared trait inherited from common ancestor',
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          front: 'What is the difference between ancestral and derived traits?',
          back: 'Ancestral (plesiomorphic): Trait present in ancestor\nDerived (apomorphic): Modified trait that evolved from ancestral form\n\nExample: Five digits is ancestral for tetrapods; horse single digit is derived.',
          hint: 'Old trait vs. new modified trait',
          isPremium: false
        },
        {
          topicId: phylogenyTopic.id,
          front: 'What are the three domains of life?',
          back: 'Bacteria: Prokaryotes with peptidoglycan walls\nArchaea: Prokaryotes with unique membrane lipids\nEukarya: Organisms with membrane-bound nucleus\n\nBased on rRNA analysis by Carl Woese.',
          hint: 'Bacteria, Archaea, Eukarya',
          isPremium: true
        },
        {
          topicId: phylogenyTopic.id,
          front: 'What is convergent evolution and how does it affect phylogenetic analysis?',
          back: 'Independent evolution of similar features in unrelated lineages due to similar environmental pressures. Creates analogous structures that can mislead phylogenetic analysis by making unrelated organisms appear related.\n\nExample: Wings in birds and bats.',
          hint: 'Similar traits evolving independently',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Phylogeny and Classification');
  }

  console.log('\n🎉 AP Biology Batch 1 complete! (3/10 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
