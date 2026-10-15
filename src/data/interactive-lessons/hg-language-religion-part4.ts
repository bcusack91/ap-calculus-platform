export const hgLanguageReligionPart4Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglangua4-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 4 of 7 — Reading Language and Religion Data and Maps**

---

| Section |
|---------|
| 📖 Native Speakers vs. Total Speakers |
| The World's Religions in Numbers |
| What a Majority Map Hides: India at Three Scales |
| Multilingual States: Switzerland and Belgium |

> 🔑 **Key Concept:** Language and religion data answer different questions depending on **what is counted** (first language or any language; affiliation or practice) and **at what scale** (world, country, state, district). Reading a table or map well means asking both before drawing a conclusion.
`
    },
    {
      id: 'hglangua4-speakers',
      type: 'text' as const,
      content: `
## 📖 Native Speakers vs. Total Speakers

**First-language** (native) speakers learned the language from birth. **Total speakers** adds people who use it as a second language.

**Ethnologue estimates, 2023, rounded:**

| Language | First-language speakers | Total speakers | Share of speakers who are native |
|---|---|---|---|
| **English** | 370 million | 1,460 million | About 25% |
| **Mandarin Chinese** | 940 million | 1,140 million | About 82% |
| **Hindi** | 345 million | 610 million | About 57% |
| **Spanish** | 485 million | 560 million | About 87% |

### Worked Reading
1. **Which ranking?** By first-language speakers, Mandarin leads by far. By total speakers, English leads.
2. **What explains the gap?** Three of every four English speakers learned it as a second language. That is the profile of a **lingua franca**: English is used for business, science, aviation, the internet and diplomacy, a legacy of the British Empire and of U.S. economic and cultural power since 1945.
3. **What about Spanish?** Most Spanish speakers are native, because Spanish spread mainly through colonial **settlement** in the Americas, where it replaced or joined Indigenous languages as a mother tongue.
4. **Limitation:** speaker counts are estimates. Censuses ask different questions, and "speaking" a second language ranges from basic to fluent.

> 🔑 **AP Connection:** If a stimulus shows a language with many more total speakers than native speakers, the expected explanation is its role as a **lingua franca** and the global processes, such as colonialism, trade and media, that put it there.
`
    },
    {
      id: 'hglangua4-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯

Use the speaker table.
      `,
      exercise: {
        questions: [
          {
            question: 'English has about four times as many total speakers as first-language speakers. Which conclusion is best supported?',
            options: [
              'It is widely learned as a lingua franca',
              'It has the most native speakers of any language',
              'Most English speakers live in the United Kingdom',
              'It is spoken mainly by people over the age of 60'
            ],
            correctAnswer: 0,
            explanation: 'A large gap between total and native speakers means most users learned English as a second language, which is the mark of a lingua franca. Mandarin has far more native speakers, and the table says nothing about where speakers live or their ages.'
          },
          {
            question: 'Mandarin leads in first-language speakers, but English leads in total speakers. What does this comparison show about using a single ranking?',
            options: [
              'The answer depends on what is counted',
              'One of the two estimates must be wrong',
              'Native speakers matter more than learners',
              'Total speakers is always the better measure'
            ],
            correctAnswer: 0,
            explanation: 'Different definitions produce different rankings, so a reader must check whether a table counts native or total speakers. Neither estimate is wrong; they measure different things.'
          },
          {
            question: 'About 87 percent of Spanish speakers are native speakers. Which historical process best explains this high share?',
            options: [
              'Colonial settlement made Spanish a mother tongue across the Americas',
              'Spanish is the main language of international aviation and science',
              'Most Spanish speakers learned it as adults in school or at work',
              'Spanish spread mainly through recent online media and streaming'
            ],
            correctAnswer: 0,
            explanation: 'Spanish settlers and colonial institutions made Spanish the home language of whole populations, so most speakers learn it from birth. The other options describe second-language spread, which would lower the native share.'
          }
        ]
      }
    },
    {
      id: 'hglangua4-religions',
      type: 'text' as const,
      content: `
## The World's Religions in Numbers

**Pew Research Center estimates for 2020, rounded:**

| Group | Followers | Share of world population |
|---|---|---|
| Christians | 2.3 billion | 28.8% |
| Muslims | 2.0 billion | 25.6% |
| Religiously unaffiliated | 1.9 billion | 24.2% |
| Hindus | 1.2 billion | 14.9% |
| Buddhists | 0.32 billion | 4.1% |
| Jews | 0.015 billion | 0.2% |
| All other religions | | about 2% |

### What the Table Shows, and What It Does Not
- **Trend:** between 2010 and 2020, Islam grew fastest, mainly because Muslims are younger on average and have higher fertility. The Christian share of the world fell slightly.
- **"Unaffiliated" is not "atheist":** it includes people who believe in God or practice folk traditions but do not identify with a religion. China accounts for a large part of this group.
- **Limitation:** the counts measure **self-identification**, not how often people pray or attend services. A country can be mostly Christian by affiliation yet have low attendance, as in much of Western Europe.
`
    },
    {
      id: 'hglangua4-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** Hindi has about 345 million first-language speakers out of about 610 million total speakers. What percent are native speakers? Round to the nearest whole percent.

**2)** India's 2011 census counted about 1.21 billion people, and about 14.2 percent were Muslim. About how many million Muslims is that? Round to the nearest whole million.

