/**
 * Entrance Quiz — Concavity & Inflection Points (AP Calculus AB)
 * 14 questions covering all 7 lesson parts (2 per part).
 */
import type { EntranceQuizQuestion } from './moles-molar-mass'

const questions: EntranceQuizQuestion[] = [
  { id: 'cip-ent-1a', question: 'A function $f$ is concave up on an interval if:', options: ['$f\'(x) > 0$', '$f\'\'(x) > 0$', '$f\'\'(x) < 0$', '$f(x) > 0$'], correctIndex: 1, explanation: 'Concave up $\\iff$ $f\'\'(x) > 0$ (the slope $f\'$ is increasing).', partNumber: 1, partTitle: 'Understanding Concavity' },
  { id: 'cip-ent-1b', question: 'For $f(x) = x^3$, $f$ is concave down on:', options: ['$(-\\infty, \\infty)$', '$(0, \\infty)$', '$(-\\infty, 0)$', 'Nowhere'], correctIndex: 2, explanation: '$f\'\'(x) = 6x < 0$ when $x < 0$.', partNumber: 1, partTitle: 'Understanding Concavity' },
  { id: 'cip-ent-2a', question: 'If $f\'(c) = 0$ and $f\'\'(c) > 0$, then $x = c$ is:', options: ['A local maximum', 'A local minimum', 'An inflection point', 'Not a critical point'], correctIndex: 1, explanation: 'Second Derivative Test: $f\'(c)=0$ with $f\'\'(c)>0 \\Rightarrow$ local min.', partNumber: 2, partTitle: 'The Second Derivative Test for Extrema' },
  { id: 'cip-ent-2b', question: 'For $f(x) = x^4$ at $x = 0$, $f\'(0) = 0$ and $f\'\'(0) = 0$. The Second Derivative Test:', options: ['Confirms a local max', 'Confirms a local min', 'Is inconclusive', 'Confirms an inflection point'], correctIndex: 2, explanation: 'When $f\'\'(c) = 0$, the test is inconclusive — but $x^4$ does have a min at $0$ (use 1st derivative test).', partNumber: 2, partTitle: 'The Second Derivative Test for Extrema' },
  { id: 'cip-ent-3a', question: 'An inflection point is where:', options: ['$f\'(x) = 0$', '$f\'\'(x) = 0$', 'Concavity changes sign', '$f(x) = 0$'], correctIndex: 2, explanation: 'Inflection point = a point where concavity actually changes sign (often where $f\'\'$ changes sign).', partNumber: 3, partTitle: 'Complete Curve Sketching Framework' },
  { id: 'cip-ent-3b', question: 'For $f(x) = x^3 - 3x$, the inflection point is at:', options: ['$x = 1$', '$x = -1$', '$x = 0$', 'No inflection point'], correctIndex: 2, explanation: '$f\'\'(x) = 6x$, sign changes at $x = 0$.', partNumber: 3, partTitle: 'Complete Curve Sketching Framework' },
  { id: 'cip-ent-4a', question: 'If the graph of $f\'(x)$ is decreasing on an interval, then $f$ is:', options: ['Increasing', 'Decreasing', 'Concave up', 'Concave down'], correctIndex: 3, explanation: '$f\'$ decreasing $\\iff f\'\' < 0 \\iff f$ concave down.', partNumber: 4, partTitle: 'Reading Derivative Graphs' },
  { id: 'cip-ent-4b', question: 'If the graph of $f\'(x)$ has a local minimum at $x = 2$, then $f$ has:', options: ['A local minimum at $x = 2$', 'A local maximum at $x = 2$', 'An inflection point at $x = 2$', 'A vertical tangent at $x = 2$'], correctIndex: 2, explanation: '$f\'$ minimum $\\Rightarrow f\'\'$ changes sign (− to +) $\\Rightarrow$ inflection in $f$.', partNumber: 4, partTitle: 'Reading Derivative Graphs' },
  { id: 'cip-ent-5a', question: 'A particle has position $s(t)$. Its acceleration corresponds to:', options: ['$s(t)$', '$s\'(t)$', '$s\'\'(t)$', '$\\int s(t)\\,dt$'], correctIndex: 2, explanation: 'Velocity $= s\'$, acceleration $= s\'\'$.', partNumber: 5, partTitle: 'Position, Velocity, Acceleration & Concavity' },
  { id: 'cip-ent-5b', question: 'When velocity and acceleration have the SAME sign, the particle is:', options: ['Slowing down', 'Speeding up', 'At rest', 'Changing direction'], correctIndex: 1, explanation: 'Same sign $\\Rightarrow$ speed increasing (speeding up). Opposite signs $\\Rightarrow$ slowing down.', partNumber: 5, partTitle: 'Position, Velocity, Acceleration & Concavity' },
  { id: 'cip-ent-6a', question: 'For an optimization problem, after finding $f\'(c) = 0$, the Second Derivative Test confirms a maximum when:', options: ['$f\'\'(c) > 0$', '$f\'\'(c) < 0$', '$f\'\'(c) = 0$', '$f(c) > 0$'], correctIndex: 1, explanation: 'Concave down at the critical point indicates a local maximum.', partNumber: 6, partTitle: 'Connecting Concavity to Optimization' },
  { id: 'cip-ent-6b', question: 'A box has volume $V(x) = x(10-2x)^2$ for $0 < x < 5$. To find the maximum volume, you should:', options: ['Set $V(x) = 0$', 'Set $V\'(x) = 0$ and check $V\'\'$', 'Set $V\'\'(x) = 0$', 'Take the average of the endpoints'], correctIndex: 1, explanation: 'Standard optimization: critical points from $V\' = 0$, then verify max with $V\'\' < 0$ or sign analysis.', partNumber: 6, partTitle: 'Connecting Concavity to Optimization' },
  { id: 'cip-ent-7a', question: 'In an AP justification, to claim $f$ has an inflection point at $x = c$, you must say:', options: ['$f\'\'(c) = 0$', '$f\'\'$ changes sign at $x = c$', '$f\'(c) = 0$', '$f(c)$ is defined'], correctIndex: 1, explanation: 'Inflection requires sign change of $f\'\'$ — not merely $f\'\'(c) = 0$.', partNumber: 7, partTitle: 'AP Free Response Justifications' },
  { id: 'cip-ent-7b', question: 'On the AP exam, a complete justification for "concave up on $(a,b)$" is:', options: ['"$f\'(x) > 0$ on $(a,b)$"', '"$f\'\'(x) > 0$ on $(a,b)$"', '"$f(x) > 0$ on $(a,b)$"', '"$f$ is increasing on $(a,b)$"'], correctIndex: 1, explanation: 'Concavity is determined by the sign of the second derivative.', partNumber: 7, partTitle: 'AP Free Response Justifications' },
]

export function generateEntranceQuiz(): EntranceQuizQuestion[] { return [...questions].sort(() => Math.random() - 0.5) }
export function getEntranceQuizParts(): { partNumber: number; partTitle: string }[] {
  return [
    { partNumber: 1, partTitle: 'Understanding Concavity' },
    { partNumber: 2, partTitle: 'The Second Derivative Test for Extrema' },
    { partNumber: 3, partTitle: 'Complete Curve Sketching Framework' },
    { partNumber: 4, partTitle: 'Reading Derivative Graphs' },
    { partNumber: 5, partTitle: 'Position, Velocity, Acceleration & Concavity' },
    { partNumber: 6, partTitle: 'Connecting Concavity to Optimization' },
    { partNumber: 7, partTitle: 'AP Free Response Justifications' },
  ]
}
