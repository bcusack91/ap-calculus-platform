import '../src/lib/load-env' // load .env.local first so local runs never hit the prod DB
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🚀 Adding AP Biology Batch 2 (3 topics)\n');

  // Topic 1: Speciation
  const speciationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'speciation',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (speciationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: speciationTopic.id,
          question: 'Define biological species concept. What are its strengths and limitations?',
          solution: 'Biological Species Concept (Ernst Mayr):\nSpecies are groups of actually or potentially interbreeding populations that produce fertile offspring and are reproductively isolated from other such groups.\n\nStrengths:\n• Emphasizes reproductive isolation (key to maintaining species identity)\n• Focuses on gene flow (or lack thereof)\n• Works well for many sexually reproducing organisms\n• Testable through breeding experiments\n\nLimitations:\n\n1. Cannot apply to:\n   • Asexual organisms (bacteria, some plants)\n   • Extinct organisms (fossils)\n   • Organisms separated by geography (can\'t test interbreeding)\n\n2. Ring species problem:\n   • Adjacent populations can interbreed\n   • But distant populations cannot\n   • Where do you draw species line?\n\n3. Microorganisms:\n   • Extensive horizontal gene transfer\n   • Species boundaries unclear\n\n4. Plants:\n   • Many species can hybridize and produce fertile offspring\n   • Yet maintain distinct identities\n\nAlternative concepts:\n• Morphological species (based on structure)\n• Ecological species (based on niche)\n• Phylogenetic species (based on evolutionary history)\n• Genetic species (based on DNA similarity)\n\nKey insight: No single species concept works perfectly for all organisms!',
          difficulty: 'MEDIUM',
          order: 1,
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          question: 'Compare and contrast allopatric and sympatric speciation. Give an example of each.',
          solution: 'ALLOPATRIC SPECIATION ("other homeland"):\nMechanism:\n• Geographic separation of populations\n• Physical barrier prevents gene flow\n• Independent evolution in isolation\n• Reproductive isolation evolves as byproduct\n\nSteps:\n1. Geographic isolation (barrier forms)\n2. Genetic divergence (mutation, drift, selection)\n3. Reproductive isolation evolves\n4. Populations can no longer interbreed (even if reunited)\n\nExample: Darwin\'s finches on Galápagos Islands\n• Ancestral finch colonized islands\n• Island populations isolated\n• Evolved different beak shapes for different foods\n• Now 13+ distinct species\n\nOther examples: Grand Canyon squirrels, Hawaiian silverswords\n\n\nSYMPATRIC SPECIATION ("same homeland"):\nMechanism:\n• Speciation WITHOUT geographic separation\n• Occurs within same area\n• Reproductive isolation evolves first\n• Gene flow reduced by behavioral or genetic factors\n\nMechanisms:\n1. Polyploidy (especially in plants)\n   • Chromosome doubling → instant reproductive isolation\n2. Sexual selection\n   • Mate preference divergence\n3. Ecological specialization\n   • Different niches → different selection pressures\n\nExample: Polyploidy in wheat\n• Chromosome doubling creates new species instantly\n• Common in plants (30-70% of angiosperms)\n• Polyploid cannot breed with diploid parent\n\nOther examples: Cichlid fish in African lakes, apple maggot flies\n\nKey Difference:\n• Allopatric: Geographic isolation comes FIRST\n• Sympatric: Reproductive isolation comes FIRST (without geographic separation)',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          question: 'What are prezygotic and postzygotic reproductive barriers? Give two examples of each.',
          solution: 'Reproductive barriers prevent gene flow between species.\n\nPREZYGOTIC BARRIERS (before fertilization):\nPrevent hybrid zygote formation\n\n1. Habitat Isolation\n   • Species live in different habitats\n   • Example: Water snakes vs. land snakes\n   • Don\'t encounter each other\n\n2. Temporal Isolation\n   • Breed at different times\n   • Example: Plants flowering in different seasons\n   • Eastern and Western spotted skunks breed in different months\n\n3. Behavioral Isolation\n   • Different courtship behaviors\n   • Example: Firefly flash patterns\n   • Bird songs and dances\n\n4. Mechanical Isolation\n   • Incompatible reproductive structures\n   • Example: Insect genitalia (lock-and-key fit)\n   • Flower shapes matching specific pollinators\n\n5. Gametic Isolation\n   • Sperm cannot fertilize egg\n   • Example: Sea urchin sperm-egg recognition proteins\n   • Incompatible gamete surface proteins\n\n\nPOSTZYGOTIC BARRIERS (after fertilization):\nHybrid zygote forms but has reduced fitness\n\n1. Reduced Hybrid Viability\n   • Hybrid embryos don\'t develop properly or die\n   • Example: Sheep-goat hybrids die as embryos\n   • Incompatible genes from different species\n\n2. Reduced Hybrid Fertility\n   • Hybrid adults are sterile\n   • Example: Mule (horse × donkey)\n   • Healthy but cannot produce offspring\n   • Chromosome incompatibility during meiosis\n\n3. Hybrid Breakdown\n   • F1 hybrids viable and fertile\n   • F2 or later generations have problems\n   • Example: Some rice hybrids\n   • Cotton hybrids\n\nKey principle:\n• Prezygotic barriers save energy (no wasted gametes)\n• Postzygotic barriers are "last resort"\n• Natural selection favors prezygotic isolation',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          question: 'Explain how polyploidy can lead to instant speciation in plants. Why is this more common in plants than animals?',
          solution: 'Polyploidy as Instant Speciation:\n\nMechanism:\n1. Normal diploid plant (2n)\n2. Error in meiosis or mitosis → chromosome doubling\n3. Results in polyploid (3n, 4n, etc.)\n4. Polyploid CANNOT breed with diploid parent\n   • Different chromosome numbers\n   • Meiosis produces unbalanced gametes\n   • Instant reproductive isolation!\n\nTypes:\n\nAutopolyploidy (within species):\n• Chromosome set duplicates within species\n• Example: 2n → 4n\n• 4n × 2n → 3n (sterile triploid)\n• But 4n × 4n → 4n (fertile!)\n\nAllopolyploidy (between species):\n• Hybridization + chromosome doubling\n• Example: Species A (2n=14) × Species B (2n=16)\n• F1 hybrid (n=7+8=15) is sterile\n• Chromosome doubling → 30 chromosomes\n• Now can undergo normal meiosis (15 pairs)\n• Fertile new species!\n\nWhy more common in PLANTS:\n\n1. Indeterminate growth\n   • Plants can survive developmental abnormalities better\n   • Animals have more rigid developmental programs\n\n2. Flexible metabolism\n   • Plants tolerate gene dosage imbalances\n   • Animals\' physiology more sensitive to gene dosage\n\n3. Reproduction options\n   • Plants can reproduce asexually\n   • Can establish population even if initially sterile\n   • Vegetative propagation (runners, bulbs, etc.)\n\n4. Circulatory system\n   • Plants lack closed circulatory system\n   • Animals with extra chromosomes have blood cell problems\n   • Cell size issues in closed systems\n\nExamples of polyploid species:\n• Wheat (hexaploid: 6 sets of chromosomes)\n• Strawberries (octoploid: 8 sets)\n• Many ornamental flowers\n• 30-70% of flowering plants!\n\nEvolutionary significance:\n• Major mechanism of plant speciation\n• Instant reproductive isolation\n• No geographic separation needed\n• Source of genetic variation',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: speciationTopic.id,
          question: 'What is reinforcement in the context of speciation? Describe a scenario where reinforcement would occur.',
          solution: 'Reinforcement:\nThe process by which natural selection strengthens prezygotic reproductive barriers between two populations, reducing the formation of inferior hybrids.\n\nKey Concept:\n• If hybrids have low fitness, selection favors individuals who DON\'T mate with other population\n• Leads to evolution of stronger prezygotic isolation\n• Completes the speciation process\n\nRequirements for Reinforcement:\n1. Two populations that diverged in allopatry\n2. Come back into contact (secondary contact)\n3. Can still interbreed but hybrids have reduced fitness\n4. Selection against hybridization\n\nScenario Example:\n\nStep 1: Geographic Isolation\n• Population of frogs separated by mountain range\n• Evolve different mating calls in isolation\n• Mountain range erodes → populations come back into contact\n\nStep 2: Secondary Contact\n• Populations can still interbreed\n• Produce hybrid offspring\n• Hybrids have 50% survival rate (vs. 90% for pure individuals)\n\nStep 3: Selection Against Hybrids\n• Individuals who mate with own population: more offspring survive\n• Individuals who mate with other population: fewer offspring survive\n• Females who prefer their own population\'s call: higher fitness\n\nStep 4: Reinforcement\n• Selection favors stronger mating call preferences\n• Over generations, call preferences become more discriminating\n• Eventually: populations won\'t mate with each other at all\n• Complete reproductive isolation achieved!\n\nEvidence for Reinforcement:\n• "Reproductive character displacement"\n• Sympatric populations show stronger prezygotic isolation than allopatric populations of same species\n• Example: Drosophila in overlapping vs. non-overlapping regions\n\nAlternative Outcome - Fusion:\n• If hybrids have high fitness, populations merge back together\n• Reinforcement doesn\'t occur\n• Speciation reversed\n\nKey Insight: Reinforcement is natural selection AGAINST hybridization, completing the speciation process!',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: speciationTopic.id,
          front: 'What is speciation?',
          back: 'The evolutionary process by which new biological species arise. Occurs when populations become reproductively isolated and diverge genetically.',
          hint: 'Formation of new species',
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          front: 'What is the biological species concept?',
          back: 'Species are groups of interbreeding populations that produce fertile offspring and are reproductively isolated from other groups. Focuses on reproductive compatibility and gene flow.',
          hint: 'Based on interbreeding and fertile offspring',
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          front: 'What is allopatric speciation?',
          back: 'Speciation that occurs when populations are geographically separated. Geographic barrier prevents gene flow, allowing independent evolution and eventual reproductive isolation.\n\nExample: Darwin\'s finches on different islands',
          hint: 'Geographic separation leads to speciation',
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          front: 'What is sympatric speciation?',
          back: 'Speciation that occurs within the same geographic area without physical barriers. Often involves polyploidy in plants or ecological/behavioral isolation.\n\nExample: Polyploidy in wheat, cichlid fish in lakes',
          hint: 'Speciation without geographic separation',
          isPremium: false
        },
        {
          topicId: speciationTopic.id,
          front: 'What are prezygotic barriers?',
          back: 'Reproductive barriers that prevent fertilization from occurring: habitat isolation, temporal isolation, behavioral isolation, mechanical isolation, and gametic isolation.\n\nPrevent formation of hybrid zygote.',
          hint: 'Barriers before fertilization',
          isPremium: true
        },
        {
          topicId: speciationTopic.id,
          front: 'What are postzygotic barriers?',
          back: 'Reproductive barriers that reduce fitness of hybrid offspring: reduced hybrid viability, reduced hybrid fertility, and hybrid breakdown.\n\nExample: Mules are sterile (reduced hybrid fertility)',
          hint: 'Barriers after fertilization - hybrids have problems',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Speciation');
  }

  // Topic 2: Natural Selection and Adaptation
  const naturalSelectionAdaptationTopic = await prisma.topic.findFirst({
    where: {
      slug: 'natural-selection-adaptation',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (naturalSelectionAdaptationTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: naturalSelectionAdaptationTopic.id,
          question: 'State the three conditions necessary for natural selection to occur. Explain why all three are required.',
          solution: 'Three Necessary Conditions for Natural Selection:\n\n1. VARIATION\n   • Individuals in population differ in traits\n   • Variation must exist for selection to act upon\n   • Without variation, all individuals identical → no selection possible\n   • Source: mutation, sexual reproduction, recombination\n\n2. HERITABILITY\n   • Variations must be heritable (passed to offspring)\n   • If trait not genetic, cannot evolve\n   • Example: Bodybuilder\'s muscles not passed to children\n   • Only genetic variation matters for evolution\n\n3. DIFFERENTIAL REPRODUCTIVE SUCCESS\n   • Some variants survive/reproduce better than others\n   • Differential fitness based on traits\n   • "Struggle for existence" - limited resources\n   • Individuals with advantageous traits leave more offspring\n\nWhy ALL THREE are Required:\n\n• Variation alone: Differences exist but don\'t matter\n• Heritability alone: Traits passed on but all equal fitness\n• Differential success alone: Some survive better but trait not inherited\n\nTogether:\n1. Variation provides raw material\n2. Heritability allows favorable traits to accumulate\n3. Differential success determines which traits increase\n\n→ Result: Evolution by natural selection!\n\nExample - Antibiotic Resistance:\n1. Variation: Some bacteria randomly have resistance genes\n2. Heritability: Resistance genes passed to offspring\n3. Differential success: Resistant bacteria survive antibiotic; sensitive ones die\n→ Population evolves resistance',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          question: 'Distinguish between adaptation and acclimation. Give an example of each.',
          solution: 'ADAPTATION (Evolutionary):\n• Genetic change over many generations\n• Result of natural selection\n• Heritable trait that enhances fitness\n• Population-level change\n• Permanent (in population)\n• Takes many generations\n\nExample: Arctic fox white fur\n• Genetic trait for white coat color\n• Evolved over thousands of generations\n• Provides camouflage in snow\n• Inherited by offspring\n• Population adapted to arctic environment\n\nOther examples:\n• Cactus spines (water conservation)\n• Bird wings (flight)\n• Antibiotic resistance in bacteria\n\n\nACCLIMATION (Physiological):\n• Phenotypic change within individual\'s lifetime\n• Response to environmental conditions\n• NOT heritable\n• Individual-level change\n• Reversible\n• Occurs within one generation/individual\n\nExample: Tanning from sun exposure\n• Increased melanin production\n• Occurs within individual\'s lifetime\n• Not passed to offspring genetically\n• Reverses when sun exposure decreases\n• Individual acclimates to sunny environment\n\nOther examples:\n• Red blood cell increase at high altitude\n• Calluses from physical labor\n• Muscle growth from exercise\n• Seasonal coat thickness changes\n\nKey Distinction:\n• Adaptation = GENETIC, HERITABLE, EVOLUTIONARY\n• Acclimation = PHENOTYPIC, NON-HERITABLE, PHYSIOLOGICAL\n\nCommon misconception:\n"Giraffes stretched their necks to reach leaves and passed longer necks to offspring" ← This is WRONG! (Lamarckism)\n\nCorrect: Giraffes with longer necks (genetic variation) survived better and reproduced more → adaptation',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          question: 'Explain the three types of natural selection (directional, stabilizing, and disruptive) with respect to their effects on population variation and mean trait value.',
          solution: 'Types of Natural Selection:\n\n1. DIRECTIONAL SELECTION\nEffect:\n• Favors one extreme phenotype\n• Mean shifts in one direction\n• Variation may decrease initially\n• Eventually may increase with new mutations\n\nExample: Antibiotic resistance\n• Before: Range of resistance levels\n• Selection: Antibiotics kill sensitive bacteria\n• After: Mean resistance increases\n• Population shifts toward high resistance\n\nOther examples:\n• Darker moths during Industrial Revolution\n• Larger beak size during drought (Darwin\'s finches)\n• Pesticide resistance\n\n\n2. STABILIZING SELECTION\nEffect:\n• Favors intermediate phenotypes\n• Extremes selected against\n• Mean stays the same\n• Variation DECREASES\n• Most common in stable environments\n\nExample: Human birth weight\n• Babies too small: lower survival (health problems)\n• Babies too large: difficult delivery, complications\n• Intermediate weight (7-8 lbs): highest survival\n• Selection maintains optimal weight\n\nOther examples:\n• Clutch size in birds (too few or too many eggs = lower fitness)\n• Body size in many organisms\n• Number of bristles in Drosophila\n\n\n3. DISRUPTIVE SELECTION\nEffect:\n• Favors BOTH extremes\n• Intermediate phenotypes selected against\n• Mean may stay same\n• Variation INCREASES\n• Can lead to two distinct groups (bimodal distribution)\n• May lead to speciation\n\nExample: African seed-cracker finches\n• Small beaks: efficient at eating soft seeds\n• Large beaks: efficient at cracking hard seeds\n• Medium beaks: inefficient at both\n• Population has two peaks (small and large beaks)\n\nOther examples:\n• Black-bellied seedcracker bird beak sizes\n• Darwin\'s finches on islands with two seed types\n• Some insect populations with host-plant specialization\n\nSummary Table:\n\nType          | Mean    | Variation | Favored Phenotype\n--------------|---------|-----------|------------------\nDirectional   | Shifts  | Decreases*| One extreme\nStabilizing   | Same    | Decreases | Intermediate\nDisruptive    | Same    | Increases | Both extremes\n\n*Initially decreases; may increase later with mutations',
          difficulty: 'HARD',
          order: 3,
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          question: 'What is sexual selection? How does it differ from natural selection for survival? Describe both intrasexual and intersexual selection with examples.',
          solution: 'Sexual Selection:\nA type of natural selection where traits evolve because they increase mating success, NOT necessarily survival.\n\nDifference from Natural Selection for Survival:\n• Survival selection: Favors traits that help organism survive\n• Sexual selection: Favors traits that increase mating success\n• Can work AGAINST survival (peacock\'s tail is burden)\n• Explains "ornaments" and "weapons" that don\'t aid survival\n\nTwo Types:\n\n1. INTRASEXUAL SELECTION ("within sex")\nMechanism:\n• Competition between members of SAME sex (usually males)\n• Direct competition for mates\n• "Male-male competition"\n• Fighting, displays of dominance\n\nTraits favored:\n• Larger body size\n• Weapons (antlers, horns, tusks)\n• Aggressive behavior\n• Strength, fighting ability\n\nExamples:\n• Male elephant seals fighting for beach territory and females\n  - Larger males win fights\n  - Winners mate with many females\n  - Size increases over generations\n\n• Male deer antlers\n  - Used in combat with other males\n  - Larger antlers = more wins = more mates\n\n• Male dung beetles with horns\n\n\n2. INTERSEXUAL SELECTION ("between sexes")\nMechanism:\n• Mate choice by one sex (usually females)\n• "Female choice"\n• Females select males based on traits\n• Males compete to be chosen\n\nTraits favored:\n• Bright colors\n• Elaborate ornaments\n• Complex songs/calls\n• Courtship displays\n\nExamples:\n• Peacock\'s tail\n  - Females prefer males with larger, more colorful tails\n  - Despite survival cost (predation risk, energy)\n  - "Good genes" or "runaway selection"\n\n• Bird of paradise elaborate plumage and dance\n  - Males perform complex displays\n  - Females choose based on display quality\n\n• Firefly flash patterns\n• Frog mating calls\n• Bower bird nest decorations\n\nWhy Does Female Choice Evolve?\n\n1. Good genes hypothesis:\n   • Ornaments indicate male health/quality\n   • Females choosing healthy males get "good genes" for offspring\n\n2. Runaway selection:\n   • Positive feedback loop\n   • Females prefer trait → males with trait reproduce more → sons inherit trait AND daughters inherit preference\n   • Escalates even if no survival benefit\n\n3. Sensory bias:\n   • Pre-existing preference in nervous system\n   • Males evolve to exploit this preference\n\nKey Insight: Sexual selection can favor traits that DECREASE survival but INCREASE mating success. Net effect on reproduction is what matters!',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          question: 'Explain why natural selection cannot produce perfect organisms. Give at least three constraints on evolution.',
          solution: 'Why Natural Selection Cannot Produce Perfection:\n\nConstraints on Evolution:\n\n1. HISTORICAL CONSTRAINTS\n   • Evolution works with existing structures\n   • Cannot start from scratch\n   • "Tinkering" with what already exists\n   \n   Example: Human back problems\n   • Spine evolved for horizontal posture (quadrupedal)\n   • Adapted for upright walking but not "designed" for it\n   • Results in back pain, herniated discs\n   • Better design would be different structure, but evolution can\'t start over\n\n   Example: Recurrent laryngeal nerve in giraffe\n   • Nerve goes from brain down neck to heart and back up\n   • ~15 feet of "unnecessary" nerve\n   • Historical artifact from fish anatomy\n\n\n2. LACK OF GENETIC VARIATION\n   • Selection can only act on existing variation\n   • If no genetic variation for a trait, no evolution possible\n   • Mutation is random, not directed toward needs\n   \n   Example: Antifreeze proteins in fish\n   • Antarctic fish need antifreeze\n   • Had to wait for random mutation to provide variation\n   • Can\'t evolve trait if genes don\'t exist\n\n\n3. TRADE-OFFS AND CONFLICTS\n   • Adaptations for one function may impair another\n   • Finite resources/energy\n   • Pleiotropy (one gene affects multiple traits)\n   \n   Example: Peacock tail\n   • Good for mating (sexual selection)\n   • Bad for survival (predation, energy cost)\n   • Compromise between opposing selection pressures\n\n   Example: Reproduction vs. survival\n   • Energy invested in reproduction not available for growth/maintenance\n   • Salmon die after spawning (extreme trade-off)\n\n\n4. RANDOM EVENTS (GENETIC DRIFT)\n   • Especially in small populations\n   • Beneficial alleles can be lost by chance\n   • Harmful alleles can increase by chance\n   • Overrides selection when drift is strong\n\n\n5. TIME LAGS\n   • Environment changes faster than evolution\n   • Organisms adapted to past conditions\n   • Always "catching up"\n   \n   Example: Human craving for sugar/fat\n   • Adaptive when food scarce\n   • Maladaptive in modern environment (obesity)\n   • Evolution hasn\'t caught up to abundance\n\n\n6. PHYSICAL AND CHEMICAL CONSTRAINTS\n   • Laws of physics and chemistry limit possibilities\n   • Cannot violate thermodynamics\n   • Material properties limit design\n   \n   Example: Flying organisms\n   • Must be lightweight (limits size)\n   • Largest flying birds near physical limit\n   • Cannot evolve to be arbitrarily large and fly\n\n\n7. COMPROMISES IN DEVELOPMENT\n   • Developmental programs constrain adult form\n   • All tetrapods have 4 limbs (ancestral constraint)\n   • Could benefit from 6 limbs but development locked in\n\nKey Principle:\nEvolution produces organisms that are "good enough" to survive and reproduce in their current environment, not perfect organisms. Natural selection is a process of satisficing (satisfactory + sufficing), not optimizing!',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    await prisma.flashcard.createMany({
      data: [
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What are the three conditions necessary for natural selection?',
          back: '1. Variation in traits among individuals\n2. Heritability of those variations\n3. Differential reproductive success based on those traits\n\nAll three must be present for evolution by natural selection.',
          hint: 'Variation, heritability, differential success',
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What is an adaptation?',
          back: 'A heritable trait that has evolved by natural selection because it enhances survival or reproduction in a particular environment. Result of many generations of selection.',
          hint: 'Heritable trait that increases fitness',
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What is directional selection?',
          back: 'Natural selection that favors one extreme phenotype over others, causing the population mean to shift in that direction. Variation may initially decrease.\n\nExample: Antibiotic resistance, darker moths',
          hint: 'Favors one extreme, shifts mean',
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What is stabilizing selection?',
          back: 'Natural selection that favors intermediate phenotypes and selects against extremes. Mean stays the same but variation decreases.\n\nExample: Human birth weight, clutch size in birds',
          hint: 'Favors intermediate, reduces variation',
          isPremium: false
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What is disruptive selection?',
          back: 'Natural selection that favors both extreme phenotypes and selects against intermediates. Variation increases and can lead to bimodal distribution.\n\nExample: Bird beak sizes for different seed types',
          hint: 'Favors both extremes, increases variation',
          isPremium: true
        },
        {
          topicId: naturalSelectionAdaptationTopic.id,
          front: 'What is sexual selection?',
          back: 'Selection for traits that increase mating success rather than survival. Includes intrasexual selection (male-male competition) and intersexual selection (mate choice, usually female choice).\n\nExample: Peacock tail, deer antlers',
          hint: 'Selection for mating success',
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems and 6 flashcards for Natural Selection and Adaptation');
  }

  // Topic 3: Natural Selection and Evolution (only needs problems, already has flashcards)
  const naturalSelectionTopic = await prisma.topic.findFirst({
    where: {
      slug: 'natural-selection',
      category: {
        course: {
          slug: 'ap-biology'
        }
      }
    }
  });

  if (naturalSelectionTopic) {
    await prisma.exampleProblem.createMany({
      data: [
        {
          topicId: naturalSelectionTopic.id,
          question: 'Explain Darwin\'s theory of evolution by natural selection. What evidence did Darwin use to support his theory?',
          solution: 'Darwin\'s Theory of Evolution by Natural Selection:\n\nMain Ideas:\n1. Organisms produce more offspring than can survive\n2. Individuals vary in their traits\n3. Some variations are heritable\n4. Individuals with advantageous traits survive and reproduce more\n5. Over time, favorable traits become more common\n6. Populations evolve (change in allele frequencies)\n\nKey Observations:\n• Struggle for existence (Malthus\'s influence)\n• Overproduction of offspring\n• Limited resources\n• Variation within species\n• Much variation is heritable\n\nEvidence Darwin Used:\n\n1. Fossil Record\n   • Extinct species similar to living ones\n   • Succession of forms over time\n   • Intermediate forms\n   Example: Marine fossils on mountaintops\n\n2. Biogeography\n   • Species distributions match geological history\n   • Similar environments, different species on different continents\n   • Island species resemble mainland species\n   Example: Galápagos finches similar to South American finches\n\n3. Comparative Anatomy\n   • Homologous structures (same structure, different function)\n   • Vestigial structures (reduced, functionless)\n   Example: Vertebrate forelimbs, human appendix, whale hip bones\n\n4. Comparative Embryology\n   • Similar embryonic development across vertebrates\n   • Gill slits in all vertebrate embryos\n   Example: Pharyngeal pouches in human embryos\n\n5. Artificial Selection\n   • Humans breed plants and animals for desired traits\n   • Shows variation can lead to major changes\n   Example: Dog breeds, crop varieties, pigeons\n\nModern Evidence (not available to Darwin):\n• Molecular biology (DNA/protein sequences)\n• Direct observation of evolution (bacteria, insects)\n• Experimental evolution\n• Genetics (understanding of inheritance)\n\nKey Insight: Natural selection is differential reproductive success based on heritable variation!',
          difficulty: 'EASY',
          order: 1,
          isPremium: false
        },
        {
          topicId: naturalSelectionTopic.id,
          question: 'What is fitness in evolutionary biology? How does it differ from the common usage of the word?',
          solution: 'Evolutionary Fitness:\nThe relative ability of an organism to survive and pass its genes to the next generation. Measured by reproductive success.\n\nFormal Definition:\nContribution of an individual\'s genes to the next generation relative to other individuals in the population.\n\nKey Components:\n1. SURVIVAL to reproductive age\n2. Ability to REPRODUCE\n3. NUMBER of offspring produced\n4. QUALITY/SURVIVAL of offspring\n\nDifference from Common Usage:\n\nCommon usage:\n• Physical fitness\n• Health, strength, endurance\n• Athletic ability\n• "Being in shape"\n\nEvolutionary usage:\n• Reproductive success\n• Number of surviving offspring\n• Genetic contribution to next generation\n• NOT about individual health per se\n\nCrucial Distinctions:\n\n1. Relative, not absolute\n   • Fitness is always relative to others in population\n   • Individual with 3 offspring has low fitness if average is 10\n   • Same individual has high fitness if average is 1\n\n2. Reproductive success matters, not survival alone\n   • Organism that lives 100 years but has no offspring: fitness = 0\n   • Organism that lives 1 year but has 1000 offspring: very high fitness\n   Example: Salmon die after spawning but have high fitness\n\n3. Timing matters\n   • Having offspring young vs. old affects fitness\n   • Earlier reproduction = genes spread faster\n\n4. Quality AND quantity\n   • Not just number of offspring\n   • Offspring must survive to reproduce\n   Example: 1000 eggs that all die vs. 10 offspring that survive\n\nExamples:\n\nHIGH fitness:\n• Peacock with large tail: attracts many mates despite survival cost\n• Antibiotic-resistant bacteria: survives and reproduces in presence of antibiotic\n• Queen bee: produces thousands of offspring\n\nLOW fitness:\n• Sterile organism (fitness = 0)\n• Organism that survives but never finds mate\n• Individual with genetic disease preventing reproduction\n\nInclusive Fitness:\n• Extended concept including relatives\n• Helping relatives reproduce (share genes)\n• Explains altruistic behavior\n• "Fitness = direct reproduction + indirect (through relatives)"\n\nKey Principle: Evolution doesn\'t favor the "strongest" or "healthiest" - it favors those who leave the most viable offspring!',
          difficulty: 'MEDIUM',
          order: 2,
          isPremium: false
        },
        {
          topicId: naturalSelectionTopic.id,
          question: 'Describe the peppered moth (Biston betularia) as an example of natural selection in action. What happened during and after the Industrial Revolution?',
          solution: 'Peppered Moth: Classic Example of Natural Selection\n\nBackground:\n• Two color forms: light (typical) and dark (melanic)\n• Color controlled by single gene\n• Moths rest on tree trunks during day\n• Birds prey on visible moths\n\nBEFORE Industrial Revolution (pre-1800s):\nEnvironment:\n• Tree bark light-colored with lichens\n• Rural, unpolluted environment\n\nMoth populations:\n• Light moths common (95%+)\n• Camouflaged against light bark\n• Dark moths rare (< 5%)\n• Dark moths visible to birds, heavily predated\n\nSelection pressure: Birds preferentially eat dark moths\n\nDURING Industrial Revolution (1800s-1950s):\nEnvironment:\n• Industrial pollution killed lichens\n• Soot darkened tree bark\n• Urban and industrial areas\n\nMoth populations:\n• Dark moths increased dramatically\n• By 1895: ~98% dark in industrial areas\n• Light moths decreased\n• Light moths now visible against dark bark\n\nSelection pressure: Birds preferentially eat light moths\n\nMechanism:\n1. Variation: Light and dark forms exist\n2. Heritability: Color genetically determined\n3. Differential survival: Camouflaged moths survive better\n4. Result: Population shifts toward better-camouflaged form\n\nAFTER Clean Air Acts (1950s-present):\nEnvironment:\n• Pollution reduced\n• Lichens returned\n• Tree bark became lighter again\n\nMoth populations:\n• Light moths increasing again\n• Dark moths decreasing\n• Populations reverting to pre-industrial frequencies\n• By 2000s: light form dominant again\n\nKey Evidence:\n1. Bernard Kettlewell\'s experiments (1950s)\n   • Mark-recapture studies\n   • Light moths survived better in unpolluted woods\n   • Dark moths survived better in polluted woods\n   • Birds observed preying on conspicuous moths\n\n2. Geographic correlation\n   • Dark moths common in industrial areas\n   • Light moths common in rural areas\n   • Cline (gradual change) between regions\n\n3. Recent studies\n   • Michael Majerus\'s work (2000s)\n   • Confirmed selection by birds\n   • Showed microhabitat selection by moths\n\n4. Genetic studies\n   • Gene for melanism identified\n   • Dominant mutation\n   • Arose ~1819\n\nSignificance:\n• Observable evolution in "real time"\n• Demonstrates natural selection\n• Shows evolution can be rapid (decades, not millions of years)\n• Reversible (evolution not one-way)\n• Human impact on evolution\n\nLimitations:\n• Some details of original study questioned\n• More complex than originally thought\n• Multiple factors beyond bird predation\n• But core principle remains valid\n\nKey Lesson: Natural selection responds to environmental changes, and evolution can occur rapidly when selection is strong!',
          difficulty: 'MEDIUM',
          order: 3,
          isPremium: false
        },
        {
          topicId: naturalSelectionTopic.id,
          question: 'Explain how antibiotic resistance in bacteria is an example of evolution by natural selection. Why is this a concern for public health?',
          solution: 'Antibiotic Resistance: Evolution in Action\n\nMechanism of Evolution:\n\n1. VARIATION\n   • Random mutations create genetic diversity\n   • Some bacteria have resistance genes by chance\n   • Can also acquire resistance through horizontal gene transfer\n   • Example: Gene for enzyme that breaks down antibiotic\n\n2. SELECTION PRESSURE (Antibiotic Exposure)\n   • Antibiotic introduced\n   • Sensitive bacteria die\n   • Resistant bacteria survive\n   • Strong selection favoring resistance\n\n3. DIFFERENTIAL REPRODUCTION\n   • Resistant bacteria reproduce\n   • Sensitive bacteria eliminated\n   • Resistant bacteria have field to themselves\n   • Rapid reproduction (20-minute generation time)\n\n4. EVOLUTION\n   • Population shifts to resistant strain\n   • Can occur in days to weeks\n   • Allele frequency changes dramatically\n   • Population has evolved!\n\nExample: MRSA (Methicillin-Resistant Staphylococcus aureus)\n• Resistant to methicillin and related antibiotics\n• Evolved through natural selection in hospitals\n• Now widespread and difficult to treat\n\nFactors Accelerating Resistance:\n\n1. Overuse of antibiotics\n   • Unnecessary prescriptions\n   • Agricultural use (livestock)\n   • Increases selection pressure\n\n2. Incomplete treatment\n   • Patients stop taking antibiotics early\n   • Kills most bacteria but not all\n   • Survivors often partially resistant\n   • Selects for resistance\n\n3. Horizontal gene transfer\n   • Plasmids carry resistance genes\n   • Transfer between different bacterial species\n   • Speeds evolution of resistance\n   • Example: Conjugation, transformation, transduction\n\n4. High mutation rate\n   • Large population sizes (billions of bacteria)\n   • Short generation time\n   • Increases probability of resistance mutation\n\nPublic Health Concerns:\n\n1. Untreatable infections\n   • "Superbugs" resistant to multiple antibiotics\n   • Limited or no treatment options\n   • Increased mortality\n   Example: XDR-TB (extensively drug-resistant tuberculosis)\n\n2. Longer, more expensive treatment\n   • Need for stronger, newer antibiotics\n   • Longer hospital stays\n   • Higher healthcare costs\n   • More side effects from stronger drugs\n\n3. Complications in medical procedures\n   • Surgery depends on antibiotics to prevent infection\n   • Chemotherapy patients immunocompromised\n   • Organ transplant recipients need antibiotics\n   • These become riskier without effective antibiotics\n\n4. Global spread\n   • Resistant bacteria spread worldwide\n   • International travel\n   • Trade and food supply\n   • "Post-antibiotic era" possible\n\n5. Evolutionary arms race\n   • Bacteria evolve resistance\n   • We develop new antibiotics\n   • Bacteria evolve resistance to those\n   • Cycle continues, but we\'re losing ground\n   • Rate of resistance evolution > rate of new drug development\n\nStrategies to Combat Resistance:\n\n1. Antibiotic stewardship\n   • Use only when necessary\n   • Complete full course of treatment\n   • Right drug, right dose, right duration\n\n2. Reduce agricultural use\n   • Don\'t use antibiotics as growth promoters\n   • Reserve certain antibiotics for human use only\n\n3. Infection prevention\n   • Hygiene and sanitation\n   • Vaccination\n   • Reduce need for antibiotics\n\n4. New drug development\n   • Research new antibiotics\n   • Alternative treatments (phage therapy, etc.)\n\n5. Combination therapy\n   • Multiple antibiotics simultaneously\n   • Harder for bacteria to develop resistance to all\n\nEvolutionary Insight:\n• We cannot "defeat" evolution\n• Bacteria will always evolve\n• Must work WITH evolutionary principles\n• Slow selection for resistance, don\'t eliminate it\n\nKey Principle: Antibiotic resistance is not just a medical problem - it\'s an evolutionary problem requiring evolutionary solutions!',
          difficulty: 'HARD',
          order: 4,
          isPremium: true
        },
        {
          topicId: naturalSelectionTopic.id,
          question: 'What is genetic drift? How does it differ from natural selection? In what situations is genetic drift most important?',
          solution: 'Genetic Drift:\nRandom change in allele frequencies due to chance events. NOT based on fitness differences.\n\nDifference from Natural Selection:\n\nNATURAL SELECTION:\n• NON-random process\n• Based on fitness differences\n• Predictable direction (toward higher fitness)\n• More important in large populations\n• Adaptive (increases fitness)\n• Example: Antibiotic resistance spreads because it\'s beneficial\n\nGENETIC DRIFT:\n• RANDOM process\n• NOT based on fitness (chance events)\n• Unpredictable direction\n• More important in small populations\n• Non-adaptive (doesn\'t necessarily increase fitness)\n• Example: Allele lost by chance, even if beneficial\n\nTwo Main Types of Drift:\n\n1. BOTTLENECK EFFECT\nOccurs when population size drastically reduced by random event\n\nMechanism:\n• Disaster kills most of population\n• Survivors are random sample (not necessarily "best")\n• Rare alleles often lost\n• Genetic diversity reduced\n• Founding of new population from survivors\n\nExample: Northern elephant seals\n• Hunted to ~20 individuals in 1890s\n• Recovered to 30,000+ today\n• But extremely low genetic diversity\n• All descended from ~20 survivors\n• Lost alleles cannot be recovered (except by mutation)\n\nOther examples:\n• Cheetahs (low genetic diversity from ancient bottleneck)\n• Florida panthers\n• Many endangered species\n\n2. FOUNDER EFFECT\nOccurs when few individuals establish new population\n\nMechanism:\n• Small group colonizes new area\n• Founders carry only subset of original genetic variation\n• New population not representative of source\n• Rare alleles may become common (or vice versa) by chance\n\nExample: Amish populations\n• Small number of founders\n• Certain genetic diseases more common\n• Ellis-van Creveld syndrome (dwarfism)\n• One founder carried rare allele\n• Now much more common in Amish than general population\n\nOther examples:\n• Galápagos finches (initial colonization)\n• Hawaiian Drosophila species\n• Island populations in general\n\nWhen is Drift Most Important?\n\n1. SMALL POPULATIONS\n   • Random sampling error larger in small samples\n   • One random death removes higher % of alleles\n   • Drift overwhelms selection\n   Rule: Drift important when N < 100 (effective population size)\n\n2. NEUTRAL ALLELES\n   • When alleles have equal fitness\n   • No selection to oppose drift\n   • Drift is only force acting\n   • Molecular clock based on neutral drift\n\n3. NEWLY FORMED POPULATIONS\n   • Colonization events\n   • After bottlenecks\n   • Limited genetic variation\n\n4. ISOLATED POPULATIONS\n   • No gene flow to counter drift\n   • Island populations\n   • Fragmented habitats\n\nConsequences of Drift:\n\n1. Loss of genetic variation\n   • Random alleles lost\n   • Even beneficial alleles can be lost\n   • Reduced evolutionary potential\n\n2. Fixation of alleles\n   • Random allele eventually reaches 100%\n   • Other alleles lost\n   • Time to fixation depends on population size\n\n3. Population differentiation\n   • Different populations drift in different directions\n   • Populations become genetically distinct\n   • Can contribute to speciation\n\n4. Can override selection\n   • In small populations, drift stronger than weak selection\n   • Slightly beneficial alleles can be lost\n   • Slightly harmful alleles can increase\n\nMathematical Relationship:\n• Strength of drift ∝ 1/N (inversely proportional to population size)\n• Large population: drift weak, selection dominates\n• Small population: drift strong, can overwhelm selection\n\nConservation Implications:\n• Small endangered populations lose genetic diversity\n• Inbreeding increases\n• Reduced ability to adapt\n• "Extinction vortex"\n• Need to maintain large population sizes\n\nKey Principle: Evolution is not just natural selection! Random processes (drift) also shape genetic variation, especially in small populations.',
          difficulty: 'HARD',
          order: 5,
          isPremium: true
        }
      ]
    });

    console.log('✅ Added 5 problems for Natural Selection and Evolution (already has flashcards)');
  }

  console.log('\n🎉 AP Biology Batch 2 complete! (6/10 topics done)\n');
}

main()
  .catch((e) => {
    console.error('❌ Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
