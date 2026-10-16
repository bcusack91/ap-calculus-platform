/**
 * Entrance Quiz — Government Intervention in Markets (AP Microeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mgi-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Which policy creates a surplus in its market?',
    options: ['A minimum wage set above the equilibrium wage', 'A rent cap set below the equilibrium monthly rent', 'A price floor set below the equilibrium market price', 'A price ceiling set above the equilibrium price'],
    correctIndex: 0,
    explanation: 'A minimum wage above equilibrium is a binding price floor, so more labor is supplied than demanded. A rent cap below equilibrium causes a shortage, and the other two controls are not binding.',
  },
  {
    id: 'mgi-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'Demand for cigarettes is much less elastic than supply. The government collects a \\$1 per-pack tax from sellers. Who bears most of the tax?',
    options: ['Sellers, since they are the ones who send the payment', 'Buyers, even though sellers send the payment in', 'Each side equally, since a tax is always split evenly', 'Sellers, since buyers cannot cut back their purchases'],
    correctIndex: 1,
    explanation: 'The side of the market that is less responsive to price bears more of a tax, and here that is buyers. Who writes the check to the government does not decide the economic burden.',
  },
  {
    id: 'mgi-ent-2a', partNumber: 2, partTitle: 'Price Ceilings and Floors with Numbers',
    question: 'A market has demand $Q_d = 160 - 4P$ and supply $Q_s = 4P - 40$. The government sets a price ceiling of \\$20. What are the shortage and the deadweight loss?',
    options: ['A shortage of 40 units and a DWL of \\$200', 'A shortage of 20 units and a DWL of \\$100', 'A shortage of 40 units and a DWL of \\$100', 'A surplus of 40 units and a DWL of \\$100'],
    correctIndex: 2,
    explanation: 'Equilibrium is \\$25 and 60 units. At \\$20 buyers want 80 and sellers offer 40, a shortage of 40, and only 40 trade. At 40 units buyers would pay \\$30 and sellers need \\$20, so DWL = ½ × 20 × \\$10 = \\$100.',
  },
  {
    id: 'mgi-ent-2b', partNumber: 2, partTitle: 'Price Ceilings and Floors with Numbers',
    question: 'In the same market ($Q_d = 160 - 4P$, $Q_s = 4P - 40$), the government instead sets a price floor of \\$30. How many units trade if the government buys nothing, and what would it cost to buy the whole surplus at the floor price?',
    options: ['80 units, and \\$1,200 to buy the surplus', '40 units, and \\$2,400 to buy the surplus', '60 units, and \\$600 to buy the surplus', '40 units, and \\$1,200 to buy the surplus'],
    correctIndex: 3,
    explanation: 'At \\$30 buyers want 40 units and sellers offer 80. Buyers are the short side, so 40 trade, and the 40-unit surplus would cost \\$30 × 40 = \\$1,200 to buy.',
  },
  {
    id: 'mgi-ent-3a', partNumber: 3, partTitle: 'Excise Taxes: The Full Calculation',
    question: 'A market has demand $Q_d = 100 - 2P$ and supply $Q_s = 3P - 50$. The government places a \\$5 per-unit tax on sellers. What price do buyers pay, what price do sellers keep, and how much revenue is collected?',
    options: ['\\$33 and \\$28, with \\$170 of revenue', '\\$35 and \\$30, with \\$200 of revenue', '\\$33 and \\$28, with \\$200 of revenue', '\\$32 and \\$27, with \\$170 of revenue'],
    correctIndex: 0,
    explanation: 'Supply becomes $Q_s = 3(P - 5) - 50 = 3P - 65$, so 100 − 2P = 3P − 65 gives a buyer price of \\$33, a seller price of \\$28 and 34 units. Revenue is \\$5 × 34 = \\$170; using the old 40 units gives \\$200.',
  },
  {
    id: 'mgi-ent-3b', partNumber: 3, partTitle: 'Excise Taxes: The Full Calculation',
    question: 'In a market with straight-line demand and supply curves, a per-unit tax is raised from \\$10 to \\$20. What happens to the deadweight loss?',
    options: ['It becomes twice as large', 'It becomes four times as large', 'It stays exactly the same', 'It becomes half as large'],
    correctIndex: 1,
    explanation: 'The deadweight loss triangle has the tax as its height and the drop in quantity as its base. Doubling the tax doubles both, so the area grows fourfold.',
  },
  {
    id: 'mgi-ent-4a', partNumber: 4, partTitle: 'Subsidies, Quotas and Lettered Graphs',
    question: 'A market has demand $Q_d = 100 - 2P$ and supply $Q_s = 3P - 50$. The government pays sellers a \\$5 per-unit subsidy. What price do buyers pay, and what does the subsidy cost the government?',
    options: ['\\$25, with a cost of \\$230', '\\$27, with a cost of \\$200', '\\$27, with a cost of \\$230', '\\$32, with a cost of \\$230'],
    correctIndex: 2,
    explanation: 'Supply becomes $Q_s = 3(P + 5) - 50 = 3P - 35$, so 100 − 2P = 3P − 35 gives a buyer price of \\$27 and 46 units; producers receive \\$32. The cost is \\$5 × 46 = \\$230, which is more than buyers and sellers gain.',
  },
  {
    id: 'mgi-ent-4b', partNumber: 4, partTitle: 'Subsidies, Quotas and Lettered Graphs',
    question: 'A city caps the number of taxi licenses below the number of rides the market would provide on its own. Which set of effects follows?',
    options: ['Price falls, quantity falls, and the government collects revenue', 'Price rises, quantity rises, and consumers gain more surplus', 'Price rises, quantity falls, and total surplus is unchanged', 'Price rises, quantity falls, and permit owners can gain'],
    correctIndex: 3,
    explanation: 'A binding quota cuts quantity, so buyers bid up the price of the limited rides and consumer surplus falls. License holders earn more than cost on each ride, and the lost rides create deadweight loss.',
  },
  {
    id: 'mgi-ent-5a', partNumber: 5, partTitle: 'International Trade and Trade Policy',
    question: 'A small country\'s domestic market has demand $Q_d = 200 - 4P$ and supply $Q_s = 4P - 40$. The world price is \\$20, and the country adds a \\$5 tariff. What are imports after the tariff, and how much tariff revenue is collected?',
    options: ['40 units and \\$200', '80 units and \\$400', '40 units and \\$500', '60 units and \\$300'],
    correctIndex: 0,
    explanation: 'The tariff raises the domestic price to \\$25, where buyers want 100 units and domestic firms make 60, so imports are 40. Revenue is collected only on imports: \\$5 × 40 = \\$200.',
  },
  {
    id: 'mgi-ent-5b', partNumber: 5, partTitle: 'International Trade and Trade Policy',
    question: 'A small country opens a market to free trade, and the world price is above its domestic equilibrium price. What happens?',
    options: ['Domestic buyers gain and domestic producers lose', 'Domestic producers gain more than domestic buyers lose', 'Total surplus falls because buyers pay more', 'Producers gain exactly what domestic buyers lose'],
    correctIndex: 1,
    explanation: 'The country exports: the higher price helps producers and hurts buyers. The producers\' gain is larger than the buyers\' loss, so total surplus rises with trade.',
  },
  {
    id: 'mgi-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A market for chargers is in equilibrium at \\$12 and 600 units. After a \\$6 per-unit tax on sellers, buyers pay \\$16, sellers keep \\$10, and 480 chargers are sold. How much of the tax revenue do buyers pay, and what is the deadweight loss?',
    options: ['\\$2,880 and \\$360', '\\$960 and \\$720', '\\$1,920 and \\$360', '\\$1,920 and \\$720'],
    correctIndex: 2,
    explanation: 'Buyers pay \\$4 more per unit, so they bear \\$4 × 480 = \\$1,920 of the \\$2,880 revenue. The deadweight loss is ½ × (600 − 480) × \\$6 = \\$360.',
  },
  {
    id: 'mgi-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A small country trades sugar at a world price of \\$40 per ton. Its domestic market:\n\n| Price per ton | Quantity demanded | Quantity supplied |\n|---|---|---|\n| \\$40 | 900 | 300 |\n| \\$50 | 800 | 400 |\n| \\$60 | 700 | 500 |\n| \\$70 | 600 | 600 |\n\nThe country imposes a \\$10-per-ton tariff. What deadweight loss does the tariff create?',
    options: ['\\$500', '\\$4,000', '\\$2,000', '\\$1,000'],
    correctIndex: 3,
    explanation: 'The price rises to \\$50, so domestic output rises from 300 to 400 tons and consumption falls from 900 to 800. The production triangle (½ × 100 × \\$10) and the consumption triangle (½ × 100 × \\$10) add to \\$1,000.',
  },
  {
    id: 'mgi-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'A market has demand $Q_d = 140 - 4P$ and supply $Q_s = 3P - 14$. What happens under a price ceiling of \\$20, and, separately, under a price floor of \\$18?',
    options: ['A shortage of 14 under the ceiling, and no effect from the floor', 'A shortage of 14 under the ceiling, and another from the floor', 'A surplus of 14 under the ceiling, and no effect from the floor', 'No effect from the ceiling, and a surplus of 14 from the floor'],
    correctIndex: 0,
    explanation: 'Equilibrium is \\$22 and 52 units. The \\$20 ceiling binds: buyers want 60 and sellers offer 46, a shortage of 14. The \\$18 floor is below equilibrium, so it does not bind.',
  },
  {
    id: 'mgi-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'Which statement about government intervention is correct?',
    options: ['A price ceiling always helps every consumer', 'Tariff revenue equals the tariff times the imported units', 'Tax revenue counts as part of the deadweight loss', 'Whoever sends the tax to the government bears most of it'],
    correctIndex: 1,
    explanation: 'A tariff is collected only on imported units, never on domestic output. A ceiling shuts some buyers out, tax revenue is a transfer rather than a loss, and incidence depends on elasticities.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Price Ceilings and Floors with Numbers' },
    { partNumber: 3, partTitle: 'Excise Taxes: The Full Calculation' },
    { partNumber: 4, partTitle: 'Subsidies, Quotas and Lettered Graphs' },
    { partNumber: 5, partTitle: 'International Trade and Trade Policy' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
