export const bioFitnessPart7Data = {
  topicSlug: 'fitness-environment',
  sections: [
    {
      id: 'bio-fitness-environment-p7-s1-chain',
      type: 'text' as const,
      content: `
## Fitness and Environment: Synthesis Review

**Part 7 of 7 — Synthesis Review**

Every part of this lesson fits one chain of reasoning:

**environmental cue or selective agent → organism's response → phenotype → fitness → evolution of the population**

The table runs one example from each part through the full chain.

| Example | Cue or selective agent | Response or trait | Phenotype | Effect on fitness | Population-level outcome |
|---|---|---|---|---|---|
| Rock pocket mice (Part 1) | Rock color plus visual predators | Coat color set by Mc1r alleles | Dark or light coat | Matching coat → fewer deaths from predators | Dark allele common on lava, rare on sand |
| *Daphnia* (Part 2) | Chemical cues from predators | Induced development | Helmet and long spine | Fewer eaten when predators are present; fewer offspring when they are not | Selection can favor genotypes that respond only when cued |
| Short-day plant (Part 3) | Night longer than critical length | Phytochrome signal; florigen made in leaves | Flowers in late summer or fall | Seeds ripen before frost while pollinators are active | Flowering time tuned to local seasons |
| Great tits (Part 4) | Day length and early-spring temperature | Timing of egg laying | Laying date | Chicks that hatch after the caterpillar peak starve | Selection for earlier laying under warming |
| Yarrow (Part 5) | Elevation (temperature, season length) | Growth in each garden | Plant height | Locally adapted ecotypes do best at home | Genetically distinct populations along the gradient |
| Guppies (Part 6) | Predators versus female choice | Male color pattern | Bright or drab males | Trade-off between mating success and survival | Color evolves toward the local balance |

Notice where the arrows can **stop**. A plastic response (*Daphnia* helmet) changes the phenotype without changing alleles. Evolution happens only when individuals with **heritable** differences leave different numbers of offspring.
      `
    },
    {
      id: 'bio-fitness-environment-p7-s2-classify',
      type: 'text' as const,
      content: `
### Classifying a scenario

Many questions describe an organism and ask what kind of response it shows. Use these four categories and their diagnostic questions.

| Category | Diagnostic question | Typical evidence | Examples |
|---|---|---|---|
| **Phenotypic plasticity** | Does one genotype develop a different form or physiology in a different environment? | Clones or identical genotypes differ between treatments | Hydrangea color, turtle sex, *Daphnia* helmets, PKU on diet |
| **Genetic adaptation** | Did allele frequencies change across generations because of differential reproduction? | Difference persists in a common garden; allele frequency data | Mc1r in pocket mice, peppered moth, *EPAS1* in Tibetans, guppy color |
| **Behavioral response** | Does the organism change its movement or activity in response to a stimulus? | Choice-chamber data; orientation toward or away from a stimulus | Chemotaxis, phototaxis, pill bug kinesis |
| **Timing response** | Is the key feature *when* something happens, set by an internal clock or a time cue? | Response tracks day length or persists in constant conditions | Flowering by night length, circadian activity, photoperiod-cued breeding, molt and migration |

**When categories overlap:** a hare's white winter coat is a plastic trait (the same hare is brown in summer) **and** a timing response (triggered by day length). Read the question: if it asks *what cue sets the change in time*, answer photoperiod; if it asks *whether the trait is plastic or genetically fixed*, answer plastic.
      `
    },
    {
      id: 'bio-fitness-environment-p7-s3-mcq-classify',
      type: 'multiple-choice' as const,
      content: `
**Classify each scenario**
      `,
      exercise: {
        questions: [
          {
            question: 'Arctic foxes kept in a zoo molt into white coats every autumn as days shorten, even in years with no snowfall. Which classification fits this change best?',
            options: [
              'A seasonal response cued by photoperiod',
              'A genetic adaptation arising in one season',
              'A learned behavior that hides the fox',
              'A direct response to falling snow'
            ],
            correctAnswer: 0,
            explanation: 'The molt follows shortening days even without snow, so day length is the cue that times it. Alleles do not change within one season, and snow cannot be the trigger when none fell.'
          },
          {
            question: 'The dark Mc1r allele is far more common in rock pocket mice on a lava flow than in mice on nearby sand, and dark mice raised in a laboratory on pale bedding stay dark. How is the coat difference best classified?',
            options: [
              'Genetic adaptation',
              'Phenotypic plasticity',
              'Acclimatization',
              'Learned behavior'
            ],
            correctAnswer: 0,
            explanation: 'The difference persists in a common laboratory environment and matches a difference in allele frequency, so it is genetic adaptation. A plastic or acclimatized coat would have changed on pale bedding.'
          },
          {
            question: 'Pill bugs released in a dry tray move rapidly, then become nearly still once they reach a damp paper towel, without ever orienting toward it. What type of response is this?',
            options: [
              'Kinesis',
              'Positive taxis',
              'Phototropism',
              'Daily torpor'
            ],
            correctAnswer: 0,
            explanation: 'A change in activity level without orientation toward the stimulus is a kinesis. A taxis would show directed movement toward the damp towel, and tropisms are growth responses of plants.'
          }
        ]
      }
    },
    {
      id: 'bio-fitness-environment-p7-s4-toolkit',
      type: 'text' as const,
      content: `
### Quantitative toolkit

| Tool | Formula | Use it when… |
|---|---|---|
| Relative fitness | $w = \\frac{\\text{offspring of a genotype}}{\\text{offspring of the best genotype}}$ | Comparing reproductive success of genotypes or ecotypes in one environment |
| Selection coefficient | $s = 1 - w$ | Stating how strongly a genotype is selected against |
| Percent change | $\\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ | Describing how much a phenotype changed between treatments |
| Free-running drift | shift per day $= 24 - \\tau$ hours, where $\\tau$ is the free-running period | Predicting activity onset in constant conditions |
| Chi-square | $\\chi^2 = \\sum \\frac{(O - E)^2}{E}$ with df = categories − 1 | Testing whether a choice-chamber distribution differs from random |

### Graph-reading summary
- **Flat reaction norm:** no plasticity.
- **Parallel sloped lines:** plasticity plus a genetic difference, no G×E.
- **Crossing or differently sloped lines:** G×E; the best genotype depends on the environment.

### Connections to other units
- **Unit 6 (gene expression):** environmental cues act by switching genes on or off, or by changing protein activity.
- **Unit 7 (natural selection):** fitness differences in a given environment change allele frequencies; Hardy-Weinberg and the modes of selection are covered in that topic.
- **Unit 8 (ecology):** timing responses and their mismatches affect population sizes and community interactions.
      `
    },
    {
      id: 'bio-fitness-environment-p7-s5-worked-synthesis',
      type: 'text' as const,
      content: `
### Worked synthesis: a new organism, the same chain

AP questions often use an organism you have never studied. The chain still works. Here it is applied to spadefoot toad tadpoles (*Spea*) in the deserts of the southwestern United States, which breed in temporary rain-filled ponds.

**What happens:** most tadpoles develop as **omnivores** that eat algae and detritus. But a tadpole that eats fairy shrimp early in development can develop into a **carnivore morph**, with larger jaw muscles, a broad head and a shorter gut. Carnivores grow and develop faster.

| Step of the chain | Applied to spadefoot tadpoles |
|---|---|
| Cue | Eating fairy shrimp, which are abundant in some ponds |
| Response | A developmental switch to the carnivore morph |
| Classification | **Phenotypic plasticity**: siblings with the same parents can become either morph depending on diet |
| Effect on fitness | In ponds that dry quickly, faster-developing carnivores are more likely to metamorphose before the water disappears; in longer-lasting ponds, omnivores often leave the pond in better condition |
| Evolutionary outcome | Populations differ in how readily tadpoles become carnivores, so the *tendency* to respond is heritable and can be shaped by selection |

**Why this is a good review case:** it combines a plastic response (Part 2), a fitness value that depends on the environment (Part 1), a timing pressure (Parts 3 and 4) and selection on plasticity itself (Part 6). When you meet an unfamiliar organism on the exam, fill in the same five rows before choosing an answer.
      `
    },
    {
      id: 'bio-fitness-environment-p7-s6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sort each scenario into the category that fits it best**
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Cuttings of one hydrangea bloom blue in acidic soil and pink in alkaline soil',
            options: ['phenotypic plasticity', 'genetic adaptation', 'behavioral response', 'timing response']
          },
          {
            label: 'An EPAS1 variant is common in Tibetan highlanders but rare in lowland populations',
            options: ['behavioral response', 'genetic adaptation', 'timing response', 'phenotypic plasticity']
          },
          {
            label: 'Single-celled Euglena swim toward a light source at one end of a dish',
            options: ['timing response', 'phenotypic plasticity', 'behavioral response', 'genetic adaptation']
          },
          {
            label: 'A cocklebur flowers once nights grow longer than its critical night length',
            options: ['genetic adaptation', 'behavioral response', 'phenotypic plasticity', 'timing response']
          }
        ],
        correctAnswers: ['phenotypic plasticity', 'genetic adaptation', 'behavioral response', 'timing response'],
        hint1: 'Identical cuttings that differ by environment point to one category; a population-level allele difference points to another.',
        hint2: 'Movement toward a stimulus is a taxis, which is a kind of behavior.',
        hint3: 'When the key feature is WHEN an event happens in response to night length, choose the timing category.',
        explanation: 'Identical hydrangea cuttings differing by soil show plasticity; a population difference in EPAS1 frequency is genetic adaptation; Euglena swimming toward light is a behavioral response (phototaxis); and flowering triggered by night length is a timing response.'
      }
    },
    {
      id: 'bio-fitness-environment-p7-s7-strategy',
      type: 'text' as const,
      content: `
### Exam strategy and final traps

**Four-step method for any environment–phenotype question**
1. **Name the cue or selective agent** precisely (night length, nest temperature, predator chemicals, visual predators on dark rock).
2. **Name the mechanism** (phytochrome and florigen, auxin redistribution, temperature-sensitive enzyme, internal clock entrained by light).
3. **Name the phenotype** and say whether it is plastic or genetically fixed, using any common-garden or clone evidence given.
4. **Link to fitness:** say how the phenotype changes survival or reproduction in *that* environment, and whether allele frequencies would change.

**Traps checklist**
| Trap | Fix |
|---|---|
| "The mice turned dark to blend in." | Individuals with dark coats survived and reproduced more, so the dark allele increased. |
| "Plants flower when days are long enough." | Plants measure uninterrupted night length. |
| "Auxin makes the lit side grow." | Auxin moves to the shaded side, and those cells elongate. |
| "A kinesis means moving toward something." | That is a taxis; a kinesis changes speed or turning rate only. |
| "Fitness = surviving." | Fitness = reproductive success relative to others. |
| "A plastic change is evolution." | Only a change in allele frequencies across generations is evolution. |
      `
    },
    {
      id: 'bio-fitness-environment-p7-s8-mcq-final',
      type: 'multiple-choice' as const,
      content: `
**Final mixed practice**
      `,
      exercise: {
        questions: [
          {
            question: 'At an inland site, the inland ecotype of a plant averages 250 seeds per plant and the coastal ecotype averages 200. What is the relative fitness of the coastal ecotype at the inland site?',
            options: [
              '0.8',
              '1.25',
              '0.2',
              '0.44'
            ],
            correctAnswer: 0,
            explanation: 'Divide by the more successful ecotype at that site: 200 / 250 = 0.8. Inverting the ratio gives 1.25, and dividing by the combined total of 450 gives 0.44, neither of which is relative fitness.'
          },
          {
            question: 'Which sequence correctly links environmental differences to evolutionary change in a population?',
            options: [
              'Heritable variation in a trait → unequal reproduction → allele frequency change',
              'Cue → individual changes its genes → offspring inherit the new genes',
              'Cue → plastic response → offspring inherit the plastic phenotype',
              'Unequal reproduction → new mutations appear → heritable variation'
            ],
            correctAnswer: 0,
            explanation: 'Evolution by natural selection requires heritable variation that already exists, differential reproduction in an environment, and the resulting change in allele frequencies. Cues do not alter genes, and plastic phenotypes are not inherited directly.'
          },
          {
            question: 'Snowshoe hares molt into white coats on a schedule set by shortening days. If warming delays the first lasting snow by three weeks while day length is unchanged, what is the most likely short-term effect?',
            options: [
              'White hares on bare ground are caught more often',
              'Hares delay their molt three weeks to match the late snow',
              'Hares stay brown all winter as the molt cue is now missing',
              'Hare survival rises as white fur sheds extra heat in autumn'
            ],
            correctAnswer: 0,
            explanation: 'Day length still triggers the molt on time, so white hares stand out against snowless ground and predators catch more of them. The day-length cue has not disappeared, and hares cannot quickly re-time a molt that is cued by photoperiod.'
          }
        ]
      }
    }
  ]
};
