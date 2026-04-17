// AP US Government question bank for competitive mode

export interface ApUSGovQuestion {
  id: number
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
  difficulty: 'easy' | 'medium' | 'hard'
}

const allQuestions: ApUSGovQuestion[] = [
  {
    id: 1,
    question: 'The supremacy clause establishes that:',
    options: ['State laws take precedence', 'Federal law is the supreme law of the land', 'The president has supreme authority', 'The judiciary is supreme'],
    correctAnswer: 1,
    explanation: 'The supremacy clause (Article VI) makes federal law supreme over state laws.',
    difficulty: 'easy',
  },
  {
    id: 2,
    question: 'Judicial review was established by:',
    options: ['The Constitution (Article III)', 'Marbury v. Madison (1803)', 'The Bill of Rights', 'The 14th Amendment'],
    correctAnswer: 1,
    explanation: 'Marbury v. Madison established the power of judicial review — the courts\' ability to declare laws unconstitutional.',
    difficulty: 'easy',
  },
  {
    id: 3,
    question: 'The elastic clause (necessary and proper clause) grants Congress:',
    options: ['The power to tax', 'Implied powers beyond those explicitly listed', 'The power to declare war', 'Control over the judiciary'],
    correctAnswer: 1,
    explanation: 'The elastic clause gives Congress implied powers to carry out its enumerated powers.',
    difficulty: 'easy',
  },
  {
    id: 4,
    question: 'The Bill of Rights originally applied only to:',
    options: ['All levels of government', 'The federal government', 'State governments', 'Local governments'],
    correctAnswer: 1,
    explanation: 'The Bill of Rights originally limited only the federal government; it was later applied to states through incorporation via the 14th Amendment.',
    difficulty: 'easy',
  },
  {
    id: 5,
    question: 'A filibuster is used in the:',
    options: ['House of Representatives', 'Senate', 'Supreme Court', 'State legislatures'],
    correctAnswer: 1,
    explanation: 'A filibuster is a Senate tactic of extended debate used to delay or prevent a vote.',
    difficulty: 'easy',
  },
  {
    id: 6,
    question: 'Which amendment protects freedom of speech?',
    options: ['Second Amendment', 'First Amendment', 'Fourth Amendment', 'Fifth Amendment'],
    correctAnswer: 1,
    explanation: 'The First Amendment protects freedom of speech, religion, press, assembly, and petition.',
    difficulty: 'easy',
  },
  {
    id: 7,
    question: 'Federalism divides power between:',
    options: ['The three branches of government', 'National and state governments', 'The president and Congress', 'The courts and legislature'],
    correctAnswer: 1,
    explanation: 'Federalism is the division of power between national and state levels of government.',
    difficulty: 'easy',
  },
  {
    id: 8,
    question: 'The Electoral College determines the outcome of:',
    options: ['Congressional elections', 'Presidential elections', 'Gubernatorial elections', 'Supreme Court appointments'],
    correctAnswer: 1,
    explanation: 'The Electoral College is the system used to elect the president and vice president.',
    difficulty: 'easy',
  },
  {
    id: 9,
    question: 'Selective incorporation means:',
    options: ['All rights apply to states at once', 'Individual rights are applied to states case by case through the 14th Amendment', 'States can select which rights to follow', 'Congress selects which amendments apply'],
    correctAnswer: 1,
    explanation: 'Through selective incorporation, the Supreme Court has gradually applied individual Bill of Rights protections to state governments via the 14th Amendment\'s due process clause.',
    difficulty: 'medium',
  },
  {
    id: 10,
    question: 'The iron triangle consists of:',
    options: ['President, Congress, and Courts', 'Congressional committees, interest groups, and bureaucratic agencies', 'State, local, and federal governments', 'Media, polls, and elections'],
    correctAnswer: 1,
    explanation: 'The iron triangle describes the mutually beneficial relationship between congressional committees, interest groups, and bureaucratic agencies.',
    difficulty: 'medium',
  },
  {
    id: 11,
    question: 'In McCulloch v. Maryland (1819), the Court ruled that:',
    options: ['States can tax the federal government', 'The necessary and proper clause gives Congress implied powers and states cannot tax the federal government', 'The federal government has unlimited power', 'States are sovereign in all matters'],
    correctAnswer: 1,
    explanation: 'McCulloch v. Maryland established that Congress has implied powers and that states cannot interfere with federal institutions.',
    difficulty: 'medium',
  },
  {
    id: 12,
    question: 'The winner-take-all system in most states means:',
    options: ['Each candidate gets proportional electoral votes', 'The candidate with the most popular votes gets all electoral votes', 'Third parties always win some votes', 'The election is decided by Congress'],
    correctAnswer: 1,
    explanation: 'In the winner-take-all system, the candidate receiving the most popular votes in a state receives all of that state\'s electoral votes.',
    difficulty: 'medium',
  },
  {
    id: 13,
    question: 'Checks and balances are designed to:',
    options: ['Give one branch ultimate power', 'Prevent any one branch from becoming too powerful', 'Speed up the legislative process', 'Eliminate conflict between branches'],
    correctAnswer: 1,
    explanation: 'Checks and balances ensure no single branch of government becomes too powerful by giving each branch ways to limit the others.',
    difficulty: 'medium',
  },
  {
    id: 14,
    question: 'A congressional caucus is:',
    options: ['A formal committee', 'An informal group of members sharing common interests', 'A type of election', 'A legislative procedure'],
    correctAnswer: 1,
    explanation: 'A caucus is an informal group of legislators who share common interests or goals.',
    difficulty: 'medium',
  },
  {
    id: 15,
    question: 'The establishment clause and free exercise clause both deal with:',
    options: ['Freedom of press', 'Freedom of religion', 'Right to bear arms', 'Right to privacy'],
    correctAnswer: 1,
    explanation: 'Both clauses are in the First Amendment and address religion — the establishment clause prevents government from establishing a religion, and the free exercise clause protects religious practice.',
    difficulty: 'medium',
  },
  {
    id: 16,
    question: 'Strict constructionism interprets the Constitution:',
    options: ['Broadly to adapt to modern needs', 'Narrowly, limiting government to powers explicitly stated', 'As a living document', 'Based on international law'],
    correctAnswer: 1,
    explanation: 'Strict constructionists interpret the Constitution narrowly, limiting federal power to what is explicitly stated.',
    difficulty: 'medium',
  },
  {
    id: 17,
    question: 'Baker v. Carr (1962) established the principle of:',
    options: ['Separation of church and state', 'One person, one vote (equal representation in legislative districts)', 'Freedom of the press', 'Right to counsel'],
    correctAnswer: 1,
    explanation: 'Baker v. Carr held that legislative reapportionment is a justiciable issue, leading to the "one person, one vote" principle.',
    difficulty: 'hard',
  },
  {
    id: 18,
    question: 'Federalist No. 51 primarily argues for:',
    options: ['A strong presidency', 'Separation of powers and checks and balances to prevent tyranny', 'Direct democracy', 'Elimination of state governments'],
    correctAnswer: 1,
    explanation: 'Madison\'s Federalist No. 51 argues that separating powers among branches and levels of government prevents tyranny by creating internal checks.',
    difficulty: 'hard',
  },
  {
    id: 19,
    question: 'The antifederalists opposed the Constitution primarily because:',
    options: ['They wanted a monarchy', 'It lacked a bill of rights and gave too much power to the federal government', 'It was too democratic', 'It preserved slavery'],
    correctAnswer: 1,
    explanation: 'Antifederalists feared the new Constitution concentrated too much power in the federal government and lacked protections for individual rights.',
    difficulty: 'hard',
  },
  {
    id: 20,
    question: 'Citizens United v. FEC (2010) ruled that:',
    options: ['Corporations cannot donate to campaigns', 'Corporate and union spending on political ads is protected free speech under the First Amendment', 'Campaign finance must be limited', 'Only individuals can participate in elections'],
    correctAnswer: 1,
    explanation: 'Citizens United held that the First Amendment protects corporate and union political spending as free speech, leading to the rise of Super PACs.',
    difficulty: 'hard',
  },
]

export function getApUSGovQuestions(count: number = 10): ApUSGovQuestion[] {
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
