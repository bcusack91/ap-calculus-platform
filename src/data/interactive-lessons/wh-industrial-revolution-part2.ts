export const whIndustrialRevolutionPart2Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir2-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 2 of 7 — Why Britain First?**

---

> 🔑 **Key Concept:** Britain industrialized first due to a unique combination of geographic, economic, and political advantages: abundant coal and iron deposits, a strong commercial tradition with available investment capital, an agricultural revolution that freed labor for factory work, and colonial markets that created demand for mass-produced goods. AP questions require explaining this combination rather than citing any single cause.
      `
    },
    {
      id: 'whir2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The enclosure movement\'s role in British industrialization was primarily to:',
            options: [
              'Displace rural agricultural workers by consolidating common lands into private estates, forcing former peasants and tenant farmers to migrate to urban areas where they became the factory labor force — the enclosure movement was the social mechanism that created an industrial working class by destroying the agricultural subsistence base',
              'Increase agricultural productivity with no impact on industrial labor supply',
              'Prevent rural workers from moving to cities',
              'Expand common lands available to small farmers',
            ],
            correctAnswer: 0,
            explanation: 'Enclosure is AP\'s mechanism connecting agricultural change to industrial labor supply: when Parliament authorized landowners to enclose common lands (1750-1850), they eliminated the subsistence farming that had sustained rural communities. Displaced farmers with no land had two options — poverty or factory work. This "push" factor (land loss) combined with the "pull" factor (factory wages) to create the British industrial labor force. Without enclosure, the factory system would have had no workers.'
          },
          {
            question: 'Britain\'s colonial empire contributed to industrialization primarily by:',
            options: [
              'Providing both raw materials (especially Indian cotton for textile mills) and protected markets for British manufactured goods — colonies supplied the inputs and absorbed the outputs of British industry, creating a self-reinforcing loop where industry expanded to meet colonial demand and colonialism expanded to supply industrial needs',
              'Colonies provided no economic benefit to British industrialization',
              'Colonies supplied labor that worked in British factories',
              'Colonial markets were irrelevant because British industry only sold to domestic consumers',
            ],
            correctAnswer: 0,
            explanation: 'The empire-industrialization connection is an AP complexity point: cotton textiles (Britain\'s first industrialized sector) required Indian cotton (raw material) and had to overcome Indian competition in global markets (by using imperial policy to destroy Indian textile manufacturing and create demand for British-made goods). The infamous destruction of Indian textile manufacturing (Dacca muslin) by British import policy demonstrates how colonialism and industrialization were mutually reinforcing rather than separate phenomena.'
          }
        ]
      }
    },
    {
      id: 'whir2-content',
      type: 'text' as const,
      content: `
## 📖 Why Britain Industrialized First

> **Geographic and Natural Resource Advantages**

Britain's physical geography created key preconditions:

- **Coal:** Abundant deposits in South Wales, Yorkshire, Midlands — fuel for steam engines
- **Iron ore:** Deposits close to coal (reduced transport costs); key raw material for machines/infrastructure
- **Rivers and canals:** Network of navigable rivers; canal building (1760s-1820s) connected resources to factories to ports
- **Island geography:** No point more than 70 miles from navigable water; cheap bulk transport
- **Harbors:** Deep-water ports (London, Liverpool, Bristol) connected British industry to global markets

> **Economic and Social Preconditions**

| Factor | Role in British Industrialization |
|--------|----------------------------------|
| **Agricultural Revolution** | Enclosure movement (1750-1850) displaced rural laborers → created urban factory workforce |
| **Commercial banking** | Joint-stock companies and credit markets provided investment capital for factories |
| **Colonial markets** | Empire (India, Americas) provided raw materials (cotton) and markets for manufactured goods |
| **Patent law** | Protection of inventors' profits incentivized technological innovation |
| **Merchant tradition** | Centuries of commercial culture created entrepreneurial class willing to invest in industry |

