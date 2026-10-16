import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Ozone Depletion & Indoor Air Quality (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-ozone-indoor-air'.
 * 7 parts, rewritten Oct 2026 to the 2026-27 APES CED (May 2027 exam). Written to
 * complement, not repeat, the core APES topics apes-atmospheric-pollution,
 * apes-water-resources and apes-atmosphere-climate. LaTeX uses DOUBLED backslashes
 * (template-literal strings).
 */
export const parts: LessonData[] = [
// ───────────────────────── PART 1 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz1-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 1 of 7 — The Ozone Layer and the UV That Reaches You**

---

| Section |
|---------|
| 📖 Where the Ozone Is |
| Same Molecule, Two Roles |
| What Controls the UV at the Ground |
| The UV Index |

> 🔑 **Key Concept:** The ozone layer matters because it decides how much **ultraviolet (UV) radiation** reaches living things. This part locates the layer, separates "good" from "bad" ozone, and shows how latitude, season, altitude, surfaces and the ozone column combine to set the UV you actually receive (CED 9.1). Parts 1–4 cover the stratosphere; Parts 5–6 move indoors. The UV bands and the ozone formation reactions are in Atmospheric Pollution, Part 5.`,
    },
    {
      id: 'apoz1-where',
      type: 'text' as const,
      content: `## 📖 Where the Ozone Is

About **90 percent** of the atmosphere's ozone is in the **stratosphere**, mostly between about 15 and 35 km up. Even there it is a trace gas: at its most concentrated it is only a few parts per million of the air. The rest is in the **troposphere**, near the ground.

| Layer | Altitude (approximate) | Share of all ozone | Role |
|---|---|---|---|
| Troposphere | 0 to about 12 km | About 10% | Ground-level ozone is a pollutant and a greenhouse gas |
| Stratosphere | About 12 to 50 km | About 90% | The ozone layer absorbs most incoming UV-B and all UV-C |

### Worked Example: How Thin Is the Layer?

If all the ozone above a spot were brought to sea-level pressure and temperature, it would form a layer about **3 mm** thick. The stratosphere where it sits is about **38 km** thick (12 km to 50 km).

$$38\\ \\text{km} = 38{,}000{,}000\\ \\text{mm} \\qquad \\frac{3\\ \\text{mm}}{38{,}000{,}000\\ \\text{mm}} \\approx 8 \\times 10^{-8}$$

A shield that thin is easy to damage, which is why small amounts of long-lived chlorine compounds could thin it measurably.

> 🔑 **AP Connection:** The CED states that the stratospheric ozone layer is important to the **evolution of life on Earth** and to the continued health and survival of life. Before the layer formed, intense UV kept life largely in the water; land life spread after it formed.`,
    },
    {
      id: 'apoz1-roles',
      type: 'text' as const,
      content: `## Same Molecule, Two Roles

Ozone $(O_{3})$ is the same molecule everywhere. Where it is decides whether it helps or harms.

| Feature | Stratospheric ("good") ozone | Ground-level ("bad") ozone |
|---|---|---|
| Location | About 15–35 km up | The air we breathe |
| How it forms | UV splits $O_{2}$; the free atoms join other $O_{2}$ molecules | $NO_{x}$ + VOCs + sunlight (photochemical smog) |
| Effect | Absorbs UV-B and UV-C, protecting living cells | Irritates lungs, worsens asthma, damages crops and forests |
| Human impact | **Too little**: thinned by chlorine and bromine from CFCs and halons | **Too much**: raised by vehicle and industrial emissions |
| Main policy | Montreal Protocol (1987) | Clean Air Act standards for ozone |

The two problems do not cancel. Ground-level ozone cannot rise to repair the stratosphere: it reacts and breaks down within days to weeks, long before it could mix 15 km upward.`,
    },
    {
      id: 'apoz1-q-roles',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Why can\'t smog ozone from cities refill the thinning ozone layer?',
            options: [
              'It breaks down within days to weeks, long before it could mix upward',
              'It is a different molecule from the ozone found in the stratosphere',
              'It is heavier than air and so is unable to leave the lowest few meters',
              'It turns into CFCs once it reaches the colder air of the upper layers',
            ],
            correctAnswer: 0,
            explanation: 'Ground-level ozone is reactive and short-lived, so it is destroyed long before it could reach the stratosphere. It is the same molecule, and it does not form CFCs.',
          },
          {
            question: 'About what share of Earth\'s atmospheric ozone is found in the stratosphere?',
            options: ['About 50 percent', 'About 90 percent', 'About 10 percent', 'About 99 percent'],
            correctAnswer: 1,
            explanation: 'Roughly 90 percent of the ozone is in the stratosphere and about 10 percent in the troposphere.',
          },
          {
            question: 'Which statement correctly contrasts the two ozone problems?',
            options: [
              'The stratosphere lacks ozone, while smoggy cities have too much',
              'Both problems come from the same chlorine released by aerosol cans',
              'Both problems are solved by the Clean Air Act standards for ozone',
              'Smoggy cities lack ozone, while the stratosphere has too much',
            ],
            correctAnswer: 0,
            explanation: 'The stratosphere has lost ozone to chlorine and bromine chemistry, while cities have excess ground-level ozone from nitrogen oxides and VOCs. The Montreal Protocol addresses the first, the Clean Air Act the second.',
          },
        ],
      },
    },
    {
      id: 'apoz1-surface-uv',
      type: 'text' as const,
      content: `## What Controls the UV at the Ground

The ozone column is only one of several factors that set how much UV-B reaches a person, plant or plankton.

| Factor | Effect on surface UV | Why |
|---|---|---|
| Sun angle (latitude, season, time of day) | Highest near the equator, in summer, around solar noon | A high sun sends UV through less atmosphere and less ozone |
| Altitude | Rises roughly **10% per 1,000 m** | Less air and ozone overhead to absorb it |
| Surface reflection | Fresh snow reflects up to about **80%**; sand about 15%; water and grass less | Reflected UV adds to the direct UV |
| Clouds | Thick clouds block much of it; thin or broken clouds let most through | Light, scattered clouds can even raise UV briefly |
| Ozone column | Less ozone, more UV-B | Ozone is the main UV-B absorber |

The Southern Hemisphere summer gets somewhat more UV than the Northern Hemisphere summer at the same latitude, for three reasons: Earth is closest to the sun in early January, southern air carries less pollution haze, and summer ozone columns there are naturally somewhat lower.`,
    },
    {
      id: 'apoz1-index',
      type: 'text' as const,
      content: `## The UV Index

The **UV Index** turns the day's skin-damaging UV into a simple number. It is forecast like the weather.

| UV Index | Category | Typical advice |
|---|---|---|
| 0–2 | Low | Minimal protection needed |
| 3–5 | Moderate | Shade at midday; sunscreen and hat |
| 6–7 | High | Protection required; reduce midday sun |
| 8–10 | Very high | Extra protection; avoid midday sun |
| 11 and above | Extreme | Avoid being outside at midday |

### Worked Example: A Ski Trip (illustrative data)

At a sea-level beach the noon UV Index is **6**. A ski slope at **3,000 m** at the same latitude and sun angle gets about 10% more UV per 1,000 m:

$$6 \\times (1 + 0.10 \\times 3) = 6 \\times 1.3 = 7.8$$

Fresh snow then reflects up to 80% of the UV back up, so the exposure on the face can approach

$$7.8 \\times 1.8 \\approx 14$$

The slope can reach the **extreme** category even on a cold day, which is why skiers and climbers get badly sunburned.`,
    },
    {
      id: 'apoz1-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data; use about 10% more UV per 1,000 m.)

1) A city at sea level has a noon UV Index of 5. What is the expected UV Index at 2,000 m at the same sun angle?

2) A trail at 1,000 m has a UV Index of 9. If fresh snow adds 80% from reflection, what exposure does a hiker's face receive?

3) The ozone column over a station falls from 320 to 288 Dobson units. What is the percent decrease?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['6', '16.2', '10'],
        hint1: '$5 \\times (1 + 0.10 \\times 2)$.',
        hint2: 'Adding 80% means multiplying by 1.8.',
        hint3: '(320 − 288) ÷ 320 × 100.',
        explanation: '1) 5 × 1.2 = 6. 2) 9 × 1.8 = 16.2. 3) 32 ÷ 320 × 100 = 10 percent decrease.',
      },
    },
    {
      id: 'apoz1-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Two hikers walk at noon on the same June day. One is on a snowfield at 3,500 m; the other is on a grassy trail at 500 m. Why does the first receive far more UV-B?',
            options: [
              'Snow emits its own ultraviolet light as it slowly melts',
              'Thinner air overhead and UV reflected off the snow',
              'Cold air at high altitude contains more ground-level ozone',
              'Grass absorbs ultraviolet light before it reaches the trail',
            ],
            correctAnswer: 1,
            explanation: 'At altitude there is less atmosphere and ozone to absorb UV-B, and fresh snow reflects much of it back up. Snow does not emit UV, and ground-level ozone would absorb UV rather than add to it.',
          },
          {
            question: 'A researcher records surface UV-B at one site for a year. Which change would most likely produce a sudden rise in the readings?',
            options: [
              'A thick, low cloud deck that lingers over the site',
              'The sun reaching a lower angle as winter approaches',
              'A drop in the ozone column directly over the site',
              'Rain that washes particulates out of the local air',
            ],
            correctAnswer: 2,
            explanation: 'Ozone is the main absorber of UV-B, so a thinner column lets more reach the ground. Thick clouds and a lower sun reduce UV-B, and washing out particles has a much smaller effect.',
          },
        ],
      },
    },
    {
      id: 'apoz1-summary',
      type: 'text' as const,
      content: `## Part 1 Summary

| Idea | Key fact |
|---|---|
| Location | About 90% of ozone is in the stratosphere, mostly 15–35 km up |
| Thinness | All of it compressed to sea level would be about 3 mm thick |
| Good vs bad ozone | Same molecule; stratospheric ozone shields UV, ground-level ozone harms lungs and plants |
| Surface UV factors | Sun angle, altitude (about +10% per 1,000 m), snow reflection (up to 80%), clouds, ozone column |
| UV Index | 0–2 low up to 11+ extreme |
| Why it matters | The ozone layer made life on land possible and still protects it |

**Next:** Part 2 follows the scientists who discovered that human-made chemicals were destroying the layer.`,
    },
  ],
},

// ───────────────────────── PART 2 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz2-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 2 of 7 — How Scientists Found the Problem**

---

| Section |
|---------|
| 📖 A Prediction in 1974 |
| A Surprise in 1985 |
| The Smoking Gun: Reading Flight Data |
| Why the Arctic Is Different |
| What the Story Shows About Science |

> 🔑 **Key Concept:** Ozone depletion is a model case of environmental science: a laboratory prediction, a field observation nobody expected, a new hypothesis to explain it, and a decisive test with data. Knowing how the evidence was built helps you read and design investigations (CED 9.1). The chlorine catalytic cycle and the seasonal stages of the Antarctic hole are laid out in Atmospheric Pollution, Part 5.`,
    },
    {
      id: 'apoz2-prediction',
      type: 'text' as const,
      content: `## 📖 A Prediction in 1974

By the early 1970s, **chlorofluorocarbons (CFCs)** were everywhere: in refrigerators, air conditioners, aerosol cans and foam. They were prized because they were nontoxic, nonflammable and chemically **inert**.

In 1974, chemists **Mario Molina** and **F. Sherwood Rowland** asked what happens to CFCs that nothing in the lower atmosphere can destroy. Their reasoning:

| Step | Reasoning |
|---|---|
| 1 | CFCs do not dissolve in rain or react near the ground, so they survive for decades |
| 2 | Over years they mix upward into the stratosphere |
| 3 | There, strong UV-C breaks them apart and frees chlorine atoms |
| 4 | Each chlorine atom acts as a **catalyst**, destroying many thousands of ozone molecules before it is locked away |
| 5 | Prediction: continued CFC use would slowly thin the ozone layer worldwide |

The CFC industry disputed the claim, but the reasoning was persuasive enough that the United States banned CFCs in most **nonessential aerosol sprays** in **1978**. Molina, Rowland and **Paul Crutzen**, who had shown that nitrogen oxides also destroy stratospheric ozone, shared the **1995 Nobel Prize in Chemistry**.`,
    },
    {
      id: 'apoz2-surprise',
      type: 'text' as const,
      content: `## A Surprise in 1985

The 1974 prediction was a slow, worldwide thinning of a few percent. What scientists actually found was far more dramatic, and in an unexpected place.

In **1985**, Joseph Farman, Brian Gardiner and Jonathan Shanklin of the **British Antarctic Survey** published decades of ground measurements from Halley station. Total ozone in the Antarctic **spring (October)** had fallen to roughly a third below its 1960s values. NASA satellite data then confirmed that the thinning covered the whole continent: the **ozone hole**.

### Worked Example: Reading the October Record (illustrative data in the pattern of the Halley record)

| Period | Mean October total ozone (Dobson units) |
|---|---|
| 1960s | 310 |
| 1975 | 290 |
| 1980 | 240 |
| 1984 | 200 |

$$\\frac{200 - 310}{310} \\times 100 \\approx -35\\%$$

$$\\text{Average rate, 1975 to 1984} = \\frac{200 - 290}{1984 - 1975} = \\frac{-90}{9} = -10\\ \\text{DU per year}$$

The loss was not steady: it **accelerated** in the late 1970s and early 1980s, as CFC concentrations in the air climbed.

The surprise posed a question: why was the loss so large, so seasonal, and over the coldest place on Earth? In **1986**, Susan Solomon and colleagues proposed that reactions on the ice particles of **polar stratospheric clouds** convert stable chlorine compounds into forms that sunlight splits easily each spring.`,
    },
    {
      id: 'apoz2-q-history',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Molina and Rowland predicted that CFCs would harm the ozone layer mainly because CFCs are:',
            options: [
              'Highly toxic gases that attack ozone soon after leaving a spray can',
              'Inert near the ground, so they survive to reach the stratosphere',
              'Dense gases that settle into polar regions and stay there all year',
              'Greenhouse gases that warm the stratosphere and so melt the ozone',
            ],
            correctAnswer: 1,
            explanation: 'Because CFCs do not react or rain out in the lower atmosphere, they last long enough to drift into the stratosphere, where UV frees their chlorine. They are not toxic, do not settle at the poles, and ozone does not melt.',
          },
          {
            question: 'What made the 1985 Antarctic findings surprising to scientists?',
            options: [
              'The losses were larger and more concentrated than any model predicted',
              'The measurements showed that ozone had increased over the polar spring',
              'The station recorded no CFCs at all in the air above Antarctica',
              'Ozone loss appeared only in summer when the sunlight is strongest',
            ],
            correctAnswer: 0,
            explanation: 'Models predicted a slow global thinning of a few percent; instead, spring ozone over Antarctica had fallen by roughly a third. The losses were in spring, and CFCs were present.',
          },
        ],
      },
    },
    {
      id: 'apoz2-smoking-gun',
      type: 'text' as const,
      content: `## The Smoking Gun: Reading Flight Data

To test the chlorine hypothesis, NASA flew a high-altitude **ER-2** research aircraft from southern Chile into the Antarctic stratosphere in **1987**, measuring ozone and **chlorine monoxide (ClO)**, the molecule formed when chlorine attacks ozone.

### Illustrative data in the pattern of the 1987 flights (about 18 km altitude)

| Latitude (°S) | ClO (parts per trillion) | $O_{3}$ (parts per billion) |
|---|---|---|
| 63 | 20 | 2,500 |
| 65 | 30 | 2,450 |
| 67 | 60 | 2,300 |
| 69 (vortex edge) | 700 | 1,600 |
| 71 | 1,000 | 1,100 |

### Reading it

- Outside the polar vortex, ClO is low and ozone is high.
- Crossing the vortex edge, ClO jumps more than tenfold while ozone falls.
- The two curves are **mirror images**: an **anticorrelation**.

$$\\text{Ozone change from 63°S to 71°S} = \\frac{1{,}100 - 2{,}500}{2{,}500} \\times 100 = -56\\%$$

A correlation alone does not prove cause. What made this the "smoking gun" was that it matched a **known mechanism**: laboratory measurements showed that ClO at these levels destroys ozone fast enough to explain the observed loss, and the ClO came from CFC-derived chlorine.

> 🔑 **AP Connection:** On FRQ 2, when you **describe** a relationship in data, name its direction ("as ClO increases, ozone decreases") and cite values. To **explain** it, give the mechanism, not just the correlation.`,
    },
    {
      id: 'apoz2-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) In the flight table, by what factor is ClO higher at 71°S than at 63°S?

2) A station's mean October ozone fell from 300 DU in 1970 to 165 DU in 1990. What was the percent decrease?

