export const aasSlaveryInAmericaPart4Data = {
  topicSlug: "aas-slavery-in-america",
  sections: [
    {
      id: "aassia4-intro",
      type: 'text' as const,
      content: "# 🏚️ Slavery in America (c. 1619–1865)\n\n**Part 4 of 7 — Numbers and the Cotton Economy: Reading Census Data**\n\n---\n\nThe federal census counted enslaved people from the first count in 1790, because the Constitution's three-fifths clause tied each state's seats in the House to its enslaved population. That makes the census one of the best sources for slavery's growth, and also a source with its own purposes and blind spots.\n\n### The census, 1790–1860 (rounded)\n\n| Census year | Enslaved people | Free African Americans |\n|---|---|---|\n| 1790 | about 698,000 | about 60,000 |\n| 1810 | about 1,191,000 | about 186,000 |\n| 1830 | about 2,009,000 | about 320,000 |\n| 1850 | about 3,204,000 | about 434,000 |\n| 1860 | **3,953,760** | about 488,000 |\n\n### How to read it\n\n- **Trend.** The enslaved population grew in every census and roughly **doubled between 1830 and 1860**, even though Congress had banned imports from Africa in 1808. (A small illegal trade continued, but it was far too small to explain this growth.)\n- **Rate.** The free Black population also grew, but more slowly, especially after Southern states made it harder to free people. In 1860 roughly nine of every ten African Americans were enslaved.\n- **Where.** Free African Americans lived in the North *and* the South: Maryland and Virginia had some of the largest free Black populations in the nation.\n\n### Natural increase: a North American exception\n\nAbout **388,000** Africans were carried directly to mainland North America in the entire history of the trade. By 1860 the United States held nearly **4 million** enslaved people. Brazil, by contrast, received close to **5 million** Africans but counted about **1.5 million** enslaved people in its 1872 census. The difference is **natural increase**: in most of the U.S. South, births among enslaved people outnumbered deaths, while sugar regions in Brazil and the Caribbean consumed lives faster than they were replaced and relied on new imports.\n\nNatural increase was not a sign of gentle treatment. Tobacco and cotton were less deadly than sugar, sex ratios evened out over generations, and after 1808 enslavers had a financial stake in every birth (Part 5 returns to what that meant for enslaved women).\n\n> **AP Connection:** Data questions usually ask you to **describe a trend** accurately and then **explain it** with outside knowledge. \"The enslaved population doubled between 1830 and 1860 (trend) because of natural increase and the expansion of cotton (explanation)\" does both."
    },
    {
      id: "aassia4-check1",
      type: 'multiple-choice' as const,
      content: "**Concept Check: Reading the Census** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which conclusion is best supported by the census table above?",
            "options": [
              "The free Black population grew faster than the enslaved population after 1830.",
              "The number of enslaved people about doubled from 1830 to 1860.",
              "Enslaved numbers fell after Congress banned imports from Africa in 1808.",
              "Most African Americans in 1860 were free people living in the Northern states."
            ],
            "correctAnswer": 1,
            "explanation": "The table shows about 2.0 million enslaved people in 1830 and nearly 4.0 million in 1860. The free Black population grew more slowly, the enslaved population rose in every census after 1808, and about nine in ten African Americans were enslaved in 1860."
          },
          {
            "question": "Which factor best explains why the U.S. enslaved population kept growing after the 1808 ban on imports from Africa?",
            "options": [
              "Smuggled African captives made up most of the growth after the ban.",
              "Births outnumbered deaths among enslaved people in most of the South.",
              "Congress repealed the import ban during the cotton boom of the 1830s.",
              "Most enslaved people worked on sugar estates with low death rates."
            ],
            "correctAnswer": 1,
            "explanation": "Natural increase drove the growth: in most of the U.S. South, births outpaced deaths. Smuggling was too small to explain millions of people, Congress never repealed the ban, and sugar estates were among the deadliest places to be enslaved."
          }
        ]
      }
    },
    {
      id: "aassia4-calc",
      type: 'input-boxes' as const,
      content: "**Calculate from the Data** ✍️\n\nUse the census table and the figures in the section above. Round to whole numbers.",
      exercise: {
        "questions": [
          {
            "question": "1) The enslaved population was about 2.0 million in 1830 and about 4.0 million in 1860. What was the percent increase?",
            "answer": "100",
            "acceptableAnswers": [
              "100",
              "100%",
              "100 percent",
              "about 100"
            ]
          },
          {
            "question": "2) In 1860 there were 3,953,760 enslaved and about 488,000 free African Americans. What percent of African Americans were enslaved?",
            "answer": "89",
            "acceptableAnswers": [
              "89",
              "89%",
              "89.0",
              "89 percent",
              "about 89"
            ]
          },
          {
            "question": "3) About 388,000 Africans were brought to mainland North America in all. About how many times larger was the 1860 enslaved population (3,953,760)?",
            "answer": "10",
            "acceptableAnswers": [
              "10",
              "10 times",
              "ten",
              "10.2",
              "about 10"
            ]
          }
        ],
        "hint1": "Percent change = (new − old) ÷ old × 100.",
        "hint2": "For the share, the denominator is enslaved plus free.",
        "hint3": "Divide the 1860 population by the number of people brought from Africa.",
        "explanation": "1) (4.0 − 2.0) ÷ 2.0 = 1.00, a 100% increase. 2) 3,953,760 ÷ (3,953,760 + 488,000) = 3,953,760 ÷ 4,441,760 ≈ 0.89, or 89%. 3) 3,953,760 ÷ 388,000 ≈ 10.2, so about ten times as large: evidence of natural increase."
      }
    },
    {
      id: "aassia4-business",
      type: 'text' as const,
      content: "## Slavery as a business: the domestic trade and the cotton economy\n\n### The \"Second Middle Passage\"\n\nBetween 1790 and 1860 about **one million** enslaved people were moved from the Upper South (Maryland, Virginia, Kentucky, the Carolinas) to the cotton and sugar states of the Lower South. Historian Ira Berlin called this forced migration the **\"Second Middle Passage.\"** Historians such as Michael Tadman estimate that most were **sold through traders** rather than moved by migrating owners.\n\n- **Firms.** Isaac Franklin and John Armfield formed a partnership in **1828**, based in Alexandria, Virginia (then part of the District of Columbia). By the 1830s Franklin & Armfield was the largest slave-trading firm in the country, shipping people by sea to **New Orleans** and marching others overland in chained lines called **coffles** to Natchez, Mississippi.\n- **Markets.** New Orleans held the largest slave market in the United States. Traders held people in pens, dressed and oiled them for sale, and advertised in newspapers.\n- **Capital.** Historians estimate that in 1860 enslaved people's market value was about **\\$3 billion** (in 1860 dollars), more than the nation's investment in railroads and factories combined. Banks lent planters money and accepted enslaved people as collateral.\n\n### Cotton and the national economy\n\nIn the decades before the Civil War, raw cotton was the nation's **leading export**, at times worth more than half the value of all U.S. exports. The profits did not stay in the South:\n\n| Northern link | How it tied to slavery |\n|---|---|\n| **Textile mills** | New England mills, such as those at Lowell, Massachusetts, spun Southern cotton. |\n| **Shipping and trade** | New York merchants and shipowners carried cotton to Liverpool and supplied credit to planters. |\n| **Finance** | Northern and British banks financed land and slave purchases. |\n| **Insurance** | Some Northern companies sold policies on enslaved people's lives, paying owners if they died. |\n\n### A data debate: why did picking rates rise?\n\nRecords show the amount of cotton a worker picked per day rose sharply between 1800 and 1860. Historian **Edward Baptist** (*The Half Has Never Been Told*, 2014) argued that the main cause was the \"pushing system\": daily quotas enforced by whipping and torture. Economists **Alan Olmstead and Paul Rhode** argued that new cotton varieties with larger, easier-to-pick bolls explain much of the increase. Neither side denies that violence was central to cotton slavery; they disagree about what the productivity numbers measure.\n\n### Sourcing the census\n\n- **Purpose:** apportionment and taxation, not recording enslaved lives.\n- **Slave schedules (1850, 1860):** listed enslaved people under each owner's name by age, sex and \"color,\" usually **without their names**.\n- **What it misses:** family ties, sales between censuses, and people who escaped.\n\n> **AP Connection:** Treat statistics like any other source: who produced them, for what purpose, and what they leave out. \"The census shows growth but hides individual people\" is a sourcing claim you can earn credit for."
    },
    {
      id: "aassia4-check2",
      type: 'multiple-choice' as const,
      content: "**AP-Style Practice: The Business of Slavery** 🎯",
      exercise: {
        "questions": [
          {
            "question": "The account books and letters of Franklin & Armfield would be most useful to a historian studying which topic?",
            "options": [
              "How Native nations were forced out of the Southeast",
              "How Northern states carried out gradual emancipation laws",
              "How the interstate slave trade worked as a business",
              "How African captives were carried across the Atlantic"
            ],
            "correctAnswer": 2,
            "explanation": "Franklin & Armfield was the largest domestic slave-trading firm of the 1830s, so its records document buying, shipping and selling people within the United States. The firm did not carry captives across the Atlantic, and it had no role in Northern emancipation or Indian removal."
          },
          {
            "question": "Which statement accurately describes the disagreement between Edward Baptist and economists Alan Olmstead and Paul Rhode?",
            "options": [
              "They dispute whether cotton was the leading U.S. export before the war.",
              "They dispute whether violence or new seed varieties raised picking rates.",
              "They dispute whether Northern banks lent any money to cotton planters.",
              "They dispute whether enslaved labor produced most of the South's cotton."
            ],
            "correctAnswer": 1,
            "explanation": "Baptist credited the rise in daily picking to quotas enforced by torture, while Olmstead and Rhode credited improved cotton varieties. Neither side doubts that enslaved people produced the cotton, that cotton led U.S. exports, or that Northern banks financed planters."
          },
          {
            "question": "A historian using the 1860 census slave schedules would face which limitation?",
            "options": [
              "Only enslaved people living in free states were recorded.",
              "The schedules counted only people who were sold that year.",
              "Most enslaved people were listed only by age and sex.",
              "Enslaved people were left out of all censuses before 1860."
            ],
            "correctAnswer": 2,
            "explanation": "The schedules listed enslaved people under their owners' names by age, sex and color, usually without their own names, which hides individuals and families. The census counted enslaved people from 1790, recorded them in the slave states, and did not track sales."
          }
        ]
      }
    }
  ]
}
