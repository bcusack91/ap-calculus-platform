/**
 * Entrance Quiz — Comparative Advantage (AP Macroeconomics)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'mca-ent-1a', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In a day, Country P can produce 80 apples or 40 pears, and Country Q can produce 30 apples or 30 pears. Which country has the comparative advantage in pears?',
    options: ['Q, because a pear costs it 1 apple and costs P 2 apples', 'P, because a pear costs it 0.5 apples and costs Q 1 apple', 'P, because it can make 40 pears and Q can make just 30 pears', 'Neither, because P is more productive at both of the goods'],
    correctIndex: 0,
    explanation: 'With output data the cost of a pear is apples over pears: 80 ÷ 40 = 2 apples in P and 30 ÷ 30 = 1 apple in Q, so Q has the lower cost. The 0.5 figure is P\'s cost of an apple in pears, and producing more pears is only an absolute advantage.',
  },
  {
    id: 'mca-ent-1b', partNumber: 1, partTitle: 'Core Concepts',
    question: 'In a day, Country X can produce 60 cars or 20 computers, and Country Y can produce 20 cars or 20 computers. At which price of one computer would trade benefit both countries?',
    options: ['1 car', '2 cars', '4 cars', '0.5 cars'],
    correctIndex: 1,
    explanation: 'A computer costs X 3 cars and costs Y 1 car, so a mutually beneficial price lies strictly between 1 and 3 cars. At exactly 1 car, Y, the exporter, gains nothing.',
  },
  {
    id: 'mca-ent-2a', partNumber: 2, partTitle: 'Output vs. Input Problems',
    question: 'A worker in Lira needs 3 hours to make a pair of shoes and 6 hours to make a jacket. A worker in Mora needs 4 hours for a pair of shoes and 12 hours for a jacket. Which country has the comparative advantage in shoes, and what is its opportunity cost of one pair?',
    options: ['1/2 of a jacket, in Lira', '2 jackets, in Lira', '1/3 of a jacket, in Mora', '3 jackets, in Mora'],
    correctIndex: 2,
    explanation: 'In an input table the good being priced goes on top: shoes cost Lira 3 ÷ 6 = 1/2 jacket and Mora 4 ÷ 12 = 1/3 jacket, so Mora has the lower cost. The figures of 2 and 3 jackets come from flipping the division.',
  },
  {
    id: 'mca-ent-2b', partNumber: 2, partTitle: 'Output vs. Input Problems',
    question: 'Country A needs 4 workers to grow a ton of wheat and 2 workers to build a car. Country B needs 6 workers for a ton of wheat and 6 workers for a car. Which statement is correct?',
    options: ['B has the absolute advantage in wheat', 'A has the comparative advantage in both', 'B has the comparative advantage in cars', 'B has the comparative advantage in wheat'],
    correctIndex: 3,
    explanation: 'A ton of wheat costs A 4 ÷ 2 = 2 cars but costs B 6 ÷ 6 = 1 car, so B has the comparative advantage in wheat. A needs fewer workers for both goods, so B has no absolute advantage.',
  },
  {
    id: 'mca-ent-3a', partNumber: 3, partTitle: 'Specialization & Gains from Trade, by the Numbers',
    question: 'Arvo can produce 60 loaves of bread or 30 wheels of cheese in a month; Brin can produce 40 loaves or 40 wheels. Each country first splits its resources in half between the goods. If each then specializes fully in its comparative-advantage good, how does world output change?',
    options: ['5 more loaves and 10 more wheels', '10 more loaves and 5 more wheels', '10 more loaves and 0 more wheels', '0 more loaves and 0 more wheels'],
    correctIndex: 1,
    explanation: 'Half-and-half output is 30 + 20 = 50 loaves and 15 + 20 = 35 wheels. Arvo has the lower cost of bread (0.5 wheel versus 1), so specializing gives 60 loaves from Arvo and 40 wheels from Brin, a gain of 10 loaves and 5 wheels.',
  },
  {
    id: 'mca-ent-3b', partNumber: 3, partTitle: 'Specialization & Gains from Trade, by the Numbers',
    question: 'Arvo specializes in bread (60 loaves) and Brin in cheese (40 wheels). They trade at 1 wheel = 1.5 loaves, and Arvo exports 18 loaves. What does Brin consume after trade?',
    options: ['18 loaves and 28 wheels', '18 loaves and 40 wheels', '18 loaves and 13 wheels', '12 loaves and 28 wheels'],
    correctIndex: 0,
    explanation: 'Eighteen loaves buy 18 ÷ 1.5 = 12 wheels, so Brin keeps 40 − 12 = 28 wheels and consumes the 18 imported loaves. On its own PPC, 18 loaves would leave Brin only 22 wheels, so it consumes outside its curve.',
  },
  {
    id: 'mca-ent-4a', partNumber: 4, partTitle: 'Comparative Advantage on PPC Graphs',
    question: 'A graph has tea on the horizontal axis and rice on the vertical axis. Country J\'s straight-line PPC runs from 90 tons of rice to 45 tons of tea. Country K\'s straight-line PPC runs from 40 tons of rice to 40 tons of tea and lies entirely inside J\'s. Which statement is correct?',
    options: ['J has the comparative advantage in tea', 'J has the comparative advantage in both', 'K has the comparative advantage in tea', 'K has the comparative advantage in rice'],
    correctIndex: 2,
    explanation: 'The slope is the cost of the horizontal-axis good: tea costs J 90 ÷ 45 = 2 tons of rice and K 40 ÷ 40 = 1 ton, so K\'s flatter line gives it the comparative advantage in tea. Lying inside J\'s line only means K has no absolute advantage.',
  },
  {
    id: 'mca-ent-4b', partNumber: 4, partTitle: 'Comparative Advantage on PPC Graphs',
    question: 'Country K can produce 40 tons of rice or 40 tons of tea. It specializes in tea and trades at 1 ton of tea = 1.5 tons of rice. If K keeps 20 tons of tea for itself and trades the rest, how much rice can it consume?',
    options: ['20 tons of rice', '60 tons of rice', '45 tons of rice', '30 tons of rice'],
    correctIndex: 3,
    explanation: 'K exports 20 tons of tea and receives 20 × 1.5 = 30 tons of rice. On its own PPC, keeping 20 tons of tea would allow only 20 tons of rice, so the point is on K\'s trade line, outside its PPC.',
  },
  {
    id: 'mca-ent-5a', partNumber: 5, partTitle: 'Terms of Trade in Depth & Common Misconceptions',
    question: 'A hat costs Nara 3 shirts to produce and costs Sela 5 shirts. They trade hats at a price of 3.5 shirts per hat. How is the gain on each hat traded divided?',
    options: ['Nara gains 0.5 shirts and Sela gains 1.5 shirts', 'Nara gains 1.5 shirts and Sela gains 0.5 shirts', 'Nara gains 1 shirt and Sela gains 1 shirt', 'Nara gains 3.5 shirts and Sela gains 1.5 shirts'],
    correctIndex: 0,
    explanation: 'Nara exports hats and gains the price minus its cost, 3.5 − 3 = 0.5 shirts; Sela imports and saves 5 − 3.5 = 1.5 shirts. The price sits closer to Nara\'s cost, so Sela gets the larger share of the 2-shirt gap.',
  },
  {
    id: 'mca-ent-5b', partNumber: 5, partTitle: 'Terms of Trade in Depth & Common Misconceptions',
    question: 'A shirt costs Nara 1/3 of a hat to produce and costs Sela 1/5 of a hat, so Sela exports shirts. Which price of one shirt would benefit both countries?',
    options: ['0.15 hats', '0.25 hats', '0.40 hats', '0.50 hats'],
    correctIndex: 1,
    explanation: 'The price must lie strictly between Sela\'s cost of 0.20 hats and Nara\'s cost of about 0.33 hats, and only 0.25 hats does. Below 0.20 Sela refuses to sell, and above 0.33 Nara would rather make its own shirts.',
  },
  {
    id: 'mca-ent-6a', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'One worker in Dara can produce 24 bushels of corn or 8 tons of steel in a day; one worker in Elm can produce 18 bushels of corn or 3 tons of steel. A new technology raises Elm\'s steel output to 6 tons per worker, with corn unchanged. What is the effect on comparative advantage in steel?',
    options: ['Elm gains the comparative advantage in steel', 'Dara keeps the same comparative advantage in steel', 'Neither country has a comparative advantage in steel', 'Dara keeps a smaller comparative advantage in steel'],
    correctIndex: 2,
    explanation: 'Steel costs Dara 24 ÷ 8 = 3 bushels; Elm\'s cost falls from 18 ÷ 3 = 6 bushels to 18 ÷ 6 = 3 bushels. With equal opportunity costs, neither country has a comparative advantage and specialization adds nothing.',
  },
  {
    id: 'mca-ent-6b', partNumber: 6, partTitle: 'AP Exam Practice',
    question: 'A worker in Ilo needs 3 hours per bushel of wheat and 9 hours per bolt of cloth. A worker in Juno needs 5 hours per bushel and 10 hours per bolt. What is each country\'s opportunity cost of a bolt of cloth, and would trading 1 bolt for 2.5 bushels benefit both?',
    options: ['Ilo 1/3 and Juno 1/2 bushel, so it helps both', 'Ilo 3 and Juno 2 bushels, so only Juno would gain', 'Ilo 3 and Juno 2 bushels, so neither would gain', 'Ilo 3 and Juno 2 bushels, so it helps both'],
    correctIndex: 3,
    explanation: 'A bolt costs Ilo 9 ÷ 3 = 3 bushels and Juno 10 ÷ 5 = 2 bushels, so Juno exports cloth. At 2.5 bushels Juno receives more than its cost of 2 and Ilo pays less than its cost of 3, so both gain.',
  },
  {
    id: 'mca-ent-7a', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'In a day, Country M can produce 40 radios or 10 phones, and Country N can produce 30 radios or 15 phones. Which trade would benefit both countries?',
    options: ['M exports phones at 3 radios per phone', 'N exports phones at 3 radios per phone', 'N exports phones at 5 radios per phone', 'N exports radios at 3 radios per phone'],
    correctIndex: 1,
    explanation: 'A phone costs M 4 radios and N 2 radios, so N should export phones at a price strictly between 2 and 4 radios. At 5 radios M would rather make its own phones.',
  },
  {
    id: 'mca-ent-7b', partNumber: 7, partTitle: 'Synthesis Review',
    question: 'After specializing and trading, a country consumes a bundle of goods that lies outside its own PPC. Which conclusion is valid?',
    options: ['Its PPC is in the same place as before trade', 'The country\'s PPC has shifted outward due to trade', 'It has an absolute advantage in its export good', 'Its partner must now consume inside its own PPC'],
    correctIndex: 0,
    explanation: 'Trade changes what a country can consume, not what it can produce, so its PPC does not move. Comparative advantage, not absolute advantage, decides exports, and both partners can consume outside their curves.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Core Concepts' },
    { partNumber: 2, partTitle: 'Output vs. Input Problems' },
    { partNumber: 3, partTitle: 'Specialization & Gains from Trade, by the Numbers' },
    { partNumber: 4, partTitle: 'Comparative Advantage on PPC Graphs' },
    { partNumber: 5, partTitle: 'Terms of Trade in Depth & Common Misconceptions' },
    { partNumber: 6, partTitle: 'AP Exam Practice' },
    { partNumber: 7, partTitle: 'Synthesis Review' },
  ]
}
