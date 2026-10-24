'use client';

import { useEffect, useState, use, useCallback, useMemo, useRef } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import {
  Check,
  X,
  Target,
  CheckCircle2,
  Lightbulb,
  ClipboardList,
  Sparkles,
  ArrowRight,
  RotateCcw,
} from 'lucide-react';
import { CosmeticNameplate } from '@/components/PowerUps';
import { AvatarData } from '@/types/avatar';
import { renderKatexSync, preloadKatex } from '@/lib/katex-lazy';
import { CompetitiveRichText } from '@/components/competitive/CompetitiveRichText';
import { POWER_UPS, activeEffects, type ActiveEffect, type PowerUpId, type PowerUpsState } from '@/lib/chaos-powerups';
import { ingestEffects } from '@/lib/chaos-arrival';
import { planBotMove, matchTimeLimitSeconds, formatMinutes } from '@/lib/bot-pacing';
import {
  PowerUpBar,
  InkSplatOverlay,
  DarkOverlay,
  StormOverlay,
  FrostOverlay,
  TimeWarpOverlay,
  ChaosToasts,
  useChaosNow,
  type ChaosToast,
} from '@/components/ChaosMode';
import { GAME_MODE_CARDS } from '@/lib/competitive-modes';
import { COMPETITIVE_COURSES } from '@/lib/competitive-catalog';
import {
  VersusHeader,
  ModeChip,
  MatchClock,
  QuestionCard,
  AnswerTile,
  useAnswerHotkeys,
  ResultHero,
  FinalScore,
  RankDelta,
  StatTile,
  rankBadge,
  bestStreakOf,
  answerGridClass,
  BOT_BADGE_CLASS,
  type AnswerState,
  type Outcome,
} from '@/components/competitive/arena/Arena';
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
  skill?: string; // Official SAT skill this question targets (student-facing)
  expectedSeconds?: number; // Expected student solve time, stamped at creation (bot-pacing.ts)
}

