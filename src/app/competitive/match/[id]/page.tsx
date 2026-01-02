'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import CompetitiveUnitCircle from '@/components/CompetitiveUnitCircle';
import AvatarDisplay from '@/components/AvatarDisplay';
import katex from 'katex';
import 'katex/dist/katex.min.css';

interface UnitCirclePosition {
  angle: number; // in degrees
  x: number; // coordinate
  y: number; // coordinate
  label: string; // e.g., "0°", "30°", "(1, 0)", etc.
}

interface Question {
  id: number;
  type?: 'find-angle' | 'find-coordinate' | 'multiple-choice';
  target?: UnitCirclePosition;
  prompt?: string;
  answerIndex?: number; // Index in UNIT_CIRCLE_POSITIONS array for unit circle, or correct option for multiple-choice
  // Multiple-choice specific fields
  question?: string;
  options?: string[];
  correctAnswer?: string;
  explanation?: string;
  difficulty?: 'easy' | 'medium' | 'hard';
  category?: string;
}

interface MatchState {
  id: string;
  player1Id: string;
  player2Id: string;
  player1Name: string;
  player2Name: string;
  player1Email?: string;
  player2Email?: string;
  player1Avatar?: any;
  player2Avatar?: any;
  player1QuestionIndex: number;
  player2QuestionIndex: number;
  questions: Question[];
  player1Score: number;
  player2Score: number;
  gameData?: any;
  status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING';
  winnerId: string | null;
  startedAt: string;
  completedAt: string | null;
  player1MMRBefore?: number;
  player2MMRBefore?: number;
  player1MMRAfter?: number;
  player2MMRAfter?: number;
}

