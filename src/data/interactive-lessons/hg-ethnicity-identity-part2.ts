export const hgEthnicityIdentityPart2Data = {
  topicSlug: 'hg-ethnicity-identity',
  sections: [
    {
      id: 'hgethnic2-intro',
      type: 'text' as const,
      content: `
# 🌍 Ethnicity, Race & Identity

**Part 2 of 7 — Identity in Geography: Ethnicity, Race, Gender and Indigeneity**

---

| Section |
|---------|
| 📖 Identity Is Layered and Depends on Scale |
| Counting Race and Ethnicity: The Census as a Political Choice |
| Gender, Work and the Landscape |
| Indigenous Identity and Indigenous Lands |

> 🔑 **Key Concept:** Identity is how people define themselves and how others define them. It has several layers (ethnicity, race, nationality, gender, indigeneity), and which layer matters most **changes with place and scale**. The CED asks you to see how attitudes toward ethnicity and gender, the role of women in the workforce, ethnic neighborhoods, and indigenous communities and lands **shape the cultural landscape** (Topics 3.1 and 3.2).
`
    },
    {
      id: 'hgethnic2-layers',
      type: 'text' as const,
      content: `
## 📖 Identity Is Layered and Depends on Scale

Part 1 defined ethnicity, race and nationality. Geographers add two ideas.

**1. Identities are layered.** One person can hold several at once:

| Layer | Example for one person |
|---|---|
| Ethnicity | Kurdish |
| Nationality (citizenship) | German citizen, born in Turkey |
| Religion | Alevi or Sunni Muslim |
| Gender | Woman |
| Local identity | Resident of the Kreuzberg district of Berlin |

**2. Which layer matters depends on scale and setting.** Identity is **situational**:

| Scale | Which identity is likely to be emphasized |
|---|---|
| Local (a Berlin neighborhood festival) | Kurdish, as opposed to Turkish or Arab neighbors |
| National (a German election) | German citizen, or "immigrant-background" voter |
| Global (traveling in Asia) | German, or European |

### Pan-Ethnic Labels Are Made in Particular Places
- **"Hispanic" or "Latino"** and **"Asian American"** are categories built in the United States. A newcomer from Guatemala may think of herself first as Guatemalan, or as K'iche' Maya, and only learn to be "Latina" in the US.
- In Mexico or South Korea, people rarely sort themselves by these labels, because almost everyone around them shares the same national origin.

> 🔑 **AP Connection:** When a question asks you to "explain how identity varies across scales," name **two scales** and the identity emphasized at each. That is the move graders look for.
`
    },
    {
      id: 'hgethnic2-census',
      type: 'text' as const,
      content: `
## Counting Race and Ethnicity: The Census as a Political Choice

A census does not simply record identity; it decides **which identities can be counted**. The US categories have changed many times.

| Year | Change in the US census | What it shows |
|---|---|---|
| 1790 | First census sorts people as free white persons, other free persons and enslaved people | Categories reflected the legal order of slavery |
| 1980 | Every household is asked a separate **Hispanic origin** question | Hispanic is treated as an **ethnicity**; Hispanic people can be of any race |
| 2000 | People may mark **more than one race** for the first time | Recognizes multiracial identity |
| 2020 | "Two or More Races" reaches about **33.8 million** (about 10 percent), up from about **9 million** (about 3 percent) in 2010 | Growth reflects real change **and** a redesigned question and coding of write-in answers |
| 2024 | The Office of Management and Budget revises the standards: one combined race-and-ethnicity question, and a new **Middle Eastern or North African** category, for **seven** minimum categories | Agencies were given until 2029 to adopt them |

### Another Society, Other Categories: Brazil
Brazil's census asks about **cor ou raça** (color or race) with five options: *branco* (white), *preto* (Black), *pardo* (mixed or brown), *amarelo* (East Asian) and *indígena*. In 2022, about **45 percent** of Brazilians identified as pardo, about **44 percent** as white and about **10 percent** as preto. When asked open-ended questions, Brazilians have described their color with **more than 100 different terms**.

The same person could be counted as Black in one country and pardo in another. This is the strongest evidence that race is a **social construct**: the categories come from each society's history, not from biology.

### Limitations of Census Data on Identity
- **Self-identification changes.** People answer differently over time and as the question changes, so a jump in a category may be partly an artifact.
- **Broad categories hide diversity.** "Asian" combines Chinese, Indian, Filipino, Vietnamese, Korean and many other groups with very different histories.
- **National totals hide local patterns.** A group that is 3 percent of the country can be a majority in one county or tract (Part 4 maps this).
`
    },
    {
      id: 'hgethnic2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Under the standards used from 1997 until 2024, why did the US census ask about Hispanic origin in a question separate from race?',
            options: [
              'It treated Hispanic origin as an ethnicity whose members can be of any race',
              'It treated Hispanic origin as a race defined by shared physical features',
              'It asked about Hispanic origin only of citizens and race of all residents',
              'It used Hispanic origin to set immigration quotas for each Latin American state'
            ],
            correctAnswer: 0,
            explanation: 'Hispanic origin was counted as an ethnicity, so a Hispanic respondent could also choose White, Black, Asian or any other race. It was never defined by physical features, was asked of everyone, and was not used to set quotas.'
          },
          {
            question: 'Brazil\'s census offers five color options, while Brazilians answering open-ended surveys have used more than 100 terms. What does this comparison best show?',
            options: [
              'Race is classified differently in each society, following its own history',
              'Race is a fixed biological trait that surveys capture poorly',
              'Brazilians share one ethnicity despite a wide range of skin tones',
              'Most Brazilians reject the idea of any racial identity at all'
            ],
            correctAnswer: 0,
            explanation: 'The gap between official categories and everyday terms shows that racial categories are built by each society, which is why race is called a social construct. Biology does not supply the categories, and Brazilians clearly do use racial terms.'
          },
          {
            question: 'A woman born in Turkey to Kurdish parents now holds German citizenship. She calls herself Kurdish at a Berlin street festival and German when traveling in Asia. This best illustrates that identity is:',
            options: [
              'Fixed at birth by ethnic ancestry',
              'Situational and varies with scale',
              'Determined chiefly by legal citizenship',
              'Chosen once and then kept in every setting'
            ],
            correctAnswer: 1,
            explanation: 'She stresses a different layer of identity at the local scale than at the global scale, so identity is situational. Her ancestry did not change, her citizenship does not explain the festival answer, and she does not keep one label everywhere.'
          }
        ]
      }
    },
    {
      id: 'hgethnic2-gender',
      type: 'text' as const,
      content: `
## Gender, Work and the Landscape

**Gender** is the set of roles and expectations a society attaches to being a man or a woman. Like race, it is socially defined, so gender roles **vary from place to place and change over time**.

### The Data: Women in the Workforce
The **labor force participation rate** is the share of people aged 15 and older who are working or looking for paid work.

| Measure (ILO estimates, early 2020s) | Approximate rate |
|---|---|
| Women, world | Just under 50 percent |
| Men, world | About 72 percent |
| Women, Middle East and North Africa | About 1 in 5 |

**Change over time, United States (Bureau of Labor Statistics):** about **one-third** of women were in the labor force in 1950; the rate peaked at about **60 percent** in 1999.

### How Gender Shows Up in the Cultural Landscape
- **Women-only transit cars** at rush hour in Tokyo, Mexico City and Delhi respond to harassment in crowded public space.
- **Separate spaces for worship** in many mosques and Orthodox synagogues, and **purdah** (seclusion of women) in parts of South Asia, shape building design and who uses public space.
- **Childcare centers near offices and factories** appear where many women work for wages.
- **Export-processing zones** often hire mostly women for assembly jobs (a link to Unit 7).

### Limitation of the Statistic
The participation rate counts **paid** work and job seeking. It leaves out most **unpaid** work, such as caring for children and elders, fetching water, and farming a family plot, which women do far more of in most countries. A low rate does not mean women are not working.

> 🔑 **AP Connection:** Women's workforce participation is evidence for **changing gender roles**. Pair the number with a cause (education, fertility decline, law, religion, economic need) and a landscape effect.
`
    },
    {
      id: 'hgethnic2-indigenous',
      type: 'text' as const,
      content: `
## Indigenous Identity and Indigenous Lands

**Indigenous peoples** descend from the people who lived in a place before colonization or the arrival of the present dominant group, and keep distinct cultures and ties to their land. The International Labour Organization estimates about **476 million** indigenous people in more than **90 countries**, about **6 percent** of the world's population (2019). International law, through ILO Convention 169 (1989), treats **self-identification** as the basic test.

### Indigenous Lands on the Map and the Landscape

| Case | What it shows |
|---|---|
| **American Indian reservations** | Semi-autonomous lands of federally recognized tribes (about 570); the Navajo Nation reservation spans parts of Arizona, New Mexico and Utah and is the largest |
| **Nunavut, Canada (1999)** | A territory where about 85 percent of residents are Inuit; Inuktitut is an official language and place names follow Inuit usage (Iqaluit, the capital) |
| **Uluru, Australia** | Returned to its Anangu traditional owners in 1985; climbing the rock, a sacred site, was banned in 2019 |
| **Sámi lands, northern Europe** | Elected Sámi parliaments in Norway, Sweden and Finland; reindeer herding rights shape rural land use |

### Limitations of Maps of Indigenous Lands
- A **reservation map is not a population map.** Most Native Americans today live **outside** reservations, many in cities.
- **Borders cut across homelands.** The Sámi homeland spans four countries, and Tohono O'odham lands straddle the US–Mexico border.
- Official recognition is a **political decision**; groups without it may not appear on the map at all.

> 🔑 **AP Connection:** Indigenous communities and lands are named in the CED as forces that **shape the cultural landscape**. Use a specific case: land rights, sacred sites, restored place names or language on signs.
`
    },
    {
      id: 'hgethnic2-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

**1)** In 2020, about 33.8 million of about 331 million US residents were counted as Two or More Races. To the nearest whole percent, what share is that?

