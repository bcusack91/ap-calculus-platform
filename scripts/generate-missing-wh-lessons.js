const fs = require('fs')
const path = require('path')

const outDir = path.join(process.cwd(), 'src/data/interactive-lessons')

const partTitles = [
  'Core Concepts',
  'Key Processes',
  'Patterns & Examples',
  'Connections & Interactions',
  'Change Over Time',
  'Problem-Solving Workshop',
  'AP Review',
]

const topics = [
  {
    slug: 'wh-world-wars',
    title: 'World Wars & Totalitarianism',
    icon: 'WW',
    themes: [
      'Causes and consequences of World War I',
      'Interwar instability and global depression',
      'Rise of fascism and authoritarian states',
      'World War II theaters and total war',
      'Genocide, the Holocaust, and postwar institutions',
    ],
    mcq: {
      question: 'Which factor most directly contributed to the outbreak of World War I in 1914?',
      options: [
        'Alliance commitments transformed a regional crisis into a continental war',
        'The United Nations imposed sanctions that escalated tensions',
        'Decolonization movements in Africa disrupted European diplomacy',
        'The Cold War arms race triggered preventive mobilization',
      ],
      correctAnswer: 0,
      explanation: 'The alliance system meant that Austria-Hungary\'s conflict with Serbia drew in Russia, Germany, France, and Britain, escalating a local crisis into a general European war.',
    },
    dropdown: {
      label: 'The 1919 peace settlement that imposed reparations on Germany was the',
      options: ['Treaty of Versailles', 'Congress of Vienna', 'Treaty of Brest-Litovsk', 'Potsdam Agreement'],
      correct: 'Treaty of Versailles',
      hint: 'Think post-WWI settlement and war-guilt clause.',
      explanation: 'The Treaty of Versailles redrew borders, assigned war guilt, and imposed reparations, shaping interwar politics.',
    },
    sprintQuestion: {
      question: 'Why do AP historians describe WWII as a total war?',
      options: [
        'Governments mobilized economies, civilians, propaganda, and industry at unprecedented scale',
        'It was fought only in Europe and involved only military targets',
        'It lacked ideological goals and was purely diplomatic',
        'Colonial territories were unaffected by the conflict',
      ],
      correctAnswer: 0,
      explanation: 'Total war involved whole societies: rationing, strategic bombing, women in wartime production, colonial troop mobilization, and state-directed economies.',
    },
    apQuestion: {
      question: 'Which post-1945 development was most directly shaped by the atrocities of WWII?',
      options: [
        'Creation of international human-rights frameworks and war-crimes tribunals',
        'Restoration of absolute monarchies across Europe',
        'A return to isolationist empires and mercantilism',
        'End of ideological conflict between capitalism and communism',
      ],
      correctAnswer: 0,
      explanation: 'Nuremberg, the UN Charter, and later human-rights law emerged from attempts to prevent and punish atrocities and aggressive war.',
    },
  },
  {
    slug: 'wh-mass-atrocities',
    title: 'Mass Atrocities & Resistance',
    icon: 'MA',
    themes: [
      'Genocide and state violence in the 20th century',
      'Targeting by ethnicity, religion, and political identity',
      'Resistance, rescue, and survival strategies',
      'International responses and failures of intervention',
      'Human-rights law and memory politics',
    ],
    mcq: {
      question: 'Which statement best explains why historians classify the Holocaust as genocide?',
      options: [
        'It involved systematic state-directed attempts to eliminate targeted populations',
        'It was a short-term battlefield conflict with limited civilian impact',
        'It only affected one city and had no ideological dimension',
        'It was primarily an economic depression rather than organized violence',
      ],
      correctAnswer: 0,
      explanation: 'Genocide involves intent to destroy protected groups, and Nazi policy combined ideology, bureaucracy, and industrialized killing.',
    },
    dropdown: {
      label: 'The 1948 UN agreement that legally defined genocide is the',
      options: ['Genocide Convention', 'Treaty of Tordesillas', 'Kellogg-Briand Pact', 'Yalta Accord'],
      correct: 'Genocide Convention',
      hint: 'Adopted by the UN after WWII; focuses on prevention and punishment.',
      explanation: 'The Genocide Convention created an international legal definition and obligations for states.',
    },
    sprintQuestion: {
      question: 'What makes mass atrocities difficult for the international community to stop in real time?',
      options: [
        'Sovereignty concerns, delayed information, and geopolitical rivalries often inhibit intervention',
        'International law prohibits all humanitarian action',
        'Atrocities are always spontaneous and impossible to document',
        'Regional organizations automatically intervene before violence escalates',
      ],
      correctAnswer: 0,
      explanation: 'Even when warning signs exist, intervention is constrained by political costs, legal debates, and competing strategic priorities.',
    },
    apQuestion: {
      question: 'Which evidence best supports a continuity-and-change argument about mass atrocities since 1900?',
      options: [
        'Continuity in scapegoating and propaganda; change in legal accountability mechanisms after 1945',
        'Atrocities ended globally after the creation of the UN',
        'All atrocities were identical because ideology never changed',
        'Modern communications eliminated violence against civilians',
      ],
      correctAnswer: 0,
      explanation: 'Patterns of exclusion and dehumanization persist, while legal institutions and norms changed significantly over time.',
    },
  },
  {
    slug: 'wh-cold-war-decolonization',
    title: 'Cold War & Decolonization',
    icon: 'CW',
    themes: [
      'Ideological rivalry between the U.S. and USSR',
      'Proxy wars and nuclear deterrence',
      'Decolonization movements in Asia and Africa',
      'Non-Aligned Movement and postcolonial diplomacy',
      'Cold War legacies after 1991',
    ],
    mcq: {
      question: 'Why did many newly independent states avoid formal alignment with either superpower?',
      options: [
        'Leaders sought autonomy and resisted becoming arenas for proxy conflict',
        'The Cold War had no influence outside Europe',
        'Both superpowers banned diplomatic relations with decolonizing regions',
        'Non-alignment required adopting communist one-party rule',
      ],
      correctAnswer: 0,
      explanation: 'Many postcolonial leaders pursued sovereignty, aid diversification, and strategic flexibility rather than bloc dependence.',
    },
    dropdown: {
      label: 'The 1955 conference often associated with Afro-Asian solidarity was held at',
      options: ['Bandung', 'Geneva', 'Tehran', 'Helsinki'],
      correct: 'Bandung',
      hint: 'Think Indonesia and foundations of the Non-Aligned Movement.',
      explanation: 'Bandung symbolized collective postcolonial diplomacy and anti-imperial cooperation.',
    },
    sprintQuestion: {
      question: 'Which development best illustrates how decolonization and the Cold War intersected?',
      options: [
        'Superpowers supplied aid and weapons to influence postcolonial civil conflicts',
        'Former colonies were excluded from all international organizations',
        'Decolonization ended before superpower rivalry intensified',
        'Proxy wars occurred only in Eastern Europe',
      ],
      correctAnswer: 0,
      explanation: 'From Angola to Afghanistan and Vietnam, local conflicts were frequently shaped by Cold War intervention.',
    },
    apQuestion: {
      question: 'What is the most defensible AP claim about Cold War outcomes in the Global South?',
      options: [
        'Local agency remained significant even as superpower pressure constrained choices',
        'All states had complete freedom from external influence',
        'Every decolonizing movement had identical ideology and strategy',
        'Cold War rivalry had no economic consequences for postcolonial states',
      ],
      correctAnswer: 0,
      explanation: 'Postcolonial states negotiated aid, ideology, and domestic priorities; outcomes cannot be explained by superpower action alone.',
    },
  },
  {
    slug: 'wh-newly-independent-states',
    title: 'Newly Independent States',
    icon: 'NI',
    themes: [
      'Nation-building after formal empire',
      'Borders, ethnicity, and political legitimacy',
      'Economic development strategies and debt',
      'Authoritarianism, democracy, and military rule',
      'Postcolonial identity and state capacity',
    ],
    mcq: {
      question: 'A common challenge for newly independent states in Africa and Asia was',
      options: [
        'Managing colonial borders that grouped diverse communities into single states',
        'Immediate access to stable industrial capital and high literacy',
        'Absence of external economic pressure from former imperial powers',
        'Complete political consensus over constitutional design',
      ],
      correctAnswer: 0,
      explanation: 'Colonial boundaries often ignored linguistic and cultural realities, intensifying governance and legitimacy problems.',
    },
    dropdown: {
      label: 'The strategy of replacing imported manufactured goods with domestic production is called',
      options: ['Import substitution industrialization', 'Mercantilist bullionism', 'Collective security', 'Open-door imperialism'],
      correct: 'Import substitution industrialization',
      hint: 'ISI is a classic postcolonial development model.',
      explanation: 'ISI aimed to reduce dependence on foreign industry through tariffs and local manufacturing.',
    },
    sprintQuestion: {
      question: 'Why did some newly independent governments become authoritarian?',
      options: [
        'Leaders often prioritized order and centralized control amid instability, conflict, and weak institutions',
        'International law required one-party systems after decolonization',
        'All voters rejected constitutional politics on ideological grounds',
        'Military influence vanished completely in postcolonial states',
      ],
      correctAnswer: 0,
      explanation: 'Security crises, patronage politics, and fragile institutions made democratic consolidation difficult in many contexts.',
    },
    apQuestion: {
      question: 'Which claim best supports a comparative essay on postcolonial development?',
      options: [
        'Different resource bases, institutions, and Cold War alignments produced divergent outcomes',
        'All newly independent states followed one identical development path',
        'Political ideology had no effect on economic strategy',
        'Postcolonial outcomes were determined only by climate',
      ],
      correctAnswer: 0,
      explanation: 'Comparative analysis should connect structural constraints with policy choices and international context.',
    },
  },
  {
    slug: 'wh-globalization-tech',
    title: 'Globalization & Technology',
    icon: 'GT',
    themes: [
      'Integration of global markets and finance',
      'Role of international institutions',
      'Digital revolution and information flows',
      'Cultural diffusion and hybrid identities',
      'Backlash and anti-globalization movements',
    ],
    mcq: {
      question: 'Which trend is most associated with late-20th-century economic globalization?',
      options: [
        'Expansion of multinational supply chains and trade liberalization',
        'Permanent closure of global capital markets',
        'End of transnational migration and remittances',
        'Return to isolated subsistence economies',
      ],
      correctAnswer: 0,
      explanation: 'Trade integration, foreign direct investment, and transnational production networks accelerated in this era.',
    },
    dropdown: {
      label: 'The institution created to regulate global trade rules in 1995 is the',
      options: ['World Trade Organization', 'League of Nations', 'Cominform', 'OPEC'],
      correct: 'World Trade Organization',
      hint: 'Think dispute settlement and multilateral trade agreements.',
      explanation: 'The WTO institutionalized trade governance after the GATT era.',
    },
    sprintQuestion: {
      question: 'How did digital technology change globalization most directly?',
      options: [
        'It reduced communication costs and enabled real-time transnational coordination',
        'It ended all cultural exchange between regions',
        'It prevented service-sector outsourcing',
        'It eliminated misinformation and political polarization',
      ],
      correctAnswer: 0,
      explanation: 'Networks, platforms, and rapid data exchange transformed business, activism, media, and migration networks.',
    },
    apQuestion: {
      question: 'Which evidence supports a nuanced argument about globalization?',
      options: [
        'Globalization expanded growth opportunities while also producing inequality and backlash',
        'Globalization benefited every group equally across all regions',
        'Globalization ended local culture and state power entirely',
        'Globalization had no relationship to technological change',
      ],
      correctAnswer: 0,
      explanation: 'Strong AP arguments balance benefits with uneven distributional effects and political responses.',
    },
  },
  {
    slug: 'wh-challenges-21st-century',
    title: 'Challenges of the 21st Century',
    icon: 'C21',
    themes: [
      'Climate change and environmental stress',
      'Transnational terrorism and security policy',
      'Pandemics and global health governance',
      'Migration, inequality, and human rights',
      'International cooperation and institutional limits',
    ],
    mcq: {
      question: 'Why are climate and pandemic issues often described as transnational challenges?',
      options: [
        'They cross borders and require coordinated international responses',
        'They can be solved by one state acting fully alone',
        'They affect only high-income countries',
        'They are unrelated to global governance institutions',
      ],
      correctAnswer: 0,
      explanation: 'Shared vulnerabilities and cross-border effects make cooperation essential even when interests diverge.',
    },
    dropdown: {
      label: 'The 2015 international accord focused on limiting global warming is the',
      options: ['Paris Agreement', 'Camp David Accords', 'Bretton Woods Agreement', 'Treaty of Utrecht'],
      correct: 'Paris Agreement',
      hint: 'COP21 and nationally determined contributions.',
      explanation: 'The Paris Agreement established a framework for emissions targets and periodic review.',
    },
    sprintQuestion: {
      question: 'What is a key AP takeaway about global terrorism after 2001?',
      options: [
        'Security responses reshaped domestic law, foreign policy, and civil-liberties debates',
        'Terrorism disappeared as a political concern by 2010',
        'Only one region experienced terrorism-related conflict',
        'International institutions unanimously agreed on all interventions',
      ],
      correctAnswer: 0,
      explanation: 'Counterterror policy produced long-term geopolitical and constitutional debates across many states.',
    },
    apQuestion: {
      question: 'Which thesis is strongest for an essay on 21st-century global challenges?',
      options: [
        'Interdependence increases both cooperation incentives and conflict over burden-sharing',
        'Global institutions now eliminate all major crises before they begin',
        'Contemporary challenges are purely domestic and not historically connected',
        'Technology has removed political disagreement from global governance',
      ],
      correctAnswer: 0,
      explanation: 'This claim captures the central tension of modern globalization: shared problems with contested responsibilities.',
    },
  },
]

