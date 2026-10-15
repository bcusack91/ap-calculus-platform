export const apesRenewableEnergyPart2Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene2-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 2 of 7 — Solar Energy in Depth**

---

| Section |
|---------|
| ☀️ How a Photovoltaic Cell Makes Electricity |
| Power vs Energy: W and Wh |
| Concentrated Solar Power, Active and Passive Solar |
| Worked Example: A Rooftop System |
| Environmental Trade-offs of Solar |

> 🔑 **Key Concept:** Part 1 named the three kinds of solar energy. This part explains **how** each one works (CED 6.8), separates power from energy so your units are right, and walks through the calculations the exam asks for: daily and yearly output, payback period and capacity factor.
      `
    },
    {
      id: 'apesrene2-pv',
      type: 'text' as const,
      content: `
## ☀️ How a Photovoltaic Cell Makes Electricity

A **photovoltaic (PV) cell** turns light directly into electricity, with no moving parts and no fuel.

1. Sunlight strikes a thin layer of **semiconductor**, usually silicon.
2. Energy from the light knocks electrons loose in the semiconductor.
3. The cell's built-in electric field pushes those electrons in one direction, so a **direct current (DC)** flows through wires.
4. An **inverter** converts the DC into **alternating current (AC)**, the kind used by homes and the grid.

Cells are wired into **panels (modules)**, and panels are grouped into **arrays**. Most commercial silicon panels convert about 20% of the sunlight that strikes them into electricity.

| Scale | Example | Notes |
|---|---|---|
| Rooftop | Panels on a house or school | Uses space that is already built on; no new land cleared |
| Utility-scale | A solar farm of thousands of panels | Cheaper per kWh, but covers large areas of land |

**Why output varies:** PV produces electricity only while light reaches the panels. Output falls to zero at night and drops on cloudy days, in winter and at high latitudes, where the sun is lower in the sky. This is the **intermittency** introduced in Part 1.

## Power vs Energy: W and Wh

These two quantities are the most common unit trap on APES calculation questions.

| Quantity | What it measures | Units | Analogy |
|---|---|---|---|
| **Power** | The **rate** at which energy is produced or used | watt (W), kilowatt (kW), megawatt (MW) | Speed (km/h) |
| **Energy** | The **amount** produced or used over a period | watt-hour (Wh), kilowatt-hour (kWh), MWh | Distance (km) |

$$\\text{Energy (kWh)} = \\text{Power (kW)} \\times \\text{Time (h)}$$

- A 100 W bulb left on for 10 hours uses $100 \\times 10 = 1{,}000$ Wh, which is **1 kWh**.
- 1 kW = 1,000 W, and 1 MW = 1,000 kW = $1 \\times 10^{6}$ W.
- 1 kWh = $3.6 \\times 10^{6}$ joules, and 1 kWh is about 3,412 BTU.
- A year has $24 \\times 365 = 8{,}760$ hours.

A panel's **rating** (for example, 400 W) is its power output under full, bright sunlight. **Peak sun hours** convert a day's changing sunlight into the equivalent number of hours at that full brightness, so a site with 5 peak sun hours gets as much solar energy in a day as 5 hours at full rating.
      `
    },
    {
      id: 'apesrene2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A homeowner\'s rooftop array is rated at 5 kW. Which statement uses the units correctly?',
            options: [
              'The array can produce energy at a rate of up to 5 kW',
              'The array produces 5 kW of energy over each full day',
              'The array stores 5 kWh of energy in its cells at a time',
              'The array produces 5 kWh of energy during each second'
            ],
            correctAnswer: 0,
            explanation: 'A kilowatt measures power, the rate of energy production, so 5 kW is the maximum rate in full sun. Energy over a day is measured in kWh, and PV cells do not store energy.'
          },
          {
            question: 'What is the job of the inverter in a rooftop PV system?',
            options: [
              'Concentrating sunlight to raise the voltage of each panel',
              'Storing surplus daytime electricity for use during the night',
              'Changing the panels\' direct current to alternating current',
              'Turning sunlight into heat that warms a household water tank'
            ],
            correctAnswer: 2,
            explanation: 'PV cells produce direct current, and the inverter converts it to the alternating current used by homes and the grid. Storage requires a battery, and heating water is the job of an active solar collector.'
          },
          {
            question: 'Two identical PV arrays are installed, one in Arizona and one in Alaska. Why does the Alaska array produce less electricity over a year?',
            options: [
              'Its colder air lowers the voltage that the cells can produce',
              'It receives less sunlight, with the sun lower in the sky',
              'Its panels wear out faster from repeated snow and ice cover',
              'Its inverter loses more energy as heat in the cold climate'
            ],
            correctAnswer: 1,
            explanation: 'PV output depends on how much sunlight reaches the panels, and high latitudes get a lower sun angle and very short winter days. Cold temperatures actually make silicon cells slightly more efficient, so they are not the reason.'
          }
        ]
      }
    },
    {
      id: 'apesrene2-csp',
      type: 'text' as const,
      content: `
