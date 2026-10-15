export const whIndustrialRevolutionPart5Data = {
  topicSlug: 'wh-industrial-revolution',
  sections: [
    {
      id: 'whir5-intro',
      type: 'text' as const,
      content: `
# ⚙️ The Industrial Revolution

**Part 5 of 7 — Social Impacts: Urbanization, Class, and Labor Movements**

---

> 🔑 **Key Concept:** Industrialization produced dramatic social transformations: rapid urbanization created new class structures, working conditions generated labor movements and socialism, and the roles of women and children changed fundamentally. AP questions focus on comparing pre-industrial and industrial social structures and evaluating the causes and consequences of labor movements.
      `
    },
    {
      id: 'whir5-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The pace of British urbanization (17% to 75% urban, 1750-1900) was historically unprecedented because:',
            options: [
              'No earlier society urbanized so fast, and city growth outran any effort to build sanitation or plan housing',
              'Roman and Chinese cities had grown just as fast, so British urbanization repeated an older pattern',
              'Britain urbanized slowly compared with France and Germany, so its cities had ample time to plan sewers and sanitation',
              'Most new city dwellers came from overseas immigration, which had no connection to factory employment',
            ],
            correctAnswer: 0,
            explanation: 'The speed and scale of industrialization-driven urbanization is AP\'s framework for understanding urban public health crises: pre-industrial cities grew slowly enough for incremental sanitation development; industrial cities grew faster than any infrastructure could follow. The 1832 cholera epidemic (32,000 deaths in Britain) was the consequence: overcrowded, unsanitated working-class urban neighborhoods provided perfect disease vectors. The epidemic ultimately prompted public health reform (1848 Public Health Act) — another demonstration that industrial problems generated reform responses.'
          },
          {
            question: 'Chartism (1838-1848) demonstrated which AP principle?',
            options: [
              'Workers turned to democratic demands like universal male suffrage as a path to economic justice',
              'Chartism was a middle-class campaign for free trade that working people neither joined nor supported',
              'The Chartists won all six of their demands from Parliament by 1848, ending the movement in total triumph',
              'Industrial workers proved unable to organize politically and left reform entirely to the aristocracy',
            ],
            correctAnswer: 0,
            explanation: 'Chartism is AP\'s example of early working-class political mobilization: the movement\'s 6 demands (universal male suffrage, secret ballot, annual Parliaments, paid MPs, abolition of property requirements, equal electoral districts) were all eventually adopted (over the next century) because the logic was sound. Chartism failed in the short term but demonstrated that the working class could develop sophisticated political demands and organize mass movements — the foundation of the labour movement that followed.'
          }
        ]
      }
    },
    {
      id: 'whir5-content',
      type: 'text' as const,
      content: `
## 📖 Social Impacts of Industrialization

> **Urbanization**

| UK Urban Population | 1750 | 1800 | 1850 | 1900 |
|--------------------|------|------|------|------|
| % in cities >10,000 | 17% | 24% | 39% | 75% |

This scale of urbanization was unprecedented:
- **Push:** Agricultural displacement (enclosure, mechanization)
- **Pull:** Factory wages (even low wages exceeded rural options)
- **Consequence:** Overcrowded industrial cities without sanitation, planning, or public health infrastructure

> **New Class Structure**

| Class | Composition | Political Position |
|-------|------------|-------------------|
| **Aristocracy** | Landowning nobility | Declining political power; reform bills reduced dominance |
| **Industrial bourgeoisie** | Factory owners, merchants, bankers | Growing; sought political representation (1832 Reform Act) |
| **Professional middle class** | Managers, doctors, lawyers, engineers | Liberal reformers; supported free trade, legal reform |
| **Artisan/skilled working class** | Craftsmen, mechanics | Labor unions; early socialism; cooperative movements |
| **Unskilled working class** | Factory workers, miners | Labor unions; eventually socialist and labor party support |

> **Labor Movements and Political Ideologies**

Industrial conditions produced organized political responses:

- **Trade unions:** Collective bargaining for wages and hours; initially illegal (Combination Acts 1799-1824); legalized in Britain 1824
- **Chartism (1838-1848):** First mass British working-class political movement; demanded universal male suffrage, secret ballot, paid MPs
- **Owen's Utopian Socialism:** Cooperative communities (New Harmony, New Lanark); better factory conditions demonstrated
- **Marx and Engels (Communist Manifesto, 1848):** Scientific socialism; class struggle; bourgeoisie vs. proletariat; revolutionary change
- **Labor parties:** British Labour Party (1900); Socialist parties across Europe

> **Women and Industrialization**

Industrial capitalism changed women's economic roles with contradictory effects:

- **Working-class women:** Factory labor; lower wages than men; domestic service; combined wage work with childcare
- **Middle-class women:** "Cult of domesticity" — idealized as moral household managers; excluded from professions
- **Separate spheres ideology:** Public sphere (men, work, politics) vs. private sphere (women, home, morality)
- **Long-term consequence:** Women's entry into wage labor eventually became foundation for suffrage and feminist movements
      `
    },
    {
      id: 'whir5-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The difference between Marx\'s "scientific socialism" and Owen\'s "utopian socialism" was:',
            options: [
              'Owen hoped model factories could reform capitalism, while Marx saw revolution as the only way to end it',
              'Owen and Marx both called for violent revolution, differing only on whether peasants or workers should lead',
              'Owen was the more radical, demanding immediate revolution, while Marx favored gradual factory reform',
              'Marx relied on enlightened factory owners, while Owen trusted organized workers to seize the state',
            ],
            correctAnswer: 0,
            explanation: 'This distinction is AP\'s framework for 19th-20th century political alternatives to industrial capitalism: reformist socialism (can capitalism be made more just through reform?) vs. revolutionary socialism (must capitalism be replaced entirely?). Owen\'s New Lanark demonstrated that better factory conditions were possible within capitalism; Marx argued this was exceptional and that capitalism\'s structural dynamics would systematically re-exploit labor. This debate between reform and revolution defined Western politics through the 20th century.'
          },
          {
            question: 'The "separate spheres" ideology (public = male, private = female) that emerged during industrialization demonstrates:',
            options: [
              'As production left the home, middle-class ideology idealized women\'s domestic role and kept them out of public life',
              'The ideology long predated factories and owed nothing to the shift of production out of the household',
              'Working-class women lived out the ideology fully, since factory wages let their families keep them at home',
              'The ideology was rejected by Victorian society and had little effect on women\'s public or legal status',
            ],
            correctAnswer: 0,
            explanation: 'Separate spheres is AP\'s analysis of how ideology accompanies economic change: as industrialization moved production from household to factory, middle-class women were left in households that no longer produced economically. The "domestic sphere" ideology compensated for this economic displacement by elevating domestic management and child-rearing as morally superior to the commercial public sphere. This ideology later became the target of the first feminist movements, which demanded women\'s access to the public sphere the ideology had constructed as male.'
          },
          {
            question: 'Trade unions\' political significance during industrialization was that they:',
            options: [
              'They built lasting groups for collective action that grew into labor parties and pushed welfare laws',
              'They were mainly social clubs for skilled men, with no role in strikes, bargaining, or politics',
              'They represented only skilled craftsmen and never linked up with broader labor or political movements',
              'They weakened workers politically by splitting them into rival trades that could not cooperate',
            ],
            correctAnswer: 0,
            explanation: 'The organizational significance of trade unions is AP\'s mechanism connecting individual worker grievances to collective political action: individual workers are powerless against employers; organized workers in trade unions can strike and collectively bargain; multiple trade unions coordinating politically can demand legislation (Factory Acts, minimum wage); trade unions funding labor parties can achieve parliamentary representation. The organizational form — union → labor party → parliamentary representation — is the mechanism through which industrial workers achieved political power.'
          }
        ]
      }
    },
    {
      id: 'whir5-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'The British working-class political movement (1838-1848) demanding universal male suffrage and democratic reform was ___',
            options: [
            'Chartism',
            'Luddism',
            'Fabianism',
            'Owenism',
            ]
          },
          {
            label: 'The ideology that divided society into a male "public sphere" and female "domestic sphere" was ___',
            options: [
            'Separate spheres ideology',
            'Social Darwinism',
            'The cult of progress',
            'Liberal feminism',
            ]
          },
          {
            label: 'Marx and Engels\' 1848 document calling for workers of the world to unite was ___',
            options: [
            'The Communist Manifesto',
            'Das Kapital',
            'The Wealth of Nations',
            'The Rights of Man',
            ]
          },
        ],
        correctAnswers: [
          'Chartism',
          'Separate spheres ideology',
          'The Communist Manifesto',
        ],
        hint1: 'British 1838-1848 — six demands — universal male suffrage — secret ballot — first mass working-class movement',
        hint2: 'Victorian ideology — public male sphere — domestic female sphere — industrialization context',
        hint3: 'Marx Engels 1848 — proletarian revolution — class struggle — workers of world unite',
        explanation: 'Chartism represents working-class political organization demanding democratic inclusion; separate spheres ideology represents the gendered social structure industrialization created; and the Communist Manifesto represents the most radical intellectual response to industrial class conflict — together these three demonstrate the range of political responses industrial capitalism generated.'
      }
    },
    {
      id: 'whir5-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The new middle class created by industrialization (factory owners, managers, professionals) was politically significant because:',
            options: [
              'With wealth but few votes, it pressed for parliamentary reform such as the 1832 Reform Act',
              'It joined working-class unions and Chartists, uniting with them to demand higher wages after 1838',
              'It sided with the aristocracy to block parliamentary reform, opposing the Reform Act of 1832 as too radical',
              'It had no distinct political interests and split its votes evenly between the parties after 1832',
            ],
            correctAnswer: 0,
            explanation: 'Middle-class liberalism is AP\'s connection between industrialization and democratic reform: the emerging industrial middle class (manufacturers, merchants, professionals) created by capitalism had economic power but not political power in aristocratic parliamentary systems. Their political movement — liberalism (meritocracy, constitutional government, free trade, rule of law) — aimed to align political power with economic power. The 1832 Reform Act expanded suffrage to the middle class, fundamentally changing British politics. This is the mechanism connecting industrialization to democratization.'
          },
          {
            question: 'For AP, the most significant social consequence of industrialization was:',
            options: [
              'A class structure of bourgeoisie and proletariat whose conflict spawned unions, labor parties, and socialism',
              'The end of class differences, as factory wages became equal for managers, clerks, and machine operators',
              'Steadily rising living standards for every worker, which quickly removed social conflict over wages and hours',
              'Very little social change, since most workers stayed in the same villages and trades as their parents',
            ],
            correctAnswer: 0,
            explanation: 'The class structure created by industrialization is the foundation of modern political history: the bourgeoisie-proletariat conflict Marx analyzed in 1848 structured political competition for the next century. Labor parties, welfare states, minimum wages, social insurance — all are political responses to the structural conflict between capital and labor that industrialization created. Understanding industrialization\'s social consequences is therefore understanding the origins of modern political institutions.'
          }
        ]
      }
    }
  ]
}
