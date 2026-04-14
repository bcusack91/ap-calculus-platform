export const bioAnimalBehaviorPart6Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh6-intro',
      type: 'text' as const,
      content: `
## Social Behavior & Altruism

**Part 6 of 7**

Social behaviors — cooperation, altruism, and group living — pose a challenge for evolutionary theory. If natural selection favors traits that increase an individual's own fitness, why would an animal sacrifice its own reproduction to help others? The answer lies in **inclusive fitness** and **kin selection**.

### The Problem of Altruism

**Altruism** = a behavior that **decreases** the fitness of the actor but **increases** the fitness of the recipient.

| Interaction type | Effect on actor | Effect on recipient |
|---|---|---|
| **Mutualism** | + | + |
| **Altruism** | − | + |
| **Selfishness** | + | − |
| **Spite** | − | − |

Examples of apparent altruism:
- Belding's ground squirrels give alarm calls, alerting relatives but attracting predator attention to themselves
- Worker honeybees are sterile and spend their lives helping the queen reproduce
- Vampire bats regurgitate blood meals for roostmates who failed to feed
      `
    },
    {
      id: 'beh6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Altruism Basics** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A vervet monkey gives a loud alarm call when it spots a leopard, drawing the predator\'s attention to itself while allowing nearby relatives to escape. This behavior is classified as altruistic because:',
            options: [
              'It reduces the caller\'s survival probability while increasing the survival of recipients',
              'It increases both the caller\'s and the recipients\' fitness equally',
              'It is a learned behavior passed down through cultural transmission',
              'It is a fixed action pattern triggered by the sight of a predator'
            ],
            correctAnswer: 0,
            explanation: 'The alarm caller bears a fitness cost (increased predation risk) while providing a benefit to recipients (warning of danger). This is the definition of an altruistic behavior — a net cost to the actor and a net benefit to the recipient.'
          },
          {
            question: 'Which of the following is an example of mutualism (not altruism)?',
            options: [
              'Two male lions cooperating to defend a territory, both gaining mating access',
              'A worker bee dying after stinging an intruder to protect the hive',
              'A parent bird feigning a broken wing to lure a predator away from its nest',
              'A meerkat standing guard while the group forages'
            ],
            correctAnswer: 0,
            explanation: 'In mutualism, both participants benefit (+/+). Two male lions cooperating to hold a territory both gain reproductive access. The other examples involve a cost to the actor (dying, increased risk) — these are altruistic behaviors.'
          }
        ]
      }
    },
    {
      id: 'beh6-kin-selection',
      type: 'text' as const,
      content: `
## Kin Selection & Hamilton's Rule

### Inclusive Fitness
W.D. Hamilton proposed that an individual's **inclusive fitness** has two components:

1. **Direct fitness**: reproductive success from the individual's own offspring
2. **Indirect fitness**: reproductive success gained by helping relatives who share your genes

$$\\text{Inclusive fitness} = \\text{Direct fitness} + \\text{Indirect fitness}$$

### Hamilton's Rule

Altruism evolves when the genetic benefit to relatives exceeds the cost to the actor:

$$rB > C$$

Where:
- **r** = coefficient of relatedness (probability that two individuals share an allele by common descent)
- **B** = reproductive benefit to the recipient
- **C** = reproductive cost to the actor

### Relatedness Coefficients

| Relationship | r value |
|---|---|
| Identical twin | 1.0 |
| Parent–offspring | 0.5 |
| Full siblings | 0.5 |
| Half siblings | 0.25 |
| Grandparent–grandchild | 0.25 |
| First cousins | 0.125 |
| Unrelated individuals | 0 |

### Applying Hamilton's Rule — Example

A ground squirrel alarm call has:
- Cost to caller (C) = 0.1 reduction in survival (fitness units)
- Benefit to each relative (B) = 0.3 increased survival per relative warned
- Average r of nearby kin = 0.5 (full siblings)

Does $rB > C$?
$$0.5 \\times 0.3 = 0.15 > 0.1 \\checkmark$$

Even warning just one sibling makes the behavior favored by kin selection. Warning two siblings: $0.5 \\times 0.3 \\times 2 = 0.30 > 0.1$ — strongly favored.

> **J.B.S. Haldane's quip**: "I would lay down my life for two brothers or eight cousins" — because $2 \\times 0.5 = 1.0$ and $8 \\times 0.125 = 1.0$.
      `
    },
    {
      id: 'beh6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Hamilton's Rule** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An animal performs an altruistic act with a cost of C = 4 fitness units to itself and a benefit of B = 10 fitness units to the recipient. If the actor and recipient are full siblings (r = 0.5), does Hamilton\'s rule predict this behavior will be favored?',
            options: [
              'Yes, because rB = 5 > C = 4',
              'No, because rB = 5 < C = 10',
              'Yes, because rB = 10 > C = 4',
              'No, because r = 0.5 is too low for altruism'
            ],
            correctAnswer: 0,
            explanation: 'Hamilton\'s rule: rB > C. Here, rB = 0.5 × 10 = 5. Since 5 > 4, the inequality is satisfied and kin selection favors this altruistic behavior.'
          },
          {
            question: 'Belding\'s ground squirrels give alarm calls more frequently when close genetic relatives are nearby than when surrounded by non-relatives. This observation most directly supports:',
            options: [
              'Kin selection theory — the behavior is directed preferentially toward relatives who share the caller\'s genes',
              'Group selection — the behavior benefits the entire population equally',
              'Reciprocal altruism — the caller expects relatives to return the favor',
              'Classical conditioning — the squirrels associate relatives with safety'
            ],
            correctAnswer: 0,
            explanation: 'The key observation is that alarm calling frequency increases with the presence of close relatives. This is the signature prediction of kin selection — altruistic behavior should be preferentially directed toward individuals with higher r values.'
          }
        ]
      }
    },
    {
      id: 'beh6-eusociality',
      type: 'text' as const,
      content: `
## Reciprocal Altruism & Eusociality

### Reciprocal Altruism (Trivers)
Altruism between **unrelated** individuals can evolve if:
1. Individuals interact **repeatedly**
2. The cost to the helper is **small** relative to the benefit
3. **Cheaters** (those who receive but never give) are **detected and punished**

- **Example**: Vampire bats regurgitate blood for hungry roostmates. Bats that refuse to share are denied food in the future.
- **Example**: Cleaner fish remove parasites from larger fish. Both benefit (mutualism), but the cleaner is somewhat vulnerable.

### Eusociality — Extreme Altruism

**Eusociality** is the most extreme form of social organization, characterized by:

| Feature | Description |
|---|---|
| **Reproductive division of labor** | Only one or a few individuals (queen) reproduce |
| **Cooperative care of young** | Workers (non-reproductive) care for the queen's offspring |
| **Overlapping generations** | Multiple generations coexist in the colony |

#### Why Does Eusociality Evolve?

In **haplodiploid** species (Hymenoptera: ants, bees, wasps):
- Females are **diploid** (2n), males are **haploid** (n)
- Sisters share **r = 0.75** (they share all of their father's genes + on average half their mother's)
- A worker is more related to her sisters (r = 0.75) than she would be to her own daughters (r = 0.5)
- **Result**: Kin selection strongly favors helping the queen produce more sisters over producing own offspring

> **Important caveat**: Haplodiploidy facilitates but does not fully explain eusociality — eusocial species also exist in diploid organisms (naked mole-rats, termites). Ecological factors such as high predation and defensible nest sites also contribute.
      `
    },
    {
      id: 'beh6-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Social Behavior** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hamilton\'s rule states that altruism is favored when ___',
            options: ['rB > C', 'rB < C', 'B > rC', 'C > rB']
          },
          {
            label: 'The coefficient of relatedness between full siblings is ___',
            options: ['0.5', '0.25', '0.75', '1.0']
          },
          {
            label: 'Vampire bats sharing blood meals with unrelated roostmates who reciprocate in the future is an example of ___',
            options: ['reciprocal altruism', 'kin selection', 'eusociality', 'spite']
          },
          {
            label: 'In haplodiploid species, sisters share a coefficient of relatedness of ___',
            options: ['0.75', '0.5', '0.25', '1.0']
          }
        ],
        correctAnswers: ['rB > C', '0.5', 'reciprocal altruism', '0.75'],
        hint1: 'r = relatedness, B = benefit to recipient, C = cost to actor. Altruism is favored when the genetic payoff exceeds the cost.',
        hint2: 'Full siblings share, on average, half of their alleles by common descent.',
        hint3: 'Reciprocal altruism occurs between non-relatives who interact repeatedly and can detect cheaters.',
        explanation: 'Hamilton\'s rule: rB > C. Full siblings have r = 0.5. Vampire bat blood-sharing among unrelated individuals who reciprocate is reciprocal altruism (Trivers). Haplodiploid sisters share r = 0.75 because they inherit identical paternal genes plus (on average) half of maternal genes.'
      }
    }
  ]
};
