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

**Heterozygote disadvantage (underdominance)** is unstable: whichever allele is rarer spends more of its time in low-fitness heterozygotes, so it is driven out. The population tips toward fixing whichever allele starts on the favored side of an unstable equilibrium (the more common allele when the two homozygotes are equally fit).

**Negative frequency-dependent selection** gives a genotype higher fitness when it is RARE (predators overlook uncommon prey morphs; rare self-incompatibility alleles in plants find more compatible mates). It actively protects polymorphism, pushing frequencies back toward an interior equilibrium.

### Inbreeding: Mating, Not Selection

Inbreeding (mating between relatives) **redistributes genotypes** — heterozygotes become rarer and both homozygote classes become more common — but by itself it does **not change allele frequencies**. It is not evolution at the allele level; it changes WHO carries the alleles. **Inbreeding depression** follows because rare deleterious recessives are suddenly exposed as homozygotes.

<!-- yield:low -->
The inbreeding coefficient $F$ is the probability that an individual's two alleles are identical by descent. Heterozygosity falls from $2pq$ to $2pq(1 - F)$, with the deficit split equally between the two homozygote classes.
<!-- /yield -->

### Why Rare Recessives Resist Selection

Selection can only "see" a recessive allele in aa homozygotes. When $q$ is small, only $q^2$ of the population is exposed while the fraction $2pq \\approx 2q$ hides in unaffected carriers. At $q = 0.01$, carriers outnumber affected individuals by about 200 to 1 — so even a lethal recessive declines very slowly, and eugenic "removal of the affected" is mathematically futile. Selection against a **dominant** deleterious allele, by contrast, is fast: every copy is exposed.`
    },
    {
      id: 'pg3-worked',
      type: 'text' as const,
      content: `### Worked Example — One Generation of Selection Against aa

**Problem 1.** A large, randomly mating insect population has $p = 0.6$, $q = 0.4$. A new pesticide kills half of all aa individuals before reproduction ($w_{AA} = w_{Aa} = 1$, $w_{aa} = 0.5$, so $s = 0.5$).

- **(a)** What are the genotype frequencies at birth?
- **(b)** What is the mean fitness $\\bar{w}$?
- **(c)** What is $q$ in the next generation?

**(a) Genotypes at birth (H-W).** $p^2 = 0.36, \\qquad 2pq = 0.48, \\qquad q^2 = 0.16$

**(b) Weight each genotype by fitness.** With the frequencies from (a): $\\bar{w} = (0.36)(1) + (0.48)(1) + (0.16)(0.5) = 0.36 + 0.48 + 0.08 = 0.92$

**(c) New frequency of a.** Each surviving Aa contributes one a allele of its two; each surviving aa contributes two of two. With $\\bar{w} = 0.92$ from (b):

$$q' = \\frac{\\tfrac{1}{2}(0.48)(1) + (0.16)(0.5)}{\\bar{w}} = \\frac{0.24 + 0.08}{0.92} = \\frac{0.32}{0.92} \\approx 0.348$$

One generation of strong selection moves $q$ from 0.40 only to about 0.35.

**Problem 2.** Now suppose aa is lethal ($s = 1$) and $q = 0.005$.

- **(a)** What fraction of the population is affected, and what fraction carries the allele unseen?
- **(b)** What share of all a copies sits in aa individuals?
- **(c)** How far does $q$ fall in one generation?

**(a) Affected vs. carriers.** Selection can remove only the aa class, $q^2 = 0.000025$ of the population, while $2pq = 2(0.995)(0.005) \\approx 0.00995$ carries the allele unseen: about 400 carriers per affected person.

**(b) Exposed copies.** The share of all a copies sitting in aa individuals is $2q^2 / 2q = q$, just 0.5%.

**(c) One generation.** Even a lethal removes only about 0.5% of the allele's copies per generation: $q$ falls from 0.00500 to about 0.00498. Rare recessives are nearly immortal in the gene pool.

<!-- yield:low -->
The general recursion for a recessive lethal is $q' = q/(1 + q)$ (here $0.005/1.005 \\approx 0.00498$), which gives $q_t = q_0/(1 + t\\,q_0)$ after $t$ generations: halving a rare lethal's frequency takes about $1/q_0$ generations (about 200 generations at $q_0 = 0.005$).
<!-- /yield -->

**Problem 3.** In a malaria zone, suppose $w_{AS} = 1$, $w_{AA} = 0.85$ (malaria deaths), $w_{SS} = 0.2$ (sickle cell disease).

- **(a)** Why can neither allele be eliminated?
- **(b)** Where does the S allele settle?

**(a) Heterozygote advantage.** Whichever allele becomes rare sits almost entirely in the fittest genotype, AS, so selection pushes it back up; $AS \\times AS$ matings also keep regenerating both homozygotes.

**(b) The balance point.** The homozygote penalties are $s_{AA} = 1 - 0.85 = 0.15$ and $s_{SS} = 1 - 0.2 = 0.80$. S settles where they balance, near 0.1 to 0.2, despite SS being severely harmful.

