export const apesFossilFuelsNuclearPart2Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfoss2-intro',
      type: 'text' as const,
      content: `
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 2 of 7 — Coal and How a Power Plant Makes Electricity**

---

| Section |
|---------|
| 📖 From Wood to Anthracite: Solid Fuels |
| Combustion: What Burning Produces |
| Inside a Thermal Power Plant |
| Efficiency and Fuel Calculations |
| Energy Units |

> 🔑 **Key Concept:** Part 1 covered how fossil fuels form and how they are extracted. This part follows coal from the ground to the wall socket: the grades of solid fuel (CED 6.3), the combustion reaction, the steam-turbine power plant (CED 6.5), and the calculations that link a tonne of coal to the electricity it produces.
      `
    },
    {
      id: 'apesfoss2-fuels',
      type: 'text' as const,
      content: `
## 📖 From Wood to Anthracite: Solid Fuels

### Wood, charcoal and peat

- **Wood** is burned as firewood or as **charcoal** (wood heated with little oxygen, leaving nearly pure carbon). It is widely used for cooking and heating in developing countries because it is easy to obtain. Heavy demand contributes to deforestation, and indoor burning causes serious indoor air pollution.
- **Peat** is partially decomposed plant matter from waterlogged bogs. It can be dried and burned. Peat is the first step on the path to coal.

### The grades of coal

With deeper burial over millions of years, heat and pressure drive out water and other compounds, concentrating the carbon. The deeper and longer the burial, the higher the grade.

| Fuel | Carbon content (approximate) | Energy content (approximate) | Notes |
|---|---|---|---|
| Peat | Lowest | Lowest | Not yet coal; high moisture |
| **Lignite** (brown coal) | About 25–35% | About 15 MJ/kg | Soft, crumbly, high moisture; burned near the mine |
| Sub-bituminous | About 35–45% | About 20 MJ/kg | Common in U.S. power plants; often low in sulfur |
| **Bituminous** | About 45–85% | About 27 MJ/kg | Most widely used grade worldwide; often higher in sulfur; used for electricity and steelmaking coke |
| **Anthracite** | About 86–97% | About 30 MJ/kg | Hard, shiny, burns hottest and cleanest; the rarest |

The CED names three grades: **lignite, bituminous and anthracite**. Higher grade means more carbon and more energy per kilogram, so less coal is burned for the same energy.

Sulfur content does not follow grade neatly. It depends on the original swamp environment, and high-sulfur coal releases more $SO_{2}$, the main cause of acid deposition from power plants.
      `
    },
    {
      id: 'apesfoss2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does anthracite release more energy per kilogram than lignite?',
            options: [
              'It has a higher share of carbon and far less water',
              'It formed more recently, so less of its energy has leaked away',
              'It contains more sulfur, which releases extra energy as it burns',
              'It is mined at the surface, where it absorbs more sunlight'
            ],
            correctAnswer: 0,
            explanation: 'Longer, deeper burial drives out water and volatile compounds and concentrates carbon, so each kilogram of anthracite holds more combustible carbon. Anthracite is older, not younger, than lignite.'
          },
          {
            question: 'A rural family cooks with charcoal made from nearby trees. Which pair of impacts is most closely tied to this fuel?',
            options: [
              'Deforestation and indoor air pollution',
              'Acid mine drainage and land subsidence',
              'Oil spills and harm to marine habitats',
              'Radioactive waste and thermal pollution'
            ],
            correctAnswer: 0,
            explanation: 'Charcoal production removes trees, and burning it indoors releases particulate matter and carbon monoxide that harm health. The other pairs belong to coal mining, oil and nuclear power.'
          }
        ]
      }
    },
    {
      id: 'apesfoss2-plant',
      type: 'text' as const,
      content: `
## Combustion: What Burning Produces

**Combustion** is a chemical reaction between a fuel and oxygen that releases energy and yields carbon dioxide and water (CED 6.5). For methane, the main component of natural gas:

$$CH_{4} + 2O_{2} \\rightarrow CO_{2} + 2H_{2}O + \\text{energy}$$

For the carbon in coal: $C + O_{2} \\rightarrow CO_{2}$. Every 12 g of carbon burned becomes 44 g of $CO_{2}$, because each carbon atom picks up two oxygen atoms (the Biogeochemical Cycles lessons use the same 44/12 conversion).

Real fuels are not pure, so burning coal also releases sulfur dioxide, nitrogen oxides, particulate matter, mercury and other metals, and leaves behind **coal ash**, which is stored in ponds or landfills and can leak metals such as arsenic into water.

## Inside a Thermal Power Plant

Coal, oil, natural gas and nuclear plants all make electricity the same basic way. Only the heat source differs.

1. **Heat source:** pulverized coal is burned in a boiler.
2. **Boiler:** the heat turns water into high-pressure steam.
3. **Turbine:** the steam pushes against the turbine blades and spins the turbine shaft.
4. **Generator:** the spinning shaft turns a magnet inside coils of wire, which produces electricity.
5. **Condenser:** the used steam is cooled back into water by cooling water drawn from a river, lake or cooling tower, and the water returns to the boiler.
6. **Transmission:** transformers raise the voltage and power lines carry the electricity to users.

### Where the energy goes

A typical coal plant converts only about **one-third** of the fuel's chemical energy into electricity. Most of the rest leaves as **waste heat**, mainly through the condenser's cooling water and the smokestack. This is the second law of thermodynamics at work: every conversion loses some energy as heat.

Warm water returned to a river is **thermal pollution**: warmer water holds less dissolved oxygen. **Cogeneration** plants capture some of that waste heat for heating buildings or industrial processes, which raises the overall efficiency.

> 🔑 **AP Connection:** The CED's chain is **fuel burned → water heated → steam → turbine → generator → electricity**. Questions about any thermal plant, including nuclear, expect this sequence.
      `
    },
    {
      id: 'apesfoss2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Trace the Power Plant** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The part of the plant where a spinning magnet inside coils of wire produces electricity is the ___',
            options: ['generator', 'turbine', 'boiler', 'condenser']
          },
          {
            label: 'Most of the energy lost in a coal power plant leaves the plant as ___',
            options: ['waste heat', 'unburned coal', 'electric sparks', 'spent steam pressure']
          },
          {
            label: 'Cooling water returned warm to a river lowers the river\'s dissolved oxygen. This is ___',
            options: ['thermal pollution', 'acid deposition', 'eutrophication', 'saltwater intrusion']
          }
        ],
        correctAnswers: ['generator', 'waste heat', 'thermal pollution'],
        hint1: 'The turbine spins; another device turns that motion into electricity.',
        hint2: 'Think about the second law of thermodynamics.',
        hint3: 'The pollutant here is heat itself.',
        explanation: 'The generator converts the turbine\'s rotation into electricity. About two-thirds of the fuel energy leaves as waste heat. Warm discharge water that lowers oxygen is thermal pollution.'
      }
    },
    {
      id: 'apesfoss2-calcs',
      type: 'text' as const,
      content: `
## Efficiency and Fuel Calculations

$$\\text{Efficiency} = \\frac{\\text{useful energy out}}{\\text{energy in}} \\times 100$$

### Worked Example 1: Efficiency Chain

A coal plant is **35%** efficient, the power lines deliver **95%** of what they carry, and an LED bulb turns **40%** of its electricity into light. What share of the coal's energy becomes light?

$$0.35 \\times 0.95 \\times 0.40 = 0.133 \\approx 13\\%$$

Multiply the efficiencies of each step, as decimals. The overall efficiency is always lower than the worst single step.

### Worked Example 2: Coal Needed for 1 kWh (illustrative data)

One kilowatt-hour is **3.6 MJ** of electrical energy. A plant is **33%** efficient and burns bituminous coal with **27 MJ/kg**.

**Step 1.** Heat needed: $\\dfrac{3.6\\ \\text{MJ}}{0.33} \\approx 10.9\\ \\text{MJ}$

**Step 2.** Coal needed: $\\dfrac{10.9\\ \\text{MJ}}{27\\ \\text{MJ/kg}} \\approx 0.40\\ \\text{kg}$

So each kilowatt-hour takes about 0.4 kg of coal.

### Worked Example 3: Coal for a Year (illustrative data)

A **500 MW** plant runs at full output all year (8,760 hours).

$$500\\ \\text{MW} \\times 8{,}760\\ \\text{h} = 4{,}380{,}000\\ \\text{MWh} = 4.38 \\times 10^{9}\\ \\text{kWh}$$
$$4.38 \\times 10^{9}\\ \\text{kWh} \\times 0.40\\ \\text{kg/kWh} \\approx 1.75 \\times 10^{9}\\ \\text{kg} = 1.75 \\times 10^{6}\\ \\text{t}$$

That is about 1.75 million tonnes of coal, roughly 17,500 rail cars carrying 100 t each.

## Energy Units

| Unit | Size | Typical use |
|---|---|---|
| Joule (J), megajoule (MJ) | 1 MJ = $10^{6}$ J | Energy content of fuels |
| Kilowatt-hour (kWh) | 1 kWh = 3.6 MJ = about 3,412 BTU | Household electricity bills |
| British thermal unit (BTU) | Heat to warm 1 pound of water by 1 °F | U.S. fuel and heating data |
| Watt (W) | 1 W = 1 J per second | **Power**: the rate of energy use, not an amount |

A watt is a **rate**. Energy is power × time: a 10 W bulb on for 100 hours uses $10 \\times 100 = 1{,}000$ Wh = 1 kWh.
      `
    },
    {
      id: 'apesfoss2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A gas plant is 50% efficient, transmission delivers 90%, and a motor is 80% efficient. What percent of the fuel's energy becomes motor work?

2) A home uses 900 kWh of electricity in a month. Using 1 kWh = 3,412 BTU, how many BTU is that? (Write the whole number.)

