export const hgLanguageReligionPart3Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglangua3-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 3 of 7 — Religions: Hearths, Diffusion and Branches**

---

| Section |
|---------|
| 📖 Universalizing and Ethnic Religions in Depth |
| Three Universalizing Religions and How They Spread |
| Branches and Their Regions |
| Ethnic Religions and Sacred Space |

> 🔑 **Key Concept:** Universalizing religions seek converts everywhere and so spread far from their hearths; ethnic religions stay tied to a people and place and spread mainly when that people moves. Each religion's **hearth, diffusion path and branches** explain its map today (CED Topic 3.7).
`
    },
    {
      id: 'hglangua3-types',
      type: 'text' as const,
      content: `
## 📖 Universalizing and Ethnic Religions in Depth

| Feature | Universalizing | Ethnic |
|---|---|---|
| **Membership** | Open to anyone who accepts the beliefs | Usually by birth into a people |
| **Founder** | Usually a single founder at a known time | Usually no single founder; roots in ancient tradition |
| **Diffusion** | Missionaries and converts: relocation, contagious and hierarchical | Mostly relocation, when the group migrates |
| **Distribution** | Widespread, across many cultures and continents | Clustered near the hearth, plus diaspora outliers |
| **Holidays and sacred sites** | Tied to the founder's life | Tied to the local landscape and agricultural calendar |
| **Examples** | Christianity, Islam, Buddhism, Sikhism | Hinduism, Judaism, Shinto |

**Nuance:** these are tendencies, not rigid rules. **Sikhism** is universalizing in belief, but most Sikhs live in the Punjab region of India and in a Punjabi diaspora in Canada, the United Kingdom and the United States, a distribution that looks ethnic. **Hinduism** has about 1.2 billion followers, more than many universalizing faiths, yet about 94 percent of them live in India.

## Three Universalizing Religions and How They Spread

### Christianity
- **Hearth:** Judea, in the eastern Mediterranean, in the 1st century CE.
- **Relocation:** missionaries such as Paul traveled Roman roads and sea routes to cities around the Mediterranean.
- **Hierarchical:** Emperor Constantine legalized Christianity in **313**, and Emperor Theodosius made it the official religion of the Roman Empire in **380**; it then spread through imperial cities and rulers.
- **Later relocation:** European colonization and missions carried it to the Americas, sub-Saharan Africa and the Pacific.

### Islam
- **Hearth:** Mecca and Medina on the Arabian Peninsula; Muhammad's teaching began about **610**, and the Hijra to Medina in **622** starts the Islamic calendar.
- **Contagious and relocation:** within about a century it spread from Arabia across Southwest Asia, North Africa and into Iberia, with armies, administrators and traders.
- **Later relocation:** merchants on Indian Ocean routes carried it to East Africa and Southeast Asia.

### Buddhism
- **Hearth:** northeastern India and southern Nepal, where Siddhartha Gautama was born at Lumbini and reached enlightenment at Bodh Gaya, about the 400s BCE.
- **Hierarchical:** the Mauryan emperor **Ashoka** (200s BCE) converted and sent missionaries.
- **Relocation:** monks and merchants carried it to Sri Lanka, Southeast Asia, China, Korea and Japan.
- **Twist:** Buddhism later declined in its hearth; today less than 1 percent of India's population is Buddhist.
`
    },
    {
      id: 'hglangua3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Emperor Constantine legalized Christianity, and later emperors made it the official faith, after which it spread through imperial cities. Which diffusion type does this stage show?',
            options: [
              'Hierarchical',
              'Contagious',
              'Stimulus',
              'Relocation'
            ],
            correctAnswer: 0,
            explanation: 'Adoption by rulers, followed by spread through important cities and officials, is hierarchical diffusion. Contagious spread would move person to person regardless of status.'
          },
          {
            question: 'Hinduism has about 1.2 billion followers but is classified as an ethnic religion. Which fact best supports that classification?',
            options: [
              'Nearly all of its followers live in or come from South Asia',
              'Its holy texts are among the oldest in the world today',
              'It has more followers than several universalizing faiths',
              'Its followers built temples on several different continents'
            ],
            correctAnswer: 0,
            explanation: 'Ethnic religions are tied to a people and place, and Hinduism is concentrated in India and its diaspora. Size and age do not decide the category, and temples abroad reflect migration rather than missionary spread.'
          },
          {
            question: 'Buddhism began in South Asia, yet today less than 1 percent of India\'s population is Buddhist. Which statement best explains the pattern?',
            options: [
              'Its strongest regions now lie far from its hearth',
              'Buddhism never spread beyond its region of origin in India',
              'Buddhism is an ethnic religion that remained with one people',
              'The hearth of a religion always keeps the most followers'
            ],
            correctAnswer: 0,
            explanation: 'Buddhism diffused widely to East and Southeast Asia while it declined in India, so its hearth and its core regions today are in different places. It is a universalizing religion that spread far from its origin.'
          }
        ]
      }
    },
    {
      id: 'hglangua3-branches',
      type: 'text' as const,
      content: `
## Branches and Their Regions

A **branch** is a large, basic division within a religion. Branches often have distinct regions.

