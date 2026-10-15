export const macroUnemploymentInflationPart6Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune6-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 6 of 7 — AP Exam Practice**

---

| Section |
|---------|
| 📖 How These Topics Appear on the Exam |
| FRQ Practice Set 1: The Labor Market |
| FRQ Practice Set 2: Prices and Interest Rates |
| Exam-Style Multiple Choice |

> 🔑 **Key Concept:** AP Macroeconomics free-response questions on these topics ask you to **calculate** (rates, index values, real values), **identify** (a type of unemployment, who gains from inflation) and **explain** (a cause-and-effect chain). Points are earned for correct numbers **with work shown** and for explanations that name the specific mechanism.
`
    },
    {
      id: 'macroune6-format',
      type: 'text' as const,
      content: `
## 📖 How These Topics Appear on the Exam

| Task verb | What earns the point | Example |
|---|---|---|
| **Calculate** | Show the formula with numbers substituted, then the answer | "(9 ÷ 150) × 100 = 6%" |
| **Identify** | A correct, specific answer; no explanation needed | "Structural unemployment" |
| **Explain** | The answer **and** the reason, linked by a mechanism | "Borrowers gain because they repay with dollars that have less purchasing power than expected" |
| **Draw / label** | Correctly labeled axes, curves and equilibrium points | Covered in the AD-AS and Phillips curve topics |

### Habits that protect points

- **Write the formula first.** If you slip on arithmetic, a correct setup still shows your reasoning.
- **Use the right denominator.** Unemployment rate: labor force. Participation rate: working-age population. Inflation rate: last year's CPI.
- **State the direction and the reason.** "The unemployment rate falls because the unemployed and the labor force both drop by the same number" beats "it goes down."
- **Name the type of inflation surprise.** Redistribution happens only when inflation differs from what was **expected**.
`
    },
    {
      id: 'macroune6-frq1',
      type: 'text' as const,
      content: `
## FRQ Practice Set 1: The Labor Market

The country of Veridia reports the following data (in millions).

| Category | Number |
|---|---|
| Working-age population | 240 |
| Employed | 141 |
| Unemployed | 9 |
| Not in the labor force | 90 |

Economists estimate Veridia's natural rate of unemployment at 4%.

**(a)** Calculate the unemployment rate. Show your work.

**(b)** Calculate the labor force participation rate. Show your work.

**(c)** Is Veridia's real GDP above, below or equal to potential output? Explain using the unemployment data.

**(d)** Identify one fiscal policy action that would reduce cyclical unemployment.

**(e)** In the ample-reserves framework, identify the action the Federal Reserve would take with its main tool to reduce cyclical unemployment.

**(f)** Suppose 3 million unemployed Veridians stop searching for work. Will the unemployment rate increase, decrease or stay the same? Explain.

### Model Answers

**(a)** Labor force = 141 + 9 = 150 million. Unemployment rate = (9 ÷ 150) × 100 = **6%**.

**(b)** LFPR = (150 ÷ 240) × 100 = **62.5%**.

**(c)** **Below** potential. The actual rate (6%) is above the natural rate (4%), so there is 2 percentage points of cyclical unemployment, which means output is less than full-employment output.

**(d)** Any one of: **increase government purchases**, **decrease taxes**, or **increase transfer payments**.

**(e)** The Fed would **lower the interest rate on reserve balances**, which lowers the federal funds rate and other interest rates and increases borrowing for investment and consumption. (Saying "lower the federal funds rate" alone does not earn this point: the federal funds rate is the target, not the tool. In the limited-reserves model, buying bonds through open-market operations or lowering the discount rate would also be accepted for a question that asks about that model.)

**(f)** **Decrease.** The 3 million leave the labor force, so unemployed falls to 6 million and the labor force to 147 million. The new rate is (6 ÷ 147) × 100 ≈ 4.1%, lower than 6%, even though no one found a job.
`
    },
    {
      id: 'macroune6-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Country X has 120 million employed people, 8 million unemployed people and 72 million people not in the labor force. Its unemployment rate is closest to',
            options: [
              '6.3%',
              '6.7%',
              '4.0%',
              '64.0%'
            ],
            correctAnswer: 0,
            explanation: 'The labor force is 120 + 8 = 128 million, so the rate is 8 ÷ 128 × 100 = 6.25%, which rounds to 6.3%. Dividing by the employed gives 6.7%, dividing by the full working-age population of 200 million gives 4.0%, and 64.0% is the participation rate.'
          },
          {
            question: 'A country\'s unemployment rate is 3.5% and its natural rate is 4.5%. Which policy combination is most appropriate if the goal is to keep inflation from rising?',
            options: [
              'Government purchases rise, and the interest rate on reserve balances falls',
              'Government purchases fall, and the interest rate on reserve balances rises',
              'Government purchases fall, and the interest rate on reserve balances falls',
              'Government purchases rise, and the interest rate on reserve balances rises'
            ],
            correctAnswer: 1,
            explanation: 'Unemployment below the natural rate means output is above potential, so contractionary policy fits: lower government purchases and a higher interest rate on reserve balances both reduce aggregate demand. Raising purchases or cutting that interest rate would add to demand, and mixing the two sends conflicting signals.'
          },
          {
            question: 'Which of the following would decrease a country\'s natural rate of unemployment?',
            options: [
              'An increase in government purchases during a recession',
              'A longer period during which unemployment benefits can be collected',
              'A training program that teaches laid-off workers skills employers need',
              'A shift toward a younger labor force with more first-time job seekers'
            ],
            correctAnswer: 2,
            explanation: 'Retraining reduces structural unemployment, which lowers the natural rate. Extra government purchases reduce cyclical unemployment and leave the natural rate unchanged, while longer benefits and a younger workforce raise frictional unemployment.'
          }
        ]
      }
    },
    {
      id: 'macroune6-frq2',
      type: 'text' as const,
      content: `
