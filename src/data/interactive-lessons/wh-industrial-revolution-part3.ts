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
              'Artisans who owned tools and set their own pace became wage laborers working on the owner\'s schedule',
              'Workers kept control of their tools but moved them into shared buildings rented from merchants',
              'Factory jobs paid far more than craft work, so most artisans happily abandoned their workshops',
              'Skilled artisans became factory supervisors, preserving their craft while directing unskilled helpers',
            ],
            correctAnswer: 0,
            explanation: 'Marx\'s "alienation of labor" concept captures this AP-essential change: the artisan owned tools, controlled process, and produced a complete product; the factory worker owned nothing, controlled nothing, and produced a fragment of a product as part of a mechanized process controlled by capital. This relationship change — from producer to wage laborer — is the defining feature of industrial capitalism and the foundation of 19th-century labor politics.'
          },
          {
            question: 'Child labor in early industrial Britain was primarily driven by:',
            options: [
              'Families needing children\'s wages to survive, and owners who valued children as cheap, small, and compliant workers',
              'A labor shortage after the Napoleonic Wars, when owners had no adult workers left to hire at any wage',
              'Traditional farm customs carried into mills unchanged, with children paid the same wages as adults',
              'Factory owners\' preference for children\'s technical skills, education, and experience over adult labor',
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
              'Skilled textile workers smashing machines that replaced their craft, not a rejection of technology itself',
              'Middle-class reformers breaking machines to protest the hours and conditions imposed on child workers',
              'Factory owners destroying rivals\' machines to slow down competitors during the postwar trade slump of 1815',
              'Workers opposing all mechanization, a campaign that halted textile machinery until the 1830s',
            ],
            correctAnswer: 0,
            explanation: 'The AP correction for "Luddites = anti-technology": the Luddites were skilled workers defending skilled work, not opponents of progress generally. They targeted specific machines (the stocking frame, the power loom) that destroyed specific skills (framework knitting, hand weaving), not technology as a whole. Their argument was that technology was being deployed to transfer income from skilled workers to factory owners — a labor-market analysis, not a reactionary anti-progress position. This nuance is important for AP analysis of industrial resistance.'
          },
          {
            question: 'The Factory Acts (Britain, 1830s-1850s) demonstrated:',
            options: [
              'That public pressure and Parliamentary inquiries could push the state to regulate factory abuses',
              'That factory owners controlled Parliament so completely that no limits on child labor passed before 1900',
              'That one sweeping law in 1833 ended child labor and long working hours in every British mill within a decade',
              'That only a working-class revolution could change factory conditions, since Parliament refused every reform',
            ],
            correctAnswer: 0,
            explanation: 'Factory Acts demonstrate AP\'s theme of reform within capitalist industrial systems: parliamentary investigative commissions produced horrifying evidence of child labor conditions; Evangelical reformers (Shaftesbury) organized public pressure; eventually Parliament responded with regulation. The reform was incomplete and contested, but demonstrated that representative political systems could be used to regulate industrial capitalism — a different trajectory from revolutionary challenge to the system itself.'
          },
          {
            question: 'Urban industrial slum conditions (overcrowding, disease, pollution) demonstrate which AP principle?',
            options: [
              'Industry\'s gains went to owners and the middle class while workers\' districts bore its disease and pollution',
              'Industrial growth raised living standards evenly, as sanitation improved at the same pace across all classes',
              'Disease and pollution struck rich and poor equally, since wealthy families lived beside the factories too',
              'Urban slums were no worse than village life, because rural cottages had the same crowding and disease',
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
              'Industry created educated professional jobs, forming a class between owners and workers that backed liberal reform',
              'The middle class stayed the same size, since professionals had existed in similar numbers before factories',
              'Industry produced only two classes, owners and workers, leaving no room for a professional middle stratum',
              'Professionals sided with factory workers, leading the trade unions and Chartist marches of the 1840s',
            ],
            correctAnswer: 0,
            explanation: 'The expanding middle class is AP\'s mechanism connecting industrialization to political change: the professional-managerial middle class (factory managers, bankers, lawyers, doctors, engineers) created by industrial capitalism became the social constituency for parliamentary reform (1832 Reform Act expanded their voting rights), liberal economics (free trade), and moderate labor regulation. Their political interests (legal protections, contract enforcement, regulated markets) differed from both working-class interests (higher wages, union rights) and aristocratic interests (land, privilege) — creating the three-cornered political competition of 19th-century Britain.'
          },
          {
            question: 'For AP, the factory system\'s most significant long-term social consequence was:',
            options: [
              'A permanent urban working class with shared conditions, which became the base for unions and labor parties',
              'A society without classes, which emerged as factory wages leveled differences between owners and workers',
              'A working class too scattered across rural workshops to ever form any unions or political parties before 1900',
              'The end of working-class poverty within a generation, as factory wages rose faster than food prices',
            ],
            correctAnswer: 0,
            explanation: 'The industrial working class as a political entity is the long-term social consequence: before factories, workers were dispersed (domestic production, agricultural labor, artisan workshops); factories concentrated them in urban neighborhoods with shared conditions. This concentration created the social basis for collective organization: workers who lived near each other, worked together, and faced the same conditions could organize collectively in ways that dispersed rural workers could not. This is the foundation of the labor movement and, by extension, the welfare state.'
          }
        ]
      }
    }
  ]
}
