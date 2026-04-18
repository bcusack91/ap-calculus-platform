const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(name, content) {
  fs.writeFileSync(path.join(dir, name), content);
  console.log('Wrote:', name);
}

// ─── 8. Ethnicity & Identity ───
write('hg-ethnicity-identity-part1.ts', `export const hgEthnicityIdentityPart1Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgei1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Ethnicity, Race & Identity

**Part 1 of 7 — How Identity Shapes Geography**

---

## Key Definitions

| Term | Definition | Key Point |
|------|-----------|-----------|
| **Ethnicity** | Shared cultural heritage (language, religion, customs) | Learned and cultural, not biological |
| **Race** | Classification based on physical characteristics | Socially constructed, varies by society |
| **Nationality** | Legal belonging to a nation-state | Citizenship and political identity |
| **Nation** | Group sharing culture and identity | May or may not have a state (Kurds, Palestinians) |
| **Nation-state** | A state whose territory matches a single nation | Ideal: Japan, Iceland; rare in practice |

> 🔑 **AP Key Point:** The AP exam tests the distinction between **race** (physical appearance, socially constructed) and **ethnicity** (cultural identity, learned). Know that these are geographic because they create spatial patterns.

---

## Ethnic Conflict & Spatial Patterns

| Concept | Definition | Example |
|---------|-----------|---------|
| **Segregation** | Spatial separation of ethnic groups | Apartheid South Africa, US housing patterns |
| **Ethnic enclave** | Concentration of one ethnicity in a neighborhood | Chinatowns, Little Italys |
| **Ethnic cleansing** | Forced removal of an ethnic group | Bosnia (1990s), Rwanda (1994) |
| **Gerrymandering** | Drawing political boundaries to dilute ethnic voting power | Historically used against Black voters in US |
| **Centripetal force** | Something that unifies a state | Shared language, national anthem |
| **Centrifugal force** | Something that divides a state | Ethnic tension, separatist movements |
      \`
    },
    {
      id: 'hgei1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'The Kurds are considered a "nation without a state" because they:',
            options: [
              'Have no shared cultural identity',
              'Share cultural identity but lack an independent sovereign state',
              'All live within the borders of one country',
              'Have voluntarily given up claims to territory'
            ],
            correctAnswer: 1,
            explanation: 'The Kurds share a common language, culture, and identity (they ARE a nation) but are divided across Turkey, Iraq, Iran, and Syria — they lack their own nation-state.'
          },
          {
            question: 'Ethnic enclaves like Chinatown in San Francisco primarily result from:',
            options: [
              'Government-mandated residential zones',
              'Chain migration and desire to maintain cultural connections',
              'Random settlement patterns',
              'Environmental factors like climate preferences'
            ],
            correctAnswer: 1,
            explanation: 'Ethnic enclaves form through chain migration (following family/friends) and the desire to maintain cultural practices, language, food, and social support networks.'
          }
        ]
      }
    },
    {
      id: 'hgei1-content',
      type: 'text' as const,
      content: \`
## Race as a Social Construct

Race categories vary across cultures and time periods:
- In the US, racial categories have changed dramatically across census history
- Brazil has dozens of recognized racial categories vs the US system of 5-6
- **Race is NOT biologically determined** — genetic variation within racial groups is greater than between them

### How Ethnicity Creates Geographic Patterns

1. **Residential patterns** — ethnic neighborhoods, segregation, redlining
2. **Voting districts** — gerrymandering to concentrate or dilute minority votes
3. **Conflict zones** — ethnic boundaries that do not align with political borders
4. **Migration patterns** — chain migration creates ethnic clusters
5. **Cultural landscapes** — religious buildings, signage, food, architecture reflect ethnic presence

### Centripetal vs. Centrifugal Forces

| Force Type | Effect | Examples |
|-----------|--------|----------|
| **Centripetal** | Unifies | Shared language, religion, external threats, national symbols |
| **Centrifugal** | Divides | Ethnic conflict, linguistic differences, economic inequality, separatism |
      \`
    },
    {
      id: 'hgei1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Forces that unify a country (shared language, patriotism) are called _______ forces.

2) Forces that divide a country (ethnic tension, separatism) are called _______ forces.

3) A country where the territory of the state matches the territory of a single nation is called a _______.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['centripetal', 'centrifugal', 'nation-state'],
        hint1: 'Pulls toward the center.',
        hint2: 'Pushes away from the center.',
        hint3: 'One nation, one state.',
        explanation: 'Centripetal = unifying forces. Centrifugal = dividing forces. Nation-state = political boundaries match cultural/national boundaries.'
      }
    },
    {
      id: 'hgei1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Concept** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'A national anthem played before sports events to promote unity is a ___ force',
            options: ['Centripetal', 'Centrifugal', 'Neither']
          },
          {
            label: 'Quebec separatism in Canada is a ___ force',
            options: ['Centrifugal', 'Centripetal', 'Neither']
          },
          {
            label: 'Drawing voting districts to minimize the political power of a minority group is called ___',
            options: ['Gerrymandering', 'Devolution', 'Balkanization', 'Irredentism']
          }
        ],
        correctAnswers: ['Centripetal', 'Centrifugal', 'Gerrymandering'],
        hint1: 'Promotes national pride and unity.',
        hint2: 'A movement to separate from the country.',
        hint3: 'Manipulating district boundaries.',
        explanation: 'National anthem = centripetal (unifying). Separatism = centrifugal (dividing). Gerrymandering = manipulating district lines for political advantage.'
      }
    },
    {
      id: 'hgei1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Ethnicity & Identity

- Distinguish **ethnicity** (cultural) from **race** (physical characteristics, socially constructed)
- Know examples of **stateless nations**: Kurds, Palestinians, Basques, Tibetans, Roma
- **Balkanization** = breaking a state into smaller ethnic territories (named after the Balkans)
- **Irredentism** = wanting to annex territory in another state because your ethnic group lives there
- On FRQs, always give **specific real-world examples** — not generic descriptions
      \`
    },
    {
      id: 'hgei1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Russia annexing Crimea in 2014, partly justified by the presence of ethnic Russians there, is an example of:',
            options: [
              'Devolution',
              'Irredentism',
              'Balkanization',
              'Supranationalism'
            ],
            correctAnswer: 1,
            explanation: 'Irredentism = a state claiming territory in another state because of ethnic ties. Russia claimed Crimea partly because ethnic Russians were a majority there.'
          },
          {
            question: 'Yugoslavia breaking apart into Bosnia, Croatia, Serbia, Slovenia, and other states based on ethnic lines is an example of:',
            options: [
              'Supranationalism',
              'Devolution',
              'Balkanization',
              'Gerrymandering'
            ],
            correctAnswer: 2,
            explanation: 'Balkanization = the fragmentation of a state into smaller states along ethnic lines. The term literally comes from the breakup of states in the Balkan region of Europe.'
          }
        ]
      }
    }
  ]
};
`);

