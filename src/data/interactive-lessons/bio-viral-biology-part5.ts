export const bioViralBiologyPart5Data = {
  topicSlug: 'viral-biology',
  sections: [
    {
      id: 'vir5-intro',
      type: 'text' as const,
      content: `
# 🔄 Viral Evolution

Viruses evolve faster than any other biological entity. Their rapid mutation rates, short generation times, and massive population sizes make them powerful models of **natural selection in action**.

### What You'll Learn
- Why RNA viruses evolve so quickly
- Antigenic drift vs antigenic shift
- Quasispecies and viral fitness
- Zoonotic spillover and pandemic emergence
- How evolution drives drug resistance
      `
    },
    {
      id: 'vir5-mutation-rates',
      type: 'text' as const,
      content: `
## Why Viruses Evolve So Fast

### Drivers of Rapid Viral Evolution

| Factor | Explanation |
|--------|-------------|
| **High mutation rate** | RdRp and reverse transcriptase lack proofreading (~10⁻⁴ errors/nt) |
| **Short generation time** | New viral generation every 8–72 hours |
| **Huge population size** | A single infected cell can produce 10³–10⁵ virions |
| **Strong selection pressure** | Immune system, antiviral drugs, host barriers |
| **Recombination** | Co-infection allows genome segment exchange |
| **Small genome size** | Single mutations can have large phenotypic effects |

### Mutation Rates by Genome Type

| Virus Type | Error Rate (per nucleotide) | Example |
|------------|---------------------------|---------|
| RNA viruses | ~10⁻⁴ | Influenza, HIV |
| Retroviruses | ~10⁻⁴ to 10⁻⁵ | HIV |
| ssDNA viruses | ~10⁻⁴ to 10⁻⁵ | Parvovirus |
| dsDNA viruses | ~10⁻⁶ to 10⁻⁸ | Herpesvirus |
| Host DNA polymerase | ~10⁻⁹ to 10⁻¹⁰ | Human genome |

> 🧬 RNA viruses are near the **error threshold** — the maximum mutation rate that still allows preservation of essential genetic information. Higher rates would cause "error catastrophe."
      `
    },
    {
      id: 'vir5-drift-shift',
      type: 'text' as const,
      content: `
## Antigenic Drift vs Antigenic Shift

These two mechanisms are crucial for understanding **influenza evolution** and why we need new flu vaccines every year.

### Antigenic Drift
- **Mechanism**: Point mutations accumulate in genes encoding surface proteins (hemagglutinin HA, neuraminidase NA)
- **Result**: Gradual change in antigenic properties
- **Occurs in**: All viruses (especially RNA viruses)
- **Immune consequence**: Reduced recognition by existing antibodies → seasonal epidemics
- **Vaccine impact**: Requires annual reformulation of flu vaccines

### Antigenic Shift
- **Mechanism**: Two different influenza strains co-infect the same cell → **reassortment** of genome segments
- **Result**: A completely novel combination of surface proteins
- **Occurs in**: Only segmented viruses (influenza A has 8 RNA segments)
- **Immune consequence**: Population has little to no immunity → **pandemic potential**
- **Example**: 2009 H1N1 "swine flu" — reassortment of human, swine, and avian flu segments

| Feature | Antigenic Drift | Antigenic Shift |
|---------|----------------|-----------------|
| Mechanism | Point mutations | Reassortment of genome segments |
| Speed of change | Gradual | Sudden, dramatic |
| Outcome | Seasonal epidemics | Pandemics |
| Applies to | All viruses | Segmented viruses (influenza A) |
| Predictability | Somewhat predictable | Unpredictable |

> 🔑 Drift = gradual, shift = sudden. Think: "Drift" is like a boat drifting slowly; "Shift" is like shifting gears — a big, sudden change.
      `
    },
    {
      id: 'vir5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A new strain of influenza A emerges with a hemagglutinin subtype never before seen in humans. This is most likely the result of:',
            options: [
              'Antigenic drift through accumulated point mutations',
              'Antigenic shift through reassortment in a co-infected host',
              'Crossing over during meiosis',
              'Horizontal gene transfer from bacteria'
            ],
            correctAnswer: 1,
            explanation: 'A completely novel hemagglutinin subtype indicates reassortment (antigenic shift), where genome segments from different influenza strains combined in a co-infected cell. Drift would produce gradual changes to existing subtypes, not entirely new ones.'
          },
          {
            question: 'Why do RNA viruses evolve faster than DNA viruses?',
            options: [
              'RNA viruses have larger genomes',
              'RNA viruses infect more host species',
              'RNA-dependent RNA polymerase lacks proofreading exonuclease activity',
              'RNA is more chemically stable than DNA'
            ],
            correctAnswer: 2,
            explanation: 'RdRp lacks the 3′→5′ proofreading exonuclease found in DNA polymerases. This results in error rates ~10,000× higher than DNA replication, driving rapid evolution.'
          }
        ]
      }
    },
    {
      id: 'vir5-zoonosis',
      type: 'text' as const,
      content: `
## Zoonotic Spillover & Pandemic Emergence

A **zoonosis** is an infectious disease that jumps from animals to humans. Most emerging infectious diseases are zoonotic in origin.

### Steps in Zoonotic Spillover
1. **Reservoir host** harbors the virus (often bats, rodents, birds)
2. **Intermediate host** amplifies the virus and bridges the gap to humans
3. **Spillover event** — virus enters human population
4. **Adaptation** — mutations allow human-to-human transmission
5. **Sustained transmission** → epidemic or pandemic

### Major Zoonotic Viruses

| Virus | Reservoir | Intermediate Host | Disease |
|-------|-----------|-------------------|---------|
| **SARS-CoV** | Horseshoe bats | Palm civets | SARS (2003) |
| **MERS-CoV** | Bats | Dromedary camels | MERS (2012) |
| **SARS-CoV-2** | Bats (probable) | Under investigation | COVID-19 (2019) |
| **Ebola** | Fruit bats | Apes, other mammals | Ebola hemorrhagic fever |
| **HIV** | Chimpanzees (SIV) | None (direct) | AIDS |
| **Influenza A** | Wild waterfowl | Pigs, poultry | Seasonal flu, pandemics |

### RNA Quasispecies
Within a single infected individual, an RNA virus population exists as a **quasispecies** — a swarm of closely related but genetically distinct variants:
- No two viral genomes are exactly identical
- Natural selection acts on the population as a whole
- Pre-existing variants may already be resistant to drugs or immune responses
- This concept explains why HIV treatment requires combination therapy

> 💡 A viral quasispecies is like a "cloud" of mutations around a consensus sequence — the population's diversity is its evolutionary strategy.
      `
    },
    {
      id: 'vir5-dropdown1',
      type: 'dropdown-select' as const,
      content: `**Fill in the Blanks** 🔍`,
      exercise: {
        dropdowns: [
          {
            label: 'The gradual accumulation of point mutations in viral surface proteins is called antigenic ___',
            options: ['shift', 'drift', 'recombination', 'conversion']
          },
          {
            label: 'Antigenic shift occurs through ___ of genome segments from different viral strains',
            options: ['mutation', 'translocation', 'reassortment', 'transduction']
          },
          {
            label: 'Diseases that jump from animals to humans are called ___',
            options: ['endemic diseases', 'autoimmune diseases', 'zoonoses', 'nosocomial infections']
          },
          {
            label: 'A population of closely related viral variants within a host is called a ___',
            options: ['serotype', 'genotype', 'quasispecies', 'clade']
          }
        ],
        correctAnswers: ['drift', 'reassortment', 'zoonoses', 'quasispecies'],
        hint1: 'Think of a boat drifting — slow, gradual change from mutations.',
        hint2: 'Influenza has 8 segments that can be mixed and matched — this is reassortment.',
        hint3: 'The term comes from "zoo-" meaning animal and "-nosis" meaning disease.',
        explanation: 'Antigenic drift is gradual mutation. Antigenic shift is sudden reassortment of segmented genomes. Zoonoses are animal-to-human disease jumps. A quasispecies is the diverse cloud of viral variants generated by error-prone replication.'
      }
    }
  ]
};
