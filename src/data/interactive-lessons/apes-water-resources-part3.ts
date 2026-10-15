export const apesWaterResourcesPart3Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate3-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 3 of 7 — Pollution Sources and Aquatic Ecosystems**

---

| Section |
|---------|
| 📖 Oil, Litter and Sediment |
| The Oxygen Sag Curve |
| Thermal Pollution |
| Nutrient-Poor and Nutrient-Rich Waters |
| Wetlands and Mangroves |
| Reducing Urban Runoff |

> 🔑 **Key Concept:** Part 1 sorted pollution into point and nonpoint sources and listed the major pollutants. This part shows what those pollutants **do** once they reach water (CED 8.2, 8.4, 8.5, 8.6) and how cities can keep polluted runoff out of streams in the first place (CED 5.13).
      `
    },
    {
      id: 'apeswate3-oil',
      type: 'text' as const,
      content: `
## 📖 Oil, Litter and Sediment

### Oil spills

Oil reaches the ocean from tanker accidents, drilling blowouts such as the 2010 Deepwater Horizon spill in the Gulf of Mexico, pipeline leaks and runoff of used motor oil from roads.

| Where the oil goes | Harm |
|---|---|
| Floats on the surface | Coats the feathers of birds and the fur of marine mammals, which lose their insulation and buoyancy and die of cold or drown; animals swallow oil while preening |
| Dissolves into the water | Toxic hydrocarbons kill plankton, fish eggs and larvae |
| Sinks to the seafloor | Smothers and poisons bottom-dwelling organisms |
| Washes onto shore | Kills marsh and beach life; hurts the **fishing and tourism** industries |

Cleanup tools include floating **booms** that contain the slick, **skimmers** that collect it, chemical **dispersants** that break it into droplets and controlled burning. None recovers most of a large spill.

### Worked Example: How far does a spill spread? (illustrative data)

Oil spreads into a thin film. Suppose 2 m³ of oil spreads to an average thickness of 0.1 mm.

1. Convert thickness to meters: $0.1\\ \\text{mm} \\times \\dfrac{1\\ \\text{m}}{1{,}000\\ \\text{mm}} = 0.0001\\ \\text{m} = 1 \\times 10^{-4}\\ \\text{m}$
2. Area = volume ÷ thickness: $\\dfrac{2\\ \\text{m}^3}{1 \\times 10^{-4}\\ \\text{m}} = 2 \\times 10^{4}\\ \\text{m}^2 = 20{,}000\\ \\text{m}^2$
3. In hectares: $20{,}000 \\div 10{,}000 = 2$ ha, about three soccer fields from one small tank of oil.

### Litter and plastics

Plastic litter that reaches rivers and oceans breaks into smaller and smaller pieces (microplastics) but does not biodegrade quickly. Animals mistake it for food: it **blocks the digestive tract**, causes **choking and entanglement**, and carries toxic chemicals into the food chain.

### Sediment

Soil eroded from farms, construction sites and logged slopes makes water **turbid** (cloudy).

- Less light reaches the water, so **producers** such as algae and aquatic plants photosynthesize less.
- **Visual predators** such as trout have trouble finding prey.
- Settling sediment **smothers** fish eggs, gravel spawning beds and shellfish.
      `
    },
    {
      id: 'apeswate3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After an oil spill, many seabirds die even though they swallowed little oil. What is the main cause of death?',
            options: [
              'Oiled feathers stop insulating, so they lose body heat',
              'Oil raises the water temperature until the birds overheat',
              'Oil fumes destroy the ozone the birds need to breathe',
              'Sticky plumage attracts predators the birds cannot escape'
            ],
            correctAnswer: 0,
            explanation: 'Oil mats feathers together so they no longer trap warm air or repel water, and the birds die of cold or drown. Oil does not heat the ocean, and birds breathe oxygen, not ozone.'
          },
          {
            question: 'Construction upstream makes a clear river muddy for months. How does this most directly reduce the river\'s primary productivity?',
            options: [
              'Sediment raises the water\'s salt content',
              'Cloudy water blocks light for algae and plants',
              'Mud adds nitrogen that poisons the algae',
              'Sediment fills the river and stops its flow'
            ],
            correctAnswer: 1,
            explanation: 'Suspended sediment makes water turbid, so less sunlight reaches algae and rooted plants and they photosynthesize less. Sediment does not add salt, and extra nitrogen would fertilize rather than poison algae.'
          },
          {
            question: 'Sea turtles often eat floating plastic bags. Why is this harmful?',
            options: [
              'The plastic can block their digestive tract',
              'The bags dissolve into toxic gas inside them',
              'Their stomachs digest the plastic into harmful sugars',
              'The bags carry ocean salt into their bloodstream'
            ],
            correctAnswer: 0,
            explanation: 'Turtles mistake bags for jellyfish. The plastic cannot be digested, so it can block the digestive tract and the turtle may starve; plastics can also carry toxic chemicals into the food chain.'
          }
        ]
      }
    },
    {
      id: 'apeswate3-sag',
      type: 'text' as const,
      content: `
