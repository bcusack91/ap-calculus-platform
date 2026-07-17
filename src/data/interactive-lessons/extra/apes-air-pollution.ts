import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Air Pollution & Smog (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-air-pollution'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot:
 * teach (text) → interactive check (multiple-choice / dropdown-select / input-boxes) →
 * worked applications → Exit Quiz. Concept-forward (non-math topic), so checks favor
 * multiple-choice + dropdown, with a few quantitative input-boxes (AQI, % reductions,
 * residence-time / dilution arithmetic). LaTeX uses DOUBLED backslashes (template-literal
 * strings); chemical formulas use Unicode subscripts to match the existing APES lessons.
 */
export const parts: LessonData[] = [
  // ───────────────────────── PART 1 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap1-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 1 of 7 — Pollutants, Sources & the Primary/Secondary Distinction**

---

### Topics in This Part

| Section |
|---------|
| What Counts as Air Pollution |
| The Six EPA Criteria Pollutants |
| Primary vs. Secondary Pollutants |
| Point vs. Nonpoint Sources |

> 🔑 **Key Concept:** Air pollution is any gas or particle added to the atmosphere in high enough concentration to harm health, ecosystems, or materials. The exam rewards you for knowing **where each pollutant comes from** and **what it does** — not just its name.`,
      },
      {
        id: 'apeap1-criteria',
        type: 'text' as const,
        content: `## The Six Criteria Pollutants

Under the U.S. **Clean Air Act**, the EPA sets **National Ambient Air Quality Standards (NAAQS)** for six "criteria" pollutants. Memorize this table — it is the backbone of the entire unit.

| Pollutant | Main Source | Primary Effect |
|-----------|-------------|----------------|
| **CO** (carbon monoxide) | Incomplete combustion (cars, furnaces) | Binds hemoglobin → starves tissues of $O_{2}$ |
| **$SO_{2}$** (sulfur dioxide) | Burning **coal**, smelting, volcanoes | Acid deposition; respiratory irritation |
| **$NO_{x}$** (nitrogen oxides: NO, $NO_{2}$) | High-temperature combustion (engines, power plants) | Smog + acid deposition |
| **PM** (particulate matter) | Combustion, dust, construction, fires | Lung damage; reduced visibility (haze) |
| **$O_{3}$** (ground-level ozone) | **Secondary** — formed from $NO_{x}$ + VOCs + sunlight | Respiratory damage; harms crops |
| **Pb** (lead) | Formerly leaded gasoline; smelters, batteries | Neurotoxin; developmental harm in children |

> 💡 **Why these six?** They are common, well-studied, and regulated nationwide. Pollutants like $CO_{2}$ (a greenhouse gas) and VOCs are important but are **not** criteria pollutants — a classic exam trap.`,
      },
      {
        id: 'apeap1-q-criteria',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of the following is NOT one of the six EPA criteria pollutants?',
              options: ['Carbon dioxide $(CO_{2})$', 'Sulfur dioxide $(SO_{2})$', 'Particulate matter (PM)', 'Lead (Pb)'],
              correctAnswer: 0,
              explanation: '$CO_{2}$ is a greenhouse gas regulated for climate, but it is NOT one of the six NAAQS criteria pollutants. The six are CO, $SO_{2}$, $NO_{x}$, PM, ground-level $O_{3}$, and Pb.',
            },
            {
              question: 'A student feels dizzy after running a gasoline generator in a closed garage. The most likely pollutant responsible is:',
              options: ['Carbon monoxide (CO)', 'Ground-level ozone $(O_{3})$', 'Lead (Pb)', 'Sulfur dioxide $(SO_{2})$'],
              correctAnswer: 0,
              explanation: 'Incomplete combustion in an enclosed space produces CO, which binds hemoglobin ~200× more strongly than $O_{2}$, reducing oxygen delivery and causing dizziness, headache, and death.',
            },
          ],
        },
      },
      {
        id: 'apeap1-primary-secondary',
        type: 'text' as const,
        content: `## Primary vs. Secondary Pollutants

| Type | Definition | Examples |
|------|------------|----------|
| **Primary** | Emitted **directly** from a source | CO, $SO_{2}$, NO, most PM, VOCs, Pb |
| **Secondary** | **Formed in the atmosphere** by chemical reactions | Ground-level $O_{3}$, sulfuric acid $(H_{2}SO_{4})$, nitric acid $(HNO_{3})$, some PM |

The key word is **formed**. A secondary pollutant did not come out of any tailpipe — it was *built* in the air from primary precursors plus energy (sunlight) or other reactants.

$$\\text{NO}_x + \\text{VOCs} + \\text{sunlight} \\;\\longrightarrow\\; \\text{O}_3 \\text{ (ground-level ozone)}$$

> ⚠️ **The single most-tested idea in this unit:** ground-level **ozone is a secondary pollutant**. It is never emitted directly. If a question says "emitted from car exhaust," the direct emissions are $NO_{x}$ and VOCs — the ozone forms *afterward*.`,
      },
      {
        id: 'apeap1-dd-classify',
        type: 'dropdown-select' as const,
        content: `**Classify Each Pollutant** 🔽

Decide whether each is a **primary** pollutant (emitted directly) or a **secondary** pollutant (formed in the atmosphere).`,
        exercise: {
          dropdowns: [
            { label: 'Sulfur dioxide $(SO_{2})$ from a coal plant:', options: ['Primary', 'Secondary'] },
            { label: 'Ground-level ozone $(O_{3})$:', options: ['Primary', 'Secondary'] },
            { label: 'Nitric oxide (NO) from an engine:', options: ['Primary', 'Secondary'] },
            { label: 'Sulfuric acid $(H_{2}SO_{4})$ in acid rain:', options: ['Primary', 'Secondary'] },
          ],
          correctAnswers: ['Primary', 'Secondary', 'Primary', 'Secondary'],
          hint1: 'If it comes straight out of a smokestack or tailpipe, it is primary.',
          hint2: 'Ozone and acids are built in the air from precursors — they are secondary.',
          hint3: '$SO_{2}$ and NO are emitted directly (primary); $O_{3}$ and $H_{2}SO_{4}$ are reaction products (secondary).',
          explanation: '$SO_{2}$ and NO are emitted directly → primary. $O_{3}$ forms from $NO_{x}$ + VOCs + sunlight, and $H_{2}SO_{4}$ forms when $SO_{2}$ oxidizes and dissolves in water → both secondary.',
        },
      },
      {
        id: 'apeap1-sources',
        type: 'text' as const,
        content: `## Point vs. Nonpoint Sources

| Source Type | Definition | Example |
|-------------|------------|---------|
| **Point source** | Single, identifiable origin | A coal power plant smokestack |
| **Nonpoint source** | Diffuse, many origins | Millions of cars across a city |

This distinction matters for **regulation**: a single smokestack is easy to monitor and require scrubbers on. Nonpoint pollution (vehicle exhaust spread over a whole metro area) is harder to control and usually addressed with fleet-wide rules like catalytic converters and fuel standards.

> 🔑 **Setting up the arc:** You now know *what* the pollutants are and *where* they come from. Part 2 dives into the chemistry of the most exam-heavy secondary pollutant of all — **photochemical smog**.`,
      },
      {
        id: 'apeap1-q-sources',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which best describes a NONPOINT source of air pollution?',
              options: [
                'Exhaust from millions of cars spread across a metro area',
                'A single coal-plant smokestack',
                'One industrial chimney at a steel mill',
                'A specific oil refinery flare',
              ],
              correctAnswer: 0,
              explanation: 'Nonpoint sources are diffuse, with many scattered origins (e.g., a whole fleet of vehicles). A single smokestack, chimney, or flare is a point source.',
            },
            {
              question: 'Why is nonpoint-source air pollution generally harder to regulate than point-source pollution?',
              options: [
                'It comes from many scattered emitters, so no single device can be required at one location',
                'It is always more toxic than point-source pollution',
                'It is invisible while point-source pollution is always visible',
                'It is unaffected by laws or technology',
              ],
              correctAnswer: 0,
              explanation: 'A point source can be fitted with a scrubber and monitored at one spot. Nonpoint pollution is spread across many emitters, so it is tackled with fleet-wide rules (catalytic converters, fuel standards) rather than one device.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 2 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap2-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 2 of 7 — Photochemical Smog**

---

> 🔑 **The Idea:** "Photo" = light. **Photochemical smog** is the brown, hazy air over sunny cities like Los Angeles, Beijing, and Mexico City. It is built by **sunlight** acting on car-exhaust chemicals, and it peaks on **hot, sunny afternoons**.`,
      },
      {
        id: 'apeap2-recipe',
        type: 'text' as const,
        content: `## The Recipe for Photochemical Smog

Three ingredients, plus heat and light:

$$\\underbrace{\\text{NO}_x}_{\\text{engines}} \\;+\\; \\underbrace{\\text{VOCs}}_{\\text{fuel, solvents}} \\;+\\; \\underbrace{\\text{sunlight (UV)}}_{\\text{energy}} \\;\\longrightarrow\\; \\text{O}_3 \\;+\\; \\text{PANs} \\;+\\; \\text{aldehydes}$$

A simplified look at the core reactions:

1. Combustion makes nitric oxide: $\\text{N}_2 + \\text{O}_2 \\rightarrow 2\\,\\text{NO}$
2. NO oxidizes to brown nitrogen dioxide: $2\\,\\text{NO} + \\text{O}_2 \\rightarrow 2\\,\\text{NO}_2$
3. Sunlight splits $NO_{2}$, freeing an oxygen atom: $\\text{NO}_2 + \\text{UV} \\rightarrow \\text{NO} + \\text{O}$
4. That free atom makes ozone: $\\text{O} + \\text{O}_2 \\rightarrow \\text{O}_3$

The brown color of smog comes mainly from **$NO_{2}$**. The respiratory damage comes mainly from **$O_{3}$** and **PANs** (peroxyacetyl nitrates).

> 💡 **Memory hook:** *Sun + cars = ozone.* No sunlight, no photochemical smog — which is why it builds through the morning rush hour and peaks in the **mid-afternoon**, not at night.`,
      },
      {
        id: 'apeap2-q-conditions',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Photochemical smog (and its ozone) is generally WORST under which conditions?',
              options: [
                'Hot, sunny afternoons with heavy traffic',
                'Cold, dark winter nights',
                'Cool, rainy mornings',
                'Calm nights with no vehicle traffic',
              ],
              correctAnswer: 0,
              explanation: 'Photochemical smog needs sunlight (UV) to drive the reactions and traffic to supply $NO_{x}$ and VOCs. Heat speeds the chemistry. So it peaks on hot, sunny, high-traffic afternoons.',
            },
            {
              question: 'The two primary pollutants that act as PRECURSORS to photochemical smog are:',
              options: ['$NO_{x}$ and VOCs', '$CO_{2}$ and $CH_{4}$', '$SO_{2}$ and Pb', '$O_{3}$ and PANs'],
              correctAnswer: 0,
              explanation: '$NO_{x}$ and VOCs are the directly-emitted precursors. Sunlight then converts them into the secondary pollutants $O_{3}$ and PANs (which are products, not precursors).',
            },
          ],
        },
      },
      {
        id: 'apeap2-timeline',
        type: 'text' as const,
        content: `## A Day in the Life of Smog

Tracking the chemistry over a single day makes the cause-and-effect obvious:

| Time | What's happening |
|------|------------------|
| **Morning rush** | Traffic floods the air with primary $NO_{x}$ and VOCs |
| **Late morning** | Rising sun supplies UV; reactions begin |
| **Mid-afternoon** | Sunlight + heat peak → **ozone peaks** |
| **Evening / night** | No sun → ozone production stops and levels fall |

> 💡 Because the sun is the switch, ozone is a **daytime** pollutant that lags the morning rush by a few hours — the precursors are emitted early, but the product builds as the sun climbs.`,
      },
      {
        id: 'apeap2-dd-sequence',
        type: 'dropdown-select' as const,
        content: `**Order the Smog Chemistry** 🔽

Walk through how ground-level ozone forms on a sunny afternoon.`,
        exercise: {
          dropdowns: [
            { label: 'Engines and power plants first emit:', options: ['$NO_{x}$ and VOCs', '$O_{3}$ directly', 'Sulfuric acid', 'Lead'] },
            { label: 'The energy source that drives the reactions is:', options: ['Sunlight (UV)', 'Geothermal heat', 'Lightning only', 'Moonlight'] },
            { label: 'The harmful secondary pollutant produced is:', options: ['Ground-level ozone $(O_{3})$', 'Carbon monoxide (CO)', 'Radon', 'Carbon dioxide $(CO_{2})$'] },
            { label: 'Concentrations therefore peak in the:', options: ['Mid-afternoon', 'Middle of the night', 'Pre-dawn hours', 'Winter at midnight'] },
          ],
          correctAnswers: ['$NO_{x}$ and VOCs', 'Sunlight (UV)', 'Ground-level ozone $(O_{3})$', 'Mid-afternoon'],
          hint1: 'Start with what comes directly out of tailpipes.',
          hint2: '"Photo" means light — the sun supplies the energy.',
          hint3: 'Ozone is the product, and it tracks the sun, peaking in the afternoon.',
          explanation: 'Primary $NO_{x}$ + VOCs absorb UV sunlight and react to form secondary $O_{3}$. Because the sun is required, ozone climbs through the day and peaks mid-afternoon.',
        },
      },
      {
        id: 'apeap2-ozone-paradox',
        type: 'text' as const,
        content: `## The Ozone Paradox: "Good Up High, Bad Nearby"

The **same molecule $(O_{3})$** is helpful or harmful depending on **altitude**:

| Location | Role | Verdict |
|----------|------|---------|
| **Stratosphere** (~15–35 km up) | Absorbs incoming UV radiation, shielding life | ✅ Good ozone |
| **Troposphere** (ground level) | Smog component; damages lungs and crops | ❌ Bad ozone |

> ⚠️ **Exam trap:** Do not confuse the two. The hole in the *stratospheric* ozone layer (from CFCs) is a **different problem** from *ground-level* ozone (from smog). Fixing one does nothing for the other.`,
      },
      {
        id: 'apeap2-q-paradox',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which statement correctly describes the "ozone paradox"?',
              options: [
                'Stratospheric ozone protects against UV, while ground-level ozone is a harmful pollutant',
                'All ozone is beneficial because it blocks UV radiation',
                'Ground-level ozone repairs the stratospheric ozone hole',
                'Ozone is only found in the stratosphere',
              ],
              correctAnswer: 0,
              explanation: 'Same molecule, opposite roles by altitude: stratospheric $O_{3}$ shields life from UV (good), while tropospheric/ground-level $O_{3}$ is a smog pollutant that harms lungs and crops (bad).',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 3 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap3-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 3 of 7 — Industrial Smog & Acid Deposition**

---

> 🔑 **The Idea:** Before cars dominated, the deadly smogs were **industrial** (sulfurous) smog from burning **coal**. This is the gray, sulfur-and-soot smog of old London — and it connects directly to **acid rain**.`,
      },
      {
        id: 'apeap3-industrial',
        type: 'text' as const,
        content: `## Industrial (Sulfurous) Smog

| Feature | Photochemical Smog | Industrial Smog |
|---------|--------------------|-----------------|
| Color | Brown | Gray |
| Main culprits | $NO_{x}$, VOCs, $O_{3}$ | **$SO_{2}$**, particulates (soot) |
| Energy source | Sunlight | Just combustion (no sun needed) |
| Worst conditions | Hot, sunny afternoons | **Cold, damp** mornings; coal burning |
| Classic example | Los Angeles | London "Great Smog" of 1952 |

The **1952 Great Smog of London** killed thousands when coal smoke + fog (a cold, stagnant air mass) trapped $SO_{2}$ and soot for days.

> 💡 **Contrast hook:** Photochemical smog **loves the sun**; industrial smog **loves the cold and coal**. They are opposites in almost every way except that both harm the lungs.`,
      },
      {
        id: 'apeap3-q-compare',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Industrial (sulfurous) smog differs from photochemical smog primarily because it:',
              options: [
                'Is dominated by $SO_{2}$ and soot from coal burning, and does not require sunlight',
                'Requires intense UV sunlight to form',
                'Is made of ozone and PANs',
                'Only forms over rural farmland',
              ],
              correctAnswer: 0,
              explanation: 'Industrial smog is the gray, sulfur-rich smog of coal combustion — dominated by $SO_{2}$ and particulates and worst in cold, damp, stagnant air. It needs no sunlight, unlike photochemical smog.',
            },
            {
              question: 'The primary fossil fuel most associated with sulfur dioxide $(SO_{2})$ emissions and industrial smog is:',
              options: ['Coal', 'Natural gas', 'Solar-charged batteries', 'Hydrogen'],
              correctAnswer: 0,
              explanation: 'Coal contains sulfur impurities, so burning it releases large amounts of $SO_{2}$. Natural gas burns much cleaner and emits little sulfur.',
            },
          ],
        },
      },
      {
        id: 'apeap3-acid',
        type: 'text' as const,
        content: `## From $SO_{2}$ and $NO_{x}$ to Acid Deposition

The same $SO_{2}$ and $NO_{x}$ that cause smog also become **acid deposition** ("acid rain"). In the atmosphere they oxidize and dissolve in water to form strong acids:

$$\\text{SO}_2 \\;\\longrightarrow\\; \\text{H}_2\\text{SO}_4 \\quad (\\text{sulfuric acid})$$
$$\\text{NO}_x \\;\\longrightarrow\\; \\text{HNO}_3 \\quad (\\text{nitric acid})$$

Normal rain is slightly acidic (about **pH 5.6**) because of dissolved $CO_{2}$. **Acid rain** is rain with a pH below 5.6 — often **4 to 4.5**, and sometimes lower.

| Effect of Acid Deposition | What Happens |
|---------------------------|--------------|
| Lakes & streams acidify | Fish eggs and amphibians die below ~pH 5 |
| Soil nutrients leached | Calcium/magnesium wash out; aluminum mobilized (toxic to roots) |
| Forests damaged | Especially high-elevation conifers |
| Buildings & statues | Marble/limestone $(CaCO_{3})$ dissolves |

> ⚠️ **pH is logarithmic.** A drop from pH 5 to pH 4 is a **10×** increase in acidity, not a 20% change. From pH 6 to pH 4 is **100×**.`,
      },
      {
        id: 'apeap3-input-ph',
        type: 'input-boxes' as const,
        content: `**Acidity Is Logarithmic** 🧮

The pH scale is base-10: each whole-number drop in pH means **10× more** hydrogen-ion $(H^{+})$ concentration.

**1)** A lake's rainwater goes from pH 6 to pH 4. Acidity increased by a factor of how much? (enter the number)
**2)** Acid rain at pH 3 is how many times more acidic than normal rainwater at pH 6? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['100', '1000'],
          hint1: 'Each 1-unit drop in pH multiplies acidity by 10.',
          hint2: 'pH 6 → pH 4 is a drop of 2 units, so $10^2$.',
          hint3: 'pH 6 → pH 3 is a drop of 3 units, so $10^3 = 1000$.',
          explanation: '1) A 2-unit drop = $10^2 = 100\\times$. 2) A 3-unit drop = $10^3 = 1000\\times$. The log scale is why small pH changes are ecologically huge.',
        },
      },
      {
        id: 'apeap3-downwind',
        type: 'text' as const,
        content: `## Acid Rain Travels Downwind

Because $SO_{2}$ and $NO_{x}$ ride the wind while they slowly convert to acids, the damage often lands **far from the source**. Tall smokestacks built to improve *local* air quality actually push emissions higher into the wind stream, exporting acid deposition across state and national borders.

| Source region | Downwind victim |
|---------------|------------------|
| U.S. Midwest (coal plants) | Northeastern U.S. & eastern Canada forests/lakes |
| Industrial Europe | Scandinavian lakes |

> ⚠️ This makes acid deposition a **transboundary** problem: the polluter and the harmed ecosystem are often in different jurisdictions, which is why it required regional and international agreements to address.`,
      },
      {
        id: 'apeap3-dd-acid',
        type: 'dropdown-select' as const,
        content: `**Match the Chemistry** 🔽`,
        exercise: {
          dropdowns: [
            { label: '$SO_{2}$ in the atmosphere forms:', options: ['Sulfuric acid $(H_{2}SO_{4})$', 'Nitric acid $(HNO_{3})$', 'Carbonic acid only', 'Ozone'] },
            { label: '$NO_{x}$ in the atmosphere forms:', options: ['Nitric acid $(HNO_{3})$', 'Sulfuric acid $(H_{2}SO_{4})$', 'Methane', 'Lead oxide'] },
            { label: 'The approximate pH of "normal," unpolluted rain is:', options: ['5.6', '7.0', '2.0', '9.0'] },
          ],
          correctAnswers: ['Sulfuric acid $(H_{2}SO_{4})$', 'Nitric acid $(HNO_{3})$', '5.6'],
          hint1: 'Sulfur (S) makes a sulfur-based acid.',
          hint2: 'Nitrogen (N) makes a nitrogen-based acid.',
          hint3: 'Normal rain is slightly acidic (~5.6) because of dissolved $CO_{2}$, not neutral 7.0.',
          explanation: '$SO_{2}$ → $H_{2}SO_{4}$ and $NO_{x}$ → $HNO_{3}$. Even clean rain is mildly acidic (~pH 5.6) from dissolved atmospheric $CO_{2}$ forming carbonic acid; "acid rain" is below 5.6.',
        },
      },
    ],
  },

  // ───────────────────────── PART 4 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap4-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 4 of 7 — Thermal Inversions & the Role of Weather**

