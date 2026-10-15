export const bioEvidencePart5Data = {
  topicSlug: 'evidence-evolution',
  sections: [
    {
      id: 'bio-evidence-evolution-p5-s1-intro',
      type: 'text' as const,
      content: `
# 🦴 Evidence of Evolution

**Part 5 of 7 — Continuing Evolution**

---

| Section |
|---------|
| Evolution is happening now |
| Worked example: how antibiotic resistance evolves |
| Pesticides, herbicides, and chemotherapy |
| Pathogens and emerging diseases |
| Evolution measured in the wild |
| Misconceptions to avoid |

> 🔑 **Key Concept:** All species have evolved and **continue to evolve**. Populations change whenever heritable variation meets selection, so evolution can be measured within years when generations are short or selection is strong.

### Evolution is happening now

Parts 1–4 reconstructed the past. Part 5 looks at evolution we can **watch**. The CED lists four kinds of evidence that populations continue to evolve:

| Evidence | What is observed | Example |
|----------|------------------|---------|
| **Genomic changes over time** | DNA sequences in a population shift across generations | Laboratory *E. coli* populations, sequenced every few hundred generations, accumulate new mutations; one population evolved the ability to use citrate as food after more than 30,000 generations |
| **Continuous change in the fossil record** | Gradual shifts in form through successive layers | Shells of single-celled marine organisms change shape layer by layer in deep-sea sediment cores |
| **Resistance to chemicals** | Populations stop responding to a chemical that once controlled them | Antibiotics, pesticides, herbicides, chemotherapy drugs |
| **Pathogens evolve and cause emerging diseases** | New strains spread and evade immunity or treatment | Influenza strains, drug-resistant HIV, new variants of coronaviruses |

All four share one mechanism you already know from natural selection: **variation** exists, some variants **survive and reproduce** more under current conditions, and their alleles become **more common** in the next generation.
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s2-resistance',
      type: 'text' as const,
      content: `
### Worked example: how antibiotic resistance evolves

A patient's infection contains about **2 billion** bacteria. Suppose that, by chance, **1 in 100 million** cells carries a mutation that makes it resistant to a particular antibiotic.

**Step 1 — Variation exists before treatment.**
$$2 \\times 10^{9} \\times \\frac{1}{10^{8}} = 20 \\text{ resistant cells}$$
These mutations arose randomly during DNA replication. The antibiotic did not create them.

**Step 2 — The antibiotic is the selective pressure.** The drug kills the susceptible cells. The 20 resistant cells survive.

**Step 3 — Survivors reproduce.** Under good conditions some bacteria divide every 20–30 minutes. If the survivors divide every 30 minutes, 5 hours is 10 doublings:
$$20 \\times 2^{10} = 20{,}480 \\text{ cells}$$
Within a day the resistant lineage can number in the billions.

**Step 4 — The population has evolved.** Before treatment, resistant cells were 0.000001% of the population. After treatment, nearly 100% are resistant. The **allele frequency** changed; no individual cell changed.

#### Why resistance spreads so quickly in bacteria

| Factor | Effect |
|--------|--------|
| Huge population sizes | Even rare mutations are present somewhere |
| Short generation times | Many generations per day |
| Strong selection | Antibiotics kill nearly all susceptible cells |
| Horizontal gene transfer | Resistance genes on plasmids can pass between cells, even between species |

#### Evidence that resistance is selected, not induced

In the early 1950s, Joshua and Esther Lederberg grew bacterial colonies on a plate without any antibiotic, then pressed a velvet pad onto it and transferred the exact pattern of colonies onto a plate **with** the antibiotic (**replica plating**). Only a few colonies grew on the antibiotic plate. When they went back to the matching colonies on the **original** plate, which had never touched the drug, those colonies were already resistant. The resistance mutations existed **before** exposure; the antibiotic only revealed and selected them.

> 🔑 **AP Connection:** Strong answers about resistance always contain three parts: (1) heritable variation already exists, (2) the chemical kills or reduces reproduction of non-resistant individuals, (3) resistant individuals reproduce, so the resistance allele increases in frequency in the **population**.
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s3-check',
      type: 'multiple-choice' as const,
      content: `**Concept Check — How Resistance Evolves** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A population of bacteria is treated with an antibiotic. A few cells survive, and the population that regrows is mostly resistant. Which explanation is best supported?',
            options: [
              'The antibiotic caused new mutations that gave cells resistance',
              'Surviving cells adjusted their genes to tolerate the drug',
              'Resistant cells already present survived and reproduced',
              'Each cell built up tolerance after repeated contact with the drug'
            ],
            correctAnswer: 2,
            explanation: 'The resistant variants existed before treatment; the antibiotic killed susceptible cells, and the survivors produced the next generation. Drugs do not direct mutations, and individual cells do not adjust their genes or build tolerance that they pass on.'
          },
          {
            question: 'In replica-plating experiments, the colonies that grew on antibiotic plates matched colonies on an original plate that had never been exposed to the antibiotic. Which conclusion does this support?',
            options: [
              'The drug induces resistance only in cells that need it',
              'Resistance mutations arose before cells ever met the drug',
              'Resistance spreads from colony to colony through the agar',
              'Antibiotics lose strength when transferred between plates'
            ],
            correctAnswer: 1,
            explanation: 'The resistant colonies were already resistant on a plate the drug never touched, so the mutations came first and the antibiotic only selected them. Matching colony positions rule out spread through the agar, and the result does not depend on a weaker drug.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s4-chemicals',
      type: 'text' as const,
      content: `
### Pesticides, herbicides, and chemotherapy

The same logic applies to any chemical used to control a population:

| Chemical | Target population | Observed result |
|----------|------------------|-----------------|
| **Pesticides** | Insects such as mosquitoes and crop pests | Many insect populations no longer respond to insecticides like DDT; some crop pests resist toxins engineered into crops |
| **Herbicides** | Weeds in farm fields | Dozens of weed species have evolved resistance to glyphosate after years of repeated spraying |
| **Chemotherapy** | Cancer cells inside one patient | A tumor shrinks, then regrows from cells that tolerate the drug, so the relapsed tumor no longer responds |

The cancer example is worth pausing on. A tumor is a population of dividing cells with mutations. Chemotherapy is a selective pressure, and cells that happen to tolerate the drug leave descendants. Evolution by natural selection is happening **within a single patient's body**.

#### Reducing the spread of resistance

Understanding evolution suggests strategies:

- **Use drugs only when needed** (for example, antibiotics do nothing against viral infections), which reduces selection for resistance.
- **Take antibiotics only as prescribed and never share leftovers**, so drugs are not used at doses or for infections where they select resistant cells without clearing the infection.
- **Combine treatments**, so that a cell must carry resistance to several drugs at once to survive. The chance of having all those mutations at the same time is the product of the individual chances, which is very small.
- **Rotate pesticides and herbicides** and leave untreated refuges, so susceptible alleles stay in the population.

### Pathogens and emerging diseases

Viruses and bacteria with short generation times and high mutation rates evolve fast enough to cause **emerging diseases**: new or newly changed pathogens that spread in populations.

- **Influenza.** The virus's surface proteins change as mutations accumulate, so antibodies made against last year's strain recognize this year's strain less well. The flu vaccine is reformulated **every year** to match the strains predicted to circulate.
- **HIV.** HIV copies its genome with an error-prone enzyme, producing many variants within a single infected person. A single drug selects for resistant variants, so HIV is treated with a **combination** of drugs.
- **New variants.** Coronavirus variants that spread more easily replaced earlier variants within months, a change in viral allele frequency tracked by sequencing patient samples worldwide.
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s5-input',
      type: 'input-boxes' as const,
      content: `
**Evolution by the Numbers** 🧮

Enter numbers only.
      `,
      exercise: {
        questions: [
          {
            question: 'A population of 3 billion bacteria contains resistant cells at a frequency of 1 in 100 million. How many resistant cells are present before treatment?',
            answer: '30',
            acceptableAnswers: ['thirty'],
            explanation: '(3 × 10⁹) ÷ 10⁸ = 30 resistant cells, all present before any antibiotic is used.'
          },
          {
            question: 'After treatment, 30 resistant cells survive and divide every 30 minutes. How many cells are there after 3 hours, assuming none die?',
            answer: '1920',
            acceptableAnswers: ['1,920', '1 920'],
            explanation: '3 hours is 6 doublings, so 30 × 2⁶ = 30 × 64 = 1,920 cells.'
          },
          {
            question: 'In an illustrative finch dataset, mean beak depth rose from 8.0 mm before a drought to 8.4 mm in the next generation. What is the percent increase?',
            answer: '5',
            acceptableAnswers: ['5%', '5 percent', '5.0'],
            explanation: 'The change is 0.4 mm, and 0.4 ÷ 8.0 = 0.05, a 5% increase in mean beak depth across one generation.'
          }
        ],
        hint1: 'Divide the population size by 100,000,000.',
        hint2: 'Count doublings first: one every 30 minutes, so 2 per hour.',
        hint3: 'Percent change = (new − old) ÷ old × 100.'
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s6-wild',
      type: 'text' as const,
      content: `
### Evolution measured in the wild: Darwin's finches

Peter and Rosemary Grant measured the medium ground finches on Daphne Major, a small Galápagos island, for decades. They banded nearly every bird and recorded beak depth, survival, and parentage.

**What happened in 1977:**

1. A severe drought cut seed production. Small, soft seeds were eaten first and ran out.
2. The remaining food was mostly large, hard seeds that only birds with **deeper, stronger beaks** could crack efficiently.
3. Most of the population died. Survivors had, on average, **deeper beaks** than the birds that died.
4. Beak depth is highly heritable, so the offspring of survivors also had deeper beaks. The **mean beak depth of the next generation was measurably greater** than before the drought.

Later droughts showed that the direction of change depends on conditions: when a larger competitor species took most of the large seeds in a drought in the mid-2000s, smaller-beaked medium ground finches were favored instead. Selection tracks the environment; it has no fixed direction.

### Humans are still evolving too

In some human populations with a long history of dairying, alleles that keep the lactase enzyme active into adulthood rose to high frequency over the last several thousand years. Adults with those alleles could digest milk, an advantage where milk was a major food. Evolution did not stop when modern humans appeared.

### Misconceptions to avoid

| Misconception | What is actually true |
|---------------|-----------------------|
| "The antibiotic caused the bacteria to mutate." | Resistance mutations arise randomly; the drug **selects** among existing variants. |
| "Individual bacteria (or finches) evolved." | **Populations** evolve. Individuals survive or die, and allele frequencies change across generations. |
| "Organisms evolve traits because they need them." | Evolution has **no goal**. Natural selection acts only on variation that already exists. |
| "Traits acquired during life are passed on." | A finch that strains its beak on hard seeds does not pass on a deeper beak. Only heritable variation counts. |
| "Evolution happened in the past and is too slow to see." | Resistance, the Grants' finches, and viral variants show evolution within years. |
| "Evolution is just a theory, so it is a guess." | A scientific theory is a well-tested explanation supported by many independent lines of evidence, as this whole topic shows. |
      `
    },
    {
      id: 'bio-evidence-evolution-p5-s7-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Practice — Ongoing Evolution** 🎯`,
      exercise: {
        questions: [
          {
            question: 'During a drought, small soft seeds became scarce, and medium ground finches with deeper beaks survived at higher rates. Their offspring had a greater mean beak depth. Which statement best describes what evolved and how?',
            options: [
              'Each surviving bird, by growing a deeper beak during the drought',
              'The population, through a shift in the frequency of beak-size alleles',
              'The offspring, by inheriting the beak changes their parents acquired',
              'Each surviving bird, by strengthening its beak on large hard seeds'
            ],
            correctAnswer: 1,
            explanation: 'Natural selection changed which alleles were passed on, so the population evolved through a change in allele frequencies. Individual birds did not change their beaks in a heritable way, and traits acquired during life are not inherited.'
          },
          {
            question: 'Why is HIV infection usually treated with a combination of several drugs instead of one drug at a time?',
            options: [
              'Several drugs together stop the virus from mutating at all',
              'Each drug alone grows weaker over time unless paired with another',
              'One drug at a time causes the virus to make targeted mutations',
              'A single virus is unlikely to carry resistance to several drugs at once'
            ],
            correctAnswer: 3,
            explanation: 'Resistance to each drug requires a separate chance mutation, and the probability of one virus carrying all of them at once is very small, so combination therapy slows the evolution of resistance. Drugs do not stop mutation or cause targeted mutations.'
          },
          {
            question: 'Why must the seasonal influenza vaccine be reformulated every year?',
            options: [
              'Viral surface proteins change as mutated strains spread',
              'Immunity from flu vaccines lasts a few weeks at most',
              'The vaccine pushes the virus to mutate into new forms',
              'People lose all of their memory cells against flu each spring'
            ],
            correctAnswer: 0,
            explanation: 'Mutations alter the virus surface proteins, and strains that evade existing antibodies spread, so last year\'s vaccine matches the new strains poorly. The vaccine does not cause mutations, and immune memory does not reset each year.'
          }
        ]
      }
    },
    {
      id: 'bio-evidence-evolution-p5-s8-summary',
      type: 'text' as const,
      content: `
### Part 5 Summary

| Concept | Key detail |
|---------|-----------|
| Ongoing evolution | Genomic change, continuous fossil change, resistance, and emerging pathogens |
| Resistance | Random mutations exist first; chemicals select; resistant survivors reproduce |
| Replica plating | Showed resistance existed before exposure to the antibiotic |
| Chemotherapy | Tumors evolve resistance inside one patient |
| Pathogens | High mutation rates and short generations drive new flu strains and drug-resistant HIV |
| Grants' finches | 1977 drought: deeper beaks survived; offspring had greater mean beak depth |
| Who evolves | Populations, through allele-frequency change; individuals do not |

**Up next → Part 6: AP Practice — Evaluating Evidence for Evolution**
      `
    }
  ]
};
