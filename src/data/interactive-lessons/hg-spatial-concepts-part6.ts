export const hgSpatialConceptsPart6Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia6-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 6 of 7 — AP Exam Practice: Maps, Data and Scale**

---

| Section |
|---------|
| 📖 How AP Task Verbs Work |
| Stimulus 1: A Graduated Symbol Map of U.S. Metro Areas |
| FRQ Practice with Model Answers |
| Stimulus 2: Two Maps of the Same Data |

> 🔑 **Key Concept:** AP Human Geography questions rarely ask for a bare definition. They give you a map, a table or an image and ask you to **apply** a concept to it. This part practices that move with the Unit 1 concepts from Parts 1 to 5.
`
    },
    {
      id: 'hgspatia6-verbs',
      type: 'text' as const,
      content: `
## 📖 How AP Task Verbs Work

| Verb | What earns the point | Example response length |
|---|---|---|
| **Identify** | Name the correct concept, place or feature | A word or phrase |
| **Define** | Give the meaning of a term | One sentence |
| **Describe** | Give the relevant characteristics of something, with detail | One or two sentences |
| **Explain** | Give the reason or process: *how* or *why* something happens | Two or three sentences linking cause and effect |
| **Compare** | Give a similarity or difference between two things, about both | Two sentences, one for each |

**Explain is where most points are lost.** "Distance decay affects the pattern" is not an explanation. "Fewer customers travel from distant suburbs because the time and cost of the trip rise with distance, so sales fall off away from the store" is.

> 🔑 **AP Connection:** Every FRQ in this course includes at least one "explain" part. Use the pattern *claim + because + specific evidence from the stimulus*.
`
    },
    {
      id: 'hgspatia6-stimulus1',
      type: 'text' as const,
      content: `
## Stimulus 1: A Graduated Symbol Map of U.S. Metro Areas

**The map, described in text:** a map of the contiguous United States shows a circle on each of the ten most populous metropolitan areas. Each circle's area is proportional to the metro area's population. The largest circle sits on New York; large circles also sit on Los Angeles and Chicago. Four circles crowd together along the Atlantic coast between Boston and Washington, D.C., and partly overlap. Two circles sit in Texas, one in Georgia and one in southern Florida. The interior West between Texas and California has no circles.

**The data behind the map** (2020 Census, metropolitan statistical areas, rounded):

| Rank | Metro area | Population (millions) |
|---|---|---|
| 1 | New York | 20.1 |
| 2 | Los Angeles | 13.2 |
| 3 | Chicago | 9.6 |
| 4 | Dallas-Fort Worth | 7.6 |
| 5 | Houston | 7.1 |
| 6 | Washington, D.C. | 6.4 |
| 7 | Philadelphia | 6.2 |
| 8 | Miami | 6.1 |
| 9 | Atlanta | 6.1 |
| 10 | Boston | 4.9 |

### How to Read It
- **Map type:** graduated symbol, because symbol size shows a total at a point.
- **Distribution:** the largest metros are **clustered** in the Northeast, with a second group across the South (Texas, Georgia, Florida), Chicago in the Midwest and Los Angeles alone on the West Coast.
- **Limitation:** each circle is a single point, so the map hides where people live *within* each metro area, and the overlapping circles in the Northeast make that region hard to read.
`
    },
    {
      id: 'hgspatia6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 1.
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best describes the distribution of the ten largest metro areas shown on the map?',
            options: [
              'Spread evenly across the country, one in each major region',
              'Clustered in the Northeast, with most of the rest across the South',
              'Arranged in a straight line along the route of one interstate highway',
              'Concentrated in the interior West, far from both ocean coastlines'
            ],
            correctAnswer: 1,
            explanation: 'Four metros crowd between Boston and Washington and four more sit across Texas, Georgia and Florida, leaving only Chicago and Los Angeles elsewhere, so the pattern is clustered rather than even or linear. The interior West has no circles at all.'
          },
          {
            question: 'Which is a limitation of showing these data on a graduated symbol map?',
            options: [
              'The circles overlap in the Northeast and hide how people are spread inside each metro',
              'The map cannot show which metro area has the largest total population of the ten',
              'The circles show rates per square mile rather than the total populations of the metros',
              'The circles distort the shapes of states by replacing their boundaries'
            ],
            correctAnswer: 0,
            explanation: 'Graduated symbols reduce a whole metro area to one point, and big symbols near each other overlap, as they do between Boston and Washington. The symbols show totals, so the largest metro is easy to see, and a symbol map keeps the base map of state boundaries.'
          },
          {
            question: 'A student wants to show where people live inside the New York metro area, block by block. Which map type is the better choice?',
            options: [
              'A dot distribution map',
              'A world cartogram',
              'A graduated symbol map',
              'A small-scale reference map'
            ],
            correctAnswer: 0,
            explanation: 'A dot map, with each dot standing for a fixed number of people, shows density and clustering within the metro area. A cartogram or graduated symbol map would treat New York as one unit, and a small-scale map shows too large an area for block-level detail.'
          }
        ]
      }
    },
    {
      id: 'hgspatia6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part on paper before reading the model answer.

**A. Identify the type of thematic map in Stimulus 1.**
> *Model:* A graduated (proportional) symbol map.

**B. Describe the distribution of the ten largest metro areas.**
> *Model:* They are clustered along the Northeast coast from Boston to Washington, D.C., with a second group across the South in Texas, Georgia and Florida, plus Chicago in the Midwest and Los Angeles on the West Coast; none is in the interior West.

**C. Explain one physical factor that helps account for the absence of large metro areas in the interior West.**
> *Model:* Much of the interior West is arid or mountainous, so water for large populations and flat land for building and farming are limited; settlement there concentrates in a few oases such as Salt Lake City and Denver rather than forming metros as large as those on the coasts.

**D. Explain how time-space compression has affected the relationship between the Northeast metro areas.**
> *Model:* Frequent rail service, highways and short flights cut the travel time between Boston, New York, Philadelphia and Washington, and digital communication makes contact instant, so firms and workers interact across the corridor as if it were one connected urban region.

**E. Explain how the pattern would look different if the same population data were mapped at the county scale instead of the metro scale.**
> *Model:* At the county scale, each metro area would split into several counties, revealing a dense core county such as Manhattan surrounded by less dense suburban counties; the single circle for each metro hides that internal variation.

### Why These Answers Score
- **C** names a factor (aridity, terrain), links it to a need (water, flat land) and ties it to the map.
- **D** gives the process (faster transport and communication) and its effect (interaction across the corridor).
- **E** names both scales and says what the finer scale reveals.
`
    },
    {
      id: 'hgspatia6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the Stimulus 1 table.

**1)** What is the combined population, in millions, of the three largest metro areas? Enter a number.

