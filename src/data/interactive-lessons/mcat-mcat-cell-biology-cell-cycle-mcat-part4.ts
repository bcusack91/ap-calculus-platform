export const mcatCellCyclePart4Data = {
  topicSlug: 'mcat-cell-biology-cell-cycle-mcat',
  sections: [
    {
      id: 'cc4-intro',
      type: 'text' as const,
      content: `# The Cell Cycle for the MCAT

**Part 4 of 4 — Experimental Methods & MCAT Integration**

### The Cycle Experimentalist's Toolkit

| Technique | What it measures | Typical passage read-out |
|-----------|------------------|--------------------------|
| Flow cytometry (DNA dye) | Phase distribution by DNA content | 2C peak (G$_1$), 4C peak (G$_2$/M), between = S |
| BrdU/EdU pulse | Cells replicating during the pulse | Labeled fraction ≈ S-phase fraction |
| BrdU pulse-**chase** | Movement of a cohort through the cycle | Time for labeled cells to reach mitosis = length of G$_2$ |
| Phospho-histone H3 stain | Mitotic cells specifically | Mitotic index |
| Mitotic index (microscopy) | Fraction of cells in M | Rises if cells arrest in M; falls if blocked earlier |
| ³H-thymidine autoradiography | Historical S-phase label | Same logic as BrdU |

### Synchronization — Making a Population March in Step

Asynchronous cultures blur phase-specific events; synchronization sharpens them:

- **Double thymidine block**: excess thymidine feedback-inhibits ribonucleotide reductase → dNTP imbalance stalls S phase; release, block again → all cells parked at the G$_1$/S border
- **Nocodazole block**: spindle poison → checkpoint arrest in M; gently shake off the rounded mitotic cells (**mitotic shake-off**)
- **Serum starvation**: withdraw growth factors → cells retreat to G$_0$; re-adding serum starts a synchronized G$_1$ cohort — also THE assay for restriction-point timing

> Restriction-point experiment: starve cells, re-feed with serum, then remove serum at increasing times. Cells given serum for less than ~R hours return to G$_0$; cells past R complete the entire cycle without serum. Commitment is all-or-none.

### Drug-Arrest Signatures (Combine With Flow Cytometry)

| Drug | Mechanism | Arrest profile |
|------|-----------|----------------|
| Hydroxyurea | Inhibits ribonucleotide reductase (no dNTPs) | Early S; cells pile just above 2C |
| Aphidicolin | Inhibits replicative DNA polymerases | G$_1$/S border and S |
| Methotrexate / 5-FU | Block thymidylate synthesis (antimetabolites) | S phase |
| Etoposide | Topoisomerase II poison → double-strand breaks | G$_2$ (damage checkpoint) |
| Nocodazole / vinblastine / paclitaxel | Spindle disruption | M (4C, condensed chromosomes, high mitotic index) |
| Palbociclib | CDK4/6 inhibitor | G$_1$ (2C) — only in Rb-intact cells |

### Cycle Arithmetic

For an asynchronous, steadily cycling population, the fraction of cells in a phase is proportional to that phase's duration:

$$\\frac{N_{phase}}{N_{total}} = \\frac{t_{phase}}{t_{cycle}}$$

Example: 5% mitotic cells with a 20-hour cycle → M lasts about $0.05 \\times 20 = 1$ hour. Growth of the whole population: $N = N_0 \\cdot 2^{t/t_{cycle}}$ — but only if every cell cycles (a tumor's **growth fraction** is usually well below 1, which is why doubling times exceed cycle times).`
    },
    {
      id: 'cc4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Cycle Experiments** 🎯`,
      exercise: {
        questions: [
          {
            question: `Cells are pulsed with BrdU for 15 minutes, washed, and sampled hourly. Labeled mitotic figures first appear 4 hours after the pulse. This 4-hour lag corresponds to:`,
            options: [`The duration of G$_2$ — the time for cells that were finishing S to reach mitosis`, `The duration of S phase`, `The duration of the entire cycle`, `The duration of G$_1$`],
            correctAnswer: 0,
            explanation: `Only S-phase cells took the label. The first labeled cells to reach mitosis are those that were at the very END of S during the pulse; their journey to M is exactly G$_2$. (The window during which labeled mitoses keep appearing then reports S-phase length.) This percent-labeled-mitoses design is the classic way phase durations were first measured, and its logic is pure MCAT.`
          },
          {
            question: `A population is treated with hydroxyurea, which depletes dNTP pools. Flow cytometry after 24 hours will show cells accumulated:`,
            options: [`At or just above 2C DNA content — arrested at entry into or early in S phase`, `Exclusively at 4C`, `At 8C, from re-replication`, `Evenly across all DNA contents`],
            correctAnswer: 0,
            explanation: `Without dNTPs, replication cannot proceed: cells reaching G$_1$/S stall immediately, and cells already in S stall with barely-begun synthesis. The population collects at ~2C (slightly above for those that had started). A 4C pile-up would indicate a G$_2$/M block; 8C would require re-replication, which licensing forbids. Matching a drug's biochemical target to its flow profile is a staple passage question.`
          },
          {
            question: `Fibroblasts are serum-starved, re-fed, and serum is then withdrawn from separate dishes at 2-hour intervals. Cells given at least 8 hours of serum divide even after withdrawal; cells given less return to quiescence. The experiment locates:`,
            options: [`The restriction point — about 8 hours into G$_1$, after which the cycle is growth-factor independent`, `The G$_2$/M checkpoint at 8 hours`, `The duration of mitosis`, `The time needed for serum to enter cells`],
            correctAnswer: 0,
            explanation: `Passing the restriction point means cyclin E-CDK2/Rb-E2F positive feedback has become self-sustaining: external mitogens are no longer required to finish the cycle. Cells short of that point still need serum-driven cyclin D and slip back to G$_0$. The all-or-none outcome at a sharp time threshold is the experimental signature of a bistable commitment switch.`
          }
        ]
      }
    },
    {
      id: 'cc4-deep',
      type: 'text' as const,
      content: `### Integrated Passage Reasoning — Worked Patterns

**Pattern 1: Order two drugs.** Cells treated with drug A arrest at 2C; drug B arrests at 4C with condensed chromosomes. Given sequentially, A-then-release-then-B synchronizes cells in M; B-then-release-then-A synchronizes at G$_1$/S. Arrest points tell you where in the cycle each drug's target acts, and release order becomes a scheduling tool.

**Pattern 2: Checkpoint status as a diagnostic.** Irradiate two cell lines; measure mitotic index over time.
- Line 1: mitotic index falls (cells arrest in G$_2$) → checkpoints intact
- Line 2: mitotic index unchanged, cells enter mitosis with broken chromosomes → checkpoint-deficient (p53 or ATM pathway loss)
- Caffeine (an ATM/ATR inhibitor at high doses in vitro) can convert line 1 into line 2 — "checkpoint override"

**Pattern 3: Growth fraction vs. cycle speed.** A tumor whose cells cycle every 2 days but with a growth fraction of 10% grows slower than a tissue cycling every 5 days with 100% participation. Chemotherapy that targets S or M phase spares the non-cycling 90% — the rationale for repeated dosing cycles, which catch cells as they re-enter.

**Pattern 4: Cancer + virus.** DNA tumor viruses disable the same two brakes cancers mutate: HPV **E6 degrades p53**, **E7 binds and inactivates Rb**. A passage describing a viral protein that binds a host protein and causes unscheduled S-phase entry is describing an Rb-binder; one that blocks damage-induced arrest and apoptosis is describing a p53 antagonist.

### Mitosis vs. Meiosis — One-Table Contrast (Bookkeeping Guard)

| Feature | Mitosis | Meiosis I | Meiosis II |
|---------|---------|-----------|------------|
| Separates | Sister chromatids | Homologous chromosomes | Sister chromatids |
| Products | 2 identical diploid cells | 2 haploid cells (chromatids still paired) | 4 haploid cells |
| Crossing over | No (normally) | Yes — prophase I | No |
| Reductional? | No (equational) | Yes (2n → n) | No (equational) |

The cell-cycle machinery (CDKs, APC/C, cohesin/separase) is shared; meiosis I protects centromeric cohesin (shugoshin) so only arm cohesin is cleaved — chromatids stay paired until meiosis II.`
    },
    {
      id: 'cc4-quiz2',
      type: 'multiple-choice' as const,
      content: `**MCAT Integration** 🎯`,
      exercise: {
        questions: [
          {
            question: `HPV E7 protein binds host Rb, and E6 promotes degradation of host p53. Cells expressing both proteins would be expected to show:`,
            options: [`Unscheduled S-phase entry AND failure to arrest or apoptose after DNA damage — two independent brakes removed`, `Permanent G$_1$ arrest`, `Inability to replicate viral DNA`, `Hyperactive apoptosis eliminating infected cells`],
            correctAnswer: 0,
            explanation: `E7 sequestering Rb liberates E2F (constant proliferative drive, which the virus needs because it relies on host S-phase machinery); E6 destroying p53 removes the damage-triggered arrest/apoptosis response that would otherwise kill such abnormally cycling cells. The virus phenocopies the two most common tumor-suppressor losses in human cancer — the molecular basis of HPV-driven cervical carcinoma.`
          },
          {
            question: `Two tumors have identical cell-cycle durations, but tumor A has a growth fraction of 90% and tumor B of 15%. S-phase-targeted chemotherapy will:`,
            options: [`Kill a much larger proportion of tumor A per dose, because more of its cells pass through the drug-sensitive phase during treatment`, `Kill both tumors equally, since cycle length is identical`, `Kill more of tumor B, because quiescent cells are fragile`, `Have no effect on either tumor`],
            correctAnswer: 0,
            explanation: `Phase-specific agents only hit cells that traverse the sensitive phase while drug is present. Tumor B's 85% quiescent (G$_0$) cells are untouched and can re-enter the cycle later — the reason slow-growth-fraction tumors respond poorly and regrow between doses, and why chemotherapy is given in repeated cycles. Fast-renewing normal tissues (marrow, gut) have high growth fractions, explaining shared toxicity.`
          }
        ]
      }
    },
    {
      id: 'cc4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Phase census tools: flow cytometry (DNA content), EdU/BrdU pulse (S), phospho-H3/mitotic index (M); pulse-chase lag to labeled mitoses = G$_2$ length
- Synchronization: double thymidine (G$_1$/S), nocodazole shake-off (M), serum starvation (G$_0$) — the last doubles as the restriction-point assay (all-or-none serum commitment)
- Drug arrest profiles: hydroxyurea/aphidicolin ~2C (S entry), etoposide 4C (G$_2$ damage), spindle poisons 4C condensed (M), palbociclib 2C only with intact Rb
- Cycle arithmetic: fraction in phase = phase time / cycle time; population doubling requires the growth fraction, not just cycle speed
- Checkpoint diagnostics: damage should drop the mitotic index; entering M with broken DNA = checkpoint loss (or caffeine override)
- HPV E6 = p53 degradation, E7 = Rb inactivation — a virus that installs both classic cancer lesions
- Meiosis reuses the machinery: MI separates homologs (reductional, centromeric cohesin protected); MII separates chromatids like mitosis`
    }
  ]
};
