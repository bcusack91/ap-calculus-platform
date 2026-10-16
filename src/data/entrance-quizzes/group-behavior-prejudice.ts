/**
 * Entrance Quiz — Group Behavior and Prejudice (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Groups, Culture, and Social Norms
  {
    id: 'gbp-ent-1a',
    question: 'A student who downloads movies illegally estimates that 70% of his classmates do the same. A classmate who never does it estimates 15%. An anonymous survey finds the real figure is 30%. Which concept explains both estimates?',
    options: ['False consensus effect', 'Out-group homogeneity bias', 'Just-world phenomenon', 'Ethnocentrism'],
    correctIndex: 0,
    explanation: 'Each student overestimates how many others share his own behavior, which is the false consensus effect.',
    partNumber: 1,
    partTitle: 'Groups, Culture, and Social Norms',
  },
  {
    id: 'gbp-ent-1b',
    question: 'At home, a Mexican American student speaks Spanish and follows her family\'s customs of deference to elders. At school, she debates her teachers openly in English. She feels at home in both settings and moves easily between their norms. Which concept does this best illustrate?',
    options: ['Ethnocentrism, judging one culture by the other', 'False consensus, assuming others share all her views', 'Multiculturalism, holding two cultural identities', 'Deindividuation, losing her sense of self'],
    correctIndex: 2,
    explanation: 'Valuing and keeping more than one cultural identity, and switching between their norms depending on the setting, reflects multiculturalism. Nothing in the case involves judging one culture as superior or misjudging how many people agree with her.',
    partNumber: 1,
    partTitle: 'Groups, Culture, and Social Norms',
  },

  // Part 2: Group Influence at Work: Conditions and Applications
  {
    id: 'gbp-ent-2a',
    question: 'An experienced data-entry clerk types faster when coworkers stand nearby watching. A new employee learning a complex billing program makes more errors when the same coworkers watch her. Which concept explains both results?',
    options: ['Social loafing', 'Deindividuation', 'Social facilitation', 'Groupthink'],
    correctIndex: 2,
    explanation: 'Being watched raises arousal, which improves performance on simple or well-practiced tasks and hurts performance on new or complex ones. That is social facilitation.',
    partNumber: 2,
    partTitle: 'Group Influence at Work: Conditions and Applications',
  },
  {
    id: 'gbp-ent-2b',
    question: 'A hospital\'s close-knit leadership team approves every plan its chief proposes, usually without discussion. Several members later admit they had serious doubts but said nothing. Which change would an industrial-organizational psychologist most likely recommend?',
    options: ['Have the chief speak last and invite dissent', 'Pay every member the same flat team bonus', 'Add members who already share the chief\'s views', 'Hold all meetings privately with no outside input'],
    correctIndex: 0,
    explanation: 'Suppressed doubts in a cohesive group signal groupthink. Inviting dissent, having the leader speak last and bringing in outside reviewers break the pressure for harmony.',
    partNumber: 2,
    partTitle: 'Group Influence at Work: Conditions and Applications',
  },

  // Part 3: Stereotypes, Prejudice, and Discrimination
  {
    id: 'gbp-ent-3a',
    question: 'A restaurant owner believes members of a certain group are unreliable, feels uneasy whenever one of them comes in, and has never hired a member of that group. Which terms describe these three parts, in order?',
    options: ['Stereotype, prejudice, discrimination', 'Prejudice, stereotype, discrimination', 'Discrimination, prejudice, stereotype', 'Stereotype, discrimination, prejudice'],
    correctIndex: 0,
    explanation: 'A belief about a group is a stereotype, a negative feeling toward it is prejudice, and unfair treatment of its members is discrimination.',
    partNumber: 3,
    partTitle: 'Stereotypes, Prejudice, and Discrimination',
  },
  {
    id: 'gbp-ent-3b',
    question: 'In a practice study, participants watch the same short video in which one student shoves another during an argument. When the student doing the shoving is described as belonging to a group that many people expect to be aggressive, more participants call the shove "violent" rather than "playing around." What does this result show?',
    options: ['Out-group homogeneity making members seem alike', 'Ethnocentrism ranking one culture above others', 'A stereotype steering how the act is read', 'Just-world thinking that blames the victim'],
    correctIndex: 2,
    explanation: 'Everyone saw the same behavior, so the different labels came from the stereotype, which shaped how an ambiguous act was interpreted. Stereotypes can cause biased perceptions as well as result from them.',
    partNumber: 3,
    partTitle: 'Stereotypes, Prejudice, and Discrimination',
  },

  // Part 4: Biases Behind Prejudice and Reading the Data
  {
    id: 'gbp-ent-4a',
    question: 'Soccer fans watching the same replay call a referee\'s decision fair when it favors their own team and unfair when the identical call favors the rival team. Which bias does this show?',
    options: ['False consensus effect', 'Just-world phenomenon', 'Out-group homogeneity bias', 'In-group bias'],
    correctIndex: 3,
    explanation: 'Judging the same call more favorably when it helps one\'s own group is in-group bias. Out-group homogeneity bias would involve seeing the rival fans as all alike.',
    partNumber: 4,
    partTitle: 'Biases Behind Prejudice and Reading the Data',
  },
  {
    id: 'gbp-ent-4b',
    question: 'In a practice minimal-group study, five volunteers each split 20 points between an anonymous member of their own arbitrary team and a member of the other team. They gave their own team 9, 12, 14, 12 and 13 points. Which statement about these data is correct?',
    options: ['The mean and the median are both 12', 'The mean is 13 and the range is 4', 'The median is 13 and the range is 5', 'The mean is 12 and the mode is 14'],
    correctIndex: 0,
    explanation: 'The scores sum to 60, so the mean is 60 ÷ 5 = 12. Ordered (9, 12, 12, 13, 14), the median is 12, the mode is 12 and the range is 5. A mean above 10 points to in-group bias.',
    partNumber: 4,
    partTitle: 'Biases Behind Prejudice and Reading the Data',
  },

  // Part 5: Conflict and Cooperation: Social Traps and Superordinate Goals
  {
    id: 'gbp-ent-5a',
    question: 'Two neighboring villages have feuded for generations. When a landslide blocks the only road both use, and neither village has enough workers to clear it alone, residents work side by side for weeks. Afterward the feud cools. Which concept explains the change?',
    options: ['Social trap', 'Superordinate goal', 'Polarization', 'In-group bias'],
    correctIndex: 1,
    explanation: 'A goal that both rival groups want and neither can reach alone is a superordinate goal. Working toward it redraws the line of "us," reducing hostility, as in the Robbers Cave study.',
    partNumber: 5,
    partTitle: 'Conflict and Cooperation: Social Traps and Superordinate Goals',
  },
  {
    id: 'gbp-ent-5b',
    question: 'In a shared dorm kitchen, each student leaves dirty dishes in the sink, reasoning that one more plate will not matter. Within weeks the kitchen is unusable for everyone. Which step would most directly help the students escape this kind of situation?',
    options: ['Ask students to keep their dish counts secret', 'Set and enforce a cleanup rule for each student', 'Add more students to share the same kitchen', 'Remind students that the kitchen costs nothing'],
    correctIndex: 1,
    explanation: 'This is a social trap: a choice that makes sense for each person harms everyone. A rule that is enforced for each individual changes the payoff of the selfish choice, which helps groups escape the trap.',
    partNumber: 5,
    partTitle: 'Conflict and Cooperation: Social Traps and Superordinate Goals',
  },

  // Part 6: Prosocial Behavior and the Bystander Effect
  {
    id: 'gbp-ent-6a',
    question: 'At a crowded fair, several adults stop what they are doing to help a crying toddler find her parents, though they will never see the family again. Which explanation for their helping fits best?',
    options: ['Social reciprocity norm', 'Diffusion of responsibility', 'Social responsibility norm', 'Just-world phenomenon'],
    correctIndex: 2,
    explanation: 'Helping someone who depends on others, with no expectation of a return, reflects the social responsibility norm. The reciprocity norm involves returning help someone gave you.',
    partNumber: 6,
    partTitle: 'Prosocial Behavior and the Bystander Effect',
  },
  {
    id: 'gbp-ent-6b',
    question: 'A man collapses in a busy train station. Dozens of people see him and realize something is wrong, but each figures someone else has already called for help, and no one does. At which step of the bystander decision process did helping break down?',
    options: ['Noticing the event', 'Knowing how to help', 'Interpreting it as an emergency', 'Assuming responsibility'],
    correctIndex: 3,
    explanation: 'People noticed the man and saw the emergency, but diffusion of responsibility kept each person from taking responsibility to act.',
    partNumber: 6,
    partTitle: 'Prosocial Behavior and the Bystander Effect',
  },

  // Part 7: Synthesis and EBQ Practice
  {
    id: 'gbp-ent-7a',
    question: 'An EBQ source reports a survey of 500 city residents: people living in larger apartment buildings say they help their neighbors less often (r = −0.25). Which use of this source is most accurate?',
    options: ['It proves crowding causes people to stop helping', 'It is an experiment because residents were sampled', 'It shows that larger buildings go with more helping', 'It shows only an association between the two'],
    correctIndex: 3,
    explanation: 'A negative correlation from a survey shows that larger buildings go with less reported helping, but it cannot rule out reverse causation or third variables, so it supports an association only.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
  {
    id: 'gbp-ent-7b',
    question: 'Which finding best illustrates the "power of the situation" theme that runs through group behavior research?',
    options: ['Highly agreeable people help more in most settings', 'Students loaf when pooled but not when identified', 'Twins raised apart hold similar views about groups', 'Extraverted students tend to join more campus clubs'],
    correctIndex: 1,
    explanation: 'The same people change their effort depending on whether their contribution can be identified, so the situation, not a stable trait, drives the behavior.',
    partNumber: 7,
    partTitle: 'Synthesis and EBQ Practice',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Groups, Culture, and Social Norms' },
    { partNumber: 2, partTitle: 'Group Influence at Work: Conditions and Applications' },
    { partNumber: 3, partTitle: 'Stereotypes, Prejudice, and Discrimination' },
    { partNumber: 4, partTitle: 'Biases Behind Prejudice and Reading the Data' },
    { partNumber: 5, partTitle: 'Conflict and Cooperation: Social Traps and Superordinate Goals' },
    { partNumber: 6, partTitle: 'Prosocial Behavior and the Bystander Effect' },
    { partNumber: 7, partTitle: 'Synthesis and EBQ Practice' },
  ]
}
