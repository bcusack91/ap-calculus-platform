#!/usr/bin/env python3
"""
Rewrite the remaining Biology interactive lesson files with high-quality, non-template
content using a consistent 7-section architecture.

Output:
  src/data/interactive-lessons/{filePrefix}-part{1..7}.ts
Total files:
  18 topics x 7 parts = 126 files
"""

from __future__ import annotations

import hashlib
import os
import random
import textwrap
from typing import Dict, List, Sequence, Tuple

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT_DIR, "src", "data", "interactive-lessons")

Concept = Tuple[str, str]


TOPICS: List[Dict[str, object]] = [
    {
        "slug": "biotechnology",
        "exportPrefix": "bioBiotech",
        "filePrefix": "bio-biotechnology",
        "title": "Biotechnology",
        "partTitles": [
            "Restriction Enzymes",
            "Gel Electrophoresis",
            "PCR",
            "Gene Cloning",
            "CRISPR & Gene Editing",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "a plasmid-based insulin production workflow",
            "forensic DNA profiling from short tandem repeats",
            "PCR amplification of a pathogen marker",
            "bacterial transformation with a recombinant plasmid",
            "CRISPR correction of a disease-associated allele",
            "interpreting mixed gel and sequencing readouts",
            "integrating biotech methods in AP free-response prompts",
        ],
        "concepts": [
            ("restriction enzyme", "cuts DNA at a specific recognition sequence"),
            ("DNA ligase", "joins DNA fragments by sealing phosphodiester bonds"),
            ("gel electrophoresis", "separates DNA fragments by size through a matrix"),
            ("PCR", "amplifies a target DNA region through thermal cycling"),
            ("plasmid vector", "carries foreign DNA into host cells for replication"),
            ("transformation", "uptake of external DNA by a bacterial cell"),
            ("CRISPR-Cas9", "uses guide RNA to direct sequence-specific DNA cutting"),
            ("gRNA", "base-pairs with target DNA to position Cas9"),
            ("DNA fingerprint", "banding profile used for identity comparison"),
        ],
        "misconceptions": [
            "A brighter gel band does not always mean a larger fragment; it often indicates more DNA mass.",
            "PCR does not start from nothing; it requires an initial template.",
            "CRISPR targeting is specific but can still have off-target effects.",
            "A plasmid alone does not guarantee expression without proper regulatory elements.",
        ],
    },
    {
        "slug": "cell-compartmentalization",
        "exportPrefix": "bioCellCompartment",
        "filePrefix": "bio-cell-compartmentalization",
        "title": "Cell Compartmentalization",
        "partTitles": [
            "Compartmentalization Overview",
            "Organelle Functions",
            "Membrane Surfaces",
            "Intracellular Transport",
            "Endosymbiotic Theory",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "protein sorting in a eukaryotic secretory cell",
            "specialized organelles in hepatocytes",
            "membrane microenvironments with distinct pH",
            "vesicle trafficking between ER and Golgi",
            "evidence for organelle evolutionary origin",
            "organelle dysfunction case studies",
            "cross-unit synthesis on compartment logic",
        ],
        "concepts": [
            ("compartmentalization", "separates cellular processes into distinct membrane-bound regions"),
            ("lysosome", "contains hydrolytic enzymes for intracellular digestion"),
            ("Golgi apparatus", "modifies, sorts, and packages proteins and lipids"),
            ("ER lumen", "internal ER space where folding and processing occur"),
            ("vesicle budding", "pinches off a membrane packet for cargo transport"),
            ("signal peptide", "short amino acid sequence directing protein destination"),
            ("proton gradient", "difference in proton concentration across a membrane"),
            ("endosymbiosis", "origin model where mitochondria and chloroplasts derive from bacteria"),
            ("organelle targeting", "delivery of molecules to correct intracellular compartment"),
        ],
        "misconceptions": [
            "Organelles are dynamic and interactive, not isolated static containers.",
            "Not every protein enters the secretory pathway; destination depends on targeting signals.",
            "Compartmentalization improves efficiency by reducing interference, not by making diffusion faster everywhere.",
            "Endosymbiosis is supported by multiple lines of evidence, not just one observation.",
        ],
    },
    {
        "slug": "cell-cycle-mitosis",
        "exportPrefix": "bioCellCycle",
        "filePrefix": "bio-cell-cycle-mitosis",
        "title": "Cell Cycle and Mitosis",
        "partTitles": [
            "Cell Cycle Phases",
            "Interphase",
            "Mitosis",
            "Cytokinesis",
            "Cell Cycle Regulation",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "epithelial tissue renewal in the small intestine",
            "DNA replication checkpoints in S phase",
            "chromosome movement during anaphase",
            "cytoplasmic division in animal versus plant cells",
            "tumor-suppressor failure in a cell lineage",
            "microscopy-based phase identification",
            "exam scenarios integrating cell-cycle control",
        ],
        "concepts": [
            ("G1 phase", "cell growth and biosynthesis before DNA replication"),
            ("S phase", "DNA is replicated to form sister chromatids"),
            ("G2 phase", "cell prepares for mitosis and verifies replication"),
            ("prophase", "chromosomes condense and spindle begins forming"),
            ("metaphase", "chromosomes align at the metaphase plate"),
            ("anaphase", "sister chromatids separate toward opposite poles"),
            ("cytokinesis", "division of cytoplasm to produce two daughter cells"),
            ("checkpoint", "control step that validates readiness before progression"),
            ("cyclin-CDK", "regulatory complex that drives cell-cycle transitions"),
        ],
        "misconceptions": [
            "Interphase is an active preparation period, not a resting pause.",
            "Mitosis and cytokinesis are related but distinct events.",
            "Chromosome number remains stable through mitosis under normal conditions.",
            "Checkpoint failure can lead to genomic instability long before visible tumors form.",
        ],
    },
    {
        "slug": "cell-structure-organelles",
        "exportPrefix": "bioCellStructure",
        "filePrefix": "bio-cell-structure-organelles",
        "title": "Cell Structure and Organelles",
        "partTitles": [
            "Cell Theory",
            "Prokaryotes vs Eukaryotes",
            "Membrane-Bound Organelles",
            "Endomembrane System",
            "Energy Organelles",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "microscope identification of unknown cells",
            "comparing bacterial and animal cell architecture",
            "organelle specialization in secretory tissues",
            "protein trafficking from rough ER to membrane",
            "ATP production in high-demand muscle cells",
            "interpreting cell diagrams in AP prompts",
            "cross-topic cell organization synthesis",
        ],
        "concepts": [
            ("plasma membrane", "selective barrier controlling exchange with the environment"),
            ("nucleus", "stores DNA and regulates gene expression"),
            ("ribosome", "translates mRNA into polypeptide chains"),
            ("rough ER", "synthesizes and folds proteins for export or membranes"),
            ("smooth ER", "synthesizes lipids and supports detoxification"),
            ("Golgi", "modifies and sorts cargo from the ER"),
            ("mitochondrion", "site of aerobic ATP production"),
            ("chloroplast", "site of photosynthesis in plants and algae"),
            ("cytoskeleton", "protein network for structure, transport, and movement"),
        ],
        "misconceptions": [
            "All cells share core features, but not all cells contain every organelle type.",
            "Ribosomes are not membrane-bound, yet they are essential organelles.",
            "Mitochondria are not only in animal cells; many eukaryotes have them.",
            "Cell structure should be interpreted with function, not memorized as a static list.",
        ],
    },
    {
        "slug": "cellular-respiration",
        "exportPrefix": "bioCellRespiration",
        "filePrefix": "bio-cellular-respiration",
        "title": "Cellular Respiration",
        "partTitles": [
            "Overview of Cell Respiration",
            "Glycolysis",
            "Pyruvate Oxidation",
            "Citric Acid Cycle",
            "Oxidative Phosphorylation",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "ATP demand during sprinting and recovery",
            "substrate-level phosphorylation in glycolysis",
            "mitochondrial entry of pyruvate-derived carbons",
            "electron carrier production in the matrix",
            "proton motive force and ATP synthase coupling",
            "energy accounting with pathway data",
            "integrated AP free-response metabolism analysis",
        ],
        "concepts": [
            ("glycolysis", "splits glucose into pyruvate while producing ATP and NADH"),
            ("pyruvate oxidation", "converts pyruvate to acetyl-CoA and releases CO2"),
            ("citric acid cycle", "oxidizes acetyl groups and generates NADH/FADH2"),
            ("electron transport chain", "transfers electrons to oxygen through membrane complexes"),
            ("chemiosmosis", "uses proton gradient energy to drive ATP synthesis"),
            ("ATP synthase", "enzyme complex that phosphorylates ADP using proton flow"),
            ("NADH", "high-energy electron carrier delivering reducing power"),
            ("FADH2", "electron carrier feeding electrons at a lower-energy entry point"),
            ("substrate-level phosphorylation", "direct ATP formation from a phosphorylated intermediate"),
        ],
        "misconceptions": [
            "Most ATP in aerobic respiration is generated during oxidative phosphorylation, not glycolysis.",
            "Oxygen is the terminal electron acceptor, not a direct reactant in every step.",
            "NADH and FADH2 are not ATP themselves; they transfer electron energy.",
            "Pathway location matters for interpretation of transport and regulation questions.",
        ],
    },
    {
        "slug": "dna-replication",
        "exportPrefix": "bioDnaReplication",
        "filePrefix": "bio-dna-replication",
        "title": "DNA Replication",
        "partTitles": [
            "DNA Structure",
            "Semiconservative Replication",
            "Enzymes of Replication",
            "Leading vs Lagging Strand",
            "Proofreading & Repair",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "replication fork progression in rapidly dividing cells",
            "experimental evidence supporting semiconservative models",
            "enzyme coordination at a moving fork",
            "Okazaki fragment synthesis and ligation",
            "mismatch correction after polymerase errors",
            "mutation-rate interpretation from sequence data",
            "exam synthesis across replication fidelity topics",
        ],
        "concepts": [
            ("semiconservative replication", "each daughter DNA molecule retains one parental strand"),
            ("helicase", "unwinds the DNA double helix at the replication fork"),
            ("primase", "synthesizes short RNA primers for DNA polymerase"),
            ("DNA polymerase", "extends DNA strands in the 5' to 3' direction"),
            ("leading strand", "synthesized continuously toward the replication fork"),
            ("lagging strand", "synthesized discontinuously as Okazaki fragments"),
            ("DNA ligase", "joins adjacent DNA fragments after primer replacement"),
            ("proofreading", "polymerase correction of misincorporated nucleotides"),
            ("mismatch repair", "post-replication pathway correcting base-pair errors"),
        ],
        "misconceptions": [
            "Replication is bidirectional from origins, not one-direction copying of entire chromosomes.",
            "Leading and lagging refer to synthesis pattern, not strand importance.",
            "Proofreading reduces errors but does not eliminate all mutations.",
            "Primers are required because DNA polymerase cannot start de novo.",
        ],
    },
    {
        "slug": "ecology-ecosystems",
        "exportPrefix": "bioEcology",
        "filePrefix": "bio-ecology-ecosystems",
        "title": "Ecology and Ecosystems",
        "partTitles": [
            "Ecosystem Components",
            "Energy Flow",
            "Biogeochemical Cycles",
            "Community Interactions",
            "Ecological Succession",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "wetland food web structure and productivity",
            "energy transfer through trophic levels",
            "carbon and nitrogen movement across reservoirs",
            "species interactions in a forest community",
            "post-fire succession in a temperate biome",
            "ecosystem graph interpretation with disturbance data",
            "full AP ecology synthesis scenarios",
        ],
        "concepts": [
            ("biotic factor", "living component that influences ecosystem dynamics"),
            ("abiotic factor", "nonliving environmental variable such as light or pH"),
            ("trophic level", "position in feeding hierarchy based on energy source"),
            ("primary productivity", "rate at which autotrophs convert energy into biomass"),
            ("decomposer", "organism that recycles nutrients from organic matter"),
            ("mutualism", "interaction where both species gain fitness benefits"),
            ("competition", "interaction where species reduce each other's resource access"),
            ("succession", "directional change in community composition over time"),
            ("keystone species", "species with disproportionately large community impact"),
        ],
        "misconceptions": [
            "Energy flows one way through ecosystems; nutrients cycle repeatedly.",
            "A larger population size does not always mean greater ecological importance.",
            "Succession does not imply a fixed endpoint in every environment.",
            "Species interactions can shift with context, season, and disturbance.",
        ],
    },
    {
        "slug": "energy-flow-nutrient-cycling",
        "exportPrefix": "bioEnergyFlow",
        "filePrefix": "bio-energy-flow-nutrient-cycling",
        "title": "Energy Flow and Nutrient Cycling",
        "partTitles": [
            "Trophic Levels",
            "Food Webs",
            "Ecological Pyramids",
            "Carbon Cycle",
            "Nitrogen Cycle",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "lake ecosystem trophic transfer",
            "food-web stability after species removal",
            "pyramid efficiency and biomass loss",
            "carbon flux under land-use change",
            "nitrogen limitation in agricultural runoff",
            "multi-variable ecosystem datasets",
            "exam synthesis integrating cycles and flow",
        ],
        "concepts": [
            ("producer", "organism that captures external energy to make organic molecules"),
            ("consumer", "organism obtaining energy by feeding on other organisms"),
            ("energy transfer efficiency", "fraction of energy passed to the next trophic level"),
            ("food web", "network of interconnected feeding relationships"),
            ("biomass pyramid", "representation of total mass at successive trophic levels"),
            ("carbon fixation", "incorporation of inorganic carbon into organic molecules"),
            ("cellular respiration", "oxidation of organic molecules releasing usable energy"),
            ("nitrification", "microbial conversion of ammonium to nitrite and nitrate"),
            ("denitrification", "microbial reduction of nitrate to gaseous nitrogen forms"),
        ],
        "misconceptions": [
            "Ten percent transfer is a rough heuristic, not a universal constant.",
            "Food chains are simplified slices of broader food webs.",
            "Carbon and nitrogen cycling include biological, geological, and atmospheric processes.",
            "Nutrient abundance can still coexist with low productivity when other factors limit growth.",
        ],
    },
    {
        "slug": "evidence-evolution",
        "exportPrefix": "bioEvidence",
        "filePrefix": "bio-evidence-evolution",
        "title": "Evidence for Evolution",
        "partTitles": [
            "Fossil Record",
            "Homologous Structures",
            "Molecular Evidence",
            "Biogeography",
            "Direct Observation",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "transitional fossils across sediment layers",
            "vertebrate limb comparisons across taxa",
            "DNA sequence divergence analysis",
            "island endemism and dispersal history",
            "antibiotic resistance monitoring",
            "multi-source evidence integration",
            "AP argumentation from evidence sets",
        ],
        "concepts": [
            ("fossil record", "chronological evidence of historical life forms in rock strata"),
            ("homologous structure", "shared anatomy due to common ancestry"),
            ("analogous structure", "similar function evolved independently in different lineages"),
            ("molecular homology", "sequence similarity indicating evolutionary relatedness"),
            ("phylogeny", "hypothesized pattern of evolutionary relationships"),
            ("biogeography", "geographic distribution of species across regions and time"),
            ("vestigial trait", "reduced structure inherited from an ancestral function"),
            ("selection pressure", "environmental factor that alters differential survival"),
            ("observed evolution", "documented heritable change in populations over generations"),
        ],
        "misconceptions": [
            "No single line of evidence proves every detail; strength comes from convergence.",
            "Analogous traits do not necessarily indicate close relatedness.",
            "Evolutionary change can be measured on contemporary timescales.",
            "Phylogenetic trees represent hypotheses supported by available data.",
        ],
    },
    {
        "slug": "feedback-mechanisms",
        "exportPrefix": "bioFeedback",
        "filePrefix": "bio-feedback-mechanisms",
        "title": "Feedback Mechanisms",
        "partTitles": [
            "Positive Feedback",
            "Negative Feedback",
            "Homeostasis",
            "Hormonal Regulation",
            "Thermoregulation",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "blood clotting amplification",
            "blood glucose stabilization loops",
            "maintenance of internal osmolarity",
            "endocrine signaling and receptor responses",
            "temperature regulation under heat stress",
            "feedback loop diagnosis from data tables",
            "AP free-response control-system synthesis",
        ],
        "concepts": [
            ("positive feedback", "response amplifies the initial stimulus"),
            ("negative feedback", "response counteracts change to restore set point"),
            ("homeostasis", "dynamic maintenance of internal stability"),
            ("set point", "target value around which a variable is regulated"),
            ("sensor", "component that detects a change in a regulated variable"),
            ("effector", "component that carries out corrective response"),
            ("insulin", "hormone lowering blood glucose by promoting uptake/storage"),
            ("glucagon", "hormone raising blood glucose by mobilizing reserves"),
            ("thermoregulation", "physiological control of body temperature"),
        ],
        "misconceptions": [
            "Positive feedback is not inherently harmful; context determines usefulness.",
            "Homeostasis permits fluctuation within ranges rather than fixed constants.",
            "Hormone concentration alone does not predict effect without receptor context.",
            "Feedback loops can be nested and interact across organ systems.",
        ],
    },
    {
        "slug": "fitness-environment",
        "exportPrefix": "bioFitness",
        "filePrefix": "bio-fitness-environment",
        "title": "Fitness and Environment",
        "partTitles": [
            "Natural Selection & Fitness",
            "Adaptation",
            "Phenotypic Plasticity",
            "Trade-offs",
            "Environmental Variation",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "trait survival differences in variable climates",
            "beak-shape adaptation under resource shifts",
            "plastic growth response to light availability",
            "reproductive investment versus survival trade-offs",
            "fitness landscapes across heterogeneous habitats",
            "dataset interpretation for trait-by-environment interactions",
            "AP synthesis of selection and ecological context",
        ],
        "concepts": [
            ("fitness", "relative reproductive success in a specific environment"),
            ("adaptation", "heritable trait improving performance under selection"),
            ("phenotypic plasticity", "ability of one genotype to produce different phenotypes"),
            ("trade-off", "benefit in one function paired with cost in another"),
            ("selection gradient", "direction and strength of selection on a trait"),
            ("stabilizing selection", "favors intermediate phenotypes"),
            ("directional selection", "favors one phenotypic extreme"),
            ("disruptive selection", "favors multiple extremes over intermediates"),
            ("local adaptation", "population evolves traits tuned to local conditions"),
        ],
        "misconceptions": [
            "Fitness is environment-specific, not an absolute ranking.",
            "Plastic responses are not the same as evolutionary change in allele frequencies.",
            "Adaptation does not mean perfection; constraints and trade-offs persist.",
            "Selection can act differently on the same trait in different habitats.",
        ],
    },
    {
        "slug": "gene-regulation",
        "exportPrefix": "bioGeneReg",
        "filePrefix": "bio-gene-regulation",
        "title": "Gene Regulation",
        "partTitles": [
            "Gene Regulation Overview",
            "Prokaryotic Regulation",
            "Eukaryotic Regulation",
            "Epigenetics",
            "RNA Interference",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "conditional expression in changing nutrient environments",
            "lac operon behavior with lactose availability",
            "enhancer-driven tissue-specific expression",
            "chromatin modifications and transcription access",
            "microRNA control of translation",
            "gene-expression dataset interpretation",
            "AP synthesis from multi-layer regulation prompts",
        ],
        "concepts": [
            ("transcription factor", "protein that binds DNA regulatory elements to alter transcription"),
            ("operon", "prokaryotic gene cluster transcribed as one mRNA"),
            ("repressor", "regulatory protein reducing transcription when bound"),
            ("enhancer", "DNA element increasing transcription from a distance"),
            ("epigenetic mark", "heritable chromatin modification not changing DNA sequence"),
            ("DNA methylation", "chemical tagging often associated with reduced transcription"),
            ("histone acetylation", "chromatin modification generally increasing accessibility"),
            ("miRNA", "small RNA that suppresses gene expression post-transcriptionally"),
            ("RNA interference", "gene-silencing pathway using small RNAs and complementary binding"),
        ],
        "misconceptions": [
            "Gene presence does not imply constant expression.",
            "Epigenetic regulation changes expression patterns without altering nucleotide sequence.",
            "Prokaryotic and eukaryotic regulation share principles but differ in architecture.",
            "Post-transcriptional control can strongly influence final protein output.",
        ],
    },
    {
        "slug": "membrane-transport",
        "exportPrefix": "bioMembraneTransport",
        "filePrefix": "bio-membrane-transport",
        "title": "Membrane Transport",
        "partTitles": [
            "Membrane Structure",
            "Passive Transport",
            "Osmosis",
            "Active Transport",
            "Bulk Transport",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "solute movement across phospholipid bilayers",
            "diffusion down concentration gradients",
            "water potential shifts in plant cells",
            "ATP-powered ion pumping",
            "endocytosis and exocytosis events",
            "transport graph analysis under perturbation",
            "integrated AP transport mechanism synthesis",
        ],
        "concepts": [
            ("selective permeability", "membrane property allowing some molecules to cross more easily"),
            ("diffusion", "net movement from higher to lower concentration"),
            ("facilitated diffusion", "passive transport through membrane proteins"),
            ("osmosis", "water movement across a semipermeable membrane"),
            ("aquaporin", "channel protein enabling rapid water transport"),
            ("active transport", "movement against gradient requiring energy input"),
            ("sodium-potassium pump", "ATPase exchanging Na+ and K+ across plasma membrane"),
            ("endocytosis", "uptake of extracellular material via vesicle formation"),
            ("exocytosis", "release of intracellular cargo via vesicle fusion"),
        ],
        "misconceptions": [
            "Transport direction depends on gradients and membrane proteins, not molecule intent.",
            "Facilitated diffusion remains passive even though proteins are involved.",
            "Osmosis describes water movement, not solute movement.",
            "Active transport is defined by movement against gradient, not merely ATP presence nearby.",
        ],
    },
    {
        "slug": "mendelian-genetics",
        "exportPrefix": "bioMendelian",
        "filePrefix": "bio-mendelian-genetics",
        "title": "Mendelian Genetics",
        "partTitles": [
            "Mendel's Laws",
            "Monohybrid Crosses",
            "Dihybrid Crosses",
            "Probability in Genetics",
            "Pedigree Analysis",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "pea trait inheritance under controlled crosses",
            "single-gene dominance interpretation",
            "independent assortment in two-gene crosses",
            "probability trees for offspring outcomes",
            "pedigree inference of inheritance mode",
            "cross-data troubleshooting in exam sets",
            "full AP genetics synthesis tasks",
        ],
        "concepts": [
            ("law of segregation", "allele pairs separate during gamete formation"),
            ("law of independent assortment", "different gene pairs assort independently when unlinked"),
            ("dominant allele", "allele expressed in heterozygous genotype"),
            ("recessive allele", "allele expressed when no dominant allele is present"),
            ("heterozygous", "genotype carrying two different alleles"),
            ("homozygous", "genotype carrying two identical alleles"),
            ("Punnett square", "grid method for predicting genotype combinations"),
            ("test cross", "cross with homozygous recessive to reveal unknown genotype"),
            ("pedigree", "family diagram tracking trait inheritance across generations"),
        ],
        "misconceptions": [
            "Dominant does not mean more common in populations.",
            "Independent assortment requires genes not tightly linked on the same chromosome.",
            "Phenotype ratios do not directly equal genotype ratios in all models.",
            "Pedigree interpretation must consider sex linkage and incomplete family data.",
        ],
    },
    {
        "slug": "natural-selection-adaptation",
        "exportPrefix": "bioNatSelection",
        "filePrefix": "bio-natural-selection-adaptation",
        "title": "Natural Selection and Adaptation",
        "partTitles": [
            "Darwin's Theory",
            "Types of Selection",
            "Sexual Selection",
            "Adaptation Mechanisms",
            "Hardy-Weinberg",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "population shifts after environmental change",
            "stabilizing and directional selection data",
            "mate-choice effects on trait frequencies",
            "adaptive trait mechanisms under stress",
            "Hardy-Weinberg model checks with allele frequencies",
            "multi-factor evolutionary data interpretation",
            "AP synthesis on mechanism and evidence",
        ],
        "concepts": [
            ("natural selection", "differential survival and reproduction tied to heritable variation"),
            ("selection pressure", "environmental factor influencing reproductive success"),
            ("adaptation", "trait increasing fitness in a specific environment"),
            ("sexual selection", "selection driven by mating success differences"),
            ("allele frequency", "proportion of a specific allele in a population"),
            ("Hardy-Weinberg equilibrium", "null model where allele frequencies remain constant"),
            ("genetic drift", "random allele frequency change strongest in small populations"),
            ("gene flow", "allele movement among populations through migration"),
            ("evolution", "change in population allele frequencies over generations"),
        ],
        "misconceptions": [
            "Individuals do not evolve genetically within a lifetime; populations evolve across generations.",
            "Selection acts on phenotypes, while evolution is tracked through allele frequencies.",
            "Hardy-Weinberg is a baseline comparison, not a claim that real populations are static.",
            "Adaptation and acclimation are different processes with different timescales.",
        ],
    },
    {
        "slug": "photosynthesis",
        "exportPrefix": "bioPhotosynthesis",
        "filePrefix": "bio-photosynthesis",
        "title": "Photosynthesis",
        "partTitles": [
            "Light Reactions",
            "Photosystems",
            "Calvin Cycle",
            "C3 vs C4 vs CAM",
            "Photosynthesis Factors",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "light-dependent ATP/NADPH production",
            "electron flow through photosystems II and I",
            "carbon fixation in stroma reactions",
            "photorespiration and alternate carbon pathways",
            "rate responses to light, CO2, and temperature",
            "photosynthesis experiment data analysis",
            "integrated AP plant metabolism synthesis",
        ],
        "concepts": [
            ("light reactions", "capture light energy to generate ATP and NADPH"),
            ("photosystem II", "initiates electron flow by oxidizing water"),
            ("photosystem I", "re-energizes electrons for NADPH formation"),
            ("Calvin cycle", "uses ATP and NADPH to fix carbon into organic molecules"),
            ("Rubisco", "enzyme catalyzing CO2 fixation with RuBP"),
            ("photorespiration", "oxygenation pathway that reduces photosynthetic efficiency"),
            ("C4 pathway", "carbon-concentrating mechanism reducing photorespiration"),
            ("CAM pathway", "temporal separation of CO2 capture and Calvin cycle"),
            ("stomata", "leaf pores regulating gas exchange and water loss"),
        ],
        "misconceptions": [
            "Plants respire continuously; photosynthesis does not replace respiration.",
            "Oxygen released in photosynthesis comes from water splitting, not CO2.",
            "C4 and CAM pathways are adaptations to environmental constraints, not universally superior modes.",
            "Rate-limiting factors can change depending on conditions.",
        ],
    },
    {
        "slug": "population-community-ecology",
        "exportPrefix": "bioPopulation",
        "filePrefix": "bio-population-community-ecology",
        "title": "Population and Community Ecology",
        "partTitles": [
            "Population Growth",
            "Carrying Capacity",
            "r vs K Selection",
            "Community Ecology",
            "Biodiversity",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "population trajectories under resource limits",
            "logistic growth and carrying capacity shifts",
            "life-history strategy contrasts",
            "community interaction networks",
            "biodiversity and resilience metrics",
            "population graph troubleshooting",
            "integrated AP population/community synthesis",
        ],
        "concepts": [
            ("exponential growth", "population increase at a constant per-capita rate"),
            ("logistic growth", "growth slowing as population approaches carrying capacity"),
            ("carrying capacity", "maximum sustainable population size in an environment"),
            ("density-dependent factor", "factor whose effect changes with population density"),
            ("r-selected strategy", "life-history pattern favoring high reproduction in unstable settings"),
            ("K-selected strategy", "life-history pattern favoring competitive efficiency near carrying capacity"),
            ("species richness", "count of different species in a community"),
            ("species evenness", "how evenly individuals are distributed among species"),
            ("community stability", "ability to resist or recover from disturbance"),
        ],
        "misconceptions": [
            "r and K strategies are endpoints of a continuum, not strict categories.",
            "High biodiversity does not guarantee immunity from disturbance.",
            "Carrying capacity can change with climate, resources, and species interactions.",
            "Population size alone does not capture demographic structure or long-term viability.",
        ],
    },
    {
        "slug": "speciation-macroevolution",
        "exportPrefix": "bioSpeciation",
        "filePrefix": "bio-speciation-macroevolution",
        "title": "Speciation and Macroevolution",
        "partTitles": [
            "Species Concepts",
            "Allopatric Speciation",
            "Sympatric Speciation",
            "Reproductive Isolation",
            "Macroevolution Patterns",
            "Problem-Solving Workshop",
            "AP Review",
        ],
        "contexts": [
            "species delimitation in closely related populations",
            "geographic barrier formation and divergence",
            "polyploidy-driven divergence in plants",
            "prezygotic and postzygotic barrier analysis",
            "large-scale patterns in fossil and phylogenetic records",
            "speciation case-study evaluation",
            "full AP synthesis across micro to macro patterns",
        ],
        "concepts": [
            ("biological species concept", "species defined by reproductive compatibility"),
            ("allopatric speciation", "speciation following geographic isolation"),
            ("sympatric speciation", "speciation without geographic separation"),
            ("prezygotic barrier", "reproductive isolation mechanism before fertilization"),
            ("postzygotic barrier", "isolation mechanism reducing hybrid viability or fertility"),
            ("polyploidy", "genome duplication that can create instant reproductive isolation"),
            ("adaptive radiation", "rapid diversification from a common ancestor into niches"),
            ("macroevolution", "large-scale evolutionary patterns above the species level"),
            ("reproductive isolation", "restriction of gene flow between populations"),
        ],
        "misconceptions": [
            "Speciation can occur with or without physical barriers depending on mechanism.",
            "Macroevolutionary patterns emerge from accumulated microevolutionary processes plus lineage sorting.",
            "Hybridization does not always erase species boundaries; outcomes depend on fitness and gene flow.",
            "Species concepts are tools with context-dependent strengths and limits.",
        ],
    },
]