3) For the same station, what was the average rate of change in DU per year? (enter a negative number)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['50', '45', '-6.75'],
        hint1: 'Divide the ClO at 71°S by the ClO at 63°S.',
        hint2: '(165 − 300) ÷ 300 × 100, then report the size of the decrease.',
        hint3: '(165 − 300) ÷ (1990 − 1970).',
        explanation: '1) 1,000 ÷ 20 = 50 times higher. 2) −135 ÷ 300 × 100 = −45, a 45 percent decrease. 3) −135 ÷ 20 = −6.75 DU per year.',
      },
    },
    {
      id: 'apoz2-arctic',
      type: 'text' as const,
      content: `## Why the Arctic Is Different

The same chlorine is present over both poles, yet deep losses are routine only in the south.

| Feature | Antarctic | Arctic |
|---|---|---|
| Geography | A high, ice-covered continent ringed by ocean | An ocean ringed by continents and mountain ranges |
| Polar vortex | Strong and stable for months | Weaker and frequently disturbed by air flowing over mountains |
| Stratosphere temperature | Regularly below the roughly −78 °C needed for polar stratospheric clouds | Usually warmer, so fewer clouds form |
| Typical spring loss | Severe, every year | Smaller and variable from year to year |
| Exceptions | — | Unusually cold, stable winters (for example 2011 and 2020) produced record Arctic losses |

More people live under the Arctic and northern midlatitudes, so even occasional Arctic losses raise UV exposure for large populations in spring.`,
    },
    {
      id: 'apoz2-science',
      type: 'text' as const,
      content: `## What the Story Shows About Science

| Stage | Ozone example | General lesson |
|---|---|---|
| Hypothesis from theory | Molina and Rowland, 1974 | Predictions can come from laboratory chemistry before effects are seen |
| Long-term monitoring | Halley station's record, kept since the 1950s | Routine measurements reveal surprises |
| Anomaly | A loss far larger than predicted | Unexpected data drive new hypotheses |
| Revised hypothesis | Chemistry on polar stratospheric clouds, 1986 | Science updates models rather than ignoring data |
| Test | 1987 aircraft measurements of ClO and $O_{3}$ | A correlation plus a mechanism makes a strong causal case |
| Policy | Montreal Protocol, 1987 | Action under strong evidence, strengthened as evidence grew |`,
    },
    {
      id: 'apoz2-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Aircraft data show chlorine monoxide rising sharply as ozone falls across the vortex edge. Why was this treated as strong evidence that chlorine caused the loss?',
            options: [
              'Lab studies showed ClO at those levels destroys ozone fast enough',
              'Any two variables that change together must be cause and effect',
              'ClO is a greenhouse gas, so it must warm and destroy the ozone',
              'The aircraft itself released the ClO and was seen damaging ozone',
            ],
            correctAnswer: 0,
            explanation: 'The anticorrelation matched a known, measured mechanism: ClO destroys ozone at rates that account for the loss. Correlation alone would not prove cause, and the ClO came from CFC-derived chlorine, not the plane.',
          },
          {
            question: 'Why does the Antarctic lose far more ozone each spring than the Arctic usually does?',
            options: [
              'More CFCs were released in the Southern Hemisphere than in the north',
              'Its colder, more stable vortex forms more polar stratospheric clouds',
              'The Antarctic receives no sunlight at all during the spring months',
              'Arctic sea ice absorbs the chlorine before it can reach the ozone',
            ],
            correctAnswer: 1,
            explanation: 'The isolated, colder Antarctic vortex forms abundant polar stratospheric clouds that activate chlorine. CFCs mix globally, and sunlight returning in spring is what starts the rapid loss.',
          },
          {
            question: 'Which action best reflects how scientists responded to the unexpected 1985 data?',
            options: [
              'They dismissed the Halley measurements as instrument error',
              'They proposed a new mechanism and tested it with field data',
              'They waited for the ozone layer to recover before studying it',
              'They concluded that CFCs could not be the cause of the losses',
            ],
            correctAnswer: 1,
            explanation: 'Scientists treated the anomaly as real, proposed chemistry on polar stratospheric clouds, and tested it with the 1987 aircraft campaign. That cycle of hypothesis and test is what made the evidence convincing.',
          },
        ],
      },
    },
    {
      id: 'apoz2-summary',
      type: 'text' as const,
      content: `## Part 2 Summary

| Idea | Key fact |
|---|---|
| 1974 prediction | Molina and Rowland: inert CFCs reach the stratosphere, free chlorine, destroy ozone catalytically |
| Early policy | U.S. ban on CFCs in most nonessential aerosols, 1978 |
| 1985 discovery | British Antarctic Survey: October ozone over Antarctica down roughly a third from the 1960s |
| Revised hypothesis | 1986: chemistry on polar stratospheric clouds activates chlorine |
| Smoking gun | 1987 ER-2 flights: ClO up, ozone down at the vortex edge, matching a known mechanism |
| Arctic vs Antarctic | Arctic vortex is warmer and weaker; large losses only in unusually cold years |
| Nobel Prize | Molina, Rowland and Crutzen, Chemistry, 1995 |

**Next:** Part 3 looks at the chemicals themselves: which ones deplete ozone, by how much, and what replaced them.`,
    },
  ],
},

