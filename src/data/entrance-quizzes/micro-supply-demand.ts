/**
 * Entrance Quiz — Supply & Demand (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'msd-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'A recession lowers incomes in a city where most commuters treat bus rides as an inferior good. What happens in the market for bus rides?',
    options: ['Demand increases, raising both price and quantity', 'Demand decreases, lowering both price and quantity', 'Quantity demanded increases along the same demand curve', 'Supply increases, lowering price and raising quantity'],
    correctIndex: 0,
    explanation: 'For an inferior good, lower income raises demand at every price, so the demand curve shifts right and both equilibrium price and quantity rise. Income is a buyer-side determinant, so supply does not move.',
  },
  {
    id: 'msd-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Buyers\' incomes rise (the good is normal) at the same time that a new technology lowers producers\' costs. What happens to the equilibrium?',
    options: ['Price rises, and the quantity change is indeterminate', 'Quantity rises, and the price change is indeterminate', 'Price and quantity both rise by a certain amount', 'Quantity falls, and the price change is indeterminate'],
    correctIndex: 1,
    explanation: 'Demand and supply both shift right, and each shift raises quantity, so quantity rises for certain. The demand shift raises price while the supply shift lowers it, so without sizes the price change is indeterminate.',
  },
  {
    id: 'msd-ent-2a', partNumber: 2, partTitle: 'Demand in Depth: Schedules, Market Demand, and Equations',
    question: 'Market demand for a snack is $Q_d = 40 - 4P$. A rise in the price of a substitute increases quantity demanded by 8 units at every price. What are the new quantity demanded at a price of \\$6 and the new choke price?',
    options: ['24 units and \\$10', '16 units and \\$12', '24 units and \\$12', '8 units and \\$12'],
    correctIndex: 2,
    explanation: 'The new demand is $Q_d = 48 - 4P$, so at \\$6 buyers want 48 − 24 = 24 units. Quantity demanded reaches zero at P = 12, up from the original choke price of \\$10.',
  },
  {
    id: 'msd-ent-2b', partNumber: 2, partTitle: 'Demand in Depth: Schedules, Market Demand, and Equations',
    question: 'At a price of \\$4, three students want 1, 2 and 3 cups of cold brew per week. A fourth student who buys 3 cups at every price then joins them. What is market quantity demanded at \\$4, and how does the market demand curve change?',
    options: ['6 cups, with a movement along market demand', '9 cups, with a movement along market demand', '7 cups, with a rightward shift of market demand', '9 cups, with a rightward shift of market demand'],
    correctIndex: 3,
    explanation: 'Market demand adds quantities across buyers at each price: 1 + 2 + 3 + 3 = 9 cups. Because the new buyer adds cups at every price, the whole market demand curve shifts right.',
  },
  {
    id: 'msd-ent-3a', partNumber: 3, partTitle: 'Supply in Depth: Costs, Determinants, and Equations',
    question: 'Market supply is $Q_s = 5P - 10$. A per-unit tax adds \\$2 to sellers\' cost of each unit, so supply becomes $Q_s = 5(P - 2) - 10$. What is the new quantity supplied at \\$8, and what price would now draw out the 30 units sellers used to offer at \\$8?',
    options: ['20 units, and \\$10 to get 30 units', '20 units, and \\$6 to get 30 units', '28 units, and \\$10 to get 30 units', '30 units, and \\$8 to get 30 units'],
    correctIndex: 0,
    explanation: 'The new supply is $Q_s = 5P - 20$, so at \\$8 sellers offer 20 units. Solving 5P − 20 = 30 gives P = \\$10: the curve moved up by exactly the \\$2 tax.',
  },
  {
    id: 'msd-ent-3b', partNumber: 3, partTitle: 'Supply in Depth: Costs, Determinants, and Equations',
    question: 'Consumer demand for beef rises sharply, pushing up its price. Leather comes from the same cattle. What happens in the market for leather?',
    options: ['Supply of leather decreases, as ranchers switch toward beef', 'Supply of leather increases, as more hides are produced', 'Demand for leather decreases, as beef costs more', 'Supply of leather is unchanged, as it is a separate market'],
    correctIndex: 1,
    explanation: 'Beef and leather are joint products: a higher beef price leads ranchers to process more cattle, which yields more hides. Supply of leather increases at every price.',
  },
  {
    id: 'msd-ent-4a', partNumber: 4, partTitle: 'Translating Events into Graphs',
    question: 'Streaming services cut their subscription prices. What happens in the market for movie theater tickets?',
    options: ['Supply shifts left, so price rises and quantity falls', 'Quantity demanded falls along an unchanged curve', 'Demand shifts left, so price and quantity fall', 'Supply shifts right, so price falls and quantity rises'],
    correctIndex: 2,
    explanation: 'Streaming is a substitute for theater tickets, and a cheaper substitute lowers demand for tickets at every price. The demand curve shifts left, so the equilibrium price and quantity of tickets both fall.',
  },
  {
    id: 'msd-ent-4b', partNumber: 4, partTitle: 'Translating Events into Graphs',
    question: 'Over a season, the equilibrium price of corn falls while the quantity of corn bought and sold rises. Which event best explains both changes?',
    options: ['A rise in the price of wheat grown on the same land', 'A study reporting that eating corn improves health', 'A fall in the price of rice, a substitute for corn', 'A government subsidy of \\$0.50 per bushel to growers'],
    correctIndex: 3,
    explanation: 'A lower price with a higher quantity points to an increase in supply, and a per-unit subsidy lowers producers\' costs. Higher wheat prices reduce corn supply, the health study raises demand, and cheaper rice lowers demand.',
  },
  {
    id: 'msd-ent-5a', partNumber: 5, partTitle: 'Traps, Nuance, and Common Misconceptions',
    question: 'A fad sharply increases demand for pickleball paddles, and their price goes up. How do paddle sellers respond?',
    options: ['Quantity supplied rises along the existing supply curve', 'Supply shifts right in response to the higher price', 'Supply shifts left as paddles become harder to find', 'Supply stays put and the quantity supplied falls'],
    correctIndex: 0,
    explanation: 'The higher price moves sellers up along the supply curve they already had, so quantity supplied rises. Supply shifts only when a seller-side determinant changes, not when the good\'s own price changes.',
  },
  {
    id: 'msd-ent-5b', partNumber: 5, partTitle: 'Traps, Nuance, and Common Misconceptions',
    question: 'Both buyers and sellers of heating oil, a storable good, come to expect its price to rise sharply next month. What happens in the market this month?',
    options: ['Price rises now, and quantity falls', 'Price rises now, and the quantity change is indeterminate', 'Price falls now, and the quantity change is indeterminate', 'Price rises now, and quantity rises'],
    correctIndex: 1,
    explanation: 'Buyers buy more now, shifting demand right, while sellers hold oil back to sell later, shifting supply left. Both push this month\'s price up, but they pull quantity in opposite directions, so quantity is indeterminate.',
  },
  {
    id: 'msd-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice: Chains Across Related Markets',
    question: 'A drought shrinks the wheat harvest, and wheat is the main input for bread. Rice is a substitute for bread, and butter is a complement to bread. What happens to the equilibrium price of rice and the equilibrium quantity of butter?',
    options: ['Rice price falls and butter quantity rises', 'Rice price rises and butter quantity rises', 'Rice price rises and butter quantity falls', 'Rice price falls and butter quantity falls'],
    correctIndex: 2,
    explanation: 'Costlier wheat shifts bread supply left and raises the price of bread. Buyers switch toward rice, so demand for rice and its price rise, and they eat less bread, so demand for butter and its quantity fall.',
  },
  {
    id: 'msd-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice: Chains Across Related Markets',
    question: 'An FRQ asks why the equilibrium price of tea rises after coffee becomes more expensive. Which explanation earns the point?',
    options: ['The quantity of tea demanded is higher than before, so its price rises', 'Coffee costs more to make, so the supply of tea increases as well', 'Tea becomes scarce, so the supply of tea decreases at every price', 'Coffee is a substitute whose price rose, so the demand for tea increases'],
    correctIndex: 3,
    explanation: 'A full explanation names the determinant and the curve it shifts: a higher price of a substitute increases demand for tea. Restating the result or shifting the supply of tea does not explain the change.',
  },
  {
    id: 'msd-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'In a market, $Q_d = 40 - 2P$ and $Q_s = 3P - 10$. At a price of \\$8, what is the market condition?',
    options: ['A shortage of 10 units', 'A surplus of 10 units', 'A shortage of 38 units', 'A surplus of 24 units'],
    correctIndex: 0,
    explanation: 'At \\$8 buyers want 40 − 16 = 24 units and sellers offer 24 − 10 = 14, so quantity demanded exceeds quantity supplied by 10. The shortage will push the price up toward equilibrium.',
  },
  {
    id: 'msd-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which event decreases the supply of wheat?',
    options: ['A fall in the price of the fertilizer used to grow wheat', 'A sharp rise in the price of corn grown on the same farmland', 'A rise in the price of the bread made from wheat flour', 'A new strain of seed that raises wheat yields per acre'],
    correctIndex: 1,
    explanation: 'Corn and wheat are substitutes in production, so a higher corn price draws land away from wheat and supply falls. Cheaper fertilizer and better seed raise supply, and a higher bread price affects the demand for wheat.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Demand in Depth: Schedules, Market Demand, and Equations' },
    { partNumber: 3, partTitle: 'Supply in Depth: Costs, Determinants, and Equations' },
    { partNumber: 4, partTitle: 'Translating Events into Graphs' },
    { partNumber: 5, partTitle: 'Traps, Nuance, and Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice: Chains Across Related Markets' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
