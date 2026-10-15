export const bioEnergyFlowPart6Data = {
  topicSlug: 'energy-flow-nutrient-cycling',
  sections: [
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s1-intro',
      type: 'text' as const,
      content: `
## AP Exam Practice: Energy and Matter Data

**Part 6 of 7 — AP Exam Practice: Energy and Matter Data**

The AP Biology exam rarely asks you to recite the steps of a cycle. It hands you data and asks you to **calculate, interpret, predict and justify**. This part works through three data sets of the kind you will see in multiple-choice sets and free-response questions.

### Skills checklist for this topic

| Skill | What it looks like here |
|---|---|
| Calculate | NPP from GPP and respiration; trophic efficiency; energy after $n$ levels; percent change |
| Interpret data | Identify the limiting nutrient; compare production across levels; read a dissolved-oxygen table |
| Predict | Effect of removing decomposers, halving NPP or adding fertilizer |
| Justify | Claim, evidence, reasoning tied to energy flow or matter cycling |
| Design | Identify independent and dependent variables, controls and replicates |

> **Strategy:** before calculating, write the relationship in words ("NPP is what is left after producers respire"). Most errors on these items come from subtracting in the wrong order, not from arithmetic.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s2-light-dark',
      type: 'text' as const,
      content: `
### Data Set 1: The Light-Bottle, Dark-Bottle Method

Aquatic ecologists measure primary production with dissolved oxygen ($\\text{O}_2$). Pond water is sealed in two bottles. The **light bottle** is clear, so its algae both photosynthesize and respire. The **dark bottle** is covered, so its algae only respire. Both are left in the pond for 24 hours.

| Measurement | Dissolved $\\text{O}_2$ (mg/L) |
|---|---|
| Initial (both bottles) | 8.0 |
| Light bottle after 24 h | 9.5 |
| Dark bottle after 24 h | 6.8 |

#### Worked solution

1. **Respiration (R):** the dark bottle lost oxygen only to respiration. $R = 8.0 - 6.8 = 1.2$ mg/L per day.
2. **Net primary production (NPP):** the light bottle's change is photosynthesis minus respiration. $\\text{NPP} = 9.5 - 8.0 = 1.5$ mg/L per day.
3. **Gross primary production (GPP):** add back what respiration used. $\\text{GPP} = \\text{NPP} + R = 1.5 + 1.2 = 2.7$ mg/L per day. A shortcut: $\\text{GPP} = \\text{light} - \\text{dark} = 9.5 - 6.8 = 2.7$.

**Why oxygen works as a measure:** photosynthesis releases $\\text{O}_2$ and respiration consumes it, in amounts tied to the carbon fixed and the carbon respired. Oxygen is a proxy for the energy captured.

**Limitation to mention in an FRQ:** the bottles contain bacteria and small animals as well as algae, so "respiration" includes the whole community, not just the producers.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s3-input-bottles',
      type: 'input-boxes' as const,
      content: `
### Practice — Light and Dark Bottles

A second pond gives these results after 24 hours: initial dissolved $\\text{O}_2$ = **7.0 mg/L**, light bottle = **8.6 mg/L**, dark bottle = **6.1 mg/L**.

1) Respiration (mg/L per day)

2) Net primary production (mg/L per day)

3) Gross primary production (mg/L per day)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.9', '1.6', '2.5'],
        hint1: 'The dark bottle shows respiration only; the light bottle shows photosynthesis minus respiration.',
        hint2: 'R = initial − dark. NPP = light − initial.',
        hint3: 'GPP = NPP + R, which also equals light − dark.',
        explanation: 'Respiration = 7.0 − 6.1 = 0.9, NPP = 8.6 − 7.0 = 1.6, and GPP = 1.6 + 0.9 = 2.5 mg/L per day, which matches the shortcut 8.6 − 6.1.'
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s4-stream',
      type: 'text' as const,
      content: `
### Data Set 2: Production in a Stream Food Web

Ecologists measured the energy stored as new biomass at each trophic level of a stream.

| Trophic level | Production (kJ/m²/yr) |
|---|---|
| Producers (algae and mosses) | 12,000 |
| Primary consumers (insect larvae) | 1,500 |
| Secondary consumers (small fish) | 120 |
| Tertiary consumers (trout) | 12 |

#### How to read it

- Efficiency from producers to primary consumers: $\\frac{1{,}500}{12{,}000} \\times 100 = 12.5\\%$.
- Efficiency from secondary to tertiary consumers: $\\frac{12}{120} \\times 100 = 10\\%$.
- Every efficiency falls inside the typical 5–20% range, and each level stores far less energy than the one below, so an energy pyramid for the stream is upright.
- The trout's 12 kJ/m²/yr is only $0.1\\%$ of the producers' 12,000, which is why a stream supports few large predators.

Try the remaining efficiency yourself in the checkpoint below.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s5-mcq-stream',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Stream Data
      `,
      exercise: {
        questions: [
          {
            question: 'Using the stream data, what is the trophic efficiency from primary consumers to secondary consumers?',
            options: [
              '12.5%',
              '8%',
              '10%',
              '80%'
            ],
            correctAnswer: 1,
            explanation: 'Efficiency is the higher level\'s production divided by the lower level\'s: 120 ÷ 1,500 × 100 = 8%. The value 12.5% belongs to the producer-to-herbivore transfer.'
          },
          {
            question: 'If the producers\' production fell by half and every transfer efficiency stayed the same, what would happen to production by the trout?',
            options: [
              'It would stay near 12 kJ/m²/yr',
              'It would drop to about 6 kJ/m²/yr',
              'It would drop to about 1.2 kJ/m²/yr',
              'It would rise to about 24 kJ/m²/yr'
            ],
            correctAnswer: 1,
            explanation: 'With fixed efficiencies, every level is a constant fraction of producer production, so halving the base halves the trout\'s production to about 6 kJ/m²/yr. This is a bottom-up effect of reduced energy availability.'
          },
          {
            question: 'A student claims the energy "lost" between the producers and the insect larvae in this stream has been destroyed. Which response best corrects the claim?',
            options: [
              'It was stored in the stream water as dissolved nitrate and phosphate',
              'It became heat from respiration or stayed in biomass that was never eaten or digested',
              'It was recycled to the producers when decomposers broke down the wastes',
              'It was turned into new matter that cycles through the stream food web'
            ],
            correctAnswer: 1,
            explanation: 'Energy is conserved: the missing energy left as heat from cellular respiration or remained in uneaten and undigested material that went to decomposers. Nitrate and phosphate are nutrients, which cycle as matter, and energy does not flow back to producers.'
          }
        ]
      }
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s6-frq',
      type: 'text' as const,
      content: `
### Data Set 3: A Nutrient-Enrichment Experiment (FRQ-style)

Students filled 12 identical tanks with lake water containing algae. Three tanks received each treatment. After two weeks they measured algal biomass as chlorophyll concentration.

| Treatment | Mean chlorophyll (µg/L) |
|---|---|
| Control (no nutrients added) | 5 |
| + Nitrogen (N) | 6 |
| + Phosphorus (P) | 21 |
| + N and P | 48 |

#### Model answers

**Identify the variables.** Independent variable: the nutrient added. Dependent variable: chlorophyll concentration (a measure of algal biomass). Controlled variables include tank size, water source, light and temperature. Three tanks per treatment are **replicates**.

**Claim:** phosphorus is the primary limiting nutrient for these algae.
**Evidence:** adding P alone raised chlorophyll from 5 to 21 µg/L, while adding N alone barely changed it (5 to 6 µg/L).
**Reasoning:** a limiting nutrient is the one whose addition increases primary production. Algae need phosphorus for nucleic acids, ATP and phospholipids, so without enough P they cannot build new cells.

**Extend the reasoning.** The N + P tanks (48 µg/L) grew much more than P alone. Once phosphorus was supplied, **nitrogen** became the next limiting nutrient. This pattern is called co-limitation.

**Predict.** If these tanks were left in the dark for a week after the bloom, the N + P tanks would show the largest **drop in dissolved oxygen**, because decomposers respiring the dead algae would consume oxygen with no photosynthesis to replace it. That is eutrophication from Part 5, reproduced in a tank.
      `
    },
    {
      id: 'bio-energy-flow-nutrient-cycling-p6-s7-mcq-design',
      type: 'multiple-choice' as const,
      content: `
### Checkpoint — Experiments and Predictions
      `,
      exercise: {
        questions: [
          {
            question: 'Based on the enrichment data, which claim is best supported?',
            options: [
              'Nitrogen is the main limiting nutrient, and phosphorus has no effect on the growth of algae',
              'Phosphorus is the main limiting nutrient, and nitrogen limits growth once phosphorus is supplied',
              'Neither nutrient limits growth, as the control and treatment values are roughly similar',
              'Nitrogen and phosphorus are equally limiting, since each alone raises biomass by the same amount'
            ],
            correctAnswer: 1,
            explanation: 'Phosphorus alone quadrupled chlorophyll, while nitrogen alone did almost nothing, but nitrogen added with phosphorus more than doubled growth again. That pattern shows phosphorus is the primary limit and nitrogen the secondary one.'
          },
          {
            question: 'In the enrichment experiment, what is the purpose of the control tanks?',
            options: [
              'To supply extra nitrogen and phosphorus to every tank equally',
              'To make sure that the algae in each tank are the same species',
              'To show algal growth with no added nutrients',
              'To give a second measurement of the N and P treatment'
            ],
            correctAnswer: 2,
            explanation: 'The control shows how much the algae grow without any treatment, giving a baseline for judging each nutrient\'s effect. Keeping the algae the same in every tank is a controlled variable, not the purpose of a control group.'
          },
          {
            question: 'A soil sample is sterilized to kill all bacteria and fungi, then leaf litter is added and the sample is sealed. Compared with an unsterilized sample, what will happen to the nutrients in the litter?',
            options: [
              'They are released faster as no microbes compete for them',
              'They escape to the air as nitrogen gas through nitrification',
              'They stay locked in organic molecules unavailable to plants',
              'They turn directly into nitrate without the help of decomposers'
            ],
            correctAnswer: 2,
            explanation: 'Without decomposers, ammonification and the rest of decomposition stop, so nitrogen, phosphorus and carbon stay bound in the dead leaves. Nitrification produces nitrate rather than nitrogen gas, and it also depends on bacteria that sterilization removed.'
          }
        ]
      }
    }
  ]
};