---

> 🔑 **The Idea:** Pollution is about **dilution**. Normally, warm air rises and carries pollutants up and away. A **thermal inversion** flips this, trapping pollutants near the ground and turning a normal day into a deadly smog event.`,
      },
      {
        id: 'apeap4-normal',
        type: 'text' as const,
        content: `## Normal Conditions vs. Inversion

**Normal atmosphere:** the air is **warmest at the ground** and cools with altitude. Warm surface air is buoyant, so it **rises** (convection), carrying pollutants upward where they disperse.

**Thermal inversion:** a layer of **warm air sits on top of cooler air** near the ground. Cool air is denser and **cannot rise** through the warm "lid." Pollutants are trapped underneath and accumulate.

$$\\text{Normal: warm below} \\Rightarrow \\text{air rises} \\Rightarrow \\text{pollutants disperse}$$
$$\\text{Inversion: warm above} \\Rightarrow \\text{cool air trapped} \\Rightarrow \\text{pollutants build up}$$

| Factor that WORSENS pollution | Why |
|-------------------------------|-----|
| **Thermal inversion** | Warm-air lid traps pollutants near the ground |
| **Valley / basin topography** | Mountains block horizontal winds (Los Angeles, Mexico City) |
| **Stagnant air (no wind)** | Nothing to blow pollutants away |
| **Cold, calm mornings** | Common trigger for inversions |

