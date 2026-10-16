/**
 * Entrance Quiz — Research Methods & Approaches (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Origins of Psychology
  {
    id: 'hap-ent-1a',
    question: 'A teacher tells half of her class that a study found time apart weakens couples ("out of sight, out of mind") and the other half that it strengthens them ("absence makes the heart grow fonder"). Most students in both halves say the result they heard is what they would have guessed. What does this demonstration show most directly?',
    options: ['Hindsight bias makes outcomes feel obvious', 'Confirmation bias leads people to seek new data', 'Overconfidence makes people doubt what they heard', 'Replication shows both findings are equally valid'],
    correctIndex: 0,
    explanation: 'Students rated opposite results as equally predictable once they knew them, which is hindsight bias. Because every outcome feels obvious after the fact, intuition cannot decide which finding is true.',
    partNumber: 1,
    partTitle: 'Origins of Psychology',
  },
  {
    id: 'hap-ent-1b',
    question: 'A man claims that "positive energy" makes houseplants grow faster. Whenever plants given positive energy fail to outgrow the others, he says doubters in the room blocked the energy. What is the main scientific problem with his claim?',
    options: ['It relies on a sample too small to analyze', 'No possible result could count against it', 'Its operational definition is overly precise', 'It skipped replication before peer review'],
    correctIndex: 1,
    explanation: 'He explains away every failed test, so no result could ever show the claim wrong. A scientific hypothesis must be falsifiable.',
    partNumber: 1,
    partTitle: 'Origins of Psychology',
  },

  // Part 2: Major Perspectives
  {
    id: 'hap-ent-2a',
    question: 'Two psychologists explain why a teenager overeats. One points to the praise and dessert his parents gave him for cleaning his plate as a child. The other points to his belief that he "has no willpower," which leads him to give up on a diet after a single cookie. Which perspectives are they using, in order?',
    options: ['Cognitive, then behavioral', 'Psychodynamic, then humanistic', 'Behavioral, then cognitive', 'Sociocultural, then biological'],
    correctIndex: 2,
    explanation: 'Praise and dessert are consequences that reinforced eating, a behavioral explanation. A self-defeating belief that shapes his choices is a cognitive explanation.',
    partNumber: 2,
    partTitle: 'Major Perspectives',
  },
  {
    id: 'hap-ent-2b',
    question: 'A writer argues that because wariness of strangers may have helped ancestors survive, distrust of outsiders today is natural and therefore justified. Which response applies the evolutionary perspective correctly?',
    options: ['Evolutionary explanations apply only to animals', 'An adaptive origin does not make a behavior right', 'Traits shaped by natural selection cannot change', 'Wariness of strangers is learned only by reward'],
    correctIndex: 1,
    explanation: 'The evolutionary perspective explains why a tendency may once have aided survival; it does not mean the behavior is good or justified today. Using it to justify discrimination is a misapplication of the idea.',
    partNumber: 2,
    partTitle: 'Major Perspectives',
  },

  // Part 3: Research Methods
  {
    id: 'hap-ent-3a',
    question: 'A teacher tests whether background music helps students learn vocabulary. Her first-period class studies with music and her last-period class studies in silence. The first-period class scores higher on the test. What is the most serious flaw in this design?',
    options: ['Music has no possible operational definition', 'Test scores are a qualitative type of measure', 'Each class is too large to show any music effect', 'Time of day differs between the two conditions'],
    correctIndex: 3,
    explanation: 'The classes differ in time of day as well as music, so time of day is a confounding variable; either could explain the higher scores. Students were also not randomly assigned to conditions.',
    partNumber: 3,
    partTitle: 'Research Methods',
  },
  {
    id: 'hap-ent-3b',
    question: 'For a month, a psychologist sits quietly in a school cafeteria and records, without interacting, how often students sit with peers from other grades. Which research method is this, and what is a key limitation?',
    options: ['Case study; it covers too many students for detail', 'Experiment; the cafeteria setting is too artificial', 'Meta-analysis; it relies on earlier studies\' quality', 'Naturalistic observation; it cannot show causes'],
    correctIndex: 3,
    explanation: 'Watching behavior in its real setting without interfering is naturalistic observation. It describes what happens but cannot establish causes, because nothing is manipulated or controlled.',
    partNumber: 3,
    partTitle: 'Research Methods',
  },

  // Part 4: Ethics in Research
  {
    id: 'hap-ent-4a',
    question: 'On a very easy 10-point quiz, most students score 9 or 10, but a few score 2 or 3. Which description of the score distribution is correct?',
    options: ['Negatively skewed, mean below median', 'Positively skewed, mean above median', 'Normal, with the mean equal to the median', 'Bimodal, with two separate peaks of scores'],
    correctIndex: 0,
    explanation: 'Most scores are high with a tail toward low scores, so the distribution is negatively skewed. The few low scores pull the mean down below the median.',
    partNumber: 4,
    partTitle: 'Ethics in Research',
  },
  {
    id: 'hap-ent-4b',
    question: 'Scores on a reading test are normally distributed with a mean of 50 and a standard deviation of 10. A student scores 70. About what percentage of test takers scored at or below her?',
    options: ['About 68%', 'About 84%', 'About 95%', 'About 98%'],
    correctIndex: 3,
    explanation: 'A score of 70 is 2 standard deviations above the mean. About 95% of scores lie within 2 SD, so about 2.5% lie above it, putting her near the 98th percentile.',
    partNumber: 4,
    partTitle: 'Ethics in Research',
  },

  // Part 5: Statistics in Psychology
  {
    id: 'hap-ent-5a',
    question: 'An online survey about cheating in school never records names, email addresses or any other information that could link a response to the person who gave it. Which ethical protection does this provide?',
    options: ['Debriefing', 'Anonymity', 'Confidentiality', 'Informed assent'],
    correctIndex: 1,
    explanation: 'Because no identifying information is ever collected, no answer can be traced to anyone, which is anonymity. Confidentiality means identities are known to researchers but kept private.',
    partNumber: 5,
    partTitle: 'Statistics in Psychology',
  },
  {
    id: 'hap-ent-5b',
    question: 'To study persistence, researchers give 12-year-olds a puzzle that is secretly impossible to solve. Parents sign consent forms and each child agrees to take part. When the session ends, the children go home without learning the truth about the puzzle. Which change is most needed?',
    options: ['Collect assent from each child before the session', 'Drop the puzzle, since any deception is forbidden', 'Explain the hidden purpose once the session ends', 'Replace the consent forms with anonymous surveys'],
    correctIndex: 2,
    explanation: 'Deception can be justified, but participants must be debriefed afterward so they learn the true purpose and that the puzzle was impossible. Consent and assent were already obtained.',
    partNumber: 5,
    partTitle: 'Statistics in Psychology',
  },

  // Part 6: Problem-Solving Workshop
  {
    id: 'hap-ent-6a',
    question: 'In a study, 60 seventh graders were randomly assigned to learn a list of 20 new words either by taking practice quizzes or by copying each word five times. One week afterward, each student wrote as many of the words as possible from dictation. Learning was scored as the number of words spelled correctly. What is the operational definition of the dependent variable?',
    options: ['Practice quizzes versus copying each word', 'How well each student understood spelling', 'Correct spellings out of 20 on the delayed test', 'Random assignment of the seventh graders'],
    correctIndex: 2,
    explanation: 'The dependent variable, learning, was measured as how many of the 20 words were spelled correctly a week later. The study method is the independent variable, and "understanding spelling" is a dictionary definition, not a measure.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },
  {
    id: 'hap-ent-6b',
    question: 'Eighty adult patients at one clinic were randomly assigned to use a mindfulness app or listen to a nature podcast daily for a month. Anxiety ratings fell more in the app group; the difference was statistically significant, with an effect size of d = 0.6. Which statement correctly describes this result?',
    options: ['A gap unlikely to be due to chance, of medium size', 'A large gap, because the result was significant', 'Proof that the app reduces anxiety for everyone', 'A gap that is probably due to chance alone'],
    correctIndex: 0,
    explanation: 'Statistical significance means the difference is unlikely to be due to chance, and an effect size near 0.6 is usually read as medium. Significance alone does not make an effect large, and one clinic sample cannot prove the effect for everyone.',
    partNumber: 6,
    partTitle: 'Problem-Solving Workshop',
  },

  // Part 7: AP Review
  {
    id: 'hap-ent-7a',
    question: 'A student building an argument about sleep has three sources. Source 1: adults randomly assigned to sleep 8 hours recalled more words than those assigned 5 hours (d = 0.7). Source 2: a survey of 2,000 teens found r = +.30 between nightly sleep and GPA. Source 3: a case study of one student whose grades rose after she began sleeping more. Which claim do the sources best support?',
    options: ['Sleep has been proven to raise every student\'s grades', 'Sleep likely improves memory and may relate to grades', 'Sleep has no meaningful link to how students do', 'The case study gives the strongest evidence here'],
    correctIndex: 1,
    explanation: 'Only the experiment supports a causal claim, and it concerns memory. The survey shows a moderate positive link with grades but cannot establish cause, and a single case cannot be generalized.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
  {
    id: 'hap-ent-7b',
    question: 'A researcher predicts that teens\' speeding reflects the norms of their friend group. She asks 500 teens how many of their friends drive fast and how often they themselves speed, and finds r = +.45. Which pair correctly names the perspective behind the prediction and a limitation of the study?',
    options: ['Sociocultural; it cannot establish a cause', 'Biological; an r of +.45 is too weak to report', 'Psychodynamic; random assignment biased the groups', 'Evolutionary; a positive r means there is no link'],
    correctIndex: 0,
    explanation: 'Explaining behavior through peer norms is the sociocultural perspective. The study is correlational, so teens who like speed may simply choose fast-driving friends, or a third variable may explain both.',
    partNumber: 7,
    partTitle: 'AP Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Origins of Psychology' },
    { partNumber: 2, partTitle: 'Major Perspectives' },
    { partNumber: 3, partTitle: 'Research Methods' },
    { partNumber: 4, partTitle: 'Ethics in Research' },
    { partNumber: 5, partTitle: 'Statistics in Psychology' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
