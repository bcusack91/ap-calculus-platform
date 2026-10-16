/**
 * Entrance Quiz — Social Influence & Conformity (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Conformity & Obedience
  {
    id: 'sic-ent-1a',
    question: 'When Jordan misses a deadline, he blames an overloaded week. When his coworker misses the same deadline, Jordan decides she is simply disorganized. Which bias does Jordan show?',
    options: ['Actor-observer bias', 'Self-serving bias', 'Cognitive dissonance', 'Group polarization'],
    correctIndex: 0,
    explanation: 'Jordan explains his own behavior by the situation but the same behavior in someone else by disposition. Comparing self and other this way is the actor-observer bias; the self-serving bias contrasts one\'s own successes and failures.',
    partNumber: 1,
    partTitle: 'Conformity & Obedience',
  },
  {
    id: 'sic-ent-1b',
    question: 'Researchers ask readers in the United States and readers in China to explain why a man in a news story committed a crime. Based on attribution research, which result is most likely?',
    options: ['U.S. readers cite more situational causes', 'Chinese readers cite more situational causes', 'Both groups give nearly identical explanations', 'Each group cites only personality-based causes'],
    correctIndex: 1,
    explanation: 'The fundamental attribution error is weaker in collectivist cultures such as China, which emphasize context and relationships, so those readers tend to point more to situational causes than readers in the individualist United States.',
    partNumber: 1,
    partTitle: 'Conformity & Obedience',
  },

  // Part 2: Asch & Milgram
  {
    id: 'sic-ent-2a',
    question: 'Students estimate how many beans are in a large jar, first alone and then after hearing each other\'s guesses. Their estimates move close together, and a week later, writing new estimates in private, they still give the group\'s figure. Which description fits?',
    options: ['Normative influence producing public compliance only', 'Social loafing caused by diffused responsibility', 'Obedience to a direct command from an authority', 'Informational influence producing acceptance'],
    correctIndex: 3,
    explanation: 'With no clear right answer, the students used one another\'s guesses as information, which is informational influence. Because their private estimates stayed changed, the result is acceptance rather than mere public compliance.',
    partNumber: 2,
    partTitle: 'Asch & Milgram',
  },
  {
    id: 'sic-ent-2b',
    question: 'In a replication of Asch\'s line-judgment study, one confederate gives the correct answer before the real participant responds, while the rest of the group gives the same wrong answer. What effect on conformity is most likely?',
    options: ['It rises slightly', 'It drops sharply', 'It rises sharply', 'It stays the same'],
    correctIndex: 1,
    explanation: 'Conformity depends heavily on unanimity. A single dissenter breaks the group\'s united front and cuts conformity dramatically.',
    partNumber: 2,
    partTitle: 'Asch & Milgram',
  },

  // Part 3: Group Influence
  {
    id: 'sic-ent-3a',
    question: 'By modern standards, which ethical guideline did Milgram\'s obedience procedure most clearly fall short on?',
    options: ['Anonymity, broken by publishing participants\' names', 'Random assignment, skipped when choosing teachers', 'Right to withdraw, strained by prods to go on', 'Debriefing, never offered to a single participant'],
    correctIndex: 2,
    explanation: 'The experimenter\'s prods, such as "The experiment requires that you continue," pressured distressed participants not to stop, straining the right to withdraw. Deception and stress also raised concerns that led to stricter review of research.',
    partNumber: 3,
    partTitle: 'Group Influence',
  },
  {
    id: 'sic-ent-3b',
    question: 'A critic argues that the guards in the Stanford prison study acted harshly partly because they guessed how the researcher wanted them to behave. Which methodological problem is the critic describing?',
    options: ['Random assignment', 'Social facilitation', 'Informational influence', 'Demand characteristics'],
    correctIndex: 3,
    explanation: 'Demand characteristics are cues that tell participants what the researcher expects, which can shape their behavior. Zimbardo\'s dual role as researcher and "warden" made this concern stronger.',
    partNumber: 3,
    partTitle: 'Group Influence',
  },

  // Part 4: Social Facilitation
  {
    id: 'sic-ent-4a',
    question: 'In a rope-pulling task, each person pulls less hard as more teammates join. When each person\'s pull is measured and posted separately, effort rises again. Which concept explains the drop in effort?',
    options: ['Social facilitation', 'Group polarization', 'Social loafing', 'Deindividuation'],
    correctIndex: 2,
    explanation: 'People put in less effort when contributions are pooled and cannot be identified. Making each person\'s contribution identifiable reduces social loafing.',
    partNumber: 4,
    partTitle: 'Social Facilitation',
  },
  {
    id: 'sic-ent-4b',
    question: 'A jury that leans slightly toward a guilty verdict becomes strongly convinced of guilt after an hour of open debate in which no one is pressured to stay quiet. Which concept best explains the shift?',
    options: ['Group polarization', 'Groupthink', 'Social loafing', 'Public compliance'],
    correctIndex: 0,
    explanation: 'Discussion pushed the group further in the direction it already leaned, which is group polarization. Groupthink would involve suppressed dissent and pressure for harmony.',
    partNumber: 4,
    partTitle: 'Social Facilitation',
  },

  // Part 5: Deindividuation
  {
    id: 'sic-ent-5a',
    question: 'Students are paid either \\$2 or \\$50 to write an essay supporting a campus policy they oppose. According to cognitive dissonance research, which group will later report the more favorable attitude toward the policy?',
    options: ['The \\$50 group, since large pay strengthens the new view', 'Both groups equally, since both wrote the same essay', 'The \\$2 group, since small pay gives little justification', 'Neither group, since attitudes never follow behavior'],
    correctIndex: 2,
    explanation: 'With little outside justification for arguing against their views, the \\$2 group feels more dissonance and reduces it by shifting their attitude. The \\$50 group can explain the essay by the money.',
    partNumber: 5,
    partTitle: 'Deindividuation',
  },
  {
    id: 'sic-ent-5b',
    question: 'A student asks her neighbor to care for her dog for two full weeks. When he refuses, she asks whether he could just feed the dog one evening, and he agrees. Which technique and principle explain his agreement?',
    options: ['Foot-in-the-door, through a wish to stay consistent', 'Peripheral route, through attention to surface cues', 'Central route, through careful thought about arguments', 'Door-in-the-face, through a felt need to reciprocate'],
    correctIndex: 3,
    explanation: 'A large request that is refused, followed by a smaller one, is the door-in-the-face technique. The smaller request feels like a concession, so people return the favor by agreeing.',
    partNumber: 5,
    partTitle: 'Deindividuation',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'sic-ent-6a',
    question: 'A manager asks team members to submit their honest opinions in writing, without names, before each planning meeting begins. Which decision-making problem is this practice most likely meant to prevent?',
    options: ['Groupthink from self-censorship', 'Social facilitation on simple tasks', 'Deindividuation caused by anonymity', 'Informational influence on hard tasks'],
    correctIndex: 0,
    explanation: 'Collecting views privately before discussion keeps members from withholding doubts to preserve harmony, a symptom of groupthink.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'sic-ent-6b',
    question: 'A soldier fires a warning shot after his commander orders it. Later, a new recruit laughs at a crude joke only because everyone else at the table is laughing. Which pair of concepts fits the two behaviors, in order?',
    options: ['Conformity, then obedience', 'Social loafing, then compliance', 'Compliance, then groupthink', 'Obedience, then conformity'],
    correctIndex: 3,
    explanation: 'Following a direct order from an authority is obedience. Going along with peers without any request or command is conformity.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'sic-ent-7a',
    question: 'In a practice study, students rated a new cafeteria dish either privately on paper or aloud right after five classmates, secretly working with the researcher, all praised it. Ratings were much higher in the aloud condition. Which interpretation fits best?',
    options: ['Informational influence, since the dish was hard to judge', 'Normative influence, since only spoken answers went up', 'Obedience, since the classmates gave a direct order', 'Group polarization, since the group grew more extreme'],
    correctIndex: 1,
    explanation: 'Ratings rose only when students answered in front of the group, which points to a wish to fit in rather than a change in private judgment: normative influence.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'sic-ent-7b',
    question: 'At a crowded costume party where everyone wears masks, several normally reserved guests start tearing down decorations. The next day, one guest who joined in tells herself the damage was "just harmless fun." Which concepts explain the vandalism and her later thought, in order?',
    options: ['Deindividuation, then dissonance reduction', 'Social facilitation, then the FAE', 'Group polarization, then obedience', 'Social loafing, then the central route'],
    correctIndex: 0,
    explanation: 'Anonymity in a crowd lowered self-awareness and restraint, which is deindividuation. Afterward, recasting the damage as harmless reduces the discomfort of acting against her own values, which is cognitive dissonance reduction.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Conformity & Obedience' },
    { partNumber: 2, partTitle: 'Asch & Milgram' },
    { partNumber: 3, partTitle: 'Group Influence' },
    { partNumber: 4, partTitle: 'Social Facilitation' },
    { partNumber: 5, partTitle: 'Deindividuation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