## FRQ Practice Set 2: Prices and Interest Rates

In Nordland, the consumer price index was 125 in 2024 and 130 in 2025. In 2024, Mia took out a one-year loan from a credit union at a fixed nominal interest rate of 6%. Both Mia and the credit union expected inflation of 2%.

**(a)** Calculate Nordland's inflation rate from 2024 to 2025. Show your work.

**(b)** Calculate the real interest rate the credit union **expected** to earn when it made the loan.

**(c)** Calculate the real interest rate the credit union **actually** earned.

**(d)** Did Mia gain or lose from the unexpected inflation? Explain.

**(e)** Mia's nominal salary rose from \\$50,000 in 2024 to \\$51,000 in 2025. Did her real salary rise, fall or stay the same? Explain using a calculation.

**(f)** Identify one cost of inflation that would occur even if inflation had been fully expected.

### Model Answers

**(a)** Inflation rate = (130 − 125) ÷ 125 × 100 = **4%**.

**(b)** Expected real rate = 6% − 2% = **4%**.

**(c)** Actual real rate = 6% − 4% = **2%**.

**(d)** Mia **gained**. Inflation (4%) was higher than expected (2%), so she repays the loan with dollars that have less purchasing power than both sides planned. Her real interest cost was 2%, not 4%.

**(e)** Her real salary **fell**. Her nominal salary rose (51,000 − 50,000) ÷ 50,000 × 100 = 2%, which is less than 4% inflation. In 2024 dollars, \\$51,000 ÷ (130 ÷ 125) = \\$51,000 ÷ 1.04 ≈ \\$49,038, below \\$50,000.

**(f)** Any one of: **menu costs** (changing listed prices), **shoe-leather costs** (effort to hold less cash), or **unit-of-account costs** (money is a less reliable measure for planning, contracts and taxes).

> 🔑 **AP Connection:** In part (e), the CPI ratio 130 ÷ 125 converts 2025 dollars into 2024 dollars. When neither year is the base year, divide by the ratio of the two CPI values, not by CPI ÷ 100.
`
    },
    {
      id: 'macroune6-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

In Sudland, the CPI was 200 in 2023 and 210 in 2024. A one-year loan made in 2023 carried a fixed nominal interest rate of 8%, and both sides expected 3% inflation.

**1)** What was the inflation rate from 2023 to 2024, in percent?

**2)** What real interest rate did the lender actually earn, in percent?

**3)** A worker earned \\$42,000 in 2023 and \\$44,100 in 2024. What was the 2024 salary in 2023 dollars?

Enter numbers only (no \\$ or % sign, no commas). Round to the nearest whole number if needed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '3', '42000'],
        hint1: 'Inflation rate = (210 − 200) ÷ 200 × 100.',
        hint2: 'The realized real rate subtracts ACTUAL inflation from the 8% nominal rate.',
        hint3: 'Divide the 2024 salary by the CPI ratio 210 ÷ 200 = 1.05.',
        explanation: '1) (210 − 200) ÷ 200 × 100 = 5%. 2) 8% − 5% = 3%, below the 5% real rate the lender expected. 3) \\$44,100 ÷ 1.05 = \\$42,000, so the worker\'s 5% raise only kept pace with prices and the real salary did not change.'
      }
    },
    {
      id: 'macroune6-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Workers sign a three-year contract with fixed wage increases of 2% a year. Inflation then turns out to be 5% a year. Which group benefits from the unexpected inflation?',
            options: [
              'The workers, whose nominal wages rise',
              'The workers, whose real wages rise',
              'Neither side, since the contract was fixed',
              'The employer, whose real labor costs fall'
            ],
            correctAnswer: 3,
            explanation: 'Wages rising 2% while prices rise 5% means real wages fall, so the employer pays less in real terms and gains. The workers\' nominal wages do rise, but by less than prices, and a fixed contract is exactly what lets the surprise shift purchasing power.'
          },
          {
            question: 'A free-response question asks how the Federal Reserve would use its main tool to fight a recession under the ample-reserves framework. Which response earns the point?',
            options: [
              'Lower the interest rate on reserve balances',
              'Set the federal funds rate lower directly',
              'Raise the reserve requirement for banks',
              'Sell Treasury bonds on the open market'
            ],
            correctAnswer: 0,
            explanation: 'In the ample-reserves framework, the Fed\'s main tool is the interest rate on reserve balances, and lowering it pulls the federal funds rate down. The federal funds rate is the target the tool moves, and raising the reserve requirement or selling bonds would be contractionary.'
          },
          {
            question: 'Which change would cause the CPI to rise but leave the GDP deflator unchanged?',
            options: [
              'A higher price for new military aircraft',
              'A higher price for imported televisions',
              'A higher price for domestic factory robots',
              'A higher price for new public school buildings'
            ],
            correctAnswer: 1,
            explanation: 'Imported televisions are in the consumer basket but are not produced domestically, so only the CPI rises. Military aircraft, factory robots and public schools are domestic government or investment purchases, which enter the GDP deflator but not the CPI.'
          }
        ]
      }
    }
  ]
}
