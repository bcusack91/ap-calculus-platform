export const apesRenewableEnergyPart7Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene7-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 🧭 The Topic on One Page |
| Every Source Side by Side |
| Calculations From This Topic |
| Final Checklist |

> 🔑 **Key Concept:** Every renewable source turns a natural flow (sunlight, moving air, falling water, Earth's heat, recently captured carbon) into useful energy. None is impact-free. The exam rewards you for matching each source to **how it works**, **where it works**, **its specific trade-off** and **the numbers that describe it**.

## 🧭 The Topic on One Page

| Part | Big idea | What you should be able to do |
|---|---|---|
| 1 | Overview of renewable sources | Name each source, its 2024 share of world electricity and its main pros and cons |
| 2 | Solar in depth | Explain PV, CSP, active and passive solar; calculate kWh, payback and capacity factor |
| 3 | Hydro, tidal and geothermal | Explain dam impacts and their mechanisms; tell geothermal power from heat pumps |
| 4 | Wind, biomass and hydrogen | Apply the cube law; weigh biomass's carbon-neutral claim; explain how hydrogen is made |
| 5 | Intermittency and storage | Match grid tools to gaps; compare capacity factors and life-cycle emissions |
| 6 | Exam skills | Solve multi-step energy calculations; design an investigation |

## Every Source Side by Side

| Source | How it makes energy | Where it works best | CED trade-off |
|---|---|---|---|
| **Solar PV** | Semiconductor turns light directly into electricity | Sunny, lower-latitude sites; rooftops | Clean but costly to install; large farms harm desert ecosystems |
| **Active / passive solar** | Collectors with pumps heat fluid; building design captures heat | Any sunny site | Passive: no equipment, no storage |
| **Hydroelectric** | Falling or flowing water spins turbines | Large rivers with a big drop; tidal estuaries | No air pollution, but costly and changes or destroys habitat |
| **Geothermal** | Steam from Earth's heat spins turbines | Plate boundaries and hot spots | Costly, limited access; releases hydrogen sulfide |
| **Wind** | Moving air spins blades and a generator | Open plains, ridges, offshore | Clean, but kills birds and bats |
| **Biomass** | Burning wood, manure or biofuels | Where plant material is plentiful | Cheap heat, but releases $CO_{2}$, CO, $NO_{x}$, particulates, VOCs; deforestation |
| **Hydrogen fuel cell** | $H_{2}$ and $O_{2}$ combine to make electricity and water | Vehicles, backup power | Only water emitted, but expensive and needs energy to make the hydrogen |
      `
    },
    {
      id: 'apesrene7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pairing of renewable source and environmental concern is correct?',
            options: [
              'Geothermal plant: bird deaths from spinning blades',
              'Hydroelectric dam: sediment trapped behind the dam',
              'Wind farm: methane released by flooded vegetation',
              'Solar PV farm: hydrogen sulfide escaping from wells'
            ],
            correctAnswer: 1,
            explanation: 'A dam slows the river so sediment settles in the reservoir. Bird deaths belong with wind, flooded-vegetation methane with hydro reservoirs, and hydrogen sulfide with geothermal wells.'
          },
          {
            question: 'Among renewable sources, which one usually has the highest capacity factor and can supply steady power day and night?',
            options: [
              'Solar PV',
              'Geothermal',
              'Onshore wind',
              'Run-of-river hydro'
            ],
            correctAnswer: 1,
            explanation: 'Geothermal plants draw on heat that is present around the clock, so they often run 70% or more of the time. Solar, wind and run-of-river output all depend on weather or river flow.'
          },
          {
            question: 'Even though a fuel cell emits only water, what does the CED identify as a key drawback of hydrogen fuel cells?',
            options: [
              'Energy must be spent to produce the gas',
              'Their exhaust water is too acidic to release',
              'They need hot rock near the surface to operate',
              'They release nitrogen oxides at high temperatures'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen gas must be produced, by electrolysis or from natural gas, and that takes energy; the technology is also expensive. Fuel cell water is not acidic, and hot rock is a requirement for geothermal power.'
          },
          {
            question: 'Overharvesting trees for fuelwood and charcoal most directly leads to which problem?',
            options: [
              'Acid mine drainage in nearby streams',
              'Deforestation followed by soil erosion',
              'Thermal pollution of rivers and lakes',
              'Saltwater intrusion into coastal wells'
            ],
            correctAnswer: 1,
            explanation: 'Cutting trees faster than they regrow clears forest, and bare ground then erodes. Acid mine drainage, thermal pollution and saltwater intrusion come from mining, power plant cooling and groundwater overpumping.'
          },
          {
            question: 'A 3 MW wind turbine generates 7,884 MWh in a year. What is its capacity factor?',
            options: [
              '90%',
              '30%',
              '3.3%',
              '36%'
            ],
            correctAnswer: 1,
            explanation: 'The maximum possible output is 3 MW × 8,760 h = 26,280 MWh, and 7,884 ÷ 26,280 × 100 = 30 percent. Dividing by 8,760 alone, without the 3 MW, gives 90 percent.'
          },
          {
            question: 'A student claims that a city could run entirely on solar panels if their nameplate capacity equaled the city\'s peak demand. What is the main flaw in this claim?',
            options: [
              'Output tops the rating at noon, so the extra power is wasted',
              'Panels make no power at night and average far below their rating',
              'Solar panels cannot be connected to an existing city power grid',
              'Peak demand comes at noon, when panels make the least electricity'
            ],
            correctAnswer: 1,
            explanation: 'Solar panels average only about 20–25% of their rating and produce nothing at night, so matching peak demand on paper still leaves large gaps. Storage, other sources or far more capacity would be needed.'
          }
        ]
      }
    },
    {
      id: 'apesrene7-calcs',
      type: 'text' as const,
      content: `
## Calculations From This Topic

| Calculation | Method | Example |
|---|---|---|
| Energy from power | kW × hours = kWh | 5 kW × 4 h = 20 kWh |
| Unit conversion | 1 MWh = 1,000 kWh; 1 kWh = $3.6 \\times 10^{6}$ J | 2.5 MWh = 2,500 kWh |
| Yearly solar output | kW × peak sun hours × 365 | 6 kW × 5 × 365 = 10,950 kWh |
| Payback period | Net cost ÷ yearly savings | \\$16,000 ÷ \\$1,600/yr = 10 yr |
| Capacity factor | Actual MWh ÷ (MW × 8,760 h) × 100 | 3,504,000 ÷ (1,000 × 8,760) × 100 = 40% |
| Yearly output from capacity factor | MW × 8,760 × capacity factor | 50 MW × 8,760 × 0.90 = 394,200 MWh |
| Wind cube law | New power = old power × (new speed ÷ old speed)³ | 400 kW × (9 ÷ 6)³ = 1,350 kW |
| Efficiency | Useful output ÷ input × 100 | 16.5 ÷ 33 × 100 = 50% |
| Round-trip storage | Energy out ÷ energy in × 100 | 760 ÷ 1,000 × 100 = 76% |
| Emissions avoided | kWh × emission factor | $10^{9}$ kWh × 809 g = $8.09 \\times 10^{11}$ g |
| Percent change | (new − old) ÷ old × 100 | 2.0 to 5.0: +150% |
      `
    },
    {
      id: 'apesrene7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Source or Process** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The renewable source whose combustion releases carbon monoxide, nitrogen oxides and particulates is ___',
            options: ['Biomass', 'Geothermal', 'Hydroelectric', 'Wind']
          },
          {
            label: 'Energy captured from the rise and fall of the oceans, driven mainly by the Moon\'s gravity, is ___',
            options: ['Tidal energy', 'Wind energy', 'Geothermal energy', 'Hydroelectric energy']
          },
          {
            label: 'Using electricity to split water into hydrogen and oxygen is ___',
            options: ['Electrolysis', 'Steam reforming', 'Fermentation', 'Combustion']
          }
        ],
        correctAnswers: ['Biomass', 'Tidal energy', 'Electrolysis'],
        hint1: 'This is the only source in the list that is burned.',
        hint2: 'Predictable, twice-daily changes in sea level.',
        hint3: 'The reverse of the reaction inside a fuel cell.',
        explanation: 'Biomass is burned, so it releases combustion pollutants. Tides come from the Moon\'s gravitational pull. Electrolysis splits water with electricity, the reverse of a fuel cell.'
      }
    },
    {
      id: 'apesrene7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

(Illustrative data.) Enter numbers only.

1) A 5 kW rooftop array gets 4 peak sun hours per day. How many kWh does it produce in a year (365 days)?

2) Electricity costs \\$0.15 per kWh, and the array costs \\$13,140. What is its payback period, in years?

3) A turbine produces 1,000 kW when the wind blows at 10 m/s. Using the cube relationship, how many kW does it produce at 5 m/s?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['7300', '12', '125'],
        hint1: '5 kW × 4 h per day × 365 days.',
        hint2: 'Yearly savings = kWh per year × \\$0.15. Then divide the cost by the savings.',
        hint3: 'The speed was halved, so multiply the power by (1/2)³ = 1/8.',
        explanation: '1) 5 × 4 × 365 = 7,300 kWh. 2) 7,300 × \\$0.15 = \\$1,095 per year, and \\$13,140 ÷ \\$1,095 = 12 years. 3) 1,000 kW × 1/8 = 125 kW.'
      }
    },
    {
      id: 'apesrene7-checklist',
      type: 'text' as const,
      content: `
## Final Checklist

Before the exam, make sure you can:

- Explain how PV, CSP, active solar and passive solar each work, and which ones store energy
- Use W for power and Wh for energy, and convert kWh, MWh, joules and scientific notation
- Calculate yearly output, payback period and capacity factor
- Describe five impacts of a dam and the mechanism behind each
- Explain why geothermal power is limited to plate boundaries and hot spots, and why heat pumps are not
- Apply the cube law for wind speed and name wind's impact on birds and bats
- List the pollutants from burning biomass and argue both sides of "carbon-neutral"
- Write the fuel cell reaction and explain why hydrogen is an energy carrier
- Name at least three tools for intermittency, including two kinds of storage
- Rank sources by life-cycle emissions and by capacity factor

> 🔑 **AP Connection:** When an FRQ asks you to compare two energy sources, structure your answer as **one advantage of A**, **one disadvantage of A**, and a mechanism for each. "Geothermal provides steady power because Earth's heat is available day and night" scores; "geothermal is better" does not.

**Up next in the course:** the Energy topic covers the global energy mix, net energy and energy conservation, which build on the sources in this lesson.
      `
    }
  ]
};
