/**
 * Entrance Quiz - Causes & Conduct of the World Wars (c. 1900-1945) (AP World History)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whww-ent-1a',
    question: 'What does the AP "MAIN" framework summarize?',
    options: ['Long-term causes of WWI: Militarism, Alliances, Imperialism, Nationalism', 'Postwar U.S. naval strategy in the Pacific theater after 1945', 'The four Soviet five-year plans of the 1930s under Stalin', 'British colonial economic policy across the African dependencies'],
    correctIndex: 0,
    explanation: 'MAIN is the standard AP shorthand for the long-term structural causes of WWI.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whww-ent-1b',
    question: 'Which immediate event triggered the outbreak of WWI in 1914?',
    options: ['Pearl Harbor attack', 'Assassination of Archduke Franz Ferdinand in Sarajevo', 'German invasion of Poland', 'Russian Revolution'],
    correctIndex: 1,
    explanation: "The Sarajevo assassination (June 28, 1914) activated alliance commitments and triggered general war within six weeks.",
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whww-ent-2a',
    question: 'Which best defines total war?',
    options: ['Mobilization of entire societies, economies, and colonial empires for sustained industrial conflict', 'A limited dynastic war fought primarily by mercenaries under aristocratic command', 'A war fought entirely by small professional armies without civilian involvement', 'A naval blockade campaign limited to the open ocean and coastal trade routes'],
    correctIndex: 0,
    explanation: 'Total war involves whole-society mobilization: economy, civilians, propaganda, and colonial labor.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whww-ent-2b',
    question: 'Which colonial force served Britain in large numbers in both world wars?',
    options: ['French Foreign Legion', 'Indian Army', 'Russian Imperial Guard', 'Australian First Fleet'],
    correctIndex: 1,
    explanation: "The Indian Army contributed roughly 1.3M soldiers in WWI and 2.5M in WWII (the largest volunteer force in history).",
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whww-ent-3a',
    question: 'Which two 1916 battles are classic examples of WWI attritional warfare?',
    options: ['Somme and Verdun', 'Stalingrad and Kursk', 'Tsushima and Mukden', 'Marne and Tannenberg'],
    correctIndex: 0,
    explanation: 'The Somme and Verdun together produced more than 1.5 million casualties for minimal territorial change.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whww-ent-3b',
    question: 'Which Nazi concept justified eastward expansion and ethnic cleansing?',
    options: ['Manifest Destiny', 'Lebensraum', 'Bushido', 'Mandate of Heaven'],
    correctIndex: 1,
    explanation: 'Lebensraum ("living space") was the Nazi ideological justification for invasion and ethnic cleansing in Eastern Europe.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whww-ent-4a',
    question: 'Which 1917 revolution was made possible by WWI exhaustion?',
    options: ['French Revolution', 'Bolshevik Revolution', 'Cuban Revolution', 'Iranian Revolution'],
    correctIndex: 1,
    explanation: 'The Bolshevik Revolution (October 1917) emerged from collapse on the Eastern Front and food shortages.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whww-ent-4b',
    question: 'Which contradictory British wartime pledges shaped the modern Middle East?',
    options: ['Sykes-Picot Agreement and the Treaty of Sevres', 'Hussein-McMahon Correspondence and the Balfour Declaration', 'Atlantic Charter and the Marshall Plan', 'Twelve Points and the Locarno Treaties'],
    correctIndex: 1,
    explanation: 'Hussein-McMahon (1915) promised Arab independence; the Balfour Declaration (1917) promised a Jewish homeland in Palestine.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whww-ent-5a',
    question: 'Which is the strongest example of change from WWI to WWII combat?',
    options: ['Both wars relied on horse cavalry charges as the dominant arm in major land engagements throughout the conflict', 'Shift from trench stalemate to mobile warfare, strategic bombing, and atomic weapons', 'Total avoidance of mechanization, armored vehicles, and aircraft in WWII combat operations', 'Both wars were limited to naval blockades without significant ground combat in any theater'],
    correctIndex: 1,
    explanation: 'AP CCOT rewards specific contrasts: trench warfare vs. blitzkrieg, strategic bombing, and atomic weapons.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whww-ent-5b',
    question: 'Which 1938 agreement is the textbook example of appeasement?',
    options: ['Treaty of Versailles', 'Munich Agreement', 'Yalta Conference', 'Locarno Treaties'],
    correctIndex: 1,
    explanation: "The Munich Agreement ceded the Sudetenland to Hitler without resistance, encouraging further expansion.",
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whww-ent-6a',
    question: 'For an SAQ on WWII causation, which response move is strongest?',
    options: [
      'Make a generic claim that "Versailles alone caused WWII" without supporting qualification or named events',
      'Identify multiple causes (Versailles grievances, the Depression, appeasement, Axis expansion) and name a specific event for each',
      'List as many participating countries and military leaders as possible without explaining causal mechanisms',
      'Avoid discussing causation entirely and focus on a chronological narrative of major battles and dates'
    ],
    correctIndex: 1,
    explanation: 'AP scoring rewards multi-causal reasoning supported by named events.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whww-ent-6b',
    question: 'Which sentence best demonstrates AP-level historical reasoning?',
    options: [
      'WWII involved a great many countries and ideologies fighting across multiple theaters of operation around the world',
      'The Munich Agreement (1938) shows that appeasement, by rewarding aggression, encouraged further German expansion and is a key cause of WWII',
      'The world wars were complicated events shaped by many different factors that historians continue to study and debate today',
      'WWII began in 1914 with the assassination of Archduke Franz Ferdinand by a Bosnian-Serb nationalist in the city of Sarajevo'
    ],
    correctIndex: 1,
    explanation: 'A strong AP reasoning sentence ties a specific source to causation and broader consequence.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whww-ent-7a',
    question: 'Which thesis is strongest for a comparison prompt on WWI and WWII?',
    options: [
      'The two wars were identical in their causes, technologies, ideological framing, and ultimate political consequences for the international order',
      'Both were total wars that mobilized industrial economies and colonial empires, but WWII was more ideologically polarized, more destructive to civilians, and produced a more constructive postwar order',
      'WWII was less destructive than WWI in casualties, geographic scope, ideological intensity, and the scale of postwar political change',
      'Neither war involved colonial troops, strategic bombing of civilian targets, or the creation of any major postwar international institution'
    ],
    correctIndex: 1,
    explanation: 'A strong AP comparison thesis names a similarity and a meaningful difference.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whww-ent-7b',
    question: 'Which postwar institution succeeded the League of Nations after WWII?',
    options: ['NATO', 'United Nations', 'European Union', 'Warsaw Pact'],
    correctIndex: 1,
    explanation: 'The United Nations (1945) replaced the League of Nations as the primary postwar collective-security institution.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
