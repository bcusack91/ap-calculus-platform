export const bioAnimalBehaviorPart7Data = {
  topicSlug: 'animal-behavior',
  sections: [
    {
      id: 'beh7-intro',
      type: 'text' as const,
      content: `
## AP Exam Practice — Animal Behavior

**Part 7 of 7**

This section applies all concepts from Parts 1–6 in AP exam–style problems. Focus on **data interpretation**, **quantitative reasoning** (optimal foraging, Hamilton's rule), and **experimental design**.

### What the AP Exam Tests

| Skill | What to expect |
|---|---|
| **Data analysis** | Interpret bar graphs, tables, and ethograms of behavioral data |
| **Quantitative reasoning** | Calculate energy budgets, apply Hamilton's rule, evaluate cost-benefit ratios |
| **Experimental design** | Identify controls, variables, and predictions for behavioral experiments |
| **Proximate vs ultimate** | Distinguish mechanistic from evolutionary explanations |
| **Applying concepts** | Use OFT, kin selection, or sexual selection to explain novel scenarios |
      `
    },
    {
      id: 'beh7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**AP Practice — Interpreting Behavioral Data** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Researchers recorded the number of alarm calls given by female Belding\'s ground squirrels. Females with nearby kin called at a rate of 12 calls/hour, while females with no nearby kin called at 3 calls/hour. Which conclusion is BEST supported by this data?',
            options: [
              'Alarm calling is consistent with kin selection because calling rate increases with the presence of genetic relatives',
              'Alarm calling is a fixed action pattern triggered by predator presence regardless of social context',
              'Alarm calling is explained by reciprocal altruism since all group members benefit equally',
              'Alarm calling has no adaptive value and occurs randomly'
            ],
            correctAnswer: 0,
            explanation: 'The 4-fold increase in alarm calling when kin are present (12 vs 3 calls/hour) directly supports kin selection theory. If the behavior were a FAP or reciprocal altruism, calling rate would not vary based on the presence of relatives. The data show that the behavior is preferentially directed toward kin, consistent with Hamilton\'s rule.'
          },
          {
            question: 'A researcher observes that a species of bird spends an average of 8 minutes searching for prey and 2 minutes handling each prey item in habitat A, gaining 50 kJ per item. In habitat B, search time is 3 minutes and handling time is 5 minutes, gaining 60 kJ per item. Which habitat yields a higher energy intake rate?',
            options: [
              'Habitat B — 60 kJ / 8 min = 7.5 kJ/min vs Habitat A — 50 kJ / 10 min = 5.0 kJ/min',
              'Habitat A — because search time is more important than handling time',
              'Both are equal because total foraging time is 10 minutes and 8 minutes',
              'Habitat A — because higher search time indicates more prey availability'
            ],
            correctAnswer: 0,
            explanation: 'Energy intake rate = Energy gained / (Search time + Handling time). Habitat A: 50 / (8 + 2) = 5.0 kJ/min. Habitat B: 60 / (3 + 5) = 7.5 kJ/min. Habitat B has a 50% higher intake rate, so OFT predicts the bird should forage preferentially in Habitat B.'
          }
        ]
      }
    },
    {
      id: 'beh7-calculations',
      type: 'text' as const,
      content: `
## Quantitative Practice — Optimal Foraging & Kin Selection

### Optimal Foraging Calculation Framework

**Energy intake rate** = $\\frac{E_{\\text{gain}}}{T_{\\text{search}} + T_{\\text{handle}}}$

**Worked example**: A predator encounters two prey types:

| Prey type | Energy (kJ) | Handling time (min) | Encounter rate (items/hr) |
|---|---|---|---|
| Type A | 20 | 2 | 10 |
| Type B | 5 | 1 | 30 |

**Step 1**: Calculate profitability (E/handling time):
- Type A: 20 / 2 = 10 kJ/min
- Type B: 5 / 1 = 5 kJ/min

**Step 2**: Should the predator specialize on Type A or include both?
- Specializing on A: intake = 10 encounters/hr × 20 kJ = 200 kJ/hr
- Including both: intake = (10 × 20) + (30 × 5) = 350 kJ/hr, but must account for handling time reducing search time

**OFT prediction**: Include Type B only if adding it increases overall intake rate. With abundant Type A encounters, the predator should specialize; as Type A becomes rare, adding Type B becomes advantageous.

### Hamilton's Rule Calculation Framework

$$rB > C$$

**Worked example**: Should a prairie dog give an alarm call?
- C (cost to caller) = 0.02 reduction in lifetime reproductive success
- B (benefit per relative warned) = 0.05 increase in survival per relative
- Average r of nearby kin = 0.25 (half-siblings)
- Number of nearby kin = 3

**Calculation**: Total benefit = $n \\times r \\times B = 3 \\times 0.25 \\times 0.05 = 0.0375$

Since $0.0375 > 0.02$ (C), Hamilton's rule is satisfied → alarm calling is favored.
      `
    },
    {
      id: 'beh7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP Practice — Hamilton's Rule & Kin Selection** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A worker bee stings an intruder, which kills the bee (C = 1.0 fitness units). The sting protects the hive, providing a benefit of B = 0.8 fitness units to each of 4 sisters (r = 0.75). Does Hamilton\'s rule predict this behavior is favored by natural selection?',
            options: [
              'Yes — total rB = 4 × 0.75 × 0.8 = 2.4 > C = 1.0',
              'No — rB per sister = 0.6, which is less than C = 1.0',
              'Yes — but only because the queen also benefits',
              'No — the cost of death (1.0) always outweighs indirect benefits'
            ],
            correctAnswer: 0,
            explanation: 'Hamilton\'s rule considers the total benefit across all relatives helped. Total rB = 4 sisters × 0.75 × 0.8 = 2.4 fitness units of indirect benefit. Since 2.4 > 1.0 (the cost of dying), the stinging behavior is strongly favored by kin selection.'
          },
          {
            question: 'An animal helps a cousin (r = 0.125) at a cost of C = 3 to itself, providing a benefit of B = 20 to the cousin. According to Hamilton\'s rule, is this behavior favored?',
            options: [
              'No — rB = 0.125 × 20 = 2.5, which is less than C = 3',
              'Yes — rB = 0.125 × 20 = 2.5, which exceeds the threshold',
              'Yes — because 20 > 3, the raw benefit exceeds the cost',
              'No — cousins are too distantly related for any altruism to evolve'
            ],
            correctAnswer: 0,
            explanation: 'rB = 0.125 × 20 = 2.5. Since 2.5 < 3 = C, Hamilton\'s rule is NOT satisfied. The indirect genetic benefit (2.5) does not outweigh the direct cost (3), so this altruistic behavior would not be favored by kin selection. Note: raw benefit (20 > 3) is irrelevant — only rB matters.'
          }
        ]
      }
    },
    {
      id: 'beh7-experimental',
      type: 'text' as const,
      content: `
## Experimental Design in Behavioral Studies

### Key Elements of a Behavioral Experiment

| Element | Role | Example (testing kin selection in alarm calling) |
|---|---|---|
| **Hypothesis** | Testable prediction | Ground squirrels call more when kin are present |
| **Independent variable** | What the researcher manipulates | Presence/absence of related individuals nearby |
| **Dependent variable** | What is measured | Alarm call rate (calls per hour) |
| **Control group** | Baseline for comparison | Squirrels with no nearby kin |
| **Controlled variables** | Factors held constant | Predator type, time of day, population density |
| **Sample size** | Must be adequate for statistical power | n ≥ 30 individuals per group |
| **Replication** | Multiple trials to ensure reliability | Observations across multiple colonies |

### Common AP Experimental Design Questions

**Scenario type 1 — Evaluate this experiment:**
> "A researcher hypothesizes that bird song complexity increases reproductive success. To test this, the researcher records song complexity and counts the number of offspring for 100 males."

**Critique**: This is a correlational study, not an experiment. It lacks manipulation of the independent variable. A better design would use playback experiments with songs of varying complexity.

**Scenario type 2 — Design an experiment:**
> "Design an experiment to test whether foraging patch choice is consistent with optimal foraging theory."

**Good answer elements**:
1. Create patches with known, different prey densities
2. Measure time spent in each patch and prey items consumed
3. Compare observed giving-up densities to OFT predictions
4. Include control patches and adequate sample sizes
5. Use multiple individuals to account for individual variation
      `
    },
    {
      id: 'beh7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks — Experimental Design** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'In an experiment testing whether alarm calls are explained by kin selection, the independent variable would be ___',
            options: ['the presence or absence of genetic relatives near the caller', 'the number of alarm calls given', 'the type of predator used', 'the time of day observations are made']
          },
          {
            label: 'A study that only measures correlations between behavior and fitness without manipulating variables is a ___ study, not an experiment',
            options: ['observational (correlational)', 'double-blind', 'controlled', 'randomized']
          },
          {
            label: 'To calculate energy intake rate in an optimal foraging study, you divide energy gained by ___',
            options: ['search time plus handling time', 'search time only', 'handling time only', 'the number of prey items']
          }
        ],
        correctAnswers: ['the presence or absence of genetic relatives near the caller', 'observational (correlational)', 'search time plus handling time'],
        hint1: 'The independent variable is what the researcher manipulates — in kin selection tests, it\'s the social environment.',
        hint2: 'Without manipulation of variables, you cannot establish causation — only correlation.',
        hint3: 'Total foraging time per item includes both locating and processing the prey.',
        explanation: 'The IV for a kin selection experiment is the presence/relatedness of nearby individuals. Studies without variable manipulation are observational/correlational. Energy intake rate uses total time per item (search + handling) as the denominator.'
      }
    },
    {
      id: 'beh7-quiz3',
      type: 'multiple-choice' as const,
      content: `
**AP Practice — Comprehensive Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher studying a species of songbird observes that males with the most complex songs defend larger territories and attract more mates. The researcher states: "Song complexity evolved because males with better songs have higher reproductive success." This is an example of a(n):',
            options: [
              'Ultimate explanation — it addresses the evolutionary advantage of the behavior',
              'Proximate explanation — it describes how song complexity develops',
              'Hypothesis that can be tested only through laboratory experiments',
              'Example of group selection benefiting the population'
            ],
            correctAnswer: 0,
            explanation: 'This explanation addresses why the behavior evolved (increased reproductive success = higher fitness). It answers the "why" question at the evolutionary level, making it an ultimate explanation. A proximate explanation would describe the neural or hormonal mechanisms producing complex song.'
          },
          {
            question: 'Naked mole-rats are eusocial mammals. Only one queen breeds, and other colony members are workers. Unlike hymenopteran insects, naked mole-rats are diploid. Which factor MOST likely contributes to eusociality in this species?',
            options: [
              'High ecological constraints — underground tunnels are costly to build, and colonies face high predation if members disperse',
              'Haplodiploidy — which increases relatedness among female workers',
              'Classical conditioning — workers learn to serve the queen through reinforcement',
              'Low relatedness — ensuring genetic diversity within the colony'
            ],
            correctAnswer: 0,
            explanation: 'Since naked mole-rats are diploid (not haplodiploid), their eusociality cannot be explained by the asymmetric relatedness argument used for bees and ants. Instead, ecological factors — extreme cost of dispersal, difficulty of founding new colonies, and benefits of cooperative tunnel maintenance — are the primary drivers.'
          }
        ]
      }
    }
  ]
};
