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
| **Unequal income** | In 1929 the richest 5% of Americans received about one-third of all personal income; workers couldn't afford the goods they produced |
| **Bank failures** | No FDIC insurance; bank runs wiped out savings; ~9,000 banks failed by 1933 |
| **Tariffs** | Hawley-Smoot Tariff (1930) raised rates → trade wars → global depression deepened |
| **Federal Reserve** | Failed to expand money supply or rescue failing banks |

### The Human Cost

- **Unemployment:** 25% by 1933 (12–15 million workers)
- **Homelessness:** "Hoovervilles" — shantytowns named mockingly after President Hoover
- **Dust Bowl:** Severe drought + over-farming on Great Plains → massive soil erosion; Okies migrated to California
- **Hoover's response:** Believed in "rugged individualism" and voluntary cooperation; too slow to act; Bonus Army (1932) — WWI veterans demanded early payment of bonuses; Hoover ordered the army to clear them, and troops under General MacArthur used tear gas and burned their camp

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
            question: 'Which of the following best explains why the stock market crash of 1929 led to a long depression rather than a brief downturn?',
            options: [
              'A single day of panic selling wiped out the savings of most American families',
              'Unequal incomes and a fragile, unregulated banking system weakened demand',
              'European nations deliberately stopped buying American goods to hurt the U.S.',
              'Heavy federal spending in the 1920s had left the government deeply in debt'
            ],
            correctAnswer: 1,
            explanation: 'The crash was a trigger; weak consumer demand, overproduction and thousands of bank failures turned it into a depression. Most families owned no stock, European buying fell because of the global slump rather than a plot, and the federal government ran surpluses in the 1920s.'
          },
          {
            question: 'President Hoover\'s response to the Depression was criticized mainly because he',
            options: [
              'nationalized the largest banks and railroads, alarming business leaders',
              'relied on voluntary action and rejected direct federal relief to individuals',
              'ended all federal aid to farmers and abolished the Federal Farm Board',
              'declined to run for reelection and left the country without leadership'
            ],
            correctAnswer: 1,
            explanation: 'Hoover believed federal handouts would undermine self-reliance, so he lent money to banks and businesses through the RFC but resisted direct relief to the unemployed. He nationalized nothing, created rather than abolished the Farm Board, and ran for reelection in 1932.'
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
            label: 'Senator Huey Long\'s plan to cap large fortunes and guarantee every family a minimum income was called ___',
            options: ['Old Age Revolving Pensions', 'Share Our Wealth', 'the Fair Deal', 'the Square Deal']
          },
          {
            label: 'The 1935 law that guaranteed workers the right to organize unions and collectively bargain was the ___',
            options: ['Wagner Act', 'Taft-Hartley Act', 'Sherman Act', 'Clayton Act']
          }
        ],
        correctAnswers: ['Dust Bowl', 'Share Our Wealth', 'Wagner Act'],
        hint1: 'Drove "Okies" to California; chronicled by John Steinbeck in The Grapes of Wrath',
        hint2: 'Its motto was "Every man a king."',
        hint3: 'Also called the National Labor Relations Act (NLRA)',
        explanation: 'The Dust Bowl (1930s) was an ecological disaster caused by drought and over-farming. Long\'s Share Our Wealth movement pressured FDR from the left (Old Age Revolving Pensions was Dr. Townsend\'s plan). The Wagner Act (1935) became the foundation of modern American labor law, establishing the NLRB and collective bargaining rights.'
      }
    },
    {
      id: 'apushdep1-wwii',
      type: 'text' as const,
      content: `
## 📌 World War II: Causes & U.S. Entry (1931–1941)

| Cause | Details |
|-------|---------|
| **Aggression by the Axis powers** | Japan seized Manchuria (1931) and invaded China (1937); Italy conquered Ethiopia (1935–1936); Germany remilitarized the Rhineland (1936), annexed Austria (1938) and invaded Poland (September 1939) |
| **The Depression** | Economic collapse helped fascist and militarist movements win power in Germany and Japan |
| **Appeasement** | Britain and France let Hitler take the Sudetenland at Munich (1938), hoping to avoid war |
| **American isolationism** | The Neutrality Acts (1935–1937) kept the U.S. out of foreign quarrels and treated aggressors and victims alike |

### The U.S. Path to War

**Neutrality Acts** (1935–1937) → **cash-and-carry** arms sales (1939) → **Destroyers-for-Bases** deal and first peacetime draft (1940) → **Lend-Lease** (March 1941) → oil cut off to Japan (July 1941) → **Atlantic Charter** (August 1941) → **Pearl Harbor** (December 7, 1941) → war with Japan, Germany and Italy

## The Home Front (1941–1945)

| Group or Area | Wartime Change |
|---|---|
| **Economy** | War spending ended the Depression; unemployment fell to 1.2% by 1944; rationing, war bonds and wage-price controls |
| **Women** | About 6 million more women took paid jobs ("Rosie the Riveter"); about 350,000 served in uniform |
| **African Americans** | A. Philip Randolph's threatened march won Executive Order 8802 (1941) against defense-job discrimination; the "Double V" campaign; segregated units such as the Tuskegee Airmen |
| **Mexican Americans** | The Bracero Program (1942) brought farmworkers from Mexico; the Zoot Suit Riots (1943) targeted Mexican American youths |
| **Japanese Americans** | Executive Order 9066 (1942) forced about 120,000 people, two-thirds of them citizens, into camps; upheld in *Korematsu v. United States* (1944) |

> 🔑 **AP Connection:** Parts 4 and 5 develop the road to war and the home front in depth. For now, remember the CED's two big claims: most Americans opposed entering the war until Pearl Harbor, and wartime mobilization both ended the Depression and opened new, though unequal, opportunities.
      `
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
            question: 'The New Deal is best understood as',
            options: [
              'a socialist program that placed most major industries under state ownership',
              'a conservative program that reduced federal involvement in the economy',
              'a lasting expansion of federal power that did not end the Depression',
              'a temporary emergency program that was fully dismantled after World War II'
            ],
            correctAnswer: 2,
            explanation: 'Social Security, the FDIC, the SEC and federal labor law all endure, yet unemployment stayed above 14 percent until wartime spending. The New Deal regulated private industry rather than owning it, it greatly increased federal involvement, and its core programs survived the war.'
          },
          {
            question: 'Which of the following most directly connects the New Deal to the Progressive Era?',
            options: [
              'Both reduced the size of the federal government in favor of states\' rights',
              'Both were designed mainly to benefit large industrial corporations',
              'Both expanded federal regulation in response to laissez-faire failures',
              'Both were led by Republican presidents who broke with their own party'
            ],
            correctAnswer: 2,
            explanation: 'Progressives created the Federal Reserve, the FTC and food and drug regulation, and the New Deal extended that regulatory approach to banking, securities and labor. Both enlarged federal power, both aimed to curb corporate abuses, and Franklin Roosevelt was a Democrat.'
          },
          {
            question: 'Japan\'s decision to attack Pearl Harbor in December 1941 was most directly a response to which American action?',
            options: [
              'Lend-Lease shipments of weapons to Germany and Italy',
              'A naval blockade of the Japanese home islands',
              'An embargo that cut off Japan\'s supply of oil from the U.S.',
              'Recognition of Manchukuo as an independent state'
            ],
            correctAnswer: 2,
            explanation: 'After Japan occupied southern Indochina in July 1941, Roosevelt froze Japanese assets, cutting off the American oil Japan depended on, and Japan chose war to seize resources elsewhere. Lend-Lease aided Britain and the Soviet Union, there was no blockade before the war, and the U.S. refused to recognize Manchukuo.'
          }
        ]
      }
    }
  ]
}
