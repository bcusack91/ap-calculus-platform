export const bioViralBiologyPart2Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir2-intro',
      type: 'text' as const,
      content: `
# 🧫 Bacteriophage Life Cycles

Bacteriophages (phages) are viruses that specifically infect **bacteria**. They are the most abundant biological entities on Earth and serve as key models for understanding viral replication.

### What You'll Learn
- Structure of a T4 bacteriophage
- The lytic cycle: productive infection leading to cell lysis
- The lysogenic cycle: viral genome integration as a prophage
- Factors that trigger the switch from lysogeny to lysis
      `
    },
    {
      id: 'vir2-phage-structure',
      type: 'text' as const,
      content: `
## Bacteriophage Anatomy

The **T4 phage** (which infects *E. coli*) is the classic model:

| Component | Function |
|-----------|----------|
| **Icosahedral head** | Contains the linear dsDNA genome |
| **Tail sheath** | Contracts to inject DNA through the cell wall |
| **Baseplate** | Anchors the phage to the bacterial surface |
| **Tail fibers** | Recognize and bind specific receptors on the host cell |
| **Tail pins** | Stabilize attachment to the cell surface |

> 🔑 Phages are **highly specific** — tail fibers recognize particular surface molecules, so each phage typically infects only one bacterial species or even specific strains.

### Phage Diversity
- **T-even phages** (T2, T4, T6) — complex morphology, strictly lytic
- **Lambda (λ) phage** — can switch between lytic and lysogenic cycles (temperate phage)
- **Filamentous phages** (M13) — secrete progeny without killing the host
      `
    },
    {
      id: 'vir2-lytic',
      type: 'text' as const,
      content: `
## The Lytic Cycle

The lytic cycle is a **productive infection** that ends with host cell destruction:

### Step-by-Step

**1. Attachment (Adsorption)**
- Tail fibers bind to specific receptors on the bacterial cell wall
- Binding is highly specific (determines host range)

**2. Penetration (Injection)**
- Tail sheath contracts like a syringe
- Phage DNA is injected through the cell wall and membrane
- The capsid remains outside (only nucleic acid enters)

**3. Biosynthesis**
- Host DNA is degraded by phage-encoded nucleases
- Phage DNA hijacks host RNA polymerase and ribosomes
- Early genes: enzymes to shut down host metabolism
- Late genes: capsid proteins, tail components, lysozyme

**4. Assembly (Maturation)**
- New phage heads are assembled and filled with replicated DNA
- Tails are attached to heads
- Self-assembly process (no template needed)

**5. Lysis (Release)**
- Phage-encoded **lysozyme** degrades the bacterial cell wall
- **Holins** create pores in the inner membrane
- Cell bursts, releasing 100–200 new phage particles (**burst size**)

> 💀 The entire lytic cycle takes about **20–30 minutes** in T4 phage infecting *E. coli*.
      `
    },
    {
      id: 'vir2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During bacteriophage infection, which component enters the host cell?',
            options: [
              'The entire phage particle',
              'Only the capsid',
              'Only the nucleic acid',
              'The tail fibers and DNA'
            ],
            correctAnswer: 2,
            explanation: 'In bacteriophage infection, only the nucleic acid (DNA) is injected into the host. The protein capsid remains outside — this was demonstrated by the Hershey-Chase experiment (1952).'
          },
          {
            question: 'What is the function of phage-encoded lysozyme at the end of the lytic cycle?',
            options: [
              'Replicating phage DNA',
              'Translating phage mRNA',
              'Degrading the bacterial cell wall to release new phages',
              'Integrating phage DNA into the host chromosome'
            ],
            correctAnswer: 2,
            explanation: 'Lysozyme degrades peptidoglycan in the bacterial cell wall, causing the cell to lyse (burst) and release newly assembled phage particles.'
          }
        ]
      }
    },
    {
      id: 'vir2-lysogenic',
      type: 'text' as const,
      content: `
## The Lysogenic Cycle

In lysogeny, the phage genome **integrates** into the host chromosome and replicates passively with each cell division:

### Step-by-Step

**1. Attachment & Penetration** — Same as lytic cycle

**2. Integration**
- Phage DNA circularizes
- Phage-encoded **integrase** catalyzes recombination between phage and bacterial DNA
- Integrated phage DNA = **prophage**
- The bacterium is now called a **lysogen**

**3. Replication as Prophage**
- Prophage is replicated along with the bacterial chromosome during cell division
- All daughter cells carry the prophage
- Phage genes are mostly **repressed** by a phage-encoded repressor protein (e.g., CI repressor in λ phage)

**4. Induction (Switch to Lytic)**
- Triggered by stress: UV radiation, DNA damage, nutrient starvation
- Stress activates host **SOS response** → RecA protein
- RecA stimulates **self-cleavage** of the CI repressor
- Loss of repression → prophage excises from chromosome → enters lytic cycle

### Lysogenic Conversion
Sometimes prophage genes confer new properties to the host bacterium:
- *Corynebacterium diphtheriae* — diphtheria toxin encoded by phage
- *Vibrio cholerae* — cholera toxin encoded by CTXφ phage
- *Streptococcus pyogenes* — scarlet fever toxin from phage

> 🔑 Lysogenic conversion is medically significant — some bacteria become pathogenic **only** when carrying a prophage.
      `
    },
    {
      id: 'vir2-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'A phage genome integrated into the host bacterial chromosome is called a ___',
            options: ['viroid', 'plasmid', 'prophage', 'provirus']
          },
          {
            label: 'The enzyme that catalyzes integration of phage DNA into the host chromosome is ___',
            options: ['ligase', 'integrase', 'reverse transcriptase', 'helicase']
          },
          {
            label: 'The lytic cycle ends with cell ___, releasing new phage particles',
            options: ['division', 'lysis', 'transformation', 'conjugation']
          },
          {
            label: 'The switch from lysogenic to lytic cycle is triggered by ___ that damage DNA',
            options: ['nutrients', 'antibiotics', 'stressors like UV radiation', 'temperature decreases']
          }
        ],
        correctAnswers: ['prophage', 'integrase', 'lysis', 'stressors like UV radiation'],
        hint1: 'The prefix "pro-" means "before" — the phage exists before becoming active.',
        hint2: 'The enzyme name tells you what it does — it integrates DNA.',
        hint3: 'DNA-damaging agents activate the SOS response, which leads to repressor cleavage.',
        explanation: 'The integrated phage genome is a prophage. Integrase catalyzes site-specific recombination. The lytic cycle ends with lysis (cell bursting). UV radiation and other DNA-damaging stressors trigger the SOS response, causing prophage induction.'
      }
    }
  ]
};
