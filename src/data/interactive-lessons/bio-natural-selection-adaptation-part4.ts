export const bioNatSelectionPart4Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp4-intro',
      type: 'text' as const,
      content: `
## Adaptation Mechanisms — Sources of Variation and Forces of Evolution

**Part 4 of 7**

Natural selection can only sculpt variation that already exists; it does not create it. So we must answer two questions:

1. **Where does heritable variation come from?** (the *raw material* of evolution)
2. **What forces actually change allele frequencies?** (the *mechanisms* of evolution — selection is only one of five)

An **adaptation** is a heritable trait that increases an organism's fitness in its environment — but crucially, adaptation is a **population-level outcome** of these forces acting over generations, not something an individual does on demand.

> **Anchor idea:** Mutation + recombination + gene flow *generate and reshuffle* variation. Natural selection, genetic drift, gene flow, mutation, and non-random mating then *change allele frequencies*. Evolution = the net result.
      `
    },
    {
      id: 'nsp4-sources',
      type: 'text' as const,
      content: `
### Sources of Genetic Variation

| Source | Mechanism | Role |
|--------|-----------|------|
| **Mutation** | Random change in DNA sequence (point mutations, insertions, deletions, chromosomal changes) | The **ultimate source** of all new alleles |
| **Recombination** | Crossing over in meiosis + independent assortment + random fertilization | **Reshuffles** existing alleles into new combinations (does not make new alleles) |
| **Gene flow** | Movement of alleles between populations via migrating individuals or gametes | **Introduces** alleles new to a population from elsewhere |

Three points students must keep straight:

- **Mutation is the only source of brand-new alleles.** Recombination and gene flow rearrange or import alleles but cannot invent a sequence that did not exist somewhere.
- **Mutations are random with respect to need.** A bacterium does not mutate toward resistance because an antibiotic is present; mutations occur regardless, and selection then acts on whichever happen to be beneficial.
- Most evolutionarily important variation in sexual species at any given moment comes from **recombination** shuffling the standing pool of alleles, but that pool was ultimately *built* by mutation.
      `
    },
    {
      id: 'nsp4-five-forces',
      type: 'text' as const,
      content: `
### The Five Forces That Change Allele Frequencies

A population stays in **Hardy-Weinberg equilibrium** (allele frequencies constant) only if *none* of these five forces act. Each force is therefore a **violation** of a Hardy-Weinberg condition (see Part 5). Memorize this table — it is the conceptual core of the entire unit.

| Force | What it does | Effect on allele frequency | Effect on genetic variation | "Directional"? |
|-------|--------------|----------------------------|------------------------------|----------------|
| **Natural selection** | Differential survival/reproduction by phenotype | Shifts toward favored alleles | Usually decreases | Yes — adaptive |
| **Genetic drift** | Random change in allele frequency due to chance, especially in small populations | Changes randomly; can fix or lose alleles | **Decreases** (alleles lost) | No — random |
| **Gene flow** | Migration of alleles between populations | Makes populations **more similar** | Increases within a population; homogenizes among populations | No |
| **Mutation** | New alleles from DNA changes | Changes very slowly per locus | **Increases** (adds alleles) | No |
| **Non-random mating** | Mate choice based on genotype/phenotype (e.g., assortative mating, inbreeding) | Does **not** change allele frequency directly | Redistributes genotypes (more homozygotes) | No |

**Two subtleties that are heavily tested:**

- **Non-random mating changes GENOTYPE frequencies, not ALLELE frequencies.** Inbreeding, for instance, raises the frequency of homozygotes and lowers heterozygotes, but the underlying $p$ and $q$ are unchanged. (It can, however, *expose* recessive alleles to selection, indirectly enabling evolution.)
- **Mutation alone is far too slow** to change allele frequencies appreciably over a few generations; its evolutionary importance is as the *source* of variation, not as a frequency-changing force on its own.
      `
    },
    {
      id: 'nsp4-drift',
      type: 'text' as const,
      content: `
### Genetic Drift: Bottlenecks and Founder Effects

**Genetic drift** is the change in allele frequencies due to **random sampling** from one generation to the next. Like flipping a coin only a few times, small samples deviate from expectation by chance. The smaller the population, the **stronger** the drift. Two special cases:

- **Bottleneck effect:** A drastic, often disaster-driven *reduction* in population size (disease, hunting, habitat loss). The few survivors carry only a random subset of the original gene pool, so allele frequencies shift by chance and overall genetic diversity **drops**. Example: northern elephant seals were hunted to ~20 individuals; the recovered population (now > 100,000) has extremely low genetic variation. Cheetahs show a similar genetic signature.
- **Founder effect:** A few individuals *colonize* a new, isolated area (e.g., an island). The new population's allele frequencies reflect only the **founders'** alleles, not the source population's, and can differ markedly by chance. Example: the high frequency of certain rare alleles in genetically isolated human populations such as the Amish or settlers of remote islands.

> **AP trap:** Drift is **random**, not adaptive — it can *increase* the frequency of a harmful or neutral allele purely by chance. It is most powerful in **small** populations and negligible in very large ones. Do not describe drift as "the population adapting"; nothing is being optimized.
      `
    },
    {
      id: 'nsp4-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Forces and Drift
      `,
      exercise: {
        questions: [
          {
            question: 'A volcanic eruption nearly wipes out a large lizard population, leaving only 12 random survivors. The new population, grown back to thousands, has much lower genetic diversity than before, and the frequency of a neutral blue-scale allele has risen sharply purely by chance. This is BEST described as:',
            options: [
              'Directional natural selection favoring blue scales',
              'The bottleneck effect, a form of genetic drift',
              'Gene flow from a neighboring population',
              'Stabilizing selection reducing variation'
            ],
            correctAnswer: 1,
            explanation: 'A catastrophic crash in population size that randomly reduces genetic diversity and shifts allele frequencies by CHANCE is the BOTTLENECK EFFECT, a form of genetic drift. Option A is the trap: the allele is explicitly NEUTRAL and its rise is by CHANCE, so there is no differential fitness — selection requires a fitness difference, which is absent here. Random ≠ adaptive.'
          },
          {
            question: 'A botanist notes that in a particular plant species, self-pollination (a form of inbreeding) has become very common. Over several generations, the proportion of heterozygotes drops sharply while homozygotes increase, yet the overall frequencies of the two alleles (p and q) stay the same. Which force is responsible?',
            options: [
              'Genetic drift, because allele frequencies are changing randomly',
              'Non-random mating, which alters genotype frequencies without changing allele frequencies',
              'Gene flow, because pollen is moving between plants',
              'Mutation, which is creating new homozygous genotypes'
            ],
            correctAnswer: 1,
            explanation: 'Inbreeding is NON-RANDOM MATING: it redistributes existing alleles into more homozygous genotypes (fewer heterozygotes) WITHOUT changing the underlying allele frequencies p and q. Option A is the trap: drift changes ALLELE frequencies by chance, but here the allele frequencies are explicitly UNCHANGED — only the genotype proportions shift, which is the defining signature of non-random mating.'
          }
        ]
      }
    },
    {
      id: 'nsp4-founder-worked',
      type: 'text' as const,
      content: `
### Worked Example — Founder Effect Changes Allele Frequency

A large mainland beetle population has allele frequencies $p = 0.70$ (allele A) and $q = 0.30$ (allele a) at a color locus. A storm blows **10 beetles** onto a remote island, where they establish a new population. By chance, the founders happen to consist of:

| Genotype | Number of founders | A alleles contributed | a alleles contributed |
|----------|--------------------|-----------------------|------------------------|
| AA | 3 | 6 | 0 |
| Aa | 4 | 4 | 4 |
| aa | 3 | 0 | 6 |
| **Total** | **10** | **10** | **10** |

**Compute the island (founder) allele frequencies** by allele-counting. Total alleles $= 2N = 2(10) = 20$.

$p_{island} = \\frac{10}{20} = 0.50$ and $q_{island} = \\frac{10}{20} = 0.50$

**Compare to the source population:**

| Allele | Mainland frequency | Island (founder) frequency | Change |
|--------|--------------------|-----------------------------|--------|
| A ($p$) | 0.70 | 0.50 | $\\Delta p = -0.20$ |
| a ($q$) | 0.30 | 0.50 | $\\Delta q = +0.20$ |

**Interpretation:** Nothing about fitness changed — the island beetles were not "better adapted." Purely by the **chance composition of the 10 founders**, the rare a allele jumped from 0.30 to 0.50, a change of $\\Delta q = +0.20$ in a single colonization event. This is the **founder effect**: a small founding sample carries an unrepresentative slice of the source gene pool, so the new population's allele frequencies differ from the source by chance. With only 10 founders, sampling error is large; had 10,000 beetles colonized, $p_{island}$ would lie very close to 0.70.

> **Key takeaway:** Both founder effects and bottlenecks are **genetic drift** — random allele-frequency change driven by **small sample size**. The smaller the founding group, the larger the expected deviation from the source population.
      `
    },
    {
      id: 'nsp4-conv-div',
      type: 'text' as const,
      content: `
### Coevolution, Convergent vs. Divergent Evolution

**Coevolution** is reciprocal evolutionary change between two interacting species, where each acts as a selective pressure on the other. Examples: predator–prey "arms races" (faster cheetahs select for faster gazelles, and vice versa); flowering plants and their specific pollinators; hosts and parasites.

**Convergent vs. divergent evolution** — and the structures they leave behind:

| Pattern | What happens | Structures produced | Example |
|---------|--------------|---------------------|---------|
| **Divergent evolution** | Related species accumulate differences from a **common ancestor** (often in different environments) | **Homologous** structures (same origin, different function) | Tetrapod forelimbs: bat wing, whale flipper, human arm |
| **Convergent evolution** | **Unrelated** species independently evolve **similar** traits under similar selective pressures | **Analogous** structures (same function, different origin) | Wings of birds vs. insects; streamlined body of sharks (fish) vs. dolphins (mammals) |

**Distinguishing the structures is a high-frequency AP item:**

- **Homologous** = shared **ancestry**, possibly different functions (evidence of common descent → divergent evolution).
- **Analogous** = shared **function**, independent origins (evidence of convergent evolution; NOT close relatedness).

> **Trap:** Two species looking alike (e.g., a dolphin and a shark both being sleek and finned) does **not** mean they are closely related. Analogous structures arise from **convergent** evolution under similar selection pressures, and they *mislead* if used to infer ancestry. Use homologies and molecular data — not analogies — to build evolutionary relationships.
      `
    },
    {
      id: 'nsp4-geneflow-worked',
      type: 'text' as const,
      content: `
### Worked Example — Gene Flow Homogenizes Two Populations

Gene flow has the opposite effect of drift: instead of making isolated populations diverge by chance, **migration makes populations more genetically similar**. A quick calculation shows how.

**Setup.** Two beetle populations are isolated at a color locus:

| Population | Frequency of A ($p$) | Frequency of a ($q$) |
|------------|----------------------|----------------------|
| Mainland | 0.90 | 0.10 |
| Island | 0.30 | 0.70 |

Now suppose the island population is, after a migration event, composed of **80% long-time residents** and **20% new migrants from the mainland**. What is the island's new $p$?

**Step — Weighted average of the contributing allele frequencies:**

$p_{new} = (0.80)(p_{island}) + (0.20)(p_{mainland})$

$p_{new} = (0.80)(0.30) + (0.20)(0.90) = 0.24 + 0.18 = 0.42$

**Result:** The island's frequency of A rose from 0.30 to **0.42** in one migration event, $\\Delta p = +0.12$, moving it **toward** the mainland value of 0.90. The recessive allele correspondingly fell, $q_{new} = 1 - 0.42 = 0.58$. With continued gene flow, the two populations' allele frequencies converge.

**Contrast with drift.** Note the direction of each force:

- **Gene flow** makes populations **more similar** (homogenizing) and can introduce alleles that are *new* to a population.
- **Genetic drift** (founder effect, bottleneck) makes small, isolated populations **diverge** from one another by chance.

> **AP synthesis:** This is why **isolation** (no gene flow) is a prerequisite for **speciation** — gene flow continually blends populations back together, preventing them from diverging into separate species. Cut off gene flow, and drift plus differing selection can drive two populations apart.
      `
    },
    {
      id: 'nsp4-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 4 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Dolphins (mammals) and sharks (fish) both have streamlined bodies and dorsal fins, yet they are only distantly related and last shared a common ancestor hundreds of millions of years ago. Their similar body forms are an example of:',
            options: [
              'Homologous structures resulting from divergent evolution',
              'Analogous structures resulting from convergent evolution under similar selective pressures',
              'Vestigial structures that have lost their function',
              'Coevolution between the two species'
            ],
            correctAnswer: 1,
            explanation: 'Similar FUNCTION (efficient swimming) arising INDEPENDENTLY in distantly related lineages under similar selective pressures = ANALOGOUS structures from CONVERGENT evolution. Option A is the trap: homologous structures share a common ANATOMICAL ORIGIN (divergent evolution), but dolphin and shark body forms evolved separately from different ancestral structures — they are analogous, not homologous, and do not indicate close relatedness.'
          },
          {
            question: 'A mainland frog population has allele frequencies p = 0.6 and q = 0.4. Five frogs colonize a new pond; by chance their combined genotypes contribute 4 D alleles and 6 d alleles to the new gene pool. What is the d allele frequency in the founding population, and what process does the change illustrate?',
            options: [
              'q = 0.4; the population is in Hardy-Weinberg equilibrium',
              'q = 0.6; the founder effect (genetic drift) shifted the frequency by chance',
              'q = 0.5; natural selection favored the d allele',
              'q = 0.6; gene flow introduced new d alleles'
            ],
            correctAnswer: 1,
            explanation: 'Total alleles = 2N = 10; the d count is 6, so q = 6/10 = 0.6, up from the mainland 0.4 (Δq = +0.2) purely because of the chance composition of the 5 founders — the FOUNDER EFFECT, a form of genetic drift. Option C is the trap: nothing in the scenario indicates a fitness advantage for d, so this is RANDOM drift, not selection; also q = 0.6, not 0.5.'
          }
        ]
      }
    }
  ]
};