> 💡 **Geography matters:** Cities in **basins ringed by mountains** (LA, Mexico City, Beijing) suffer the worst smog because both the inversion *and* the terrain trap the air.`,
      },
      {
        id: 'apeap4-q-inversion',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'During a thermal inversion, air pollution near the ground gets WORSE because:',
              options: [
                'A layer of warm air sits above cooler surface air, trapping pollutants near the ground',
                'Strong winds blow pollutants into the city',
                'The warm surface air rises faster than normal',
                'Rain washes pollutants down to street level',
              ],
              correctAnswer: 0,
              explanation: 'In an inversion, warm air overlies cool surface air. Because the cool air is denser and cannot rise through the warm lid, pollutants are trapped and accumulate at ground level.',
            },
            {
              question: 'Which city geography is MOST likely to intensify a smog event?',
              options: [
                'A basin surrounded by mountains',
                'A flat, windy coastal plain',
                'An open prairie with constant breezes',
                'A high, exposed plateau',
              ],
              correctAnswer: 0,
              explanation: 'Mountain-ringed basins (e.g., Los Angeles, Mexico City) block horizontal winds, so when an inversion forms there is nowhere for the trapped air to go.',
            },
          ],
        },
      },
      {
        id: 'apeap4-donora',
        type: 'text' as const,
        content: `## When Inversions Turn Deadly

