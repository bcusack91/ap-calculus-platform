export const apesRenewableEnergyPart3Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesrene3-intro',
      type: 'text' as const,
      content: `
# 🌞 Renewable Energy

**Part 3 of 7 — Hydroelectric, Tidal and Geothermal Energy**

---

| Section |
|---------|
| 💧 How a Hydroelectric Dam Works |
| Storage Dams, Run-of-River and Tidal Power |
| What a Dam Does to a River |
| 🌋 Geothermal Power and Ground-Source Heat Pumps |
| Worked Example: Dam, Reservoir and Geothermal Plant |

> 🔑 **Key Concept:** Part 1 listed the pros and cons of dams and geothermal energy. This part explains the mechanisms behind them (CED 6.9 and 6.10): why a dam traps sediment and changes water temperature, how tides can spin a turbine, why geothermal plants cluster near plate boundaries, and how a heat pump differs from a geothermal power plant.
      `
    },
    {
      id: 'apesrene3-hydro',
      type: 'text' as const,
      content: `
## 💧 How a Hydroelectric Dam Works

1. A dam holds back a river, creating a **reservoir** of water high above the river below. The raised water stores **gravitational potential energy**.
2. Water released from the reservoir flows down through a large pipe (the **penstock**).
3. The moving water spins a **turbine**.
4. The turbine turns a **generator**, which produces electricity.
5. The water continues downstream.

The power a site can produce rises with two things: the **height the water falls** (called the head) and the **volume of water flowing per second**. A tall dam on a large river produces the most power. Unlike solar and wind, operators can open or close the gates to raise or lower output within minutes, so hydro can follow changes in demand.

## Storage Dams, Run-of-River and Tidal Power

| Type | How it works | Key feature |
|---|---|---|
| **Storage (impoundment) dam** | A tall dam creates a large reservoir; water is released through turbines as needed | Controllable output; largest impacts on the river |
| **Run-of-river** | Part of the river's natural flow is diverted through turbines, with little or no reservoir | Smaller impact, but output rises and falls with the river's flow |
| **Tidal barrage** | A dam-like barrier across an estuary lets the tide flow in and out through turbines | Tides are predictable, but few coastlines have a large enough tidal range |
| **Tidal stream turbines** | Underwater turbines, like wind turbines, sit in fast tidal currents | No barrier across the estuary; still small-scale |

Tides are caused mainly by the gravitational pull of the Moon (and, to a lesser degree, the Sun) on Earth's oceans, so tidal energy is predictable years ahead. The La Rance tidal barrage in France has generated electricity since 1966. Pumped-storage hydropower, which stores energy rather than producing it, is covered in Part 5.

## What a Dam Does to a River

| Impact | Mechanism |
|---|---|
| **Flooded land and displaced people** | The reservoir drowns forests, farmland, towns and river habitat. China's Three Gorges Dam displaced more than a million people. |
| **Blocked fish migration** | Salmon and other migratory fish cannot swim upstream to spawn or reach the sea. **Fish ladders** help some species pass, but many fish still fail to get through. |
| **Trapped sediment** | The slowing water drops its sediment in the reservoir. The reservoir slowly fills in, and the sediment-starved water below the dam erodes riverbanks, deltas and beaches. Downstream floodplains lose their natural fertilizer. |
| **Changed temperature and dissolved oxygen** | Water released from the bottom of a deep reservoir is colder and often lower in dissolved oxygen than the natural river; water released from the surface can be warmer. Both stress native species. |
| **Greenhouse gases** | Flooded plants decay without oxygen at the reservoir bottom and release **methane**, especially in warm tropical reservoirs. |
| **Changed flow** | Natural spring floods disappear, so floodplain wetlands dry out. |

Dams also bring benefits beyond electricity: flood control, a steady water supply for irrigation and cities, and recreation. Hydroelectric plants produce no air pollution while running and last 50 years or more, but they are expensive to build.
      `
    },
    {
      id: 'apesrene3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which downstream change results from a storage dam trapping sediment in its reservoir?',
            options: [
              'Riverbanks and deltas below the dam erode faster',
              'The channel below the dam fills in with silt and sand',
              'Turbines grind the sediment finer and cloud the river',
              'Spawning gravel below the dam is buried under fine silt'
            ],
            correctAnswer: 0,
            explanation: 'Water leaving the dam carries little sediment, so it picks up material from the banks and no longer rebuilds deltas and beaches. The sediment stays in the reservoir rather than piling up or being ground up downstream.'
          },
          {
            question: 'How does a run-of-river hydroelectric plant differ from a storage dam?',
            options: [
              'It holds water behind a tall dam to release when demand peaks',
              'It keeps little or no reservoir, so output rises and falls with flow',
              'It pumps water uphill at night and lets it flow down by day',
              'It uses the rise and fall of the tides to turn its turbines'
            ],
            correctAnswer: 1,
            explanation: 'A run-of-river plant diverts part of the natural flow through turbines without a large reservoir, so it cannot store water and produces less when the river is low. Holding water to release at peak demand describes a storage dam, and pumping water uphill describes pumped storage.'
          },
          {
            question: 'Why can a large reservoir in a tropical rain forest release significant amounts of greenhouse gas?',
            options: [
              'Spinning turbines warm the water and drive off dissolved CO₂',
              'Algae in the warm surface water release nitrous oxide gas',
              'Drowned vegetation decays without oxygen and releases methane',
              'Evaporation from the reservoir surface adds carbon dioxide'
            ],
            correctAnswer: 2,
            explanation: 'Plants flooded by the reservoir decompose in oxygen-poor bottom water, and anaerobic decomposition produces methane, a potent greenhouse gas. Warm temperatures speed this up, which is why tropical reservoirs emit the most.'
          }
        ]
      }
    },
    {
      id: 'apesrene3-geothermal',
      type: 'text' as const,
      content: `
## 🌋 Geothermal Power

Earth's interior is hot, mainly from the decay of radioactive elements and heat left over from the planet's formation. **Geothermal energy** uses that stored heat. In a geothermal power plant:

1. Wells are drilled into a reservoir of hot water or steam deep underground.
2. Hot water or steam rises to the surface.
3. The steam spins a turbine connected to a generator.
4. The cooled water is usually pumped back underground to be reheated, which keeps the reservoir from running down.

| Plant type | How it works |
|---|---|
| **Dry steam** | Steam from the ground goes straight to the turbine (The Geysers in California) |
| **Flash steam** | Very hot water under high pressure "flashes" to steam when pressure drops at the surface |
| **Binary cycle** | Moderately hot water heats a second fluid with a lower boiling point, which vaporizes and drives the turbine; the water never touches the air |

**Where it works:** Hot rock lies close enough to the surface mainly near **tectonic plate boundaries** and **hot spots**: Iceland, the western United States, New Zealand, the Philippines, Indonesia, Kenya and Japan. Iceland makes nearly all its electricity from hydro and geothermal energy and heats most of its homes with geothermal water.

| Advantages | Disadvantages |
|---|---|
| Runs day and night in any weather, so it supplies steady power | Limited to geologically active areas |
| Very low $CO_{2}$ emissions and a small land footprint | Drilling deep wells is expensive, and exploration may find no usable heat |
| No fuel to buy or transport | Can release **hydrogen sulfide** ($H_{2}S$), a toxic gas with a rotten-egg smell |
| | A reservoir can cool or run short of water if heat is removed faster than it is replaced |

## Ground-Source Heat Pumps

A **ground-source (geothermal) heat pump** is a different technology that works almost anywhere. A few meters below the surface, the ground stays at a fairly constant, mild temperature (roughly 10–16 °C in much of the United States) all year.

- Fluid circulates through pipes buried in the ground.
- **In winter**, the fluid picks up heat from the relatively warm ground and the heat pump moves it into the house.
- **In summer**, the system runs in reverse, moving heat from the house into the cooler ground.

The pump runs on electricity, but it **moves** heat instead of making it, so it delivers several times more heat than the electrical energy it uses. Heat pumps cut a building's energy use; they do not generate electricity.
      `
    },
    {
      id: 'apesrene3-worked',
      type: 'text' as const,
      content: `
## Worked Example: Dam, Reservoir and Geothermal Plant (illustrative data)

**A. Yearly output of a dam.** A hydroelectric dam has a nameplate capacity of 1,000 MW and a capacity factor of 40%.

$$1{,}000\\ \\text{MW} \\times 8{,}760\\ \\text{h} \\times 0.40 = 3{,}504{,}000\\ \\text{MWh} = 3.504 \\times 10^{6}\\ \\text{MWh}$$

**B. Households served.** If an average household uses 10,000 kWh per year, convert MWh to kWh first (1 MWh = 1,000 kWh):

$$3.504 \\times 10^{6}\\ \\text{MWh} \\times 10^{3}\\ \\frac{\\text{kWh}}{\\text{MWh}} = 3.504 \\times 10^{9}\\ \\text{kWh}$$

$$\\frac{3.504 \\times 10^{9}\\ \\text{kWh}}{1 \\times 10^{4}\\ \\text{kWh per household}} = 350{,}400\\ \\text{households}$$

**C. Reservoir filling with sediment.** The reservoir holds $2.0 \\times 10^{9}$ m³ of water, and the river deposits $4.0 \\times 10^{6}$ m³ of sediment in it each year.

- Years to fill completely at this rate: $\\dfrac{2.0 \\times 10^{9}}{4.0 \\times 10^{6}} = 500$ years
- Percent of capacity lost after 50 years: $\\dfrac{50 \\times 4.0 \\times 10^{6}}{2.0 \\times 10^{9}} \\times 100 = 10\\%$

**D. Geothermal vs solar with the same nameplate.** A 50 MW geothermal plant with a 90% capacity factor, compared with a 50 MW solar farm with a 25% capacity factor:

$$\\text{Geothermal: } 50 \\times 8{,}760 \\times 0.90 = 394{,}200\\ \\text{MWh}$$
$$\\text{Solar: } 50 \\times 8{,}760 \\times 0.25 = 109{,}500\\ \\text{MWh}$$

The geothermal plant produces $394{,}200 \\div 109{,}500 \\approx 3.6$ times as much electricity from the same nameplate capacity, because it runs around the clock.
      `
    },
    {
      id: 'apesrene3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

(Illustrative data.) Enter numbers only.

1) A 200 MW run-of-river plant generates 700,800 MWh in one year. What is its capacity factor, in percent?

