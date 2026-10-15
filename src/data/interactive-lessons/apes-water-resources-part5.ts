export const apesWaterResourcesPart5Data = {
  topicSlug: 'apes-water-resources',
  sections: [
    {
      id: 'apeswate5-intro',
      type: 'text' as const,
      content: `
# 💧 Water Resources

**Part 5 of 7 — Sewage Treatment, Solid Waste and Human Health**

---

| Section |
|---------|
| 📖 Inside a Wastewater Treatment Plant |
| Sanitary Landfills |
| Incineration, Dumping and E-Waste |
| Reducing Waste |
| Pollution, Pathogens and Human Health |

> 🔑 **Key Concept:** Part 1 named the three levels of sewage treatment. This part follows the water through each stage in detail (CED 8.11), then does the same for solid waste (CED 8.9 and 8.10), and ends with the diseases that spread when water and waste are not managed (CED 8.14 and 8.15).
      `
    },
    {
      id: 'apeswate5-sewage',
      type: 'text' as const,
      content: `
## 📖 Inside a Wastewater Treatment Plant

| Stage | What happens | What it removes |
|---|---|---|
| **Primary** (physical) | Screens and grates catch large objects such as rags and sticks; grit settles out; the water sits in a settling tank so solids sink to the bottom as sludge | Large objects and settleable solids |
| **Secondary** (biological) | Bacteria break down dissolved organic matter into $CO_{2}$ and inorganic sludge, which settles in a second tank. The tank is **aerated** (air is bubbled through it) to speed up the bacteria. | Most remaining organic matter |
| **Tertiary** (ecological or chemical) | Constructed wetlands or chemical treatments remove what is left | Leftover pollutants, especially nitrogen and phosphorus |
| **Disinfection** | Before discharge, the water is treated with **chlorine, ozone or UV light** | Kills remaining bacteria and other pathogens |

### Why each stage matters

- **Biochemical oxygen demand (BOD)** measures how much oxygen decomposers would use to break down the organic matter in water. Sewage released with high BOD creates the oxygen sag curve from Part 3.
- Skipping tertiary treatment sends nitrogen and phosphorus downstream, where they feed algal blooms.
- Standard treatment does not remove all medications and hormones, which is how endocrine disruptors from Part 4 reach rivers.
- The **sludge** collected along the way can be digested by anaerobic bacteria (which produce methane that can be burned for energy), dried and landfilled, incinerated, or spread on fields as fertilizer if it is low in heavy metals and pathogens.

### Worked Example: BOD through a treatment plant (illustrative data)

| Point in plant | Raw sewage | After primary | After secondary | After tertiary |
|---|---|---|---|---|
| BOD (mg/L) | 250 | 175 | 25 | 10 |

**Percent of BOD removed by primary treatment:**
$$\\frac{250 - 175}{250} \\times 100 = 30\\%$$

**Percent removed by the whole plant:**
$$\\frac{250 - 10}{250} \\times 100 = 96\\%$$

The secondary stage removes the most BOD ($175 - 25 = 150$ mg/L), because that is where bacteria consume the dissolved organic matter.
      `
    },
    {
      id: 'apeswate5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why do treatment plants bubble air through the secondary treatment tank?',
            options: [
              'To help bacteria break down organic matter faster',
              'To push floating grease to the tank\'s far end',
              'To cool the water before it is sent to the river',
              'To blow the nitrogen out of the water as a gas'
            ],
            correctAnswer: 0,
            explanation: 'The bacteria that consume organic matter in secondary treatment use oxygen, so aerating the tank speeds their work. Nitrogen and phosphorus are mostly removed later, in tertiary treatment.'
          },
          {
            question: 'A plant upgrades from secondary to tertiary treatment. Which downstream change is most likely?',
            options: [
              'Fewer algal blooms',
              'More large debris',
              'Warmer river water',
              'Higher river BOD'
            ],
            correctAnswer: 0,
            explanation: 'Tertiary treatment removes much of the remaining nitrogen and phosphorus, so less fertilizer reaches the river to feed algae. Debris is removed in primary treatment, and the upgrade lowers BOD rather than raising it.'
          },
          {
            question: 'Treated sewage is exposed to UV light just before it is released. What is the purpose of this step?',
            options: [
              'To kill pathogens such as disease-causing bacteria',
              'To settle the sludge that is left over from the tanks',
              'To break down phosphorus into a harmless form of gas',
              'To warm the water up to the temperature of the river'
            ],
            correctAnswer: 0,
            explanation: 'Disinfection with chlorine, ozone or UV light kills remaining bacteria and other pathogens. Settling happens in earlier tanks, and phosphorus is an element that cannot be turned into a harmless gas.'
          }
        ]
      }
    },
    {
      id: 'apeswate5-waste',
      type: 'text' as const,
      content: `
## Sanitary Landfills

**Solid waste** is any discarded material that is not a liquid or gas, from homes, businesses, industry and farms. Most of it goes to landfills. A modern **sanitary municipal landfill** is engineered to keep its contents away from water and air:

| Component | Purpose |
|---|---|
| **Bottom liner** (compacted clay and/or a plastic sheet) | Keeps liquid from seeping into the soil and groundwater |
| **Leachate collection system** | Pipes collect **leachate**, the contaminated liquid that forms as rain trickles through the trash, and send it for treatment |
| **Storm water collection system** | Diverts rain away so less leachate forms |
| **Methane collection system** | Captures methane made by anaerobic decomposition, so it can be burned for electricity instead of escaping as a greenhouse gas or explosion risk |
| **Cap** (clay and soil cover) | Seals the finished landfill and keeps rain out |

**Decomposition** in a landfill depends on what the trash is made of and on the conditions microbes need: moisture, oxygen and warmth. Landfills are compacted, dry and low in oxygen, so even food and paper break down very slowly, and the decomposition that does happen is mostly anaerobic, which is why it produces methane.

**Siting** matters: landfills should sit on clay-rich soils, well above the water table and away from water supplies. They are often placed near low-income communities, an environmental justice concern.

## Incineration, Dumping and E-Waste

| Method or problem | Benefits | Drawbacks |
|---|---|---|
| **Incineration** (burning waste at high temperatures) | Greatly reduces the volume of waste; heat can generate electricity (waste-to-energy) | Releases air pollutants; leaves ash containing toxic heavy metals that must go to a landfill |
| **Illegal dumping** | (none) | Items landfills refuse, such as rubber tires, end up in empty lots and waterways; tires hold rainwater where mosquitoes breed |
| **Ocean dumping** | (none) | The ocean is a common destination for illegally dumped solid waste, adding to plastic pollution |
| **E-waste** (televisions, phones, computers) | Contains valuable metals that can be recovered | Contains heavy metals such as **lead and cadmium** that can leach out of landfills into groundwater |

## Reducing Waste

| Strategy | Advantages | Disadvantages |
|---|---|---|
| **Reduce** (buy and use less) | Prevents waste from existing at all, so it saves the most resources | Requires changes in habits and product design |
| **Reuse** | Saves the energy and materials needed to make a new item | Items wear out; may need cleaning |
| **Recycle** | Reduces landfill use and conserves raw materials | Can be energy-intensive and costly; markets for some materials are weak |
| **Compost** (food scraps, yard waste, paper) | Turns organic waste into a soil conditioner and keeps it out of landfills | Can produce odors and attract pests if managed poorly |

Old landfills can be capped and **restored as parks**, and landfill methane can drive turbines to generate electricity.

### Worked Example: A city's waste stream (illustrative data)

A city of **200,000 people** produces **2.0 kg** of solid waste per person per day.

1. Daily waste: $200{,}000 \\times 2.0\\ \\text{kg} = 400{,}000\\ \\text{kg} = 400$ metric tons (1 t = 1,000 kg)
2. Yearly waste: $400\\ \\text{t/day} \\times 365\\ \\text{days} = 146{,}000$ t, or $1.46 \\times 10^{5}$ t
3. If 51,100 t is recycled and 21,900 t is composted, the **diversion rate** is
$$\\frac{51{,}100 + 21{,}900}{146{,}000} \\times 100 = \\frac{73{,}000}{146{,}000} \\times 100 = 50\\%$$
      `
    },
    {
      id: 'apeswate5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only, without units or commas.

1) Raw sewage enters a plant with a BOD of 300 mg/L and leaves with a BOD of 15 mg/L. What percent of the BOD was removed?

