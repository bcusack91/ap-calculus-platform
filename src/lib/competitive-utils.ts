// Utility functions for competitive match gameplay

import { getQuestionSet, type CompetitiveQuestion } from '@/data/competitive-questions/reflection-refraction-bank'

interface UnitCirclePosition {
  angle: number;
  x: number;
  y: number;
  label: string;
}

interface Question {
  id: number;
  type: 'find-angle' | 'find-coordinate';
  target: UnitCirclePosition;
  prompt: string;
  answerIndex: number; // Index in UNIT_CIRCLE_POSITIONS array
}

// All 16 unit circle positions
export const UNIT_CIRCLE_POSITIONS: UnitCirclePosition[] = [
  { angle: 0, x: 1, y: 0, label: '0°' },
  { angle: 30, x: Math.sqrt(3)/2, y: 0.5, label: '30°' },
  { angle: 45, x: Math.sqrt(2)/2, y: Math.sqrt(2)/2, label: '45°' },
  { angle: 60, x: 0.5, y: Math.sqrt(3)/2, label: '60°' },
  { angle: 90, x: 0, y: 1, label: '90°' },
  { angle: 120, x: -0.5, y: Math.sqrt(3)/2, label: '120°' },
  { angle: 135, x: -Math.sqrt(2)/2, y: Math.sqrt(2)/2, label: '135°' },
  { angle: 150, x: -Math.sqrt(3)/2, y: 0.5, label: '150°' },
  { angle: 180, x: -1, y: 0, label: '180°' },
  { angle: 210, x: -Math.sqrt(3)/2, y: -0.5, label: '210°' },
  { angle: 225, x: -Math.sqrt(2)/2, y: -Math.sqrt(2)/2, label: '225°' },
  { angle: 240, x: -0.5, y: -Math.sqrt(3)/2, label: '240°' },
  { angle: 270, x: 0, y: -1, label: '270°' },
  { angle: 300, x: 0.5, y: -Math.sqrt(3)/2, label: '300°' },
  { angle: 315, x: Math.sqrt(2)/2, y: -Math.sqrt(2)/2, label: '315°' },
  { angle: 330, x: Math.sqrt(3)/2, y: -0.5, label: '330°' },
];

/**
 * Format coordinate for display with LaTeX
 */
function formatCoordinate(x: number, y: number): string {
  const formatValue = (val: number): string => {
    if (Math.abs(val) < 0.001) return '0';
    if (Math.abs(val - 1) < 0.001) return '1';
    if (Math.abs(val + 1) < 0.001) return '-1';
    if (Math.abs(val - 0.5) < 0.001) return '\\frac{1}{2}';
    if (Math.abs(val + 0.5) < 0.001) return '-\\frac{1}{2}';
    if (Math.abs(val - Math.sqrt(2)/2) < 0.01) return '\\frac{\\sqrt{2}}{2}';
    if (Math.abs(val + Math.sqrt(2)/2) < 0.01) return '-\\frac{\\sqrt{2}}{2}';
    if (Math.abs(val - Math.sqrt(3)/2) < 0.01) return '\\frac{\\sqrt{3}}{2}';
    if (Math.abs(val + Math.sqrt(3)/2) < 0.01) return '-\\frac{\\sqrt{3}}{2}';
    return val.toFixed(2);
  };

  return `\\left(${formatValue(x)}, ${formatValue(y)}\\right)`;
}

/**
 * Generate 10 random questions for a match
 * Ensures variety by mixing angle and coordinate questions
 */
/**
 * Generate 10 random questions for a match
 * Ensures variety by mixing angle and coordinate questions
 */