2) How many households using 10,000 kWh per year could that 700,800 MWh supply?

3) A home used 20,000 kWh per year for heating. After it installs a ground-source heat pump, heating uses 6,000 kWh per year. By what percent did heating energy use fall?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '70080', '70'],
        hint1: 'Maximum possible output is 200 MW × 8,760 h. Divide the actual output by it and multiply by 100.',
        hint2: 'Convert MWh to kWh by multiplying by 1,000, then divide by 10,000 kWh per household.',
        hint3: '(20,000 − 6,000) ÷ 20,000 × 100.',
        explanation: '1) 200 × 8,760 = 1,752,000 MWh possible, and 700,800 ÷ 1,752,000 × 100 = 40 percent. 2) 700,800 MWh = 700,800,000 kWh, and 700,800,000 ÷ 10,000 = 70,080 households. 3) 14,000 ÷ 20,000 × 100 = 70 percent.'
      }
    },
    {
      id: 'apesrene3-apconn',
      type: 'text' as const,
      content: `
## Hydro and Geothermal Side by Side

| Feature | Hydroelectric (storage dam) | Geothermal power |
|---|---|---|
| Energy source | Gravitational potential energy of raised water | Heat from Earth's interior |
| Output control | Gates adjust output within minutes | Steady output around the clock |
| Location limit | Rivers with enough flow and drop | Plate boundaries and hot spots |
| Main impacts | Habitat flooding, blocked fish, trapped sediment, methane | Hydrogen sulfide release, high drilling cost |

> 🔑 **AP Connection:** The CED lists the trade-offs for hydro as "no air pollution or waste" against "expensive construction" and "loss of or change in habitats." For geothermal it lists high cost, limited access in many parts of the world and the release of hydrogen sulfide. In a free response, pair each impact with a mechanism: "The dam traps sediment, so downstream deltas erode."
      `
    },
    {
      id: 'apesrene3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why is electricity from geothermal plants common in Iceland but rare in the eastern United States?',
            options: [
              'Iceland\'s cold air lets steam turbines run more efficiently',
              'Iceland sits on a plate boundary with hot rock near the surface',
              'Iceland\'s heavy rainfall supplies the water that turbines need',
              'Iceland\'s long summer days warm the groundwater to boiling'
            ],
            correctAnswer: 1,
            explanation: 'Iceland lies on the Mid-Atlantic Ridge, where magma heats rock close to the surface, so wells reach steam at practical depths. The eastern United States is far from any plate boundary, and neither cold air nor rainfall nor sunlight supplies the heat.'
          },
          {
            question: 'A family in Ohio installs a ground-source heat pump. How does the system warm their house in winter?',
            options: [
              'It pipes volcanic steam from a deep well to the radiators',
              'It moves heat from mild soil a few meters down into a home',
              'It burns natural gas underground and pipes the heat indoors',
              'It releases summer heat it stored in buried water batteries'
            ],
            correctAnswer: 1,
            explanation: 'Shallow ground stays mild all year, so in winter it is warmer than the outside air, and the heat pump moves that heat indoors. No volcanic heat or combustion is involved, which is why the system works in Ohio.'
          },
          {
            question: 'Residents near a geothermal plant notice a smell like rotten eggs. Which gas is most likely responsible?',
            options: [
              'Hydrogen sulfide',
              'Sulfur dioxide',
              'Nitrogen dioxide',
              'Carbon monoxide'
            ],
            correctAnswer: 0,
            explanation: 'Hydrogen sulfide rising with geothermal steam has a rotten-egg odor and is toxic at high concentrations. Carbon monoxide is odorless, and sulfur dioxide has a sharp, choking smell rather than a rotten-egg one.'
          },
          {
            question: 'A 50 MW geothermal plant runs at a 90% capacity factor. About how much electricity does it generate in a year?',
            options: [
              '438,000 MWh',
              '394,200 MWh',
              '16,425 MWh',
              '43,800 MWh'
            ],
            correctAnswer: 1,
            explanation: '50 MW × 8,760 h × 0.90 = 394,200 MWh. Leaving out the capacity factor gives 438,000 MWh, and multiplying by 365 days instead of 8,760 hours gives 16,425.'
          }
        ]
      }
    },
    {
      id: 'apesrene3-summary',
      type: 'text' as const,
      content: `
## Part 3 Summary

| Idea | Key fact |
|---|---|
| Hydro mechanism | Raised water → penstock → turbine → generator; power rises with drop height and flow |
| Dam types | Storage dam (controllable), run-of-river (follows flow), tidal barrage and tidal stream |
| Dam impacts | Flooding and displacement, blocked fish, trapped sediment, changed temperature and DO, methane |
| Geothermal power | Steam or hot water from wells spins turbines; dry steam, flash and binary plants |
| Geothermal limits | Plate boundaries and hot spots only; costly drilling; hydrogen sulfide |
| Heat pumps | Move heat to or from mild shallow ground; work almost anywhere; save energy, make no electricity |
| Key calculation | MW × 8,760 h × capacity factor = MWh per year |

**Next:** Part 4 covers the remaining CED sources: wind turbines, biomass and biofuels, and hydrogen fuel cells.
      `
    }
  ]
};
