import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Climate Change (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-climate-change'.
 * 7 parts, rewritten Oct 2026 to the 2026-27 APES CED (May 2027 exam). Written to
 * complement, not repeat, the core APES topics apes-atmospheric-pollution,
 * apes-water-resources and apes-atmosphere-climate. LaTeX uses DOUBLED backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
// ───────────────────────── PART 1 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc1-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 1 of 7 — Weather, Climate and the Natural Greenhouse Effect**

---

| Section |
|---------|
| 📖 Climate Is a Statistic, Not a Day |
| Three Planets, Three Greenhouse Effects |
| What Makes Up Earth's Natural Greenhouse Effect |
| Natural Sources of Greenhouse Gases |

> 🔑 **Key Concept:** The CED's starting point for Unit 9 climate topics is that the greenhouse effect produces the surface temperatures that make life on Earth possible (CED 9.3). This part treats climate as a long-run statistic, compares Earth's greenhouse effect with those of Venus and Mars, and sorts out which gases set Earth's temperature and which only respond to it. The step-by-step energy budget and global warming potential are covered in Atmosphere & Climate, Part 2.`,
    },
    {
      id: 'apecc1-weather-climate',
      type: 'text' as const,
      content: `## 📖 Climate Is a Statistic, Not a Day

| | **Weather** | **Climate** |
|---|---|---|
| What it describes | The state of the atmosphere at one place and time | The long-term pattern of weather in a region |
| Time scale | Minutes to about two weeks | Decades; the standard is 30 years |
| Measured as | Today's temperature, rain, wind, humidity | Averages **and** the range of variation: how often heat waves, frosts or droughts occur |
| Example | "It is 34°C and humid in Atlanta this afternoon." | "Atlanta has a humid subtropical climate with hot summers and mild winters." |

### Climate normals

Agencies such as NOAA define a place's climate with **30-year averages** called **climate normals**, updated every 10 years. The current U.S. normals cover **1991–2020**. Thirty years is long enough that one unusually hot year, one strong El Niño or one big volcanic eruption barely moves the average.

### Worked Example 1: Building a Normal from Decade Averages (illustrative data)

A city's average July high temperature was 30.6°C in 1991–2000, 31.0°C in 2001–2010 and 31.4°C in 2011–2020. Because each decade has the same number of years, the 30-year normal is the average of the three:

$$\\text{Normal} = \\frac{30.6 + 31.0 + 31.4}{3} = \\frac{93.0}{3} = 31.0\\ \\text{°C}$$

Notice that the normal itself drifts upward as each new decade replaces the oldest one. A warming climate makes "normal" warmer over time.

### Climate includes the extremes

A climate is a **distribution** of possible weather, not one number. Picture a bell-shaped curve of summer days: most are near the average, and a few are very hot or very cool. If the whole curve shifts warmer by a small amount, the **rare hot tail grows much more than the average does**.

### Worked Example 2: A Small Shift, a Big Change in Extremes (illustrative data)

In a town's 1951–1980 climate, July had on average **3 days** above 35°C. After the July average warmed by about 1.5°C, July averaged **9 days** above 35°C.

$$\\frac{9 - 3}{3} \\times 100 = 200\\%\\ \\text{increase}$$

The average rose by only a few percent, but the number of extreme-heat days **tripled**. This is why a warming climate is felt first through heat waves.

> 🔑 **AP Connection:** When a question offers one storm, one cold snap or one record day as evidence for or against climate change, the answer is that a single weather event cannot establish a climate trend. Trends need decades of data.`,
    },
    {
      id: 'apecc1-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A news report says this was the coldest week in Chicago in five years. Which data would a scientist need to judge whether Chicago\'s climate is changing?',
            options: [
              'Hourly temperatures from this coldest week alone',
              'The forecast for the coming two weeks in Chicago',
              'The single coldest day recorded in the past year',
              'Average temperatures over several decades of records',
            ],
            correctAnswer: 3,
            explanation: 'Climate is the long-term pattern, so judging change requires decades of averages. One week, one day or a two-week forecast describes weather and cannot reveal a trend.',
          },
          {
            question: 'Why do climatologists use a 30-year average, rather than a 3-year average, to define a region\'s normal climate?',
            options: [
              'Thirty years smooths out single unusual years and events',
              'Thirty years is the usual working life of a weather station',
              'Thirty years matches one full cycle of solar brightness',
              'Thirty years is how long it takes added $CO_{2}$ to mix',
            ],
            correctAnswer: 0,
            explanation: 'A long averaging window keeps one El Niño year or one volcanic eruption from distorting the average. The sun\'s brightness cycle is about 11 years, and carbon dioxide mixes through the atmosphere in about a year.',
          },
          {
            question: 'Which statement describes climate rather than weather?',
            options: [
              'A hailstorm flattened wheat fields in Kansas last night',
              'Fog closed the San Francisco airport early this morning',
              'Wind gusts reached 90 km/h during Tuesday\'s thunderstorm',
              'Mumbai\'s rainy season runs from June to September',
            ],
            correctAnswer: 3,
            explanation: 'A rainy season that returns every year is a long-term pattern, which is climate. The hailstorm, the fog and the gusts are single events at a particular time, which is weather.',
          },
        ],
      },
    },
    {
      id: 'apecc1-planets',
      type: 'text' as const,
      content: `## Three Planets, Three Greenhouse Effects

Every planet has an **effective temperature**: the temperature it would have if it simply absorbed sunlight and radiated the same energy back, with no greenhouse gases. The difference between the effective temperature and the real average surface temperature is the **greenhouse warming**.

| | **Venus** | **Earth** | **Mars** |
|---|---|---|---|
| Main atmospheric gases | About 96.5% $CO_{2}$ | $N_{2}$ and $O_{2}$; $CO_{2}$ about 0.04% | About 95% $CO_{2}$ |
| Surface pressure (Earth = 1) | About 92 | 1 | About 0.006 |
| Albedo (fraction of sunlight reflected) | About 0.77 | About 0.30 | About 0.25 |
| Effective temperature | About −46°C | About −18°C | About −63°C |
| Actual average surface temperature | About 464°C | About 15°C | About −60°C |
| Greenhouse warming | About 510°C | About 33°C | Only a few degrees |

Values are rounded from NASA planetary fact sheets.

### Worked Example 3: Venus

$$\\Delta T = 464\\ \\text{°C} - (-46\\ \\text{°C}) = 464 + 46 = 510\\ \\text{°C}$$

### What the comparison teaches

1. **The amount of greenhouse gas matters, not just the percentage.** Mars's air is about 95% $CO_{2}$, but its atmosphere is so thin (under 1% of Earth's surface pressure) that there is little gas to absorb infrared. Mars gets only a few degrees of greenhouse warming.
2. **Distance from the sun is not the whole story.** Venus reflects about three-quarters of the sunlight that reaches it, so its effective temperature is **colder** than Earth's. Its dense $CO_{2}$ atmosphere still makes its surface hotter than Mercury's, the planet closest to the sun.
3. **Earth sits in between.** A small amount of greenhouse gas keeps Earth about 33°C warmer than its effective temperature, so most of its water stays liquid. That is the CED's point: the natural greenhouse effect makes life on Earth possible.

> 💡 These comparisons show the physics works the same everywhere. More heat-trapping gas means a warmer surface, which is why adding greenhouse gases to Earth's air raises its temperature.`,
    },
    {
      id: 'apecc1-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data for questions 2 and 3.)

**1)** Using the table, Venus's effective temperature is about −46°C and its surface averages about 464°C. How many degrees Celsius of greenhouse warming does Venus have?

**2)** A town's average January low was 14.2°C in 1991–2000, 14.6°C in 2001–2010 and 15.3°C in 2011–2020. What is its 1991–2020 normal January low, in °C?

