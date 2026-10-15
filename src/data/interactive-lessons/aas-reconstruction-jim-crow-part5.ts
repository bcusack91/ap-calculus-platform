export const aasReconstructionJimCrowPart5Data = {
  topicSlug: "aas-reconstruction-jim-crow",
  sections: [
    {
      id: "aasrjc5-intro",
      type: 'text' as const,
      content: "# ⚖️ Reconstruction & Jim Crow\n\n**Part 5 of 7 — Building Jim Crow, 1877–1910**\n\n---\n\nThe end of Reconstruction in 1877 did not produce the full Jim Crow system overnight. For about a dozen years the South was **unsettled**: Black men still voted in large numbers in many places, Black Republicans still won local and legislative offices, and some railroads and streetcars were not yet segregated by law. **George H. White** of North Carolina served in Congress until 1901; after his term ended, no Black Southerner sat in Congress again until 1973.\n\nHistorian **C. Vann Woodward** (*The Strange Career of Jim Crow*, 1955) argued that the rigid, law-based system took shape mainly in the **1890s**. Others have stressed that segregation by custom, and violence, were present from the start. Both views agree on the key point for the exam: between about **1890 and 1910** Southern states turned custom and intimidation into **written law**.\n\n| Pillar of Jim Crow | Main tools | Key dates |\n|---|---|---|\n| **Disfranchisement** | Poll taxes, literacy and \"understanding\" tests, residency rules, grandfather clauses, white primaries | Mississippi 1890 → Oklahoma 1910 |\n| **Segregation** | Separate-car laws, school laws, then separate waiting rooms, parks and more | Louisiana 1890; *Plessy* 1896 |\n| **Violence** | Lynching; massacres and coups | Peak lynching years in the early 1890s; Wilmington 1898 |\n| **Coerced labor** | Vagrancy and \"pig\" laws, convict leasing, debt peonage | From the 1870s into the 1900s and later |"
    },
    {
      id: "aasrjc5-vote",
      type: 'text' as const,
      content: "## 📖 Taking the vote: the \"Mississippi Plan\" of 1890\n\nMississippi called a constitutional convention in **1890** with the open aim of ending Black voting without openly violating the 15th Amendment. Its new constitution required:\n\n| Requirement | How it worked in practice |\n|---|---|\n| **Poll tax** (\\$2 a year) | Had to be paid well before the election, and receipts kept; a real burden for cash-poor sharecroppers |\n| **Literacy test with an \"understanding clause\"** | A voter had to read a section of the state constitution, **or** understand it when read to him, **or** give a reasonable interpretation, as judged by a white registrar |\n| **Long residency requirement** | Two years in the state; it struck at tenant farmers who moved from place to place each year |\n| **Disqualifying crimes** | Bribery, burglary, theft, arson, perjury, bigamy and similar offenses, chosen because officials believed Black men were more often convicted of them |\n\nIn 1896 Mississippi's own supreme court admitted that the convention had \"swept the circle of expedients\" to block Black voting. Two years later, in ***Williams v. Mississippi*** **(1898)**, the U.S. Supreme Court **upheld** the system because its rules did not mention race on their face.\n\nOther states followed: **South Carolina** (1895), **Louisiana** (1898), **North Carolina** (1900), **Alabama** (1901), **Virginia** (1902), **Georgia** (1908) and **Oklahoma** (1910).\n\n- **Grandfather clause.** Louisiana's 1898 constitution exempted from its new literacy and property tests any man who had been entitled to vote on **January 1, 1867** (before Black men could vote there), or whose father or grandfather had been. It protected white voters and excluded nearly every Black man. The Supreme Court struck down Oklahoma's version in *Guinn v. United States* (1915).\n- **White primary.** Because the Democratic Party dominated the South, its primary was the real election, and the party declared itself a private, white-only organization.\n\n### 🔍 Data skill: reading a registration collapse\n\n| Louisiana registered voters | 1896 | 1900 |\n|---|---|---|\n| **Black** | about 130,000 | about 5,000 |\n| **White** | about 164,000 | about 125,000 |\n\nHow to read this in an answer:\n1. **Size of the change.** Black registration fell by about 125,000, or about **96%**, in four years.\n2. **Timing.** The drop straddles the **1898 constitution**, which points to law, not migration or apathy, as the cause.\n3. **A second pattern.** White registration fell too, by about a quarter: poll taxes and literacy tests also removed many poor white men, which weakened the Populist challenge to the Democrats."
    },
    {
      id: "aasrjc5-data",
      type: 'input-boxes' as const,
      content: "**Applied Recall: Read the Table** ✍️\n\nUse the Louisiana registration table above.",
      exercise: {
        "questions": [
          {
            "question": "By about how many did Black registration fall from 1896 to 1900?",
            "answer": "125000",
            "acceptableAnswers": [
              "125000",
              "125,000",
              "about 125000",
              "about 125,000"
            ]
          },
          {
            "question": "By about what percent did Black registration fall? (nearest whole percent)",
            "answer": "96",
            "acceptableAnswers": [
              "96",
              "96%",
              "96 percent",
              "about 96"
            ]
          },
          {
            "question": "Name the 1898 Supreme Court case that upheld Mississippi's 1890 voting rules (plaintiff's name only).",
            "answer": "Williams",
            "acceptableAnswers": [
              "Williams",
              "Williams v. Mississippi",
              "williams"
            ]
          }
        ],
        "hint1": "Subtract the 1900 figure from the 1896 figure.",
        "hint2": "Divide the drop by the starting figure, then multiply by 100.",
        "hint3": "The case is named for Henry Williams, a Black man indicted by an all-white jury.",
        "explanation": "130,000 − 5,000 = 125,000, and 125,000 ÷ 130,000 ≈ 0.96, a fall of about 96%. *Williams v. Mississippi* (1898) upheld the 1890 rules because they did not name race."
      }
    },
    {
      id: "aasrjc5-check1",
      type: 'multiple-choice' as const,
      content: "**Concept Check: Disfranchisement** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Why did the U.S. Supreme Court uphold Mississippi's 1890 voting rules in *Williams v. Mississippi* (1898)?",
            "options": [
              "The rules did not mention race on their face.",
              "The rules covered only state elections, not federal elections.",
              "The rules had already been approved by Congress in the 1870s.",
              "The rules were set to expire once literacy rates had risen."
            ],
            "correctAnswer": 0,
            "explanation": "The Court held that rules written in race-neutral language did not violate the 15th Amendment, even though they were administered to exclude Black voters. Mississippi's rules covered all elections, Congress never approved them, and they had no expiration date."
          },
          {
            "question": "Louisiana's 1898 constitution exempted a man from its new literacy and property tests if",
            "options": [
              "he had paid the state poll tax in each year since the 1880 census",
              "he had lived in the same parish since the end of Reconstruction",
              "he or his father or grandfather could vote on January 1, 1867",
              "he had served in the Union or Confederate army before April 1865"
            ],
            "correctAnswer": 2,
            "explanation": "Because no Black man in Louisiana could vote on January 1, 1867, the clause shielded white voters, including the illiterate and propertyless, while leaving Black men to face the tests. Military service, poll-tax history and residency were not the basis of the exemption."
          }
        ]
      }
    },
    {
      id: "aasrjc5-segregation",
      type: 'text' as const,
      content: "## 📖 Segregation by law: from the Separate Car Act to *Plessy*\n\nIn **1890** Louisiana passed the **Separate Car Act**, requiring railroads to provide \"equal but separate accommodations\" for white and Black passengers. In New Orleans, a city with a large, educated, French-speaking community of free people of color before the war, activists formed the **Citizens' Committee** (*Comité des Citoyens*) in 1891 to challenge it. Leaders included **Louis A. Martinet**, editor of *The Crusader*, and **Rodolphe Desdunes**. They hired **Albion W. Tourgée**, a white novelist and former North Carolina judge, as lead lawyer.\n\n| Step | What happened |\n|---|---|\n| **June 7, 1892** | **Homer Plessy**, a shoemaker of mixed ancestry, bought a first-class ticket, sat in the white car of an East Louisiana Railroad train, and was arrested by arrangement with the committee |\n| **1892** | Judge **John H. Ferguson** of the New Orleans criminal court rejected Plessy's challenge |\n| **May 18, 1896** | The U.S. Supreme Court upheld the law **7–1** in ***Plessy v. Ferguson***. Justice **Henry Billings Brown** wrote that separation did not stamp Black citizens with a \"badge of inferiority\" except by their own reading of it |\n| **Dissent** | Justice **John Marshall Harlan** of Kentucky, a former slaveholder, wrote that the Constitution is \"color-blind\" (Part 6) |\n\n*Plessy* gave constitutional approval to **\"separate but equal.\"** Over the next two decades Southern laws spread separation to streetcars, waiting rooms, schools, hospitals, parks and cemeteries. In practice facilities were almost never equal: Southern states spent far less per Black pupil than per white pupil.\n\n## 📖 Violence and coerced labor\n\n**Wilmington, North Carolina (November 10, 1898).** Wilmington, a majority-Black port, was governed by a **Fusion** coalition of Republicans and Populists. Democrats ran a \"white supremacy\" campaign, with Red Shirts intimidating voters, and seized on an editorial by **Alexander Manly**, editor of the Black-owned *Daily Record*. Two days after the election, an armed white mob led by former congressman **Alfred Moore Waddell** burned the *Record*'s office, killed Black residents (estimates range into the dozens), forced the elected mayor and aldermen to resign, and installed Waddell as mayor. Hundreds of Black residents fled, and no one was punished. North Carolina disfranchised Black voters in 1900.\n\n**Lynching.** Records kept by the Tuskegee Institute count more than 3,400 Black people lynched between 1882 and 1968, with the worst years in the early 1890s. Lynchings were often public spectacles, and the pretext was frequently not a crime at all but economic success or a refusal to defer, as in the 1892 Memphis lynching of Thomas Moss and two other men who ran the People's Grocery, which set Ida B. Wells to work (Part 6).\n\n**Convict leasing.** The 13th Amendment allowed involuntary servitude \"as a punishment for crime.\" Southern states arrested Black men under vagrancy laws and harsh property laws, such as Mississippi's 1876 \"pig law\" that made stealing farm animals grand larceny, and then **leased** prisoners to railroads, mines, turpentine camps and plantations. Lessees had no investment in a prisoner's life, and death rates ran far above those of free workers. Alabama did not stop leasing its state prisoners until 1928."
    },
    {
      id: "aasrjc5-ccot",
      type: 'text' as const,
      content: "## 🔍 Continuity and change, 1865–1910\n\n| Area | Under slavery | Reconstruction (1865–1877) | Jim Crow (c. 1890–1910) | Continuity or change? |\n|---|---|---|---|---|\n| **Labor** | Forced, unpaid gang labor | Contracts, sharecropping, tenancy | Sharecropping and crop liens; convict leasing; debt peonage | **Change** in legal form; **continuity** in planter control |\n| **Voting** | None | Black men vote; more than 1,500 hold office | Poll taxes, literacy tests, white primaries; few Black voters by 1910 | Gains **reversed** |\n| **Law** | Slave codes | Civil Rights Acts; 14th and 15th Amendments | Race-neutral wording, unequal enforcement; *Plessy* | **Change** in method (rules that never name race) toward a similar goal |\n| **Violence** | Whipping and sale | Klan terror, then federal crackdown | Lynching, massacres, coups; no federal protection | **Continuity** of racial terror |\n| **Institutions** | Hidden or white-supervised churches; literacy largely banned | Black churches, schools, colleges founded | Churches, schools, businesses and press grow despite segregation | **Change** that lasted |\n| **Land** | None | Field Order 15 land lost | Slow growth: about a quarter of Black farm operators owned land by 1910 | Partial **change** |\n\n> **AP Connection:** A strong CCOT answer avoids \"nothing changed.\" Jim Crow was **new** in form (state law, written constitutions, court approval), even where it aimed to restore older patterns of control. Black institutions that grew in these years are your best evidence of change that white supremacy could not undo."
    },
    {
      id: "aasrjc5-check2",
      type: 'multiple-choice' as const,
      content: "**AP-Style Practice: Building Jim Crow** 🎯",
      exercise: {
        "questions": [
          {
            "question": "In *Plessy v. Ferguson* (1896), the Court's majority ruled that Louisiana's Separate Car Act",
            "options": [
              "was void because Plessy could not be assigned to either race",
              "violated the equal protection clause of the 14th Amendment",
              "was valid as long as the facilities for each race were equal",
              "applied only to trains that crossed state lines into Louisiana"
            ],
            "correctAnswer": 2,
            "explanation": "Justice Brown's majority accepted \"equal but separate\" accommodations as a reasonable exercise of state power. The equal-protection argument was Harlan's dissent; the act covered trains within Louisiana; and Tourgée's argument about racial classification did not persuade the majority."
          },
          {
            "question": "The events in Wilmington, North Carolina, in November 1898 are best used as evidence that",
            "options": [
              "federal troops intervened to restore Republican officials to their elected posts",
              "Black voters in North Carolina had already lost the vote before the 1898 election",
              "white supremacists used armed force to overthrow an elected interracial government",
              "Populists and Democrats united to defend the city's Black officeholders"
            ],
            "correctAnswer": 2,
            "explanation": "An armed mob forced Wilmington's elected Fusion officials to resign and installed its own leader as mayor, and no federal force intervened. North Carolina did not disfranchise Black voters until 1900, and the Democrats' campaign targeted the Populist–Republican Fusion rather than defending it."
          },
          {
            "question": "Which development best shows CONTINUITY between slavery and the Jim Crow South?",
            "options": [
              "Black landownership fell to almost nothing in the decades after 1877.",
              "Convict leasing forced thousands of Black prisoners into unpaid labor for private profit.",
              "The 15th Amendment protected Black men's voting in most Southern elections.",
              "Black churches were placed under the control of white denominations again."
            ],
            "correctAnswer": 1,
            "explanation": "Convict leasing used the 13th Amendment's punishment clause to put Black workers back into coerced, unpaid labor, echoing slavery. Black men's voting collapsed after 1890, Black churches stayed independent, and Black landownership grew slowly rather than vanishing."
          }
        ]
      }
    }
  ]
}
