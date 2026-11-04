export const mcatPopGenPart2Data = {
  topicSlug: 'mcat-genetics-evolution-population-genetics-mcat',
  sections: [
    {
      id: 'pg2-intro',
      type: 'text' as const,
      content: `# Population Genetics — Deep Dive

**Part 2 of 4 — Breaking Equilibrium: Drift, Founder Effects & Gene Flow**

### Genetic Drift: Chance, Not Fitness

**Genetic drift** is random generation-to-generation change in allele frequencies, caused by sampling error in which gametes happen to form the next generation. Key properties:

- Strength scales **inversely with population size**: dramatic in small populations, negligible in huge ones
- Direction is **random** — drift is not adaptive and can fix harmful alleles or eliminate beneficial ones
- Given time, drift drives every allele to **fixation** (frequency 1) or **loss** (frequency 0); a neutral allele's chance of eventual fixation equals its current frequency
- Drift always **reduces heterozygosity** within a population while making isolated populations **diverge** from each other

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

<!-- yield:low -->
### Effective Population Size (concept level)

The **effective population size** $N_e$ is the size of an idealized population that would drift as much as the real one. Unequal sex ratios, variance in offspring number, and past bottlenecks all make $N_e$ smaller than the census count — often much smaller. Conservation passages use $N_e$ to explain why a species with thousands of individuals can still be drifting rapidly.
<!-- /yield -->`
    },
    {
      id: 'pg2-worked',
      type: 'text' as const,
      content: `### Worked Example — Reading a Drift Experiment

**Problem 1.** A researcher founds 100 fly populations of 20 and 100 of 500, all at frequency 0.5 for a neutral allele $bw^{75}$. After 19 generations the small populations have scattered widely, many already fixed (1) or lost (0); the large ones stay near 0.5.

- **(a)** Why do the small populations scatter while the large ones stay near 0.5?
- **(b)** Why does a population that reaches 0 or 1 stay there?
- **(c)** What fraction of the small populations should ultimately fix $bw^{75}$?
- **(d)** What is happening to heterozygosity within each small population?
- **(e)** What happens to the spread across populations, and how would selection look instead?

**(a) Drift and size.** With 20 breeding flies, each generation is a small random sample of gametes, so allele frequencies take large random steps: genetic drift. A sample of 500 flies is a far better copy of the parent gene pool, so those populations take tiny steps.

**(b) Absorbing states.** Once a population hits 0 or 1, it stays: there is no mutation in the experiment, so a lost allele cannot return and a fixed one has no rival. Fixation and loss are absorbing states.

**(c) Fixation probability.** For a neutral allele, the probability of eventual fixation equals its starting frequency, $0.5$, so in time about half the small populations fix it and half lose it. Had it started at 0.1, only about 10 of 100 would fix.

**(d) Within: variation falls.** WITHIN each small population, heterozygosity falls generation after generation, heading toward zero, because drift removes variation.

**(e) Between: populations diverge.** ACROSS populations, the variance in allele frequency grows as each drifts its own way. Selection would instead push the replicates in the SAME direction; this contrast is how MCAT data separate drift from selection.

### Worked Example — Gene Flow Toward a Donor Population

**Problem 2.** A resident population has $p = 0.40$. Each generation, 20% of its breeders are migrants from a large neighbouring population with $p = 0.90$.

- **(a)** What is the resident $p$ after one generation?
- **(b)** What is it after a second generation?
- **(c)** How does the gap to the donor change each generation, and what does that show?

**(a) One generation.** $p' = (1 - m)\\,p_{\\text{resident}} + m\\,p_{\\text{migrant}} = (0.8)(0.40) + (0.2)(0.90) = 0.32 + 0.18 = 0.50$

**(b) Two generations.** Starting from $p = 0.50$ from (a): $p'' = (0.8)(0.50) + (0.2)(0.90) = 0.40 + 0.18 = 0.58$

**(c) The gap shrinks.** The gap to the donor goes $0.50 \\to 0.40 \\to 0.32$, shrinking by a factor of $1 - m = 0.8$ each generation. Gene flow homogenizes: the resident's frequency closes in on the donor's.`
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
            yield: 'HIGH',
            explanation: `A random, drastic reduction in population size discards alleles by chance — a bottleneck, which is genetic drift acting through survivors. Selection would require differential survival BY GENOTYPE related to a trait; here survival was essentially random with respect to genotype, and low diversity persists because rebounded numbers cannot recreate lost alleles.`
          },
          {
            question: `Ellis-van Creveld syndrome (autosomal recessive) is far more common among the Old Order Amish, descended from about 200 founders, than in the general population. The elevated frequency is best explained by:`,
            options: [`Higher mutation rates in the Amish population`, `The founder effect, a form of genetic drift`, `Natural selection favoring the allele in farming environments`, `Gene flow from neighboring non-Amish communities`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `A small founding group is a random sample of the source gene pool; if one founder happened to carry a rare allele, its frequency in the new population starts far above the source frequency. Endogamy then preserves the difference. This chance over-representation of the allele among a small founding group is the founder effect, a form of genetic drift. There is no evidence of a fitness advantage or of an elevated mutation rate, and gene flow would DILUTE the difference, not create it.`
          },
          {
            question: `A neutral allele is currently at frequency 0.2 in a small, isolated population with no mutation. The probability that this allele eventually becomes fixed is:`,
            options: [`0.5, since both outcomes are equally likely`, `0.2, equal to its current frequency`, `0, since rare alleles are always lost`, `1, since drift eventually fixes every allele`],
            correctAnswer: 1,
            yield: 'MEDIUM',
            explanation: `For a neutral allele, the probability of eventual fixation equals its current frequency (each of the population's allele copies is equally likely to be the ultimate ancestor, and this allele is 20% of the copies). Drift guarantees fixation OR loss, but the two outcomes are not equally likely unless the frequency is 0.5. Rare neutral alleles are usually but not always lost, and drift fixes only one allele at a locus, so it cannot fix every allele.`
          },
          {
            question: `Two isolated island populations of the same species have drifted to very different allele frequencies. A bridge now allows individuals to move and interbreed freely between the islands. Over time, gene flow should:`,
            options: [`Increase the frequency difference between the islands`, `Drive both populations to fixation for different alleles`, `Make the two populations' allele frequencies converge`, `Have no effect on allele frequencies`],
            correctAnswer: 2,
            yield: 'HIGH',
            explanation: `Migration mixes gene pools: each generation, a fraction of each population's breeding alleles comes from the other island, pulling the frequencies toward each other. Gene flow is the homogenizing force that OPPOSES divergence by drift or local selection.`
          },
          {
            question: `In a drift experiment with many small replicate populations starting at allele frequency 0.5, which observation would argue for SELECTION rather than drift acting on the allele?`,
            options: [`Half the replicates fix it and half lose it`, `Frequencies scatter both ways across replicates`, `Replicates shift the same way regardless of size`, `Heterozygosity declines within each population`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `Drift is directionless: replicates scatter both ways, and the effect weakens with size. Nearly all replicates shifting in the same direction, with larger replicates shifting just as consistently, means genotypes differ in fitness — selection. Declining heterozygosity and symmetric fixation/loss are exactly what drift predicts.`
          }
        ]
      }
    },
    {
      id: 'pg2-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 2

- **Drift is sampling error.** Random allele-frequency change, strong in small populations, directionless and non-adaptive.
- **Fixation or loss.** Drift ends in fixation or loss, eroding heterozygosity within populations and scattering them apart.
- **Bottleneck vs. founder effect.** Both are drift: random survivors of a crash (elephant seals) or a small emigrant group (Amish).
- **Gene flow homogenizes.** $p' = (1-m)p_{\\text{resident}} + m\\,p_{\\text{migrant}}$ pulls populations toward each other.

**Common traps**

- **Drift as adaptation.** Drift is random: it can fix harmful alleles or lose beneficial ones, so it is not selection.
- **Even odds of fixation.** A neutral allele fixes with probability equal to its frequency: 0.2 at 0.2, and 0.5 only at 0.5.
- **Drift data read as selection.** Drift scatters replicates both ways and weakens with size; selection shifts them all one way.
- **Mutation as a fast force.** Mutation supplies every new allele but is far too slow to shift allele frequencies on its own.

<!-- yield:low -->
**Low-yield extras**

- Effective population size $N_e$ is the size of an idealized population that drifts as much as the real one; unequal sex ratios, offspring-number variance, and past bottlenecks push it far below the census count
<!-- /yield -->`
    }
  ]
};
