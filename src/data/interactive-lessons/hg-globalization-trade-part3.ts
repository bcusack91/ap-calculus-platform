export const hgGlobalizationTradePart3Data = {
  topicSlug: 'hg-globalization-trade',
  sections: [
    {
      id: 'hgglobal3-intro',
      type: 'text' as const,
      content: `
# 🌍 Globalization & Trade

**Part 3 of 7 — Global Finance, Debt and Interdependence**

---

| Section |
|---------|
| 📖 The IMF and the World Bank |
| Debt, Structural Adjustment and Austerity |
| Worked Example: The Debt-Service Ratio |
| Microlending: Finance from the Bottom Up |
| 2008: A Crisis That Crossed Every Border |

> 🔑 **Key Concept:** Trade needs money that moves across borders. International lenders, national debts and private banks tie economies together so tightly that a crisis in one place can spread to the whole world. The same ties let lenders shape the policies of borrowing countries (CED Topic 7.6). Read every case at two scales: the **national** policy decision and the **local** households who feel it.
`
    },
    {
      id: 'hgglobal3-institutions',
      type: 'text' as const,
      content: `
## 📖 The IMF and the World Bank

In July **1944**, delegates from 44 Allied countries met at **Bretton Woods**, New Hampshire, to plan the postwar economy. They created two institutions, both headquartered in Washington, D.C.:

| | International Monetary Fund (IMF) | World Bank |
|---|---|---|
| **Original purpose** | Keep exchange rates stable and lend to countries that cannot pay for imports or debts | Lend to rebuild war-damaged Europe, then to finance development |
| **Kind of lending** | Short-term rescue loans during a balance-of-payments crisis | Long-term loans and grants for projects such as dams, roads, schools and clinics |
| **Who decides** | Votes weighted by each member's financial contribution | Votes weighted by each member's financial contribution |

**Weighted voting matters.** The United States holds about 16% of IMF votes, and the most important IMF decisions need 85%, so the United States can block them alone. Critics argue that this gives core countries control over the rules that periphery borrowers must follow.

## Debt, Structural Adjustment and Austerity

In the 1970s, banks lent heavily to Latin American and African governments. When U.S. interest rates soared and commodity prices fell, borrowers could not keep up. In **August 1982 Mexico** announced it could not make its debt payments, setting off the **Latin American debt crisis** and a 1980s "lost decade" of slow growth in the region.

The IMF and World Bank offered new loans with conditions attached, called **structural adjustment programs (SAPs)**. The conditions followed the neoliberal list from Part 2:

| Condition | Intended effect | Common criticism |
|---|---|---|
| Cut government spending | Shrink deficits so debts can be paid | Cuts often fell on health, education and food subsidies |
| Privatize state-owned firms | Make industries more efficient | Layoffs, and foreign buyers gained control of key assets |
| Lower tariffs and welcome foreign investment | Grow exports to earn hard currency | Young local industries could not compete with imports |
| Devalue the currency | Make exports cheaper abroad | Imported food and fuel became more expensive |

**Austerity** is the policy of cutting public spending and raising taxes to reduce debt. It reached Europe after 2009. **Greece** received rescue loans from eurozone governments and the IMF in **2010**, with further programs in 2012 and 2015, on condition that it cut pensions, public wages and services. Its economy shrank by roughly a quarter between 2008 and 2013, and unemployment peaked at about **27% in 2013** (Eurostat). Supporters say the reforms were needed to restore trust in Greek debt; critics say the cuts deepened the recession.

**Debt relief.** In **1996** the IMF and World Bank launched the **Heavily Indebted Poor Countries (HIPC) Initiative**. About three dozen countries, most of them in Sub-Saharan Africa, have had large parts of their debts canceled, on condition that they adopt poverty-reduction plans.

> 🔑 **AP Connection:** For an FRQ on structural adjustment, give both sides: SAPs aimed to stabilize economies and attract investment, but they often cut the social services that poor households depend on.
`
    },
    {
      id: 'hgglobal3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country cannot pay for its imports, and its currency is collapsing. Which institution was set up mainly to lend in this situation?',
            options: [
              'The International Monetary Fund',
              'The World Bank',
              'The World Trade Organization',
              'The United Nations Development Programme'
            ],
            correctAnswer: 0,
            explanation: 'The IMF makes short-term loans to countries in balance-of-payments crises. The World Bank funds long-term development projects, and the WTO sets trade rules rather than lending money.'
          },
          {
            question: 'Which condition was typical of structural adjustment programs in the 1980s and 1990s?',
            options: [
              'Cuts to government spending',
              'New tariffs on imported goods',
              'Nationalization of large banks',
              'Fixed prices for staple foods'
            ],
            correctAnswer: 0,
            explanation: 'Structural adjustment followed neoliberal policy, so it required spending cuts, lower tariffs and privatization. New tariffs, nationalized banks and fixed food prices are the opposite of what lenders demanded.'
          },
          {
            question: 'Which outcome in Greece after 2010 do critics most often cite against austerity?',
            options: [
              'Joblessness soared as deep spending cuts prolonged the recession',
              'Tariffs on European imports rose and cut Greek trade with neighbors',
              'The IMF took ownership of the Greek central bank and its reserves',
              'Greece left the eurozone and printed a new national currency'
            ],
            correctAnswer: 0,
            explanation: 'Unemployment peaked at about 27% in 2013 as spending cuts reduced demand. Greece stayed in the eurozone, could not set its own tariffs as an EU member, and kept control of its central bank.'
          }
        ]
      }
    },
    {
      id: 'hgglobal3-ratio',
      type: 'text' as const,
      content: `
## Worked Example: The Debt-Service Ratio

The **debt-service ratio** compares what a country must pay each year on its foreign debt (interest plus principal) with what it earns from exports:

$$\\text{Debt-service ratio} = \\frac{\\text{annual debt payments}}{\\text{annual export earnings}} \\times 100$$

**Hypothetical Country D** exports copper and owes \\$5 billion a year on its foreign loans.

1. **A normal year:** copper exports earn \\$20 billion. Ratio: $\\frac{5}{20} \\times 100 = 25\\%$. One dollar in four of export earnings goes to lenders.
2. **Copper prices fall 40%:** export earnings drop to \\$12 billion, but the debt payment does not change. Ratio: $\\frac{5}{12} \\times 100 \\approx 42\\%$.
3. **What it means:** the country now has far less foreign currency for imported medicine, fuel and machinery. If it borrows again to cover the gap, its debt grows.

**Geographic lesson:** a country that depends on one raw export is exposed to price swings it cannot control, so its debt burden can jump even when nothing changes at home. This is why debt crises have hit commodity exporters in Latin America and Sub-Saharan Africa hardest.

**Limitation:** the ratio shows pressure in one year, not whether the borrowed money built roads, ports or schools that will raise future exports.
`
    },
    {
      id: 'hgglobal3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

A country earns \\$40 billion a year from exports and pays \\$8 billion a year on its foreign debt. Enter percentages as numbers only.

**1)** What is its debt-service ratio?