> **Key Inventions and Their Significance**

- **James Watt's steam engine (1769):** Converted heat into mechanical power; could be placed anywhere; not dependent on water location
- **Spinning jenny (1764) / water frame (1768):** Mechanized textile production; dramatically increased output per worker
- **Power loom (1784):** Completed textile mechanization; converted weavers from artisans to factory workers
- **Puddling process (1784):** Mass-produced wrought iron for machinery and construction

> **AP Comparison Anchor**

- **Britain vs. France:** Both had coal and commercial traditions but France's larger agricultural sector, aristocratic social structure, and Revolutionary/Napoleonic disruption delayed industrialization until 1820s-1840s
- **Britain vs. China:** Both had proto-industrial production (Chinese silk, British wool) but China lacked the institutional innovation incentives (patent law) and had state policies that prioritized agricultural stability over commercial innovation
      `
    },
    {
      id: 'whir2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'James Watt\'s steam engine\'s most transformative feature was:',
            options: [
              'Its fuel-powered mobility — unlike water mills (which required location on fast-moving rivers) or windmills (which required wind), the steam engine could be placed anywhere coal was available, allowing factories to concentrate in cities near labor and markets rather than dispersing along rivers, fundamentally changing the geography of production',
              'Steam engines were less powerful than water mills and only gradually replaced them',
              'Steam engines required proximity to large rivers and were geographically constrained',
              'The steam engine\'s main contribution was to agriculture rather than manufacturing',
            ],
            correctAnswer: 0,
            explanation: 'The geographic liberation created by steam power is the key mechanism: water-powered mills had to be located where rivers ran fast (geographically constrained, distant from labor pools); steam-powered mills could be located near coal deposits, labor, and transportation networks. This enabled the concentration of factories in urban areas, which enabled the division of labor, which enabled economies of scale. Steam power is the foundation of the "factory system" in its urban industrial form.'
          },
          {
            question: 'Patent law\'s role in British industrialization was to:',
            options: [
              'Protect inventors\' profits from their innovations for a fixed period, creating economic incentives to invest in research and invention — without patent protection, competitors could immediately copy any successful invention, eliminating the profit that motivated the original investment, so patent law was the institutional mechanism that sustained the innovation cycle',
              'Patent law prevented foreign inventors from patenting in Britain',
              'Patents were used exclusively by the government to control technology development',
              'Patent law had no significant impact on British innovation rates',
            ],
            correctAnswer: 0,
            explanation: 'Patent law is AP\'s example of how institutions shape economic behavior: the British patent system (dating from 1624 Statute of Monopolies) created a time-limited monopoly on innovations, allowing inventors to profit from their inventions before competition was allowed. This institutional incentive explains why Britain produced so many commercial innovations in the 18th century — the reward structure made invention commercially rational. France had similar inventors but less effective institutional incentive mechanisms.'
          },
          {
            question: 'Comparing British industrialization to why China did not industrialize first despite its proto-industrial production reveals:',
            options: [
              'China had comparable or superior proto-industrial capabilities (silk, ceramics, iron production) but lacked key institutional features: patent law protecting inventors\' profits, state policies prioritizing commercial innovation over agricultural stability, and available investment capital from commercial banking — demonstrating that industrialization requires institutional innovation alongside technological capability',
              'China lacked all the natural resources required for industrialization',
              'China had no proto-industrial production before European industrialization',
              'China deliberately chose not to industrialize for religious reasons',
            ],
            correctAnswer: 0,
            explanation: 'The China comparison is AP\'s most sophisticated "why Britain?" analysis: China had proto-industrialization (coal production in Shanxi was larger than Britain\'s in 1700; Chinese iron production was substantial), but Confucian state policies prioritized agricultural stability over commercial development, suppressed merchant activities, and didn\'t develop institutional incentives (patent law) for continuous innovation. This demonstrates that industrialization was not inevitable for the most technologically sophisticated society — it required specific institutional conditions.'
          }
        ]
      }
    },
    {
      id: 'whir2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The agricultural practice that displaced rural workers and created an urban factory labor force was ___',
            options: [
            'The enclosure movement',
            'The crop rotation system',
            'The factory system',
            'The canal network',
            ]
          },
          {
            label: 'The invention that freed factories from dependence on water power and enabled urban industrialization was ___',
            options: [
            'Watt\'s steam engine',
            'The spinning jenny',
            'The water frame',
            'The puddling process',
            ]
          },
          {
            label: 'The institutional mechanism that protected inventors\' profits and incentivized industrial innovation was ___',
            options: [
            'Patent law',
            'Joint-stock companies',
            'Guilds',
            'Colonial taxation',
            ]
          },
        ],
        correctAnswers: [
          'The enclosure movement',
          'Watt\'s steam engine',
          'Patent law',
        ],
        hint1: 'Agricultural transformation — land consolidation — displaced rural workers → urban factories',
        hint2: 'Steam power — coal fueled — freed factories from rivers — enabled urban concentration',
        hint3: 'Legal protection of inventors\' profits — time-limited monopoly — sustained innovation incentive',
        explanation: 'Enclosure displaced rural agricultural labor creating the factory workforce; Watt\'s steam engine freed factories from geographic dependence on water power; and patent law created institutional incentives for continuous technological innovation. Together these three factors — labor supply, power technology, and innovation incentives — form the core explanation for why British industrialization was self-sustaining rather than episodic.'
      }
    },
    {
      id: 'whir2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP prompt asks: "Why did Britain industrialize before France?" Which argument is most analytical?',
            options: [
              'Britain industrialized first not because of superior natural resources or technology (France had coal and sophisticated manufacturing) but because of a combination of institutional factors: patent law rewarded innovation; parliamentary enclosure created an industrial labor force; banking systems provided capital; and colonial markets provided raw materials and product demand — while France\'s revolutionary disruption (1789-1815) and larger agricultural sector delayed the same transition',
              'Britain had no geographic or institutional advantages over France — industrialization was random',
              'Britain simply had more coal than France, making industrialization inevitable',
              'France was culturally inferior and therefore unable to industrialize effectively',
            ],
            correctAnswer: 0,
            explanation: 'Multi-causal analysis earns AP credit: the comparison identifies multiple factors (institutional: patent law, banking; social: enclosure; commercial: colonial markets) and explains the French counterfactual (revolutionary disruption + larger agricultural sector = different timing). Single-cause explanations ("more coal") are insufficient — AP rewards recognizing that industrialization required a configuration of conditions, not any single determining factor.'
          },
          {
            question: 'The "agricultural revolution" preceding British industrialization demonstrates which AP causal relationship?',
            options: [
              'Agricultural improvement (crop rotation, selective breeding, drainage improvements) increased food productivity, supporting a larger urban population, while the enclosure movement simultaneously displaced rural labor — together creating both the food supply (urban workers could be fed) and labor supply (displaced farmers became urban workers) that factory industrialization required',
              'The agricultural revolution had no connection to industrialization — the two were separate processes',
              'The agricultural revolution reduced food production, forcing people into factories for survival',
              'Agricultural improvements only affected rural areas with no urban industrial consequences',
            ],
            correctAnswer: 0,
            explanation: 'The agricultural-industrial connection demonstrates AP\'s attention to causal sequences: agricultural revolution (increased productivity) enabled urbanization (more urban workers could be fed at lower cost); enclosure (land consolidation) created the urban labor force. Both were necessary. Without the agricultural productivity improvements, urban populations couldn\'t be fed; without enclosure, rural workers wouldn\'t have moved to cities. Industrialization required both a supply of labor AND a way to feed that labor — both provided by agricultural transformation.'
          }
        ]
      }
    }
  ]
}