**3)** A city averaged 4 days per summer above 38°C in 1961–1990 and 10 days per summer in 1991–2020. What is the percent increase?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['510', '14.7', '150'],
        hint1: 'Subtract a negative number: 464 − (−46) = 464 + 46.',
        hint2: 'The decades are equal in length, so average the three values: add them and divide by 3.',
        hint3: '(new − old) ÷ old × 100.',
        explanation: '1) 464 + 46 = 510°C. 2) (14.2 + 14.6 + 15.3) ÷ 3 = 44.1 ÷ 3 = 14.7°C. 3) (10 − 4) ÷ 4 × 100 = 150 percent more extreme-heat days.',
      },
    },
    {
      id: 'apecc1-natural',
      type: 'text' as const,
      content: `## What Makes Up Earth's Natural Greenhouse Effect

Climate scientists have calculated how much of Earth's total greenhouse effect comes from each absorber (Schmidt and others, 2010, rounded):

| Absorber | Approximate share of the total greenhouse effect |
|---|---|
| Water vapor | About 50% |
| Clouds | About 25% |
| $CO_{2}$ | About 20% |
| Methane, nitrous oxide, ozone and others | About 5% |

### Worked Example 4: Reading the Table

Water vapor and clouds together supply about $50\\% + 25\\% = 75\\%$ of the effect. Of the roughly 33°C of greenhouse warming, $CO_{2}$'s share is about

$$0.20 \\times 33\\ \\text{°C} \\approx 7\\ \\text{°C}$$

That is a rough way to picture its contribution, since the absorbers overlap and interact, but it shows that even the "small" share is several degrees.

### Condensing versus non-condensing gases

If water vapor does most of the work, why do scientists call $CO_{2}$ the climate's **control knob**?

| | **Water vapor and clouds** | **$CO_{2}$, methane, nitrous oxide** |
|---|---|---|
| Can it condense and rain out at Earth's temperatures? | Yes | No |
| What sets how much is in the air? | Air temperature: warmer air holds more vapor | Sources and sinks; the gas stays until a process removes it |
| How long an added amount lasts | About 9 days | About a decade (methane) to centuries (part of $CO_{2}$) |
| Role in climate change | **Feedback**: amplifies a change started by something else | **Driver**: sets the temperature that water vapor then responds to |

If the non-condensing gases were removed, Earth would cool, the air would hold less water vapor, cooling would continue, and models show the planet would end up largely frozen. The non-condensing gases hold up the whole structure. How water vapor amplifies warming is developed in Part 4.

## Natural Sources of Greenhouse Gases

Every major greenhouse gas except the CFCs also has natural sources. Human activity adds to these natural flows, which were roughly balanced by natural sinks before industrialization.

| Gas | Natural sources |
|---|---|
| $CO_{2}$ | Respiration by organisms, decomposition, wildfires, volcanic outgassing (less than 1% of what humans now emit each year) |
| Methane $(CH_{4})$ | **Wetlands** (the largest natural source), termites, wild grazing animals, seeps from the seafloor and the ground |
| Nitrous oxide $(N_{2}O)$ | Soil and ocean microbes during nitrification and denitrification |
| Water vapor | Evaporation and transpiration |
| CFCs | **None**: they are entirely human-made |

> 🔑 **AP Connection:** Keep the **natural greenhouse effect** (necessary, about 33°C of warming) separate from the **enhanced greenhouse effect** (extra warming from human additions of $CO_{2}$, methane, nitrous oxide and CFCs). A free-response answer that calls the greenhouse effect itself harmful loses the point.`,
    },
    {
      id: 'apecc1-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The atmosphere of Mars is about 95% carbon dioxide, yet its greenhouse effect warms the surface by only a few degrees. Which explanation is best supported?',
            options: [
              'Its air is so thin that little gas is present to absorb infrared',
              'Carbon dioxide stops absorbing infrared at very cold temperatures',
              'Mars is too far from the sun for any greenhouse effect to occur',
              'Its dust storms reflect away the infrared given off by the ground',
            ],
            correctAnswer: 0,
            explanation: 'Mars\'s surface pressure is under 1% of Earth\'s, so even an atmosphere that is mostly carbon dioxide contains little absorbing gas. Carbon dioxide absorbs infrared at any temperature, and distance only changes how much sunlight arrives, not whether a greenhouse effect exists.',
          },
          {
            question: 'Water vapor causes about half of Earth\'s natural greenhouse effect. Why do scientists still treat carbon dioxide, not water vapor, as the main driver of climate change?',
            options: [
              'The amount of vapor in the air adjusts to air temperature within days',
              'Vapor is spread too unevenly across Earth to change its climate',
              'Vapor absorbs sunlight on the way in but not outgoing infrared',
              'Vapor is lost to space within a few days of rising from the ocean',
            ],
            correctAnswer: 0,
            explanation: 'Extra water vapor rains out in about nine days, and how much the air holds depends on its temperature, so vapor responds to warming rather than starting it. Water vapor does absorb outgoing infrared, and it leaves the air as rain or snow, not by escaping to space.',
          },
          {
            question: 'Which source adds to the enhanced greenhouse effect rather than the natural one?',
            options: [
              'Methane from rice paddies and cattle',
              'Methane bubbling out of a peat wetland',
              'Carbon dioxide exhaled by forest deer',
              'Water vapor rising from a tropical sea',
            ],
            correctAnswer: 0,
            explanation: 'Rice paddies and cattle herds exist because of agriculture, so their methane is a human addition. Wetland methane, animal respiration and evaporation are natural flows that existed before people farmed.',
          },
        ],
      },
    },
    {
      id: 'apecc1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key fact |
|---|---|
| Weather vs climate | Weather is the moment; climate is the 30-year pattern of averages and extremes |
| Climate normals | 30-year averages, updated each decade (current U.S. normals: 1991–2020) |
| Shifting distribution | A small rise in the average makes rare hot extremes much more common |
| Greenhouse warming | Actual surface temperature − effective temperature: Venus about 510°C, Earth about 33°C, Mars a few degrees |
| Amount matters | Thin Mars air traps little heat even though it is mostly $CO_{2}$ |
| Shares of Earth's effect | Water vapor about 50%, clouds about 25%, $CO_{2}$ about 20%, others about 5% |
| Driver vs feedback | Non-condensing gases ($CO_{2}$, $CH_{4}$, $N_{2}O$) set the temperature; water vapor follows it |
| Natural sources | Respiration, decomposition, volcanoes ($CO_{2}$); wetlands ($CH_{4}$); microbes ($N_{2}O$); CFCs have none |

**Next:** Part 2 follows the human additions to their sources: which sectors, which gases and which countries the emissions come from.`,
    },
  ],
},

// ───────────────────────── PART 2 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc2-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 2 of 7 — Where Emissions Come From**

---

| Section |
|---------|
| 🏭 Emissions by Economic Sector |
| From Sectors to Gases |
| Total, Per-Capita and Cumulative Emissions |
| Flows and Stocks: Why Concentrations Keep Rising |

> 🔑 **Key Concept:** The CED asks you to identify the sources of each greenhouse gas and the threats posed by their increase (CED 9.3, 9.4). This part maps human emissions three ways: by **sector** of the economy, by **gas**, and by **country**, and shows why the way you count changes who looks responsible. Each gas's lifetime and global warming potential are covered in Atmosphere & Climate, Part 2.`,
    },
    {
      id: 'apecc2-sectors',
      type: 'text' as const,
      content: `## 🏭 Emissions by Economic Sector

In 2019, humans released about **59 billion tonnes of $CO_{2}$-equivalent** (59 Gt $CO_{2}$-eq) of greenhouse gases, counting land-use change and weighting each gas by its 100-year GWP (IPCC AR6, rounded).

| Sector | Share of 2019 emissions | Main activities |
|---|---|---|
| **Energy supply** | About 34% | Burning coal, gas and oil for electricity and heat; leaks and flaring during fossil fuel production |
| **Industry** | About 24% | Fuel burned in factories; steel, cement and chemical production; fluorinated gases |
| **Agriculture, forestry and other land use** | About 22% | Livestock, rice paddies, fertilizer, clearing and burning forests |
| **Transport** | About 15% | Cars, trucks, ships and aircraft burning petroleum fuels |
| **Buildings** | About 6% | Furnaces, boilers and stoves burning fuel on site |

(Shares add to 101% because of rounding. Electricity used in buildings and factories is counted under energy supply, where the fuel is burned.)

### Worked Example 1: From Share to Tonnes

Transport's share of the 59 Gt total:

$$0.15 \\times 59\\ \\text{Gt} \\approx 8.9\\ \\text{Gt}\\ CO_{2}\\text{-eq}$$

### Worked Example 2: Cement's Built-In $CO_{2}$

Cement is made by heating limestone $(CaCO_{3})$ in a kiln until it breaks down into lime $(CaO)$:

$$CaCO_{3} \\rightarrow CaO + CO_{2}$$

The molar masses are about 100 g/mol for $CaCO_{3}$ and 44 g/mol for $CO_{2}$, so each tonne of limestone broken down releases

$$1\\ \\text{t} \\times \\frac{44}{100} = 0.44\\ \\text{t}\\ CO_{2}$$

This **process $CO_{2}$** comes from the rock itself. It would still be released even if the kiln ran entirely on renewable energy, which is why cement is one of the hardest sectors to decarbonize.`,
    },
    {
      id: 'apecc2-gases',
      type: 'text' as const,
      content: `## From Sectors to Gases

Each sector is dominated by different gases.

| Gas | Share of 2019 emissions (100-yr GWP) | Largest human sources |
|---|---|---|
| $CO_{2}$ from fossil fuels and industry | About 64% | Power plants, vehicles, factories, cement kilns |
| $CO_{2}$ from land use | About 11% | Deforestation, especially clearing tropical forest for cattle pasture and crops |
| Methane $(CH_{4})$ | About 18% | Agriculture (about 40% of human methane: cattle digestion, manure, rice paddies); fossil fuel production (about 35%: gas leaks, coal mines, oil wells); waste (about 20%: landfills, wastewater) |
| Nitrous oxide $(N_{2}O)$ | About 4% | Nitrogen fertilizer and manure on fields (most of human $N_{2}O$), fossil fuel combustion, some chemical plants |
| Fluorinated gases (HFCs and others) | About 2% | Leaking refrigerants and air conditioners, some industrial processes |

Methane shares are approximate (IEA and Global Methane Budget estimates). About **60%** of all methane now entering the atmosphere comes from human activity; wetlands lead the natural sources.

### Why agriculture matters more than its fuel use suggests

A farm burns relatively little fuel, but cattle digestion releases methane, and fertilized soils release nitrous oxide. Both gases have high GWPs, so agriculture's climate impact is much larger than its $CO_{2}$ alone. Deforestation adds a double hit: it releases carbon stored in trees and removes a sink that would have absorbed future $CO_{2}$.

> 🔑 **AP Connection:** Free-response prompts often name a source and ask for "the greenhouse gas released." Match them precisely: **rice paddies, cattle, landfills and gas leaks → methane; fertilizer → nitrous oxide; combustion, cement and deforestation → $CO_{2}$; refrigerants → CFCs and HFCs.**`,
    },
    {
      id: 'apecc2-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'According to the IPCC, which sector released the largest share of global greenhouse gas emissions in 2019?',
            options: [
              'Generating electricity and heat',
              'Moving passengers and freight by road',
              'Farming and clearing forests',
              'Heating and cooling buildings',
            ],
            correctAnswer: 0,
            explanation: 'Energy supply, mostly power and heat generation, was about 34% of 2019 emissions. Agriculture and land use was about 22%, transport about 15% and on-site building emissions about 6%.',
          },
          {
            question: 'A cement company switches its kilns to run entirely on renewable electricity. Why does the plant still release large amounts of $CO_{2}$?',
            options: [
              'Wind and solar power release $CO_{2}$ while they operate',
              'Hardening concrete gives off $CO_{2}$ as the water dries',
              'Heating limestone splits off $CO_{2}$ held in the rock',
              'Mixing in clay and sand frees trapped soil gases',
            ],
            correctAnswer: 2,
            explanation: 'Breaking calcium carbonate into lime releases carbon dioxide from the limestone itself, about 0.44 t per tonne of rock, no matter how the kiln is heated. Wind and solar produce no carbon dioxide while running, and curing concrete slowly absorbs carbon dioxide rather than releasing it.',
          },
          {
            question: 'Most human emissions of nitrous oxide come from which activity?',
            options: [
              'Burning coal at power plants',
              'Leaking refrigerants from cooling units',
              'Flooding paddy fields to grow rice in Asia',
              'Spreading fertilizer and manure on fields',
            ],
            correctAnswer: 3,
            explanation: 'Soil microbes convert part of the nitrogen in fertilizer and manure into nitrous oxide. Coal burning adds a smaller amount, flooded rice paddies are known for methane, and refrigerants release CFCs and HFCs.',
          },
        ],
      },
    },
    {
      id: 'apecc2-countries',
      type: 'text' as const,
      content: `## Total, Per-Capita and Cumulative Emissions

Who is "the biggest emitter" depends on what you measure.

**Fossil $CO_{2}$ by country (about 2022, rounded from Global Carbon Project data)**

| | **Annual $CO_{2}$** | **Population** | **Per person** | **Share of cumulative fossil $CO_{2}$ since 1850** |
|---|---|---|---|---|
| China | 11.4 Gt | 1.41 billion | About 8.1 t | About 14% |
| United States | 5.0 Gt | 335 million | About 14.9 t | About 24% |
| India | 2.8 Gt | 1.42 billion | About 2.0 t | About 3% |
| World | 37 Gt | 8.0 billion | About 4.6 t | 100% |

### Worked Example 3: Share of the World Total

$$\\text{China: } \\frac{11.4}{37} \\times 100 \\approx 31\\% \\qquad \\text{United States: } \\frac{5.0}{37} \\times 100 \\approx 14\\%$$

### Worked Example 4: Per-Capita Emissions

Divide tonnes by people. For the United States:

$$\\frac{5.0 \\times 10^{9}\\ \\text{t}}{3.35 \\times 10^{8}\\ \\text{people}} \\approx 14.9\\ \\text{t per person}$$

### What each measure tells you

| Measure | Who ranks first | What it is useful for |
|---|---|---|
| **Total annual** | China | Where cuts today would remove the most tonnes |
| **Per capita** | United States (of these three) | Comparing lifestyles and energy use per person |
| **Cumulative** | United States | Responsibility for the warming already caused, since much of the $CO_{2}$ stays for centuries |

India has nearly the same population as China but emits about a quarter as much per person. Debates over fairness in climate treaties grow out of exactly these differences.

### Worked Example 5: Coal Versus Natural Gas

Generating 1 kWh of electricity releases about **1.0 kg of $CO_{2}$** from coal and about **0.4 kg** from natural gas (EIA, rounded). Replacing a coal plant that makes **2,000,000 MWh** a year with gas generation:

$$2{,}000{,}000\\ \\text{MWh} = 2 \\times 10^{9}\\ \\text{kWh}$$

$$2 \\times 10^{9}\\ \\text{kWh} \\times (1.0 - 0.4)\\ \\text{kg/kWh} = 1.2 \\times 10^{9}\\ \\text{kg} = 1{,}200{,}000\\ \\text{t}\\ CO_{2}\\ \\text{avoided}$$

The catch: natural gas is mostly methane. Leaks from wells and pipelines add methane with a high GWP, which shrinks the benefit of switching.`,
    },
    {
      id: 'apecc2-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data for questions 2 and 3.)

**1)** India emitted about 2.8 Gt of the world's 37 Gt of fossil $CO_{2}$. What percent is that? Round to the nearest whole percent.

**2)** A country of 40 million people emits 0.6 Gt of $CO_{2}$ per year. What are its emissions per person, in tonnes?

