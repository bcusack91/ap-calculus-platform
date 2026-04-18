export const hgLanguageReligionPart1Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglr1-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 1 of 7 — Cultural Geography of Belief and Communication**

---

## Language Families

| Language Family | Major Languages | Region |
|----------------|----------------|--------|
| **Indo-European** | English, Spanish, Hindi, Russian | Europe, South Asia, Americas |
| **Sino-Tibetan** | Mandarin, Cantonese, Tibetan | East and Southeast Asia |
| **Afro-Asiatic** | Arabic, Hebrew, Amharic | North Africa, Middle East |
| **Niger-Congo** | Swahili, Yoruba, Zulu | Sub-Saharan Africa |
| **Austronesian** | Malay, Tagalog, Hawaiian | Southeast Asia, Pacific Islands |

> 🔑 **AP Key Point:** Know the difference: **language family** (largest grouping) → **language branch** → **language group** → **individual language** → **dialect**. Indo-European is by far the largest family by speaker count.

---

## World Religions

| Religion | Type | Hearth | Diffusion | Adherents |
|----------|------|--------|-----------|-----------|
| **Christianity** | Universalizing | Palestine | Relocation + hierarchical | ~2.4 billion |
| **Islam** | Universalizing | Arabian Peninsula | Contagious + relocation | ~1.9 billion |
| **Buddhism** | Universalizing | NE India (Nepal) | Relocation + hierarchical | ~500 million |
| **Hinduism** | Ethnic | Indus Valley | Limited diffusion | ~1.2 billion |
| **Judaism** | Ethnic | Palestine | Relocation (diaspora) | ~15 million |

> **Universalizing** religions actively seek converts; **ethnic** religions are tied to a specific people/place.
      `
    },
    {
      id: 'hglr1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hinduism is classified as an ethnic religion because:',
            options: [
              'It actively seeks converts worldwide',
              'It originated recently through missionary work',
              'It is closely tied to Indian culture and does not actively seek converts',
              'It has more followers than any other religion'
            ],
            correctAnswer: 2,
            explanation: 'Ethnic religions are closely tied to a particular people, ethnicity, or place. Hinduism is deeply connected to Indian culture and lacks the missionary tradition of universalizing religions.'
          },
          {
            question: 'English, Spanish, Hindi, and Russian all belong to the same:',
            options: [
              'Language group',
              'Language family (Indo-European)',
              'Language dialect',
              'Lingua franca zone'
            ],
            correctAnswer: 1,
            explanation: 'Despite their differences, these languages all descended from a common ancestor and belong to the Indo-European family — the largest by number of speakers.'
          }
        ]
      }
    },
    {
      id: 'hglr1-content',
      type: 'text' as const,
      content: `
## Language Concepts

| Term | Definition | Example |
|------|-----------|---------|
| **Lingua franca** | Common language for communication between groups | English in international business, Swahili in East Africa |
| **Pidgin** | Simplified mix of two languages for trade | Tok Pisin in Papua New Guinea |
| **Creole** | A pidgin that becomes the native language of a community | Haitian Creole |
| **Dialect** | Regional variety of a language | American vs British English |
| **Isogloss** | Geographic boundary of a linguistic feature | Where "pop" vs "soda" usage changes |
| **Language extinction** | When a language loses all native speakers | Many indigenous languages worldwide |

## Religious Landscapes

| Feature | How Religion Shapes Geography |
|---------|------------------------------|
| **Architecture** | Mosques, churches, temples, pagodas define skylines |
| **Sacred sites** | Jerusalem, Mecca, Varanasi, Bodh Gaya attract pilgrimage |
| **Dietary laws** | Kosher, halal, vegetarian practices affect agriculture and commerce |
| **Calendar/holidays** | Ramadan, Christmas, Diwali shape economic and social rhythms |
| **Burial practices** | Cemeteries, cremation sites shape land use |
      `
    },
    {
      id: 'hglr1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) Religions that actively seek converts and claim universal applicability are called _______ religions.

2) Religions closely tied to a specific people or place are called _______ religions.

3) A language used for communication between groups with different native languages is called a _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['universalizing', 'ethnic', 'lingua franca'],
        hint1: 'Christianity, Islam, and Buddhism are examples.',
        hint2: 'Hinduism and Judaism are examples.',
        hint3: 'English serves as this in many international settings.',
        explanation: 'Universalizing = seek converts (Christianity, Islam, Buddhism). Ethnic = tied to specific people (Hinduism, Judaism). Lingua franca = shared communication language.'
      }
    },
    {
      id: 'hglr1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Religion** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Islam spread rapidly across North Africa and into Spain through conquest and trade. Its diffusion type is primarily ___',
            options: ['Contagious and relocation diffusion', 'Hierarchical diffusion only', 'Stimulus diffusion', 'No diffusion — independent invention']
          },
          {
            label: 'When Haitian Vodou blends Catholic saints with West African spirits, this is an example of ___',
            options: ['Religious syncretism', 'Complete assimilation', 'Ethnic religion diffusion', 'Secularism']
          },
          {
            label: 'A simplified language created for trade between Portuguese and Malay speakers is a ___',
            options: ['Pidgin', 'Creole', 'Dialect', 'Lingua franca']
          }
        ],
        correctAnswers: ['Contagious and relocation diffusion', 'Religious syncretism', 'Pidgin'],
        hint1: 'Islam spread through both trade and migration.',
        hint2: 'A blend of two religious traditions into something new.',
        hint3: 'A simplified mix, not yet a native language.',
        explanation: 'Islam spread by contagious diffusion (neighbor-to-neighbor) and relocation (merchants, conquests). Vodou = syncretism (blending). Simplified trade language = pidgin.'
      }
    },
    {
      id: 'hglr1-strategy',
      type: 'text' as const,
      content: `
## AP Exam Strategy: Language & Religion

- Know the **hearth** of each major religion and how it diffused
- Language families → branches → groups → individual languages → dialects (hierarchy)
- **Universalizing vs ethnic** is the most tested classification
- Secularism is growing in Western Europe and parts of East Asia
- Be ready to explain how language and religion are **centripetal** (unifying) or **centrifugal** (dividing) forces
- Sacred spaces: know examples from multiple religions (Mecca, Jerusalem Wall/Dome, Varanasi Ganges)
      `
    },
    {
      id: 'hglr1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The geographic boundary between areas where people say "pop" versus "soda" in the United States is called:',
            options: [
              'A dialect continuum',
              'An isogloss',
              'A lingua franca boundary',
              'A language branch division'
            ],
            correctAnswer: 1,
            explanation: 'An isogloss is a geographic boundary line marking where a specific linguistic feature (pronunciation, vocabulary, grammar) changes. Pop vs soda is a classic isogloss example.'
          },
          {
            question: 'In India, conflict between Hindus and Muslims has historically been a ___ force, while Hindi as a national language acts as a ___ force.',
            options: [
              'Centripetal; centrifugal',
              'Centrifugal; centripetal',
              'Centripetal; centripetal',
              'Centrifugal; centrifugal'
            ],
            correctAnswer: 1,
            explanation: 'Religious conflict = centrifugal (dividing). A shared national language = centripetal (unifying). India has both forces operating simultaneously.'
          }
        ]
      }
    }
  ]
};
