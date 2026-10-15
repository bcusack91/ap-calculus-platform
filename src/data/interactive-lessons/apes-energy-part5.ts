export const apesEnergyPart5Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesener5-intro',
      type: 'text' as const,
      content: `
# ⚡ Energy Concepts & Resources

**Part 5 of 7 — Conserving Energy: Buildings, Appliances and Transportation**

---

| Section |
|---------|
| 📖 Conservation Versus Efficiency |
| Saving Energy at Home |
| Green Building Design and the Grid |
| Saving Energy in Transportation |
| Energy Burden and Environmental Justice |
| Common Misconceptions |

> 🔑 **Key Concept:** The cheapest unit of energy is the one never used. CED topic 6.13 lists ways to conserve energy in homes and on a large scale. This part explains how each works and how to calculate savings, payback and avoided $CO_{2}$, then clears up the misconceptions that cost points.
      `
    },
    {
      id: 'apesener5-home',
      type: 'text' as const,
      content: `
## 📖 Conservation Versus Efficiency

| Term | Meaning | Example |
|---|---|---|
| **Energy conservation** | Using less energy by changing **behavior** | Turning the thermostat down, taking the bus, switching off lights |
| **Energy efficiency** | Getting the same service from less energy by changing **technology** | An LED bulb, a better-insulated wall, a hybrid engine |

Both reduce demand. The CED groups them together under energy conservation, and AP answers often combine them: "install a programmable thermostat (technology) set back at night (behavior)."

## Saving Energy at Home

Heating and cooling are the largest energy uses in most U.S. homes, followed by water heating.

| Method (CED 6.13) | How it saves energy |
|---|---|
| **Adjusting the thermostat** | A smaller temperature difference between inside and outside means slower heat loss in winter and slower heat gain in summer. The U.S. Department of Energy estimates that setting the thermostat back 7–10 °F for 8 hours a day can save up to about 10% a year on heating and cooling |
| **Adding insulation and sealing air leaks** | Slows heat flow through walls, attics and gaps around windows and doors |
| **Energy-efficient windows** | Double or triple panes and low-emissivity coatings cut heat loss and gain |
| **Energy-efficient appliances** | ENERGY STAR models use less electricity for the same job; LEDs use far less power than incandescent bulbs for the same light |
| **Conserving water** | Less hot water to heat at home, and less energy for the utility to pump and treat water |

### Worked Example 1: Swapping One Bulb

A **60 W** incandescent bulb and a **9 W** LED give about the same light. The bulb is on **4 hours a day**. Electricity costs **\\$0.15 per kWh**, and the LED costs **\\$3**.

**Energy saved per year:**
$$(60 - 9)\\ \\text{W} \\times 4\\ \\text{h/day} \\times 365\\ \\text{days} = 74{,}460\\ \\text{Wh} \\approx 74.5\\ \\text{kWh}$$

**Money saved per year:** $74.5 \\times \\$0.15 \\approx \\$11.20$

**Payback period:**
$$\\frac{\\text{cost}}{\\text{annual savings}} = \\frac{\\$3}{\\$11.20\\ \\text{per year}} \\approx 0.27\\ \\text{years} \\approx 3\\ \\text{months}$$

### Worked Example 2: Insulating an Attic (illustrative data)

Attic insulation costs **\\$1,800** and cuts a **\\$900** annual heating bill by **20%**.

$$\\text{Savings} = 0.20 \\times \\$900 = \\$180\\ \\text{per year} \\qquad \\text{Payback} = \\frac{\\$1{,}800}{\\$180} = 10\\ \\text{years}$$

After 10 years, every further year of savings is money the household keeps.
      `
    },
    {
      id: 'apesener5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which action is an example of energy conservation through a change in behavior rather than in technology?',
            options: [
              'Replacing an old refrigerator with an ENERGY STAR model',
              'Turning the thermostat down at night in winter',
              'Installing double-pane, low-emissivity windows in a house',
              'Adding a thicker layer of insulation to the attic floor'
            ],
            correctAnswer: 1,
            explanation: 'Lowering the thermostat setting is a choice about how energy is used, so it is conservation by behavior. New appliances, windows and insulation deliver the same comfort with less energy, which is efficiency.'
          },
          {
            question: 'Why does lowering a home\'s winter thermostat setting reduce heating energy?',
            options: [
              'A furnace runs more efficiently at lower temperatures',
              'A cooler house loses heat to the outside more slowly',
              'Cool indoor air holds more heat per cubic meter',
              'Insulation works only when the house is kept cool'
            ],
            correctAnswer: 1,
            explanation: 'Heat flows out faster when the temperature difference between inside and outside is larger, so a cooler house leaks less heat and the furnace replaces less of it.'
          },
          {
            question: 'A household cuts its hot-water use with low-flow showerheads. Besides water, which resource does it most directly conserve?',
            options: [
              'The gas or power that heats it',
              'The insulation in the home\'s walls',
              'The electricity used for its lighting',
              'The gasoline used by the family car'
            ],
            correctAnswer: 0,
            explanation: 'Water heating is one of the largest home energy uses, so using less hot water saves the gas or electricity that would have heated it. The CED lists conserving water as a home energy-conservation method for this reason.'
          }
        ]
      }
    },
    {
      id: 'apesener5-building',
      type: 'text' as const,
      content: `
## Green Building Design and the Grid

The CED lists **green building design** among large-scale conservation methods. Common features:

| Feature | What it does |
|---|---|
| **Passive solar design** | Windows facing the equator, thermal mass and roof overhangs let in winter sun and block summer sun (Renewable Energy lessons) |
| **Heavy insulation and airtight construction** | Cuts heating and cooling loads |
| **Daylighting** | Skylights and light shelves reduce the need for electric lighting |
| **Green (vegetated) roofs** | Insulate the roof, cool it by evapotranspiration and absorb stormwater |
| **Light-colored "cool" roofs** | Higher albedo reflects sunlight, cutting air-conditioning load and urban heat |
| **Efficient heating and cooling** | Heat pumps, including ground-source heat pumps, move heat rather than generate it |
| **Smart controls** | Programmable or smart thermostats and occupancy sensors |

### Peak demand and the smart grid

Utilities must build enough capacity for the **peak**: the hottest summer afternoon, when air conditioners all run. Cutting peak demand avoids building plants that run only a few hours a year. **Smart grids** and **time-of-use pricing** charge more at peak hours, encouraging people to run dishwashers or charge cars at night.

## Saving Energy in Transportation

Transportation runs almost entirely on petroleum, and gasoline engines waste most of their fuel energy as heat (Part 4).

| Method (CED 6.13) | How it saves energy |
|---|---|
| **Improving fuel economy** | Lighter vehicles, better aerodynamics and efficient engines; U.S. fuel-economy (CAFE) standards require fleet averages to rise |
| **Hybrid vehicles** | A gasoline engine plus a battery and electric motor; **regenerative braking** recovers energy normally lost as brake heat |
| **Battery electric vehicles (BEVs)** | No tailpipe emissions; electric motors turn most of their energy into motion, though total emissions depend on how the grid's electricity is generated |
| **Public transportation** | One bus or train carries many riders, so energy per passenger-mile falls |
| **Carpooling, biking, walking** | Fewer vehicle-miles for the same trips |

Burning one gallon of gasoline releases about **8.9 kg of $CO_{2}$**.

### Worked Example 3: A Car Swap (illustrative data)

A driver covers **12,000 miles** a year. Compare a **25 mpg** car, a **50 mpg** hybrid, and a BEV that uses **0.30 kWh per mile** on a grid that emits **0.40 kg $CO_{2}$ per kWh**.

| Vehicle | Energy used per year | $CO_{2}$ per year |
|---|---|---|
| 25 mpg car | $12{,}000 \\div 25 = 480$ gal | $480 \\times 8.9 \\approx 4{,}270$ kg |
| 50 mpg hybrid | $12{,}000 \\div 50 = 240$ gal | $240 \\times 8.9 \\approx 2{,}140$ kg |
| BEV | $12{,}000 \\times 0.30 = 3{,}600$ kWh | $3{,}600 \\times 0.40 = 1{,}440$ kg |

Doubling fuel economy halves the $CO_{2}$. The BEV's emissions come from the power plant, so on a coal-heavy grid emitting about 1.0 kg per kWh they would rise to about 3,600 kg.
      `
    },
    {
      id: 'apesener5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only.

1) A 100 W incandescent bulb is replaced with a 15 W LED that is on 5 hours a day. How many kWh does the swap save in 360 days?