**2)** Export earnings fall to \\$32 billion while debt payments stay the same. What is the new ratio?

**3)** Debt relief then cuts the annual payment in half, with exports still at \\$32 billion. What is the ratio now?
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '25', '12.5'],
        hint1: 'Divide 8 by 40 and multiply by 100.',
        hint2: 'Only the denominator changes: 8 ÷ 32.',
        hint3: 'Half of the \\$8 billion payment is \\$4 billion.',
        explanation: '1) 8 ÷ 40 × 100 = 20%. 2) 8 ÷ 32 × 100 = 25%. 3) 4 ÷ 32 × 100 = 12.5%. Falling export prices raised the burden, and relief cut it below its starting level.'
      }
    },
    {
      id: 'hgglobal3-micro-crisis',
      type: 'text' as const,
      content: `
## Microlending: Finance from the Bottom Up

The IMF and World Bank lend **top-down**, to governments, for national programs. **Microlending** (microcredit) works **bottom-up**: very small loans to individuals, mostly women, who lack the collateral banks require, often backed by small borrower groups instead. The **Grameen Bank** in Bangladesh (a formal bank since 1983) is the best-known lender; its history and its effects on women are covered in Industrialization & Development, Part 5.

| Top-down lending (IMF, World Bank) | Bottom-up lending (microcredit) |
|---|---|
| Large loans to national governments | Loans of a few dollars to a few hundred dollars to individuals |
| Conditions on national policy | Group meetings and peer support in place of collateral |
| Can reshape a whole economy, for good or ill | Can help a household business, but cannot fix national problems such as poor roads, weak courts or foreign debt |

**Evidence:** a 2015 review of six randomized studies on four continents found more business activity among borrowers but no large rise in average household income, and high interest rates can trap some borrowers in debt.

## 2008: A Crisis That Crossed Every Border

The **global financial crisis** shows **interdependence**, the condition in which the economies of different places depend on one another.

1. **Local start:** U.S. housing prices had soared, especially in places such as Nevada, Arizona and Florida, and many risky (subprime) mortgages were made.
2. **Global spread:** banks bundled those mortgages into securities and sold them to investors around the world.
3. **Collapse:** when home prices fell and borrowers defaulted, the securities lost value. The investment bank **Lehman Brothers** failed in **September 2008**, and credit froze worldwide.
4. **Trade shock:** businesses and consumers cut spending, and the volume of world merchandise trade fell about **12% in 2009** (WTO). Export-oriented economies such as Germany, Japan and China saw orders vanish; Iceland's three largest banks collapsed in October 2008.

**Scale:** a problem in **local** housing markets became a **global** recession because banks and trade linked every region.
`
    },
    {
      id: 'hgglobal3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which statement best summarizes what large randomized studies have found about microlending?',
            options: [
              'It raised business activity but rarely transformed household income',
              'It ended extreme poverty in nearly every place it was offered',
              'It harmed borrowers so badly that most lenders were shut down',
              'It worked only for male borrowers who already owned farmland'
            ],
            correctAnswer: 0,
            explanation: 'Six randomized studies published together in 2015 found modest gains in business activity but no large rise in average income. Microlending did not end poverty, most lenders kept operating, and most borrowers are women.'
          },
          {
            question: 'Which sequence best traces how the 2008 crisis reached export-oriented economies?',
            options: [
              'Home loan defaults, frozen credit, weak demand, fewer imports',
              'Rising tariffs, frozen credit, falling demand, fewer imports',
              'Mortgage defaults, rising wages, higher demand, more imports',
              'Oil embargo, frozen credit, rising consumer demand, more imports'
            ],
            correctAnswer: 0,
            explanation: 'Defaults on U.S. mortgages froze lending, consumers and firms spent less, and imports from export economies fell. The crisis did not begin with tariffs or an oil embargo, and demand fell rather than rose.'
          },
          {
            question: 'Why is the 2008 crisis a strong example of global interdependence?',
            options: [
              'Local losses spread through linked banks and trade',
              'Each country\'s banks were owned by a single global firm',
              'Countries with the most trade suffered no losses at all',
              'Prices rose evenly everywhere because of one world currency'
            ],
            correctAnswer: 0,
            explanation: 'Losses in U.S. housing markets traveled through banks that owned the securities and through trade as demand fell. No single firm owned every bank, the most trade-dependent economies were hit hardest, and there is no world currency.'
          }
        ]
      }
    }
  ]
}
