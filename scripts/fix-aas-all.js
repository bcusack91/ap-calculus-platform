const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, '..', 'src', 'data', 'interactive-lessons');

function write(fileName, content) {
  fs.writeFileSync(path.join(dir, fileName), content);
  console.log('Wrote:', fileName);
}

function esc(value) {
  return JSON.stringify(value);
}

function prefix(slug) {
  return slug.replace(/[^a-z]/g, '').slice(0, 8);
}

function build(entry) {
  const p = prefix(entry.slug);

  const intro = [
    `# ${entry.emoji} ${entry.title}`,
    '',
    '**Part 1 of 7 - Historical Foundations, Evidence, and AP AAS Analysis**',
    '',
    '---',
    '',
    `## Core Focus: ${entry.shortTitle}`,
    '',
    entry.focusIntro,
    '',
    '| Core Concept | What It Refers To | Why It Matters |',
    '|---|---|---|',
    `| **${entry.c1}** | ${entry.c1note} | ${entry.c1why} |`,
    `| **${entry.c2}** | ${entry.c2note} | ${entry.c2why} |`,
    `| **${entry.c3}** | ${entry.c3note} | ${entry.c3why} |`,
    '',
    '> AP African American Studies emphasizes evidence-based interpretation across historical periods and disciplines.'
  ].join('\n');

  const quiz1 = {
    questions: [
      {
        question: `Which statement best reflects the significance of ${entry.c1}?`,
        options: [entry.bad1, entry.good1, entry.bad2, entry.bad3],
        correctAnswer: 1,
        explanation: `${entry.c1} is central because it helps explain continuity, change, and lived experience in context.`
      },
      {
        question: 'Which approach best matches AP AAS historical reasoning?',
        options: [
          'Treat events as isolated facts',
          'Connect evidence to causation, context, and consequences over time',
          'Rely only on memorized dates',
          'Avoid discussing competing interpretations'
        ],
        correctAnswer: 1,
        explanation: 'AP AAS rewards analysis that links evidence to historical processes, structures, and outcomes.'
      }
    ]
  };

  const content = [
    `## Interpreting ${entry.shortTitle} with Evidence`,
    '',
    '### Historical Analysis Workflow',
    '1. Identify the central process or conflict in the period',
    '2. Locate key actors, institutions, and structural conditions',
    '3. Explain short- and long-term consequences',
    '',
    '| Strong Evidence Move | Example Frame |',
    '|---|---|',
    `| Contextualization | "Within the context of ${entry.c2.toLowerCase()}, this development..." |`,
    `| Causation | "Because ${entry.c1.toLowerCase()} intensified, communities responded by..." |`,
    `| Continuity/change | "Although conditions shifted, ${entry.c3.toLowerCase()} remained..." |`,
    '',
    '### Common Pitfalls',
    '- Oversimplifying complex historical actors or motives',
    '- Ignoring regional variation and class/gender differences',
    '- Treating resistance as singular instead of multifaceted',
    '- Using modern assumptions without historical context',
    '',
    entry.focusDeep
  ].join('\n');

  const input = {
    boxes: 3,
    correctAnswers: [entry.c1.toLowerCase(), entry.c2.toLowerCase(), entry.c3.toLowerCase()],
    hint1: `Concept 1: ${entry.c1}`,
    hint2: `Concept 2: ${entry.c2}`,
    hint3: `Concept 3: ${entry.c3}`,
    explanation: `${entry.c1}, ${entry.c2}, and ${entry.c3} are essential vocabulary in this topic.`
  };

  const dropdown = {
    dropdowns: [
      {
        label: `${entry.c1} is best understood as ___`,
        options: [entry.goodDd1, entry.badDd1, entry.badDd2, entry.badDd3]
      },
      {
        label: 'A strong AP AAS claim should be ___',
        options: [
          'Specific, contextualized, and evidence-based',
          'A broad slogan without support',
          'A list of names only',
          'A moral statement without history'
        ]
      },
      {
        label: 'The strongest historical analysis usually includes ___',
        options: [
          'Cause, context, and consequence',
          'Dates only',
          'Summary only',
          'Personal opinion only'
        ]
      }
    ],
    correctAnswers: [entry.goodDd1, 'Specific, contextualized, and evidence-based', 'Cause, context, and consequence'],
    hint1: `Focus on historical function of ${entry.c1.toLowerCase()}.`,
    hint2: 'Claims must be defensible and supported.',
    hint3: 'Historical reasoning links these elements.',
    explanation: 'High-quality AP AAS responses combine precise claims with contextual evidence and causal reasoning.'
  };

  const strategy = [
    `## AP Exam Strategy: ${entry.shortTitle}`,
    '',
    `- Define ${entry.c1.toLowerCase()} in historical context before analyzing effects`,
    '- Distinguish immediate outcomes from long-term structural consequences',
    '- Integrate social, political, cultural, and economic dimensions',
    '- Use specific evidence and avoid generalized claims',
    '- Acknowledge complexity across region, class, and gender where relevant',
    `- ${entry.strategy}`
  ].join('\n');

  const applied = {
    questions: [
      {
        question: `A student mentions ${entry.c2.toLowerCase()} but gives no context. What is the best revision?`,
        options: [
          'Add only one extra date',
          `Explain how ${entry.c2.toLowerCase()} shaped policy, lived experience, and community response`,
          'Replace with a modern analogy only',
          'Remove the concept entirely'
        ],
        correctAnswer: 1,
        explanation: 'Concepts gain analytical value when tied to mechanisms, impacts, and historical context.'
      },
      {
        question: 'Which thesis move is strongest in AP AAS writing?',
        options: [
          'Make absolute claims with no qualification',
          `Advance a specific claim about how ${entry.c3.toLowerCase()} changed and persisted over time`,
          'List events in chronological order only',
          'Use one term repeatedly without evidence'
        ],
        correctAnswer: 1,
        explanation: 'The best theses are specific, historically grounded, and attentive to continuity and change.'
      }
    ]
  };

  return `export const ${entry.exportName} = {\n  topicSlug: ${esc(entry.slug)},\n  sections: [\n    {\n      id: ${esc(`${p}1-intro`)},\n      type: 'text' as const,\n      content: ${esc(intro)}\n    },\n    {\n      id: ${esc(`${p}1-quiz1`)},\n      type: 'multiple-choice' as const,\n      content: ${esc('**Concept Check**')},\n      exercise: ${JSON.stringify(quiz1, null, 6)}\n    },\n    {\n      id: ${esc(`${p}1-content`)},\n      type: 'text' as const,\n      content: ${esc(content)}\n    },\n    {\n      id: ${esc(`${p}1-input`)},\n      type: 'input-boxes' as const,\n      content: ${esc('**Vocabulary Recall**\\n\\n1) Term A: _______\\n\\n2) Term B: _______\\n\\n3) Term C: _______')},\n      exercise: ${JSON.stringify(input, null, 6)}\n    },\n    {\n      id: ${esc(`${p}1-dropdown`)},\n      type: 'dropdown-select' as const,\n      content: ${esc('**Apply the Concept**')},\n      exercise: ${JSON.stringify(dropdown, null, 6)}\n    },\n    {\n      id: ${esc(`${p}1-strategy`)},\n      type: 'text' as const,\n      content: ${esc(strategy)}\n    },\n    {\n      id: ${esc(`${p}1-applied`)},\n      type: 'multiple-choice' as const,\n      content: ${esc('**AP-Style Application**')},\n      exercise: ${JSON.stringify(applied, null, 6)}\n    }\n  ]\n};\n`;
}

