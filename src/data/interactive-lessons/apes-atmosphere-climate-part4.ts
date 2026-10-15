export const apesAtmosphereClimatePart4Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesatmo4-intro',
      type: 'text' as const,
      content: `
# ☁️ Atmosphere & Climate

**Part 4 of 7 — Reading Climate Data**

---

| Section |
|---------|
| 🧊 Ice Cores: Reading the Past |
| Comparing Rates: Then and Now |
| Temperature Anomalies |
| Natural Drivers Versus Human Drivers |
| Correlation Versus Causation |

> 🔑 **Key Concept:** The CED states that Earth's climate has changed throughout geologic time, with periods of warming and cooling recorded in $CO_{2}$ data and ice cores (CED 9.5). Exam questions hand you that kind of data and ask you to describe trends, calculate rates and explain causes. This part builds those skills. The Keeling curve's rising trend and yearly sawtooth are covered in Biogeochemical Cycles, Part 5.
      `
    },
    {
      id: 'apesatmo4-icecores',
      type: 'text' as const,
      content: `
## 🧊 Ice Cores: Reading the Past

In Antarctica and Greenland, snow piles up year after year without melting. Buried snow is squeezed into ice, sealing tiny **air bubbles** inside. Drilling out a long cylinder of this ice, an **ice core**, gives a layered record of the past.

| What scientists measure | What it reveals |
|---|---|
| Gas in the air bubbles | A direct sample of past $CO_{2}$ and methane concentrations |
| Ratio of heavy to light isotopes of oxygen or hydrogen in the ice | Past **temperature**: snow that fell in colder times contains relatively less of the heavy isotopes |
| Layers of dust and volcanic ash | Past dry, windy periods and dated volcanic eruptions |
| Annual layers near the top | Dating, counted like tree rings |

The longest Antarctic cores reach back about **800,000 years**. Other **proxies** (indirect records) include tree rings, lake and ocean sediments, coral growth bands and pollen.

### What the ice shows

- $CO_{2}$ and temperature **rose and fell together** through repeated ice ages and warm interglacial periods.
- $CO_{2}$ ranged from about **180 ppm** in the coldest glacial periods to about **280–300 ppm** in warm interglacials.
- Today's level, **above 420 ppm**, is far higher than anything in the 800,000-year record.

## Comparing Rates: Then and Now

### Worked Example 1: Natural Versus Modern Rates (rounded values)

At the end of the last ice age, $CO_{2}$ rose about **80 ppm over roughly 7,000 years**.

$$\\frac{80\\ \\text{ppm}}{7{,}000\\ \\text{yr}} \\approx 0.011\\ \\text{ppm/yr}$$

In recent years, $CO_{2}$ has been rising about **2.5 ppm per year**.

$$\\frac{2.5}{0.011} \\approx 230$$

Today's rate of increase is **more than 100 times faster** than the natural rise that ended the last ice age.

### Worked Example 2: How Far Above the Natural Range?

$$\\frac{420 - 300}{300} \\times 100 = 40\\%$$

Today's $CO_{2}$ is about **40% above** the highest level in the ice-core record.
      `
    },
    {
      id: 'apesatmo4-anomaly',
      type: 'text' as const,
      content: `
## Temperature Anomalies

Climate graphs rarely show actual temperatures. They show **anomalies**:

$$\\text{Anomaly} = \\text{observed value} - \\text{baseline average}$$

The **baseline** is the average over a reference period, such as 1951–1980 or the pre-industrial 1850–1900. A positive anomaly means warmer than the baseline; a negative anomaly means cooler.

Anomalies make it possible to combine thousands of stations: a mountain town and a coastal city have very different temperatures, but both may be 0.5°C warmer than their own averages.

### Illustrative data: global decade averages (relative to 1951–1980)

| Decade | Anomaly (°C) |
|---|---|
| 1960s | 0.0 |
| 1970s | 0.0 |
| 1980s | +0.2 |
| 1990s | +0.4 |
| 2000s | +0.6 |
| 2010s | +0.8 |

### Worked Example 3: Rate of Change

From the 1980s to the 2010s, three decades apart:

$$\\frac{0.8 - 0.2\\ \\text{°C}}{3\\ \\text{decades}} = 0.2\\ \\text{°C per decade} = 0.02\\ \\text{°C per year}$$

### Worked Example 4: Changing the Baseline

Suppose the 1951–1980 average is itself **0.3°C warmer** than the 1850–1900 average. Then a 2010s anomaly of +0.8°C on the 1951–1980 baseline is:

$$0.8 + 0.3 = 1.1\\ \\text{°C above pre-industrial}$$

Switching baselines shifts every value by the same amount. It **does not change the trend** or the rate.

### Describing a trend for the exam

Give the direction **and** the numbers: "The anomaly rose from 0.0°C in the 1960s to +0.8°C in the 2010s, about 0.2°C per decade since the 1980s." For comparison, the IPCC AR6 found that 2011–2020 averaged about **1.1°C** above 1850–1900.
      `
    },
    {
      id: 'apesatmo4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'How do scientists measure the $CO_{2}$ concentration of the atmosphere 400,000 years ago?',
            options: [
              'By counting the growth rings of very old living trees',
              'By measuring gas dissolved in deep groundwater wells',
              'By analyzing gas trapped in bubbles in polar ice',
              'By reading oxygen isotopes in ancient coral reefs'
            ],
            correctAnswer: 2,
            explanation: 'Air bubbles sealed in Antarctic ice are direct samples of the ancient atmosphere, reaching back about 800,000 years. Living trees cover only centuries to a few thousand years, and oxygen isotopes are used as a temperature proxy, not to measure carbon dioxide.'
          },
          {
            question: 'A graph shows temperature anomalies relative to a 1951–1980 baseline. A value of −0.2°C for 1965 means that year was:',
            options: [
              '0.2°C cooler than the year before it',
              '0.2°C cooler than the period\'s average',
              '0.2°C cooler than pre-industrial times',
              '0.2°C cooler than the warmest year then'
            ],
            correctAnswer: 1,
            explanation: 'An anomaly is the difference from the average of the reference period, here 1951–1980. It does not compare with the previous year or with the pre-industrial period, which uses a different baseline.'
          },
          {
            question: 'An anomaly graph is redrawn with a pre-industrial baseline instead of 1951–1980. Which feature of the graph stays the same?',
            options: [
              'The anomaly value plotted for each year',
              'The slope of the warming trend line',
              'The year in which the anomaly is zero',
              'The number of years shown as positive'
            ],
            correctAnswer: 1,
            explanation: 'Changing the baseline shifts every value up or down by the same amount, so the slope of the trend line does not change. The individual values, where the line crosses zero and how many years are positive all shift.'
          }
        ]
      }
    },
    {
      id: 'apesatmo4-drivers',
      type: 'text' as const,
      content: `
## Natural Drivers Versus Human Drivers

| Driver | How it changes climate | Time scale | Can it explain recent warming? |
|---|---|---|---|
| **Milankovitch cycles** | Changes in Earth's orbit shape (about 100,000 years), axial tilt (about 41,000 years) and wobble (about 23,000 years) shift how sunlight is distributed | Tens of thousands of years | No; far too slow. They pace the ice ages |
| **Solar output** | The sun's brightness varies about 0.1% over an 11-year cycle | Years to centuries | No; solar output has been flat to slightly lower since the 1960s while Earth warmed |
| **Volcanic eruptions** | Sulfate aerosols in the stratosphere **reflect sunlight**, cooling the surface | One to a few years | No; they cause short **cooling** dips. Their $CO_{2}$ is tiny compared with human emissions |
| **Ocean cycles (El Niño and La Niña)** | Move heat between the ocean and the atmosphere | Year to year | No; they cause ups and downs around the trend, not the trend itself |
| **Greenhouse gases from human activity** | Trap outgoing infrared | Decades to centuries | Yes; the IPCC AR6 calls human influence on warming "unequivocal" |

### Fingerprints that point to greenhouse gases

| Observation | Why it points to greenhouse gases |
|---|---|
| The **stratosphere is cooling** while the lower atmosphere warms | Greenhouse gases trap heat low down; a brighter sun would warm both layers |
| **Nights are warming faster than days**, and winters faster than summers | Trapped infrared works day and night; extra sunlight would act mainly in the day |
| The added carbon has the chemical signature of **fossil fuels** | Carbon from ancient plants has a distinctive isotope mix, and atmospheric $O_{2}$ is falling slightly as fuel is burned |

## Correlation Versus Causation

Ice cores show a strong **correlation** between $CO_{2}$ and temperature, but a correlation alone does not prove cause. Three lines of evidence establish the cause:

1. **Physics:** Laboratory measurements show that $CO_{2}$ absorbs infrared radiation (Part 2).
2. **Timing in the past:** At the end of ice ages, orbital changes started the warming, and the warming then released $CO_{2}$ from the ocean, which **amplified** it, a feedback. Today the order is reversed: humans add the $CO_{2}$ first.
3. **Fingerprints and models:** The pattern of warming matches greenhouse gases and not the sun or volcanoes.

### Worked Example 5: Reading a Volcanic Dip (illustrative data)

| Year | Anomaly (°C) |
|---|---|
| 1990 | +0.45 |
| 1991 (major eruption) | +0.40 |
| 1992 | +0.20 |
| 1993 | +0.25 |
| 1995 | +0.45 |

The anomaly fell $0.45 - 0.20 = 0.25$°C from 1990 to 1992, then recovered within about three years. A short dip followed by a return to the trend is the signature of volcanic aerosols, which settle out of the stratosphere in a year or two.
      `
    },
    {
      id: 'apesatmo4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A temperature anomaly rose from +0.3°C in 1990 to +0.9°C in 2020. What was the average rate of change, in °C per decade?

2) An ice core shows $CO_{2}$ rising from 190 ppm to 270 ppm over 8,000 years. What was the rate, in ppm per 1,000 years?

