export const apesPopulationEcologyPart1Data = {
  topicSlug: 'apes-population-ecology',
  sections: [
    {
      id: 'apespe1-intro',
      type: 'text' as const,
      content: `
# 🐾 Population Ecology

**Part 1 of 7 — Growth Models and Carrying Capacity**

---

## Population Growth Models

| Model | Shape | Equation | Description |
|-------|-------|----------|-----------|
| **Exponential (J-curve)** | J-shaped | dN/dt = rN | Unlimited resources; population grows without limit |
| **Logistic (S-curve)** | S-shaped | dN/dt = rN(K-N)/K | Growth slows as population approaches carrying capacity (K) |

### Key Variables

| Symbol | Meaning |
|--------|---------|
| **N** | Population size |
| **r** | Intrinsic rate of natural increase (birth rate - death rate) |
| **K** | Carrying capacity (maximum population an environment can sustain) |
| **dN/dt** | Rate of population change over time |

> 🔑 **AP Key Point:** Maximum growth rate in logistic growth occurs at **N = K/2** (half the carrying capacity). This is when (K-N)/K = 0.5, so the growth rate is rN/2.

---

## Reproductive Strategies

| Strategy | Characteristics | Examples |
|----------|---------------|---------|
| **r-selected** | Many offspring, little parental care, small body, short lifespan | Insects, bacteria, mice, weeds |
| **K-selected** | Few offspring, high parental care, large body, long lifespan | Elephants, whales, humans, eagles |
      `
    },
    {
      id: 'apespe1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In logistic growth, population growth rate is HIGHEST when:',
            options: [
              'The population is near zero',
              'The population is at carrying capacity (K)',
              'The population is at K/2 (half of carrying capacity)',
              'Resources are completely depleted'
            ],
            correctAnswer: 2,
            explanation: 'At N = K/2, the logistic equation produces maximum growth rate. Below K/2, population is too small for maximum growth. Above K/2, resources become limiting and growth slows.'
          },
          {
            question: 'An r-selected species would most likely:',
            options: [
              'Produce few offspring with extensive parental care',
              'Have a long lifespan and large body size',
              'Produce many offspring with little parental care',
              'Be found mainly in stable, predictable environments'
            ],
            correctAnswer: 2,
            explanation: 'r-selected species maximize reproductive rate (r): many offspring, little care, rapid maturity. They thrive in unstable environments where they can quickly fill available resources.'
          }
        ]
      }
    },
    {
      id: 'apespe1-content',
      type: 'text' as const,
      content: `
## Density-Dependent vs. Density-Independent Factors

| Type | Definition | Examples |
|------|-----------|---------|
| **Density-dependent** | Impact increases as population density increases | Competition, predation, disease, parasitism |
| **Density-independent** | Impact is the same regardless of population size | Natural disasters, weather, fire, drought |

## Species Interactions

| Interaction | Species A | Species B | Example |
|------------|----------|----------|---------|
| **Mutualism** | Benefits (+) | Benefits (+) | Bee and flower; clownfish and anemone |
| **Commensalism** | Benefits (+) | Unaffected (0) | Barnacles on whales; birds nesting in trees |
| **Parasitism** | Benefits (+) | Harmed (−) | Tapeworm in host; tick on deer |
| **Predation** | Benefits (+) | Harmed (−) | Wolf eating rabbit |
| **Competition** | Harmed (−) | Harmed (−) | Two species competing for same food |

### Competitive Exclusion Principle
Two species competing for the **exact same niche** cannot coexist indefinitely — one will outcompete the other. Species coexist through **niche partitioning** (dividing resources).
      `
    },
    {
      id: 'apespe1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The maximum population size an environment can sustain indefinitely is called the _______ capacity (K).

2) In logistic growth, the maximum growth rate occurs at N = K/_______.

3) Factors whose impact increases with population density (like disease and competition) are called _______-dependent factors.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['carrying', '2', 'density'],
        hint1: 'The upper limit on population size.',
        hint2: 'Half of K.',
        hint3: 'They depend on how dense the population is.',
        explanation: 'Carrying capacity (K) = maximum sustainable population. Maximum growth at K/2. Density-dependent factors intensify with crowding.'
      }
    },
    {
      id: 'apespe1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Interaction** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A clownfish living in a sea anemone — both benefit. This is ___',
            options: ['Mutualism (+/+)', 'Commensalism (+/0)', 'Parasitism (+/−)', 'Competition (−/−)']
          },
          {
            label: 'A drought killing organisms regardless of population density is a ___ factor',
            options: ['Density-independent', 'Density-dependent', 'K-selected', 'r-selected']
          },
          {
            label: 'Elephants (few offspring, long lifespan, extensive parental care) are ___',
            options: ['K-selected', 'r-selected', 'Pioneer species', 'Keystone species']
          }
        ],
        correctAnswers: ['Mutualism (+/+)', 'Density-independent', 'K-selected'],
        hint1: 'Both species benefit.',
        hint2: 'Weather does not care about population density.',
        hint3: 'Few offspring, lots of investment.',
        explanation: 'Clownfish/anemone = mutualism. Drought = density-independent. Elephants = K-selected (few offspring, high care).'
      }
    },
    {
      id: 'apespe1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Population Ecology

- Be able to sketch and label J-curve (exponential) vs S-curve (logistic)
- **Maximum growth at K/2** is one of the most tested concepts on the AP exam
- Know how to calculate growth rate: if K=1000 and N=500, growth is at its maximum
- r-selected vs K-selected: know examples and which strategy is favored in different environments
- **Invasive species** are often r-selected: they reproduce rapidly in new environments without predators
- Species interactions: know the +/+, +/0, +/−, −/− notation system
      `
    },
    {
      id: 'apespe1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population of deer has a carrying capacity of 800. At what population size would you expect the fastest population growth?',
            options: [
              '100 deer',
              '400 deer',
              '600 deer',
              '800 deer'
            ],
            correctAnswer: 1,
            explanation: 'Maximum growth occurs at K/2 = 800/2 = 400. At this point, resources are still ample enough to support high birth rates, but the population is large enough for significant total reproduction.'
          },
          {
            question: 'An invasive species introduced to an island with no predators initially shows J-shaped exponential growth. What will MOST likely happen next?',
            options: [
              'Growth will continue exponentially forever',
              'The population will crash after overshooting carrying capacity due to resource depletion',
              'The population will immediately stabilize at carrying capacity',
              'The population will decline due to natural predators evolving'
            ],
            correctAnswer: 1,
            explanation: 'Without predators, the population overshoots K, depletes resources, and then crashes. This boom-and-bust pattern is common for invasive species and can cause permanent ecosystem damage.'
          }
        ]
      }
    }
  ]
};
