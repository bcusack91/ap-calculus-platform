/**
 * Entrance Quiz — Prenatal and Childhood Development (AP Psychology)
 * 14 questions · 7 parts (2 per part). Rebuilt Oct 2026 from the Phase 1 lesson.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Before Birth: Teratogens and Other Prenatal Influences
  {
    id: 'pcd-ent-1a',
    question: 'Researchers find that a medication causes malformed ears when taken during weeks 5 to 7 of pregnancy, but taking the same dose in later months produces no ear malformations. Which principle of prenatal risk does this pattern illustrate?',
    options: ['Individual susceptibility', 'Timing of the exposure window', 'Combined risks', 'Dose and duration'],
    correctIndex: 1,
    explanation: 'The same dose harms only during a specific early window, when the ears are forming fastest. That is the timing principle, not a difference in dose, susceptibility or combined exposures.',
    partNumber: 1,
    partTitle: 'Before Birth: Teratogens and Other Prenatal Influences',
  },
  {
    id: 'pcd-ent-1b',
    question: 'A team wants to know whether a common pain reliever taken during pregnancy raises the risk of attention problems in children. Which plan is ethical, and what may the team conclude from it?',
    options: ['Randomly assign women to take it, then report an association', 'Compare existing groups of mothers, then conclude causation', 'Survey mothers about past use, then report an association', 'Assign women at random to take it, then conclude causation'],
    correctIndex: 2,
    explanation: 'Assigning pregnant women to a possibly harmful drug would be unethical, so the team must compare naturally occurring groups. Because the drug was measured rather than manipulated, the study can show an association but not causation.',
    partNumber: 1,
    partTitle: 'Before Birth: Teratogens and Other Prenatal Influences',
  },

  // Part 2: Infancy and Childhood: Reflexes, Depth Perception, and Motor Skills
  {
    id: 'pcd-ent-2a',
    question: 'In a hypothetical study, one group of infants gets daily supported-stepping practice from 2 months of age and another gets none. The practiced infants walk about a month earlier on average, but no infant in either group walks before about 9 months. Which conclusion fits best?',
    options: ['Practice is the main factor that sets when infants walk', 'Practice lets infants skip earlier milestones like crawling', 'Walking is inborn and no experience affects its timing', 'Maturation sets the pace, and practice shifts it slightly'],
    correctIndex: 3,
    explanation: 'Practice moved walking only a little earlier, and no amount of practice produced walking before the nervous system was ready. Maturation sets the pace, while experience matters at the margins.',
    partNumber: 2,
    partTitle: 'Infancy and Childhood: Reflexes, Depth Perception, and Motor Skills',
  },
  {
    id: 'pcd-ent-2b',
    question: 'On a visual cliff, infants with six weeks of crawling experience avoid the deep side more often than same-age infants who began crawling only a week ago. Which conclusion is best supported?',
    options: ['Depth perception is entirely inborn and unchanged by experience', 'Depth perception is entirely learned through practice at crawling', 'Crawling practice weakens the ability to perceive depth over time', 'Experience adds wariness to an early ability to see depth'],
    correctIndex: 3,
    explanation: 'Both groups are the same age, yet more crawling experience goes with more wariness of the drop-off. That fits a nature-and-nurture reading: seeing depth appears early, and experience adds the fear of falling.',
    partNumber: 2,
    partTitle: 'Infancy and Childhood: Reflexes, Depth Perception, and Motor Skills',
  },

  // Part 3: Critical Periods, Imprinting, and How Development Is Studied
  {
    id: 'pcd-ent-3a',
    question: 'In 2025 a researcher tests 20-year-olds and 75-year-olds on the same day and finds the younger group texts far faster. She concludes that texting skill declines with age. Which criticism of her conclusion is strongest?',
    options: ['The same people were tested twice, a practice effect', 'Many participants dropped out, an attrition problem', 'The samples grew up with different devices, a cohort effect', 'Age was manipulated without random assignment, a design flaw'],
    correctIndex: 2,
    explanation: 'This is a cross-sectional design, so the age groups also differ in when they grew up. The gap may reflect generational experience with phones rather than aging, which is a cohort effect.',
    partNumber: 3,
    partTitle: 'Critical Periods, Imprinting, and How Development Is Studied',
  },
  {
    id: 'pcd-ent-3b',
    question: 'In a hypothetical study, young songbirds that hear their species\' song during their first 40 days later sing it normally. Birds that first hear it after day 60 never sing it normally, no matter how much exposure they get. What does this pattern show?',
    options: ['A critical period, because the experience is required within a fixed window', 'A sensitive period, because later exposure still allows partial learning', 'Imprinting, because the bird attaches to the first moving object it sees', 'Habituation, because repeated exposure to the song weakens the response'],
    correctIndex: 0,
    explanation: 'Missing the window leaves a lasting deficit that later exposure cannot repair, the defining feature of a critical period. In a sensitive period, such as human language learning, later learning is harder but still possible.',
    partNumber: 3,
    partTitle: 'Critical Periods, Imprinting, and How Development Is Studied',
  },

  // Part 4: Piaget's Theory of Cognitive Development
  {
    id: 'pcd-ent-4a',
    question: 'A 5-year-old agrees that two rows of seven buttons are equal. After the tester spreads one row out, he says it has more, and he insists the rows would still differ if the buttons were pushed back together. Which description fits his thinking?',
    options: ['Sensorimotor thinking that lacks object permanence', 'Concrete operational thinking that needs real objects', 'Preoperational thinking without conservation or reversibility', 'Formal operational thinking that tests one variable at a time'],
    correctIndex: 2,
    explanation: 'He judges number by the row\'s length and cannot mentally undo the spreading, so he lacks conservation and reversibility. Those limits mark the preoperational stage.',
    partNumber: 4,
    partTitle: 'Piaget\'s Theory of Cognitive Development',
  },
  {
    id: 'pcd-ent-4b',
    question: 'A 4-year-old chooses a toy dinosaur as a birthday present for her grandmother because she herself loves dinosaurs and is sure her grandmother will too. Which feature of preoperational thought does this show?',
    options: ['Animism, a belief that objects have thoughts and feelings', 'Egocentrism, trouble taking another person\'s view', 'Accommodation, a revision of a schema to fit a new case', 'Object permanence, a grasp that hidden objects still exist'],
    correctIndex: 1,
    explanation: 'She assumes her grandmother wants what she wants, which is egocentrism: a cognitive limit in taking another perspective, not selfishness.',
    partNumber: 4,
    partTitle: 'Piaget\'s Theory of Cognitive Development',
  },

  // Part 5: Learning in Context: Vygotsky, Theory of Mind, Play, and Ecological Systems
  {
    id: 'pcd-ent-5a',
    question: 'A swim instructor first holds a child level in the water, then supports her with one hand, and finally just stays nearby as the child swims a few strokes alone. Which concept does the instructor\'s approach best illustrate?',
    options: ['Scaffolding', 'Assimilation', 'Imprinting', 'Maturation'],
    correctIndex: 0,
    explanation: 'The instructor gives temporary support and fades it as the child gains skill, which is scaffolding within the zone of proximal development.',
    partNumber: 5,
    partTitle: 'Learning in Context: Vygotsky, Theory of Mind, Play, and Ecological Systems',
  },
  {
    id: 'pcd-ent-5b',
    question: 'A father\'s company switches to a four-day work week. He now picks his daughter up from school on Fridays and helps with her reading, and her reading improves. In ecological systems theory, the company is part of her',
    options: ['exosystem, a place she never goes that affects her', 'mesosystem, a link between two of her settings', 'microsystem, a group in direct contact with her', 'macrosystem, the broad cultural beliefs and values around her'],
    correctIndex: 0,
    explanation: 'The daughter never enters her father\'s workplace, yet its decisions reach her through him. A setting the child is not in that still affects her belongs to the exosystem.',
    partNumber: 5,
    partTitle: 'Learning in Context: Vygotsky, Theory of Mind, Play, and Ecological Systems',
  },

  // Part 6: Attachment, Temperament, Parenting, and Early Social-Emotional Growth
  {
    id: 'pcd-ent-6a',
    question: 'In the Strange Situation, a toddler clings to her father and barely explores. When he returns after leaving, she runs to him, then pushes him away and keeps crying for several minutes. Which attachment style does this suggest?',
    options: ['Insecure-avoidant', 'Insecure-anxious', 'Secure', 'Disorganized'],
    correctIndex: 1,
    explanation: 'Seeking contact at the reunion while resisting it and staying hard to soothe is the anxious (ambivalent) pattern. An avoidant child would ignore the parent, and a secure child would be comforted and return to play.',
    partNumber: 6,
    partTitle: 'Attachment, Temperament, Parenting, and Early Social-Emotional Growth',
  },
  {
    id: 'pcd-ent-6b',
    question: 'Researchers survey families in two countries. In Country A, strict, highly demanding parenting with little explanation goes with lower self-reliance in children. In Country B, where such strictness is widely seen as a sign of care, it shows no link to self-reliance. Which conclusion is best supported?',
    options: ['Culture can change how a parenting style relates to outcomes', 'Authoritarian parenting harms self-reliance everywhere', 'Parenting style has no link to how children turn out', 'Parents in Country B must really be authoritative'],
    correctIndex: 0,
    explanation: 'The same authoritarian style predicts different outcomes in the two cultures, so culture shapes how parenting relates to child outcomes. Because parenting was measured rather than assigned, the survey also cannot show that the style causes the outcome.',
    partNumber: 6,
    partTitle: 'Attachment, Temperament, Parenting, and Early Social-Emotional Growth',
  },

  // Part 7: AP Practice and Synthesis Review
  {
    id: 'pcd-ent-7a',
    question: 'Researchers recorded how many minutes per day 150 parents talked with their 2-year-olds, then measured each child\'s vocabulary at age 4. More talk went with larger vocabularies (r = +.42). Which claim do these results support?',
    options: ['Talking with toddlers causes larger vocabularies at age 4', 'Parent talk explains most of the variation in vocabulary', 'Vocabulary at age 4 is unrelated to earlier parent talk', 'Early parent talk predicts later vocabulary size'],
    correctIndex: 3,
    explanation: 'A positive correlation in a longitudinal, non-experimental study supports prediction but not causation. An r of +.42 is moderate, so talk accounts for well under half of the variation in vocabulary.',
    partNumber: 7,
    partTitle: 'AP Practice and Synthesis Review',
  },
  {
    id: 'pcd-ent-7b',
    question: 'For an evidence-based question, a student claims that some early experiences have effects that later experience cannot fully undo. Which pairing of evidence and concept best supports this claim?',
    options: ['Shy toddlers who later become outgoing, explained by stability', 'Late learners of sign who keep grammar errors, explained by sensitive periods', 'Infants who begin walking at different ages, explained by maturation', 'Ducklings that follow a farmer everywhere, explained by habituation'],
    correctIndex: 1,
    explanation: 'Late exposure to a first language leaves lasting grammar errors despite years of use, and the concept of a sensitive period explains why timing matters. Shy toddlers becoming outgoing shows change, which works against the claim.',
    partNumber: 7,
    partTitle: 'AP Practice and Synthesis Review',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Before Birth: Teratogens and Other Prenatal Influences' },
    { partNumber: 2, partTitle: 'Infancy and Childhood: Reflexes, Depth Perception, and Motor Skills' },
    { partNumber: 3, partTitle: 'Critical Periods, Imprinting, and How Development Is Studied' },
    { partNumber: 4, partTitle: 'Piaget\'s Theory of Cognitive Development' },
    { partNumber: 5, partTitle: 'Learning in Context: Vygotsky, Theory of Mind, Play, and Ecological Systems' },
    { partNumber: 6, partTitle: 'Attachment, Temperament, Parenting, and Early Social-Emotional Growth' },
    { partNumber: 7, partTitle: 'AP Practice and Synthesis Review' },
  ]
}