Inversions have caused some of history's worst air-pollution disasters:

| Event | What happened |
|-------|----------------|
| **Donora, PA (1948)** | A valley inversion trapped zinc-smelter fumes; ~20 died, thousands sickened |
| **London (1952)** | A cold, stagnant inversion held coal smoke for days; thousands died |

In each case the **emissions were normal** — it was the **trapped, undiluted air** that turned routine pollution lethal. This is why meteorologists issue air-quality alerts when an inversion is forecast.`,
      },
      {
        id: 'apeap4-dd-inversion',
        type: 'dropdown-select' as const,
        content: `**Build the Inversion** 🔽

Describe what happens during a pollution-trapping thermal inversion.`,
        exercise: {
          dropdowns: [
            { label: 'Under normal conditions, the warmest air is:', options: ['Near the ground', 'High in the stratosphere', 'In the ozone layer', 'Always at 10 km'] },
            { label: 'During an inversion, the warm-air layer is:', options: ['Above the cool air', 'Below the cool air', 'Absent entirely', 'Spinning rapidly'] },
            { label: 'As a result, surface pollutants:', options: ['Accumulate near the ground', 'Escape to space', 'Disperse quickly upward', 'Turn into oxygen'] },
            { label: 'Terrain that makes it worse:', options: ['A mountain-ringed basin', 'A windy open plain', 'A flat desert with strong winds', 'A coastline with sea breezes'] },
          ],
          correctAnswers: ['Near the ground', 'Above the cool air', 'Accumulate near the ground', 'A mountain-ringed basin'],
          hint1: 'Normally the ground heats the air, so the lowest air is warmest.',
          hint2: 'An "inversion" inverts that: warm air ends up on top, acting as a lid.',
          hint3: 'A lid + a basin = trapped, accumulating pollution.',
          explanation: 'Normally warm air is near the ground and rises. An inversion places warm air on top as a lid; cool surface air cannot rise, so pollutants accumulate — and a mountain-ringed basin makes it worse by blocking winds.',
        },
      },
      {
        id: 'apeap4-dilution',
        type: 'text' as const,
        content: `## Quantifying Dilution

