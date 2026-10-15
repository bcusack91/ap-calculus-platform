export const whRevolutionsPart2Data = {
  topicSlug: 'wh-revolutions',
  sections: [
    {
      id: 'whrv2-intro',
      type: 'text' as const,
      content: `
# ⚔️ Revolutions and Independence Movements

**Part 2 of 7 — Simón Bolívar and the Liberation of South America**

---

> 🔑 **Key Concept:** Simón Bolívar (1783-1830) was the most prominent leader of South American independence, liberating Venezuela, Colombia, Ecuador, Peru, and Bolivia from Spanish rule. AP questions focus on his Enlightenment influences, his complex racial politics, his vision of a unified Latin America, and why that vision failed.
      `
    },
    {
      id: 'whrv2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Bolívar\'s "Jamaica Letter" (1815) argument for strong executive power demonstrates:',
            options: [
              'His view that societies shaped by colonial hierarchy needed strong central leadership, not full liberal democracy',
              'His belief that direct popular democracy was the only workable government for the new Latin American states',
              'His military plan for invading Venezuela, with no discussion of how the new states should be governed',
              'His argument that a strong European-style hereditary monarchy was the only stable option for Latin America',
            ],
            correctAnswer: 0,
            explanation: 'The Jamaica Letter is AP\'s window into Bolívar\'s political thought: he genuinely believed in republican principles but doubted that Latin American societies (racially diverse, educationally limited under colonial rule, without democratic tradition) could sustain pure liberal democracy. He feared popular democracy would produce racial conflict (Haiti was on his mind) and regional fragmentation. This elitist republicanism — liberty for educated elites; ordered government for the masses — is the conservative underpinning of creole liberation.'
          },
          {
            question: 'The failure of Gran Colombia (1819-1830) to maintain unity demonstrates:',
            options: [
              'Regional economies and rival creole elites outweighed the pan-American identity Bolívar tried to build',
              'Bolívar\'s weakness as a field commander, which cost the union its decisive battles against Spanish armies',
              'A Spanish reconquest of Venezuela and Colombia that destroyed the union\'s government in 1830',
              'A population too small to staff a national government across such a large territory',
            ],
            correctAnswer: 0,
            explanation: 'Gran Colombia\'s dissolution demonstrates AP\'s theme about nationalism vs. regionalism: Bolívar\'s vision of pan-South American unity was an intellectual concept without a corresponding social reality — there was no "Gran Colombian" national identity to hold the union together against centrifugal regional interests. Venezuelan creoles, Colombian creoles, and Ecuadorian creoles shared Spanish colonial heritage but had distinct regional economies and political cultures. The dissolution foreshadowed the fragmentation of Latin American independence movements generally.'
          }
        ]
      }
    },
    {
      id: 'whrv2-content',
      type: 'text' as const,
      content: `
## 📖 Simón Bolívar: El Libertador

> **Background and Influences**

Bolívar was born into Venezuelan creole elite; educated by Simón Rodríguez in Enlightenment philosophy:
- Read Locke, Rousseau, Montesquieu; deeply influenced by natural rights and social contract
- Visited Napoleon's Europe; initially admired Napoleon\'s model; later turned against monarchy
- Took an oath in Rome (1805) to liberate Venezuela from Spain
- Influenced by Haitian Revolution but also feared its radical racial implications

> **Military Campaigns**

| Campaign | Region | Years | Outcome |
|---------|--------|-------|---------|
| **Venezuela** | Northern South America | 1810-1821 | Venezuelan independence |
| **New Granada** | Modern Colombia | 1819 | Colombian independence |
| **Gran Colombia** | Venezuela + Colombia + Ecuador | 1819-1830 | Created then dissolved |
| **Peru** | Western coast | 1821-1824 | San Martín took Lima and declared independence (1821); Bolívar and Sucre completed liberation at Junín and Ayacucho (1824) |
| **Bolivia** | Named after Bolívar | 1825 | Bolivian independence |

> **Bolívar's Political Vision**

Bolívar had a complex political vision that evolved:

- **Jamaica Letter (1815):** Argued Latin America needed strong executive power, not pure democracy; feared social chaos without order
- **Angostura Address (1819):** Called for constitutional republic with strong presidency; hereditary Senate
- **Gran Colombia:** Attempted political union of northern South America; failed 1830 due to regional rivalries
- **Failed unity:** Died in 1830 saying he had "plowed the sea" — liberation achieved; stable unified governance failed

> **AP Comparison Anchor**

- **Bolívar vs. Washington:** Both led military liberation; Washington stepped down; Bolívar sought strong executive power fearing democracy would produce chaos — different models of revolutionary leadership
- **Bolívar's racial politics:** Needed indigenous and Afro-Latin support for armies; promised freedom but creole elite interests ultimately dominated; contradictions between liberation rhetoric and social hierarchy maintenance
      `
    },
    {
      id: 'whrv2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Comparing Bolívar to George Washington reveals which key difference?',
            options: [
              'Washington gave up power voluntarily, while Bolívar sought stronger executive authority',
              'Bolívar retired voluntarily after a single term, while Washington sought to hold power for life',
              'Both men believed a strong, lifelong executive was needed to keep their new republics from collapsing',
              'Washington and Bolívar handled post-war government identically, each stepping down after victory',
            ],
            correctAnswer: 0,
            explanation: 'The Washington-Bolívar comparison is AP\'s most productive comparison in 19th-century revolutionary leadership: Washington\'s voluntary surrender of power (twice — after the Revolution and after two terms as president) established the precedent of civilian supremacy that shaped American political culture. Bolívar\'s seeking of concentrated executive power (and being compared to Napoleon as a result) reflected both his assessment of Latin American conditions and established a different precedent — the caudillo (strong military leader) tradition in Latin American politics.'
          },
          {
            question: 'Bolívar\'s famous deathbed declaration that he had "plowed the sea" expressed:',
            options: [
              'Disillusionment that independence had not produced the stable, united republics he had hoped to build',
              'Satisfaction that his campaigns had fully achieved the unity and democracy he had set out to build',
              'Pride in the naval campaigns along the Caribbean coast that he saw as central to his whole strategy',
              'Regret over the land reforms he had imposed, which had failed to raise crop yields across Gran Colombia',
            ],
            correctAnswer: 0,
            explanation: '"Plowed the sea" is one of history\'s most eloquent political epitaphs: the metaphor captures the futility of Bolívar\'s effort to plant stable governance in the fluid, unstable conditions of newly independent Latin America. Independence had been achieved, but the social, educational, and institutional conditions for stable democratic republicanism had not been created. Bolívar recognized at his death that liberation from Spain was only the first step — and that the next steps (building stable democratic institutions, addressing racial and social inequality) remained unfinished.'
          },
          {
            question: 'Bolívar\'s complex racial politics (needing Afro-Latin and indigenous support while maintaining creole social hierarchy) demonstrate:',
            options: [
              'Creole leaders needed Black and Indigenous soldiers to win but did not plan to share power with them afterward',
              'Bolívar granted full political equality to Indigenous and Afro-Latin people from the start of his campaigns',
              'Race played no part in Bolívar\'s strategy, since his armies recruited only by region and loyalty',
              'Bolívar\'s armies drew exclusively on creole volunteers, so non-elite groups stayed out of the war',
            ],
            correctAnswer: 0,
            explanation: 'Military necessity vs. social ideology is AP\'s framework for creole racial politics: Bolívar\'s armies in Venezuela and Colombia included significant numbers of llaneros (mixed-race cowboys), enslaved people who were promised freedom for military service, and indigenous soldiers — without them, the military campaigns would have failed. But Bolívar\'s political vision was of a creole-led republic where these military allies would remain in subordinate social positions. This tension between military inclusion and political exclusion defines the contradictions of Latin American liberation movements.'
          }
        ]
      }
    },
    {
      id: 'whrv2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'Bolívar\'s 1815 political letter arguing for strong executive power in Latin America was ___',
            options: [
            'The Jamaica Letter',
            'The Angostura Address',
            'The Declaration of Independence',
            'The Liberator\'s Manifesto',
            ]
          },
          {
            label: 'The short-lived union of Venezuela, Colombia, and Ecuador created by Bolívar (1819-1830) was ___',
            options: [
            'Gran Colombia',
            'United States of Latin America',
            'Federation of the Andes',
            'Bolivarian Republic',
            ]
          },
          {
            label: 'The meeting where San Martín voluntarily stepped aside for Bolívar to complete Peru\'s liberation was ___',
            options: [
            'The Guayaquil meeting',
            'The Lima conference',
            'The Caracas congress',
            'The Buenos Aires summit',
            ]
          }
        ],
        correctAnswers: [
          'The Jamaica Letter',
          'Gran Colombia',
          'The Guayaquil meeting',
        ],
        hint1: '1815 — Jamaica — Bolívar in exile — argued for strong executive — feared democratic chaos',
        hint2: 'Northern South America — Venezuela Colombia Ecuador — 1819-1830 — dissolved due to regionalism',
        hint3: '1822 — Ecuador — San Martín stepped aside — Bolívar completed Peru liberation',
        explanation: 'The Jamaica Letter reveals Bolívar\'s conservative republicanism; Gran Colombia demonstrates both his unification vision and its failure; and the Guayaquil meeting demonstrates the contrast between Bolívar\'s and San Martín\'s leadership models — together they reveal the full complexity of South American liberation leadership.'
      }
    },
    {
      id: 'whrv2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'José de San Martín\'s voluntary retreat in favor of Bolívar at Guayaquil (1822) demonstrates:',
            options: [
              'He put the liberation cause ahead of personal ambition, stepping aside so Bolívar could finish freeing Peru',
              'He had been defeated in battle by Bolívar\'s army and was forced to surrender his command in Peru',
              'He was stripped of his command by royalist Spanish authorities after a failed siege of Lima in 1821',
              'He and Bolívar agreed at the meeting to govern the liberated South American states jointly as co-presidents',
            ],
            correctAnswer: 0,
            explanation: 'The Guayaquil meeting is AP\'s evidence for San Martín\'s different leadership model: where Bolívar sought personal power and unified command, San Martín was willing to subordinate himself to the larger cause. His voluntary withdrawal to Europe (eventually dying in France in 1850) is the historical fact that demonstrates this. AP uses this comparison to show that revolutionary leaders make different personal choices with different consequences — San Martín\'s selfless withdrawal is both admirable and demonstrates that creole liberation movements produced leaders with different concepts of republican leadership.'
          },
          {
            question: 'For AP, Bolívar\'s legacy is best evaluated as:',
            options: [
              'Militarily liberating but politically and socially limited, as stable democracy and equality never followed',
              'A complete transformation of South American society, politics, and economics, achieved within a single generation',
              'Historically minor, since his repeated military defeats left most of South America under Spanish rule until 1850',
              'Best measured by the social revolution he carried out after victory, which ended creole dominance in the new states',
            ],
            correctAnswer: 0,
            explanation: 'Multi-level evaluation is AP\'s analytical standard: Bolívar succeeded militarily (five nations liberated), partially succeeded politically (republican governments established, though unstable), and largely failed socially (creole hierarchy maintained, democratic institutions fragile). The AP evaluation criterion is whether independence achieved what it promised — and the answer is mixed. Military liberation from Spain was achieved; social equality and stable democracy were not. This mixed evaluation is more accurate than either hagiography (Bolívar as complete liberator) or condemnation (Bolívar as failed dictator).'
          }
        ]
      }
    }
  ]
}
