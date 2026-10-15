export const apesAtmosphericPollutionPart7Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesatmo7-intro',
      type: 'text' as const,
      content: `
# 🏭 Atmospheric Pollution

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Topic on One Page |
| Two Ozones |
| One Pollutant, Many Problems |
| Calculations in This Topic |
| Final Checklist |

> 🔑 **Key Concept:** Air pollution questions reward connections: the same $SO_{2}$ molecule can feed industrial smog, haze and acid deposition, and the same word, ozone, names both a pollutant and a shield. This part pulls the six earlier parts into one picture.

## 📖 The Topic on One Page

| CED topic | Big idea | Where you learned it |
|---|---|---|
| 7.1 Introduction to air pollution | Natural and human sources; Clean Air Act (1970) and six criteria pollutants; primary vs secondary | Parts 1, 3 |
| 7.2 Photochemical smog | $NO_{x}$ + VOCs + sunlight + heat → ozone; afternoon summer peak; cut $NO_{x}$ and VOCs | Parts 1, 2 |
| 7.3 Thermal inversion | Warm air above cool air stops vertical mixing; valleys and basins | Parts 1, 2 |
| 7.4 Atmospheric $CO_{2}$ and particulates | PM10 vs PM2.5; respiratory harm; haze from light scattering | Part 3 |
| 7.5 Indoor air pollutants | CO, radon, asbestos, formaldehyde, lead paint, mold; biomass smoke in developing nations | Part 3 |
| 7.6 Reduction of air pollutants | Catalytic converters, vapor recovery, scrubbers, precipitators; regulation, conservation, alternative fuels | Part 4 |
| 7.7 Acid rain | $SO_{2}$ and $NO_{x}$ → acids; downwind effects; buffering; pH is logarithmic | Parts 1, 4 |
| 7.8 Noise pollution | Decibels are logarithmic; stress, masking, hearing damage, altered migration | Part 3 |
| 9.1 Stratospheric ozone depletion | UV-B shield; CFC chlorine catalytic cycle; Antarctic spring hole; skin cancer and cataracts | Parts 1, 5 |
| 9.2 Reducing ozone depletion | Montreal Protocol (1987); HCFCs and HFCs; Kigali Amendment (2016) | Part 5 |

Greenhouse gases and climate change are covered in the Atmosphere & Climate lessons; burning fossil fuels, the source of most of these pollutants, is covered in the Fossil Fuels & Nuclear Energy lessons.
      `
    },
    {
      id: 'apesatmo7-ozones',
      type: 'text' as const,
      content: `
## Two Ozones

| | **Ground-level (tropospheric) ozone** | **Stratospheric ozone** |
|---|---|---|
| Where | The air we breathe | About 15–35 km up |
| How it forms | $NO_{2}$ split by sunlight; O + $O_{2}$ → $O_{3}$; VOCs let it build up | UV-C splits $O_{2}$; O + $O_{2}$ → $O_{3}$ |
| Effect | Harms lungs, eyes and crops | Absorbs most UV-B; protects life |
| The problem | **Too much** of it | **Too little** of it |
| Human cause | $NO_{x}$ and VOCs from vehicles and industry | CFCs, halons and other chlorine and bromine compounds |
| Worst time | Summer afternoons | Antarctic spring (September–October) |
| Main policy | Clean Air Act standards | Montreal Protocol |

Same molecule, opposite problems: "good up high, bad nearby." Neither ozone problem is the cause of global warming.

## One Pollutant, Many Problems

| Pollutant | Problems it contributes to | Main controls |
|---|---|---|
| $SO_{2}$ | Industrial smog, acid deposition, sulfate haze, respiratory harm | Scrubbers, fluidized bed combustion, low-sulfur coal, cap-and-trade |
| $NO_{x}$ | Photochemical smog, acid deposition, respiratory harm | Catalytic converters, cleaner engines, less driving |
| VOCs | Photochemical smog; some, like formaldehyde, are indoor pollutants | Vapor recovery nozzles, low-VOC products, ventilation |
| Particulates | Lung and heart disease, haze, dry deposition | Electrostatic precipitators, baghouses, cleaner stoves |
| CO | Blocks oxygen delivery outdoors and indoors | Catalytic converters, CO detectors, appliance venting |
| CFCs | Stratospheric ozone loss; also greenhouse gases | Montreal Protocol phase-out |

### Worked Example: One Plant, Three Benefits (illustrative data)

A plant cuts its $SO_{2}$ from **40,000 t** to **4,000 t** a year with a scrubber.

$$\\frac{40{,}000 - 4{,}000}{40{,}000} \\times 100 = 90\\%\\ \\text{removal}$$

That single change reduces **acid deposition** downwind, **sulfate haze** over nearby parks, and **respiratory** illness from $SO_{2}$ and sulfate particles. On a free-response question, naming more than one linked benefit shows systems thinking.
      `
    },
    {
      id: 'apesatmo7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A classmate argues that ozone is "good" and should be protected wherever it occurs. Which statement best corrects the claim?',
            options: [
              'It shields life from UV in the stratosphere but harms lungs near the ground',
              'It is harmful at every altitude and should be removed wherever it is found',
              'It is helpful at every altitude, since it always absorbs UV-B radiation',
              'It matters only near the ground, since the stratosphere holds almost none'
            ],
            correctAnswer: 0,
            explanation: 'Stratospheric ozone absorbs most UV-B and protects life, while ground-level ozone is a secondary pollutant that damages lungs and crops. Most of the atmosphere\'s ozone is in the stratosphere.'
          },
          {
            question: 'Which pollutant contributes to industrial smog, acid deposition and haze?',
            options: [
              'Carbon monoxide',
              'Sulfur dioxide',
              'Chlorofluorocarbons',
              'Radon-222 gas'
            ],
            correctAnswer: 1,
            explanation: 'Sulfur dioxide from coal combustion forms industrial smog with particulates, becomes sulfuric acid in deposition, and forms sulfate particles that cause haze. Carbon monoxide, chlorofluorocarbons and radon each cause a different single problem.'
          },
          {
            question: 'Which pairing of a control method with the pollutant it targets is correct?',
            options: [
              'Electrostatic precipitator and sulfur dioxide',
              'Catalytic converter and particulates',
              'Vapor recovery nozzle and VOCs',
              'Baghouse filter and carbon monoxide'
            ],
            correctAnswer: 2,
            explanation: 'Vapor recovery nozzles capture gasoline fumes, which are VOCs, at the pump. Precipitators and baghouses remove particles rather than gases, and catalytic converters treat carbon monoxide, nitrogen oxides and hydrocarbons.'
          }
        ]
      }
    },
    {
      id: 'apesatmo7-calcs',
      type: 'text' as const,
      content: `
## Calculations in This Topic

| Skill | Formula or fact | Part |
|---|---|---|
| Percent change | (new − old) ÷ old × 100 | 2, 3, 5, 6 |
| ppm and ppb | 1 ppm = 1,000 ppb; ozone standard 0.070 ppm = 70 ppb | 2 |
| Mixing height | Same emissions in a layer 1/n as deep → n times the concentration | 2 |
| Decibels | Intensity ratio = $10^{\\Delta dB/10}$; each 10 dB = 10× | 3 |
| Radon | Compare with the EPA action level of 4 pCi/L | 3 |
| pH | Ratio of $[H^{+}]$ = $10^{\\Delta pH}$ | 4, 6 |
| Removal efficiency | (in − out) ÷ in × 100; in series, multiply fractions remaining | 4, 6 |
| Allowances | 1 allowance = 1 ton $SO_{2}$; shortfall × price | 4, 6 |
| Dobson units | 1 DU = 0.01 mm; hole = below 220 DU | 5 |
| Normalizing | Emissions ÷ activity (per mile, per kWh) | 6 |

## Final Checklist

- Can you sort pollutants into **primary** and **secondary**, and name all **six criteria pollutants**?
- Can you write the reactions that form ground-level ozone and explain the role of **VOCs**?
- Can you sketch the daily **NO → $NO_{2}$ → $O_{3}$** sequence and explain each peak?
- Can you read a temperature profile and locate an **inversion**?
- Can you compare **PM10** and **PM2.5** and explain **haze**?
- Can you match each **indoor pollutant** to its source, effect and fix?
- Can you do **decibel** and **pH** comparisons as powers of 10?
- Can you explain why acid deposition hits **downwind, granite** regions hardest?
- Can you name the device for each pollutant and describe **cap-and-trade**?
- Can you write the **chlorine catalytic cycle** and explain the **Antarctic spring** timing?
- Can you trace the path from **CFCs → HCFCs → HFCs** and say why **Kigali** was needed?
      `
    },
    {
      id: 'apesatmo7-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) Rain at one site has a pH of 4.1, while normal rain is pH 5.6. Rounded to the nearest whole number, how many times greater is the hydrogen ion concentration at the site? (Use $10^{0.5} \\approx 3.16$.)

2) A baghouse receives 5,000 kg of particulates a day and releases 25 kg. What is its removal efficiency, in percent?