// ─── 9. Language & Religion ───
write('hg-language-religion-part1.ts', `export const hgLanguageReligionPart1Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglr1-intro',
      type: 'text' as const,
      content: \`
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
      \`
    },
    {
      id: 'hglr1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
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
      content: \`
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
      \`
    },
    {
      id: 'hglr1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) Religions that actively seek converts and claim universal applicability are called _______ religions.

2) Religions closely tied to a specific people or place are called _______ religions.

3) A language used for communication between groups with different native languages is called a _______.
      \`,
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
      content: \`
**Classify the Religion** 🔍
      \`,
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
      content: \`
## AP Exam Strategy: Language & Religion

- Know the **hearth** of each major religion and how it diffused
- Language families → branches → groups → individual languages → dialects (hierarchy)
- **Universalizing vs ethnic** is the most tested classification
- Secularism is growing in Western Europe and parts of East Asia
- Be ready to explain how language and religion are **centripetal** (unifying) or **centrifugal** (dividing) forces
- Sacred spaces: know examples from multiple religions (Mecca, Jerusalem Wall/Dome, Varanasi Ganges)
      \`
    },
    {
      id: 'hglr1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
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
`);

// ─── 10. Political Geography ───
write('hg-political-geography-part1.ts', `export const hgPoliticalGeographyPart1Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpg1-intro',
      type: 'text' as const,
      content: \`
# 🌍 Political Geography & Boundaries

**Part 1 of 7 — States, Nations, and Borders**

---

## Key Political Concepts

| Term | Definition | Example |
|------|-----------|---------|
| **State** | Defined territory with sovereignty | France, Japan, Brazil |
| **Nation** | Cultural group sharing identity | Kurds, Basques, Tibetans |
| **Nation-state** | State = one nation | Iceland, Japan (approximately) |
| **Multinational state** | Multiple nations within one state | Russia, Nigeria, India |
| **Stateless nation** | Nation without its own state | Kurds, Palestinians, Roma |
| **Sovereignty** | Supreme authority within a territory | Control over laws, borders, military |

> 🔑 **AP Key Point:** The AP exam frequently asks you to distinguish between states, nations, and nation-states. A STATE is a political entity; a NATION is a cultural group.

---

## Types of Boundaries

| Type | Based On | Example |
|------|---------|---------|
| **Physical/natural** | Landforms or water | Rio Grande (US-Mexico), Himalayas (India-China) |
| **Cultural/ethnographic** | Language, religion, ethnicity | India-Pakistan (religion-based, 1947) |
| **Geometric** | Straight lines (latitude/longitude) | US-Canada at 49 degrees N, most African borders |
| **Antecedent** | Drawn BEFORE significant settlement | US-Canada border |
| **Subsequent** | Drawn AFTER cultural patterns develop | India-Pakistan border (1947) |
| **Superimposed** | Forced by outside authority | Most colonial African borders |
| **Relic** | No longer functions but still visible | Berlin Wall, Great Wall of China |
      \`
    },
    {
      id: 'hgpg1-quiz1',
      type: 'multiple-choice' as const,
      content: \`
**Concept Check** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Most borders in Africa are geometric because:',
            options: [
              'African leaders preferred straight-line borders',
              'European colonial powers drew borders with little regard for ethnic boundaries',
              'The terrain in Africa is flat and featureless',
              'International law requires geometric borders for new states'
            ],
            correctAnswer: 1,
            explanation: 'European colonial powers at the Berlin Conference (1884-85) drew straight-line boundaries across Africa that ignored existing ethnic, linguistic, and cultural boundaries — these are superimposed geometric borders.'
          },
          {
            question: 'The former border between East and West Berlin is best classified as a:',
            options: [
              'Antecedent boundary',
              'Superimposed boundary that became a relic boundary',
              'Natural boundary',
              'Geometric boundary'
            ],
            correctAnswer: 1,
            explanation: 'The Berlin Wall was superimposed (imposed by Cold War powers) and is now a relic boundary (no longer functions as a border but physical traces and cultural impacts remain).'
          }
        ]
      }
    },
    {
      id: 'hgpg1-content',
      type: 'text' as const,
      content: \`
## Boundary Disputes

| Type | Description | Example |
|------|-----------|---------|
| **Definitional** | Disagreement over the legal language of a treaty | Maritime boundary disputes over exclusive economic zones |
| **Locational** | Agreement on definition but disagreement on where the line falls | India-China border in the Himalayas |
| **Operational** | Disagreement over how the boundary functions | US-Mexico: border enforcement policies |
| **Allocational** | Disagreement over resource use at the boundary | Water rights along the Colorado River |

### Frontier vs. Boundary

- **Boundary**: Precise legal line separating states (modern concept)
- **Frontier**: A zone of transition rather than a sharp line (historical concept; few remain today)
- Antarctica and parts of the ocean floor are among the last true frontiers

### United Nations Convention on the Law of the Sea (UNCLOS)

| Zone | Distance from Coast | Rights |
|------|---------------------|--------|
| **Territorial sea** | 0–12 nautical miles | Full sovereignty |
| **Contiguous zone** | 12–24 nautical miles | Limited enforcement |
| **Exclusive Economic Zone (EEZ)** | 0–200 nautical miles | Resource extraction rights |
      \`
    },
    {
      id: 'hgpg1-input',
      type: 'input-boxes' as const,
      content: \`
**Applied Recall** ✍️

1) The supreme authority of a state to govern within its territory is called _______.

2) Boundaries drawn by outside powers without regard for local populations are called _______ boundaries.

3) Boundaries drawn before significant human settlement of an area are called _______ boundaries.
      \`,
      exercise: {
        boxes: 3,
        correctAnswers: ['sovereignty', 'superimposed', 'antecedent'],
        hint1: 'The defining feature of an independent state.',
        hint2: 'Often created by colonial powers.',
        hint3: 'Drawn before the cultural landscape developed.',
        explanation: 'Sovereignty = supreme governing authority. Superimposed = forced by outsiders (colonial borders). Antecedent = drawn before significant settlement.'
      }
    },
    {
      id: 'hgpg1-dropdown',
      type: 'dropdown-select' as const,
      content: \`
**Classify the Boundary** 🔍
      \`,
      exercise: {
        dropdowns: [
          {
            label: 'The 49th parallel dividing the US and Canada is a ___ boundary',
            options: ['Geometric', 'Physical/natural', 'Cultural/ethnographic', 'Superimposed']
          },
          {
            label: 'The Rio Grande separating the US and Mexico is a ___ boundary',
            options: ['Physical/natural', 'Geometric', 'Cultural', 'Relic']
          },
          {
            label: 'India and China disagreeing on the exact position of their border in the Himalayas is a ___ dispute',
            options: ['Locational', 'Definitional', 'Operational', 'Allocational']
          }
        ],
        correctAnswers: ['Geometric', 'Physical/natural', 'Locational'],
        hint1: 'A straight line based on latitude.',
        hint2: 'A river forms the border.',
        hint3: 'They know the definition but disagree on where exactly the line falls.',
        explanation: '49th parallel = geometric (straight line). Rio Grande = physical (river). India-China = locational (disagreement on where the line is in mountainous terrain).'
      }
    },
    {
      id: 'hgpg1-strategy',
      type: 'text' as const,
      content: \`
## AP Exam Strategy: Political Geography

- **State vs nation vs nation-state** — the most commonly confused terms on the exam
- Know the Berlin Conference (1884-85) and its impact on African borders
- Boundary disputes: know all 4 types and be able to identify real-world examples
- UNCLOS zones (12 nm territorial, 200 nm EEZ) are increasingly tested
- The South China Sea dispute involves overlapping EEZ claims and artificial island building
      \`
    },
    {
      id: 'hgpg1-applied',
      type: 'multiple-choice' as const,
      content: \`
**AP-Style Application** 🎯
      \`,
      exercise: {
        questions: [
          {
            question: 'Two countries share a river border. Country A wants to build a dam, but Country B argues this will reduce their water supply. This is best classified as:',
            options: [
              'A definitional boundary dispute',
              'An allocational boundary dispute',
              'A locational boundary dispute',
              'A superimposed boundary issue'
            ],
            correctAnswer: 1,
            explanation: 'Allocational disputes involve disagreements over how resources at or near the boundary are distributed. Water rights disputes between countries sharing rivers are a classic example.'
          },
          {
            question: 'China building artificial islands in the South China Sea to extend its territorial claims is primarily aimed at expanding its:',
            options: [
              'Contiguous zone for immigration enforcement',
              'Exclusive Economic Zone for resource extraction',
              'Cultural influence in Southeast Asia',
              'Antecedent boundary claims'
            ],
            correctAnswer: 1,
            explanation: 'By building artificial islands, China aims to extend its EEZ claims to access valuable fishing grounds, oil/gas deposits, and shipping lanes — an allocational boundary dispute at massive scale.'
          }
        ]
      }
    }
  ]
};
`);

console.log('Done with batch 3 (3 files)');
