export const apesWaterResourcesPart7Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate7-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 🗺️ The Whole Topic on One Page |
| Following Water Through a River Basin |
| Calculation Toolkit |
| Misconceptions to Avoid |

> 🔑 **Key Concept:** Water connects most of Unit 5 and Unit 8. Water is pumped from aquifers, spread on fields, run off into rivers, treated in sewage plants and mixed with the waste and toxins people release. This review ties the six earlier parts into one system and collects the calculations in one place.

## 🗺️ The Whole Topic on One Page

| Part | Big idea | CED topics | Signature calculation |
|---|---|---|---|
| 1 | Fresh water is scarce; agriculture uses about 70% | 5.5, 8.1 | Percent of total water |
| 2 | Aquifers deplete when withdrawal exceeds recharge; irrigation methods differ in waste | 5.5 | Applied water = need ÷ efficiency |
| 3 | Oil, plastic, sediment, nutrients and heat change aquatic ecosystems; wetlands and permeable surfaces protect them | 8.2, 8.4–8.6, 5.13 | Percent change in DO; slick area = volume ÷ thickness |
| 4 | Persistent, fat-soluble toxins biomagnify; dose-response curves measure toxicity | 8.3, 8.7, 8.8, 8.12, 8.13 | Biomagnification factor; dose = LD50 × mass |
| 5 | Sewage and solid waste need engineered treatment; poor sanitation spreads disease | 8.9–8.11, 8.14, 8.15 | BOD percent removed; diversion rate |
| 6 | FRQ practice: designing a study and calculating a payback period | All | Payback = cost ÷ yearly savings |

## Following Water Through a River Basin

Trace one farm region from source to sea:

1. **Pumping:** irrigation wells draw down the aquifer, creating cones of depression; near the coast, saltwater intrudes (Part 2).
2. **Irrigation:** furrow and flood systems waste a third and a fifth of the water; in dry climates, evaporation leaves salts and salinizes the soil (Part 2).
3. **Runoff:** fertilizer, sediment and pesticides wash off fields, a nonpoint source (Part 1); city pavement adds oil, metals and heat (Part 3).
4. **In the river:** sediment blocks light, nutrients drive algal blooms, and decomposition pulls DO down along an oxygen sag curve (Part 3).
5. **Up the food chain:** persistent pesticides and methylmercury biomagnify into large fish and fish-eating birds (Part 4).
6. **Towns along the river:** sewage plants remove solids, organic matter and, with tertiary treatment, nutrients before disinfecting; untreated sewage spreads cholera and dysentery (Part 5).
7. **At the coast:** wetlands and mangroves filter some of the load, but nutrient-rich water still feeds a hypoxic dead zone offshore (Part 3).

