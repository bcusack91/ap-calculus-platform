/**
 * Entrance Quiz — Drivetrain, Brakes, Steering and Suspension (ASVAB Auto Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'The Drivetrain and Chassis on the ASVAB'
const P2 = 'Clutches and Transmissions'
const P3 = 'Driveshafts, Differentials and Axles'
const P4 = 'Brakes'
const P5 = 'Steering, Suspension, Tires and Alignment'
const P6 = 'Drivetrain and Chassis Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'ai-drivetrain-chassis-ent-1a',
    question: 'Which drive layout uses a long driveshaft running from a front-mounted engine and transmission back to a differential between the rear wheels?',
    options: ['Front-wheel drive', 'Rear-wheel drive', 'A transaxle layout', 'A mid-engine layout'],
    correctIndex: 1,
    explanation: 'Rear-wheel drive sends power through a long driveshaft to the rear differential. Front-wheel drive uses a transaxle and short front axles instead.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ai-drivetrain-chassis-ent-1b',
    question: 'Which of these parts belongs to the drivetrain?',
    options: ['The shock absorbers', 'The brake calipers', 'The differential', 'The tie rods'],
    correctIndex: 2,
    explanation: 'The differential carries engine power to the wheels, so it is part of the drivetrain. Shocks, brakes and tie rods are chassis parts.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'ai-drivetrain-chassis-ent-2a',
    question: 'A truck is pulling a heavy trailer up a steep hill. Which gear choice makes sense, and why?',
    options: ['A low gear, because it multiplies torque', 'Overdrive, because it multiplies torque', 'A high gear, because it multiplies torque', 'Neutral, because it saves the clutch'],
    correctIndex: 0,
    explanation: 'Low gears have the largest reduction ratios, giving the most torque at the wheels. Overdrive and high gears trade torque for speed.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ai-drivetrain-chassis-ent-2b',
    question: 'In a manual clutch, which part is clamped against the flywheel by the pressure plate?',
    options: ['The release bearing', 'The torque converter', 'The ring gear', 'The clutch disc'],
    correctIndex: 3,
    explanation: 'The pressure plate\'s springs clamp the friction-faced clutch disc against the flywheel so the engine drives the transmission.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'ai-drivetrain-chassis-ent-3a',
    question: 'What is the main purpose of the differential?',
    options: ['To let the drive wheels turn at different speeds in a turn', 'To change gears automatically as speed rises', 'To connect and disconnect the engine from the transmission', 'To keep the front wheels pointed straight ahead'],
    correctIndex: 0,
    explanation: 'In a turn the outer wheel travels farther than the inner one; the differential lets them turn at different speeds while both are driven.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ai-drivetrain-chassis-ent-3b',
    question: 'A front-wheel-drive car has a torn rubber boot on one of its front axles. Which part is most at risk?',
    options: ['The universal joint', 'The constant-velocity (CV) joint', 'The transfer case output shaft seal', 'The brake rotor'],
    correctIndex: 1,
    explanation: 'The boot holds grease in and dirt out of the CV joint. Once it tears, the joint loses grease and wears out quickly.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'ai-drivetrain-chassis-ent-4a',
    question: 'In a hydraulic brake system, which part turns the force on the brake pedal into fluid pressure?',
    options: ['The caliper', 'The power brake booster', 'The master cylinder', 'The brake rotor'],
    correctIndex: 2,
    explanation: 'The master cylinder\'s pistons pressurize the brake fluid, which carries the pressure to the calipers and wheel cylinders. The booster only adds force on the way.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ai-drivetrain-chassis-ent-4b',
    question: 'In a drum brake, what is pressed outward against the inside of the drum?',
    options: ['The brake shoes', 'The brake pads', 'The rotor', 'The brake caliper'],
    correctIndex: 0,
    explanation: 'A wheel cylinder pushes curved brake shoes outward against the drum. Pads, rotors and calipers belong to disc brakes.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'ai-drivetrain-chassis-ent-5a',
    question: 'In the tire size P205/55R16, what does the 55 mean?',
    options: ['The tire is 55 millimeters wide', 'The tire fits a wheel 55 centimeters across', 'The tire is rated for 55 mph', 'The sidewall height is 55% of the width'],
    correctIndex: 3,
    explanation: 'The middle number is the aspect ratio: the sidewall height as a percentage of the tire\'s width (205 mm here).',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ai-drivetrain-chassis-ent-5b',
    question: 'What is the main job of a sway bar (stabilizer bar)?',
    options: ['To hold up the weight of the car', 'To reduce body lean in turns', 'To stop the car from bouncing', 'To steer the front wheels'],
    correctIndex: 1,
    explanation: 'The sway bar links the left and right suspension and resists body roll in corners. Springs hold the weight and shocks stop the bouncing.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'ai-drivetrain-chassis-ent-6a',
    question: 'A car tracks straight, but its steering wheel shimmies only at highway speed. What is the most likely fix?',
    options: ['Bleeding the brakes', 'Replacing the springs', 'Balancing the wheels', 'Adjusting the clutch'],
    correctIndex: 2,
    explanation: 'A vibration that appears at speed, with no pulling, points to an out-of-balance wheel. Pulling or uneven wear would point to alignment.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ai-drivetrain-chassis-ent-6b',
    question: 'In a manual-transmission car, when the clutch pedal is all the way up, the clutch is:',
    options: ['disengaged, so the engine is disconnected', 'engaged, so engine power reaches the transmission', 'slipping, so the car is coasting', 'locked in reverse'],
    correctIndex: 1,
    explanation: 'Pedal up lets the pressure plate clamp the disc: the clutch is engaged and power flows. Pressing the pedal disengages it.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'ai-drivetrain-chassis-ent-7a',
    question: 'What do anti-lock brakes (ABS) prevent during hard braking?',
    options: ['Brake fluid from boiling', 'Brake pads from wearing', 'The engine from stalling', 'The wheels from locking up'],
    correctIndex: 3,
    explanation: 'ABS pulses the brake pressure to keep the wheels from locking and skidding, so the driver can still steer.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ai-drivetrain-chassis-ent-7b',
    question: 'A 20-tooth gear drives a 60-tooth gear. The 60-tooth gear turns at 500 RPM. How fast does the 20-tooth gear turn?',
    options: ['1,500 RPM', '167 RPM', '500 RPM', '1,000 RPM'],
    correctIndex: 0,
    explanation: 'The small gear has one third as many teeth, so it must turn 3 times as fast: 3 × 500 = 1,500 RPM.',
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