**2)** How many minimum race and ethnicity categories do the 2024 federal standards set?

**3)** Which Canadian territory, created in 1999, has an Inuit majority?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['10', '7', 'Nunavut'],
        hint1: 'Divide 33.8 by 331, then multiply by 100.',
        hint2: 'The 1997 standards had five race categories plus a separate Hispanic question; 2024 merged them and added one new group.',
        hint3: 'Its name means "our land" in Inuktitut.',
        explanation: '1) 33.8 ÷ 331 ≈ 0.102, about 10 percent. 2) Seven: the five earlier race categories, plus Hispanic or Latino and the new Middle Eastern or North African category. 3) Nunavut, about 85 percent Inuit.'
      }
    },
    {
      id: 'hgethnic2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Women\'s labor force participation in the Middle East and North Africa is about one in five. Which limitation should a geographer keep in mind when using this figure?',
            options: [
              'It omits unpaid care and farm work',
              'It counts only women living in large cities',
              'It includes girls well under the age of 15',
              'It measures wages rather than who is employed'
            ],
            correctAnswer: 0,
            explanation: 'The rate counts paid work and job seeking, so the unpaid household and family farm work that many women do is invisible in it. It covers rural and urban women aged 15 and older and measures participation, not pay.'
          },
          {
            question: 'Women-only subway cars at rush hour in Tokyo and Mexico City are best described as an example of:',
            options: [
              'Gender roles shaping the use of public space',
              'Ethnic clustering shaping housing choices',
              'Indigenous claims shaping control of land',
              'Religious rules shaping the design of private homes'
            ],
            correctAnswer: 0,
            explanation: 'The cars respond to how women experience crowded public space, so gender shapes the urban landscape. They have nothing to do with ethnicity, land claims or home design.'
          },
          {
            question: 'Which statement about indigenous peoples and their lands is accurate?',
            options: [
              'Most live outside reservations',
              'Recognition is set by a single global body',
              'Their homelands always lie within one state',
              'Reservations hold nearly all Native Americans'
            ],
            correctAnswer: 0,
            explanation: 'Most Native Americans today live outside reservations, many in cities, so a reservation map is not a population map. Recognition is decided by each state, and homelands such as the Sámi region cross several borders.'
          }
        ]
      }
    }
  ]
}
