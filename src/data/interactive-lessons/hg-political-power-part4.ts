export const hgPoliticalPowerPart4Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpoliti4-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Power & Territoriality

**Part 4 of 7 — Devolutionary Factors: Reading the Cases and the Limits**

---

| Section |
|---------|
| 📖 Six Factors That Can Lead to Devolution |
| Boundaries, Agreements and Access to the Sea |
| What the Factors Can and Cannot Predict |

> 🔑 **Key Concept:** The CED names six factors that can lead to the **devolution** of states: the **division of groups by physical geography**, **ethnic separatism**, **ethnic cleansing**, **terrorism**, **economic and social problems**, and **irredentism**. Real cases usually combine several factors, and no single factor guarantees a breakup.
`
    },
    {
      id: 'hgpoliti4-factors',
      type: 'text' as const,
      content: `
## 📖 Six Factors That Can Lead to Devolution

| Factor | How it pushes power away from the center | Case |
|---|---|---|
| **Division of groups by physical geography** | Water, mountains or distance weaken ties between a region and the capital | East and West Pakistan, separated by about 1,600 km of India |
| **Ethnic separatism** | A group with its own language or identity seeks autonomy or independence | Quebec's referendums on sovereignty (1980, 1995); Catalonia |
| **Ethnic cleansing** | One group forcibly removes another from a territory, breaking up multiethnic states | Bosnia during the breakup of Yugoslavia in the 1990s |
| **Terrorism** | Violence by a separatist group pressures the state to concede power | ETA's campaign for Basque independence in Spain |
| **Economic and social problems** | A richer or poorer region resents how taxes and spending are shared | Wealthier Flanders seeking more self-rule within Belgium |
| **Irredentism** | A state claims territory in a neighboring state where its ethnic group lives | Russia's annexation of Crimea from Ukraine in 2014 |

### Worked Example: A State Split by Another: Pakistan, 1947–1971
- At independence, Pakistan had two parts, **West** and **East Pakistan**, about **1,600 km** apart, with India between them.
- East Pakistan held more people, spoke **Bengali**, and felt ruled from the West, where power and spending were concentrated.
- In **1971**, after a war, East Pakistan became **Bangladesh**.
- **Lesson:** physical separation alone did not cause the split. It combined with a **language** difference (ethnic separatism) and **uneven power and spending** (economic and social problems) to produce a breakup.
`
    },
    {
      id: 'hgpoliti4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Russia annexed Crimea from Ukraine in 2014, claiming to protect the ethnic Russians who lived there. Which devolutionary factor does this illustrate?',
            options: [
              'Ethnic cleansing',
              'Irredentism',
              'Supranationalism',
              'Terrorism'
            ],
            correctAnswer: 1,
            explanation: 'Irredentism is a state\'s claim to territory in a neighboring state where members of its ethnic group live. Ethnic cleansing is the forced removal of a group, supranationalism is cooperation among states, and terrorism is violence by nonstate groups.'
          },
          {
            question: 'Which statement best explains why East Pakistan became Bangladesh in 1971?',
            options: [
              'Bengalis resented rule from the distant west',
              'The two wings were separated by about 1,600 km of India',
              'East Pakistan was landlocked and lacked its own seaports',
              'States divided by physical barriers always split apart'
            ],
            correctAnswer: 0,
            explanation: 'The distance made the split possible, but Bengali identity and resentment of rule from the West drove it. Distance alone does not explain it, East Pakistan had seaports, and many states divided by water or mountains stay united.'
          },
          {
            question: 'Most of Indonesia\'s people live on Java, and power and spending are concentrated there. Why does this matter for devolution on Indonesia\'s outer islands?',
            options: [
              'Distant islanders may feel neglected by a center dominated by one island',
              'It removes any reason for regional governments on the outer islands',
              'It means Indonesia is a unitary state with no ethnic minorities at all',
              'It lets the government move its capital to any island without cost'
            ],
            correctAnswer: 0,
            explanation: 'When population, power and spending concentrate on one island, people on distant islands may feel neglected, which combines physical separation with economic and social grievances and can feed demands for autonomy. Concentration does not remove the need for regional government or erase ethnic diversity.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti4-access',
      type: 'text' as const,
      content: `
## Boundaries, Agreements and Access to the Sea

Land and maritime boundaries, and the agreements that govern them, can encourage or discourage interaction between states and spark disputes over resources (CED 4.5). Access to the sea is a clear example.

