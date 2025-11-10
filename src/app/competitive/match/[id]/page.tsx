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
  player1Avatar?: any;
  player2Avatar?: any;
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
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [player1Emotion, setPlayer1Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [player2Emotion, setPlayer2Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');

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
            displayMode: true, // Use display mode for better fraction rendering
          });
          return (
            <div className="flex items-center justify-center gap-2">
              <span>Click the position for coordinate</span>
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
    if (playerAnswers[matchState.currentQuestionIndex] !== null) {
      console.log('Already answered this question');
      return;
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
        
        // Refresh state to get updated scores
        await fetchMatchState();
        
        // Show green and happy face for 1 second, then clear
        setTimeout(() => {
          setFeedback(null);
          setSelectedPosition(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
        }, 1000);
      } else {
        console.log('Answer was INCORRECT');
        setFeedback('incorrect');
        
        // Set sad emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('sad');
        } else {
          setPlayer2Emotion('sad');
        }
        
        // Show correct answer in green for 1 second
        setCorrectAnswerIndex(currentQuestion.answerIndex);
        setIsSubmitting(false);
        
        // Refresh match state
        await fetchMatchState();
        
        // Clear after 1 second
        setTimeout(() => {
          setFeedback(null);
          setSelectedPosition(null);
          setCorrectAnswerIndex(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
        }, 1000);
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
          {!isSubmitting && hasAnswered && (
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
              disabled={isSubmitting || hasAnswered}
            />
          </div>
        </div>
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