def rotate(items: Sequence[Concept], offset: int) -> List[Concept]:
    offset = offset % len(items)
    return list(items[offset:] + items[:offset])


def stable_shuffle(options: Sequence[str], seed_key: str) -> List[str]:
    seed = int(hashlib.sha256(seed_key.encode("utf-8")).hexdigest()[:16], 16)
    rng = random.Random(seed)
    output = list(options)
    rng.shuffle(output)
    return output


def q(value: str) -> str:
    return value.replace("\\", "\\\\").replace("'", "\\'")


def escape_template(value: str) -> str:
    return value.replace("`", "\\`").replace("${", "\\${")


def format_content_block(text: str, indent: int = 6) -> str:
    cleaned = textwrap.dedent(text).strip("\n")
    escaped = escape_template(cleaned)
    prefix = " " * indent
    return "\n".join(f"{prefix}{line}" if line else prefix for line in escaped.splitlines())


def render_text_section(section_id: str, content: str) -> str:
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'text' as const,\n"
        "      content: `\n"
        f"{format_content_block(content, indent=6)}\n"
        "      `\n"
        "    }"
    )


def render_mcq_section(section_id: str, content: str, questions: List[Dict[str, object]]) -> str:
    question_chunks = []
    for question in questions:
        options_lines = ",\n".join(f"              '{q(opt)}'" for opt in question["options"])
        question_chunks.append(
            "          {\n"
            f"            question: '{q(question['question'])}',\n"
            "            options: [\n"
            f"{options_lines}\n"
            "            ],\n"
            f"            correctAnswer: {question['correctAnswer']},\n"
            f"            explanation: '{q(question['explanation'])}'\n"
            "          }"
        )

    questions_block = ",\n".join(question_chunks)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'multiple-choice' as const,\n"
        "      content: `\n"
        f"{format_content_block(content, indent=6)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        questions: [\n"
        f"{questions_block}\n"
        "        ]\n"
        "      }\n"
        "    }"
    )


