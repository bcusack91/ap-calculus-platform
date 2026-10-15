export const whGlobalTapestryPart3Data = {
  topicSlug: 'wh-global-tapestry',
  sections: [
    {
      id: 'whglobal3-intro',
      type: 'text' as const,
      content: `
# 🌍 The Global Tapestry (c. 1200–1450)

**Part 3 of 7 — Trade Networks & Cultural Exchange**

---

| Section |
|---------|
| 📖 The Indian Ocean Trade System |
| Trans-Saharan Trade Routes |
| The Silk Roads |
| 📌 How Trade Spread Religion & Culture |

> 🔑 **Key Concept:** By 1200 CE, a vast network of trade routes connected civilizations from East Asia to West Africa. These routes moved not just goods but religions, technologies, and diseases. Trade-driven cultural change is a core AP Unit 1 theme.
      `
    },
    {
      id: 'whglobal3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Islam spread most effectively to Southeast Asia and sub-Saharan Africa primarily through:',
            options: [
              'Muslim merchant networks and Sufi teachers who adapted Islam to local cultures',
              'Arab armies that conquered the coasts and required conversion to Islam for trade',
              'Ottoman naval expeditions that installed Muslim sultans in the major port cities',
              'Caliphal missionaries dispatched from Baghdad under a centrally planned program'
            ],
            correctAnswer: 0,
            explanation: 'Merchants established Muslim communities along trade routes, and Sufi missionaries — who emphasized mystical experience and accommodation with local practices — proved far more effective than military force. Trade and religious flexibility, not conquest, drove most Islamic expansion in this period.'
          },
          {
            question: 'The Swahili Coast city-states (e.g., Kilwa, Mombasa) were historically significant because they:',
            options: [
              'Linked interior gold and ivory to Indian Ocean merchants and blended African and Islamic culture',
              'Formed a unified Swahili kingdom that conquered the East African interior to the Great Lakes',
              'Served as the main ports for Portuguese convoys carrying enslaved Africans to the Americas',
              'Stayed outside long-distance trade and developed a purely Bantu culture without Arab contact'
            ],
            correctAnswer: 0,
            explanation: 'Swahili Coast cities grew wealthy as intermediaries in Indian Ocean trade. Their culture — blending Bantu African languages with Arabic vocabulary, Islamic architecture with African traditions — is a textbook AP example of cultural synthesis through sustained trade contact.'
          }
        ]
      }
    },
    {
      id: 'whglobal3-content',
      type: 'text' as const,
      content: `
## 📖 Global Trade Networks (c. 1200–1450)

> **The Indian Ocean Trade System**

The Indian Ocean was the world's most active trade zone, connecting East Africa, Arabia, Persia, India, and Southeast Asia:

| Feature | Details |
|---------|---------|
| **Monsoon winds** | Predictable seasonal winds enabled reliable navigation: sail east in summer, west in winter |
| **Key goods** | Spices (Southeast Asia); textiles (India); gold and ivory (East Africa); porcelain (China) |
| **Key hubs** | Calicut, Hormuz, Aden, Kilwa, Malacca |
| **Cultural impact** | Spread Islam to coastal East Africa, South India, and Southeast Asia through merchant communities |

> **Trans-Saharan Trade Routes**

Desert routes crossing the Sahara connected sub-Saharan Africa to North Africa and the Mediterranean:

| Feature | Details |
|---------|---------|
| **Key goods** | Gold (south) and salt (north) — the essential pair; enslaved people; textiles northward |
| **Camels** | The "ships of the desert" — made reliable Saharan crossing possible after c. 300 CE |
| **Mali Empire** | Controlled gold fields; taxed all trade; Mansa Musa's 1324 hajj demonstrated Mali\'s extraordinary wealth |
| **Cultural impact** | Spread Islam to West Africa; Timbuktu became a major center of Islamic scholarship |

> **The Silk Roads**

Overland routes connecting China to the Mediterranean through Central Asia and Persia:

| Feature | Details |
|---------|---------|
| **Key goods** | Chinese silk, paper, gunpowder, porcelain westward; horses, glassware, crops eastward |
| **Nomadic role** | Central Asian nomads (Turks, Mongols) controlled key portions; taxed or facilitated trade |
| **Pax Mongolica** | Under Mongol rule (13th–14th c.), routes were briefly safer — but also enabled the Black Death |

> **AP Comparison Anchor**

- **Indian Ocean vs. Trans-Saharan:** Both spread Islam and luxury goods; ocean routes used monsoon winds and ships, Saharan routes used camels
- **Trade & Religion:** Islam spread along every major route — not through state mandate but through merchant community formation
- **Long-term impact:** These networks created global awareness of distant wealth, fueling European desire for direct sea routes
      `
    },
    {
      id: 'whglobal3-input',
      type: 'multiple-choice' as const,
      content: `
**Applied Recall: 3-Question Sprint** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'What geographic feature made the Indian Ocean trade system reliable and predictable for sailors?',
            options: [
              'Monsoon winds that reversed direction with the seasons',
              'Steady westerly trade winds that blew the same way all year',
              'A chain of Chinese-built canals linking the major port cities',
              'Calm, storm-free waters sheltered by the long African coastline'
            ],
            correctAnswer: 0,
            explanation: 'The seasonal monsoon winds were the engine of Indian Ocean trade. Sailors had used them for over a millennium by 1200 CE, creating one of history\'s most sophisticated commercial networks across three continents.'
          },
          {
            question: 'The Mali Empire\'s wealth and power was based primarily on:',
            options: [
              'Control of gold fields and taxes on trans-Saharan trade',
              'Iron weapons forged in Mali and sold across the Sahel',
              'Salt mines in the Mali heartland that supplied Morocco',
              'Customs duties at its ports on the Indian Ocean coast'
            ],
            correctAnswer: 0,
            explanation: 'Mali sat astride the junction between West African gold-producing regions and Saharan trade routes leading to North Africa. Salt flowed south into Mali from Saharan mines such as Taghaza rather than north out of it, and Mali had no Indian Ocean coast. By taxing the gold-salt trade, Mali\'s rulers accumulated enormous wealth — most famously shown by Mansa Musa\'s 1324 hajj.'
          },
          {
            question: 'The "Pax Mongolica" affected Silk Road trade by:',
            options: [
              'Making overland routes safer under Mongol rule, but also helping the Black Death spread',
              'Closing overland routes to foreign merchants, but sending trade through Mongol ports',
              'Imposing a Mongol state religion on merchants, but exempting those who paid a special tax',
              'Moving luxury trade from the Silk Roads to the Indian Ocean, but only for Chinese silk'
            ],
            correctAnswer: 0,
            explanation: 'The Mongol Empire\'s vast territorial control briefly made Silk Road travel safer. But this connectivity had a devastating side effect: the spread of bubonic plague (Black Death) along trade and military routes, killing tens of millions across Eurasia in the mid-14th century.'
          }
        ]
      }
    },
    {
      id: 'whglobal3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Idea: Evidence to Claim**

Match each trade network feature to its correct description.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The seasonal winds that made Indian Ocean navigation reliable and predictable were the ___',
            options: ['Monsoon winds', 'Trade winds', 'Westerlies', 'Doldrums']
          },
          {
            label: 'The East African port city that served as a major hub of Indian Ocean gold trade was ___',
            options: ['Kilwa', 'Cairo', 'Baghdad', 'Calicut']
          },
          {
            label: 'The period of relative Silk Road safety under Mongol empire control is called the ___',
            options: ['Pax Mongolica', 'Pax Romana', 'Silk Road Revival', 'Mongol Renaissance']
          }
        ],
        correctAnswers: ['Monsoon winds', 'Kilwa', 'Pax Mongolica'],
        hint1: 'Seasonal winds reversed direction twice per year',
        hint2: 'East African port city — traded gold from the interior',
        hint3: 'Latin phrase meaning "Mongol Peace"',
        explanation: 'Monsoon winds were essential to Indian Ocean navigation. Kilwa was one of the wealthiest medieval port cities — Ibn Battuta called it one of the most beautiful cities on earth. The Pax Mongolica facilitated both commerce and the devastating spread of the Black Death.'
      }
    },
    {
      id: 'whglobal3-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A historian argues that trade routes were more important than military conquest for spreading Islam c. 1200–1450. Which evidence BEST supports this claim?',
            options: [
              'Islam reached Southeast Asia mainly through merchant communities, not military campaigns',
              'Islamic military forces conquered the Malay Peninsula and Java before merchants arrived',
              'Mamluk forces imposed Islam on the Swahili Coast after defeating its city-states in battle',
              'Islam spread fastest where Abbasid governors were sent to rule newly conquered lands'
            ],
            correctAnswer: 0,
            explanation: 'Southeast Asia was never conquered by Islamic armies — yet by 1500, much of coastal Southeast Asia was Muslim. Merchants established communities, built mosques, and integrated into local elites through intermarriage and trade. This peaceful commercial spread is a key AP distinction from military-conquest-based spread.'
          },
          {
            question: 'The Swahili Coast city-states of East Africa best illustrate which AP concept?',
            options: [
              'Cultural synthesis — Bantu African, Arab and Islamic elements blended through trade',
              'Cultural imperialism — Arab merchants replaced Bantu languages and customs by force',
              'Cultural diffusion from Europe — Portuguese settlers brought Christianity and stone building',
              'Cultural isolation — the East African coast developed with little outside influence'
            ],
            correctAnswer: 0,
            explanation: 'The Swahili language (Bantu grammar with Arabic vocabulary), Swahili architecture (blending African and Islamic styles), and Swahili trade networks demonstrate that cultural exchange through trade creates new hybrid cultures. This synthesis is a model AP Unit 1 example.'
          }
        ]
      }
    }
  ]
}