When wind and mixing decrease, the **same emissions** are diluted into a **smaller volume of air**, so concentration rises. A rough model:

$$\\text{Concentration} \\;\\approx\\; \\frac{\\text{Emission rate}}{\\text{Wind speed} \\times \\text{Mixing height}}$$

Cut the mixing height in half (a low inversion lid), and the concentration roughly **doubles** for the same emissions. This is why a still, inversion-capped morning can spike pollution even when factories emit no more than usual.

> 🔑 **Takeaway:** Pollution levels depend on **emissions ÷ dispersion**. Weather (wind, inversions) controls the *dispersion* half of that fraction.`,
      },
      {
        id: 'apeap4-input-dilution',
        type: 'input-boxes' as const,
        content: `**Dilution Math** 🧮

Use $\\text{Concentration} \\approx \\dfrac{\\text{Emission rate}}{\\text{Wind speed} \\times \\text{Mixing height}}$.

**1)** Emissions are constant, but an inversion drops the mixing height from 1000 m to 250 m (wind unchanged). The pollutant concentration becomes how many times larger? (enter the number)
**2)** If, in addition, the wind speed also falls to half its previous value, the total concentration is now how many times the original? (enter the number)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['4', '8'],
          hint1: 'Concentration is inversely proportional to mixing height: 1000 ÷ 250 = 4.',
          hint2: 'Halving wind speed multiplies concentration by another factor of 2.',
          hint3: 'Combine: 4 (from mixing height) × 2 (from wind) = 8.',
          explanation: '1) Mixing height ÷4 → concentration ×4. 2) Add wind ÷2 → another ×2, so 4 × 2 = 8× the original. Less dispersion means higher concentration for the same emissions.',
        },
      },
    ],
  },

  // ───────────────────────── PART 5 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap5-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 5 of 7 — Health Effects & the Air Quality Index (AQI)**

---

> 🔑 **The Idea:** Air pollution is a leading global health risk. The **Air Quality Index (AQI)** is how agencies translate pollutant concentrations into a single 0–500 color-coded number the public can act on.`,
      },
      {
        id: 'apeap5-health',
        type: 'text' as const,
        content: `## Who and What Gets Hurt

| Pollutant | Key Health / Environmental Effect |
|-----------|------------------------------------|
| **$PM_{2}._{5}$** (fine particulates) | Penetrate deep into the lungs and bloodstream; heart and lung disease — the **deadliest** pollutant globally |
| **Ground-level $O_{3}$** | Inflames airways; triggers asthma; reduces lung function and crop yields |
| **CO** | Binds hemoglobin; reduces oxygen delivery; deadly indoors |
| **$SO_{2}$ / $NO_{x}$** | Respiratory irritation; acid deposition |
| **Pb** | Neurotoxin; lowers IQ and harms development in children |

**Most sensitive groups:** children, the elderly, pregnant people, and those with asthma or heart/lung disease.