3) A region's 1951–1980 average summer temperature was 24.0°C. Last summer averaged 25.3°C. What was last summer's anomaly, in °C?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.2', '10', '1.3'],
        hint1: 'Change ÷ number of decades: (0.9 − 0.3) ÷ 3.',
        hint2: '80 ppm spread over 8 thousand-year blocks.',
        hint3: 'Observed minus the baseline average.',
        explanation: '1) 0.6°C ÷ 3 decades = 0.2°C per decade. 2) 80 ppm ÷ 8 = 10 ppm per 1,000 years. 3) 25.3 − 24.0 = +1.3°C.'
      }
    },
    {
      id: 'apesatmo4-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Ice cores show $CO_{2}$ and temperature rising and falling together for 800,000 years. Which additional evidence best shows that $CO_{2}$ can cause warming rather than merely accompany it?',
            options: [
              'Lab tests showing that $CO_{2}$ absorbs infrared radiation',
              'A longer ice core that extends the same pattern further back',
              'Tree rings showing warmer summers in recent decades',
              'A weather station recording a heat record this year'
            ],
            correctAnswer: 0,
            explanation: 'A measured physical mechanism shows how carbon dioxide traps heat, which a correlation cannot. A longer ice core only extends the same correlation, and tree rings and a single record show warming without showing its cause.'
          },
          {
            question: 'Mount Pinatubo erupted in 1991, and global temperature dipped for about two years. What caused the dip?',
            options: [
              'Volcanic $CO_{2}$ cooled the lower atmosphere',
              'Sulfate aerosols reflected sunlight back to space',
              'Volcanic ash absorbed infrared from the surface',
              'Lava released its heat to space by convection'
            ],
            correctAnswer: 1,
            explanation: 'Sulfur dioxide from large eruptions forms sulfate droplets in the stratosphere that reflect incoming sunlight, cooling the surface until they settle out. Carbon dioxide warms rather than cools, and absorbing outgoing infrared would also warm.'
          },
          {
            question: 'Which observation points to greenhouse gases, rather than a brighter sun, as the cause of recent warming?',
            options: [
              'Days warming faster than nights in most regions',
              'The stratosphere cooling as the lower air warms',
              'Upper and lower layers of the air warming together',
              'Summers warming faster than winters near the poles'
            ],
            correctAnswer: 1,
            explanation: 'Greenhouse gases trap heat in the lower atmosphere, so less reaches the stratosphere, which cools. A brighter sun would warm both layers, and would warm days and summers more, the opposite of what is observed.'
          }
        ]
      }
    },
    {
      id: 'apesatmo4-summary',
      type: 'text' as const,
      content: `
## Part 4 Summary

| Idea | Key fact |
|---|---|
| Ice cores | Air bubbles give past $CO_{2}$ and methane; isotopes give past temperature; about 800,000 years |
| Past range | $CO_{2}$ about 180 ppm (glacial) to 280–300 ppm (interglacial); today above 420 ppm |
| Rates | Modern rise (about 2.5 ppm/yr) is more than 100 times the end-of-ice-age rate |
| Anomaly | Observed − baseline average; a new baseline shifts values but not the trend |
| Natural drivers | Milankovitch (ice ages), sun (flat since the 1960s), volcanoes (short cooling), El Niño (wiggles) |
| Fingerprints | Cooling stratosphere, nights and winters warming fastest, fossil-carbon signature |
| Causation | Physics + timing + fingerprints, not correlation alone |

**Next:** Part 5 follows the 90% of the extra heat that went into the ocean, and the $CO_{2}$ that is changing ocean chemistry, then looks at how the world is responding.
      `
    }
  ]
};
