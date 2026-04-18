export const whIndianOceanTradePart1Data = {
  topicSlug: 'wh-indian-ocean-trade',
  sections: [
    {
      id: 'whiot1-intro',
      type: 'text' as const,
      content: `
# 🌍 Indian Ocean Trade

**Part 1 of 7 — Maritime Commerce & Cultural Exchange**

---

| Section |
|---------|
| 📖 The Indian Ocean Network |
| Key Trading Regions |
| Monsoon Winds & Technology |
| 📌 Cultural & Religious Exchange |
| Comparisons with Other Routes |

> 🔑 **Key Concept:** The Indian Ocean trade network was the **largest and most diverse** maritime trade system in the pre-modern world, connecting East Africa, the Middle East, South Asia, Southeast Asia, and China. The AP exam emphasizes the role of **monsoon winds**, **diasporic communities**, and **cultural diffusion**.
      `
    },
    {
      id: 'whiot1-network',
      type: 'text' as const,
      content: `
## 📖 The Indian Ocean Trade Network

### Overview

The Indian Ocean connected **four major trade zones**:

| Zone | Key Players | Major Exports |
|------|-------------|---------------|
| **East Africa** | Swahili city-states (Kilwa, Mombasa) | Gold, ivory, enslaved people, animal skins |
| **Middle East / Arabia** | Arab merchants, Persian Gulf ports | Horses, dates, frankincense, textiles |
| **South Asia** | India (Gujarat, Malabar Coast) | Cotton textiles, spices (pepper), gems |
| **East / Southeast Asia** | China, Malay Archipelago | Porcelain, silk, spices (cloves, nutmeg, cinnamon) |

### Monsoon Winds — The Key to Indian Ocean Trade

- **Southwest monsoon** (April–September): Blows from Africa/Arabia toward India and Southeast Asia
- **Northeast monsoon** (October–March): Blows from Asia back toward Africa and Arabia
- Traders timed voyages to use these **predictable seasonal winds**, making long-distance sailing reliable
- **Dhow** — triangular-sailed vessel used by Arab and Indian merchants; ideal for monsoon sailing
- **Chinese junks** — large, multi-masted ships; dominated eastern routes

### Diasporic Communities

Merchants settled in foreign ports, creating **diasporic trading communities**:

- **Arab merchants** in Swahili East Africa and Southeast Asia
- **Indian (Gujarati) traders** throughout Southeast Asia
- **Chinese merchants** in Southeast Asian port cities
- These communities maintained their own customs while integrating into host societies — creating **cultural synthesis**

> ⚠️ **AP Alert:** Indian Ocean trade was **voluntary and mutually beneficial** — unlike later European colonialism. No single power dominated; trade was decentralized and relied on trust, shared commercial practices, and diasporic networks.
      `
    },
    {
      id: 'whiot1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Monsoon winds were critical to Indian Ocean trade because they:',
            options: [
              'Provided predictable, seasonal wind patterns that allowed merchants to plan reliable round-trip voyages across the ocean',
              'Prevented any commerce from taking place during most of the year',
              'Only blew in one direction, making return voyages impossible',
              'Were created artificially by Indian Ocean sailors using advanced technology'
            ],
            correctAnswer: 0,
            explanation: 'The monsoon cycle was the engine of Indian Ocean trade. Southwest winds (summer) carried ships from Africa and Arabia to India and Southeast Asia, while northeast winds (winter) carried them back. Merchants planned their voyages around these seasons, often staying in foreign ports for months — which contributed to the formation of diasporic communities.'
          },
          {
            question: 'Diasporic trading communities in the Indian Ocean basin are historically significant because they:',
            options: [
              'Created cross-cultural networks that facilitated trade, spread religions, and blended cultural traditions — without military conquest',
              'Completely replaced local populations in every port city they settled',
              'Refused to interact with local cultures and maintained total isolation',
              'Were established exclusively by European colonial powers'
            ],
            correctAnswer: 0,
            explanation: 'Arab merchants in Swahili Africa, Indian traders in Southeast Asia, and Chinese merchants in port cities all formed communities that facilitated commerce through trust and shared practices. These diaspora communities also spread Islam, Hinduism, and Buddhism, created new syncretic cultures (like Swahili civilization), and demonstrate peaceful cross-cultural exchange.'
          }
        ]
      }
    },
    {
      id: 'whiot1-culture',
      type: 'text' as const,
      content: `
## Cultural & Religious Exchange

### Religion Spread Through Trade

| Religion | How It Spread | Where |
|----------|--------------|-------|
| **Islam** | Arab and Indian Muslim merchants; Sufi missionaries | East Africa, Southeast Asia (Malaysia, Indonesia) |
| **Hinduism** | Indian traders and cultural influence | Southeast Asia (Angkor, Majapahit); temples, Sanskrit, epics |
| **Buddhism** | Monks traveling with merchant ships | Sri Lanka, Southeast Asia (Thailand, Myanmar, Cambodia) |

### The Swahili Coast: A Case Study in Cultural Synthesis

- **Language:** Swahili = Bantu grammar + Arabic vocabulary
- **Architecture:** Mosques with coral stone; blend of African and Islamic styles
- **Society:** African kinship structures + Islamic commercial law
- **Economy:** Connected African interior (gold, ivory) to Indian Ocean trade

### Comparing Trade Networks

| Feature | Silk Roads | Indian Ocean | Trans-Saharan |
|---------|-----------|-------------|---------------|
| **Type** | Overland | Maritime | Overland |
| **Key goods** | Silk, paper, horses | Spices, textiles, porcelain | Gold, salt, enslaved people |
| **Key technology** | Camelcarvans, caravanserais | Monsoon winds, dhows | Camels, oasis stops |
| **Religions spread** | Buddhism, Islam | Islam, Hinduism, Buddhism | Islam |
| **Volume** | Moderate (luxury goods) | Highest (bulk + luxury) | Moderate |

> 🔑 **AP Connection:** The Indian Ocean network carried **more goods in greater volume** than the Silk Roads because ships can carry far more cargo than camel caravans. This made Indian Ocean trade the most commercially significant pre-modern network.
      `
    },
    {
      id: 'whiot1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What triangular-sailed vessel was used by Arab and Indian merchants for monsoon-powered Indian Ocean trade?

2) What term describes merchant communities that settled in foreign ports, maintaining their identity while integrating with local cultures?

