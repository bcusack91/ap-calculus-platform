/**
 * Entrance Quiz - Mass Atrocities & Resistance (AP World History, Unit 7)
 * 14 questions - 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'whma-ent-1a',
    question: 'The 1948 UN Convention on the Prevention and Punishment of the Crime of Genocide defines genocide as acts committed with intent to destroy, in whole or in part, which kinds of groups?',
    options: [
      'National, ethnical, racial, or religious groups',
      'Political parties and economic class categories',
      'Any government opposition movement defined as a national security threat',
      'Members of any organized military force engaged in active combat'
    ],
    correctIndex: 0,
    explanation: 'The UN Convention names exactly four protected categories. Political and class categories were intentionally excluded under Soviet pressure during drafting.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whma-ent-1b',
    question: 'Which Polish-Jewish lawyer coined the term "genocide" in 1944 and led the campaign for the 1948 UN Convention?',
    options: ['Hannah Arendt', 'Raphael Lemkin', 'Telford Taylor', 'Eleanor Roosevelt'],
    correctIndex: 1,
    explanation: 'Lemkin combined Greek "genos" (race/tribe) with Latin "cide" (killing). His advocacy directly produced the Convention.',
    partNumber: 1,
    partTitle: 'Core Concepts'
  },
  {
    id: 'whma-ent-2a',
    question: 'Which event marked the bureaucratic coordination of the Nazi Final Solution?',
    options: [
      'The Wannsee Conference (January 1942)',
      'The Munich Agreement (September 1938)',
      'The Atlantic Charter (August 1941)',
      'The Treaty of Versailles (June 1919)'
    ],
    correctIndex: 0,
    explanation: 'Wannsee was a closed meeting of senior SS and ministry officials that coordinated logistics for the killing of European Jews.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whma-ent-2b',
    question: 'Which feature most distinguishes the Cambodian Genocide (1975–79) from the Holocaust under the strict UN definition?',
    options: [
      'It targeted political and class categories such as urban "new people" rather than only ethnic, religious, or national groups',
      'It used industrial-scale death camps with rail logistics and gas chambers identical to Nazi facilities in occupied Poland',
      'It was carried out without any organizing political party or revolutionary ideology directing the violence and labor camps',
      'It was prosecuted at the Nuremberg Trials in 1946 alongside the senior leadership of the Nazi German state apparatus'
    ],
    correctIndex: 0,
    explanation: 'The UN Convention does not list political/class categories. Cambodia is therefore often labeled "auto-genocide" or crimes against humanity in legal classification while still studied as a genocide historically.',
    partNumber: 2,
    partTitle: 'Key Processes'
  },
  {
    id: 'whma-ent-3a',
    question: 'Approximately how many people were killed during the 100-day Rwandan Genocide of 1994?',
    options: ['About 80,000', 'About 800,000', 'About 8,000', 'About 8 million'],
    correctIndex: 1,
    explanation: 'Roughly 800,000 Tutsi and moderate Hutu were killed in 100 days — among the fastest rates of mass killing in modern history.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whma-ent-3b',
    question: 'The 1995 Srebrenica massacre, in which roughly 8,000 Bosniak men and boys were killed, is significant primarily because:',
    options: [
      'International courts (ICTY 2004 and ICJ 2007) ruled it constituted genocide under the 1948 UN Convention, expanding postwar accountability',
      'It was the only mass killing in Europe during the entire twentieth century after the conclusion of the Second World War in 1945',
      'It was prosecuted at the Nuremberg Trials of 1945–46 alongside other Nazi war crimes from the Second World War period',
      'It demonstrated that the international community always intervenes immediately to protect any United Nations declared safe area worldwide'
    ],
    correctIndex: 0,
    explanation: 'Srebrenica produced major war-crimes convictions including Mladić (2017) and Karadžić (2016) and is the most cited European genocide ruling of the post-Cold-War period.',
    partNumber: 3,
    partTitle: 'Patterns & Examples'
  },
  {
    id: 'whma-ent-4a',
    question: 'Which 1948 international declaration, drafted under Eleanor Roosevelt, proclaimed inherent and equal rights for all human beings?',
    options: [
      'The Universal Declaration of Human Rights',
      'The Atlantic Charter',
      'The Treaty of Versailles',
      'The Truman Doctrine'
    ],
    correctIndex: 0,
    explanation: 'The UDHR was adopted by the UN General Assembly in December 1948, the same year as the Genocide Convention. Both emerged from postwar international consensus.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whma-ent-4b',
    question: 'Which Swedish diplomat issued protective passports to thousands of Hungarian Jews in Budapest in 1944?',
    options: ['Oskar Schindler', 'Raoul Wallenberg', 'Chiune Sugihara', 'Albert Goering'],
    correctIndex: 1,
    explanation: 'Wallenberg used his diplomatic protection to save tens of thousands of lives before his arrest by Soviet forces in 1945.',
    partNumber: 4,
    partTitle: 'Connections & Interactions'
  },
  {
    id: 'whma-ent-5a',
    question: 'Which doctrine, endorsed at the 2005 UN World Summit, holds that the international community has a duty to act against mass atrocities when sovereign states fail to protect their populations?',
    options: ['Containment', 'Responsibility to Protect (R2P)', 'Mutually Assured Destruction', 'Manifest Destiny'],
    correctIndex: 1,
    explanation: 'R2P emerged directly from the international failures in Rwanda (1994) and Srebrenica (1995). It remains contested and unevenly applied in practice.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whma-ent-5b',
    question: 'Hitler\'s alleged 1939 statement, "Who, after all, speaks today of the annihilation of the Armenians?", is most commonly cited as evidence for which AP-style argument?',
    options: [
      'The international failure to prosecute the Armenian Genocide created a permissive precedent that emboldened later perpetrators in the Nazi state',
      'The Armenian Genocide was meaningfully prosecuted by the 1920 Treaty of Sèvres and all senior Ottoman officials served substantial prison sentences in postwar Europe',
      'Hitler had no awareness of any prior 20th-century cases of mass killing or any international legal framework regarding genocide before the Second World War began',
      'The Holocaust was directed continuously from 1915 onward by the same political and ideological leadership that organized the Armenian killings during the First World War'
    ],
    correctIndex: 0,
    explanation: 'This quotation is the canonical evidence for the "impunity emboldens future atrocity" argument and is heavily used on AP comparison and connection prompts.',
    partNumber: 5,
    partTitle: 'Change Over Time'
  },
  {
    id: 'whma-ent-6a',
    question: 'Which sourcing acronym is most useful for analyzing primary documents on AP World History essays?',
    options: ['GDP', 'HIPP', 'NATO', 'OPEC'],
    correctIndex: 1,
    explanation: 'HIPP stands for historical context, intended audience, purpose, and point of view — the four sourcing moves AP graders look for. Apply it to every primary document you cite in an LEQ or DBQ-style response.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whma-ent-6b',
    question: 'Which document is most commonly used by AP students to evidence the bureaucratic coordination of the Final Solution?',
    options: [
      "Anne Frank's diary",
      'The Wannsee Protocol (January 1942)',
      'The Atlantic Charter (August 1941)',
      'The Universal Declaration of Human Rights (1948)'
    ],
    correctIndex: 1,
    explanation: 'The Wannsee Protocol is the classic perpetrator administrative source. Anne Frank documents lived experience; the UDHR documents postwar response.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'whma-ent-7a',
    question: 'Which two ad-hoc international tribunals were established in the 1990s to prosecute genocide and war crimes?',
    options: [
      'ICTY (former Yugoslavia, 1993) and ICTR (Rwanda, 1994)',
      'The League of Nations Assembly and the Nuremberg Tribunal',
      'The European Court of Human Rights and the African Court of Justice',
      'The International Court of Justice and the World Trade Organization'
    ],
    correctIndex: 0,
    explanation: 'ICTY and ICTR are the canonical post-Cold-War tribunals. They preceded and informed the design of the permanent ICC, which began operating in 2002.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'whma-ent-7b',
    question: 'Which AP historical thinking skill is being tested by a prompt that asks: "Explain the extent to which 20th-century mass atrocities both repeated and changed"?',
    options: [
      'Continuity and change over time (CCOT)',
      'Causation only, with no other framework involved',
      'Periodization with no analytical claim required',
      'Sourcing of a single primary document only'
    ],
    correctIndex: 0,
    explanation: 'The verbs "repeated and changed" are the CCOT signal. Strong responses name BOTH continuities (structure) AND changes (method, law, response).',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

// Patch missing partNumber on whma-ent-5b (defensive — the literal above did
// not include partNumber/partTitle for that entry; ensure they are set).
for (const q of questions) {
  if (!q.partNumber) {
    q.partNumber = 5
    q.partTitle = 'Change Over Time'
  }
}

// Patch missing partNumber on whma-ent-5b (defensive — the literal above did
// not include partNumber/partTitle for that entry; ensure they are set).
for (const q of questions) {
  if (!q.partNumber) {
    q.partNumber = 5
    q.partTitle = 'Change Over Time'
  }
}

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