## Concentrated Solar Power, Active and Passive Solar

### Concentrated solar power (CSP)

CSP plants use mirrors to focus sunlight and produce **heat**, then use that heat the same way a conventional power plant does: hot fluid makes steam, the steam spins a turbine, and the turbine drives a generator.

| CSP design | How it works |
|---|---|
| **Parabolic trough** | Long curved mirrors focus sunlight onto a pipe of oil or other fluid running along the focal line |
| **Power tower** | A field of sun-tracking mirrors (heliostats) aims sunlight at a receiver on top of a central tower |

Many CSP plants store heat in tanks of **molten salt**, which stays hot for hours and lets the plant keep generating after sunset. CSP needs strong, direct sunlight, so it is built in deserts, and it uses water for cooling and for washing mirrors, which is scarce there.

### Active solar heating

**Active solar** systems use mechanical and electric equipment, such as pumps or fans, to move a liquid or air through rooftop **solar collectors**. The heated fluid warms water or a building, and the heat can be **collected and stored** in an insulated tank for later use. A common example is a solar water heater.

### Passive solar heating

**Passive solar** design heats and lights a building directly from the sun, with **no mechanical or electric equipment**. Because nothing collects or pumps the energy, it cannot be stored for later in a tank or battery. Typical features in the Northern Hemisphere:

- **Large south-facing windows** that let in winter sunlight
- **Thermal mass**, such as a concrete floor, stone wall or water barrels, that absorbs heat during the day and releases it at night
- **Roof overhangs** that shade the windows from the high summer sun but let the low winter sun shine in
- Good insulation so the captured heat stays inside

| System | Makes electricity? | Moving equipment? | Energy stored? |
|---|---|---|---|
| PV | Yes, directly from light | No | Only with added batteries |
| CSP | Yes, through steam turbines | Yes | Yes, as heat in molten salt |
| Active solar heating | No | Yes, pumps or fans | Yes, as hot water in a tank |
| Passive solar heating | No | No | No collection or storage system |
      `
    },
    {
      id: 'apesrene2-worked',
      type: 'text' as const,
      content: `
## Worked Example: A Rooftop System (illustrative data)

A family installs 16 panels rated at 375 W each. Their site averages 5 peak sun hours per day. The household uses 12,000 kWh of electricity per year, and electricity costs \\$0.15 per kWh. The system costs \\$18,000, and a local rebate pays \\$2,000.

**1. System power (nameplate):**
$$16 \\times 375\\ \\text{W} = 6{,}000\\ \\text{W} = 6\\ \\text{kW}$$

**2. Energy per day:**
$$6\\ \\text{kW} \\times 5\\ \\text{h/day} = 30\\ \\text{kWh/day}$$

**3. Energy per year:**
$$30\\ \\text{kWh/day} \\times 365\\ \\text{days} = 10{,}950\\ \\text{kWh/yr}$$

**4. Percent of household use supplied:**
$$\\frac{10{,}950}{12{,}000} \\times 100 \\approx 91\\%$$

**5. Money saved per year:**
$$10{,}950\\ \\text{kWh} \\times \\$0.15/\\text{kWh} = \\$1{,}642.50$$

**6. Payback period** (how long the savings take to repay the cost):
$$\\frac{\\$18{,}000 - \\$2{,}000}{\\$1{,}642.50/\\text{yr}} \\approx 9.7\\ \\text{years}$$

**7. Capacity factor** (actual output as a percent of the output if the system ran at full rating all year):
$$\\frac{10{,}950\\ \\text{kWh}}{6\\ \\text{kW} \\times 8{,}760\\ \\text{h}} \\times 100 = \\frac{10{,}950}{52{,}560} \\times 100 \\approx 21\\%$$

**8. Scientific notation:** $10{,}950\\ \\text{kWh} = 1.095 \\times 10^{4}$ kWh. In joules, $1.095 \\times 10^{4} \\times 3.6 \\times 10^{6} \\approx 3.9 \\times 10^{10}$ J.

