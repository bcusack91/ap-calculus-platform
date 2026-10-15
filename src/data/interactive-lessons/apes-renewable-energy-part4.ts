export const apesRenewableEnergyPart4Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene4-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 4 of 7 — Wind, Biomass and Hydrogen Fuel Cells**

---

| Section |
|---------|
| 💨 How a Wind Turbine Works |
| Where to Build Wind Farms |
| 🌽 Biomass and Biofuels |
| Is Biomass Carbon-Neutral? |
| ⚡ Hydrogen Fuel Cells |
| Worked Example: Wind Speed, Ethanol and Hydrogen |

> 🔑 **Key Concept:** This part covers the last three renewable sources in the CED: wind (6.12), biomass (6.7) and hydrogen fuel cells (6.11). Wind and hydrogen produce no air pollution where the electricity is made, but biomass releases pollutants when burned, and hydrogen is only as clean as the energy used to make it.
      `
    },
    {
      id: 'apesrene4-wind',
      type: 'text' as const,
      content: `
## 💨 How a Wind Turbine Works

1. Moving air (kinetic energy) pushes on the **blades**, turning the **rotor**.
2. The rotor turns a shaft inside the **nacelle**, the housing at the top of the tower.
3. In many turbines a **gearbox** speeds up the slow rotation.
4. A **generator** converts the mechanical energy of the spinning shaft into electricity.
5. Cables carry the electricity down the **tower** to the grid.

A turbine starts producing at a modest wind speed and shuts down in very strong winds to avoid damage. A group of turbines connected to the grid is a **wind farm**.

### Why wind speed matters so much

The power in the wind rises with the **cube** of wind speed:

$$\\text{Power} \\propto v^{3}$$

Doubling the wind speed gives $2^{3} = 8$ times as much power. Halving it leaves only $\\left(\\tfrac{1}{2}\\right)^{3} = \\tfrac{1}{8}$ of the power. Small differences in average wind speed therefore make large differences in output, which is why siting is critical. Winds are also faster and steadier higher above the ground, so modern turbines stand on very tall towers.

## Where to Build Wind Farms

| Setting | Advantages | Disadvantages |
|---|---|---|
| **Onshore: open plains and ridges** | Cheaper to build and maintain; land between turbines can still be farmed or grazed | Visual and noise complaints; roads fragment habitat |
| **Offshore: shallow coastal water** | Stronger, steadier winds over the sea; farther from homes | More expensive to build and connect; disturbs the seabed and marine life during construction |

**Birds and bats:** The CED names this impact directly: birds and bats can be killed when they fly into spinning blades. Developers reduce deaths by avoiding migration routes and raptor habitat, and by stopping turbines during low-wind nights when bats are most active.
      `
    },
    {
      id: 'apesrene4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The average wind speed at Site X is twice that at Site Y. Compared with an identical turbine at Site Y, about how much power can a turbine at Site X produce?',
            options: [
              'Eight times as much',
              'Twice as much',
              'Four times as much',
              'Sixteen times as much'
            ],
            correctAnswer: 0,
            explanation: 'Wind power rises with the cube of wind speed, so doubling the speed gives 2 × 2 × 2 = 8 times the power. Four times as much would follow from squaring the speed, and twice as much from a straight-line relationship.'
          },
          {
            question: 'Why are many new wind farms built in shallow coastal waters despite their higher construction costs?',
            options: [
              'Seawater cools the generators so they convert energy more efficiently',
              'Turbines placed in the sea cause no harm to birds, bats or fish',
              'Winds over the sea are stronger and steadier than winds over land',
              'Salt spray smooths the blades, which lets them spin faster in calm air'
            ],
            correctAnswer: 2,
            explanation: 'Open water has little friction from trees, hills or buildings, so winds there are faster and more consistent, and output rises steeply with speed. Turbines at sea still affect birds and marine life, especially during construction.'
          },
          {
            question: 'Two ridge-top sites have similar wind speeds, but Site B lies on a major hawk and eagle migration route. Which consideration most favors building at Site A?',
            options: [
              'Less heat released into nearby streams from cooling water',
              'Fewer bird deaths from collisions with the spinning blades',
              'Lower sulfur dioxide emissions from backup generators',
              'Less methane from vegetation the project would flood'
            ],
            correctAnswer: 1,
            explanation: 'Birds of prey migrating along a ridge are at high risk of striking turbine blades, so a site off the route reduces deaths. Wind turbines use no cooling water and flood no land, so those concerns do not separate the sites.'
          }
        ]
      }
    },
    {
      id: 'apesrene4-biomass',
      type: 'text' as const,
      content: `
