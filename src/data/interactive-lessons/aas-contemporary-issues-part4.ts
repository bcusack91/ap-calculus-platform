export const aasContemporaryIssuesPart4Data = {
  topicSlug: "aas-contemporary-issues",
  sections: [
    {
      id: "aasci4-intro",
      type: 'text' as const,
      content: "# ⚡ Contemporary Issues & Debates\n\n**Part 4 of 7 — Connections: Reading the Data on Wealth, Housing and Education**\n\n---\n\nDebates about racial inequality today often turn on numbers. The AP exam includes data and visual sources (tables, charts, maps), and the SAQ on a visual source can ask you to describe a pattern, explain it with historical evidence, and identify a limitation of the source. This part practices those skills on wealth, housing and education data from Topics 4.5, 4.15 and 4.16 and connects each to its history.\n\n### Three rules for reading a data source\n\n| Rule | Ask yourself |\n|---|---|\n| **Read the label** | What is measured, in what unit, for whom, in what year, and by whom? |\n| **Describe before you explain** | State the pattern in the numbers first; save causes for the next sentence. |\n| **Know what the data cannot show** | A gap in outcomes does not, on its own, prove a single cause. |"
    },
    {
      id: "aasci4-wealth",
      type: 'text' as const,
      content: "## 📊 Data set 1: household wealth\n\n**Wealth** (net worth) is what a family owns, such as a home, savings and retirement accounts, minus what it owes. It differs from **income**, which is what a family earns in a year. Wealth can be passed down, so it carries the effects of the past forward.\n\n**Median family net worth, 2022** (Federal Reserve, Survey of Consumer Finances, 2023 report)\n\n| Group | Median net worth |\n|---|---|\n| White non-Hispanic families | about \\$285,000 |\n| Hispanic families | about \\$61,600 |\n| Black non-Hispanic families | about \\$44,900 |\n\n### Worked example: describing the pattern\n\n1. **Identify the measure:** the median, the middle family in each group, in 2022 dollars.\n2. **Compute a comparison:** 285,000 ÷ 44,900 ≈ 6.3. The median white family held roughly six times the wealth of the median Black family.\n3. **State the pattern in one sentence:** \"In 2022 the median white family held about six times the net worth of the median Black family.\"\n4. **Note a limit:** a median shows the typical family, not the spread. It cannot show how wealth is distributed within each group, and the table alone does not explain why the gap exists.\n\n> 📌 **Why medians?** A few very rich families pull an average (mean) upward. The median is the better measure of the typical family, which is why the Federal Reserve reports both."
    },
    {
      id: "aasci4-calc",
      type: 'input-boxes' as const,
      content: "**Try the Skill** ✍️",
      exercise: {
        "questions": [
          {
            "question": "1) Using the 2022 table, the Hispanic median (61,600) is about how many times the Black median (44,900)? Round to one decimal place.",
            "answer": "1.4",
            "acceptableAnswers": [
              "1.4",
              "1.37",
              "1.4x",
              "1.4 times"
            ]
          },
          {
            "question": "2) Which measure of the middle, mean or median, is less affected by a few very wealthy families?",
            "answer": "median",
            "acceptableAnswers": [
              "median",
              "the median"
            ]
          }
        ],
        "hint1": "Divide the larger median by the smaller one.",
        "hint2": "One of the two is the value in the exact middle of the list.",
        "hint3": "Averages are sensitive to extreme values.",
        "explanation": "61,600 ÷ 44,900 ≈ 1.37, which rounds to 1.4. The median is the middle value, so a handful of very large fortunes does not pull it upward the way they pull the mean."
      }
    },
    {
      id: "aasci4-housing",
      type: 'text' as const,
      content: "## 🏠 Data set 2: housing and the legacy of redlining\n\nHomeownership is the largest source of wealth for most American families, so housing history links directly to the wealth table above.\n\n| Year | Policy or practice | Effect |\n|---|---|---|\n| **1933–1940** | The Home Owners' Loan Corporation (HOLC), created in 1933, refinanced mortgages; its 1935–1940 maps graded city neighborhoods A to D, with D areas outlined in red as \"hazardous.\" | Black neighborhoods were routinely graded D. |\n| **1934 onward** | The Federal Housing Administration (FHA) insured mortgages using underwriting rules that treated racial mixing as a risk. | Insured lending flowed mainly to white suburbs. |\n| **1944–1950s** | G.I. Bill home loans were administered through local banks. | Many Black veterans could not use the benefit for homes. |\n| **1968** | Fair Housing Act | Banned discrimination in sale, rental and financing of housing. |\n\n### What later research shows, and where it disagrees\n\n- A 2018 study by the National Community Reinvestment Coalition found that about three-quarters of neighborhoods the HOLC graded \"hazardous\" are low- to moderate-income today, and most are majority-minority.\n- Economic historians such as Price Fishback and coauthors have argued that the HOLC maps were drawn **after** many lending patterns were already set, and that the FHA's underwriting did more damage than the HOLC maps themselves.\n\nBoth findings agree that federal housing policy deepened segregation. They disagree about **which agency** and **which mechanism** mattered most. That is a typical AP-level disagreement: same outcome, different causal emphasis."
    },
    {
      id: "aasci4-check",
      type: 'multiple-choice' as const,
      content: "**Concept Check: Wealth and Housing Data** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which statement accurately describes the 2022 Federal Reserve wealth data in the table above?",
            "options": [
              "The average Black family earned about one-sixth the income of the average white family.",
              "Black families held about one-sixth of all the wealth owned by American families combined.",
              "The median white family held about six times as much wealth as the median Black family.",
              "The richest Black families held one-sixth the wealth of the richest white families."
            ],
            "correctAnswer": 2,
            "explanation": "The table reports medians of net worth, and 285,000 is about six times 44,900. It does not report income, each group's share of total national wealth, or the wealth of the richest families."
          },
          {
            "question": "Why do historians connect 1930s federal housing policy to present-day wealth gaps?",
            "options": [
              "The Fair Housing Act of 1968 required new maps.",
              "Redlining maps are still legally binding today.",
              "Home equity is passed down to heirs.",
              "HOLC grades now set every family's property tax."
            ],
            "correctAnswer": 2,
            "explanation": "Homes are the main store of family wealth, and wealth is inherited, so families shut out of homeownership in the 1930s–1960s passed less wealth to later generations. The maps carry no legal force today, the Fair Housing Act banned discrimination rather than drawing maps, and HOLC grades do not set taxes."
          },
          {
            "question": "Fishback and coauthors and the 2018 NCRC study differ mainly over which question?",
            "options": [
              "Whether the Fair Housing Act of 1968 banned discrimination in lending",
              "Whether federal housing policy had any effect on residential segregation",
              "Which federal agency and practice did the most to steer lending by race",
              "Which city produced the first HOLC map that graded a neighborhood D"
            ],
            "correctAnswer": 2,
            "explanation": "Both accept that federal policy deepened segregation; they disagree about whether HOLC maps or FHA underwriting did more of the damage. Neither disputes the Fair Housing Act's terms, and the question of the first map is not at issue."
          }
        ]
      }
    },
    {
      id: "aasci4-health",
      type: 'text' as const,
      content: "## 🎓 Data set 3: education and a growing population\n\n**What the framework reports** (Topics 4.15 and 4.16)\n\n| Measure | Finding |\n|---|---|\n| Black adults with a bachelor's degree or higher, 2019 | **23 percent** |\n| Number of Black college degree holders since 2000 | **More than doubled** |\n| Black-identifying population, 2000–2019 | **Grew 30 percent**, to about 47 million (nearly 14 percent of the U.S. population) |\n| Black immigrants since 2000 | **Nearly doubled**, mainly from Africa and the Caribbean |\n\n### Connecting the numbers to history\n\n- **Desegregation** in the 1950s and 1960s expanded educational opportunity, and the number of Black college graduates rose gradually (EK 4.15.A.2).\n- Education and urban employment helped the **Black middle class** grow, and Black entrepreneurs built businesses such as restaurants, banks and publishing houses to serve Black communities, some still operating today (EK 4.15.A.3).\n- Yet higher education and income did not erase the **wealth gap** in Data set 1, because wealth builds up across generations and earlier discrimination in housing and employment limited what families could pass down (EK 4.15.A.1).\n\n### Reading the table carefully\n\n| Careful reading | Careless reading |\n|---|---|\n| \"The **number** of Black degree holders more than doubled after 2000.\" | \"Twice as many Black adults went to college.\" (A count is not a share of adults.) |\n| \"In 2019, 23 percent of Black adults held at least a bachelor's degree.\" | \"Most Black adults held college degrees by 2019.\" |\n\n> ⚠️ **AP Alert:** When a data source shows a gap or a trend, earn credit by describing it precisely (\"about a tenth of the median white family's wealth,\" \"more than doubled\"), then explaining it with **specific historical evidence**. Do not claim the table proves a single cause."
    },
    {
      id: "aasci4-apply",
      type: 'multiple-choice' as const,
      content: "**AP-Style Application: Education Data** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which statement accurately describes the education data in Data set 3?",
            "options": [
              "By 2019, 23 percent of Black adults held at least a bachelor's degree",
              "By 2019, most Black adults held at least a bachelor's degree",
              "The number of Black degree holders fell by half after the year 2000",
              "Black college enrollment stopped growing once desegregation ended"
            ],
            "correctAnswer": 0,
            "explanation": "The framework reports that 23 percent of African American adults held a bachelor's degree or higher in 2019, which is well short of a majority. The number of degree holders more than doubled after 2000 rather than falling, and desegregation expanded rather than ended educational opportunity."
          },
          {
            "question": "Why did a rising number of Black college graduates after 2000 not close the racial wealth gap?",
            "options": [
              "Assets build up over generations, and earlier discrimination limited inheritance",
              "College graduates earn less on average than adults without degrees",
              "Federal law barred Black graduates from buying homes until 2008",
              "The gap had already disappeared before the year 2000"
            ],
            "correctAnswer": 0,
            "explanation": "Wealth accumulates and passes down over generations, so discrimination in housing and employment earlier in the twentieth century still shapes what families hold today (EK 4.15.A.1). Degrees raise earnings, housing discrimination was outlawed in 1968, and the gap remained large in 2016 and 2022."
          }
        ]
      }
    }
  ]
}