A capacity factor near 20% is normal for solar, because the panels produce nothing at night and less than full output in the morning, evening and cloudy weather.
      `
    },
    {
      id: 'apesrene2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A school installs 10 panels rated at 300 W each at a site with 6 peak sun hours per day. The system costs \\$6,570, and electricity costs \\$0.10 per kWh. (Illustrative data.) Enter numbers only.

1) How many kWh does the system produce per day?

2) How many kWh does it produce per year (365 days)?

3) What is the payback period, in years?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['18', '6570', '10'],
        hint1: 'First find the system power: 10 × 300 W = 3,000 W = 3 kW. Then multiply by the hours of full sun.',
        hint2: 'Multiply the daily energy by 365.',
        hint3: 'Find the yearly savings (kWh per year × \\$0.10), then divide the cost by it.',
        explanation: '1) 3 kW × 6 h = 18 kWh per day. 2) 18 × 365 = 6,570 kWh per year. 3) 6,570 kWh × \\$0.10 = \\$657 saved per year, and \\$6,570 ÷ \\$657 = 10 years.'
      }
    },
    {
      id: 'apesrene2-impacts',
      type: 'text' as const,
      content: `
## Environmental Trade-offs of Solar

| Advantages | Disadvantages |
|---|---|
| No air pollution or $CO_{2}$ while generating | Produces only when the sun shines, so it needs storage or backup |
| Sunlight is free and will not run out | High upfront cost, although costs have fallen steeply |
| Rooftop systems use no new land | Large solar farms can clear and fragment desert habitat |
| Few moving parts, so maintenance is low | Mining and manufacturing (silicon, silver, copper) use energy and create waste |
| Can be built in small pieces close to users | Old panels add to the waste stream at the end of their 25–30-year life |

**Desert ecosystems:** The CED singles out large solar farms in deserts. Grading and fencing hundreds of hectares removes slow-growing desert plants, fragments habitat for animals such as the desert tortoise in the Mojave Desert, and disturbs fragile soil crusts. CSP plants add water use in places where water is scarce.

> 🔑 **AP Connection:** When a question asks for an environmental **disadvantage** of solar, a strong answer names the impact **and** its mechanism: "Building a large solar farm clears desert vegetation, which removes habitat for desert tortoises." Saying "solar is expensive" is an economic point, not an environmental one.
      `
    },
    {
      id: 'apesrene2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A utility plans a 500-hectare PV farm in the Mojave. Which environmental impact is most directly linked to this project?',
            options: [
              'Methane released as plants decay under a newly flooded reservoir',
              'Thermal pollution of a nearby river from the farm\'s cooling water',
              'Collisions of migrating birds with fast-spinning rotor blades',
              'Loss and fragmentation of the habitat used by desert tortoises'
            ],
            correctAnswer: 3,
            explanation: 'Clearing and fencing a large area of desert removes and divides habitat for slow-moving species such as the desert tortoise. PV panels use no cooling water and have no blades, and reservoir methane is a hydroelectric impact.'
          },
          {
            question: 'A house in Minnesota has large south-facing windows, a dark concrete floor and a deep roof overhang. What is the role of the overhang?',
            options: [
              'It blocks the low winter sun so the floor does not overheat',
              'It shades the windows from high summer sun but admits winter sun',
              'It holds the solar collectors that pump hot water to the floor',
              'It traps warm air against the glass to insulate the windows'
            ],
            correctAnswer: 1,
            explanation: 'The summer sun is high in the sky, so the overhang shades the glass, while the low winter sun shines under it onto the thermal mass. Pumped collectors would make this an active system, not a passive one.'
          },
          {
            question: 'Why can some concentrated solar power plants keep generating electricity for hours after sunset?',
            options: [
              'They store heat in molten salt',
              'Their mirrors absorb infrared light at night',
              'Their turbines coast on momentum stored by day',
              'They draw heat from hot rock beneath the mirrors'
            ],
            correctAnswer: 0,
            explanation: 'Molten salt heated during the day stays hot for hours and can still boil water for the turbine at night. The mirrors only reflect sunlight, and a turbine cannot coast for hours.'
          }
        ]
      }
    },
    {
      id: 'apesrene2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| PV | Semiconductor turns light directly into DC; an inverter makes AC |
| CSP | Mirrors focus sunlight into heat, then steam, turbine and generator; molten salt stores heat |
| Active solar | Pumps or fans move fluid through collectors; heat stored in a tank |
| Passive solar | Building design only: south windows, thermal mass, overhangs; no equipment, no storage |
| Power vs energy | kW is a rate; kWh = kW × hours |
| Payback period | Net cost ÷ yearly savings |
| Capacity factor | Actual output ÷ (rating × 8,760 h) × 100; about 20% for solar |
| Main impacts | Desert habitat loss, mining and manufacturing, end-of-life panels |

**Next:** Part 3 turns to energy from moving water and from Earth's internal heat: hydroelectric dams, tidal power and geothermal energy.
      `
    }
  ]
};
