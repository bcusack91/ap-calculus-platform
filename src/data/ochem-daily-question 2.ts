/**
 * Organic Chemistry - Question of the Day
 *
 * Deterministic per calendar day so every visitor sees the same question.
 */

interface Question {
  question: string
  options: string[]
  correctAnswer: number
  explanation: string
}

const QUESTION_POOL: Question[] = [
  { question: 'Which functional group defines an alcohol?', options: ['Carbonyl (-C=O)', 'Hydroxyl (-OH)', 'Amino (-NH2)', 'Carboxyl (-COOH)'], correctAnswer: 1, explanation: 'Alcohols are characterized by the hydroxyl (-OH) group attached to carbon.' },
  { question: 'Methane is best classified as a(n):', options: ['Alkane', 'Alkene', 'Alkyne', 'Aromatic'], correctAnswer: 0, explanation: 'Methane has only single bonds, so it is an alkane.' },
  { question: 'A reaction that adds H2 across a C=C bond is:', options: ['Hydration', 'Halogenation', 'Hydrogenation', 'Oxidation'], correctAnswer: 2, explanation: 'Hydrogenation adds hydrogen across a double bond, usually with a metal catalyst.' },
  { question: 'SN1 reactions proceed through a:', options: ['Carbanion intermediate', 'Carbocation intermediate', 'Radical chain', 'Concerted transition state only'], correctAnswer: 1, explanation: 'SN1 mechanism forms a carbocation after the leaving group departs.' },
  { question: 'Which is more acidic?', options: ['Ethanol', 'Acetic acid', 'Ethane', 'Methane'], correctAnswer: 1, explanation: 'Carboxylic acids are far more acidic than alcohols and alkanes.' },
  { question: 'The IUPAC suffix for aldehydes is:', options: ['-ol', '-one', '-al', '-oic acid'], correctAnswer: 2, explanation: 'Aldehydes use the suffix -al.' },
  { question: 'A benzene ring has how many pi electrons?', options: ['4', '6', '8', '10'], correctAnswer: 1, explanation: 'Benzene has 6 pi electrons and follows Huckel aromaticity (4n+2, n=1).' },
  { question: 'Which reagent commonly oxidizes a primary alcohol to an aldehyde?', options: ['PCC', 'NaBH4', 'H2/Pd', 'LiAlH4'], correctAnswer: 0, explanation: 'PCC is a mild oxidizer that often stops at the aldehyde stage.' },
  { question: 'A chiral center typically has:', options: ['Four identical groups', 'A double bond', 'Four different substituents', 'A positive charge'], correctAnswer: 2, explanation: 'A tetrahedral carbon with four different substituents is usually chiral.' },
  { question: 'Which mechanism is favored by strong base and heat?', options: ['SN1', 'SN2', 'E1', 'E2'], correctAnswer: 3, explanation: 'Strong base and heat commonly favor concerted E2 elimination.' },
  { question: 'Ketones differ from aldehydes because ketones have:', options: ['Carbonyl bonded to two carbons', 'Terminal carbonyl with H', 'An -OH group', 'A triple bond'], correctAnswer: 0, explanation: 'In ketones, the carbonyl carbon is bonded to two carbon groups.' },
  { question: 'Which spectroscopy method directly reveals molecular mass peaks?', options: ['IR', 'Mass spectrometry', '1H NMR', 'UV-Vis'], correctAnswer: 1, explanation: 'Mass spectrometry provides molecular ion peaks related to molecular mass.' },
]

function dayOfYear(): number {
  const now = new Date()
  const start = new Date(now.getFullYear(), 0, 0)
  const diff = now.getTime() - start.getTime()
  return Math.floor(diff / (1000 * 60 * 60 * 24))
}

export interface OChemDailyQuestion {
  topicSlug: string
  question: Question
  dayNumber: number
}

export function getDailyQuestions(): OChemDailyQuestion[] {
  const day = dayOfYear()
  const q = QUESTION_POOL[day % QUESTION_POOL.length]
  return [{ topicSlug: 'organic-chemistry', question: q, dayNumber: day }]
}
