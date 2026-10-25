/**
 * Entrance Quiz — Electrical, Fuel, Cooling and Exhaust Systems (ASVAB Auto Information) — 14 questions (2 per lesson part, 7 parts).
 * Each item is tagged with the lesson part it certifies; both right = part skipped.
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Vehicle Systems on the ASVAB'
const P2 = 'Starting and Charging Systems'
const P3 = 'Fuel and Air Systems'
const P4 = 'The Cooling System'
const P5 = 'Exhaust and Emissions'
const P6 = 'Systems Test Strategy and Common Traps'
const P7 = 'Mixed Mastery Set'

const questions: EntranceQuizQuestion[] = [
  // Part 1
  {
    id: 'ai-systems-ent-1a',
    question: 'A red thermometer-shaped warning light comes on while driving. What does it mean?',
    options: ['The engine is overheating', 'The battery is not charging', 'The oil pressure is low', 'The fuel level is low'],
    correctIndex: 0,
    explanation: 'The thermometer light warns of high engine temperature. Pull over and shut the engine off to let it cool.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'ai-systems-ent-1b',
    question: 'The radiator fan belongs to which system?',
    options: ['The exhaust system', 'The charging system', 'The cooling system', 'The fuel system'],
    correctIndex: 2,
    explanation: 'The radiator fan pulls air through the radiator so the coolant can shed heat: it is part of the cooling system.',
    partNumber: 1,
    partTitle: P1,
  },
  // Part 2
  {
    id: 'ai-systems-ent-2a',
    question: 'Which part recharges the battery while the engine is running?',
    options: ['The starter motor', 'The alternator', 'The ignition coil', 'The solenoid'],
    correctIndex: 1,
    explanation: 'The belt-driven alternator produces electricity to recharge the battery and run the electrical loads. The starter only cranks the engine.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'ai-systems-ent-2b',
    question: 'About what voltage does a fully charged standard car battery have?',
    options: ['6.3 V', '24 V', '1.5 V', '12.6 V'],
    correctIndex: 3,
    explanation: 'Six cells of about 2.1 V each give about 12.6 V, which is why it is called a 12-volt battery.',
    partNumber: 2,
    partTitle: P2,
  },
  // Part 3
  {
    id: 'ai-systems-ent-3a',
    question: 'The throttle plate in the throttle body controls the flow of:',
    options: ['coolant into the radiator', 'air into the engine', 'oil to the bearings', 'exhaust to the muffler'],
    correctIndex: 1,
    explanation: 'Pressing the accelerator opens the throttle plate, letting more air into the intake. The computer then adds fuel to match.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'ai-systems-ent-3b',
    question: 'How does a carburetor draw fuel into the incoming air?',
    options: ['With an electric fuel injector', 'With pressure from the exhaust', 'With low pressure in a narrow venturi', 'With a small pump driven by the alternator'],
    correctIndex: 2,
    explanation: 'Air speeding through the narrow venturi drops in pressure, and that low pressure pulls fuel out of the float bowl into the air stream.',
    partNumber: 3,
    partTitle: P3,
  },
  // Part 4
  {
    id: 'ai-systems-ent-4a',
    question: 'Why should a radiator cap never be removed from a hot engine?',
    options: ['The coolant could flash into scalding steam', 'The thermostat would stick closed', 'The radiator fan would stop working', 'The coolant would freeze solid inside the radiator'],
    correctIndex: 0,
    explanation: 'Hot coolant is under pressure and above its normal boiling point. Releasing the cap lets it boil instantly and spray out as scalding steam.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'ai-systems-ent-4b',
    question: 'Which part pushes coolant through the engine and radiator?',
    options: ['The thermostat', 'The radiator cap', 'The heater core', 'The water pump'],
    correctIndex: 3,
    explanation: 'The water pump circulates the coolant. The thermostat only controls when it can reach the radiator.',
    partNumber: 4,
    partTitle: P4,
  },
  // Part 5
  {
    id: 'ai-systems-ent-5a',
    question: 'Which exhaust gas is colorless, odorless and deadly in an enclosed space?',
    options: ['Carbon dioxide gas', 'Carbon monoxide', 'Water vapor', 'Nitrogen'],
    correctIndex: 1,
    explanation: 'Carbon monoxide gives no warning by sight or smell and can kill. Never run an engine in a closed garage.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'ai-systems-ent-5b',
    question: 'What does the charcoal canister in the EVAP system store?',
    options: ['Oil drained from the crankcase', 'Soot filtered from the exhaust', 'Coolant pushed out of the radiator', 'Gasoline vapors from the fuel tank'],
    correctIndex: 3,
    explanation: 'The charcoal canister soaks up fuel vapors from the tank; the engine later draws them in and burns them.',
    partNumber: 5,
    partTitle: P5,
  },
  // Part 6
  {
    id: 'ai-systems-ent-6a',
    question: 'What happens to an engine whose thermostat is stuck closed?',
    options: ['It overheats', 'It never warms up', 'Its battery dies', 'Its exhaust gets quieter'],
    correctIndex: 0,
    explanation: 'A closed thermostat keeps hot coolant from reaching the radiator, so the engine overheats. Stuck open is the one that never warms up.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'ai-systems-ent-6b',
    question: 'An alternator produces which kind of current, and what turns it into the kind the car uses?',
    options: ['DC, turned into AC by the regulator', 'AC, turned into DC by diodes', 'DC, turned into AC by the battery', 'AC, used directly by the car'],
    correctIndex: 1,
    explanation: 'Alternators make alternating current; built-in diodes (a rectifier) convert it to the direct current the car\'s 12-V system uses.',
    partNumber: 6,
    partTitle: P6,
  },
  // Part 7
  {
    id: 'ai-systems-ent-7a',
    question: 'An engine gives off black smoke, smells of fuel and gets poor mileage. Its air-fuel mixture is most likely:',
    options: ['lean', 'ideal', 'rich', 'frozen'],
    correctIndex: 2,
    explanation: 'Black smoke, fuel smell and poor mileage mean extra fuel: a rich mixture.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'ai-systems-ent-7b',
    question: 'Which part feeds a small amount of exhaust back into the intake to reduce nitrogen oxides?',
    options: ['The PCV valve', 'The muffler', 'The oxygen sensor', 'The EGR valve'],
    correctIndex: 3,
    explanation: 'Exhaust gas recirculation cools combustion, which cuts NOx. The PCV valve handles crankcase gases instead.',
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
