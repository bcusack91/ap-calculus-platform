export const aasOriginsDiasporaPart3Data = {
  topicSlug: "aas-origins-diaspora",
  sections: [
    {
      id: "aasod3-intro",
      type: 'text' as const,
      content: "# 🌍 Origins of the African Diaspora\n\n**Part 3 of 7 — Mapping the Diaspora: Regions of Origin, Destinations and Numbers**\n\n---\n\nThe word *diaspora* raises two questions: **where did people come from**, and **where were they taken**? Historians answer both with the *Trans-Atlantic Slave Trade Database* (SlaveVoyages), built from records of roughly 36,000 voyages, plus statistical estimates for voyages whose records are lost. All figures below are its estimates for 1501–1866, rounded.\n\nThe exam includes data, maps and charts, so this part is also practice in **reading quantitative sources**.\n\n### Table 1: Where captives were embarked in Africa\n\n| Coastal region (modern places) | Embarked (millions) | Share |\n|---|---|---|\n| **West Central Africa** (Kongo, Angola) | 5.69 | 45% |\n| **Bight of Benin** (Togo, Benin, western Nigeria) | 2.00 | 16% |\n| **Bight of Biafra** (eastern Nigeria, Cameroon) | 1.59 | 13% |\n| **Gold Coast** (Ghana) | 1.21 | 10% |\n| **Senegambia** (Senegal, Gambia) | 0.76 | 6% |\n| **Southeast Africa** (Mozambique, Madagascar) | 0.54 | 4% |\n| **Sierra Leone** region | 0.39 | 3% |\n| **Windward Coast** (Liberia, Côte d'Ivoire) | 0.34 | 3% |\n| **Total** | **12.5** | |\n\nWest Central Africa alone supplied nearly half of all captives, a fact many students miss because textbooks often picture \"West Africa\" only."
    },
    {
      id: "aasod3-dest",
      type: 'text' as const,
      content: "## Where survivors were landed\n\n### Table 2: Where captives disembarked\n\n| Destination | Disembarked (millions) | Share of 10.7 million |\n|---|---|---|\n| **Brazil** | 4.86 | 45% |\n| **British Caribbean** (Jamaica, Barbados and others) | 2.32 | 22% |\n| **Spanish Americas** (Cuba, Mexico, Peru and others) | 1.29 | 12% |\n| **French Caribbean** (mainly Saint-Domingue) | 1.12 | 10% |\n| **Dutch Americas** (Suriname, Curaçao) | 0.44 | 4% |\n| **Mainland North America** | 0.39 | 3.6% |\n| **Africa** (people freed from slave ships and landed, mainly at Sierra Leone) | 0.16 | 1.5% |\n| **Danish West Indies** | 0.11 | 1% |\n\n### Worked example: calculating and interpreting a share\n\n*Question:* What share of all survivors landed in the British and French Caribbean combined?\n\n1. **Add:** 2.32 + 1.12 = 3.44 million.\n2. **Divide by the total:** 3.44 ÷ 10.7 ≈ 0.32.\n3. **Convert:** about **32%**, close to one in three.\n4. **Interpret:** the Caribbean sugar colonies together took almost as large a share as Brazil, while North America took a small one. Sugar drove the trade."
    },
    {
      id: "aasod3-check",
      type: 'multiple-choice' as const,
      content: "**Data Check** 🎯 — use Tables 1 and 2.",
      exercise: {
        "questions": [
          {
            "question": "Which conclusion is best supported by Table 2?",
            "options": [
              "Spanish America took in more survivors than Brazil and Jamaica together.",
              "Europe took in about one tenth of all survivors of the Atlantic crossing.",
              "Most survivors of the voyage were taken to mainland North America.",
              "Brazil and the Caribbean received the large majority of survivors."
            ],
            "correctAnswer": 3,
            "explanation": "Brazil (45%) and the British, French, Dutch and Danish Caribbean together received the large majority of survivors. Mainland North America took only about 3.6%, Spanish America's 1.29 million is less than Brazil alone, and Europe received a tiny share."
          },
          {
            "question": "According to Table 1, which statement about where captives came from is accurate?",
            "options": [
              "West Central Africa supplied more captives than any other region.",
              "The Gold Coast supplied more captives than the Bights of Benin and Biafra combined.",
              "Senegambia supplied nearly half of all captives sent across the Atlantic.",
              "Southeast Africa supplied more captives than the Bight of Biafra did."
            ],
            "correctAnswer": 0,
            "explanation": "West Central Africa, the region of Kongo and Angola, supplied about 5.7 million people, roughly 45%. Senegambia supplied about 6%, the Gold Coast's 1.21 million is less than either bight alone, and Southeast Africa's 0.54 million is far below the Bight of Biafra's 1.59 million."
          }
        ]
      }
    },
    {
      id: "aasod3-calc",
      type: 'input-boxes' as const,
      content: "**Calculate** ✍️ Use Tables 1 and 2.",
      exercise: {
        "questions": [
          {
            "question": "What percentage of all survivors landed in Brazil? (nearest whole percent)",
            "answer": "45",
            "acceptableAnswers": [
              "45",
              "45%",
              "45.4",
              "45.4%"
            ]
          },
          {
            "question": "About how many times as many people landed in the British Caribbean as in mainland North America? (nearest whole number)",
            "answer": "6",
            "acceptableAnswers": [
              "6",
              "6x",
              "six"
            ]
          },
          {
            "question": "Which embarkation region supplied the largest number of captives?",
            "answer": "West Central Africa",
            "acceptableAnswers": [
              "West Central Africa",
              "West-Central Africa",
              "Central Africa",
              "West Central"
            ]
          }
        ],
        "hint1": "Divide the destination's number by the total of 10.7 million.",
        "hint2": "Divide 2.32 by 0.39 and round.",
        "hint3": "Look for the 45% row in Table 1.",
        "explanation": "Brazil received 4.86 of 10.7 million survivors, about 45%. The British Caribbean's 2.32 million is about six times mainland North America's 0.39 million (2.32 ÷ 0.39 ≈ 5.9). West Central Africa supplied about 5.7 million people."
      }
    },
    {
      id: "aasod3-growth",
      type: 'text' as const,
      content: "## A puzzle in the numbers: why did North America's Black population grow?\n\nMainland North America received fewer than 400,000 Africans. Yet by **1860** the United States had about **4.4 million** people of African descent (about 3.95 million enslaved and about 488,000 free).\n\nCompare **Jamaica**, which received close to a million Africans but held only about 310,000 enslaved people when British emancipation began in 1834.\n\n| Factor | Sugar colonies (Caribbean, northeast Brazil) | Mainland North America |\n|---|---|---|\n| **Work regime** | Sugar: deadly cane fields and boiling houses | Tobacco, rice and later cotton; also deadly, but less so than sugar |\n| **Disease environment** | Yellow fever and malaria killed many | Healthier in the Upper South |\n| **Sex ratio of imports** | Heavily male, so fewer families formed | Became more balanced as American-born generations grew |\n| **Planter strategy** | Often cheaper to buy new captives than sustain lives | After the 1808 import ban, enslavers profited from enslaved people's children |\n\n**Result:** births outpaced deaths in North America by the mid-1700s, a pattern called **natural increase**. In most sugar colonies deaths outpaced births, so populations were sustained only by new imports.\n\n> **AP Connection:** This contrast explains a key feature of African American history: by 1860, nearly all enslaved people in the United States were born in America, while Brazil and Cuba still had large African-born populations. That difference shaped culture, language and religion.\n\n## Regions of origin and diaspora destinations\n\nCaptives from particular regions often clustered in particular places, which shaped which African traditions survived where.\n\n| African region | A destination where many were taken | A cultural trace |\n|---|---|---|\n| **Bight of Benin** (Yoruba, Fon) | Bahia, Brazil; Saint-Domingue; Cuba | Orisha worship in Bahia and Cuba; Vodou in Haiti |\n| **West Central Africa** (Kongo, Mbundu) | Brazil; Saint-Domingue; South Carolina | Kongo cosmograms; Kongolese Catholicism |\n| **Gold Coast** (Akan) | Jamaica | Akan day names; Maroon leadership |\n| **Bight of Biafra** (Igbo) | Virginia and the Chesapeake; Jamaica | Igbo identity in Equiano's narrative |\n| **Sierra Leone and Windward Coast** (rice-growing regions) | South Carolina and Georgia Lowcountry | Rice knowledge; Gullah Geechee language |\n\n### Limits of the data\n\n- Ports and coastal regions are not homelands: many captives were marched from far inland.\n- Trade labels such as \"Coromantee\" (from the Gold Coast fort at Kormantse) were European categories, not always identities captives used themselves.\n- Illegal voyages after 1807 left fewer records, so those figures rest more on estimates."
    },
    {
      id: "aasod3-match",
      type: 'dropdown-select' as const,
      content: "**Match Region to Destination** 🔍",
      exercise: {
        "dropdowns": [
          {
            "label": "Bight of Benin (Yoruba, Fon): ___",
            "options": [
              "Virginia, where many Igbo captives landed",
              "Bahia, Brazil, where orisha worship endured",
              "Jamaica, where Akan leaders led Maroons",
              "Lowcountry Carolina, a center of rice skills"
            ]
          },
          {
            "label": "Gold Coast (Akan): ___",
            "options": [
              "Virginia, where many Igbo captives landed",
              "Lowcountry Carolina, a center of rice skills",
              "Bahia, Brazil, where orisha worship endured",
              "Jamaica, where Akan leaders led Maroons"
            ]
          },
          {
            "label": "Sierra Leone and Windward Coast: ___",
            "options": [
              "Bahia, Brazil, where orisha worship endured",
              "Lowcountry Carolina, a center of rice skills",
              "Virginia, where many Igbo captives landed",
              "Jamaica, where Akan leaders led Maroons"
            ]
          }
        ],
        "correctAnswers": [
          "Bahia, Brazil, where orisha worship endured",
          "Jamaica, where Akan leaders led Maroons",
          "Lowcountry Carolina, a center of rice skills"
        ],
        "hint1": "The orishas are Yoruba deities.",
        "hint2": "Nanny of the Maroons was of Akan descent.",
        "hint3": "Think about which crop the Lowcountry grew.",
        "explanation": "Yoruba and Fon captives from the Bight of Benin rebuilt orisha worship in Bahia; Akan captives from the Gold Coast were prominent among Jamaica's Maroons; captives from the rice-growing Upper Guinea coast were sought for Lowcountry rice plantations. Virginia's Igbo link runs through the Bight of Biafra."
      }
    },
    {
      id: "aasod3-apply",
      type: 'multiple-choice' as const,
      content: "**AP-Style Application** 🎯",
      exercise: {
        "questions": [
          {
            "question": "Which factor best explains why the African-descended population of mainland North America grew to about 4.4 million by 1860?",
            "options": [
              "Several million more Africans arrived through illegal imports after 1808",
              "Death rates on ships bound for North America were far below those elsewhere",
              "Free Black families migrated in large numbers from Brazil and the Caribbean",
              "Births among enslaved people outpaced deaths there by the mid-1700s"
            ],
            "correctAnswer": 3,
            "explanation": "Natural increase, births outpacing deaths, explains the growth from fewer than 400,000 arrivals. Illegal imports after 1808 were small, there was no large migration of free Black families from Brazil or the Caribbean, and shipboard mortality does not explain growth on land."
          },
          {
            "question": "Which is the most important limitation of using embarkation-region data to study the cultures of captives?",
            "options": [
              "The data come from abolitionist pamphlets, so their totals are always too high.",
              "The data cover only British voyages, so captives on Portuguese and French ships are left out.",
              "The data begin only in 1800, so the trade's first three centuries are missing.",
              "Many captives were marched from far inland, so one coastal area may hide many peoples."
            ],
            "correctAnswer": 3,
            "explanation": "A coastal embarkation region can include people from many inland societies, so it does not identify a single culture. The database covers voyages of all carriers from 1501 to 1866 and is built from shipping records and estimates, not pamphlets."
          },
          {
            "question": "A historian argues that Jamaica's and Virginia's enslaved populations followed different demographic paths. Which evidence best supports the claim?",
            "options": [
              "Jamaica received close to a million Africans but held about 310,000 enslaved people in 1834.",
              "Virginia received more Africans than Jamaica but ended with a smaller population by 1834.",
              "Virginia and Jamaica received the same number of Africans and grew at the same rate.",
              "Virginia received over a million Africans but had fewer enslaved people than Jamaica in 1834."
            ],
            "correctAnswer": 0,
            "explanation": "Jamaica's population stayed far below the number of Africans it received, showing that deaths outpaced births, the opposite of the natural increase in Virginia. Jamaica received far more Africans than Virginia, and all of mainland North America received fewer than 400,000."
          }
        ]
      }
    }
  ]
}
