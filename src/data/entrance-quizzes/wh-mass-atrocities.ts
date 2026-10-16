/**
 * Entrance Quiz — Mass Atrocities & Resistance in the 20th Century (AP World History: Modern)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Core Concepts
  {
    id: 'whma-ent-1a',
    question: 'In 1992, Bosnian Serb forces drove Bosniak and Croat villagers from towns they wanted for a "Greater Serbia," burning homes so that no one could return. This policy is best described as',
    options: ['ethnic cleansing, the expulsion of a people from a territory', 'a famine caused by state seizures of grain from the countryside', 'a war crime limited to the mistreatment of captured soldiers', 'industrial killing carried out in camps reached by railway'],
    correctIndex: 0,
    explanation: 'Expelling a population to take its land is ethnic cleansing, which in Bosnia also led to the genocide at Srebrenica. The policy was not a famine, it targeted civilians rather than prisoners of war, and it did not rely on rail-linked death camps.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  {
    id: 'whma-ent-1b',
    question: 'Both the Armenian Genocide and the Holocaust began during a world war. Which best explains why wartime made such killing more likely?',
    options: ['War ended all contact between the regimes and the outside world', 'Soldiers at the front demanded that civilians be removed from cities', 'Allied governments encouraged the killings to weaken their opponents', 'War swept aside legal limits and cast minorities as enemies'],
    correctIndex: 3,
    explanation: 'Wartime emergency powers swept aside legal protections, and regimes framed Armenians and Jews as internal threats. Information still reached the outside world, the Allies did not encourage the killings, and the policies came from the state, not from soldiers\' demands.',
    partNumber: 1,
    partTitle: 'Core Concepts',
  },
  // Part 2: Key Processes
  {
    id: 'whma-ent-2a',
    question: 'The Nuremberg Laws of 1935 stripped German Jews of citizenship and banned their marriages with non-Jews. In the step-by-step process of the Holocaust, these laws belong to which stage?',
    options: ['Industrial killing in camps such as Treblinka', 'Ghettoization in the cities of occupied Poland', 'Legal exclusion that came before deportation', 'Mass shootings by mobile units in the Soviet Union'],
    correctIndex: 2,
    explanation: 'The Nuremberg Laws were part of the legal exclusion of 1933–1935, years before ghettos (1939–1941), mass shootings (1941), and death camps (1942–1945).',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  {
    id: 'whma-ent-2b',
    question: 'The Khmer Rouge emptied Phnom Penh in April 1975 and singled out people who wore glasses or spoke foreign languages. These policies are best explained by',
    options: ['a racial ideology that ranked Cambodians above all neighboring peoples', 'an agrarian ideology that treated townspeople and the educated as enemies', 'a plan to rebuild Cambodia\'s cities with aid from Western governments', 'a religious campaign to restore Buddhist monasteries to their old power'],
    correctIndex: 1,
    explanation: 'Pol Pot\'s "Year Zero" sought a classless peasant society, so urban "new people" and anyone marked as educated became targets. The Khmer Rouge rejected Western aid, persecuted Buddhist monks, and defined many of its enemies by class rather than race alone.',
    partNumber: 2,
    partTitle: 'Key Processes',
  },
  // Part 3: Patterns & Examples
  {
    id: 'whma-ent-3a',
    question: 'Belgian colonial officials in Rwanda issued identity cards that labeled each person Hutu or Tutsi. This policy contributed to the 1994 genocide mainly by',
    options: ['hardening once-fluid groupings into fixed legal categories', 'giving Tutsi refugees the right to settle in Belgium', 'ending all differences in wealth between the two groups', 'placing Rwanda under United Nations trusteeship after 1994'],
    correctIndex: 0,
    explanation: 'The cards froze once-flexible social categories into permanent labels, which in 1994 told killers at roadblocks whom to target. They granted no settlement rights, did not equalize wealth, and had nothing to do with trusteeship.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  {
    id: 'whma-ent-3b',
    question: 'Why do many historians classify the famine of China\'s Great Leap Forward (1958–1962) as a crime against humanity rather than as genocide?',
    options: ['Its death toll was too small to count under international law', 'It was caused entirely by drought and other natural disasters', 'It took place in wartime, which international law fully excuses', 'Its deaths came from policy, not clear intent to destroy a group'],
    correctIndex: 3,
    explanation: 'Genocide requires intent to destroy a national, ethnic, racial, or religious group; the Great Leap\'s tens of millions of deaths resulted from reckless state policy without that proven aim. The toll was enormous, China was not at war, and human decisions, not nature alone, caused the famine.',
    partNumber: 3,
    partTitle: 'Patterns & Examples',
  },
  // Part 4: Connections & Interactions
  // source: Robert H. Jackson, opening statement before the International Military Tribunal, Nuremberg, November 21, 1945; verbatim
  {
    id: 'whma-ent-4a',
    question: '"The wrongs which we seek to condemn and punish have been so calculated, so malignant, and so devastating, that civilization cannot tolerate their being ignored, because it cannot survive their being repeated."\n— Robert Jackson, U.S. chief prosecutor at Nuremberg, 1945\n\nJackson\'s statement best reflects which development?',
    options: ['The League of Nations\' collective security against aggression', 'Holding individual leaders responsible for state crimes', 'The Treaty of Lausanne\'s decision to drop war crimes trials', 'Allied plans to make Germany pay large reparations once more'],
    correctIndex: 1,
    explanation: 'Nuremberg tried individual Nazi leaders for crimes against humanity, rejecting the idea that acts of state shielded those who ordered them. The League had already collapsed, Lausanne represents the impunity Nuremberg broke from, and the trials concerned guilt, not reparations.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  {
    id: 'whma-ent-4b',
    question: 'Chiune Sugihara\'s transit visas for Jewish refugees and the sheltering of Jews in the French village of Le Chambon-sur-Lignon are best used to support which argument?',
    options: ['Nazi occupation authorities welcomed foreign aid to Jewish refugees', 'Most people living under occupation actively resisted the Nazis', 'Individuals and communities could choose to rescue the targeted', 'Rescue efforts ended the Holocaust before the war was over'],
    correctIndex: 2,
    explanation: 'These rescuers show that moral choice was possible even under occupation. Nazi authorities hunted rather than welcomed such efforts, most people were bystanders rather than resisters, and rescue saved thousands but did not end the genocide.',
    partNumber: 4,
    partTitle: 'Connections & Interactions',
  },
  // Part 5: Change Over Time
  {
    id: 'whma-ent-5a',
    question: 'Which evidence best supports the claim that international law moved from impunity toward accountability during the twentieth century?',
    options: ['The Treaty of Lausanne dropped trials for the 1915 deportations and massacres', 'The Genocide Convention defined genocide in 1948 using Raphael Lemkin\'s term', 'Killers in 1915 went unpunished, but a 1990s court convicted Rwanda\'s premier', 'The League of Nations failed to stop Italy from invading Ethiopia in 1935'],
    correctIndex: 2,
    explanation: 'Setting the unpunished Armenian Genocide beside the ICTR\'s conviction of Jean Kambanda shows change across the century. The Lausanne and League examples show impunity alone, and the 1948 definition names a law without showing it enforced.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  {
    id: 'whma-ent-5b',
    question: 'Which comparison of the role of mass media in the Holocaust and in the Rwandan Genocide is most accurate?',
    options: ['Only the Nazi regime used propaganda to dehumanize its victims', 'The Nazis relied mainly on radio, while Rwanda\'s killers used films and posters', 'Neither regime relied on any form of mass media during the killing', 'Each regime used media to dehumanize victims, with radio leading in Rwanda'],
    correctIndex: 3,
    explanation: 'Nazi films, posters, and newspapers such as Der Stürmer and Rwanda\'s RTLM radio both cast victims as threats, showing a continuity with a change in medium. RTLM even broadcast names and locations of targets.',
    partNumber: 5,
    partTitle: 'Change Over Time',
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'whma-ent-6a',
    question: 'A student writes: "The Rwandan Genocide happened because of ancient tribal hatreds." Which revision would most improve this claim?',
    options: ['Show how ideology, colonial policy and militias drove the killing', 'Add that the hatreds were older than anyone could remember', 'Argue that the violence was spontaneous and had no organizers', 'Blame the killing on the personal evil of a single leader'],
    correctIndex: 0,
    explanation: 'Structural causes such as Hutu Power ideology, colonial identity cards, and planned militia violence explain the genocide; "ancient hatred" explanations evade causation. Calling it spontaneous or blaming one person ignores the organization behind it.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'whma-ent-6b',
    question: 'Anne Frank\'s diary, written in hiding in Amsterdam from 1942 to 1944, is most useful as evidence of',
    options: ['how Nazi officials planned the Final Solution', 'the daily life and fears of a family concealed from the Nazis', 'conditions inside the gas chambers at Auschwitz', 'Allied military strategy in Western Europe'],
    correctIndex: 1,
    explanation: 'A diary kept in hiding records the writer\'s own experience under occupation. It cannot show the planners\' decisions, the camps (which Anne Frank wrote nothing about), or Allied strategy.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  // Part 7: AP Review
  {
    id: 'whma-ent-7a',
    question: 'Which comparison of the Holocaust and the Rwandan Genocide uses shared analytical categories most effectively?',
    options: ['The Holocaust was larger, so it is more important than Rwanda', 'The Holocaust happened in Europe and the Rwandan Genocide in Africa', 'Each paired an ideology with a target group, but methods differed', 'Each was caused by hatred, and nothing else connects the two cases'],
    correctIndex: 2,
    explanation: 'Comparing ideology, target group, and method across both cases is analysis; the Holocaust used camps and rail logistics while Rwanda used militias, machetes, and radio. Ranking by size, listing locations, or citing hatred alone does not compare causes.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'whma-ent-7b',
    question: 'An essay on the Universal Declaration of Human Rights (1948) would be best contextualized by referring to',
    options: ['the Khmer Rouge evacuation of Phnom Penh in 1975', 'the Treaty of Lausanne\'s settlement with Turkey in 1923', 'the Bosnian War and the long siege of Sarajevo', 'the revelation of Nazi crimes as World War II ended'],
    correctIndex: 3,
    explanation: 'The Declaration was drafted as the world confronted the Holocaust and other wartime atrocities. Lausanne came decades earlier, and the Khmer Rouge and the Bosnian War came decades later.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