**3)** Muslims were 25.6 percent and Christians 28.8 percent of the world in 2020. What is the gap in percentage points? Give one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['57', '172', '3.2'],
        hint1: 'Divide 345 by 610, then multiply by 100.',
        hint2: 'Multiply 1,210 million by 0.142.',
        hint3: 'Subtract 25.6 from 28.8.',
        explanation: '1) 345 ÷ 610 ≈ 0.566, about 57 percent. 2) 1,210 × 0.142 ≈ 172 million Muslims. 3) 28.8 − 25.6 = 3.2 percentage points.'
      }
    },
    {
      id: 'hglangua4-scale',
      type: 'text' as const,
      content: `
## What a Majority Map Hides: India at Three Scales

A common map shades each area by its **majority** religion. It is easy to read and easy to misread.

**National scale.** India is shaded as a Hindu country: about **80 percent** Hindu in the 2011 census. But the remaining 14.2 percent who are Muslim is about **172 million** people, one of the largest Muslim populations of any country.

**State scale (2011 census).** A map of states shows variety the national map hides:
- **Punjab** has a Sikh majority, the only state where Sikhs are most of the population.
- **Nagaland, Mizoram and Meghalaya** in the northeast have Christian majorities.
- **Jammu and Kashmir** (then a state, now a union territory) and the islands of Lakshadweep have Muslim majorities.

**Local scale.** Within a Hindu-majority state such as Uttar Pradesh, some districts and many city neighborhoods have large Muslim populations, and the landscape shows mosques, Urdu signs and Muslim-run businesses.

### Map Types for Religion and Language

| Map type | Shows | Hides |
|---|---|---|
| **Majority (choropleth) map** | The largest group in each area | Every minority, however large |
| **Dot or proportional-symbol map** | How many people of each group live where | Exact boundaries and percentages |
| **Isogloss map** | Where a word or pronunciation changes | Gradual transitions; isoglosses for different words rarely line up exactly |

## Multilingual States: Switzerland and Belgium

**Switzerland** has four national languages. Approximate shares naming each as a main language: German about **62 percent** (north and center), French about **23 percent** (west), Italian about **8 percent** (south, Ticino) and Romansh under **1 percent** (parts of Graubünden). Most cantons are officially monolingual, so the language boundary shows on maps of cantons.

**Belgium** divides along a language line drawn in 1962–63: Dutch-speaking **Flanders** in the north holds nearly 60 percent of the population; French-speaking **Wallonia** is in the south; **Brussels** is officially bilingual; and a small German-speaking community sits in the east. The country has reorganized into a federal state largely along these linguistic lines.

> 🔑 **AP Connection:** When asked to explain a limitation of a language or religion map, the strongest answer usually names **scale** ("the national map hides state and local minorities") or **what is counted** ("majority shading hides a 172-million-person minority").
`
    },
    {
      id: 'hglangua4-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A world map shades India as a Hindu-majority country. Which conclusion would be a misreading of that map?',
            options: [
              'India has few Muslims',
              'Most Indians are Hindu',
              'The map uses national data',
              'Minorities are not shown'
            ],
            correctAnswer: 0,
            explanation: 'Majority shading hides minorities, and India\'s 14 percent Muslim minority is about 172 million people. The other statements correctly describe what a national majority map shows and leaves out.'
          },
          {
            question: 'A researcher wants to show how many Christians, Sikhs and Muslims live in each Indian state. Which map type would work best?',
            options: [
              'A proportional-symbol map with a symbol for each group',
              'A majority-religion choropleth map of each Indian state',
              'An isogloss map tracing where religious terms change',
              'A world map showing each country\'s largest religion'
            ],
            correctAnswer: 0,
            explanation: 'Proportional symbols show the size of each group in each state, including minorities. A majority choropleth shows only the largest group, an isogloss is for language features, and a world map is the wrong scale.'
          },
          {
            question: 'Which statement about Belgium is accurate?',
            options: [
              'Its federal structure largely follows a Dutch-French language divide',
              'Dutch is spoken mainly in Wallonia, in the southern half of the country',
              'Brussels is officially a monolingual French-speaking city today',
              'German is the language of most of the population in the north'
            ],
            correctAnswer: 0,
            explanation: 'Belgium reorganized into a federal state largely around Dutch-speaking Flanders and French-speaking Wallonia. Dutch is the language of Flanders in the north, Brussels is officially bilingual, and German is spoken only by a small eastern community.'
          }
        ]
      }
    }
  ]
}
