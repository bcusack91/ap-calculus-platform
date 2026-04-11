'use client';

import { useEffect, useState, use, useCallback, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import AvatarDisplay from '@/components/AvatarDisplay';
import { AvatarData } from '@/types/avatar';
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy';
import 'katex/dist/katex.min.css';

const CompetitiveUnitCircle = dynamic(
  () => import('@/components/CompetitiveUnitCircle'),
  {
    ssr: false,
    loading: () => (
      <div className="animate-pulse rounded-xl bg-gray-100 dark:bg-gray-800 p-8 min-h-[300px] flex items-center justify-center">
        <div className="h-48 w-48 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
    ),
  }
);

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
  player1Avatar?: AvatarData | null;
  player2Avatar?: AvatarData | null;
  player1QuestionIndex: number;
  player2QuestionIndex: number;
  questions: Question[];
  player1Score: number;
  player2Score: number;
  gameData?: {
    aiDifficulty?: 'easy' | 'medium' | 'hard';
    isPracticeMatch?: boolean;
    player1AnsweredCurrent?: boolean;
    player2AnsweredCurrent?: boolean;
    player1Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
    player2Answers?: Array<{ questionIndex: number; answerIndex: number; correct: boolean }>;
    [key: string]: unknown;
  };
  status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING';
  winnerId: string | null;
  startedAt: string;
  completedAt: string | null;
  gameMode?: string;
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
  const searchParams = useSearchParams();
  const lobbyPath = searchParams.get('from')
    ? `/competitive/${searchParams.get('from')}`
    : '/competitive';
  
  const [matchState, setMatchState] = useState<MatchState | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentUserId, setCurrentUserId] = useState<string>('');
  const [selectedPosition, setSelectedPosition] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'correct' | 'incorrect' | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [feedbackQuestionIndex, setFeedbackQuestionIndex] = useState<number | null>(null);
  const [player1Emotion, setPlayer1Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [player2Emotion, setPlayer2Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [showReview, setShowReview] = useState(false);
  const matchStateRef = useRef<MatchState | null>(null);
  const [accuracyTimer, setAccuracyTimer] = useState<number | null>(null);

  // Pre-load KaTeX lazily on mount
  useEffect(() => { preloadKatex() }, []);

  useEffect(() => {
    matchStateRef.current = matchState;
  }, [matchState]);

  const fetchMatchState = useCallback(async () => {
    try {
      const response = await fetch(`/api/competitive/match/${matchId}`);
      if (!response.ok) {
        throw new Error('Failed to fetch match state');
      }
      const data = await response.json();
      const previousState = matchStateRef.current;

      const newIsPlayer1 = data.currentUserId === data.match.player1Id;
      const newPlayerQuestionIndex = newIsPlayer1 ? data.match.player1QuestionIndex : data.match.player2QuestionIndex;
      const oldPlayerQuestionIndex = previousState && (
        data.currentUserId === previousState.player1Id
          ? previousState.player1QuestionIndex
          : previousState.player2QuestionIndex
      );

      if (previousState && newPlayerQuestionIndex !== oldPlayerQuestionIndex) {
        setFeedback(null);
        setFeedbackQuestionIndex(null);
        setSelectedPosition(null);
        setCorrectAnswerIndex(null);
        setIsSubmitting(false);
        setPlayer1Emotion('neutral');
        setPlayer2Emotion('neutral');
      }

      setMatchState(data.match);
      setCurrentUserId(data.currentUserId);
      setLoading(false);

      if (data.match.status === 'COMPLETED' && !previousState?.status) {
        setTimeout(() => {
          // Will show results screen instead
        }, 1000);
      }
    } catch (error) {
      console.error('Error fetching match state:', error);
      setLoading(false);
    }
  }, [matchId]);

  // Fetch initial match state
  useEffect(() => {
    fetchMatchState();
    // Poll every 500ms for updates
    const interval = setInterval(fetchMatchState, 500);
    return () => clearInterval(interval);
  }, [fetchMatchState]);

  // Accuracy mode 5-minute countdown timer + auto-complete on expiry
  const timerCompletedRef = useRef(false);
  useEffect(() => {
    if (!matchState || matchState.gameMode !== 'ACCURACY_CHALLENGE' || matchState.status !== 'IN_PROGRESS') return;
    const ACCURACY_TIME_LIMIT = 5 * 60; // 5 minutes in seconds
    const update = () => {
      const elapsed = Math.floor((Date.now() - new Date(matchState.startedAt).getTime()) / 1000);
      const remaining = Math.max(0, ACCURACY_TIME_LIMIT - elapsed);
      setAccuracyTimer(remaining);
      // Force-complete match when timer expires
      if (remaining === 0 && !timerCompletedRef.current) {
        timerCompletedRef.current = true;
        fetch(`/api/competitive/match/${matchId}/complete`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }).then(() => fetchMatchState()).catch(console.error);
      }
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [matchState?.startedAt, matchState?.gameMode, matchState?.status, matchId, fetchMatchState]);

  // Render math in prompt (for both unit circle and multiple-choice)
  // Handles both $...$ delimited LaTeX and raw LaTeX with backslashes
  const renderPrompt = (text: string) => {
    // Unit circle coordinate format: "Click the position for coordinate \left(...)\right)"
    if (text.includes('\\')) {
      try {
        const match = text.match(/coordinate\s+(.+)$/);
        if (match) {
          const coordLatex = match[1].trim();
          const rendered = renderKatexSync(coordLatex, {
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
      } catch {
        // fall through to $...$ parsing
      }
    }

    // Handle $...$ and $$...$$ delimited LaTeX in mixed text
    if (text.includes('$')) {
      try {
        const parts = text.split(/(\$\$[^$]+\$\$|\$[^$]+\$)/);
        const rendered = parts.map((part, i) => {
          if (part.startsWith('$$') && part.endsWith('$$')) {
            const latex = part.slice(2, -2);
            const html = renderKatexSync(latex, { throwOnError: false, displayMode: true });
            return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
          } else if (part.startsWith('$') && part.endsWith('$')) {
            const latex = part.slice(1, -1);
            const html = renderKatexSync(latex, { throwOnError: false, displayMode: false });
            return <span key={i} dangerouslySetInnerHTML={{ __html: html }} />;
          }
          return <span key={i}>{part}</span>;
        });
        return <span className="inline-flex flex-wrap items-baseline gap-x-1">{rendered}</span>;
      } catch (e) {
        console.error('KaTeX render error:', e);
      }
    }

    // Pure backslash LaTeX without $ delimiters (e.g. \frac{1}{2})
    if (text.includes('\\')) {
      try {
        const html = renderKatexSync(text, { throwOnError: false, displayMode: false });
        return <span dangerouslySetInnerHTML={{ __html: html }} />;
      } catch {
        // fallback to plain text
      }
    }

    return <span>{text}</span>;
  };

  // Auto-schedule AI answers when question changes
  useEffect(() => {
    const activeMatch = matchStateRef.current;
    if (!activeMatch || activeMatch.status !== 'IN_PROGRESS') return;

    const isPlayer1 = currentUserId === activeMatch.player1Id;
    const opponentEmail = isPlayer1 ? activeMatch.player2Email : activeMatch.player1Email;
    
    // Check if opponent is AI
    const isOpponentAI = opponentEmail === 'ai-opponent@studyai.com';
    if (!isOpponentAI) return;

    const opponentQuestionIndex = isPlayer1 ? activeMatch.player2QuestionIndex : activeMatch.player1QuestionIndex;
    const opponentPlayerId = isPlayer1 ? activeMatch.player2Id : activeMatch.player1Id;
    
    // Stop AI if it has answered all questions
    if (opponentQuestionIndex >= activeMatch.questions.length) return;

    // Get AI difficulty and calculate delay
    const aiDifficulty = activeMatch.gameData?.aiDifficulty || 'medium';
    const currentQuestion = activeMatch.questions[opponentQuestionIndex];
    if (!currentQuestion) return;
    const isMultipleChoice = currentQuestion?.type === 'multiple-choice';
    
    // Base timings for unit circle questions
    const difficultySettings = {
      easy: { min: 4000, max: 6000, accuracy: 0.70 },
      medium: { min: 2500, max: 4500, accuracy: 0.83 },
      hard: { min: 1000, max: 2000, accuracy: 0.95 },
    };
    
    const settings = difficultySettings[aiDifficulty as keyof typeof difficultySettings];
    
    // For multiple-choice physics questions, increase timing by 50%
    const minTime = isMultipleChoice ? settings.min * 1.5 : settings.min;
    const maxTime = isMultipleChoice ? settings.max * 1.5 : settings.max;
    const delay = minTime + Math.random() * (maxTime - minTime);
    
    // Schedule AI answer
    const timeoutId = setTimeout(async () => {
      try {
        // Determine if AI answers correctly
        const willAnswerCorrectly = Math.random() < settings.accuracy;
        const aiCurrentQuestion = currentQuestion;
        
        let answerIndex: number;
        if (willAnswerCorrectly) {
          answerIndex = aiCurrentQuestion.answerIndex || 0;
        } else {
          // Choose random wrong answer (for multiple choice, choose different option)
          const totalOptions = aiCurrentQuestion.options?.length || UNIT_CIRCLE_POSITIONS.length;
          do {
            answerIndex = Math.floor(Math.random() * totalOptions);
          } while (answerIndex === (aiCurrentQuestion.answerIndex || 0));
        }
        
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
  }, [
    matchState?.player1QuestionIndex,
    matchState?.player2QuestionIndex,
    matchState?.status,
    currentUserId,
    matchId,
  ]);

  const handlePositionClick = async (positionIndex: number) => {
    await handleAnswer(positionIndex);
  };

  const handleOptionSelect = async (optionIndex: number) => {
    await handleAnswer(optionIndex);
  };

  const handleAnswer = async (answerIndex: number) => {
    if (!matchState) {
      return;
    }
    
    if (isSubmitting) {
      return;
    }
    
    if (matchState.status === 'COMPLETED') {
      return;
    }

    const isPlayer1 = currentUserId === matchState.player1Id;
    const playerQuestionIndex = isPlayer1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex;
    const currentQuestion = matchState.questions[playerQuestionIndex];
    
    // Check if this player already answered the current question
    const alreadyAnswered = isPlayer1
      ? matchState.gameData?.player1AnsweredCurrent
      : matchState.gameData?.player2AnsweredCurrent;
    
    if (alreadyAnswered) {
      return;
    }

    setSelectedPosition(answerIndex);
    setIsSubmitting(true);

    try {
      const _startTime = Date.now();
      
      const response = await fetch(`/api/competitive/match/${matchId}/answer`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          questionIndex: playerQuestionIndex,
          answerIndex: answerIndex,
        }),
      });

      const _endTime = Date.now();

      const data = await response.json();
      
      const isPlayer1 = currentUserId === matchState.player1Id;
      
      if (data.correct) {
        setFeedback('correct');
        setFeedbackQuestionIndex(playerQuestionIndex);
        
        // Set happy emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('happy');
        } else {
          setPlayer2Emotion('happy');
        }
        
        setIsSubmitting(false);
        
        // Wait 1600ms to show feedback, then refresh state for next question
        setTimeout(async () => {
          setFeedback(null);
          setFeedbackQuestionIndex(null);
          setSelectedPosition(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
          // Refresh state to get updated question
          await fetchMatchState();
        }, 1600);
      } else {
        setFeedback('incorrect');
        setFeedbackQuestionIndex(playerQuestionIndex);
        
        // Set sad emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('sad');
        } else {
          setPlayer2Emotion('sad');
        }
        
        // Show correct answer in green for 1600ms
        setCorrectAnswerIndex(currentQuestion.answerIndex || 0);
        setIsSubmitting(false);
        
        // Wait 1600ms to show feedback, then clear and refresh
        setTimeout(async () => {
          setFeedback(null);
          setFeedbackQuestionIndex(null);
          setSelectedPosition(null);
          setCorrectAnswerIndex(null);
          if (isPlayer1) {
            setPlayer1Emotion('neutral');
          } else {
            setPlayer2Emotion('neutral');
          }
          // Refresh match state for next question
          await fetchMatchState();
        }, 1600);
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
            onClick={() => router.push(lobbyPath)}
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
  const currentQuestion = matchState.questions[playerQuestionIndex];
  // Only show feedback styling when it belongs to the current question
  // This prevents the next question's correct answer from flashing green
  // when polling updates matchState before the feedback timeout clears
  const isFeedbackCurrent = feedback !== null && feedbackQuestionIndex === playerQuestionIndex;
  
  // Results screen
  if (matchState.status === 'COMPLETED') {
    const isWinner = matchState.winnerId === currentUserId;
    const isTie = matchState.winnerId === null;
    
    const playerMMRBefore = isPlayer1 ? matchState.player1MMRBefore : matchState.player2MMRBefore;
    const playerMMRAfter = isPlayer1 ? matchState.player1MMRAfter : matchState.player2MMRAfter;
    const mmrChange = playerMMRAfter && playerMMRBefore ? playerMMRAfter - playerMMRBefore : 0;

    // Get this player's answer history for review
    const playerAnswers = isPlayer1
      ? matchState.gameData?.player1Answers || []
      : matchState.gameData?.player2Answers || [];

    // Deduplicate: keep only the last answer per questionIndex (player may have seen the same question multiple times due to cycling)
    const answersByQuestion = new Map<number, { questionIndex: number; answerIndex: number; correct: boolean }>();
    for (const a of playerAnswers) {
      answersByQuestion.set(a.questionIndex, a);
    }

    const missedQuestions = Array.from(answersByQuestion.values()).filter(a => !a.correct);
    const totalAnswered = answersByQuestion.size;
    const totalCorrect = Array.from(answersByQuestion.values()).filter(a => a.correct).length;
    
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 text-center" role="status" aria-live="polite">
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
                {matchState.gameMode === 'ACCURACY_CHALLENGE' && (
                  <p className="text-sm text-gray-500 mt-1">
                    {matchState.player1Score}/{matchState.gameData?.player1Answers?.length || 0} correct &middot; {matchState.gameData?.player1Answers?.length ? Math.round((matchState.player1Score / matchState.gameData.player1Answers.length) * 100) : 0}% accuracy
                  </p>
                )}
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
                {matchState.gameMode === 'ACCURACY_CHALLENGE' && (
                  <p className="text-sm text-gray-500 mt-1">
                    {matchState.player2Score}/{matchState.gameData?.player2Answers?.length || 0} correct &middot; {matchState.gameData?.player2Answers?.length ? Math.round((matchState.player2Score / matchState.gameData.player2Answers.length) * 100) : 0}% accuracy
                  </p>
                )}
              </div>
            </div>

            <div className="flex gap-4 justify-center flex-wrap">
              {missedQuestions.length > 0 && (
                <button
                  onClick={() => setShowReview(!showReview)}
                  className="px-8 py-3 bg-amber-500 text-white rounded-lg hover:bg-amber-600 font-semibold flex items-center gap-2"
                >
                  <span>📝</span>
                  {showReview ? 'Hide Review' : `Review Mistakes (${missedQuestions.length})`}
                </button>
              )}
              {missedQuestions.length === 0 && totalAnswered > 0 && (
                <button
                  onClick={() => setShowReview(!showReview)}
                  className="px-8 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 font-semibold flex items-center gap-2"
                >
                  <span>✨</span>
                  {showReview ? 'Hide Review' : 'Review All Questions'}
                </button>
              )}
              <button
                onClick={() => router.push(lobbyPath)}
                className="px-8 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold"
              >
                Back to Competitive
              </button>
              <button
                onClick={() => router.push(lobbyPath)}
                className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 font-semibold"
              >
                Find New Match
              </button>
            </div>
          </div>

          {/* Question Review Section */}
          {showReview && (
            <div className="mt-8 space-y-6">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Match Review
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  You answered {totalCorrect} out of {totalAnswered} unique questions correctly.
                  {missedQuestions.length > 0 && ' Review the ones you missed below.'}
                </p>

                <div className="space-y-4">
                  {matchState.questions.map((question, qIdx) => {
                    const answer = answersByQuestion.get(qIdx);
                    if (!answer) return null; // Player never saw this question

                    const isMultipleChoice = question.type === 'multiple-choice';
                    const wasCorrect = answer.correct;

                    return (
                      <div
                        key={qIdx}
                        className={`rounded-xl border-2 p-5 transition-all ${
                          wasCorrect
                            ? 'border-green-200 dark:border-green-800 bg-green-50/50 dark:bg-green-900/10'
                            : 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/10'
                        }`}
                      >
                        {/* Question header */}
                        <div className="flex items-start gap-3 mb-3">
                          <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            wasCorrect
                              ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400'
                              : 'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                          }`}>
                            {wasCorrect ? '✓' : '✗'}
                          </span>
                          <div className="flex-1">
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                              Question {qIdx + 1}
                              {question.difficulty && (
                                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs font-medium ${
                                  question.difficulty === 'easy' ? 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400' :
                                  question.difficulty === 'medium' ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400' :
                                  'bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400'
                                }`}>
                                  {question.difficulty}
                                </span>
                              )}
                            </p>
                            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                              {renderPrompt(question.prompt || question.question || '')}
                            </h3>
                          </div>
                        </div>

                        {/* Multiple choice options */}
                        {isMultipleChoice && question.options && (
                          <div className="ml-11 space-y-2 mb-3">
                            {question.options.map((option, optIdx) => {
                              const isUserAnswer = answer.answerIndex === optIdx;
                              const isCorrectAnswer = question.answerIndex === optIdx;

                              return (
                                <div
                                  key={optIdx}
                                  className={`flex items-center gap-3 p-3 rounded-lg text-sm ${
                                    isCorrectAnswer
                                      ? 'bg-green-100 dark:bg-green-900/20 border border-green-300 dark:border-green-700'
                                      : isUserAnswer && !wasCorrect
                                      ? 'bg-red-100 dark:bg-red-900/20 border border-red-300 dark:border-red-700'
                                      : 'bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600'
                                  }`}
                                >
                                  <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-xs font-bold ${
                                    isCorrectAnswer
                                      ? 'border-green-500 text-green-600 dark:text-green-400'
                                      : isUserAnswer && !wasCorrect
                                      ? 'border-red-500 text-red-600 dark:text-red-400'
                                      : 'border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-400'
                                  }`}>
                                    {String.fromCharCode(65 + optIdx)}
                                  </span>
                                  <div className="flex-1 text-gray-900 dark:text-white">
                                    {renderPrompt(option)}
                                  </div>
                                  {isCorrectAnswer && (
                                    <span className="text-green-600 dark:text-green-400 text-sm font-semibold">
                                      ✓ Correct
                                    </span>
                                  )}
                                  {isUserAnswer && !wasCorrect && (
                                    <span className="text-red-600 dark:text-red-400 text-sm font-semibold">
                                      Your answer
                                    </span>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}

                        {/* Unit circle answer display */}
                        {!isMultipleChoice && !wasCorrect && (
                          <div className="ml-11 mb-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 text-sm">
                            <p className="text-gray-900 dark:text-white">
                              <span className="text-red-600 dark:text-red-400 font-semibold">Your answer: </span>
                              {UNIT_CIRCLE_POSITIONS[answer.answerIndex]
                                ? `${UNIT_CIRCLE_POSITIONS[answer.answerIndex].label} (${UNIT_CIRCLE_POSITIONS[answer.answerIndex].x.toFixed(3)}, ${UNIT_CIRCLE_POSITIONS[answer.answerIndex].y.toFixed(3)})`
                                : `Position ${answer.answerIndex}`}
                            </p>
                            <p className="text-gray-900 dark:text-white mt-1">
                              <span className="text-green-600 dark:text-green-400 font-semibold">Correct answer: </span>
                              {question.answerIndex !== undefined && UNIT_CIRCLE_POSITIONS[question.answerIndex]
                                ? `${UNIT_CIRCLE_POSITIONS[question.answerIndex].label} (${UNIT_CIRCLE_POSITIONS[question.answerIndex].x.toFixed(3)}, ${UNIT_CIRCLE_POSITIONS[question.answerIndex].y.toFixed(3)})`
                                : 'Unknown'}
                            </p>
                          </div>
                        )}

                        {/* Explanation */}
                        {question.explanation && !wasCorrect && (
                          <div className="ml-11 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                            <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-1">
                              💡 Explanation
                            </p>
                            <div className="text-sm text-blue-800 dark:text-blue-400">
                              {renderPrompt(question.explanation)}
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
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
                avatarData={matchState.player1Avatar}
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
                <p className="text-xs text-gray-500">{matchState.gameMode === 'ACCURACY_CHALLENGE' ? 'correct' : 'points'}</p>
              </div>
            </div>
            
            {/* Vertical Progress Bar */}
            <div className="mt-6 flex flex-col items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Progress</p>
              <div className="w-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-600 to-purple-400 transition-all duration-500 rounded-full"
                  style={{ height: `${matchState.gameMode === 'ACCURACY_CHALLENGE' ? ((matchState.gameData?.player1Answers?.length || 0) / matchState.questions.length) * 100 : (matchState.player1Score / 10) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{matchState.gameMode === 'ACCURACY_CHALLENGE' ? `${matchState.gameData?.player1Answers?.length || 0}/${matchState.questions.length}` : `${matchState.player1Score}/10`}</p>
            </div>
          </div>

          {/* Center - Game Area */}
          <div className="space-y-6">
        {/* Accuracy Mode Header */}
        {matchState.gameMode === 'ACCURACY_CHALLENGE' && matchState.status === 'IN_PROGRESS' && (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-lg">🎯</span>
              <div>
                <p className="font-bold text-gray-900 dark:text-white text-sm">Accuracy Challenge</p>
                <p className="text-xs text-gray-500">{matchState.questions.length} questions &middot; highest accuracy wins</p>
              </div>
            </div>
            {accuracyTimer !== null && (
              <div className={`text-2xl font-mono font-bold ${accuracyTimer <= 60 ? 'text-red-600 animate-pulse' : 'text-gray-900 dark:text-white'}`}>
                {Math.floor(accuracyTimer / 60)}:{String(accuracyTimer % 60).padStart(2, '0')}
              </div>
            )}
            <div className="text-right">
              <p className="text-xs text-gray-500">Your accuracy</p>
              <p className="font-bold text-purple-600">
                {(() => {
                  const answers = isPlayer1 ? matchState.gameData?.player1Answers : matchState.gameData?.player2Answers;
                  const total = answers?.length || 0;
                  const correct = answers?.filter(a => a.correct).length || 0;
                  return total > 0 ? `${Math.round((correct / total) * 100)}%` : '--';
                })()}
              </p>
            </div>
          </div>
        )}
        {/* Question prompt */}
        {!currentQuestion && matchState.gameMode === 'ACCURACY_CHALLENGE' ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-12 text-center">
            <div className="text-5xl mb-4">✅</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">All Questions Answered!</h2>
            <p className="text-gray-500">Waiting for your opponent to finish...</p>
            <div className="mt-4 animate-pulse text-purple-500">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600" />
            </div>
          </div>
        ) : currentQuestion && (
        <>
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
          {isFeedbackCurrent && (
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
                const showCorrect = isFeedbackCurrent && isCorrect;
                const showIncorrect = isFeedbackCurrent && isSelected && !isCorrect;
                
                return (
                  <button
                    key={index}
                    onClick={() => handleOptionSelect(index)}
                    disabled={isSubmitting || isFeedbackCurrent}
                    className={`w-full p-4 rounded-lg border-2 text-left transition-all ${
                      showCorrect
                        ? 'border-green-500 bg-green-50 dark:bg-green-900/20'
                        : showIncorrect
                        ? 'border-red-500 bg-red-50 dark:bg-red-900/20'
                        : isSelected
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-900/20'
                        : 'border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600'
                    } ${
                      isSubmitting || isFeedbackCurrent
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
            
            {isFeedbackCurrent && currentQuestion.explanation && (
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2">
                  Explanation:
                </p>
                <div className="text-sm text-blue-800 dark:text-blue-400">
                  {renderPrompt(currentQuestion.explanation)}
                </div>
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
                showFeedback={isFeedbackCurrent}
                disabled={isSubmitting}
              />
            </div>
          </div>
        )}
      </>
      )}
      </div>

          {/* Right Panel - Player 2 */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 h-fit sticky top-8">
            <div className="text-center">
              <AvatarDisplay 
                avatarData={matchState.player2Avatar}
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
                <p className="text-xs text-gray-500">{matchState.gameMode === 'ACCURACY_CHALLENGE' ? 'correct' : 'points'}</p>
              </div>
            </div>
            
            {/* Vertical Progress Bar */}
            <div className="mt-6 flex flex-col items-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">Progress</p>
              <div className="w-8 h-64 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden relative">
                <div 
                  className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-blue-600 to-blue-400 transition-all duration-500 rounded-full"
                  style={{ height: `${matchState.gameMode === 'ACCURACY_CHALLENGE' ? ((matchState.gameData?.player2Answers?.length || 0) / matchState.questions.length) * 100 : (matchState.player2Score / 10) * 100}%` }}
                />
              </div>
              <p className="text-xs text-gray-500 mt-2">{matchState.gameMode === 'ACCURACY_CHALLENGE' ? `${matchState.gameData?.player2Answers?.length || 0}/${matchState.questions.length}` : `${matchState.player2Score}/10`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
