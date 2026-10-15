export const apesEcosystemStructurePart2Data = {
  topicSlug: 'apes-ecosystem-structure',
  sections: [
    {
      id: 'apesecos2-intro',
      type: 'text' as const,
      content: `
# 🌿 Ecosystem Structure

**Part 2 of 7 — Primary Productivity in Depth**

---

| Section |
|---------|
| 📖 GPP, NPP and Respiration in Real Units |
| Measuring Productivity: The Light-and-Dark-Bottle Method |
| What Limits Productivity |

> 🔑 **Key Concept:** Part 1 defined NPP as GPP minus respiration. This part shows how ecologists **measure** productivity, how to move between units (per square meter, per hectare, per square kilometer), and why productivity changes with climate and with water depth. These calculations appear on almost every AP Environmental Science exam.
      `
    },
    {
      id: 'apesecos2-units',
      type: 'text' as const,
      content: `
## 📖 GPP, NPP and Respiration in Real Units

**Primary productivity** is the **rate** at which producers convert solar energy into chemical energy stored in organic matter. Because it is a rate, it always carries three parts in its units: an amount of energy or mass, an area (or volume), and a time.

| Common unit | Read it as | Used for |
|---|---|---|
| $kcal/m^{2}/yr$ | kilocalories per square meter per year | Energy budgets on land |
| $g\\,C/m^{2}/yr$ | grams of carbon fixed per square meter per year | Carbon-cycle studies |
| $mg\\,O_{2}/L/day$ | milligrams of dissolved oxygen per liter per day | Lake and ocean samples |

$$\\text{NPP} = \\text{GPP} - R_{\\text{autotrophs}}$$

Only the producers' own respiration ($R$) is subtracted. NPP is the energy left over for **plant growth and reproduction**, and therefore the only energy available to herbivores, decomposers and every level above them.

### Worked Example 1: NPP as a Share of GPP

A temperate forest has a GPP of 12,000 $kcal/m^{2}/yr$. Its trees and shrubs use 7,200 $kcal/m^{2}/yr$ in cellular respiration.

1. NPP $= 12{,}000 - 7{,}200 = 4{,}800$ $kcal/m^{2}/yr$
2. NPP as a percent of GPP $= \\dfrac{4{,}800}{12{,}000} \\times 100 = 40\\%$
3. Respiration used the other $60\\%$.

### Worked Example 2: Converting Area Units

Areas you must know cold:

| Conversion | Value |
|---|---|
| 1 hectare (ha) | $10{,}000\\ m^{2}$ |
| 1 square kilometer ($km^{2}$) | $1{,}000{,}000\\ m^{2} = 100$ ha |

A salt marsh has an NPP of 3,000 $kcal/m^{2}/yr$ and covers 2.5 $km^{2}$. What is its total NPP per year?

1. Convert the area: $2.5\\ km^{2} \\times 1{,}000{,}000\\ m^{2}/km^{2} = 2.5 \\times 10^{6}\\ m^{2}$
2. Multiply by the rate: $3{,}000 \\times 2.5 \\times 10^{6} = 7.5 \\times 10^{9}$ $kcal/yr$
3. Per hectare, the same marsh produces $3{,}000 \\times 10{,}000 = 3.0 \\times 10^{7}$ $kcal/ha/yr$.

> 🔑 **AP Connection:** Write the units on every line and cancel them like algebra. AP free-response scoring usually requires the **setup** with units, not just the final number, and a missing unit conversion is the most common lost point.
      `
    },
    {
      id: 'apesecos2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A grassland has a GPP of 6,000 $kcal/m^{2}/yr$ and an NPP of 2,400 $kcal/m^{2}/yr$. What percentage of the GPP did the grasses use in their own respiration?',
            options: [
              '40 percent',
              '60 percent',
              '25 percent',
              '250 percent'
            ],
            correctAnswer: 1,
            explanation: 'Respiration is GPP minus NPP, 6,000 − 2,400 = 3,600, and 3,600 ÷ 6,000 = 60 percent. The value 40 percent is the share left as NPP, not the share respired.'
          },
          {
            question: 'Why is net primary productivity, rather than gross primary productivity, the measure of energy available to herbivores?',
            options: [
              'Herbivores can digest only the cellulose that producers store in cell walls',
              'Producers burn part of the energy they capture to power their own metabolism',
              'Gross productivity includes sunlight that was reflected before reaching any leaves',
              'Decomposers claim most of the stored energy before any consumer can feed'
            ],
            correctAnswer: 1,
            explanation: 'Producers spend part of their captured energy on their own cellular respiration; only what remains as stored biomass (NPP) can be eaten. GPP counts only energy actually fixed by photosynthesis, so reflected light is never part of it.'
          },
          {
            question: 'A wetland covering 40 hectares has an NPP of 2,000 $kcal/m^{2}/yr$. What is its total NPP?',
            options: [
              '$8.0 \\times 10^{4}$ kcal/yr',
              '$8.0 \\times 10^{6}$ kcal/yr',
              '$8.0 \\times 10^{8}$ kcal/yr',
              '$5.0 \\times 10^{2}$ kcal/yr'
            ],
            correctAnswer: 2,
            explanation: 'Forty hectares is 40 × 10,000 = 400,000 square meters, and 400,000 × 2,000 = 8.0 × 10^8 kcal per year. Forgetting to convert hectares to square meters gives the far smaller 8.0 × 10^4.'
          }
        ]
      }
    },
    {
      id: 'apesecos2-bottles',
      type: 'text' as const,
      content: `
## Measuring Productivity: The Light-and-Dark-Bottle Method

You cannot weigh every alga in a lake, so aquatic ecologists measure productivity indirectly through **dissolved oxygen (DO)**. Photosynthesis releases $O_{2}$ and respiration consumes it.

### The setup

1. Fill three bottles with water (and its plankton) from the same depth.
2. Measure DO in the **initial** bottle right away.
3. Seal a **light bottle** (clear) and a **dark bottle** (wrapped in foil) and return both to the lake for a set time, often 24 hours.
4. Measure DO in each bottle again.

| Bottle | What happens inside | What the DO change measures |
|---|---|---|
| Dark bottle | Respiration only, no photosynthesis | **Respiration** = initial − dark |
| Light bottle | Photosynthesis and respiration together | **NPP** = light − initial |
| Both together | | **GPP** = light − dark (equivalently NPP + R) |

### Worked Example: A Pond Sample

| Bottle | DO ($mg\\,O_{2}/L$) |
|---|---|
| Initial | 8.0 |
| Light, after 24 h | 10.5 |
| Dark, after 24 h | 6.2 |

1. Respiration $= 8.0 - 6.2 = 1.8$ $mg\\,O_{2}/L/day$
2. NPP $= 10.5 - 8.0 = 2.5$ $mg\\,O_{2}/L/day$
3. GPP $= 10.5 - 6.2 = 4.3$ $mg\\,O_{2}/L/day$ (check: $2.5 + 1.8 = 4.3$ ✓)

### Converting oxygen to carbon

Photosynthesis fixes one carbon atom for each $O_{2}$ molecule released, so 32 g of $O_{2}$ corresponds to 12 g of carbon. Multiply by $\\dfrac{12}{32} = 0.375$:

$$4.3\\ mg\\,O_{2}/L/day \\times 0.375 = 1.6\\ mg\\,C/L/day$$

> 🔑 **AP Connection:** If a question gives the light and dark bottles but no initial value, you can still find **GPP** (light − dark), but you cannot separate NPP from respiration. Check which values you actually have before choosing a formula.
      `
    },
    {
      id: 'apesecos2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A lake sample starts at 9.0 $mg\\,O_{2}/L$. After 24 hours, the light bottle reads 11.2 $mg\\,O_{2}/L$ and the dark bottle reads 7.6 $mg\\,O_{2}/L$.

1) Respiration, in $mg\\,O_{2}/L/day$:

