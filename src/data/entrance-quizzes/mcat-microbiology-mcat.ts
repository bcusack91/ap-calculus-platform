/**
 * Entrance Quiz — Microbiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Bacterial Structure
  {
    id: 'mmicro-ent-1a',
    question: 'Gram-positive bacteria stain purple with the Gram stain because they:',
    options: [
      'Have an outer membrane that traps the crystal violet-iodine complex.',
      'Have a thick peptidoglycan wall that holds the crystal violet-iodine complex.',
      'Lack peptidoglycan, so safranin binds the plasma membrane directly.',
      'Carry lipopolysaccharide that binds crystal violet permanently.'
    ],
    correctIndex: 1,
    explanation: 'The decolorization step is what separates the two groups. A gram-positive cell has a thick (~20-80 nm) peptidoglycan mesh that traps the crystal violet-iodine complex when ethanol is applied, so it stays purple. Gram-NEGATIVE cells are the ones with an outer membrane and LPS; ethanol dissolves that membrane and washes the dye out through their thin peptidoglycan layer, leaving them to take up the pink safranin counterstain.',
    partNumber: 1,
    partTitle: 'Bacterial Structure'
  },
  {
    id: 'mmicro-ent-1b',
    question: 'Which of the following structures is unique to bacteria and is the target of penicillin antibiotics?',
    options: [
      'The 70S ribosome',
      'The peptidoglycan cell wall',
      'The phospholipid plasma membrane',
      'The flagellum, built from flagellin'
    ],
    correctIndex: 1,
    explanation: 'Penicillins and the other beta-lactams acylate the transpeptidases (penicillin-binding proteins) that cross-link peptidoglycan strands, so the wall cannot be completed and the cell lyses. Human cells have no peptidoglycan at all, which is the source of the selective toxicity. The 70S ribosome is also uniquely bacterial, but it is the target of aminoglycosides, macrolides, and tetracyclines rather than penicillin.',
    partNumber: 1,
    partTitle: 'Bacterial Structure'
  },

  // Part 2: Bacterial Growth
  {
    id: 'mmicro-ent-2a',
    question: 'During which phase of bacterial growth does cell division occur at the maximum rate, with generation time constant and population doubling exponentially?',
    options: [
      'The lag phase',
      'The log phase',
      'The stationary phase',
      'The death phase'
    ],
    correctIndex: 1,
    explanation: 'In the log (exponential) phase nutrients are plentiful and waste has not yet accumulated, so each cell divides at its maximum rate and the generation time is constant. Lag phase is the pre-division period of enzyme and ribosome synthesis; stationary phase is the plateau where division equals death as resources run out. Cells are most antibiotic-susceptible in log phase, since wall-synthesis and replication inhibitors need actively growing cells.',
    partNumber: 2,
    partTitle: 'Bacterial Growth'
  },
  {
    id: 'mmicro-ent-2b',
    question: 'Horizontal gene transfer in bacteria can occur via conjugation, transformation, and transduction. Which mechanism requires a bacteriophage as a vector?',
    options: [
      'Conjugation',
      'Transformation',
      'Transduction',
      'Binary fission'
    ],
    correctIndex: 2,
    explanation: 'In transduction a bacteriophage mispackages host DNA and injects it into the next cell it infects; generalized transduction uses lytic phages and can move any bacterial gene, while specialized transduction uses a temperate phage and moves genes flanking its integration site. Conjugation needs a sex pilus and direct cell-to-cell contact, transformation takes up naked DNA from the environment, and binary fission is ordinary vertical reproduction.',
    partNumber: 2,
    partTitle: 'Bacterial Growth'
  },

  // Part 3: Viral Structure
  {
    id: 'mmicro-ent-3a',
    question: 'All viruses must contain which of the following?',
    options: [
      'A lipid envelope taken from the host membrane.',
      'Both DNA and RNA packaged in the same virion.',
      'A protein capsid surrounding a nucleic acid genome.',
      'Ribosomes for synthesizing their own proteins.'
    ],
    correctIndex: 2,
    explanation: 'The irreducible minimum for a virus is a genome — DNA or RNA, single- or double-stranded, but never both in one virion — packaged inside a protein capsid. An envelope is optional and marks only the enveloped families, which acquire it by budding through a host membrane. No virus carries ribosomes; every one of them borrows the host translation machinery, which is why viruses are obligate intracellular parasites.',
    partNumber: 3,
    partTitle: 'Viral Structure'
  },
  {
    id: 'mmicro-ent-3b',
    question: 'The antigenic shift responsible for influenza pandemics occurs when:',
    options: [
      'Point mutations gradually accumulate in hemagglutinin and neuraminidase.',
      'Two influenza A strains co-infect a cell and swap RNA segments.',
      'The virus alters its capsid proteins to escape T-cell recognition.',
      'The viral RNA integrates into the host chromosome and reactivates.'
    ],
    correctIndex: 1,
    explanation: 'Influenza A has a segmented genome of eight RNA pieces, so when two strains infect the same cell (classically an avian and a human strain in a pig) progeny virions can reassort those segments. The result is an abrupt new combination of HA and/or NA subtypes against which the population has no immunity — the making of a pandemic. Gradual point mutation is antigenic DRIFT, which drives ordinary seasonal variation.',
    partNumber: 3,
    partTitle: 'Viral Structure'
  },

  // Part 4: Viral Replication
  {
    id: 'mmicro-ent-4a',
    question: 'HIV, a retrovirus, uses reverse transcriptase to:',
    options: [
      'Transcribe host DNA into viral RNA for packaging into new virions.',
      'Copy its single-stranded RNA genome into double-stranded DNA.',
      'Replicate the RNA genome directly, with no DNA intermediate.',
      'Cleave Gag-Pol polyproteins so that new virions can mature.'
    ],
    correctIndex: 1,
    explanation: 'Reverse transcriptase runs the central dogma backwards: viral RNA becomes an RNA:DNA hybrid, RNase H degrades the RNA strand, and the second DNA strand is made, yielding dsDNA that integrase then splices into the host chromosome as a provirus for host RNA Pol II to transcribe. Polyprotein cleavage is the job of HIV protease, the target of a separate drug class, and the enzyme has no proofreading, which is why resistance arises so fast.',
    partNumber: 4,
    partTitle: 'Viral Replication'
  },
  {
    id: 'mmicro-ent-4b',
    question: 'Which statement best describes the lytic vs. lysogenic cycles of a bacteriophage?',
    options: [
      'The lytic cycle integrates phage DNA into the bacterial chromosome.',
      'The lysogenic cycle integrates a prophage; the lytic cycle bursts the cell.',
      'A lysogenic infection always becomes lytic within a single generation.',
      'In the lytic cycle the host survives and buds off new phages.'
    ],
    correctIndex: 1,
    explanation: 'In lysogeny the phage genome integrates as a prophage and is copied passively with the host chromosome, causing no immediate harm until an inducing stress activates it. The lytic cycle is the productive one: the phage commandeers host machinery, assembles roughly 100-200 progeny, and lyses the cell to release them. Lambda phage is the classic temperate phage able to do either; budding without killing the host is an animal-virus strategy, not a phage one.',
    partNumber: 4,
    partTitle: 'Viral Replication'
  },

  // Part 5: Eukaryotic Microbes
  {
    id: 'mmicro-ent-5a',
    question: 'Plasmodium falciparum, the causative agent of severe malaria, is an example of which type of eukaryotic microorganism?',
    options: [
      'A mold (filamentous fungus)',
      'A helminth (parasitic worm)',
      'A protozoan (apicomplexan)',
      'A prion (misfolded protein)'
    ],
    correctIndex: 2,
    explanation: 'Plasmodium is a single-celled apicomplexan protozoan, named for the apical complex of organelles it uses to invade host cells. Its life cycle is split between the Anopheles mosquito vector and the human host, where synchronized rupture of infected erythrocytes produces the classic periodic fevers. Note that a prion is not even a microorganism — it is a protein with no cells and no genome.',
    partNumber: 5,
    partTitle: 'Eukaryotic Microbes'
  },
  {
    id: 'mmicro-ent-5b',
    question: 'Fungi differ from bacteria in that fungi:',
    options: [
      'Are prokaryotes whose cell walls contain peptidoglycan.',
      'Are eukaryotes with chitin walls and ergosterol membranes.',
      'Have no nucleus and reproduce only by sexual means.',
      'Are obligate intracellular parasites, unable to grow outside a host.'
    ],
    correctIndex: 1,
    explanation: 'Fungi are true eukaryotes, with a nucleus and mitochondria, walls of chitin rather than peptidoglycan, and ergosterol where an animal membrane would carry cholesterol. That sterol difference is what azole and polyene antifungals exploit for selectivity. Fungi also reproduce both sexually and asexually and most are free-living saprophytes rather than obligate parasites.',
    partNumber: 5,
    partTitle: 'Eukaryotic Microbes'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mmicro-ent-6a',
    question: 'A patient with a bacterial infection is treated with rifamycin, which inhibits bacterial RNA polymerase. Why does rifamycin NOT affect human cells?',
    options: [
      'Human cells do not use an RNA polymerase for transcription.',
      'Human RNA polymerase has a structurally different subunit.',
      'Rifamycin is too large to cross the nuclear envelope.',
      'Human cells pump rifamycin out before it reaches the nucleus.'
    ],
    correctIndex: 1,
    explanation: 'Rifamycins bind a pocket on the beta subunit of BACTERIAL RNA polymerase and physically block the growing RNA chain. The eukaryotic enzymes (RNA Pol I, II, and III) are built from a different set of subunits that lack that binding pocket, so the drug simply has no target in human cells. This kind of structural divergence between homologous enzymes is the basis of selective toxicity throughout antimicrobial pharmacology.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mmicro-ent-6b',
    question: 'An epidemic of food poisoning is traced to a strain of Staphylococcus aureus that produces enterotoxin B. The enterotoxin is a preformed toxin in the food. Which characteristic of this illness distinguishes it from infection-based food poisoning?',
    options: [
      'It takes 2-3 days to appear while the bacteria colonize the gut.',
      'Antibiotics clear it rapidly by killing the toxin-producing bacteria.',
      'Symptoms appear within 1-6 hours, before any bacterial growth.',
      'It is produced by bacterial invasion of the intestinal mucosa.'
    ],
    correctIndex: 2,
    explanation: 'This is an intoxication rather than an infection: the toxin is already present in the food, so it acts on gut receptors and vagal afferents as soon as it is swallowed, producing vomiting and diarrhea in 1-6 hours with no incubation period for bacterial growth. Antibiotics cannot help, because the staphylococcal enterotoxins are heat-stable superantigens that survive both cooking and the death of the organism. Invasive infections such as Salmonella instead take 8-48 hours.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mmicro-ent-7a',
    question: 'Prions are infectious agents responsible for transmissible spongiform encephalopathies (TSEs) such as Creutzfeldt-Jakob disease (CJD). What makes prions unique compared to other infectious agents?',
    options: [
      'They are very small viruses with a single-strand RNA genome.',
      'They are misfolded proteins that carry no nucleic acid at all.',
      'They are bacteria able to survive only inside neurons.',
      'They are fungal toxins that contaminate stored grain.'
    ],
    correctIndex: 1,
    explanation: 'A prion is the normal cellular protein PrPC refolded into the beta-sheet-rich, protease-resistant PrPSc conformation, which then templates the same misfolding onto further copies of PrPC. Propagation therefore needs no DNA or RNA — an apparent exception to the central dogma — and explains why prions resist autoclaving, formalin, and the radiation doses that destroy conventional pathogens.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mmicro-ent-7b',
    question: 'mRNA vaccines (like those for COVID-19) work by:',
    options: [
      'Integrating viral DNA into the genome for permanent antibody output.',
      'Delivering mRNA that host cells translate into a viral antigen.',
      'Injecting a live attenuated virus that causes a mild infection.',
      'Supplying pre-formed neutralizing antibodies that last for life.'
    ],
    correctIndex: 1,
    explanation: 'A lipid nanoparticle carries mRNA encoding the SARS-CoV-2 spike protein into the cytoplasm, where the cell\'s own ribosomes translate it; the spike protein is then displayed to the immune system, generating B-cell antibody and T-cell responses. The mRNA never enters the nucleus and is degraded within days, so nothing is integrated. Nor is any live virus given, and the durable protection comes from the recipient\'s own memory cells rather than from transferred antibody.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Bacterial Structure' },
    { partNumber: 2, partTitle: 'Bacterial Growth' },
    { partNumber: 3, partTitle: 'Viral Structure' },
    { partNumber: 4, partTitle: 'Viral Replication' },
    { partNumber: 5, partTitle: 'Eukaryotic Microbes' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'Review & Applications' }
  ]
}
