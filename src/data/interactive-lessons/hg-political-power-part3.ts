export const hgPoliticalPowerPart3Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpoliti3-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Power & Territoriality

**Part 3 of 7 — Centripetal and Centrifugal Forces: Weighing the Balance**

---

| Section |
|---------|
| 📖 A Catalog of Forces |
| Tools States Use to Hold Together |
| Three Worked Cases: Switzerland, Tanzania, the Soviet Union |
| Weighing the Balance |

> 🔑 **Key Concept:** Every state contains forces that **pull it apart** (centrifugal) and forces that **hold it together** (centripetal). Whether a state stays whole depends on the **balance** between them, not on the presence of any one force (CED Topic 4.10). Diversity alone does not break states apart, and unity alone does not guarantee stability.
`
    },
    {
      id: 'hgpoliti3-catalog',
      type: 'text' as const,
      content: `
## 📖 A Catalog of Forces

| Category | Centripetal (unifying) | Centrifugal (dividing) |
|---|---|---|
| **Culture** | A shared or widely spoken language; a shared religion or a tolerant secular state | Rival languages or religions concentrated in different regions |
| **Identity** | **Nationalism** that includes all groups; a shared history | **Ethnonationalism** in one region; a **stateless nation** seeking its own state |
| **Institutions** | Trusted courts, elections, army and schools that serve every region | Institutions seen as serving one group |
| **Economy** | Integrated national markets; transfers that share wealth | **Uneven development**: one region much richer or poorer than others |
| **Infrastructure** | Roads, railways and media that link regions to each other | Regions linked more to neighbors abroad than to their own capital |
| **Physical geography** | Compact territory without major barriers | Mountains, deserts or seas separating regions |
| **External** | A shared outside threat | Outside powers backing one side |

### Why Location Matters
A minority spread thinly across a whole country rarely threatens unity. A minority **concentrated in one region**, especially a border region, can claim that region as a homeland. That is why the map of where a group lives matters as much as its size.

> 🔑 **AP Connection:** In an FRQ, always name **which force**, **which group or region**, and **the outcome**. "Language is a centrifugal force" earns little; "French speakers concentrated in Quebec support sovereignty movements" earns the point.
`
    },
    {
      id: 'hgpoliti3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Two states each have a minority that is 15 percent of the population. Which minority is more likely to become a centrifugal force?',
            options: [
              'One spread evenly across every province of the state',
              'One concentrated in a single border region it calls home',
              'One living mostly in the national capital and its suburbs',
              'One that speaks the national language as its first language'
            ],
            correctAnswer: 1,
            explanation: 'A minority concentrated in one region can claim it as a homeland and seek autonomy or independence; a border location adds the chance of support from abroad. A thinly spread or capital-based group has no territory to claim.'
          },
          {
            question: 'A government builds a national highway and railway network that links every region directly to the capital. This is best described as a ___',
            options: [
              'centripetal force',
              'centrifugal force',
              'devolutionary force',
              'supranational force'
            ],
            correctAnswer: 0,
            explanation: 'Infrastructure that ties regions to the capital and to each other strengthens national unity, so it is centripetal. Devolution and supranationalism move power away from the national government.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti3-tools',
      type: 'text' as const,
      content: `
## Tools States Use to Hold Together

| Tool | How it works | Example |
|---|---|---|
| **Iconography** | Flags, anthems, holidays, monuments and currency that celebrate a shared identity | National Independence Day celebrations; national heroes on banknotes |
| **National language and schooling** | One language of instruction and a shared curriculum | Swahili in Tanzania (below) |
| **Forward capital** | A capital moved toward the interior or a contested frontier to signal national priorities and develop new regions | **Brasília**, inaugurated in **1960** to pull development inland from Brazil's coast; **Astana**, Kazakhstan's capital since **1997**, moved north, nearer to regions with many ethnic Russians |
| **Power-sharing** | Guaranteed roles for each major group in government | Switzerland's federal council (below) |
| **Federalism and autonomy** | Giving regions control of schools, language and culture so they do not need independence | Swiss cantons; Spain's autonomous communities |

**Limit:** the same tool can backfire. A single national language unites where no group dominates, but can feel like domination where one large group imposes its language on others, as Sri Lanka's 1956 "Sinhala Only" law did for Tamil speakers.
`
    },
    {
      id: 'hgpoliti3-cases',
      type: 'text' as const,
      content: `
## Three Worked Cases

**Case 1: Switzerland, diverse but stable**
- **Four national languages.** Main languages in 2022 (Swiss Federal Statistical Office, rounded): German about **62 percent**, French about **23 percent**, Italian about **8 percent**, Romansh under **1 percent**.
- **Centrifugal:** language regions are clearly concentrated; the country was split between Catholic and Protestant cantons and fought a brief civil war in **1847**.
- **Centripetal:** a federal constitution since **1848** gives the **26 cantons** control over schools, language and taxes; every major party shares seats on the seven-member Federal Council; frequent national referendums give every region a voice.
- **Cross-cutting cleavages:** language and religious lines do **not** match. There are Catholic and Protestant French speakers and Catholic and Protestant German speakers, so no single divide lines up all the differences.
- **Balance:** strongly centripetal.

