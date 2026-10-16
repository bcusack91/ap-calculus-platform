/**
 * Entrance Quiz — The Internet & Protocols (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cip-ent-1a', partNumber: 1, partTitle: 'TCP/IP, HTTP, and How the Internet Works',
    question: 'Which pairing of a protocol with its job is correct?',
    options: ['IP: addresses and routes packets between networks', 'UDP: resends lost packets and restores their order', 'TCP: gives each device its address on the Internet', 'HTTP: routes packets from router to router'],
    correctIndex: 0,
    explanation: 'IP gives devices addresses and routes packets across networks. TCP is the one that resends lost packets and restores order, and HTTP is the Web\'s protocol for requesting pages.',
  },
  {
    id: 'cip-ent-1b', partNumber: 1, partTitle: 'TCP/IP, HTTP, and How the Internet Works',
    question: 'IPv4 addresses are 32 bits long and IPv6 addresses are 128 bits long. Moving from IPv4 to IPv6 multiplies the number of possible addresses by',
    options: ['4', '96', '$2^{4}$', '$2^{96}$'],
    correctIndex: 3,
    explanation: 'Each extra bit doubles the number of addresses, and IPv6 has 96 more bits, so the count is multiplied by $2^{96}$.',
  },
  {
    id: 'cip-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A message is split into packets numbered 1 through 7. Only packets 3, 1, 7, 2 and 6 arrive, in that order. If the message is sent with TCP, what happens?',
    options: ['The message is shown in the order the packets arrived', 'Packets 4 and 5 are skipped and the rest are put in order', 'The receiver asks for 4 and 5 again, then orders all 7', 'The whole message is thrown away and resent from the start'],
    correctIndex: 2,
    explanation: 'TCP uses each packet\'s metadata to notice that 4 and 5 are missing, requests them again, and then reassembles all seven in order. Skipping lost data is what UDP allows.',
  },
  {
    id: 'cip-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'Why does each packet sent across the Internet carry metadata along with its chunk of data?',
    options: ['To route it and to rebuild the full data at the end', 'To make every packet follow one fixed path', 'To force packets to arrive in the order sent', 'To encrypt the data inside so it stays private'],
    correctIndex: 0,
    explanation: 'Metadata tells routers where the packet is going and tells the receiver how to put the pieces back together. Paths are chosen dynamically, and packets can still arrive out of order.',
  },
  {
    id: 'cip-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'Which activity uses the Internet but is not part of the World Wide Web?',
    options: ['A browser loading a page through HTTP', 'Clicking a link to reach another Web page', 'A video call sending voice packets by UDP', 'A server sending an HTML page to a browser'],
    correctIndex: 2,
    explanation: 'The Web is the system of linked pages delivered with HTTP. A video call sends its data over the Internet without being part of the Web.',
  },
  {
    id: 'cip-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A school\'s homework site runs on a single server, and the site goes down whenever that server fails. Which change makes the service fault-tolerant?',
    options: ['Moving the site to one faster server', 'Splitting every page into many smaller packets', 'Switching the site from HTTP to HTTPS', 'Adding a backup server that can take over'],
    correctIndex: 3,
    explanation: 'A single server is a single point of failure. A redundant server that can take over keeps the service running when one machine fails.',
  },
  {
    id: 'cip-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'A user visits a site whose address begins with https:// and shows a padlock. Which conclusion is justified?',
    options: ['Traffic to the site is encrypted', 'The site cannot be a phishing site', 'The user\'s device is free of malware', 'The site\'s server can never be hacked'],
    correctIndex: 0,
    explanation: 'HTTPS encrypts data in transit and shows the site presented a validated certificate. It does not prove the site is honest or that either computer is secure.',
  },
  {
    id: 'cip-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'What role does a certificate authority play in secure web browsing?',
    options: ['It assigns IP addresses to new devices', 'It routes packets around failed routers', 'It vouches for who owns site keys', 'It stores backup copies of web pages'],
    correctIndex: 2,
    explanation: 'Certificate authorities issue digital certificates that validate the ownership of the encryption keys a site uses, which lets browsers trust the encrypted connection.',
  },
  {
    id: 'cip-ent-5a', partNumber: 5, partTitle: 'Scalability and Growth',
    question: 'A network changes its addresses from 20 bits to 24 bits. By what factor does the number of possible addresses grow?',
    options: ['4', '24', '80', '16'],
    correctIndex: 3,
    explanation: 'Each added bit doubles the number of addresses, so 4 more bits multiply it by 2 × 2 × 2 × 2 = 16.',
  },
  {
    id: 'cip-ent-5b', partNumber: 5, partTitle: 'Scalability and Growth',
    question: 'Which design feature most directly let the Internet grow from a few thousand devices to billions without being redesigned?',
    options: ['One central router that tracks every device', 'Open protocols that anyone can implement', 'A fixed path chosen in advance for all data', 'A single company approving each connection'],
    correctIndex: 1,
    explanation: 'Because the protocols are open, anyone can build devices and networks that connect, and dynamic routing finds paths through whatever is attached. A central authority or fixed paths would block growth.',
  },
  {
    id: 'cip-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'Which use is the best fit for UDP rather than TCP?',
    options: ['A bank page showing account balances', 'A game sending position updates', 'A download of a software installer', 'An email with a contract attached'],
    correctIndex: 1,
    explanation: 'A game needs its newest positions fast, and a late, resent update is useless. The other uses need every byte to arrive correctly, which TCP guarantees.',
  },
  {
    id: 'cip-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A network has these connections: Home–R1, Home–R2, R1–R4, R2–R3, R3–R4 and R4–Server. Router R1 fails. Which path can data now take from Home to the server?',
    options: ['Home → R1 → R4 → Server', 'Home → R2 → R4 → Server', 'Home → R2 → R3 → R4 → Server', 'No path remains'],
    correctIndex: 2,
    explanation: 'Without R1, data must start through R2, which connects only to R3; R3 links to R4, which reaches the server. There is no direct R2–R4 connection.',
  },
  {
    id: 'cip-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Which statement about Internet protocols is accurate?',
    options: ['TCP and IP are two names for one protocol', 'HTTPS protects a user from every online threat', 'The Web and the Internet are the same thing', 'UDP trades guaranteed delivery for less delay'],
    correctIndex: 3,
    explanation: 'UDP skips resending and reordering on purpose, which keeps delay low. TCP and IP do different jobs, HTTPS protects only data in transit, and the Web is one service on the Internet.',
  },
  {
    id: 'cip-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'An online banking site sends account pages to its customers. Which combination fits best?',
    options: ['TCP with UDP, so data is both fast and complete', 'TCP with HTTPS, so data is complete and encrypted', 'UDP with HTTPS, so data is encrypted but may be lost', 'TCP with HTTP, so data is complete but readable'],
    correctIndex: 1,
    explanation: 'Account pages must arrive complete, which TCP guarantees, and must not be readable if intercepted, which HTTPS provides.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'TCP/IP, HTTP, and How the Internet Works' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Scalability and Growth' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