| Case | What happened | How it manages access |
|---|---|---|
| **Bolivia** | Lost its coast to Chile in the War of the Pacific (1879–1884), confirmed by a 1904 treaty | Uses Chilean and Peruvian ports by agreement; in **2018** the International Court of Justice ruled that Chile was not obliged to negotiate sea access |
| **Ethiopia** | Became landlocked when Eritrea gained independence in **1993** | Sends most of its trade through the port of **Djibouti** |
| **Switzerland** and **Austria** | Long landlocked | Rich and stable, with rail, river and road links through friendly neighbors |

**Reading the table:** a landlocked position raises costs, but **relations with neighbors** and **infrastructure** decide how much. Switzerland and Austria trade easily through the EU's open market; Bolivia's access depends on agreements with a former enemy.

### Colonial Lines and Access
Many boundaries were **superimposed** by outside powers. In **1890** Britain and Germany agreed to give German South West Africa a narrow strip of land reaching the Zambezi River, the **Caprivi Strip** of today's Namibia. The line served a colonial bargain over river access rather than the people living there.
`
    },
    {
      id: 'hgpoliti4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Switzerland and Bolivia are both landlocked. Which factor best explains why landlocked status costs Switzerland far less?',
            options: [
              'Its open borders and transport links with friendly neighbors',
              'Its long land border gives it more crossing points to the sea',
              'Its mountains block invasions from neighboring states',
              'Its rivers flow directly into the Pacific Ocean'
            ],
            correctAnswer: 0,
            explanation: 'Switzerland reaches the sea easily through neighbors with which it has open trade and dense rail and road links, while Bolivia depends on agreements with Chile. Border length does not create sea access, and Switzerland\'s rivers drain to the North Sea, the Mediterranean and the Black Sea.'
          },
          {
            question: 'Namibia\'s Caprivi Strip was drawn by Britain and Germany in 1890 to give a colony access to the Zambezi River. Its boundary is best classified as a ___',
            options: [
              'superimposed boundary',
              'antecedent boundary',
              'relict boundary',
              'consequent boundary'
            ],
            correctAnswer: 0,
            explanation: 'A superimposed boundary is drawn by outside powers without regard to the people and cultures already there, as colonial powers did in Africa. An antecedent boundary predates settlement, a relict boundary no longer functions, and a consequent boundary follows cultural divisions.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti4-limits',
      type: 'text' as const,
      content: `
## What the Factors Can and Cannot Predict

| A simple claim | Counter-evidence | Better conclusion |
|---|---|---|
| Physical separation splits states | **Japan** and the **Philippines** are island states that remain intact; **Pakistan** split in 1971 | Separation matters when it lines up with cultural or economic divides |
| Ethnic diversity causes breakup | **Switzerland** has four national languages yet is stable | Shared institutions and power sharing can hold diverse states together |
| Separatist votes always win | **Quebec** voters rejected sovereignty in 1980 and, narrowly, in 1995 | Devolution can be checked by compromise and by voters themselves |
| Landlocked states are poor | **Switzerland** and **Austria** are rich; **Chad** and **Bolivia** are poor | Access depends on neighbors and infrastructure |

> 🔑 **AP Connection:** Devolutionary factors work like a **possibilist** explanation: they raise pressure, but people and institutions decide the result. When you explain a devolution case, name **at least two** factors and show how they combine.

### Scale Check
Devolution is analyzed at the **national** scale, but its causes are often **regional** or **local**: a concentrated minority, a rich province, or a single disputed territory.
`
    },
    {
      id: 'hgpoliti4-input',
      type: 'input-boxes' as const,
      content: `
**Apply It** 🧮

**1)** A state of 40 million people has a linguistic minority of 6 million concentrated in one province. What percent of the population is this minority?

**2)** In a referendum, 49.4 percent of voters choose independence and the rest vote no. What percent vote no? (one decimal)

**3)** A state claiming land in a neighboring state where members of its own ethnic group live is practicing _______.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['15', '50.6', 'irredentism'],
        hint1: 'Divide 6 by 40, then multiply by 100.',
        hint2: 'Subtract 49.4 from 100.',
        hint3: 'Russia and Crimea in 2014.',
        explanation: '1) 6 ÷ 40 = 0.15, which is 15 percent. 2) 100 − 49.4 = 50.6 percent voted no, the kind of narrow margin Quebec saw in 1995. 3) Claiming a neighbor\'s territory because one\'s ethnic group lives there is irredentism.'
      }
    }
  ]
};
