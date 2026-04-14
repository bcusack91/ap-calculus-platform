export const bioAnimalBehaviorPart5Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh5-intro',
      type: 'text' as const,
      content: `
## Mating & Reproductive Behavior

**Part 5 of 7**

Reproductive behavior is shaped by **sexual selection** — a form of natural selection in which individuals with certain traits have a mating advantage. The key concept linking all mating systems is **parental investment**: whichever sex invests more in offspring becomes the limiting resource and the choosier sex.

### Sexual Selection: Two Mechanisms

| Mechanism | Definition | Example |
|---|---|---|
| **Intrasexual selection** | Competition *within* one sex (usually males) for access to mates | Male elephant seals fighting for control of a beach harem |
| **Intersexual selection** (mate choice) | One sex (usually females) chooses mates based on specific traits | Female peafowl selecting males with the most elaborate tail displays |

### Why Females Are Usually the Choosier Sex

Bateman's principle and Trivers' parental investment theory explain this asymmetry:

| Factor | Females | Males |
|---|---|---|
| **Gamete cost** | Large, energetically expensive eggs | Small, cheap, abundant sperm |
| **Parental investment** | Often higher (gestation, lactation, egg care) | Often lower (sometimes zero beyond mating) |
| **Reproductive rate** | Limited by gestation/egg production | Limited primarily by access to mates |
| **Selection pressure** | Favors choosiness (poor mate = wasted investment) | Favors competition for mating opportunities |

> **AP Key Point**: The sex that invests more in each offspring is predicted to be choosier. When males invest more (e.g., seahorses, pipefish), males become the choosier sex.
      `
    },
    {
      id: 'beh5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Sexual Selection** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Male sage grouse gather on a lek (display ground) where females observe their strutting displays and choose mates. Only a few males sire the majority of offspring. This is an example of:',
            options: [
              'Intersexual selection — females choose males based on display quality',
              'Intrasexual selection — males physically fight each other for dominance',
              'Stabilizing selection — extreme phenotypes are selected against',
              'Artificial selection — humans chose which males reproduce'
            ],
            correctAnswer: 0,
            explanation: 'Lek mating is a classic example of intersexual selection (mate choice). Females actively evaluate male displays and select mates based on display quality. While some intrasexual competition may occur, the primary selective force in lek systems is female choice.'
          },
          {
            question: 'In seahorses, males carry developing embryos in a brood pouch, investing significantly more than females after mating. Based on parental investment theory, which prediction follows?',
            options: [
              'Females will compete for access to males, and males will be the choosier sex',
              'Males will compete for access to females, and females will be choosier',
              'Neither sex will be choosy because both invest in offspring',
              'Males will abandon the brood pouch to increase mating frequency'
            ],
            correctAnswer: 0,
            explanation: 'Parental investment theory predicts that the sex investing more in offspring becomes the limiting resource. In seahorses, males invest more (carrying embryos), so males are choosier and females compete — a reversal of the typical pattern.'
          }
        ]
      }
    },
    {
      id: 'beh5-mating-systems',
      type: 'text' as const,
      content: `
## Mating Systems

Mating systems describe the pattern of mating relationships within a species. They are largely determined by **resource distribution**, **parental investment**, and **ecological conditions**.

| System | Definition | Male investment | Ecological conditions | Example |
|---|---|---|---|---|
| **Monogamy** | One male, one female form a pair bond | High — both parents raise offspring | Offspring require biparental care to survive | Albatrosses, prairie voles |
| **Polygyny** | One male mates with multiple females | Low — often no paternal care | Females can raise young alone; resources are clumped | Elephant seals, red-winged blackbirds |
| **Polyandry** | One female mates with multiple males | Very high — males raise offspring | Female reproductive output increases with multiple mates | Jacanas, spotted sandpipers |
| **Promiscuity** | Multiple males and females mate with no lasting bonds | Variable | No need for biparental care; large social groups | Chimpanzees, bonobos |

### Resource Defense Polygyny
When critical resources (nesting sites, food) are clumped in space, a single male can monopolize them and attract multiple females:
- Female red-winged blackbirds choose territories (and thus males) based on marsh quality
- The male's reproductive success depends on territory quality, not just physical traits

### Female Defense Polygyny
When females aggregate for reasons unrelated to male behavior (e.g., predator protection), a dominant male can monopolize access:
- Male elephant seals control harems on breeding beaches
- Extreme sexual dimorphism evolves (large male size = competitive advantage)
      `
    },
    {
      id: 'beh5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Mating Systems** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A mating system where one female mates with multiple males who then care for the offspring is called ___',
            options: ['polyandry', 'polygyny', 'monogamy', 'promiscuity']
          },
          {
            label: 'Competition between males of the same species for mating access is called ___ selection',
            options: ['intrasexual', 'intersexual', 'stabilizing', 'directional']
          },
          {
            label: 'According to parental investment theory, the sex that invests ___ in offspring tends to be choosier about mates',
            options: ['more', 'less', 'equally', 'no energy']
          },
          {
            label: 'Male elephant seals fighting for control of a breeding beach to mate with many females illustrates ___ polygyny',
            options: ['female defense', 'resource defense', 'scramble competition', 'lek']
          }
        ],
        correctAnswers: ['polyandry', 'intrasexual', 'more', 'female defense'],
        hint1: 'Poly = many, andry = males. The females mate with multiple males.',
        hint2: 'Intra = within. Competition within one sex is intrasexual selection.',
        hint3: 'The higher-investing sex has more to lose from a poor mating decision.',
        explanation: 'Polyandry involves one female mating with multiple males. Intrasexual selection is within-sex competition. The higher-investing sex is choosier (Trivers\' theory). Elephant seals practice female defense polygyny — males control access to groups of females rather than defending resources.'
      }
    },
    {
      id: 'beh5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Mating & Parental Investment** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In species where offspring survival requires extensive care from both parents, which mating system is most likely to evolve?',
            options: [
              'Monogamy — biparental care is essential for offspring survival',
              'Polygyny — the male can distribute care among multiple broods',
              'Polyandry — the female can produce more offspring with multiple males',
              'Promiscuity — no pair bond is needed when offspring are precocial'
            ],
            correctAnswer: 0,
            explanation: 'When offspring survival critically depends on care from both parents, natural selection favors monogamy because deserting to seek additional mates would result in offspring death. Many seabird species are monogamous for this reason.'
          },
          {
            question: 'Male red-winged blackbirds defend marshland territories, and females choose territories based on resource quality. Multiple females may nest in one male\'s territory. This system is:',
            options: [
              'Resource defense polygyny — males monopolize resources that attract multiple females',
              'Female defense polygyny — males guard aggregations of females',
              'Lek polygyny — males display at a communal site',
              'Polyandry — females mate with multiple males'
            ],
            correctAnswer: 0,
            explanation: 'This is resource defense polygyny. The male controls a high-quality territory (the resource), and females choose to nest there because the territory quality outweighs the cost of sharing a mate. The key distinction: females are choosing the territory, not being physically guarded.'
          }
        ]
      }
    }
  ]
};