// ───────────────────────── PART 3 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz3-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 3 of 7 — Ozone-Depleting Substances and Their Replacements**

---

| Section |
|---------|
| 📖 The Family of Ozone-Depleting Substances |
| Ozone Depletion Potential |
| Why Lifetime Matters |
| Replacements and the Climate Trade-off |
| Choosing a Refrigerant |

> 🔑 **Key Concept:** CFCs were not the only culprits. Halons, carbon tetrachloride, methyl bromide and others also carry chlorine or bromine to the stratosphere, and they differ enormously in how much damage each tonne does. Their replacements solved the ozone problem but created a climate problem, which is why the CED notes that some substitutes are strong greenhouse gases (CED 9.1 and 9.2).`,
    },
    {
      id: 'apoz3-family',
      type: 'text' as const,
      content: `## 📖 The Family of Ozone-Depleting Substances

An **ozone-depleting substance (ODS)** is a long-lived compound that carries **chlorine or bromine** into the stratosphere.

| Substance | Main former uses | Halogen | Approximate atmospheric lifetime |
|---|---|---|---|
| CFC-11 | Foam blowing, aerosol propellant | Chlorine | About 50 years |
| CFC-12 | Refrigerators, car air conditioners | Chlorine | About 100 years |
| CFC-113 | Cleaning solvent for electronics | Chlorine | About 90 years |
| Carbon tetrachloride | Solvent, chemical feedstock | Chlorine | About 30 years |
| Halon-1301 | Built-in fire suppression (aircraft, computer rooms) | **Bromine** | About 70 years |
| Halon-1211 | Handheld fire extinguishers | **Bromine** and chlorine | About 16 years |
| Methyl bromide | Soil fumigant for crops such as strawberries; quarantine treatment | **Bromine** | Under 1 year |
| HCFC-22 | Home air conditioners (transitional replacement) | Chlorine | About 12 years |

Bromine is roughly **60 times** more destructive to ozone per atom than chlorine, which is why halons are so damaging even though far smaller amounts were made.`,
    },
    {
      id: 'apoz3-odp',
      type: 'text' as const,
      content: `## Ozone Depletion Potential

The **ozone depletion potential (ODP)** compares the total ozone destroyed by one kilogram of a substance with the ozone destroyed by one kilogram of **CFC-11**, which is defined as **1.0**. Treaty reporting multiplies tonnes by ODP to get **ODP-tonnes**.

| Substance | ODP (Montreal Protocol value) |
|---|---|
| CFC-11 | 1.0 (reference) |
| CFC-12 | 1.0 |
| Carbon tetrachloride | 1.1 |
| Halon-1211 | 3.0 |
| Halon-1301 | 10 |
| Methyl bromide | 0.6 |
| HCFC-22 | 0.055 |
| HFC-134a | 0 |

### Worked Example: A Country's Ozone Footprint (illustrative data)

| Substance | Tonnes used | ODP | ODP-tonnes |
|---|---|---|---|
| CFC-12 | 200 | 1.0 | 200 |
| Halon-1301 | 50 | 10 | 500 |
| HCFC-22 | 1,000 | 0.055 | 55 |
| **Total** | **1,250** | | **755** |

$$\\text{Halon share} = \\frac{500}{755} \\times 100 \\approx 66\\%$$

Halon-1301 is only 4 percent of the tonnage $(50 \\div 1{,}250)$ but about two-thirds of the ozone damage. ODP-weighting tells a government where cuts matter most.`,
    },
    {
      id: 'apoz3-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data; use the ODP table above.)

1) How many ODP-tonnes are 30 t of halon-1211?

2) A farm region uses 400 t of methyl bromide a year. How many ODP-tonnes is that?

3) A plant replaces 500 t of CFC-12 with 500 t of HCFC-22. By what percent do its ODP-tonnes fall? (round to the nearest whole number)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['90', '240', '95'],
        hint1: 'Multiply tonnes by the ODP of 3.0.',
        hint2: 'Methyl bromide has an ODP of 0.6.',
        hint3: 'Before: 500 × 1.0. After: 500 × 0.055. Then find the percent decrease.',
        explanation: '1) 30 × 3.0 = 90 ODP-tonnes. 2) 400 × 0.6 = 240 ODP-tonnes. 3) 500 falls to 27.5 ODP-tonnes; (500 − 27.5) ÷ 500 × 100 ≈ 94.5, about 95 percent.',
      },
    },
    {
      id: 'apoz3-lifetime',
      type: 'text' as const,
      content: `## Why Lifetime Matters

ODP captures damage per kilogram. **Atmospheric lifetime** decides how long the damage continues after emissions stop.

- CFC-12 lasts about a century. A kilogram released in 1985 will still be destroying ozone late in this century.
- Methyl bromide lasts under a year, so cutting it gives a fast payoff.
- Old equipment is a **bank** of ODS: refrigerators, foam insulation and fire-suppression systems still hold large amounts made decades ago, which leak or are released at disposal unless recovered and destroyed.

This is why the ozone layer recovers over **decades**, not years, even though production of the main CFCs ended worldwide in 2010.

> 🔑 **AP Connection:** If a question asks why the ozone hole persisted long after CFC production fell, the answer is persistence: CFCs remain in the atmosphere for decades, and banks in old equipment keep releasing them.`,
    },
    {
      id: 'apoz3-q-odp',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Halons were made in much smaller quantities than CFCs. Why are they still a major concern for the ozone layer?',
            options: [
              'Their bromine destroys far more ozone per atom than chlorine',
              'They break down in the lower atmosphere into extra CFCs',
              'They are released mainly at the poles, where the hole forms',
              'They stop sunlight from rebuilding ozone in the stratosphere',
            ],
            correctAnswer: 0,
            explanation: 'Bromine is roughly 60 times more destructive per atom than chlorine, so halons carry very high ozone depletion potentials. They do not turn into CFCs and are not released mainly at the poles.',
          },
          {
            question: 'Why does cutting methyl bromide improve ozone faster than cutting the same ODP-tonnes of CFC-12?',
            options: [
              'Methyl bromide contains no bromine once it reaches high altitude',
              'Its lifetime is under a year, against about a century for CFC-12',
              'CFC-12 is used only in places far from the stratospheric ozone layer',
              'Methyl bromide has a higher depletion potential than any CFC does',
            ],
            correctAnswer: 1,
            explanation: 'A short-lived gas leaves the atmosphere soon after emissions stop, so the benefit appears quickly; long-lived CFC-12 keeps damaging ozone for decades. Methyl bromide\'s ODP is 0.6, lower than CFC-12\'s 1.0.',
          },
        ],
      },
    },
    {
      id: 'apoz3-replacements',
      type: 'text' as const,
      content: `## Replacements and the Climate Trade-off

Each generation of refrigerant solved one problem and exposed another. Global warming potential (GWP) compares warming over 100 years with the same mass of $CO_{2}$ (values used in Montreal Protocol reporting).

| Generation | Example | ODP | GWP (100-year) | Status |
|---|---|---|---|---|
| CFCs | CFC-12 | 1.0 | About 10,900 | Production ended worldwide in 2010 |
| HCFCs | HCFC-22 | 0.055 | About 1,810 | Being phased out; developed countries largely finished by 2020 |
| HFCs | HFC-134a | 0 | About 1,430 | Phase-down under the **Kigali Amendment (2016)** |
| HFOs | HFO-1234yf | 0 | Under 5 | Growing use in car air conditioners |
| Natural refrigerants | Ammonia, $CO_{2}$, propane, isobutane | 0 | 0 to about 3 | Ammonia is toxic; hydrocarbons are flammable; $CO_{2}$ needs high pressure |

HFCs contain no chlorine or bromine, so they do not harm ozone. But as their use grew, they became a fast-rising source of warming. The **Kigali Amendment** added them to the Montreal Protocol so the same treaty that fixed the ozone layer now cuts a greenhouse gas.`,
    },
    {
      id: 'apoz3-dd',
      type: 'dropdown-select' as const,
      content: `**Ozone Problem, Climate Problem, Both or Neither?** 🔽

