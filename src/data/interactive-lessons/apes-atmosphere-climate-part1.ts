export const apesAtmosphereClimatePart1Data = {
  topicSlug: 'apes-atmosphere-climate',
  sections: [
    {
      id: 'apesac1-intro',
      type: 'text' as const,
      content: `
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
      `
    },
    {
      id: 'apesac1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
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
      content: `
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
      `
    },
    {
      id: 'apesac1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Pre-industrial CO₂ levels were approximately _______ ppm; today they exceed 420 ppm.

2) A feedback loop where change amplifies itself (like melting ice causing more warming) is called a _______ feedback loop.

3) Oceans absorbing excess CO₂ causes ocean _______, which harms coral reefs and shellfish.
      `,
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
      content: `
**Classify the Concept** 🔍
      `,
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
      content: `
## AP Exam Strategy: Atmosphere & Climate

- Know the difference between the **natural greenhouse effect** and the **enhanced greenhouse effect**
- **Positive vs negative feedback** — be able to identify and explain examples
- Understand that CO₂ is the primary long-term driver even though CH₄ is more potent per molecule
- **Ocean acidification** (CO₂ + H₂O → carbonic acid) is a commonly tested topic separate from warming
- Ice-albedo feedback is the most commonly tested positive feedback loop
- Know the difference between **weather** (short-term) and **climate** (long-term patterns)
      `
    },
    {
      id: 'apesac1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
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