3) A nitrogen dioxide reading of 0.053 ppm is reported. What is that in ppb?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['32', '99.5', '53'],
        hint1: '5.6 − 4.1 = 1.5, and 10 to the 1.5 = 10 × 3.16.',
        hint2: '(5,000 − 25) ÷ 5,000 × 100.',
        hint3: 'Multiply ppm by 1,000.',
        explanation: '1) 10 to the 1.5 ≈ 31.6, about 32 times. 2) 4,975 ÷ 5,000 × 100 = 99.5 percent. 3) 0.053 × 1,000 = 53 ppb.'
      }
    },
    {
      id: 'apesatmo7-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A small town on a valley floor has its worst air on calm, clear winter mornings, when many homes burn wood for heat. Which explanation fits best?',
            options: [
              'Ozone formed by strong midday sunlight and heat',
              'Wood-smoke particles held under an inversion',
              'Radon seeping up from uranium in the bedrock',
              'CFCs leaking from aging home refrigerators'
            ],
            correctAnswer: 1,
            explanation: 'Clear, calm winter nights produce radiation and valley inversions that trap smoke near the ground until the sun warms the surface. Ozone peaks on summer afternoons, and radon and CFCs do not cause outdoor morning smog.'
          },
          {
            question: 'A rock concert reaches 110 dB, and heavy traffic is 80 dB. How many times more intense is the concert sound?',
            options: [
              'About 30 times',
              'About 1.4 times',
              'About 1,000 times',
              'About 10,000 times'
            ],
            correctAnswer: 2,
            explanation: 'The difference is 30 dB, and 10 to the power 30 ÷ 10 is 1,000. Dividing 110 by 80 gives 1.4, and the decibel difference itself is 30, neither of which uses the logarithmic scale.'
          },
          {
            question: 'Which statement about the Montreal Protocol and its results is accurate?',
            options: [
              'Chlorine in the stratosphere is declining, and the layer is now recovering',
              'The Antarctic hole closed for good in the 2000s, once CFC sales had ended',
              'The protocol replaced CFCs with HFCs, which deplete ozone faster than CFCs',
              'The protocol cut greenhouse gases, and the ozone hole ended global warming'
            ],
            correctAnswer: 0,
            explanation: 'Since the phase-out, stratospheric chlorine has fallen and ozone is recovering slowly, with the Antarctic hole still forming each spring and full recovery projected around the 2060s. HFCs do not deplete ozone, and the ozone hole is not what drives global warming.'
          }
        ]
      }
    },
    {
      id: 'apesatmo7-summary',
      type: 'text' as const,
      content: `
## Part 7 Summary

| Theme | Takeaway |
|---|---|
| Sources | Most outdoor pollutants come from combustion; many also have natural sources |
| Smog | Industrial: $SO_{2}$ + particulates, cold; photochemical: $NO_{x}$ + VOCs + sunlight, hot |
| Inversions | Warm air aloft traps pollutants; geography and weather decide exposure |
| Particulates and indoor air | PM2.5 is the most harmful size; radon, CO, asbestos, formaldehyde and biomass smoke indoors |
| Noise | Logarithmic decibels; stress, masking, hearing damage, altered migration |
| Acid deposition | $SO_{2}$ and $NO_{x}$ → acids downwind; limestone buffers; cap-and-trade cut $SO_{2}$ |
| Controls | Match the device to the pollutant: converters, scrubbers, precipitators, baghouses, vapor recovery |
| Stratospheric ozone | CFC chlorine destroys the UV-B shield; Montreal Protocol (1987) is working; Kigali (2016) phases down HFCs |

**Next:** You have finished Atmospheric Pollution. The Atmosphere & Climate lessons take up greenhouse gases and global climate change.
      `
    }
  ]
};
