export const whAmericasAfrica1200Part3Data = {
  topicSlug: 'wh-americas-africa-1200',
  sections: [
    {
      id: 'whaaf3-intro',
      type: 'text' as const,
      content: `
# 🌎 Americas & Africa (c. 1200–1450)

**Part 3 of 7 — The Inca Empire**

---

> 🔑 **Key Concept:** The Inca Empire (c. 1438-1533) was the largest pre-Columbian empire in the Americas, stretching 2,500 miles along the Andes. AP questions focus on Inca administrative innovations (road system, mit'a labor, quipus), how they integrated conquered peoples, and the factors enabling Spanish conquest.
      `
    },
    {
      id: 'whaaf3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Inca mit\'a labor system was significant because:',
            options: [
              'It created a state labor draft requiring communities to contribute labor (not money) for state projects — building the road network, temples, and agricultural terraces that underpinned Inca power without requiring a monetary economy',
              'It was a monetary taxation system identical to European feudal taxation',
              'It only applied to Inca nobles, not conquered peoples',
              'It was a voluntary charity system with no compulsory element',
            ],
            correctAnswer: 0,
            explanation: 'The mit\'a labor system is the Inca\'s key administrative innovation for AP. Rather than taxing money (which the Inca economy did not use), the state extracted labor: communities built roads, staffed armies, worked state farms. The roads built by mit\'a labor then enabled the rapid movement of armies and goods that maintained the empire.'
          },
          {
            question: 'The Inca quipu system (knotted string records) demonstrates:',
            options: [
              'That sophisticated record-keeping and administrative organization is possible without written language — the Inca managed a 2,500-mile empire using knotted string records that encoded numerical and possibly narrative information',
              'That the Inca had no administrative organization',
              'That writing systems are universally required for state-level organization',
              'That the Inca borrowed the quipu from Aztec civilization',
            ],
            correctAnswer: 0,
            explanation: 'The quipu challenges the assumption that writing is necessary for complex governance. Inca administrators (quipucamayocs) used knotted strings of different colors, knot types, and positions to record census data, tribute amounts, historical information, and possibly narrative content. The Inca empire\'s administrative sophistication was fully comparable to literate empires.'
          }
        ]
      }
    },
    {
      id: 'whaaf3-content',
      type: 'text' as const,
      content: `
## 📖 The Inca Empire

> **Administrative Innovations**

The Inca Empire was the most administratively sophisticated pre-Columbian civilization:

| Innovation | Purpose | Details |
|-----------|---------|---------|
| **Road network** | Military movement, trade, communication | 25,000+ miles; runners (chasquis) relayed messages at ~200 miles/day |
| **Mit'a labor** | State construction and production | Communities owed labor (not money) to the state |
| **Quipus** | Record-keeping without writing | Knotted strings recording census, tribute, history |
| **Storehouses (qollqa)** | State redistribution | Stored food, textiles, weapons at intervals along roads |
| **Resettlement (mitimas)** | Cultural integration | Loyal populations moved to newly conquered areas |

> **Political Integration**

How the Inca integrated conquered peoples:

- **"Bread and circuses":** Generous redistribution — state fed workers, provided chicha (maize beer), clothing
- **Local ruler incorporation:** Conquered chiefs (curacas) retained authority if they accepted Inca sovereignty
- **Children as hostages:** Sons of conquered elites brought to Cuzco for education — simultaneously creating loyalty and removing potential rebel leaders
- **Religion:** Inca sun worship integrated local deities — conquered gods\'  statues brought to Cuzco, held "hostage"

> **Cuzco: The Navel of the World**

The Inca capital Cuzco was the administrative and religious center:

- Shaped as a puma (Inca sacred animal) in urban plan
- Population c. 100,000+ at its peak
- Coricancha (Sun Temple) lined with gold — later replaced by Spanish cathedral
- Divided into four quarters (suyus) — the empire called Tawantinsuyu ("Four Regions Together")

> **Spanish Conquest (1532)**

Pizarro conquered a much larger Inca Empire with similar advantages:

- **Civil war:** Inca Empire was divided by a succession war (Huáscar vs. Atahualpa); Pizarro arrived just as Atahualpa won
- **Capture of Atahualpa:** Ambush at Cajamarca; Atahualpa captured; empire's command structure paralyzed
- **Ransom room:** Atahualpa offered room full of gold for release — paid and then killed anyway
- **Disease:** Smallpox preceded Spanish arrival, killing Inca emperor Huayna Capac and triggering succession crisis
      `
    },
    {
      id: 'whaaf3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Inca road network\'s military significance was that it:',
            options: [
              'Enabled rapid movement of armies from Cuzco to any point in the 2,500-mile empire within weeks rather than months, allowing the state to respond quickly to rebellions and project military force across vast Andean distances that would otherwise be impassable',
              'Was only used for trade with no military applications',
              'Was built by Inca nobility with no labor contribution from conquered peoples',
              'Primarily served as a tourist attraction with no practical purpose',
            ],
            correctAnswer: 0,
            explanation: 'The road network\'s military and administrative functions were inseparable: roads that moved trade goods also moved armies, and armies that built roads also depended on them for supply. The chasquis (relay runners) carried messages the length of the empire in days, enabling imperial governance of what would otherwise be impossibly large territory.'
          },
          {
            question: 'The Spanish capture of Inca emperor Atahualpa at Cajamarca (1532) was strategically decisive because:',
            options: [
              'In a system of divine kingship where the Sapa Inca was the living son of the Sun God with absolute authority, capturing the ruler paralyzed imperial decision-making — the army didn\'t know whether to attack (risking the emperor\'s execution) or surrender',
              'The Inca army simply had no weapons',
              'Atahualpa voluntarily surrendered because he admired Spanish culture',
              'The capture had no significant impact on the Inca state',
            ],
            correctAnswer: 0,
            explanation: 'Cajamarca is one of history\'s most consequential ambushes: 168 Spaniards captured an emperor commanding 80,000+ soldiers by exploiting the political paralysis that came from divine kingship. The same centralized authority structure that made the Inca state efficient (one ruler with absolute authority) became its greatest vulnerability when that ruler was captured.'
          },
          {
            question: 'Comparing Inca mit\'a labor to Aztec tribute, which statement best demonstrates AP analytical sophistication?',
            options: [
              'Both systems extracted wealth from conquered peoples, but through different mechanisms reflecting different economic contexts: the Inca\'s labor draft (mit\'a) suited an Andean economy without money but with communal labor traditions, while the Aztec tribute system extracted goods and luxury items appropriate for a market-oriented Mesoamerican economy with long-distance commerce',
              'The two systems were identical in every respect',
              'The Inca system was inferior to the Aztec system',
              'Neither empire extracted anything from conquered peoples',
            ],
            correctAnswer: 0,
            explanation: 'This comparison demonstrates AP sophistication by explaining WHY the systems differed (different economic contexts: market vs. non-market) rather than just noting they were different. Recognizing that different societies develop different institutional forms based on their specific economic and environmental contexts is a high-level AP historical thinking skill.'
          }
        ]
      }
    },
    {
      id: 'whaaf3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The Inca labor tax requiring communities to contribute work for state projects was the ___',
            options: ['Mit\'a system', 'Tribute system', 'Devshirme', 'Zamindar system']
          },
          {
            label: 'The Inca record-keeping system using knotted strings to track census and tribute data was ___',
            options: ['Quipus', 'Cuneiform', 'Hieroglyphics', 'Pictographs']
          },
          {
            label: 'The Inca Empire\'s capital city, called "the navel of the world," was ___',
            options: ['Cuzco', 'Tenochtitlan', 'Machu Picchu', 'Cajamarca']
          }
        ],
        correctAnswers: ['Mit\'a system', 'Quipus', 'Cuzco'],
        hint1: 'Labor draft — not money — communities owed work',
        hint2: 'Knotted strings — record-keeping without writing',
        hint3: 'Inca capital — four quarters — sun temple Coricancha',
        explanation: 'The mit\'a labor system is the Inca\'s primary administrative innovation for AP. Quipus demonstrate that complex governance is possible without alphabetic writing. Cuzco\'s organization (four quarters = Tawantinsuyu) reflects the imperial ideology of organizing the whole world around the Inca capital.'
      }
    },
    {
      id: 'whaaf3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP LEQ compares the Aztec and Inca empires. Which thesis demonstrates the strongest historical analysis?',
            options: [
              'While both the Aztec and Inca empires were large tributary states that fell to Spanish conquest, they employed fundamentally different administrative approaches reflecting their geographic and economic contexts: the Inca\'s direct administration through roads, mit\'a labor, and resettlement programs suited Andean geography, while the Aztec\'s tributary model with local autonomy suited Mesoamerica\'s more commercially integrated, urbanized economy',
              'Both empires were identical in governance',
              'The Aztec Empire was superior to the Inca in every respect',
              'Geography had no impact on how these empires were organized',
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns full AP credit: acknowledges similarity (both tributary, both Spanish conquest), identifies meaningful difference (administrative approach), explains WHY they differed (geographic and economic contexts), and connects specific evidence (roads/mit\'a vs. local autonomy/tribute). AP rewards thesis statements that go beyond "they were similar and different" to explain the causes of the differences.'
          },
          {
            question: 'For AP World History, the Inca and Aztec empires are most significant because they demonstrate that:',
            options: [
              'Pre-Columbian Americas contained sophisticated, complex state societies with populations, urban centers, and administrative organizations comparable in scale to contemporary Asian and European civilizations — challenging Eurocentric assumptions about human development that portrayed the Americas as "uncivilized" before contact',
              'Pre-Columbian Americans had no social organization beyond small bands',
              'The Americas were isolated from global historical patterns entirely',
              'Indigenous American civilizations were always inferior to European ones',
            ],
            correctAnswer: 0,
            explanation: 'This is the AP meta-point about the Americas: studying Aztec and Inca civilizations corrects the "empty continent" or "primitive peoples" narratives that justified European colonialism. Tenochtitlan with 200,000 people was larger than contemporary London; the Inca road network exceeded Rome\'s in total length. Understanding these achievements is essential for accurate AP World History analysis.'
          }
        ]
      }
    }
  ]
}