2) A family drives 15,000 miles a year and replaces a 20 mpg car with a 30 mpg car. How many gallons of gasoline does it save per year?

3) A heat pump costs \\$6,000 more than a furnace and saves \\$750 a year in energy costs. What is its payback period, in years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['153', '250', '8'],
        hint1: 'Power saved is 85 W. Multiply by hours per day and days, then divide by 1,000.',
        hint2: 'Gallons = miles ÷ mpg for each car; subtract.',
        hint3: 'Payback = extra cost ÷ annual savings.',
        explanation: '1) 85 W × 5 h × 360 = 153,000 Wh = 153 kWh. 2) 15,000 ÷ 20 = 750 gal and 15,000 ÷ 30 = 500 gal, saving 250 gal. 3) \\$6,000 ÷ \\$750 = 8 years.'
      }
    },
    {
      id: 'apesener5-justice',
      type: 'text' as const,
      content: `
## Energy Burden and Environmental Justice

**Energy burden** is the share of household income spent on home energy bills. Part 1 showed that low-income communities often live closest to power plants and refineries; they also tend to pay a larger share of income for energy, often in older, poorly insulated housing.

### Worked Example 4: Energy Burden (illustrative data)

Two households each pay **\\$2,400** a year for energy.

$$\\text{Household A (income \\$30,000): } \\frac{2{,}400}{30{,}000} \\times 100 = 8\\%$$
$$\\text{Household B (income \\$120,000): } \\frac{2{,}400}{120{,}000} \\times 100 = 2\\%$$

The same bill is four times the burden for Household A. Weatherization programs that insulate and seal low-income homes cut both energy use and that burden.

## Common Misconceptions

| Misconception | What is actually true |
|---|---|
| "More efficient devices always cut total energy use." | Lower costs can lead people to use more, the **rebound effect** (Jevons paradox). Efficiency still helps, but savings can be smaller than predicted |
| "Electric cars have zero emissions." | They have zero **tailpipe** emissions. Emissions shift to power plants, and depend on the grid mix and on battery manufacturing |
| "Setting the thermostat higher heats a room faster." | Most furnaces deliver heat at one rate; a higher setting only makes them run longer and overshoot |
| "A device that is switched off uses no power." | Many electronics draw **standby power** while plugged in; unplugging or using power strips stops it |
| "Conservation means giving up comfort." | Insulation, LEDs and efficient appliances deliver the same comfort and light with less energy |

> 🔑 **AP Connection:** FRQs often ask you to "propose a solution" and "describe one disadvantage" of it. For conservation, good disadvantages are upfront cost (with payback time), the rebound effect, or, for BEVs, emissions that depend on the grid and mining for battery metals.
      `
    },
    {
      id: 'apesener5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'After a city replaces its streetlights with LEDs, it adds many new lights because each one is cheap to run, and total lighting energy falls less than expected. This illustrates',
            options: [
              'the rebound effect',
              'the first law of thermodynamics',
              'a decline in energy return on investment',
              'the shift of emissions to power plants'
            ],
            correctAnswer: 0,
            explanation: 'When efficiency lowers the cost of a service, people tend to use more of it, which offsets part of the savings. That is the rebound effect, also called the Jevons paradox.'
          },
          {
            question: 'Which feature of a hybrid car most directly recovers energy that a conventional car wastes?',
            options: [
              'A larger gasoline engine that runs at full power more often',
              'Regenerative braking that charges the battery as it slows',
              'A heavier body that holds momentum longer on the highway',
              'Fuel injection that burns gasoline at a hotter temperature'
            ],
            correctAnswer: 1,
            explanation: 'Regenerative braking uses the electric motor as a generator when the car slows, storing energy in the battery instead of losing it as brake heat. Larger engines and heavier bodies would increase fuel use.'
          },
          {
            question: 'A utility in a coal-heavy region promotes battery electric vehicles to cut $CO_{2}$. Which statement best evaluates the plan?',
            options: [
              'It eliminates transportation $CO_{2}$ because BEVs have no tailpipe',
              'It shifts emissions to power plants, so cleaner generation adds benefit',
              'It increases $CO_{2}$ because BEVs use more energy per mile than cars',
              'It has no effect, because electricity always comes from fossil fuels'
            ],
            correctAnswer: 1,
            explanation: 'A BEV moves its emissions from the tailpipe to the power plant, so the climate benefit grows as the grid adds low-carbon sources. Even on a coal-heavy grid, efficient electric motors can emit somewhat less per mile than a gasoline car.'
          }
        ]
      }
    },
    {
      id: 'apesener5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| Conservation vs efficiency | Behavior change vs technology change; both cut demand |
| Home methods (CED 6.13) | Thermostat settings, insulation, efficient appliances and windows, conserving water |
| Large-scale methods (CED 6.13) | Fuel economy, hybrids and BEVs, public transit, green building design |
| Payback period | Extra cost ÷ annual savings |
| Gasoline | About 8.9 kg $CO_{2}$ per gallon; gallons = miles ÷ mpg |
| BEV emissions | Depend on the grid's electricity sources |
| Peak demand | Smart grids and time-of-use pricing shift use away from peak hours |
| Energy burden | Energy bills ÷ income; highest for low-income households |
| Rebound effect | Cheaper energy services can raise use and shrink savings |

**Next:** Part 6 puts the whole topic into AP exam format, with free-response calculations and data questions.
      `
    }
  ]
};
