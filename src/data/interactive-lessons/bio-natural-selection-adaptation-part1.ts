export const bioNatSelectionPart1Data = {
  topicSlug: 'natural-selection-adaptation',
  sections: [
    {
      id: 'nsp1-intro',
      type: 'text' as const,
      content: `
## Darwin's Theory of Natural Selection

**Part 1 of 7**

In 1859, Charles Darwin published *On the Origin of Species*, proposing a single, elegant mechanism to explain the diversity of life: **natural selection**. The power of Darwin's argument is that it is not a vague claim about "survival of the fittest" — it is a tight, logical syllogism. If a handful of observable facts about populations are true, then evolutionary change is the unavoidable consequence.

In modern AP Biology, **evolution** is defined as a **change in the heritable allele frequencies of a population over generations**. Natural selection is one of several mechanisms (alongside genetic drift, gene flow, mutation, and non-random mating) that can drive that change. This part builds the logical foundation; later parts add the quantitative machinery (Hardy-Weinberg) that lets you *measure* evolution.

> **Anchor idea:** Individuals do **not** evolve. **Populations** evolve. A single beetle is born with whatever alleles it has and dies with them. What changes across generations is the *proportion* of alleles in the population as a whole.
      `
    },
    {
      id: 'nsp1-logic',
      type: 'text' as const,
      content: `
### The Logic of Natural Selection — Darwin's Four Postulates

Natural selection follows from four observations. If all four hold, selection *must* occur. Memorize this chain — AP free-response questions frequently ask you to lay it out.

| # | Observation / Postulate | What it means |
|---|-------------------------|---------------|
| 1 | **Variation** | Individuals in a population differ in their traits (e.g., beak size, coat color, enzyme efficiency). |
| 2 | **Heritability** | Some of that variation is **heritable** — passed from parent to offspring via genes. |
| 3 | **Overproduction & Struggle for Existence** | Populations produce far more offspring than the environment can support; resources are limited, so individuals compete. |
| 4 | **Differential Reproductive Success** | Individuals with certain heritable traits leave **more surviving, reproducing offspring** than others. |

The inevitable result: the favorable heritable traits become **more common** in the next generation. Repeated over many generations, this produces **descent with modification** — the gradual transformation of populations and, ultimately, the origin of new species.

> **Critical distinction:** Postulate 2 is the linchpin. Variation that is **not heritable** (e.g., bigger muscles from exercise) cannot fuel evolution, because it is not transmitted to offspring. Selection can only act on the *phenotype*, but it only produces *evolution* when phenotypic differences have a *genetic* basis.
      `
    },
    {
      id: 'nsp1-fitness',
      type: 'text' as const,
      content: `
### Fitness Means Reproductive Success — Not Strength

In everyday English, "fittest" suggests the strongest or fastest. In biology, **fitness** has a precise, narrow meaning:

> **Fitness = an individual's relative contribution of offspring to the next generation's gene pool.**

It is *relative* (measured against other individuals in the same population) and it is fundamentally about **reproduction**, not survival for its own sake. Survival matters only insofar as it lets an organism reproduce.

Consider two implications that trap students:

- A massive, powerful male elephant seal that wins fights but sires **zero** pups has a fitness of **0**. A smaller "sneaker" male that fathers several pups has **higher** fitness, despite being weaker.
- A salmon that spawns thousands of eggs and then dies immediately can have **enormous** fitness. Living a long time contributes nothing to fitness if it does not translate into offspring.

**Relative fitness ($w$)** is often scaled so the most successful genotype = 1. If genotype AA averages 10 offspring and aa averages 6, then $w_{AA} = 1.0$ and $w_{aa} = 0.6$. The **selection coefficient** $s = 1 - w$ measures the strength of selection against a genotype; here $s_{aa} = 0.4$.

> **Misconception repair:** "Survival of the fittest" really means "reproduction of those whose heritable traits, in this environment, yield the most surviving offspring." Strength, size, and longevity matter **only** through their effect on reproductive output.
      `
    },
    {
      id: 'nsp1-quiz1',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — The Logic and the Definition of Fitness
      `,
      exercise: {
        questions: [
          {
            question: 'A population of lizards lives on an island with many bird predators. Lizards with longer legs run faster and escape predators more often, surviving to reproduce. Leg length is heritable. Over many generations, average leg length increases. Which of Darwin\'s postulates is being VIOLATED if a scientist claims this is NOT an example of natural selection because "the lizards just learned to run faster during their lives"?',
            options: [
              'Variation — the claim denies that lizards differ in leg length',
              'Heritability — the claim attributes the change to within-lifetime learning rather than inherited alleles',
              'Overproduction — the claim denies that predators limit population size',
              'Differential reproductive success — the claim denies that faster lizards reproduce more'
            ],
            correctAnswer: 1,
            explanation: 'The "learned during their lives" claim describes a non-heritable, acquired change (like Lamarckian inheritance). Natural selection requires that the advantageous trait be HERITABLE (postulate 2) so it can be passed to offspring. Option D is the trap: the scenario explicitly states faster lizards DO reproduce more, so differential reproductive success is satisfied, not violated — the flaw in the skeptic\'s claim is specifically about heritability.'
          },
          {
            question: 'Two male peacocks live in the same population. Male X is larger, healthier, and lives 3 years longer than Male Y. However, females never choose Male X to mate with, so he fathers no chicks, while Male Y fathers 8 chicks. Which male has higher Darwinian fitness, and why?',
            options: [
              'Male X, because greater size and longer lifespan indicate he is better adapted to the environment',
              'Male X, because survival is the primary determinant of fitness',
              'Male Y, because fitness is measured by contribution of offspring to the next generation',
              'They have equal fitness because fitness depends only on health, not on reproduction'
            ],
            correctAnswer: 2,
            explanation: 'Fitness is RELATIVE REPRODUCTIVE SUCCESS — the number of surviving, reproducing offspring contributed to the next generation. Male Y (8 chicks) vastly outscores Male X (0 chicks). Options A and B embody the classic trap of equating fitness with size, health, or longevity; those traits matter ONLY if they translate into offspring, which they did not for Male X.'
          }
        ]
      }
    },
    {
      id: 'nsp1-evidence',
      type: 'text' as const,
      content: `
### Evidence for Evolution

Evolution is supported by multiple independent lines of evidence that converge on the same conclusion. AP questions often ask you to identify *which type* of evidence a scenario illustrates.

| Line of evidence | What it shows | Classic example |
|------------------|---------------|-----------------|
| **Fossil record** | Documents change over geologic time and transitional forms | *Tiktaalik* (fish–tetrapod transition); whale leg fossils |
| **Homologous structures** | Same underlying anatomy, different function → **common ancestry** (divergent evolution) | Tetrapod forelimb: human arm, bat wing, whale flipper share the same bone pattern |
| **Vestigial structures** | Reduced, non-functional remnants of ancestral traits | Human appendix; pelvic bones in whales |
| **Biogeography** | Distribution of species reflects evolutionary history and geography | Marsupials concentrated in Australia; island endemics |
| **Molecular / DNA** | Degree of sequence similarity tracks evolutionary relatedness | Humans and chimps share ~98–99% of DNA; universal genetic code |
| **Direct observation** | Evolution measured in real time | See below |

**Direct observation — evolution happening now:**

- **Peppered moths (*Biston betularia*):** Before the Industrial Revolution, light moths camouflaged on lichen-covered trees; dark moths were eaten by birds. Industrial soot blackened trees, reversing the selective pressure — dark moths now survived better, and the **dark allele frequency rose sharply**. When pollution controls cleaned the air, the light form rebounded. This is directional selection driven by predation.
- **Galápagos finches (Grants' study):** During a drought, only large, tough seeds remained. Finches with **deeper, stronger beaks** could crack them and survived to reproduce; average beak depth in the population increased measurably **within a single generation**.
- **Antibiotic resistance:** In a bacterial population, rare pre-existing resistant cells survive antibiotic treatment and reproduce, so the resistance allele frequency climbs. The antibiotic does **not** *create* resistance — it *selects* for variants that already exist.

> **Misconception repair (very common AP trap):** Bacteria do not "try" to become resistant, and antibiotics do not *induce* the mutation. The variation exists first (by random mutation); the environment then *selects* among existing variants. Evolution has **no foresight** and no goal — organisms never evolve a trait "in order to" meet a future need.
      `
    },
    {
      id: 'nsp1-quiz2',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Evidence and Misconceptions
      `,
      exercise: {
        questions: [
          {
            question: 'The forelimbs of a human (arm), a bat (wing), and a whale (flipper) all contain the same set of bones (humerus, radius, ulna, carpals) arranged in the same pattern, despite serving very different functions. This is the BEST direct evidence for which concept?',
            options: [
              'Analogous structures arising from convergent evolution',
              'Homologous structures indicating descent from a common ancestor',
              'Vestigial structures that have lost their original function',
              'Sexual selection driving morphological divergence'
            ],
            correctAnswer: 1,
            explanation: 'Same underlying bone structure with different functions = HOMOLOGOUS structures, the hallmark of DIVERGENT evolution from a common ancestor. Option A is the trap: analogous structures have the SAME function but DIFFERENT underlying anatomy (e.g., bird wing vs. insect wing) and indicate convergent, not common, ancestry — the opposite pattern from what is described.'
          },
          {
            question: 'A patient takes antibiotics, and over the course of treatment the bacterial infection becomes resistant. Which statement correctly describes what happened, consistent with natural selection?',
            options: [
              'The antibiotic caused the bacteria to mutate so they could survive the drug',
              'Individual bacteria sensed the antibiotic and developed resistance during their lifetimes',
              'Rare resistant variants were already present; the antibiotic killed susceptible cells, so the resistance allele frequency rose in the surviving population',
              'The bacteria evolved resistance in order to ensure the survival of their species'
            ],
            correctAnswer: 2,
            explanation: 'Variation (resistant mutants) exists BEFORE the antibiotic is applied; selection then favors those pre-existing variants, raising the resistance allele frequency. Options A and B are the Lamarckian traps (the drug "causes" or bacteria "develop" resistance on demand). Option D is the teleology trap — evolution has no goal or foresight and does not act "in order to" benefit the species.'
          }
        ]
      }
    },
    {
      id: 'nsp1-pop-vs-ind',
      type: 'text' as const,
      content: `
### Populations Evolve, Individuals Do Not

This is one of the most heavily tested conceptual points in the entire unit. Hold these two columns apart:

| Level | What happens | Can it "evolve"? |
|-------|--------------|------------------|
| **Individual** | Born with a fixed genotype; develops a phenotype through genes + environment; survives or dies; reproduces or doesn't | **No** — its alleles are fixed at conception |
| **Population** | A collection of interbreeding individuals sharing a **gene pool**; allele frequencies shift across generations | **Yes** — this *is* evolution |

An individual giraffe does not stretch its neck and pass on a longer neck. Instead, in an ancestral population, giraffes **varied** in neck length; longer-necked individuals (for heritable reasons) reached more food, survived, and reproduced more; the **frequency of long-neck alleles rose** in the *population* over generations.

> **AP framing:** When you write or evaluate evolutionary explanations, the subject of the sentence should almost always be the **population** or the **allele frequency**, never the individual "deciding," "needing," or "trying." Natural selection is the *differential survival and reproduction of individuals*, but evolution is the *resulting change in the population's gene pool.*
      `
    },
    {
      id: 'nsp1-exit',
      type: 'multiple-choice' as const,
      content: `
### Exit Ticket — Part 1 Synthesis
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following statements is the MOST scientifically accurate description of an evolutionary change?',
            options: [
              'An individual snake grew longer over its lifetime to better catch prey',
              'Over many generations, the frequency of alleles for venom potency increased in the snake population because more potent individuals reproduced more successfully',
              'Snakes developed venom because they needed a way to subdue prey',
              'The strongest snake in each generation passed its acquired hunting skills to its offspring'
            ],
            correctAnswer: 1,
            explanation: 'Evolution is a change in heritable ALLELE FREQUENCIES in a POPULATION over GENERATIONS, driven by differential reproductive success — exactly what option B states. Option A confuses individual growth with evolution; option C uses goal-directed (teleological) language ("needed"); option D invokes inheritance of acquired skills (Lamarckism). All three are classic traps.'
          },
          {
            question: 'A biologist measures the average wing length in a population of flies before and after a 20-generation experiment and finds it has increased. Before concluding that natural selection occurred, which condition is MOST essential to verify?',
            options: [
              'That the flies with longer wings lived in a warmer environment',
              'That the variation in wing length is heritable rather than caused purely by differences in larval nutrition',
              'That the flies are physically the strongest in the population',
              'That every individual fly increased its own wing length over time'
            ],
            correctAnswer: 1,
            explanation: 'Natural selection produces EVOLUTION only when the selected variation is HERITABLE (Darwin\'s second postulate). If long wings resulted purely from better larval nutrition (an environmental, non-heritable cause), the change would not be transmitted genetically and would not constitute evolution. Option D is the trap — individuals do not change their own wing length; the population mean shifts because of differential reproduction among genetically different individuals.'
          }
        ]
      }
    }
  ]
};