def render_input_boxes_section(
    section_id: str,
    content: str,
    answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    answers_block = ", ".join(f"'{q(ans)}'" for ans in answers)
    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'input-boxes' as const,\n"
        "      content: `\n"
        f"{format_content_block(content, indent=6)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        boxes: 3,\n"
        f"        correctAnswers: [{answers_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def render_dropdown_section(
    section_id: str,
    content: str,
    dropdowns: List[Dict[str, object]],
    correct_answers: List[str],
    hint1: str,
    hint2: str,
    hint3: str,
    explanation: str,
) -> str:
    dropdown_chunks = []
    for dd in dropdowns:
        option_lines = ", ".join(f"'{q(opt)}'" for opt in dd["options"])
        dropdown_chunks.append(
            "          {\n"
            f"            label: '{q(dd['label'])}',\n"
            f"            options: [{option_lines}]\n"
            "          }"
        )

    dropdown_block = ",\n".join(dropdown_chunks)
    answers_block = ", ".join(f"'{q(ans)}'" for ans in correct_answers)

    return (
        "    {\n"
        f"      id: '{q(section_id)}',\n"
        "      type: 'dropdown-select' as const,\n"
        "      content: `\n"
        f"{format_content_block(content, indent=6)}\n"
        "      `,\n"
        "      exercise: {\n"
        "        dropdowns: [\n"
        f"{dropdown_block}\n"
        "        ],\n"
        f"        correctAnswers: [{answers_block}],\n"
        f"        hint1: '{q(hint1)}',\n"
        f"        hint2: '{q(hint2)}',\n"
        f"        hint3: '{q(hint3)}',\n"
        f"        explanation: '{q(explanation)}'\n"
        "      }\n"
        "    }"
    )


