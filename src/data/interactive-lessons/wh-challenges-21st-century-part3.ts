export const whChallenges21stCenturyPart3Data = {
  topicSlug: 'wh-challenges-21st-century',
  sections: [
    {
      id: 'whc3-intro',
      type: 'text' as const,
      content: `
# Challenges of the 21st Century

**Part 3 of 7 — Patterns & Examples**

---

| Section |
|---|
| The Arab Spring (2010–12) and its aftermath |
| The 2015 European migration crisis |
| Brexit (2016) and the Trump election (2016) |
| The COVID-19 pandemic (2020+) |

> Key idea: AP prompts on the 21st century reward concrete, well-dated examples tied to the course's globalization themes. Memorize four: Arab Spring (protest against entrenched rulers), Syrian/Mediterranean migration crisis (migration), Brexit + Trump (a backlash against globalization), and COVID-19 (an emergent epidemic disease).
      `
    },
    {
      id: 'whc3-content',
      type: 'text' as const,
      content: `
## The Arab Spring (2010–12)

| Country | Outcome |
|---|---|
| Tunisia | Ben Ali ousted Jan 2011; transitioned to a fragile democracy (later eroded under Kais Saied after 2021) |
| Egypt | Mubarak ousted Feb 2011; Morsi elected 2012; Sisi military coup July 2013 |
| Libya | Gaddafi killed Oct 2011 after NATO intervention; descended into civil war |
| Syria | Assad refused to step down; protests became a civil war (~500,000 dead, millions displaced) |
| Yemen | Saleh stepped down 2012; later civil war pulling in Saudi Arabia and Iran |
| Bahrain | Saudi-backed crackdown crushed Shia-led protests |

> **Key takeaway from the Arab Spring:** Initial democratic openings were largely reversed (except Tunisia), and several countries collapsed into long civil wars. Social media coordination was insufficient against entrenched security states.

## The 2015 European Migration Crisis

> **Background:** Syrian civil war (2011+) plus Iraqi instability + Eritrean and sub-Saharan African flows produced the largest refugee movement to Europe since WWII.

| 2015 metric | Number |
|---|---|
| Migrant/refugee arrivals to Europe | ~1 million (mostly via Mediterranean and Balkan routes) |
| Deaths in the Mediterranean | ~3,800 |
| German welcome of Syrian refugees | ~1 million accepted ("Wir schaffen das" — Merkel) |
| Political response | Rise of far-right parties; Brexit referendum the next year |

## Brexit and the Trump Election (2016)

| Event | Date | Significance |
|---|---|---|
| Brexit referendum | June 23, 2016 | UK voted 52–48 to leave the EU |
| Trump elected | November 8, 2016 | First U.S. president without prior political or military experience |
| Brexit completed | January 31, 2020 | Formal UK exit from the EU |

| Common features | Significance |
|---|---|
| Right-populist anti-establishment | Both campaigns ran against perceived elite consensus |
| Immigration as central issue | Brexit + Trump both centered concerns about borders and migration |
| Disinformation and microtargeting | Cambridge Analytica scandal implicated both |
| Older + non-college vote | Both candidates won majorities of older and non-college-educated voters |

> **Course connection:** Read Brexit and the Trump election as **responses to economic and cultural globalization**: voters who felt left behind by free trade, migration and international institutions backed candidates who promised to restore national control.

## COVID-19 (2020+)

| Year | Event |
|---|---|
| Late 2019 | First cases identified in Wuhan, China |
| Jan 2020 | WHO declares Public Health Emergency |
| March 2020 | WHO declares pandemic; global lockdowns begin |
| Dec 2020 | First mRNA vaccines authorized (Pfizer, Moderna) |
| 2021 | Delta and Omicron variants drive new waves |
| 2023 | WHO ends global health emergency declaration |
| Total | ~7 million confirmed deaths globally; trillions in economic disruption |

> **Disease in a connected world:** Like the 1918 influenza pandemic and HIV/AIDS, COVID-19 shows a recurring pattern after 1900: new epidemic diseases spread quickly along global transport networks, disrupted societies and economies, and spurred medical advances such as new vaccines.

- **Key takeaway:** When an AP prompt asks about a 21st-century challenge, ground your answer in specific cases: Arab Spring 2011, Syrian war 2011+, European migration crisis 2015, Brexit + Trump 2016, COVID-19 2020+. Each case illustrates multiple challenges simultaneously.
      `
    },
    {
      id: 'whc3-quiz',
      type: 'multiple-choice' as const,
      content: `**Concept Check — Arab Spring and Brexit**`,
      exercise: {
        questions: [
          {
            question: 'Which best characterizes the long-term outcomes of the 2010–12 Arab Spring across the affected countries?',
            options: [
              'Tunisia made the only lasting democratic transition (later eroded under Kais Saied); Egypt returned to military rule under Sisi in 2013; Libya, Syria, and Yemen fell into civil war',
              'Most Arab Spring countries made durable democratic transitions that were still functioning as multi-party democracies a decade later, with the Syrian civil war as the main exception to the pattern',
              'Most Arab Spring countries returned to their old rulers within months (Ben Ali and Mubarak included); none saw lasting openings or civil wars',
              'The Arab Spring produced few changes of government, since almost all of the leaders in power in 2010 stayed in office through the following decade'
                ],
            correctAnswer: 0,
            explanation: 'The Arab Spring outcomes diverged sharply: Tunisia\'s qualified success vs. Egypt\'s coup vs. Libya/Syria/Yemen\'s civil wars.'
          },
          {
            question: 'The 2016 Brexit vote and the election of Donald Trump are most often analyzed as examples of which broader development?',
            options: [
              'Growing support among older voters for deeper European and global economic integration',
              'A wave of anti-colonial nationalism in states that had recently won independence',
              'A backlash against economic and cultural globalization',
              'A revival of communist parties after the 2008 financial crisis in Western Europe'
            ],
            correctAnswer: 2,
            explanation: 'Both campaigns drew on voters who felt harmed by free trade, migration and international institutions, making them responses to globalization. They rejected deeper integration rather than supporting it, they arose in long-independent wealthy democracies, and communist parties did not gain from the 2008 crisis.'
          }
        ]
      }
    },
    {
      id: 'whc3-input',
      type: 'input-boxes' as const,
      content: `**Term Sprint — 21st-century cases**`,
      exercise: {
        questions: [
          {
            prompt: 'The Tunisian street vendor whose December 2010 self-immolation triggered the wave of protests known as the Arab Spring.',
            answer: 'Mohamed Bouazizi',
            acceptableAnswers: ['Mohamed Bouazizi', 'Bouazizi', 'Mohammed Bouazizi'],
            hint: 'A 26-year-old fruit vendor in Sidi Bouzid.'
          },
          {
            prompt: "The German chancellor whose 'Wir schaffen das' speech welcomed roughly a million Syrian refugees in 2015.",
            answer: 'Angela Merkel',
            acceptableAnswers: ['Angela Merkel', 'Merkel'],
            hint: 'CDU leader; chancellor 2005–2021.'
          },
          {
            prompt: 'The UN agency that declared COVID-19 a pandemic in March 2020 (initials: WHO).',
            answer: 'World Health Organization',
            acceptableAnswers: ['World Health Organization', 'WHO', 'the World Health Organization'],
            hint: 'A UN specialized agency founded in 1948 and based in Geneva.'
          }
        ]
      }
    },
    {
      id: 'whc3-dropdown',
      type: 'dropdown-select' as const,
      content: `**Match each event to the correct year.**`,
      exercise: {
        dropdowns: [
          {
            label: 'Arab Spring protests force out Ben Ali in Tunisia and Mubarak in Egypt: ___',
            options: ['2008', '2011', '2016', '2022']
          },
          {
            label: 'European migration crisis peaks; ~1 million arrivals; Merkel\'s "Wir schaffen das": ___',
            options: ['2008', '2015', '2016', '2022']
          },
          {
            label: 'Brexit referendum and Trump election; right-populist wave across Western democracies: ___',
            options: ['2008', '2011', '2016', '2022']
          }
        ],
        correctAnswers: ['2011', '2015', '2016'],
        hint1: 'Ben Ali fled in January 2011; Mubarak fell in February 2011.',
        hint2: 'The migration crisis peaked in summer/autumn 2015.',
        hint3: 'Brexit was June 2016; Trump was November 2016.',
        explanation: 'Three sequential dates: 2011 (Arab Spring), 2015 (migration crisis), 2016 (right-populist surge in Anglo-Saxon democracies).'
      }
    },
    {
      id: 'whc3-applied',
      type: 'multiple-choice' as const,
      content: `**Applied AP Practice — Linking 21st-century events**`,
      exercise: {
        questions: [
          {
            question: 'Which response best explains the causal chain linking the 2011 Syrian civil war to the 2016 rise of right-populism in Europe?',
            options: [
              'The war sent over 4 million refugees abroad by 2015; as about 1 million asylum seekers reached Europe, backlash boosted the far right and Brexit\'s border focus',
              'The war had little effect on European politics, since nearly all Syrian refugees stayed in camps in Turkey, Lebanon, and Jordan and very few ever reached the European Union',
              'The war pushed European politics to the left, as sympathy for refugees boosted Green and Social Democratic parties and weakened anti-immigration movements across the continent',
              'The war mattered only through oil prices, since rising fuel costs after 2011 caused a European recession that fueled right-wing populism with no link to refugees'
            ],
            correctAnswer: 0,
            explanation: 'The Syria → 2015 migration crisis → 2016 backlash chain is a canonical AP causal sequence linking 21st-century events. UNHCR counted about 4.6 million registered Syrian refugees by the end of 2015, and roughly 1 million asylum seekers of many nationalities, about half of them Syrian, crossed the Mediterranean to Europe that year; parties such as the AfD in Germany and the National Front in France gained ground.'
          },
          {
            question: 'The COVID-19 pandemic best illustrates which continuity in the history of disease since 1900?',
            options: [
              'Medical advances after 1900 had ended the threat of new epidemic diseases',
              'Like the 1918 influenza, a new disease spread quickly along global transport networks and spurred medical advances',
              'Epidemics struck only industrialized countries with heavy air traffic and spared poorer regions',
              'Epidemic diseases since 1900 have spread mainly along overland caravan routes rather than by sea or air'
            ],
            correctAnswer: 1,
            explanation: 'Since 1900 new epidemics such as the 1918 influenza, HIV/AIDS and COVID-19 have spread quickly through a connected world, caused social disruption and prompted medical responses such as new vaccines. Medicine has not ended new epidemics, COVID-19 hit poorer regions hard, and modern epidemics travel by ship and aircraft rather than caravan.'
          }
        ]
      }
    }
  ]
}