For each refrigerant, choose the description that fits its effects.`,
      exercise: {
        dropdowns: [
          { label: 'CFC-12:', options: ['Harms ozone and climate', 'Harms ozone only', 'Harms climate only', 'Harms neither much'] },
          { label: 'HFC-134a:', options: ['Harms ozone and climate', 'Harms ozone only', 'Harms climate only', 'Harms neither much'] },
          { label: 'HFO-1234yf:', options: ['Harms ozone and climate', 'Harms ozone only', 'Harms climate only', 'Harms neither much'] },
          { label: 'Treaty that phased out CFCs:', options: ['Montreal Protocol', 'Kyoto Protocol', 'Clean Air Act of 1970', 'Vienna Convention'] },
        ],
        correctAnswers: ['Harms ozone and climate', 'Harms climate only', 'Harms neither much', 'Montreal Protocol'],
        hint1: 'CFCs carry chlorine and are also potent greenhouse gases.',
        hint2: 'HFCs have no chlorine but a GWP above 1,000.',
        hint3: 'HFOs break down in days to weeks, so their GWP is tiny.',
        explanation: 'CFC-12 depletes ozone and has a GWP near 11,000. HFC-134a has no ozone effect but a GWP of about 1,430. HFO-1234yf has neither a significant ozone nor climate effect. The Montreal Protocol (1987) phased out CFCs, which led to HFCs as replacements.',
      },
    },
    {
      id: 'apoz3-choose',
      type: 'text' as const,
      content: `## Choosing a Refrigerant

### Worked Example: A Leaking Car Air Conditioner (illustrative data)

A car air conditioner holds **0.6 kg** of refrigerant, and over the car's life the equivalent of one full charge leaks out.

$$\\text{HFC-134a: } 0.6\\ \\text{kg} \\times 1{,}430 = 858\\ \\text{kg } CO_{2}\\text{e}$$

$$\\text{HFO-1234yf: } 0.6\\ \\text{kg} \\times 4 = 2.4\\ \\text{kg } CO_{2}\\text{e}$$

$$\\frac{858}{2.4} \\approx 360$$

Switching refrigerants cuts the leak's warming effect by a factor of about 360. For comparison, 858 kg of $CO_{2}$ is roughly what burning about 370 liters of gasoline releases.

Choosing among options means weighing ozone, climate, **safety** (toxicity, flammability), energy efficiency and cost. No single refrigerant is best for every use.`,
    },
    {
      id: 'apoz3-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A supermarket chain replaces HCFC-22 in its freezers with an HFC. Which outcome is most likely?',
            options: [
              'Ozone damage falls, but the warming from leaks may stay high',
              'Both ozone damage and warming from leaks fall to zero at once',
              'Chlorine in HFCs makes the ozone damage worse than with HCFCs',
              'Warming falls, but ozone damage doubles because HFCs hold bromine',
            ],
            correctAnswer: 0,
            explanation: 'HFCs contain no chlorine or bromine, so they do not deplete ozone, but many have GWPs above 1,000, so leaks still warm the climate. That gap is what the Kigali Amendment addresses.',
          },
          {
            question: 'Why do old refrigerators and foam insulation matter for ozone recovery even though CFC production has ended?',
            options: [
              'They absorb ozone from the indoor air of the buildings they are in',
              'They still hold CFCs that escape through leaks or at disposal',
              'They release fresh UV-C radiation as their insulation breaks down',
              'They convert ground-level ozone into new CFCs while in use',
            ],
            correctAnswer: 1,
            explanation: 'Equipment made before the phase-out still holds CFCs that escape through leaks or careless disposal, so recovering and destroying these banks speeds recovery.',
          },
        ],
      },
    },
    {
      id: 'apoz3-summary',
      type: 'text' as const,
      content: `## Part 3 Summary

| Idea | Key fact |
|---|---|
| Ozone-depleting substances | Long-lived carriers of chlorine or bromine: CFCs, halons, carbon tetrachloride, methyl bromide, HCFCs |
| Bromine | About 60 times more destructive per atom than chlorine |
| ODP | Damage per kg relative to CFC-11 (= 1.0); ODP-tonnes = tonnes × ODP |
| Lifetime | CFC-12 about 100 years; methyl bromide under 1 year; banks in old equipment keep leaking |
| Replacements | CFCs → HCFCs → HFCs → HFOs and natural refrigerants |
| Trade-off | HFCs spare ozone but are potent greenhouse gases; Kigali Amendment (2016) phases them down |
| Calculations | ODP-tonnes; share of total; $CO_{2}$e = mass × GWP |

**Next:** Part 4 asks why the Montreal Protocol worked so well and what other environmental treaties can learn from it.`,
    },
  ],
},

// ───────────────────────── PART 4 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz4-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 4 of 7 — The Montreal Protocol: Why It Worked**

---

| Section |
|---------|
| 📖 From Framework to Phase-Out |
| Design Features That Made It Work |
| Catching a Cheater: The CFC-11 Mystery |
| Recovery and the World Avoided |
| Lessons for Climate Policy |

> 🔑 **Key Concept:** The CED says ozone depletion can be mitigated by **replacing ozone-depleting chemicals with substitutes** that do not deplete the ozone layer. The Montreal Protocol is how the world did that, and it is widely called the most successful environmental treaty ever. This part looks at the treaty's design, how compliance is checked, and why its success has been hard to repeat for climate (CED 9.2).`,
    },
    {
      id: 'apoz4-timeline',
      type: 'text' as const,
      content: `## 📖 From Framework to Phase-Out

| Year | Agreement | What it did |
|---|---|---|
| 1985 | **Vienna Convention** | A framework for cooperation and research; no required cuts |
| 1987 | **Montreal Protocol** | First binding limits: freeze CFC use, then cut it **50%** by the late 1990s |
| 1990 | London Amendment | Full phase-out of CFCs, halons and carbon tetrachloride in developed countries by 2000; created the **Multilateral Fund** |
| 1992 | Copenhagen Amendment | Moved the CFC phase-out up to 1996; added HCFCs and methyl bromide |
| 2009 | — | First UN treaty ratified by **every** member country |
| 2010 | — | CFC production ended worldwide |
| 2016 | **Kigali Amendment** | Phase-down of HFCs for climate protection |

The original 1987 cut of 50 percent turned out to be far too small. The treaty was built to **tighten as the science improved**: scientific panels report every few years, and the parties can adjust schedules without negotiating a new treaty.

### Worked Example: Following a Schedule (illustrative data)

A developed country used **90,000 t** of CFCs in its 1986 base year.

$$\\text{1987 Protocol, 50\\% cut: } 90{,}000 \\times 0.50 = 45{,}000\\ \\text{t allowed}$$

By 1993 the country had cut its use to **63,000 t**:

$$\\frac{90{,}000 - 63{,}000}{90{,}000} \\times 100 = 30\\%\\ \\text{cut so far}$$

Under the original treaty it was on its way to the 50 percent target. But the 1990 and 1992 amendments changed the goal to **zero by 1996**, so all 63,000 t had to go within three years: an average of $63{,}000 \\div 3 = 21{,}000$ t per year.`,
    },
    {
      id: 'apoz4-design',
      type: 'text' as const,
      content: `## Design Features That Made It Work

| Feature | How it worked |
|---|---|
| **Differentiated timelines** | Developing countries got about 10 extra years to phase out each chemical |
| **Multilateral Fund** | Developed countries pay into a fund that covers the extra costs for developing countries to switch technologies; it has provided billions of dollars since 1991 |
| **Trade restrictions** | Parties may not trade controlled chemicals with non-parties, so staying outside the treaty was costly |
| **Scientific assessments** | Regular reports by expert panels allowed schedules to be tightened quickly |
| **Reporting** | Every party reports its production and consumption each year |

### Conditions that helped

- **Few producers.** A small number of chemical companies made most of the world's CFCs, so the change involved few decision makers.
- **Substitutes existed.** Manufacturers developed HCFCs, HFCs and new processes, so phasing out did not mean doing without refrigeration.
- **Clear harm.** The ozone hole was vivid, and skin cancer and cataracts were direct, personal risks.
- **Limited economic stakes.** CFCs were a small industry compared with fossil fuels.

> 🔑 **AP Connection:** If an FRQ asks why the Montreal Protocol succeeded, give a specific reason **and** explain it, for example: "substitutes such as HFCs were available, so countries could stop using CFCs without losing refrigeration."`,
    },
    {
      id: 'apoz4-q-design',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'What was the purpose of the Multilateral Fund created under the Montreal Protocol?',
            options: [
              'To pay the extra costs of developing countries switching away from ODS',
              'To buy and store all remaining CFCs held by chemical companies in 1990',
              'To fine every country that missed a phase-out deadline by one year',
              'To fund research on new CFCs that would last longer in refrigerators',
            ],
            correctAnswer: 0,
            explanation: 'Developed countries contribute so developing countries can afford to convert factories and equipment to ozone-safe technology. The fund does not buy CFC stocks or pay for new CFCs.',
          },
          {
            question: 'Why did restricting trade with non-parties help the treaty succeed?',
            options: [
              'It made CFCs cheaper for countries that had joined the treaty',
              'It made staying outside the treaty costly for any country',
              'It let non-parties keep making CFCs to sell inside their borders',
              'It required all countries to stop buying any refrigerators',
            ],
            correctAnswer: 1,
            explanation: 'Non-parties could not buy or sell controlled chemicals from treaty members, which removed the advantage of staying out and pushed nearly every country to join.',
          },
        ],
      },
    },
    {
      id: 'apoz4-cfc11',
      type: 'text' as const,
      content: `## Catching a Cheater: The CFC-11 Mystery

After production ended, the amount of CFC-11 in the air should have fallen at a steady rate as it slowly broke down. In **2018**, NOAA scientists reported that, since about 2012, the decline had **slowed** by about half. Someone was emitting thousands of tonnes a year of a banned chemical.

Air samples traced much of the new emission to **eastern China**, where investigators found CFC-11 being used illegally to make foam insulation. After enforcement, emissions dropped sharply, and by **2019–2020** the decline in atmospheric CFC-11 was back on track.

| Lesson | Why it matters |
|---|---|
| Long-term monitoring | Without a steady record, the slowdown would have gone unnoticed |
| Atmospheric "detective work" | Concentration data plus wind patterns can locate emission sources |
| Enforcement | A treaty is only as good as compliance with it |

Had the illegal emissions continued, recovery of the ozone layer would have been delayed by about a decade.`,
    },
    {
      id: 'apoz4-recovery',
      type: 'text' as const,
      content: `## Recovery and the World Avoided

The 2022 scientific assessment for the United Nations projects that total ozone will return to its **1980 values** at about these dates, if current policies continue:

| Region | Projected recovery to 1980 levels |
|---|---|
| Most of the world (60°N to 60°S) | About 2040 |
| Arctic (spring) | About 2045 |
| Antarctic (spring) | About 2066 |

The Antarctic recovers last because its cold, isolated vortex amplifies the effect of the chlorine that remains.

### The world avoided

Modeling studies of a "world without the Montreal Protocol" project that about **two-thirds** of the ozone layer would have been destroyed by about 2065, and summer UV Index values at midlatitudes would have reached levels now seen only in the tropics or higher. The U.S. EPA projects that, for Americans born between 1890 and 2100, the treaty will prevent **hundreds of millions** of skin cancer cases and millions of cataract cases.

### A climate bonus

CFCs and HCFCs are also powerful greenhouse gases. Phasing them out avoided far more warming than the first emission targets of the **Kyoto Protocol** were designed to achieve, and the Kigali Amendment is projected to avoid up to about **0.4 °C** of warming by 2100.`,
    },
    {
      id: 'apoz4-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data unless stated.)

1) A country used 120,000 t of CFCs in 1986. How many tonnes would a 50 percent cut allow?

