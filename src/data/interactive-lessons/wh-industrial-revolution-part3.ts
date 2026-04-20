export const whIndustrialRevolutionPart3Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir3-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 3 of 7 — The Factory System and Working Conditions**

---

> 🔑 **Key Concept:** The factory system reorganized production from artisan craft to mass manufacturing, concentrating workers in large facilities under centralized discipline and time-based labor. Working conditions — long hours, dangerous environments, child labor, low wages — generated both human suffering and political responses (labor unions, reform legislation). AP questions focus on how the factory system changed work, family, and social structure.
      `
    },
    {
      id: 'whir3-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The most fundamental change the factory system made to work was:',
            options: [
              'Converting workers from producers who owned the means of production and controlled their labor process (artisans) to wage laborers who sold their time to factory owners who controlled the pace, schedule, and organization of production — fundamentally changing workers\' relationship to their own labor',
              'Factory work was less dangerous than artisan work',
              'Factory workers earned significantly more than artisan workers',
              'Factory work preserved artisan skill levels while adding efficiency',
            ],
            correctAnswer: 0,
            explanation: 'Marx\'s "alienation of labor" concept captures this AP-essential change: the artisan owned tools, controlled process, and produced a complete product; the factory worker owned nothing, controlled nothing, and produced a fragment of a product as part of a mechanized process controlled by capital. This relationship change — from producer to wage laborer — is the defining feature of industrial capitalism and the foundation of 19th-century labor politics.'
          },
          {
            question: 'Child labor in early industrial Britain was primarily driven by:',
            options: [
              'Economic necessity and factory owners\' profit calculation — working-class families needed children\'s wages to survive on industrial wages; factory owners preferred child workers for lower wages, physical size (useful in narrow mine passages and under machinery), and perceived docility compared to adult workers who might organize',
              'Child labor was a traditional practice in all societies with no industrial dimension',
              'Factory owners were required by law to employ children',
              'Child workers were paid equally to adult workers',
            ],
            correctAnswer: 0,
            explanation: 'Child labor had both supply-side (families needed income) and demand-side (owners preferred cheap, small, docile workers) drivers. The AP sophistication is recognizing both: reformers who focused only on "unscrupulous factory owners" missed that working-class families often depended on children\'s wages to survive; factory acts that banned child labor without providing alternative income could actually harm the families they meant to protect. This complexity explains why labor reform was slow and contested.'
          }
        ]
      }
    },
    {
      id: 'whir3-content',
      type: 'text' as const,
      content: `
## 📖 The Factory System and Working Conditions

> **How the Factory System Changed Work**

Pre-industrial artisan work vs. factory work:

| Aspect | Pre-industrial Artisan | Factory Worker |
|--------|----------------------|----------------|
| **Location** | Home or small workshop | Large factory building |
| **Schedule** | Self-determined | Fixed hours (12-16 hr days) |
| **Skill** | Complete product knowledge | Repetitive single task |
| **Ownership** | Owned tools and product | Sold labor only |
| **Supervision** | None or guild master | Factory foreman/clock |
| **Gender/age** | Adult male artisans | Men, women, children |

> **Working Conditions**

Early factory conditions were typically brutal:

- **Hours:** 12-16 hours per day, 6 days per week; "clock time" replaced "task time"
- **Dangerous environments:** Unguarded machinery caused frequent injury; cotton dust caused respiratory disease; coal dust caused black lung
- **Child labor:** Children as young as 5-8 worked in textile mills and coal mines; small size was useful in narrow spaces
- **Wages:** Low but more regular than agricultural wages; women and children paid significantly less than men
- **Discipline:** Fines, beatings, dismissal; factory discipline replaced seasonal agricultural rhythms

> **Social Consequences**

The factory system restructured families and communities:

- **Working-class neighborhoods (slums):** Workers crowded into urban housing near factories; no sanitation; disease (cholera, typhus) epidemics
- **Family structure change:** Women and children working in factories alongside men; traditional family economic roles disrupted
- **Separation of work and home:** Factory work removed production from domestic space; created distinct "work" and "home" spheres
- **Middle class expansion:** Factory owners, managers, accountants, lawyers created new professional middle class

> **Reform Responses**

Political responses to industrial conditions:

