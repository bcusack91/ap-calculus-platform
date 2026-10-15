export const macroInternationalTradeFinancePart2Data = {
  topicSlug: 'macro-international-trade-finance',
  sections: [
    {
      id: 'macroint2-intro',
      type: 'text' as const,
      content: `
# 🌐 International Trade & Finance

**Part 2 of 7 — Balance of Payments Accounts in Depth**

---

| Section |
|---------|
| 📖 The Two Accounts and Their Parts |
| Credits, Debits and Why the Total Is Zero |
| Classifying Transactions |
| Worked Example: Building a Balance of Payments |

> 🔑 **Key Concept:** The **balance of payments** records every transaction between a country's residents and the rest of the world. The **current account** records trade in goods and services, investment income and transfers. The **capital and financial account** records purchases and sales of assets. Because every international payment has two sides, the two accounts **sum to zero**.
`
    },
    {
      id: 'macroint2-accounts',
      type: 'text' as const,
      content: `
## 📖 The Two Accounts and Their Parts

### Current account

| Component | What it records | U.S. example |
|---|---|---|
| **Balance of trade in goods** | Goods exports − goods imports | Soybeans sold to China (export); cars bought from Germany (import) |
| **Balance of trade in services** | Service exports − service imports | A French student's tuition at a U.S. college (export); a U.S. tourist's hotel bill in Italy (import) |
| **Net investment income** | Interest, dividends and profits received from abroad − those paid abroad | Dividends a U.S. resident receives on British stock |
| **Net transfers** | One-way payments received − one-way payments sent (nothing is bought) | Money a worker in the U.S. sends to family abroad; foreign aid |

Goods and services together give the **balance of trade in goods and services**, which is **net exports**.

### Capital and financial account (CFA)

| Component | What it records | U.S. example |
|---|---|---|
| **Foreign direct investment** | Buying or building real assets, or a controlling stake, abroad | A Japanese automaker builds a plant in Kentucky |
| **Portfolio investment** | Buying stocks and bonds without control | A German bank buys U.S. Treasury bonds |

The capital and financial account records the **asset** itself. The **income** the asset later pays (interest, dividends, profits) goes in the **current account** under net investment income.

> 🔑 **AP Connection:** The AP course uses two names: **current account** and **capital and financial account**. Some textbooks shorten the second to "financial account" or "capital account." Whatever the name, it records the buying and selling of assets.
`
    },
    {
      id: 'macroint2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A U.S. tourist pays for a hotel stay in Spain. Where is this recorded in the U.S. balance of payments?',
            options: [
              'Current account, as an import of services',
              'Current account, as a one-way transfer',
              'Capital and financial account, as an outflow',
              'Current account, as an export of services'
            ],
            correctAnswer: 0,
            explanation: 'The tourist buys a service from a Spanish business, so it is a U.S. service import in the current account. A transfer would be a payment with nothing received in return, and no asset changes hands.'
          },
          {
            question: 'A U.S. resident receives \\$500 in interest on a bond issued by a Canadian company. In which account is the \\$500 recorded?',
            options: [
              'Net transfers in the current account',
              'Current account: net investment income',
              'Capital and financial account: portfolio investment',
              'Capital and financial account: direct investment'
            ],
            correctAnswer: 1,
            explanation: 'Interest is income earned on an asset, so it goes in the current account as investment income. Buying the bond in the first place would have been portfolio investment in the capital and financial account.'
          }
        ]
      }
    },
    {
      id: 'macroint2-signs',
      type: 'text' as const,
      content: `
## Credits, Debits and Why the Total Is Zero

| Entry | Rule | Examples for the U.S. |
|---|---|---|
| **Credit (+)** | Payment flows **into** the country | Exports; income received; transfers received; foreigners buying U.S. assets (**capital inflow**) |
| **Debit (−)** | Payment flows **out of** the country | Imports; income paid; transfers sent; Americans buying foreign assets (**capital outflow**) |

### Why the accounts sum to zero

Every transaction has two sides. Suppose a German company buys a \\$1 million U.S. machine and pays with dollars from a U.S. bank account it owns.

- U.S. export of goods: **+\\$1 million** (current account)
- Germany's U.S. bank deposit falls, meaning foreigners now hold \\$1 million fewer U.S. assets: **−\\$1 million** (capital and financial account)

The two entries cancel. Add up every transaction and

**Current account + Capital and financial account = 0**

So a **current account deficit** comes with a **capital and financial account surplus** of the same size: if a country buys more goods and services abroad than it sells, foreigners end up holding more of its assets. A current account surplus comes with a capital and financial account deficit: the country is a net buyer of foreign assets.
`
    },
    {
      id: 'macroint2-classify',
      type: 'text' as const,
      content: `
## Classifying Transactions

Each entry is from the U.S. point of view.

| # | Transaction | Account | Component | Sign |
|---|---|---|---|---|
| 1 | Boeing sells an airplane to an Indian airline | Current | Goods trade (export) | + |
| 2 | A U.S. family buys a German car | Current | Goods trade (import) | − |
| 3 | A U.S. tourist pays for a hotel in Italy | Current | Services trade (import) | − |
| 4 | A Japanese student pays tuition at a U.S. university | Current | Services trade (export) | + |
| 5 | A U.S. resident receives dividends on British stock | Current | Investment income | + |
| 6 | A U.S. firm pays interest to a Canadian bondholder | Current | Investment income | − |
| 7 | A worker in the U.S. sends money to family in Mexico | Current | Net transfers | − |
| 8 | A Chinese firm buys U.S. Treasury bonds | CFA | Portfolio investment (inflow) | + |
| 9 | A U.S. company builds a factory in Vietnam | CFA | Direct investment (outflow) | − |
| 10 | A Saudi investor buys an office building in New York | CFA | Direct investment (inflow) | + |

### Rules of thumb

- **Who pays whom?** If foreigners pay Americans, it is a credit, whether for a good, a service, income or a U.S. asset.
- **Asset or income?** Buying a bond, stock, factory or building is the CFA. The interest, dividends or profits it pays are the current account.
- **Tourism** counts as trade in services: a U.S. tourist abroad is a U.S. **import**; a foreign tourist in the U.S. is a U.S. **export**.
`
    },
    {
      id: 'macroint2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Classify each transaction for the United States.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'A Brazilian company buys shares of a U.S. tech firm (a non-controlling stake). This is recorded in the ___.',
            options: ['capital and financial account', 'current account', 'goods trade balance', 'net transfers line']
          },
          {
            label: 'A British tourist rents a car in Florida. For the U.S., this is a ___.',
            options: ['service export', 'service import', 'goods import', 'capital outflow']
          },
          {
            label: 'The U.S. government sends disaster aid to another country. It is recorded under ___.',
            options: ['net transfers', 'investment income', 'portfolio investment', 'goods trade']
          },
          {
            label: 'A U.S. investor buys bonds issued by the German government. For the U.S., this is a ___.',
            options: ['capital outflow', 'capital inflow', 'service import', 'transfer received']
          }
        ],
        correctAnswers: ['capital and financial account', 'service export', 'net transfers', 'capital outflow'],
        hint1: 'Shares are assets, even without control.',
        hint2: 'A foreigner is paying a U.S. business for a service.',
        hint3: 'Nothing is received in return.',
        explanation: 'Buying U.S. shares is a purchase of a U.S. asset, recorded in the capital and financial account. A foreign tourist renting a car buys a U.S. service, an export. Aid is a one-way transfer, and buying foreign bonds sends U.S. funds abroad as a capital outflow.'
      }
    },
    {
      id: 'macroint2-worked',
      type: 'text' as const,
      content: `
## Worked Example: Building a Balance of Payments

Country Arcadia's international transactions for one year, in billions of dollars:

| Item | Amount |
|---|---|
| Exports of goods | \\$400 |
| Imports of goods | \\$520 |
| Exports of services | \\$150 |
| Imports of services | \\$90 |
| Investment income received from abroad | \\$60 |
| Investment income paid to foreigners | \\$80 |
| Net transfers | −\\$20 |
| Arcadians' purchases of foreign assets | \\$200 |
| Foreigners' purchases of Arcadian assets | ? |

**Step 1: Balance of trade in goods** = 400 − 520 = **−\\$120 billion** (a goods trade deficit).

**Step 2: Balance of trade in goods and services** = −120 + (150 − 90) = −120 + 60 = **−\\$60 billion**. The services surplus shrinks the deficit.

**Step 3: Net investment income** = 60 − 80 = **−\\$20 billion**.

**Step 4: Current account** = −60 + (−20) + (−20) = **−\\$100 billion**.

**Step 5: Capital and financial account** must be **+\\$100 billion**, so that the two accounts sum to zero.

**Step 6: Foreigners' purchases of Arcadian assets.** The CFA balance = inflows − outflows, so 100 = inflows − 200, and inflows = **\\$300 billion**.

Arcadia finances its current account deficit by selling \\$100 billion more in assets to foreigners than it buys from them.
`
    },
    {
      id: 'macroint2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Country Belmar, in billions of dollars: goods exports \\$250; goods imports \\$200; service exports \\$40; service imports \\$70; investment income received \\$30; investment income paid \\$10; net transfers −\\$15.

**1)** What is Belmar's balance of trade in goods and services?

