export const whGlobalizationTechPart3Data = {
  topicSlug: 'wh-globalization-tech',
  sections: [
    {
      id: 'whgt3-intro',
      type: 'text' as const,
      content: `
# Globalization & Technology After 1900

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| The Asian Tigers and the Chinese miracle |
| The Internet revolution: from ARPANET to mobile |
| Cultural globalization: Hollywood, K-pop, English, the Olympics |
| Environmental globalization: the Green Revolution and its critics |

> Key idea: AP prompts on globalization love specific cases. Memorize three: the Asian Tigers (state-led export growth), China after 1978 (Deng\'s reforms + 2001 WTO), and the Internet (1969 ARPANET → 1989 Web → 2007 iPhone). All three illustrate how state policy, technology, and global markets combined to produce uneven outcomes.
      `
    },
    {
      id: 'whgt3-content',
      type: 'text' as const,
      content: `
## The Asian Tigers (1960s–1990s)

| Tiger | Strategy | Result |
|---|---|---|
| South Korea | Park Chung-hee\'s 1962 export-led plan; chaebols (Samsung, Hyundai, LG) | Per capita GDP under \\$100 in 1960 → over \\$10,000 by 1995 |
| Taiwan | Land reform; export-processing zones; semiconductor industry (TSMC founded 1987) | Built dominant global chip foundry capability |
| Hong Kong | British colony until 1997; free trade port; finance hub | Reverted to PRC under "one country, two systems" |
| Singapore | Lee Kuan Yew\'s state-led developmentalism; English-language education | World\'s busiest port; financial hub |

## The Chinese Miracle (1978–today)

| Year | Event | Significance |
|---|---|---|
| 1978 | Deng Xiaoping launches "Reform and Opening" | Decollectivized agriculture; opened Special Economic Zones |
| 1980 | Shenzhen designated SEZ | Fishing village → mega-city of 18 million |
| 1989 | Tiananmen Square crackdown | Reforms continue economically; political opening reversed |
| 1992 | Deng\'s "Southern Tour" | Reaffirms market reforms |
| 2001 | China joins WTO | Manufacturing share of global exports skyrockets |
| 2008 | Beijing Olympics | China\'s coming-out party as global power |
| 2013 | Belt and Road Initiative announced | Chinese-financed infrastructure across Asia, Africa, Europe |

- **Result:** ~800 million Chinese lifted out of extreme poverty between 1981 and 2015 — the largest poverty reduction in world history.

## The Internet Revolution

| Year | Event | Significance |
|---|---|---|
| 1969 | ARPANET sends first message | Packet-switched precursor to the Internet |
| 1983 | TCP/IP protocol adopted | The Internet\'s common language |
| 1989 | Tim Berners-Lee invents the Web at CERN | Hypertext on the Internet |
| 1995 | Netscape IPO; Amazon and eBay founded | Commercial Web takes off |
| 1998 | Google founded | Search becomes the gateway to the Web |
| 2004 | Facebook founded | Social media era begins |
| 2007 | iPhone introduced | Mobile Internet for billions |
| 2010 | Arab Spring | Social media implicated in mass protests across the Arab world |
| 2020s | TikTok, generative AI | New rounds of platform and AI competition |

## Cultural Globalization

| Domain | Pattern |
|---|---|
| Film | Hollywood dominant 1920s–today; "Bollywood" produces more films than Hollywood by 2000s; Korean film wins Best Picture (Parasite, 2020) |
| Music | American rock & jazz globalized 1950s onward; K-pop globalized 2010s onward (BTS, BLACKPINK) |
| Sport | Olympics, FIFA World Cup, NBA, English Premier League — all became truly global media events |
| Language | English emerged as the global lingua franca of business, science, and aviation |
| Food | McDonaldization; sushi, pizza, tacos, and curry all globalized |

## Environmental Globalization: The Green Revolution

| Element | Description |
|---|---|
| Norman Borlaug\'s wheat (1940s–60s) | High-yield, disease-resistant varieties |
| Spread to India and Pakistan (1960s) | Tripled grain output; averted famine |
| IR8 rice (1966) | "Miracle rice" doubled Asian rice yields |
| Critics | Required heavy fertilizer, pesticide, irrigation; favored larger farmers; reduced biodiversity |

- **Key takeaway:** Globalization unfolded unevenly across regions. The Asian Tigers + China are AP\'s favorite "winners" cases; deindustrializing Rust Belts and African economies struggling under SAPs are the canonical "losers" cases. Use both in any AP essay on globalization\'s effects.
      `
    },
    {
      id: 'whgt3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Tigers and the Chinese miracle**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the developmental strategy of the Asian Tigers from the 1960s through the 1990s?',
            options: [
              'State-coordinated export-led industrialization, heavy investment in education, authoritarian or semi-authoritarian politics, and access to U.S. consumer markets as Cold War allies',
              'Pure laissez-faire free-market capitalism with no state coordination of industrial policy and no investment in education by the state in any of the four Tiger economies during the period',
              'Soviet-style central planning with state ownership of all major industries and no private firms or export industries during the entire period from 1960 through the 1990s',
              'Pure agricultural economies based on rice and tea exports with no manufacturing, finance, or technology sectors at any point during the period from 1960 through the 1990s'
            ],
            correctAnswer: 0,
            explanation: 'The Tiger model is canonically: state-coordinated export-led growth + education + authoritarian politics + Cold War U.S. market access.'
          },
          {
            question: 'Which Chinese leader launched the 1978 "Reform and Opening" program that decollectivized agriculture and created Special Economic Zones?',
            options: ['Mao Zedong', 'Deng Xiaoping', 'Jiang Zemin', 'Hu Jintao'],
            correctAnswer: 1,
            explanation: 'Deng Xiaoping consolidated power after Mao\'s death in 1976 and launched the Reform and Opening program in 1978.'
          }
        ]
      }
    },
    {
      id: 'whgt3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — globalization cases**`,
      exercise: {
        questions: [
          {
            prompt: 'The 1978 Chinese economic program that decollectivized agriculture and created Special Economic Zones.',
            answer: 'Reform and Opening',
            acceptableAnswers: ['Reform and Opening', 'Reform and Opening Up', 'Gaige Kaifang', 'Deng Xiaoping reforms'],
            hint: "Launched by Deng Xiaoping; transformed China's economy."
          },
          {
            prompt: 'The 1989 invention at CERN by Tim Berners-Lee that put hypertext on the Internet.',
            answer: 'World Wide Web',
            acceptableAnswers: ['World Wide Web', 'WWW', 'the Web', 'Web'],
            hint: 'Often abbreviated WWW.'
          },
          {
            prompt: "The American agronomist who developed high-yield wheat varieties at the heart of the Green Revolution.",
            answer: 'Norman Borlaug',
            acceptableAnswers: ['Norman Borlaug', 'Borlaug'],
            hint: 'Won the 1970 Nobel Peace Prize for his work feeding millions.'
          }
        ]
      }
    },
    {
      id: 'whgt3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each milestone to the correct decade.**`,
      exercise: {
        dropdowns: [
          {
            label: "Deng Xiaoping launches Reform and Opening; Shenzhen becomes a Special Economic Zone: ___",
            options: ['1970s', '1980s', '1990s', '2000s']
          },
          {
            label: 'Tim Berners-Lee invents the World Wide Web at CERN; commercial Internet begins to take off: ___',
            options: ['1970s', '1980s', '1990s', '2000s']
          },
          {
            label: 'China joins the WTO; the iPhone is introduced; Beijing hosts the Olympics: ___',
            options: ['1970s', '1980s', '1990s', '2000s']
          }
        ],
        correctAnswers: ['1970s', '1980s', '2000s'],
        hint1: 'Reform and Opening launched in 1978.',
        hint2: 'The Web was invented at CERN in 1989.',
        hint3: 'WTO accession 2001, iPhone 2007, Beijing Olympics 2008.',
        explanation: 'Three globalization waves: Chinese reforms 1970s, Internet infrastructure 1980s–90s, and the China + mobile + global commerce surge of the 2000s.'
      }
    },
    {
      id: 'whgt3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Cases of uneven globalization**`,
      exercise: {
        questions: [
          {
            question: 'Which response best explains why the Asian Tigers and China experienced rapid growth while many sub-Saharan African economies struggled during the 1980s and 1990s?',
            options: [
              'East Asian states combined coordinated industrial policy with heavy investment in education and Cold War access to U.S. markets, while many African states faced commodity-price collapses, IMF Structural Adjustment Programs, and inherited colonial export dependence',
              'East Asian and African economies experienced identical growth trajectories during the 1980s and 1990s with no meaningful differences in policy, education investment, or access to global markets between the two regions',
              'East Asian growth was caused entirely by natural resource endowments and African stagnation was caused entirely by lack of natural resources, with no role for industrial policy or education investment in either case',
              'East Asian growth was caused entirely by Cold War U.S. military aid and African stagnation was caused entirely by absence of Cold War military aid, with no role for economic policy or education investment in either case'
            ],
            correctAnswer: 0,
            explanation: 'The AP-quality answer names policy choices (industrial policy, education) AND the global structural context (Cold War market access vs. SAPs, commodity prices).'
          },
          {
            question: 'Which response best evaluates the long-term legacy of the Green Revolution?',
            options: [
              'The Green Revolution dramatically increased grain yields in India, Pakistan, Mexico, and the Philippines, averting predicted famines, but its reliance on fertilizers, pesticides, and irrigation produced soil degradation, groundwater depletion, and concentration of land in the hands of larger farmers',
              "The Green Revolution had no measurable effect on global grain yields and did not avert any famines anywhere in the world during the period from the 1960s through the 1990s when it was being implemented in major regions",
              "The Green Revolution increased grain yields with no measurable environmental costs or distributive effects on landholding patterns of any kind during the period from the 1960s through the 1990s in any region",
              "The Green Revolution caused famines in India, Pakistan, Mexico, and the Philippines and did not increase grain yields in any of those countries during the period from the 1960s through the 1990s when implemented"
            ],
            correctAnswer: 0,
            explanation: 'The both/and AP move: dramatic yield gains AND environmental + distributive costs. This is the canonical complexity framing.'
          }
        ]
      }
    }
  ]
}
