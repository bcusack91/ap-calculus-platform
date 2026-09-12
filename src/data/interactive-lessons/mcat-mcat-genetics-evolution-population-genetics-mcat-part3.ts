export const mcatPopGenPart3Data = {
  topicSlug: 'mcat-genetics-evolution-population-genetics-mcat',
  sections: [
    {
      id: 'pg3-intro',
      type: 'text' as const,
      content: `# Population Genetics — Deep Dive

**Part 3 of 4 — Selection in Populations: Fitness, Selection Modes & Balancing Selection**

### Fitness Made Quantitative

**Relative fitness** $w$ scores each genotype's reproductive output against the best genotype (which gets $w = 1$). The **selection coefficient** $s = 1 - w$ measures the reproductive penalty. If aa individuals leave 70 offspring for every 100 left by AA, then $w_{aa} = 0.7$ and $s = 0.3$. A lethal or sterile genotype has $w = 0$, $s = 1$.

Selection changes allele frequencies by weighting each genotype's contribution to the next gene pool by its fitness — it is Hardy-Weinberg with the "no selection" condition deliberately broken.

### Three Modes of Selection on a Quantitative Trait

| Mode | Favored phenotypes | Mean | Variance |
|------|--------------------|------|----------|
| Directional | One extreme | Shifts | Usually decreases |
| Stabilizing | Intermediate | Unchanged | Decreases |
| Disruptive | Both extremes | Unchanged | Increases (can become bimodal) |

The population-genetic signature to memorize: **directional moves the mean; stabilizing and disruptive move the variance** (down and up, respectively).

### Balancing Selection: Keeping Both Alleles

**Heterozygote advantage (overdominance)** maintains a stable polymorphism because the fittest genotype, Aa, cannot breed true — every generation of $Aa \\times Aa$ matings regenerates both homozygotes. Classic case: **sickle cell**. Where malaria is endemic, HbA/HbS heterozygotes resist severe malaria, outreproducing both HbA/HbA (malaria-susceptible) and HbS/HbS (sickle cell disease). Selection therefore holds HbS at high frequency in malaria regions and lets it decay where malaria is absent — allele frequency maps mirror malaria maps.

**Heterozygote disadvantage (underdominance)** is unstable: whichever allele is rarer spends more of its time in low-fitness heterozygotes, so it is driven out. The population tips toward fixing whichever allele started more common.

**Negative frequency-dependent selection** gives a genotype higher fitness when it is RARE (predators overlook uncommon prey morphs; rare self-incompatibility alleles in plants find more compatible mates). It actively protects polymorphism, pushing frequencies back toward an interior equilibrium.

### Inbreeding: Mating, Not Selection

The inbreeding coefficient $F$ is the probability that an individual's two alleles are identical by descent. Inbreeding **redistributes genotypes** — heterozygosity falls from $2pq$ to $2pq(1 - F)$, with the deficit split between the homozygote classes — but by itself it does **not change allele frequencies**. It is not evolution at the allele level; it changes WHO carries the alleles. **Inbreeding depression** follows because rare deleterious recessives are suddenly exposed as homozygotes.

### Why Rare Recessives Resist Selection

Selection can only "see" a recessive allele in aa homozygotes. When $q$ is small, only $q^2$ of the population is exposed while the fraction $2pq \\approx 2q$ hides in unaffected carriers. At $q = 0.01$, carriers outnumber affected individuals by about 200 to 1 — so even a lethal recessive declines very slowly, and eugenic "removal of the affected" is mathematically futile. Selection against a **dominant** deleterious allele, by contrast, is fast: every copy is exposed.`
    },
    {
      id: 'pg3-worked',
      type: 'text' as const,
      content: `### Worked Example — One Generation of Selection Against aa

**Problem.** A large, randomly mating insect population has $p = 0.6$, $q = 0.4$. A new pesticide kills half of all aa individuals before reproduction ($w_{AA} = w_{Aa} = 1$, $w_{aa} = 0.5$, so $s = 0.5$). What is $q$ in the next generation?

**Step 1 — Genotypes at birth (H-W).**
$p^2 = 0.36, \\qquad 2pq = 0.48, \\qquad q^2 = 0.16$

**Step 2 — Weight each genotype by fitness and find mean fitness.**
$\\bar{w} = (0.36)(1) + (0.48)(1) + (0.16)(0.5) = 0.36 + 0.48 + 0.08 = 0.92$

**Step 3 — New frequency of a.** Each surviving Aa contributes one a allele of its two; each surviving aa contributes two of two:
$q' = \\frac{\\tfrac{1}{2}(0.48)(1) + (0.16)(0.5)}{\\bar{w}} = \\frac{0.24 + 0.08}{0.92} = \\frac{0.32}{0.92} \\approx 0.348$

So one generation of strong selection moves $q$ from 0.40 only to about 0.35.

**Step 4 — Contrast with a RARE recessive.** For a recessive lethal ($s = 1$), the recursion is $q' = q/(1 + q)$. At $q = 0.01$: $q' = 0.01/1.01 \\approx 0.0099$ — a change of about 1% of its value, because only $q^2 = 0.0001$ of the population is visible to selection. Rare recessives are nearly immortal in the gene pool.

**Balanced-polymorphism check.** In a malaria zone, suppose $w_{AS} = 1$, $w_{AA} = 0.85$ (malaria deaths), $w_{SS} = 0.2$ (sickle cell disease). Both homozygotes lose to the heterozygote, so neither allele can be eliminated: at equilibrium the S allele settles where the two homozygote penalties balance — high enough that S can reach frequencies near 0.1 to 0.2 despite being lethal when homozygous.`
    },
    {
      id: 'pg3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Selection & Balancing Polymorphism** 🎯`,
      exercise: {
        questions: [
          {
            question: `Genotype AA leaves an average of 100 offspring, Aa leaves 100, and aa leaves 60. The selection coefficient s against aa is:`,
            options: [`0.6`, `1.0`, `0.4`, `0.16`],
            correctAnswer: 2,
            explanation: `Relative fitness is scaled to the best genotype: $w_{aa} = 60/100 = 0.6$, and $s = 1 - w = 0.4$. Choosing 0.6 confuses the fitness itself with the selection coefficient; 1.0 would mean aa is lethal or sterile, which contradicts its 60 offspring.`
          },
          {
            question: `The HbS (sickle) allele remains at frequencies above 10% in regions where malaria is endemic, despite HbS/HbS causing severe disease. The best explanation is:`,
            options: [`Heterozygote advantage — HbA/HbS individuals resist malaria and outreproduce both homozygotes`, `A high recurrent mutation rate from HbA to HbS`, `Genetic drift in large African and South Asian populations`, `The HbS allele is dominant, so selection cannot act against it`],
            correctAnswer: 0,
            explanation: `This is the textbook balanced polymorphism: where malaria kills HbA/HbA individuals, the heterozygote has the highest fitness, and overdominance holds both alleles in the population. Mutation rates (about $10^{-5}$ per generation or less) are far too small, drift is weak in large populations and would not track malaria geography, and HbS is not dominant for the disease phenotype.`
          },
          {
            question: `A population of songbirds experiences strong selection in which intermediate-sized individuals survive best. After many generations, the expected population-genetic outcome is:`,
            options: [`A shift in mean body size toward the larger extreme`, `An increase in variance and a bimodal size distribution`, `A change in mean size with no change in variance`, `Little change in mean body size but reduced variance in size`],
            correctAnswer: 3,
            explanation: `Selection favoring the intermediate is stabilizing selection: it trims both tails, leaving the mean where it is while shrinking the variance. A mean shift is the signature of directional selection, and a bimodal, high-variance outcome is the signature of disruptive selection.`
          },
          {
            question: `In a population with no selection, mutation, migration, or drift, several generations of intense inbreeding will:`,
            options: [`Decrease the frequency of the recessive allele`, `Increase homozygosity while leaving allele frequencies unchanged`, `Increase the frequency of the dominant allele`, `Increase heterozygosity above 2pq`],
            correctAnswer: 1,
            explanation: `Inbreeding is nonrandom mating: it reshuffles alleles into more homozygous GENOTYPES — heterozygosity falls to $2pq(1-F)$ — but no allele copies are added or removed, so $p$ and $q$ are untouched. Allele frequencies only change afterward if the newly exposed recessive homozygotes suffer reduced fitness (inbreeding depression), which is a separate, selective step.`
          },
          {
            question: `A fully penetrant lethal recessive allele is at frequency q = 0.01. Selection against it is extremely slow because:`,
            options: [`The mutation rate back to the normal allele is high`, `Lethal alleles are protected by heterozygote advantage`, `Almost all copies of the allele are carried by phenotypically normal heterozygotes, invisible to selection`, `Selection cannot act on alleles rarer than 5%`],
            correctAnswer: 2,
            explanation: `At $q = 0.01$, homozygotes are $q^2 = 0.0001$ of the population while carriers are about $2q = 0.02$ — roughly 200 carriers for every affected individual. Selection removes only the $q^2$ class each generation, so the decline is glacial. Nothing in the problem invokes back-mutation or overdominance, and there is no 5% threshold below which selection stops acting.`
          }
        ]
      }
    },
    {
      id: 'pg3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- Relative fitness $w$ is scaled to the best genotype; selection coefficient $s = 1 - w$
- Directional selection shifts the mean; stabilizing shrinks variance; disruptive inflates variance (bimodality)
- Heterozygote advantage (sickle cell in malaria zones) is a stable balanced polymorphism; heterozygote disadvantage is unstable and fixes the more common allele
- Negative frequency-dependent selection favors rare types and preserves polymorphism
- Inbreeding raises $F$ and homozygosity — heterozygosity becomes $2pq(1-F)$ — without changing allele frequencies; inbreeding depression comes from exposed deleterious recessives
- Selection against a rare recessive is inefficient because the allele hides in heterozygotes ($2pq$ dwarfs $q^2$); recessive lethals follow $q' = q/(1+q)$`
    }
  ]
};