3) A plant that is 30% efficient burns lignite at 15 MJ/kg. How many kilograms of lignite does it burn for each 1 kWh (3.6 MJ)? Give your answer to one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['36', '3070800', '0.8'],
        hint1: 'Multiply the decimals: 0.50 × 0.90 × 0.80, then convert to a percent.',
        hint2: '900 × 3,412.',
        hint3: 'Heat needed = 3.6 ÷ 0.30 = 12 MJ. Then divide by 15 MJ/kg.',
        explanation: '1) 0.50 × 0.90 × 0.80 = 0.36 = 36 percent. 2) 900 × 3,412 = 3,070,800 BTU, about 3.07 × 10^6 BTU. 3) 12 MJ ÷ 15 MJ/kg = 0.8 kg of lignite, twice the 0.4 kg of bituminous coal in the worked example.'
      }
    },
    {
      id: 'apesfoss2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A utility switches a plant from bituminous coal (27 MJ/kg) to lignite (15 MJ/kg) without changing its electricity output. What happens to the mass of fuel burned?',
            options: [
              'It rises by about 80 percent',
              'It falls by about 44 percent',
              'It rises by about 44 percent',
              'It stays the same'
            ],
            correctAnswer: 0,
            explanation: 'The same heat requires 27 ÷ 15 = 1.8 times as much lignite, an 80 percent increase. A 44 percent figure comes from (27 − 15) ÷ 27, which uses the wrong base and direction.'
          },
          {
            question: 'Why are most coal and nuclear power plants built beside rivers, lakes or the sea?',
            options: [
              'Condensing the used steam takes a lot of water',
              'They burn water as part of the fuel mixture',
              'They need water currents to spin their turbines',
              'They ship all of their electricity out by boat'
            ],
            correctAnswer: 0,
            explanation: 'The condenser uses large volumes of cooling water to turn spent steam back into liquid so it can be reused in the boiler. The steam, not flowing water, spins the turbine.'
          },
          {
            question: 'A 1,000 MW coal plant is 33 percent efficient. At what rate does it release waste heat while running at full output?',
            options: [
              'About 2,000 MW',
              'About 670 MW',
              'About 330 MW',
              'About 3,000 MW'
            ],
            correctAnswer: 0,
            explanation: 'Fuel input is 1,000 ÷ 0.33 ≈ 3,000 MW, of which 1,000 MW becomes electricity, so about 2,000 MW leaves as waste heat. The 3,000 MW figure is the total input, not the loss.'
          }
        ]
      }
    },
    {
      id: 'apesfoss2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Solid fuels | Wood and charcoal (developing countries), peat, then lignite → bituminous → anthracite |
| Coal grade | Deeper, longer burial → more carbon, less water, more energy per kg |
| Combustion | Fuel + $O_{2}$ → $CO_{2}$ + $H_{2}O$ + energy; coal also releases $SO_{2}$, $NO_{x}$, PM, mercury, ash |
| Power plant | Heat → steam → turbine → generator → electricity; condenser needs cooling water |
| Efficiency | About one-third for coal; multiply step efficiencies; waste heat → thermal pollution |
| Units | 1 kWh = 3.6 MJ ≈ 3,412 BTU; watts are a rate, watt-hours are an amount |

**Next:** Part 3 turns to liquid and gaseous fuels: refining crude oil, tar sands, fracking and the natural-gas trade-off.
      `
    }
  ]
};
