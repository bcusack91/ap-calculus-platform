export const apesEnergyPart7Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener7-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| One Kilowatt-Hour Saved, Traced Back to the Fuel |
| Calculations in This Topic |
| Final Review Questions |

## 📖 The Topic on One Page

| Idea | Big idea | Where you learned it |
|---|---|---|
| Global energy mix | Fossil fuels supply about four-fifths of world energy | Part 1 |
| Thermodynamics and efficiency | Energy is conserved (first law), but every conversion loses some as heat (second law) | Parts 1, 3, 4 |
| 6.1 Renewable vs nonrenewable | Fixed supplies vs resources replenished on a human time scale; biomass is depletable if overused | Part 2 |
| 6.2 Global energy consumption | Use is uneven between developed and developing countries; fossil fuel use rises with development; availability, price and regulation drive fuel choice | Part 2 |
| 6.4 Distribution of resources | Fossil fuels follow geologic history; renewables follow geography and climate | Part 2 |
| Net energy and EROI | Energy out ÷ energy in; falls as easy deposits run out; corn ethanol is near break-even | Part 3 |
| Cogeneration | Captures power-plant waste heat for buildings or industry | Parts 1, 3 |
| Reading energy data | Quads, flow diagrams, rejected energy, percent vs percentage points | Part 4 |
| 6.13 Energy conservation | Thermostats, insulation, efficient appliances, water conservation; fuel economy, hybrids, BEVs, transit, green building | Part 5 |
| Carbon footprint and environmental justice | Pollution and energy burden fall hardest on low-income communities | Parts 1, 5 |

How each source works, and its pollution, is covered in the Fossil Fuels & Nuclear Energy and Renewable Energy lessons.
      `
    },
    {
      id: 'apesener7-trace',
      type: 'text' as const,
      content: `
## One Kilowatt-Hour Saved, Traced Back to the Fuel

The topic's ideas connect in one chain: **a unit of energy saved at the meter saves several units of fuel at the source.**

### Worked Example: A Town Conserves (illustrative data)

A town has **20,000 households**, each using **10,000 kWh** of electricity a year. Its electricity comes from fossil-fuel plants that are **36% efficient** overall, after transmission losses, and the grid emits **0.45 kg $CO_{2}$ per kWh** delivered. A conservation program (LEDs, thermostat setbacks, insulation) cuts household electricity use by **20%**.

**Step 1. Electricity saved per household:** $0.20 \\times 10{,}000 = 2{,}000$ kWh

**Step 2. Fuel energy saved at the plant per household:**
$$\\frac{2{,}000\\ \\text{kWh}}{0.36} \\approx 5{,}560\\ \\text{kWh of fuel energy}$$
Each kWh saved at home avoids burning almost **3 kWh** worth of fuel, because about two-thirds of the fuel's energy would have become waste heat (second law).

**Step 3. Town-wide electricity saved:**
$$2{,}000 \\times 20{,}000 = 4.0 \\times 10^{7}\\ \\text{kWh} = 40\\ \\text{GWh}$$

**Step 4. $CO_{2}$ avoided:**
$$4.0 \\times 10^{7}\\ \\text{kWh} \\times 0.45\\ \\text{kg/kWh} = 1.8 \\times 10^{7}\\ \\text{kg} = 18{,}000\\ \\text{t}$$

**Step 5. The caveats an AP answer should add.** Savings may be smaller than predicted because of the **rebound effect**; the $CO_{2}$ benefit shrinks as the grid adds wind, solar and nuclear; and households with the highest **energy burden** often cannot afford the upfront cost, which is why weatherization assistance matters.

> 🔑 **AP Connection:** This chain (meter → power plant → fuel → emissions) is the backbone of many energy FRQs. When asked to justify conservation, connect demand to fuel burned to a pollutant, with a number if the prompt gives data.
      `
    },
    {
      id: 'apesener7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement correctly connects the second law of thermodynamics to energy conservation at home?',
            options: [
              'Saving electricity at home also avoids the heat lost in making it',
              'Home savings let power plants run above 100% efficiency',
              'The second law means home energy savings are always cancelled out',
              'The second law applies to engines but not to electricity generation'
            ],
            correctAnswer: 0,
            explanation: 'A thermal plant loses most of its fuel energy as heat, so each kWh not used at home avoids burning roughly three kWh worth of fuel. No plant can reach 100 percent efficiency, and the second law applies to every energy conversion.'
          },
          {
            question: 'Country P has abundant shallow coal, while Country Q has strong steady winds and no fossil fuels. Which factor most explains why their electricity mixes differ?',
            options: [
              'Per-capita income',
              'Population density',
              'Resource availability',
              'Energy return on investment'
            ],
            correctAnswer: 2,
            explanation: 'Each country relies on the resources its geology and geography provide, one of the three CED factors along with price and regulation. Income and density matter, but the stem describes differences in available resources.'
          },
          {
            question: 'Which pairing of an idea with its best example is correct?',
            options: [
              'Rebound effect: a campus that heats buildings with power-plant waste heat',
              'Low EROI: ethanol that returns little more energy than it took to make',
              'Nondepletable resource: firewood cut from a forest faster than it regrows',
              'Energy ladder: a coal plant that switches to burning natural gas instead'
            ],
            correctAnswer: 1,
            explanation: 'Corn ethanol delivers only slightly more energy than its production uses, the defining case of low EROI. Using waste heat is cogeneration, overharvested firewood is a depleted renewable, and the energy ladder describes household fuel choices.'
          }
        ]
      }
    },
    {
      id: 'apesener7-calcs',
      type: 'text' as const,
      content: `
