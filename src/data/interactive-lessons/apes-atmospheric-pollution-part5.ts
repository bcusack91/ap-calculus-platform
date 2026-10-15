export const apesAtmosphericPollutionPart5Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo5-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 5 of 7 — Stratospheric Ozone Depletion and Common Misconceptions**

---

| Section |
|---------|
| 📖 Ultraviolet Radiation and the Ozone Layer |
| Measuring Ozone: Dobson Units |
| How Chlorine Destroys Ozone |
| The Antarctic Ozone Hole |
| Effects of Increased UV-B |
| The Montreal Protocol and Its Replacements |
| Common Misconceptions |

> 🔑 **Key Concept:** The ozone layer is "good up high": it absorbs most of the ultraviolet radiation that would damage living cells. Human-made chemicals released chlorine and bromine that destroy it, worst over Antarctica each spring. The Montreal Protocol cut those chemicals, and the layer is now slowly recovering (CED 9.1 and 9.2).
      `
    },
    {
      id: 'apesatmo5-uv',
      type: 'text' as const,
      content: `
## 📖 Ultraviolet Radiation and the Ozone Layer

The ozone layer is a region of the **stratosphere**, roughly 15 to 35 km up, where ozone is most concentrated. (The layers of the atmosphere are covered in the Earth Systems lessons.) The CED stresses that the layer was important to the **evolution of life on Earth** and remains essential to its health and survival, because it shields organisms from ultraviolet (UV) radiation.

| Type | Wavelength | What happens to it |
|---|---|---|
| **UV-A** | 315–400 nm | Mostly reaches the surface; ages skin |
| **UV-B** | 280–315 nm | **Mostly absorbed by ozone**; what gets through causes sunburn, skin cancer and cataracts |
| **UV-C** | 100–280 nm | Completely absorbed by oxygen and ozone high in the atmosphere |

Because UV-B is the type ozone controls, **UV-B is the radiation that increases when the ozone layer thins.**

### How ozone forms and breaks down naturally

**Step 1.** UV-C splits an oxygen molecule: $O_{2} + \\text{UV} \\rightarrow O + O$

**Step 2.** Each oxygen atom joins an oxygen molecule: $O + O_{2} \\rightarrow O_{3}$

**Step 3.** Ozone absorbs UV and splits: $O_{3} + \\text{UV} \\rightarrow O_{2} + O$

Step 3 is the shield: the UV energy is absorbed and turned into heat. Ozone is constantly made and broken in a natural balance, which keeps its amount steady.
      `
    },
    {
      id: 'apesatmo5-dobson',
      type: 'text' as const,
      content: `
## Measuring Ozone: Dobson Units

Total ozone above a point is measured in **Dobson units (DU)**. One DU is the amount of ozone that would form a layer **0.01 mm** thick if all of it were brought down to sea-level temperature and pressure.

| Measurement | Meaning |
|---|---|
| About 300 DU | Typical global average: all the ozone overhead would be a layer only about 3 mm thick |
| Below 220 DU | The threshold scientists use to define the **ozone hole** |

### Worked Example 1: Converting and Comparing

$$300\\ \\text{DU} \\times 0.01\\ \\frac{\\text{mm}}{\\text{DU}} = 3\\ \\text{mm}$$

A station over Antarctica records **120 DU** in October, compared with **300 DU** in the 1970s (illustrative data):

$$\\frac{120 - 300}{300} \\times 100 = -60\\%$$

