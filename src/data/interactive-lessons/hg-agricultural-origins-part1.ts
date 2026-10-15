export const hgAgriculturalOriginsPart1Data = {
  topicSlug: 'hg-agricultural-origins',
  sections: [
    {
      id: 'hgao1-intro',
      type: 'text' as const,
      content: `
# 🌍 Agricultural Origins & Hearths

**Part 1 of 7 — The First Agricultural Revolution**

---

## Agricultural Revolutions

| Revolution | When | Key Change |
|-----------|------|-----------|
| **First (Neolithic)** | ~10,000 BCE | Shift from hunting/gathering to farming |
| **Second** | 1700s–1900s | Mechanization, crop rotation, enclosure movement |
| **Third (Green)** | 1960s–1980s | High-yield seeds, chemical fertilizers, irrigation |

> 🔑 **AP Key Point:** The AP exam tests **where** agriculture originated (hearths), **why** it spread (diffusion), and **how** each revolution changed society.

---

## Agricultural Hearths

Agriculture was independently invented in several locations. The CED names the **Fertile Crescent**, the **Indus River Valley**, **Southeast Asia** and **Central America**; East Asia and the Andes are other well-documented hearths:

| Hearth | Region | Key Crops/Animals |
|--------|--------|------------------|
| **Fertile Crescent** | SW Asia (Iraq, Syria, Turkey, the Levant) | Wheat, barley, lentils, sheep, goats |
| **Indus River Valley** | South Asia (Pakistan, NW India) | Cotton, zebu cattle |
| **Southeast Asia** | Mainland and islands, including New Guinea | Taro, yams, bananas, chickens |
| **Central America (Mesoamerica)** | Southern Mexico | Maize (corn), squash, beans |
| **East Asia** | Yellow River (north China) and Yangtze River (south China) | Millet and pigs (Yellow River); rice (Yangtze) |
| **Andes** | Western South America | Potatoes, llamas, alpacas |

> These hearths are examples of **independent invention** — agriculture was NOT spread from a single origin. Not every early farming region was a hearth: Egypt's Nile Valley farmed wheat and barley that **diffused** from the Fertile Crescent.
      `
    },
    {
      id: 'hgao1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Fertile Crescent is located in modern-day:',
            options: [
              'Southwest Asia, mainly Iraq and Syria',
              'Southeast Asia, mainly Thailand and Vietnam',
              'Sub-Saharan Africa, mainly Ethiopia and Sudan',
              'Central America, mainly Mexico and Guatemala'
            ],
            correctAnswer: 0,
            explanation: 'The Fertile Crescent spans parts of modern Iraq, Syria, Lebanon, and Turkey — it is in Southwest Asia, one of the earliest agricultural hearths.'
          },
          {
            question: 'The First Agricultural Revolution is significant because it:',
            options: [
              'Introduced mechanized plows and tractors to farming',
              'Shifted people from foraging to settled farming',
              'Introduced genetically modified crops worldwide',
              'Directly set off the Industrial Revolution in Britain'
            ],
            correctAnswer: 1,
            explanation: 'The Neolithic (First Agricultural) Revolution ~10,000 BCE shifted human societies from nomadic hunter-gatherers to settled agricultural communities — the foundation of civilization.'
          }
        ]
      }
    },
    {
      id: 'hgao1-content',
      type: 'text' as const,
      content: `
## How Agriculture Spread

From each hearth, agricultural practices spread through **diffusion**:

| Diffusion Type | How It Worked | Example |
|---------------|--------------|---------|
| **Relocation** | Farmers migrated, bringing seeds and techniques | Bantu migration spread farming across Africa |
| **Contagious** | Neighboring peoples adopted farming from observation | Grain farming spread across the Fertile Crescent |
| **Stimulus** | The IDEA of farming spread, but crops/methods adapted locally | Different grains domesticated in different climates |

### Consequences of the First Agricultural Revolution

1. **Sedentary settlements** — permanent villages, then cities
2. **Population growth** — reliable food surplus supported more people
3. **Social stratification** — surplus led to specialization, elites, inequality
4. **Environmental change** — deforestation, irrigation, soil depletion
5. **Gender roles shifted** — women often became primary farmers in early societies
      `
    },
    {
      id: 'hgao1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) The First Agricultural Revolution is also called the _______ Revolution.

2) Locations where agriculture was independently invented are called agricultural _______.

3) The spread of farming techniques from hearths to other regions is called _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Neolithic', 'hearths', 'diffusion'],
        hint1: 'Named for the New Stone Age.',
        hint2: 'Multiple independent origins worldwide.',
        hint3: 'The spread of ideas and practices across space.',
        explanation: 'The Neolithic Revolution = First Agricultural Revolution. Hearths = locations of independent invention. Diffusion = the spread of agricultural practices.'
      }
    },
    {
      id: 'hgao1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Hearth** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Maize (corn), squash, and beans were first domesticated in ___',
            options: ['Mesoamerica', 'Fertile Crescent', 'Yellow River valley', 'Indus Valley']
          },
          {
            label: 'Wheat, barley, sheep, and goats were first domesticated in ___',
            options: ['Fertile Crescent', 'Yellow River valley', 'Mesoamerica', 'Andes']
          },
          {
            label: 'Potatoes, llamas, and alpacas were first domesticated in ___',
            options: ['Andes', 'Indus Valley', 'Yellow River valley', 'Fertile Crescent']
          }
        ],
        correctAnswers: ['Mesoamerica', 'Fertile Crescent', 'Andes'],
        hint1: 'Central America and modern-day Mexico.',
        hint2: 'Southwest Asia between the Tigris and Euphrates.',
        hint3: 'High-altitude South America.',
        explanation: 'Mesoamerica = maize/beans/squash. Fertile Crescent = wheat/barley/sheep. Andes = potatoes/llamas.'
      }
    },
    {
      id: 'hgao1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Agricultural Geography

- **Know the hearths and their key domesticates**, especially the four the CED names (Fertile Crescent, Indus River Valley, Southeast Asia, Central America)
- Connect agricultural revolutions to population changes (DTM stages)
- The Second Agricultural Revolution enabled the Industrial Revolution (fewer farmers needed = urban labor supply)
- The Green Revolution (Third) saved millions from famine but also caused environmental issues
- Be prepared to discuss **positive AND negative** consequences of each revolution
      `
    },
    {
      id: 'hgao1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The fact that maize was domesticated in Mesoamerica and rice in East Asia demonstrates:',
            options: [
              'Independent invention of farming in several hearths',
              'That all farming spread from a single original hearth',
              'Colonial diffusion of crop knowledge between continents',
              'That climate has no effect on crop domestication'
            ],
            correctAnswer: 0,
            explanation: 'Different crops were domesticated independently in different regions — this is independent invention, NOT diffusion from a single origin.'
          },
          {
            question: 'The Green Revolution of the 1960s-1980s primarily increased food production through:',
            options: [
              'Clearing new farmland through deforestation',
              'High-yield seeds, fertilizer and irrigation',
              'A return to traditional, low-input farming methods',
              'Genetically modified crops and cloned livestock'
            ],
            correctAnswer: 1,
            explanation: 'The Green Revolution (Third Agricultural Revolution) used scientific advances — especially high-yield varieties of wheat and rice, along with chemical inputs and irrigation — to dramatically increase yields in developing countries.'
          }
        ]
      }
    }
  ]
};
