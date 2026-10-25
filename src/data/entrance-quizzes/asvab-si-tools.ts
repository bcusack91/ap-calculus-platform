/**
 * Entrance Quiz — Hand and Power Tools (ASVAB Shop Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'
import { SI_RULE_2_4, SI_LOCKING_PLIERS } from '@/data/asvab-figures/si'

const P1 = 'Shop Information on the ASVAB'
const P2 = 'Striking and Turning Tools'
const P3 = 'Cutting Tools: Saws, Chisels, Files and Planes'
const P4 = 'Gripping, Clamping, Drilling and Finishing Tools'
const P5 = 'Measuring, Layout and Shop Safety'
const P6 = 'Shop Information Test Strategy and Traps'
const P7 = 'Hand and Power Tools Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'si-tools-ent-1a',
    question: 'On the computer-based CAT-ASVAB, how many scored Shop Information questions are there, and how much time do you get?',
    options: ['15 questions in 22 minutes', '10 questions in 6 minutes', '25 questions in 11 minutes', '15 questions in 10 minutes'],
    correctIndex: 1,
    explanation: 'Shop Information is 10 scored questions in 6 minutes on the CAT-ASVAB, about 36 seconds each. 15 in 22 minutes is Mechanical Comprehension, and 25 in 11 minutes is the combined Auto & Shop section on the paper test.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'si-tools-ent-1b',
    question: 'Your Shop Information result is combined with Auto Information into which score that services use for mechanical jobs?',
    options: ['The VE (verbal) score', 'The AFQT enlistment score', 'The AS (Auto & Shop) score', 'The Army GT score'],
    correctIndex: 2,
    explanation: 'Auto and Shop combine into the AS score, which appears in mechanical line scores such as Air Force M, Marine Corps MM and Navy MEC. The AFQT uses only AR, MK, WK and PC, and the Army GT is AR + VE.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'si-tools-ent-2a',
    question: 'Which tool is designed to deliver heavy two-handed blows, such as breaking up an old concrete step?',
    options: ['Tack hammer', 'Ball-peen hammer', 'Dead-blow mallet', 'Sledgehammer'],
    correctIndex: 3,
    explanation: 'A sledgehammer has a heavy head and a long handle swung with both hands for demolition and driving stakes. The other hammers are far too light for breaking concrete.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'si-tools-ent-2b',
    question: 'A nut on a fuel line cannot be reached by a closed-ring wrench because the line runs through it. Which wrench end can slide onto the nut from the side?',
    options: ['Open-end', 'Box-end', 'Deep socket', 'Torque wrench'],
    correctIndex: 0,
    explanation: 'An open-end wrench has a U-shaped opening that slides onto the nut from the side, around the line. A box end, a socket and a torque wrench\'s socket all have to drop over the nut from its end.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'si-tools-ent-3a',
    question: 'A steel bolt is 2 inches too long and must be cut off. Which hand saw is designed for this?',
    options: ['Coping saw', 'Hacksaw', 'Rip saw', 'Keyhole saw'],
    correctIndex: 1,
    explanation: 'A hacksaw holds a fine-tooth blade made for metal. The coping, rip and keyhole saws are woodworking saws.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'si-tools-ent-3b',
    question: 'A crosscut saw is designed to cut wood in which direction?',
    options: ['In curves around a pattern', 'Along the grain, lengthwise', 'Across the grain of the board', 'Only at a 45-degree angle'],
    correctIndex: 2,
    explanation: 'A crosscut saw\'s knife-like teeth sever wood fibers across the grain, as when shortening a board. Cutting along the grain is a rip cut, curves call for a coping saw, and angles are cut with a back saw and miter box.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'si-tools-ent-4a',
    question: 'Which tool is bolted to a workbench to hold a piece of pipe firmly while you saw or file it?',
    options: ['Spring clamp', 'Needle-nose pliers', 'Nail set', 'Bench vise'],
    correctIndex: 3,
    explanation: 'A bench vise is mounted to the bench and its jaws hold work steady with both your hands free. A spring clamp gives only a light hold, needle-nose pliers grip small parts, and a nail set sinks nails.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'si-tools-ent-4b',
    question: 'Which drill bit is designed for drilling into concrete or brick?',
    options: ['Masonry bit', 'Spade bit', 'Forstner bit', 'Countersink'],
    correctIndex: 0,
    explanation: 'A masonry bit has a hard carbide tip that grinds through concrete and brick, often in a hammer drill. Spade and Forstner bits are for wood, and a countersink shapes a cone-shaped recess for a screw head.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'si-tools-ent-5a',
    question: 'What is the reading at arrow A on the rule in the figure?',
    figure: SI_RULE_2_4.svg,
    figureAlt: SI_RULE_2_4.alt,
    options: ['2 3/8 inches', '2 1/6 inches', '2 3/16 inches', '2 5/8 inches'],
    correctIndex: 0,
    explanation: 'Six sixteenths reduces to $\\frac{6}{16} = \\frac{3}{8}$, so the reading is $2\\frac{3}{8}$ inches. The space is sixteenths, not sixths, and $\\frac{5}{8}$ would be $10$ sixteenths.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'si-tools-ent-5b',
    question: 'You have just tightened a bit in a drill press with a chuck key. What must you do before switching the drill on?',
    options: ['Put on loose cotton gloves', 'Tap the bit with a hammer to seat it', 'Remove the chuck key from the chuck', 'Hold the workpiece with your free hand'],
    correctIndex: 2,
    explanation: 'A chuck key left in the chuck is flung out when the spindle starts. Gloves near a spinning bit can be caught, the bit should never be hammered, and work should be clamped rather than hand-held.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'si-tools-ent-6a',
    question: 'About how much time per question does the CAT-ASVAB allow on Shop Information?',
    options: ['About 15 seconds', 'About 36 seconds', 'About 1 1/2 minutes', 'About 3 minutes'],
    correctIndex: 1,
    explanation: '6 minutes for 10 questions is 360 seconds ÷ 10 = 36 seconds per question. About 1 1/2 minutes per question is the Mechanical Comprehension pace.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'si-tools-ent-6b',
    question: 'Which tool is the WORST choice for loosening a finished hex nut?',
    options: ['Six-point socket', 'Box-end wrench', 'Combination wrench', 'Pipe wrench'],
    correctIndex: 3,
    explanation: 'A pipe wrench\'s toothed jaws bite into and mar a finished nut; it is made for round pipe. The socket, box end and combination wrench all fit the nut\'s flats.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'si-tools-ent-7a',
    question: 'Which power tool cuts a groove (a dado) across the inside face of a bookcase side so a shelf can sit in it?',
    options: ['Plunge router', 'Belt sander', 'Bench grinder', 'Reciprocating saw'],
    correctIndex: 0,
    explanation: 'A router\'s spinning bit cuts grooves and shapes edges. A belt sander smooths, a bench grinder sharpens metal, and a reciprocating saw makes rough demolition cuts.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'si-tools-ent-7b',
    question: 'Which pliers are shown in the figure?',
    figure: SI_LOCKING_PLIERS.svg,
    figureAlt: SI_LOCKING_PLIERS.alt,
    options: ['Slip-joint pliers', 'Locking pliers', 'Diagonal cutters', 'Lineman\'s pliers'],
    correctIndex: 1,
    explanation: 'Locking pliers set their jaw size with the screw, lock shut, and open with the release lever. The other pliers grip only while you squeeze them.',
    partNumber: 7,
    partTitle: P7,
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: P1 },
    { partNumber: 2, partTitle: P2 },
    { partNumber: 3, partTitle: P3 },
    { partNumber: 4, partTitle: P4 },
    { partNumber: 5, partTitle: P5 },
    { partNumber: 6, partTitle: P6 },
    { partNumber: 7, partTitle: P7 },
  ]
}
