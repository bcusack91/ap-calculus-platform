/**
 * Entrance Quiz — Microbiology (MCAT)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Bacterial Structure
  {
    id: 'mmicro-ent-1a',
    question: 'Gram-positive bacteria stain purple with the Gram stain because they:',
    options: [
      'Possess an outer membrane that retains the crystal violet-iodine complex.',
      'Have a thick peptidoglycan cell wall that retains the crystal violet-iodine complex after decolorization.',
      'Lack peptidoglycan, allowing safranin to bind directly to the cell membrane.',
      'Contain lipopolysaccharide (LPS) that binds crystal violet permanently.'
    ],
    correctIndex: 1,
    explanation: 'Gram-positive bacteria have a thick peptidoglycan layer (~20–80 nm). Crystal violet-iodine complexes become trapped in this mesh after ethanol decolorization, retaining purple color. Gram-negative bacteria have a thin peptidoglycan plus an outer membrane containing LPS; ethanol dissolves the outer membrane, allowing dye to escape, and safranin counterstains them pink.',
    partNumber: 1,
    partTitle: 'Bacterial Structure'
  },
  {
    id: 'mmicro-ent-1b',
    question: 'Which of the following structures is unique to bacteria and is the target of penicillin antibiotics?',
    options: [
      'Ribosome (70S)',
      'Peptidoglycan cell wall',
      'Plasma membrane phospholipid bilayer',
      'Flagella (composed of flagellin)'
    ],
    correctIndex: 1,
    explanation: 'Penicillins (and other β-lactams) inhibit transpeptidases (penicillin-binding proteins, PBPs) that cross-link peptidoglycan strands. Since eukaryotic cells lack peptidoglycan, penicillin has selective toxicity for bacteria. 70S ribosomes are also uniquely bacterial but are targeted by different antibiotics.',
    partNumber: 1,
    partTitle: 'Bacterial Structure'
  },

  // Part 2: Bacterial Growth
  {
    id: 'mmicro-ent-2a',
    question: 'During which phase of bacterial growth does cell division occur at the maximum rate, with generation time constant and population doubling exponentially?',
    options: [
      'Lag phase',
      'Log (exponential) phase',
      'Stationary phase',
      'Death phase'
    ],
    correctIndex: 1,
    explanation: 'The log (exponential) phase is characterized by rapid, constant cell division. Nutrients are plentiful, waste is not yet limiting, and bacteria divide at maximum rate. This is when bacteria are most metabolically active and most sensitive to antibiotics targeting cell wall synthesis or replication.',
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
    explanation: 'Transduction: a bacteriophage accidentally packages bacterial DNA and injects it into a new host. Generalized transduction uses lytic phages (any bacterial DNA); specialized transduction uses lysogenic phages (genes near the phage integration site). Conjugation requires pili and direct cell contact; transformation uses naked DNA from the environment.',
    partNumber: 2,
    partTitle: 'Bacterial Growth'
  },

  // Part 3: Viral Structure
  {
    id: 'mmicro-ent-3a',
    question: 'All viruses must contain which of the following?',
    options: [
      'A lipid envelope derived from the host cell membrane.',
      'Both DNA and RNA as their genetic material.',
      'A protein capsid enclosing a nucleic acid genome (DNA or RNA, never both).',
      'Ribosomes for protein synthesis.'
    ],
    correctIndex: 2,
    explanation: 'The minimal viral components are a nucleic acid genome (either DNA or RNA, single or double-stranded, never both) and a protein capsid. Envelopes are present only in enveloped viruses. Viruses lack ribosomes and depend entirely on host cell machinery for protein synthesis.',
    partNumber: 3,
    partTitle: 'Viral Structure'
  },
  {
    id: 'mmicro-ent-3b',
    question: 'The antigenic shift responsible for influenza pandemics occurs when:',
    options: [
      'Gradual point mutations accumulate in hemagglutinin or neuraminidase over many replication cycles.',
      'Two different influenza A strains co-infect a host cell and exchange RNA segments, producing a novel reassortant virus.',
      'The influenza virus mutates its capsid proteins to evade T-cell recognition.',
      'Influenza virus integrates its RNA genome into the host chromosome and reactivates.'
    ],
    correctIndex: 1,
    explanation: 'Antigenic shift: influenza A\'s segmented RNA genome allows reassortment when two strains co-infect a cell (e.g., avian and human strains in pigs). A new combination of HA and/or NA subtypes emerges to which humans have no prior immunity—the basis of pandemic strains. Antigenic drift = gradual point mutations (seasonal flu variation).',
    partNumber: 3,
    partTitle: 'Viral Structure'
  },

  // Part 4: Viral Replication
  {
    id: 'mmicro-ent-4a',
    question: 'HIV, a retrovirus, uses reverse transcriptase to:',
    options: [
      'Convert host cell DNA into viral RNA for packaging into new virions.',
      'Synthesize double-stranded DNA from its single-stranded RNA genome, which is then integrated into the host chromosome.',
      'Replicate its RNA genome directly in the cytoplasm without a DNA intermediate.',
      'Cleave the host cell membrane to facilitate viral budding.'
    ],
    correctIndex: 1,
    explanation: 'HIV replication: viral RNA genome → (reverse transcriptase) → DNA:RNA hybrid → (RNase H degrades RNA) → dsDNA → (integrase) → integrated provirus in host chromosome. The host\'s RNA Pol II then transcribes the provirus. Reverse transcriptase is highly error-prone, generating mutations and drug resistance.',
    partNumber: 4,
    partTitle: 'Viral Replication'
  },
  {
    id: 'mmicro-ent-4b',
    question: 'Which statement best describes the lytic vs. lysogenic cycles of a bacteriophage?',
    options: [
      'In the lytic cycle, phage DNA integrates into the bacterial chromosome as a prophage and is replicated with host DNA.',
      'In the lysogenic cycle, phage DNA integrates as a prophage; in the lytic cycle, the phage hijacks host machinery, replicates, and lyses the cell.',
      'The lysogenic cycle always progresses to the lytic cycle within one generation.',
      'In the lytic cycle, the host cell survives and continuously releases new phages by budding.'
    ],
    correctIndex: 1,
    explanation: 'Lysogenic cycle: phage integrates as a prophage, replicating silently with the host. Lytic cycle (induced or direct): phage DNA takes over host machinery → makes ~100–200 progeny phages → lysosome degrades cell wall → burst (lysis) and release. Lambda phage is the classic example of a temperate phage capable of both cycles.',
    partNumber: 4,
    partTitle: 'Viral Replication'
  },

  // Part 5: Eukaryotic Microbes
  {
    id: 'mmicro-ent-5a',
    question: 'Plasmodium falciparum, the causative agent of severe malaria, is an example of which type of eukaryotic microorganism?',
    options: [
      'Fungus (mold)',
      'Helminth (parasitic worm)',
      'Protozoan (apicomplexan parasite)',
      'Prion'
    ],
    correctIndex: 2,
    explanation: 'Plasmodium is an apicomplexan protozoan parasite. It completes part of its life cycle in the Anopheles mosquito vector and part in human red blood cells (causing their periodic lysis → fever cycles). Apicomplexans have a distinctive apical complex for host cell invasion.',
    partNumber: 5,
    partTitle: 'Eukaryotic Microbes'
  },
  {
    id: 'mmicro-ent-5b',
    question: 'Fungi differ from bacteria in that fungi:',
    options: [
      'Are prokaryotes with peptidoglycan cell walls.',
      'Are eukaryotes with ergosterol-containing cell membranes and chitin cell walls.',
      'Lack a nucleus and reproduce only sexually.',
      'Are obligate intracellular parasites that cannot grow outside a host cell.'
    ],
    correctIndex: 1,
    explanation: 'Fungi are eukaryotes with: chitin cell walls (not peptidoglycan), ergosterol in membranes (target of antifungals like azoles and polyenes—not present in human cholesterol-containing membranes), nucleus, and mitochondria. They can reproduce sexually and asexually and can grow as free-living organisms.',
    partNumber: 5,
    partTitle: 'Eukaryotic Microbes'
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'mmicro-ent-6a',
    question: 'A patient with a bacterial infection is treated with rifamycin, which inhibits bacterial RNA polymerase. Why does rifamycin NOT affect human cells?',
    options: [
      'Human cells do not use RNA polymerase for transcription.',
      'Human RNA polymerases have a different β-subunit structure that rifamycin cannot bind.',
      'Rifamycin is too large to cross the nuclear envelope in eukaryotic cells.',
      'Human cells inactivate rifamycin before it reaches the nucleus.'
    ],
    correctIndex: 1,
    explanation: 'Rifamycin binds specifically to the β-subunit of bacterial RNA polymerase. Eukaryotic (including human) RNA Pol II has a structurally distinct β-subunit (the largest subunit, RPB1) that rifamycin cannot bind. This structural difference underlies selective toxicity—a core principle of antimicrobial pharmacology.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'mmicro-ent-6b',
    question: 'An epidemic of food poisoning is traced to a strain of Staphylococcus aureus that produces enterotoxin B. The enterotoxin is a preformed toxin in the food. Which characteristic of this illness distinguishes it from infection-based food poisoning?',
    options: [
      'The illness requires 2–3 days to develop because the bacteria must colonize the gut first.',
      'Antibiotics effectively treat this illness by eliminating the toxin-producing bacteria.',
      'Symptoms (vomiting, diarrhea) appear within 1–6 hours because preformed toxin acts immediately without bacterial replication.',
      'The illness is caused by direct bacterial invasion of intestinal mucosa.'
    ],
    correctIndex: 2,
    explanation: 'S. aureus food poisoning is an intoxication (not infection): the toxin is preformed in food. Ingested toxin acts immediately on intestinal receptors → rapid onset (1–6 h). Antibiotics are ineffective because they kill bacteria but cannot destroy already-formed heat-stable toxin. This distinguishes it from infection-based illnesses (e.g., Salmonella, 8–48 h onset).',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },

  // Part 7: Review & Applications
  {
    id: 'mmicro-ent-7a',
    question: 'Prions are infectious agents responsible for transmissible spongiform encephalopathies (TSEs) such as Creutzfeldt-Jakob disease (CJD). What makes prions unique compared to other infectious agents?',
    options: [
      'Prions are very small viruses containing a single-stranded RNA genome.',
      'Prions are misfolded proteins (PrPSc) with no nucleic acid; they propagate by inducing normal PrPC proteins to misfold.',
      'Prions are bacteria that can only survive within neurons.',
      'Prions are toxins produced by fungal contamination of grain.'
    ],
    correctIndex: 1,
    explanation: 'Prions (proteinaceous infectious particles) are misfolded forms of the normal cellular prion protein (PrPC → PrPSc). PrPSc is β-sheet-rich, protease-resistant, and induces the normal protein to adopt the same misfolded conformation—a protein-only propagation mechanism with no nucleic acid. This violates the central dogma.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  },
  {
    id: 'mmicro-ent-7b',
    question: 'mRNA vaccines (like those for COVID-19) work by:',
    options: [
      'Integrating viral DNA into the host genome to produce antibodies permanently.',
      'Delivering mRNA encoding a viral antigen (e.g., spike protein) into host cells, which translate it to protein, triggering an adaptive immune response.',
      'Injecting attenuated live virus that causes mild infection and natural immunity.',
      'Providing pre-formed neutralizing antibodies that remain in circulation for life.'
    ],
    correctIndex: 1,
    explanation: 'mRNA vaccines deliver lipid nanoparticle-encapsulated mRNA encoding the SARS-CoV-2 spike protein into host cells. Ribosomes translate it → spike protein is produced → presented to the immune system → B and T cell responses generated. The mRNA is transient and never integrated into DNA. Lipid nanoparticles protect mRNA from degradation.',
    partNumber: 7,
    partTitle: 'Review & Applications'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
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
