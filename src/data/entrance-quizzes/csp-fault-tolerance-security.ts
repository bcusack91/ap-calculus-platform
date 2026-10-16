/**
 * Entrance Quiz — Fault Tolerance & Security (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cfts-ent-1a', partNumber: 1, partTitle: 'Redundancy, Encryption, and Network Security',
    question: 'Maya wants to send Leo a message using public key encryption so that only Leo can read it. Which key does Maya use to encrypt the message?',
    options: ['Leo\'s public key', 'Leo\'s private key', 'Maya\'s private key', 'Maya\'s public key'],
    correctIndex: 0,
    explanation: 'In public key encryption, anyone can encrypt with the receiver\'s public key, but only the receiver\'s private key can decrypt. Maya never needs Leo\'s private key.',
  },
  {
    id: 'cfts-ent-1b', partNumber: 1, partTitle: 'Redundancy, Encryption, and Network Security',
    question: 'An attacker sets up a wireless network named like a café\'s real one, and reads the data of everyone who joins it. What is this?',
    options: ['A keylogger', 'A computer virus', 'A rogue access point', 'A phishing email'],
    correctIndex: 2,
    explanation: 'A rogue access point is a wireless access point that gives unauthorized access to a network, so data sent through it can be intercepted.',
  },
  {
    id: 'cfts-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A school network has these links: Lab–Hub, Office–Hub, Gym–Hub, Hub–Router and Router–Internet. Which added link lets the Gym keep reaching the Internet if the Hub fails?',
    options: ['A link from Gym to Router', 'A second link from Gym to Hub', 'A link from Lab to Router', 'A link from Hub to Office'],
    correctIndex: 0,
    explanation: 'A Gym–Router link gives the Gym a path that does not pass through the Hub. A second Gym–Hub link still depends on the Hub working.',
  },
  {
    id: 'cfts-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'Why do the designers of the Internet accept the extra cost of building redundant paths?',
    options: ['So each packet always takes the single shortest path', 'So routers no longer need backup power', 'So no encryption is needed on any link', 'So data can keep flowing when some parts fail'],
    correctIndex: 3,
    explanation: 'Parts of complex systems fail at unexpected times, often several at once. Redundant paths let data be rerouted, which is fault tolerance.',
  },
  {
    id: 'cfts-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples: Authentication and Encryption',
    question: 'Which login process is an example of multifactor authentication?',
    options: ['A password plus a code texted to the user\'s own phone', 'A password plus a second, different password', 'A password plus the answer to a security question', 'A long password made of four random words'],
    correctIndex: 0,
    explanation: 'Multifactor authentication needs evidence from at least two categories. The texted code is something the user has, while a second password or a security answer is just more of what the user knows.',
  },
  {
    id: 'cfts-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples: Authentication and Encryption',
    question: 'Two offices lock and unlock their shared files with the same secret key. Which statement is correct?',
    options: ['This is public key encryption, so only one office can decrypt', 'This is symmetric encryption, so anyone with that key can decrypt', 'This is symmetric encryption, so a certificate authority must issue the key', 'This is public key encryption, so the key may be posted openly'],
    correctIndex: 1,
    explanation: 'One shared key for both encryption and decryption is symmetric encryption. Its weakness is that anyone who obtains the key can read the files.',
  },
  {
    id: 'cfts-ent-4a', partNumber: 4, partTitle: 'Connections: Parallel and Distributed Computing',
    question: 'A grading program first loads data for 3 minutes, a step that cannot be split. It then grades four sections that take 6, 2, 5 and 4 minutes. With four processors, one section each, how long does it take?',
    options: ['20 minutes', '9 minutes', '6 minutes', '5 minutes'],
    correctIndex: 1,
    explanation: 'A parallel solution takes its sequential part plus its longest parallel task: 3 + 6 = 9 minutes. Run sequentially, it would take 3 + 6 + 2 + 5 + 4 = 20 minutes.',
  },
  {
    id: 'cfts-ent-4b', partNumber: 4, partTitle: 'Connections: Parallel and Distributed Computing',
    question: 'Which task most clearly calls for distributed computing?',
    options: ['Adding up the prices on a short grocery list', 'Checking one password against a stored one', 'Sorting 20 names into alphabetical order', 'Analyzing data too big for one machine to store'],
    correctIndex: 3,
    explanation: 'Distributed computing spreads work across many devices, which allows problems too large or too slow for a single computer. The other tasks are small enough for one machine.',
  },
  {
    id: 'cfts-ent-5a', partNumber: 5, partTitle: 'Speedup and the Limits of Parallelism',
    question: 'A program has a 20-second sequential portion and 80 seconds of work that splits evenly across processors. What is the speedup with 4 processors?',
    options: ['4', '5', '1.25', '2.5'],
    correctIndex: 3,
    explanation: 'Sequentially it takes 100 seconds. With 4 processors it takes 20 + 80 ÷ 4 = 40 seconds, so the speedup is 100 ÷ 40 = 2.5.',
  },
  {
    id: 'cfts-ent-5b', partNumber: 5, partTitle: 'Speedup and the Limits of Parallelism',
    question: 'The same program has a 20-second sequential portion and 80 seconds of evenly splittable work. What happens to its speedup as more and more processors are added?',
    options: ['It gets close to 5 but cannot reach it', 'It keeps growing with every processor added', 'It can never exceed 2.5', 'It reaches 100 with 100 processors'],
    correctIndex: 0,
    explanation: 'The run can never take less than the 20-second sequential portion, so the speedup stays below 100 ÷ 20 = 5. The sequential part limits the benefit of adding processors.',
  },
  {
    id: 'cfts-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'An email that looks like it is from your bank says your account is locked and links to a page that asks for your password. What is the best first response?',
    options: ['Click the link but type a fake password first', 'Forward the email to friends to warn them', 'Reply to the email asking if it is real', 'Contact the bank through a number you trust'],
    correctIndex: 3,
    explanation: 'This is a typical phishing attempt. Checking with the bank through a phone number or website you already trust avoids the disguised link entirely.',
  },
  {
    id: 'cfts-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A store\'s sales records live on one server, and the nightly backup is saved on that same server. Which change removes the single point of failure for the records?',
    options: ['Buy a faster processor for the server', 'Encrypt the backup on the same server', 'Back up to a separate device', 'Run the backup every hour instead'],
    correctIndex: 2,
    explanation: 'If the server fails, a backup stored on it is lost too. A copy on a different device survives, which is data redundancy.',
  },
  {
    id: 'cfts-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which statement about keeping systems running and secure is accurate?',
    options: ['A sender needs the receiver\'s private key to encrypt', 'Redundancy adds fault tolerance but costs extra resources', 'Two different passwords count as a multifactor login', 'Adding processors removes the sequential portion\'s time'],
    correctIndex: 1,
    explanation: 'Extra components let a system survive failures, but they cost more devices and money. The other statements describe common misconceptions.',
  },
  {
    id: 'cfts-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'Malware on a laptop quietly records every key the user presses and sends the record to an attacker. What is the attacker most likely trying to get?',
    options: ['The paths the laptop\'s packets take', 'The speed of the user\'s connection', 'Passwords and other typed secrets', 'A list of the laptop\'s installed apps'],
    correctIndex: 2,
    explanation: 'Keylogging captures what the user types, including passwords and account numbers, which the attacker can use to gain unauthorized access.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Redundancy, Encryption, and Network Security' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples: Authentication and Encryption' },
    { partNumber: 4, partTitle: 'Connections: Parallel and Distributed Computing' },
    { partNumber: 5, partTitle: 'Speedup and the Limits of Parallelism' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
