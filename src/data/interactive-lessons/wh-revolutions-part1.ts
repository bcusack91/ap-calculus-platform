export const whRevolutionsPart1Data = {
  topicSlug: 'wh-revolutions',
  sections: [
    {
      id: 'whrevolu1-intro',
      type: 'text' as const,
      content: `
# ⚔️ Revolutions & Independence Movements

**Part 1 of 7 — Latin American & Nationalist Revolutions**

---

| Section |
|---------|
| 📖 Causes of Revolutionary Movements |
| Latin American Independence |
| Simón Bolívar & José de San Martín |
| Nationalism in Europe |

> 🔑 **Key Concept:** The AP exam connects Latin American independence movements to both the **Enlightenment** and the **Haitian Revolution**. You must understand how colonial social hierarchies (peninsulares, creoles, mestizos) shaped who led revolts and why.
      `
    },
    {
      id: 'whrevolu1-causes',
      type: 'text' as const,
      content: `
## 📖 Causes of Revolutionary Movements

### Why Did Latin America Revolt?

Multiple factors converged in the early 1800s:

| Factor | Explanation |
|---|---|
| **Enlightenment ideas** | Locke's natural rights and Rousseau's popular sovereignty inspired colonial elites |
| **American & French Revolutions** | Provided successful models of overthrowing imperial rule |
| **Haitian Revolution (1804)** | Proved that even enslaved people could win independence |
| **Napoleon's invasion of Spain (1808)** | Removed the Spanish king, creating a power vacuum in the colonies |
| **Colonial social hierarchy** | Creoles (American-born Spaniards) resented peninsulares (European-born) who held all top positions |

### The Colonial Social Hierarchy

| Group | Description | Political Power |
|---|---|---|
| **Peninsulares** | Born in Spain/Portugal | Held all top government positions |
| **Creoles** | European descent, born in the Americas | Wealthy landowners but excluded from power |
| **Mestizos/Mulattoes** | Mixed European-indigenous or European-African | Limited rights |
| **Indigenous & Enslaved Africans** | Majority of the population | No political power |

> 🔑 **AP Connection:** The **creoles** led most independence movements — they were wealthy and educated enough to organize revolts, but resentful of being excluded from political power by peninsulares.
      `
    },
    {
      id: 'whrevolu1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which social group led most Latin American independence movements in the early 1800s?',
            options: [
              'Peninsulares — European-born Spaniards who held all colonial government positions',
              'Creoles — American-born people of European descent who were wealthy but excluded from political power',
              'Indigenous peoples who sought to restore pre-Columbian empires and political systems',
              'Enslaved Africans following the model of the Haitian Revolution'
            ],
            correctAnswer: 1,
            explanation: 'Creoles led most independence movements because they had the wealth, education, and social connections to organize revolts, but resented being excluded from top government positions (reserved for peninsulares). Simón Bolívar and José de San Martín were both creoles.'
          },
          {
            question: 'How did Napoleon\'s invasion of Spain in 1808 contribute to Latin American independence movements?',
            options: [
              'Napoleon sent French armies to Latin America to enforce colonial control more strictly',
              'It removed the Spanish king from power, creating a legitimacy crisis and power vacuum that colonial leaders exploited',
              'Napoleon freed all enslaved people in Spanish colonies, inspiring loyalty to France',
              'It had no effect — Latin American independence movements began centuries earlier'
            ],
            correctAnswer: 1,
            explanation: 'When Napoleon deposed the Spanish king Ferdinand VII and placed his brother on the throne, colonists questioned whether they owed loyalty to a French-imposed ruler. This legitimacy crisis provided the opening for creole leaders to declare independence while claiming to act in the name of the rightful king.'
          }
        ]
      }
    },
    {
      id: 'whrevolu1-leaders',
      type: 'text' as const,
      content: `
## 📖 Key Independence Leaders

### Simón Bolívar (1783–1830) — "The Liberator"
- Creole from Venezuela, educated in Europe, deeply influenced by Enlightenment
- Led independence of **Venezuela, Colombia, Ecuador, Peru, and Bolivia**
- Dreamed of a united South American republic (Gran Colombia) — ultimately failed due to regional rivalries
- Famous "Jamaica Letter" (1815) analyzed why Latin American unity was difficult

### José de San Martín (1778–1850)
- Argentine general who liberated **Argentina, Chile, and Peru**
- Famous crossing of the Andes Mountains (1817) to liberate Chile
- Met Bolívar in Guayaquil (1822) — ceded leadership and retired

### Mexico: Hidalgo & Morelos
- **Father Miguel Hidalgo** (1810) — priest who launched Mexico's independence with the "Grito de Dolores"; led a peasant/indigenous uprising; executed 1811
- **José María Morelos** — continued Hidalgo's movement; also executed
- **Agustín de Iturbide** (1821) — conservative creole who actually achieved Mexican independence with a coalition (Plan de Iguala)

### Brazil: A Unique Path
- **Peaceful independence** (1822) — when Portugal's king returned to Europe, his son **Pedro I** declared Brazil independent and became emperor
- No major war; preserved the monarchy until 1889

> 🔑 **AP Connection:** Compare Mexico's **bottom-up** revolution (starting with indigenous/peasant uprising under Hidalgo) with the **top-down** approach in South America (creole elites like Bolívar) and Brazil's **peaceful** transition. The AP exam tests why outcomes differed.
      `
    },
    {
      id: 'whrevolu1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How did Brazil\'s path to independence differ from most other Latin American nations?',
            options: [
              'Brazil achieved independence through a prolonged guerrilla war lasting over 20 years',
              'Brazil\'s independence was relatively peaceful — the Portuguese prince declared independence and became emperor without a major war',
              'Brazil was the only Latin American nation to remain a colony until the 20th century',
              'Brazil\'s independence was led by indigenous peoples rather than creole elites'
            ],
            correctAnswer: 1,
            explanation: 'Unlike the violent revolutions elsewhere in Latin America, Brazil\'s independence was largely peaceful. When King João VI returned to Portugal in 1821, his son Pedro stayed in Brazil and declared independence in 1822, becoming Emperor Pedro I. Brazil remained a monarchy until 1889.'
          },
          {
            question: 'What was the main reason Bolívar\'s dream of a united South American republic (Gran Colombia) failed?',
            options: [
              'Spain reconquered the territory immediately after Bolívar\'s death in 1830',
              'Regional rivalries, geographic barriers, and competing interests among local elites led to fragmentation',
              'The United States invaded Gran Colombia to prevent a rival power from emerging',
              'Bolívar voluntarily dissolved the union to create smaller, more democratic nations'
            ],
            correctAnswer: 1,
            explanation: 'Gran Colombia (Venezuela, Colombia, Ecuador) dissolved due to regional rivalries, geographic distances, and competing interests among local creole elites who preferred governing their own territories. The Andes and Amazon created natural divisions, and local caudillos (strongmen) carved out independent power bases.'
          }
        ]
      }
    }
  ]
};
