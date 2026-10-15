export const apesAgricultureLandPart7Data = {
  topicSlug: 'apes-agriculture-land',
  sections: [
    {
      id: 'apesagri7-intro',
      type: 'text' as const,
      content: `
# 🌾 Agriculture & Land Use

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| One Chain of Cause and Effect |
| Calculations in This Topic |
| Final Checklist |

## 📖 The Topic on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 5.1 Tragedy of the commons | Private benefit + shared cost → overuse of shared resources | Part 5 |
| 5.2 Clearcutting | Cheap and efficient; erosion, warmer streams, flooding | Part 5 |
| 5.3 Green Revolution | High-yield varieties, mechanization, fertilizer, irrigation, pesticides; big yields, big inputs | Parts 1–2 |
| 5.4 Agricultural practices | Tilling, slash-and-burn, synthetic vs organic fertilizer | Part 2 |
| 5.6 Pest control | Resistance evolves by selection; GM crops narrow genetic diversity | Part 4 |
| 5.7 Meat production | CAFOs vs rotational and free-range grazing; manure, antibiotics, overgrazing, desertification | Part 3 |
| 5.8 Overfishing | Bycatch, trawling, fishery collapse | Part 3 |
| 5.9 Mining | Overburden, tailings, slag; lower-grade ore → more waste; reclamation | Part 5 |
| 5.10 Urbanization | Saltwater intrusion, sprawl, $CO_{2}$ | Part 5 |
| 5.11 Footprints | Ecological (area) vs carbon (emissions) | Part 5 |
| 5.12 Sustainability | Sustainable yield; environmental indicators | Part 5 |
| 5.14 IPM | Monitor, threshold, then cultural, biological, physical, chemical last | Part 4 |
| 5.15 Sustainable agriculture | Contour, terracing, no-till, strip cropping, windbreaks, perennials; rotation, green manure, limestone | Parts 1 and 4 |
| 5.16 Aquaculture | Efficient, low fuel; wastewater, disease, escapes | Part 3 |
| 5.17 Sustainable forestry | Selective cutting, reforestation, prescribed burns | Part 5 |

Irrigation methods (5.5) and urban runoff (5.13) are covered in the Water Resources lessons.
      `
    },
    {
      id: 'apesagri7-chain',
      type: 'text' as const,
      content: `
## One Chain of Cause and Effect

Many Unit 5 questions are really one long chain. Follow a single cornfield that feeds a feedlot:

1. **Monoculture corn** is planted on tilled ground → soil organic matter declines and topsoil erodes.
2. Lower fertility is offset with **synthetic fertilizer** → excess nitrate and phosphate run off.
3. The uniform crop invites pests → **pesticides** are sprayed → resistant pests and secondary pests appear.
4. The corn feeds a **CAFO** → manure is concentrated in lagoons, and antibiotics select resistant bacteria.
5. Runoff from fields and lagoons enters the river → **eutrophication**, low dissolved oxygen and fish kills downstream.

Every link has a matching fix: no-till and cover crops (1), precise fertilizer timing or manure and green manure (2), IPM and crop rotation (3), rotational grazing or lagoon treatment (4), and buffer strips of vegetation along streams (5).

### Worked Example: Putting Numbers on the Chain (illustrative data)

A 400-ha corn farm applies **150 kg of nitrogen per hectare**, and **20%** of it is lost to runoff and leaching.

$$\\text{N applied} = 400 \\times 150 = 60{,}000\\ \\text{kg}$$
$$\\text{N lost} = 60{,}000 \\times 0.20 = 12{,}000\\ \\text{kg} = 1.2 \\times 10^{4}\\ \\text{kg}$$

If cover crops and better timing cut the loss rate to **8%**:

$$60{,}000 \\times 0.08 = 4{,}800\\ \\text{kg}, \\quad \\frac{4{,}800 - 12{,}000}{12{,}000} \\times 100 = -60\\%$$

The nitrogen reaching the river falls by 60 percent, with the same fertilizer applied.
      `
    },
    {
      id: 'apesagri7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing correctly matches an agricultural problem with a practice that addresses its cause?',
            options: [
              'Water erosion on steep slopes, solved by terracing',
              'Acidic soil, solved by adding more synthetic nitrogen',
              'Pesticide resistance, solved by spraying more often',
              'Overgrazing, solved by keeping the herd on one pasture'
            ],
            correctAnswer: 0,
            explanation: 'Terraces break a steep slope into level steps, so runoff cannot gain speed and carry soil away. Spraying more often speeds resistance, and keeping a herd on one pasture causes overgrazing.'
          },
          {
            question: 'Which statement about the Green Revolution is accurate?',
            options: [
              'Output rose, but farming came to depend more on fuel and fertilizer',
              'Yields rose because farmers stopped using irrigation and pesticides',
              'Yields fell at first, but genetic diversity of the major crops increased',
              'Yields stayed flat, but the area of farmland in Asia roughly tripled'
            ],
            correctAnswer: 0,
            explanation: 'High-yield varieties needed fertilizer, irrigation, pesticides and machines, which raised output but also raised dependence on fossil fuel energy. Genetic diversity of the major crops declined.'
          },
          {
            question: 'Which is an advantage of aquaculture listed in the CED?',
            options: [
              'Large yields from a small area',
              'No risk of disease in crowded fish',
              'No need to feed carnivorous fish',
              'Escaped fish boost wild stocks'
            ],
            correctAnswer: 0,
            explanation: 'Aquaculture is highly efficient, producing a lot of food from a small area of water with little fuel. Crowding spreads disease, carnivorous species need fishmeal, and escaped fish compete with wild ones.'
          }
        ]
      }
    },
    {
      id: 'apesagri7-calcs',
      type: 'text' as const,
      content: `
## Calculations in This Topic

| Skill | Formula or fact | Part |
|---|---|---|
| Percent change | (new − old) ÷ old × 100, with the sign | 2, 4, 6, 7 |
| Percentage points vs percent | 15% → 80% is +65 points but +433% | 4 |
| Yield units | 1 t/ha = 100 g/$m^{2}$; 1 ha = 10,000 $m^{2}$ | 2 |
| People fed | Harvest (kg) ÷ need per person (kg) | 2 |
| Feed conversion ratio | Feed eaten ÷ weight gained | 3, 6 |
| Stocking rate | Area ÷ area needed per animal | 3 |
| Ore needed | Metal wanted ÷ ore grade (as a decimal) | 5 |
| Sustainable yield | Standing stock × annual growth rate | 5 |
| Earths needed | Footprint per person ÷ biocapacity per person | 5 |
| Scientific notation | 2,250 t = $2.25 \\times 10^{3}$ t | 6, 7 |

## Final Checklist

- Can you give **one benefit and one specific cost** of each Green Revolution practice?
- Can you explain **why** tilling lowers fertility and **why** slash-and-burn soils fail within a few years?
- Can you compare a **CAFO** with **rotational grazing** on land, waste, antibiotics, cost and speed?
- Can you trace **overgrazing → desertification** step by step?
- Can you explain resistance as **selection**, not as pests "adapting on purpose"?
- Can you list the **IPM** steps in order and name a drawback?
- Can you match each **soil conservation** practice to the threat it addresses?
- Can you explain the **tragedy of the commons** and one solution?
- Can you write a full **investigation design** (IV, DV, control, constant, null hypothesis)?
      `
    },
    {
      id: 'apesagri7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Mixed Review** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Coastal wells turning salty because the city pumps groundwater faster than it recharges is ___',
            options: ['saltwater intrusion', 'salinization', 'eutrophication', 'acid mine drainage']
          },
          {
            label: 'The crushed rock left after a mineral is separated from its ore is called ___',
            options: ['tailings', 'overburden', 'slag', 'humus']
          },
          {
            label: 'A cover crop that is plowed back into the soil to add organic matter is ___',
            options: ['green manure', 'a windbreak', 'a perennial crop', 'strip cropping']
          }
        ],
        correctAnswers: ['saltwater intrusion', 'tailings', 'green manure'],
        hint1: 'Seawater moves into the aquifer. (Salinization is salt left in soil by irrigation.)',
        hint2: 'Overburden is removed before mining; slag is left after smelting.',
        hint3: 'It is "manure" made of plants rather than animal waste.',
        explanation: 'Seawater entering an over-pumped aquifer is saltwater intrusion. The finely ground waste after separation is tailings. A cover crop turned into the soil is green manure.'
      }
    },
    {
      id: 'apesagri7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A 250-ha farm applies 120 kg of nitrogen per hectare, and 15% of it is lost to runoff. How many kilograms of nitrogen are lost?

2) A broiler chicken eats 4.2 kg of feed and gains 2.1 kg. What is its feed conversion ratio?