The ozone column is **60 percent** thinner. The "hole" is a region of severe thinning, not a place with no ozone at all.
      `
    },
    {
      id: 'apesatmo5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'If the stratospheric ozone layer thins by 10 percent, the surface will receive noticeably more of which radiation?',
            options: [
              'UV-A',
              'UV-B',
              'UV-C',
              'Infrared'
            ],
            correctAnswer: 1,
            explanation: 'Ozone absorbs most UV-B, so thinning lets more of it through. Most UV-A passes through the layer anyway, and UV-C is still absorbed completely by oxygen and the remaining ozone.'
          },
          {
            question: 'An ozone column measures 250 DU. How thick would it be if all of the ozone were brought to sea-level temperature and pressure?',
            options: [
              '2.5 mm',
              '25 mm',
              '0.25 mm',
              '250 mm'
            ],
            correctAnswer: 0,
            explanation: 'Each Dobson unit is 0.01 mm, so 250 × 0.01 = 2.5 mm. The answers of 25 mm and 0.25 mm come from moving the decimal point the wrong number of places.'
          },
          {
            question: 'Why does the ozone layer protect organisms from ultraviolet radiation?',
            options: [
              'Ozone reflects ultraviolet rays back into space like a mirror',
              'Ozone absorbs ultraviolet energy as its molecules split apart',
              'Ozone turns ultraviolet rays into visible light at the surface',
              'Ozone traps ultraviolet rays in the upper troposphere as heat'
            ],
            correctAnswer: 1,
            explanation: 'Ozone molecules absorb UV energy, which splits them into an oxygen molecule and an oxygen atom; the energy ends up as heat in the stratosphere. The layer absorbs rather than reflects, and the process occurs in the stratosphere.'
          }
        ]
      }
    },
    {
      id: 'apesatmo5-chlorine',
      type: 'text' as const,
      content: `
## How Chlorine Destroys Ozone

**Chlorofluorocarbons (CFCs)** were used as refrigerants, air-conditioner coolants, aerosol propellants, foam-blowing agents and cleaning solvents. They are stable and nontoxic, which made them useful and also let them survive long enough to drift up into the stratosphere. There, UV-C breaks them apart and frees **chlorine atoms**.

### The catalytic cycle

**Step 1.** UV frees chlorine: $CCl_{2}F_{2} + \\text{UV} \\rightarrow Cl + CClF_{2}$

**Step 2.** Chlorine attacks ozone: $Cl + O_{3} \\rightarrow ClO + O_{2}$

**Step 3.** Chlorine is released again: $ClO + O \\rightarrow Cl + O_{2}$

**Net:** $O_{3} + O \\rightarrow 2O_{2}$

Chlorine appears at the start and the end, so it is a **catalyst**: it is not used up and repeats the cycle many times before it is finally locked into a less reactive compound. (Part 1 gave the scale of the damage per atom.)

**Bromine**, from **halons** in fire extinguishers and **methyl bromide** used as a soil fumigant, works the same way and destroys more ozone per atom than chlorine.

Natural chlorine from sea spray and most volcanic emissions is water-soluble and **rains out** of the lower atmosphere, so it rarely reaches the stratosphere. Insoluble, long-lived CFCs do.
      `
    },
    {
      id: 'apesatmo5-hole',
      type: 'text' as const,
      content: `
## The Antarctic Ozone Hole

The deepest losses happen over Antarctica in the **Southern Hemisphere spring**, roughly **September and October**. Four conditions line up:

| Stage | Season | What happens |
|---|---|---|
| 1. Polar vortex | Winter (June–August) | A ring of strong winds isolates extremely cold air over the continent |
| 2. Polar stratospheric clouds | Winter | Below about −78 °C, clouds of ice and frozen nitric acid form in the stratosphere; on the crystal surfaces, chlorine is converted from stable compounds into $Cl_{2}$ |
| 3. Sunlight returns | Early spring (September) | UV splits $Cl_{2}$ into chlorine atoms, and the catalytic cycle runs rapidly; the CED describes this as the melting of atmospheric ice crystals at the start of the Antarctic spring |
| 4. Recovery | Late spring and summer (November–December) | The vortex breaks down, ozone-rich air mixes in, and the hole closes until the next year |

The Arctic stratosphere is usually warmer and its vortex less stable, so Arctic losses are normally smaller and more variable.

## Effects of Increased UV-B

