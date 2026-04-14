export const bioAnimalBehaviorPart3Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh3-intro',
      type: 'text' as const,
      content: `
## Foraging Behavior

**Part 3 of 7**

Foraging — searching for, capturing, and consuming food — is one of the most energy-critical behaviors an animal performs. Natural selection favors foraging strategies that maximize **net energy gain per unit time**, a principle formalized in **optimal foraging theory (OFT)**.

### Optimal Foraging Theory

OFT predicts that animals forage in a way that maximizes their **energy intake rate** while minimizing **costs** (time, energy expenditure, predation risk).

$$E_{\\text{net}} = \\frac{E_{\\text{gain}} - E_{\\text{cost}}}{T_{\\text{search}} + T_{\\text{handle}}}$$

Where:
- $E_{\\text{gain}}$ = energy obtained from prey item
- $E_{\\text{cost}}$ = energy spent pursuing and processing prey
- $T_{\\text{search}}$ = time spent searching for prey
- $T_{\\text{handle}}$ = time spent capturing, subduing, and consuming prey (handling time)

### Key Predictions of OFT

| Prediction | Explanation |
|---|---|
| **Diet breadth** | When preferred prey is abundant, specialize; when scarce, broaden diet |
| **Patch use** | Leave a patch when intake rate drops to the average rate for the habitat (marginal value theorem) |
| **Central place foraging** | Animals returning to a nest/den select larger or closer prey items |
| **Risk sensitivity** | When energy reserves are high, prefer reliable food sources; when starving, take risks |
      `
    },
    {
      id: 'beh3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Optimal Foraging** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Shore crabs preferentially select medium-sized mussels over small or large ones. Medium mussels provide the highest ratio of energy gained to handling time. This observation best supports:',
            options: [
              'Optimal foraging theory — the crabs maximize net energy intake per unit handling time',
              'Frequency-dependent selection — the crabs eat the most common prey type',
              'Character displacement — the crabs evolved to avoid competition',
              'Habituation — the crabs learned to ignore small and large mussels'
            ],
            correctAnswer: 0,
            explanation: 'The crabs are selecting prey that maximizes the energy/handling-time ratio, exactly as optimal foraging theory predicts. Small mussels have low energy; large mussels require excessive handling time. Medium mussels offer the best trade-off.'
          },
          {
            question: 'According to OFT, under what condition should a predator broaden its diet to include less-preferred prey?',
            options: [
              'When the encounter rate with preferred prey decreases',
              'When the predator\'s population density increases',
              'When the handling time for preferred prey decreases',
              'When ambient temperature drops below optimal'
            ],
            correctAnswer: 0,
            explanation: 'OFT predicts that diet breadth expands when preferred prey becomes scarce (lower encounter rate). At that point, the time spent searching for optimal prey makes it more efficient to accept lower-quality prey items encountered along the way.'
          }
        ]
      }
    },
    {
      id: 'beh3-costs',
      type: 'text' as const,
      content: `
## Cost-Benefit Analysis of Foraging

Every foraging decision involves trade-offs. Natural selection shapes behaviors that, on average, yield a positive net benefit.

### Costs of Foraging

| Cost Category | Examples |
|---|---|
| **Energetic cost** | Metabolic energy spent searching, pursuing, and handling prey |
| **Predation risk** | Exposure to predators while foraging in open areas |
| **Opportunity cost** | Time spent foraging cannot be spent mating, defending territory, or caring for young |
| **Injury risk** | Prey that fight back (e.g., porcupine quills, bee stings) |

### Benefits of Foraging

| Benefit | Impact on fitness |
|---|---|
| **Energy gain** | Fuels metabolism, growth, reproduction |
| **Nutrient acquisition** | Specific nutrients (calcium, protein) affect egg production, immune function |
| **Water intake** | Some animals obtain water primarily from food |

### Energy Budget Framework

An animal's daily energy budget must satisfy:

$$E_{\\text{intake}} \\geq E_{\\text{basal}} + E_{\\text{activity}} + E_{\\text{growth}} + E_{\\text{reproduction}}$$

If energy intake falls below this threshold, the animal must reduce one or more expenditure categories — often reproduction is sacrificed first, then growth.

### Search Time vs Handling Time

- **Search time**: Time spent locating prey; decreases as prey density increases
- **Handling time**: Time spent capturing, killing, and consuming prey; depends on prey size and defenses
- **Trade-off**: Large prey items have high energy gain but long handling times; small prey have short handling times but low energy
      `
    },
    {
      id: 'beh3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Concept Check — Costs and Trade-offs** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A ground-nesting bird spends less time foraging when a hawk is perched nearby, even though food is abundant. Which foraging cost best explains this behavior?',
            options: [
              'Predation risk — the bird reduces exposure to the predator at the expense of energy intake',
              'Handling time — the bird cannot process food while watching for the hawk',
              'Opportunity cost — the bird must incubate its eggs instead',
              'Energetic cost — flying away from the hawk is metabolically expensive'
            ],
            correctAnswer: 0,
            explanation: 'The bird is trading off energy intake for reduced predation risk. Even with abundant food, the cost of being killed outweighs the benefit of additional foraging. This is a classic predation-risk cost in foraging theory.'
          },
          {
            question: 'A female songbird lays fewer eggs during a food-scarce year. This is best explained by:',
            options: [
              'Energy budget constraints — insufficient intake forces reduction in reproductive investment',
              'Habituation — the bird has become accustomed to lower food availability',
              'Sexual selection — males prefer females that lay fewer eggs',
              'Density-dependent regulation — fewer conspecifics means less competition'
            ],
            correctAnswer: 0,
            explanation: 'When energy intake drops below what is needed for all activities, reproduction is typically the first expenditure reduced. The energy budget equation shows that intake must cover basal metabolism + activity + growth + reproduction; reproduction is most flexible.'
          }
        ]
      }
    },
    {
      id: 'beh3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Foraging Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The time an animal spends locating food items in the environment is called ___',
            options: ['search time', 'handling time', 'latency period', 'refractory period']
          },
          {
            label: 'According to OFT, an animal should leave a food patch when the intake rate in that patch drops to ___',
            options: ['the average intake rate for the entire habitat', 'zero', 'half the initial rate', 'the basal metabolic rate']
          },
          {
            label: 'When preferred prey is scarce, OFT predicts that a predator will ___ its diet breadth',
            options: ['increase', 'decrease', 'maintain', 'randomly vary']
          }
        ],
        correctAnswers: ['search time', 'the average intake rate for the entire habitat', 'increase'],
        hint1: 'Search time is the phase before prey is detected; handling time begins after detection.',
        hint2: 'The marginal value theorem predicts the optimal time to leave a depleting patch.',
        hint3: 'When encounter rate with optimal prey drops, accepting additional prey types becomes energetically favorable.',
        explanation: 'Search time is the time spent locating prey. The marginal value theorem (a component of OFT) predicts animals leave a patch when its profitability drops to the habitat average. When preferred prey is rare, animals broaden their diet to include less-preferred items to maintain adequate energy intake.'
      }
    }
  ]
};