2) Using the projection table, how many years after 2026 is Antarctic recovery expected?

3) Atmospheric CFC-11 fell from 270 ppt at its peak to 216 ppt. What is the percent decrease?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['60000', '40', '20'],
        hint1: 'Half of the base-year amount.',
        hint2: 'Subtract: 2066 − 2026.',
        hint3: '(270 − 216) ÷ 270 × 100.',
        explanation: '1) 120,000 × 0.50 = 60,000 t. 2) 2066 − 2026 = 40 years. 3) 54 ÷ 270 × 100 = 20 percent decrease.',
      },
    },
    {
      id: 'apoz4-climate',
      type: 'text' as const,
      content: `## Lessons for Climate Policy

| Factor | Montreal Protocol (ozone) | Climate agreements |
|---|---|---|
| Sources | A few chemicals from a few producers | $CO_{2}$ from nearly all energy use, plus methane and nitrous oxide from farming and land use |
| Substitutes | Available within a few years | Available for many uses, but replacing the whole energy system takes decades and large investment |
| Economic stakes | A small industry | Fossil fuels underpin the world economy |
| Binding targets | Yes, with schedules for every party | Kyoto: binding only for developed countries; Paris (2015): each country sets its own target |
| Enforcement tools | Trade restrictions, reporting, funding | Mostly reporting, transparency and peer pressure |
| Result so far | Ozone-depleting chemicals cut by over 99% | Global emissions still near record highs, though growth has slowed |

The comparison is not that climate action is hopeless. It shows which features help: funding for developing countries, regular scientific review, schedules that tighten over time, and affordable substitutes. Several of these now appear in climate policy, and the Kigali Amendment uses the Montreal machinery itself to cut a greenhouse gas.`,
    },
    {
      id: 'apoz4-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which factor best explains why cutting CFCs was easier than cutting carbon dioxide?',
            options: [
              'CFCs came from a few producers and had substitutes ready',
              'CFCs were less harmful to people than carbon dioxide is',
              'Carbon dioxide stays in the air a much shorter time',
              'Only wealthy nations had ever emitted carbon dioxide',
            ],
            correctAnswer: 0,
            explanation: 'A handful of companies made CFCs and alternatives were available, while carbon dioxide comes from almost all energy use across the whole economy.',
          },
          {
            question: 'Why is the Antarctic ozone hole expected to recover later than the ozone layer over most of the world?',
            options: [
              'Most CFCs are still being released close to the South Pole',
              'Antarctic cold and its isolated vortex magnify remaining chlorine',
              'The Montreal Protocol does not apply to the Southern Hemisphere',
              'Ozone cannot form over Antarctica because of its long dark winter',
            ],
            correctAnswer: 1,
            explanation: 'Polar stratospheric clouds in the cold, isolated vortex activate chlorine efficiently, so even the reduced amount left causes large spring losses until it falls further. The treaty applies everywhere.',
          },
          {
            question: 'The 2018 CFC-11 discovery is best used as evidence for which statement?',
            options: [
              'CFC-11 was never actually covered by the Montreal Protocol',
              'Ozone recovery is complete, so monitoring can now be ended',
              'Long-term monitoring is needed to verify treaty compliance',
              'Illegal production cannot be detected from atmospheric data',
            ],
            correctAnswer: 2,
            explanation: 'A slowdown in the expected decline of CFC-11 revealed illegal emissions, which were traced and stopped. Without continued monitoring, the violation would have gone unnoticed.',
          },
        ],
      },
    },
    {
      id: 'apoz4-summary',
      type: 'text' as const,
      content: `## Part 4 Summary

| Idea | Key fact |
|---|---|
| Timeline | Vienna 1985 → Montreal 1987 → London 1990 → Copenhagen 1992 → universal ratification 2009 → Kigali 2016 |
| Design | Differentiated timelines, Multilateral Fund, trade restrictions, scientific review, annual reporting |
| Why it worked | Few producers, available substitutes, clear harm, limited economic stakes |
| Compliance | 2018: illegal CFC-11 emissions detected, traced and stopped |
| Recovery | About 2040 (most of the world), 2045 (Arctic), 2066 (Antarctic) |
| Benefits | Avoided severe UV increases and many skin cancers and cataracts; large climate co-benefit |
| Climate lesson | Funding, review and tightening schedules help; scale and economic stakes make $CO_{2}$ harder |

**Next:** Part 5 moves indoors, where most people spend most of their time, to classify the pollutants found there.`,
    },
  ],
},

// ───────────────────────── PART 5 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz5-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 5 of 7 — Indoor Air Pollutants: Sources and Mechanisms**

---

| Section |
|---------|
| 📖 The CED's Three Source Groups |
| Radon: From Rock to Lung |
| Carbon Monoxide: The Asphyxiant |
| Fibers, Fumes and Paint |

> 🔑 **Key Concept:** People in developed countries spend roughly 90 percent of their time indoors, so indoor air can matter more to health than outdoor air. The CED sorts indoor pollutants by where they come from (**natural, human-made, combustion**) and by how they act (**asphyxiants, particulates**). This part explains the mechanism behind each major pollutant, with the numbers you need to reason about exposure (CED 7.5). A one-table survey of indoor pollutants and the radon action level appears in Atmospheric Pollution, Part 3.`,
    },
    {
      id: 'apoz5-groups',
      type: 'text' as const,
      content: `## 📖 The CED's Three Source Groups

| Source group | Pollutants | Where they come from |
|---|---|---|
| **Natural** | Radon, mold, dust | Uranium-bearing rock and soil; damp walls and basements; outdoor soil and household activity |
| **Human-made** | Asbestos; VOCs; formaldehyde; lead | Old insulation and tiles; furniture, paneling and carpets; building materials, upholstery and carpeting; old paint |
| **Combustion** | Carbon monoxide; smoke (particulates) | Indoor heaters, furnaces and stoves; burning of biomass and tobacco |

Two other CED labels describe **how** a pollutant harms:

| Label | Meaning | Indoor examples |
|---|---|---|
| **Asphyxiant** | Prevents the body from getting or using oxygen | Carbon monoxide |
| **Particulate** | Solid or liquid particles that lodge in the airways and lungs | Asbestos fibers, dust, smoke |

A pollutant can carry more than one label: wood smoke is a **combustion** pollutant made of **particulates**, and it also carries carbon monoxide.`,
    },
    {
      id: 'apoz5-dd',
      type: 'dropdown-select' as const,
      content: `**Classify the Pollutant** 🔽

Choose the CED source group for each indoor pollutant.`,
      exercise: {
        dropdowns: [
          { label: 'Radon seeping through a basement floor:', options: ['Natural', 'Human-made', 'Combustion', 'Stratospheric'] },
          { label: 'Formaldehyde from new particleboard cabinets:', options: ['Natural', 'Human-made', 'Combustion', 'Stratospheric'] },
          { label: 'Carbon monoxide from an unvented kerosene heater:', options: ['Natural', 'Human-made', 'Combustion', 'Stratospheric'] },
          { label: 'Mold spores on a damp bathroom wall:', options: ['Natural', 'Human-made', 'Combustion', 'Stratospheric'] },
        ],
        correctAnswers: ['Natural', 'Human-made', 'Combustion', 'Natural'],
        hint1: 'Ask whether the pollutant is produced by burning, by a manufactured product, or by nature.',
        hint2: 'Radon comes from uranium decay in rock; mold is a living organism.',
        hint3: 'Formaldehyde is released by glues in manufactured wood; carbon monoxide comes from incomplete burning.',
        explanation: 'Radon and mold are natural pollutants, formaldehyde from pressed wood is human-made, and carbon monoxide from a heater is a combustion pollutant.',
      },
    },
    {
      id: 'apoz5-radon',
      type: 'text' as const,
      content: `## Radon: From Rock to Lung

**Radon-222** is a colorless, odorless, radioactive gas produced as **uranium** in rocks and soil decays. Because it is a gas, it can move out of the rock and up through soil.

| Step | What happens |
|---|---|
| 1. Formation | Uranium-238 decays through several steps to radium-226, which decays to radon-222 |
| 2. Movement | Radon gas moves up through pore spaces in soil |
| 3. Entry | It enters through **cracks in the foundation**, gaps around pipes, sump pits and floor drains, or **dissolved in well water** released by showers and taps |
| 4. Build-up | Warm indoor air rises and leaks out near the top of a house, lowering pressure at the bottom so soil gas is drawn in (the stack effect) |
| 5. Harm | Radon decays (half-life **3.8 days**) into solid radioactive particles (polonium isotopes) that stick to dust, are inhaled, and lodge in the lungs, where their alpha radiation damages cells |

Radon is the **second leading cause of lung cancer** in the United States after smoking; the EPA estimates about **21,000** lung cancer deaths a year from it. Smokers exposed to radon face a much higher risk than nonsmokers, because the two hazards **multiply** rather than simply add (a synergistic effect). Risk is highest over uranium-rich granite, shale and phosphate deposits, but high readings can occur anywhere, so the only way to know is to **test**.

