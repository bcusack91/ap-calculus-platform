export const bioNatSelectionPart2Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp2-intro',
      type: 'text' as const,
      content: `
## Types of Natural Selection

**Part 2 of 7**

When a trait varies continuously across a population — height, beak depth, birth weight, running speed — we can plot its **phenotype distribution** as a bell-shaped curve. Natural selection reshapes that curve by favoring some phenotypes over others. There are **three modes** of selection on a quantitative trait, and each transforms the curve in a characteristic way.

The key analytical tools are the **mean** (where the peak of the curve sits) and the **variance / standard deviation** (how spread out the curve is). For each mode you must be able to state:

1. Which phenotypes are favored?
2. What happens to the **mean**?
3. What happens to the **variance** (spread)?

> **Anchor idea:** Selection acts on **phenotypes**, but it changes the population by altering the **allele (and genotype) frequencies** that underlie those phenotypes. The curve is a *phenotype* distribution; the evolutionary consequence is a shift in the *gene pool*.
      `
    },
    {
      id: 'nsp2-three-modes',
      type: 'text' as const,
      content: `
### The Three Modes — Comparison Table

| Mode | Favored phenotype(s) | Effect on MEAN | Effect on VARIANCE | Curve shape after | Classic example |
|------|----------------------|----------------|--------------------|--------------------|-----------------|
| **Directional** | One extreme | **Shifts** toward the favored extreme | Decreases (often) | Peak slides left or right | Galápagos finch beak depth increasing in drought; peppered moth |
| **Stabilizing** | Intermediate | **Unchanged** | **Decreases** (narrows) | Taller, narrower peak | Human birth weight (~3.4 kg optimum) |
| **Disruptive (diversifying)** | Both extremes | Unchanged (or splits) | **Increases** | Two peaks (bimodal) | Black-bellied seedcracker finch (small vs. large beaks) |

**How to read each mode:**

- **Directional selection** favors phenotypes at *one* end of the range. The mean **moves** in that direction. This is the mode behind most observed rapid evolution (drought, pollution, antibiotic exposure, predation pressure).
- **Stabilizing selection** favors the *intermediate* phenotype and selects **against both extremes**. The mean stays put, but the distribution gets **narrower** — variance drops. This is actually the most common mode in stable environments; it maintains the status quo. Human birth weight is the textbook case: very small babies face survival risks, very large babies face delivery complications, so intermediate weights have the highest fitness.
- **Disruptive selection** favors **both extremes** and selects **against** the intermediate. Variance **increases**, and the single peak can split into **two peaks** (a bimodal distribution). Over long periods, disruptive selection can contribute to the formation of new species.
      `
    },
    {
      id: 'nsp2-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Identifying the Mode
      `,
      exercise: {
        questions: [
          {
            question: 'In a population of finches, an environment offers only two reliable food sources: very small soft seeds (best eaten with a small beak) and very large hard seeds (best cracked with a large beak). Medium-beaked birds handle neither well and reproduce least. Over generations, the beak-size distribution becomes bimodal. Which mode of selection is operating, and what happens to variance?',
            options: [
              'Directional selection; variance decreases',
              'Stabilizing selection; variance decreases',
              'Disruptive selection; variance increases',
              'Stabilizing selection; variance increases'
            ],
            correctAnswer: 2,
            explanation: 'Both extremes (small and large beaks) are favored while the intermediate is selected against — this is DISRUPTIVE (diversifying) selection, which INCREASES variance and can produce a bimodal distribution. Option B is the trap: stabilizing selection is the exact opposite — it favors the INTERMEDIATE and DECREASES variance. The bimodal outcome rules out stabilizing selection entirely.'
          },
          {
            question: 'Human birth weight clusters tightly around ~3.4 kg. Babies that are much lighter or much heavier than this historically had lower survival rates. Across generations the mean birth weight has stayed roughly constant while the distribution remains narrow. This is the clearest example of:',
            options: [
              'Directional selection, because birth weight is being optimized toward one extreme',
              'Stabilizing selection, because intermediate phenotypes are favored and extremes are selected against',
              'Disruptive selection, because both very small and very large babies are selected for',
              'Sexual selection, because parents choose intermediate-sized mates'
            ],
            correctAnswer: 1,
            explanation: 'Selection AGAINST both extremes while favoring the INTERMEDIATE, with a stable mean and reduced variance, is the definition of STABILIZING selection. Option C is the trap (and the reverse of the truth): disruptive selection favors the extremes and selects against the middle, which would INCREASE the proportion of very small and very large babies — the opposite of what is observed.'
          }
        ]
      }
    },
    {
      id: 'nsp2-worked',
      type: 'text' as const,
      content: `
### Worked Example — Directional Selection Shifts Allele Frequency

Directional selection at the phenotype level produces a measurable change in **allele frequency** at the genetic level. Let's trace one generation of selection in a population where a dominant allele A produces a dark coat that camouflages well against a newly darkened (polluted) habitat, and the recessive a produces a light coat that predators spot easily.

**Setup — starting allele frequencies:**

Let the frequency of the dark allele be $p = 0.40$ and the light allele be $q = 0.60$, with $p + q = 1$. Assume the starting genotype frequencies follow $p^2 + 2pq + q^2 = 1$.

| Genotype | Phenotype | Starting frequency | Calculation |
|----------|-----------|--------------------|-------------|
| AA | Dark | $p^2 = 0.16$ | $0.40^2$ |
| Aa | Dark | $2pq = 0.48$ | $2(0.40)(0.60)$ |
| aa | Light | $q^2 = 0.36$ | $0.60^2$ |

So **64%** of the population is dark (AA + Aa) and **36%** is light (aa).

**Apply directional selection against light coats.** Suppose predation means light (aa) individuals have relative fitness $w_{aa} = 0.5$, while both dark genotypes have $w_{AA} = w_{Aa} = 1.0$. Start with a population of **1000** individuals.

| Genotype | Before (count) | Relative fitness $w$ | Surviving (count $\\times w$) |
|----------|----------------|----------------------|--------------------------------|
| AA | 160 | 1.0 | 160 |
| Aa | 480 | 1.0 | 480 |
| aa | 360 | 0.5 | 180 |
| **Total** | **1000** | — | **820** |

**Recompute allele frequencies after selection** using allele-counting. Each survivor carries 2 alleles, so survivors carry $2 \\times 820 = 1640$ alleles.

- Count of A alleles: each AA contributes 2, each Aa contributes 1 → $2(160) + 1(480) = 320 + 480 = 800$.
- Count of a alleles: each aa contributes 2, each Aa contributes 1 → $2(180) + 1(480) = 360 + 480 = 840$.

New frequencies:

$p' = \\frac{800}{1640} \\approx 0.488$ and $q' = \\frac{840}{1640} \\approx 0.512$

**Result:** In a single generation, the dark allele frequency rose from $p = 0.40$ to $p' \\approx 0.49$, while the light allele fell from $q = 0.60$ to $q' \\approx 0.51$. The phenotype distribution shifted *toward* the dark extreme — the signature of **directional selection** — and we have quantified the underlying gene-pool change. Repeated over many generations, $p$ continues climbing toward fixation.

> **Skill to master:** Going from genotype counts back to allele frequencies via allele-counting — $p = \\frac{2(\\text{AA}) + (\\text{Aa})}{2N}$ — is the single most important computation in this unit. Practice it until it is automatic.
      `
    },
    {
      id: 'nsp2-distribution',
      type: 'text' as const,
      content: `
### Reading the Effect on the MEAN and VARIANCE Numerically

Because the three modes are defined by their effect on the **mean** and **variance** of a phenotype distribution, it helps to see the numbers move. Consider a population of plants whose height (cm) is recorded before and after one generation of selection under each mode. The same starting distribution is used in every case (mean = 50 cm, with a wide spread).

| Mode | Mean BEFORE | Mean AFTER | Variance BEFORE | Variance AFTER | What you would observe |
|------|-------------|------------|-----------------|----------------|------------------------|
| **Directional** (tall favored) | 50 | **58** ↑ | 90 | 70 ↓ | Peak slides toward tall extreme |
| **Stabilizing** (medium favored) | 50 | **50** (same) | 90 | **45** ↓↓ | Peak stays; curve narrows sharply |
| **Disruptive** (extremes favored) | 50 | 50 (or splits) | 90 | **150** ↑ | Curve widens; becomes bimodal |

**How to interpret each row:**

- **Directional:** the **mean moves** (50 → 58) because one tail of the distribution is favored; variance often drops as the disfavored tail is trimmed.
- **Stabilizing:** the **mean is unchanged** (50 → 50) but the **variance falls** (90 → 45) because both tails are removed and individuals cluster near the optimum.
- **Disruptive:** the **mean can stay the same**, but the **variance rises** (90 → 150) as the middle empties out and the two extremes fill in — the curve goes bimodal.

> **Exam shortcut:** To classify a mode from a graph or data table, ask **two** questions in order: (1) *Did the mean shift?* If yes → **directional**. (2) If the mean held still, *did the spread shrink or grow?* Shrink → **stabilizing**; grow/bimodal → **disruptive**. These two checks resolve nearly every "which mode?" item.
      `
    },
    {
      id: 'nsp2-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Quantitative Directional Selection
      `,
      exercise: {
        questions: [
          {
            question: 'A population of 500 beetles has the following genotype counts at a locus: 180 BB, 240 Bb, 80 bb. What is the frequency of the b allele BEFORE any selection?',
            options: [
              '0.16',
              '0.40',
              '0.48',
              '0.60'
            ],
            correctAnswer: 1,
            explanation: 'Use allele-counting: the b allele count is 2(bb) + 1(Bb) = 2(80) + 240 = 400. Total alleles = 2N = 2(500) = 1000. So frequency of b = 400/1000 = 0.40. Option A (0.16) is the trap — that is the GENOTYPE frequency of bb (80/500 = 0.16, which equals q²), not the ALLELE frequency q. Confusing q² with q is the most common error in the unit.'
          },
          {
            question: 'In the same beetle population, directional selection acts so that bb individuals have relative fitness 0.0 (all die before reproducing) while BB and Bb have fitness 1.0. After one round of selection, which best describes the change in the B allele frequency?',
            options: [
              'It stays exactly the same because Bb heterozygotes still carry b alleles',
              'It increases, because removing bb individuals eliminates only b alleles, raising the proportion of B',
              'It decreases, because the population size dropped',
              'It drops the b allele to zero immediately because all bb individuals are removed'
            ],
            correctAnswer: 1,
            explanation: 'Removing bb individuals removes ONLY b alleles (2 per bb individual), so the proportion of B alleles among survivors INCREASES. Option D is the trap: complete selection against the recessive homozygote does NOT eliminate b in one generation because heterozygous Bb survivors still carry and transmit b alleles — this is exactly why recessive alleles persist and selection against them slows dramatically as q gets small.'
          }
        ]
      }
    },
    {
      id: 'nsp2-balancing',
      type: 'text' as const,
      content: `
### Balancing Selection — How Variation Is Maintained

Directional and stabilizing selection tend to *remove* variation. Yet real populations stay genetically diverse. **Balancing selection** is an umbrella for mechanisms that actively *maintain* multiple alleles. Two AP-relevant forms:

- **Heterozygote advantage (overdominance):** The heterozygote has higher fitness than *either* homozygote. The classic example is the **sickle-cell allele**. In regions where malaria is endemic, individuals who are heterozygous (carriers) are resistant to severe malaria, while one homozygote suffers sickle-cell disease and the other lacks malaria resistance. Because the heterozygote is fittest, **both** alleles are maintained in the population — neither goes extinct.
- **Frequency-dependent selection:** The fitness of a phenotype depends on how *common* it is. In **negative** frequency-dependence, rare phenotypes have an advantage (e.g., predators form a "search image" for the common prey type, so rare morphs are overlooked), which preserves multiple forms.

> **Why this matters for Hardy-Weinberg (Part 5):** Heterozygote advantage is a powerful reason a real population's genotype frequencies deviate from simple expectations — it keeps a "harmful" recessive allele at much higher frequency than selection against the homozygote alone would predict.
      `
    },
    {
      id: 'nsp2-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 2 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'In a malaria-endemic region, the sickle-cell allele remains common despite causing a serious disease in one homozygous genotype. The best explanation is that:',
            options: [
              'Directional selection is steadily increasing the sickle-cell allele toward fixation',
              'Heterozygote advantage (a form of balancing selection) maintains both alleles because heterozygotes resist malaria and have the highest fitness',
              'Stabilizing selection eliminates both homozygotes equally, leaving only heterozygotes that breed true',
              'The allele is neutral and its frequency is governed purely by genetic drift'
            ],
            correctAnswer: 1,
            explanation: 'Heterozygote advantage (overdominance) means the heterozygote outperforms BOTH homozygotes, so balancing selection actively maintains both alleles at intermediate frequency. Option C is the trap: although heterozygotes are favored, two heterozygotes (Aa × Aa) do NOT "breed true" — Mendelian segregation regenerates both homozygotes every generation, which is precisely why both alleles, not just the heterozygote, persist in the gene pool.'
          },
          {
            question: 'A field of wildflowers is pollinated by bees that learn to recognize and preferentially visit whichever flower color is most abundant, ignoring rare colors. As a result, rare color variants set more seed than common ones. Over time, multiple color variants are maintained. This pattern is BEST described as:',
            options: [
              'Directional selection toward the rarest color',
              'Stabilizing selection on flower color',
              'Negative frequency-dependent selection',
              'Disruptive selection producing two fixed color morphs'
            ],
            correctAnswer: 2,
            explanation: 'When the FITNESS of a phenotype depends on how COMMON it is, and RARE types are favored, that is negative frequency-dependent selection — a mechanism that maintains multiple variants. Option A is the trap: there is no fixed "best" color toward which the mean shifts; the advantage flips to whichever color is currently rare, so no single sustained directional shift occurs. The selective pressure itself changes as frequencies change.'
          }
        ]
      }
    }
  ]
};
