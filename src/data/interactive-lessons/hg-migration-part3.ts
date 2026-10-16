export const hgMigrationPart3Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat3-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 3 of 7 — Forced and Voluntary Migration: Cases**

---

| Section |
|---------|
| 📖 Forced Migration: Slavery and Displacement |
| Refugees, IDPs and Asylum Seekers |
| Voluntary Migration: Seven Types With Cases |
| The Forced–Voluntary Spectrum |

> 🔑 **Key Concept:** **Forced migration** happens when people are compelled to move by violence, persecution, enslavement or disaster and have little or no choice. **Voluntary migration** happens when people choose to move, usually for economic opportunity. The two are ends of a **spectrum**, and many real moves sit somewhere in between.
`
    },
    {
      id: 'hgmigrat3-forced',
      type: 'text' as const,
      content: `
## 📖 Forced Migration: Slavery and Displacement

### The Transatlantic Slave Trade

The largest forced migration in history moved enslaved Africans across the Atlantic between the early 1500s and the 1860s. The **Trans-Atlantic Slave Trade Database** estimates that about **12.5 million** people were embarked on slave ships, and about **10.7 million** survived the Middle Passage to land in the Americas.

**The flow, described as a map in text:** arrows begin along the West and West-Central African coast, from Senegambia south to Angola. The thickest arrows run to **Brazil** and the **Caribbean**, where sugar plantations demanded the most labor and where death rates were so high that planters kept importing new captives. A much thinner arrow, under 400,000 people, reaches mainland North America.

**Lasting effects:** the African diaspora in the Americas; Afro-Brazilian religions such as Candomblé; population loss and political disruption in West and West-Central Africa; the racial geography of plantation regions that still shows up in present-day maps of the US South and northeastern Brazil.

### Modern Forced Displacement

UNHCR counted about **117 million** people forcibly displaced worldwide at the end of **2023**, more than double the figure of a decade earlier.

| Case | Cause | Where people went |
|---|---|---|
| **Syria** (civil war from 2011) | War, bombing, persecution | Millions to Turkey, Lebanon and Jordan; about 1 million to Germany and other EU states; millions more displaced inside Syria |
| **Ukraine** (Russian invasion, February 2022) | War | About 6 million refugees recorded across Europe, largest numbers in Germany and Poland; millions displaced inside Ukraine |
| **Rohingya** (Myanmar, 2017) | Ethnic and religious violence by the military; the group was denied citizenship | More than 700,000 to camps near Cox's Bazar, Bangladesh |

### Worked Example: Classifying Ukrainians in 2022

Three Ukrainians leave Kharkiv after the invasion begins.

