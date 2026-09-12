export const mcatPopGenPart2Data = {
  topicSlug: 'mcat-genetics-evolution-population-genetics-mcat',
  sections: [
    {
      id: 'pg2-intro',
      type: 'text' as const,
      content: `# Population Genetics — Deep Dive

**Part 2 of 4 — Breaking Equilibrium: Drift, Founder Effects & Gene Flow**

### Genetic Drift: Chance, Not Fitness

**Genetic drift** is random fluctuation in allele frequencies from generation to generation due to sampling error in which gametes happen to form the next generation. Key properties:

- Strength scales **inversely with population size**: dramatic in small populations, negligible in huge ones
- Direction is **random** — drift is not adaptive and can fix harmful alleles or eliminate beneficial ones
- Given enough time, drift drives every allele to **fixation** (frequency 1) or **loss** (frequency 0); a neutral allele's probability of eventual fixation equals its current frequency
- Drift always **reduces genetic variation** (heterozygosity) within a population, while making isolated populations **diverge** from each other

### Two Named Drift Scenarios

**Bottleneck effect**: a catastrophe (disease, hunting, natural disaster) randomly kills most of the population. The survivors' allele frequencies — determined by luck, not fitness — become the new gene pool. Example: northern elephant seals, hunted to about 20 individuals, retain very low genetic diversity even after rebounding to over 100,000.

**Founder effect**: a small group leaves to establish a new population. The founders carry only a subset of the source population's variation, and any allele over-represented among them (by chance) becomes common in the descendants. Examples: Ellis-van Creveld syndrome in the Old Order Amish; Tay-Sachs and other alleles in historically small, endogamous populations.

Both are drift; the difference is HOW the small sample arises (survivors vs. emigrants).

### Gene Flow (Migration)

Movement of alleles between populations via migrating, breeding individuals:

- **Homogenizes** populations — makes allele frequencies more similar, opposing divergence by drift or local selection
- Can introduce new alleles (acts a bit like mutation from the receiving population's perspective)
- One generation of migration at rate $m$ shifts the recipient's allele frequency toward the donor's: $p' = (1 - m)\\,p_{\\text{resident}} + m\\,p_{\\text{migrant}}$

### Mutation

The ultimate SOURCE of all new alleles, but per-locus mutation rates (roughly $10^{-5}$ to $10^{-6}$ per gamete per generation) are too small to change frequencies much on their own. Mutation supplies variation; selection and drift determine its fate.

### Effective Population Size (concept level)

The **effective population size** $N_e$ is the size of an idealized population that would drift as much as the real one. Unequal sex ratios, variance in offspring number, and past bottlenecks all make $N_e$ smaller than the census count — often much smaller. Conservation passages use $N_e$ to explain why a species with thousands of individuals can still be drifting rapidly.`
    },
    {
      id: 'pg2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Drift Experiment

**Passage-style problem.** A researcher establishes 100 replicate fly populations, each with exactly 10 males and 10 females, all starting at frequency 0.5 for a neutral eye-color allele $bw^{75}$. A parallel set of 100 populations is founded with 500 flies each. After 19 generations:

- Small populations: many are FIXED for $bw^{75}$ (frequency 1) or have LOST it (frequency 0); few remain near 0.5. The distribution of frequencies is U-shaped.
- Large populations: nearly all remain close to 0.5.

**Question 1 — Why the U-shape only in small populations?** With 20 breeding flies, each generation is a small random sample of gametes, so frequencies take large random steps — this is drift. Once a population hits 0 or 1, it stays (no mutation in the experiment): fixation and loss are absorbing states. Large populations take tiny steps and stay near the start.

**Question 2 — What fraction of small populations should ultimately fix $bw^{75}$?** For a neutral allele, the probability of eventual fixation equals its starting frequency: $0.5$. So about half the small populations fix it and half lose it — matching the roughly symmetric U.

**Question 3 — What happens to variation?** WITHIN each small population, heterozygosity collapses toward zero (drift removes variation). ACROSS populations, variance in allele frequency grows (populations diverge). This within/between contrast is the fingerprint that distinguishes drift from selection in MCAT data: selection would push replicate populations in the SAME direction; drift scatters them in both.`
    },
    {
      id: 'pg2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Drift, Founder & Bottleneck** 🎯`,
      exercise: {
        questions: [
          {
            question: `Northern elephant seals passed through a hunting-induced population crash to about 20 animals. Today's large population shows almost no allelic variation. This is best described as:`,
            options: [`A bottleneck effect — a form of genetic drift`, `Directional selection for hunting resistance`, `Gene flow from southern elephant seals`, `Elevated mutation rate after the crash`],
            correctAnswer: 0,
            explanation: `A random, drastic reduction in population size discards alleles by chance — a bottleneck, which is genetic drift acting through survivors. Selection would require differential survival BY GENOTYPE related to a trait; here survival was essentially random with respect to genotype, and low diversity persists because rebounded numbers cannot recreate lost alleles.`
          },
          {
            question: `Ellis-van Creveld syndrome (autosomal recessive) is far more common among the Old Order Amish, descended from about 200 founders, than in the general population. The elevated frequency is best explained by:`,
            options: [`Higher mutation rates in the Amish population`, `The founder effect — chance over-representation of the allele among a small founding group`, `Natural selection favoring the allele in farming environments`, `Gene flow from neighboring communities`],
            correctAnswer: 1,
            explanation: `A small founding group is a random sample of the source gene pool; if one founder happened to carry a rare allele, its frequency in the new population starts far above the source frequency. Endogamy then preserves the difference. There is no evidence of a fitness advantage, and gene flow would DILUTE the difference, not create it.`
          },
          {
            question: `A neutral allele is currently at frequency 0.2 in a small, isolated population with no mutation. The probability that this allele eventually becomes fixed is:`,
            options: [`0.5, because fixation and loss are equally likely`, `0.2`, `0, because rare alleles are always lost`, `1, because drift eventually fixes every allele`],
            correctAnswer: 1,
            explanation: `For a neutral allele, the probability of eventual fixation equals its current frequency (each of the population's allele copies is equally likely to be the ultimate ancestor, and this allele is 20% of the copies). Drift guarantees fixation OR loss, but the two outcomes are not equally likely unless the frequency is 0.5.`
          },
          {
            question: `Two isolated island populations of the same species have drifted to very different allele frequencies. A bridge now allows individuals to move and interbreed freely between the islands. Over time, gene flow should:`,
            options: [`Increase the frequency difference between the islands`, `Drive both populations to fixation for different alleles`, `Make the two populations' allele frequencies converge`, `Have no effect on allele frequencies`],
            correctAnswer: 2,
            explanation: `Migration mixes gene pools: each generation, a fraction of each population's breeding alleles comes from the other island, pulling the frequencies toward each other. Gene flow is the homogenizing force that OPPOSES divergence by drift or local selection.`
          },
          {
            question: `In a drift experiment with many small replicate populations starting at allele frequency 0.5, which observation would argue for SELECTION rather than drift acting on the allele?`,
            options: [`Half the populations fix the allele and half lose it`, `Frequencies scatter widely in both directions across replicates`, `Nearly all replicate populations shift in the same direction, and larger replicates shift just as consistently`, `Within-population heterozygosity declines over generations`],
            correctAnswer: 2,
            explanation: `Drift is directionless: replicates scatter both ways, and the effect weakens with size. A consistent, size-independent shift in one direction across replicates means genotypes differ in fitness — selection. Declining heterozygosity and symmetric fixation/loss are exactly what drift predicts.`
          }
        ]
      }
    },
    {
      id: 'pg2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- Drift = random sampling error in allele transmission; strong in small populations, directionless, non-adaptive
- Neutral allele's fixation probability = its current frequency; drift ends in fixation or loss and erodes heterozygosity within populations while scattering frequencies between them
- Bottleneck = random survivors after a crash; founder effect = small emigrant sample — both are drift, both explain disease-allele hotspots (Amish, elephant seals)
- Gene flow homogenizes populations: $p' = (1-m)p_{\\text{resident}} + m\\,p_{\\text{migrant}}$
- Mutation creates variation but is too slow to shift frequencies alone; effective population size $N_e$ (often far below census size) sets the real strength of drift
- Drift vs. selection in data: scattered, size-dependent changes = drift; consistent directional, size-independent changes = selection`
    }
  ]
};
