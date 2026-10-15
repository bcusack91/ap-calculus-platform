export const hgSpatialConceptsPart4Data = {
  topicSlug: 'hg-spatial-concepts',
  sections: [
    {
      id: 'hgspatia4-intro',
      type: 'text' as const,
      content: `
# 🌍 Spatial Concepts & Geographic Data

**Part 4 of 7 — Geographic Data and Its Power**

---

| Section |
|---------|
| 📖 Where Geographic Data Come From |
| Geospatial Technologies: GPS, Remote Sensing and GIS |
| The Power of Geographic Data: Three Cases |
| Limits of Data |

> 🔑 **Key Concept:** Geographers collect data in the field and from documents, then store, map and analyze them with geospatial technologies. Individuals, businesses and governments use those data to make decisions, so data quality and scale have real consequences (CED Topics 1.2 and 1.3).
`
    },
    {
      id: 'hgspatia4-sources',
      type: 'text' as const,
      content: `
## 📖 Where Geographic Data Come From

### Quantitative vs. Qualitative

| Kind | What it is | Examples |
|---|---|---|
| **Quantitative** | Numbers that can be counted, measured and mapped | Census population counts, rainfall totals, income, migration flows |
| **Qualitative** | Descriptions, meanings and perceptions | Interviews about why people moved, photographs of a neighborhood, travel narratives |

Neither kind is "better." A census can show *that* a neighborhood lost 20 percent of its residents; interviews explain *why* they left.

### Common Sources Named in the CED

| Source | Type | What it is good for |
|---|---|---|
| **Field observation** | Usually qualitative | Seeing the landscape directly: building styles, land use, signs in different languages |
| **Personal interviews** | Qualitative | Motives and experiences: why a family migrated |
| **Census and surveys** | Quantitative | Population, age, income, housing at many scales |
| **Policy documents** | Both | What governments intend: zoning plans, immigration laws |
| **Media reports and travel narratives** | Mostly qualitative | Events and perceptions of places, though often biased |
| **Landscape and photo analysis** | Qualitative | How a place changed: compare photos of a block in 1980 and today |

> 🔑 **AP Connection:** Expect a question that asks you to "describe one source of data" a geographer could use to study a stated problem, or to "explain a limitation" of a given source. Name the source, then link it to the specific question.
`
    },
    {
      id: 'hgspatia4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A geographer wants to learn why residents of a rural town chose to move to the state capital. Which data source would help most?',
            options: [
              'Satellite images of the town',
              'Interviews with the people who moved',
              'A choropleth of the state by income',
              'A census count of the town by age'
            ],
            correctAnswer: 1,
            explanation: 'Motives are qualitative, so asking the migrants directly reveals their reasons. Satellite images, an income choropleth and an age count can show where and how many, but not why people decided to move.'
          },
          {
            question: 'Which of these is an example of quantitative geographic data?',
            options: [
              'A travel writer\'s account of a market town',
              'Photographs of a street from 1960 and 2020',
              'Counts of residents by age in each county',
              'Interviews with farmers about a long drought'
            ],
            correctAnswer: 2,
            explanation: 'Counts of residents are numbers that can be measured and mapped, so they are quantitative. A travel account, paired photographs and interviews describe meanings and conditions, which makes them qualitative.'
          }
        ]
      }
    },
    {
      id: 'hgspatia4-tech',
      type: 'text' as const,
      content: `
## Geospatial Technologies: GPS, Remote Sensing and GIS

| Technology | What it does | Example use |
|---|---|---|
| **GPS (Global Positioning System)** | A U.S. network of satellites that lets a receiver calculate its absolute location; a receiver needs signals from at least four satellites for a fix with altitude | Phone navigation, tracking delivery trucks, mapping field sites |
| **Remote sensing** | Collecting data about Earth's surface from a distance, usually by satellite or aircraft | Measuring deforestation in the Amazon, crop health, the spread of a city; the U.S. Landsat program has imaged Earth since 1972 |
| **GIS (geographic information system)** | Computer software that stores spatial data in **layers** and lets you overlay and analyze them | Finding the best site for a new hospital, mapping flood risk |
| **Online mapping and visualization** | Web maps and dashboards that let anyone view or add spatial data | Public COVID-19 case dashboards, crowd-sourced maps after a disaster |

### Worked Example: Siting a Clinic with GIS Layers

A county health department wants to place one new clinic. An analyst stacks four layers in a GIS:

1. **Population layer:** census tracts shaded by number of residents.
2. **Existing clinics layer:** points for every current clinic, each with a 5-mile buffer drawn around it.
3. **Roads layer:** major roads and bus routes.
4. **Flood-zone layer:** areas the federal flood map marks as high risk.

The analyst then asks the GIS for tracts that are (a) heavily populated, (b) outside every existing clinic's 5-mile buffer, (c) within half a mile of a bus route, and (d) outside the flood zone. Only the tracts meeting all four conditions remain on the map. The overlay turns four separate data sets into one location decision.

> ⚠️ GPS and remote sensing **collect** data; GIS **stores and analyzes** it. A common error is calling Google Maps navigation "GIS." The route on your phone uses GPS for your location and an online map built from GIS data.
`
    },
    {
      id: 'hgspatia4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Technology** 🔍

Choose the geospatial technology described.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Satellite images taken each year show forest loss in the Brazilian state of Rondônia: ___',
            options: ['GPS', 'remote sensing', 'GIS', 'a census']
          },
          {
            label: 'A planner overlays layers of zoning, flood risk and land value to choose a site: ___',
            options: ['GPS', 'remote sensing', 'GIS', 'a census']
          },
          {
            label: 'A hiker\'s watch records her exact latitude and longitude every minute: ___',
            options: ['GPS', 'remote sensing', 'GIS', 'a census']
          }
        ],
        correctAnswers: ['remote sensing', 'GIS', 'GPS'],
        hint1: 'The data are gathered from far above the surface.',
        hint2: 'Stacking and comparing layers is the defining feature.',
        hint3: 'Satellite signals give a receiver its absolute location.',
        explanation: 'Satellite imagery of forest loss is remote sensing. Overlaying zoning, flood and land-value layers is GIS analysis. A watch that logs coordinates uses GPS.'
      }
    },
    {
      id: 'hgspatia4-power',
      type: 'text' as const,
      content: `
## The Power of Geographic Data: Three Cases

Geographic data are used at every scale, from a person choosing a route to a national government drawing districts.

### Case 1: John Snow's Cholera Map, London, 1854

During a cholera outbreak in the Soho district, physician John Snow mapped the homes of people who died. **The map, described in text:** small black bars stacked at each address cluster tightly around a public water pump on Broad Street and thin out with distance from it. Snow used the pattern, along with interviews about where victims drew water, to argue that cholera spread through contaminated water rather than "bad air." The parish authorities removed the pump's handle. His map is a classic case of spatial data shaping a public decision, and of **distance decay** in action.

### Case 2: The U.S. Census and Apportionment

The U.S. Constitution requires a census every 10 years. Its counts are used to divide the 435 seats in the House of Representatives among the states and to guide the distribution of federal funds.

| After the 2020 Census | States |
|---|---|
| Gained 2 seats | Texas |
| Gained 1 seat | Colorado, Florida, Montana, North Carolina, Oregon |
| Lost 1 seat | California, Illinois, Michigan, New York, Ohio, Pennsylvania, West Virginia |

The pattern on a map is clear: seats shifted from the Northeast and Midwest toward the South and West, following decades of internal migration.

### Case 3: Business Site Selection

A coffee chain choosing a new location uses data on traffic counts, the income and age of nearby residents, competitors' locations and commuting routes. These are the same layered-data methods as the clinic example, applied for profit.

## Limits of Data

| Limit | Example |
|---|---|
| **Undercounts** | The Census Bureau's own follow-up survey estimated that the 2020 Census undercounted the Black population by about 3.3 percent and the Hispanic population by about 5 percent |
| **Scale and aggregation** | A county average can hide very different neighborhoods inside it |
| **Age of data** | A 10-year census can be out of date in a fast-growing suburb |
| **Bias and privacy** | Media reports may exaggerate; phone location data raise privacy concerns |

> 🔑 **AP Connection:** An undercount is not just a statistic. Because seats and funding follow the count, communities that are undercounted lose representation and money. This links data (Unit 1) to political geography and redistricting (Unit 4).
`
    },
    {
      id: 'hgspatia4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'John Snow\'s 1854 map persuaded officials to act mainly because it showed that',
            options: [
              'cholera deaths were spread evenly across all of London',
              'cholera deaths clustered around one water pump',
              'cholera deaths were highest in the richest households',
              'cholera deaths rose with height above the River Thames'
            ],
            correctAnswer: 1,
            explanation: 'The deaths clustered around the Broad Street pump and became rarer with distance from it, which pointed to the water as the source. An even spread, a wealth pattern or an elevation pattern would not have implicated a single pump.'
          },
          {
            question: 'Why does a census undercount of one group have political consequences in the United States?',
            options: [
              'House seats and federal funds are allocated by population counts',
              'Undercounted groups are removed from the voter registration rolls',
              'The Constitution requires each state to hold a new census to fix it',
              'Undercounts change the absolute location of the affected counties'
            ],
            correctAnswer: 0,
            explanation: 'Apportionment of House seats and many funding formulas use census counts, so an undercount lowers a community\'s representation and resources. Census counts do not remove anyone from voter rolls, and states do not run replacement censuses.'
          },
          {
            question: 'A geographer studies deforestation with satellite images but cannot tell from them who cleared the land or why. This illustrates that',
            options: [
              'remote sensing explains causes better than it shows patterns',
              'remote sensing shows patterns but needs other sources for causes',
              'remote sensing cannot show any change in land cover over time',
              'GIS cannot be used together with satellite images of a region'
            ],
            correctAnswer: 1,
            explanation: 'Satellite imagery is excellent at showing where land cover changed, but explaining who acted and why requires field work, interviews or policy documents. Imagery is stronger on patterns than on causes, it can show change over time, and GIS routinely uses satellite layers.'
          }
        ]
      }
    }
  ]
}