2) NPP, in $mg\\,O_{2}/L/day$:

3) GPP, in $mg\\,O_{2}/L/day$:
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1.4', '2.2', '3.6'],
        hint1: 'The dark bottle only respires: initial minus dark.',
        hint2: 'The light bottle shows the net gain: light minus initial.',
        hint3: 'GPP is light minus dark, or NPP plus respiration.',
        explanation: 'Respiration = 9.0 − 7.6 = 1.4. NPP = 11.2 − 9.0 = 2.2. GPP = 11.2 − 7.6 = 3.6, which equals 2.2 + 1.4.'
      }
    },
    {
      id: 'apesecos2-limits',
      type: 'text' as const,
      content: `
## What Limits Productivity

### On land: water and temperature

Terrestrial NPP rises with **precipitation** and **temperature** together. Tropical rainforests are warm and wet all year; deserts lack water; tundra lacks warmth and a long growing season. Within a climate, **nutrients** (especially nitrogen and phosphorus) can still cap growth.

### In water: light and nutrients

Water absorbs sunlight quickly, so productivity **decreases with depth**.

| Wavelength | How far it penetrates clear water |
|---|---|
| Red | Mostly absorbed within the top few meters |
| Green | Intermediate |
| Blue | Deepest, past 100 m in very clear ocean water |

The sunlit layer where photosynthesis exceeds respiration is the **photic zone**. Below it, producers cannot sustain positive NPP. Turbidity (sediment, algae) makes the photic zone shallower.

| Aquatic system | NPP per area | Main reason |
|---|---|---|
| Estuaries, salt marshes, coral reefs | Very high | Shallow, sunlit, nutrient-rich |
| Open ocean | Low per $m^{2}$ | Nutrient-poor surface water, far from runoff and upwelling |
| Upwelling zones | High | Cold, nutrient-rich deep water rises to the photic zone |

The open ocean still contributes a very large share of **global** NPP because it covers about 70% of Earth's surface: low rate × enormous area = large total.

### Photosynthetic efficiency

Producers capture only a tiny fraction of incoming sunlight.

**Worked example:** A meadow receives 1,500,000 $kcal/m^{2}/yr$ of sunlight and has a GPP of 15,000 $kcal/m^{2}/yr$.

$$\\text{Efficiency} = \\frac{15{,}000}{1{,}500{,}000} \\times 100 = 1\\%$$

About 1% is typical. Most sunlight is reflected, passes through leaves, falls on bare ground, or arrives in wavelengths chlorophyll does not absorb.

> 🔑 **AP Connection:** "Rate × area" is a frequent trap. An AP question may ask which ecosystem has the highest NPP **per square meter** (estuaries or tropical rainforests) and then which contributes the most **in total** (the open ocean, because of its area). Read for "per area" versus "total".
      `
    },
    {
      id: 'apesecos2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A researcher measures NPP in a clear lake at 1 m, 10 m and 30 m below the surface. Which pattern is most likely, and why?',
            options: [
              'NPP falls with depth because water absorbs light, and red light is absorbed first',
              'NPP rises with depth because nutrients sink and collect in the deeper water',
              'NPP stays constant because phytoplankton are mixed evenly throughout the lake',
              'NPP rises with depth because cooler water slows the respiration of producers'
            ],
            correctAnswer: 0,
            explanation: 'Light intensity drops quickly with depth and red wavelengths disappear first, so photosynthesis, and therefore NPP, declines below the surface. Deep nutrients do not help producers that lack the light to use them.'
          },
          {
            question: 'Per square meter, the open ocean has low NPP, yet it accounts for a large share of global NPP. Which statement best explains this?',
            options: [
              'Its surface waters are richer in nitrogen than soils',
              'It covers about 70 percent of Earth\'s surface',
              'Its phytoplankton capture far more sunlight per cell',
              'Its producers respire far less than land plants do'
            ],
            correctAnswer: 1,
            explanation: 'Total NPP equals the rate per area multiplied by the area. A low rate spread over most of the planet still produces a very large total, even though open-ocean surface water is nutrient-poor.'
          }
        ]
      }
    },
    {
      id: 'apesecos2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Productivity | A **rate**: energy or mass, per area or volume, per time |
| NPP | GPP minus producer respiration; the only energy available to consumers |
| Light-and-dark bottles | R = initial − dark; NPP = light − initial; GPP = light − dark |
| $O_{2}$ to carbon | Multiply mg $O_{2}$ by 0.375 to get mg C |
| Area units | 1 ha = 10,000 $m^{2}$; 1 $km^{2}$ = 100 ha = 1,000,000 $m^{2}$ |
| Limits on land | Water and temperature (then nutrients) |
| Limits in water | Light (falls with depth) and nutrients |
| Efficiency | Producers fix only about 1% of incoming sunlight |

**Next:** Part 3 follows that fixed energy up the food chain and calculates how much is lost at every step.
      `
    }
  ]
};
