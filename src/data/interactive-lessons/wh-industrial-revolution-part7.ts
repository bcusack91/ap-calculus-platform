export const whIndustrialRevolutionPart7Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir7-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 7 of 7 — AP Review and Exam Mastery**

---

> 🔑 **Key Concept:** Industrial Revolution content appears across all AP exam formats — MCQ, SAQ, LEQ, and DBQ. Key themes include causes of British first-mover advantage, factory system social impacts, spread to other nations, and global economic consequences. Mastering both specific evidence and comparative frameworks is essential.
      `
    },
    {
      id: 'whir7-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP SAQ asks: "Briefly explain ONE cause of British industrialization." Which response earns full credit?',
            options: [
              'The enclosure movement (1750-1850) was a critical cause of British industrialization because it displaced rural agricultural workers by consolidating common lands into private farms, creating an urban industrial labor force — without this social mechanism producing workers willing to accept factory wages, the machinery of industrialization would have had no operators',
              'Naming the cause without explaining its specific mechanism',
              'Describing Britain\'s geography without connecting it to industrialization causation',
              'Listing multiple causes without developing any single one with specific evidence and reasoning',
            ],
            correctAnswer: 0,
            explanation: 'Full SAQ credit: specific cause (enclosure movement) + specific evidence (consolidated common lands, 1750-1850) + mechanism (displaced rural workers → urban labor force) + connection to industrialization (machinery needed operators). AP SAQs require claim + evidence + reasoning in one developed point, not a list of possible causes.'
          },
          {
            question: 'For an AP LEQ on British industrialization\'s social consequences, which thesis demonstrates the highest analytical sophistication?',
            options: [
              'Industrialization restructured British society by creating a new class configuration — industrial bourgeoisie and urban proletariat — whose structural conflict over wages and working conditions generated the reform movements (Factory Acts, Chartism, trade unionism) that transformed British political institutions, demonstrating that economic transformation drives political transformation through the mechanism of class formation and conflict',
              'Industrialization had both positive and negative social consequences',
              'The factory system changed working conditions significantly',
              'Industrialization created a middle class that was important for political reform',
            ],
            correctAnswer: 0,
            explanation: 'This thesis earns full AP credit: identifies specific social change (class configuration), uses specific evidence (bourgeoisie, proletariat), explains the mechanism (structural conflict → reform movements), uses specific evidence for reform (Factory Acts, Chartism, trade unions), and provides the AP-level analytical claim (economic transformation → political transformation through class conflict). The sophistication is the causal chain: economy → class structure → political conflict → institutional reform.'
          }
        ]
      }
    },
    {
      id: 'whir7-content',
      type: 'text' as const,
      content: `
## 📖 AP Review: The Industrial Revolution

> **Must-Know Vocabulary**

- **Enclosure movement** — Agricultural land consolidation that displaced rural workers; created industrial labor force
- **Steam engine (Watt)** — Power source freeing factories from water dependence; enabled urban industrialization
- **Factory system** — Concentrated mass production using wage labor and machinery; replaced domestic/artisan production
- **Proletariat** — Industrial working class; wage earners who own no means of production
- **Bourgeoisie** — Property-owning middle and capitalist class; factory owners, merchants, professionals
- **Luddites** — Skilled textile workers who destroyed machinery resisting deskilling (1811-1816)
- **Chartism** — British working-class political movement demanding democratic reform (1838-1848)
- **Zollverein** — German customs union (1834); created integrated market enabling industrialization
- **Meiji Restoration** — Japanese political transformation (1868) enabling deliberate state-directed industrialization
- **Zaibatsu** — Japanese industrial-financial conglomerates; built on Meiji state model factories
- **Core-periphery** — Global economic structure with industrial producers and raw material suppliers

> **Common AP Prompt Patterns**

- **Causation:** Why did Britain industrialize before other nations?
- **CCOT:** How did industrialization change social structures in Britain c. 1750-1900?
- **Comparison:** Compare German and British industrialization
- **Causation:** How did industrialization contribute to global economic inequality?
- **Evaluation:** Evaluate the extent to which industrialization improved living standards

> **AP Analysis Quick Reference**