## 🌽 Biomass and Biofuels

**Biomass** is organic matter from recently living things, burned directly for heat or converted into fuels.

| Biomass fuel | Source and use |
|---|---|
| **Wood** | Burned for cooking and heating; still the main household fuel in many developing countries |
| **Charcoal** | Wood heated with little oxygen; burns hotter and cleaner than wood, but making it wastes much of the wood's energy |
| **Dried animal manure** | Burned for cooking where wood is scarce |
| **Ethanol** | An alcohol made by yeast fermenting the sugars in corn (United States) or sugarcane (Brazil); blended with gasoline, as in E10 (10% ethanol) |
| **Biodiesel** | Made from vegetable oils such as soybean or palm oil, or from used cooking oil; replaces diesel fuel |

### Impacts of burning biomass

The CED notes that burning biomass produces heat at a relatively low cost but releases **carbon dioxide, carbon monoxide, nitrogen oxides, particulates and volatile organic compounds**.

- **Indoor air pollution:** Cooking over open fires indoors exposes families, especially women and children, to smoke. The World Health Organization attributes millions of premature deaths each year to household air pollution.
- **Deforestation:** Cutting trees for fuelwood and charcoal faster than they regrow strips forests, which leads to soil erosion and habitat loss.
- **Land, water and fertilizer:** Corn grown for ethanol competes with food crops for farmland, and its fertilizer runoff adds to nutrient pollution. Palm oil plantations for biodiesel have replaced tropical rain forest.
- **Low net energy:** Growing, fertilizing, harvesting and distilling corn uses a lot of energy, so corn ethanol returns only a little more energy than it took to make. (Net energy is covered in the Energy topic.) Ethanol also holds only about two-thirds as much energy per liter as gasoline, so a car travels fewer kilometers on a liter of it.

## Is Biomass Carbon-Neutral?

The argument **for**: the carbon released when biomass burns was absorbed from the air by the plants only recently. If new plants regrow and absorb the same amount, burning ethanol adds no **new** carbon to the atmosphere through combustion, unlike fossil fuels, which release carbon stored underground for millions of years.

The argument **against** a simple "neutral" label:

- Tractors, fertilizer production, transport and distilleries burn fossil fuels.
- A forest cut for fuel takes decades to regrow and reabsorb its carbon.
- Clearing forest or grassland to plant fuel crops releases the carbon stored in the plants and soil.

**Bottom line for the exam:** biomass is renewable if it is harvested no faster than it regrows, and its combustion carbon is recycled, but its full life cycle still adds greenhouse gases.
      `
    },
    {
      id: 'apesrene4-hydrogen',
      type: 'text' as const,
      content: `
## ⚡ Hydrogen Fuel Cells

A **fuel cell** combines hydrogen fuel with oxygen from the air to produce electricity. No combustion occurs, and the only product besides electricity and heat is water:

$$2H_{2} + O_{2} \\rightarrow 2H_{2}O + \\text{electricity} + \\text{heat}$$

**Inside the cell:** at one electrode, hydrogen molecules are split into protons and electrons. The protons pass through a membrane; the electrons cannot, so they travel through an outside circuit as electric current. At the other electrode the protons, electrons and oxygen combine to form water.

### Hydrogen is an energy carrier, not a source

There are no large natural deposits of hydrogen gas to tap. It must be **made**, and making it takes energy:

