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
              'Push rural families off consolidated common lands, turning displaced farmers into a mobile labor supply for urban factories',
              'Raise farm productivity on enclosed estates while keeping most rural laborers employed in the countryside',
              'Keep rural workers in their villages by guaranteeing tenants long leases on the newly enclosed farms',
              'Expand common grazing land for small farmers so that they could supply wool to cottage spinners',
            ],
            correctAnswer: 0,
            explanation: 'Enclosure is AP\'s mechanism connecting agricultural change to industrial labor supply: when Parliament authorized landowners to enclose common lands (1750-1850), they eliminated the subsistence farming that had sustained rural communities. Displaced farmers with no land had two options — poverty or factory work. This "push" factor (land loss) combined with the "pull" factor (factory wages) to create the British industrial labor force. Without enclosure, the factory system would have had no workers.'
          },
          {
            question: 'Britain\'s colonial empire contributed to industrialization primarily by:',
            options: [
              'Supplying raw cotton and other inputs while providing protected markets for British manufactured goods',
              'Supplying most of the coal and iron ore that British mines could not produce in large enough quantities',
              'Sending colonial laborers to staff British textile mills during the labor shortages of the 1780s',
              'Buying British machinery while colonies built their own factories to compete in world markets',
            ],
            correctAnswer: 0,
            explanation: 'The empire-industrialization connection is an AP complexity point: cotton textiles (Britain\'s first industrialized sector) depended on imported raw cotton (mostly grown by enslaved people in the American South, with more from India later) and had to overcome Indian competition in global markets. The collapse of Indian textile manufacturing (Dacca muslin), driven by cheap British machine-made cloth, British tariffs on Indian cloth, and colonial free-trade policy, demonstrates how colonialism and industrialization were mutually reinforcing rather than separate phenomena.'
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

- **James Watt's steam engine (patent 1769; engines from 1776):** Converted heat into mechanical power; could be placed anywhere; not dependent on water location
- **Spinning jenny (c. 1764) / water frame (1769):** Mechanized textile production; dramatically increased output per worker
- **Power loom (1785):** Completed textile mechanization; converted weavers from artisans to factory workers
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
              'It freed factories from riverbanks so they could cluster in cities near coal fields and workers',
              'It doubled the power of water mills, so factories stayed on fast rivers but produced far more cloth',
              'It ran on wood rather than coal, letting factories operate in forested regions far from the coalfields',
              'It was first used to drive farm machinery, mechanizing harvests long before it reached any textile mill',
            ],
            correctAnswer: 0,
            explanation: 'The geographic liberation created by steam power is the key mechanism: water-powered mills had to be located where rivers ran fast (geographically constrained, distant from labor pools); steam-powered mills could be located near coal deposits, labor, and transportation networks. This enabled the concentration of factories in urban areas, which enabled the division of labor, which enabled economies of scale. Steam power is the foundation of the "factory system" in its urban industrial form.'
          },
          {
            question: 'Patent law\'s role in British industrialization was to:',
            options: [
              'Give inventors a temporary monopoly on their designs, so investing in invention could pay off',
              'Give the Crown ownership of new machines so that the state could license them to chosen firms',
              'Bar foreign inventors from British markets so that domestic machine makers faced no competition',
              'Require inventors to share designs freely, spreading new machines quickly to every manufacturer',
            ],
            correctAnswer: 0,
            explanation: 'Patent law is AP\'s example of how institutions shape economic behavior: the British patent system (dating from 1624 Statute of Monopolies) created a time-limited monopoly on innovations, allowing inventors to profit from their inventions before competition was allowed. This institutional incentive explains why Britain produced so many commercial innovations in the 18th century — the reward structure made invention commercially rational. France had similar inventors but less effective institutional incentive mechanisms.'
          },
          {
            question: 'Comparing British industrialization to why China did not industrialize first despite its proto-industrial production reveals:',
            options: [
              'China matched Britain in proto-industry but lacked institutions like patents, merchant-friendly policy, and investment banks',
              'China lacked the coal, iron, and navigable rivers needed for industry, so it could never mechanize its production',
              'China had little proto-industrial production, so it had no artisan base on which to build factories',
              'Confucian scholars banned machinery for religious reasons, so the Qing state deliberately rejected industry',
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
              'Patents, enclosure, banking, and colonial markets worked together, while upheaval in 1789-1815 delayed France',
              'Britain simply had more coal than France, which made earlier industrialization inevitable whatever its institutions',
              'Britain had a larger population, cheaper labor, and lower wages than France, so its mills were cheaper to run',
              'France lacked coal and skilled craftsmen entirely, so it could not begin industrializing until after 1900',
            ],
            correctAnswer: 0,
            explanation: 'Multi-causal analysis earns AP credit: the comparison identifies multiple factors (institutional: patent law, banking; social: enclosure; commercial: colonial markets) and explains the French counterfactual (revolutionary disruption + larger agricultural sector = different timing). Single-cause explanations ("more coal") are insufficient — AP rewards recognizing that industrialization required a configuration of conditions, not any single determining factor.'
          },
          {
            question: 'The "agricultural revolution" preceding British industrialization demonstrates which AP causal relationship?',
            options: [
              'Higher farm output fed growing cities while enclosure pushed displaced rural workers into factory jobs',
              'Farm productivity collapsed under enclosure, so hungry rural families were forced into factories to avoid starvation',
              'New farm machinery came first, and the factories that built it then grew into Britain\'s main manufacturing sector',
              'Better farming kept rural laborers busy year-round while cities grew mainly through immigration from Ireland and Europe',
            ],
            correctAnswer: 0,
            explanation: 'The agricultural-industrial connection demonstrates AP\'s attention to causal sequences: agricultural revolution (increased productivity) enabled urbanization (more urban workers could be fed at lower cost); enclosure (land consolidation) created the urban labor force. Both were necessary. Without the agricultural productivity improvements, urban populations couldn\'t be fed; without enclosure, rural workers wouldn\'t have moved to cities. Industrialization required both a supply of labor AND a way to feed that labor — both provided by agricultural transformation.'
          }
        ]
      }
    }
  ]
}