<!-- yield:low -->
The equilibrium is $\\hat{q}_S = s_{AA}/(s_{AA} + s_{SS}) = 0.15/(0.15 + 0.80) \\approx 0.16$.
<!-- /yield -->`
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
            yield: 'MEDIUM',
            explanation: `Relative fitness is scaled to the best genotype: $w_{aa} = 60/100 = 0.6$, and $s = 1 - w = 0.4$. Choosing 0.6 confuses the fitness itself with the selection coefficient; 1.0 would mean aa is lethal or sterile, which contradicts its 60 offspring.`
          },
          {
            question: `The HbS (sickle) allele remains at frequencies above 10% in regions where malaria is endemic, despite HbS/HbS causing severe disease. The best explanation is:`,
            options: [`Heterozygotes resist malaria and outreproduce homozygotes`, `A high recurrent mutation rate from HbA to HbS`, `Genetic drift in large tropical populations`, `The HbS allele is dominant, shielding it from selection`],
            correctAnswer: 0,
            yield: 'HIGH',
            explanation: `This is the textbook balanced polymorphism: where malaria kills HbA/HbA individuals, the heterozygote resists malaria and has the highest fitness, outreproducing both homozygotes, and this heterozygote advantage (overdominance) holds both alleles in the population. Mutation rates (about $10^{-5}$ per generation or less) are far too small, drift is weak in large populations and would not track malaria geography, and HbS is not dominant for the disease phenotype.`
          },
          {
            question: `A population of songbirds experiences strong selection in which intermediate-sized individuals survive best. After many generations, the expected population-genetic outcome is:`,
            options: [`A shift in mean body size toward the larger extreme`, `An increase in variance and a bimodal size distribution`, `A change in mean size with no change in variance`, `Little change in mean body size but reduced variance in size`],
            correctAnswer: 3,
            yield: 'HIGH',
            explanation: `Selection favoring the intermediate is stabilizing selection: it trims both tails, leaving the mean where it is while shrinking the variance. A mean shift is the signature of directional selection, and a bimodal, high-variance outcome is the signature of disruptive selection.`
          },
          {
            question: `In a population with no selection, mutation, migration, or drift, several generations of intense inbreeding will:`,
            options: [`Raise heterozygosity but leave allele frequencies unchanged`, `Raise homozygosity but leave allele frequencies unchanged`, `Raise homozygosity and lower the recessive allele frequency`, `Raise heterozygosity and lower the recessive allele frequency`],
            correctAnswer: 1,
            yield: 'HIGH',
            explanation: `Inbreeding is nonrandom mating: it reshuffles alleles into more homozygous GENOTYPES — heterozygotes become rarer — but no allele copies are added or removed, so $p$ and $q$ are untouched. Allele frequencies only change afterward if the newly exposed recessive homozygotes suffer reduced fitness (inbreeding depression), which is a separate, selective step, excluded here by the absence of selection. Heterozygosity drops rather than rises, and the recessive allele frequency does not fall without selection.`
          },
          {
            question: `A fully penetrant lethal recessive allele is at frequency q = 0.01. Selection against it is extremely slow because:`,
            options: [`The mutation rate back to the normal allele is high`, `Lethal alleles are protected by heterozygote advantage`, `Nearly all copies are in unaffected carriers`, `Selection cannot act on alleles rarer than 5%`],
            correctAnswer: 2,
            yield: 'MEDIUM',
            explanation: `At $q = 0.01$, homozygotes are $q^2 = 0.0001$ of the population while carriers are about $2q = 0.02$ — roughly 200 carriers for every affected individual. Carriers are phenotypically normal, so the allele copies they hold are invisible to selection, which removes only the $q^2$ class each generation; the decline is glacial. Nothing in the problem invokes back-mutation or overdominance, and there is no 5% threshold below which selection stops acting.`
          }
        ]
      }
    },
    {
      id: 'pg3-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 3

- **Relative fitness.** $w$ is scaled to the best genotype ($w = 1$), and the selection coefficient is $s = 1 - w$.
- **Three selection modes.** Directional shifts the mean; stabilizing shrinks the variance; disruptive inflates it toward bimodality.
- **Balancing selection.** Heterozygote advantage (sickle cell where malaria is endemic) and rare-type advantage keep both alleles.
- **Rare recessives resist selection.** Hidden in carriers ($2pq \\gg q^2$), a rare lethal loses only about the fraction $q$ of its copies per generation.

**Common traps**

- **Fitness vs. selection coefficient.** aa leaving 60 offspring per 100 has $w = 0.6$ but $s = 0.4$; do not swap them.
- **Inbreeding changing allele frequencies.** It turns heterozygotes into homozygotes; $q$ moves only if selection then acts on the exposed recessives.
- **Underdominance as balancing.** Heterozygote disadvantage is unstable: it fixes one allele (usually the more common one) rather than preserving both.
- **HbS kept by mutation or drift.** Mutation is far too slow and drift weak in large populations; heterozygote advantage holds HbS.

<!-- yield:low -->
**Low-yield extras**

- The inbreeding coefficient $F$ (probability two alleles are identical by descent) lowers heterozygosity to $2pq(1-F)$; a recessive lethal follows $q' = q/(1+q)$, so halving a rare lethal takes about $1/q_0$ generations
<!-- /yield -->`
    }
  ]
};
