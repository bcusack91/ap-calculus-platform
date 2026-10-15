export const macroMoneyBankingPart2Data = {
  topicSlug: 'macro-money-banking',
  sections: [
    {
      id: 'macromon2-intro',
      type: 'text' as const,
      content: `
# 💰 Money & Banking

**Part 2 of 7 — Financial Assets: Money, Bonds and Stocks**

---

| Section |
|---------|
| 📖 Three Kinds of Financial Assets |
| How Bonds Work |
| Bond Prices and Interest Rates Move in Opposite Directions |
| Stocks, and Judging Returns in Real Terms |

> 🔑 **Key Concept:** Households can hold their wealth as **money**, **bonds** or **stocks**. Each choice trades off **liquidity**, **rate of return** and **risk**. Because money pays little or no interest, the **nominal interest rate is the opportunity cost of holding money**. And because a bond's payments are fixed, **bond prices and interest rates move in opposite directions**.
`
    },
    {
      id: 'macromon2-assets',
      type: 'text' as const,
      content: `
## 📖 Three Kinds of Financial Assets

A **financial asset** is a claim on something of value, such as cash, a bank deposit, a bond or a share of stock.

| Asset | What it is | Liquidity | Typical rate of return | Risk |
|---|---|---|---|---|
| **Money** (currency, checking deposits) | The medium of exchange itself | Highest: it already is a means of payment | Zero for cash; low for deposits | Low, apart from inflation eroding its value |
| **Bonds** | A loan to a government or corporation that promises fixed payments | Medium: can be sold, but the price can change | Interest income | Moderate: price can fall, issuer can default |
| **Stocks** | A share of ownership in a corporation | Medium: can be sold, but the price can change a lot | Dividends and changes in share price | Highest of the three |

### Key terms

- **Liquidity:** how easily and quickly an asset can be used to buy things without losing value. Cash is perfectly liquid.
- **Rate of return:** the income an asset earns, as a percent of what was paid for it.
- **Risk:** the chance that the return is lower than expected, or that the asset loses value.

### The basic trade-off

Assets that are more liquid and less risky usually pay **lower** returns. To get a higher expected return, savers must accept less liquidity, more risk or both.

### The opportunity cost of holding money

Holding \\$1,000 in cash instead of a bond paying 5% means giving up \\$50 a year in interest. So the **nominal interest rate is the opportunity cost of holding money**. When interest rates rise, people hold less money and more interest-bearing assets; when rates fall, holding money becomes cheaper. This idea is the basis of the **demand for money** in the money market, covered in the monetary policy topic.
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
            question: 'What is the opportunity cost of holding wealth as cash instead of as a bond?',
            options: [
              'The inflation rate during the year',
              'The nominal interest rate forgone',
              'The reserve requirement on deposits',
              'The price of the bond when it is sold'
            ],
            correctAnswer: 1,
            explanation: 'Cash earns no interest, so holding it means giving up the interest a bond would pay. The inflation rate affects the real value of cash, but the cost of choosing cash over a bond is the nominal interest given up.'
          },
          {
            question: 'Which ranking lists financial assets from most liquid to least liquid?',
            options: [
              'Checking deposits, currency, stocks',
              'Stocks, checking deposits, currency',
              'Currency, checking deposits, stocks',
              'Currency, stocks, checking deposits'
            ],
            correctAnswer: 2,
            explanation: 'Currency is itself the means of payment, checking deposits can be spent almost as easily, and stocks must first be sold at an uncertain price. Any order that places stocks ahead of either form of money reverses the meaning of liquidity.'
          },
          {
            question: 'Compared with holding money, buying a share of stock typically gives a saver',
            options: [
              'a higher expected return with less risk',
              'a lower expected return with more risk',
              'a lower expected return with less risk',
              'a higher expected return with more risk'
            ],
            correctAnswer: 3,
            explanation: 'Stocks earn dividends and possible price gains, but their prices can fall sharply, so savers accept more risk for a higher expected return. Money is safer and more liquid but earns little or nothing.'
          }
        ]
      }
    },
    {
      id: 'macromon2-bonds',
      type: 'text' as const,
      content: `
## How Bonds Work

A **bond** is an IOU. The buyer lends money to the issuer, and the issuer promises fixed payments.

| Term | Meaning | Example |
|---|---|---|
| **Issuer** | The borrower: a government or a corporation | The U.S. Treasury |
| **Face value (par value)** | The amount repaid when the bond matures | \\$1,000 |
| **Coupon payment** | The fixed interest payment each year | \\$50 per year |
| **Maturity** | The date the face value is repaid | 10 years from issue |
| **Price** | What the bond sells for today; it can differ from face value | Anywhere the market sets it |
| **Yield** | The rate of return a buyer earns at today's price | 5% if bought at \\$1,000 |

Bondholders are **lenders**, not owners. They receive the promised payments whether the company has a good year or a bad one, and they are paid before stockholders if the company fails. That is why bonds are usually less risky than stocks.

> 🔑 **AP Connection:** When the federal government runs a deficit, it borrows by **selling bonds**. When the Federal Reserve conducts open-market operations, it **buys or sells government bonds**. Both ideas depend on how bond prices and interest rates are linked.
`
    },
    {
      id: 'macromon2-inverse',
      type: 'text' as const,
      content: `
## Bond Prices and Interest Rates Move in Opposite Directions

A bond's payments are fixed when it is issued. If market interest rates change afterward, the only way an existing bond can compete with new bonds is for its **price** to change.

### Worked Example: A one-year bond

A bond promises to pay **\\$1,050** one year from now. Market interest rates on similar bonds are **5%**.

**Step 1: Price today at 5%.** A buyer pays the amount that earns 5%: \\$1,050 ÷ 1.05 = **\\$1,000**.

**Step 2: Interest rates rise to 7%.** New bonds now earn 7%. No one will pay \\$1,000 for a bond that earns only 5%, so its price falls until it earns 7%: \\$1,050 ÷ 1.07 ≈ **\\$981.31**.

**Step 3: Interest rates fall to 3%.** Now the old bond's fixed payment is attractive, and buyers bid its price up: \\$1,050 ÷ 1.03 ≈ **\\$1,019.42**.

| Market interest rate | Price of the bond | Return earned by a new buyer |
|---|---|---|
| 3% | \\$1,019.42 | 3% |
| 5% | \\$1,000.00 | 5% |
| 7% | \\$981.31 | 7% |

### The two directions to memorize

- **Interest rates rise → existing bond prices fall.**
- **Interest rates fall → existing bond prices rise.**

The link also runs the other way. If many people try to **buy** bonds, bond prices rise and the yield on those bonds falls. If many people try to **sell** bonds, bond prices fall and their yields rise.

> ⚠️ **Common trap:** A rise in interest rates is good news for someone about to **buy** a new bond, but bad news for someone who already **owns** one, because the market value of their bond falls.
`
    },
    {
      id: 'macromon2-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

A bond pays \\$1,100 one year from now.

**1)** If the market interest rate is 10%, what is the bond's price today, in dollars?

**2)** If the market interest rate falls to 4%, what is the bond's price, rounded to the nearest dollar?

**3)** A different bond with a face value of \\$2,000 pays a coupon of \\$90 per year. If you buy it at face value, what is its yield, in percent?

Enter numbers only.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['1000', '1058', '4.5'],
        hint1: 'Divide the future payment by (1 + the interest rate): 1,100 ÷ 1.10.',
        hint2: 'For part 2, divide 1,100 by 1.04.',
        hint3: 'Yield at face value = coupon ÷ price × 100.',
        explanation: '1) 1,100 ÷ 1.10 = \\$1,000. 2) 1,100 ÷ 1.04 ≈ \\$1,057.69, about \\$1,058: the lower interest rate raised the bond price. 3) 90 ÷ 2,000 × 100 = 4.5%.'
      }
    },
    {
      id: 'macromon2-stocks',
      type: 'text' as const,
      content: `
## Stocks, and Judging Returns in Real Terms

### Stocks

A **share of stock** is a share of ownership in a corporation. Stockholders earn returns in two ways:

- **Dividends:** a portion of profits paid to stockholders, if the board decides to pay one.
- **Capital gains:** an increase in the share price, earned when the share is sold for more than it cost.

Stock returns are not promised, so they are riskier than bond returns. A firm can cut its dividend, and the share price can fall.

### Bonds vs. stocks

| | Bond | Stock |
|---|---|---|
| Holder is a… | Lender (creditor) | Part owner |
| Payments | Fixed, promised | Not promised |
| If the firm fails | Paid before stockholders | Paid last, often nothing |
| Typical risk | Lower | Higher |

### Judging a return in real terms

Savers care about what their returns can buy. The **real interest rate** is the nominal rate minus inflation (the Unemployment & Inflation topic develops this in detail):

**Real interest rate ≈ nominal interest rate − inflation rate**

A bond yielding 6% when inflation is 4% earns a real return of about **2%**. If inflation unexpectedly rises to 7%, the same bond earns about **−1%** in real terms: the bondholder, a lender, loses purchasing power.
`
    },
    {
      id: 'macromon2-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Maya owns a government bond with a fixed coupon payment. Market interest rates then rise sharply. What happens to the market value of Maya\'s bond?',
            options: [
              'It falls',
              'It rises',
              'It does not change',
              'It rises to face value'
            ],
            correctAnswer: 0,
            explanation: 'New bonds now pay more, so buyers will purchase Maya\'s bond only at a lower price that gives them the new market rate. Bond prices move opposite to interest rates.'
          },
          {
            question: 'Large numbers of investors try to buy existing government bonds at the same time. What happens to bond prices and bond yields?',
            options: [
              'Prices rise and yields rise',
              'Prices rise and yields fall',
              'Prices rise and yields stay the same',
              'Prices fall and yields rise'
            ],
            correctAnswer: 1,
            explanation: 'Higher demand bids bond prices up, and because the payments are fixed, a higher price means a lower rate of return. Prices and yields always move in opposite directions.'
          },
          {
            question: 'A bond yields a nominal 5% while inflation is 3%. What is the approximate real return?',
            options: [
              '8%',
              '5%',
              '2%',
              '1.67%'
            ],
            correctAnswer: 2,
            explanation: 'The real rate is approximately the nominal rate minus inflation: 5% − 3% = 2%. Adding the two rates or dividing one by the other does not measure the gain in purchasing power.'
          }
        ]
      }
    }
  ]
}
