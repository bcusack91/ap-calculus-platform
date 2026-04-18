export const hgCultureDiffusionPart1Data = {
  topicSlug: 'hg-culture-diffusion',
  sections: [
    {
      id: 'hgcd1-intro',
      type: 'text' as const,
      content: `
# 🌍 Cultural Landscape & Diffusion

**Part 1 of 7 — How Culture Spreads Across Space**

---

## Types of Cultural Diffusion

| Diffusion Type | Definition | Example |
|---------------|-----------|---------|
| **Relocation** | People physically move, bringing culture | Immigrants bringing cuisine to new countries |
| **Expansion — Hierarchical** | Spreads from authority/influential nodes | Fashion trends from Paris/Milan to world |
| **Expansion — Contagious** | Spreads to nearby places like a disease | Spread of Islam across Arabian Peninsula |
| **Expansion — Stimulus** | Core idea adopted but modified locally | McDonald menu variations worldwide |

> 🔑 **AP Key Point:** The AP exam LOVES asking you to classify diffusion examples. Always identify: WHO spread it, HOW it spread, and whether the IDEA was modified.

---

## Cultural Concepts

| Term | Definition |
|------|-----------|
| **Culture trait** | Single element of culture (chopsticks, handshake) |
| **Culture complex** | Related group of traits (religion includes beliefs, rituals, architecture) |
| **Culture region** | Area sharing common traits (the Bible Belt, Latin America) |
| **Cultural landscape** | Physical imprint of culture on the land (buildings, farms, signs) |
| **Acculturation** | Adopting traits of a dominant culture while retaining some own |
| **Assimilation** | Fully adopting a new culture, losing original identity |
| **Syncretism** | Blending of two cultures into something new |
      `
    },
    {
      id: 'hgcd1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'McDonald serving teriyaki burgers in Japan is an example of:',
            options: [
              'Stimulus diffusion — the concept was adopted but modified',
              'Relocation diffusion — the restaurant physically moved',
              'Contagious diffusion — it spread to nearby locations',
              'Acculturation of Japanese cuisine'
            ],
            correctAnswer: 0,
            explanation: 'The core concept (fast food restaurant) was adopted, but the menu was modified to fit local tastes. This is stimulus diffusion — the idea spreads but is changed in the process.'
          },
          {
            question: 'Spanish colonizers building Catholic churches throughout Latin America is an example of:',
            options: [
              'Contagious diffusion',
              'Hierarchical diffusion from an authority',
              'Stimulus diffusion',
              'Independent invention'
            ],
            correctAnswer: 1,
            explanation: 'The Spanish colonial government and Catholic Church (authority figures) imposed Catholicism on colonized populations — a top-down spread from powerful institutions.'
          }
        ]
      }
    },
    {
      id: 'hgcd1-content',
      type: 'text' as const,
      content: `
## Cultural Landscape

The **cultural landscape** (coined by Carl Sauer) is the visible imprint of human activity on the physical environment:

| Element | Examples |
|---------|---------|
| **Architecture** | Mosques, churches, temples; colonial vs indigenous styles |
| **Language on signs** | Bilingual street signs, ethnic neighborhood markers |
| **Land use patterns** | Long-lot system (French), metes-and-bounds (English) |
| **Agriculture** | Terraced rice paddies, center-pivot irrigation circles |
| **Transportation** | Road grids (planned cities) vs organic street patterns |

### Folk vs. Popular Culture

| Feature | Folk Culture | Popular Culture |
|---------|-------------|----------------|
| **Origin** | Anonymous, traditional | Known source, mass-produced |
| **Diffusion** | Slow, relocation | Fast, hierarchical (media) |
| **Distribution** | Clustered, isolated | Widespread, global |
| **Example** | Amish quilting, Navajo weaving | Blue jeans, K-pop, TikTok |
      `
    },
    {
      id: 'hgcd1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) When immigrants bring their food traditions to a new country, this is _______ diffusion.

2) When a group adopts elements of a dominant culture while keeping some of their own traditions, this is called _______.

3) Buildings, signs, and land use patterns that reflect a society culture are called the _______ landscape.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['relocation', 'acculturation', 'cultural'],
        hint1: 'People physically relocate.',
        hint2: 'A middle ground between isolation and full assimilation.',
        hint3: 'The visible imprint of human activity.',
        explanation: 'Relocation diffusion = moving and bringing culture. Acculturation = partial adoption of new culture. Cultural landscape = visible human imprint on the land.'
      }
    },
    {
      id: 'hgcd1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Diffusion Type** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A new social media trend spreads from celebrities to their followers worldwide. This is ___',
            options: ['Hierarchical diffusion', 'Relocation diffusion', 'Contagious diffusion', 'Stimulus diffusion']
          },
          {
            label: 'A disease spreading from one town to neighboring towns is most like ___',
            options: ['Contagious diffusion', 'Hierarchical diffusion', 'Stimulus diffusion', 'Relocation diffusion']
          },
          {
            label: 'An immigrant neighborhood keeping its original language and food traditions is an example of ___',
            options: ['Ethnic enclave maintaining culture through relocation diffusion', 'Assimilation into dominant culture', 'Stimulus diffusion of cuisine', 'Hierarchical diffusion']
          }
        ],
        correctAnswers: ['Hierarchical diffusion', 'Contagious diffusion', 'Ethnic enclave maintaining culture through relocation diffusion'],
        hint1: 'From influential people to their followers.',
        hint2: 'Spreads to nearby places first.',
        hint3: 'People who relocated brought their culture with them.',
        explanation: 'Celebrity trends = hierarchical (top-down). Disease-like spread = contagious (neighbor-to-neighbor). Immigrant neighborhoods = relocation (brought culture by moving).'
      }
    },
    {
      id: 'hgcd1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Cultural Geography

- **Diffusion classification** is one of the most tested topics — practice with real-world examples
- Folk culture = small scale, traditional, clustered; Popular culture = mass-produced, global, widespread
- **Cultural landscape** questions often show a photo and ask you to identify cultural elements
- Know the difference between **acculturation** (partial) vs **assimilation** (complete) vs **syncretism** (blending)
- **Globalization** = the spread of popular culture worldwide; can lead to cultural homogenization
      `
    },
    {
      id: 'hgcd1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A photo shows a street with signs in both English and Chinese, Buddhist temples next to modern shops, and a mix of traditional and Western dress. This cultural landscape BEST illustrates:',
            options: [
              'Complete cultural assimilation',
              'Cultural syncretism and acculturation',
              'Isolated folk culture preservation',
              'Hierarchical diffusion of Western culture only'
            ],
            correctAnswer: 1,
            explanation: 'The mix of cultural elements (dual-language signs, religious and commercial buildings, traditional and modern clothing) shows acculturation (partial adoption) and syncretism (blending of cultures).'
          },
          {
            question: 'Which is the BEST example of popular culture diffusing through contagious diffusion?',
            options: [
              'A celebrity launching a fashion line that fans worldwide adopt',
              'A viral TikTok dance spreading from person to person across a school',
              'Traditional pottery-making techniques passed down in a village',
              'A government mandating a national language'
            ],
            correctAnswer: 1,
            explanation: 'A viral trend spreading person-to-person (like a contagion) through direct contact/observation is contagious diffusion. Celebrity fashion = hierarchical. Pottery = folk tradition. Government mandate = forced.'
          }
        ]
      }
    }
  ]
};