**3)** A utility replaces 500,000 MWh per year of coal power (1.0 kg $CO_{2}$ per kWh) with wind power (about 0 kg per kWh). How many tonnes of $CO_{2}$ does it avoid each year?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '15', '500000'],
        hint1: '2.8 ÷ 37 × 100.',
        hint2: '0.6 Gt is 600,000,000 t. Divide by 40,000,000 people.',
        hint3: '500,000 MWh = 500,000,000 kWh. Multiply by 1.0 kg, then divide by 1,000 to get tonnes.',
        explanation: '1) 2.8 ÷ 37 × 100 ≈ 7.6, about 8 percent. 2) 600,000,000 t ÷ 40,000,000 = 15 t per person. 3) 500,000,000 kWh × 1.0 kg = 500,000,000 kg = 500,000 t of carbon dioxide avoided.',
      },
    },
    {
      id: 'apecc2-stock',
      type: 'text' as const,
      content: `## Flows and Stocks: Why Concentrations Keep Rising

Think of the atmosphere as a **bathtub**:

- The faucet is **emissions**, a flow measured in tonnes per year.
- The drain is **sinks**, mainly the ocean and land plants, which currently remove roughly half of each year's human $CO_{2}$ (the full carbon budget is in Biogeochemical Cycles, Part 2).
- The water level is the **concentration**, a stock measured in ppm.

As long as the faucet runs faster than the drain, the level rises, even if the faucet is not opened any wider.

### Worked Example 6: Emissions Level Off (illustrative data)

Suppose emissions stay fixed and sinks keep removing half, so atmospheric $CO_{2}$ keeps rising about **2.4 ppm per year**. Starting from 420 ppm:

$$420\\ \\text{ppm} + (2.4\\ \\text{ppm/yr} \\times 20\\ \\text{yr}) = 420 + 48 = 468\\ \\text{ppm}$$

Holding emissions steady still adds nearly 50 ppm in 20 years. To stop the rise, emissions must fall to about the size of the sinks, and to halt warming they must fall to **net zero**.

> 🔑 **AP Connection:** "Emissions fell" and "concentration fell" are different claims. In 2020, pandemic lockdowns cut global $CO_{2}$ emissions by roughly 5–6%, yet the Keeling curve kept climbing, because emissions were still far larger than the sinks.`,
    },
    {
      id: 'apecc2-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Based on the country table in this part, which claim is supported?',
            options: [
              'China has emitted the most $CO_{2}$ in total since 1850',
              'India\'s annual emissions exceed those of the United States',
              'The United States emits the most $CO_{2}$ per person of the three',
              'China\'s per-person emissions exceed those of the United States',
            ],
            correctAnswer: 2,
            explanation: 'At about 14.9 t per person, the United States is far ahead of China (about 8.1 t) and India (about 2.0 t). China leads in annual total, but the United States leads in cumulative emissions, and India\'s annual total is about half of the U.S. total.',
          },
          {
            question: 'Suppose global $CO_{2}$ emissions stop growing and stay at today\'s level for 20 years. What happens to the atmospheric $CO_{2}$ concentration during that time?',
            options: [
              'It holds steady at today\'s level',
              'It drops back toward 280 ppm',
              'It falls slowly as the sinks catch up',
              'It keeps rising at about today\'s pace',
            ],
            correctAnswer: 3,
            explanation: 'Steady emissions still add far more carbon dioxide each year than the ocean and land remove, so the concentration keeps climbing. It would level off only once emissions fell to about the size of the sinks.',
          },
          {
            question: 'A utility replaces a coal plant with a natural gas plant that makes the same amount of electricity. Which factor could reduce the climate benefit of the switch?',
            options: [
              'Gas releasing more $CO_{2}$ per kWh than coal does',
              'Gas plants needing more cooling water than coal',
              'Gas combustion making more water vapor than coal',
              'Methane escaping from gas wells and pipelines',
            ],
            correctAnswer: 3,
            explanation: 'Natural gas is mostly methane, which traps far more heat per kilogram than carbon dioxide, so leaks upstream offset part of the gain. Gas releases less carbon dioxide per kWh than coal, and water vapor from combustion rains out within days.',
          },
        ],
      },
    },
    {
      id: 'apecc2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Idea | Key fact |
|---|---|
| Total emissions | About 59 Gt $CO_{2}$-eq in 2019 (IPCC AR6) |
| Sectors | Energy supply about 34%, industry 24%, agriculture and land use 22%, transport 15%, buildings 6% |
| Gases | Fossil and industrial $CO_{2}$ about 64%, land-use $CO_{2}$ 11%, methane 18%, nitrous oxide 4%, F-gases 2% |
| Methane sources | Agriculture about 40%, fossil fuels about 35%, waste about 20% of human methane |
| Cement | $CaCO_{3} \\rightarrow CaO + CO_{2}$: about 0.44 t $CO_{2}$ per tonne of limestone, regardless of fuel |
| Countries | China leads in annual total, the United States in per-capita (of the big three) and cumulative |
| Coal vs gas | About 1.0 vs 0.4 kg $CO_{2}$ per kWh; methane leaks cut the benefit |
| Flow vs stock | Concentration rises until emissions fall to the size of the sinks |

**Next:** Part 3 turns to the evidence: how thermometers, ice, oceans and living things independently record the warming these emissions cause.`,
    },
  ],
},

// ───────────────────────── PART 3 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc3-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 3 of 7 — Multiple Lines of Evidence**

---

| Section |
|---------|
| 🔎 Independent Witnesses |
| Weighing Ice from Space |
| Living Calendars: Phenology Records |
| Reading Several Indicators at Once |
| Judging an Argument About the Data |

> 🔑 **Key Concept:** The CED notes that Earth's climate has always changed and that $CO_{2}$ and ice-core data record those changes (CED 9.5). Today's warming is established not by one graph but by many **independent** measurements, made with different instruments by different groups, that all point the same way. Ice cores, temperature anomalies and the fingerprints of greenhouse warming are covered in Atmosphere & Climate, Part 4; this part adds the other witnesses and the skills to read them together.`,
    },
    {
      id: 'apecc3-witnesses',
      type: 'text' as const,
      content: `## 🔎 Independent Witnesses

| Indicator | How it is measured | What it shows |
|---|---|---|
| **Surface temperature** | Tens of thousands of land stations plus ships and buoys, compiled separately by NASA, NOAA, the UK Met Office, Berkeley Earth and others | The independent records agree closely; 2024 was the warmest year on record, about 1.55°C above 1850–1900 (WMO) |
| **Ocean heat content** | About 4,000 robotic **Argo floats** that dive to 2,000 m and surface to report | The ocean has absorbed about 90% of the extra heat; its heat content has risen nearly every year |
| **Arctic sea ice** | Satellites since 1979 | The September minimum has shrunk by roughly half, and the remaining ice is thinner and younger |
| **Mountain glaciers** | Yearly stake and snow-pit measurements of mass balance | Most of the world's reference glaciers lose mass year after year |
| **Ice sheets** | The GRACE satellites, which weigh ice by measuring gravity | Greenland and Antarctica are both losing mass |
| **Permafrost** | Thermometers in boreholes tens of meters deep | Frozen ground is warming, and in places thawing |
| **Phenology** | Records of flowering, leaf-out, lake ice and bird migration dates | Spring events are arriving earlier |
| **Sea level** | Tide gauges since the 1800s; satellite altimeters since 1993 | Rising and accelerating (numbers in Atmosphere & Climate, Part 3) |

### Why independence matters

Each record has its own possible errors. A thermometer can be affected by a city growing around it; a satellite sensor can drift; a tide gauge can sit on sinking land. But these errors are **unrelated to one another**. A city's heat cannot thin Arctic sea ice or warm the deep ocean. When indicators that share no instruments and no sources of error all show warming, the conclusion is far stronger than any one of them alone. Scientists call this agreement of independent evidence **consilience**.

### Worked Example 1: Reading a Satellite Record (approximate values, NSIDC)

In the early 1980s, the September Arctic sea-ice minimum was typically about **7.0 million km²**. The record low, in 2012, was about **3.4 million km²**.

$$\\frac{3.4 - 7.0}{7.0} \\times 100 \\approx -51\\%$$

The late-summer ice cover in the record year was about **half** its early-1980s size.`,
    },
    {
      id: 'apecc3-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A critic argues that thermometer records exaggerate warming because cities have grown up around many weather stations. Which observation best answers this objection?',
            options: [
              'City stations record higher readings than rural ones',
              'The hottest readings come on summer afternoons',
              'There are more weather stations now than in 1900',
              'Ocean floats and sea ice record the same change',
            ],
            correctAnswer: 3,
            explanation: 'Ocean heat and sea ice are measured by floats and satellites far from any city, so their agreement shows the warming is not an urban artifact. Higher city readings support the critic, and station counts and daily timing say nothing about the long-term record.',
          },
          {
            question: 'How do the GRACE satellites measure the amount of ice lost from the Greenland ice sheet?',
            options: [
              'By tracking changes in the brightness of the ice',
              'By tracking changes in the temperature of the snow',
              'By tracking changes in the pull of gravity over it',
              'By tracking changes in the number of icebergs',
            ],
            correctAnswer: 2,
            explanation: 'A smaller ice sheet has less mass and pulls slightly less on the passing satellites, so changes in gravity reveal changes in mass. Brightness, snow temperature and iceberg counts do not measure the total mass of the ice.',
          },
          {
            question: 'Kyoto, Japan, has records of its cherry-blossom dates going back to the 800s, and recent blooms are the earliest in that record. Besides global warming, which factor could also contribute to earlier blooms there?',
            options: [
              'Spring days growing longer each decade',
              'Heat from the city as it grew larger',
              'Thinning of the stratospheric ozone',
              'Rising sea level along the coast of Japan',
            ],
            correctAnswer: 1,
            explanation: 'Pavement and buildings make cities warmer than the countryside, and Kyoto grew as the climate warmed, so both effects push blooms earlier. Day length on a given date does not change, ozone thinning affects ultraviolet light, and sea level does not set inland air temperature.',
          },
        ],
      },
    },
    {
      id: 'apecc3-grace',
      type: 'text' as const,
      content: `## Weighing Ice from Space

Since 2002, the twin **GRACE** satellites and their successors have measured tiny changes in Earth's gravity. Over Greenland and Antarctica, the pull has weakened year after year as the ice sheets lose mass.

| Ice body | Average mass loss, 2002–2023 (NASA, rounded) |
|---|---|
| Greenland ice sheet | About 270 Gt per year |
| Antarctic ice sheet | About 150 Gt per year |

### Converting ice to sea level

The ocean covers about 362 million km². Spreading **about 360 Gt** of water over it raises sea level by about **1 mm**. (1 Gt of water is 1 km³.)

### Worked Example 2: The Ice Sheets' Share of Sea-Level Rise

$$\\text{Combined loss} = 270 + 150 = 420\\ \\text{Gt/yr}$$

$$\\frac{420\\ \\text{Gt/yr}}{360\\ \\text{Gt/mm}} \\approx 1.2\\ \\text{mm/yr}$$

Global sea level has recently risen about 3.7 mm per year, so the two ice sheets supplied roughly

$$\\frac{1.2}{3.7} \\times 100 \\approx 32\\%$$

of the rise. Thermal expansion and mountain glaciers supply most of the rest. Two completely different measurements, satellite gravity and the sea-level record, fit together, which is consilience in action.

## Living Calendars: Phenology Records

**Phenology** is the timing of seasonal events in living things. Because people have written down these dates for centuries, phenology records extend the climate record far beyond thermometers.

| Record | What it shows |
|---|---|
| Kyoto cherry-blossom festival dates (since the 800s) | Peak bloom in 2021 was the earliest in about 1,200 years of records |
| Lake Mendota, Wisconsin, ice cover (since the 1850s) | The lake now freezes later and thaws earlier; ice lasts roughly a month less than in the 1850s |
| Leaf-out and first-flowering dates across Europe and North America | Spring events arrive days to weeks earlier than in the mid-1900s |

Living records also respond to things besides climate. City heat, for example, also makes urban trees bloom early, so scientists compare urban and rural sites before drawing conclusions.`,
    },
    {
      id: 'apecc3-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. Use 360 Gt of water per 1 mm of global sea level. (Illustrative data for question 3.)

**1)** Mountain glaciers in one region lose 90 Gt of ice per year. How many millimeters per year does this add to global sea level?

**2)** How many gigatonnes of ice must melt from land to raise global sea level by 1 cm?

