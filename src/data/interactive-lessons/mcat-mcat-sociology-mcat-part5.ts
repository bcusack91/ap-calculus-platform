export const mcatSociologyPart5Data = {
  topicSlug: 'mcat-sociology-mcat',
  sections: [
    {
      id: 'so5-intro',
      type: 'text' as const,
      content: `# Sociology for the MCAT

**Part 5 of 7 — Demographics & Population**

### Core Demographic Measures

| Term | Definition |
|------|-----------|
| **Crude birth rate** | Live births per 1,000 people per year |
| **Total fertility rate (TFR)** | Average number of children per woman over her lifetime |
| **Replacement-level fertility** | TFR ≈ $2.1$; below this, a population shrinks without migration |
| **Crude death (mortality) rate** | Deaths per 1,000 people per year |
| **Infant mortality rate** | Deaths under age 1 per 1,000 live births (a sensitive index of population health) |
| **Migration** | Movement of people between areas (immigration in / emigration out) |
| **Population pyramid** | Age–sex structure; wide base = young, growing population |

### Why Populations Grow

$$\\text{Population change} = (\\text{Births} - \\text{Deaths}) + (\\text{Immigration} - \\text{Emigration})$$

- **Natural increase** = births − deaths. **Net migration** = immigration − emigration.
- **Push factors** drive people away (war, famine, persecution); **pull factors** attract them (jobs, safety, family).

### Demographic Transition Model

| Stage | Birth Rate | Death Rate | Population |
|-------|-----------|------------|-----------|
| 1. Pre-industrial | High | High | Stable (low) |
| 2. Urbanizing/early industrial | High | **Falling** | **Rapid growth** |
| 3. Mature industrial | Falling | Low | Slowing growth |
| 4. Post-industrial | Low | Low | Stable or declining |

In **Stage 2**, death rates fall first (sanitation, vaccines, food supply) while birth rates stay high → a population boom. Birth rates fall later as children become economic "costs," women gain education/employment, and contraception spreads.

### Theories of Population & Their Paradigms

| Thinker/idea | Claim | Paradigm flavor |
|--------------|-------|-----------------|
| **Malthus** | Population grows geometrically but food only arithmetically → famine/"checks" | Pessimistic, functionalist-adjacent |
| **Demographic transition** | Development itself lowers fertility | Functionalist (modernization) |
| **Conflict view** | Distribution, not absolute scarcity, drives hunger; the powerful control resources | Conflict theory |

### Epidemiological Transition (Omran)

- As societies develop, the dominant disease burden shifts from **infectious/parasitic** (and maternal/perinatal) causes to **chronic/degenerative** diseases.

| Setting | Leading causes of death | Dominant burden |
|---------|-------------------------|-----------------|
| Less-developed nations | Malaria, TB, HIV, diarrheal disease, maternal mortality | Infectious / acute |
| More-developed nations | Heart disease, cancer, stroke, diabetes | Chronic / degenerative |

### Urbanization & Health

| Effect | Examples |
|--------|----------|
| **Positive** | Healthcare access, education, infrastructure, economic opportunity |
| **Negative** | Pollution, overcrowding, social isolation, faster infectious-disease spread |

- **Urbanization** = growing share of population in cities. **Suburbanization** and **white flight** reshaped U.S. cities, concentrating poverty (cf. **residential segregation**).
- **Gentrification:** wealthier residents move into a lower-income urban area, raising costs and displacing original residents.

### Social Movements & Demographic Change (preview)

- Population aging (post-industrial, low fertility) shifts the **dependency ratio** — more retirees per worker — straining healthcare and pension systems, a high-yield MCAT context.`
    },
    {
      id: 'so5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Demographics & Population** 🎯`,
      exercise: {
        questions: [
          {
            question: `During Stage 2 of the demographic transition, population grows rapidly because:`,
            options: [`Death rates fall (sanitation, vaccines, food supply) while birth rates remain high`, `Both birth and death rates rise together`, `Birth rates rise dramatically while death rates hold steady`, `Net emigration turns sharply negative`],
            correctAnswer: 0,
            explanation: `Stage 2 is defined by falling death rates (public-health and nutrition gains) combined with persistently high birth rates → the "population explosion." Birth rates do not rise (option 3); they remain high but eventually fall in Stage 3 as children become costly and women's education/contraception expand. Option 2 contradicts the model, and migration (option 4) is not the model's driver.`
          },
          {
            question: `A country's leading causes of death have shifted over 50 years from diarrheal disease and tuberculosis to heart disease and cancer, while its total fertility rate fell from 6.0 to 1.8. These two trends together illustrate:`,
            options: [`The epidemiological transition (infectious → chronic) accompanying the demographic transition (high → low fertility)`, `Malthusian collapse`, `Structural mobility`, `The Hispanic paradox`],
            correctAnswer: 0,
            explanation: `The disease shift from infectious to chronic/degenerative causes is the epidemiological transition (Omran); the fertility drop below replacement is late-stage demographic transition. They co-occur as societies develop. Malthus (option 2) predicted famine from outpacing food supply — the opposite of this development pattern. Structural mobility and the Hispanic paradox are unrelated concepts inserted as traps.`
          },
          {
            question: `A sociologist counters Malthus by arguing that world hunger persists not because there is too little food overall, but because political and economic power determines who can access it. This rebuttal is grounded in:`,
            options: [`Conflict theory — emphasizing unequal distribution and control of resources by the powerful`, `Functionalism — emphasizing how famine restores equilibrium`, `Symbolic interactionism — emphasizing the meaning of food`, `The demographic transition model`],
            correctAnswer: 0,
            explanation: `The claim that scarcity is about distribution and who controls resources — not absolute supply — is a conflict-theory critique of Malthus. The functionalist trap (option 2) would frame famine as a system "check" restoring balance, which is closer to Malthus himself. Symbolic interactionism would focus on micro-level meanings of food, not resource power. The DTM describes fertility/mortality stages, not the distribution argument.`
          }
        ]
      }
    },
    {
      id: 'so5-worked-examples',
      type: 'text' as const,
      content: `### Worked Examples — Demographics & Population

<details>
<summary><b>Example 1: Read a population data table</b></summary>

**Question:** Country X: TFR = 1.6, median age = 44, death rate slightly exceeds birth rate, large elderly cohort. Which demographic-transition stage is it in, and what policy challenge follows?

**Solution:**
1. Low fertility (below replacement $2.1$) + low death rate + aging population → **Stage 4 (post-industrial)**, possibly declining population. ✓
2. A growing elderly share raises the **dependency ratio** (fewer workers per retiree) → strain on healthcare and pension systems. ✓

**MCAT skill:** Below-replacement TFR + high median age = post-industrial/Stage 4; expect aging-population and dependency-ratio consequences.
</details>

<details>
<summary><b>Example 2: Apply push/pull and migration concepts</b></summary>

**Question:** Workers leave a rural region after a drought destroys crops and move to a coastal city offering factory jobs. Identify the push factor, the pull factor, and the net effect on each area's population.

**Solution:**
1. **Push factor:** drought/crop failure driving people out of the rural region. ✓
2. **Pull factor:** factory jobs attracting them to the city. ✓
3. Net migration is negative for the rural area (emigration) and positive for the city (immigration), accelerating **urbanization.** ✓

**Why it matters:** MCAT passages on migration reward separating the *origin's* push from the *destination's* pull and tracking the resulting urbanization.
</details>

<details>
<summary><b>Example 3: Classify a disease-burden shift</b></summary>

**Question:** A nation's child mortality from infections plummets after a clean-water program, but decades later obesity-driven type 2 diabetes becomes a top cause of disability. Name the overarching process and the paradigm that frames development as the driver.

**Solution:**
1. Infectious → chronic disease burden as the country develops = the **epidemiological transition** (Omran). ✓
2. The framing that *development itself* reshapes population health is **functionalist/modernization** thinking, paralleling the demographic transition model. ✓

**Connection:** Pair the epidemiological transition with the demographic transition — they are the two "as societies modernize" curves the MCAT loves to test side by side.
</details>`
    },
    {
      id: 'so5-summary',
      type: 'text' as const,
      content: `### Key Takeaways — Part 5

- Replacement-level fertility ≈ $2.1$; below it, populations shrink without migration.
- Demographic transition: Stage 2 boom = death rates fall first while birth rates stay high.
- Epidemiological transition: infectious → chronic disease burden as nations develop.
- Population change = (births − deaths) + (immigration − emigration); know push vs. pull.
- Conflict theory critiques Malthus: hunger is about distribution/power, not just absolute scarcity.`
    }
  ]
};
