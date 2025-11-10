'use client';

import { useEffect, useState, use } from 'react';
import { useRouter } from 'next/navigation';
import CompetitiveUnitCircle from '@/components/CompetitiveUnitCircle';
import katex from 'katex';

interface UnitCirclePosition {
  angle: number; // in degrees
  x: number; // coordinate
  y: number; // coordinate
  label: string; // e.g., "0°", "30°", "(1, 0)", etc.
}

interface Question {
  id: number;
  type: 'find-angle' | 'find-coordinate';
  target: UnitCirclePosition;
  prompt: string;
  answerIndex: number; // Index in UNIT_CIRCLE_POSITIONS array
}

interface MatchState {
  id: string;
  player1Id: string;
  player2Id: string;
  player1Name: string;
  player2Name: string;
  currentQuestionIndex: number;
  questions: Question[];
  player1Score: number;
  player2Score: number;
  player1Answers: (number | null)[];
  player2Answers: (number | null)[];
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
  const [wrongAttempt, setWrongAttempt] = useState(false); // Track if student made a wrong attempt
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null); // Store correct answer after wrong attempt

  // Render math in prompt
  const renderPrompt = (prompt: string) => {
    // Check if prompt contains LaTeX (backslashes or \left, \right, \frac, etc.)
    if (prompt.includes('\\')) {
      try {
        // Extract the coordinate part - everything between "coordinate " and end
        const match = prompt.match(/coordinate\s+(.+)$/);
        if (match) {
          const coordLatex = match[1].trim();
          const rendered = katex.renderToString(coordLatex, {
            throwOnError: false,
            displayMode: false,
          });
          return (
            <div>
              <span>Click the position for coordinate </span>
              <span dangerouslySetInnerHTML={{ __html: rendered }} />
            </div>
          );
        }
      } catch (e) {
        console.error('KaTeX render error:', e);
        console.error('Prompt:', prompt);
      }
    }
    return <span>{prompt}</span>;
  };

  // Fetch initial match state
  useEffect(() => {
    fetchMatchState();
    // Poll every 500ms for updates
    const interval = setInterval(fetchMatchState, 500);
    return () => clearInterval(interval);
  }, [matchId]);

  const fetchMatchState = async () => {
    try {
      const response = await fetch(`/api/competitive/match/${matchId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch match state');
      }
      const data = await response.json();
      
      // Check if question changed - if so, clear ALL feedback states
      if (matchState && data.match.currentQuestionIndex !== matchState.currentQuestionIndex) {
        console.log('🔄 Question changed! Clearing all states. Old:', matchState.currentQuestionIndex, 'New:', data.match.currentQuestionIndex);
        setFeedback(null);
        setSelectedPosition(null);
        setWrongAttempt(false);
        setCorrectAnswerIndex(null);
        setIsSubmitting(false);
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
    console.log('=== CLICK HANDLER TRIGGERED ===');
    console.log('Position clicked:', positionIndex);
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
    const currentQuestion = matchState.questions[matchState.currentQuestionIndex];
    
    console.log('Current question:', currentQuestion);
    console.log('Clicked position index:', positionIndex);
    console.log('Correct answer index:', currentQuestion.answerIndex);
    
    // Check if this player already answered this question
    const playerAnswers = isPlayer1 ? matchState.player1Answers : matchState.player2Answers;
    if (playerAnswers[matchState.currentQuestionIndex] !== null && !wrongAttempt) {
      console.log('Already answered this question');
      return; // Already answered
    }

    console.log('Setting selected position and submitting...');
    setSelectedPosition(positionIndex);
    setIsSubmitting(true);

    try {
      console.log('Sending POST to API...');
      const startTime = Date.now();
      
      const response = await fetch(`/api/competitive/match/${matchId}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionIndex: matchState.currentQuestionIndex,
          answerIndex: positionIndex,
          isSecondAttempt: wrongAttempt, // Tell server this is a retry for half credit
        }),
      });

      const endTime = Date.now();
      console.log(`API response received in ${endTime - startTime}ms`);

      const data = await response.json();
      console.log('Answer response:', data);
      
      if (data.correct) {
        console.log('Answer was CORRECT!');
        setFeedback('correct');
        setWrongAttempt(false);
        setCorrectAnswerIndex(null);
        // Refresh state to see if we got the point
        await fetchMatchState();
        
        // Keep the green color showing - don't clear feedback or selectedPosition
        // They'll be cleared when moving to next question
        setIsSubmitting(false);
      } else {
        console.log('Answer was INCORRECT');
        setFeedback('incorrect');
        
        if (!wrongAttempt) {
          console.log('First wrong attempt - showing correct answer');
          // First wrong attempt - show correct answer and allow retry
          setWrongAttempt(true);
          setCorrectAnswerIndex(currentQuestion.answerIndex);
          
          // Clear the red feedback after 1 second but keep the question active
          setTimeout(() => {
            setFeedback(null);
            setIsSubmitting(false);
          }, 1000);
        } else {
          console.log('Second wrong attempt - moving on');
          // Second wrong attempt - move on without points
          setWrongAttempt(false);
          setCorrectAnswerIndex(null);
          await fetchMatchState();
          
          setTimeout(() => {
            setFeedback(null);
            setSelectedPosition(null);
            setIsSubmitting(false);
          }, 1500);
        }
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
  const currentQuestion = matchState.questions[matchState.currentQuestionIndex];
  const playerAnswers = isPlayer1 ? matchState.player1Answers : matchState.player2Answers;
  const hasAnswered = playerAnswers[matchState.currentQuestionIndex] !== null;

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
      <div className="max-w-6xl mx-auto">
        {/* Header with scores */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6">
          <div className="grid grid-cols-3 gap-4 items-center">
            {/* Player 1 */}
            <div className={`text-center p-4 rounded-lg ${
              isPlayer1 ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {isPlayer1 ? 'You' : 'Opponent'}
              </p>
              <p className="font-bold text-gray-900 dark:text-white mb-2">
                {matchState.player1Name}
              </p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {matchState.player1Score}
              </p>
            </div>

            {/* Question progress */}
            <div className="text-center">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Question</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {matchState.currentQuestionIndex + 1} / {matchState.questions.length}
              </p>
            </div>

            {/* Player 2 */}
            <div className={`text-center p-4 rounded-lg ${
              !isPlayer1 ? 'bg-purple-100 dark:bg-purple-900/30' : 'bg-gray-100 dark:bg-gray-700'
            }`}>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {!isPlayer1 ? 'You' : 'Opponent'}
              </p>
              <p className="font-bold text-gray-900 dark:text-white mb-2">
                {matchState.player2Name}
              </p>
              <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">
                {matchState.player2Score}
              </p>
            </div>
          </div>
        </div>

        {/* Question prompt */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-6 text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            {renderPrompt(currentQuestion.prompt)}
          </h2>
          
          {isSubmitting && (
            <div className="flex items-center justify-center gap-2 text-purple-600">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-600"></div>
              <p className="font-semibold">Submitting answer...</p>
            </div>
          )}
          {!isSubmitting && hasAnswered && !wrongAttempt && (
            <p className="text-gray-600 dark:text-gray-400">
              Waiting for opponent...
            </p>
          )}
          {feedback && (
            <p className={`text-xl font-semibold ${
              feedback === 'correct' ? 'text-green-600' : 'text-red-600'
            }`}>
              {feedback === 'correct' ? '✓ Correct!' : '✗ Incorrect'}
            </p>
          )}
        </div>

        {/* Unit Circle */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          {wrongAttempt && correctAnswerIndex !== null && (
            <div className="text-center mb-4 p-4 bg-yellow-100 dark:bg-yellow-900/30 rounded-lg">
              <p className="text-yellow-800 dark:text-yellow-200 font-semibold">
                Try again for half credit! The correct answer is highlighted in green.
              </p>
            </div>
          )}
          <div className="flex justify-center">
            <CompetitiveUnitCircle
              positions={UNIT_CIRCLE_POSITIONS}
              onPositionClick={handlePositionClick}
              selectedPosition={selectedPosition}
              correctPosition={
                wrongAttempt ? correctAnswerIndex : 
                (feedback === 'correct' ? selectedPosition : null)
              }
              showFeedback={feedback !== null || wrongAttempt}
              disabled={isSubmitting || (hasAnswered && !wrongAttempt)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
