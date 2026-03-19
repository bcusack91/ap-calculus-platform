/**
 * Entrance Quiz — Social Influence & Conformity (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Conformity & Obedience
  {
    id: 'sic-ent-1a',
    question: 'What is conformity in social psychology?',
    options: [
      'Refusing to follow group norms to maintain individuality',
      'Adjusting one\'s behavior or thinking to match a group standard',
      'Obeying direct commands from a person in authority',
      'Persuading others to change their opinions through logical argument'
    ],
    correctIndex: 1,
    explanation: 'Conformity is the tendency to adjust one\'s behavior or thinking to match a group standard, even without a direct request to do so.',
    partNumber: 1,
    partTitle: 'Conformity & Obedience'
  },
  {
    id: 'sic-ent-1b',
    question: 'Which best defines obedience?',
    options: [
      'Changing personal beliefs to align with a group consensus',
      'Copying the actions of a role model or peer',
      'Following direct orders from an authority figure',
      'Voluntarily helping others without expectation of reward'
    ],
    correctIndex: 2,
    explanation: 'Obedience is the act of following direct orders or commands from an authority figure, as distinguished from conformity which involves matching group norms.',
    partNumber: 1,
    partTitle: 'Conformity & Obedience'
  },
  // Part 2: Asch & Milgram
  {
    id: 'sic-ent-2a',
    question: 'In Asch\'s line experiment, approximately what fraction of participants conformed to obviously wrong answers given by confederates?',
    options: [
      'About one-tenth',
      'About one-quarter',
      'About one-third',
      'About three-quarters'
    ],
    correctIndex: 2,
    explanation: 'Asch\'s line study found that roughly one-third of participants conformed to obviously incorrect answers due to group pressure.',
    partNumber: 2,
    partTitle: 'Asch & Milgram'
  },
  {
    id: 'sic-ent-2b',
    question: 'In Milgram\'s obedience study, approximately what percentage of participants administered the maximum "shock" level when ordered by the experimenter?',
    options: [
      '25%',
      '45%',
      '65%',
      '85%'
    ],
    correctIndex: 2,
    explanation: 'Milgram\'s famous obedience study found that approximately 65% of participants continued to administer the maximum level of shock when instructed by the authority figure.',
    partNumber: 2,
    partTitle: 'Asch & Milgram'
  },
  // Part 3: Group Influence
  {
    id: 'sic-ent-3a',
    question: 'Groupthink occurs when a group\'s desire for harmony leads to which outcome?',
    options: [
      'Increased creativity and diverse problem-solving strategies',
      'Poor decision-making because dissenting opinions are suppressed',
      'Greater individual accountability among group members',
      'More accurate risk assessment before making decisions'
    ],
    correctIndex: 1,
    explanation: 'Groupthink is a phenomenon where the desire for group harmony and conformity leads to poor decision-making because members suppress dissenting viewpoints.',
    partNumber: 3,
    partTitle: 'Group Influence'
  },
  {
    id: 'sic-ent-3b',
    question: 'What is group polarization?',
    options: [
      'A group splitting into two opposing factions after discussion',
      'The tendency for group discussion to strengthen the dominant viewpoint of the group',
      'A reduction in extreme opinions after group deliberation',
      'The process by which a group leader emerges from an unstructured group'
    ],
    correctIndex: 1,
    explanation: 'Group polarization is the tendency for group discussion to enhance and strengthen the pre-existing dominant viewpoint held by the majority of group members.',
    partNumber: 3,
    partTitle: 'Group Influence'
  },
  // Part 4: Social Facilitation
  {
    id: 'sic-ent-4a',
    question: 'Social facilitation refers to the tendency for the presence of others to:',
    options: [
      'Decrease performance on all types of tasks',
      'Improve performance on easy or well-learned tasks',
      'Cause individuals to take greater risks',
      'Increase conformity to group norms'
    ],
    correctIndex: 1,
    explanation: 'Social facilitation is the finding that the presence of others tends to improve performance on simple or well-practiced tasks, while it can impair performance on complex or unfamiliar tasks.',
    partNumber: 4,
    partTitle: 'Social Facilitation'
  },
  {
    id: 'sic-ent-4b',
    question: 'Social loafing is best described as:',
    options: [
      'Performing better when being observed by others',
      'Conforming to group norms to avoid rejection',
      'Individuals exerting less effort when working in a group',
      'Losing self-awareness in large group settings'
    ],
    correctIndex: 2,
    explanation: 'Social loafing is the tendency for individuals to exert less effort when working collectively in a group than when working alone.',
    partNumber: 4,
    partTitle: 'Social Facilitation'
  },
  // Part 5: Deindividuation
  {
    id: 'sic-ent-5a',
    question: 'Deindividuation is the loss of self-awareness in group situations, which tends to lead to:',
    options: [
      'More rational and deliberate decision-making',
      'Impulsive and sometimes antisocial behavior',
      'Stronger personal identity and moral reasoning',
      'Increased empathy for out-group members'
    ],
    correctIndex: 1,
    explanation: 'Deindividuation is the loss of self-awareness and self-restraint in group situations that fosters anonymity, often resulting in impulsive or antisocial behavior.',
    partNumber: 5,
    partTitle: 'Deindividuation'
  },
  {
    id: 'sic-ent-5b',
    question: 'In Zimbardo\'s Stanford prison experiment, what key finding emerged about the power of assigned roles?',
    options: [
      'Prisoners quickly organized and overthrew the guards',
      'Guards and prisoners both ignored their assigned roles within hours',
      'Role-playing led to abusive behavior by participants assigned as guards',
      'All participants refused to continue after the first day'
    ],
    correctIndex: 2,
    explanation: 'Zimbardo\'s Stanford prison experiment demonstrated that assigning roles of "guard" and "prisoner" led to abusive behavior by guards, illustrating the powerful influence of social roles and situational forces on behavior.',
    partNumber: 5,
    partTitle: 'Deindividuation'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'sic-ent-6a',
    question: 'A student changes their answer on a test because everyone around them chose a different option. This is an example of:',
    options: [
      'Informational social influence',
      'Normative social influence',
      'Obedience to authority',
      'Deindividuation'
    ],
    correctIndex: 1,
    explanation: 'Normative social influence occurs when a person conforms to be liked or accepted by the group, as when a student changes an answer to match peers.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'sic-ent-6b',
    question: 'A tourist in a foreign country follows the locals when crossing the street because they assume the locals know the traffic rules. This illustrates:',
    options: [
      'Normative social influence',
      'Deindividuation',
      'Informational social influence',
      'Social loafing'
    ],
    correctIndex: 2,
    explanation: 'Informational social influence occurs when a person conforms because they believe others have accurate information, as when a tourist follows locals who presumably know the rules.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review
  {
    id: 'sic-ent-7a',
    question: 'The foot-in-the-door technique works because:',
    options: [
      'People feel guilty after refusing a large request',
      'Agreeing to a small request first makes a person more likely to agree to a larger request later',
      'People respond to authority figures with automatic obedience',
      'Repeated exposure to a message increases its persuasive power'
    ],
    correctIndex: 1,
    explanation: 'The foot-in-the-door technique involves making a small request first to gain compliance, which then makes the person more likely to agree to a subsequent larger request.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'sic-ent-7b',
    question: 'On the AP Psychology exam, students are most often asked to identify types of social influence by:',
    options: [
      'Reciting definitions from the textbook verbatim',
      'Calculating statistical probabilities of conformity',
      'Analyzing scenario descriptions and matching them to the correct concept',
      'Listing all researchers associated with social psychology'
    ],
    correctIndex: 2,
    explanation: 'The AP Psychology exam frequently tests students\' ability to identify types of social influence from scenario-based descriptions, requiring application rather than rote memorization.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Conformity & Obedience' },
    { partNumber: 2, partTitle: 'Asch & Milgram' },
    { partNumber: 3, partTitle: 'Group Influence' },
    { partNumber: 4, partTitle: 'Social Facilitation' },
    { partNumber: 5, partTitle: 'Deindividuation' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