3) What Indian region on the western coast was a major hub for cotton textile exports in Indian Ocean trade?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['dhow', 'diasporic communities', 'Gujarat'],
        hint1: 'A type of sailing vessel with a triangular (lateen) sail',
        hint2: 'Related to the word "diaspora" — scattered communities',
        hint3: 'A western Indian state/region known for textile production',
        explanation: 'The dhow\'s lateen sail was perfectly suited for catching monsoon winds. Diasporic communities were the human infrastructure of Indian Ocean trade — networks of trust that facilitated cross-cultural commerce. Gujarat (and the Malabar Coast) were India\'s primary commercial connections to the Indian Ocean world.'
      }
    },
    {
      id: 'whiot1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The primary goods exported from East African Swahili city-states were ___',
            options: ['Gold, ivory, and enslaved people', 'Silk and porcelain', 'Cotton textiles and spices', 'Horses and dates']
          },
          {
            label: 'Islam spread to Southeast Asia primarily through ___',
            options: ['Muslim merchant networks and Sufi missionaries', 'Military conquest by Arab armies', 'European colonial missionaries', 'Chinese imperial decree']
          },
          {
            label: 'The Indian Ocean trade network carried more goods than the Silk Roads primarily because ___',
            options: ['Ships could carry far more cargo than camel caravans', 'The Silk Roads did not exist during this period', 'Only luxury goods could travel by sea', 'Overland routes were faster than maritime routes']
          }
        ],
        correctAnswers: ['Gold, ivory, and enslaved people', 'Muslim merchant networks and Sufi missionaries', 'Ships could carry far more cargo than camel caravans'],
        hint1: 'African interior resources traded for Asian manufactured goods',
        hint2: 'Islam arrived peacefully through trade connections, not armies',
        hint3: 'A single ship could carry as much as hundreds of camels',
        explanation: 'The Swahili Coast linked African resources to Asian markets. Islam\'s spread to Southeast Asia through trade (not conquest) is a key AP distinction. Maritime trade\'s volume advantage over overland routes explains why the Indian Ocean was the most commercially significant pre-modern trade network.'
      }
    },
    {
      id: 'whiot1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST distinguishes Indian Ocean trade from later European colonial trade (post-1500)?',
            options: [
              'Indian Ocean trade was decentralized with no single dominant power, while European colonial trade was controlled by imperial states that used military force to monopolize routes',
              'Indian Ocean trade involved only luxury goods, while European trade involved only bulk commodities',
              'European colonial trade was always peaceful while Indian Ocean trade was always violent',
              'There were no significant differences between the two trade systems'
            ],
            correctAnswer: 0,
            explanation: 'Pre-1500 Indian Ocean trade was characterized by voluntary exchange, multiple participating cultures, and no single dominant power. After 1500, the Portuguese (and later Dutch, British, and French) used naval force to control chokepoints, establish monopolies, and impose colonial rule — fundamentally changing the nature of Indian Ocean commerce.'
          },
          {
            question: 'An AP essay asks you to compare the effects of trade on TWO regions connected by the Indian Ocean network. The STRONGEST response would note that:',
            options: [
              'Both the Swahili Coast and Southeast Asia experienced religious conversion (to Islam), cultural synthesis (blended languages and architecture), and economic transformation through participation in long-distance trade',
              'Trade had no cultural impact on any region; it was purely economic',
              'Only one region was affected by trade while the other remained completely isolated',
              'Trade caused identical cultural changes in every region it reached'
            ],
            correctAnswer: 0,
            explanation: 'The Swahili Coast and Southeast Asia both illustrate how trade creates cultural synthesis: Swahili blended Bantu and Arabic elements; Southeast Asian kingdoms blended Indian (Hindu/Buddhist) and later Islamic influences with local traditions. Both experienced religious conversion through merchant contact, and both were transformed economically by integration into the Indian Ocean network.'
          }
        ]
      }
    }
  ]
}
