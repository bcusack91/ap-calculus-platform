export const whConsequencesIndustrializationPart1Data = {
  topicSlug: 'wh-consequences-industrialization',
  sections: [
    {
      id: 'whconseq1-intro',
      type: 'text' as const,
      content: `
# 📊 Consequences of Industrialization

**Part 1 of 7 — Social Change, Reform & New Ideologies**

---

| Section |
|---------|
| 📖 Working Conditions & Reform |
| New Political Ideologies |
| Women & Industrial Society |
| Environmental Consequences |

> 🔑 **Key Concept:** The AP exam heavily tests the **social and political responses** to industrialization — including labor movements, new ideologies (socialism, Marxism, liberalism), women's rights movements, and government reform efforts.
      `
    },
    {
      id: 'whconseq1-conditions',
      type: 'text' as const,
      content: `
## 📖 Working Conditions & Reform Movements

### Factory & Mine Conditions
- **12–16 hour workdays**, 6 days a week — no weekends or holidays
- **Child labor** — children as young as 5 worked in mines (pulling coal carts) and factories (operating machines)
- **Dangerous machines** — no safety equipment; workers frequently injured or killed
- **Low wages** — barely enough to survive; entire families had to work
- **Urban slums** — overcrowded housing near factories with poor sanitation; cholera and typhus epidemics

### Reform Responses

| Reform | Details |
|---|---|
| **Factory Acts (Britain)** | 1833: banned factory work for children under 9; limited hours for children 9–13; required 2 hours of schooling |
| **Mines Act (1842)** | Banned women and children under 10 from working underground |
| **Ten Hours Act (1847)** | Limited workday to 10 hours for women and children |
| **Labor unions** | Workers organized collectively to demand better wages, shorter hours, safer conditions |
| **Chartist Movement** | British working-class political movement demanding universal male suffrage, secret ballot |

### Luddites (1811–1816)
- Workers who destroyed factory machines in protest — feared technology was eliminating their skilled artisan jobs
- Not "anti-technology" in general; specifically opposed to machines that replaced their livelihoods
- Suppressed by the British military; participants executed or transported to penal colonies

> 🔑 **AP Connection:** The AP exam tests how **different groups responded differently** to industrialization. Workers organized unions; intellectuals developed new ideologies; governments passed reforms. Be ready to give specific examples of each response.
      `
    },
    {
      id: 'whconseq1-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST describes the Luddite movement in early 19th-century Britain?',
            options: [
              'A philosophical society promoting scientific research and technological advancement for social progress',
              'Workers who destroyed factory machines to protest the loss of skilled artisan jobs to mechanized production',
              'Factory owners who lobbied Parliament for fewer regulations on child labor and working hours',
              'A religious revival movement that rejected all forms of modern technology on moral grounds'
            ],
            correctAnswer: 1,
            explanation: 'Luddites were skilled workers (particularly in textiles) who smashed machines that they believed were destroying their livelihoods. They weren\'t opposed to all technology — they specifically targeted machines that replaced skilled labor with cheaper, unskilled factory work. The British government crushed the movement militarily.'
          },
          {
            question: 'What was the significance of the British Factory Act of 1833?',
            options: [
              'It completely abolished child labor in all industries across the British Empire',
              'It marked the beginning of government regulation of working conditions by banning factory work for children under 9 and limiting hours for older children',
              'It nationalized all factories and placed them under direct government ownership and management',
              'It guaranteed all factory workers a minimum wage equal to the national average income'
            ],
            correctAnswer: 1,
            explanation: 'The 1833 Factory Act was the first effective government intervention in working conditions. While limited (only applying to textile factories, with weak enforcement initially), it established the precedent that the government could regulate private industry to protect workers — opening the door to further reforms.'
          }
        ]
      }
    },
    {
      id: 'whconseq1-ideologies',
      type: 'text' as const,
      content: `
## 📖 New Political Ideologies

Industrialization generated new ways of thinking about society, economics, and government:

### Key Ideologies

| Ideology | Key Ideas | Key Thinkers |
|---|---|---|
| **Liberalism** | Individual rights, free markets, limited government, constitutional rule | Adam Smith, John Stuart Mill |
| **Conservatism** | Traditional institutions (monarchy, church, aristocracy); caution about rapid change | Edmund Burke |
| **Socialism** | Workers should own the means of production; reduce inequality through collective ownership | Robert Owen, Charles Fourier |
| **Marxism** | History is class struggle; capitalism will be overthrown by proletarian revolution; classless communist society | Karl Marx, Friedrich Engels |
| **Anarchism** | Abolish all government; voluntary cooperation | Mikhail Bakunin |

### Karl Marx & Friedrich Engels
- Published *The Communist Manifesto* (1848) — "Workers of the world, unite!"
- Key concepts:
  - **Bourgeoisie** — capitalist class (factory owners) who own the means of production
  - **Proletariat** — working class who sell their labor
  - **Class struggle** — all of history is conflict between those who own and those who work
  - **Inevitable revolution** — capitalism would destroy itself through crises; workers would seize power
  - **Communist society** — no private property, no classes, no state

### Utopian Socialism
- **Robert Owen** — Welsh factory owner who created a model community at New Lanark (Scotland) with shorter hours, education, fair wages
- **Charles Fourier** — proposed cooperative communities called "phalanxes"
- Marx dismissed these as "utopian" because they relied on goodwill rather than structural change

> 🔑 **AP Connection:** The AP exam frequently asks you to **compare ideological responses** to industrialization. Liberalism favored the factory owners; socialism and Marxism favored the workers; conservatism resisted rapid change entirely.
      `
    },
    {
      id: 'whconseq1-quiz2',
      type: 'multiple-choice' as const,
      content: `**Check Your Understanding** 🎯`,
      exercise: {
        questions: [
          {
            question: 'According to Karl Marx, what was the fundamental driving force of historical change?',
            options: [
              'Technological innovation and the gradual accumulation of scientific knowledge across generations',
              'Class struggle — the ongoing conflict between those who own the means of production and those who labor',
              'The decisions of individual political leaders and monarchs who shaped events through personal will',
              'Religious and cultural evolution as societies moved from polytheism to monotheism to secularism'
            ],
            correctAnswer: 1,
            explanation: 'Marx argued in The Communist Manifesto (1848) that "the history of all hitherto existing society is the history of class struggles." He saw every era defined by conflict between an owning class and a working class — feudal lords vs. serfs, then bourgeoisie vs. proletariat — and predicted that capitalism would ultimately be overthrown by proletarian revolution.'
          },
          {
            question: 'How did Robert Owen\'s approach to improving workers\' lives differ from Marx\'s approach?',
            options: [
              'Owen believed violent revolution was necessary, while Marx favored gradual peaceful reform through Parliament',
              'Owen created model factory communities with better conditions as an example, while Marx argued that only structural revolution could change the system',
              'Owen opposed all forms of industrialization, while Marx believed capitalism was a necessary stage of progress',
              'Both Owen and Marx agreed on identical strategies for achieving a classless society'
            ],
            correctAnswer: 1,
            explanation: 'Owen was a "utopian socialist" who tried to prove that humane working conditions could be profitable — his New Lanark factory offered shorter hours, education, and fair wages. Marx dismissed this as naive, arguing that individual model communities couldn\'t change the structural exploitation built into capitalism — only a proletarian revolution could.'
          }
        ]
      }
    }
  ]
};
