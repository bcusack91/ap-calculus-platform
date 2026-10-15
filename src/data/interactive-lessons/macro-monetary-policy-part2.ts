export const macroMonetaryPolicyPart2Data = {
  topicSlug: 'macro-monetary-policy',
  sections: [
    {
      id: 'macromon2-intro',
      type: 'text' as const,
      content: `
# 🏦 Monetary Policy

**Part 2 of 7 — The Money Market Graph**

---

| Section |
|---------|
| 📖 Why People Demand Money |
| What Shifts Money Demand |
| The Money Supply Curve |
| Equilibrium and How the Rate Adjusts |
| The Money Market Under Ample Reserves |

> 🔑 **Key Concept:** The money market shows how the **nominal interest rate** is determined. Money demand slopes **down** because the nominal interest rate is the **opportunity cost** of holding money. Money supply is **vertical** because the Fed sets it independently of the interest rate. Where they cross is the equilibrium nominal interest rate.
`
    },
    {
      id: 'macromon2-demand',
      type: 'text' as const,
      content: `
## 📖 Why People Demand Money

"Demand for money" does not mean wanting more income. It means wanting to hold wealth **as money** (cash and checking deposits) instead of as interest-earning assets such as bonds.

### Two reasons to hold money

| Motive | Why people hold money | What it depends on |
|---|---|---|
| **Transaction demand** | To pay for everyday purchases | **Nominal GDP**: the price level and real output |
| **Asset demand** | Money is safe and perfectly liquid, so people keep some wealth in it | The **nominal interest rate** (what they give up by not holding bonds) |

### The opportunity cost of holding money

Money in a wallet or checking account earns little or no interest. A bond earns the market interest rate. So the **nominal interest rate is the price of holding money**.

- When the nominal interest rate is **high** (say 8%), holding \\$10,000 as money instead of bonds costs \\$800 a year in lost interest, so people hold **less** money.
- When it is **low** (say 1%), the same choice costs only \\$100 a year, so people hold **more** money.

### Drawing it

- **Vertical axis:** nominal interest rate (i).
- **Horizontal axis:** quantity of money.
- **Money demand (MD):** slopes **downward**, because a lower nominal interest rate raises the quantity of money demanded.

> 🔑 **AP Connection:** Label the vertical axis **nominal interest rate**, not "interest rate" alone and not "real interest rate". The real interest rate belongs on the loanable funds graph.
`
    },
    {
      id: 'macromon2-shifters',
      type: 'text' as const,
      content: `
## What Shifts Money Demand

A change in the nominal interest rate causes a **movement along** MD. Anything that changes how much money people want **at every interest rate** shifts the whole curve.

| Change | Shift of MD | Why |
|---|---|---|
| Price level rises | **Right** | Each purchase takes more dollars |
| Real GDP rises | **Right** | More transactions to pay for |
| Price level or real GDP falls | **Left** | Fewer dollars needed for transactions |
| Better payment technology (cards, mobile payments, easy transfers from savings) | **Left** | People can do the same buying while holding less money |

Note that the first three rows are all **nominal GDP** changes: MD shifts right whenever nominal GDP rises, whether from higher prices or higher real output.

> 🔑 **Key Concept:** The interest rate never shifts money demand. It is on the vertical axis, so a change in it is a movement along the curve.
`
    },
    {
      id: 'macromon2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Why does the money demand curve slope downward?',
            options: [
              'Holding money costs less in lost interest when rates are low',
              'The Fed prints more money for households when rates are low',
              'Higher rates raise the price level, so fewer dollars are used',
              'Higher rates raise real GDP, so people need less money'
            ],
            correctAnswer: 0,
            explanation: 'The nominal interest rate is the opportunity cost of holding money rather than interest-earning bonds, so a lower rate raises the quantity of money people choose to hold. The Fed sets the money supply, and the price level and real GDP shift the curve rather than explain its slope.'
          },
          {
            question: 'Real GDP and the price level both rise during an expansion. What happens to the money demand curve?',
            options: [
              'It shifts left, because higher prices cut what money can buy',
              'It shifts right, because more dollars are needed for transactions',
              'It does not shift, since only interest rates can change it',
              'It becomes vertical, because the Fed fixes the quantity of money'
            ],
            correctAnswer: 1,
            explanation: 'Higher nominal GDP means more dollars are needed to pay for purchases at every interest rate, so MD shifts right. The interest rate causes movements along MD, and the vertical curve is money supply, not money demand.'
          },
          {
            question: 'Mobile payment apps make it easy to move funds from savings to checking at the moment of purchase. How does this affect money demand?',
            options: [
              'It shifts MD right, because people make more purchases',
              'It moves the market along MD to a higher interest rate',
              'It shifts MD left, as people need smaller cash balances',
              'It shifts MS right, because banks create more deposits'
            ],
            correctAnswer: 2,
            explanation: 'Better payment technology lets people do the same buying while holding less money at any interest rate, so MD shifts left. It is a change in demand, not a movement along the curve or a change in the Fed-controlled supply.'
          }
        ]
      }
    },
    {
      id: 'macromon2-supply',
      type: 'text' as const,
      content: `
## The Money Supply Curve

In the AP money market graph, the **money supply (MS) is vertical**. The quantity of money is set by the Fed's actions on reserves (in the limited-reserves model), not by the interest rate.

| Fed action (limited-reserves model) | Effect on MS |
|---|---|
| Buys government bonds (open-market purchase) | Shifts **right** |
| Sells government bonds (open-market sale) | Shifts **left** |
| Lowers the discount rate | Shifts **right** (banks borrow more reserves) |
| Raises the discount rate | Shifts **left** |
| Lowers the reserve requirement | Shifts **right** (larger money multiplier) |
| Raises the reserve requirement | Shifts **left** |

The reserve requirement has been **0%** since March 2020, so in practice the last two rows describe the model, not current policy. Part 5 of the Money & Banking lesson shows how much a bond purchase can expand the money supply.
`
    },
    {
      id: 'macromon2-equilibrium',
      type: 'text' as const,
      content: `
## Equilibrium and How the Rate Adjusts

Equilibrium is where MD crosses the vertical MS. The equilibrium **nominal interest rate** is the rate at which people want to hold exactly the money that exists.

### Worked example: the Fed increases the money supply

Start: MS = \\$500 billion, equilibrium nominal interest rate = **5%**. The Fed buys bonds, and MS shifts right to \\$600 billion.

1. At 5%, people now hold \\$100 billion **more** money than they want.
2. They use the extra money to **buy bonds**.
3. Higher demand for bonds pushes **bond prices up**, and higher bond prices mean **lower interest rates** (the inverse relationship from the Money & Banking lesson).
4. The rate falls until people are willing to hold the full \\$600 billion, say at **4%**.

### Worked example: money demand rises with a fixed money supply

Start: MS = \\$500 billion, rate = 5%. Real GDP rises and MD shifts right. Now people want more money than exists at 5%.

1. People **sell bonds** to get money.
2. Bond prices **fall**, so interest rates **rise**.
3. The rate rises until the quantity demanded falls back to \\$500 billion, say at **6%**.

| Shift | Equilibrium nominal interest rate | Quantity of money |
|---|---|---|
| MS right | Falls | Rises |
| MS left | Rises | Falls |
| MD right (MS fixed) | Rises | Unchanged |
| MD left (MS fixed) | Falls | Unchanged |

> 🔑 **AP Connection:** When MD shifts and MS is vertical, the **quantity** of money does not change; only the interest rate does. Writing "the quantity of money increases" after an MD shift loses the point.
`
    },
    {
      id: 'macromon2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The Fed sells government bonds on the open market. In the money market graph, what happens?',
            options: [
              'MD shifts left, and the nominal interest rate falls',
              'MS shifts right, and the nominal interest rate falls',
              'MS shifts left, and the nominal interest rate rises',
              'MD shifts right, and the quantity of money rises'
            ],
            correctAnswer: 2,
            explanation: 'An open-market sale removes reserves from banks, so the money supply shifts left and the equilibrium nominal interest rate rises. Bond sales act on the supply of money, not on money demand.'
          },
          {
            question: 'The price level rises while the Fed keeps the money supply constant. What happens to the equilibrium nominal interest rate and the quantity of money?',
            options: [
              'The rate rises and the quantity of money stays the same',
              'The rate falls and the quantity of money rises',
              'The rate stays the same and the quantity of money rises',
              'The rate rises and the quantity of money rises as well'
            ],
            correctAnswer: 0,
            explanation: 'A higher price level shifts MD right; with a vertical MS, the only way to clear the market is a higher nominal interest rate. The quantity of money is fixed by the Fed, so it does not change.'
          }
        ]
      }
    },
    {
      id: 'macromon2-ample',
      type: 'text' as const,
      content: `
## The Money Market Under Ample Reserves

The vertical-MS graph is the **limited-reserves model**: the Fed changes the quantity of reserves and money to move the interest rate. Today banks hold **ample** reserves, so small changes in the quantity of reserves barely move rates. Instead the Fed sets **administered rates**:

- The FOMC announces a **target range** for the federal funds rate (for example, 4.25% to 4.50%).
- It sets the **interest rate on reserve balances (IORB)**, its main tool, inside that range. A bank will not lend reserves overnight for much less than it can earn by leaving them at the Fed, so the federal funds rate trades close to IORB.
- When the Fed **lowers IORB**, the federal funds rate falls, and other short-term rates follow. When it **raises IORB**, they rise.

| Goal | Ample reserves | Limited reserves |
|---|---|---|
| Lower interest rates | Lower IORB (and the target range) | Buy bonds, lower the discount rate, or lower the reserve requirement |
| Raise interest rates | Raise IORB (and the target range) | Sell bonds, raise the discount rate, or raise the reserve requirement |

Either way, the result the rest of the economy feels is the same: a lower or higher **nominal interest rate**, which then changes borrowing and spending. Part 3 traces those chains.

> 🔑 **AP Connection:** If a question says the economy has **ample reserves**, answer with IORB. If it asks for an **open-market operation** or shows a money market graph with vertical MS, answer with the limited-reserves tools.
`
    },
    {
      id: 'macromon2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Fill in the Blanks** 🔍

Choose the term that completes each statement.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The vertical axis of the money market graph shows the ___ interest rate.',
            options: ['nominal', 'real', 'discount', 'prime']
          },
          {
            label: 'The money supply curve is vertical because the quantity of money is set by the ___.',
            options: ['Fed', 'Treasury', 'interest rate', 'price level']
          },
          {
            label: 'When people want to hold more money than exists, they sell bonds, so interest rates ___.',
            options: ['rise', 'fall', 'stay the same', 'become negative']
          },
          {
            label: 'Under ample reserves, the Fed\'s main tool is the interest rate on ___.',
            options: ['reserve balances', 'Treasury bonds', 'discount loans', 'federal funds']
          }
        ],
        correctAnswers: ['nominal', 'Fed', 'rise', 'reserve balances'],
        hint1: 'The money market measures the cost of holding money, which is a rate before adjusting for inflation.',
        hint2: 'Selling bonds lowers their prices.',
        hint3: 'The tool is a rate the Fed pays banks, not a rate banks charge each other.',
        explanation: 'The money market uses the nominal interest rate, and MS is vertical because the Fed sets the quantity of money. Selling bonds to get money lowers bond prices and raises interest rates. Under ample reserves, the Fed\'s main tool is the interest rate on reserve balances, which steers the federal funds rate.'
      }
    }
  ]
};
