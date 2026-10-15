export const hgUrbanizationPart4Data = {
  topicSlug: 'hg-urbanization',
  sections: [
    {
      id: 'hgurbani4-intro',
      type: 'text' as const,
      content: `
# 🌍 Urbanization

**Part 4 of 7 — Inside the City: Models of Urban Structure and Their Limits**

---

| Section |
|---------|
| 📖 Bid-Rent Theory: The Engine Behind the Models |
| Four North American Models |
| Models from Latin America, Africa, Southeast Asia and the Middle East |
| One City, Four Models: Chicago Today |

> 🔑 **Key Concept:** Part 1 listed the models. This part explains **what each model assumes, which city it came from, and where it fails**. Every model is a generalization at the **city scale**, built from particular places at a particular time, so it fits some cities well and others poorly (CED Topic 6.5).
`
    },
    {
      id: 'hgurbani4-models',
      type: 'text' as const,
      content: `
## 📖 Bid-Rent Theory: The Engine Behind the Models

**Bid-rent theory** says land users compete for the most accessible land, and each is willing to pay a different amount for it. Land in and near the **CBD** is the most accessible, so it is the most expensive.

| Land user | Willingness to pay near the center | Result on the landscape |
|---|---|---|
| **Commercial** (offices, retail) | Highest: needs customers and access | Tall buildings, intensive use of small lots |
| **Industrial** | High, but falls quickly with distance | Factories near rail, ports and highways |
| **Residential** | Lower; trades distance for space | Larger lots farther out |
| **Agriculture** | Lowest | Edge of the urban area |

Bid-rent explains why land values and building heights peak downtown and why rings or wedges of land use can form. **Limitation:** it assumes one center of accessibility. Highways and airports create many accessible points, which is why later models add more nodes.

## Four North American Models

| Model | Source and date | Core idea | Main limitation |
|---|---|---|---|
| **Concentric zone** | Ernest Burgess, 1925, based on Chicago | Rings around the CBD: zone in transition (factories, crowded housing, new immigrants), working-class homes, better residences, commuter zone. Groups move outward over time, a process of **invasion and succession** | Assumes one center and a flat plain; ignores transport routes, rivers and hills; based on one 1920s U.S. city |
| **Sector** | Homer Hoyt, 1939, from rent data for 142 U.S. cities | Land uses form **wedges** along transport routes; the high-rent sector grows outward along an attractive corridor, and low-income housing sits beside industry and rail lines | Still a single CBD; built from pre-highway data, before cars spread growth in every direction |
| **Multiple nuclei** | Chauncy Harris and Edward Ullman, 1945 | A city grows around **several nuclei** (a port, a university, an airport, an industrial district), because some activities need special facilities, similar activities cluster, and incompatible ones repel | Describes the nodes but not how land is arranged around each one; still U.S.-based |
| **Galactic city (peripheral model)** | Term popularized by Peirce Lewis in the 1980s; Chauncy Harris's peripheral model, 1997 | A central city ringed by a **beltway**, with suburbs and **edge cities** at highway interchanges; the CBD is one node among many | Fits car-dependent U.S. metros; misses transit-based cities and the return of residents to many downtowns |

> 🔑 **AP Connection:** The models build on each other. Burgess has **rings**, Hoyt bends them into **wedges** along routes, Harris and Ullman add **many centers**, and the galactic model spreads those centers along **highways**. Compare them by naming what each one adds.
`
    },
    {
      id: 'hgurbani4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'According to bid-rent theory, why do the tallest buildings in most cities stand in or near the CBD?',
            options: [
              'Land there costs the most, so builders use each lot intensively',
              'Zoning laws in most cities ban tall buildings in the suburbs',
              'Industrial firms outbid offices for the most central locations',
              'Residents value large yards more than access to jobs downtown'
            ],
            correctAnswer: 0,
            explanation: 'The most accessible land commands the highest rent, so commercial users build upward to get more floor space from each costly lot. Offices, not factories, usually outbid other users at the center.'
          },
          {
            question: 'Which criticism applies most directly to the Burgess concentric zone model?',
            options: [
              'It shows many separate centers',
              'It assumes one center on flat land',
              'It was built from data on Asian ports',
              'It was based on car-era beltway suburbs'
            ],
            correctAnswer: 1,
            explanation: 'Burgess drew perfect rings around a single CBD, as if the city sat on a uniform plain with no rivers, lakes or main roads. He worked from 1920s Chicago, long before beltways, and multiple centers belong to the Harris and Ullman model.'
          },
          {
            question: 'A city has a downtown, a separate university district, an industrial port area and an airport business cluster. Which model fits best?',
            options: [
              'Sector model',
              'Concentric zone model',
              'Multiple nuclei model',
              'Bid-rent model'
            ],
            correctAnswer: 2,
            explanation: 'Several specialized centers of activity are the defining feature of the Harris and Ullman multiple nuclei model. Rings and wedges both grow from one CBD.'
          }
        ]
      }
    },
    {
      id: 'hgurbani4-global',
      type: 'text' as const,
      content: `
## Models from Latin America, Africa, Southeast Asia and the Middle East

| Model | Source | Core idea | Main limitation |
|---|---|---|---|
| **Latin American city** | Ernst Griffin and Larry Ford, 1980 (updated by Ford, 1996) | A CBD with a **spine** of wealthy homes and businesses along a grand boulevard; rings that decline in quality outward: zone of maturity, zone of **in situ accretion** (housing slowly improved by residents), and **peripheral squatter settlements**; **disamenity sectors** of extreme poverty along ravines, dumps or rail lines | Based on Spanish colonial grid cities; underplays newer gated suburbs, malls and business districts at the edge |
| **Sub-Saharan African city** | Harm de Blij | **Three CBDs**: a colonial CBD of high-rises, a traditional CBD of small shops, and an open-air **market zone**; ethnic and mixed neighborhoods; a mining or manufacturing zone; **informal satellite townships** on the edge | Africa's cities differ widely; South African cities were shaped by apartheid planning, and fast growth is changing every city it describes |
| **Southeast Asian city** | T. G. McGee, 1967 | The **port zone** is the focal point. The usual CBD functions are scattered into separate zones: a government zone, a Western commercial zone and an **alien commercial zone** of Chinese merchants. Market gardening, industrial estates and squatter areas lie on the edge | Built from colonial port cities; many, such as Jakarta and Kuala Lumpur, now have large high-rise CBDs |
| **North African and Middle Eastern city** | A widely taught generalized model | An old walled **medina** around a central mosque and a covered **bazaar (souk)**; narrow, winding streets and courtyard houses that give privacy and shade; a citadel; newer colonial or modern districts outside the walls | Oil-rich Gulf cities such as Dubai look more like galactic cities than like this model |

### Patterns Across These Models
- **Wealth location flips.** In Burgess, the wealthy live on the edge. In the Latin American model, the wealthy live near the center along the spine, and the poorest live on the periphery.
- **Colonial legacies** shape the layout: the colonial CBD in the African model, the alien commercial zone in McGee's model, and the colonial plaza and grid in Griffin-Ford.
- **Informal settlement** appears on the edge in three of the four models, a sign of rapid rural-to-urban migration. Why these settlements form, and how cities respond, is studied with urban challenges later in Unit 6.
`
    },
    {
      id: 'hgurbani4-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Model** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A city has a colonial high-rise downtown, a separate district of small traditional shops and a large open-air market. This fits the ___',
            options: ['Sub-Saharan African city model', 'Southeast Asian city model', 'Latin American city model', 'Concentric zone model']
          },
          {
            label: 'Government offices, a Western shopping district and a Chinese merchant district are spread out around a busy harbor. This fits the ___',
            options: ['Southeast Asian city model', 'Sub-Saharan African city model', 'Multiple nuclei model', 'Sector model']
          },
          {
            label: 'A walled old town has a central mosque, a covered market and narrow dead-end lanes. This fits the ___',
            options: ['North African and Middle Eastern city model', 'Latin American city model', 'Galactic city model', 'Sub-Saharan African city model']
          }
        ],
        correctAnswers: ['Sub-Saharan African city model', 'Southeast Asian city model', 'North African and Middle Eastern city model'],
        hint1: 'Count the commercial centers: there are three.',
        hint2: 'The port is the focal point.',
        hint3: 'Medina, mosque and souk.',
        explanation: 'Three commercial centers define de Blij\'s African city. A port focus with scattered government, Western and alien commercial zones is McGee\'s Southeast Asian city. A medina with a mosque and souk is the North African and Middle Eastern model.'
      }
    },
    {
      id: 'hgurbani4-chicago',
      type: 'text' as const,
      content: `
## One City, Four Models: Chicago Today

Applying a model means matching its features to evidence and then saying **where it fails**. Chicago, where Burgess built his rings, shows why one model is rarely enough.

| Feature of today's Chicago area | Model it supports |
|---|---|
| The Loop, a dense CBD of offices and towers at the center | Concentric zone and bid-rent (peak land values downtown) |
| A wealthy corridor running north along the Lake Michigan shore, through the Gold Coast and into the North Shore suburbs | Sector (a high-rent wedge along an amenity) |
| O'Hare Airport surrounded by hotels, warehouses and offices | Multiple nuclei (a specialized node) |
| Schaumburg, a suburb with a regional mall and office towers near interstate interchanges | Galactic city (an edge city on the highway ring) |

### What No Model Shows
Lake Michigan cuts every ring and wedge in half, so the "concentric" city is really a set of half-rings. Many inner neighborhoods have also gained high-income residents since the 1990s, which the outward-moving zones of Burgess do not predict.

> 🔑 **AP Connection:** A strong answer names the model, cites the matching feature, and states a limitation in the same paragraph: "The lakefront wealthy corridor fits Hoyt's sector model, but Lake Michigan means no model's rings or wedges extend east of downtown."
`
    },
    {
      id: 'hgurbani4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In the Griffin-Ford model, where do the poorest residents of a Latin American city most often live?',
            options: [
              'In peripheral squatter settlements and disamenity sectors',
              'In the commuter zone at the outer edge of a beltway suburb',
              'In high-rise towers along the spine near the central plaza',
              'In the zone of maturity with paved roads and full services'
            ],
            correctAnswer: 0,
            explanation: 'The model places the poorest people on the urban edge and in disamenity sectors, the reverse of the Burgess pattern. The spine and the zone of maturity hold wealthier and middle-income residents.'
          },
          {
            question: 'Which feature is most distinctive of McGee\'s Southeast Asian city model?',
            options: [
              'A port zone that serves as the focus',
              'A single CBD surrounded by even rings',
              'A grand boulevard lined by elite homes',
              'Edge cities at each beltway interchange'
            ],
            correctAnswer: 0,
            explanation: 'McGee\'s model centers on the old colonial port, with CBD functions split into separate zones around it. A boulevard spine belongs to Griffin-Ford, and edge cities to the galactic model.'
          },
          {
            question: 'Why do models built from U.S. cities often fit cities in Latin America and Africa poorly?',
            options: [
              'Colonial planning and rapid migration produced different layouts',
              'Cities outside the United States lack any business district',
              'Land values in those cities rise with distance from the center',
              'Geographers have not yet studied cities outside North America'
            ],
            correctAnswer: 0,
            explanation: 'Colonial grids, plazas and ports, along with fast rural-to-urban migration into peripheral settlements, created patterns the U.S. models never assumed. Those cities do have CBDs, and their land values still peak near them.'
          }
        ]
      }
    }
  ]
}