const entries = [
  {
    fileName: 'aas-african-kingdoms-part1.ts',
    exportName: 'aasAfricanKingdomsPart1Data',
    slug: 'aas-african-kingdoms',
    title: 'African Kingdoms and Civilizations',
    shortTitle: 'African Kingdoms',
    emoji: '👑',
    c1: 'State Formation',
    c2: 'Trade Networks',
    c3: 'Cultural Exchange',
    c1note: 'Political organization of major West and Central African states',
    c1why: 'Shows institutional sophistication before Atlantic slavery expansion',
    c2note: 'Trans-Saharan and regional commerce in gold, salt, and other goods',
    c2why: 'Trade supported wealth, scholarship, and diplomatic power',
    c3note: 'Movement of ideas, language, religion, and artistic forms',
    c3why: 'Demonstrates dynamic African intellectual and cultural life',
    focusIntro: 'Precolonial African kingdoms developed complex political, economic, and intellectual systems that shaped later diaspora histories.',
    focusDeep: 'This topic challenges deficit narratives by centering governance, commerce, and scholarship in African societies.',
    bad1: 'State formation in Africa was absent before European contact.',
    good1: 'State formation involved sophisticated governance, taxation, military organization, and diplomacy.',
    bad2: 'African kingdoms depended only on European institutions.',
    bad3: 'State formation meant isolated villages with no regional coordination.',
    goodDd1: 'The development of organized political institutions and authority',
    badDd1: 'A modern election cycle',
    badDd2: 'A random migration event',
    badDd3: 'A language list only',
    strategy: 'Use examples such as Mali, Songhai, and Kongo to ground claims in evidence.'
  },
  {
    fileName: 'aas-origins-diaspora-part1.ts',
    exportName: 'aasOriginsDiasporaPart1Data',
    slug: 'aas-origins-diaspora',
    title: 'Origins of the African Diaspora',
    shortTitle: 'Origins and Diaspora',
    emoji: '🌍',
    c1: 'Diaspora',
    c2: 'Displacement',
    c3: 'Retention',
    c1note: 'Global dispersal of African-descended peoples',
    c1why: 'Frames shared and diverse historical experiences',
    c2note: 'Forced movement through enslavement and colonial systems',
    c2why: 'Highlights violence and structural coercion',
    c3note: 'Persistence of cultural, linguistic, and spiritual practices',
    c3why: 'Shows agency and continuity across displacement',
    focusIntro: 'The African diaspora emerged through forced migration but also produced enduring cultural and political connections across regions.',
    focusDeep: 'AP analysis should balance structural violence with evidence of cultural persistence and adaptation.',
    bad1: 'Diaspora means voluntary tourism migration only.',
    good1: 'Diaspora describes dispersed populations linked by historical origins and cultural continuities.',
    bad2: 'Diaspora communities were culturally identical everywhere.',
    bad3: 'Diaspora has no political significance.',
    goodDd1: 'A dispersed yet connected global community shaped by shared history',
    badDd1: 'A single nation-state border',
    badDd2: 'A temporary labor contract',
    badDd3: 'A shipping route only',
    strategy: 'Explain both divergence across regions and continuity in cultural memory.'
  },
  {
    fileName: 'aas-transatlantic-slave-trade-part1.ts',
    exportName: 'aasTransatlanticSlaveTradePart1Data',
    slug: 'aas-transatlantic-slave-trade',
    title: 'The Transatlantic Slave Trade',
    shortTitle: 'Transatlantic Slave Trade',
    emoji: '⛓️',
    c1: 'Middle Passage',
    c2: 'Chattel Slavery',
    c3: 'Human Commodification',
    c1note: 'Ocean crossing under extreme violence and deprivation',
    c1why: 'Central site of mortality, trauma, and resistance',
    c2note: 'Legal system treating enslaved people as property',
    c2why: 'Institutionalized racialized exploitation',
    c3note: 'Reduction of people to saleable labor units',
    c3why: 'Explains economic logic and moral catastrophe of slavery',
    focusIntro: 'The transatlantic slave trade was a large-scale system of forced transport, labor extraction, and racialized legal control.',
    focusDeep: 'Strong analysis connects legal structures and economic incentives to lived human consequences.',
    bad1: 'The Middle Passage was usually comfortable transport.',
    good1: 'The Middle Passage involved extreme violence, confinement, disease, and mortality.',
    bad2: 'Chattel slavery was temporary indenture with equal rights.',
    bad3: 'Commodification had no role in plantation economies.',
    goodDd1: 'A system reducing enslaved people to inheritable property status',
    badDd1: 'A diplomatic alliance',
    badDd2: 'A wage-labor contract',
    badDd3: 'A literacy campaign',
    strategy: 'Use quantitative scale and personal narratives together for full historical interpretation.'
  },
  {
    fileName: 'aas-slavery-in-america-part1.ts',
    exportName: 'aasSlaveryInAmericaPart1Data',
    slug: 'aas-slavery-in-america',
    title: 'Slavery in America',
    shortTitle: 'Slavery in America',
    emoji: '🏚️',
    c1: 'Plantation Economy',
    c2: 'Racial Hierarchy',
    c3: 'Enslaved Resistance',
    c1note: 'Labor system tied to cash-crop production',
    c1why: 'Generated wealth through coerced labor extraction',
    c2note: 'Legal and social ordering by race',
    c2why: 'Maintained slavery through law and ideology',
    c3note: 'Everyday, collective, and armed resistance',
    c3why: 'Shows agency under oppressive conditions',
    focusIntro: 'American slavery combined economic exploitation, legal repression, and racial ideology while provoking varied forms of resistance.',
    focusDeep: 'Interpretation should include labor systems, law, family life, and resistance together.',
    bad1: 'Plantation economy relied mostly on free labor.',
    good1: 'Plantation systems depended on coerced labor and legal enforcement.',
    bad2: 'Racial hierarchy emerged after emancipation only.',
    bad3: 'Resistance was absent among enslaved communities.',
    goodDd1: 'An economy built on coerced agricultural labor and export markets',
    badDd1: 'A public-school reform plan',
    badDd2: 'An urban zoning law',
    badDd3: 'A postwar welfare policy',
    strategy: 'Include both structural oppression and documented resistance strategies.'
  },
  {
    fileName: 'aas-freedom-enslavement-part1.ts',
    exportName: 'aasFreedomEnslavementPart1Data',
    slug: 'aas-freedom-enslavement',
    title: 'Freedom and Enslavement',
    shortTitle: 'Freedom and Enslavement',
    emoji: '🕊️',
    c1: 'Legal Status',
    c2: 'Manumission',
    c3: 'Contradiction',
    c1note: 'Formal legal categories defining rights and restrictions',
    c1why: 'Law structured access to freedom and citizenship',
    c2note: 'Process of emancipation by legal or personal mechanisms',
    c2why: 'Reveals limits and possibilities within slave societies',
    c3note: 'Tension between ideals of liberty and slavery practice',
    c3why: 'Central paradox in U.S. political development',
    focusIntro: 'Early American society contained overlapping regimes of freedom and unfreedom that exposed profound constitutional and moral contradictions.',
    focusDeep: 'Analysis should trace how legal categories changed while racial exclusions persisted.',
    bad1: 'Legal status had no effect on lived experience.',
    good1: 'Legal status shaped movement, labor, family security, and vulnerability.',
    bad2: 'Manumission eliminated racial inequality broadly.',
    bad3: 'Contradictions between liberty and slavery are minor.',
    goodDd1: 'A formal legal framework determining rights and obligations',
    badDd1: 'A literary genre label',
    badDd2: 'A weather pattern',
    badDd3: 'A military rank only',
    strategy: 'Use constitutional language alongside social realities to show historical contradiction.'
  },
  {
    fileName: 'aas-practice-freedom-part1.ts',
    exportName: 'aasPracticeFreedomPart1Data',
    slug: 'aas-practice-freedom',
    title: 'Practices of Freedom',
    shortTitle: 'Practices of Freedom',
    emoji: '🤝',
    c1: 'Community Institution',
    c2: 'Mutual Aid',
    c3: 'Self-Determination',
    c1note: 'Churches, schools, lodges, and associations',
    c1why: 'Institutions built collective capacity and leadership',
    c2note: 'Shared resources and support networks',
    c2why: 'Strengthened resilience under exclusion',
    c3note: 'Collective pursuit of autonomy and political voice',
    c3why: 'Anchored long-term struggles for rights',
    focusIntro: 'African American communities practiced freedom through institution-building, education, spirituality, and collective organizing.',
    focusDeep: 'Evidence of local institution-building is key to understanding long-term political mobilization.',
    bad1: 'Community institutions were unrelated to political change.',
    good1: 'Community institutions often served as bases for education, organizing, and civic leadership.',
    bad2: 'Mutual aid was unnecessary where rights were denied.',
    bad3: 'Self-determination refers only to individual wealth.',
    goodDd1: 'Collective institutions that support autonomy and civic capacity',
    badDd1: 'A federal census category',
    badDd2: 'A transportation schedule',
    badDd3: 'A one-time protest only',
    strategy: 'Highlight grassroots institutions as engines of long-term change.'
  },
  {
    fileName: 'aas-resistance-abolition-part1.ts',
    exportName: 'aasResistanceAbolitionPart1Data',
    slug: 'aas-resistance-abolition',
    title: 'Resistance and Abolition',
    shortTitle: 'Resistance and Abolition',
    emoji: '🔥',
    c1: 'Abolitionism',
    c2: 'Political Organizing',
    c3: 'Radical Action',
    c1note: 'Movements to end slavery through moral, legal, and political means',
    c1why: 'Shifted national debate and policy trajectories',
    c2note: 'Print networks, conventions, petitions, and alliances',
    c2why: 'Built sustained pressure for transformation',
    c3note: 'Actions challenging legality of slavery directly',
    c3why: 'Expanded tactical repertoire and urgency',
    focusIntro: 'Abolition grew through Black-led activism, allied networks, and escalating conflict over slavery legality and morality.',
    focusDeep: 'Strong analysis compares strategies across reformist and radical approaches rather than flattening abolition into one method.',
    bad1: 'Abolitionism was only a white-led movement.',
    good1: 'Black activists and intellectuals were central strategists and leaders in abolition.',
    bad2: 'Political organizing played little role in abolition.',
    bad3: 'Abolition ended through consensus without conflict.',
    goodDd1: 'A coordinated movement seeking slavery abolition through multiple strategies',
    badDd1: 'A military draft policy',
    badDd2: 'A tax code revision',
    badDd3: 'A voting machine design',
    strategy: 'Center Black leadership and strategic diversity in abolition narratives.'
  },
  {
    fileName: 'aas-reconstruction-jim-crow-part1.ts',
    exportName: 'aasReconstructionJimCrowPart1Data',
    slug: 'aas-reconstruction-jim-crow',
    title: 'Reconstruction and Jim Crow',
    shortTitle: 'Reconstruction and Jim Crow',
    emoji: '🏛️',
    c1: 'Reconstruction',
    c2: 'Disenfranchisement',
    c3: 'Segregation',
    c1note: 'Post-Civil War effort to redefine citizenship and governance',
    c1why: 'Expanded rights while provoking organized backlash',
    c2note: 'Legal and extra-legal voter suppression',
    c2why: 'Undermined Black political participation',
    c3note: 'Systemic racial separation in public and private life',
    c3why: 'Institutionalized inequality for generations',
    focusIntro: 'Reconstruction opened possibilities for democratic transformation, but violent backlash and law narrowed those gains into Jim Crow order.',
    focusDeep: 'Interpretation should track both constitutional progress and counterrevolutionary repression.',
    bad1: 'Reconstruction produced permanent equality by 1870.',
    good1: 'Reconstruction expanded rights but faced sustained violent and legal backlash.',
    bad2: 'Disenfranchisement occurred randomly without policy intent.',
    bad3: 'Segregation was voluntary social preference.',
    goodDd1: 'A contested era of rights expansion and organized rollback',
    badDd1: 'A literary renaissance movement',
    badDd2: 'A farm mechanization process',
    badDd3: 'A neutral transportation reform',
    strategy: 'Compare constitutional amendments with local/state enforcement realities.'
  },
  {
    fileName: 'aas-great-migration-harlem-part1.ts',
    exportName: 'aasGreatMigrationHarlemPart1Data',
    slug: 'aas-great-migration-harlem',
    title: 'Great Migration and Harlem Renaissance',
    shortTitle: 'Great Migration and Harlem',
    emoji: '🚆',
    c1: 'Migration',
    c2: 'Urban Transformation',
    c3: 'Cultural Renaissance',
    c1note: 'Relocation from rural South to urban North/Midwest/West',
    c1why: 'Reshaped demographics, politics, and labor markets',
    c2note: 'New neighborhood institutions and political networks',
    c2why: 'Created new forms of collective action',
    c3note: 'Creative explosion in literature, music, and thought',
    c3why: 'Redefined Black modernity and public expression',
    focusIntro: 'The Great Migration transformed U.S. social geography and fueled new artistic and political movements, including the Harlem Renaissance.',
    focusDeep: 'Strong analysis connects migration conditions to creative production and institutional change.',
    bad1: 'Migration had little effect on national politics.',
    good1: 'Migration changed electoral dynamics, labor structures, and urban political power.',
    bad2: 'Harlem Renaissance was only entertainment with no political meaning.',
    bad3: 'Urban transformation ended racial inequality.',
    goodDd1: 'Large-scale population movement reshaping social and political life',
    badDd1: 'A single rail policy',
    badDd2: 'A local weather event',
    badDd3: 'A census typo',
    strategy: 'Pair demographic evidence with cultural and political consequences.'
  },
  {
    fileName: 'aas-wwi-wwii-era-part1.ts',
    exportName: 'aasWwiWwiiEraPart1Data',
    slug: 'aas-wwi-wwii-era',
    title: 'WWI to WWII Era',
    shortTitle: 'WWI-WWII Era',
    emoji: '🪖',
    c1: 'Double V',
    c2: 'War Mobilization',
    c3: 'Civil Rights Pressure',
    c1note: 'Victory against fascism abroad and racism at home',
    c1why: 'Framed wartime contradictions in democracy claims',
    c2note: 'Labor and military participation during world wars',
    c2why: 'Expanded leverage for rights claims',
    c3note: 'Growing demands for anti-lynching, voting rights, and fair employment',
    c3why: 'Laid groundwork for postwar civil rights campaigns',
    focusIntro: 'World war mobilization intensified demands for racial justice by exposing contradictions between democratic rhetoric and domestic discrimination.',
    focusDeep: 'Interpretive strength comes from linking war participation to institutional and legal pressure for change.',
    bad1: 'Double V focused only on foreign military victory.',
    good1: 'Double V linked anti-fascist war aims with domestic civil rights demands.',
    bad2: 'War mobilization reduced Black political participation.',
    bad3: 'Civil rights pressure began only after 1960.',
    goodDd1: 'A framework connecting global war aims to domestic equality demands',
    badDd1: 'A military rank system',
    badDd2: 'A tax slogan',
    badDd3: 'A school grading policy',
    strategy: 'Track how wartime service translated into postwar rights claims.'
  },
  {
    fileName: 'aas-civil-rights-movement-part1.ts',
    exportName: 'aasCivilRightsMovementPart1Data',
    slug: 'aas-civil-rights-movement',
    title: 'Civil Rights Movement',
    shortTitle: 'Civil Rights Movement',
    emoji: '✊',
    c1: 'Mass Mobilization',
    c2: 'Legal Challenge',
    c3: 'Grassroots Organizing',
    c1note: 'Coordinated protest campaigns at scale',
    c1why: 'Generated visibility and policy pressure',
    c2note: 'Court strategies targeting discriminatory law',
    c2why: 'Redefined legal frameworks for rights',
    c3note: 'Local leadership, voter drives, and community campaigns',
    c3why: 'Sustained long-term movement capacity',
    focusIntro: 'The Civil Rights Movement combined legal strategy, mass protest, and local organizing to challenge segregation and disenfranchisement.',
    focusDeep: 'Do not reduce the movement to a few figures; emphasize networks, local actors, and strategic diversity.',
    bad1: 'Civil rights change came from court rulings alone.',
    good1: 'Legal victories, direct action, and grassroots work interacted to produce change.',
    bad2: 'Grassroots organizing had minor influence.',
    bad3: 'Mass mobilization avoided political strategy.',
    goodDd1: 'Sustained collective action that linked local campaigns to national policy change',
    badDd1: 'A single speech event',
    badDd2: 'A temporary charity drive',
    badDd3: 'A military treaty',
    strategy: 'Compare legal, legislative, and grassroots pathways rather than isolating one.'
  },
  {
    fileName: 'aas-black-power-beyond-part1.ts',
    exportName: 'aasBlackPowerBeyondPart1Data',
    slug: 'aas-black-power-beyond',
    title: 'Black Power and Beyond',
    shortTitle: 'Black Power and Beyond',
    emoji: '⚡',
    c1: 'Self-Determination',
    c2: 'Institution Building',
    c3: 'Political Reframing',
    c1note: 'Community control and autonomy in political/social life',
    c1why: 'Expanded movement goals beyond formal desegregation',
    c2note: 'Independent schools, health programs, and cultural centers',
    c2why: 'Translated ideology into local infrastructure',
    c3note: 'Shift in language around power, identity, and liberation',
    c3why: 'Reshaped national debate on race and justice',
    focusIntro: 'Black Power movements emphasized autonomy, community control, and structural transformation in response to limits of earlier reforms.',
    focusDeep: 'Strong analysis compares continuity with civil rights strategies while identifying new priorities.',
    bad1: 'Black Power rejected all community service work.',
    good1: 'Black Power included political critique alongside concrete community programs.',
    bad2: 'Institution building had no practical impact.',
    bad3: 'Self-determination referred only to foreign policy.',
    goodDd1: 'Collective autonomy through political and community control',
    badDd1: 'A campaign slogan with no strategy',
    badDd2: 'A private business merger',
    badDd3: 'A judicial doctrine only',
    strategy: 'Analyze both rhetoric and programmatic initiatives to show full movement scope.'
  },
  {
    fileName: 'aas-movements-debates-part1.ts',
    exportName: 'aasMovementsDebatesPart1Data',
    slug: 'aas-movements-debates',
    title: 'Movements and Debates',
    shortTitle: 'Movements and Debates',
    emoji: '🧭',
    c1: 'Strategic Debate',
    c2: 'Coalition',
    c3: 'Movement Diversity',
    c1note: 'Disagreement over methods, pace, and goals',
    c1why: 'Debate shaped tactical evolution',
    c2note: 'Partnerships across organizations and constituencies',
    c2why: 'Coalitions expanded political reach and resources',
    c3note: 'Varied ideological and regional approaches',
    c3why: 'Prevents reductive movement narratives',
    focusIntro: 'African American political history includes vigorous internal debate and strategic diversity rather than a single unified approach.',
    focusDeep: 'Interpretive quality improves when essays explain why disagreements emerged and how they changed outcomes.',
    bad1: 'Strategic debate always weakens movements.',
    good1: 'Debate can sharpen analysis, diversify tactics, and adapt strategy to conditions.',
    bad2: 'Coalitions were historically unnecessary.',
    bad3: 'Movement diversity means no shared goals existed.',
    goodDd1: 'Disagreement over means and priorities within broader justice goals',
    badDd1: 'A random newspaper headline',
    badDd2: 'A census map only',
    badDd3: 'A campaign slogan without context',
    strategy: 'Compare competing strategies and evaluate outcomes rather than choosing one as universally correct.'
  },
  {
    fileName: 'aas-contemporary-issues-part1.ts',
    exportName: 'aasContemporaryIssuesPart1Data',
    slug: 'aas-contemporary-issues',
    title: 'Contemporary Issues',
    shortTitle: 'Contemporary Issues',
    emoji: '🗳️',
    c1: 'Structural Inequality',
    c2: 'Policy Debate',
    c3: 'Community Advocacy',
    c1note: 'Persistent disparities in wealth, health, housing, education, and justice',
    c1why: 'Connects past systems to present outcomes',
    c2note: 'Contesting public solutions and accountability mechanisms',
    c2why: 'Policy choices shape material conditions',
    c3note: 'Local and national organizing for reform',
    c3why: 'Demonstrates civic agency and democratic participation',
    focusIntro: 'Contemporary issues in African American Studies are historically grounded and policy-relevant, requiring analysis of continuity and change.',
    focusDeep: 'Best responses tie present-day data to historical structures without collapsing differences across contexts.',
    bad1: 'Current disparities are unrelated to historical policy.',
    good1: 'Many contemporary disparities reflect layered historical policy and institutional patterns.',
    bad2: 'Policy debates are purely symbolic with no material impact.',
    bad3: 'Community advocacy has no role in democratic change.',
    goodDd1: 'Persistent unequal outcomes produced by interacting institutions and policies',
    badDd1: 'A one-time economic shock only',
    badDd2: 'An individual lifestyle choice only',
    badDd3: 'A weather cycle',
    strategy: 'Use historical continuity frameworks while citing specific contemporary evidence.'
  }
];

for (const entry of entries) {
  write(entry.fileName, build(entry));
}

console.log(`Done with AP African American Studies (${entries.length} files)`);
