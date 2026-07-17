export const bioViralBiologyPart6Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir6-intro',
      type: 'text' as const,
      content: `
# 🧪 Viroids, Prions & Emerging Diseases

Not all infectious agents are viruses. Some are even simpler — **viroids** are just naked RNA, and **prions** are misfolded proteins with no nucleic acid at all. Understanding these subviral particles and how new diseases emerge is critical for AP Biology.

### What You'll Learn
- Viroids: RNA-only pathogens of plants
- Prions: infectious proteins that cause fatal brain diseases
- Viral ecology and environmental impacts
- SARS-CoV-2 as a case study in viral biology
      `
    },
    {
      id: 'vir6-viroids',
      type: 'text' as const,
      content: `
## Viroids: The Smallest Pathogens

Viroids are **tiny circular ssRNA molecules** (~250–400 nucleotides) that infect plants:

| Feature | Viroids | Viruses |
|---------|---------|---------|
| Nucleic acid | Circular ssRNA only | DNA or RNA |
| Protein coat | ❌ None | ✅ Capsid |
| Coding capacity | No proteins encoded | Encodes structural/enzymatic proteins |
| Replication | Host RNA polymerase II (in nucleus) | Various strategies |
| Host range | Plants only | All domains of life |

### How Viroids Cause Disease
- They do **not** encode proteins — damage comes from RNA interference
- Viroid RNA interacts with host gene regulation (RNA silencing pathways)
- Disrupts normal plant development → stunting, leaf distortion, crop failure

### Important Examples
- **Potato spindle tuber viroid (PSTVd)** — first viroid discovered (1971)
- **Coconut cadang-cadang viroid** — kills coconut palms
- **Hepatitis delta virus (HDV)** — a viroid-like human pathogen that requires hepatitis B virus as a helper

> 🔑 Viroids demonstrate that **RNA alone** can be an infectious agent — no protein required.
      `
    },
    {
      id: 'vir6-prions',
      type: 'text' as const,
      content: `
## Prions: Infectious Proteins

Prions are **misfolded versions of a normal brain protein** (PrP) that cause other normal PrP proteins to misfold — a chain reaction of protein misfolding.

### Normal vs Prion Protein

| Feature | $PrP^{c}$ (normal) | $PrP^{sc}$ (prion) |
|---------|---------------|----------------|
| Structure | Mostly α-helix | Mostly β-sheet |
| Solubility | Soluble | Insoluble, forms aggregates |
| Protease resistance | Degraded normally | Resistant to proteases |
| Function | May help with cell signaling, copper transport | Causes neurodegeneration |

### How Prions Propagate
1. $PrP^{sc}$ contacts normal $PrP^{c}$
2. $PrP^{sc}$ acts as a **template**, converting $PrP^{c}$ to $PrP^{sc}$
3. Misfolded proteins aggregate → amyloid fibrils → plaques
4. Plaques cause neuronal death → spongy brain tissue (spongiform encephalopathy)

### Prion Diseases

| Disease | Host | Cause |
|---------|------|-------|
| **Creutzfeldt-Jakob disease (CJD)** | Humans | Sporadic, inherited, or iatrogenic |
| **Variant CJD (vCJD)** | Humans | Consuming BSE-infected beef |
| **Bovine spongiform encephalopathy (BSE)** | Cattle | "Mad cow disease" — prion-contaminated feed |
| **Scrapie** | Sheep | Oldest known prion disease |
| **Kuru** | Humans | Ritualistic cannibalism (Fore people, Papua New Guinea) |
| **Chronic wasting disease (CWD)** | Deer, elk | Spreading in North American cervids |

### Why Prions Are So Dangerous
- **No nucleic acid** → cannot be targeted by antiviral drugs
- **Resistant to**: autoclaving (standard conditions), UV radiation, formaldehyde, proteases
- **No immune response** — $PrP^{sc}$ is the host's own protein (self antigen)
- **No cure** — all prion diseases are currently fatal
- Discovered by **Stanley Prusiner** (Nobel Prize, 1997)

> ⚠️ Prions challenge the central dogma in a different way — information flows from protein to protein, without any nucleic acid involvement.
      `
    },
    {
      id: 'vir6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How do prions differ from all other infectious agents?',
            options: [
              'Prions contain RNA but no DNA',
              'Prions contain no nucleic acid at all',
              'Prions are larger than bacteria',
              'Prions can only infect plants'
            ],
            correctAnswer: 1,
            explanation: 'Prions are misfolded proteins $(PrP^{sc})$ that contain no DNA or RNA. They propagate by converting normal $PrP^{c}$ into the misfolded form — an entirely protein-based mode of infection.'
          },
          {
            question: 'What structural change occurs when $PrP^{c}$ is converted to $PrP^{sc}$?',
            options: [
              'α-helix to β-sheet conversion',
              'Phosphorylation of tyrosine residues',
              'Glycosylation of the N-terminus',
              'Cleavage into smaller peptides'
            ],
            correctAnswer: 0,
            explanation: 'The normal $PrP^{c}$ protein is rich in α-helices. The prion form $(PrP^{sc})$ has the same amino acid sequence but refolds into β-sheet-rich structures that aggregate into insoluble amyloid fibrils.'
          }
        ]
      }
    },
    {
      id: 'vir6-covid',
      type: 'text' as const,
      content: `
## Case Study: SARS-CoV-2 & COVID-19

SARS-CoV-2 illustrates nearly every concept in viral biology:

### Viral Properties
- **Classification**: (+)ssRNA virus, family Coronaviridae
- **Genome**: ~30,000 nucleotides — one of the largest RNA virus genomes
- **Structure**: Enveloped, with distinctive spike (S) glycoproteins → "corona" (crown) appearance
- **Receptor**: ACE2 (angiotensin-converting enzyme 2)
- **Cell entry**: Spike protein cleaved by TMPRSS2 protease → membrane fusion

### Evolutionary Biology in Action
- **Zoonotic origin**: Likely bat coronavirus with possible intermediate host
- **Antigenic drift**: Continuous mutations in spike protein (Alpha → Delta → Omicron variants)
- **Natural selection**: Variants with increased transmissibility outcompete earlier strains
- **Immune evasion**: Mutations reduce antibody recognition

### Public Health Applications
- **mRNA vaccines** (Pfizer, Moderna) — encode spike protein to train immune system
- **Viral evolution** explained need for boosters and updated vaccines
- **Genomic surveillance** — sequencing tracks variant emergence in real time
- **$R_{0}$ (basic reproduction number)** — measure of transmissibility

| Variant | Key Feature | $R_{0}$ Estimate |
|---------|-------------|-------------|
| Original (Wuhan) | ACE2 binding | ~2.5 |
| Alpha (B.1.1.7) | N501Y mutation ↑ binding | ~4–5 |
| Delta (B.1.617.2) | L452R, P681R ↑ fusogenicity | ~5–8 |
| Omicron (B.1.1.529) | 30+ spike mutations, immune evasion | ~8–15 |

> 💡 SARS-CoV-2 is a textbook example of **viral evolution under immune selection pressure** — as population immunity increased, variants that could evade antibodies had a selective advantage.
      `
    },
    {
      id: 'vir6-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Viroids are infectious agents composed of only circular ___ without a protein coat',
            options: ['dsDNA', 'ssRNA', 'protein', 'dsRNA']
          },
          {
            label: 'Prion diseases are caused by the conversion of normal $PrP^{c}$ to misfolded ___ form',
            options: ['$PrP^{sc}$', '$PrP^{m}$', '$PrP^{d}$', '$PrP^{n}$']
          },
          {
            label: 'SARS-CoV-2 enters host cells by binding its spike protein to the ___ receptor',
            options: ['CD4', 'ACE2', 'sialic acid', 'CCR5']
          },
          {
            label: 'Prion diseases are untreatable partly because $PrP^{sc}$ is the host\'s own ___ and doesn\'t trigger an immune response',
            options: ['carbohydrate', 'lipid', 'protein', 'nucleic acid']
          }
        ],
        correctAnswers: ['ssRNA', '$PrP^{sc}$', 'ACE2', 'protein'],
        hint1: 'Viroids are the simplest infectious agents — just a single strand of RNA.',
        hint2: 'The "Sc" stands for "scrapie" — the sheep disease where prions were first characterized.',
        hint3: 'ACE2 is the key receptor for coronaviruses including SARS-CoV-2.',
        explanation: 'Viroids are naked circular ssRNA molecules. Prions are misfolded $PrP^{sc}$ proteins. SARS-CoV-2 uses ACE2 as its receptor. $PrP^{sc}$ is the host\'s own protein (self antigen), so the immune system doesn\'t recognize it as foreign.'
      }
    }
  ]
};
