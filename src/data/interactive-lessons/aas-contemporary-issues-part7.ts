export const aasContemporaryIssuesPart7Data = {
  topicSlug: "aas-contemporary-issues",
  sections: [
    {
      id: "aasci7-intro",
      type: 'text' as const,
      content: "# ⚡ Contemporary Issues & Debates\n\n**Part 7 of 7 — AP Review: Contemporary Issues in Synthesis**\n\n---\n\nThis review pulls Parts 2–6 together. It gives you one timeline, one map of how this topic connects to earlier units, and a model of the DBQ moves the exam rewards: contextualization, a defensible thesis, and evidence from documents plus your own knowledge.\n\n## 🗓️ Timeline, 1980–2023\n\n| Year | Event | Covered in |\n|---|---|---|\n| **1982** | VRA amendments add the Section 2 results test | Part 3 |\n| **1984, 1988** | Jesse Jackson's presidential campaigns | Part 3 |\n| **1986** | Anti-Drug Abuse Act sets the 100:1 crack–powder ratio | Part 2 |\n| **1987** | Toni Morrison's *Beloved* | Part 5 |\n| **1990** | Immigration Act creates the Diversity Visa | Part 5 |\n| **1994** | Violent Crime Control and Law Enforcement Act | Part 2 |\n| **2008** | Barack Obama elected president | Part 3 |\n| **2010** | Fair Sentencing Act cuts the ratio to 18:1 | Part 2 |\n| **2013** | *Shelby County v. Holder*; #BlackLivesMatter begins | Parts 3, 6 |\n| **2015** | Justice Department's Ferguson reports | Part 6 |\n| **2018** | First Step Act; *Black Panther* | Parts 2, 5 |\n| **2020** | George Floyd protests | Part 6 |\n| **2023** | *Allen v. Milligan*; California task force report | Parts 3, 6 |"
    },
    {
      id: "aasci7-sequence",
      type: 'multiple-choice' as const,
      content: "**Quick Check: Chronology and Causation** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which law reduced the federal crack–powder ratio from 100:1 to 18:1?",
            "options": [
              "The Fair Sentencing Act",
              "The Anti-Drug Abuse Act of 1988",
              "The First Step Act",
              "The Violent Crime Control Act"
            ],
            "correctAnswer": 0,
            "explanation": "The Fair Sentencing Act (2010) cut the ratio to 18:1. The First Step Act (2018) made that cut retroactive, the 1994 crime law did not change the ratio, and the 1988 Anti-Drug Abuse Act added a crack possession minimum."
          },
          {
            "question": "Which development after 2013 is a direct consequence of the *Shelby County* decision?",
            "options": [
              "States regained the power to use literacy tests as a qualification for registering to vote in elections.",
              "Section 2 of the Voting Rights Act was struck down, ending lawsuits against discriminatory district maps.",
              "Jurisdictions once covered by the formula could change voting rules without first getting federal approval.",
              "Congress passed a new coverage formula based on registration and turnout data from the 2012 election."
            ],
            "correctAnswer": 2,
            "explanation": "With no coverage formula, Section 5 preclearance applies to no one, so formerly covered places can change voting rules without federal approval. Congress has not passed a new formula, Section 2 survived and was applied in *Allen v. Milligan* (2023), and literacy tests remain banned."
          }
        ]
      }
    },
    {
      id: "aasci7-connections",
      type: 'text' as const,
      content: "## 🔗 Connecting to earlier units\n\nThe DBQ and thematic SAQ reward students who link the present to the past with specific evidence. Each row pairs a present-day issue with an earlier precedent from the course.\n\n| Present-day issue | Earlier precedent | The link |\n|---|---|---|\n| Mass incarceration and felony disenfranchisement | Black Codes and convict leasing after 1865 | Criminal law used to control Black labor and limit Black citizenship. |\n| *Shelby County* and voting rules | Reconstruction-era voting gains rolled back by poll taxes and literacy tests | Voting rights won by law can be weakened when enforcement ends. |\n| The racial wealth gap | Redlining, FHA underwriting and the G.I. Bill's local administration | Exclusion from homeownership compounds across generations. |\n| Black immigration and Afro-Latino identity | Caribbean migrants in 1920s Harlem; the African diaspora as a whole | Black identity in the United States has always included the diaspora. |\n| BLM and reparations debates | The Black Power era's demands for community control and the long history of reparations claims | Continuing debates about reform within institutions versus deeper structural change. |\n\n> 🔑 **Key Concept:** A connection earns credit only when you say **how** the two are linked (a shared mechanism, a cause, a continuity), not just that both happened."
    },
    {
      id: "aasci7-match",
      type: 'dropdown-select' as const,
      content: "**Match the Present to Its Precedent** 🔍",
      exercise: {
        "dropdowns": [
          {
            "label": "Felony disenfranchisement today most closely echoes ___",
            "options": [
              "the Harlem Renaissance's debates over art",
              "Black Codes that used criminal law to limit freedom",
              "the Great Migration out of the rural South",
              "the founding of Black colleges after 1865"
            ]
          },
          {
            "label": "The racial wealth gap today is most directly linked to ___",
            "options": [
              "exclusion from federally backed home loans",
              "the end of the Atlantic slave trade in 1808",
              "Jesse Jackson's presidential campaigns",
              "the Black Arts Movement of the late 1960s"
            ]
          },
          {
            "label": "Present-day Black immigration from the Caribbean continues a pattern seen in ___",
            "options": [
              "Reconstruction-era state legislatures",
              "the sit-in movement of 1960 in Greensboro",
              "the Freedmen's Bureau schools of the 1860s",
              "1920s Harlem, home to Garvey and Schomburg"
            ]
          }
        ],
        "correctAnswers": [
          "Black Codes that used criminal law to limit freedom",
          "exclusion from federally backed home loans",
          "1920s Harlem, home to Garvey and Schomburg"
        ],
        "hint1": "Look for a precedent that used criminal law.",
        "hint2": "Wealth gaps begin with homeownership.",
        "hint3": "Two famous Harlem figures were born in the Caribbean.",
        "explanation": "Felony disenfranchisement echoes the Black Codes' use of criminal law, the wealth gap traces to exclusion from federally backed mortgages, and Caribbean immigration continues a pattern visible in 1920s Harlem."
      }
    },
    {
      id: "aasci7-dbq",
      type: 'text' as const,
      content: "## ✍️ Model DBQ moves\n\n**Prompt:** Evaluate the extent to which African Americans gained political and economic equality between 1980 and the present.\n\n### Contextualization (the broader situation before and during the period)\n\n> By 1980 the Civil Rights Act of 1964 and the Voting Rights Act of 1965 had ended legal segregation and opened the ballot, and Black elected officials had grown in number since the 1970s. Yet deindustrialization was eliminating many of the urban manufacturing jobs that had supported Black families since the Great Migration, and a national turn toward \"tough on crime\" politics was under way.\n\n### Thesis (defensible, with a line of reasoning)\n\n> Between 1980 and the present, African Americans gained substantial political power, shown by Jesse Jackson's campaigns and Barack Obama's election, but economic equality remained limited, because mass incarceration and an inherited wealth gap rooted in housing discrimination offset many of those political gains.\n\n### Using documents well\n\n| Weak use | Strong use |\n|---|---|\n| \"Document 3 talks about wealth.\" | \"The Federal Reserve's 2022 data (Doc. 3) shows the median white family held about six times the wealth of the median Black family, evidence that political gains did not close economic gaps.\" |\n| Quoting the document at length with no comment. | Explaining the source's purpose or point of view: \"As a federal agency investigating a pattern of misconduct, the Justice Department (Doc. 4) had access to records protesters lacked.\" |\n\n**Evidence beyond the documents:** add something no document mentions, such as the 2010 Fair Sentencing Act or *Allen v. Milligan* (2023)."
    },
    {
      id: "aasci7-apply",
      type: 'multiple-choice' as const,
      content: "**AP-Style Application: Mixed Review** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which sentence would best serve as contextualization for an essay on mass incarceration after 1980?",
            "options": [
              "Many people have different opinions about prisons, and historians continue to debate the topic today.",
              "The Fair Sentencing Act of 2010 later reduced the crack–powder ratio from 100:1 to 18:1 for federal cases.",
              "Mass incarceration was the most important development in all of African American history since the Civil War.",
              "Deindustrialization cut urban jobs as \"tough on crime\" politics won support in each major party."
            ],
            "correctAnswer": 3,
            "explanation": "Contextualization describes the broader situation that shaped the topic: job losses in cities and bipartisan support for harsher penalties. The superlative claim is an unsupported thesis, the vague sentence says nothing specific, and the 2010 law is evidence from late in the period, not context."
          },
          {
            "question": "Which pair of scholars offers the clearest contrast in explaining how mass incarceration developed?",
            "options": [
              "Toni Morrison, who wrote about the memory of slavery, and Octavia Butler, who wrote science fiction about time travel",
              "Michelle Alexander, who stresses the drug war's racial design, and John Pfaff, who stresses prosecutors and state systems",
              "Arline Geronimus, who studied the effects of stress on health, and Mark Dery, who named Afrofuturism in an essay",
              "Jesse Jackson, who led the Rainbow Coalition, and Barack Obama, who won the presidency in 2008 and again in 2012"
            ],
            "correctAnswer": 1,
            "explanation": "Alexander and Pfaff disagree about the main driver of incarceration: federal drug policy designed with racial effects versus prosecutors and state sentencing. The other pairs are novelists, a health researcher and a critic, or politicians, none of whom offers competing explanations of incarceration."
          },
          {
            "question": "On the AP exam, a source-based question about the 2015 Ferguson reports would most likely ask you to ___.",
            "options": [
              "state which report you personally find more persuasive",
              "recall the exact number of pages in each of the two reports",
              "name every officer employed by the Ferguson department",
              "explain how the purpose of each report shaped its conclusion"
            ],
            "correctAnswer": 3,
            "explanation": "Source-based questions reward sourcing: purpose, audience and point of view explain why the two reports reached different conclusions. Page counts and personnel lists are trivia, and personal preference is not historical analysis."
          },
          {
            "question": "Which claim about Black political representation since 1980 is best supported by Parts 3 and 6?",
            "options": [
              "Electoral gains grew, but debates over turning office into policy continued.",
              "Electoral gains ended debate within Black communities over strategy and goals.",
              "Electoral gains came only from the presidential campaigns of the 1980s.",
              "Electoral gains were reversed entirely by the decision in Shelby County."
            ],
            "correctAnswer": 0,
            "explanation": "Jackson's campaigns, Obama's election and Black officeholders show real gains, while voting-rights litigation and debates over policing and reparations show that the meaning of those gains remained contested. Gains did not end debate, were not erased by one decision, and came from far more than two campaigns."
          }
        ]
      }
    },
    {
      id: "aasci7-recall",
      type: 'input-boxes' as const,
      content: "**Final Recall** ✍️",
      exercise: {
        "questions": [
          {
            "question": "1) In what year was the First Step Act signed into law?",
            "answer": "2018",
            "acceptableAnswers": [
              "2018"
            ]
          },
          {
            "question": "2) What is the term for the Section 4(b) provision that *Shelby County* struck down? (two words)",
            "answer": "coverage formula",
            "acceptableAnswers": [
              "coverage formula",
              "the coverage formula"
            ]
          },
          {
            "question": "3) What term describes art and literature that use science fiction to imagine Black pasts and futures?",
            "answer": "Afrofuturism",
            "acceptableAnswers": [
              "Afrofuturism",
              "afro-futurism",
              "Afro-futurism"
            ]
          }
        ],
        "hint1": "It came eight years after the Fair Sentencing Act.",
        "hint2": "It decided which places Section 5 covered.",
        "hint3": "The term joins a diaspora prefix with a word about time.",
        "explanation": "The First Step Act became law in 2018; *Shelby County* struck down the coverage formula; and Afrofuturism links works from Sun Ra and Octavia Butler to *Black Panther*."
      }
    }
  ]
}
