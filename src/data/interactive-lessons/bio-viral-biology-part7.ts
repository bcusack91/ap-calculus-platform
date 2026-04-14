export const bioViralBiologyPart7Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir7-intro',
      type: 'text' as const,
      content: `
# 📝 AP Exam Practice: Viral Biology

These questions mirror the style and difficulty of AP Biology free-response and multiple-choice questions. They integrate concepts across all viral biology topics — structure, replication cycles, HIV, viral evolution, and subviral particles.

### Focus Areas
- Comparing lytic and lysogenic cycles
- HIV treatment strategies and drug targets
- Viral evolution and natural selection
- Experimental design with viruses
      `
    },
    {
      id: 'vir7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Lytic vs Lysogenic Cycles** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A bacterium is found to produce a toxin it did not previously produce. The gene for this toxin is located within a prophage integrated in the bacterium\'s chromosome. This phenomenon is called:',
            options: [
              'Transduction',
              'Transformation',
              'Lysogenic conversion',
              'Conjugation'
            ],
            correctAnswer: 2,
            explanation: 'Lysogenic conversion occurs when a prophage confers new phenotypic properties (like toxin production) to the host bacterium. This is different from transduction (phage transferring host DNA) and transformation (uptake of free DNA).'
          },
          {
            question: 'Which of the following events would most likely trigger a lysogenic bacteriophage to enter the lytic cycle?',
            options: [
              'The host cell enters a nutrient-rich environment',
              'The host cell is exposed to UV radiation, causing DNA damage',
              'The host cell population density increases',
              'The phage acquires a mutation in its tail fiber genes'
            ],
            correctAnswer: 1,
            explanation: 'UV radiation causes DNA damage, activating the host SOS response. RecA protein stimulates self-cleavage of the CI repressor, de-repressing lytic genes. The prophage excises and enters the lytic cycle (induction).'
          }
        ]
      }
    },
    {
      id: 'vir7-quiz2',
      type: 'multiple-choice' as const,
      content: `**HIV Treatment Strategies** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A new antiretroviral drug inhibits HIV integrase. At which step of the HIV life cycle would this drug act?',
            options: [
              'Blocking reverse transcription of RNA to DNA',
              'Preventing insertion of proviral DNA into the host chromosome',
              'Inhibiting viral protease from cleaving polyproteins',
              'Blocking gp120 from binding to CD4'
            ],
            correctAnswer: 1,
            explanation: 'Integrase inhibitors (e.g., raltegravir, dolutegravir) prevent the proviral dsDNA from being inserted into the host chromosome. Without integration, the virus cannot establish a permanent infection or produce new virions from the integrated template.'
          },
          {
            question: 'Why is combination antiretroviral therapy (using multiple drugs targeting different steps) more effective than monotherapy against HIV?',
            options: [
              'Each drug kills a different strain of HIV',
              'The drugs have fewer side effects when combined',
              'HIV\'s high mutation rate means resistance to one drug evolves quickly, but simultaneous resistance to multiple drugs is far less likely',
              'Multiple drugs prevent the virus from entering cells'
            ],
            correctAnswer: 2,
            explanation: 'HIV has an extremely high mutation rate (~10⁻⁴/nt), so resistance to any single drug can emerge rapidly. The probability of simultaneously acquiring resistance mutations to 3+ drugs acting on different targets is multiplicatively tiny (e.g., 10⁻⁴ × 10⁻⁴ × 10⁻⁴ = 10⁻¹²).'
          }
        ]
      }
    },
    {
      id: 'vir7-evolution',
      type: 'text' as const,
      content: `
## Viral Evolution Scenarios

### Scenario 1: Influenza Vaccine Mismatch

Every year, the WHO predicts which influenza strains will circulate and formulates vaccines months in advance. Sometimes the vaccine is a poor match.

**Analysis:**
- **Antigenic drift** (point mutations) can change surface antigens between vaccine formulation and flu season
- The vaccine targets hemagglutinin (HA) — if HA mutates at key antibody-binding sites, vaccine effectiveness drops
- This is an evolutionary arms race between viral mutation and vaccine design

### Scenario 2: Drug-Resistant HIV

A patient on a single antiretroviral drug develops resistant HIV within weeks.

**Analysis:**
- HIV exists as a **quasispecies** — the viral population contains many variants
- Some pre-existing variants may already carry resistance mutations
- Drug removes susceptible variants → resistant variants are **selected for** (directional selection)
- This is natural selection in real time, observable within a single patient

### Scenario 3: Novel Pandemic Virus

A new influenza strain with an H subtype never seen in humans emerges from a pig farm where workers also raise poultry.

**Analysis:**
- **Antigenic shift** through reassortment: pig serves as "mixing vessel"
- Pig is co-infected with human flu and avian flu
- Genome segments reassort → novel combination humans have no immunity to
- If the virus acquires human-to-human transmissibility → pandemic
      `
    },
    {
      id: 'vir7-quiz3',
      type: 'multiple-choice' as const,
      content: `**Viral Evolution & Ecology** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Pigs are often called "mixing vessels" for influenza because they:',
            options: [
              'Have immune systems similar to humans',
              'Can be infected by both avian and human influenza strains, allowing reassortment',
              'Produce antibodies that neutralize influenza',
              'Live in close proximity to wild birds'
            ],
            correctAnswer: 1,
            explanation: 'Pig respiratory epithelium has receptors for both avian influenza (α-2,3-linked sialic acid) and human influenza (α-2,6-linked sialic acid). When both strains infect the same pig cell, their 8 genome segments can reassort, creating novel strains with pandemic potential.'
          },
          {
            question: 'A researcher finds that a population of RNA viruses in a patient contains thousands of slightly different genetic variants. This is best described as:',
            options: [
              'Genetic equilibrium',
              'Founder effect',
              'Quasispecies diversity',
              'Sympatric speciation'
            ],
            correctAnswer: 2,
            explanation: 'RNA virus populations exist as quasispecies — swarms of closely related but genetically distinct variants generated by error-prone replication. This diversity provides the raw material for rapid adaptation to changing selective pressures.'
          }
        ]
      }
    },
    {
      id: 'vir7-experimental',
      type: 'text' as const,
      content: `
## Experimental Design Problems

### Classic Experiment: Hershey-Chase (1952)

**Question**: Is DNA or protein the genetic material of bacteriophage T2?

**Design**:
1. Labeled phage DNA with ³²P (phosphorus is in DNA but not protein)
2. Labeled phage protein with ³⁵S (sulfur is in protein but not DNA)
3. Infected bacteria with labeled phages
4. Separated phages from bacteria using a blender + centrifugation
5. Measured radioactivity in pellet (bacteria) vs supernatant (phage ghosts)

**Results**:
- ³²P found in the **pellet** (bacteria) → DNA entered the cell
- ³⁵S found in the **supernatant** (phage ghosts) → protein stayed outside

**Conclusion**: DNA is the genetic material, not protein.

### AP-Style Experimental Design

**Prompt**: Design an experiment to determine whether a new antiviral drug blocks viral attachment or viral genome replication.

**Model Answer**:
1. **Hypothesis**: If the drug blocks attachment, then pre-treating host cells with the drug before adding virus will prevent infection. If it blocks replication, infection will begin but no new virions will be produced.
2. **Groups**: (a) No drug control, (b) Drug added before virus, (c) Drug added after virus attachment
3. **Dependent variable**: Viral titer (number of virions produced) measured by plaque assay
4. **Prediction**: If the drug blocks attachment → groups (b) and (c-before-attachment) show no plaques. If it blocks replication → group (c-after-attachment) shows reduced plaques compared to control.
      `
    },
    {
      id: 'vir7-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'In the Hershey-Chase experiment, ³²P was used to label phage ___ because phosphorus is present in nucleic acids but not proteins',
            options: ['protein', 'DNA', 'lipids', 'carbohydrates']
          },
          {
            label: 'Combination antiretroviral therapy works because the probability of resistance to multiple drugs is ___ compared to a single drug',
            options: ['higher', 'the same', 'multiplicatively lower', 'unpredictable']
          },
          {
            label: 'When a prophage confers new virulence traits to its bacterial host, this is called lysogenic ___',
            options: ['induction', 'conversion', 'transduction', 'transformation']
          },
          {
            label: 'In viral evolution, directional selection for drug-resistant variants is an example of natural selection acting on ___',
            options: ['random genetic drift', 'pre-existing genetic variation', 'Lamarckian inheritance', 'horizontal gene transfer']
          }
        ],
        correctAnswers: ['DNA', 'multiplicatively lower', 'conversion', 'pre-existing genetic variation'],
        hint1: 'Phosphorus is a component of the nucleic acid backbone (phosphodiester bonds).',
        hint2: 'If probability of resistance to one drug is 10⁻⁴, what happens when you multiply several of those probabilities?',
        hint3: 'The prophage converts the bacterium to a new phenotype — that\'s the term.',
        explanation: '³²P labels DNA (phosphorus is in the backbone). Combination therapy is effective because the probability of multi-drug resistance is the product of individual probabilities (multiplicatively lower). Lysogenic conversion is when prophage genes change the host phenotype. Drug resistance arises because natural selection acts on pre-existing variants in the quasispecies population.'
      }
    }
  ]
};