## The Oxygen Sag Curve

An **oxygen sag curve** plots dissolved oxygen (DO) against **distance downstream** from a source of organic waste or nutrients, such as a sewage outfall. Decomposers feeding on the waste use oxygen faster than the river can absorb it from the air, so DO dips and then recovers.

### Illustrative data: a river below a sewage outfall

| Distance from outfall (km) | −2 (upstream) | 0 | 5 | 10 | 20 | 30 | 50 | 80 |
|---|---|---|---|---|---|---|---|---|
| DO (mg/L) | 9.0 | 8.6 | 6.0 | 3.5 | 2.0 | 4.0 | 7.0 | 8.8 |

| Zone | Where | What is happening | Typical organisms |
|---|---|---|---|
| Clean zone | Upstream | High DO, little organic matter | Trout, stonefly larvae |
| Decomposition zone | 0–10 km | Bacteria break down waste; DO falls | Fewer sensitive species |
| Septic zone | Around 20 km | Lowest DO; may become hypoxic | Sludge worms, bacteria, tolerant fish such as carp |
| Recovery zone | 30–50 km | Waste is used up; oxygen diffuses back in from the air | Sensitive species return |
| Clean zone | 80 km | DO near upstream level | Trout, stonefly larvae |

**Percent decrease from upstream to the low point:**
$$\\frac{2.0 - 9.0}{9.0} \\times 100 \\approx -78\\%$$

**Travel time to the low point:** if the current moves at 2 km per hour, water takes $20\\ \\text{km} \\div 2\\ \\text{km/h} = 10$ hours to reach the septic zone.

This is the same oxygen-demand process that Biogeochemical Cycles Part 5 traced **over time** in a lake after an algal bloom; here it is plotted **over distance** along a flowing river.

## Thermal Pollution

**Thermal pollution** is heat released into water that harms the organisms living there. The main source is **cooling water** from power plants and factories, which is returned to a river or lake several degrees warmer; runoff from hot pavement adds more.

Warm water holds **less dissolved oxygen** than cold water:

| Water temperature (°C) | 0 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|
| Maximum DO at saturation (mg/L) | 14.6 | 11.3 | 10.1 | 9.1 | 8.3 | 7.6 |

**Worked Example:** A plant discharge warms a river from 15 °C to 25 °C. The most oxygen the water can hold changes by
$$\\frac{8.3 - 10.1}{10.1} \\times 100 \\approx -18\\%$$

The harm is doubled: fish are cold-blooded, so warmer water also **raises their metabolic rate** and their oxygen demand, just as the supply falls. A sudden temperature change can also cause **thermal shock**. Cooling towers and cooling ponds let the water lose heat before it is released.
      `
    },
    {
      id: 'apeswate3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) DO is 10.0 mg/L upstream of a power plant and 8.0 mg/L in its warm discharge plume. What is the percent decrease?

2) A tanker leaks 3 m³ of oil that spreads to an average thickness of 0.1 mm. What area does the slick cover, in square meters?

3) The low point of an oxygen sag curve is 15 km below an outfall. The current moves at 2.5 km per hour. How many hours does water take to get there?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '30000', '6'],
        hint1: '(10.0 − 8.0) ÷ 10.0 × 100.',
        hint2: 'Convert 0.1 mm to 0.0001 m, then divide the volume by the thickness.',
        hint3: 'Time = distance ÷ speed.',
        explanation: '1) 2.0 ÷ 10.0 × 100 = 20 percent. 2) 3 m³ ÷ 0.0001 m = 30,000 m², or 3 hectares. 3) 15 km ÷ 2.5 km/h = 6 hours.'
      }
    },
    {
      id: 'apeswate3-ecosystems',
      type: 'text' as const,
      content: `
## Nutrient-Poor and Nutrient-Rich Waters

Biogeochemical Cycles Part 5 traced how a fertilizer pulse leads to an algal bloom and an oxygen crash. The CED also asks you to compare the two end states:

| Feature | **Oligotrophic** (nutrient-poor) | **Eutrophic** (nutrient-rich) |
|---|---|---|
| Nutrients (N and P) | Low | High |
| Algae | Low, stable populations | Frequent blooms |
| Water clarity | Clear, deep light penetration | Green and murky |
| Dissolved oxygen | High at all depths | Low near the bottom, sometimes hypoxic |
| Typical life | Trout and other oxygen-loving fish | Tolerant fish such as carp; fish kills |

The two human causes the CED names are **agricultural runoff** and **wastewater release**.

**Dead zones** are areas of the ocean with too little oxygen for most marine life. The best-known U.S. example forms each summer in the **Gulf of Mexico**, where the Mississippi River delivers fertilizer nutrients from Midwestern farmland. Algae bloom in the surface water, die and sink, and their decomposition strips oxygen from the bottom water. Fish swim away; slow-moving bottom animals such as crabs and worms die.

## Wetlands and Mangroves

