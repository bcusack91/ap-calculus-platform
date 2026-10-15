export const hgPopulationGrowthPart7Data = {
  topicSlug: 'hg-population-growth',
  sections: [
    {
      id: 'hgpopula7-intro',
      type: 'text' as const,
      content: `
# 🌍 Population Growth & Decline

**Part 7 of 7 — Synthesis Review**

---

| Section |
|---------|
| 📖 The Big Picture: One Chain of Ideas |
| Which Concept Is the Question Asking For? |
| The Same Question at Different Scales |
| Traps to Avoid |

> 🔑 **Key Concept:** Every idea in this topic connects. **Measures** (CBR, CDR, TFR, IMR, migration) describe a population; the **DTM and ETM** describe how those measures change with development; **Malthusian theory and its critics** ask whether growth can be sustained; **policies** try to steer growth; and the **roles of women** and **aging** shape where the transition leads.
`
    },
    {
      id: 'hgpopula7-chain',
      type: 'text' as const,
      content: `
## 📖 The Big Picture: One Chain of Ideas

| Link in the chain | CED topic | Core idea | Anchor example | Key limitation |
|---|---|---|---|---|
| **Measures of change** | 2.4 | Change = (births − deaths) + net migration | U.S. 2023–24: about 0.5 million natural increase, about 2.8 million net migration | Crude rates reflect age structure, not just health or fertility |
| **Demographic Transition Model** | 2.5 | Death rates fall first, then birth rates, as societies develop | Niger (Stage 2), India (Stage 3), Japan (Stage 5) | Ignores migration; cannot predict timing; built on Western experience |
| **Epidemiological Transition Model** | 2.5 | Causes of death shift from infectious to chronic disease | Cholera receding (Stage 2); antimicrobial resistance (Stage 5) | Assumes one-way progress; misses the double burden of disease |
| **Malthus and critics** | 2.6 | Can food and resources keep up with population? | Food output more than tripled since 1961; about 733 million hungry in 2023 | Answer depends on scale: global supply vs. regional access |
| **Population policies** | 2.7 | Governments try to raise, lower or reshape population | France and South Korea (pro-natalist); China 1980–2015 (anti-natalist); Canada (points system) | Effects are often small, slow or have side effects |
| **Women and demographic change** | 2.8 | Women's education, work and rights lower fertility | Bangladesh TFR from close to 7 to about 2 | Correlation is strong, but culture and policy also matter |
| **Aging populations** | 2.9 | Low fertility plus long lives raises old-age dependency | Japan 29.3% aged 65+ (2024) | Responses (immigration, robots, later retirement) each have costs |

### How the Links Cause Each Other

1. **Falling mortality** (ETM Stage 2) opens the gap that makes **DTM Stage 2** grow fast.
2. That rapid growth is what worried **Malthus** and the **neo-Malthusians**, and what **Boserup** said would drive innovation.
3. Some governments answered with **anti-natalist** policies; but urbanization and **women's education** lowered fertility in many countries without them.
4. Fertility that falls far below replacement leads to **DTM Stage 5** and **aging**.
5. Aging pushes governments toward **pro-natalist** and **immigration** policies, bringing the chain back to the measures: births and migration.
`
    },
    {
      id: 'hgpopula7-quiz1',
      type: 'multiple-choice' as const,
      content: `
**Mixed Review** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "A country's CBR is 14, its CDR is 10 and its net migration rate is −6 per 1,000. Which statement is accurate?",
            options: [
              "Its population is shrinking even though births exceed deaths",
              "Its population is growing because births exceed deaths",
              "Its population is stable as migration offsets births",
              "Its RNI is negative, so emigration is rising"
            ],
            correctAnswer: 0,
            explanation: "Natural increase is +4 per 1,000, but net migration is −6 per 1,000, so total change is −2 per 1,000 and the population shrinks. RNI here is positive, and the two components do not cancel out."
          },
          {
            question: "Which pairing of a thinker and a claim is correct?",
            options: [
              "Boserup: population pressure leads farmers to intensify",
              "Malthus: food production grows geometrically as people multiply",
              "Simon: resource limits make famine nearly unavoidable",
              "Ehrlich: human ingenuity is the ultimate resource"
            ],
            correctAnswer: 0,
            explanation: "Boserup argued that population growth drives agricultural intensification. Malthus said food grows arithmetically, and the claims about ingenuity and resource limits belong to Simon and Ehrlich respectively, the reverse of the pairings shown."
          },
          {
            question: "Which country would be most likely to adopt a pro-natalist policy?",
            options: [
              "One with a TFR of 1.1 and a shrinking workforce",
              "One with a TFR of 5.5 and a very young population",
              "One with a TFR of 3.0 and rapid urban growth",
              "One with a TFR of 2.3 and rising net immigration"
            ],
            correctAnswer: 0,
            explanation: "Pro-natalist policies appear where fertility is far below replacement and the workforce is shrinking. Countries with TFRs of 3.0 or 5.5 are more likely to promote family planning, and a TFR of 2.3 with immigration poses little threat of decline."
          }
        ]
      }
    },
    {
      id: 'hgpopula7-clues',
      type: 'text' as const,
      content: `
## Which Concept Is the Question Asking For?

| Clue in the question | Concept to use | What to write |
|---|---|---|
| CBR and CDR given, no migration | **RNI** | (CBR − CDR) ÷ 10, as a percent |
| Migration rate given as well | **Population growth rate** | RNI plus net migration |
| "Why did the death rate fall?" | **DTM Stage 2 + ETM Stage 2** | Sanitation, vaccines and nutrition reduce infectious disease |
| "Why did the birth rate fall?" | **DTM Stage 3 + women's roles** | Urbanization, education, paid work, contraception |
| Farmers terracing or shortening fallow as density rises | **Boserup** | Population pressure drives intensification |
| "Can food supply keep up?" | **Malthus and critics** | Evaluate with data and name the scale |
| Cash for babies, tax breaks, parental leave | **Pro-natalist policy** | Usually small or temporary effects |
| Birth limits, sterilization drives | **Anti-natalist policy** | Lower births, with side effects such as sex-ratio imbalance and aging |
| Pensions, labor shortage, elder care | **Aging and dependency ratio** | Fewer workers per retiree |
| "Explain a limitation" | **Model limitations** | Name it, then apply it to a specific case |
`
    },
    {
      id: 'hgpopula7-dropdown',
      type: 'dropdown-select' as const,
      content: `
**Name the Concept** 🔍

Choose the concept that each situation best illustrates.
      `,
      exercise: {
        dropdowns: [
          {
            label: 'Farmers terrace hillsides and plant two crops a year as rural density rises: ___',
            options: ['Boserup\'s intensification', 'Epidemiological transition', 'Demographic transition', 'Old-age dependency']
          },
          {
            label: 'Heart disease replaces cholera as a leading cause of death: ___',
            options: ['Boserup\'s intensification', 'Epidemiological transition', 'Demographic transition', 'Old-age dependency']
          },
          {
            label: 'The crude birth rate falls from 40 to 15 per 1,000 as a country urbanizes: ___',
            options: ['Boserup\'s intensification', 'Epidemiological transition', 'Demographic transition', 'Old-age dependency']
          },
          {
            label: 'Each retiree\'s pension is funded by fewer and fewer workers: ___',
            options: ['Boserup\'s intensification', 'Epidemiological transition', 'Demographic transition', 'Old-age dependency']
          }
        ],
        correctAnswers: ['Boserup\'s intensification', 'Epidemiological transition', 'Demographic transition', 'Old-age dependency'],
        hint1: 'Population pressure leads to more labor and output per hectare.',
        hint2: 'The causes of death are changing, not just the number of deaths.',
        hint3: 'A falling birth rate as a society urbanizes is the DTM\'s Stage 3.',
        explanation: 'Terracing and double-cropping under population pressure is Boserup\'s intensification. A shift from infectious to chronic causes of death is the epidemiological transition. A falling CBR during urbanization is the demographic transition. Fewer workers supporting each retiree is a rising old-age dependency ratio.'
      }
    },
    {
      id: 'hgpopula7-scale',
      type: 'text' as const,
      content: `
## The Same Question at Different Scales

| Question | Global scale | National scale | Regional or local scale |
|---|---|---|---|
| Is population growing? | Yes, about 0.9% a year, all from natural increase | U.S. grows about 1% a year, mostly from migration | Many rural U.S. counties shrink as young adults leave |
| Is fertility below replacement? | No: world TFR is about 2.2 | India: yes, about 2.0 | Kerala about 1.8, but Bihar about 3.0 |
| Is there enough food? | Yes: output per person has risen since the 1960s | Most countries import to cover gaps | Hunger concentrated in parts of sub-Saharan Africa and South Asia |
| Is the population aging? | Slowly | Japan: rapidly, 29.3% aged 65+ | Japanese villages: some have mostly elderly residents and many vacant homes |

**Takeaway:** a claim that is true at one scale can be false at another. On the exam, name the scale you are using.

## Traps to Avoid

| Trap | Correct thinking |
|---|---|
| Treating RNI as the growth rate | RNI excludes migration; add net migration for total growth |
| Reading a high CDR as poor health care | Check the age structure first |
| Using a stage number as an explanation | A stage describes a pattern; explain the mechanism behind it |
| Saying Malthus was simply "wrong" | Globally his prediction failed; regionally, pressures he described still appear |
| Treating Boserup as a Malthus supporter | She reversed his causation: growth drives food innovation |
| Assuming policies work exactly as intended | China's policy also skewed sex ratios and sped aging; pro-natalist cash often has small effects |
| Forgetting Stage 5 is an addition | Classic versions of the DTM had four stages; Stage 5 was added later |

> 🔑 **AP Connection:** The highest-scoring answers in this unit do three things at once: cite the **data**, name the **concept** and state the **scale**. Practice combining all three in every explanation you write.
`
    },
    {
      id: 'hgpopula7-quiz2',
      type: 'multiple-choice' as const,
      content: `
**Final Check** 🎯
      `,
      exercise: {
        questions: [
          {
            question: "India's national TFR is about 2.0, but Kerala's is about 1.8 and Bihar's about 3.0. What does this illustrate?",
            options: [
              "A single average hides regional variation",
              "Kerala's lower TFR results from a one-child law",
              "Bihar has already completed the demographic transition",
              "India as a whole has entered Stage 5 of the DTM"
            ],
            correctAnswer: 0,
            explanation: "A single national figure averages states at very different points in the transition, which is why scale of analysis matters. India never had a one-child law, and Bihar's TFR of 3.0 shows it is still in transition."
          },
          {
            question: "Which policy is most likely to raise a country's old-age dependency ratio over the following decades?",
            options: [
              "A strict limit on the number of births in each family",
              "A large program admitting young working-age immigrants",
              "Subsidized child care and paid leave for new parents",
              "Raising the age at which workers may claim pensions"
            ],
            correctAnswer: 0,
            explanation: "Limiting births shrinks future working-age cohorts while the number of elderly keeps rising, as China experienced. Admitting young immigrants and encouraging births both add to future workers, and a later pension age does not change the age-based ratio."
          },
          {
            question: "Which statement best evaluates the Demographic Transition Model?",
            options: [
              "It describes past patterns well but cannot predict the timing of change",
              "It predicts exactly when each country will enter the next stage",
              "It explains population change fully because it includes migration flows",
              "It applies only to countries in Europe and North America today"
            ],
            correctAnswer: 0,
            explanation: "The DTM accurately describes the sequence of falling death and birth rates, but stage lengths vary widely, as South Korea's rapid transition shows. It leaves out migration, and its pattern has appeared in countries on every continent."
          }
        ]
      }
    }
  ]
}