Each step offers a solution: drip irrigation, buffer strips and permeable pavement reduce what enters the water; tertiary treatment and wetland protection remove more of it.
      `
    },
    {
      id: 'apeswate7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pollutant released into a lake is most likely to reach its highest concentration in fish-eating birds?',
            options: [
              'Methylmercury',
              'Nitrate',
              'Silt',
              'Waste heat'
            ],
            correctAnswer: 0,
            explanation: 'Methylmercury is persistent and stored in tissue, so it biomagnifies at each trophic level. Nitrate is taken up and cycled by producers, silt settles out, and heat dissipates rather than concentrating in predators.'
          },
          {
            question: 'Which action would most directly shrink the hypoxic dead zone that forms each summer in the Gulf of Mexico?',
            options: [
              'Cut fertilizer runoff upstream',
              'Build more dams on the Mississippi River',
              'Add more oil platforms to stir the deep water',
              'Pump extra groundwater for Midwestern cornfields'
            ],
            correctAnswer: 0,
            explanation: 'The dead zone is fed by nitrogen and phosphorus carried down the Mississippi from farms. Less fertilizer runoff means smaller algal blooms and less oxygen-consuming decomposition; more pumping for irrigation would not reduce the nutrient load.'
          },
          {
            question: 'A coastal city both over-pumps its aquifer and paves over its recharge areas. Which combined outcome is most likely?',
            options: [
              'Wells turn salty as less rain soaks in and seawater intrudes',
              'Wells fill faster because paved surfaces send rain underground',
              'Flooding falls because the paved ground soaks up the extra rain',
              'Groundwater warms enough to cause thermal pollution of the wells'
            ],
            correctAnswer: 0,
            explanation: 'Pavement blocks infiltration, so recharge drops just as pumping lowers the freshwater pressure, and saltwater intrudes. Paved surfaces increase runoff and flooding rather than soaking up rain.'
          },
          {
            question: 'A town can either expand its landfill or start a food-scrap composting program. Which is an environmental argument for composting?',
            options: [
              'It stops buried food from decaying without oxygen into methane',
              'It destroys heavy metals in e-waste before they can leach',
              'It removes the need for a leachate collection system at all',
              'It disinfects the town\'s sewage before the water is released'
            ],
            correctAnswer: 0,
            explanation: 'Food scraps buried in a landfill decompose anaerobically and release methane; composting breaks them down aerobically into a soil conditioner instead. Composting does not affect metals, leachate systems or sewage.'
          }
        ]
      }
    },
    {
      id: 'apeswate7-toolkit',
      type: 'text' as const,
      content: `
## Calculation Toolkit

| Calculation | Formula | Example |
|---|---|---|
| Percent change | $\\dfrac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$ | DO 10.0 → 7.5 mg/L is −25% |
| Volume of water | area × depth (1 ha = 10,000 m²; 1 m³ = 1,000 L) | 40 ha × 0.25 m = 100,000 m³ |
| Water applied | need ÷ efficiency | 100,000 m³ ÷ 0.95 ≈ 105,300 m³ for drip |
| Water reaching crops | applied × efficiency | 500,000 L × 0.75 = 375,000 L for spray |
| Years to depletion | saturated thickness ÷ net decline per year | 30 m ÷ 0.6 m/yr = 50 yr |
| Area of a slick | volume ÷ thickness | 2 m³ ÷ 0.0001 m = 20,000 m² |
| Biomagnification factor | higher concentration ÷ lower concentration | $1.0 \\div (2 \\times 10^{-5}) = 5 \\times 10^{4}$ |
| Dose for one animal | LD50 (mg/kg) × body mass (kg) | 60 mg/kg × 0.25 kg = 15 mg |
| Payback period | cost ÷ yearly savings | \\$255,000 ÷ \\$51,000 = 5 yr |

**Scientific notation rules:** to multiply, multiply the front numbers and **add** exponents; to divide, divide the front numbers and **subtract** exponents. Always leave the answer with one nonzero digit before the decimal point: $0.5 \\times 10^{5}$ becomes $5 \\times 10^{4}$.
      `
    },
    {
      id: 'apeswate7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) A drip system loses 5% of the 400,000 L it applies. How many liters reach the crop roots?

2) DDT measures $1 \\times 10^{-4}$ ppm in lake water and 10 ppm in ospreys. What is the biomagnification factor from water to ospreys?

3) A chemical has an LD50 of 40 mg/kg in lab animals. Extrapolated to a 60 kg adult, what dose in milligrams corresponds to the LD50?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['380000', '100000', '2400'],
        hint1: 'If 5% is lost, 95% reaches the roots: multiply by 0.95.',
        hint2: 'Divide 10 by 0.0001. Dividing by $10^{-4}$ is the same as multiplying by $10^{4}$.',
        hint3: 'Multiply the LD50 by the body mass in kilograms.',
        explanation: '1) 400,000 × 0.95 = 380,000 L. 2) 10 ÷ 0.0001 = 100,000, or $1 \\times 10^{5}$. 3) 40 mg/kg × 60 kg = 2,400 mg, though extrapolating from animals to people carries uncertainty.'
      }
    },
    {
      id: 'apeswate7-misconceptions',
      type: 'text' as const,
      content: `
## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "Homes use most of our water, so shorter showers are the biggest fix." | Agriculture uses about 70%; better irrigation saves far more. |
| "Groundwater is renewable, so pumping is always sustainable." | Aquifers such as the Ogallala recharge far more slowly than they are pumped. |
| "Salinization comes from seawater." | Inland salinization comes from salts left behind when irrigation water evaporates; seawater entering wells is saltwater intrusion. |
| "The oxygen crash happens while the algae are alive." | Oxygen falls when bacteria decompose the dead algae or sewage. |
| "Thermal pollution means the water is too hot to touch." | A few degrees is enough to lower DO and raise fishes' oxygen demand. |
| "Bioaccumulation and biomagnification mean the same thing." | Bioaccumulation happens within one organism; biomagnification happens across trophic levels. |
| "A higher LD50 means a more dangerous chemical." | A higher LD50 means more is needed to kill, so the chemical is less toxic. |
| "Primary treatment cleans sewage." | Primary treatment only removes solids; bacteria in secondary treatment remove most organic matter. |
| "Recycling is always the best option." | Reducing and reusing come first; recycling costs energy and money. |

> 🔑 **AP Connection:** Most water FRQs reward a **three-link chain**: the human activity, the change in the water, and the effect on organisms. For example: "Fertilizer runoff adds phosphorus, which causes an algal bloom; decomposition of the dead algae lowers dissolved oxygen, so fish die." Practice writing these chains for every pollutant in this topic.
      `
    },
    {
      id: 'apeswate7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Term** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Contaminated liquid that trickles through buried trash and must be collected under a landfill is ___',
            options: ['Leachate', 'Sludge', 'Effluent', 'Runoff']
          },
          {
            label: 'The dose of a chemical that kills half of a test population is the ___',
            options: ['LD50', 'ED50', 'Threshold', 'Optimum']
          },
          {
            label: 'Land sinking after groundwater is pumped from clay-rich layers is called ___',
            options: ['Subsidence', 'Salinization', 'Waterlogging', 'Intrusion']
          }
        ],
        correctAnswers: ['Leachate', 'LD50', 'Subsidence'],
        hint1: 'It forms as rain percolates through the waste.',
        hint2: 'L stands for lethal.',
        hint3: 'The compacted clay cannot be refilled, so the surface drops.',
        explanation: 'Leachate is the polluted liquid collected beneath a landfill. The LD50 is the lethal dose for 50 percent of a test population, while the ED50 measures a non-lethal effect. Subsidence is the sinking of land as drained clay layers compact.'
      }
    },
    {
      id: 'apeswate7-summary',
      type: 'text' as const,
      content: `
## Topic Summary

| Theme | What to remember |
|---|---|
| Supply | Little accessible fresh water; aquifers deplete when pumping exceeds recharge |
| Use | Agriculture about 70%; irrigation losses: furrow about 1/3, flood about 20%, spray 1/4 or less, drip about 5% |
| Soil problems | Waterlogging starves roots of oxygen; salinization poisons soil |
| Aquatic pollution | Oil, plastics, sediment, nutrients, heat; oxygen sag curves and dead zones |
| Protection | Wetlands, mangroves, permeable pavement, trees, transit, building up |
| Toxins | Endocrine disruptors; POPs; bioaccumulation vs biomagnification; LD50, ED50, threshold |
| Waste | Primary, secondary, tertiary treatment plus disinfection; sanitary landfills; incineration; reduce, reuse, recycle, compost |
| Health | Dysentery, mesothelioma, ozone; cholera, TB, plague, malaria, West Nile, Zika, SARS, MERS |

You have now completed all seven parts of Water Resources.
      `
    }
  ]
};
