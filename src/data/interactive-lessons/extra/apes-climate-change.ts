import type { LessonData } from '../registry'

/**
 * Hand-authored interactive lesson — Climate Change (AP Environmental Science).
 * Registry key / DB Topic.slug: 'apes-climate-change'.
 * 7 parts, gold-standard structure modeled on the algebra1-completing-the-square pilot
 * and the sibling apes-air-pollution lesson: teach (text) → interactive check
 * (multiple-choice / dropdown-select / input-boxes) → worked applications → Exit Quiz.
 * Concept-forward (non-math topic), so checks favor multiple-choice + dropdown, with a
 * few quantitative input-boxes (radiative-forcing logic, ppm change, sea-level/albedo
 * arithmetic, ocean-pH). LaTeX uses DOUBLED backslashes (template-literal strings);
 * chemical formulas use Unicode subscripts to match the existing APES lessons.
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

**Part 1 of 7 — Weather vs. Climate & the Natural Greenhouse Effect**

---

### Topics in This Part

| Section |
|---------|
| Weather vs. Climate |
| The Electromagnetic Energy Balance |
| The Natural Greenhouse Effect |
| Why Earth Isn't Frozen |

> 🔑 **Key Concept:** The greenhouse effect is **natural and essential** — it keeps Earth about $33\\,^{\\circ}\\text{C}$ warmer than it would otherwise be. Human-caused climate change is the **enhancement** of this natural process by added greenhouse gases. The exam constantly rewards students who keep that distinction straight.`,
      },
      {
        id: 'apecc1-weather-climate',
        type: 'text' as const,
        content: `## Weather vs. Climate

These two words are not interchangeable, and confusing them is the single most common error on this unit.

| Term | Definition | Time Scale | Example |
|------|------------|------------|---------|
| **Weather** | The state of the atmosphere at a place and moment | Hours to days | "It's raining in Denver right now." |
| **Climate** | The long-term *average* of weather (and its variability) for a region | 30+ years | "Denver has a semi-arid climate." |

> 💡 **Memory hook:** *Climate is what you expect; weather is what you get.* A single cold winter day does **not** disprove a warming climate, because climate is a multi-decade statistical average, not a daily reading.

Climate scientists use a **30-year baseline** (a "climate normal") so that short-term swings — a strong El Niño year, a big volcanic eruption — average out and the underlying trend becomes visible.`,
      },
      {
        id: 'apecc1-q-weather-climate',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A politician says, "It snowed heavily last week, so global warming must be a hoax." What is the central flaw in this argument?',
              options: [
                'A single weather event is being used to dispute a long-term climate trend',
                'Snow only forms when the planet is cooling overall',
                'Winter weather is unrelated to the atmosphere',
                'Global warming means it can never snow anywhere again',
              ],
              correctAnswer: 0,
              explanation: 'Climate is a multi-decade average; one cold week (weather) says nothing about the 30-year trend. A warming climate can still produce — and even intensify — individual snowstorms.',
            },
            {
              question: 'Which statement describes climate rather than weather?',
              options: [
                'Phoenix has a hot, dry climate with average July highs near 41 °C',
                'A thunderstorm is forecast for tomorrow afternoon',
                'Winds are gusting to 50 km/h right now',
                'The temperature dropped 10 °C overnight',
              ],
              correctAnswer: 0,
              explanation: 'Climate is the long-term average pattern (e.g., "average July highs near 41 °C"). The other three describe momentary atmospheric conditions — weather.',
            },
          ],
        },
      },
      {
        id: 'apecc1-energy-balance',
        type: 'text' as const,
        content: `## The Energy Balance: Shortwave In, Longwave Out

Earth's temperature is set by a balance between energy arriving from the Sun and energy radiating back to space.

1. **Incoming solar radiation** is mostly **shortwave** (visible light + UV). The Sun is hot (~$5500\\,^{\\circ}\\text{C}$), so by **Wien's Law** it radiates short wavelengths.
2. About **30%** of incoming sunlight is reflected straight back to space (by clouds, ice, light surfaces) — this fraction is the planet's **albedo**.
3. The remaining ~70% is **absorbed** by the surface and atmosphere, warming the planet.
4. The warmed Earth (a cool ~$15\\,^{\\circ}\\text{C}$ object) re-radiates energy as **longwave infrared (IR)**.

> 🔑 **The key asymmetry:** The atmosphere is largely **transparent to incoming shortwave** light but **absorbs outgoing longwave IR**. Greenhouse gases let sunlight in but trap heat trying to leave. *That* is the greenhouse effect.

At equilibrium, **energy in = energy out**, and the planet holds a steady average temperature. Add greenhouse gases and you slow the "out" side — so the planet must warm until the balance is restored at a higher temperature.`,
      },
      {
        id: 'apecc1-dd-energy',
        type: 'dropdown-select' as const,
        content: `**Trace the Energy** 🔽

Fill in each blank to describe Earth's energy balance.`,
        exercise: {
          dropdowns: [
            { label: 'Energy arriving from the Sun is mostly:', options: ['shortwave radiation', 'longwave infrared', 'microwaves', 'sound energy'] },
            { label: 'Energy Earth radiates back toward space is mostly:', options: ['longwave infrared', 'shortwave radiation', 'visible light', 'ultraviolet'] },
            { label: 'Greenhouse gases mainly absorb the:', options: ['outgoing longwave IR', 'incoming shortwave light', 'reflected albedo light', 'cosmic rays'] },
            { label: 'The fraction of sunlight reflected straight back to space is called:', options: ['albedo', 'forcing', 'insolation', 'emissivity'] },
          ],
          correctAnswers: ['shortwave radiation', 'longwave infrared', 'outgoing longwave IR', 'albedo'],
          hint1: 'The hot Sun emits short wavelengths; the cooler Earth emits long ones (Wien\'s Law).',
          hint2: 'The atmosphere is transparent to sunlight coming in but traps the heat trying to leave.',
          hint3: 'Albedo = reflectivity. About 30% of incoming sunlight is reflected.',
          explanation: 'Shortwave sunlight comes in, ~30% is reflected (albedo), the rest warms Earth, which re-radiates longwave IR — and greenhouse gases absorb that outgoing IR, trapping heat.',
        },
      },
      {
        id: 'apecc1-natural-ge',
        type: 'text' as const,
        content: `## The Natural Greenhouse Effect — and Why It Matters

Run the numbers without an atmosphere and Earth's average surface temperature would be about $-18\\,^{\\circ}\\text{C}$ (well below freezing) — a frozen, lifeless rock. The **actual** average is about $+15\\,^{\\circ}\\text{C}$.

$$\\Delta T_{\\text{greenhouse}} = 15\\,^{\\circ}\\text{C} - (-18\\,^{\\circ}\\text{C}) = 33\\,^{\\circ}\\text{C}$$

That $33\\,^{\\circ}\\text{C}$ of natural warming is what makes liquid water — and life — possible.

> ⚠️ **Exam trap:** The greenhouse effect is **not** "bad." It is natural and necessary. The *problem* is the **enhanced** greenhouse effect: humans adding extra greenhouse gases, which pushes the natural warming higher than ecosystems and civilization are adapted to.

> 💡 The greenhouse effect is **not** the same as ozone depletion. Ozone depletion is a stratospheric problem caused by CFCs; the greenhouse effect is a tropospheric heat-trapping problem caused mostly by CO₂, CH₄, N₂O, and water vapor. Keep these two issues in separate boxes.`,
      },
      {
        id: 'apecc1-ib-deltaT',
        type: 'input-boxes' as const,
        content: `**Quantify the Natural Warming** 🧮

Use Earth's effective (no-atmosphere) temperature of $-18\\,^{\\circ}\\text{C}$ and its actual average surface temperature of $+15\\,^{\\circ}\\text{C}$.

**1)** How many $^{\\circ}\\text{C}$ of warming does the natural greenhouse effect provide? Enter a number.

**2)** If a planet had an effective temperature of $-20\\,^{\\circ}\\text{C}$ and a natural greenhouse warming of $40\\,^{\\circ}\\text{C}$, what would its actual surface temperature be in $^{\\circ}\\text{C}$?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['33', '20'],
          hint1: 'Subtract the colder (no-atmosphere) temperature from the warmer (actual) one.',
          hint2: '$15 - (-18) = 15 + 18$.',
          hint3: 'For part 2, add the greenhouse warming to the effective temperature: $-20 + 40$.',
          explanation: '1) $15 - (-18) = 33\\,^{\\circ}\\text{C}$ of natural greenhouse warming. 2) $-20 + 40 = 20\\,^{\\circ}\\text{C}$ surface temperature.',
        },
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

**Part 2 of 7 — The Greenhouse Gases & Global Warming Potential**

---

> 🔑 **The Idea:** Not all greenhouse gases are equal. A molecule's impact depends on **how strongly it absorbs IR**, **how long it stays in the atmosphere**, and **how much of it we emit**. The metric that bundles strength and lifetime together is **Global Warming Potential (GWP)**.`,
      },
      {
        id: 'apecc2-gases',
        type: 'text' as const,
        content: `## The Major Greenhouse Gases

| Gas | Main Human Sources | Atmospheric Lifetime | GWP (100-yr) |
|-----|--------------------|----------------------|--------------|
| **Water vapor (H₂O)** | Not directly emitted; a **feedback** | Days | — (feedback) |
| **Carbon dioxide (CO₂)** | Burning fossil fuels, deforestation, cement | 100s–1000s of years | **1** (the reference) |
| **Methane (CH₄)** | Livestock, rice paddies, landfills, leaks | ~12 years | ~**28** |
| **Nitrous oxide (N₂O)** | Synthetic fertilizers, manure, combustion | ~120 years | ~**265** |
| **CFCs / HFCs** | Old refrigerants, foams, aerosols | Decades–centuries | **1,000s–10,000s** |

> 💡 **GWP** measures how much heat a mass of gas traps over a set period (usually 100 years) **relative to the same mass of CO₂**, which is defined as $1$. A GWP of $28$ means one kilogram of that gas traps $28\\times$ as much heat as one kilogram of CO₂ over a century.

> ⚠️ **Why CO₂ still dominates** despite a GWP of only $1$: we emit *enormous* quantities of it, and it persists for centuries. CH₄ is far stronger per molecule but is emitted in smaller amounts and breaks down in roughly a decade. **Quantity × potency × lifetime** is what matters.`,
      },
      {
        id: 'apecc2-q-gases',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A Global Warming Potential (GWP) of 28 for methane means that, per unit mass over 100 years, methane traps:',
              options: [
                '28 times as much heat as the same mass of CO₂',
                '28% as much heat as CO₂',
                '28 times as much heat as water vapor',
                '28 ppm more than CO₂',
              ],
              correctAnswer: 0,
              explanation: 'GWP is measured relative to CO₂ (defined as 1). A GWP of 28 means methane traps 28× the heat of an equal mass of CO₂ over 100 years.',
            },
            {
              question: 'Why is CO₂ considered the most important driver of human-caused warming even though its GWP is only 1?',
              options: [
                'It is emitted in huge quantities and persists in the atmosphere for centuries',
                'It absorbs every wavelength of incoming sunlight',
                'It has the highest GWP of any gas',
                'It is the only gas that traps infrared radiation',
              ],
              correctAnswer: 0,
              explanation: 'Total impact = amount emitted × potency × lifetime. CO₂\'s sheer volume and century-plus residence time make it the dominant forcing agent despite its low per-molecule potency.',
            },
            {
              question: 'Water vapor is described as a "feedback" rather than a direct forcing because:',
              options: [
                'Its concentration is controlled by temperature, not directly by human emissions',
                'It does not absorb infrared radiation',
                'It is not a greenhouse gas at all',
                'Humans emit more water vapor than CO₂',
              ],
              correctAnswer: 0,
              explanation: 'Warmer air holds more water vapor, which traps more heat, which warms the air further — a feedback. We don\'t set its level directly the way we set CO₂ through emissions.',
            },
          ],
        },
      },
      {
        id: 'apecc2-co2-sources',
        type: 'text' as const,
        content: `## Where the CO₂ Comes From

The dominant human source of CO₂ is **burning fossil fuels** (coal, oil, natural gas) for electricity, transportation, and industry. The combustion reaction releases carbon that had been locked underground for millions of years:

$$\\text{CH}_4 + 2\\,\\text{O}_2 \\rightarrow \\text{CO}_2 + 2\\,\\text{H}_2\\text{O}$$

(burning methane/natural gas — every hydrocarbon combustion produces CO₂)

**Deforestation** is the second major source: trees store carbon, so cutting and burning them releases CO₂ *and* removes a future carbon sink. **Cement production** also releases CO₂ when limestone (CaCO₃) is heated.

> 🔑 **Fossil-fuel ranking by CO₂ per unit energy:** **coal > oil > natural gas**. Coal is the most carbon-intensive fuel; natural gas (mostly CH₄) releases the least CO₂ per unit of energy because more of its energy comes from hydrogen, not carbon. This is why switching from coal to natural gas lowers CO₂ emissions per kWh.`,
      },
      {
        id: 'apecc2-dd-sources',
        type: 'dropdown-select' as const,
        content: `**Match the Driver** 🔽

Choose the best answer for each.`,
        exercise: {
          dropdowns: [
            { label: 'Single largest human source of CO₂:', options: ['Burning fossil fuels', 'Cattle digestion', 'Rice paddies', 'Refrigerant leaks'] },
            { label: 'Greenhouse gas most associated with livestock and landfills:', options: ['Methane (CH₄)', 'Carbon dioxide (CO₂)', 'Nitrous oxide (N₂O)', 'Ozone (O₃)'] },
            { label: 'Greenhouse gas most associated with synthetic fertilizer use:', options: ['Nitrous oxide (N₂O)', 'Methane (CH₄)', 'Carbon dioxide (CO₂)', 'Water vapor'] },
            { label: 'Fossil fuel that releases the MOST CO₂ per unit of energy:', options: ['Coal', 'Natural gas', 'Oil', 'They are identical'] },
          ],
          correctAnswers: ['Burning fossil fuels', 'Methane (CH₄)', 'Nitrous oxide (N₂O)', 'Coal'],
          hint1: 'Most CO₂ comes from energy and transportation, not agriculture.',
          hint2: 'Cows and decomposing trash in landfills release CH₄; fertilizer chemistry releases N₂O.',
          hint3: 'Carbon-intensity ranking: coal > oil > natural gas.',
          explanation: 'Fossil-fuel combustion is the top CO₂ source. Methane comes from livestock/landfills/rice; N₂O comes mainly from fertilizers; and coal is the most carbon-intensive fuel per unit energy.',
        },
      },
      {
        id: 'apecc2-ib-co2equiv',
        type: 'input-boxes' as const,
        content: `**CO₂-Equivalent Practice** 🧮

We compare emissions using **CO₂-equivalents**: $\\text{mass} \\times \\text{GWP}$.

**1)** A farm releases $10$ kg of methane (GWP $= 28$). How many kg of CO₂-equivalents is that?

**2)** Releasing $2$ kg of nitrous oxide (GWP $= 265$) equals how many kg of CO₂-equivalents?`,
        exercise: {
          boxes: 2,
          correctAnswers: ['280', '530'],
          hint1: 'CO₂-equivalent = mass of the gas × its GWP.',
          hint2: 'Part 1: $10 \\times 28$.',
          hint3: 'Part 2: $2 \\times 265$.',
          explanation: '1) $10\\text{ kg} \\times 28 = 280$ kg CO₂-eq. 2) $2\\text{ kg} \\times 265 = 530$ kg CO₂-eq. GWP lets us put very different gases on one common scale.',
        },
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

**Part 3 of 7 — Evidence, the Carbon Cycle & Natural Drivers**

---

> 🔑 **Why it matters:** To distinguish human-caused warming from natural variability, scientists rely on **multiple independent lines of evidence** and on understanding the **natural cycles** (the carbon cycle, Milankovitch cycles, the Sun) that have *always* shifted climate. The fingerprint of today's change points squarely at carbon we dug up.`,
      },
      {
        id: 'apecc3-evidence',
        type: 'text' as const,
        content: `## The Lines of Evidence

No single graph proves climate change; the case rests on many datasets that agree.

| Evidence | What It Shows |
|----------|---------------|
| **Keeling Curve** | Direct CO₂ measurements (Mauna Loa) rising from ~315 ppm (1958) to >420 ppm today |
| **Ice cores** | Trapped air bubbles record CO₂ and temperature back ~800,000 years; today's CO₂ is far above the natural range |
| **Instrumental temperature record** | Global average surface temperature up ~1.1–1.2 °C since pre-industrial times |
| **Shrinking ice & glaciers** | Arctic sea ice, ice sheets, and mountain glaciers losing mass |
| **Sea-level rise** | From thermal expansion + melting land ice |
| **Isotopic "fingerprint"** | The added CO₂ is depleted in ¹³C and ¹⁴C — the signature of ancient **fossil** carbon, not volcanoes |

> 💡 **The Keeling Curve** also has an annual **saw-tooth wiggle**: CO₂ dips each Northern Hemisphere summer (plants photosynthesize and pull down CO₂) and rises each winter (decomposition + less photosynthesis). The "breathing of the biosphere" rides on top of the steady upward human-caused trend.`,
      },
      {
        id: 'apecc3-q-evidence',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'The Keeling Curve shows a steady long-term rise in atmospheric CO₂ with a small annual zig-zag. What causes the annual zig-zag?',
              options: [
                'Seasonal photosynthesis: plants pull down CO₂ in summer and release it in winter',
                'Yearly changes in the Sun\'s output',
                'Volcanic eruptions every spring',
                'Measurement errors at Mauna Loa',
              ],
              correctAnswer: 0,
              explanation: 'The saw-tooth reflects the Northern Hemisphere growing season: summer photosynthesis lowers CO₂, winter decomposition raises it. The overall upward trend is the human signal.',
            },
            {
              question: 'How do ice cores let scientists reconstruct ancient atmospheric CO₂ levels?',
              options: [
                'Tiny air bubbles trapped in the ice preserve samples of the ancient atmosphere',
                'The ice changes color in proportion to CO₂',
                'CO₂ is dissolved uniformly throughout solid ice',
                'They measure the radioactivity of the ice',
              ],
              correctAnswer: 0,
              explanation: 'As snow compacts into glacial ice, it traps bubbles of air. Analyzing those bubbles gives a direct record of past CO₂ — extending the record back ~800,000 years.',
            },
          ],
        },
      },
      {
        id: 'apecc3-carbon-cycle',
        type: 'text' as const,
        content: `## The Carbon Cycle: Sources and Sinks

Carbon constantly moves among reservoirs. A **source** adds CO₂ to the atmosphere; a **sink** removes it.

**Natural sinks (remove CO₂):**
- **Photosynthesis** — plants and phytoplankton convert CO₂ into biomass
- **Ocean uptake** — CO₂ dissolves into seawater (the ocean is the largest active sink)
- **Sedimentation** — carbon locked into rocks and deep-sea sediments over geologic time

**Natural sources (add CO₂):**
- **Cellular respiration** and **decomposition**
- **Volcanic outgassing** (small compared to human emissions)

> 🔑 **The human perturbation:** Burning fossil fuels and deforestation move carbon from **long-term storage** (underground, in forests) into the atmosphere **faster than the sinks can absorb it**. The imbalance — emissions exceeding uptake — is exactly why atmospheric CO₂ is climbing. About half of our emissions are taken up by ocean and land sinks; the rest accumulates.

> ⚠️ **Deforestation is a double hit:** it releases stored carbon *and* eliminates the trees that would have absorbed future CO₂.`,
      },
      {
        id: 'apecc3-dd-carbon',
        type: 'dropdown-select' as const,
        content: `**Source or Sink?** 🔽

Classify each process by its effect on atmospheric CO₂.`,
        exercise: {
          dropdowns: [
            { label: 'Photosynthesis by a forest:', options: ['Carbon sink (removes CO₂)', 'Carbon source (adds CO₂)', 'No effect on CO₂', 'Reverses the greenhouse effect'] },
            { label: 'Burning coal in a power plant:', options: ['Carbon source (adds CO₂)', 'Carbon sink (removes CO₂)', 'No effect on CO₂', 'Increases albedo'] },
            { label: 'CO₂ dissolving into the ocean:', options: ['Carbon sink (removes CO₂)', 'Carbon source (adds CO₂)', 'No effect on CO₂', 'A greenhouse gas feedback'] },
            { label: 'Cutting and burning a tropical rainforest:', options: ['Carbon source (adds CO₂)', 'Carbon sink (removes CO₂)', 'No net effect', 'Lowers global temperature'] },
          ],
          correctAnswers: ['Carbon sink (removes CO₂)', 'Carbon source (adds CO₂)', 'Carbon sink (removes CO₂)', 'Carbon source (adds CO₂)'],
          hint1: 'A sink removes CO₂ from the air; a source adds it.',
          hint2: 'Plants and the ocean pull CO₂ out; combustion puts it in.',
          hint3: 'Deforestation both releases stored carbon and destroys a sink — net source.',
          explanation: 'Photosynthesis and ocean uptake are sinks; burning fossil fuels and burning forests are sources. Deforestation is doubly harmful — it adds CO₂ and removes future absorption capacity.',
        },
      },
      {
        id: 'apecc3-natural-drivers',
        type: 'text' as const,
        content: `## Natural Climate Drivers (and Why They Aren't the Culprit Now)

Climate has always changed. The major **natural** drivers:

- **Milankovitch cycles** — slow (tens of thousands of years) changes in Earth's orbit (eccentricity), axial tilt (obliquity), and wobble (precession) that pace the ice ages.
- **Solar output** — small variations in the Sun's energy (e.g., the ~11-year sunspot cycle).
- **Volcanic eruptions** — large eruptions inject sulfate aerosols that **cool** the planet for a few years by reflecting sunlight (raising albedo).
- **Ocean oscillations** — El Niño / La Niña (ENSO) shift heat and cause year-to-year swings.

> ⚠️ **Why these don't explain current warming:** Milankovitch cycles operate over **tens of thousands of years** — far too slow for a change over ~150 years. The Sun's output has been **flat to slightly declining** in recent decades while temperatures rose. And the isotopic fingerprint of the added CO₂ matches **fossil** carbon, not volcanic CO₂. The rapid, decadal warming tracks our emissions — not any natural cycle.

> 💡 Volcanoes and El Niño cause *short-term wiggles*; they are the "weather" of the climate record, not the long-term *trend*.`,
      },
      {
        id: 'apecc3-ib-ppm',
        type: 'input-boxes' as const,
        content: `**Read the CO₂ Record** 🧮

Pre-industrial atmospheric CO₂ was about $280$ ppm. Today it is about $420$ ppm.

**1)** By how many ppm has atmospheric CO₂ increased since pre-industrial times?

**2)** What is that increase as a percentage of the pre-industrial value? Round to the nearest whole percent. (Enter just the number.)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['140', '50'],
          hint1: 'Part 1: subtract $280$ from $420$.',
          hint2: 'Part 2: percent increase $= \\dfrac{\\text{increase}}{\\text{original}} \\times 100$.',
          hint3: '$\\dfrac{140}{280} \\times 100 = 50\\%$.',
          explanation: '1) $420 - 280 = 140$ ppm of increase. 2) $\\frac{140}{280}\\times 100 = 50\\%$ — atmospheric CO₂ is now about 50% above its pre-industrial level.',
        },
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

**Part 4 of 7 — Feedback Loops & Tipping Points**

---

> 🔑 **The Idea:** Climate isn't a simple thermostat. **Feedback loops** can amplify warming (positive feedback) or dampen it (negative feedback). The scariest part of the science is that several powerful **positive** feedbacks could push the system past **tipping points** that are hard to reverse.`,
      },
      {
        id: 'apecc4-feedbacks',
        type: 'text' as const,
        content: `## Positive vs. Negative Feedback

> ⚠️ **Don't moralize the words.** In systems science, **positive** means *amplifying* (pushes change further) and **negative** means *stabilizing* (dampens change). A "positive feedback" is usually *bad* for the climate; a "negative feedback" is usually *helpful*.

**Positive (amplifying) feedbacks:**

| Feedback | Mechanism |
|----------|-----------|
| **Ice–albedo** | Warming melts bright, reflective ice → exposes dark ocean/land → lower albedo → more absorption → more warming |
| **Water-vapor** | Warmer air holds more water vapor (a greenhouse gas) → more warming |
| **Permafrost / methane** | Thawing Arctic permafrost releases CH₄ and CO₂ → more warming |
| **Forest dieback / wildfire** | Warming → drought, fires, tree death → stored carbon released |

**Negative (stabilizing) feedbacks:**

| Feedback | Mechanism |
|----------|-----------|
| **CO₂ fertilization (partial)** | More CO₂ can boost some plant growth → more CO₂ uptake |
| **Some cloud effects** | More low clouds can raise albedo and reflect sunlight |

> 💡 The dominant feedbacks in today's climate are **positive**, which is why warming tends to **accelerate** rather than self-correct.`,
      },
      {
        id: 'apecc4-dd-feedback',
        type: 'dropdown-select' as const,
        content: `**Classify the Feedback** 🔽

Label each loop as a positive (amplifying) or negative (stabilizing) feedback.`,
        exercise: {
          dropdowns: [
            { label: 'Melting sea ice exposes dark ocean, which absorbs more heat:', options: ['Positive (amplifying)', 'Negative (stabilizing)'] },
            { label: 'Thawing permafrost releases methane, warming the planet further:', options: ['Positive (amplifying)', 'Negative (stabilizing)'] },
            { label: 'Warmer air holds more water vapor, trapping more heat:', options: ['Positive (amplifying)', 'Negative (stabilizing)'] },
            { label: 'More CO₂ boosts plant growth, increasing CO₂ uptake:', options: ['Negative (stabilizing)', 'Positive (amplifying)'] },
          ],
          correctAnswers: ['Positive (amplifying)', 'Positive (amplifying)', 'Positive (amplifying)', 'Negative (stabilizing)'],
          hint1: 'Positive = the change feeds on itself and grows. Negative = the change is counteracted.',
          hint2: 'Ice–albedo, permafrost methane, and water vapor all *amplify* warming.',
          hint3: 'Extra plant growth that pulls CO₂ back out *opposes* the warming — that\'s stabilizing.',
          explanation: 'Ice–albedo, permafrost-methane, and water-vapor loops all amplify warming (positive). CO₂ fertilization removes some CO₂, opposing the change (negative/stabilizing).',
        },
      },
      {
        id: 'apecc4-ice-albedo',
        type: 'text' as const,
        content: `## Spotlight: The Ice–Albedo Feedback

This is the feedback the exam loves most, so make it automatic.

$$\\text{warming} \\rightarrow \\text{ice melts} \\rightarrow \\text{albedo}\\downarrow \\rightarrow \\text{absorption}\\uparrow \\rightarrow \\text{more warming}$$

- Fresh snow/ice has a **high albedo** (~0.8–0.9): it reflects most sunlight.
- Open ocean has a **low albedo** (~0.06): it absorbs most sunlight.

So when bright ice is replaced by dark water, the surface flips from *reflecting* to *absorbing* — and the loop reinforces itself. This is a major reason the **Arctic is warming roughly twice as fast** as the global average (**Arctic amplification**).

> 🔑 **Tie it together:** albedo is the bridge between the energy balance (Part 1) and feedbacks (Part 4). Anything that **darkens** Earth's surface (melting ice, soot on snow) lowers albedo and warms; anything that **brightens** it (new ice, reflective aerosols, light clouds) raises albedo and cools.`,
      },
      {
        id: 'apecc4-q-albedo',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'In the ice–albedo feedback, why does melting sea ice accelerate warming?',
              options: [
                'Dark open ocean has a lower albedo than ice, so it absorbs more sunlight',
                'Melting ice releases large amounts of CO₂',
                'Open ocean reflects more sunlight than ice',
                'Liquid water cannot absorb infrared radiation',
              ],
              correctAnswer: 0,
              explanation: 'Bright ice (high albedo) reflects sunlight; dark ocean (low albedo) absorbs it. Replacing ice with water increases absorption, which causes more warming and more melting — a positive feedback.',
            },
            {
              question: 'Why is a thawing-permafrost feedback especially concerning?',
              options: [
                'It can release stored methane and CO₂, which cause still more warming and more thawing',
                'It permanently raises Earth\'s albedo',
                'It removes greenhouse gases from the atmosphere',
                'It only affects weather, not climate',
              ],
              correctAnswer: 0,
              explanation: 'Permafrost stores vast amounts of carbon. As it thaws, it releases CH₄ and CO₂, amplifying warming — a self-reinforcing (positive) feedback that is difficult to reverse.',
            },
          ],
        },
      },
      {
        id: 'apecc4-tipping',
        type: 'text' as const,
        content: `## Tipping Points

A **tipping point** is a threshold beyond which a change becomes **self-sustaining and hard to reverse**, even if emissions later fall. Crossing one can lock in large impacts.

Commonly cited tipping elements:
- **Collapse of major ice sheets** (Greenland, West Antarctica) → multi-meter sea-level rise over centuries
- **Large-scale permafrost thaw** → a big methane/CO₂ release
- **Amazon rainforest dieback** → forest flips from carbon sink to carbon source
- **Disruption of ocean circulation** (e.g., the AMOC, which moves heat through the Atlantic)

> ⚠️ **Why tipping points justify urgency:** Many climate impacts are **gradual and reversible-ish**, but tipping points are **abrupt and effectively permanent** on human timescales. The precautionary principle says: avoid crossing thresholds you can't uncross.`,
      },
      {
        id: 'apecc4-ib-albedo',
        type: 'input-boxes' as const,
        content: `**Albedo Arithmetic** 🧮

Albedo is the fraction of sunlight reflected. Fresh sea ice has an albedo of about $0.80$; open ocean has an albedo of about $0.06$.

**1)** What fraction of incoming sunlight does fresh sea ice **absorb** (i.e., $1 - \\text{albedo}$)? Enter a decimal.

**2)** What fraction does open ocean absorb? Enter a decimal.`,
        exercise: {
          boxes: 2,
          correctAnswers: ['0.20', '0.94'],
          hint1: 'Absorbed fraction $= 1 - \\text{albedo}$.',
          hint2: 'Ice: $1 - 0.80$.',
          hint3: 'Ocean: $1 - 0.06$.',
          explanation: '1) Ice absorbs $1 - 0.80 = 0.20$. 2) Ocean absorbs $1 - 0.06 = 0.94$. Replacing ice with ocean jumps absorption from 20% to 94% — that surge is the engine of the ice–albedo feedback.',
        },
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

**Part 5 of 7 — Impacts on Ecosystems, Oceans & People**

---

> 🔑 **The Idea:** Warming isn't just "hotter days." It reshapes sea level, ocean chemistry, species ranges, weather extremes, and human health and security. The exam expects you to connect a **cause** to its **downstream consequence**.`,
      },
      {
        id: 'apecc5-sealevel',
        type: 'text' as const,
        content: `## Sea-Level Rise: Two Causes

Global sea level is rising for **two** distinct reasons — know both:

1. **Thermal expansion** — water *expands* as it warms. As the ocean absorbs heat, the same mass of water takes up more volume. This is currently a major contributor.
2. **Melting land ice** — glaciers and the Greenland/Antarctic **ice sheets** add new water to the ocean.

> ⚠️ **Critical exam distinction:** Melting **sea ice** (already floating, like Arctic pack ice) does **NOT** raise sea level — it already displaces its weight in water (Archimedes' principle). Only melting **land-based** ice adds water and raises sea level.

**Consequences of sea-level rise:** coastal flooding, **saltwater intrusion** into freshwater aquifers and farmland, loss of coastal wetlands, and displacement of people in low-lying areas and island nations.`,
      },
      {
        id: 'apecc5-q-sealevel',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Which of the following does NOT directly contribute to global sea-level rise?',
              options: [
                'Melting of floating Arctic sea ice',
                'Thermal expansion of warming ocean water',
                'Melting of the Greenland ice sheet',
                'Melting of mountain glaciers',
              ],
              correctAnswer: 0,
              explanation: 'Floating sea ice already displaces its own weight in water, so melting it doesn\'t change sea level. Thermal expansion and melting *land* ice (Greenland, glaciers) both raise it.',
            },
            {
              question: 'The two main physical causes of current sea-level rise are:',
              options: [
                'Thermal expansion of seawater and melting of land-based ice',
                'Increased rainfall and more rivers',
                'Higher atmospheric pressure and stronger winds',
                'Melting sea ice and increased evaporation',
              ],
              correctAnswer: 0,
              explanation: 'Warming water expands (thermal expansion), and melting glaciers and ice sheets add new water from land — together these drive sea-level rise.',
            },
          ],
        },
      },
      {
        id: 'apecc5-ocean-chem',
        type: 'text' as const,
        content: `## Ocean Acidification: The "Other CO₂ Problem"

The ocean absorbs roughly a quarter of the CO₂ we emit. That's good for the atmosphere but bad for ocean chemistry:

$$\\text{CO}_2 + \\text{H}_2\\text{O} \\rightarrow \\text{H}_2\\text{CO}_3 \\rightarrow \\text{H}^+ + \\text{HCO}_3^-$$

Dissolved CO₂ forms **carbonic acid**, releasing **H⁺** ions. More H⁺ means a **lower pH** — the ocean becomes more acidic. Surface-ocean pH has already dropped from about **8.2 to ~8.1** since pre-industrial times (a ~30% increase in H⁺, because pH is logarithmic).

> ⚠️ **Why it harms life:** Extra H⁺ ions tie up **carbonate ($\\text{CO}_3^{2-}$)** that organisms like **corals, oysters, clams, and pteropods** need to build calcium-carbonate (CaCO₃) shells and skeletons. Acidification makes shell-building harder and can dissolve existing shells.

> 💡 **Separate from warming:** Ocean acidification is caused by CO₂ chemistry, **not** by temperature. It would happen even if CO₂ trapped no heat at all. Don't confuse it with **coral bleaching**, which is driven by *warming* water stressing corals into expelling their symbiotic algae.`,
      },
      {
        id: 'apecc5-dd-impacts',
        type: 'dropdown-select' as const,
        content: `**Match Cause to Effect** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Ocean absorbs CO₂ → forms carbonic acid →', options: ['ocean pH drops (acidification)', 'ocean pH rises', 'sea level falls', 'albedo increases'] },
            { label: 'Warmer water stresses corals → algae expelled →', options: ['coral bleaching', 'ocean acidification', 'thermal expansion', 'permafrost thaw'] },
            { label: 'Sea level rises along the coast →', options: ['saltwater intrusion into aquifers', 'more freshwater inland', 'higher albedo', 'cooler oceans'] },
            { label: 'Warming shifts climate zones poleward → species:', options: ['ranges shift toward the poles / higher elevations', 'all go extinct instantly', 'ranges shift toward the equator', 'stop reproducing entirely'] },
          ],
          correctAnswers: ['ocean pH drops (acidification)', 'coral bleaching', 'saltwater intrusion into aquifers', 'ranges shift toward the poles / higher elevations'],
          hint1: 'Carbonic acid releases H⁺ ions, which lower pH.',
          hint2: 'Bleaching is a *temperature* effect; acidification is a *chemistry* effect.',
          hint3: 'As regions warm, suitable habitat moves toward cooler poles and higher elevations.',
          explanation: 'CO₂ → carbonic acid → lower pH (acidification). Warming → bleaching. Higher seas → saltwater intrusion. Warming shifts species ranges poleward and upslope, chasing tolerable temperatures.',
        },
      },
      {
        id: 'apecc5-human',
        type: 'text' as const,
        content: `## Impacts on Species and People

**Ecosystems & species:**
- **Range shifts** toward the poles and to higher elevations as species track suitable temperatures.
- **Phenology mismatches** — timing of migration, flowering, and breeding falls out of sync (e.g., a bird arrives after its insect prey has peaked).
- **Coral reefs, alpine, and polar species** are especially vulnerable; some have "nowhere cooler to go."

**Humans:**
- **More extreme weather** — heat waves, intense droughts, heavier downpours, and stronger hurricanes (warmer oceans fuel them).
- **Agriculture** — shifting growing zones, water stress, and new pest ranges threaten food security.
- **Health** — heat-related illness and an expanding range for vector-borne diseases (e.g., malaria, dengue) as warm zones widen.
- **Environmental justice** — the people least responsible for emissions (low-income communities, small island nations) often bear the **worst** impacts and have the **fewest** resources to adapt. These groups become **climate refugees** when home regions become unlivable.

> 💡 **Connect the dots:** A single cause cascades. *Warming → less mountain snowpack → less summer river flow → water shortages + crop failure → migration + conflict.* The exam rewards this chain-of-consequence reasoning.`,
      },
      {
        id: 'apecc5-q-human',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'As regional climates warm, many species shift their ranges. In which direction do they generally move?',
              options: [
                'Toward the poles and to higher elevations',
                'Toward the equator and to lower elevations',
                'They do not move at all',
                'Randomly, with no consistent pattern',
              ],
              correctAnswer: 0,
              explanation: 'Species track tolerable temperatures, so as their range warms they shift poleward and upslope toward cooler conditions. Species already at the poles or mountaintops can run out of cooler habitat.',
            },
            {
              question: 'Why is climate change considered an environmental justice issue?',
              options: [
                'The communities least responsible for emissions often suffer the worst impacts and have the fewest resources to adapt',
                'Wealthy nations always experience the most severe damage',
                'Climate impacts are distributed perfectly evenly worldwide',
                'Only the people who emit the most CO₂ are harmed by it',
              ],
              correctAnswer: 0,
              explanation: 'Low-income communities and small island nations contribute little to global emissions yet face severe impacts and have limited adaptive capacity — an unequal burden, hence an environmental-justice concern.',
            },
          ],
        },
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

**Part 6 of 7 — Solutions: Mitigation, Adaptation & Policy**

---

> 🔑 **The Idea:** Responses fall into two big buckets. **Mitigation** reduces the *cause* (cut greenhouse-gas emissions or remove gases from the air). **Adaptation** reduces the *harm* from changes already underway. We need both.`,
      },
      {
        id: 'apecc6-mit-adapt',
        type: 'text' as const,
        content: `## Mitigation vs. Adaptation

| | **Mitigation** | **Adaptation** |
|---|---------------|----------------|
| **Goal** | Reduce greenhouse-gas emissions / draw them down | Reduce vulnerability to impacts already happening |
| **Tackles** | The *cause* | The *consequences* |
| **Examples** | Renewable energy, efficiency, reforestation, carbon capture, electric vehicles | Sea walls, drought-resistant crops, early-warning systems, managed retreat from coasts |

> 💡 **Quick test:** If an action **lowers emissions or pulls CO₂ out of the air**, it's mitigation. If it **helps people/ecosystems cope with warming that's already locked in**, it's adaptation. Building a sea wall doesn't reduce CO₂ — it's adaptation. Switching a grid to solar is mitigation.`,
      },
      {
        id: 'apecc6-dd-mitadapt',
        type: 'dropdown-select' as const,
        content: `**Mitigation or Adaptation?** 🔽`,
        exercise: {
          dropdowns: [
            { label: 'Replacing a coal plant with wind turbines:', options: ['Mitigation', 'Adaptation'] },
            { label: 'Building sea walls to protect a coastal city:', options: ['Adaptation', 'Mitigation'] },
            { label: 'Planting trees to absorb CO₂ (reforestation):', options: ['Mitigation', 'Adaptation'] },
            { label: 'Breeding drought-tolerant crop varieties:', options: ['Adaptation', 'Mitigation'] },
            { label: 'Capturing CO₂ from a smokestack and storing it underground:', options: ['Mitigation', 'Adaptation'] },
          ],
          correctAnswers: ['Mitigation', 'Adaptation', 'Mitigation', 'Adaptation', 'Mitigation'],
          hint1: 'Mitigation attacks the cause (emissions/CO₂); adaptation manages the consequences.',
          hint2: 'Sea walls and drought-tolerant crops cope with impacts — they don\'t cut CO₂.',
          hint3: 'Wind, reforestation, and carbon capture all reduce or remove greenhouse gases.',
          explanation: 'Wind power, reforestation, and carbon capture reduce/remove greenhouse gases (mitigation). Sea walls and drought-tolerant crops help us live with impacts already underway (adaptation).',
        },
      },
      {
        id: 'apecc6-energy',
        type: 'text' as const,
        content: `## Mitigation Strategies in Detail

**Decarbonize energy** (the biggest lever, since fossil fuels are the top source):
- **Renewables** — solar, wind, hydro, geothermal: little to no operating CO₂.
- **Nuclear** — low-carbon but raises waste and safety concerns.
- **Energy efficiency** — the cheapest "source" of all; the cleanest kWh is the one you never use.

**Manage carbon:**
- **Reforestation / afforestation** — grow new carbon sinks.
- **Carbon capture and storage (CCS)** — trap CO₂ before it enters the air and store it underground.
- **Reduce CH₄ and N₂O** — fix gas leaks, manage livestock and manure, use fertilizer efficiently.

**Policy tools (put a price on carbon):**

| Tool | How It Works |
|------|--------------|
| **Carbon tax** | A fee per ton of CO₂ emitted — makes polluting more expensive |
| **Cap-and-trade** | A government **cap** on total emissions; companies **trade** permits, so cuts happen where they're cheapest |
| **Subsidies / standards** | Support clean tech (tax credits) and set efficiency/emission rules |

> 🔑 **International agreements:** The **Paris Agreement (2015)** has nations set voluntary pledges to limit warming to well below $2\\,^{\\circ}\\text{C}$ (ideally $1.5\\,^{\\circ}\\text{C}$). Earlier, the **Montreal Protocol (1987)** — though aimed at the ozone layer — also slowed warming, because CFCs are potent greenhouse gases. The **Kyoto Protocol** was an earlier emissions treaty.`,
      },
      {
        id: 'apecc6-q-policy',
        type: 'multiple-choice' as const,
        content: `**Concept Check** 🎯`,
        exercise: {
          questions: [
            {
              question: 'Under a cap-and-trade system, how are emissions reduced?',
              options: [
                'A total emissions cap is set, and companies buy/sell permits so reductions happen where they cost least',
                'Every company must cut emissions by the exact same amount',
                'The government directly operates all factories',
                'A flat fee is charged on each gallon of gasoline regardless of emissions',
              ],
              correctAnswer: 0,
              explanation: 'Cap-and-trade caps total emissions and lets firms trade permits. Companies that can cut cheaply do so and sell permits; the market drives reductions at the lowest overall cost.',
            },
            {
              question: 'Which strategy is the most effective single lever for reducing CO₂ emissions, given the largest source?',
              options: [
                'Transitioning electricity and transportation away from fossil fuels',
                'Building taller smokestacks',
                'Relocating coastal cities',
                'Painting roofs white',
              ],
              correctAnswer: 0,
              explanation: 'Burning fossil fuels is the dominant CO₂ source, so decarbonizing energy and transport addresses the cause most directly. The other options are minor or are adaptation, not mitigation.',
            },
            {
              question: 'The 2015 Paris Agreement is best described as:',
              options: [
                'An international accord in which countries pledge voluntary targets to limit warming well below 2 °C',
                'A binding U.S. law banning all fossil fuels',
                'A treaty specifically designed to repair the ozone layer',
                'A cap-and-trade program limited to the European Union',
              ],
              correctAnswer: 0,
              explanation: 'The Paris Agreement is a global accord with nationally determined (voluntary) pledges aiming to keep warming well below 2 °C, ideally 1.5 °C. The ozone treaty is the Montreal Protocol.',
            },
          ],
        },
      },
      {
        id: 'apecc6-ib-savings',
        type: 'input-boxes' as const,
        content: `**Emissions-Reduction Math** 🧮

**1)** A power company emits $500{,}000$ tons of CO₂ per year and pledges a $40\\%$ reduction. How many tons will it emit per year after the cut?

**2)** A $\\$50$-per-ton carbon tax is applied to a factory that emits $2{,}000$ tons of CO₂. What is the annual tax bill, in dollars? (Enter just the number.)`,
        exercise: {
          boxes: 2,
          correctAnswers: ['300000', '100000'],
          hint1: 'A 40% reduction means 60% of emissions remain.',
          hint2: 'Part 1: $500{,}000 \\times 0.60$.',
          hint3: 'Part 2: tax = emissions × rate $= 2{,}000 \\times 50$.',
          explanation: '1) After a 40% cut, 60% remains: $500{,}000 \\times 0.60 = 300{,}000$ tons. 2) $2{,}000 \\times \\$50 = \\$100{,}000$ per year.',
        },
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

**Part 7 of 7 — Synthesis, Mixed Practice & Exit Quiz**

---

You now understand the full arc: the **energy balance** and natural greenhouse effect (Part 1), the **gases** and their potency (Part 2), the **evidence** and **carbon cycle** (Part 3), **feedbacks** and **tipping points** (Part 4), **impacts** (Part 5), and **solutions** (Part 6). Let's tie it together and confirm mastery.`,
      },
      {
        id: 'apecc7-summary',
        type: 'text' as const,
        content: `## Quick Reference

| Concept | The One-Line Version |
|---------|----------------------|
| **Greenhouse effect** | Atmosphere lets shortwave sunlight in, traps outgoing longwave IR |
| **Natural vs. enhanced** | Natural keeps us +33 °C; humans *enhance* it with extra GHGs |
| **GWP** | Heat trapped per mass over 100 yr, relative to CO₂ = 1 |
| **Top CO₂ source** | Burning fossil fuels (coal > oil > gas in carbon intensity) |
| **Carbon sink vs. source** | Sink removes CO₂ (forests, oceans); source adds it (combustion) |
| **Ice–albedo feedback** | Melting ice → darker surface → more absorption → more warming (positive) |
| **Sea-level rise** | Thermal expansion + melting *land* ice (not floating sea ice) |
| **Ocean acidification** | CO₂ → carbonic acid → lower pH → harder shell-building |
| **Mitigation vs. adaptation** | Mitigation cuts the cause; adaptation manages the harm |

> ⚠️ **The five most common exam traps:** (1) confusing weather with climate, (2) thinking the greenhouse effect is inherently bad, (3) confusing greenhouse warming with ozone depletion, (4) thinking melting *sea* ice raises sea level, and (5) confusing acidification (chemistry) with bleaching (temperature). Master these five and you've beaten most of the unit's tricks.`,
      },
      {
        id: 'apecc7-mixed',
        type: 'multiple-choice' as const,
        content: `**Mixed Practice** 🎯`,
        exercise: {
          questions: [
            {
              question: 'A student claims, "The hole in the ozone layer is what causes global warming." What is the best correction?',
              options: [
                'These are different problems: ozone depletion (CFCs in the stratosphere) is distinct from the greenhouse effect (CO₂ and other GHGs trapping heat)',
                'They are exactly the same process',
                'Ozone depletion cools the planet, which causes warming',
                'Global warming is caused only by the ozone layer thinning',
              ],
              correctAnswer: 0,
              explanation: 'Ozone depletion (stratospheric, caused by CFCs) and the greenhouse effect (tropospheric heat-trapping, mostly CO₂) are separate issues. They share CFCs as a connection but are not the same mechanism.',
            },
            {
              question: 'Which sequence correctly describes the ice–albedo positive feedback?',
              options: [
                'Warming → ice melts → albedo decreases → more sunlight absorbed → more warming',
                'Warming → ice forms → albedo increases → less absorption → cooling',
                'Cooling → ice melts → albedo increases → more warming',
                'Warming → albedo increases → more reflection → cooling',
              ],
              correctAnswer: 0,
              explanation: 'Melting bright ice exposes dark ocean/land, lowering albedo, so more sunlight is absorbed, causing further warming and more melting — a self-amplifying loop.',
            },
            {
              question: 'A coastal town builds a sea wall, switches its buses to electric, and plants a new forest. Which action is purely ADAPTATION?',
              options: [
                'Building the sea wall',
                'Switching buses to electric',
                'Planting the forest',
                'All three are adaptation',
              ],
              correctAnswer: 0,
              explanation: 'A sea wall manages an impact (rising seas) without reducing emissions — adaptation. Electric buses and reforestation cut/remove CO₂ — mitigation.',
            },
          ],
        },
      },
      {
        id: 'apecc7-ib-synthesis',
        type: 'input-boxes' as const,
        content: `**Synthesis Numbers** 🧮

**1)** Pre-industrial CO₂ was $280$ ppm; a future scenario projects $560$ ppm. By what factor (× the pre-industrial value) would CO₂ have increased? Enter a number.

**2)** Surface-ocean pH has fallen from about $8.2$ to about $8.1$. Enter the size of that pH drop (a positive decimal).`,
        exercise: {
          boxes: 2,
          correctAnswers: ['2', '0.1'],
          hint1: 'Part 1: divide the future value by the pre-industrial value, $560 \\div 280$.',
          hint2: '$560 / 280 = 2$ — a doubling.',
          hint3: 'Part 2: $8.2 - 8.1$.',
          explanation: '1) $560 \\div 280 = 2$, a doubling of pre-industrial CO₂. 2) $8.2 - 8.1 = 0.1$ pH-unit drop — which, because pH is logarithmic, is roughly a 30% rise in H⁺ concentration.',
        },
      },
      {
        id: 'apecc7-exit-quiz',
        type: 'multiple-choice' as const,
        content: `**Exit Quiz** ✅

Answer all three to finish the lesson.`,
        exercise: {
          questions: [
            {
              question: 'Which best explains why melting Arctic SEA ice does not raise global sea level, while melting the Greenland ICE SHEET does?',
              options: [
                'Floating sea ice already displaces its weight in water; the Greenland ice sits on land and adds new water to the ocean',
                'Sea ice is saltier, so it shrinks when it melts',
                'The Greenland ice sheet is colder',
                'Sea ice melts into the air rather than the ocean',
              ],
              correctAnswer: 0,
              explanation: 'By Archimedes\' principle, floating ice already displaces its own weight, so melting it doesn\'t change sea level. Land-based ice (Greenland, glaciers) adds new water, raising sea level.',
            },
            {
              question: 'Despite having a Global Warming Potential of only 1, CO₂ is the dominant driver of human-caused warming primarily because:',
              options: [
                'It is emitted in enormous quantities and remains in the atmosphere for centuries',
                'It has the highest GWP of all greenhouse gases',
                'It is the only gas that absorbs infrared radiation',
                'It directly destroys stratospheric ozone',
              ],
              correctAnswer: 0,
              explanation: 'Total forcing = amount × potency × lifetime. CO₂\'s vast emissions volume and century-plus residence time outweigh its low per-molecule potency.',
            },
            {
              question: 'A new policy charges companies $\\$40$ per ton of CO₂ they emit. This is an example of:',
              options: [
                'A carbon tax — a mitigation policy that prices emissions',
                'An adaptation measure that protects against floods',
                'A negative climate feedback',
                'A Milankovitch cycle',
              ],
              correctAnswer: 0,
              explanation: 'A per-ton fee on emissions is a carbon tax: a market-based *mitigation* tool that makes polluting more expensive, encouraging emission cuts.',
            },
          ],
        },
      },
    ],
  },
]
