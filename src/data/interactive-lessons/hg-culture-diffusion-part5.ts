export const hgCultureDiffusionPart5Data = {
  topicSlug: 'hg-culture-diffusion',
  sections: [
    {
      id: 'hgcultur5-intro',
      type: 'text' as const,
      content: `
# 🌍 Cultural Landscape & Diffusion

**Part 5 of 7 — Contemporary Diffusion and Its Effects**

---

| Section |
|---------|
| 📖 What Speeds Diffusion Today |
| Convergence and Divergence |
| Four Effects of Diffusion |
| Common Misconceptions |

> 🔑 **Key Concept:** Communication technology, urbanization and globalization now move ideas in days rather than centuries. The results are not uniform: some places **converge** on shared global culture, others **diverge** by defending local traits, and contact between cultures produces **acculturation, assimilation, syncretism and multiculturalism** (CED Topics 3.6 and 3.8).
`
    },
    {
      id: 'hgcultur5-speed',
      type: 'text' as const,
      content: `
## 📖 What Speeds Diffusion Today

| Driver | How it changes diffusion | Example |
|---|---|---|
| **Communication technology** | Internet, streaming and social media let a trait reach millions at once, without anyone moving | A song or dance trend reaches dozens of countries within weeks |
| **Time-space compression** | Faster transport and communication make distant places feel closer (Unit 1 concept) | Same-day news and video calls with relatives abroad |
| **Urbanization** | Cities concentrate diverse people, so traits mix and spread among neighbors | New fusion cuisines appear first in large, diverse cities |
| **Globalization** | Trade, media companies and global brands link markets worldwide | The same chains, films and phones appear in most large cities |

### The Data: Uneven Access
The International Telecommunication Union (ITU) estimated that in **2024** about **5.5 billion** people, roughly **68 percent** of the world, used the internet, leaving about **2.6 billion** offline. Access was very uneven: about **93 percent** of people in high-income countries were online, compared with about **27 percent** in low-income countries.

**Scale matters:** at the global scale, the internet looks like a force that reaches everyone. At the national and local scale, rural and poor areas in many countries remain largely offline, so contemporary diffusion still follows the paths of wealth and infrastructure.
`
    },
    {
      id: 'hgcultur5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** About 5.5 billion of the world's 8.1 billion people used the internet in 2024. What percent is that, to the nearest whole percent?

**2)** How many billion people were offline? Give one decimal place.

**3)** About 93 percent of people in high-income countries and 27 percent in low-income countries were online. What is the gap in percentage points?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['68', '2.6', '66'],
        hint1: 'Divide 5.5 by 8.1, then multiply by 100.',
        hint2: 'Subtract 5.5 from 8.1.',
        hint3: 'Subtract the smaller percentage from the larger one.',
        explanation: '1) 5.5 ÷ 8.1 ≈ 0.68, or 68 percent. 2) 8.1 − 5.5 = 2.6 billion offline. 3) 93 − 27 = 66 percentage points, a measure of the digital divide.'
      }
    },
    {
      id: 'hgcultur5-convergence',
      type: 'text' as const,
      content: `
## Convergence and Divergence

**Cultural convergence:** cultures become more alike through contact. Global brands, shared media and English loanwords in many languages are signs of convergence. Critics call the extreme version **cultural homogenization**, the loss of local distinctiveness.

**Cultural divergence:** cultures become more distinct, often as a reaction to outside influence. Governments and communities protect local languages, foods and traditions.

| Case | Year | What it does | Shows |
|---|---|---|---|
| **Quebec's Charter of the French Language (Bill 101)** | 1977 | Made French the official language of Quebec and required French on commercial signs and in most schooling | Divergence: defending a language against English at the provincial scale |
| **France's Toubon Law** | 1994 | Requires French in advertising, workplace documents and public communication, with translations allowed alongside | Divergence at the national scale |
| **Fast-food menus adapted by country** | Ongoing | Global chains alter menus for local religions and tastes | Both: a global form meets local content, sometimes called **glocalization** |

**Limitation of the convergence idea:** global culture rarely arrives unchanged. Local people reinterpret it, so the same brand or genre can mean different things in different places. A world of identical cultures is an exaggeration.
`
    },
    {
      id: 'hgcultur5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Quebec requires French on commercial signs. This policy is best described as an example of:',
            options: [
              'Cultural divergence',
              'Cultural convergence',
              'Contagious diffusion',
              'Time-space compression'
            ],
            correctAnswer: 0,
            explanation: 'Protecting a local language against a dominant outside one keeps the culture distinct, which is divergence. Convergence would make Quebec more like its English-speaking neighbors.'
          },
          {
            question: 'Internet use is far higher in high-income countries than in low-income countries. What does this suggest about contemporary diffusion?',
            options: [
              'Popular culture now reaches all places at the same speed',
              'It still follows the uneven distribution of wealth and access',
              'Physical distance has become the main barrier to the spread of ideas',
              'Rural areas adopt new trends sooner than large cities do'
            ],
            correctAnswer: 1,
            explanation: 'Where people lack devices or connections, online trends arrive slowly or not at all, so diffusion still tracks income and infrastructure. The data contradict equal speed everywhere and do not show rural areas leading.'
          },
          {
            question: 'A global coffee chain sells different drinks in different countries to match local tastes. Which term best fits?',
            options: [
              'Glocalization',
              'Assimilation',
              'Ethnocentrism',
              'Relocation diffusion'
            ],
            correctAnswer: 0,
            explanation: 'Adapting a global product to local culture is glocalization. Assimilation is a group losing its own culture, ethnocentrism is an attitude, and relocation requires people to move.'
          }
        ]
      }
    },
    {
      id: 'hgcultur5-effects',
      type: 'text' as const,
      content: `
## Four Effects of Diffusion

Part 1 defined these terms. Here is how to tell them apart in real cases.

| Effect | What happens to the original culture? | Case |
|---|---|---|
| **Acculturation** | Kept, while traits of another culture are adopted | Children of immigrants who speak English at school and their parents' language at home |
| **Assimilation** | Largely lost; the group becomes part of the dominant culture | By the third generation, most descendants of European immigrants to the United States speak only English |
| **Syncretism** | Blended with another culture into a **new** form | Día de los Muertos joins Indigenous Mexican traditions of honoring ancestors with the Catholic All Saints' and All Souls' days |
| **Multiculturalism** | Kept **alongside** other cultures in the same society | Canada adopted an official multiculturalism policy in 1971; in Toronto nearly half of residents were born outside Canada (2021 census) |

### Telling Them Apart
- **Acculturation vs. assimilation** is a matter of degree: acculturation keeps the home culture; assimilation loses most of it. Assimilation can be **forced**, as in U.S. and Canadian boarding schools that punished Indigenous children for speaking their languages from the late 1800s into the 1900s.
- **Syncretism vs. multiculturalism:** syncretism makes **one new blended** trait; multiculturalism keeps **several distinct** traits side by side.

## Common Misconceptions

| Misconception | Correction |
|---|---|
| Globalization will make all cultures identical. | Convergence happens, but divergence and local adaptation happen too. |
| Popular culture spreads only hierarchically. | Social media lets trends spread person to person, which is contagious diffusion. |
| Acculturation means losing your culture. | That is assimilation. Acculturation keeps the original culture while adding traits. |
| Time-space compression changes the distance between places. | Absolute distance stays the same; travel and communication **time** shrink. |

> 🔑 **AP Connection:** For an effects question, name the effect and say **what happened to the original culture**: kept, lost, blended or coexisting. That one phrase separates the four terms.
`
    },
    {
      id: 'hgcultur5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A festival combines Indigenous traditions of honoring the dead with Catholic holy days, creating a celebration found in neither source alone. This is:',
            options: [
              'Acculturation',
              'Multiculturalism',
              'Syncretism',
              'Assimilation'
            ],
            correctAnswer: 2,
            explanation: 'Blending two traditions into a new form is syncretism. Multiculturalism keeps traditions separate side by side, and assimilation means one culture largely disappears.'
          },
          {
            question: 'A family has lived in a new country for three generations. The grandchildren speak only the new country\'s language and follow few of their grandparents\' customs. This best illustrates:',
            options: [
              'Syncretism',
              'Assimilation',
              'Multiculturalism',
              'Stimulus diffusion'
            ],
            correctAnswer: 1,
            explanation: 'Losing the original language and most customs is assimilation. Acculturation would keep the home culture alongside new traits, and syncretism would create a new blend.'
          },
          {
            question: 'Which situation best shows multiculturalism rather than syncretism?',
            options: [
              'A city where many groups keep their own languages and festivals',
              'A new religion formed by merging two older belief systems',
              'A cuisine that fuses two traditions into a single new dish',
              'A music style created by blending two older regional genres'
            ],
            correctAnswer: 0,
            explanation: 'Multiculturalism means distinct cultures coexist in one society. The other three describe blending into a new form, which is syncretism.'
          }
        ]
      }
    }
  ]
}
