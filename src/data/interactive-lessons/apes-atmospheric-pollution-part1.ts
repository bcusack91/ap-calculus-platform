export const apesAtmosphericPollutionPart1Data = {
  topicSlug: 'apes-atmospheric-pollution',
  sections: [
    {
      id: 'apesap1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'apesap1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'apesap1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Photochemical smog contains ground-level _______ and forms on warm, sunny days in cities with heavy traffic.

2) The international treaty that successfully phased out CFCs to protect the ozone layer is the _______ Protocol.

3) Acid rain is caused primarily by _______ dioxide and nitrogen oxides reacting with water vapor.
      `,
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
      content: `
**Match the Concept** 🔍
      `,
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
      content: `
## AP Exam Strategy: Atmospheric Pollution

- Know the 6 EPA criteria pollutants and their sources
- **Primary vs secondary:** if it forms from a chemical reaction in the atmosphere, it is secondary
- Industrial smog (SO₂, cold, coal) vs photochemical smog (O₃, hot, cars) — know conditions for each
- Clean Air Act (1970) regulates criteria pollutants; Montreal Protocol (1987) addresses CFCs
- Acid rain: SO₂ + NOₓ → acids; effects on lakes, forests, buildings
- The ozone layer is RECOVERING thanks to the Montreal Protocol — a rare environmental success
      `
    },
    {
      id: 'apesap1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
