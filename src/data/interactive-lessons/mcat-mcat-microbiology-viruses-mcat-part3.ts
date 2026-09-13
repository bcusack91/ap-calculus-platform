export const mcatVirusesPart3Data = {
  topicSlug: 'mcat-microbiology-viruses-mcat',
  sections: [
    {
      id: 'vir3-intro',
      type: 'text' as const,
      content: `# Viruses

**Part 3 of 4 — Animal Virus Replication Strategies**

### One Question Organizes Everything: How Do You Make mRNA?

Host ribosomes only translate mRNA. Every genome type is a different distance from mRNA, and that distance dictates what the virion must CARRY versus what it can borrow:

| Genome | Route to mRNA | Must the virion pack a polymerase? | Replication site |
|--------|----------------|-------------------------------------|------------------|
| dsDNA (herpes, adeno) | Host RNA pol transcribes it | No | **Nucleus** (uses host machinery) |
| ssDNA (parvo) | Host pol makes it dsDNA first | No | Nucleus |
| (+) ssRNA (polio, corona) | Genome IS mRNA — translated immediately | **No** — naked genome is infectious | Cytoplasm |
| (−) ssRNA (influenza, rabies, measles) | Must be transcribed by **RdRp** | **Yes** — carries RNA-dependent RNA polymerase | Cytoplasm (influenza: nucleus) |
| dsRNA (rota) | (−) strand transcribed by packaged RdRp | **Yes** | Cytoplasm |
| Retrovirus (+) ssRNA (HIV) | RNA → DNA → integrate → host RNA pol | **Yes** — reverse transcriptase (+ integrase) | Both: RT in cytoplasm, integration/transcription in nucleus |

Two corollaries worth deriving, not memorizing: purified (+)RNA genomes alone can launch an infection (ribosomes accept them directly); purified (−)RNA or dsRNA genomes CANNOT (the required RdRp was in the discarded virion). And host cells have NO RNA-dependent RNA polymerase — every RNA virus except retroviruses must encode one.

### The Retrovirus Exception to the Central Dogma

HIV carries two (+)RNA copies plus **reverse transcriptase (RT)**: RNA → dsDNA, which **integrase** inserts into the host genome as a **provirus** — permanent, replicated with every cell division (the molecular reason HIV cannot be cured by suppressing replication alone; compare lysogeny). Host RNA polymerase II then transcribes progeny genomes and mRNA; **protease** matures the budding particle. Each enzyme is a drug target: RT inhibitors (nucleoside chain terminators like AZT), integrase inhibitors, protease inhibitors. RT is **error-prone with no proofreading** → HIV's ferocious mutation rate → combination therapy (HAART) is mandatory, single drugs fail by the Luria-Delbruck logic.

### RNA Virus Sloppiness & Its Consequences

Viral RdRps also lack proofreading: mutation rates ~10,000-fold above DNA-based genomes. Consequences: quasispecies swarms, rapid antigenic **drift** (point mutations in surface proteins — why flu vaccines update annually), and strict genome-size ceilings (error catastrophe). **Segmented** genomes (influenza's 8 RNA pieces) add **reassortment**: two strains co-infecting one cell shuffle whole segments — antigenic **shift**, the pandemic mechanism (covered further in Part 4).

### Envelope Acquisition & Latency

Enveloped animal viruses bud through a host membrane pre-studded with viral glycoproteins — plasma membrane (HIV, flu) or internal membranes (herpes buds from nuclear/ER membranes). Some DNA viruses establish **latency** without integration: herpesviruses persist as circular episomes in neurons, reactivating under stress — same strategic idea as lysogeny, different molecular bookkeeping (episome vs provirus vs prophage).`
    },
    {
      id: 'vir3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Replication Strategies** 🎯`,
      exercise: {
        questions: [
          {
            question: `Purified genomic RNA from poliovirus initiates a full infection when transfected into cells, but purified rabies virus RNA does not. The difference exists because:`,
            options: [`Rabies RNA is degraded faster by cytoplasmic host nucleases`, `Poliovirus RNA is circular and so resists nucleases`, `Polio RNA is (+) sense; rabies RNA needs packaged RdRp`, `Rabies needs the host nucleus to transcribe its RNA`],
            correctAnswer: 2,
            explanation: `Ribosomes translate (+) sense RNA immediately — including making new RdRp — so the naked poliovirus genome suffices. A (−) sense genome like rabies is untranslatable; without the RdRp packaged in the virion, which is discarded when only RNA is transfected, there is no way to produce mRNA, and host cells possess no RNA-dependent RNA polymerase to help. Poliovirus RNA is linear, and rabies replicates in the cytoplasm, not the nucleus.`
          },
          {
            question: `Antiretroviral therapy fully suppresses HIV replication for years, yet stopping the drugs allows the virus to rebound from the patient's own cells. The reservoir exists because:`,
            options: [`Reverse transcriptase remains active in plasma`, `Extracellular virions persist in bone marrow`, `The envelope protects virions from drugs indefinitely`, `Integrated provirus persists in long-lived cells`],
            correctAnswer: 3,
            explanation: `Integrase writes the viral genome permanently into host chromosomes; resting memory T cells carry this provirus for decades, invisible to drugs that only block NEW infection events. Cell division faithfully copies the provirus like any other gene through normal cellular DNA replication — the same persistence logic as a prophage.`
          },
          {
            question: `A novel virus replicates entirely in the cytoplasm and its virions contain an RNA-dependent RNA polymerase. Its genome CANNOT be:`,
            options: [`(+) single-stranded RNA`, `Double-stranded RNA`, `(−) single-stranded RNA`, `Segmented (−) RNA`],
            correctAnswer: 0,
            explanation: `A (+) RNA virus has no need to package a polymerase — its genome is translated on arrival, producing RdRp fresh. Packaged RdRp is the signature of genomes that ribosomes cannot read: (−) RNA and dsRNA (whose + strand is locked in the duplex). Watch for this 'what must the particle carry' inversion.`
          },
          {
            question: `Nucleoside analogs like AZT selectively inhibit HIV because, once phosphorylated, they are incorporated by reverse transcriptase and terminate the DNA chain. Selectivity over host DNA synthesis arises because:`,
            options: [`Host kinases cannot phosphorylate AZT to its active form`, `AZT is taken up only by HIV-infected T cells`, `RT incorporates it far more readily than host polymerases`, `Host replicative polymerases synthesize RNA, not DNA`],
            correctAnswer: 2,
            explanation: `Selectivity is quantitative: RT's active site is sloppier — it binds and incorporates the 3'-azido analog far more readily than host DNA polymerases do and, lacking 3'-to-5' exonuclease proofreading, cannot remove it. High-fidelity host replicases discriminate against and excise such analogs far better. Host kinases do phosphorylate AZT, and it enters uninfected cells too, so the selectivity must come from the polymerase. (Mitochondrial polymerase gamma is the collateral target behind toxicity.)`
          },
          {
            question: `Influenza virus, unusually for an RNA virus, replicates in the nucleus, and herpesvirus establishes lifelong latency in neurons WITHOUT integrating. Herpes latency is maintained as:`,
            options: [`A linear genome inserted by viral integrase`, `A circular episome persisting in the nucleus`, `Continuous low-level lytic replication`, `A dsRNA intermediate kept in the cytoplasm`],
            correctAnswer: 1,
            explanation: `Herpesviral DNA circularizes and persists as a nonintegrated episome in the nucleus; latency-associated transcripts keep it quiet, expressing few genes, and stress reactivates full lytic gene expression. Contrast the three persistence bookkeeping systems: prophage (integrated, phage), provirus (integrated, retrovirus), episome (not integrated, herpes).`
          }
        ]
      }
    },
    {
      id: 'vir3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Organize by the route to mRNA: dsDNA borrows host pol (nucleus); (+)RNA IS mRNA (naked genome infectious); (−)RNA and dsRNA must PACK RdRp; retroviruses pack RT
- Host cells have no RdRp — RNA viruses bring or immediately build their own
- HIV: RT → dsDNA → integrase → provirus (permanent reservoir) → host RNA pol II; RT, integrase, protease = the drug targets
- No proofreading in RdRp/RT → quasispecies, antigenic drift, mandatory combination therapy
- Segmented genomes reassort in co-infected cells → antigenic shift (pandemics)
- Persistence bookkeeping: prophage (phage, integrated), provirus (HIV, integrated), episome (herpes, not integrated)`
    },
    {
      id: 'vir3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Strategy Deduction

<details>
<summary><b>Example 1: Deduce the genome from three experiments</b></summary>

**Question:** Virus X: (a) replication is unaffected by actinomycin D (a DNA-templated transcription inhibitor); (b) its purified genome is NOT infectious; (c) virions contain a polymerase. Classify the genome.

**Solution:**
1. (a) No DNA step anywhere → rules out DNA viruses AND retroviruses (whose proviral transcription needs DNA templates).
2. (b) Not infectious alone → not (+) ssRNA.
3. (c) Packaged polymerase confirms it: **(−) ssRNA or dsRNA** — an RdRp-carrying RNA virus.
4. To split the final pair: check whether the genome is RNase-resistant when double-stranded (dsRNA) or sensitive (ss).

**MCAT Strategy:** The three classic probes — actinomycin D sensitivity, naked-genome infectivity, virion polymerase — uniquely bin every genome class. Practice the flowchart.
</details>

<details>
<summary><b>Example 2: Predict phenotypic mixing vs reassortment</b></summary>

**Question:** Two influenza strains co-infect one cell: strain A contributes an HA the patient has antibodies against; strain B's HA is novel. Some progeny permanently encode B's HA with A's other seven segments. Is this drift, shift, or phenotypic mixing?

**Solution:**
1. Whole SEGMENTS were exchanged and the change is heritable → **reassortment = antigenic shift**. A hybrid genotype now carries a surface protein the population has never seen: pandemic potential.
2. Drift would be gradual point mutations in HA, not a wholesale swap.
3. Phenotypic mixing is the transient case: a progeny genome wrapped in the OTHER strain's proteins without genetic change — one generation later, the coat matches the genes again.

**MCAT Strategy:** Ask two questions: is the change heritable (genome) or cosmetic (coat)? Gradual (drift) or wholesale (shift)? Segmented genomes are the prerequisite for shift.
</details>

<details>
<summary><b>Example 3: Order the HIV drug targets along the life cycle</b></summary>

**Question:** Arrange where these act in a single round of HIV infection: protease inhibitor, CCR5 antagonist, integrase inhibitor, nucleoside RT inhibitor — and state which steps are irreversible for that cell.

**Solution:**
1. **CCR5 antagonist** — blocks co-receptor binding at ENTRY (step 1-2).
2. **NRTI** — chain-terminates reverse transcription in the cytoplasm (step 4a).
3. **Integrase inhibitor** — prevents proviral insertion (step 4b). Integration is the point of no return: after it, the cell is a permanent reservoir.
4. **Protease inhibitor** — blocks maturation of budding particles (step 5-6); the cell still produces virions, but they are non-infectious.

**MCAT Strategy:** Anchor each drug to the numbered life-cycle step; 'reversibility' questions are really asking whether integration has occurred yet.
</details>`
    }
  ]
};