2) A town of 50,000 people produces 2.0 kg of solid waste per person per day. How many metric tons does it produce per day?

3) The same town recycles or composts 9,125 metric tons a year. What is its diversion rate, as a percent of its yearly waste?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['95', '100', '25'],
        hint1: '(300 − 15) ÷ 300 × 100.',
        hint2: 'Multiply people by kilograms per person, then divide by 1,000 kg per metric ton.',
        hint3: 'Yearly waste is the daily amount × 365. Then divide 9,125 by that and multiply by 100.',
        explanation: '1) 285 ÷ 300 × 100 = 95 percent. 2) 50,000 × 2.0 = 100,000 kg, which is 100 metric tons. 3) 100 t × 365 = 36,500 t per year, and 9,125 ÷ 36,500 × 100 = 25 percent.'
      }
    },
    {
      id: 'apeswate5-health',
      type: 'text' as const,
      content: `
## Pollution, Pathogens and Human Health

### Why cause and effect is hard to prove

People are exposed to many chemicals and pollutants over their lives, so it is difficult to show that one pollutant caused one illness. The CED names three clear links:

| Health problem | Cause |
|---|---|
| **Dysentery** | Untreated sewage in streams and rivers |
| **Mesothelioma** (a cancer) | Mainly exposure to **asbestos** |
| **Respiratory problems** and reduced lung function | Elevated **tropospheric ozone** |

### Infectious diseases in the CED

| Disease | Pathogen | How it spreads |
|---|---|---|
| **Cholera** | Bacterium | Drinking contaminated water |
| **Tuberculosis** | Bacterium; usually attacks the lungs | Breathing in bacteria from the bodily fluids of an infected person |
| **Plague** | Bacterium | Bite of an infected organism (such as a flea) or contact with contaminated fluids or tissues |
| **Malaria** | Parasite | Bites from infected mosquitoes; most common in sub-Saharan Africa |
| **West Nile virus** | Virus | Bites from infected mosquitoes |
| **Zika** | Virus | Bites from infected mosquitoes; also sexual contact |
| **SARS** | Virus; a form of pneumonia | Inhaling or touching infected fluids |
| **MERS** | Virus; a respiratory illness | Passed from animals to humans |

### What helps pathogens spread

- **Poverty:** low-income areas often lack sanitary waste disposal and have contaminated drinking water, which lets waterborne diseases such as cholera spread.
- **Climate change:** as warm, tropical-type climates expand toward the poles, disease vectors such as mosquitoes spread into areas where these diseases were not known before.
- **Adaptation:** pathogens evolve to take advantage of new opportunities to infect people, and they can occur even in places that look clean.

> 🔑 **AP Connection:** For a disease question, give the **pathogen type and the route**: "Cholera is a bacterial disease spread through water contaminated with sewage, so building sewage treatment and safe water supplies reduces it." Naming only the disease earns little.
      `
    },
    {
      id: 'apeswate5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Monitoring wells beside an old landfill show rising lead and ammonia in the groundwater. Which landfill feature most likely failed?',
            options: [
              'The bottom liner',
              'The methane wells',
              'The storm drains',
              'The soil cap'
            ],
            correctAnswer: 0,
            explanation: 'The bottom liner is the barrier between leachate and the groundwater below. A failure of the methane wells would release gas to the air, and the cap and storm drains limit how much leachate forms rather than where it goes.'
          },
          {
            question: 'A county is deciding whether to burn its trash in an incinerator. Which pair correctly states one advantage and one disadvantage?',
            options: [
              'It shrinks trash volume, but its ash holds toxic heavy metals',
              'It ends the need for landfills, but it uses up groundwater',
              'It releases no air pollutants, but it makes trash bulkier',
              'It turns trash into compost, but it smells of methane'
            ],
            correctAnswer: 0,
            explanation: 'Incineration greatly reduces waste volume, but it releases air pollutants and leaves ash with heavy metals that still needs a landfill. It does not make compost or eliminate landfills.'
          },
          {
            question: 'Why do most landfill wastes, including food and paper, decompose very slowly?',
            options: [
              'Dry, compacted trash lacks the oxygen and water microbes need',
              'Buried trash is sorted so only nonbiodegradable items remain',
              'The cap blocks the sunlight that decomposers need to survive',
              'High landfill heat sterilizes the trash and kills decomposers'
            ],
            correctAnswer: 0,
            explanation: 'Decomposers need moisture, oxygen and warmth. Compacted, capped landfills keep trash dry and oxygen-poor, so breakdown is slow and mostly anaerobic, producing methane. Decomposers do not need sunlight, and food and paper are buried along with everything else.'
          },
          {
            question: 'A region with no sewage treatment has repeated outbreaks of a bacterial disease spread through drinking water. Which disease is most likely?',
            options: [
              'Cholera',
              'Malaria',
              'Mesothelioma',
              'Tuberculosis'
            ],
            correctAnswer: 0,
            explanation: 'Cholera is a bacterial disease contracted from contaminated water. Malaria spreads by mosquito bites, tuberculosis by breathing in bacteria, and mesothelioma is a cancer caused by asbestos.'
          }
        ]
      }
    },
    {
      id: 'apeswate5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Primary treatment | Screens and settling remove large objects and solids |
| Secondary treatment | Aerated tanks of bacteria break down organic matter |
| Tertiary treatment | Removes leftover pollutants, especially N and P |
| Disinfection | Chlorine, ozone or UV light kills pathogens |
| Sanitary landfill | Liner, leachate and storm water collection, methane collection, cap |
| Incineration | Shrinks volume and can make electricity; releases air pollutants and toxic ash |
| E-waste | Lead and cadmium can leach into groundwater |
| Reduce, reuse, recycle, compost | Reducing saves the most; recycling and composting divert waste |
| Health links | Dysentery from sewage; mesothelioma from asbestos; lung damage from ozone |
| Pathogens | Spread by poverty and poor sanitation, and by warming that expands vector ranges |

**Next:** Part 6 puts Parts 2–5 together in AP-style free-response and multiple-choice practice.
      `
    }
  ]
};