3) An iron ore is 40% iron. How many tonnes of ore are needed for 100 t of iron?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4500', '2', '250'],
        hint1: '250 × 120 gives the total applied; multiply by 0.15.',
        hint2: 'Feed eaten ÷ weight gained.',
        hint3: 'Divide the iron wanted by the grade as a decimal (0.40).',
        explanation: '1) 250 × 120 = 30,000 kg applied, and 30,000 × 0.15 = 4,500 kg lost. 2) 4.2 ÷ 2.1 = 2. 3) 100 ÷ 0.40 = 250 t of ore.'
      }
    },
    {
      id: 'apesagri7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government wants to cut nitrogen pollution in a river fed by farms and a large feedlot without reducing food output. Which combination of policies is best supported by this topic?',
            options: [
              'Cover crops on fields and lined, covered lagoons at the feedlot',
              'More tilling on fields and more antibiotics at the feedlot',
              'Clearcutting riverbank forest and draining nearby wetlands',
              'Switching fields to monoculture and doubling fertilizer rates'
            ],
            correctAnswer: 0,
            explanation: 'Cover crops hold soil and take up leftover nitrogen, and lined, covered lagoons keep manure from leaking or overflowing. Tilling, clearing riverbank forest and draining wetlands all increase nutrient runoff.'
          },
          {
            question: 'A forest company harvests 3,000 cubic meters a year from a forest whose sustainable yield is 2,000 cubic meters a year. What happens over time?',
            options: [
              'The standing timber shrinks and annual growth falls',
              'The forest grows faster to make up the shortfall',
              'Nothing changes as long as every cut tree is replaced',
              'The sustainable yield rises to match the harvest'
            ],
            correctAnswer: 0,
            explanation: 'Harvesting more than the annual regrowth draws down the stock, and a smaller stock grows less each year, so the decline accelerates. Replanting seedlings does not immediately replace the volume of mature trees.'
          },
          {
            question: 'Which situation is the clearest example of the tragedy of the commons?',
            options: [
              'Many fleets overfish an unregulated stock in international waters',
              'A rancher rotates cattle among paddocks on her own private land',
              'A city builds a reservoir and charges each household for its water',
              'A farmer adds limestone to his own acidic field to raise its pH'
            ],
            correctAnswer: 0,
            explanation: 'Unregulated international waters are a shared, open-access resource, so each fleet captures the benefit of catching more while the decline is shared by all. The other cases involve private land or a priced, managed resource.'
          }
        ]
      }
    },
    {
      id: 'apesagri7-summary',
      type: 'text' as const,
      content: `
## Topic Summary

| Theme | Takeaway |
|---|---|
| Producing more food | The Green Revolution multiplied yields by adding inputs: fertilizer, water, pesticides and fuel |
| Paying for it | Erosion, lost organic matter, runoff, resistance, lost genetic diversity |
| Animal foods | CAFOs save land at the site but concentrate waste; grazing spreads waste but needs more land and can overgraze |
| The sea | Overfishing and bycatch; aquaculture is efficient but pollutes and spreads disease |
| Beyond the farm | Commons, forests, mines and cities follow the same pattern of short-term gain and long-term cost |
| Fixes | IPM, soil conservation, rotational grazing, sustainable forestry, quotas, reclamation, sustainable yield |

You have now finished Agriculture & Land Use. The Water Resources lessons pick up where this one leaves off: irrigation, groundwater and what happens to the runoff once it reaches the river.
      `
    }
  ]
};
