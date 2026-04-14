export const bioDnaTechnologyGenomicsPart6Data = {
  topicSlug: 'dna-technology-genomics',
  sections: [
    {
      id: 'dna6-intro',
      type: 'text' as const,
      content: `
## Genetic Engineering Applications

**Part 6 of 7 — DNA Technology & Genomics**

Genetic engineering applies recombinant DNA technology and gene editing to modify organisms for practical purposes — from medicine to agriculture.

### Genetically Modified Organisms (GMOs)

A **GMO** is an organism whose genome has been altered by the introduction of foreign DNA (a **transgene**) or by targeted editing of existing genes.

#### Common Agricultural GMOs

| Crop | Modification | Purpose |
|------|-------------|---------|
| **Bt corn** | *Bacillus thuringiensis* Cry toxin gene | Insect resistance (Cry protein kills caterpillar pests) |
| **Roundup Ready soybean** | CP4 EPSPS gene | Herbicide tolerance (glyphosate resistance) |
| **Golden Rice** | β-carotene biosynthesis genes | Vitamin A fortification (addresses deficiency in developing nations) |
| **Arctic Apple** | RNA interference to silence PPO gene | Non-browning (reduced polyphenol oxidase) |

### How Are Transgenic Plants Made?

1. **Agrobacterium-mediated transformation**
   - *Agrobacterium tumefaciens* naturally transfers its **T-DNA** (transfer DNA) into plant cells.
   - Scientists replace the T-DNA genes with the transgene of interest.
   - The engineered Agrobacterium infects plant cells, delivering the transgene into the plant genome.

2. **Gene gun (biolistics)**
   - DNA-coated gold or tungsten microparticles are shot into plant cells at high velocity.
   - Used for species resistant to Agrobacterium (e.g., monocots like corn and wheat).
      `
    },
    {
      id: 'dna6-gene-therapy-text',
      type: 'text' as const,
      content: `
### Gene Therapy

Gene therapy aims to treat or cure genetic disease by correcting the underlying genetic defect.

#### Approaches

| Strategy | Description | Example |
|----------|------------|---------|
| **Gene replacement** | Insert a functional copy of a defective gene | CFTR gene for cystic fibrosis |
| **Gene editing** | Correct the mutation in situ (e.g., CRISPR) | Sickle cell disease (editing HBB gene) |
| **Gene silencing** | Use RNAi or antisense to reduce expression of a harmful gene | Huntington's disease (reduce mutant huntingtin) |

#### Delivery Vectors for Gene Therapy

| Vector | Pros | Cons |
|--------|------|------|
| **Adeno-associated virus (AAV)** | Low immunogenicity, long-term expression | Small cargo capacity (~4.7 kb) |
| **Lentivirus** | Integrates into genome, large cargo | Risk of insertional mutagenesis |
| **Adenovirus** | High transduction efficiency | Strong immune response; transient expression |
| **Lipid nanoparticles** | Non-viral, safe, scalable | Transient expression; limited tissue targeting |

#### Somatic vs. Germline Gene Therapy

- **Somatic**: Edits affect only the treated individual → **not heritable**. Generally accepted ethically.
- **Germline**: Edits affect eggs, sperm, or embryos → **heritable** by future generations. Currently banned or restricted in most countries due to ethical concerns.

### Transgenic Animals

| Animal | Transgene/Edit | Purpose |
|--------|---------------|---------|
| **GloFish** | GFP (green fluorescent protein) | Commercial novelty; research marker |
| **Knockout mice** | Specific gene disrupted | Study gene function and disease models |
| **Transgenic goats** | Human antithrombin gene | Produce pharmaceutical protein in milk (pharming) |
| **AquAdvantage salmon** | Growth hormone gene from Chinook salmon | Faster growth → food production |
      `
    },
    {
      id: 'dna6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check — GMOs & Gene Therapy** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Bt corn is resistant to insect pests because it produces:',
            options: [
              'Cry toxin protein from Bacillus thuringiensis that kills caterpillar larvae',
              'An herbicide that poisons insects on contact',
              'Extra cellulose in its cell walls that insects cannot digest',
              'A repellent pheromone that drives insects away'
            ],
            correctAnswer: 0,
            explanation: 'Bt corn contains a transgene from the bacterium Bacillus thuringiensis encoding the Cry protein. When caterpillar larvae ingest the Cry toxin, it forms pores in their gut lining, killing them. The toxin is highly specific and harmless to mammals.'
          },
          {
            question: 'Why is germline gene therapy more ethically controversial than somatic gene therapy?',
            options: [
              'Germline edits are heritable and will be passed to future generations who cannot consent',
              'Germline therapy is less effective than somatic therapy',
              'Germline therapy can only be performed on adults, not children',
              'Somatic therapy affects more cells than germline therapy'
            ],
            correctAnswer: 0,
            explanation: 'Germline edits (to eggs, sperm, or embryos) are passed to all future descendants. Since those individuals cannot consent to the modification, and long-term effects are unknown, germline editing raises profound ethical concerns about altering the human gene pool.'
          }
        ]
      }
    },
    {
      id: 'dna6-ethics-text',
      type: 'text' as const,
      content: `
### Ethical Considerations in Genetic Engineering

#### Arguments in Favor
- **Medical breakthroughs** — curing genetic diseases, developing vaccines
- **Food security** — drought-resistant and nutrient-enhanced crops
- **Environmental benefits** — reduced pesticide use with pest-resistant GMOs
- **Scientific understanding** — transgenic organisms reveal gene function

#### Arguments Against / Concerns
- **Unintended ecological effects** — transgenes spreading to wild populations
- **Corporate control** — patenting of genetically modified seeds
- **Equity** — access to gene therapy may be limited by cost
- **Playing God / slippery slope** — especially for human germline editing
- **Unknown long-term effects** — on health, ecosystems, and biodiversity

#### AP Exam Perspective

The AP Biology exam tests your ability to **evaluate claims and evidence** about biotechnology, not to advocate a specific position. Be prepared to:

- Analyze data from transgenic organism experiments
- Identify potential benefits AND risks of a specific application
- Distinguish between scientific evidence and ethical/social arguments
- Evaluate experimental design for testing GMO safety
      `
    },
    {
      id: 'dna6-quiz2',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Ethics & Transgenic Organisms** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Golden Rice was engineered to address which public health problem?',
            options: [
              'Vitamin A deficiency in populations that rely heavily on rice',
              'Iron deficiency anemia in developing countries',
              'Gluten intolerance in celiac disease patients',
              'Protein malnutrition in vegetarian populations'
            ],
            correctAnswer: 0,
            explanation: 'Golden Rice contains genes for β-carotene (provitamin A) biosynthesis. β-carotene is converted to vitamin A in the body, addressing vitamin A deficiency — a major cause of blindness and immune deficiency in rice-dependent populations.'
          },
          {
            question: 'A scientist uses Agrobacterium tumefaciens to create a transgenic plant. What natural ability of Agrobacterium is exploited?',
            options: [
              'Its ability to transfer T-DNA from its Ti plasmid into the plant cell genome',
              'Its ability to infect animal cells and deliver viral DNA',
              'Its ability to perform PCR naturally inside plant cells',
              'Its ability to produce restriction enzymes that cut plant DNA'
            ],
            correctAnswer: 0,
            explanation: 'Agrobacterium naturally transfers T-DNA from its tumor-inducing (Ti) plasmid into plant cell chromosomes, causing crown gall disease. Scientists replace the tumor-causing genes in the T-DNA with the desired transgene, exploiting the natural transfer mechanism.'
          }
        ]
      }
    },
    {
      id: 'dna6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks — Genetic Engineering** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Bt crops produce _____ toxin that kills insect larvae.',
            options: ['Cry', 'Taq', 'Cas9', 'GFP']
          },
          {
            label: 'Agrobacterium delivers transgenes into plant cells via its _____ plasmid.',
            options: ['Ti', 'pBR322', 'F', 'R']
          },
          {
            label: 'Somatic gene therapy edits are _____, meaning they are not passed to offspring.',
            options: ['non-heritable', 'heritable', 'dominant', 'recessive']
          },
          {
            label: 'Golden Rice is engineered to produce _____, a precursor of vitamin A.',
            options: ['β-carotene', 'chlorophyll', 'anthocyanin', 'lycopene']
          }
        ],
        correctAnswers: ['Cry', 'Ti', 'non-heritable', 'β-carotene'],
        hint1: 'The Cry protein comes from Bacillus thuringiensis — it forms pores in insect gut membranes.',
        hint2: 'Ti stands for tumor-inducing — the natural function causes crown gall disease.',
        hint3: 'Somatic cells are body cells; changes to them do not affect eggs or sperm.',
        explanation: 'Bt crops produce Cry toxin. Agrobacterium uses its Ti (tumor-inducing) plasmid for gene transfer. Somatic edits are non-heritable (only affect the individual). Golden Rice produces β-carotene, which the body converts to vitamin A.'
      }
    }
  ]
};
