/**
 * Entrance Quiz — Data (AP Computer Science Principles)
 * 14 questions · 7 parts (2 per part)
 */

import type { EntranceQuizQuestion } from './moles-molar-mass'
import { shuffleArray } from '@/lib/shuffle-options'

const questions: EntranceQuizQuestion[] = [
  {
    id: 'cpdt-ent-1a', partNumber: 1, partTitle: 'Collection, Processing, and Extracting Information',
    question: 'A sharing app stores each picture along with the time it was taken and the GPS coordinates of the camera. Which of these is metadata?',
    options: ['The location of the shot', 'The colors of the pixels in the picture', 'The people shown in the picture', 'The scene that the picture captures'],
    correctIndex: 0,
    explanation: 'Metadata is data about the data: the GPS coordinates describe the picture without being part of the image. The pixels, the people and the scene are the content itself.',
  },
  {
    id: 'cpdt-ent-1b', partNumber: 1, partTitle: 'Collection, Processing, and Extracting Information',
    question: 'Data show that towns with more libraries tend to have lower crime rates. Which conclusion is best supported?',
    options: ['Building more libraries will reduce crime', 'High crime causes towns to close libraries', 'They are linked, but the data alone do not show a cause', 'The data must contain a recording error'],
    correctIndex: 2,
    explanation: 'A correlation shows that two measures change together, not that one causes the other. A third factor, such as town funding, could explain both.',
  },
  {
    id: 'cpdt-ent-2a', partNumber: 2, partTitle: 'Key Processes',
    question: 'A fitness app\'s data set includes one heart-rate reading of 650 beats per minute. What is the best way to handle that reading before analysis?',
    options: ['Keep it, since all data should be kept as recorded', 'Average it in with the other readings as usual', 'Flag or remove it as an invalid value', 'Change it to 65 because that looks reasonable'],
    correctIndex: 2,
    explanation: 'A human heart rate of 650 is outside any valid range, so it should be flagged or removed during cleaning. Guessing a replacement or averaging it in would distort the results.',
  },
  {
    id: 'cpdt-ent-2b', partNumber: 2, partTitle: 'Key Processes',
    question: 'A messaging company stores only who messaged whom and when, never the text of the messages. Why can this still raise privacy concerns?',
    options: ['The text can be rebuilt from the times sent', 'Metadata is encrypted, so no one can ever read it', 'Storing times uses more space than storing text', 'Metadata like contacts and times can reveal a lot about a person'],
    correctIndex: 3,
    explanation: 'Metadata can be as revealing as the data itself: patterns of who someone contacts and when can expose relationships and routines. The message text is not needed for that.',
  },
  {
    id: 'cpdt-ent-3a', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'A school wants to show how the number of library visits changed from month to month over two years. Which kind of chart fits this question best?',
    options: ['A line chart', 'A pie chart', 'A scatter plot', 'A histogram'],
    correctIndex: 0,
    explanation: 'A line chart shows how one value changes over time. A pie chart shows shares of a whole, a scatter plot shows the relationship between two variables, and a histogram shows a distribution.',
  },
  {
    id: 'cpdt-ent-3b', partNumber: 3, partTitle: 'Patterns & Examples',
    question: 'One data set pairs student IDs with names, and another pairs the same IDs with test scores. What is needed to produce a list of each student\'s name with that student\'s score?',
    options: ['Match the records on the shared ID', 'Average the two lists together', 'Sort both lists alphabetically by name', 'Delete the IDs from both lists first'],
    correctIndex: 0,
    explanation: 'Combining two sources on a shared key lets each name be joined to the right score. Neither data set alone contains both pieces of information.',
  },
  {
    id: 'cpdt-ent-4a', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'scores is the list [80, 92, 74, 90]. What is the value of average after this code runs?\ntotal ← 0\nFOR EACH s IN scores\n{\ntotal ← total + s\n}\naverage ← total / LENGTH(scores)',
    options: ['336', '84', '90', '83'],
    correctIndex: 1,
    explanation: 'The loop adds every element, 80 + 92 + 74 + 90 = 336, and LENGTH(scores) is 4. Dividing gives 84; 336 is the total before the division.',
  },
  {
    id: 'cpdt-ent-4b', partNumber: 4, partTitle: 'Connections & Interactions',
    question: 'Which of these is personally identifiable information?',
    options: ['The average score of a whole class', 'Someone\'s phone number', 'The number of visitors to a website', 'The weather forecast for a city'],
    correctIndex: 1,
    explanation: 'A phone number links directly to one individual. The class average, the visitor count and the forecast describe groups or conditions, not a specific person.',
  },
  {
    id: 'cpdt-ent-5a', partNumber: 5, partTitle: 'Large Data Sets, Scalability, and Bias',
    question: 'A face-recognition system trained mostly on photos of adults works poorly for children. The team plans to fix it by adding millions more photos gathered the same way. Why might this not help?',
    options: ['Bigger data sets make programs less accurate', 'Children\'s photos cannot be stored as data', 'The system cannot learn from more photos', 'Extra data of the same kind repeats the imbalance'],
    correctIndex: 3,
    explanation: 'Bias often comes from the type or source of the data, and more data collected the same way keeps it. The team needs more photos of children, not just more photos.',
  },
  {
    id: 'cpdt-ent-5b', partNumber: 5, partTitle: 'Large Data Sets, Scalability, and Bias',
    question: 'A city\'s traffic sensors produce more data each day than one computer can process in time. Which approach is reasonable?',
    options: ['Delete half the readings before any processing', 'Wait for one computer to catch up each night', 'Use many computers in parallel', 'Stop collecting data until the backlog clears'],
    correctIndex: 2,
    explanation: 'Large data sets can be too much for a single computer, and parallel systems split the work among many processors at once. Scalability is the system\'s ability to grow to meet that demand.',
  },
  {
    id: 'cpdt-ent-6a', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'The state column of a survey contains "NY", "New York" and "new york". What should be done before counting the responses by state?',
    options: ['Rewrite them all in one standard form', 'Delete all three kinds of entries', 'Count each spelling as a separate state', 'Keep only the rows with the most common spelling'],
    correctIndex: 0,
    explanation: 'Cleaning makes the data uniform without changing its meaning, so all three spellings count as the same state. Deleting or splitting them would give wrong totals.',
  },
  {
    id: 'cpdt-ent-6b', partNumber: 6, partTitle: 'Problem-Solving Workshop',
    question: 'A table has one row per student with a class period and a grade. Which sequence of steps finds the average grade for each period?',
    options: ['Total every grade, then divide by the periods, then group', 'Sort by grade, then pick the middle, then group', 'Divide each grade by its period, then add, then group', 'Group by period, then total and count, then divide'],
    correctIndex: 3,
    explanation: 'Grouping first separates the rows by period. Within each group the grades are totaled and counted, and dividing gives that period\'s average.',
  },
  {
    id: 'cpdt-ent-7a', partNumber: 7, partTitle: 'AP Review',
    question: 'A company removes names from users\' location histories before sharing them and calls the data anonymous. Why can people still be identified?',
    options: ['Every location record still contains a name', 'Removing names makes data impossible to share', 'Location data cannot be stored without names', 'Patterns such as where a person sleeps can single them out'],
    correctIndex: 3,
    explanation: 'A location history shows where someone spends nights and days, which can point to one individual, especially when combined with other data. Removing names does not make combined personal data anonymous.',
  },
  {
    id: 'cpdt-ent-7b', partNumber: 7, partTitle: 'AP Review',
    question: 'A program keeps only the rows where the temperature is above 30 and then counts those rows. Which two operations does it use?',
    options: ['Sorting, then visualization', 'Filtering, then aggregation', 'Combining, then sorting', 'Cleaning, then combining'],
    correctIndex: 1,
    explanation: 'Keeping the rows that match a condition is filtering, and reducing many values to one summary such as a count is aggregation.',
  },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] {
  return shuffleArray(questions)
}

export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Collection, Processing, and Extracting Information' },
    { partNumber: 2, partTitle: 'Key Processes' },
    { partNumber: 3, partTitle: 'Patterns & Examples' },
    { partNumber: 4, partTitle: 'Connections & Interactions' },
    { partNumber: 5, partTitle: 'Large Data Sets, Scalability, and Bias' },
    { partNumber: 6, partTitle: 'Problem-Solving Workshop' },
    { partNumber: 7, partTitle: 'AP Review' },
  ]
}
