export const macroUnemploymentInflationPart3Data = {
  topicSlug: 'macro-unemployment-inflation',
  sections: [
    {
      id: 'macroune3-intro',
      type: 'text' as const,
      content: `
# 📊 Unemployment & Inflation

**Part 3 of 7 — Natural Rate, Full Employment & Cyclical Unemployment**

---

| Section |
|---------|
| 📖 The Natural Rate of Unemployment |
| Splitting Unemployment by Type |
| What Changes the Natural Rate |
| Matching Each Type to a Remedy |

> 🔑 **Key Concept:** Some unemployment is a normal part of a changing economy. The **natural rate of unemployment** (frictional + structural) is the rate when the economy is at **full employment**. **Cyclical unemployment** is the gap between the actual rate and the natural rate, and it is the only type that stabilization policy targets.
`
    },
    {
      id: 'macroune3-nru',
      type: 'text' as const,
      content: `
## 📖 The Natural Rate of Unemployment

**Natural rate of unemployment (NRU) = frictional rate + structural rate**

**Actual unemployment rate = frictional + structural + cyclical**

So: **Cyclical unemployment rate = actual rate − natural rate**

| Situation | Cyclical unemployment | Where real GDP is | Phase of the business cycle |
|---|---|---|---|
| Actual rate **=** NRU | Zero | At **potential (full-employment) output** | Long-run equilibrium |
| Actual rate **>** NRU | Positive | **Below** potential: a negative (recessionary) output gap | Recession or early recovery |
| Actual rate **<** NRU | Negative | **Above** potential: a positive (inflationary) output gap | Late expansion, or boom |

### Why the natural rate is never zero

- **Frictional unemployment** exists because finding a good job match takes time. New graduates, people who move to a new city, and workers who quit to find a better fit all spend time searching. Some frictional unemployment is healthy: it helps workers land in jobs where they are most productive.
- **Structural unemployment** exists because the skills or locations of workers do not match the jobs available. When technology, trade or consumer tastes change, some workers need retraining or relocation before they can be hired.

### Below the natural rate?

The actual rate can fall **below** the NRU for a while. In a boom, firms hire aggressively, searches end quickly, and employers train workers they would not normally hire. Cyclical unemployment is then negative. This is not sustainable: firms compete for scarce workers, wages and prices rise, and the economy is producing beyond its potential.

> 🔑 **AP Connection:** "Full employment" means the actual rate **equals** the natural rate, not that the unemployment rate is 0%. In the U.S., estimates of the natural rate have been roughly 4–5% in recent decades. The link between unemployment below the natural rate and rising inflation is developed in the Phillips curve topic.
`
    },
    {
      id: 'macroune3-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'An economy has an actual unemployment rate of 7.2%. Economists estimate frictional unemployment at 2.0% and structural unemployment at 2.5%. What is the cyclical unemployment rate?',
            options: [
              '4.5%',
              '2.7%',
              '5.2%',
              '4.7%'
            ],
            correctAnswer: 1,
            explanation: 'The natural rate is 2.0% + 2.5% = 4.5%, so cyclical unemployment is 7.2% − 4.5% = 2.7%. Answering 4.5% gives the natural rate itself, and 5.2% and 4.7% subtract only one of the two natural components.'
          },
          {
            question: 'When the actual unemployment rate is below the natural rate of unemployment, the economy is most likely',
            options: [
              'producing less than its potential output, with positive cyclical unemployment',
              'producing exactly its potential output, with zero cyclical unemployment',
              'producing more than its potential output, with negative cyclical unemployment',
              'producing less than its potential output, with zero frictional unemployment'
            ],
            correctAnswer: 2,
            explanation: 'Unemployment below the natural rate means cyclical unemployment is negative and real GDP is above potential, a positive output gap. Output below potential goes with unemployment above the natural rate, and frictional unemployment never falls to zero.'
          },
          {
            question: 'Which statement correctly describes an economy at full employment?',
            options: [
              'Frictional unemployment is zero',
              'Structural unemployment is zero',
              'All unemployment types are zero',
              'Cyclical unemployment is zero'
            ],
            correctAnswer: 3,
            explanation: 'Full employment means the actual rate equals the natural rate, so only cyclical unemployment is zero. Frictional and structural unemployment remain, which is why the natural rate is several percent rather than zero.'
          }
        ]
      }
    },
    {
      id: 'macroune3-types',
      type: 'text' as const,
      content: `
## Splitting Unemployment by Type

Exam questions often give counts of people instead of rates. Convert each count to a rate by dividing by the **labor force**.

### Worked Example: Country C

Country C has a labor force of **150 million**. A survey of the unemployed finds:

| Reason for unemployment | People (millions) | Type |
|---|---|---|
| Recent graduates and voluntary job changers, still searching | 3.00 | Frictional |
| Coal and print-media workers whose skills no longer match open jobs | 3.75 | Structural |
| Workers laid off because sales fell during a recession | 4.50 | Cyclical |
| **Total unemployed** | **11.25** | |

**Step 1: Rate for each type** (count ÷ 150 million × 100)

| Type | Calculation | Rate |
|---|---|---|
| Frictional | 3.00 ÷ 150 × 100 | 2.0% |
| Structural | 3.75 ÷ 150 × 100 | 2.5% |
| Cyclical | 4.50 ÷ 150 × 100 | 3.0% |

**Step 2: Natural rate** = 2.0% + 2.5% = **4.5%**

**Step 3: Actual rate** = 11.25 ÷ 150 × 100 = **7.5%** (check: 4.5% + 3.0% = 7.5%)

**Step 4: Interpret.** The actual rate is 3.0 percentage points above the natural rate, so Country C is in a recession: real GDP is below potential.

### Worked Example: Country C Recovers

Two years later the labor force is still 150 million. Spending has recovered and 4.5 million cyclically unemployed workers are rehired, but a new automation wave adds 1.5 million structurally unemployed workers.

| Type | Count (millions) | Rate |
|---|---|---|
| Frictional | 3.00 | 2.0% |
| Structural | 3.75 + 1.50 = 5.25 | 3.5% |
| Cyclical | 0 | 0% |

The actual rate is now 5.5%, and it **equals** the new natural rate of 5.5%. The economy is at full employment, even though unemployment is higher than the 4.5% natural rate of two years earlier. The natural rate itself rose.
`
    },
    {
      id: 'macroune3-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** ✍️

Country D has a labor force of 80 million. There are 1.6 million frictionally unemployed, 2.4 million structurally unemployed and 2.0 million cyclically unemployed workers.

**1)** What is the natural rate of unemployment, in percent?

