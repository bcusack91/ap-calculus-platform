export const hgMigrationPart5Data = {
  topicSlug: 'hg-migration',
  sections: [
    {
      id: 'hgmigrat5-intro',
      type: 'text' as const,
      content: `
# 🌍 Migration Patterns & Processes

**Part 5 of 7 — Effects of Migration**

---

| Section |
|---------|
| 📖 Political Effects: Who Gets In |
| Economic Effects: Remittances, Brains and Labor |
| Cultural Effects: Enclaves, Assimilation and Diaspora |
| Demographic Effects and Common Misconceptions |

> 🔑 **Key Concept:** Migration changes **both ends** of the journey. The AP course sorts its effects into four categories: **political, economic, cultural and demographic**. A strong answer always says **which place** is affected (origin or destination) and **how**.
`
    },
    {
      id: 'hgmigrat5-political',
      type: 'text' as const,
      content: `
## 📖 Political Effects: Who Gets In

Migration provokes political responses, and those responses then reshape migration. **Immigration policy** decides how many people may enter, from where, and on what terms.

### US Immigration Policy Over Time

| Law or policy | What it did | Geographic effect |
|---|---|---|
| **Chinese Exclusion Act (1882)** | Barred most Chinese laborers | Sharply cut Chinese immigration for decades |
| **Immigration Act of 1924** | Set **national-origins quotas** based on the 1890 census | Favored northwestern Europe; cut flows from southern and eastern Europe and barred most Asians |
| **Immigration and Nationality Act of 1965** | Ended national-origins quotas; gave preference to **family reunification** and needed skills | Shifted the main sources toward Latin America and Asia; family preferences fed **chain migration** |

### Other Policy Tools

| Tool | How it works | Example |
|---|---|---|
| **Points-based system** | Applicants score points for education, skills, language and age | Canada, which introduced points in 1967, and Australia |
| **Guest-worker or sponsorship system** | Residence tied to a job or employer, often temporary | Gulf states' **kafala** sponsorship system |
| **Free movement zones** | Citizens of member states may live and work in any member state | The European Union, plus the Schengen Area's open internal borders |
| **Asylum rules and border controls** | Decide who can apply for protection and where | The 2016 EU–Turkey statement, which sharply cut Aegean crossings |

### Political Effects at the Destination and Origin

- **Destination:** debates over border security, citizenship and integration; the rise of anti-immigration parties in parts of Europe; immigration was a central issue in the UK's 2016 vote to leave the EU.
- **Origin:** loss of potential voters and leaders; diaspora groups lobbying from abroad; some origin governments, such as the Philippines, actively manage labor emigration.

> 🔑 **AP Connection:** "Explain a political effect of migration" wants a **policy or political response**, not a cause. Example: "Large Mexican immigration to the US contributed to political debates that produced stricter border enforcement, which raised the cost of crossing and made unauthorized migrants less likely to return home seasonally."
`
    },
    {
      id: 'hgmigrat5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Immigration and Nationality Act of 1965 changed the geography of US immigration mainly by',
            options: [
              'creating national-origins quotas that favored northwestern Europe',
              'replacing national-origins quotas with family and skill preferences',
              'introducing a guest-worker program for Mexican farm laborers',
              'establishing free movement of workers among North American countries'
            ],
            correctAnswer: 1,
            explanation: 'The 1965 Act ended the national-origins quotas created in 1924, and its family-reunification preferences opened large flows from Latin America and Asia. The quotas favoring northwestern Europe came from the 1924 law, and the Bracero Program was a separate guest-worker program.'
          },
          {
            question: 'Under the kafala system used in several Gulf states, a migrant worker\'s legal residence is tied to',
            options: [
              'a points score for skills',
              'the sponsoring employer',
              'a family member already there',
              'a refugee claim decision'
            ],
            correctAnswer: 1,
            explanation: 'Kafala ties a worker\'s visa and residence to a sponsor, usually the employer, which gives employers great power over workers. Points systems, family sponsorship and refugee decisions are different routes to residence.'
          },
          {
            question: 'Which is best described as a political effect of migration at the destination?',
            options: [
              'Remittances that pay for new houses in migrants\' home villages',
              'A larger share of young adult men in the destination\'s population',
              'New ethnic restaurants and places of worship in a city neighborhood',
              'Stricter visa rules passed after a rise in asylum applications'
            ],
            correctAnswer: 3,
            explanation: 'New visa rules are a government policy response, which is a political effect. Remittance-funded houses are economic effects at the origin, a shift in age-sex structure is demographic, and new restaurants and places of worship are cultural.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat5-economic',
      type: 'text' as const,
      content: `
## Economic Effects: Remittances, Brains and Labor

| Effect | At the origin | At the destination |
|---|---|---|
| **Remittances** | Pay for food, school fees, health care and housing; can exceed aid; create dependence | Money leaves the local economy |
| **Brain drain** | Loss of trained doctors, nurses and engineers whose education the origin paid for | — |
| **Brain gain** | — | Skilled workers fill shortages without the destination paying for their training |
| **Brain circulation** | Returnees bring skills, savings and contacts back home | — |
| **Labor supply** | Fewer workers, sometimes labor shortages in farming | Workers fill jobs in construction, farming, care and technology |

### Brain Drain, Gain and Circulation: Real Cases

- **The Philippines** trains far more nurses than its health system employs, and many work in the US, the UK and the Gulf. The government treats this as a **managed export**, but rural Philippine clinics can struggle to keep staff.
- **Sub-Saharan Africa** has lost many doctors to the UK and the US, though the region carries a large share of the world's disease burden.
- **India's information-technology industry** benefited from **brain circulation**: engineers who worked in Silicon Valley returned to cities such as Bengaluru and Hyderabad with experience, capital and contacts.

### Worked Example: Weighing Remittances

A village in Michoacán, Mexico, sends many of its young men to work in California.

| Positive effect at the origin | Negative effect at the origin |
|---|---|
| Remittances build two-story "remittance houses" and pay school fees | Fewer young workers to farm the land |
| Hometown associations fund a new road and a clinic | Children grow up with an absent parent |
| Households can survive a bad harvest | Local economy becomes dependent on wages earned abroad |

**Conclusion:** remittances raise household incomes and can fund development, but they rarely build local industries on their own, and they fall when the destination economy weakens.

> 🔑 **AP Connection:** Effects questions often ask for **one positive and one negative**, or for an effect on a **specific place**. Always name the place: "In the sending country, brain drain reduces the supply of doctors" scores; "brain drain is bad" does not.
`
    },
    {
      id: 'hgmigrat5-cultural',
      type: 'text' as const,
      content: `
## Cultural Effects: Enclaves, Assimilation and Diaspora

### Ethnic Enclaves

An **ethnic enclave** is a neighborhood where one immigrant group is concentrated, with its own shops, places of worship, newspapers and services.

| Enclave | City | Group |
|---|---|---|
| **Chinatown** | San Francisco | Chinese |
| **Little Havana** | Miami | Cuban |
| **Koreatown** | Los Angeles | Korean |
| **Kreuzberg** (in part) | Berlin | Turkish |

Enclaves form through **chain migration** and help newcomers find housing, jobs and familiar food and language. Critics argue that they can slow language learning; supporters note that many enclaves act as stepping stones, and that later generations often move out to the suburbs.

### Acculturation, Assimilation and Multiculturalism

| Process | What happens | Example |
|---|---|---|
| **Acculturation** | Immigrants adopt some traits of the host culture while keeping much of their own | A Vietnamese American family that speaks English at work and Vietnamese at home |
| **Assimilation** | Immigrants' distinct traits largely fade into the host culture, often over generations | Grandchildren of Italian immigrants in the US who speak only English |
| **Multiculturalism** | Groups keep distinct identities and the host society accommodates them | Canada's official multiculturalism policy, adopted in 1971 |
| **Syncretism** | Cultures blend into something new | Tex-Mex food; Afro-Brazilian religions combining West African and Catholic elements |

### Diaspora and Transnational Ties

A **diaspora** is a population spread far from its homeland that keeps a shared identity. India's diaspora, about 18 million emigrants in 2020 (UN DESA), was the world's largest. Diasporas spread **cultural diffusion** in both directions: Hindu temples and Diwali festivals in New Jersey and Texas, and returning migrants bringing new ideas home, sometimes called **social remittances**.

> 🔑 **AP Connection:** Cultural effects connect directly to Unit 3 (cultural patterns and processes). Use **acculturation**, **assimilation** and **syncretism** precisely: assimilation means distinct traits fade; acculturation means some traits are adopted while others are kept.
`
    },
    {
      id: 'hgmigrat5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An Indian software engineer works in California for ten years, then returns to Bengaluru to start a technology company. This best illustrates',
            options: [
              'brain drain',
              'brain circulation',
              'chain migration',
              'assimilation'
            ],
            correctAnswer: 1,
            explanation: 'Brain circulation describes skilled migrants who return home with experience, savings and contacts. Brain drain would describe the original departure only, and the case involves neither following relatives nor losing cultural traits.'
          },
          {
            question: 'A third-generation descendant of Polish immigrants in Chicago speaks only English and no longer follows Polish customs. Which process does this illustrate?',
            options: [
              'Acculturation',
              'Syncretism',
              'Assimilation',
              'Multiculturalism'
            ],
            correctAnswer: 2,
            explanation: 'The distinct Polish traits have faded into the host culture, which is assimilation. Acculturation keeps much of the original culture, syncretism blends two cultures into a new one, and multiculturalism preserves distinct identities.'
          },
          {
            question: 'Which statement best describes a negative economic effect of emigration on a sending region?',
            options: [
              'Hometown associations fund roads and clinics',
              'Households come to depend on wages earned abroad',
              'Ethnic enclaves in the destination grow in size',
              'Returning migrants bring savings and business skills'
            ],
            correctAnswer: 1,
            explanation: 'Dependence on remittances leaves households exposed when wages abroad fall, for example in a recession at the destination. Funded roads and returning savings are positive effects at the origin, and enclaves are a cultural effect at the destination.'
          }
        ]
      }
    },
    {
      id: 'hgmigrat5-demographic',
      type: 'text' as const,
      content: `
## Demographic Effects and Common Misconceptions

### Population Pyramids at Both Ends

**Destination: the Gulf, described as a pyramid in text.** The pyramids of the **United Arab Emirates** and **Qatar** have a huge bulge on the **male side** from about age 25 to 49, far wider than the female side and far wider than the bars for children or older people. Men outnumber women by more than two to one in both countries. The bulge is foreign male construction and service workers, most of whom cannot bring families and are expected to leave before old age.

**Origin: an aging sending region.** Bulgaria's population fell from about 9 million in the late 1980s to about 6.5 million in the 2021 census, through emigration of young adults combined with low fertility. Its pyramid has a **narrow middle** where emigrants are missing and a relatively wide top of older people. In rural China and Mexico, villages often hold mostly children, grandparents and women, because working-age adults have left.

| Demographic effect | Origin | Destination |
|---|---|---|
| Age structure | Ages as young adults leave | Gets younger as workers arrive |
| Sex ratio | Imbalanced if one sex dominates emigration | Male-heavy in labor-importing states such as the Gulf |
| Fertility and growth | Fewer births, because young adults are gone | More births, and population growth even with low native fertility |

### Common Misconceptions

| Misconception | Correction |
|---|---|
| "Commuting and seasonal trips are migration." | Migration is a **permanent or long-term** change of residence. Daily commuting and short repeated trips are **circulation**. Transhumance and seasonal labor sit at the boundary and are usually treated as cyclical movement. |
| "Refugees and IDPs are the same thing." | **Refugees** have crossed an international border; **IDPs** have not. IDPs are the larger group worldwide. |
| "Emigration and immigration are different moves." | They are the **same move** seen from different places: a Pole who moves to Ireland **emigrates from** Poland and **immigrates to** Ireland. |
| "The poorest people migrate the most." | Migrating costs money; emigration often **rises** as poor countries become somewhat richer, then falls later. |
| "Most international migrants go to Europe and North America." | Many go to the Gulf, and most refugees stay in neighboring low- and middle-income countries. |

> 🔑 **AP Connection:** A demographic effect should name a **specific population characteristic**: age structure, sex ratio, fertility or total population. "Emigration of young adults lowers the sending country's birth rate and raises the share of elderly people" is a complete demographic effect.
`
    },
    {
      id: 'hgmigrat5-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Sort the Effect** 🔍

Choose the category that best fits each effect of migration.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A wide male bulge from ages 25 to 49 appears on Qatar\'s population pyramid: ___',
            options: ['demographic', 'economic', 'cultural', 'political']
          },
          {
            label: 'A parliament passes a law cutting the number of work visas: ___',
            options: ['demographic', 'economic', 'cultural', 'political']
          },
          {
            label: 'A Korean church and grocery stores open in a Los Angeles neighborhood: ___',
            options: ['demographic', 'economic', 'cultural', 'political']
          },
          {
            label: 'Money sent from Dubai pays school fees for children in Kerala: ___',
            options: ['demographic', 'economic', 'cultural', 'political']
          }
        ],
        correctAnswers: ['demographic', 'political', 'cultural', 'economic'],
        hint1: 'Population structure (age and sex) is one category; laws and governments are another.',
        hint2: 'Places of worship and ethnic shops change the cultural landscape.',
        hint3: 'Money sent home by migrants has a name and a category.',
        explanation: 'An age-sex bulge is demographic, a visa law is political, a church and ethnic stores are cultural, and remittances that pay school fees are economic.'
      }
    },
    {
      id: 'hgmigrat5-quiz3',
      type: 'multiple-choice' as const,
      content: `
**Apply the Concepts** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A population pyramid shows many more men than women aged 25 to 49 and few children. Which country is it most likely to represent?',
            options: [
              'Niger, with high fertility',
              'Japan, an aging society',
              'Qatar, a labor importer',
              'Bulgaria, a sending state'
            ],
            correctAnswer: 2,
            explanation: 'Qatar imports large numbers of mostly male foreign workers who usually cannot bring families, producing a male working-age bulge. Niger\'s pyramid has a wide base of children, Japan\'s is top-heavy with elderly people, and Bulgaria is losing young adults rather than gaining them.'
          },
          {
            question: 'A worker lives in New Jersey and commutes every weekday to an office in New York City. Why is this NOT migration?',
            options: [
              'The worker crosses a state boundary every day',
              'The worker does not change permanent residence',
              'The worker moves only for economic reasons',
              'The trip covers a short distance each day'
            ],
            correctAnswer: 1,
            explanation: 'Migration requires a permanent or long-term change of residence; daily commuting is circulation. Crossing a boundary, an economic motive or a short distance do not decide whether a move counts as migration.'
          }
        ]
      }
    }
  ]
}