**3)** A lake's average ice-out date moved from day 120 of the year to day 106 over 70 years. By how many days per decade did ice-out move earlier?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.25', '3600', '2'],
        hint1: 'Divide the yearly ice loss by 360 Gt per mm.',
        hint2: '1 cm is 10 mm.',
        hint3: 'Seventy years is 7 decades. Find the change in days first.',
        explanation: '1) 90 ÷ 360 = 0.25 mm per year. 2) 10 mm × 360 Gt per mm = 3,600 Gt. 3) 120 − 106 = 14 days over 7 decades = 2 days earlier per decade.',
      },
    },
    {
      id: 'apecc3-table',
      type: 'text' as const,
      content: `## Reading Several Indicators at Once

Free-response questions often give a table with several columns and ask what it supports. Read each column for its **direction**, then its **rate**, then whether the columns **agree**.

**Table 1. Climate indicators (illustrative data patterned on NASA, NSIDC and glacier-monitoring records)**

| Year | Temperature anomaly vs 1951–1980 (°C) | September Arctic sea ice (million km²) | Lake ice-out (day of year) | Glacier mass balance since 1980 (m of water) |
|---|---|---|---|---|
| 1980 | +0.27 | 7.7 | 118 | 0 |
| 1990 | +0.45 | 6.2 | 115 | −3 |
| 2000 | +0.40 | 6.3 | 112 | −8 |
| 2010 | +0.72 | 4.9 | 109 | −16 |
| 2020 | +1.01 | 4.0 | 104 | −26 |

### Worked Example 3: Rates from the Table

**Sea ice, 1980 to 2020:**

$$\\frac{4.0 - 7.7}{7.7} \\times 100 \\approx -48\\%$$

**Glacier loss by decade:** 3 m in the 1980s, 5 m in the 1990s, 8 m in the 2000s and 10 m in the 2010s. Loss is **accelerating**.

**Ice-out:** $118 - 104 = 14$ days earlier over 4 decades, or 3.5 days per decade.

### Year-to-year noise

From 1990 to 2000, the temperature anomaly **dipped** slightly and sea ice **grew** slightly. One decade-to-decade step can go against the long-term direction because of El Niño, volcanic eruptions and ordinary variability. The 40-year picture is what matters, and every column shows it.

## Judging an Argument About the Data

| Flawed argument | What is wrong with it |
|---|---|
| "Temperatures did not rise from 1998 to 2008, so warming stopped." | **Cherry-picking a start year:** 1998 was boosted by a very strong El Niño, so starting there hides the trend. Longer periods show continued warming |
| "This glacier is growing, so glaciers are not shrinking." | **One site is not the global record.** A few glaciers gain mass; the large majority of monitored glaciers lose it |
| "Sea ice grew this year, so the Arctic is recovering." | **One year is weather-scale noise.** Judge the multi-decade direction |

> 🔑 **AP Connection:** When asked whether data support a claim, cite the **specific values** and the **time span**, and say whether the span is long enough to show a climate trend rather than year-to-year variation.`,
    },
    {
      id: 'apecc3-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯

Use Table 1.`,
      exercise: {
        questions: [
          {
            question: 'Which claim is best supported by Table 1?',
            options: [
              'Each indicator moved toward warmer conditions in every decade shown',
              'Glacier loss slowed after 2000 even though the anomaly kept rising',
              'Sea ice shrank in the Arctic as a result of earlier lake ice-out',
              'Across 1980 to 2020, the four indicators each shifted toward warming',
            ],
            correctAnswer: 3,
            explanation: 'Over the full 40 years, temperature rose, sea ice shrank, ice-out came earlier and glaciers lost mass. Not every decade moved the same way, since the anomaly dipped and sea ice grew slightly in the 1990s, and glacier loss sped up rather than slowed.',
          },
          {
            question: 'What was the average decline in September Arctic sea ice from 1980 to 2020, in million km² per decade?',
            options: [
              'About 0.37',
              'About 0.93',
              'About 3.70',
              'About 9.25',
            ],
            correctAnswer: 1,
            explanation: 'The ice fell from 7.7 to 4.0 million km², a loss of 3.7, spread over 4 decades: 3.7 ÷ 4 ≈ 0.93. The value 3.70 is the total change, and 0.37 divides by 10 instead of by the number of decades.',
          },
          {
            question: 'A blog post computes global warming using only the years 1998 to 2008 and concludes that warming has stopped. Why is this conclusion weak?',
            options: [
              'Satellites did not measure surface temperature until after 2008',
              'An El Niño made 1998 unusually warm, and 10 years is too short',
              'Global temperatures are recorded only once every ten years',
              'Ocean heat content fell sharply over that same ten-year span',
            ],
            correctAnswer: 1,
            explanation: 'Starting at a year inflated by a strong El Niño and using a short window hides the long-term rise, which continued in later years. Thermometer records exist for every year, and ocean heat content kept rising through that decade.',
          },
        ],
      },
    },
    {
      id: 'apecc3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Idea | Key fact |
|---|---|
| Independent witnesses | Thermometers, Argo floats, satellites, glacier surveys, boreholes, phenology and tide gauges all show warming |
| Consilience | Records with unrelated sources of error agree, which makes the conclusion robust |
| Sea ice | September minimum fell from about 7.0 to about 3.4 million km² (2012), roughly half |
| GRACE | Greenland about 270 Gt/yr, Antarctica about 150 Gt/yr of ice lost (2002–2023) |
| Ice to sea level | About 360 Gt of water raises sea level about 1 mm |
| Phenology | Kyoto cherry blossoms earliest in about 1,200 years (2021); lake ice lasts weeks less |
| Reading tables | Direction, then rate, then agreement; one decade can go against the trend |
| Flawed arguments | Cherry-picked start years, single sites and single years |

**Next:** Part 4 explains why the warming does not stay small: the feedback loops that amplify or damp a change, and the tipping points that could lock some changes in.`,
    },
  ],
},

// ───────────────────────── PART 4 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc4-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 4 of 7 — Feedbacks and Tipping Points**

---

| Section |
|---------|
| 🔄 Reading a Loop Diagram |
| Albedo by the Numbers |
| Amplifiers and Stabilizers |
| How Much Do Feedbacks Add? |
| Tipping Points |

> 🔑 **Key Concept:** The CED explains that Earth's polar regions respond fastest to climate change because melting snow and ice expose darker surfaces that absorb more energy, a **positive feedback loop** (CED 9.5). This part shows how to work out whether any loop amplifies or damps a change, puts numbers on albedo, and explains why some changes may pass a point of no easy return. The three standard positive feedbacks are listed in Atmosphere & Climate, Part 1.`,
    },
    {
      id: 'apecc4-loops',
      type: 'text' as const,
      content: `## 🔄 Reading a Loop Diagram

A feedback loop is a chain of cause and effect that comes back to its starting point. Each arrow in the chain is one of two kinds:

| Link | Meaning | Example |
|---|---|---|
| **Same (+)** | When the first thing increases, the second increases | More absorbed sunlight → higher temperature |
| **Opposite (−)** | When the first thing increases, the second decreases | Higher temperature → less ice |

### The counting rule

Count the **opposite (−)** links around the loop:

- An **even** number (0, 2, 4 …) → a **positive (reinforcing)** feedback: the change amplifies itself.
- An **odd** number (1, 3 …) → a **negative (balancing)** feedback: the change damps itself.

### Worked Example 1: The Ice-Albedo Loop

| Link | Kind |
|---|---|
| Temperature ↑ → sea-ice area ↓ | Opposite (−) |
| Sea-ice area ↓ → albedo ↓ | Same (+): less ice, lower albedo |
| Albedo ↓ → sunlight absorbed ↑ | Opposite (−) |
| Sunlight absorbed ↑ → temperature ↑ | Same (+) |

Two opposite links is an even number, so the loop is **positive**. Warming leads to more warming.

### Worked Example 2: The Low-Cloud Loop

| Link | Kind |
|---|---|
| Temperature ↑ → evaporation ↑ | Same (+) |
| Evaporation ↑ → low cloud cover ↑ (assumed) | Same (+) |
| Low cloud cover ↑ → sunlight reflected ↑ | Same (+) |
| Sunlight reflected ↑ → temperature ↓ | Opposite (−) |

One opposite link is an odd number, so **if** low clouds increased, this loop would be **negative**. Observations and models suggest low clouds may instead thin over some warming oceans, which is why the overall cloud feedback is uncertain (the IPCC rates it as likely positive).

> ⚠️ **Vocabulary trap:** "Positive" means **self-reinforcing**, not "good." Most positive climate feedbacks are harmful because they amplify warming.`,
    },
    {
      id: 'apecc4-albedo',
      type: 'text' as const,
      content: `## Albedo by the Numbers

**Albedo** is the fraction of incoming sunlight a surface reflects, from 0 (absorbs everything) to 1 (reflects everything). The rest is absorbed:

$$\\text{Absorbed} = (1 - \\alpha) \\times \\text{incoming sunlight}$$

| Surface | Typical albedo (approximate) |
|---|---|
| Fresh snow | 0.80–0.90 |
| Sea ice | 0.50–0.70 |
| Desert sand | 0.30–0.40 |
| Grassland | About 0.25 |
| Conifer forest | 0.08–0.15 |
| Open ocean (sun high in the sky) | About 0.06 |

### Worked Example 3: Sea Ice Versus Open Water

A midsummer Arctic surface receives **300 W/m²** of sunlight (illustrative value).

$$\\text{Sea ice } (\\alpha = 0.60):\\ (1 - 0.60) \\times 300 = 120\\ \\text{W/m}^{2}$$

$$\\text{Open ocean } (\\alpha = 0.06):\\ (1 - 0.06) \\times 300 = 282\\ \\text{W/m}^{2}$$

$$\\frac{282}{120} \\approx 2.4$$

Replacing ice with open water more than **doubles** the energy absorbed. A common error is to divide the albedos (0.60 ÷ 0.06 = 10); the comparison must use the **absorbed** fractions, 0.94 and 0.40.

### Worked Example 4: Trees Moving North

As the Arctic warms, shrubs and conifers spread into tundra. In winter, a snowy tundra plain has an albedo near 0.8, but dark trees sticking up through the snow lower a forested landscape's albedo to roughly 0.3 (illustrative values). With 100 W/m² of late-winter sunlight:

$$\\text{Snowy tundra: } 0.2 \\times 100 = 20\\ \\text{W/m}^{2} \\qquad \\text{Forest: } 0.7 \\times 100 = 70\\ \\text{W/m}^{2}$$

The forest absorbs more than three times as much, warming the region further: another positive feedback, even though the new trees also store some carbon.`,
    },
    {
      id: 'apecc4-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Suppose warming increases evaporation, more evaporation produces more low clouds, and more low clouds reflect more sunlight back to space. What kind of loop is this?',
            options: [
              'A positive feedback that amplifies the warming',
              'A negative feedback that damps the warming',
              'A tipping point that locks in a cooler state',
              'A forcing that starts a climate change by itself',
            ],
            correctAnswer: 1,
            explanation: 'The loop contains one opposite link (more reflected sunlight lowers temperature), an odd number, so it opposes the original warming. A forcing is an outside push such as added carbon dioxide, not a response within a loop.',
          },
          {
            question: 'Conifer forests are spreading north into snow-covered Arctic tundra. Why does this tend to amplify regional warming?',
            options: [
              'Dark trees above the snow absorb more sunlight',
              'Growing trees release methane through their leaves',
              'Tree roots carry heat down into the frozen ground',
              'Forests give off water vapor that blocks the sunlight',
            ],
            correctAnswer: 0,
            explanation: 'Trees standing above the snow lower the landscape\'s albedo, so more sunlight is absorbed. Trees take up carbon rather than releasing methane, and water vapor that blocked sunlight would cool the surface, not warm it.',
          },
          {
            question: 'Sunlight of 300 W/m² falls on sea ice (albedo 0.60) and on open ocean (albedo 0.06). The open ocean absorbs about how many times as much energy as the sea ice?',
            options: [
              'About 0.4 times',
              'About 1.6 times',
              'About 2.4 times',
              'About 10 times',
            ],
            correctAnswer: 2,
            explanation: 'The ocean absorbs 0.94 × 300 = 282 W/m² and the ice absorbs 0.40 × 300 = 120 W/m², and 282 ÷ 120 ≈ 2.4. Dividing the albedos gives 10, which compares reflected light, not absorbed energy.',
          },
        ],
      },
    },
    {
      id: 'apecc4-amplifiers',
      type: 'text' as const,
      content: `## Amplifiers and Stabilizers

| Feedback | Sign | How it works | Time scale |
|---|---|---|---|
| **Water vapor** | Positive | Warmer air holds about 7% more vapor per 1°C, and vapor traps infrared | Days to years |
| **Ice-albedo** | Positive | Melting snow and ice expose darker surfaces | Seasons to centuries |
| **Permafrost carbon** | Positive | Thawed soil organic matter decomposes: $CO_{2}$ where soil is dry, **methane** where it is waterlogged and lacks oxygen | Decades to centuries |
| **Ocean uptake** | Positive | Warmer water dissolves less $CO_{2}$, so more stays in the air | Years to centuries |
| **Wildfire** | Positive | Hotter, drier forests burn more, releasing stored carbon | Years to decades |
| **Infrared emission (Planck response)** | Negative | A warmer planet radiates more energy to space; the strongest stabilizer of all | Immediate |
| **$CO_{2}$ fertilization** | Negative | More $CO_{2}$ can speed photosynthesis, but the effect is limited by water and nutrients such as nitrogen | Years to decades |
| **Rock weathering** | Negative | Warmer, wetter conditions speed the chemical weathering of rocks, which removes $CO_{2}$ | Hundreds of thousands of years |

### Why permafrost worries scientists

Permafrost soils hold roughly **1,400–1,600 Gt of carbon** in frozen plant and animal remains, nearly **twice** the roughly 870–890 Gt of carbon in today's atmosphere. Only part of it is expected to be released this century, but once it is released, it cannot be refrozen on human time scales.

### Why the Arctic warms fastest

The ice-albedo and other local feedbacks are strongest where snow and ice are widespread. Since 1979, the Arctic has warmed roughly two to four times as fast as the global average, depending on the period and region measured.

## How Much Do Feedbacks Add?

If $CO_{2}$ were doubled and nothing else responded, physics predicts about **1.2°C** of warming. Once water vapor, ice, clouds and other feedbacks respond, the IPCC's best estimate of the long-term warming from doubled $CO_{2}$ is about **3°C** (likely range 2.5–4°C).

### Worked Example 5: The Amplification Factor

$$\\frac{3.0\\ \\text{°C}}{1.2\\ \\text{°C}} = 2.5$$

Feedbacks multiply the direct effect by about **2.5**. That is why scientists study them closely: uncertainty in the feedbacks, especially clouds, is the main source of uncertainty in how much warming a given amount of $CO_{2}$ will cause.`,
    },
    {
      id: 'apecc4-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter a number for questions 1 and 2 and one word for question 3. (Illustrative data.)

**1)** Late-winter sunlight of 250 W/m² falls on fresh snow with an albedo of 0.80. How many W/m² does the snow absorb?

