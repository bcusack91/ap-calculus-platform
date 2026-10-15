export const apesAgricultureLandPart4Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri4-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 4 of 7 — Pest Control, IPM and Sustainable Agriculture**

---

| Section |
|---------|
| 📖 Pesticides and How Resistance Evolves |
| Reading Resistance Data |
| Integrated Pest Management Step by Step |
| Keeping Soil in Place and Fertile |

> 🔑 **Key Concept:** Pesticides raise yields by cutting crop losses, but every application is also a selective pressure on the pest population. This part explains why resistance is almost guaranteed with heavy spraying, how IPM decides when (and whether) to spray, and which practices conserve soil and fertility (CED 5.6, 5.14 and 5.15).
      `
    },
    {
      id: 'apesagri4-pesticides',
      type: 'text' as const,
      content: `
## 📖 Pesticides and How Resistance Evolves

| Pesticide type | Target | Example use |
|---|---|---|
| **Insecticide** | Insects | Corn rootworm, aphids |
| **Herbicide** | Weeds (unwanted plants) | Weeds competing with soybeans |
| **Fungicide** | Fungi | Potato blight, wheat rust |
| **Rodenticide** | Rodents | Rats in grain storage |

A **broad-spectrum** pesticide kills many kinds of organisms, including beneficial insects; a **narrow-spectrum** pesticide targets a few. A **persistent** pesticide such as DDT stays in the environment for years, which allows it to biomagnify up food chains.

### How resistance evolves

1. **Variation:** In a large pest population, a few individuals carry a gene that lets them survive the pesticide.
2. **Selection:** Spraying kills the susceptible individuals. The resistant ones survive.
3. **Reproduction:** Survivors breed, so the next generation has a higher share of resistant individuals.
4. **Repetition:** Pests with short generation times (insects, weeds, fungi) go through many generations each year, so resistance can dominate within a few seasons.

The CED describes this as **artificial selection**, because humans supply the selective pressure.

### The pesticide treadmill

As resistance spreads, farmers spray more often, use higher doses or switch to new chemicals, which selects for resistance again. Broad-spectrum sprays also kill the pest's natural predators. Without predators, the pest rebounds quickly, and species that were never a problem can become **secondary pests**.

### GM crops are part of the same story

Bt crops and herbicide-tolerant crops (Part 2) reduce some spraying, but they apply the same selective pressure every season, and widespread planting of a few engineered varieties narrows the crop's genetic diversity.
      `
    },
    {
      id: 'apesagri4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Before a new insecticide is ever used, about 1 beetle in 10,000 carries a gene that lets it survive the chemical. Why does the share of resistant beetles rise after spraying?',
            options: [
              'Susceptible beetles die, so the few that tolerate it leave most offspring',
              'The insecticide causes the resistance gene to appear in beetles it touches',
              'Resistant beetles migrate in from fields that were never sprayed at all',
              'Beetles learn to avoid sprayed leaves and pass that habit to their young'
            ],
            correctAnswer: 0,
            explanation: 'The insecticide does not create the gene; it removes the beetles that lack it. Because survivors breed, each generation has a larger share of resistant beetles.'
          },
          {
            question: 'After several years of broad-spectrum spraying, a farm suffers outbreaks of mites that were never a problem before. What is the best explanation?',
            options: [
              'The pesticide also killed the mites\' natural predators',
              'The mites evolved to eat a new kind of crop',
              'The crop began producing toxins that attract mites',
              'Fertilizer runoff increased the number of mite eggs laid'
            ],
            correctAnswer: 0,
            explanation: 'Broad-spectrum pesticides kill beneficial predatory insects along with the target pest. With their predators gone, mites multiply and become a secondary pest.'
          },
          {
            question: 'Which pest is likely to evolve resistance to a pesticide the fastest?',
            options: [
              'An aphid with many generations per year',
              'A rat that breeds a few times per year',
              'A deer that has one fawn a year',
              'A tree-boring beetle with a two-year life cycle'
            ],
            correctAnswer: 0,
            explanation: 'Selection acts once per generation, so a pest with many short generations each year and large numbers of offspring accumulates resistance fastest.'
          }
        ]
      }
    },
    {
      id: 'apesagri4-data',
      type: 'text' as const,
      content: `
## Reading Resistance Data

### Worked Example: A Weed Under Repeated Herbicide Use (illustrative data)

A herbicide was sprayed on the same fields every year. Researchers measured the percent of weeds that survived a standard dose.

| Year of use | 1 | 3 | 5 | 7 | 9 |
|---|---|---|---|---|---|
| Weeds surviving the standard dose (%) | 1 | 4 | 15 | 45 | 80 |