**Case 2: Tanzania, many groups and one shared language**
- More than **120** ethnic groups, none large enough to dominate.
- After independence in 1961, President Julius Nyerere promoted **Swahili**, a trade language not tied to any one large ethnic group, in schools and government.
- **Centrifugal:** the islands of **Zanzibar**, united with the mainland in 1964, keep their own president and a separate identity.
- **Balance:** centripetal at the national scale, with tension at the regional scale.

**Case 3: The Soviet Union, held together until 1991**
- **15 union republics**, each named for a nationality. In the 1989 census, Russians were only about **half** of the population.
- **Centripetal:** the Communist Party, the army, central planning and Russian as the shared language.
- **Centrifugal:** nationalism in the Baltic republics, the Caucasus and Ukraine; economic decline in the 1980s; reforms that allowed open criticism.
- **Outcome:** when the party's control weakened, the centrifugal forces won. The Soviet Union dissolved in **December 1991** into **15 independent states**.
`
    },
    {
      id: 'hgpoliti3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In Switzerland, language lines and religious lines do not match. Why does this help hold the country together?',
            options: [
              'Each group shares a trait with people on the other side of another divide',
              'It means that most Swiss people now speak all four national languages',
              'It allows each canton to secede if a majority of its voters choose to',
              'It removes any need for national referendums on disputed questions'
            ],
            correctAnswer: 0,
            explanation: 'With cross-cutting cleavages, a French-speaking Catholic shares religion with German-speaking Catholics, so no single divide separates two solid blocs. Most Swiss do not speak all four languages, and cantons have no right to secede.'
          },
          {
            question: 'Why was Swahili an effective unifying language for Tanzania?',
            options: [
              'It was the first language of most Tanzanians',
              'It was not tied to any one large ethnic group',
              'It was the language of the colonial government',
              'It was spoken only on the islands of Zanzibar'
            ],
            correctAnswer: 1,
            explanation: 'Because Swahili belonged to no dominant ethnic group, adopting it did not favor one group over others. Most Tanzanians learned it as a second language, and the colonial language was English.'
          },
          {
            question: 'Which change most directly let centrifugal forces win in the Soviet Union?',
            options: [
              'The weakening of Communist Party control',
              'The arrival of Russian as a shared language',
              'The construction of new railways to Siberia',
              'The creation of an all-Soviet national army'
            ],
            correctAnswer: 0,
            explanation: 'The party was the main force holding the republics together, so when its control weakened, nationalist movements could push for independence. A shared language, railways and an army were centripetal forces.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti3-weigh',
      type: 'text' as const,
      content: `
## Weighing the Balance

A three-step method for any case:
1. **List** the strongest centripetal and centrifugal forces, each tied to a place or group.
2. **Locate** them: are the dividing forces concentrated in one region? Do the uniting forces reach every region?
3. **Judge** the outcome and its scale: stability, autonomy, devolution, conflict or breakup.

| Outcome | Typical balance | Example |
|---|---|---|
| **Stable unity** | Strong institutions and cross-cutting divides | Switzerland |
| **Autonomy or devolution** | A concentrated regional identity inside a trusted state | Zanzibar's own president inside Tanzania |
| **Breakup** | Central power collapses while regional nationalism is strong | The Soviet Union in 1991 |

> 🔑 **AP Connection:** Batch questions often show a map or table and ask for "one centripetal and one centrifugal force." Use the same place for both and explain the **net effect**.
`
    },
    {
      id: 'hgpoliti3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Force** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Brazil moving its capital inland to Brasília in 1960 is an example of a ___',
            options: ['forward capital', 'primate city', 'gerrymander', 'shatterbelt']
          },
          {
            label: 'A national holiday with flags, parades and an anthem is part of a state\'s ___',
            options: ['iconography', 'devolution', 'irredentism', 'balkanization']
          },
          {
            label: 'A region far richer than the rest of the country resents paying for poorer regions. This is a centrifugal force based on ___',
            options: ['uneven development', 'shared language', 'iconography', 'compact shape']
          }
        ],
        correctAnswers: ['forward capital', 'iconography', 'uneven development'],
        hint1: 'The capital moved toward the interior to develop it.',
        hint2: 'Symbols of national identity.',
        hint3: 'Differences in wealth between regions.',
        explanation: 'Brasília is a forward capital. Flags, parades and anthems are iconography. Resentment between rich and poor regions is a centrifugal force rooted in uneven development.'
      }
    }
  ]
};
