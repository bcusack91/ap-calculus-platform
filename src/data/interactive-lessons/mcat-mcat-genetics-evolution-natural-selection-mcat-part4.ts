export const mcatNatSelPart4Data = {
  topicSlug: 'mcat-genetics-evolution-natural-selection-mcat',
  sections: [
    {
      id: 'ns4-intro',
      type: 'text' as const,
      content: `# Natural Selection — Deep Dive

**Part 4 of 4 — MCAT Integration: Evidence, Experiments & Data Interpretation**

### The Lines of Evidence (and what each uniquely shows)

| Evidence | Shows | Examples |
|---|---|---|
| Fossil record | Change over time; transitional forms | Fish-to-tetrapod forms, legged whale ancestors |
| Comparative anatomy | Common descent (homology) | Vertebrate forelimb; VESTIGIAL leftovers (whale pelvis, human appendix, cave-fish eyes) that only inheritance explains |
| Molecular homology | Universal ancestry; divergence tracks relatedness | Shared genetic code; cytochrome c and rRNA similarity tracks anatomy trees |
| Biogeography | Descent shaped by geography | Island species resemble the nearest mainland, not similar habitats elsewhere |
| Direct observation | Selection in real time | Antibiotic/pesticide resistance, finch beak shifts |

<!-- yield:low -->
- Named transitional fossils: Tiktaalik (a fish with limb-like fins and a neck, intermediate between fish and tetrapods) and Ambulocetus (a legged, amphibious whale ancestor).
<!-- /yield -->

### Three Datasets the MCAT Recycles

**1. Antibiotic resistance and Lederberg replica plating.** Do resistance mutations arise IN RESPONSE to the antibiotic, or do they pre-exist? Colonies grown WITHOUT antibiotic are stamped onto antibiotic plates, and resistant colonies appear at the SAME positions on every replica. The master plate never met the drug, so the mutations arose randomly BEFORE exposure: antibiotics select pre-existing variants, they do not induce them. A stressor that "creates" adaptive mutations on demand is the wrong (Lamarckian) model.

**2. The Grants' finches.** On Daphne Major, the 1977 drought left mostly large, hard seeds. Finches with deeper beaks survived at higher rates, and because beak depth is heritable (offspring resemble parents) the NEXT generation's mean beak depth was measurably larger: variation, heritability and differential survival, all documented in the wild. Later wet years with abundant small seeds pushed the mean partway back; selection tracks the current environment, with no fixed direction.

**3. Peppered moths.** Dark morph frequency rose with industrial soot (birds ate conspicuous light moths on darkened trunks) and fell again after clean-air legislation — a reversible, environment-linked directional shift, replicated across regions.

### Experimental Design Questions

To claim a trait is **heritable and selected**, an experiment needs:

- **Heritability check**: offspring-parent resemblance in a COMMON environment (common garden or cross-fostering), so resemblance cannot be blamed on shared environment or diet.
- **Selection check**: fitness (survival AND reproduction) measured as a function of the trait, with a control population not exposed to the selective agent.
- **Replication**: multiple independent populations, the selection-versus-drift discriminator: replicated, CONSISTENT directional shifts in large and small populations alike mean selection; scattered shifts in both directions, worst in small populations, mean drift.

### Molecular Clocks (concept level)

Neutral mutations accumulate at a roughly constant average rate, so the number of neutral sequence differences between two lineages grows approximately linearly with time since their divergence. Calibrated against fossil-dated splits, sequence divergence estimates the TIMING of branch points. Caveats a passage may exploit: rates differ among genes and among lineages, and selection-constrained sites do not tick neutrally.

<!-- yield:low -->
- Gene-rate extremes: histones (tightly constrained) tick very slowly; fibrinopeptides (little functional constraint) tick fast.
<!-- /yield -->`
    },
    {
      id: 'ns4-worked',
      type: 'text' as const,
      content: `### Worked Example — Interpreting a Resistance-Evolution Experiment

**Problem 1.** Six large replicate E. coli populations start from one antibiotic-sensitive colony. Populations 1-3 grow with a sublethal dose of streptomycin; 4-6 grow without antibiotic. Resistant cells per $10^6$ cells:

| Population | Condition | Gen 0 | Gen 200 |
|------------|-----------|-------|---------|
| 1-3 (mean) | Streptomycin | About 1 | 940,000 |
| 4-6 (mean) | No antibiotic | About 1 | 2 |

- **(a)** Do these data show that streptomycin caused the resistance mutations?
- **(b)** What did the drug change in populations 1-3?
- **(c)** Is the rise in populations 1-3 selection or drift?

**(a) No.** Resistant mutants were present at generation 0, and populations 4-6 keep them at low frequency (about $1$ to $2$ per $10^6$) with no drug at all: mutation maintains them regardless of exposure.

**(b) Fitness, not mutation.** The drug changed the FITNESS of pre-existing variants: $w_{\\text{resistant}} \\gg w_{\\text{sensitive}}$ under treatment, driving the resistant fraction from about $10^{-6}$ to about $0.94$.

**(c) Selection.** All three independent replicates shifted massively in the SAME direction, in large populations. Consistent, directional, size-independent change is the signature of selection, not drift.

**Problem 2.** In the same experiment, resistant cells per $10^6$ rose from about 1 to 940,000 with streptomycin (populations 1-3) but only from about 1 to 2 without it (populations 4-6).

- **(a)** Why does the resistant fraction stay near 1 per million without the drug?
- **(b)** If streptomycin is removed from populations 1-3 for 200 more generations, what happens to the resistant fraction?

**(a) Mutation-selection balance.** Without the drug, resistance typically carries a small fitness COST (resistant ribosomes work slightly worse), so selection weakly removes resistant cells while mutation keeps resupplying them: a balance, not an absence of mutation.

**(b) A slow decline.** Without the drug, the small fitness cost from (a) makes resistant cells slightly less fit than sensitive ones, so selection now gradually favors sensitive cells and the resistant fraction falls slowly. Because the cost is small, the decline is far slower than the rise under treatment.`
    },
    {
      id: 'ns4-quiz1',
      type: 'multiple-choice' as const,
      content: `**Evidence & Experimental Reasoning** 🎯`,
      exercise: {
        questions: [
          {
            question: `In the Lederbergs' replica-plating experiment, resistant colonies appeared at the same positions on every antibiotic replica plate stamped from one antibiotic-free master plate. This result demonstrates that:`,
            options: [`Antibiotic exposure induces cells to mutate toward resistance`, `Resistance spreads between colonies by conjugation during stamping`, `Resistance mutations arose before exposure and were then selected`, `All cells carry latent resistance that the antibiotic activates`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Position-matching is the key: replicas share only the geography of the master plate, which never saw antibiotic, so the resistant cells at those spots must have existed there already: resistance mutations arose randomly before any antibiotic exposure, and the antibiotic merely selected them. Mutation is random with respect to need, and selection acts afterward. Induced mutation would scatter resistant colonies at different positions on different replicas, and neither conjugation during stamping nor universal latent resistance explains reproducible positions with mostly sensitive colonies elsewhere.`
          },
          {
            question: `After the 1977 drought on Daphne Major left mainly large, hard seeds, surviving medium ground finches had deeper beaks than the pre-drought population, and their OFFSPRING also had deeper beaks than the pre-drought generation. The offspring measurement was essential because it established:`,
            options: [`That the drought increased the mutation rate for beak genes`, `That finches can deepen their beaks by cracking hard seeds`, `That beak depth is controlled by a single gene`, `That the survivors' deeper beaks were heritable`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Differential survival alone shows selection acting WITHIN a generation; only offspring resemblance shows the shift transmits across generations — the heritability ingredient that turns selection into evolution, so the population had actually evolved. No mutation-rate change is needed (selection sorted standing variation), beak depth is polygenic, and use-induced beak change would be an acquired trait that could not explain offspring born with deeper beaks.`
          },
          {
            question: `Modern whales retain small, functionless pelvic and hind-limb bones embedded in their body wall. In evolutionary reasoning, such vestigial structures are best interpreted as:`,
            options: [`Analogous structures produced by convergent evolution`, `Remnants of functional ancestral structures, showing common descent`, `Structures kept by strong positive selection in whales`, `Evidence that whales are actively re-evolving hind limbs`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Vestigial structures make sense only as inherited leftovers from ancestors in which they functioned (terrestrial, limbed ancestors of whales — confirmed by fossil whale ancestors with hind limbs). They are homologous, not analogous, to other vertebrate hindlimbs; their reduced state reflects relaxed or reversed selection, not strong positive maintenance, and evolution has no goal of "re-evolving" them.`
          },
          {
            question: `Two species' cytochrome c genes differ at 12 neutral sites, while each differs from a third, more distantly related species at about 30 neutral sites. Under the molecular clock concept, these counts primarily allow researchers to estimate:`,
            options: [`The relative TIME since each pair of lineages diverged`, `Which species is most anatomically advanced`, `The strength of natural selection acting on cytochrome c function`, `The current population sizes of the three species`],
            correctAnswer: 0,
            yield: 'MEDIUM',
            explanation: `Neutral substitutions accumulate at a roughly constant average rate, so neutral divergence scales with time since the lineages split — 30 differences implies a divergence roughly 2.5 times older than 12, once calibrated with fossil dates. NEUTRAL sites by definition say little about selection on the protein, nothing about "advancement" (no tip of a tree is more evolved), and divergence counts do not report population size.`
          },
          {
            question: `Twelve replicate fish populations experience a new predator; twelve matched replicates do not. Which outcome would MOST strongly indicate that camouflage coloration evolved by natural selection rather than genetic drift?`,
            options: [`Coloration changes in scattered, opposite directions across the predator-exposed replicates`, `Only the smallest predator-exposed populations change color`, `One predator-exposed population becomes dramatically more camouflaged while the others do not`, `Nearly all exposed replicates shift toward camouflage, unlike controls`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Selection is directional and repeatable: the same environment pushes nearly all independent predator-exposed replicates consistently toward camouflage, in large populations as well as small, and the unexposed controls isolate the predator as the cause. Scattered bidirectional change, effects confined to small populations, or a single-replicate anomaly are all what drift predicts, since drift is random in direction and strongest when populations are small.`
          }
        ]
      }
    },
    {
      id: 'ns4-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 4

- **Evidence stack.** Fossils, homologous and vestigial anatomy, molecular homology, biogeography and direct observation all show descent.
- **Replica plating.** Position-matched resistant colonies from an unexposed master plate show the mutations came before the drug.
- **Grants' finches.** Variation, heritability and drought survival gave deeper beaks in the next generation; wet years pushed back.
- **Molecular clocks.** Neutral differences grow roughly linearly with time since divergence; fossil-dated splits calibrate them.

**Common traps**

- **Drugs creating mutations.** Antibiotics select pre-existing resistant variants; a stressor that induces adaptive mutations is Lamarckian.
- **Survival as proof of evolution.** Differential survival shows selection; only offspring resemblance in a common environment shows heritability.
- **Drift mistaken for selection.** Consistent, replicated, size-independent shifts mean selection; scattered ones, worst in small populations, mean drift.
- **One clock rate.** Rates differ among genes and lineages, and selection-constrained sites do not tick neutrally.

<!-- yield:low -->
**Low-yield extras**

- Named transitional fossils (Tiktaalik, fish to tetrapod; Ambulocetus, legged whale ancestor); molecular-clock rate extremes (histones slow, fibrinopeptides fast)
<!-- /yield -->`
    }
  ]
};
