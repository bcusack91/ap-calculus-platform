export const hgGlobalizationTradePart2Data = {
  topicSlug: 'hg-globalization-trade',
  sections: [
    {
      id: 'hgglobal2-intro',
      type: 'text' as const,
      content: `
# 🌍 Globalization & Trade

**Part 2 of 7 — Why Countries Trade: Complementarity, Comparative Advantage and Trade Agreements**

---

| Section |
|---------|
| 📖 Complementarity and Comparative Advantage |
| Worked Example: Opportunity Cost |
| Neoliberalism and Protectionism |
| From GATT to the WTO and Regional Trade Agreements |

> 🔑 **Key Concept:** Countries trade because places differ in what they have and what they make cheaply. **Complementarity** explains why a trade link exists at all; **comparative advantage** explains what each partner should specialize in. Governments then shape trade with policy, from **neoliberal** free-trade rules to **protectionist** tariffs (CED Topic 7.6). The models work at the **national scale**, but their gains and losses land in particular regions and towns.
`
    },
    {
      id: 'hgglobal2-advantage',
      type: 'text' as const,
      content: `
## 📖 Complementarity and Comparative Advantage

**Complementarity** exists when one place has a surplus of something another place lacks and wants. Geographer Edward Ullman (1956) named it the first condition for any spatial interaction. Brazil grows far more coffee than it drinks, and Germany has a large coffee market but grows none, so the two places complement each other.

Complementarity explains that trade happens. It does not tell a country **what** to make when it could make many things. That is the job of two kinds of advantage:

| Idea | Meaning | Test |
|---|---|---|
| **Absolute advantage** | A country can make **more** of a good with the same resources | Compare output per worker |
| **Comparative advantage** | A country gives up **less** of other goods to make this good (a lower opportunity cost) | Compare opportunity costs |

British economist **David Ricardo** set out comparative advantage in **1817** with England's cloth and Portugal's wine. His surprising result: even a country that is better at making **everything** still gains by specializing in what it is *relatively* best at and trading for the rest.

## Worked Example: Opportunity Cost

Two **hypothetical** countries can each use one worker-day of labor to make either TVs or shirts:

| Country | TVs per worker-day | Shirts per worker-day |
|---|---|---|
| **A** | 10 | 20 |
| **B** | 2 | 16 |

**Step 1 — Absolute advantage.** A makes more TVs (10 vs. 2) **and** more shirts (20 vs. 16), so A has the absolute advantage in both goods.

**Step 2 — Opportunity cost of one TV** (shirts given up):
- Country A: $20 \\div 10 = 2$ shirts per TV
- Country B: $16 \\div 2 = 8$ shirts per TV

**Step 3 — Opportunity cost of one shirt** (TVs given up):
- Country A: $10 \\div 20 = 0.5$ TV per shirt
- Country B: $2 \\div 16 = 0.125$ TV per shirt

**Step 4 — Assign comparative advantage.** A gives up fewer shirts to make a TV (2 < 8), so A specializes in **TVs**. B gives up less TV output to make a shirt (0.125 < 0.5), so B specializes in **shirts**.

**Step 5 — Show both gain.** Suppose they trade at **1 TV for 4 shirts**. A now gets 4 shirts for each TV instead of the 2 it could make at home. B now pays 4 shirts for a TV instead of the 8 it would give up at home. Any price between 2 and 8 shirts per TV leaves both countries better off.

### Limits of the Model
- It assumes workers move easily from one industry to another. In reality a laid-off textile worker in one town may not find work in the industry that grew.
- It ignores **transport costs**, which can erase small cost differences.
- Comparative advantage **changes**. South Korea exported wigs and textiles in the 1960s and ships, cars and microchips today, because it invested in education and industry.
- Specializing in raw commodities can lock a country into low-value exports, the pattern Wallerstein's periphery describes (Part 1).
`
    },
    {
      id: 'hgglobal2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

One worker-day of labor makes:

| Country | Coffee (bags) | Bicycles |
|---|---|---|
| **P** | 20 | 5 |
| **Q** | 8 | 8 |

**1)** What is the opportunity cost of one bicycle in Country P, in bags of coffee?

**2)** What is the opportunity cost of one bicycle in Country Q, in bags of coffee?

**3)** What is the opportunity cost of one bag of coffee in Country P, in bicycles? (Write a decimal.)
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '1', '0.25'],
        hint1: 'Divide the coffee P can make by the bicycles P can make: 20 ÷ 5.',
        hint2: 'Q makes equal amounts of each good.',
        hint3: 'Flip the first ratio: 5 ÷ 20.',
        explanation: '1) 20 ÷ 5 = 4 bags of coffee per bicycle. 2) 8 ÷ 8 = 1 bag per bicycle. 3) 5 ÷ 20 = 0.25 bicycle per bag. Coffee is cheaper to make in P (0.25 bicycle vs. 1 in Q), so P has the comparative advantage in coffee, and Q has it in bicycles (1 bag vs. 4).'
      }
    },
    {
      id: 'hgglobal2-policy',
      type: 'text' as const,
      content: `
## Neoliberalism and Protectionism

**Neoliberalism** is a set of policies, influential since the 1980s, that favor markets over government control: lower tariffs, **privatization** of state-owned firms, **deregulation**, smaller government budgets and openness to foreign investment. In **1989** economist John Williamson called the reform list favored by Washington-based institutions the **Washington Consensus**. Part 3 shows how the IMF and World Bank attached these policies to loans.

**Protectionism** is the opposite approach: shielding domestic producers from foreign competition.

| Tool | How it works | Example of the idea |
|---|---|---|
| **Tariff** | A tax on imports raises their price | A 25% duty on imported steel |
| **Quota** | A limit on the quantity of an import | Only 50,000 foreign cars may enter each year |
| **Subsidy** | Government payments lower domestic producers' costs | Support payments to farmers |
| **Nontariff barrier** | Rules or standards that make imports harder to sell | Strict labeling or safety rules |

Protection can save jobs in one region and help a young industry grow, but it raises prices for consumers and invites **retaliation**. After the U.S. **Smoot-Hawley Tariff Act (1930)** raised tariffs, trading partners raised theirs, and world trade fell sharply during the Great Depression. That experience shaped the postwar push to lower trade barriers.

> 🔑 **AP Connection:** Neoliberal and protectionist policies are choices about scale. Free trade rules are set at the **global or regional** scale, while protection is a **national** decision, usually defended with **local** job losses.
`
    },
    {
      id: 'hgglobal2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country A can make more TVs and more shirts per worker than Country B. Why can both countries still gain from trade?',
            options: [
              'Each one gives up less of the other good to make the good it exports',
              'Country A holds an absolute advantage, so it should make both goods',
              'Country B can charge higher prices because its workers are slower',
              'Trade lets both countries avoid paying any opportunity cost at all'
            ],
            correctAnswer: 0,
            explanation: 'Gains come from comparative advantage: each country exports the good it makes at the lower opportunity cost. Absolute advantage in both goods does not mean A should make both, and trade shifts opportunity costs rather than removing them.'
          },
          {
            question: 'Which policy package best reflects neoliberalism?',
            options: [
              'Raising tariffs to shield young domestic industries from imports',
              'Selling state firms to private owners and cutting import tariffs',
              'Nationalizing foreign mines and setting food prices by law',
              'Requiring that all exports pass through a state marketing board'
            ],
            correctAnswer: 1,
            explanation: 'Neoliberal policy favors markets: privatization and lower trade barriers. Raising tariffs is protectionism, and nationalizing mines, fixing prices and state export boards all expand government control.'
          },
          {
            question: 'A country allows only 50,000 imported cars to enter each year. This trade barrier is a:',
            options: [
              'Quota',
              'Tariff',
              'Subsidy',
              'Embargo'
            ],
            correctAnswer: 0,
            explanation: 'A quota limits the quantity of an import. A tariff taxes imports without capping their number, a subsidy pays domestic producers, and an embargo bans trade entirely.'
          }
        ]
      }
    },
    {
      id: 'hgglobal2-agreements',
      type: 'text' as const,
      content: `
## From GATT to the WTO

- **GATT (1947):** the General Agreement on Tariffs and Trade, signed by 23 countries, cut tariffs through a series of negotiating rounds.
- **WTO (1995):** the **World Trade Organization** took over from GATT as the organization that oversees world trade rules on January 1, 1995. It has more than 160 members, covers services and intellectual property as well as goods, and runs a **dispute settlement** system. China joined in 2001.
- **Critiques:** protesters at the 1999 Seattle meeting argued that WTO rules favor wealthy countries and transnational corporations over workers and the environment. The Doha round of talks, launched in 2001, stalled over farm subsidies.

**Data:** world trade in goods and services rose from about **25% of world GDP in 1970** to about **60% in 2008** (World Bank), a measure of how much more interconnected national economies became.

## Regional Trade Agreements

A **trade bloc** is a group of countries that lowers trade barriers among its members. Blocs differ in how deeply they integrate:

| Type | Internal tariffs | Common tariff on outsiders? | Workers and capital move freely? |
|---|---|---|---|
| **Free trade area** | Removed | No, each member sets its own | No |
| **Customs union** | Removed | Yes | No |
| **Common market** | Removed | Yes | Yes |

| Agreement | Members and dates | Trade features |
|---|---|---|
| **NAFTA → USMCA** | U.S., Canada, Mexico; NAFTA 1994, replaced by USMCA in 2020 | Free trade area; USMCA raised the share of a car's content that must come from the region to 75% (from 62.5%) and added wage rules for auto content |
| **EU single market** | 27 European countries; single market since 1993 | Common market: goods, services, capital and people move freely |
| **MERCOSUR** | Founded in 1991 by Argentina, Brazil, Paraguay and Uruguay | Customs union with a common external tariff |
| **ASEAN Free Trade Area** | Southeast Asian countries; ASEAN founded 1967, free trade area agreed 1992 | Free trade area cutting most internal tariffs |

**Data:** in 2023 Mexico passed China to become the largest U.S. trading partner in goods (U.S. Census Bureau), a shift helped by USMCA and by firms moving production closer to the U.S. market.

> 🔑 **AP Connection:** This topic treats the EU, USMCA, MERCOSUR and ASEAN as **trade agreements**. Their political roles as supranational organizations belong to political geography. On a trade question, explain how removing tariffs changes **where production locates**.
`
    },
    {
      id: 'hgglobal2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Members drop tariffs on each other\'s goods and charge one shared tariff on outside imports, but labor and capital cannot move freely among them. This is a:',
            options: [
              'Free trade area',
              'Customs union',
              'Common market',
              'Bilateral pact'
            ],
            correctAnswer: 1,
            explanation: 'A customs union adds a common external tariff to free internal trade. A free trade area lacks the shared outside tariff, and a common market also lets labor and capital move freely.'
          },
          {
            question: 'Which change did the USMCA make to the rules NAFTA had set?',
            options: [
              'Raised the share of a car that must be made in North America',
              'Created a single currency for the United States, Canada and Mexico',
              'Allowed workers to move freely across all three national borders',
              'Added Central American countries as full members of the agreement'
            ],
            correctAnswer: 0,
            explanation: 'USMCA raised regional content rules for autos from 62.5% to 75%. It is a free trade area, so it has no common currency, no free movement of workers and no new members.'
          },
          {
            question: 'A mill town loses its textile plant after a trade agreement shifts clothing production abroad, even though the country\'s total output rises. Which weakness of comparative advantage does this show?',
            options: [
              'Benefits spread across a country, but losses hit particular towns',
              'The model assumes that transport costs grow with every mile goods travel',
              'The model applies only to trade between neighboring countries',
              'Specializing always lowers the total output of both partners'
            ],
            correctAnswer: 0,
            explanation: 'The model predicts gains for the country as a whole but assumes displaced workers can shift to new jobs, so costs concentrate in places that lose an industry. The model actually ignores transport costs, applies to any partners and predicts higher total output.'
          }
        ]
      }
    }
  ]
}