| Religion | Branch | Approximate share | Core regions |
|---|---|---|---|
| **Christianity** | Roman Catholic | About half of Christians | Southern and central Europe, Latin America, the Philippines |
| | Protestant (includes many denominations) | More than a third | Northern Europe, the United States, much of sub-Saharan Africa |
| | Eastern Orthodox | About one-eighth | Eastern Europe, Russia, Greece |
| **Islam** | Sunni | About 85 to 90 percent of Muslims | Most Muslim-majority countries |
| | Shia | About 10 to 15 percent | Majorities in Iran, Iraq, Azerbaijan and Bahrain |
| **Buddhism** | Theravada | | Sri Lanka, Myanmar, Thailand, Cambodia, Laos |
| | Mahayana | | China, Korea, Japan, Vietnam |
| | Vajrayana | | Tibet, Mongolia, Bhutan |

Christian shares are from a Pew Research Center estimate for 2010; Muslim shares are commonly cited ranges.

**Why the split?**
- **Christianity:** the 1054 division between the Roman and Eastern churches, then the Protestant Reformation beginning in 1517.
- **Islam:** disagreement over who should lead the community after Muhammad's death in 632.
- **Buddhism:** different schools of interpretation that spread along different routes, Theravada southward by sea and Mahayana north and east along the Silk Roads.
`
    },
    {
      id: 'hglangua3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Branch to the Region** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The majority branch of Islam in Iran is ___',
            options: ['Shia', 'Sunni', 'Theravada', 'Orthodox']
          },
          {
            label: 'The main branch of Buddhism in Thailand and Sri Lanka is ___',
            options: ['Theravada', 'Mahayana', 'Vajrayana', 'Shia']
          },
          {
            label: 'The main branch of Christianity in Greece and Russia is ___',
            options: ['Eastern Orthodox', 'Roman Catholic', 'Protestant', 'Mahayana']
          }
        ],
        correctAnswers: ['Shia', 'Theravada', 'Eastern Orthodox'],
        hint1: 'One of the few Muslim countries where this branch is the majority.',
        hint2: 'The branch that spread south and southeast by sea.',
        hint3: 'The branch that separated from Rome in 1054.',
        explanation: 'Iran is the largest Shia-majority country. Theravada Buddhism dominates Sri Lanka and mainland Southeast Asia. Greece and Russia are mainly Eastern Orthodox.'
      }
    },
    {
      id: 'hglangua3-ethnic',
      type: 'text' as const,
      content: `
## Ethnic Religions and Sacred Space

| Religion | Hearth | Distribution today | Landscape markers |
|---|---|---|---|
| **Hinduism** | South Asia; roots in Vedic texts more than 3,000 years old; no single founder | India (about 80 percent of Indians are Hindu), Nepal; diaspora in Mauritius, Fiji, Trinidad, the U.K. and U.S. | Temples, shrines at river confluences, bathing ghats at Varanasi on the Ganges |
| **Judaism** | The eastern Mediterranean, more than 3,000 years ago | About 15 million followers; most live in Israel or the United States after centuries of diaspora | Synagogues; the Western Wall in Jerusalem |
| **Shinto** | Japan | Almost entirely Japan | Shrines marked by torii gates; sacred mountains, trees and rocks |

### Sacred Space and Landscapes
- **Pilgrimage** links distant believers to a hearth. The Hajj to Mecca, required once in a lifetime of every Muslim who is able, drew about 1.8 million pilgrims in 2024.
- **Orientation:** mosques are built so that worshippers face Mecca; the direction, the *qibla*, is marked by a niche in the wall.
- **Contested space:** Jerusalem's Old City holds the Western Wall, the Dome of the Rock and al-Aqsa Mosque, and the Church of the Holy Sepulchre, sacred to Judaism, Islam and Christianity, so control of a few hectares has global political weight.
- **Land use for the dead:** Christian, Muslim and Jewish traditions favor burial, which takes up land near cities; Hindus and most Buddhists cremate, so cemeteries are rare in Hindu-majority landscapes.

> 🔑 **AP Connection:** Sacred places are where religion becomes **territorial**. When a stimulus shows a holy site claimed by more than one group, connect it to centrifugal forces and to conflict over territory.
`
    },
    {
      id: 'hglangua3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does Jerusalem\'s Old City carry so much political weight?',
            options: [
              'Sites sacred to three religions share a very small area',
              'It is the hearth of every universalizing religion',
              'It is the largest pilgrimage destination for Hindus',
              'It is the only city where Shinto shrines are found abroad'
            ],
            correctAnswer: 0,
            explanation: 'Holy sites of Judaism, Christianity and Islam sit within a small area, so control over them is contested. Buddhism and Sikhism have hearths in South Asia, and Jerusalem is not a Hindu or Shinto site.'
          },
          {
            question: 'Most Sikhs live in Punjab or in a Punjabi diaspora, even though Sikhism accepts converts. What does this show?',
            options: [
              'Universalizing beliefs do not guarantee a wide distribution',
              'Sikhism should be classified as an ethnic religion instead',
              'Religions with a single founder never spread very far',
              'Converts are counted only in the country of the hearth region'
            ],
            correctAnswer: 0,
            explanation: 'Sikhism is universalizing in its openness to converts, but it has spread mainly through migration, so its map looks clustered. The categories describe tendencies, and other single-founder religions spread worldwide.'
          },
          {
            question: 'In a Hindu-majority region, cemeteries are rare. What best explains this landscape feature?',
            options: [
              'Cremation',
              'Scarce land',
              'Colonial laws',
              'Pilgrimage'
            ],
            correctAnswer: 0,
            explanation: 'Hindus traditionally cremate the dead, so little land is set aside for burial. The pattern holds even where land is plentiful, and it predates colonial rule.'
          }
        ]
      }
    }
  ]
}
