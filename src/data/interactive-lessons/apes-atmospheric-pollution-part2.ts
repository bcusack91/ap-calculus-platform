export const apesAtmosphericPollutionPart2Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo2-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 2 of 7 — Photochemical Smog and Thermal Inversions in Depth**

---

| Section |
|---------|
| 📖 The Chemistry of Photochemical Smog |
| A Day in the Life of Smog |
| Concentration Units: ppm and ppb |
| Thermal Inversions |
| Valleys, Basins and Deadly Episodes |

> 🔑 **Key Concept:** Part 1 named the two kinds of smog and defined a thermal inversion. This part explains the reactions that build ground-level ozone, why smog ingredients rise and fall on a predictable daily schedule, and how an inversion turns ordinary emissions into a health emergency (CED 7.2 and 7.3).
      `
    },
    {
      id: 'apesatmo2-chemistry',
      type: 'text' as const,
      content: `
## 📖 The Chemistry of Photochemical Smog

Photochemical smog forms when **nitrogen oxides** $(NO_{x})$ and **volatile organic compounds** (VOCs) react in the presence of **sunlight** and **heat**. The main product is ground-level **ozone** $(O_{3})$, a secondary pollutant.

| Ingredient | Where it comes from |
|---|---|
| $NO_{x}$ | High-temperature combustion in vehicle engines and power plants, where $N_{2}$ and $O_{2}$ from the air combine |
| VOCs | Gasoline vapor, solvents, paints and cleaners; trees are a large **natural** source |
| Sunlight | Supplies the energy that splits $NO_{2}$ |
| Heat | Speeds up the reactions and the evaporation of VOCs |

### The reactions, step by step

**Step 1.** Engines make nitric oxide: $N_{2} + O_{2} \\rightarrow 2NO$

**Step 2.** In the air, NO is oxidized to nitrogen dioxide, $NO_{2}$, the brown gas that tints smog.

**Step 3.** Sunlight splits $NO_{2}$ (photolysis): $NO_{2} + \\text{sunlight} \\rightarrow NO + O$

**Step 4.** The free oxygen atom joins an oxygen molecule: $O + O_{2} \\rightarrow O_{3}$

**Step 5 (the brake).** Fresh NO destroys ozone again: $NO + O_{3} \\rightarrow NO_{2} + O_{2}$

With $NO_{x}$ alone, Steps 3–5 run in a loop: ozone is made and destroyed at about the same rate, so it stays low.

### Why VOCs matter

VOCs break down in sunlight into reactive fragments that convert NO back into $NO_{2}$ **without using up ozone**. That bypasses the brake in Step 5, so ozone builds up hour after hour. The same reactions produce **peroxyacyl nitrates (PANs)** and aldehydes, which sting the eyes and damage plant leaves.

### Reducing photochemical smog

Because smog needs both ingredients, the CED's solution is to **cut $NO_{x}$ and VOC emissions**:

| Target | Examples |
|---|---|
| $NO_{x}$ | Catalytic converters, cleaner engines, fewer vehicle miles (public transit, carpooling) |
| VOCs | Vapor recovery nozzles at gas pumps, low-VOC paints and solvents |
      `
    },
    {
      id: 'apesatmo2-daily',
      type: 'text' as const,
      content: `
## A Day in the Life of Smog

On a sunny summer weekday, a city's monitors record a predictable sequence (illustrative data, ppb = parts per billion):

| Time | NO (ppb) | $NO_{2}$ (ppb) | $O_{3}$ (ppb) |
|---|---|---|---|
| 5 am | 10 | 15 | 15 |
| 7 am | 70 | 30 | 10 |
| 9 am | 40 | 65 | 25 |
| 11 am | 15 | 45 | 60 |
| 1 pm | 8 | 25 | 90 |
| 3 pm | 6 | 20 | 100 |
| 5 pm | 25 | 30 | 80 |
| 7 pm | 30 | 35 | 45 |
| 9 pm | 20 | 30 | 25 |