**2)** The snow melts, exposing bare ground with an albedo of 0.20. How many times as much energy does the bare ground absorb as the snow did?

**3)** A loop diagram has four links: three are opposite (−) links and one is a same (+) link. Is the loop a positive or a negative feedback?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '4', 'negative'],
        hint1: 'Absorbed = (1 − albedo) × incoming = 0.20 × 250.',
        hint2: 'Bare ground absorbs 0.80 × 250. Divide that by the snow\'s value.',
        hint3: 'Count the opposite links. Is three even or odd?',
        explanation: '1) 0.20 × 250 = 50 W/m². 2) Bare ground absorbs 0.80 × 250 = 200 W/m², and 200 ÷ 50 = 4 times as much. 3) Three opposite links is an odd number, so the loop is a negative (balancing) feedback.',
      },
    },
    {
      id: 'apecc4-tipping',
      type: 'text' as const,
      content: `## Tipping Points

A **tipping point** is a threshold beyond which a part of the climate system shifts into a different state, often driven by its own positive feedbacks, and does not easily shift back even if temperatures later fall.

| Tipping element | The reinforcing process | What is at stake |
|---|---|---|
| **Greenland ice sheet** | As the surface melts, it sinks to lower, warmer altitudes and melts faster (melt-elevation feedback) | About 7 m of sea level if it all melted, over centuries to millennia |
| **West Antarctic ice sheet** | Warm ocean water melts the ice from below where its base lies below sea level | Several meters of sea level over centuries or longer |
| **Atlantic overturning circulation** | Fresh meltwater and warmer surface water are less dense, weakening the sinking that drives the current | Cooler, stormier northern Europe; shifted tropical rain belts. The IPCC judges it very likely to weaken this century |
| **Amazon rainforest** | Trees recycle rainfall; deforestation plus drought means less rain, more fire and more tree loss | Conversion of parts of the forest toward savanna, releasing stored carbon |
| **Permafrost** | Thaw releases $CO_{2}$ and methane that cause more thaw | Additional warming that cannot be switched off |
| **Warm-water coral reefs** | Repeated marine heatwaves outpace recovery (Part 5) | The IPCC projects 70–90% of reefs lost at 1.5°C of warming and over 99% at 2°C |

### Why "hard to reverse" matters

An ice sheet that took thousands of years to build cannot regrow in a few decades, even if the climate cools back down. This one-way behavior is why many scientists argue for limiting warming **before** these thresholds are crossed, and why the exact temperatures at which they occur remain an active research question.

> 🔑 **AP Connection:** In a free-response answer, name the feedback, describe each step in the chain, and state whether it **amplifies** or **reduces** the original change. "Melting ice causes more warming" earns less than "Melting ice exposes darker ocean, which absorbs more sunlight, which raises temperature and melts more ice: a positive feedback."`,
    },
    {
      id: 'apecc4-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which process is the strongest negative feedback that keeps Earth\'s temperature from rising without limit?',
            options: [
              'Warmer oceans dissolve more $CO_{2}$ from the air',
              'A warmer planet gives off more infrared to space',
              'Melting ice reflects a larger share of sunlight',
              'Thawing permafrost locks more carbon into soil',
            ],
            correctAnswer: 1,
            explanation: 'Any warmer body radiates more energy, so as Earth warms it loses more heat to space until a new balance is reached. Warmer oceans actually dissolve less carbon dioxide, melting ice lowers albedo, and thawing permafrost releases carbon.',
          },
          {
            question: 'Which statement about Arctic permafrost is accurate?',
            options: [
              'Its frozen soils hold about twice the carbon now in the air',
              'Its thawed soils release carbon dioxide but no methane',
              'Its carbon is held in bedrock that stays put after a thaw',
              'Most of it lies beneath the Antarctic ice sheet today',
            ],
            correctAnswer: 0,
            explanation: 'Permafrost holds roughly 1,400–1,600 Gt of carbon, close to twice the atmosphere\'s. Waterlogged thawed soils release methane, the carbon is in frozen organic matter rather than rock, and permafrost lies mainly in the Arctic and high mountains.',
          },
          {
            question: 'Which process makes the Greenland ice sheet a possible tipping element?',
            options: [
              'Its meltwater is salty and dense, which speeds up Atlantic currents',
              'Its ice is floating, so its melting barely changes global sea level',
              'Its lowering surface meets warmer air and so melts even faster',
              'Its surface darkens in winter, which reflects more of the sunlight',
            ],
            correctAnswer: 2,
            explanation: 'As the ice thins, its surface drops to lower, warmer altitudes, which speeds melting, a self-reinforcing loop. Its meltwater is fresh and tends to slow the Atlantic overturning, the ice sits on land so its loss raises sea level, and a darker surface absorbs more sunlight.',
          },
        ],
      },
    },
    {
      id: 'apecc4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Idea | Key fact |
|---|---|
| Loop polarity | Even number of opposite links → positive (reinforcing); odd → negative (balancing) |
| Albedo math | Absorbed = (1 − α) × incoming; compare absorbed fractions, not albedos |
| Albedo values | Snow 0.8–0.9, sea ice 0.5–0.7, forest about 0.1, open ocean about 0.06 |
| Positive feedbacks | Water vapor, ice-albedo, permafrost carbon, weaker ocean uptake, wildfire, northward forests |
| Negative feedbacks | Infrared emission (strongest), $CO_{2}$ fertilization (limited), rock weathering (very slow) |
| Clouds | Low clouds cool, high clouds warm; net feedback likely positive but uncertain |
| Amplification | About 1.2°C without feedbacks → about 3°C with them for doubled $CO_{2}$ (factor about 2.5) |
| Permafrost | About 1,400–1,600 Gt C, nearly twice the atmosphere's |
| Tipping points | Greenland, West Antarctica, Atlantic overturning, Amazon, permafrost, coral reefs |

**Next:** Part 5 goes to the ocean, where warming, acidification and rising seas are already reshaping reefs, fisheries, shellfish farms and island nations.`,
    },
  ],
},

// ───────────────────────── PART 5 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc5-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 5 of 7 — Ocean Warming, Acidification and Sea-Level Rise: Case Studies**

---

| Section |
|---------|
| 🪸 The Great Barrier Reef: Heat Stress You Can Count |
| The Gulf of Maine: Fisheries on the Move |
| Pacific Northwest Oysters: Acidification Arrives Early |
| Atoll Nations: Living a Meter Above the Sea |

> 🔑 **Key Concept:** The CED links ocean warming to habitat loss, metabolic and reproductive changes and coral bleaching (CED 9.6), links ocean acidification to the loss of carbonate that corals and shellfish need (CED 9.7), and names the displacement of coastal populations as an effect of rising seas (CED 9.5). This part follows four real places where those effects are already measurable. The pH arithmetic is in Atmosphere & Climate, Part 5, and the biology of bleaching is in Biodiversity, Part 5.`,
    },
    {
      id: 'apecc5-reef',
      type: 'text' as const,
      content: `## 🪸 The Great Barrier Reef: Heat Stress You Can Count

Australia's Great Barrier Reef stretches about 2,300 km. Its mass bleaching events include 1998, 2002, 2016, 2017, 2020, 2022 and 2024. In 2016 alone, heat stress killed roughly **30%** of the reef's shallow-water corals within about nine months, with the worst losses in the northern third.

### Measuring heat stress: degree heating weeks

NOAA's Coral Reef Watch tracks heat stress with **degree heating weeks (DHW)**:

1. For each reef, find the warmest monthly average temperature in a normal year, the **maximum monthly mean**.
2. Each week, the **HotSpot** is how far the water is above that value.
3. Add up the HotSpots of **1°C or more** over the last 12 weeks. Smaller HotSpots are not counted.

| DHW (°C-weeks) | Expected effect |
|---|---|
| Below 4 | Heat stress; little bleaching expected |
| 4 or more | Significant bleaching likely |
| 8 or more | Severe bleaching and widespread coral death likely |

### Worked Example 1: Adding Up Heat Stress (illustrative data)

Weekly HotSpots over 12 weeks (°C): 0, 0.5, 1.0, 1.5, 2.0, 2.5, 2.0, 1.0, 0.5, 0, 0, 0

Count only the values of 1.0 or more:

$$\\text{DHW} = 1.0 + 1.5 + 2.0 + 2.5 + 2.0 + 1.0 = 10.0\\ \\text{°C-weeks}$$

That is above 8, so severe bleaching and widespread mortality are likely. The two 0.5°C weeks do not count, even though the water was warmer than normal.

### Why frequency matters as much as intensity

Fast-growing corals need roughly **10 to 15 years** to regrow after a mass die-off. Across reefs worldwide, the typical gap between severe bleaching events shrank from about **25–30 years** in the early 1980s to about **6 years** by 2016 (Hughes and others, 2018). Reefs are being hit again before they can recover.

## The Gulf of Maine: Fisheries on the Move

Between 2004 and 2013, the Gulf of Maine warmed faster than almost any other part of the world ocean. Two fisheries show the CED's warming effects:

| Species | What changed | CED effect |
|---|---|---|
| **Atlantic cod** | Warmer water lowered survival of young cod; the stock failed to recover even under strict catch limits | Reproductive change |
| **American lobster** | Southern New England waters now often exceed about 20°C, which stresses lobsters and favors shell disease; the fishery there collapsed while Maine's catch boomed | Habitat loss and metabolic stress in the south; habitat gain in the north |

Maine's lobster boom is **not** a sign that warming is harmless. As waters keep warming, the zone of ideal temperature keeps moving north and into deeper water, toward Canada, and the communities built around each fishery cannot move as easily as the animals do.`,
    },
    {
      id: 'apecc5-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'NOAA reports that a reef has reached 9 degree heating weeks. What does this value predict?',
            options: [
              'Mild heat stress with little or no visible bleaching',
              'Severe bleaching with widespread coral death likely',
              'Bleaching confined to corals in the deepest water',
              'Faster coral growth as warm water speeds metabolism',
            ],
            correctAnswer: 1,
            explanation: 'A DHW of 8 or more means heat stress strong and long enough for severe bleaching and significant mortality. Shallow corals are usually hit hardest, and prolonged heat beyond the normal maximum harms corals rather than speeding their growth.',
          },
          {
            question: 'Why is the shrinking gap between mass bleaching events a serious threat to reefs?',
            options: [
              'Bleached corals regrow their algae within a few days',
              'Each event leaves the surviving corals immune to heat',
              'Dead corals take a decade or more to regrow',
              'Reef fish need longer gaps to learn new feeding sites',
            ],
            correctAnswer: 2,
            explanation: 'If severe events come about every 6 years but recovery takes 10 to 15, reefs lose coral cover with each cycle. Algae can return to surviving corals, but corals that die must be replaced by slow regrowth, and heat tolerance builds only slowly, if at all.',
          },
          {
            question: 'Which change in New England fisheries is consistent with the warming of the Gulf of Maine?',
            options: [
              'Lobster catches fell in southern New England and rose in Maine',
              'Lobster catches rose in both areas as the water warmed',
              'Lobster catches rose in southern New England and fell in Maine',
              'Cod spawning increased as the water warmed above its usual range',
            ],
            correctAnswer: 0,
            explanation: 'As southern waters grew too warm, lobster habitat shifted north toward Maine. Cold-water cod respond to warming by declining or moving north, not south, and warmer water reduced the survival of young cod.',
          },
        ],
      },
    },
    {
      id: 'apecc5-oysters',
      type: 'text' as const,
      content: `## Pacific Northwest Oysters: Acidification Arrives Early

In 2007 and 2008, oyster hatcheries in Oregon and Washington, including the Whiskey Creek hatchery on Netarts Bay, Oregon, saw mass die-offs of oyster larvae. The cause, traced in a 2012 study, was the water pumped in from the bay.

### What was happening

1. Along the Pacific Northwest coast, summer winds cause **upwelling**: cold, deep water rises to the surface.
2. Deep water is naturally rich in $CO_{2}$, released by the decomposition of organic matter that sank over decades.
3. The extra $CO_{2}$ the ocean has absorbed from human emissions pushes this water past a critical threshold.
4. In that water, **carbonate ions** $(CO_{3}^{2-})$ are so scarce that oyster larvae cannot build their first shells fast enough, and they die within days.

### A simplified measure: saturation state

Chemists describe how easy it is to build a calcium carbonate shell with the **saturation state**, written $\\Omega$ (omega). In simplified form:

$$\\Omega \\approx \\frac{\\text{carbonate ions present}}{\\text{carbonate ions needed for saturation}}$$

| $\\Omega$ | Meaning for shell builders |
|---|---|
| Above 1 | Shells can form; higher is easier |
| About 1 | Balanced: shells neither form easily nor dissolve |
| Below 1 | **Corrosive**: unprotected shell material dissolves |

Young oyster larvae have very little energy to spare, so they struggle even when $\\Omega$ is above 1 but low.

### Worked Example 2: Upwelled Water (illustrative data)

Surface water has 120 µmol/kg of carbonate, and saturation requires 80 µmol/kg:

$$\\Omega = \\frac{120}{80} = 1.5$$

Upwelled water with extra $CO_{2}$ has only 64 µmol/kg:

$$\\Omega = \\frac{64}{80} = 0.8 \\quad \\text{(corrosive)}$$

### How the hatcheries adapted

- **Monitoring:** sensors on the intake pipes measure $CO_{2}$ and $\\Omega$ in real time.
- **Timing:** pumping water in the afternoon, when photosynthesis by algae in the bay has drawn down $CO_{2}$.
- **Buffering:** adding sodium carbonate to the intake water raises the carbonate available to larvae.

These are adaptations: they protect the oysters but do nothing about the cause, rising atmospheric $CO_{2}$.`,
    },
    {
      id: 'apecc5-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

**1)** A reef's weekly HotSpots over the last 12 weeks were (°C): 0, 0, 0.5, 1.0, 1.5, 2.0, 2.0, 1.5, 0.5, 0, 0, 0. What is its DHW, in °C-weeks?

