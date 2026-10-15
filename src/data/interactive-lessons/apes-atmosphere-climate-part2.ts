export const apesAtmosphereClimatePart2Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo2-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 2 of 7 — Greenhouse Gases in Depth**

---

| Section |
|---------|
| 📖 Earth's Energy Budget |
| Why Some Gases Absorb Infrared |
| The Main Greenhouse Gases |
| Global Warming Potential and Lifetime |
| $CO_{2}$-Equivalent Calculations |

> 🔑 **Key Concept:** Part 1 listed the steps of the greenhouse effect. This part explains **why** only certain gases trap heat, where each one comes from, and how to compare them with **global warming potential (GWP)**, the number the CED uses to rank greenhouse gases (CED 9.3, 9.4).
      `
    },
    {
      id: 'apesatmo2-budget',
      type: 'text' as const,
      content: `
## 📖 Earth's Energy Budget

Averaged over the whole globe, day and night, about **340 W/m²** (watts per square meter) of sunlight arrives at the top of the atmosphere. About **30%** of it is reflected straight back to space by clouds, ice, snow and other bright surfaces. That reflected fraction is Earth's **albedo** (about 0.30).

### Worked Example: Energy Absorbed

$$\\text{Absorbed} = 340\\ \\text{W/m}^{2} \\times (1 - 0.30) = 340 \\times 0.70 = 238\\ \\text{W/m}^{2}$$

To keep a steady temperature, Earth must send about the same **238 W/m²** back to space as **infrared (longwave) radiation**.

| Flow | Type of radiation | Approximate size |
|---|---|---|
| Sunlight arriving | Shortwave (visible, some UV and near-infrared) | 340 W/m² |
| Reflected by clouds, ice and surfaces | Shortwave | About 100 W/m² |
| Absorbed by surface and atmosphere | Shortwave | About 240 W/m² |
| Emitted by the warm surface | Longwave (infrared) | About 400 W/m² |
| Escaping to space from the top of the atmosphere | Longwave (infrared) | About 240 W/m² |

The surface gives off far more infrared (about 400 W/m²) than finally escapes (about 240 W/m²). The difference is absorbed by greenhouse gases and clouds and **re-emitted in all directions**, including back down to the surface. That downward "back radiation" is the greenhouse effect, and it is why Earth averages about +15°C rather than about −18°C.

### The current imbalance

Adding greenhouse gases makes it harder for infrared to escape, so Earth now absorbs slightly **more** energy than it emits, a little under 1 W/m² on average. That small surplus, every second over the whole planet, is what is warming the land, air and especially the ocean.

## Why Some Gases Absorb Infrared

A molecule absorbs infrared only if its bonds can **stretch or bend in a way that shifts its electric charge**. In practice:

| Absorbs infrared (greenhouse gas) | Does not absorb infrared |
|---|---|
| Molecules with **three or more atoms**: $CO_{2}$, $H_{2}O$, $CH_{4}$, $N_{2}O$, ozone $(O_{3})$, CFCs | Molecules of **two identical atoms**: $N_{2}$, $O_{2}$ |
| | Single atoms: argon (Ar) |

So about **99% of dry air** ($N_{2}$, $O_{2}$ and Ar) is transparent to infrared. The greenhouse effect comes entirely from gases measured in parts per million or less, which is why small changes in their amounts matter so much.

The layers of the atmosphere and the ppm-to-percent conversion are covered in Earth Systems, Part 3.
      `
    },
    {
      id: 'apesatmo2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Nitrogen and oxygen make up about 99 percent of dry air, yet they add almost nothing to the greenhouse effect. Why?',
            options: [
              'They absorb most incoming sunlight high above the surface',
              'Their paired identical atoms cannot absorb infrared',
              'They rise above the troposphere, where heat is not trapped',
              'They react with water vapor and leave the air within days'
            ],
            correctAnswer: 1,
            explanation: 'A molecule of two identical atoms cannot change its charge distribution when it vibrates, so it does not absorb infrared. Nitrogen and oxygen stay well mixed in the lower atmosphere and are long-lived, so being scarce or short-lived is not the reason.'
          },
          {
            question: 'About 340 W/m² of sunlight reaches the top of the atmosphere on average, and Earth\'s albedo is about 0.30. About how much solar energy does the Earth system absorb?',
            options: [
              'About 102 W/m²',
              'About 238 W/m²',
              'About 340 W/m²',
              'About 442 W/m²'
            ],
            correctAnswer: 1,
            explanation: 'Seventy percent is absorbed: 340 × 0.70 = 238 W/m². The value 102 W/m² is the reflected part, and 442 W/m² wrongly adds the reflected part instead of subtracting it.'
          },
          {
            question: 'A power plant\'s cooling tower releases large amounts of water vapor. Why does this have little lasting effect on the global climate?',
            options: [
              'Its vapor forms low clouds whose cooling cancels its warming',
              'The vapor absorbs no infrared, so it cannot hold back heat',
              'It rains out within days, and air temperature sets the total',
              'The vapor rises into the stratosphere and blocks sunlight'
            ],
            correctAnswer: 2,
            explanation: 'Water vapor stays in the air only about nine days, and the amount the atmosphere holds is set by its temperature, so extra vapor quickly rains out. Water vapor does absorb infrared; it acts as a feedback that amplifies warming rather than as a driver.'
          }
        ]
      }
    },
    {
      id: 'apesatmo2-gases',
      type: 'text' as const,
      content: `
