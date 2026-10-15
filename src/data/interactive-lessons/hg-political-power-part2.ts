export const hgPoliticalPowerPart2Data = {
  topicSlug: 'hg-political-power',
  sections: [
    {
      id: 'hgpoliti2-intro',
      type: 'text' as const,
      content: `
# 🌍 Political Power & Territoriality

**Part 2 of 7 — How States Divide Power: Four Cases on the Spectrum**

---

| Section |
|---------|
| 📖 Who Controls What? |
| Four Cases: France, China, Germany, Russia |
| Measuring Decentralization |
| Why States Choose a Form |

> 🔑 **Key Concept:** Part 1 defined **unitary** and **federal** states. The CED's point is that each form **distributes power differently across territory** (CED Topic 4.7). This part asks the practical question: **which decisions are made at which scale**, and how do real states mix the two forms?
`
    },
    {
      id: 'hgpoliti2-levels',
      type: 'text' as const,
      content: `
## 📖 Who Controls What?

A useful way to compare states is to list **who decides** on common public services.

| Decision | United States (federal) | France (unitary) |
|---|---|---|
| **School curriculum** | Set mostly by the 50 states and local school districts | Set nationally by the Ministry of Education in Paris |
| **Police** | Mostly city, county and state forces | Mainly two national forces, the National Police and the Gendarmerie |
| **Criminal law** | Each state writes its own criminal code | One national criminal code |
| **Regional leaders** | Governors elected by each state's voters | Each département also has a **prefect**, appointed by the national government |
| **Changing regional powers** | Needs a constitutional amendment or court ruling | Parliament can change them by ordinary law |

### The Key Test
In a **federal** state, regional powers are **protected by the constitution**: the center cannot simply take them away. In a **unitary** state, regional governments exist because the center created them, and the center can reshape or abolish them.

> 🔑 **AP Connection:** When a question asks you to compare forms of governance, name a **specific power** (schools, police, taxes) and the **level** that controls it. That is more convincing than "federal means shared power."
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
            question: 'Which fact is the clearest evidence that a state is federal rather than unitary?',
            options: [
              'It holds regular elections for its regional councils',
              'Its constitution protects the powers of its regions',
              'It has a large land area and population',
              'Its regions collect some local taxes'
            ],
            correctAnswer: 1,
            explanation: 'Constitutional protection of regional powers is the defining test of federalism. Unitary states such as France also hold regional elections and let local governments collect some taxes, and size alone does not set the form.'
          },
          {
            question: 'In France, a national official called a prefect represents the central government in each département. What does this show?',
            options: [
              'The center keeps a direct presence in every region',
              'Regions elect their own leaders without national input',
              'France shares power through a federal constitution',
              'Each département writes its own criminal code'
            ],
            correctAnswer: 0,
            explanation: 'Appointed prefects carry national authority into each département, a hallmark of a centralized unitary state. France has one criminal code and no federal constitution.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti2-cases',
      type: 'text' as const,
      content: `
## Four Cases: France, China, Germany, Russia

**Case 1: France, a centralized unitary state**
- The **départements** were created in **1790**, after the Revolution, partly to break the power of the old provinces. There are 101 today, including 5 overseas.
- In **2016**, Paris merged the 22 metropolitan regions into **13**. The regions had no say, which shows that in a unitary state the center can redraw the internal map by law.
- **Corsica** has had a special single regional government since 2018, an example of limited devolution inside a unitary state.

**Case 2: China, a unitary state with special zones**
- Provinces carry out national policy, and their top leaders are chosen through the Communist Party.
- **Five autonomous regions**, including Tibet and Xinjiang, were created for large ethnic minorities, but key decisions remain with Beijing.
- **Two special administrative regions**: Hong Kong (returned by Britain in **1997**) and Macau (returned by Portugal in **1999**) under "one country, two systems." Beijing's **2020** National Security Law for Hong Kong showed that the center can narrow that autonomy.

**Case 3: Germany, federal by design**
- The **Basic Law of 1949**, written after the Nazi dictatorship, deliberately spread power among the states, or **Länder**, so no central government could again control everything.
- **16 Länder** since reunification in **1990**. They run schools, universities and most policing, and their governments sit in the **Bundesrat**, the chamber that votes on laws affecting the states.

**Case 4: Russia, federal on paper, centralized in practice**
- The 1993 constitution created a federation of more than 80 regions, including ethnic republics such as Tatarstan and Chechnya.
- In **2004** the president ended the direct election of regional governors. Elections returned in 2012, but with filters that keep candidates loyal to the center.

### Scale Check
- **National scale:** all four states have regional governments.
- **Regional scale:** what those governments can actually decide differs sharply, from Bavaria's control of its schools to a Chinese autonomous region that cannot set its own language policy.
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
            question: 'In 2016, France merged its 22 metropolitan regions into 13 without the regions\' consent. Which feature of governance does this illustrate?',
            options: [
              'Federalism',
              'Unitary control',
              'Supranationalism',
              'Devolution'
            ],
            correctAnswer: 1,
            explanation: 'Redrawing regions by national law, without their agreement, shows that power rests with the center in a unitary state. Devolution would move power toward the regions, not let the center reshape them.'
          },
          {
            question: 'Why is Russia often described as federal in form but centralized in practice?',
            options: [
              'Its regions have legal status, yet Moscow controls who leads them',
              'Each region writes its own constitution and conducts its own foreign policy',
              'It belongs to supranational bodies that limit the powers of its central state',
              'It was split into separate sovereign states when the Soviet Union dissolved'
            ],
            correctAnswer: 0,
            explanation: 'Russia\'s constitution creates a federation, but ending, then filtering, direct elections of governors keeps regional leaders loyal to Moscow. Regions do not run foreign policy, and the Soviet breakup is a separate event.'
          },
          {
            question: 'Germany\'s 1949 Basic Law spread power among the Länder mainly to ___',
            options: [
              'prevent another central dictatorship',
              'reward regions that had resisted occupation',
              'prepare for joining the European Union',
              'separate the major language groups'
            ],
            correctAnswer: 0,
            explanation: 'After the Nazi era, Germany\'s founders divided power so that no central government could again control everything. The EU did not yet exist, and Germany is not divided into separate language regions.'
          }
        ]
      }
    },
    {
      id: 'hgpoliti2-measure',
      type: 'text' as const,
      content: `
## Measuring Decentralization

The legal label does not always match how much regional and local governments actually do. One measure is the **share of all government spending** made by regional and local governments.

| State | Form | Regional and local share of public spending (OECD, late 2010s, rounded) |
|---|---|---|
| **Denmark** | Unitary | about **60 percent** |
| **France** | Unitary | about **20 percent** |

**Reading it:** Denmark is unitary, yet its municipalities and regions run hospitals, schools and elder care, so they spend most public money. France, also unitary, spends mostly through the center. The **form** is the same; the **degree of decentralization** is very different.

### Limits of the Measure
- Spending is not the same as **decision-making**: Danish municipalities spend money under national rules.
- One national figure hides differences **between regions**, such as Corsica's special status in France.

## Why States Choose a Form

| Factor | Tends toward federal | Tends toward unitary |
|---|---|---|
| **Size** | Large territory (US, Brazil, Australia) | Small territory (Denmark, Netherlands) |
| **Diversity** | Strong regional identities (Switzerland, India) | One dominant national identity (Japan) |
| **History** | Separate colonies or states joined together (US, Australia) | A strong monarchy or revolution built a central state (France) |

These are tendencies, not rules: China is huge and diverse but unitary; Belgium is small but became federal in 1993.
`
    },
    {
      id: 'hgpoliti2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Classify the Governance** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Hong Kong, governed under "one country, two systems" since 1997, is a ___ of China',
            options: ['special administrative region', 'federal state', 'sovereign state', 'autonomous republic']
          },
          {
            label: 'Bavaria, which runs its own schools under Germany\'s constitution, is one of Germany\'s 16 ___',
            options: ['Länder', 'départements', 'prefectures', 'cantons']
          },
          {
            label: 'Denmark spends most public money through local governments yet remains a ___ state',
            options: ['unitary', 'federal', 'confederal', 'failed']
          }
        ],
        correctAnswers: ['special administrative region', 'Länder', 'unitary'],
        hint1: 'Macau has the same status.',
        hint2: 'The German word for the federal states.',
        hint3: 'Its local powers come from national law, not a federal constitution.',
        explanation: 'Hong Kong and Macau are special administrative regions. Germany\'s states are the Länder. Denmark is decentralized in spending but unitary in form, because its local powers rest on national law.'
      }
    }
  ]
};
