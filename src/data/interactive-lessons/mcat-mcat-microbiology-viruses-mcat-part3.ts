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

Two corollaries worth deriving, not memorizing: purified (+)RNA genomes alone can launch an infection (ribosomes accept them directly); purified (−)RNA or dsRNA genomes CANNOT (the required RdRp was in the discarded virion). And host cells have NO RNA-dependent RNA polymerase — virtually every RNA virus except retroviruses must encode one.

### The Retrovirus Exception to the Central Dogma

HIV carries two (+)RNA copies plus **reverse transcriptase (RT)**: RNA → dsDNA, which **integrase** inserts into the host genome as a **provirus** — permanent, replicated with every cell division (the molecular reason HIV cannot be cured by suppressing replication alone; compare lysogeny). Host RNA polymerase II then transcribes progeny genomes and mRNA; **protease** matures the budding particle. Each enzyme is a drug target: RT inhibitors (nucleoside chain terminators like AZT), integrase inhibitors, protease inhibitors. RT is **error-prone with no proofreading** → HIV's ferocious mutation rate → combination therapy (HAART) is mandatory: a single drug fails because resistant mutants already exist in the viral population before treatment begins.

<!-- yield:low -->
- That pre-existing-mutant argument is the Luria-Delbruck logic: resistance mutations arise at random, and the drug only selects them.
<!-- /yield -->

### RNA Virus Sloppiness & Its Consequences

Most viral RdRps also lack proofreading (coronaviruses are a rare exception): mutation rates thousands of times or more above DNA-based genomes. Consequences: quasispecies swarms and rapid antigenic **drift** (point mutations in surface proteins — why flu vaccines update annually).

<!-- yield:low -->
- A third consequence: strict genome-size ceilings — past them, mutations accumulate faster than selection can purge them (error catastrophe).
<!-- /yield -->