**2)** To the nearest whole number, how many times larger is the New York metro than the Boston metro?

**3)** A road map has a scale of 1:250,000. Two cities are 6 cm apart on it. How many kilometers apart are they?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['42.9', '4', '15'],
        hint1: 'Add New York, Los Angeles and Chicago.',
        hint2: 'Divide 20.1 by 4.9.',
        hint3: 'At 1:250,000, one centimeter is 250,000 cm, which is 2.5 km.',
        explanation: '1) 20.1 + 13.2 + 9.6 = 42.9 million. 2) 20.1 ÷ 4.9 ≈ 4.1, which rounds to 4. 3) 6 cm × 2.5 km per cm = 15 km.'
      }
    },
    {
      id: 'hgspatia6-stimulus2',
      type: 'text' as const,
      content: `
## Stimulus 2: Two Maps of the Same Data

A geographer maps **total population by state** in two ways.

**Map X, a choropleth:** states are shaded by total population. California, Texas, Florida and New York are the darkest. Large western states such as Wyoming, Montana and Nevada are pale, but because they are big, pale color covers much of the map.

**Map Y, a cartogram:** each state's area is drawn in proportion to its population. California swells to the largest shape, Texas, Florida and New York grow, and Wyoming, Montana and Alaska shrink to slivers. Small northeastern states such as New Jersey and Massachusetts look much larger than on a normal map.

**Key reasoning:** Map X breaks the choropleth rule from Part 3, because it shades a **raw total**, so large land areas dominate the eye. Map Y is built for totals, but its distorted shapes make individual states harder to locate.
`
    },
    {
      id: 'hgspatia6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use Stimulus 2.
      `,
      exercise: {
        questions: [
          {
            question: 'What is the main problem with Map X?',
            options: [
              'It shades raw totals, so big pale states dominate',
              'It shows population at too large a map scale to read',
              'It uses a projection that keeps every state\'s true area',
              'It shows the data at a local scale rather than a national one'
            ],
            correctAnswer: 0,
            explanation: 'A choropleth should shade rates, not totals; with totals, the eye is drawn to large states regardless of their populations. The problem is not projection or scale, since both maps work at the national scale.'
          },
          {
            question: 'Why do New Jersey and Massachusetts look larger on Map Y than on a standard map?',
            options: [
              'Their populations are large compared with their small land areas',
              'Their land areas are larger than they look on a Mercator projection',
              'Cartograms enlarge the states that lie along the Atlantic coastline',
              'Their total populations are the largest of all the fifty states'
            ],
            correctAnswer: 0,
            explanation: 'A cartogram sizes each state by population, so a small but populous state grows. These states do not have the largest totals, and a cartogram enlarges states for their population, not their coastal location.'
          },
          {
            question: 'To show population density by state on a choropleth correctly, the geographer should shade each state by',
            options: [
              'its total population',
              'people per square mile',
              'its total land area',
              'its number of cities'
            ],
            correctAnswer: 1,
            explanation: 'Density is a rate, people per unit of area, which is exactly what a choropleth should shade. Total population and total land area are raw amounts, and the number of cities does not measure density.'
          }
        ]
      }
    }
  ]
}