export function generateMatchQuestions(totalQuestions: number = 10, topicSlug?: string): any[] {
  // If topic is reflection-refraction, use that question bank
  if (topicSlug === 'reflection-refraction') {
    const questions = getQuestionSet(totalQuestions)
    // Map to consistent format with answerIndex and remove non-serializable fields
    return questions.map((q, i) => {
      const { generateQuestion, ...serializableQuestion } = q as any
      return {
        ...serializableQuestion,
        id: i,
        answerIndex: q.correctAnswer, // Map correctAnswer to answerIndex for consistency
        type: 'multiple-choice'
      }
    })
  }
  
  // If cumulative, get mixed questions from both topics
  if (topicSlug === 'cumulative') {
    return generateCumulativeQuestions(totalQuestions)
  }
  
  // Default: unit circle questions
  const questions: Question[] = [];
  const usedIndices = new Set<number>();

  // Ensure we have a mix of question types
  const questionTypes: ('find-angle' | 'find-coordinate')[] = [];
  for (let i = 0; i < totalQuestions; i++) {
    questionTypes.push(i % 2 === 0 ? 'find-angle' : 'find-coordinate');
  }
  
  // Shuffle question types
  for (let i = questionTypes.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questionTypes[i], questionTypes[j]] = [questionTypes[j], questionTypes[i]];
  }

  for (let i = 0; i < totalQuestions; i++) {
    // Pick a random position that hasn't been used yet
    let randomIndex: number;
    do {
      randomIndex = Math.floor(Math.random() * UNIT_CIRCLE_POSITIONS.length);
    } while (usedIndices.has(randomIndex));
    
    usedIndices.add(randomIndex);
    const position = UNIT_CIRCLE_POSITIONS[randomIndex];
    const type = questionTypes[i];

    let prompt: string;
    if (type === 'find-angle') {
      // Given coordinate, find angle
      const coord = formatCoordinate(position.x, position.y);
      prompt = `Click the position for angle ${position.angle}°`;
    } else {
      // Given angle, find coordinate
      const coord = formatCoordinate(position.x, position.y);
      prompt = `Click the position for coordinate ${coord}`;
    }

    questions.push({
      id: i,
      type,
      target: position,
      prompt,
      answerIndex: randomIndex, // Store the correct answer index
    });
  }

  return questions;
}

/**
 * Generate cumulative questions from multiple topics
 */
function generateCumulativeQuestions(totalQuestions: number): any[] {
  const questions: any[] = []
  const questionsPerTopic = Math.floor(totalQuestions / 2)
  
  // Get questions from unit circle
  const unitCircleCount = questionsPerTopic
  const unitCircleQuestions = generateMatchQuestions(unitCircleCount, 'the-unit-circle')
  
  // Get questions from reflection-refraction
  const reflectionCount = totalQuestions - unitCircleCount
  const reflectionQuestions = getQuestionSet(reflectionCount).map((q, i) => {
    const { generateQuestion, ...serializableQuestion } = q as any
    return {
      ...serializableQuestion,
      id: unitCircleCount + i,
      answerIndex: q.correctAnswer,
      type: 'multiple-choice'
    }
  })
  
  // Merge and shuffle
  questions.push(...unitCircleQuestions, ...reflectionQuestions)
  
  // Shuffle the combined questions
  for (let i = questions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [questions[i], questions[j]] = [questions[j], questions[i]]
  }
  
  // Re-index
  questions.forEach((q, i) => q.id = i)
  
  return questions
}

/**
 * Check if the clicked position matches the target
 */
export function checkAnswer(
  clickedIndex: number,
  targetPosition: UnitCirclePosition
): boolean {
  const clicked = UNIT_CIRCLE_POSITIONS[clickedIndex];
  
  // Check if angle matches (with some tolerance for floating point)
  return Math.abs(clicked.angle - targetPosition.angle) < 0.1;
}

/**
 * Calculate Elo MMR change
 */
export function calculateMMRChange(
  playerMMR: number,
  opponentMMR: number,
  playerWon: boolean,
  totalMatches: number
): number {
  // Determine K-factor based on experience
  let kFactor: number;
  if (totalMatches < 10) {
    kFactor = 40; // New players
  } else if (totalMatches < 30) {
    kFactor = 32; // Intermediate
  } else if (playerMMR >= 2000) {
    kFactor = 16; // High-rated players
  } else {
    kFactor = 24; // Experienced players
  }

  // Calculate expected score
  const expectedScore = 1 / (1 + Math.pow(10, (opponentMMR - playerMMR) / 400));
  
  // Actual score (1 for win, 0 for loss, 0.5 for tie - though we don't have ties in this game)
  const actualScore = playerWon ? 1 : 0;
  
  // Calculate MMR change
  const mmrChange = Math.round(kFactor * (actualScore - expectedScore));
  
  return mmrChange;
}

/**
 * Determine rank based on MMR
 */
export function getRankFromMMR(mmr: number): string {
  if (mmr >= 2200) return 'Diamond';
  if (mmr >= 1800) return 'Platinum';
  if (mmr >= 1400) return 'Gold';
  if (mmr >= 1000) return 'Silver';
  return 'Bronze';
}
