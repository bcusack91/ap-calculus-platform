export const hgPoliticalGeographyPart2Data = {
  topicSlug: 'hg-political-geography',
  sections: [
    {
      id: 'hgpoliti2-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Geography & Boundaries

**Part 2 of 7 — Political Power and Territoriality**

---

| Section |
|---------|
| 📖 The Building Blocks of the Political Map |
| Colonialism, Imperialism and Decolonization |
| Power Beyond Formal Control: Neocolonialism, Shatterbelts and Choke Points |
| Contested Territory and Power Across Scales |

> 🔑 **Key Concept:** The political map is a map of **power over space**. Independent states are its building blocks, but how those states came to exist (colonialism and decolonization) and how power still flows across their borders (neocolonialism, shatterbelts, choke points) explain why the map looks the way it does and where it is still contested (CED Topics 4.1–4.3).
`
    },
    {
      id: 'hgpoliti2-blocks',
      type: 'text' as const,
      content: `
## 📖 The Building Blocks of the Political Map

Part 1 defined **state**, **nation**, **nation-state**, **multinational state** and **stateless nation**. The CED adds two more kinds of political entity.

| Entity | Meaning | Examples |
|---|---|---|
| **Multistate nation** | One nation whose people live in two or more states | Koreans in North and South Korea; Hungarians in Hungary, Romania and Slovakia |
| **Autonomous or semi-autonomous region** | An area inside a state that governs some of its own affairs but is not sovereign | American Indian reservations in the US; Hong Kong, a Special Administrative Region of China since 1997; Greenland, self-governing within the Kingdom of Denmark since 2009 |

### Sovereignty and Self-Determination
- **Sovereignty** is a state's supreme authority over its territory, free from outside control. The modern idea of sovereign, territorial states is usually traced to the **Peace of Westphalia (1648)** in Europe.
- **Self-determination** is the principle that a people may choose its own political status, including independence. It drove decolonization after 1945 and still drives independence movements.

**Recognition matters.** There are 193 UN member states, plus two non-member observer states (the Holy See and Palestine). Some places control territory but lack wide recognition: **Kosovo** declared independence in 2008 and is recognized by roughly half of UN members, and **Taiwan** runs its own government, military and currency but is formally recognized by only about a dozen states. Statehood is partly a matter of what other states accept.

### Territoriality
Geographer Robert Sack (1986) defined **territoriality** as the attempt to influence or control people and resources by controlling an **area**. The CED describes it as the connection of people, their culture and their economic systems to the land. It works at every scale:

| Scale | Example of territoriality |
|---|---|
| Local | A homeowner's fence; a gang marking its turf with graffiti |
| Subnational | A state or province enforcing its own laws inside its borders |
| National | Passport control; a state claiming its 200-nautical-mile EEZ |
| Supranational | The EU's common external border and common tariff |

> 🔑 **AP Connection:** When a question asks how power is "expressed geographically," answer with **control over people, land or resources** at a named scale, not with a definition alone.
`
    },
    {
      id: 'hgpoliti2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Hong Kong keeps its own courts, currency and customs territory, while the government in Beijing controls its defense and foreign affairs. Hong Kong is best classified as:',
            options: [
              'A semi-autonomous region',
              'An independent city-state',
              'A stateless nation',
              'A multinational state'
            ],
            correctAnswer: 0,
            explanation: 'Hong Kong governs many of its own affairs but is not sovereign, because Beijing controls defense and foreign policy; that is the definition of a semi-autonomous region. It is not an independent city-state, and it is a territory rather than a nation or a multinational state.'
          },
          {
            question: 'Which example shows territoriality at the local scale?',
            options: [
              'A gang tagging walls to mark its turf',
              'A state patrolling its exclusive economic zone',
              'An alliance pledging to defend every member state',
              'A federal government setting national visa rules'
            ],
            correctAnswer: 0,
            explanation: 'Marking a few city blocks as turf is control over a small area, which is territoriality at the local scale. Patrolling an EEZ and setting visa rules are national-scale actions, and an alliance pledge works at the supranational scale.'
          },
          {
            question: 'Kosovo declared independence in 2008 and governs its own territory, but it is not a UN member and many states do not recognize it. This case shows that:',
            options: [
              'acceptance by other states matters for full statehood',
              'a territory needs a coastline before it can become a state',
              'UN membership is open to any territory that applies',
              'self-determination is complete once independence is declared'
            ],
            correctAnswer: 0,
            explanation: 'Kosovo controls its land and people, yet without broad recognition it cannot join the UN or act fully as a state abroad. Many landlocked states are UN members, admission requires Security Council and General Assembly approval, and a declaration alone does not settle sovereignty.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti2-colonial',
      type: 'text' as const,
      content: `
## Colonialism, Imperialism and Decolonization

| Term | Meaning | Example |
|---|---|---|
| **Imperialism** | One state extending power over other territories by force, politics or economics | The British Empire's control of India through the East India Company and then direct rule after 1858 |
| **Colonialism** | A form of imperialism in which the outside power rules a territory directly and often sends settlers | Spanish settlement of Mexico and Peru; French rule of Algeria |
| **Independence movement** | Organized effort by a colonized people to gain sovereignty | India's independence movement; Algeria's war of independence |
| **Decolonization** | The process by which colonies become independent states | Most of Africa and Asia, about 1945 to 1975 |

### Two Waves of European Colonialism
1. **First wave (about 1500 to 1800):** Spain, Portugal, Britain, France and the Netherlands colonized the Americas and coastal trading posts. Most of Latin America won independence between about **1810 and 1825**.
2. **Second wave (about 1870 to 1914):** European powers divided Africa and much of Asia. At the **Berlin Conference (1884–85)** they set rules for claiming Africa; by 1914 only **Ethiopia and Liberia** remained independent on the continent.

### Decolonization in the Data: United Nations Membership

| Year | UN member states | What drove the change |
|---|---|---|
| 1945 | 51 | Founding members |
| 1960 | 99 | Independence across Africa and Asia; 17 African states became independent in 1960 alone |
| 1990 | 159 | Remaining colonies in Africa, the Caribbean and the Pacific |
| 2000 | 189 | Breakup of the Soviet Union (15 states, 1991), Yugoslavia and Czechoslovakia (split in 1993) |
| 2011 | 193 | South Sudan, the newest member, after a 2011 referendum in which about 99 percent voted for independence |

**Reading the table:** the steepest growth came between 1945 and 1960, which is the decolonization of Africa and Asia. The jump from 159 to 189 in the 1990s reflects a different process: the **breakup of multinational states** at the end of the Cold War, along with **democratization** in Eastern Europe.

### Colonial Legacies on Today's Map
- **Superimposed boundaries** that split some ethnic groups and combined rival groups (Part 1's table).
- **Capital cities on the coast**, built to export raw materials, such as Lagos and Dakar.
- Economies that still export a few raw materials to former colonial powers.
- Colonial languages used as official languages (covered in the language and religion lesson).

> 🔑 **AP Connection:** The CED's phrase is that colonialism, imperialism, independence movements and devolution have **influenced contemporary political boundaries**. Use a dated example for each when you explain the modern map.
`
    },
    {
      id: 'hgpoliti2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the UN membership table.

**1)** How many member states did the UN gain, in total, between 1945 and 2011?

**2)** How many members did it gain between 1945 and 1960?

**3)** How many members did it gain between 1990 and 2011?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['142', '48', '34'],
        hint1: 'Subtract the 1945 figure from the 2011 figure: 193 − 51.',
        hint2: '99 − 51.',
        hint3: '193 − 159.',
        explanation: '1) 193 − 51 = 142. 2) 99 − 51 = 48, about a third of all growth, in just 15 years of decolonization. 3) 193 − 159 = 34, most of it from the breakup of the Soviet Union, Yugoslavia and Czechoslovakia in the 1990s. These are net figures, because some mergers, such as the unification of Germany in 1990, removed members.'
      }
    },
    {
      id: 'hgpoliti2-power',
      type: 'text' as const,
      content: `
## Power Beyond Formal Control: Neocolonialism, Shatterbelts and Choke Points

The CED says political power is expressed geographically as **control over people, land and resources**, as shown by neocolonialism, shatterbelts and choke points.

### Neocolonialism
**Neocolonialism** is the use of economic, political or cultural pressure to influence a formally independent state, often a former colony.
- **Currency:** 14 West and Central African states use two CFA franc currencies that are pegged to the euro and were long backed by the French Treasury.
- **Debt and loans:** lenders can attach conditions to loans that shape a borrower's spending and trade policy.
- **Resource extraction:** foreign firms that control mines or oil fields can send most profits abroad.
- **New lenders:** critics describe some of China's Belt and Road loans (begun in 2013) as neocolonial; others argue the "debt trap" label is overstated. Treat this as a debated case.

**Core-periphery link:** Immanuel Wallerstein's **world-systems theory** (1970s) divides the world into **core**, **semi-periphery** and **periphery**. Neocolonialism helps explain why many peripheral states still export raw materials to the core. *Limitation:* the model simplifies, and states can move between tiers, as South Korea did.

### Shatterbelts
A **shatterbelt** (Saul Cohen's term) is a region caught between stronger, competing outside powers, internally divided and often fragmented by conflict.
- **Eastern Europe** in the early and middle 20th century, between Germany and Russia.
- **Southeast Asia** during the Cold War, when the US and the Soviet Union backed rival sides.
- **The Middle East**, where outside powers have competed for influence since the Cold War.

*Limitation:* the label describes a region from the viewpoint of **outside powers**, which can hide local causes of conflict, and a region can move in and out of shatterbelt status.

### Choke Points
A **choke point** is a narrow passage on a major route. Whoever controls it can tax, slow or block trade, which gives a small area outsized power.

| Choke point | Connects | Why it matters |
|---|---|---|
| **Strait of Hormuz** | Persian Gulf and Arabian Sea | About one-fifth of the world's oil consumption passes through it |
| **Strait of Malacca** | Indian Ocean and South China Sea | One of the busiest shipping lanes, linking East Asia to Europe and the Middle East |
| **Suez Canal** (opened 1869) | Mediterranean and Red Sea | In 2021 one grounded ship, the Ever Given, blocked it for six days |
| **Panama Canal** (opened 1914) | Atlantic and Pacific | A 2023 drought forced limits on daily ship crossings |
| **Bosporus** | Black Sea and Mediterranean | Turkey regulates passage under the Montreux Convention (1936) |
`
    },
    {
      id: 'hgpoliti2-contested',
      type: 'text' as const,
      content: `
## Contested Territory and Power Across Scales

| Territory | Who claims it | Current situation |
|---|---|---|
| **Kashmir** | India, Pakistan and China | Divided by a Line of Control since the wars that followed the 1947 partition |
| **Crimea** | Ukraine and Russia | Annexed by Russia in 2014; most UN members do not recognize the annexation |
| **Antarctica** | Seven states claim parts | The Antarctic Treaty (signed 1959) freezes the claims and reserves the continent for peaceful science |

### Power Across Scales
Political power is not only national:
- **Local:** city councils draw zoning lines; neighborhood groups contest land use.
- **Subnational:** states and provinces control schools and policing in federal systems.
- **National:** states guard borders and claim sea zones.
- **Supranational:** alliances and unions limit what members may do (Part 5).

> 🔑 **AP Connection:** For a "describe a type of political power" question, name the tool (currency, loans, a strait, a treaty), say **who** controls it and **what** it controls, and give the scale.
`
    },
    {
      id: 'hgpoliti2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which situation is the clearest example of neocolonialism?',
            options: [
              'A former ruling power keeps influence over an independent state through its currency and loan terms',
              'A colonial power governs a territory directly through a governor it appoints',
              'A newly independent state chooses its own official language by referendum',
              'Two neighboring states sign a treaty to demarcate their shared border'
            ],
            correctAnswer: 0,
            explanation: 'Neocolonialism is indirect influence over a state that is formally independent, through tools such as currency arrangements and loan conditions. Direct rule by an appointed governor is colonialism itself, and choosing a language or demarcating a border are ordinary acts of sovereignty.'
          },
          {
            question: 'Why do the states along the Strait of Hormuz hold geopolitical power?',
            options: [
              'About a fifth of world oil passes through it',
              'It marks the edge of the largest EEZ on Earth',
              'It is the main sea link between the Atlantic and Pacific',
              'Its shores hold most of the world\'s remaining freshwater'
            ],
            correctAnswer: 0,
            explanation: 'Hormuz is a choke point: roughly one-fifth of the world\'s oil consumption moves through it, so the states beside it can threaten to disrupt global energy supplies. The Panama Canal, not Hormuz, links the Atlantic and Pacific, and the strait is not notable for EEZ size or freshwater.'
          },
          {
            question: 'During the Cold War, Southeast Asia was called a shatterbelt. What does that label mean?',
            options: [
              'A region caught between rival outside powers and divided by conflict',
              'A region whose boundaries were drawn before most people settled there in large numbers',
              'A border zone where two states share control of a resource',
              'A group of states that join together in a common market'
            ],
            correctAnswer: 0,
            explanation: 'A shatterbelt is an internally divided region where competing outside powers back rival sides, as the US and the Soviet Union did in Vietnam and its neighbors. Boundaries drawn before settlement are antecedent, and a shared resource zone or a common market describes cooperation, not fragmentation.'
          }
        ]
      }
    }
  ]
};