def build_definition_question(
    term: str,
    definition: str,
    distractor_definitions: List[str],
    seed_key: str,
    stem: str,
) -> Dict[str, object]:
    options = stable_shuffle([definition] + distractor_definitions[:3], seed_key)
    correct_index = options.index(definition)
    return {
        "question": stem,
        "options": options,
        "correctAnswer": correct_index,
        "explanation": f"{term} is best matched with: {definition}.",
    }


def build_application_question(
    correct_term: str,
    correct_def: str,
    option_terms: List[str],
    scenario_context: str,
    seed_key: str,
) -> Dict[str, object]:
    options = stable_shuffle(option_terms[:4], seed_key)
    correct_index = options.index(correct_term)
    return {
        "question": (
            f"In {scenario_context}, the observed pattern is: {correct_def}. "
            "What term should anchor the explanation?"
        ),
        "options": options,
        "correctAnswer": correct_index,
        "explanation": (
            f"Use {correct_term} because it directly maps to the described biological pattern: {correct_def}."
        ),
    }


def build_part_content(topic: Dict[str, object], part_num: int) -> str:
    concepts = rotate(topic["concepts"], part_num - 1)  # type: ignore[arg-type]
    part_title = topic["partTitles"][part_num - 1]  # type: ignore[index]
    title = topic["title"]  # type: ignore[assignment]
    context = topic["contexts"][part_num - 1]  # type: ignore[index]
    misconceptions = topic["misconceptions"]  # type: ignore[assignment]

    term_a, def_a = concepts[0]
    term_b, def_b = concepts[1]
    term_c, def_c = concepts[2]
    term_d, def_d = concepts[3]
    term_e, def_e = concepts[4]
    term_f, def_f = concepts[5]

    intro_content = f"""
## {title}: {part_title}

**Part {part_num} of 7**

In this lesson, you will connect mechanism-level biology to exam-ready reasoning through {context}.

### Worked biological example
A student team investigates {context}. Their first interpretation step is to identify how **{term_a}** and **{term_b}** work together in the same pathway.

- They classify the primary signal using **{term_a}**: {def_a}.
- They trace the downstream response using **{term_b}**: {def_b}.
- They then compare outcomes with **{term_c}** and **{term_d}** to separate mechanism from correlation.

### Key terms for this part
- **{term_a}**
- **{term_b}**
- **{term_c}**
- **{term_d}**
"""

    mcq_early = [
        build_definition_question(
            term_a,
            def_a,
            [def_b, def_c, def_d],
            f"{topic['slug']}-p{part_num}-early-1",
            f"For {part_title}, what best describes {term_a}?",
        ),
        build_definition_question(
            term_b,
            def_b,
            [def_a, def_c, def_e],
            f"{topic['slug']}-p{part_num}-early-2",
            f"In this part's context, what is the strongest definition of {term_b}?",
        ),
    ]

    deep_dive_content = f"""
### Deep-Dive Map: {part_title}

Use this diagram-style summary to track causation and evidence.

#### Flow logic
- **Signal/Input** → {term_a}
- **Immediate processing** → {term_b}
- **System-level consequence** → {term_c}
- **Measured readout** → {term_d}

#### Mechanism table
| Component | Biological role | Typical evidence pattern |
|---|---|---|
| {term_a} | {def_a} | Early shift in the primary variable |
| {term_b} | {def_b} | Mid-pathway change in process rate |
| {term_c} | {def_c} | Downstream phenotype trend |
| {term_d} | {def_d} | Quantifiable endpoint in data summary |

#### Reasoning checkpoints
1. Name the mechanism before describing the trend line.
2. Separate proximate mechanism from ecological or historical context.
3. Verify that each claim is tied to a measurable biological readout.
"""

    input_content = f"""
**Input Practice — concrete vocabulary retrieval**

Fill in each blank with the exact biological term.

1) Term for this definition: **{def_a}**
2) Term for this definition: **{def_b}**
3) Term for this definition: **{def_c}**
"""

    answers = [term_a, term_b, term_c]
    hint1 = f"Start with the first item: it is the mechanism term used when a process is described as '{def_a}'."
    hint2 = f"Second blank points to {term_b}; think about the role '{def_b}'."
    hint3 = f"Third blank is {term_c}; connect it to '{def_c}'."
    input_explanation = (
        f"Correct set: {term_a}, {term_b}, {term_c}. These three terms define the core mechanism chain for {part_title}."
    )

    dropdown_defs = [def_a, def_b, def_c, def_d, def_e, def_f]
    dd1_options = stable_shuffle(dropdown_defs[:4], f"{topic['slug']}-p{part_num}-dd1")
    dd2_options = stable_shuffle([def_b, def_c, def_d, def_e], f"{topic['slug']}-p{part_num}-dd2")
    dd3_options = stable_shuffle([def_c, def_d, def_e, def_f], f"{topic['slug']}-p{part_num}-dd3")

    dropdowns = [
        {"label": f"{term_a}", "options": dd1_options},
        {"label": f"{term_b}", "options": dd2_options},
        {"label": f"{term_c}", "options": dd3_options},
    ]
    dropdown_correct = [def_a, def_b, def_c]

    dropdown_explanation = (
        f"{term_a}, {term_b}, and {term_c} should map to their exact mechanistic definitions. "
        "When options look similar, anchor your choice to process direction and biological scale."
    )

    strategy_content = f"""
### ACT/AP strategy and misconception repair

On ACT/AP style prompts, score gains come from linking vocabulary to evidence, not from isolated memorization.

#### Strategy sequence
1. **Name the mechanism first**: identify whether the item is asking for process, structure, regulation, or population effect.
2. **Use a causation sentence**: "Because {term_a} {def_a}, we expect ...".
3. **Audit units and scale**: molecular claims, cellular claims, and ecosystem claims should not be mixed.

#### Common misconceptions to avoid
- {misconceptions[(part_num - 1) % len(misconceptions)]}
- {misconceptions[(part_num) % len(misconceptions)]}
- {misconceptions[(part_num + 1) % len(misconceptions)]}

#### Exam execution tip
When two answer choices sound plausible, prefer the one that includes a direct mechanism and a measurable biological consequence.
"""

    final_option_terms = [term_a, term_b, term_c, term_d, term_e, term_f]
    final_mcq = [
        build_application_question(
            term_d,
            def_d,
            final_option_terms,
            context,
            f"{topic['slug']}-p{part_num}-final-1",
        ),
        build_application_question(
            term_e,
            def_e,
            final_option_terms[::-1],
            f"an AP-style free-response about {part_title.lower()}",
            f"{topic['slug']}-p{part_num}-final-2",
        ),
    ]

    file_prefix = topic["filePrefix"]  # type: ignore[assignment]
    section_ids = {
        "s1": f"{file_prefix}-p{part_num}-s1-intro",
        "s2": f"{file_prefix}-p{part_num}-s2-mcq-core",
        "s3": f"{file_prefix}-p{part_num}-s3-deep-dive",
        "s4": f"{file_prefix}-p{part_num}-s4-input",
        "s5": f"{file_prefix}-p{part_num}-s5-dropdown",
        "s6": f"{file_prefix}-p{part_num}-s6-strategy",
        "s7": f"{file_prefix}-p{part_num}-s7-mcq-final",
    }

    sections = [
        render_text_section(section_ids["s1"], intro_content),
        render_mcq_section(section_ids["s2"], "**Checkpoint MCQ (2 questions)**", mcq_early),
        render_text_section(section_ids["s3"], deep_dive_content),
        render_input_boxes_section(
            section_ids["s4"],
            input_content,
            answers,
            hint1,
            hint2,
            hint3,
            input_explanation,
        ),
        render_dropdown_section(
            section_ids["s5"],
            "**Dropdown matching (3 prompts)**",
            dropdowns,
            dropdown_correct,
            "Match each term to the definition that captures mechanism, not just keywords.",
            "If two definitions feel close, choose the one with the exact process direction.",
            "Read each label out loud, then pick the option that completes a causal sentence.",
            dropdown_explanation,
        ),
        render_text_section(section_ids["s6"], strategy_content),
        render_mcq_section(section_ids["s7"], "**Final application MCQ (2 questions)**", final_mcq),
    ]

    export_prefix = topic["exportPrefix"]  # type: ignore[assignment]
    slug = topic["slug"]  # type: ignore[assignment]

    sections_joined = ",\n".join(sections)

    return (
        f"export const {export_prefix}Part{part_num}Data = {{\n"
        f"  topicSlug: '{slug}',\n"
        "  sections: [\n"
        f"{sections_joined}\n"
        "  ]\n"
        "};\n"
    )