**1. Describe the trend.** Survival rose slowly at first, then sharply after year 5, approaching most of the population by year 9. This S-shaped rise is typical: while resistant plants are rare, their share grows slowly; once they are common, they take over quickly.

**2. Percent change from year 5 to year 9:**
$$\\frac{80 - 15}{15} \\times 100 \\approx 433\\%$$

**3. Average rate of change from year 1 to year 9:**
$$\\frac{80 - 1}{9 - 1} = \\frac{79}{8} \\approx 9.9\\ \\text{percentage points per year}$$

**4. Prediction:** If the farmer keeps using only this herbicide, nearly all weeds will be resistant within a few more years. Rotating herbicides with different modes of action, rotating crops and adding cover crops reduce the selective pressure.

> 🔑 **AP Connection:** "Percent change" and "change in percentage points" are different. Going from 15% to 80% survival is a change of **65 percentage points**, but a **433 percent** increase. Read which one the question asks for.
      `
    },
    {
      id: 'apesagri4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the resistance table above. Enter numbers only.

1) By how many percentage points did weed survival rise from year 3 to year 7?

2) What was the percent increase in weed survival from year 3 to year 7?

3) What was the average rise in survival per year from year 7 to year 9, in percentage points per year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['41', '1025', '17.5'],
        hint1: 'Subtract: 45 − 4.',
        hint2: '(45 − 4) ÷ 4 × 100.',
        hint3: 'Change in survival (80 − 45) divided by the number of years (9 − 7).',
        explanation: '1) 45 − 4 = 41 percentage points. 2) 41 ÷ 4 × 100 = 1,025 percent. 3) 35 ÷ 2 = 17.5 percentage points per year.'
      }
    },
    {
      id: 'apesagri4-ipm',
      type: 'text' as const,
      content: `
## Integrated Pest Management Step by Step

**Integrated pest management (IPM)** combines biological, physical and limited chemical methods to control pests while minimizing harm to the environment (CED 5.14). It works as a sequence of decisions.

| Step | What the farmer does | Example |
|---|---|---|
| 1. **Monitor** | Scout fields and count pests regularly | Count aphids on 50 randomly chosen plants each week |
| 2. **Compare with a threshold** | Act only when pests reach an **economic threshold**, the level at which the damage would cost more than control | Treat only above an average of 250 aphids per plant |
| 3. **Cultural controls** | Change farming practices to make the field less suitable for pests | Crop rotation breaks the life cycle of pests tied to one crop; **intercropping** mixes crops so pests cannot spread through a uniform field |
| 4. **Biological controls** | Use the pest's natural enemies | Ladybugs eat aphids; parasitic wasps lay eggs in caterpillars; release sterile male insects |
| 5. **Physical controls** | Block or remove pests directly | Traps, row covers, hand-weeding |
| 6. **Chemical controls, last** | If needed, a targeted, narrow-spectrum pesticide at the right time and dose | Spot-treat the infested area only |

### Worked Example: Applying the Threshold (illustrative data)

A scout counts aphids on 5 sample plants: 180, 260, 320, 150 and 340.

$$\\text{Mean} = \\frac{180 + 260 + 320 + 150 + 340}{5} = \\frac{1{,}250}{5} = 250\\ \\text{aphids per plant}$$

The mean is **at** the threshold of 250, so the farmer would begin with the least harmful option, such as releasing ladybugs, and keep monitoring. A conventional schedule might have sprayed weeks earlier regardless of numbers.

### Benefits and drawbacks

| Benefits | Drawbacks |
|---|---|
| Reduces risk to wildlife, water supplies and human health | Complex: requires knowledge of pest life cycles |
| Slows the evolution of resistance | Monitoring takes time and labor |
| Protects natural predators and pollinators | Can cost more in the short term |
      `
    },
    {
      id: 'apesagri4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the IPM Tool** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Planting rows of onions between rows of carrots so carrot flies struggle to find their host plants is ___',
            options: ['intercropping', 'monocropping', 'contour plowing', 'green manuring']
          },
          {
            label: 'Releasing parasitic wasps that lay their eggs inside caterpillar pests is ___',
            options: ['biological control', 'chemical control', 'cultural control', 'physical control']
          },
          {
            label: 'Spraying only when weekly counts exceed the level where damage costs more than treatment uses ___',
            options: ['an economic threshold', 'a broad-spectrum dose', 'a fixed calendar schedule', 'a persistent pesticide']
          }
        ],
        correctAnswers: ['intercropping', 'biological control', 'an economic threshold'],
        hint1: 'Two crops grown together in the same field.',
        hint2: 'A living natural enemy does the work.',
        hint3: 'IPM acts when the cost of damage exceeds the cost of control.',
        explanation: 'Mixing onions with carrots is intercropping. Natural enemies such as parasitic wasps are biological control. Spraying only above a damage-cost level uses an economic threshold rather than a calendar.'
      }
    },
    {
      id: 'apesagri4-soil',
      type: 'text' as const,
      content: `
