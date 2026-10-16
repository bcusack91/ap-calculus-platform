/**
 * Entrance Quiz — Social & Ethical Impacts (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cse-ent-1a', partNumber: 1, partTitle: 'Privacy, Surveillance, Intellectual Property, and Responsibility',
    question: 'A free fitness app earns most of its money by selling users\' activity data to advertisers. Which describes the tradeoff its users are making?',
    options: ['They hand over personal data in return for a free service', 'They pay a fee in return for stronger privacy', 'They accept less accurate data in return for faster syncing', 'They give up battery life in return for free music'],
    correctIndex: 0,
    explanation: 'Free services are often paid for with the data users generate. The convenience comes at a cost to privacy, often without users fully understanding what they agreed to.',
  },
  {
    id: 'cse-ent-1b', partNumber: 1, partTitle: 'Privacy, Surveillance, Intellectual Property, and Responsibility',
    question: 'A company releases its app as proprietary software. Which statement is true?',
    options: ['Anyone may modify and redistribute its code', 'Others need permission to view, change or share its code', 'Anyone may reuse it freely as long as they give credit', 'Its source code must be posted openly online'],
    correctIndex: 1,
    explanation: 'Proprietary software keeps all rights reserved. Open source and Creative Commons are the arrangements that let others reuse or modify work.',
  },
  {
    id: 'cse-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A meal-delivery app launches in a city. Which group is an indirect stakeholder rather than a direct user?',
    options: ['Grocers that lose dinner sales', 'Customers who order meals through it', 'Restaurants that list their menus on it', 'Diners who rate their orders in the app'],
    correctIndex: 0,
    explanation: 'Grocers never use the app, yet its success changes their business. Customers, listed restaurants and reviewers all use the app directly.',
  },
  {
    id: 'cse-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A company\'s résumé screener turns out to reject women more often than men, and the company says the bias was never intended. What is the most responsible next step?',
    options: ['Keep using it, since no one meant any harm', 'Train it on more of the same past hiring data', 'Measure its results by group and fix the cause', 'Lower the passing score for every applicant'],
    correctIndex: 2,
    explanation: 'Bias causes real harm whether or not it was intended. Testing results for each group and correcting the data or design addresses it; more of the same biased data would not.',
  },
  {
    id: 'cse-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples: Crowdsourcing and Unintended Uses',
    question: 'An inventor raises money online from 5,000 people who each give a small amount to help build a new product. This is an example of',
    options: ['crowdfunding', 'citizen science', 'open access', 'data mining'],
    correctIndex: 0,
    explanation: 'Crowdfunding connects a business or cause with funding from many people over the Internet. It is one form of crowdsourcing.',
  },
  {
    id: 'cse-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples: Crowdsourcing and Unintended Uses',
    question: 'An online encyclopedia lets anyone edit its articles, and a vandal adds false facts to several pages. Which safeguard keeps the benefits of many contributors?',
    options: ['Letting only one person write every article', 'Hiding the history of edits from readers', 'Clear editing rules and a review of all changes', 'Turning off the search feature for visitors'],
    correctIndex: 2,
    explanation: 'Projects that rely on many contributors need rules and review to catch misuse. Limiting writing to one person would throw away the scale that makes crowdsourcing useful.',
  },
  {
    id: 'cse-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A student shares a post with 50 friends. One friend screenshots it, it spreads widely, and a future employer sees it. What does this show?',
    options: ['Privacy settings make every post completely private', 'Online information can be used in unintended ways', 'Deleting the original removes every copy', 'Posts shared with friends cannot be reshared'],
    correctIndex: 1,
    explanation: 'Information placed online can be forwarded, reshared and seen by people it was never meant for. Once shared, it is hard to control or remove.',
  },
  {
    id: 'cse-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A hospital uses an algorithm to decide which patients get follow-up calls. Which step best checks whether bias is built into it?',
    options: ['Run it on faster hardware', 'Train it on a much bigger copy of the same old data', 'Keep its rules secret from the doctors', 'Compare error rates across groups of people'],
    correctIndex: 3,
    explanation: 'Bias shows up as some groups faring worse, so results must be measured for each group. Faster hardware or more of the same data does not reveal or fix it.',
  },
  {
    id: 'cse-ent-5a', partNumber: 5, partTitle: 'Legal and Ethical Concerns',
    question: 'Which use of someone else\'s work is both legal and ethical?',
    options: ['Downloading a paid movie that someone posted without permission', 'Changing and sharing an open-source program under its license', 'Turning in a classmate\'s code as your own work', 'Copying a purchased game\'s files for friends'],
    correctIndex: 1,
    explanation: 'Open-source licenses allow programs to be modified and redistributed. The other choices violate the creator\'s intellectual property or are plagiarism.',
  },
  {
    id: 'cse-ent-5b', partNumber: 5, partTitle: 'Legal and Ethical Concerns',
    question: 'A smart speaker in a living room is always listening for its wake word. Which concern does the AP framework link most directly to devices like this?',
    options: ['Privacy, from nonstop data collection', 'Intellectual property, from copied music', 'Bias, from unequal loan decisions', 'Fault tolerance, from relying on one server'],
    correctIndex: 0,
    explanation: 'Devices that continuously monitor activities and collect data raise privacy concerns, because that data can be analyzed and used in ways owners never expected.',
  },
  {
    id: 'cse-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A team measures its face-unlock feature separately for each group of users and finds it fails far more often for one group. What should the team do next?',
    options: ['Release it now, since the average result is fine', 'Gather more photos of groups it already handles well', 'Stop measuring, since results always vary by group', 'Look for the cause in the data and the design'],
    correctIndex: 3,
    explanation: 'Once a gap is found, the next step is to trace it to the training data or the algorithm, fix it, and check again. An acceptable average can hide harm to one group.',
  },
  {
    id: 'cse-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A city installs cameras that cut speeding but also log every car\'s license plate. Which statement best fits this effect?',
    options: ['The cameras have no effect beyond fewer tickets', 'The cameras help drivers but harm no one', 'Some value safety and others fear tracking', 'The cameras harm drivers but help no one'],
    correctIndex: 2,
    explanation: 'One effect of an innovation can be beneficial to some people and harmful to others. Asking who benefits and who could be harmed is the core of impact analysis.',
  },
  {
    id: 'cse-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which reasoning about an algorithm that treats some groups unfairly is correct?',
    options: ['Its output is objective because a computer made it', 'Adding more of the same data will remove the bias', 'Bias only matters when it is written in on purpose', 'Its harm is real even if no one intended it'],
    correctIndex: 3,
    explanation: 'Bias can enter through data or design without anyone meaning it, and the people affected are harmed either way. Algorithm output is not automatically objective.',
  },
  {
    id: 'cse-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A student uses a paragraph from an open-access research article in an essay. What must the student do?',
    options: ['Nothing, since open access means no credit is needed', 'Pay the journal before using any of the text', 'Credit the authors as the source', 'Reword it so no one can trace it'],
    correctIndex: 2,
    explanation: 'Open access removes barriers to reading research, but material created by someone else should always be cited. Presenting it as your own is plagiarism.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Privacy, Surveillance, Intellectual Property, and Responsibility' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples: Crowdsourcing and Unintended Uses' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Legal and Ethical Concerns' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
