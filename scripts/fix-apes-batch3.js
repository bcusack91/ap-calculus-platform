const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 1. Atmosphere & Climate ───
write('apes-atmosphere-climate-part1.ts', `export const apesAtmosphereClimatePart1Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesac1-intro',
      type: 'text' as const,
      content: \`
# ☁️ Atmosphere & Climate

**Part 1 of 7 — Greenhouse Effect, Climate Change, and Global Impacts**

---

## Atmospheric Composition

| Gas | Percentage | Role |
|-----|-----------|------|
| **Nitrogen (N₂)** | 78% | Inert; cycled through nitrogen cycle |
| **Oxygen (O₂)** | 21% | Respiration; product of photosynthesis |
| **Argon (Ar)** | 0.93% | Inert noble gas |
| **Carbon dioxide (CO₂)** | 0.042% (420 ppm) | Major greenhouse gas; rising from fossil fuels |
| **Methane (CH₄)** | Trace (~1.9 ppm) | 80x stronger GHG than CO₂ over 20 years |
| **Nitrous oxide (N₂O)** | Trace (~0.33 ppm) | GHG from agriculture and fossil fuels |
| **Water vapor (H₂O)** | Variable (0-4%) | Strongest natural greenhouse gas |

---

## The Greenhouse Effect

| Step | Process |
|------|---------|
| 1 | Solar radiation (shortwave) passes through the atmosphere |
| 2 | Earth absorbs solar energy and warms up |
| 3 | Earth re-emits energy as infrared (longwave) radiation |
| 4 | Greenhouse gases absorb and re-emit infrared radiation |
| 5 | Heat is trapped, warming the lower atmosphere |

> 🔑 **The greenhouse effect is natural and necessary** — without it, Earth would average -18C instead of +15C. The PROBLEM is the **enhanced greenhouse effect** from human emissions of CO₂, CH₄, and N₂O.
      \`
    },
    {
      id: 'apesac1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which greenhouse gas is the MOST potent per molecule over a 20-year period?',
            options: [
              'Carbon dioxide (CO₂)',
              'Methane (CH₄)',
              'Nitrogen (N₂)',
              'Oxygen (O₂)'
            ],
            correctAnswer: 1,
            explanation: 'Methane (CH₄) is approximately 80 times more effective at trapping heat than CO₂ over 20 years. However, CO₂ persists much longer in the atmosphere, so it is the primary driver of long-term warming.'
          },
          {
            question: 'The greenhouse effect works by:',
            options: [
              'Blocking all sunlight from reaching Earth',
              'Trapping outgoing infrared (longwave) radiation in the atmosphere',
              'Creating a physical barrier of clouds around Earth',
              'Increasing the amount of UV radiation reaching the surface'
            ],
            correctAnswer: 1,
            explanation: 'Greenhouse gases are transparent to incoming shortwave solar radiation but absorb and re-emit outgoing longwave (infrared) radiation, trapping heat in the lower atmosphere.'
          }
        ]
      }
    },
    {
      id: 'apesac1-content',
      type: 'text' as const,
      content: \`
## Evidence of Climate Change

| Evidence | Observation |
|----------|-----------|
| **Rising global temperature** | +1.1C since pre-industrial era |
| **Sea level rise** | ~3.6 mm/year (thermal expansion + ice melt) |
| **Retreating glaciers** | Nearly all major glaciers shrinking |
| **Arctic sea ice decline** | 13% decrease per decade since 1979 |
| **Ocean acidification** | pH decreased by 0.1 units (30% more acidic) |
| **Extreme weather** | More intense hurricanes, heat waves, droughts |
| **CO₂ levels** | 280 ppm (pre-industrial) to 420+ ppm (current) |

## Feedback Loops

| Type | Definition | Example |
|------|-----------|---------|
| **Positive feedback** | Change amplifies itself | Ice melting → less reflection → more absorption → more melting |
| **Negative feedback** | Change reduces itself | More CO₂ → more plant growth → more CO₂ absorbed |

### Key Positive Feedback Loops
1. **Ice-albedo feedback:** Melting ice exposes dark water/land → absorbs more heat → more melting
2. **Permafrost-methane feedback:** Warming thaws permafrost → releases CH₄ → more warming → more thawing
3. **Water vapor feedback:** Warming evaporates more water → water vapor traps more heat → more warming
      \`
    },
    {
      id: 'apesac1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Pre-industrial CO₂ levels were approximately _______ ppm; today they exceed 420 ppm.

2) A feedback loop where change amplifies itself (like melting ice causing more warming) is called a _______ feedback loop.

3) Oceans absorbing excess CO₂ causes ocean _______, which harms coral reefs and shellfish.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['280', 'positive', 'acidification'],
        hint1: 'Roughly two hundred and eighty.',
        hint2: 'The change makes itself stronger.',
        hint3: 'CO₂ + H₂O forms carbonic acid.',
        explanation: 'Pre-industrial CO₂ = ~280 ppm. Positive feedback = self-amplifying. CO₂ dissolving in oceans = acidification (lower pH).'
      }
    },
    {
      id: 'apesac1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Melting Arctic ice exposes dark ocean → absorbs more heat → more ice melts. This is ___',
            options: ['A positive feedback loop (ice-albedo)', 'A negative feedback loop', 'The ozone hole', 'The Coriolis effect']
          },
          {
            label: 'The natural greenhouse effect keeps Earth at +15C instead of -18C. This is ___',
            options: ['Beneficial and necessary for life', 'A recent human-caused phenomenon', 'Only caused by CO₂ emissions', 'The same as global warming']
          },
          {
            label: 'Sea level rise is caused by thermal expansion AND ___',
            options: ['Melting of land-based ice (glaciers and ice sheets)', 'Increased ocean evaporation', 'Tectonic plate movement', 'Decreased volcanic activity']
          }
        ],
        correctAnswers: ['A positive feedback loop (ice-albedo)', 'Beneficial and necessary for life', 'Melting of land-based ice (glaciers and ice sheets)'],
        hint1: 'The change makes itself worse.',
        hint2: 'It existed before humans burned fossil fuels.',
        hint3: 'Think ice on land flowing into oceans.',
        explanation: 'Ice-albedo = positive feedback. Natural greenhouse effect = essential. Sea level rise = thermal expansion + melting land ice.'
      }
    },
    {
      id: 'apesac1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Atmosphere & Climate

- Know the difference between the **natural greenhouse effect** and the **enhanced greenhouse effect**
- **Positive vs negative feedback** — be able to identify and explain examples
- Understand that CO₂ is the primary long-term driver even though CH₄ is more potent per molecule
- **Ocean acidification** (CO₂ + H₂O → carbonic acid) is a commonly tested topic separate from warming
- Ice-albedo feedback is the most commonly tested positive feedback loop
- Know the difference between **weather** (short-term) and **climate** (long-term patterns)
      \`
    },
    {
      id: 'apesac1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'As Arctic permafrost thaws due to rising temperatures, trapped methane is released. This accelerates warming, which causes more permafrost to thaw. This scenario best illustrates:',
            options: [
              'A negative feedback loop that will stabilize climate',
              'A positive feedback loop that amplifies climate change',
              'The natural carbon cycle functioning normally',
              'A decrease in greenhouse gas concentrations'
            ],
            correctAnswer: 1,
            explanation: 'This is a positive feedback loop: warming → permafrost thaw → methane release → more warming → more thawing. It amplifies the original change rather than reducing it.'
          },
          {
            question: 'Coral reef bleaching is linked to climate change because:',
            options: [
              'Warmer water causes corals to expel symbiotic algae, and ocean acidification weakens coral skeletons',
              'Corals thrive in warmer, more acidic water',
              'Climate change increases the salinity of ocean water',
              'Melting ice directly crushes coral reefs'
            ],
            correctAnswer: 0,
            explanation: 'Coral bleaching occurs when warmer water stresses corals, causing them to expel zooxanthellae (symbiotic algae). Additionally, ocean acidification (from dissolved CO₂) makes it harder for corals to build calcium carbonate skeletons.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 2. Atmospheric Pollution ───
write('apes-atmospheric-pollution-part1.ts', `export const apesAtmosphericPollutionPart1Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesap1-intro',
      type: 'text' as const,
      content: \`
# 🏭 Atmospheric Pollution

**Part 1 of 7 — Air Pollutants, Smog, and Ozone**

---

## Primary vs Secondary Pollutants

| Type | Definition | Examples |
|------|-----------|---------|
| **Primary** | Emitted directly from a source | CO, SO₂, NO, particulate matter (PM), VOCs |
| **Secondary** | Formed by chemical reactions in the atmosphere | Ozone (O₃), sulfuric acid (H₂SO₄), nitric acid |

---

## Major Air Pollutants (EPA Criteria Pollutants)

| Pollutant | Source | Health/Environmental Effect |
|-----------|--------|---------------------------|
| **CO (carbon monoxide)** | Incomplete combustion (vehicles) | Binds to hemoglobin; reduces oxygen delivery |
| **SO₂ (sulfur dioxide)** | Burning coal, volcanic eruptions | Acid rain, respiratory problems |
| **NOₓ (nitrogen oxides)** | Vehicle exhaust, power plants | Acid rain, smog formation |
| **PM (particulate matter)** | Combustion, dust, construction | Lung damage, reduced visibility |
| **O₃ (ground-level ozone)** | Secondary: UV + NOₓ + VOCs | Respiratory damage, crop damage |
| **Pb (lead)** | Formerly gasoline; paint, smelters | Neurotoxin, developmental damage in children |

> 🔑 **Ozone paradox:** Ground-level O₃ is a harmful pollutant (smog), but stratospheric O₃ is beneficial (blocks UV radiation). "Good up high, bad nearby."
      \`
    },
    {
      id: 'apesap1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Ground-level ozone is a secondary pollutant because:',
            options: [
              'It is emitted directly from car exhaust pipes',
              'It forms from chemical reactions between NOₓ and VOCs in the presence of sunlight',
              'It is the same as stratospheric ozone',
              'It comes from volcanic eruptions'
            ],
            correctAnswer: 1,
            explanation: 'Ground-level ozone is NOT emitted directly. It forms when nitrogen oxides (NOₓ) react with volatile organic compounds (VOCs) in the presence of UV sunlight — making it a secondary pollutant.'
          },
          {
            question: 'Which statement about ozone is correct?',
            options: [
              'All ozone is harmful to human health',
              'Ground-level ozone is harmful; stratospheric ozone protects against UV',
              'Stratospheric ozone causes respiratory problems',
              'Ground-level ozone protects against UV radiation'
            ],
            correctAnswer: 1,
            explanation: 'Stratospheric ozone (good up high) filters harmful UV radiation. Ground-level ozone (bad nearby) is a component of smog that damages lungs and crops.'
          }
        ]
      }
    },
    {
      id: 'apesap1-content',
      type: 'text' as const,
      content: \`
## Types of Smog

| Type | Formation | Location | Worst Time |
|------|----------|----------|-----------|
| **Industrial (London/gray) smog** | SO₂ + particulates from coal burning + fog | Cold, humid climates | Winter mornings |
| **Photochemical (LA/brown) smog** | NOₓ + VOCs + sunlight → O₃ | Warm, sunny cities with traffic | Summer afternoons |

### Thermal Inversions
- Normally: warm air rises, carrying pollutants upward
- **Inversion:** Layer of warm air traps cool air (and pollutants) near the surface
- Makes smog much worse; dangerous for people with respiratory conditions

## Acid Deposition (Acid Rain)

| Step | Process |
|------|---------|
| 1 | SO₂ and NOₓ emitted from coal plants and vehicles |
| 2 | React with water vapor: SO₂ → H₂SO₄; NOₓ → HNO₃ |
| 3 | Fall as acid rain, snow, fog, or dry particles |
| 4 | Effects: lake acidification, forest damage, building/statue erosion |

- Normal rain pH: ~5.6 (slightly acidic due to dissolved CO₂)
- Acid rain pH: < 5.0 (can be as low as 4.0)

## Stratospheric Ozone Depletion
- **Cause:** CFCs (chlorofluorocarbons) from refrigerants, aerosol cans
- CFCs release chlorine atoms that destroy O₃ molecules catalytically
- One Cl atom can destroy ~100,000 O₃ molecules
- **Montreal Protocol (1987):** International treaty phasing out CFCs — major success story
      \`
    },
    {
      id: 'apesap1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Photochemical smog contains ground-level _______ and forms on warm, sunny days in cities with heavy traffic.

2) The international treaty that successfully phased out CFCs to protect the ozone layer is the _______ Protocol.

3) Acid rain is caused primarily by _______ dioxide and nitrogen oxides reacting with water vapor.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['ozone', 'Montreal', 'sulfur'],
        hint1: 'O₃ — the secondary pollutant in brown smog.',
        hint2: 'Named after a city in Canada.',
        hint3: 'SO₂ — produced by burning coal.',
        explanation: 'Photochemical smog = ground-level ozone. Montreal Protocol (1987) = CFC phase-out. Acid rain = SO₂ + NOₓ + H₂O.'
      }
    },
    {
      id: 'apesap1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A layer of warm air trapping pollutants near the ground is called a ___',
            options: ['Thermal inversion', 'Greenhouse effect', 'Ozone hole', 'Acid deposition']
          },
          {
            label: 'CO emitted from a car tailpipe is a ___ pollutant',
            options: ['Primary', 'Secondary', 'Stratospheric', 'Natural']
          },
          {
            label: 'Coal-burning smog in cold, foggy cities with SO₂ and particulates is ___ smog',
            options: ['Industrial (gray/London)', 'Photochemical (brown/LA)', 'Volcanic', 'Stratospheric']
          }
        ],
        correctAnswers: ['Thermal inversion', 'Primary', 'Industrial (gray/London)'],
        hint1: 'Warm air on top, cool polluted air trapped below.',
        hint2: 'Emitted directly, not formed by reactions.',
        hint3: 'Think London fog + coal smoke.',
        explanation: 'Thermal inversion traps pollutants. CO = primary (emitted directly). Coal + fog = industrial/London smog.'
      }
    },
    {
      id: 'apesap1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Atmospheric Pollution

- Know the 6 EPA criteria pollutants and their sources
- **Primary vs secondary:** if it forms from a chemical reaction in the atmosphere, it is secondary
- Industrial smog (SO₂, cold, coal) vs photochemical smog (O₃, hot, cars) — know conditions for each
- Clean Air Act (1970) regulates criteria pollutants; Montreal Protocol (1987) addresses CFCs
- Acid rain: SO₂ + NOₓ → acids; effects on lakes, forests, buildings
- The ozone layer is RECOVERING thanks to the Montreal Protocol — a rare environmental success
      \`
    },
    {
      id: 'apesap1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A city surrounded by mountains experiences a thermal inversion during winter. Residents report increased respiratory problems. The primary reason is:',
            options: [
              'Mountain winds are bringing in clean air from rural areas',
              'Warm air aloft traps cold air and pollutants near the surface, preventing dispersion',
              'The mountains block UV radiation needed to form ozone',
              'Cold air naturally contains fewer oxygen molecules'
            ],
            correctAnswer: 1,
            explanation: 'During a thermal inversion, warm air acts as a lid above cool surface air, trapping pollutants (CO, PM, SO₂) at ground level. Mountains worsen this by preventing horizontal air movement.'
          },
          {
            question: 'The Montreal Protocol is considered one of the most successful environmental agreements because:',
            options: [
              'It eliminated all air pollution worldwide',
              'It successfully phased out CFCs, allowing the ozone layer to begin recovering',
              'It ended all fossil fuel use',
              'It reversed global warming completely'
            ],
            correctAnswer: 1,
            explanation: 'The Montreal Protocol (1987) achieved near-universal ratification and successfully phased out CFC production. The ozone layer is now slowly recovering and is expected to return to pre-1980 levels by mid-century.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 3. Energy ───
write('apes-energy-part1.ts', `export const apesEnergyPart1Data = {
  topicSlug: 'apes-energy',
  sections: [
    {
      id: 'apesen1-intro',
      type: 'text' as const,
      content: \`
# ⚡ Energy Concepts & Resources

**Part 1 of 7 — Energy Sources, Efficiency, and Environmental Impact**

---

## Global Energy Mix

| Source | Share of Global Energy | Type |
|--------|----------------------|------|
| **Oil (petroleum)** | ~31% | Non-renewable fossil fuel |
| **Coal** | ~27% | Non-renewable fossil fuel |
| **Natural gas** | ~24% | Non-renewable fossil fuel |
| **Hydroelectric** | ~7% | Renewable |
| **Nuclear** | ~4% | Non-renewable (but low carbon) |
| **Wind/Solar/Other renewables** | ~7% | Renewable |

> 🔑 **Fossil fuels provide ~82% of global energy.** Transitioning to renewables is essential for reducing greenhouse gas emissions.

---

## Energy Concepts

| Concept | Definition |
|---------|-----------|
| **Energy efficiency** | Percentage of energy input that does useful work (not lost as heat) |
| **First Law of Thermodynamics** | Energy cannot be created or destroyed, only transformed |
| **Second Law of Thermodynamics** | Every energy transformation increases entropy (disorder); some energy always lost as heat |
| **Net energy** | Total energy output minus energy input to produce it |
| **EROI** | Energy Return on Investment: energy output / energy input |

### Energy Efficiency Examples

| System | Approximate Efficiency |
|--------|----------------------|
| Incandescent bulb | ~5% (95% lost as heat) |
| LED bulb | ~20-30% |
| Gasoline car engine | ~20-25% |
| Electric vehicle | ~85-90% |
| Natural gas power plant | ~40-60% |
| Coal power plant | ~33-40% |
      \`
    },
    {
      id: 'apesen1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Second Law of Thermodynamics states that:',
            options: [
              'Energy can be created from nothing',
              'Every energy transformation loses some energy as waste heat',
              'Energy efficiency can reach 100%',
              'Entropy decreases with each energy transfer'
            ],
            correctAnswer: 1,
            explanation: 'The Second Law states that every energy transformation increases entropy — some useful energy is always converted to waste heat, making 100% efficiency impossible.'
          },
          {
            question: 'Approximately what percentage of global energy comes from fossil fuels?',
            options: [
              'About 50%',
              'About 65%',
              'About 82%',
              'About 95%'
            ],
            correctAnswer: 2,
            explanation: 'Oil (~31%) + coal (~27%) + natural gas (~24%) = ~82% of global energy comes from fossil fuels, making the energy transition one of the biggest environmental challenges.'
          }
        ]
      }
    },
    {
      id: 'apesen1-content',
      type: 'text' as const,
      content: \`
## Cogeneration and Energy Conservation

| Strategy | Description | Benefit |
|----------|-----------|---------|
| **Cogeneration (CHP)** | Using waste heat from electricity generation for heating | Increases overall efficiency to 80%+ |
| **Energy Star appliances** | Certified high-efficiency devices | Reduce household energy use 10-50% |
| **Building insulation** | Reducing heat loss through walls, windows, roofs | Reduces heating/cooling energy needs |
| **Smart grid** | Digital technology managing electricity distribution | Reduces waste, integrates renewables |

## Carbon Footprint

- Total greenhouse gas emissions from an individual, organization, or activity
- Measured in tons of CO₂ equivalent (CO₂e) per year
- Average American: ~16 tons CO₂e/year (global average: ~4.5 tons)
- Largest contributions: transportation, home energy, food

## Environmental Justice and Energy
- Low-income communities and communities of color disproportionately bear pollution from power plants and refineries
- This intersection of social justice and environmental impact is called **environmental justice**
- Clean energy transition can help address these inequities
      \`
    },
    {
      id: 'apesen1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The three fossil fuels are oil (petroleum), coal, and natural _______.

2) Using waste heat from electricity generation for building heating is called _______ (or combined heat and power).

3) The total greenhouse gas emissions of an individual or organization measured in tons of CO₂ equivalent is called a carbon _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['gas', 'cogeneration', 'footprint'],
        hint1: 'The cleanest-burning fossil fuel.',
        hint2: 'CHP = Combined Heat and Power.',
        hint3: 'The impact you leave on the climate.',
        explanation: 'Natural gas = third fossil fuel. Cogeneration = using waste heat. Carbon footprint = total GHG emissions.'
      }
    },
    {
      id: 'apesen1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'An incandescent bulb converts only ~5% of electricity to light. The rest is lost as heat. This illustrates ___',
            options: ['Low energy efficiency and the Second Law of Thermodynamics', 'High energy efficiency', 'The First Law of Thermodynamics only', 'Cogeneration']
          },
          {
            label: 'A coal plant near a low-income neighborhood causing disproportionate health impacts is an example of ___',
            options: ['An environmental justice issue', 'Normal market economics', 'Energy efficiency', 'Net energy gain']
          },
          {
            label: 'EROI (Energy Return on Investment) measures ___',
            options: ['How much energy you get out compared to how much you put in', 'The financial cost of energy', 'The pollution per unit of energy', 'The efficiency of light bulbs']
          }
        ],
        correctAnswers: ['Low energy efficiency and the Second Law of Thermodynamics', 'An environmental justice issue', 'How much energy you get out compared to how much you put in'],
        hint1: '95% waste heat = very inefficient.',
        hint2: 'Pollution burden falls on vulnerable communities.',
        hint3: 'Output divided by input.',
        explanation: '5% efficiency = low (2nd Law). Disproportionate pollution = environmental justice. EROI = energy out / energy in.'
      }
    },
    {
      id: 'apesen1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Energy

- Know the **global energy mix** — fossil fuels dominate at ~82%
- Understand energy efficiency and be able to calculate it (useful output / total input x 100)
- The **Second Law of Thermodynamics** explains why 100% efficiency is impossible
- **Cogeneration** is the classic example of improving efficiency
- Know EROI: high EROI = efficient energy source. Oil used to have EROI of 100:1, now closer to 10:1
- Environmental justice questions are increasingly common on the AP exam
      \`
    },
    {
      id: 'apesen1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Replacing all incandescent bulbs in a building with LEDs would:',
            options: [
              'Increase energy use because LEDs cost more',
              'Reduce energy use by 75-80% for lighting while providing the same light output',
              'Have no effect on energy consumption',
              'Eliminate all electricity needs for the building'
            ],
            correctAnswer: 1,
            explanation: 'LEDs are 20-30% efficient vs. 5% for incandescent bulbs. For the same light output, LEDs use roughly 75-80% less electricity, significantly reducing energy demand and costs.'
          },
          {
            question: 'The most effective way to reduce total energy consumption in the United States would be:',
            options: [
              'Building more coal power plants',
              'Increasing energy efficiency in transportation and buildings',
              'Increasing oil drilling in new locations',
              'Extending daylight saving time'
            ],
            correctAnswer: 1,
            explanation: 'Energy efficiency is the cheapest, fastest way to reduce consumption. Improving vehicle fuel economy, building insulation, and appliance efficiency can dramatically reduce demand without reducing quality of life.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 4. Fossil Fuels & Nuclear ───
write('apes-fossil-fuels-nuclear-part1.ts', `export const apesFossilFuelsNuclearPart1Data = {
  topicSlug: 'apes-fossil-fuels-nuclear',
  sections: [
    {
      id: 'apesfn1-intro',
      type: 'text' as const,
      content: \`
# 🛢️ Fossil Fuels & Nuclear Energy

**Part 1 of 7 — Formation, Extraction, and Environmental Impacts**

---

## Fossil Fuel Formation

| Fuel | Formed From | Conditions | Time Scale |
|------|-----------|-----------|-----------|
| **Coal** | Ancient swamp plants compressed | Heat + pressure over millions of years | 300+ million years |
| **Oil (petroleum)** | Marine microorganisms buried in sediment | Heat + pressure; trapped in porous rock | 60-250 million years |
| **Natural gas** | Same as oil; lighter hydrocarbons | Higher heat/pressure than oil | 60-250 million years |

---

## Extraction Methods

| Method | Fuel | Environmental Concerns |
|--------|------|----------------------|
| **Surface mining (strip mining)** | Coal | Habitat destruction, acid mine drainage, erosion |
| **Mountaintop removal** | Coal | Destroys mountain ecosystems; valley fill |
| **Underground mining** | Coal | Subsidence, methane explosions, black lung disease |
| **Conventional drilling** | Oil/gas | Oil spills, habitat fragmentation, water contamination |
| **Hydraulic fracturing (fracking)** | Natural gas/oil | Water contamination, induced earthquakes, methane leaks |
| **Offshore drilling** | Oil/gas | Oil spill risk (Deepwater Horizon 2010) |

> 🔑 **Natural gas burns cleaner than coal** (less CO₂, no SO₂, less PM) but methane leaks during extraction reduce this advantage. Methane is 80x more potent as a GHG than CO₂ over 20 years.
      \`
    },
    {
      id: 'apesfn1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Fossil fuels are considered non-renewable because:',
            options: [
              'They can never form again under any conditions',
              'They form over millions of years, far slower than human consumption rates',
              'There are no fossil fuels remaining on Earth',
              'They are only found on other planets'
            ],
            correctAnswer: 1,
            explanation: 'Fossil fuels technically can form again, but the process takes tens to hundreds of millions of years — effectively non-renewable on human time scales.'
          },
          {
            question: 'A major environmental concern with hydraulic fracturing (fracking) is:',
            options: [
              'It produces more CO₂ than coal mining',
              'Potential groundwater contamination and induced seismic activity',
              'It only works in tropical climates',
              'It completely depletes all underground water'
            ],
            correctAnswer: 1,
            explanation: 'Fracking injects high-pressure fluid underground to fracture rock and release gas/oil. Concerns include chemical contamination of groundwater, methane migration, and small earthquakes from injection wells.'
          }
        ]
      }
    },
    {
      id: 'apesfn1-content',
      type: 'text' as const,
      content: \`
## Nuclear Energy

| Aspect | Detail |
|--------|--------|
| **Fuel** | Uranium-235 (U-235) |
| **Process** | Nuclear fission: splitting atoms releases enormous energy |
| **Electricity share** | ~10% of global electricity; ~20% in the US |
| **CO₂ emissions** | Near-zero during operation |
| **Waste** | Highly radioactive; remains dangerous for thousands of years |
| **Accidents** | Chernobyl (1986), Fukushima (2011), Three Mile Island (1979) |

### Nuclear Pros and Cons

| Pros | Cons |
|------|------|
| Very low CO₂ emissions | Radioactive waste storage (10,000+ years) |
| High energy density | Risk of catastrophic accidents |
| Reliable baseload power | High construction costs |
| Small land footprint | Uranium mining environmental impacts |
| Energy independence | Nuclear weapons proliferation risk |

## Comparing Fossil Fuels

| Fuel | CO₂ per kWh | SO₂ | PM | Other Issues |
|------|------------|-----|----|----|
| **Coal** | ~1,000 g | High | High | Ash, acid rain, mercury |
| **Oil** | ~840 g | Moderate | Moderate | Oil spills, habitat loss |
| **Natural gas** | ~490 g | Very low | Very low | Methane leaks, fracking concerns |
      \`
    },
    {
      id: 'apesfn1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Nuclear power plants generate electricity through nuclear _______ (splitting uranium atoms).

2) The fossil fuel that produces the MOST CO₂ per unit of energy is _______.

3) The 1986 nuclear disaster in Ukraine is known as the _______ accident.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['fission', 'coal', 'Chernobyl'],
        hint1: 'Splitting atoms apart (not fusion).',
        hint2: 'The dirtiest fossil fuel.',
        hint3: 'A city in northern Ukraine.',
        explanation: 'Nuclear fission = splitting atoms. Coal = highest CO₂/kWh (~1,000g). Chernobyl = worst nuclear disaster (1986).'
      }
    },
    {
      id: 'apesfn1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Source** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'An energy source that produces near-zero CO₂ during operation but creates radioactive waste is ___',
            options: ['Nuclear fission', 'Coal combustion', 'Natural gas', 'Solar photovoltaic']
          },
          {
            label: 'Injecting high-pressure fluid into rock to release trapped gas is ___',
            options: ['Hydraulic fracturing (fracking)', 'Mountaintop removal', 'Surface mining', 'Offshore drilling']
          },
          {
            label: 'Coal mining can cause acidic water to drain from mines into streams. This is called ___',
            options: ['Acid mine drainage', 'Eutrophication', 'Thermal pollution', 'Ocean acidification']
          }
        ],
        correctAnswers: ['Nuclear fission', 'Hydraulic fracturing (fracking)', 'Acid mine drainage'],
        hint1: 'Uranium-based, low carbon, waste concerns.',
        hint2: 'High-pressure fluid fractures underground rock.',
        hint3: 'Sulfuric acid from exposed minerals in mine sites.',
        explanation: 'Nuclear = low CO₂ + radioactive waste. Fracking = high-pressure fluid extraction. Acid mine drainage = acid from exposed coal mine minerals.'
      }
    },
    {
      id: 'apesfn1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Fossil Fuels & Nuclear

- Know the relative CO₂ emissions: coal > oil > natural gas
- Understand the trade-offs of **each** energy source — AP FRQs often ask for pros AND cons
- Nuclear: emphasize low CO₂ BUT radioactive waste problem
- **Fracking** is a hot topic — know the water contamination and seismic concerns
- Coal mining methods: surface (strip), mountaintop removal, underground — know impacts of each
- Be able to compare natural gas to coal (cleaner burning but methane leaks offset some benefits)
      \`
    },
    {
      id: 'apesfn1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A country wants to reduce CO₂ emissions while maintaining reliable baseload electricity. Which strategy would be MOST effective?',
            options: [
              'Building more coal power plants with carbon capture',
              'Replacing coal plants with nuclear power plants',
              'Increasing oil consumption for electricity',
              'Eliminating all electricity generation'
            ],
            correctAnswer: 1,
            explanation: 'Nuclear produces near-zero CO₂ during operation and provides reliable 24/7 baseload power, making it effective for replacing coal. However, waste disposal and safety remain challenges.'
          },
          {
            question: 'Switching from coal to natural gas for electricity generation reduces CO₂ emissions by approximately:',
            options: [
              '5-10%',
              '50% per kWh',
              '90% per kWh',
              '0% — they produce the same emissions'
            ],
            correctAnswer: 1,
            explanation: 'Natural gas produces ~490 g CO₂/kWh vs. coal at ~1,000 g CO₂/kWh — roughly a 50% reduction. However, methane leaks during extraction can reduce this climate benefit.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 5. Renewable Energy ───
write('apes-renewable-energy-part1.ts', `export const apesRenewableEnergyPart1Data = {
  topicSlug: 'apes-renewable-energy',
  sections: [
    {
      id: 'apesre1-intro',
      type: 'text' as const,
      content: \`
# 🌞 Renewable Energy

**Part 1 of 7 — Solar, Wind, Hydro, and Other Renewables**

---

## Renewable Energy Sources

| Source | How It Works | Share of Global Electricity |
|--------|------------|----------------------------|
| **Solar PV** | Photovoltaic cells convert sunlight directly to electricity | ~4% (fastest growing) |
| **Wind** | Turbines convert kinetic energy of wind to electricity | ~7% |
| **Hydroelectric** | Falling water spins turbines in dams | ~16% (largest renewable source) |
| **Biomass** | Burning organic material (wood, crops, waste) | ~2% |
| **Geothermal** | Heat from Earth interior drives steam turbines | ~0.3% |
| **Hydrogen fuel cells** | H₂ + O₂ → electricity + H₂O | Emerging technology |

---

## Solar Energy

| Type | Description | Application |
|------|-----------|------------|
| **Photovoltaic (PV)** | Semiconductor cells convert sunlight to electricity | Rooftop panels, solar farms |
| **Concentrated Solar Power (CSP)** | Mirrors focus sunlight to heat fluid and drive turbines | Large desert installations |
| **Passive solar** | Building design that maximizes natural heating/lighting | South-facing windows, thermal mass |

> 🔑 **Solar is now the cheapest source of new electricity** in most of the world, with costs declining ~90% since 2010.
      \`
    },
    {
      id: 'apesre1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Which renewable energy source currently generates the MOST electricity globally?',
            options: [
              'Solar PV',
              'Wind',
              'Hydroelectric',
              'Geothermal'
            ],
            correctAnswer: 2,
            explanation: 'Hydroelectric power generates ~16% of global electricity, making it the largest renewable source. However, solar and wind are growing much faster and will likely surpass hydro in coming decades.'
          },
          {
            question: 'A key advantage of renewable energy sources over fossil fuels is:',
            options: [
              'They all work 24 hours a day regardless of conditions',
              'They produce little to no greenhouse gas emissions during operation',
              'They require no land whatsoever',
              'They have unlimited energy storage built in'
            ],
            correctAnswer: 1,
            explanation: 'Renewables produce little to no CO₂ during operation (some lifecycle emissions from manufacturing). However, intermittency (solar depends on sun, wind on wind) remains a challenge.'
          }
        ]
      }
    },
    {
      id: 'apesre1-content',
      type: 'text' as const,
      content: \`
## Wind Energy

| Pros | Cons |
|------|------|
| No emissions during operation | Intermittent (depends on wind) |
| Low operating costs | Bird and bat mortality |
| Small land footprint (base only) | Visual and noise concerns |
| Can coexist with farming | Not suitable everywhere |

## Hydroelectric Energy

| Pros | Cons |
|------|------|
| No emissions during operation | Dams block fish migration (salmon) |
| Reliable, controllable output | Flooding displaces communities and ecosystems |
| Water storage for irrigation/flood control | Sediment trapped behind dam (downstream erosion) |
| Long lifespan (50+ years) | Methane from decomposing submerged vegetation |

## Other Renewables

| Source | Pros | Cons |
|--------|------|------|
| **Geothermal** | Reliable 24/7; very low emissions | Location-limited (volcanic/tectonic areas) |
| **Biomass** | Carbon-neutral if sustainably harvested; uses waste | Air pollution when burned; land use competition |
| **Tidal/Wave** | Predictable; enormous energy potential | Technology immature; marine ecosystem impacts |

## Key Challenge: Intermittency and Storage
- Solar and wind are intermittent — they only generate when the sun shines or wind blows
- Solutions: battery storage, pumped hydro storage, grid interconnection, demand response
- Cost of lithium-ion batteries has dropped ~90% since 2010
      \`
    },
    {
      id: 'apesre1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The renewable energy source that is the fastest growing globally is _______ photovoltaic.

2) A major environmental concern with hydroelectric dams is blocking _______ migration (especially salmon).

3) The main challenge with solar and wind energy is _______ — they only generate when conditions are right.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['solar', 'fish', 'intermittency'],
        hint1: 'PV panels on rooftops and in large farms.',
        hint2: 'Dams block river pathways for aquatic species.',
        hint3: 'The sun does not always shine; wind does not always blow.',
        explanation: 'Solar PV = fastest growing. Dams block fish migration. Intermittency = solar/wind only work when conditions are right.'
      }
    },
    {
      id: 'apesre1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Match the Source** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'Using heat from deep within the Earth to generate electricity is ___',
            options: ['Geothermal energy', 'Solar energy', 'Biomass energy', 'Tidal energy']
          },
          {
            label: 'A concern specific to wind turbines is ___',
            options: ['Bird and bat mortality', 'Acid mine drainage', 'Radioactive waste', 'Oil spills']
          },
          {
            label: 'Building south-facing windows and using thermal mass for natural heating is ___',
            options: ['Passive solar design', 'Active solar (PV)', 'Concentrated solar power', 'Geothermal heating']
          }
        ],
        correctAnswers: ['Geothermal energy', 'Bird and bat mortality', 'Passive solar design'],
        hint1: 'Heat from Earth (geo = earth, thermal = heat).',
        hint2: 'Flying animals colliding with spinning blades.',
        hint3: 'No panels or technology — just building design.',
        explanation: 'Geothermal = Earth heat. Wind turbines = bird/bat kills. Passive solar = using building design for natural heating.'
      }
    },
    {
      id: 'apesre1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Renewable Energy

- Know the pros and cons of EACH renewable source — AP FRQs require discussing trade-offs
- **Hydroelectric** is the largest current renewable but has significant ecosystem impacts
- Solar and wind are intermittent — know the storage solutions (batteries, pumped hydro)
- Understand that "renewable" does not mean "zero impact" — all sources have trade-offs
- **Geothermal** is only feasible in geologically active areas (Iceland, western US)
- Hydrogen fuel cells produce only water as a byproduct — but hydrogen must be produced first
      \`
    },
    {
      id: 'apesre1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'A community wants to build a dam for hydroelectric power. Which environmental impact should they MOST consider?',
            options: [
              'Increased air pollution from burning water',
              'Disruption of river ecosystems, fish migration, and sediment transport',
              'Radioactive waste from turbine operation',
              'Depletion of water from the water cycle'
            ],
            correctAnswer: 1,
            explanation: 'Dams fundamentally alter river ecosystems: they block fish migration (salmon), trap sediment (causing downstream erosion), flood habitats, and change downstream water temperature and flow.'
          },
          {
            question: 'The biggest barrier to achieving 100% renewable electricity from solar and wind is:',
            options: [
              'Solar and wind produce too much greenhouse gas',
              'Intermittency — requiring energy storage or backup for when sun and wind are unavailable',
              'They are too expensive compared to coal',
              'There is not enough sunlight or wind on Earth'
            ],
            correctAnswer: 1,
            explanation: 'Solar and wind are intermittent — they only generate power when conditions allow. Grid-scale battery storage, pumped hydro, and geographic diversity are key solutions to this challenge.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with APES batch 3 (5 files)');
