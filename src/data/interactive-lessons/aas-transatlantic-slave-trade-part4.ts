export const aasTransatlanticSlaveTradePart4Data = {
  topicSlug: "aas-transatlantic-slave-trade",
  sections: [
    {
      id: "aasts4-intro",
      type: 'text' as const,
      content: "# ⛓️ The Transatlantic Slave Trade\n\n**Part 4 of 7 — Reading the Data: Volume, Carriers and Change Over Time**\n\n---\n\nAlmost every number you have seen about the trade, including part 1's 12.5 million, comes from the **Trans-Atlantic Slave Trade Database** (SlaveVoyages), built by historians from shipping records, port registers, insurance papers and court files. The AP exam uses tables and graphs like the ones in this part, so the goal here is to practice the moves: read a table, compute a share, describe a trend, and name the limits of the evidence.\n\nAll figures below are the database's estimates as widely published around 2010, rounded. The estimates are revised as new records are found, so treat them as the best current approximation, not exact counts.\n\n### Table A: People embarked, by century\n\n| Period | Embarked (millions) |\n|---|---|\n| 1501–1600 | 0.28 |\n| 1601–1700 | 1.88 |\n| 1701–1800 | 6.49 |\n| 1801–1866 | 3.87 |\n| **Total** | **12.52** |\n\n### Worked example: computing a share\n\n*What share of all embarkations took place in the 1700s?*\n\n1. Find the part and the whole: 6.49 million (1701–1800) out of 12.52 million (total).\n2. Divide: 6.49 ÷ 12.52 = 0.518.\n3. Convert and round: about **52 percent**.\n\nSo a little more than half of everyone carried across the Atlantic was carried in a single century. That is a claim you can use in an argument about *when* the trade mattered most: the 1700s, the century of sugar's expansion and of British dominance, not the 1500s or 1600s."
    },
    {
      id: "aasts4-trend",
      type: 'text' as const,
      content: "## Change over time: the quarter-century view\n\nA century table hides the most interesting part of the story. Here are the later periods in 25-year blocks.\n\n### Table B: People embarked, 1751–1866\n\n| Period | Embarked (millions) |\n|---|---|\n| 1751–1775 | 1.93 |\n| 1776–1800 | 2.01 |\n| 1801–1825 | 1.88 |\n| 1826–1850 | 1.77 |\n| 1851–1866 | 0.23 |\n\n**Describing the graph.** If you plot these figures as a line graph, the line climbs through the 1700s, reaches its **peak in 1776–1800**, and then stays almost level for the next fifty years before collapsing after 1850.\n\n**Interpreting it.** Britain banned its trade in 1807 and the United States in 1808, yet embarkations in 1801–1850 stayed close to their peak. Two things explain this: other carriers, above all Brazilian and Cuban-based traders, took over the routes, and demand for labor on Brazilian coffee and sugar plantations and Cuban sugar plantations kept growing. The line finally drops when **Brazil enforced its own ban in 1850** (part 5 covers how). The lesson for an essay: a ban passed by one country did not end the Atlantic trade; the trade ended when the largest remaining markets closed.\n\n> **AP Connection:** For a trend question, use three moves: describe the pattern with numbers (\"stayed near 1.8–1.9 million per quarter-century\"), name the turning point, and explain it with outside knowledge."
    },
    {
      id: "aasts4-check1",
      type: 'multiple-choice' as const,
      content: "**Read the Trend** 🎯",
      exercise: {
        "questions": [
          {
            "question": "According to Table B, what happened to embarkations in 1801–1850, after Britain and the United States banned their own trades?",
            "options": [
              "They rose to more than double the peak",
              "They stayed close to their late-1700s peak",
              "They dropped to near zero within a decade",
              "They fell to about half their earlier level"
            ],
            "correctAnswer": 1,
            "explanation": "Embarkations were 1.88 million in 1801–1825 and 1.77 million in 1826–1850, close to the 2.01 million peak of 1776–1800. Other carriers and growing demand in Brazil and Cuba kept the trade running."
          },
          {
            "question": "Which development best explains the sharp fall in embarkations after 1850 shown in Table B?",
            "options": [
              "Britain's passage of the 1807 abolition act",
              "The U.S. constitutional ban taking effect",
              "Denmark's ban on its trade taking effect",
              "Brazil's enforcement of its ban on imports"
            ],
            "correctAnswer": 3,
            "explanation": "Brazil was the largest remaining market, and its 1850 law, backed by British naval pressure, finally stopped most imports. The British, U.S. and Danish bans had all taken effect decades earlier, yet the trade remained near its peak afterward."
          }
        ]
      }
    },
    {
      id: "aasts4-carriers",
      type: 'text' as const,
      content: "## Who carried the captives?\n\n### Table C: People embarked, by the flag of the ship, 1501–1866\n\n| Flag of the carrier | Embarked (millions) | Share of total |\n|---|---|---|\n| Portugal / Brazil | 5.85 | about 47% |\n| Britain | 3.26 | about 26% |\n| France | 1.38 | about 11% |\n| Spain / Uruguay | 1.06 | about 8% |\n| Netherlands | 0.55 | about 4% |\n| United States | 0.31 | about 2% |\n| Denmark / Baltic | 0.11 | about 1% |\n\nRead this table carefully: it records the **flag of the ship**, not where people landed. Two consequences:\n\n- **Portugal and Brazil carried nearly half of everyone**, and most of those voyages ran directly between Brazil and Africa. Britain was the leading carrier for much of the 1700s.\n- **Flag is not destination.** U.S.-flag ships carried about 305,000 people, but part 1 gave about 388,000 arrivals in mainland North America. Many people who landed in North America arrived on British ships before independence, while some U.S. ships delivered captives to Cuba and Brazil instead. The two figures measure different things.\n\n### Mortality from the same data\n\nAbout 12.52 million people embarked and about 10.70 million disembarked. The difference, about **1.8 million**, is the estimated number who died during the crossing, roughly 14.5 percent of those embarked. That is close to part 1's figure of about 15 percent."
    },
    {
      id: "aasts4-calc",
      type: 'input-boxes' as const,
      content: "**Calculate** ✍️ Use Tables A and C and the mortality figures above. Round as each question says.",
      exercise: {
        "questions": [
          {
            "question": "1) What percent of all embarkations (1501–1866) took place in 1701–1800? (nearest whole percent, number only)",
            "answer": "52",
            "acceptableAnswers": [
              "52",
              "52%",
              "51.8",
              "51.8%"
            ]
          },
          {
            "question": "2) What percent of all embarkations were carried on British ships? (nearest whole percent, number only)",
            "answer": "26",
            "acceptableAnswers": [
              "26",
              "26%",
              "26.0",
              "26.0%"
            ]
          },
          {
            "question": "3) About how many million people died during the crossing? (12.52 million embarked, 10.70 million disembarked; answer in millions, one decimal place)",
            "answer": "1.8",
            "acceptableAnswers": [
              "1.8",
              "1.8 million",
              "1.82",
              "1.82 million",
              "1,800,000"
            ]
          }
        ],
        "hint1": "Share = part ÷ whole, then multiply by 100.",
        "hint2": "Britain's figure in Table C is 3.26 million; the total is 12.52 million.",
        "hint3": "Deaths at sea = embarked − disembarked.",
        "explanation": "6.49 ÷ 12.52 ≈ 0.52, so about 52 percent of embarkations took place in the 1700s. 3.26 ÷ 12.52 ≈ 0.26, so British ships carried about 26 percent. 12.52 − 10.70 = 1.82, so about 1.8 million people died at sea."
      }
    },
    {
      id: "aasts4-limits",
      type: 'text' as const,
      content: "## The limits of the numbers\n\nNumbers are evidence, and every piece of evidence has limits. A strong AP response can name them.\n\n| Limit | Why it matters |\n|---|---|\n| **Deaths before embarkation are missing** | People who died during capture, on the march to the coast or in barracoons never appear in shipping records. The human cost of the trade was larger than any ship-based total. |\n| **Missing and illegal voyages** | Records are thinner for Portuguese and Brazilian voyages and for the illegal trade after 1807, so totals for those carriers depend more on estimation. |\n| **Deaths after arrival are missing** | Many people died in the first months after landing, during \"seasoning\" on plantations, and the database does not track them. |\n| **Records were made by traders** | Ship papers count people as cargo. They rarely record names, origins or the experience of the enslaved. |\n\nHistorians have worked against that last limit. The database's **African Names** collection lists about 91,000 people taken from slave ships captured after the trade was banned, recorded with their African names, ages and heights by courts in places such as Freetown, Sierra Leone. Even these records were created by officials, not by the captives themselves.\n\n> **AP Connection:** When a question asks for a *limitation* of a data source, do not just say \"it might be inaccurate.\" Say what is missing and how that changes the conclusion, for example: \"Because the database counts only people who boarded ships, it understates the trade's death toll.\""
    },
    {
      id: "aasts4-check2",
      type: 'multiple-choice' as const,
      content: "**AP-Style Data Practice** 🎯",
      exercise: {
        "questions": [
          {
            "question": "A student notes that U.S.-flag ships carried about 305,000 captives, but about 388,000 people disembarked in mainland North America. What best explains the difference?",
            "options": [
              "Many arrivals came on British and other vessels",
              "People were counted again each time they were resold",
              "The arrival count includes people born after landing",
              "Most U.S. voyages took place after the 1808 ban"
            ],
            "correctAnswer": 0,
            "explanation": "Flag and destination are different measures: many people who landed in North America, especially before 1776, arrived on British ships. The arrival estimate counts each person once on landing; it does not include births or later resales."
          },
          {
            "question": "What is the most serious limit of using embarkation totals to measure the human cost of the trade?",
            "options": [
              "They include crew members along with captives",
              "They leave out deaths before people reached the ships",
              "They rely on guesses for every single voyage",
              "They count only voyages that ended in Brazil"
            ],
            "correctAnswer": 1,
            "explanation": "People who died during capture, the march to the coast or in barracoons never appear in shipping records, so ship-based totals understate the death toll. The database covers every region and is built from documented voyages, and it counts captives separately from crews."
          },
          {
            "question": "Which ranking of carriers, from largest to smallest, matches Table C?",
            "options": [
              "Portugal/Brazil, then Britain, then France",
              "Portugal/Brazil, then Britain, then Spain",
              "Britain, then Portugal/Brazil, then France",
              "Portugal/Brazil, then France, then Britain"
            ],
            "correctAnswer": 0,
            "explanation": "Portugal and Brazil carried about 5.85 million, Britain about 3.26 million and France about 1.38 million. Spain and Uruguay come fourth with about 1.06 million, and Britain led mainly during the 1700s."
          }
        ]
      }
    }
  ]
}
