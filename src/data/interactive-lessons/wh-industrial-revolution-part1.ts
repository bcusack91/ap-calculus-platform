export const whIndustrialRevolutionPart1Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whindust1-intro',
      type: 'text' as const,
      content: `
# 🏭 The Industrial Revolution

**Part 1 of 7 — Origins, Technology & Social Transformation**

---

| Section |
|---------|
| 📖 Why Britain First? |
| Key Inventions & Industries |
| Social Effects of Industrialization |
| Spread Beyond Britain |

> 🔑 **Key Concept:** The AP exam wants you to explain **why** industrialization began in Britain specifically, and how it transformed **social structures, labor patterns, and the global economy**. Don't just list inventions — focus on causes and consequences.
      `
    },
    {
      id: 'whindust1-britain',
      type: 'text' as const,
      content: `
## 📖 Why Did the Industrial Revolution Begin in Britain?

Several unique factors converged in late 18th-century Britain:

| Factor | Explanation |
|---|---|
| **Natural resources** | Abundant coal and iron ore; navigable rivers for transport |
| **Agricultural revolution** | Enclosure movement and crop rotation increased food supply → population growth → surplus labor |
| **Capital** | Profits from colonial trade and the Atlantic slave trade provided investment funds |
| **Stable government** | Constitutional monarchy protected property rights and encouraged innovation |
| **Geographic advantages** | Island nation with extensive coastline for trade; no internal tariff barriers |
| **Culture of innovation** | Royal Society promoted science; patent laws rewarded inventors |

### The Agricultural Revolution (Precondition)
- **Enclosure Acts** — common lands were fenced off by wealthy landowners for commercial farming
- **Impact:** More efficient agriculture BUT displaced small farmers, who migrated to cities seeking factory work
- **New techniques:** Jethro Tull's seed drill, crop rotation (turnips/clover), selective animal breeding

> 🔑 **AP Connection:** The AP exam emphasizes **causation** — the agricultural revolution created the surplus labor AND surplus food needed to sustain an industrial workforce. Enclosure was both productive and disruptive.
      `
    },
    {
      id: 'whindust1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which factor is MOST important in explaining why the Industrial Revolution began in Britain rather than in China or the Ottoman Empire?',
            options: [
              'Britain had a larger population than any other country in the world by 1750',
              'A combination of abundant coal/iron, capital from colonial trade, agricultural surplus, and a government that protected property rights and innovation',
              'Britain was the only country in the world with access to navigable rivers for transportation',
              'British workers were inherently more skilled and educated than workers elsewhere in the world'
            ],
            correctAnswer: 1,
            explanation: 'No single factor explains Britain\'s lead — it was the convergence of natural resources (coal, iron), investment capital (from colonial and slave trade profits), surplus labor (from agricultural enclosure), and institutional support (patent laws, property rights, stable government) that made Britain uniquely positioned for industrialization.'
          },
          {
            question: 'How did the enclosure movement contribute to industrialization in Britain?',
            options: [
              'It provided factory owners with free land to build manufacturing facilities in rural areas',
              'It displaced small farmers from common lands, creating a migrant labor force for urban factories while increasing agricultural output',
              'It prevented urbanization by keeping the entire population tied to agricultural work on enclosed lands',
              'It had no significant connection to industrialization and was purely an agricultural policy'
            ],
            correctAnswer: 1,
            explanation: 'Enclosure consolidated common lands into privately owned, commercially farmed plots. This increased agricultural efficiency (more food to feed growing cities) but displaced small farmers and landless laborers, who migrated to cities where they became the factory labor force that powered industrialization.'
          }
        ]
      }
    },
    {
      id: 'whindust1-tech',
      type: 'text' as const,
      content: `
## 📖 Key Inventions & Industries

### Textile Industry (First to Industrialize)

| Invention | Inventor | Year | Impact |
|---|---|---|---|
| **Spinning Jenny** | James Hargreaves | 1764 | Multi-spindle spinning frame; increased thread output |
| **Water Frame** | Richard Arkwright | 1769 | Water-powered spinning machine; moved production to factories |
| **Power Loom** | Edmund Cartwright | 1785 | Mechanized weaving; completed the factory transition |
| **Cotton Gin** | Eli Whitney | 1793 | Made cotton processing efficient; **increased demand for enslaved labor** in the American South |

### Steam Power
- **James Watt** improved the steam engine (1769) → freed factories from waterpower locations
- Applied to **mining** (pumping water), **manufacturing** (powering machines), and **transport** (steam locomotives, steamships)
- **George Stephenson's Rocket** (1829) — first practical steam locomotive; Liverpool-Manchester Railway (1830)

### Iron & Steel
- **Henry Bessemer** (1856) — Bessemer process for cheap mass-produced steel
- Steel transformed construction (bridges, buildings, railways) and warfare

### Social Effects
- **Urbanization** — Manchester grew from 25,000 (1770) to 300,000+ (1850)
- **Factory system** — workers performed repetitive tasks on fixed schedules for wages (replacing artisan production)
- **Child labor** — children as young as 5 worked 12–16 hour days in mines and factories
- **New social classes** — industrial capitalists (factory owners) and the urban working class (proletariat)

> 🔑 **AP Connection:** The cotton gin is a key example of how technology in one region affected another — it made cotton profitable, which **intensified slavery** in the American South while fueling British textile factories.
      `
    },
    {
      id: 'whindust1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'How did the invention of the cotton gin (1793) paradoxically affect slavery in the American South?',
            options: [
              'It eliminated the need for enslaved labor by fully automating cotton production from planting to shipping',
              'It made cotton processing more efficient, dramatically increasing cotton\'s profitability and therefore increasing demand for enslaved labor to grow more cotton',
              'It had no effect on slavery because cotton was not a major crop in the American South',
              'It directly caused the abolition of slavery by making manual labor economically unnecessary'
            ],
            correctAnswer: 1,
            explanation: 'The cotton gin removed seeds from cotton 50x faster than by hand, making short-staple cotton enormously profitable. This drove massive expansion of cotton plantations across the Deep South and dramatically increased demand for enslaved labor — the enslaved population roughly doubled between 1790 and 1830.'
          },
          {
            question: 'What was the most significant social consequence of factory-based industrialization in 19th-century Britain?',
            options: [
              'The disappearance of the upper class as factory owners replaced the aristocracy entirely',
              'Rapid urbanization, the emergence of a new industrial working class, and harsh labor conditions including widespread child labor',
              'The complete elimination of agriculture as all workers moved to factories within a single generation',
              'Universal access to education and healthcare provided by factory owners to all workers'
            ],
            correctAnswer: 1,
            explanation: 'Industrialization triggered massive urbanization (Manchester grew 12x in 80 years), created a new working class living in overcrowded conditions, and relied heavily on child labor. These conditions eventually sparked reform movements, labor unions, and new political ideologies like socialism and Marxism.'
          }
        ]
      }
    }
  ]
};
