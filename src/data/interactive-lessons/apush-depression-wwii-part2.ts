export const apushDepressionWwiiPart2Data = {
  topicSlug: 'apush-depression-wwii',
  sections: [
    {
      id: 'apushdep2-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Great Depression & World War II

**Part 2 of 7 — From Crash to New Deal: How the Crisis Deepened and How Washington Responded**

---

| Section |
|---------|
| 📖 How a Crash Became a Depression |
| The Depression in Numbers, 1929–1945 |
| Hoover's Response: More Active Than Its Reputation |
| The First New Deal: The Hundred Days |
| Pressure From Left and Right |
| The Second New Deal and Its Limits, 1935–1938 |

> 🔑 **Key Concept:** The CED says the New Deal "attempted to end the Great Depression by using government power to provide relief to the poor, stimulate recovery, and reform the American economy," that radical, union and populist movements pushed it further, and that conservatives in Congress and the courts tried to limit it (KC 7.1.III). This part explains **the mechanism** of the collapse and **the sequence** of the response.
      `
    },
    {
      id: 'apushdep2-mechanism',
      type: 'text' as const,
      content: `
## 📖 How a Crash Became a Depression

The stock market crash of October 1929 (Black Thursday, October 24, and Black Tuesday, October 29) did not by itself cause a decade of depression. It set off a chain of failures in an economy that was already fragile.

| Link in the Chain | What Happened |
|---|---|
| **1. Weak foundations** | Farm prices had been low since 1920; wages lagged behind productivity; much 1920s buying depended on installment credit |
| **2. The crash** | Stock values collapsed; investors who had bought **on margin** were wiped out, and consumers and businesses cut spending |
| **3. Bank failures** | Banks had lent to speculators and farmers who could not repay. Frightened depositors withdrew cash (**bank runs**). About 9,000 banks failed between 1930 and 1933 |
| **4. Shrinking money supply** | As banks failed, the money supply fell by about one-third from 1929 to 1933, and the Federal Reserve did little to stop it |
| **5. Deflation** | Falling prices made debts harder to repay. Farm prices fell by more than half from 1929 to 1932 |
| **6. Global spiral** | Europe depended on American loans to pay war debts and reparations. When U.S. lending stopped and the **Hawley-Smoot Tariff** (1930) raised rates, other nations retaliated and world trade collapsed |

> 🔑 **AP Connection:** Distinguish the **trigger** (the crash) from the **underlying causes** (overproduction, unequal income, a fragile banking system, international debts). On the AP exam, a causation argument that ranks causes earns more credit than a list.

## The Depression in Numbers, 1929–1945

### Unemployment Rate (percent of the civilian labor force)

| Year | Rate | Context |
|---|---|---|
| 1929 | 3.2 | Before the crash |
| 1931 | 15.9 | Bank failures spread |
| 1933 | 24.9 | The bottom: roughly one worker in four |
| 1937 | 14.3 | Partial recovery under the New Deal |
| 1938 | 19.0 | The "Roosevelt Recession" |
| 1940 | 14.6 | Defense orders begin |
| 1944 | 1.2 | Full wartime mobilization |

*Source: Stanley Lebergott's estimates, in Historical Statistics of the United States.*

### Reading the Data

- The total value of goods and services produced, in current dollars, fell from about \\$104 billion in 1929 to about \\$57 billion in 1933. After adjusting for falling prices, real output dropped by about one-quarter.
- Unemployment **fell** steadily from 1933 to 1937. The New Deal brought real improvement, but not full recovery.
- The jump in **1938** followed cuts in federal spending and new Social Security payroll taxes in 1937. That reversal convinced many economists that government spending mattered for recovery.
- Unemployment reached its low point only in **1944**, which is the evidence for the claim that World War II, not the New Deal, ended the Depression.
      `
    },
    {
      id: 'apushdep2-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check: Reading the Depression Data** 🎯

| Year | Unemployment (%) |
|---|---|
| 1929 | 3.2 |
| 1933 | 24.9 |
| 1937 | 14.3 |
| 1938 | 19.0 |
| 1944 | 1.2 |
      `,
      exercise: {
        questions: [
          {
            question: 'The change in unemployment between 1937 and 1938 shown in the table most directly reflects which of the following?',
            options: [
              'Federal spending cuts and new payroll taxes',
              'A second stock market crash caused by margin buying',
              'The end of the Neutrality Acts and the loss of export markets',
              'Supreme Court rulings that struck down Social Security'
            ],
            correctAnswer: 0,
            explanation: 'In 1937 Roosevelt tried to balance the budget while Social Security payroll taxes began, and unemployment jumped from 14.3 to 19.0 percent. There was no second crash on the scale of 1929, the Neutrality Acts did not cause the downturn, and the Court upheld Social Security in 1937.'
          },
          {
            question: 'The data in the table best support which of the following claims?',
            options: [
              'Hoover\'s policies had already restored full employment before 1933',
              'The New Deal reduced unemployment but did not end the Depression',
              'Unemployment was highest in the first year after the stock market crash',
              'Wartime mobilization had little effect on the number of jobless workers'
            ],
            correctAnswer: 1,
            explanation: 'Unemployment fell by about ten points between 1933 and 1937 but stayed in double digits until wartime mobilization. Unemployment rose sharply under Hoover, it peaked in 1933 rather than 1930, and mobilization brought it to 1.2 percent.'
          }
        ]
      }
    },
    {
      id: 'apushdep2-hoover',
      type: 'text' as const,
      content: `
## Hoover's Response: More Active Than Its Reputation

Herbert Hoover is often remembered as doing nothing. In fact he did more than any president before him in a depression, but he stopped short of direct federal relief to individuals.

| Hoover Action | Year | What It Did | Limit |
|---|---|---|---|
| **Agricultural Marketing Act** (Federal Farm Board) | 1929 | Lent money to farm cooperatives and bought crops to hold up prices | Could not stop prices falling while farmers kept producing |
| **White House conferences** | 1929 | Asked business leaders to keep wages up and avoid layoffs | Voluntary; employers cut wages as the slump deepened |
| **Hawley-Smoot Tariff** | 1930 | Raised import duties to protect American producers | Foreign retaliation shrank U.S. exports |
| **Debt moratorium** | 1931 | Paused payments on war debts and reparations for a year | Too late to stop European bank failures |
| **Reconstruction Finance Corporation (RFC)** | 1932 | Lent federal money to banks, railroads and insurance companies | Critics called it relief for corporations, not people |
| **Emergency Relief and Construction Act** | 1932 | Lent states money for relief and public works | Small sums, slowly spent |

Hoover believed that federal handouts would destroy individual initiative and that relief belonged to local governments and private charity. The **Bonus Army** episode of July 1932, when troops under General Douglas MacArthur drove unemployed World War I veterans out of Washington, sealed his defeat. Roosevelt won 42 of 48 states in November 1932.

## The First New Deal: The Hundred Days (March 9–June 16, 1933)

| Problem | Response | How It Worked |
|---|---|---|
| Banks collapsing | **Bank Holiday** and **Emergency Banking Act** | Closed every bank, reopened those found sound, and Roosevelt explained it in his first Fireside Chat (March 12) |
| Farm prices too low | **Agricultural Adjustment Act (AAA)** | Paid farmers to grow less, funded by a tax on food processors |
| Industrial collapse | **National Industrial Recovery Act (NIRA)** | Industries wrote "codes of fair competition" setting prices and wages; Section 7(a) promised workers the right to bargain collectively |
| Mass unemployment | **CCC, FERA, and (in winter 1933–1934) the CWA** | Direct jobs and federal grants to states for relief |
| Regional poverty | **Tennessee Valley Authority (TVA)** | A public corporation built dams for power and flood control |
| Bank runs | **Glass-Steagall Banking Act** | Created the FDIC and separated commercial from investment banking |

The First New Deal relied on **planning and cooperation** with business and farmers. Its centerpiece, the NIRA, was struck down in *Schechter* (1935), and the AAA in *United States v. Butler* (1936).
      `
    },
    {
      id: 'apushdep2-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Policy to Its Approach** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Lending federal money to banks and railroads rather than giving relief to individuals describes Hoover\'s ___',
            options: ['Reconstruction Finance Corporation', 'Civil Works Administration', 'Federal Deposit Insurance Corporation', 'Tennessee Valley Authority']
          },
          {
            label: 'Paying farmers to reduce output, funded by a tax on food processors, describes the ___',
            options: ['Federal Farm Board', 'Agricultural Adjustment Act', 'Resettlement Administration', 'Rural Electrification Administration']
          },
          {
            label: 'Letting industries write codes that set prices and wages, while promising workers collective bargaining, describes the ___',
            options: ['Wagner Act', 'Fair Labor Standards Act', 'National Industrial Recovery Act', 'Securities Exchange Act']
          }
        ],
        correctAnswers: ['Reconstruction Finance Corporation', 'Agricultural Adjustment Act', 'National Industrial Recovery Act'],
        hint1: 'Hoover created it in 1932; critics called it a breadline for big business.',
        hint2: 'This 1933 law was struck down in United States v. Butler (1936).',
        hint3: 'This 1933 law was struck down in the "sick chicken" case of 1935.',
        explanation: 'The RFC reflected Hoover\'s trickle-down approach of shoring up institutions; the AAA attacked low farm prices by cutting supply; and the NIRA relied on business-government cooperation through industry codes, which the Court struck down in Schechter.'
      }
    },
    {
      id: 'apushdep2-pressure',
      type: 'text' as const,
      content: `
## Pressure From Left and Right, 1934–1935

By 1934 the First New Deal had stopped the collapse but not ended hard times. Critics on both sides gained followings.

| Critic | Base | Proposal | Effect on Roosevelt |
|---|---|---|---|
| **Huey Long** (Louisiana senator) | Rural and working-class Southerners; Share Our Wealth clubs claimed millions of members | Cap large fortunes and guarantee every family a homestead and income | Pushed Roosevelt toward higher taxes on the rich (Revenue Act of 1935) |
| **Francis Townsend** (California doctor) | Older Americans | A \\$200 monthly pension for everyone over 60, to be spent within the month | Helped create pressure for old-age pensions in Social Security |
| **Father Charles Coughlin** (radio priest) | Catholic and working-class listeners | Nationalize banks and inflate the currency; later turned to antisemitism | Showed the reach of populist anger |
| **American Liberty League** (1934) | Wealthy business leaders and conservative Democrats | Defend property rights against New Deal "tyranny" | Roosevelt used them as a campaign target in 1936 |
| **Labor militancy** | Textile, longshore and auto workers | General strikes in San Francisco and Minneapolis (1934); national textile strike (1934) | Helped pass the Wagner Act |

## The Second New Deal and Its Limits, 1935–1938

| Law (1935) | What It Did |
|---|---|
| **Works Progress Administration** | Hired millions directly for public works and the arts |
| **Wagner Act (NLRA)** | Protected the right to unionize; created the National Labor Relations Board |
| **Social Security Act** | Old-age insurance, unemployment insurance, aid to dependent children |
| **Revenue Act ("Wealth Tax")** | Raised top income-tax rates |

### Labor's Breakthrough

The Wagner Act and the new **Congress of Industrial Organizations (CIO)** organized whole industries rather than individual crafts. The **sit-down strike** at General Motors in Flint, Michigan (December 1936–February 1937) won recognition for the United Auto Workers, and U.S. Steel recognized the steelworkers' union in March 1937. Union membership grew from under 3 million in 1933 to nearly 9 million by 1940.

### The New Deal Stalls

1. **Court-packing fight (1937):** Roosevelt's plan to add justices failed in Congress and split Democrats.
2. **Roosevelt Recession (1937–1938):** Spending cuts and new payroll taxes drove unemployment back up.
3. **Conservative coalition:** Southern Democrats and Republicans began voting together against new programs. Roosevelt's 1938 attempt to defeat conservative Democrats in primaries mostly failed.
4. **Last major law:** The **Fair Labor Standards Act** (1938) set a national minimum wage and a 40-hour workweek and restricted child labor.

> 🔑 **AP Connection:** The CED stresses that the New Deal "did not end the Depression" but left lasting **regulatory agencies** and a **political realignment** toward the Democrats among African Americans, union members and urban ethnic voters. Part 3 explores that realignment through sources.
      `
    },
    {
      id: 'apushdep2-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Practice: Causation and the New Deal** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following best explains why bank failures made the Depression worse after 1930?',
            options: [
              'Failed banks lowered interest rates so far that saving no longer paid',
              'Lost deposits and a shrinking money supply cut spending and prices',
              'Federal deposit insurance paid out more money than the Treasury could afford',
              'The Federal Reserve printed money too quickly and caused rapid inflation'
            ],
            correctAnswer: 1,
            explanation: 'As banks failed, savings vanished and the money supply contracted, so spending fell and deflation made debts harder to repay. Federal deposit insurance did not exist until 1933, and the problem was deflation rather than inflation.'
          },
          {
            question: 'The Second New Deal (1935) differed from the First New Deal (1933) mainly in that it',
            options: [
              'relied more on cooperation with business through industry codes',
              'emphasized security for workers and the elderly and labor rights',
              'abandoned federal spending in favor of a balanced budget',
              'transferred most relief programs from Washington to the states'
            ],
            correctAnswer: 1,
            explanation: 'The Wagner Act, Social Security and the WPA aimed at long-term security and workers\' bargaining power. Business codes were the First New Deal\'s method, spending rose rather than stopped, and the WPA was run from Washington.'
          },
          {
            question: 'Critics such as Huey Long and Francis Townsend most directly influenced the New Deal by',
            options: [
              'persuading the Supreme Court to uphold the National Industrial Recovery Act',
              'building popular movements that pushed Roosevelt toward broader reforms',
              'organizing the conservative coalition that blocked new programs after 1937',
              'convincing Congress to end work relief in favor of direct cash payments'
            ],
            correctAnswer: 1,
            explanation: 'Long\'s Share Our Wealth clubs and the Townsend movement showed the political danger of doing too little, encouraging the wealth tax and Social Security. The Court struck down the NIRA, the conservative coalition opposed them, and work relief expanded under the WPA.'
          }
        ]
      }
    }
  ]
}