// All 16 unit circle positions
const UNIT_CIRCLE_POSITIONS: UnitCirclePosition[] = [
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

export default function CompetitiveMatchPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const matchId = resolvedParams.id;
  const router = useRouter();
  
  const [matchState, setMatchState] = useState<MatchState | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [player1Emotion, setPlayer1Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [player2Emotion, setPlayer2Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');

  // Render math in prompt (for both unit circle and multiple-choice)
  const renderPrompt = (text: string) => {
    // Check if prompt contains LaTeX (backslashes or \left, \right, \frac, etc.)
    if (text.includes('\\')) {
      try {
        // Try to render the LaTeX content
        // First check if it's the unit circle coordinate format
        const match = text.match(/coordinate\s+(.+)$/);
        if (match) {
          const coordLatex = match[1].trim();
          const rendered = katex.renderToString(coordLatex, {
            throwOnError: false,
            displayMode: true,
          });
          return (
            <div className="flex items-center justify-center gap-2">
              <span>Click the position for coordinate</span>
              <span dangerouslySetInnerHTML={{ __html: rendered }} />
            </div>
          );
        }
        
        // For multiple-choice questions, render inline LaTeX
        const rendered = katex.renderToString(text, {
          throwOnError: false,
          displayMode: false,
        });
        return <span dangerouslySetInnerHTML={{ __html: rendered }} />;
      } catch (e) {
        console.error('KaTeX render error:', e);
        console.error('Text:', text);
      }
    }
    return <span>{text}</span>;
  };

  // Fetch initial match state
  useEffect(() => {
    fetchMatchState();
    // Poll every 500ms for updates
    const interval = setInterval(fetchMatchState, 500);
    return () => clearInterval(interval);
  }, [matchId]);

  // Auto-schedule AI answers when question changes
  useEffect(() => {
    if (!matchState || matchState.status !== 'IN_PROGRESS') return;

    const isPlayer1 = currentUserId === matchState.player1Id;
    const opponentEmail = isPlayer1 ? matchState.player2Email : matchState.player1Email;
    
    // Check if opponent is AI
    const isOpponentAI = opponentEmail === 'ai-opponent@studyai.com';
    if (!isOpponentAI) return;

    const opponentQuestionIndex = isPlayer1 ? matchState.player2QuestionIndex : matchState.player1QuestionIndex;
    const opponentPlayerId = isPlayer1 ? matchState.player2Id : matchState.player1Id;
    
    // Get AI difficulty and calculate delay
    const aiDifficulty = (matchState.gameData as any)?.aiDifficulty || 'medium';
    const difficultySettings = {
      easy: { min: 4000, max: 6000, accuracy: 0.70 },
      medium: { min: 2500, max: 4500, accuracy: 0.83 },
      hard: { min: 1000, max: 2000, accuracy: 0.95 },
    };
    
    const settings = difficultySettings[aiDifficulty as keyof typeof difficultySettings];
    const delay = settings.min + Math.random() * (settings.max - settings.min);
    
    console.log(`🤖 Scheduling AI answer in ${Math.round(delay)}ms for AI question ${opponentQuestionIndex}`);
    
    // Schedule AI answer
    const timeoutId = setTimeout(async () => {
      try {
        // Determine if AI answers correctly
        const willAnswerCorrectly = Math.random() < settings.accuracy;
        const aiCurrentQuestion = matchState.questions[opponentQuestionIndex];
        
        let answerIndex: number;
        if (willAnswerCorrectly) {
          answerIndex = aiCurrentQuestion.answerIndex;
        } else {
          // Choose random wrong answer
          do {
            answerIndex = Math.floor(Math.random() * UNIT_CIRCLE_POSITIONS.length);
          } while (answerIndex === aiCurrentQuestion.answerIndex);
        }
        
        console.log(`🤖 AI submitting answer for question ${opponentQuestionIndex}: ${answerIndex} (correct: ${aiCurrentQuestion.answerIndex})`);
        
        // Submit AI answer with AI's playerId
        await fetch(`/api/competitive/match/${matchId}/answer`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionIndex: opponentQuestionIndex,
            answerIndex,
            playerId: opponentPlayerId, // Specify AI player ID
          }),
        });
        
        // Match state will update via polling
      } catch (error) {
        console.error('Error submitting AI answer:', error);
      }
    }, delay);
    
    // Cleanup timeout if question changes or component unmounts
    return () => clearTimeout(timeoutId);
  }, [matchState?.player1QuestionIndex, matchState?.player2QuestionIndex, matchState?.status, currentUserId, matchId]);


  const fetchMatchState = async () => {
    try {
      const response = await fetch(`/api/competitive/match/${matchId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch match state');
      }
      const data = await response.json();
      
      // Check if player's question changed - if so, clear feedback states
      const newIsPlayer1 = data.currentUserId === data.match.player1Id;
      const newPlayerQuestionIndex = newIsPlayer1 ? data.match.player1QuestionIndex : data.match.player2QuestionIndex;
      const oldPlayerQuestionIndex = matchState && (data.currentUserId === matchState.player1Id ? matchState.player1QuestionIndex : matchState.player2QuestionIndex);
      
      if (matchState && newPlayerQuestionIndex !== oldPlayerQuestionIndex) {
        console.log('🔄 Question changed! Clearing all states. Old:', oldPlayerQuestionIndex, 'New:', newPlayerQuestionIndex);
        setFeedback(null);
        setSelectedPosition(null);
        setCorrectAnswerIndex(null);
        setIsSubmitting(false);
        setPlayer1Emotion('neutral');
        setPlayer2Emotion('neutral');
      }
      
      setMatchState(data.match);
      setCurrentUserId(data.currentUserId);
      setLoading(false);

      // If match is completed, redirect to results after a delay
      if (data.match.status === 'COMPLETED' && !matchState?.status) {
        setTimeout(() => {
          // Will show results screen instead
        }, 1000);
      }
    } catch (error) {
      console.error('Error fetching match state:', error);
      setLoading(false);
    }
  };

  const handlePositionClick = async (positionIndex: number) => {
    await handleAnswer(positionIndex);
  };

  const handleOptionSelect = async (optionIndex: number) => {
    await handleAnswer(optionIndex);
  };

  const handleAnswer = async (answerIndex: number) => {
    console.log('=== ANSWER HANDLER TRIGGERED ===');
    console.log('Answer index:', answerIndex);
    console.log('Match state exists:', !!matchState);
    console.log('Is submitting:', isSubmitting);
    console.log('Match status:', matchState?.status);
    
    if (!matchState) {
      console.log('No match state - returning');
      return;
    }
    
    if (isSubmitting) {
      console.log('Already submitting - returning');
      return;
    }
    
    if (matchState.status === 'COMPLETED') {
      console.log('Match completed - returning');
      return;
    }

    const isPlayer1 = currentUserId === matchState.player1Id;
    const playerQuestionIndex = isPlayer1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex;
    const currentQuestion = matchState.questions[playerQuestionIndex];
    
    console.log('Current question:', currentQuestion);
    console.log('Answered with index:', answerIndex);
    console.log('Correct answer:', currentQuestion.answerIndex || currentQuestion.correctAnswer);
    
    // Check if this player already answered the current question
    const alreadyAnswered = isPlayer1 ? 
      (matchState.gameData as any)?.player1AnsweredCurrent : 
      (matchState.gameData as any)?.player2AnsweredCurrent;
    
    if (alreadyAnswered) {
      console.log('Already answered this question');
      return;
    }

    console.log('Setting selected position and submitting...');
    setSelectedPosition(answerIndex);
    setIsSubmitting(true);

    try {
      console.log('Sending POST to API...');
      const startTime = Date.now();
      
      const response = await fetch(`/api/competitive/match/${matchId}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionIndex: playerQuestionIndex,
          answerIndex: answerIndex,
        }),
      });

      const endTime = Date.now();
      console.log(`API response received in ${endTime - startTime}ms`);

      const data = await response.json();
      console.log('Answer response:', data);
      
      const isPlayer1 = currentUserId === matchState.player1Id;
      
      if (data.correct) {
        console.log('Answer was CORRECT!');
        setFeedback('correct');
        
        // Set happy emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('happy');
        } else {
          setPlayer2Emotion('happy');
        }
        
        setIsSubmitting(false);
        
        // Wait 800ms to show feedback, then refresh state for next question
        setTimeout(async () => {
          setFeedback(null);
          setSelectedPosition(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
          // Refresh state to get updated question
          await fetchMatchState();
        }, 800);
      } else {
        console.log('Answer was INCORRECT');
        setFeedback('incorrect');
        
        // Set sad emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('sad');
        } else {
          setPlayer2Emotion('sad');
        }
        
        // Show correct answer in green for 800ms
        setCorrectAnswerIndex(currentQuestion.answerIndex);
        setIsSubmitting(false);
        
        // Wait 800ms to show feedback, then clear and refresh
        setTimeout(async () => {
          setFeedback(null);
          setSelectedPosition(null);
          setCorrectAnswerIndex(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
          // Refresh match state for next question
          await fetchMatchState();
        }, 800);
      }
    } catch (error) {
      console.error('ERROR submitting answer:', error);
      setIsSubmitting(false);
      setSelectedPosition(null);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-purple-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Loading match...</p>
        </div>
      </div>
    );
  }

  if (!matchState) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400">Match not found</p>
          <button
            onClick={() => router.push('/competitive')}
            className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
          >
            Back to Competitive
          </button>
        </div>
      </div>
    );
  }

  const isPlayer1 = currentUserId === matchState.player1Id;
  const playerQuestionIndex = isPlayer1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex;
  const opponentQuestionIndex = isPlayer1 ? matchState.player2QuestionIndex : matchState.player1QuestionIndex;
  const currentQuestion = matchState.questions[playerQuestionIndex];
  
  // Results screen
  if (matchState.status === 'COMPLETED') {
    const isWinner = matchState.winnerId === currentUserId;
    const isTie = matchState.winnerId === null;
    
    const playerMMRBefore = isPlayer1 ? matchState.player1MMRBefore : matchState.player2MMRBefore;
    const playerMMRAfter = isPlayer1 ? matchState.player1MMRAfter : matchState.player2MMRAfter;
    const mmrChange = playerMMRAfter && playerMMRBefore ? playerMMRAfter - playerMMRBefore : 0;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center">
            <h1 className={`text-4xl font-bold mb-4 ${
              isTie ? 'text-gray-600 dark:text-gray-400' :
              isWinner ? 'text-green-600 dark:text-green-400' : 
              'text-red-600 dark:text-red-400'
            }`}>
              {isTie ? "It's a Tie!" : isWinner ? 'Victory!' : 'Defeat'}
            </h1>

            {/* MMR Change Display */}
            {mmrChange !== 0 && (
              <div className="mb-6">
                <p className="text-gray-600 dark:text-gray-400 mb-2">MMR Change</p>
                <p className={`text-3xl font-bold ${
                  mmrChange > 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {mmrChange > 0 ? '+' : ''}{mmrChange}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {playerMMRBefore} → {playerMMRAfter}
                </p>
              </div>
            )}

            <div className="grid grid-cols-2 gap-8 my-8">
              <div className={`p-6 rounded-xl ${
                isPlayer1 ? 'bg-purple-100 dark:bg-purple-900/30 ring-2 ring-purple-500' : 
                'bg-gray-100 dark:bg-gray-700'
              }`}>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {isPlayer1 ? 'You' : 'Opponent'}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {matchState.player1Name}
                </p>
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {matchState.player1Score}
                </p>
              </div>

              <div className={`p-6 rounded-xl ${
                !isPlayer1 ? 'bg-purple-100 dark:bg-purple-900/30 ring-2 ring-purple-500' : 
                'bg-gray-100 dark:bg-gray-700'
              }`}>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {!isPlayer1 ? 'You' : 'Opponent'}
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                  {matchState.player2Name}
                </p>
                <p className="text-4xl font-bold text-purple-600 dark:text-purple-400">
                  {matchState.player2Score}
                </p>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button
                onClick={() => router.push('/competitive')}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
              >
                Back to Competitive
              </button>
              <button
                onClick={() => router.push('/competitive')}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold"
              >
                Find New Match
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-[200px_1fr_200px] gap-6">
          {/* Left Panel - Player 1 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-fit sticky top-8">
            <div className="text-center">
              <AvatarDisplay 
                avatarData={matchState.player1Avatar as any}
                size={120}
                className="mx-auto mb-3"
                emotion={player1Emotion}
              />
              <p className="font-bold text-gray-900 dark:text-white mb-1">
                {matchState.player1Name}
              </p>
              {isPlayer1 && (
                <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                  You
                </span>
              )}
              <div className="mt-4 mb-2">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {matchState.player1Score}
                </p>
                <p className="text-xs text-gray-500">points</p>
              </div>
            </div>
            
            {/* Vertical Progress Bar */}
            <div className="mt-6 flex flex-col items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Progress</p>
              <div className="w-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-500 rounded-full"
                  style={{ height: `${(matchState.player1Score / 10) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{matchState.player1Score}/10</p>
            </div>
          </div>

          {/* Center - Game Area */}
          <div className="space-y-6">
        {/* Question prompt */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 text-center" key={`q-${playerQuestionIndex}-${currentQuestion.prompt || currentQuestion.question}`}>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4" key={currentQuestion.prompt || currentQuestion.question}>
            {renderPrompt(currentQuestion.prompt || currentQuestion.question || '')}
          </h2>
          
          {isSubmitting && (
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <p className="font-semibold">Submitting answer...</p>
            </div>
          )}
          {feedback && (
            <p className={`text-xl font-semibold ${
              feedback === 'correct' ? 'text-green-600' : 'text-red-600'
            }`}>
              {feedback === 'correct' ? '✓ Correct!' : '✗ Incorrect'}
            </p>
          )}
        </div>

        {/* Unit Circle or Multiple Choice */}
        {currentQuestion.type === 'multiple-choice' ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="space-y-3 max-w-2xl mx-auto">
              {currentQuestion.options?.map((option, index) => {
                const isSelected = selectedPosition === index;
                const isCorrect = index === currentQuestion.answerIndex;
                const showCorrect = feedback !== null && isCorrect;
                const showIncorrect = feedback !== null && isSelected && !isCorrect;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isSubmitting || feedback !== null}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : isSelected
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                    } ${
                      isSubmitting || feedback !== null
                        ? 'cursor-not-allowed opacity-75'
                        : 'cursor-pointer hover:shadow-md'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold ${
                        showCorrect
                          ? 'border-green-500 text-green-600 dark:text-green-400'
                          : showIncorrect
                          ? 'border-red-500 text-red-600 dark:text-red-400'
                          : isSelected
                          ? 'border-purple-500 text-purple-600 dark:text-purple-400'
                          : 'border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-400'
                      }`}>
                        {String.fromCharCode(65 + index)}
                      </div>
                      <div className="flex-1 text-gray-900 dark:text-white">
                        {renderPrompt(option)}
                      </div>
                      {showCorrect && (
                        <div className="text-green-600 dark:text-green-400 text-xl">✓</div>
                      )}
                      {showIncorrect && (
                        <div className="text-red-600 dark:text-red-400 text-xl">✗</div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {feedback && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Explanation:
                </p>
                <p className="text-sm text-blue-800 dark:text-blue-400">
                  {currentQuestion.explanation}
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="flex justify-center">
              <CompetitiveUnitCircle
                positions={UNIT_CIRCLE_POSITIONS}
                onPositionClick={handlePositionClick}
                selectedPosition={selectedPosition}
                correctPosition={
                  correctAnswerIndex !== null ? correctAnswerIndex :
                  (feedback === 'correct' ? selectedPosition : null)
                }
                showFeedback={feedback !== null}
                disabled={isSubmitting}
              />
            </div>
          </div>
        )}
      </div>

          {/* Right Panel - Player 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-fit sticky top-8">
            <div className="text-center">
              <AvatarDisplay 
                avatarData={matchState.player2Avatar as any}
                size={120}
                className="mx-auto mb-3"
                emotion={player2Emotion}
              />
              <p className="font-bold text-gray-900 dark:text-white mb-1">
                {matchState.player2Name}
              </p>
              {!isPlayer1 && (
                <span className="text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 px-2 py-1 rounded">
                  You
                </span>
              )}
              <div className="mt-4 mb-2">
                <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                  {matchState.player2Score}
                </p>
                <p className="text-xs text-gray-500">points</p>
              </div>
            </div>
            
            {/* Vertical Progress Bar */}
            <div className="mt-6 flex flex-col items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Progress</p>
              <div className="w-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-500 rounded-full"
                  style={{ height: `${(matchState.player2Score / 10) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{matchState.player2Score}/10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
