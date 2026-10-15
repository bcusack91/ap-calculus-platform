export const whIndustrialRevolutionPart6Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir6-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 6 of 7 — Environmental Consequences and Global Economic Impact**

---

> 🔑 **Key Concept:** Industrialization transformed the natural environment at unprecedented scale and reorganized the global economy, creating patterns of unequal development that persist today. AP questions evaluate industrialization's long-term environmental consequences and the global economic inequalities it produced.
      `
    },
    {
      id: 'whir6-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The pollution of the Thames River (London) that culminated in the "Great Stink" of 1858 demonstrates:',
            options: [
              'Industrial and urban waste overwhelmed the river\'s natural capacity to clean itself, creating a new scale of pollution',
              'River pollution was a pre-industrial problem that industrial growth in London did not noticeably worsen',
              'Industrial pollution damaged London\'s air but left its rivers and water supply largely untouched',
              'The Thames had carried little aquatic life even before 1700, so industry changed its condition very little',
            ],
            correctAnswer: 0,
            explanation: 'The qualitative distinction in industrial pollution is AP\'s environmental history point: pre-industrial cities produced biodegradable organic waste that rivers could process at human-population scales; industrial cities produced concentrated chemical waste (dye works, tanneries, gas works) alongside massive organic waste that biological systems couldn\'t process. The 1858 "Great Stink" (raw sewage rotting in the river during a hot summer) finally forced London to build the sewage system that became the model for modern urban sanitation — another demonstration that industrial problems generated reform responses. (The Thames was later declared biologically dead in 1957.)'
          },
          {
            question: 'The collapse of Indian textile manufacturing during British industrialization demonstrates:',
            options: [
              'Cheap British machine cloth and colonial trade policy, not market competition alone, ruined India\'s weavers',
              'Indian cloth was inferior in quality, durability, and design, so buyers abandoned it once British machine goods arrived',
              'British mills won purely through cheaper production, with no colonial tariffs or trade policy involved',
              'India\'s textile industry was small and unimportant before 1750, so its decline had little economic effect',
            ],
            correctAnswer: 0,
            explanation: 'Deindustrialization in India had several causes working together: cheap British machine-made cloth flooded Indian markets, British tariffs restricted Indian cloth entering Britain, and colonial free-trade policy let British goods into India nearly duty-free. Indian muslin (Dacca) had been the finest cotton cloth in the world, so its collapse shows that colonial power, not just better technology, decided who won — industrialization and colonialism were mutually reinforcing.'
          }
        ]
      }
    },
    {
      id: 'whir6-content',
      type: 'text' as const,
      content: `
## 📖 Environmental and Global Economic Consequences

> **Environmental Transformation**

Industrial production transformed the natural environment:

- **Air pollution:** Coal burning produced smoke, sulfur dioxide, particulates; London "pea-souper" fogs; respiratory disease
- **Water pollution:** Industrial waste and raw sewage discharged into rivers; the Thames's "Great Stink" (1858) forced London to build sewers (the river was later declared biologically dead in 1957)
- **Land use change:** Strip mining, deforestation for timber and charcoal, habitat destruction
- **Scale:** Industrial pollution was qualitatively different from agricultural pollution — concentrated, chemical, unprecedented

> **Climate Foundations: The Carbon Economy**

Industrialization created the fossil fuel-based carbon economy:

- **Coal dominance (1750-1900):** From wood/water → coal → steam; carbon release at industrial scale
- **Oil emergence (late 19th century):** Pennsylvania oil (1859); internal combustion engine; petrochemical industry
- **Atmospheric CO2:** Industrial carbon emissions began measurable atmospheric accumulation in 19th century
- **Long-term consequence:** Industrial-era fossil fuel combustion is the primary driver of contemporary climate change

> **Global Economic Reorganization**

Industrialization reorganized the global economy into industrial and non-industrial zones:

| Zone | Role | Example |
|------|------|---------|
| **Industrial core** | Manufactured goods production; capital accumulation | Britain, then Germany, France, USA, Japan |
| **Periphery** | Raw material supply; market for manufactured goods | India (cotton), Egypt (cotton), West Africa (palm oil), South America (nitrates) |

This reorganization was often coercive:
- Cheap British machine-made cloth, British tariffs on Indian cloth, and colonial free-trade policy together destroyed Indian textile manufacturing and created a market for British goods
- Egyptian cotton monoculture created dependency on world cotton prices
- Latin American economies oriented toward raw material export for European industrial markets

> **AP Comparison Anchor**