| Method | Reaction | Carbon dioxide released? |
|---|---|---|
| **Electrolysis** | Electricity splits water: $2H_{2}O \\rightarrow 2H_{2} + O_{2}$ | None if the electricity comes from wind, solar or hydro; a lot if it comes from coal |
| **Steam methane reforming** | Natural gas reacts with steam: $CH_{4} + 2H_{2}O \\rightarrow CO_{2} + 4H_{2}$ (overall) | Yes; this is how most hydrogen is produced today |

| Advantages | Disadvantages |
|---|---|
| Only water is emitted where the fuel cell is used | Energy is needed to make the hydrogen, and some is lost at every step |
| No $CO_{2}$ if the hydrogen is made from water with renewable electricity | Fuel cells and hydrogen are still expensive |
| Fuel cells are quiet and more efficient than gasoline engines | Hydrogen is a low-density gas that must be stored under high pressure or very cold |
| Useful for buses, trucks and backup power | Few hydrogen fueling stations exist |
      `
    },
    {
      id: 'apesrene4-worked',
      type: 'text' as const,
      content: `
## Worked Example: Wind Speed, Ethanol and Hydrogen (illustrative data)

**A. Wind speed and power.** A turbine produces 400 kW when the wind blows at 6 m/s. Estimate its output at 9 m/s and at 3 m/s (assume both are within its operating range).

$$400\\ \\text{kW} \\times \\left(\\frac{9}{6}\\right)^{3} = 400 \\times 3.375 = 1{,}350\\ \\text{kW}$$
$$400\\ \\text{kW} \\times \\left(\\frac{3}{6}\\right)^{3} = 400 \\times 0.125 = 50\\ \\text{kW}$$

A 50% increase in wind speed more than triples the power.

**B. Wind farm output.** 40 turbines rated at 2.5 MW each run at a 35% capacity factor.

$$40 \\times 2.5\\ \\text{MW} = 100\\ \\text{MW}$$
$$100\\ \\text{MW} \\times 8{,}760\\ \\text{h} \\times 0.35 = 306{,}600\\ \\text{MWh per year}$$

**C. Ethanol from a hectare of corn.** A hectare yields 10 tonnes of corn, and each tonne makes 400 L of ethanol. Ethanol holds 21 MJ per liter and gasoline 32 MJ per liter.

$$10\\ \\text{t} \\times 400\\ \\text{L/t} = 4{,}000\\ \\text{L of ethanol}$$
$$4{,}000\\ \\text{L} \\times 21\\ \\text{MJ/L} = 84{,}000\\ \\text{MJ} = 8.4 \\times 10^{4}\\ \\text{MJ}$$
$$\\text{Gasoline with the same energy: } \\frac{84{,}000\\ \\text{MJ}}{32\\ \\text{MJ/L}} \\approx 2{,}600\\ \\text{L}$$

So 4,000 L of ethanol replaces only about 2,600 L of gasoline.

**D. Hydrogen efficiency.** Electrolysis uses 55 kWh of electricity to make 1 kg of hydrogen. The kilogram holds 33 kWh of chemical energy, and a fuel cell turns it into 16.5 kWh of electricity.

$$\\text{Fuel cell efficiency} = \\frac{16.5}{33} \\times 100 = 50\\%$$
$$\\text{Overall, electricity in to electricity out} = \\frac{16.5}{55} \\times 100 = 30\\%$$

