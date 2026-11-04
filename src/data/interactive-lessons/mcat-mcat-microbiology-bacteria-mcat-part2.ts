export const mcatBacteriaPart2Data = {
  topicSlug: 'mcat-microbiology-bacteria-mcat',
  sections: [
    {
      id: 'bac2-intro',
      type: 'text' as const,
      content: `# Bacteria

**Part 2 of 4 — Growth, Metabolism & Culture**

### Binary Fission and Exponential Math

Bacteria divide by **binary fission**: chromosome replication from a single origin, segregation, septum formation. Growth is exponential with a characteristic **generation (doubling) time** g:

$$N = N_0 \\times 2^{n}, \\quad n = t/g$$

Example: 100 cells of an organism with g = 20 min, grown 2 hours → n = 6 doublings → $100 \\times 2^{6} = 6400$ cells. Log-scale plots turn exponential growth into a straight line — the slope IS the growth rate.

### The Growth Curve (Closed Culture)

1. **Lag** — no division; cells synthesize enzymes suited to the new medium (adaptation, not dormancy).
2. **Log (exponential)** — constant doubling; cells most uniform and most susceptible to antibiotics that require growth (beta-lactams!).
3. **Stationary** — nutrients exhausted, wastes accumulate; division balances death. **Endospore formation and many toxins/secondary metabolites appear here.**
4. **Death (decline)** — exponential loss of viability.

### Oxygen Relationships (Sort Any Organism from One Tube)

| Class | O$_2$ use | Detox enzymes (catalase/SOD) | Thioglycollate tube pattern |
|-------|-----------|------------------------------|------------------------------|
| Obligate aerobe | Required (aerobic respiration only) | Yes | Growth at top only |
| Facultative anaerobe | Prefers O$_2$, ferments/respires anaerobically without it | Yes | Growth throughout, densest at top |
| Aerotolerant anaerobe | Ignores O$_2$ (ferments always) | Some (SOD, usually no catalase) | Even growth |
| Obligate anaerobe | Poisoned by O$_2$ | No — reactive oxygen species kill them | Bottom only |
| Microaerophile | Needs low O$_2$ | Limited | Narrow band near (not at) the top |

**Why O$_2$ kills anaerobes:** aerobic metabolism inevitably produces superoxide and peroxide; organisms lacking **superoxide dismutase** and **catalase** cannot neutralize them.

### Nutritional Vocabulary

- Energy source: **photo-** (light) vs **chemo-** (chemical oxidation). Carbon source: **auto-** (CO$_2$) vs **hetero-** (organic molecules). Most pathogens are **chemoheterotrophs**.
- **Obligate intracellular** organisms (e.g., Rickettsia, Chlamydia) depend on host cells for ATP or other essential metabolites they cannot make themselves — they must be grown in host cells, never on agar alone.
- Media logic: **selective** media suppress competitors (grow only what you want); **differential** media make metabolic differences visible (e.g., lactose fermenters change an indicator's color); a medium can be both.
- **Auxotrophs** are mutants that lost a biosynthetic pathway and grow only when the end product is supplied — the workhorse of replica-plating genetics.`
    },
    {
      id: 'bac2-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Growth Problems

**Problem 1.** A culture grows from $2 \\times 10^{3}$ to $1.28 \\times 10^{5}$ cells in 3 hours of exponential growth.

- **(a)** By what factor did the population grow, and how many doublings is that?
- **(b)** What is the generation time?

**(a) Fold increase.** $\\dfrac{1.28 \\times 10^{5}}{2 \\times 10^{3}} = 64 = 2^{6}$, so $n = 6$ doublings. Convert the fold-change to a power of 2 first; the arithmetic is designed to come out clean.

**(b) Generation time.** With $n = 6$ from (a): $g = t/n = 180\\;\\text{min}/6 =$ **30 minutes**. Powers of 2 worth memorizing: $2^{5} = 32$, $2^{6} = 64$, $2^{10} = 1024 \\approx 10^{3}$.

**Problem 2.** A food-poisoning organism produces its toxin only upon nutrient depletion, and a sporulating pathogen becomes transmissible only in old cultures.

- **(a)** Which growth phase do both observations point to?
- **(b)** Why would a cell switch on these programs at that point?
- **(c)** When should you harvest to purify the toxin, and why?

**(a) Stationary phase.** Toxin production (a secondary metabolite) and sporulation are both STATIONARY-phase programs, triggered by starvation signaling — not expressed during log growth.

**(b) Survival logic.** When conditions collapse, the cell invests in survival (a spore) or in aggressively harvesting resources from a host (a toxin).

**(c) Timing the harvest.** In stationary phase: a log-phase harvest yields little toxin, while the same culture 12 hours later can be highly toxigenic. Map any "appears late in culture" observation to stationary-phase stress responses.

**Problem 3.** Mutagenized colonies are replica-plated onto minimal medium and onto minimal medium + histidine. Colony 7 grows only on the histidine plate.

- **(a)** How is colony 7 classified?
- **(b)** What is its biochemical lesion?
- **(c)** How does a wild-type colony behave, and how can several such mutants order the pathway?

**(a) Histidine auxotroph.** Growth on supplemented but not minimal medium = **histidine auxotroph** (his-minus). Minimal medium asks "can you build everything yourself?"

**(b) Broken pathway.** Some enzyme in the histidine biosynthesis pathway is inactivated by mutation; the cell now depends on imported histidine. A no on minimal medium plus rescue by one compound pinpoints the broken pathway.

**(c) Prototroph and cross-feeding.** A wild-type prototroph grows on both plates. Cross-feeding tests between different his-minus mutants can even order the pathway's steps.`
    },
    {
      id: 'bac2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Growth & Metabolism** 🎯`,
      exercise: {
        questions: [
          {
            question: `A culture starts at 500 cells; the species doubles every 30 minutes. How many cells after 3 hours of exponential growth?`,
            options: [`8000`, `16,000`, `3000`, `32,000`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `n = 180 min / 30 min = 6 doublings; 500 times 2^6 = 500 times 64 = 32,000. The most common error is using 5 doublings (16,000) by miscounting the interval — always compute n = t/g first, then multiply.`
          },
          {
            question: `In a thioglycollate tube (oxygen gradient: high at top, zero at bottom), an organism grows evenly from top to bottom. It is best classified as:`,
            options: [`An obligate aerobe`, `An aerotolerant anaerobe`, `A facultative anaerobe`, `An obligate anaerobe`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `Uniform growth means oxygen neither helps nor harms: the organism ferments regardless and possesses enough ROS defense to survive O2 — aerotolerant. A facultative organism would also grow throughout but DENSER at the top, where respiration yields more ATP.`
          },
          {
            question: `Obligate anaerobes die in room air primarily because they lack:`,
            options: [`Superoxide dismutase and catalase`, `An electron transport chain of any kind`, `A cell wall that is stable in oxygen`, `The ability to ferment glucose`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `Contact with O2 spontaneously generates superoxide and H2O2 inside any cell. Aerobes disarm these with SOD and catalase/peroxidase; obligate anaerobes lack the enzymes, so ROS destroy their DNA, lipids, and Fe-S enzymes. Fermentation ability is irrelevant to the toxicity itself.`
          },
          {
            question: `Beta-lactam antibiotics kill a culture most efficiently during which growth phase?`,
            options: [`Lag phase, when enzymes are being synthesized`, `Stationary phase, when the population peaks`, `Log phase, when most cells are dividing`, `Death phase, when cells are already weakened`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Beta-lactams sabotage NEW peptidoglycan cross-linking; only dividing cells build wall. Log phase = maximal division = maximal kill. Stationary and lag cells are largely spared — clinically, this is why dormant persisters survive therapy.`
          },
          {
            question: `MacConkey agar contains bile salts and crystal violet (inhibiting gram-positive growth) plus lactose and a pH indicator that turns fermenter colonies pink. This medium is:`,
            options: [`Selective only, not differential`, `Differential only, not selective`, `Neither selective nor differential`, `Both selective and differential`],
            correctAnswer: 3,
            yield: 'MEDIUM',
            explanation: `Bile salts/crystal violet SELECT against gram-positives; the lactose-indicator system DIFFERENTIATES lactose fermenters (pink, e.g., E. coli) from non-fermenters (colorless) among the survivors. One plate, two logical functions — the MCAT's favorite media example.`
          }
        ]
      }
    },    {
      id: 'bac2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Exponential growth math.** $N = N_0 \\times 2^{t/g}$; a log plot turns it into a straight line whose slope is the growth rate.
- **Four-phase growth curve.** Lag adapts, log doubles (beta-lactams kill best), stationary makes spores and toxins, then death.
- **Oxygen tube patterns.** Aerobe top only, facultative throughout (denser at top), aerotolerant even, anaerobe bottom, microaerophile subsurface band.
- **Oxygen toxicity.** O$_2$ yields superoxide and peroxide; obligate anaerobes lack SOD and catalase, so these ROS kill them.

**Common traps**

- **Miscounting doublings.** Compute $n = t/g$ first: 3 hours at a 30-minute generation time is 6 doublings, not 5.
- **Lag as dormancy.** Lag-phase cells are busy making enzymes for the new medium; they are adapting, not dormant.
- **Confusing selective and differential.** Selective media suppress competitors; differential media reveal metabolic differences; MacConkey does both.
- **Intracellular bugs on agar.** Rickettsia and Chlamydia need host cells for ATP or metabolites, so they never grow on cell-free agar.`
    }
  ]
};
