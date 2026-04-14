export const bioViralBiologyPart4Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir4-intro',
      type: 'text' as const,
      content: `
# 🧬 Retroviruses & HIV

Retroviruses are unique among viruses because they reverse the normal flow of genetic information: RNA → DNA. **HIV (Human Immunodeficiency Virus)** is the most studied retrovirus and an AP Biology favorite.

### What You'll Learn
- How reverse transcriptase works
- The HIV life cycle in detail
- How HIV destroys the immune system
- Progression from HIV infection to AIDS
- Antiretroviral therapy (ART) targets
      `
    },
    {
      id: 'vir4-reverse-transcriptase',
      type: 'text' as const,
      content: `
## Reverse Transcriptase: Breaking the Central Dogma?

The **central dogma** states: DNA → RNA → Protein

Retroviruses add a step: **RNA → DNA → RNA → Protein**

### How Reverse Transcriptase Works
1. Uses the viral ssRNA genome as a template
2. Synthesizes a complementary DNA strand (cDNA)
3. Degrades the original RNA template (RNase H activity)
4. Synthesizes the second DNA strand → **double-stranded DNA**
5. This dsDNA is called **proviral DNA**

### Key Properties of Reverse Transcriptase
- **No proofreading** — error rate ~1 per 10,000 nucleotides
- Makes HIV one of the fastest-evolving entities known
- This high mutation rate complicates vaccine development and enables drug resistance
- Contains both polymerase and RNase H activities in one enzyme

> 🔑 The discovery of reverse transcriptase by **Howard Temin** and **David Baltimore** (1970) challenged the central dogma and earned the Nobel Prize. The central dogma is not *violated* — it was extended to include reverse information flow.
      `
    },
    {
      id: 'vir4-hiv-lifecycle',
      type: 'text' as const,
      content: `
## The HIV Life Cycle

HIV is an enveloped retrovirus with two copies of (+)ssRNA:

### Step-by-Step

**1. Attachment**
- gp120 binds to **CD4 receptor** on helper T cells (also macrophages, dendritic cells)
- Conformational change allows gp120 to bind coreceptor (**CCR5** or **CXCR4**)

**2. Fusion & Entry**
- gp41 mediates fusion of viral envelope with host plasma membrane
- Viral core (capsid + RNA + enzymes) enters the cytoplasm

**3. Reverse Transcription**
- Reverse transcriptase converts ssRNA → dsDNA in the cytoplasm
- Takes ~8 hours

**4. Nuclear Import & Integration**
- Proviral dsDNA enters the nucleus through nuclear pores
- **Integrase** inserts proviral DNA into the host chromosome
- Integrated provirus can remain latent for years

**5. Transcription & Translation**
- Host RNA polymerase II transcribes proviral DNA → viral mRNA
- Some mRNA is translated into polyproteins (Gag, Gag-Pol, Env)
- Some full-length RNA serves as new genomes

**6. Assembly**
- Viral proteins and RNA genomes assemble at the plasma membrane
- Gag polyproteins drive assembly

**7. Budding & Maturation**
- Immature virion buds through the plasma membrane
- **Protease** cleaves polyproteins into functional components
- Mature, infectious virion is released
      `
    },
    {
      id: 'vir4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why does HIV specifically target helper T cells?',
            options: [
              'Helper T cells are the largest cells in the body',
              'Helper T cells express CD4 receptors that HIV gp120 binds',
              'Helper T cells lack a nuclear membrane',
              'Helper T cells have the highest metabolic rate'
            ],
            correctAnswer: 1,
            explanation: 'HIV gp120 specifically binds the CD4 receptor found on helper T cells (and some macrophages). This receptor interaction determines HIV\'s tropism for CD4+ cells.'
          },
          {
            question: 'What is the role of integrase in the HIV life cycle?',
            options: [
              'Converting RNA to DNA',
              'Inserting proviral DNA into the host chromosome',
              'Cleaving polyproteins into functional proteins',
              'Mediating fusion with the host membrane'
            ],
            correctAnswer: 1,
            explanation: 'Integrase catalyzes the insertion of proviral dsDNA (created by reverse transcriptase) into the host cell\'s chromosomal DNA. This is what makes the infection permanent in that cell lineage.'
          }
        ]
      }
    },
    {
      id: 'vir4-immune-destruction',
      type: 'text' as const,
      content: `
## Immune System Destruction & Progression to AIDS

### How HIV Destroys the Immune System

CD4+ T helper cells are the **coordinators** of the adaptive immune response. They:
- Activate cytotoxic T cells
- Help B cells produce antibodies
- Stimulate macrophage activity

HIV progressively destroys CD4+ T cells through:
1. **Direct viral killing** — lytic infection of CD4+ cells
2. **Apoptosis** — uninfected bystander cells undergo programmed death
3. **Immune exhaustion** — chronic activation wears out remaining T cells
4. **Latent reservoirs** — integrated provirus hides in resting T cells, evading immune detection

### Disease Progression

| Stage | Timeline | CD4 Count | Characteristics |
|-------|----------|-----------|-----------------|
| **Acute infection** | 2–4 weeks | Sharp drop | Flu-like symptoms, high viral load |
| **Clinical latency** | 2–15+ years | Gradual decline | Few/no symptoms, virus replicating slowly |
| **AIDS** | Variable | < 200 cells/μL | Opportunistic infections, cancers |

Normal CD4 count: **500–1,500 cells/μL**

### Opportunistic Infections in AIDS
- *Pneumocystis jirovecii* pneumonia (PCP)
- *Mycobacterium tuberculosis*
- *Candida* (thrush, esophageal candidiasis)
- Kaposi's sarcoma (HHV-8)
- Toxoplasmosis
- Cytomegalovirus (CMV) retinitis

> 🔑 Patients don't die from HIV directly — they die from **opportunistic infections** that a healthy immune system would normally control.
      `
    },
    {
      id: 'vir4-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Reverse transcriptase converts the HIV ___ genome into double-stranded DNA',
            options: ['dsDNA', 'ssRNA', 'dsRNA', 'ssDNA']
          },
          {
            label: 'The integrated form of HIV DNA in the host chromosome is called a ___',
            options: ['prophage', 'provirus', 'plasmid', 'transposon']
          },
          {
            label: 'AIDS is diagnosed when CD4+ T cell count falls below ___ cells per μL',
            options: ['500', '200', '1000', '50']
          },
          {
            label: 'HIV protease is essential for ___ polyproteins into functional viral proteins',
            options: ['transcribing', 'translating', 'cleaving', 'replicating']
          }
        ],
        correctAnswers: ['ssRNA', 'provirus', '200', 'cleaving'],
        hint1: 'HIV is a retrovirus — its genome is single-stranded RNA.',
        hint2: 'In bacteriophages the integrated DNA is a prophage; in retroviruses it\'s called something similar.',
        hint3: 'The CD4 count threshold for AIDS diagnosis is a specific number well below normal.',
        explanation: 'HIV has an ssRNA genome that reverse transcriptase converts to dsDNA. The integrated DNA is a provirus. AIDS is defined by CD4 count < 200/μL. HIV protease cleaves Gag and Gag-Pol polyproteins into mature, functional proteins.'
      }
    }
  ]
};