### Worked Example: Radon in a Sealed Sample

A sealed test canister holds air at **40 pCi/L** when it leaves a house. Radon's half-life is 3.8 days.

$$\\text{After 3.8 days: } 40 \\times \\tfrac{1}{2} = 20\\ \\text{pCi/L} \\qquad \\text{After 7.6 days: } 40 \\times \\left(\\tfrac{1}{2}\\right)^{2} = 10\\ \\text{pCi/L}$$

Labs correct for this decay using the time between sampling and analysis, which is why test kits must be mailed promptly.`,
    },
    {
      id: 'apoz5-q-radon',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Radon gas itself is breathed in and mostly breathed back out. What actually damages lung tissue?',
            options: [
              'The low oxygen level that radon creates inside a sealed house',
              'Radioactive decay products that stick to dust and stay in the lungs',
              'The acid that forms when radon dissolves in the moist lung lining',
              'Heat released as radon reacts with oxygen in the blood',
            ],
            correctAnswer: 1,
            explanation: 'Radon decays into solid radioactive particles that attach to dust, lodge in the airways, and damage cells with alpha radiation. Radon does not displace oxygen at these levels, form acid, or react with blood.',
          },
          {
            question: 'Why can radon reach dangerous levels in a home with no smokers, no fuel-burning appliances and new furniture?',
            options: [
              'Its source is the rock and soil beneath the house',
              'New furniture releases radon gas as its glue slowly cures',
              'It forms whenever sunlight strikes the window glass',
              'It is made by electrical wiring inside the walls of homes',
            ],
            correctAnswer: 0,
            explanation: 'Radon is a natural pollutant from uranium decay in the ground, so household habits and furnishings do not determine it; geology and foundation entry points do.',
          },
        ],
      },
    },
    {
      id: 'apoz5-co',
      type: 'text' as const,
      content: `## Carbon Monoxide: The Asphyxiant

**Carbon monoxide (CO)** forms when fuel burns without enough oxygen (**incomplete combustion**). Indoors it comes from faulty furnaces and water heaters, unvented space heaters, gas stoves, wood stoves, fireplaces, and generators or cars run in attached garages.

### Mechanism

Hemoglobin in red blood cells normally carries oxygen. CO binds to hemoglobin about **200 times** more strongly than oxygen does, forming carboxyhemoglobin. Blood then carries less oxygen, and tissues such as the brain and heart are starved of it. That is why the CED calls CO an **asphyxiant**.

| Exposure | Typical effects |
|---|---|
| Low | Headache, dizziness, fatigue (often mistaken for flu) |
| Moderate | Confusion, nausea, chest pain |
| High | Loss of consciousness, death |

CO is colorless and odorless, so a **CO detector** is the only reliable warning. Hundreds of Americans die each year from accidental CO poisoning, with spikes after storms, when people run generators indoors during power outages.

### Worked Example: Comparing with a Standard

The outdoor 8-hour standard for CO is **9 ppm**. A closed garage with an idling car reaches **450 ppm**.

$$\\frac{450}{9} = 50\\ \\text{times the standard}$$`,
    },
    {
      id: 'apoz5-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A sealed radon sample reads 32 pCi/L. What will it read after 11.4 days (three half-lives of 3.8 days)?

2) A basement measures 12 pCi/L. The EPA action level is 4 pCi/L. How many times the action level is this?

3) A cabin with a faulty heater reaches 180 ppm of CO. How many times the 9 ppm outdoor standard is this?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '3', '20'],
        hint1: 'Halve three times: 32 → 16 → 8 → ?',
        hint2: 'Divide 12 by 4.',
        hint3: 'Divide 180 by 9.',
        explanation: '1) 32 × (1/2)³ = 4 pCi/L. 2) 12 ÷ 4 = 3 times the action level. 3) 180 ÷ 9 = 20 times the standard.',
      },
    },
    {
      id: 'apoz5-fibers',
      type: 'text' as const,
      content: `## Fibers, Fumes and Paint

| Pollutant | How it harms | Key detail |
|---|---|---|
| **Asbestos** | Needle-like mineral fibers lodge deep in lung tissue and cause scarring (asbestosis), lung cancer and **mesothelioma** | Disease appears decades after exposure; asbestos is dangerous when disturbed and **friable** (crumbling), so intact material is often left sealed in place |
| **Formaldehyde** | Irritates eyes, nose and throat; classified as a human carcinogen | Released ("off-gassed") from glues in pressed wood, plywood, upholstery and carpets; highest when products are new and rooms are warm |
| **Other VOCs** | Headaches, dizziness, irritation; some cause cancer | Paints, cleaners, air fresheners, adhesives; levels indoors are often several times higher than outdoors |
| **Lead** | Neurotoxin that harms children's brain development | Paint in U.S. homes built before 1978; dust from chipping paint and friction surfaces such as windows |
| **Tobacco smoke** | Particulates plus many toxic and carcinogenic chemicals; secondhand smoke harms nonsmokers | A combustion pollutant and the leading cause of lung cancer |
| **Mold** | Allergies and asthma attacks | Grows wherever moisture persists; fixing leaks and humidity is the cure |

> 🔑 **AP Connection:** When an FRQ asks for a health effect, match the pollutant to its **specific** effect: radon → lung cancer; CO → reduced oxygen delivery (asphyxiation); asbestos → mesothelioma and asbestosis; lead → impaired neurological development in children. "Breathing problems" alone is usually too vague to earn the point.`,
    },
    {
      id: 'apoz5-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'After an ice storm knocks out power, a family runs a gasoline generator in the attached garage. Several family members wake with headaches and nausea. What is the most likely cause?',
            options: [
              'Radon drawn up through the garage floor slab',
              'Carbon monoxide blocking oxygen in the blood',
              'Asbestos fibers loosened by the generator\'s noise',
              'Formaldehyde released from the cold garage door',
            ],
            correctAnswer: 1,
            explanation: 'A generator burning gasoline in an enclosed space produces carbon monoxide, which binds hemoglobin and starves tissues of oxygen; headache and nausea are classic early signs.',
          },
          {
            question: 'A school built in 1965 has intact asbestos floor tiles. What is the generally recommended approach?',
            options: [
              'Sand the tiles down to remove the surface layer',
              'Leave them undisturbed and monitor their condition',
              'Remove them at once using the custodial staff',
              'Pressure-wash the tiles to clear any loose dust',
            ],
            correctAnswer: 1,
            explanation: 'Asbestos harms people when fibers are released, so intact material is usually left in place and monitored; any removal is done by trained crews with containment. Sanding or untrained removal releases fibers.',
          },
          {
            question: 'Why is a new apartment with fresh carpet and particleboard furniture often worst for formaldehyde in its first months?',
            options: [
              'New products off-gas fastest when they are freshly made',
              'Formaldehyde is formed by people breathing in new rooms',
              'Fresh carpet traps radon that rises from lower floors',
              'Formaldehyde comes mainly from gas stoves in new units',
            ],
            correctAnswer: 0,
            explanation: 'Glues and finishes release formaldehyde most rapidly when new, especially in warm rooms, and emissions decline over time. It is not produced by breathing and is not linked to radon.',
          },
        ],
      },
    },
    {
      id: 'apoz5-summary',
      type: 'text' as const,
      content: `## Part 5 Summary

| Idea | Key fact |
|---|---|
| Source groups | Natural (radon, mold, dust); human-made (asbestos, VOCs, formaldehyde, lead); combustion (CO, smoke from biomass and tobacco) |
| Action labels | Asphyxiant: CO. Particulates: asbestos, dust, smoke |
| Radon | From uranium decay; enters through foundation cracks and well water; half-life 3.8 days; decay products cause lung cancer |
| Carbon monoxide | Incomplete combustion; binds hemoglobin about 200× more strongly than oxygen; detectors save lives |
| Asbestos | Friable fibers cause asbestosis, lung cancer, mesothelioma decades later |
| Formaldehyde and VOCs | Off-gassed from new building products, furniture and household chemicals |
| Calculations | Half-life: multiply by $(1/2)^{n}$; ratio to a standard |

**Next:** Part 6 explains why pollutants build up indoors and how ventilation, source control and cleaner stoves bring them down.`,
    },
  ],
},

// ───────────────────────── PART 6 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz6-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 6 of 7 — Ventilation, Sick Buildings and Cleaner Stoves**

---

| Section |
|---------|
| 📖 Air Changes per Hour |
| A Steady-State Model of Indoor Air |
| Sick Building Syndrome |
| The Order of Solutions |
| Cooking Smoke: The World's Largest Indoor Problem |

> 🔑 **Key Concept:** Indoor concentration is a balance between how fast a pollutant is **released** inside and how fast **fresh air** carries it out. Energy-saving, tightly sealed buildings slow the second process, so pollutants build up unless the first is controlled. The same reasoning explains why billions of people breathe dangerous smoke at home every day (CED 7.5 and 7.6).`,
    },
    {
      id: 'apoz6-ach',
      type: 'text' as const,
      content: `## 📖 Air Changes per Hour

The **air change rate** is the number of times the entire volume of indoor air is replaced with outdoor air each hour (ACH).

$$\\text{ACH} = \\frac{\\text{airflow (m}^{3}\\text{/h)}}{\\text{building volume (m}^{3}\\text{)}}$$

| Building | Typical ACH |
|---|---|
| Very tight, energy-efficient house | About 0.1–0.3 without mechanical ventilation |
| Typical modern house | About 0.3–0.5 |
| Older, drafty house | 1 or more |
| Classroom with ventilation running | Several per hour |

### Worked Example: A Classroom

A classroom is 10 m × 8 m × 3 m and its ventilation system supplies **480 m³** of outdoor air per hour.

$$V = 10 \\times 8 \\times 3 = 240\\ \\text{m}^{3} \\qquad \\text{ACH} = \\frac{480}{240} = 2\\ \\text{per hour}$$

The air is fully replaced twice an hour. If the system is switched off and the windows are shut, the rate might fall to 0.3, and anything released in the room lingers more than six times as long.`,
    },
    {
      id: 'apoz6-steady',
      type: 'text' as const,
      content: `## A Steady-State Model of Indoor Air

If a pollutant is released at a steady rate $S$ and removed only by ventilation, the concentration settles where release equals removal:

$$C = \\frac{S}{\\text{ACH} \\times V}$$

(This ignores pollutant entering from outdoors and any removal by filters or surfaces.)

### Worked Example: New Furniture (illustrative data)

A house of **400 m³** has new furniture releasing formaldehyde at **8,000 µg per hour**.

| Case | ACH | $\\text{ACH} \\times V$ (m³/h) | $C$ (µg/m³) |
|---|---|---|---|
| Tightly sealed | 0.25 | 100 | $8{,}000 \\div 100 = 80$ |
| Ventilated | 1.0 | 400 | $8{,}000 \\div 400 = 20$ |
| Low-emission furniture, sealed (source cut to 2,000 µg/h) | 0.25 | 100 | $2{,}000 \\div 100 = 20$ |

Quadrupling the ventilation and cutting the source to a quarter give the **same** result. Cutting the source does it without the energy cost of heating or cooling extra outside air.`,
    },
    {
      id: 'apoz6-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

1) A 300 m³ house receives 150 m³ of outdoor air per hour. What is its ACH?