## Calculations in This Topic

| Skill | Formula or fact | Part |
|---|---|---|
| Efficiency | Useful energy out ÷ energy in × 100 | 1, 4 |
| Per-capita use | Total ÷ population | 2, 6 |
| Percent change | (new − old) ÷ old × 100 | 2, 4 |
| Percentage points | Difference between two shares | 4 |
| EROI and net energy | EROI = out ÷ in; net = out − in; surplus share = 1 − 1/EROI | 3 |
| Cogeneration | Overall efficiency = (electricity + useful heat) ÷ fuel; compare with separate heat and power | 3, 6 |
| Large units | 1 quad = $10^{15}$ BTU ≈ 1.06 EJ; 1 TWh = $10^{9}$ kWh; scientific notation | 4 |
| Flow diagrams | Services + rejected = input (first law) | 4 |
| Energy saved | Watts saved × hours ÷ 1,000 = kWh | 5, 6 |
| Payback | Extra cost ÷ annual savings | 5, 6 |
| Gasoline $CO_{2}$ | Gallons = miles ÷ mpg; about 8.9 kg $CO_{2}$ per gallon | 5 |
| Emissions avoided | kWh × kg $CO_{2}$ per kWh | 5, 6, 7 |
| Rule of 70 | Doubling time ≈ 70 ÷ percent growth rate | 4 |

## Final Review Questions

Answer each from memory, then check the part listed.

1. What is the difference between a nonrenewable, a depletable renewable and a nondepletable resource? (Part 2)
2. Why does a country's fossil fuel use tend to rise as it develops? (Part 2)
3. What controls where oil, coal and natural gas are found? Where are solar and geothermal strongest? (Part 2)
4. Why has the EROI of oil fallen, and why does that matter even if reserves remain? (Part 3)
5. How does cogeneration save fuel without breaking the second law? (Part 3)
6. Which two stages of the U.S. energy system reject the most energy? (Part 4)
7. Can you name four CED methods of conserving energy at home and four on a large scale? (Part 5)
8. Why are a BEV's emissions not zero? (Part 5)
      `
    },
    {
      id: 'apesener7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A geothermal plant delivers 4,000 TJ of electricity over its life and took 250 TJ to build and run. What is its EROI?

2) A refrigerator rated at 150 W is replaced by one rated at 90 W. Both run an average of 10 hours a day. How many kWh does the swap save in 365 days?

3) A city's renewable share of electricity rises from 12% to 30%. By how many percentage points did it rise?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['16', '219', '18'],
        hint1: 'EROI = energy delivered ÷ energy invested.',
        hint2: '60 W saved × 10 h × 365 days, then divide by 1,000.',
        hint3: 'Subtract the shares; this is not a percent change.',
        explanation: '1) 4,000 ÷ 250 = 16. 2) 60 × 10 × 365 = 219,000 Wh = 219 kWh. 3) 30 − 12 = 18 percentage points (a 150 percent increase in the share).'
      }
    },
    {
      id: 'apesener7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A developing country with large coal reserves plans to expand its grid to rural villages that now cook with wood. Which outcome is most likely in the short term?',
            options: [
              'Indoor air improves while national $CO_{2}$ emissions rise',
              'Indoor air worsens while national $CO_{2}$ emissions fall',
              'National energy use falls as villagers stop gathering wood',
              'Deforestation speeds up because coal plants burn wood'
            ],
            correctAnswer: 0,
            explanation: 'Electricity replaces smoky wood fires in homes, but a coal-based grid adds carbon dioxide as the country climbs the energy ladder. Total energy use usually rises with development.'
          },
          {
            question: 'Which proposal would most reduce a city\'s transportation energy use per passenger-mile?',
            options: [
              'Lowering gasoline taxes so that fuel becomes cheaper',
              'Expanding bus and rail service along busy corridors',
              'Adding lanes to highways to speed up car traffic',
              'Building larger parking garages in the downtown area'
            ],
            correctAnswer: 1,
            explanation: 'A full bus or train spreads its energy use over many riders, cutting energy per passenger-mile. Cheaper fuel, wider highways and more parking tend to increase driving.'
          },
          {
            question: 'An energy-flow diagram shows that a country\'s transportation sector takes in 30 quads and delivers 6 quads of energy services. What is its efficiency?',
            options: [
              '20%',
              '24%',
              '80%',
              '5%'
            ],
            correctAnswer: 0,
            explanation: 'Efficiency is services divided by input: 6 ÷ 30 = 0.20, or 20 percent. The other 24 quads, 80 percent of the input, are rejected as waste heat.'
          }
        ]
      }
    },
    {
      id: 'apesener7-summary',
      type: 'text' as const,
      content: `
## Topic Summary

| Theme | One-line takeaway |
|---|---|
| Supply | Fossil fuels dominate, resources are unevenly distributed, and fuel choice follows availability, price and regulation |
| Development | Energy use per person, and fossil fuel use, rise as countries industrialize |
| Net energy | It takes energy to get energy; EROI falls as easy deposits run out |
| Waste heat | About two-thirds of primary energy is rejected; cogeneration puts some of it to use |
| Demand | Conservation and efficiency are the cheapest ways to cut fuel use and emissions |
| Equity | Low-income communities face more pollution and a higher energy burden |

You have finished Energy Concepts & Resources. Review any part whose Final Review Questions you could not answer.
      `
    }
  ]
};