def write_topic_part(topic: Dict[str, object], part_num: int) -> Tuple[str, int]:
    file_prefix = topic["filePrefix"]  # type: ignore[assignment]
    filename = f"{file_prefix}-part{part_num}.ts"
    path = os.path.join(OUT_DIR, filename)
    content = build_part_content(topic, part_num)

    with open(path, "w", encoding="utf-8") as f:
        f.write(content)

    line_count = len(content.splitlines())
    return path, line_count


def main() -> None:
    os.makedirs(OUT_DIR, exist_ok=True)

    total_written = 0
    line_total = 0

    for topic in TOPICS:
        slug = topic["slug"]
        print(f"\\nRewriting topic: {slug}")
        for part_num in range(1, 8):
            path, lines = write_topic_part(topic, part_num)
            total_written += 1
            line_total += lines
            print(f"  ✓ {os.path.basename(path)} ({lines} lines)")

    expected = len(TOPICS) * 7
    print("\\nSummary")
    print(f"  Topics processed: {len(TOPICS)}")
    print(f"  Files written: {total_written}")
    print(f"  Expected files: {expected}")
    print(f"  Average lines/file: {line_total / max(total_written, 1):.1f}")

    if total_written != expected:
        raise SystemExit(f"Mismatch: wrote {total_written}, expected {expected}")


if __name__ == "__main__":
    main()
