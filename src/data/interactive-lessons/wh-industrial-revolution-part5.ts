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
              'No previous society had urbanized at this speed or to this degree — the combination of rural displacement (enclosure) and industrial employment pull created population concentration that outpaced any ability to plan, build sanitation, or develop public health infrastructure, explaining why early industrial cities had catastrophic disease rates',
              'Roman empire cities had similarly rapid urbanization',
              'British urbanization was slow compared to other industrializing nations',
              'Urbanization had no connection to industrial employment',
            ],
            correctAnswer: 0,
            explanation: 'The speed and scale of industrialization-driven urbanization is AP\'s framework for understanding urban public health crises: pre-industrial cities grew slowly enough for incremental sanitation development; industrial cities grew faster than any infrastructure could follow. The 1832 cholera epidemic (32,000 deaths in Britain) was the consequence: overcrowded, unsanitated working-class urban neighborhoods provided perfect disease vectors. The epidemic ultimately prompted public health reform (1848 Public Health Act) — another demonstration that industrial problems generated reform responses.'
          },
          {
            question: 'Chartism (1838-1848) demonstrated which AP principle?',
            options: [
              'Working-class political consciousness developed in response to industrial conditions — Chartism was the first mass working-class political movement demanding democratic reform (universal male suffrage, secret ballot) as the mechanism for achieving economic justice, demonstrating that industrial workers developed political agency alongside their economic organization',
              'Chartism was a middle-class reform movement with no working-class participation',
              'Chartism successfully achieved all its demands by 1848',
              'Working-class people had no capacity for political organization during industrialization',
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
              'Owen believed industrial capitalism could be reformed by enlightened industrialists building better factory communities; Marx argued that capitalism\'s class structure made reform impossible and that proletarian revolution was the only path to worker emancipation — a fundamental difference between reformist and revolutionary strategies for addressing industrial inequality',
              'Both Marx and Owen advocated identical revolutionary overthrow of capitalism',
              'Owen was more radical than Marx in his opposition to industrial capitalism',
              'Both reformist and revolutionary socialism had no actual working-class followers',
            ],
            correctAnswer: 0,
            explanation: 'This distinction is AP\'s framework for 19th-20th century political alternatives to industrial capitalism: reformist socialism (can capitalism be made more just through reform?) vs. revolutionary socialism (must capitalism be replaced entirely?). Owen\'s New Lanark demonstrated that better factory conditions were possible within capitalism; Marx argued this was exceptional and that capitalism\'s structural dynamics would systematically re-exploit labor. This debate between reform and revolution defined Western politics through the 20th century.'
          },
          {
            question: 'The "separate spheres" ideology (public = male, private = female) that emerged during industrialization demonstrates:',
            options: [
              'Industrialization changed gender ideology alongside gender economics — as middle-class women were removed from productive economic activity (which moved into factories), a compensatory ideology developed idealizing women\'s domestic "sphere" as separate from but complementary to the male public sphere, providing ideological justification for women\'s exclusion from public life',
              'Separate spheres ideology predated industrialization with no industrial connection',
              'Working-class women were covered by separate spheres ideology identically to middle-class women',
              'Separate spheres ideology was universally rejected and had no social impact',
            ],
            correctAnswer: 0,
            explanation: 'Separate spheres is AP\'s analysis of how ideology accompanies economic change: as industrialization moved production from household to factory, middle-class women were left in households that no longer produced economically. The "domestic sphere" ideology compensated for this economic displacement by elevating domestic management and child-rearing as morally superior to the commercial public sphere. This ideology later became the target of the first feminist movements, which demanded women\'s access to the public sphere the ideology had constructed as male.'
          },
          {
            question: 'Trade unions\' political significance during industrialization was that they:',
            options: [
              'Created an organizational infrastructure for working-class collective action that extended beyond individual workplaces — trade union organization built workers\' capacity for sustained collective negotiation and eventually political mobilization, forming the organizational foundation for labor parties, minimum wage legislation, and welfare state development',
              'Trade unions were primarily social clubs with no political significance',
              'Trade unions only represented skilled workers with no broader labor movement connections',
              'Trade union organization undermined rather than strengthened working-class political power',
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
              'The industrial middle class became the constituency for liberal democratic reform — they had economic power (business ownership, professional income) without political representation (aristocratic Parliament didn\'t represent them), creating the political pressure for parliamentary reform (1832 Reform Act) and liberalism as an ideology of rule by merit rather than birth',
              'The middle class aligned politically with the working class in labor movements',
              'The middle class supported aristocratic rule and opposed parliamentary reform',
              'The middle class had no distinctive political interests during industrialization',
            ],
            correctAnswer: 0,
            explanation: 'Middle-class liberalism is AP\'s connection between industrialization and democratic reform: the emerging industrial middle class (manufacturers, merchants, professionals) created by capitalism had economic power but not political power in aristocratic parliamentary systems. Their political movement — liberalism (meritocracy, constitutional government, free trade, rule of law) — aimed to align political power with economic power. The 1832 Reform Act expanded suffrage to the middle class, fundamentally changing British politics. This is the mechanism connecting industrialization to democratization.'
          },
          {
            question: 'For AP, the most significant social consequence of industrialization was:',
            options: [
              'The creation of a modern class structure — industrial bourgeoisie (capital owners) and industrial proletariat (wage workers) — whose structural conflict over wages, hours, and working conditions generated the political movements (trade unions, labor parties, socialism) that shaped 19th-20th century political history across the industrialized world',
              'Industrialization eliminated class differences by creating equal wages',
              'The most significant consequence was improved living standards with no social conflict',
              'Industrialization had no significant impact on social structure',
            ],
            correctAnswer: 0,
            explanation: 'The class structure created by industrialization is the foundation of modern political history: the bourgeoisie-proletariat conflict Marx analyzed in 1848 structured political competition for the next century. Labor parties, welfare states, minimum wages, social insurance — all are political responses to the structural conflict between capital and labor that industrialization created. Understanding industrialization\'s social consequences is therefore understanding the origins of modern political institutions.'
          }
        ]
      }
    }
  ]
}