### Reading the curve

| Peak | When | Why |
|---|---|---|
| NO | 7 am | Morning rush hour; NO is emitted directly from tailpipes |
| $NO_{2}$ | 9 am | NO is oxidized to $NO_{2}$ over the next hour or two |
| $O_{3}$ | 3 pm | Sunlight has been splitting $NO_{2}$ for hours, and afternoon heat is greatest |

Ozone falls after sunset because photolysis stops and evening traffic adds NO, which consumes ozone (Step 5). This is why the CED says $NO_{x}$ is produced early in the day while ozone peaks in the **afternoon** and is higher in **summer**.

### Worked Example 1: Percent Change

$$\\text{Percent change} = \\frac{\\text{new} - \\text{old}}{\\text{old}} \\times 100$$

Ozone from 7 am to 3 pm:

$$\\frac{100 - 10}{10} \\times 100 = 900\\%\\ \\text{increase}$$

Ozone from 3 pm to 9 pm:

$$\\frac{25 - 100}{100} \\times 100 = -75\\%,\\ \\text{a 75\\% decrease}$$
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
            question: 'A city has heavy $NO_{x}$ emissions but very few VOC sources. Why does its ground-level ozone stay relatively low?',
            options: [
              'Nitrogen dioxide cannot absorb sunlight unless VOCs are also present in the air',
              'Free oxygen atoms bond with nitrogen gas instead of with oxygen molecules',
              'NO made by sunlight reacts with new ozone and turns back into nitrogen dioxide',
              'Nitrogen oxides fall out as acid rain before any ozone has a chance to form'
            ],
            correctAnswer: 2,
            explanation: 'Without VOCs, the NO released when sunlight splits nitrogen dioxide reacts with ozone and destroys it, so production and destruction stay balanced. Nitrogen dioxide absorbs sunlight on its own; VOCs matter because they convert NO back to nitrogen dioxide without using up ozone.'
          },
          {
            question: 'In the illustrative data, why does nitrogen dioxide peak about two hours after nitric oxide?',
            options: [
              'Rush-hour NO is gradually oxidized to nitrogen dioxide in air',
              'Afternoon sunlight splits ozone into nitrogen dioxide',
              'Power plants switch on only after rush hour has ended',
              'Trees release nitrogen dioxide once the air has warmed'
            ],
            correctAnswer: 0,
            explanation: 'Tailpipes emit mostly NO, which is then oxidized to nitrogen dioxide over the next hour or two. Trees are a natural source of VOCs, not nitrogen dioxide, and ozone is a product of the cycle rather than a source of nitrogen dioxide.'
          },
          {
            question: 'Ozone at a monitor falls from 100 ppb at 3 pm to 25 ppb at 9 pm. What is the percent change?',
            options: [
              'A 75 percent decrease',
              'A 300 percent decrease',
              'A 25 percent decrease',
              'A 400 percent decrease'
            ],
            correctAnswer: 0,
            explanation: '(25 − 100) ÷ 100 × 100 = −75 percent. Dividing by the final value instead of the starting value gives 300 percent, which is the most common error.'
          }
        ]
      }
    },
    {
      id: 'apesatmo2-units',
      type: 'text' as const,
      content: `
## Concentration Units: ppm and ppb

Gas pollutants are reported as a fraction of air molecules (by volume):

| Unit | Meaning | Conversion |
|---|---|---|
| ppm | parts per million | 1 ppm = 1,000 ppb |
| ppb | parts per billion | 1 ppb = 0.001 ppm |
| µg/m³ | micrograms per cubic meter | A **mass** per volume, used for particulate matter |

(Converting ppm to percent is covered in the Earth Systems lessons.)

### Worked Example 2: Comparing With a Standard

The EPA's 8-hour ozone standard, set in 2015, is **0.070 ppm**.

$$0.070\\ \\text{ppm} \\times 1{,}000\\ \\frac{\\text{ppb}}{\\text{ppm}} = 70\\ \\text{ppb}$$

The standard applies to an **8-hour average**, so compare an average, not a single peak. Using the four readings from 11 am to 5 pm in the table as an estimate:

$$\\frac{60 + 90 + 100 + 80}{4} = 82.5\\ \\text{ppb}$$

$$\\frac{82.5 - 70}{70} \\times 100 \\approx 18\\%\\ \\text{above the standard}$$

> 🔑 **AP Connection:** Free-response questions often give one value in ppm and another in ppb. Convert both to the same unit **before** comparing or calculating, and write the units on every line.
      `
    },
    {
      id: 'apesatmo2-inversions',
      type: 'text' as const,
      content: `
## Thermal Inversions

Normally, air temperature **decreases** with altitude in the troposphere (the rate is covered in the Earth Systems lessons). Warm surface air is less dense than the air above it, so it rises and carries pollutants up and away.

In a **thermal inversion**, the normal gradient is reversed: a layer of **warmer air sits above cooler surface air**. The cool, dense surface air cannot rise through the warm layer, which acts like a lid. Smog and particulates are trapped close to the ground, where people breathe them.

### Reading a temperature profile (illustrative data)

| Altitude (m) | Normal afternoon (°C) | Inversion morning (°C) |
|---|---|---|
| 0 | 20 | 2 |
| 250 | 18 | 5 |
| 500 | 16 | 8 |
| 750 | 14 | 7 |
| 1,000 | 12 | 5 |

On the inversion morning, temperature **rises** from the ground to 500 m, then falls again. The **top of the inversion** is about 500 m, so pollutants emitted at ground level are confined below it.

### What causes inversions

| Type | How it forms | Typical setting |
|---|---|---|
| Radiation inversion | On clear, calm nights the ground loses heat quickly and chills the air touching it | Winter mornings; breaks up as the sun warms the ground |
| Valley inversion | Cold, dense air drains downslope and pools in the valley floor; ridges block wind | Mountain valleys and basins |
| Subsidence inversion | Air sinking in a high-pressure system warms as it is compressed, forming a warm layer aloft | Coastal Southern California, often for days |

### Worked Example 3: Mixing Height

A city releases the same amount of pollution each morning. On a normal day it mixes through **1,500 m** of air; under an inversion, only **300 m** (illustrative data). The same mass in a layer one-fifth as deep is five times as concentrated:

$$\\frac{1{,}500\\ \\text{m}}{300\\ \\text{m}} = 5 \\quad\\Rightarrow\\quad \\text{concentration about } 5\\times\\ \\text{higher}$$
      `
    },
    {
      id: 'apesatmo2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A monitor reports ozone at 0.085 ppm. What is that in ppb?

2) Ozone rises from 20 ppb at 8 am to 90 ppb at 2 pm. What is the percent increase?

