export const apesEnergyPart1Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesen1-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 1 of 7 — Energy Sources, Efficiency, and Environmental Impact**

---

## Global Energy Mix

| Source | Share of Global Energy | Type |
|--------|----------------------|------|
| **Oil (petroleum)** | ~31% | Non-renewable fossil fuel |
| **Coal** | ~27% | Non-renewable fossil fuel |
| **Natural gas** | ~24% | Non-renewable fossil fuel |
| **Hydroelectric** | ~7% | Renewable |
| **Nuclear** | ~4% | Non-renewable (but low carbon) |
| **Wind/Solar/Other renewables** | ~7% | Renewable |

> 🔑 **Fossil fuels provide ~82% of global energy.** Transitioning to renewables is essential for reducing greenhouse gas emissions.

---

## Energy Concepts

| Concept | Definition |
|---------|-----------|
| **Energy efficiency** | Percentage of energy input that does useful work (not lost as heat) |
| **First Law of Thermodynamics** | Energy cannot be created or destroyed, only transformed |
| **Second Law of Thermodynamics** | Every energy transformation increases entropy (disorder); some energy always lost as heat |
| **Net energy** | Total energy output minus energy input to produce it |
| **EROI** | Energy Return on Investment: energy output / energy input |

### Energy Efficiency Examples

| System | Approximate Efficiency |
|--------|----------------------|
| Incandescent bulb | ~5% (95% lost as heat) |
| LED bulb | ~20-30% |
| Gasoline car engine | ~20-25% |
| Electric vehicle | ~85-90% |
| Natural gas power plant | ~40-60% |
| Coal power plant | ~33-40% |
      `
    },
    {
      id: 'apesen1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Second Law of Thermodynamics states that:',
            options: [
              'Energy can be created from nothing',
              'Every energy transformation loses some energy as waste heat',
              'Energy efficiency can reach 100%',
              'Entropy decreases with each energy transfer'
            ],
            correctAnswer: 1,
            explanation: 'The Second Law states that every energy transformation increases entropy — some useful energy is always converted to waste heat, making 100% efficiency impossible.'
          },
          {
            question: 'Approximately what percentage of global energy comes from fossil fuels?',
            options: [
              'About 50%',
              'About 65%',
              'About 82%',
              'About 95%'
            ],
            correctAnswer: 2,
            explanation: 'Oil (~31%) + coal (~27%) + natural gas (~24%) = ~82% of global energy comes from fossil fuels, making the energy transition one of the biggest environmental challenges.'
          }
        ]
      }
    },
    {
      id: 'apesen1-content',
      type: 'text' as const,
      content: `
## Cogeneration and Energy Conservation

| Strategy | Description | Benefit |
|----------|-----------|---------|
| **Cogeneration (CHP)** | Using waste heat from electricity generation for heating | Increases overall efficiency to 80%+ |
| **Energy Star appliances** | Certified high-efficiency devices | Reduce household energy use 10-50% |
| **Building insulation** | Reducing heat loss through walls, windows, roofs | Reduces heating/cooling energy needs |
| **Smart grid** | Digital technology managing electricity distribution | Reduces waste, integrates renewables |

## Carbon Footprint

- Total greenhouse gas emissions from an individual, organization, or activity
- Measured in tons of $CO_{2}$ equivalent $(CO_{2}e)$ per year
- Average American: ~16 tons $CO_{2}e/year$ (global average: ~4.5 tons)
- Largest contributions: transportation, home energy, food

## Environmental Justice and Energy
- Low-income communities and communities of color disproportionately bear pollution from power plants and refineries
- This intersection of social justice and environmental impact is called **environmental justice**
- Clean energy transition can help address these inequities
      `
    },
    {
      id: 'apesen1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The three fossil fuels are oil (petroleum), coal, and natural _______.

2) Using waste heat from electricity generation for building heating is called _______ (or combined heat and power).

3) The total greenhouse gas emissions of an individual or organization measured in tons of $CO_{2}$ equivalent is called a carbon _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['gas', 'cogeneration', 'footprint'],
        hint1: 'The cleanest-burning fossil fuel.',
        hint2: 'CHP = Combined Heat and Power.',
        hint3: 'The impact you leave on the climate.',
        explanation: 'Natural gas = third fossil fuel. Cogeneration = using waste heat. Carbon footprint = total GHG emissions.'
      }
    },
    {
      id: 'apesen1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concept** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'An incandescent bulb converts only ~5% of electricity to light. The rest is lost as heat. This illustrates ___',
            options: ['Low energy efficiency and the Second Law of Thermodynamics', 'High energy efficiency', 'The First Law of Thermodynamics only', 'Cogeneration']
          },
          {
            label: 'A coal plant near a low-income neighborhood causing disproportionate health impacts is an example of ___',
            options: ['An environmental justice issue', 'Normal market economics', 'Energy efficiency', 'Net energy gain']
          },
          {
            label: 'EROI (Energy Return on Investment) measures ___',
            options: ['How much energy you get out compared to how much you put in', 'The financial cost of energy', 'The pollution per unit of energy', 'The efficiency of light bulbs']
          }
        ],
        correctAnswers: ['Low energy efficiency and the Second Law of Thermodynamics', 'An environmental justice issue', 'How much energy you get out compared to how much you put in'],
        hint1: '95% waste heat = very inefficient.',
        hint2: 'Pollution burden falls on vulnerable communities.',
        hint3: 'Output divided by input.',
        explanation: '5% efficiency = low (2nd Law). Disproportionate pollution = environmental justice. EROI = energy out / energy in.'
      }
    },
    {
      id: 'apesen1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Energy

- Know the **global energy mix** — fossil fuels dominate at ~82%
- Understand energy efficiency and be able to calculate it (useful output / total input x 100)
- The **Second Law of Thermodynamics** explains why 100% efficiency is impossible
- **Cogeneration** is the classic example of improving efficiency
- Know EROI: high EROI = efficient energy source. Oil used to have EROI of 100:1, now closer to 10:1
- Environmental justice questions are increasingly common on the AP exam
      `
    },
    {
      id: 'apesen1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Replacing all incandescent bulbs in a building with LEDs would:',
            options: [
              'Increase energy use because LEDs cost more',
              'Reduce energy use by 75-80% for lighting while providing the same light output',
              'Have no effect on energy consumption',
              'Eliminate all electricity needs for the building'
            ],
            correctAnswer: 1,
            explanation: 'LEDs are 20-30% efficient vs. 5% for incandescent bulbs. For the same light output, LEDs use roughly 75-80% less electricity, significantly reducing energy demand and costs.'
          },
          {
            question: 'The most effective way to reduce total energy consumption in the United States would be:',
            options: [
              'Building more coal power plants',
              'Increasing energy efficiency in transportation and buildings',
              'Increasing oil drilling in new locations',
              'Extending daylight saving time'
            ],
            correctAnswer: 1,
            explanation: 'Energy efficiency is the cheapest, fastest way to reduce consumption. Improving vehicle fuel economy, building insulation, and appliance efficiency can dramatically reduce demand without reducing quality of life.'
          }
        ]
      }
    }
  ]
};
