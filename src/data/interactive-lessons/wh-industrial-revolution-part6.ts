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
            question: 'The transformation of the Thames River (London) from a living river to a biologically dead river by the 1850s demonstrates:',
            options: [
              'Industrial-scale pollution exceeded natural systems\' capacity for self-purification — pre-industrial human and animal waste was biodegradable and at scales rivers could process; industrial chemical and organic waste at industrial concentrations overwhelmed river biology, demonstrating that industrialization created qualitatively new environmental problems not just larger versions of existing ones',
              'River pollution was a pre-industrial problem that industrialization had no significant impact on',
              'Industrial pollution affected air but not water systems',
              'The Thames was always biologically dead with no pre-industrial aquatic life',
            ],
            correctAnswer: 0,
            explanation: 'The qualitative distinction in industrial pollution is AP\'s environmental history point: pre-industrial cities produced biodegradable organic waste that rivers could process at human-population scales; industrial cities produced concentrated chemical waste (dye works, tanneries, gas works) alongside massive organic waste that biological systems couldn\'t process. The 1858 "Great Stink" (Thames\' biological death in summer heat) finally forced London to build the sewage system that became the model for modern urban sanitation — another demonstration that industrial problems generated reform responses.'
          },
          {
            question: 'The destruction of Indian textile manufacturing by British import tariff policies during industrialization demonstrates:',
            options: [
              'Industrial advantages were enforced through political and legal power, not just market competition — British manufacturers used political power (control of Indian colonial government) to impose tariffs eliminating Indian competition in Indian markets while British goods entered India tariff-free, deliberately destroying the world\'s most sophisticated pre-industrial textile industry to create captive markets for British factory goods',
              'Indian textiles were technically inferior to British machine-made textiles in all respects',
              'British manufacturers outcompeted Indian textiles purely through market forces without political intervention',
              'Indian textile industry was unimportant before British industrialization',
            ],
            correctAnswer: 0,
            explanation: 'The destruction of Indian textiles is AP\'s most important example of how industrialization and colonialism were mutually reinforcing: Indian muslin (Dacca) was the highest quality cotton textile in the world — European aristocrats preferred it; British factories couldn\'t initially compete on quality. British policy solved this not through better products but through colonial power: imposing tariffs on Indian exports to Britain, allowing British goods into India duty-free. This political coercion of markets was as important to British industrial success as the steam engine.'
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
- **Water pollution:** Industrial waste discharged into rivers; Thames River biological death by 1850s
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
- British tariff policies destroyed Indian textile manufacturing to create market for British goods
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
              'Industrialization did not benefit all regions equally — it created structural inequality between industrialized regions (which accumulated capital, technological capacity, and economic complexity) and non-industrialized regions that were reorganized as raw material suppliers for industrial economies, producing dependency relationships that persisted long after the industrial period',
              'Industrialization benefited all regions equally through market mechanisms',
              'The core-periphery distinction disappeared when industrialization spread globally',
              'Non-industrial regions voluntarily chose to be raw material suppliers',
            ],
            correctAnswer: 0,
            explanation: 'The core-periphery model is AP\'s framework for understanding industrial-era global inequality: when British industry required cotton, Egyptian agriculture was reorganized toward cotton monoculture (under British financial and political pressure); this reorganization concentrated Egyptian agricultural resources in one crop tied to British industrial demand, creating structural vulnerability. This dependency didn\'t disappear when British hegemony ended — the infrastructure, economic relationships, and reduced agricultural diversity persisted. Contemporary development economics addresses the consequences of this industrial-era reorganization.'
          },
          {
            question: 'Industrial military technology (gunboats, rifles, machine guns) and colonialism were related in that:',
            options: [
              'Industrial production of weapons created overwhelming military advantage for industrialized states over non-industrial ones — the same factories producing cotton and steel also produced superior weapons at industrial scale, enabling relatively small European forces to conquer and administer territories vastly larger than Europe\'s own population would have made possible through pre-industrial military methods',
              'Military technology had no significant impact on colonial conquest — diplomacy was the primary mechanism',
              'Non-industrial societies had equal military capabilities to industrial states',
              'Industrial military advantage was irrelevant because colonial conquest was voluntary',
            ],
            correctAnswer: 0,
            explanation: 'The military-industrial connection is AP\'s explanation for the acceleration of European colonialism in the 19th century: maxim gun (1884), breech-loading rifles, and steam-powered gunboats gave European forces such overwhelming advantage that colonial conquest became militarily feasible at continental scale. The Berlin Conference (1884-85) dividing Africa among European powers was possible because industrial weapons made African resistance militarily futile (with notable exceptions like Ethiopia). Industrial production thus directly enabled colonial expansion.'
          },
          {
            question: 'The fossil fuel basis of industrial capitalism demonstrates which long-term consequence?',
            options: [
              'Industrial-era decisions about energy systems created path dependencies that persist into the present — infrastructure, technology, and economic interests built around fossil fuel combustion from 1750 onward generated the accumulated atmospheric carbon that drives contemporary climate change, demonstrating that industrial-era choices have multi-generational consequences',
              'Fossil fuel use during industrialization had no environmental consequences',
              'Industrial-era carbon emissions were too small to have any atmospheric effects',
              'Renewable energy sources were available during industrialization but deliberately rejected',
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
            label: 'The British policy that destroyed Indian textile manufacturing to create captive markets for British factories was ___',
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
        hint1: 'British colonial power — tariffs on Indian exports — British goods duty-free in India — destroyed Dacca muslin industry',
        hint2: 'Global inequality — industrial core accumulates capital — periphery supplies raw materials — structural dependency',
        hint3: 'Hiram Maxim 1884 — first automatic machine gun — colonial conquest — Scramble for Africa',
        explanation: 'Protective tariff policy demonstrates how colonialism enforced industrial market advantages; the core-periphery system describes the global economic inequality industrialization created; and the machine gun demonstrates how industrial weapons enabled colonial conquest — all three are dimensions of how industrialization transformed global power relationships.'
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
              'Economic benefits (increased production, rising living standards for industrial workers over time, capital accumulation) and environmental costs (pollution, resource depletion, atmospheric carbon accumulation) were distributed across different populations and different time periods — industrial workers and factory owners in the 19th century benefited economically while future generations globally bear the environmental costs',
              'Industrialization produced equal environmental and economic benefits for all populations',
              'Economic and environmental consequences of industrialization were experienced identically by all groups',
              'Environmental consequences of industrialization were limited to the industrial period with no lasting effects',
            ],
            correctAnswer: 0,
            explanation: 'Distributional inequality across time and space is AP\'s most sophisticated environmental analysis: 19th-century British factory owners received economic profits; 19th-century workers eventually received rising wages; future generations globally receive accumulated atmospheric carbon. The beneficiaries and cost-bearers of industrialization are different people in different times and places — this temporal and geographic mismatch is why industrial-era environmental decisions were made without accounting for full costs. AP rewards recognizing this distributional dimension of industrial environmental history.'
          },
          {
            question: 'For AP, the global economic reorganization created by industrialization is significant because:',
            options: [
              'Industrialization created the contemporary pattern of global economic inequality — industrialized nations accumulated capital, technological complexity, and economic diversity while non-industrialized regions were reorganized as raw material suppliers, creating structural dependencies that contemporary development economics still attempts to address and that define North-South economic relationships today',
              'Industrial-era economic organization was temporary and has no contemporary relevance',
              'Global economic inequality existed before industrialization and was not significantly changed by it',
              'All nations benefited equally from global economic reorganization during industrialization',
            ],
            correctAnswer: 0,
            explanation: 'Contemporary relevance is AP\'s deepest lesson about industrialization: the patterns of global inequality that "development economics" addresses today — why are tropical commodity-exporting nations poor while temperate manufacturing nations are rich? — were largely constructed during the industrial era through the combination of colonial coercion, market reorganization, and military advantage. Understanding industrialization is understanding the origins of the contemporary world economic order.'
          }
        ]
      }
    }
  ]
}
