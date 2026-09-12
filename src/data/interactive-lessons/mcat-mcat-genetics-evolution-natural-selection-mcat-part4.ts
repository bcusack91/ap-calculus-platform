export const mcatNatSelPart4Data = {
  topicSlug: 'mcat-genetics-evolution-natural-selection-mcat',
  sections: [
    {
      id: 'ns4-intro',
      type: 'text' as const,
      content: `# Natural Selection — Deep Dive

**Part 4 of 4 — MCAT Integration: Evidence, Experiments & Data Interpretation**

### The Lines of Evidence (and what each uniquely shows)

| Evidence | What it demonstrates | Flagship examples |
|----------|----------------------|-------------------|
| Fossil record | Change over time; transitional forms | Tiktaalik (fish → tetrapod), whale ancestors with hind limbs |
| Comparative anatomy | Common descent via homology | Vertebrate forelimb; VESTIGIAL structures (whale pelvis, human appendix, cave-fish eyes) — remnants that make sense only as inherited leftovers |
| Molecular homology | Universal ancestry; divergence proportional to relatedness | Shared genetic code; cytochrome c and rRNA sequence similarity tracking anatomy-based trees |
| Biogeography | Descent with modification shaped by geography | Island species resembling the nearest mainland species, not similar-habitat species elsewhere |
| Direct observation | Selection operating in real time | Antibiotic and pesticide resistance, Galápagos finch beak shifts |

### Three Datasets the MCAT Recycles

**1. Antibiotic resistance and the Lederberg replica-plating logic.** The key question: do resistance mutations arise IN RESPONSE to the antibiotic, or do they pre-exist? Replica plating answers it: colonies grown WITHOUT antibiotic are stamped onto antibiotic plates, and resistant colonies appear at the SAME positions on every replica. Since the antibiotic never touched the master plate, the resistance mutations must have arisen randomly BEFORE exposure — the drug selects pre-existing variants; it does not induce them. Any passage where a stressor "creates" adaptive mutations on demand is describing the wrong (Lamarckian) model.

**2. The Grants' finches.** On Daphne Major, the 1977 drought left mostly large, hard seeds. Ground finches with deeper beaks survived at higher rates; because beak depth is strongly heritable (offspring resemble parents), the NEXT generation's mean beak depth was measurably larger. All three ingredients were documented in the wild: variation, heritability, differential survival → directional evolutionary response within a few generations. Wet years with abundant small seeds later pushed the mean partway back — selection tracks the current environment, with no fixed direction.

**3. Peppered moths.** Dark morph frequency rose with industrial soot (birds ate conspicuous light moths on darkened trunks) and fell again after clean-air legislation — a reversible, environment-linked directional shift, replicated across regions.

### Experimental Design Questions

To claim a trait is **heritable and selected**, an experiment needs:

- **Heritability check**: offspring-parent resemblance measured in a COMMON environment (common-garden or cross-fostering design), so family resemblance cannot be blamed on shared environment or diet.
- **Selection check**: fitness (survival AND reproduction) measured as a function of the trait, with a control population not exposed to the selective agent.
- **Replication**: multiple independent populations. Here is the selection-versus-drift discriminator in data (Part 2 of Population Genetics covers the drift side in depth): replicated, CONSISTENT directional shifts — in large and small populations alike — indicate selection; scattered shifts in both directions, worse in small populations, indicate drift.

### Molecular Clocks (concept level)

Neutral mutations accumulate at a roughly constant average rate, so the number of neutral sequence differences between two lineages grows approximately linearly with time since their divergence. Calibrated against fossil-dated splits, sequence divergence estimates the TIMING of branch points. Caveats a passage may exploit: rates differ among genes (histones slow, fibrinopeptides fast) and among lineages, and selection-constrained sites do not tick neutrally.`
    },
    {
      id: 'ns4-worked',
      type: 'text' as const,
      content: `### Worked Example — Interpreting a Resistance-Evolution Experiment

**Passage-style problem.** Researchers establish 6 replicate E. coli populations from a single antibiotic-sensitive colony. Populations 1-3 grow with a sublethal dose of streptomycin; populations 4-6 grow without antibiotic. Resistant cells per $10^6$ cells are counted at generation 0 and generation 200:

| Population | Condition | Gen 0 | Gen 200 |
|------------|-----------|-------|---------|
| 1-3 (mean) | Streptomycin | About 1 | 940,000 |
| 4-6 (mean) | No antibiotic | About 1 | 2 |

A replica-plating test on a SEPARATE, never-exposed culture finds resistant colonies at matching positions across replica antibiotic plates.

**Question 1 — Do these data show the antibiotic caused resistance mutations?** No. Populations 4-6 show that resistant mutants exist at low frequency (about $1$ to $2$ per $10^6$) even with no drug — mutation maintains them regardless of exposure. The replica-plating result clinches the timing: position-matched resistant colonies descend from mutants that arose on the master plate BEFORE any antibiotic contact. The drug's role in populations 1-3 was to change the FITNESS of pre-existing variants: $w_{\\text{resistant}} \\gg w_{\\text{sensitive}}$ under treatment, driving the resistant fraction from about $10^{-6}$ to about $0.94$.

**Question 2 — Why does the resistant fraction stay near 1 per million in populations 4-6?** Without the drug, resistance typically carries a small fitness COST (resistant ribosomes work slightly worse), so selection weakly removes resistant cells while mutation keeps resupplying them — a mutation-selection balance, not an absence of mutation.

**Question 3 — Which single result, if observed instead, would have supported induced (directed) mutation?** Resistant colonies appearing at RANDOM, non-matching positions across replica plates only after antibiotic exposure, together with a resistant fraction in unexposed populations of exactly zero at all times. Matching positions are the fingerprint of pre-exposure mutational events propagated by cell division.

**Question 4 — Is the rise in populations 1-3 selection or drift?** All three independent replicates shifted massively in the SAME direction, in large populations — consistent, directional, size-independent change is the signature of selection, not drift.`
    },
    {
      id: 'ns4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evidence & Experimental Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the Lederbergs' replica-plating experiment, resistant colonies appeared at the same positions on every antibiotic replica plate stamped from one antibiotic-free master plate. This result demonstrates that:`,
            options: [`Antibiotic exposure induces cells to mutate toward resistance`, `Resistance spreads between colonies by conjugation during stamping`, `Resistance mutations arose randomly before any antibiotic exposure, and the antibiotic merely selects them`, `All bacterial cells carry low-level resistance that the antibiotic activates`],
            correctAnswer: 2,
            explanation: `Position-matching is the key: replicas share only the geography of the master plate, which never saw antibiotic, so the resistant cells at those spots must have existed there already — mutation is random with respect to need, and selection acts afterward. Induced mutation would scatter resistant colonies at different positions on different replicas, and neither conjugation during stamping nor universal latent resistance explains reproducible positions with mostly sensitive colonies elsewhere.`
          },
          {
            question: `After the 1977 drought on Daphne Major left mainly large, hard seeds, surviving medium ground finches had deeper beaks than the pre-drought population, and their OFFSPRING also had deeper beaks than the pre-drought generation. The offspring measurement was essential because it established:`,
            options: [`That the drought increased the mutation rate for beak genes`, `That finches can deepen their beaks by cracking hard seeds`, `That beak depth is controlled by a single gene`, `That the survivors' advantage was heritable, so the population had actually evolved`],
            correctAnswer: 3,
            explanation: `Differential survival alone shows selection acting WITHIN a generation; only offspring resemblance shows the shift transmits across generations — the heritability ingredient that turns selection into evolution. No mutation-rate change is needed (selection sorted standing variation), beak depth is polygenic, and use-induced beak change would be an acquired trait that could not explain offspring born with deeper beaks.`
          },
          {
            question: `Modern whales retain small, functionless pelvic and hind-limb bones embedded in their body wall. In evolutionary reasoning, such vestigial structures are best interpreted as:`,
            options: [`Analogous structures produced by convergent evolution`, `Remnants of functional structures in ancestors, evidence of common descent with modification`, `Structures maintained by strong positive selection in modern whales`, `Evidence that whales are actively re-evolving hind limbs`],
            correctAnswer: 1,
            explanation: `Vestigial structures make sense only as inherited leftovers from ancestors in which they functioned (terrestrial, limbed ancestors of whales — confirmed by fossils like Ambulocetus). They are homologous, not analogous, to other vertebrate hindlimbs; their reduced state reflects relaxed or reversed selection, not strong positive maintenance, and evolution has no goal of "re-evolving" them.`
          },
          {
            question: `Two species' cytochrome c genes differ at 12 neutral sites, while each differs from a third, more distantly related species at about 30 neutral sites. Under the molecular clock concept, these counts primarily allow researchers to estimate:`,
            options: [`The relative TIME since each pair of lineages diverged`, `Which species is most anatomically advanced`, `The strength of natural selection acting on cytochrome c function`, `The current population sizes of the three species`],
            correctAnswer: 0,
            explanation: `Neutral substitutions accumulate at a roughly constant average rate, so neutral divergence scales with time since the lineages split — 30 differences implies a divergence roughly 2.5 times older than 12, once calibrated with fossil dates. NEUTRAL sites by definition say little about selection on the protein, nothing about "advancement" (no tip of a tree is more evolved), and divergence counts do not report population size.`
          },
          {
            question: `Twelve replicate fish populations experience a new predator; twelve matched replicates do not. Which outcome would MOST strongly indicate that camouflage coloration evolved by natural selection rather than genetic drift?`,
            options: [`Coloration changes in scattered, opposite directions across the predator-exposed replicates`, `Only the smallest predator-exposed populations change color`, `One predator-exposed population becomes dramatically more camouflaged while the others do not`, `Nearly all predator-exposed replicates shift consistently toward camouflage, regardless of population size, while control replicates do not`],
            correctAnswer: 3,
            explanation: `Selection is directional and repeatable: the same environment pushes independent replicates the same way, in large populations as well as small, and the unexposed controls isolate the predator as the cause. Scattered bidirectional change, effects confined to small populations, or a single-replicate anomaly are all what drift predicts, since drift is random in direction and strongest when populations are small.`
          }
        ]
      }
    },
    {
      id: 'ns4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- Evidence stack: fossils (transitional forms), comparative anatomy (homologous + vestigial structures), molecular homology, biogeography, and direct real-time observation
- Replica plating: resistance mutations pre-exist exposure (position-matched colonies from an unexposed master plate); antibiotics select, they do not instruct
- Grants' finches: documented variation + heritability + differential survival → measurable beak-depth evolution in the wild; direction reverses when the environment does
- Peppered moths: reversible, environment-linked directional selection replicated across regions
- Demonstrating adaptation experimentally requires a common-garden heritability check, fitness measured against the trait with controls, and replication
- Selection vs. drift in data: consistent, size-independent, replicated directional shifts = selection; scattered, size-dependent shifts = drift
- Molecular clocks: neutral divergence grows roughly linearly with time; calibrate with fossils, beware gene- and lineage-specific rate differences`
    }
  ]
};