Seventy percent of the original electricity is lost as heat along the way, which is the cost of using hydrogen as a carrier.
      `
    },
    {
      id: 'apesrene4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

(Illustrative data.) Enter numbers only.

1) A turbine produces 200 kW at a wind speed of 5 m/s. Using the cube relationship, how many kW does it produce at 10 m/s?

2) How many liters of ethanol (21 MJ/L) hold the same energy as 42 L of gasoline (32 MJ/L)?

3) A fuel cell receives hydrogen holding 40 kWh of chemical energy and delivers 22 kWh of electricity. What is its efficiency, in percent?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1600', '64', '55'],
        hint1: 'The speed doubled, so multiply the power by 2³ = 8.',
        hint2: 'Find the gasoline energy (42 × 32 MJ), then divide by 21 MJ per liter.',
        hint3: 'Useful output ÷ input × 100.',
        explanation: '1) 200 kW × 8 = 1,600 kW. 2) 42 L × 32 MJ/L = 1,344 MJ, and 1,344 ÷ 21 = 64 L of ethanol. 3) 22 ÷ 40 × 100 = 55 percent.'
      }
    },
    {
      id: 'apesrene4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Families in a rural region cook over open wood fires inside their homes. Which health problem is most directly linked to this practice?',
            options: [
              'Skin cancer from ultraviolet light given off by the flames',
              'Lung disease from inhaled smoke particulates and carbon monoxide',
              'Mercury poisoning from metals the wood absorbed from the soil',
              'Waterborne disease from wood ash washing into drinking wells'
            ],
            correctAnswer: 1,
            explanation: 'Burning wood releases particulates and carbon monoxide, and in a poorly ventilated home these cause respiratory disease. Wood fires give off little ultraviolet light and release far less mercury than coal.'
          },
          {
            question: 'Which statement best explains why corn ethanol is NOT fully carbon-neutral?',
            options: [
              'Burning ethanol releases more carbon than the corn absorbed',
              'Ethanol releases carbon stored underground for millions of years',
              'Each ethanol molecule contains more carbon than gasoline does',
              'Fossil fuels power the farming, fertilizer and distilling steps'
            ],
            correctAnswer: 3,
            explanation: 'The carbon released when ethanol burns was recently absorbed by the corn, but tractors, fertilizer plants and distilleries burn fossil fuels. Ethanol has two carbon atoms per molecule, fewer than the main molecules in gasoline.'
          },
          {
            question: 'A city replaces diesel buses with hydrogen fuel cell buses. Under which condition would the switch cut carbon dioxide emissions the most?',
            options: [
              'The hydrogen is made from natural gas by steam reforming',
              'The hydrogen is made by electrolysis using wind power',
              'The hydrogen is made by electrolysis using a coal plant',
              'The hydrogen is burned in engines instead of fuel cells'
            ],
            correctAnswer: 1,
            explanation: 'Electrolysis powered by wind splits water with no fossil fuel, so the whole chain releases almost no carbon dioxide. Steam reforming releases carbon dioxide from natural gas, and coal-powered electrolysis shifts the emissions to the power plant.'
          },
          {
            question: 'Besides electricity and heat, what does a hydrogen fuel cell produce?',
            options: [
              'Water',
              'Carbon dioxide',
              'Ozone gas',
              'Nitrogen oxides'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen combines with oxygen to form water, and no combustion takes place, so no carbon dioxide or nitrogen oxides are produced. That is why the CED describes water as the only emission of a fuel cell.'
          }
        ]
      }
    },
    {
      id: 'apesrene4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Wind turbine | Wind spins blades and rotor; generator in the nacelle makes electricity |
| Cube law | Power ∝ v³: double the speed, eight times the power |
| Wind impacts | Bird and bat deaths, noise, visual impact; offshore costs more but has steadier wind |
| Biomass fuels | Wood, charcoal, manure, ethanol (corn, sugarcane), biodiesel |
| Biomass pollutants | $CO_{2}$, CO, $NO_{x}$, particulates, VOCs; indoor air pollution; deforestation |
| Carbon-neutral? | Combustion carbon is recent, but farming and processing burn fossil fuels |
| Fuel cell | $2H_{2} + O_{2} \\rightarrow 2H_{2}O$ + electricity; water is the only emission |
| Making hydrogen | Electrolysis (clean only with clean power) or steam methane reforming (releases $CO_{2}$) |

**Next:** Part 5 tackles the biggest practical problem for solar and wind, intermittency, and the storage and grid tools that solve it.
      `
    }
  ]
};