**Wetlands** are areas where water covers the soil all or part of the year (marshes, swamps, bogs). **Mangroves** are salt-tolerant trees that form forests along tropical coasts.

| Ecosystem service | How it works |
|---|---|
| Water purification and filtration | Slow water lets sediment settle; plants and microbes take up nutrients and break down pollutants |
| Flood protection | Wetlands soak up and slowly release floodwater; mangrove roots break waves and storm surge |
| Habitat | Nursery grounds for fish and shellfish; feeding grounds for migrating birds |

**Threats:** draining and filling for commercial development, dam construction (which changes water flow and sediment supply), overfilling with sediment, oil spills, nutrient pollution and climate change (sea-level rise).

## Reducing Urban Runoff

Pavement and roofs stop rain from soaking in, so runoff carries oil, metals, litter, pet waste and heat into streams. (Earth Systems Part 5 calculated how much more runoff impervious surfaces produce.) The CED's methods for increasing infiltration:

| Method | How it helps |
|---|---|
| **Permeable pavement** | Lets rain soak through the surface into the ground |
| **Planting trees** | Leaves intercept rain and roots open the soil |
| **Public transportation** | Fewer cars need fewer roads and parking lots |
| **Building up, not out** | Taller buildings cover less ground per resident |

Rain gardens and green roofs work the same way, holding rain where it falls. Each method also recharges groundwater, which links back to Part 2.

> 🔑 **AP Connection:** When asked to explain why an organism declines, connect the pollutant to a **specific mechanism**: "Warmer water holds less dissolved oxygen, so fish cannot get enough oxygen for respiration." A bare claim such as "the water is polluted" earns nothing.
      `
    },
    {
      id: 'apeswate3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Trout disappear from a river below a power plant even though the discharged water contains no chemicals. Which explanation is best?',
            options: [
              'Warm water holds less oxygen just as the fish need more',
              'Heated discharge carries extra nitrogen that poisons trout',
              'The discharge dilutes the river\'s salt below a safe level',
              'The discharge cools the water below what trout can survive'
            ],
            correctAnswer: 0,
            explanation: 'Heated discharge lowers the dissolved oxygen the water can hold, while warmth raises the trout\'s metabolic rate and oxygen demand. Cooling water is returned warmer, not colder, and it does not add nitrogen.'
          },
          {
            question: 'On an oxygen sag curve below a sewage outfall, where would you most likely find sludge worms but no stonefly larvae?',
            options: [
              'In the septic zone, where DO is lowest',
              'In the clean zone upstream of the pipe',
              'In the recovery zone, where DO is rising',
              'In the clean zone far below the outfall'
            ],
            correctAnswer: 0,
            explanation: 'Sludge worms tolerate very low oxygen, while stoneflies need high DO. The septic zone has the lowest oxygen, so only tolerant organisms survive there.'
          },
          {
            question: 'Which set of conditions describes an oligotrophic lake?',
            options: [
              'Clear water, few nutrients and high dissolved oxygen',
              'Murky water, many nutrients and low dissolved oxygen',
              'Few nutrients, murky water and low dissolved oxygen',
              'Many nutrients, clear water and high dissolved oxygen'
            ],
            correctAnswer: 0,
            explanation: 'An oligotrophic lake has few nutrients, so algae stay scarce, light penetrates deeply and oxygen stays high at all depths. Many nutrients, murky water and low oxygen describe a eutrophic lake.'
          },
          {
            question: 'A growing city wants to reduce flooding and polluted runoff into its creek. Which plan best follows the CED methods for increasing infiltration?',
            options: [
              'Use permeable pavement and plant street trees',
              'Widen the roads so storm drains can be larger',
              'Line the creek with concrete to speed its flow',
              'Build new suburbs spread over former farmland'
            ],
            correctAnswer: 0,
            explanation: 'Permeable pavement lets rain soak through and trees intercept rain and loosen soil, so less water runs off. Wider roads, a concrete channel and spreading outward all add impervious surface or speed runoff instead.'
          }
        ]
      }
    },
    {
      id: 'apeswate3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Oil spills | Coat feathers and fur, poison plankton, smother the seafloor, hurt fishing and tourism |
| Plastics | Block guts, choke and entangle wildlife, carry toxins into food chains |
| Sediment | Blocks light for producers and visual predators; smothers spawning beds |
| Oxygen sag curve | DO dips below an organic-waste source, then recovers downstream |
| Thermal pollution | Warm water holds less DO while fish need more |
| Oligotrophic vs eutrophic | Low nutrients, clear, high DO vs high nutrients, murky, low DO |
| Dead zones | Hypoxic areas such as the Gulf of Mexico, fed by farm nutrients |
| Wetlands and mangroves | Purify water, protect against floods and storms, provide habitat |
| Urban runoff | Permeable pavement, trees, public transit, building up |

**Next:** Part 4 turns to toxic chemicals: endocrine disruptors, persistent organic pollutants, biomagnification and the dose-response curves used to measure toxicity.
      `
    }
  ]
};