3) An inversion lowers the mixing height from 1,200 m to 300 m with no change in emissions. How many times higher is the pollutant concentration?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['85', '350', '4'],
        hint1: 'Multiply ppm by 1,000.',
        hint2: '(90 − 20) ÷ 20 × 100.',
        hint3: 'Divide the normal mixing height by the inversion mixing height.',
        explanation: '1) 0.085 × 1,000 = 85 ppb. 2) 70 ÷ 20 × 100 = 350 percent. 3) 1,200 ÷ 300 = 4, so the same emissions are about 4 times as concentrated.'
      }
    },
    {
      id: 'apesatmo2-cases',
      type: 'text' as const,
      content: `
## Valleys, Basins and Deadly Episodes

| Place | What happened |
|---|---|
| Donora, Pennsylvania, October 1948 | An inversion over a river valley trapped emissions from zinc and steel works for about five days. About 20 people died and thousands became ill. |
| London, December 1952 | Cold, still air under an inversion trapped coal smoke and $SO_{2}$ for five days (the "Great Smog"). Thousands died, and the United Kingdom passed its Clean Air Act in 1956. |
| Los Angeles basin | Mountains on three sides, frequent subsidence inversions, strong sunshine and heavy traffic make it the classic photochemical smog city. |
| Salt Lake Valley, Utah | Winter valley inversions can persist for days, trapping fine particulates from vehicles and industry. |

Notice the pattern: the **emissions** come from people, but **geography and weather** decide whether they disperse or accumulate. Donora and London were industrial smog trapped by inversions; Los Angeles is photochemical smog trapped by an inversion.

### Health effects of photochemical smog

Ozone and PANs irritate the eyes, nose and throat, inflame the airways, reduce lung function and worsen **asthma** and other respiratory disease. Ozone also damages crops and forest leaves. Children, older adults, people with asthma and people working or exercising outdoors in the afternoon are most at risk.

> 🔑 **AP Connection:** To **explain** why pollution worsens during an inversion, give the mechanism: the warm layer aloft prevents vertical mixing, so pollutants accumulate near the ground. Saying only "the inversion traps smog" usually earns no point.
      `
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
            question: 'A city has identical traffic on a hot, clear July day and a cool, overcast July day. Afternoon ozone is far lower on the overcast day. What is the best explanation?',
            options: [
              'Clouds absorb nitrogen oxides from the air',
              'Less sunlight reaches nitrogen dioxide to split it',
              'Overcast skies lower the number of VOC molecules',
              'Cool air converts ozone into stratospheric ozone'
            ],
            correctAnswer: 1,
            explanation: 'Ozone forms when sunlight splits nitrogen dioxide and the freed oxygen atom joins an oxygen molecule. Less sunlight and lower temperatures slow that reaction, even with the same emissions.'
          },
          {
            question: 'Which set of conditions is most likely to produce a ground-level inversion in a mountain valley?',
            options: [
              'A windy, rainy afternoon in spring',
              'A clear, calm night in winter',
              'A hot, breezy afternoon in summer',
              'A stormy, overcast night in autumn'
            ],
            correctAnswer: 1,
            explanation: 'On clear, calm nights the ground radiates heat away and chills the air touching it, and cold air drains into the valley floor. Wind, storms and afternoon heating all mix the air and prevent an inversion.'
          },
          {
            question: 'A regional agency wants to lower the number of summer days that exceed the ozone standard. Which plan targets the cause most directly?',
            options: [
              'Building taller smokestacks on coal plants so that sulfur dioxide disperses',
              'Requiring vapor recovery nozzles and cutting vehicle nitrogen oxide output',
              'Banning chlorofluorocarbons in new refrigerators and air conditioners',
              'Adding crushed limestone to nearby lakes and reservoirs every year'
            ],
            correctAnswer: 1,
            explanation: 'Ground-level ozone is a secondary pollutant made from VOCs and nitrogen oxides, so cutting both precursors lowers ozone. Chlorofluorocarbons affect stratospheric ozone, and limestone treats acidified lakes.'
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
| Smog ingredients | $NO_{x}$ + VOCs + sunlight + heat → ozone, PANs, aldehydes |
| Ozone formation | $NO_{2}$ + sunlight → NO + O; O + $O_{2}$ → $O_{3}$ |
| Role of VOCs | Convert NO back to $NO_{2}$ without consuming ozone, so ozone builds up |
| Daily pattern | NO peaks at the morning rush, $NO_{2}$ about two hours later, ozone in mid-afternoon |
| Units | 1 ppm = 1,000 ppb; the 2015 EPA 8-hour ozone standard is 0.070 ppm (70 ppb) |
| Inversion | Warm air above cool surface air blocks vertical mixing; pollutants accumulate |
| Causes | Clear calm nights, valley drainage, sinking high-pressure air |
| Reduction | Cut $NO_{x}$ and VOCs: catalytic converters, vapor recovery, transit |

**Next:** Part 3 looks at where air pollutants come from, particulate matter, indoor air pollution and noise.
      `
    }
  ]
};