function esc(value) {
  return value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")
}

function toCamel(slug) {
  return slug
    .split('-')
    .map((part, index) => (index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)))
    .join('')
}

function buildPartContent(topic, partNumber) {
  const partTitle = partTitles[partNumber - 1]
  const a = topic.themes[(partNumber - 1) % topic.themes.length]
  const b = topic.themes[partNumber % topic.themes.length]
  const c = topic.themes[(partNumber + 1) % topic.themes.length]

  return `
# ${topic.icon} ${topic.title}

**Part ${partNumber} of 7 - ${partTitle}**

---

| Focus for This Part |
|---|
| ${a} |
| ${b} |
| ${c} |

> Key AP Move: Build a claim, support it with specific evidence, and explain causation or comparison clearly.`
}

function buildFile(topic, partNumber) {
  const base = toCamel(topic.slug)
  const exportName = `${base}Part${partNumber}Data`
  const idBase = `${base}${partNumber}`.toLowerCase()
  const partContent = buildPartContent(topic, partNumber)

  return `export const ${exportName} = {
  topicSlug: '${topic.slug}',
  sections: [
    {
      id: '${idBase}-intro',
      type: 'text' as const,
      content: \`${partContent}\`
    },
    {
      id: '${idBase}-mcq',
      type: 'multiple-choice' as const,
      content: \`**Concept Check**\`,
      exercise: {
        questions: [
          {
            question: '${esc(topic.mcq.question)}',
            options: [
              '${esc(topic.mcq.options[0])}',
              '${esc(topic.mcq.options[1])}',
              '${esc(topic.mcq.options[2])}',
              '${esc(topic.mcq.options[3])}',
            ],
            correctAnswer: ${topic.mcq.correctAnswer},
            explanation: '${esc(topic.mcq.explanation)}'
          }
        ]
      }
    },
    {
      id: '${idBase}-analysis',
      type: 'text' as const,
      content: \`
## Historical Analysis

Use this part to connect evidence to argument quality:

- Explain one cause and one effect linked to ${topic.themes[(partNumber - 1) % topic.themes.length].toLowerCase()}.
- Compare two regions or states affected by ${topic.themes[partNumber % topic.themes.length].toLowerCase()}.
- Evaluate continuity and change involving ${topic.themes[(partNumber + 1) % topic.themes.length].toLowerCase()}.
\`
    },
    {
      id: '${idBase}-dropdown',
      type: 'dropdown-select' as const,
      content: \`**Evidence Match**\`,
      exercise: {
        dropdowns: [
          {
            label: '${esc(topic.dropdown.label)}',
            options: [
              '${esc(topic.dropdown.options[0])}',
              '${esc(topic.dropdown.options[1])}',
              '${esc(topic.dropdown.options[2])}',
              '${esc(topic.dropdown.options[3])}',
            ]
          }
        ],
        correctAnswers: [
          '${esc(topic.dropdown.correct)}',
        ],
        hint1: '${esc(topic.dropdown.hint)}',
        explanation: '${esc(topic.dropdown.explanation)}'
      }
    },
    {
      id: '${idBase}-ap',
      type: 'multiple-choice' as const,
      content: \`**AP-Style Application**\`,
      exercise: {
        questions: [
          {
            question: '${esc(topic.sprintQuestion.question)}',
            options: [
              '${esc(topic.sprintQuestion.options[0])}',
              '${esc(topic.sprintQuestion.options[1])}',
              '${esc(topic.sprintQuestion.options[2])}',
              '${esc(topic.sprintQuestion.options[3])}',
            ],
            correctAnswer: ${topic.sprintQuestion.correctAnswer},
            explanation: '${esc(topic.sprintQuestion.explanation)}'
          },
          {
            question: '${esc(topic.apQuestion.question)}',
            options: [
              '${esc(topic.apQuestion.options[0])}',
              '${esc(topic.apQuestion.options[1])}',
              '${esc(topic.apQuestion.options[2])}',
              '${esc(topic.apQuestion.options[3])}',
            ],
            correctAnswer: ${topic.apQuestion.correctAnswer},
            explanation: '${esc(topic.apQuestion.explanation)}'
          }
        ]
      }
    }
  ]
}
`
}

for (const topic of topics) {
  for (let part = 1; part <= 7; part += 1) {
    const filePath = path.join(outDir, `${topic.slug}-part${part}.ts`)
    fs.writeFileSync(filePath, buildFile(topic, part), 'utf8')
  }
}

console.log(`Generated ${topics.length * 7} files.`)