| Affected | Effect |
|---|---|
| Humans | Sunburn, **skin cancer** (including melanoma), **cataracts**, weakened immune response |
| Ocean food webs | Reduced productivity of **phytoplankton**, the base of marine food chains |
| Crops and plants | Damaged tissues and lower yields in sensitive species |
| Materials | Faster breakdown of plastics, paints and rubber |

The CED names skin cancer and cataracts as the human effects to know.
      `
    },
    {
      id: 'apesatmo5-montreal',
      type: 'text' as const,
      content: `
## The Montreal Protocol and Its Replacements

The **Montreal Protocol (1987)** committed nations to phase out CFCs, and later amendments added halons, methyl bromide and other ozone-depleting substances and sped up the schedule. Every member of the United Nations has ratified it.

| Generation | Example use | Ozone effect | Climate effect |
|---|---|---|---|
| **CFCs** | Old refrigerators, aerosol cans | High depletion | Strong greenhouse gases |
| **HCFCs** | Transitional replacement in air conditioners | Lower, but still deplete ozone; being phased out | Greenhouse gases |
| **HFCs** | Modern refrigerants | **No** ozone depletion (no chlorine) | Many are **potent greenhouse gases** |
| Next generation | HFOs, ammonia, $CO_{2}$, hydrocarbons | None | Much lower warming effect |

The **Kigali Amendment (2016)** added HFCs to the Montreal Protocol and set a schedule to phase down their use, for climate reasons rather than ozone ones.

### Is it working?

Concentrations of ozone-depleting chlorine in the stratosphere have been declining since peaking around the late 1990s, and the ozone layer is slowly recovering. Because CFCs persist for decades, full recovery over Antarctica is projected around the 2060s, later than over the rest of the globe.

### Worked Example 2: A Recovery Trend (illustrative data)

| Year | Minimum October ozone over Antarctica (DU) |
|---|---|
| 1980 | 200 |
| 2000 | 100 |
| 2020 | 115 |

From 1980 to 2000: $\\dfrac{100 - 200}{200} \\times 100 = -50\\%$

From 2000 to 2020: $\\dfrac{115 - 100}{100} \\times 100 = +15\\%$

The decline has stopped and reversed slowly; year-to-year weather in the polar vortex makes individual years noisy, so look at multi-year trends.
      `
    },
    {
      id: 'apesatmo5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) An ozone column measures 320 DU. How many millimeters thick would it be at sea-level temperature and pressure?

2) A station's October ozone falls from 280 DU to 140 DU. What is the percent decrease?

3) In a later year the same station records 161 DU, up from 140 DU. What is the percent increase?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['3.2', '50', '15'],
        hint1: 'Multiply by 0.01 mm per Dobson unit.',
        hint2: '(140 − 280) ÷ 280 × 100, then report the size of the decrease.',
        hint3: '(161 − 140) ÷ 140 × 100.',
        explanation: '1) 320 × 0.01 = 3.2 mm. 2) −140 ÷ 280 × 100 = −50 percent, a 50 percent decrease. 3) 21 ÷ 140 × 100 = 15 percent.'
      }
    },
    {
      id: 'apesatmo5-misconceptions',
      type: 'text' as const,
      content: `
## Common Misconceptions

| Misconception | Correction |
|---|---|
| "The ozone hole causes global warming." | They are separate problems. Ozone loss lets in more **UV-B**; global warming comes from greenhouse gases trapping infrared radiation (covered in the Atmosphere & Climate lessons). CFCs and HFCs happen to be greenhouse gases too, which is the main link. |
| "The ozone hole is a hole with no ozone." | It is a region where the column falls **below 220 DU**, not a gap with zero ozone. |
| "Smog ozone near the ground will drift up and refill the layer." | Ground-level ozone reacts and breaks down within days to weeks, long before it could reach the stratosphere, and the amounts are tiny by comparison. |
| "CFCs are too heavy to reach the stratosphere." | Winds mix the lower atmosphere thoroughly; CFCs last long enough to be carried upward over several years. |
| "The ozone hole is over the North Pole all year." | It forms over **Antarctica** in the Southern Hemisphere **spring** and closes by early summer. |
| "Volcanoes cause most ozone loss." | Most volcanic chlorine rains out first; the chlorine in the stratosphere is mostly from human-made compounds. |
| "HFCs are safe, so the problem is solved." | HFCs do not deplete ozone, but many are potent greenhouse gases, which is why the Kigali Amendment phases them down. |