| Person | What happens | Classification |
|---|---|---|
| Olena | Moves west to Lviv, inside Ukraine | **Internally displaced person (IDP)**: forced, but no border crossed |
| Andriy | Crosses into Poland and receives EU temporary protection | **Refugee** (in UNHCR's counts), protected outside his country |
| Iryna | Reaches Canada and files an individual claim for protection that has not yet been decided | **Asylum seeker** until the claim is decided |

All three moves are **forced** and have the **same cause**. The legal label depends on **where** each person ends up and **what status** they hold.
`
    },
    {
      id: 'hgmigrat3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A family flees fighting in eastern Ukraine and settles with relatives in western Ukraine. How is the family classified?',
            options: [
              'As refugees under international law',
              'As internally displaced persons',
              'As asylum seekers awaiting a decision',
              'As voluntary internal migrants'
            ],
            correctAnswer: 1,
            explanation: 'The family was forced to move but never crossed an international border, so they are internally displaced persons. Refugee and asylum status both require being outside one\'s own country, and fleeing war is not voluntary.'
          },
          {
            question: 'In the transatlantic slave trade, the largest flows of enslaved Africans went to',
            options: [
              'the Caribbean and mainland North America',
              'Brazil and the Caribbean',
              'mainland North America and Brazil',
              'Spanish Mexico and Central America'
            ],
            correctAnswer: 1,
            explanation: 'Sugar plantations in Brazil and the Caribbean absorbed the great majority of enslaved Africans. Mainland North America received a comparatively small share, under 400,000 people, and Spanish Mexico and Central America far fewer than the Caribbean.'
          },
          {
            question: 'Which statement best describes the difference between a refugee and an asylum seeker?',
            options: [
              'A refugee is protected outside their own country; an asylum seeker\'s claim is still pending',
              'A refugee moves inside their own country; an asylum seeker crosses an international border',
              'A refugee is fleeing a natural disaster; an asylum seeker is fleeing political persecution',
              'A refugee moves for economic reasons; an asylum seeker moves to escape war or violence'
            ],
            correctAnswer: 0,
            explanation: 'Both are outside their own country, but a refugee has been recognized as needing protection while an asylum seeker is waiting for a decision. Someone who stays inside their own country is an IDP, and the refugee definition centers on persecution, not disasters or wages.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat3-definitions',
      type: 'text' as const,
      content: `
## Refugees, IDPs and Asylum Seekers

| Term | Definition | Crossed a border? | Source of the definition |
|---|---|---|---|
| **Refugee** | Outside their country with a well-founded fear of persecution because of race, religion, nationality, membership of a particular social group or political opinion | Yes | 1951 Refugee Convention and its 1967 Protocol |
| **Asylum seeker** | Has asked another country for protection; the claim has **not yet been decided** | Yes | National asylum systems |
| **Internally displaced person (IDP)** | Forced from home but **still inside their own country** | No | UN Guiding Principles on Internal Displacement (1998) |

### Reading UNHCR's End-2023 Figures

Of the roughly **117 million** forcibly displaced people at the end of 2023:
- the **largest group were IDPs**, about 68 million;
- refugees and others needing international protection numbered about 43 million;
- asylum seekers numbered about 7 million.

**Two patterns to notice:**
1. **Most displaced people never leave their own country.** IDPs outnumber refugees, which matches Ravenstein's short-distance generalization from Part 2.
2. **Most refugees stay close to home.** About 7 in 10 live in a neighboring country, and low- and middle-income countries host most of the world's refugees, not the rich countries of Europe and North America.

> ⚠️ **"Refugee" is a legal category.** People fleeing poverty, or a hurricane, do **not** meet the 1951 Convention definition, however desperate they are. That is why "environmental refugee" is a contested term (see the last section).

> 🔑 **AP Connection:** The exam often gives a short scenario and asks you to classify it. Ask two questions in order: **Was the move forced?** Then: **Did the person cross an international border, and has protection been granted?**
`
    },
    {
      id: 'hgmigrat3-voluntary',
      type: 'text' as const,
      content: `
## Voluntary Migration: Seven Types With Cases

| Type | What it means | Case |
|---|---|---|
| **Transnational migration** | Migrants keep strong economic, social and political ties to both home and host countries | Mexican hometown associations in Chicago and Los Angeles that fund roads and schools in their home towns |
| **Transhumance** | Seasonal movement of herders and livestock between pastures, often uphill in summer and downhill in winter | Herders moving cattle to high Alpine pastures each summer; Fulani herders following the rains across the Sahel |
| **Internal migration** | Moving within one country | Americans moving from the Northeast and Midwest to the Sun Belt |
| **Chain migration** | Following relatives or neighbors who moved earlier | Villages in Kerala sending generations of workers to the same Gulf cities |
| **Step migration** | Reaching a destination in stages | Village → regional town → Manila → a job abroad |
| **Guest workers** | Temporary, government-approved labor migration | The US **Bracero Program** (1942–1964), about 4.6 million contracts for Mexican farm workers; West Germany's **Gastarbeiter** agreements with Italy (1955), Turkey (1961) and others, ended in 1973 |
| **Rural-to-urban migration** | Moving from farms and villages to cities | China's **floating population** of about 376 million people living away from their registered home (2020 census) |

**Two kinds of internal migration.** **Interregional migration** is a move from one region of a country to another, such as the Great Migration from the South to Northern cities or the shift from the Rust Belt to the Sun Belt. **Intraregional migration** is a move within the same region, such as from a central city to its suburbs or from a village to a nearby city.

### Two Cases in More Depth

**China's hukou system.** Since 1958 every Chinese citizen has had a **hukou**, a household registration tied to a birthplace and classified as rural or urban. Hundreds of millions of rural people moved to factory cities such as Shenzhen and Dongguan after economic reforms began in 1978, but without an urban hukou many could not easily get public schooling or health care for their families in the city. The result is **circular, split-household migration**: workers in the city, children and grandparents in the village.

**The Great Migration (about 1910–1970).** About **6 million** African Americans moved from the rural South to cities in the North, Midwest and West.
- **Push factors:** Jim Crow segregation laws, racial violence including lynching, and sharecropping poverty worsened by the boll weevil's damage to cotton.
- **Pull factors:** industrial jobs during World War I and World War II, when European immigration fell and factories needed workers; Black newspapers such as the *Chicago Defender* advertised the North.
- **Chain migration shaped destinations:** people from Mississippi tended to go to Chicago, people from the Carolinas and Virginia to Philadelphia and New York, following rail lines and relatives.

> 🔑 **AP Connection:** Guest workers often **stay**. Germany expected Turkish workers to rotate home, but many settled, brought families and formed a Turkish-German community of several million. "Temporary" labor migration frequently becomes permanent migration and chain migration.
`
    },
    {
      id: 'hgmigrat3-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Type** 🔍

Choose the type of migration each case best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A Kyrgyz herding family moves its sheep to high mountain pastures every June and back down every October: ___',
            options: ['transhumance', 'step migration', 'chain migration', 'transnational migration']
          },
          {
            label: 'A Salvadoran woman in Los Angeles sends money home, votes in Salvadoran elections and visits every year: ___',
            options: ['transhumance', 'step migration', 'internal migration', 'transnational migration']
          },
          {
            label: 'A Mexican farm worker holds a 1950s US government contract to harvest crops in California for one season: ___',
            options: ['guest worker', 'asylum seeker', 'internally displaced', 'transhumance']
          },
          {
            label: 'A worker from rural Sichuan takes a factory job in Shenzhen but keeps a rural hukou: ___',
            options: ['rural-to-urban migration', 'transhumance', 'international migration', 'counter-stream']
          },
          {
            label: 'A family moves from a Chicago apartment to a house in a suburb in the same metropolitan area: ___',
            options: ['intraregional migration', 'interregional migration', 'step migration', 'guest worker']
          }
        ],
        correctAnswers: ['transhumance', 'transnational migration', 'guest worker', 'rural-to-urban migration', 'intraregional migration'],
        hint1: 'Seasonal movement with livestock has its own name; so does keeping active ties to two countries at once.',
        hint2: 'The Bracero Program issued temporary, government-approved labor contracts.',
        hint3: 'Shenzhen is a Chinese city, and the worker came from a village in the same country.',
        explanation: 'Seasonal herding is transhumance; keeping active ties to two countries is transnational migration; Bracero contracts made Mexican farm workers guest workers; moving from a Sichuan village to Shenzhen is rural-to-urban internal migration; and a move from the city to its own suburbs stays inside one region, so it is intraregional rather than interregional migration.'
      }
    },
    {
      id: 'hgmigrat3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which pair of factors best explains the timing of the Great Migration\'s two largest waves?',
            options: [
              'World wars cut European immigration and raised industrial labor demand',
              'The Dust Bowl drought and New Deal farm programs pushed out farm workers',
              'The 1965 immigration law and new interstate highways opened Northern jobs',
              'The end of slavery and Reconstruction-era land grants gave families money'
            ],
            correctAnswer: 0,
            explanation: 'Both world wars cut immigration from Europe while war industries in Northern cities needed labor, which pulled Southern Black workers north. The 1965 law and interstate highways came after the main waves, and Reconstruction ended decades before the migration began.'
          },
          {
            question: 'West German guest-worker programs of the 1950s and 1960s assumed workers would return home. What happened to many Turkish workers instead?',
            options: [
              'They were all deported after the recruitment stop in 1973',
              'They stayed, brought families and formed lasting communities',
              'They moved on to the United States as step migrants',
              'They returned to Turkey as soon as the 1961 agreement ended'
            ],
            correctAnswer: 1,
            explanation: 'After recruitment stopped in 1973, many Turkish workers stayed and used family reunification to bring spouses and children, creating a large Turkish-German community. There was no mass deportation, and onward migration to the United States was not the pattern.'
          },
          {
            question: 'Why is China\'s rural-to-urban migration often circular rather than a single permanent move?',
            options: [
              'Hukou rules limit city services for migrants\' families',
              'City wages in China are lower than rural farm incomes',
              'The government requires migrants to return each harvest',
              'Most migrants move only for transhumance each summer'
            ],
            correctAnswer: 0,
            explanation: 'Without an urban hukou, migrants often cannot easily get public schooling or health care for their families in the city, so children and grandparents stay in the village and workers move back and forth. City wages are higher, which is why people move at all.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat3-spectrum',
      type: 'text' as const,
      content: `
## The Forced–Voluntary Spectrum

Real migrations do not always fit neatly into "forced" or "voluntary."

| More forced ◀ | ▶ More voluntary |
|---|---|
| Enslaved Africans; Rohingya fleeing military violence | Syrians who stayed in Turkey for years, then chose to move on to Germany |
| Hurricane Katrina evacuees who could not return | Venezuelans leaving a collapsing economy and political crisis |
| Families fleeing gang threats in Central America | A software engineer moving from Bangalore to Seattle for a higher salary |

### Why Classification Is Contested

**Environmental migrants.** Hurricane Katrina (2005) forced more than a million Gulf Coast residents to evacuate. New Orleans had about 485,000 people in 2000 and about 344,000 in 2010; many evacuees settled permanently in Houston, Atlanta and elsewhere. Were they forced? At first, yes. Later, staying away was partly a choice shaped by lost homes and jobs. Because they stayed inside the US, they were never "refugees" in the legal sense, even though the media used the word.

**Mixed motives.** About **7.7 million** Venezuelans had left their country by 2024 amid hyperinflation, food shortages and political repression. Many do not hold formal refugee status, yet few would call their move freely chosen. UNHCR counts many as "other people in need of international protection" rather than as refugees.

**Why the label matters:**
- **Legal protection:** recognized refugees cannot be returned to danger (the principle of **non-refoulement**); economic migrants can be deported.
- **Politics:** governments may describe arrivals as "economic migrants" to justify turning them away, while advocates stress the forced elements.
- **Data:** the label decides which statistics a person appears in.

> 🔑 **AP Connection:** If a stimulus describes a mix of causes, it is fine, and often better, to say a move has **both forced and voluntary elements** and explain each. Graders reward explanations that match the evidence, not forced choices between two boxes.
`
    },
    {
      id: 'hgmigrat3-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

**1)** About how many millions of enslaved Africans were embarked on ships in the transatlantic slave trade, according to the Trans-Atlantic Slave Trade Database? Enter a number.

**2)** What is the name of China's household registration system that ties public services to a person's registered home?

**3)** About how many millions of African Americans moved north and west in the Great Migration? Enter a number.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['12.5', 'hukou', '6'],
        hint1: 'About 10.7 million survived the voyage; the number embarked was higher.',
        hint2: 'A four-letter word introduced in 1958.',
        hint3: 'The migration ran from about 1910 to 1970.',
        explanation: '1) About 12.5 million people were embarked, of whom about 10.7 million survived the crossing. 2) The hukou system classifies people by registered home. 3) About 6 million African Americans left the rural South between about 1910 and 1970.'
      }
    },
    {
      id: 'hgmigrat3-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Apply the Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Residents of a Pacific island leave for New Zealand as rising seas contaminate their wells. Why do they usually not qualify as refugees under the 1951 Convention?',
            options: [
              'Environmental change is not persecution',
              'They crossed an international border',
              'They moved a long distance by sea',
              'Their move was organized by family'
            ],
            correctAnswer: 0,
            explanation: 'The Convention protects people fleeing persecution for race, religion, nationality, social group or political opinion, and environmental change is none of these. Crossing a border is required for refugee status, and distance or family help is irrelevant.'
          },
          {
            question: 'Which case sits closest to the voluntary end of the migration spectrum?',
            options: [
              'A Rohingya family crossing into Bangladesh after attacks on their village',
              'A Venezuelan teacher leaving as hyperinflation wipes out her salary',
              'A New Orleans family that never returned after Hurricane Katrina',
              'A German engineer taking a better-paid job in Zurich, Switzerland'
            ],
            correctAnswer: 3,
            explanation: 'The engineer faces no threat or crisis and moves for a better job, a clear voluntary economic move. The Rohingya family fled violence, and the Venezuelan and Katrina cases mix forced and chosen elements.'
          }
        ]
      }
    }
  ]
}