## Keeping Soil in Place and Fertile

Part 1 listed contour plowing, terracing, no-till and cover crops. The CED groups sustainable practices by the problem they solve (CED 5.15).

### Practices that prevent erosion

| Practice | How it works |
|---|---|
| **Contour plowing** | Rows follow the land's contour, so each furrow is a small dam that slows runoff |
| **Terracing** | Flat steps on steep slopes stop water from gaining speed downhill |
| **No-till** | Crop residue stays on the surface and roots stay in place, shielding soil from rain and wind |
| **Strip cropping** | Alternating strips of a row crop (corn) and a dense crop (alfalfa or grass); the dense strips catch soil washed from the row crop |
| **Windbreaks** | Rows of trees or shrubs along field edges slow the wind, reducing wind erosion; they also provide habitat and can be harvested for wood |
| **Perennial crops** | Plants that live for years (alfalfa, fruit trees, perennial grains) keep roots in the soil year-round, with no annual plowing |

### Practices that improve fertility

| Practice | How it works |
|---|---|
| **Crop rotation** | Alternating crops, especially with legumes (beans, clover) whose root bacteria fix nitrogen; also breaks pest cycles |
| **Green manure** | A cover crop plowed back into the soil, adding organic matter and nutrients |
| **Limestone** | Calcium carbonate neutralizes acidic soil, raising pH so nutrients become more available to plants |

**Rotational grazing** (Part 3) protects pasture soil the same way: plants keep their roots and cover.

> 🔑 **AP Connection:** Match the practice to the threat. Wind erosion on flat plains → windbreaks or no-till. Water erosion on a steep slope → terracing or contour plowing. Acidic soil → limestone. Nitrogen-poor soil → legumes in rotation or green manure.
      `
    },
    {
      id: 'apesagri4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A farm on a flat, dry plain loses topsoil in dust storms every spring. Which practice best targets this problem?',
            options: [
              'Planting windbreaks along the edges of the fields',
              'Terracing the fields into flat steps',
              'Adding limestone to raise the soil pH',
              'Switching to furrow irrigation'
            ],
            correctAnswer: 0,
            explanation: 'Rows of trees and shrubs slow wind across the field, which reduces wind erosion. Terraces address water erosion on slopes, and limestone addresses acidity rather than soil loss.'
          },
          {
            question: 'Soil tests show a field is strongly acidic, and crops show signs of nutrient deficiency even though nutrients are present. What should the farmer add?',
            options: [
              'Limestone',
              'Synthetic nitrogen fertilizer',
              'More irrigation water',
              'A broad-spectrum fungicide'
            ],
            correctAnswer: 0,
            explanation: 'Limestone (calcium carbonate) neutralizes acidity and raises pH, which makes nutrients already in the soil more available to roots. Adding nitrogen does not fix a pH problem.'
          },
          {
            question: 'Which is a legitimate drawback a farmer might cite when deciding against IPM?',
            options: [
              'It requires frequent scouting and detailed knowledge of pests',
              'It speeds the evolution of resistance in pests and weeds',
              'It kills more pollinators than a regular spray schedule',
              'It forbids the use of any chemical pesticide at all'
            ],
            correctAnswer: 0,
            explanation: 'IPM depends on monitoring and an understanding of pest life cycles, which takes time, labor and expertise. It slows resistance, protects pollinators and still allows targeted pesticide use when needed.'
          }
        ]
      }
    },
    {
      id: 'apesagri4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Pesticide types | Insecticides, herbicides, fungicides, rodenticides; broad vs narrow spectrum |
| Resistance | Spraying selects resistant individuals; fastest in pests with short generations |
| Pesticide treadmill | More spraying → more resistance; predators killed → secondary pests |
| Resistance data | S-shaped rise; percent change ≠ percentage-point change |
| IPM | Monitor → threshold → cultural → biological → physical → targeted chemical last |
| Erosion control | Contour plowing, terracing, no-till, strip cropping, windbreaks, perennial crops |
| Fertility | Crop rotation with legumes, green manure, limestone for acidic soil |

**Next:** Part 5 widens the view from farms to forests, mines and cities, and to the shared-resource problem behind many of them.
      `
    }
  ]
};
