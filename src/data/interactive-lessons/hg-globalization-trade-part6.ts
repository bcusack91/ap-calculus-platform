export const hgGlobalizationTradePart6Data = {
  topicSlug: 'hg-globalization-trade',
  sections: [
    {
      id: 'hgglobal6-intro',
      type: 'text' as const,
      content: `
# 🌍 Globalization & Trade

**Part 6 of 7 — AP Exam Practice: Reading a Country's Path into the World Economy**

---

| Section |
|---------|
| 📖 How AP Questions Test This Topic |
| Stimulus: Novaria, 1985 and 2020 |
| Stimulus Questions and Calculations |
| FRQ Practice with Model Answers |
| AP-Style Review |

> 🔑 **Key Concept:** Exam questions on CED Topics 7.6–7.8 rarely ask for a definition alone. They give you a **data table, map or passage** and ask you to connect a change in the data to a process (trade policy, debt, restructuring or sustainability) and to say at what **scale** it operates.
`
    },
    {
      id: 'hgglobal6-stimulus',
      type: 'text' as const,
      content: `
## 📖 How AP Questions Test This Topic

| Task verb | What it requires | Weak answer | Strong answer |
|---|---|---|---|
| **Identify** | Name the concept or evidence | "Trade changed." | "The average tariff fell from 35% to 6%, a neoliberal policy." |
| **Describe** | Give the relevant features | "The zone helped." | "The export processing zone let firms import parts duty-free and export finished goods." |
| **Explain** | Show **how or why**, with a cause and its effect | "Jobs went up because of the zone." | "Duty-free imports and lower wages cut costs, so foreign firms built assembly plants, raising manufacturing employment." |

## Stimulus: Novaria, 1985 and 2020

The table describes **Novaria**, a **hypothetical** middle-income coastal country.

| Indicator | 1985 | 2020 |
|---|---|---|
| Coffee and copper as a share of exports | 80% | 25% |
| Exports as a share of GDP | 15% | 45% |
| Average tariff on imports | 35% | 6% |
| Foreign direct investment received (per year) | \\$0.2 billion | \\$9 billion |
| Workers in manufacturing | 0.4 million | 2.1 million |
| Debt-service ratio | 38% | 12% |

**Timeline:**
- **1987:** after missing debt payments, Novaria accepts an IMF loan conditioned on cutting tariffs, selling state firms and reducing spending.
- **1995:** the government opens an **export processing zone** at the port city of Lira. Foreign firms assemble electronics and auto parts there for export.
- **2002:** Novaria joins the WTO.
- **2008–2009:** orders from the Lira zone fall by about a third.
- **2010s:** coffee farms in the highlands lose workers to Lira; some abandoned farmland regrows as forest, and ecotourism lodges open nearby.

### Reading the Stimulus Before the Questions
1. **Policy change:** the tariff cut and the 1987 loan conditions show **neoliberal structural adjustment**.
2. **Restructuring:** manufacturing workers rose more than fivefold, and exports shifted from two commodities to manufactured goods, the profile of a **newly industrialized country**.
3. **Debt:** the debt-service ratio fell because export earnings grew and diversified, not because the debt disappeared.
4. **Scale warning:** every figure is a **national** total. The table cannot show whether Lira and the highlands gained equally.
`
    },
    {
      id: 'hgglobal6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Stimulus Questions** 🎯

Use the Novaria table and timeline.
      `,
      exercise: {
        questions: [
          {
            question: 'Which change in the table is the strongest evidence that Novaria adopted neoliberal policies?',
            options: [
              'Workers in manufacturing rose from 0.4 to 2.1 million',
              'The average import tariff fell from 35% to 6%',
              'Coffee and copper fell from 80% to 25% of exports',
              'The debt-service ratio fell from 38% to 12%'
            ],
            correctAnswer: 1,
            explanation: 'Lowering trade barriers is a core neoliberal policy, and the tariff is a policy choice the government controls. Manufacturing jobs, export mix and the debt ratio are outcomes that many causes could produce.'
          },
          {
            question: 'Which factor best explains why foreign firms built factories in the Lira zone after 1995?',
            options: [
              'Firms wanted to be close to the coffee farms in the highlands',
              'Duty-free imports of parts and lower labor costs cut production costs',
              'The zone banned imported parts, so firms had to buy local inputs',
              'Tariffs inside the zone were higher than in the rest of Novaria'
            ],
            correctAnswer: 1,
            explanation: 'Export processing zones attract assembly plants by waiving duties on imported parts, and lower wages reduce costs further. Such zones encourage imported inputs rather than banning them, and their tariffs are lower, not higher.'
          },
          {
            question: 'Orders from the Lira zone fell by about a third in 2008–2009. This best illustrates:',
            options: [
              'Interdependence',
              'Economies of scale',
              'Comparative advantage',
              'Time-space compression'
            ],
            correctAnswer: 0,
            explanation: 'The zone depends on buyers abroad, so the global financial crisis cut its orders. Economies of scale, comparative advantage and time-space compression explain why the zone grew, not why its orders suddenly fell.'
          }
        ]
      }
    },
    {
      id: 'hgglobal6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

Use the Novaria table. Enter numbers only.

**1)** Manufacturing employment in 2020 is how many times its 1985 level?

**2)** By how many percentage points did the average import tariff fall?

**3)** Novaria earned \\$30 billion from exports in 2020. Using the debt-service ratio, how many billion dollars did it pay on its foreign debt that year?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5.25', '29', '3.6'],
        hint1: 'Divide 2.1 million by 0.4 million.',
        hint2: 'Subtract the 2020 rate from the 1985 rate.',
        hint3: 'Debt payments = ratio × export earnings: 0.12 × 30.',
        explanation: '1) 2.1 ÷ 0.4 = 5.25 times. 2) 35% − 6% = 29 percentage points. 3) 0.12 × \\$30 billion = \\$3.6 billion.'
      }
    },
    {
      id: 'hgglobal6-frq',
      type: 'text' as const,
      content: `
## FRQ Practice with Model Answers

Try each part before reading the model.

**A. Identify one neoliberal policy shown in the stimulus.**
> *Model:* Novaria cut its average import tariff from 35% to 6%.

**B. Describe how the 1987 IMF loan is an example of structural adjustment.**
> *Model:* The loan came with conditions requiring Novaria to cut tariffs, privatize state firms and reduce government spending, which are the market-oriented policies of a structural adjustment program.

**C. Explain how comparative advantage helps account for the change in Novaria's exports.**
> *Model:* Lower wages gave Novaria a lower opportunity cost in labor-intensive assembly than high-wage countries, so once tariffs fell and the zone opened, it specialized in assembling electronics and auto parts, and manufactured goods replaced coffee and copper as its main exports.

**D. Explain why Novaria's debt-service ratio fell between 1985 and 2020.**
> *Model:* Export earnings grew from manufactured goods, so the same debt payments took a much smaller share of export income. Because exports no longer depend on two commodities, a fall in copper prices also hurts debt repayment less.

**E. Explain how the change in orders in 2008–2009 illustrates global interdependence.**
> *Model:* The Lira zone sells mainly to foreign buyers, so when the financial crisis cut spending in core countries, orders for its electronics and auto parts fell, showing that Novaria's jobs depend on demand in other places.

**F. Explain one limitation of using the national data in the table to judge whether globalization benefited Novaria's people.**
> *Model:* National totals hide variation at the regional and local scales: growth may be concentrated in Lira while highland coffee areas lose workers, and the table gives no data on wages, working conditions or income distribution.

**G. Explain the degree to which Novaria's development since 1985 has been sustainable.**
> *Model:* Partly sustainable. Economically, a diverse export base is more stable than reliance on two commodities, and regrowing forest supports ecotourism. However, the zone's dependence on foreign orders leaves jobs vulnerable to crises, and factory growth in Lira may raise pollution, so environmental and social gains are uneven.

### Why These Answers Score
- Each **explain** links evidence to a concept with *so* or *because*.
- Each cites **specific data** from the stimulus (35% to 6%, 0.4 to 2.1 million).
- Part F names the **scale** problem directly, and Part G gives a position with evidence on **both** sides.
`
    },
    {
      id: 'hgglobal6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A geographer finds that a country\'s GDP per capita doubled after it opened a special economic zone, but rural provinces saw little change. Which conclusion is best supported?',
            options: [
              'Growth from the zone was spread evenly across every province',
              'National averages can hide uneven regional benefits from trade',
              'Rural provinces gained more from the zone than its host city',
              'GDP per capita mainly measures conditions in rural provinces'
            ],
            correctAnswer: 1,
            explanation: 'A national average rose while rural areas stayed the same, so the gains must be concentrated in some regions, most likely around the zone. The evidence contradicts even spreading and rural gains.'
          },
          {
            question: 'Which policy would a government most likely use to create a growth pole?',
            options: [
              'Spreading small grants evenly among all of its rural villages',
              'Raising tariffs on every imported good to protect farmers',
              'Concentrating investment in a key industry in one chosen city',
              'Moving the national capital to the largest existing city'
            ],
            correctAnswer: 2,
            explanation: 'A growth pole concentrates investment in a key industry at one place and expects growth to spread outward. Spreading grants evenly is the opposite strategy, and tariffs or a capital move do not target a lead industry.'
          },
          {
            question: 'An FRQ asks you to "explain" how maquiladoras affect Mexican border cities. Which response would earn the point?',
            options: [
              'Maquiladoras are assembly plants in Mexican cities along the U.S. border',
              'Maquiladoras add factory jobs, so migrants move north and border cities grow',
              'Maquiladoras affect border cities in many important economic and social ways',
              'Maquiladoras began under a 1965 program and still operate in Mexico today'
            ],
            correctAnswer: 1,
            explanation: 'An explanation needs a cause and its effect: new factory jobs draw migrants, so the cities grow. The other responses define, assert or give a date without showing how the effect happens.'
          }
        ]
      }
    }
  ]
}
