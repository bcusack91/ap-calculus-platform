export const apushDepressionWwiiPart1Data = {
  topicSlug: 'apush-depression-wwii',
  sections: [
    {
      id: 'apushdep1-intro',
      type: 'text' as const,
      content: `
# 🇺🇸 The Great Depression & World War II

**Part 1 of 7 — Economic Crisis, the New Deal & Global War**

---

| Section |
|---------|
| 📖 Causes of the Great Depression |
| FDR & the New Deal |
| New Deal Programs & Impact |
| 📌 World War II: Causes & U.S. Entry |
| The Home Front |

> 🔑 **Key Concept:** The AP exam tests the **New Deal's transformation of the federal government's role** — from limited intervention to active management of the economy and social welfare. This was the most significant expansion of federal power since the Civil War.
      `
    },
    {
      id: 'apushdep1-depression',
      type: 'text' as const,
      content: `
## 📖 The Great Depression (1929–1941)

### Causes

| Cause | Details |
|-------|---------|
| **Stock market speculation** | Buying on margin (borrowing to invest); stock prices inflated far beyond real value |
| **Overproduction** | Factories and farms produced more than consumers could buy |
| **Unequal wealth** | Top 1% held ~33% of wealth; workers couldn't afford goods they produced |
| **Bank failures** | No FDIC insurance; bank runs wiped out savings; ~9,000 banks failed by 1933 |
| **Tariffs** | Hawley-Smoot Tariff (1930) raised rates → trade wars → global depression deepened |
| **Federal Reserve** | Failed to expand money supply or rescue failing banks |

### The Human Cost

- **Unemployment:** 25% by 1933 (12–15 million workers)
- **Homelessness:** "Hoovervilles" — shantytowns named mockingly after President Hoover
- **Dust Bowl:** Severe drought + over-farming on Great Plains → massive soil erosion; Okies migrated to California
- **Hoover's response:** Believed in "rugged individualism" and voluntary cooperation; too slow to act; Bonus Army (1932) — WWI veterans demanded early payment of bonuses; Hoover ordered army to disperse them with tear gas

> ⚠️ **AP Alert:** The AP exam contrasts Hoover's philosophy (limited government; voluntary action) with FDR's approach (active federal intervention). This is a key ideological divide that still shapes American politics.
      `
    },
    {
      id: 'apushdep1-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'Which of the following was the MOST fundamental cause of the Great Depression?',
            options: [
              'Structural overproduction combined with extreme wealth inequality meant consumers couldn\'t purchase what the economy produced',
              'The stock market crash of 1929 destroyed the entire American economy overnight',
              'European nations deliberately caused a global depression to weaken the United States',
              'Federal government spending was too high during the 1920s, creating unsustainable debt'
            ],
            correctAnswer: 0,
            explanation: 'While the stock market crash triggered the crisis, the underlying cause was systemic: factories and farms overproduced while wages remained stagnant and wealth concentrated at the top. Workers and farmers simply couldn\'t buy enough goods to sustain the economy. The crash exposed this instability but didn\'t cause it alone.'
          },
          {
            question: 'President Hoover\'s response to the Depression was criticized primarily because:',
            options: [
              'His belief in limited government and voluntary action led to inadequate federal intervention as millions suffered',
              'He immediately raised taxes and cut government spending, worsening the crisis',
              'He nationalized all major industries and banks, alarming business leaders',
              'He refused to run for reelection, leaving the country without leadership'
            ],
            correctAnswer: 0,
            explanation: 'Hoover\'s philosophy of "rugged individualism" led him to rely on voluntary cooperation from businesses and charities rather than direct federal relief. While he did create the Reconstruction Finance Corporation (1932), his actions were widely seen as too little, too late. The Bonus Army incident (1932) further damaged his image.'
          }
        ]
      }
    },
    {
      id: 'apushdep1-newdeal',
      type: 'text' as const,
      content: `
## FDR & the New Deal

**Franklin D. Roosevelt** won the 1932 election in a landslide and launched the **New Deal** — the largest expansion of federal power in American history to that point.

### Key New Deal Programs (the "Alphabet Soup")

| Program | Acronym | Purpose | Category |
|---------|---------|---------|----------|
| **Civilian Conservation Corps** | CCC | Employed young men in conservation projects (planting trees, building trails) | Relief |
| **Agricultural Adjustment Act** | AAA | Paid farmers to reduce production to raise crop prices | Recovery |
| **Tennessee Valley Authority** | TVA | Built dams for flood control, electricity, and jobs in the rural South | Recovery |
| **National Recovery Admin.** | NRA | Set codes for fair competition, wages, and prices; struck down by Supreme Court (1935) | Recovery |
| **Works Progress Admin.** | WPA | Employed ~8.5 million people (roads, bridges, schools, arts projects) | Relief |
| **Social Security Act** | SSA (1935) | Retirement pensions, unemployment insurance, aid to disabled and dependent children | Reform |
| **Wagner Act** | NLRA (1935) | Guaranteed workers' right to organize unions and collective bargaining | Reform |
| **FDIC** | (1933) | Insured bank deposits up to \\$2,500 (now \\$250,000); restored confidence in banks | Reform |
| **SEC** | (1934) | Regulated stock market; prevented fraud and speculation abuses | Reform |

### The Three R's: **Relief** (immediate help), **Recovery** (economic restart), **Reform** (prevent future crises)

### Criticism of the New Deal

| From the **Right** | From the **Left** |
|---|---|
| Government overreach; socialism; too much spending | Didn't go far enough to redistribute wealth |
| Business leaders feared regulation and labor power | **Huey Long** — "Share Our Wealth" (cap fortunes, guaranteed income) |
| Supreme Court struck down key programs (NRA, AAA) | **Dr. Francis Townsend** — proposed generous pensions for elderly |

> 🔑 **AP Connection:** The New Deal did NOT end the Depression — **World War II** did (through massive military spending). But the New Deal permanently transformed the role of the federal government and created the modern social safety net.
      `
    },
    {
      id: 'apushdep1-input',
      type: 'input-boxes' as const,
      content: `
**Applied Recall** ✍️

1) What 1935 law created retirement pensions, unemployment insurance, and aid to dependent children?

2) What New Deal agency employed ~8.5 million people building roads, bridges, schools, and arts projects?

3) What agency, created in 1933, insured bank deposits to prevent future bank runs?

Use the exact historical term or abbreviation.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['Social Security Act', 'WPA', 'FDIC'],
        hint1: 'Still exists today — provides retirement benefits to Americans over 65',
        hint2: 'Works Progress ___',
        hint3: 'Federal Deposit Insurance ___',
        explanation: 'The Social Security Act (1935) is the New Deal\'s most enduring legacy — still providing retirement income and social insurance today. The WPA (Works Progress Administration) was the largest New Deal employment program. The FDIC (Federal Deposit Insurance Corporation) ended bank panics by guaranteeing deposits.'
      }
    },
    {
      id: 'apushdep1-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Match the Concepts** 🔍
      `,
      exercise: {
        dropdowns: [
          {
            label: 'The severe drought and soil erosion crisis on the Great Plains in the 1930s was called the ___',
            options: ['Dust Bowl', 'Great Migration', 'Bonus March', 'Gold Rush']
          },
          {
            label: 'FDR\'s strategy of categorizing New Deal programs by their purpose is remembered as the ___',
            options: ['Three Rs (Relief, Recovery, Reform)', 'Fair Deal', 'Square Deal', 'New Frontier']
          },
          {
            label: 'The 1935 law that guaranteed workers the right to organize unions and collectively bargain was the ___',
            options: ['Wagner Act', 'Taft-Hartley Act', 'Sherman Act', 'Clayton Act']
          }
        ],
        correctAnswers: ['Dust Bowl', 'Three Rs (Relief, Recovery, Reform)', 'Wagner Act'],
        hint1: 'Drove "Okies" to California; chronicled by John Steinbeck in The Grapes of Wrath',
        hint2: 'Relief = immediate help; Recovery = economic restart; Reform = prevent future crises',
        hint3: 'Also called the National Labor Relations Act (NLRA)',
        explanation: 'The Dust Bowl (1930s) was an ecological disaster caused by drought and over-farming. The Three Rs organized New Deal programs by purpose. The Wagner Act (1935) was the most important labor law in American history, establishing the NLRB and collective bargaining rights.'
      }
    },
    {
      id: 'apushdep1-applied',
      type: 'multiple-choice' as const,
      content: `
**AP-Style Application** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'The New Deal is BEST understood as:',
            options: [
              'A fundamental expansion of the federal government\'s role in the economy and social welfare that created lasting institutions while falling short of ending the Depression itself',
              'A socialist revolution that permanently eliminated capitalism in the United States',
              'A conservative program that reduced government involvement in the economy',
              'A temporary emergency program that was completely dismantled after World War II'
            ],
            correctAnswer: 0,
            explanation: 'The New Deal permanently transformed American governance — Social Security, FDIC, SEC, labor rights, and federal economic management all endure today. However, the Depression only fully ended with WWII military spending. The New Deal was neither revolutionary enough for the left (didn\'t redistribute wealth) nor limited enough for the right (expanded federal power dramatically).'
          },
          {
            question: 'Which of the following MOST directly connects the New Deal to earlier Progressive Era reforms?',
            options: [
              'Both movements expanded federal regulation of the economy and social conditions in response to the failures of laissez-faire policies',
              'Both movements reduced the size of the federal government and promoted states\' rights',
              'Both movements primarily benefited wealthy industrialists and corporations',
              'Both movements were led by Republican presidents who opposed business interests'
            ],
            correctAnswer: 0,
            explanation: 'The New Deal built on Progressive Era foundations — both rejected laissez-faire economics and argued the government must actively regulate the economy and protect citizens. The Pure Food and Drug Act (1906) parallels the SEC (1934); the income tax (16th Amendment, 1913) funded New Deal spending. FDR\'s programs dramatically expanded what Progressives had started.'
          }
        ]
      }
    }
  ]
}