> 🔑 **AP Connection:** Keep the two ozones apart on free-response questions: **ground-level ozone** is a secondary pollutant from $NO_{x}$ and VOCs (Part 2); **stratospheric ozone** is the UV shield destroyed by CFCs. Name the altitude every time you write "ozone."
      `
    },
    {
      id: 'apesatmo5-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why can a single chlorine atom in the stratosphere destroy a great many ozone molecules?',
            options: [
              'It is set free again at the end of each cycle and goes on to attack another',
              'It bonds permanently to oxygen atoms and blocks the formation of new ozone',
              'It absorbs the UV-C radiation that would otherwise split oxygen molecules',
              'It reacts with nitrogen gas to form compounds that break down ozone'
            ],
            correctAnswer: 0,
            explanation: 'In the cycle, chlorine reacts with ozone to form chlorine monoxide, which then reacts with an oxygen atom and releases the chlorine again. Because it is regenerated, chlorine acts as a catalyst.'
          },
          {
            question: 'Why does the Antarctic ozone hole open in September and October instead of in the dark of midwinter?',
            options: [
              'Returning sunlight frees active chlorine',
              'Southern winter storms carry more CFCs south',
              'Summer heat melts the ice sheet beneath the hole',
              'Antarctic volcanoes erupt most often in spring'
            ],
            correctAnswer: 0,
            explanation: 'During winter, chlorine is converted into a form that sunlight can split on the surfaces of polar stratospheric clouds. When sunlight returns in spring, it releases chlorine atoms that destroy ozone rapidly.'
          },
          {
            question: 'Many air conditioners switched to HFCs, which contain no chlorine. Why did the 2016 Kigali Amendment still require HFC use to be phased down?',
            options: [
              'They absorb infrared heat strongly',
              'They destroy ozone faster than CFCs do',
              'They react with VOCs to form urban smog',
              'They release chlorine when exposed to UV'
            ],
            correctAnswer: 0,
            explanation: 'HFCs do not deplete ozone, but many are potent greenhouse gases, so the phase-down protects the climate. They contain no chlorine to release.'
          }
        ]
      }
    },
    {
      id: 'apesatmo5-summary',
      type: 'text' as const,
      content: `
## Part 5 Summary

| Idea | Key fact |
|---|---|
| UV types | UV-A mostly reaches the surface; UV-B mostly absorbed by ozone; UV-C fully absorbed |
| Natural cycle | $O_{2}$ + UV → 2O; O + $O_{2}$ → $O_{3}$; $O_{3}$ + UV → $O_{2}$ + O |
| Dobson units | 1 DU = 0.01 mm; about 300 DU average; hole = below 220 DU |
| Chlorine cycle | Cl + $O_{3}$ → ClO + $O_{2}$; ClO + O → Cl + $O_{2}$; chlorine is a catalyst |
| Antarctic hole | Polar vortex + polar stratospheric clouds + returning spring sunlight (September–October) |
| UV-B effects | Skin cancer, cataracts, immune suppression, reduced phytoplankton and crop yields |
| Policy | Montreal Protocol (1987) phased out CFCs; HCFCs transitional; HFCs ozone-safe but greenhouse gases; Kigali Amendment (2016) |
| Status | Layer slowly recovering; Antarctic recovery projected around the 2060s |

**Next:** Part 6 applies everything so far to AP-style free-response and multiple-choice questions.
      `
    }
  ]
};