| Topic | AP Evidence | AP Significance |
|-------|------------|----------------|
| Why Britain first | Enclosure + steam + coal + patents + empire | Multi-causal analysis |
| Factory conditions | Child labor, 14-hr days, industrial accidents | Reform movement causation |
| Global spread | Germany (state-led); Japan (Meiji); USA (railroads) | Multiple paths to industrialization |
| Environmental cost | Thames pollution; coal smog; carbon economy | Industrial cost distribution |
| Labor response | Luddites, unions, Chartism, Marxism | Working-class political development |
      `
    },
    {
      id: 'whir7-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'A DBQ document from a British factory owner (1835) argues that factory conditions are good for workers. What is the most sophisticated sourcing?',
            options: [
              'A factory owner writing in 1835 had direct knowledge of factory operations and specific commercial incentives: claiming good conditions reduced political pressure for regulatory legislation (Factory Acts were being debated) and labor unrest; his perspective represents capital\'s interests in the class conflict over factory conditions — the document reveals both his operational knowledge and his defensive political purposes',
              'Factory owners are completely objective observers with no interests in the debate',
              'The document is worthless as evidence because factory owners are always biased',
              'Sourcing analysis is unnecessary for 19th-century industrial documents',
            ],
            correctAnswer: 0,
            explanation: 'Sophisticated sourcing addresses specific historical context: 1835 is precisely when Factory Act reform was being debated in Parliament; a factory owner writing then had specific political motivation to argue good conditions. The sourcing doesn\'t dismiss the document (factory owners do know factories) but explains why it argues what it argues: defending against reform legislation. Point of view + historical situation + purpose = full AP sourcing credit.'
          },
          {
            question: 'Comparing Luddism (skill-based resistance to industrialization) to Chartism (democratic political demands) demonstrates:',
            options: [
              'Working-class responses to industrialization evolved from direct economic action (destroying machinery that threatened skilled work) toward democratic political demands (universal suffrage to achieve economic justice through legislation) — demonstrating that workers developed political sophistication over time as direct economic action proved insufficient',
              'Luddism and Chartism had identical goals and methods',
              'Chartism preceded Luddism and was the more radical movement',
              'Working-class movements had no evolution — responses remained constant throughout industrialization',
            ],
            correctAnswer: 0,
            explanation: 'The Luddism-to-Chartism evolution demonstrates AP\'s theme of working-class political development: direct action (destroying machines) was the initial response when workers had no political channels; as it proved ineffective (government used military to suppress Luddism), working-class organizing shifted toward political demands (Chartism) that could achieve legislative change. This evolution from economic action to political action is the story of how the working class became a political actor rather than simply an economic one.'
          },
          {
            question: 'The comparison between Japanese Meiji industrialization and European industrialization reveals:',
            options: [
              'Both used industrial technology for national power, but Europe industrialized within the existing colonial system it was creating; Japan industrialized explicitly to avoid being colonized, demonstrating that the same industrial technology and methods could be adopted for opposite geopolitical purposes — expanding colonial power or resisting colonial domination',
              'Japanese and European industrialization had identical purposes and outcomes',
              'Japan failed to industrialize effectively and remained a colonial subject',
              'European industrial nations deliberately helped Japan industrialize',
            ],
            correctAnswer: 0,
            explanation: 'The geopolitical dimension of industrialization is AP\'s most sophisticated comparative point: European industrial states used industrial military advantage to colonize others; Japan used industrial development to prevent being colonized. Same industrial methods, opposite geopolitical purposes. Japan\'s success (defeating Russia in 1905) demonstrated that industrialization could neutralize the power differential that made European colonization of non-industrial societies possible — a lesson noted across Asia and Africa.'
          }
        ]
      }
    },
    {
      id: 'whir7-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The British working-class political movement (1838-1848) demanding universal male suffrage was ___',
            options: [
            'Chartism',
            'Luddism',
            'Trade unionism',
            'Fabianism',
            ]
          },
          {
            label: 'Japan\'s 1868 political transformation that enabled state-directed industrialization was ___',
            options: [
            'The Meiji Restoration',
            'The Tokugawa Shogunate',
            'The Samurai Revolution',
            'The Boxer Uprising',
            ]
          },
          {
            label: 'The global economic structure dividing industrial producers from raw material suppliers was ___',
            options: [
            'The core-periphery system',
            'The gold standard',
            'Free trade imperialism',
            'The Zollverein',
            ]
          },
        ],
        correctAnswers: [
          'Chartism',
          'The Meiji Restoration',
          'The core-periphery system',
        ],
        hint1: 'British 1838-1848 — six demands — universal suffrage — working-class political movement',
        hint2: 'Japan 1868 — emperor restored — feudalism ended — deliberate Westernization to avoid colonialism',
        hint3: 'Industrial inequality — core accumulates — periphery supplies raw materials — structural dependency',
        explanation: 'Chartism, the Meiji Restoration, and the core-periphery system represent three AP-essential aspects of industrialization: working-class political response, deliberate non-European industrialization for self-defense, and the global economic inequality industrialization created — mastering all three demonstrates comprehensive understanding of industrialization\'s global significance.'
      }
    },
    {
      id: 'whir7-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'An AP CCOT on industrial-era global economic change should identify which as the most significant development?',
            options: [
              'The most significant change was the creation of a structural global economic inequality between industrialized "core" nations (accumulating capital, technology, and economic complexity) and non-industrialized "periphery" regions (reorganized as raw material suppliers) — a division reinforced by colonial coercion that created dependencies persisting into the contemporary global economy',
              'Industrialization eliminated global economic inequality by spreading prosperity universally',
              'The most significant change was the introduction of new commodities with no structural inequality dimension',
              'Industrial-era economic organization was temporary and reversed itself within a generation',
            ],
            correctAnswer: 0,
            explanation: 'CCOT requires identifying the most historically significant change: not just "factories were built" but the structural reorganization of the global economy into industrial and non-industrial zones with different accumulation trajectories. The continuity is that this structure, once created by industrialization and reinforced by colonialism, did not disappear when colonialism formally ended — contemporary "developing world" economic challenges are the continuity from industrial-era structural inequality. AP rewards analysis that identifies structural rather than surface-level changes.'
          },
          {
            question: 'For AP, the most important analytical skill in studying the Industrial Revolution is:',
            options: [
              'Distinguishing between the unequal distribution of industrialization\'s benefits (higher productivity, eventually rising living standards) and costs (working conditions, pollution, global inequality) — AP analysis requires recognizing that the same industrial transformation produced very different experiences for factory owners vs. factory workers, for British manufacturers vs. Indian weavers, for the 19th century vs. future generations',
              'Memorizing dates and inventions is the most important skill for AP Industrial Revolution questions',
              'Understanding industrialization requires only European history with no global context',
              'AP Industrial Revolution questions can be answered without distinguishing different groups\' experiences',
            ],
            correctAnswer: 0,
            explanation: 'Distributional analysis is AP\'s most valued skill: the same industrial transformation that increased British national wealth simultaneously destroyed Indian textile manufacturing, created child labor, produced cholera epidemics in working-class neighborhoods, and released the carbon now driving climate change. AP rewards analysis that asks "who benefited?" and "who paid the cost?" rather than just "did production increase?" This distributional perspective is the foundation of both contemporary economic analysis and AP historical analysis.'
          }
        ]
      }
    }
  ]
}