## The Main Greenhouse Gases

| Gas | Main human sources | Pre-industrial → today | Lifetime in the air | GWP (100 yr) |
|---|---|---|---|---|
| **Carbon dioxide $(CO_{2})$** | Burning fossil fuels, deforestation, cement making | About 280 ppm → above 420 ppm | No single value; part persists for centuries to millennia | 1 (the reference) |
| **Methane $(CH_{4})$** | Livestock digestion, rice paddies, landfills, leaks from natural gas, oil and coal | About 0.7 ppm → about 1.9 ppm | About a decade | About 30 (about 80 over 20 years) |
| **Nitrous oxide $(N_{2}O)$** | Nitrogen fertilizer and manure, fossil fuel combustion, some industry | About 0.27 ppm → about 0.33 ppm | More than a century | About 270 |
| **CFCs and HFCs** | Refrigerants, air conditioners, foams, older aerosol sprays | None → trace (parts per trillion) | Decades to centuries | Thousands |
| **Water vapor $(H_{2}O)$** | Evaporation (set by temperature, not directly by emissions) | Varies, up to about 4% | About 9 days | Not assigned |

Natural sources matter too: **wetlands** are the largest natural source of methane, and soils and the ocean release nitrous oxide. **Tropospheric ozone**, the smog pollutant covered in the Atmospheric Pollution lessons, is also a greenhouse gas.

## Global Warming Potential and Lifetime

**Global warming potential** compares how much heat **1 kg** of a gas traps over a set time, usually 100 years, with how much **1 kg of $CO_{2}$** traps over the same time. $CO_{2}$ is the reference, so its GWP is 1.

> 🔑 **AP Connection:** The CED ranks the gases by GWP: **CFCs highest, then nitrous oxide, then methane**, with $CO_{2}$ = 1 as the reference.

Lifetime shapes GWP. Methane traps heat strongly, but most of it breaks down within about a decade. Over a 20-year window it is still in the air for much of the period, so its GWP is about 80. Over 100 years its effect is averaged over a long stretch when most of it is gone, so its GWP falls to about 30.

### Water vapor: a feedback, not a driver

Water vapor is the most abundant greenhouse gas and causes the largest share of the **natural** greenhouse effect. But the CED notes it does not drive climate change, because its **residence time is short**: whatever we add rains out within days. The amount in the air rises only when the air warms (warm air holds more vapor). That makes water vapor a **positive feedback** (Part 1) that amplifies warming started by longer-lived gases.

### Why $CO_{2}$ still matters most

$CO_{2}$ has the lowest GWP of the major gases, yet it causes most human-driven warming because people emit **enormous masses** of it and part of it stays for centuries. Weighted by 100-year GWP, $CO_{2}$ was about **three-quarters** of human greenhouse gas emissions in 2019, with methane about a fifth and nitrous oxide and fluorinated gases making up the rest (IPCC AR6).
      `
    },
    {
      id: 'apesatmo2-co2eq',
      type: 'text' as const,
      content: `
## $CO_{2}$-Equivalent Calculations

To add different gases together, convert each to **$CO_{2}$-equivalent** ($CO_{2}$-eq):

$$\\text{CO}_{2}\\text{-eq} = \\text{mass of gas} \\times \\text{GWP}$$

Use the 100-year GWP unless a question says otherwise, and keep the mass units the same on both sides.

### Worked Example 1: A Landfill

A landfill releases **500 t of methane** per year (illustrative data).

$$100\\text{-yr: } 500\\ \\text{t} \\times 30 = 15{,}000\\ \\text{t CO}_{2}\\text{-eq}$$
$$20\\text{-yr: } 500\\ \\text{t} \\times 80 = 40{,}000\\ \\text{t CO}_{2}\\text{-eq}$$

The choice of time horizon changes the answer by more than double, so always state which GWP you used.

### Worked Example 2: Adding Up a Farm (illustrative data)

| Gas | Mass per year | GWP (100 yr) | $CO_{2}$-eq | Share |
|---|---|---|---|---|
| $CO_{2}$ (fuel for machinery) | 2,000 t | 1 | 2,000 t | 44% |
| $CH_{4}$ (cattle) | 40 t | 30 | 1,200 t | 26% |
| $N_{2}O$ (fertilizer) | 5 t | 270 | 1,350 t | 30% |
| **Total** | 2,045 t | | **4,550 t** | 100% |

Methane and nitrous oxide are only 45 t of the farm's 2,045 t of gas, about 2% by mass, but they are **56%** of its climate impact. Shares: $2{,}000 \\div 4{,}550 \\times 100 \\approx 44\\%$, and so on.

### Worked Example 3: A Refrigerant Leak

A supermarket's cooling system leaks **12 kg** of an HFC with a GWP of about 1,500.

