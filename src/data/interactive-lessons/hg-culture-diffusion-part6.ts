export const hgCultureDiffusionPart6Data = {
  topicSlug: 'hg-culture-diffusion',
  sections: [
    {
      id: 'hgcultur6-intro',
      type: 'text' as const,
      content: `
# 🌍 Cultural Landscape & Diffusion

**Part 6 of 7 — AP Exam Practice: Diffusion Data and Landscapes**

---

| Section |
|---------|
| 📖 Stimulus 1: When a Trend Reached Six Cities |
| Stimulus 2: A Town Plaza, Described in Text |
| FRQ Practice with Model Answers |

> 🔑 **Key Concept:** Culture questions give you either **data about spread** (where and when a trait arrived) or **a landscape** (what you can see in a place). For data, test the pattern against distance and city size. For landscapes, sort what you see into layers and processes.
`
    },
    {
      id: 'hgcultur6-stimulus1',
      type: 'text' as const,
      content: `
## 📖 Stimulus 1: When a Trend Reached Six Cities

A new music and dance trend began in **City A** (population 8 million) in week 0. The table shows when it first appeared in other cities in the same **hypothetical** country.

| City | Population | Distance from City A (km) | Week the trend arrived |
|---|---|---|---|
| **B** | 5,000,000 | 2,400 | 1 |
| **C** | 3,500,000 | 3,800 | 1 |
| **D** | 900,000 | 2,000 | 3 |
| **E** | 400,000 | 150 | 4 |
| **F** | 60,000 | 80 | 7 |

### Reading the Table Before the Questions
1. **Test distance.** If the spread were contagious, the nearest cities would adopt first. Instead, City F, only 80 km away, adopted **last**, and City C, 3,800 km away, adopted in week 1.
2. **Test city size.** Arrival follows population almost exactly: the two largest cities adopt in week 1, the mid-sized cities in weeks 3 and 4, the small town in week 7.
3. **Conclusion:** the trend moved **down the urban hierarchy**, which is hierarchical diffusion. Large cities are linked by media, airports and promoters, so they connect to each other before they connect to nearby small towns.

**Limitation:** six cities are a small sample, and arrival week records only the first appearance, not how widely the trend was adopted.
`
    },
    {
      id: 'hgcultur6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which evidence from the table best shows that the trend did not spread by contagious diffusion?',
            options: [
              'City F is nearest to City A but adopted the trend last',
              'City B and City C adopted the trend in the same week',
              'City A has the largest population in the country',
              'City D is larger than City E and also lies farther away'
            ],
            correctAnswer: 0,
            explanation: 'Contagious diffusion reaches near places first, so a nearby town adopting last contradicts it. The other facts are true but do not by themselves test the role of distance.'
          },
          {
            question: 'Which factor best explains why City C adopted the trend before City E?',
            options: [
              'City C has stronger media and travel links to A',
              'City C is located much nearer to City A than E',
              'City E banned the trend for its first month',
              'City E has a much older population than C'
            ],
            correctAnswer: 0,
            explanation: 'Large cities are connected through media, transport and business networks, so City C, though far away, was reached quickly. City C is in fact much farther from City A, and the table gives no evidence of a ban or of ages.'
          },
          {
            question: 'A geographer wants to know how many people in each city actually took up the trend. What additional data would help most?',
            options: [
              'Survey or streaming data on participation in each city',
              'A detailed map of every road and rail line around City A',
              'Each city\'s distance from the national border',
              'The year each city was founded'
            ],
            correctAnswer: 0,
            explanation: 'Arrival week shows only first appearance; surveys or streaming counts measure how widely the trend was adopted. Roads, borders and founding dates do not measure participation.'
          }
        ]
      }
    },
    {
      id: 'hgcultur6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: A Town Plaza, Described in Text

**Cholula, Mexico, near the city of Puebla:**
- A Catholic church, the Sanctuary of Our Lady of Remedies, completed in **1594**, sits on top of the **Great Pyramid of Cholula**, a pre-Hispanic temple platform now covered by earth and grass.
- In the town center nearby, streets form a **grid** around a central plaza with a large church and arcaded government buildings.
- In late October, market stalls sell orange marigolds, sugar skulls and candles for Día de los Muertos.
- On the plaza edge, a national convenience-store chain and a global coffee chain have bright signs; a few tourist signs are in English as well as Spanish.

### Reading It in Layers
| Layer | Evidence | Concept |
|---|---|---|
| Pre-Hispanic | The pyramid | Indigenous hearth of religion and architecture |
| Spanish colonial | Church on the pyramid; grid and plaza | Sequent occupance; relocation diffusion of Catholicism; colonial town planning |
| Blended | Día de los Muertos goods | Syncretism of Indigenous and Catholic practice |
| Global | Chain stores; English signs | Globalization and contemporary diffusion |
`
    },
    {
      id: 'hgcultur6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Using Stimulus 1, identify the type of diffusion shown.**
> *Model:* Hierarchical diffusion.

**B. Explain how the data in Stimulus 1 support your answer.**
> *Model:* The trend reached the two largest cities, B and C, in week 1 even though they are 2,400 and 3,800 km away, while City F, only 80 km away but with 60,000 people, adopted last; arrival follows city size, not distance, so the trend moved down the urban hierarchy.

**C. Describe one way the landscape in Stimulus 2 shows sequent occupance.**
> *Model:* A Spanish colonial church was built on top of a pre-Hispanic pyramid, so the landscape shows an Indigenous layer beneath a later Spanish layer in the same place.

**D. Explain how one feature of Stimulus 2 shows an effect of cultural diffusion.**
> *Model:* The Día de los Muertos market shows syncretism, because Indigenous traditions of honoring ancestors blended with the Catholic All Saints' and All Souls' days into a new celebration.

**E. Explain one historical cause of the cultural patterns in Stimulus 2.**
> *Model:* Spanish colonialism brought Catholic missionaries and royal town-planning rules to Mexico, so churches were built on Indigenous sacred sites and towns were laid out on a grid around a plaza.

**F. Explain one limitation of using a single landscape to generalize about cultural change in Mexico.**
> *Model:* One plaza is local-scale evidence chosen partly because it is famous; it may not represent rural areas or northern cities where Indigenous layers or global chains are less visible, so conclusions about the whole country would need data from many places.

### Why These Answers Score
- Each **explain** links a cause to an effect with *because* or *so*.
- Each cites **specific evidence** (week 1, 3,800 km, 1594, marigolds).
- Each names the **concept** in the course's vocabulary.
`
    },
    {
      id: 'hgcultur6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'The church built on top of the Great Pyramid of Cholula best illustrates which concept?',
            options: [
              'Sequent occupance',
              'Cultural relativism',
              'Hierarchical diffusion',
              'Cultural divergence'
            ],
            correctAnswer: 0,
            explanation: 'A later group\'s building placed directly on an earlier group\'s sacred site is a clear layer of sequent occupance. Relativism is an attitude, and nothing here moved through an urban hierarchy.'
          },
          {
            question: 'The global coffee chain and English tourist signs on the plaza are most directly evidence of:',
            options: [
              'Present-day links to international travel and commerce',
              'Colonial town-planning rules issued by the Spanish crown',
              'Syncretism between Indigenous and Catholic beliefs',
              'Folk culture preserved by isolation from outside contact'
            ],
            correctAnswer: 0,
            explanation: 'Global brands and signs for foreign visitors reflect present-day connections to the world economy and tourism. The grid is the colonial layer, the festival goods show syncretism, and a plaza with global chains is not isolated.'
          },
          {
            question: 'Which feature of Stimulus 2 is the best evidence of syncretism?',
            options: [
              'Marigolds and sugar skulls sold for Día de los Muertos',
              'A grid of streets laid out around a central plaza',
              'Arcaded government buildings next to a large church',
              'Tourist signs printed in both English and Spanish'
            ],
            correctAnswer: 0,
            explanation: 'Día de los Muertos blends Indigenous and Catholic traditions into a new celebration, which is syncretism. The grid and arcades are colonial planning, and bilingual signs serve visitors without creating a blended trait.'
          }
        ]
      }
    }
  ]
}