**2)** What is Belmar's current account balance?

**3)** What is Belmar's capital and financial account balance?

Enter numbers only; use a minus sign for a deficit.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['20', '25', '-25'],
        hint1: '(250 − 200) + (40 − 70).',
        hint2: 'Add net investment income (30 − 10) and net transfers (−15).',
        hint3: 'The two accounts sum to zero.',
        explanation: '1) 50 + (−30) = 20. 2) 20 + 20 − 15 = 25, a current account surplus. 3) The capital and financial account is −25: Belmar is a net buyer of foreign assets.'
      }
    },
    {
      id: 'macroint2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A country\'s current account shows a surplus of \\$40 billion. Which statement must be true?',
            options: [
              'Foreigners are net buyers of \\$40 billion of its assets',
              'Its government budget has a \\$40 billion surplus',
              'Its residents are net buyers of \\$40 billion of foreign assets',
              'Its goods exports exceed goods imports by \\$40 billion'
            ],
            correctAnswer: 2,
            explanation: 'A \\$40 billion current account surplus means a \\$40 billion capital and financial account deficit, so residents buy \\$40 billion more in foreign assets than foreigners buy of theirs. The goods balance alone could differ from \\$40 billion once services, income and transfers are counted.'
          },
          {
            question: 'Which transaction is a credit in the U.S. capital and financial account?',
            options: [
              'A U.S. firm buys a Dutch hotel',
              'A Dutch tourist stays in a U.S. hotel',
              'A U.S. hotel pays a Dutch lender interest',
              'A Dutch firm buys a U.S. hotel'
            ],
            correctAnswer: 3,
            explanation: 'A foreign purchase of a U.S. asset brings payment in, a capital inflow and a CFA credit. A U.S. purchase of a Dutch hotel is a CFA debit, the tourist\'s stay is a service export, and interest paid abroad is a current account debit.'
          },
          {
            question: 'In the Arcadia example, suppose services exports rise by \\$30 billion and nothing else changes except foreigners\' purchases of Arcadian assets. What is the new current account balance?',
            options: [
              '−\\$70 billion',
              '−\\$130 billion',
              '−\\$90 billion',
              '+\\$30 billion'
            ],
            correctAnswer: 0,
            explanation: 'Higher service exports add \\$30 billion to the current account: −100 + 30 = −70. The capital and financial account surplus then shrinks to \\$70 billion to keep the total at zero.'
          }
        ]
      }
    }
  ]
}
