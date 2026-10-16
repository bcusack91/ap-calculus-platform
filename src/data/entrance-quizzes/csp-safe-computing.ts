/**
 * Entrance Quiz — Safe Computing (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'csc-ent-1a', partNumber: 1, partTitle: 'Privacy, Authentication, and Online Safety',
    question: 'Dana was born in 2009 and has a dog named Biscuit. Which of these is the strongest password for her?',
    options: ['Biscuit2009Dana', 'DanaAndBiscuit2009forever', 'maple-orbit-gravel', 'qwerty123456789'],
    correctIndex: 2,
    explanation: 'A strong password is easy for Dana to remember but hard for others to guess. Names, birth years and keyboard patterns are easy to guess, however long the result.',
  },
  {
    id: 'csc-ent-1b', partNumber: 1, partTitle: 'Privacy, Authentication, and Online Safety',
    question: 'A student deletes an embarrassing post an hour after putting it online. Which statement is most accurate?',
    options: ['Deleting it erases every copy everywhere', 'Copies may still exist in screenshots or in backups', 'Only the student could ever have seen it', 'Deleted posts become illegal for anyone to share'],
    correctIndex: 1,
    explanation: 'A digital footprint is largely permanent: others may have saved, shared or cached the post before it was deleted.',
  },
  {
    id: 'csc-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'One website\'s password database is stolen. Which habit most limits the damage to the user\'s other accounts?',
    options: ['Using the same strong password everywhere', 'Writing passwords on a note by the computer', 'Using a unique password on every site', 'Turning off updates to avoid any changes'],
    correctIndex: 2,
    explanation: 'With unique passwords, the stolen one opens only that single account. A reused password, however strong, opens every account that shares it.',
  },
  {
    id: 'csc-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A text says: "Your package is on hold. Pay a small fee within 1 hour at this link or it will be returned." Which feature is the strongest sign of phishing?',
    options: ['It mentions a package delivery', 'It was sent during the daytime', 'It arrived as a short text message', 'It demands fast payment through a link'],
    correctIndex: 3,
    explanation: 'Urgency combined with a request for money through a link is a classic phishing pattern. Legitimate messages can also be short or mention deliveries.',
  },
  {
    id: 'csc-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A new home security camera comes set up with the login admin/admin. What should its owner do first?',
    options: ['Keep it, since the camera is on a home network', 'Change it to a strong, unique password', 'Change it to the owner\'s birth date', 'Leave it until the camera has been hacked'],
    correctIndex: 1,
    explanation: 'Default device passwords are widely known, so attackers scan for devices that still use them. Replacing it with a strong, unique password closes that hole.',
  },
  {
    id: 'csc-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'On a café\'s free Wi-Fi, a browser warns that the bank site\'s certificate is not valid. What is the best action?',
    options: ['Click past the warning to finish quickly', 'Turn off the browser\'s warnings for good', 'Stop and avoid entering anything on the site', 'Try logging in again with a different password'],
    correctIndex: 2,
    explanation: 'A bad certificate on public Wi-Fi can mean a rogue access point is pretending to be the bank. Entering a password there could hand it to an attacker.',
  },
  {
    id: 'csc-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions: Viruses, Malware, and Keyloggers',
    question: 'A program attaches itself to a legitimate game file, copies itself into other files, and runs without the user\'s permission. What is it?',
    options: ['A phishing email', 'A certificate authority', 'A rogue access point', 'A virus'],
    correctIndex: 3,
    explanation: 'A virus is a malicious program that can copy itself and gain unauthorized access, often by attaching to legitimate programs.',
  },
  {
    id: 'csc-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions: Viruses, Malware, and Keyloggers',
    question: 'A keylogger hidden in a free download records a user\'s bank password and sends it to an attacker. Which protection would most likely stop the attacker from logging in?',
    options: ['A longer password with more symbols', 'Clearing the browser history daily', 'Multifactor login on the account', 'Visiting the bank only through HTTPS'],
    correctIndex: 2,
    explanation: 'With multifactor authentication, the stolen password alone is not enough; the attacker would also need the user\'s second factor. A longer password is captured just as easily.',
  },
  {
    id: 'csc-ent-5a', partNumber: 5, partTitle: 'Encryption, Certificates, and Data Collection',
    question: 'Two friends encrypt their messages with one shared secret key. An eavesdropper learns that key. What can the eavesdropper do?',
    options: ['Decode everything sent with that key', 'Nothing without a matching private key', 'Read only the messages sent after today', 'Nothing until a certificate authority approves'],
    correctIndex: 0,
    explanation: 'In symmetric encryption, the same key encrypts and decrypts, so anyone who has it can decrypt all the messages.',
  },
  {
    id: 'csc-ent-5b', partNumber: 5, partTitle: 'Encryption, Certificates, and Data Collection',
    question: 'A person regularly posts public photos tagged at the gym every weekday at 6 p.m. How could this information be misused?',
    options: ['Someone could learn when their home is empty', 'The gym could raise the person\'s membership fee', 'The posts could slow down the person\'s phone', 'The posts could weaken the person\'s password'],
    correctIndex: 0,
    explanation: 'Posts that others can see may be combined with other information to deduce private details, such as when someone is away from home.',
  },
  {
    id: 'csc-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A student\'s account was taken over and used to send malicious links. The student has already changed to a new strong password. What is the best next step?',
    options: ['Delete the posts made in the last week', 'Change the password again next month', 'Log out of the account on this device', 'Turn on or reset multifactor authentication'],
    correctIndex: 3,
    explanation: 'Turning on multifactor authentication means a stolen password alone can no longer open the account. Reviewing app permissions, scanning for malware and warning contacts come next.',
  },
  {
    id: 'csc-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'Which message should be treated as phishing until it is verified another way?',
    options: ['A receipt for an order you just placed', 'A reminder from your own calendar app', 'A school newsletter that contains no links', 'An email from "Paypa1" asking you to confirm your login'],
    correctIndex: 3,
    explanation: 'A look-alike sender name combined with a request for login details matches the phishing warning signs. Verify by going to the real site yourself, not through the email.',
  },
  {
    id: 'csc-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'Someone claiming to be from your email provider asks you to read back the login code just texted to your phone. Why should you refuse?',
    options: ['Codes expire, so sharing one wastes it', 'The code would let them pass your second factor', 'Sharing a code changes your password', 'It would reveal your home address'],
    correctIndex: 1,
    explanation: 'The texted code is your second authentication factor. Combined with a stolen password, it gives the requester full access, and legitimate services never ask for it.',
  },
  {
    id: 'csc-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'Why can one person\'s unsafe computing habits harm other people too?',
    options: ['A hacked account can send malicious links to contacts', 'Passwords are shared automatically with friends', 'Updates on one device install on every device', 'Encryption keys are identical for all users'],
    correctIndex: 0,
    explanation: 'Messages from a compromised account look trustworthy to the owner\'s contacts, so attackers use them to spread malware and phishing links.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Privacy, Authentication, and Online Safety' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions: Viruses, Malware, and Keyloggers' },
    { partNumber: 5, partTitle: 'Encryption, Certificates, and Data Collection' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