$$12\\ \\text{kg} \\times 1{,}500 = 18{,}000\\ \\text{kg} = 18\\ \\text{t CO}_{2}\\text{-eq}$$

Just 12 kg of this gas matches the $CO_{2}$ from burning about 2,000 gallons of gasoline (at about 8.9 kg of $CO_{2}$ per gallon: $18{,}000 \\div 8.9 \\approx 2{,}000$).

### Worked Example 4: Percent Change in Concentration

Methane rose from about 0.7 ppm to about 1.9 ppm:

$$\\frac{1.9 - 0.7}{0.7} \\times 100 \\approx 171\\%$$

Methane has more than doubled, a much larger percent rise than $CO_{2}$'s 50% (280 → 420 ppm, worked in Biogeochemical Cycles, Part 2).
      `
    },
    {
      id: 'apesatmo2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. Use 100-year GWPs: methane 30, nitrous oxide 270. (Illustrative data.)

1) A rice-growing region emits 200 t of methane per year. How many tonnes of $CO_{2}$-eq is that?

2) A fertilized field releases 3 t of nitrous oxide per year. How many tonnes of $CO_{2}$-eq is that?

3) A town emits 900 t of $CO_{2}$ and 10 t of methane per year. What percent of its $CO_{2}$-eq total comes from methane?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['6000', '810', '25'],
        hint1: 'Multiply the mass by the GWP.',
        hint2: '3 × 270.',
        hint3: 'Methane: 10 × 30 = 300 t. Total = 900 + 300. Then divide methane by the total.',
        explanation: '1) 200 × 30 = 6,000 t CO2-eq. 2) 3 × 270 = 810 t CO2-eq. 3) 300 ÷ 1,200 × 100 = 25 percent, even though methane is only about 1 percent of the town\'s emissions by mass.'
      }
    },
    {
      id: 'apesatmo2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A landfill collects its methane and burns it to generate electricity, turning the methane into $CO_{2}$. Why does this lower the landfill\'s climate impact?',
            options: [
              'Burning the gas removes carbon from the air permanently',
              'The $CO_{2}$ formed leaves the air faster than methane does',
              'Burning the gas makes water vapor that cools the planet',
              '$CO_{2}$ traps far less heat per kilogram than methane'
            ],
            correctAnswer: 3,
            explanation: 'Each kilogram of methane traps about 30 times as much heat as a kilogram of carbon dioxide over 100 years, so converting it cuts the warming effect sharply. The carbon dioxide formed lasts longer than methane, not shorter, and the carbon is not removed.'
          },
          {
            question: 'Methane\'s GWP is about 80 over 20 years but about 30 over 100 years. What explains the difference?',
            options: [
              'Methane absorbs less infrared as the climate grows warmer',
              'Most methane breaks down within about a decade of its release',
              'Carbon dioxide slowly loses its ability to absorb infrared',
              'Methane is gradually converted into nitrous oxide in the air'
            ],
            correctAnswer: 1,
            explanation: 'GWP compares heat trapped over the chosen period. Methane breaks down in about a decade, so averaged over a century its effect per kilogram is smaller than over 20 years. Carbon dioxide\'s heat-trapping ability does not fade, and methane does not become nitrous oxide.'
          },
          {
            question: 'According to the CED, which list orders these gases from highest to lowest global warming potential?',
            options: [
              'Methane, CFCs, nitrous oxide, carbon dioxide',
              'CFCs, methane, nitrous oxide, carbon dioxide',
              'CFCs, nitrous oxide, methane, carbon dioxide',
              'Nitrous oxide, CFCs, methane, carbon dioxide'
            ],
            correctAnswer: 2,
            explanation: 'CFCs have GWPs in the thousands, nitrous oxide about 270 and methane about 30, with carbon dioxide set at 1. Placing methane above nitrous oxide is the most common slip.'
          }
        ]
      }
    },
    {
      id: 'apesatmo2-summary',
      type: 'text' as const,
      content: `
## Part 2 Summary

| Idea | Key fact |
|---|---|
| Energy budget | 340 W/m² in; about 30% reflected (albedo); about 240 W/m² absorbed and re-emitted as infrared |
| Greenhouse effect | Surface emits about 400 W/m², only about 240 escapes; gases re-emit infrared back down |
| Which gases absorb | Three or more atoms ($CO_{2}$, $H_{2}O$, $CH_{4}$, $N_{2}O$, $O_{3}$, CFCs); not $N_{2}$, $O_{2}$ or Ar |
| GWP | Heat trapped by 1 kg relative to 1 kg of $CO_{2}$; CFCs > $N_{2}O$ (about 270) > $CH_{4}$ (about 30) > $CO_{2}$ (1) |
| Lifetime | Methane about a decade; $N_{2}O$ more than a century; part of $CO_{2}$ for centuries |
| Water vapor | Largest natural effect, but a feedback, not a driver (residence time about 9 days) |
| $CO_{2}$-eq | Mass × GWP; state the time horizon |

**Next:** Part 3 follows the extra heat into the real world: sea-level rise, extreme weather, shifting species ranges and the people affected.
      `
    }
  ]
};
