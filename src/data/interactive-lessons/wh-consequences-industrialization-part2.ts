export const whConsequencesIndustrializationPart2Data = {
  topicSlug: 'wh-consequences-industrialization',
  sections: [
    {
      id: 'whci2-intro',
      type: 'text' as const,
      content: `
# ⚙️ Consequences of Industrialization

**Part 2 of 7 — Labor Movements and the Rise of Socialism**

---

> 🔑 **Key Concept:** Industrialization created new working-class communities with shared grievances (low wages, dangerous conditions, child labor) that generated trade unions, labor legislation, and socialist political movements. AP questions compare different labor responses (craft unions vs. industrial unions vs. socialism) and evaluate the extent to which workers improved their conditions through collective action.
      `
    },
    {
      id: 'whci2-quiz1',
      type: 'multiple-choice' as const,
      content: `**Concept Check** 🎯`,
      exercise: {
        questions: [
          {
            question: 'Karl Marx\'s "Communist Manifesto" (1848) argued that industrial capitalism was:',
            options: [
              'A system of exploitation in which the bourgeoisie (capitalist class) extracted surplus value from the proletariat (working class) by paying wages lower than the value workers produced — making conflict between classes not incidental but structural and inevitable, with communist revolution as the historical outcome',
              'A beneficial system that would eventually distribute wealth equitably to all classes',
              'A temporary stage that would peacefully evolve into a cooperative society without conflict',
              'A system that harmed only the poorest workers while benefiting the middle class',
            ],
            correctAnswer: 0,
            explanation: 'Marx\'s structural exploitation analysis is AP\'s framework: the key insight is that exploitation is not the result of individual bad behavior (cruel factory owners) but is structurally built into the wage-labor system. Workers must sell labor to survive; capitalists pay less than the value produced; the difference (surplus value) is profit. No individual choice changes this — only changing the ownership of production would end exploitation. This structural analysis, rather than moral critique, is what distinguished Marx from earlier "utopian" socialists.'
          },
          {
            question: 'Bismarck\'s paternalistic welfare state (old age insurance, accident insurance 1883-1889) demonstrates:',
            options: [
              'That conservative governments could adopt limited worker protections as a strategy to undercut socialist political demands — by providing some economic security through state insurance, Bismarck attempted to give German workers a stake in the existing political order, reducing the appeal of revolutionary socialism without granting the political power (democratic rights, union rights) that socialists also demanded',
              'Bismarck was converted to socialist ideology and genuinely supported workers\' rights',
              'The welfare state had no political motivation — it was purely humanitarian',
              'Bismarck\'s welfare state was a complete response to worker demands that satisfied all socialist goals',
            ],
            correctAnswer: 0,
            explanation: '"Stealing the socialists\' thunder" is AP\'s framework for conservative welfare reform: Bismarck explicitly said his welfare measures were designed to reduce socialist appeal. By providing old age pensions and accident insurance (economic security), he gave workers reasons to support the existing system. He simultaneously banned socialist organizations (Anti-Socialist Laws, 1878-1890). The combination — some economic security + political repression — was a conservative response to the socialist challenge that differed from both pure repression (which generated martyrs) and democratic accommodation (which would have empowered workers politically).'
          }
        ]
      }
    },
    {
      id: 'whci2-content',
      type: 'text' as const,
      content: `
## 📖 Labor Movements and Socialism

> **Working Conditions that Generated Labor Response**

| Condition | Reality | Worker Response |
|-----------|---------|----------------|
| **Wages** | Low; barely subsistence; women and children paid less | Wage strikes; minimum wage campaigns |
| **Hours** | 12-16 hour days common; 6-7 days per week | 10-hour day movement; 8-hour day demand |
| **Safety** | Machinery accidents; coal mine collapses; chemical exposure | Safety legislation campaigns |
| **Child labor** | Children as young as 5 in mines and mills | Child labor prohibition legislation |

> **Trade Unions: Collective Bargaining**

- **Craft unions:** Organized skilled workers (printers, carpenters) — earlier, more stable
- **Industrial unions:** Organized all workers in an industry regardless of skill — later, larger
- **Methods:** Collective bargaining, strikes, work-to-rule slowdowns
- **Legal status:** Initially illegal (Combination Acts in Britain); gradually legalized through 19th century
- **Britain's TUC (1868):** Trades Union Congress — federation of British unions; advocated political action

> **Socialist Ideology**

- **Utopian socialism (Owen, Fourier):** Cooperative communities; factories organized for workers not profit
- **Scientific socialism (Marx and Engels):** History determined by class struggle; capitalism exploits workers; revolution inevitable; proletariat would create communist society
- **The Communist Manifesto (1848):** "Workers of the world, unite!"; analyzed capitalism as systematic exploitation
- **Reform socialism (Bernstein):** Gradual reform through democratic politics; rejected revolution
- **Anarchism:** Reject all government; direct action; Bakunin and Kropotkin

> **Political Consequences**

- **Britain:** Labour Party (1900) emerged from trade unions + socialist groups; parliamentary road to reform
- **Germany:** Social Democratic Party (SPD) — largest socialist party in Europe by 1912; worked within Bismarck's system despite Bismarck\'s Anti-Socialist Laws
- **Bismarck's response:** Anti-Socialist Laws (1878-1890) + paternalistic welfare state (old age insurance, accident insurance, health insurance) — "steal the socialists\' thunder" by providing some worker protections
      `
    },
    {
      id: 'whci2-input',
      type: 'multiple-choice' as const,
      content: `**Applied Recall: 3-Question Sprint** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The legal status of trade unions shifted from criminal conspiracy to legal organization across 19th-century Europe because:',
            options: [
              'Growing working-class political pressure (expanding suffrage; socialist electoral success) made it politically unsustainable to treat all worker collective action as criminal — governments and employers ultimately preferred regulated collective bargaining (which channeled worker grievances into legal negotiation) to illegal underground organizing (which radicalized workers and generated sympathy)',
              'Factory owners voluntarily supported union legalization as beneficial to their industries',
              'Trade unions were legalized primarily for economic efficiency reasons with no political dimension',
              'Union legalization occurred suddenly through a single legislative act with no gradual process',
            ],
            correctAnswer: 0,
            explanation: 'Political pressure producing legal reform is AP\'s mechanism: Britain\'s Combination Acts (1799-1800) made worker combination criminal; these were repealed (1824-25) under political pressure; union activities were still restricted until the Trade Union Act (1871) gave full legal protection. The gradual legalization process reflects the political calculation of ruling elites: controlling legal unions (which negotiate wages) was preferable to driving labor organizing underground (where it radicalized). Legal status → negotiation channel → some labor stability.'
          },
          {
            question: 'Comparing "reform socialism" (Bernstein\'s revisionism) to Marxist revolutionary socialism reveals:',
            options: [
              'Reform socialism argued that capitalism was gradually improving workers\' conditions through trade unions and democratic reform, making violent revolution unnecessary and counterproductive; revolutionary socialism argued that capitalism\'s contradictions were structural and could only be resolved through fundamental overthrow — this debate about gradual reform vs. revolution divided the global left throughout the 20th century',
              'Both reform and revolutionary socialism agreed that violent revolution was the only path to socialist society',
              'Bernstein\'s revisionism was identical to Marxism with only terminological differences',
              'Revolutionary socialism rejected democratic politics entirely while reform socialism embraced monarchy',
            ],
            correctAnswer: 0,
            explanation: 'The reform vs. revolution debate is AP\'s framework for understanding socialist fragmentation: Eduard Bernstein (German Social Democrat, 1899) argued that Marx was empirically wrong — workers\' conditions were improving, not deteriorating; democratic political action was producing real reforms; revolution was neither necessary nor desirable. Orthodox Marxists (Luxemburg, Lenin) rejected this as betrayal — capitalism couldn\'t be reformed, only overthrown. This debate shaped 20th-century left politics: social democracy (reform road) vs. communism (revolution) reflects the Bernstein vs. Lenin split.'
          },
          {
            question: 'The rise of the British Labour Party (1900) from trade union organizing demonstrates:',
            options: [
              'That industrial organization (trade unions) can produce political organization (political party) when workers recognize that legislation (labor laws, suffrage, welfare policy) requires political power to achieve — the Labour Party was not an intellectual creation but emerged organically from working-class organizational experience, making it different from continental socialist parties that were founded by intellectual socialists',
              'The Labour Party was founded by intellectual socialists with no connection to trade unions',
              'British workers showed no interest in political organization — they focused only on workplace bargaining',
              'The Labour Party immediately adopted Marxist revolutionary ideology upon its founding',
            ],
            correctAnswer: 0,
            explanation: 'Trade unions → political party is AP\'s organizational evolution: the Trades Union Congress (TUC, 1868) organized British unions; as workers gained voting rights (Reform Acts 1867, 1884), union leaders recognized that Parliamentary legislation controlled labor law, workplace safety, and social insurance — areas that collective bargaining couldn\'t reach. The Labour Representation Committee (1900, later Labour Party) was created explicitly to put trade union interests directly into Parliament. This organic connection between industrial and political organization made British Labour different from German SPD (founded by socialist intellectuals who then recruited workers).'
          }
        ]
      }
    },
    {
      id: 'whci2-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match the Idea: Evidence to Claim**`,
      exercise: {
        dropdowns: [
          {
            label: 'Karl Marx and Friedrich Engels\' 1848 document calling for workers\' revolution was ___',
            options: [
            'The Communist Manifesto',
            'Das Kapital',
            'The Condition of the Working Class',
            'The Wealth of Nations',
            ]
          },
          {
            label: 'The German chancellor\'s combination of anti-socialist repression and state welfare insurance (1878-1889) was ___',
            options: [
            'Bismarck\'s carrot and stick policy',
            'The Berlin Compromise',
            'The Realpolitik welfare system',
            'The Anti-Worker program',
            ]
          },
          {
            label: 'The British federation of trade unions founded in 1868 that eventually helped create the Labour Party was ___',
            options: [
            'The Trades Union Congress (TUC)',
            'The British Socialist Party',
            'The Chartist Movement',
            'The Fabian Society',
            ]
          }
        ],
        correctAnswers: [
          'The Communist Manifesto',
          'Bismarck\'s carrot and stick policy',
          'The Trades Union Congress (TUC)',
        ],
        hint1: 'Marx Engels 1848 — workers of world unite — bourgeoisie vs proletariat — revolutionary call',
        hint2: 'Bismarck — Anti-Socialist Laws 1878 — old age accident health insurance 1883-1889 — reduce socialist appeal',
        hint3: 'TUC 1868 — British trade union federation — collective bargaining — political lobbying — Labour Party foundation',
        explanation: 'The Communist Manifesto represents the revolutionary ideological response to industrial capitalism; Bismarck\'s carrot and stick represents conservative governments\' adaptive response to socialist challenge; and the TUC represents the practical organizational response of British workers — together they demonstrate the range of responses to industrialization\'s labor consequences.'
      }
    },
    {
      id: 'whci2-applied',
      type: 'multiple-choice' as const,
      content: `**AP-Style Application** 🎯`,
      exercise: {
        questions: [
          {
            question: 'The AP analytical framework for evaluating whether workers improved their conditions through industrialization requires:',
            options: [
              'Distinguishing between short-term (first generation of industrial workers experienced declining conditions), medium-term (real wages rose after 1850 for skilled workers in industrialized nations), and long-term (labor movements achieved significant legal protections by 1900) — and recognizing that improvements were uneven (skilled vs. unskilled; Britain vs. developing regions; men vs. women and children)',
              'Working conditions uniformly improved from the beginning of industrialization',
              'Working conditions uniformly worsened throughout the entire Industrial Revolution era',
              'All workers (skilled, unskilled, women, children) experienced identical changes in their conditions',
            ],
            correctAnswer: 0,
            explanation: 'Temporal and demographic specificity is AP\'s analytical standard: "Did industrialization improve workers\' lives?" cannot be answered simply yes or no. First generation (1760s-1830s in Britain): real wages were stagnant or declining while working conditions in factories were demonstrably worse than rural craft production. After 1850: real wages rose; factory acts provided some protections; children\'s labor was restricted. By 1900: 10-hour workday achieved in most industries; unions legal; social insurance beginning. The improvements were real but delayed, uneven, and required struggle — not automatic products of economic growth.'
          },
          {
            question: 'For AP, the socialist response to industrialization\'s consequences demonstrated:',
            options: [
              'That industrial capitalism generated its own ideological opposition — the concentrated working-class communities of industrial cities created the social conditions for class consciousness and collective action that agricultural workers in dispersed rural settings could not develop, demonstrating that industrial capitalism\'s organizational form (concentrated factories, shared experiences) unintentionally created the organizational basis for the labor and socialist movements that challenged it',
              'Socialist ideology was imported from outside industrial society with no connection to workers\' actual experiences',
              'Working-class communities rarely developed collective political consciousness',
              'Socialism was primarily an intellectual movement with no connection to actual labor organizing',
            ],
            correctAnswer: 0,
            explanation: 'Industrial capitalism producing its own opposition is AP\'s dialectical analysis: factory owners concentrated thousands of workers in single locations; those workers shared identical experiences (same wages, same hours, same dangerous conditions); shared experience → shared consciousness; shared consciousness → collective action (unions, strikes, political parties). Rural agricultural workers had dispersed, individualized experiences that made collective consciousness harder to develop. The city and factory as organizational environments for working-class politics explains why socialist movements emerged from industrial cities, not agrarian regions.'
          }
        ]
      }
    }
  ]
}
