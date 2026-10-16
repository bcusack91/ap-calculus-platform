/**
 * Entrance Quiz — Heat & Specific Heat (AP Physics 2)
 *
 * 14 questions, 2 per lesson part (7 parts). Getting both items for a part
 * right marks that part as already mastered.
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const P1 = 'Heat vs Temperature'
const P2 = 'Specific Heat Capacity'
const P3 = 'Calorimetry'
const P4 = 'Heat Transfer Mechanisms'
const P5 = 'Conduction Problem Solving'
const P6 = 'Applications & Real-World'
const P7 = 'Synthesis & AP Review'

const questions: EntranceQuizQuestion[] = [
  // Part 1: Heat vs Temperature
  {
    id: 'hsh-ent-1a',
    question: 'Gas in a well-insulated cylinder is compressed quickly by a piston, and its temperature rises. Which description of the energy transfer is correct?',
    options: [
      'Energy entered the gas by heating from the moving piston',
      'Work was done on the gas, and nothing heated it',
      'Heat stored in the piston flowed into the gas as it moved',
      'Temperature flowed into the gas from the cylinder walls',
    ],
    correctIndex: 1,
    explanation: 'The insulation blocks heating, so the energy came from the work the piston did on the gas. A temperature rise does not by itself mean the system was heated, and neither heat nor temperature is something an object stores or that flows.',
    partNumber: 1,
    partTitle: P1,
  },
  {
    id: 'hsh-ent-1b',
    question: 'A large tub of water is at $30°\\text{C}$ and a small cup of water is at $60°\\text{C}$. Which statement is correct?',
    options: [
      'More heat is in the cup, because its temperature is higher',
      'The tub is at the higher temperature, because it holds more energy',
      'In contact, energy would flow from the tub into the cup',
      'The cup is hotter, but the tub can have more internal energy',
    ],
    correctIndex: 3,
    explanation: 'Temperature reflects the average kinetic energy per molecule, so the cup is hotter, while internal energy also grows with the amount of water, so the tub can hold more. Objects do not contain heat, and energy would flow from the hotter cup to the tub.',
    partNumber: 1,
    partTitle: P1,
  },

  // Part 2: Specific Heat Capacity
  {
    id: 'hsh-ent-2a',
    question: 'A 2.0 kg iron pan ($c = 450$ J/(kg·°C)) at $25°\\text{C}$ absorbs 36,000 J. What is its final temperature?',
    options: ['$40°\\text{C}$', '$105°\\text{C}$', '$65°\\text{C}$', '$-15°\\text{C}$'],
    correctIndex: 2,
    explanation: '$\\Delta T = \\frac{Q}{mc} = \\frac{36{,}000}{(2.0)(450)} = 40°\\text{C}$, so the pan ends at $25 + 40 = 65°\\text{C}$. Reporting 40°C confuses the change with the final value, and 105°C leaves out the mass.',
    partNumber: 2,
    partTitle: P2,
  },
  {
    id: 'hsh-ent-2b',
    question: 'The same amount of energy is added to 1.0 kg of water ($c = 4{,}186$ J/(kg·°C)) and to 2.0 kg of copper ($c = 390$ J/(kg·°C)). The copper\'s temperature change is how many times the water\'s?',
    options: ['5.4', '10.7', '2.7', '0.19'],
    correctIndex: 0,
    explanation: 'With equal $Q$, $\\Delta T \\propto \\frac{1}{mc}$, so the ratio is $\\frac{(1.0)(4{,}186)}{(2.0)(390)} \\approx 5.4$. Ignoring the masses gives 10.7, and inverting the ratio gives 0.19.',
    partNumber: 2,
    partTitle: P2,
  },

  // Part 3: Calorimetry
  {
    id: 'hsh-ent-3a',
    question: 'A 0.20 kg copper block ($c = 390$ J/(kg·°C)) at $150°\\text{C}$ is dropped into 0.50 kg of water ($c = 4{,}186$ J/(kg·°C)) at $20°\\text{C}$ in an insulated cup. What is the final temperature?',
    options: ['$85.0°\\text{C}$', '$24.7°\\text{C}$', '$57.1°\\text{C}$', '$31.1°\\text{C}$'],
    correctIndex: 1,
    explanation: 'Setting $78(T_f - 150) + 2{,}093(T_f - 20) = 0$ gives $T_f = \\frac{53{,}560}{2{,}171} \\approx 24.7°\\text{C}$. The simple average, 85.0°C, ignores that the water has far more thermal mass.',
    partNumber: 3,
    partTitle: P3,
  },
  {
    id: 'hsh-ent-3b',
    question: 'A 0.30 kg metal sample at $100.0°\\text{C}$ is placed in 0.20 kg of water ($c = 4{,}186$ J/(kg·°C)) at $20.0°\\text{C}$ in an insulated cup. The final temperature is $30.0°\\text{C}$. What is the specific heat of the metal?',
    options: ['349 J/(kg·°C)', '897 J/(kg·°C)', '598 J/(kg·°C)', '399 J/(kg·°C)'],
    correctIndex: 3,
    explanation: 'The water gains $(0.20)(4{,}186)(10.0) = 8{,}372$ J, which the metal loses over a 70.0°C drop: $c = \\frac{8{,}372}{(0.30)(70.0)} \\approx 399$ J/(kg·°C). Swapping the two masses gives 897.',
    partNumber: 3,
    partTitle: P3,
  },

  // Part 4: Heat Transfer Mechanisms
  {
    id: 'hsh-ent-4a',
    question: 'A small blackbody is heated from $27°\\text{C}$ to $327°\\text{C}$. By what factor does the power it radiates increase?',
    options: ['2', '4', '16', '8'],
    correctIndex: 2,
    explanation: 'Radiated power is proportional to $T^4$ with $T$ in kelvins. The temperature doubles from 300 K to 600 K, so the power grows by $2^4 = 16$.',
    partNumber: 4,
    partTitle: P4,
  },
  {
    id: 'hsh-ent-4b',
    question: 'Room heaters are usually mounted near the floor rather than near the ceiling. Which mechanism makes that placement effective?',
    options: [
      'Air warmed near the floor rises and circulates',
      'Cool air near the floor conducts energy upward more readily',
      'The floor reflects the heater\'s radiation up toward the ceiling',
      'Hot air sinks, so a high heater would leave the floor cold',
    ],
    correctIndex: 0,
    explanation: 'Heated air expands, becomes less dense and rises, while cooler air sinks to replace it, so a low heater drives convection through the whole room. Air is a poor conductor, and warm air rises rather than sinks.',
    partNumber: 4,
    partTitle: P4,
  },

  // Part 5: Conduction Problem Solving
  {
    id: 'hsh-ent-5a',
    question: 'A copper rod ($k = 390$ W/(m·K)) is 0.50 m long with a cross-sectional area of $2.0 \\times 10^{-4} \\text{ m}^2$. Its ends are held at $100°\\text{C}$ and $0°\\text{C}$. What is the steady rate of energy flow through it?',
    options: ['7.80 W', '15.6 W', '3.90 W', '1,560 W'],
    correctIndex: 1,
    explanation: '$\\frac{Q}{t} = \\frac{kA\\Delta T}{L} = \\frac{(390)(2.0 \\times 10^{-4})(100)}{0.50} = 15.6$ W. Multiplying by the length instead of dividing gives 3.90 W.',
    partNumber: 5,
    partTitle: P5,
  },
  {
    id: 'hsh-ent-5b',
    question: 'A wall has an inner layer 0.10 m thick with $k = 0.80$ W/(m·K) and an outer layer 0.040 m thick with $k = 0.040$ W/(m·K). Inside is at $20°\\text{C}$ and outside at $0°\\text{C}$. In steady state, what is the temperature where the layers meet?',
    options: ['$10.0°\\text{C}$', '$2.22°\\text{C}$', '$19.0°\\text{C}$', '$17.8°\\text{C}$'],
    correctIndex: 3,
    explanation: 'Equal rates per area require $\\frac{0.80}{0.10}(20 - T_i) = \\frac{0.040}{0.040}(T_i - 0)$, so $160 = 9T_i$ and $T_i \\approx 17.8°\\text{C}$. The poorly conducting outer layer carries most of the drop; ignoring thickness gives 19.0°C.',
    partNumber: 5,
    partTitle: P5,
  },

  // Part 6: Applications & Real-World
  {
    id: 'hsh-ent-6a',
    question: 'A metal bench and a wooden bench have both sat in the summer sun until each is at $45°\\text{C}$. Which feels hotter to bare skin, and why?',
    options: [
      'The metal, since it carries energy into the skin faster',
      'The metal, since it is now at a higher temperature',
      'The metal, since it holds less energy per kilogram',
      'Neither, since both are at the same temperature',
    ],
    correctIndex: 0,
    explanation: 'Both benches are at the same temperature, but metal has a much higher thermal conductivity, so it transfers energy into cooler skin much faster. Skin senses that rate of energy transfer, not the temperature directly.',
    partNumber: 6,
    partTitle: P6,
  },
  {
    id: 'hsh-ent-6b',
    question: 'Why does adding carbon dioxide to the atmosphere tend to raise Earth\'s average surface temperature?',
    options: [
      'It absorbs incoming visible sunlight before the light reaches the ground',
      'It raises the specific heat of air, so the air stores more solar energy',
      'It absorbs outgoing infrared and re-emits part of it back toward the ground',
      'It reflects outgoing infrared away from Earth and back out into space',
    ],
    correctIndex: 2,
    explanation: 'Visible sunlight mostly passes through, the cooler ground radiates infrared, and greenhouse gases absorb that infrared and re-emit some of it downward. The surface warms until its emission $\\sigma AT^4$ balances the energy it receives.',
    partNumber: 6,
    partTitle: P6,
  },

  // Part 7: Synthesis & AP Review
  {
    id: 'hsh-ent-7a',
    question: 'In a calorimetry lab, a hot metal sample cools in the air for several seconds while being carried from the boiling water to the cup. The student still records its starting temperature as $100°\\text{C}$. How does this affect the calculated specific heat of the metal?',
    options: [
      'Too high, because its temperature drop is overstated',
      'Too high, because the water ends up warmer than it should',
      'Unchanged, because the lost energy cancels out of the equation',
      'Too low, because its temperature drop is overstated',
    ],
    correctIndex: 3,
    explanation: 'The water\'s measured energy gain is real, but the metal actually started below 100°C, so dividing by $(100 - T_f)$ overstates its temperature drop. A larger denominator makes the calculated specific heat too low.',
    partNumber: 7,
    partTitle: P7,
  },
  {
    id: 'hsh-ent-7b',
    question: 'A steel rod ($k = 50$ W/(m·K), length 0.40 m, area $4.0 \\times 10^{-4} \\text{ m}^2$) carries energy from a $100°\\text{C}$ reservoir into a 0.50 kg aluminum block ($c = 900$ J/(kg·°C)) that stays near $20°\\text{C}$. About how long does it take the block to warm by $10°\\text{C}$?',
    options: ['2,800 s', '1,100 s', '900 s', '2,300 s'],
    correctIndex: 1,
    explanation: 'The rod conducts $\\frac{(50)(4.0 \\times 10^{-4})(80)}{0.40} = 4.0$ W, and the block needs $(0.50)(900)(10) = 4{,}500$ J, so $t = 4{,}500/4.0 \\approx 1{,}100$ s. Using a 100°C difference instead of 80°C gives 900 s.',
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