- **Luddite movement (1811-1816):** Skilled textile workers destroyed machinery they blamed for displacing artisan work
- **Factory Acts (Britain, 1833-1850s):** Limited child labor hours; required factory inspections; minimum age requirements
- **Trade unions:** Workers organized collectively to negotiate wages and hours; frequently illegal early in industrial period
- **Owen, Chartism:** Social reformers (Robert Owen) and working-class political movements (Chartism) demanded labor rights
      `
    },
    {
      id: 'whir3-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The Luddite movement (1811-1816) demonstrated:',
            options: [
              'Working-class resistance to deskilling — skilled textile artisans (framework knitters, hand-loom weavers) destroyed factory machinery not because they opposed all technology but because specific machines replaced skilled craft labor with unskilled factory labor, destroying the artisan way of life that was both economically and culturally central to their identity',
              'Luddites were opposed to all technology and progress generally',
              'Luddites were middle-class reformers opposed to factory conditions',
              'The Luddite movement successfully stopped textile mechanization',
            ],
            correctAnswer: 0,
            explanation: 'The AP correction for "Luddites = anti-technology": the Luddites were skilled workers defending skilled work, not opponents of progress generally. They targeted specific machines (the stocking frame, the power loom) that destroyed specific skills (framework knitting, hand weaving), not technology as a whole. Their argument was that technology was being deployed to transfer income from skilled workers to factory owners — a labor-market analysis, not a reactionary anti-progress position. This nuance is important for AP analysis of industrial resistance.'
          },
          {
            question: 'The Factory Acts (Britain, 1830s-1850s) demonstrated:',
            options: [
              'That industrial capitalism generated both exploitation and democratic reform responses — the same political system that enabled factory owners to employ children 12 hours a day could be pressured through parliamentary reform, investigative commissions, and public opinion to regulate those practices, demonstrating that industrial society contained reform mechanisms alongside exploitation',
              'Factory Acts completely solved all labor exploitation problems immediately',
              'Factory Acts were never passed due to factory owners\' complete political control',
              'Labor reform was impossible under capitalist systems',
            ],
            correctAnswer: 0,
            explanation: 'Factory Acts demonstrate AP\'s theme of reform within capitalist industrial systems: parliamentary investigative commissions produced horrifying evidence of child labor conditions; Evangelical reformers (Shaftesbury) organized public pressure; eventually Parliament responded with regulation. The reform was incomplete and contested, but demonstrated that representative political systems could be used to regulate industrial capitalism — a different trajectory from revolutionary challenge to the system itself.'
          },
          {
            question: 'Urban industrial slum conditions (overcrowding, disease, pollution) demonstrate which AP principle?',
            options: [
              'Industrial development\'s benefits and costs were unequally distributed — factory owners and middle class gained from industrial production while working-class communities bore the concentrated costs (disease, pollution, dangerous work) of industrial production in their neighborhoods and bodies, demonstrating that market systems distribute costs differently from benefits',
              'Urban conditions improved uniformly for all classes during industrialization',
              'Slum conditions affected all social classes equally',
              'Urban conditions during industrialization were no worse than pre-industrial rural conditions',
            ],
            correctAnswer: 0,
            explanation: 'The unequal distribution of industrial costs and benefits is AP\'s framework for understanding 19th-century labor politics: factory owners lived in suburban villas away from factory smoke; working-class communities lived next to factories, breathed the pollution, and endured the epidemics (1832 cholera epidemic killed disproportionately in working-class neighborhoods). This geographic and social unequal distribution of industrial costs explains why labor politics became so contentious — the people bearing the costs (workers) and the people receiving the profits (owners) were different people.'
          }
        ]
      }
    },
    {
      id: 'whir3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The early industrial working-class movement that destroyed textile machinery to resist deskilling was ___',
            options: [
            'The Luddite movement',
            'The Chartist movement',
            'The Suffragette movement',
            'The Enclosure movement',
            ]
          },
          {
            label: 'The parliamentary legislation in the 1830s-1850s that regulated child labor in British factories was ___',
            options: [
            'The Factory Acts',
            'The Corn Laws',
            'The Navigation Acts',
            'The Reform Bills',
            ]
          },
          {
            label: 'The social reformer who founded the utopian community of New Lanark and advocated factory reform was ___',
            options: [
            'Robert Owen',
            'Thomas Malthus',
            'Adam Smith',
            'Jeremy Bentham',
            ]
          },
        ],
        correctAnswers: [
          'The Luddite movement',
          'The Factory Acts',
          'Robert Owen',
        ],
        hint1: 'Skilled textile workers 1811-16 — machinery destruction — deskilling resistance',
        hint2: 'Parliamentary legislation — child labor restrictions — factory inspections — 1830s-1850s',
        hint3: 'New Lanark — cooperative community — early socialist factory reform advocate',
        explanation: 'The Luddite movement was skilled workers\' resistance to deskilling by textile machinery; the Factory Acts were parliamentary responses to documented industrial abuse; and Robert Owen demonstrated through New Lanark that factories could be operated with better conditions and still be profitable — all three represent different responses to the same problem of industrial working conditions.'
      }
    },
    {
      id: 'whir3-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The emergence of a professional middle class (factory managers, accountants, lawyers, doctors) during industrialization demonstrates:',
            options: [
              'Industrial capitalism created new social positions that required education and professional skills, expanding the social structure beyond aristocracy/peasantry toward a more complex hierarchy that included a professional class positioned between factory owners and factory workers — this new middle class had different interests from both working class and aristocracy and became the political force supporting liberal reform',
              'The middle class was unchanged by industrialization',
              'Industrial capitalism produced only two classes: factory owners and factory workers',
              'The professional middle class supported working-class labor movements',
            ],
            correctAnswer: 0,
            explanation: 'The expanding middle class is AP\'s mechanism connecting industrialization to political change: the professional-managerial middle class (factory managers, bankers, lawyers, doctors, engineers) created by industrial capitalism became the social constituency for parliamentary reform (1832 Reform Act expanded their voting rights), liberal economics (free trade), and moderate labor regulation. Their political interests (legal protections, contract enforcement, regulated markets) differed from both working-class interests (higher wages, union rights) and aristocratic interests (land, privilege) — creating the three-cornered political competition of 19th-century Britain.'
          },
          {
            question: 'For AP, the factory system\'s most significant long-term social consequence was:',
            options: [
              'The creation of a permanent industrial working class (proletariat) with shared economic conditions, shared urban neighborhoods, and shared vulnerability to industrial fluctuations — creating the social basis for trade unionism, labor parties, and socialist movements that would reshape 19th-20th century politics by organizing people who shared factory labor conditions',
              'The factory system destroyed all social classes and created equality',
              'The working class was too divided to organize any political movements',
              'Industrial capitalism eliminated poverty for the working class within one generation',
            ],
            correctAnswer: 0,
            explanation: 'The industrial working class as a political entity is the long-term social consequence: before factories, workers were dispersed (domestic production, agricultural labor, artisan workshops); factories concentrated them in urban neighborhoods with shared conditions. This concentration created the social basis for collective organization: workers who lived near each other, worked together, and faced the same conditions could organize collectively in ways that dispersed rural workers could not. This is the foundation of the labor movement and, by extension, the welfare state.'
          }
        ]
      }
    }
  ]
}
