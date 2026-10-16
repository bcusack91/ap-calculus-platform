/**
 * Entrance Quiz — Impact of Computing (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cimp-ent-1a', partNumber: 1, partTitle: 'Digital Divide, Bias, and Beneficial/Harmful Effects',
    question: 'A voice assistant understands people with some accents far less accurately than others. What is the most likely cause?',
    options: ['Its servers respond more slowly in some regions', 'It learned from too few kinds of speakers', 'Some users speak too quietly into the device', 'The Internet routes some voices more slowly'],
    correctIndex: 1,
    explanation: 'A system trained on data that underrepresents some groups reproduces that gap, which is algorithmic bias. Network speed and volume do not explain a pattern tied to accent.',
  },
  {
    id: 'cimp-ent-1b', partNumber: 1, partTitle: 'Digital Divide, Bias, and Beneficial/Harmful Effects',
    question: 'A student wants to use someone else\'s photo in a class website without asking the photographer for permission. Which choice is legal?',
    options: ['Use any photo that a search engine shows', 'Use a photo after slightly changing its colors', 'Use a Creative Commons photo whose terms allow reuse', 'Use a photo as long as the site earns no money'],
    correctIndex: 2,
    explanation: 'A Creative Commons license is the creator\'s public permission to share or reuse the work under stated terms. Editing a photo or not charging money does not remove the creator\'s rights.',
  },
  {
    id: 'cimp-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A ride app shares a driver\'s location so riders can find their car. Later, some people use the same feature to track others without permission. This effect is best described as',
    options: ['harm that the designers intended', 'benefit the designers never intended', 'benefit that the designers intended', 'harm the designers never intended'],
    correctIndex: 3,
    explanation: 'The designers built location sharing to help riders, not to enable tracking, so this harm was not planned. Unintended harmful effects are the kind exam scenarios focus on most.',
  },
  {
    id: 'cimp-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A city moves all of its permit applications online and stops accepting paper forms. Which group is most likely to be harmed?',
    options: ['Residents with no home Internet access', 'Residents who already apply online', 'Residents who want faster approvals', 'Stores that sell computer equipment'],
    correctIndex: 0,
    explanation: 'People without devices or Internet access lose their way to apply, which is the digital divide in action. The other groups either benefit or are unaffected.',
  },
  {
    id: 'cimp-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A released dataset lists each person\'s ZIP code, birth date and gender but no names. Why is it still a privacy risk?',
    options: ['Combined, those fields can identify many people', 'Birth dates are protected by copyright', 'ZIP codes are encrypted and cannot be read', 'Without names the data has no use at all'],
    correctIndex: 0,
    explanation: 'Separate pieces of personal data can be aggregated to identify individuals. Few people share the same ZIP code, birth date and gender, so the records can often be traced to real people.',
  },
  {
    id: 'cimp-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A developer puts code from an open-source library into her app. What should she do?',
    options: ['Nothing, since open source has no conditions', 'Pay the authors before using any of the code', 'Rewrite it so no one can tell where it came from', 'Follow the license and credit the authors'],
    correctIndex: 3,
    explanation: 'Open-source code may be reused and modified, but under the terms of its license, and work created by others should be credited. Hiding its origin would be plagiarism.',
  },
  {
    id: 'cimp-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A bank\'s algorithm denies loan applications without telling applicants why. Which concern does this raise most directly?',
    options: ['Bandwidth, because the model needs a fast connection', 'Redundancy, because the model runs on one server', 'Transparency, because people cannot see the reasons', 'Encryption, because the decisions are not secret'],
    correctIndex: 2,
    explanation: 'When an algorithm makes high-stakes decisions about people, they should be able to understand and appeal the result. Hidden reasons make errors and bias hard to detect.',
  },
  {
    id: 'cimp-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A store\'s free loyalty card gives shoppers discounts. What does the store most likely gain in exchange?',
    options: ['A detailed record of what each shopper buys', 'Faster checkout lines at all of its stores', 'Free Internet service for its customers', 'Protection for shoppers against identity theft'],
    correctIndex: 0,
    explanation: 'The convenience of discounts is traded for a fine-grained purchase history. That data can be analyzed, combined or shared, which is the surveillance side of the trade.',
  },
  {
    id: 'cimp-ent-5a', partNumber: 5, partTitle: 'Change Over Time',
    question: 'The World Wide Web was first created so scientists could share research quickly. Its later use for shopping and entertainment is an example of',
    options: ['the digital divide closing for rural users', 'algorithmic bias in how search results rank', 'uses its inventors did not plan for at all', 'open protocols keeping personal data private'],
    correctIndex: 2,
    explanation: 'Computing innovations are often used in ways their creators did not intend, and people change how they do everyday tasks to include them.',
  },
  {
    id: 'cimp-ent-5b', partNumber: 5, partTitle: 'Change Over Time',
    question: 'Which job task is most likely to be automated first?',
    options: ['Comforting a patient before surgery', 'Typing data from paper forms into a spreadsheet', 'Negotiating a contract between two companies', 'Judging which design a client will love'],
    correctIndex: 1,
    explanation: 'Routine, rule-based tasks such as data entry are the easiest to automate. Work that depends on judgment or human interaction is more often assisted by computing than replaced.',
  },
  {
    id: 'cimp-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A public-health app collects users\' locations to find disease hotspots. Which change best reduces the privacy harm while keeping the health benefit?',
    options: ['Release only area totals, never individual routes', 'Sell the data to help pay for the app', 'Collect locations every second instead of hourly', 'Also require users to share their contact lists'],
    correctIndex: 0,
    explanation: 'Releasing only group totals still shows where outbreaks are, while making it much harder to trace any one person. The other changes collect or expose more personal data.',
  },
  {
    id: 'cimp-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'Which effect of home video doorbells is an unintended harm?',
    options: ['Owners can see who is at the door', 'Porch thieves are discouraged', 'Police use footage to solve a crime', 'Passersby are filmed unknowingly'],
    correctIndex: 3,
    explanation: 'Doorbells are built to show visitors and deter theft, so constant recording of passersby is an unplanned privacy harm. Helping police is an unintended benefit.',
  },
  {
    id: 'cimp-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which statement about the effects of computing is accurate?',
    options: ['Anonymous data can never identify a person', 'A change can help some people, harm others', 'If a use is legal, it must also be ethical', 'Automation removes jobs without creating any'],
    correctIndex: 1,
    explanation: 'The same effect can be beneficial to one group and harmful to another, so impact questions ask who is affected and how. The other statements are common misconceptions.',
  },
  {
    id: 'cimp-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'Volunteers use their own phones to photograph and report birds for a university research project. This is an example of',
    options: ['the digital divide', 'citizen science', 'algorithmic bias', 'a phishing attack'],
    correctIndex: 1,
    explanation: 'Citizen science is research done partly by volunteers who contribute data, often with their own devices. It is a form of crowdsourcing.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Digital Divide, Bias, and Beneficial/Harmful Effects' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Change Over Time' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