2) In that house, a gas stove releases a pollutant at 6,000 µg/h. Using $C = S \\div (\\text{ACH} \\times V)$, what is the steady concentration in µg/m³?

3) A kitchen with a traditional open fire averages 600 µg/m³ of PM2.5. A vented improved stove lowers it to 150 µg/m³. What is the percent reduction?`,
      exercise: {
        boxes: 3,
        correctAnswers: ['0.5', '40', '75'],
        hint1: 'Divide the airflow by the volume.',
        hint2: 'ACH × V = 0.5 × 300 = 150 m³/h.',
        hint3: '(600 − 150) ÷ 600 × 100.',
        explanation: '1) 150 ÷ 300 = 0.5 per hour. 2) 6,000 ÷ 150 = 40 µg/m³. 3) 450 ÷ 600 × 100 = 75 percent reduction.',
      },
    },
    {
      id: 'apoz6-sbs',
      type: 'text' as const,
      content: `## Sick Building Syndrome

After the energy crises of the 1970s, many office buildings were sealed tightly and fresh-air rates were cut to save heating and cooling energy. Complaints followed.

| Term | Meaning | Example |
|---|---|---|
| **Sick building syndrome** | Occupants report symptoms such as headache, eye, nose and throat irritation, fatigue and trouble concentrating that **ease after they leave** the building; no single cause is identified | An office where complaints cluster on one floor with poor air supply |
| **Building-related illness** | A specific, diagnosable illness traced to a source in the building | Legionnaires' disease spread from contaminated cooling towers or water systems |

Common contributors to sick building syndrome include **too little outdoor air**, VOCs from furnishings and office products, poorly maintained ventilation, and moisture and mold.`,
    },
    {
      id: 'apoz6-q-ventilation',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A family weatherizes its home, cutting the air change rate in half. If indoor sources stay the same, what happens to the steady indoor concentration of those pollutants?',
            options: ['It doubles', 'It halves', 'It stays the same', 'It quadruples'],
            correctAnswer: 0,
            explanation: 'Concentration equals the source rate divided by ACH times volume, so halving the air change rate doubles the concentration.',
          },
          {
            question: 'What best distinguishes sick building syndrome from building-related illness?',
            options: [
              'Symptoms ease outside the building, with no single cause identified',
              'It affects only one person, while the other affects whole buildings',
              'It is caused only by radon, while the other is caused only by mold',
              'It appears only in homes, while the other appears only in offices',
            ],
            correctAnswer: 0,
            explanation: 'Sick building syndrome describes symptoms linked to time in a building that ease after leaving, without a specific identified cause; building-related illness has a diagnosable cause such as Legionella bacteria.',
          },
        ],
      },
    },
    {
      id: 'apoz6-solutions',
      type: 'text' as const,
      content: `## The Order of Solutions

Indoor air professionals apply solutions in this order, because each step is cheaper or more effective than the next:

| Priority | Strategy | Examples |
|---|---|---|
| 1 | **Source control**: remove or reduce the pollutant where it starts | Low-VOC paint and furniture; vent furnaces and water heaters outside; never run generators indoors; fix leaks to stop mold; ban indoor smoking; seal foundation cracks |
| 2 | **Ventilation**: dilute and remove what remains | Kitchen and bathroom exhaust fans; open windows; mechanical ventilation; heat-recovery ventilators that warm incoming air with outgoing air to save energy |
| 3 | **Air cleaning**: filter what is left | HEPA filters remove particulates, smoke and allergens; they do **not** remove CO or radon gas |

Some pollutants need a **specific** fix:

- **Radon:** sub-slab depressurization, a pipe and fan that pull soil gas from beneath the foundation and vent it above the roof.
- **Carbon monoxide:** a working detector plus properly vented, maintained appliances.
- **Asbestos and lead paint:** leave intact or remove only with trained crews and containment.

> 🔑 **AP Connection:** For a "propose a solution" question, connect the fix to the pollutant: "Install a sub-slab depressurization fan, which vents radon from beneath the foundation before it can enter the basement" earns more than "improve ventilation."`,
    },
    {
      id: 'apoz6-cookstoves',
      type: 'text' as const,
      content: `## Cooking Smoke: The World's Largest Indoor Problem

According to the World Health Organization, about **2.1 billion** people cook mainly with polluting fuels such as **wood, charcoal, dung, crop waste, coal or kerosene**, often on open fires or simple stoves. The WHO estimates that household air pollution from these fuels causes about **3 million** premature deaths a year, from pneumonia, stroke, heart disease, lung disease and lung cancer.

| Who is most exposed | Why |
|---|---|
| Women | Do most of the cooking, for hours each day |
| Young children | Stay close to their mothers near the fire |
| Rural households in low-income countries | Biomass is free or cheap; clean fuels are expensive or unavailable |

| Solution | Effect | Trade-off |
|---|---|---|
| Chimney or vented stove | Sends smoke outdoors | Smoke still pollutes the neighborhood air |
| Improved, efficient biomass stove | Burns more completely, uses less fuel | Smoke is reduced but rarely to safe levels |
| Liquefied petroleum gas (LPG) or biogas | Far cleaner indoor air | Fuel cost; LPG is a fossil fuel |
| Electric cooking | No indoor combustion | Needs reliable electricity |

Cleaner cooking also cuts **deforestation** for fuelwood and the time women and children spend gathering fuel, linking indoor air to land use and social equity.`,
    },
    {
      id: 'apoz6-q-apply',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A homeowner installs a HEPA air purifier to deal with a basement radon reading of 10 pCi/L. Why will this do little to lower the reading?',
            options: [
              'HEPA filters only work on pollutants emitted by combustion',
              'Radon is a gas, and a particle filter does not stop gases',
              'Radon reacts with the filter fibers to form new radon gas',
              'Air purifiers are banned for use in basements by the EPA',
            ],
            correctAnswer: 1,
            explanation: 'HEPA filters trap particles; radon is a gas that passes through them. The fix is source control by sub-slab depressurization, which vents radon from beneath the foundation.',
          },
          {
            question: 'An office reports headaches that fade on weekends after the building manager cut outdoor air to save energy. Which first step is most appropriate?',
            options: [
              'Restore outdoor air rates and look for VOC sources',
              'Add HEPA filters and keep outdoor air supply low',
              'Test for radon on the top floor before anything else',
              'Seal the windows more tightly to keep out pollen',
            ],
            correctAnswer: 0,
            explanation: 'Symptoms that ease outside the building after ventilation was cut point to sick building syndrome, so restoring outdoor air and finding indoor VOC sources addresses the likely causes. Radon is a basement issue and tighter sealing makes dilution worse.',
          },
          {
            question: 'Which program would most reduce deaths from household air pollution in a rural region where families cook over open fires indoors?',
            options: [
              'Distributing radon test kits to every household in the region',
              'Requiring CO detectors in new urban apartment buildings',
              'Subsidizing LPG stoves or electric hot plates',
              'Replacing old carpets with tile floors in village homes',
            ],
            correctAnswer: 2,
            explanation: 'The main exposure is particulate smoke and carbon monoxide from burning biomass; switching to cleaner fuels removes the source. The other programs target pollutants or places that are not the main problem.',
          },
        ],
      },
    },
    {
      id: 'apoz6-summary',
      type: 'text' as const,
      content: `## Part 6 Summary