> 💡 **Why $PM_{2}._{5}$ is special:** Its diameter is ≤ 2.5 micrometers — small enough to slip past the body's defenses, lodge deep in the alveoli, and even cross into the blood. $PM_{10}$ (coarser) is filtered out higher in the airway.`,
      },
      {
        id: 'apeap5-q-health',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Why is fine particulate matter $(PM_{2}._{5})$ considered especially dangerous to human health?',
              options: [
                'It is small enough to penetrate deep into the lungs and enter the bloodstream',
                'It is the only pollutant that causes acid rain',
                'It only affects visibility, not health',
                'It is filtered out completely by the nose and throat',
              ],
              correctAnswer: 0,
              explanation: 'At ≤2.5 micrometers, $PM_{2}._{5}$ bypasses the upper-airway defenses, lodges deep in the alveoli, and can cross into the bloodstream, driving heart and lung disease. It is the deadliest air pollutant worldwide.',
            },
            {
              question: 'Which group is generally MOST vulnerable to harm from air pollution?',
              options: [
                'Children and people with asthma',
                'Healthy adults who exercise indoors',
                'People living at high altitude only',
                'No group is more vulnerable than another',
              ],
              correctAnswer: 0,
              explanation: 'Children (developing lungs, higher breathing rate per body mass), the elderly, and people with asthma or heart/lung disease are the most sensitive subpopulations.',
            },
          ],
        },
      },
      {
        id: 'apeap5-aqi',
        type: 'text' as const,
        content: `## Reading the Air Quality Index (AQI)

The AQI runs 0–500. **Higher = worse.** Each band has a color and a health message:

| AQI Range | Category | Color | Who Should Be Careful |
|-----------|----------|-------|-----------------------|
| 0–50 | Good | 🟢 Green | No one |
| 51–100 | Moderate | 🟡 Yellow | Unusually sensitive people |
| 101–150 | Unhealthy for Sensitive Groups | 🟠 Orange | Children, elderly, asthma, heart/lung disease |
| 151–200 | Unhealthy | 🔴 Red | Everyone may feel effects |
| 201–300 | Very Unhealthy | 🟣 Purple | Health alert — everyone |
| 301–500 | Hazardous | 🟤 Maroon | Emergency conditions |

The reported AQI for an area is set by **whichever pollutant is worst** at that time (the "dominant pollutant").

> ⚠️ **Don't average pollutants.** If $PM_{2}._{5}$ gives AQI 70 but ozone gives AQI 160, the reported AQI is **160** (the maximum), and the dominant pollutant is ozone.`,
      },
      {
        id: 'apeap5-dd-aqi',
        type: 'dropdown-select' as const,
        content: `**Interpret the AQI** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'An AQI of 45 falls in the category:', options: ['Good', 'Unhealthy', 'Hazardous', 'Very Unhealthy'] },
            { label: 'An AQI of 130 is labeled:', options: ['Unhealthy for Sensitive Groups', 'Good', 'Hazardous', 'Moderate'] },
            { label: 'An AQI of 275 is:', options: ['Very Unhealthy', 'Moderate', 'Good', 'Unhealthy for Sensitive Groups'] },
          ],
          correctAnswers: ['Good', 'Unhealthy for Sensitive Groups', 'Very Unhealthy'],
          hint1: '0–50 is the cleanest band.',
          hint2: '101–150 is the orange "sensitive groups" band.',
          hint3: '201–300 is the purple "Very Unhealthy" band.',
          explanation: '45 → Good (0–50). 130 → Unhealthy for Sensitive Groups (101–150). 275 → Very Unhealthy (201–300). Higher AQI always means worse air.',
        },
      },
      {
        id: 'apeap5-dominant',
        type: 'text' as const,
        content: `## The "Dominant Pollutant" Rule

A monitoring station measures **several** pollutants at once and computes a separate AQI sub-index for each. The number reported to the public is the **single highest** sub-index — and the pollutant that produced it is called the **dominant pollutant**.

$$\\text{Reported AQI} = \\max(\\text{AQI}_{\\text{PM}}, \\;\\text{AQI}_{\\text{O}_3}, \\;\\text{AQI}_{\\text{CO}}, \\dots)$$

> 🔑 Use the **worst** pollutant, never the average. Averaging would hide a single dangerous pollutant behind several clean ones — defeating the purpose of a public health warning.`,
      },
      {
        id: 'apeap5-input-aqi',
        type: 'input-boxes' as const,
        content: `**Dominant Pollutant** 🧮

The reported AQI for a city is the **maximum** of the individual pollutant AQIs (never the average).

A monitoring station reports these sub-index values for one afternoon:
- $PM_{2}._{5}$: AQI 88
- Ozone $(O_{3})$: AQI 142
- CO: AQI 35

**1)** What single AQI value should the city report? (enter the number)`,
        exercise: {
          boxes: 1,
          correctAnswers: ['142'],
          hint1: 'The overall AQI is the worst (highest) of the individual pollutant indices.',
          hint2: 'Compare 88, 142, and 35 — pick the largest.',
          hint3: 'Do NOT average them; report the maximum, 142.',
          explanation: 'The reported AQI is the maximum sub-index: max(88, 142, 35) = 142, with ozone as the dominant pollutant. This lands in the "Unhealthy for Sensitive Groups" band.',
        },
      },
    ],
  },

  // ───────────────────────── PART 6 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap6-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 6 of 7 — Indoor Air Pollution**

---

> 🔑 **The Idea:** People spend ~90% of their time indoors, where some pollutants reach concentrations **higher than outdoors**. The exam loves three indoor culprits in particular: **radon, carbon monoxide, and combustion smoke** — plus the developing-world problem of indoor cooking fires.`,
      },
      {
        id: 'apeap6-indoor',
        type: 'text' as const,
        content: `## Major Indoor Air Pollutants

| Pollutant | Source | Effect |
|-----------|--------|--------|
| **Radon-222** | Radioactive gas seeping from **uranium-bearing rock/soil** into basements | #2 cause of **lung cancer** (after smoking) |
| **Carbon monoxide (CO)** | Faulty furnaces, gas stoves, generators, blocked chimneys | Odorless; binds hemoglobin → death |
| **VOCs / formaldehyde** | Paints, adhesives, new carpet, pressed wood, cleaners | Irritation; "sick building syndrome"; some carcinogenic |
| **Asbestos** | Old insulation, ceiling/floor tiles | Lung scarring; **mesothelioma** |
| **Particulates / smoke** | Indoor wood/dung/coal cookfires, tobacco smoke | Respiratory disease; major killer in developing nations |
| **Mold / biological** | Damp surfaces, poor ventilation | Allergies, asthma triggers |

> 💡 **Developing vs. developed split:** In **developing** nations the biggest indoor threat is **smoke from indoor cooking and heating fires** (wood, charcoal, dung) with poor ventilation. In **developed** nations the headline indoor risks are **radon, CO, and VOCs/formaldehyde** in tightly sealed, energy-efficient buildings.`,
      },
      {
        id: 'apeap6-q-indoor',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Radon is a particularly insidious indoor air pollutant because it:',
              options: [
                'Is an odorless radioactive gas that seeps from rock/soil and is the #2 cause of lung cancer',
                'Is released only by gas stoves during cooking',
                'Smells strongly so people quickly notice it',
                'Is a greenhouse gas that warms the planet',
              ],
              correctAnswer: 0,
              explanation: 'Radon-222 is a colorless, odorless radioactive gas produced by uranium decay in soil/rock. It accumulates in basements and is the second-leading cause of lung cancer after smoking.',
            },
            {
              question: 'In many DEVELOPING nations, the leading source of harmful indoor air pollution is:',
              options: [
                'Smoke from indoor cooking and heating fires (wood, charcoal, dung)',
                'Radon from granite countertops',
                'Formaldehyde from new carpet',
                'Air-conditioner refrigerants',
              ],
              correctAnswer: 0,
              explanation: 'Burning biomass (wood, dung, charcoal) and coal indoors with poor ventilation produces particulate-laden smoke — a leading cause of respiratory disease and death, especially for women and children.',
            },
          ],
        },
      },
      {
        id: 'apeap6-why-worse',
        type: 'text' as const,
        content: `## Why Indoor Air Can Beat Outdoor Air for Hazard

Two factors make indoor exposure outsized:

1. **Time.** People spend roughly **90%** of their lives indoors, so even moderate indoor concentrations add up to large total exposure.
2. **Confinement.** A room is a small, poorly mixed volume. A pollutant released inside (radon, CO, VOCs) is not diluted by the whole atmosphere — it concentrates.

> 💡 The same dilution logic from Part 4 applies indoors: a small enclosed volume with limited air exchange behaves like a permanent mini-inversion, letting pollutants build up.`,
      },
      {
        id: 'apeap6-dd-indoor',
        type: 'dropdown-select' as const,
        content: `**Match Indoor Pollutant to Source** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Seeps from uranium-bearing soil into basements:', options: ['Radon', 'Asbestos', 'Formaldehyde', 'Carbon monoxide'] },
            { label: 'Off-gasses from new carpet, pressed wood, and paints:', options: ['Formaldehyde / VOCs', 'Radon', 'Asbestos', 'Lead'] },
            { label: 'Old insulation and floor tiles; causes mesothelioma:', options: ['Asbestos', 'Radon', 'Carbon monoxide', 'Ozone'] },
            { label: 'Odorless gas from a faulty furnace that binds hemoglobin:', options: ['Carbon monoxide', 'Formaldehyde', 'Radon', 'Mold'] },
          ],
          correctAnswers: ['Radon', 'Formaldehyde / VOCs', 'Asbestos', 'Carbon monoxide'],
          hint1: 'One of these is radioactive and comes from the ground.',
          hint2: 'New building materials off-gas VOCs like formaldehyde.',
          hint3: 'Asbestos = old fibrous insulation/tiles; CO = combustion gas.',
          explanation: 'Radon (radioactive soil gas), formaldehyde/VOCs (new materials), asbestos (old insulation → mesothelioma), and CO (incomplete combustion) are the classic indoor pollutants and their sources.',
        },
      },
      {
        id: 'apeap6-mitigation',
        type: 'text' as const,
        content: `## Reducing Indoor Air Pollution

| Strategy | Targets |
|----------|---------|
| **Ventilation** (open windows, air exchangers) | VOCs, CO, radon, moisture |
| **Radon testing & sub-slab venting** | Radon |
| **CO detectors & furnace maintenance** | Carbon monoxide |
| **Cleaner cookstoves / fuels** | Indoor cooking smoke (developing nations) |
| **Low-VOC products; let new materials off-gas** | Formaldehyde, VOCs |

> ⚠️ **Energy-efficiency trade-off:** Tightly sealed, well-insulated buildings save energy but **reduce air exchange**, so indoor pollutants can build up. Good ventilation is the fix — you don't have to choose between efficiency and clean indoor air.`,
      },
      {
        id: 'apeap6-q-mitigation',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Modern, tightly sealed, energy-efficient buildings can have WORSE indoor air quality because they:',
              options: [
                'Reduce air exchange, allowing pollutants like radon, CO, and VOCs to accumulate',
                'Generate radon inside the walls',
                'Are required to burn wood for heat',
                'Increase the outdoor ozone that leaks inside',
              ],
              correctAnswer: 0,
              explanation: 'Sealing a building to save energy cuts the rate of air exchange with the outside. Without adequate ventilation, indoor pollutants (radon, CO, formaldehyde/VOCs, moisture) build up to higher concentrations.',
            },
            {
              question: 'The most direct, general strategy for lowering most indoor air pollutant concentrations is to:',
              options: [
                'Improve ventilation / air exchange',
                'Add more insulation and seal the building further',
                'Raise the indoor temperature',
                'Burn incense to mask odors',
              ],
              correctAnswer: 0,
              explanation: 'Ventilation dilutes and removes indoor pollutants (VOCs, CO, radon, moisture). Sealing the building tighter or masking odors does not remove the pollutants and can make accumulation worse.',
            },
          ],
        },
      },
    ],
  },

  // ───────────────────────── PART 7 ─────────────────────────
  {
    topicSlug: 'apes-air-pollution',
    sections: [
      {
        id: 'apeap7-intro',
        type: 'text' as const,
        content: `# 🏭 Air Pollution & Smog

**Part 7 of 7 — Control Technology, Policy & Mastery Check**

---

You now know the pollutants, the two smogs, acid deposition, inversions, the AQI, and indoor air. This final part covers how we **control** pollution and the **laws** that drive it — then a mixed review and an Exit Quiz.`,
      },
      {
        id: 'apeap7-controls',
        type: 'text' as const,
        content: `## Control Technologies

| Device | Removes | How |
|--------|---------|-----|
| **Catalytic converter** | CO, $NO_{x}$, VOCs (in car exhaust) | Catalysts convert them to $CO_{2}$, $N_{2}$, and $H_{2}O$ |
| **Electrostatic precipitator** | Particulate matter (smokestacks) | Charges particles, then collects them on plates |
| **Scrubber** (flue-gas desulfurization) | **$SO_{2}$** | Sprays a wet limestone/lime slurry that neutralizes $SO_{2}$ |
| **Baghouse filter** | Particulates | Fabric bags physically trap particles |

The cleanest strategies, though, are **prevention** at the source: switching coal → natural gas or renewables, improving efficiency, and reformulating fuels (e.g., **removing lead** and sulfur).

> 💡 **Best example of source control:** Phasing out **leaded gasoline** removed Pb from the air almost entirely in developed nations — one of the great public-health wins, dropping children's blood-lead levels dramatically.`,
      },
      {
        id: 'apeap7-policy',
        type: 'text' as const,
        content: `## Key U.S. Policy: The Clean Air Act

| Provision | What It Does |
|-----------|--------------|
| **NAAQS** | Sets national limits for the six criteria pollutants |
| **New Source Review** | Requires controls on new/expanded plants |
| **Cap-and-trade for $SO_{2}$** (1990 amendments) | Market-based system that cut acid-rain pollution cheaply |
| **Phase-out of leaded gasoline** | Eliminated airborne lead |

The **1990 $SO_{2}$ cap-and-trade program** is the classic success story: it set a national cap, let plants buy/sell allowances, and cut $SO_{2}$ emissions faster and cheaper than expected — sharply reducing acid rain.

Internationally, the **Montreal Protocol (1987)** phased out **CFCs** to heal the *stratospheric* ozone layer — a separate issue from ground-level smog, but a model of effective global cooperation.

> 🔑 **Don't mix them up:** Clean Air Act / NAAQS = U.S. criteria pollutants and smog. Montreal Protocol = global CFC phase-out for the *stratospheric* ozone hole.`,
      },
      {
        id: 'apeap7-input-reduction',
        type: 'input-boxes' as const,
        content: `**Emission-Reduction Math** 🧮

**1)** A coal plant emits 8000 tons of $SO_{2}$ per year. After installing a scrubber that removes 90% of $SO_{2}$, how many tons per year are still emitted? (enter the number)
**2)** A city's vehicle fleet emits 50,000 tons of $NO_{x}$ per year. A new standard cuts emissions to 35,000 tons. What is the percent reduction? (enter just the number, e.g. 30 for 30%)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['800', '30'],
          hint1: 'Removing 90% leaves 10%: $8000 \\times 0.10$.',
          hint2: 'Percent reduction = (decrease ÷ original) × 100.',
          hint3: 'Decrease = 50,000 − 35,000 = 15,000; then 15,000 ÷ 50,000 × 100.',
          explanation: '1) 10% of 8000 remains = 800 tons. 2) Reduction = (50,000 − 35,000)/50,000 × 100 = 15,000/50,000 × 100 = 30%.',
        },
      },
      {
        id: 'apeap7-prevention',
        type: 'text' as const,
        content: `## Control vs. Prevention

The math above shows control technology works, but each device only catches a *fraction* of one pollutant and costs money to run. The most powerful long-term strategy is **prevention** — emitting less in the first place:

| Approach | Example | Catch |
|----------|---------|-------|
| **Capture** (end-of-pipe) | Scrubbers, precipitators, converters | Treats pollution after it's made |
| **Prevention** (source) | Switch coal → gas/renewables; efficiency; remove lead/sulfur | Stops pollution from forming |

> 💡 Prevention also avoids the "co-pollutant" problem: switching a coal plant to wind power eliminates $SO_{2}$, $NO_{x}$, PM, **and** $CO_{2}$ all at once, whereas a scrubber only removes $SO_{2}$.`,
      },
      {
        id: 'apeap7-dd-controls',
        type: 'dropdown-select' as const,
        content: `**Match Control to Pollutant** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Removes $SO_{2}$ from a coal smokestack:', options: ['Scrubber', 'Catalytic converter', 'Reforestation', 'Radon vent'] },
            { label: 'Cleans CO, $NO_{x}$, and VOCs from car exhaust:', options: ['Catalytic converter', 'Electrostatic precipitator', 'Scrubber', 'Baghouse filter'] },
            { label: 'Best removes fine particulates from flue gas:', options: ['Electrostatic precipitator', 'Catalytic converter', 'Cap-and-trade', 'Open windows'] },
            { label: 'Law that set U.S. limits on criteria pollutants:', options: ['Clean Air Act', 'Montreal Protocol', 'Endangered Species Act', 'Kyoto Protocol'] },
          ],
          correctAnswers: ['Scrubber', 'Catalytic converter', 'Electrostatic precipitator', 'Clean Air Act'],
          hint1: 'A "scrubber" sprays a slurry to grab sulfur dioxide.',
          hint2: 'Catalytic converters live in car exhaust systems.',
          hint3: 'Electrostatic precipitators charge and collect particles; the Clean Air Act sets NAAQS.',
          explanation: 'Scrubber → $SO_{2}$; catalytic converter → $CO/NO_{x}/VOCs$ in exhaust; electrostatic precipitator → particulates; the Clean Air Act sets the NAAQS for criteria pollutants. (Montreal Protocol = CFCs/stratospheric ozone.)',
        },
      },
      {
        id: 'apeap7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | Key fact |
|---------|----------|
| Six criteria pollutants | CO, $SO_{2}$, $NO_{x}$, PM, ground-level $O_{3}$, Pb |
| Secondary pollutant | Formed in air ($O_{3}$, $H_{2}SO_{4}$, $HNO_{3}$) — not emitted directly |
| Photochemical smog | $NO_{x}$ + VOCs + **sunlight** → $O_{3}$ (brown, hot afternoons) |
| Industrial smog | **$SO_{2}$** + soot from coal (gray, cold, damp) |
| Acid deposition | $SO_{2}$ → $H_{2}SO_{4}$, $NO_{x}$ → $HNO_{3}$; "normal" rain ≈ pH 5.6 |
| Thermal inversion | Warm air caps cool air → pollutants trapped |
| AQI | 0–500, higher = worse; report the **max** sub-index |
| Worst indoor risks | Radon, CO, VOCs (developed); cookfire smoke (developing) |
| Controls | Scrubber→$SO_{2}$, converter→$CO/NO_{x}/VOCs$, precipitator→PM |
| Policy | Clean Air Act/NAAQS (smog); Montreal Protocol (CFCs/stratosphere) |

> ⚠️ Top traps: ozone is **secondary**; "good ozone" (stratosphere) ≠ "bad ozone" (ground); pH is **logarithmic**; report the **maximum** AQI, never the average.`,
      },
      {
        id: 'apeap7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which pairing of smog type and dominant pollutant is correct?',
              options: [
                'Photochemical smog → ozone $(O_{3})$; industrial smog → sulfur dioxide $(SO_{2})$',
                'Photochemical smog → $SO_{2}$; industrial smog → $O_{3}$',
                'Both are dominated by carbon dioxide',
                'Both are dominated by radon',
              ],
              correctAnswer: 0,
              explanation: 'Photochemical (brown, sunny-city) smog is dominated by ozone formed from $NO_{x}$ + VOCs + sunlight. Industrial (gray, coal) smog is dominated by $SO_{2}$ and soot.',
            },
            {
              question: 'A scrubber on a power plant is designed mainly to remove which pollutant?',
              options: ['$SO_{2}$', '$CO_{2}$', 'Radon', 'Ground-level ozone'],
              correctAnswer: 0,
              explanation: 'Flue-gas scrubbers spray a limestone/lime slurry that neutralizes and removes $SO_{2}$, reducing acid deposition. They are not designed for $CO_{2}$ capture.',
            },
          ],
        },
      },
      {
        id: 'apeap7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Ground-level ozone is classified as a SECONDARY pollutant because it:',
              options: [
                'Forms in the atmosphere from $NO_{x}$ and VOCs reacting in sunlight',
                'Is emitted directly from car tailpipes',
                'Comes straight from volcanic eruptions',
                'Is mined from uranium-bearing rock',
              ],
              correctAnswer: 0,
              explanation: 'Secondary pollutants are not emitted directly; they form via atmospheric reactions. Ozone forms when primary $NO_{x}$ and VOCs react under UV sunlight.',
            },
            {
              question: 'During a thermal inversion in a mountain-ringed basin, smog worsens because:',
              options: [
                'Warm air aloft caps cooler surface air, trapping pollutants that the terrain prevents from blowing away',
                'Strong winds rapidly disperse all pollutants',
                'Sunlight is completely blocked, stopping all chemistry',
                'Rain neutralizes every pollutant within minutes',
              ],
              correctAnswer: 0,
              explanation: 'An inversion places warm air above cool surface air, preventing the cool, pollutant-laden air from rising; surrounding mountains block horizontal escape, so pollutants accumulate.',
            },
            {
              question: 'Which control or policy is correctly matched to its target?',
              options: [
                'Scrubber → removes $SO_{2}$ from smokestacks',
                'Catalytic converter → removes radon from basements',
                'Montreal Protocol → set NAAQS for ground-level ozone',
                'Electrostatic precipitator → removes dissolved $CO_{2}$ from water',
              ],
              correctAnswer: 0,
              explanation: 'Scrubbers remove $SO_{2}$ from flue gas. Catalytic converters treat vehicle exhaust (not radon); the Montreal Protocol phased out CFCs (stratospheric ozone), not NAAQS; precipitators capture airborne particulates, not dissolved $CO_{2}$.',
            },
          ],
        },
      },
    ],
  },
]
