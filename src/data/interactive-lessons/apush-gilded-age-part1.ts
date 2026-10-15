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

> 🔑 **Key Concept:** The era takes its name from *The Gilded Age* (1873), a satirical novel by Mark Twain and Charles Dudley Warner: glittering on the surface but corrupt underneath. The AP exam focuses on the **tension between rapid economic growth and extreme inequality**, and how workers, farmers, and immigrants responded.
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
| **Andrew Carnegie** | Carnegie Steel | **Vertical integration** — controlled every stage from iron mines to finished steel | Homestead Strike (1892); gave away \\$350M in philanthropy |
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
            question: 'Which of the following best describes the difference between vertical and horizontal integration?',
            options: [
              'Vertical integration was legal, but horizontal integration was banned by statute',
              'Vertical integration served agriculture, but horizontal integration served industry',
              'Vertical integration absorbed suppliers, but horizontal integration absorbed rivals',
              'Vertical integration raised prices, but horizontal integration always lowered them'
            ],
            correctAnswer: 2,
            explanation: 'Carnegie bought the mines, ships and railroads that supplied his mills, while Rockefeller bought competing refineries. Both forms were legal until antitrust law began to be enforced, both appeared in manufacturing, and neither had a fixed effect on prices.'
          },
          {
            question: 'Gilded Age writers most often used social Darwinism to',
            options: [
              'defend great fortunes as the reward of natural fitness',
              'support federal regulation of large monopolies and trusts',
              'back labor unions seeking higher wages and shorter hours',
              'argue for public aid to families thrown out of work'
            ],
            correctAnswer: 0,
            explanation: 'Herbert Spencer and William Graham Sumner applied "survival of the fittest" to society, so success seemed to prove merit and government aid seemed to interfere with nature. That reasoning was used against regulation, unions and relief, not for them.'
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
- Faced **nativism**: Chinese Exclusion Act (1882) — the first major federal law to bar immigrant laborers of a specific nationality
- **Ellis Island** (New York, 1892) — processing center for European immigrants
- **Angel Island** (San Francisco Bay, opened 1910) — harsh processing and long detentions for Asian immigrants

### Political Machines

- **Tammany Hall** (New York City) — Democratic machine led in the late 1860s by William M. "Boss" Tweed
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

2) What 1882 law suspended the immigration of Chinese laborers for ten years?

3) What labor organization led by Samuel Gompers focused on practical "bread and butter" gains for skilled workers?

Use the exact historical term.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['horizontal integration', 'Chinese Exclusion Act', 'American Federation of Labor'],
        hint1: 'Buying competitors at the same level of production — ___ integration',
        hint2: 'It named one nationality in its title and was renewed in 1892 and 1902',
        hint3: 'AFL — American ___ of ___',
        explanation: 'Horizontal integration eliminated competitors at the same stage of production (Rockefeller bought rival refineries). The Chinese Exclusion Act (1882) reflected growing nativism; it was made permanent in 1902 and repealed in 1943. The AFL (founded 1886) focused on achievable goals for skilled craft workers.'
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
            options: ['Gospel of Wealth', 'Social Gospel', 'Acres of Diamonds', 'Progress and Poverty']
          },
          {
            label: 'The 1894 railroad strike led by Eugene V. Debs was the ___',
            options: ['Pullman Strike', 'Homestead Strike', 'Haymarket Affair', 'Great Railroad Strike']
          },
          {
            label: 'The corrupt New York City political machine exposed by Thomas Nast was ___',
            options: ['Tammany Hall', 'Hull-House', 'the Stalwarts', 'the Mugwumps']
          }
        ],
        correctAnswers: ['Gospel of Wealth', 'Pullman Strike', 'Tammany Hall'],
        hint1: 'Carnegie donated \\$350 million to libraries, universities, and parks',
        hint2: 'Federal troops and a court injunction were used to break this strike',
        hint3: 'Led by Boss Tweed; controlled NYC politics through patronage and graft',
        explanation: 'Carnegie\'s Gospel of Wealth (1889) argued philanthropy was the duty of the rich; critics called it hypocritical given the wage cuts and union-breaking at his mills. Social Gospel ministers, Russell Conwell\'s Acres of Diamonds sermon and Henry George\'s Progress and Poverty were different responses to wealth. The Pullman Strike (1894) showed the federal government would side with business against labor. Tammany Hall exemplified Gilded Age political corruption, while Hull-House was a settlement house and the Stalwarts and Mugwumps were Republican factions.'
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
            question: 'Which of the following best explains why the federal government usually sided with employers in major Gilded Age strikes?',
            options: [
              'A constitutional amendment had outlawed unions in industries that crossed state lines',
              'Most industrial workers refused to join unions during a long period of rising wages',
              'Congress had passed laws giving employers sole authority to settle labor disputes',
              'Officials and judges treated work stoppages as threats to property and to commerce'
            ],
            correctAnswer: 3,
            explanation: 'Presidents sent troops in 1877 and 1894, and courts issued injunctions, sometimes under the Sherman Antitrust Act, on the ground that strikes obstructed commerce and the mails. No amendment outlawed unions, many workers did organize, and Congress passed no such law.'
          },
          {
            question: 'Which of the following was a major difference between the "new" immigration after 1880 and earlier immigration?',
            options: [
              'Earlier immigrants settled almost entirely on Western farms',
              'Most new arrivals came from southern and eastern Europe',
              'Newcomers after 1880 were mostly Protestants from Britain',
              'Earlier groups met no religious or ethnic hostility from natives'
            ],
            correctAnswer: 1,
            explanation: 'After 1880 most immigrants came from Italy, the Russian Empire, Austria-Hungary and Greece, and many were Catholic, Orthodox or Jewish. Earlier Irish and German immigrants also settled in cities and faced nativist hostility, as the Know-Nothings of the 1850s showed.'
          }
        ]
      }
    }
  ]
}
