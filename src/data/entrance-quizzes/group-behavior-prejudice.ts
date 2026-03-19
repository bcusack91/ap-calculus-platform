/**
 * Entrance Quiz — Group Behavior & Prejudice (AP Psychology)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Prejudice & Discrimination
  {
    id: 'gbp-ent-1a',
    question: 'What is the key distinction between prejudice and discrimination?',
    options: [
      'Prejudice is conscious while discrimination is unconscious',
      'Prejudice is an attitude (negative feeling toward a group) while discrimination is a behavior (unfair action)',
      'Prejudice only applies to race while discrimination applies to all groups',
      'There is no meaningful difference between the two concepts'
    ],
    correctIndex: 1,
    explanation: 'Prejudice is an unjustifiable negative attitude toward a group, while discrimination is the unjustifiable negative behavior or action directed at a group. One is an attitude, the other is a behavior.',
    partNumber: 1,
    partTitle: 'Prejudice & Discrimination'
  },
  {
    id: 'gbp-ent-1b',
    question: 'Racism, sexism, and ageism are all examples of:',
    options: [
      'Cognitive biases that improve decision-making accuracy',
      'Prejudice based on group membership',
      'Personality disorders classified in the DSM',
      'Defense mechanisms described by Sigmund Freud'
    ],
    correctIndex: 1,
    explanation: 'Racism, sexism, and ageism are all forms of prejudice — negative attitudes directed toward people based on their membership in a particular group (race, sex, or age).',
    partNumber: 1,
    partTitle: 'Prejudice & Discrimination'
  },
  // Part 2: Stereotypes
  {
    id: 'gbp-ent-2a',
    question: 'Stereotypes are best defined as:',
    options: [
      'Accurate descriptions of cultural differences between groups',
      'Generalized beliefs about a group that can lead to prejudice and discrimination',
      'Scientific classifications of personality types',
      'Deliberate lies spread to harm specific social groups'
    ],
    correctIndex: 1,
    explanation: 'Stereotypes are generalized (often oversimplified) beliefs about the characteristics of a group. They can lead to prejudice and discriminatory behavior.',
    partNumber: 2,
    partTitle: 'Stereotypes'
  },
  {
    id: 'gbp-ent-2b',
    question: 'Implicit bias refers to unconscious attitudes that affect judgments. Which tool is commonly used to measure implicit associations?',
    options: [
      'The Myers-Briggs Type Indicator (MBTI)',
      'The Minnesota Multiphasic Personality Inventory (MMPI)',
      'The Implicit Association Test (IAT)',
      'The Stanford-Binet Intelligence Scale'
    ],
    correctIndex: 2,
    explanation: 'The Implicit Association Test (IAT) is the most widely used tool for measuring implicit (unconscious) biases and associations that people may not be aware they hold.',
    partNumber: 2,
    partTitle: 'Stereotypes'
  },
  // Part 3: In-Group/Out-Group
  {
    id: 'gbp-ent-3a',
    question: 'In-group bias and out-group homogeneity refer to, respectively:',
    options: [
      'Favoring one\'s own group and perceiving members of other groups as "all alike"',
      'Discriminating against one\'s own group and idealizing other groups',
      'Treating all groups equally and recognizing individual differences',
      'Competing with one\'s own group and cooperating with outsiders'
    ],
    correctIndex: 0,
    explanation: 'In-group bias is the tendency to favor one\'s own group, while out-group homogeneity is the perception that members of other groups are more similar to each other than they actually are ("they\'re all alike").',
    partNumber: 3,
    partTitle: 'In-Group/Out-Group'
  },
  {
    id: 'gbp-ent-3b',
    question: 'Scapegoat theory explains prejudice as:',
    options: [
      'A learned behavior acquired through classical conditioning',
      'Frustration that is redirected as aggression toward a less powerful group',
      'An innate biological response to unfamiliar stimuli',
      'A cognitive shortcut used to simplify complex social information'
    ],
    correctIndex: 1,
    explanation: 'Scapegoat theory proposes that prejudice arises when people experience frustration and redirect their aggression toward a less powerful, often innocent, target group (displaced aggression).',
    partNumber: 3,
    partTitle: 'In-Group/Out-Group'
  },
  // Part 4: Aggression
  {
    id: 'gbp-ent-4a',
    question: 'The frustration-aggression hypothesis states that:',
    options: [
      'Aggression is always a deliberate, premeditated action',
      'Frustration creates anger which can lead to aggression',
      'Only individuals with aggressive personalities become frustrated',
      'Aggression decreases when a person is prevented from reaching a goal'
    ],
    correctIndex: 1,
    explanation: 'The frustration-aggression hypothesis proposes that frustration — the blocking of goal-directed behavior — creates anger, which can lead to aggressive behavior.',
    partNumber: 4,
    partTitle: 'Aggression'
  },
  {
    id: 'gbp-ent-4b',
    question: 'Bandura\'s social learning theory of aggression emphasizes that aggression can be:',
    options: [
      'Eliminated entirely through punishment',
      'Explained solely by genetic factors',
      'Learned through observation and imitation of aggressive models',
      'Reduced only through psychoanalytic therapy'
    ],
    correctIndex: 2,
    explanation: 'Bandura\'s social learning theory demonstrates that aggression can be learned by observing and imitating aggressive models, as shown in his famous Bobo doll experiments.',
    partNumber: 4,
    partTitle: 'Aggression'
  },
  // Part 5: Prosocial Behavior
  {
    id: 'gbp-ent-5a',
    question: 'The bystander effect predicts that a person is less likely to help when:',
    options: [
      'They are the only witness to an emergency',
      'Others are present, leading to diffusion of responsibility',
      'They have recently helped someone else',
      'The victim is a member of their in-group'
    ],
    correctIndex: 1,
    explanation: 'The bystander effect is the finding that individuals are less likely to offer help when other bystanders are present, due to diffusion of responsibility — each person assumes someone else will act.',
    partNumber: 5,
    partTitle: 'Prosocial Behavior'
  },
  {
    id: 'gbp-ent-5b',
    question: 'Altruism and the reciprocity norm differ in that:',
    options: [
      'Altruism is selfless concern for others, while the reciprocity norm involves helping those who have helped you',
      'Altruism requires payment, while the reciprocity norm is always free',
      'Altruism only occurs in emergencies, while the reciprocity norm applies to everyday life',
      'They are identical concepts with no meaningful difference'
    ],
    correctIndex: 0,
    explanation: 'Altruism is the selfless concern for others\' welfare without expectation of reward, while the reciprocity norm is the social expectation that we should help those who have helped us.',
    partNumber: 5,
    partTitle: 'Prosocial Behavior'
  },
  // Part 6: Problem-Solving Workshop
  {
    id: 'gbp-ent-6a',
    question: 'The 1964 Kitty Genovese case became a famous illustration of which concept in social psychology?',
    options: [
      'Conformity to group norms',
      'The bystander effect — many witnesses were present but nobody called for help',
      'Cognitive dissonance in emergency situations',
      'The fundamental attribution error'
    ],
    correctIndex: 1,
    explanation: 'The Kitty Genovese case became a landmark illustration of the bystander effect: despite many witnesses reportedly being aware of the attack, no one intervened or called for help, demonstrating diffusion of responsibility.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  {
    id: 'gbp-ent-6b',
    question: 'The just-world hypothesis — the belief that people get what they deserve — can lead to:',
    options: [
      'Increased prosocial behavior and empathy for victims',
      'Victim blaming, because observers assume the victim must have done something wrong',
      'Greater accuracy in predicting criminal behavior',
      'Reduced prejudice toward disadvantaged groups'
    ],
    correctIndex: 1,
    explanation: 'The just-world hypothesis is the belief that the world is fair and people get what they deserve. This belief can lead to victim blaming, as observers assume victims must have done something to cause their misfortune.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop'
  },
  // Part 7: AP Review
  {
    id: 'gbp-ent-7a',
    question: 'Allport\'s contact hypothesis states that intergroup contact reduces prejudice most effectively when:',
    options: [
      'Groups are kept separate but aware of each other\'s existence',
      'One group has authority over the other to maintain order',
      'Specific conditions are met, including equal status, cooperation, and institutional support',
      'Contact occurs only through online communication'
    ],
    correctIndex: 2,
    explanation: 'Allport\'s contact hypothesis proposes that intergroup prejudice can be reduced through direct contact, but only under specific conditions: equal status between groups, cooperative interaction, common goals, and institutional support.',
    partNumber: 7,
    partTitle: 'AP Review'
  },
  {
    id: 'gbp-ent-7b',
    question: 'On the AP Psychology exam, students are frequently asked to distinguish between:',
    options: [
      'Classical and operant conditioning exclusively',
      'Prejudice (an attitude) and discrimination (a behavior)',
      'The id, ego, and superego',
      'Fluid and crystallized intelligence'
    ],
    correctIndex: 1,
    explanation: 'The AP Psychology exam commonly tests students\' ability to distinguish prejudice (a negative attitude toward a group) from discrimination (negative behavior toward a group), often through applied scenario questions.',
    partNumber: 7,
    partTitle: 'AP Review'
  }
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return [...questions].sort(() => Math.random() - 0.5)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Prejudice & Discrimination' },
    { partNumber: 2, partTitle: 'Stereotypes' },
    { partNumber: 3, partTitle: 'In-Group/Out-Group' },
    { partNumber: 4, partTitle: 'Aggression' },
    { partNumber: 5, partTitle: 'Prosocial Behavior' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' }
  ]
}