**2)** Seawater holds 90 µmol/kg of carbonate, and saturation requires 100 µmol/kg. What is $\\Omega$?

**3)** Carbonate in a bay falls from 150 µmol/kg to 90 µmol/kg. What is the percent decrease?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['8', '0.9', '40'],
        hint1: 'Add only the HotSpots that are 1.0 or more.',
        hint2: 'Divide the carbonate present by the carbonate needed.',
        hint3: '(150 − 90) ÷ 150 × 100.',
        explanation: '1) 1.0 + 1.5 + 2.0 + 2.0 + 1.5 = 8.0 °C-weeks, the threshold for severe bleaching; the 0.5 weeks are not counted. 2) 90 ÷ 100 = 0.9, which is below 1 and corrosive. 3) 60 ÷ 150 × 100 = 40 percent less carbonate.',
      },
    },
    {
      id: 'apecc5-islands',
      type: 'text' as const,
      content: `## Atoll Nations: Living a Meter Above the Sea

An **atoll** is a ring of low coral-sand islands around a lagoon. Several nations are made almost entirely of them.

| Nation | Key facts |
|---|---|
| **Tuvalu** | About 11,000 people on nine islands in the Pacific; highest point about 4.6 m above sea level |
| **Maldives** | More than 1,000 islands in the Indian Ocean; most of the land lies under about 1 m above sea level |
| **Kiribati** | Bought about 24 km² (6,000 acres) of land in Fiji in 2014, partly as a food-security safeguard |

### The real threats are water and salt, not just drowning

| Threat | What happens |
|---|---|
| **King tides and storm waves** | On a higher sea, waves wash over the land more often, flooding homes and roads |
| **Salt in the freshwater lens** | Each island floats a thin lens of rainwater-fed fresh groundwater on denser seawater; overwash and rising seas make it salty |
| **Crop losses** | Salt water ruins pits used to grow taro-like root crops |
| **Erosion** | Shorelines shift; seawalls can protect one stretch while worsening erosion next to it |

A useful nuance: a 2018 study of Tuvalu's islands found that many had **kept or even gained** land area since 1971, because waves pile up new reef sediment. Islands that can still grow are not the same as islands that stay **habitable**: their freshwater and crops are failing first.

### Displacement by agreement

In 2023, Australia and Tuvalu signed the **Falepili Union** treaty, which offers up to **280** Tuvaluans each year the right to live and work in Australia. This is the CED's "displacement of coastal populations" written into a treaty.

### Worked Example 3: Reading an Elevation Table (illustrative data)

| Elevation above high tide | Share of an atoll's land |
|---|---|
| 0–1 m | 55% |
| 1–2 m | 30% |
| 2–3 m | 10% |
| Above 3 m | 5% |

If a 0.5 m sea-level rise combines with a 1.5 m storm wave, water reaches **2 m** above today's high tide:

$$55\\% + 30\\% = 85\\%\\ \\text{of the land is flooded}$$

Everyday high tides would still cover only part of the lowest band, but a single storm would flood most of the island and salt its groundwater.

> 🔑 **AP Connection:** When a free-response question asks for an effect of sea-level rise on people, go beyond "flooding": **saltwater intrusion** into drinking water, **loss of farmland**, damage to infrastructure, and the **displacement of coastal populations** are all scoring answers.`,
    },
    {
      id: 'apecc5-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why did oyster larvae at Pacific Northwest hatcheries die in large numbers during summer upwelling?',
            options: [
              'Upwelled water was too warm for the young larvae',
              'Upwelled water carried toxic algae into the tanks',
              'Upwelled water was too salty for the young oysters',
              'Upwelled water lacked carbonate for shells',
            ],
            correctAnswer: 3,
            explanation: 'Deep, carbon dioxide-rich water combined with absorbed human emissions left too few carbonate ions for larvae to build shells. Upwelled water is cold rather than warm, and the die-offs were traced to its chemistry, not to toxins or salinity.',
          },
          {
            question: 'A hatchery wants to make it easier for its larvae to build shells. Which strategy changes the water chemistry to do this directly?',
            options: [
              'Cooling the intake water to slow larval growth',
              'Adding sodium carbonate to the intake water',
              'Filtering the intake water to remove algae',
              'Bubbling extra oxygen through the larval tanks',
            ],
            correctAnswer: 1,
            explanation: 'Sodium carbonate adds carbonate ions and raises the saturation state, making shell-building easier. Cooling, filtering and oxygenating change other conditions but do not supply carbonate.',
          },
          {
            question: 'Studies found that many of Tuvalu\'s islands kept or gained land area since the 1970s. Why do their residents still face serious harm from rising seas?',
            options: [
              'Their reefs grow upward faster than the sea level is rising',
              'Their land is sinking as volcanoes beneath them erupt',
              'Waves wash salt water over the land into wells and gardens',
              'Melting sea ice near them raises local water levels fast',
            ],
            correctAnswer: 2,
            explanation: 'Overwash and higher seas salt the freshwater lens and ruin crops, so islands can become uninhabitable before they disappear. Reefs keeping pace would reduce harm, the atolls are not volcanically active, and melting sea ice adds almost nothing to sea level.',
          },
        ],
      },
    },
    {
      id: 'apecc5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Case | Key facts |
|---|---|
| Great Barrier Reef | Mass bleaching 1998, 2002, 2016, 2017, 2020, 2022, 2024; about 30% of shallow corals died in 2016 |
| Degree heating weeks | Sum of weekly HotSpots of 1°C or more over 12 weeks; 4 = significant bleaching, 8 = severe bleaching and death |
| Recovery gap | Severe bleaching every ~6 years vs 10–15 years to recover |
| Gulf of Maine | Rapid warming; cod failed to recover; lobster collapsed in southern New England and boomed in Maine |
| Oyster hatcheries | Upwelled, $CO_{2}$-rich water with low $\\Omega$ killed larvae (2007–2008); fixes: monitoring, timing, buffering |
| Saturation state | $\\Omega$ above 1 favors shells; below 1 is corrosive |
| Atoll nations | Salt in freshwater lenses and crops comes before drowning; Falepili Union allows 280 Tuvaluans per year to move to Australia |

**Next:** Part 6 compares the ways to respond: which strategies cut the most emissions per dollar, how fast they work, and how adaptation plans are chosen.`,
    },
  ],
},

// ───────────────────────── PART 6 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc6-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 6 of 7 — Mitigation and Adaptation: Comparing Strategies**

---

| Section |
|---------|
| ⚖️ How to Judge a Strategy |
| Cost per Tonne |
| Wedges: No Single Fix |
| Policy Instruments in Practice |
| Choosing an Adaptation: Protect, Accommodate or Retreat |

> 🔑 **Key Concept:** Free-response questions on climate change usually end with "propose a solution" or "describe one way to reduce" an effect from CED 9.4–9.7. Strong answers name a specific action **and** explain how it works, and the best ones weigh its scale, cost and drawbacks. The definitions of mitigation and adaptation, carbon taxes, cap-and-trade and the Kyoto and Paris agreements are covered in Atmosphere & Climate, Part 5; this part is about comparing options.`,
    },
    {
      id: 'apecc6-judge',
      type: 'text' as const,
      content: `## ⚖️ How to Judge a Strategy

| Question | Why it matters |
|---|---|
| **How many tonnes?** | A strategy must be large enough to matter: measure it in tonnes of $CO_{2}$-eq avoided per year |
| **What does each tonne cost?** | With a limited budget, cheaper tonnes cut more emissions overall |
| **How fast?** | Cutting methane slows warming within decades; a new forest takes decades to absorb much carbon |
| **How permanent?** | Carbon in a forest can return to the air in a wildfire; carbon left in the ground as unburned coal stays there |
| **What else happens?** | Co-benefits (cleaner air, lower bills) and trade-offs (land use, mining for battery metals, cost to low-income households) |

## Cost per Tonne

$$\\text{Cost per tonne} = \\frac{\\text{yearly cost} - \\text{yearly savings}}{\\text{tonnes of } CO_{2}\\text{-eq avoided per year}}$$

A project that **saves** more money than it costs has a **negative** cost per tonne: it pays for itself while cutting emissions.

### Worked Example 1: A City Compares Four Projects (illustrative data)

| Project | Yearly cost | Yearly savings | Tonnes $CO_{2}$-eq avoided per year | Cost per tonne |
|---|---|---|---|---|
| LED streetlights | \\$200,000 | \\$300,000 | 2,000 | $\\frac{200{,}000 - 300{,}000}{2{,}000} = -\\$50$ |
| Landfill gas capture | \\$400,000 | \\$0 | 20,000 | \\$20 |
| Tree planting | \\$150,000 | \\$0 | 1,000 | \\$150 |
| Rooftop solar on schools | \\$900,000 | \\$0 | 3,000 | \\$300 |

Ranked from cheapest to most expensive per tonne: LED streetlights, landfill gas capture, tree planting, rooftop solar. Landfill gas capture avoids the most tonnes, because each tonne of methane captured counts as about 30 tonnes of $CO_{2}$-eq. (Rooftop solar looks expensive here only because its electricity savings were left out of this illustrative table; including them would lower its cost per tonne.)

### What the IPCC found

The IPCC's 2022 mitigation report found that options costing **\\$100 per tonne or less** could reduce global emissions by **at least half** of their 2019 level by 2030, and that options under \\$20 per tonne make up more than half of that potential. From 2010 to 2019, the cost of solar electricity fell by about **85%** and of wind power by about **55%**, which is why they now lead most low-cost lists.`,
    },
    {
      id: 'apecc6-q1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Replacing a school\'s lighting with LEDs has a negative cost per tonne of $CO_{2}$ avoided. What does the negative value mean?',
            options: [
              'The project removes more $CO_{2}$ than it emits',
              'The money saved on energy exceeds what the project costs',
              'A government grant covers the full cost of the project',
              'The project produces no emissions once it is installed',
            ],
            correctAnswer: 1,
            explanation: 'Cost per tonne subtracts savings from cost, so the number is negative when lower electricity bills outweigh the spending. A grant only shifts who pays, and avoiding emissions is different from removing carbon dioxide from the air.',
          },
          {
            question: 'A company buys carbon offsets from a forest that was already protected by law from logging. Why might these offsets fail to lower total emissions?',
            options: [
              'Trees store carbon for only a few years at most',
              'Protected forests absorb no carbon dioxide at all',
              'The forest would have stayed standing anyway',
              'Only national governments may buy forest offsets',
            ],
            correctAnswer: 2,
            explanation: 'An offset counts only if the reduction is additional, meaning it would not have happened without the payment. Trees store carbon for decades to centuries, protected forests do absorb carbon dioxide, and companies can legally buy offsets.',
          },
          {
            question: 'According to the IPCC\'s 2022 report, options costing about 100 dollars per tonne or less could cut global emissions by how much from 2019 levels by 2030?',
            options: [
              'By about a tenth',
              'By about a quarter',
              'By at least half',
              'By nearly all of it',
            ],
            correctAnswer: 2,
            explanation: 'The IPCC found that options costing 100 dollars per tonne or less could cut emissions by at least half by 2030, with options under 20 dollars per tonne supplying more than half of that potential.',
          },
        ],
      },
    },
    {
      id: 'apecc6-wedges',
      type: 'text' as const,
      content: `## Wedges: No Single Fix

In 2004, Princeton scientists Stephen Pacala and Robert Socolow proposed splitting the emissions problem into **stabilization wedges**. Each wedge is a strategy that grows from zero today to avoiding **1 Gt of carbon per year** after 50 years. Plotted against time, its avoided emissions form a triangle, a wedge.

### Worked Example 2: The Size of One Wedge

$$\\text{Carbon avoided} = \\frac{1}{2} \\times 50\\ \\text{yr} \\times 1\\ \\text{Gt C/yr} = 25\\ \\text{Gt C}$$

Converting carbon to $CO_{2}$ (multiply by 44/12, about 3.67, as in Biogeochemical Cycles, Part 2):

$$25 \\times 3.67 \\approx 92\\ \\text{Gt}\\ CO_{2}$$

Their examples of one wedge each included doubling the fuel economy of 2 billion cars and adding about 2 million large wind turbines. The lesson: no single technology is big enough, so emissions are cut with a **portfolio** of many wedges at once.

### Methane: the fast lever

Methane breaks down in about a decade, so cutting it slows warming within a few decades. In 2021, more than 100 countries joined the **Global Methane Pledge** to cut methane emissions 30% below 2020 levels by 2030. Plugging leaks from oil and gas operations is often cheap, because captured gas can be sold.

## Policy Instruments in Practice

| Instrument | Type | Real example |
|---|---|---|
| **Efficiency standards** | Command and control: sets a required level of performance | U.S. CAFE fuel-economy standards for cars; appliance and building energy codes |
| **Renewable portfolio standard** | Command and control | Many U.S. states require utilities to get a set share of electricity from renewables by a target year |
| **Subsidies and tax credits** | Incentive | Federal tax credits for home solar panels, heat pumps and electric vehicles |
| **Regional cap-and-trade** | Market-based | EU Emissions Trading System (2005); RGGI, covering Northeastern U.S. power plants (2009); California (2013) |
| **Carbon offsets** | Market-based | A polluter pays for a reduction elsewhere; valid only if **additional**, **permanent** and not counted twice |

### How the Paris Agreement is meant to tighten

Each country's pledge (its **nationally determined contribution**) is updated every **5 years** and is expected to be more ambitious than the last, a "ratchet." The first **global stocktake**, completed in 2023, found that current pledges put the world off track for the 1.5°C and well-below-2°C goals.`,
    },
    {
      id: 'apecc6-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data for questions 1 and 3.)

**1)** A methane-capture project costs \\$600,000 per year, saves nothing, and avoids 15,000 t of $CO_{2}$-eq per year. What is its cost per tonne, in dollars?

