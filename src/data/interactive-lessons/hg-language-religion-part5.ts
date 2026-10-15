export const hgLanguageReligionPart5Data = {
  topicSlug: 'hg-language-religion',
  sections: [
    {
      id: 'hglangua5-intro',
      type: 'text' as const,
      content: `
# 🌍 Language & Religion

**Part 5 of 7 — Language, Religion and Identity: Unity, Conflict and Change**

---

| Section |
|---------|
| 📖 Centripetal or Centrifugal? It Depends on the Case |
| Language Policy, Extinction and Revival |
| Pidgins, Creoles and Lingua Francas Today |
| Secularization and Common Misconceptions |

> 🔑 **Key Concept:** Language and religion are two of the strongest sources of identity, so they can **unite** a state (centripetal) or **divide** it (centrifugal). They also change: languages die, revive and blend, and religious affiliation shifts. Regional patterns of language and religion give places their **sense of place** (CED Topics 3.3 and 3.8).
`
    },
    {
      id: 'hglangua5-forces',
      type: 'text' as const,
      content: `
## 📖 Centripetal or Centrifugal? It Depends on the Case

The same trait can pull a country together in one place and push it apart in another.

| Case | Trait | Effect | Evidence |
|---|---|---|---|
| **Quebec, Canada** | French language | Centrifugal | Sovereignty referendums in 1980 (about 60 percent voted No) and 1995 (No won with about 50.6 percent) |
| **India** | Many languages; Hindi and English official at the national level | Both | States were redrawn along language lines after 1956, which reduced conflict; protests in Tamil Nadu in the 1960s resisted Hindi, and English survives as a neutral **link language** |
| **Northern Ireland, U.K.** | Protestant and Catholic identities, tied to unionist and nationalist politics | Centrifugal | "The Troubles," from the late 1960s to the 1998 Good Friday Agreement, killed about 3,500 people |
| **Sri Lanka** | Mostly Buddhist, Sinhala-speaking majority; mostly Hindu, Tamil-speaking minority | Centrifugal | Civil war from 1983 to 2009, after policies such as the 1956 law making Sinhala the sole official language |
| **Poland under communism** | Roman Catholicism | Centripetal | The church was a unifying national institution in opposition to the communist state, 1945 to 1989 |

### How to Explain These on the Exam
1. **Name the trait** (language or religion) and the **group** it defines.
2. **State the direction:** does it unite citizens with the state, or set a group against it?
3. **Give the mechanism:** official-language laws, unequal access to jobs, separate schools, or shared institutions.
4. **Name the scale:** a centrifugal force at the national scale (Quebec in Canada) can be centripetal at the regional scale (French uniting Quebecers).

**Limitation of the centripetal/centrifugal frame:** it describes outcomes, not causes. Language and religion often matter because they overlap with **economic inequality and political power**; the Sri Lankan conflict was about jobs, education and autonomy as much as about language.
`
    },
    {
      id: 'hglangua5-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Concept Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'In India, English is used as a link language between speakers of Hindi, Tamil, Bengali and other languages. In this role, English acts mainly as a:',
            options: [
              'Centripetal force',
              'Centrifugal force',
              'Language isolate',
              'Creole language'
            ],
            correctAnswer: 0,
            explanation: 'A shared language that lets different groups communicate without favoring any one regional language helps hold the country together, which is a centripetal force. English is neither an isolate nor a creole.'
          },
          {
            question: 'French unites people within Quebec but has fueled movements to separate Quebec from Canada. What does this show?',
            options: [
              'A force can be centripetal at one scale and centrifugal at another',
              'Language never affects political boundaries in wealthy countries',
              'French is a centrifugal force in every place where it is spoken',
              'Religion is always a stronger source of identity than language'
            ],
            correctAnswer: 0,
            explanation: 'French binds Quebecers together regionally while pulling Quebec away from English-speaking Canada nationally, so the effect depends on scale. The other statements are absolute claims that real cases contradict.'
          },
          {
            question: 'Sri Lanka\'s 1956 law made Sinhala the sole official language. Why did this policy act as a centrifugal force?',
            options: [
              'It cut Tamil speakers off from government jobs and schooling',
              'It made Buddhism the only legal religion in the country',
              'It drew new boundaries that split Tamil regions in half',
              'It forced Sinhala speakers to learn English for work'
            ],
            correctAnswer: 0,
            explanation: 'Making one group\'s language the only official one disadvantaged Tamil speakers in jobs and education and deepened their grievances. The law concerned language, not a ban on religions or new boundaries.'
          }
        ]
      }
    },
    {
      id: 'hglangua5-change',
      type: 'text' as const,
      content: `
## Language Policy, Extinction and Revival

### Extinction
Ethnologue counts a little over **7,000** living languages, and it classifies more than 40 percent of them as endangered, many with fewer than 1,000 speakers. A language dies when children stop learning it at home. The usual causes are **economic** (jobs require a dominant language), **political** (schools or governments that punished minority languages) and **cultural** (media in a few global languages).

### Revival and Maintenance

| Language | What happened | Result |
|---|---|---|
| **Hebrew** | Used mainly in worship for centuries; revived as an everyday spoken language from the late 1800s | Now the main language of Israel, spoken natively by millions |
| **Welsh** | Taught in schools; Welsh-medium education and broadcasting | In the 2021 census about 18 percent of people in Wales aged 3 and over could speak Welsh |
| **Māori** | Made an official language of New Zealand in 1987; preschool "language nests" from 1982 | More young speakers, though most Māori still speak English at home |
| **Irish** | Official language of Ireland, required in schools | 2022 census: about 1.9 million said they could speak Irish, but only about 72,000 spoke it daily outside education |

**Reading the Irish data:** "can speak" and "uses daily" are different measures. A census question about ability makes a language look far healthier than a question about use. Always check what was asked.
`
    },
    {
      id: 'hglangua5-input',
      type: 'input-boxes' as const,
      content: `
**Calculate It** 🧮

**1)** About 1.9 million people in Ireland said they could speak Irish, and about 72,000 spoke it daily outside education. Daily speakers are what percent of those who said they could speak it? Round to the nearest whole percent.

**2)** Ethnologue counts about 7,000 languages and says more than 40 percent are endangered. At exactly 40 percent, how many languages is that?

**3)** In 1995, the No side in Quebec won with about 50.6 percent. What percent voted Yes, if every vote went to one side? Give one decimal place.
      `,
      exercise: {
        boxes: 3,
        correctAnswers: ['4', '2800', '49.4'],
        hint1: 'Divide 72,000 by 1,900,000, then multiply by 100.',
        hint2: 'Multiply 7,000 by 0.40.',
        hint3: 'Subtract 50.6 from 100.',
        explanation: '1) 72,000 ÷ 1,900,000 ≈ 0.038, about 4 percent. 2) 7,000 × 0.40 = 2,800 languages. 3) 100 − 50.6 = 49.4 percent voted Yes, one of the narrowest results in any independence referendum.'
      }
    },
    {
      id: 'hglangua5-creole',
      type: 'text' as const,
      content: `
## Pidgins, Creoles and Lingua Francas Today

Part 1 defined these terms. The process that links them is **creolization**:

1. **Contact:** groups with no shared language must trade or work together, often on plantations or in ports.
2. **Pidgin:** a simplified language forms, usually with vocabulary from the dominant group and simple grammar. No one speaks it natively.
3. **Creole:** children grow up speaking the pidgin as their first language and expand its grammar and vocabulary into a full language.

| Example | Source | Status today |
|---|---|---|
| **Haitian Creole** | French vocabulary with West African grammatical influence, from plantation slavery | An official language of Haiti alongside French, spoken by nearly all Haitians |
| **Tok Pisin** | English-based pidgin of Pacific plantation workers | An official language of Papua New Guinea and a lingua franca for a country with over 800 languages |
| **Swahili** | Bantu language with many Arabic words, from Indian Ocean trade | Lingua franca of East Africa; an official language of Kenya and Tanzania |

## Secularization and Common Misconceptions

**Secularization** is the decline of religious affiliation and practice. In the 2021 census of **England and Wales**, 46 percent described themselves as Christian, the first census below half, and 37 percent reported **no religion**. Secular landscapes follow: churches converted into apartments, shops and concert halls.

| Misconception | Correction |
|---|---|
| Most Muslims are Arabs. | Only about one in five Muslims is Arab. The countries with the most Muslims are Indonesia, Pakistan, India and Bangladesh. |
| The difference between a language and a dialect is purely linguistic. | It is often political. Hindi and Urdu are largely mutually intelligible in everyday speech but use different scripts and are tied to different national and religious identities. |
| A lingua franca is the same as an official language. | A lingua franca is any shared language of communication; it may have no official status. |
| A big religion must be universalizing. | Hinduism is the third-largest religion and is ethnic. |

> 🔑 **AP Connection:** For a "sense of place" question, connect a **regional pattern** of language or religion to a **landscape** feature and to **identity**: French signs in Quebec, Catholic shrines in Poland, Welsh place names in Wales.
`
    },
    {
      id: 'hglangua5-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Check Your Understanding** 🎯
      `,
      exercise: {
        questions: [
          {
            question: 'A pidgin used on plantations becomes the first language of the workers\' children, who expand its grammar. This process is called:',
            options: [
              'Creolization',
              'Assimilation',
              'Secularization',
              'Language extinction'
            ],
            correctAnswer: 0,
            explanation: 'When a pidgin gains native speakers and becomes a full language, it has undergone creolization. Assimilation is loss of a culture, secularization concerns religion, and extinction is the loss of all speakers.'
          },
          {
            question: 'About 1.9 million people in Ireland say they can speak Irish, but about 72,000 use it daily outside education. What is the best conclusion?',
            options: [
              'Ability figures overstate how often the language is spoken',
              'Irish is extinct because it has no native speakers left',
              'Irish is the main home language in most of Ireland today',
              'Census figures on language are always too unreliable to use'
            ],
            correctAnswer: 0,
            explanation: 'Many people learned Irish in school but rarely use it, so a question about ability gives a much higher number than a question about use. Irish is not extinct, and it is not the main home language for most people.'
          },
          {
            question: 'Which statement about the geography of Islam is accurate?',
            options: [
              'Most Muslims live outside the Arab world, mainly in Asia',
              'Arabs make up most of the world\'s Muslim population',
              'Islam is an ethnic religion tied closely to Arab identity',
              'The country with the most Muslims is Saudi Arabia'
            ],
            correctAnswer: 0,
            explanation: 'Only about one in five Muslims is Arab, and Indonesia, Pakistan, India and Bangladesh have the largest Muslim populations. Islam is a universalizing religion open to all peoples.'
          }
        ]
      }
    }
  ]
}