| Idea | Key fact |
|---|---|
| ACH | Airflow ÷ volume; tight houses can fall below 0.3 per hour |
| Steady state | $C = S \\div (\\text{ACH} \\times V)$: halving ventilation doubles concentration |
| Sick building syndrome | Symptoms ease after leaving; linked to low outdoor air, VOCs, poor maintenance |
| Building-related illness | Diagnosable illness with an identified source (for example Legionnaires' disease) |
| Order of solutions | Source control → ventilation → air cleaning |
| Specific fixes | Radon: sub-slab depressurization. CO: detectors and vented appliances. HEPA does not remove gases |
| Household cooking smoke | About 2.1 billion people use polluting fuels; about 3 million deaths a year (WHO); women and children most exposed |

**Next:** Part 7 practices exam-style questions on both halves of the topic and reviews the whole lesson.`,
    },
  ],
},

// ───────────────────────── PART 7 ─────────────────────────
{
  topicSlug: 'apes-ozone-indoor-air',
  sections: [
    {
      id: 'apoz7-intro',
      type: 'text' as const,
      content: `# 🛡️ Ozone Depletion & Indoor Air Quality

**Part 7 of 7 — AP Exam Practice and Synthesis**

---

| Section |
|---------|
| 📋 FRQ 1 Practice: Radon in a School District |
| 📋 FRQ 3 Practice: Retiring an Old Chiller |
| The Topic on One Page |
| Misconceptions to Avoid |
| Final Check |

> 🔑 **Key Concept:** The two halves of this topic share one idea: **where** a substance is and **how long it stays** decide its harm. Chlorine compounds harm the stratosphere because they last for decades; indoor pollutants harm people because tight buildings keep them in. This part practices exam questions on both and ties the topic together.`,
    },
    {
      id: 'apoz7-frq1',
      type: 'text' as const,
      content: `## 📋 FRQ 1 Practice: Radon in a School District

A school district on granite bedrock wants to know whether radon is a problem in its 12 schools, and where in each building it is worst.

**(a)** Write a testable hypothesis about radon and floor level.
**(b)** Identify the independent and dependent variables.
**(c)** Describe a method, including two variables to hold constant.
**(d)** Explain why the tests should be repeated in winter and in summer.
**(e)** Propose one mitigation for a classroom that tests above 4 pCi/L, and explain how it works.

### Model Answers

**(a)** Radon concentration will be higher in ground-floor and basement rooms than in upper-floor rooms.

**(b)** Independent variable: floor level of the room. Dependent variable: radon concentration (pCi/L).

**(c)** In each school, place identical radon detectors in one basement or ground-floor classroom and one upper-floor classroom, about 1 m above the floor and away from doors, windows and vents. Run each test for the same period (for example, 4 days) under normal heating or cooling, then send the detectors to the same certified lab. Hold constant: the **detector type**, the **test duration** and the **placement height**.

**(d)** Radon entry changes with season: in winter, heated buildings draw more soil gas in through the foundation (the stack effect) and windows stay closed, so concentrations are often higher. Testing in both seasons shows the range of exposure.

**(e)** Install **sub-slab depressurization**: a fan and pipe that pull radon from beneath the foundation and vent it above the roof, so less enters the classroom. Sealing foundation cracks helps but is rarely enough alone.`,
    },
    {
      id: 'apoz7-frq3',
      type: 'text' as const,
      content: `## 📋 FRQ 3 Practice: Retiring an Old Chiller

A university's old building chiller holds **500 kg** of CFC-12 (ODP 1.0, GWP about 10,900). About **10 percent** of the charge leaks each year. The university will replace it with a chiller holding **400 kg** of an HFO refrigerant (ODP 0, GWP about 4) that leaks at the same rate.

**(a)** Calculate the mass of CFC-12 that leaks per year.
**(b)** Calculate the ODP-weighted amount leaked per year.
**(c)** Calculate the $CO_{2}$-equivalent of the CFC-12 leaked per year, in tonnes.
**(d)** Calculate the $CO_{2}$-equivalent of the HFO leaked per year, in kilograms.
**(e)** Explain why the old refrigerant must be recovered and destroyed rather than vented when the chiller is removed.

### Model Answers

**(a)** $500\\ \\text{kg} \\times 0.10 = 50\\ \\text{kg per year}$

**(b)** $50\\ \\text{kg} \\times 1.0 = 50\\ \\text{kg ODP-weighted}$

**(c)** $50\\ \\text{kg} \\times 10{,}900 = 545{,}000\\ \\text{kg} = 545\\ \\text{t } CO_{2}\\text{e}$

**(d)** $400 \\times 0.10 = 40\\ \\text{kg leaked}; \\ 40 \\times 4 = 160\\ \\text{kg } CO_{2}\\text{e}$

**(e)** The remaining 500 kg is a **bank** of CFC-12. Venting it would release chlorine that destroys stratospheric ozone for about a century and a greenhouse gas thousands of times stronger than $CO_{2}$; recovery and destruction prevent both.`,
    },
    {
      id: 'apoz7-input',
      type: 'input-boxes' as const,
      content: `**Calculate It** 🧮

Enter numbers only. (Illustrative data.)

A store's freezer system holds 200 kg of HCFC-22 (ODP 0.055, GWP about 1,810) and leaks 15 percent of its charge each year.

1) How many kilograms leak each year?

2) What is the ODP-weighted amount leaked each year, in kg?

3) What is the $CO_{2}$-equivalent of the annual leak, in tonnes? (1 t = 1,000 kg)`,
      exercise: {
        boxes: 3,
        correctAnswers: ['30', '1.65', '54.3'],
        hint1: '200 × 0.15.',
        hint2: 'Multiply the leaked mass by the ODP of 0.055.',
        hint3: 'Multiply the leaked mass by 1,810, then divide by 1,000.',
        explanation: '1) 200 × 0.15 = 30 kg. 2) 30 × 0.055 = 1.65 kg ODP-weighted. 3) 30 × 1,810 = 54,300 kg = 54.3 t CO₂e.',
      },
    },
    {
      id: 'apoz7-onepage',
      type: 'text' as const,
      content: `## The Topic on One Page

| Part | Big idea |
|---|---|
| 1 | About 90% of ozone is in the stratosphere; surface UV depends on sun angle, altitude, snow, clouds and the ozone column |
| 2 | Molina and Rowland predicted the damage (1974); the Antarctic hole surprised everyone (1985); aircraft data showed ClO up where ozone fell (1987) |
| 3 | Chlorine and bromine carriers differ in ODP and lifetime; replacements traded ozone harm for climate harm |
| 4 | The Montreal Protocol worked through funding, trade rules, scientific review and available substitutes; recovery by about 2040–2066 |
| 5 | Indoor pollutants are natural, human-made or combustion-derived; radon, CO, asbestos, formaldehyde and lead each harm in a specific way |
| 6 | Indoor concentration = source ÷ ventilation; fix sources first; cooking smoke is the world's largest indoor problem |

## Misconceptions to Avoid

| Misconception | Correction |
|---|---|
| "The ozone hole causes global warming." | The hole lets in more **UV**; warming comes from greenhouse gases trapping **infrared**. CFCs happen to do both |
| "Smog ozone can patch the ozone layer." | Ground-level ozone breaks down long before reaching the stratosphere |
| "The ozone hole is a place with no ozone." | It is a region of severe thinning, below about 220 Dobson units |
| "CFCs are gone, so the problem is solved." | CFCs persist for decades and banks in old equipment still leak; recovery is projected for 2040–2066 |
| "HFCs are environmentally safe." | They spare ozone but many are potent greenhouse gases |
| "An air purifier fixes radon." | Radon is a gas; it needs sub-slab depressurization |
| "Indoor air is cleaner than outdoor air." | Many indoor pollutants are often several times higher indoors |
| "Carbon monoxide smells like smoke." | CO is odorless and colorless; only a detector warns you |`,
    },
    {
      id: 'apoz7-dd',
      type: 'dropdown-select' as const,
      content: `**Match the Fix to the Problem** 🔽`,
      exercise: {
        dropdowns: [
          { label: 'Radon at 9 pCi/L in a basement:', options: ['Sub-slab depressurization', 'HEPA air purifier', 'Low-VOC paint', 'Kigali Amendment'] },
          { label: 'Headaches in a newly furnished, sealed office:', options: ['More outdoor air and fewer VOC sources', 'Sub-slab depressurization', 'A taller chimney outside', 'Montreal Protocol'] },
          { label: 'Smoke from an open cooking fire indoors:', options: ['Switching to LPG or electric cooking', 'A radon test kit', 'Sealing the windows', 'A HEPA vacuum cleaner'] },
          { label: 'HFC leaks from supermarket freezers:', options: ['Kigali Amendment', 'Vienna Convention', 'Clean Air Act of 1963', 'Sub-slab depressurization'] },
        ],
        correctAnswers: ['Sub-slab depressurization', 'More outdoor air and fewer VOC sources', 'Switching to LPG or electric cooking', 'Kigali Amendment'],
        hint1: 'Match a gas from the ground to a fix that works below the foundation.',
        hint2: 'Sick building symptoms point to ventilation and VOC sources.',
        hint3: 'HFCs were added to the Montreal Protocol in 2016.',
        explanation: 'Radon is vented from beneath the slab; sick building symptoms call for more outdoor air and fewer VOC sources; cooking smoke is removed by cleaner fuels; the Kigali Amendment phases down HFCs.',
      },
    },
    {
      id: 'apoz7-q-final',
      type: 'multiple-choice' as const,
      content: `**Final Check** ✅`,
      exercise: {
        questions: [
          {
            question: 'Which property of CFCs made them both useful to industry and harmful to the ozone layer?',
            options: [
              'They react rapidly with water vapor near the ground',
              'They are stable and survive long enough to rise high',
              'Their toxicity damages living tissue on contact',
              'They absorb ultraviolet light in the troposphere',
            ],
            correctAnswer: 1,
            explanation: 'CFCs are stable, nontoxic and nonflammable, which made them ideal refrigerants and propellants; that same stability lets them survive for decades and reach the stratosphere, where UV frees their chlorine.',
          },
          {
            question: 'A town tightly weatherizes all its homes to save energy. Which unintended effect is most likely?',
            options: [
              'Lower radon because sealed homes keep soil gas out entirely',
              'Higher indoor levels of pollutants released inside homes',
              'Thinning of the ozone layer above the town each spring',
              'Less carbon monoxide because furnaces burn more fuel',
            ],
            correctAnswer: 1,
            explanation: 'Lower air change rates mean pollutants released indoors, such as VOCs, formaldehyde and combustion gases, are diluted less and build up. Sealing does not reliably keep out radon, and weatherizing has no effect on the ozone layer.',
          },
          {
            question: 'Which pairing of a pollutant with its main health effect is correct?',
            options: [
              'Radon: lung cancer from radioactive decay products',
              'Carbon monoxide: skin cancer from extra UV exposure',
              'Asbestos: reduced oxygen delivery in the blood',
              'Formaldehyde: cataracts from stratospheric loss',
            ],
            correctAnswer: 0,
            explanation: 'Radon\'s decay products lodge in the lungs and cause lung cancer. Carbon monoxide reduces oxygen delivery, asbestos causes asbestosis and mesothelioma, and UV-B from ozone loss causes skin cancer and cataracts.',
          },
          {
            question: 'Why is the Montreal Protocol often described as having helped the climate as well as the ozone layer?',
            options: [
              'Ozone-depleting gases it cut were also potent greenhouse gases',
              'A thicker ozone layer reflects more sunlight back to space',
              'It set binding carbon dioxide limits for every member nation',
              'It required all countries to replace coal with natural gas',
            ],
            correctAnswer: 0,
            explanation: 'CFCs and HCFCs trap infrared strongly, so phasing them out avoided substantial warming; the Kigali Amendment now extends this to HFCs. The treaty does not limit carbon dioxide or fuels.',
          },
        ],
      },
    },
  ],
},
]