**2)** A wedge grows steadily from 0 to 2 Gt C per year over 50 years. How many Gt of carbon does it avoid in total?

**3)** A levee costs \\$80 million. It is expected to prevent \\$5 million of flood damage per year for 40 years. What is its benefit-cost ratio (total benefits ÷ cost)?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['40', '50', '2.5'],
        hint1: 'Divide the yearly cost by the yearly tonnes avoided.',
        hint2: 'Area of a triangle: one-half × base × height = ½ × 50 × 2.',
        hint3: 'Total benefits = 5 × 40 million dollars. Divide by 80 million.',
        explanation: '1) 600,000 ÷ 15,000 = 40 dollars per tonne. 2) ½ × 50 × 2 = 50 Gt of carbon. 3) 200 million ÷ 80 million = 2.5, so each dollar spent prevents about 2.5 dollars of damage.',
      },
    },
    {
      id: 'apecc6-adapt',
      type: 'text' as const,
      content: `## Choosing an Adaptation: Protect, Accommodate or Retreat

Coastal planners sort adaptation into three approaches:

| Approach | What it means | Examples | Drawbacks |
|---|---|---|---|
| **Protect** | Keep the water out | Seawalls, levees and storm-surge barriers, such as the Netherlands' Delta Works, built after a 1953 flood killed more than 1,800 people; restored mangroves, marshes and oyster reefs ("living shorelines") | Hard structures are costly, can fail in extreme storms, and can starve nearby beaches of sand |
| **Accommodate** | Live with more water | Raising homes on pilings, flood-proof ground floors, stormwater parks, drought-tolerant crops, cooling centers for heat waves | Protects buildings, not land; repeated damage still costs money |
| **Retreat** | Move people and buildings away | Buyouts of flood-prone homes; the relocation of Isle de Jean Charles, Louisiana, an island that has lost about 98% of its land since 1955, funded by a 2016 federal grant | Breaks up communities and cultural ties to place; difficult to pay for at large scale |

### Worked Example 3: Benefit-Cost Ratio (illustrative data)

A town compares a \\$50 million seawall with a \\$20 million buyout of the 40 most flood-prone homes. Each is expected to prevent about \\$4 million of damage per year over 30 years.

$$\\text{Seawall: } \\frac{4 \\times 30}{50} = \\frac{120}{50} = 2.4 \\qquad \\text{Buyout: } \\frac{4 \\times 30}{20} = \\frac{120}{20} = 6.0$$

Both pass (a ratio above 1), but the buyout prevents more damage per dollar. The town would still weigh what the numbers leave out: residents' attachment to place, the beach the seawall might erode, and whether the seawall must be raised again as seas keep rising.

> 🔑 **AP Connection:** When asked to propose a solution, label it correctly. A seawall, a raised house or drought-tolerant seed is **adaptation**; a wind farm, a methane-leak repair or a carbon tax is **mitigation**. Then add one specific drawback, since many rubrics award a point for it.`,
    },
    {
      id: 'apecc6-q2',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which coastal adaptation is an example of managed retreat?',
            options: [
              'Raising homes on pilings in a flood zone',
              'Building a levee around a low-lying city',
              'Restoring mangroves along an exposed shore',
              'Buying out homes and moving residents inland',
            ],
            correctAnswer: 3,
            explanation: 'Retreat moves people and buildings away from the hazard. Raising homes accommodates the water, and levees and restored mangroves protect the shore by holding the water back.',
          },
          {
            question: 'Pacala and Socolow divided the needed emission cuts into many separate wedges. What was the main reason for this approach?',
            options: [
              'Each wedge had to rely on nuclear power',
              'Each wedge required its own global treaty',
              'Each wedge was meant to remove $CO_{2}$ already in the air',
              'No single technology could grow large enough by itself',
            ],
            correctAnswer: 3,
            explanation: 'Each wedge is a large but achievable change, and the total cut is too big for any one technology, so several must run at once. The wedges mostly avoid new emissions rather than remove old ones, and they draw on many technologies.',
          },
          {
            question: 'A coastal town builds a long concrete seawall to protect its main street from rising seas. Which drawback should planners expect?',
            options: [
              'It can starve nearby beaches of sand and speed their erosion',
              'It raises the sea level along the coast by displacing water',
              'It warms the seawater along the shore in front of the wall',
              'It adds to ocean acidification as the new concrete cures',
            ],
            correctAnswer: 0,
            explanation: 'Seawalls reflect wave energy and cut off the supply of sand, so beaches in front of and beside them erode. A wall does not measurably raise sea level or warm the water, and curing concrete absorbs rather than releases carbon dioxide.',
          },
        ],
      },
    },
    {
      id: 'apecc6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Idea | Key fact |
|---|---|
| Judging strategies | Tonnes avoided, cost per tonne, speed, permanence, co-benefits and trade-offs |
| Cost per tonne | (Cost − savings) ÷ tonnes avoided; negative when savings exceed cost |
| IPCC 2022 | Options at or below \\$100 per tonne could halve 2019 emissions by 2030; solar costs fell about 85% (2010–2019) |
| Wedges | Each avoids 25 Gt C over 50 years (about 92 Gt $CO_{2}$); a portfolio is needed |
| Methane | Fastest lever; Global Methane Pledge: 30% below 2020 levels by 2030 |
| Policy tools | Standards (CAFE, renewable portfolio standards), subsidies, regional cap-and-trade (EU ETS, RGGI, California), offsets that must be additional |
| Paris ratchet | Pledges every 5 years; the 2023 global stocktake found the world off track |
| Adaptation | Protect, accommodate, retreat; compare with benefit-cost ratios and unpriced costs |

**Next:** Part 7 puts all six parts to work in exam-style practice, including a design-an-investigation question.`,
    },
  ],
},

// ───────────────────────── PART 7 ─────────────────────────
{
  topicSlug: 'apes-climate-change',
  sections: [
    {
      id: 'apecc7-intro',
      type: 'text' as const,
      content: `# 🌡️ Climate Change

**Part 7 of 7 — AP Exam Practice and Synthesis**

---

| Section |
|---------|
| 📋 Free-Response 1: Design an Investigation |
| Model Answers |
| The Topic as One Chain |
| Misconceptions from This Topic |
| Mixed Practice |

> 🔑 **Key Concept:** Free-response question 1 on the APES exam is "Design an investigation." It asks you to identify variables, controls and a hypothesis, then analyze the data. Atmosphere & Climate, Part 6 practices free-response questions 2 and 3 for climate; this part practices question 1, then pulls Parts 1–6 together.`,
    },
    {
      id: 'apecc7-frq',
      type: 'text' as const,
      content: `## 📋 Free-Response 1: Design an Investigation

A student wants to know how ocean acidification affects the shells of marine snails. She places **5.00 g** of crushed snail shell into each of **12 beakers** of seawater. She bubbles $CO_{2}$ through the water to set the pH: **4 beakers at pH 8.1** (today's surface ocean), **4 at pH 7.8** and **4 at pH 7.5**. All beakers hold 500 mL of seawater and are kept at 20°C. After 14 days, she rinses, dries and weighs the shell pieces.

**Table 1. Average final shell mass (illustrative data)**

| pH | Average final mass (g) | Mass lost (g) | Percent mass lost |
|---|---|---|---|
| 8.1 | 4.98 | 0.02 | 0.4% |
| 7.8 | 4.90 | ? | ? |
| 7.5 | 4.75 | 0.25 | 5.0% |

**Questions**

(a) **Identify** the independent variable and the dependent variable.

(b) **Identify** the control group, and **identify** one variable held constant.

(c) **Write** a testable hypothesis for this investigation.

(d) **Explain** why the student used four beakers at each pH rather than one.

(e) **Calculate** the percent of shell mass lost at pH 7.8.

(f) **Calculate** how many times greater the hydrogen ion concentration is at pH 7.5 than at pH 8.1.

(g) **Describe** one limitation of using crushed shells instead of living snails, and **explain** how it affects the conclusion.`,
    },
    {
      id: 'apecc7-calc',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only.

**1)** Question (e): What percent of its mass did the shell lose at pH 7.8?

**2)** Question (f): How many times greater is the hydrogen ion concentration at pH 7.5 than at pH 8.1? Round to the nearest whole number.

**3)** Review (Part 2): A country of 25 million people emits 0.1 Gt of $CO_{2}$ per year. What are its emissions per person, in tonnes?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['2', '4', '4'],
        hint1: 'Mass lost = 5.00 − 4.90. Divide by the starting mass of 5.00 g and multiply by 100.',
        hint2: 'The pH difference is 8.1 − 7.5 = 0.6. Calculate 10 to the power 0.6.',
        hint3: '0.1 Gt is 100,000,000 t. Divide by 25,000,000 people.',
        explanation: '1) 0.10 g ÷ 5.00 g × 100 = 2.0 percent. 2) 10 to the power 0.6 ≈ 3.98, about 4 times. 3) 100,000,000 t ÷ 25,000,000 people = 4 t per person, a little below the world average of about 4.6 t.',
      },
    },
    {
      id: 'apecc7-model',
      type: 'text' as const,
      content: `## Model Answers

**(a)** Independent variable: the **pH of the seawater** (set by the amount of dissolved $CO_{2}$). Dependent variable: the **shell mass lost** (or percent of mass lost) after 14 days.

**(b)** Control group: the beakers at **pH 8.1**, today's ocean surface value, which the lower-pH treatments are compared against. Constants (any one): water temperature (20°C), volume of seawater (500 mL), starting shell mass (5.00 g), length of the trial (14 days), species and source of shell.

**(c)** "If seawater pH is lowered by dissolving more $CO_{2}$, then crushed snail shells will lose more mass over 14 days, because the added hydrogen ions reduce the carbonate available and dissolve calcium carbonate." A hypothesis must be **testable** and state the expected **direction** of the effect.

**(d)** Several replicates reduce the effect of **random variation** in any single beaker (such as one unusually thin shell piece), so the averages are more reliable.

**(e)**
$$\\frac{5.00 - 4.90}{5.00} \\times 100 = \\frac{0.10}{5.00} \\times 100 = 2.0\\%$$

**(f)**
$$10^{8.1 - 7.5} = 10^{0.6} \\approx 4$$

The water at pH 7.5 has about **4 times** the hydrogen ion concentration of today's ocean surface.

**(g)** Living snails can spend energy to **repair** or thicken their shells, and a protective outer layer covers the shell of a live snail, while crushed shell has fresh exposed surfaces. The experiment may therefore **overestimate** dissolution in living snails, yet it also misses the **energy cost** that repair imposes on growth and reproduction. A follow-up could raise live snails at each pH and measure shell growth and survival.

### Rubric habits for free-response question 1

- An **independent variable** is what the investigator changes; a **dependent variable** is what she measures.
- A **control group** is the untreated or baseline condition; **constants** are kept the same in every group. They are not the same thing.
- "Replicates make it more accurate" earns less than "replicates reduce the effect of random variation in individual samples."`,
    },
    {
      id: 'apecc7-chain',
      type: 'text' as const,
      content: `## The Topic as One Chain

| Step | What happens | Where it was covered |
|---|---|---|
| 1. Natural baseline | Greenhouse gases keep Earth about 33°C warmer than its effective temperature; water vapor follows temperature | Part 1 |
| 2. Human additions | Energy supply, industry, agriculture and land use, transport and buildings release $CO_{2}$, methane, $N_{2}O$ and F-gases | Part 2 |
| 3. Accumulation | Emissions exceed sinks, so concentrations rise even when emissions level off | Part 2 |
| 4. Observed warming | Independent records agree: air, ocean heat, sea ice, glaciers, ice sheets, phenology | Part 3 |
| 5. Amplification | Feedbacks multiply the direct warming by about 2.5; some elements may tip | Part 4 |
| 6. Ocean effects | Heat stress bleaches reefs and moves fisheries; lower carbonate harms shell builders; rising seas salt island water supplies | Part 5 |
| 7. Responses | Mitigation judged by tonnes, cost per tonne and speed; adaptation by protect, accommodate or retreat | Part 6 |

## Misconceptions from This Topic

| Misconception | Correction |
|---|---|
| "A positive feedback is a good thing." | Positive means **self-reinforcing**; most positive climate feedbacks make warming worse |
| "If emissions stop growing, $CO_{2}$ levels stop rising." | Concentration keeps rising until emissions fall to the size of the sinks |
| "Water vapor causes most of the greenhouse effect, so it drives climate change." | Vapor follows temperature within days; non-condensing gases set the temperature |
| "Mars's air is 95% $CO_{2}$, so it must have a strong greenhouse effect." | The **amount** of gas matters, and Mars's atmosphere is very thin |
| "The biggest annual emitter is the most responsible for warming." | Total, per-capita and cumulative measures give different rankings |
| "Maine's lobster boom shows warming helps fisheries." | The fishery shifted north as southern New England's collapsed, and the shift continues |
| "An island that is not shrinking is safe." | Salt in its freshwater and crops can make it uninhabitable first |
| "Any carbon offset cancels emissions." | Only offsets that are additional, permanent and not double counted |`,
    },
    {
      id: 'apecc7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Classify It** 🔽

Choose the best answer for each statement.`,
      exercise: {
        dropdowns: [
          { label: 'Thawing permafrost releases methane, which causes more warming and more thawing. This is a ___', options: ['positive feedback', 'negative feedback', 'climate forcing', 'natural sink'] },
          { label: 'Capturing landfill methane to generate electricity is an example of ___', options: ['mitigation', 'adaptation', 'managed retreat', 'accommodation'] },
          { label: 'A reef that reaches 9 degree heating weeks is likely to experience ___', options: ['severe bleaching and coral death', 'mild bleaching with full recovery', 'no bleaching at all', 'faster coral growth'] },
          { label: 'The largest human source of nitrous oxide is ___', options: ['fertilized fields', 'cattle digestion', 'cement kilns', 'landfills'] },
          { label: 'Seawater with a carbonate saturation state of 0.8 is ___ for shell builders', options: ['corrosive', 'ideal', 'neutral', 'saturated'] },
        ],
        correctAnswers: ['positive feedback', 'mitigation', 'severe bleaching and coral death', 'fertilized fields', 'corrosive'],
        hint1: 'A loop that makes its own change bigger is reinforcing.',
        hint2: 'Mitigation cuts emissions; adaptation copes with effects.',
        hint3: 'A DHW of 8 or more is the severe threshold; a saturation state below 1 dissolves shells.',
        explanation: 'Permafrost thaw is a positive feedback. Landfill gas capture cuts methane emissions, so it is mitigation. A DHW above 8 predicts severe bleaching and coral death. Fertilizer and manure on fields are the main human source of nitrous oxide. A saturation state below 1 is corrosive to calcium carbonate shells.',
      },
    },
    {
      id: 'apecc7-mixed',
      type: 'multiple-choice' as const,
      content: `**Mixed Practice** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which sequence correctly links a human activity to weaker shells at an oyster farm?',
            options: [
              'Burning fuel → ozone loss → more ultraviolet light → warmer water → weaker shells',
              'Burning fuel → more $CO_{2}$ dissolved → less carbonate → weaker shells',
              'Burning fuel → more $CO_{2}$ in air → warmer water → more carbonate → weaker shells',
              'Burning fuel → more methane → melting sea ice → saltier water → weaker shells',
            ],
            correctAnswer: 1,
            explanation: 'Carbon dioxide from combustion dissolves in seawater, and the hydrogen ions it releases tie up carbonate needed for shells. Ozone loss and methane are separate issues, and warmer water does not add carbonate.',
          },
          {
            question: 'Earth\'s natural greenhouse warming is about 33°C, while Venus\'s is about 510°C. Which factor best explains the difference?',
            options: [
              'Venus is closer to the sun, so it absorbs far more sunlight',
              'Venus has a vastly larger mass of $CO_{2}$ in its atmosphere',
              'Venus has a thinner atmosphere that heats up very quickly',
              'Venus reflects a smaller share of incoming sunlight than Earth',
            ],
            correctAnswer: 1,
            explanation: 'Venus\'s atmosphere is about 96.5% carbon dioxide at about 92 times Earth\'s surface pressure, so it traps vastly more infrared. Venus actually reflects about three-quarters of its sunlight and absorbs less than Earth does.',
          },
          {
            question: 'Which observation would best show that recent warming is a climate change rather than a run of unusual weather?',
            options: [
              'A record-hot summer in one city',
              'A month of heat across a whole continent',
              'Decades of rising readings in independent records',
              'A forecast for an unusually warm winter',
            ],
            correctAnswer: 2,
            explanation: 'Climate is defined over decades, and agreement among independent records rules out a problem with one instrument. One summer, one month or one forecast describes weather, however extreme.',
          },
          {
            question: 'A student argues that because Maine\'s lobster catch boomed, ocean warming has benefited New England\'s fisheries. Which response is best supported?',
            options: [
              'Its range shifted north as the southern catch collapsed',
              'Lobsters grow faster without limit as water warms',
              'Maine\'s boom proves warming helps every species',
              'Cod catches in the region rose along with lobster',
            ],
            correctAnswer: 0,
            explanation: 'Lobster habitat shifted north while southern New England\'s fishery collapsed, and cod failed to recover in the warming Gulf. Lobsters are stressed above about 20°C, so continued warming threatens Maine\'s catch too.',
          },
        ],
      },
    },
    {
      id: 'apecc7-summary',
      type: 'text' as const,
      content: `## Part 7 Summary

| Skill or idea | What to remember |
|---|---|
| Free-response 1 | Independent variable is changed, dependent is measured; the control is the baseline group; constants stay the same |
| Hypothesis | Testable, with a direction: "If … then … because …" |
| Replicates | Reduce the effect of random variation |
| pH math | A drop of $d$ units multiplies $[H^{+}]$ by $10^{d}$ (0.6 units ≈ 4 times) |
| One chain | Natural baseline → human additions → accumulation → observed warming → feedbacks → ocean effects → responses |
| Key numbers | 33°C natural warming; 59 Gt $CO_{2}$-eq (2019); 360 Gt ice ≈ 1 mm sea level; feedback factor ≈ 2.5; DHW 8 = severe; $\\Omega$ below 1 = corrosive |
| Responses | Compare by tonnes, cost per tonne, speed and permanence; adapt by protecting, accommodating or retreating |`,
    },
  ],
},
]