**Segmented** genomes (influenza's 8 RNA pieces) add **reassortment**: two strains co-infecting one cell shuffle whole segments — antigenic **shift**, the pandemic mechanism (covered further in Part 4).

### Envelope Acquisition & Latency

Enveloped animal viruses bud through a host membrane pre-studded with viral glycoproteins — plasma membrane (HIV, flu) or internal membranes (herpesviruses first bud through the nuclear envelope). Some DNA viruses establish **latency** without integration: herpesviruses persist as circular episomes in neurons, reactivating under stress — same strategic idea as lysogeny, different molecular bookkeeping (episome vs provirus vs prophage).`
    },
    {
      id: 'vir3-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Strategy Deduction

**Problem 1.** Virus X is tested with three probes: (1) a drug that blocks DNA-templated transcription leaves its replication unaffected; (2) its purified genome is NOT infectious; (3) its virions contain a polymerase.

- **(a)** Which genome classes does probe 1 rule out?
- **(b)** Which class does probe 2 rule out?
- **(c)** What must the genome be, given probe 3?
- **(d)** What single further test finishes the classification?

**(a) Probe 1.** No DNA step anywhere, which rules out DNA viruses AND retroviruses (whose proviral transcription needs a DNA template).

**(b) Probe 2.** A genome that is not infectious on its own is not (+) ssRNA.

**(c) Probe 3.** A packaged polymerase confirms an RdRp-carrying RNA virus: **(−) ssRNA or dsRNA**.

**(d) Splitting the pair.** Treat the genome with an RNase that cuts single-stranded RNA: dsRNA resists it, ssRNA is destroyed. These three classic probes (DNA-transcription blocker, naked-genome infectivity, virion polymerase) bin every genome class.

<!-- yield:low -->
- The classic DNA-templated transcription inhibitor used in this test is actinomycin D.
<!-- /yield -->

**Problem 2.** Four drugs act during a single round of HIV infection: a protease inhibitor, a CCR5 antagonist, an integrase inhibitor and a nucleoside RT inhibitor (NRTI).

- **(a)** Which drug acts first, and at what step?
- **(b)** Where does the NRTI act?
- **(c)** What does the integrase inhibitor prevent, and why is that step decisive for the cell?
- **(d)** What does the protease inhibitor block, and what does the cell still make?

**(a) CCR5 antagonist.** It blocks co-receptor binding at ENTRY (steps 1-2), before anything else happens.

**(b) NRTI.** It chain-terminates viral DNA synthesis in the cytoplasm (within step 4, synthesis: reverse transcription).

**(c) Integrase inhibitor.** It prevents proviral insertion (within step 4: integration). Integration is the point of no return: after it, the cell is a permanent reservoir.

**(d) Protease inhibitor.** It blocks maturation of budding particles (steps 5-6); the cell still releases virions, but they are non-infectious. "Reversibility" questions are really asking whether integration has happened yet.

**Problem 3.** Two influenza strains co-infect one cell. The patient has antibodies against strain A's HA; strain B's HA is novel. Some progeny permanently encode B's HA with A's other seven segments.

- **(a)** Is this drift, shift or phenotypic mixing?
- **(b)** Which feature of the progeny rules out each alternative?
- **(c)** Why does this require influenza's genome structure?

**(a) Shift.** Whole SEGMENTS were exchanged and the change is heritable: **reassortment = antigenic shift**. A hybrid now carries a surface protein the population has never seen, giving it pandemic potential.

**(b) Ruling out the others.** A whole HA gene was swapped at once, not changed by gradual point mutation, so it is not drift. The progeny ENCODE B's HA permanently; phenotypic mixing only wraps a genome in the other strain's proteins, and one generation later the coat matches the genes again.

**(c) Segments.** Reassortment swaps whole genome pieces, so it needs a segmented genome like influenza's 8 RNA segments; non-segmented viruses can only drift. Ask: heritable or cosmetic? Gradual or wholesale?`
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
            yield: 'HIGH',
            explanation: `Ribosomes translate (+) sense RNA immediately — including making new RdRp — so the naked poliovirus genome suffices. A (−) sense genome like rabies is untranslatable; without the RdRp packaged in the virion, which is discarded when only RNA is transfected, there is no way to produce mRNA, and host cells possess no RNA-dependent RNA polymerase to help. Poliovirus RNA is linear, and rabies replicates in the cytoplasm, not the nucleus.`
          },
          {
            question: `Antiretroviral therapy fully suppresses HIV replication for years, yet stopping the drugs allows the virus to rebound from the patient's own cells. The reservoir exists because:`,
            options: [`Reverse transcriptase remains active in plasma`, `Extracellular virions persist in bone marrow`, `The envelope protects virions from drugs indefinitely`, `Integrated provirus persists in long-lived cells`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Integrase writes the viral genome permanently into host chromosomes; resting memory T cells carry this provirus for decades, invisible to drugs that only block NEW infection events. Cell division faithfully copies the provirus like any other gene through normal cellular DNA replication — the same persistence logic as a prophage.`
          },
          {
            question: `A newly isolated virus has a genome that resists an RNase that cuts only single-stranded RNA, and its virions carry an RNA-dependent RNA polymerase. Its genome is most likely:`,
            options: [`(+) single-stranded RNA`, `Double-stranded RNA`, `(−) single-stranded RNA`, `Double-stranded DNA`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Packaged RdRp marks a genome that ribosomes cannot read on arrival: (−) RNA or dsRNA, whose + strand is locked in the duplex. Resistance to a single-strand-specific RNase then picks dsRNA. A (+) single-stranded genome would be cut by that RNase and needs no packaged polymerase, since it is translated on arrival. A (−) single-stranded genome would carry RdRp but would also be cut. A dsDNA genome is untouched by any RNase, but DNA viruses use the host's RNA polymerase and pack no RdRp.`
          },
          {
            question: `Nucleoside analogs like AZT selectively inhibit HIV because, once phosphorylated, they are incorporated by reverse transcriptase and terminate the DNA chain. Selectivity over host DNA synthesis arises because:`,
            options: [`Host kinases cannot phosphorylate AZT to its active form`, `AZT is taken up only by HIV-infected T cells`, `RT incorporates it far more readily than host polymerases`, `Host replicative polymerases synthesize RNA, not DNA`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Selectivity is quantitative: RT's active site is sloppier — it binds and incorporates the 3'-azido analog far more readily than host DNA polymerases do and, lacking 3'-to-5' exonuclease proofreading, cannot remove it. High-fidelity host replicases discriminate against and excise such analogs far better. Host kinases do phosphorylate AZT, and it enters uninfected cells too, so the selectivity must come from the polymerase.`
          },
          {
            question: `Influenza virus, unusually for an RNA virus, replicates in the nucleus, and herpesvirus establishes lifelong latency in neurons WITHOUT integrating. Herpes latency is maintained as:`,
            options: [`A linear genome inserted by viral integrase`, `A circular episome persisting in the nucleus`, `Continuous low-level lytic replication`, `A dsRNA intermediate kept in the cytoplasm`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Herpesviral DNA circularizes and persists as a nonintegrated episome in the nucleus; latency-associated transcripts keep it quiet, expressing few genes, and stress reactivates full lytic gene expression. Contrast the three persistence bookkeeping systems: prophage (integrated, phage), provirus (integrated, retrovirus), episome (not integrated, herpes).`
          }
        ]
      }
    },
    {
      id: 'vir3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Route to mRNA.** dsDNA uses host polymerase; (+) RNA is mRNA itself; (−) RNA and dsRNA must pack RdRp, which hosts lack.
- **HIV's path.** RT copies RNA to DNA and integrase inserts a permanent provirus; RT, integrase and protease are drug targets.
- **No proofreading.** Error-prone RdRp and RT drive quasispecies and antigenic drift, and make combination therapy mandatory.
- **Persistence modes.** Prophage (phage) and provirus (HIV) are integrated; the herpes episome persists without integrating.

**Common traps**

- **Polymerase in a (+) RNA virion.** A (+) RNA genome is translated on arrival; a packaged RdRp signals a (−) RNA or dsRNA genome.
- **Shift by point mutation.** Gradual point mutations are drift; shift is whole-segment reassortment in a co-infected cell.
- **Single-drug HIV therapy.** Resistant mutants already exist before treatment, so one drug fails; combination therapy is required.
- **Herpes latency as integration.** Herpesviruses persist as nonintegrated episomes in the nucleus, unlike a provirus or prophage.

<!-- yield:low -->
**Low-yield extras**

- The pre-existing-resistant-mutant argument is the Luria-Delbruck logic; error catastrophe caps RNA genome size; actinomycin D is the classic DNA-templated transcription blocker used to rule out DNA steps
<!-- /yield -->`
    }
  ]
};
