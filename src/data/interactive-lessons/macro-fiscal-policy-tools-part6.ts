export const macroFiscalPolicyToolsPart6Data = {
  topicSlug: 'macro-fiscal-policy-tools',
  sections: [
    {
      id: 'macrofis6-tools-intro',
      type: 'text' as const,
      content: `
# 🛠️ Fiscal Policy Tools

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How Deficits and Crowding Out Appear on the Exam |
| FRQ Practice Set 1: Deficit Spending and Growth |
| FRQ Practice Set 2: Budget and Debt Calculations |
| Exam-Style Practice |

> 🔑 **Key Concept:** Free-response questions on this topic usually run a chain: **deficit → loanable funds graph → real interest rate → private investment → long-run growth**. Calculation questions ask for a budget balance, the change in the debt, interest costs or a debt-to-GDP ratio. Each step depends on getting the direction of the step before it right.
`
    },
    {
      id: 'macrofis6-tools-format',
      type: 'text' as const,
      content: `
## 📖 How Deficits and Crowding Out Appear on the Exam

| Question asks… | Strong answer includes… |
|---|---|
| "Show the effect of government borrowing on the loanable funds market" | Real interest rate on the vertical axis; demand for loanable funds shifts **right**; new, higher real rate labeled |
| "What happens to private investment?" | Decreases, **because** the real interest rate rises |
| "What happens to long-run growth?" | Slower: less private investment → slower growth of the capital stock → slower growth of potential output |
| "Calculate the budget balance" | Revenue − (purchases + transfers + interest), with the sign stated as deficit or surplus |
| "What happens to the national debt?" | Rises by the deficit or falls by the surplus |

### Habits that protect points

- **Label the axes.** "r" alone is ambiguous; write "real interest rate" and "quantity of loanable funds."
- **Explain with "because."** Directions alone often miss the explanation point.
- **Keep the graphs straight.** Crowding out uses the **loanable funds** market (real rate); the **money market** uses the nominal rate and belongs to monetary policy questions.
`
    },
    {
      id: 'macrofis6-tools-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: Deficit Spending and Growth

Delta (a hypothetical economy) is at full employment with a balanced budget. The government increases its purchases of military equipment and finances the spending by borrowing.

**(a)** Draw a correctly labeled graph of the loanable funds market and show the effect of the government's borrowing.

**(b)** What happens to the real interest rate?

**(c)** What happens to private investment? Explain.

**(d)** What is the effect of your answer in (c) on the growth rate of Delta's potential output? Explain.

**(e)** Suppose instead that the borrowed money paid for research grants that raise worker productivity. Explain why the long-run effect on growth could differ from your answer in (d).

**(f)** Explain why the effect in (b) would be smaller if Delta were in a deep recession.

### Model Answers

**(a)** Vertical axis: real interest rate. Horizontal axis: quantity of loanable funds. An upward-sloping supply curve and a downward-sloping demand curve meet at r1 and Q1. The demand curve shifts **right** (D1 → D2), giving a **higher** real interest rate r2 and a larger quantity Q2.

**(b)** The real interest rate **increases**.

**(c)** Private investment **decreases**, because the higher real interest rate raises the cost of borrowing for new capital, so fewer projects are profitable.

**(d)** The growth rate of potential output **decreases**: less private investment means the capital stock grows more slowly, so productive capacity grows more slowly.

**(e)** Research grants can add new technology and raise productivity. If that gain is larger than the capacity lost from crowded-out private investment, potential output could grow **faster** rather than slower.

**(f)** In a deep recession, private demand for loanable funds is weak and resources are idle, so the same government borrowing raises the real interest rate by less and displaces less private investment.
`
    },
    {
      id: 'macrofis6-tools-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A free-response question asks how a larger deficit affects private investment. Which answer earns full credit?',
            options: [
              'It falls as government spending replaces it',
              'It rises as AD increases with the deficit',
              'It falls because the money supply decreases',
              'It falls because the real interest rate rises'
            ],
            correctAnswer: 3,
            explanation: 'The scoring link is the real interest rate: government borrowing raises it, which reduces interest-sensitive investment. Saying spending "replaces" investment skips the mechanism, and the money supply is not what changes.'
          },
          {
            question: 'On the loanable funds graph for FRQ Set 1, which label belongs on the vertical axis?',
            options: [
              'Real interest rate',
              'Nominal interest rate',
              'Price level',
              'Quantity of money'
            ],
            correctAnswer: 0,
            explanation: 'The loanable funds market is drawn with the real interest rate, because savers and borrowers care about purchasing power. The nominal rate goes on the money market graph, and the price level goes on the AD-AS graph.'
          },
          {
            question: 'Deficit-financed military spending crowds out private investment in an economy at full employment. What is the long-run effect?',
            options: [
              'Growth of potential output speeds up',
              'Potential output grows more slowly',
              'Real GDP stays above potential',
              'The real interest rate falls back'
            ],
            correctAnswer: 1,
            explanation: 'Less private investment slows the growth of the capital stock, so potential output grows more slowly. Demand-side spending cannot keep output above potential, and continued borrowing keeps the real rate higher rather than lower.'
          }
        ]
      }
    },
    {
      id: 'macrofis6-tools-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: Budget and Debt Calculations

A government begins Year 1 with a national debt of \\$5,000 billion. Its budget data (billions of dollars):

| Year | Tax revenue | Government purchases | Transfer payments | Interest on the debt |
|---|---|---|---|---|
| 1 | 1,800 | 1,100 | 650 | 150 |
| 2 | 1,950 | 1,120 | 640 | 160 |

**(a)** Calculate the budget balance in Year 1. Is it a deficit or a surplus?

**(b)** Calculate the national debt at the end of Year 1.

**(c)** Calculate the budget balance in Year 2. Is it a deficit or a surplus?

**(d)** Calculate the national debt at the end of Year 2.

**(e)** What average interest rate does the Year 1 interest payment imply on the starting debt?

**(f)** Nominal GDP at the end of Year 2 is \\$13,000 billion. Calculate the debt-to-GDP ratio.

### Model Answers

**(a)** Spending = 1,100 + 650 + 150 = 1,900. Balance = 1,800 − 1,900 = **−100**, a **deficit** of \\$100 billion.

**(b)** 5,000 + 100 = **\\$5,100 billion**.

**(c)** Spending = 1,120 + 640 + 160 = 1,920. Balance = 1,950 − 1,920 = **+30**, a **surplus** of \\$30 billion.

**(d)** 5,100 − 30 = **\\$5,070 billion**.

**(e)** 150 ÷ 5,000 = 0.03, or **3%**.

**(f)** 5,070 ÷ 13,000 = 0.39, or **39%**.
`
    },
    {
      id: 'macrofis6-tools-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government spends \\$700 billion on purchases, \\$250 billion on transfers and \\$50 billion on interest, and collects \\$960 billion in taxes. What is its budget balance?',
            options: [
              'A surplus of \\$10 billion',
              'A surplus of \\$260 billion',
              'A deficit of \\$40 billion',
              'A deficit of \\$90 billion'
            ],
            correctAnswer: 2,
            explanation: 'Total spending is \\$700 + \\$250 + \\$50 = \\$1,000 billion, and \\$960 billion − \\$1,000 billion = −\\$40 billion. A \\$10 billion surplus leaves out interest, and a \\$260 billion surplus counts only purchases.'
          },
          {
            question: 'A government runs a budget surplus for the first time in many years. What happens to the national debt that year?',
            options: [
              'It rises by the surplus',
              'It is completely paid off',
              'It stays unchanged until the deficit returns',
              'It falls by the surplus'
            ],
            correctAnswer: 3,
            explanation: 'A surplus lets the government repay some of what it owes, so the debt falls by the amount of the surplus. One surplus reduces the debt but almost never eliminates it.'
          },
          {
            question: 'Which situation produces the largest crowding out of private investment?',
            options: [
              'Large deficits with the economy near full employment',
              'Small deficits during a deep, long recession',
              'A balanced budget with the economy near full employment',
              'Large surpluses with weak private demand for loans'
            ],
            correctAnswer: 0,
            explanation: 'Large borrowing when private firms already want many loans pushes the real interest rate up the most. A balanced budget or a surplus adds no government borrowing, and small deficits in a recession displace little investment.'
          }
        ]
      }
    },
    {
      id: 'macrofis6-tools-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

The loanable funds market is in equilibrium at a real interest rate of 3%, with \\$900 billion saved and invested. The government then borrows \\$120 billion. At the new equilibrium real interest rate of 4%, saving is \\$990 billion.

**1)** What is total borrowing (private plus government) at the new equilibrium, in billions?

**2)** How much is private investment at the new equilibrium, in billions?

**3)** How many billion dollars of private investment are crowded out?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['990', '870', '30'],
        hint1: 'At equilibrium, total borrowing equals saving.',
        hint2: 'Subtract the government\'s borrowing from the total.',
        hint3: 'Compare private investment with its old level of 900.',
        explanation: '1) Total borrowing equals saving: 990. 2) 990 − 120 = 870. 3) 900 − 870 = 30: the government\'s 120 was covered by 90 of new saving and 30 of crowded-out private investment.'
      }
    }
  ]
}
