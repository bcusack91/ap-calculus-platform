export const apushGildedAgePart1Data = {
  topicSlug: 'apush-gilded-age',
  sections: [
    {
      id: 'apushgil1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Gilded Age

**Part 1 of 7 — Industrialization, Immigration & Inequality (1870s–1900)**

---

| Section |
|---------|
| 📖 Big Business & Industrial Titans |
| Labor Movement |
| Immigration & Urbanization |
| 📌 Political Machines & Corruption |
| Farmers' Populist Movement |

> 🔑 **Key Concept:** Mark Twain coined "Gilded Age" — glittering on the surface but corrupt underneath. The AP exam focuses on the **tension between rapid economic growth and extreme inequality**, and how workers, farmers, and immigrants responded.
      `
    },
    {
      id: 'apushgil1-business',
      type: 'text' as const,
      content: `
## 📖 Big Business & Industrial Titans

### The Second Industrial Revolution

| Innovation | Impact |
|-----------|--------|
| **Steel** (Bessemer process) | Enabled skyscrapers, railroads, bridges |
| **Railroads** | Transcontinental Railroad completed 1869; created national markets; standardized time zones |
| **Oil** | John D. Rockefeller's Standard Oil; kerosene → gasoline |
| **Electricity** | Thomas Edison (light bulb, power stations); transformed urban life |
| **Telephone** | Alexander Graham Bell (1876); revolutionized communication |

### The "Captains of Industry" / "Robber Barons"

| Industrialist | Company / Industry | Key Strategy | Controversy |
|---|---|---|---|
| **Andrew Carnegie** | Carnegie Steel | **Vertical integration** — controlled every stage from iron mines to finished steel | Homestead Strike (1892); gave away \$350M in philanthropy |
| **John D. Rockefeller** | Standard Oil | **Horizontal integration** — bought out competitors to create monopoly; trusts | Controlled 90% of U.S. oil refining by 1880 |
| **Cornelius Vanderbilt** | Railroads | Consolidated competing rail lines | Stock manipulation; cut-throat competition |
| **J.P. Morgan** | Banking / Finance | Financed mergers; bailed out U.S. government (1895) | Enormous concentration of financial power |

### Key Economic Concepts

- **Vertical integration:** One company controls all steps of production (Carnegie: mines → railroads → mills → sales)
- **Horizontal integration:** One company buys all competitors at the same level (Rockefeller: bought rival refineries)
- **Trusts:** Legal arrangement where multiple companies are managed by a single board — used to create monopolies
- **Social Darwinism:** Applied Darwin's "survival of the fittest" to economics — wealth = merit; poverty = personal failure
- **Gospel of Wealth:** Carnegie's essay arguing the rich had a duty to use their wealth for the public good (libraries, universities)
      `
    },
    {
      id: 'apushgil1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The key difference between vertical and horizontal integration is:',
            options: [
              'Vertical integration controls all stages of production, while horizontal integration eliminates competitors at the same stage',
              'Vertical integration is legal while horizontal integration is always illegal',
              'Vertical integration applies only to agriculture while horizontal applies to manufacturing',
              'Vertical integration reduces costs while horizontal integration always increases them'
            ],
            correctAnswer: 0,
            explanation: 'Carnegie\'s vertical integration meant owning everything from iron ore mines to steel mills to railroads that shipped the product. Rockefeller\'s horizontal integration meant buying out all other oil refineries until Standard Oil had a near-monopoly. Both strategies concentrated economic power but in different ways.'
          },
          {
            question: 'Social Darwinism was used during the Gilded Age primarily to:',
            options: [
              'Justify extreme wealth inequality by arguing that economic success reflected natural superiority',
              'Promote government regulation of monopolies and trusts',
              'Support labor unions\' demands for higher wages and shorter hours',
              'Advocate for immigration restrictions based on scientific evidence'
            ],
            correctAnswer: 0,
            explanation: 'Social Darwinists like Herbert Spencer and William Graham Sumner applied Darwin\'s evolution theory to society, arguing that the wealthy were "naturally" superior and the poor were "unfit." This ideology was used to oppose government regulation, labor protections, and social welfare programs — claiming they interfered with natural selection.'
          }
        ]
      }
    },
    {
      id: 'apushgil1-labor',
      type: 'text' as const,
      content: `
## Labor, Immigration & Political Machines

### The Labor Movement

| Organization / Event | Details |
|---------------------|---------|
| **Knights of Labor** | Open to all workers (including women, African Americans); sought 8-hour day; declined after Haymarket (1886) |
| **AFL (American Federation of Labor)** | Samuel Gompers; skilled workers only; craft unions; "bread and butter" goals (wages, hours, conditions) |
| **Haymarket Affair** (1886) | Chicago labor rally; bomb killed police; 8 anarchists convicted; public turned against labor |
| **Homestead Strike** (1892) | Carnegie Steel; Pinkerton guards vs. steelworkers; violent; union crushed |
| **Pullman Strike** (1894) | Railroad workers; Eugene V. Debs; federal troops broke the strike; court injunction used against unions |

### The "New Immigration" (1880s–1920s)

- **Old immigrants** (pre-1880): Northern/Western Europe (Britain, Germany, Ireland, Scandinavia)
- **New immigrants** (1880s+): Southern/Eastern Europe (Italy, Poland, Russia, Greece) + China, Japan
- Settled in **ethnic urban neighborhoods** (Little Italy, Chinatown)
- Faced **nativism**: Chinese Exclusion Act (1882) — first law banning immigration by nationality
- **Ellis Island** (New York, 1892) — processing center for European immigrants
- **Angel Island** (San Francisco) — harsh processing for Asian immigrants

### Political Machines

- **Tammany Hall** (New York City) — led by **Boss Tweed**
- Provided services to immigrants (jobs, housing, food) in exchange for **votes**
- Rampant corruption — graft, kickbacks, election fraud
- **Thomas Nast** — political cartoonist who exposed Tammany Hall corruption
      `
    },
    {
      id: 'apushgil1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What business strategy did John D. Rockefeller use to control 90% of oil refining by buying out all competitors?

2) What 1882 law was the first federal law to ban immigration based on nationality?

3) What labor organization led by Samuel Gompers focused on practical "bread and butter" gains for skilled workers?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['horizontal integration', 'Chinese Exclusion Act', 'American Federation of Labor'],
        hint1: 'Buying competitors at the same level of production — ___ integration',
        hint2: 'Banned immigration from a specific country',
        hint3: 'AFL — American ___ of ___',
        explanation: 'Horizontal integration eliminated competitors at the same stage of production (Rockefeller bought rival refineries). The Chinese Exclusion Act (1882) reflected growing nativism and remained in effect until 1943. The AFL (founded 1886) focused on achievable goals for skilled craft workers.'
      }
    },
    {
      id: 'apushgil1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Andrew Carnegie\'s essay arguing the wealthy must use their fortunes for public good was called the ___',
            options: ['Gospel of Wealth', 'Social Darwinism', 'Communist Manifesto', 'Wealth of Nations']
          },
          {
            label: 'The 1894 railroad strike led by Eugene V. Debs was the ___',
            options: ['Pullman Strike', 'Homestead Strike', 'Haymarket Affair', 'Great Railroad Strike']
          },
          {
            label: 'The corrupt New York City political machine exposed by Thomas Nast was ___',
            options: ['Tammany Hall', 'Pendleton Hall', 'Carnegie Hall', 'Faneuil Hall']
          }
        ],
        correctAnswers: ['Gospel of Wealth', 'Pullman Strike', 'Tammany Hall'],
        hint1: 'Carnegie donated \$350 million to libraries, universities, and parks',
        hint2: 'Federal troops and a court injunction were used to break this strike',
        hint3: 'Led by Boss Tweed; controlled NYC politics through patronage and graft',
        explanation: 'Carnegie\'s Gospel of Wealth (1889) argued philanthropy was the rich\'s duty — critics called it hypocritical given his brutal labor practices. The Pullman Strike (1894) showed the federal government would side with business against labor. Tammany Hall exemplified Gilded Age political corruption.'
      }
    },
    {
      id: 'apushgil1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following BEST explains why the federal government generally sided with business over labor during the Gilded Age?',
            options: [
              'Courts used injunctions and the Sherman Antitrust Act against unions (not monopolies), and politicians depended on industrial donors for campaign funding',
              'Constitutional amendments explicitly prohibited labor unions',
              'Workers voluntarily chose not to organize because wages were rising rapidly',
              'The federal government had no legal authority to intervene in labor disputes'
            ],
            correctAnswer: 0,
            explanation: 'Ironically, the Sherman Antitrust Act (1890), intended to break up monopolies, was initially used more against labor unions (as "conspiracies in restraint of trade") than against corporations. Politicians depended on wealthy industrialists for campaign support, and the prevailing ideology of laissez-faire economics discouraged government intervention on workers\' behalf.'
          },
          {
            question: 'A historian comparing the "old" immigration (pre-1880) with the "new" immigration (1880s–1920s) would note that the MOST significant difference was:',
            options: [
              'New immigrants came predominantly from Southern and Eastern Europe, faced greater nativist hostility, and were more likely to settle in urban ethnic enclaves',
              'Old immigrants settled exclusively in rural areas while new immigrants all became factory workers',
              'New immigrants were primarily Protestant while old immigrants were Catholic',
              'Old immigrants faced no discrimination while new immigrants were universally welcomed'
            ],
            correctAnswer: 0,
            explanation: 'The "new" immigrants from Italy, Poland, Russia, and other Southern/Eastern European nations faced intense prejudice due to their Catholic or Jewish faith, unfamiliar languages, and perceived cultural differences. They concentrated in cities, forming ethnic neighborhoods, and organizations like the American Protective Association campaigned against them — a nativism that culminated in the restrictive Immigration Acts of the 1920s.'
          }
        ]
      }
    }
  ]
}
