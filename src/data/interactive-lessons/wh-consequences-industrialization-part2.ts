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
              'A system in which the bourgeoisie exploited the proletariat by paying less than the value workers produced, making class conflict inevitable',
              'A system that, despite early hardships, would gradually spread its wealth to all classes as rising productivity steadily lifted workers\' wages',
              'A temporary stage that would evolve peacefully into a cooperative society once enlightened factory owners agreed to share profits with employees',
              'A system that harmed only the poorest unskilled laborers, while skilled workers and the middle class shared steadily in its growing prosperity',
            ],
            correctAnswer: 0,
            explanation: 'Marx\'s structural exploitation analysis is AP\'s framework: the key insight is that exploitation is not the result of individual bad behavior (cruel factory owners) but is structurally built into the wage-labor system. Workers must sell labor to survive; capitalists pay less than the value produced; the difference (surplus value) is profit. No individual choice changes this — only changing the ownership of production would end exploitation. This structural analysis, rather than moral critique, is what distinguished Marx from earlier "utopian" socialists.'
          },
          {
            question: 'Bismarck\'s paternalistic welfare state (old age insurance, accident insurance 1883-1889) demonstrates:',
            options: [
              'Conservative governments could adopt limited worker protections to undercut socialism, giving workers a stake in the existing order without granting them political power',
              'Bismarck had been won over to socialist ideas and created the insurance programs to deliver the workers\' state promised by the Social Democrats',
              'The insurance laws were a purely humanitarian measure, adopted without political calculation after reports on factory accidents shocked the Reichstag',
              'State insurance fully satisfied German workers\' demands, so the Social Democratic Party lost its voters and faded from politics before 1900',
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
              'Expanding suffrage and working-class pressure made criminalizing all collective action unsustainable, so elites preferred legal bargaining to underground agitation',
              'Factory owners campaigned for legalization because they believed recognized unions would discipline workers and raise productivity in their mills',
              'Economists persuaded governments that unions raised efficiency, so legalization was a technical economic reform with no political dimension',
              'Britain\'s repeal of the Combination Acts in 1824 settled the question at once, and afterward strikes and picketing faced no further criminal restrictions anywhere in Europe',
            ],
            correctAnswer: 0,
            explanation: 'Political pressure producing legal reform is AP\'s mechanism: Britain\'s Combination Acts (1799-1800) made worker combination criminal; these were repealed (1824-25) under political pressure; union activities were still restricted until the Trade Union Act (1871) gave full legal protection. The gradual legalization process reflects the political calculation of ruling elites: controlling legal unions (which negotiate wages) was preferable to driving labor organizing underground (where it radicalized). Legal status → negotiation channel → some labor stability.'
          },
          {
            question: 'Comparing "reform socialism" (Bernstein\'s revisionism) to Marxist revolutionary socialism reveals:',
            options: [
              'Reform socialists held that unions and democratic politics were improving workers\' lives, making revolution unnecessary, while revolutionaries held that capitalism had to be overthrown',
              'Both camps agreed that violent revolution was the only path to socialism and differed mainly over whether to organize peasants or industrial workers first',
              'Bernstein accepted Marx\'s prediction that workers would sink into deeper misery but argued that revolution should be postponed until workers formed a majority of every nation\'s population',
              'Revolutionaries preferred voluntary cooperatives, while reform socialists wanted the state to seize all industry at once, so the debate concerned ownership rather than methods',
            ],
            correctAnswer: 0,
            explanation: 'The reform vs. revolution debate is AP\'s framework for understanding socialist fragmentation: Eduard Bernstein (German Social Democrat, 1899) argued that Marx was empirically wrong — workers\' conditions were improving, not deteriorating; democratic political action was producing real reforms; revolution was neither necessary nor desirable. Orthodox Marxists (Luxemburg, Lenin) rejected this as betrayal — capitalism couldn\'t be reformed, only overthrown. This debate shaped 20th-century left politics: social democracy (reform road) vs. communism (revolution) reflects the Bernstein vs. Lenin split.'
          },
          {
            question: 'The rise of the British Labour Party (1900) from trade union organizing demonstrates:',
            options: [
              'Unions turned to politics once workers saw that labor laws and welfare required power in Parliament, so the party grew out of union experience',
              'The party was created by Fabian and Marxist intellectuals who only later recruited union members, following the same path as Germany\'s Social Democrats',
              'British workers showed little interest in politics, so the party began as a project of Liberal politicians courting working-class votes after the 1884 Reform Act',
              'The party adopted a Marxist revolutionary program at its founding and refused to cooperate with trade unions that still negotiated wage agreements with employers',
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
            'Bismarck\'s Kulturkampf policy',
            'Bismarck\'s Realpolitik diplomacy',
            'The Zollverein customs union',
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
              'Separating time periods, since early factory workers saw conditions worsen while later real wages and legal protections rose, and noting how unevenly the gains fell across groups',
              'Recognizing that conditions improved steadily from the first factories onward, since factory wages always exceeded what rural craft work had paid',
              'Recognizing that conditions worsened across the whole period, since real wages fell in every decade from the 1760s through 1900',
              'Treating all workers as one group, since skilled men, unskilled laborers, women, and children experienced the same changes at the same pace',
            ],
            correctAnswer: 0,
            explanation: 'Temporal and demographic specificity is AP\'s analytical standard: "Did industrialization improve workers\' lives?" cannot be answered simply yes or no. First generation (1760s-1830s in Britain): real wages were stagnant or declining while working conditions in factories were demonstrably worse than rural craft production. After 1850: real wages rose; factory acts provided some protections; children\'s labor was restricted. By 1900: 10-hour workday achieved in most industries; unions legal; social insurance beginning. The improvements were real but delayed, uneven, and required struggle — not automatic products of economic growth.'
          },
          {
            question: 'For AP, the socialist response to industrialization\'s consequences demonstrated:',
            options: [
              'Industrial capitalism created its own opposition, since concentrating workers in factories and cities fostered the shared class consciousness that fed unions and socialism',
              'Socialist ideas were imported from abroad by exiled intellectuals and had little connection to what factory workers in industrial cities actually experienced',
              'Dispersed rural agricultural laborers, rather than urban factory workers, formed the core membership of most of the nineteenth-century European socialist and labor movements',
              'Socialism stayed a debate among intellectuals in reading societies, while organized labor developed separately and never adopted socialist ideas or programs',
            ],
            correctAnswer: 0,
            explanation: 'Industrial capitalism producing its own opposition is AP\'s dialectical analysis: factory owners concentrated thousands of workers in single locations; those workers shared identical experiences (same wages, same hours, same dangerous conditions); shared experience → shared consciousness; shared consciousness → collective action (unions, strikes, political parties). Rural agricultural workers had dispersed, individualized experiences that made collective consciousness harder to develop. The city and factory as organizational environments for working-class politics explains why socialist movements emerged from industrial cities, not agrarian regions.'
          }
        ]
      }
    }
  ]
}
