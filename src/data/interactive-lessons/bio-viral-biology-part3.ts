export const bioViralBiologyPart3Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir3-intro',
      type: 'text' as const,
      content: `
# 🔬 Animal Virus Replication

Animal viruses face challenges that bacteriophages don't — they must cross plasma membranes, navigate the cytoplasm, and sometimes enter the nucleus. Their replication strategies are far more diverse.

### What You'll Learn
- How animal viruses attach to host cells via specific receptors
- Entry mechanisms: endocytosis vs membrane fusion
- Genome replication strategies for DNA and RNA viruses
- Release: budding (enveloped) vs lysis (naked viruses)
      `
    },
    {
      id: 'vir3-attachment',
      type: 'text' as const,
      content: `
## Attachment & Entry

### Receptor-Mediated Attachment
Animal viruses bind to **specific surface receptors** on host cells:

| Virus | Host Receptor | Target Cell |
|-------|--------------|-------------|
| **HIV** | CD4 + CCR5/CXCR4 | Helper T cells, macrophages |
| **Influenza** | Sialic acid residues | Respiratory epithelium |
| **SARS-CoV-2** | ACE2 receptor | Respiratory epithelium, intestinal cells |
| **Epstein-Barr (EBV)** | CR2 (CD21) | B lymphocytes |
| **Rabies** | Acetylcholine receptor | Neurons |

> 🔑 Receptor specificity determines **tissue tropism** — which cell types and organisms a virus can infect.

### Entry Mechanisms

**1. Receptor-mediated endocytosis** (most common)
- Virus binds receptor → cell engulfs virus in an endosome
- Acidic pH in endosome triggers conformational change in viral proteins
- Viral membrane fuses with endosome membrane → genome released into cytoplasm

**2. Direct membrane fusion** (enveloped viruses)
- Viral envelope fuses directly with the plasma membrane at neutral pH
- Example: HIV (gp41 mediates fusion after gp120 binds CD4)

**3. Translocation** (some non-enveloped viruses)
- Virus or genome passes directly through the plasma membrane
      `
    },
    {
      id: 'vir3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What determines the tissue tropism (cell specificity) of a virus?',
            options: [
              'The size of the viral genome',
              'The presence of specific receptors on host cells',
              'The type of capsid symmetry',
              'Whether the virus has an envelope'
            ],
            correctAnswer: 1,
            explanation: 'Tissue tropism is determined by the interaction between viral attachment proteins and specific receptors on the host cell surface. HIV targets CD4+ cells because it binds CD4 and a coreceptor.'
          },
          {
            question: 'During receptor-mediated endocytosis, what triggers the release of the viral genome from the endosome?',
            options: [
              'Binding of antibodies',
              'Neutral pH in the cytoplasm',
              'Acidification within the endosome',
              'Action of host ribosomes'
            ],
            correctAnswer: 2,
            explanation: 'As the endosome matures, proton pumps lower the pH. The acidic environment triggers conformational changes in viral proteins, leading to membrane fusion and genome release.'
          }
        ]
      }
    },
    {
      id: 'vir3-replication',
      type: 'text' as const,
      content: `
## Genome Replication Strategies

The replication strategy depends entirely on the type of viral genome:

### DNA Viruses
| Strategy | Location | Example |
|----------|----------|---------|
| **dsDNA → mRNA** | Nucleus (uses host RNA polymerase) | Herpesvirus, adenovirus |
| **dsDNA → mRNA** | Cytoplasm (uses own RNA polymerase) | Poxvirus (only DNA virus in cytoplasm) |
| **ssDNA → dsDNA → mRNA** | Nucleus | Parvovirus |

### RNA Viruses
| Strategy | Location | Example |
|----------|----------|---------|
| **(+)ssRNA → directly translated** | Cytoplasm | Coronavirus, poliovirus |
| **(−)ssRNA → (+)mRNA** (by viral RdRp) | Cytoplasm | Influenza*, Ebola |
| **dsRNA → (+)mRNA** (by viral RdRp) | Cytoplasm | Rotavirus |
| **ssRNA → DNA** (by reverse transcriptase) | Nucleus (integration) | HIV (retrovirus) |

*\\*Influenza is unusual — it replicates in the nucleus despite being an RNA virus.*

> 🧬 **Key principle**: All viruses must produce mRNA that host ribosomes can translate. The genome type determines *how* that mRNA is produced.

### Why RNA Viruses Mutate Faster
- RNA-dependent RNA polymerase (RdRp) **lacks proofreading** ability
- Error rate: ~1 mutation per 10,000 nucleotides copied
- Compare to DNA polymerase: ~1 error per 1,000,000,000 nucleotides
- This drives rapid viral evolution and drug resistance
      `
    },
    {
      id: 'vir3-release',
      type: 'text' as const,
      content: `
## Assembly & Release

### Enveloped Virus Release: Budding
1. Viral glycoproteins are synthesized in the ER and transported to the plasma membrane
2. Nucleocapsid assembles in the cytoplasm (or nucleus)
3. Nucleocapsid moves to the membrane region containing viral glycoproteins
4. Membrane wraps around the nucleocapsid → virus **buds off**
5. Host cell may survive and continue producing viruses

> 💡 Budding allows **chronic, persistent infection** — the host cell isn't destroyed immediately.

### Naked Virus Release: Lysis
- Non-enveloped viruses accumulate inside the cell
- Cell eventually lyses, releasing all virions at once
- This kills the host cell (similar to bacteriophage lytic cycle)

### Comparison

| Feature | Budding (Enveloped) | Lysis (Naked) |
|---------|-------------------|---------------|
| Host cell fate | May survive | Destroyed |
| Release timing | Gradual, continuous | All at once |
| Immune evasion | Host membrane disguise | Less evasion |
| Environmental stability | Fragile | Hardy |
      `
    },
    {
      id: 'vir3-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'Positive-sense ssRNA can be directly ___ by host ribosomes without modification',
            options: ['transcribed', 'translated', 'replicated', 'reverse transcribed']
          },
          {
            label: 'Enveloped viruses typically exit the host cell by ___, acquiring their lipid membrane',
            options: ['lysis', 'budding', 'exocytosis', 'binary fission']
          },
          {
            label: 'RNA viruses mutate faster than DNA viruses because RNA-dependent RNA polymerase lacks ___',
            options: ['a template strand', 'proofreading ability', 'nucleotides', 'ribosomes']
          },
          {
            label: 'SARS-CoV-2 enters human cells by binding to the ___ receptor',
            options: ['CD4', 'CR2', 'ACE2', 'sialic acid']
          }
        ],
        correctAnswers: ['translated', 'budding', 'proofreading ability', 'ACE2'],
        hint1: '(+) sense RNA acts just like mRNA — ribosomes can use it directly.',
        hint2: 'Enveloped viruses acquire their membrane from the host cell surface.',
        hint3: 'DNA polymerase can proofread but RdRp cannot — leading to high error rates.',
        explanation: '(+)ssRNA serves as mRNA and is directly translated. Enveloped viruses bud through the plasma membrane. RdRp lacks proofreading (3′→5′ exonuclease activity), causing high mutation rates. SARS-CoV-2 uses ACE2 as its primary receptor.'
      }
    }
  ]
};