**2)** What is the actual unemployment rate, in percent?

**3)** By how many percentage points does the actual rate exceed the natural rate?

Enter numbers only (no % sign). Round to one decimal place if needed.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['5', '7.5', '2.5'],
        hint1: 'The natural rate counts only frictional and structural unemployment: 1.6 + 2.4 = 4.0 million.',
        hint2: 'Divide each count by the labor force of 80 million and multiply by 100.',
        hint3: 'The gap between the actual and natural rates is the cyclical rate: 2.0 ÷ 80 × 100.',
        explanation: '1) NRU = (1.6 + 2.4) ÷ 80 × 100 = 5%. 2) Actual = (1.6 + 2.4 + 2.0) ÷ 80 × 100 = 6.0 ÷ 80 × 100 = 7.5%. 3) The gap is 7.5 − 5 = 2.5 percentage points, which is the cyclical rate (2.0 ÷ 80 × 100).'
      }
    },
    {
      id: 'macroune3-changes',
      type: 'text' as const,
      content: `
## What Changes the Natural Rate

The natural rate is not a fixed number. It moves slowly when the features of the labor market change.

| Change | Effect on the NRU | Why |
|---|---|---|
| Better job-matching technology (online job boards, matching apps) | Lowers it | Searches end faster, so frictional unemployment falls |
| More generous or longer unemployment benefits | Raises it | Searchers can afford to wait longer for an offer, so frictional unemployment rises |
| A larger share of young workers in the labor force | Raises it | Young workers change jobs more often, so frictional unemployment rises |
| Rapid technological or trade-driven change in industries | Raises it | More workers hold skills employers no longer need, so structural unemployment rises |
| Job-training and education programs that teach in-demand skills | Lowers it | Workers' skills better match open jobs, so structural unemployment falls |
| A minimum wage set above the market wage for low-skill labor, or strict licensing rules | Can raise it | Fewer low-skill or unlicensed workers are hired, so structural unemployment can rise |

> 🔑 **AP Connection:** A change in the natural rate changes the economy's **full-employment output**. A lower NRU means more people working at full employment, so potential output rises. That idea connects to the long-run aggregate supply curve, which is taught in the AD-AS topics.

## Matching Each Type to a Remedy

| Type | Cause | Typical remedies |
|---|---|---|
| **Frictional** | Time needed to search and match | Better job information and matching services; it cannot and should not be eliminated |
| **Structural** | Skill or location mismatch | Retraining and education programs, apprenticeships, relocation assistance |
| **Cyclical** | Too little aggregate demand in a recession | **Expansionary fiscal policy** and **expansionary monetary policy** |

### Expansionary fiscal policy

Congress and the President can **increase government purchases**, **cut taxes** or **increase transfer payments**. Each raises aggregate demand, so firms produce more and rehire workers.

### Expansionary monetary policy: how the Fed lowers interest rates

The Federal Reserve sets a **target range for the federal funds rate**, the interest rate banks charge each other for overnight loans of reserves. The federal funds rate is the Fed's **target**, not one of its tools. The Fed uses its tools to move the rate into the range it has chosen.

| Framework | How the Fed lowers the federal funds rate |
|---|---|
| **Ample reserves** (how the Fed operates today) | It **lowers the interest rate on reserve balances (IORB)**, its main tool. Banks earn less for holding reserves at the Fed, so they lend reserves to each other at lower rates and the federal funds rate falls within its new, lower target range. |
| **Limited reserves** (the model with a reserve market graph) | It **buys government bonds** in open-market operations, **lowers the discount rate**, or **lowers the reserve requirement**. Each one increases reserves or the money supply, which pushes the federal funds rate down. |

Note: the U.S. reserve requirement has been **0%** since March 2020, so in practice the Fed no longer uses it as a tool.

Lower interest rates encourage borrowing for investment and big-ticket consumer purchases, which raises aggregate demand and reduces cyclical unemployment.

> ⚠️ **Limits of stabilization policy:** Fiscal and monetary policy target **cyclical** unemployment. They do not fix a skills mismatch, and pushing unemployment below the natural rate for long tends to raise inflation instead of permanently lowering unemployment.
`
    },
    {
      id: 'macroune3-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Applied Scenarios** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A government launches a program that retrains laid-off textile workers as medical technicians. Which type of unemployment is the program designed to reduce?',
            options: [
              'Structural unemployment',
              'Cyclical unemployment',
              'Frictional unemployment',
              'Seasonal unemployment'
            ],
            correctAnswer: 0,
            explanation: 'Retraining closes a gap between workers\' skills and the jobs available, which is structural unemployment. Cyclical unemployment comes from weak demand, and frictional unemployment comes from the normal time it takes to search.'
          },
          {
            question: 'The economy is in a recession with high cyclical unemployment. In the ample-reserves framework, which Federal Reserve action would most directly help?',
            options: [
              'Raising the interest rate it pays on reserve balances',
              'Lowering the interest rate it pays on reserve balances',
              'Selling government bonds in open-market operations',
              'Raising the target range for the federal funds rate'
            ],
            correctAnswer: 1,
            explanation: 'Lowering the interest rate on reserve balances pulls the federal funds rate down, which reduces borrowing costs and raises aggregate demand. Raising that rate, selling bonds, or raising the target range would all tighten policy and deepen the recession.'
          }
        ]
      }
    }
  ]
}