interface MatchState {
  id: string;
  player1Id: string;
  player2Id: string;
  player1Name: string;
  player2Name: string;
  player1IsAI?: boolean;
  player2IsAI?: boolean;
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
    lobbyCode?: string;
    powerUps?: PowerUpsState;
    [key: string]: unknown;
  };
  status: 'IN_PROGRESS' | 'COMPLETED' | 'PENDING';
  winnerId: string | null;
  startedAt: string;
  completedAt: string | null;
  gameMode?: string;
  topicSlug?: string;
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
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [feedbackQuestionIndex, setFeedbackQuestionIndex] = useState<number | null>(null);
  const [player1Emotion, setPlayer1Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [player2Emotion, setPlayer2Emotion] = useState<'neutral' | 'happy' | 'sad'>('neutral');
  const [showReview, setShowReview] = useState(false);
  const matchStateRef = useRef<MatchState | null>(null);
  const [accuracyTimer, setAccuracyTimer] = useState<number | null>(null);

  // ---- Answer-feedback signal state ----
  // Consecutive-correct streak (client-side, per session on this page).
  const [streak, setStreak] = useState(0);
  // "+N pts" flash after a correct answer; key retriggers the pop animation.
  const [pointsFlash, setPointsFlash] = useState<{ key: number; points: number } | null>(null);
  // Wrong-answer explanation hold (practice matches only): while non-null, the
  // question card stays on this index and the poll won't clear the feedback,
  // so the player can actually read the explanation before tapping Next.
  const [heldFeedbackIndex, setHeldFeedbackIndex] = useState<number | null>(null);
  const feedbackHoldRef = useRef(false);
  const [showNextButton, setShowNextButton] = useState(false);

  // ---- Chaos Mode state ----
  const [chaosToasts, setChaosToasts] = useState<ChaosToast[]>([]);
  const [fiftyFiftyElim, setFiftyFiftyElim] = useState<{ questionIndex: number; eliminated: number[] } | null>(null);
  const [displayOrder, setDisplayOrder] = useState<number[] | null>(null);
  const [usingPowerUp, setUsingPowerUp] = useState(false);
  const seenEffectIds = useRef<Set<string>>(new Set());
  // Effects on this player as this screen runs them: attacks are timed from
  // when they ARRIVED here, not from when they were fired (server clock), so
  // the 500ms poll and any device-clock drift no longer shorten them, and they
  // stay up after the server prunes them (see chaos-arrival.ts).
  const arrivedEffectIds = useRef<Set<string>>(new Set());
  const heldEffects = useRef<ActiveEffect[]>([]);
  const [chaosEffects, setChaosEffects] = useState<ActiveEffect[]>([]);
  // Practice-bot power-up pacing: `botFireLock` is a timestamp the bot won't
  // fire before (covers the in-flight request + the 500ms poll catching up, so
  // one drop can't be spent twice); `botFailed` backs off items the server
  // rejected (e.g. 50/50 on a question with too few options gets refunded).
  const botFireLockRef = useRef<number>(0);
  const botFailedRef = useRef<Map<PowerUpId, number>>(new Map());

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

      // While an explanation hold is active (practice matches), the server has
      // already advanced the index — don't let the poll wipe the feedback the
      // player is still reading; advanceAfterFeedback clears it instead.
      if (previousState && newPlayerQuestionIndex !== oldPlayerQuestionIndex && !feedbackHoldRef.current) {
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
      if (data.match.gameMode === 'CHAOS') {
        const mineNow = newIsPlayer1 ? data.match.gameData?.powerUps?.player1 : data.match.gameData?.powerUps?.player2;
        heldEffects.current = ingestEffects(heldEffects.current, mineNow?.effects, Date.now(), arrivedEffectIds.current).effects;
        setChaosEffects(heldEffects.current);
      }
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

  // Accuracy mode countdown timer + auto-complete on expiry. The clock is the
  // match's own (gameData.timeLimitSeconds, set from the questions' pacing at
  // creation); matches created before pacing keep the legacy 5 minutes. The
  // server enforces the same number (answer + complete routes).
  const timerCompletedRef = useRef(false);
  useEffect(() => {
    if (!matchState || matchState.gameMode !== 'ACCURACY_CHALLENGE' || matchState.status !== 'IN_PROGRESS') return;
    const ACCURACY_TIME_LIMIT = matchTimeLimitSeconds(matchState.gameData);
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

  // ---- Chaos Mode derivations + effects ----
  const isChaosMode = matchState?.gameMode === 'CHAOS';
  const amPlayer1 = !!matchState && currentUserId === matchState.player1Id;
  const myPowerUps = isChaosMode
    ? (amPlayer1 ? matchState?.gameData?.powerUps?.player1 : matchState?.gameData?.powerUps?.player2)
    : undefined;
  const chaosNow = useChaosNow(chaosEffects);
  const myEffectsList = chaosEffects;
  const myActiveEffects = useMemo(
    () => (isChaosMode ? activeEffects(myEffectsList, chaosNow) : []),
    [isChaosMode, myEffectsList, chaosNow]
  );
  const stormEffect = myActiveEffects.find((e) => e.type === 'chaos-storm') || null;
  const flipActive = myActiveEffects.some((e) => e.type === 'screen-flip');
  const fogActive = myActiveEffects.some((e) => e.type === 'fog');
  const slipperyActive = myActiveEffects.some((e) => e.type === 'slippery');
  const inkEffect = myActiveEffects.find((e) => e.type === 'ink-splat') || null;
  const blackoutEffect = myActiveEffects.find((e) => e.type === 'blackout') || null;
  const freezeEffect = myActiveEffects.find((e) => e.type === 'freeze') || null;
  const timeWarpEffect = myActiveEffects.find((e) => e.type === 'time-warp') || null;
  // Freeze locks the player out of answering for its duration.
  const frozenActive = !!freezeEffect;
  // Earthquake and the Chaos Storm super both shake the game area.
  const shakeActive = myActiveEffects.some((e) => e.type === 'earthquake' || e.type === 'chaos-storm');

  const myQuestionIndexLive = matchState
    ? (amPlayer1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex)
    : 0;
  const myCurrentOptionCount = matchState?.questions?.[myQuestionIndexLive]?.options?.length ?? 0;

  const addChaosToast = useCallback((text: string) => {
    const id = `${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
    setChaosToasts((t) => [...t, { id, text }]);
    setTimeout(() => setChaosToasts((t) => t.filter((x) => x.id !== id)), 2600);
  }, []);

  // Toast INCOMING ATTACKS as they arrive via polling (each effect id toasts
  // once). Self-buff effects (e.g. Time Warp) are skipped here — their toast is
  // fired by the use-handler instead ("from" would be the player themselves).
  useEffect(() => {
    for (const e of myActiveEffects) {
      if (!seenEffectIds.current.has(e.id)) {
        seenEffectIds.current.add(e.id);
        const def = POWER_UPS[e.type];
        if (def.kind === 'attack') addChaosToast(`${def.icon} ${def.name} from ${e.from}!`);
      }
    }
  }, [myActiveEffects, addChaosToast]);

  // Slippery Answers: re-shuffle the DISPLAYED option order every 800ms while
  // active. Presentation-only — submissions always use the original index.
  useEffect(() => {
    if (!slipperyActive || myCurrentOptionCount < 2) {
      setDisplayOrder(null);
      return;
    }
    const shuffle = () =>
      setDisplayOrder(() => {
        const a = Array.from({ length: myCurrentOptionCount }, (_, i) => i);
        for (let i = a.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
      });
    shuffle();
    const t = setInterval(shuffle, 800);
    return () => {
      clearInterval(t);
      setDisplayOrder(null);
    };
  }, [slipperyActive, myCurrentOptionCount]);

  // Reset per-question chaos state when advancing to the next question.
  useEffect(() => {
    setFiftyFiftyElim(null);
    setDisplayOrder(null);
  }, [myQuestionIndexLive]);

  const useChaosPowerUp = useCallback(async (id: PowerUpId) => {
    if (usingPowerUp) return;
    setUsingPowerUp(true);
    try {
      const res = await fetch(`/api/competitive/match/${matchId}/powerup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ powerUpId: id }),
      });
      const data = await res.json();
      if (!res.ok) {
        addChaosToast(`⚠️ ${data?.error || "Couldn't use power-up"}`);
        return;
      }
      if (data.fiftyFifty) setFiftyFiftyElim(data.fiftyFifty);
      const def = POWER_UPS[id];
      if (data.outcome === 'blocked') addChaosToast('🛡️ Blocked by their shield!');
      else if (data.outcome === 'reflected') addChaosToast('🪞 Reflected back at you!');
      else if (def.kind === 'attack') addChaosToast(`${def.icon} ${def.name} launched!`);
      else if (id === 'shield') addChaosToast('🛡️ Shield armed!');
      else if (id === 'reflect') addChaosToast('🪞 Reflect armed!');
      else if (id === 'time-warp') addChaosToast('⏳ TIME WARP! Double points for 5s!');
      else if (id === 'double-points') addChaosToast('⚡ Double points armed!');
      await fetchMatchState();
    } catch {
      addChaosToast("⚠️ Couldn't use power-up");
    } finally {
      setUsingPowerUp(false);
    }
  }, [matchId, usingPowerUp, addChaosToast, fetchMatchState]);

  // Practice-bot power-up use: in chaos vs-AI matches the bot deploys items
  // PROMPTLY as it receives them rather than hoarding, preferring attacks so the
  // player actually feels the chaos. (Hoarding also starved the bot: inventory
  // caps at MAX_INVENTORY, and a full inventory blocks further drops.)
  // Client-driven, like its answers.
  const botIsPlayer1 = !!matchState?.player1IsAI;
  const botIsPlayer2 = !!matchState?.player2IsAI;
  const chaosBotActive = !!(
    isChaosMode &&
    matchState?.status === 'IN_PROGRESS' &&
    matchState?.gameData?.isPracticeMatch &&
    (botIsPlayer1 || botIsPlayer2)
  );
  useEffect(() => {
    if (!chaosBotActive) return;
    const t = setInterval(async () => {
      const st = matchStateRef.current;
      if (!st || st.status !== 'IN_PROGRESS') return;
      // Hold off while a use is in flight and the next poll lands.
      if (Date.now() < botFireLockRef.current) return;

      const botPU = botIsPlayer1 ? st.gameData?.powerUps?.player1 : st.gameData?.powerUps?.player2;
      const inv = botPU?.inventory || [];
      if (inv.length === 0) return;

      // Drop items the server just rejected out of the running for a bit.
      const now = Date.now();
      const usable = inv.filter((id) => (botFailedRef.current.get(id) ?? 0) < now);
      if (usable.length === 0) return;

      // Attacks first — that's what the player actually sees and feels.
      const attacks = usable.filter((id) => POWER_UPS[id]?.kind === 'attack');
      const pool = attacks.length > 0 ? attacks : usable;
      const pick = pool[pool.length - 1]; // newest drop first

      const botId = botIsPlayer1 ? st.player1Id : st.player2Id;
      botFireLockRef.current = now + 5000; // in-flight guard
      try {
        const res = await fetch(`/api/competitive/match/${matchId}/powerup`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ powerUpId: pick, playerId: botId }),
        });
        if (!res.ok) botFailedRef.current.set(pick, Date.now() + 20000);
      } catch {
        /* bot mischief is best-effort */
      }
      // Space consecutive deployments so two items never land at once.
      botFireLockRef.current = Date.now() + 1800 + Math.random() * 1600;
    }, 1000);
    return () => clearInterval(t);
  }, [chaosBotActive, botIsPlayer1, botIsPlayer2, matchId]);

  // Reading & Writing items carry a short passage (or notes, or two texts)
  // above the question, separated by a blank line. Rendered inside the bold,
  // centered question heading, the paragraphs and note bullets ran together
  // on one line. Split the passage off and show it as a left-aligned text
  // block that keeps its line breaks; the last paragraph is the question.
  const splitPassage = (text: string): { passage: string | null; stem: string } => {
    const cut = text.lastIndexOf('\n\n')
    if (cut < 0) return { passage: null, stem: text }
    return { passage: text.slice(0, cut).trim(), stem: text.slice(cut + 2).trim() }
  }

  // Stems, options and explanations all render through the shared rich-text
  // pipeline (CompetitiveRichText → renderRichText): markdown pipe tables,
  // $…$ KaTeX and **bold** come out the same here as on the async, team-match
  // and lobby surfaces. `block` picks a <div> wrapper for stems/explanations
  // (a table is block content) and a <span> for option text.
  const renderPrompt = (text: string, block = false) => {
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
        // fall through to the shared renderer
      }
    }
    return <CompetitiveRichText text={text} inline={!block} />;
  };

  // Auto-schedule the practice bot's next answer. The whole decision — which
  // question, how long it takes (course pacing × item difficulty × item
  // length × bot strength), right or wrong, and the wait while it is Frozen —
  // is planBotMove in bot-pacing.ts; this effect only schedules the fetch.
  useEffect(() => {
    const activeMatch = matchStateRef.current;
    if (!activeMatch || !currentUserId) return;
    const move = planBotMove(activeMatch, currentUserId);
    if (!move) return;

    const timeoutId = setTimeout(async () => {
      try {
        // Submit the bot's answer with its own playerId
        await fetch(`/api/competitive/match/${matchId}/answer`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            questionIndex: move.questionIndex,
            answerIndex: move.answerIndex,
            playerId: move.playerId,
          }),
        });
        // Match state will update via polling
      } catch (error) {
        console.error('Error submitting AI answer:', error);
      }
    }, move.delayMs);

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
    // (Double-submit is already prevented by isSubmitting above + the server's
    // question-index check; the old gameData.player{1,2}AnsweredCurrent guard read
    // fields the server never writes, so it was dead code and has been removed.)

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

      // If the submission failed server-side (e.g. a transient error under load,
      // or a rejected/stale question index), DO NOT render it as a wrong answer —
      // that silently left players stuck on the same question with no score. Surface
      // it and let them re-tap to retry; the next poll will have re-synced state.
      if (!response.ok) {
        let msg = 'Could not submit your answer — tap an option to retry.';
        try {
          const err = await response.json();
          if (err?.error) msg = `Couldn't submit (${err.error}) — tap an option to retry.`;
        } catch { /* non-JSON error body */ }
        console.error('Answer submit failed:', response.status, msg);
        setSubmitError(msg);
        setIsSubmitting(false);
        setSelectedPosition(null);
        return;
      }
      setSubmitError(null);

      const data = await response.json();

      // CHAOS: toast the item this answer earned (server rolls the drop).
      if (typeof data.drop === 'string' && POWER_UPS[data.drop as PowerUpId]) {
        const def = POWER_UPS[data.drop as PowerUpId];
        addChaosToast(`🎁 You got ${def.icon} ${def.name}!`);
      }

      // The correct index for THIS question comes back from the answer POST
      // (the GET no longer leaks it for ranked matches — see #1). Fall back to
      // the question's own answerIndex for AI practice matches, where it's still
      // present client-side.
      const resolvedCorrectIndex: number | null =
        typeof data.correctAnswerIndex === 'number'
          ? data.correctAnswerIndex
          : (currentQuestion?.answerIndex ?? null);

      const isPlayer1 = currentUserId === matchState.player1Id;

      if (data.correct) {
        setFeedback('correct');
        setFeedbackQuestionIndex(playerQuestionIndex);
        // Expose the correct index so multiple-choice can highlight it green
        // (for ranked matches the question object itself no longer carries it).
        if (resolvedCorrectIndex !== null) setCorrectAnswerIndex(resolvedCorrectIndex);

        // Streak + "+N pts" flash. Points earned come from the score delta the
        // server reports (chaos double-points answers correctly show +2).
        setStreak((s) => s + 1);
        const myPrevScore = isPlayer1 ? matchState.player1Score : matchState.player2Score;
        const myNewScore = typeof data.currentScore === 'number'
          ? data.currentScore
          : (data.finalScores ? (isPlayer1 ? data.finalScores.player1 : data.finalScores.player2) : null);
        const earned = typeof myNewScore === 'number' ? myNewScore - myPrevScore : null;
        if (earned && earned > 0) {
          setPointsFlash({ key: Date.now(), points: earned });
          setTimeout(() => setPointsFlash(null), 1600);
        }

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
        setStreak(0);
        setPointsFlash(null);

        // Set sad emotion for the player who answered
        if (isPlayer1) {
          setPlayer1Emotion('sad');
        } else {
          setPlayer2Emotion('sad');
        }

        // Show correct answer in green for 1600ms (from the answer POST response;
        // the question no longer carries answerIndex for ranked matches — #1)
        setCorrectAnswerIndex(resolvedCorrectIndex ?? 0);
        setIsSubmitting(false);

        // Wrong answer + explanation: in PRACTICE matches (vs the client-driven
        // bot, unranked) pause on the question with a "Next" button so the
        // explanation is actually readable. Never in ranked/live play (the
        // opponent keeps racing) and never in ACCURACY_CHALLENGE (the match
        // clock keeps ticking) — those keep the exact 1600ms auto-advance,
        // and the explanation remains available in the post-match review.
        const canHoldForExplanation =
          !!currentQuestion?.explanation &&
          !!matchState.gameData?.isPracticeMatch &&
          matchState.gameMode !== 'ACCURACY_CHALLENGE';

        if (canHoldForExplanation) {
          feedbackHoldRef.current = true;
          setHeldFeedbackIndex(playerQuestionIndex);
          setShowNextButton(true);
          return;
        }

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
      setSubmitError('Network error submitting your answer — tap an option to retry.');
      setIsSubmitting(false);
      setSelectedPosition(null);
    }
  };

  // Ends a wrong-answer explanation hold (practice matches): clears the frozen
  // feedback and lets the already-advanced server state render the next question.
  const advanceAfterFeedback = useCallback(async () => {
    feedbackHoldRef.current = false;
    setHeldFeedbackIndex(null);
    setShowNextButton(false);
    setFeedback(null);
    setFeedbackQuestionIndex(null);
    setSelectedPosition(null);
    setCorrectAnswerIndex(null);
    setPlayer1Emotion('neutral');
    setPlayer2Emotion('neutral');
    await fetchMatchState();
  }, [fetchMatchState]);

  // ---- Presentation-only derivations (hooks must run before early returns) ----
  // Opponent activity: a brief "+1 / ✗" pulse on their avatar whenever their
  // answer history grows. Reads the answer list the GET already forwards.
  const oppAnswersLen = matchState
    ? ((currentUserId === matchState.player1Id ? matchState.gameData?.player2Answers : matchState.gameData?.player1Answers)?.length ?? 0)
    : 0;
  const oppLastCorrect = matchState
    ? !!(currentUserId === matchState.player1Id ? matchState.gameData?.player2Answers : matchState.gameData?.player1Answers)?.[oppAnswersLen - 1]?.correct
    : false;
  const [oppActivity, setOppActivity] = useState<{ key: number; correct: boolean } | null>(null);
  const oppSeenRef = useRef<number | null>(null);
  useEffect(() => {
    if (!currentUserId) return;
    if (oppSeenRef.current !== null && oppAnswersLen > oppSeenRef.current) {
      setOppActivity({ key: Date.now(), correct: oppLastCorrect });
      const t = setTimeout(() => setOppActivity(null), 1400);
      oppSeenRef.current = oppAnswersLen;
      return () => clearTimeout(t);
    }
    oppSeenRef.current = oppAnswersLen;
  }, [oppAnswersLen, oppLastCorrect, currentUserId]);

  // Desktop shortcuts route through the SAME handler as a click, under the
  // same conditions a tile is enabled. Off while any chaos effect is on you,
  // so the keyboard can't sidestep Flip / Slippery / Fog / Ink.
  const hkIsP1 = !!matchState && currentUserId === matchState.player1Id;
  const hkIndex = heldFeedbackIndex ?? (matchState ? (hkIsP1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex) : 0);
  const hkQuestion = matchState?.questions?.[hkIndex];
  const hkFeedbackCurrent = feedback !== null && feedbackQuestionIndex === hkIndex;
  const hkEliminated: number[] = fiftyFiftyElim && fiftyFiftyElim.questionIndex === hkIndex
    ? fiftyFiftyElim.eliminated
    : (myPowerUps?.fiftyFifty && myPowerUps.fiftyFifty.questionIndex === hkIndex ? myPowerUps.fiftyFifty.eliminated : []);
  useAnswerHotkeys(
    matchState?.status === 'IN_PROGRESS' &&
      hkQuestion?.type === 'multiple-choice' &&
      !isSubmitting && !hkFeedbackCurrent && !frozenActive && myActiveEffects.length === 0,
    hkQuestion?.options?.length ?? 0,
    (i) => { if (!hkEliminated.includes(i)) void handleOptionSelect(i); }
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-3 py-4 dark:bg-gray-950 sm:px-4 sm:py-6" aria-busy="true" aria-label="Loading match">
        <div className="mx-auto max-w-3xl space-y-4">
          <div className="h-24 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
          <div className="h-48 animate-pulse rounded-3xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />
          <div className="grid gap-3 sm:grid-cols-2">
            {[0, 1, 2, 3].map(i => <div key={i} className="h-16 animate-pulse rounded-2xl bg-gray-200 dark:bg-gray-800 motion-reduce:animate-none" />)}
          </div>
        </div>
      </div>
    );
  }

  if (!matchState) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 flex items-center justify-center px-4">
        <div className="rounded-3xl border border-card-border bg-card p-8 text-center shadow-sm">
          <p className="text-lg font-semibold text-foreground">Match not found</p>
          <button
            onClick={() => router.push(lobbyPath)}
            className="mt-4 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 font-semibold text-white hover:from-accent-hover hover:to-accent-secondary-hover"
          >
            Back to Competitive
          </button>
        </div>
      </div>
    );
  }

  const isPlayer1 = currentUserId === matchState.player1Id;
  const playerQuestionIndex = isPlayer1 ? matchState.player1QuestionIndex : matchState.player2QuestionIndex;
  // During an explanation hold (practice matches) keep rendering the question
  // that was just answered even though the server has already advanced the
  // index; everywhere else this is exactly the live index.
  const displayQuestionIndex = heldFeedbackIndex ?? playerQuestionIndex;
  const currentQuestion = matchState.questions[displayQuestionIndex];
  // Only show feedback styling when it belongs to the displayed question
  // This prevents the next question's correct answer from flashing green
  // when polling updates matchState before the feedback timeout clears
  const isFeedbackCurrent = feedback !== null && feedbackQuestionIndex === displayQuestionIndex;

  const modeCard = GAME_MODE_CARDS.find(m => m.key === matchState.gameMode) ?? GAME_MODE_CARDS[0];
  const isAccuracy = matchState.gameMode === 'ACCURACY_CHALLENGE';
  const fromSlug = searchParams.get('from');
  const courseName = COMPETITIVE_COURSES.find(c => c.slug === fromSlug)?.name ?? null;
  const me = {
    name: isPlayer1 ? matchState.player1Name : matchState.player2Name,
    avatar: isPlayer1 ? matchState.player1Avatar : matchState.player2Avatar,
    score: isPlayer1 ? matchState.player1Score : matchState.player2Score,
    answers: (isPlayer1 ? matchState.gameData?.player1Answers : matchState.gameData?.player2Answers) || [],
    isAI: isPlayer1 ? matchState.player1IsAI : matchState.player2IsAI,
    mmrBefore: isPlayer1 ? matchState.player1MMRBefore : matchState.player2MMRBefore,
    mmrAfter: isPlayer1 ? matchState.player1MMRAfter : matchState.player2MMRAfter,
    emotion: isPlayer1 ? player1Emotion : player2Emotion,
  };
  const opp = {
    name: isPlayer1 ? matchState.player2Name : matchState.player1Name,
    avatar: isPlayer1 ? matchState.player2Avatar : matchState.player1Avatar,
    score: isPlayer1 ? matchState.player2Score : matchState.player1Score,
    answers: (isPlayer1 ? matchState.gameData?.player2Answers : matchState.gameData?.player1Answers) || [],
    isAI: isPlayer1 ? matchState.player2IsAI : matchState.player1IsAI,
    mmrBefore: isPlayer1 ? matchState.player2MMRBefore : matchState.player1MMRBefore,
    emotion: isPlayer1 ? player2Emotion : player1Emotion,
    questionIndex: isPlayer1 ? matchState.player2QuestionIndex : matchState.player1QuestionIndex,
  };
  const botStrength = matchState.gameData?.aiDifficulty;
  const badgeFor = (isAI: boolean | undefined, mmr: number | undefined) =>
    isAI
      ? { emoji: '🤖', text: `${botStrength ? botStrength[0].toUpperCase() + botStrength.slice(1) : 'Practice'} bot`, className: BOT_BADGE_CLASS }
      : rankBadge(mmr);

  // Results screen
  if (matchState.status === 'COMPLETED') {
    const isWinner = matchState.winnerId === currentUserId;
    const isTie = matchState.winnerId === null;
    const outcome: Outcome = isTie ? 'draw' : isWinner ? 'win' : 'loss';

    const playerMMRBefore = me.mmrBefore;
    const playerMMRAfter = me.mmrAfter;
    const mmrChange = playerMMRAfter && playerMMRBefore ? playerMMRAfter - playerMMRBefore : 0;

    // Get this player's answer history for review
    const playerAnswers = me.answers;

    // Deduplicate: keep only the last answer per questionIndex (player may have seen the same question multiple times due to cycling)
    const answersByQuestion = new Map<number, { questionIndex: number; answerIndex: number; correct: boolean }>();
    for (const a of playerAnswers) {
      answersByQuestion.set(a.questionIndex, a);
    }

    const missedQuestions = Array.from(answersByQuestion.values()).filter(a => !a.correct);
    const totalAnswered = answersByQuestion.size;
    const totalCorrect = Array.from(answersByQuestion.values()).filter(a => a.correct).length;
    const myRawCorrect = playerAnswers.filter(a => a.correct).length;
    const oppRawCorrect = opp.answers.filter(a => a.correct).length;
    const accuracyPct = (n: number, d: number) => (d > 0 ? Math.round((n / d) * 100) : 0);
    const scoreSub = (correct: number, answered: number) =>
      isAccuracy ? `${correct}/${answered} correct · ${accuracyPct(correct, answered)}%` : `${correct}/${answered} correct`;

    const title = isTie ? "It's a Tie!" : isWinner ? 'Victory!' : 'Defeat';
    const subtitle = isTie
      ? 'Dead even. Run it back?'
      : isWinner
        ? `You beat ${opp.name}${opp.name.endsWith('.') ? '' : '.'}`
        : `${opp.name} took this one.`;

    return (
      <div className="min-h-screen bg-gray-50 px-3 py-6 dark:bg-gray-950 sm:px-4 sm:py-10">
        <div className="mx-auto max-w-3xl space-y-6">
          <ResultHero outcome={outcome} title={title} subtitle={subtitle}>
            <FinalScore
              you={{ name: <CosmeticNameplate name={me.name} />, avatar: me.avatar, score: me.score, sub: scoreSub(myRawCorrect, playerAnswers.length), won: isWinner }}
              opponent={{ name: opp.name, avatar: opp.avatar, score: opp.score, sub: scoreSub(oppRawCorrect, opp.answers.length), won: !isTie && !isWinner }}
            />
            <div className="space-y-4 p-4 sm:p-7">
              <div className="flex flex-wrap justify-center gap-2 text-xs font-semibold">
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-subtle px-2.5 py-1 text-accent ring-1 ring-accent-light">
                  <span aria-hidden>{modeCard.icon}</span> {modeCard.title}
                </span>
                {courseName && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300">{courseName}</span>
                )}
                {matchState.gameMode === 'CHAOS' && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300">🎲 Chaos Mode — unranked match (no MMR change)</span>
                )}
                {matchState.gameMode !== 'CHAOS' && matchState.gameData?.isPracticeMatch && mmrChange === 0 && (
                  <span className="rounded-full bg-gray-100 px-2.5 py-1 text-gray-700 dark:bg-gray-800 dark:text-gray-300">Practice match · no MMR change</span>
                )}
              </div>

              <div className={`grid gap-3 ${mmrChange !== 0 ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)]' : ''}`}>
                {/* MMR Change Display */}
                {mmrChange !== 0 && playerMMRBefore && playerMMRAfter && (
                  <RankDelta before={playerMMRBefore} after={playerMMRAfter} />
                )}
                <div className={`grid grid-cols-2 gap-3 ${mmrChange !== 0 ? '' : 'sm:grid-cols-4'}`}>
                  <StatTile label="Correct" value={totalCorrect} sub={`of ${totalAnswered} questions`} />
                  <StatTile label="Accuracy" value={`${accuracyPct(totalCorrect, totalAnswered)}%`} sub="Unique questions" />
                  <StatTile label="Best streak" value={<>{bestStreakOf(playerAnswers) >= 2 && <span aria-hidden className="mr-1">🔥</span>}{bestStreakOf(playerAnswers)}</>} sub="In a row" />
                  <StatTile label="Opponent" value={`${accuracyPct(oppRawCorrect, opp.answers.length)}%`} sub="Their accuracy" />
                </div>
              </div>

              <div className="flex flex-col gap-2 pt-2 sm:flex-row sm:flex-wrap sm:justify-center">
                {matchState.gameData?.lobbyCode ? (
                  <button
                    onClick={() => router.push(`/competitive/lobby/${matchState.gameData?.lobbyCode}`)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-md transition-all hover:from-accent-hover hover:to-accent-secondary-hover"
                  >
                    Return to Lobby <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                ) : (
                  <button
                    onClick={() => router.push(lobbyPath)}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-3 font-bold text-white shadow-md transition-all hover:from-accent-hover hover:to-accent-secondary-hover"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" /> Play again
                  </button>
                )}
                {totalAnswered > 0 && (
                  <button
                    onClick={() => setShowReview(!showReview)}
                    aria-expanded={showReview}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-card-border bg-card px-5 py-3 font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {missedQuestions.length > 0
                      ? <><ClipboardList className="h-4 w-4" aria-hidden="true" /> {showReview ? 'Hide Review' : `Review Mistakes (${missedQuestions.length})`}</>
                      : <><Sparkles className="h-4 w-4" aria-hidden="true" /> {showReview ? 'Hide Review' : 'Review All Questions'}</>}
                  </button>
                )}
                {(matchState.gameData?.lobbyCode || fromSlug) && (
                  <button
                    onClick={() => router.push(matchState.gameData?.lobbyCode ? lobbyPath : '/competitive')}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold text-muted-foreground transition-colors hover:text-accent"
                  >
                    {matchState.gameData?.lobbyCode ? `Back to ${courseName ?? 'Competitive'}` : 'Competitive hub'}
                  </button>
                )}
              </div>
            </div>
          </ResultHero>

          {/* Question Review Section */}
          {showReview && (
            <section className="rounded-3xl border border-card-border bg-card p-4 shadow-sm sm:p-7">
              <h2 className="text-xl font-bold text-foreground">Match review</h2>
              <p className="mb-5 mt-1 text-sm text-muted-foreground">
                You answered {totalCorrect} out of {totalAnswered} unique questions correctly.
                {missedQuestions.length > 0 && ' Review the ones you missed below.'}
              </p>

              <div className="space-y-3">
                {matchState.questions.map((question, qIdx) => {
                  const answer = answersByQuestion.get(qIdx);
                  if (!answer) return null; // Player never saw this question

                  const isMultipleChoice = question.type === 'multiple-choice';
                  const wasCorrect = answer.correct;

                  return (
                    <div key={qIdx} className="rounded-2xl border border-card-border p-4 sm:p-5">
                      <div className="mb-3 flex items-start gap-3">
                        <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl ${
                          wasCorrect ? 'bg-green-600 text-white' : 'bg-red-600 text-white'
                        }`}>
                          {wasCorrect ? <Check className="h-4 w-4" aria-hidden="true" /> : <X className="h-4 w-4" aria-hidden="true" />}
                        </span>
                        <div className="min-w-0 flex-1">
                          <p className="mb-1 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wide text-muted-foreground">
                            Question {qIdx + 1}
                            {question.difficulty && (
                              <span className={`rounded-full px-2 py-0.5 text-[11px] font-semibold normal-case tracking-normal ${
                                question.difficulty === 'easy' ? 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300' :
                                question.difficulty === 'medium' ? 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300' :
                                'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300'
                              }`}>
                                {question.difficulty}
                              </span>
                            )}
                          </p>
                          <div className="overflow-x-auto text-base font-semibold text-foreground">
                            {renderPrompt(question.prompt || question.question || '', true)}
                          </div>
                        </div>
                      </div>

                      {isMultipleChoice && question.options && (
                        <div className="space-y-2 sm:ml-11">
                          {question.options.map((option, optIdx) => {
                            const isUserAnswer = answer.answerIndex === optIdx;
                            const isCorrectAnswer = question.answerIndex === optIdx;
                            return (
                              <div
                                key={optIdx}
                                className={`flex items-center gap-3 rounded-xl border p-2.5 text-sm ${
                                  isCorrectAnswer
                                    ? 'border-green-400 bg-green-50 dark:border-green-700 dark:bg-green-900/20'
                                    : isUserAnswer && !wasCorrect
                                      ? 'border-red-400 bg-red-50 dark:border-red-700 dark:bg-red-900/20'
                                      : 'border-card-border'
                                }`}
                              >
                                <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-black ${
                                  isCorrectAnswer ? 'bg-green-600 text-white'
                                    : isUserAnswer && !wasCorrect ? 'bg-red-600 text-white'
                                      : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200'
                                }`}>
                                  {String.fromCharCode(65 + optIdx)}
                                </span>
                                <div data-qa="review-text" className="min-w-0 flex-1 overflow-x-auto text-foreground">{renderPrompt(option)}</div>
                                {isCorrectAnswer && (
                                  <span className="inline-flex shrink-0 items-center gap-1 text-xs font-bold text-green-700 dark:text-green-400">
                                    <Check className="h-3.5 w-3.5" aria-hidden="true" /> Correct
                                  </span>
                                )}
                                {isUserAnswer && !wasCorrect && (
                                  <span className="shrink-0 text-xs font-bold text-red-700 dark:text-red-400">Your answer</span>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      )}

                      {/* Unit circle answer display */}
                      {!isMultipleChoice && !wasCorrect && (
                        <div className="rounded-xl border border-card-border p-3 text-sm sm:ml-11">
                          <p className="text-foreground">
                            <span className="font-semibold text-red-700 dark:text-red-400">Your answer: </span>
                            {UNIT_CIRCLE_POSITIONS[answer.answerIndex]
                              ? `${UNIT_CIRCLE_POSITIONS[answer.answerIndex].label} (${UNIT_CIRCLE_POSITIONS[answer.answerIndex].x.toFixed(3)}, ${UNIT_CIRCLE_POSITIONS[answer.answerIndex].y.toFixed(3)})`
                              : `Position ${answer.answerIndex}`}
                          </p>
                          <p className="mt-1 text-foreground">
                            <span className="font-semibold text-green-700 dark:text-green-400">Correct answer: </span>
                            {question.answerIndex !== undefined && UNIT_CIRCLE_POSITIONS[question.answerIndex]
                              ? `${UNIT_CIRCLE_POSITIONS[question.answerIndex].label} (${UNIT_CIRCLE_POSITIONS[question.answerIndex].x.toFixed(3)}, ${UNIT_CIRCLE_POSITIONS[question.answerIndex].y.toFixed(3)})`
                              : 'Unknown'}
                          </p>
                        </div>
                      )}

                      {question.explanation && !wasCorrect && (
                        <div className="mt-3 rounded-xl bg-accent-subtle p-3 ring-1 ring-accent-light sm:ml-11">
                          <p className="mb-1 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                            <Lightbulb className="h-4 w-4" aria-hidden="true" /> Explanation
                          </p>
                          <div className="overflow-x-auto text-sm text-foreground">
                            {renderPrompt(question.explanation, true)}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </section>
          )}
        </div>
      </div>
    );
  }

  // Shared progress math for the versus header.
  const totalQuestions = matchState.questions.length || 1;
  const p1Progress = isAccuracy
    ? ((matchState.gameData?.player1Answers?.length || 0) / totalQuestions) * 100
    : (matchState.player1Score / 10) * 100;
  const p2Progress = isAccuracy
    ? ((matchState.gameData?.player2Answers?.length || 0) / totalQuestions) * 100
    : (matchState.player2Score / 10) * 100;
  const p1ProgressLabel = isAccuracy
    ? `${matchState.gameData?.player1Answers?.length || 0}/${matchState.questions.length}`
    : `${matchState.player1Score}/10`;
  const p2ProgressLabel = isAccuracy
    ? `${matchState.gameData?.player2Answers?.length || 0}/${matchState.questions.length}`
    : `${matchState.player2Score}/10`;
  const myAccuracyLabel = (() => {
    const total = me.answers.length;
    const correct = me.answers.filter(a => a.correct).length;
    return total > 0 ? `${Math.round((correct / total) * 100)}%` : '--';
  })();

  return (
    // pb-28 (not pb-24) reserves room for the floating power-up bar once the
    // iPhone safe-area inset pushes it up, so it never covers the answers.
    <div className={`min-h-screen bg-gray-50 px-3 pb-8 dark:bg-gray-950 sm:px-4 ${isChaosMode ? 'pb-28' : ''}`}>
      {/* Chaos Mode HUD extras: drop/attack toasts + floating inventory bar */}
      <ChaosToasts toasts={chaosToasts} />
      {isChaosMode && matchState.status === 'IN_PROGRESS' && (
        <PowerUpBar
          inventory={myPowerUps?.inventory || []}
          shield={myPowerUps?.shield}
          reflect={myPowerUps?.reflect}
          doubleNext={myPowerUps?.doubleNext}
          disabled={usingPowerUp}
          onUse={useChaosPowerUp}
        />
      )}
      <div className="mx-auto max-w-3xl">
        <VersusHeader
          you={{
            name: <CosmeticNameplate name={me.name} />,
            avatar: me.avatar,
            emotion: me.emotion,
            isYou: true,
            badge: badgeFor(me.isAI, me.mmrBefore),
            score: me.score,
            caption: isPlayer1 ? p1ProgressLabel : p2ProgressLabel,
            progress: (isPlayer1 ? p1Progress : p2Progress) / 100,
          }}
          opponent={{
            name: opp.name,
            avatar: opp.avatar,
            emotion: opp.emotion,
            isYou: false,
            badge: badgeFor(opp.isAI, opp.mmrBefore),
            score: opp.score,
            caption: isPlayer1 ? p2ProgressLabel : p1ProgressLabel,
            progress: (isPlayer1 ? p2Progress : p1Progress) / 100,
            activity: oppActivity,
          }}
          center={
            <>
              <ModeChip icon={modeCard.icon} label={modeCard.title} />
              {isAccuracy && accuracyTimer !== null ? (
                <MatchClock remaining={accuracyTimer} total={matchTimeLimitSeconds(matchState.gameData)} />
              ) : (
                <span className="text-xs font-black text-muted-foreground sm:text-sm">VS</span>
              )}
              {isAccuracy && (
                <span className="hidden text-[11px] font-semibold text-muted-foreground sm:block">Accuracy {myAccuracyLabel}</span>
              )}
              {streak >= 2 && (
                <span key={`hud-streak-${streak}`} className="animate-celebration-pop whitespace-nowrap text-[11px] font-bold text-amber-700 dark:text-amber-400 sm:text-xs">
                  🔥 {streak}
                </span>
              )}
            </>
          }
        />

        {isAccuracy && matchState.status === 'IN_PROGRESS' && (
          <p className="mb-3 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
            <Target className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {matchState.questions.length} questions · {formatMinutes(matchTimeLimitSeconds(matchState.gameData))} clock · highest accuracy wins
          </p>
        )}

        {/* Chaos effect layer: flip rotates the whole play area; ink splats
            overlay it. Effects always land — prefers-reduced-motion only cuts
            the animated transition (the flip snaps instead of spinning). */}
        <div className={`relative transition-transform duration-500 motion-reduce:transition-none ${flipActive ? 'rotate-180' : ''} ${shakeActive ? 'chaos-shake' : ''}`}>
          {inkEffect && <InkSplatOverlay effect={inkEffect} now={chaosNow} />}
          {blackoutEffect && <DarkOverlay effect={blackoutEffect} now={chaosNow} intensity={0.85} />}
          {stormEffect && <StormOverlay effect={stormEffect} now={chaosNow} />}
          {freezeEffect && <FrostOverlay effect={freezeEffect} now={chaosNow} />}
          {timeWarpEffect && <TimeWarpOverlay effect={timeWarpEffect} now={chaosNow} />}
          {!currentQuestion && isAccuracy ? (
            <div className="rounded-3xl border border-card-border bg-card p-8 text-center shadow-sm sm:p-12">
              <CheckCircle2 className="mx-auto mb-4 h-14 w-14 text-green-600 dark:text-green-400" aria-hidden="true" />
              <h2 className="mb-1 text-2xl font-bold text-foreground">All questions answered!</h2>
              <p className="text-muted-foreground">Waiting for {opp.name} to finish ({isPlayer1 ? p2ProgressLabel : p1ProgressLabel})…</p>
              <div className="mx-auto mt-5 h-2 max-w-xs overflow-hidden rounded-full bg-gray-200 dark:bg-gray-700">
                <div className="h-full rounded-full bg-gray-500 transition-all duration-500 dark:bg-gray-400" style={{ width: `${Math.min(isPlayer1 ? p2Progress : p1Progress, 100)}%` }} />
              </div>
            </div>
          ) : currentQuestion && (
            <QuestionCard
              key={`q-${displayQuestionIndex}-${currentQuestion.prompt || currentQuestion.question}`}
              questionIndex={displayQuestionIndex}
              counter={isAccuracy ? `Question ${displayQuestionIndex + 1} of ${matchState.questions.length}` : `Question ${displayQuestionIndex + 1}`}
              difficulty={currentQuestion.difficulty}
              chips={currentQuestion.skill ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent-subtle px-2 py-0.5 text-[11px] font-semibold text-accent ring-1 ring-accent-light" title="The SAT skill this question targets">
                  <Target className="h-3 w-3" aria-hidden="true" /> {currentQuestion.skill}
                </span>
              ) : null}
            >
              {/* overflow-x-auto keeps wide KaTeX scrollable instead of blowing out the phone viewport */}
              {(() => {
                const { passage, stem } = splitPassage(currentQuestion.prompt || currentQuestion.question || '')
                return (
                  <>
                    {passage && (
                      <div className={`mb-4 overflow-x-auto rounded-xl bg-gray-50 p-4 text-base leading-relaxed text-foreground dark:bg-gray-800/60 transition-all ${fogActive ? 'blur-sm' : ''}`}>
                        {renderPrompt(passage, true)}
                      </div>
                    )}
                    <div data-qa="question-stem" className={`overflow-x-auto text-lg font-semibold leading-relaxed text-foreground sm:text-xl transition-all ${fogActive ? 'blur-sm' : ''}`} key={currentQuestion.prompt || currentQuestion.question}>
                      {renderPrompt(stem, true)}
                    </div>
                  </>
                )
              })()}

              <div className="mt-4 min-h-8" aria-live="polite">
                {submitError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700 dark:border-red-800 dark:bg-red-900/20 dark:text-red-300">
                    {submitError}
                  </div>
                )}
                {isSubmitting && (
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-accent border-t-transparent" aria-hidden />
                    Submitting answer...
                  </p>
                )}
                {isFeedbackCurrent && (
                  <div className="flex flex-wrap items-center gap-2">
                    <p className={`inline-flex items-center gap-1.5 text-lg font-bold ${
                      feedback === 'correct' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'
                    }`}>
                      {feedback === 'correct'
                        ? <><Check className="h-5 w-5" aria-hidden="true" /> Correct!</>
                        : <><X className="h-5 w-5" aria-hidden="true" /> Incorrect</>}
                    </p>
                    {feedback === 'correct' && pointsFlash && (
                      <span key={pointsFlash.key} className="animate-celebration-pop inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-sm font-bold text-green-800 dark:bg-green-900/40 dark:text-green-300">
                        +{pointsFlash.points} pt{pointsFlash.points === 1 ? '' : 's'}
                      </span>
                    )}
                    {feedback === 'correct' && streak >= 2 && (
                      <span key={`streak-${streak}`} className="animate-celebration-pop inline-flex items-center gap-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-sm font-bold text-amber-800 dark:bg-amber-900/40 dark:text-amber-300">
                        🔥 {streak} in a row
                      </span>
                    )}
                  </div>
                )}
              </div>

              {/* Unit Circle or Multiple Choice */}
              {currentQuestion.type === 'multiple-choice' ? (
                <>
                  <div className={`mt-2 grid gap-2.5 sm:gap-3 ${answerGridClass(currentQuestion.options)}`}>
                    {/* Slippery Answers reorders the DISPLAYED sequence only — `index`
                        is always the question's ORIGINAL option index, so styling and
                        submissions stay correct while buttons jump around. */}
                    {(displayOrder ?? currentQuestion.options?.map((_, i) => i) ?? []).map((index) => {
                      const option = currentQuestion.options?.[index];
                      if (option === undefined) return null;
                      const isSelected = selectedPosition === index;
                      // The correct index is learned from the answer POST response
                      // (correctAnswerIndex state) for ranked matches; fall back to the
                      // question's own answerIndex for AI practice. During live play we
                      // only know it AFTER answering, which is exactly when feedback shows.
                      const knownCorrectIndex = correctAnswerIndex ?? currentQuestion.answerIndex;
                      const isCorrect = knownCorrectIndex !== undefined && index === knownCorrectIndex;
                      const showCorrect = isFeedbackCurrent && isCorrect;
                      const showIncorrect = isFeedbackCurrent && isSelected && !isCorrect;
                      // 50/50: wrong options the server told THIS player to eliminate.
                      const ffElim = fiftyFiftyElim && fiftyFiftyElim.questionIndex === displayQuestionIndex
                        ? fiftyFiftyElim.eliminated
                        : (myPowerUps?.fiftyFifty && myPowerUps.fiftyFifty.questionIndex === displayQuestionIndex
                            ? myPowerUps.fiftyFifty.eliminated
                            : []);
                      const isEliminated = ffElim.includes(index);
                      const state: AnswerState = showCorrect ? 'correct'
                        : showIncorrect ? 'incorrect'
                        : isEliminated ? 'eliminated'
                        : isSelected ? 'selected'
                        : 'idle';

                      return (
                        <AnswerTile
                          key={index}
                          index={index}
                          letter={String.fromCharCode(65 + index)}
                          state={state}
                          onClick={() => handleOptionSelect(index)}
                          disabled={isSubmitting || isFeedbackCurrent || isEliminated || frozenActive}
                        >
                          {renderPrompt(option)}
                        </AnswerTile>
                      );
                    })}
                  </div>

                  {isFeedbackCurrent && currentQuestion.explanation && (
                    <div className="mt-5 rounded-2xl bg-accent-subtle p-4 ring-1 ring-accent-light">
                      <p className="mb-2 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                        <Lightbulb className="h-4 w-4" aria-hidden="true" />
                        Explanation
                      </p>
                      <div className="overflow-x-auto text-sm text-foreground">
                        {renderPrompt(currentQuestion.explanation, true)}
                      </div>
                      {showNextButton && (
                        <button
                          onClick={advanceAfterFeedback}
                          className="mt-4 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-secondary px-6 py-2.5 font-semibold text-white hover:from-accent-hover hover:to-accent-secondary-hover"
                        >
                          Next question
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </button>
                      )}
                    </div>
                  )}
                </>
              ) : (
                <div className="mt-2 flex justify-center">
                  <CompetitiveUnitCircle
                    positions={UNIT_CIRCLE_POSITIONS}
                    onPositionClick={handlePositionClick}
                    selectedPosition={selectedPosition}
                    correctPosition={
                      correctAnswerIndex !== null ? correctAnswerIndex :
                      (feedback === 'correct' ? selectedPosition : null)
                    }
                    showFeedback={isFeedbackCurrent}
                    disabled={isSubmitting || frozenActive}
                  />
                </div>
              )}
            </QuestionCard>
          )}
        </div>
        {/* end chaos effect layer */}
      </div>
    </div>
  );
}