- **Industrial core vs. periphery:** The structural inequality created by industrial-era global economic reorganization is the foundation of contemporary development economics
- **Industrialization and colonialism:** The most powerful industrializing states (Britain, France, Germany) used industrial military advantage (gunboats, rifles) to colonize non-industrial regions, creating self-reinforcing inequality
      `
    },
    {
      id: 'whir6-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The creation of an industrial "core" and non-industrial "periphery" in the global economy demonstrates:',
            options: [
              'Industrial regions accumulated capital and technology while others became dependent raw-material suppliers',
              'Industrialization spread wealth evenly across regions, as world markets rewarded every exporter in equal measure',
              'The core-periphery divide vanished by 1900, because industry spread quickly to Asia, Africa, and Latin America',
              'Non-industrial regions freely chose raw-material exports because they earned more than manufacturing would have',
            ],
            correctAnswer: 0,
            explanation: 'The core-periphery model is AP\'s framework for understanding industrial-era global inequality: when British industry required cotton, Egyptian agriculture was reorganized toward cotton monoculture (under British financial and political pressure); this reorganization concentrated Egyptian agricultural resources in one crop tied to British industrial demand, creating structural vulnerability. This dependency didn\'t disappear when British hegemony ended — the infrastructure, economic relationships, and reduced agricultural diversity persisted. Contemporary development economics addresses the consequences of this industrial-era reorganization.'
          },
          {
            question: 'Industrial military technology (gunboats, rifles, machine guns) and colonialism were related in that:',
            options: [
              'Factory-made weapons let small European forces conquer and govern territories far larger than Europe itself',
              'Diplomacy and treaties, not weapons, were the main means by which Europeans acquired African territory',
              'African and Asian armies had weapons equal to Europe\'s, so European conquests depended mainly on disease and luck',
              'Military technology mattered little, since most colonized peoples welcomed European rule voluntarily',
            ],
            correctAnswer: 0,
            explanation: 'The military-industrial connection is AP\'s explanation for the acceleration of European colonialism in the 19th century: maxim gun (1884), breech-loading rifles, and steam-powered gunboats gave European forces such overwhelming advantage that colonial conquest became militarily feasible at continental scale. The Berlin Conference (1884-85) dividing Africa among European powers was possible because industrial weapons made African resistance militarily futile (with notable exceptions like Ethiopia). Industrial production thus directly enabled colonial expansion.'
          },
          {
            question: 'The fossil fuel basis of industrial capitalism demonstrates which long-term consequence?',
            options: [
              'Energy systems built on coal from 1750 onward created path dependencies and emissions that drive climate change today',
              'Early industrial coal burning caused no lasting environmental harm, since smoke cleared once factories closed',
              'Industrial-era emissions were too small to affect the atmosphere, so climate change began only after 1950',
              'Industrialists rejected cheap solar and wind power that was widely available, choosing coal for political reasons',
            ],
            correctAnswer: 0,
            explanation: 'Path dependency in energy systems is AP\'s connection between industrial history and contemporary environmental politics: industrial capitalism was built on coal; the infrastructure (railroads, steam engines, factories), economic interests (coal mining companies, railroad companies), and technologies (internal combustion engine, petrochemical industry) created around fossil fuels generated powerful resistance to transition to alternative energy. The CO2 accumulated from 1750 onward is the physical record of these historical decisions.'
          }
        ]
      }
    },
    {
      id: 'whir6-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'Alongside cheap machine-made cloth, the British policy that shut Indian textiles out of British markets was ___',
            options: [
            'Protective tariff policy',
            'The Navigation Acts',
            'The East India Company charter',
            'The Corn Laws',
            ]
          },
          {
            label: 'The global economic structure that divided the world into industrial producers and raw material suppliers was ___',
            options: [
            'The core-periphery system',
            'The Zollverein',
            'The gold standard',
            'The Atlantic trade network',
            ]
          },
          {
            label: 'The industrial weapon that gave European forces overwhelming military advantage in colonial conquest was ___',
            options: [
            'The machine gun (maxim gun)',
            'The steam engine',
            'The railroad',
            'The telegraph',
            ]
          },
        ],
        correctAnswers: [
          'Protective tariff policy',
          'The core-periphery system',
          'The machine gun (maxim gun)',
        ],
        hint1: 'Cheap British machine cloth + tariffs on Indian cloth entering Britain + British goods nearly duty-free in India — together destroyed the Dacca muslin industry',
        hint2: 'Global inequality — industrial core accumulates capital — periphery supplies raw materials — structural dependency',
        hint3: 'Hiram Maxim 1884 — first automatic machine gun — colonial conquest — Scramble for Africa',
        explanation: 'Protective tariff policy (working alongside cheap machine-made cloth and colonial free trade) demonstrates how colonialism enforced industrial market advantages; the core-periphery system describes the global economic inequality industrialization created; and the machine gun demonstrates how industrial weapons enabled colonial conquest — all three are dimensions of how industrialization transformed global power relationships.'
      }
    },
    {
      id: 'whir6-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing industrialization\'s environmental consequences to its economic consequences reveals:',
            options: [
              'Economic gains went to 19th-century owners and workers, while environmental costs fell on later generations worldwide',
              'Economic benefits and environmental costs fell equally on every population, in every region and in every single generation',
              'Environmental damage ended with the industrial period, while its economic gains continue to be felt today',
              'Workers bore the economic losses of industry, while owners suffered most of its environmental damage',
            ],
            correctAnswer: 0,
            explanation: 'Distributional inequality across time and space is AP\'s most sophisticated environmental analysis: 19th-century British factory owners received economic profits; 19th-century workers eventually received rising wages; future generations globally receive accumulated atmospheric carbon. The beneficiaries and cost-bearers of industrialization are different people in different times and places — this temporal and geographic mismatch is why industrial-era environmental decisions were made without accounting for full costs. AP rewards recognizing this distributional dimension of industrial environmental history.'
          },
          {
            question: 'For AP, the global economic reorganization created by industrialization is significant because:',
            options: [
              'It built lasting divides between industrial nations and raw-material exporters that persist today',
              'It was a temporary arrangement that dissolved after 1914 and has little relevance to today\'s global economy',
              'It left global inequality unchanged, since the gap between rich and poor regions was as wide before 1750',
              'It benefited all nations equally, as rising world trade spread industrial production to every continent by 1900',
            ],
            correctAnswer: 0,
            explanation: 'Contemporary relevance is AP\'s deepest lesson about industrialization: the patterns of global inequality that "development economics" addresses today — why are tropical commodity-exporting nations poor while temperate manufacturing nations are rich? — were largely constructed during the industrial era through the combination of colonial coercion, market reorganization, and military advantage. Understanding industrialization is understanding the origins of the contemporary world economic order.'
          }
        ]
      }
    }
  ]
}
